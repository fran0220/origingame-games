import { QUERY as _0xac410a } from "../mode.js";
import { awaitPreloads as _0x34f1d2, preloadTexture as _0x5ea64f } from "./preload.js";
import { ACTOR_MOTION_ATLASES as _0x146c18, ACTOR_MOTION_KINDS as _0x18fb8a, ACTOR_MOTION_SPEC as _0x4bba00 } from "./actor-motion-spec.js";
export const ACTOR_MOTION_ON = _0xac410a.get("sprites") !== "0" && _0xac410a.get("sprites") !== "off" && _0xac410a.get("actormotion") !== "0";
const a = globalThis.performance?.now?.() ?? Date.now();
const l = new Map();
for (const [f, p] of Object.entries(_0x146c18)) {
  l.set(f, ACTOR_MOTION_ON ? _0x5ea64f(new URL(p.file, import.meta.url).href, {
    anisotropy: 8
  }) : null);
}
await _0x34f1d2();
const i = new Map();
for (const [u, O] of l) {
  const d = O ? await O : null;
  const m = !!d && d.state === "ready" && !!d.tex;
  if (d && !m) {
    console.warn("HULLBREAKER art: actor motion atlas " + u + " did not load (" + (d.error || d.state) + ") -- retaining base/primitive actors.");
  }
  i.set(u, Object.freeze({
    id: u,
    state: ACTOR_MOTION_ON ? m ? "ready" : "failed" : "off",
    tex: m ? d.tex : null,
    error: d && !m ? d.error || d.state : null,
    requests: O ? 1 : 0,
    gateMs: d?.ms ?? null
  }));
}
const c = globalThis.performance?.now?.() ?? Date.now();
export function actorMotionTexture(_0x13c752) {
  const _0x3496b8 = _0x4bba00[_0x13c752];
  const _0x5a3a68 = _0x3496b8 ? i.get(_0x3496b8.atlas) : null;
  if (_0x5a3a68?.state === "ready") {
    return _0x5a3a68.tex;
  } else {
    return null;
  }
}
export function actorMotionArtSnapshot() {
  const _0x50df31 = {};
  for (const [_0x40980c, _0x187067] of i) {
    const {
      tex: _0x161e17,
      ..._0x57768f
    } = _0x187067;
    _0x50df31[_0x40980c] = {
      ..._0x57768f
    };
  }
  return {
    enabled: ACTOR_MOTION_ON,
    preloadMs: Math.round((c - a) * 10) / 10,
    settledBeforeConsumer: true,
    requests: [...i.values()].reduce((_0x257d8f, _0x5bd972) => _0x257d8f + _0x5bd972.requests, 0),
    kinds: [..._0x18fb8a],
    atlases: _0x50df31
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_ACTOR_MOTION_ART = actorMotionArtSnapshot;
}