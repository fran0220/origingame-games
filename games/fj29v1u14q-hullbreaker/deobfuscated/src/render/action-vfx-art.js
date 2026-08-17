import { JUICE_ENABLED as _0x222d5a, QUERY as _0x1158d0 } from "../mode.js";
import { ACTION_VFX_ATLAS as _0x271b25, ACTION_VFX_COMPONENTS as _0x4333a4 } from "./action-vfx-spec.js";
import { awaitPreloads as _0x3566e0, preloadTexture as _0x4d71a3 } from "./preload.js";
export const ACTION_VFX_ART_ON = _0x222d5a && _0x1158d0.get("actionvfx") !== "0";
const s = () => globalThis.performance?.now?.() ?? Date.now();
const i = s();
const l = ACTION_VFX_ART_ON ? _0x4d71a3(new URL(_0x271b25.file, import.meta.url).href, {
  anisotropy: 6
}) : null;
await _0x3566e0();
const d = l ? await l : null;
const p = d?.tex?.image;
const c = p && (p.naturalWidth || p.videoWidth || p.width);
const m = p && (p.naturalHeight || p.videoHeight || p.height);
const u = c === _0x271b25.canvas[0] && m === _0x271b25.canvas[1];
const _ = !!d && d.state === "ready" && !!d.tex && u;
if (d && !_) {
  console.warn("HULLBREAKER art: action VFX v2 atlas unavailable (" + (d.error || (u ? d.state : "dimensions " + (c || 0) + "x" + (m || 0))) + ") -- action paint remains dormant.");
}
if (_) {
  d.tex.premultiplyAlpha = false;
  d.tex.needsUpdate = true;
}
export const ACTION_VFX_ART_SLOT = Object.freeze({
  state: ACTION_VFX_ART_ON ? _ ? "ready" : "failed" : "off",
  tex: _ ? d.tex : null,
  error: d && !_ ? d.error || "dimensions " + (c || 0) + "x" + (m || 0) : null,
  requests: l ? 1 : 0,
  gpuTextures: _ ? 1 : 0,
  estimatedGpuBytes: _ ? _0x271b25.estimatedGpuBytes : 0,
  atlas: Object.freeze([..._0x271b25.canvas]),
  components: _0x4333a4.length,
  preloadMs: l ? Math.round((s() - i) * 10) / 10 : null,
  gateMs: d?.ms ?? null,
  settledBeforeConsumer: true
});
export function actionVfxArtStats() {
  const {
    tex: _0x19958f,
    ..._0x2934a2
  } = ACTION_VFX_ART_SLOT;
  return {
    ..._0x2934a2
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_ACTION_VFX_ART = actionVfxArtStats;
}