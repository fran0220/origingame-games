import { MERIDIAN_DEPTH_SOURCES as _0x291bab } from "./backdrop-depth-plan.js";
import { FOREGROUND_PACK_SOURCE as _0x4e847e } from "./foreground-pack-source.js";
import { preloadTexture as _0x18910e } from "./preload.js";
const t = Object.freeze([Object.freeze({
  source: _0x291bab.far,
  anisotropy: 6
}), Object.freeze({
  source: _0x291bab.mid,
  anisotropy: 6
}), Object.freeze({
  source: _0x291bab.near,
  anisotropy: 8
}), Object.freeze({
  source: _0x4e847e,
  anisotropy: 8
})]);
export const CRITICAL_WORLD_REQUESTS = Object.freeze(t.map(({
  source: _0x1587ab,
  anisotropy: _0x48e8d1
}) => _0x18910e(new URL(_0x1587ab.file, import.meta.url).href, {
  anisotropy: _0x48e8d1
})));