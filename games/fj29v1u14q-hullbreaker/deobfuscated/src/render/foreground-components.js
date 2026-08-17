import { MERIDIAN_DEFENSE_STATES as _0x3097f5, meridianResponsePlan as _0x1f6fd7 } from "../pure/meridian-response.js";
import { FOREGROUND_CUTOUT_COMPONENTS as _0x163d08 } from "./foreground-component-spec.generated.js";
export { _0x3097f5 as MERIDIAN_DEFENSE_STATES };
export { _0x163d08 as FOREGROUND_CUTOUT_COMPONENTS };
const a = Object.freeze(["forged-teal-plate", "overlapping-teal-scutes", "welded-teal-fascia", "ribbed-hull-skin", "oxidized-route-fascia", "riveted-rust-armor", "battered-rust-overlap", "integrated-rust-grate", "hex-reinforcement", "wide-cable-channel", "pressure-rib-panel", "broad-vented-armor", "impact-pitted-teal", "oil-streaked-fascia", "peeled-oxidized-paint", "heat-scorched-skin"]);
const s = Object.freeze(["ventilation-throat", "heavy-louver-bank", "inspection-cavity", "conduit-manifold", "grate-girder-junction", "ladder-service-bay", "armored-cable-bank", "machine-ribs", "pressure-hatch", "exhaust-throat", "coolant-coil", "hydraulic-manifold", "broken-guard-frame", "service-cassette", "pressure-collar", "armored-junction"]);
const n = Object.freeze(["deck-fascia-insert", "aperture-gusset", "i-beam-junction", "grate-bridge-socket", "lower-ladder-socket", "upper-ladder-socket", "guard-anchor", "broken-guard-socket", "broad-cable-saddle", "paired-pipe-clamps", "branching-conduit", "sensor-shroud", "coolant-reservoir", "pressure-cylinder-rack", "service-locker", "hoist-chain-socket"]);
const o = Object.freeze(["observe-sensor-lid", "observe-diagnostic-shutter", "observe-scan-iris", "observe-wake-relay", "intercept-route-clamp", "intercept-lock-track", "contain-pressure-brace", "contain-defense-socket", "quarantine-bulkhead-seal", "quarantine-landing-denial", "quarantine-purge-vent", "sterilize-power-junction", "scuttle-overdriven-clamp", "scuttle-sheared-scutes", "scuttle-controlled-excision", "scuttle-spent-purge-scar"]);
const c = (_0x3ba92e, _0x3931c6 = 0.5, _0x5dab99 = 0.5) => Object.freeze({
  name: _0x3ba92e,
  x: _0x3931c6,
  y: _0x5dab99
});
const i = (_0x511fec, _0x21b4b7 = 0.5, _0x267e65 = 0.5) => Object.freeze({
  kind: _0x511fec,
  x: _0x21b4b7,
  y: _0x267e65
});
const l = (_0x4940c5, _0x5ea673 = false, _0x102191 = [0]) => Object.freeze({
  stretchAxes: Object.freeze(_0x4940c5),
  mirrorX: _0x5ea673,
  rotations: Object.freeze(_0x102191)
});
function d(_0x5916c2, _0x359310, _0x42b9f4, _0x2088dd) {
  return Object.freeze({
    id: "atlas-" + _0x5916c2.toLowerCase() + "-" + String(_0x359310).padStart(2, "0") + "-" + _0x42b9f4,
    renderKind: "atlas",
    sheet: _0x5916c2,
    localIndex: _0x359310,
    name: _0x42b9f4,
    category: _0x2088dd.category,
    nativeAspect: _0x2088dd.nativeAspect ?? 1,
    trimRectPx: Object.freeze(_0x2088dd.trimRectPx || [16, 16, 240, 240]),
    transforms: _0x2088dd.transforms,
    anchors: Object.freeze(_0x2088dd.anchors),
    sockets: Object.freeze(_0x2088dd.sockets || []),
    depthBand: _0x2088dd.depthBand,
    phaseRange: Object.freeze(_0x2088dd.phaseRange || [0, 5]),
    rarity: _0x2088dd.rarity ?? 1,
    state: _0x2088dd.state || null,
    stateHooks: Object.freeze(_0x2088dd.stateHooks || ["dormant"]),
    gameplayRole: _0x2088dd.gameplayRole || "surface-readability",
    emissive: false
  });
}
const u = [];
for (let g = 0; g < a.length; g++) {
  u.push(d("A", g, a[g], {
    category: g < 12 ? "material-fill" : "material-wear",
    nativeAspect: [1.8, 1.65, 2.1, 1.9, 1.75, 1.55, 1.7, 1.6, 1.45, 2.2, 1.7, 1.8, 1.55, 1.9, 1.6, 1.75][g],
    trimRectPx: [20, 20, 236, 236],
    transforms: l(["x", "y"], true, [0, 2]),
    anchors: [c("surface-center")],
    depthBand: "skin",
    rarity: g < 12 ? 4 : 2
  }));
}
for (let h = 0; h < s.length; h++) {
  u.push(d("B", h, s[h], {
    category: "service-organ",
    trimRectPx: [10, 10, 246, 246],
    transforms: l([], h === 2 || h === 3 || h === 6, [0]),
    anchors: [c("aperture-center")],
    sockets: [i(h % 3 == 0 ? "conduit" : "service")],
    depthBand: "recessed",
    rarity: 1.25,
    gameplayRole: h === 2 || h === 8 ? "cover-read" : "service-landmark"
  }));
}
for (let m = 0; m < n.length; m++) {
  const b = m < 4 ? "structural-socket" : m < 8 ? "traversal-socket" : m < 12 ? "conduit-resource" : "service-resource";
  const O = m < 4 ? "load-path-read" : m < 8 ? "route-socket" : m < 12 ? "hazard-socket" : "resource-landmark";
  u.push(d("C", m, n[m], {
    category: b,
    trimRectPx: [14, 14, 242, 242],
    transforms: l([], m === 0 || m === 1 || m >= 8, [0]),
    anchors: [c(m < 8 ? "load-junction" : "resource-center")],
    sockets: [i(m < 8 ? "traversal" : m < 12 ? "conduit" : "resource")],
    depthBand: m < 8 ? "proud" : "recessed",
    rarity: 0.8,
    gameplayRole: O
  }));
}
const p = ["observe", "observe", "observe", "observe", "intercept", "intercept", "contain", "contain", "quarantine", "quarantine", "quarantine", "sterilize", "scuttle", "scuttle", "scuttle", "scuttle"];
for (let v = 0; v < o.length; v++) {
  const k = p[v];
  const R = _0x3097f5.indexOf(k);
  u.push(d("D", v, o[v], {
    category: R === 5 ? "scuttle-damage" : "defense-state",
    trimRectPx: [24, 24, 232, 232],
    transforms: l([], v === 3 || v === 4 || v === 5 || v >= 12, [0]),
    anchors: [c("defense-mount")],
    sockets: [i(v === 9 ? "landing-denial" : v === 10 ? "purge" : v === 11 ? "kill-lattice" : v >= 12 ? "rupture" : "defense")],
    depthBand: v >= 12 ? "broken-skin" : "proud",
    phaseRange: [R, 5],
    rarity: R === 5 ? 0.5 : 0.7,
    state: k,
    stateHooks: R === 0 ? ["dormant", "armed"] : R === 5 ? ["active", "spent", "damaged"] : ["dormant", "armed", "active"],
    gameplayRole: v === 9 ? "landing-denial-tell" : v === 10 ? "purge-tell" : v === 11 ? "kill-lattice-tell" : v >= 12 ? "route-damage-read" : "defense-wake-tell"
  }));
}
export const FOREGROUND_ATLAS_COMPONENTS = Object.freeze(u);
export const FOREGROUND_PROCEDURAL_COMPONENTS = Object.freeze([function (_0x13796d, _0x4a2db7, _0x28c08f, _0x25bf56, _0x598196 = {}) {
  return Object.freeze({
    id: _0x13796d,
    name: _0x13796d,
    category: _0x4a2db7,
    renderKind: _0x28c08f,
    nativeAspect: _0x25bf56,
    trimRectPx: null,
    transforms: l(_0x598196.stretchAxes || [], _0x598196.mirrorX || false, _0x598196.rotations || [0]),
    anchors: Object.freeze(_0x598196.anchors || [c("structure")]),
    sockets: Object.freeze(_0x598196.sockets || []),
    depthBand: _0x598196.depthBand || "proud",
    phaseRange: Object.freeze(_0x598196.phaseRange || [0, 5]),
    rarity: _0x598196.rarity ?? 1,
    state: _0x598196.state || null,
    stateHooks: Object.freeze(_0x598196.stateHooks || ["dormant"]),
    gameplayRole: _0x598196.gameplayRole || "structure-read",
    emissive: false
  });
}("aperture-housing", "service-organ", "box", 1, {
  anchors: [c("aperture-center")],
  depthBand: "recessed"
})]);
const f = new Map([...FOREGROUND_ATLAS_COMPONENTS, ..._0x163d08, ...FOREGROUND_PROCEDURAL_COMPONENTS].map(_0x4bbed4 => [_0x4bbed4.id, _0x4bbed4]));
export function foregroundComponentById(_0xfa306a) {
  return f.get(_0xfa306a) || null;
}
export function foregroundCompositionForModule(_0x57500a, _0x26c5f7, _0x29a371) {
  const _0xa1fd06 = _0x3097f5[Math.max(0, Math.min(5, _0x57500a))];
  const _0x211441 = function (_0x298ed7) {
    let _0x188e9c = (Math.trunc(_0x298ed7) ^ -1640531527) >>> 0;
    _0x188e9c = Math.imul(_0x188e9c ^ _0x188e9c >>> 16, 569420461);
    _0x188e9c = Math.imul(_0x188e9c ^ _0x188e9c >>> 15, 1935289751);
    return (_0x188e9c ^ _0x188e9c >>> 15) >>> 0;
  }(_0x26c5f7 * 131 + _0x57500a * 977 + _0x29a371 * 37);
  const _0x1f3ba0 = _0x29a371 === 3 ? "surfaceWarm" : _0x57500a >= 2 && _0x29a371 === 2 ? "surfaceWear" : "surfaceCold";
  let _0x3f994e = null;
  if (_0x26c5f7 % 9 == 5) {
    _0x3f994e = "resource";
  } else if (_0x29a371 === 0 && _0x26c5f7 % 3 == 0) {
    _0x3f994e = "serviceVent";
  } else if (_0x29a371 === 1 && _0x26c5f7 % 4 == 1) {
    _0x3f994e = "serviceConduit";
  } else if (_0x29a371 === 2 && _0x26c5f7 % 4 == 2) {
    _0x3f994e = "serviceInspect";
  } else if (_0x29a371 === 4 && _0x26c5f7 % 7 == 4) {
    _0x3f994e = "serviceConduit";
  }
  const _0xba4133 = _0x1f6fd7(_0x57500a, _0x26c5f7, _0x29a371);
  const _0x5f0a79 = [["observe-sensor-hood", "observe-shutter-blade", "observe-scan-iris", "observe-wake-relay"], ["intercept-route-clamp", "intercept-lock-rail"], ["contain-pressure-brace", "contain-defense-socket"], ["quarantine-bulkhead-seal", "quarantine-denial-teeth", "quarantine-purge-nozzle"], ["sterilize-power-junction"], ["scuttle-overdriven-clamp", "scuttle-exposed-ribs", "scuttle-severed-conduit", "scuttle-spent-purge-ring"]];
  let _0x117891 = _0xba4133.active ? _0x5f0a79[_0x57500a][_0x211441 % _0x5f0a79[_0x57500a].length] : null;
  if (_0x57500a === 5 && _0xba4133.socketKind === "defense") {
    _0x117891 = "sterilize-power-junction";
  }
  const _0x122d6b = [["scute-edge", "pressure-pipe"], ["route-cap-long", "cable-bundle"], ["i-girder", "conduit-tee"], ["cross-brace", "route-cap-long"], ["scute-edge", "armor-shoulder"]][_0x29a371];
  return Object.freeze({
    state: _0xa1fd06,
    seed: _0x211441,
    surfaceRole: _0x1f3ba0,
    apertureRole: _0x3f994e,
    defenseShapeId: _0x117891,
    response: _0xba4133,
    shapeIds: Object.freeze(_0x122d6b)
  });
}
export function foregroundComponentCatalogStats() {
  const _0x465a9d = [...FOREGROUND_ATLAS_COMPONENTS, ..._0x163d08, ...FOREGROUND_PROCEDURAL_COMPONENTS];
  const _0x5d4ed7 = Object.create(null);
  for (const _0x20b450 of _0x465a9d) {
    _0x5d4ed7[_0x20b450.category] = (_0x5d4ed7[_0x20b450.category] || 0) + 1;
  }
  return {
    total: _0x465a9d.length,
    atlas: FOREGROUND_ATLAS_COMPONENTS.length,
    cutout: _0x163d08.length,
    procedural: FOREGROUND_PROCEDURAL_COMPONENTS.length,
    categories: _0x5d4ed7,
    emissiveDefaults: _0x465a9d.filter(_0x53b9ec => _0x53b9ec.emissive).length
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_FOREGROUND_COMPONENT_CATALOG = foregroundComponentCatalogStats;
}