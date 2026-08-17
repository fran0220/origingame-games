import * as _0x3597fd from "three";
import { CONFIG as _0x12857a } from "../config.js";
import { enemyEcologyCondensationStarted as _0x27829b } from "../pure/enemy-ecology.js";
import { mortarArcX as _0x5cfd93, mortarArcY as _0x5cc64d } from "../pure/mortar.js";
import { installView as _0x1ab3fb } from "../sim/bridge.js";
import { gameMs as _0x1b5862 } from "../sim/time.js";
import { PAL as _0x1a2931 } from "./palette.js";
import { applySurface as _0x39b5c4 } from "./materials.js";
import { genomePartSnapshot as _0x156936, paintedGenomePart as _0x22fefe, paintedGenomePartMaterial as _0x12a38e } from "./genome-parts.js";
import { postGain as _0x140e57 } from "./post.js";
import { camera as _0x5cdd8f, renderer as _0x5144a1, scene as _0x48d2c7 } from "./scene.js";
import { primitiveBox as _0x14393b, SPRITE_MOTION_ART as _0x572583, spriteActionQuad as _0x20a60f, spriteFlapQuad as _0x3915d6, spriteMotionFrame as _0x488f35, spriteQuad as _0x3cda8b } from "./sprite-table.js";
import { spriteActionTexture as _0x205284, spriteFlapTexture as _0x47a3eb, spriteTexture as _0x2015d3, spriteVariantOf as _0x211828 } from "./sprites.js";
import { placeOnTower as _0x296115 } from "./tower.js";
import { releaseContactShadow as _0x2feabf, syncContactShadow as _0x58c4c6 } from "./contact.js";
import { routeRenderable as _0x257417 } from "./route-visibility.js";
import { applySpriteUnderside as _0xe8f65 } from "./sprite-grounding.js";
import { mortarBurstCoreGeometry as _0x15e6f9, mortarBurstShellGeometry as _0x389f36, mortarMarkGeometry as _0x400b65, mortarPodCoreGeometry as _0x31e6b9, mortarPodShellGeometry as _0x2e6871 } from "./mortar-vfx.js";
import { actorMotionBundle as _0x21a16e, actorMotionRuntimeSnapshot as _0x434da1, actorMotionSocket as _0x1f649d } from "./actor-motion.js";
import { waspModularBundle as _0x5a8627, waspModularRuntimeSnapshot as _0x2127d6 } from "./wasp-modular.js";
import { selectWaspWingPhase as _0x20918a, WASP_BODY as _0x59bec0 } from "./wasp-modular-select.js";
import { enemyEcologyAttackSocketWorld as _0x249a4e, enemyEcologyBundle as _0x3b6dac, enemyEcologyRuntimeSnapshot as _0x6e077, enemyEcologyWarmGeometries as _0x27eda8, syncEnemyEcologyVisual as _0x508bfc } from "./enemy-ecology.js";
import { attachEnemyEcologyTactics as _0x347fb7, detachEnemyEcologyTactics as _0x299aeb, enemyEcologyTacticRuntimeSnapshot as _0x4eca52, enemyEcologyTacticVisualSnapshot as _0x3005a9, enemyOwnsSweepfanBeam as _0x3bbfa1, hideEnemyEcologyTactics as _0x72ce6, isSweepfanBeam as _0x7b684d, syncEnemyEcologyTactics as _0x159287 } from "./enemy-ecology-tactics.js";
import { CUE_GAIN as _0x525750, LAMP_COIL_SWELL as _0x26bb7d, LAMP_R as _0x4c0323, LEGIBILITY_ON as _0xd4bd87, POSE_GAIN as _0x2a2dd8, POLYP_ONSET_MS as _0x10eaba, POLYP_SWELL_EASE as _0x27dd11, WASP_DIVE_NARROW as _0x270aeb, waspDiveStretch as _0x94eb89 } from "./legibility.js";
import { HOSTILE_PRESENTERS as _0x2578de } from "./hostile-presenters/index.js";
import { PHYSICAL_DEPTH_LAYER as _0xfc43bd, physicalDepthOffset as _0x1aa322 } from "./depth-layers.js";
const ue = new Map();
for (const Oa of Object.keys(_0x572583)) {
  const Ta = _0x47a3eb(Oa);
  if (Ta) {
    ue.set(Oa, Ta);
  }
}
const fe = (_0x5578b0, _0x18ef6d, _0x591a3e, _0x528e97) => Object.freeze({
  key: _0x5578b0,
  radius: _0x18ef6d,
  depthRatio: Math.min(1, _0x591a3e / _0x18ef6d),
  strength: _0x528e97
});
const ge = Object.freeze({
  wasp: fe("wasp", _0x12857a.wasp.visualRadius, _0x12857a.wasp.visualRadius * 0.42, 0.42),
  carrier: fe("carrier", Math.max(_0x12857a.carrier.size[0], _0x12857a.carrier.size[2]) / 2, _0x12857a.carrier.size[2] / 2, 0.64),
  hound: fe("hound", Math.max(_0x12857a.hound.size[0], _0x12857a.hound.size[2]) / 2, _0x12857a.hound.size[2] / 2, 0.82),
  polyp: fe("polyp", _0x12857a.polyp.size, _0x12857a.polyp.size * 0.62, 0.78),
  mortar: fe("mortar", _0x12857a.mortar.size, _0x12857a.mortar.size * 0.66, 0.82),
  warden: fe("warden", _0x12857a.warden.size[0] / 2, _0x12857a.warden.size[2] / 2, 0.86)
});
const Me = new _0x3597fd.OctahedronGeometry(_0x12857a.wasp.visualRadius);
const ye = new _0x3597fd.BoxGeometry(..._0x12857a.carrier.size);
const we = new _0x3597fd.BoxGeometry(..._0x12857a.hound.size);
const be = new _0x3597fd.DodecahedronGeometry(_0x12857a.polyp.size);
const xe = new _0x3597fd.BoxGeometry(..._0x12857a.polyp.barrelSize);
const ve = new _0x3597fd.BoxGeometry(0.35, _0x12857a.polyp.rootY, 0.35);
function ke(_0x43bf24, _0xa21119) {
  const _0x2c0be3 = _0xa21119 ? [[-0.5, -0.24, 0.16, 0.12], [-0.2, 0.03, 0.12, 0.16], [0.07, 0.28, 0.15, 0.1], [0.32, 0.5, 0.11, 0]] : [[-0.5, -0.34, 0.48, 0.88], [-0.3, -0.11, 0.72, 0.42], [-0.07, 0.11, 0.44, 0.7], [0.15, 0.31, 0.6, 0.34], [0.35, 0.5, 0.42, 0]];
  const _0xc01d43 = [];
  for (let _0x472d7c = 0; _0x472d7c < _0x2c0be3.length; _0x472d7c++) {
    const [_0x1db093, _0x568ae5, _0x47ac91, _0x472158] = _0x2c0be3[_0x472d7c];
    const _0x18cece = _0xa21119 ? 0 : (_0x472d7c & 1 ? -0.08 : 0.07) * _0x43bf24;
    const _0x4633c2 = Math.max(_0x47ac91, _0x472158) * _0x43bf24;
    if (_0xa21119) {
      _0xc01d43.push(_0x1db093, _0x18cece + _0x4633c2, 0, _0x1db093, _0x18cece - _0x4633c2, 0, _0x568ae5, _0x18cece, 0);
    } else {
      const _0x14d25a = _0x1db093 + (_0x568ae5 - _0x1db093) * 0.58;
      _0xc01d43.push(_0x1db093, _0x18cece, 0, _0x14d25a, _0x18cece + _0x4633c2, 0, _0x568ae5, _0x18cece, 0, _0x1db093, _0x18cece, 0, _0x14d25a, _0x18cece - _0x4633c2 * 0.72, 0, _0x568ae5, _0x18cece, 0);
    }
  }
  const _0x53a2ec = new _0x3597fd.BufferGeometry();
  _0x53a2ec.setAttribute("position", new _0x3597fd.Float32BufferAttribute(_0xc01d43, 3));
  _0x53a2ec.computeVertexNormals();
  _0x53a2ec.computeBoundingSphere();
  _0x53a2ec.userData.actionLanguage = _0xa21119 ? "polyp-conductor-core" : "polyp-broken-sheath";
  _0x53a2ec.userData.normalizedReach = Object.freeze([-0.5, 0.5]);
  _0x53a2ec.userData.maxHalfHeight = _0x43bf24;
  return _0x53a2ec;
}
const ze = ke(_0x12857a.polyp.beamHalf, false);
const Se = ke(0.13, true);
const Be = new _0x3597fd.ConeGeometry(_0x12857a.mortar.size, _0x12857a.mortar.size * 2.2, 3);
const Ce = new _0x3597fd.BoxGeometry(..._0x12857a.warden.size);
const Re = Object.freeze({
  wasp: 1.55,
  carrier: 1.3,
  hound: 1.35,
  polyp: 1.3,
  mortar: 1.25,
  warden: 1.45
});
const Ae = Object.freeze({
  wasp: 2.3,
  hound: 2.45,
  polyp: 1.8,
  mortar: 1.75
});
const Le = Object.freeze({
  wasp: 1,
  hound: 1.65,
  polyp: 1.18,
  mortar: 1.18
});
export const HOSTILE_SURFACE_DEPTH = 1.15;
function De(_0x48e42b, _0x120741) {
  if (_0x48e42b === "wasp" || _0x48e42b === "carrier" || _0x120741 === 1) {
    return 0;
  }
  const _0x4e12da = _0x14393b(_0x48e42b);
  if (!_0x4e12da) {
    return 0;
  }
  return (_0x4e12da.cy - _0x4e12da.h / 2) * (1 - _0x120741);
}
const Pe = function () {
  const _0x4767f0 = document.createElement("canvas");
  _0x4767f0.width = 64;
  _0x4767f0.height = 64;
  const _0x46b3ea = _0x4767f0.getContext("2d");
  const _0x31ac53 = _0x46b3ea.createRadialGradient(32, 32, 3, 32, 32, 32);
  _0x31ac53.addColorStop(0, "white");
  _0x31ac53.addColorStop(0.34, "white");
  _0x31ac53.addColorStop(1, "transparent");
  _0x46b3ea.fillStyle = _0x31ac53;
  _0x46b3ea.fillRect(0, 0, 64, 64);
  return new _0x3597fd.CanvasTexture(_0x4767f0);
}();
const Ge = function () {
  const _0xad28fb = document.createElement("canvas");
  _0xad28fb.width = 128;
  _0xad28fb.height = 32;
  const _0xd63e56 = _0xad28fb.getContext("2d");
  const _0x11d621 = _0xd63e56.createLinearGradient(0, 0, 128, 0);
  _0x11d621.addColorStop(0, "transparent");
  _0x11d621.addColorStop(0.5, "transparent");
  _0x11d621.addColorStop(0.82, "white");
  _0x11d621.addColorStop(1, "transparent");
  _0xd63e56.fillStyle = _0x11d621;
  _0xd63e56.beginPath();
  _0xd63e56.moveTo(0, 16);
  _0xd63e56.lineTo(116, 4);
  _0xd63e56.lineTo(128, 16);
  _0xd63e56.lineTo(116, 28);
  _0xd63e56.closePath();
  _0xd63e56.fill();
  return new _0x3597fd.CanvasTexture(_0xad28fb);
}();
const Oe = function () {
  const _0xfca150 = document.createElement("canvas");
  _0xfca150.width = 256;
  _0xfca150.height = 48;
  const _0x2a75e0 = _0xfca150.getContext("2d");
  _0x2a75e0.strokeStyle = "white";
  _0x2a75e0.lineWidth = 7;
  _0x2a75e0.lineJoin = "miter";
  for (let _0x41d264 = 32; _0x41d264 < 244; _0x41d264 += 52) {
    _0x2a75e0.beginPath();
    _0x2a75e0.moveTo(_0x41d264 - 15, 8);
    _0x2a75e0.lineTo(_0x41d264 + 7, 24);
    _0x2a75e0.lineTo(_0x41d264 - 15, 40);
    _0x2a75e0.stroke();
  }
  return new _0x3597fd.CanvasTexture(_0xfca150);
}();
const Te = new _0x3597fd.PlaneGeometry(1, 1);
const Ie = new _0x3597fd.PlaneGeometry(1, 1);
const We = new _0x3597fd.PlaneGeometry(1, 1);
const Ue = new _0x3597fd.BufferGeometry();
Ue.setAttribute("position", new _0x3597fd.Float32BufferAttribute([-0.5, -0.45, 0, -0.42, -0.45, 0, -0.42, 0.45, 0, -0.5, -0.45, 0, -0.42, 0.45, 0, -0.5, 0.45, 0, 0.42, -0.45, 0, 0.5, -0.45, 0, 0.5, 0.45, 0, 0.42, -0.45, 0, 0.5, 0.45, 0, 0.42, 0.45, 0, -0.42, 0.45, 0, -0.15, 0.45, 0, -0.15, 0.32, 0, -0.42, 0.45, 0, -0.15, 0.32, 0, -0.42, 0.32, 0, -0.15, 0.48, 0, 0.02, 0.36, 0, -0.15, 0.24, 0, 0.15, 0.45, 0, 0.42, 0.45, 0, 0.42, 0.32, 0, 0.15, 0.45, 0, 0.42, 0.32, 0, 0.15, 0.32, 0, 0.15, 0.48, 0, 0.15, 0.24, 0, -0.02, 0.36, 0, -0.42, -0.45, 0, -0.15, -0.32, 0, -0.15, -0.45, 0, -0.42, -0.45, 0, -0.42, -0.32, 0, -0.15, -0.32, 0, -0.15, -0.48, 0, -0.15, -0.24, 0, 0.02, -0.36, 0, 0.15, -0.45, 0, 0.42, -0.32, 0, 0.42, -0.45, 0, 0.15, -0.45, 0, 0.15, -0.32, 0, 0.42, -0.32, 0, 0.15, -0.48, 0, -0.02, -0.36, 0, 0.15, -0.24, 0], 3));
Ue.computeVertexNormals();
const Fe = new _0x3597fd.RingGeometry(0.72, 0.88, 12);
const Ee = new _0x3597fd.RingGeometry(0.25, 0.34, 12);
const He = new _0x3597fd.RingGeometry(0.46, 0.55, 14, 1, 0, Math.PI);
const Ne = new _0x3597fd.OctahedronGeometry(0.085, 0);
const je = new _0x3597fd.BoxGeometry(0.16, 0.5, 0.1);
const Ke = new _0x3597fd.BoxGeometry(0.42, 0.075, 0.1);
const Ve = new _0x3597fd.TorusGeometry(0.16, 0.035, 6, 16);
const Ye = Math.PI * 0.36;
const Xe = new _0x3597fd.RingGeometry(0.82, 1, 10, 1, -Ye / 2, Ye);
const $e = Object.freeze({
  BULWARK: {
    ax: 0.44,
    ay: 0,
    size: 0.68,
    rot: 0,
    layer: 0.038,
    authored: 1
  },
  VAULT: {
    ax: -0.38,
    ay: -0.3,
    size: 0.72,
    rot: -0.05,
    layer: -0.034,
    authored: 1
  },
  TWINSTRIKE: {
    ax: -0.34,
    ay: 0.36,
    size: 0.62,
    rot: 0.02,
    layer: -0.04,
    authored: -1
  },
  SALVO: {
    ax: -0.22,
    ay: 0.24,
    size: 0.72,
    rot: -0.04,
    layer: -0.034,
    authored: -1
  },
  RELAY: {
    ax: 0.38,
    ay: 0.06,
    size: 0.68,
    rot: 0,
    layer: 0.028,
    authored: 1
  },
  PINCER: {
    ax: 0.38,
    ay: 0.2,
    size: 0.62,
    rot: -0.04,
    layer: -0.026,
    authored: -1
  },
  AEGIS: {
    ax: 0.22,
    ay: 0.3,
    size: 0.7,
    rot: 0,
    layer: 0.042,
    authored: 1
  },
  BACKLASH: {
    ax: 0.16,
    ay: -0.46,
    size: 0.66,
    rot: 0,
    layer: -0.044,
    authored: 1
  }
});
function _e(_0x1ea250, _0x5c3401 = null) {
  return new _0x3597fd.MeshBasicMaterial({
    color: _0x1ea250,
    map: _0x5c3401,
    transparent: true,
    opacity: 0,
    fog: false,
    blending: _0x3597fd.AdditiveBlending,
    depthWrite: false,
    side: _0x3597fd.DoubleSide,
    forceSinglePass: true
  });
}
function qe(_0x2d6413, _0x5671a5, _0x53e1c6, _0x310772 = 0.22) {
  _0x2d6413.color.setHex(_0x5671a5).multiplyScalar(_0x310772);
  _0x2d6413.emissive.setHex(_0x5671a5);
  _0x2d6413.emissiveIntensity = _0x53e1c6;
}
const Ze = {
  depth: 0,
  sx: 1,
  sy: 1,
  sz: 1,
  glow: _0x1a2931.glowOff
};
function Je(_0x370dea) {
  return 1 - Math.max(0, Math.min(1, (_0x370dea.stateUntil - _0x1b5862) / _0x12857a.hound.tellMs));
}
const Qe = {
  depth: 0,
  sx: 1,
  sy: 1,
  sz: 1,
  glow: _0x1a2931.glowOff
};
function et(_0x9a950c, _0x49aa8e) {
  return 1 - Math.max(0, Math.min(1, (_0x9a950c.stateUntil - _0x1b5862) / _0x49aa8e));
}
const tt = {
  depth: 0,
  sx: 1,
  sy: 1,
  sz: 1,
  glow: _0x1a2931.glowOff
};
const at = {
  depth: 0,
  sx: 1,
  sy: 1,
  sz: 1,
  glow: _0x1a2931.glowOff
};
function ot(_0x15ed6d) {
  return _0xd4bd87 && _0x15ed6d.state === "dive";
}
function st(_0x59e9ed) {
  return ot(_0x59e9ed) && _0x1b5862 >= _0x59e9ed.lockUntil;
}
const nt = {
  wasp: {
    geo: Me,
    color: _0x1a2931.wasp,
    surface: "carapace",
    roll: function (_0x409431) {
      if (ot(_0x409431)) {
        return Math.atan2(_0x409431.vy, _0x409431.vx);
      } else {
        return _0x409431.t * 2;
      }
    },
    pose: function (_0x16edad) {
      const _0x2af3e9 = at;
      _0x2af3e9.depth = 0;
      _0x2af3e9.sx = 1;
      _0x2af3e9.sy = 1;
      _0x2af3e9.sz = 1;
      _0x2af3e9.glow = _0x1a2931.glowOff;
      if (ot(_0x16edad)) {
        const _0x3c3641 = 1 + _0x94eb89();
        _0x2af3e9.sx = _0x3c3641;
        _0x2af3e9.sy = _0x3c3641 * (1 - _0x270aeb);
        _0x2af3e9.sz = _0x3c3641 * (1 - _0x270aeb);
        if (st(_0x16edad)) {
          _0x2af3e9.glow = _0x1a2931.waspDive;
        }
      }
      return _0x2af3e9;
    }
  },
  carrier: {
    geo: ye,
    color: _0x1a2931.carrier,
    surface: "carapace",
    roll: _0x3e703a => Math.sin(_0x3e703a.t * _0x12857a.carrier.rollFreq) * _0x12857a.carrier.rollAmp
  },
  hound: {
    geo: we,
    color: _0x1a2931.hound,
    surface: "chassis",
    roll: function (_0x489c44) {
      const _0x405b4c = _0x12857a.hound;
      if (_0x489c44.state === "tell") {
        return -_0x489c44.dir * _0x405b4c.tellRear * _0x2a2dd8 * Je(_0x489c44);
      } else if (_0x489c44.state === "charge") {
        return _0x489c44.dir * _0x405b4c.chargeLean;
      } else if (_0x489c44.state === "vault") {
        return Math.atan2(_0x489c44.vy, _0x489c44.vx) * 0.32;
      } else if (_0x489c44.state === "tumble") {
        return _0x489c44.t * 6;
      } else {
        return Math.sin(_0x489c44.t * _0x405b4c.gaitFreq) * _0x405b4c.gaitTilt;
      }
    },
    pose: function (_0x2106ef) {
      const _0x2063a1 = _0x12857a.hound;
      const _0x2e6b21 = Ze;
      _0x2e6b21.depth = 0;
      _0x2e6b21.sx = 1;
      _0x2e6b21.sy = 1;
      _0x2e6b21.sz = 1;
      _0x2e6b21.glow = _0x1a2931.glowOff;
      if (_0x2106ef.state === "tell") {
        const _0x19bbfe = Je(_0x2106ef);
        _0x2e6b21.depth = _0x2063a1.tellDepth * _0x2a2dd8 * _0x19bbfe;
        _0x2e6b21.sy = 1 + _0x2063a1.tellRise * _0x2a2dd8 * _0x19bbfe;
        _0x2e6b21.sx = 1 - _0x2063a1.tellNarrow * _0x2a2dd8 * _0x19bbfe;
        if (_0x2106ef.stateUntil - _0x1b5862 <= _0x2063a1.tellCoilMs) {
          _0x2e6b21.sy -= _0x2063a1.tellCoilSquash * _0x2a2dd8;
          _0x2e6b21.sx += _0x2063a1.tellCoilSquash * _0x2a2dd8 * 0.5;
        }
      } else if (_0x2106ef.state === "charge") {
        _0x2e6b21.sx = 1 + _0x2063a1.chargeStretch;
        _0x2e6b21.sy = 1 - _0x2063a1.chargeSquash;
        _0x2e6b21.glow = _0x1a2931.houndCharge;
      } else if (_0x2106ef.state === "vault") {
        _0x2e6b21.sx = 1.12;
        _0x2e6b21.sy = 0.88;
        _0x2e6b21.depth = 0.16;
        _0x2e6b21.glow = _0x1a2931.houndCharge;
      } else if (_0x2106ef.state === "prowl") {
        _0x2e6b21.sy = 1 + Math.sin(_0x2106ef.t * _0x2063a1.gaitFreq) * _0x2063a1.gaitAmp;
      }
      return _0x2e6b21;
    }
  },
  polyp: {
    geo: be,
    color: _0x1a2931.polyp,
    surface: "emplacement",
    roll: () => 0,
    pose: function (_0x3e79bb) {
      const _0x144ecf = _0x12857a.polyp;
      const _0x57ea6f = tt;
      _0x57ea6f.depth = 0;
      _0x57ea6f.sx = 1;
      _0x57ea6f.sy = 1;
      _0x57ea6f.sz = 1;
      _0x57ea6f.glow = _0x1a2931.glowOff;
      if (_0x3e79bb.state === "tell") {
        const _0x2d8e11 = 1 - Math.max(0, Math.min(1, (_0x3e79bb.stateUntil - _0x1b5862) / _0x144ecf.tellMs));
        const _0x33c601 = _0xd4bd87 ? _0x2d8e11 ** _0x27dd11 : _0x2d8e11;
        _0x57ea6f.sy = 1 + _0x144ecf.tellSwell * _0x2a2dd8 * _0x33c601;
        _0x57ea6f.sz = 1 + _0x144ecf.tellSwell * _0x2a2dd8 * _0x33c601;
      } else if (_0x3e79bb.state === "fire") {
        _0x57ea6f.sy = 1 + _0x144ecf.tellSwell * _0x2a2dd8;
        _0x57ea6f.sz = 1 + _0x144ecf.tellSwell * _0x2a2dd8;
        _0x57ea6f.glow = _0x1a2931.polypBeam;
      } else if (_0x3e79bb.state === "vent") {
        _0x57ea6f.sy = 1 - _0x144ecf.ventSag;
        _0x57ea6f.glow = _0x1a2931.polypVent;
      }
      return _0x57ea6f;
    }
  },
  mortar: {
    geo: Be,
    color: _0x1a2931.mortar,
    surface: "emplacement",
    roll: function (_0x32c051) {
      return _0x32c051.dir * 0.42;
    },
    pose: function (_0x3e5d70) {
      const _0x3627c9 = Ma;
      _0x3627c9.depth = 0;
      _0x3627c9.sx = 1;
      _0x3627c9.sy = 1;
      _0x3627c9.sz = 1;
      _0x3627c9.glow = _0x1a2931.glowOff;
      if (_0x3e5d70.state === "lob") {
        const _0x35b8c9 = 1 - Math.max(0, Math.min(1, _0x3e5d70.podU));
        _0x3627c9.sy = 1 - _0x35b8c9 * 0.18;
      } else if (_0x3e5d70.state === "burst") {
        _0x3627c9.sy = 1 + da.burstSwell;
        _0x3627c9.glow = _0x1a2931.mortarBlast;
      }
      return _0x3627c9;
    }
  },
  warden: {
    geo: Ce,
    color: _0x1a2931.warden,
    surface: "chassis",
    roll: function (_0x4596b8) {
      const _0x7cb502 = _0x12857a.warden;
      if (_0x4596b8.state === "sweepTell") {
        return -_0x4596b8.dir * et(_0x4596b8, _0x7cb502.sweepTellMs) * 0.012;
      } else if (_0x4596b8.state === "sweepFire") {
        return -_0x4596b8.dir * Math.sin(Math.PI * et(_0x4596b8, _0x7cb502.sweepMs)) * 0.03;
      } else if (_0x4596b8.state === "barrageTell") {
        return _0x4596b8.dir * et(_0x4596b8, _0x7cb502.barrageTellMs) * 0.01;
      } else if (_0x4596b8.state === "barrageBurst") {
        return _0x4596b8.dir * Math.sin(Math.PI * et(_0x4596b8, _0x7cb502.barrageMs)) * 0.022;
      } else {
        return 0;
      }
    },
    pose: function (_0x1d9fca) {
      const _0x55e045 = _0x12857a.warden;
      const _0x45e1b7 = Qe;
      _0x45e1b7.depth = 0;
      _0x45e1b7.sx = 1;
      _0x45e1b7.sy = 1;
      _0x45e1b7.sz = 1;
      _0x45e1b7.glow = _0x1a2931.glowOff;
      if (_0x1d9fca.state === "sweepTell") {
        const _0x20589e = et(_0x1d9fca, _0x55e045.sweepTellMs);
        _0x45e1b7.sx = 1 + _0x20589e * 0.018;
        _0x45e1b7.sy = 1 - _0x20589e * 0.016;
        _0x45e1b7.depth = -_0x20589e * 0.035;
      } else if (_0x1d9fca.state === "sweepFire") {
        const _0x4c8c51 = Math.sin(Math.PI * et(_0x1d9fca, _0x55e045.sweepMs));
        _0x45e1b7.sx = 1 + _0x4c8c51 * 0.03;
        _0x45e1b7.sy = 0.984 - _0x4c8c51 * 0.012;
        _0x45e1b7.depth = -0.045 - _0x4c8c51 * 0.065;
      } else if (_0x1d9fca.state === "barrageTell") {
        const _0x3cd4a5 = et(_0x1d9fca, _0x55e045.barrageTellMs);
        _0x45e1b7.sx = 1 - _0x3cd4a5 * 0.01;
        _0x45e1b7.sy = 1 - _0x3cd4a5 * 0.024;
        _0x45e1b7.depth = -_0x3cd4a5 * 0.025;
      } else if (_0x1d9fca.state === "barrageBurst") {
        const _0x173768 = Math.sin(Math.PI * et(_0x1d9fca, _0x55e045.barrageMs));
        _0x45e1b7.sx = 1 + _0x173768 * 0.018;
        _0x45e1b7.sy = 0.976 - _0x173768 * 0.03;
        _0x45e1b7.depth = -0.035 - _0x173768 * 0.08;
      } else if (_0x1d9fca.state === "exposed") {
        const _0x449448 = Math.min(1, Math.max(0, (_0x1b5862 - _0x1d9fca.openedAt) / 180));
        _0x45e1b7.sx = 1 + _0x449448 * 0.012;
        _0x45e1b7.sy = 1 - _0x449448 * 0.018;
        _0x45e1b7.depth = -_0x449448 * 0.025;
      }
      return _0x45e1b7;
    }
  }
};
const it = new Map();
const rt = new Map();
const lt = new Map();
const ct = new Map();
function dt(_0xee39f8) {
  let _0x5e705b = ct.get(_0xee39f8);
  if (_0x5e705b) {
    return _0x5e705b;
  }
  const _0x4ab48e = _0x572583[_0xee39f8];
  if (_0x4ab48e) {
    _0x5e705b = _0x4ab48e.frames.map((_0x4fc308, _0x24f845) => {
      const _0x3c2fef = _0x488f35(_0xee39f8, _0x24f845);
      const _0x46360f = new _0x3597fd.PlaneGeometry(_0x3c2fef.w, _0x3c2fef.h);
      _0x46360f.translate(_0x3c2fef.offX, _0x3c2fef.offY, 0);
      const _0x3939f3 = _0x46360f.attributes.uv;
      for (let _0x4c7ebd = 0; _0x4c7ebd < _0x3939f3.count; _0x4c7ebd++) {
        const _0x45d159 = _0x3939f3.getX(_0x4c7ebd);
        const _0x5bfed5 = _0x3939f3.getY(_0x4c7ebd);
        _0x3939f3.setXY(_0x4c7ebd, _0x3c2fef.uv.u0 + _0x45d159 * (_0x3c2fef.uv.u1 - _0x3c2fef.uv.u0), _0x3c2fef.uv.v0 + _0x5bfed5 * (_0x3c2fef.uv.v1 - _0x3c2fef.uv.v0));
      }
      _0x3939f3.needsUpdate = true;
      _0x46360f.userData.motionKind = _0xee39f8;
      _0x46360f.userData.motionFrame = _0x24f845;
      _0x46360f.userData.anchorWorldX = _0x3c2fef.anchorWorldX;
      _0x46360f.userData.anchorWorldY = _0x3c2fef.anchorWorldY;
      return _0xe8f65(_0x46360f, _0xee39f8 === "wasp" ? 0.84 : 0.79);
    });
    ct.set(_0xee39f8, _0x5e705b);
    return _0x5e705b;
  } else {
    return null;
  }
}
const pt = Object.freeze({
  wasp: Object.freeze({
    action: 0.85,
    flap: 0.78
  }),
  hound: Object.freeze({
    action: 1
  })
});
function mt(_0x1f7062, _0xe27633, _0x43d98a) {
  const _0x311796 = pt[_0x1f7062]?.[_0xe27633];
  const _0x5342f6 = _0x3cda8b(_0x1f7062, _0x211828(_0x1f7062));
  if (_0x311796 && _0x5342f6 && _0x43d98a?.inkH) {
    return Math.max(1, _0x5342f6.inkH * _0x311796 / _0x43d98a.inkH);
  } else {
    return 1;
  }
}
function ht(_0x56eeb2) {
  if (_0x56eeb2 === "hound") {
    const _0x581f49 = _0x14393b(_0x56eeb2);
    if (_0x581f49) {
      return _0x581f49.cy - _0x581f49.h / 2;
    } else {
      return 0;
    }
  }
  return 0;
}
function ut(_0x52faa2, _0x7e54b7, _0xb8c228, _0x327765) {
  const _0x1f0f95 = mt(_0x7e54b7, _0xb8c228, _0x327765);
  if (_0x1f0f95 === 1) {
    return _0x52faa2;
  }
  const _0x32e47d = ht(_0x7e54b7);
  _0x52faa2.translate(0, -_0x32e47d, 0);
  _0x52faa2.scale(1, _0x1f0f95, 1);
  _0x52faa2.translate(0, _0x32e47d, 0);
  _0x52faa2.userData.poseHeightGain = _0x1f0f95;
  _0x52faa2.userData.poseHeightAnchor = _0x32e47d;
  return _0x52faa2;
}
function ft(_0x40371e) {
  let _0x5d1885 = it.get(_0x40371e);
  if (_0x5d1885) {
    return _0x5d1885;
  }
  const _0xdc75b8 = _0x3cda8b(_0x40371e, _0x211828(_0x40371e));
  if (_0xdc75b8) {
    _0x5d1885 = new _0x3597fd.PlaneGeometry(_0xdc75b8.w, _0xdc75b8.h);
    _0x5d1885.translate(_0xdc75b8.offX, _0xdc75b8.offY, 0);
    _0xe8f65(_0x5d1885, _0x40371e === "wasp" ? 0.84 : 0.79);
    it.set(_0x40371e, _0x5d1885);
    return _0x5d1885;
  } else {
    return null;
  }
}
function gt(_0x2c8921) {
  let _0x2e1af2 = rt.get(_0x2c8921);
  if (_0x2e1af2) {
    return _0x2e1af2;
  }
  const _0x2359b3 = _0x20a60f(_0x2c8921);
  if (_0x2359b3) {
    _0x2e1af2 = new _0x3597fd.PlaneGeometry(_0x2359b3.w, _0x2359b3.h);
    _0x2e1af2.translate(_0x2359b3.offX, _0x2359b3.offY, 0);
    ut(_0x2e1af2, _0x2c8921, "action", _0x2359b3);
    _0xe8f65(_0x2e1af2, _0x2c8921 === "wasp" ? 0.86 : 0.8);
    rt.set(_0x2c8921, _0x2e1af2);
    return _0x2e1af2;
  } else {
    return null;
  }
}
function Mt(_0x54cb10) {
  let _0x1a45d7 = lt.get(_0x54cb10);
  if (_0x1a45d7) {
    return _0x1a45d7;
  }
  const _0x495af6 = _0x3915d6(_0x54cb10);
  if (_0x495af6) {
    _0x1a45d7 = new _0x3597fd.PlaneGeometry(_0x495af6.w, _0x495af6.h);
    _0x1a45d7.translate(_0x495af6.offX, _0x495af6.offY, 0);
    ut(_0x1a45d7, _0x54cb10, "flap", _0x495af6);
    _0xe8f65(_0x1a45d7, 0.94);
    lt.set(_0x54cb10, _0x1a45d7);
    return _0x1a45d7;
  } else {
    return null;
  }
}
function yt(_0x528888) {
  const _0x521eed = _0x528888.motionFrame;
  if (!Number.isInteger(_0x521eed) || _0x521eed < 0) {
    return -1;
  }
  if (_0x528888.motionSource === "actor") {
    if (_0x528888.poseKey !== "actor:" + _0x521eed || !_0x528888.actorMotionFrame || _0x528888.actorMotionFrame.index !== _0x521eed || _0x528888.actorMotionFrame.geo !== _0x528888.mesh.geometry || _0x528888.mat.map !== _0x528888.actorMotionBundle.tex || _0x528888.mat.emissiveMap !== _0x528888.actorMotionBundle.tex) {
      return -1;
    }
  } else if (_0x528888.motionSource === "locomotion") {
    if (_0x528888.poseKey !== "motion:" + _0x521eed || !_0x528888.motionTex || _0x528888.motionGeos?.[_0x521eed] !== _0x528888.mesh.geometry || _0x528888.mat.map !== _0x528888.motionTex || _0x528888.mat.emissiveMap !== _0x528888.motionTex) {
      return -1;
    }
  } else {
    if (_0x528888.motionSource !== "wasp-modular") {
      return -1;
    }
    if (_0x528888.poseKey !== "waspmod:" + _0x521eed || !_0x528888.waspModular || _0x528888.waspModular.body[_0x521eed]?.geo !== _0x528888.mesh.geometry || _0x528888.mat.map !== _0x528888.waspModular.tex || _0x528888.mat.emissiveMap !== _0x528888.waspModular.tex) {
      return -1;
    }
  }
  return _0x521eed;
}
function wt(_0x3b4dbd, _0x2be04a) {
  return _0x3b4dbd.presenter.ownsSilhouette(aa, _0x3b4dbd, _0x2be04a);
}
const bt = {
  s: 0,
  y: 0
};
const xt = {
  s: 0,
  y: 0
};
function vt(_0x21f36f, _0x3f5552, _0x1df6c5, _0x1357a8 = bt) {
  if (_0x21f36f.ecology && _0x1df6c5 === "muzzle") {
    return _0x249a4e(_0x21f36f, _0x3f5552, _0x1357a8);
  }
  if (_0x21f36f.presenter.id !== "actor" || !wt(_0x21f36f, _0x3f5552)) {
    return false;
  }
  const _0x1b9a71 = _0x1f649d(_0x21f36f.actorMotionBundle, _0x21f36f.motionFrame, _0x1df6c5);
  return !!_0x1b9a71 && (_0x1357a8.s = _0x3f5552.x + _0x1b9a71.x * _0x21f36f.mesh.scale.x, _0x1357a8.y = _0x3f5552.y + _0x21f36f.presentationLift + _0x1b9a71.y * _0x21f36f.mesh.scale.y, true);
}
function kt(_0x389af8) {
  return new _0x3597fd.MeshStandardMaterial({
    map: _0x389af8,
    vertexColors: true,
    emissiveMap: _0x389af8,
    emissive: _0x1a2931.glowOff,
    transparent: true,
    opacity: 0,
    alphaTest: 0.02,
    side: _0x3597fd.DoubleSide,
    forceSinglePass: true,
    depthWrite: true,
    fog: false
  });
}
function zt(_0x1c6d38, _0x369f22) {
  const _0x53a538 = new _0x3597fd.MeshBasicMaterial({
    map: _0x1c6d38,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    alphaTest: 0.035,
    side: _0x3597fd.DoubleSide,
    forceSinglePass: true,
    depthWrite: true,
    fog: false
  });
  const _0x2b937e = Le[_0x369f22] || 1;
  _0x53a538.color.setRGB(_0x2b937e, _0x2b937e, _0x2b937e, _0x3597fd.LinearSRGBColorSpace);
  return _0x53a538;
}
const St = -_0x1aa322(_0xfc43bd.WASP_WING);
const Bt = 0.7;
function Ct(_0xb756dc) {
  if (_0xb756dc.kind !== "polyp" || _0xb756dc.state !== "relay") {
    if (_0xb756dc.dir < 0) {
      return -1;
    } else {
      return 1;
    }
  }
  const _0x426450 = 1 - Math.max(0, Math.min(1, (_0xb756dc.stateUntil - _0x1b5862) / _0x12857a.genome.relayHingeMs));
  return _0xb756dc.relayFromDir * Math.cos(Math.PI * _0x426450);
}
function Rt(_0x2816c6, _0x241292 = "base") {
  let _0x564d04 = _0x2816c6.kind === "wasp" && ot(_0x2816c6) ? _0x2816c6.vx < 0 ? -1 : 1 : Ct(_0x2816c6);
  const _0x4731ab = _0x2816c6.kind === "wasp" || _0x2816c6.kind === "hound" || _0x2816c6.kind === "mortar" || _0x2816c6.kind === "warden";
  const _0x2004cd = _0x2816c6.kind === "hound" && _0x241292.startsWith("motion:");
  const _0x555c5c = _0x2816c6.kind === "wasp" && _0x241292.startsWith("waspmod:");
  const _0x5ad99a = _0x241292.startsWith("actor:") ? _0x21a16e(_0x2816c6.kind) : null;
  return _0x564d04 * (_0x5ad99a ? _0x5ad99a.spec.authoredFacing : _0x2004cd || _0x555c5c || _0x2816c6.kind !== "warden" && _0x211828(_0x2816c6.kind) !== "b" || !_0x4731ab ? 1 : -1);
}
function At(_0x2239eb, _0x56d804) {
  if (_0x2239eb.kind === "mortar") {
    return 0;
  }
  if (_0x2239eb.kind === "wasp") {
    if (!ot(_0x2239eb)) {
      return Math.sin(_0x2239eb.t * 1.6) * 0.12;
    }
    const _0x31767f = Math.atan2(_0x2239eb.vy, _0x2239eb.vx);
    if (_0x2239eb.vx < 0) {
      return _0x31767f + Math.PI;
    } else {
      return _0x31767f;
    }
  }
  return _0x56d804.roll(_0x2239eb);
}
const Lt = Math.min(1, Math.max(0, (_0x525750 - 1) / (_0x12857a.viewScales.far.depthMult - 1))) * 0.8;
const Dt = {};
for (const Ia of Object.keys(nt)) {
  Dt[Ia] = new _0x3597fd.Color(_0x1a2931.hitFlash).lerp(new _0x3597fd.Color(nt[Ia].color), Lt).getHex();
}
const Pt = new _0x3597fd.OctahedronGeometry(1);
function Gt(_0x2fafaf, _0x27b022) {
  _0x2fafaf.color.setHex(_0x27b022).multiplyScalar(_0x140e57());
}
function Ot(_0xaf110c, _0x2f0f11, _0x14f295, _0x1f882f, _0x1ec818, _0x20e89f) {
  _0xaf110c.lamp.visible = true;
  Gt(_0xaf110c.lampMat, _0xaf110c.lampColor);
  _0xaf110c.lampMat.opacity = _0x1ec818;
  _0xaf110c.lamp.scale.setScalar(_0x4c0323 * _0x525750 * _0x20e89f);
  _0x296115(_0xaf110c.lamp, _0x2f0f11.x + _0x14f295, _0x2f0f11.y + _0x1f882f, 0.35);
}
const Tt = {
  hound: function (_0x233faa, _0x5af63f) {
    const _0x2db1ea = _0x12857a.hound;
    if (!_0xd4bd87) {
      _0x233faa.lamp.visible = false;
      return;
    }
    if (_0x5af63f.state !== "tell") {
      if (_0x5af63f.state === "prowl" || _0x5af63f.state === "skid") {
        _0x233faa.lampColor = _0x1a2931.hound;
        Ot(_0x233faa, _0x5af63f, _0x5af63f.dir * 0.5, 0.34, _0x5af63f.state === "skid" ? 0.22 : 0.16, _0x5af63f.state === "skid" ? 0.42 : 0.36);
      } else {
        _0x233faa.lamp.visible = false;
      }
      return;
    }
    _0x233faa.lampColor = _0x1a2931.houndTell;
    const _0x4901ba = _0x5af63f.dir * 0.55;
    if (_0x5af63f.stateUntil - _0x1b5862 <= _0x2db1ea.tellCoilMs) {
      Ot(_0x233faa, _0x5af63f, _0x4901ba, 0.95, 1, _0x26bb7d);
      return;
    }
    const _0x2ac5ec = Je(_0x5af63f);
    Ot(_0x233faa, _0x5af63f, _0x4901ba, 0.95, 0.3 + _0x2ac5ec * 0.48, 0.68 + _0x2ac5ec * 0.28);
  },
  polyp: function (_0x872d3c, _0x4c11e1) {
    const _0x1a539f = _0x12857a.polyp;
    const _0x1bd2b0 = _0x4c11e1.dir * _0x1a539f.barrelTiles;
    if (!_0xd4bd87) {
      _0x872d3c.lamp.visible = false;
      return;
    }
    if (_0x4c11e1.state !== "tell") {
      if (_0x4c11e1.state === "vent") {
        _0x872d3c.lampColor = _0x1a2931.polypVent;
        Ot(_0x872d3c, _0x4c11e1, _0x1bd2b0, 0, 0.28, 0.48);
      } else {
        _0x872d3c.lamp.visible = false;
      }
      return;
    }
    _0x872d3c.lampColor = _0x1a2931.polypTell;
    const _0x56edfd = Math.max(0, _0x4c11e1.stateUntil - _0x1b5862);
    if (_0x56edfd <= _0x1a539f.commitCueMs) {
      Ot(_0x872d3c, _0x4c11e1, _0x1bd2b0, 0, 1, _0x26bb7d);
      return;
    }
    const _0x437d24 = 1 - Math.max(0, Math.min(1, _0x56edfd / _0x1a539f.tellMs));
    Ot(_0x872d3c, _0x4c11e1, _0x1bd2b0, 0, 0.26 + (_0x1a539f.tellMs - _0x56edfd <= _0x10eaba ? 0.12 : 0) + _0x437d24 * 0.5, 0.7 + _0x437d24 * 0.26);
  }
};
function It(_0x5bcdc5, _0x5a0a7c, _0x3cc17c = null) {
  _0x5bcdc5.evolutionMeshes = [];
  _0x5bcdc5.evolutionMats = [];
  _0x5bcdc5.paintedGenes = new Map();
  _0x5bcdc5.paintedGeneRows = [];
  const _0x21416a = _0x2fb4de => !!_0x3cc17c?.includes(_0x2fb4de);
  _0x5bcdc5.mechanicReadOwnership = Object.create(null);
  for (const _0x7a2f58 of _0x5a0a7c.effectiveMechanics || []) {
    _0x5bcdc5.mechanicReadOwnership[_0x7a2f58] = _0x21416a(_0x7a2f58) ? "atlas body/action vocabulary" : "existing dynamic hardware";
  }
  for (const _0xc40429 of _0x5a0a7c.tactics || []) {
    _0x5bcdc5.mechanicReadOwnership[_0xc40429] = "atlas action + exact tactic VFX";
  }
  const _0x1a181b = (_0x3d2b58, _0x244f3d, _0x596fc3 = _0x1a2931.capsule) => {
    const _0x40607f = _e(_0x596fc3);
    const _0x477cb3 = new _0x3597fd.Mesh(_0x244f3d, _0x40607f);
    _0x477cb3.name = _0x3d2b58;
    _0x477cb3.visible = false;
    _0x477cb3.renderOrder = 3;
    _0x48d2c7.add(_0x477cb3);
    _0x5bcdc5.evolutionMeshes.push(_0x477cb3);
    _0x5bcdc5.evolutionMats.push(_0x40607f);
    return {
      mesh: _0x477cb3,
      mat: _0x40607f
    };
  };
  const _0x35f170 = _0x57b08c => {
    const _0x448ec6 = _0x22fefe(_0x57b08c);
    const _0x24d0ba = _0x448ec6 && _0x12a38e();
    if (!_0x448ec6 || !_0x24d0ba) {
      return null;
    }
    const _0x57b9ff = new _0x3597fd.Mesh(_0x448ec6.geometry, _0x24d0ba);
    _0x57b9ff.name = "Painted Meridian " + _0x57b08c + " module";
    _0x57b9ff.visible = false;
    _0x57b9ff.renderOrder = 3;
    _0x48d2c7.add(_0x57b9ff);
    _0x5bcdc5.evolutionMeshes.push(_0x57b9ff);
    _0x5bcdc5.evolutionMats.push(_0x24d0ba);
    const _0x1f5a09 = {
      gene: _0x57b08c,
      mesh: _0x57b9ff,
      mat: _0x24d0ba,
      index: Math.max(0, _0x5a0a7c.genome?.genes.indexOf(_0x57b08c) ?? 0)
    };
    _0x5bcdc5.paintedGenes.set(_0x57b08c, _0x1f5a09);
    _0x5bcdc5.paintedGeneRows.push(_0x1f5a09);
    return _0x1f5a09;
  };
  const _0xe8d6ea = (_0x46ebd3, _0x2f9cca, _0x381cae = _0x1a2931.capsule) => {
    const _0x3beaa7 = function (_0x24b2ae) {
      const _0x4f0f49 = new _0x3597fd.Color(_0x24b2ae).multiplyScalar(0.22);
      return new _0x3597fd.MeshStandardMaterial({
        color: _0x4f0f49,
        emissive: _0x24b2ae,
        emissiveIntensity: 0.18,
        metalness: 0.76,
        roughness: 0.34,
        flatShading: true,
        transparent: true,
        opacity: 0,
        fog: false,
        side: _0x3597fd.DoubleSide,
        forceSinglePass: true
      });
    }(_0x381cae);
    const _0x5c188f = new _0x3597fd.Mesh(_0x2f9cca, _0x3beaa7);
    _0x5c188f.name = _0x46ebd3;
    _0x5c188f.visible = false;
    _0x5c188f.renderOrder = 3;
    _0x48d2c7.add(_0x5c188f);
    _0x5bcdc5.evolutionMeshes.push(_0x5c188f);
    _0x5bcdc5.evolutionMats.push(_0x3beaa7);
    return {
      mesh: _0x5c188f,
      mat: _0x3beaa7
    };
  };
  if (_0x5a0a7c.evolutionFace >= _0x12857a.evolution.firstFace && (_0x5a0a7c.kind === "wasp" || _0x5a0a7c.kind === "hound")) {
    const _0x157710 = _0x1a181b("Crown Aegis local shield", Fe);
    _0x5bcdc5.wardRing = _0x157710.mesh;
    _0x5bcdc5.wardRingMat = _0x157710.mat;
    _0x5bcdc5.linkMotes = [];
    for (let _0x413194 = 0; _0x413194 < 3; _0x413194++) {
      const _0x10438e = _0x1a181b("Crown Aegis link packet", Ne);
      _0x5bcdc5.linkMotes.push(_0x10438e);
    }
  }
  if (_0x5a0a7c.aegis && !_0x21416a("AEGIS") && !_0x35f170("AEGIS")) {
    const _0x3896c8 = _0x1a181b("Crown Aegis projector crown", Ee);
    const _0x4b6c9b = _0x1a181b("Crown Aegis projector core", Ne, _0x1a2931.muzzle);
    _0x5bcdc5.aegisRing = _0x3896c8.mesh;
    _0x5bcdc5.aegisRingMat = _0x3896c8.mat;
    _0x5bcdc5.aegisCore = _0x4b6c9b.mesh;
    _0x5bcdc5.aegisCoreMat = _0x4b6c9b.mat;
  }
  if (_0x5a0a7c.pincer && !_0x21416a("PINCER") && !_0x35f170("PINCER")) {
    const _0x22abca = _0x1a181b("Pincer doctrine split arc", He);
    _0x5bcdc5.pincerArc = _0x22abca.mesh;
    _0x5bcdc5.pincerArcMat = _0x22abca.mat;
  }
  if (_0x5a0a7c.bulwark && !_0x21416a("BULWARK") && !_0x35f170("BULWARK")) {
    _0x5bcdc5.bulwarkPlates = [];
    for (let _0x285476 = 0; _0x285476 < 3; _0x285476++) {
      const _0x2893ec = _0xe8d6ea("Meridian Bulwark articulated face plate", je, _0x1a2931.houndTell);
      _0x5bcdc5.bulwarkPlates.push(_0x2893ec);
    }
  }
  if (_0x5a0a7c.vault && !_0x21416a("VAULT") && !_0x35f170("VAULT")) {
    _0x5bcdc5.vaultCoils = [];
    for (let _0x1615c8 = 0; _0x1615c8 < 2; _0x1615c8++) {
      const _0x217aa0 = _0xe8d6ea("Meridian Vault vector coil", Ve, _0x1a2931.muzzle);
      _0x5bcdc5.vaultCoils.push(_0x217aa0);
    }
  }
  const _0x5250fc = _0x5a0a7c.salvo && !_0x21416a("SALVO") ? "SALVO" : _0x5a0a7c.relay && !_0x21416a("RELAY") ? "RELAY" : _0x5a0a7c.twinstrike && !_0x21416a("TWINSTRIKE") ? "TWINSTRIKE" : "";
  if (_0x5250fc) {
    if (!_0x35f170(_0x5250fc)) {
      _0x5bcdc5.attackRails = [];
      for (let _0x1de3d6 = 0; _0x1de3d6 < 2; _0x1de3d6++) {
        const _0x45ba06 = _0xe8d6ea(_0x5a0a7c.salvo ? "Meridian Salvo twin rack" : _0x5a0a7c.relay ? "Meridian Relay iris hinge rail" : "Meridian Twinstrike flight rail", Ke, _0x1a2931.capsule);
        _0x5bcdc5.attackRails.push(_0x45ba06);
      }
    }
  }
  if (_0x5a0a7c.backlash && !_0x21416a("BACKLASH") && !_0x35f170("BACKLASH")) {
    _0x5bcdc5.backlashArcs = [];
    for (let _0x24acd6 = 0; _0x24acd6 < 3; _0x24acd6++) {
      const _0x922ab5 = _0xe8d6ea("Meridian Backlash deployable coil shoe", Xe, _0x1a2931.capsule);
      _0x922ab5.mat.depthWrite = false;
      _0x5bcdc5.backlashArcs.push(_0x922ab5);
    }
    _0x5bcdc5.backlashNodes = [];
    for (let _0x2293c7 = 0; _0x2293c7 < 3; _0x2293c7++) {
      const _0x3e8cbe = _0xe8d6ea("Meridian Backlash coil clamp", Ne, _0x1a2931.muzzle);
      _0x5bcdc5.backlashNodes.push(_0x3e8cbe);
    }
  }
}
function Wt(_0x2f3906, _0x1cbf6e, _0x7782bb, _0xb1784, _0x11e748) {
  const _0x25e2c6 = _0x2f3906.mat.opacity;
  const _0x1e1d00 = 0.5 + Math.sin(_0x1b5862 * 0.009 + _0x1cbf6e.id * 0.61) * 0.5;
  (function (_0x58d8b2, _0x42ee60, _0x52937b, _0x2ae8a3, _0x1b19ad, _0x335dd3) {
    if (!_0x58d8b2.paintedGeneRows?.length) {
      return;
    }
    const _0x1b3717 = _0x58d8b2.actorBox || {
      w: 1,
      h: 1,
      cx: 0,
      cy: 0
    };
    const _0x4453fd = _0x42ee60.genome?.phenotype || {
      handedness: 1,
      moduleScale: 1,
      moduleTilt: 0,
      moduleBias: 0,
      pulsePhase: 0,
      platingBand: 1
    };
    const _0x55a25a = _0x42ee60.kind === "wasp" && ot(_0x42ee60) ? _0x42ee60.vx < 0 ? -1 : 1 : Ct(_0x42ee60);
    const _0x5099d6 = Math.sign(_0x55a25a) || _0x42ee60.dir || 1;
    const _0x5402c5 = _0x1b3717.w * Math.abs(_0x2ae8a3);
    const _0x59a2db = _0x1b3717.h * Math.abs(_0x1b19ad);
    let _0x211b25 = _0x42ee60.x + _0x1b3717.cx * _0x55a25a * Math.abs(_0x2ae8a3);
    let _0x347654 = _0x42ee60.y + _0x58d8b2.presentationLift + _0x1b3717.cy * Math.abs(_0x1b19ad);
    if (vt(_0x58d8b2, _0x42ee60, "mutation", xt)) {
      _0x211b25 = xt.s;
      _0x347654 = xt.y;
    }
    const _0x630ab8 = 0.5 + Math.sin(_0x1b5862 * 0.008 + _0x4453fd.pulsePhase) * 0.5;
    const _0x69bf15 = (_0x4453fd.platingBand - 1) * _0x59a2db * 0.035;
    for (const _0x50c8cf of _0x58d8b2.paintedGeneRows) {
      const _0xf61c84 = $e[_0x50c8cf.gene];
      if (!_0xf61c84) {
        _0x50c8cf.mesh.visible = false;
        continue;
      }
      let _0x46104d = Math.min(_0x5402c5, _0x59a2db) * _0xf61c84.size * _0x4453fd.moduleScale;
      let _0x2cd621 = _0x211b25 + _0x5099d6 * (_0x5402c5 * _0xf61c84.ax + _0x4453fd.moduleBias * 0.18);
      let _0x50eaf2 = _0x347654 + _0x59a2db * _0xf61c84.ay + _0x69bf15 + (_0x50c8cf.index - (_0x58d8b2.paintedGeneRows.length - 1) / 2) * _0x59a2db * 0.018;
      let _0x3a098e = _0x58d8b2.mesh.rotation.z + _0x5099d6 * _0xf61c84.rot + _0x4453fd.moduleTilt * _0x4453fd.handedness;
      let _0x314d13 = 0.9;
      let _0x37b620 = 0.045;
      let _0x266171 = _0x55a25a;
      if (_0x50c8cf.gene === "BULWARK") {
        const _0x16aad6 = _0x1b5862 < _0x42ee60.bulwarkOpenUntil;
        const _0x336ac6 = _0x1b5862 < _0x42ee60.bulwarkPingUntil;
        if (_0x16aad6) {
          _0x2cd621 += _0x5099d6 * 0.16;
          _0x3a098e += _0x5099d6 * 0.18;
          _0x314d13 = 0.62;
        }
        _0x37b620 = _0x336ac6 ? 0.5 : _0x16aad6 ? 0.025 : 0.075;
        _0x46104d *= _0x336ac6 ? 1.08 : 1;
      } else if (_0x50c8cf.gene === "VAULT") {
        const _0x117e99 = _0x42ee60.state === "tell";
        const _0x27664a = _0x42ee60.state === "vault";
        _0x50eaf2 += _0x27664a ? 0.12 : _0x117e99 ? _0x630ab8 * 0.06 : 0;
        _0x3a098e += _0x27664a ? _0x5099d6 * 0.16 : 0;
        _0x46104d *= _0x27664a ? 1.12 : _0x117e99 ? 1.02 + _0x630ab8 * 0.05 : 1;
        _0x37b620 = _0x27664a ? 0.3 : _0x117e99 ? 0.12 + _0x630ab8 * 0.08 : 0.045;
      } else if (_0x50c8cf.gene === "TWINSTRIKE") {
        const _0x5afe15 = _0x42ee60.state === "dive";
        _0x46104d *= _0x5afe15 ? 1.1 : 1;
        _0x2cd621 -= _0x5099d6 * (_0x5afe15 ? 0.08 : 0);
        _0x37b620 = _0x5afe15 ? 0.23 : 0.055;
      } else if (_0x50c8cf.gene === "SALVO") {
        const _0xb7e28a = _0x42ee60.state === "lob" || _0x42ee60.state === "fuse" || _0x42ee60.state === "burst";
        _0x50eaf2 += _0xb7e28a ? 0.08 : 0;
        _0x3a098e -= _0xb7e28a ? _0x5099d6 * 0.08 : 0;
        _0x46104d *= _0xb7e28a ? 1.06 : 1;
        _0x37b620 = _0xb7e28a ? 0.18 + _0x630ab8 * 0.08 : 0.05;
      } else if (_0x50c8cf.gene === "RELAY") {
        const _0xf6e012 = _0x42ee60.state === "relay";
        const _0xd352fa = _0xf6e012 ? 1 - Math.max(0, Math.min(1, (_0x42ee60.stateUntil - _0x1b5862) / _0x12857a.genome.relayHingeMs)) : 0;
        _0x3a098e += _0xf6e012 ? _0x42ee60.relayFromDir * Math.sin(_0xd352fa * Math.PI) * 0.34 : 0;
        _0x46104d *= _0xf6e012 ? 1.05 : 1;
        _0x37b620 = _0xf6e012 ? 0.16 + _0x630ab8 * 0.07 : _0x42ee60.state === "tell" ? 0.12 : 0.045;
      } else if (_0x50c8cf.gene === "PINCER") {
        const _0x1defb6 = _0x42ee60.state === "dive";
        _0x50eaf2 += (_0x42ee60.formationSide || _0x4453fd.handedness) * 0.045;
        _0x3a098e += _0x5099d6 * (_0x42ee60.formationSide || _0x4453fd.handedness) * 0.04;
        _0x46104d *= _0x1defb6 ? 1.08 : _0x42ee60.formationReady ? 1.03 : 1;
        _0x37b620 = _0x1defb6 ? 0.2 : _0x42ee60.formationReady ? 0.09 : 0.05;
      } else if (_0x50c8cf.gene === "AEGIS") {
        const _0x4a3a66 = _0x1b5862 < _0x42ee60.aegisPingUntil;
        const _0x418e61 = _0x42ee60.aegisActive;
        _0x46104d *= _0x4a3a66 ? 1.1 : _0x418e61 ? 1.02 + _0x630ab8 * 0.035 : 0.94;
        _0x50eaf2 += _0x418e61 ? _0x630ab8 * 0.04 : -0.04;
        _0x314d13 = _0x4a3a66 ? 1 : _0x418e61 ? 0.96 : 0.62;
        _0x37b620 = _0x4a3a66 ? 0.62 : _0x418e61 ? 0.18 + _0x630ab8 * 0.06 : 0.035;
      } else if (_0x50c8cf.gene === "BACKLASH") {
        const _0x3407a0 = !!_0x42ee60.backlashUntil;
        const _0x27253a = _0x1b5862 < _0x42ee60.backlashBurstUntil;
        const _0x24973f = _0x3407a0 ? Math.max(0, _0x42ee60.backlashUntil - _0x1b5862) : 0;
        const _0x59583f = _0x3407a0 ? 1 - Math.min(1, _0x24973f / _0x12857a.genome.backlashTellMs) : 0;
        const _0xe24219 = _0x12857a.genome.backlashRadius * 2 / 0.72;
        if (_0x3407a0 || _0x27253a) {
          _0x46104d += (_0xe24219 - _0x46104d) * (_0x27253a ? 1 : 0.28 + _0x59583f * 0.72);
          _0x2cd621 = _0x42ee60.x;
          _0x50eaf2 = _0x42ee60.y + _0x58d8b2.presentationLift;
          _0x3a098e = _0x58d8b2.mesh.rotation.z;
        }
        _0x46104d *= _0x27253a ? 1 : _0x3407a0 ? 0.98 + _0x630ab8 * 0.02 : 1;
        _0x314d13 = _0x27253a ? 1 : _0x3407a0 ? 0.94 : 0.84;
        _0x37b620 = _0x27253a ? 0.7 : _0x3407a0 ? 0.18 + _0x59583f * 0.24 : 0.055;
        _0x266171 = _0x5099d6;
      }
      if (_0x1b5862 < _0x42ee60.flashUntil) {
        _0x37b620 = Math.max(_0x37b620, 0.3);
      }
      _0x50c8cf.mesh.visible = _0x335dd3 > 0.01;
      const _0x4d4355 = _0x50c8cf.gene === "BACKLASH" && (_0x42ee60.backlashUntil || _0x1b5862 < _0x42ee60.backlashBurstUntil) ? 0.052 : _0xf61c84.layer;
      _0x296115(_0x50c8cf.mesh, _0x2cd621, _0x50eaf2, _0x52937b + _0x4d4355 + _0x50c8cf.index * 0.004 + _0x4453fd.handedness * 0.002);
      _0x50c8cf.mesh.rotation.z = _0x3a098e;
      const _0x5f0035 = (Math.abs(_0x266171) < 0.04 ? _0x5099d6 * 0.04 : _0x266171) * _0xf61c84.authored;
      _0x50c8cf.mesh.scale.set(_0x46104d * _0x5f0035, _0x46104d, _0x46104d);
      _0x50c8cf.mat.opacity = _0x335dd3 * _0x314d13;
      _0x50c8cf.mat.emissive.setHex(16777215);
      _0x50c8cf.mat.emissiveIntensity = _0x37b620;
      _0x50c8cf.worldSize = _0x46104d;
    }
  })(_0x2f3906, _0x1cbf6e, _0x7782bb, _0xb1784, _0x11e748, _0x25e2c6);
  if (_0x2f3906.aegisRing) {
    const _0x3d9548 = _0x1cbf6e.aegisActive;
    const _0x9b266e = _0x1b5862 < _0x1cbf6e.aegisPingUntil;
    const _0x4c5bc5 = _0x2f3906.actorBox;
    const _0x1c2991 = _0x1cbf6e.y + _0x2f3906.presentationLift + (_0x4c5bc5 ? _0x4c5bc5.h * _0x11e748 * 0.62 : 0.8) + 0.22;
    _0x2f3906.aegisRing.visible = _0x2f3906.aegisCore.visible = _0x25e2c6 > 0.01;
    _0x296115(_0x2f3906.aegisRing, _0x1cbf6e.x, _0x1c2991, _0x7782bb + 0.24);
    _0x296115(_0x2f3906.aegisCore, _0x1cbf6e.x, _0x1c2991, _0x7782bb + 0.27);
    _0x2f3906.aegisRing.rotation.z = _0x1b5862 * (_0x3d9548 ? 0.0024 : 0.0007);
    _0x2f3906.aegisRing.scale.setScalar((_0x3d9548 ? 1.05 : 0.76) + _0x1e1d00 * 0.12);
    _0x2f3906.aegisCore.scale.setScalar((_0x3d9548 ? 0.92 : 0.62) + _0x1e1d00 * 0.13);
    Gt(_0x2f3906.aegisRingMat, _0x9b266e ? _0x1a2931.muzzle : _0x1a2931.capsule);
    Gt(_0x2f3906.aegisCoreMat, _0x9b266e ? _0x1a2931.muzzle : _0x1a2931.capsule);
    _0x2f3906.aegisRingMat.opacity = _0x25e2c6 * (_0x9b266e ? 0.94 : _0x3d9548 ? 0.48 : 0.13);
    _0x2f3906.aegisCoreMat.opacity = _0x25e2c6 * (_0x9b266e ? 1 : _0x3d9548 ? 0.78 : 0.2);
  }
  if (_0x2f3906.wardRing) {
    const _0x4b9a82 = !!_0x1cbf6e.wardedBy;
    const _0x18f7c8 = _0x1b5862 < _0x1cbf6e.wardPingUntil;
    _0x2f3906.wardRing.visible = _0x4b9a82;
    if (_0x4b9a82) {
      _0x296115(_0x2f3906.wardRing, _0x1cbf6e.x, _0x1cbf6e.y + _0x2f3906.presentationLift, _0x7782bb + 0.23);
      _0x2f3906.wardRing.rotation.z = _0x1b5862 * 0.0018 * (_0x1cbf6e.formationSide || 1);
      const _0x573094 = _0x2f3906.actorBox;
      _0x2f3906.wardRing.scale.set((_0x573094?.w || 1) * Math.abs(_0xb1784) * 0.78 * (1 + _0x1e1d00 * 0.035), (_0x573094?.h || 1) * Math.abs(_0x11e748) * 0.92 * (1 + _0x1e1d00 * 0.035), 1);
      Gt(_0x2f3906.wardRingMat, _0x18f7c8 ? _0x1a2931.muzzle : _0x1a2931.capsule);
      _0x2f3906.wardRingMat.opacity = _0x25e2c6 * (_0x18f7c8 ? 0.82 : 0.28 + _0x1e1d00 * 0.08);
    }
    for (let _0x11e641 = 0; _0x11e641 < (_0x2f3906.linkMotes || []).length; _0x11e641++) {
      const {
        mesh: _0x198190,
        mat: _0x5dab33
      } = _0x2f3906.linkMotes[_0x11e641];
      _0x198190.visible = _0x4b9a82;
      if (!_0x4b9a82) {
        continue;
      }
      const _0x3907c2 = (_0x1b5862 * 0.00052 + _0x11e641 / _0x2f3906.linkMotes.length) % 1;
      const _0xd3f7e1 = _0x1cbf6e.x + (_0x1cbf6e.wardSourceX - _0x1cbf6e.x) * _0x3907c2;
      const _0x2e52fd = _0x1cbf6e.y + _0x2f3906.presentationLift + (_0x1cbf6e.wardSourceY - _0x1cbf6e.y) * _0x3907c2 + 0.18;
      _0x296115(_0x198190, _0xd3f7e1, _0x2e52fd, 0.22);
      _0x198190.rotation.z = _0x1b5862 * 0.003 + _0x11e641;
      _0x198190.scale.setScalar((_0x18f7c8 ? 1.35 : 0.78) + _0x1e1d00 * 0.18);
      Gt(_0x5dab33, _0x18f7c8 ? _0x1a2931.muzzle : _0x1a2931.capsule);
      _0x5dab33.opacity = _0x25e2c6 * (_0x18f7c8 ? 0.92 : 0.48);
    }
  }
  if (_0x2f3906.pincerArc) {
    _0x2f3906.pincerArc.visible = _0x25e2c6 > 0.01;
    _0x296115(_0x2f3906.pincerArc, _0x1cbf6e.x, _0x1cbf6e.y + _0x2f3906.presentationLift, _0x7782bb + 0.2);
    _0x2f3906.pincerArc.rotation.z = (_0x1cbf6e.formationSide < 0 ? Math.PI : 0) + _0x1b5862 * 0.00055;
    _0x2f3906.pincerArc.scale.set(Math.abs(_0xb1784) * 1.08, Math.abs(_0x11e748) * 0.7, 1);
    Gt(_0x2f3906.pincerArcMat, _0x1a2931.capsule);
    _0x2f3906.pincerArcMat.opacity = _0x25e2c6 * (_0x1cbf6e.formationReady ? 0.2 : 0.34 + _0x1e1d00 * 0.12);
  }
  if (_0x2f3906.bulwarkPlates) {
    const _0x3cfe57 = _0x1b5862 < _0x1cbf6e.bulwarkOpenUntil;
    const _0xd9e275 = _0x1b5862 < _0x1cbf6e.bulwarkPingUntil;
    const _0x436e6f = _0x2f3906.actorBox || {
      w: 1,
      h: 1
    };
    const _0x2c95e5 = _0x436e6f.w * Math.abs(_0xb1784) * 0.46 + 0.06;
    for (let _0x38cbd2 = 0; _0x38cbd2 < _0x2f3906.bulwarkPlates.length; _0x38cbd2++) {
      const {
        mesh: _0x29a53f,
        mat: _0x39303e
      } = _0x2f3906.bulwarkPlates[_0x38cbd2];
      const _0x13f817 = (_0x38cbd2 - 1) * (_0x436e6f.h * Math.abs(_0x11e748) * 0.25 + (_0x3cfe57 ? 0.12 : 0));
      _0x29a53f.visible = _0x25e2c6 > 0.01;
      _0x296115(_0x29a53f, _0x1cbf6e.x + _0x1cbf6e.dir * (_0x2c95e5 + (_0x3cfe57 ? 0.16 : 0)), _0x1cbf6e.y + _0x2f3906.presentationLift + _0x13f817, _0x7782bb + 0.28 + _0x38cbd2 * 0.006);
      _0x29a53f.rotation.z = _0x3cfe57 ? (_0x38cbd2 - 1) * _0x1cbf6e.dir * 0.28 : _0x1cbf6e.dir * 0.035;
      _0x29a53f.scale.set(1, Math.max(0.56, _0x436e6f.h * Math.abs(_0x11e748) * 0.74), 1);
      qe(_0x39303e, _0xd9e275 ? _0x1a2931.muzzle : _0x1a2931.houndTell, _0xd9e275 ? 1.1 : _0x3cfe57 ? 0.1 : 0.32);
      _0x39303e.opacity = _0x25e2c6 * (_0xd9e275 ? 1 : _0x3cfe57 ? 0.34 : 0.9);
    }
  }
  if (_0x2f3906.vaultCoils) {
    const _0x3e92f2 = _0x1cbf6e.state === "tell";
    const _0x2a7d51 = _0x1cbf6e.state === "vault";
    const _0x2cf27c = _0x2f3906.actorBox || {
      w: 1,
      h: 1
    };
    for (let _0x4430ee = 0; _0x4430ee < _0x2f3906.vaultCoils.length; _0x4430ee++) {
      const {
        mesh: _0x445f23,
        mat: _0x59fba3
      } = _0x2f3906.vaultCoils[_0x4430ee];
      _0x445f23.visible = _0x25e2c6 > 0.01;
      _0x296115(_0x445f23, _0x1cbf6e.x - _0x1cbf6e.dir * _0x2cf27c.w * Math.abs(_0xb1784) * (0.1 + _0x4430ee * 0.19), _0x1cbf6e.y + _0x2f3906.presentationLift - _0x2cf27c.h * Math.abs(_0x11e748) * 0.34, _0x7782bb + 0.25);
      _0x445f23.rotation.z = _0x1b5862 * (_0x2a7d51 ? 0.009 : 0.002) * (_0x4430ee ? -1 : 1);
      _0x445f23.scale.setScalar(_0x2a7d51 ? 1.42 : _0x3e92f2 ? 1.05 + _0x1e1d00 * 0.22 : 0.72);
      qe(_0x59fba3, _0x2a7d51 ? _0x1a2931.muzzle : _0x1a2931.houndTell, _0x2a7d51 ? 1 : _0x3e92f2 ? 0.58 : 0.2);
      _0x59fba3.opacity = _0x25e2c6 * (_0x2a7d51 ? 1 : _0x3e92f2 ? 0.94 : 0.74);
    }
  }
  if (_0x2f3906.attackRails) {
    const _0x910db9 = _0x1cbf6e.twinPassesLeft > 0 || _0x1cbf6e.salvoShotsRemaining > 0 || _0x1cbf6e.relay && (_0x1cbf6e.state === "tell" || _0x1cbf6e.state === "fire" || _0x1cbf6e.state === "relay");
    const _0x32c048 = _0x2f3906.actorBox || {
      w: 1,
      h: 1
    };
    for (let _0x22238c = 0; _0x22238c < _0x2f3906.attackRails.length; _0x22238c++) {
      const {
        mesh: _0x19a2ef,
        mat: _0x35c24b
      } = _0x2f3906.attackRails[_0x22238c];
      const _0x134f58 = _0x22238c ? 1 : -1;
      _0x19a2ef.visible = _0x25e2c6 > 0.01;
      _0x296115(_0x19a2ef, _0x1cbf6e.x - _0x1cbf6e.dir * _0x32c048.w * Math.abs(_0xb1784) * 0.08, _0x1cbf6e.y + _0x2f3906.presentationLift + _0x134f58 * _0x32c048.h * Math.abs(_0x11e748) * 0.27, _0x7782bb + 0.22 + _0x22238c * 0.008);
      const _0x3fcbef = _0x1cbf6e.relay && _0x1cbf6e.state === "relay" ? 1 - Math.max(0, Math.min(1, (_0x1cbf6e.stateUntil - _0x1b5862) / _0x12857a.genome.relayHingeMs)) : 0;
      _0x19a2ef.rotation.z = _0x2f3906.mesh.rotation.z + _0x134f58 * (_0x1cbf6e.salvo ? 0.1 : _0x1cbf6e.relay ? 0.3 + Math.sin(_0x3fcbef * Math.PI) * 0.34 : 0.18);
      _0x19a2ef.scale.set(Math.max(0.74, _0x32c048.w * Math.abs(_0xb1784) * 0.78), 1, 1);
      qe(_0x35c24b, _0x910db9 ? _0x1a2931.muzzle : _0x1a2931.capsule, _0x910db9 ? 0.58 + _0x1e1d00 * 0.22 : 0.18);
      _0x35c24b.opacity = _0x25e2c6 * (_0x910db9 ? 0.96 : 0.72);
    }
  }
  if (_0x2f3906.backlashArcs) {
    const _0x4e0d73 = !!_0x1cbf6e.backlashUntil;
    const _0x4e2e2e = _0x1b5862 < _0x1cbf6e.backlashBurstUntil;
    const _0x86f8c2 = _0x4e0d73 ? Math.max(0, _0x1cbf6e.backlashUntil - _0x1b5862) : 0;
    const _0x413f8d = _0x4e0d73 ? 1 - Math.min(1, _0x86f8c2 / _0x12857a.genome.backlashTellMs) : 0;
    const _0x5dcadc = _0x4e2e2e ? _0x12857a.genome.backlashRadius * 1.12 : _0x4e0d73 ? _0x12857a.genome.backlashRadius * (0.34 + _0x413f8d * 0.66) : 0.55;
    const _0x474422 = _0x2f3906.mesh.rotation.z + (_0x1cbf6e.kind === "wasp" ? 0.2 : 0);
    for (let _0x32dc33 = 0; _0x32dc33 < _0x2f3906.backlashArcs.length; _0x32dc33++) {
      const {
        mesh: _0x1fe0b0,
        mat: _0x309744
      } = _0x2f3906.backlashArcs[_0x32dc33];
      _0x1fe0b0.visible = _0x25e2c6 > 0.01;
      _0x296115(_0x1fe0b0, _0x1cbf6e.x, _0x1cbf6e.y + _0x2f3906.presentationLift, _0x7782bb + 0.19 + _0x32dc33 * 0.003);
      _0x1fe0b0.rotation.z = _0x474422 + _0x32dc33 / _0x2f3906.backlashArcs.length * Math.PI * 2;
      _0x1fe0b0.scale.setScalar(_0x5dcadc);
      qe(_0x309744, _0x4e2e2e ? _0x1a2931.muzzle : _0x1a2931.capsule, _0x4e2e2e ? 1.05 : _0x4e0d73 ? 0.3 + _0x413f8d * 0.42 : 0.12, _0x4e2e2e ? 0.72 : _0x4e0d73 ? 0.5 : 0.3);
      _0x309744.opacity = _0x25e2c6 * (_0x4e2e2e ? 0.94 : _0x4e0d73 ? 0.38 + _0x413f8d * 0.34 : 0.26);
    }
    for (let _0xde641 = 0; _0xde641 < _0x2f3906.backlashNodes.length; _0xde641++) {
      const {
        mesh: _0x1f7003,
        mat: _0x4f7b31
      } = _0x2f3906.backlashNodes[_0xde641];
      const _0x533630 = _0x474422 + _0xde641 / _0x2f3906.backlashNodes.length * Math.PI * 2;
      _0x1f7003.visible = _0x25e2c6 > 0.01;
      _0x296115(_0x1f7003, _0x1cbf6e.x + Math.cos(_0x533630) * _0x5dcadc, _0x1cbf6e.y + _0x2f3906.presentationLift + Math.sin(_0x533630) * _0x5dcadc, _0x7782bb + 0.22);
      _0x1f7003.scale.setScalar(_0x4e2e2e ? 1.45 : _0x4e0d73 ? 0.78 + _0x413f8d * 0.44 : 0.55);
      qe(_0x4f7b31, _0x4e2e2e ? _0x1a2931.muzzle : _0x1a2931.capsule, _0x4e2e2e ? 1.1 : _0x4e0d73 ? 0.54 : 0.14);
      _0x4f7b31.opacity = _0x25e2c6 * (_0x4e2e2e ? 1 : _0x4e0d73 ? 0.9 : 0.68);
    }
  }
}
const Ut = new Map();
let Ft = 0;
let Et = 0;
let Ht = 0;
function Nt(_0x4a1928) {
  const _0x8cfa28 = nt[_0x4a1928.kind];
  const _0x595f38 = _0x4a1928.kind === "wasp" && (_0x4a1928.ecologyVisualId === "wasp-diveclaw" || !_0x4a1928.ecologyId && !_0x4a1928.ecologyVisualId) ? null : _0x3b6dac(_0x4a1928.ecologyId || _0x4a1928.ecologyVisualId, _0x4a1928.kind);
  if (_0x595f38) {
    const _0x4b30d2 = {
      ecology: _0x595f38,
      modularBundle: null,
      actorBundle: null,
      spriteGeo: null
    };
    const _0x2e8760 = _0x2578de.select(_0x4b30d2);
    _0x2e8760.spawn(aa, {
      e: _0x4a1928,
      K: _0x8cfa28,
      assets: _0x4b30d2,
      presenter: _0x2e8760
    });
    return;
  }
  const _0x574ce5 = _0x2015d3(_0x4a1928.kind);
  const _0x8d56 = _0x574ce5 ? ft(_0x4a1928.kind) : null;
  const _0x52c722 = {
    ecology: null,
    tex: _0x574ce5,
    geo: _0x8d56,
    spriteGeo: _0x8d56,
    modularBundle: _0x4a1928.kind === "wasp" ? _0x5a8627() : null,
    actorBundle: _0x21a16e(_0x4a1928.kind)
  };
  const _0x49485e = _0x2578de.select(_0x52c722);
  _0x49485e.spawn(aa, {
    e: _0x4a1928,
    K: _0x8cfa28,
    assets: _0x52c722,
    presenter: _0x49485e
  });
}
const jt = Object.freeze({
  wasp: {
    ms: 520,
    punchMs: 52,
    fall: 2.35,
    drift: 0.92,
    depth: -0.62,
    tilt: 0.76,
    sx: 0.9,
    sy: 0.78
  },
  carrier: {
    ms: 560,
    punchMs: 70,
    fall: 1.55,
    drift: 0.48,
    depth: -0.82,
    tilt: 0.34,
    sx: 0.94,
    sy: 0.72
  },
  hound: {
    ms: 460,
    punchMs: 60,
    fall: 0.14,
    drift: 1.08,
    depth: -0.2,
    tilt: 0.14,
    sx: 1.04,
    sy: 0.72
  },
  polyp: {
    ms: 420,
    punchMs: 64,
    fall: 0.24,
    drift: 0.03,
    depth: -0.48,
    tilt: 0.08,
    sx: 0.58,
    sy: 0.5
  },
  mortar: {
    ms: 470,
    punchMs: 66,
    fall: 0.36,
    drift: 0.08,
    depth: -0.42,
    tilt: 0.12,
    sx: 0.72,
    sy: 0.44
  },
  warden: {
    ms: 1320,
    punchMs: 105,
    fall: 0.16,
    drift: 0.04,
    depth: -0.38,
    tilt: 0.025,
    sx: 1,
    sy: 0.92
  }
});
const Kt = Object.freeze({
  wasp: Object.freeze([{
    tag: "port wing bank",
    rect: [0, 0.55, 0.48, 1],
    x: -0.32,
    lift: 0.58,
    drop: 1.05,
    tilt: -0.72,
    depth: 0.16,
    shrink: 0.18
  }, {
    tag: "starboard wing bank",
    rect: [0.55, 1, 0.48, 1],
    x: 0.48,
    lift: 0.72,
    drop: 1.32,
    tilt: 0.88,
    depth: -0.12,
    shrink: 0.22
  }, {
    tag: "reactor and nose",
    rect: [0, 0.48, 0, 0.48],
    x: -0.12,
    lift: 0.16,
    drop: 0.42,
    tilt: -0.24,
    depth: 0.05,
    shrink: 0.1
  }, {
    tag: "thrust tail",
    rect: [0.48, 1, 0, 0.48],
    x: 0.34,
    lift: 0.24,
    drop: 0.78,
    tilt: 0.46,
    depth: -0.08,
    shrink: 0.15
  }]),
  hound: Object.freeze([{
    tag: "head armour",
    rect: [0, 0.32, 0, 1],
    x: -0.24,
    lift: 0.1,
    drop: 0.22,
    tilt: -0.24,
    depth: 0.06,
    shrink: 0.08
  }, {
    tag: "shoulder chassis",
    rect: [0.32, 0.7, 0.3, 1],
    x: -0.05,
    lift: 0.08,
    drop: 0.15,
    tilt: -0.1,
    depth: -0.03,
    shrink: 0.05
  }, {
    tag: "rear armour",
    rect: [0.7, 1, 0.26, 1],
    x: 0.26,
    lift: 0.16,
    drop: 0.28,
    tilt: 0.27,
    depth: 0.08,
    shrink: 0.1
  }, {
    tag: "fore running gear",
    rect: [0.32, 0.56, 0, 0.3],
    x: -0.1,
    lift: 0.02,
    drop: 0.36,
    tilt: -0.34,
    depth: 0.03,
    shrink: 0.14
  }, {
    tag: "rear running gear",
    rect: [0.56, 1, 0, 0.3],
    x: 0.16,
    lift: 0.03,
    drop: 0.34,
    tilt: 0.3,
    depth: -0.04,
    shrink: 0.14
  }]),
  polyp: Object.freeze([{
    tag: "upper iris petals",
    rect: [0, 1, 0.68, 1],
    x: 0,
    lift: -0.12,
    drop: 0.16,
    tilt: 0.04,
    depth: -0.04,
    shrink: 0.52
  }, {
    tag: "left iris petals",
    rect: [0, 0.32, 0.32, 0.68],
    x: 0.12,
    lift: 0,
    drop: 0.18,
    tilt: 0.08,
    depth: -0.02,
    shrink: 0.55
  }, {
    tag: "pressure iris",
    rect: [0.32, 0.68, 0.32, 0.68],
    x: 0,
    lift: 0,
    drop: 0.28,
    tilt: 0,
    depth: -0.2,
    shrink: 0.72
  }, {
    tag: "right iris petals",
    rect: [0.68, 1, 0.32, 0.68],
    x: -0.12,
    lift: 0,
    drop: 0.18,
    tilt: -0.08,
    depth: -0.02,
    shrink: 0.55
  }, {
    tag: "root manifold",
    rect: [0, 1, 0, 0.32],
    x: 0,
    lift: 0,
    drop: 0.38,
    tilt: 0,
    depth: -0.1,
    shrink: 0.38
  }]),
  mortar: Object.freeze([{
    tag: "launch tube",
    rect: [0, 0.62, 0.45, 1],
    x: -0.12,
    lift: 0.12,
    drop: 0.42,
    tilt: -0.28,
    depth: 0.06,
    shrink: 0.16
  }, {
    tag: "breech housing",
    rect: [0.62, 1, 0.45, 1],
    x: 0.08,
    lift: 0.05,
    drop: 0.34,
    tilt: 0.18,
    depth: -0.04,
    shrink: 0.24
  }, {
    tag: "left tripod",
    rect: [0, 0.42, 0, 0.45],
    x: 0.1,
    lift: 0,
    drop: 0.36,
    tilt: 0.24,
    depth: 0.02,
    shrink: 0.3
  }, {
    tag: "mount block",
    rect: [0.42, 0.68, 0, 0.45],
    x: 0,
    lift: 0,
    drop: 0.42,
    tilt: 0,
    depth: -0.14,
    shrink: 0.52
  }, {
    tag: "right tripod",
    rect: [0.68, 1, 0, 0.45],
    x: -0.1,
    lift: 0,
    drop: 0.36,
    tilt: -0.24,
    depth: 0.02,
    shrink: 0.3
  }]),
  carrier: Object.freeze([{
    tag: "port rotor shoulder",
    rect: [0, 0.34, 0.48, 1],
    x: -0.58,
    lift: 0.52,
    drop: 0.72,
    tilt: -0.58,
    depth: 0.15,
    shrink: 0.18
  }, {
    tag: "command chassis",
    rect: [0.34, 0.66, 0.48, 1],
    x: 0,
    lift: 0.22,
    drop: 0.62,
    tilt: 0.1,
    depth: -0.1,
    shrink: 0.16
  }, {
    tag: "starboard rotor shoulder",
    rect: [0.66, 1, 0.48, 1],
    x: 0.58,
    lift: 0.52,
    drop: 0.72,
    tilt: 0.58,
    depth: 0.15,
    shrink: 0.18
  }, {
    tag: "cargo containment belly",
    rect: [0, 1, 0, 0.48],
    x: 0,
    lift: 0.04,
    drop: 1.14,
    tilt: -0.06,
    depth: -0.2,
    shrink: 0.28
  }]),
  warden: Object.freeze([{
    tag: "port cannon limb",
    stage: "hardpoint",
    rect: [0, 0.3, 0.3, 0.7],
    x: -1.52,
    lift: 0.48,
    drop: 0.58,
    tilt: -0.26,
    depth: 0.18,
    shrink: 0.12
  }, {
    tag: "antenna crown",
    stage: "crown",
    rect: [0.3, 0.7, 0.64, 1],
    x: -0.1,
    lift: 0.72,
    drop: 0.66,
    tilt: -0.09,
    depth: -0.18,
    shrink: 0.18
  }, {
    tag: "starboard missile limb",
    stage: "hardpoint",
    rect: [0.7, 1, 0.3, 0.7],
    x: 1.58,
    lift: 0.42,
    drop: 0.62,
    tilt: 0.24,
    depth: 0.16,
    shrink: 0.12
  }, {
    tag: "signal iris vault",
    stage: "core",
    rect: [0.3, 0.7, 0.3, 0.64],
    x: 0,
    lift: 0,
    drop: 0.18,
    tilt: 0,
    depth: -0.82,
    shrink: 0.92
  }, {
    tag: "port leg bank",
    stage: "mount",
    rect: [0, 0.5, 0, 0.3],
    x: -0.42,
    lift: 0.06,
    drop: 0.82,
    tilt: -0.17,
    depth: -0.08,
    shrink: 0.22
  }, {
    tag: "starboard leg bank",
    stage: "mount",
    rect: [0.5, 1, 0, 0.3],
    x: 0.42,
    lift: 0.04,
    drop: 0.84,
    tilt: 0.16,
    depth: -0.1,
    shrink: 0.22
  }])
});
const Vt = new Map();
const Yt = new Map();
let Xt = 0;
let $t = 0;
let _t = 0;
let qt = 0;
const Zt = function () {
  const _0x44cd33 = _0x21a16e("warden");
  const _0x184329 = _0x44cd33?.frameByName?.["damaged-exposed"];
  const _0x5cd377 = Kt.warden;
  if (!_0x44cd33 || !_0x184329 || !_0x5cd377) {
    return null;
  }
  const _0x382609 = "warden:actor-terminal";
  const _0x36e140 = _0x39b5c4(kt(_0x44cd33.tex), nt.warden.surface);
  const _0x271546 = _0x5cd377.map((_0x1a55d0, _0x50dfa2) => {
    const _0xc5c399 = new _0x3597fd.Mesh(function (_0x5b29bc, _0x8b44fa, _0x44ad4d, _0x5e628d) {
      const _0x4e97ca = _0x5b29bc + ":" + _0x5e628d;
      let _0x3a1a31 = Vt.get(_0x4e97ca);
      if (_0x3a1a31) {
        return _0x3a1a31;
      }
      _0x8b44fa.geo.computeBoundingBox();
      const _0x22626c = _0x8b44fa.geo.boundingBox;
      const _0xe33fe1 = _0x22626c.max.x - _0x22626c.min.x;
      const _0x2911d7 = _0x22626c.max.y - _0x22626c.min.y;
      const _0x45cf5c = (_0x22626c.min.x + _0x22626c.max.x) / 2;
      const _0x420756 = (_0x22626c.min.y + _0x22626c.max.y) / 2;
      const _0x50cfd2 = _0x8b44fa.geo.attributes.uv;
      let _0x133030 = Infinity;
      let _0x2075fd = -Infinity;
      let _0x205597 = Infinity;
      let _0x304b6f = -Infinity;
      for (let _0x3da7c8 = 0; _0x3da7c8 < _0x50cfd2.count; _0x3da7c8++) {
        _0x133030 = Math.min(_0x133030, _0x50cfd2.getX(_0x3da7c8));
        _0x2075fd = Math.max(_0x2075fd, _0x50cfd2.getX(_0x3da7c8));
        _0x205597 = Math.min(_0x205597, _0x50cfd2.getY(_0x3da7c8));
        _0x304b6f = Math.max(_0x304b6f, _0x50cfd2.getY(_0x3da7c8));
      }
      const [_0x23d15f, _0x2e33e5, _0x37d9, _0xf05ef6] = _0x44ad4d;
      _0x3a1a31 = new _0x3597fd.PlaneGeometry(_0xe33fe1 * (_0x2e33e5 - _0x23d15f), _0x2911d7 * (_0xf05ef6 - _0x37d9));
      _0x3a1a31.translate(_0x45cf5c + (_0x23d15f + _0x2e33e5 - 1) * _0xe33fe1 / 2, _0x420756 + (_0x37d9 + _0xf05ef6 - 1) * _0x2911d7 / 2, 0);
      const _0x2680c8 = _0x3a1a31.attributes.uv;
      for (let _0x293b3c = 0; _0x293b3c < _0x2680c8.count; _0x293b3c++) {
        const _0x5eece8 = _0x23d15f + _0x2680c8.getX(_0x293b3c) * (_0x2e33e5 - _0x23d15f);
        const _0x57fc86 = _0x37d9 + _0x2680c8.getY(_0x293b3c) * (_0xf05ef6 - _0x37d9);
        _0x2680c8.setXY(_0x293b3c, _0x133030 + _0x5eece8 * (_0x2075fd - _0x133030), _0x205597 + _0x57fc86 * (_0x304b6f - _0x205597));
      }
      _0x2680c8.needsUpdate = true;
      _0x3a1a31.userData.actorMotionKind = "warden";
      _0x3a1a31.userData.actorMotionFrame = _0x8b44fa.index;
      _0x3a1a31.userData.deathPiece = _0x5e628d;
      _0xe8f65(_0x3a1a31, 1);
      Vt.set(_0x4e97ca, _0x3a1a31);
      return _0x3a1a31;
    }(_0x382609, _0x184329, _0x1a55d0.rect, _0x50dfa2), _0x36e140);
    _0xc5c399.name = "warden death " + _0x1a55d0.tag;
    _0xc5c399.visible = false;
    _0xc5c399.renderOrder = 2;
    _0x48d2c7.add(_0xc5c399);
    return {
      mesh: _0xc5c399,
      def: _0x1a55d0
    };
  });
  const _0x4e4413 = {
    key: _0x382609,
    mat: _0x36e140,
    pieces: _0x271546,
    inUse: false,
    fixedAtBoot: true
  };
  Yt.set(_0x382609, [_0x4e4413]);
  Xt++;
  $t += _0x271546.length;
  qt++;
  return _0x4e4413;
}();
function Jt(_0x7fd708, _0x5506b1) {
  if (_0x7fd708.ecology) {
    return null;
  }
  const _0x81576d = Kt[_0x5506b1.kind];
  if (!_0x7fd708.sprite || !_0x81576d) {
    return null;
  }
  let _0x18841d = null;
  if (_0x5506b1.kind === "warden") {
    if (Zt && !Zt.inUse) {
      _0x18841d = Zt;
    }
  } else {
    const _0x4d430f = !!_0x7fd708.actionActive && !!_0x7fd708.actionTex && !!_0x7fd708.actionGeo;
    const _0x1a1acc = _0x5506b1.kind + ":" + _0x211828(_0x5506b1.kind) + ":" + (_0x4d430f ? "action" : "base");
    let _0x20fb08 = Yt.get(_0x1a1acc);
    if (!_0x20fb08) {
      _0x20fb08 = [];
      Yt.set(_0x1a1acc, _0x20fb08);
    }
    _0x18841d = _0x20fb08.find(_0x834518 => !_0x834518.inUse);
    if (!_0x18841d && _t < 12) {
      const _0x50be82 = _0x4d430f ? _0x20a60f(_0x5506b1.kind) : _0x3cda8b(_0x5506b1.kind, _0x211828(_0x5506b1.kind));
      const _0x5c046c = _0x4d430f ? _0x7fd708.actionTex : _0x7fd708.baseTex;
      if (!_0x50be82 || !_0x5c046c) {
        return null;
      }
      const _0x433a20 = _0x39b5c4(kt(_0x5c046c), nt[_0x5506b1.kind].surface);
      const _0x2d05e8 = _0x81576d.map((_0x1626c2, _0x2ef02f) => {
        const _0x4685c8 = new _0x3597fd.Mesh(function (_0x341e46, _0x545601, _0x1ff883, _0x56e86d) {
          const _0x428e00 = _0x341e46 + ":" + _0x56e86d;
          let _0x24f7aa = Vt.get(_0x428e00);
          if (_0x24f7aa) {
            return _0x24f7aa;
          }
          const [_0x4e3633, _0x523b1b, _0x8847fd, _0x1317b0] = _0x1ff883;
          _0x24f7aa = new _0x3597fd.PlaneGeometry(_0x545601.w * (_0x523b1b - _0x4e3633), _0x545601.h * (_0x1317b0 - _0x8847fd));
          _0x24f7aa.translate(_0x545601.offX + (_0x4e3633 + _0x523b1b - 1) * _0x545601.w / 2, _0x545601.offY + (_0x8847fd + _0x1317b0 - 1) * _0x545601.h / 2, 0);
          const _0x133dde = _0x24f7aa.attributes.uv;
          for (let _0x10eca4 = 0; _0x10eca4 < _0x133dde.count; _0x10eca4++) {
            _0x133dde.setXY(_0x10eca4, _0x4e3633 + _0x133dde.getX(_0x10eca4) * (_0x523b1b - _0x4e3633), _0x8847fd + _0x133dde.getY(_0x10eca4) * (_0x1317b0 - _0x8847fd));
          }
          _0x133dde.needsUpdate = true;
          _0xe8f65(_0x24f7aa, 1);
          Vt.set(_0x428e00, _0x24f7aa);
          return _0x24f7aa;
        }(_0x1a1acc, _0x50be82, _0x1626c2.rect, _0x2ef02f), _0x433a20);
        _0x4685c8.name = _0x5506b1.kind + " death " + _0x1626c2.tag;
        _0x4685c8.visible = false;
        _0x4685c8.renderOrder = 2;
        _0x48d2c7.add(_0x4685c8);
        return {
          mesh: _0x4685c8,
          def: _0x1626c2
        };
      });
      _0x18841d = {
        key: _0x1a1acc,
        mat: _0x433a20,
        pieces: _0x2d05e8,
        inUse: false,
        fixedAtBoot: false
      };
      _0x20fb08.push(_0x18841d);
      Xt++;
      $t += _0x2d05e8.length;
      _t++;
    }
  }
  if (!_0x18841d) {
    return null;
  }
  _0x18841d.inUse = true;
  _0x18841d.mat.opacity = 1;
  _0x18841d.mat.emissive.setHex(_0x1a2931.glowOff);
  for (const _0x530f7a of _0x18841d.pieces) {
    _0x530f7a.mesh.visible = false;
  }
  return _0x18841d;
}
function Qt(_0x15f64d, _0x239023) {
  const _0x1f52b5 = Ut.get(_0x15f64d);
  if (!_0x1f52b5) {
    return;
  }
  Ut.delete(_0x15f64d);
  _0x2feabf(_0x15f64d);
  if (_0x1f52b5.beam) {
    _0x48d2c7.remove(_0x1f52b5.beam);
    _0x1f52b5.beamMat.dispose();
    _0x48d2c7.remove(_0x1f52b5.beamCore);
    _0x1f52b5.beamCoreMat.dispose();
  }
  if (_0x1f52b5.pod) {
    (function (_0x19d9e6) {
      for (const [_0x263729, _0x3aa0b8] of [[_0x19d9e6.pod, _0x19d9e6.podMat], [_0x19d9e6.mark, _0x19d9e6.markMat], [_0x19d9e6.blast, _0x19d9e6.blastMat]]) {
        _0x48d2c7.remove(_0x263729);
        _0x3aa0b8.dispose();
      }
      _0x19d9e6.podCoreMat.dispose();
      _0x19d9e6.blastCoreMat.dispose();
    })(_0x1f52b5);
  }
  if (_0x1f52b5.wardenCore) {
    (function (_0x56e054) {
      for (const [_0x58b07c, _0x5431cd] of [[_0x56e054.wardenCore, _0x56e054.wardenCoreMat], [_0x56e054.wardenShield, _0x56e054.wardenShieldMat], [_0x56e054.wardenEmitter, _0x56e054.wardenEmitterMat], [_0x56e054.wardenRack, _0x56e054.wardenRackMat], [_0x56e054.wardenBeam, _0x56e054.wardenBeamMat], [_0x56e054.wardenBeamCore, _0x56e054.wardenBeamCoreMat], [_0x56e054.wardenMark, _0x56e054.wardenMarkMat], [_0x56e054.wardenBlast, _0x56e054.wardenBlastMat], ..._0x56e054.wardenSeals.map(_0x19d655 => [_0x19d655.mesh, _0x19d655.mat])]) {
        _0x48d2c7.remove(_0x58b07c);
        _0x5431cd.dispose();
      }
    })(_0x1f52b5);
  }
  if (_0x1f52b5.lamp) {
    (function (_0x11d8af) {
      _0x48d2c7.remove(_0x11d8af.lamp);
      _0x11d8af.lampMat.dispose();
    })(_0x1f52b5);
  }
  _0x299aeb(_0x1f52b5);
  (function (_0x15cfc6) {
    for (const [_0x234299, _0x115fa3] of [[_0x15cfc6.actorGlow, _0x15cfc6.actorGlowMat], [_0x15cfc6.attackWake, _0x15cfc6.attackWakeMat], [_0x15cfc6.tellLane, _0x15cfc6.tellLaneMat], [_0x15cfc6.zoneClamp, _0x15cfc6.zoneClampMat]]) {
      if (_0x234299) {
        _0x48d2c7.remove(_0x234299);
        _0x115fa3.dispose();
      }
    }
  })(_0x1f52b5);
  let _0x1c0fbc = [];
  if (_0x239023) {
    _0x1c0fbc = function (_0x2e82da, _0x66a64f) {
      const _0x35d729 = new Map();
      if (_0x66a64f.aegis) {
        const _0x5633c7 = _0x2e82da.paintedGenes?.get("AEGIS");
        if (_0x5633c7) {
          _0x35d729.set(_0x5633c7.mesh, {
            type: "aegis-painted",
            index: 0
          });
        } else {
          if (_0x2e82da.aegisRing) {
            _0x35d729.set(_0x2e82da.aegisRing, {
              type: "aegis-ring",
              index: 0
            });
          }
          if (_0x2e82da.aegisCore) {
            _0x35d729.set(_0x2e82da.aegisCore, {
              type: "aegis-core",
              index: 1
            });
          }
        }
      }
      if (_0x66a64f.backlash) {
        const _0x554864 = _0x2e82da.paintedGenes?.get("BACKLASH");
        if (_0x554864) {
          _0x35d729.set(_0x554864.mesh, {
            type: "backlash-painted",
            index: 0
          });
        } else {
          for (let _0x28a75e = 0; _0x28a75e < (_0x2e82da.backlashArcs || []).length; _0x28a75e++) {
            _0x35d729.set(_0x2e82da.backlashArcs[_0x28a75e].mesh, {
              type: "backlash-shoe",
              index: _0x28a75e
            });
          }
        }
      }
      const _0x110f00 = [];
      const _0x3de15a = (_0x2e82da.actorBox?.h || 1) * Math.abs(_0x2e82da.mesh.scale.y);
      for (let _0x2d6c98 = 0; _0x2d6c98 < (_0x2e82da.evolutionMeshes || []).length; _0x2d6c98++) {
        const _0x49e872 = _0x2e82da.evolutionMeshes[_0x2d6c98];
        const _0x3d7cbc = _0x2e82da.evolutionMats[_0x2d6c98];
        const _0x177528 = _0x35d729.get(_0x49e872);
        if (_0x177528) {
          _0x49e872.visible = true;
          _0x110f00.push({
            mesh: _0x49e872,
            mat: _0x3d7cbc,
            type: _0x177528.type,
            index: _0x177528.index,
            yOffset: _0x177528.type.startsWith("aegis") ? _0x3de15a * 0.62 + 0.22 : 0,
            rotation: _0x49e872.rotation.z,
            sx: Math.abs(_0x49e872.scale.x) || 1,
            sy: Math.abs(_0x49e872.scale.y) || 1,
            sz: Math.abs(_0x49e872.scale.z) || 1,
            opacity: Math.max(0.55, _0x3d7cbc.opacity || 0)
          });
        } else {
          _0x48d2c7.remove(_0x49e872);
          _0x3d7cbc.dispose();
        }
      }
      _0x2e82da.evolutionMeshes = [];
      _0x2e82da.evolutionMats = [];
      _0x2e82da.paintedGenes?.clear();
      _0x2e82da.paintedGeneRows = [];
      return _0x110f00;
    }(_0x1f52b5, _0x15f64d);
  } else {
    (function (_0x304b75) {
      for (const _0x4cd85f of _0x304b75.evolutionMeshes || []) {
        _0x48d2c7.remove(_0x4cd85f);
      }
      for (const _0x43e638 of _0x304b75.evolutionMats || []) {
        _0x43e638.dispose();
      }
      _0x304b75.evolutionMeshes = [];
      _0x304b75.evolutionMats = [];
      _0x304b75.paintedGenes?.clear();
      _0x304b75.paintedGeneRows = [];
    })(_0x1f52b5);
  }
  _0x1c0fbc.push(..._0x1f52b5.presenter.prepareRemoval(aa, _0x1f52b5, _0x15f64d, _0x239023));
  (function (_0x535cdb) {
    if (_0x535cdb.flapMesh) {
      _0x48d2c7.remove(_0x535cdb.flapMesh);
      _0x535cdb.flapMat.dispose();
      _0x535cdb.flapMesh = null;
      _0x535cdb.flapMat = null;
    }
  })(_0x1f52b5);
  if (_0x239023) {
    const _0x10b90a = jt[_0x15f64d.kind];
    if (na.length >= 12) {
      ia(na.shift());
    }
    const _0x52af08 = yt(_0x1f52b5);
    const _0x2db9c0 = _0x15f64d.kind === "warden" ? Jt(_0x1f52b5, _0x15f64d) : _0x52af08 >= 0 ? null : Jt(_0x1f52b5, _0x15f64d);
    const _0x482aeb = Math.sign(_0x1f52b5.mesh.scale.x) || 1;
    const _0x577d05 = _0x52af08 >= 0 ? {
      frame: _0x52af08,
      poseKey: _0x1f52b5.poseKey,
      presentationScale: _0x1f52b5.presentationScale,
      geometry: _0x1f52b5.mesh.geometry,
      map: _0x1f52b5.mat.map,
      emissiveMap: _0x1f52b5.mat.emissiveMap,
      face: _0x482aeb,
      rootedTerminal: _0x15f64d.kind === "warden"
    } : null;
    const _0x357b66 = _0x1f52b5.ecology ? Object.freeze({
      id: _0x1f52b5.ecology.spec.id,
      bodyRow: _0x1f52b5.ecologyBodyRow,
      actionRow: _0x1f52b5.ecologyActionRow,
      code: _0x1f52b5.ecologyCode
    }) : null;
    na.push({
      mesh: _0x1f52b5.mesh,
      mat: _0x1f52b5.mat,
      s: _0x15f64d.x,
      y: _0x15f64d.y + _0x1f52b5.presentationLift,
      baseRoll: _0x1f52b5.mesh.rotation.z,
      t0: _0x1b5862,
      flash: Dt[_0x15f64d.kind],
      breakDir: Math.sign(_0x15f64d.vx) || _0x15f64d.dir || -1,
      baseScaleX: Math.abs(_0x1f52b5.mesh.scale.x),
      baseScaleY: Math.abs(_0x1f52b5.mesh.scale.y),
      baseScaleZ: Math.abs(_0x1f52b5.mesh.scale.z),
      face: _0x482aeb,
      kind: _0x15f64d.kind,
      spec: _0x10b90a,
      rig: _0x2db9c0,
      systems: _0x1c0fbc,
      frozenMotion: _0x577d05,
      ecologyDeath: _0x357b66,
      ecologyActionMesh: _0x1f52b5.ecologyActionMesh || null,
      ecologyActionMat: _0x1f52b5.ecologyActionMat || null
    });
  } else {
    _0x48d2c7.remove(_0x1f52b5.mesh);
    if (_0x1f52b5.ecologyActionMat) {
      _0x1f52b5.ecologyActionMat.dispose();
      Ht++;
      Et++;
    }
    _0x1f52b5.mat.dispose();
  }
}
function ea(_0xa22efb, _0x22ddc0) {
  _0xa22efb.mesh.visible = false;
  if (_0xa22efb.ecologyActionMesh) {
    _0xa22efb.ecologyActionMesh.visible = false;
  }
  if (_0xa22efb.beam) {
    _0xa22efb.beam.visible = false;
  }
  if (_0xa22efb.beamCore) {
    _0xa22efb.beamCore.visible = false;
  }
  if (_0xa22efb.pod) {
    wa(_0xa22efb);
  }
  if (_0xa22efb.wardenCore) {
    Ga(_0xa22efb);
  }
  if (_0xa22efb.lamp) {
    _0xa22efb.lamp.visible = false;
  }
  (function (_0x218716) {
    if (_0x218716.waspWingMesh) {
      _0x218716.waspWingMesh.visible = false;
    }
  })(_0xa22efb);
  (function (_0x517463) {
    if (_0x517463.flapMesh) {
      _0x517463.flapMesh.visible = false;
    }
  })(_0xa22efb);
  (function (_0x1a9205) {
    if (_0x1a9205.actorGlow) {
      _0x1a9205.actorGlow.visible = false;
    }
    if (_0x1a9205.attackWake) {
      _0x1a9205.attackWake.visible = false;
    }
    if (_0x1a9205.tellLane) {
      _0x1a9205.tellLane.visible = false;
    }
    if (_0x1a9205.zoneClamp) {
      _0x1a9205.zoneClamp.visible = false;
    }
  })(_0xa22efb);
  (function (_0x40e2cd) {
    for (const _0x149cb4 of _0x40e2cd.evolutionMeshes || []) {
      _0x149cb4.visible = false;
    }
  })(_0xa22efb);
  _0x72ce6(_0xa22efb);
  _0x2feabf(_0x22ddc0);
}
const ta = {
  K: null,
  depth: 0,
  sx: 1,
  sy: 1,
  sz: 1,
  glow: 0,
  signaling: false,
  hitStrength: 0
};
const aa = Object.freeze({
  spawnEcology: function ({
    e: _0x2547e0,
    K: _0x53b34e,
    assets: _0x5c8d5c,
    presenter: _0x232fb9
  }) {
    const {
      ecology: _0xc0d836
    } = _0x5c8d5c;
    const _0x565fd2 = zt(_0xc0d836.tex, _0x2547e0.kind);
    const _0x210092 = zt(_0xc0d836.tex, _0x2547e0.kind);
    const _0x3b911d = new _0x3597fd.Mesh(_0xc0d836.body[0], _0x565fd2);
    const _0xb218e7 = new _0x3597fd.Mesh(_0xc0d836.action[0], _0x210092);
    _0x3b911d.name = "Enemy ecology " + _0xc0d836.spec.id + " body";
    _0xb218e7.name = "Enemy ecology " + _0xc0d836.spec.id + " action";
    _0x3b911d.renderOrder = 2;
    _0xb218e7.renderOrder = 3;
    _0xb218e7.visible = false;
    _0x3b911d.add(_0xb218e7);
    const _0x75ffce = {
      mesh: _0x3b911d,
      mat: _0x565fd2,
      kind: _0x2547e0.kind,
      sprite: true,
      presenter: _0x232fb9,
      ecology: _0xc0d836,
      ecologyCode: -1,
      ecologyBodyRow: 0,
      ecologyActionRow: 0,
      ecologyActionMesh: _0xb218e7,
      ecologyActionMat: _0x210092,
      baseGeo: _0xc0d836.body[0],
      baseTex: _0xc0d836.tex,
      actionGeo: null,
      actionTex: null,
      actionActive: false,
      flapGeo: null,
      flapTex: null,
      motionTex: null,
      motionGeos: null,
      motionFrame: -1,
      motionPhase: 0,
      motionLastX: _0x2547e0.x,
      motionSource: "enemy-ecology",
      poseKey: "",
      actorMotionBundle: null,
      actorMotionFrame: null,
      actorMotionClip: "",
      actorMotionMarker: "",
      actorMotionEvent: "",
      actorMotionProgress: 0,
      presentationScale: (_0x10b5d6 = _0x2547e0.kind, Ae[_0x10b5d6] || Re[_0x10b5d6] || 1),
      presentationLift: 0,
      waspModular: null,
      waspBodyState: -1,
      waspWingPhase: 0,
      waspLastX: _0x2547e0.x,
      waspLastY: _0x2547e0.y,
      waspLastFace: Math.sign(_0x2547e0.dir) || 1,
      waspTurnUntil: 0,
      waspMotion: {
        turning: false,
        dx: 0,
        dy: 0
      },
      actorBox: _0xc0d836.box,
      evolutionMeshes: [],
      evolutionMats: [],
      paintedGenes: new Map(),
      paintedGeneRows: []
    };
    var _0x10b5d6;
    _0x75ffce.presentationLift = De(_0x2547e0.kind, _0x75ffce.presentationScale);
    _0x508bfc(_0x75ffce, _0x2547e0, _0x1b5862);
    It(_0x75ffce, _0x2547e0, _0x2547e0.ecologyMechanics);
    if (_0x2547e0.kind === "polyp") {
      const _0x2d6f75 = new _0x3597fd.MeshBasicMaterial({
        color: _0x1a2931.polyp,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
        side: _0x3597fd.DoubleSide,
        forceSinglePass: true,
        toneMapped: true
      });
      const _0x5e55b5 = new _0x3597fd.Mesh(ze, _0x2d6f75);
      _0x5e55b5.visible = false;
      _0x48d2c7.add(_0x5e55b5);
      _0x75ffce.beam = _0x5e55b5;
      _0x75ffce.beamMat = _0x2d6f75;
      const _0x1a4f8e = new _0x3597fd.MeshBasicMaterial({
        color: _0x1a2931.polypBeam,
        transparent: true,
        opacity: 0.72,
        depthWrite: false,
        side: _0x3597fd.DoubleSide,
        forceSinglePass: true,
        toneMapped: true
      });
      const _0x739564 = new _0x3597fd.Mesh(Se, _0x1a4f8e);
      _0x739564.visible = false;
      _0x48d2c7.add(_0x739564);
      _0x75ffce.beamCore = _0x739564;
      _0x75ffce.beamCoreMat = _0x1a4f8e;
    } else if (_0x2547e0.kind === "mortar") {
      ya(_0x75ffce, _0x3b911d);
    }
    _0x347fb7(_0x75ffce, _0x2547e0);
    ea(_0x75ffce, _0x2547e0);
    _0x48d2c7.add(_0x3b911d);
    Ut.set(_0x2547e0, _0x75ffce);
    Ft++;
  },
  spawnStandard: function ({
    e: _0x223d3e,
    K: _0x44693b,
    assets: _0x4b64eb,
    presenter: _0x20707a
  }) {
    const {
      tex: _0x239405,
      geo: _0x295812,
      modularBundle: _0x56b79,
      actorBundle: _0x51796b
    } = _0x4b64eb;
    const _0x4fa4bf = _0x51796b?.frames[0]?.geo || null;
    const _0x3685cf = _0x51796b?.tex || null;
    const _0x17f0fe = _0x56b79?.body[_0x59bec0.CRUISE]?.geo || _0x4fa4bf || _0x295812;
    const _0x370116 = _0x56b79?.tex || _0x3685cf || _0x239405;
    const _0xa0bd8d = _0x39b5c4(_0x56b79 || _0x4fa4bf ? kt(_0x370116) : _0x295812 ? kt(_0x239405) : new _0x3597fd.MeshStandardMaterial({
      color: _0x44693b.color,
      flatShading: true,
      transparent: true,
      opacity: 0,
      fog: false
    }), _0x44693b.surface);
    const _0xf48ce = new _0x3597fd.Mesh(_0x17f0fe || _0x44693b.geo, _0xa0bd8d);
    const _0x2da7a7 = _0x295812 && !_0x56b79 ? _0x205284(_0x223d3e.kind) : null;
    const _0x414d3f = _0x295812 && !_0x56b79 ? _0x47a3eb(_0x223d3e.kind) : null;
    const _0x1d2251 = _0x295812 && !_0x56b79 && ue.get(_0x223d3e.kind) || null;
    const _0x131c6b = {
      mesh: _0xf48ce,
      mat: _0xa0bd8d,
      kind: _0x223d3e.kind,
      sprite: !!_0x17f0fe,
      presenter: _0x20707a,
      baseGeo: _0x295812 || _0x17f0fe,
      baseTex: _0x239405 || _0x370116,
      actionGeo: _0x2da7a7 ? gt(_0x223d3e.kind) : null,
      actionTex: _0x2da7a7,
      actionActive: false,
      flapGeo: _0x414d3f && !_0x1d2251 ? Mt(_0x223d3e.kind) : null,
      flapTex: _0x414d3f,
      motionTex: _0x1d2251,
      motionGeos: _0x1d2251 ? dt(_0x223d3e.kind) : null,
      motionFrame: _0x56b79 ? _0x59bec0.CRUISE : -1,
      motionPhase: 0,
      motionLastX: _0x223d3e.x,
      motionSource: _0x56b79 ? "wasp-modular" : "",
      poseKey: _0x56b79 ? "waspmod:" + _0x59bec0.CRUISE : "",
      actorMotionBundle: _0x56b79 ? null : _0x51796b,
      actorMotionFrame: null,
      actorMotionClip: "",
      actorMotionMarker: "",
      actorMotionEvent: "",
      actorMotionProgress: 0,
      presentationScale: _0x17f0fe && Re[_0x223d3e.kind] || 1,
      presentationLift: 0,
      waspModular: _0x56b79,
      waspBodyState: _0x56b79 ? _0x59bec0.CRUISE : -1,
      waspWingPhase: 0,
      waspLastX: _0x223d3e.x,
      waspLastY: _0x223d3e.y,
      waspLastFace: Math.sign(_0x223d3e.dir) || 1,
      waspTurnUntil: 0,
      waspMotion: {
        turning: false,
        dx: 0,
        dy: 0
      }
    };
    _0x131c6b.presentationLift = _0x17f0fe ? De(_0x223d3e.kind, _0x131c6b.presentationScale) : 0;
    (function (_0x3758b6, _0x38992f, _0x1a95ad) {
      if (!_0x3758b6.waspModular || _0x38992f.kind !== "wasp") {
        return;
      }
      const _0x575b74 = _0x39b5c4(kt(_0x3758b6.waspModular.tex), _0x1a95ad.surface);
      _0x575b74.emissive.setHex(_0x1a2931.glowOff);
      _0x575b74.emissiveIntensity = 0;
      const _0x5320d9 = new _0x3597fd.Mesh(_0x3758b6.waspModular.wings[0].geo, _0x575b74);
      _0x5320d9.name = "Wasp modular hinged wing bank";
      _0x5320d9.visible = false;
      _0x5320d9.renderOrder = 1;
      _0x3758b6.mesh.renderOrder = 2;
      _0x48d2c7.add(_0x5320d9);
      _0x3758b6.waspWingMesh = _0x5320d9;
      _0x3758b6.waspWingMat = _0x575b74;
      _0x3758b6.waspWingPhase = 0;
      _0x3758b6.waspBodyDepth = -Infinity;
      _0x3758b6.waspWingDepth = -Infinity;
    })(_0x131c6b, _0x223d3e, _0x44693b);
    (function (_0x348eb0, _0x1cc8c2, _0x426f37) {
      if (_0x1cc8c2.kind !== "wasp" || !_0x348eb0.sprite || _0x348eb0.motionTex || !_0x348eb0.flapTex || !_0x348eb0.flapGeo) {
        return;
      }
      const _0x1442d5 = _0x39b5c4(kt(_0x348eb0.flapTex), _0x426f37.surface);
      const _0x586475 = new _0x3597fd.Mesh(_0x348eb0.flapGeo, _0x1442d5);
      _0x586475.name = "Wasp painted downstroke phase";
      _0x586475.visible = false;
      _0x586475.renderOrder = 2;
      _0x48d2c7.add(_0x586475);
      _0x348eb0.flapMesh = _0x586475;
      _0x348eb0.flapMat = _0x1442d5;
      _0x348eb0.flapMix = 0;
    })(_0x131c6b, _0x223d3e, _0x44693b);
    (function (_0x33006, _0x484d94, _0x2a32ce) {
      const _0x363538 = _0x14393b(_0x484d94.kind);
      const _0x2b7e20 = _e(_0x2a32ce.color, Pe);
      const _0x40eaab = new _0x3597fd.Mesh(Te, _0x2b7e20);
      _0x40eaab.renderOrder = 0;
      _0x48d2c7.add(_0x40eaab);
      _0x33006.actorGlow = _0x40eaab;
      _0x33006.actorGlowMat = _0x2b7e20;
      _0x33006.actorBox = _0x363538;
      if (_0x484d94.kind === "wasp" || _0x484d94.kind === "hound") {
        const _0x8862c2 = _e(_0x484d94.kind === "wasp" ? _0x1a2931.waspDive : _0x1a2931.houndCharge, Ge);
        const _0x14186f = new _0x3597fd.Mesh(Ie, _0x8862c2);
        _0x14186f.visible = false;
        _0x14186f.renderOrder = 1;
        _0x48d2c7.add(_0x14186f);
        _0x33006.attackWake = _0x14186f;
        _0x33006.attackWakeMat = _0x8862c2;
      }
      if (_0x484d94.kind === "hound" || _0x484d94.kind === "polyp") {
        const _0x31abf4 = _e(_0x484d94.kind === "hound" ? _0x1a2931.houndTell : _0x1a2931.polypTell, Oe);
        const _0x59308c = new _0x3597fd.Mesh(We, _0x31abf4);
        _0x59308c.visible = false;
        _0x59308c.renderOrder = 1;
        _0x48d2c7.add(_0x59308c);
        _0x33006.tellLane = _0x59308c;
        _0x33006.tellLaneMat = _0x31abf4;
      }
      if (_0x484d94.kind === "mortar") {
        const _0x46e381 = _e(_0x1a2931.mortarMark);
        const _0x39c7fc = new _0x3597fd.Mesh(Ue, _0x46e381);
        _0x39c7fc.visible = false;
        _0x39c7fc.renderOrder = 1;
        _0x48d2c7.add(_0x39c7fc);
        _0x33006.zoneClamp = _0x39c7fc;
        _0x33006.zoneClampMat = _0x46e381;
      }
    })(_0x131c6b, _0x223d3e, _0x44693b);
    It(_0x131c6b, _0x223d3e);
    if (_0x223d3e.kind === "polyp") {
      if (!_0x131c6b.sprite) {
        const _0x3e2b9e = new _0x3597fd.Mesh(xe, _0xa0bd8d);
        _0xf48ce.add(_0x3e2b9e);
        _0x131c6b.barrel = _0x3e2b9e;
        const _0x1977c3 = new _0x3597fd.Mesh(ve, _0xa0bd8d);
        _0x1977c3.position.y = -_0x12857a.polyp.rootY / 2;
        _0xf48ce.add(_0x1977c3);
      }
      const _0x416e35 = new _0x3597fd.MeshBasicMaterial({
        color: _0x1a2931.polyp,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
        side: _0x3597fd.DoubleSide,
        forceSinglePass: true,
        toneMapped: true
      });
      const _0x2a0d82 = new _0x3597fd.Mesh(ze, _0x416e35);
      _0x2a0d82.visible = false;
      _0x48d2c7.add(_0x2a0d82);
      _0x131c6b.beam = _0x2a0d82;
      _0x131c6b.beamMat = _0x416e35;
      const _0xd977c1 = new _0x3597fd.MeshBasicMaterial({
        color: _0x1a2931.polypBeam,
        transparent: true,
        opacity: 0.72,
        depthWrite: false,
        side: _0x3597fd.DoubleSide,
        forceSinglePass: true,
        toneMapped: true
      });
      const _0x59ea56 = new _0x3597fd.Mesh(Se, _0xd977c1);
      _0x59ea56.visible = false;
      _0x48d2c7.add(_0x59ea56);
      _0x131c6b.beamCore = _0x59ea56;
      _0x131c6b.beamCoreMat = _0xd977c1;
    } else if (_0x223d3e.kind === "mortar") {
      ya(_0x131c6b, _0xf48ce);
    } else if (_0x223d3e.kind === "warden") {
      (function (_0x533f94) {
        const _0x3ef0a2 = Pa(ka, _0x1a2931.capsule);
        const _0xc6f0ab = Pa(za, _0x1a2931.modCapsule);
        const _0x156b2e = Pa(Sa, _0x1a2931.modCapsule);
        const _0xe83efe = Pa(Ba, _0x1a2931.modCapsule);
        const _0x2cca01 = Pa(Ra, _0x1a2931.capsule);
        const _0x378f70 = Pa(Aa, _0x1a2931.mortarBlast);
        _0x2cca01.mat.blending = _0x3597fd.NormalBlending;
        const _0x76552d = Pa(La, _0x1a2931.mortarMark);
        const _0x19df01 = Pa(Da, _0x1a2931.mortarBlast);
        _0x3ef0a2.mat.blending = _0x3597fd.NormalBlending;
        _0xc6f0ab.mat.blending = _0x3597fd.NormalBlending;
        _0x19df01.mat.blending = _0x3597fd.NormalBlending;
        Object.assign(_0x533f94, {
          wardenCore: _0x3ef0a2.mesh,
          wardenCoreMat: _0x3ef0a2.mat,
          wardenShield: _0xc6f0ab.mesh,
          wardenShieldMat: _0xc6f0ab.mat,
          wardenEmitter: _0x156b2e.mesh,
          wardenEmitterMat: _0x156b2e.mat,
          wardenRack: _0xe83efe.mesh,
          wardenRackMat: _0xe83efe.mat,
          wardenBeam: _0x2cca01.mesh,
          wardenBeamMat: _0x2cca01.mat,
          wardenBeamCore: _0x378f70.mesh,
          wardenBeamCoreMat: _0x378f70.mat,
          wardenMark: _0x76552d.mesh,
          wardenMarkMat: _0x76552d.mat,
          wardenBlast: _0x19df01.mesh,
          wardenBlastMat: _0x19df01.mat,
          wardenSeals: []
        });
        for (let _0x4f5116 = 0; _0x4f5116 < 4; _0x4f5116++) {
          const _0x425fae = Pa(Ca, _0x1a2931.modCapsule);
          _0x425fae.mat.blending = _0x3597fd.NormalBlending;
          _0x533f94.wardenSeals.push(_0x425fae);
        }
      })(_0x131c6b);
    }
    _0x347fb7(_0x131c6b, _0x223d3e);
    if (_0x131c6b.sprite) {
      _0xf48ce.scale.x = Rt(_0x223d3e, _0x131c6b.poseKey);
    }
    if (_0xd4bd87 && Tt[_0x223d3e.kind]) {
      (function (_0x5db113, _0x2e9bf8) {
        const _0x1df881 = new _0x3597fd.MeshBasicMaterial({
          color: _0x2e9bf8,
          transparent: true,
          opacity: 0
        });
        const _0x2b89cb = new _0x3597fd.Mesh(Pt, _0x1df881);
        _0x2b89cb.visible = false;
        _0x48d2c7.add(_0x2b89cb);
        _0x5db113.lamp = _0x2b89cb;
        _0x5db113.lampMat = _0x1df881;
        _0x5db113.lampColor = _0x2e9bf8;
      })(_0x131c6b, _0x223d3e.kind === "polyp" ? _0x1a2931.polypTell : _0x1a2931.houndTell);
    }
    _0xf48ce.visible = false;
    _0x48d2c7.add(_0xf48ce);
    Ut.set(_0x223d3e, _0x131c6b);
  },
  syncSpritePose: (_0x512646, _0x5e21c3) => _0x2578de.get("sprite").syncPose(aa, _0x512646, _0x5e21c3),
  currentMotionFrame: yt,
  spriteFaceX: Rt,
  locomotionFrame: function (_0x3f4f00, _0x5cb1d4) {
    const _0x256717 = _0x3f4f00.motionGeos?.length || 0;
    if (!_0x256717) {
      return -1;
    }
    if (_0x5cb1d4.kind === "wasp") {
      const _0x16e589 = _0x5cb1d4.t * 3.25 + _0x5cb1d4.id * 0.173;
      return Math.floor((_0x16e589 - Math.floor(_0x16e589)) * _0x256717) % _0x256717;
    }
    if (_0x5cb1d4.kind === "hound") {
      const _0x2096c5 = Math.abs(_0x5cb1d4.x - _0x3f4f00.motionLastX);
      _0x3f4f00.motionLastX = _0x5cb1d4.x;
      _0x3f4f00.motionPhase = _0x2096c5 <= 0.75 ? (_0x3f4f00.motionPhase + _0x2096c5 / 1.55) % 1 : 0;
      const _0x19fa73 = function (_0x177029, _0x4a2d3d) {
        if (_0x4a2d3d < 8) {
          return -1;
        }
        if (_0x177029.state === "tell") {
          return 4;
        }
        if (_0x177029.state === "charge") {
          if (_0x12857a.hound.chargeMs - Math.max(0, _0x177029.stateUntil - _0x1b5862) < 110) {
            return 5;
          } else {
            return -1;
          }
        }
        if (_0x177029.state === "vault") {
          if (_0x177029.vy > _0x12857a.genome.vaultLift * 0.45) {
            return 5;
          } else if (_0x177029.vy > -_0x12857a.genome.vaultLift * 0.35) {
            return 6;
          } else {
            return 7;
          }
        } else if (_0x177029.state === "tumble") {
          if (_0x177029.vy > -8) {
            return 6;
          } else {
            return 7;
          }
        } else if (_0x177029.state === "skid") {
          return 7;
        } else {
          return -1;
        }
      }(_0x5cb1d4, _0x256717);
      if (_0x19fa73 >= 0) {
        return _0x19fa73;
      }
      const _0x59923d = Math.min(4, _0x256717);
      return Math.min(_0x59923d - 1, Math.floor(_0x3f4f00.motionPhase * _0x59923d));
    }
    return -1;
  },
  actionPoseActive: function (_0x405202) {
    if (_0x405202.kind === "wasp") {
      return _0x405202.state === "dive";
    } else if (_0x405202.kind === "hound") {
      return _0x405202.state === "charge" || _0x405202.state === "vault";
    } else if (_0x405202.kind === "polyp") {
      return _0x405202.state === "tell" || _0x405202.aegisActive;
    } else if (_0x405202.kind === "mortar") {
      return _0x405202.state === "lob" || _0x405202.state === "fuse" || _0x405202.state === "burst";
    } else {
      return _0x405202.kind === "carrier" && Math.sin(_0x405202.t * _0x12857a.carrier.bobFreq) > 0.15;
    }
  },
  detachModularWaspWing: function (_0x281b27, _0x5570e5 = false) {
    if (!_0x281b27.waspWingMesh) {
      return null;
    }
    const _0x2ad7f8 = _0x281b27.waspWingMesh;
    const _0x5e53e4 = _0x281b27.waspWingMat;
    _0x281b27.waspWingMesh = null;
    _0x281b27.waspWingMat = null;
    if (_0x5570e5) {
      _0x2ad7f8.visible = true;
      return {
        mesh: _0x2ad7f8,
        mat: _0x5e53e4,
        type: "wasp-wing-bank",
        index: 0,
        rotation: _0x2ad7f8.rotation.z,
        depth: _0x281b27.waspWingDepth,
        face: Math.sign(_0x2ad7f8.scale.x) || 1,
        sx: Math.abs(_0x2ad7f8.scale.x) || 1,
        sy: Math.abs(_0x2ad7f8.scale.y) || 1,
        sz: Math.abs(_0x2ad7f8.scale.z) || 1,
        opacity: Math.max(0.55, _0x5e53e4.opacity || 0)
      };
    } else {
      _0x48d2c7.remove(_0x2ad7f8);
      _0x5e53e4.dispose();
      return null;
    }
  },
  syncEcologyMaterial: function (_0x33f866, _0x32f772) {
    const _0x3a6cb0 = Le[_0x33f866.kind] || 1;
    const _0x3ead4e = Math.min(1.92, _0x3a6cb0 + _0x32f772.hitStrength * 0.27);
    _0x33f866.mat.color.setRGB(_0x3ead4e, _0x3ead4e, _0x3ead4e, _0x3597fd.LinearSRGBColorSpace);
    _0x33f866.ecologyActionMat.color.setRGB(_0x3ead4e, _0x3ead4e, _0x3ead4e, _0x3597fd.LinearSRGBColorSpace);
    _0x33f866.ecologyActionMat.opacity = _0x33f866.mat.opacity;
    _0x33f866.ecologyActionMesh.visible = true;
  },
  syncPaintedMaterial: function (_0x379c75, _0x42668e) {
    _0x379c75.mat.emissive.setHex(_0x42668e.signaling ? _0x42668e.glow : _0x42668e.K.color);
    _0x379c75.mat.emissiveIntensity = _0x379c75.kind === "warden" ? 0 : _0x140e57() * (_0x42668e.signaling ? 0.82 : 0.12);
  },
  syncEcologyTransform: function (_0x3c8cd6, _0x3bdc09, _0x3f096e) {
    _0x3c8cd6.mesh.rotation.z = function (_0x54dbea, _0x307797) {
      if (_0x54dbea.kind === "wasp") {
        return At(_0x54dbea, _0x307797);
      }
      if (_0x54dbea.kind === "hound" && (_0x54dbea.state === "vault" || _0x54dbea.state === "reboundVault" || _0x54dbea.state === "tumble")) {
        const _0x340fec = Math.sign(_0x54dbea.vx) || _0x54dbea.dir || 1;
        return Math.atan2(_0x54dbea.vy, Math.max(0.1, Math.abs(_0x54dbea.vx))) * _0x340fec * 0.18;
      }
      return 0;
    }(_0x3bdc09, _0x3f096e.K);
    _0x3c8cd6.mesh.scale.set(_0x3f096e.sx * function (_0x24e92a) {
      return (_0x24e92a.kind === "wasp" && ot(_0x24e92a) ? _0x24e92a.vx < 0 ? -1 : 1 : Ct(_0x24e92a)) * -1;
    }(_0x3bdc09), _0x3f096e.sy, _0x3f096e.sz);
  },
  syncPaintedTransform: function (_0x15fb25, _0x9bc5c1, _0x5e1a8b) {
    _0x15fb25.mesh.rotation.z = wt(_0x15fb25, _0x9bc5c1) ? 0 : At(_0x9bc5c1, _0x5e1a8b.K);
    _0x15fb25.mesh.scale.set(_0x5e1a8b.sx * Rt(_0x9bc5c1, _0x15fb25.poseKey), _0x5e1a8b.sy, _0x5e1a8b.sz);
  },
  syncPrimitiveTransform: function (_0x1d331f, _0x304d4f, _0x154e28) {
    _0x1d331f.mesh.rotation.z = _0x154e28.K.roll(_0x304d4f);
    _0x1d331f.mesh.scale.set(_0x154e28.sx, _0x154e28.sy, _0x154e28.sz);
  }
});
function oa(_0x272609) {
  const _0x3bf914 = Ut.get(_0x272609);
  if (!_0x3bf914) {
    return;
  }
  const _0x618e75 = _0x12857a.wasp;
  if (!_0x257417(_0x272609.x)) {
    ea(_0x3bf914, _0x272609);
    return;
  }
  if (!_0x27829b(_0x272609, _0x1b5862, _0x618e75.enterMs)) {
    ea(_0x3bf914, _0x272609);
    return;
  }
  _0x3bf914.mesh.visible = true;
  _0x3bf914.presenter.syncPose(aa, _0x3bf914, _0x272609);
  const _0x20d93c = _0x272609.kind === "warden";
  let _0x1b7cce;
  let _0x28f612;
  if (_0x1b5862 < _0x272609.enterUntil) {
    const _0x56555d = 1 - (_0x272609.enterUntil - _0x1b5862) / _0x618e75.enterMs;
    if (_0x20d93c) {
      _0x1b7cce = 0;
      _0x28f612 = 1;
      _0x3bf914.mat.opacity = Math.min(1, Math.max(0, _0x56555d) / 0.18);
    } else {
      const _0x8f8c19 = 1 - (1 - _0x56555d) ** 3;
      _0x1b7cce = _0x618e75.enterDepth * (1 - _0x8f8c19);
      _0x28f612 = 0.7 + _0x8f8c19 * 0.3;
      _0x3bf914.mat.opacity = _0x56555d;
    }
  } else {
    _0x1b7cce = _0x20d93c ? 0 : Math.sin(_0x272609.t * _0x618e75.wobbleFreq) * _0x618e75.wobbleAmp;
    _0x28f612 = 1;
    _0x3bf914.mat.opacity = 1;
  }
  const _0x512e2e = nt[_0x272609.kind];
  let _0x163fb7 = _0x28f612;
  let _0x2ffe7a = _0x28f612;
  let _0x8619d8 = _0x28f612;
  const _0x259425 = _0x1b5862 < _0x272609.flashUntil;
  const _0x165fae = _0x259425 ? Math.min(1, Math.max(0, (_0x272609.flashUntil - _0x1b5862) / 90)) : 0;
  if (_0x259425) {
    const _0x19b1d0 = 1 + _0x165fae * 0.08;
    _0x163fb7 *= _0x19b1d0;
    _0x2ffe7a *= _0x19b1d0;
    _0x8619d8 *= _0x19b1d0;
  }
  let _0x5e1416 = _0x259425 ? Dt[_0x272609.kind] : _0x1a2931.glowOff;
  if (_0x512e2e.pose && _0x3bf914.presenter.usesLegacyPose(aa, _0x3bf914, _0x272609)) {
    const _0x1da9c7 = _0x512e2e.pose(_0x272609);
    _0x1b7cce += _0x1da9c7.depth;
    if (!wt(_0x3bf914, _0x272609)) {
      _0x163fb7 *= _0x1da9c7.sx;
      _0x2ffe7a *= _0x1da9c7.sy;
      _0x8619d8 *= _0x1da9c7.sz;
    }
    if (_0x5e1416 === _0x1a2931.glowOff) {
      _0x5e1416 = _0x1da9c7.glow;
    }
  }
  _0x1b7cce += 1.15;
  if (_0x1b5862 >= _0x272609.enterUntil) {
    _0x1b7cce = Math.max(_0x1b7cce, 1.13);
  }
  if (_0x3bf914.presenter.id === "ecology") {
    _0x3bf914.ecologyDepth = _0x1b7cce;
  }
  _0x163fb7 *= _0x3bf914.presentationScale;
  _0x2ffe7a *= _0x3bf914.presentationScale;
  _0x8619d8 *= _0x3bf914.presentationScale;
  const _0x5d9aa9 = _0x3bf914.presenter.id !== "ecology" && _0x5e1416 !== _0x1a2931.glowOff;
  ta.K = _0x512e2e;
  ta.depth = _0x1b7cce;
  ta.sx = _0x163fb7;
  ta.sy = _0x2ffe7a;
  ta.sz = _0x8619d8;
  ta.glow = _0x5e1416;
  ta.signaling = _0x5d9aa9;
  ta.hitStrength = _0x165fae;
  _0x3bf914.presenter.syncMaterial(aa, _0x3bf914, ta);
  _0x296115(_0x3bf914.mesh, _0x272609.x, _0x272609.y + _0x3bf914.presentationLift, _0x1b7cce);
  _0x3bf914.presenter.syncTransform(aa, _0x3bf914, _0x272609, ta);
  (function (_0x5c7a55, _0x50d728, _0x1f5ac7, _0x4fbf5b) {
    if (!_0x5c7a55.waspWingMesh) {
      return;
    }
    const _0x44429a = _0x20918a(_0x50d728);
    if (_0x44429a !== _0x5c7a55.waspWingPhase) {
      _0x5c7a55.waspWingPhase = _0x44429a;
      _0x5c7a55.waspWingMesh.geometry = _0x5c7a55.waspModular.wings[_0x44429a].geo;
    }
    const _0x576d0e = _0x1f5ac7 - St;
    _0x5c7a55.waspBodyDepth = _0x1f5ac7;
    _0x5c7a55.waspWingDepth = _0x576d0e;
    _0x5c7a55.waspWingMesh.visible = _0x5c7a55.mesh.visible && _0x5c7a55.mat.opacity > 0.001;
    _0x296115(_0x5c7a55.waspWingMesh, _0x50d728.x, _0x50d728.y + _0x5c7a55.presentationLift, _0x576d0e);
    _0x5c7a55.waspWingMesh.rotation.z = _0x5c7a55.mesh.rotation.z;
    _0x5c7a55.waspWingMesh.scale.copy(_0x5c7a55.mesh.scale);
    _0x5c7a55.waspWingMat.opacity = _0x5c7a55.mat.opacity;
    if (_0x4fbf5b) {
      _0x5c7a55.waspWingMat.emissive.copy(_0x5c7a55.mat.emissive);
    } else {
      _0x5c7a55.waspWingMat.emissive.setHex(_0x1a2931.glowOff);
    }
    _0x5c7a55.waspWingMat.emissiveIntensity = _0x4fbf5b ? _0x5c7a55.mat.emissiveIntensity * 0.72 : 0;
  })(_0x3bf914, _0x272609, _0x1b7cce, _0x5d9aa9);
  if (_0x3bf914.beam) {
    const _0xbb8f79 = _0x12857a.polyp;
    if (_0x3bf914.barrel) {
      const _0x5cd7e6 = Ct(_0x272609);
      _0x3bf914.barrel.position.x = _0x5cd7e6 * _0xbb8f79.barrelTiles * 0.65;
      _0x3bf914.barrel.scale.x = Math.max(0.08, Math.abs(_0x5cd7e6));
    }
    const _0x315f3a = _0x3bbfa1(_0x272609);
    const _0x31fa54 = _0x7b684d(_0x272609);
    const _0x483422 = _0x272609.state === "fire" && _0x272609.beamReach > 0 && _0x1b5862 >= _0x272609.enterUntil && (!_0x315f3a || _0x31fa54);
    _0x3bf914.beam.visible = _0x483422;
    _0x3bf914.beamCore.visible = _0x483422;
    if (_0x483422) {
      const _0x2e4d88 = !_0x31fa54 && vt(_0x3bf914, _0x272609, "muzzle");
      const _0x2cb727 = _0x31fa54 ? _0x272609.x + _0x272609.dir * _0xbb8f79.barrelTiles : _0x2e4d88 ? bt.s : _0x272609.x + _0x272609.dir * _0xbb8f79.barrelTiles;
      const _0x247981 = _0x31fa54 ? _0x272609.y : _0x2e4d88 ? bt.y : _0x272609.y;
      const _0x1c055f = _0x31fa54 ? _0x2cb727 + _0x272609.tacticBeamX * _0x272609.beamReach : _0x272609.x + _0x272609.dir * (_0xbb8f79.barrelTiles + _0x272609.beamReach);
      const _0xb91155 = _0x31fa54 ? _0x247981 + _0x272609.tacticBeamY * _0x272609.beamReach : _0x247981;
      const _0x1f113a = Math.max(0.01, Math.hypot(_0x1c055f - _0x2cb727, _0xb91155 - _0x247981));
      const _0x221aa1 = (_0x2cb727 + _0x1c055f) / 2;
      const _0x432ed4 = (_0x247981 + _0xb91155) / 2;
      _0x296115(_0x3bf914.beam, _0x221aa1, _0x432ed4, _0x31fa54 ? 1.16 : 0);
      _0x296115(_0x3bf914.beamCore, _0x221aa1, _0x432ed4, _0x31fa54 ? 1.19 : 0.03);
      const _0x2393f2 = Math.atan2(_0xb91155 - _0x247981, _0x1c055f - _0x2cb727);
      _0x3bf914.beam.rotation.z = _0x2393f2;
      _0x3bf914.beamCore.rotation.z = _0x2393f2;
      const _0x58e469 = 1 + _0xbb8f79.beamPulseAmp * Math.sin(_0x1b5862 / 1000 * _0xbb8f79.beamPulseFreq * Math.PI * 2);
      _0x3bf914.beam.scale.set(_0x1f113a, _0x31fa54 ? 1 : _0x58e469, _0x31fa54 ? 1 : _0x58e469);
      _0x3bf914.beamCore.scale.set(_0x1f113a, 0.9 + _0x58e469 * 0.1, 0.9 + _0x58e469 * 0.1);
      _0x3bf914.beamMat.color.setHex(_0x1a2931.polyp);
      _0x3bf914.beamMat.opacity = 0.16 + _0x58e469 * 0.06;
      _0x3bf914.beamCoreMat.color.setHex(_0x1a2931.polypBeam);
      _0x3bf914.beamCoreMat.opacity = 0.66 + _0x58e469 * 0.1;
    }
  }
  if (_0x3bf914.pod) {
    (function (_0x1a67c0, _0x3b804e) {
      if (_0x1b5862 < _0x3b804e.enterUntil) {
        wa(_0x1a67c0);
        return;
      }
      const _0x1fcca1 = _0x3b804e.state === "lob";
      const _0x4ec038 = _0x3b804e.state === "fuse";
      const _0x240392 = _0x1fcca1 || _0x3b804e.state === "fuse" || _0x3b804e.state === "burst";
      _0x1a67c0.pod.visible = _0x1fcca1 || _0x4ec038;
      if (!_0x1fcca1 && !_0x4ec038) {
        _0x1a67c0.podMat.emissiveIntensity = 0;
      }
      if (_0x1fcca1) {
        const _0x41052b = 1 - Math.max(0, Math.min(1, _0x3b804e.podU / 0.22));
        _0x1a67c0.podMat.color.set(_0x1a2931.capsuleInk);
        _0x1a67c0.podMat.emissive.setHex(_0x1a2931.mortar);
        _0x1a67c0.podMat.emissiveIntensity = 0.04 + _0x41052b * 0.12;
        const _0x1538a5 = vt(_0x1a67c0, _0x3b804e, "muzzle");
        const _0x155b11 = _0x1538a5 ? bt.s : _0x3b804e.x;
        const _0x4235d5 = _0x1538a5 ? bt.y : _0x3b804e.y;
        _0x296115(_0x1a67c0.pod, _0x5cfd93(_0x155b11, _0x3b804e.zoneX, _0x3b804e.podU), _0x5cc64d(_0x4235d5, _0x3b804e.zoneY, da.arcTiles, _0x3b804e.podU), 0);
        const _0x2061bb = _0x3b804e.zoneX - _0x155b11;
        const _0x383b69 = _0x3b804e.zoneY - _0x4235d5 + da.arcTiles * 4 * (1 - _0x3b804e.podU * 2);
        _0x1a67c0.pod.rotation.z = Math.atan2(_0x383b69, _0x2061bb);
        _0x1a67c0.pod.scale.set(2.85, 2.85, 2.85);
        _0x1a67c0.podCoreMat.opacity = 0.7 + _0x41052b * 0.2;
      } else if (_0x4ec038) {
        const _0xd4fea6 = Math.max(0, _0x3b804e.stateUntil - _0x1b5862);
        const _0x5bcdf4 = 1 - Math.max(0, Math.min(1, _0xd4fea6 / da.fuseMs));
        const _0xaaac3 = 0.5 + Math.sin(_0x1b5862 * (0.018 + _0x5bcdf4 * 0.022)) * 0.5;
        _0x296115(_0x1a67c0.pod, _0x3b804e.zoneX, _0x3b804e.zoneY + da.podRadius * 0.72, da.warnDepth + 0.12);
        _0x1a67c0.pod.rotation.z = -Math.PI / 2;
        _0x1a67c0.pod.scale.set(3.02 + _0xaaac3 * 0.12, 3.02 + _0xaaac3 * 0.12, 3.02);
        _0x1a67c0.podMat.color.set(_0x1a2931.capsuleInk);
        _0x1a67c0.podMat.emissive.setHex(_0x1a2931.mortar);
        _0x1a67c0.podMat.emissiveIntensity = 0.02 + _0x5bcdf4 * 0.04;
        _0x1a67c0.podCoreMat.opacity = 0.58 + _0x5bcdf4 * 0.26 + _0xaaac3 * 0.1;
      }
      _0x1a67c0.mark.visible = _0x240392;
      _0x1a67c0.blast.visible = _0x3b804e.state === "burst";
      if (!_0x240392) {
        return;
      }
      _0x296115(_0x1a67c0.mark, _0x3b804e.zoneX, _0x3b804e.zoneY + da.markThickness / 2, 0);
      _0x296115(_0x1a67c0.blast, _0x3b804e.zoneX, _0x3b804e.zoneY + da.blastHeight / 2, da.warnDepth);
      if (_0x3b804e.state === "burst") {
        const _0x553c7a = Math.max(0, Math.min(1, (_0x3b804e.stateUntil - _0x1b5862) / da.burstMs));
        _0x1a67c0.blastMat.color.set(_0x1a2931.capsuleInk);
        _0x1a67c0.blastMat.opacity = 0.76 + _0x553c7a * 0.16;
        _0x1a67c0.blastCoreMat.opacity = 0.68 + _0x553c7a * 0.24;
        _0x1a67c0.markMat.opacity = 0.95;
        _0x1a67c0.blast.scale.set(1 + (1 - _0x553c7a) * 0.05, 0.84 + _0x553c7a * 0.16, 1);
        return;
      }
      _0x1a67c0.blast.scale.set(1, 1, 1);
      if (_0x1fcca1) {
        _0x1a67c0.markMat.opacity = 0.48 + _0x3b804e.podU * 0.12;
        return;
      }
      const _0x15ca7e = Math.max(0, _0x3b804e.stateUntil - _0x1b5862);
      const _0x33da8e = 1 - Math.max(0, Math.min(1, _0x15ca7e / da.fuseMs));
      _0x1a67c0.markMat.opacity = 0.56 + _0x33da8e * 0.38;
    })(_0x3bf914, _0x272609);
  }
  _0x159287(_0x3bf914, _0x272609);
  if (_0x3bf914.wardenCore) {
    (function (_0xb4a1a1, _0x2f75f3) {
      const _0x11d2b5 = ba;
      const _0x334cc7 = vt(_0xb4a1a1, _0x2f75f3, "iris");
      const _0x7a7a7c = _0x334cc7 ? bt.s : _0x2f75f3.x - 0.44;
      const _0x5cb1b5 = _0x334cc7 ? bt.y : _0x2f75f3.y - 0.1;
      const _0x1693f1 = _0x1b5862 < _0x2f75f3.enterUntil;
      if (_0x1693f1) {
        Ga(_0xb4a1a1);
        return;
      }
      const _0x2371f1 = 0.5 + Math.sin(_0x1b5862 * 0.012) * 0.5;
      const _0x5ac613 = _0x2f75f3.state === "exposed";
      const _0x265f54 = _0x1b5862 < _0x2f75f3.armorPingUntil;
      const _0xcd5245 = _0x1b5862 < _0x2f75f3.coreHitUntil;
      _0xb4a1a1.wardenCore.visible = _0x5ac613 || _0x265f54 || _0xcd5245;
      if (_0xb4a1a1.wardenCore.visible) {
        _0x296115(_0xb4a1a1.wardenCore, _0x7a7a7c, _0x5cb1b5, 0.32);
        _0xb4a1a1.wardenCore.rotation.z = 0;
        _0xb4a1a1.wardenCore.scale.setScalar(1 + (_0xcd5245 ? 0.2 : 0));
        Gt(_0xb4a1a1.wardenCoreMat, _0xcd5245 ? _0x1a2931.muzzle : _0x5ac613 ? _0x1a2931.capsule : _0x1a2931.modCapsule);
        _0xb4a1a1.wardenCoreMat.opacity = _0xcd5245 ? 1 : _0x5ac613 ? 0.78 : 0.66;
      }
      _0xb4a1a1.wardenShield.visible = _0x265f54;
      if (_0x265f54) {
        _0x296115(_0xb4a1a1.wardenShield, _0x7a7a7c, _0x5cb1b5, 0.29);
        _0xb4a1a1.wardenShield.rotation.z = 0;
        _0xb4a1a1.wardenShield.scale.setScalar(1);
        Gt(_0xb4a1a1.wardenShieldMat, _0x1a2931.muzzle);
        _0xb4a1a1.wardenShieldMat.opacity = 0.86;
      }
      const _0x35a88a = Math.max(0, Math.ceil(_0x2f75f3.hp / _0x11d2b5.windowDamage));
      const _0x4dd13c = [[-0.72, 0.62], [-0.28, 0.82], [0.28, 0.82], [0.72, 0.62]];
      for (let _0x4a746f = 0; _0x4a746f < _0xb4a1a1.wardenSeals.length; _0x4a746f++) {
        const _0x33e50e = _0xb4a1a1.wardenSeals[_0x4a746f];
        _0x33e50e.mesh.visible = _0x5ac613 && _0x4a746f < _0x35a88a;
        if (_0x33e50e.mesh.visible) {
          _0x296115(_0x33e50e.mesh, _0x7a7a7c + _0x4dd13c[_0x4a746f][0], _0x5cb1b5 + _0x4dd13c[_0x4a746f][1], 0.27);
          _0x33e50e.mesh.rotation.z = _0x4a746f * Math.PI * 0.5;
          _0x33e50e.mesh.scale.setScalar(0.78);
          Gt(_0x33e50e.mat, _0x1a2931.modCapsule);
          _0x33e50e.mat.opacity = 0.6;
        }
      }
      const _0x30b3c3 = _0x2f75f3.state === "sweepTell";
      const _0x29ad11 = _0x2f75f3.state === "sweepFire";
      const _0x57d21b = _0x30b3c3 && _0x2f75f3.stateUntil - _0x1b5862 <= _0x11d2b5.sweepCommitMs;
      const _0x4de0ca = _0x2f75f3.x + _0x2f75f3.dir * _0x11d2b5.emitterTiles;
      const _0x2688f6 = vt(_0xb4a1a1, _0x2f75f3, "muzzle");
      const _0x3ada6c = _0x2688f6 ? bt.s : _0x4de0ca;
      const _0x118a88 = _0x2688f6 ? bt.y : _0x2f75f3.y + 0.22;
      _0xb4a1a1.wardenEmitter.visible = _0x30b3c3 || _0x29ad11;
      if (_0xb4a1a1.wardenEmitter.visible) {
        _0x296115(_0xb4a1a1.wardenEmitter, _0x3ada6c, _0x118a88, 0.3);
        _0xb4a1a1.wardenEmitter.scale.setScalar(_0x29ad11 ? 1.28 : 0.72 + _0x2371f1 * 0.32);
        Gt(_0xb4a1a1.wardenEmitterMat, _0x29ad11 ? _0x1a2931.polypBeam : _0x1a2931.mortarMark);
        _0xb4a1a1.wardenEmitterMat.opacity = _0x29ad11 ? 1 : 0.48 + _0x2371f1 * 0.3;
      }
      const _0x4d376e = _0x29ad11 ? _0x11d2b5.beamReach : _0x57d21b ? 1.35 : 0;
      for (const _0x1a3d50 of [_0xb4a1a1.wardenBeam, _0xb4a1a1.wardenBeamCore]) {
        _0x1a3d50.visible = _0x4d376e > 0;
      }
      if (_0x4d376e > 0) {
        const _0x5efe5d = _0x4de0ca + _0x2f75f3.dir * _0x4d376e;
        const _0x59ae7c = Math.max(0.01, Math.abs(_0x5efe5d - _0x3ada6c));
        const _0x218fff = (_0x3ada6c + _0x5efe5d) / 2;
        _0x296115(_0xb4a1a1.wardenBeam, _0x218fff, _0x118a88, -0.12);
        _0x296115(_0xb4a1a1.wardenBeamCore, _0x218fff, _0x118a88, 0.02);
        _0xb4a1a1.wardenBeam.scale.set(_0x59ae7c, _0x29ad11 ? 1 : 0.48, 1);
        _0xb4a1a1.wardenBeamCore.scale.set(_0x59ae7c, 1, 1);
        Gt(_0xb4a1a1.wardenBeamMat, _0x29ad11 ? _0x1a2931.capsule : _0x1a2931.mortarMark);
        Gt(_0xb4a1a1.wardenBeamCoreMat, _0x1a2931.mortarBlast);
        _0xb4a1a1.wardenBeamMat.opacity = _0x29ad11 ? 0.66 : 0.28;
        _0xb4a1a1.wardenBeamCoreMat.opacity = _0x29ad11 ? 0.76 : 0.46;
      }
      const _0x5c1475 = _0x2f75f3.state === "barrageTell";
      const _0x400efc = _0x2f75f3.state === "barrageBurst";
      const _0x3ca4c8 = vt(_0xb4a1a1, _0x2f75f3, "rack");
      const _0x13a913 = _0x3ca4c8 ? bt.s : _0x2f75f3.x - _0x2f75f3.dir * 2.02;
      const _0x554f55 = _0x3ca4c8 ? bt.y : _0x2f75f3.y + 0.42;
      _0xb4a1a1.wardenRack.visible = _0x5c1475 || _0x400efc;
      if (_0xb4a1a1.wardenRack.visible) {
        _0x296115(_0xb4a1a1.wardenRack, _0x13a913, _0x554f55, 0.28);
        _0xb4a1a1.wardenRack.scale.setScalar(_0x400efc ? 1.38 : 0.76 + _0x2371f1 * 0.3);
        Gt(_0xb4a1a1.wardenRackMat, _0x400efc ? _0x1a2931.mortarBlast : _0x1a2931.mortarMark);
        _0xb4a1a1.wardenRackMat.opacity = _0x400efc ? 1 : 0.5 + _0x2371f1 * 0.28;
      }
      _0xb4a1a1.wardenMark.visible = _0x5c1475 || _0x400efc;
      _0xb4a1a1.wardenBlast.visible = _0x400efc;
      if (_0xb4a1a1.wardenMark.visible) {
        _0x296115(_0xb4a1a1.wardenMark, _0x2f75f3.zoneX, _0x2f75f3.zoneY + 0.08, -0.08);
        const _0x24759d = _0x5c1475 ? 1 - Math.max(0, (_0x2f75f3.stateUntil - _0x1b5862) / _0x11d2b5.barrageTellMs) : 1;
        const _0x278876 = _0x11d2b5.barrageHalf * (0.74 + _0x24759d * 0.26);
        _0xb4a1a1.wardenMark.scale.set(_0x278876, _0x278876 * 0.58, 1);
        Gt(_0xb4a1a1.wardenMarkMat, _0x400efc ? _0x1a2931.mortarBlast : _0x1a2931.mortarMark);
        _0xb4a1a1.wardenMarkMat.opacity = _0x400efc ? 0.98 : 0.34 + _0x24759d * 0.44;
      }
      if (_0x400efc) {
        _0x296115(_0xb4a1a1.wardenBlast, _0x2f75f3.zoneX, _0x2f75f3.zoneY + _0x11d2b5.barrageHeight / 2, -0.52);
        Gt(_0xb4a1a1.wardenBlastMat, _0x1a2931.mortarBlast);
        _0xb4a1a1.wardenBlastMat.opacity = 0.38;
      }
      _0xb4a1a1.mat.emissiveIntensity = 0;
    })(_0x3bf914, _0x272609);
  }
  if (_0x3bf914.lamp) {
    Tt[_0x272609.kind](_0x3bf914, _0x272609);
  }
  if (_0x3bf914.presenter.id !== "ecology") {
    (function (_0x3872fc, _0x1e9349, _0x2309e0, _0x470201, _0x54cb54, _0x10884f) {
      const _0x5274f6 = _0x3872fc.actorBox;
      if (!_0x5274f6) {
        return;
      }
      if (!_0x10884f) {
        _0x3872fc.actorGlow.visible = false;
        return;
      }
      const _0x383420 = Rt(_0x1e9349);
      const _0x2b7ddc = 0.96 + Math.sin(_0x1b5862 * 0.009 + _0x1e9349.id * 0.71) * 0.04;
      _0x3872fc.actorGlow.visible = true;
      _0x296115(_0x3872fc.actorGlow, _0x1e9349.x + _0x5274f6.cx * _0x383420 * _0x3872fc.presentationScale, _0x1e9349.y + _0x3872fc.presentationLift + _0x5274f6.cy * _0x3872fc.presentationScale, -0.1);
      _0x3872fc.actorGlow.rotation.z = _0x3872fc.sprite ? At(_0x1e9349, _0x2309e0) : _0x2309e0.roll(_0x1e9349);
      _0x3872fc.actorGlow.scale.set(_0x5274f6.w * _0x470201 * 1.48 * _0x2b7ddc, _0x5274f6.h * _0x54cb54 * 1.62 * _0x2b7ddc, 1);
      _0x3872fc.actorGlowMat.color.setHex(_0x2309e0.pose && _0x2309e0.pose(_0x1e9349).glow || _0x2309e0.color);
      _0x3872fc.actorGlowMat.opacity = _0x3872fc.mat.opacity * (_0x1e9349.kind === "warden" ? 0.2 : 0.17);
    })(_0x3bf914, _0x272609, _0x512e2e, _0x163fb7, _0x2ffe7a, _0x5d9aa9);
  }
  (function (_0xd9def1, _0x4f7340) {
    if (_0xd9def1.attackWake) {
      _0xd9def1.attackWake.visible = false;
    }
    if (_0xd9def1.tellLane) {
      _0xd9def1.tellLane.visible = false;
    }
    if (_0x4f7340.kind === "wasp" && _0xd9def1.attackWake && ot(_0x4f7340)) {
      const _0x269a2d = Math.max(0.001, Math.hypot(_0x4f7340.vx, _0x4f7340.vy));
      const _0x381d7d = _0x4f7340.vx / _0x269a2d;
      const _0x100671 = _0x4f7340.vy / _0x269a2d;
      const _0x2b70a1 = st(_0x4f7340);
      const _0xf8d8b4 = _0x2b70a1 ? 1.65 : 0.72;
      _0xd9def1.attackWake.visible = true;
      _0x296115(_0xd9def1.attackWake, _0x4f7340.x - _0x381d7d * _0xf8d8b4 * 0.43, _0x4f7340.y - _0x100671 * _0xf8d8b4 * 0.43, -0.06);
      _0xd9def1.attackWake.rotation.z = Math.atan2(_0x4f7340.vy, _0x4f7340.vx);
      _0xd9def1.attackWake.scale.set(_0xf8d8b4, _0x2b70a1 ? 0.34 : 0.18, 1);
      Gt(_0xd9def1.attackWakeMat, _0x1a2931.waspDive);
      _0xd9def1.attackWakeMat.opacity = _0x2b70a1 ? 0.52 : 0.24;
      return;
    }
    if (_0x4f7340.kind === "hound") {
      const _0x438a6c = _0x12857a.hound;
      if (_0x4f7340.state === "tell" && _0xd9def1.tellLane) {
        const _0x1dc885 = _0x4f7340.stateUntil - _0x1b5862;
        if (_0x1dc885 > _0x438a6c.tellCoilMs) {
          return;
        }
        const _0x2ddf4f = 1 - Math.max(0, _0x1dc885 / _0x438a6c.tellCoilMs);
        const _0x490827 = 1.35;
        _0xd9def1.tellLane.visible = true;
        _0x296115(_0xd9def1.tellLane, _0x4f7340.x + _0x4f7340.dir * _0x490827 / 2, _0x4f7340.y - _0x438a6c.rideY + 0.11, -0.05);
        _0xd9def1.tellLane.scale.set(_0x4f7340.dir * _0x490827, 0.24 + _0x2ddf4f * 0.08, 1);
        Gt(_0xd9def1.tellLaneMat, _0x1a2931.houndTell);
        _0xd9def1.tellLaneMat.opacity = 0.2 + _0x2ddf4f * 0.3;
      } else if (_0x4f7340.state === "charge" && _0xd9def1.attackWake) {
        const _0x38d97b = 2.35;
        _0xd9def1.attackWake.visible = true;
        _0x296115(_0xd9def1.attackWake, _0x4f7340.x - _0x4f7340.dir * _0x38d97b * 0.42, _0x4f7340.y, -0.06);
        _0xd9def1.attackWake.scale.set(_0x4f7340.dir * _0x38d97b, 0.56, 1);
        Gt(_0xd9def1.attackWakeMat, _0x1a2931.houndCharge);
        _0xd9def1.attackWakeMat.opacity = 0.58;
      }
      return;
    }
    if (_0x4f7340.kind === "polyp" && _0x4f7340.state === "tell" && _0xd9def1.tellLane) {
      const _0x39ff51 = _0x12857a.polyp;
      const _0x270d85 = Math.max(0, _0x4f7340.stateUntil - _0x1b5862);
      if (_0x270d85 > _0x39ff51.commitCueMs) {
        return;
      }
      const _0x176205 = 1 - Math.max(0, Math.min(1, _0x270d85 / _0x39ff51.commitCueMs));
      const _0x2bfca1 = 1.25;
      const _0x3d8a69 = vt(_0xd9def1, _0x4f7340, "muzzle");
      const _0xdd0d8 = _0x3d8a69 ? bt.s : _0x4f7340.x + _0x4f7340.dir * _0x39ff51.barrelTiles;
      const _0x34846c = _0x3d8a69 ? bt.y : _0x4f7340.y;
      _0xd9def1.tellLane.visible = true;
      _0x296115(_0xd9def1.tellLane, _0xdd0d8 + _0x4f7340.dir * _0x2bfca1 / 2, _0x34846c, -0.04);
      _0xd9def1.tellLane.scale.set(_0x4f7340.dir * _0x2bfca1, 0.16 + _0x176205 * 0.1, 1);
      Gt(_0xd9def1.tellLaneMat, _0x1a2931.polypTell);
      _0xd9def1.tellLaneMat.opacity = 0.22 + _0x176205 * 0.36;
    }
  })(_0x3bf914, _0x272609);
  (function (_0x2e5ea4, _0x2341b0) {
    if (!_0x2e5ea4.zoneClamp) {
      return;
    }
    const _0x250e82 = _0x2341b0.state === "lob" || _0x2341b0.state === "fuse" || _0x2341b0.state === "burst";
    _0x2e5ea4.zoneClamp.visible = _0x250e82;
    if (!_0x250e82) {
      return;
    }
    const _0x1af56d = _0x12857a.mortar;
    const _0x51ea54 = 0.5 + Math.sin(_0x1b5862 * (_0x2341b0.state === "fuse" ? 0.028 : 0.014)) * 0.5;
    const _0x50ccb6 = _0x2341b0.state === "burst";
    const _0x53569f = _0x1af56d.blastHalf * 2 * (_0x50ccb6 ? 1.04 : 0.86 + _0x51ea54 * 0.07);
    const _0x2934c7 = _0x50ccb6 ? 1.04 : 0.52 + _0x51ea54 * 0.12;
    _0x296115(_0x2e5ea4.zoneClamp, _0x2341b0.zoneX, _0x2341b0.zoneY + _0x2934c7 * 0.5, -0.08);
    _0x2e5ea4.zoneClamp.scale.set(_0x53569f, _0x2934c7, 1);
    Gt(_0x2e5ea4.zoneClampMat, _0x50ccb6 ? _0x1a2931.mortarBlast : _0x1a2931.mortarMark);
    _0x2e5ea4.zoneClampMat.opacity = _0x50ccb6 ? 0.88 : 0.3 + _0x51ea54 * 0.3;
  })(_0x3bf914, _0x272609);
  Wt(_0x3bf914, _0x272609, _0x1b7cce, _0x163fb7, _0x2ffe7a);
  (function (_0x4a3c0b, _0x54fe0e, _0x3d54e6) {
    if (!_0x4a3c0b.flapMesh) {
      return;
    }
    const _0x27b129 = _0x4a3c0b.mat.opacity;
    if (_0x54fe0e.state === "dive") {
      _0x4a3c0b.flapMix = 0;
      _0x4a3c0b.flapMesh.visible = false;
      _0x4a3c0b.flapMat.opacity = 0;
      return;
    }
    const _0x3d5ad6 = 0.5 + Math.sin(_0x54fe0e.t * 20 + _0x54fe0e.id * 1.73) * 0.5;
    const _0x194381 = Math.max(0, Math.min(1, (_0x3d5ad6 - 0.28) / 0.44));
    const _0x2b7fe9 = _0x194381 * _0x194381 * (3 - _0x194381 * 2);
    _0x4a3c0b.flapMix = _0x2b7fe9;
    _0x4a3c0b.flapMesh.visible = _0x4a3c0b.mesh.visible && _0x27b129 > 0.001;
    _0x296115(_0x4a3c0b.flapMesh, _0x54fe0e.x, _0x54fe0e.y + _0x4a3c0b.presentationLift, _0x3d54e6 + 0.012);
    _0x4a3c0b.flapMesh.rotation.z = _0x4a3c0b.mesh.rotation.z;
    _0x4a3c0b.flapMesh.scale.copy(_0x4a3c0b.mesh.scale);
    _0x4a3c0b.flapMesh.scale.y *= 0.97 + _0x2b7fe9 * 0.03;
    _0x4a3c0b.flapMat.emissive.copy(_0x4a3c0b.mat.emissive);
    _0x4a3c0b.flapMat.emissiveIntensity = _0x4a3c0b.mat.emissiveIntensity;
    _0x4a3c0b.flapMat.opacity = _0x27b129 * _0x2b7fe9;
    _0x4a3c0b.mat.opacity = _0x27b129 * (1 - _0x2b7fe9);
  })(_0x3bf914, _0x272609, _0x1b7cce);
  _0x58c4c6(_0x272609, _0x272609.x, _0x272609.y, ge[_0x272609.kind]);
}
let sa = false;
export function initHostileView() {
  return !sa && (_0x1ab3fb({
    hostiles: {
      spawned: Nt,
      removed: Qt,
      sync: oa
    }
  }), sa = true, true);
}
export function mountHostileWarmResources() {
  const _0x433665 = new _0x3597fd.Group();
  _0x433665.name = "Boot-only hostile geometry warm mount";
  const _0x3a1215 = new Map();
  const _0x356cd0 = new Set();
  const _0x196b48 = (_0x14008f, _0x4702bc, _0x10042e = null) => {
    if (!_0x14008f || _0x356cd0.has(_0x14008f)) {
      return;
    }
    _0x356cd0.add(_0x14008f);
    const _0x349c93 = new _0x3597fd.Mesh(_0x14008f, ((_0x242bae, _0x10d893) => {
      const _0x2e8e50 = _0x242bae + ":" + (_0x10d893?.uuid || "none");
      let _0x552924 = _0x3a1215.get(_0x2e8e50);
      if (!_0x552924) {
        _0x552924 = _0x10d893 ? zt(_0x10d893, _0x242bae) : new _0x3597fd.MeshBasicMaterial({
          color: 16777215
        });
        _0x3a1215.set(_0x2e8e50, _0x552924);
      }
      return _0x552924;
    })(_0x4702bc, _0x10042e));
    _0x349c93.frustumCulled = false;
    _0x433665.add(_0x349c93);
  };
  for (const _0x47faa5 of _0x27eda8()) {
    const _0x2300ae = _0x3b6dac(_0x47faa5.geo.userData.variantId, _0x47faa5.kind);
    _0x196b48(_0x47faa5.geo, _0x47faa5.kind, _0x2300ae?.tex || null);
  }
  for (const _0x2f6b04 of Object.keys(nt)) {
    const _0x394779 = _0x21a16e(_0x2f6b04);
    if (_0x394779) {
      for (const _0x3fae48 of _0x394779.frames) {
        _0x196b48(_0x3fae48.geo, _0x2f6b04, _0x394779.tex);
      }
    }
    _0x196b48(ft(_0x2f6b04), _0x2f6b04, _0x2015d3(_0x2f6b04));
    _0x196b48(gt(_0x2f6b04), _0x2f6b04, _0x205284(_0x2f6b04));
    _0x196b48(Mt(_0x2f6b04), _0x2f6b04, _0x47a3eb(_0x2f6b04));
    const _0x549819 = dt(_0x2f6b04);
    if (_0x549819) {
      for (const _0x1e5a3a of _0x549819) {
        _0x196b48(_0x1e5a3a, _0x2f6b04, ue.get(_0x2f6b04));
      }
    }
  }
  const _0xc40443 = _0x5a8627();
  if (_0xc40443) {
    for (const _0x96dd98 of _0xc40443.body) {
      _0x196b48(_0x96dd98.geo, "wasp", _0xc40443.tex);
    }
    for (const _0x3f5a8c of _0xc40443.wings) {
      _0x196b48(_0x3f5a8c.geo, "wasp", _0xc40443.tex);
    }
  }
  _0x48d2c7.add(_0x433665);
  return Object.freeze({
    geometries: _0x356cd0.size,
    dispose() {
      _0x48d2c7.remove(_0x433665);
      for (const _0x3f5127 of _0x3a1215.values()) {
        _0x3f5127.dispose();
      }
      _0x433665.clear();
    }
  });
}
export function hostileEvolutionVisualSnapshot() {
  let _0x186191 = 0;
  let _0x34e051 = 0;
  let _0x52e79b = 0;
  let _0x187700 = 0;
  let _0x26bd2d = 0;
  let _0xbcbd5a = 0;
  let _0x3545c8 = 0;
  let _0x1c3f8e = 0;
  let _0x43a6b9 = 0;
  let _0x3ac8a7 = 0;
  const _0xd36903 = {};
  const _0x167696 = [];
  const _0x11e16a = [];
  const _0x27c637 = [];
  const _0x5c36b8 = [];
  const _0x4cad64 = {
    wasp: new Set(),
    hound: new Set()
  };
  let _0x26f29c = null;
  for (const [_0x204980, _0x3ee4ce] of Ut) {
    if (_0x4cad64[_0x204980.kind] && _0x3ee4ce.motionFrame >= 0) {
      _0x4cad64[_0x204980.kind].add(_0x3ee4ce.motionFrame);
    }
    if (_0x3ee4ce.motionFrame >= 0 && _0x11e16a.length < 16) {
      _0x11e16a.push({
        kind: _0x204980.kind,
        id: _0x204980.id,
        frame: _0x3ee4ce.motionFrame,
        poseKey: _0x3ee4ce.poseKey,
        scale: [Math.abs(_0x3ee4ce.mesh.scale.x), Math.abs(_0x3ee4ce.mesh.scale.y), Math.abs(_0x3ee4ce.mesh.scale.z)].map(_0x199bbf => Number(_0x199bbf.toFixed(4))),
        presentationScale: _0x3ee4ce.presentationScale,
        atlasOwnsSilhouette: wt(_0x3ee4ce, _0x204980),
        presenter: _0x3ee4ce.presenter.id
      });
    }
    if (_0x3ee4ce.waspModular && _0x5c36b8.length < 24) {
      _0x5c36b8.push({
        id: _0x204980.id,
        state: _0x204980.state,
        bodyState: _0x3ee4ce.waspBodyState,
        wingPhase: _0x3ee4ce.waspWingPhase,
        poseKey: _0x3ee4ce.poseKey,
        bodyDepth: Number.isFinite(_0x3ee4ce.waspBodyDepth) ? Number(_0x3ee4ce.waspBodyDepth.toFixed(4)) : null,
        wingDepth: Number.isFinite(_0x3ee4ce.waspWingDepth) ? Number(_0x3ee4ce.waspWingDepth.toFixed(4)) : null,
        platformOuterDepth: Bt,
        fullyOnActionPlane: _0x3ee4ce.waspWingDepth > Bt,
        rootContinuity: true,
        mirroredAsAssembly: !!_0x3ee4ce.waspWingMesh && Math.sign(_0x3ee4ce.waspWingMesh.scale.x) === Math.sign(_0x3ee4ce.mesh.scale.x),
        opacityMatched: !!_0x3ee4ce.waspWingMat && Math.abs(_0x3ee4ce.waspWingMat.opacity - _0x3ee4ce.mat.opacity) < 0.0001,
        idleWingEmissive: _0x3ee4ce.waspWingMat && _0x204980.state === "cruise" ? Number(_0x3ee4ce.waspWingMat.emissiveIntensity.toFixed(4)) : null
      });
    }
    if (_0x3ee4ce.presenter.id === "actor" && wt(_0x3ee4ce, _0x204980) && _0x27c637.length < 24) {
      _0x27c637.push({
        kind: _0x204980.kind,
        id: _0x204980.id,
        state: _0x204980.state,
        frame: _0x3ee4ce.motionFrame,
        frameName: _0x3ee4ce.actorMotionFrame.name,
        clip: _0x3ee4ce.actorMotionClip,
        marker: _0x3ee4ce.actorMotionMarker,
        event: _0x3ee4ce.actorMotionEvent,
        progress: Number(_0x3ee4ce.actorMotionProgress.toFixed(3)),
        poseKey: _0x3ee4ce.poseKey,
        bodyMeshes: 1,
        bodyRotation: Number(_0x3ee4ce.mesh.rotation.z.toFixed(4)),
        bodyScale: [Math.abs(_0x3ee4ce.mesh.scale.x), Math.abs(_0x3ee4ce.mesh.scale.y), Math.abs(_0x3ee4ce.mesh.scale.z)].map(_0x3b776c => Number(_0x3b776c.toFixed(4))),
        bodyOpacity: Number(_0x3ee4ce.mat.opacity.toFixed(4)),
        bodyEmission: Number((_0x3ee4ce.mat.emissiveIntensity || 0).toFixed(4)),
        rootedLifecycle: _0x204980.kind === "warden",
        deployment: _0x3ee4ce.actorMotionClip === "deployment",
        anchorRole: _0x3ee4ce.actorMotionBundle.spec.anchorRole,
        visibleAttachments: _0x204980.kind === "warden" ? [_0x3ee4ce.wardenCore, _0x3ee4ce.wardenShield, _0x3ee4ce.wardenEmitter, _0x3ee4ce.wardenRack, _0x3ee4ce.wardenBeam, _0x3ee4ce.wardenBeamCore, _0x3ee4ce.wardenMark, _0x3ee4ce.wardenBlast, ..._0x3ee4ce.wardenSeals.map(_0x20ccfa => _0x20ccfa.mesh)].reduce((_0x13676c, _0x369a23) => _0x13676c + (_0x369a23?.visible ? 1 : 0), 0) : 0,
        uniformStateTransform: false
      });
    }
    if (_0x3ee4ce.flapMesh) {
      _0x186191++;
      if (_0x3ee4ce.flapMesh.visible) {
        _0x34e051++;
      }
      if (!_0x26f29c && _0x3ee4ce.flapMesh.visible) {
        _0x26f29c = {
          id: _0x204980.id,
          state: _0x204980.state,
          mix: Number(_0x3ee4ce.flapMix.toFixed(3)),
          baseOpacity: Number(_0x3ee4ce.mat.opacity.toFixed(3)),
          downstrokeOpacity: Number(_0x3ee4ce.flapMat.opacity.toFixed(3))
        };
      }
    }
    if (_0x204980.aegis) {
      _0x52e79b++;
    }
    if (_0x3ee4ce.wardRing?.visible) {
      _0x187700++;
    }
    if (_0x204980.pincer) {
      _0x26bd2d++;
    }
    for (const _0x5e3df7 of _0x3ee4ce.paintedGeneRows || []) {
      _0x3ac8a7++;
      _0xd36903[_0x5e3df7.gene] = (_0xd36903[_0x5e3df7.gene] || 0) + 1;
    }
    if (_0x3ee4ce.bulwarkPlates || _0x3ee4ce.paintedGenes?.has("BULWARK")) {
      _0xbcbd5a++;
    }
    if (_0x3ee4ce.vaultCoils || _0x3ee4ce.paintedGenes?.has("VAULT")) {
      _0x3545c8++;
    }
    if (_0x3ee4ce.attackRails || _0x3ee4ce.paintedGenes?.has("TWINSTRIKE") || _0x3ee4ce.paintedGenes?.has("SALVO") || _0x3ee4ce.paintedGenes?.has("RELAY")) {
      _0x1c3f8e++;
    }
    if (_0x3ee4ce.backlashArcs || _0x3ee4ce.paintedGenes?.has("BACKLASH")) {
      _0x43a6b9++;
    }
    if (_0x204980.genome?.mutated && _0x167696.length < 12) {
      _0x167696.push({
        id: _0x204980.id,
        label: _0x204980.genome.label,
        strain: _0x204980.genome.strain?.id || "",
        expressedBudget: _0x204980.genome.expressedBudget,
        wardPolicy: _0x204980.wardPolicy,
        salvoPattern: _0x204980.salvoPattern,
        genes: [..._0x204980.genome.genes],
        painted: (_0x3ee4ce.paintedGeneRows || []).map(_0x4acb88 => ({
          gene: _0x4acb88.gene,
          visible: _0x4acb88.mesh.visible,
          worldSize: Number((_0x4acb88.worldSize || 0).toFixed(3))
        })),
        state: _0x204980.state,
        bulwarkOpen: _0x1b5862 < _0x204980.bulwarkOpenUntil,
        backlashArmed: !!_0x204980.backlashUntil
      });
    }
  }
  return {
    paintedFlappers: _0x186191,
    paintedDownstrokesVisible: _0x34e051,
    anchors: _0x52e79b,
    shielded: _0x187700,
    pincers: _0x26bd2d,
    bulwarks: _0xbcbd5a,
    vaults: _0x3545c8,
    attackRacks: _0x1c3f8e,
    backlashes: _0x43a6b9,
    paintedParts: _0x3ac8a7,
    paintedByGene: _0xd36903,
    atlas: _0x156936(),
    poseNormalization: [["wasp", "action", _0x20a60f("wasp")], ["wasp", "flap", _0x3915d6("wasp")], ["hound", "action", _0x20a60f("hound")]].map(([_0x5b9516, _0x49e5a1, _0xbb740c]) => {
      const _0x885e5 = _0x3cda8b(_0x5b9516, _0x211828(_0x5b9516));
      const _0x5c93cc = mt(_0x5b9516, _0x49e5a1, _0xbb740c);
      return {
        kind: _0x5b9516,
        pose: _0x49e5a1,
        targetShare: pt[_0x5b9516][_0x49e5a1],
        gain: Number(_0x5c93cc.toFixed(3)),
        widthGain: 1,
        opaqueHeightBefore: Number(_0xbb740c.inkH.toFixed(3)),
        opaqueHeightAfter: Number((_0xbb740c.inkH * _0x5c93cc).toFixed(3)),
        baseOpaqueHeight: Number(_0x885e5.inkH.toFixed(3)),
        anchorY: Number(ht(_0x5b9516).toFixed(3)),
        collisionChanged: false
      };
    }),
    locomotion: Object.fromEntries(Object.entries(_0x572583).map(([_0x50dafd, _0x2db8b5]) => [_0x50dafd, {
      ready: ue.has(_0x50dafd),
      frameCount: _0x2db8b5.frames.length,
      activeFrames: [..._0x4cad64[_0x50dafd]].sort((_0x345eb1, _0x17c04c) => _0x345eb1 - _0x17c04c),
      oneBodyMesh: true,
      crossfade: false
    }])),
    actorMotion: {
      ..._0x434da1(),
      liveBodies: _0x27c637.length,
      bodyDraws: _0x27c637.length,
      fixedFrameGeometries: _0x434da1().geometries,
      rows: _0x27c637
    },
    waspModular: {
      ..._0x2127d6(),
      liveBodies: _0x5c36b8.length,
      liveDraws: _0x5c36b8.length * 2,
      rootAnchor: "reactor-center",
      independentBodyAndWingSelection: true,
      opacityStrobe: false,
      idleWingBloom: false,
      platformOuterDepth: Bt,
      activeMinimumWingDepth: 1.15 - _0x12857a.wasp.wobbleAmp - St,
      rows: _0x5c36b8
    },
    genomes: _0x167696,
    flapSample: _0x26f29c,
    motionRows: _0x11e16a
  };
}
if (typeof window != "undefined") {
  window.__HB_HOSTILE_EVOLUTION_VISUAL = hostileEvolutionVisualSnapshot;
}
const na = [];
function ia(_0x583118) {
  _0x48d2c7.remove(_0x583118.mesh);
  if (_0x583118.ecologyActionMat) {
    _0x583118.ecologyActionMat.dispose();
    Ht++;
    Et++;
  }
  _0x583118.mat.dispose();
  (function (_0x3da44e) {
    if (_0x3da44e) {
      _0x3da44e.inUse = false;
      _0x3da44e.mat.opacity = 0;
      for (const _0x20b7ef of _0x3da44e.pieces) {
        _0x20b7ef.mesh.visible = false;
      }
    }
  })(_0x583118.rig);
  for (const _0x2c47ef of _0x583118.systems) {
    _0x48d2c7.remove(_0x2c47ef.mesh);
    _0x2c47ef.mat.dispose();
  }
}
function ra(_0x2da7bf, _0x1fb674) {
  const _0xac87a6 = 1 - (1 - _0x1fb674) ** 3;
  const _0x24f751 = Math.max(0, 1 - _0x1fb674 ** 1.4);
  for (const _0x2b0fac of _0x2da7bf.systems) {
    if (_0x2b0fac.type === "wasp-wing-bank") {
      _0x2b0fac.mesh.visible = _0x24f751 > 0.01;
      _0x296115(_0x2b0fac.mesh, _0x2da7bf.s - _0x2da7bf.breakDir * 0.24 * _0xac87a6, _0x2da7bf.y + Math.sin(Math.PI * _0x1fb674) * 0.34 - _0x1fb674 * 1.08 * _0x1fb674, _0x2b0fac.depth - _0x1fb674 * 0.34);
      _0x2b0fac.mesh.rotation.z = _0x2b0fac.rotation - _0x2da7bf.breakDir * 0.64 * _0xac87a6;
      const _0x364a4b = Math.max(0.3, 1 - _0xac87a6 * 0.36);
      _0x2b0fac.mesh.scale.set(_0x2b0fac.sx * _0x2b0fac.face * _0x364a4b, _0x2b0fac.sy * (1 - _0xac87a6 * 0.18), _0x2b0fac.sz * _0x364a4b);
      _0x2b0fac.mat.emissive.setHex(_0x1fb674 < 0.12 ? _0x2da7bf.flash : _0x1a2931.glowOff);
      _0x2b0fac.mat.emissiveIntensity = _0x140e57() * (_0x1fb674 < 0.12 ? 0.72 : 0);
    } else if (_0x2b0fac.type.startsWith("aegis")) {
      const _0x1d573c = _0x2b0fac.type === "aegis-core";
      const _0x3c0b23 = _0x1d573c ? Math.sin(Math.PI * _0x1fb674) * 0.28 : 0;
      _0x296115(_0x2b0fac.mesh, _0x2da7bf.s + _0x2da7bf.breakDir * (_0x1d573c ? 0.13 : 0.04) * _0xac87a6, _0x2da7bf.y + _0x2b0fac.yOffset + _0x3c0b23 - (_0x1d573c ? 0.34 : 0.54) * _0x1fb674 * _0x1fb674, 1.3699999999999999 - _0x1fb674 * 0.4);
      _0x2b0fac.mesh.rotation.z = _0x2b0fac.rotation + _0x2da7bf.breakDir * (_0x1d573c ? 0.42 : 0.68) * _0xac87a6;
      const _0x1d30f5 = Math.max(0.08, 1 - (_0x1d573c ? 0.78 : 0.88) * _0xac87a6);
      _0x2b0fac.mesh.scale.set(_0x2b0fac.sx * _0x1d30f5, _0x2b0fac.sy * _0x1d30f5, _0x2b0fac.sz * _0x1d30f5);
    } else {
      const _0x267a12 = _0x2b0fac.type === "backlash-painted";
      const _0x36cc9f = _0x267a12 ? 0 : _0x2b0fac.index - 1;
      _0x296115(_0x2b0fac.mesh, _0x2da7bf.s + _0x36cc9f * 0.05 * _0x2da7bf.face * _0xac87a6, _0x2da7bf.y - _0x1fb674 * 0.18 * _0x1fb674, 1.3399999999999999 - _0x1fb674 * 0.24);
      _0x2b0fac.mesh.rotation.z = _0x2b0fac.rotation + (_0x267a12 ? _0x2da7bf.breakDir * 0.14 : -_0x36cc9f * 0.22) * _0xac87a6;
      const _0x4fe6d0 = Math.max(_0x267a12 ? 0.1 : 0.16, 1 - (_0x267a12 ? 0.88 : 0.78) * _0xac87a6);
      _0x2b0fac.mesh.scale.set(_0x2b0fac.sx * _0x4fe6d0, _0x2b0fac.sy * _0x4fe6d0, _0x2b0fac.sz * _0x4fe6d0);
    }
    _0x2b0fac.mat.opacity = _0x2b0fac.opacity * _0x24f751;
  }
}
function la(_0x576730, _0x16588e) {
  let _0x3af43c = 0.02;
  let _0x3e2aa4 = 0.36;
  if (_0x576730 === "crown") {
    _0x3af43c = 0.1;
    _0x3e2aa4 = 0.48;
  } else if (_0x576730 === "mount") {
    _0x3af43c = 0.04;
    _0x3e2aa4 = 0.62;
  } else if (_0x576730 === "core") {
    _0x3af43c = 0.44;
    _0x3e2aa4 = 0.38;
  }
  const _0x182f6a = (_0x16588e - _0x3af43c) / _0x3e2aa4;
  if (_0x182f6a <= 0) {
    return 0;
  } else if (_0x182f6a >= 1) {
    return 1;
  } else {
    return _0x182f6a;
  }
}
export function updateCorpses() {
  for (let _0x48e851 = na.length - 1; _0x48e851 >= 0; _0x48e851--) {
    const _0x2266f6 = na[_0x48e851];
    const _0x34e51b = _0x1b5862 - _0x2266f6.t0;
    if (_0x34e51b / _0x2266f6.spec.ms >= 1) {
      ia(_0x2266f6);
      na.splice(_0x48e851, 1);
      continue;
    }
    if (!_0x257417(_0x2266f6.s)) {
      _0x2266f6.mesh.visible = false;
      if (_0x2266f6.rig) {
        for (const _0x9f35b0 of _0x2266f6.rig.pieces) {
          _0x9f35b0.mesh.visible = false;
        }
      }
      for (const _0x502cd2 of _0x2266f6.systems) {
        _0x502cd2.mesh.visible = false;
      }
      continue;
    }
    if (_0x34e51b < _0x2266f6.spec.punchMs) {
      const _0x3352bd = _0x34e51b / _0x2266f6.spec.punchMs;
      const _0x10d13b = Math.sin(_0x3352bd * Math.PI);
      const _0x416df7 = !!_0x2266f6.frozenMotion?.rootedTerminal;
      _0x2266f6.mesh.visible = true;
      _0x296115(_0x2266f6.mesh, _0x416df7 ? _0x2266f6.s : _0x2266f6.s - _0x2266f6.breakDir * 0.08 * _0x10d13b, _0x2266f6.y, 1.15 - (_0x416df7 ? 0 : _0x10d13b * 0.12));
      _0x2266f6.mesh.rotation.z = _0x416df7 ? 0 : _0x2266f6.baseRoll + _0x2266f6.breakDir * 0.08 * _0x3352bd;
      const _0x3b42eb = _0x2266f6.ecologyDeath || _0x416df7 ? 1 : 1 + _0x10d13b * 0.16;
      _0x2266f6.mesh.scale.set(_0x2266f6.baseScaleX * _0x2266f6.face * _0x3b42eb, _0x2266f6.baseScaleY * _0x3b42eb, _0x2266f6.baseScaleZ * _0x3b42eb);
      _0x2266f6.mat.opacity = 1;
      if (_0x2266f6.mat.emissive) {
        _0x2266f6.mat.emissive.setHex(_0x2266f6.ecologyDeath ? _0x1a2931.glowOff : _0x2266f6.flash);
        _0x2266f6.mat.emissiveIntensity = _0x2266f6.ecologyDeath ? 0 : _0x140e57();
      }
      if (_0x2266f6.ecologyActionMat) {
        _0x2266f6.ecologyActionMesh.visible = true;
        _0x2266f6.ecologyActionMat.opacity = 1;
      }
      if (_0x2266f6.rig) {
        _0x2266f6.rig.mat.opacity = 0;
        for (const _0x5d7560 of _0x2266f6.rig.pieces) {
          _0x5d7560.mesh.visible = false;
        }
      }
      ra(_0x2266f6, 0);
      continue;
    }
    const _0x524dd3 = Math.min(1, (_0x34e51b - _0x2266f6.spec.punchMs) / (_0x2266f6.spec.ms - _0x2266f6.spec.punchMs));
    const _0x12401e = 1 - (1 - _0x524dd3) ** 3;
    const _0x22ca91 = _0x2266f6.kind === "warden";
    const _0x5df0a9 = !!_0x2266f6.frozenMotion?.rootedTerminal;
    const _0x1074f0 = _0x5df0a9 ? _0x2266f6.s : _0x2266f6.s + _0x2266f6.breakDir * _0x2266f6.spec.drift * (_0x22ca91 ? _0x524dd3 * _0x524dd3 : _0x524dd3);
    const _0x530eb7 = _0x5df0a9 ? _0x2266f6.y : _0x2266f6.y - _0x2266f6.spec.fall * _0x524dd3 * _0x524dd3;
    const _0x598255 = 1.15 + (_0x5df0a9 ? _0x2266f6.spec.depth * Math.max(0, (_0x524dd3 - 0.72) / 0.28) : _0x2266f6.spec.depth * _0x524dd3);
    const _0x332fd7 = _0x5df0a9 ? 0 : _0x2266f6.baseRoll + _0x2266f6.breakDir * _0x2266f6.spec.tilt * _0x12401e;
    const _0x1843e7 = _0x2266f6.ecologyDeath || _0x5df0a9 ? 1 : 1 + (_0x2266f6.spec.sx - 1) * _0x12401e;
    const _0x53849c = _0x2266f6.ecologyDeath || _0x5df0a9 ? 1 : 1 + (_0x2266f6.spec.sy - 1) * _0x12401e;
    const _0x35b695 = _0x2266f6.ecologyDeath || _0x5df0a9 ? 1 : 1 - _0x12401e * 0.28;
    const _0x3dfa78 = _0x22ca91 ? _0x524dd3 < 0.72 ? 1 : Math.max(0, (1 - _0x524dd3) / 0.28) ** 1.25 : Math.max(0, 1 - _0x524dd3 ** 1.45);
    if (_0x2266f6.rig) {
      _0x2266f6.mesh.visible = false;
      _0x2266f6.rig.mat.opacity = _0x3dfa78;
      _0x2266f6.rig.mat.emissive.setHex(_0x524dd3 < 0.12 ? _0x2266f6.flash : _0x1a2931.glowOff);
      _0x2266f6.rig.mat.emissiveIntensity = _0x140e57() * (_0x524dd3 < 0.12 ? 0.86 : 0.16);
      for (const _0x86900d of _0x2266f6.rig.pieces) {
        const _0x12481f = _0x86900d.def;
        const _0x5c92e0 = _0x22ca91 ? la(_0x12481f.stage, _0x524dd3) : _0x524dd3;
        const _0x13194 = _0x22ca91 ? 1 - (1 - _0x5c92e0) ** 3 : _0x12401e;
        _0x86900d.mesh.visible = _0x3dfa78 > 0.01;
        const _0x567de6 = Math.max(0.08, 1 - _0x12481f.shrink * _0x13194);
        _0x296115(_0x86900d.mesh, _0x1074f0 + _0x12481f.x * _0x2266f6.face * _0x13194, _0x530eb7 + _0x12481f.lift * Math.sin(Math.PI * _0x5c92e0) - _0x12481f.drop * _0x5c92e0 * _0x5c92e0, _0x598255 + _0x12481f.depth * _0x13194);
        _0x86900d.mesh.rotation.z = _0x332fd7 + _0x12481f.tilt * _0x2266f6.face * _0x13194;
        _0x86900d.mesh.scale.set(_0x2266f6.baseScaleX * _0x2266f6.face * _0x1843e7 * _0x567de6, _0x2266f6.baseScaleY * _0x53849c * _0x567de6, _0x2266f6.baseScaleZ * _0x35b695 * _0x567de6);
      }
    } else {
      _0x2266f6.mesh.visible = true;
      if (_0x2266f6.ecologyActionMesh) {
        _0x2266f6.ecologyActionMesh.visible = true;
      }
      _0x296115(_0x2266f6.mesh, _0x1074f0, _0x530eb7, _0x598255);
      _0x2266f6.mesh.rotation.z = _0x332fd7;
      _0x2266f6.mesh.scale.set(_0x2266f6.baseScaleX * _0x2266f6.face * _0x1843e7, _0x2266f6.baseScaleY * _0x53849c, _0x2266f6.baseScaleZ * _0x35b695);
      _0x2266f6.mat.opacity = _0x3dfa78;
      if (_0x2266f6.mat.emissive) {
        _0x2266f6.mat.emissive.setHex(_0x2266f6.ecologyDeath ? _0x1a2931.glowOff : _0x524dd3 < 0.12 ? _0x2266f6.flash : _0x1a2931.glowOff);
        if (_0x2266f6.ecologyDeath) {
          _0x2266f6.mat.emissiveIntensity = 0;
        }
      }
    }
    if (_0x2266f6.ecologyActionMat) {
      _0x2266f6.ecologyActionMat.opacity = _0x3dfa78;
    }
    ra(_0x2266f6, _0x524dd3);
  }
}
export function clearCorpses() {
  for (const _0x277117 of na) {
    ia(_0x277117);
  }
  na.length = 0;
}
export function hostileDeathVisualSnapshot() {
  let _0x5ed8d4 = 0;
  for (const _0x2f1e1e of Yt.values()) {
    for (const _0x1f0347 of _0x2f1e1e) {
      if (_0x1f0347.inUse) {
        _0x5ed8d4++;
      }
    }
  }
  return {
    active: na.length,
    pool: {
      rigs: Xt,
      activeRigs: _0x5ed8d4,
      maxRigs: 13,
      commonRigs: _t,
      wardenRigs: qt,
      planes: $t,
      maxPlanes: 66,
      maxCorpses: 12
    },
    rows: na.map(_0x4761ac => {
      const _0x3c4bfb = _0x4761ac.frozenMotion;
      const _0x4eda8f = !_0x3c4bfb || (Math.sign(_0x4761ac.mesh.scale.x) || _0x3c4bfb.face) === _0x3c4bfb.face;
      const _0x3dbba1 = !_0x3c4bfb || _0x4761ac.mesh.geometry === _0x3c4bfb.geometry && _0x4761ac.mat.map === _0x3c4bfb.map && _0x4761ac.mat.emissiveMap === _0x3c4bfb.emissiveMap && _0x4eda8f;
      return {
        kind: _0x4761ac.kind,
        ageMs: Math.max(0, Math.round(_0x1b5862 - _0x4761ac.t0)),
        lifetimeMs: _0x4761ac.spec.ms,
        phase: _0x1b5862 - _0x4761ac.t0 < _0x4761ac.spec.punchMs ? "impact" : _0x4761ac.kind !== "warden" ? "rupture" : _0x1b5862 - _0x4761ac.t0 < 650 ? "hardpoint-eject" : _0x1b5862 - _0x4761ac.t0 < 1010 ? "core-implosion" : "signal-collapse",
        paintedPieces: _0x4761ac.rig ? _0x4761ac.rig.pieces.length : 0,
        pieceTags: _0x4761ac.rig ? _0x4761ac.rig.pieces.map(_0x52e0c7 => _0x52e0c7.def.tag) : [],
        systems: _0x4761ac.systems.map(_0x350654 => _0x350654.type),
        ruptureMode: _0x4761ac.ecologyDeath ? "ecology-b7-a7" : _0x4761ac.kind === "warden" && _0x4761ac.rig ? "rooted-terminal-pieces" : _0x3c4bfb ? "frozen-motion" : _0x4761ac.rig ? "painted-pieces" : "intact-fallback",
        poseKey: _0x3c4bfb?.poseKey || "",
        motionFrame: _0x3c4bfb?.frame ?? -1,
        facingPreserved: _0x4eda8f,
        posePreserved: _0x3dbba1,
        deathCrack: _0x4761ac.kind === "wasp" && _0x3c4bfb?.frame === _0x59bec0.DEATH_CRACK,
        wingBankDetached: _0x4761ac.systems.some(_0x3f8164 => _0x3f8164.type === "wasp-wing-bank"),
        ecologyId: _0x4761ac.ecologyDeath?.id || "",
        ecologyBodyRow: _0x4761ac.ecologyDeath?.bodyRow ?? -1,
        ecologyActionRow: _0x4761ac.ecologyDeath?.actionRow ?? -1,
        ecologyCode: _0x4761ac.ecologyDeath?.code ?? -1,
        legacyDeathRig: !!_0x4761ac.ecologyDeath && !!_0x4761ac.rig,
        ecologyLayersAttached: !!_0x4761ac.ecologyDeath && _0x4761ac.ecologyActionMesh?.parent === _0x4761ac.mesh,
        ecologyOpacityMatched: !!_0x4761ac.ecologyDeath && Math.abs(_0x4761ac.mat.opacity - _0x4761ac.ecologyActionMat.opacity) < 0.0001,
        ecologyScaleFixed: !!_0x4761ac.ecologyDeath,
        shrink: !_0x4761ac.ecologyDeath && undefined,
        spiral: false,
        boundedBodyTiltRad: _0x4761ac.spec.tilt,
        boundedWingTiltRad: _0x4761ac.kind === "wasp" ? 0.64 : 0
      };
    })
  };
}
if (typeof window != "undefined") {
  window.__HB_HOSTILE_DEATH_VISUAL = hostileDeathVisualSnapshot;
}
const ca = new _0x3597fd.Vector3();
export function enemyEcologyVisualSnapshot() {
  const _0x56a7e8 = [];
  let _0x92ef97 = 0;
  let _0x55b19f = 0;
  const _0x3fe56b = new Set();
  for (const [_0x276292, _0x500cb0] of Ut) {
    if (!_0x500cb0.ecology) {
      _0x92ef97++;
      continue;
    }
    const _0x46db2e = !_0x276292.ecologyId && !!_0x276292.ecologyVisualId;
    if (_0x46db2e) {
      _0x55b19f++;
    }
    _0x3fe56b.add(_0x500cb0.mat.map);
    const _0x204c5f = _0x1b5862 >= _0x276292.enterUntil;
    const _0x130627 = _0x27829b(_0x276292, _0x1b5862, _0x12857a.wasp.enterMs);
    const _0x567fe7 = _0x3005a9(_0x500cb0, _0x276292);
    const _0x39dc3d = _0x500cb0.ecology.targetRootY;
    _0x500cb0.mesh.getWorldPosition(ca);
    ca.project(_0x5cdd8f);
    const _0x48c2e8 = _0x5144a1.domElement.getBoundingClientRect();
    const _0x57cbbe = (ca.x * 0.5 + 0.5) * _0x48c2e8.width;
    const _0x5a3504 = (0.5 - ca.y * 0.5) * _0x48c2e8.height;
    const _0x4512ad = _0x204c5f ? _0x500cb0.presentationLift + _0x39dc3d * Math.abs(_0x500cb0.mesh.scale.y) - _0x39dc3d : null;
    _0x56a7e8.push({
      id: _0x276292.id,
      ecologyId: _0x500cb0.ecology.spec.id,
      gameplayEcologyId: _0x276292.ecologyId || "",
      ecologyVisualId: _0x276292.ecologyVisualId || "",
      visualOnly: _0x46db2e,
      kind: _0x276292.kind,
      state: _0x276292.state,
      tacticState: _0x276292.tacticState,
      tacticPhase: _0x276292.tacticPhase,
      tacticProgress: Number((_0x276292.tacticProgress || 0).toFixed(3)),
      bodyRow: _0x500cb0.ecologyBodyRow,
      actionRow: _0x500cb0.ecologyActionRow,
      code: _0x500cb0.ecologyCode,
      poseKey: _0x500cb0.poseKey,
      presentationScale: _0x500cb0.presentationScale,
      screen: {
        x: Number(_0x57cbbe.toFixed(1)),
        y: Number(_0x5a3504.toFixed(1)),
        ndcZ: Number(ca.z.toFixed(4)),
        inFrame: Math.abs(ca.x) <= 1 && Math.abs(ca.y) <= 1 && ca.z >= -1 && ca.z <= 1
      },
      quads: 2,
      actionAttached: _0x500cb0.ecologyActionMesh.parent === _0x500cb0.mesh,
      actionOpacityMatched: Math.abs(_0x500cb0.ecologyActionMat.opacity - _0x500cb0.mat.opacity) < 0.0001,
      oneTexture: _0x500cb0.ecologyActionMat.map === _0x500cb0.mat.map,
      noEmissiveMaps: !_0x500cb0.mat.emissiveMap && !_0x500cb0.ecologyActionMat.emissiveMap,
      noIdleEmission: !_0x500cb0.mat.emissiveMap && !_0x500cb0.ecologyActionMat.emissiveMap && !_0x500cb0.mat.emissive && !_0x500cb0.ecologyActionMat.emissive,
      fullCellUv: !!_0x500cb0.mesh.geometry.userData.fullCellUv && !!_0x500cb0.ecologyActionMesh.geometry.userData.fullCellUv,
      sharedMirror: _0x500cb0.ecologyActionMesh.scale.x === 1 && _0x500cb0.ecologyActionMesh.scale.y === 1,
      rooted: _0x500cb0.ecology.spec.grounded,
      condensationStarted: _0x130627,
      bodyVisible: _0x500cb0.mesh.visible,
      actionVisible: _0x500cb0.ecologyActionMesh.visible,
      preCondensationHidden: _0x130627 || !_0x500cb0.mesh.visible && !_0x500cb0.ecologyActionMesh.visible && _0x567fe7.visible === 0 && !_0x500cb0.beam?.visible,
      settled: _0x204c5f,
      rootError: _0x4512ad === null ? null : Number(_0x4512ad.toFixed(6)),
      bodyDepth: Number((_0x500cb0.ecologyDepth || 0).toFixed(4)),
      actionDepth: Number(((_0x500cb0.ecologyDepth || 0) + _0x500cb0.ecologyActionMesh.position.z * Math.abs(_0x500cb0.mesh.scale.z)).toFixed(4)),
      fullyOnActionPlane: (_0x500cb0.ecologyDepth || 0) > Bt,
      noLegacyBodyLayers: !_0x500cb0.actorMotionBundle && !_0x500cb0.waspModular && !_0x500cb0.flapMesh && !_0x500cb0.lamp && !_0x500cb0.actorGlow,
      mechanicReadOwnership: {
        ..._0x500cb0.mechanicReadOwnership
      },
      optionalMechanicMeshes: _0x500cb0.evolutionMeshes?.length || 0,
      actionPresentation: {
        beamVisible: !!_0x500cb0.beam?.visible,
        beamLanguage: _0x500cb0.beam?.geometry.userData.actionLanguage || "",
        beamCoreLanguage: _0x500cb0.beamCore?.geometry.userData.actionLanguage || "",
        beamReach: _0x500cb0.beam?.visible ? Number(_0x500cb0.beam.scale.x.toFixed(4)) : 0,
        podVisible: !!_0x500cb0.pod?.visible,
        podLanguage: _0x500cb0.pod?.geometry.userData.actionLanguage || "",
        podCoreLanguage: _0x500cb0.podCore?.geometry.userData.actionLanguage || "",
        podEmission: _0x500cb0.podMat?.emissiveIntensity || 0,
        markVisible: !!_0x500cb0.mark?.visible,
        markLanguage: _0x500cb0.mark?.geometry.userData.actionLanguage || "",
        blastVisible: !!_0x500cb0.blast?.visible,
        blastLanguage: _0x500cb0.blast?.geometry.userData.actionLanguage || "",
        blastCoreLanguage: _0x500cb0.blastCore?.geometry.userData.actionLanguage || ""
      },
      tacticVisual: _0x567fe7,
      sweepfanNoStraightFallback: !_0x3bbfa1(_0x276292) || !_0x500cb0.beam?.visible || _0x7b684d(_0x276292),
      sweepfanExact: !_0x7b684d(_0x276292) || !!_0x500cb0.beam?.visible && Math.abs(_0x500cb0.beam.rotation.z - Math.atan2(_0x276292.tacticBeamY, _0x276292.tacticBeamX)) < 0.0001 && Math.abs(_0x500cb0.beam.scale.x - _0x276292.beamReach) < 0.0001
    });
  }
  const _0x58f390 = na.filter(_0x5cb0a6 => _0x5cb0a6.ecologyDeath).map(_0x153946 => ({
    ecologyId: _0x153946.ecologyDeath.id,
    bodyRow: _0x153946.ecologyDeath.bodyRow,
    actionRow: _0x153946.ecologyDeath.actionRow,
    code: _0x153946.ecologyDeath.code,
    legacyRig: !!_0x153946.rig,
    layersAttached: _0x153946.ecologyActionMesh?.parent === _0x153946.mesh,
    opacityMatched: Math.abs(_0x153946.ecologyActionMat.opacity - _0x153946.mat.opacity) < 0.0001,
    scaleFixed: true,
    spiral: false,
    shrink: false
  }));
  return {
    ..._0x6e077(),
    activation: "ecologyId mechanics; ecologyVisualId presentation only",
    ordinaryBodies: _0x92ef97,
    visualOnlyBodies: _0x55b19f,
    liveBodies: _0x56a7e8.length,
    liveActorDraws: _0x56a7e8.length * 2,
    extraDraws: _0x56a7e8.length,
    liveTextures: _0x3fe56b.size,
    ordinaryPathFallbacks: 0,
    tacticRuntime: _0x4eca52(),
    materials: {
      pairsSpawned: Ft,
      bodyRetired: Et,
      actionRetired: Ht,
      balancedRetirement: Et === Ht,
      paintedInkFloor: Object.freeze({
        mode: "bounded-unlit-atlas-value",
        material: "MeshBasicMaterial",
        colorGainByKind: {
          ...Le
        },
        emissiveMap: false,
        idleEmissiveIntensity: 0
      })
    },
    deaths: _0x58f390,
    rows: _0x56a7e8
  };
}
if (typeof window != "undefined") {
  window.__HB_ENEMY_ECOLOGY_VISUAL = enemyEcologyVisualSnapshot;
}
const da = _0x12857a.mortar;
const pa = new _0x3597fd.BoxGeometry(...da.legSize);
const ma = _0x2e6871(da.podRadius);
const ha = _0x31e6b9(da.podRadius);
const ua = _0x400b65(da.blastHalf, da.markThickness);
const fa = _0x389f36(da.blastHalf, da.blastHeight);
const ga = _0x15e6f9(da.blastHalf, da.blastHeight);
const Ma = {
  depth: 0,
  sx: 1,
  sy: 1,
  sz: 1,
  glow: _0x1a2931.glowOff
};
function ya(_0xc18970, _0x4f2ee6) {
  if (!_0xc18970.sprite) {
    for (const [_0x5b967b, _0x1f83ac] of [[-0.34, 0.22], [0.34, 0.22], [0, -0.34]]) {
      const _0x53fa62 = new _0x3597fd.Mesh(pa, _0xc18970.mat);
      _0x53fa62.position.set(_0x5b967b, -da.bodyY / 2, _0x1f83ac);
      _0x4f2ee6.add(_0x53fa62);
    }
  }
  const _0x2e3bb9 = new _0x3597fd.MeshStandardMaterial({
    color: _0x1a2931.capsuleInk,
    emissive: _0x1a2931.mortar,
    emissiveIntensity: 0,
    roughness: 0.52,
    metalness: 0.34,
    flatShading: true,
    transparent: true,
    opacity: 0.98,
    depthWrite: true,
    side: _0x3597fd.DoubleSide
  });
  const _0x4a7f4c = new _0x3597fd.Mesh(ma, _0x2e3bb9);
  const _0x567197 = new _0x3597fd.MeshBasicMaterial({
    color: _0x1a2931.mortarPod,
    transparent: true,
    opacity: 0.58,
    depthWrite: false,
    toneMapped: false,
    side: _0x3597fd.DoubleSide
  });
  const _0x578ec6 = new _0x3597fd.Mesh(ha, _0x567197);
  _0x578ec6.position.z = 0.025;
  _0x4a7f4c.add(_0x578ec6);
  _0x4a7f4c.visible = false;
  _0x48d2c7.add(_0x4a7f4c);
  const _0x183e09 = new _0x3597fd.MeshBasicMaterial({
    color: _0x1a2931.mortarMark,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    toneMapped: false,
    side: _0x3597fd.DoubleSide
  });
  const _0x4eabe1 = new _0x3597fd.Mesh(ua, _0x183e09);
  _0x4eabe1.visible = false;
  _0x48d2c7.add(_0x4eabe1);
  const _0x88e606 = new _0x3597fd.MeshBasicMaterial({
    color: _0x1a2931.capsuleInk,
    transparent: true,
    opacity: 0.86,
    depthWrite: false,
    toneMapped: false,
    side: _0x3597fd.DoubleSide
  });
  const _0x4152b4 = new _0x3597fd.Mesh(fa, _0x88e606);
  const _0x518ecf = new _0x3597fd.MeshBasicMaterial({
    color: _0x1a2931.mortarMark,
    transparent: true,
    opacity: 0.88,
    depthWrite: false,
    toneMapped: false,
    side: _0x3597fd.DoubleSide
  });
  const _0x1a0adb = new _0x3597fd.Mesh(ga, _0x518ecf);
  _0x1a0adb.position.z = 0.025;
  _0x4152b4.add(_0x1a0adb);
  _0x4152b4.visible = false;
  _0x48d2c7.add(_0x4152b4);
  _0xc18970.pod = _0x4a7f4c;
  _0xc18970.podMat = _0x2e3bb9;
  _0xc18970.podCore = _0x578ec6;
  _0xc18970.podCoreMat = _0x567197;
  _0xc18970.mark = _0x4eabe1;
  _0xc18970.markMat = _0x183e09;
  _0xc18970.blast = _0x4152b4;
  _0xc18970.blastMat = _0x88e606;
  _0xc18970.blastCore = _0x1a0adb;
  _0xc18970.blastCoreMat = _0x518ecf;
}
function wa(_0x2e5778) {
  _0x2e5778.pod.visible = false;
  if (_0x2e5778.podMat.emissive) {
    _0x2e5778.podMat.emissiveIntensity = 0;
  }
  _0x2e5778.mark.visible = false;
  _0x2e5778.blast.visible = false;
}
const ba = _0x12857a.warden;
function xa(_0x311606, _0x1749c8, _0x28690f, _0x285fbe, _0xb0437e = 0) {
  const _0x29fa83 = [];
  for (let _0x28ed5b = 0; _0x28ed5b < _0x28690f; _0x28ed5b++) {
    const _0x460a4f = _0xb0437e + _0x28ed5b * Math.PI * 2 / _0x28690f;
    const _0x460e2e = Math.PI / _0x28690f * _0x285fbe;
    const _0x572abc = _0x460a4f - _0x460e2e;
    const _0xbe24cb = _0x460a4f + _0x460e2e;
    const _0x2e2901 = _0x460e2e * 0.16;
    const _0x1a3f27 = [[Math.cos(_0x572abc + _0x2e2901) * _0x311606, Math.sin(_0x572abc + _0x2e2901) * _0x311606], [Math.cos(_0x572abc) * _0x1749c8, Math.sin(_0x572abc) * _0x1749c8], [Math.cos(_0xbe24cb) * _0x1749c8, Math.sin(_0xbe24cb) * _0x1749c8], [Math.cos(_0xbe24cb - _0x2e2901) * _0x311606, Math.sin(_0xbe24cb - _0x2e2901) * _0x311606]];
    _0x29fa83.push(..._0x1a3f27[0], 0, ..._0x1a3f27[1], 0, ..._0x1a3f27[2], 0, ..._0x1a3f27[0], 0, ..._0x1a3f27[2], 0, ..._0x1a3f27[3], 0);
  }
  const _0x5f0335 = new _0x3597fd.BufferGeometry();
  _0x5f0335.setAttribute("position", new _0x3597fd.Float32BufferAttribute(_0x29fa83, 3));
  _0x5f0335.computeVertexNormals();
  return _0x5f0335;
}
function va(_0x543eff = false) {
  const _0x513988 = [];
  const _0x4b45bf = _0x543eff ? 9 : 7;
  for (let _0x169fbe = 0; _0x169fbe < _0x4b45bf; _0x169fbe++) {
    const _0x1c1874 = 1 / _0x4b45bf;
    const _0xa15240 = _0x169fbe * _0x1c1874 - 0.5 + _0x1c1874 * (_0x543eff ? 0.13 : 0.09);
    const _0x3263c9 = (_0x169fbe + 1) * _0x1c1874 - 0.5 - _0x1c1874 * (_0x543eff ? 0.16 : 0.12);
    const _0x2fc908 = _0x169fbe === 0 || _0x169fbe === _0x4b45bf - 1 ? 0.66 : 1;
    const _0x3f90e7 = (_0x543eff ? 0.045 : ba.beamHalf * (_0x169fbe % 2 ? 0.78 : 1.02)) * _0x2fc908;
    const _0x4b0736 = Math.min((_0x3263c9 - _0xa15240) * 0.16, 0.018);
    _0x513988.push(_0xa15240 + _0x4b0736, -_0x3f90e7, 0, _0x3263c9 - _0x4b0736, -_0x3f90e7, 0, _0x3263c9, 0, 0, _0xa15240 + _0x4b0736, -_0x3f90e7, 0, _0x3263c9, 0, 0, _0xa15240, 0, 0, _0xa15240, 0, 0, _0x3263c9, 0, 0, _0x3263c9 - _0x4b0736, _0x3f90e7, 0, _0xa15240, 0, 0, _0x3263c9 - _0x4b0736, _0x3f90e7, 0, _0xa15240 + _0x4b0736, _0x3f90e7, 0);
  }
  const _0x15e4f5 = new _0x3597fd.BufferGeometry();
  _0x15e4f5.setAttribute("position", new _0x3597fd.Float32BufferAttribute(_0x513988, 3));
  _0x15e4f5.computeVertexNormals();
  return _0x15e4f5;
}
const ka = xa(0.31, 0.55, 6, 0.56, Math.PI / 6);
const za = xa(0.57, 0.74, 4, 0.38, Math.PI / 4);
const Sa = new _0x3597fd.CylinderGeometry(0.1, 0.19, 0.38, 5);
Sa.rotateZ(Math.PI / 2);
const Ba = new _0x3597fd.BoxGeometry(0.38, 0.16, 0.14);
const Ca = new _0x3597fd.OctahedronGeometry(0.1, 0);
const Ra = va(false);
const Aa = va(true);
const La = Ue;
const Da = function () {
  const _0x23567d = [];
  const _0x1f230c = ba.barrageHalf * 2;
  const _0x4311f7 = ba.barrageHeight;
  const _0x44219c = -_0x4311f7 / 2;
  const _0x2ba281 = [0.62, 0.88, 0.7, 1, 0.76, 0.92, 0.58];
  for (let _0x163b62 = 0; _0x163b62 < _0x2ba281.length; _0x163b62++) {
    const _0x45a431 = _0x1f230c / _0x2ba281.length;
    const _0x2c4e4f = -_0x1f230c / 2 + _0x45a431 * (_0x163b62 + 0.1);
    const _0x3ea303 = -_0x1f230c / 2 + _0x45a431 * (_0x163b62 + 0.88);
    const _0xf42a = (_0x2c4e4f + _0x3ea303) / 2 + (_0x163b62 % 2 ? -1 : 1) * _0x45a431 * 0.1;
    const _0x476fa3 = _0x44219c + _0x4311f7 * (0.16 + _0x163b62 % 3 * 0.035);
    const _0x5eeee6 = _0x44219c + _0x4311f7 * _0x2ba281[_0x163b62];
    _0x23567d.push(_0x2c4e4f, _0x44219c, 0, _0x3ea303, _0x44219c, 0, _0x3ea303 - _0x45a431 * 0.12, _0x476fa3, 0, _0x2c4e4f, _0x44219c, 0, _0x3ea303 - _0x45a431 * 0.12, _0x476fa3, 0, _0xf42a, _0x5eeee6, 0, _0x2c4e4f, _0x44219c, 0, _0xf42a, _0x5eeee6, 0, _0x2c4e4f + _0x45a431 * 0.13, _0x476fa3, 0);
  }
  const _0xb39196 = new _0x3597fd.BufferGeometry();
  _0xb39196.setAttribute("position", new _0x3597fd.Float32BufferAttribute(_0x23567d, 3));
  _0xb39196.computeVertexNormals();
  return _0xb39196;
}();
function Pa(_0x29c3da, _0x43162f, _0x4f861a = null) {
  const _0xbcc595 = _e(_0x43162f, _0x4f861a);
  const _0x13a26f = new _0x3597fd.Mesh(_0x29c3da, _0xbcc595);
  _0x13a26f.visible = false;
  _0x13a26f.renderOrder = 4;
  _0x48d2c7.add(_0x13a26f);
  return {
    mesh: _0x13a26f,
    mat: _0xbcc595
  };
}
function Ga(_0x35e4ca) {
  for (const _0x162bdc of [_0x35e4ca.wardenCore, _0x35e4ca.wardenShield, _0x35e4ca.wardenEmitter, _0x35e4ca.wardenRack, _0x35e4ca.wardenBeam, _0x35e4ca.wardenBeamCore, _0x35e4ca.wardenMark, _0x35e4ca.wardenBlast, ..._0x35e4ca.wardenSeals.map(_0x2923f3 => _0x2923f3.mesh)]) {
    _0x162bdc.visible = false;
  }
}