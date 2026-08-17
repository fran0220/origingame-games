export const SEAMS = {
  minRun: 4,
  platformMinRun: 4.6,
  platformStride: 3,
  pipEvery: 28,
  clusterGap: 0,
  edgeMargin: 1.15,
  pipSize: 0.13,
  haloSize: 0.34,
  housingWidth: 0.62,
  housingHeight: 0.18,
  housingDepth: 0.16,
  coreWidth: 0.22,
  coreHeight: 0.042,
  spillWidth: 0.64,
  spillHeight: 0.2,
  deckUnder: 0.31,
  platformUnder: 0.25,
  deckDepth: 1.1,
  platformDepth: 0.8,
  depthGainMin: 0.72
};
export function depthGain(_0x472f98, _0x67ddd = SEAMS) {
  const _0x36720f = Math.min(_0x67ddd.deckDepth, _0x67ddd.platformDepth);
  const _0x1103e9 = Math.max(_0x67ddd.deckDepth, _0x67ddd.platformDepth);
  if (_0x1103e9 <= _0x36720f) {
    return 1;
  }
  const _0x4bf9c6 = Math.max(0, Math.min(1, (_0x472f98 - _0x36720f) / (_0x1103e9 - _0x36720f)));
  return _0x67ddd.depthGainMin + (1 - _0x67ddd.depthGainMin) * _0x4bf9c6;
}
export function resolveSeams(_0xe75132) {
  return _0xe75132 !== "0" && _0xe75132 !== "off";
}
export function deckEdgeRuns(_0x24eeac) {
  const _0x3c7ffc = [];
  let _0x380e7c = -1;
  for (let _0x31e9ac = 0; _0x31e9ac <= _0x24eeac.length; _0x31e9ac++) {
    const _0x284785 = _0x31e9ac < _0x24eeac.length && _0x24eeac[_0x31e9ac] > -100;
    if (_0x284785 && _0x380e7c < 0) {
      _0x380e7c = _0x31e9ac;
    } else if (!_0x284785 && _0x380e7c >= 0) {
      _0x3c7ffc.push({
        s0: _0x380e7c,
        s1: _0x31e9ac
      });
      _0x380e7c = -1;
    }
  }
  return _0x3c7ffc;
}
function t(_0x34ef6d, _0x996b63, _0x5d05ee, _0xa0b883, _0x52d4c6 = 0) {
  const _0x33e54e = Math.max(0, _0x52d4c6) / 2;
  const _0x567027 = _0x34ef6d + _0xa0b883 + _0x33e54e;
  const _0x5d63b3 = _0x996b63 - _0xa0b883 - _0x33e54e;
  if (_0x5d63b3 <= _0x567027) {
    return [];
  }
  const _0x4b74cf = _0x5d63b3 - _0x567027;
  const _0x217254 = Math.max(1, Math.round(_0x4b74cf / _0x5d05ee) + 1);
  const _0xa54976 = [];
  for (let _0x271bb7 = 0; _0x271bb7 < _0x217254; _0x271bb7++) {
    const _0x2be6a9 = _0x217254 === 1 ? (_0x567027 + _0x5d63b3) / 2 : _0x567027 + _0x4b74cf * _0x271bb7 / (_0x217254 - 1);
    if (_0x33e54e > 0) {
      _0xa54976.push(_0x2be6a9 - _0x33e54e, _0x2be6a9 + _0x33e54e);
    } else {
      _0xa54976.push(_0x2be6a9);
    }
  }
  return _0xa54976;
}
export function deckSeamRuns(_0x127e22, _0x219f34 = SEAMS) {
  const _0x2d456e = [];
  for (const _0x4baf0e of deckEdgeRuns(_0x127e22)) {
    if (_0x4baf0e.s1 - _0x4baf0e.s0 < _0x219f34.minRun) {
      continue;
    }
    const _0x49c1cd = t(_0x4baf0e.s0, _0x4baf0e.s1, _0x219f34.pipEvery, _0x219f34.edgeMargin, _0x219f34.clusterGap || 0);
    _0x2d456e.push({
      kind: "deck",
      s0: _0x4baf0e.s0,
      s1: _0x4baf0e.s1,
      pips: _0x49c1cd.map(_0x18509d => ({
        s: _0x18509d,
        y: _0x127e22[Math.min(_0x127e22.length - 1, Math.floor(_0x18509d))] - _0x219f34.deckUnder
      }))
    });
  }
  return _0x2d456e;
}
export function platformSeamRuns(_0x253246, _0x534c36 = SEAMS) {
  const _0x309a4c = [];
  for (let _0x535f2e = 0; _0x535f2e < _0x253246.length; _0x535f2e++) {
    const _0x2776d9 = _0x253246[_0x535f2e];
    if (_0x2776d9.x1 - _0x2776d9.x0 < (_0x534c36.platformMinRun || _0x534c36.minRun)) {
      continue;
    }
    if (_0x535f2e % Math.max(1, _0x534c36.platformStride || 1) !== 1) {
      continue;
    }
    const _0x483727 = t(_0x2776d9.x0, _0x2776d9.x1, _0x534c36.pipEvery, _0x534c36.edgeMargin, _0x534c36.clusterGap || 0);
    _0x309a4c.push({
      kind: "platform",
      s0: _0x2776d9.x0,
      s1: _0x2776d9.x1,
      pips: _0x483727.map(_0x4decbf => ({
        s: _0x4decbf,
        y: _0x2776d9.y - _0x534c36.platformUnder
      }))
    });
  }
  return _0x309a4c;
}
export function seamRuns(_0x50a7ec, _0x5293eb, _0x202b85 = SEAMS) {
  return deckSeamRuns(_0x50a7ec, _0x202b85).concat(platformSeamRuns(_0x5293eb, _0x202b85));
}
export function seamPipCount(_0x37f8c8) {
  let _0x185978 = 0;
  for (const _0x1ad3c6 of _0x37f8c8) {
    _0x185978 += _0x1ad3c6.pips.length;
  }
  return _0x185978;
}