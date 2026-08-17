import { CONFIG as _0x54a286 } from "../config.js";
export const MERIDIAN_DEPTH_SOURCES = Object.freeze({
  far: Object.freeze({
    id: "meridian-anatomy",
    file: "../../assets/generated/backdrops/backdrop-meridian-anatomy-v1.webp",
    sourceFile: "../../assets/generated/backdrops/backdrop-meridian-anatomy-v1.png",
    canvas: Object.freeze([1672, 941]),
    alpha: false
  }),
  mid: Object.freeze({
    id: "meridian-coils",
    file: "../../assets/generated/backdrops/backdrop-meridian-coils-v3.webp",
    sourceFile: "../../assets/generated/backdrops/backdrop-meridian-coils-v3.png",
    canvas: Object.freeze([1983, 793]),
    alpha: true
  }),
  near: Object.freeze({
    id: "meridian-components",
    file: "../../assets/generated/environment/meridian-component-atlas-v1.webp",
    sourceFile: "../../assets/generated/environment/meridian-component-atlas-v1.png",
    canvas: Object.freeze([2048, 1024]),
    alpha: true
  })
});
export const MERIDIAN_DEPTH_LAYERS = Object.freeze([Object.freeze({
  id: "far",
  role: "far-meridian-mass",
  depth: -20,
  width: 200,
  curve: 9,
  opacity: 0.98,
  facingExponent: 1.9,
  portraitGain: 1.16,
  renderOrder: -62,
  source: "far"
}), Object.freeze({
  id: "mid",
  role: "mid-structural-anatomy",
  depth: -8.4,
  width: 118,
  curve: 2.7,
  opacity: 0.78,
  facingExponent: 24,
  portraitGain: 0.86,
  renderOrder: -56,
  source: "mid"
}), Object.freeze({
  id: "condensation",
  role: "world-condensation",
  depthRange: Object.freeze([-17.2, -5.2]),
  opacity: 0.012,
  facingExponent: 4,
  portraitGain: 0.64,
  renderOrder: -50,
  ribbonsPerFacet: 5
}), Object.freeze({
  id: "near",
  role: "near-armor-fragments",
  depth: -3.8,
  opacity: 0.4,
  facingExponent: 80,
  portraitGain: 0.68,
  renderOrder: -44,
  source: "near",
  fragmentsPerFacet: 4
})]);
export const MERIDIAN_DEPTH_COMPONENT_IDS = Object.freeze(["keel-fin", "armor-shoulder"]);
const r = Object.freeze([-6, 5, -3, 7, -5, 4, 0]);
const a = Object.freeze([7, -8, 4, -6, 8, -4, 2]);
const t = Object.freeze([Object.freeze({
  id: "armor-shoulder",
  x: -54,
  y: -31,
  h: 11.2,
  angle: -0.18,
  z: -0.32
}), Object.freeze({
  id: "armor-shoulder",
  x: -28,
  y: 42,
  h: 7,
  angle: 0.12,
  z: 0.08
}), Object.freeze({
  id: "armor-shoulder",
  x: 31,
  y: 43,
  h: 7.4,
  angle: -0.1,
  z: -0.18
}), Object.freeze({
  id: "armor-shoulder",
  x: 55,
  y: -31,
  h: 11.6,
  angle: 0.18,
  z: -0.48
})]);
function n(_0x59d3fe) {
  let _0x4597bd = (_0x59d3fe ^ -1640531527) >>> 0;
  _0x4597bd = Math.imul(_0x4597bd ^ _0x4597bd >>> 16, 569420461);
  _0x4597bd = Math.imul(_0x4597bd ^ _0x4597bd >>> 15, 1935289751);
  return ((_0x4597bd ^ _0x4597bd >>> 15) >>> 0) / 4294967296;
}
export function meridianDepthFacePlan(_0x193ff6) {
  const _0x35fbf2 = Math.max(0, Math.min(_0x54a286.path.faces, (_0x193ff6 | 0) - 1));
  const _0x5d7bc0 = Math.min(2, Math.floor(_0x35fbf2 / 2));
  const _0x5e5fa4 = !(_0x193ff6 & 1);
  const _0x165ded = t.map((_0x20d993, _0x30e329) => Object.freeze({
    ..._0x20d993,
    x: _0x20d993.x + (n(_0x193ff6 * 101 + _0x30e329 * 17) - 0.5) * 4.5,
    y: _0x20d993.y + (n(_0x193ff6 * 149 + _0x30e329 * 31) - 0.5) * 3.5,
    angle: (_0x5e5fa4 ? -_0x20d993.angle : _0x20d993.angle) + (n(_0x193ff6 * 211 + _0x30e329 * 47) - 0.5) * 0.1,
    mirrorX: _0x5e5fa4 !== (_0x30e329 % 2 == 0)
  }));
  return Object.freeze({
    face: _0x193ff6,
    stage: _0x5d7bc0,
    farOffset: r[_0x35fbf2],
    midOffset: a[_0x35fbf2],
    mirrorFar: _0x5e5fa4,
    mirrorMid: !_0x5e5fa4,
    fragments: Object.freeze(_0x165ded)
  });
}
export function meridianCondensationPlan(_0x270660) {
  const _0x572604 = [];
  const _0x3f2c45 = MERIDIAN_DEPTH_LAYERS.find(_0x265dce => _0x265dce.id === "condensation");
  const [_0x1c87af, _0x5c6892] = _0x3f2c45.depthRange;
  for (let _0x19f995 = 0; _0x19f995 < _0x3f2c45.ribbonsPerFacet; _0x19f995++) {
    const _0x5540e7 = n(_0x270660 * 379 + _0x19f995 * 61);
    const _0x333536 = n(_0x270660 * 487 + _0x19f995 * 79);
    const _0x3a0207 = n(_0x270660 * 593 + _0x19f995 * 97);
    _0x572604.push(Object.freeze({
      x: _0x5540e7 * 84 - 42,
      y: _0x333536 * 49 - 12,
      z: _0x1c87af + _0x3a0207 * (_0x5c6892 - _0x1c87af),
      width: 14 + n(_0x270660 * 683 + _0x19f995 * 107) * 16,
      height: 0.7 + n(_0x270660 * 761 + _0x19f995 * 127) * 1.1,
      rake: n(_0x270660 * 829 + _0x19f995 * 139) * 0.32 - 0.16,
      twist: n(_0x270660 * 911 + _0x19f995 * 151) * 1.5 - 0.75
    }));
  }
  return Object.freeze(_0x572604);
}
const i = _0x54a286.path.faces + 1;
const o = t.length * 2;
export const MERIDIAN_DEPTH_BUDGET = Object.freeze({
  facets: i,
  meshesPerFacet: 4,
  totalMeshes: i * 4,
  maxActiveFacets: 2,
  settledDrawCalls: 4,
  turnDrawCalls: 8,
  trianglesPerFacet: 160 + o + 80,
  turnTriangles: (160 + o + 80) * 2,
  sourceTextures: 3,
  runtimeCanvases: 0,
  runtimeCrops: 0,
  futureGameplaySemantics: 0,
  playerPlaneDepth: 0
});