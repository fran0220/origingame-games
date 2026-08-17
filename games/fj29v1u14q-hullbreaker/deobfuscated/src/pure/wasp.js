export function diveVelocity(_0x251bf7, _0x223290, _0x428845, _0x1e2804, _0x589f8e) {
  const _0x386eac = _0x428845 - _0x251bf7;
  const _0xaff45e = _0x1e2804 - _0x223290;
  const _0x39ab5d = Math.hypot(_0x386eac, _0xaff45e) || 1;
  return {
    vx: _0x386eac / _0x39ab5d * _0x589f8e,
    vy: _0xaff45e / _0x39ab5d * _0x589f8e
  };
}
export const WASP_DIVE_LOCK_MS = 190;
export function diveLaunched(_0x5db131, _0x364a83) {
  return _0x5db131 >= _0x364a83;
}
export const WASP_SQUAD_STAGGER_MS = 260;
export function squadReady(_0x12eb64, _0x3b18aa, _0x41912f) {
  return _0x12eb64 - _0x3b18aa >= _0x41912f;
}