import { gameMs as _0x5c0c05 } from "../../sim/time.js";
import { freezeEnemyEcologyBreakup as _0x4d3709, syncEnemyEcologyVisual as _0x29a17c } from "../enemy-ecology.js";
export const ECOLOGY_PRESENTER = Object.freeze({
  id: "ecology",
  matches: _0x35aa95 => !!_0x35aa95.ecology,
  spawn: (_0x29f29b, _0x5f1050) => _0x29f29b.spawnEcology(_0x5f1050),
  syncPose: (_0x686075, _0x19a7f4, _0xbead47) => _0x29a17c(_0x19a7f4, _0xbead47, _0x5c0c05),
  ownsSilhouette: () => true,
  usesLegacyPose: () => false,
  syncMaterial: (_0x128efe, _0xdadd52, _0x3c8074) => _0x128efe.syncEcologyMaterial(_0xdadd52, _0x3c8074),
  syncTransform: (_0x9a85c7, _0x35535c, _0x151b5f, _0x3ea051) => _0x9a85c7.syncEcologyTransform(_0x35535c, _0x151b5f, _0x3ea051),
  prepareRemoval: (_0x1adf21, _0xf5144f, _0x593f39, _0x238262) => {
    if (_0x238262) {
      _0x4d3709(_0xf5144f);
    }
    return [];
  }
});