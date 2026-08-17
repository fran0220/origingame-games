import { QUERY as _0x2e3940 } from "../mode.js";
import { awaitPreloads as _0x25a33c, preloadTexture as _0x55301c } from "./preload.js";
import { spritesEnabled as _0x5ebda2 } from "./sprite-table.js";
export const PROJECTILE_ART = Object.freeze({
  file: "../../assets/generated/projectiles/projectile-chassis-atlas-v3.png",
  canvas: Object.freeze([1536, 256]),
  cell: Object.freeze([256, 256]),
  order: Object.freeze(["R", "S", "L", "H", "F", "G"])
});
export const PROJECTILE_ART_ON = _0x5ebda2(_0x2e3940.get("sprites"));
const o = globalThis.performance?.now?.() ?? Date.now();
const s = PROJECTILE_ART_ON ? _0x55301c(new URL(PROJECTILE_ART.file, import.meta.url).href) : null;
await _0x25a33c();
const l = s ? await s : null;
const n = globalThis.performance?.now?.() ?? Date.now();
const c = !!l && l.state === "ready" && !!l.tex;
if (l && !c) {
  console.warn("HULLBREAKER art: projectile chassis atlas did not load (" + (l.error || l.state) + ") -- drawing manufactured geometry fallbacks.");
}
export const PROJECTILE_ART_SLOT = Object.freeze({
  state: PROJECTILE_ART_ON ? c ? "ready" : "failed" : "off",
  tex: c ? l.tex : null,
  error: l && !c ? l.error || l.state : null,
  requests: s ? 1 : 0,
  preloadMs: s ? Math.round((n - o) * 10) / 10 : null,
  gateMs: l ? l.ms : null,
  residency: c ? "gpu" : "fallback",
  settledBeforeConsumer: true
});