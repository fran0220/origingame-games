export const PRIMITIVE_PRESENTER = Object.freeze({
  id: "primitive",
  matches: () => true,
  spawn: (_0x79c21a, _0x13f8be) => _0x79c21a.spawnStandard(_0x13f8be),
  syncPose: () => {},
  ownsSilhouette: () => false,
  usesLegacyPose: () => true,
  syncMaterial: (_0x58fcf1, _0x2fbaf9, _0x306437) => _0x58fcf1.syncPaintedMaterial(_0x2fbaf9, _0x306437),
  syncTransform: (_0x5e9d03, _0x32d8da, _0x55fd03, _0x421221) => _0x5e9d03.syncPrimitiveTransform(_0x32d8da, _0x55fd03, _0x421221),
  prepareRemoval: () => []
});