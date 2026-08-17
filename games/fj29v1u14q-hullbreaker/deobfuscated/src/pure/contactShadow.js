export const CONTACT_SHADOW = {
  ceiling: 6,
  maxOpacity: 0.55,
  minRadiusMult: 0.3
};
export function contactShadowGroundY(_0x696855, _0xc88eed, _0x51dfa1, _0x389c51, _0x16c95d = 0.05) {
  let _0x3fabe0 = _0x51dfa1 > -100 ? _0x51dfa1 : -999;
  for (const _0x2317f6 of _0x389c51) {
    if (_0x696855 >= _0x2317f6.x0 && _0x696855 < _0x2317f6.x1 && _0x2317f6.y <= _0xc88eed + _0x16c95d && _0x2317f6.y > _0x3fabe0) {
      _0x3fabe0 = _0x2317f6.y;
    }
  }
  return _0x3fabe0;
}
export function contactShadowFalloff(_0x17e771, _0x1a8f01) {
  const _0x16666c = Math.max(0, _0x17e771);
  if (_0x16666c >= _0x1a8f01.ceiling) {
    return {
      opacity: 0,
      radiusMult: _0x1a8f01.minRadiusMult
    };
  }
  const _0xcbc10 = 1 - _0x16666c / _0x1a8f01.ceiling;
  return {
    opacity: _0x1a8f01.maxOpacity * _0xcbc10,
    radiusMult: _0x1a8f01.minRadiusMult + (1 - _0x1a8f01.minRadiusMult) * _0xcbc10
  };
}
export function contactShadowPlacement(_0x35a031, _0x24e20a, _0x4e6d95, _0x2b4b0a, _0x22551a = CONTACT_SHADOW, _0x11335a = 0.05) {
  const _0x296782 = contactShadowGroundY(_0x35a031, _0x24e20a, _0x4e6d95, _0x2b4b0a, _0x11335a);
  if (_0x296782 <= -900) {
    return {
      groundY: _0x296782,
      opacity: 0,
      radiusMult: _0x22551a.minRadiusMult
    };
  }
  const {
    opacity: _0x2fb75d,
    radiusMult: _0x27919e
  } = contactShadowFalloff(_0x24e20a - _0x296782, _0x22551a);
  return {
    groundY: _0x296782,
    opacity: _0x2fb75d,
    radiusMult: _0x27919e
  };
}