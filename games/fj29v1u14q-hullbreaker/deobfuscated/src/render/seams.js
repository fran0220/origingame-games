import * as _0x2f525e from "three";
import { CONFIG as _0x1c2596 } from "../config.js";
import { normalAscentAltAt as _0x1480cc, normalAscentPitchAt as _0x3c3af0 } from "../pure/ascent.js";
import { SEGS as _0x1f0fa3, polyAt as _0x2334d9, headingAt as _0x198ea8 } from "../pure/path.js";
import { deckSeamRuns as _0x12fc72, depthGain as _0x2c69d0, platformSeamRuns as _0x44e9b0, SEAMS as _0xd5c7a3, resolveSeams as _0xf42055 } from "../pure/seams.js";
import { groundH as _0x3d8cf6, platforms as _0x105217 } from "../sim/level.js";
import { ACTIVE_FIXTURE as _0xad50ca, QUERY as _0x541820, IS_TRANSFORM_SLICE as _0x39f8d5 } from "../mode.js";
import { PAL as _0x4f9336 } from "./palette.js";
import { PIP_GAIN as _0x195c64 } from "./legibility.js";
import { scene as _0x5ccd1e, HIDE as _0x435ee8 } from "./scene.js";
import { routeRenderable as _0x120a5d, routeVisibilityStamp as _0x8932ca } from "./route-visibility.js";
export const SEAMS_ENABLED = _0xf42055(_0x541820.get("seams"));
const E = _0xd5c7a3;
const j = new _0x2f525e.Matrix4();
const S = new _0x2f525e.Matrix4();
const v = new _0x2f525e.Matrix4();
const B = new _0x2f525e.Vector3();
function k(_0x28315b, _0x3de302, _0x254cd8, _0x352aae, _0x1af57f, _0x2d402e) {
  const _0xf98b28 = _0x2334d9(_0x1f0fa3, _0x28315b);
  const _0x4d8f24 = _0x198ea8(_0x1f0fa3, _0x28315b);
  S.makeRotationY(_0x4d8f24);
  if (!_0xad50ca) {
    S.multiply(v.makeRotationZ((_0x42aa52 => _0xad50ca ? 0 : _0x3c3af0(_0x42aa52, _0x1c2596.levelLength))(_0x28315b)));
  }
  j.copy(S);
  j.scale(B.set(_0x352aae, _0x1af57f, _0x2d402e));
  j.setPosition(_0xf98b28.x + Math.sin(_0x4d8f24) * _0x254cd8, _0x3de302 + (_0x5406c9 => _0xad50ca ? 0 : _0x1480cc(_0x5406c9, _0x1c2596.levelLength))(_0x28315b), _0xf98b28.z + Math.cos(_0x4d8f24) * _0x254cd8);
  return j;
}
let C = null;
let U = null;
let b = null;
let G = 0;
let H = [];
const L = [];
const R = [];
const N = [];
let W = "";
let I = 0;
export function updateSeamFoldCull() {
  if (!C || !U || !b) {
    return;
  }
  const _0x379d47 = _0x8932ca();
  if (_0x379d47 !== W) {
    W = _0x379d47;
    I = 0;
    for (let _0x403f7a = 0; _0x403f7a < H.length; _0x403f7a++) {
      const _0x35f4ab = _0x120a5d(H[_0x403f7a].s);
      C.setMatrixAt(_0x403f7a, _0x35f4ab ? L[_0x403f7a] : _0x435ee8);
      U.setMatrixAt(_0x403f7a, _0x35f4ab ? R[_0x403f7a] : _0x435ee8);
      b.setMatrixAt(_0x403f7a, _0x35f4ab ? N[_0x403f7a] : _0x435ee8);
      if (!_0x35f4ab) {
        I++;
      }
    }
    C.instanceMatrix.needsUpdate = true;
    U.instanceMatrix.needsUpdate = true;
    b.instanceMatrix.needsUpdate = true;
  }
}
if (SEAMS_ENABLED && !_0x39f8d5) {
  const _ = _0x12fc72(_0x3d8cf6, E).concat(_0x44e9b0(_0x105217, E));
  const F = [];
  for (const P of _) {
    const z = P.kind === "deck" ? E.deckDepth : E.platformDepth;
    for (const O of P.pips) {
      F.push({
        s: O.s,
        y: O.y,
        depth: z,
        kind: P.kind
      });
    }
  }
  G = F.length;
  H = F;
  if (G > 0) {
    const V = 1 + (_0x195c64 - 1) * 0.32;
    const Y = new _0x2f525e.MeshStandardMaterial({
      color: _0x4f9336.limb.shadow,
      roughness: 0.52,
      metalness: 0.42,
      fog: true
    });
    C = new _0x2f525e.InstancedMesh(new _0x2f525e.BoxGeometry(1, 1, 1), Y, G);
    C.name = "Meridian housed route luminaires";
    C.userData.environmentRole = "route-lamp-housing";
    C.frustumCulled = false;
    const Z = new _0x2f525e.MeshBasicMaterial({
      color: _0x4f9336.seamPip,
      fog: true,
      toneMapped: true
    });
    U = new _0x2f525e.InstancedMesh(new _0x2f525e.BoxGeometry(1, 1, 1), Z, G);
    U.name = "Meridian route luminaire slots";
    U.userData.environmentRole = "route-lamp-core";
    U.frustumCulled = false;
    const q = new _0x2f525e.MeshBasicMaterial({
      color: _0x4f9336.seamHalo,
      transparent: true,
      opacity: 0.07,
      fog: true,
      blending: _0x2f525e.NormalBlending,
      depthWrite: false,
      toneMapped: true
    });
    b = new _0x2f525e.InstancedMesh(new _0x2f525e.BoxGeometry(1, 1, 1), q, G);
    b.name = "Meridian route luminaire surface spill";
    b.userData.environmentRole = "route-lamp-surface-spill";
    b.frustumCulled = false;
    b.renderOrder = 2;
    for (let J = 0; J < G; J++) {
      const K = F[J];
      const Q = k(K.s, K.y, K.depth, _0xd5c7a3.housingWidth * V, _0xd5c7a3.housingHeight * V, _0xd5c7a3.housingDepth).clone();
      const T = k(K.s, K.y + 0.012, K.depth + _0xd5c7a3.housingDepth * 0.52, _0xd5c7a3.coreWidth * V, _0xd5c7a3.coreHeight * V, 0.035).clone();
      const X = k(K.s, K.y - _0xd5c7a3.spillHeight * 0.28, K.depth + _0xd5c7a3.housingDepth * 0.56, _0xd5c7a3.spillWidth * V, _0xd5c7a3.spillHeight * V, 0.012).clone();
      L.push(Q);
      R.push(T);
      N.push(X);
      C.setMatrixAt(J, Q);
      U.setMatrixAt(J, T);
      b.setMatrixAt(J, X);
      _0x2c69d0(K.depth, E);
    }
    C.instanceMatrix.needsUpdate = true;
    U.instanceMatrix.needsUpdate = true;
    b.instanceMatrix.needsUpdate = true;
    _0x5ccd1e.add(C);
    _0x5ccd1e.add(U);
    _0x5ccd1e.add(b);
    updateSeamFoldCull();
  }
}
export function seamsStats() {
  return {
    enabled: SEAMS_ENABLED,
    pipCount: G,
    hidden: I,
    fixtureCount: G,
    grammar: "housed-slots",
    pipEvery: E.pipEvery,
    clusterGap: E.clusterGap || 0
  };
}