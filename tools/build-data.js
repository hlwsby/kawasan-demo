// Builds ../site-data.js from OpenStreetMap data (osm.json) plus the hand-traced
// screenshot buildings (traced.js). Run: bun tools/build-data.js
// Also writes tools/check.svg, an overlay of both, to eyeball the alignment.
const fs = require('fs');
const path = require('path');
const T = require('./traced.js');

const osm = JSON.parse(fs.readFileSync(path.join(__dirname, 'osm.json'), 'utf8')).elements;
const LAT0 = -7.364192203496428, LON0 = 112.62121146973544;
const KX = 111320 * Math.cos((LAT0 * Math.PI) / 180), KY = 110574;
const geo = (lat, lon) => [r1((lon - LON0) * KX), r1(-(lat - LAT0) * KY)];
const px = ([x, y]) => [r1((x - T.originPx[0]) * T.scale), r1((y - T.originPx[1]) * T.scale)];
function r1(v) { return Math.round(v * 10) / 10; }

// Map area in metres (x east, y south of the factory pin).
const B = { x0: -330, y0: -960, x1: 830, y1: 130 };
const inside = ([x, y], m = 0) => x >= B.x0 - m && x <= B.x1 + m && y >= B.y0 - m && y <= B.y1 + m;

// Clip a polyline to the area (keeps runs of points inside, with one point of overhang).
function clipLine(pts) {
  const runs = [];
  let cur = [];
  pts.forEach((p, i) => {
    const inNow = inside(p);
    const nearIn = inNow || (i > 0 && inside(pts[i - 1])) || (i < pts.length - 1 && inside(pts[i + 1]));
    if (nearIn) cur.push(p);
    else if (cur.length) { runs.push(cur); cur = []; }
  });
  if (cur.length) runs.push(cur);
  return runs.filter((r) => r.length > 1);
}

const ROAD_STYLE = {
  primary: 14, secondary: 12, tertiary: 10, unclassified: 8, residential: 7,
  living_street: 5, service: 6, track: 4, path: 2.5, footway: 2.5,
};
const roads = [], water = [], areas = [], buildings = [];
for (const e of osm) {
  if (e.type !== 'way' || !e.geometry) continue;
  const t = e.tags || {};
  const pts = e.geometry.map((g) => geo(g.lat, g.lon));
  if (t.highway && ROAD_STYLE[t.highway]) {
    for (const run of clipLine(pts)) roads.push({ name: t.name || '', kind: t.highway, width: ROAD_STYLE[t.highway], points: run });
  } else if (t.waterway) {
    for (const run of clipLine(pts)) water.push({ name: t.name || '', width: t.waterway === 'river' ? 9 : 4, points: run });
  } else if (t.landuse === 'industrial' || t.landuse === 'residential') {
    if (pts.some((p) => inside(p, 200))) areas.push({ kind: t.landuse, polygon: pts });
  } else if (t.building) {
    if (pts.every((p) => inside(p))) buildings.push({ src: 'osm', poly: pts.slice(0, -1), name: t.name || '' });
  }
}

// Traced buildings
for (const [x0, y0, x1, y1] of T.buildings) {
  const a = px([x0, y0]), b = px([x1, y1]);
  buildings.push({ src: 'traced', poly: [[a[0], a[1]], [b[0], a[1]], [b[0], b[1]], [a[0], b[1]]], name: '' });
}

function pointInPoly(x, y, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function distToPoly(x, y, poly) {
  if (pointInPoly(x, y, poly)) return 0;
  let best = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const [ax, ay] = poly[i], [bx, by] = poly[(i + 1) % poly.length];
    const dx = bx - ax, dy = by - ay;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy || 1)));
    best = Math.min(best, Math.hypot(x - ax - t * dx, y - ay - t * dy));
  }
  return best;
}
const area = (poly) => Math.abs(poly.reduce((s, [x, y], i) => { const [x2, y2] = poly[(i + 1) % poly.length]; return s + x * y2 - x2 * y; }, 0) / 2);

// Places: link company pins to the building they sit on (within 25 m).
const pois = [];
for (const p of T.places) {
  const at = px(p.at);
  let best = null, bd = Infinity;
  for (const b of buildings) {
    if (b.src !== 'traced') continue;
    const d = distToPoly(at[0], at[1], b.poly);
    if (d < bd) { bd = d; best = b; }
  }
  if (p.kind === 'company' && best && bd < 25 && !best.name) { best.name = p.name; best.placeId = p.id; }
  else pois.push({ id: p.id, name: p.name, kind: p.kind, at });
}
for (const p of T.geoPlaces) pois.push({ id: p.id, name: p.name, kind: p.kind, at: geo(p.lat, p.lon), lat: p.lat, lon: p.lon });

// Give buildings ids and types. Big traced buildings are factories; small ones sheds;
// OSM buildings here are houses in the village south of the estate.
let n = 0;
const outBuildings = buildings.map((b) => {
  const a = area(b.poly);
  const type = b.src === 'osm' ? 'house' : a > 2500 ? 'factory' : a > 600 ? 'warehouse' : 'shed';
  return { id: b.placeId || `b${++n}`, name: b.name, type, poly: b.poly };
});

const data = {
  name: 'Driyorejo Industrial Area',
  generated: 'OpenStreetMap roads, canals and village buildings (© OpenStreetMap contributors, ODbL); estate buildings traced from a map screenshot.',
  geo: { lat0: LAT0, lon0: LON0, kx: KX, ky: KY },
  bounds: [B.x0, B.y0, B.x1, B.y1],
  center: [r1((B.x0 + B.x1) / 2), r1((B.y0 + B.y1) / 2)],
  driveKmh: 20,
  walkKmh: 4.8,
  types: {
    factory:   { label: 'Factory',         ground: '#c8d6c0', roof: '#7a8fa6', wall: '#e8ecf0', height: [9, 14] },
    warehouse: { label: 'Warehouse',       ground: '#c8d6c0', roof: '#94a3b8', wall: '#eef1f4', height: [6, 9] },
    shed:      { label: 'Small building',  ground: '#c8d6c0', roof: '#a8b4c2', wall: '#f1f5f9', height: [3, 5] },
    house:     { label: 'House',           ground: null,      roof: '#c2410c', wall: '#f5efe3', height: [3, 5] },
    company:   { label: 'Company',         ground: '#c8d6c0', roof: '#2f6fd6', wall: '#e6ebf5', height: [9, 14] },
  },
  roads, water, areas,
  buildings: outBuildings.map((b) => (b.name ? { ...b, type: 'company' } : b)),
  pois,
};

const header = `/*
 * Map data for the Driyorejo industrial area (generated by tools/build-data.js; edit
 * tools/traced.js and re-run it, or edit this file directly).
 *
 * Units are metres. x points east and y points south, measured from the
 * PT Wings Surya Driyorejo Factory pin (geo.lat0, geo.lon0). GPS positions are
 * converted with  x = (lon - lon0) * kx,  y = -(lat - lat0) * ky.
 *
 * To show a company name on a building, give it a "name".
 * ${data.generated}
 */
`;
fs.writeFileSync(path.join(__dirname, '..', 'site-data.js'), `${header}window.SITE_DATA = ${JSON.stringify(data)};\n`);
console.log(`roads ${roads.length}, water ${water.length}, areas ${areas.length}, buildings ${outBuildings.length} (named ${outBuildings.filter((b) => b.name).length}), pois ${pois.length}`);
console.log(pois.map((p) => `${p.name} @ ${p.at}`).join('\n'));

// Overlay check image
const S = 0.7, W = (B.x1 - B.x0) * S, H = (B.y1 - B.y0) * S;
const tp = ([x, y]) => `${((x - B.x0) * S).toFixed(1)},${((y - B.y0) * S).toFixed(1)}`;
const svg = [];
for (const b of outBuildings) svg.push(`<polygon points="${b.poly.map(tp).join(' ')}" fill="${b.name ? '#93c5fd' : '#d6d9de'}" stroke="#64748b"/>`);
for (const w of water) svg.push(`<polyline points="${w.points.map(tp).join(' ')}" fill="none" stroke="#38bdf8" stroke-width="${w.width * S}"/>`);
for (const r of roads) svg.push(`<polyline points="${r.points.map(tp).join(' ')}" fill="none" stroke="#ef4444" stroke-opacity=".7" stroke-width="${Math.max(1.5, r.width * S * 0.5)}"/>`);
for (const p of pois) { const [x, y] = tp(p.at).split(','); svg.push(`<circle cx="${x}" cy="${y}" r="6" fill="purple"/><text x="${+x + 8}" y="${y}" font-size="12">${p.name}</text>`); }
fs.writeFileSync(path.join(__dirname, 'check.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" height="100%" style="background:#fafafa">${svg.join('')}</svg>`);
