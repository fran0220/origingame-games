const t = [[0.59719, 0.35458, 0.04823], [0.076, 0.90834, 0.01566], [0.0284, 0.13383, 0.83777]];
const r = [[1.60475, -0.53108, -0.07367], [-0.10208, 1.10813, -0.00605], [-0.00327, -0.07276, 1.07602]];
function n(_0x2354a8, _0x1f0a34, _0x339441) {
  const _0x498591 = _0x1f0a34[0];
  const _0x29770c = _0x1f0a34[1];
  const _0x43e44f = _0x1f0a34[2];
  _0x339441[0] = _0x2354a8[0][0] * _0x498591 + _0x2354a8[0][1] * _0x29770c + _0x2354a8[0][2] * _0x43e44f;
  _0x339441[1] = _0x2354a8[1][0] * _0x498591 + _0x2354a8[1][1] * _0x29770c + _0x2354a8[1][2] * _0x43e44f;
  _0x339441[2] = _0x2354a8[2][0] * _0x498591 + _0x2354a8[2][1] * _0x29770c + _0x2354a8[2][2] * _0x43e44f;
  return _0x339441;
}
function e(_0x47e27c) {
  return (_0x47e27c * (_0x47e27c + 0.0245786) - 0.000090537) / (_0x47e27c * (_0x47e27c * 0.983729 + 0.432951) + 0.238081);
}
const o = [0, 0, 0];
const c = [0, 0, 0];
export function acesFilmic(_0x519016, _0x325537, _0x178a05) {
  for (let _0x29df32 = 0; _0x29df32 < 3; _0x29df32++) {
    o[_0x29df32] = _0x519016[_0x29df32] * _0x325537 / 0.6;
  }
  n(t, o, c);
  for (let _0x4525b3 = 0; _0x4525b3 < 3; _0x4525b3++) {
    c[_0x4525b3] = e(c[_0x4525b3]);
  }
  n(r, c, _0x178a05);
  for (let _0xe9d154 = 0; _0xe9d154 < 3; _0xe9d154++) {
    _0x178a05[_0xe9d154] = Math.min(1, Math.max(0, _0x178a05[_0xe9d154]));
  }
  return _0x178a05;
}
const i = [0, 0, 0];
export function inverseAcesFilmic(_0x592f67, _0x782014, _0x578aeb) {
  for (let _0x49dcc6 = 0; _0x49dcc6 < 3; _0x49dcc6++) {
    _0x578aeb[_0x49dcc6] = _0x592f67[_0x49dcc6];
  }
  for (let _0x3c0875 = 0; _0x3c0875 < 6; _0x3c0875++) {
    for (let _0x46e024 = 0; _0x46e024 < 3; _0x46e024++) {
      let _0x5df40c = 0;
      let _0x4b9951 = 8;
      for (let _0x5540f9 = 0; _0x5540f9 < 30; _0x5540f9++) {
        const _0x33697d = (_0x5df40c + _0x4b9951) / 2;
        _0x578aeb[_0x46e024] = _0x33697d;
        acesFilmic(_0x578aeb, _0x782014, i);
        if (i[_0x46e024] < _0x592f67[_0x46e024]) {
          _0x5df40c = _0x33697d;
        } else {
          _0x4b9951 = _0x33697d;
        }
      }
      _0x578aeb[_0x46e024] = (_0x5df40c + _0x4b9951) / 2;
    }
  }
  return _0x578aeb;
}
export function srgbToLinear(_0xa0e257) {
  if (_0xa0e257 <= 0.04045) {
    return _0xa0e257 / 12.92;
  } else {
    return Math.pow((_0xa0e257 + 0.055) / 1.055, 2.4);
  }
}
export function linearToSrgb(_0x48bf63) {
  if (_0x48bf63 <= 0.0031308) {
    return _0x48bf63 * 12.92;
  } else {
    return Math.pow(_0x48bf63, 1 / 2.4) * 1.055 - 0.055;
  }
}