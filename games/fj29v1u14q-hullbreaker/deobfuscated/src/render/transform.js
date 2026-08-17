import * as _0x5c7fc6 from "three";
import { CONFIG as _0x48ca37 } from "../config.js";
import { DEG as _0x9a278f } from "../pure/path.js";
import { TRANSFORM_FIXTURE as _0x546207, TRANSFORM_PATH as _0x40c5c3, transformAltAt as _0x36b24c, transformAtmosphereMix as _0x5e1b93, transformBandIndexAt as _0x2cf427, transformCoverAjar as _0x955177, transformGradeAt as _0x2b3a58, transformPanelState as _0x19180e, transformVapor as _0x3f1465 } from "../pure/transform.js";
import { IS_TRANSFORM_SLICE as _0x30c940 } from "../mode.js";
import { installView as _0x893d8a } from "../sim/bridge.js";
import { groundH as _0x30f0b7, platforms as _0x167b1f } from "../sim/level.js";
import { scene as _0x598575 } from "./scene.js";
import { activeCameraDepth as _0x33fc5f } from "./camera.js";
import { placeSharp as _0x43e4fd } from "./tower.js";
import { PAL as _0x4610b5, atmosphereBg as _0x388f82 } from "./palette.js";
const M = _0x48ca37.transform;
const v = {
  ground: _0x4610b5.ground,
  groundAlt: _0x4610b5.groundAlt,
  catwalk: _0x4610b5.catwalk,
  hull: _0x4610b5.transform.hull,
  wall: _0x4610b5.transform.wall,
  ceiling: _0x4610b5.transform.ceiling,
  rib: _0x4610b5.transform.rib,
  machine: _0x4610b5.transform.machine,
  skyline: _0x4610b5.transform.skyline,
  panel: _0x4610b5.transform.panel,
  accent: _0x4610b5.gun
};
function k(_0x528246, _0x26c023, _0x4a013b, _0x381ff0, _0x5c4d95, _0x2d09aa, _0x67b8b5, _0x4c381d) {
  const _0x20a743 = new _0x5c7fc6.Mesh(new _0x5c7fc6.BoxGeometry(_0x528246, _0x26c023, _0x4a013b), _0x381ff0);
  _0x4c381d.add(_0x20a743);
  _0x43e4fd(_0x20a743, _0x5c4d95, _0x2d09aa, _0x67b8b5);
  return _0x20a743;
}
function S(_0x1fa010, _0x2ac7fe, _0xb53467, _0x5abda3, _0x37b1bc, _0x5db7ec, _0x178cb3, _0x2a3bff) {
  const _0x3304e3 = k(_0x1fa010, _0x2ac7fe, _0xb53467, _0x5abda3, _0x37b1bc, _0x5db7ec, _0x178cb3, _0x2a3bff);
  const _0x3c0420 = _0x2b3a58(_0x40c5c3, _0x37b1bc);
  if (_0x3c0420 > 0.001) {
    _0x3304e3.rotation.order = "YZX";
    _0x3304e3.rotation.z = Math.atan(_0x3c0420);
  }
  return _0x3304e3;
}
const R = [];
const j = [];
let A = null;
let B = null;
function D(_0xcaeebf, _0x4d1d5b) {
  let _0x5b21a5 = -999;
  for (let _0x361200 = _0xcaeebf; _0x361200 < _0x4d1d5b; _0x361200++) {
    if (_0x30f0b7[_0x361200] > -100) {
      _0x5b21a5 = Math.max(_0x5b21a5, _0x30f0b7[_0x361200]);
    }
  }
  if (_0x5b21a5 > -100) {
    return _0x5b21a5;
  } else {
    return 3;
  }
}
function z(_0x45879d, _0x28651e, _0x1ba2b6, _0x2fdee6) {
  const _0x2f64de = _0x30f0b7[_0x28651e];
  if (_0x2f64de < -100) {
    return;
  }
  const _0x193caf = _0x28651e + 0.5;
  S(1, 4, 2, (_0x28651e + _0x2f64de) % 2 == 0 ? _0x2fdee6.ground : _0x2fdee6.groundAlt, _0x193caf, _0x2f64de - 2, 0, _0x45879d);
  if (_0x1ba2b6.kind === "interior") {
    S(1, 0.5, 5.6, _0x2fdee6.wall, _0x193caf, _0x2f64de - 4 - 0.25, -1.4, _0x45879d);
    S(1, 0.14, 0.5, _0x2fdee6.catwalk, _0x193caf, _0x2f64de + 0.07, 0.95, _0x45879d);
  }
}
function G(_0x5ab9d3, _0x5a0406, _0x20a924, _0x1d0727, _0x114ae5, _0x4f3c2b) {
  const _0xa746c0 = _0x20a924 - _0x5a0406;
  const _0x3ad31a = (_0x5a0406 + _0x20a924) / 2;
  const _0x4dd8f6 = D(_0x5a0406, _0x20a924);
  if (_0x1d0727.kind === "exterior") {
    const _0x447eeb = _0x1d0727.hullDrop;
    k(_0xa746c0, _0x447eeb, 3.4, _0x114ae5.hull, _0x3ad31a, _0x4dd8f6 - 4 - _0x447eeb / 2, -0.4, _0x5ab9d3);
    k(_0xa746c0, 0.5, 4.6, _0x114ae5.rib, _0x3ad31a, _0x4dd8f6 - 4 - 0.25, -0.9, _0x5ab9d3);
    if (_0x4f3c2b) {
      return;
    }
    const _0x52b0bc = _0x1d0727.hullWall;
    const _0x4f910c = _0x4dd8f6 + _0x52b0bc.height / 2 - 6;
    if (_0x52b0bc.pattern === "towers") {
      for (let _0x25082d = _0x5a0406; _0x25082d < _0x20a924; _0x25082d++) {
        if (!(_0x25082d % 14 >= 8)) {
          k(1, _0x52b0bc.height, 0.8, _0x114ae5.wall, _0x25082d + 0.5, _0x4f910c, -4.4, _0x5ab9d3);
          if (_0x25082d % 14 == 0) {
            k(0.9, _0x52b0bc.height, 1.3, _0x114ae5.rib, _0x25082d + 0.5, _0x4f910c, -4, _0x5ab9d3);
          }
        }
      }
      return;
    }
    k(_0xa746c0, _0x52b0bc.height, 0.8, _0x114ae5.wall, _0x3ad31a, _0x4f910c, -4.4, _0x5ab9d3);
    for (let _0x7200f4 = _0x5a0406; _0x7200f4 < _0x20a924; _0x7200f4++) {
      if (_0x7200f4 % 6 == 0) {
        k(0.8, _0x52b0bc.height, 1.3, _0x114ae5.rib, _0x7200f4 + 0.5, _0x4f910c, -4, _0x5ab9d3);
      }
    }
    return;
  }
  const _0x402845 = _0x1d0727.interior;
  const _0x3f0840 = _0x4dd8f6 + _0x402845.ceilingAbove;
  S(_0xa746c0, 0.9, 6.6, _0x114ae5.ceiling, _0x3ad31a, _0x3f0840, -0.3, _0x5ab9d3);
  k(_0xa746c0, 26, 0.7, _0x114ae5.wall, _0x3ad31a, _0x4dd8f6 + 3, _0x402845.wallDepth, _0x5ab9d3);
  S(_0xa746c0, 0.6, 1.2, _0x114ae5.rib, _0x3ad31a, _0x3f0840 - 1.6, _0x402845.wallDepth + 0.8, _0x5ab9d3);
  k(_0xa746c0, 0.45, 0.9, _0x114ae5.machine, _0x3ad31a, _0x3f0840 - 3.2, _0x402845.wallDepth + 1, _0x5ab9d3);
  for (let _0x4afa37 = _0x5a0406; _0x4afa37 < _0x20a924; _0x4afa37++) {
    const _0x459a0e = _0x4afa37 + 0.5;
    if (_0x4afa37 % _0x402845.ribEvery === 0) {
      k(0.5, _0x402845.ceilingAbove, 0.5, _0x114ae5.rib, _0x459a0e, _0x4dd8f6 + _0x402845.ceilingAbove / 2, _0x402845.wallDepth + 0.6, _0x5ab9d3);
      if (_0x4afa37 / _0x402845.ribEvery % 2 == 0) {
        k(1.7, 1.3, 1.1, _0x114ae5.machine, _0x459a0e + 1.4, _0x4dd8f6 + 1.4, _0x402845.wallDepth + 0.8, _0x5ab9d3);
      }
    }
    if (_0x4afa37 % _0x402845.alcoveEvery === 0) {
      k(2.2, 1.8, 0.5, _0x114ae5.machine, _0x459a0e, _0x4dd8f6 + 4.6, _0x402845.wallDepth + 0.45, _0x5ab9d3);
    }
    if (_0x4afa37 % _0x402845.pipeEvery === 0) {
      k(0.6, _0x402845.ceilingAbove - 1, 0.6, _0x114ae5.machine, _0x459a0e + 0.5, _0x4dd8f6 + _0x402845.ceilingAbove / 2 - 0.5, _0x402845.wallDepth + 1.1, _0x5ab9d3);
      k(1.1, 1.1, 1.1, _0x114ae5.rib, _0x459a0e + 0.5, _0x4dd8f6 + 6.4, _0x402845.wallDepth + 1.2, _0x5ab9d3);
    }
  }
}
function F(_0x6ac7a9) {
  const _0x2b44f8 = function (_0x4c2433) {
    const _0x4df0ba = {};
    const _0x3033ae = new _0x5c7fc6.Color();
    for (const [_0x7f636e, _0x592e6d] of Object.entries(v)) {
      _0x3033ae.setHex(_0x592e6d);
      _0x4df0ba[_0x7f636e] = new _0x5c7fc6.MeshStandardMaterial({
        color: new _0x5c7fc6.Color(Math.min(1, _0x3033ae.r * _0x4c2433[0]), Math.min(1, _0x3033ae.g * _0x4c2433[1]), Math.min(1, _0x3033ae.b * _0x4c2433[2])),
        flatShading: true
      });
    }
    return _0x4df0ba;
  }(_0x6ac7a9.tone);
  const _0x22afd9 = new _0x5c7fc6.Group();
  _0x598575.add(_0x22afd9);
  const _0x3a3314 = _0x2106e0 => _0x546207.events.some(_0x4f30a3 => _0x2106e0 >= _0x4f30a3.seamS - 2 && _0x2106e0 < _0x4f30a3.seamS + M.thresholdTiles);
  for (let _0x38e36d = _0x6ac7a9.s0; _0x38e36d < _0x6ac7a9.s1; _0x38e36d++) {
    z(_0x22afd9, _0x38e36d, _0x6ac7a9, _0x2b44f8);
  }
  for (const [_0x443520, _0x55dd45] of function (_0x51d2db, _0x3abf60) {
    const _0x2292ff = [];
    for (let _0x39b1a2 = _0x51d2db; _0x39b1a2 < _0x3abf60; _0x39b1a2 += 2) {
      _0x2292ff.push([_0x39b1a2, Math.min(_0x39b1a2 + 2, _0x3abf60)]);
    }
    return _0x2292ff;
  }(_0x6ac7a9.s0, _0x6ac7a9.s1)) {
    G(_0x22afd9, _0x443520, _0x55dd45, _0x6ac7a9, _0x2b44f8, _0x3a3314(_0x443520));
  }
  (function (_0x56b41f, _0x4a85d0, _0x52a99d, _0x5f9caf) {
    for (const _0x27a7e4 of _0x167b1f) {
      const _0x34e5b7 = (_0x27a7e4.x0 + _0x27a7e4.x1) / 2;
      if (!(_0x34e5b7 < _0x4a85d0) && !(_0x34e5b7 >= _0x52a99d)) {
        S(_0x27a7e4.x1 - _0x27a7e4.x0, 0.18, 1.4, _0x5f9caf.catwalk, _0x34e5b7, _0x27a7e4.y - 0.09, 0, _0x56b41f);
      }
    }
  })(_0x22afd9, _0x6ac7a9.s0, _0x6ac7a9.s1, _0x2b44f8);
  (function (_0x422329, _0x8376ad, _0x1347f8) {
    for (const _0x58a881 of _0x8376ad.threatSockets || []) {
      if (_0x58a881.kind === "polyp") {
        k(1.5, 0.5, 1.5, _0x1347f8.rib, _0x58a881.x, _0x58a881.y, _0x58a881.depth, _0x422329);
        k(0.8, 0.9, 0.8, _0x1347f8.machine, _0x58a881.x, _0x58a881.y + 0.7, _0x58a881.depth, _0x422329);
      } else {
        k(2.2, 0.9, 2.2, _0x1347f8.machine, _0x58a881.x, _0x58a881.y + 0.45, _0x58a881.depth, _0x422329);
        k(1.7, 0.25, 1.7, _0x1347f8.accent, _0x58a881.x, _0x58a881.y + 0.95, _0x58a881.depth, _0x422329);
      }
    }
  })(_0x22afd9, _0x6ac7a9, _0x2b44f8);
  (function (_0x5d97ea, _0x2b9402, _0x5df5d6) {
    for (const _0x2a4170 of _0x2b9402.skyline) {
      const _0x918528 = _0x2a4170.top - _0x36b24c(_0x40c5c3, _0x2a4170.atS) - _0x2a4170.height / 2;
      k(_0x2a4170.width, _0x2a4170.height, _0x2a4170.width * 0.8, _0x2a4170.below ? _0x5df5d6.rib : _0x5df5d6.skyline, _0x2a4170.atS, _0x918528, _0x2a4170.depth, _0x5d97ea);
    }
  })(_0x22afd9, _0x6ac7a9, _0x2b44f8);
  const _0x3dc5ca = function (_0x2161a7) {
    const _0x57728c = _0x2161a7.weather;
    if (!_0x57728c) {
      return null;
    }
    const _0x4c6ed8 = new _0x5c7fc6.Group();
    _0x598575.add(_0x4c6ed8);
    _0x43e4fd(_0x4c6ed8, _0x2161a7.s0, 0, 0);
    const _0x3a02fa = new _0x5c7fc6.BoxGeometry(0.07, _0x57728c.length, 0.07);
    const _0x16f913 = new _0x5c7fc6.MeshBasicMaterial({
      color: _0x4610b5.rain,
      transparent: true,
      opacity: 0.34
    });
    const _0x3531b6 = new _0x5c7fc6.InstancedMesh(_0x3a02fa, _0x16f913, _0x57728c.count);
    _0x3531b6.frustumCulled = false;
    _0x4c6ed8.add(_0x3531b6);
    const _0x28bc79 = _0x2161a7.s1 - _0x2161a7.s0;
    const _0x34dd2d = [];
    let _0x3d8612 = 20260729;
    const _0x475fd9 = () => (_0x3d8612 = _0x3d8612 * 1664525 + 1013904223 >>> 0) / 4294967296;
    for (let _0x4b7542 = 0; _0x4b7542 < _0x57728c.count; _0x4b7542++) {
      _0x34dd2d.push({
        x: _0x475fd9() * _0x28bc79,
        y: _0x475fd9() * _0x57728c.spanY - 8,
        z: _0x475fd9() * _0x57728c.spanZ - 8
      });
    }
    return {
      mesh: _0x3531b6,
      drops: _0x34dd2d,
      W: _0x57728c,
      span: _0x28bc79
    };
  }(_0x6ac7a9);
  return {
    group: _0x22afd9,
    weather: _0x3dc5ca,
    band: _0x6ac7a9,
    M: _0x2b44f8
  };
}
const T = -3.4;
function W(_0x4bc087, _0x5e8206) {
  const _0x174ed7 = D(_0x4bc087.seamS - 2, _0x4bc087.seamS + 1);
  const _0x1f4b35 = _0x4bc087.gate && _0x4bc087.gate.plate ? _0x4bc087.gate.plate.tiles : 13;
  const _0xb30d34 = _0x1f4b35 + 1.4;
  const _0x4fc68e = new _0x5c7fc6.Group();
  _0x598575.add(_0x4fc68e);
  k(0.9, _0xb30d34, 4.6, _0x5e8206.wall, _0x4bc087.seamS - 0.3, _0x174ed7 + _0xb30d34 / 2, -2.6, _0x4fc68e);
  k(0.9, _0xb30d34, 3, _0x5e8206.wall, _0x4bc087.seamS - 0.3, _0x174ed7 + _0xb30d34 / 2, 2.4, _0x4fc68e);
  k(2.8, 1.1, 8.2, _0x5e8206.wall, _0x4bc087.seamS + 0.6, _0x174ed7 + _0xb30d34, 0, _0x4fc68e);
  k(2.4, 0.34, 6, _0x5e8206.accent, _0x4bc087.seamS + 0.45, _0x174ed7 + 0.17, 0, _0x4fc68e);
  const _0x27d2eb = _0x4bc087.seamS - 0.4;
  k(1.5, _0x1f4b35 + 0.6, 1.5, _0x5e8206.rib, _0x27d2eb, _0x174ed7 + _0x1f4b35 / 2, T, _0x4fc68e);
  k(2.3, 1.6, 2.3, _0x5e8206.machine, _0x27d2eb, _0x174ed7 + 1.2, T, _0x4fc68e);
  k(2.3, 1.6, 2.3, _0x5e8206.machine, _0x27d2eb, _0x174ed7 + _0x1f4b35 - 1.2, T, _0x4fc68e);
  k(1.2, 1.2, 3, _0x5e8206.machine, _0x27d2eb - 1.4, _0x174ed7 + _0x1f4b35 * 0.5, -4.6, _0x4fc68e);
  const _0xad1c95 = new _0x5c7fc6.Group();
  _0x598575.add(_0xad1c95);
  _0x43e4fd(_0xad1c95, _0x27d2eb, _0x174ed7, T);
  const _0x40477d = new _0x5c7fc6.Group();
  _0xad1c95.add(_0x40477d);
  const _0x3bd366 = 3.4;
  C(1, _0x1f4b35, 6, _0x5e8206.panel, 0, _0x1f4b35 / 2, _0x3bd366, _0x40477d);
  C(1.25, 0.7, 6, _0x5e8206.accent, 0, _0x1f4b35 - 1.6, _0x3bd366, _0x40477d);
  C(1.25, 0.7, 6, _0x5e8206.accent, 0, 1.9, _0x3bd366, _0x40477d);
  C(1.5, 1.4, 1.4, _0x5e8206.rib, 0, _0x1f4b35 * 0.5, 5.7, _0x40477d);
  let _0x490b4b = null;
  if (_0x4bc087.kind === "breach") {
    const _0x10a450 = new _0x5c7fc6.BoxGeometry(0.42, 0.42, 0.42);
    const _0x11893c = new _0x5c7fc6.MeshBasicMaterial({
      color: _0x4610b5.vapor,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    const _0x4831cc = new _0x5c7fc6.InstancedMesh(_0x10a450, _0x11893c, 120);
    _0x4831cc.frustumCulled = false;
    _0x4831cc.visible = false;
    _0xad1c95.add(_0x4831cc);
    const _0x4faa38 = [];
    let _0x4d94f1 = 20260731;
    const _0x15d376 = () => (_0x4d94f1 = _0x4d94f1 * 1664525 + 1013904223 >>> 0) / 4294967296;
    for (let _0x2a8b90 = 0; _0x2a8b90 < 120; _0x2a8b90++) {
      _0x4faa38.push({
        dx: 2 + _0x15d376() * 9,
        dy: (_0x15d376() - 0.15) * 7,
        dz: (_0x15d376() - 0.5) * 5,
        y0: 1 + _0x15d376() * 13,
        sz: 0.6 + _0x15d376() * 1.4
      });
    }
    _0x490b4b = {
      mesh: _0x4831cc,
      motes: _0x4faa38
    };
  }
  const _0x53a352 = (_0x4bc087.kind === "breach" ? M.cover.breachStopDeg : 90) * _0x9a278f;
  const _0x147f0c = _0x4bc087.plateRamp ? Math.atan(Math.max(0, _0x2b3a58(_0x40c5c3, _0x4bc087.seamS + M.thresholdTiles + 1))) : 0;
  return {
    hinge: _0xad1c95,
    leaf: _0x40477d,
    vapor: _0x490b4b,
    armMs: 0,
    arming: false,
    kind: _0x4bc087.kind,
    stopRad: _0x53a352,
    seatRake: _0x147f0c
  };
}
function C(_0x4bbd44, _0x434f13, _0x2f396a, _0x31effe, _0x300080, _0x437e43, _0xf31369, _0x1ba935) {
  const _0x4bd351 = new _0x5c7fc6.Mesh(new _0x5c7fc6.BoxGeometry(_0x4bbd44, _0x434f13, _0x2f396a), _0x31effe);
  _0x4bd351.position.set(_0x300080, _0x437e43, _0xf31369);
  _0x1ba935.add(_0x4bd351);
  return _0x4bd351;
}
const E = new _0x5c7fc6.Color();
function N(_0x461b30, _0x33d546, _0x3df91f) {
  const _0x238f5e = _0x33fc5f() - _0x48ca37.camera.z;
  _0x598575.fog.near = _0x461b30.fogNear + (_0x33d546.fogNear - _0x461b30.fogNear) * _0x3df91f + _0x238f5e;
  _0x598575.fog.far = _0x461b30.fogFar + (_0x33d546.fogFar - _0x461b30.fogFar) * _0x3df91f + _0x238f5e;
  _0x598575.fog.color.setHex(_0x388f82(_0x461b30.bg)).lerp(E.setHex(_0x388f82(_0x33d546.bg)), _0x3df91f);
  _0x598575.background.copy(_0x598575.fog.color);
}
let H = null;
function I(_0x2db680) {
  const _0x4d24a7 = j[_0x2db680.index];
  if (_0x4d24a7 && _0x4d24a7.kind === "flip") {
    _0x4d24a7.arming = true;
  }
}
function O(_0xfaa412) {
  const _0x313670 = j[_0xfaa412.index];
  if (_0x313670) {
    _0x313670.arming = false;
  }
  A = _0x546207.bands[_0xfaa412.fromBand].atmosphere;
  B = _0x546207.bands[_0xfaa412.toBand].atmosphere;
  X(_0xfaa412, 0);
}
const P = {
  visible: true,
  jolt: 0,
  open: 0,
  seated: false
};
const U = {
  density: 0,
  reach: 0
};
const Y = new _0x5c7fc6.Matrix4();
function Z(_0x5f4dca, _0x3c7738) {
  _0x5f4dca.leaf.rotation.y = _0x3c7738.open * _0x5f4dca.stopRad;
  _0x5f4dca.leaf.position.x = _0x3c7738.jolt;
  _0x5f4dca.leaf.rotation.z = _0x5f4dca.kind === "breach" ? Math.min(1, _0x3c7738.open) * -0.04 : _0x5f4dca.seatRake ? -_0x5f4dca.seatRake * Math.min(1, Math.max(0, (_0x3c7738.open - M.cover.snapFrac) / (1 - M.cover.snapFrac))) : 0;
}
function X(_0x1013f1, _0x51bddd) {
  const _0x1a541f = j[_0x1013f1.index];
  if (_0x1a541f) {
    Z(_0x1a541f, _0x19180e(_0x51bddd, _0x1013f1, _0x48ca37, P));
    if (_0x1a541f.vapor) {
      (function (_0x2e67b1, _0x4d4b8b) {
        const _0x544f76 = _0x3f1465(_0x4d4b8b, _0x48ca37, U);
        const _0x5ca0c8 = _0x2e67b1.vapor;
        const _0x1f8453 = _0x544f76.density > 0.003;
        _0x5ca0c8.mesh.visible = _0x1f8453;
        if (_0x1f8453) {
          _0x5ca0c8.mesh.material.opacity = _0x544f76.density * 0.42;
          for (let _0x579f13 = 0; _0x579f13 < _0x5ca0c8.motes.length; _0x579f13++) {
            const _0x53e6eb = _0x5ca0c8.motes[_0x579f13];
            const _0x129618 = _0x53e6eb.sz * (0.55 + _0x544f76.reach * 0.9);
            Y.makeScale(_0x129618, _0x129618, _0x129618);
            Y.setPosition(_0x53e6eb.dx * _0x544f76.reach + 0.4, _0x53e6eb.y0 + _0x53e6eb.dy * _0x544f76.reach, _0x53e6eb.dz * _0x544f76.reach);
            _0x5ca0c8.mesh.setMatrixAt(_0x579f13, Y);
          }
          _0x5ca0c8.mesh.instanceMatrix.needsUpdate = true;
        }
      })(_0x1a541f, _0x51bddd);
    }
  }
  if (A) {
    N(A, B, _0x5e1b93(_0x51bddd, _0x48ca37));
  }
}
function _(_0x120f55) {
  const _0xe23dc2 = j[_0x120f55.index];
  if (_0xe23dc2) {
    _0xe23dc2.arming = false;
    Z(_0xe23dc2, _0x19180e(1000000000, _0x120f55, _0x48ca37, P));
    if (_0xe23dc2.vapor) {
      _0xe23dc2.vapor.mesh.visible = false;
    }
  }
  N(_0x546207.bands[_0x120f55.fromBand].atmosphere, _0x546207.bands[_0x120f55.toBand].atmosphere, 1);
  H = _0x546207.bands[_0x120f55.toBand].atmosphere;
  A = B = null;
}
const J = new _0x5c7fc6.Matrix4();
function V(_0x19bcea) {
  const _0x11e431 = Math.min(50, _0x19bcea) / 1000;
  if (!A && H) {
    N(H, H, 0);
  }
  for (const _0x2c0e3a of j) {
    if (!_0x2c0e3a.arming) {
      continue;
    }
    _0x2c0e3a.armMs += _0x19bcea;
    const _0xce6331 = _0x955177(_0x2c0e3a.armMs, _0x48ca37);
    _0x2c0e3a.leaf.rotation.y = _0xce6331 * _0x2c0e3a.stopRad;
    _0x2c0e3a.leaf.position.x = _0xce6331 * M.panelJoltTiles;
  }
  for (const _0x1589ef of R) {
    const _0x218254 = _0x1589ef.weather;
    if (_0x218254) {
      for (let _0x2d0c72 = 0; _0x2d0c72 < _0x218254.drops.length; _0x2d0c72++) {
        const _0x51eb6d = _0x218254.drops[_0x2d0c72];
        _0x51eb6d.y -= _0x218254.W.speed * _0x11e431;
        _0x51eb6d.x += _0x218254.W.drift * _0x11e431;
        if (_0x51eb6d.y < -10) {
          _0x51eb6d.y += _0x218254.W.spanY;
          _0x51eb6d.x += 3;
        }
        if (_0x51eb6d.x < 0) {
          _0x51eb6d.x += _0x218254.span;
        }
        J.makeRotationZ(0.16);
        J.setPosition(_0x51eb6d.x, _0x51eb6d.y, _0x51eb6d.z);
        _0x218254.mesh.setMatrixAt(_0x2d0c72, J);
      }
      _0x218254.mesh.instanceMatrix.needsUpdate = true;
    }
  }
}
function q() {
  for (const _0x91ca82 of j) {
    _0x91ca82.armMs = 0;
    _0x91ca82.arming = false;
    _0x91ca82.leaf.rotation.set(0, 0, 0);
    _0x91ca82.leaf.position.set(0, 0, 0);
    if (_0x91ca82.vapor) {
      _0x91ca82.vapor.mesh.visible = false;
    }
  }
  A = B = null;
  H = _0x546207.bands[0].atmosphere;
  N(H, H, 0);
}
function K() {
  for (const _0x24c9a2 of _0x546207.bands) {
    R.push(F(_0x24c9a2));
  }
  (function () {
    for (const _0x2f27c8 of _0x546207.solidRects || []) {
      const _0x3c12f8 = _0x2cf427(_0x546207, _0x2f27c8.x0);
      const _0x19429c = R[_0x3c12f8].M;
      const _0x1e43bf = (_0x2f27c8.x0 + _0x2f27c8.x1) / 2;
      const _0x3143e0 = (_0x2f27c8.y0 + _0x2f27c8.y1) / 2;
      k(_0x2f27c8.x1 - _0x2f27c8.x0, _0x2f27c8.y1 - _0x2f27c8.y0, 2.2, _0x19429c.rib, _0x1e43bf, _0x3143e0, 0, R[_0x3c12f8].group);
      k(_0x2f27c8.x1 - _0x2f27c8.x0 + 0.6, 0.5, 1.2, _0x19429c.machine, _0x1e43bf, _0x2f27c8.y1 - 0.25, -1.7, R[_0x3c12f8].group);
      k(_0x2f27c8.x1 - _0x2f27c8.x0 + 0.6, 0.9, 1.2, _0x19429c.machine, _0x1e43bf, _0x2f27c8.y0 + 0.45, -1.7, R[_0x3c12f8].group);
    }
  })();
  for (const _0x202a30 of _0x546207.events) {
    j.push(W(_0x202a30, R[_0x202a30.fromBand].M));
  }
  q();
}
let L = false;
let Q = false;
export function initTransformView() {
  return !!_0x30c940 && !L && (Q || (K(), Q = true), _0x893d8a({
    transform: {
      armed: I,
      started: O,
      ritual: X,
      finished: _,
      reset: q,
      frame: V
    }
  }), L = true, true);
}