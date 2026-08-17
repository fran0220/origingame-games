import { CONFIG as _0x31a17c } from "../config.js";
import { BEND_S as _0x4e5eca, activeWorldFacet as _0x234b45, routeRenderOwned as _0x5e1695, worldFacetAt as _0xda87c9 } from "../pure/path.js";
import { ACTIVE_FIXTURE as _0xe62d11 } from "../mode.js";
import { LEVEL_LEN as _0x4a8514, columnBuilt as _0x3799ed, levelBuildRevision as _0xc979e1 } from "../sim/level.js";
import { scrollX as _0x22d1e4 } from "../sim/time.js";
import { cameraFacingFacet as _0x11dacc } from "./camera.js";
export function routeColumnBuilt(_0x42c0cd) {
  const _0x585ccc = Math.floor(_0x42c0cd);
  return _0x585ccc < 0 || _0x585ccc >= _0x4a8514 || _0x3799ed(_0x585ccc);
}
export function currentWorldFacet() {
  return _0x234b45(_0x22d1e4, _0x11dacc(), _0x31a17c);
}
export function routeWorldFacet(_0x34bf44) {
  return _0xda87c9(_0x34bf44, _0x31a17c, _0x4e5eca);
}
export function routeRenderable(_0x405420) {
  return _0xe62d11 !== null || _0x5e1695(_0x405420, routeColumnBuilt(_0x405420), _0x22d1e4, _0x11dacc(), _0x31a17c, _0x4e5eca);
}
export function routeVisibilityStamp() {
  if (_0xe62d11 !== null) {
    return "fixture";
  } else {
    return currentWorldFacet() + ":" + _0xc979e1();
  }
}