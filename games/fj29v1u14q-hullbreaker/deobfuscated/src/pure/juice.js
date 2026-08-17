export function clamp01(_0x52a2fe) {
  if (_0x52a2fe < 0) {
    return 0;
  } else if (_0x52a2fe > 1) {
    return 1;
  } else {
    return _0x52a2fe;
  }
}
export function hitStopEvent(_0x5ae385, _0x3dc7d1, _0x3ed612, _0x26912d) {
  if (_0x26912d < _0x3ed612) {
    return "hurt";
  } else if (_0x3dc7d1 > _0x5ae385) {
    return "kill";
  } else {
    return null;
  }
}
export function hitStopMsFor(_0x191ac1, _0x472902) {
  if (_0x191ac1 === "hurt") {
    return _0x472902.hurtMs;
  } else if (_0x191ac1 === "kill") {
    return _0x472902.killMs;
  } else {
    return 0;
  }
}
export function hitStopArm(_0x22c79f, _0x48cde0, _0x3983bc, _0xc1aa3e) {
  if (!(_0x3983bc > 0)) {
    return _0x22c79f;
  }
  const _0x2d6234 = _0x48cde0 + _0x3983bc;
  const _0x5755ad = _0x48cde0 + _0xc1aa3e.maxMs;
  return Math.min(Math.max(_0x22c79f, _0x2d6234), _0x5755ad);
}
export function hitStopScaleAt(_0x25048d, _0x347a25, _0x35e815) {
  if (_0x25048d < _0x347a25) {
    return _0x35e815.scale;
  } else {
    return 1;
  }
}
export function traumaAdd(_0x39b94d, _0x45451e) {
  return clamp01(_0x39b94d + _0x45451e);
}
export function traumaAfter(_0x4ad565, _0x2b5a1b, _0x16575b) {
  return clamp01(_0x4ad565 - _0x16575b * (_0x2b5a1b / 1000));
}
export function shakeAt(_0x4b42af, _0x3f35cd, _0x55fc98, _0x4d319f) {
  const _0x12e348 = _0x4b42af * _0x4b42af;
  const _0x2d9798 = _0x3f35cd / 1000 * _0x55fc98.freqHz * Math.PI * 2;
  _0x4d319f.x = _0x12e348 * _0x55fc98.maxOffset * Math.sin(_0x2d9798);
  _0x4d319f.y = _0x12e348 * _0x55fc98.maxOffset * Math.sin(_0x2d9798 * 1.37 + 1.7);
  _0x4d319f.roll = _0x12e348 * _0x55fc98.maxRollDeg * Math.sin(_0x2d9798 * 0.61 + 3.1);
  return _0x4d319f;
}
export function crushWarnIntensity(_0x2c8290, _0x5af4f4) {
  if (!(_0x2c8290 < _0x5af4f4.startTiles) || !(_0x5af4f4.startTiles > 0)) {
    return 0;
  }
  const _0x490698 = 1 - Math.max(0, _0x2c8290) / _0x5af4f4.startTiles;
  return clamp01(_0x490698 * _0x490698);
}
export function warnPulse(_0x447c3a, _0x373199, _0x381da5) {
  const _0x355fd2 = _0x381da5.pulseSlowMs + (_0x381da5.pulseFastMs - _0x381da5.pulseSlowMs) * clamp01(_0x447c3a);
  return 0.5 + Math.sin(_0x373199 / _0x355fd2 * Math.PI * 2) * 0.5;
}
export function hash01(_0x46d653) {
  let _0x40db69 = Math.imul(_0x46d653 ^ -1640531527, 2246822519);
  _0x40db69 ^= _0x40db69 >>> 15;
  _0x40db69 = Math.imul(_0x40db69, 3266489917);
  _0x40db69 ^= _0x40db69 >>> 13;
  return (_0x40db69 >>> 0) / 4294967296;
}
export function burstVelocity(_0x263553, _0x14b511, _0x511ad0, _0x144772, _0x5e5cdf) {
  const _0x37ebfb = _0x14b511 * 2.39996323 + hash01(_0x263553 * 733 + _0x14b511 * 37) * 0.9;
  const _0x54dc89 = _0x144772 * (0.45 + hash01(_0x263553 * 977 + _0x14b511 * 61) * 0.55);
  const _0x335bf7 = (hash01(_0x263553 * 401 + _0x14b511 * 89) - 0.5) * 0.7;
  _0x5e5cdf.s = Math.cos(_0x37ebfb) * _0x54dc89;
  _0x5e5cdf.y = Math.sin(_0x37ebfb) * _0x54dc89;
  _0x5e5cdf.d = _0x335bf7 * _0x54dc89;
  return _0x5e5cdf;
}
export function particleAlpha(_0x184aa8) {
  const _0x3c147c = clamp01(_0x184aa8);
  return (1 - _0x3c147c) * (1 - _0x3c147c);
}
export function particleScale(_0xd87ee4, _0x1f4d1a, _0x202f1f) {
  return _0x1f4d1a + (_0x202f1f - _0x1f4d1a) * clamp01(_0xd87ee4);
}
export function flashAlpha(_0x86ed2) {
  const _0x4f57ea = clamp01(_0x86ed2);
  if (_0x4f57ea < 0.18) {
    return 1;
  } else {
    return clamp01((0.82 - (_0x4f57ea - 0.18)) / 0.82) ** 1.6;
  }
}
export function travelStretch(_0x1cfbc6) {
  return _0x1cfbc6 / 60;
}
export function bulletNoseTiles(_0x166fb7, _0x425ac8, _0x2b62af) {
  return Math.min(_0x166fb7 + travelStretch(_0x425ac8), _0x2b62af);
}