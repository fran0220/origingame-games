export const CROWN_APPROACH = Object.freeze({
  startFromEnd: 36,
  coreFromEnd: 18,
  endFromEnd: 0,
  deckY: 3
});
export const CROWN_MECHANICAL_LIMITS = Object.freeze({
  packetDurationMs: 520,
  packetRootTravel: 0.24,
  packetCoreTravel: 0.055,
  turbineRadiansPerSecond: 4.4,
  turbineMaxStepMs: 80,
  ruptureDurationMs: 760,
  antennaWhipRadians: 0.12,
  transmissionDurationMs: 980,
  shellRecoilTravel: 0.22,
  shellRecoilRadians: 0.035,
  transmissionCoreTravel: 0.085
});
function e(_0xdae49b, _0x40dc1c) {
  const _0x223dfb = Number(_0xdae49b);
  if (!Number.isFinite(_0x223dfb) || _0x223dfb < 0 || _0x223dfb >= _0x40dc1c) {
    return 0;
  }
  const _0x548c97 = _0x223dfb / _0x40dc1c;
  const _0x5b2357 = Math.min(1, _0x548c97 / 0.18);
  const _0x1bcf1b = 1 - (_0x548c97 - 0.18) / 0.82;
  const _0x287e69 = _0x548c97 < 0.18 ? _0x5b2357 * _0x5b2357 * (3 - _0x5b2357 * 2) : Math.max(0, _0x1bcf1b * _0x1bcf1b * (3 - _0x1bcf1b * 2));
  return Math.max(0, Math.min(1, _0x287e69));
}
export function crownMechanicalPose({
  packetAgeMs: _0xdd5ee1 = Infinity,
  ruptureAgeMs: _0x2d09c3 = Infinity,
  transmissionAgeMs: _0x44853f = Infinity
} = {}) {
  const _0xb99ad4 = e(_0xdd5ee1, CROWN_MECHANICAL_LIMITS.packetDurationMs);
  const _0x26e6ec = e(_0x2d09c3, CROWN_MECHANICAL_LIMITS.ruptureDurationMs);
  const _0x1e8537 = e(_0x44853f, CROWN_MECHANICAL_LIMITS.transmissionDurationMs);
  const _0x2ee71d = Number.isFinite(Number(_0x2d09c3)) ? Math.max(0, Math.min(1, Number(_0x2d09c3) / CROWN_MECHANICAL_LIMITS.ruptureDurationMs)) : 0;
  const _0x2b49dd = _0x26e6ec * Math.sin(_0x2ee71d * Math.PI * 3);
  return Object.freeze({
    rootCompression: _0xb99ad4,
    coreKick: Math.max(_0xb99ad4 * 0.34, _0x1e8537),
    antennaWhip: _0x2b49dd,
    transmissionRecoil: _0x1e8537
  });
}
export function stepCrownTurbine(_0x435c87 = 0, _0x1c7bf8 = 0, _0x1fd7b7 = false) {
  const _0x384748 = Math.PI * 2;
  const _0x14741e = ((Number(_0x435c87) || 0) % _0x384748 + _0x384748) % _0x384748;
  if (!_0x1fd7b7) {
    return _0x14741e;
  }
  return (_0x14741e + Math.max(0, Math.min(CROWN_MECHANICAL_LIMITS.turbineMaxStepMs, Number(_0x1c7bf8) || 0)) * CROWN_MECHANICAL_LIMITS.turbineRadiansPerSecond / 1000) % _0x384748;
}
function t(_0x2b731d, _0x3fdeda, _0x3a5387, _0x132159, _0x292f19, _0x4098e6, _0xc0a857, _0x124be0, _0x37922b = 0, _0x2638ee = null) {
  return Object.freeze({
    kind: _0x2b731d,
    shape: _0x3fdeda,
    s: _0x3a5387,
    y: _0x132159,
    w: _0x292f19,
    h: _0x4098e6,
    depth: _0xc0a857,
    d: _0x124be0,
    tilt: _0x37922b,
    ...(_0x2638ee || {})
  });
}
function n(_0x558a1f, _0xd9a8bb, _0x34627e, _0x53eeba, _0x3cc293, _0x49bb2a, _0x2ab9ed, _0x2fb9c4, _0x36cc97 = 0.34, _0x39620c = null) {
  const _0x479378 = _0x3cc293 - _0x34627e;
  const _0x5a21ed = _0x49bb2a - _0x53eeba;
  return t(_0x558a1f, _0xd9a8bb, (_0x34627e + _0x3cc293) / 2, (_0x53eeba + _0x49bb2a) / 2, Math.hypot(_0x479378, _0x5a21ed), _0x36cc97, _0x2ab9ed, _0x2fb9c4, Math.atan2(_0x5a21ed, _0x479378), _0x39620c);
}
export function crownBakePlan(_0x49f814, _0x206679 = CROWN_APPROACH.deckY, {
  legacy: _0x177a4e = false
} = {}) {
  if (_0x177a4e) {
    return function (_0x298131, _0x1b711f) {
      const _0x13290a = _0x298131.levelLength - 20;
      const _0x44460e = _0x298131.levelLength - 11;
      const _0x5f13ba = _0x298131.levelLength - 4.5;
      const _0x1577a4 = (_0x13290a + _0x5f13ba) / 2;
      return [t("summitPlate", "plate", _0x44460e, _0x1b711f + 6.35, 33.5, 13.4, -4.9, 0.05), t("foundation", "rootLeft", _0x1577a4, _0x1b711f + 0.3, _0x5f13ba - _0x13290a + 5, 0.6, -1.55, 1.55), t("foundation", "rootRight", _0x1577a4, _0x1b711f + 0.82, _0x5f13ba - _0x13290a + 2, 0.66, -2.04, 1.65), t("foundation", "rootCrown", _0x44460e, _0x1b711f + 1.27, 11.2, 0.72, -2.56, 1.72), t("trim", "conduit", (_0x13290a + _0x44460e) / 2, _0x1b711f + 0.69, 6.4, 0.2, -1.42, 1.62), t("trim", "conduit", _0x44460e, _0x1b711f + 1.68, 8.4, 0.22, -2.42, 1.78), t("trim", "conduit", (_0x44460e + _0x5f13ba) / 2, _0x1b711f + 0.69, 5.4, 0.2, -1.42, 1.62)];
    }(_0x49f814, _0x206679);
  }
  const _0x583a60 = _0x49f814.levelLength - CROWN_APPROACH.coreFromEnd;
  const _0x47be5f = [];
  _0x47be5f.push(t("coreArt", "plate", _0x583a60 - 0.18, _0x206679 + 9.9, 15, 20, -3.18, 0.04, 0, {
    asset: "core"
  }));
  _0x47be5f.push(t("rootArt", "plate", _0x583a60 - 8.72, _0x206679 + 2.18, 20, 12, -2.42, 0.04, 0.018, {
    asset: "rootLeft"
  }));
  _0x47be5f.push(t("rootArt", "plate", _0x583a60 + 8.58, _0x206679 + 2.08, 20, 12, -2.4, 0.04, -0.026, {
    asset: "rootRight"
  }));
  _0x47be5f.push(t("antennaArt", "plate", _0x583a60 + 3.92, _0x206679 + 15.22, 11, 14, -3.34, 0.04, -0.012, {
    asset: "antenna"
  }));
  _0x47be5f.push(t("backplane", "recess", _0x583a60 - 0.18, _0x206679 + 9.18, 8.8, 10.4, -4.82, 0.56, -0.012));
  _0x47be5f.push(t("foundation", "rootLeft", _0x583a60 - 8.1, _0x206679 - 1.42, 16.2, 3.1, -2.02, 0.52, 0.03));
  _0x47be5f.push(t("foundation", "rootRight", _0x583a60 + 8.05, _0x206679 - 1.48, 14.5, 3, -2, 0.5, -0.05));
  _0x47be5f.push(t("foundation", "rootCrown", _0x583a60 - 0.28, _0x206679 - 1.36, 11.2, 3, -1.99, 0.48, -0.012));
  _0x47be5f.push(t("foundation", "rootLeft", _0x583a60 - 14.1, _0x206679 - 1.48, 6.9, 2.6, -2.04, 0.46, -0.09));
  _0x47be5f.push(t("foundation", "rootRight", _0x583a60 + 14.2, _0x206679 - 1.52, 6.25, 2.6, -2.03, 0.44, 0.08));
  _0x47be5f.push(t("shell", "shellLeft", _0x583a60 - 6.72, _0x206679 + 7.86, 1.62, 9.6, -3.48, 0.44, -0.055));
  _0x47be5f.push(t("shell", "shellRight", _0x583a60 + 6.68, _0x206679 + 7.12, 1.68, 8.8, -3.46, 0.42, 0.058));
  _0x47be5f.push(t("shell", "shoulderLeft", _0x583a60 - 5.12, _0x206679 + 3.18, 1.85, 2.45, -2.76, 0.48, 0.024));
  _0x47be5f.push(t("shell", "shoulderRight", _0x583a60 + 5.08, _0x206679 + 2.92, 1.95, 2.32, -2.74, 0.46, -0.036));
  _0x47be5f.push(t("shell", "crownCap", _0x583a60 - 2.02, _0x206679 + 17.52, 2.65, 1.18, -3.58, 0.4, -0.018));
  _0x47be5f.push(t("shell", "rootCrown", _0x583a60 - 0.12, _0x206679 + 0.3, 3.15, 1.12, -1.96, 0.4, 0.012));
  _0x47be5f.push(t("hardware", "gear", _0x583a60 - 7.2, _0x206679 + 3.68, 1.34, 1.34, -1.91, 0.18, 0.04));
  _0x47be5f.push(t("hardware", "gear", _0x583a60 + 7.48, _0x206679 + 2.95, 1.58, 1.58, -1.89, 0.18, -0.05));
  _0x47be5f.push(t("hardware", "gear", _0x583a60 - 4.92, _0x206679 + 8.74, 1.12, 1.12, -1.93, 0.16, 0.02));
  _0x47be5f.push(t("hardware", "gear", _0x583a60 + 4.74, _0x206679 + 7.92, 1.06, 1.06, -1.91, 0.16, -0.04));
  _0x47be5f.push(t("hardware", "gear", _0x583a60 - 0.15, _0x206679 + 16.42, 0.92, 0.92, -1.96, 0.14, 0));
  _0x47be5f.push(t("antenna", "antennaPod", _0x583a60 - 6.12, _0x206679 + 15.74, 0.7, 5.2, -3.72, 0.42, -0.045));
  _0x47be5f.push(t("antenna", "antennaPod", _0x583a60 + 2.9, _0x206679 + 18.28, 0.76, 5.8, -3.74, 0.44, 0.025));
  _0x47be5f.push(t("antenna", "antennaPod", _0x583a60 + 6.48, _0x206679 + 13.85, 0.58, 3.7, -3.69, 0.4, 0.085));
  _0x47be5f.push(n("signal0", "cableA", _0x583a60 - 12, _0x206679 - 0.35, _0x583a60 - 3.35, _0x206679 + 5.3, -1.97, 0.34, 0.72, {
    stage: 0
  }));
  _0x47be5f.push(n("signal0", "cableB", _0x583a60 + 11.7, _0x206679 - 0.5, _0x583a60 + 3.15, _0x206679 + 5.22, -1.95, 0.34, 0.7, {
    stage: 0
  }));
  _0x47be5f.push(n("signal1", "cableB", _0x583a60 - 3.18, _0x206679 + 5.28, _0x583a60 - 0.12, _0x206679 + 9.55, -1.9, 0.32, 0.58, {
    stage: 1
  }));
  _0x47be5f.push(n("signal2", "cableA", _0x583a60 + 0.04, _0x206679 + 10.82, _0x583a60 - 0.58, _0x206679 + 17.22, -1.92, 0.3, 0.52, {
    stage: 2
  }));
  _0x47be5f.push(n("signal2", "cableB", _0x583a60 + 0.32, _0x206679 + 10.42, _0x583a60 + 5.82, _0x206679 + 14.44, -1.94, 0.3, 0.48, {
    stage: 2
  }));
  _0x47be5f.push(t("void", "aperture", _0x583a60 + 0.02, _0x206679 + 9.62, 4.65, 4.65, -1.82, 0.08, 0));
  _0x47be5f.push(t("damage", "rupture", _0x583a60 + 5.12, _0x206679 + 10.38, 3.35, 6.4, -1.88, 0.42, -0.125));
  return _0x47be5f;
}
export function crownBounds(_0x3f5610, _0x5d4cab) {
  return crownBakePlan(_0x3f5610, CROWN_APPROACH.deckY, _0x5d4cab).reduce((_0x40cb73, _0x4d2a15) => ({
    s0: Math.min(_0x40cb73.s0, _0x4d2a15.s - _0x4d2a15.w / 2),
    s1: Math.max(_0x40cb73.s1, _0x4d2a15.s + _0x4d2a15.w / 2),
    y0: Math.min(_0x40cb73.y0, _0x4d2a15.y - _0x4d2a15.h / 2),
    y1: Math.max(_0x40cb73.y1, _0x4d2a15.y + _0x4d2a15.h / 2),
    nearestDepth: Math.max(_0x40cb73.nearestDepth, _0x4d2a15.depth + _0x4d2a15.d / 2)
  }), {
    s0: Infinity,
    s1: -Infinity,
    y0: Infinity,
    y1: -Infinity,
    nearestDepth: -Infinity
  });
}