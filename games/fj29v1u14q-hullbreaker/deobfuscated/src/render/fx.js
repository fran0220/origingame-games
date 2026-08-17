import * as _0x195887 from "three";
import { CONFIG as _0x276c56 } from "../config.js";
import { PAL as _0x39e054 } from "./palette.js";
import { JUICE_ENABLED as _0x12dacf } from "../mode.js";
import { burstVelocity as _0x323bcf, flashAlpha as _0x123477, particleAlpha as _0x1c63b2, particleScale as _0x251265, travelStretch as _0x56c931 } from "../pure/juice.js";
import { postGain as _0xcc07a0 } from "./post.js";
import { scene as _0x48fc0f, HIDE as _0xebfd31 } from "./scene.js";
import { towerPose as _0x329fee } from "./tower.js";
const d = _0x276c56.juice;
const y = {
  muzzle: _0x39e054.shots.R,
  enemyGlow: _0x39e054.wasp,
  capsule: _0x39e054.capsule,
  modCapsule: _0x39e054.modCapsule,
  rig: _0x39e054.player
};
const h = {
  wasp: _0x39e054.wasp,
  carrier: _0x39e054.carrier,
  hound: _0x39e054.hound,
  polyp: _0x39e054.polyp,
  mortar: _0x39e054.mortar,
  warden: _0x39e054.warden
};
export function fxRole(_0x3ecbeb) {
  return y[_0x3ecbeb];
}
export function fxShotColor(_0x1f08e4) {
  return _0x39e054.shots[_0x1f08e4] || _0x39e054.shots.R;
}
export function fxHostileColor(_0xcf4457) {
  return h[_0xcf4457] || _0x39e054.wasp;
}
const x = new _0x195887.Matrix4();
const m = new _0x195887.Color();
const g = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
};
const M = {
  s: 0,
  y: 0,
  d: 0
};
const w = new _0x195887.Quaternion();
const v = new _0x195887.Vector3(1, 0, 0);
const A = new _0x195887.Vector3();
const b = new _0x195887.Vector3();
const z = new _0x195887.Vector3();
const B = new _0x195887.Vector3();
const C = new _0x195887.Matrix4();
const U = new _0x195887.Matrix4();
const R = new _0x195887.Quaternion();
const O = new _0x195887.Quaternion();
const G = new _0x195887.Vector3();
const F = new _0x195887.Matrix4();
const k = d.pools.particles;
const S = d.pools.flashes;
const I = d.pools.cores;
const X = d.pools.fragments;
const P = d.pools.vapor;
const D = d.destruction;
function V(_0x4943db) {
  return {
    index: _0x4943db,
    kind: 0,
    t: 0,
    ttl: 0,
    x: 0,
    y: 0,
    z: 0,
    vx: 0,
    vy: 0,
    vz: 0,
    gravity: 0,
    size: 0,
    grow: 0,
    yaw: 0,
    spin: 0,
    roll: 0,
    aspectX: 1,
    aspectY: 1,
    r: 0,
    g: 0,
    b: 0
  };
}
function Y(_0x120b9d) {
  const _0x2ef0bb = new Array(_0x120b9d);
  const _0x4ada1b = new Int32Array(_0x120b9d);
  for (let _0x1407b3 = 0; _0x1407b3 < _0x120b9d; _0x1407b3++) {
    _0x2ef0bb[_0x1407b3] = V(_0x1407b3);
    _0x4ada1b[_0x1407b3] = _0x120b9d - 1 - _0x1407b3;
  }
  return {
    rows: _0x2ef0bb,
    free: _0x4ada1b,
    top: _0x120b9d,
    cursor: 0,
    claims: 0,
    recycles: 0
  };
}
let j = null;
let T = null;
let W = null;
let _ = null;
let N = null;
let Q = null;
let Z = null;
let H = null;
let K = null;
let q = null;
let E = null;
let J = null;
let L = 1;
let $ = 0;
let tt = 0;
let et = 0;
let nt = 0;
let rt = 0;
let ot = 0;
let st = true;
function it(_0x1fa41c, _0x21fc58) {
  const _0xb2154f = new _0x195887.InstancedBufferAttribute(new Float32Array(_0x21fc58), 1);
  _0xb2154f.setUsage(_0x195887.DynamicDrawUsage);
  _0x1fa41c.setAttribute("instanceOpacity", _0xb2154f);
  return _0x1fa41c;
}
function at(_0x1d6d3a) {
  _0x1d6d3a.customProgramCacheKey = () => "hullbreaker-instance-opacity-v1";
  _0x1d6d3a.onBeforeCompile = _0x36b018 => {
    _0x36b018.vertexShader = _0x36b018.vertexShader.replace("#include <common>", "#include <common>\nattribute float instanceOpacity;\nvarying float vInstanceOpacity;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvInstanceOpacity = instanceOpacity;");
    _0x36b018.fragmentShader = _0x36b018.fragmentShader.replace("#include <common>", "#include <common>\nvarying float vInstanceOpacity;").replace("#include <alphatest_fragment>", "diffuseColor.a *= vInstanceOpacity;\n#include <alphatest_fragment>");
  };
  return _0x1d6d3a;
}
if (_0x12dacf) {
  j = Y(k);
  T = Y(S);
  W = Y(24);
  _ = Y(I);
  N = Y(X);
  Q = Y(P);
  const yt = new _0x195887.MeshBasicMaterial({
    transparent: true,
    opacity: 1,
    fog: false,
    blending: _0x195887.AdditiveBlending,
    depthWrite: false,
    side: _0x195887.DoubleSide
  });
  yt.userData.allowTwoPassTransparent = "closed additive shard facets";
  Z = new _0x195887.InstancedMesh(function () {
    const _0x2de42e = new _0x195887.BufferGeometry();
    _0x2de42e.setAttribute("position", new _0x195887.Float32BufferAttribute([0.55, 0, 0, -0.08, 0.22, 0.08, -0.08, -0.18, 0.1, -0.5, 0.04, -0.06], 3));
    _0x2de42e.setIndex([0, 1, 2, 0, 3, 1, 0, 2, 3, 1, 3, 2]);
    _0x2de42e.computeVertexNormals();
    return _0x2de42e;
  }(), yt, k);
  Z.frustumCulled = false;
  Z.renderOrder = 2;
  Z.count = 0;
  Z.setColorAt(0, m.setRGB(1, 1, 1));
  for (let vt = 0; vt < k; vt++) {
    Z.setMatrixAt(vt, _0xebfd31);
  }
  _0x48fc0f.add(Z);
  const ht = new _0x195887.MeshBasicMaterial({
    transparent: true,
    opacity: 1,
    fog: false,
    blending: _0x195887.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    side: _0x195887.DoubleSide,
    forceSinglePass: true
  });
  H = new _0x195887.InstancedMesh(function () {
    const _0x556447 = [];
    const _0x5999ba = [];
    const _0x420684 = [[0.21, 0.02], [0.1, 0.2], [-0.12, 0.17], [-0.22, -0.03], [-0.07, -0.19], [0.15, -0.14]];
    _0x556447.push(0, 0, 0);
    for (const _0x17f504 of _0x420684) {
      _0x556447.push(_0x17f504[0], _0x17f504[1], 0);
    }
    for (let _0x48a159 = 0; _0x48a159 < _0x420684.length; _0x48a159++) {
      _0x5999ba.push(0, 1 + _0x48a159, 1 + (_0x48a159 + 1) % _0x420684.length);
    }
    const _0x360f08 = [[0.02, 0.19, 0.56, 0.055], [0.84, 0.23, 0.45, 0.048], [1.76, 0.18, 0.62, 0.06], [2.7, 0.22, 0.48, 0.052], [3.58, 0.19, 0.58, 0.068], [4.84, 0.21, 0.5, 0.05], [5.56, 0.2, 0.42, 0.043]];
    for (const [_0x46e752, _0x5d0b65, _0x47c90c, _0x567674] of _0x360f08) {
      const _0x2c01a2 = _0x556447.length / 3;
      const _0x5da909 = Math.cos(_0x46e752);
      const _0x5a4a05 = Math.sin(_0x46e752);
      const _0x11f8d2 = -_0x5a4a05 * _0x567674;
      const _0x519e90 = _0x5da909 * _0x567674;
      _0x556447.push(_0x5da909 * _0x5d0b65 + _0x11f8d2, _0x5a4a05 * _0x5d0b65 + _0x519e90, 0, _0x5da909 * _0x47c90c, _0x5a4a05 * _0x47c90c, 0, _0x5da909 * _0x5d0b65 - _0x11f8d2, _0x5a4a05 * _0x5d0b65 - _0x519e90, 0);
      _0x5999ba.push(_0x2c01a2, _0x2c01a2 + 1, _0x2c01a2 + 2);
    }
    const _0x2ea444 = new _0x195887.BufferGeometry();
    _0x2ea444.setAttribute("position", new _0x195887.Float32BufferAttribute(_0x556447, 3));
    _0x2ea444.setIndex(_0x5999ba);
    return _0x2ea444;
  }(), ht, S);
  H.frustumCulled = false;
  H.renderOrder = 4.1;
  H.count = 0;
  H.setColorAt(0, m.setRGB(1, 1, 1));
  for (let At = 0; At < S; At++) {
    H.setMatrixAt(At, _0xebfd31);
  }
  _0x48fc0f.add(H);
  const xt = new _0x195887.MeshBasicMaterial({
    transparent: true,
    opacity: 1,
    fog: false,
    side: _0x195887.DoubleSide,
    blending: _0x195887.AdditiveBlending,
    depthWrite: false,
    forceSinglePass: true
  });
  K = new _0x195887.InstancedMesh(function () {
    const _0x1c7a85 = [];
    const _0x8091b2 = [];
    const _0x174cfb = [[0.08, 0.3, 0.53, 0.115, 0.045], [1.18, 0.34, 0.48, 0.095, 0.06], [2.24, 0.28, 0.51, 0.125, 0.052], [3.34, 0.35, 0.55, 0.09, 0.05], [4.61, 0.29, 0.49, 0.12, 0.066]];
    for (const [_0x59a612, _0x16c82c, _0xe3d906, _0x4aeb49, _0x1843ba] of _0x174cfb) {
      const _0x37fa24 = _0x1c7a85.length / 3;
      const _0x30a080 = Math.cos(_0x59a612);
      const _0x4518ec = Math.sin(_0x59a612);
      const _0x570a16 = -_0x4518ec;
      const _0x3e4bb9 = _0x30a080;
      _0x1c7a85.push(_0x30a080 * _0x16c82c + _0x570a16 * _0x4aeb49, _0x4518ec * _0x16c82c + _0x3e4bb9 * _0x4aeb49, 0, _0x30a080 * _0xe3d906 + _0x570a16 * _0x1843ba, _0x4518ec * _0xe3d906 + _0x3e4bb9 * _0x1843ba, 0, _0x30a080 * _0xe3d906 - _0x570a16 * _0x1843ba, _0x4518ec * _0xe3d906 - _0x3e4bb9 * _0x1843ba, 0, _0x30a080 * _0x16c82c - _0x570a16 * _0x4aeb49, _0x4518ec * _0x16c82c - _0x3e4bb9 * _0x4aeb49, 0);
      _0x8091b2.push(_0x37fa24, _0x37fa24 + 1, _0x37fa24 + 2, _0x37fa24, _0x37fa24 + 2, _0x37fa24 + 3);
    }
    const _0xdf0c43 = new _0x195887.BufferGeometry();
    _0xdf0c43.setAttribute("position", new _0x195887.Float32BufferAttribute(_0x1c7a85, 3));
    _0xdf0c43.setIndex(_0x8091b2);
    return _0xdf0c43;
  }(), xt, 24);
  K.frustumCulled = false;
  K.renderOrder = 3;
  K.count = 0;
  K.setColorAt(0, m.setRGB(1, 1, 1));
  for (let bt = 0; bt < 24; bt++) {
    K.setMatrixAt(bt, _0xebfd31);
  }
  _0x48fc0f.add(K);
  const mt = new _0x195887.MeshBasicMaterial({
    transparent: true,
    opacity: 1,
    fog: false,
    side: _0x195887.DoubleSide,
    blending: _0x195887.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    forceSinglePass: true
  });
  q = new _0x195887.InstancedMesh(function () {
    const _0x566cd1 = new _0x195887.BufferGeometry();
    _0x566cd1.setAttribute("position", new _0x195887.Float32BufferAttribute([-0.08, 0.36, 0, -0.48, 0.16, 0, -0.36, -0.25, 0, -0.08, 0.36, 0, -0.36, -0.25, 0, -0.1, -0.12, 0, 0.08, 0.31, 0, 0.12, -0.14, 0, 0.43, -0.22, 0, 0.08, 0.31, 0, 0.43, -0.22, 0, 0.5, 0.12, 0, -0.32, 0.08, 0, -0.72, 0.02, 0, -0.32, -0.05, 0, 0.3, 0.06, 0, 0.74, -0.03, 0, 0.3, -0.08, 0], 3));
    return _0x566cd1;
  }(), mt, I);
  q.frustumCulled = false;
  q.renderOrder = 4.2;
  q.count = 0;
  q.setColorAt(0, m.setRGB(1, 1, 1));
  for (let zt = 0; zt < I; zt++) {
    q.setMatrixAt(zt, _0xebfd31);
  }
  _0x48fc0f.add(q);
  const gt = at(new _0x195887.MeshBasicMaterial({
    transparent: true,
    opacity: 0.94,
    fog: true,
    side: _0x195887.DoubleSide,
    forceSinglePass: true,
    blending: _0x195887.NormalBlending,
    depthWrite: false,
    depthTest: true
  }));
  E = [new _0x195887.InstancedMesh(it(function () {
    const _0x3ffdd9 = new _0x195887.BufferGeometry();
    _0x3ffdd9.setAttribute("position", new _0x195887.Float32BufferAttribute([0.56, 0, 0, -0.2, 0.25, 0, -0.48, 0.06, 0, 0.36, -0.04, 0, -0.12, -0.09, 0, -0.38, -0.31, 0], 3));
    return _0x3ffdd9;
  }(), X), gt, X), new _0x195887.InstancedMesh(it(function () {
    const _0x5b0146 = new _0x195887.BufferGeometry();
    _0x5b0146.setAttribute("position", new _0x195887.Float32BufferAttribute([0.52, 0.04, 0, 0.12, 0.26, 0, -0.46, 0.15, 0, 0.52, 0.04, 0, -0.46, 0.15, 0, -0.3, -0.18, 0, 0.28, -0.1, 0, -0.1, -0.16, 0, -0.5, -0.3, 0], 3));
    return _0x5b0146;
  }(), X), gt, X), new _0x195887.InstancedMesh(it(function () {
    const _0x46df6c = new _0x195887.BufferGeometry();
    _0x46df6c.setAttribute("position", new _0x195887.Float32BufferAttribute([-0.5, -0.24, 0, 0.18, -0.24, 0, 0.18, -0.08, 0, -0.5, -0.24, 0, 0.18, -0.08, 0, -0.32, -0.08, 0, -0.5, -0.08, 0, -0.32, -0.08, 0, -0.32, 0.28, 0, -0.5, -0.08, 0, -0.32, 0.28, 0, -0.5, 0.18, 0, 0.28, 0.04, 0, 0.54, 0.13, 0, 0.31, 0.24, 0], 3));
    return _0x46df6c;
  }(), X), gt, X)];
  for (const Bt of E) {
    Bt.frustumCulled = false;
    Bt.renderOrder = 2.15;
    Bt.setColorAt(0, m.setRGB(1, 1, 1));
    Bt.count = 0;
    const Ct = Bt.geometry.getAttribute("instanceOpacity");
    for (let Ut = 0; Ut < X; Ut++) {
      Bt.setMatrixAt(Ut, _0xebfd31);
      Ct.setX(Ut, 0);
    }
    Ct.needsUpdate = true;
    _0x48fc0f.add(Bt);
  }
  const Mt = at(new _0x195887.MeshBasicMaterial({
    transparent: true,
    opacity: 0.72,
    fog: true,
    side: _0x195887.DoubleSide,
    forceSinglePass: true,
    blending: _0x195887.NormalBlending,
    depthWrite: false,
    depthTest: true
  }));
  J = new _0x195887.InstancedMesh(it(function () {
    const _0x3e5fc1 = new _0x195887.BufferGeometry();
    _0x3e5fc1.setAttribute("position", new _0x195887.Float32BufferAttribute([-0.34, -0.18, 0, -0.18, -0.02, 0, -0.24, 0.58, 0, -0.34, -0.18, 0, -0.24, 0.58, 0, -0.39, 0.28, 0, -0.05, -0.24, 0, 0.09, -0.02, 0, 0.02, 0.74, 0, -0.05, -0.24, 0, 0.02, 0.74, 0, -0.11, 0.32, 0, 0.25, -0.17, 0, 0.38, 0.03, 0, 0.31, 0.5, 0, 0.25, -0.17, 0, 0.31, 0.5, 0, 0.19, 0.22, 0], 3));
    return _0x3e5fc1;
  }(), P), Mt, P);
  J.frustumCulled = false;
  J.renderOrder = 1.8;
  J.count = 0;
  J.setColorAt(0, m.setRGB(1, 1, 1));
  const wt = J.geometry.getAttribute("instanceOpacity");
  for (let Rt = 0; Rt < P; Rt++) {
    J.setMatrixAt(Rt, _0xebfd31);
    wt.setX(Rt, 0);
  }
  wt.needsUpdate = true;
  _0x48fc0f.add(J);
}
function ct(_0xfff111) {
  _0xfff111.claims++;
  if (_0xfff111.top > 0) {
    return _0xfff111.rows[_0xfff111.free[--_0xfff111.top]];
  }
  _0xfff111.recycles++;
  const _0x5ce2e2 = _0xfff111.rows[_0xfff111.cursor];
  _0xfff111.cursor = (_0xfff111.cursor + 1) % _0xfff111.rows.length;
  return _0x5ce2e2;
}
function lt(_0x857840, _0x495e63, _0xeae907, _0x1f0687) {
  const _0x19fd47 = _0x329fee(_0x495e63, g);
  const _0x161cb7 = 1.15 + _0x1f0687;
  _0x857840.x = _0x19fd47.x + Math.sin(_0x19fd47.yaw) * _0x161cb7;
  _0x857840.y = _0xeae907 + _0x19fd47.alt;
  _0x857840.z = _0x19fd47.z + Math.cos(_0x19fd47.yaw) * _0x161cb7;
  return _0x19fd47.yaw;
}
function ut(_0x519760, _0xa5bc1c) {
  m.set(_0xa5bc1c);
  _0x519760.r = m.r;
  _0x519760.g = m.g;
  _0x519760.b = m.b;
}
export function fxBurst(_0x10c8a5, _0x18a454, _0x2a7618, _0xaa6968, _0x3a52c9 = 1) {
  if (!_0x12dacf) {
    return;
  }
  const _0x3951a4 = Math.max(1, Math.round(_0x10c8a5.count * _0x3a52c9));
  const _0x425a9f = L++;
  for (let _0x5c3a97 = 0; _0x5c3a97 < _0x3951a4; _0x5c3a97++) {
    const _0x34a9bb = ct(j);
    const _0x1b0206 = lt(_0x34a9bb, _0x18a454, _0x2a7618, 0);
    _0x323bcf(_0x425a9f, _0x5c3a97, _0x3951a4, _0x10c8a5.speed * _0x3a52c9, M);
    _0x34a9bb.vx = Math.cos(_0x1b0206) * M.s + Math.sin(_0x1b0206) * M.d;
    _0x34a9bb.vy = M.y;
    _0x34a9bb.vz = -Math.sin(_0x1b0206) * M.s + Math.cos(_0x1b0206) * M.d;
    _0x34a9bb.gravity = _0x10c8a5.gravity;
    _0x34a9bb.t = 0;
    _0x34a9bb.ttl = _0x10c8a5.ms;
    _0x34a9bb.size = _0x10c8a5.size * _0x3a52c9;
    _0x34a9bb.grow = 0;
    _0x34a9bb.aspectX = 1;
    _0x34a9bb.aspectY = 1;
    ut(_0x34a9bb, _0xaa6968);
  }
}
export function fxDirectedBurst(_0xe905de, _0x30eb28, _0x1e188e, _0x4f264b, _0x332659, _0x26b017, _0x3e2cde, _0x4e0dcd = 1) {
  if (!_0x12dacf) {
    return;
  }
  const _0x113560 = Math.max(1, Math.round(_0xe905de.count * _0x4e0dcd));
  const _0x78423b = Math.atan2(_0x26b017, _0x332659);
  for (let _0x1b7f8a = 0; _0x1b7f8a < _0x113560; _0x1b7f8a++) {
    const _0x53c09e = ct(j);
    const _0x289c03 = lt(_0x53c09e, _0x30eb28, _0x1e188e, 0);
    const _0x317341 = _0x78423b + _0x3e2cde * (_0x113560 === 1 ? 0 : _0x1b7f8a / (_0x113560 - 1) - 0.5);
    const _0x48daf5 = _0xe905de.speed * _0x4e0dcd * (0.82 + (_0x1b7f8a + L) % 3 * 0.18 / 2);
    const _0x5cc738 = Math.cos(_0x317341) * _0x48daf5;
    _0x53c09e.vx = Math.cos(_0x289c03) * _0x5cc738;
    _0x53c09e.vy = Math.sin(_0x317341) * _0x48daf5;
    _0x53c09e.vz = -Math.sin(_0x289c03) * _0x5cc738 + Math.sin((_0x1b7f8a + L) * 2.4) * _0x48daf5 * 0.08;
    _0x53c09e.gravity = _0xe905de.gravity;
    _0x53c09e.t = 0;
    _0x53c09e.ttl = _0xe905de.ms;
    _0x53c09e.size = _0xe905de.size * _0x4e0dcd;
    _0x53c09e.grow = 0;
    _0x53c09e.aspectX = 1;
    _0x53c09e.aspectY = 1;
    ut(_0x53c09e, _0x4f264b);
  }
  L++;
}
export function fxCoreRupture(_0x52fcf0, _0x4d55a5, _0x3c310d, _0xd60029, _0x50d443, _0x2e1cfa = 1, _0x2ce880 = 0.04, _0x1f3128 = 1) {
  if (!_0x12dacf) {
    return;
  }
  const _0x2d9f23 = ct(_);
  _0x2d9f23.yaw = lt(_0x2d9f23, _0x52fcf0, _0x4d55a5, _0x2ce880);
  _0x2d9f23.vx = Math.atan2(_0x50d443, _0xd60029);
  _0x2d9f23.vy = 0;
  _0x2d9f23.vz = 0;
  _0x2d9f23.gravity = 0;
  _0x2d9f23.t = 0;
  _0x2d9f23.ttl = D.core.ms;
  _0x2d9f23.size = D.core.size * _0x2e1cfa * 0.76;
  _0x2d9f23.grow = D.core.size * _0x2e1cfa * 0.54;
  _0x2d9f23.aspectX = Math.max(0.55, Math.min(3.8, _0x1f3128));
  _0x2d9f23.aspectY = 1;
  ut(_0x2d9f23, _0x3c310d);
}
export function fxRoleFragments(_0x192c2a, _0x1468f2, _0x532e5b, _0x1ae269, _0x5909a8, _0x26b606, _0x264eaf = 1) {
  if (!_0x12dacf) {
    return;
  }
  let _0xefbb14 = 2;
  let _0x3e0a7f = D.machine;
  if (_0x192c2a === "wing") {
    _0xefbb14 = 0;
    _0x3e0a7f = D.wing;
  } else if (_0x192c2a === "hound") {
    _0xefbb14 = 1;
    _0x3e0a7f = D.hound;
  }
  const _0x5c67c0 = Math.min(8, Math.max(1, Math.round(_0x3e0a7f.count * _0x264eaf)));
  const _0x2a0e04 = Math.atan2(_0x26b606, _0x5909a8);
  const _0x9ff2b5 = L++;
  for (let _0x454b76 = 0; _0x454b76 < _0x5c67c0; _0x454b76++) {
    const _0x213f89 = ct(N);
    for (let _0x54cbb0 = 0; _0x54cbb0 < 3; _0x54cbb0++) {
      E[_0x54cbb0].setMatrixAt(_0x213f89.index, _0xebfd31);
      E[_0x54cbb0].geometry.getAttribute("instanceOpacity").setX(_0x213f89.index, 0);
    }
    const _0x28b254 = lt(_0x213f89, _0x1468f2, _0x532e5b, 0.035);
    const _0x3d5603 = _0x5c67c0 === 1 ? 0 : _0x454b76 / (_0x5c67c0 - 1) - 0.5;
    const _0x18ce12 = ((_0x454b76 + _0x9ff2b5) % 3 - 1) * 0.075;
    const _0x48885f = _0x2a0e04 + _0x3e0a7f.spread * _0x3d5603 + _0x18ce12;
    const _0x184c1d = _0x3e0a7f.speed * Math.min(1.35, 0.82 + _0x264eaf * 0.18) * (0.84 + (_0x454b76 + _0x9ff2b5) % 3 * 0.08);
    const _0x282d03 = Math.cos(_0x48885f) * _0x184c1d;
    _0x213f89.vx = Math.cos(_0x28b254) * _0x282d03;
    _0x213f89.vy = Math.sin(_0x48885f) * _0x184c1d;
    _0x213f89.vz = -Math.sin(_0x28b254) * _0x282d03 + Math.sin((_0x454b76 + _0x9ff2b5) * 1.7) * _0x184c1d * 0.1;
    _0x213f89.gravity = _0x3e0a7f.gravity;
    _0x213f89.t = 0;
    _0x213f89.ttl = _0x3e0a7f.ms;
    _0x213f89.size = _0x3e0a7f.size * (0.72 + Math.min(1.55, _0x264eaf) * 0.9);
    _0x213f89.grow = 0;
    _0x213f89.aspectX = 1;
    _0x213f89.aspectY = 1;
    _0x213f89.kind = _0xefbb14;
    _0x213f89.roll = (_0x454b76 + _0x9ff2b5) % 7 * 0.61;
    _0x213f89.spin = ((_0x454b76 + _0x9ff2b5) % 5 - 2) * 4.2;
    ut(_0x213f89, _0x1ae269);
  }
  for (let _0x5330ee = 0; _0x5330ee < 3; _0x5330ee++) {
    E[_0x5330ee].instanceMatrix.needsUpdate = true;
    E[_0x5330ee].geometry.getAttribute("instanceOpacity").needsUpdate = true;
  }
}
export function fxVapor(_0x3ebcb1, _0x457ebe, _0x2eb92d, _0x11e6e9 = 0, _0x5c3c7e = 1, _0x5bdcfa = 0.015) {
  if (!_0x12dacf) {
    return;
  }
  const _0x3db7cf = ct(Q);
  const _0x3e881e = lt(_0x3db7cf, _0x3ebcb1, _0x457ebe, _0x5bdcfa);
  const _0x7fc313 = Math.max(-1, Math.min(1, _0x11e6e9)) * D.vapor.drift * _0x5c3c7e;
  _0x3db7cf.vx = Math.cos(_0x3e881e) * _0x7fc313;
  _0x3db7cf.vy = D.vapor.rise * (0.86 + L % 3 * 0.08) * _0x5c3c7e;
  _0x3db7cf.vz = -Math.sin(_0x3e881e) * _0x7fc313;
  _0x3db7cf.gravity = 0;
  _0x3db7cf.t = 0;
  _0x3db7cf.ttl = D.vapor.ms;
  _0x3db7cf.size = D.vapor.size * Math.min(1.35, _0x5c3c7e);
  _0x3db7cf.grow = 0;
  _0x3db7cf.aspectX = 1;
  _0x3db7cf.aspectY = 1;
  _0x3db7cf.yaw = _0x3e881e;
  _0x3db7cf.roll = (L % 7 - 3) * 0.11;
  _0x3db7cf.spin = (L++ & 1 ? 1 : -1) * 0.24;
  ut(_0x3db7cf, _0x2eb92d);
}
function pt(_0x1f0a93, _0x2c881e, _0xf4006b, _0x290e07, _0x454f10, _0x3f65f4, _0x29c146, _0x3bfce1 = null, _0x1eabdd = 1, _0x4085a7 = 1) {
  const _0x1b98b3 = ct(T);
  _0x1b98b3.yaw = lt(_0x1b98b3, _0x290e07, _0x454f10, _0x29c146);
  _0x1b98b3.vx = _0x3bfce1 === null ? (L++ % 17 - 8) * 0.13 : _0x3bfce1;
  _0x1b98b3.vy = 0;
  _0x1b98b3.vz = 0;
  _0x1b98b3.gravity = 0;
  _0x1b98b3.t = 0;
  _0x1b98b3.ttl = _0x1f0a93;
  _0x1b98b3.size = _0x2c881e;
  _0x1b98b3.grow = _0xf4006b - _0x2c881e;
  _0x1b98b3.aspectX = Math.max(0.35, Math.min(8, _0x1eabdd));
  _0x1b98b3.aspectY = Math.max(0.35, Math.min(3, _0x4085a7));
  ut(_0x1b98b3, _0x3f65f4);
}
export function fxFlash(_0x5b72e0, _0x2b978a, _0x4b9dfa, _0x59a3e2, _0x444452, _0x2e08d1 = 0) {
  if (_0x12dacf) {
    pt(_0x5b72e0, _0x2b978a, _0x2b978a * 1.8, _0x4b9dfa, _0x59a3e2, _0x444452, _0x2e08d1);
  }
}
export function fxDirectionalFlash(_0x14cc4d, _0x25dce9, _0x4943cf, _0x37a002, _0x4a7f26, _0x498570, _0xf2bc8, _0x43a7f8, _0x44089d = 0.035) {
  if (!_0x12dacf) {
    return;
  }
  const _0x2824dd = Math.max(0.04, _0x4943cf);
  pt(_0x14cc4d, _0x2824dd, _0x2824dd * 1.22, _0x37a002, _0x4a7f26, _0x498570, _0x44089d, Math.atan2(_0x43a7f8, _0xf2bc8), Math.max(1, _0x25dce9 / _0x2824dd), 1);
}
export function fxImplode(_0x2b7de5, _0x344558, _0x11bac1, _0x348b34, _0x282b57, _0x4290c3 = 0) {
  if (_0x12dacf) {
    pt(_0x2b7de5, _0x344558, _0x344558 * 0.08, _0x11bac1, _0x348b34, _0x282b57, _0x4290c3);
  }
}
export function fxRing(_0x4bd07e, _0x1a9d22, _0x4f0e73, _0x33859a, _0x1365e7, _0x1f3c31 = 0) {
  if (!_0x12dacf) {
    return;
  }
  const _0x274791 = ct(W);
  _0x274791.yaw = lt(_0x274791, _0x4f0e73, _0x33859a, _0x1f3c31);
  _0x274791.vx = (L++ % 13 - 6) * 0.1;
  _0x274791.vy = (L & 1 ? 1 : -1) * 0.3;
  _0x274791.vz = 0;
  _0x274791.gravity = 0;
  _0x274791.t = 0;
  _0x274791.ttl = _0x4bd07e;
  _0x274791.size = _0x1a9d22 * 0.28;
  _0x274791.grow = _0x1a9d22 * 0.72;
  ut(_0x274791, _0x1365e7);
}
export function updateFx(_0xacdafa) {
  if (!_0x12dacf) {
    return;
  }
  const _0xa971b1 = _0xcc07a0();
  $ = ft(j, Z, _0xacdafa, _0x1c63b2, false, _0xa971b1);
  tt = ft(T, H, _0xacdafa, _0x123477, true, _0xa971b1);
  et = function (_0x345bee, _0x4626c1) {
    let _0x443cfe = 0;
    let _0x4df3fc = 0;
    let _0x43925d = false;
    const _0x3be178 = W.rows;
    for (let _0x32fb8f = 0; _0x32fb8f < _0x3be178.length; _0x32fb8f++) {
      const _0x3fe550 = _0x3be178[_0x32fb8f];
      if (_0x3fe550.ttl <= 0) {
        continue;
      }
      _0x3fe550.t += _0x345bee;
      if (_0x3fe550.t >= _0x3fe550.ttl) {
        _0x3fe550.ttl = 0;
        W.free[W.top++] = _0x32fb8f;
        K.setMatrixAt(_0x32fb8f, _0xebfd31);
        K.setColorAt(_0x32fb8f, m.setRGB(0, 0, 0));
        _0x43925d = true;
        continue;
      }
      const _0x3b1198 = _0x3fe550.t / _0x3fe550.ttl;
      const _0x1e9027 = _0x123477(_0x3b1198);
      const _0x3f4a1c = _0x251265(_0x3b1198, _0x3fe550.size, _0x3fe550.size + _0x3fe550.grow);
      x.makeRotationY(_0x3fe550.yaw);
      x.multiply(U.makeRotationZ(_0x3fe550.vx + _0x3fe550.vy * _0x3b1198));
      x.scale(B.set(_0x3f4a1c, _0x3f4a1c, _0x3f4a1c));
      x.setPosition(_0x3fe550.x, _0x3fe550.y, _0x3fe550.z);
      K.setMatrixAt(_0x32fb8f, x);
      const _0x4f027b = _0x1e9027 * _0x4626c1;
      K.setColorAt(_0x32fb8f, m.setRGB(_0x3fe550.r * _0x4f027b, _0x3fe550.g * _0x4f027b, _0x3fe550.b * _0x4f027b));
      _0x43925d = true;
      _0x443cfe++;
      _0x4df3fc = _0x32fb8f + 1;
    }
    if (_0x43925d) {
      K.instanceMatrix.needsUpdate = true;
      K.instanceColor.needsUpdate = true;
    }
    K.count = _0x4df3fc;
    return _0x443cfe;
  }(_0xacdafa, _0xa971b1);
  nt = ft(_, q, _0xacdafa, _0x123477, true, _0xa971b1);
  rt = function (_0x6e5706) {
    let _0x5a1452 = 0;
    let _0xbdecce = 0;
    let _0x5e0182 = 0;
    let _0x7b6b4f = 0;
    let _0x2a6f97 = false;
    let _0x558742 = false;
    let _0x354755 = false;
    const _0x5991a1 = _0x6e5706 / 1000;
    const _0x3b4f19 = N.rows;
    for (let _0x38f9b6 = 0; _0x38f9b6 < _0x3b4f19.length; _0x38f9b6++) {
      const _0x42a65b = _0x3b4f19[_0x38f9b6];
      if (_0x42a65b.ttl <= 0) {
        continue;
      }
      const _0x422680 = E[_0x42a65b.kind];
      const _0x19c32a = _0x422680.geometry.getAttribute("instanceOpacity");
      _0x42a65b.t += _0x6e5706;
      if (_0x42a65b.t >= _0x42a65b.ttl) {
        _0x42a65b.ttl = 0;
        N.free[N.top++] = _0x38f9b6;
        _0x422680.setMatrixAt(_0x38f9b6, _0xebfd31);
        _0x422680.setColorAt(_0x38f9b6, m.setRGB(0, 0, 0));
        _0x19c32a.setX(_0x38f9b6, 0);
        if (_0x42a65b.kind === 0) {
          _0x2a6f97 = true;
        } else if (_0x42a65b.kind === 1) {
          _0x558742 = true;
        } else {
          _0x354755 = true;
        }
        continue;
      }
      _0x42a65b.vy += _0x42a65b.gravity * _0x5991a1;
      _0x42a65b.x += _0x42a65b.vx * _0x5991a1;
      _0x42a65b.y += _0x42a65b.vy * _0x5991a1;
      _0x42a65b.z += _0x42a65b.vz * _0x5991a1;
      const _0x205b25 = _0x42a65b.t / _0x42a65b.ttl;
      const _0xee2d93 = Math.max(0.0001, Math.hypot(_0x42a65b.vx, _0x42a65b.vy, _0x42a65b.vz));
      A.set(_0x42a65b.vx, _0x42a65b.vy, _0x42a65b.vz).multiplyScalar(1 / _0xee2d93);
      w.setFromUnitVectors(v, A);
      R.setFromAxisAngle(v, _0x42a65b.roll + _0x42a65b.spin * _0x205b25);
      O.copy(w).multiply(R);
      const _0x14e9a8 = _0x42a65b.size;
      b.set(_0x14e9a8, _0x14e9a8, _0x14e9a8);
      z.set(_0x42a65b.x, _0x42a65b.y, _0x42a65b.z);
      x.compose(z, O, b);
      _0x422680.setMatrixAt(_0x38f9b6, x);
      const _0x49b2c5 = _0x1c63b2(_0x205b25);
      _0x422680.setColorAt(_0x38f9b6, m.setRGB(_0x42a65b.r, _0x42a65b.g, _0x42a65b.b));
      _0x19c32a.setX(_0x38f9b6, _0x49b2c5);
      if (_0x42a65b.kind === 0) {
        _0x2a6f97 = true;
      } else if (_0x42a65b.kind === 1) {
        _0x558742 = true;
      } else {
        _0x354755 = true;
      }
      if (_0x42a65b.kind === 0) {
        _0xbdecce = _0x38f9b6 + 1;
      } else if (_0x42a65b.kind === 1) {
        _0x5e0182 = _0x38f9b6 + 1;
      } else {
        _0x7b6b4f = _0x38f9b6 + 1;
      }
      _0x5a1452++;
    }
    if (_0x2a6f97) {
      E[0].instanceMatrix.needsUpdate = true;
      E[0].instanceColor.needsUpdate = true;
      E[0].geometry.getAttribute("instanceOpacity").needsUpdate = true;
    }
    if (_0x558742) {
      E[1].instanceMatrix.needsUpdate = true;
      E[1].instanceColor.needsUpdate = true;
      E[1].geometry.getAttribute("instanceOpacity").needsUpdate = true;
    }
    if (_0x354755) {
      E[2].instanceMatrix.needsUpdate = true;
      E[2].instanceColor.needsUpdate = true;
      E[2].geometry.getAttribute("instanceOpacity").needsUpdate = true;
    }
    E[0].count = _0xbdecce;
    E[1].count = _0x5e0182;
    E[2].count = _0x7b6b4f;
    return _0x5a1452;
  }(_0xacdafa);
  ot = function (_0x25e992) {
    let _0x4103e0 = 0;
    let _0x1d9b1f = 0;
    let _0x5d6765 = false;
    const _0x2794d3 = _0x25e992 / 1000;
    const _0x3c2d78 = Q.rows;
    const _0x190f7a = J.geometry.getAttribute("instanceOpacity");
    for (let _0x10a325 = 0; _0x10a325 < _0x3c2d78.length; _0x10a325++) {
      const _0x529363 = _0x3c2d78[_0x10a325];
      if (_0x529363.ttl <= 0) {
        continue;
      }
      _0x529363.t += _0x25e992;
      if (_0x529363.t >= _0x529363.ttl) {
        _0x529363.ttl = 0;
        Q.free[Q.top++] = _0x10a325;
        J.setMatrixAt(_0x10a325, _0xebfd31);
        J.setColorAt(_0x10a325, m.setRGB(0, 0, 0));
        _0x190f7a.setX(_0x10a325, 0);
        _0x5d6765 = true;
        continue;
      }
      _0x529363.x += _0x529363.vx * _0x2794d3;
      _0x529363.y += _0x529363.vy * _0x2794d3;
      _0x529363.z += _0x529363.vz * _0x2794d3;
      const _0x1eeafd = _0x529363.t / _0x529363.ttl;
      const _0x1c518 = Math.min(1, _0x1eeafd * 6) * (1 - _0x1eeafd) * (1 - _0x1eeafd) * D.vapor.opacity;
      x.makeRotationY(_0x529363.yaw);
      x.multiply(F.makeRotationZ(_0x529363.roll + _0x529363.spin * _0x1eeafd));
      x.scale(G.set(_0x529363.size * (0.7 + _0x1eeafd * 0.82), _0x529363.size * (0.56 + _0x1eeafd * 1.34), 1));
      x.setPosition(_0x529363.x, _0x529363.y, _0x529363.z);
      J.setMatrixAt(_0x10a325, x);
      J.setColorAt(_0x10a325, m.setRGB(_0x529363.r, _0x529363.g, _0x529363.b));
      _0x190f7a.setX(_0x10a325, _0x1c518);
      _0x5d6765 = true;
      _0x4103e0++;
      _0x1d9b1f = _0x10a325 + 1;
    }
    if (_0x5d6765) {
      J.instanceMatrix.needsUpdate = true;
      J.instanceColor.needsUpdate = true;
      _0x190f7a.needsUpdate = true;
    }
    J.count = _0x1d9b1f;
    return _0x4103e0;
  }(_0xacdafa);
}
function ft(_0xa9373b, _0x5bbac7, _0x3ee885, _0x35003a, _0x4eaf35, _0x24d40b) {
  let _0x5b4f98 = 0;
  let _0x254f83 = 0;
  let _0x363d95 = false;
  const _0x447b89 = _0x3ee885 / 1000;
  const _0x3693f8 = _0xa9373b.rows;
  for (let _0x1c5967 = 0; _0x1c5967 < _0x3693f8.length; _0x1c5967++) {
    const _0x359e47 = _0x3693f8[_0x1c5967];
    if (_0x359e47.ttl <= 0) {
      continue;
    }
    _0x359e47.t += _0x3ee885;
    if (_0x359e47.t >= _0x359e47.ttl) {
      _0x359e47.ttl = 0;
      _0xa9373b.free[_0xa9373b.top++] = _0x1c5967;
      _0x5bbac7.setMatrixAt(_0x1c5967, _0xebfd31);
      _0x5bbac7.setColorAt(_0x1c5967, m.setRGB(0, 0, 0));
      _0x363d95 = true;
      continue;
    }
    if (!_0x4eaf35) {
      _0x359e47.vy += _0x359e47.gravity * _0x447b89;
      _0x359e47.x += _0x359e47.vx * _0x447b89;
      _0x359e47.y += _0x359e47.vy * _0x447b89;
      _0x359e47.z += _0x359e47.vz * _0x447b89;
    }
    const _0x223115 = _0x359e47.t / _0x359e47.ttl;
    const _0x5a558d = _0x35003a(_0x223115);
    const _0xebfe1f = _0x4eaf35 ? _0x251265(_0x223115, _0x359e47.size, _0x359e47.size + _0x359e47.grow) : _0x359e47.size * (0.6 + (1 - _0x223115) * 0.4);
    if (_0x4eaf35) {
      x.makeRotationY(_0x359e47.yaw);
      x.multiply(C.makeRotationZ(_0x359e47.vx));
      x.scale(b.set(_0xebfe1f * _0x359e47.aspectX, _0xebfe1f * _0x359e47.aspectY, _0xebfe1f));
      x.setPosition(_0x359e47.x, _0x359e47.y, _0x359e47.z);
    } else {
      const _0x32e25e = Math.hypot(_0x359e47.vx, _0x359e47.vy, _0x359e47.vz);
      if (_0x32e25e > 0.0001) {
        A.set(_0x359e47.vx, _0x359e47.vy, _0x359e47.vz).multiplyScalar(1 / _0x32e25e);
        w.setFromUnitVectors(v, A);
      } else {
        w.identity();
      }
      b.set(_0xebfe1f + _0x56c931(_0x32e25e), _0xebfe1f, _0xebfe1f);
      z.set(_0x359e47.x, _0x359e47.y, _0x359e47.z);
      x.compose(z, w, b);
    }
    _0x5bbac7.setMatrixAt(_0x1c5967, x);
    const _0x212f4b = _0x5a558d * _0x24d40b;
    _0x5bbac7.setColorAt(_0x1c5967, m.setRGB(_0x359e47.r * _0x212f4b, _0x359e47.g * _0x212f4b, _0x359e47.b * _0x212f4b));
    _0x363d95 = true;
    _0x5b4f98++;
    _0x254f83 = _0x1c5967 + 1;
  }
  if (_0x363d95) {
    _0x5bbac7.instanceMatrix.needsUpdate = true;
    _0x5bbac7.instanceColor.needsUpdate = true;
  }
  _0x5bbac7.count = _0x254f83;
  return _0x5b4f98;
}
export function resetFx() {
  if (_0x12dacf) {
    setFxProofVisible(true);
    dt(j, Z);
    dt(T, H);
    dt(W, K);
    dt(_, q);
    (function () {
      const _0xa61717 = N.rows;
      for (let _0x166a2a = 0; _0x166a2a < _0xa61717.length; _0x166a2a++) {
        _0xa61717[_0x166a2a].ttl = 0;
        N.free[_0x166a2a] = _0xa61717.length - 1 - _0x166a2a;
        for (let _0x33a67e = 0; _0x33a67e < 3; _0x33a67e++) {
          E[_0x33a67e].setMatrixAt(_0x166a2a, _0xebfd31);
          E[_0x33a67e].geometry.getAttribute("instanceOpacity").setX(_0x166a2a, 0);
        }
      }
      N.top = _0xa61717.length;
      N.cursor = 0;
      N.claims = 0;
      N.recycles = 0;
      for (let _0x5aed9e = 0; _0x5aed9e < 3; _0x5aed9e++) {
        E[_0x5aed9e].instanceMatrix.needsUpdate = true;
        E[_0x5aed9e].geometry.getAttribute("instanceOpacity").needsUpdate = true;
        E[_0x5aed9e].count = 0;
      }
    })();
    dt(Q, J);
    $ = 0;
    tt = 0;
    et = 0;
    nt = 0;
    rt = 0;
    ot = 0;
  }
}
export function setFxProofVisible(_0x3ce652) {
  if (_0x12dacf) {
    st = !!_0x3ce652;
    Z.visible = st;
    H.visible = st;
    K.visible = st;
    q.visible = st;
    for (let _0x27c532 = 0; _0x27c532 < E.length; _0x27c532++) {
      E[_0x27c532].visible = st;
    }
    J.visible = st;
  }
}
function dt(_0xc6e8ee, _0x1aba06) {
  const _0x18ebb0 = _0xc6e8ee.rows;
  const _0xd58291 = _0x1aba06.geometry.getAttribute("instanceOpacity");
  for (let _0x1ba20f = 0; _0x1ba20f < _0x18ebb0.length; _0x1ba20f++) {
    _0x18ebb0[_0x1ba20f].ttl = 0;
    _0xc6e8ee.free[_0x1ba20f] = _0x18ebb0.length - 1 - _0x1ba20f;
    _0x1aba06.setMatrixAt(_0x1ba20f, _0xebfd31);
    if (_0xd58291) {
      _0xd58291.setX(_0x1ba20f, 0);
    }
  }
  _0xc6e8ee.top = _0x18ebb0.length;
  _0xc6e8ee.cursor = 0;
  _0xc6e8ee.claims = 0;
  _0xc6e8ee.recycles = 0;
  _0x1aba06.instanceMatrix.needsUpdate = true;
  _0x1aba06.count = 0;
  if (_0xd58291) {
    _0xd58291.needsUpdate = true;
  }
}
export function fxStats() {
  const _0x4877bb = (Z?.count ? 1 : 0) + (H?.count ? 1 : 0) + (K?.count ? 1 : 0) + (q?.count ? 1 : 0) + (J?.count ? 1 : 0) + (E ? E.reduce((_0x5ed450, _0x3bcabb) => _0x5ed450 + (_0x3bcabb.count ? 1 : 0), 0) : 0);
  return {
    sparks: $,
    flashes: tt,
    rings: et,
    cores: nt,
    fragments: rt,
    vapor: ot,
    sparkMax: k,
    flashMax: S,
    ringMax: 24,
    coreMax: I,
    fragmentMax: X,
    vaporMax: P,
    fixedRows: k + S + 24 + I + X + P,
    fixedDrawPools: 8,
    activeDrawPools: _0x4877bb,
    physicalFade: "fixed-instance-opacity",
    proofVisible: st,
    recycles: {
      sparks: j?.recycles || 0,
      flashes: T?.recycles || 0,
      rings: W?.recycles || 0,
      cores: _?.recycles || 0,
      fragments: N?.recycles || 0,
      vapor: Q?.recycles || 0
    },
    crush: 0
  };
}