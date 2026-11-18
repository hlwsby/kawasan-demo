import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';

const DATA = window.SITE_DATA;
const MPP = DATA.metersPerPixel || 3;
const [CX, CZ] = DATA.center || [240, 340];
const TYPES = DATA.types;
const ROADS = DATA.roads;

const $ = (s) => document.querySelector(s);
const toW = (x, y, h = 0) => new THREE.Vector3(x - CX, h, y - CZ);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function hash01(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 10000) / 10000;
}
function fmtDist(px) {
  const m = px * MPP;
  return m < 1000 ? `${Math.max(10, Math.round(m / 10) * 10)} m` : `${(m / 1000).toFixed(1)} km`;
}
function fmtTime(px, mode) {
  const kmh = mode === 'walk' ? DATA.walkKmh : DATA.driveKmh;
  const min = (px * MPP) / 1000 / kmh * 60;
  return min < 1 ? '< 1 min' : `${Math.round(min)} min`;
}
function fmtArea(rect) {
  const m2 = (rect[2] - rect[0]) * (rect[3] - rect[1]) * MPP * MPP;
  return m2 >= 10000 ? `≈ ${(m2 / 10000).toFixed(1)} ha` : `≈ ${Math.round(m2 / 100) * 100} m²`;
}
function pointInPoly(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
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
  for (let i = 0; i < segs.length; i++) {
    for (let j = i + 1; j < segs.length; j++) {
      const hit = segIntersect(segs[i].a, segs[i].b, segs[j].a, segs[j].b);
      if (hit) { segs[i].cuts.push(hit.t); segs[j].cuts.push(hit.u); }
    }
  }
  const nodeMap = new Map();
  const nodes = [];
  const getNode = (x, y) => {
    const k = `${Math.round(x * 2)},${Math.round(y * 2)}`;
    let n = nodeMap.get(k);
    if (!n) { n = { id: nodes.length, x, y, adj: [], roads: new Set() }; nodeMap.set(k, n); nodes.push(n); }
    return n;
  };
  const edges = [];
  for (const s of segs) {
    const cuts = [...new Set(s.cuts.map((t) => clamp(t, 0, 1)))].sort((a, b) => a - b);
    for (let k = 0; k < cuts.length - 1; k++) {
      const t0 = cuts[k], t1 = cuts[k + 1];
      if (t1 - t0 < 1e-6) continue;
      const a = getNode(lerp(s.a[0], s.b[0], t0), lerp(s.a[1], s.b[1], t0));
      const b = getNode(lerp(s.a[0], s.b[0], t1), lerp(s.a[1], s.b[1], t1));
      if (a === b) continue;
      const e = { id: edges.length, a: a.id, b: b.id, len: Math.hypot(b.x - a.x, b.y - a.y), road: s.road };
      edges.push(e); a.adj.push(e); b.adj.push(e); a.roads.add(s.road); b.roads.add(s.road);
    }
  }
  return { nodes, edges };
}
const G = buildGraph(ROADS);

function projectToGraph(x, y) {
  let best = null;
  for (const e of G.edges) {
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
function shortestPath(pa, pb) {
  const N = G.nodes.length, S = N, T = N + 1;
  const extra = new Map();
  const addV = (from, to, len, road) => {
    if (!extra.has(from)) extra.set(from, []);
    extra.get(from).push({ to, len, road });
  };
  addV(S, pa.e.a, pa.t * pa.e.len, pa.e.road);
  addV(S, pa.e.b, (1 - pa.t) * pa.e.len, pa.e.road);
  addV(pb.e.a, T, pb.t * pb.e.len, pb.e.road);
  addV(pb.e.b, T, (1 - pb.t) * pb.e.len, pb.e.road);
  if (pa.e === pb.e) addV(S, T, Math.abs(pa.t - pb.t) * pa.e.len, pa.e.road);

  const dist = new Float64Array(N + 2).fill(Infinity);
  const prev = new Int32Array(N + 2).fill(-1);
  const prevRoad = new Int32Array(N + 2).fill(-1);
  const done = new Uint8Array(N + 2);
  dist[S] = 0;
  for (;;) {
    let u = -1, best = Infinity;
    for (let i = 0; i < N + 2; i++) if (!done[i] && dist[i] < best) { best = dist[i]; u = i; }
    if (u === -1 || u === T) break;
    done[u] = 1;
    // Small penalty for changing roads, so equal-length routes prefer fewer turns.
    const relax = (v, len, road) => {
      const c = dist[u] + len + (prevRoad[u] !== -1 && prevRoad[u] !== road ? TURN_PENALTY : 0);
      if (c < dist[v]) { dist[v] = c; prev[v] = u; prevRoad[v] = road; }
    };
    if (u < N) for (const e of G.nodes[u].adj) relax(e.a === u ? e.b : e.a, e.len, e.road);
    const ex = extra.get(u);
    if (ex) for (const x of ex) relax(x.to, x.len, x.road);
  }
  if (!isFinite(dist[T])) return null;
  const ids = [];
  for (let v = T; v !== -1; v = prev[v]) ids.push(v);
  ids.reverse();
  const pts = ids.map((id) => (id === S ? [pa.x, pa.y] : id === T ? [pb.x, pb.y] : [G.nodes[id].x, G.nodes[id].y]));
  const roads = ids.slice(1).map((id) => prevRoad[id]);
  // drop zero-length segments
  const P = [pts[0]], R = [];
  let length = 0;
  for (let i = 1; i < pts.length; i++) {
    const last = P[P.length - 1];
    const d = Math.hypot(pts[i][0] - last[0], pts[i][1] - last[1]);
    if (d < 0.01) continue;
    P.push(pts[i]); R.push(roads[i - 1]); length += d;
  }
  return { points: P, roads: R, length };
}

const COMPASS = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
function compassOf(dx, dy) {
  const a = (Math.atan2(dx, -dy) * 180) / Math.PI;
  return COMPASS[((Math.round(a / 45) % 8) + 8) % 8];
}

function buildSteps(path, fromName, toName) {
  const legs = [];
  for (let i = 0; i < path.roads.length; i++) {
    const [x0, y0] = path.points[i], [x1, y1] = path.points[i + 1];
    const len = Math.hypot(x1 - x0, y1 - y0);
    const dir = [(x1 - x0) / len, (y1 - y0) / len];
    const last = legs[legs.length - 1];
    if (last && last.road === path.roads[i]) { last.len += len; last.end = dir; }
    else legs.push({ road: path.roads[i], len, start: dir, end: dir, at: [x0, y0] });
  }
  const steps = [{ icon: 'start', text: `Start at ${fromName}`, dist: '' }];
  legs.forEach((leg, i) => {
    const name = ROADS[leg.road].name;
    if (i === 0) {
      steps.push({ icon: 'straight', text: `Head ${compassOf(...leg.start)} on ${name}`, dist: fmtDist(leg.len), at: leg.at });
      return;
    }
    const p = legs[i - 1].end, d = leg.start;
    const ang = (Math.atan2(p[0] * d[1] - p[1] * d[0], p[0] * d[0] + p[1] * d[1]) * 180) / Math.PI;
    let icon = 'straight', verb = 'Continue onto';
    if (Math.abs(ang) > 150) { icon = 'uturn'; verb = 'Make a U-turn onto'; }
    else if (ang > 25) { icon = 'right'; verb = 'Turn right onto'; }
    else if (ang < -25) { icon = 'left'; verb = 'Turn left onto'; }
    steps.push({ icon, text: `${verb} ${name}`, dist: fmtDist(leg.len), at: leg.at });
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
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 2 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const SKY = new THREE.Color('#cfe2ee');
scene.background = SKY;
scene.fog = new THREE.Fog(SKY, 1100, 2600);

const camera = new THREE.PerspectiveCamera(45, 1, 1, 6000);
camera.position.set(0, 420, 380);

const controls = new MapControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.12;
controls.screenSpacePanning = false;
controls.minDistance = 35;
controls.maxDistance = 1200;
controls.maxPolarAngle = 1.25;
controls.zoomToCursor = true;

scene.add(new THREE.HemisphereLight(0xffffff, 0x9aa88a, 1.5));
const sun = new THREE.DirectionalLight(0xfff4e0, 2.3);
sun.position.set(-260, 520, 300);
sun.castShadow = true;
sun.shadow.mapSize.set(isTouch ? 1024 : 2048, isTouch ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -360, right: 360, top: 360, bottom: -360, near: 50, far: 1500 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.4;
scene.add(sun);

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

// Ground + estate pad
const ground = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000).rotateX(-Math.PI / 2), mat('#c9d8bb'));
ground.receiveShadow = true;
scene.add(ground);
scene.add(slab(DATA.boundary, 0.15, '#e4e8dc'));

const pickables = [];
const labels = [];

/* ---------- Labels (constant pixel size, decluttered) ---------- */
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
  sp.userData.aspect = c.width / c.height;
  sp.userData.pxW = (LABEL_PX + 2) * sp.userData.aspect;
  sp.userData.pxH = LABEL_PX + 2;
  return sp;
}
function registerLabel(sprite, priority, opts = {}) {
  const L = { sprite, priority, minDist: opts.minDist ?? Infinity, enabled: true, key: opts.key };
  labels.push(L);
  scene.add(sprite);
  return L;
}

/* ---------- Roads ---------- */
const roadMat = mat('#50565f');
const roadWidthAt = new Map();
for (const e of G.edges) {
  const A = G.nodes[e.a], B = G.nodes[e.b];
  const w = ROADS[e.road].width || 8;
  const m = new THREE.Mesh(new THREE.BoxGeometry(e.len, 0.3, w), roadMat);
  m.position.copy(toW((A.x + B.x) / 2, (A.y + B.y) / 2, 0.15));
  m.rotation.y = -Math.atan2(B.y - A.y, B.x - A.x);
  m.receiveShadow = true;
  scene.add(m);
  for (const n of [A, B]) roadWidthAt.set(n.id, Math.max(roadWidthAt.get(n.id) || 0, w));
}
for (const n of G.nodes) {
  const r = roadWidthAt.get(n.id) / 2;
  const m = new THREE.Mesh(new THREE.BoxGeometry(r * 2, 0.31, r * 2), roadMat);
  m.position.copy(toW(n.x, n.y, 0.155));
  m.receiveShadow = true;
  scene.add(m);
}
{ // dashed centre lines
  const dashes = [];
  for (const e of G.edges) {
    const A = G.nodes[e.a], B = G.nodes[e.b];
    const n = Math.floor((e.len - 12) / 9);
    for (let i = 0; i <= n; i++) {
      const t = (6 + 2 + i * 9) / e.len;
      if (t > 1) break;
      dashes.push({ x: lerp(A.x, B.x, t), y: lerp(A.y, B.y, t), rot: -Math.atan2(B.y - A.y, B.x - A.x) });
    }
  }
  const im = new THREE.InstancedMesh(new THREE.BoxGeometry(4, 0.04, 0.45), new THREE.MeshBasicMaterial({ color: '#f5f5f0' }), dashes.length);
  const o = new THREE.Object3D();
  dashes.forEach((d, i) => { o.position.copy(toW(d.x, d.y, 0.32)); o.rotation.set(0, d.rot, 0); o.updateMatrix(); im.setMatrixAt(i, o.matrix); });
  scene.add(im);
}
// Road name labels at the middle of each road's longest edge
ROADS.forEach((r, ri) => {
  let best = null;
  for (const e of G.edges) if (e.road === ri && (!best || e.len > best.len)) best = e;
  if (!best) return;
  const A = G.nodes[best.a], B = G.nodes[best.b];
  const sp = makeLabel(r.name, { bg: 'rgba(30,41,59,0.86)', color: '#f8fafc', border: 'rgba(255,255,255,0.25)' });
  sp.position.copy(toW((A.x + B.x) / 2, (A.y + B.y) / 2, 1));
  registerLabel(sp, 15, { minDist: 520 });
});

/* ---------- Plots + buildings ---------- */
const plots = new Map();
const plotName = (p) => p.tenant || (p.id === 'GO' ? 'Gate Office' : `Lot ${p.id}`);
for (const p of DATA.plots) {
  const t = TYPES[p.type] || TYPES.factory;
  const [x0, y0, x1, y1] = p.rect;
  const w = x1 - x0, h = y1 - y0, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const g = new THREE.Group();
  g.position.copy(toW(cx, cy));
  const base = new THREE.Mesh(new THREE.BoxGeometry(w, 0.6, h), mat('#d5dade'));
  base.position.y = 0.3; base.receiveShadow = true; g.add(base);
  const top = new THREE.Mesh(new THREE.BoxGeometry(w - 1.6, 0.12, h - 1.6), mat(t.ground));
  top.position.y = 0.66; top.receiveShadow = true; g.add(top);
  let height = 0.75;
  if (t.building && w > 8 && h > 8) {
    const inset = clamp(Math.min(w, h) * 0.16, 2.5, 7);
    const bw = w - inset * 2, bh = h - inset * 2;
    const H = lerp(t.height[0], t.height[1], hash01(p.id));
    const walls = new THREE.Mesh(new THREE.BoxGeometry(bw, H, bh), mat(t.wall));
    walls.position.y = 0.7 + H / 2; walls.castShadow = walls.receiveShadow = true; g.add(walls);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(bw + 0.6, 0.7, bh + 0.6), mat(t.roof));
    roof.position.y = 0.7 + H + 0.35; roof.castShadow = true; g.add(roof);
    // roof vents / skylight strips for texture
    const strips = Math.max(1, Math.floor(bw / 9));
    for (let i = 0; i < strips; i++) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, bh * 0.75), mat('#f1f5f9'));
      s.position.set(-bw / 2 + (bw / (strips + 1)) * (i + 1), 0.7 + H + 0.9, 0);
      g.add(s);
    }
    // a small office block on bigger lots
    if (w * h > 1100) {
      const ow = Math.min(bw * 0.35, 14), oh = Math.min(bh * 0.3, 9), OH = H + 3;
      const off = new THREE.Mesh(new THREE.BoxGeometry(ow, OH, oh), mat('#cbd5e1'));
      off.position.set(bw / 2 - ow / 2, 0.7 + OH / 2, bh / 2 - oh / 2);
      off.castShadow = true; g.add(off);
    }
    height = 0.7 + H + 1.2;
  } else if (!t.building) {
    // corner posts mark an empty lot
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2, 0.8), mat('#94a3b8'));
      post.position.set(sx * (w / 2 - 1.4), 1.6, sz * (h / 2 - 1.4));
      g.add(post);
    }
  }
  g.traverse((o) => { if (o.isMesh) { o.userData.ref = { kind: 'plot', id: p.id }; pickables.push(o); } });
  scene.add(g);
  const sp = makeLabel(plotName(p), { dot: t.roof || '#94a3b8' });
  sp.position.copy(toW(cx, cy, height + 1.5));
  const pri = p.tenant ? 40 : p.type === 'major' ? 35 : p.type === 'available' ? 8 : 25;
  const L = registerLabel(sp, pri, { minDist: p.type === 'available' ? 260 : 380, key: `plot:${p.id}` });
  plots.set(p.id, { p, t, group: g, height, center: [cx, cy], w, h, label: L });
}

/* ---------- Housing zone ---------- */
for (const z of DATA.zones || []) {
  scene.add(slab(z.polygon, 0.35, '#d7e8c8'));
  const pts = [...z.polygon, z.polygon[0]].map(([x, y]) => toW(x, y, 0.6));
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineDashedMaterial({ color: '#dc2626', dashSize: 4, gapSize: 3 }));
  line.computeLineDistances();
  scene.add(line);
  const xs = z.polygon.map((p) => p[0]), ys = z.polygon.map((p) => p[1]);
  const houseMat = new THREE.MeshStandardMaterial({ color: '#f5efe3', transparent: true, opacity: 0.6 });
  const roofMat = new THREE.MeshStandardMaterial({ color: '#b45309', transparent: true, opacity: 0.6 });
  for (let x = Math.min(...xs) + 10; x < Math.max(...xs) - 6; x += 15) {
    for (let y = Math.min(...ys) + 10; y < Math.max(...ys) - 6; y += 16) {
      if (!pointInPoly(x, y, z.polygon) || hash01(`${x},${y}`) < 0.25) continue;
      const hb = new THREE.Mesh(new THREE.BoxGeometry(8, 4, 6), houseMat);
      hb.position.copy(toW(x, y, 2.35));
      const rf = new THREE.Mesh(new THREE.ConeGeometry(6.2, 3, 4), roofMat);
      rf.rotation.y = Math.PI / 4; rf.scale.set(1, 1, 0.78);
      rf.position.copy(toW(x, y, 5.85));
      for (const m of [hb, rf]) { m.userData.ref = { kind: 'zone', id: z.id }; pickables.push(m); scene.add(m); }
    }
  }
  const c = z.polygon.reduce((a, p) => [a[0] + p[0] / z.polygon.length, a[1] + p[1] / z.polygon.length], [0, 0]);
  const sp = makeLabel(z.name, { bg: 'rgba(254,242,242,0.95)', color: '#991b1b', border: 'rgba(220,38,38,0.4)' });
  sp.position.copy(toW(c[0], c[1], 9));
  registerLabel(sp, 30, { minDist: 600, key: `zone:${z.id}` });
  z.center = c;
}

/* ---------- Gates ---------- */
for (const poi of DATA.pois || []) {
  const [x, y] = poi.at;
  const g = new THREE.Group();
  g.position.copy(toW(x, y));
  const along = poi.axis === 'ew' ? 'z' : 'x';
  const pillarMat = mat('#334155'), beamMat = mat('#facc15');
  for (const s of [-1, 1]) {
    const pl = new THREE.Mesh(new THREE.BoxGeometry(1.6, 9, 1.6), pillarMat);
    pl.position[along] = s * 7.5; pl.position.y = 4.5; pl.castShadow = true; g.add(pl);
  }
  const beam = new THREE.Mesh(along === 'x' ? new THREE.BoxGeometry(17, 1.4, 1.8) : new THREE.BoxGeometry(1.8, 1.4, 17), beamMat);
  beam.position.y = 9.3; beam.castShadow = true; g.add(beam);
  g.traverse((o) => { if (o.isMesh) { o.userData.ref = { kind: 'poi', id: poi.id }; pickables.push(o); } });
  scene.add(g);
  const sp = makeLabel(poi.name, { bg: 'rgba(250,204,21,0.96)', color: '#1f2937', border: 'rgba(0,0,0,0.2)' });
  sp.position.copy(toW(x, y, 12));
  registerLabel(sp, 60, { key: `poi:${poi.id}` });
}

/* ---------- Trees ---------- */
{
  const spots = [];
  const blocked = (x, y, pad) => {
    for (const p of DATA.plots) { const r = p.rect; if (x > r[0] - pad && x < r[2] + pad && y > r[1] - pad && y < r[3] + pad) return true; }
    const pr = projectToGraph(x, y);
    return pr && pr.d < (ROADS[pr.e.road].width || 8) / 2 + pad;
  };
  // ring of trees just outside the estate boundary
  const B = DATA.boundary;
  for (let i = 0; i < B.length; i++) {
    const [x0, y0] = B[i], [x1, y1] = B[(i + 1) % B.length];
    const len = Math.hypot(x1 - x0, y1 - y0);
    const nx = (y1 - y0) / len, ny = -(x1 - x0) / len;
    for (let d = 6; d < len - 4; d += 11) {
      const x = x0 + ((x1 - x0) * d) / len, y = y0 + ((y1 - y0) * d) / len;
      for (const off of [7, -7]) {
        const tx = x + nx * off, ty = y + ny * off;
        if (!pointInPoly(tx, ty, B) && !blocked(tx, ty, 2)) { spots.push([tx, ty]); break; }
      }
    }
  }
  // scattered trees in leftover green space inside the estate
  for (let x = 30; x < 440; x += 9) {
    for (let y = 50; y < 645; y += 9) {
      const jx = x + (hash01(`tx${x},${y}`) - 0.5) * 5, jy = y + (hash01(`ty${x},${y}`) - 0.5) * 5;
      if (!pointInPoly(jx, jy, B) || blocked(jx, jy, 3)) continue;
      if ((DATA.zones || []).some((z) => pointInPoly(jx, jy, z.polygon))) { if (hash01(`z${x}${y}`) < 0.85) continue; }
      if (hash01(`k${x},${y}`) < 0.35) continue;
      spots.push([jx, jy]);
    }
  }
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.35, 0.5, 3, 5), mat('#7c5a3a'), spots.length);
  const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(2.6, 0), mat('#4f9a52', { flatShading: true }), spots.length);
  crown.castShadow = true;
  const o = new THREE.Object3D();
  const col = new THREE.Color();
  spots.forEach(([x, y], i) => {
    const s = 0.8 + hash01(`s${x}${y}`) * 0.6;
    o.position.copy(toW(x, y, 1.5 * s)); o.scale.setScalar(s); o.rotation.set(0, hash01(`r${x}`) * 6, 0); o.updateMatrix();
    trunk.setMatrixAt(i, o.matrix);
    o.position.y = 4.2 * s; o.updateMatrix();
    crown.setMatrixAt(i, o.matrix);
    crown.setColorAt(i, col.set('#4f9a52').offsetHSL((hash01(`c${x}${y}`) - 0.5) * 0.05, 0, (hash01(`l${y}`) - 0.5) * 0.12));
  });
  scene.add(trunk, crown);
}

/* ---------- Selection highlight ---------- */
const highlight = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), new THREE.LineBasicMaterial({ color: '#f59e0b' }));
highlight.visible = false;
scene.add(highlight);
const glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#fbbf24', transparent: true, opacity: 0.35, depthWrite: false }));
glow.visible = false;
scene.add(glow);

/* ---------- Pins ---------- */
function makePin(color, letter) {
  const g = new THREE.Group();
  const head = new THREE.Group();
  const stem = new THREE.Mesh(new THREE.ConeGeometry(1.6, 7, 16).rotateX(Math.PI), mat(color, { roughness: 0.4 }));
  stem.position.y = 3.5;
  const ball = new THREE.Mesh(new THREE.SphereGeometry(3, 24, 16), mat(color, { roughness: 0.35 }));
  ball.position.y = 8.5;
  ball.castShadow = true;
  head.add(stem, ball);
  const c = document.createElement('canvas'); c.width = c.height = 96;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.font = 'bold 64px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(letter, 48, 54);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sp.scale.set(4.6, 4.6, 1); sp.position.y = 8.5; sp.renderOrder = 30;
  head.add(sp);
  const ring = new THREE.Mesh(new THREE.RingGeometry(2.2, 3.4, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, depthWrite: false }));
  ring.position.y = 0.9;
  g.add(head, ring);
  g.userData.head = head;
  g.userData.ring = ring;
  g.visible = false;
  scene.add(g);
  return g;
}
const pinA = makePin('#16a34a', 'A');
const pinB = makePin('#dc2626', 'B');

/* ---------- Route rendering ---------- */
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

function ribbon(points, width, y, material, uvPeriod) {
  const pos = [], uv = [], idx = [];
  let cum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i], [x1, y1] = points[i + 1];
    const len = Math.hypot(x1 - x0, y1 - y0);
    if (len < 1e-6) continue;
    const dx = (x1 - x0) / len, dy = (y1 - y0) / len, nx = -dy * width / 2, ny = dx * width / 2;
    const ext0 = i > 0 ? width / 2 : 0, ext1 = i < points.length - 2 ? width / 2 : 0;
    const ax = x0 - dx * ext0, ay = y0 - dy * ext0, bx = x1 + dx * ext1, by = y1 + dy * ext1;
    const yy = y + i * 0.015, b = pos.length / 3;
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
  const m = new THREE.Mesh(g, material);
  m.renderOrder = 5;
  return m;
}
function dots(a, b) {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const n = Math.max(1, Math.floor(len / 2.6));
  const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.75, 0.75, 0.2, 10), connectorMat, n + 1);
  const o = new THREE.Object3D();
  for (let i = 0; i <= n; i++) {
    o.position.copy(toW(lerp(a[0], b[0], i / n), lerp(a[1], b[1], i / n), 0.95)); o.updateMatrix(); im.setMatrixAt(i, o.matrix);
  }
  return im;
}
function clearRouteMeshes() {
  for (const c of [...routeGroup.children]) { routeGroup.remove(c); c.geometry?.dispose(); }
}

/* ---------- Mover (preview) ---------- */
function makeCar() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(6, 1.8, 3), mat('#f59e0b', { roughness: 0.5 }));
  body.position.y = 1.4; body.castShadow = true;
  const cab = new THREE.Mesh(new THREE.BoxGeometry(3, 1.4, 2.6), mat('#1e293b', { roughness: 0.3 }));
  cab.position.set(-0.4, 2.9, 0);
  g.add(body, cab);
  return g;
}
function makeWalker() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 3.4, 12), mat('#2563eb', { roughness: 0.5 }));
  body.position.y = 2.2; body.castShadow = true;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 12), mat('#fcd34d'));
  head.position.y = 4.6;
  g.add(body, head);
  return g;
}
const car = makeCar(), walker = makeWalker();
car.visible = walker.visible = false;
scene.add(car, walker);

/* ================================================================
 * Camera helpers
 * ================================================================ */
let tween = null;
function flyTo({ target, distance, phi, theta, dur = 0.9, done }) {
  const off = camera.position.clone().sub(controls.target);
  const s = new THREE.Spherical().setFromVector3(off);
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
  const sph = new THREE.Spherical(lerp(tween.s0.r, tween.s1.r, k), lerp(tween.s0.phi, tween.s1.phi, k), lerp(tween.s0.theta, tween.s1.theta, k));
  camera.position.setFromSpherical(sph).add(controls.target);
  camera.lookAt(controls.target);
  if (tween.t >= 1) { const d = tween.done; tween = null; d && d(); }
}
let visibleAspect = 1;
function fitBounds(x0, y0, x1, y1, opts = {}) {
  const pad = opts.pad ?? 1.25;
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const halfW = Math.max(20, (x1 - x0) / 2), halfH = Math.max(20, (y1 - y0) / 2);
  const vf = THREE.MathUtils.degToRad(camera.fov) / 2;
  const hf = Math.atan(Math.tan(vf) * visibleAspect);
  const phi = opts.phi ?? (state.view3d ? 0.72 : 0.02);
  const theta = opts.theta ?? 0;
  // rotate extents into the view so a rotated camera still fits the box
  const c = Math.abs(Math.cos(theta)), s = Math.abs(Math.sin(theta));
  const rw = halfW * c + halfH * s, rh = (halfW * s + halfH * c) * (0.75 + 0.25 * Math.cos(phi));
  const dist = clamp(Math.max(rw / Math.tan(hf), rh / Math.tan(vf)) * pad, controls.minDistance, controls.maxDistance);
  flyTo({ target: toW(cx, cy), distance: dist, phi, theta, dur: opts.dur });
}

/* ================================================================
 * App state + UI
 * ================================================================ */
const state = { from: null, to: null, mode: 'drive', pick: null, selected: null, route: null, view3d: true, labels: true, preview: null };

const places = [
  ...DATA.plots.map((p) => ({ ref: { kind: 'plot', id: p.id }, name: plotName(p), sub: `${TYPES[p.type].label} · ${fmtArea(p.rect)}`, color: TYPES[p.type].roof || '#cbd5e1', search: `${plotName(p)} ${p.id} ${TYPES[p.type].label}`.toLowerCase() })),
  ...(DATA.pois || []).map((p) => ({ ref: { kind: 'poi', id: p.id }, name: p.name, sub: 'Gate', color: '#facc15', search: `${p.name} gate`.toLowerCase() })),
  ...(DATA.zones || []).map((z) => ({ ref: { kind: 'zone', id: z.id }, name: z.name, sub: 'Zone', color: '#dc2626', search: z.name.toLowerCase() })),
].sort((a, b) => {
  const pa = a.ref.kind === 'plot' ? 1 : 0, pb = b.ref.kind === 'plot' ? 1 : 0;
  return pa - pb || a.name.localeCompare(b.name, undefined, { numeric: true });
});

function refKey(ref) { return ref.kind === 'point' ? `pt:${ref.x.toFixed(1)},${ref.y.toFixed(1)}` : `${ref.kind}:${ref.id}`; }
function parseRef(s) {
  if (!s) return null;
  const [kind, rest] = [s.slice(0, s.indexOf(':')), s.slice(s.indexOf(':') + 1)];
  if (kind === 'pt') { const [x, y] = rest.split(',').map(Number); return isFinite(x) && isFinite(y) ? { kind: 'point', x, y } : null; }
  return resolve({ kind, id: rest }) ? { kind, id: rest } : null;
}
function resolve(ref) {
  if (!ref) return null;
  if (ref.kind === 'plot') {
    const P = plots.get(ref.id); if (!P) return null;
    return { name: plotName(P.p), sub: `${P.t.label} · ${fmtArea(P.p.rect)}`, x: P.center[0], y: P.center[1], rect: P.p.rect, color: P.t.roof || '#cbd5e1', typeLabel: P.t.label };
  }
  if (ref.kind === 'poi') {
    const p = (DATA.pois || []).find((q) => q.id === ref.id); if (!p) return null;
    return { name: p.name, sub: 'Gate', x: p.at[0], y: p.at[1], color: '#facc15', typeLabel: 'Gate' };
  }
  if (ref.kind === 'zone') {
    const z = (DATA.zones || []).find((q) => q.id === ref.id); if (!z) return null;
    return { name: z.name, sub: 'Zone', x: z.center[0], y: z.center[1], poly: z.polygon, color: '#dc2626', typeLabel: 'Zone' };
  }
  const pr = projectToGraph(ref.x, ref.y);
  const near = pr && pr.d < 10 ? ` on ${ROADS[pr.e.road].name}` : '';
  return { name: `Dropped pin${near}`, sub: 'Map location', x: ref.x, y: ref.y, color: '#64748b', typeLabel: 'Location' };
}

// Where a place meets the road network: the projection onto the nearest road,
// plus the "door" (the point on the lot's edge facing that road).
function access(ref) {
  const info = resolve(ref);
  const pr = projectToGraph(info.x, info.y);
  let door = [info.x, info.y];
  if (info.rect) {
    const [x0, y0, x1, y1] = info.rect;
    door = [clamp(pr.x, x0, x1), clamp(pr.y, y0, y1)];
  } else if (ref.kind === 'poi') {
    door = [pr.x, pr.y];
  }
  return { info, pr, door };
}

/* ---------- route compute/draw ---------- */
function computeRoute() {
  stopPreview();
  clearRouteMeshes();
  state.route = null;
  if (!state.from || !state.to) return renderRouteUI();
  if (refKey(state.from) === refKey(state.to)) { state.route = { same: true }; return renderRouteUI(); }
  const A = access(state.from), B = access(state.to);
  const path = shortestPath(A.pr, B.pr);
  if (!path) { state.route = { none: true }; return renderRouteUI(); }

  routeGroup.add(ribbon(path.points, 6.4, 0.42, routeEdgeMat, 1e9));
  routeGroup.add(ribbon(path.points, 4.6, 0.5, routeMat, 9));
  const walkA = Math.hypot(A.door[0] - A.pr.x, A.door[1] - A.pr.y);
  const walkB = Math.hypot(B.door[0] - B.pr.x, B.door[1] - B.pr.y);
  if (walkA > 0.5) routeGroup.add(dots(A.door, [A.pr.x, A.pr.y]));
  if (walkB > 0.5) routeGroup.add(dots([B.pr.x, B.pr.y], B.door));

  const full = [A.door, ...path.points, B.door].filter((p, i, arr) => i === 0 || Math.hypot(p[0] - arr[i - 1][0], p[1] - arr[i - 1][1]) > 0.01);
  state.route = {
    path, full, length: path.length + walkA + walkB,
    steps: buildSteps(path, A.info.name, B.info.name),
    via: [...new Set(path.roads.map((r) => ROADS[r].name))],
    doors: [A.door, B.door],
  };
  renderRouteUI();
  fitRoute();
  writeHash();
}
function fitRoute() {
  if (!state.route?.full) return;
  const xs = state.route.full.map((p) => p[0]), ys = state.route.full.map((p) => p[1]);
  fitBounds(Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys), { pad: visibleAspect < 1 ? 1.6 : 1.35, theta: 0 });
}

function updatePins() {
  for (const [pin, ref, which] of [[pinA, state.from, 0], [pinB, state.to, 1]]) {
    if (!ref) { pin.visible = false; continue; }
    const pos = state.route?.doors ? state.route.doors[which] : (() => { const a = access(ref); return a.door; })();
    pin.position.copy(toW(pos[0], pos[1], 0));
    pin.visible = true;
  }
}

/* ---------- preview animation ---------- */
function startPreview() {
  const r = state.route;
  if (!r?.full) return;
  const pts = r.full, cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const mover = state.mode === 'walk' ? walker : car;
  car.visible = walker.visible = false;
  mover.visible = true;
  state.preview = { pts, cum, s: 0, total: cum[cum.length - 1], mover, speed: state.mode === 'walk' ? 22 : 55 };
  const p0 = pts[0];
  flyTo({ target: toW(p0[0], p0[1]), distance: 140, phi: 0.85, dur: 0.8 });
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
  const segLen = pv.cum[i] - pv.cum[i - 1] || 1;
  const t = (pv.s - pv.cum[i - 1]) / segLen;
  const x = lerp(a[0], b[0], t), y = lerp(a[1], b[1], t);
  pv.mover.position.copy(toW(x, y, 0.6));
  const targetRot = -Math.atan2(b[1] - a[1], b[0] - a[0]);
  let dr = targetRot - pv.mover.rotation.y;
  dr = Math.atan2(Math.sin(dr), Math.cos(dr));
  pv.mover.rotation.y += dr * Math.min(1, dt * 10);
  _tmp.copy(pv.mover.position).setY(0).sub(controls.target).multiplyScalar(Math.min(1, dt * 4));
  controls.target.add(_tmp);
  camera.position.add(_tmp);
  if (pv.s >= pv.total) {
    pv.doneAt = pv.doneAt ?? performance.now();
    if (performance.now() - pv.doneAt > 1200) { stopPreview(); fitRoute(); }
  }
}

/* ---------- selection ---------- */
function select(ref, { fly = false } = {}) {
  state.selected = ref;
  const card = $('#infoCard');
  if (!ref) { highlight.visible = glow.visible = false; card.hidden = true; updateLabelPriority(); return; }
  const info = resolve(ref);
  highlight.visible = glow.visible = false;
  if (ref.kind === 'plot') {
    const P = plots.get(ref.id);
    highlight.scale.set(P.w + 1.2, P.height + 1, P.h + 1.2);
    highlight.position.copy(toW(P.center[0], P.center[1], (P.height + 1) / 2));
    glow.scale.set(P.w + 4, 1, P.h + 4);
    glow.position.copy(toW(P.center[0], P.center[1], 0.8));
    highlight.visible = glow.visible = true;
  }
  $('#infoSwatch').style.background = info.color;
  $('#infoName').textContent = info.name;
  $('#infoSub').textContent = info.sub;
  card.hidden = false;
  updateLabelPriority();
  if (fly) flyTo({ target: toW(info.x, info.y), distance: 150, dur: 0.8 });
}

/* ---------- UI rendering ---------- */
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
}
function renderRouteUI() {
  setField('from'); setField('to');
  updatePins();
  const sum = $('#summary'), steps = $('#steps'), hint = $('#hint');
  steps.innerHTML = '';
  const r = state.route;
  hint.hidden = !!r;
  sum.hidden = !r;
  if (!r) {
    hint.textContent = !state.from && !state.to ? 'Pick a start and destination, or tap a building on the map.'
      : !state.from ? 'Now choose where you are starting from.' : 'Now choose your destination.';
    $('#sheet').classList.remove('has-route');
    return;
  }
  if (r.same || r.none) {
    $('#sumTime').textContent = r.same ? 'You are already there' : 'No route found';
    $('#sumMeta').textContent = '';
    $('#previewBtn').hidden = $('#stepsToggle').hidden = true;
    return;
  }
  $('#previewBtn').hidden = $('#stepsToggle').hidden = false;
  $('#sheet').classList.add('has-route');
  $('#sumTime').textContent = fmtTime(r.length, state.mode);
  $('#sumMeta').textContent = `${fmtDist(r.length)} · via ${r.via.slice(0, 2).join(', ')}${r.via.length > 2 ? '…' : ''}`;
  for (const s of r.steps) {
    const li = document.createElement('li');
    li.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[s.icon]}</svg><span class="txt"></span><span class="d"></span>`;
    li.querySelector('.txt').textContent = s.text;
    li.querySelector('.d').textContent = s.dist;
    if (s.at) { li.tabIndex = 0; li.addEventListener('click', () => flyTo({ target: toW(s.at[0], s.at[1]), distance: 110, dur: 0.7 })); }
    steps.appendChild(li);
  }
}
function setEndpoint(which, ref) {
  state[which] = ref;
  state.pick = null;
  $('#pickBanner').hidden = true;
  document.querySelectorAll('.pick').forEach((b) => b.classList.remove('active'));
  computeRoute();
  updateLabelPriority();
}

/* ---------- picker ---------- */
let pickerFor = null;
function openPicker(forWhat) {
  pickerFor = forWhat;
  $('#pickerTitle').textContent = forWhat === 'from' ? 'Start from' : forWhat === 'to' ? 'Go to' : 'Find a place';
  $('#picker').hidden = false;
  const input = $('#pickerInput');
  input.value = '';
  renderPicker('');
  setTimeout(() => input.focus(), 50);
}
function closePicker() { $('#picker').hidden = true; pickerFor = null; }
function renderPicker(q) {
  const list = $('#pickerList');
  list.innerHTML = '';
  const qq = q.trim().toLowerCase();
  const items = places.filter((p) => !qq || qq.split(/\s+/).every((w) => p.search.includes(w)));
  if (!items.length) { list.innerHTML = '<li class="empty">No matching places</li>'; return; }
  for (const it of items) {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.innerHTML = '<span class="sw"></span><span class="nm"><b></b><small></small></span>';
    b.querySelector('.sw').style.background = it.color;
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
    if (_v.z > 1 || _v.x < -1.2 || _v.x > 1.2 || _v.y < -1.2 || _v.y > 1.2) { sp.visible = false; continue; }
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
  // On phones the bottom sheet covers part of the map; shift the projection so the
  // map's centre sits in the visible area above it.
  // On desktop the side panel covers the left edge instead.
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
  if (tween) { tween = null; }
  down = activePointers.size === 1 ? { x: e.clientX, y: e.clientY, t: performance.now(), multi: false } : { ...(down || {}), multi: true };
});
canvas.addEventListener('pointercancel', (e) => activePointers.delete(e.pointerId));
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
  const ndc = new THREE.Vector2(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObjects(pickables, false)[0];
  let ref = hit?.object.userData.ref || null;
  if (!ref) {
    const p = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(groundPlane, p)) {
      const x = p.x + CX, y = p.z + CZ;
      if (pointInPoly(x, y, DATA.boundary) || (DATA.zones || []).some((z) => pointInPoly(x, y, z.polygon))) ref = { kind: 'point', x, y };
    }
  }
  if (state.pick) { if (ref) setEndpoint(state.pick, ref); return; }
  if (ref && ref.kind !== 'point') select(ref);
  else if (ref && ref.kind === 'point') select(ref);
  else select(null);
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
  if (state.preview) stopPreview();
  renderRouteUI();
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
// swipe the sheet up/down on phones
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
  const r = state.selected; select(null); setEndpoint('to', r);
  if (!state.from) openPicker('from');
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
$('#fitBtn').addEventListener('click', () => (state.route?.full ? fitRoute() : fitEstate()));
$('#compassBtn').addEventListener('click', () => flyTo({ theta: 0 }));
function fitEstate() {
  const xs = DATA.boundary.map((p) => p[0]), ys = DATA.boundary.map((p) => p[1]);
  fitBounds(Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys), { pad: visibleAspect < 1 ? 1.25 : 1.05, theta: 0 });
}

// legend
{
  const lg = $('#legend');
  for (const [k, t] of Object.entries(TYPES)) {
    const li = document.createElement('li');
    li.innerHTML = '<span class="sw"></span><span></span>';
    li.firstChild.style.background = t.roof || t.ground;
    if (k === 'available') li.firstChild.style.outline = '1px solid #94a3b8';
    li.lastChild.textContent = t.label;
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
  for (const pin of [pinA, pinB]) if (pin.visible) {
    pin.userData.head.position.y = Math.sin(t * 3 + (pin === pinB ? 1.5 : 0)) * 0.6 + 0.6;
    const s = 1 + ((t * 0.8) % 1) * 1.2;
    pin.userData.ring.scale.set(s, 1, s);
    pin.userData.ring.material.opacity = 0.6 * (1 - ((t * 0.8) % 1));
  }
  if (glow.visible) glow.material.opacity = 0.25 + Math.sin(t * 4) * 0.1;
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
{
  const xs = DATA.boundary.map((p) => p[0]), ys = DATA.boundary.map((p) => p[1]);
  controls.target.copy(toW((Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2));
  camera.position.copy(controls.target).add(new THREE.Vector3(0, 900, 700));
}
if (state.from && state.to) computeRoute(); else fitEstate();
$('#loading').remove();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
