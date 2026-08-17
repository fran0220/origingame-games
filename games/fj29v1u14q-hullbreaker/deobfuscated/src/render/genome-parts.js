import * as _0x392cb1 from "three";
import { QUERY as _0x479197 } from "../mode.js";
import { awaitPreloads as _0x50707b, preloadTexture as _0x262081 } from "./preload.js";
import { spritesEnabled as _0x3caba0 } from "./sprite-table.js";
export const GENOME_PART_ATLAS = Object.freeze({
  file: "../../assets/generated/enemy-parts/meridian-mutation-atlas-v1.png",
  canvas: Object.freeze([1024, 512]),
  cell: Object.freeze([256, 256])
});
export const GENOME_PART_CELLS = Object.freeze({
  BULWARK: Object.freeze([0, 0]),
  VAULT: Object.freeze([1, 0]),
  TWINSTRIKE: Object.freeze([2, 0]),
  SALVO: Object.freeze([3, 0]),
  RELAY: Object.freeze([0, 1]),
  PINCER: Object.freeze([1, 1]),
  AEGIS: Object.freeze([2, 1]),
  BACKLASH: Object.freeze([3, 1])
});
export const GENOME_PART_RECTS = Object.freeze({
  BULWARK: Object.freeze([33, 40, 182, 192]),
  VAULT: Object.freeze([262, 38, 198, 192]),
  TWINSTRIKE: Object.freeze([503, 61, 253, 161]),
  SALVO: Object.freeze([782, 39, 216, 194]),
  RELAY: Object.freeze([29, 282, 175, 192]),
  PINCER: Object.freeze([258, 274, 233, 196]),
  AEGIS: Object.freeze([531, 281, 183, 197]),
  BACKLASH: Object.freeze([773, 288, 217, 176])
});
const o = _0x3caba0(_0x479197.get("sprites"));
const s = () => globalThis.performance?.now?.() ?? Date.now();
const l = s();
let i = null;
let c = 0;
const f = {
  state: o ? "pending" : "off",
  tex: null,
  error: null
};
if (o) {
  c++;
  _0x262081(new URL(GENOME_PART_ATLAS.file, import.meta.url).href).then(_0x399e04 => {
    i = s();
    if (_0x399e04.state === "ready") {
      f.tex = _0x399e04.tex;
      f.state = "ready";
    } else {
      f.state = "failed";
      f.error = _0x399e04.error || _0x399e04.state;
      console.warn("HULLBREAKER art: painted Meridian mutation atlas did not load (" + f.error + ") -- drawing the hard-surface module fallback.");
    }
  });
}
await _0x50707b();
const E = new Map();
export function paintedGenomePart(_0x30d3f1) {
  if (f.state !== "ready" || !f.tex) {
    return null;
  }
  const _0x380c2d = function (_0xc3d046) {
    let _0x551a97 = E.get(_0xc3d046);
    if (_0x551a97) {
      return _0x551a97;
    }
    const _0x18b53d = GENOME_PART_RECTS[_0xc3d046];
    if (!_0x18b53d) {
      return null;
    }
    const [_0x1a8f54, _0x454f27, _0x2d02f1, _0x36aede] = _0x18b53d;
    const [_0x19d261, _0x2522c1] = GENOME_PART_ATLAS.canvas;
    const [_0x108934, _0x3c29a7] = GENOME_PART_ATLAS.cell;
    _0x551a97 = new _0x392cb1.PlaneGeometry(_0x2d02f1 / _0x108934, _0x36aede / _0x3c29a7);
    const _0x5e38f1 = _0x1a8f54 / _0x19d261;
    const _0x49b72b = (_0x1a8f54 + _0x2d02f1) / _0x19d261;
    const _0x5f4cae = 1 - (_0x454f27 + _0x36aede) / _0x2522c1;
    const _0x1f3da3 = 1 - _0x454f27 / _0x2522c1;
    const _0x49019e = _0x551a97.attributes.uv;
    for (let _0x5370c9 = 0; _0x5370c9 < _0x49019e.count; _0x5370c9++) {
      _0x49019e.setXY(_0x5370c9, _0x5e38f1 + _0x49019e.getX(_0x5370c9) * (_0x49b72b - _0x5e38f1), _0x5f4cae + _0x49019e.getY(_0x5370c9) * (_0x1f3da3 - _0x5f4cae));
    }
    _0x49019e.needsUpdate = true;
    E.set(_0xc3d046, _0x551a97);
    return _0x551a97;
  }(_0x30d3f1);
  if (_0x380c2d) {
    return {
      texture: f.tex,
      geometry: _0x380c2d
    };
  } else {
    return null;
  }
}
export function paintedGenomePartMaterial() {
  if (f.state === "ready" && f.tex) {
    return new _0x392cb1.MeshStandardMaterial({
      map: f.tex,
      emissiveMap: f.tex,
      emissive: 16777215,
      emissiveIntensity: 0.045,
      metalness: 0.48,
      roughness: 0.42,
      transparent: true,
      opacity: 0,
      alphaTest: 0.025,
      depthWrite: true,
      side: _0x392cb1.DoubleSide,
      forceSinglePass: true,
      fog: false
    });
  } else {
    return null;
  }
}
export function genomePartSnapshot() {
  return {
    state: f.state,
    file: GENOME_PART_ATLAS.file,
    error: f.error,
    cells: Object.keys(GENOME_PART_CELLS),
    rects: GENOME_PART_RECTS,
    requests: c,
    preloadMs: i == null ? null : Math.round((i - l) * 10) / 10
  };
}
if (typeof window != "undefined") {
  window.__HB_GENOME_PARTS = genomePartSnapshot;
}