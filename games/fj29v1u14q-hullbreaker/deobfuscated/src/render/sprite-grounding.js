import * as _0x42ba76 from "three";
export function applySpriteUnderside(_0x3e5682, _0x16ac7e = 0.8) {
  const _0x259464 = _0x3e5682?.getAttribute?.("position");
  if (!_0x259464 || _0x259464.count === 0 || _0x3e5682.getAttribute("color")) {
    return _0x3e5682;
  }
  _0x16ac7e = Math.max(0.68, Math.min(1, _0x16ac7e));
  let _0x278156 = Infinity;
  let _0x124bb2 = -Infinity;
  for (let _0x139c7d = 0; _0x139c7d < _0x259464.count; _0x139c7d++) {
    const _0x5350a2 = _0x259464.getY(_0x139c7d);
    if (_0x5350a2 < _0x278156) {
      _0x278156 = _0x5350a2;
    }
    if (_0x5350a2 > _0x124bb2) {
      _0x124bb2 = _0x5350a2;
    }
  }
  const _0x39dd54 = Math.max(0.000001, _0x124bb2 - _0x278156);
  const _0x2f2fce = new Float32Array(_0x259464.count * 3);
  for (let _0x563709 = 0; _0x563709 < _0x259464.count; _0x563709++) {
    const _0x1144e9 = _0x16ac7e + (1 - _0x16ac7e) * Math.max(0, Math.min(1, (_0x259464.getY(_0x563709) - _0x278156) / _0x39dd54));
    _0x2f2fce.set([_0x1144e9, _0x1144e9, _0x1144e9], _0x563709 * 3);
  }
  _0x3e5682.setAttribute("color", new _0x42ba76.Float32BufferAttribute(_0x2f2fce, 3));
  _0x3e5682.userData.spriteUnderside = true;
  _0x3e5682.userData.spriteUndersideFloor = _0x16ac7e;
  return _0x3e5682;
}