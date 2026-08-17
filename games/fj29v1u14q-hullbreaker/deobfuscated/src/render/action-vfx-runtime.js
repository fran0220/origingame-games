import * as _0x3d650f from "three";
import { CONFIG as _0x1b0fa4 } from "../config.js";
import { view as _0xe8cb51 } from "../sim/bridge.js";
import { gameMs as _0xff13db, hitStopRemainingMs as _0x2823f7 } from "../sim/time.js";
import { ACTION_VFX_ART_SLOT as _0x23c6e5, actionVfxArtStats as _0x3e0631 } from "./action-vfx-art.js";
import { ACTION_VFX_COMPONENTS as _0x49a7bf, ACTION_VFX_REJECTED as _0x248e4e, ACTION_VFX_RUPTURES as _0x2a4472, ACTION_VFX_WEAPONS as _0x261750 } from "./action-vfx-spec.js";
import { camera as _0x7dfacc, renderer as _0x471117, scene as _0x2aefc1 } from "./scene.js";
import { PAL as _0x59a354 } from "./palette.js";
import { routeRenderable as _0x4c5457, routeWorldFacet as _0x17c168 } from "./route-visibility.js";
import { towerPose as _0x3cdb53 } from "./tower.js";
export const ACTION_VFX_ROW_MAX = 12;
const g = Math.PI / 180;
const M = Object.freeze({
  R: 32,
  S: 38,
  L: 48,
  H: 34,
  F: 40,
  wasp: 34,
  hound: 42,
  machine: 44,
  warden: 48
});
const y = [];
const w = [];
function b(_0x48b37d) {
  const _0x2e2b8e = new _0x3d650f.PlaneGeometry(1, 1);
  const [_0x45ac54, _0x1a21f0, _0x25fc5a, _0xe47c90] = _0x48b37d.uv;
  const _0x353f22 = _0x2e2b8e.attributes.uv;
  for (let _0x3c05a3 = 0; _0x3c05a3 < _0x353f22.count; _0x3c05a3++) {
    const _0x8f5da8 = _0x353f22.getX(_0x3c05a3);
    const _0x1099cf = _0x353f22.getY(_0x3c05a3);
    _0x353f22.setXY(_0x3c05a3, _0x45ac54 + _0x8f5da8 * (_0x25fc5a - _0x45ac54), 1 - _0xe47c90 + _0x1099cf * (_0xe47c90 - _0x1a21f0));
  }
  _0x2e2b8e.translate(0.5 - _0x48b37d.pivot[0], _0x48b37d.pivot[1] - 0.5, 0);
  _0x2e2b8e.computeBoundingSphere();
  _0x2e2b8e.name = "action-vfx-v2:" + _0x48b37d.id;
  _0x2e2b8e.userData.actionVfxId = _0x48b37d.id;
  return _0x2e2b8e;
}
if (_0x23c6e5.tex) {
  for (const G of _0x49a7bf) {
    y.push(b(G));
  }
  for (let Z = 0; Z < 12; Z++) {
    const J = new _0x3d650f.MeshStandardMaterial({
      color: 16777215,
      map: _0x23c6e5.tex,
      emissive: _0x59a354.muzzle,
      emissiveMap: _0x23c6e5.tex,
      emissiveIntensity: 0,
      roughness: 0.62,
      metalness: 0.18,
      transparent: true,
      opacity: 0,
      alphaTest: 0.018,
      depthTest: true,
      depthWrite: false,
      side: _0x3d650f.DoubleSide,
      fog: true,
      toneMapped: true,
      blending: _0x3d650f.NormalBlending,
      premultipliedAlpha: false
    });
    J.forceSinglePass = true;
    J.alphaToCoverage = true;
    J.name = "Action VFX v2 pooled paint " + Z;
    const Q = new _0x3d650f.Mesh(y[0], J);
    Q.name = "Action VFX v2 pooled row " + Z;
    Q.userData.actionVfx = true;
    Q.matrixAutoUpdate = false;
    Q.frustumCulled = true;
    Q.renderOrder = 7;
    Q.visible = false;
    _0x2aefc1.add(Q);
    w.push({
      mesh: Q,
      material: J,
      active: false,
      component: 0,
      s: 0,
      y: 0,
      facet: 0,
      angle: 0,
      targetPx: 0,
      ageMs: 0,
      claimedAt: 0,
      durationMs: 0,
      peakMs: 0,
      fadeStartMs: 0
    });
  }
}
const E = {
  claims: 0,
  damageEndpoints: 0,
  deathEndpoints: 0,
  resets: 0,
  recycles: 0,
  liveRows: 0,
  visibleDraws: 0,
  maxVisibleDraws: 0,
  facetRejects: 0,
  faults: 0,
  collisionEvents: 0,
  damagedEvents: 0,
  lethalEvents: 0,
  undamagedEvents: 0,
  unsupportedWeaponEvents: 0
};
const S = {
  valid: false,
  s: 0,
  y: 0,
  vx: 0,
  vy: 0,
  type: "R",
  id: "",
  targetId: 0,
  targetKind: "",
  lethal: false,
  collisionFrameMs: 0,
  sequence: 0
};
const I = {
  valid: false,
  s: 0,
  y: 0,
  vx: 0,
  vy: 0,
  role: "machine",
  id: "",
  targetId: 0,
  targetKind: "",
  collisionFrameMs: 0,
  sequence: 0
};
const F = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
};
const R = new _0x3d650f.Vector3();
const j = new _0x3d650f.Matrix4();
const A = new _0x3d650f.Matrix4();
const V = new _0x3d650f.Matrix4();
const D = new _0x3d650f.Matrix4();
let P = 0;
let T = 0;
let k = 0;
let H = _0xff13db;
let K = false;
let q = 0;
let W = 0;
let X = 0;
let C = 0;
let O = 0;
let _ = 0;
function z(_0x543ded) {
  _0x543ded.mesh.visible = false;
  _0x543ded.material.opacity = 0;
  _0x543ded.material.emissiveIntensity = 0;
}
function B(_0x1a267a) {
  for (let _0x52c376 = 0; _0x52c376 < w.length; _0x52c376++) {
    w[_0x52c376].active = false;
    z(w[_0x52c376]);
  }
  E.liveRows = 0;
  E.visibleDraws = 0;
  P = 0;
  if (_0x1a267a) {
    E.resets++;
  }
}
function L(_0x583f5f) {
  if (!K) {
    console.warn("HULLBREAKER action VFX v2: painted accents disabled after error", _0x583f5f);
  }
  K = true;
  E.faults++;
  B(false);
}
function N(_0x531a64, _0x15e277, _0x26d97b, _0x4ced4e, _0x173f1c, _0xc52a16) {
  if (!w.length || K) {
    return;
  }
  const _0x3de97f = _0x49a7bf[_0x531a64];
  if (!_0x3de97f || _0x3de97f.reviewStatus !== "production") {
    return;
  }
  const _0x27f1d5 = w[P];
  P = (P + 1) % w.length;
  if (_0x27f1d5.active) {
    E.recycles++;
  }
  _0x27f1d5.active = true;
  _0x27f1d5.component = _0x531a64;
  _0x27f1d5.s = _0x15e277;
  _0x27f1d5.y = _0x26d97b;
  _0x27f1d5.facet = _0x17c168(_0x15e277);
  _0x27f1d5.angle = _0x4ced4e;
  _0x27f1d5.targetPx = Math.max(_0x3de97f.screenExtentPx.min, Math.min(_0x3de97f.screenExtentPx.max, _0x173f1c));
  _0x27f1d5.ageMs = -_0xc52a16;
  _0x27f1d5.claimedAt = _0xff13db;
  _0x27f1d5.durationMs = _0x3de97f.timing.durationMs;
  _0x27f1d5.peakMs = _0x3de97f.timing.peakMs;
  _0x27f1d5.fadeStartMs = _0x3de97f.timing.fadeStartMs;
  _0x27f1d5.mesh.geometry = y[_0x531a64];
  z(_0x27f1d5);
  k |= 1 << _0x531a64;
  E.claims++;
}
function Y(_0x506d51, _0x2d94c2, _0x31837c, _0x4b697c, _0x2cc5a9, _0x1239cd, _0x507079, _0x4bc53a, _0x4d687f, _0x37db61) {
  E.collisionEvents++;
  if (!_0x4d687f) {
    E.undamagedEvents++;
    return;
  }
  E.damagedEvents++;
  if (!function (_0xd0dcd7) {
    return _0xd0dcd7 === "R" || _0xd0dcd7 === "S" || _0xd0dcd7 === "L" || _0xd0dcd7 === "H" || _0xd0dcd7 === "F";
  }(_0x2d94c2)) {
    E.unsupportedWeaponEvents++;
    return;
  }
  const _0x2577d9 = Math.abs(_0x2cc5a9) + Math.abs(_0x1239cd) > 0.000001 ? Math.atan2(_0x1239cd, _0x2cc5a9) : 0;
  const _0x4a5173 = _0x261750[_0x2d94c2];
  const _0x52f0e3 = _0x4a5173[T % _0x4a5173.length];
  T++;
  N(_0x52f0e3, _0x31837c, _0x4b697c, _0x2577d9, M[_0x2d94c2], 0);
  const _0xf39a65 = _0x49a7bf[_0x52f0e3];
  S.valid = true;
  S.s = _0x31837c;
  S.y = _0x4b697c;
  S.vx = _0x2cc5a9;
  S.vy = _0x1239cd;
  S.type = _0x2d94c2;
  S.id = _0xf39a65.id;
  S.targetId = _0x507079;
  S.targetKind = _0x4bc53a;
  S.lethal = _0x37db61;
  S.collisionFrameMs = _0xff13db;
  S.sequence = T;
  E.damageEndpoints++;
  if (!_0x37db61) {
    return;
  }
  E.lethalEvents++;
  let _0x1a2a07 = "machine";
  let _0x3184e1 = _0x2a4472.machine;
  let _0x5ef296 = M.machine;
  if (_0x4bc53a === "wasp") {
    _0x1a2a07 = "wasp";
    _0x3184e1 = _0x2a4472.wasp;
    _0x5ef296 = M.wasp;
  } else if (_0x4bc53a === "hound") {
    _0x1a2a07 = "hound";
    _0x3184e1 = _0x2a4472.hound;
    _0x5ef296 = M.hound;
  } else if (_0x4bc53a === "mortar") {
    _0x1a2a07 = "mortar";
    _0x3184e1 = _0x2a4472.mortar;
  } else if (_0x4bc53a === "polyp") {
    _0x1a2a07 = "polyp";
    _0x3184e1 = _0x2a4472.polyp;
  } else if (_0x4bc53a === "warden") {
    _0x1a2a07 = "warden";
    _0x5ef296 = M.warden;
    const _0x364775 = _0x2a4472.warden;
    N(_0x364775[0], _0x31837c, _0x4b697c, _0x2577d9, _0x5ef296, 0);
    N(_0x364775[1], _0x31837c, _0x4b697c, _0x2577d9 + Math.PI * 0.5, 44, 260);
    N(_0x364775[2], _0x31837c, _0x4b697c, _0x2577d9 - Math.PI * 0.25, 40, 550);
    _0x3184e1 = _0x364775[0];
  }
  if (_0x1a2a07 !== "warden") {
    N(_0x3184e1, _0x31837c, _0x4b697c, _0x2577d9, _0x5ef296, 0);
  }
  const _0x22cc59 = _0x49a7bf[_0x3184e1];
  I.valid = true;
  I.s = _0x31837c;
  I.y = _0x4b697c;
  I.vx = _0x2cc5a9;
  I.vy = _0x1239cd;
  I.role = _0x1a2a07;
  I.id = _0x22cc59.id;
  I.targetId = _0x507079;
  I.targetKind = _0x4bc53a;
  I.collisionFrameMs = _0xff13db;
  I.sequence = T;
  E.deathEndpoints++;
}
function U(_0x4f277a) {
  if (_0x4f277a === "PLAYING") {
    B(true);
    T = 0;
    S.valid = false;
    I.valid = false;
    H = _0xff13db;
  }
}
let $ = false;
export function installActionVfxObservers() {
  q++;
  if (!_0x23c6e5.tex || $) {
    X++;
    return false;
  } else {
    $ = true;
    W++;
    (function (_0x205907) {
      const _0x5d9ed7 = _0xe8cb51.bullets.hostileImpact;
      _0xe8cb51.bullets.hostileImpact = (_0x117106, _0x3c3f3c, _0x17ec46, _0x5344af, _0x1488d8, _0x273f80, _0x4f1f6f, _0xca4860, _0x346b97, _0x3996d1) => {
        _0x5d9ed7(_0x117106, _0x3c3f3c, _0x17ec46, _0x5344af, _0x1488d8, _0x273f80, _0x4f1f6f, _0xca4860, _0x346b97, _0x3996d1);
        if (!K) {
          try {
            _0x205907(_0x117106, _0x3c3f3c, _0x17ec46, _0x5344af, _0x1488d8, _0x273f80, _0x4f1f6f, _0xca4860, _0x346b97, _0x3996d1);
          } catch (_0x1c33c5) {
            L(_0x1c33c5);
          }
        }
      };
    })(Y);
    (function (_0x2fca94, _0x202ba4) {
      const _0x520e21 = _0xe8cb51;
      const _0x5998c6 = _0x520e21[_0x2fca94];
      _0x520e21[_0x2fca94] = (_0x381df1, _0xc237fa, _0x3f0c63) => {
        _0x5998c6(_0x381df1, _0xc237fa, _0x3f0c63);
        if (!K) {
          try {
            _0x202ba4(_0x381df1, _0xc237fa, _0x3f0c63);
          } catch (_0x148dc4) {
            L(_0x148dc4);
          }
        }
      };
    })("stateScreen", U);
    return true;
  }
}
export function updateActionVfx() {
  if (!_0x23c6e5.tex || K) {
    return;
  }
  const _0x232265 = Math.max(0, Math.min(50, _0xff13db - H));
  H = _0xff13db;
  const _0x5a2ec6 = _0x2823f7() > 0;
  const _0x233713 = _0x5a2ec6 ? _0x232265 * _0x1b0fa4.juice.hitStop.scale : _0x232265;
  C = _0x232265;
  O = _0x233713;
  if (_0x5a2ec6 && _0x232265 > 0) {
    _++;
  }
  try {
    (function (_0x560ea9) {
      let _0x36180d = 0;
      let _0x2926f7 = 0;
      for (let _0xa78e80 = 0; _0xa78e80 < w.length; _0xa78e80++) {
        const _0x4f522e = w[_0xa78e80];
        if (!_0x4f522e.active) {
          if (_0x4f522e.mesh.visible) {
            z(_0x4f522e);
          }
          continue;
        }
        if (_0x4f522e.claimedAt !== _0xff13db) {
          _0x4f522e.ageMs += _0x560ea9;
        }
        const _0x3918ce = _0x4f522e.ageMs;
        if (_0x3918ce >= _0x4f522e.durationMs) {
          _0x4f522e.active = false;
          z(_0x4f522e);
          continue;
        }
        _0x36180d++;
        if (_0x3918ce < 0) {
          z(_0x4f522e);
          continue;
        }
        if (!_0x4c5457(_0x4f522e.s) || _0x17c168(_0x4f522e.s) !== _0x4f522e.facet) {
          z(_0x4f522e);
          E.facetRejects++;
          continue;
        }
        const _0x39aa6a = _0x49a7bf[_0x4f522e.component];
        const _0xef7277 = _0x3cdb53(_0x4f522e.s, F);
        const _0xd2c179 = _0xef7277.x + Math.sin(_0xef7277.yaw) * 1.34;
        const _0x264773 = _0x4f522e.y + _0xef7277.alt;
        const _0x5bb186 = _0xef7277.z + Math.cos(_0xef7277.yaw) * 1.34;
        R.set(_0xd2c179, _0x264773, _0x5bb186).applyMatrix4(_0x7dfacc.matrixWorldInverse);
        const _0x1e0963 = Math.max(0.1, -R.z);
        const _0x2f8858 = Math.max(1, _0x471117.domElement.clientHeight || globalThis.innerHeight || 1);
        const _0xc7bbaa = _0x1e0963 * 2 * Math.tan(_0x7dfacc.fov * g * 0.5) / _0x2f8858;
        const _0x57ad9b = _0x3918ce < _0x4f522e.fadeStartMs ? 0 : Math.min(1, (_0x3918ce - _0x4f522e.fadeStartMs) / Math.max(1, _0x4f522e.durationMs - _0x4f522e.fadeStartMs));
        const _0x2c896f = (0.92 + Math.min(1, _0x3918ce / Math.max(1, _0x4f522e.peakMs)) * 0.08) * (1 - _0x57ad9b * 0.08);
        const _0xfcf0be = _0x4f522e.targetPx * _0xc7bbaa * _0x2c896f;
        let _0x4d4b0a;
        let _0x4fa761;
        if (_0x39aa6a.nativeAspect >= 1) {
          _0x4d4b0a = _0xfcf0be;
          _0x4fa761 = _0xfcf0be / _0x39aa6a.nativeAspect;
        } else {
          _0x4fa761 = _0xfcf0be;
          _0x4d4b0a = _0xfcf0be * _0x39aa6a.nativeAspect;
        }
        j.makeRotationY(_0xef7277.yaw);
        A.makeRotationZ(_0x4f522e.angle);
        V.makeScale(_0x4d4b0a, _0x4fa761, 1);
        D.copy(j).multiply(A).multiply(V).setPosition(_0xd2c179, _0x264773, _0x5bb186);
        _0x4f522e.mesh.matrix.copy(D);
        _0x4f522e.mesh.matrixWorldNeedsUpdate = true;
        _0x4f522e.material.opacity = (1 - _0x57ad9b) * 0.92;
        _0x4f522e.material.emissiveIntensity = _0x3918ce < 64 ? (1 - _0x3918ce / 64) * 0.14 : 0;
        _0x4f522e.mesh.visible = true;
        _0x2926f7++;
      }
      E.liveRows = _0x36180d;
      E.visibleDraws = _0x2926f7;
      E.maxVisibleDraws = Math.max(E.maxVisibleDraws, _0x2926f7);
    })(_0x233713);
  } catch (_0x2d42e9) {
    L(_0x2d42e9);
  }
}
export function actionVfxSnapshot() {
  const _0x4c544e = [];
  for (let _0x28aeee = 0; _0x28aeee < _0x49a7bf.length; _0x28aeee++) {
    if (k & 1 << _0x28aeee) {
      _0x4c544e.push(_0x49a7bf[_0x28aeee].id);
    }
  }
  return {
    enabled: !!_0x23c6e5.tex && !K,
    observersInstalled: $,
    observerInstall: {
      calls: q,
      successes: W,
      skips: X,
      idempotent: true
    },
    art: _0x3e0631(),
    textureCount: _0x23c6e5.gpuTextures,
    maxRows: 12,
    liveRows: E.liveRows,
    visibleDraws: E.visibleDraws,
    maxVisibleDraws: E.maxVisibleDraws,
    selectedIds: _0x4c544e,
    resets: E.resets,
    recycles: E.recycles,
    claims: E.claims,
    damageEndpoints: E.damageEndpoints,
    deathEndpoints: E.deathEndpoints,
    facetRejects: E.facetRejects,
    faults: E.faults,
    clock: {
      lastRawMs: +C.toFixed(3),
      lastDtMs: +O.toFixed(3),
      activeScale: C > 0 ? +(O / C).toFixed(4) : 1,
      configuredHitStopScale: _0x1b0fa4.juice.hitStop.scale,
      hitStopRemainingMs: +_0x2823f7().toFixed(3),
      hitStopHeldFrames: _
    },
    observerEvents: {
      collisions: E.collisionEvents,
      damaged: E.damagedEvents,
      lethal: E.lethalEvents,
      undamaged: E.undamagedEvents,
      unsupportedWeapons: E.unsupportedWeaponEvents
    },
    lastDamageEndpoint: S.valid ? {
      s: S.s,
      y: S.y,
      vx: S.vx,
      vy: S.vy,
      weapon: S.type,
      id: S.id,
      targetId: S.targetId,
      targetKind: S.targetKind,
      lethal: S.lethal,
      collisionFrameMs: S.collisionFrameMs,
      sequence: S.sequence
    } : null,
    lastDeathEndpoint: I.valid ? {
      s: I.s,
      y: I.y,
      vx: I.vx,
      vy: I.vy,
      role: I.role,
      id: I.id,
      targetId: I.targetId,
      targetKind: I.targetKind,
      collisionFrameMs: I.collisionFrameMs,
      sequence: I.sequence
    } : null,
    contract: {
      source: "sim-bullet-hostile-impact",
      collisionFrame: true,
      inference: false,
      blend: "normal",
      material: "physical-paint",
      atlasTextures: 1,
      atlasBytes: 4194304,
      screenExtentPx: {
        min: 12,
        mediumMin: 24,
        max: 48
      },
      ivoryEmissionMax: 0.14,
      facetOwned: true,
      exactEndpoints: true,
      hitStopHeld: true,
      hotPathAllocation: false,
      runtimeCanvas: false,
      runtimeCrop: false,
      textureTransforms: false,
      rejectedIds: _0x248e4e.length,
      rejectedSelected: false
    }
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_ACTION_VFX = actionVfxSnapshot;
}