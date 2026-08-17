export function mulberry32(_0x2a2060) {
  return function () {
    _0x2a2060 = (_0x2a2060 |= 0) + 1831565813 | 0;
    let _0x3f7e91 = Math.imul(_0x2a2060 ^ _0x2a2060 >>> 15, _0x2a2060 | 1);
    _0x3f7e91 = _0x3f7e91 + Math.imul(_0x3f7e91 ^ _0x3f7e91 >>> 7, _0x3f7e91 | 61) ^ _0x3f7e91;
    return ((_0x3f7e91 ^ _0x3f7e91 >>> 14) >>> 0) / 4294967296;
  };
}