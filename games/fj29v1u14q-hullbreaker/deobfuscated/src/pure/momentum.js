export function clamp01(_0x2bd9ff) {
  if (_0x2bd9ff < 0) {
    return 0;
  } else if (_0x2bd9ff > 1) {
    return 1;
  } else {
    return _0x2bd9ff;
  }
}
export function momentumScreenFrac(_0x2f972a, _0x1fcf76, _0x94615) {
  const _0x1d7404 = _0x94615 - _0x1fcf76;
  if (_0x1d7404 > 0) {
    return clamp01((_0x2f972a - _0x1fcf76) / _0x1d7404);
  } else {
    return 0;
  }
}
export function momentumBank(_0x146a49, _0x2a642c) {
  if (_0x2a642c.bankHi > _0x2a642c.bankLo) {
    return clamp01((_0x146a49 - _0x2a642c.bankLo) / (_0x2a642c.bankHi - _0x2a642c.bankLo));
  } else {
    return 0;
  }
}
export function momentumCombatStep(_0x2c7f65, _0x9c3fba, _0x162dda, _0xabc036) {
  return clamp01(_0x2c7f65 + (_0x9c3fba > 0 ? _0x9c3fba / _0xabc036.killFull : 0) - _0x162dda / _0xabc036.killDecaySec);
}
export function momentumTarget(_0x14fd84, _0x31614d, _0x1805e1) {
  return clamp01(_0x1805e1.wBank * clamp01(_0x14fd84) + _0x1805e1.wCombat * clamp01(_0x31614d));
}
export function momentumStep(_0x278b5c, _0x2ca8a5, _0x5447ae, _0x43620e, _0x58f38a) {
  const _0x5dff1f = clamp01(_0x278b5c);
  let _0x1a90bc = clamp01(_0x2ca8a5);
  if (_0x58f38a && _0x58f38a.mercy && _0x1a90bc > _0x5dff1f) {
    _0x1a90bc = _0x5dff1f;
  }
  const _0x41a9a3 = (_0x1a90bc > _0x5dff1f ? _0x43620e.risePerSec : _0x43620e.fallPerSec) * _0x5447ae;
  return clamp01(_0x1a90bc > _0x5dff1f ? Math.min(_0x1a90bc, _0x5dff1f + _0x41a9a3) : Math.max(_0x1a90bc, _0x5dff1f - _0x41a9a3));
}
export function momentumBankSample(_0x19cf74, _0x5d8c2d, _0x441a5d, _0x433644) {
  if (_0x441a5d) {
    return clamp01(_0x19cf74);
  } else {
    return momentumBank(_0x5d8c2d, _0x433644);
  }
}
export function momentumOnDamage(_0x20950a, _0x51dd85) {
  return Math.min(clamp01(_0x20950a), _0x51dd85.hitDrive);
}
export function momentumSpeed(_0x334fe5, _0xfa9630, _0x5e27b3) {
  return _0xfa9630 * (1 + (_0x5e27b3.ceilMult - 1) * clamp01(_0x334fe5));
}
export function momentumHardCeiling(_0x5d002d, _0x142637) {
  return _0x5d002d * _0x142637.hardCeilMult;
}
export function momentumClampSpeed(_0x43b0cf, _0x346678, _0x263005) {
  const _0x3e6865 = momentumHardCeiling(_0x346678, _0x263005);
  if (_0x43b0cf > _0x3e6865) {
    return _0x3e6865;
  } else if (_0x43b0cf < _0x346678) {
    return _0x346678;
  } else {
    return _0x43b0cf;
  }
}
export function momentumHeadroom(_0x18ccb0, _0x56dd2c) {
  return momentumHardCeiling(_0x18ccb0, _0x56dd2c) - momentumSpeed(1, _0x18ccb0, _0x56dd2c);
}
export function momentumSpawnScale(_0x374af1, _0x2b639e) {
  return momentumSpeed(_0x374af1, 1, _0x2b639e);
}
export function momentumDriveFromSpeed(_0x1eca0b, _0x4a793a, _0x320d4a) {
  if (_0x320d4a.ceilMult > 1 && _0x4a793a > 0) {
    return clamp01((_0x1eca0b / _0x4a793a - 1) / (_0x320d4a.ceilMult - 1));
  } else {
    return 0;
  }
}
export function momentumTier(_0x4e91ba, _0x5d4c2e) {
  const _0x472acd = clamp01(_0x4e91ba);
  let _0x407ac7 = 0;
  for (const _0x5456e8 of _0x5d4c2e.tiers) {
    if (_0x472acd >= _0x5456e8) {
      _0x407ac7++;
    }
  }
  return _0x407ac7;
}
export function momentumMeter(_0x1b4351, _0x330bd3) {
  const _0x4db13e = momentumTier(_0x1b4351, _0x330bd3);
  let _0x533bee = "";
  for (let _0x2daa4e = 0; _0x2daa4e < _0x330bd3.tiers.length; _0x2daa4e++) {
    _0x533bee += _0x2daa4e < _0x4db13e ? "▰" : "▱";
  }
  return _0x533bee;
}