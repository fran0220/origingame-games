import { IS_G1 as _0x1b0dfe, QUERY as _0x345056 } from "../mode.js";
import { DEFENSE_VFX_PACK as _0x3c8586 } from "./defense-vfx-pack.js";
import { awaitPreloads as _0x4d4ae4, preloadTexture as _0x2ed703 } from "./preload.js";
export const DEFENSE_VFX_ART_ON = _0x1b0dfe && _0x345056.get("world") !== "0" && _0x345056.get("defensevfx") !== "0";
const a = () => globalThis.performance?.now?.() ?? Date.now();
const o = a();
const i = DEFENSE_VFX_ART_ON ? _0x2ed703(new URL(_0x3c8586.runtime.file, import.meta.url).href, {
  anisotropy: 6
}) : null;
await _0x4d4ae4();
const l = i ? await i : null;
const d = l?.tex?.image;
const u = d && (d.naturalWidth || d.videoWidth || d.width);
const m = d && (d.naturalHeight || d.videoHeight || d.height);
const p = u === _0x3c8586.runtime.canvas[0] && m === _0x3c8586.runtime.canvas[1];
const f = !!l && l.state === "ready" && !!l.tex && p;
if (l && !f) {
  console.warn("HULLBREAKER art: Meridian defense VFX atlas unavailable (" + (l.error || (p ? l.state : "dimensions " + (u || 0) + "x" + (m || 0))) + ") -- native shutters remain active; generated pressure/debris punctuation is omitted.");
}
if (f) {
  l.tex.premultiplyAlpha = false;
  l.tex.needsUpdate = true;
}
export const DEFENSE_VFX_ART_SLOT = Object.freeze({
  state: DEFENSE_VFX_ART_ON ? f ? "ready" : "failed" : "off",
  tex: f ? l.tex : null,
  error: l && !f ? l.error || "dimensions " + (u || 0) + "x" + (m || 0) : null,
  requests: i ? 1 : 0,
  gpuTextures: f ? 1 : 0,
  estimatedGpuBytes: f ? _0x3c8586.runtime.estimatedGpuBytes : 0,
  components: _0x3c8586.components.length,
  preloadMs: i ? Math.round((a() - o) * 10) / 10 : null,
  gateMs: l?.ms ?? null,
  settledBeforeConsumer: true
});
export function defenseVfxArtStats() {
  const {
    tex: _0x22deb6,
    ..._0x3f04fd
  } = DEFENSE_VFX_ART_SLOT;
  return {
    ..._0x3f04fd
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_DEFENSE_VFX_ART = defenseVfxArtStats;
}