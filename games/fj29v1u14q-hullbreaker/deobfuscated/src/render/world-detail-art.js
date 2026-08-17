import { IS_G1 as _0xee8a6d, QUERY as _0x4f642e } from "../mode.js";
import { awaitPreloads as _0x5661fe, preloadTexture as _0x1e863f } from "./preload.js";
const a = (_0xf37ffa, _0x2ce9a1, _0x39ccc5) => Object.freeze({
  role: _0xf37ffa,
  index: _0x2ce9a1,
  col: _0x2ce9a1 % 4,
  row: Math.floor(_0x2ce9a1 / 4),
  ink: Object.freeze(_0x39ccc5)
});
export const WORLD_DETAIL_ART = Object.freeze({
  file: "../../assets/generated/environment/meridian-detail-atlas-v1.png",
  canvas: Object.freeze([2048, 1024]),
  cellSize: 512,
  cells: Object.freeze([a("gill", 0, [44, 73, 423, 365]), a("pipe-spine", 1, [131, 42, 249, 428]), a("gallery", 2, [76, 40, 359, 432]), a("breach", 3, [71, 60, 370, 392]), a("vent-bank", 4, [32, 111, 448, 289]), a("sensor", 5, [92, 66, 328, 380]), a("exhaust", 6, [77, 79, 357, 354]), a("containment", 7, [95, 79, 321, 353])])
});
export const WORLD_DETAIL_ON = _0xee8a6d && _0x4f642e.get("world") !== "0" && _0x4f642e.get("detail") !== "0";
export const WORLD_DETAIL_ART_ON = WORLD_DETAIL_ON && _0x4f642e.get("fixtureart") === "1";
const l = globalThis.performance?.now?.() ?? Date.now();
const n = WORLD_DETAIL_ART_ON ? _0x1e863f(new URL(WORLD_DETAIL_ART.file, import.meta.url).href, {
  anisotropy: 8
}) : null;
await _0x5661fe();
const s = n ? await n : null;
const i = globalThis.performance?.now?.() ?? Date.now();
const _ = !!s && s.state === "ready" && !!s.tex;
if (s && !_) {
  console.warn("HULLBREAKER art: Meridian detail atlas did not load (" + (s.error || s.state) + ") -- drawing bounded fixture primitives.");
}
export const WORLD_DETAIL_ART_SLOT = Object.freeze({
  state: WORLD_DETAIL_ART_ON ? _ ? "ready" : "failed" : "off",
  tex: _ ? s.tex : null,
  error: s && !_ ? s.error || s.state : null,
  requests: n ? 1 : 0,
  preloadMs: n ? Math.round((i - l) * 10) / 10 : null,
  gateMs: s ? s.ms : null,
  residency: _ ? "gpu" : WORLD_DETAIL_ART_ON ? "fallback" : "off",
  settledBeforeConsumer: true
});
export function worldDetailArtStats() {
  const {
    tex: _0x26d8a3,
    ..._0x52df52
  } = WORLD_DETAIL_ART_SLOT;
  return {
    ..._0x52df52
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_WORLD_DETAIL_ART = worldDetailArtStats;
}