const o = 180 / Math.PI;
export function hookApproachDeg(_0x2f79fc, _0x389a3c, _0x141cea) {
  const _0x4be173 = Math.atan2(_0x141cea - _0x2f79fc.y, _0x389a3c - _0x2f79fc.x) * o;
  if (_0x4be173 < 0) {
    return _0x4be173 + 360;
  } else {
    return _0x4be173;
  }
}
export function hookArcAccepts(_0x5873d8, _0x2b541a, _0x3cf1c8) {
  const _0xc612f8 = _0x5873d8.arc[0];
  const _0x4736a1 = _0x5873d8.arc[1];
  let _0xf281b4 = Math.abs(hookApproachDeg(_0x5873d8, _0x2b541a, _0x3cf1c8) - _0xc612f8) % 360;
  if (_0xf281b4 > 180) {
    _0xf281b4 = 360 - _0xf281b4;
  }
  return _0xf281b4 <= _0x4736a1;
}
export function hookLineClear(_0xacab1d, _0x2fc91a, _0x51c318, _0x2e27ac, _0xcf5a65, _0x587f3c) {
  const _0xc25dff = _0x51c318 - _0xacab1d;
  const _0x2a73ca = _0x2e27ac - _0x2fc91a;
  const _0x13b584 = Math.max(1, Math.ceil(Math.hypot(_0xc25dff, _0x2a73ca) / _0x587f3c));
  for (let _0x56f8fd = 0; _0x56f8fd <= _0x13b584; _0x56f8fd++) {
    const _0x4ea2cc = _0x56f8fd / _0x13b584;
    if (_0xcf5a65(Math.floor(_0xacab1d + _0xc25dff * _0x4ea2cc), Math.floor(_0x2fc91a + _0x2a73ca * _0x4ea2cc))) {
      return false;
    }
  }
  return true;
}
export function hookHoldPoint(_0x55935e, _0x1850f7) {
  return {
    x: _0x55935e.x,
    y: _0x55935e.y - _0x1850f7.handHeight
  };
}
export function hookAcquire(_0x503f7f, _0x71857b, _0x541407, _0x586135) {
  if (!_0x503f7f || !_0x503f7f.length) {
    return null;
  }
  const _0x2fd440 = _0x71857b.x;
  const _0x4a9cc4 = _0x71857b.y + _0x541407.handHeight;
  let _0x5647b5 = null;
  let _0x4569a3 = Infinity;
  for (const _0xd8ba02 of _0x503f7f) {
    if (_0xd8ba02.id === _0x71857b.lockedId && _0x71857b.now < _0x71857b.lockedUntil) {
      continue;
    }
    const _0x19a73d = _0xd8ba02.x - _0x2fd440;
    const _0x4fa9cd = _0xd8ba02.y - _0x4a9cc4;
    const _0x203a96 = Math.hypot(_0x19a73d, _0x4fa9cd);
    if (_0x203a96 > _0x541407.range || _0x203a96 < _0x541407.minRange) {
      continue;
    }
    if (_0x19a73d * (_0x71857b.facing || 1) < -_0x541407.behindTiles) {
      continue;
    }
    if (!hookArcAccepts(_0xd8ba02, _0x2fd440, _0x4a9cc4)) {
      continue;
    }
    if (!hookLineClear(_0x2fd440, _0x4a9cc4, _0xd8ba02.x, _0xd8ba02.y, _0x586135, _0x541407.losStepTiles)) {
      continue;
    }
    const _0x501017 = _0x203a96 * (_0x19a73d >= 0 ? 1 : _0x541407.behindPenalty);
    if (_0x501017 < _0x4569a3) {
      _0x4569a3 = _0x501017;
      _0x5647b5 = _0xd8ba02;
    }
  }
  if (_0x5647b5) {
    return {
      anchor: _0x5647b5,
      dist: Math.hypot(_0x5647b5.x - _0x2fd440, _0x5647b5.y - _0x4a9cc4)
    };
  } else {
    return null;
  }
}
export function hookZipMarch(_0x4f4169, _0x94c692, _0x296b90, _0x4418de, _0x35f7c8, _0xabdf1) {
  const _0x19674c = _0x94c692.x - _0x4f4169.x;
  const _0x4265ba = _0x94c692.y - _0x4f4169.y;
  const _0x2e6fa0 = Math.hypot(_0x19674c, _0x4265ba);
  if (_0x2e6fa0 <= 0.000001) {
    return {
      x: _0x94c692.x,
      y: _0x94c692.y,
      arrived: true,
      blocked: false,
      traveled: 0
    };
  }
  const _0x234164 = Math.min(_0x2e6fa0, _0x296b90 * _0x4418de);
  const _0x51e042 = Math.max(1, Math.ceil(_0x234164 / _0x35f7c8));
  const _0x11e6eb = _0x19674c / _0x2e6fa0;
  const _0x5d61b4 = _0x4265ba / _0x2e6fa0;
  let _0x1a3c74 = _0x4f4169.x;
  let _0x28e7f2 = _0x4f4169.y;
  let _0x5a36bc = 0;
  for (let _0x282d85 = 1; _0x282d85 <= _0x51e042; _0x282d85++) {
    const _0x56f451 = _0x234164 * _0x282d85 / _0x51e042;
    const _0x3a574e = _0x4f4169.x + _0x11e6eb * _0x56f451;
    const _0x1539d3 = _0x4f4169.y + _0x5d61b4 * _0x56f451;
    if (!_0xabdf1(_0x3a574e, _0x1539d3)) {
      return {
        x: _0x1a3c74,
        y: _0x28e7f2,
        arrived: false,
        blocked: true,
        traveled: _0x5a36bc
      };
    }
    _0x1a3c74 = _0x3a574e;
    _0x28e7f2 = _0x1539d3;
    _0x5a36bc = _0x56f451;
  }
  return {
    x: _0x1a3c74,
    y: _0x28e7f2,
    arrived: _0x234164 >= _0x2e6fa0 - 0.000001,
    blocked: false,
    traveled: _0x5a36bc
  };
}
export function hookWhipVelocity(_0x23441a, _0xeaeb51, _0x293f57, _0x322454) {
  return {
    vx: (_0xeaeb51 || 1) * Math.min(_0x23441a.launchCeiling, Math.max(_0x23441a.launchX, Math.abs(_0x293f57 || 0)) * (_0x322454 || 1)),
    vy: _0x23441a.launchY
  };
}
export function hookWhipDir(_0x36a017, _0x4bceeb, _0xbb1e95) {
  const _0x9a4eea = _0x36a017.x - _0x4bceeb;
  if (Math.abs(_0x9a4eea) < 0.35) {
    return _0xbb1e95 || 1;
  } else if (_0x9a4eea > 0) {
    return 1;
  } else {
    return -1;
  }
}
export function hookAnchorReachableFrom(_0x52bc44, _0x5f0a1e, _0x1c9463, _0x466165, _0x36e0d4, _0x5206d8 = 1) {
  return !!hookAcquire([_0x52bc44], {
    x: _0x5f0a1e,
    y: _0x1c9463,
    facing: _0x5206d8,
    now: 0,
    lockedId: null,
    lockedUntil: 0
  }, _0x466165, _0x36e0d4);
}