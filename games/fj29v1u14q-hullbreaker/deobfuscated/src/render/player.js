import * as _0x2b75f0 from "three";
import { CONFIG as _0x481230 } from "../config.js";
import { QUERY as _0x4e682f } from "../mode.js";
import { BEND_S as _0x4c5bea, facetAtBends as _0x329207 } from "../pure/path.js";
import { portraitActorVisualGain as _0x511d52 } from "../pure/traversal.js";
import { installView as _0x3371b1 } from "../sim/bridge.js";
import { gameMs as _0x11019b, blink as _0x10fc31 } from "../sim/time.js";
import { player as _0x3fd506 } from "../sim/player.js";
import { turningCornerOwnsJoint as _0x5e07b1 } from "../sim/wavegate.js";
import { currentGun as _0x20c71f, currentWeapon as _0x2e7cb9 } from "../sim/weapons.js";
import { scoreCharge as _0x333973, scoreNotchNow as _0x54a72e } from "../sim/score.js";
import { mods as _0x408d83 } from "../sim/mods.js";
import { HELMET as _0x1b32f7, LEG_BACK as _0x7d307a, LEG_FRONT as _0x35cd24, RIG_GUN_MUZZLE_X as _0xea5123, RIG_RECOIL_MS as _0x5a44f9, RIG_RECOIL_TILES as _0x2fccaa, RIG_AIM_ATLAS_H as _0x44e73c, RIG_AIM_ATLAS_PATH as _0x3f7321, RIG_AIM_ATLAS_W as _0x5ea4a3, RIG_AIM_FRAMES as _0x35bf97, RIG_AIM_WORLD_PER_PIXEL as _0x58e6ef, RIG_AIR_FRAMES as _0x203d04, RIG_BODY_ATLAS_H as _0x32f65a, RIG_BODY_ATLAS_PATH as _0x54687c, RIG_BODY_ATLAS_W as _0x257033, RIG_BODY_VISUAL_H as _0x5a11d4, RIG_BODY_WORLD_PER_PIXEL as _0x568c16, RIG_IDLE_GUNLESS as _0x1830e1, RIG_CLIMB_ATLAS_H as _0x1e821b, RIG_CLIMB_ATLAS_PATH as _0x254c5b, RIG_CLIMB_ATLAS_W as _0x2df9dd, RIG_CLIMB_CYCLE_TILES as _0x3f44f2, RIG_CLIMB_FRAMES as _0x593e5b, RIG_CLIMB_WORLD_PER_PIXEL as _0x583ff7, RIG_RUN_CYCLE_MS as _0x5af9a4, RIG_RUN_FRAMES as _0x3b1a30, RIG_SPRITE_H as _0x4e88f2, RIG_SPRITE_PATH as _0x3c605c, RIG_WEAPON_ART as _0x567837, RIG_WEAPON_ATLAS_H as _0x43ceca, RIG_WEAPON_ATLAS_PATH as _0x451574, RIG_WEAPON_ATLAS_W as _0x2e200b, SPRITE_H as _0x22c0b3, SPRITE_W as _0x314869, TORSO as _0x18919c, VISOR as _0x27c2c1 } from "../pure/rig.js";
import { awaitPreloads as _0x720dfe, preloadTexture as _0x397235 } from "./preload.js";
import { camera as _0x33a0e1, renderer as _0x53375d, scene as _0x211efb } from "./scene.js";
import { cameraFacingFacet as _0x4d9878 } from "./camera.js";
import { placeOnTower as _0x37929d } from "./tower.js";
import { PAL as _0x20106b } from "./palette.js";
import { syncContactShadow as _0x31cfa2 } from "./contact.js";
import { applySpriteUnderside as _0x4badb2 } from "./sprite-grounding.js";
import { gildedRigActive as _0x1fdabd, gildedAuraVisible as _0x734d9, gildedShimmer as _0x51777a, mountGildedAura as _0xd8dedd, syncGildedAura as _0x3bcd61 } from "./gilded-aura.js";
import { normalizedOverdriveCharge as _0x2e7497, overdriveBreath as _0x416abc, rageStaccato as _0x519ea1 } from "./power-feedback.js";
import { mountPowerAura as _0x5099bc, powerAuraSnapshot as _0x4b6355, syncPowerAura as _0x2aded5 } from "./power-aura.js";
const xe = new _0x2b75f0.Group();
const ve = new _0x2b75f0.Group();
function we(_0x856f9d) {
  const _0x13100b = [];
  const _0x5da90e = [];
  const _0x401780 = [];
  const _0x393139 = new _0x2b75f0.Color();
  for (let _0x2aeac8 = 0; _0x2aeac8 < _0x856f9d.length; _0x2aeac8++) {
    const _0x2c06c7 = _0x856f9d[_0x2aeac8];
    const _0x2329ba = _0x13100b.length / 3;
    _0x393139.set(_0x2c06c7.color);
    const _0x345729 = _0x2aeac8 * 0.002;
    for (const [_0x3e1942, _0x77a929] of _0x2c06c7.points) {
      _0x13100b.push(_0x3e1942, _0x77a929, _0x345729);
      _0x5da90e.push(_0x393139.r, _0x393139.g, _0x393139.b);
    }
    for (let _0x55e7b9 = 1; _0x55e7b9 < _0x2c06c7.points.length - 1; _0x55e7b9++) {
      _0x401780.push(_0x2329ba, _0x2329ba + _0x55e7b9, _0x2329ba + _0x55e7b9 + 1);
    }
  }
  const _0x151bf0 = new _0x2b75f0.BufferGeometry();
  _0x151bf0.setAttribute("position", new _0x2b75f0.Float32BufferAttribute(_0x13100b, 3));
  _0x151bf0.setAttribute("color", new _0x2b75f0.Float32BufferAttribute(_0x5da90e, 3));
  _0x151bf0.setIndex(_0x401780);
  _0x151bf0.computeVertexNormals();
  _0x151bf0.computeBoundingSphere();
  return _0x151bf0;
}
function je(_0x30b7c6, _0x2ff78e = 14) {
  const _0x4f1e4b = [];
  for (let _0x2804e2 = 0; _0x2804e2 < _0x2ff78e; _0x2804e2++) {
    const _0x28239b = _0x2804e2 / _0x2ff78e * Math.PI * 2;
    _0x4f1e4b.push([_0x30b7c6.x + Math.cos(_0x28239b) * _0x30b7c6.rx, _0x30b7c6.y + Math.sin(_0x28239b) * _0x30b7c6.ry]);
  }
  return _0x4f1e4b;
}
function Me(_0x2e26ca) {
  return _0x2e26ca.map(([_0x11ca1d, _0x3b7f07]) => [(_0x11ca1d - 0.5) * _0x314869, (0.5 - _0x3b7f07) * _0x22c0b3]);
}
xe.add(ve);
const Oe = we([{
  color: _0x20106b.playerDark,
  points: Me(_0x7d307a)
}, {
  color: _0x20106b.playerMid,
  points: Me(_0x35cd24)
}, {
  color: _0x20106b.playerDark,
  points: Me(_0x18919c)
}, {
  color: _0x20106b.playerMid,
  points: Me(je(_0x1b32f7))
}, {
  color: _0x20106b.gun,
  points: Me(je(_0x27c2c1, 10))
}]);
function Re(_0x5e1b7d, _0x36e994, _0x559c4d, _0x5a43f7) {
  const _0x153b41 = _0x5e1b7d.getAttribute("uv");
  const _0x1b468b = (_0x36e994.atlasX + _0x36e994.trimX) / _0x559c4d;
  const _0x4ca7c8 = (_0x5a43f7 - _0x36e994.atlasY - _0x36e994.trimY - _0x36e994.trimH) / _0x5a43f7;
  const _0x7fd7ac = _0x36e994.trimW / _0x559c4d;
  const _0x228747 = _0x36e994.trimH / _0x5a43f7;
  for (let _0x49b3bd = 0; _0x49b3bd < _0x153b41.count; _0x49b3bd++) {
    _0x153b41.setXY(_0x49b3bd, _0x1b468b + _0x153b41.getX(_0x49b3bd) * _0x7fd7ac, _0x4ca7c8 + _0x153b41.getY(_0x49b3bd) * _0x228747);
  }
  _0x153b41.needsUpdate = true;
  return _0x5e1b7d;
}
const ze = new _0x2b75f0.Mesh(Oe, new _0x2b75f0.MeshStandardMaterial({
  color: 16777215,
  vertexColors: true,
  emissive: _0x20106b.player,
  emissiveIntensity: 0,
  roughness: 0.64,
  metalness: 0.32,
  depthWrite: false,
  side: _0x2b75f0.DoubleSide,
  flatShading: true,
  fog: false
}));
function Se(_0xa47788) {
  const _0x28fb93 = _0xa47788.trimW * _0x568c16;
  const _0x568f94 = _0xa47788.trimH * _0x568c16;
  const _0x26050a = new _0x2b75f0.PlaneGeometry(_0x28fb93, _0x568f94);
  _0x26050a.translate((_0xa47788.trimW / 2 - _0xa47788.anchorX) * _0x568c16, (_0x568f94 - _0x4e88f2) / 2, 0);
  return _0x4badb2(Re(_0x26050a, _0xa47788, _0x257033, _0x32f65a), 0.84);
}
ze.position.set(0, _0x22c0b3 / 2, 0);
ve.add(ze);
const Ge = Se(_0x1830e1);
const Ee = Object.freeze(Object.fromEntries(Object.entries(_0x3b1a30).map(([_0x53773d, _0x532ce2]) => [_0x53773d, Se(_0x532ce2)])));
const Ae = Object.freeze(Object.fromEntries(Object.entries(_0x203d04).map(([_0x2d18ab, _0xd5ea84]) => [_0x2d18ab, Se(_0xd5ea84)])));
function Fe(_0x477aa0) {
  const _0x284777 = _0x477aa0.trimW * _0x58e6ef;
  const _0x27adfd = _0x477aa0.trimH * _0x58e6ef;
  const _0x5d7cc5 = new _0x2b75f0.PlaneGeometry(_0x284777, _0x27adfd);
  _0x5d7cc5.translate((_0x477aa0.trimW / 2 - _0x477aa0.anchorX) * _0x58e6ef, (_0x27adfd - _0x4e88f2) / 2, 0);
  return _0x4badb2(Re(_0x5d7cc5, _0x477aa0, _0x5ea4a3, _0x44e73c), 0.84);
}
const Ie = Object.freeze(Object.fromEntries(Object.entries(_0x35bf97).map(([_0x39deef, _0x48f03b]) => [_0x39deef, Fe(_0x48f03b)])));
const We = Object.freeze(_0x593e5b.map(function (_0x2494ed) {
  const _0x181902 = _0x2494ed.trimW * _0x583ff7;
  const _0x2f0ba1 = _0x2494ed.trimH * _0x583ff7;
  const _0x2bc486 = new _0x2b75f0.PlaneGeometry(_0x181902, _0x2f0ba1);
  _0x2bc486.translate((_0x2494ed.trimW / 2 - _0x2494ed.anchorX) * _0x583ff7, (_0x2f0ba1 - _0x4e88f2) / 2, 0);
  return _0x4badb2(Re(_0x2bc486, _0x2494ed, _0x2df9dd, _0x1e821b), 0.88);
}));
const De = new _0x2b75f0.Mesh(Ge, new _0x2b75f0.MeshStandardMaterial({
  emissive: _0x20106b.player,
  emissiveIntensity: 0,
  vertexColors: true,
  transparent: true,
  alphaTest: 0.015,
  side: _0x2b75f0.FrontSide,
  forceSinglePass: true,
  fog: false
}));
De.position.set(0, _0x4e88f2 / 2, 0);
De.visible = false;
ve.add(De);
const He = _0x4e682f.get("rig") === "canvas";
const Le = _0x3c605c;
let ke = false;
let Pe = false;
let Ce = false;
let Ve = false;
let _e = false;
let Ue = null;
let Be = "canvas";
const Ne = {
  ready: false,
  tex: null,
  error: null,
  spec: _0x1830e1
};
const Ye = Object.fromEntries(Object.entries(_0x3b1a30).map(([_0x25b133, _0x370a7b]) => [_0x25b133, {
  ready: false,
  tex: null,
  error: null,
  spec: _0x370a7b
}]));
const Xe = Object.fromEntries(Object.entries(_0x203d04).map(([_0x9a2fb, _0x55998c]) => [_0x9a2fb, {
  ready: false,
  tex: null,
  error: null,
  spec: _0x55998c
}]));
const Te = Object.fromEntries(Object.entries(_0x35bf97).map(([_0x34c0fd, _0x4d24b1]) => [_0x34c0fd, {
  ready: false,
  tex: null,
  error: null,
  spec: _0x4d24b1
}]));
const $e = _0x593e5b.map(_0x51f40d => ({
  ready: false,
  tex: null,
  error: null,
  spec: _0x51f40d
}));
const Ke = Object.fromEntries(Object.entries(_0x567837).map(([_0x573544, _0x51717c]) => [_0x573544, {
  ready: false,
  tex: null,
  error: null,
  spec: _0x51717c
}]));
if (!He) {
  _0x397235(new URL(_0x54687c, import.meta.url).href).then(_0x4c7747 => {
    if (_0x4c7747.state === "ready") {
      Ne.tex = _0x4c7747.tex;
      Ne.ready = true;
      for (const _0xaaf415 of Object.values(Ye)) {
        _0xaaf415.tex = _0x4c7747.tex;
        _0xaaf415.ready = true;
      }
      for (const _0x56ec8c of Object.values(Xe)) {
        _0x56ec8c.tex = _0x4c7747.tex;
        _0x56ec8c.ready = true;
      }
      ke = true;
      Pe = Ve;
    } else {
      Ne.error = _0x4c7747.error || _0x4c7747.state;
      for (const _0x55a730 of Object.values(Ye)) {
        _0x55a730.error = Ne.error;
      }
      for (const _0x557fee of Object.values(Xe)) {
        _0x557fee.error = Ne.error;
      }
      console.warn("RIG body atlas did not load (" + Ne.error + "); showing the procedural fallback instead.");
    }
  });
  _0x397235(new URL(_0x3f7321, import.meta.url).href).then(_0x17ecb7 => {
    if (_0x17ecb7.state === "ready") {
      for (const _0x589a74 of Object.values(Te)) {
        _0x589a74.tex = _0x17ecb7.tex;
        _0x589a74.ready = true;
      }
      Ve = true;
      Pe = ke;
    } else {
      for (const _0x15e799 of Object.values(Te)) {
        _0x15e799.error = _0x17ecb7.error || _0x17ecb7.state;
      }
      console.warn("RIG aim atlas did not load (" + (_0x17ecb7.error || _0x17ecb7.state) + "); using the production idle body beneath the live gun.");
    }
  });
  _0x397235(new URL(_0x451574, import.meta.url).href).then(_0x261239 => {
    if (_0x261239.state === "ready") {
      for (const _0x494610 of Object.values(Ke)) {
        _0x494610.tex = _0x261239.tex;
        _0x494610.ready = true;
      }
    } else {
      for (const _0x5180c5 of Object.values(Ke)) {
        _0x5180c5.error = _0x261239.error || _0x261239.state;
      }
    }
  });
  _0x397235(new URL(_0x254c5b, import.meta.url).href).then(_0x898700 => {
    if (_0x898700.state === "ready") {
      for (const _0x242419 of $e) {
        _0x242419.tex = _0x898700.tex;
        _0x242419.ready = true;
      }
      _e = true;
    } else {
      Ue = _0x898700.error || _0x898700.state;
      for (const _0x10bf50 of $e) {
        _0x10bf50.error = Ue;
      }
      console.warn("RIG climb atlas did not load (" + Ue + "); using production locomotion poses on ladders.");
    }
  });
}
await _0x720dfe();
const qe = new _0x2b75f0.Group();
function Je(_0x2631f0) {
  const _0x303542 = _0x2631f0.worldW * _0x2631f0.trimH / _0x2631f0.trimW;
  const _0xfd615 = new _0x2b75f0.PlaneGeometry(_0x2631f0.worldW, _0x303542);
  const _0xac6ad = (_0x2631f0.muzzleY / _0x2631f0.trimH - 0.5) * _0x303542;
  _0xfd615.translate(_0xea5123 - _0x2631f0.worldW / 2, _0xac6ad, 0);
  return Re(_0xfd615, _0x2631f0, _0x2e200b, _0x43ceca);
}
const Qe = Object.freeze(Object.fromEntries(Object.entries(_0x567837).map(([_0x5dacaa, _0xd20e6b]) => [_0x5dacaa, Je(_0xd20e6b)])));
const Ze = we;
const et = _0x20106b.capsuleInk;
const tt = _0x20106b.playerDark;
const rt = _0x20106b.playerMid;
const ot = _0x20106b.gun;
const it = _0x20106b.muzzle;
const st = _0xea5123;
const at = {
  R: Ze([{
    color: et,
    points: [[-0.05, -0.07], [0.16, -0.13], [0.25, -0.04], [0.13, 0.09], [-0.05, 0.06]]
  }, {
    color: tt,
    points: [[0.12, -0.11], [0.48, -0.11], [0.55, -0.03], [0.48, 0.11], [0.15, 0.12]]
  }, {
    color: ot,
    points: [[0.17, -0.08], [0.44, -0.08], [0.49, -0.02], [0.43, 0.07], [0.2, 0.08]]
  }, {
    color: et,
    points: [[0.45, -0.032], [st, -0.032], [st, 0.032], [0.45, 0.032]]
  }, {
    color: ot,
    points: [[st - 0.08, -0.085], [st, -0.085], [st, 0.085], [st - 0.08, 0.085]]
  }, {
    color: it,
    points: [[0.25, 0.12], [0.55, 0.12], [0.5, 0.16], [0.29, 0.16]]
  }, {
    color: et,
    points: [[0.21, -0.11], [0.35, -0.11], [0.3, -0.27], [0.19, -0.23]]
  }]),
  S: Ze([{
    color: et,
    points: [[-0.05, -0.08], [0.16, -0.15], [0.27, -0.07], [0.16, 0.1], [-0.05, 0.07]]
  }, {
    color: rt,
    points: [[0.12, -0.15], [0.48, -0.15], [0.57, -0.08], [0.54, 0.12], [0.18, 0.15]]
  }, {
    color: _0x20106b.shots.S,
    points: [[0.2, -0.1], [0.46, -0.1], [0.51, -0.03], [0.45, 0.08], [0.21, 0.1]]
  }, {
    color: et,
    points: [[0.45, -0.13], [st, -0.13], [st, -0.045], [0.45, -0.045]]
  }, {
    color: et,
    points: [[0.45, 0.045], [st, 0.045], [st, 0.13], [0.45, 0.13]]
  }, {
    color: it,
    points: [[st - 0.06, -0.16], [st, -0.16], [st, 0.16], [st - 0.06, 0.16]]
  }, {
    color: tt,
    points: [[0.2, -0.15], [0.35, -0.15], [0.29, -0.29], [0.17, -0.25]]
  }]),
  L: Ze([{
    color: et,
    points: [[-0.04, -0.06], [0.18, -0.12], [0.28, -0.04], [0.17, 0.1], [-0.04, 0.06]]
  }, {
    color: tt,
    points: [[0.14, -0.12], [0.39, -0.12], [0.47, -0.04], [0.39, 0.12], [0.15, 0.12]]
  }, {
    color: _0x20106b.shots.L,
    points: [[0.34, -0.055], [st - 0.03, -0.025], [st, 0], [st - 0.03, 0.025], [0.34, 0.055]]
  }, {
    color: it,
    points: [[0.26, -0.025], [st - 0.05, -0.012], [st, 0], [st - 0.05, 0.012], [0.26, 0.025]]
  }, {
    color: _0x20106b.shots.L,
    points: [[0.38, 0.07], [0.61, 0.16], [0.57, 0.06]]
  }, {
    color: _0x20106b.shots.L,
    points: [[0.38, -0.07], [0.57, -0.06], [0.61, -0.16]]
  }, {
    color: et,
    points: [[0.19, -0.12], [0.31, -0.12], [0.27, -0.26], [0.17, -0.22]]
  }]),
  H: Ze([{
    color: et,
    points: [[-0.04, -0.06], [0.13, -0.13], [0.25, -0.07], [0.17, 0.1], [-0.04, 0.07]]
  }, {
    color: tt,
    points: [[0.12, 0], [0.26, -0.17], [0.55, -0.12], [0.7, 0], [0.55, 0.12], [0.26, 0.17]]
  }, {
    color: _0x20106b.shots.H,
    points: [[0.22, 0], [0.34, -0.1], [0.56, -0.07], [0.65, 0], [0.56, 0.07], [0.34, 0.1]]
  }, {
    color: it,
    points: [[0.3, -0.025], [st - 0.03, -0.018], [st, 0], [st - 0.03, 0.018], [0.3, 0.025]]
  }, {
    color: _0x20106b.shots.H,
    points: [[0.34, 0.12], [0.49, 0.27], [0.54, 0.1]]
  }, {
    color: _0x20106b.shots.H,
    points: [[0.34, -0.12], [0.54, -0.1], [0.49, -0.27]]
  }, {
    color: et,
    points: [[0.18, -0.11], [0.31, -0.11], [0.27, -0.24], [0.16, -0.21]]
  }]),
  F: Ze([{
    color: et,
    points: [[-0.04, -0.07], [0.15, -0.14], [0.27, -0.06], [0.16, 0.1], [-0.04, 0.07]]
  }, {
    color: tt,
    points: [[0.12, -0.13], [0.46, -0.13], [0.55, -0.06], [0.5, 0.12], [0.17, 0.14]]
  }, {
    color: _0x20106b.shots.F,
    points: [[0.18, -0.11], [0.42, -0.11], [0.48, -0.03], [0.41, 0.09], [0.2, 0.1]]
  }, {
    color: rt,
    points: [[0.45, -0.09], [0.66, -0.18], [st, -0.16], [st, 0.16], [0.66, 0.18], [0.45, 0.09]]
  }, {
    color: _0x20106b.shots.F,
    points: [[0.53, -0.055], [st, -0.09], [st, 0.09], [0.53, 0.055]]
  }, {
    color: et,
    points: [[0.16, -0.14], [0.36, -0.14], [0.39, -0.29], [0.19, -0.31], [0.1, -0.23]]
  }, {
    color: it,
    points: [[st - 0.045, -0.12], [st, -0.12], [st, 0.12], [st - 0.045, 0.12]]
  }])
};
const nt = at.R;
const lt = Object.freeze({
  R: 1.34,
  S: 1.62,
  L: 1.46,
  H: 1.58,
  F: 1.66
});
const ct = Object.freeze({
  R: Ze([{
    color: _0x20106b.muzzle,
    points: [[0.29, 0.11], [0.52, 0.12], [0.47, 0.2], [0.33, 0.19]]
  }, {
    color: _0x20106b.gun,
    points: [[st - 0.1, -0.17], [st, -0.17], [st, 0.17], [st - 0.1, 0.17]]
  }]),
  S: Ze([{
    color: _0x20106b.shots.S,
    points: [[0.39, 0.05], [st, 0.09], [st, 0.23], [0.46, 0.18]]
  }, {
    color: _0x20106b.muzzle,
    points: [[0.39, -0.05], [0.46, -0.18], [st, -0.23], [st, -0.09]]
  }]),
  L: Ze([{
    color: _0x20106b.shots.L,
    points: [[0.22, 0], [0.55, 0.18], [st, 0.02], [st, -0.02], [0.55, -0.18]]
  }, {
    color: _0x20106b.muzzle,
    points: [[0.34, -0.025], [st, -0.012], [st, 0.012], [0.34, 0.025]]
  }]),
  H: Ze([{
    color: _0x20106b.shots.H,
    points: [[0.25, 0.1], [0.45, 0.34], [0.56, 0.13], [st, 0.03], [st, -0.03], [0.56, -0.13], [0.45, -0.34], [0.25, -0.1]]
  }, {
    color: _0x20106b.muzzle,
    points: [[0.48, -0.04], [0.67, -0.06], [0.75, 0], [0.67, 0.06], [0.48, 0.04]]
  }]),
  F: Ze([{
    color: _0x20106b.shots.F,
    points: [[0.13, -0.1], [0.38, -0.13], [0.48, -0.24], [0.39, -0.35], [0.18, -0.32], [0.1, -0.21]]
  }, {
    color: _0x20106b.gun,
    points: [[0.45, 0.07], [0.65, 0.16], [st, 0.22], [st, 0.1], [0.64, 0.07]]
  }, {
    color: _0x20106b.muzzle,
    points: [[0.45, -0.07], [0.64, -0.07], [st, -0.1], [st, -0.22], [0.65, -0.16]]
  }])
});
const mt = Object.freeze({
  rapid: Ze([{
    color: _0x20106b.muzzle,
    points: [[0.1, 0.11], [0.23, 0.34], [0.32, 0.12]]
  }, {
    color: _0x20106b.gun,
    points: [[0.34, 0.1], [0.47, 0.31], [0.56, 0.09]]
  }]),
  heavy: Ze([{
    color: _0x20106b.playerDark,
    points: [[0.02, -0.1], [0.54, -0.13], [0.46, -0.38], [0.1, -0.41]]
  }, {
    color: _0x20106b.modCapsule,
    points: [[0.15, -0.2], [0.41, -0.21], [0.36, -0.34], [0.18, -0.33]]
  }]),
  forked: Ze([{
    color: _0x20106b.capsule,
    points: [[0.45, 0.04], [st, 0.12], [st, 0.29], [0.55, 0.19]]
  }, {
    color: _0x20106b.muzzle,
    points: [[0.45, -0.04], [0.55, -0.19], [st, -0.29], [st, -0.12]]
  }]),
  seeker: Ze([{
    color: _0x20106b.playerDark,
    points: [[0.19, 0.09], [0.43, 0.1], [0.51, 0.23], [0.29, 0.36]]
  }, {
    color: _0x20106b.shots.H,
    points: [[0.29, 0.17], [0.41, 0.18], [0.45, 0.24], [0.33, 0.3]]
  }]),
  phase: Ze([{
    color: _0x20106b.shots.L,
    points: [[0.17, 0.1], [0.7, 0.07], [st, 0.13], [0.24, 0.25]]
  }, {
    color: _0x20106b.muzzle,
    points: [[0.17, -0.1], [0.24, -0.25], [st, -0.13], [0.7, -0.07]]
  }]),
  volatile: Ze([{
    color: _0x20106b.playerDark,
    points: [[0.1, -0.09], [0.53, -0.11], [0.6, -0.24], [0.46, -0.4], [0.15, -0.35]]
  }, {
    color: _0x20106b.shots.F,
    points: [[0.18, -0.17], [0.44, -0.18], [0.51, -0.26], [0.4, -0.34], [0.2, -0.3]]
  }])
});
qe.position.set(0, 1.05, 0.25);
const pt = new _0x2b75f0.Group();
const dt = new _0x2b75f0.Mesh(Ke.R.ready ? Qe.R : at.R, new _0x2b75f0.MeshStandardMaterial({
  color: it,
  vertexColors: !Ke.R.ready,
  map: Ke.R.ready ? Ke.R.tex : null,
  emissiveMap: Ke.R.ready ? Ke.R.tex : null,
  emissive: _0x20106b.gun,
  emissiveIntensity: 0,
  roughness: 0.38,
  metalness: 0.42,
  transparent: true,
  alphaTest: 0.018,
  forceSinglePass: true,
  side: _0x2b75f0.DoubleSide,
  flatShading: true,
  fog: false
}));
dt.position.set(0, 0, 0);
dt.renderOrder = 4;
pt.add(dt);
const ut = new _0x2b75f0.MeshStandardMaterial({
  color: 16777215,
  vertexColors: true,
  emissive: _0x20106b.glowOff,
  emissiveIntensity: 0,
  roughness: 0.36,
  metalness: 0.4,
  transparent: false,
  side: _0x2b75f0.DoubleSide,
  flatShading: true,
  fog: false
});
const ft = new _0x2b75f0.Mesh(ct.R, ut);
ft.name = "rig-gun-family-accent";
ft.position.z = 0.016;
ft.renderOrder = 5;
pt.add(ft);
const ht = Object.freeze(Object.fromEntries(Object.entries(mt).map(([_0x5e8177, _0x2b183b]) => {
  const _0x908791 = new _0x2b75f0.Mesh(_0x2b183b, ut);
  _0x908791.name = "rig-gun-trait-" + _0x5e8177;
  _0x908791.visible = false;
  _0x908791.position.z = 0.024;
  _0x908791.renderOrder = 6;
  pt.add(_0x908791);
  return [_0x5e8177, _0x908791];
})));
qe.add(pt);
xe.add(qe);
_0x211efb.add(xe);
_0xd8dedd(xe, _0x4e88f2);
_0x5099bc(xe, _0x4e88f2);
const yt = Symbol("rig-contact-shadow");
const gt = Object.freeze({
  key: "rig",
  radius: _0x481230.player.width / 2,
  depthRatio: 0.56,
  strength: 0.82
});
let bt = 0;
let xt = -1000000000;
let vt = 0;
let wt = _0x3fd506.x;
let jt = 1;
let Mt = _0x3fd506.y;
let Ot = 0;
let Rt = 0;
let zt = 0;
let St = 0;
let Gt = false;
let Et = _0x3fd506.grounded;
let At = -1000000000;
let Ft = "idle";
let It = null;
let Wt = "";
let Dt = 0;
let Ht = 0;
let Lt = false;
let kt = 0;
let Pt = lt.R;
let Ct = false;
let Vt = 0;
let _t = "";
let Ut = 0;
let Bt = 1;
let Nt = 0;
let Yt = _0xea5123;
let Xt = _0x481230.player.muzzleY;
let Tt = 1;
let $t = 0;
const Kt = new _0x2b75f0.Color(16777215);
const qt = new _0x2b75f0.Color(16777215);
const Jt = new _0x2b75f0.Color();
const Qt = [["rapid", _0x20106b.muzzle], ["heavy", _0x20106b.modCapsule], ["forked", _0x20106b.capsule], ["seeker", _0x20106b.shots.H], ["phase", _0x20106b.shots.L], ["volatile", _0x20106b.shots.F]];
function Zt(_0x2efee0 = _0x3fd506.aim.x, _0x11e368 = _0x3fd506.aim.y) {
  Math.abs(_0x2efee0);
  if (_0x11e368 > 0.82) {
    return "aim-up";
  } else if (_0x11e368 > 0.18) {
    return "aim-up-right";
  } else if (_0x11e368 < -0.18) {
    return "aim-down-right";
  } else {
    return "aim-right";
  }
}
function er(_0x282f94 = _0x3fd506.aim.x, _0x56eb36 = _0x3fd506.aim.y) {
  const _0xcd6b57 = Math.atan2(_0x56eb36, _0x282f94);
  return ["right", "up-right", "up", "up-left", "left", "down-left", "down", "down-right"][(Math.round(_0xcd6b57 / (Math.PI / 4)) + 8) % 8];
}
function tr() {
  if (_0x5e07b1(_0x3fd506.x) || _0x329207(_0x3fd506.x, _0x4c5bea) === _0x4d9878()) {
    return 1;
  } else {
    return 0;
  }
}
function rr() {
  _0x37929d(xe, _0x3fd506.x, _0x3fd506.y, 1.15);
  const _0x308280 = tr();
  const _0x47d2d9 = _0x3fd506.crouched ? _0x481230.crouch.height / _0x481230.player.height : 1;
  const _0x5c2b9f = _0x511d52(innerWidth / innerHeight);
  jt = _0x5c2b9f;
  xe.scale.set(1, 1, 1);
  xe.rotation.z = 0;
  let _0x423b54 = vt ? _0x11019b - vt : 0;
  let _0x69c292 = Math.abs(_0x3fd506.x - wt);
  let _0x18d3bb = Math.abs(_0x3fd506.y - Mt);
  const _0x219d66 = _0x3fd506.traversalState === "ladder";
  const _0x5c3bf8 = _0x3fd506.traversalState === "wall";
  const _0x4e8e47 = _0x423b54 > 0 ? _0x481230.player.runSpeed * 2.4 * _0x423b54 / 1000 + 0.05 : 0;
  if (_0x423b54 < 0 || _0x423b54 > 120 || _0x69c292 > _0x4e8e47 || _0x18d3bb > (_0x423b54 > 0 ? _0x423b54 * 28.799999999999997 / 1000 + 0.05 : 0)) {
    _0x423b54 = 0;
    _0x69c292 = 0;
    _0x18d3bb = 0;
    Rt = 0;
    zt = 0;
  }
  vt = _0x11019b;
  wt = _0x3fd506.x;
  Mt = _0x3fd506.y;
  Ot = _0x423b54 > 0 ? _0x69c292 / (_0x423b54 / 1000) : 0;
  const _0x2acdab = _0x3fd506.grounded && (_0x423b54 > 0 ? Ot > 0.7 : Math.abs(_0x3fd506.vx) > 1);
  const _0x15929a = _0x481230.player.runSpeed * _0x5af9a4 / 1000;
  Rt = _0x2acdab ? (Rt + _0x69c292 / _0x15929a) % 1 : 0;
  if (_0x219d66) {
    if (!Gt) {
      zt = 0;
    }
    zt = (zt + _0x18d3bb / _0x3f44f2) % 1;
    St = Math.min(3, Math.floor(zt * 4));
  } else {
    zt = 0;
    St = 0;
  }
  Gt = _0x219d66;
  if (_0x3fd506.grounded && !Et) {
    At = _0x11019b;
  }
  Et = _0x3fd506.grounded;
  const _0x50ee87 = _0x11019b - At;
  const _0x57df81 = _0x50ee87 >= 0 && _0x50ee87 < 120 ? 1 - _0x50ee87 / 120 : 0;
  ve.scale.set(_0x5c2b9f, _0x47d2d9 * _0x5c2b9f, 1);
  ve.position.set(0, 0, 0);
  ve.rotation.z = 0;
  ze.position.y = _0x22c0b3 / 2;
  De.position.y = _0x4e88f2 / 2;
  if (_0x3fd506.nextFireAt > bt) {
    bt = _0x3fd506.nextFireAt;
    xt = _0x11019b;
  } else if (_0x3fd506.nextFireAt < bt) {
    bt = _0x3fd506.nextFireAt;
    xt = -1000000000;
  }
  let _0xcd6d42 = Zt();
  if (_0x219d66) {
    _0xcd6d42 = "climb-" + St;
    Ft = "climb";
  } else if (_0x5c3bf8) {
    _0xcd6d42 = "climb-" + (_0x3fd506.traversalSide < 0 ? 2 : 0);
    Ft = "wall";
  } else if (_0x3fd506.grounded) {
    if (_0x57df81 > 0) {
      _0xcd6d42 = "contact";
      Ft = "land-brace";
    } else if (_0x2acdab) {
      _0xcd6d42 = Rt < 0.14 || Rt >= 0.86 ? "contact" : Rt < 0.36 || Rt >= 0.64 ? "pass" : "flight";
      Ft = "run";
    } else {
      Ft = "aim-idle";
    }
  } else {
    _0xcd6d42 = _0x3fd506.vy >= 0 ? "air-rise" : "air-fall";
    Ft = _0x3fd506.vy >= 0 ? "air-rise" : "air-fall";
  }
  const _0xa25611 = _0xcd6d42.startsWith("climb-") ? _0xcd6d42.slice(6) : "";
  const _0x1f1501 = _0xa25611 !== "" ? $e[Number(_0xa25611)] : null;
  const _0x247b33 = St % 2 == 0 ? "flight" : "pass";
  const _0x256664 = _0xcd6d42.startsWith("air-") ? _0xcd6d42.slice(4) : "";
  const _0x213bc8 = _0x256664 ? Xe[_0x256664] : null;
  const _0x137d89 = _0xcd6d42.startsWith("aim-") ? _0xcd6d42.slice(4) : "";
  const _0x6b5a51 = _0x137d89 ? Te[_0x137d89] : null;
  const _0x24945f = _0x1f1501 && !_0x1f1501.ready ? Ye[_0x247b33]?.ready ? _0x247b33 : "canvas" : _0x256664 && !_0x213bc8?.ready ? Ye.flight?.ready ? "flight" : "canvas" : _0x137d89 && !_0x6b5a51?.ready ? Ne.ready ? "idle" : "canvas" : _0xcd6d42;
  const _0x1ab00f = _0x24945f === "canvas";
  const _0x445128 = _0x24945f.startsWith("climb-") ? _0x24945f.slice(6) : "";
  const _0x222625 = _0x24945f.startsWith("aim-") ? _0x24945f.slice(4) : "";
  const _0x5f60ff = _0x24945f.startsWith("air-") ? _0x24945f.slice(4) : "";
  const _0x153e42 = _0x445128 !== "" ? $e[Number(_0x445128)] : _0x1f1501 && !_0x1f1501.ready ? Ye[_0x247b33]?.ready ? Ye[_0x247b33] : {
    ready: true,
    tex: null
  } : _0x5f60ff ? Xe[_0x5f60ff] : _0x137d89 ? _0x6b5a51?.ready ? _0x6b5a51 : Ne.ready ? Ne : {
    ready: true,
    tex: null
  } : Ye[_0x24945f];
  const _0x1e4e4c = _0x1ab00f || !!_0x153e42?.ready;
  if (_0x24945f !== Be && _0x1e4e4c && (Be = _0x24945f, !_0x1ab00f)) {
    De.geometry = _0x445128 !== "" ? We[Number(_0x445128)] : _0x222625 ? Ie[_0x222625] : _0x5f60ff ? Ae[_0x5f60ff] : _0x24945f === "idle" ? Ge : Ee[_0x24945f];
    const _0x5e1043 = !!De.material.map != !!_0x153e42.tex;
    De.material.map = _0x153e42.tex;
    De.material.emissiveMap = _0x153e42.tex;
    if (_0x5e1043) {
      De.material.needsUpdate = true;
    }
  }
  Ce = Be === "contact" || Be === "pass" || Be === "flight" || Be.startsWith("air-") || Be.startsWith("climb-");
  De.visible = _0x1e4e4c && !_0x1ab00f && _0x308280 > 0.01;
  ze.visible = _0x1ab00f || !_0x1e4e4c;
  ze.material.opacity = _0x308280;
  De.material.opacity = _0x308280;
  const _0x6cc70e = (_0x5c3bf8 && _0x3fd506.traversalSide ? _0x3fd506.traversalSide : _0x3fd506.facing) < 0 ? -1 : 1;
  Tt = _0x6cc70e;
  ze.scale.x = _0x6cc70e;
  De.scale.x = _0x6cc70e;
  (function () {
    const _0x158fe4 = _0x20c71f;
    if (_0x158fe4 === It && _0x2e7cb9 === Wt) {
      return;
    }
    It = _0x158fe4;
    Wt = _0x2e7cb9;
    const _0x427115 = Ke[_0x2e7cb9];
    Ct = !!_0x427115?.ready;
    const _0x3b62a4 = Ct ? _0x427115.tex : null;
    const _0x18cee9 = !Ct;
    const _0x47bdab = !!dt.material.map != !!_0x3b62a4 || dt.material.vertexColors !== _0x18cee9;
    dt.geometry = Ct ? Qe[_0x2e7cb9] : at[_0x2e7cb9] || nt;
    ft.geometry = ct[_0x2e7cb9] || ct.R;
    dt.material.map = _0x3b62a4;
    dt.material.emissiveMap = _0x3b62a4;
    dt.material.vertexColors = _0x18cee9;
    if (_0x47bdab) {
      dt.material.needsUpdate = true;
    }
    Pt = lt[_0x2e7cb9] || lt.R;
    let _0xe667b5 = 0;
    let _0x3c5398 = 0;
    let _0x23284d = 0;
    let _0x54badb = 0;
    const _0x55fd03 = _0x158fe4?.visual || {};
    Vt = 0;
    _t = "";
    for (const [_0x2e525a, _0x4a1195] of Qt) {
      const _0x5742db = Math.max(0, Number(_0x55fd03[_0x2e525a]) || 0);
      const _0x2f9634 = ht[_0x2e525a];
      _0x2f9634.visible = _0x5742db > 0;
      if (!_0x5742db) {
        _0x2f9634.scale.set(1, 1, 1);
        continue;
      }
      Vt++;
      _t += (_t ? "," : "") + (_0x2e525a + ":" + _0x5742db);
      const _0x264ce7 = 1 + Math.min(0.24, (_0x5742db - 1) * 0.12);
      _0x2f9634.scale.set(_0x264ce7, _0x264ce7, 1);
      Jt.set(_0x4a1195);
      _0x3c5398 += Jt.r * _0x5742db;
      _0x23284d += Jt.g * _0x5742db;
      _0x54badb += Jt.b * _0x5742db;
      _0xe667b5 += _0x5742db;
    }
    Kt.setRGB(1, 1, 1);
    if (_0xe667b5 > 0) {
      Jt.setRGB(_0x3c5398 / _0xe667b5, _0x23284d / _0xe667b5, _0x54badb / _0xe667b5);
      Kt.lerp(Jt, Math.min(0.22, 0.08 + (_0x158fe4?.tier || 1) * 0.045));
    }
  })();
  const _0x231022 = _0x3fd506.aim.x;
  const _0x153179 = _0x3fd506.aim.y;
  Bt = _0x231022;
  Nt = _0x153179;
  Ut = Math.atan2(_0x153179, _0x231022);
  Yt = _0x231022 * _0xea5123;
  Xt = _0x3fd506.muzzleY + _0x153179 * _0xea5123;
  qe.visible = _0x308280 > 0.14;
  qe.position.set(0, _0x3fd506.muzzleY, 0.25);
  qe.rotation.z = Ut;
  const _0x3259cf = _0x231022 < -0.1 || Math.abs(_0x231022) <= 0.1 && _0x3fd506.facing < 0 ? -1 : 1;
  pt.scale.set(_0x5c2b9f, _0x3259cf * Pt * _0x5c2b9f, 1);
  const _0x3a582d = _0x11019b - xt;
  const _0x56f2c5 = _0x3a582d >= 0 && _0x3a582d < _0x5a44f9 ? 1 - _0x3a582d / _0x5a44f9 : 0;
  $t = _0x2fccaa * _0x56f2c5 * _0x56f2c5;
  pt.position.x = _0xea5123 * (1 - _0x5c2b9f) - $t;
  const _0x4ace3f = _0x54a72e();
  const _0x33ccdc = _0x2e7497(_0x333973(), _0x481230.score.max);
  const _0x3f512f = _0x4ace3f >= 2 ? _0x416abc(_0x11019b) : 0;
  const _0x1852cb = _0x11019b < _0x408d83.rageUntil;
  const _0x226aa4 = _0x1852cb ? _0x519ea1(_0x11019b) : 0;
  Dt = _0x33ccdc;
  Ht = _0x4ace3f;
  Lt = _0x1852cb;
  kt = _0x226aa4;
  const _0x5a780 = _0x1fdabd();
  const _0x35ad73 = _0x5a780 ? _0x51777a(_0x11019b) : 0;
  const _0x35089d = _0x5a780 ? _0x20106b.gildedGold : _0x1852cb ? _0x20106b.ragePower : _0x4ace3f >= 1 ? _0x20106b.muzzle : _0x20106b.player;
  let _0x10591d = _0x4ace3f >= 2 ? 0.28 + _0x3f512f * 0.18 : _0x4ace3f === 1 ? 0.1 + _0x33ccdc * 0.07 : Math.max(0, _0x33ccdc - 0.2) * 0.05;
  if (_0x1852cb && !_0x5a780) {
    _0x10591d = Math.max(_0x10591d, 0.14 + _0x226aa4 * 0.28);
  }
  if (_0x5a780) {
    _0x10591d = Math.max(_0x10591d, 0.24 + _0x35ad73 * 0.16);
  }
  ze.material.emissive.setHex(_0x35089d);
  ze.material.emissiveIntensity = _0x10591d;
  De.material.emissive.setHex(_0x35089d);
  De.material.emissiveIntensity = _0x10591d;
  qt.copy(Kt);
  if (_0x4ace3f >= 2) {
    qt.lerp(Jt.setHex(_0x20106b.muzzle), 0.72);
  } else if (_0x4ace3f === 1) {
    qt.lerp(Jt.setHex(_0x20106b.gun), 0.42);
  }
  if (_0x1852cb) {
    qt.lerp(Jt.setHex(_0x20106b.ragePower), 0.42 + _0x226aa4 * 0.22);
  }
  if (_0x5a780) {
    qt.lerp(Jt.setHex(_0x20106b.gildedGold), 0.55);
  }
  if (Ct) {
    dt.material.color.setHex(16777215).lerp(qt, 0.08 + Math.min(0.12, (_0x20c71f?.tier || 0) * 0.035));
  } else {
    dt.material.color.copy(qt);
  }
  dt.material.emissive.copy(qt);
  dt.material.emissiveIntensity = _0x4ace3f >= 2 ? 0.5 + _0x3f512f * 0.32 + _0x56f2c5 * 0.24 : _0x56f2c5 * 0.46 + (_0x4ace3f === 1 ? 0.2 + _0x33ccdc * 0.06 : 0);
  if (_0x1852cb) {
    dt.material.emissiveIntensity = Math.max(dt.material.emissiveIntensity, 0.3 + _0x226aa4 * 0.5 + _0x56f2c5 * 0.18);
  }
  if (_0x5a780) {
    dt.material.emissiveIntensity = Math.max(dt.material.emissiveIntensity, 0.3 + _0x35ad73 * 0.18);
  }
  _0x2aded5(_0x11019b, _0x308280, _0x33ccdc, _0x4ace3f, _0x5a780);
  _0x3bcd61(_0x11019b, _0x308280);
  xe.visible = _0x308280 > 0.01 && (_0x11019b >= _0x3fd506.iframesUntil || _0x10fc31());
  xe.userData.foldVisibility = _0x308280;
  _0x31cfa2(yt, _0x3fd506.x, _0x3fd506.y, gt, _0x219d66 || _0x5c3bf8 ? 0 : _0x308280);
}
const or = new _0x2b75f0.Vector3();
export function rigVisualSnapshot() {
  const _0x42d5ea = Bt;
  const _0x28ec45 = Nt;
  const _0x80f3a9 = _0xea5123 - $t;
  xe.getWorldPosition(or);
  or.project(_0x33a0e1);
  const _0x519524 = _0x53375d.domElement.getBoundingClientRect();
  const _0xe7a3c3 = _0x1fdabd();
  const _0xd42b96 = Ht >= 1;
  const _0x4c493b = [];
  if (_0xd42b96) {
    _0x4c493b.push("OVERDRIVE_WARM");
  }
  if (Lt) {
    _0x4c493b.push("RAGE_RED_MAGENTA");
  }
  if (_0xe7a3c3) {
    _0x4c493b.push("GILDED_GOLD");
  }
  const _0x18378b = _0xe7a3c3 ? "GILDED_GOLD" : Lt ? "RAGE_RED_MAGENTA" : _0xd42b96 ? "OVERDRIVE_WARM" : "NONE";
  return {
    spriteReady: ke,
    aimReady: Ve,
    actionReady: Pe,
    actionShowing: Ce,
    bodyFrame: Be,
    gilded: _0x1fdabd(),
    gildedAuraVisible: _0x734d9(),
    rigVisible: xe.visible && tr() > 0.01,
    spriteVisible: De.visible && De.material.opacity > 0.01,
    climbReady: _e,
    climbError: Ue,
    climbFrame: St,
    climbFallback: _0x3fd506.traversalState === "ladder" && !_e,
    idleGunlessReady: Ne.ready,
    idleUsesLegacy: false,
    canvasFallback: Be === "canvas",
    retiredBakedBodySource: Le,
    runPhase: +Rt.toFixed(3),
    travelSpeed: +Ot.toFixed(3),
    locomotionState: Ft,
    airbornePoseContinuous: _0x3fd506.grounded || Be === "flight" || Be.startsWith("air-") || Be.startsWith("climb-"),
    landingBraceActive: Ft === "land-brace" && Be === "contact",
    weapon: _0x2e7cb9,
    gunId: _0x20c71f?.id || "",
    gunUsesArt: Ct,
    artReady: Object.fromEntries(Object.entries(Ke).map(([_0x30e06b, _0x16b497]) => [_0x30e06b, _0x16b497.ready])),
    aim: {
      x: Bt,
      y: Nt,
      angle: Ut
    },
    aimSector: er(Bt, Nt),
    poseFacing: Tt,
    aimArmPose: Be,
    aimArmAligned: !!Te[Zt(Bt, Nt).slice(4)]?.ready && Be === Zt(Bt, Nt),
    aimFixedUv: Be.startsWith("aim-") && !De.material.alphaMap,
    aimLimbMasked: false,
    recoil: $t,
    idleEmission: {
      body: +De.material.emissiveIntensity.toFixed(4),
      gun: +dt.material.emissiveIntensity.toFixed(4)
    },
    powerPresentation: {
      charge: +Dt.toFixed(3),
      notch: Ht,
      overdrive: ["COLD", "WARM", "BREAKING"][Ht] || "COLD",
      rage: Lt,
      ragePulse: +kt.toFixed(3),
      gilded: _0xe7a3c3,
      aura: _0x4b6355(),
      activeLayers: _0x4c493b,
      dominantPalette: _0x18378b,
      layerPrecedence: ["GILDED_GOLD", "RAGE_RED_MAGENTA", "OVERDRIVE_WARM"]
    },
    gunPresentation: {
      portraitGain: +jt.toFixed(3),
      familyHeightGain: Pt,
      visibleTraitCount: Vt,
      traits: _t,
      fixedUv: !dt.material.map || dt.material.map.offset.x === 0 && dt.material.map.offset.y === 0 && dt.material.map.repeat.x === 1 && dt.material.map.repeat.y === 1
    },
    screen: {
      x: +(_0x519524.left + (or.x + 1) * _0x519524.width / 2).toFixed(2),
      y: +(_0x519524.top + (1 - or.y) * _0x519524.height / 2).toFixed(2)
    },
    muzzle: {
      drawnX: qe.position.x + _0x42d5ea * _0x80f3a9,
      drawnY: qe.position.y + _0x28ec45 * _0x80f3a9,
      simX: Yt,
      simY: Xt
    },
    socket: {
      x: qe.position.x,
      y: qe.position.y,
      barrelTiles: _0xea5123,
      followsAim: true
    },
    bakedGunMasked: false,
    rectangleGunFallback: false,
    jumpExhaust: false,
    fixedMeshes: 10,
    maxVisibleDraws: 6
  };
}
if (typeof window != "undefined") {
  window.__HB_RIG_VISUAL = rigVisualSnapshot;
}
let ir = false;
export function initPlayerView() {
  return !ir && (_0x3371b1({
    player: {
      sync: rr
    }
  }), ir = true, true);
}