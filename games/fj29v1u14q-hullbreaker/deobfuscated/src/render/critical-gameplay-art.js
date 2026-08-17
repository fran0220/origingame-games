import { CAPSULE_ART_ATLAS as _0x3d4a5c, CAPSULE_ART_ROOT as _0x4a0f85 } from "./capsule-art-spec.js";
import { ENEMY_ECOLOGY_ATLAS as _0x53f019 } from "./enemy-ecology-spec.js";
import { SPRITE_ACTION_ART as _0xf9480d, SPRITE_ART as _0x32a324, SPRITE_MOTION_ART as _0x49a8f0, SPRITE_ROOT as _0x1bca46 } from "./sprite-table.js";
import { preloadTexture as _0xe55e93 } from "./preload.js";
const s = Object.freeze([_0x53f019.file, _0x4a0f85 + _0x3d4a5c.file, _0x1bca46 + _0x32a324.warden.b.file, _0x1bca46 + _0x49a8f0.hound.file, _0x1bca46 + _0xf9480d.mortar.file]);
export const CRITICAL_GAMEPLAY_REQUESTS = Object.freeze(s.map(_0x2ec41c => _0xe55e93(new URL(_0x2ec41c, import.meta.url).href, {
  anisotropy: 8
})));