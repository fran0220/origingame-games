export const WASP_BODY = Object.freeze({
  CRUISE: 0,
  PITCH_UP: 1,
  TURN_BANK: 2,
  DIVE_LOCK: 3,
  DIVE_ATTACK: 4,
  HIT_RECOIL: 5,
  RECOVER_BRAKE: 6,
  DEATH_CRACK: 7
});
export const WASP_WING_PHASES = 8;
export const WASP_FLIGHT_CYCLES_PER_SECOND = 3.25;
export function selectWaspBodyState(_0x325b44, _0x2bf23e, _0x202a2d) {
  if (_0x2bf23e < (_0x325b44.staggerUntil || 0)) {
    return WASP_BODY.HIT_RECOIL;
  } else if (_0x325b44.state === "dive") {
    if (_0x2bf23e < (_0x325b44.lockUntil || 0)) {
      return WASP_BODY.DIVE_LOCK;
    } else {
      return WASP_BODY.DIVE_ATTACK;
    }
  } else if (_0x325b44.state === "recover") {
    return WASP_BODY.RECOVER_BRAKE;
  } else if (_0x202a2d?.turning || (_0x202a2d?.dy || 0) < -0.025) {
    return WASP_BODY.TURN_BANK;
  } else if ((_0x202a2d?.dy || 0) > 0.025) {
    return WASP_BODY.PITCH_UP;
  } else {
    return WASP_BODY.CRUISE;
  }
}
export function selectWaspWingPhase(_0x498dea) {
  const _0x33486f = _0x498dea.t * 3.25 + _0x498dea.id * 0.173;
  const _0x17354f = _0x33486f - Math.floor(_0x33486f);
  return Math.min(7, Math.floor(_0x17354f * 8));
}