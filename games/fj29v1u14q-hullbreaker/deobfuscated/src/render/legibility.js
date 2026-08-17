import { CONFIG as _0xe09c1e } from "../config.js";
import { QUERY as _0xd5e42e, VIEW_ID as _0x319d4e } from "../mode.js";
export const NEAR_RIG_PCT = 7;
export const RIG_TILES = _0xe09c1e.player.height;
export function resolveLegibility(_0x33d6c6) {
  return _0x33d6c6 !== "0" && _0x33d6c6 !== "off";
}
export function viewDepthMult(_0x1d9b27, _0x268bdd = _0xe09c1e.viewScales) {
  return (_0x268bdd[_0x1d9b27] || _0x268bdd.near).depthMult;
}
export function rigScreenPct(_0x475ed9, _0x1570b9 = _0xe09c1e.viewScales) {
  return 7 / viewDepthMult(_0x475ed9, _0x1570b9);
}
export function screenPx(_0x51df77, _0x422658, _0x32f162 = 800, _0x1bc7ee = _0xe09c1e.viewScales) {
  return rigScreenPct(_0x422658, _0x1bc7ee) / 100 * _0x32f162 * _0x51df77 / RIG_TILES;
}
export const SHARE = {
  glyph: 1,
  cue: 1,
  pose: 0.6,
  pip: 1
};
export function legibilityGain(_0x26f227, _0xd9bdb9, _0x29649f = true, _0x20b187 = _0xe09c1e.viewScales) {
  if (_0x29649f) {
    return 1 + (viewDepthMult(_0xd9bdb9, _0x20b187) - 1) * _0x26f227;
  } else {
    return 1;
  }
}
export const GLYPH_TEX_PX = 128;
export const GLYPH_INK_FILL = 0.72;
export const GLYPH_EDGE = 0.055;
export const GLYPH_SQUEEZE_MIN = 0.5;
export const LEGIBLE_PX_FLOOR = 12;
export const LAMP_R = 0.22;
export const LAMP_COIL_SWELL = 1.35;
export const LAMP_OFF_ALPHA = 0.38;
export const LAMP_OFF_SWELL = 0.72;
export const POLYP_ONSET_MS = 150;
export const POLYP_SWELL_EASE = 0.55;
export const WASP_DIVE_STRETCH = 0.4;
export const WASP_DIVE_NARROW = 0.12;
export function waspDiveStretch(_0x33d390 = POSE_GAIN, _0x4e831c = _0xe09c1e.wasp) {
  return Math.min(_0x33d390 * 0.4, _0x4e831c.contactRadius / _0x4e831c.visualRadius - 1);
}
export const CAPSULE_SWEEP_RAD = 0.5;
export const CAPSULE_SWEEP_FREQ = 2.2;
export const LEGIBILITY_ON = resolveLegibility(_0xd5e42e.get("legibility"));
export const GLYPH_GAIN = legibilityGain(SHARE.glyph, _0x319d4e, LEGIBILITY_ON);
export const CUE_GAIN = legibilityGain(SHARE.cue, _0x319d4e, LEGIBILITY_ON);
export const POSE_GAIN = legibilityGain(SHARE.pose, _0x319d4e, LEGIBILITY_ON);
export const PIP_GAIN = legibilityGain(SHARE.pip, _0x319d4e, LEGIBILITY_ON);