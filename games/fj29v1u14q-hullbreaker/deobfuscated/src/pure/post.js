export function resolvePost(_0x429bbc, _0x48efec) {
  if (_0x429bbc === "0" || _0x429bbc === "off") {
    return {
      on: false,
      strength: 0
    };
  }
  const _0xb469fd = Number(_0x429bbc);
  if (_0x429bbc != null && _0x429bbc !== "" && Number.isFinite(_0xb469fd) && _0xb469fd > 0) {
    return {
      on: true,
      strength: Math.min(_0x48efec.bloom.strengthMax, _0xb469fd)
    };
  } else {
    return {
      on: true,
      strength: _0x48efec.bloom.strength
    };
  }
}
export function resolveSamples(_0x56a1ce, _0x5acd81) {
  const _0xf20128 = Number(_0x56a1ce);
  if (_0x56a1ce != null && _0x56a1ce !== "" && Number.isInteger(_0xf20128) && _0xf20128 >= 0 && _0xf20128 <= 4) {
    return _0xf20128;
  } else {
    return _0x5acd81.samples;
  }
}
export const POST_MSAA_PIXEL_CEILING = 6000000;
export function resolveRuntimeSamples(_0x1ea4d1, _0x27ec30, _0x524a26, _0x4575f0 = 6000000) {
  const _0x4b68fb = Number(_0x1ea4d1);
  const _0x335d7a = _0x1ea4d1 != null && _0x1ea4d1 !== "" && Number.isInteger(_0x4b68fb) && _0x4b68fb >= 0 && _0x4b68fb <= 4;
  const _0x2441cf = resolveSamples(_0x1ea4d1, _0x27ec30);
  if (_0x335d7a) {
    return _0x2441cf;
  }
  if ((Number.isFinite(_0x524a26) && _0x524a26 >= 0 ? _0x524a26 : 0) > _0x4575f0) {
    return 0;
  } else {
    return _0x2441cf;
  }
}
export const SURFACE = {
  carapace: {
    roughness: 0.55,
    metalness: 0.2,
    envMapIntensity: 0.55
  },
  chassis: {
    roughness: 0.34,
    metalness: 0.55,
    envMapIntensity: 0.85
  },
  emplacement: {
    roughness: 0.66,
    metalness: 0.28,
    envMapIntensity: 0.45
  },
  deck: {
    roughness: 0.78,
    metalness: 0.12,
    envMapIntensity: 0.35
  },
  plate: {
    roughness: 0.62,
    metalness: 0.24,
    envMapIntensity: 0.45
  },
  machine: {
    roughness: 0.38,
    metalness: 0.52,
    envMapIntensity: 0.8
  },
  distant: {
    roughness: 0.92,
    metalness: 0,
    envMapIntensity: 0.15
  }
};