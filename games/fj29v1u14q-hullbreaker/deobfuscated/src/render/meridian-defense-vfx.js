import * as _0x1cb2f9 from "three";
import { CONFIG as _0x1e5f74 } from "../config.js";
import { normalAscentPitchAt as _0x5ae876 } from "../pure/ascent.js";
import { installView as _0x3da011 } from "../sim/bridge.js";
import { DEFENSE_VFX_ART_SLOT as _0x18068e } from "./defense-vfx-art.js";
import { DEFENSE_VFX_PACK as _0x58e1a9 } from "./defense-vfx-pack.js";
import { foregroundResponseSockets as _0x3a025d, foregroundVentEmitters as _0xab3800, resetForegroundNerveWake as _0x521f2c, syncForegroundNerveWake as _0x471011 } from "./level.js";
import { fxVapor as _0x309b4c } from "./fx.js";
import { PAL as _0x756cca } from "./palette.js";
import { postGain as _0x422b62 } from "./post.js";
import { HIDE as _0x6b5f8b, scene as _0x51ced8 } from "./scene.js";
const p = _0x3a025d();
const M = _0xab3800();
const g = Array.from({
  length: 6
}, () => []);
const w = Array.from({
  length: 6
}, () => []);
for (const Ae of p) {
  if (Ae.phase >= 0 && Ae.phase < g.length) {
    g[Ae.phase].push(Ae);
  }
}
for (const Ue of g) {
  Ue.sort((_0x3c6773, _0x3d3316) => _0x3c6773.route.s - _0x3d3316.route.s);
}
for (const Ie of M) {
  if (Ie.phase >= 0 && Ie.phase < w.length) {
    w[Ie.phase].push(Ie);
  }
}
for (const Oe of w) {
  Oe.sort((_0x286c8f, _0x43fa8e) => _0x286c8f.s - _0x43fa8e.s);
}
const v = new Map();
for (const Ce of _0x58e1a9.components) {
  const Ve = Ce.defenseState + ":" + Ce.timingState;
  if (!v.has(Ve)) {
    v.set(Ve, []);
  }
  v.get(Ve).push(Ce);
}
const b = {
  enabled: !!_0x18068e.tex,
  sockets: p.length,
  socketKinds: Object.fromEntries([...new Set(p.map(_0x5686c7 => _0x5686c7.kind))].sort().map(_0x31d844 => [_0x31d844, p.filter(_0x3370d4 => _0x3370d4.kind === _0x31d844).length])),
  poolGeometry: _0x18068e.tex ? 1 : 0,
  poolSlots: _0x18068e.tex ? 1 : 0,
  mechanismPools: 2,
  mechanismParts: 10,
  ambientLifePools: 0,
  ambientLifeParts: 0,
  ambientLifeDrawSlots: 0,
  ambientLifeVisible: 0,
  ambientLifeMotions: 0,
  maxVisible: 0,
  drawSlots: 0,
  mechanismDrawSlots: 0,
  readableExtent: 0,
  stage: "dormant",
  face: 0,
  state: "observe",
  socketId: null,
  componentId: null,
  stageSwitches: 0,
  activations: 0,
  ambientCycles: 0,
  missedSocketEvents: 0,
  ventEmitters: M.length,
  ventPulses: 0,
  resets: 0
};
const y = new Set();
const x = Object.create(null);
const S = Object.create(null);
let k = null;
let D = null;
let L = null;
let j = null;
let R = null;
let P = null;
let A = null;
let U = null;
let I = null;
let O = null;
let C = null;
let V = null;
if (_0x18068e.tex) {
  k = new _0x1cb2f9.PlaneGeometry(1, 1);
  k.userData.unitUv = Float32Array.from(k.attributes.uv.array);
  D = new _0x1cb2f9.MeshBasicMaterial({
    color: _0x756cca.muzzle,
    map: _0x18068e.tex,
    transparent: true,
    opacity: 0,
    alphaTest: 0.018,
    depthTest: true,
    depthWrite: false,
    side: _0x1cb2f9.DoubleSide,
    fog: true,
    toneMapped: false
  });
  D.forceSinglePass = true;
  D.name = "Meridian defense response atlas";
  D.alphaToCoverage = true;
  L = new _0x1cb2f9.Mesh(k, D);
  L.name = "Meridian defense response pooled plane";
  L.userData.environmentRole = "meridian-defense-response";
  L.userData.environmentOnly = true;
  L.userData.attachments = Object.freeze([]);
  L.matrixAutoUpdate = false;
  L.frustumCulled = true;
  L.visible = false;
  _0x51ced8.add(L);
}
j = new _0x1cb2f9.Group();
j.name = "Meridian defense body-owned mechanism";
j.userData.environmentRole = "meridian-defense-response";
j.userData.environmentOnly = true;
j.userData.attachments = Object.freeze([]);
j.matrixAutoUpdate = false;
j.visible = false;
A = new _0x1cb2f9.MeshStandardMaterial({
  color: 16777215,
  roughness: 0.66,
  metalness: 0.68,
  flatShading: true,
  fog: true
});
A.name = "Meridian defense moving armour";
U = new _0x1cb2f9.MeshStandardMaterial({
  color: _0x756cca.limb.machine,
  roughness: 0.48,
  metalness: 0.78,
  emissive: _0x756cca.glowOff,
  emissiveIntensity: 0,
  flatShading: true,
  fog: true
});
U.name = "Meridian defense buried conductors";
R = new _0x1cb2f9.InstancedMesh(function () {
  const _0x1ccbd4 = [[-0.5, -0.29], [-0.34, -0.5], [0.22, -0.45], [0.5, -0.16], [0.39, 0.31], [0.1, 0.5], [-0.43, 0.25]];
  const _0x4ed725 = [];
  const _0x3d240c = (_0x209707, _0x1c3c2b) => _0x4ed725.push(_0x209707[0], _0x209707[1], _0x1c3c2b);
  for (let _0x4becb = 1; _0x4becb < _0x1ccbd4.length - 1; _0x4becb++) {
    _0x3d240c(_0x1ccbd4[0], 0.5);
    _0x3d240c(_0x1ccbd4[_0x4becb], 0.5);
    _0x3d240c(_0x1ccbd4[_0x4becb + 1], 0.5);
    _0x3d240c(_0x1ccbd4[0], -0.5);
    _0x3d240c(_0x1ccbd4[_0x4becb + 1], -0.5);
    _0x3d240c(_0x1ccbd4[_0x4becb], -0.5);
  }
  for (let _0x2aaefa = 0; _0x2aaefa < _0x1ccbd4.length; _0x2aaefa++) {
    const _0x2dd462 = _0x1ccbd4[_0x2aaefa];
    const _0x11df0a = _0x1ccbd4[(_0x2aaefa + 1) % _0x1ccbd4.length];
    _0x3d240c(_0x2dd462, -0.5);
    _0x3d240c(_0x11df0a, -0.5);
    _0x3d240c(_0x11df0a, 0.5);
    _0x3d240c(_0x2dd462, -0.5);
    _0x3d240c(_0x11df0a, 0.5);
    _0x3d240c(_0x2dd462, 0.5);
  }
  const _0x4fad0c = new _0x1cb2f9.BufferGeometry();
  _0x4fad0c.setAttribute("position", new _0x1cb2f9.Float32BufferAttribute(_0x4ed725, 3));
  _0x4fad0c.computeVertexNormals();
  return _0x4fad0c;
}(), A, 6);
R.name = "Meridian defense shutters clamps and vent louvres";
R.frustumCulled = false;
R.instanceMatrix.setUsage(_0x1cb2f9.DynamicDrawUsage);
const E = new _0x1cb2f9.Color(_0x756cca.limb.hull);
const X = new _0x1cb2f9.Color(_0x756cca.limb.scute);
for (let Ee = 0; Ee < 6; Ee++) {
  R.setColorAt(Ee, Ee % 3 ? E : X);
}
R.instanceColor.needsUpdate = true;
j.add(R);
P = new _0x1cb2f9.InstancedMesh(new _0x1cb2f9.BoxGeometry(1, 1, 1), U, 4);
P.name = "Meridian defense staged conduit rails";
P.frustumCulled = false;
P.instanceMatrix.setUsage(_0x1cb2f9.DynamicDrawUsage);
j.add(P);
_0x51ced8.add(j);
b.mechanismPools = 2;
b.mechanismParts = 10;
C = new _0x1cb2f9.MeshStandardMaterial({
  color: 16777215,
  roughness: 0.74,
  metalness: 0.52,
  flatShading: true,
  fog: true
});
C.name = "Meridian pixel-native maintenance castings";
V = new _0x1cb2f9.MeshStandardMaterial({
  color: _0x756cca.limb.shadow,
  roughness: 0.84,
  metalness: 0.34,
  flatShading: true,
  fog: true
});
V.name = "Meridian pixel-native maintenance joints";
I = new _0x1cb2f9.InstancedMesh(new _0x1cb2f9.BoxGeometry(1, 1, 1), C, 9);
O = new _0x1cb2f9.InstancedMesh(new _0x1cb2f9.BoxGeometry(1, 1, 1), V, 6);
I.name = "Meridian dormant maintenance carriage shells";
O.name = "Meridian dormant maintenance carriage joints";
for (const Xe of [I, O]) {
  Xe.frustumCulled = false;
  Xe.instanceMatrix.setUsage(_0x1cb2f9.DynamicDrawUsage);
  Xe.userData.environmentRole = "meridian-ambient-maintenance";
  Xe.userData.environmentOnly = true;
  _0x51ced8.add(Xe);
}
const $ = new _0x1cb2f9.Color(_0x756cca.limb.hull);
const z = new _0x1cb2f9.Color(_0x756cca.limb.scute);
for (let $e = 0; $e < I.count; $e++) {
  I.setColorAt($e, $e % 3 ? $ : z);
}
I.instanceColor.needsUpdate = true;
b.ambientLifePools = 2;
b.ambientLifeParts = I.count + O.count;
const B = new _0x1cb2f9.Matrix4();
const N = new _0x1cb2f9.Matrix4();
const G = new _0x1cb2f9.Matrix4();
const F = new _0x1cb2f9.Vector3();
const T = new _0x1cb2f9.Vector3();
const _ = new _0x1cb2f9.Vector3();
const Y = new _0x1cb2f9.Matrix4();
const Z = new _0x1cb2f9.Object3D();
const H = new _0x1cb2f9.Color();
const W = {
  open: 0,
  strike: 0,
  shear: 0,
  vent: 0
};
const q = new _0x1cb2f9.Matrix4();
const K = new _0x1cb2f9.Matrix4();
const J = new _0x1cb2f9.Matrix4();
const Q = new _0x1cb2f9.Vector3();
const ee = new _0x1cb2f9.Vector3();
const te = new Array(3).fill(null);
let ne = "";
let ae = null;
let se = null;
let oe = "dormant";
let re = -1;
let ie = -1;
let le = -1;
let ce = false;
let ue = -1;
let me = "";
let fe = -1;
const de = 2800;
function he(_0x1f6677) {
  let _0x3d267e = 2166136261;
  for (let _0x141612 = 0; _0x141612 < _0x1f6677.length; _0x141612++) {
    _0x3d267e ^= _0x1f6677.charCodeAt(_0x141612);
    _0x3d267e = Math.imul(_0x3d267e, 16777619);
  }
  return _0x3d267e >>> 0;
}
function pe() {
  if (I && O) {
    if (!ce) {
      for (let _0x1f7696 = 0; _0x1f7696 < I.count; _0x1f7696++) {
        I.setMatrixAt(_0x1f7696, _0x6b5f8b);
      }
      for (let _0x467c44 = 0; _0x467c44 < O.count; _0x467c44++) {
        O.setMatrixAt(_0x467c44, _0x6b5f8b);
      }
      I.instanceMatrix.needsUpdate = true;
      O.instanceMatrix.needsUpdate = true;
      ce = true;
    }
    b.ambientLifeVisible = 0;
    b.ambientLifeMotions = 0;
    b.ambientLifeDrawSlots = 0;
  }
}
function Me(_0x230e06, _0x1f3020, _0x1a7f52, _0x66dca6, _0x1bbcd8, _0x114503, _0x5d1591, _0x4116cb, _0x2f5e1a, _0x135c1b, _0x43769b = 0) {
  const _0x40c733 = _0x1a7f52.world.yaw;
  q.makeRotationY(_0x40c733);
  q.multiply(K.makeRotationZ(_0x66dca6));
  J.copy(q);
  if (_0x43769b) {
    J.multiply(K.makeRotationZ(_0x43769b));
  }
  J.scale(Q.set(_0x4116cb, _0x2f5e1a, _0x135c1b));
  ee.set(_0x1bbcd8, _0x114503, _0x5d1591).applyMatrix4(q);
  J.setPosition(_0x1a7f52.world.x + ee.x, _0x1a7f52.world.y + ee.y, _0x1a7f52.world.z + ee.z);
  _0x230e06.setMatrixAt(_0x1f3020, J);
}
function ge(_0x46e526) {
  if (!_0x46e526 || _0x46e526.stage !== "dormant" || !(_0x46e526.face > 0) || _0x46e526.reason !== "awaiting-activation" && _0x46e526.reason !== "spent") {
    return pe();
  }
  const _0x257078 = Math.max(0, Number(_0x46e526.nowMs) || 0);
  (function (_0x233b0c, _0x4f59e7) {
    if (ie === _0x233b0c.face && le === _0x4f59e7) {
      return;
    }
    ie = _0x233b0c.face;
    le = _0x4f59e7;
    te.fill(null);
    const _0x4f7141 = g[_0x233b0c.phase] || [];
    if (!_0x4f7141.length) {
      return;
    }
    const _0x1f0d86 = Math.max(_0x233b0c.playerX - 25, Math.min(_0x233b0c.viewLeft, _0x233b0c.viewRight) - 2);
    const _0x312609 = Math.min(_0x233b0c.playerX + 34, Math.max(_0x233b0c.viewLeft, _0x233b0c.viewRight) + 2, _0x233b0c.cornerLimit);
    const _0xd9d5c1 = he("ambient-life:" + _0x233b0c.face + ":" + _0x4f59e7) % _0x4f7141.length;
    let _0x381917 = 0;
    for (let _0x547eff = 0; _0x547eff < _0x4f7141.length && _0x381917 < 3; _0x547eff++) {
      const _0x576663 = _0x4f7141[(_0xd9d5c1 + _0x547eff) % _0x4f7141.length];
      if (!_0x576663.causeResponse || !_0x576663.route.offRoute || _0x576663.route.s < _0x1f0d86 || _0x576663.route.s > _0x312609 || Math.abs(_0x576663.route.s - _0x233b0c.playerX) < _0x576663.route.safeFromPlayerRadius) {
        continue;
      }
      let _0x5ce617 = true;
      for (let _0x296515 = 0; _0x296515 < _0x381917; _0x296515++) {
        if (Math.abs(te[_0x296515].route.s - _0x576663.route.s) < 4.2) {
          _0x5ce617 = false;
          break;
        }
      }
      if (_0x5ce617) {
        te[_0x381917++] = _0x576663;
      }
    }
    for (let _0x563d0a = 0; _0x563d0a < _0x4f7141.length && _0x381917 < 3; _0x563d0a++) {
      const _0x42a47d = _0x4f7141[(_0xd9d5c1 + _0x563d0a) % _0x4f7141.length];
      if (!te.includes(_0x42a47d) && !!_0x42a47d.causeResponse && !!_0x42a47d.route.offRoute && !(_0x42a47d.route.s < _0x1f0d86) && !(_0x42a47d.route.s > _0x312609) && !(Math.abs(_0x42a47d.route.s - _0x233b0c.playerX) < _0x42a47d.route.safeFromPlayerRadius)) {
        te[_0x381917++] = _0x42a47d;
      }
    }
  })(_0x46e526, Math.floor(_0x257078 / de));
  let _0xc5199 = 0;
  let _0x47fb20 = 0;
  for (let _0xa294e5 = 0; _0xa294e5 < 3; _0xa294e5++) {
    const _0x8cd03d = te[_0xa294e5];
    const _0x50d36e = _0xa294e5 * 3;
    const _0x28b727 = _0xa294e5 * 2;
    if (!_0x8cd03d) {
      for (let _0x376b07 = 0; _0x376b07 < 3; _0x376b07++) {
        I.setMatrixAt(_0x50d36e + _0x376b07, _0x6b5f8b);
      }
      for (let _0x37dba3 = 0; _0x37dba3 < 2; _0x37dba3++) {
        O.setMatrixAt(_0x28b727 + _0x37dba3, _0x6b5f8b);
      }
      continue;
    }
    const _0xd17512 = (_0x257078 + (_0xa294e5 * 933.3333333333334 + he(_0x8cd03d.id) % 420)) % de;
    const _0x1f9788 = _0xd17512 < 2300;
    const _0x4e9d16 = _0x1f9788 ? _0xd17512 / 2300 : 1;
    const _0x48e2d3 = Math.min(11, Math.floor(_0x4e9d16 * 12));
    const _0xa5e674 = _0x48e2d3 / 11;
    const _0x5639b2 = he(_0x8cd03d.id) & 1 ? 1 : -1;
    const _0x2465ec = _0x5639b2 * (_0xa5e674 * 1.04 - 0.52);
    const _0x279902 = _0x1f9788 && _0x48e2d3 & 1 ? 0.1 : 0;
    const _0x399a33 = !_0x1f9788 || _0x48e2d3 & 1 ? 0 : 0.1;
    const _0x20f21 = _0x5ae876(_0x8cd03d.route.s, _0x1e5f74.levelLength);
    Me(I, _0x50d36e, _0x8cd03d, _0x20f21, _0x2465ec, 0.02, -0.1, 0.54, 0.24, 0.26, !_0x1f9788 || _0x48e2d3 !== 4 && _0x48e2d3 !== 9 ? 0 : _0x5639b2 * 0.08);
    Me(I, _0x50d36e + 1, _0x8cd03d, _0x20f21, _0x2465ec - 0.24, -0.17 + _0x399a33, -0.08, 0.2, 0.18, 0.2, -0.2 - _0x399a33 * 0.8);
    Me(I, _0x50d36e + 2, _0x8cd03d, _0x20f21, _0x2465ec + 0.24, -0.17 + _0x279902, -0.08, 0.2, 0.18, 0.2, 0.2 + _0x279902 * 0.8);
    Me(O, _0x28b727, _0x8cd03d, _0x20f21, _0x2465ec - 0.17, 0.15, -0.07, 0.1, 0.09, 0.29);
    Me(O, _0x28b727 + 1, _0x8cd03d, _0x20f21, _0x2465ec + 0.17, 0.15, -0.07, 0.1, 0.09, 0.29);
    _0xc5199++;
    if (_0x1f9788) {
      _0x47fb20++;
    }
  }
  I.instanceMatrix.needsUpdate = true;
  O.instanceMatrix.needsUpdate = true;
  ce = _0xc5199 === 0;
  b.ambientLifeVisible = _0xc5199;
  b.ambientLifeMotions = _0x47fb20;
  b.ambientLifeDrawSlots = _0xc5199 ? 2 : 0;
}
function we(_0xcff995, _0x11fbed) {
  if (_0x11fbed === "tell") {
    return _0xcff995.hooks.includes("armed");
  } else if (_0x11fbed === "fire") {
    return _0xcff995.hooks.includes("active") || _0xcff995.hooks.includes("armed");
  } else if (_0x11fbed === "recovery") {
    return _0xcff995.hooks.includes("spent") || _0xcff995.hooks.includes("active") || _0xcff995.hooks.includes("armed");
  } else {
    return _0xcff995.hooks.includes("spent") || _0xcff995.hooks.includes("armed");
  }
}
function ve(_0x23c3d5) {
  const _0x3b12b8 = g[_0x23c3d5.phase] || [];
  const _0xc7bf74 = Math.max(_0x23c3d5.playerX - 24, Math.min(_0x23c3d5.viewLeft, _0x23c3d5.viewRight) - 2);
  const _0x4dc998 = Math.min(_0x23c3d5.playerX + 34, Math.max(_0x23c3d5.viewLeft, _0x23c3d5.viewRight) + 2, _0x23c3d5.cornerLimit);
  const _0x428ea3 = _0x23c3d5.playerX + 11;
  let _0x9949c9 = null;
  let _0x582e03 = Infinity;
  for (const _0x3f7c47 of _0x3b12b8) {
    if (_0x3f7c47.state !== _0x23c3d5.state || !_0x3f7c47.causeResponse || !_0x3f7c47.route.offRoute || _0x3f7c47.route.playerAdjacent) {
      continue;
    }
    if (_0x3f7c47.route.s < _0xc7bf74 || _0x3f7c47.route.s > _0x4dc998) {
      continue;
    }
    if (Math.abs(_0x3f7c47.route.s - _0x23c3d5.playerX) < _0x3f7c47.route.safeFromPlayerRadius) {
      continue;
    }
    if (!we(_0x3f7c47, "tell")) {
      continue;
    }
    const _0x36bbae = Math.abs(_0x3f7c47.route.s - _0x428ea3) + (_0x3f7c47.route.s < _0x23c3d5.playerX ? 2.5 : 0);
    if (_0x36bbae < _0x582e03) {
      _0x9949c9 = _0x3f7c47;
      _0x582e03 = _0x36bbae;
    }
  }
  return _0x9949c9;
}
function be(_0x6f364e) {
  if (ae) {
    b.socketId = ae.id;
    x[_0x6f364e.face] = {
      id: ae.id,
      phase: ae.phase,
      state: ae.state,
      routeS: ae.route.s,
      playerDistance: Math.abs(ae.route.s - _0x6f364e.playerX),
      cornerLimit: _0x6f364e.cornerLimit
    };
  }
}
function ye(_0x318b19 = "dormant") {
  if (L) {
    L.visible = false;
  }
  if (D) {
    D.opacity = 0;
  }
  if (j) {
    j.visible = false;
  }
  if (U) {
    U.emissive.setHex(_0x756cca.glowOff);
    U.emissiveIntensity = 0;
  }
  b.drawSlots = 0;
  b.mechanismDrawSlots = 0;
  b.readableExtent = 0;
  b.stage = _0x318b19;
  if (_0x318b19 === "dormant") {
    b.socketId = null;
    b.componentId = null;
  }
}
pe();
const xe = Object.freeze({
  observe: 0,
  intercept: 1,
  contain: 2,
  quarantine: 3,
  sterilize: 4,
  scuttle: 5
});
function Se(_0x35d947) {
  const _0x31de2e = Math.max(0, Math.min(1, Number(_0x35d947) || 0));
  return _0x31de2e * _0x31de2e * (3 - _0x31de2e * 2);
}
function ke(_0x2ba5bf, _0x481b79, _0x482204, _0x1a8561, _0x32d01a, _0x48821e, _0x2d392d, _0x2e3ad6, _0x2553db = 0) {
  Z.position.set(_0x482204, _0x1a8561, _0x32d01a);
  Z.rotation.set(0, 0, _0x2553db);
  Z.scale.set(_0x48821e, _0x2d392d, _0x2e3ad6);
  Z.updateMatrix();
  _0x2ba5bf.setMatrixAt(_0x481b79, Z.matrix);
}
function De(_0x2c41b8, _0xce4bcf, _0x2d3486, _0x1d1e98, _0x49a0b9 = null) {
  if (!j || !R || !P || !ae) {
    return;
  }
  const _0x1b5952 = xe[_0x2c41b8.state] ?? 0;
  const _0x4d86c = _0x49a0b9 || _0x2c41b8.stage;
  const _0x32066d = _0x4d86c === "ambient";
  const _0x57c9b0 = function (_0x28b27b, _0x14da20, _0x37e060) {
    const _0x41e503 = Se(_0x14da20);
    const _0x376306 = Se((_0x14da20 - 0.58) / 0.42);
    if (_0x28b27b === "ambient") {
      const _0x48584e = Math.sin(_0x14da20 * Math.PI);
      W.open = 0.08 + _0x48584e * (0.13 + _0x37e060 * 0.008);
      W.strike = 0;
      W.shear = 0;
      W.vent = 0.08 + _0x48584e * 0.18;
      return W;
    }
    if (_0x28b27b === "tell") {
      W.open = 0.18 + _0x41e503 * (0.34 + _0x37e060 * 0.045);
      W.strike = 0;
      W.shear = 0;
      W.vent = _0x41e503 * (_0x37e060 >= 2 ? 0.72 : 0.3);
      return W;
    }
    if (_0x28b27b === "fire") {
      const _0x38e308 = Math.sin(Math.min(1, _0x14da20 / 0.36) * Math.PI);
      W.open = _0x37e060 === 1 || _0x37e060 === 3 ? 0.06 + _0x376306 * 0.1 : 0.62 + _0x37e060 * 0.045;
      W.strike = _0x38e308;
      W.shear = _0x37e060 === 5 ? Se(_0x14da20 / 0.66) : 0;
      W.vent = _0x37e060 >= 2 ? 1 : 0.42;
      return W;
    }
    if (_0x28b27b === "recovery") {
      W.open = _0x37e060 === 5 ? 0.82 : (1 - _0x41e503) * 0.56 + 0.16;
      W.strike = 0;
      W.shear = _0x37e060 === 5 ? 0.82 + _0x41e503 * 0.18 : 0;
      W.vent = (1 - _0x41e503) * (_0x37e060 >= 2 ? 0.72 : 0.26);
      return W;
    } else {
      W.open = _0x37e060 === 5 ? 0.95 : (1 - _0x41e503) * 0.08;
      W.strike = 0;
      W.shear = _0x37e060 === 5 ? 1 : 0;
      W.vent = 0;
      return W;
    }
  }(_0x4d86c, _0xce4bcf, _0x1b5952);
  const _0x3272a0 = (4.6 + _0x1b5952 * 0.58) * (_0x32066d ? 0.62 : 1);
  const _0xd5fdaa = 0.48 + _0x57c9b0.open * (0.76 + _0x1b5952 * 0.055);
  const _0x816d90 = _0x57c9b0.shear * (0.72 + _0x1b5952 * 0.06);
  const _0x412505 = _0x57c9b0.strike * (_0x1b5952 === 1 || _0x1b5952 === 3 ? -0.34 : 0.18);
  const _0x576e0d = 0.12 + _0x57c9b0.vent * (0.22 + _0x1b5952 * 0.014);
  const _0x373aa6 = (2.16 + _0x1b5952 * 0.13) * (_0x32066d ? 0.7 : 1);
  const _0x4f39ff = (0.46 + _0x1b5952 * 0.025) * (_0x32066d ? 0.86 : 1);
  ke(R, 0, -_0xd5fdaa - _0x816d90, 0.12 + _0x816d90 * 0.18, 0, _0x4f39ff, _0x373aa6, 0.32, -_0x576e0d - _0x816d90 * 0.16 + _0x412505);
  ke(R, 1, _0xd5fdaa + _0x816d90 * 0.78, -0.08 - _0x816d90 * 0.12, 0.01, _0x4f39ff * 1.08, _0x373aa6 * 0.91, 0.34, _0x576e0d + _0x816d90 * 0.12 - _0x412505);
  ke(R, 2, -0.3 - _0x816d90 * 0.44, 1.24 + _0x57c9b0.open * 0.3, -0.04, _0x3272a0 * 0.29, 0.28, 0.28, 0.08 + _0x576e0d * 0.38);
  ke(R, 3, 0.42 + _0x816d90 * 0.5, -1.18 - _0x57c9b0.open * 0.26, -0.03, _0x3272a0 * 0.32, 0.26, 0.3, -0.06 - _0x576e0d * 0.46);
  ke(R, 4, -_0x3272a0 * 0.31 - _0x816d90 * 0.34, 0.64, -0.08, _0x3272a0 * 0.21, 0.2, 0.24, 0.28 + _0x576e0d + _0x816d90 * 0.12);
  ke(R, 5, _0x3272a0 * 0.3 + _0x816d90 * 0.38, -0.58, -0.07, _0x3272a0 * 0.23, 0.22, 0.25, -0.24 - _0x576e0d - _0x816d90 * 0.09);
  R.instanceMatrix.needsUpdate = true;
  const _0x1bf385 = 0.33 + _0x57c9b0.open * 0.34;
  const _0x133bd6 = _0x3272a0 * (0.42 + _0x1b5952 * 0.018);
  ke(P, 0, -_0x1bf385, 0.56, -0.13, _0x133bd6, 0.085, 0.12, 0.1 + _0x576e0d * 0.12);
  ke(P, 1, _0x1bf385, -0.48, -0.12, _0x133bd6 * 0.94, 0.08, 0.12, -0.09 - _0x576e0d * 0.1);
  ke(P, 2, -0.14, 0.16, -0.11, 0.1, 1.38 + _0x57c9b0.vent * 0.44, 0.12, _0x576e0d * 0.36);
  ke(P, 3, 0.34, -0.1, -0.1, 0.1, 1.22 + _0x57c9b0.vent * 0.38, 0.12, -_0x576e0d * 0.42);
  P.instanceMatrix.needsUpdate = true;
  const _0x1007b5 = _0x4d86c === "fire" ? 0.42 + _0x57c9b0.strike * 0.58 : _0x4d86c === "tell" ? _0xce4bcf * 0.16 : _0x4d86c === "recovery" ? (1 - _0xce4bcf) * 0.12 : 0;
  U.emissive.copy(H.setHex(_0x1b5952 >= 4 ? _0x756cca.capsule : _0x756cca.modCapsule));
  U.emissiveIntensity = _0x422b62() * _0x1007b5;
  Y.copy(_0x2d3486);
  Y.setPosition(ae.world.x - Math.sin(_0x1d1e98) * 0.035, ae.world.y, ae.world.z - Math.cos(_0x1d1e98) * 0.035);
  j.matrix.copy(Y);
  j.matrixWorldNeedsUpdate = true;
  j.visible = true;
  b.mechanismDrawSlots = 2;
  b.readableExtent = Number(_0x3272a0.toFixed(2));
}
function Le(_0x4e925a) {
  if (!ae) {
    return ye(_0x4e925a.stage);
  }
  const _0x3cef18 = se;
  const _0x483ed5 = _0x4e925a.stage;
  const _0x5c9f49 = Math.max(0, Math.min(1, _0x4e925a.progress || 0));
  const _0x4cec62 = ae.world.yaw;
  const _0x2d349a = _0x5ae876(ae.route.s, _0x1e5f74.levelLength);
  B.makeRotationY(_0x4cec62);
  B.multiply(N.makeRotationZ(_0x2d349a));
  De(_0x4e925a, _0x5c9f49, B, _0x4cec62);
  b.stage = _0x483ed5;
  if (!L || !D || !_0x3cef18) {
    if (L) {
      L.visible = false;
    }
    if (D) {
      D.opacity = 0;
    }
    b.drawSlots = 0;
    return;
  }
  const _0xbbe26b = function (_0x5b7efd, _0x1a2007, _0x3442e2) {
    if (_0x5b7efd === "tell") {
      return _0x3442e2 * Math.sin(_0x1a2007 * Math.PI / 2);
    } else if (_0x5b7efd === "fire") {
      return _0x3442e2 * (0.82 + Math.sin(_0x1a2007 * Math.PI) * 0.18);
    } else if (_0x5b7efd === "recovery") {
      return _0x3442e2 * 0.42 * (1 - _0x1a2007);
    } else {
      return _0x3442e2 * 0.2 * (1 - _0x1a2007);
    }
  }(_0x483ed5, _0x5c9f49, _0x3cef18.maxOpacity);
  const _0x296227 = xe[_0x4e925a.state] ?? 0;
  let _0x19573a = _0x483ed5 === "fire" ? 4.15 + _0x296227 * 0.22 : _0x483ed5 === "tell" ? 3.05 + _0x296227 * 0.14 : _0x483ed5 === "recovery" ? 3.45 + _0x296227 * 0.16 : 2.55 + _0x296227 * 0.12;
  let _0x388067 = _0x19573a * _0x3cef18.nativeAspect;
  const _0x3be4b7 = _0x483ed5 === "fire" ? 11.8 + _0x296227 * 0.62 : _0x483ed5 === "tell" ? 9.2 + _0x296227 * 0.42 : 10.2 + _0x296227 * 0.46;
  if (_0x388067 > _0x3be4b7) {
    const _0x1492b4 = _0x3be4b7 / _0x388067;
    _0x388067 *= _0x1492b4;
    _0x19573a *= _0x1492b4;
  }
  const _0x2824c2 = function (_0x2c4471, _0x1ef919) {
    if (_0x2c4471 === "tell") {
      return 0.94 + _0x1ef919 * 0.06;
    } else if (_0x2c4471 === "fire") {
      return 0.98 + Math.sin(_0x1ef919 * Math.PI) * 0.055;
    } else if (_0x2c4471 === "recovery") {
      return 1 + _0x1ef919 * 0.035;
    } else {
      return 1;
    }
  }(_0x483ed5, _0x5c9f49);
  _0x388067 *= _0x2824c2;
  _0x19573a *= _0x2824c2;
  if (_0xbbe26b <= 0.002) {
    L.visible = false;
    D.opacity = 0;
    b.drawSlots = 0;
    return;
  }
  T.set(-(_0x3cef18.origin[0] - 0.5) * _0x388067, -(0.5 - _0x3cef18.origin[1]) * _0x19573a, 0).applyMatrix4(B);
  const _0xe6f228 = _0x3cef18.depth === "front-particles" ? 0.12 : _0x3cef18.depth === "action-plane" ? 0.065 : 0.02;
  _.set(ae.world.x + Math.sin(_0x4cec62) * _0xe6f228, ae.world.y, ae.world.z + Math.cos(_0x4cec62) * _0xe6f228).add(T);
  G.copy(B);
  G.scale(F.set(_0x388067, _0x19573a, 1));
  G.setPosition(_);
  L.matrix.copy(G);
  L.matrixWorldNeedsUpdate = true;
  D.opacity = _0xbbe26b;
  L.visible = true;
  b.drawSlots = 1;
  b.maxVisible = 1;
}
function je(_0x5d3f23) {
  b.face = _0x5d3f23?.face || 0;
  b.state = _0x5d3f23?.state || "observe";
  if (!_0x5d3f23 || !j) {
    _0x521f2c();
    ne = "";
    ae = null;
    se = null;
    oe = "dormant";
    pe();
    ye();
    return;
  }
  _0x471011(_0x5d3f23);
  (function (_0x56c097) {
    if (!_0x56c097 || _0x56c097.face <= 0) {
      return;
    }
    const _0x141c66 = w[_0x56c097.phase] || [];
    if (!_0x141c66.length) {
      return;
    }
    const _0x45cbb2 = _0x56c097.stage === "dormant";
    if (_0x45cbb2 && _0x56c097.reason !== "awaiting-activation" && _0x56c097.reason !== "spent") {
      return;
    }
    const _0x1a5a8b = _0x45cbb2 ? 1500 : _0x56c097.stage === "fire" ? 260 : _0x56c097.stage === "tell" ? 620 : 460;
    const _0x5346f1 = Math.max(0, Number(_0x56c097.nowMs) || 0);
    const _0x42f7ec = Math.floor(_0x5346f1 / _0x1a5a8b);
    if (_0x56c097.phase === ue && _0x56c097.stage === me && _0x42f7ec === fe) {
      return;
    }
    ue = _0x56c097.phase;
    me = _0x56c097.stage;
    fe = _0x42f7ec;
    const _0xc2689f = Math.min(_0x56c097.viewLeft, _0x56c097.viewRight) - 1.5;
    const _0x27684a = Math.min(Math.max(_0x56c097.viewLeft, _0x56c097.viewRight) + 1.5, _0x56c097.cornerLimit);
    const _0x5d5541 = _0x42f7ec % _0x141c66.length;
    let _0x580437 = null;
    for (let _0x26e029 = 0; _0x26e029 < _0x141c66.length; _0x26e029++) {
      const _0x2c088b = _0x141c66[(_0x5d5541 + _0x26e029) % _0x141c66.length];
      if (_0x2c088b.s >= _0xc2689f && _0x2c088b.s <= _0x27684a) {
        _0x580437 = _0x2c088b;
        break;
      }
    }
    if (!_0x580437) {
      return;
    }
    const _0x31895b = _0x45cbb2 ? 0.3 : _0x56c097.stage === "fire" ? 0.72 : _0x56c097.stage === "tell" ? 0.46 : 0.4;
    const _0x2e15e4 = (_0x42f7ec + _0x5d5541 & 1 ? 1 : -1) * (_0x45cbb2 ? 0.12 : 0.28);
    _0x309b4c(_0x580437.s, _0x580437.y, _0x756cca.vapor, _0x2e15e4, _0x31895b, _0x580437.depth);
    b.ventPulses++;
  })(_0x5d3f23);
  if (_0x5d3f23.stage === "dormant") {
    ne = "";
    se = null;
    oe = "dormant";
    (function (_0x131dca) {
      if (!(_0x131dca.face > 0) || _0x131dca.reason !== "awaiting-activation" && _0x131dca.reason !== "spent" || !j) {
        re = -1;
        pe();
        return ye();
      }
      ge(_0x131dca);
      const _0x419e15 = Math.max(0, Number(_0x131dca.nowMs) || 0) + _0x131dca.phase * 733;
      const _0x595f28 = Math.floor(_0x419e15 / 3600);
      const _0x51210c = _0x419e15 - _0x595f28 * 3600;
      if (_0x51210c >= 3000) {
        return ye();
      }
      if (_0x595f28 !== re || !ae || ae.phase !== _0x131dca.phase || ae.route.s > _0x131dca.cornerLimit) {
        re = _0x595f28;
        ae = ve(_0x131dca);
        if (ae) {
          b.ambientCycles++;
        }
      }
      if (!ae) {
        return ye();
      }
      const _0x1fa260 = _0x51210c / 3000;
      const _0x5b956d = ae.world.yaw;
      const _0x12c57f = _0x5ae876(ae.route.s, _0x1e5f74.levelLength);
      B.makeRotationY(_0x5b956d);
      B.multiply(N.makeRotationZ(_0x12c57f));
      De(_0x131dca, _0x1fa260, B, _0x5b956d, "ambient");
      if (L) {
        L.visible = false;
      }
      if (D) {
        D.opacity = 0;
      }
      b.drawSlots = 0;
      b.stage = "ambient";
    })(_0x5d3f23);
    return;
  }
  re = -1;
  pe();
  const _0x2d423d = _0x5d3f23.face + ":" + _0x5d3f23.startedAtMs;
  if (_0x2d423d !== ne) {
    ne = _0x2d423d;
    ae = ve(_0x5d3f23);
    se = null;
    oe = "dormant";
    b.activations++;
    b.socketId = ae?.id || null;
    be(_0x5d3f23);
    if (!ae) {
      b.missedSocketEvents++;
    }
  }
  if (!ae && _0x5d3f23.stage === "tell") {
    ae = ve(_0x5d3f23);
    be(_0x5d3f23);
  }
  if (!ae || ae.phase !== _0x5d3f23.phase || ae.route.s > _0x5d3f23.cornerLimit) {
    return ye(_0x5d3f23.stage);
  }
  if (_0x5d3f23.stage !== oe) {
    oe = _0x5d3f23.stage;
    b.stageSwitches++;
    (function (_0x2b8318) {
      se = _0x2b8318;
      b.componentId = _0x2b8318?.id || null;
      if (!_0x2b8318 || !D || !k) {
        return;
      }
      const [_0x287264, _0xb018c6, _0x427bce, _0x3854ab] = _0x2b8318.uv;
      const _0x2a1196 = k.attributes.uv;
      const _0x3fc758 = k.userData.unitUv;
      for (let _0x3ab957 = 0; _0x3ab957 < _0x2a1196.count; _0x3ab957++) {
        const _0x1e8edd = _0x3fc758[_0x3ab957 * 2];
        const _0x57cae9 = _0x3fc758[_0x3ab957 * 2 + 1];
        _0x2a1196.setXY(_0x3ab957, _0x287264 + _0x1e8edd * (_0x427bce - _0x287264), 1 - _0x3854ab + _0x57cae9 * (_0x3854ab - _0xb018c6));
      }
      _0x2a1196.needsUpdate = true;
      L.renderOrder = _0x2b8318.depth === "front-particles" ? 14 : _0x2b8318.depth === "action-plane" ? 12 : 10;
      y.add(_0x2b8318.id);
    })(function (_0x53f036, _0x59058a) {
      const _0x5a298b = v.get(_0x53f036.state + ":" + _0x59058a) || [];
      if (!_0x5a298b.length) {
        return null;
      }
      const _0x5865d1 = _0x53f036.stageDurationMs || 0;
      let _0x5a586a = Infinity;
      const _0x2380a8 = [];
      for (const _0x5c9251 of _0x5a298b) {
        const _0x33fc38 = Math.abs(_0x5c9251.durationMs - _0x5865d1);
        if (_0x33fc38 < _0x5a586a) {
          _0x5a586a = _0x33fc38;
          _0x2380a8.length = 0;
          _0x2380a8.push(_0x5c9251);
        } else if (_0x33fc38 === _0x5a586a) {
          _0x2380a8.push(_0x5c9251);
        }
      }
      return _0x2380a8[he(ae?.id + ":" + _0x53f036.face + ":" + _0x59058a) % _0x2380a8.length];
    }(_0x5d3f23, _0x5d3f23.stage));
    S[_0x5d3f23.face] ||= {};
    S[_0x5d3f23.face][_0x5d3f23.stage] = se?.id || null;
  }
  Le(_0x5d3f23);
}
function Re() {
  ne = "";
  ae = null;
  se = null;
  oe = "dormant";
  re = -1;
  ie = -1;
  le = -1;
  te.fill(null);
  ue = -1;
  me = "";
  fe = -1;
  _0x521f2c();
  b.resets++;
  b.maxVisible = 0;
  b.stageSwitches = 0;
  b.activations = 0;
  b.ambientCycles = 0;
  b.missedSocketEvents = 0;
  b.face = 0;
  b.state = "observe";
  y.clear();
  for (const _0x1012c4 of Object.keys(x)) {
    delete x[_0x1012c4];
  }
  for (const _0x2c0a31 of Object.keys(S)) {
    delete S[_0x2c0a31];
  }
  pe();
  ye();
}
let Pe = false;
export function initMeridianView() {
  return !Pe && (_0x3da011({
    meridian: {
      sync: je,
      reset: Re
    }
  }), Pe = true, true);
}
export function meridianDefenseVfxSnapshot() {
  return {
    ...b,
    componentsUsed: [...y].sort(),
    faceSockets: Object.fromEntries(Object.entries(x).map(([_0x819afd, _0x7dabd3]) => [_0x819afd, {
      ..._0x7dabd3
    }])),
    faceComponents: Object.fromEntries(Object.entries(S).map(([_0x1cba38, _0x4a4b36]) => [_0x1cba38, {
      ..._0x4a4b36
    }])),
    atlasState: _0x18068e.state,
    atlasTextures: _0x18068e.gpuTextures,
    estimatedGpuBytes: _0x18068e.estimatedGpuBytes,
    totalDrawSlots: b.drawSlots + b.mechanismDrawSlots + b.ambientLifeDrawSlots,
    fixedAtBoot: true,
    textureTransforms: false,
    environmentOnly: true,
    attachments: [],
    dormantDraws: b.stage === "dormant" ? b.drawSlots : null,
    dormantMechanismDraws: b.stage === "dormant" ? b.mechanismDrawSlots : null
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_MERIDIAN_DEFENSE_VFX = meridianDefenseVfxSnapshot;
}