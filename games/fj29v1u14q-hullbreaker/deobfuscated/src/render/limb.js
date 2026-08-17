import * as _0x1ffdc1 from "three";
import { CONFIG as _0x1bbdb9 } from "../config.js";
import { normalAscentAltAt as _0x348488 } from "../pure/ascent.js";
import { BEND_S as _0x340bab, SEGS as _0x269c02, facetAtBends as _0x3138f5, headingAt as _0x585762, polyAt as _0x368357 } from "../pure/path.js";
import { limbBakePlan as _0x5c1160, limbFacetTone as _0x2dbc09, limbFoldBridgeVisible as _0x48c932 } from "../pure/limb.js";
import { limbShadePlan as _0xbb4678 } from "../pure/shade.js";
import { IS_G1 as _0x364ddf, QUERY as _0xc9c63b } from "../mode.js";
import { groundH as _0x3c155f } from "../sim/level.js";
import { scrollX as _0xbc059 } from "../sim/time.js";
import { HIDE as _0x222256, scene as _0x729ddb } from "./scene.js";
import { PAL as _0x4ac98d, SHADE_GAIN as _0x17686d } from "./palette.js";
import { applyHullTexture as _0x5b7a0e, applySurface as _0x11c38c, varyHullTexture as _0x3e8fd3 } from "./materials.js";
import { cameraFacingFacet as _0x168beb } from "./camera.js";
import { PHYSICAL_DEPTH_LAYER as _0x12a916, RASTER_DEPTH_LAYER as _0x1efaee, applyRasterDepthLayer as _0x525878, physicalDepthOffset as _0xde3c17 } from "./depth-layers.js";
const A = _0x4ac98d.limb;
const z = {
  hull: "wall",
  hullRib: "shadow",
  wall: "wall",
  wallSeam: "shadow",
  wallCap: "shadow",
  kerb: "rib",
  lipScute: "rib",
  scute: "scute",
  scuteRib: "scuteAlt",
  silhouette: "skyline",
  ridge: "shadow",
  collar: "wall",
  tendon: "shadow",
  buttress: "wall",
  cup: "hull",
  gill: "shadow",
  bodyRib: "hull",
  flankTendon: "machine",
  bdLimb: "wall",
  bdLimbLip: "shadow",
  bdRing: "skyline",
  bdDrum: "shadow",
  bdLink: "shadow",
  bdFar: "wall",
  bdSpire: "skyline",
  markRung: "shadow",
  markStile: "shadow",
  markRail: "shadow",
  markPost: "shadow",
  markRim: "machine",
  markPanel: "shadow"
};
const C = _0xc9c63b.get("limbs") !== "legacy";
const O = Object.freeze({
  hull: "body",
  wall: "scute",
  scute: "scute",
  lipScute: "scute",
  bdLimb: "scute",
  bdFar: "scute",
  scuteRib: "rib",
  bodyRib: "rib",
  ridge: "rib",
  tendon: "rib",
  bdDrum: "rib",
  flankTendon: "cable",
  markRim: "cable"
});
const F = Object.freeze({
  hull: "body",
  hullRib: "cable",
  wall: "scute",
  scute: "scute",
  lipScute: "scute",
  bdLimb: "body",
  bdLimbLip: "cable",
  bdRing: "rib",
  bdDrum: "rib",
  bdLink: "cable",
  bdFar: "body",
  bdSpire: "rib",
  scuteRib: "rib",
  bodyRib: "rib",
  ridge: "rib",
  collar: "rib",
  tendon: "rib",
  buttress: "body",
  cup: "rib",
  flankTendon: "cable",
  markRim: "cable"
});
const T = C ? F : O;
const B = new Set(["lipScute", "bdLimb", "bdLimbLip", "bdRing", "bdDrum", "bdLink", "bdFar", "bdSpire"]);
function D(_0x5c6394) {
  return C && (B.has(_0x5c6394.kind) || _0x5c6394.depth < 0 && _0x5c6394.kind.startsWith("mark"));
}
const P = {
  hull: "plate",
  wall: "distant",
  scute: "plate",
  scuteAlt: "plate",
  shadow: "distant",
  rib: "machine",
  machine: "machine",
  skyline: "distant"
};
const G = _0xc9c63b.get("scale") !== "0";
const Y = new Set(["hull", "hullRib", "wall", "gill", "bodyRib", "flankTendon", "kerb", "lipScute", "scute", "scuteRib", "ridge", "collar", "tendon", "buttress", "cup", "bdLimb", "bdLimbLip", "bdRing", "bdDrum", "bdLink", "bdFar", "bdSpire", "markRung", "markStile", "markRail", "markPost", "markRim", "markPanel"]);
const E = new Set(["kerb", "lipScute"]);
const I = [];
let V = -1;
let U = -1;
let H = 0;
export function updateLimbFoldCull() {
  if (!_0x364ddf || !I.length) {
    return;
  }
  const _0x4cd13b = _0x3138f5(_0xbc059, _0x340bab);
  const _0x57941b = _0x168beb();
  if (_0x4cd13b !== V || _0x57941b !== U) {
    V = _0x4cd13b;
    U = _0x57941b;
    H = 0;
    for (const _0x5486f9 of I) {
      for (const _0x169c30 of _0x5486f9.rows) {
        const _0x3d6fe7 = _0x169c30.piece;
        const _0x19880d = Y.has(_0x3d6fe7.kind);
        const _0x55bd5e = _0x4cd13b === _0x1bbdb9.path.faces;
        const _0x17c8ad = _0x19880d && (_0x55bd5e ? _0x3d6fe7.facet !== _0x4cd13b : Math.abs(_0x3d6fe7.facet - _0x4cd13b) > 1);
        const _0x5def4d = E.has(_0x3d6fe7.kind) && _0x48c932(_0x3d6fe7, _0x57941b, _0x340bab, _0x1bbdb9.path.chamferTiles);
        const _0x35fa9a = _0x19880d && _0x3d6fe7.facet !== _0x57941b && !_0x5def4d;
        const _0x5d4de0 = _0x17c8ad || _0x35fa9a;
        _0x5486f9.mesh.setMatrixAt(_0x169c30.instance, _0x5d4de0 ? _0x222256 : re(_0x3d6fe7));
        if (_0x5d4de0) {
          H++;
        }
      }
      _0x5486f9.mesh.instanceMatrix.needsUpdate = true;
    }
  }
}
export function limbFoldCullSnapshot() {
  return {
    facet: V,
    cameraFacet: U,
    hidden: H,
    pools: I.length
  };
}
const Z = new _0x1ffdc1.Matrix4();
const _ = new _0x1ffdc1.Quaternion();
const W = new _0x1ffdc1.Euler();
const X = new _0x1ffdc1.Vector3();
const $ = new _0x1ffdc1.Vector3();
const K = new _0x1ffdc1.Color();
const N = new _0x1ffdc1.Color();
const Q = Object.freeze([Object.freeze([[-0.52, 0.43], [-0.31, 0.5], [0.16, 0.46], [0.44, 0.5], [0.52, 0.28], [0.46, -0.18], [0.29, -0.42], [0.08, -0.5], [-0.09, -0.29], [-0.38, -0.48], [-0.52, -0.18]]), Object.freeze([[-0.5, 0.31], [-0.42, 0.5], [-0.02, 0.45], [0.28, 0.5], [0.51, 0.34], [0.48, -0.09], [0.34, -0.48], [0.03, -0.39], [-0.18, -0.5], [-0.31, -0.27], [-0.5, -0.42]]), Object.freeze([[-0.51, 0.38], [-0.3, 0.49], [0.02, 0.42], [0.4, 0.5], [0.52, 0.23], [0.43, -0.32], [0.23, -0.5], [-0.02, -0.31], [-0.25, -0.48], [-0.47, -0.34]])]);
function q(_0x1bfa82) {
  const _0x3d1957 = Q[_0x1bfa82 % Q.length];
  const _0x488a23 = new _0x1ffdc1.Shape();
  _0x488a23.moveTo(_0x3d1957[0][0], _0x3d1957[0][1]);
  for (let _0xe27384 = 1; _0xe27384 < _0x3d1957.length; _0xe27384++) {
    _0x488a23.lineTo(_0x3d1957[_0xe27384][0], _0x3d1957[_0xe27384][1]);
  }
  _0x488a23.closePath();
  const _0x422603 = new _0x1ffdc1.ExtrudeGeometry(_0x488a23, {
    depth: 1,
    steps: 1,
    curveSegments: 1,
    bevelEnabled: true,
    bevelSegments: 1,
    bevelSize: 0.035,
    bevelThickness: 0.045
  });
  _0x422603.translate(0, 0, -0.5);
  const _0x19fbe7 = _0x422603.getAttribute("normal");
  const _0x5a01e4 = _0x422603.getAttribute("position");
  const _0x19a475 = new Float32Array(_0x19fbe7.count * 3);
  for (let _0x39f450 = 0; _0x39f450 < _0x19fbe7.count; _0x39f450++) {
    const _0x4c48ea = _0x19fbe7.getZ(_0x39f450);
    const _0x4fb835 = _0x19fbe7.getY(_0x39f450);
    const _0x2fdfa3 = _0x5a01e4.getX(_0x39f450);
    const _0x497b19 = _0x5a01e4.getY(_0x39f450);
    const _0x48211b = Math.max(0, Math.min(1, (_0x497b19 + 0.46) / 0.92));
    const _0x2ceaad = _0x4c48ea > 0.72 ? (0.7 + _0x48211b * 0.3) * (_0x2fdfa3 < -0.12 ? 0.93 : 1) : _0x4c48ea < -0.72 ? 0.2 : _0x4fb835 > 0.42 ? 0.68 : 0.38;
    _0x19a475[_0x39f450 * 3] = _0x19a475[_0x39f450 * 3 + 1] = _0x19a475[_0x39f450 * 3 + 2] = _0x2ceaad;
  }
  _0x422603.setAttribute("color", new _0x1ffdc1.BufferAttribute(_0x19a475, 3));
  _0x422603.computeBoundingSphere();
  return _0x422603;
}
function J(_0x5147be, _0x3f4a32, _0x5454ee, _0x58cd1f = false) {
  const _0x3da05d = new _0x1ffdc1.Shape();
  _0x3da05d.moveTo(_0x5147be[0][0], _0x5147be[0][1]);
  for (let _0xfed31e = 1; _0xfed31e < _0x5147be.length; _0xfed31e++) {
    _0x3da05d.lineTo(_0x5147be[_0xfed31e][0], _0x5147be[_0xfed31e][1]);
  }
  _0x3da05d.closePath();
  const _0x2010aa = new _0x1ffdc1.ExtrudeGeometry(_0x3da05d, {
    depth: 1,
    steps: 1,
    curveSegments: 1,
    bevelEnabled: true,
    bevelSegments: 1,
    bevelSize: _0x3f4a32,
    bevelThickness: _0x5454ee
  });
  _0x2010aa.translate(0, 0, -0.5);
  const _0x41925a = _0x2010aa.getAttribute("normal");
  const _0xbbd726 = _0x2010aa.getAttribute("position");
  const _0x493ab7 = new Float32Array(_0x41925a.count * 3);
  for (let _0x1dab54 = 0; _0x1dab54 < _0x41925a.count; _0x1dab54++) {
    const _0x5aa19a = _0x41925a.getZ(_0x1dab54);
    const _0x2029ee = _0x41925a.getY(_0x1dab54);
    const _0x10aef3 = _0xbbd726.getX(_0x1dab54);
    const _0x39a88d = _0xbbd726.getY(_0x1dab54);
    let _0x32792c = _0x5aa19a > 0.72 ? _0x10aef3 < -0.05 ? 0.9 : 1 : _0x5aa19a < -0.72 ? 0.2 : _0x2029ee > 0.42 ? 0.7 : 0.42;
    if (_0x58cd1f) {
      _0x32792c *= 0.48 + Math.max(0, Math.min(1, (_0x39a88d + 0.72) / 0.78)) * 0.52;
    }
    _0x493ab7[_0x1dab54 * 3] = _0x493ab7[_0x1dab54 * 3 + 1] = _0x493ab7[_0x1dab54 * 3 + 2] = _0x32792c;
  }
  _0x2010aa.setAttribute("color", new _0x1ffdc1.BufferAttribute(_0x493ab7, 3));
  _0x2010aa.computeVertexNormals();
  _0x2010aa.computeBoundingSphere();
  return _0x2010aa;
}
const ee = Object.freeze([Object.freeze([[-0.58, 0.28], [-0.54, 0.49], [-0.2, 0.54], [0.08, 0.49], [0.5, 0.54], [0.58, 0.29], [0.57, -0.3], [0.48, -0.52], [0.24, -0.59], [0.08, -0.76], [-0.12, -0.62], [-0.34, -0.82], [-0.55, -0.48], [-0.58, -0.28]]), Object.freeze([[-0.59, 0.24], [-0.53, 0.5], [-0.12, 0.55], [0.14, 0.47], [0.49, 0.53], [0.59, 0.25], [0.56, -0.36], [0.42, -0.66], [0.18, -0.56], [-0.02, -0.84], [-0.24, -0.66], [-0.45, -0.72], [-0.57, -0.43]]), Object.freeze([[-0.58, 0.3], [-0.55, 0.48], [-0.3, 0.55], [0.05, 0.48], [0.45, 0.54], [0.59, 0.3], [0.55, -0.42], [0.35, -0.75], [0.11, -0.64], [-0.1, -0.78], [-0.31, -0.57], [-0.52, -0.73], [-0.58, -0.31]])]);
const te = Object.freeze([[-0.55, 0.14], [-0.47, 0.43], [-0.2, 0.52], [0.06, 0.45], [0.34, 0.52], [0.54, 0.28], [0.49, -0.1], [0.31, -0.46], [0.02, -0.52], [-0.18, -0.43], [-0.45, -0.5], [-0.56, -0.2]]);
function re(_0x5e3368, _0x4792f2 = 0) {
  const _0xe1dcd5 = _0x368357(_0x269c02, _0x5e3368.s);
  const _0x36efdd = _0x585762(_0x269c02, _0x5e3368.s);
  _.setFromEuler(W.set(0, _0x36efdd, _0x5e3368.roll || 0, "YZX"));
  X.set(_0x5e3368.w, _0x5e3368.h, _0x5e3368.d);
  $.set(_0xe1dcd5.x + Math.sin(_0x36efdd) * (_0x5e3368.depth + _0x4792f2), _0x5e3368.y + _0x348488(_0x5e3368.s, _0x1bbdb9.levelLength), _0xe1dcd5.z + Math.cos(_0x36efdd) * (_0x5e3368.depth + _0x4792f2));
  return Z.compose($, _, X);
}
export const limbPieces = _0x364ddf ? function () {
  _0x729ddb.background = new _0x1ffdc1.Color(_0x4ac98d.limbBg);
  _0x729ddb.fog.color.setHex(_0x4ac98d.limbBg);
  const _0x39be9b = _0x5c1160(_0x1bbdb9, _0x3c155f, {
    scale: G
  });
  const _0x4e9c2b = _0xbb4678(_0x39be9b, _0x1bbdb9, _0x17686d);
  const _0x431c1b = new Map();
  const _0x1119fe = Object.freeze(["wall", "scute", "wall", "wall", "scute"]);
  const _0x274945 = Object.freeze({
    scuteRib: "shadow",
    bodyRib: "shadow",
    flankTendon: "shadow"
  });
  for (let _0x4af6da = 0; _0x4af6da < _0x39be9b.length; _0x4af6da++) {
    if (D(_0x39be9b[_0x4af6da])) {
      continue;
    }
    const _0x963e1f = _0x39be9b[_0x4af6da];
    const _0x3315d4 = Math.abs(Math.floor(_0x963e1f.s / _0x1bbdb9.limb.scute.every) + _0x963e1f.facet * 2) % _0x1119fe.length;
    const _0x7f4315 = C && _0x963e1f.kind === "scute" ? _0x1119fe[_0x3315d4] : C && _0x274945[_0x963e1f.kind] ? _0x274945[_0x963e1f.kind] : z[_0x963e1f.kind] || "hull";
    const _0x3bf306 = _0x7f4315 === "hull" || _0x7f4315 === "wall" || _0x7f4315 === "scute";
    const _0x1c7d30 = _0x963e1f.kind === "scute" ? 5 : 3;
    const _0x5aa54a = _0x3bf306 ? Math.abs(Math.floor(_0x963e1f.s / _0x1bbdb9.limb.scute.every) + _0x963e1f.facet * 2) % _0x1c7d30 : 0;
    const _0x158339 = _0x963e1f.kind === "scute" ? "armor" + _0x5aa54a % Q.length : C ? T[_0x963e1f.kind] || _0x963e1f.shape || "box" : _0x963e1f.shape || T[_0x963e1f.kind] || "box";
    const _0x1c4c7c = C && _0x158339 === "body" ? "body" + _0x5aa54a % ee.length : _0x158339;
    const _0x5d6d53 = _0x7f4315 + "/" + _0x1c4c7c + "/" + _0x5aa54a;
    if (!_0x431c1b.has(_0x5d6d53)) {
      _0x431c1b.set(_0x5d6d53, {
        materialKey: _0x7f4315,
        shape: _0x1c4c7c,
        textureVariant: _0x5aa54a,
        indices: []
      });
    }
    _0x431c1b.get(_0x5d6d53).indices.push(_0x4af6da);
  }
  const _0x177b69 = {
    box: new _0x1ffdc1.BoxGeometry(1, 1, 1),
    body: new _0x1ffdc1.CylinderGeometry(0.57, 0.51, 1, 6, 1, false),
    body0: J(ee[0], 0.022, 0.035, true),
    body1: J(ee[1], 0.022, 0.035, true),
    body2: J(ee[2], 0.022, 0.035, true),
    scute: C ? J(te, 0.03, 0.042) : new _0x1ffdc1.CylinderGeometry(0.58, 0.42, 1, 4, 1, false),
    armor0: q(0),
    armor1: q(1),
    armor2: q(2),
    rib: new _0x1ffdc1.CylinderGeometry(0.5, 0.5, 1, 6, 1, false),
    cable: new _0x1ffdc1.CylinderGeometry(0.5, 0.5, 1, 6, 1, false)
  };
  if (!C) {
    _0x177b69.scute.rotateY(Math.PI / 4);
    _0x177b69.body.rotateY(Math.PI / 6);
  }
  _0x177b69.rib.rotateY(Math.PI / 6);
  _0x177b69.cable.rotateZ(Math.PI / 2);
  for (const {
    materialKey: _0x5730f2,
    shape: _0x3d2d9a,
    textureVariant: _0x662028,
    indices: _0x4bb97c
  } of _0x431c1b.values()) {
    const _0x202884 = _0x3d2d9a.startsWith("armor") || C && (_0x3d2d9a.startsWith("body") || _0x3d2d9a === "scute");
    const _0x2448ce = new _0x1ffdc1.MeshStandardMaterial({
      color: 16777215,
      flatShading: true,
      vertexColors: _0x202884
    });
    _0x11c38c(_0x2448ce, P[_0x5730f2] || "plate");
    _0x5b7a0e(_0x2448ce, _0x5730f2);
    _0x3e8fd3(_0x2448ce, _0x662028);
    if (_0x3d2d9a === "scute") {
      _0x525878(_0x2448ce, _0x1efaee.FLUSH_ROUTE_ARMOUR);
    }
    const _0x15848d = new _0x1ffdc1.InstancedMesh(_0x177b69[_0x3d2d9a], _0x2448ce, _0x4bb97c.length);
    _0x15848d.name = "Meridian limb " + _0x5730f2 + "/" + _0x3d2d9a + "/v" + _0x662028;
    _0x15848d.userData.environmentRole = "limb-anatomy";
    _0x15848d.userData.limbBucket = _0x5730f2;
    _0x15848d.userData.limbShape = _0x3d2d9a;
    _0x15848d.userData.textureVariant = _0x662028;
    _0x15848d.userData.limbSilhouette = C ? "production" : "legacy";
    _0x15848d.frustumCulled = false;
    for (let _0xe5b993 = 0; _0xe5b993 < _0x4bb97c.length; _0xe5b993++) {
      const _0x35ba6d = _0x39be9b[_0x4bb97c[_0xe5b993]];
      const _0x3aa2e3 = _0x35ba6d.kind === "hull" ? _0xde3c17(_0x12a916.LIMB_HULL_CASTING, _0x35ba6d.surfaceDepthOrdinal) : 0;
      _0x15848d.setMatrixAt(_0xe5b993, re(_0x35ba6d, _0x3aa2e3));
      const _0x5da064 = _0x2dbc09(_0x35ba6d.facet, _0x1bbdb9);
      const _0x2c9517 = _0x4e9c2b[_0x4bb97c[_0xe5b993]];
      K.setHex(A[_0x5730f2]);
      _0x15848d.setColorAt(_0xe5b993, N.setRGB(Math.min(1, K.r * _0x5da064[0] * _0x2c9517), Math.min(1, K.g * _0x5da064[1] * _0x2c9517), Math.min(1, K.b * _0x5da064[2] * _0x2c9517)));
    }
    I.push({
      mesh: _0x15848d,
      rows: _0x4bb97c.map((_0x776613, _0x1bc70a) => ({
        instance: _0x1bc70a,
        piece: _0x39be9b[_0x776613]
      }))
    });
    _0x15848d.onBeforeRender = updateLimbFoldCull;
    _0x729ddb.add(_0x15848d);
  }
  updateLimbFoldCull();
  return _0x39be9b.length;
}() : 0;