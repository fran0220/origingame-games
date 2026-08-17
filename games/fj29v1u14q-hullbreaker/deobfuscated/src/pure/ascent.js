export const NORMAL_ASCENT = Object.freeze({
  totalRise: 35,
  easeInTiles: 32
});
function e(_0x4c4f5c) {
  const _0x1c3b76 = Math.max(1, _0x4c4f5c);
  const _0x12cca1 = Math.min(NORMAL_ASCENT.easeInTiles, _0x1c3b76);
  const _0xf87265 = Math.max(0.5, _0x1c3b76 - _0x12cca1 * 0.5);
  return {
    end: _0x1c3b76,
    ease: _0x12cca1,
    grade: NORMAL_ASCENT.totalRise / _0xf87265
  };
}
export function normalAscentAltAt(_0x3c9da9, _0x4a1462) {
  const _0x5bdc1e = e(_0x4a1462);
  _0xd0a8a5 = _0x3c9da9;
  _0x146327 = 0;
  _0xc4825b = _0x5bdc1e.end;
  const _0x1bfe12 = Math.max(_0x146327, Math.min(_0xc4825b, _0xd0a8a5));
  var _0xd0a8a5;
  var _0x146327;
  var _0xc4825b;
  if (_0x1bfe12 < _0x5bdc1e.ease) {
    const _0x426218 = _0x1bfe12 / _0x5bdc1e.ease;
    return _0x5bdc1e.grade * _0x5bdc1e.ease * function (_0x3a0547) {
      return _0x3a0547 * _0x3a0547 * _0x3a0547 - _0x3a0547 * 0.5 * _0x3a0547 * _0x3a0547 * _0x3a0547;
    }(_0x426218);
  }
  return _0x5bdc1e.grade * (_0x1bfe12 - _0x5bdc1e.ease * 0.5);
}
export function normalAscentGradeAt(_0x3e4f08, _0x5d9bb8) {
  const _0x467e0c = e(_0x5d9bb8);
  if (_0x3e4f08 <= 0 || _0x3e4f08 >= _0x467e0c.end) {
    return 0;
  } else if (_0x3e4f08 < _0x467e0c.ease) {
    return _0x467e0c.grade * ((_0x396f74 = _0x3e4f08 / _0x467e0c.ease) * _0x396f74 * (3 - _0x396f74 * 2));
  } else {
    return _0x467e0c.grade;
  }
  var _0x396f74;
}
export function normalAscentPitchAt(_0x2e8ae0, _0x3401e8) {
  return Math.atan(normalAscentGradeAt(_0x2e8ae0, _0x3401e8));
}