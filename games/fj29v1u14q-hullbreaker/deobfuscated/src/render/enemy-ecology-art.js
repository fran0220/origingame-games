import { QUERY as _0x1b4a69 } from "../mode.js";
import { awaitPreloads as _0x1f7cb0, preloadTexture as _0x3b7165 } from "./preload.js";
import { ENEMY_ECOLOGY_ATLAS as _0x56fc3e } from "./enemy-ecology-spec.js";
export const ENEMY_ECOLOGY_ART_ON = _0x1b4a69.get("sprites") !== "0" && _0x1b4a69.get("sprites") !== "off" && _0x1b4a69.get("enemyecology") !== "0";
const a = globalThis.performance?.now?.() ?? Date.now();
const s = ENEMY_ECOLOGY_ART_ON ? _0x3b7165(new URL(_0x56fc3e.file, import.meta.url).href, {
  anisotropy: 8
}) : null;
await _0x1f7cb0();
const n = s ? await s : null;
const i = n?.tex?.image;
const l = i?.naturalWidth || i?.videoWidth || i?.width || 0;
const d = i?.naturalHeight || i?.videoHeight || i?.height || 0;
const m = l === _0x56fc3e.canvas[0] && d === _0x56fc3e.canvas[1];
const c = !!n && n.state === "ready" && !!n.tex && m;
if (n && !c) {
  console.warn("HULLBREAKER art: enemy ecology atlas did not load as " + _0x56fc3e.canvas.join("x") + " (" + (n.error || n.state + ", decoded " + l + "x" + d) + ") -- retaining legacy hostile art.");
}
if (n?.tex) {
  n.tex.premultiplyAlpha = false;
}
const u = Object.freeze({
  state: ENEMY_ECOLOGY_ART_ON ? c ? "ready" : "failed" : "off",
  tex: c ? n.tex : null,
  error: n && !c ? n.error || "decoded " + l + "x" + d : null,
  requests: s ? 1 : 0,
  gateMs: n?.ms ?? null,
  decoded: Object.freeze([l, d])
});
const p = globalThis.performance?.now?.() ?? Date.now();
export function enemyEcologyTexture() {
  return u.tex;
}
export function enemyEcologyArtSnapshot() {
  return {
    enabled: ENEMY_ECOLOGY_ART_ON,
    state: u.state,
    error: u.error,
    requests: u.requests,
    gateMs: u.gateMs,
    preloadMs: Math.round((p - a) * 10) / 10,
    settledBeforeConsumer: true,
    dimensions: [...u.decoded],
    textureCount: u.tex ? 1 : 0,
    estimatedGpuBytes: u.tex ? _0x56fc3e.estimatedGpuBytes : 0,
    emissiveMaps: 0,
    runtimeCrops: 0,
    runtimeCanvases: 0
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_ENEMY_ECOLOGY_ART = enemyEcologyArtSnapshot;
}