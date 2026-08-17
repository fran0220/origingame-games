export const LADDER_TUNE = Object.freeze({
  grabHalfWidth: 0.48,
  bottomEntryPad: 0.18,
  topEntryPad: 0.28,
  climbSpeed: 12,
  jumpX: 9.4,
  jumpY: 11.8,
  topExitSpeed: 8.2,
  bottomExitSpeed: -1.2,
  endpointEpsilon: 0.015
});
function t(_0x10c3dd) {
  return _0x10c3dd && Number.isFinite(_0x10c3dd.x) && Number.isFinite(_0x10c3dd.y0) && Number.isFinite(_0x10c3dd.y1) && _0x10c3dd.y1 > _0x10c3dd.y0;
}
export function ladderCandidate(_0x2ae122, _0x4dadbc, _0x2baae0, _0x3b3717 = LADDER_TUNE) {
  if (!_0x2baae0 || !Array.isArray(_0x2ae122) || !_0x2ae122.length) {
    return null;
  }
  let _0x1a1168 = null;
  let _0x51c62a = Infinity;
  for (const _0x64bf52 of _0x2ae122) {
    if (!t(_0x64bf52)) {
      continue;
    }
    const _0x230e12 = Math.abs(_0x4dadbc.x - _0x64bf52.x);
    if (_0x230e12 > _0x3b3717.grabHalfWidth) {
      continue;
    }
    const _0x10df9b = _0x4dadbc.y;
    if (!(_0x10df9b < _0x64bf52.y0 - _0x3b3717.bottomEntryPad) && !(_0x10df9b > _0x64bf52.y1 + _0x3b3717.topEntryPad)) {
      if ((!(_0x2baae0 > 0) || !(_0x10df9b > _0x64bf52.y1 + _0x3b3717.endpointEpsilon)) && (!(_0x2baae0 < 0) || !(_0x10df9b < _0x64bf52.y0 - _0x3b3717.endpointEpsilon))) {
        if (_0x230e12 < _0x51c62a - 1e-9 || Math.abs(_0x230e12 - _0x51c62a) <= 1e-9 && String(_0x64bf52.id) < String(_0x1a1168?.id)) {
          _0x1a1168 = _0x64bf52;
          _0x51c62a = _0x230e12;
        }
      }
    }
  }
  return _0x1a1168;
}
export function ladderStep(_0x19fdf9, _0x542039 = LADDER_TUNE) {
  const _0x272ba7 = _0x19fdf9.ladder;
  if (!t(_0x272ba7)) {
    return {
      kind: "release",
      vy: 0
    };
  }
  if (_0x19fdf9.jumpBuffered) {
    return {
      kind: "jump",
      vx: (Math.sign(_0x19fdf9.hInput || _0x19fdf9.facing || 1) || 1) * _0x542039.jumpX,
      vy: _0x542039.jumpY
    };
  }
  const _0x1b1a49 = Math.sign(_0x19fdf9.vInput || 0);
  if (_0x1b1a49 > 0 && _0x19fdf9.y >= _0x272ba7.y1 - _0x542039.endpointEpsilon) {
    return {
      kind: "top-exit",
      y: _0x272ba7.y1 + 0.001,
      vx: _0x542039.topExitSpeed,
      vy: 0
    };
  }
  if (_0x1b1a49 < 0 && _0x19fdf9.y <= _0x272ba7.y0 + _0x542039.endpointEpsilon) {
    return {
      kind: "bottom-exit",
      y: _0x272ba7.y0 - 0.025,
      vx: 0,
      vy: _0x542039.bottomExitSpeed
    };
  }
  const _0x3f4984 = Math.max(_0x272ba7.y0, Math.min(_0x272ba7.y1, _0x19fdf9.y + _0x1b1a49 * _0x542039.climbSpeed * Math.max(0, _0x19fdf9.dt)));
  if (_0x1b1a49 > 0 && _0x3f4984 >= _0x272ba7.y1 - _0x542039.endpointEpsilon) {
    return {
      kind: "top-exit",
      y: _0x272ba7.y1 + 0.001,
      vx: _0x542039.topExitSpeed,
      vy: 0
    };
  } else if (_0x1b1a49 < 0 && _0x3f4984 <= _0x272ba7.y0 + _0x542039.endpointEpsilon) {
    return {
      kind: "bottom-exit",
      y: _0x272ba7.y0 - 0.025,
      vx: 0,
      vy: _0x542039.bottomExitSpeed
    };
  } else {
    return {
      kind: "climb",
      x: _0x272ba7.x,
      y: _0x3f4984,
      vx: 0,
      vy: _0x1b1a49 * _0x542039.climbSpeed
    };
  }
}