import { CONFIG as _0x1c0b66 } from "../config.js";
import { CORNER_S as _0x6db105 } from "../pure/path.js";
import { buildLevel as _0x46d347, buildTraversalLevel as _0x2470af, levelSolidCell as _0x4b16f9 } from "../pure/generator.js";
import { buildTransformLevel as _0x125d28 } from "../pure/transform.js";
import { ACTIVE_FIXTURE as _0x3d1ef1, ACTIVE_SLICE as _0x407be9, IS_TRANSFORM_SLICE as _0x5dd839, IS_TRAVERSAL_SLICE as _0x269ca5, MOMENTUM_ENABLED as _0x5f3e8e } from "../mode.js";
import { view as _0x5dc762 } from "./bridge.js";
import { momentumScrollSpeed as _0x3f3d5b, paceSpeed as _0x14f4a1 } from "./pace.js";
export const LEVEL_LEN = _0x1c0b66.levelLength;
export const END_SCROLL = LEVEL_LEN - 30;
export function activeScrollEnd() {
  if (_0x3d1ef1) {
    return _0x3d1ef1.run.endScroll;
  } else {
    return END_SCROLL;
  }
}
export function activeScrollSpeed() {
  if (_0x407be9) {
    return _0x14f4a1();
  } else if (_0x5f3e8e) {
    return _0x3f3d5b();
  } else if (_0x3d1ef1) {
    return _0x3d1ef1.run.minimumScrollSpeed;
  } else {
    return _0x1c0b66.scrollSpeed;
  }
}
export const levelData = _0x269ca5 ? _0x2470af(_0x1c0b66, _0x407be9) : _0x5dd839 ? _0x125d28(_0x1c0b66) : _0x46d347(_0x1c0b66);
export const {
  groundH: groundH,
  platforms: platforms
} = levelData;
export const solidRects = levelData.solidRects || [];
export const ladders = levelData.ladders || [];
export const pockets = levelData.pockets || [];
export function isSolid(_0x30214a, _0x285475) {
  return _0x30214a < 0 || _0x30214a >= LEVEL_LEN || _0x4b16f9(levelData, _0x30214a, _0x285475, 8);
}
export function solidAt(_0x4e4eba, _0x336756) {
  return isSolid(Math.floor(_0x4e4eba), Math.floor(_0x336756));
}
export function groundTopAt(_0x411725) {
  const _0x497508 = groundH[Math.floor(_0x411725)];
  if (_0x497508 > -100) {
    return _0x497508;
  } else {
    return -999;
  }
}
export const slamSets = [];
export const farSets = [];
for (const E of _0x6db105) {
  const x = [];
  const S = [];
  const h = Math.min(E + _0x1c0b66.path.faceTiles - 1, LEVEL_LEN - 1);
  for (let v = E; v <= Math.min(E + _0x1c0b66.waves.zipCols - 1, LEVEL_LEN - 1); v++) {
    x.push(v);
  }
  for (let g = E + _0x1c0b66.waves.zipCols; g <= h; g++) {
    S.push(g);
  }
  slamSets.push(x);
  farSets.push(S);
}
const d = new Uint8Array(LEVEL_LEN).fill(1);
let L = 0;
export function columnHasGround(_0x261166) {
  return groundH[_0x261166] > -100;
}
export function columnBuilt(_0x4e4c8b) {
  return d[_0x4e4c8b] === 1;
}
export function levelBuildRevision() {
  return L;
}
export function settleColumn(_0x1f03e2) {
  if (d[_0x1f03e2] !== 1) {
    d[_0x1f03e2] = 1;
    L++;
  }
}
export function unbuildFutureFaces() {
  if (_0x5dd839) {
    return;
  }
  let _0x23d9c5 = false;
  for (const _0x5c5eac of [slamSets, farSets]) {
    for (const _0x49637f of _0x5c5eac) {
      for (const _0x4a61d7 of _0x49637f) {
        if (columnHasGround(_0x4a61d7) && d[_0x4a61d7] !== 0) {
          d[_0x4a61d7] = 0;
          _0x23d9c5 = true;
        }
      }
    }
  }
  if (_0x23d9c5) {
    L++;
  }
  _0x5dc762.level.unbuiltHidden();
}
export function builtSolidAt(_0x3c90ef, _0x20f7cb) {
  const _0x3dc413 = Math.floor(_0x3c90ef);
  return (!(_0x3dc413 >= 0) || !(_0x3dc413 < LEVEL_LEN) || !columnHasGround(_0x3dc413) || !!columnBuilt(_0x3dc413)) && isSolid(_0x3dc413, Math.floor(_0x20f7cb));
}
export function builtGroundTopAt(_0x27891f) {
  const _0x2b8ad4 = Math.floor(_0x27891f);
  if (_0x2b8ad4 >= 0 && _0x2b8ad4 < LEVEL_LEN && columnHasGround(_0x2b8ad4) && !columnBuilt(_0x2b8ad4)) {
    return -999;
  } else {
    return groundTopAt(_0x27891f);
  }
}
export function spawnLaneY(_0x369014, _0x53b58e, _0x32a6ac = 10) {
  const _0x2a2a79 = groundTopAt(_0x369014);
  return Math.min((_0x2a2a79 > -100 ? _0x2a2a79 : 3) + _0x53b58e, _0x32a6ac);
}