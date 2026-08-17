import { CONFIG as _0x38e635 } from "../config.js";
import { normalAscentAltAt as _0x142126 } from "../pure/ascent.js";
import { SEGS as _0x62791c, polyAt as _0x1f52c0, yawAt as _0x19e5d0 } from "../pure/path.js";
import { TRANSFORM_PATH as _0x5e93de, transformPathAt as _0x1e9751, transformYawAt as _0x279b1f } from "../pure/transform.js";
import { ACTIVE_FIXTURE as _0x20aff0, IS_TRANSFORM_SLICE as _0x32dc91 } from "../mode.js";
export function towerPose(_0xa4bfd6, _0x43dd5a = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
}) {
  if (_0x32dc91) {
    _0x1e9751(_0x5e93de, _0xa4bfd6, _0x43dd5a);
    _0x43dd5a.yaw = _0x279b1f(_0x5e93de, _0xa4bfd6, _0x38e635.path.yawBlendTiles);
    return _0x43dd5a;
  } else {
    _0x1f52c0(_0x62791c, _0xa4bfd6, _0x43dd5a);
    _0x43dd5a.yaw = _0x19e5d0(_0x62791c, _0xa4bfd6, _0x38e635.path.yawBlendTiles);
    _0x43dd5a.alt = _0x20aff0 ? 0 : _0x142126(_0xa4bfd6, _0x38e635.levelLength);
    return _0x43dd5a;
  }
}
const y = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
};
export function placeOnTower(_0x55d759, _0x23a789, _0x2e27ce, _0x5b2f78) {
  const _0x224ff4 = towerPose(_0x23a789, y);
  _0x55d759.position.set(_0x224ff4.x + Math.sin(_0x224ff4.yaw) * _0x5b2f78, _0x2e27ce + _0x224ff4.alt, _0x224ff4.z + Math.cos(_0x224ff4.yaw) * _0x5b2f78);
  _0x55d759.rotation.y = _0x224ff4.yaw;
  return _0x224ff4.yaw;
}
export function placeSharp(_0x2f9210, _0x5aa1e7, _0x44f5d6, _0x1f3444) {
  const _0x372550 = towerPose(_0x5aa1e7, y);
  const _0x36c3e5 = _0x32dc91 ? _0x279b1f(_0x5e93de, _0x5aa1e7, 0) : _0x372550.yaw;
  _0x2f9210.position.set(_0x372550.x + Math.sin(_0x36c3e5) * _0x1f3444, _0x44f5d6 + _0x372550.alt, _0x372550.z + Math.cos(_0x36c3e5) * _0x1f3444);
  _0x2f9210.rotation.y = _0x36c3e5;
  return _0x36c3e5;
}