export const DEPTH_QUANTUM = 0.002;
function e(_0x38943c, _0xac0ce1 = 0, _0x11b0b8 = 1) {
  return Object.freeze({
    baseUnits: _0x38943c,
    strideUnits: _0xac0ce1,
    slots: _0x11b0b8
  });
}
export const PHYSICAL_DEPTH_LAYER = Object.freeze({
  LIMB_HULL_CASTING: e(0, 4, 3),
  FOREGROUND_PACK_INLAY: e(4),
  CONTACT_SHADOW: e(10),
  WASP_WING: e(-8)
});
export const COMPONENT_DEPTH_LAYER = Object.freeze({
  "trim-cap": e(4, 1, 7),
  "beam-brace": e(12, 1, 7),
  "ladder-rail": e(20, 1, 7),
  "pipe-conduit": e(28, 1, 7),
  "service-organ": e(36, 1, 7),
  "defense-state": e(44, 1, 7),
  "scuttle-damage": e(52, 1, 7),
  "near-silhouette": e(60, 1, 7),
  near: e(60, 1, 7),
  default: e(4, 1, 7)
});
export const RASTER_DEPTH_LAYER = Object.freeze({
  FLUSH_ROUTE_ARMOUR: Object.freeze({
    factor: -1,
    units: -1
  })
});
export function depthLayerSlot(_0x124aeb, _0x335db3) {
  const _0x32213e = Math.max(1, Math.trunc(_0x335db3) || 1);
  return ((Math.trunc(_0x124aeb) || 0) % _0x32213e + _0x32213e) % _0x32213e;
}
export function physicalDepthOffset(_0x2e0b42, _0xeacc54 = 0) {
  const _0x1a133a = depthLayerSlot(_0xeacc54, _0x2e0b42.slots);
  return (_0x2e0b42.baseUnits + _0x1a133a * _0x2e0b42.strideUnits) * 0.002;
}
export function componentDepthOffset(_0xb804f8, _0x49cbc6, _0x5345ab = 0) {
  return physicalDepthOffset(COMPONENT_DEPTH_LAYER[_0xb804f8] || COMPONENT_DEPTH_LAYER[_0x49cbc6 === "near" ? "near" : "default"], _0x5345ab);
}
export function applyRasterDepthLayer(_0x1586b3, _0x21ee6d) {
  _0x1586b3.polygonOffset = true;
  _0x1586b3.polygonOffsetFactor = _0x21ee6d.factor;
  _0x1586b3.polygonOffsetUnits = _0x21ee6d.units;
  _0x1586b3.userData = {
    ..._0x1586b3.userData,
    rasterDepthLayer: _0x21ee6d
  };
  return _0x1586b3;
}