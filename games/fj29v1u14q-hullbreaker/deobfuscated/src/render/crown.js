import * as _0x265e6c from "three";
import { CONFIG as _0x16d326 } from "../config.js";
import { ACTIVE_FIXTURE as _0xaaab54, QUERY as _0x4c8a14 } from "../mode.js";
import { CROWN_APPROACH as _0x12833b, CROWN_MECHANICAL_LIMITS as _0xd3e4cd, crownBakePlan as _0x226550, crownBounds as _0xddee48, crownMechanicalPose as _0x9d96c7, stepCrownTurbine as _0x1ed7be } from "../pure/crown.js";
import { scene as _0x265ae8 } from "./scene.js";
import { PAL as _0x3b142a } from "./palette.js";
import { applyHullTexture as _0x3747e2, applySurface as _0x589dbc } from "./materials.js";
import { postGain as _0x187d8e } from "./post.js";
import { CROWN_ART as _0x5ccf59, CROWN_ART_SLOT as _0x2ff6fb } from "./crown-art.js";
import { towerPose as _0x1229ee } from "./tower.js";
import { routeRenderable as _0x47d1b3, routeVisibilityStamp as _0x532139 } from "./route-visibility.js";
const b = _0x4c8a14.get("crown") === "legacy";
const y = _0x2ff6fb.legacy;
const R = _0x2ff6fb.core;
const x = _0x2ff6fb.kit;
function C(_0x4a827a, _0x1c4041 = 0.025, _0x3d7aff = _0x1c4041) {
  const _0x14cd37 = new _0x265e6c.Shape();
  _0x14cd37.moveTo(_0x4a827a[0][0], _0x4a827a[0][1]);
  for (let _0x36bcee = 1; _0x36bcee < _0x4a827a.length; _0x36bcee++) {
    _0x14cd37.lineTo(_0x4a827a[_0x36bcee][0], _0x4a827a[_0x36bcee][1]);
  }
  _0x14cd37.closePath();
  const _0x298a8a = new _0x265e6c.ExtrudeGeometry(_0x14cd37, {
    depth: 1,
    steps: 1,
    curveSegments: 1,
    bevelEnabled: true,
    bevelSegments: 1,
    bevelSize: _0x1c4041,
    bevelThickness: _0x3d7aff
  });
  _0x298a8a.translate(0, 0, -0.5);
  _0x298a8a.computeBoundingSphere();
  return _0x298a8a;
}
function v(_0x2bdfac, _0x275129) {
  const _0x210e1c = new _0x265e6c.PlaneGeometry(1, 1);
  const _0x3a7285 = _0x210e1c.attributes.uv;
  const _0x4785cc = _0x2bdfac * 0.5;
  const _0x5697a4 = _0x4785cc + 0.5;
  const _0x1f6820 = 1 - (_0x275129 + 1) * 0.5;
  const _0x460abc = _0x1f6820 + 0.5;
  for (let _0x3d41cd = 0; _0x3d41cd < _0x3a7285.count; _0x3d41cd++) {
    const _0x1894c4 = _0x3a7285.getX(_0x3d41cd);
    const _0x2c9fac = _0x3a7285.getY(_0x3d41cd);
    _0x3a7285.setXY(_0x3d41cd, _0x4785cc + _0x1894c4 * (_0x5697a4 - _0x4785cc), _0x1f6820 + _0x2c9fac * (_0x460abc - _0x1f6820));
  }
  _0x3a7285.needsUpdate = true;
  return _0x210e1c;
}
const z = _0xaaab54 === null ? Object.freeze({
  box: new _0x265e6c.BoxGeometry(1, 1, 1),
  plate: new _0x265e6c.PlaneGeometry(1, 1),
  rootLeft: C([[-0.5, -0.43], [-0.43, -0.5], [-0.14, -0.44], [0.05, -0.5], [0.36, -0.36], [0.5, 0.18], [0.4, 0.45], [0.17, 0.5], [-0.11, 0.39], [-0.31, 0.24], [-0.48, 0.08]], 0.035),
  rootRight: C([[-0.5, 0.11], [-0.38, 0.43], [-0.15, 0.5], [0.1, 0.42], [0.31, 0.29], [0.48, 0.03], [0.5, -0.4], [0.37, -0.49], [0.08, -0.43], [-0.12, -0.5], [-0.42, -0.36]], 0.035),
  rootCrown: C([[-0.5, -0.32], [-0.42, -0.5], [-0.12, -0.43], [0.07, -0.5], [0.42, -0.38], [0.5, -0.09], [0.34, 0.34], [0.1, 0.5], [-0.17, 0.45], [-0.41, 0.2]], 0.042),
  recess: C([[-0.35, -0.5], [0.31, -0.5], [0.48, -0.34], [0.5, 0.2], [0.34, 0.43], [0.12, 0.5], [-0.2, 0.46], [-0.44, 0.24], [-0.5, -0.22]], 0.025),
  shellLeft: C([[-0.5, -0.47], [-0.27, -0.5], [0.16, -0.38], [0.44, -0.13], [0.5, 0.25], [0.26, 0.48], [-0.02, 0.5], [-0.35, 0.27], [-0.47, -0.08]], 0.038),
  shellRight: C([[-0.48, 0.18], [-0.33, 0.43], [-0.04, 0.5], [0.26, 0.37], [0.49, 0.07], [0.5, -0.42], [0.25, -0.5], [-0.13, -0.38], [-0.42, -0.15]], 0.038),
  shoulderLeft: C([[-0.5, -0.36], [-0.43, -0.5], [0.02, -0.43], [0.43, -0.26], [0.5, 0.11], [0.3, 0.43], [-0.04, 0.5], [-0.36, 0.29]], 0.045),
  shoulderRight: C([[-0.5, -0.08], [-0.3, 0.38], [0.07, 0.5], [0.4, 0.28], [0.5, -0.2], [0.35, -0.47], [-0.1, -0.5], [-0.39, -0.33]], 0.045),
  crownCap: C([[-0.5, -0.35], [-0.34, -0.5], [0.05, -0.43], [0.39, -0.22], [0.5, 0.12], [0.24, 0.48], [-0.07, 0.5], [-0.42, 0.18]], 0.042),
  gear: new _0x265e6c.RingGeometry(0.31, 0.5, 18),
  antennaPod: C([[-0.33, -0.5], [0.31, -0.5], [0.44, -0.34], [0.31, 0.11], [0.13, 0.28], [0.04, 0.5], [-0.06, 0.5], [-0.17, 0.23], [-0.35, 0.05], [-0.46, -0.31]], 0.02),
  conduit: C([[-0.5, 0], [-0.465, 0.5], [0.465, 0.5], [0.5, 0], [0.465, -0.5], [-0.465, -0.5]], 0.035),
  cableA: C([[-0.5, -0.06], [-0.39, -0.31], [-0.17, -0.42], [0.04, -0.16], [0.27, 0.33], [0.45, 0.38], [0.5, 0.14], [0.42, -0.12], [0.26, 0.01], [0.06, -0.49], [-0.18, -0.5], [-0.42, -0.26]], 0.022),
  cableB: C([[-0.5, 0.12], [-0.43, 0.36], [-0.25, 0.31], [-0.04, -0.26], [0.17, -0.49], [0.38, -0.32], [0.5, -0.07], [0.44, 0.19], [0.26, 0.39], [0.06, 0.1], [-0.17, -0.5], [-0.39, -0.32]], 0.022),
  rupture: C([[-0.48, -0.5], [0.2, -0.46], [0.04, -0.18], [0.42, -0.02], [0.13, 0.19], [0.5, 0.42], [-0.08, 0.5], [-0.31, 0.21], [-0.16, -0.05], [-0.5, -0.24]], 0.018),
  shutter: C([[-0.48, -0.34], [0.5, -0.16], [0.18, 0.47], [-0.15, 0.5]], 0.012),
  turbineVane: C([[-0.48, -0.16], [0.5, -0.05], [0.37, 0.2], [-0.36, 0.34]], 0.008),
  interlockShoe: C([[-0.5, -0.28], [-0.36, -0.5], [0.18, -0.43], [0.5, -0.12], [0.39, 0.34], [0.08, 0.5], [-0.31, 0.38]], 0.018),
  ventLouvre: C([[-0.5, -0.18], [-0.38, -0.42], [0.31, -0.5], [0.5, -0.16], [0.36, 0.22], [-0.22, 0.5], [-0.46, 0.24]], 0.012),
  apertureFill: new _0x265e6c.CircleGeometry(1, 32),
  apertureRingWide: new _0x265e6c.RingGeometry(0.68, 1, 32),
  apertureRingMid: new _0x265e6c.RingGeometry(0.51, 0.64, 28),
  apertureRingInner: new _0x265e6c.RingGeometry(0.27, 0.45, 24),
  apertureLens: new _0x265e6c.CircleGeometry(1, 24),
  kitRootLeft: v(_0x5ccf59.cells.rootLeft.col, _0x5ccf59.cells.rootLeft.row),
  kitRootRight: v(_0x5ccf59.cells.rootRight.col, _0x5ccf59.cells.rootRight.row),
  kitAntenna: v(_0x5ccf59.cells.antenna.col, _0x5ccf59.cells.antenna.row)
}) : null;
function A(_0x4b4e7b, _0x2fa37c) {
  return _0x589dbc(new _0x265e6c.MeshStandardMaterial({
    color: _0x4b4e7b,
    flatShading: true
  }), _0x2fa37c);
}
function S(_0x1dae40, _0x2f5da9, _0x70e3cf) {
  const _0x41118e = A(_0x1dae40, _0x2f5da9);
  _0x3747e2(_0x41118e, _0x70e3cf);
  if (_0x41118e.map) {
    _0x41118e.color.multiply(new _0x265e6c.Color(_0x1dae40));
  }
  return _0x41118e;
}
function D(_0x1130cd, _0x46c791 = 1, _0x355e8d = 1) {
  if (!_0x1130cd) {
    return null;
  }
  const _0x246c09 = new _0x265e6c.MeshBasicMaterial({
    map: _0x1130cd,
    color: 16777215,
    transparent: true,
    opacity: _0x46c791,
    alphaTest: 0.035,
    depthWrite: true,
    side: _0x265e6c.FrontSide,
    fog: true
  });
  _0x246c09.color.setRGB(_0x355e8d, _0x355e8d, _0x355e8d, _0x265e6c.LinearSRGBColorSpace);
  return _0x246c09;
}
const j = _0xaaab54 === null ? Object.freeze({
  summitPlate: D(y, 0.86),
  coreArt: D(R, 0.98, 0.7),
  atlasArt: D(x, 0.97, 0.86),
  antennaArt: D(x, 0.97, 0.52),
  backplane: S(_0x3b142a.limb.shadow, "distant", "wall"),
  foundationWarm: S(_0x3b142a.limb.hull, "plate", "hull"),
  foundationDark: S(_0x3b142a.limb.wall, "machine", "wall"),
  shellWarm: S(_0x3b142a.limb.hull, "plate", "hull"),
  shellDark: S(_0x3b142a.limb.wall, "machine", "wall"),
  shellIvory: A(_0x3b142a.limb.rib, "machine"),
  hardware: S(_0x3b142a.limb.machine, "machine", "wall"),
  antenna: S(_0x3b142a.limb.wall, "machine", "wall"),
  conduitCasing: S(_0x3b142a.contactShadow, "distant", "shadow"),
  signal0: A(_0x3b142a.limb.machine, "machine"),
  signal1: A(_0x3b142a.limb.machine, "machine"),
  signal2: A(_0x3b142a.limb.machine, "machine"),
  void: new _0x265e6c.MeshBasicMaterial({
    color: _0x3b142a.contactShadow,
    fog: true
  }),
  apertureMachine: S(_0x3b142a.limb.wall, "machine", "wall"),
  apertureRim: A(_0x3b142a.limb.machine, "machine"),
  apertureShutter: S(_0x3b142a.limb.wall, "machine", "wall"),
  apertureLens: A(_0x3b142a.contactShadow, "machine"),
  damage: S(_0x3b142a.limb.wall, "machine", "wall")
}) : null;
const P = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
};
const O = new _0x265e6c.Object3D();
const L = new _0x265e6c.Object3D();
const G = new _0x265e6c.Matrix4();
export const crownSignal = Object.freeze({
  s: _0x16d326.levelLength - _0x12833b.coreFromEnd,
  deckY: _0x12833b.deckY,
  coreY: _0x12833b.deckY + 9.62,
  depth: -1.7,
  relays: Object.freeze([Object.freeze({
    ds: -6.12,
    y: _0x12833b.deckY + 18.25
  }), Object.freeze({
    ds: 2.9,
    y: _0x12833b.deckY + 20.98
  }), Object.freeze({
    ds: 6.48,
    y: _0x12833b.deckY + 15.62
  })])
});
function I(_0x11c5ff, _0x26eba2) {
  const _0x17ce85 = _0x1229ee(_0x26eba2.s, P);
  _0x11c5ff.position.set(_0x17ce85.x + Math.sin(_0x17ce85.yaw) * _0x26eba2.depth, _0x26eba2.y + _0x17ce85.alt, _0x17ce85.z + Math.cos(_0x17ce85.yaw) * _0x26eba2.depth);
  _0x11c5ff.rotation.order = "YZX";
  _0x11c5ff.rotation.y = _0x17ce85.yaw;
  _0x11c5ff.rotation.z = _0x26eba2.tilt || 0;
  return _0x11c5ff;
}
function Y(_0x13894b, _0x293ee2) {
  I(_0x13894b, _0x293ee2);
  if (_0x293ee2.shape === "plate") {
    _0x13894b.scale.set(_0x293ee2.w, _0x293ee2.h, 1);
  } else {
    _0x13894b.scale.set(_0x293ee2.w, _0x293ee2.h, _0x293ee2.d);
  }
  return _0x13894b;
}
function $(_0x4eb1d8, _0x18fa65 = null) {
  Y(O, _0x4eb1d8);
  O.updateMatrix();
  if (_0x18fa65) {
    L.position.set(_0x18fa65.x || 0, _0x18fa65.y || 0, _0x18fa65.z || 0);
    L.rotation.set(0, 0, _0x18fa65.rz || 0);
    L.scale.set(_0x18fa65.sx ?? 1, _0x18fa65.sy ?? 1, _0x18fa65.sz ?? 1);
    L.updateMatrix();
    return G.multiplyMatrices(O.matrix, L.matrix).clone();
  } else {
    return O.matrix.clone();
  }
}
function B(_0x51ee5a, _0x11c2db, _0x4e2bf7, _0x4b04da, _0x4600e1, _0x247870) {
  if (!_0x4600e1.length || !_0x4e2bf7 || !_0x4b04da) {
    return null;
  }
  const _0x3b3f0d = new _0x265e6c.InstancedMesh(_0x4e2bf7, _0x4b04da, _0x4600e1.length);
  _0x3b3f0d.name = _0x11c2db;
  _0x3b3f0d.frustumCulled = false;
  _0x3b3f0d.userData.crownRole = _0x247870;
  _0x3b3f0d.userData.crownParts = _0x4600e1.map(_0x394792 => ({
    s: _0x394792.p.s,
    shape: _0x394792.p.shape
  }));
  for (let _0x5b03e6 = 0; _0x5b03e6 < _0x4600e1.length; _0x5b03e6++) {
    _0x3b3f0d.setMatrixAt(_0x5b03e6, _0x4600e1[_0x5b03e6].matrix);
  }
  _0x3b3f0d.instanceMatrix.needsUpdate = true;
  _0x51ee5a.add(_0x3b3f0d);
  return _0x3b3f0d;
}
function W(_0xf11103) {
  if (_0xf11103.kind === "backplane") {
    return j.backplane;
  } else if (_0xf11103.kind === "foundation") {
    if (_0xf11103.shape === "rootRight") {
      return j.foundationDark;
    } else {
      return j.foundationWarm;
    }
  } else if (_0xf11103.kind === "shell") {
    if (_0xf11103.shape === "shellLeft" || _0xf11103.shape === "shellRight" || _0xf11103.shape === "crownCap") {
      return j.shellDark;
    } else if (_0xf11103.shape === "shoulderLeft") {
      return j.shellIvory;
    } else {
      return j.shellWarm;
    }
  } else if (_0xf11103.kind === "hardware") {
    return j.hardware;
  } else if (_0xf11103.kind === "antenna") {
    return j.antenna;
  } else if (_0xf11103.kind === "trim") {
    return j.signal0;
  } else {
    return j[_0xf11103.kind];
  }
}
function T(_0x3e481b) {
  if (_0x3e481b.asset === "rootLeft") {
    return z.kitRootLeft;
  } else if (_0x3e481b.asset === "rootRight") {
    return z.kitRootRight;
  } else if (_0x3e481b.asset === "antenna") {
    return z.kitAntenna;
  } else {
    return z.plate;
  }
}
function U(_0x51ba34) {
  if (_0x51ba34.kind === "summitPlate") {
    return j.summitPlate;
  } else if (_0x51ba34.asset === "core") {
    return j.coreArt;
  } else if (_0x51ba34.asset === "antenna") {
    return j.antennaArt;
  } else {
    return j.atlasArt;
  }
}
const N = {
  shutters: [],
  lens: null,
  rings: [],
  open: 0,
  interlockShoes: null,
  ventLouvres: null,
  radius: 0
};
const F = {
  mesh: null
};
const E = {
  groups: null,
  turbine: null
};
const _ = {
  packetAt: -Infinity,
  ruptureAt: -Infinity,
  transmissionAt: -Infinity,
  lastAt: null,
  turbineAngle: 0,
  attackCommitted: false,
  pose: _0x9d96c7()
};
function V(_0x593d43, _0x24dcfa, _0x463e51) {
  if (_0x24dcfa && _0x463e51) {
    _0x593d43.updateMatrixWorld(true);
    _0x24dcfa.updateMatrixWorld(true);
    _0x24dcfa.attach(_0x463e51);
    return _0x463e51;
  } else {
    return _0x463e51;
  }
}
function X(_0x82d01a, _0x56bf42) {
  if (_0x56bf42.kind === "rootArt" || _0x56bf42.kind === "foundation") {
    return _0x82d01a.root;
  } else if (_0x56bf42.kind === "antennaArt" || _0x56bf42.kind === "antenna") {
    return _0x82d01a.antenna;
  } else if (_0x56bf42.kind === "shell" || _0x56bf42.kind === "damage") {
    return _0x82d01a.shell;
  } else if (_0x56bf42.kind === "coreArt" || _0x56bf42.kind === "backplane" || _0x56bf42.kind === "hardware" || _0x56bf42.kind === "summitPlate" || _0x56bf42.kind === "void") {
    return _0x82d01a.core;
  } else {
    return null;
  }
}
const H = Object.freeze([-2.58, -0.66, 0.47, 2.31]);
const K = Object.freeze([-1.28, -0.78, -0.31, 0.2, 0.7, 1.18]);
function q(_0x4dc356, _0xe82604, _0x13fd2e, _0x376e24, _0x294c31, _0x341e76, _0x4af27b, _0x2b054d, _0x17efb3) {
  L.position.set(_0x13fd2e, _0x376e24, _0x294c31);
  L.rotation.set(0, 0, _0x17efb3);
  L.scale.set(_0x341e76, _0x4af27b, _0x2b054d);
  L.updateMatrix();
  _0x4dc356.setMatrixAt(_0xe82604, L.matrix);
}
function Z(_0xdd28ff = 0, _0x52b8a1 = _.pose) {
  const _0x5ae7ae = N.interlockShoes;
  const _0x4a5adb = N.ventLouvres;
  const _0x5ac723 = N.radius;
  if (!_0x5ae7ae || !_0x4a5adb || !_0x5ac723) {
    return;
  }
  const _0x2b33c1 = re(_0xdd28ff);
  const _0x1258d8 = re(_0x52b8a1?.rootCompression);
  const _0x3d6e45 = re(_0x52b8a1?.transmissionRecoil);
  const _0x42af70 = re(_0x52b8a1?.coreKick);
  for (let _0x2caaa1 = 0; _0x2caaa1 < H.length; _0x2caaa1++) {
    const _0x1564a0 = H[_0x2caaa1];
    const _0x52ad8d = _0x2caaa1 % 2 ? -1 : 1;
    const _0xe65fad = _0x2caaa1 === 2 ? 0.12 : _0x2caaa1 === 0 ? -0.08 : 0;
    const _0x16ae1f = _0x5ac723 * (0.72 + _0x2b33c1 * (0.18 + _0x2caaa1 * 0.018)) + _0x3d6e45 * (0.22 + _0x2caaa1 * 0.025);
    q(_0x5ae7ae, _0x2caaa1, Math.cos(_0x1564a0) * _0x16ae1f + _0x52ad8d * _0x3d6e45 * 0.1, Math.sin(_0x1564a0) * _0x16ae1f + _0xe65fad + _0x1258d8 * (_0x2caaa1 < 2 ? -0.07 : 0.05), 0.052 + _0x2caaa1 * 0.004, _0x5ac723 * (0.31 + _0x2caaa1 % 2 * 0.025), _0x5ac723 * (0.16 + (_0x2caaa1 === 3 ? 0.025 : 0)), 0.1, _0x1564a0 + Math.PI * 0.5 + _0x52ad8d * _0x2b33c1 * 0.22 + _0x3d6e45 * _0x52ad8d * 0.1);
  }
  _0x5ae7ae.instanceMatrix.needsUpdate = true;
  for (let _0x3a057c = 0; _0x3a057c < K.length; _0x3a057c++) {
    const _0x11959b = _0x3a057c < 3 ? -1 : 1;
    const _0x142596 = _0x3a057c % 3;
    const _0x474503 = _0x142596 * 0.13;
    q(_0x4a5adb, _0x3a057c, K[_0x3a057c] * _0x5ac723 * 0.72 + _0x11959b * _0x3d6e45 * (0.09 + _0x142596 * 0.025), -_0x5ac723 * (0.57 + _0x142596 * 0.075) - _0x2b33c1 * (0.08 + _0x142596 * 0.025) + _0x42af70 * 0.06, -0.018 - _0x142596 * 0.006, _0x5ac723 * (0.25 + _0x142596 * 0.018), _0x5ac723 * 0.085, 0.075, _0x11959b * (0.1 + _0x2b33c1 * (0.22 + _0x142596 * 0.035)) + _0x3d6e45 * _0x11959b * (0.07 + _0x142596 * 0.018) + _0x474503 * 0.1);
  }
  _0x4a5adb.instanceMatrix.needsUpdate = true;
}
function J(_0x435a0d, _0x256578) {
  const _0x343c68 = new _0x265e6c.Group();
  _0x343c68.name = "Crown deep mechanical iris";
  _0x343c68.userData.crownRole = "aperture-mechanism";
  I(_0x343c68, _0x256578);
  _0x435a0d.add(_0x343c68);
  const _0x3faf40 = _0x256578.w * 0.5;
  const _0x112229 = new _0x265e6c.Mesh(z.apertureFill, j.void);
  _0x112229.name = "Crown iris deep well";
  _0x112229.scale.setScalar(_0x3faf40 * 0.96);
  _0x112229.position.z = -0.16;
  _0x343c68.add(_0x112229);
  const _0x34bb91 = new _0x265e6c.Mesh(z.apertureRingWide, j.apertureMachine);
  _0x34bb91.name = "Crown iris recessed machinery ring";
  _0x34bb91.scale.setScalar(_0x3faf40 * 0.95);
  _0x34bb91.position.z = -0.105;
  _0x343c68.add(_0x34bb91);
  N.rings.push(_0x34bb91);
  const _0x45570a = new _0x265e6c.Group();
  _0x45570a.name = "Crown committed-attack turbine group";
  _0x45570a.userData.crownRole = "turbine-mechanical-group";
  _0x343c68.add(_0x45570a);
  E.turbine = _0x45570a;
  const _0x4a265e = [];
  for (let _0x1109e0 = 0; _0x1109e0 < 10; _0x1109e0++) {
    const _0x2d1a37 = Math.PI * 2 * _0x1109e0 / 10;
    const _0x409bf5 = new _0x265e6c.Object3D();
    _0x409bf5.position.set(Math.cos(_0x2d1a37) * _0x3faf40 * 0.56, Math.sin(_0x2d1a37) * _0x3faf40 * 0.56, -0.045);
    _0x409bf5.rotation.z = _0x2d1a37 + Math.PI * 0.18;
    _0x409bf5.scale.set(_0x3faf40 * 0.38, _0x3faf40 * 0.16, 0.07);
    _0x409bf5.updateMatrix();
    _0x4a265e.push({
      p: _0x256578,
      matrix: _0x409bf5.matrix.clone()
    });
  }
  B(_0x45570a, "Crown iris turbine vanes", z.turbineVane, j.apertureMachine, _0x4a265e, "aperture-turbine");
  const _0x573d9c = new _0x265e6c.Mesh(z.apertureRingMid, j.apertureRim);
  _0x573d9c.name = "Crown iris induction ring";
  _0x573d9c.scale.setScalar(_0x3faf40 * 0.97);
  _0x573d9c.position.z = -0.01;
  _0x343c68.add(_0x573d9c);
  N.rings.push(_0x573d9c);
  const _0x3ddeed = new _0x265e6c.Mesh(z.apertureRingInner, j.apertureMachine);
  _0x3ddeed.name = "Crown iris inner stator";
  _0x3ddeed.scale.setScalar(_0x3faf40 * 0.97);
  _0x3ddeed.position.z = 0.018;
  _0x343c68.add(_0x3ddeed);
  N.rings.push(_0x3ddeed);
  for (let _0x5e6670 = 0; _0x5e6670 < 6; _0x5e6670++) {
    const _0xf5d60a = Math.PI * 2 * _0x5e6670 / 6 + Math.PI / 6;
    const _0x1f86f4 = new _0x265e6c.Mesh(z.shutter, j.apertureShutter);
    _0x1f86f4.name = "Crown physical iris shutter";
    _0x1f86f4.scale.set(_0x3faf40 * 0.29, _0x3faf40 * 0.39, 0.075);
    _0x1f86f4.position.set(Math.cos(_0xf5d60a) * _0x3faf40 * 0.57, Math.sin(_0xf5d60a) * _0x3faf40 * 0.57, 0.04);
    _0x1f86f4.rotation.z = _0xf5d60a - Math.PI / 2;
    _0x343c68.add(_0x1f86f4);
    N.shutters.push({
      mesh: _0x1f86f4,
      angle: _0xf5d60a,
      radius: _0x3faf40 * 0.57,
      baseRotation: _0xf5d60a - Math.PI / 2
    });
  }
  const _0x3e944e = new _0x265e6c.InstancedMesh(z.interlockShoe, j.apertureShutter, 4);
  _0x3e944e.name = "Crown iris four-shoe mechanical interlock";
  _0x3e944e.userData.crownRole = "aperture-interlock-shoes";
  _0x3e944e.frustumCulled = false;
  _0x3e944e.instanceMatrix.setUsage(_0x265e6c.DynamicDrawUsage);
  _0x343c68.add(_0x3e944e);
  N.interlockShoes = _0x3e944e;
  const _0x253afe = new _0x265e6c.InstancedMesh(z.ventLouvre, j.apertureMachine, 6);
  _0x253afe.name = "Crown iris pressure vent louvres";
  _0x253afe.userData.crownRole = "aperture-pressure-vents";
  _0x253afe.frustumCulled = false;
  _0x253afe.instanceMatrix.setUsage(_0x265e6c.DynamicDrawUsage);
  _0x343c68.add(_0x253afe);
  N.ventLouvres = _0x253afe;
  N.radius = _0x3faf40;
  const _0x36204c = new _0x265e6c.Mesh(z.apertureLens, j.apertureLens);
  _0x36204c.name = "Crown command lens";
  _0x36204c.scale.setScalar(_0x3faf40 * 0.22);
  _0x36204c.position.z = 0.075;
  _0x343c68.add(_0x36204c);
  N.lens = _0x36204c;
  Z(0, _.pose);
  return _0x343c68;
}
function Q(_0x23486a, _0x13cc6f) {
  const _0x22247e = new _0x265e6c.Group();
  _0x22247e.name = "Crown rupturing service shoulder";
  _0x22247e.userData.crownRole = "damage";
  I(_0x22247e, _0x13cc6f);
  const _0x192a92 = new _0x265e6c.Mesh(z.rupture, j.damage);
  _0x192a92.name = "Crown hinged rupture plate";
  _0x192a92.scale.set(_0x13cc6f.w, _0x13cc6f.h, _0x13cc6f.d);
  _0x22247e.add(_0x192a92);
  _0x23486a.add(_0x22247e);
  F.mesh = _0x192a92;
  return _0x22247e;
}
function ee(_0x525914 = 0) {
  const _0x193541 = Math.max(0, Math.min(1, _0x525914));
  N.open = _0x193541;
  for (let _0x21f0ac = 0; _0x21f0ac < N.shutters.length; _0x21f0ac++) {
    const _0x2f1b42 = N.shutters[_0x21f0ac];
    const _0x5278f4 = _0x2f1b42.radius + _0x193541 * 0.48;
    _0x2f1b42.mesh.position.x = Math.cos(_0x2f1b42.angle) * _0x5278f4;
    _0x2f1b42.mesh.position.y = Math.sin(_0x2f1b42.angle) * _0x5278f4;
    _0x2f1b42.mesh.rotation.z = _0x2f1b42.baseRotation + (_0x21f0ac % 2 ? -1 : 1) * _0x193541 * 0.28;
  }
  if (F.mesh) {
    F.mesh.position.x = _0x193541 * 0.62;
    F.mesh.position.y = _0x193541 * 0.15;
    F.mesh.position.z = _0x193541 * 0.065;
    F.mesh.rotation.z = _0x193541 * 0.18;
  }
  Z(_0x193541, _.pose);
}
export const crownRoot = _0xaaab54 === null ? function () {
  const _0x16ca7b = new _0x265e6c.Group();
  _0x16ca7b.name = b ? "Crown summit legacy visual comparison" : "Crown integrated command organ v4";
  const _0x2174b5 = _0x226550(_0x16d326, _0x12833b.deckY, {
    legacy: b
  });
  const _0x306c7f = function (_0x594f16) {
    const _0x567927 = crownSignal.s;
    const _0x389160 = {
      root: {
        name: "Crown root mechanical group",
        s: _0x567927,
        y: _0x12833b.deckY - 0.15,
        depth: -2.02
      },
      core: {
        name: "Crown core mechanical group",
        s: _0x567927,
        y: crownSignal.coreY,
        depth: -1.82
      },
      antenna: {
        name: "Crown antenna mechanical group",
        s: _0x567927 + 2.9,
        y: _0x12833b.deckY + 15.38,
        depth: -3.74
      },
      shell: {
        name: "Crown shell mechanical group",
        s: _0x567927,
        y: crownSignal.coreY,
        depth: -3.46
      }
    };
    const _0x3039eb = {};
    for (const [_0x38746e, _0x50f46f] of Object.entries(_0x389160)) {
      const _0x481d39 = new _0x265e6c.Group();
      _0x481d39.name = _0x50f46f.name;
      _0x481d39.userData.crownRole = _0x38746e + "-mechanical-group";
      I(_0x481d39, _0x50f46f);
      _0x481d39.userData.crownMotionBase = Object.freeze({
        x: _0x481d39.position.x,
        y: _0x481d39.position.y,
        z: _0x481d39.position.z,
        rz: _0x481d39.rotation.z,
        yaw: _0x481d39.rotation.y
      });
      _0x594f16.add(_0x481d39);
      _0x3039eb[_0x38746e] = _0x481d39;
    }
    E.groups = _0x3039eb;
    return _0x3039eb;
  }(_0x16ca7b);
  const _0x38aba0 = new Map();
  const _0x57cc30 = [[], [], []];
  let _0x395f0f = 0;
  let _0x5d418a = 0;
  for (const _0x1d0d77 of _0x2174b5) {
    if (_0x1d0d77.kind === "summitPlate" || _0x1d0d77.kind === "coreArt" || _0x1d0d77.kind === "rootArt" || _0x1d0d77.kind === "antennaArt") {
      const _0xf16768 = U(_0x1d0d77);
      if (!_0xf16768) {
        continue;
      }
      const _0x1d9cf3 = new _0x265e6c.Mesh(T(_0x1d0d77), _0xf16768);
      _0x1d9cf3.name = _0x1d0d77.kind === "summitPlate" ? "Crown legacy summit panorama" : "Crown recessed " + _0x1d0d77.asset + " organ";
      _0x1d9cf3.userData.crownRole = _0x1d0d77.kind;
      _0x1d9cf3.userData.crownAsset = _0x1d0d77.asset || "legacy";
      _0x1d9cf3.userData.shadow = "none";
      _0x1d9cf3.renderOrder = -30 + _0x395f0f;
      _0x1d9cf3.frustumCulled = false;
      Y(_0x1d9cf3, _0x1d0d77);
      _0x16ca7b.add(_0x1d9cf3);
      V(_0x16ca7b, X(_0x306c7f, _0x1d0d77), _0x1d9cf3);
      _0x395f0f++;
      continue;
    }
    if (/^signal[0-2]$/.test(_0x1d0d77.kind)) {
      _0x57cc30[_0x1d0d77.stage || 0].push(_0x1d0d77);
      continue;
    }
    if (_0x1d0d77.kind === "trim") {
      _0x57cc30[0].push(_0x1d0d77);
      continue;
    }
    if (_0x1d0d77.kind === "void") {
      const _0x5de1a5 = J(_0x16ca7b, _0x1d0d77);
      V(_0x16ca7b, _0x306c7f.core, _0x5de1a5);
      continue;
    }
    if (_0x1d0d77.kind === "damage") {
      const _0x1f06f4 = Q(_0x16ca7b, _0x1d0d77);
      V(_0x16ca7b, _0x306c7f.shell, _0x1f06f4);
      continue;
    }
    const _0x4d007c = W(_0x1d0d77);
    const _0x47a2b8 = Object.entries(j).find(([, _0x185c72]) => _0x185c72 === _0x4d007c)?.[0] || _0x1d0d77.kind;
    const _0x35ffeb = _0x1d0d77.kind + ":" + _0x1d0d77.shape + ":" + _0x47a2b8;
    if (!_0x38aba0.has(_0x35ffeb)) {
      _0x38aba0.set(_0x35ffeb, {
        p: _0x1d0d77,
        rows: [],
        material: _0x4d007c
      });
    }
    _0x38aba0.get(_0x35ffeb).rows.push({
      p: _0x1d0d77,
      matrix: $(_0x1d0d77)
    });
  }
  for (const [_0xf1d30c, _0x8b77e1] of _0x38aba0) {
    const {
      p: _0x54d91a,
      rows: _0x524300,
      material: _0x4b0732
    } = _0x8b77e1;
    const _0xaf32ac = B(_0x16ca7b, "Crown " + _0xf1d30c + " fixed pool", z[_0x54d91a.shape], _0x4b0732, _0x524300, _0x54d91a.kind);
    V(_0x16ca7b, X(_0x306c7f, _0x54d91a), _0xaf32ac);
  }
  for (let _0x3b4f4c = 0; _0x3b4f4c < _0x57cc30.length; _0x3b4f4c++) {
    const _0x52034c = _0x57cc30[_0x3b4f4c];
    if (_0x52034c.length) {
      for (const _0x1150ec of new Set(_0x52034c.map(_0x5ee276 => _0x5ee276.shape))) {
        const _0x5a8bbb = _0x52034c.filter(_0x38e53b => _0x38e53b.shape === _0x1150ec);
        const _0x43ee14 = _0x3b4f4c === 0 ? _0x306c7f.root : _0x3b4f4c === 1 ? _0x306c7f.core : _0x306c7f.antenna;
        V(_0x16ca7b, _0x43ee14, B(_0x16ca7b, "Crown stage " + (_0x3b4f4c + 1) + " " + _0x1150ec + " conductor casings", z[_0x1150ec], j.conduitCasing, _0x5a8bbb.map(_0x1c5d0a => ({
          p: _0x1c5d0a,
          matrix: $(_0x1c5d0a)
        })), "signal-casing"));
        V(_0x16ca7b, _0x43ee14, B(_0x16ca7b, "Crown stage " + (_0x3b4f4c + 1) + " " + _0x1150ec + " recessed signal nerves", z[_0x1150ec], j["signal" + _0x3b4f4c], _0x5a8bbb.map(_0x49875b => ({
          p: _0x49875b,
          matrix: $(_0x49875b, {
            z: 0.57,
            sx: 0.94,
            sy: 0.26,
            sz: 0.12
          })
        })), "signal" + _0x3b4f4c));
        _0x5d418a += 2;
      }
    }
  }
  _0x16ca7b.userData.crownPresentation = Object.freeze({
    variant: b ? "legacy" : "production",
    parts: _0x2174b5.length,
    pools: _0x38aba0.size + _0x5d418a,
    paintedOrgans: _0x395f0f,
    modularArt: !b,
    stagedConductors: b ? 0 : _0x57cc30.filter(_0x4a9eb6 => _0x4a9eb6.length).length,
    physicalShutters: N.shutters.length,
    interlockShoes: N.interlockShoes?.count || 0,
    pressureVents: N.ventLouvres?.count || 0,
    hingedRupture: !!F.mesh,
    mechanicalGroups: Object.keys(_0x306c7f),
    turbineGroup: !!E.turbine,
    bounds: _0xddee48(_0x16d326, {
      legacy: b
    })
  });
  _0x16ca7b.traverse(_0x349e1d => {
    if (_0x349e1d.isMesh || _0x349e1d.isGroup) {
      _0x349e1d.userData.environmentRole = "crown-architecture";
    }
  });
  _0x265ae8.add(_0x16ca7b);
  ee(0);
  return _0x16ca7b;
}() : null;
let te = "";
export function updateCrownFacetCull() {
  if (!crownRoot) {
    return;
  }
  const _0x55d2f4 = _0x532139();
  if (_0x55d2f4 !== te) {
    te = _0x55d2f4;
    crownRoot.visible = _0x47d1b3(crownSignal.s);
  }
}
updateCrownFacetCull();
const ne = _0xaaab54 === null ? new _0x265e6c.Color(_0x3b142a.capsule) : null;
const oe = _0xaaab54 === null ? new _0x265e6c.Color(_0x3b142a.modCapsule) : null;
function re(_0x5990c1) {
  return Math.max(0, Math.min(1, Number(_0x5990c1) || 0));
}
function ae(_0x528b66, _0x3adc6b, _0x1a7dc2 = 0) {
  return re(_0x528b66 * 3.15 - _0x3adc6b * 0.92 + _0x1a7dc2 * 0.24);
}
function se(_0x488bf9, _0x255a05, _0x27da0f) {
  if (_0x488bf9?.emissive) {
    _0x488bf9.emissive.copy(_0x255a05);
    _0x488bf9.emissiveIntensity = _0x187d8e() * _0x27da0f;
  }
}
function ie() {
  const _0x397985 = E.groups;
  if (_0x397985) {
    for (const _0x16135c of Object.values(_0x397985)) {
      const _0xc40ae3 = _0x16135c.userData.crownMotionBase;
      _0x16135c.position.set(_0xc40ae3.x, _0xc40ae3.y, _0xc40ae3.z);
      _0x16135c.rotation.z = _0xc40ae3.rz;
    }
  }
  if (E.turbine) {
    E.turbine.rotation.z = 0;
  }
}
export function triggerCrownMechanicalAction(_0x155c37, _0xb9a2 = 0) {
  return !!Object.hasOwn(_, _0x155c37 + "At") && (_[_0x155c37 + "At"] = Number(_0xb9a2) || 0, true);
}
function le(_0xf784a6, _0x189dbe) {
  const _0x1c259c = Math.max(0, Number(_0xf784a6) || 0);
  const _0x2165d2 = _.lastAt === null || _0x1c259c < _.lastAt ? 0 : _0x1c259c - _.lastAt;
  _.lastAt = _0x1c259c;
  _.attackCommitted = !!_0x189dbe;
  _.turbineAngle = _0x1ed7be(_.turbineAngle, _0x2165d2, _.attackCommitted);
  _.pose = _0x9d96c7({
    packetAgeMs: _0x1c259c - _.packetAt,
    ruptureAgeMs: _0x1c259c - _.ruptureAt,
    transmissionAgeMs: _0x1c259c - _.transmissionAt
  });
  (function (_0x2aff42, _0x4cde90) {
    const _0x9d53af = E.groups;
    if (!_0x9d53af) {
      return;
    }
    ie();
    const _0x243e33 = _0x9d53af.root.userData.crownMotionBase;
    _0x9d53af.root.position.y = _0x243e33.y - _0x2aff42.rootCompression * _0xd3e4cd.packetRootTravel;
    const _0x5a41a6 = _0x9d53af.core.userData.crownMotionBase;
    _0x9d53af.core.position.y = _0x5a41a6.y + _0x2aff42.rootCompression * _0xd3e4cd.packetCoreTravel + _0x2aff42.coreKick * _0xd3e4cd.transmissionCoreTravel * 0.18;
    const _0x457a27 = _0x2aff42.transmissionRecoil * _0xd3e4cd.transmissionCoreTravel;
    _0x9d53af.core.position.x = _0x5a41a6.x - Math.cos(_0x5a41a6.yaw) * _0x457a27;
    _0x9d53af.core.position.z = _0x5a41a6.z + Math.sin(_0x5a41a6.yaw) * _0x457a27;
    const _0x2e8b7f = _0x9d53af.antenna.userData.crownMotionBase;
    _0x9d53af.antenna.rotation.z = _0x2e8b7f.rz + _0x2aff42.antennaWhip * _0xd3e4cd.antennaWhipRadians;
    const _0x3be27a = _0x9d53af.shell.userData.crownMotionBase;
    const _0x5e86e6 = _0x2aff42.transmissionRecoil * _0xd3e4cd.shellRecoilTravel;
    _0x9d53af.shell.position.x = _0x3be27a.x + Math.cos(_0x3be27a.yaw) * _0x5e86e6;
    _0x9d53af.shell.position.y = _0x3be27a.y + _0x5e86e6 * 0.14;
    _0x9d53af.shell.position.z = _0x3be27a.z - Math.sin(_0x3be27a.yaw) * _0x5e86e6;
    _0x9d53af.shell.rotation.z = _0x3be27a.rz + _0x2aff42.transmissionRecoil * _0xd3e4cd.shellRecoilRadians;
    if (E.turbine) {
      E.turbine.rotation.z = _0x4cde90;
    }
    Z(N.open, _0x2aff42);
  })(_.pose, _.turbineAngle);
}
export function setCrownPresentation({
  energy: _0x13043b = 0,
  surge: _0x5488c9 = 0,
  nowMs: _0x4cea6f = 0,
  attackCommitted: _0x5e6680 = false
} = {}) {
  if (!crownRoot || !j) {
    return;
  }
  const _0x280bae = re(_0x13043b);
  const _0x35c301 = re(_0x5488c9);
  const _0x5cb5fe = ae(_0x280bae, 0, _0x35c301);
  const _0x137820 = ae(_0x280bae, 1, _0x35c301);
  const _0x5a3085 = ae(_0x280bae, 2, _0x35c301);
  const _0x4ac997 = Math.max(0, Number(_0x4cea6f) || 0) / 1000;
  const _0x1c3eb0 = Math.max(_0x35c301, _0x5e6680 ? 0.7 : 0);
  const _0x2fadde = 0.42 + Math.max(0, Math.sin(_0x4ac997 * 5.2)) * 0.58;
  const _0xb0e4a5 = 0.38 + Math.max(0, Math.sin(_0x4ac997 * 5.2 - 1.6)) * 0.62;
  const _0x4ad8f9 = 0.34 + Math.max(0, Math.sin(_0x4ac997 * 5.2 - 3.1)) * 0.66;
  se(j.signal0, ne, _0x5cb5fe * (0.08 + _0x2fadde * 0.08) + _0x1c3eb0 * 0.3);
  se(j.signal1, ne, _0x137820 * (0.08 + _0xb0e4a5 * 0.1) + _0x1c3eb0 * 0.38);
  se(j.signal2, oe, _0x5a3085 * (0.1 + _0x4ad8f9 * 0.12) + _0x1c3eb0 * 0.48);
  se(j.apertureRim, ne, _0x137820 * 0.1 + _0x5a3085 * 0.08 + _0x1c3eb0 * 0.34);
  se(j.apertureLens, oe, _0x137820 * 0.12 + _0x5a3085 * 0.2 + _0x1c3eb0 * 0.62);
  ee(re((_0x280bae - 0.54) / 0.4 + _0x35c301 * 0.34));
  le(_0x4cea6f, _0x5e6680);
}
export function resetCrownPresentation() {
  if (crownRoot && j) {
    for (const _0x21bbac of [j.signal0, j.signal1, j.signal2, j.apertureRim, j.apertureLens]) {
      if (_0x21bbac?.emissive) {
        _0x21bbac.emissive.setHex(_0x3b142a.glowOff);
        _0x21bbac.emissiveIntensity = 1;
      }
    }
    ee(0);
    _.packetAt = -Infinity;
    _.ruptureAt = -Infinity;
    _.transmissionAt = -Infinity;
    _.lastAt = null;
    _.turbineAngle = 0;
    _.attackCommitted = false;
    _.pose = _0x9d96c7();
    ie();
    crownRoot.position.set(0, 0, 0);
    crownRoot.rotation.set(0, 0, 0);
    crownRoot.scale.set(1, 1, 1);
  }
}
export function crownPresentationSnapshot() {
  if (crownRoot) {
    return {
      ...crownRoot.userData.crownPresentation,
      visible: crownRoot.visible,
      signalS: crownSignal.s,
      signalY: crownSignal.coreY,
      mechanics: {
        ..._.pose,
        turbineAngle: _.turbineAngle,
        attackCommitted: _.attackCommitted,
        rootAnchored: crownRoot.position.lengthSq() === 0 && crownRoot.rotation.x === 0 && crownRoot.rotation.y === 0 && crownRoot.rotation.z === 0 && crownRoot.scale.x === 1 && crownRoot.scale.y === 1 && crownRoot.scale.z === 1
      },
      assetPixels: {
        core: R?.image ? [R.image.width, R.image.height] : null,
        kit: x?.image ? [x.image.width, x.image.height] : null,
        legacy: y?.image ? [y.image.width, y.image.height] : null
      }
    };
  } else {
    return {
      variant: "fixture",
      visible: false,
      parts: 0,
      pools: 0
    };
  }
}
if (typeof window != "undefined") {
  window.__HB_CROWN_PRESENTATION = crownPresentationSnapshot;
}