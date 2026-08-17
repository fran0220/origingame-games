export const KONAMI_SEQUENCE = Object.freeze(["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"]);
function r(_0x514a46, _0x5dd4c9) {
  for (let _0x4f0f73 = Math.min(_0x514a46 + 1, KONAMI_SEQUENCE.length - 1); _0x4f0f73 > 0; _0x4f0f73--) {
    if (KONAMI_SEQUENCE[_0x4f0f73 - 1] !== _0x5dd4c9) {
      continue;
    }
    let _0x229f44 = true;
    for (let _0x6d7856 = 0; _0x6d7856 < _0x4f0f73 - 1; _0x6d7856++) {
      if (KONAMI_SEQUENCE[_0x514a46 - (_0x4f0f73 - 1) + _0x6d7856] !== KONAMI_SEQUENCE[_0x6d7856]) {
        _0x229f44 = false;
        break;
      }
    }
    if (_0x229f44) {
      return _0x4f0f73;
    }
  }
  return 0;
}
export function advanceKonami(_0x561d70, _0x29245f) {
  const _0x255979 = Number.isInteger(_0x561d70) && _0x561d70 >= 0 && _0x561d70 < KONAMI_SEQUENCE.length ? _0x561d70 : 0;
  if (typeof _0x29245f != "string" || _0x29245f.length === 0) {
    return {
      progress: _0x255979,
      fired: false
    };
  }
  if (_0x29245f === KONAMI_SEQUENCE[_0x255979]) {
    const _0xb95730 = _0x255979 + 1;
    if (_0xb95730 === KONAMI_SEQUENCE.length) {
      return {
        progress: 0,
        fired: true
      };
    } else {
      return {
        progress: _0xb95730,
        fired: false
      };
    }
  }
  return {
    progress: r(_0x255979, _0x29245f),
    fired: false
  };
}