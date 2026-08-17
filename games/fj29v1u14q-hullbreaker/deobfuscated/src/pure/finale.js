export function finalePacketDue({
  wave: _0x2362f7,
  elapsedMs: _0x189f67,
  earnedDamage: _0x4972e7,
  packets: _0x5bcaad,
  windowDamage: _0xfaaea0,
  readyElapsedMs: _0x14c6c1 = 0,
  powerBand: _0x4e6162 = 0,
  supportThreats: _0x5dce42 = 0,
  queuedSupport: _0x1a0d31 = 0,
  clearEmaMs: _0xa1418 = 0
}) {
  const _0x225bd3 = _0x5bcaad[_0x2362f7];
  return !!_0x225bd3 && (_0x189f67 >= _0x225bd3.atMs || !(_0x189f67 < _0x14c6c1) && (_0x2362f7 > 0 && _0x4972e7 >= _0x2362f7 * _0xfaaea0 || _0x2362f7 > 0 && _0x4e6162 > 0 && _0xa1418 > 0 && _0x5dce42 <= 0 && _0x1a0d31 <= 0));
}
export function finaleEarnedClear({
  defendElapsedMs: _0x16bbad,
  minEarnedMs: _0x2e6e61,
  wave: _0x41974b,
  packetCount: _0x27ae74,
  wardenBroken: _0x4388c0,
  supportThreats: _0x46b6b8,
  queuedSupport: _0xb66418 = 0
}) {
  return _0x16bbad >= _0x2e6e61 && _0x41974b >= _0x27ae74 && !!_0x4388c0 && _0x46b6b8 <= 0 && _0xb66418 <= 0;
}
const e = (_0x20ba37, _0x2eca3a, _0x412736) => Math.max(_0x2eca3a, Math.min(_0x412736, _0x20ba37));
export function finalePowerBand({
  clearEmaMs: _0x217314 = 0,
  kills: _0x20be6e = 0,
  earnedDamage: _0x314ce7 = 0,
  defendElapsedMs: _0xb5294b = 0
}) {
  const _0x448ac3 = Math.max(0.75, _0xb5294b / 1000);
  const _0x5dfefd = Number(_0x217314) || 0;
  const _0x5d821d = Math.max(0, Number(_0x20be6e) || 0) / _0x448ac3;
  const _0x1df122 = Math.max(0, Number(_0x314ce7) || 0) / _0x448ac3;
  let _0x588bfb = 0;
  if (_0x5dfefd > 0 && _0x5dfefd <= 1650 || _0x5d821d >= 0.42 || _0x1df122 >= 4.5) {
    _0x588bfb++;
  }
  if (_0x5dfefd > 0 && _0x5dfefd <= 1050 || _0x5d821d >= 0.72 || _0x1df122 >= 7.5) {
    _0x588bfb++;
  }
  if (_0x5dfefd > 0 && _0x5dfefd <= 650 || _0x5d821d >= 1.05 || _0x1df122 >= 11) {
    _0x588bfb++;
  }
  return e(_0x588bfb, 0, 3);
}
export function finalePressurePlan({
  nowMs: _0x308e95 = 0,
  liveSupport: _0x5ec63d = 0,
  queuedSupport: _0x12c735 = 0,
  powerBand: _0x207454 = 0,
  lastSpawnAtMs: _0x348b36 = -1000000000,
  emptySinceMs: _0x132144 = -1,
  adaptiveSpawned: _0x586b3b = 0,
  adaptiveCap: _0x1480ca = 0,
  allowAdaptive: _0x1ed4c3 = true
}, _0x105b7f) {
  const _0x3b1dd1 = e(_0x207454 | 0, 0, 3);
  const _0x282871 = Math.max(1, _0x105b7f.maxSupport | 0);
  const _0x434e11 = e(_0x5ec63d | 0, 0, _0x282871);
  const _0x5ccb6b = Math.max(0, _0x12c735 | 0);
  const _0x4ca8ed = e(_0x105b7f.targetSupport[_0x3b1dd1] | 0, 1, _0x282871);
  const _0x2451ea = Math.max(0, _0x308e95 - _0x348b36);
  const _0x236eb5 = Math.max(0, _0x105b7f.spawnGapMs[_0x3b1dd1] || 0);
  const _0x5cd9b3 = Math.max(0, _0x105b7f.refillDelayMs[_0x3b1dd1] || 0);
  const _0x51af1a = _0x5ccb6b > 0 && _0x434e11 < _0x282871 && _0x434e11 < _0x4ca8ed && _0x2451ea >= _0x236eb5;
  const _0x358f28 = _0x132144 >= 0 ? Math.max(0, _0x308e95 - _0x132144) : 0;
  return {
    spawn: _0x51af1a ? "queued" : _0x1ed4c3 && _0x5ccb6b <= 0 && _0x434e11 <= 0 && _0x586b3b < _0x1480ca && _0x132144 >= 0 && _0x358f28 >= _0x5cd9b3 && _0x2451ea >= _0x236eb5 ? "adaptive" : "",
    band: _0x3b1dd1,
    cap: _0x282871,
    target: _0x4ca8ed,
    refillDelayMs: _0x5cd9b3
  };
}
export function finaleStage({
  phase: _0x169d72 = "dormant",
  wave: _0x2298a1 = 0,
  wardenBroken: _0x544a66 = false
}) {
  if (_0x169d72 === "arming") {
    return "interlock";
  } else if (_0x169d72 === "defend") {
    if (_0x544a66) {
      return "release";
    } else if (_0x2298a1 <= 1) {
      return "intercept";
    } else if (_0x2298a1 === 2) {
      return "contain";
    } else {
      return "scuttle";
    }
  } else if (_0x169d72 === "transmit") {
    return "uplink";
  } else if (_0x169d72 === "answer") {
    return "answer";
  } else if (_0x169d72 === "complete") {
    return "complete";
  } else {
    return "dormant";
  }
}