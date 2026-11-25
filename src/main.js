import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const DATA = window.SITE_DATA;
const GEO = DATA.geo;
const [CX, CZ] = DATA.center;
const [BX0, BY0, BX1, BY1] = DATA.bounds;
const TYPES = DATA.types;
const ROADS = DATA.roads;
const WALK_ONLY = new Set(['path', 'footway', 'steps', 'pedestrian']);

const $ = (s) => document.querySelector(s);
const toW = (x, y, h = 0) => new THREE.Vector3(x - CX, h, y - CZ);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const geoToLocal = (lat, lon) => [(lon - GEO.lon0) * GEO.kx, -(lat - GEO.lat0) * GEO.ky];

function hash01(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 10000) / 10000;
}
function fmtDist(m) {
  return m < 1000 ? `${Math.max(5, Math.round(m / 5) * 5)} m` : `${(m / 1000).toFixed(1)} km`;
}
function fmtTime(m, mode) {
  const min = m / 1000 / (mode === 'walk' ? DATA.walkKmh : DATA.driveKmh) * 60;
  return min < 1 ? '< 1 min' : `${Math.round(min)} min`;
}
function polyArea(poly) {
  let s = 0;
  for (let i = 0; i < poly.length; i++) { const [x, y] = poly[i], [x2, y2] = poly[(i + 1) % poly.length]; s += x * y2 - x2 * y; }
  return Math.abs(s / 2);
}
function fmtArea(m2) { return m2 >= 10000 ? `≈ ${(m2 / 10000).toFixed(1)} ha` : `≈ ${Math.round(m2 / 10) * 10} m²`; }
function pointInPoly(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function closestOnPoly(x, y, poly) {
  let best = null;
  for (let i = 0; i < poly.length; i++) {
    const [ax, ay] = poly[i], [bx, by] = poly[(i + 1) % poly.length];
    const dx = bx - ax, dy = by - ay;
    const t = clamp(((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy || 1), 0, 1);
    const px = ax + t * dx, py = ay + t * dy, d = Math.hypot(x - px, y - py);
    if (!best || d < best.d) best = { x: px, y: py, d };
  }
  return best;
}

/* ================================================================
 * Road graph + routing
 * ================================================================ */
function segIntersect(p, p2, q, q2) {
  const rx = p2[0] - p[0], ry = p2[1] - p[1], sx = q2[0] - q[0], sy = q2[1] - q[1];
  const den = rx * sy - ry * sx;
  if (Math.abs(den) < 1e-9) return null;
  const qpx = q[0] - p[0], qpy = q[1] - p[1];
  const t = (qpx * sy - qpy * sx) / den, u = (qpx * ry - qpy * rx) / den;
  const e = 1e-6;
  if (t < -e || t > 1 + e || u < -e || u > 1 + e) return null;
  return { t, u };
}
function buildGraph(roads) {
  const segs = [];
  roads.forEach((r, ri) => {
    for (let i = 0; i < r.points.length - 1; i++) segs.push({ a: r.points[i], b: r.points[i + 1], road: ri, cuts: [0, 1] });
  });
  // bucket segments on a grid so crossing checks stay fast
  const CELL = 60, grid = new Map();
  segs.forEach((s, i) => {
    const x0 = Math.floor(Math.min(s.a[0], s.b[0]) / CELL), x1 = Math.floor(Math.max(s.a[0], s.b[0]) / CELL);
    const y0 = Math.floor(Math.min(s.a[1], s.b[1]) / CELL), y1 = Math.floor(Math.max(s.a[1], s.b[1]) / CELL);
    for (let gx = x0; gx <= x1; gx++) for (let gy = y0; gy <= y1; gy++) {
      const k = `${gx},${gy}`;
      if (!grid.has(k)) grid.set(k, []);
      grid.get(k).push(i);
    }
  });
  const seen = new Set();
  for (const list of grid.values()) {
    for (let a = 0; a < list.length; a++) for (let b = a + 1; b < list.length; b++) {
      const i = Math.min(list[a], list[b]), j = Math.max(list[a], list[b]);
      const key = i * 100000 + j;
      if (seen.has(key)) continue;
      seen.add(key);
      const hit = segIntersect(segs[i].a, segs[i].b, segs[j].a, segs[j].b);
      if (hit) { segs[i].cuts.push(hit.t); segs[j].cuts.push(hit.u); }
    }
  }
  const nodeMap = new Map(), nodes = [], edges = [];
  const getNode = (x, y) => {
    const k = `${Math.round(x * 2)},${Math.round(y * 2)}`;
    let n = nodeMap.get(k);
    if (!n) { n = { id: nodes.length, x, y, adj: [], w: 0 }; nodeMap.set(k, n); nodes.push(n); }
    return n;
  };
  for (const s of segs) {
    const cuts = [...new Set(s.cuts.map((t) => clamp(t, 0, 1)))].sort((a, b) => a - b);
    for (let k = 0; k < cuts.length - 1; k++) {
      const t0 = cuts[k], t1 = cuts[k + 1];
      if (t1 - t0 < 1e-6) continue;
      const a = getNode(lerp(s.a[0], s.b[0], t0), lerp(s.a[1], s.b[1], t0));
      const b = getNode(lerp(s.a[0], s.b[0], t1), lerp(s.a[1], s.b[1], t1));
      if (a === b) continue;
      const r = roads[s.road];
      const e = { id: edges.length, a: a.id, b: b.id, len: Math.hypot(b.x - a.x, b.y - a.y), road: s.road, walkOnly: WALK_ONLY.has(r.kind) };
      edges.push(e); a.adj.push(e); b.adj.push(e);
      a.w = Math.max(a.w, r.width); b.w = Math.max(b.w, r.width);
    }
  }
  return { nodes, edges };
}
const G = buildGraph(ROADS);

function projectToGraph(x, y, mode = 'walk') {
  let best = null;
  for (const e of G.edges) {
    if (mode === 'drive' && e.walkOnly) continue;
    const A = G.nodes[e.a], B = G.nodes[e.b];
    const dx = B.x - A.x, dy = B.y - A.y;
    const t = clamp(((x - A.x) * dx + (y - A.y) * dy) / (dx * dx + dy * dy), 0, 1);
    const px = A.x + t * dx, py = A.y + t * dy;
    const d = Math.hypot(x - px, y - py);
    if (!best || d < best.d) best = { e, t, x: px, y: py, d };
  }
  return best;
}

const TURN_PENALTY = 15;
function shortestPath(pa, pb, mode) {
  const N = G.nodes.length, S = N, T = N + 1;
  const extra = new Map();
  const addV = (from, to, len, road) => { if (!extra.has(from)) extra.set(from, []); extra.get(from).push({ to, len, road }); };
  addV(S, pa.e.a, pa.t * pa.e.len, pa.e.road);
  addV(S, pa.e.b, (1 - pa.t) * pa.e.len, pa.e.road);
  addV(pb.e.a, T, pb.t * pb.e.len, pb.e.road);
  addV(pb.e.b, T, (1 - pb.t) * pb.e.len, pb.e.road);
  if (pa.e === pb.e) addV(S, T, Math.abs(pa.t - pb.t) * pa.e.len, pa.e.road);

  // binary-heap Dijkstra
  const dist = new Float64Array(N + 2).fill(Infinity);
  const prev = new Int32Array(N + 2).fill(-1);
  const prevRoad = new Int32Array(N + 2).fill(-1);
  const done = new Uint8Array(N + 2);
  const heap = [];
  const push = (d, v) => {
    heap.push([d, v]);
    let i = heap.length - 1;
    while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; }
  };
  const pop = () => {
    const top = heap[0], last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1;
        let m = i;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === i) break;
        [heap[m], heap[i]] = [heap[i], heap[m]]; i = m;
      }
    }
    return top;
  };
  dist[S] = 0; push(0, S);
  while (heap.length) {
    const [d, u] = pop();
    if (done[u]) continue;
    done[u] = 1;
    if (u === T) break;
    const relax = (v, len, road) => {
      const c = d + len + (prevRoad[u] !== -1 && prevRoad[u] !== road && ROADS[prevRoad[u]].name !== ROADS[road].name ? TURN_PENALTY : 0);
      if (c < dist[v]) { dist[v] = c; prev[v] = u; prevRoad[v] = road; push(c, v); }
    };
    if (u < N) for (const e of G.nodes[u].adj) { if (mode === 'drive' && e.walkOnly) continue; relax(e.a === u ? e.b : e.a, e.len, e.road); }
    const ex = extra.get(u);
    if (ex) for (const x of ex) relax(x.to, x.len, x.road);
  }
  if (!isFinite(dist[T])) return null;
  const ids = [];
  for (let v = T; v !== -1; v = prev[v]) ids.push(v);
  ids.reverse();
  const pts = ids.map((id) => (id === S ? [pa.x, pa.y] : id === T ? [pb.x, pb.y] : [G.nodes[id].x, G.nodes[id].y]));
  const roads = ids.slice(1).map((id) => prevRoad[id]);
  const P = [pts[0]], R = [];
  let length = 0;
  for (let i = 1; i < pts.length; i++) {
    const last = P[P.length - 1];
    const dd = Math.hypot(pts[i][0] - last[0], pts[i][1] - last[1]);
    if (dd < 0.01) continue;
    P.push(pts[i]); R.push(roads[i - 1]); length += dd;
  }
  return { points: P, roads: R, length };
}

const COMPASS = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
const compassOf = (dx, dy) => COMPASS[((Math.round(((Math.atan2(dx, -dy) * 180) / Math.PI) / 45) % 8) + 8) % 8];
const turnAngle = (p, d) => (Math.atan2(p[0] * d[1] - p[1] * d[0], p[0] * d[0] + p[1] * d[1]) * 180) / Math.PI;

function buildSteps(path, fromName, toName) {
  const legs = [];
  for (let i = 0; i < path.roads.length; i++) {
    const [x0, y0] = path.points[i], [x1, y1] = path.points[i + 1];
    const len = Math.hypot(x1 - x0, y1 - y0);
    const dir = [(x1 - x0) / len, (y1 - y0) / len];
    const name = ROADS[path.roads[i]].name;
    const last = legs[legs.length - 1];
    // Same road name and no real turn: keep going. Very short pieces also fold into the leg.
    if (last && ((last.name === name && Math.abs(turnAngle(last.end, dir)) < 35) || len < 4)) { last.len += len; last.end = dir; continue; }
    legs.push({ name, len, start: dir, end: dir, at: [x0, y0] });
  }
  const steps = [{ icon: 'start', text: `Start at ${fromName}`, dist: '' }];
  legs.forEach((leg, i) => {
    const on = leg.name ? ` on ${leg.name}` : '';
    const onto = leg.name ? ` onto ${leg.name}` : '';
    if (i === 0) { steps.push({ icon: 'straight', text: `Head ${compassOf(...leg.start)}${on}`, dist: fmtDist(leg.len), len: leg.len, at: leg.at }); return; }
    const ang = turnAngle(legs[i - 1].end, leg.start);
    let icon = 'straight', text = `Continue${onto || ' straight'}`;
    if (Math.abs(ang) > 150) { icon = 'uturn'; text = `Make a U-turn${onto}`; }
    else if (ang > 30) { icon = 'right'; text = `Turn right${onto}`; }
    else if (ang < -30) { icon = 'left'; text = `Turn left${onto}`; }
    else if (ang > 12) { icon = 'right'; text = `Keep right${onto}`; }
    else if (ang < -12) { icon = 'left'; text = `Keep left${onto}`; }
    steps.push({ icon, text, dist: fmtDist(leg.len), len: leg.len, at: leg.at });
  });
  steps.push({ icon: 'end', text: `Arrive at ${toName}`, dist: '' });
  return steps;
}

/* ================================================================
 * Scene
 * ================================================================ */
const canvas = $('#scene');
const isTouch = matchMedia('(pointer: coarse)').matches;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const SKY = new THREE.Color('#cfe2ee');
scene.background = SKY;
scene.fog = new THREE.Fog(SKY, 2600, 6500);

const camera = new THREE.PerspectiveCamera(45, 1, 2, 9000);
const controls = new MapControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.12;
controls.screenSpacePanning = false;
controls.minDistance = 25;
controls.maxDistance = 2800;
controls.maxPolarAngle = 1.25;
controls.zoomToCursor = true;

scene.add(new THREE.HemisphereLight(0xffffff, 0x9aa88a, 1.5));
const sun = new THREE.DirectionalLight(0xfff4e0, 2.3);
sun.position.set(-500, 900, 450);
sun.castShadow = true;
sun.shadow.mapSize.set(isTouch ? 2048 : 4096, isTouch ? 2048 : 4096);
Object.assign(sun.shadow.camera, { left: -700, right: 700, top: 700, bottom: -700, near: 100, far: 2500 });
sun.shadow.bias = -0.0005;
sun.shadow.normalBias = 0.6;
scene.add(sun, sun.target);

const matCache = new Map();
function mat(color, opts = {}) {
  const k = color + JSON.stringify(opts);
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: 0.88, metalness: 0, ...opts }));
  return matCache.get(k);
}
function shapeFrom(poly) {
  const s = new THREE.Shape();
  poly.forEach(([x, y], i) => (i ? s.lineTo(x - CX, -(y - CZ)) : s.moveTo(x - CX, -(y - CZ))));
  return s;
}
function slab(poly, depth, color, y = 0) {
  const g = new THREE.ExtrudeGeometry(shapeFrom(poly), { depth, bevelEnabled: false });
  g.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(g, mat(color));
  m.position.y = y;
  m.receiveShadow = true;
  return m;
}

// Ground and land use
const ground = new THREE.Mesh(new THREE.PlaneGeometry(12000, 12000).rotateX(-Math.PI / 2), mat('#cbd9bd'));
ground.receiveShadow = true;
scene.add(ground);
for (const a of DATA.areas || []) scene.add(slab(a.polygon, 0.06, a.kind === 'industrial' ? '#e3e6df' : '#e9e2d4'));

const pickables = [];
const labels = [];

/* ---------- Labels ---------- */
const LABEL_PX = 22;
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
function makeLabel(text, { bg = 'rgba(255,255,255,0.94)', color = '#0f172a', border = 'rgba(15,23,42,0.18)', dot = null } = {}) {
  const scale = 3, fs = 13 * scale, padX = 8 * scale, h = LABEL_PX * scale;
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  const font = `600 ${fs}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
  ctx.font = font;
  const dotW = dot ? 12 * scale : 0;
  const w = Math.ceil(ctx.measureText(text).width + padX * 2 + dotW);
  c.width = w; c.height = h + 2 * scale;
  ctx.font = font;
  roundRect(ctx, 1, 1, w - 2, h - 2, h / 2 - 1);
  ctx.fillStyle = bg; ctx.fill();
  ctx.lineWidth = scale; ctx.strokeStyle = border; ctx.stroke();
  if (dot) { ctx.fillStyle = dot; ctx.beginPath(); ctx.arc(padX + 3 * scale, h / 2, 4 * scale, 0, Math.PI * 2); ctx.fill(); }
  ctx.fillStyle = color; ctx.textBaseline = 'middle';
  ctx.fillText(text, padX + dotW, h / 2 + scale);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, depthWrite: false, sizeAttenuation: false, transparent: true }));
  sp.center.set(0.5, 0);
  sp.renderOrder = 20;
  sp.userData.pxW = (LABEL_PX + 2) * (c.width / c.height);
  sp.userData.pxH = LABEL_PX + 2;
  return sp;
}
function registerLabel(sprite, priority, opts = {}) {
  const L = { sprite, priority, minDist: opts.minDist ?? Infinity, key: opts.key };
  labels.push(L);
  scene.add(sprite);
  return L;
}

/* ---------- Ribbons (water, route) ---------- */
function ribbon(points, width, y, material, uvPeriod = 1e9, step = 0.015) {
  const pos = [], uv = [], idx = [];
  let cum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i], [x1, y1] = points[i + 1];
    const len = Math.hypot(x1 - x0, y1 - y0);
    if (len < 1e-6) continue;
    const dx = (x1 - x0) / len, dy = (y1 - y0) / len, nx = (-dy * width) / 2, ny = (dx * width) / 2;
    const ext0 = i > 0 ? width / 2 : 0, ext1 = i < points.length - 2 ? width / 2 : 0;
    const ax = x0 - dx * ext0, ay = y0 - dy * ext0, bx = x1 + dx * ext1, by = y1 + dy * ext1;
    const yy = y + (i % 8) * step, b = pos.length / 3;
    const u0 = (cum - ext0) / uvPeriod, u1 = (cum + len + ext1) / uvPeriod;
    for (const [px, py] of [[ax + nx, ay + ny], [ax - nx, ay - ny], [bx + nx, by + ny], [bx - nx, by - ny]]) pos.push(px - CX, yy, py - CZ);
    uv.push(u0, 1, u0, 0, u1, 1, u1, 0);
    idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3);
    cum += len;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, material);
  m.renderOrder = 5;
  return m;
}
{
  const waterMat = new THREE.MeshStandardMaterial({ color: '#5bb8ea', roughness: 0.25, metalness: 0.1 });
  for (const w of DATA.water || []) {
    const bank = ribbon(w.points, w.width + 3, 0.04, mat('#b9cfa6'), 1e9, 0);
    const m = ribbon(w.points, w.width, 0.09, waterMat, 1e9, 0);
    bank.receiveShadow = m.receiveShadow = true;
    scene.add(bank, m);
  }
}

/* ---------- Roads (merged into one mesh) ---------- */
{
  const parts = [];
  const o = new THREE.Object3D();
  for (const e of G.edges) {
    const A = G.nodes[e.a], B = G.nodes[e.b];
    const g = new THREE.BoxGeometry(e.len, 0.3, ROADS[e.road].width);
    o.position.copy(toW((A.x + B.x) / 2, (A.y + B.y) / 2, 0.15));
    o.rotation.set(0, -Math.atan2(B.y - A.y, B.x - A.x), 0);
    o.updateMatrix();
    g.applyMatrix4(o.matrix);
    parts.push(g);
  }
  for (const n of G.nodes) {
    if (n.adj.length < 2 && n.w < 7) continue;
    const g = new THREE.CylinderGeometry(n.w / 2, n.w / 2, 0.3, 14);
    g.translate(n.x - CX, 0.15, n.y - CZ);
    parts.push(g);
  }
  const roadMesh = new THREE.Mesh(mergeGeometries(parts.map((g) => (g.index ? g.toNonIndexed() : g))), mat('#555b63'));
  roadMesh.receiveShadow = true;
  scene.add(roadMesh);
  parts.forEach((g) => g.dispose());

  // dashed centre lines on wider roads
  const dashes = [];
  for (const e of G.edges) {
    if (ROADS[e.road].width < 7) continue;
    const A = G.nodes[e.a], B = G.nodes[e.b];
    for (let s = 5; s < e.len - 5; s += 9) {
      const t = s / e.len;
      dashes.push({ x: lerp(A.x, B.x, t), y: lerp(A.y, B.y, t), rot: -Math.atan2(B.y - A.y, B.x - A.x) });
    }
  }
  const im = new THREE.InstancedMesh(new THREE.BoxGeometry(4, 0.04, 0.35), new THREE.MeshBasicMaterial({ color: '#f5f5f0' }), Math.max(1, dashes.length));
  dashes.forEach((d, i) => { o.position.copy(toW(d.x, d.y, 0.32)); o.rotation.set(0, d.rot, 0); o.updateMatrix(); im.setMatrixAt(i, o.matrix); });
  im.count = dashes.length;
  scene.add(im);

  // one label per named road, on its longest straight piece
  const byName = new Map();
  for (const e of G.edges) {
    const nm = ROADS[e.road].name;
    if (!nm) continue;
    if (!byName.has(nm) || e.len > byName.get(nm).len) byName.set(nm, e);
  }
  for (const [nm, e] of byName) {
    const A = G.nodes[e.a], B = G.nodes[e.b];
    const sp = makeLabel(nm, { bg: 'rgba(30,41,59,0.86)', color: '#f8fafc', border: 'rgba(255,255,255,0.25)' });
    sp.position.copy(toW((A.x + B.x) / 2, (A.y + B.y) / 2, 1));
    registerLabel(sp, 15, { minDist: 1400 });
  }
}

/* ---------- Buildings ---------- */
function stripeTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 64, 64);
  ctx.fillStyle = 'rgba(0,0,0,0.10)';
  for (let x = 0; x < 64; x += 8) ctx.fillRect(x, 0, 3, 64);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1 / 8, 1 / 8);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}
const roofTex = stripeTexture();
const roofMats = {}, wallMats = {};
const buildings = new Map();
const buildingName = (b) => b.name || `Building ${b.id.replace(/^b/, '')}`;
for (const b of DATA.buildings) {
  const t = TYPES[b.type] || TYPES.shed;
  roofMats[b.type] ??= new THREE.MeshStandardMaterial({ color: t.roof, map: b.type === 'house' ? null : roofTex, roughness: 0.8 });
  wallMats[b.type] ??= new THREE.MeshStandardMaterial({ color: t.wall, roughness: 0.9 });
  const H = lerp(t.height[0], t.height[1], hash01(b.id));
  const g = new THREE.ExtrudeGeometry(shapeFrom(b.poly), { depth: H, bevelEnabled: false });
  g.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(g, [roofMats[b.type], wallMats[b.type]]);
  m.castShadow = m.receiveShadow = true;
  m.userData.ref = { kind: 'building', id: b.id };
  scene.add(m);
  if (b.type !== 'house') pickables.push(m);
  const cx = b.poly.reduce((s, p) => s + p[0], 0) / b.poly.length;
  const cy = b.poly.reduce((s, p) => s + p[1], 0) / b.poly.length;
  const rec = { b, t, mesh: m, height: H, center: [cx, cy], area: polyArea(b.poly) };
  if (b.name) {
    const sp = makeLabel(b.name, { dot: t.roof });
    sp.position.copy(toW(cx, cy, H + 2));
    rec.label = registerLabel(sp, 45, { minDist: 2000, key: `building:${b.id}` });
  }
  buildings.set(b.id, rec);
}

/* ---------- Place pins ---------- */
function letterSprite(letter, size = 4.6) {
  const c = document.createElement('canvas'); c.width = c.height = 96;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.font = 'bold 60px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(letter, 48, 54);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sp.scale.set(size, size, 1); sp.renderOrder = 30;
  return sp;
}
function makePin(color, letter) {
  const g = new THREE.Group();
  const head = new THREE.Group();
  const stem = new THREE.Mesh(new THREE.ConeGeometry(1.6, 7, 16).rotateX(Math.PI), mat(color, { roughness: 0.4 }));
  stem.position.y = 3.5;
  const ball = new THREE.Mesh(new THREE.SphereGeometry(3, 24, 16), mat(color, { roughness: 0.35 }));
  ball.position.y = 8.5; ball.castShadow = true;
  head.add(stem, ball);
  if (letter) { const sp = letterSprite(letter); sp.position.y = 8.5; head.add(sp); }
  const ring = new THREE.Mesh(new THREE.RingGeometry(2.2, 3.4, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, depthWrite: false }));
  ring.position.y = 0.6;
  g.add(head, ring);
  g.userData.head = head;
  g.userData.ring = ring;
  scene.add(g);
  return g;
}
const scaledPins = [];
const POI_COLORS = { wings: '#dc2626', company: '#2563eb', landmark: '#9333ea' };
const pois = new Map();
for (const p of DATA.pois || []) {
  const pin = makePin(POI_COLORS[p.kind] || '#475569', p.kind === 'wings' ? 'W' : '');
  pin.position.copy(toW(p.at[0], p.at[1]));
  pin.traverse((o) => { if (o.isMesh) { o.userData.ref = { kind: 'poi', id: p.id }; pickables.push(o); } });
  scaledPins.push(pin);
  const sp = makeLabel(p.name, { bg: p.kind === 'wings' ? 'rgba(220,38,38,0.95)' : 'rgba(255,255,255,0.95)', color: p.kind === 'wings' ? '#fff' : '#0f172a', dot: p.kind === 'wings' ? null : POI_COLORS[p.kind] });
  sp.position.copy(toW(p.at[0], p.at[1], 14));
  pin.userData.label = sp;
  registerLabel(sp, p.kind === 'wings' ? 90 : 60, { key: `poi:${p.id}` });
  pois.set(p.id, p);
}

/* ---------- Trees in open ground ---------- */
{
  const spots = [];
  const bbs = DATA.buildings.map((b) => {
    const xs = b.poly.map((p) => p[0]), ys = b.poly.map((p) => p[1]);
    return [Math.min(...xs) - 4, Math.min(...ys) - 4, Math.max(...xs) + 4, Math.max(...ys) + 4];
  });
  const nearWater = (x, y) => (DATA.water || []).some((w) => w.points.some((p, i) => {
    if (i === 0) return false;
    const [ax, ay] = w.points[i - 1], [bx, by] = p, dx = bx - ax, dy = by - ay;
    const t = clamp(((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy || 1), 0, 1);
    return Math.hypot(x - ax - t * dx, y - ay - t * dy) < w.width / 2 + 4;
  }));
  for (let x = BX0; x < BX1; x += 15) {
    for (let y = BY0; y < BY1; y += 15) {
      if (hash01(`k${x},${y}`) < 0.8) continue;
      const jx = x + (hash01(`tx${x},${y}`) - 0.5) * 10, jy = y + (hash01(`ty${x},${y}`) - 0.5) * 10;
      if (bbs.some((r) => jx > r[0] && jx < r[2] && jy > r[1] && jy < r[3])) continue;
      const pr = projectToGraph(jx, jy);
      if (pr && pr.d < ROADS[pr.e.road].width / 2 + 3) continue;
      if (nearWater(jx, jy)) continue;
      spots.push([jx, jy]);
    }
  }
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.35, 0.5, 3, 5), mat('#7c5a3a'), spots.length);
  const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(3, 0), mat('#4f9a52', { flatShading: true }), spots.length);
  crown.castShadow = true;
  const o = new THREE.Object3D();
  const col = new THREE.Color();
  spots.forEach(([x, y], i) => {
    const s = 0.8 + hash01(`s${x}${y}`) * 0.7;
    o.position.copy(toW(x, y, 1.5 * s)); o.scale.setScalar(s); o.rotation.set(0, hash01(`r${x}`) * 6, 0); o.updateMatrix();
    trunk.setMatrixAt(i, o.matrix);
    o.position.y = 4.6 * s; o.updateMatrix();
    crown.setMatrixAt(i, o.matrix);
    crown.setColorAt(i, col.set('#4f9a52').offsetHSL((hash01(`c${x}${y}`) - 0.5) * 0.05, 0, (hash01(`l${y}`) - 0.5) * 0.12));
  });
  scene.add(trunk, crown);
}

/* ---------- Selection highlight ---------- */
let highlight = null;
function setHighlight(rec) {
  if (highlight) { scene.remove(highlight); highlight.geometry.dispose(); highlight = null; }
  if (!rec) return;
  highlight = new THREE.LineSegments(new THREE.EdgesGeometry(rec.mesh.geometry), new THREE.LineBasicMaterial({ color: '#f59e0b' }));
  highlight.scale.setScalar(1.0);
  highlight.renderOrder = 6;
  scene.add(highlight);
}

/* ---------- Route pins, route line, movers ---------- */
const pinA = makePin('#16a34a', 'A');
const pinB = makePin('#dc2626', 'B');
pinA.visible = pinB.visible = false;
scaledPins.push(pinA, pinB);

function chevronTexture() {
  const c = document.createElement('canvas'); c.width = 128; c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1a73e8'; ctx.fillRect(0, 0, 128, 64);
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(48, 16); ctx.lineTo(76, 32); ctx.lineTo(48, 48); ctx.stroke();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}
const routeTex = chevronTexture();
const routeMat = new THREE.MeshBasicMaterial({ map: routeTex });
const routeEdgeMat = new THREE.MeshBasicMaterial({ color: '#0b3d91' });
const connectorMat = new THREE.MeshBasicMaterial({ color: '#1a73e8' });
const routeGroup = new THREE.Group();
scene.add(routeGroup);
function dots(a, b) {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const n = Math.max(1, Math.floor(len / 3));
  const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.8, 0.8, 0.2, 10), connectorMat, n + 1);
  const o = new THREE.Object3D();
  for (let i = 0; i <= n; i++) { o.position.copy(toW(lerp(a[0], b[0], i / n), lerp(a[1], b[1], i / n), 0.8)); o.updateMatrix(); im.setMatrixAt(i, o.matrix); }
  return im;
}
function clearRouteMeshes() { for (const c of [...routeGroup.children]) { routeGroup.remove(c); c.geometry?.dispose(); } }

function makeCar() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(5, 1.6, 2.4), mat('#f59e0b', { roughness: 0.5 }));
  body.position.y = 1.2; body.castShadow = true;
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.2, 2.1), mat('#1e293b', { roughness: 0.3 }));
  cab.position.set(-0.3, 2.5, 0);
  g.add(body, cab);
  return g;
}
function makeWalker() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 1.8, 12), mat('#2563eb'));
  body.position.y = 1.2; body.castShadow = true;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 12), mat('#fcd34d'));
  head.position.y = 2.5;
  g.add(body, head);
  return g;
}
const car = makeCar(), walker = makeWalker();
car.visible = walker.visible = false;
scene.add(car, walker);

/* ---------- GPS "you are here" marker ---------- */
const me = new THREE.Group();
{
  const halo = new THREE.Mesh(new THREE.CircleGeometry(1, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#1a73e8', transparent: true, opacity: 0.16, depthWrite: false }));
  halo.position.y = 0.5;
  const ring = new THREE.Mesh(new THREE.CircleGeometry(4, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
  ring.position.y = 0.7;
  const dot = new THREE.Mesh(new THREE.CircleGeometry(3, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#1a73e8' }));
  dot.position.y = 0.75;
  const cone = new THREE.Mesh(new THREE.ShapeGeometry(new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(-5, 13), new THREE.Vector2(5, 13)])).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: '#1a73e8', transparent: true, opacity: 0.35, depthWrite: false }));
  cone.position.y = 0.6;
  const puck = new THREE.Group();
  puck.add(ring, dot, cone);
  me.add(halo, puck);
  me.userData = { halo, puck, cone };
  for (const m of [halo, ring, dot, cone]) m.renderOrder = 8;
  me.visible = false;
  scene.add(me);
}

/* ================================================================
 * Camera helpers
 * ================================================================ */
let tween = null;
function flyTo({ target, distance, phi, theta, dur = 0.9, done }) {
  const s = new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
  const s1 = { r: distance ?? s.radius, phi: phi ?? s.phi, theta: theta ?? s.theta };
  let d = s1.theta - s.theta;
  d = ((((d + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
  s1.theta = s.theta + d;
  tween = { t: 0, dur, t0: controls.target.clone(), t1: (target || controls.target).clone(), s0: { r: s.radius, phi: s.phi, theta: s.theta }, s1, done };
}
function updateTween(dt) {
  if (!tween) return;
  tween.t = Math.min(1, tween.t + dt / tween.dur);
  const k = ease(tween.t);
  controls.target.lerpVectors(tween.t0, tween.t1, k);
  camera.position.setFromSpherical(new THREE.Spherical(lerp(tween.s0.r, tween.s1.r, k), lerp(tween.s0.phi, tween.s1.phi, k), lerp(tween.s0.theta, tween.s1.theta, k))).add(controls.target);
  camera.lookAt(controls.target);
  if (tween.t >= 1) { const d = tween.done; tween = null; d && d(); }
}
let visibleAspect = 1;
function fitBounds(x0, y0, x1, y1, opts = {}) {
  const pad = opts.pad ?? 1.25;
  const halfW = Math.max(40, (x1 - x0) / 2), halfH = Math.max(40, (y1 - y0) / 2);
  const vf = THREE.MathUtils.degToRad(camera.fov) / 2;
  const hf = Math.atan(Math.tan(vf) * visibleAspect);
  const phi = opts.phi ?? (state.view3d ? 0.72 : 0.02);
  const dist = clamp(Math.max(halfW / Math.tan(hf), (halfH * (0.75 + 0.25 * Math.cos(phi))) / Math.tan(vf)) * pad, controls.minDistance, controls.maxDistance);
  flyTo({ target: toW((x0 + x1) / 2, (y0 + y1) / 2), distance: dist, phi, theta: opts.theta ?? 0, dur: opts.dur });
}

/* ================================================================
 * App state
 * ================================================================ */
const state = { from: null, to: null, mode: 'drive', pick: null, selected: null, route: null, view3d: true, labels: true, preview: null };
const gps = { watchId: null, pos: null, acc: null, heading: null, follow: false, lastRouteAt: 0, lastRoutePos: null, warned: false };

const places = [
  ...(DATA.pois || []).map((p) => ({ ref: { kind: 'poi', id: p.id }, name: p.name, sub: p.kind === 'wings' ? 'Wings site' : p.kind === 'landmark' ? 'Landmark' : 'Company', color: POI_COLORS[p.kind], search: `${p.name} ${p.kind}`.toLowerCase(), rank: p.kind === 'wings' ? 0 : 1 })),
  ...DATA.buildings.filter((b) => b.name).map((b) => ({ ref: { kind: 'building', id: b.id }, name: b.name, sub: 'Company', color: TYPES.company.roof, search: `${b.name} company`.toLowerCase(), rank: 1 })),
].sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name));
const otherBuildings = DATA.buildings.filter((b) => !b.name && b.type !== 'house')
  .map((b) => ({ ref: { kind: 'building', id: b.id }, name: buildingName(b), sub: TYPES[b.type].label, color: TYPES[b.type].roof, search: `${buildingName(b)} ${b.id} ${TYPES[b.type].label}`.toLowerCase(), rank: 2 }));

const refKey = (ref) => (ref.kind === 'point' ? `pt:${ref.x.toFixed(1)},${ref.y.toFixed(1)}` : ref.kind === 'gps' ? 'gps' : `${ref.kind}:${ref.id}`);
function parseRef(s) {
  if (!s) return null;
  if (s === 'gps') return { kind: 'gps' };
  const i = s.indexOf(':'), kind = s.slice(0, i), rest = s.slice(i + 1);
  if (kind === 'pt') { const [x, y] = rest.split(',').map(Number); return isFinite(x) && isFinite(y) ? { kind: 'point', x, y } : null; }
  return resolve({ kind, id: rest }) ? { kind, id: rest } : null;
}
function resolve(ref) {
  if (!ref) return null;
  if (ref.kind === 'building') {
    const R = buildings.get(ref.id); if (!R) return null;
    return { name: buildingName(R.b), sub: `${R.b.name ? 'Company' : R.t.label} · ${fmtArea(R.area)}`, x: R.center[0], y: R.center[1], poly: R.b.poly, color: R.t.roof };
  }
  if (ref.kind === 'poi') {
    const p = pois.get(ref.id); if (!p) return null;
    const sub = p.lat ? `${p.lat.toFixed(6)}, ${p.lon.toFixed(6)}` : p.kind === 'landmark' ? 'Landmark' : 'Company';
    return { name: p.name, sub, x: p.at[0], y: p.at[1], color: POI_COLORS[p.kind] };
  }
  if (ref.kind === 'gps') {
    return { name: 'Your location', sub: gps.pos ? `GPS ± ${Math.round(gps.acc)} m` : 'Waiting for GPS…', x: gps.pos?.[0], y: gps.pos?.[1], color: '#1a73e8', pending: !gps.pos };
  }
  const pr = projectToGraph(ref.x, ref.y);
  const near = pr && pr.d < 12 && ROADS[pr.e.road].name ? ` on ${ROADS[pr.e.road].name}` : '';
  return { name: `Dropped pin${near}`, sub: 'Map location', x: ref.x, y: ref.y, color: '#64748b' };
}
function access(ref) {
  const info = resolve(ref);
  if (!info || info.pending) return null;
  const pr = projectToGraph(info.x, info.y, state.mode);
  let door = [info.x, info.y];
  if (info.poly) { const c = closestOnPoly(pr.x, pr.y, info.poly); door = [c.x, c.y]; }
  return { info, pr, door };
}

/* ---------- route compute/draw ---------- */
function computeRoute({ live = false } = {}) {
  if (!live) stopPreview();
  clearRouteMeshes();
  state.route = null;
  if (!state.from || !state.to) return renderRouteUI();
  if (refKey(state.from) === refKey(state.to)) { state.route = { msg: 'Start and destination are the same' }; return renderRouteUI(); }
  const A = access(state.from), B = access(state.to);
  if (!A || !B) { state.route = { msg: 'Waiting for your GPS position…' }; return renderRouteUI(); }
  const path = shortestPath(A.pr, B.pr, state.mode);
  if (!path) { state.route = { msg: 'No route found' }; return renderRouteUI(); }

  routeGroup.add(ribbon(path.points, 6.4, 0.42, routeEdgeMat));
  routeGroup.add(ribbon(path.points, 4.6, 0.5, routeMat, 9));
  const walkA = Math.hypot(A.door[0] - A.pr.x, A.door[1] - A.pr.y);
  const walkB = Math.hypot(B.door[0] - B.pr.x, B.door[1] - B.pr.y);
  if (walkA > 1) routeGroup.add(dots(A.door, [A.pr.x, A.pr.y]));
  if (walkB > 1) routeGroup.add(dots([B.pr.x, B.pr.y], B.door));
  const full = [A.door, ...path.points, B.door].filter((p, i, arr) => i === 0 || Math.hypot(p[0] - arr[i - 1][0], p[1] - arr[i - 1][1]) > 0.01);
  const named = [...new Set(path.roads.map((r) => ROADS[r].name).filter(Boolean))];
  state.route = { path, full, length: path.length + walkA + walkB, steps: buildSteps(path, A.info.name, B.info.name), via: named, doors: [A.door, B.door] };
  renderRouteUI();
  if (!live) { fitRoute(); writeHash(); }
}
function fitRoute() {
  if (!state.route?.full) return;
  const xs = state.route.full.map((p) => p[0]), ys = state.route.full.map((p) => p[1]);
  fitBounds(Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys), { pad: visibleAspect < 1 ? 1.5 : 1.3 });
}
function updatePins() {
  [[pinA, state.from, 0], [pinB, state.to, 1]].forEach(([pin, ref, which]) => {
    if (!ref || ref.kind === 'gps') { pin.visible = false; return; }
    const pos = state.route?.doors ? state.route.doors[which] : access(ref)?.door;
    if (!pos) { pin.visible = false; return; }
    pin.position.copy(toW(pos[0], pos[1], 0));
    pin.visible = true;
  });
}

/* ---------- preview ---------- */
function startPreview() {
  const r = state.route;
  if (!r?.full) return;
  const pts = r.full, cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const mover = state.mode === 'walk' ? walker : car;
  car.visible = walker.visible = false;
  mover.visible = true;
  setFollow(false);
  state.preview = { pts, cum, s: 0, total: cum[cum.length - 1], mover, speed: state.mode === 'walk' ? 25 : 70 };
  flyTo({ target: toW(pts[0][0], pts[0][1]), distance: 160, phi: 0.85, dur: 0.8 });
  $('#previewBtn').textContent = 'Stop';
  $('#previewBtn').classList.add('active');
}
function stopPreview() {
  if (!state.preview) return;
  state.preview.mover.visible = false;
  state.preview = null;
  $('#previewBtn').textContent = 'Preview';
  $('#previewBtn').classList.remove('active');
}
const _tmp = new THREE.Vector3();
function updatePreview(dt) {
  const pv = state.preview;
  if (!pv || tween) return;
  pv.s = Math.min(pv.total, pv.s + pv.speed * dt);
  let i = 1;
  while (i < pv.cum.length - 1 && pv.cum[i] < pv.s) i++;
  const a = pv.pts[i - 1], b = pv.pts[i];
  const t = (pv.s - pv.cum[i - 1]) / (pv.cum[i] - pv.cum[i - 1] || 1);
  pv.mover.position.copy(toW(lerp(a[0], b[0], t), lerp(a[1], b[1], t), 0.35));
  let dr = -Math.atan2(b[1] - a[1], b[0] - a[0]) - pv.mover.rotation.y;
  dr = Math.atan2(Math.sin(dr), Math.cos(dr));
  pv.mover.rotation.y += dr * Math.min(1, dt * 10);
  _tmp.copy(pv.mover.position).setY(0).sub(controls.target).multiplyScalar(Math.min(1, dt * 4));
  controls.target.add(_tmp);
  camera.position.add(_tmp);
  if (pv.s >= pv.total) {
    pv.doneAt ??= performance.now();
    if (performance.now() - pv.doneAt > 1200) { stopPreview(); fitRoute(); }
  }
}

/* ---------- selection ---------- */
function select(ref, { fly = false } = {}) {
  state.selected = ref;
  const card = $('#infoCard');
  setHighlight(null);
  if (!ref) { card.hidden = true; updateLabelPriority(); return; }
  const info = resolve(ref);
  if (ref.kind === 'building') setHighlight(buildings.get(ref.id));
  $('#infoSwatch').style.background = info.color;
  $('#infoName').textContent = info.name;
  $('#infoSub').textContent = info.sub;
  card.hidden = false;
  updateLabelPriority();
  if (fly && info.x != null) flyTo({ target: toW(info.x, info.y), distance: 220, dur: 0.8 });
}

/* ---------- UI ---------- */
const ICONS = {
  start: '<circle cx="12" cy="12" r="6" fill="#16a34a"/>',
  end: '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" fill="#dc2626"/><circle cx="12" cy="9" r="2.5" fill="#fff"/>',
  straight: '<path d="M12 20V5M6 11l6-6 6 6" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  right: '<path d="M7 20v-7a4 4 0 0 1 4-4h8M15 5l4 4-4 4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  left: '<path d="M17 20v-7a4 4 0 0 0-4-4H5M9 5L5 9l4 4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  uturn: '<path d="M8 20V9a4 4 0 0 1 8 0v6M12 12l4 4 4-4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
};
function setField(which) {
  const ref = state[which];
  const btn = which === 'from' ? $('#fromBtn') : $('#toBtn');
  const info = resolve(ref);
  btn.textContent = info ? info.name : which === 'from' ? 'Choose start' : 'Choose destination';
  btn.classList.toggle('empty', !info);
  btn.classList.toggle('gps', ref?.kind === 'gps');
}
function renderRouteUI() {
  setField('from'); setField('to');
  updatePins();
  const r = state.route;
  $('#steps').innerHTML = '';
  $('#hint').hidden = !!r;
  $('#summary').hidden = !r;
  updateNavBanner();
  if (!r) {
    $('#hint').textContent = !state.from && !state.to ? 'Pick a start and destination, or tap a building on the map.'
      : !state.from ? 'Now choose where you are starting from — or use your location.' : 'Now choose your destination.';
    $('#sheet').classList.remove('has-route');
    return;
  }
  if (r.msg) {
    $('#sumTime').textContent = r.msg;
    $('#sumMeta').textContent = '';
    $('#previewBtn').hidden = $('#stepsToggle').hidden = true;
    return;
  }
  $('#previewBtn').hidden = $('#stepsToggle').hidden = false;
  $('#sheet').classList.add('has-route');
  $('#sumTime').textContent = fmtTime(r.length, state.mode);
  $('#sumMeta').textContent = `${fmtDist(r.length)}${r.via.length ? ` · via ${r.via.slice(0, 2).join(', ')}${r.via.length > 2 ? '…' : ''}` : ''}`;
  for (const s of r.steps) {
    const li = document.createElement('li');
    li.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[s.icon]}</svg><span class="txt"></span><span class="d"></span>`;
    li.querySelector('.txt').textContent = s.text;
    li.querySelector('.d').textContent = s.dist;
    if (s.at) { li.tabIndex = 0; li.addEventListener('click', () => { setFollow(false); flyTo({ target: toW(s.at[0], s.at[1]), distance: 120, dur: 0.7 }); }); }
    $('#steps').appendChild(li);
  }
}
function setEndpoint(which, ref) {
  state[which] = ref;
  state.pick = null;
  $('#pickBanner').hidden = true;
  document.querySelectorAll('.pick').forEach((b) => b.classList.remove('active'));
  if (ref?.kind === 'gps') startGps({ follow: false });
  computeRoute();
  updateLabelPriority();
}

/* ---------- live navigation banner (when starting from GPS) ---------- */
function updateNavBanner() {
  const nb = $('#navBanner');
  const r = state.route;
  if (state.from?.kind !== 'gps' || !r?.steps || !gps.pos) { nb.hidden = true; return; }
  const d = Math.hypot(gps.pos[0] - r.doors[1][0], gps.pos[1] - r.doors[1][1]);
  let icon, text, dist;
  if (d < 20) { icon = 'end'; text = `You have arrived at ${resolve(state.to).name}`; dist = ''; }
  else {
    // steps: [start, head, (turns...), arrive]
    const head = r.steps[1], next = r.steps[2];
    if (!next || next.icon === 'end') { icon = 'end'; text = `${resolve(state.to).name} ahead`; dist = fmtDist(r.length); }
    else { icon = next.icon; text = next.text; dist = `in ${fmtDist(head.len + Math.hypot(r.doors[0][0] - r.path.points[0][0], r.doors[0][1] - r.path.points[0][1]))}`; }
  }
  $('#navIcon').innerHTML = ICONS[icon];
  $('#navText').textContent = text;
  $('#navDist').textContent = dist;
  nb.hidden = false;
}

/* ---------- GPS ---------- */
let toastTimer = 0;
function toast(msg, ms = 4500) {
  const t = $('#toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  if (ms) toastTimer = setTimeout(() => (t.hidden = true), ms);
}
function setFollow(on) {
  gps.follow = on && gps.watchId != null;
  $('#locateBtn').classList.toggle('follow', gps.follow);
}
function updateLocateBtn() {
  const b = $('#locateBtn');
  b.classList.toggle('on', gps.watchId != null);
  b.classList.toggle('searching', gps.watchId != null && !gps.pos);
  b.setAttribute('aria-pressed', String(gps.watchId != null));
}
function startGps({ follow = true } = {}) {
  if (!('geolocation' in navigator)) { toast('This browser has no location support.'); return; }
  if (!window.isSecureContext) { toast('Location needs a secure (https) page. Open the GitHub Pages link instead.'); return; }
  if (gps.watchId == null) {
    gps.warned = false;
    gps.watchId = navigator.geolocation.watchPosition(onGps, onGpsError, { enableHighAccuracy: true, maximumAge: 1000, timeout: 30000 });
    toast('Finding your location… GPS works without internet; outdoors is fastest.', 6000);
  }
  setFollow(follow);
  updateLocateBtn();
  if (follow && gps.pos) flyTo({ target: toW(gps.pos[0], gps.pos[1]), distance: Math.min(camera.position.distanceTo(controls.target), 300), dur: 0.7 });
}
function stopGps() {
  if (gps.watchId != null) navigator.geolocation.clearWatch(gps.watchId);
  gps.watchId = null; gps.pos = null;
  me.visible = false;
  setFollow(false);
  updateLocateBtn();
  if (state.from?.kind === 'gps' || state.to?.kind === 'gps') computeRoute({ live: true });
}
function onGps(p) {
  const [x, y] = geoToLocal(p.coords.latitude, p.coords.longitude);
  const first = !gps.pos;
  gps.pos = [x, y];
  gps.acc = p.coords.accuracy || 30;
  gps.heading = p.coords.heading != null && !isNaN(p.coords.heading) && (p.coords.speed ?? 1) > 0.5 ? p.coords.heading : gps.heading;
  updateLocateBtn();
  const outside = x < BX0 - 400 || x > BX1 + 400 || y < BY0 - 400 || y > BY1 + 400;
  if (outside) {
    me.visible = false;
    if (!gps.warned) {
      const d = Math.hypot(x - CX, y - CZ);
      toast(`You're about ${fmtDist(d)} from the map area. Your dot will appear when you get closer.`, 7000);
      gps.warned = true;
    }
  } else {
    me.visible = true;
    me.position.copy(toW(x, y, 0));
    me.userData.halo.scale.setScalar(Math.max(4, gps.acc));
    me.userData.cone.visible = gps.heading != null;
    if (gps.heading != null) me.userData.puck.rotation.y = -THREE.MathUtils.degToRad(gps.heading);
    if (first) toast(`Location found (± ${Math.round(gps.acc)} m)`, 2500);
    if (gps.follow && !state.preview) {
      if (first) flyTo({ target: toW(x, y), distance: 260, dur: 0.9 });
      else if (!tween) flyTo({ target: toW(x, y), dur: 0.6 });
    }
  }
  if (state.from?.kind === 'gps' || state.to?.kind === 'gps') {
    const now = performance.now();
    const moved = gps.lastRoutePos ? Math.hypot(x - gps.lastRoutePos[0], y - gps.lastRoutePos[1]) : Infinity;
    if (first || (moved > 6 && now - gps.lastRouteAt > 1500)) {
      gps.lastRouteAt = now; gps.lastRoutePos = [x, y];
      const hadRoute = !!state.route?.full;
      computeRoute({ live: hadRoute });
    }
  }
  updateNavBanner();
}
function onGpsError(err) {
  if (err.code === 1) { toast('Location permission was denied. Allow location for this site in your browser settings, then try again.', 8000); stopGps(); }
  else if (err.code === 2) toast('No GPS signal yet. Move outdoors or away from tall buildings.', 6000);
  else if (err.code === 3 && !gps.pos) toast('Still searching for GPS… this can take a minute without mobile data.', 6000);
}

/* ---------- picker ---------- */
let pickerFor = null;
function openPicker(forWhat) {
  pickerFor = forWhat;
  $('#pickerTitle').textContent = forWhat === 'from' ? 'Start from' : forWhat === 'to' ? 'Go to' : 'Find a place';
  $('#picker').hidden = false;
  $('#pickerInput').value = '';
  renderPicker('');
  setTimeout(() => $('#pickerInput').focus(), 50);
}
function closePicker() { $('#picker').hidden = true; pickerFor = null; }
function renderPicker(q) {
  const list = $('#pickerList');
  list.innerHTML = '';
  const qq = q.trim().toLowerCase();
  const match = (p) => !qq || qq.split(/\s+/).every((w) => p.search.includes(w));
  let items = places.filter(match);
  if (qq) items = items.concat(otherBuildings.filter(match).slice(0, 40));
  if (pickerFor !== 'search' && (!qq || 'your location my gps current'.includes(qq))) {
    items = [{ ref: { kind: 'gps' }, name: 'Your location', sub: 'Use GPS (works offline)', color: '#1a73e8', gps: true }, ...items];
  }
  if (!items.length) { list.innerHTML = '<li class="empty">No matching places. Try a building number, e.g. 12</li>'; return; }
  for (const it of items) {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.innerHTML = '<span class="sw"></span><span class="nm"><b></b><small></small></span>';
    b.querySelector('.sw').style.background = it.color;
    if (it.gps) b.querySelector('.sw').classList.add('gps-sw');
    b.querySelector('b').textContent = it.name;
    b.querySelector('small').textContent = it.sub;
    b.addEventListener('click', () => {
      const f = pickerFor;
      closePicker();
      if (f === 'search') select(it.ref, { fly: true });
      else setEndpoint(f, it.ref);
    });
    li.appendChild(b);
    list.appendChild(li);
  }
  if (!qq) {
    const li = document.createElement('li');
    li.className = 'empty';
    li.textContent = `Unnamed buildings: type a number (1–${otherBuildings.length}) or tap one on the map.`;
    list.appendChild(li);
  }
}

/* ---------- hash state ---------- */
function writeHash() {
  const parts = [];
  if (state.from) parts.push(`from=${encodeURIComponent(refKey(state.from))}`);
  if (state.to) parts.push(`to=${encodeURIComponent(refKey(state.to))}`);
  if (state.mode !== 'drive') parts.push(`mode=${state.mode}`);
  history.replaceState(null, '', parts.length ? `#${parts.join('&')}` : location.pathname + location.search);
}
function readHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  state.from = parseRef(h.get('from'));
  state.to = parseRef(h.get('to'));
  state.mode = h.get('mode') === 'walk' ? 'walk' : 'drive';
}

/* ---------- label declutter ---------- */
let sortedLabels = [];
function updateLabelPriority() {
  const boost = new Set([state.selected, state.from, state.to].filter(Boolean).map(refKey));
  sortedLabels = labels.slice().sort((a, b) => (boost.has(b.key) ? 1000 : b.priority) - (boost.has(a.key) ? 1000 : a.priority));
  sortedLabels.forEach((L) => (L.boost = boost.has(L.key)));
}
const _v = new THREE.Vector3();
function declutter() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  const dist = camera.position.distanceTo(controls.target);
  const placed = [];
  for (const L of sortedLabels) {
    const sp = L.sprite;
    if ((!state.labels && !L.boost) || (dist > L.minDist && !L.boost)) { sp.visible = false; continue; }
    _v.copy(sp.position).project(camera);
    if (_v.z > 1 || Math.abs(_v.x) > 1.2 || Math.abs(_v.y) > 1.2) { sp.visible = false; continue; }
    const sx = ((_v.x + 1) / 2) * w, sy = ((1 - _v.y) / 2) * h;
    const r = { x0: sx - sp.userData.pxW / 2 - 2, x1: sx + sp.userData.pxW / 2 + 2, y0: sy - sp.userData.pxH - 2, y1: sy + 2 };
    if (!L.boost && placed.some((q) => r.x0 < q.x1 && r.x1 > q.x0 && r.y0 < q.y1 && r.y1 > q.y0)) { sp.visible = false; continue; }
    placed.push(r);
    sp.visible = true;
  }
}

/* ---------- resize / layout ---------- */
const mobileMQ = matchMedia('(max-width: 819px)');
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  let cover = 0, coverL = 0;
  if (mobileMQ.matches) cover = Math.min($('#sheet').offsetHeight, h * 0.5);
  else coverL = Math.min($('#sheet').offsetWidth + 16, w * 0.4);
  const vis = Math.max(100, h - cover), visW = Math.max(100, w - coverL);
  visibleAspect = visW / vis;
  camera.aspect = visW / vis;
  if (cover > 0 || coverL > 0) camera.setViewOffset(visW, vis, -coverL, 0, w, h);
  else camera.clearViewOffset();
  camera.updateProjectionMatrix();
  const k = (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)) / vis;
  for (const L of labels) L.sprite.scale.set(L.sprite.userData.pxW * k, L.sprite.userData.pxH * k, 1);
  document.documentElement.style.setProperty('--sheet-h', `${$('#sheet').offsetHeight}px`);
}
window.addEventListener('resize', resize);
new ResizeObserver(resize).observe($('#sheet'));

/* ---------- tap picking ---------- */
const raycaster = new THREE.Raycaster();
const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
let down = null;
const activePointers = new Set();
canvas.addEventListener('pointerdown', (e) => {
  activePointers.add(e.pointerId);
  tween = null;
  setFollow(false);
  down = activePointers.size === 1 ? { x: e.clientX, y: e.clientY, t: performance.now(), multi: false } : { ...(down || {}), multi: true };
});
canvas.addEventListener('pointercancel', (e) => { activePointers.delete(e.pointerId); if (!activePointers.size) down = null; });
canvas.addEventListener('pointerup', (e) => {
  activePointers.delete(e.pointerId);
  if (!down || down.multi || activePointers.size) { if (!activePointers.size) down = null; return; }
  const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
  const quick = performance.now() - down.t < 600;
  down = null;
  if (moved > 8 || !quick) return;
  handleTap(e.clientX, e.clientY);
});
function handleTap(cx, cy) {
  const rect = canvas.getBoundingClientRect();
  raycaster.setFromCamera(new THREE.Vector2(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1), camera);
  const hit = raycaster.intersectObjects(pickables, false)[0];
  let ref = hit?.object.userData.ref || null;
  if (!ref) {
    const p = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(groundPlane, p)) {
      const x = p.x + CX, y = p.z + CZ;
      if (x > BX0 && x < BX1 && y > BY0 && y < BY1) ref = { kind: 'point', x, y };
    }
  }
  if (state.pick) { if (ref) setEndpoint(state.pick, ref); return; }
  select(ref);
}

/* ---------- wire up controls ---------- */
$('#fromBtn').addEventListener('click', () => openPicker('from'));
$('#toBtn').addEventListener('click', () => openPicker('to'));
$('#searchBtn').addEventListener('click', () => openPicker('search'));
$('#pickerClose').addEventListener('click', closePicker);
$('#pickerInput').addEventListener('input', (e) => renderPicker(e.target.value));
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!$('#picker').hidden) closePicker();
  else if (state.pick) cancelPick();
  else select(null);
});
document.querySelectorAll('.pick').forEach((b) => b.addEventListener('click', () => {
  const which = b.dataset.pick;
  if (state.pick === which) return cancelPick();
  state.pick = which;
  document.querySelectorAll('.pick').forEach((x) => x.classList.toggle('active', x === b));
  $('#pickText').textContent = which === 'from' ? 'Tap the map to set your start' : 'Tap the map to set your destination';
  $('#pickBanner').hidden = false;
  select(null);
}));
function cancelPick() {
  state.pick = null;
  $('#pickBanner').hidden = true;
  document.querySelectorAll('.pick').forEach((b) => b.classList.remove('active'));
}
$('#pickCancel').addEventListener('click', cancelPick);
$('#swapBtn').addEventListener('click', () => { [state.from, state.to] = [state.to, state.from]; computeRoute(); updateLabelPriority(); });
document.querySelectorAll('.mode').forEach((b) => b.addEventListener('click', () => {
  state.mode = b.dataset.mode;
  document.querySelectorAll('.mode').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  computeRoute({ live: true });
  writeHash();
}));
$('#clearBtn').addEventListener('click', () => { state.from = state.to = null; stopPreview(); clearRouteMeshes(); state.route = null; renderRouteUI(); writeHash(); updateLabelPriority(); });
$('#previewBtn').addEventListener('click', () => (state.preview ? (stopPreview(), fitRoute()) : startPreview()));
$('#stepsToggle').addEventListener('click', () => toggleSheet());
$('#grabber').addEventListener('click', () => toggleSheet());
function toggleSheet(force) {
  const s = $('#sheet');
  const on = force ?? !s.classList.contains('expanded');
  s.classList.toggle('expanded', on);
  $('#stepsToggle').textContent = on ? 'Hide steps' : 'Steps';
}
{
  let sy = null;
  const g = $('#grabZone');
  g.addEventListener('touchstart', (e) => { sy = e.touches[0].clientY; }, { passive: true });
  g.addEventListener('touchend', (e) => {
    if (sy == null) return;
    const dy = e.changedTouches[0].clientY - sy;
    if (dy < -30) toggleSheet(true); else if (dy > 30) toggleSheet(false);
    sy = null;
  });
}
$('#infoClose').addEventListener('click', () => select(null));
$('#infoFrom').addEventListener('click', () => { const r = state.selected; select(null); setEndpoint('from', r); });
$('#infoTo').addEventListener('click', () => {
  const r = state.selected; select(null);
  if (!state.from) state.from = { kind: 'gps' };
  setEndpoint('to', r);
  if (state.from.kind === 'gps') startGps({ follow: false });
});
$('#viewBtn').addEventListener('click', () => {
  state.view3d = !state.view3d;
  $('#viewBtn').textContent = state.view3d ? '2D' : '3D';
  $('#viewBtn').setAttribute('aria-label', state.view3d ? 'Switch to top-down 2D view' : 'Switch to tilted 3D view');
  if (state.view3d) { controls.maxPolarAngle = 1.25; flyTo({ phi: 0.75 }); }
  else flyTo({ phi: 0.02, done: () => { controls.maxPolarAngle = 0.02; } });
});
$('#labelsBtn').addEventListener('click', () => {
  state.labels = !state.labels;
  $('#labelsBtn').setAttribute('aria-pressed', String(state.labels));
});
$('#fitBtn').addEventListener('click', () => { setFollow(false); state.route?.full ? fitRoute() : fitArea(); });
$('#compassBtn').addEventListener('click', () => flyTo({ theta: 0 }));
$('#locateBtn').addEventListener('click', () => {
  if (gps.watchId == null) startGps({ follow: true });
  else if (!gps.follow) startGps({ follow: true });
  else stopGps();
});
function fitArea() { fitBounds(BX0, BY0, BX1, BY1, { pad: visibleAspect < 1 ? 1.2 : 1.02 }); }

// legend
{
  const lg = $('#legend');
  const items = [['Wings site', POI_COLORS.wings], ['Company', TYPES.company.roof], ['Factory', TYPES.factory.roof], ['Warehouse', TYPES.warehouse.roof], ['Houses', TYPES.house.roof], ['Canal', '#7cc4ea']];
  for (const [label, color] of items) {
    const li = document.createElement('li');
    li.innerHTML = '<span class="sw"></span><span></span>';
    li.firstChild.style.background = color;
    li.lastChild.textContent = label;
    lg.appendChild(li);
  }
}

/* ---------- loop ---------- */
const clock = new THREE.Clock();
let lastDeclutter = 0;
const needle = $('#needle');
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.1);
  const t = clock.elapsedTime;
  updateTween(dt);
  updatePreview(dt);
  if (!tween) controls.update();
  routeTex.offset.x -= dt * 1.4;
  const dist = camera.position.distanceTo(controls.target);
  const pinScale = clamp(dist / 260, 0.8, 7);
  for (const pin of scaledPins) {
    if (!pin.visible) continue;
    pin.scale.setScalar(pinScale);
    if (pin === pinA || pin === pinB) {
      pin.userData.head.position.y = Math.sin(t * 3 + (pin === pinB ? 1.5 : 0)) * 0.6 + 0.6;
      const s = 1 + ((t * 0.8) % 1) * 1.2;
      pin.userData.ring.scale.set(s, 1, s);
      pin.userData.ring.material.opacity = 0.6 * (1 - ((t * 0.8) % 1));
    }
    if (pin.userData.label) pin.userData.label.position.y = 13 * pinScale;
  }
  if (me.visible) {
    me.userData.puck.scale.setScalar(clamp(dist / 250, 0.6, 7));
    me.userData.halo.material.opacity = 0.12 + Math.sin(t * 3) * 0.04;
  }
  const off = camera.position.clone().sub(controls.target);
  needle.style.transform = `rotate(${Math.atan2(off.x, off.z)}rad)`;
  if (t - lastDeclutter > 0.12) { declutter(); lastDeclutter = t; }
  renderer.render(scene, camera);
});

/* ---------- boot ---------- */
readHash();
document.querySelectorAll('.mode').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.mode === state.mode)));
resize();
updateLabelPriority();
renderRouteUI();
controls.target.copy(toW(CX, CZ));
camera.position.copy(controls.target).add(new THREE.Vector3(0, 2000, 1600));
sun.target.position.copy(controls.target);
if (state.from?.kind === 'gps' || state.to?.kind === 'gps') startGps({ follow: false });
if (state.from && state.to) computeRoute(); else fitArea();
$('#loading').remove();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
