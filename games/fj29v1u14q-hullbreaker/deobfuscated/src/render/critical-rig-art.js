import { RIG_AIM_ATLAS_PATH as _0x2a7d8a, RIG_BODY_ATLAS_PATH as _0x279aa6, RIG_CLIMB_ATLAS_PATH as _0xd8c55a, RIG_WEAPON_ATLAS_PATH as _0x578db8 } from "../pure/rig.js";
import { preloadTexture as _0x3da7ba } from "./preload.js";
const p = Object.freeze([_0x279aa6, _0x2a7d8a, _0x578db8, _0xd8c55a]);
export const CRITICAL_RIG_REQUESTS = Object.freeze(p.map(_0x457dd1 => _0x3da7ba(new URL(_0x457dd1, import.meta.url).href)));