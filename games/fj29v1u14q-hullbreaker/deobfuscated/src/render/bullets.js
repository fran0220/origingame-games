import * as _0x1a7e97 from "three";
import { CONFIG as _0x51086e, BULLET_NOSE_CEILING_TILES as _0x5593ca } from "../config.js";
import { BEND_S as _0x159d18, facetAtBends as _0x40b15e } from "../pure/path.js";
import { TRANSFORM_BEND_S as _0x2d9bcc } from "../pure/transform.js";
import { ACTIVE_FIXTURE as _0x2efb41, IS_TRANSFORM_SLICE as _0x3a7a80, VIEW_ID as _0x25d3b3 } from "../mode.js";
import { bulletNoseTiles as _0x3c5f69 } from "../pure/juice.js";
import { installView as _0x5630b2 } from "../sim/bridge.js";
import { committedBand as _0x595cb7 } from "../sim/transform.js";
import { BULLET_MAX as _0x13d5b7 } from "../sim/weapons.js";
import { scoreCharge as _0x5d67c9, scoreNotchNow as _0x481d8a } from "../sim/score.js";
import { mods as _0x25e7e3 } from "../sim/mods.js";
import { gameMs as _0x24b600 } from "../sim/time.js";
import { cameraFacingFacet as _0x53c48e } from "./camera.js";
import { scene as _0x5739a7, HIDE as _0x5293da } from "./scene.js";
import { PROJECTILE_ART as _0x55ad02, PROJECTILE_ART_SLOT as _0x36269d } from "./projectile-art.js";
import { towerPose as _0x2df3f7 } from "./tower.js";
import { PAL as _0x55171d } from "./palette.js";
import { fxCoreRupture as _0x49941f, fxDirectedBurst as _0x345479, fxDirectionalFlash as _0x450aa0, fxFlash as _0x532981, fxRoleFragments as _0x4762da, fxVapor as _0x34bc16 } from "./fx.js";
import { routeRenderable as _0x48aafd } from "./route-visibility.js";
import { normalizedOverdriveCharge as _0x2cc9e0, overdriveProjectileGain as _0x26dd8b, rageStaccato as _0x2b6b79 } from "./power-feedback.js";
const O = _0x36269d;
const T = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
};
const I = _0x51086e.rifle.radius;
const W = 1.15;
const L = _0x25d3b3 === "far" ? 1.24 : _0x25d3b3 === "mid" ? 1.1 : 1;
const P = Object.keys(_0x51086e.weapons);
const U = new _0x1a7e97.MeshBasicMaterial({
  color: 16777215,
  fog: false,
  depthWrite: false
});
const G = {
  R: new _0x1a7e97.ConeGeometry(I * 0.3, I * 2, 6, 1, false),
  S: new _0x1a7e97.ConeGeometry(I * 0.42, I * 2, 3, 1, false),
  L: new _0x1a7e97.CylinderGeometry(I * 0.17, I * 0.17, I * 2, 4, 1, false),
  H: new _0x1a7e97.ConeGeometry(I * 0.55, I * 2, 4, 1, false),
  F: new _0x1a7e97.ConeGeometry(I * 1.02, I * 2, 3, 1, false)
};
for (const It of ["R", "S", "L", "H", "F"]) {
  G[It].rotateZ(-Math.PI / 2);
}
const D = {};
for (const Wt of P) {
  const Lt = new _0x1a7e97.InstancedMesh(G[Wt] || G.R, U, _0x13d5b7);
  Lt.frustumCulled = false;
  Lt.renderOrder = 3;
  _0x5739a7.add(Lt);
  D[Wt] = Lt;
}
const N = P.map(_0x3b6e41 => D[_0x3b6e41]);
const Y = 230 / 256;
const E = Object.freeze({
  R: Object.freeze({
    frontCap: Infinity,
    tail: 0.45,
    thickness: 0.82
  }),
  S: Object.freeze({
    frontCap: Infinity,
    tail: 0.45,
    thickness: 0.68
  }),
  L: Object.freeze({
    frontCap: 0.8,
    tail: 0.7,
    thickness: 0.55
  }),
  H: Object.freeze({
    frontCap: Infinity,
    tail: 0.72,
    thickness: 0.55
  }),
  F: Object.freeze({
    frontCap: Infinity,
    tail: 0.78,
    thickness: 0.58
  })
});
function _(_0x3bc911) {
  const _0x1cea21 = new _0x1a7e97.PlaneGeometry(1, 1);
  const _0x2686a2 = _0x3bc911 / _0x55ad02.order.length;
  const _0x4ceba7 = (_0x3bc911 + 1) / _0x55ad02.order.length;
  const _0x4ed328 = _0x1cea21.attributes.uv;
  for (let _0x5b97c8 = 0; _0x5b97c8 < _0x4ed328.count; _0x5b97c8++) {
    _0x4ed328.setXY(_0x5b97c8, _0x2686a2 + _0x4ed328.getX(_0x5b97c8) * (_0x4ceba7 - _0x2686a2), _0x4ed328.getY(_0x5b97c8));
  }
  _0x4ed328.needsUpdate = true;
  return _0x1cea21;
}
const Z = {};
let X = null;
if (O.state === "ready" && O.tex) {
  X = new _0x1a7e97.MeshBasicMaterial({
    map: O.tex,
    transparent: true,
    alphaTest: 0.025,
    depthWrite: false,
    side: _0x1a7e97.DoubleSide,
    forceSinglePass: true,
    fog: false
  });
  for (let Pt = 0; Pt < _0x55ad02.order.length; Pt++) {
    const Ut = _0x55ad02.order[Pt];
    const Gt = new _0x1a7e97.InstancedMesh(_(Pt), X, _0x13d5b7);
    Gt.frustumCulled = false;
    Gt.renderOrder = 3.5;
    _0x5739a7.add(Gt);
    Z[Ut] = Gt;
  }
}
const q = Object.values(Z);
const Q = Z.G || null;
const J = new _0x1a7e97.MeshBasicMaterial({
  color: _0x55171d.capsuleInk,
  fog: false,
  transparent: true,
  opacity: 0.92,
  depthWrite: false,
  toneMapped: false
});
const K = {};
for (const Dt of P) {
  const Nt = new _0x1a7e97.InstancedMesh(G[Dt] || G.R, J, _0x13d5b7);
  Nt.frustumCulled = false;
  Nt.renderOrder = 2.75;
  _0x5739a7.add(Nt);
  K[Dt] = Nt;
}
if (Q) {
  for (let Yt = 0; Yt < _0x13d5b7; Yt++) {
    Q.setMatrixAt(Yt, _0x5293da);
  }
}
const $ = P.map(_0xca4820 => K[_0xca4820]);
const ee = new _0x1a7e97.InstancedMesh(new _0x1a7e97.OctahedronGeometry(1, 0), new _0x1a7e97.MeshBasicMaterial({
  color: _0x55171d.muzzle,
  fog: false,
  depthWrite: false,
  toneMapped: false
}), _0x13d5b7);
ee.frustumCulled = false;
ee.renderOrder = 4;
_0x5739a7.add(ee);
const te = {
  R: {
    front: 1,
    frontCap: Infinity,
    tail: 0.38,
    wake: 0.16,
    wakeW: 0.05,
    trail: 0.026,
    segments: 2,
    fill: 0.72,
    gain: 0.58
  },
  S: {
    front: 0.82,
    frontCap: 0.36,
    tail: 0.16,
    wake: 0.05,
    wakeW: 0.04,
    trail: 0.016,
    segments: 1,
    fill: 0.42,
    gain: 0.28
  },
  L: {
    front: 1,
    frontCap: Infinity,
    tail: 1.28,
    wake: 0.36,
    wakeW: 0.075,
    trail: 0.052,
    segments: 3,
    fill: 0.8,
    gain: 0.82
  },
  H: {
    front: 0.9,
    frontCap: 0.36,
    tail: 0.48,
    wake: 0.34,
    wakeW: 0.14,
    trail: 0.075,
    segments: 3,
    fill: 0.9,
    gain: 0.7
  },
  F: {
    front: 0.95,
    frontCap: 0.42,
    tail: 0.46,
    wake: 0.48,
    wakeW: 0.235,
    trail: 0.14,
    segments: 2,
    fill: 0.68,
    gain: 0.78,
    coreColor: _0x55171d.muzzle
  }
};
const oe = new _0x1a7e97.BufferGeometry();
oe.setAttribute("position", new _0x1a7e97.Float32BufferAttribute([-0.5, 0, 0, -0.3, 0.5, 0, 0.5, 0.15, 0, 0.5, -0.15, 0, -0.3, -0.5, 0], 3));
oe.setIndex([0, 1, 2, 0, 2, 3, 0, 3, 4]);
oe.computeVertexNormals();
const re = new _0x1a7e97.InstancedMesh(oe, new _0x1a7e97.MeshBasicMaterial({
  color: 16777215,
  transparent: true,
  opacity: 0.3,
  fog: false,
  side: _0x1a7e97.DoubleSide,
  blending: _0x1a7e97.AdditiveBlending,
  depthWrite: false,
  forceSinglePass: true
}), _0x13d5b7);
function se(_0xbdb54d = false) {
  const _0x30ebd6 = new _0x1a7e97.BufferGeometry();
  const _0x18d003 = _0xbdb54d ? [[-0.91, -0.17, -0.75, -0.17, -0.82, 0], [-0.58, -0.17, -0.4, -0.17, -0.49, 0.22], [-0.23, -0.17, -0.05, -0.17, -0.13, 0.08]] : [[-1, -0.23, -0.7, -0.23, -0.82, 0.08], [-0.66, -0.23, -0.33, -0.23, -0.49, 0.42], [-0.3, -0.23, 0, -0.23, -0.13, 0.22]];
  const _0x23b3b0 = [];
  for (const _0x1d1b60 of _0x18d003) {
    _0x23b3b0.push(_0x1d1b60[0], _0x1d1b60[1], 0, _0x1d1b60[2], _0x1d1b60[3], 0, _0x1d1b60[4], _0x1d1b60[5], 0);
  }
  _0x30ebd6.setAttribute("position", new _0x1a7e97.Float32BufferAttribute(_0x23b3b0, 3));
  _0x30ebd6.computeVertexNormals();
  return _0x30ebd6;
}
re.frustumCulled = false;
re.renderOrder = 2;
_0x5739a7.add(re);
const ae = se();
const ne = se(true);
const ie = new _0x1a7e97.InstancedMesh(ae, new _0x1a7e97.MeshBasicMaterial({
  color: _0x55171d.shots.F,
  transparent: true,
  opacity: 0.9,
  fog: false,
  side: _0x1a7e97.DoubleSide,
  blending: _0x1a7e97.NormalBlending,
  depthWrite: false,
  forceSinglePass: true
}), _0x13d5b7);
const ce = new _0x1a7e97.InstancedMesh(ne, new _0x1a7e97.MeshBasicMaterial({
  color: _0x55171d.shots.S,
  transparent: true,
  opacity: 0.86,
  fog: false,
  side: _0x1a7e97.DoubleSide,
  blending: _0x1a7e97.NormalBlending,
  depthWrite: false,
  forceSinglePass: true
}), _0x13d5b7);
for (const Et of [ie, ce]) {
  Et.frustumCulled = false;
  Et.renderOrder = Et === ce ? 4.1 : 3.9;
  _0x5739a7.add(Et);
}
const le = _0x13d5b7 * 3;
const de = [0.72, 0.42, 0.2];
const pe = new _0x1a7e97.InstancedMesh(new _0x1a7e97.BoxGeometry(1, 1, 0.055), new _0x1a7e97.MeshBasicMaterial({
  color: 16777215,
  transparent: true,
  opacity: 0.68,
  fog: false,
  blending: _0x1a7e97.AdditiveBlending,
  depthWrite: false
}), le);
function fe(_0x57ffd3) {
  const _0x452b04 = new _0x1a7e97.BufferGeometry();
  _0x452b04.setAttribute("position", new _0x1a7e97.Float32BufferAttribute(_0x57ffd3, 3));
  _0x452b04.computeVertexNormals();
  return _0x452b04;
}
pe.frustumCulled = false;
pe.renderOrder = 2;
_0x5739a7.add(pe);
const he = {
  R: fe([-0.52, -0.12, 0, 0.18, -0.12, 0, -0.24, -0.48, 0, -0.52, 0.12, 0, -0.24, 0.48, 0, 0.18, 0.12, 0, -0.18, -0.1, 0, 0.5, -0.1, 0, 0.5, 0.1, 0, -0.18, -0.1, 0, 0.5, 0.1, 0, -0.18, 0.1, 0]),
  H: fe([-0.5, -0.46, 0, 0.18, -0.1, 0, -0.18, -0.08, 0, -0.5, 0.46, 0, -0.18, 0.08, 0, 0.18, 0.1, 0, -0.2, -0.09, 0, 0.5, -0.09, 0, 0.5, 0.09, 0, -0.2, -0.09, 0, 0.5, 0.09, 0, -0.2, 0.09, 0])
};
const ue = {
  R: {
    back: 0.58,
    sx: 0.58,
    sy: 0.25,
    color: _0x55171d.modCapsule
  },
  H: {
    back: 0.64,
    sx: 0.66,
    sy: 0.38,
    color: _0x55171d.muzzle
  }
};
const me = {};
for (const _t of Object.keys(he)) {
  const Zt = new _0x1a7e97.InstancedMesh(he[_t], new _0x1a7e97.MeshBasicMaterial({
    color: ue[_t].color,
    transparent: true,
    opacity: 0.92,
    fog: false,
    side: _0x1a7e97.DoubleSide,
    depthWrite: false,
    toneMapped: false,
    forceSinglePass: true
  }), _0x13d5b7);
  Zt.frustumCulled = false;
  Zt.renderOrder = 3.25;
  _0x5739a7.add(Zt);
  me[_t] = Zt;
}
const Me = Object.values(me);
const xe = {
  rapid: fe([-0.5, -0.48, 0, -0.12, 0, 0, -0.5, 0.48, 0, 0.02, -0.48, 0, 0.4, 0, 0, 0.02, 0.48, 0]),
  heavy: fe([-0.5, -0.34, 0, 0.18, -0.34, 0, 0.5, -0.12, 0, -0.5, -0.34, 0, 0.5, -0.12, 0, -0.18, -0.12, 0, -0.5, 0.12, 0, 0.5, 0.12, 0, 0.18, 0.34, 0, -0.5, 0.12, 0, 0.18, 0.34, 0, -0.5, 0.34, 0]),
  forked: fe([0.5, -0.07, 0, -0.06, -0.07, 0, -0.5, -0.42, 0, 0.5, -0.07, 0, -0.5, -0.42, 0, -0.34, -0.18, 0, 0.5, 0.07, 0, -0.34, 0.18, 0, -0.5, 0.42, 0, 0.5, 0.07, 0, -0.5, 0.42, 0, -0.06, 0.07, 0, -0.18, -0.1, 0, 0.5, -0.1, 0, 0.5, 0.1, 0, -0.18, -0.1, 0, 0.5, 0.1, 0, -0.18, 0.1, 0]),
  seeker: fe([-0.5, 0.48, 0, -0.1, 0.48, 0, -0.1, 0.34, 0, -0.5, 0.48, 0, -0.1, 0.34, 0, -0.5, 0.34, 0, -0.5, 0.34, 0, -0.38, 0.34, 0, -0.38, 0.08, 0, -0.5, 0.34, 0, -0.38, 0.08, 0, -0.5, 0.08, 0, 0.1, -0.48, 0, 0.5, -0.48, 0, 0.5, -0.34, 0, 0.1, -0.48, 0, 0.5, -0.34, 0, 0.1, -0.34, 0, 0.38, -0.34, 0, 0.5, -0.34, 0, 0.5, -0.08, 0, 0.38, -0.34, 0, 0.5, -0.08, 0, 0.38, -0.08, 0]),
  phase: fe([-0.5, -0.34, 0, 0.04, -0.34, 0, 0.04, -0.2, 0, -0.5, -0.34, 0, 0.04, -0.2, 0, -0.5, -0.2, 0, 0.18, -0.2, 0, 0.5, -0.2, 0, 0.5, -0.06, 0, 0.18, -0.2, 0, 0.5, -0.06, 0, 0.18, -0.06, 0, -0.5, 0.2, 0, 0.04, 0.2, 0, 0.04, 0.34, 0, -0.5, 0.2, 0, 0.04, 0.34, 0, -0.5, 0.34, 0, 0.18, 0.06, 0, 0.5, 0.06, 0, 0.5, 0.2, 0, 0.18, 0.06, 0, 0.5, 0.2, 0, 0.18, 0.2, 0, -0.16, -0.11, 0, 0.24, -0.11, 0, 0.4, 0, 0, -0.16, -0.11, 0, 0.4, 0, 0, -0.16, 0.11, 0]),
  volatile: fe([-0.5, 0.34, 0, -0.18, 0.34, 0, -0.34, 0.1, 0, -0.1, 0.34, 0, 0.22, 0.34, 0, 0.06, 0.08, 0, 0.18, 0.34, 0, 0.5, 0.34, 0, 0.34, 0.1, 0, -0.5, -0.34, 0, -0.34, -0.1, 0, -0.18, -0.34, 0, -0.1, -0.34, 0, 0.06, -0.08, 0, 0.22, -0.34, 0, 0.18, -0.34, 0, 0.34, -0.1, 0, 0.5, -0.34, 0])
};
const ye = {
  rapid: {
    color: _0x55171d.muzzle,
    opacity: 0.78
  },
  heavy: {
    color: _0x55171d.modCapsule,
    opacity: 0.92
  },
  forked: {
    color: _0x55171d.capsule,
    opacity: 0.86
  },
  seeker: {
    color: _0x55171d.capsule,
    opacity: 0.88
  },
  phase: {
    color: _0x55171d.shots.L,
    opacity: 0.88
  },
  volatile: {
    color: _0x55171d.shots.F,
    opacity: 0.9
  }
};
const we = Object.keys(xe);
const Ae = {};
for (const Xt of we) {
  const qt = ye[Xt];
  const Qt = new _0x1a7e97.InstancedMesh(xe[Xt], new _0x1a7e97.MeshBasicMaterial({
    color: qt.color,
    transparent: true,
    opacity: qt.opacity,
    fog: false,
    side: _0x1a7e97.DoubleSide,
    blending: _0x1a7e97.NormalBlending,
    depthWrite: false,
    toneMapped: false,
    forceSinglePass: true,
    depthTest: Xt !== "phase"
  }), _0x13d5b7);
  Qt.frustumCulled = false;
  Qt.renderOrder = Xt === "phase" ? 8 : Xt === "heavy" ? 3 : 2;
  _0x5739a7.add(Qt);
  Ae[Xt] = Qt;
}
const ge = we.map(_0x3d4cb4 => Ae[_0x3d4cb4]);
const ve = {};
for (const Jt of we) {
  const Kt = ye[Jt];
  const $t = new _0x1a7e97.InstancedMesh(xe[Jt], new _0x1a7e97.MeshBasicMaterial({
    color: Kt.color,
    transparent: true,
    opacity: Kt.opacity * 0.58,
    fog: false,
    side: _0x1a7e97.DoubleSide,
    blending: _0x1a7e97.NormalBlending,
    depthWrite: false,
    toneMapped: false,
    depthTest: Jt !== "phase",
    forceSinglePass: true
  }), _0x13d5b7);
  $t.frustumCulled = false;
  $t.renderOrder = Jt === "phase" ? 7.5 : 1.9;
  _0x5739a7.add($t);
  ve[Jt] = $t;
}
const Ce = we.map(_0x507bed => ve[_0x507bed]);
const ke = new _0x1a7e97.Matrix4();
const be = new _0x1a7e97.Quaternion();
const Se = new _0x1a7e97.Euler();
const ze = new _0x1a7e97.Vector3();
const je = new _0x1a7e97.Vector3();
const Fe = new _0x1a7e97.Vector3();
const He = new _0x1a7e97.Vector3();
const Ve = new _0x1a7e97.Vector3();
const Be = new _0x1a7e97.Vector3();
const Re = new _0x1a7e97.Vector3();
const Oe = new _0x1a7e97.Vector3();
const Te = new _0x1a7e97.Vector3();
const Ie = new _0x1a7e97.Vector3();
const We = new _0x1a7e97.Vector3();
const Le = new _0x1a7e97.Vector3();
const Pe = new _0x1a7e97.Vector3();
const Ue = new _0x1a7e97.Vector3();
const Ge = new _0x1a7e97.Vector3();
const De = new _0x1a7e97.Vector3();
const Ne = new _0x1a7e97.Vector3(1, 0, 0);
const Ye = new _0x1a7e97.Quaternion();
const Ee = new _0x1a7e97.Color();
const _e = new _0x1a7e97.Color();
const Ze = new _0x1a7e97.Color();
for (const eo of q) {
  for (let to = 0; to < _0x13d5b7; to++) {
    eo.setColorAt(to, Ee.setHex(16777215));
  }
  eo.instanceColor.needsUpdate = true;
}
for (const oo of P) {
  D[oo].setColorAt(0, Ee.setHex(16777215));
  for (let ro = 0; ro < _0x13d5b7; ro++) {
    D[oo].setMatrixAt(ro, _0x5293da);
    K[oo].setMatrixAt(ro, _0x5293da);
    if (Z[oo]) {
      Z[oo].setMatrixAt(ro, _0x5293da);
    }
  }
}
for (let so = 0; so < _0x13d5b7; so++) {
  ee.setMatrixAt(so, _0x5293da);
}
for (let ao = 0; ao < _0x13d5b7; ao++) {
  ie.setMatrixAt(ao, _0x5293da);
  ce.setMatrixAt(ao, _0x5293da);
}
re.setColorAt(0, Ee.setHex(16777215));
for (let no = 0; no < _0x13d5b7; no++) {
  re.setMatrixAt(no, _0x5293da);
}
pe.setColorAt(0, Ee.setHex(16777215));
for (let io = 0; io < le; io++) {
  pe.setMatrixAt(io, _0x5293da);
}
for (const co of ge) {
  for (let lo = 0; lo < _0x13d5b7; lo++) {
    co.setMatrixAt(lo, _0x5293da);
  }
}
for (const po of Ce) {
  for (let fo = 0; fo < _0x13d5b7; fo++) {
    po.setMatrixAt(fo, _0x5293da);
  }
}
const Xe = new Set([...q, ...N, ...$, ...Me, ee, ie, ce, re, pe, ...ge, ...Ce]);
function qe(_0x4a1111) {
  if (_0x4a1111) {
    Xe.add(_0x4a1111);
  }
}
function Qe(_0x58b736, _0x2ac690 = true) {
  qe(Z[_0x58b736]);
  qe(D[_0x58b736]);
  qe(K[_0x58b736]);
  qe(me[_0x58b736]);
  qe(ee);
  qe(Q);
  qe(ie);
  qe(ce);
  qe(re);
  if (_0x2ac690) {
    qe(pe);
  }
  for (const _0x23d018 of ge) {
    qe(_0x23d018);
  }
  for (const _0x4ae299 of Ce) {
    qe(_0x4ae299);
  }
}
function Je() {
  for (const _0x40d96c of Xe) {
    _0x40d96c.instanceMatrix.needsUpdate = true;
  }
  const _0x39397c = Xe.size;
  Xe.clear();
  return _0x39397c;
}
if (Q) {
  Xe.add(Q);
}
for (const ho of Me) {
  for (let uo = 0; uo < _0x13d5b7; uo++) {
    ho.setMatrixAt(uo, _0x5293da);
  }
}
const Ke = new Array(_0x13d5b7).fill("");
const $e = new Uint8Array(_0x13d5b7);
const et = new Uint8Array(_0x13d5b7);
const tt = new Array(_0x13d5b7).fill(null);
const ot = new Uint8Array(_0x13d5b7);
const rt = new Float32Array(_0x13d5b7);
const st = {
  R: 0,
  S: 0,
  L: 0,
  H: 0,
  F: 0
};
const at = {
  hostile: 0,
  terrain: 0,
  lifetime: 0,
  bend: 0,
  pool: 0,
  reset: 0
};
const nt = Object.freeze({
  count: 1,
  speed: 2.2,
  ms: 120,
  size: 0.1,
  gravity: -6
});
const it = {
  reason: "none",
  effect: "none",
  s: 0,
  y: 0,
  type: ""
};
const ct = {
  reason: "none",
  s: 0,
  surfaceY: 0,
  kind: ""
};
let lt = 0;
const dt = new Uint8Array(_0x13d5b7);
const pt = new Float32Array(_0x13d5b7 * 4);
const ft = new Float32Array(_0x13d5b7 * 4);
const ht = new Float32Array(_0x13d5b7 * 4);
function ut(_0x4729a6, _0xb76c12) {
  return _0x4729a6 * 3 + _0xb76c12;
}
function mt(_0x4985de, _0x390ad6) {
  return _0x4985de * 4 + _0x390ad6;
}
function Mt(_0x2006e9, _0x36aecb, _0x4e167e = null) {
  Qe(_0x36aecb);
  if ($e[_0x2006e9]) {
    Qe(Ke[_0x2006e9]);
  }
  dt[_0x2006e9] = 0;
  if (Q) {
    Q.setMatrixAt(_0x2006e9, _0x5293da);
  }
  ie.setMatrixAt(_0x2006e9, _0x5293da);
  ce.setMatrixAt(_0x2006e9, _0x5293da);
  const _0x1c6c71 = D[_0x36aecb] ? _0x36aecb : "R";
  const _0x428884 = te[_0x36aecb] || te.R;
  const _0x412d6e = _0x55171d.shots[_0x36aecb] || _0x55171d.shots.R;
  const _0x415b50 = _0x4e167e ? _0x4e167e.tier : 0;
  const _0x4a653f = _0x4e167e ? _0x4e167e.rapid : 0;
  const _0x4adf28 = _0x4e167e ? _0x4e167e.heavy : 0;
  const _0x4a72bf = _0x4e167e ? _0x4e167e.forked : 0;
  const _0x5c17b6 = _0x4e167e ? _0x4e167e.seeker : 0;
  const _0x56e09a = _0x4e167e ? _0x4e167e.phase : 0;
  const _0x2a5ede = _0x4e167e ? _0x4e167e.volatile : 0;
  const _0x1d976f = _0x481d8a();
  const _0x5b91e5 = _0x2cc9e0(_0x5d67c9(), _0x51086e.score.max);
  const _0x57ae16 = _0x24b600 < _0x25e7e3.rageUntil;
  const _0xbc82e7 = _0x57ae16 ? 0.16 + _0x2b6b79(_0x24b600) * 0.1 : _0x26dd8b(_0x1d976f, _0x5b91e5);
  const _0x41996b = _0x57ae16 ? _0x55171d.ragePower : _0x55171d.muzzle;
  if ($e[_0x2006e9] && D[Ke[_0x2006e9]]) {
    D[Ke[_0x2006e9]].setMatrixAt(_0x2006e9, _0x5293da);
    K[Ke[_0x2006e9]].setMatrixAt(_0x2006e9, _0x5293da);
    if (Z[Ke[_0x2006e9]]) {
      Z[Ke[_0x2006e9]].setMatrixAt(_0x2006e9, _0x5293da);
    }
    if (me[Ke[_0x2006e9]]) {
      me[Ke[_0x2006e9]].setMatrixAt(_0x2006e9, _0x5293da);
    }
  }
  Ke[_0x2006e9] = _0x1c6c71;
  tt[_0x2006e9] = _0x4e167e;
  ot[_0x2006e9] = _0x57ae16 ? 3 : _0x1d976f;
  rt[_0x2006e9] = _0xbc82e7;
  $e[_0x2006e9] = 1;
  et[_0x2006e9] = 0;
  Ee.setHex(_0x428884.coreColor || _0x412d6e);
  if (_0x4a653f) {
    Ee.lerp(_e.setHex(_0x55171d.muzzle), Math.min(0.2, _0x4a653f * 0.07));
  }
  if (_0x4adf28) {
    Ee.lerp(_e.setHex(_0x55171d.modCapsule), Math.min(0.58, _0x4adf28 * 0.24));
  }
  if (_0x4a72bf) {
    Ee.lerp(_e.setHex(_0x55171d.capsule), Math.min(0.46, _0x4a72bf * 0.17));
  }
  if (_0x5c17b6) {
    Ee.lerp(_e.setHex(_0x55171d.capsule), Math.min(0.58, _0x5c17b6 * 0.22));
  }
  if (_0x56e09a) {
    Ee.lerp(_e.setHex(_0x55171d.shots.L), Math.min(0.64, _0x56e09a * 0.24));
  }
  if (_0x2a5ede) {
    Ee.lerp(_e.setHex(_0x55171d.shots.F), Math.min(0.68, _0x2a5ede * 0.26));
  }
  if (_0xbc82e7) {
    Ee.lerp(Ze.setHex(_0x41996b), _0xbc82e7 * 0.62);
  }
  D[_0x1c6c71].setColorAt(_0x2006e9, Ee);
  if (Z[_0x1c6c71]) {
    Ee.setHex(16777215);
    if (_0xbc82e7) {
      Ee.lerp(Ze.setHex(_0x41996b), _0xbc82e7 * 0.28);
    }
    Ee.multiplyScalar(1 + _0xbc82e7 * 0.16);
    Z[_0x1c6c71].setColorAt(_0x2006e9, Ee);
  }
  Ee.setHex(_0x412d6e);
  if (_0x5c17b6) {
    Ee.lerp(_e.setHex(_0x55171d.capsule), Math.min(0.66, 0.24 + _0x5c17b6 * 0.13));
  }
  if (_0x56e09a) {
    Ee.lerp(_e.setHex(_0x55171d.shots.L), Math.min(0.64, 0.22 + _0x56e09a * 0.14));
  }
  if (_0x2a5ede) {
    Ee.lerp(_e.setHex(_0x55171d.shots.F), Math.min(0.72, 0.28 + _0x2a5ede * 0.14));
  }
  if (_0xbc82e7) {
    Ee.lerp(Ze.setHex(_0x41996b), _0xbc82e7);
  }
  Ee.multiplyScalar(_0x428884.gain * (1 + _0x415b50 * 0.035) * (1 + _0xbc82e7 * 0.42));
  re.setColorAt(_0x2006e9, Ee);
  for (let _0x3b6f37 = 0; _0x3b6f37 < 3; _0x3b6f37++) {
    Ee.setHex(_0x412d6e);
    if (_0x5c17b6) {
      Ee.lerp(_e.setHex(_0x55171d.capsule), Math.min(0.72, 0.28 + _0x5c17b6 * 0.15));
    }
    if (_0x56e09a) {
      Ee.lerp(_e.setHex(_0x55171d.shots.L), Math.min(0.66, 0.24 + _0x56e09a * 0.14));
    }
    if (_0x2a5ede) {
      Ee.lerp(_e.setHex(_0x55171d.shots.F), Math.min(0.72, 0.26 + _0x2a5ede * 0.15));
    }
    if (_0xbc82e7) {
      Ee.lerp(Ze.setHex(_0x41996b), _0xbc82e7 * 0.78);
    }
    Ee.multiplyScalar(de[_0x3b6f37] * (1 + _0x415b50 * 0.025) * (1 + _0xbc82e7 * 0.3));
    pe.setColorAt(ut(_0x2006e9, _0x3b6f37), Ee);
  }
  D[_0x1c6c71].instanceColor.needsUpdate = true;
  if (Z[_0x1c6c71]) {
    Z[_0x1c6c71].instanceColor.needsUpdate = true;
  }
  re.instanceColor.needsUpdate = true;
  pe.instanceColor.needsUpdate = true;
}
function xt(_0x405cbe) {
  Qe(Ke[_0x405cbe]);
  if (D[Ke[_0x405cbe]]) {
    D[Ke[_0x405cbe]].setMatrixAt(_0x405cbe, _0x5293da);
    K[Ke[_0x405cbe]].setMatrixAt(_0x405cbe, _0x5293da);
    if (Z[Ke[_0x405cbe]]) {
      Z[Ke[_0x405cbe]].setMatrixAt(_0x405cbe, _0x5293da);
    }
    if (me[Ke[_0x405cbe]]) {
      me[Ke[_0x405cbe]].setMatrixAt(_0x405cbe, _0x5293da);
    }
  }
  ee.setMatrixAt(_0x405cbe, _0x5293da);
  if (Q) {
    Q.setMatrixAt(_0x405cbe, _0x5293da);
  }
  ie.setMatrixAt(_0x405cbe, _0x5293da);
  ce.setMatrixAt(_0x405cbe, _0x5293da);
  re.setMatrixAt(_0x405cbe, _0x5293da);
  for (const _0x5d00c4 of ge) {
    _0x5d00c4.setMatrixAt(_0x405cbe, _0x5293da);
  }
  for (const _0x595be7 of Ce) {
    _0x595be7.setMatrixAt(_0x405cbe, _0x5293da);
  }
  dt[_0x405cbe] = 0;
  for (let _0x1c91da = 0; _0x1c91da < 3; _0x1c91da++) {
    pe.setMatrixAt(ut(_0x405cbe, _0x1c91da), _0x5293da);
  }
}
function yt(_0x45c9a4, _0x30fd35, _0x19d891, _0x54c0e3, _0x37e7b8 = "deck-ignite", _0x4f3775 = "deck") {
  qe(pe);
  lt++;
  ct.reason = _0x37e7b8;
  ct.s = _0x19d891;
  ct.surfaceY = _0x54c0e3;
  ct.kind = _0x4f3775;
  dt[_0x45c9a4] = 0;
  for (let _0x4c6188 = 0; _0x4c6188 < 3; _0x4c6188++) {
    pe.setMatrixAt(ut(_0x45c9a4, _0x4c6188), _0x5293da);
  }
  if (et[_0x45c9a4] || !vt(_0x19d891)) {
    return;
  }
  const _0x5bc158 = _0x30fd35.dir || Math.sign(_0x30fd35.vx) || 1;
  const _0x4bdd51 = _0x54c0e3 + (_0x30fd35.def?.hugY || _0x51086e.weapons.F.hugY) * 0.48;
  _0x532981(82, 0.3, _0x19d891, _0x4bdd51, _0x55171d.muzzle, 0.028);
  _0x49941f(_0x19d891, _0x4bdd51, _0x55171d.shots.F, _0x5bc158, -0.38, 0.34, 0.045);
  _0x345479(_0x51086e.juice.impact, _0x19d891, _0x4bdd51, _0x55171d.shots.F, -_0x5bc158, 0.62, 0.42, 0.31);
  _0x34bc16(_0x19d891, _0x4bdd51, _0x55171d.shots.F, -_0x5bc158, 0.26, 0.018);
}
function wt(_0x5d3a73, _0x28851b = null, _0x46c104 = "pool") {
  if (!$e[_0x5d3a73]) {
    return;
  }
  if (at[_0x46c104] !== undefined) {
    at[_0x46c104]++;
  }
  it.reason = _0x46c104;
  it.effect = "none";
  it.s = _0x28851b ? _0x28851b.x : 0;
  it.y = _0x28851b ? _0x28851b.y : 0;
  it.type = Ke[_0x5d3a73];
  const _0x1c502d = _0x28851b && !et[_0x5d3a73] && vt(_0x28851b.x);
  const _0x456dcc = _0x28851b?.meta?.volatile || tt[_0x5d3a73]?.volatile;
  if (_0x1c502d && !_0x456dcc) {
    if (_0x46c104 === "hostile" || _0x46c104 === "terrain") {
      (function (_0x54402e, _0x47d382, _0xb03bb) {
        const _0x4cbee8 = Ke[_0x54402e];
        st[_0x4cbee8] = (st[_0x4cbee8] || 0) + 1;
        const _0xca5728 = _0x47d382.x;
        const _0xb1ff56 = _0x47d382.y;
        const _0x3315b1 = Math.max(0.001, Math.hypot(_0x47d382.vx, _0x47d382.vy));
        const _0x318ae3 = _0x47d382.crawling ? _0x47d382.dir : _0x47d382.vx / _0x3315b1;
        const _0xa56e21 = _0x47d382.crawling ? 0 : _0x47d382.vy / _0x3315b1;
        const _0x1221c1 = -_0xa56e21;
        const _0x356d6a = _0x318ae3;
        switch (_0x4cbee8) {
          case "S":
            _0x450aa0(72, 0.76, 0.14, _0xca5728, _0xb1ff56, _0x55171d.shots.S, _0x1221c1, _0x356d6a, 0.04);
            _0x345479(_0x51086e.juice.impact, _0xca5728, _0xb1ff56, _0x55171d.shots.S, -_0x318ae3, -_0xa56e21, 0.92, 0.48);
            break;
          case "L":
            _0x450aa0(64, 0.86, 0.075, _0xca5728, _0xb1ff56, _0x55171d.shots.L, _0x318ae3, _0xa56e21, 0.05);
            _0x345479(_0x51086e.juice.impact, _0xca5728, _0xb1ff56, _0x55171d.shots.L, -_0x318ae3, -_0xa56e21, 0.1, 0.34);
            break;
          case "H":
            _0x450aa0(74, 0.64, 0.105, _0xca5728, _0xb1ff56, _0x55171d.shots.H, _0x1221c1, _0x356d6a, 0.045);
            _0x345479(_0x51086e.juice.impact, _0xca5728, _0xb1ff56, _0x55171d.shots.H, _0x1221c1, _0x356d6a, 0.32, 0.44);
            break;
          case "F":
            if (_0xb03bb !== "hostile") {
              _0x450aa0(86, 0.84, 0.22, _0xca5728, _0xb1ff56, _0x55171d.shots.F, _0x318ae3, _0xa56e21, 0.05);
              _0x345479(_0x51086e.juice.impact, _0xca5728, _0xb1ff56, _0x55171d.shots.F, -_0x318ae3, Math.max(0.18, -_0xa56e21), 0.68, 0.38);
            }
            break;
          default:
            _0x450aa0(68, 0.58, 0.12, _0xca5728, _0xb1ff56, _0x55171d.shots.R, _0x318ae3, _0xa56e21, 0.045);
            _0x345479(_0x51086e.juice.impact, _0xca5728, _0xb1ff56, _0x55171d.shots.R, -_0x318ae3, Math.max(0.12, -_0xa56e21), 0.26, 0.34);
        }
        if (_0xb03bb === "terrain") {
          const _0x1f8f14 = _0x4cbee8 === "L" ? 0.56 : _0x4cbee8 === "F" ? 0.64 : 0.48;
          const _0x104db6 = _0x4cbee8 === "L" ? 2.25 : _0x4cbee8 === "R" ? 1.6 : 1.15;
          _0x49941f(_0xca5728, _0xb1ff56, _0x55171d.muzzle, _0x318ae3, _0xa56e21, _0x1f8f14, 0.045, _0x104db6);
          _0x4762da("machine", _0xca5728, _0xb1ff56, _0x55171d.shots[_0x4cbee8] || _0x55171d.shots.R, -_0x318ae3, -_0xa56e21, _0x4cbee8 === "F" ? 0.58 : 0.46);
          if (_0x4cbee8 === "F") {
            _0x34bc16(_0xca5728, _0xb1ff56, _0x55171d.shots.F, -_0x318ae3, 0.52, 0.02);
          }
        }
      })(_0x5d3a73, _0x28851b, _0x46c104);
      it.effect = "impact";
    } else if (_0x46c104 === "lifetime") {
      (function (_0x30bacc, _0x26b407) {
        const _0x1bf0ae = Ke[_0x30bacc];
        const _0x56a458 = Math.max(0.001, Math.hypot(_0x26b407.vx, _0x26b407.vy));
        const _0x5e30ee = _0x26b407.crawling ? _0x26b407.dir : _0x26b407.vx / _0x56a458;
        const _0x1e8ad6 = _0x26b407.crawling ? 0 : _0x26b407.vy / _0x56a458;
        _0x345479(nt, _0x26b407.x, _0x26b407.y, _0x55171d.shots[_0x1bf0ae] || _0x55171d.shots.R, -_0x5e30ee, -_0x1e8ad6, 0.08);
      })(_0x5d3a73, _0x28851b);
      it.effect = "sputter";
    }
  }
  xt(_0x5d3a73);
  $e[_0x5d3a73] = 0;
  et[_0x5d3a73] = 0;
  tt[_0x5d3a73] = null;
  ot[_0x5d3a73] = 0;
  rt[_0x5d3a73] = 0;
}
const At = _0x3a7a80 ? _0x2d9bcc : _0x159d18;
function gt() {
  if (_0x3a7a80) {
    return _0x595cb7;
  } else {
    return _0x53c48e();
  }
}
function vt(_0x415ec5) {
  return !!_0x2efb41 && !_0x3a7a80 || _0x40b15e(_0x415ec5, At) === gt() && _0x48aafd(_0x415ec5);
}
function Ct(_0x5ac200, _0x4a6881, _0x1c63c7, _0x5a2275, _0x28b589, _0x3d278e) {
  const _0x456d2c = dt[_0x5ac200];
  if (_0x456d2c === 0) {
    for (let _0x106541 = 0; _0x106541 < 4; _0x106541++) {
      const _0x1d3b5d = mt(_0x5ac200, _0x106541);
      pt[_0x1d3b5d] = _0x4a6881;
      ft[_0x1d3b5d] = _0x1c63c7;
      ht[_0x1d3b5d] = _0x5a2275;
    }
    dt[_0x5ac200] = 1;
    for (let _0x8ae712 = 0; _0x8ae712 < 3; _0x8ae712++) {
      pe.setMatrixAt(ut(_0x5ac200, _0x8ae712), _0x5293da);
    }
    return;
  }
  for (let _0x5ec940 = 3; _0x5ec940 > 0; _0x5ec940--) {
    const _0x14b0d8 = mt(_0x5ac200, _0x5ec940);
    const _0x75939f = mt(_0x5ac200, _0x5ec940 - 1);
    pt[_0x14b0d8] = pt[_0x75939f];
    ft[_0x14b0d8] = ft[_0x75939f];
    ht[_0x14b0d8] = ht[_0x75939f];
  }
  const _0x45518d = mt(_0x5ac200, 0);
  pt[_0x45518d] = _0x4a6881;
  ft[_0x45518d] = _0x1c63c7;
  ht[_0x45518d] = _0x5a2275;
  dt[_0x5ac200] = Math.min(4, _0x456d2c + 1);
  for (let _0x41436e = 0; _0x41436e < 3; _0x41436e++) {
    const _0x274314 = ut(_0x5ac200, _0x41436e);
    if (_0x41436e >= _0x28b589.segments || _0x41436e + 1 >= dt[_0x5ac200]) {
      pe.setMatrixAt(_0x274314, _0x5293da);
      continue;
    }
    const _0x5ae882 = mt(_0x5ac200, _0x41436e);
    const _0x190ad3 = mt(_0x5ac200, _0x41436e + 1);
    const _0x4c70df = pt[_0x5ae882] - pt[_0x190ad3];
    const _0x4f992b = ft[_0x5ae882] - ft[_0x190ad3];
    const _0x48524f = ht[_0x5ae882] - ht[_0x190ad3];
    const _0x5bbafc = Math.hypot(_0x4c70df, _0x4f992b, _0x48524f);
    if (_0x5bbafc < 0.01) {
      pe.setMatrixAt(_0x274314, _0x5293da);
      continue;
    }
    Le.set(_0x4c70df / _0x5bbafc, _0x4f992b / _0x5bbafc, _0x48524f / _0x5bbafc);
    Ye.setFromUnitVectors(Ne, Le);
    const _0x375940 = _0x5bbafc * _0x28b589.fill;
    Pe.set(pt[_0x5ae882] - Le.x * _0x375940 * 0.5, ft[_0x5ae882] - Le.y * _0x375940 * 0.5, ht[_0x5ae882] - Le.z * _0x375940 * 0.5);
    const _0x3388cd = 1 - _0x41436e * 0.18;
    Ue.set(_0x375940, _0x28b589.trail * _0x3388cd * _0x3d278e, 1);
    ke.compose(Pe, Ye, Ue);
    pe.setMatrixAt(_0x274314, ke);
  }
}
function kt(_0x30113b, _0x2426b5, _0x4945ab, _0x42e0a9, _0x481dd4, _0x20133c) {
  const _0x4221af = Ae[_0x2426b5];
  if (!_0x4945ab) {
    _0x4221af.setMatrixAt(_0x30113b, _0x5293da);
    return;
  }
  Ge.copy(je).addScaledVector(We, -_0x42e0a9);
  const _0x5f3264 = 1 + (_0x4945ab - 1) * 0.11;
  De.set(_0x481dd4 * _0x5f3264, _0x20133c * _0x5f3264 * L, 1);
  ke.compose(Ge, be, De);
  _0x4221af.setMatrixAt(_0x30113b, ke);
}
function bt(_0x205675, _0x50fd44, _0x4436bd, _0x575620, _0x56b45a, _0x1bf504) {
  const _0x39dea0 = ve[_0x50fd44];
  if (_0x4436bd < 2) {
    _0x39dea0.setMatrixAt(_0x205675, _0x5293da);
    return;
  }
  Ge.copy(je).addScaledVector(We, -_0x575620);
  const _0x45d168 = _0x4436bd >= 3 ? 1.24 : 1;
  De.set(_0x56b45a * _0x45d168, _0x1bf504 * _0x45d168 * L, 1);
  ke.compose(Ge, be, De);
  _0x39dea0.setMatrixAt(_0x205675, ke);
}
function St(_0x1ba553, _0x35b209, _0xbd9b7f = 1) {
  const _0x23d20f = Math.max(1, Math.min(3, Number(_0xbd9b7f) || 1));
  const _0x208097 = Math.max(0.82, Math.min(1.45, _0x35b209 / 1.2));
  const _0x88d687 = Math.max(0.001, Math.hypot(_0x1ba553.vx, _0x1ba553.vy));
  const _0x47a54a = _0x1ba553.crawling ? _0x1ba553.dir : _0x1ba553.vx / _0x88d687;
  const _0x84a10d = _0x1ba553.crawling ? 0.12 : _0x1ba553.vy / _0x88d687;
  _0x49941f(_0x1ba553.x, _0x1ba553.y, _0x55171d.muzzle, _0x47a54a, _0x84a10d, (0.72 + _0x23d20f * 0.13) * _0x208097, 0.055);
  _0x4762da("machine", _0x1ba553.x, _0x1ba553.y, _0x55171d.shots.F, _0x47a54a, _0x84a10d + 0.18, (0.62 + _0x23d20f * 0.12) * _0x208097);
  _0x34bc16(_0x1ba553.x, _0x1ba553.y, _0x55171d.shots.F, -_0x47a54a, (0.48 + _0x23d20f * 0.1) * _0x208097, 0.025);
  _0x345479(_0x51086e.juice.impact, _0x1ba553.x, _0x1ba553.y, _0x55171d.shots.F, _0x47a54a, _0x84a10d, 0.92, (0.64 + _0x23d20f * 0.17) * _0x208097);
  if (_0x23d20f >= 2) {
    _0x345479(_0x51086e.juice.impact, _0x1ba553.x, _0x1ba553.y, _0x55171d.capsule, -_0x47a54a, 0.32 - _0x84a10d * 0.3, 0.58, (0.38 + _0x23d20f * 0.1) * _0x208097);
  }
}
function zt(_0x57cc4f, _0x2aa0e2) {
  Qe(D[_0x2aa0e2.type] ? _0x2aa0e2.type : "R");
  if (!vt(_0x2aa0e2.x)) {
    xt(_0x57cc4f);
    et[_0x57cc4f] = 1;
    return;
  }
  et[_0x57cc4f] = 0;
  const _0x231b1a = _0x2df3f7(_0x2aa0e2.x, T);
  const _0x40adf5 = _0x2aa0e2.def || _0x51086e.weapons[_0x2aa0e2.type] || _0x51086e.weapons.R;
  const _0x11457b = te[_0x2aa0e2.type] || te.R;
  const _0x4cdf5a = D[_0x2aa0e2.type] ? _0x2aa0e2.type : "R";
  const _0x37042c = _0x2aa0e2.meta;
  const _0x10b4c0 = _0x37042c ? _0x37042c.tier : 0;
  const _0x15e472 = _0x37042c ? _0x37042c.heavy : 0;
  const _0x12a098 = _0x37042c ? _0x37042c.rapid : 0;
  const _0x445392 = _0x37042c ? _0x37042c.forked : 0;
  const _0x380ec3 = _0x37042c ? _0x37042c.seeker : 0;
  const _0xef3157 = _0x37042c ? _0x37042c.phase : 0;
  const _0x5b998d = _0x37042c ? _0x37042c.volatile : 0;
  const _0x5be243 = _0x2aa0e2.type === "F" && _0x2aa0e2.crawling;
  const _0x32a608 = _0x5be243 && _0x40adf5.crawlScale ? _0x40adf5.crawlScale : _0x40adf5.scale;
  const _0x1ac8a3 = _0x5be243 ? _0x40adf5.crawlSpeed : Math.hypot(_0x2aa0e2.vx, _0x2aa0e2.vy);
  const _0x1e858e = _0x3c5f69(_0x32a608[0] * _0x51086e.rifle.radius, _0x1ac8a3, _0x5593ca);
  const _0x5861e6 = Math.min(_0x1e858e * _0x11457b.front, _0x11457b.frontCap);
  const _0x9dc351 = _0x11457b.tail * (_0x5be243 ? 1.22 : 1);
  const _0x51416a = _0x5be243 ? _0x2aa0e2.dir < 0 ? Math.PI : 0 : Math.atan2(_0x2aa0e2.vy, _0x2aa0e2.vx);
  be.setFromEuler(Se.set(0, _0x231b1a.yaw, _0x51416a, "YZX"));
  je.set(_0x231b1a.x + Math.sin(_0x231b1a.yaw) * W, _0x2aa0e2.y + _0x231b1a.alt, _0x231b1a.z + Math.cos(_0x231b1a.yaw) * W);
  const _0xe7bd10 = Math.cos(_0x51416a);
  const _0xa11d2f = Math.sin(_0x51416a);
  We.set(Math.cos(_0x231b1a.yaw) * _0xe7bd10, _0xa11d2f, -Math.sin(_0x231b1a.yaw) * _0xe7bd10);
  Fe.copy(je).addScaledVector(We, (_0x5861e6 - _0x9dc351) * 0.5);
  const _0x2d544e = 1 + _0x10b4c0 * 0.035 + Math.min(0.95, _0x15e472 * 0.27) + Math.min(0.52, _0x5b998d * 0.14);
  const _0x58017e = 1 + _0x10b4c0 * 0.05 + Math.min(0.78, _0x380ec3 * 0.24) + Math.min(0.88, _0x5b998d * 0.29);
  const _0x1155cb = 1 + _0x10b4c0 * 0.04 + Math.min(0.82, _0x380ec3 * 0.27) + Math.min(0.54, _0xef3157 * 0.13) + Math.min(0.58, _0x5b998d * 0.16);
  if (_0x5be243) {
    D[_0x4cdf5a].setMatrixAt(_0x57cc4f, _0x5293da);
    K[_0x4cdf5a].setMatrixAt(_0x57cc4f, _0x5293da);
    if (Z[_0x4cdf5a]) {
      Z[_0x4cdf5a].setMatrixAt(_0x57cc4f, _0x5293da);
    }
    if (me[_0x4cdf5a]) {
      me[_0x4cdf5a].setMatrixAt(_0x57cc4f, _0x5293da);
    }
    ee.setMatrixAt(_0x57cc4f, _0x5293da);
    for (const _0x90150b of ge) {
      _0x90150b.setMatrixAt(_0x57cc4f, _0x5293da);
    }
    for (const _0x474a45 of Ce) {
      _0x474a45.setMatrixAt(_0x57cc4f, _0x5293da);
    }
    const _0x274ffe = 1.95 + Math.min(0.42, _0x15e472 * 0.11) + Math.min(0.22, _0x5b998d * 0.07);
    if (Q) {
      const _0x26da21 = _0x274ffe / Y;
      Ve.copy(je).addScaledVector(We, -_0x274ffe * 0.5);
      Ve.y -= 0.08;
      Be.set(_0x26da21, _0x26da21 * (1.4 + _0x15e472 * 0.035) * L, 1);
      ke.compose(Ve, be, Be);
      Q.setMatrixAt(_0x57cc4f, ke);
      ie.setMatrixAt(_0x57cc4f, _0x5293da);
      ce.setMatrixAt(_0x57cc4f, _0x5293da);
    } else {
      Ve.copy(je);
      Ve.y -= L * 0.1;
      Be.set(_0x274ffe, (0.92 + _0x15e472 * 0.06) * L, 1);
      ke.compose(Ve, be, Be);
      ie.setMatrixAt(_0x57cc4f, ke);
      Ve.copy(je).addScaledVector(We, -0.04);
      Ve.y -= L * 0.1;
      Be.set(_0x274ffe, L * 0.92, 1);
      ke.compose(Ve, be, Be);
      ce.setMatrixAt(_0x57cc4f, ke);
    }
    Te.copy(je).addScaledVector(We, -0.43);
    Ie.set(0.86 + _0x15e472 * 0.06, _0x58017e * 0.16, 1);
    ke.compose(Te, be, Ie);
    re.setMatrixAt(_0x57cc4f, ke);
    Ct(_0x57cc4f, je.x, je.y, je.z, _0x11457b, _0x1155cb * 0.82);
    return;
  }
  if (Q) {
    Q.setMatrixAt(_0x57cc4f, _0x5293da);
  }
  ie.setMatrixAt(_0x57cc4f, _0x5293da);
  ce.setMatrixAt(_0x57cc4f, _0x5293da);
  const _0x30bab4 = Z[_0x4cdf5a];
  if (_0x30bab4) {
    const _0x12cc83 = E[_0x4cdf5a] || E.R;
    const _0x487e01 = Math.min(_0x5861e6, _0x12cc83.frontCap);
    const _0x19c996 = _0x12cc83.tail * (_0x5be243 ? 1.12 : 1);
    const _0x3e44a4 = (_0x487e01 + _0x19c996) / Y;
    const _0x4e5caf = 1 + Math.min(0.26, _0x10b4c0 * 0.035 + _0x15e472 * 0.045 + _0x380ec3 * 0.025 + _0x5b998d * 0.035);
    Ve.copy(je).addScaledVector(We, (_0x487e01 - _0x19c996) * 0.5);
    Be.set(_0x3e44a4, _0x3e44a4 * _0x12cc83.thickness * _0x4e5caf * L, 1);
    ke.compose(Ve, be, Be);
    _0x30bab4.setMatrixAt(_0x57cc4f, ke);
    D[_0x4cdf5a].setMatrixAt(_0x57cc4f, _0x5293da);
    K[_0x4cdf5a].setMatrixAt(_0x57cc4f, _0x5293da);
    ee.setMatrixAt(_0x57cc4f, _0x5293da);
    if (me[_0x4cdf5a]) {
      me[_0x4cdf5a].setMatrixAt(_0x57cc4f, _0x5293da);
    }
  } else {
    ze.set((_0x5861e6 + _0x9dc351) / (I * 2), _0x2d544e * 1 * L, _0x2d544e * 1 * L);
    He.set(ze.x * 1.025, ze.y * 1.46, ze.z * 1.46);
    ke.compose(Fe, be, He);
    K[_0x4cdf5a].setMatrixAt(_0x57cc4f, ke);
    ke.compose(Fe, be, ze);
    D[_0x4cdf5a].setMatrixAt(_0x57cc4f, ke);
    const _0x3c3a2b = Math.max(0.045, Math.min(0.14, _0x5861e6 * 0.42));
    Re.copy(je).addScaledVector(We, _0x5861e6 - _0x3c3a2b);
    const _0x2b318e = (0.065 + Math.min(0.035, _0x15e472 * 0.012)) * 1 * L;
    Oe.set(_0x3c3a2b, _0x2b318e, _0x2b318e);
    ke.compose(Re, be, Oe);
    ee.setMatrixAt(_0x57cc4f, ke);
  }
  const _0x22b740 = _0x5861e6 * 0.82;
  const _0x257aed = _0x9dc351 + _0x11457b.wake;
  Te.copy(je).addScaledVector(We, (_0x22b740 - _0x257aed) * 0.5);
  Ie.set(_0x22b740 + _0x257aed, _0x11457b.wakeW * 1 * _0x58017e, 1);
  ke.compose(Te, be, Ie);
  re.setMatrixAt(_0x57cc4f, ke);
  if (!_0x30bab4) {
    (function (_0x15fe55, _0x41beff) {
      const _0xc3f490 = me[_0x41beff];
      if (!_0xc3f490) {
        return;
      }
      const _0x9d59a0 = ue[_0x41beff];
      Ge.copy(je).addScaledVector(We, -_0x9d59a0.back);
      De.set(_0x9d59a0.sx, _0x9d59a0.sy * L, 1);
      ke.compose(Ge, be, De);
      _0xc3f490.setMatrixAt(_0x15fe55, ke);
    })(_0x57cc4f, _0x4cdf5a);
  }
  kt(_0x57cc4f, "rapid", _0x12a098, _0x9dc351 + 0.28, 0.54, 0.16);
  kt(_0x57cc4f, "heavy", _0x15e472, 0.64, 0.72, 0.58);
  kt(_0x57cc4f, "forked", _0x445392, _0x9dc351 + 0.18, 0.58, 0.27);
  kt(_0x57cc4f, "seeker", _0x380ec3, 0.3, 0.23, 0.27);
  kt(_0x57cc4f, "phase", _0xef3157, _0x9dc351 + 0.38, 0.92, 0.27);
  kt(_0x57cc4f, "volatile", _0x5b998d, 0.91, 0.24, 0.25);
  bt(_0x57cc4f, "rapid", _0x12a098, _0x9dc351 + 0.82, 0.54, 0.13);
  bt(_0x57cc4f, "heavy", _0x15e472, 1.28, 0.6, 0.48);
  bt(_0x57cc4f, "forked", _0x445392, _0x9dc351 + 0.76, 0.52, 0.22);
  bt(_0x57cc4f, "seeker", _0x380ec3, 0.82, 0.19, 0.23);
  bt(_0x57cc4f, "phase", _0xef3157, _0x9dc351 + 1.12, 0.76, 0.21);
  bt(_0x57cc4f, "volatile", _0x5b998d, 1.48, 0.2, 0.21);
  Ct(_0x57cc4f, je.x, je.y, je.z, _0x11457b, _0x1155cb);
}
const jt = new _0x1a7e97.InstancedMesh(new _0x1a7e97.BoxGeometry(1, 0.065, 0.065), new _0x1a7e97.MeshBasicMaterial({
  color: 16777215,
  transparent: true,
  opacity: 0.85,
  fog: false,
  blending: _0x1a7e97.AdditiveBlending,
  depthWrite: false
}), 24);
jt.frustumCulled = false;
jt.renderOrder = 2;
_0x5739a7.add(jt);
jt.setColorAt(0, Ee.setHex(16777215));
const Ft = [];
for (let mo = 0; mo < 24; mo++) {
  Ft.push({
    until: 0,
    x: 0,
    y: 0,
    z: 0,
    vx: 0,
    vy: 0,
    vz: 0,
    scale: 1
  });
}
let Ht = 0;
let Vt = gt();
function Bt() {
  for (let _0x19bfa2 = 0; _0x19bfa2 < 24; _0x19bfa2++) {
    Ft[_0x19bfa2].until = 0;
    jt.setMatrixAt(_0x19bfa2, _0x5293da);
  }
  qe(jt);
}
function Rt(_0x746df2, _0x342fc2, _0x1e231b) {
  if (!vt(_0x1e231b)) {
    return;
  }
  const _0x39f87e = _0x2df3f7(_0x1e231b, T);
  const _0x51c1a1 = _0x39f87e.yaw;
  const _0x19cab3 = _0x342fc2.def || _0x51086e.weapons[_0x342fc2.type];
  const _0x26ffcf = _0x342fc2.crawling ? _0x342fc2.dir * _0x19cab3.crawlSpeed : _0x342fc2.vx;
  for (const _0x5785fa of Ft) {
    if (_0x5785fa.until > 0) {
      continue;
    }
    _0x5785fa.until = 300;
    _0x5785fa.x = _0x39f87e.x + Math.sin(_0x51c1a1) * W;
    _0x5785fa.y = _0x342fc2.y + _0x39f87e.alt;
    _0x5785fa.z = _0x39f87e.z + Math.cos(_0x51c1a1) * W;
    _0x5785fa.vx = Math.cos(_0x51c1a1) * _0x26ffcf;
    _0x5785fa.vy = _0x342fc2.crawling ? 0 : _0x342fc2.vy;
    _0x5785fa.vz = -Math.sin(_0x51c1a1) * _0x26ffcf;
    _0x5785fa.scale = Math.max(0.34, Math.min(..._0x19cab3.scale));
    const _0xf45326 = Ft.indexOf(_0x5785fa);
    jt.setColorAt(_0xf45326, Ee.setHex(_0x55171d.shots[_0x342fc2.type]));
    jt.instanceColor.needsUpdate = true;
    return;
  }
}
function Ot() {
  (function () {
    const _0x2de146 = performance.now();
    const _0x46a5b3 = gt();
    if (_0x46a5b3 !== Vt) {
      Bt();
      Vt = _0x46a5b3;
    }
    const _0x385cbf = Ht ? Math.min(50, _0x2de146 - Ht) : 0;
    Ht = _0x2de146;
    let _0x39ee55 = false;
    for (let _0x22b150 = 0; _0x22b150 < 24; _0x22b150++) {
      const _0x9977eb = Ft[_0x22b150];
      if (_0x9977eb.until <= 0) {
        continue;
      }
      _0x9977eb.until -= _0x385cbf;
      if (_0x9977eb.until <= 0) {
        jt.setMatrixAt(_0x22b150, _0x5293da);
        _0x39ee55 = true;
        continue;
      }
      const _0x5bd476 = _0x385cbf / 1000;
      _0x9977eb.x += _0x9977eb.vx * _0x5bd476;
      _0x9977eb.y += _0x9977eb.vy * _0x5bd476;
      _0x9977eb.z += _0x9977eb.vz * _0x5bd476;
      const _0x334eec = _0x9977eb.scale * (_0x9977eb.until / 300);
      const _0x43ab63 = Math.max(0.001, Math.hypot(_0x9977eb.vx, _0x9977eb.vy, _0x9977eb.vz));
      Le.set(_0x9977eb.vx / _0x43ab63, _0x9977eb.vy / _0x43ab63, _0x9977eb.vz / _0x43ab63);
      Ye.setFromUnitVectors(Ne, Le);
      Pe.set(_0x9977eb.x, _0x9977eb.y, _0x9977eb.z);
      Ue.set(_0x334eec, 1, 1);
      ke.compose(Pe, Ye, Ue);
      jt.setMatrixAt(_0x22b150, ke);
      _0x39ee55 = true;
    }
    if (_0x39ee55) {
      qe(jt);
    }
  })();
  Je();
}
export function clearDepartingTracers() {
  for (let _0x308451 = 0; _0x308451 < _0x13d5b7; _0x308451++) {
    wt(_0x308451, null, "reset");
  }
  Bt();
  Je();
  Vt = gt();
}
export function bulletTraitVisualSnapshot() {
  const _0x4f186b = {
    rapid: 0,
    heavy: 0,
    forked: 0,
    seeker: 0,
    phase: 0,
    volatile: 0
  };
  let _0x55856b = 0;
  const _0xf7dc95 = {
    cold: 0,
    warm: 0,
    breaking: 0,
    rage: 0
  };
  let _0x31d4a2 = 0;
  for (let _0x551ff9 = 0; _0x551ff9 < _0x13d5b7; _0x551ff9++) {
    if (!$e[_0x551ff9] || et[_0x551ff9]) {
      continue;
    }
    _0x55856b++;
    _0xf7dc95[["cold", "warm", "breaking", "rage"][ot[_0x551ff9]] || "cold"]++;
    _0x31d4a2 = Math.max(_0x31d4a2, rt[_0x551ff9]);
    const _0x43d722 = tt[_0x551ff9];
    if (_0x43d722) {
      for (const _0x4f6b03 of we) {
        if (_0x43d722[_0x4f6b03]) {
          _0x4f186b[_0x4f6b03]++;
        }
      }
    }
  }
  return {
    fixedPools: q.length + N.length + $.length + Me.length + ge.length + Ce.length + 5,
    projectileArt: {
      state: O.state,
      file: _0x55ad02.file,
      requests: O.requests,
      paintedPools: q.length,
      paintedVisible: q.length > 0,
      error: O.error,
      preloadMs: O.preloadMs,
      gateMs: O.gateMs,
      residency: O.residency,
      settledBeforeConsumer: O.settledBeforeConsumer
    },
    productionPlacement: {
      surfaceDepth: W,
      widthGain: L,
      view: _0x25d3b3
    },
    traitPools: we.length,
    stackPools: Ce.length,
    capacityPerTrait: _0x13d5b7,
    liveSlots: _0x55856b,
    live: _0x4f186b,
    powerLanguage: {
      sampledAtSpawn: true,
      changesCollisionReach: false,
      fixedStateArrays: true,
      live: _0xf7dc95,
      maxGain: +_0x31d4a2.toFixed(3),
      colors: {
        overdrive: "WARM_MUZZLE",
        rage: "RED_MAGENTA"
      }
    },
    occlusion: {
      chassisDepthTest: U.depthTest,
      wakeDepthTest: re.material.depthTest,
      trailDepthTest: pe.material.depthTest,
      phaseRailsDepthTest: Ae.phase.material.depthTest,
      phaseStackDepthTest: ve.phase.material.depthTest
    },
    endpointLanguage: {
      pooled: true,
      circularRings: false,
      familyCounts: {
        ...st
      },
      reasonCounts: {
        ...at
      },
      last: {
        ...it
      }
    },
    groundFire: {
      pooled: true,
      pools: Q ? 3 : 2,
      capacity: _0x13d5b7,
      ignitionCount: lt,
      lastIgnition: {
        ...ct
      },
      airborneChassisRetired: true,
      paintedWave: !!Q,
      whollyBehindPoint: true
    }
  };
}
if (typeof window != "undefined") {
  window.__HB_BULLET_TRAITS = bulletTraitVisualSnapshot;
}
let Tt = false;
export function initBulletView() {
  return !Tt && (_0x5630b2({
    bullets: {
      slotSpawned: Mt,
      hideSlot: wt,
      syncSlot: zt,
      flush: Ot,
      bendCulled: Rt,
      deckIgnited: yt,
      volatileImpact: St
    }
  }), Tt = true, true);
}