import { IS_G1 as _0x1d5d2c, QUERY as _0x59ca4b } from "../mode.js";
import { awaitPreloads as _0x13e502, preloadTexture as _0x85dada } from "./preload.js";
import { FOREGROUND_COMPONENT_ATLAS as _0x340bd5, FOREGROUND_CUTOUT_COMPONENTS as _0x1410a6 } from "./foreground-component-spec.generated.js";
export const FOREGROUND_COMPONENT_ART_ON = _0x1d5d2c && _0x59ca4b.get("world") !== "0" && _0x59ca4b.get("components") !== "0";
const s = () => globalThis.performance?.now?.() ?? Date.now();
const l = s();
const i = FOREGROUND_COMPONENT_ART_ON ? _0x85dada(new URL(_0x340bd5.file, import.meta.url).href, {
  anisotropy: 8
}) : null;
await _0x13e502();
const O = i ? await i : null;
const d = O?.tex?.image;
const m = d && (d.naturalWidth || d.videoWidth || d.width);
const u = d && (d.naturalHeight || d.videoHeight || d.height);
const p = m === _0x340bd5.canvas[0] && u === _0x340bd5.canvas[1];
const N = !!O && O.state === "ready" && !!O.tex && p;
if (O && !N) {
  console.warn("HULLBREAKER art: native foreground components unavailable (" + (O.error || (p ? O.state : "dimensions " + (m || 0) + "x" + (u || 0))) + ") -- ordinary structural geometry remains intact.");
}
if (N) {
  O.tex.premultiplyAlpha = false;
  O.tex.needsUpdate = true;
}
export const FOREGROUND_COMPONENT_ART_SLOT = Object.freeze({
  state: FOREGROUND_COMPONENT_ART_ON ? N ? "ready" : "failed" : "off",
  tex: N ? O.tex : null,
  error: O && !N ? O.error || "dimensions " + (m || 0) + "x" + (u || 0) : null,
  requests: i ? 1 : 0,
  gpuTextures: N ? 1 : 0,
  components: _0x1410a6.length,
  emissive: false,
  preloadMs: i ? Math.round((s() - l) * 10) / 10 : null,
  gateMs: O?.ms ?? null,
  settledBeforeConsumer: true
});
export function foregroundComponentArtStats() {
  const {
    tex: _0x7ae5f5,
    ..._0x41b5b1
  } = FOREGROUND_COMPONENT_ART_SLOT;
  return {
    ..._0x41b5b1,
    atlas: {
      ..._0x340bd5
    }
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_FOREGROUND_COMPONENT_ART = foregroundComponentArtStats;
}