import { QUERY as _0x479306 } from "../mode.js";
import { awaitPreloads as _0x4257bf, preloadTexture as _0x216cb4 } from "./preload.js";
import { WASP_MODULAR_SPEC as _0x29cde1 } from "./wasp-modular-spec.js";
export const WASP_MODULAR_ON = _0x479306.get("sprites") !== "0" && _0x479306.get("sprites") !== "off" && (_0x479306.get("waspmod") === "1" || _0x479306.get("waspmod") === "on");
const o = WASP_MODULAR_ON ? _0x216cb4(new URL(_0x29cde1.runtime.file, import.meta.url).href, {
  anisotropy: 8
}) : null;
await _0x4257bf();
const a = o ? await o : null;
const n = !!a && a.state === "ready" && !!a.tex;
if (a && !n) {
  console.warn("HULLBREAKER art: modular wasp atlas did not load (" + (a.error || a.state) + ") -- retaining the existing complete-body flight atlas.");
}
const l = Object.freeze({
  state: WASP_MODULAR_ON ? n ? "ready" : "failed" : "off",
  tex: n ? a.tex : null,
  error: a && !n ? a.error || a.state : null,
  requests: o ? 1 : 0,
  gateMs: a?.ms ?? null
});
export function waspModularTexture() {
  return l.tex;
}
export function waspModularArtSnapshot() {
  return {
    enabled: WASP_MODULAR_ON,
    state: l.state,
    error: l.error,
    requests: l.requests,
    gateMs: l.gateMs,
    textureCount: l.tex ? 1 : 0,
    estimatedGpuBytes: l.tex ? _0x29cde1.runtime.estimatedGpuBytes : 0
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_WASP_MODULAR_ART = waspModularArtSnapshot;
}