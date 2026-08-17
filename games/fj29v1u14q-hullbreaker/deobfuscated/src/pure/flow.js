export function flowClampLinks(_0x458c7e, _0xcde8f1) {
  return Math.max(0, Math.min(_0xcde8f1.max, _0x458c7e));
}
export function flowMult(_0x244825, _0x1c7464) {
  if (_0x1c7464) {
    return 1 + _0x1c7464.step * flowClampLinks(_0x244825, _0x1c7464);
  } else {
    return 1;
  }
}
export function flowCompose(_0x134c92, _0x270f5b, _0x350256) {
  if (_0x350256) {
    return Math.min(_0x350256.maxTotalMult, (_0x134c92 || 1) * flowMult(_0x270f5b, _0x350256));
  } else {
    return _0x134c92;
  }
}
export function flowLaunchMultFor(_0x4afdfe, _0x32cb1a, _0x19e28e, _0xb8c201) {
  if (!_0x19e28e) {
    return _0x4afdfe;
  }
  const _0x4ce24d = flowCompose(_0x4afdfe, _0x32cb1a, _0x19e28e);
  const _0x7178a1 = Math.abs(_0xb8c201 || 0);
  if (_0x7178a1 <= 1e-9) {
    return _0x4ce24d;
  } else {
    return Math.min(_0x4ce24d, _0x19e28e.launchCeiling / _0x7178a1);
  }
}
export function flowSpeedMult(_0x1bf26c, _0x3edf0e) {
  if (_0x3edf0e) {
    return Math.min(_0x3edf0e.speedMultCap, flowMult(_0x1bf26c, _0x3edf0e));
  } else {
    return 1;
  }
}
export function flowFreshState() {
  return {
    links: 0,
    expiresAt: 0,
    groundedMs: 0,
    decayAcc: 0
  };
}
export function flowAddLink(_0x966a5a, _0x35dc68, _0x2c0056) {
  return {
    links: flowClampLinks(_0x966a5a.links + 1, _0x2c0056),
    expiresAt: _0x35dc68 + _0x2c0056.windowMs,
    groundedMs: 0,
    decayAcc: 0
  };
}
export function flowStepState(_0x1dd2b0, _0x4ab950, _0x1276b7) {
  if (!_0x1276b7 || _0x1dd2b0.links <= 0) {
    return {
      links: 0,
      expiresAt: _0x1dd2b0.expiresAt,
      groundedMs: 0,
      decayAcc: 0
    };
  }
  if (!_0x4ab950.grounded) {
    if (_0x4ab950.now > _0x1dd2b0.expiresAt) {
      return flowFreshState();
    } else {
      return {
        links: _0x1dd2b0.links,
        expiresAt: _0x1dd2b0.expiresAt,
        groundedMs: 0,
        decayAcc: 0
      };
    }
  }
  const _0x30dbdb = _0x1dd2b0.groundedMs + _0x4ab950.dtMs;
  if (_0x30dbdb <= _0x1276b7.groundGraceMs) {
    return {
      links: _0x1dd2b0.links,
      expiresAt: _0x1dd2b0.expiresAt,
      groundedMs: _0x30dbdb,
      decayAcc: 0
    };
  }
  let _0x33442c = _0x1dd2b0.links;
  let _0x2546b1 = _0x1dd2b0.decayAcc + (_0x1dd2b0.groundedMs > _0x1276b7.groundGraceMs ? _0x4ab950.dtMs : _0x30dbdb - _0x1276b7.groundGraceMs);
  while (_0x2546b1 >= _0x1276b7.groundDecayMs && _0x33442c > 0) {
    _0x2546b1 -= _0x1276b7.groundDecayMs;
    _0x33442c--;
  }
  if (_0x33442c <= 0) {
    return {
      links: 0,
      expiresAt: _0x1dd2b0.expiresAt,
      groundedMs: _0x30dbdb,
      decayAcc: 0
    };
  } else {
    return {
      links: _0x33442c,
      expiresAt: _0x1dd2b0.expiresAt,
      groundedMs: _0x30dbdb,
      decayAcc: _0x2546b1
    };
  }
}
export function flowGroundLifetimeMs(_0xa25af3, _0x241db5) {
  return _0x241db5.groundGraceMs + flowClampLinks(_0xa25af3, _0x241db5) * _0x241db5.groundDecayMs;
}