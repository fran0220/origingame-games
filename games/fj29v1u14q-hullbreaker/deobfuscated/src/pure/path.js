import { CONFIG as _0x2f9828 } from "../config.js";
export const DEG = Math.PI / 180;
export function cornerSList(_0x363454) {
  const _0x516fec = [];
  for (let _0xed792d = 1; _0xed792d <= _0x363454.path.faces; _0xed792d++) {
    _0x516fec.push(_0x363454.path.introTiles + _0x363454.path.faceTiles * _0xed792d);
  }
  return _0x516fec;
}
export function haltSFor(_0x4c5707, _0x30315b) {
  return _0x4c5707 - _0x30315b.waves.haltOffset;
}
export function faceIndexAt(_0x4072a2, _0x5ad742) {
  const _0x142773 = _0x5ad742.path;
  if (_0x4072a2 < _0x142773.introTiles) {
    return 0;
  } else {
    return Math.min(Math.floor((_0x4072a2 - _0x142773.introTiles) / _0x142773.faceTiles) + 1, _0x142773.faces + 1);
  }
}
export function buildSegments(_0x2220ef) {
  const _0x5de2b0 = _0x2220ef.path.turnDeg * DEG * _0x2220ef.path.turnSign;
  const _0x3dcf5b = [{
    s0: 0,
    x: 0,
    z: 0,
    heading: 0
  }];
  for (const _0x4dd6ec of cornerSList(_0x2220ef)) {
    for (const _0x3e561c of [_0x4dd6ec, _0x4dd6ec + _0x2220ef.path.chamferTiles]) {
      const _0x2cda34 = _0x3dcf5b[_0x3dcf5b.length - 1];
      const _0x5f48bd = _0x3e561c - _0x2cda34.s0;
      _0x3dcf5b.push({
        s0: _0x3e561c,
        x: _0x2cda34.x + Math.cos(_0x2cda34.heading) * _0x5f48bd,
        z: _0x2cda34.z - Math.sin(_0x2cda34.heading) * _0x5f48bd,
        heading: _0x2cda34.heading + _0x5de2b0
      });
    }
  }
  return _0x3dcf5b;
}
export function segAt(_0x39c321, _0x1b7ea5) {
  for (let _0x56eb6f = _0x39c321.length - 1; _0x56eb6f >= 0; _0x56eb6f--) {
    if (_0x1b7ea5 >= _0x39c321[_0x56eb6f].s0) {
      return _0x39c321[_0x56eb6f];
    }
  }
  return _0x39c321[0];
}
export function polyAt(_0x53f0a9, _0x152bc0, _0x5b2c9b = {
  x: 0,
  z: 0
}) {
  const _0x41998d = segAt(_0x53f0a9, _0x152bc0);
  const _0x41b714 = _0x152bc0 - _0x41998d.s0;
  _0x5b2c9b.x = _0x41998d.x + Math.cos(_0x41998d.heading) * _0x41b714;
  _0x5b2c9b.z = _0x41998d.z - Math.sin(_0x41998d.heading) * _0x41b714;
  return _0x5b2c9b;
}
export function headingAt(_0x44f5c8, _0x5354c0) {
  return segAt(_0x44f5c8, _0x5354c0).heading;
}
export function yawAt(_0x4a0636, _0x2d8f1a, _0x43a4a7) {
  if (!(_0x43a4a7 > 0)) {
    return headingAt(_0x4a0636, _0x2d8f1a);
  }
  let _0x185d3d = _0x4a0636[0].heading;
  for (let _0x5b073c = 1; _0x5b073c < _0x4a0636.length && !(_0x2d8f1a <= _0x4a0636[_0x5b073c].s0 - _0x43a4a7); _0x5b073c++) {
    const _0x386215 = _0x4a0636[_0x5b073c].heading - _0x4a0636[_0x5b073c - 1].heading;
    const _0x42bdd6 = Math.min(1, Math.max(0, (_0x2d8f1a - (_0x4a0636[_0x5b073c].s0 - _0x43a4a7)) / (_0x43a4a7 * 2)));
    _0x185d3d += _0x386215 * _0x42bdd6 * _0x42bdd6 * (3 - _0x42bdd6 * 2);
  }
  return _0x185d3d;
}
export function bendSList(_0x47b505) {
  return cornerSList(_0x47b505).map(_0x15978f => _0x15978f + _0x47b505.path.chamferTiles / 2);
}
export function facetAtBends(_0x42a031, _0x65bf20) {
  let _0x434b85 = 0;
  while (_0x434b85 < _0x65bf20.length && _0x42a031 >= _0x65bf20[_0x434b85]) {
    _0x434b85++;
  }
  return _0x434b85;
}
export function worldFacetAt(_0x32a8b2, _0x1917e1, _0x2a79dc) {
  return facetAtBends(_0x32a8b2, _0x2a79dc);
}
export function activeWorldFacet(_0x8e0a4e, _0x261198, _0x44ea92) {
  return Math.min(_0x44ea92.path.faces, _0x261198);
}
export function routeRenderOwned(_0x55119e, _0x5e6e14, _0xca7390, _0x37ddc1, _0xf468b7, _0x336ad0) {
  return !!_0x5e6e14 && worldFacetAt(_0x55119e, _0xf468b7, _0x336ad0) === activeWorldFacet(_0xca7390, _0x37ddc1, _0xf468b7);
}
export function crossesBend(_0x509810, _0x38c8f5, _0x4dafcd) {
  const _0x5bb13c = Math.min(_0x38c8f5, _0x4dafcd);
  const _0x288526 = Math.max(_0x38c8f5, _0x4dafcd);
  for (const _0xbe75b7 of _0x509810) {
    if (_0xbe75b7 > _0x5bb13c && _0xbe75b7 <= _0x288526) {
      return true;
    }
  }
  return false;
}
export const CORNER_S = cornerSList(_0x2f9828);
export const BEND_S = bendSList(_0x2f9828);
export const SEGS = buildSegments(_0x2f9828);
export const HALT_S = CORNER_S.map(_0x29ebb1 => haltSFor(_0x29ebb1, _0x2f9828));