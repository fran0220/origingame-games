import { DEG as _0x1fd018 } from "../pure/path.js";
export function faceMidS(_0x48c61f, _0x1a7467) {
  const _0x1209d5 = _0x1a7467.path;
  return _0x1209d5.introTiles + _0x1209d5.faceTiles * (_0x48c61f - 1) + _0x1209d5.faceTiles / 2;
}
export function viewDist(_0x4cb4d3, _0x14f56c, _0x56d0b2) {
  return _0x56d0b2.camera.z * _0x14f56c + Math.abs(_0x4cb4d3);
}
export function minYBottom(_0x2f34e5, _0xac267, _0x1b69ac) {
  const _0x997e5d = (_0x1b69ac.limb.playBand.y1 - _0x1b69ac.camera.y) / (_0x1b69ac.camera.z * _0xac267);
  return _0x1b69ac.camera.y + _0x997e5d * viewDist(_0x2f34e5, _0xac267, _0x1b69ac);
}
export function fogFraction(_0x567c96, _0x2aa74e, _0x2e43b1, _0x4b9d72, _0x9c99c0) {
  const _0xbe264e = _0x9c99c0.camera.z * _0x2aa74e - _0x9c99c0.camera.z;
  return (viewDist(_0x567c96, _0x2aa74e, _0x9c99c0) - (_0x2e43b1 + _0xbe264e)) / (_0x4b9d72 - _0x2e43b1);
}
export function plateSize(_0x589067, _0x3917ed, _0x44e9f8) {
  const _0x4128d4 = _0x44e9f8.viewScales.far.depthMult;
  const _0x57ff85 = viewDist(_0x589067.depth, _0x4128d4, _0x44e9f8);
  const _0x415dd4 = _0x57ff85 * Math.tan(_0x44e9f8.camera.fov / 2 * _0x1fd018);
  const _0x3a4d0b = _0x589067.frameFraction * 2 * _0x415dd4;
  return {
    w: _0x3a4d0b * (_0x3917ed.canvas[0] / _0x3917ed.canvas[1]),
    h: _0x3a4d0b,
    cy: _0x589067.yBottom + _0x3a4d0b / 2 + (_0x3917ed.yLift || 0),
    dist: _0x57ff85
  };
}
export function resolveBackdropOn(_0x3979b6, _0x147948) {
  return !_0x147948 && _0x3979b6 !== "flat";
}