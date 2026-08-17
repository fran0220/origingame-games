import * as _0x41683a from "three";
import { CONFIG as _0xd1370f } from "../config.js";
import { normalAscentAltAt as _0x3b04b3 } from "../pure/ascent.js";
import { DEG as _0x5d28d6, SEGS as _0x647e30, polyAt as _0x1c3fe3 } from "../pure/path.js";
import { cornerYawDeltaDeg as _0x420dfa } from "../pure/waves.js";
import { portraitViewDepthMult as _0x534b22, traversalCameraDepth as _0x52a59a } from "../pure/traversal.js";
import { TRANSFORM_FIXTURE as _0x5b176e, TRANSFORM_PATH as _0x5055eb, transformAltAt as _0x5a15bd, transformBandHeading as _0x32157c, transformYawDeltaDeg as _0x3f9e00 } from "../pure/transform.js";
import { ACTIVE_FIXTURE as _0x17a8d7, IS_G1 as _0x4be8a0, IS_TRANSFORM_SLICE as _0x4e06b3, JUICE_ENABLED as _0x2f237d, VIEW_ID as _0x213538 } from "../mode.js";
import { shakeAt as _0x103b7f, traumaAdd as _0x6af9c9, traumaAfter as _0x42cfbe } from "../pure/juice.js";
import { installView as _0x60aadd } from "../sim/bridge.js";
import { gameMs as _0x37cc4a, scrollX as _0x29e0d6 } from "../sim/time.js";
import { setEdges as _0x25db2f } from "../sim/edges.js";
import { activeCorner as _0x12b30f } from "../sim/wavegate.js";
import { activeTransformEvent as _0x2f6faa, committedBand as _0x1304c5 } from "../sim/transform.js";
import { renderer as _0x28de9e, scene as _0xef1bdd, camera as _0x471681 } from "./scene.js";
import { updateLightRig as _0x406348 } from "./lights.js";
import { towerPose as _0x256b95 } from "./tower.js";
const P = {
  x: 0,
  z: 0
};
const N = new _0x41683a.Vector3();
const V = new _0x41683a.PerspectiveCamera(_0xd1370f.camera.fov, 1, 0.1, 200);
function L(_0x6bbb46) {
  N.set(_0x6bbb46, 0, 0.5).unproject(V).sub(V.position).normalize();
  return V.position.x + N.x * (-V.position.z / N.z);
}
const T = Object.freeze({
  startAspect: 0.9,
  fullAspect: 0.56,
  compactViewDepthMult: 1.15,
  maxInsetPx: 46,
  lookDropTiles: 1.55
});
function Y(_0xaf56a7, _0x33711f) {
  const _0x5a54c3 = (Number.isFinite(_0xaf56a7) && _0xaf56a7 > 0 ? _0xaf56a7 : 1) / (Number.isFinite(_0x33711f) && _0x33711f > 0 ? _0x33711f : 1);
  if (_0x5a54c3 >= T.startAspect) {
    return 0;
  } else {
    return Math.min(1, Math.max(0, (T.startAspect - _0x5a54c3) / (T.startAspect - T.fullAspect)));
  }
}
export function portraitRightNdc(_0x466c49, _0x4a6931) {
  const _0x536826 = Number.isFinite(_0x466c49) && _0x466c49 > 0 ? _0x466c49 : 1;
  const _0x2d5c6a = Y(_0x466c49, _0x4a6931);
  return 1 - Math.min(_0x536826 * 0.18, T.maxInsetPx * _0x2d5c6a) * 2 / _0x536826;
}
export function portraitLookDrop(_0x41611d, _0x38c2b8) {
  return T.lookDropTiles * Y(_0x41611d, _0x38c2b8);
}
function R() {
  if (_0x17a8d7) {
    return 0;
  } else {
    return portraitLookDrop(innerWidth, innerHeight);
  }
}
export function activeCameraDepth() {
  const _0x509553 = _0x17a8d7 ? _0x17a8d7.run : _0xd1370f.camera;
  return _0x52a59a(_0xd1370f.camera.z, innerWidth / innerHeight, _0x509553) * function () {
    const _0xfdcb1b = (_0xd1370f.viewScales[_0x213538] || _0xd1370f.viewScales.far).depthMult;
    if (_0x17a8d7) {
      return _0xfdcb1b;
    } else {
      return _0x534b22(_0xfdcb1b, innerWidth / innerHeight, {
        startAspect: T.startAspect,
        fullAspect: T.fullAspect,
        compactMult: T.compactViewDepthMult
      });
    }
  }();
}
function I() {
  const _0x54d0c3 = _0xd1370f.camera;
  const _0x112c65 = activeCameraDepth();
  V.fov = _0x54d0c3.fov;
  V.aspect = innerWidth / innerHeight;
  V.position.set(_0x54d0c3.x, _0x54d0c3.y, _0x112c65);
  V.lookAt(_0x54d0c3.lookX, _0x54d0c3.lookY - R(), 0);
  V.updateProjectionMatrix();
  V.updateMatrixWorld(true);
  const _0x96ff0b = _0x17a8d7 ? 1 : portraitRightNdc(innerWidth, innerHeight);
  _0x25db2f(L(-_0x96ff0b), L(_0x96ff0b));
  if (_0x4e06b3) {
    return;
  }
  const _0x3e0d55 = _0x112c65 - _0x54d0c3.z;
  const _0x46ff04 = _0x4be8a0 ? _0xd1370f.limb.fog : _0xd1370f.fog;
  _0xef1bdd.fog.near = _0x46ff04.near + _0x3e0d55;
  _0xef1bdd.fog.far = _0x46ff04.far + _0x3e0d55;
}
export { I as calibrateEdges };
export function handleResize() {
  _0x471681.aspect = innerWidth / innerHeight;
  _0x471681.updateProjectionMatrix();
  _0x28de9e.setSize(innerWidth, innerHeight);
  I();
}
let B = 0;
let G = 0;
const O = new _0x41683a.Vector3();
const Z = 0.96;
export function cameraFacingFacet() {
  const _0x9ed580 = _0xd1370f.path.turnDeg * 2 * _0x5d28d6 * _0xd1370f.path.turnSign;
  if (Math.abs(_0x9ed580) < 0.000001) {
    return 0;
  }
  const _0x1cc0eb = Math.round(G / _0x9ed580);
  const _0x18ada1 = Math.max(0, Math.min(1, (B - G) / _0x9ed580));
  return Math.max(0, Math.min(_0xd1370f.path.faces, _0x1cc0eb + (_0x18ada1 >= Z ? 1 : 0)));
}
export function cameraFoldSnapshot() {
  const _0x4faf57 = _0xd1370f.path.turnDeg * 2 * _0x5d28d6 * _0xd1370f.path.turnSign;
  const _0x5ad90f = Math.abs(_0x4faf57) >= 0.000001;
  const _0x32961 = _0x5ad90f ? Math.round(G / _0x4faf57) : 0;
  return {
    yaw: B,
    baseFacet: _0x32961,
    facingFacet: cameraFacingFacet(),
    progress: _0x5ad90f ? Math.max(0, Math.min(1, (B - G) / _0x4faf57)) : 0,
    handoffProgress: Z
  };
}
function q(_0x353f8a, _0x4c4190, _0x59cfdf) {
  const _0x5295d0 = Math.max(0, Math.min(1, (_0x59cfdf - _0x353f8a) / (_0x4c4190 - _0x353f8a)));
  return _0x5295d0 * _0x5295d0 * (3 - _0x5295d0 * 2);
}
export function cameraFaceBlendGain(_0x5df660) {
  const _0x3a4d0b = cameraFoldSnapshot();
  const _0x204a92 = _0x3a4d0b.baseFacet + 1;
  const _0x3606d3 = _0x204a92 + 1;
  if (_0x5df660 === _0x204a92) {
    return 1 - q(0.5, Z, _0x3a4d0b.progress);
  } else if (_0x5df660 === _0x3606d3) {
    return q(0.08, 0.88, _0x3a4d0b.progress);
  } else {
    return 0;
  }
}
const E = _0xd1370f.juice.shake;
let J = 0;
let K = 0;
const Q = {
  x: 0,
  y: 0,
  roll: 0
};
export function addTrauma(_0x8fb36d) {
  if (_0x2f237d && _0x8fb36d > 0) {
    J = _0x6af9c9(J, _0x8fb36d);
  }
}
export function cameraTrauma() {
  return J;
}
const U = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
};
export function syncCamera() {
  const _0x431624 = _0xd1370f.camera;
  const _0x4d1da4 = activeCameraDepth();
  let _0x18c094;
  let _0x18c9b7;
  let _0x5512df = 0;
  let _0x2bcac0 = 0;
  let _0x5ea81b = 0;
  if (_0x4e06b3) {
    const _0x33c0e5 = _0x256b95(_0x29e0d6, U);
    _0x18c094 = _0x33c0e5.x;
    _0x18c9b7 = _0x33c0e5.z;
    _0x5512df = _0x33c0e5.alt;
    const _0x1fb60c = _0x2f6faa();
    const _0x4c2177 = _0x32157c(_0x5b176e, _0x1304c5, _0xd1370f);
    B = _0x1fb60c && _0x1fb60c.state === "turning" ? _0x4c2177 + _0x3f9e00(_0x37cc4a - _0x1fb60c.tStart, _0xd1370f) * _0x5d28d6 : _0x4c2177;
    _0x2bcac0 = _0x5a15bd(_0x5055eb, _0x29e0d6 + _0x431624.lookX);
    _0x5ea81b = (_0x2bcac0 - _0x5512df) / _0x431624.lookX;
  } else {
    const _0x2e3ae0 = _0x12b30f();
    B = _0x2e3ae0 && _0x2e3ae0.state === "turning" ? G + _0x420dfa(_0x37cc4a - _0x2e3ae0.tStart, _0xd1370f) * _0x5d28d6 * _0xd1370f.path.turnSign : G;
    const _0x3b554c = _0x1c3fe3(_0x647e30, _0x29e0d6, P);
    _0x18c094 = _0x3b554c.x;
    _0x18c9b7 = _0x3b554c.z;
    if (!_0x17a8d7) {
      _0x5512df = _0x3b04b3(_0x29e0d6, _0xd1370f.levelLength);
      _0x2bcac0 = _0x3b04b3(_0x29e0d6 + _0x431624.lookX, _0xd1370f.levelLength);
      _0x5ea81b = (_0x2bcac0 - _0x5512df) / _0x431624.lookX;
    }
  }
  const _0x22e136 = Math.cos(B);
  const _0x3a16d2 = -Math.sin(B);
  const _0x41f782 = -_0x3a16d2;
  const _0x4f9854 = _0x22e136;
  _0x471681.position.set(_0x18c094 + _0x22e136 * _0x431624.x + _0x41f782 * _0x4d1da4, _0x431624.y + _0x5512df + _0x5ea81b * _0x431624.x, _0x18c9b7 + _0x3a16d2 * _0x431624.x + _0x4f9854 * _0x4d1da4);
  O.set(_0x18c094 + _0x22e136 * _0x431624.lookX, _0x431624.lookY + _0x2bcac0 - R(), _0x18c9b7 + _0x3a16d2 * _0x431624.lookX);
  _0x471681.lookAt(O);
  _0x406348(O.x, O.y, O.z, B);
  if (_0x2f237d) {
    (function () {
      const _0x50cc3d = Math.max(0, Math.min(50, _0x37cc4a - K));
      K = _0x37cc4a;
      if (J <= 0) {
        return;
      }
      J = _0x42cfbe(J, _0x50cc3d, E.decayPerSec);
      _0x103b7f(J, _0x37cc4a, E, Q);
      _0x471681.translateX(Q.x);
      _0x471681.translateY(Q.y);
      _0x471681.rotateZ(Q.roll * _0x5d28d6);
    })();
  }
  _0x471681.updateMatrixWorld();
}
function $() {
  G += _0xd1370f.path.turnDeg * 2 * _0x5d28d6 * _0xd1370f.path.turnSign;
  B = G;
}
let _ = false;
export function initCameraView() {
  return !_ && (_0x60aadd({
    corner: {
      finished: $
    }
  }), _ = true, true);
}
export function resetCameraYaw() {
  B = 0;
  G = 0;
  J = 0;
  K = _0x37cc4a;
}