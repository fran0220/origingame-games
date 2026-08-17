import * as _0x6122ad from "three";
import { CONFIG as _0x23a078 } from "../config.js";
import { installView as _0x10475f } from "../sim/bridge.js";
import { PAL as _0x5c5034 } from "./palette.js";
import { postGain as _0x1bc359 } from "./post.js";
import { scene as _0x2861d1 } from "./scene.js";
import { towerPose as _0x3714ec } from "./tower.js";
import { DEFENSE_VFX_ART_SLOT as _0x2fd99a } from "./defense-vfx-art.js";
import { DEFENSE_VFX_PACK as _0x30e966 } from "./defense-vfx-pack.js";
import { crownRoot as _0x39150a, crownSignal as _0x281713, resetCrownPresentation as _0x2859da, setCrownPresentation as _0x10791c, triggerCrownMechanicalAction as _0x56c521 } from "./crown.js";
import { addTrauma as _0x3552a8 } from "./camera.js";
import { fxDirectedBurst as _0x41edee } from "./fx.js";
const g = document.getElementById("finale");
const M = document.getElementById("finaleTitle");
const b = document.getElementById("finaleMeta");
const w = document.getElementById("finaleFill");
const E = document.getElementById("finaleProgress");
const x = document.createElement("div");
x.id = "finaleSeals";
x.setAttribute("aria-hidden", "true");
const S = [];
for (let Fe = 0; Fe < 4; Fe++) {
  const We = document.createElement("i");
  We.setAttribute("data-seal", String(Fe + 1));
  x.append(We);
  S.push(We);
}
if (E?.parentNode) {
  E.parentNode.insertBefore(x, E);
}
const v = document.createElement("style");
v.textContent = "\n#finaleSeals {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 4px;\n  height: 4px;\n  margin-top: 7px;\n}\n#finaleSeals i {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border: 1px solid rgba(255,242,216,.17);\n  background: rgba(232,237,242,.07);\n  box-shadow: inset 0 0 0 1px rgba(7,19,26,.58);\n}\n#finaleSeals i::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: #ff4fd8;\n  box-shadow: 0 0 7px rgba(255,79,216,.72);\n  transform: scaleX(0);\n  transform-origin: 0 50%;\n  transition: transform 130ms ease, background 130ms ease, opacity 130ms ease;\n}\n#finaleSeals i.sealed::after { transform: scaleX(.18); opacity: .48; }\n#finaleSeals i.current::after {\n  transform: scaleX(1);\n  opacity: 1;\n  animation: finale-seal-live 760ms ease-in-out infinite alternate;\n}\n#finaleSeals i.broken::after {\n  transform: scaleX(1);\n  background: rgba(255,242,216,.30);\n  opacity: .42;\n}\n#finaleSeals i.linked::after {\n  transform: scaleX(1);\n  background: #fff2d8;\n  opacity: .92;\n}\n#finale.core-open { border-color: rgba(255,242,216,.74); }\n#finale.core-open #finaleTitle { text-shadow: 0 0 10px rgba(255,79,216,.48); }\n#finale.attack-live { box-shadow: 0 0 0 1px rgba(7,19,26,.82), 0 0 22px rgba(255,157,69,.18); }\n#finaleProgress { margin-top: 4px; }\n@keyframes finale-seal-live { from { filter: brightness(.78); } to { filter: brightness(1.5); } }\n@media (max-width: 600px) {\n  #finaleSeals { gap: 3px; height: 3px; margin-top: 5px; }\n  #finaleProgress { margin-top: 3px; }\n}\n@media (prefers-reduced-motion: reduce) {\n  #finaleSeals i.current::after { animation: none; }\n}";
document.head.append(v);
const A = !!_0x39150a;
const R = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
};
const C = new _0x6122ad.Color(_0x5c5034.capsule);
const O = new _0x6122ad.Color(_0x5c5034.muzzle);
const y = new _0x6122ad.Color(_0x5c5034.modCapsule);
const N = _0x281713.s;
const I = _0x2f31a3 => Math.max(0, Math.min(1, Number(_0x2f31a3) || 0));
const L = _0x27176a => {
  const _0x8493f9 = I(_0x27176a);
  return _0x8493f9 * _0x8493f9 * (3 - _0x8493f9 * 2);
};
function T(_0x26febb = 0.76, _0x116bef = 1) {
  const _0x5f55b5 = [[0.18, 0.84], [1.42, 0.62], [2.48, 0.92], [3.88, 0.58], [5.02, 0.72]];
  const _0x156b39 = [];
  const _0x3fe3a3 = [];
  for (const [_0x5587e1, _0xb88331] of _0x5f55b5) {
    const _0x36ae9a = Math.max(2, Math.ceil(_0xb88331 / 0.16));
    const _0x50649b = _0x156b39.length / 3;
    for (let _0x1bb8e7 = 0; _0x1bb8e7 <= _0x36ae9a; _0x1bb8e7++) {
      const _0x4d3109 = _0x5587e1 + _0xb88331 * _0x1bb8e7 / _0x36ae9a;
      const _0x753b40 = Math.cos(_0x4d3109);
      const _0x2cf36e = Math.sin(_0x4d3109);
      _0x156b39.push(_0x753b40 * _0x26febb, _0x2cf36e * _0x26febb, 0, _0x753b40 * _0x116bef, _0x2cf36e * _0x116bef, 0);
    }
    for (let _0x2e63c9 = 0; _0x2e63c9 < _0x36ae9a; _0x2e63c9++) {
      const _0x188779 = _0x50649b + _0x2e63c9 * 2;
      _0x3fe3a3.push(_0x188779, _0x188779 + 1, _0x188779 + 3, _0x188779, _0x188779 + 3, _0x188779 + 2);
    }
  }
  const _0x265b08 = new _0x6122ad.BufferGeometry();
  _0x265b08.setAttribute("position", new _0x6122ad.Float32BufferAttribute(_0x156b39, 3));
  _0x265b08.setIndex(_0x3fe3a3);
  _0x265b08.computeVertexNormals();
  return _0x265b08;
}
function z(_0x2d64a7) {
  return _0x30e966.components.find(_0x17570d => _0x17570d.id === _0x2d64a7) || null;
}
function k(_0x8bb80f) {
  if (!_0x8bb80f) {
    return null;
  }
  const _0x221b8b = new _0x6122ad.PlaneGeometry(1, 1);
  const [_0x462b16, _0xe14b71, _0x17d1dc, _0x128fa8] = _0x8bb80f.uv;
  const _0x477a4c = _0x221b8b.attributes.uv;
  for (let _0x512d55 = 0; _0x512d55 < _0x477a4c.count; _0x512d55++) {
    const _0x386b54 = _0x477a4c.getX(_0x512d55);
    const _0x485bdf = _0x477a4c.getY(_0x512d55);
    _0x477a4c.setXY(_0x512d55, _0x462b16 + _0x386b54 * (_0x17d1dc - _0x462b16), 1 - _0x128fa8 + _0x485bdf * (_0x128fa8 - _0xe14b71));
  }
  _0x477a4c.needsUpdate = true;
  _0x221b8b.translate(0.5 - _0x8bb80f.origin[0], _0x8bb80f.origin[1] - 0.5, 0);
  return _0x221b8b;
}
function D(_0x1b3a55, _0x5c2181 = 0) {
  return new _0x6122ad.MeshBasicMaterial({
    color: _0x1b3a55,
    transparent: true,
    opacity: _0x5c2181,
    blending: _0x6122ad.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    side: _0x6122ad.DoubleSide,
    forceSinglePass: true,
    fog: false,
    toneMapped: false
  });
}
function B(_0x242701, _0x54ca30, _0xc37cf5, _0x189cab) {
  const _0x382561 = _0x3714ec(_0x54ca30, R);
  _0x242701.position.set(_0x382561.x + Math.sin(_0x382561.yaw) * _0x189cab, _0xc37cf5 + _0x382561.alt, _0x382561.z + Math.cos(_0x382561.yaw) * _0x189cab);
  _0x242701.rotation.y = _0x382561.yaw;
  return _0x242701;
}
function P(_0x4de1a8, _0x135fee, _0x37dff6, _0x45808c) {
  _0x4de1a8.color.copy(_0x135fee).multiplyScalar(0.82 + _0x1bc359() * I(_0x37dff6) * 0.46);
  _0x4de1a8.opacity = I(_0x45808c);
}
const j = new _0x6122ad.Group();
j.name = "Crown uplink finale effects";
j.visible = false;
_0x2861d1.add(j);
const G = new _0x6122ad.OctahedronGeometry(0.18, 0);
const U = T(0.74, 1);
const $ = new _0x6122ad.BoxGeometry(0.065, 1, 0.065);
const F = [];
if (A) {
  for (const Ke of _0x281713.relays) {
    const He = new _0x6122ad.Group();
    He.name = "Crown signal relay";
    B(He, N + Ke.ds, Ke.y, _0x281713.depth);
    const Ve = D(_0x5c5034.capsule);
    const Xe = new _0x6122ad.Mesh($, Ve);
    Xe.position.y = -0.48;
    Xe.renderOrder = 2;
    He.add(Xe);
    const Ye = D(_0x5c5034.muzzle);
    const qe = new _0x6122ad.Mesh(G, Ye);
    qe.renderOrder = 3;
    He.add(qe);
    const _e = D(_0x5c5034.capsule);
    const Ze = new _0x6122ad.Mesh(U, _e);
    Ze.scale.setScalar(0.31);
    Ze.position.z = -0.015;
    Ze.renderOrder = 2;
    He.add(Ze);
    j.add(He);
    F.push({
      root: He,
      stem: Xe,
      stemMat: Ve,
      core: qe,
      coreMat: Ye,
      ring: Ze,
      ringMat: _e,
      baseScale: 0.31
    });
  }
}
const W = new _0x6122ad.Group();
W.name = "Crown uplink core";
if (A) {
  B(W, N, _0x281713.coreY, _0x281713.depth + 0.03);
}
j.add(W);
const K = D(_0x5c5034.muzzle);
const H = new _0x6122ad.Mesh(new _0x6122ad.OctahedronGeometry(0.28, 1), K);
H.renderOrder = 3;
W.add(H);
const V = [];
const X = T(0.82, 1);
for (let Je = 0; Je < 3; Je++) {
  const Qe = D(Je === 2 ? _0x5c5034.modCapsule : _0x5c5034.capsule);
  const et = new _0x6122ad.Mesh(X, Qe);
  et.scale.setScalar(0.48 + Je * 0.22);
  et.position.z = -0.025 - Je * 0.008;
  et.renderOrder = 2;
  W.add(et);
  V.push({
    ring: et,
    mat: Qe,
    baseScale: 0.48 + Je * 0.22
  });
}
const Y = T(0.64, 1);
const q = [];
for (let tt = 0; tt < 5; tt++) {
  const nt = D(tt === 4 ? _0x5c5034.modCapsule : _0x5c5034.capsule);
  const at = new _0x6122ad.Mesh(Y, nt);
  at.name = "Crown command-spine coupler";
  at.position.set(0, 1.48 + tt * 1.46, -0.035);
  at.scale.setScalar(0.165);
  at.visible = false;
  at.renderOrder = 2;
  W.add(at);
  q.push({
    node: at,
    mat: nt
  });
}
const _ = new _0x6122ad.Group();
_.name = "Meridian-to-Earth signal";
if (A) {
  B(_, N, _0x281713.coreY + 0.08, _0x281713.depth - 0.06);
}
j.add(_);
const Z = new _0x6122ad.CylinderGeometry(1, 1, 1, 6, 1, true);
const J = D(_0x5c5034.capsule);
const Q = new _0x6122ad.InstancedMesh(Z, J, 7);
Q.instanceMatrix.setUsage(_0x6122ad.DynamicDrawUsage);
Q.renderOrder = 2;
_.add(Q);
const ee = D(_0x5c5034.muzzle);
const te = new _0x6122ad.InstancedMesh(Z, ee, 11);
te.instanceMatrix.setUsage(_0x6122ad.DynamicDrawUsage);
te.renderOrder = 3;
_.add(te);
const ne = D(_0x5c5034.muzzle);
const ae = new _0x6122ad.Mesh(new _0x6122ad.OctahedronGeometry(0.5, 1), ne);
ae.renderOrder = 3;
_.add(ae);
const se = [];
const re = T(0.9, 1);
for (let st = 0; st < 3; st++) {
  const rt = D(st === 1 ? _0x5c5034.muzzle : _0x5c5034.capsule);
  const ot = new _0x6122ad.Mesh(re, rt);
  ot.renderOrder = 3;
  W.add(ot);
  se.push({
    ring: ot,
    mat: rt
  });
}
const oe = D(_0x5c5034.muzzle);
const ie = new _0x6122ad.InstancedMesh(new _0x6122ad.BoxGeometry(1, 1, 0.055), oe, 5);
ie.name = "Earth answer descending broken carrier";
ie.instanceMatrix.setUsage(_0x6122ad.DynamicDrawUsage);
ie.renderOrder = 3;
ie.visible = false;
W.add(ie);
const ce = [];
if (A && _0x2fd99a.tex) {
  const it = [["pressure-recoil-wisps", 4.6, -0.07], ["armor-plate-shard-fan", 7.4, 0.1], ["scuttle-cable-whip", 6.8, 0.12], ["scuttle-explosive-vent", 8.4, 0.08]];
  for (const [ct, lt, dt] of it) {
    const mt = z(ct);
    const pt = k(mt);
    if (!mt || !pt) {
      continue;
    }
    const ft = new _0x6122ad.MeshBasicMaterial({
      color: _0x5c5034.muzzle,
      map: _0x2fd99a.tex,
      transparent: true,
      opacity: 0,
      alphaTest: 0.018,
      depthWrite: false,
      depthTest: true,
      blending: mt.depth === "front-particles" ? _0x6122ad.NormalBlending : _0x6122ad.AdditiveBlending,
      side: _0x6122ad.DoubleSide,
      fog: false,
      toneMapped: false
    });
    ft.forceSinglePass = true;
    const ut = new _0x6122ad.Mesh(pt, ft);
    ut.name = "Crown action atlas " + ct;
    ut.visible = false;
    ut.position.z = dt;
    ut.renderOrder = mt.depth === "front-particles" ? 5 : 4;
    W.add(ut);
    ce.push({
      id: ct,
      component: mt,
      mesh: ut,
      mat: ft,
      width: lt
    });
  }
}
const le = new _0x6122ad.OctahedronGeometry(0.052, 0);
const de = [];
if (A) {
  for (let ht = 0; ht < 14; ht++) {
    const gt = D(ht % 4 == 0 ? _0x5c5034.muzzle : _0x5c5034.capsule);
    const Mt = new _0x6122ad.Mesh(le, gt);
    Mt.name = "Earthbound carrier packet";
    Mt.visible = false;
    Mt.renderOrder = 4;
    _.add(Mt);
    de.push({
      mote: Mt,
      mat: gt,
      seed: ht * 0.61803398875 % 1
    });
  }
}
let me = {
  phase: "dormant",
  elapsedMs: 0,
  kills: 0,
  quota: 0,
  progress: 0,
  wave: 0
};
let pe = 0;
let fe = 0;
let ue = 0;
let he = false;
let ge = 0;
let Me = -Infinity;
let be = -Infinity;
let we = -Infinity;
let Ee = -Infinity;
const xe = new _0x6122ad.Object3D();
const Se = Object.freeze([Object.freeze([-0.04, 8.18]), Object.freeze([0.24, 6.72]), Object.freeze([-0.19, 5.28]), Object.freeze([0.16, 3.86]), Object.freeze([-0.27, 2.47]), Object.freeze([0.02, 1.12])]);
function ve(_0x4fe9e6, _0x11f34e, _0x2a6739, _0x50d631, _0x5d8734, _0x551fe7, _0xd8bf66, _0x15bdee, _0x2b9962 = 0) {
  xe.position.set(_0x2a6739, _0x50d631, _0x5d8734);
  xe.rotation.set(0, 0, _0x2b9962);
  xe.scale.set(_0x551fe7, _0xd8bf66, _0x15bdee);
  xe.updateMatrix();
  _0x4fe9e6.setMatrixAt(_0x11f34e, xe.matrix);
}
function Ae(_0xceb36f, _0x4d35bc, _0x4702ed, _0x4d0c29 = false) {
  const _0x34cccf = Math.max(0, Number(_0xceb36f) || 0);
  Q.visible = _0x34cccf > 0.01 && _0x4d35bc > 0.001;
  te.visible = _0x34cccf > 0.01 && _0x4702ed > 0.001;
  const _0x222e3e = _0x34cccf / Q.count;
  for (let _0x414531 = 0; _0x414531 < Q.count; _0x414531++) {
    const _0x3d8601 = Math.max(0.001, _0x222e3e * (_0x4d0c29 ? 0.48 : 0.67));
    const _0x47c94b = (_0x414531 + 0.5) * _0x222e3e;
    const _0x100728 = Math.sin(_0x414531 * 2.17) * _0x4d35bc * 0.34;
    ve(Q, _0x414531, _0x100728, _0x47c94b, -_0x100728 * 0.32, _0x4d35bc * (1 + _0x414531 % 3 * 0.06), _0x3d8601, _0x4d35bc * (0.92 + _0x414531 % 2 * 0.08), (_0x414531 % 2 ? -1 : 1) * 0.018);
  }
  Q.instanceMatrix.needsUpdate = true;
  const _0x4d44b1 = _0x34cccf / te.count;
  for (let _0xb7fd73 = 0; _0xb7fd73 < te.count; _0xb7fd73++) {
    const _0x1f16e5 = Math.max(0.001, _0x4d44b1 * (_0x4d0c29 ? 0.38 : 0.58));
    const _0x5ed0b7 = (_0xb7fd73 + 0.5) * _0x4d44b1;
    const _0x4d5e0c = Math.cos(_0xb7fd73 * 1.73) * _0x4702ed * 0.58;
    ve(te, _0xb7fd73, _0x4d5e0c, _0x5ed0b7, -_0x4d5e0c * 0.25, _0x4702ed, _0x1f16e5, _0x4702ed, (_0xb7fd73 % 2 ? -1 : 1) * 0.012);
  }
  te.instanceMatrix.needsUpdate = true;
}
function Re(_0x2c0788 = 0) {
  const _0x5b5ad9 = I(_0x2c0788);
  ie.visible = _0x5b5ad9 > 0.01;
  for (let _0x41b400 = 0; _0x41b400 < ie.count; _0x41b400++) {
    const _0x3917ab = Se[_0x41b400];
    const _0x3abb7e = Se[_0x41b400 + 1];
    const _0x151626 = _0x3abb7e[0] - _0x3917ab[0];
    const _0x413a40 = _0x3abb7e[1] - _0x3917ab[1];
    const _0x5689c2 = Math.hypot(_0x151626, _0x413a40);
    ve(ie, _0x41b400, (_0x3917ab[0] + _0x3abb7e[0]) * 0.5, (_0x3917ab[1] + _0x3abb7e[1]) * 0.5, 0.038 + _0x41b400 * 0.004, 0.055 + _0x41b400 * 0.004, _0x5689c2 * 0.86, 0.055, Math.atan2(-_0x151626, _0x413a40));
  }
  ie.instanceMatrix.needsUpdate = true;
  P(oe, O, _0x5b5ad9, _0x5b5ad9 * 0.58);
}
function Ce(_0x32b4d1, _0x245c25, _0xc4c2eb, _0x22b74d, _0x193442, _0xecade9, _0x20fb2c = 0) {
  if (!_0x32b4d1) {
    return;
  }
  const _0x38e5a3 = _0x245c25 >= 0 && _0x245c25 < _0xc4c2eb;
  _0x32b4d1.mesh.visible = _0x38e5a3;
  if (!_0x38e5a3) {
    _0x32b4d1.mat.opacity = 0;
    return;
  }
  const _0x3eaf5b = I(_0x245c25 / _0xc4c2eb);
  const _0x282909 = L(Math.min(_0x3eaf5b / 0.1, (1 - _0x3eaf5b) / 0.26));
  const _0x36620f = _0x32b4d1.width;
  const _0x205235 = _0x36620f / _0x32b4d1.component.nativeAspect;
  _0x32b4d1.mesh.position.x = _0x193442 + _0x20fb2c * _0x3eaf5b;
  _0x32b4d1.mesh.position.y = _0xecade9 + Math.sin(_0x3eaf5b * Math.PI) * 0.22;
  _0x32b4d1.mesh.rotation.z = (_0x3eaf5b - 0.5) * (_0x32b4d1.id.includes("cable") ? 0.16 : 0.05);
  _0x32b4d1.mesh.scale.set(_0x36620f * (1 + _0x3eaf5b * 0.06), _0x205235 * (1 - _0x3eaf5b * 0.035), 1);
  _0x32b4d1.mat.opacity = _0x32b4d1.component.maxOpacity * _0x22b74d * _0x282909;
}
function Oe(_0xc089cb) {
  if (!ce.length) {
    return;
  }
  const _0xdbcfd5 = Math.max(0, Number(_0xc089cb) || 0);
  Ce(ce[0], _0xdbcfd5 - Me, 620, 0.78, -0.8, -0.15, -0.26);
  Ce(ce[1], _0xdbcfd5 - be, 980, 0.96, 0.25, 0.35, 1.1);
  Ce(ce[2], _0xdbcfd5 - be - 55, 920, 0.82, 0.65, 0.66, -0.58);
  Ce(ce[3], _0xdbcfd5 - we, 940, 1, -0.1, -0.72, 0.24);
}
function ye(_0x555e40) {
  const _0x5eac2c = _0x555e40?.warden?.attack;
  return _0x5eac2c === "sweepFire" || _0x5eac2c === "barrageBurst";
}
function Ne(_0x140ed, _0x4cfe44) {
  const _0x1073fb = _0x140ed?.warden;
  const _0x28ee24 = _0x4cfe44?.warden;
  return !_0x1073fb?.defeated && !!_0x28ee24?.defeated || !!_0x1073fb?.present && !_0x28ee24?.present && _0x4cfe44?.phase !== "dormant";
}
function Ie(_0x53ddc0 = 0) {
  ge = 0;
  if (!A || !j.visible || me.phase !== "transmit" && me.phase !== "answer" && me.phase !== "complete") {
    return;
  }
  const _0x16dece = me.phase === "transmit" || me.phase === "answer" || me.phase === "complete";
  const _0x7092ca = me.phase === "answer" || me.phase === "complete";
  const _0x276101 = _0x53ddc0 / 1000;
  for (let _0x46b125 = 0; _0x46b125 < de.length; _0x46b125++) {
    const _0x1b4e71 = de[_0x46b125];
    _0x1b4e71.mote.visible = _0x16dece;
    if (!_0x16dece) {
      continue;
    }
    const _0x3eea9d = _0x276101 * (_0x7092ca ? 0.075 : 0.16) + _0x1b4e71.seed;
    const _0x59cb6e = _0x3eea9d - Math.floor(_0x3eea9d);
    const _0x2d3e7f = _0x7092ca && _0x46b125 % 5 == 0;
    const _0x2251ff = _0x2d3e7f ? 1 - _0x59cb6e : _0x59cb6e;
    const _0x44e752 = _0x2251ff * Math.PI * 3.2 + _0x46b125 * 2.17;
    const _0x466a9 = (_0x7092ca ? 0.105 : 0.15) + _0x46b125 % 3 * 0.024;
    _0x1b4e71.mote.position.set(Math.cos(_0x44e752) * _0x466a9, 0.7 + _0x2251ff * 48.2, Math.sin(_0x44e752) * _0x466a9);
    const _0x1c14fd = L(Math.min(_0x59cb6e / 0.08, (1 - _0x59cb6e) / 0.12));
    const _0x2486b9 = 0.68 + Math.sin(_0x276101 * 4.2 + _0x46b125 * 1.7) * 0.32;
    _0x1b4e71.mote.scale.setScalar((_0x2d3e7f ? 1.14 : _0x7092ca ? 0.72 : 0.9) + _0x2486b9 * 0.3);
    _0x1b4e71.mote.rotation.y = _0x44e752;
    P(_0x1b4e71.mat, _0x2d3e7f || _0x46b125 % 4 == 0 ? O : C, _0x2d3e7f ? 0.82 : _0x7092ca ? 0.48 : 0.88, _0x1c14fd * (_0x2d3e7f ? 0.72 : _0x7092ca ? 0.42 : 0.7));
  }
  if (_0x7092ca && j.visible) {
    const _0x1089aa = 0.5 + Math.sin(_0x276101 * 2.35) * 0.5;
    Ae(48.2, 0.105 + _0x1089aa * 0.022, 0.031 + _0x1089aa * 0.01, true);
    P(J, C, 0.28 + _0x1089aa * 0.2, 0.055 + _0x1089aa * 0.035);
    P(ee, O, 0.34 + _0x1089aa * 0.28, 0.13 + _0x1089aa * 0.09);
    H.rotation.y = _0x276101 * 0.48;
    H.rotation.z = _0x276101 * -0.31;
    H.scale.setScalar(1.22 + _0x1089aa * 0.11);
    P(K, O, 0.58 + _0x1089aa * 0.22, 0.58 + _0x1089aa * 0.18);
    for (let _0x13df02 = 0; _0x13df02 < V.length; _0x13df02++) {
      const {
        ring: _0x832c11,
        mat: _0x1470cb,
        baseScale: _0x4ab15f
      } = V[_0x13df02];
      _0x832c11.visible = true;
      _0x832c11.rotation.z = _0x276101 * (_0x13df02 % 2 ? -0.3 : 0.36) + _0x13df02 * 0.65;
      _0x832c11.scale.setScalar(_0x4ab15f * (0.96 + _0x1089aa * 0.04));
      P(_0x1470cb, _0x13df02 === 2 ? y : C, 0.38 + _0x1089aa * 0.2, 0.09 + _0x1089aa * 0.08);
    }
    for (let _0x3e5565 = 0; _0x3e5565 < q.length; _0x3e5565++) {
      const {
        node: _0x5cd280,
        mat: _0x5be698
      } = q[_0x3e5565];
      _0x5cd280.visible = true;
      _0x5cd280.rotation.z = _0x276101 * (_0x3e5565 % 2 ? -0.22 : 0.27) + _0x3e5565 * 0.38;
      P(_0x5be698, _0x3e5565 === q.length - 1 ? y : C, 0.32 + _0x1089aa * 0.18, 0.12 + _0x1089aa * 0.1);
    }
    const _0x2741d9 = Math.max(0, me.elapsedMs - Ee);
    Re((1 - I(_0x2741d9 / 1850)) * (0.55 + _0x1089aa * 0.28));
    Oe(me.elapsedMs);
  }
  ge = requestAnimationFrame(Ie);
}
function Le() {
  if (A && !ge && typeof requestAnimationFrame != "undefined") {
    ge = requestAnimationFrame(Ie);
  }
}
function Te(_0x238bf2) {
  if (!g) {
    return;
  }
  const _0x4ee81f = _0x238bf2.phase;
  const _0x565bae = _0x4ee81f === "arming" || _0x4ee81f === "defend" || _0x4ee81f === "transmit" || _0x4ee81f === "answer";
  g.classList.toggle("on", _0x565bae);
  g.classList.toggle("transmit", _0x4ee81f === "transmit" || _0x4ee81f === "answer");
  g.dataset.phase = _0x4ee81f;
  g.setAttribute("aria-hidden", _0x565bae ? "false" : "true");
  if (!_0x565bae) {
    return;
  }
  const _0x35e2ae = function (_0x2af435) {
    const _0x32a081 = I(_0x2af435.progress);
    if (_0x2af435.phase === "arming") {
      return _0x32a081 * 0.12;
    } else if (_0x2af435.phase === "defend") {
      return 0.12 + _0x32a081 * 0.72;
    } else if (_0x2af435.phase === "transmit") {
      return 0.84 + _0x32a081 * 0.16;
    } else if (_0x2af435.phase === "answer" || _0x2af435.phase === "complete") {
      return 1;
    } else {
      return 0;
    }
  }(_0x238bf2);
  const _0x4fa6df = Math.round(_0x35e2ae * 100);
  if (_0x4ee81f === "arming") {
    M.textContent = _0x238bf2.warden?.present ? "CROWN WARDEN // INTERLOCK DESCENDING" : "CROWN UPLINK // HOLD THE SIGNAL";
    b.textContent = _0x238bf2.warden?.present ? "BREAK FOUR SEALS · FIRE WHEN THE CENTRAL IRIS OPENS" : "ARMING BATTERED ARRAY · CARRIER " + _0x4fa6df + "%";
  } else if (_0x4ee81f === "defend") {
    const _0x3fb73a = _0x238bf2.warden;
    if (_0x3fb73a?.present) {
      const _0x370bd3 = _0x238bf2.stage === "contain" ? "CONTAIN COUNTERASSAULT" : _0x238bf2.stage === "scuttle" ? "SCUTTLE RESPONSE" : "INTERCEPT PACKET";
      M.textContent = "CROWN WARDEN // " + _0x370bd3;
      const _0x34bbe9 = Math.max(1, Math.min(4, Number(_0x3fb73a.seal) || 1));
      const _0x3bf8c5 = Math.max(0, Math.ceil(_0x3fb73a.hp)) + "/" + _0x3fb73a.maxHp;
      const _0xe03a8f = _0x3fb73a.attack;
      b.textContent = _0xe03a8f === "exposed" ? "SEAL " + _0x34bbe9 + "/4 · CORE OPEN — FIRE NOW · " + _0x3bf8c5 : _0xe03a8f === "sweepTell" ? "SEAL " + _0x34bbe9 + "/4 · BEAM CHARGING — LEAVE ITS LANE · CORE LOCKED" : _0xe03a8f === "sweepFire" ? "SEAL " + _0x34bbe9 + "/4 · SWEEP LIVE — MOVE · CORE LOCKED" : _0xe03a8f === "barrageTell" ? "SEAL " + _0x34bbe9 + "/4 · IMPACT ZONE MARKED — REDIRECT · CORE LOCKED" : _0xe03a8f === "barrageBurst" ? "SEAL " + _0x34bbe9 + "/4 · BARRAGE LIVE — CLEAR THE MARK · CORE LOCKED" : "SEAL " + _0x34bbe9 + "/4 · CORE " + _0x3bf8c5 + " · WAIT FOR THE OPENING";
    } else {
      M.textContent = "CROWN WARDEN // RELEASE";
      b.textContent = "TARGET DOWN · " + _0x238bf2.kills + " SUPPORT HOSTILES CLEARED · LINK " + _0x4fa6df + "%";
    }
  } else if (_0x4ee81f === "transmit") {
    M.textContent = "CROWN UPLINK // EARTHBOUND CARRIER";
    b.textContent = "TRANSMITTING MERIDIAN → EARTH · " + _0x4fa6df + "%";
  } else {
    const _0x3e12ab = Math.max(0, Number(_0x238bf2.answerRemainingMs) || 0);
    M.textContent = "CROWN UPLINK // EARTH ANSWERS";
    b.textContent = "LINK CONFIRMED · SURVIVE THE RELEASE · RESULTS IN " + (_0x3e12ab / 1000).toFixed(1) + "s";
  }
  const _0x13ff41 = _0x238bf2.warden?.attack || "";
  g.classList.toggle("core-open", _0x13ff41 === "exposed" || _0x4ee81f === "transmit" || _0x4ee81f === "answer");
  g.classList.toggle("attack-live", _0x13ff41 === "sweepFire" || _0x13ff41 === "barrageBurst");
  const _0x483523 = Math.max(1, Math.min(4, Number(_0x238bf2.warden?.seal) || 1));
  for (let _0x5460f1 = 0; _0x5460f1 < S.length; _0x5460f1++) {
    const _0x578e07 = S[_0x5460f1];
    _0x578e07.className = "";
    if (_0x4ee81f === "transmit" || _0x4ee81f === "answer") {
      _0x578e07.classList.add("linked");
    } else if (_0x238bf2.warden?.defeated || !_0x238bf2.warden?.present && _0x4ee81f === "defend") {
      _0x578e07.classList.add("broken");
    } else if (_0x4ee81f === "arming") {
      _0x578e07.classList.add(_0x5460f1 === 0 ? "current" : "sealed");
    } else if (_0x5460f1 < _0x483523 - 1) {
      _0x578e07.classList.add("broken");
    } else if (_0x5460f1 === _0x483523 - 1) {
      _0x578e07.classList.add("current");
    } else {
      _0x578e07.classList.add("sealed");
    }
  }
  w.style.transform = "scaleX(" + _0x35e2ae + ")";
  E.setAttribute("aria-valuenow", String(_0x4fa6df));
  E.setAttribute("aria-valuetext", _0x4fa6df + "% " + _0x4ee81f);
}
function ze(_0xe8e30c, _0x398a7c) {
  if (A) {
    Me = Math.max(0, Number(_0x398a7c) || 0);
    _0x3552a8(_0x23a078.juice.shake.kill * 0.32);
  }
}
function ke(_0x3fccd3, _0x230da6 = false) {
  if (he) {
    return;
  }
  he = true;
  ue = 1;
  const _0x53b858 = Math.max(0, Number(_0x3fccd3?.elapsedMs) || 0);
  if (!_0x230da6 && Ne(me, _0x3fccd3)) {
    be = _0x53b858;
    _0x56c521("rupture", _0x53b858);
  }
  _0x56c521("transmission", _0x53b858);
  we = _0x53b858;
  Le();
  if (A) {
    _0x41edee(_0x23a078.juice.death, N, _0x281713.coreY, _0x5c5034.capsule, 0, 1, 1.15, 1.35);
    _0x41edee(_0x23a078.juice.impact, N, _0x281713.coreY, _0x5c5034.muzzle, 0, 1, 0.72, 1.55);
    _0x3552a8(_0x23a078.juice.shake.boom * 1.45);
    me = {
      ...me,
      ..._0x3fccd3
    };
  }
}
function De(_0x6dafa4, _0x1d0a1d) {
  if (_0x1d0a1d.phase === "arming") {
    return I(_0x1d0a1d.progress * 3.25 - _0x6dafa4);
  } else if (_0x1d0a1d.phase === "defend" || _0x1d0a1d.phase === "transmit") {
    return 1;
  } else if (_0x1d0a1d.phase === "answer") {
    return 0.78;
  } else if (_0x1d0a1d.phase === "complete") {
    return 0.52;
  } else {
    return 0;
  }
}
function Be(_0xfea55a) {
  if (!A) {
    return;
  }
  const _0x21dec8 = _0xfea55a.phase;
  const _0x476134 = I(_0xfea55a.progress);
  const _0x2d62a7 = _0x21dec8 !== "dormant";
  j.visible = _0x2d62a7;
  if (!_0x2d62a7) {
    return;
  }
  const _0x12ceed = Math.max(0, Number(_0xfea55a.elapsedMs) || 0) / 1000;
  const _0x1792cb = _0x21dec8 === "arming" ? _0x476134 * 0.48 : _0x21dec8 === "defend" ? 0.48 + _0x476134 * 0.42 : _0x21dec8 === "transmit" ? 1 : _0x21dec8 === "answer" ? 0.82 : 0.68;
  const _0x234654 = 0.5 + Math.sin(_0x12ceed * (_0x21dec8 === "defend" ? 5.2 : 3.1)) * 0.5;
  for (let _0xc85401 = 0; _0xc85401 < F.length; _0xc85401++) {
    const _0x4d8fda = F[_0xc85401];
    const _0x220b79 = De(_0xc85401, _0xfea55a);
    _0x4d8fda.root.visible = _0x220b79 > 0.015;
    if (!_0x4d8fda.root.visible) {
      continue;
    }
    const _0x48257f = 0.9 + _0x234654 * 0.11 + ue * 0.16;
    _0x4d8fda.core.scale.setScalar(0.8 + _0x220b79 * 0.42 + ue * 0.08);
    _0x4d8fda.ring.scale.setScalar(_0x4d8fda.baseScale * (0.9 + _0x220b79 * 0.14 + _0x234654 * 0.035));
    _0x4d8fda.ring.rotation.z = _0x12ceed * (_0xc85401 % 2 ? -0.75 : 0.75) + _0xc85401 * 0.9;
    P(_0x4d8fda.stemMat, C, _0x220b79, _0x220b79 * 0.36);
    P(_0x4d8fda.coreMat, O, _0x220b79 * _0x48257f, _0x220b79 * 0.78);
    P(_0x4d8fda.ringMat, C, _0x220b79 * _0x48257f, _0x220b79 * (0.2 + _0x234654 * 0.1));
  }
  W.visible = _0x1792cb > 0.04;
  const _0x38448c = 0.92 + _0x234654 * 0.13 + ue * 0.18;
  H.scale.setScalar(0.76 + _0x1792cb * 0.58 + ue * 0.12);
  P(K, O, _0x1792cb * _0x38448c, 0.36 + _0x1792cb * 0.58);
  for (let _0x3d5943 = 0; _0x3d5943 < V.length; _0x3d5943++) {
    const _0x29c1e5 = I(_0x21dec8 === "arming" ? _0x476134 * 3 - _0x3d5943 : (_0xfea55a.wave || 0) - _0x3d5943 + (_0x21dec8 === "transmit" || _0x21dec8 === "answer" ? 1 : 0));
    const {
      ring: _0x5615de,
      mat: _0x26d728,
      baseScale: _0x4b83a5
    } = V[_0x3d5943];
    _0x5615de.visible = _0x29c1e5 > 0.01;
    _0x5615de.rotation.z = _0x12ceed * (_0x3d5943 % 2 ? -0.55 : 0.7) + _0x3d5943 * 0.65;
    _0x5615de.scale.setScalar(_0x4b83a5 * (0.9 + _0x29c1e5 * 0.1 + ue * 0.045));
    P(_0x26d728, _0x3d5943 === 2 ? y : C, _0x29c1e5 * _0x38448c, _0x29c1e5 * (0.12 + _0x234654 * 0.12 + ue * 0.14));
  }
  for (let _0x7ab1dc = 0; _0x7ab1dc < q.length; _0x7ab1dc++) {
    const _0x401761 = I(_0x1792cb * 5.2 - _0x7ab1dc * 0.72);
    const {
      node: _0x1546ad,
      mat: _0x4f26ce
    } = q[_0x7ab1dc];
    _0x1546ad.visible = _0x401761 > 0.03;
    _0x1546ad.rotation.z = _0x12ceed * (_0x7ab1dc % 2 ? -0.36 : 0.42) + _0x7ab1dc * 0.38;
    P(_0x4f26ce, _0x7ab1dc === q.length - 1 ? y : C, _0x401761 * _0x38448c, _0x401761 * (0.1 + _0x234654 * 0.12));
  }
  _.visible = _0x21dec8 === "transmit" || _0x21dec8 === "answer" || _0x21dec8 === "complete";
  if (_.visible) {
    Le();
  }
  if (_0x21dec8 === "transmit") {
    const _0x35c3be = L(_0x476134 / 0.16);
    const _0x268a61 = 1 - L((_0x476134 - 0.72) / 0.28) * 0.72;
    const _0x2d7c1f = Math.max(0.01, _0x35c3be * 52);
    Ae(_0x2d7c1f, 0.19 + _0x234654 * 0.025, 0.054 + _0x234654 * 0.009, false);
    ae.position.y = _0x2d7c1f;
    ae.scale.setScalar(0.35 + _0x234654 * 0.14);
    P(J, C, _0x268a61, _0x268a61 * 0.24);
    P(ee, O, _0x268a61, _0x268a61 * 0.86);
    P(ne, O, _0x268a61, _0x268a61 * 0.64);
    for (let _0x17b9bb = 0; _0x17b9bb < se.length; _0x17b9bb++) {
      const _0x1163f2 = I((_0x476134 - 0.055 - _0x17b9bb * 0.13) / 0.48);
      const _0x1041f9 = _0x1163f2 > 0 && _0x1163f2 < 1;
      const {
        ring: _0x1a6bba,
        mat: _0x4b4667
      } = se[_0x17b9bb];
      _0x1a6bba.visible = _0x1041f9;
      if (!_0x1041f9) {
        continue;
      }
      const _0x123427 = 0.72 + _0x1163f2 * (4.4 + _0x17b9bb * 1.08);
      _0x1a6bba.scale.setScalar(_0x123427);
      P(_0x4b4667, _0x17b9bb === 1 ? O : C, 1 - _0x1163f2, (1 - _0x1163f2) * (0.54 - _0x17b9bb * 0.06));
    }
    _0x10791c({
      energy: 1,
      surge: Math.max(ue, _0x268a61 * 0.62),
      nowMs: _0xfea55a.elapsedMs,
      attackCommitted: false
    });
  } else if (_0x21dec8 === "answer" || _0x21dec8 === "complete") {
    Ae(48.2, 0.105, 0.031, true);
    ae.visible = false;
    P(J, C, 0.32, 0.07);
    P(ee, O, 0.38, 0.16);
    for (const {
      ring: _0x3489f6
    } of se) {
      _0x3489f6.visible = false;
    }
    const _0x5bf590 = Math.max(0, _0xfea55a.elapsedMs - Ee);
    Re(1 - I(_0x5bf590 / 1850));
    _0x10791c({
      energy: 0.72,
      surge: 0,
      nowMs: _0xfea55a.elapsedMs,
      attackCommitted: false
    });
  }
  if (_0x21dec8 !== "transmit" && _0x21dec8 !== "answer" && _0x21dec8 !== "complete") {
    _.visible = false;
    Q.visible = false;
    te.visible = false;
    Re(0);
    for (const {
      ring: _0x5ec1f9
    } of se) {
      _0x5ec1f9.visible = false;
    }
    _0x10791c({
      energy: _0x1792cb,
      surge: ue,
      nowMs: _0xfea55a.elapsedMs,
      attackCommitted: ye(_0xfea55a)
    });
  }
  Oe(_0xfea55a.elapsedMs);
}
function Pe(_0x42790b) {
  me = {
    ...me,
    ..._0x42790b
  };
  pe = me.elapsedMs;
  fe = me.wave;
  ue = 0;
  he = false;
  Me = -Infinity;
  be = -Infinity;
  we = -Infinity;
  Ee = -Infinity;
  ae.visible = true;
  Te(me);
  Be(me);
}
function je(_0x72ece4) {
  const _0x1037d2 = {
    ...me,
    ..._0x72ece4
  };
  const _0x15ec3f = Math.max(0, Math.min(100, _0x1037d2.elapsedMs - pe));
  ue = Math.max(0, ue - _0x15ec3f / 520);
  if (_0x1037d2.phase === "defend" && _0x1037d2.wave > fe) {
    for (let _0x19c35b = fe + 1; _0x19c35b <= _0x1037d2.wave; _0x19c35b++) {
      ze(0, _0x1037d2.elapsedMs);
    }
    _0x56c521("packet", _0x1037d2.elapsedMs);
    ue = 1;
  }
  const _0x55684f = Ne(me, _0x1037d2);
  if (_0x55684f) {
    be = _0x1037d2.elapsedMs;
    _0x56c521("rupture", _0x1037d2.elapsedMs);
  }
  if (_0x1037d2.phase === "answer" && me.phase !== "answer") {
    Ee = _0x1037d2.elapsedMs;
  }
  if (_0x1037d2.phase === "transmit" && !he) {
    ke(_0x1037d2, _0x55684f);
  }
  me = _0x1037d2;
  pe = _0x1037d2.elapsedMs;
  fe = Math.max(fe, _0x1037d2.wave);
  Te(_0x1037d2);
  Be(_0x1037d2);
}
function Ge(_0x1dc077) {
  ke(_0x1dc077 || me);
  Te(_0x1dc077 || me);
  Be(_0x1dc077 || me);
}
function Ue() {
  me = {
    phase: "dormant",
    elapsedMs: 0,
    kills: 0,
    quota: 0,
    progress: 0,
    wave: 0
  };
  pe = 0;
  fe = 0;
  ue = 0;
  he = false;
  Me = -Infinity;
  be = -Infinity;
  we = -Infinity;
  Ee = -Infinity;
  if (ge && typeof cancelAnimationFrame != "undefined") {
    cancelAnimationFrame(ge);
    ge = 0;
  }
  j.visible = false;
  _.visible = false;
  Q.visible = false;
  te.visible = false;
  ae.visible = true;
  for (const {
    ring: _0xa2e15a
  } of se) {
    _0xa2e15a.visible = false;
  }
  for (const {
    node: _0x427794
  } of q) {
    _0x427794.visible = false;
  }
  Re(0);
  for (const _0x5bd27d of ce) {
    _0x5bd27d.mesh.visible = false;
    _0x5bd27d.mat.opacity = 0;
  }
  _0x2859da();
  Te(me);
}
Ue();
let $e = false;
export function initFinaleView() {
  return !$e && (_0x10475f({
    finale: {
      started: Pe,
      sync: je,
      transmit: Ge,
      reset: Ue
    }
  }), $e = true, true);
}
export function finalePresentationSnapshot() {
  return {
    ...me,
    visible: j.visible,
    transmitting: he,
    waveKick: ue,
    banner: !!g?.classList.contains("on"),
    crown: A,
    signalS: N,
    portraitCarrier: false,
    canonicalAxis: true,
    axisCouplers: q.length,
    carrierSegments: Q.count + te.count,
    crownAtlasEffects: ce.length,
    perfectRings: 0,
    runtimeTextures: 0,
    returnRailSegments: ie.count,
    carrierClockActive: ge !== 0
  };
}
if (typeof window != "undefined") {
  window.__HB_FINALE_PRESENTATION = finalePresentationSnapshot;
}