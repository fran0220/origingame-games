import * as _0x62ced0 from "three";
import { installView as _0x5a9f2a } from "../sim/bridge.js";
import { gameMs as _0x1f07a5, blink as _0x412e65 } from "../sim/time.js";
import { CAP as _0x378873 } from "../sim/capsules.js";
import { QUERY as _0x1ad606 } from "../mode.js";
import { scene as _0xbe456d } from "./scene.js";
import { placeOnTower as _0x386cf7 } from "./tower.js";
import { PAL as _0x280f84 } from "./palette.js";
import { awaitPreloads as _0x4a2f45, preloadTexture as _0x456eac } from "./preload.js";
import { releaseContactShadow as _0x3a4645, syncContactShadow as _0x18ed64 } from "./contact.js";
import { routeRenderable as _0x21e058 } from "./route-visibility.js";
import { CAPSULE_ART_ATLAS as _0x337f4e, CAPSULE_ART_ROOT as _0x3efe5c } from "./capsule-art-spec.js";
import { CAPSULE_SWEEP_FREQ as _0x197a48, CAPSULE_SWEEP_RAD as _0x4b989a, GLYPH_EDGE as _0x6f28f7, GLYPH_GAIN as _0x46634d, GLYPH_INK_FILL as _0x44839a, GLYPH_SQUEEZE_MIN as _0x275547, GLYPH_TEX_PX as _0x51c807, LEGIBILITY_ON as _0x5e9304 } from "./legibility.js";
const x = _0x3efe5c;
const k = _0x337f4e.file;
const v = _0x337f4e.canvas;
const B = Object.freeze({
  S: 0,
  L: 1,
  H: 2,
  F: 3
});
const A = Object.freeze([512, 320]);
const S = !["0", "off"].includes((_0x1ad606.get("capsules") || "").toLowerCase());
const R = Object.freeze({
  "letter:S": {
    sourceFile: "weapon-spread-v3.png",
    name: "Spread weapon",
    atlas: [18, 28, 475, 263],
    ink: [12, 12, 451, 239]
  },
  "letter:L": {
    sourceFile: "weapon-laser-v3.png",
    name: "Laser weapon",
    atlas: [530, 29, 476, 262],
    ink: [12, 12, 452, 239]
  },
  "letter:H": {
    sourceFile: "weapon-homing-v3.png",
    name: "Homing weapon",
    atlas: [1042, 28, 475, 263],
    ink: [12, 11, 451, 240]
  },
  "letter:F": {
    sourceFile: "weapon-flame-v3.png",
    name: "Flame weapon",
    atlas: [1554, 28, 475, 263],
    ink: [12, 12, 451, 239]
  },
  "mod:RG": {
    sourceFile: "mod-rage-v3.png",
    name: "Rage modifier",
    atlas: [18, 348, 476, 264],
    ink: [12, 12, 452, 240]
  },
  "mod:GS": {
    sourceFile: "mod-ghost-v3.png",
    name: "Ghost modifier",
    atlas: [530, 348, 475, 264],
    ink: [12, 12, 452, 240]
  },
  "mod:CH": {
    sourceFile: "mod-chrono-v3.png",
    name: "Chrono modifier",
    atlas: [1042, 347, 476, 265],
    ink: [12, 12, 452, 241]
  },
  "mod:OL": {
    sourceFile: "mod-orbital-v3.png",
    name: "Orbital modifier",
    atlas: [1554, 348, 476, 264],
    ink: [12, 12, 452, 241]
  }
});
const C = 2.16;
const T = 1.34;
const F = 1.82;
const D = 1.014;
const P = 0.26;
const L = 0.58;
const E = 0.09;
const H = Object.freeze({
  letter: Object.freeze({
    role: "weapon",
    nose: true,
    tailFins: true,
    utilityPods: false,
    signalRole: "capsule",
    hardpoints: true
  }),
  mod: Object.freeze({
    role: "modifier",
    nose: false,
    tailFins: false,
    utilityPods: true,
    signalRole: "modCapsule",
    hardpoints: false
  })
});
const I = Object.freeze({
  RAPID: Object.freeze({
    geometry: "fork",
    role: "muzzle"
  }),
  HEAVY: Object.freeze({
    geometry: "block",
    role: "modCapsule"
  }),
  FORKED: Object.freeze({
    geometry: "twin",
    role: "capsule"
  }),
  SEEKER: Object.freeze({
    geometry: "antenna",
    role: "capsule"
  }),
  PHASE: Object.freeze({
    geometry: "phase",
    role: "laser"
  }),
  VOLATILE: Object.freeze({
    geometry: "saw",
    role: "flame"
  })
});
const W = S ? _0x456eac(new URL(x + k, import.meta.url).href) : Promise.resolve({
  state: "disabled",
  tex: null,
  error: "disabled by ?capsules=0"
});
const $ = new Map(Object.entries(R).map(([_0x2a3bda, _0x8c86ce]) => [_0x2a3bda, {
  key: _0x2a3bda,
  name: _0x8c86ce.name,
  sourceFile: _0x8c86ce.sourceFile,
  state: "pending",
  tex: null,
  geometry: null,
  material: null,
  error: null,
  source: _0x8c86ce.atlas.slice(2),
  ink: _0x8c86ce.ink,
  crop: _0x8c86ce.atlas,
  world: null
}]));
function G(_0x38ac12) {
  const [_0xe87a07, _0xddab04, _0x52e725, _0xb1af2e] = _0x38ac12;
  const [_0x1b9e3b, _0x21baea] = v;
  const _0x42f6e7 = _0xe87a07 / _0x1b9e3b;
  const _0x2db7fd = (_0xe87a07 + _0x52e725) / _0x1b9e3b;
  const _0x4396f4 = 1 - (_0xddab04 + _0xb1af2e) / _0x21baea;
  const _0x139fa7 = 1 - _0xddab04 / _0x21baea;
  const _0x5e55b1 = new _0x62ced0.PlaneGeometry(1, 1);
  const _0x72322 = _0x5e55b1.attributes.uv;
  for (let _0x3d73ad = 0; _0x3d73ad < _0x72322.count; _0x3d73ad++) {
    _0x72322.setXY(_0x3d73ad, _0x42f6e7 + _0x72322.getX(_0x3d73ad) * (_0x2db7fd - _0x42f6e7), _0x4396f4 + _0x72322.getY(_0x3d73ad) * (_0x139fa7 - _0x4396f4));
  }
  _0x72322.needsUpdate = true;
  return _0x5e55b1;
}
function q(_0x39cef6) {
  const _0x486bdb = _0x39cef6[2] / _0x39cef6[3];
  const _0x53f6d8 = Math.min(1.58, 1.82 / _0x486bdb);
  return [_0x53f6d8 * _0x486bdb, _0x53f6d8];
}
await _0x4a2f45();
const N = await W;
if (N.state === "ready") {
  const Ee = N.tex && N.tex.image;
  const He = Ee && (Ee.naturalWidth || Ee.videoWidth || Ee.width);
  const Ie = Ee && (Ee.naturalHeight || Ee.videoHeight || Ee.height);
  if (He === v[0] && Ie === v[1]) {
    N.tex.wrapS = N.tex.wrapT = _0x62ced0.ClampToEdgeWrapping;
    U = N.tex;
    const We = new _0x62ced0.MeshBasicMaterial({
      map: U,
      transparent: true,
      alphaTest: 0.035,
      depthWrite: true,
      side: _0x62ced0.DoubleSide,
      forceSinglePass: true,
      fog: true,
      toneMapped: true
    });
    for (const $e of $.values()) {
      $e.tex = N.tex;
      $e.geometry = G($e.crop);
      $e.material = We;
      $e.world = q($e.crop);
      $e.state = "ready";
    }
  } else {
    const Ge = "atlas dimensions " + (He || 0) + "x" + (Ie || 0) + "; expected " + v.join("x");
    for (const qe of $.values()) {
      qe.state = "failed";
      qe.error = Ge;
    }
    console.warn("HULLBREAKER art: capsule atlas is invalid (" + Ge + ") — drawing the lettered fallback instead.");
  }
} else {
  for (const Ne of $.values()) {
    Ne.state = "failed";
    Ne.error = N.error || N.state;
  }
  if (S) {
    console.warn("HULLBREAKER art: capsule atlas did not load (" + (N.error || N.state) + ") — drawing the lettered fallback instead.");
  }
}
var U;
export function capsuleAtlasWeaponCell(_0x364769) {
  const _0x2e4bf9 = B[_0x364769];
  const _0x3009ab = S && N.state === "ready" ? N.tex?.image : null;
  if (_0x2e4bf9 === undefined || !_0x3009ab) {
    return null;
  }
  const _0x1efdf5 = _0x3009ab.naturalWidth || _0x3009ab.videoWidth || _0x3009ab.width;
  const _0x34dd12 = _0x3009ab.naturalHeight || _0x3009ab.videoHeight || _0x3009ab.height;
  if (_0x1efdf5 !== v[0] || _0x34dd12 !== v[1]) {
    return null;
  } else {
    return {
      image: _0x3009ab,
      sx: _0x2e4bf9 * A[0],
      sy: 0,
      sw: A[0],
      sh: A[1]
    };
  }
}
const K = new _0x62ced0.PlaneGeometry(1, 1);
const Y = Object.freeze([Object.freeze([-0.5, -0.5]), Object.freeze([0.5, -0.5]), Object.freeze([0.5, 0.5]), Object.freeze([-0.5, 0.5])]);
const _ = Object.freeze([Object.freeze([-0.5, -0.5]), Object.freeze([0.5, 0]), Object.freeze([-0.5, 0.5])]);
const V = Object.freeze([Object.freeze([-0.5, 0]), Object.freeze([0.5, -0.5]), Object.freeze([0.5, 0.5])]);
const X = Object.freeze([Object.freeze([0, -0.5]), Object.freeze([0.5, 0]), Object.freeze([0, 0.5]), Object.freeze([-0.5, 0])]);
const J = Object.freeze([Object.freeze([-0.5, -0.25]), Object.freeze([-0.37, -0.5]), Object.freeze([0.3, -0.5]), Object.freeze([0.5, 0]), Object.freeze([0.3, 0.5]), Object.freeze([-0.37, 0.5]), Object.freeze([-0.5, 0.25])]);
const Q = Object.freeze([Object.freeze([-0.5, -0.24]), Object.freeze([-0.34, -0.5]), Object.freeze([0.34, -0.5]), Object.freeze([0.5, -0.24]), Object.freeze([0.5, 0.24]), Object.freeze([0.34, 0.5]), Object.freeze([-0.34, 0.5]), Object.freeze([-0.5, 0.24])]);
function Z(_0x5a3d9a) {
  const _0x530fa4 = new _0x62ced0.Shape();
  _0x530fa4.moveTo(_0x5a3d9a[0][0], _0x5a3d9a[0][1]);
  for (let _0x107db6 = 1; _0x107db6 < _0x5a3d9a.length; _0x107db6++) {
    _0x530fa4.lineTo(_0x5a3d9a[_0x107db6][0], _0x5a3d9a[_0x107db6][1]);
  }
  _0x530fa4.closePath();
  return new _0x62ced0.ShapeGeometry(_0x530fa4);
}
const ee = Object.freeze({
  fork: Z([[-0.48, -0.5], [-0.12, -0.05], [-0.12, 0.48], [0.12, 0.48], [0.12, -0.05], [0.48, -0.5], [0.22, -0.5], [0, -0.25], [-0.22, -0.5]]),
  block: K,
  twin: Z([[-0.5, -0.45], [-0.08, 0], [-0.5, 0.45], [-0.18, 0.45], [0.15, 0], [0.5, 0.45], [0.5, 0.12], [0.3, 0], [0.5, -0.12], [0.5, -0.45]]),
  antenna: Z([[-0.18, -0.5], [0.5, 0], [-0.18, 0.5], [0.05, 0]]),
  phase: Z([[-0.5, -0.5], [-0.08, -0.5], [-0.3, 0], [-0.08, 0.5], [-0.5, 0.5], [-0.28, 0], [0.5, 0]]),
  saw: Z([[-0.5, -0.45], [-0.12, -0.08], [-0.26, 0.12], [0.18, 0.5], [0.02, 0.13], [0.5, 0.28], [0.12, -0.08], [0.28, -0.3]])
});
function te(_0x4e42ae, _0x2bd701, _0x4087c0, _0x1065eb, _0xc0d254, _0x571fec, _0x4d618e = 0) {
  return {
    points: _0x4e42ae,
    x: _0x2bd701,
    y: _0x4087c0,
    sx: _0x1065eb,
    sy: _0xc0d254,
    z: _0x571fec,
    rotation: _0x4d618e
  };
}
function oe(_0xecbaab, _0x3bf2ac, _0x16c8d4, _0x547465, _0xdbac99, _0x3da453 = 0) {
  return te(Y, _0xecbaab, _0x3bf2ac, _0x16c8d4, _0x547465, _0xdbac99, _0x3da453);
}
function re(_0x495485) {
  const _0x517b53 = [];
  const _0x4e2614 = [];
  for (const _0x4826d7 of _0x495485) {
    const _0x2c2839 = _0x517b53.length / 3;
    const _0x5d8b87 = Math.cos(_0x4826d7.rotation || 0);
    const _0x3f09c9 = Math.sin(_0x4826d7.rotation || 0);
    for (const _0x1170ad of _0x4826d7.points) {
      const _0x17fea1 = _0x1170ad[0] * _0x4826d7.sx;
      const _0x248452 = _0x1170ad[1] * _0x4826d7.sy;
      _0x517b53.push(_0x4826d7.x + _0x17fea1 * _0x5d8b87 - _0x248452 * _0x3f09c9, _0x4826d7.y + _0x17fea1 * _0x3f09c9 + _0x248452 * _0x5d8b87, _0x4826d7.z);
    }
    for (let _0x45c3f5 = 1; _0x45c3f5 < _0x4826d7.points.length - 1; _0x45c3f5++) {
      _0x4e2614.push(_0x2c2839, _0x2c2839 + _0x45c3f5, _0x2c2839 + _0x45c3f5 + 1);
    }
  }
  const _0x2eab86 = new _0x62ced0.BufferGeometry();
  _0x2eab86.setAttribute("position", new _0x62ced0.Float32BufferAttribute(_0x517b53, 3));
  _0x2eab86.setIndex(_0x4e2614);
  _0x2eab86.computeBoundingSphere();
  _0x2eab86.userData.partCount = _0x495485.length;
  return _0x2eab86;
}
function ne(_0x496b40) {
  const _0xec54b2 = _0x496b40 === "letter";
  const _0x1c28af = _0xec54b2 ? J : Q;
  const _0x4576b0 = F;
  const _0x100002 = D;
  const _0x2f0651 = [te(_0x1c28af, 0, 0, 2.12, 1.24, -0.075)];
  if (_0xec54b2) {
    _0x2f0651.push(oe(-0.0728, -_0x100002 * 0.51, _0x4576b0 * 0.78, 0.085, -0.03));
    _0x2f0651.push(oe(-0.2912, _0x100002 * 0.47, 0.8372, 0.07, -0.03));
    _0x2f0651.push(oe(-0.6006, _0x100002 * 0.43, 0.18, 0.12, 0.018, -0.1));
    _0x2f0651.push(oe(_0x4576b0 * 0.27, -_0x100002 * 0.44, 0.2, 0.11, 0.018, 0.1));
    _0x2f0651.push(te(V, -0.98, _0x100002 * 0.3, 0.19, 0.2, -0.024));
    _0x2f0651.push(te(V, -0.98, -_0x100002 * 0.3, 0.19, 0.2, -0.024));
  } else {
    _0x2f0651.push(oe(0, _0x100002 * 0.46, 1.1648, 0.075, -0.03));
    _0x2f0651.push(oe(0, -_0x100002 * 0.46, 1.1648, 0.075, -0.03));
    _0x2f0651.push(te(X, 0, 0.562, 0.3, 0.18, -0.024));
    _0x2f0651.push(te(X, 0, -0.562, 0.3, 0.18, -0.024));
  }
  const _0x4c3549 = [te(_0x1c28af, 0, 0, 2, 1.12, -0.065), oe(0, 0, 2, 0.095, -0.05)];
  if (_0xec54b2) {
    _0x4c3549.push(te(_, 0.98, 0, 0.2, _0x100002 * 0.45, -0.022));
  } else {
    for (const _0x595634 of [-1, 1]) {
      _0x4c3549.push(oe(_0x595634 * 0.9550000000000001, 0, 0.15, _0x100002 * 0.46, -0.024));
    }
  }
  const _0x374cc2 = [];
  if (_0xec54b2) {
    _0x374cc2.push(te(_, 1.0150000000000001, 0, 0.082, _0x100002 * 0.17, 0.035));
    _0x374cc2.push(oe(-0.6552, _0x100002 * 0.47, 0.12, 0.03, 0.035, -0.1));
  } else {
    for (const _0x36cd76 of [-1, 1]) {
      _0x374cc2.push(oe(_0x36cd76 * 0.9600000000000001, 0, 0.032, _0x100002 * 0.29, 0.035));
    }
    _0x374cc2.push(te(X, 0, 0.567, 0.11, 0.075, 0.035));
  }
  const _0x4c5578 = [];
  const _0x5e6ef5 = [];
  for (let _0x5b6468 = 0; _0x5b6468 <= 3; _0x5b6468++) {
    const _0x466347 = [];
    if (_0xec54b2) {
      for (const _0x2ba3d2 of [-0.17, 0, 0.17]) {
        _0x466347.push(oe(0.9650000000000001, _0x2ba3d2 * _0x100002, 0.115, 0.022, 0.04));
      }
    }
    if (_0x5b6468 > 0) {
      const _0x3f7fd6 = _0x5b6468 * E + (_0x5b6468 - 1) * 0.11;
      for (let _0x4c7b55 = 0; _0x4c7b55 < _0x5b6468; _0x4c7b55++) {
        const _0x4bca92 = -_0x3f7fd6 / 2 + 0.045 + _0x4c7b55 * 0.2;
        _0x466347.push(oe(_0x4bca92, -_0x100002 * 0.48, E, 0.09, 0.04));
      }
    }
    _0x4c5578.push(re(_0x466347));
    const _0x508cbf = [];
    for (let _0x3a411c = 0; _0x3a411c < _0x5b6468; _0x3a411c++) {
      const _0x459189 = (_0x3a411c - (_0x5b6468 - 1) * 0.5) * 0.26;
      _0x508cbf.push(oe(_0x459189, 0.502, 0.18, 0.055, 0.022));
    }
    _0x5e6ef5.push(re(_0x508cbf));
  }
  return Object.freeze({
    metal: re(_0x2f0651),
    ink: re(_0x4c3549),
    signal: re(_0x374cc2),
    warm: Object.freeze(_0x4c5578),
    sockets: Object.freeze(_0x5e6ef5)
  });
}
const ae = Object.freeze({
  letter: ne("letter"),
  mod: ne("mod")
});
function se(_0x2f3abf) {
  return (_0x2f3abf.kind === "mod" ? "mod" : "letter") + ":" + _0x2f3abf.letter;
}
function ie(_0x30bd8f, _0x45dc3d = false) {
  return new _0x62ced0.MeshBasicMaterial({
    color: _0x30bd8f,
    transparent: _0x45dc3d,
    opacity: 1,
    blending: _0x45dc3d ? _0x62ced0.AdditiveBlending : _0x62ced0.NormalBlending,
    depthWrite: !_0x45dc3d,
    depthTest: true,
    side: _0x62ced0.DoubleSide,
    forceSinglePass: true,
    fog: true,
    toneMapped: true
  });
}
const le = ie(_0x280f84.capsuleInk);
const ce = ie(_0x280f84.catwalk);
const ue = ie(_0x280f84.muzzle);
const pe = Object.freeze({
  muzzle: ue,
  modCapsule: ie(_0x280f84.modCapsule),
  capsule: ie(_0x280f84.capsule),
  laser: ie(_0x280f84.shots.L),
  flame: ie(_0x280f84.shots.F)
});
function fe(_0x28fec2) {
  if (_0x28fec2.signalRole === "modCapsule") {
    return _0x280f84.modCapsule;
  } else {
    return _0x280f84.capsule;
  }
}
function de(_0x4b0d52) {
  if (_0x4b0d52.kind !== "letter") {
    return 0;
  } else {
    _0x219eb8 = Math.round(_0x4b0d52.gun?.tier || 0);
    _0x1b1dbc = 0;
    _0x1d6c9c = 3;
    return Math.max(_0x1b1dbc, Math.min(_0x1d6c9c, _0x219eb8));
  }
  var _0x219eb8;
  var _0x1b1dbc;
  var _0x1d6c9c;
}
function me(_0x427492, _0x2ff7fb = 0, _0x3edd3e = 0, _0x1b9eeb = 1, _0x357915 = 1, _0x3f44d7 = 0) {
  const _0x343811 = _0x427492.getAttribute("position");
  const _0x15f696 = Math.cos(_0x3f44d7);
  const _0xdeebc6 = Math.sin(_0x3f44d7);
  let _0x49bd76 = 0;
  for (let _0x7cfb0c = 0; _0x7cfb0c < _0x343811.count; _0x7cfb0c++) {
    const _0x78c181 = _0x343811.getX(_0x7cfb0c) * _0x1b9eeb;
    const _0x5ab9fd = _0x343811.getY(_0x7cfb0c) * _0x357915;
    const _0x35532b = _0x2ff7fb + _0x78c181 * _0x15f696 - _0x5ab9fd * _0xdeebc6;
    const _0x5e4f76 = _0x3edd3e + _0x78c181 * _0xdeebc6 + _0x5ab9fd * _0x15f696;
    _0x49bd76 = Math.max(_0x49bd76, Math.hypot(_0x35532b, _0x5e4f76));
  }
  return _0x49bd76;
}
const he = function () {
  let _0x4ea70a = me(K, 0, 0, F, D);
  for (const _0x1dedce of Object.values(ae)) {
    _0x4ea70a = Math.max(_0x4ea70a, me(_0x1dedce.metal), me(_0x1dedce.ink), me(_0x1dedce.signal));
    for (let _0x2cd102 = 0; _0x2cd102 <= 3; _0x2cd102++) {
      _0x4ea70a = Math.max(_0x4ea70a, me(_0x1dedce.warm[_0x2cd102]), me(_0x1dedce.sockets[_0x2cd102]));
    }
  }
  for (const _0x172e21 of [-0.40040000000000003, 0.40040000000000003]) {
    _0x4ea70a = Math.max(_0x4ea70a, me(K, _0x172e21, 0, 0.03, 0.42588));
  }
  for (const _0x3e9f45 of [-0.26, 0, 0.26]) {
    for (const _0x275b5c of Object.values(ee)) {
      _0x4ea70a = Math.max(_0x4ea70a, me(_0x275b5c, _0x3e9f45, 0.552, 0.14, 0.16));
    }
  }
  return _0x4ea70a;
}();
if (!Number.isFinite(he) || he > _0x378873.pickupRadius + 0.000001) {
  throw new Error("Capsule reliquary reach " + he.toFixed(4) + " exceeds pickup radius " + _0x378873.pickupRadius.toFixed(4));
}
const be = Math.min(_0x378873.pickupRadius * 0.78, he * 0.8);
function ge(_0x5b88d4) {
  const _0x1828b9 = ae.letter;
  const _0x58ba7f = function (_0x5c353b, _0x3ccc26) {
    return new _0x62ced0.MeshBasicMaterial({
      color: fe(_0x5c353b),
      transparent: true,
      opacity: P + _0x3ccc26 * 0.018,
      blending: _0x62ced0.NormalBlending,
      depthWrite: false,
      depthTest: true,
      side: _0x62ced0.DoubleSide,
      forceSinglePass: true,
      fog: true,
      toneMapped: true
    });
  }(H.letter, 0);
  const _0x3b40b1 = function (_0x53078e) {
    return new _0x62ced0.MeshBasicMaterial({
      color: fe(_0x53078e),
      transparent: true,
      opacity: L,
      blending: _0x62ced0.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      side: _0x62ced0.DoubleSide,
      forceSinglePass: true,
      fog: true,
      toneMapped: true
    });
  }(H.letter);
  const _0x2d573b = new _0x62ced0.Group();
  _0x2d573b.name = "Capsule reliquary pool row " + _0x5b88d4;
  _0x2d573b.visible = false;
  const _0x529f35 = new _0x62ced0.Group();
  _0x529f35.name = "Capsule reliquary assembly " + _0x5b88d4;
  const _0xaece8e = new _0x62ced0.Mesh(_0x1828b9.metal, ce);
  const _0x143c2d = new _0x62ced0.Mesh(_0x1828b9.ink, le);
  const _0x5a44b6 = $.values().next().value;
  const _0x13deab = new _0x62ced0.Mesh(_0x5a44b6?.geometry || K, _0x5a44b6?.material || le);
  const _0x481007 = new _0x62ced0.Mesh(_0x1828b9.signal, _0x58ba7f);
  const _0x306f0c = new _0x62ced0.Mesh(K, _0x3b40b1);
  const _0x403183 = new _0x62ced0.Mesh(_0x1828b9.warm[0], ue);
  const _0x3174df = new _0x62ced0.Mesh(_0x1828b9.sockets[0], le);
  const _0x2d18c1 = [];
  _0xaece8e.renderOrder = _0x143c2d.renderOrder = 2;
  _0x13deab.renderOrder = 3;
  _0x481007.renderOrder = _0x306f0c.renderOrder = _0x403183.renderOrder = 5;
  _0x3174df.renderOrder = 4;
  _0x306f0c.name = "Reliquary contained-core scanner";
  _0x306f0c.scale.set(0.03, 0.42588, 1);
  _0x306f0c.position.z = 0.042;
  for (let _0x9efd0f = 0; _0x9efd0f < 3; _0x9efd0f++) {
    const _0x550d87 = new _0x62ced0.Mesh(K, ue);
    _0x550d87.name = "Capsule hardpoint pool row " + _0x5b88d4 + "." + _0x9efd0f;
    _0x550d87.scale.set(0.14, 0.16, 1);
    _0x550d87.position.z = 0.045;
    _0x550d87.renderOrder = 5;
    _0x550d87.visible = false;
    _0x2d18c1.push(_0x550d87);
  }
  _0x529f35.add(_0xaece8e, _0x143c2d, _0x13deab, _0x481007, _0x306f0c, _0x403183, _0x3174df, ..._0x2d18c1);
  _0x2d573b.add(_0x529f35);
  return {
    rowIndex: _0x5b88d4,
    root: _0x2d573b,
    assembly: _0x529f35,
    mesh: _0x2d573b,
    metal: _0xaece8e,
    ink: _0x143c2d,
    art: _0x13deab,
    signal: _0x481007,
    scanner: _0x306f0c,
    warm: _0x403183,
    sockets: _0x3174df,
    hardpoints: _0x2d18c1,
    signalMat: _0x58ba7f,
    scannerMat: _0x3b40b1,
    signalBaseAlpha: P,
    scannerBaseAlpha: L,
    production: true,
    tier: 0,
    traits: Object.freeze([]),
    profile: H.letter,
    slot: _0x5a44b6
  };
}
const we = new _0x62ced0.BoxGeometry(_0x378873.size, _0x378873.size, _0x378873.size);
const ye = {};
const je = "ui-monospace, \"SF Mono\", Menlo, Consolas, monospace";
const Me = 0.08;
function ze(_0x19566f, _0x2fb927) {
  const _0x1421ef = (_0x19566f || "") + "|" + _0x2fb927;
  if (ye[_0x1421ef]) {
    return ye[_0x1421ef];
  }
  const _0x47aa00 = _0x5e9304 ? _0x51c807 : 64;
  const _0x856898 = document.createElement("canvas");
  _0x856898.width = _0x856898.height = _0x47aa00;
  const _0x161771 = _0x856898.getContext("2d");
  _0x161771.fillStyle = _0x2fb927;
  _0x161771.fillRect(0, 0, _0x47aa00, _0x47aa00);
  if (_0x5e9304) {
    const _0x41d3e1 = Math.max(1, Math.round(_0x47aa00 * _0x6f28f7));
    _0x161771.fillStyle = _0x280f84.capsuleInk;
    _0x161771.fillRect(0, 0, _0x47aa00, _0x41d3e1);
    _0x161771.fillRect(0, _0x47aa00 - _0x41d3e1, _0x47aa00, _0x41d3e1);
    _0x161771.fillRect(0, 0, _0x41d3e1, _0x47aa00);
    _0x161771.fillRect(_0x47aa00 - _0x41d3e1, 0, _0x41d3e1, _0x47aa00);
    if (_0x19566f) {
      (function (_0x9acb60, _0x225d7b, _0x2d41dc) {
        const _0x246827 = Math.max(1, Math.round(_0x2d41dc * _0x6f28f7));
        const _0x248f0e = _0x2d41dc * _0x44839a;
        const _0x2484fd = _0x2d41dc - _0x246827 * 4;
        _0x9acb60.textAlign = "center";
        _0x9acb60.textBaseline = "alphabetic";
        _0x9acb60.font = "bold 100px " + je;
        const _0x51ce0f = _0x9acb60.measureText(_0x225d7b);
        const _0x2c6233 = _0x248f0e / (((_0x51ce0f.actualBoundingBoxAscent || 70) + (_0x51ce0f.actualBoundingBoxDescent || 0)) / 100 + Me);
        _0x9acb60.font = "bold " + _0x2c6233 + "px " + je;
        const _0x274042 = _0x9acb60.measureText(_0x225d7b);
        const _0xfc44d2 = _0x274042.actualBoundingBoxAscent || _0x2c6233 * 0.7;
        const _0x514451 = _0x274042.actualBoundingBoxDescent || 0;
        const _0xfd8bec = (_0x274042.actualBoundingBoxLeft !== undefined ? _0x274042.actualBoundingBoxLeft + _0x274042.actualBoundingBoxRight : _0x274042.width) + _0x2c6233 * Me;
        let _0x2a080f = Math.min(1, _0x2484fd / (_0xfd8bec || _0x2484fd));
        let _0x57af96 = 1;
        if (_0x2a080f < _0x275547) {
          _0x57af96 = _0x2a080f / _0x275547;
          _0x2a080f = _0x275547;
        }
        _0x9acb60.save();
        _0x9acb60.translate(_0x2d41dc / 2, _0x2d41dc / 2);
        _0x9acb60.scale(_0x2a080f, _0x57af96);
        _0x9acb60.lineJoin = "round";
        _0x9acb60.lineWidth = _0x2c6233 * Me;
        _0x9acb60.strokeStyle = _0x280f84.capsuleInk;
        _0x9acb60.fillStyle = _0x280f84.capsuleInk;
        const _0xd8c2ff = (_0xfc44d2 - _0x514451) / 2;
        _0x9acb60.strokeText(_0x225d7b, 0, _0xd8c2ff);
        _0x9acb60.fillText(_0x225d7b, 0, _0xd8c2ff);
        _0x9acb60.restore();
      })(_0x161771, _0x19566f, _0x47aa00);
    }
  } else if (_0x19566f) {
    _0x161771.fillStyle = _0x280f84.capsuleInk;
    _0x161771.font = "bold " + (_0x19566f.length > 1 ? 30 : 42) + "px monospace";
    _0x161771.textAlign = "center";
    _0x161771.textBaseline = "middle";
    _0x161771.fillText(_0x19566f, 32, 35);
  }
  const _0x39cadc = new _0x62ced0.CanvasTexture(_0x856898);
  _0x39cadc.anisotropy = 4;
  ye[_0x1421ef] = _0x39cadc;
  return _0x39cadc;
}
const Oe = Object.freeze(["letter:R", ...Object.keys(R)]);
const xe = new Map();
function ke(_0x549dd5) {
  const [_0x17ef79, _0x47eed3] = _0x549dd5.split(":");
  const _0x565161 = _0x17ef79 === "mod" ? _0x280f84.modCapsule : _0x280f84.capsule;
  const _0x5eb973 = new _0x62ced0.MeshBasicMaterial({
    map: ze(_0x47eed3, _0x565161)
  });
  if (!_0x5e9304) {
    return _0x5eb973;
  }
  const _0x356579 = new _0x62ced0.MeshBasicMaterial({
    map: ze(null, _0x565161)
  });
  return [_0x356579, _0x356579, _0x356579, _0x356579, _0x5eb973, _0x5eb973];
}
for (const Ue of Oe) {
  xe.set(Ue, ke(Ue));
}
const ve = xe.get("letter:R");
const Be = new Map();
const Ae = [];
const Se = [];
const Re = new Array(24).fill(null);
let Ce = 0;
let Te = 0;
for (let Ke = 0; Ke < 24; Ke++) {
  const Ye = ge(Ke);
  const _e = new _0x62ced0.Mesh(we, ve);
  _e.name = "Capsule fallback pool row " + Ke;
  _e.scale.setScalar(_0x46634d);
  _e.visible = false;
  Ye.fallbackMesh = _e;
  Ye.owner = null;
  Ae.push(Ye);
  Se.push(Ke);
  _0xbe456d.add(Ye.root, _e);
}
function Fe(_0x1649df) {
  const _0x37046f = function (_0x5cb8f8) {
    let _0x3299bd = Se.pop();
    if (_0x3299bd === undefined) {
      _0x3299bd = Ce;
      Ce = (Ce + 1) % 24;
      const _0x36a88c = Re[_0x3299bd];
      if (_0x36a88c) {
        Be.delete(_0x36a88c);
        _0x3a4645(_0x36a88c);
      }
      Te++;
    }
    const _0x23869f = Ae[_0x3299bd];
    _0x23869f.root.visible = false;
    _0x23869f.fallbackMesh.visible = false;
    _0x23869f.owner = _0x5cb8f8;
    Re[_0x3299bd] = _0x5cb8f8;
    Be.set(_0x5cb8f8, _0x23869f);
    return _0x23869f;
  }(_0x1649df);
  const _0x15b2c8 = $.get(se(_0x1649df));
  if (_0x15b2c8 && _0x15b2c8.state === "ready") {
    _0x37046f.fallbackMesh.visible = false;
    (function (_0x1f747e, _0x19a4fd, _0x3ae247) {
      const _0xeb919b = de(_0x19a4fd);
      const _0x2049a1 = _0x19a4fd.kind === "mod" ? "mod" : "letter";
      const _0x512784 = H[_0x2049a1];
      const _0x2628ab = ae[_0x2049a1];
      const _0x2d6ec1 = _0x512784.hardpoints && Array.isArray(_0x19a4fd.gun?.traits) ? _0x19a4fd.gun.traits : [];
      _0x1f747e.metal.geometry = _0x2628ab.metal;
      _0x1f747e.ink.geometry = _0x2628ab.ink;
      _0x1f747e.art.geometry = _0x3ae247.geometry;
      _0x1f747e.art.material = _0x3ae247.material;
      _0x1f747e.art.scale.set(_0x3ae247.world[0], _0x3ae247.world[1], 1);
      _0x1f747e.assembly.rotation.z = _0x2049a1 === "mod" ? Math.PI * 0.5 : 0;
      _0x1f747e.signal.geometry = _0x2628ab.signal;
      _0x1f747e.warm.geometry = _0x2628ab.warm[_0xeb919b];
      _0x1f747e.warm.visible = _0x2628ab.warm[_0xeb919b].userData.partCount > 0;
      _0x1f747e.sockets.geometry = _0x2628ab.sockets[_0xeb919b];
      _0x1f747e.sockets.visible = _0x2628ab.sockets[_0xeb919b].userData.partCount > 0;
      _0x1f747e.signalMat.color.set(fe(_0x512784));
      _0x1f747e.scannerMat.color.set(fe(_0x512784));
      _0x1f747e.signalBaseAlpha = P + _0xeb919b * 0.018;
      _0x1f747e.signalMat.opacity = _0x1f747e.signalBaseAlpha;
      _0x1f747e.scannerBaseAlpha = L;
      _0x1f747e.scannerMat.opacity = _0x1f747e.scannerBaseAlpha;
      for (let _0x3ac184 = 0; _0x3ac184 < 3; _0x3ac184++) {
        const _0x429cb1 = _0x1f747e.hardpoints[_0x3ac184];
        const _0xdd9899 = _0x2d6ec1[_0x3ac184];
        if (!_0xdd9899) {
          _0x429cb1.visible = false;
          continue;
        }
        const _0x3c436b = I[_0xdd9899] || I.RAPID;
        _0x429cb1.geometry = ee[_0x3c436b.geometry];
        _0x429cb1.material = pe[_0x3c436b.role];
        _0x429cb1.position.x = (_0x3ac184 - (_0x2d6ec1.length - 1) * 0.5) * 0.26;
        _0x429cb1.position.y = 0.552;
        _0x429cb1.visible = true;
      }
      _0x1f747e.root.userData.accessibleName = (_0x19a4fd.gun?.shortLabel || _0x3ae247.name) + " reliquary pickup";
      _0x1f747e.root.userData.gunTier = _0xeb919b;
      _0x1f747e.root.userData.presentation = _0x512784.role;
      _0x1f747e.root.userData.traitHardpoints = _0x2d6ec1;
      _0x1f747e.tier = _0xeb919b;
      _0x1f747e.traits = _0x2d6ec1;
      _0x1f747e.profile = _0x512784;
      _0x1f747e.slot = _0x3ae247;
      _0x1f747e.production = true;
      _0x1f747e.mesh = _0x1f747e.root;
      _0x1f747e.root.visible = true;
    })(_0x37046f, _0x1649df, _0x15b2c8);
  } else {
    (function (_0x532b62, _0x313ab2) {
      _0x532b62.root.visible = false;
      _0x532b62.fallbackMesh.material = xe.get(se(_0x313ab2)) || ve;
      _0x532b62.fallbackMesh.visible = true;
      _0x532b62.fallbackMesh.userData.accessibleName = (_0x313ab2.letter || "R") + " fallback capsule pickup";
      _0x532b62.production = false;
      _0x532b62.mesh = _0x532b62.fallbackMesh;
      _0x532b62.slot = null;
      _0x532b62.tier = 0;
      _0x532b62.traits = Object.freeze([]);
      _0x532b62.profile = H[_0x313ab2.kind === "mod" ? "mod" : "letter"];
    })(_0x37046f, _0x1649df);
  }
}
function De(_0x36b914) {
  const _0x600a35 = Be.get(_0x36b914);
  if (_0x600a35) {
    Be.delete(_0x36b914);
    _0x3a4645(_0x36b914);
    _0x600a35.root.visible = false;
    _0x600a35.fallbackMesh.visible = false;
    if (Re[_0x600a35.rowIndex] === _0x36b914) {
      Re[_0x600a35.rowIndex] = null;
      _0x600a35.owner = null;
      Se.push(_0x600a35.rowIndex);
    }
  }
}
function Pe(_0x22feaa) {
  const _0x17bbd0 = Be.get(_0x22feaa);
  if (!_0x17bbd0) {
    return;
  }
  if (!_0x21e058(_0x22feaa.x)) {
    _0x17bbd0.mesh.visible = false;
    _0x3a4645(_0x22feaa);
    return;
  }
  _0x17bbd0.mesh.visible = _0x22feaa.mode !== "pop" || _0x22feaa.dieAt - _0x1f07a5 > _0x378873.blinkLastMs || _0x412e65();
  const _0x4b9e25 = _0x386cf7(_0x17bbd0.mesh, _0x22feaa.x, _0x22feaa.y, _0x17bbd0.production ? 1.2 : 0);
  if (_0x17bbd0.production) {
    _0x17bbd0.mesh.rotation.y = _0x4b9e25;
    _0x17bbd0.scanner.position.x = Math.sin(_0x22feaa.t * 2.65 + 0.35) * _0x17bbd0.slot.world[0] * 0.22;
    _0x17bbd0.signalMat.opacity = _0x17bbd0.signalBaseAlpha * (0.92 + Math.max(0, Math.sin(_0x22feaa.t * 4.1 + 0.8)) * 0.08);
    _0x17bbd0.scannerMat.opacity = _0x17bbd0.scannerBaseAlpha * (0.72 + Math.max(0, Math.sin(_0x22feaa.t * 4.8 + 0.4)) * 0.28);
  } else {
    _0x17bbd0.mesh.rotation.y = _0x4b9e25 + (_0x5e9304 ? Math.sin(_0x22feaa.t * _0x197a48) * _0x4b989a : _0x22feaa.t * 2.2);
  }
  _0x18ed64(_0x22feaa, _0x22feaa.x, _0x22feaa.y, _0x17bbd0.production ? be : _0x378873.size / 2);
}
export function capsuleArtSnapshot() {
  const _0x591b92 = {};
  for (const [_0x2a8a7a, _0xc8f35a] of $) {
    _0x591b92[_0x2a8a7a] = {
      state: _0xc8f35a.state,
      file: k,
      sourceFile: _0xc8f35a.sourceFile,
      error: _0xc8f35a.error,
      sourcePx: _0xc8f35a.source,
      inkPx: _0xc8f35a.ink,
      atlasCropPx: _0xc8f35a.crop,
      worldTiles: _0xc8f35a.world
    };
  }
  let _0x52aa90 = 0;
  let _0xadc583 = 0;
  let _0x38127d = 0;
  let _0x434d0e = 0;
  let _0x5a9453 = 0;
  const _0x380ada = [0, 0, 0, 0];
  for (const _0x440e61 of Be.values()) {
    if (_0x440e61.production) {
      _0x52aa90++;
      _0x380ada[_0x440e61.tier || 0]++;
      if (_0x440e61.profile.role === "weapon") {
        _0x38127d++;
      } else {
        _0x434d0e++;
      }
      _0x5a9453 += _0x440e61.traits.length;
    } else {
      _0xadc583++;
    }
  }
  return {
    atlas: {
      file: k,
      sizePx: v,
      enabled: S
    },
    presentation: {
      style: "grounded-meridian-reliquary",
      envelopeTiles: [C, T],
      pickupDiameterTiles: _0x378873.pickupRadius * 2,
      radialReachTiles: he,
      contactShadowFootprintTiles: be,
      rigidScale: true,
      profiles: H
    },
    assets: _0x591b92,
    live: {
      production: _0x52aa90,
      fallback: _0xadc583,
      weapons: _0x38127d,
      modifiers: _0x434d0e,
      hardpoints: _0x5a9453,
      tiers: _0x380ada
    },
    pool: {
      capacity: 24,
      live: Be.size,
      free: Se.length,
      saturations: Te,
      rowsBuiltAtBoot: Ae.length,
      objectsPerRow: 12,
      allocationsDuringSpawnAndSync: {
        geometry: 0,
        material: 0,
        mesh: 0
      },
      productionDraws: {
        modifier: 5,
        weaponTier1: 8,
        weaponTier3: 10,
        previousModifier: 21,
        previousWeaponTier1: 25,
        previousWeaponTier3: 31
      }
    }
  };
}
if (typeof window != "undefined") {
  window.__HB_CAPSULE_ART = capsuleArtSnapshot;
}
let Le = false;
export function initCapsuleView() {
  return !Le && (_0x5a9f2a({
    capsules: {
      spawned: Fe,
      removed: De,
      sync: Pe
    }
  }), Le = true, true);
}