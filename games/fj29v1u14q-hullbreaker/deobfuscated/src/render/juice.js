import { CONFIG as _0x29749d } from "../config.js";
import { JUICE_ENABLED as _0x2dca01 } from "../mode.js";
import { cornerTimeline as _0x2bed6c } from "../pure/waves.js";
import { transformTimeline as _0x159855 } from "../pure/transform.js";
import { view as _0x599b35 } from "../sim/bridge.js";
import { gameMs as _0x51d2ad, hitStopRemainingMs as _0x24877e } from "../sim/time.js";
import { player as _0x24d7c9 } from "../sim/player.js";
import { hostiles as _0x16839a } from "../sim/hostiles.js";
import { scoreNotchNow as _0x18faa2 } from "../sim/score.js";
import { activeCorner as _0x231c5c } from "../sim/wavegate.js";
import { activeTransformEvent as _0x3583c1 } from "../sim/transform.js";
import { addTrauma as _0x463460, cameraTrauma as _0x4855ae } from "./camera.js";
import { PAL as _0x227f82 } from "./palette.js";
import { fxBurst as _0x49fa38, fxCoreRupture as _0x8109ec, fxDirectedBurst as _0x10f3b6, fxDirectionalFlash as _0x21163e, fxFlash as _0x43c916, fxHostileColor as _0x2f4f65, fxImplode as _0xee45e9, fxRing as _0x1bc2b6, fxRole as _0x20a526, fxRoleFragments as _0x2e4de5, fxShotColor as _0x3af262, fxStats as _0xb7bc67, fxVapor as _0x337c66, resetFx as _0x463946, updateFx as _0x58b96a } from "./fx.js";
const L = _0x29749d.juice;
const I = L.shake;
const A = _0x2bed6c(_0x29749d);
const Y = _0x159855(_0x29749d);
const H = Object.freeze({
  R: Object.freeze({
    flash: 1.25,
    fan: 0.75,
    spread: 0.1,
    hit: 1,
    breach: 0,
    beat1: 48,
    beat2: 104,
    beat3: 164
  }),
  S: Object.freeze({
    flash: 1.3,
    fan: 1,
    spread: 0.72,
    hit: 1.15,
    breach: 0,
    beat1: 44,
    beat2: 102,
    beat3: 176
  }),
  L: Object.freeze({
    flash: 1.65,
    fan: 0.5,
    spread: 0.04,
    hit: 1.75,
    breach: 1.3,
    beat1: 32,
    beat2: 74,
    beat3: 132
  }),
  H: Object.freeze({
    flash: 1.45,
    fan: 0.5,
    spread: 0.58,
    hit: 1.25,
    breach: 0.85,
    beat1: 42,
    beat2: 96,
    beat3: 166
  }),
  F: Object.freeze({
    flash: 1.9,
    fan: 1.5,
    spread: 0.46,
    hit: 1.5,
    breach: 1.1,
    beat1: 54,
    beat2: 122,
    beat3: 214
  })
});
export const ACTION_VFX_V2_HOOKS = Object.freeze({
  version: 2,
  weapons: Object.freeze({
    R: Object.freeze(["rivet-contact-pin", "rivet-through-chip", "rivet-plate-pop", "rivet-cool-cut"]),
    S: Object.freeze(["scatter-contact-rake", "scatter-armour-fan", "scatter-reverse-rake", "scatter-cross-cut"]),
    L: Object.freeze(["lance-contact-seam", "lance-throughline", "lance-collapse", "lance-cool-needle"]),
    H: Object.freeze(["homing-vane-a", "homing-vane-b", "homing-core-shear", "homing-guidance-debris"]),
    F: Object.freeze(["cinder-contact-bite", "cinder-hot-solids", "cinder-backwash", "cinder-pressure-wake"])
  }),
  deaths: Object.freeze({
    wasp: Object.freeze(["wasp-core-snip", "wasp-wing-shear", "wasp-thrust-fall", "wasp-cooling-wake"]),
    hound: Object.freeze(["hound-spine-break", "hound-scute-skid", "hound-deck-scrape", "hound-cooling-wake"]),
    emplacement: Object.freeze(["mount-contact", "mount-bracket-eject", "mount-vent-collapse", "mount-cooling-wake"])
  })
});
const P = Array.from({
  length: 16
}, () => ({
  active: false,
  t0: 0,
  stage: 0,
  type: "R",
  x: 0,
  y: 0,
  ds: 1,
  dy: 0,
  scale: 1,
  color: 0,
  enemy: 0,
  role: "machine",
  warden: false
}));
let F = 0;
let K = 0;
let _ = 0;
function B(_0x142c28) {
  if (_0x142c28 === "wasp") {
    return "wing";
  } else if (_0x142c28 === "hound") {
    return "hound";
  } else {
    return "machine";
  }
}
function C(_0x59710b, _0x2e9f8d) {
  const {
    x: _0x52d1a7,
    y: _0x203959,
    ds: _0xa5e35c,
    dy: _0x1b18a6,
    scale: _0x5a8b2b,
    color: _0x378cb6,
    enemy: _0x1e8f1b,
    role: _0x5789de
  } = _0x59710b;
  const _0x137974 = -_0x1b18a6;
  const _0x279ac0 = _0xa5e35c;
  const _0x5e295a = _0x59710b.warden ? 1.18 : 1;
  if (_0x59710b.type !== "S") {
    if (_0x59710b.type !== "L") {
      if (_0x59710b.type !== "H") {
        if (_0x59710b.type !== "F") {
          if (_0x2e9f8d === 0) {
            _0x8109ec(_0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, _0x5a8b2b * 0.36, 0.04, 1.55);
          } else if (_0x2e9f8d === 1) {
            _0x10f3b6(L.impact, _0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, 0.16, _0x5a8b2b * 0.4);
          } else if (_0x2e9f8d === 2) {
            _0x2e4de5(_0x5789de, _0x52d1a7, _0x203959, _0x1e8f1b, -_0xa5e35c, Math.max(0.14, -_0x1b18a6), _0x5a8b2b * 0.42 * _0x5e295a);
          } else {
            _0x10f3b6(L.impact, _0x52d1a7, _0x203959, _0x378cb6, -_0xa5e35c, Math.max(0.18, -_0x1b18a6), 0.12, _0x5a8b2b * 0.22);
          }
        } else if (_0x2e9f8d === 0) {
          _0x21163e(92, _0x5a8b2b * 1.82, _0x5a8b2b * 0.3, _0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, 0.22);
          _0x8109ec(_0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, _0x5a8b2b * 0.62, 0.225, 1.7);
        } else if (_0x2e9f8d === 1) {
          _0x10f3b6(L.impact, _0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, Math.min(-0.18, _0x1b18a6), 0.68, _0x5a8b2b * 0.58);
          _0x2e4de5(_0x5789de, _0x52d1a7, _0x203959, _0x1e8f1b, _0xa5e35c, -0.32, _0x5a8b2b * 0.52 * _0x5e295a);
        } else if (_0x2e9f8d === 2) {
          _0x10f3b6(L.impact, _0x52d1a7, _0x203959 - 0.04, _0x378cb6, -_0xa5e35c, 0.16, 0.5, _0x5a8b2b * 0.36);
        } else {
          _0x337c66(_0x52d1a7 - _0xa5e35c * 0.1, _0x203959, _0x1e8f1b, -_0xa5e35c, _0x5a8b2b * 0.64, 0.025);
        }
      } else if (_0x2e9f8d === 0) {
        _0x10f3b6(L.impact, _0x52d1a7, _0x203959, _0x378cb6, _0x137974, _0x279ac0, 0.2, _0x5a8b2b * 0.46);
      } else if (_0x2e9f8d === 1) {
        _0x21163e(64, _0x5a8b2b * 0.66, _0x5a8b2b * 0.11, _0x52d1a7, _0x203959, _0x378cb6, -_0x137974, -_0x279ac0, 0.045);
        _0x10f3b6(L.impact, _0x52d1a7, _0x203959, _0x378cb6, -_0x137974, -_0x279ac0, 0.2, _0x5a8b2b * 0.4);
      } else if (_0x2e9f8d === 2) {
        _0x8109ec(_0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, _0x5a8b2b * 0.52, 0.045, 1.35);
      } else {
        _0x2e4de5(_0x5789de, _0x52d1a7, _0x203959, _0x1e8f1b, _0x137974, _0x279ac0 + 0.1, _0x5a8b2b * 0.48 * _0x5e295a);
      }
    } else if (_0x2e9f8d === 0) {
      _0x8109ec(_0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, _0x5a8b2b * 0.1, 0.05, 2.2);
    } else if (_0x2e9f8d === 1) {
      _0x10f3b6(L.impact, _0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, 0.055, _0x5a8b2b * 0.56);
      _0x21163e(58, _0x5a8b2b * 0.72, _0x5a8b2b * 0.075, _0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, 0.045);
    } else if (_0x2e9f8d === 2) {
      _0xee45e9(96, _0x5a8b2b * 0.52, _0x52d1a7 - _0xa5e35c * 0.08, _0x203959 - _0x1b18a6 * 0.08, _0x378cb6, 0.035);
    } else {
      _0x10f3b6(L.impact, _0x52d1a7, _0x203959, _0x378cb6, -_0xa5e35c, -_0x1b18a6, 0.035, _0x5a8b2b * 0.26);
    }
  } else if (_0x2e9f8d === 0) {
    _0x10f3b6(L.impact, _0x52d1a7, _0x203959, _0x378cb6, _0xa5e35c, _0x1b18a6, 1.06, _0x5a8b2b * 0.62);
  } else if (_0x2e9f8d === 1) {
    _0x2e4de5(_0x5789de, _0x52d1a7, _0x203959, _0x1e8f1b, _0xa5e35c, _0x1b18a6 + 0.18, _0x5a8b2b * 0.56 * _0x5e295a);
    _0x21163e(66, _0x5a8b2b * 0.62, _0x5a8b2b * 0.12, _0x52d1a7, _0x203959, _0x1e8f1b, _0x137974, _0x279ac0, 0.04);
  } else if (_0x2e9f8d === 2) {
    _0x10f3b6(L.impact, _0x52d1a7 - _0xa5e35c * 0.08, _0x203959 - _0x1b18a6 * 0.08, _0x378cb6, -_0xa5e35c, -_0x1b18a6, 0.88, _0x5a8b2b * 0.44);
  } else {
    _0x21163e(78, _0x5a8b2b * 0.48, _0x5a8b2b * 0.095, _0x52d1a7, _0x203959, _0x378cb6, -_0x137974, -_0x279ac0, 0.03);
  }
}
function T(_0x5b2c14, _0x2bd608, _0x59b732, _0x347e9a, _0xe61d88, _0x5781ff, _0x273beb) {
  const _0x142064 = P[F];
  F = (F + 1) % 16;
  if (_0x142064.active) {
    _++;
  } else {
    K++;
  }
  _0x142064.active = true;
  _0x142064.t0 = _0x51d2ad;
  _0x142064.stage = 0;
  _0x142064.type = _0x2bd608;
  _0x142064.x = _0x59b732;
  _0x142064.y = _0x347e9a;
  _0x142064.ds = _0xe61d88;
  _0x142064.dy = _0x5781ff;
  _0x142064.scale = _0x273beb;
  _0x142064.color = _0x3af262(_0x2bd608);
  _0x142064.enemy = _0x2f4f65(_0x5b2c14);
  _0x142064.role = B(_0x5b2c14);
  _0x142064.warden = _0x5b2c14 === "warden";
  C(_0x142064, 0);
}
const V = 12;
const G = Object.freeze({
  wasp: Object.freeze([58, 142, 268]),
  hound: Object.freeze([72, 176, 318]),
  polyp: Object.freeze([76, 188, 342]),
  mortar: Object.freeze([68, 174, 326]),
  carrier: Object.freeze([84, 206, 368]),
  machine: Object.freeze([74, 184, 334])
});
const N = Array.from({
  length: V
}, () => ({
  active: false,
  started: false,
  targetId: 0,
  t0: 0,
  stage: 0,
  kind: "machine",
  role: "machine",
  x: 0,
  y: 0,
  dir: 1,
  incomingS: 1,
  incomingY: 0,
  shot: 0,
  enemy: 0,
  scale: 1
}));
let E = 0;
let U = 0;
let X = 0;
function $(_0x23f9bc, _0x534882) {
  const {
    x: _0x1bf98e,
    y: _0x4f14cd,
    dir: _0x5aa5ec,
    incomingS: _0x5e81b1,
    incomingY: _0x537931,
    shot: _0x21e748,
    enemy: _0xff711c
  } = _0x23f9bc;
  const _0x31138b = _0x23f9bc.scale;
  if (_0x23f9bc.kind !== "wasp") {
    if (_0x23f9bc.kind !== "hound") {
      if (_0x23f9bc.kind === "polyp" || _0x23f9bc.kind === "mortar") {
        const _0x2ecf05 = _0x23f9bc.kind === "mortar";
        if (_0x534882 === 0) {
          _0x21163e(86, (_0x2ecf05 ? 0.82 : 0.92) * _0x31138b, _0x31138b * 0.16, _0x1bf98e, _0x4f14cd, _0x21e748, _0x2ecf05 ? -_0x5aa5ec : 0, _0x2ecf05 ? 0.52 : 1, 0.055);
          _0x8109ec(_0x1bf98e, _0x4f14cd, _0x21e748, _0x5e81b1, _0x537931, _0x31138b * 0.64, 0.05, _0x2ecf05 ? 1.55 : 1.25);
        } else if (_0x534882 === 1) {
          _0x2e4de5("machine", _0x1bf98e, _0x4f14cd, _0xff711c, _0x2ecf05 ? -_0x5aa5ec : _0x5aa5ec, _0x2ecf05 ? 0.62 : 0.78, _0x31138b * 1.08);
        } else if (_0x534882 === 2) {
          _0x10f3b6(L.death, _0x1bf98e, _0x4f14cd, _0xff711c, 0, 1, 0.28, _0x31138b * 0.86);
          _0x10f3b6(L.impact, _0x1bf98e, _0x4f14cd - 0.12, _0x21e748, 0, -1, 0.22, _0x31138b * 0.62);
        } else {
          _0x337c66(_0x1bf98e, _0x4f14cd - 0.08, _0xff711c, 0, _0x31138b * 0.76, 0.024);
        }
        return;
      }
      if (_0x23f9bc.kind !== "carrier") {
        if (_0x534882 === 0) {
          _0x21163e(82, _0x31138b * 0.82, _0x31138b * 0.16, _0x1bf98e, _0x4f14cd, _0x21e748, _0x5e81b1, _0x537931, 0.05);
          _0x8109ec(_0x1bf98e, _0x4f14cd, _0x21e748, _0x5e81b1, _0x537931, _0x31138b * 0.64, 0.05, 1.45);
        } else if (_0x534882 === 1) {
          _0x2e4de5(_0x23f9bc.role, _0x1bf98e, _0x4f14cd, _0xff711c, _0x5aa5ec, 0.34, _0x31138b * 1.04);
        } else if (_0x534882 === 2) {
          _0x10f3b6(L.death, _0x1bf98e, _0x4f14cd, _0xff711c, _0x5aa5ec, 0.34, 0.52, _0x31138b * 0.82);
        } else {
          _0x337c66(_0x1bf98e, _0x4f14cd, _0xff711c, -_0x5e81b1, _0x31138b * 0.68, 0.02);
        }
      } else if (_0x534882 === 0) {
        _0x21163e(94, _0x31138b * 1.04, _0x31138b * 0.19, _0x1bf98e, _0x4f14cd, _0x21e748, _0x5e81b1, _0x537931, 0.06);
        _0x8109ec(_0x1bf98e, _0x4f14cd, _0x21e748, _0x5e81b1, _0x537931, _0x31138b * 0.78, 0.06, 1.65);
      } else if (_0x534882 === 1) {
        _0x2e4de5("machine", _0x1bf98e - 0.16, _0x4f14cd, _0xff711c, -1, 0.3, _0x31138b * 1.2);
        _0x2e4de5("machine", _0x1bf98e + 0.16, _0x4f14cd, _0xff711c, 1, 0.3, _0x31138b * 1.2);
      } else if (_0x534882 === 2) {
        _0x10f3b6(L.death, _0x1bf98e, _0x4f14cd, _0xff711c, 0, -1, 0.36, _0x31138b * 0.92);
        _0x10f3b6(L.impact, _0x1bf98e, _0x4f14cd + 0.05, _0x21e748, 0, 1, 0.28, _0x31138b * 0.72);
      } else {
        _0x337c66(_0x1bf98e, _0x4f14cd - 0.12, _0xff711c, -_0x5e81b1, _0x31138b * 0.88, 0.03);
      }
    } else if (_0x534882 === 0) {
      _0x21163e(84, _0x31138b * 0.9, _0x31138b * 0.17, _0x1bf98e, _0x4f14cd - 0.04, _0x21e748, _0x5e81b1, _0x537931, 0.055);
      _0x8109ec(_0x1bf98e, _0x4f14cd - 0.04, _0x21e748, _0x5e81b1, _0x537931, _0x31138b * 0.68, 0.05, 1.75);
    } else if (_0x534882 === 1) {
      _0x2e4de5("hound", _0x1bf98e, _0x4f14cd - 0.1, _0xff711c, _0x5aa5ec, 0.08, _0x31138b * 1.16);
    } else if (_0x534882 === 2) {
      _0x10f3b6(L.death, _0x1bf98e, _0x4f14cd - 0.14, _0xff711c, _0x5aa5ec, 0.08, 0.3, _0x31138b * 0.92);
      _0x10f3b6(L.impact, _0x1bf98e, _0x4f14cd - 0.06, _0x21e748, -_0x5aa5ec, 0.16, 0.24, _0x31138b * 0.68);
    } else {
      _0x337c66(_0x1bf98e - _0x5aa5ec * 0.12, _0x4f14cd - 0.18, _0xff711c, -_0x5aa5ec, _0x31138b * 0.58, 0.018);
    }
  } else if (_0x534882 === 0) {
    _0x21163e(78, _0x31138b * 0.78, _0x31138b * 0.15, _0x1bf98e, _0x4f14cd, _0x21e748, _0x5e81b1, _0x537931, 0.055);
    _0x8109ec(_0x1bf98e, _0x4f14cd, _0x21e748, _0x5e81b1, _0x537931, _0x31138b * 0.62, 0.055, 1.55);
  } else if (_0x534882 === 1) {
    _0x2e4de5("wing", _0x1bf98e, _0x4f14cd, _0xff711c, _0x5aa5ec, -0.38, _0x31138b * 1.18);
    _0x10f3b6(L.death, _0x1bf98e, _0x4f14cd, _0xff711c, _0x5aa5ec, -0.42, 0.54, _0x31138b * 0.78);
  } else if (_0x534882 === 2) {
    _0x10f3b6(L.impact, _0x1bf98e, _0x4f14cd, _0x21e748, -_0x5aa5ec, 0.58, 0.42, _0x31138b * 0.72);
    _0x21163e(82, _0x31138b * 0.62, _0x31138b * 0.1, _0x1bf98e, _0x4f14cd, _0xff711c, -_0x5aa5ec, 0.44, 0.04);
  } else {
    _0x337c66(_0x1bf98e - _0x5aa5ec * 0.1, _0x4f14cd - 0.06, _0xff711c, -_0x5aa5ec, _0x31138b * 0.66, 0.025);
  }
}
const W = {};
function q(_0xb598dd, _0x1f7839) {
  return !(_0x51d2ad - (W[_0xb598dd] || -1000000000) < _0x1f7839) && (W[_0xb598dd] = _0x51d2ad, true);
}
function D(_0x288c42) {
  _0x463460(_0x288c42 === "hurt" ? I.hurt : I.kill);
}
let Q = "R";
let Z = -1000000000;
function ee(_0x13c473, _0x2f2fcb) {
  Q = H[_0x2f2fcb] ? _0x2f2fcb : "R";
  Z = _0x51d2ad;
  if (!q("muzzle", L.muzzle.volleyGapMs)) {
    return;
  }
  const _0x7f682d = L.muzzle;
  const _0x450275 = H[Q];
  const _0x19bfe0 = _0x24d7c9.aim.x;
  const _0x31f9bc = _0x24d7c9.aim.y;
  const _0x1276dc = _0x24d7c9.x + _0x19bfe0 * _0x7f682d.offsetTiles;
  const _0x43f125 = _0x24d7c9.y + _0x24d7c9.muzzleY + _0x31f9bc * _0x7f682d.offsetTiles;
  const _0x478f5d = _0x3af262(Q);
  _0x43c916(_0x7f682d.ms, _0x7f682d.size * _0x450275.flash, _0x1276dc, _0x43f125, _0x478f5d);
  _0x10f3b6(L.impact, _0x1276dc, _0x43f125, _0x478f5d, _0x19bfe0, _0x31f9bc, _0x450275.spread, _0x450275.fan);
  if (_0x450275.breach > 0) {
    _0x1bc2b6(_0x7f682d.ms * 1.8, _0x7f682d.size * _0x450275.breach, _0x1276dc, _0x43f125, _0x478f5d, 0.02);
  }
}
const te = new Map();
function ae(_0x5ca490) {
  te.set(_0x5ca490.id, _0x5ca490.hp);
}
function ne(_0x44403f) {
  const _0x44037a = te.get(_0x44403f.id);
  if (_0x44037a !== undefined && _0x44403f.hp < _0x44037a && q("impact", L.impact.gapMs)) {
    const _0x2c6292 = "R";
    const _0xe03d2 = H[_0x2c6292];
    const _0x2ad1d1 = Math.min(1.46, (0.74 + _0xe03d2.hit * 0.16) * (1 + Math.max(0, _0x44037a - _0x44403f.hp - 1) * 0.12));
    const _0x27c96f = _0x44403f.x - _0x24d7c9.x;
    const _0x4d8ec2 = _0x44403f.y - (_0x24d7c9.y + _0x24d7c9.muzzleY);
    const _0x2eaa98 = 1 / Math.max(0.001, Math.hypot(_0x27c96f, _0x4d8ec2));
    T(_0x44403f.kind, _0x2c6292, _0x44403f.x, _0x44403f.y, _0x27c96f * _0x2eaa98, _0x4d8ec2 * _0x2eaa98, _0x2ad1d1 * (_0x44403f.kind === "warden" ? 1.16 : 1));
  }
  te.set(_0x44403f.id, _0x44403f.hp);
}
function ie(_0x2abbc4, _0x4d4f07, _0x1f3fee, _0x2a6b3b, _0x539928, _0x57f0d4, _0x56bf23, _0x549797, _0x3ccc67, _0x27b21f) {
  const _0x19c92a = 1 / Math.max(0.001, Math.hypot(_0x539928, _0x57f0d4));
  const _0x5df053 = _0x539928 * _0x19c92a;
  const _0x24b7b2 = _0x57f0d4 * _0x19c92a;
  const _0x11febb = H[_0x4d4f07] || H.R;
  if (!_0x3ccc67) {
    const _0x2f68ef = _0x549797 === "polyp" ? _0x227f82.polyp : _0x227f82.modCapsule;
    _0x1bc2b6(132, _0x549797 === "warden" ? 0.88 : 0.72, _0x1f3fee, _0x2a6b3b, _0x2f68ef, 0.035);
    _0x21163e(86, 0.62, 0.11, _0x1f3fee, _0x2a6b3b, _0x2f68ef, -_0x24b7b2, _0x5df053, 0.04);
    _0x10f3b6(L.impact, _0x1f3fee, _0x2a6b3b, _0x2f68ef, -_0x5df053, -_0x24b7b2, 0.72, 0.42);
    return;
  }
  if (!_0x27b21f) {
    for (let _0x268b6b = 0; _0x268b6b < _0x16839a.length; _0x268b6b++) {
      if (_0x16839a[_0x268b6b].id === _0x56bf23) {
        te.set(_0x56bf23, _0x16839a[_0x268b6b].hp);
        break;
      }
    }
  }
  if (q("impact", L.impact.gapMs)) {
    T(_0x549797, _0x4d4f07, _0x1f3fee, _0x2a6b3b, _0x5df053, _0x24b7b2, Math.min(1.46, 0.74 + _0x11febb.hit * 0.16) * (_0x549797 === "warden" ? 1.16 : 1));
  }
  if (_0x27b21f) {
    for (let _0xdafe86 = 0; _0xdafe86 < V; _0xdafe86++) {
      const _0x59f999 = N[_0xdafe86];
      if (_0x59f999.active && _0x59f999.targetId === _0x56bf23) {
        _0x59f999.x = _0x1f3fee;
        _0x59f999.y = _0x2a6b3b;
        _0x59f999.incomingS = _0x5df053;
        _0x59f999.incomingY = _0x24b7b2;
        _0x59f999.shot = _0x3af262(_0x4d4f07);
        break;
      }
    }
  }
}
let re = 0;
let se = -1000000000;
let ce = false;
const oe = {
  active: false,
  t0: 0,
  stage: 0,
  x: 0,
  y: 0,
  dir: 1,
  signal: 0,
  carrier: 0,
  enemy: 0
};
function pe(_0x34fd41, _0x5802aa) {
  te.delete(_0x34fd41.id);
  if (!_0x5802aa) {
    return;
  }
  re = _0x51d2ad - se <= 780 ? Math.min(5, re + 1) : 1;
  se = _0x51d2ad;
  const _0x424661 = 1 + (re - 1) * 0.18;
  const _0x165429 = _0x2f4f65(_0x34fd41.kind);
  const _0x592fb1 = _0x3af262("R");
  const _0x5a66d4 = Math.sign(_0x34fd41.vx) || _0x34fd41.dir || -1;
  const _0x3921c0 = _0x34fd41.x - _0x24d7c9.x;
  const _0xa611ce = _0x34fd41.y - (_0x24d7c9.y + _0x24d7c9.muzzleY);
  const _0x21b854 = 1 / Math.max(0.001, Math.hypot(_0x3921c0, _0xa611ce));
  const _0x28b186 = _0x3921c0 * _0x21b854;
  const _0x5a34cb = _0xa611ce * _0x21b854;
  if (_0x34fd41.kind !== "warden") {
    (function (_0x3466c2, _0x4c2427, _0x5c09f5, _0x228859, _0x1c6363, _0x2903ea) {
      const _0x54ac98 = N[E];
      E = (E + 1) % V;
      if (_0x54ac98.active) {
        X++;
      } else {
        U++;
      }
      _0x54ac98.active = true;
      _0x54ac98.started = false;
      _0x54ac98.targetId = _0x3466c2.id;
      _0x54ac98.t0 = _0x51d2ad;
      _0x54ac98.stage = 0;
      _0x54ac98.kind = G[_0x3466c2.kind] ? _0x3466c2.kind : "machine";
      _0x54ac98.role = B(_0x3466c2.kind);
      _0x54ac98.x = _0x3466c2.x;
      _0x54ac98.y = _0x3466c2.y;
      _0x54ac98.dir = Math.sign(_0x3466c2.vx) || _0x3466c2.dir || -1;
      _0x54ac98.incomingS = _0x4c2427;
      _0x54ac98.incomingY = _0x5c09f5;
      _0x54ac98.shot = _0x228859;
      _0x54ac98.enemy = _0x1c6363;
      _0x54ac98.scale = _0x2903ea;
    })(_0x34fd41, _0x28b186, _0x5a34cb, _0x592fb1, _0x165429, (_0x34fd41.kind === "carrier" ? 1.16 : _0x34fd41.kind === "wasp" ? 0.92 : 1.02) * Math.min(1.16, _0x424661));
  }
  if (_0x34fd41.aegis) {
    _0x10f3b6(L.impact, _0x34fd41.x, _0x34fd41.y + 0.45, _0x20a526("capsule"), 0, -1, 0.22, 0.62);
  } else if (_0x34fd41.backlash) {
    _0x10f3b6(L.impact, _0x34fd41.x, _0x34fd41.y, _0x20a526("capsule"), -_0x5a66d4, 0.18, 0.42, 0.48);
  }
  if (_0x34fd41.kind === "warden") {
    (function (_0x469aa5, _0x59338e, _0x25da57, _0x39e3d1) {
      oe.active = true;
      oe.t0 = _0x51d2ad;
      oe.stage = 0;
      oe.x = _0x469aa5.x;
      oe.y = _0x469aa5.y;
      oe.dir = Math.sign(_0x469aa5.vx) || _0x469aa5.dir || 1;
      oe.signal = _0x59338e;
      oe.carrier = _0x25da57;
      oe.enemy = _0x39e3d1;
    })(_0x34fd41, _0x20a526("capsule"), _0x20a526("muzzle"), _0x165429);
    _0x463460(I.boom * 1.45);
  }
  if (!ce) {
    ce = true;
    if (_0x34fd41.kind !== "warden") {
      _0x2e4de5(B(_0x34fd41.kind), _0x34fd41.x, _0x34fd41.y, _0x165429, _0x5a66d4, _0x34fd41.kind === "wasp" ? -0.28 : 0.26, 1.18);
      _0x10f3b6(L.impact, _0x34fd41.x, _0x34fd41.y, _0x20a526("warn"), -_0x5a66d4, 0.42, 0.44, 0.62);
      _0x463460(I.boom * 0.8);
    }
  }
  if (_0x34fd41.kind !== "warden" && re >= 3 && q("chainBlast", 600)) {
    const _0x3b9884 = Math.min(1.65, 1.25 + (re - 3) * 0.14);
    _0x10f3b6(L.death, _0x34fd41.x, _0x34fd41.y, _0x20a526("warn"), -_0x5a66d4, 0.56, 0.66, _0x3b9884);
    _0x10f3b6(L.death, _0x34fd41.x, _0x34fd41.y, _0x165429, _0x5a66d4, 0.28, 0.58, _0x3b9884 * 0.72);
    _0x21163e(155, 1.34, 0.24, _0x34fd41.x, _0x34fd41.y, _0x20a526("warn"), 0, 1, 0.065);
    _0x463460(I.kill * 0.65);
  }
}
function me(_0x31a442) {
  if (_0x31a442.mode === "pop" && (_0x31a442.y < _0x29749d.edges.killY || _0x51d2ad > _0x31a442.dieAt)) {
    return;
  }
  if (_0x51d2ad < _0x31a442.noCatchUntil) {
    return;
  }
  if (!function (_0x38619a, _0x1a6b1f, _0x426fc7) {
    const _0x274e24 = Math.max(_0x24d7c9.x - _0x24d7c9.hw, Math.min(_0x38619a, _0x24d7c9.x + _0x24d7c9.hw));
    const _0x4ca884 = Math.max(_0x24d7c9.y, Math.min(_0x1a6b1f, _0x24d7c9.y + _0x24d7c9.h));
    return (_0x38619a - _0x274e24) ** 2 + (_0x1a6b1f - _0x4ca884) ** 2 < _0x426fc7 * _0x426fc7;
  }(_0x31a442.x, _0x31a442.y, _0x29749d.capsules.pickupRadius)) {
    return;
  }
  const _0x20e9fe = _0x20a526(_0x31a442.kind === "mod" ? "modCapsule" : "capsule");
  _0x49fa38(L.pickup, _0x31a442.x, _0x31a442.y, _0x20e9fe, 1.35);
  _0x10f3b6(L.pickup, _0x31a442.x, _0x31a442.y, _0x20e9fe, 0, 1, 1.65, 1.25);
  _0x43c916(L.pickup.flashMs * 1.25, L.pickup.flashSize * 1.15, _0x31a442.x, _0x31a442.y, _0x20e9fe);
  _0x1bc2b6(280, _0x31a442.kind === "mod" ? 2.35 : 1.85, _0x31a442.x, _0x31a442.y, _0x20e9fe, 0.05);
}
const fe = {
  hp: _0x24d7c9.hp,
  airJumpsLeft: _0x24d7c9.airJumpsLeft,
  traversalState: _0x24d7c9.traversalState,
  cornerK: 0,
  cornerState: "idle",
  snap1: false,
  snap2: false,
  xfIndex: -1,
  xfState: "idle",
  xfSnap1: false,
  xfSnap2: false
};
function le() {
  if (_0x24d7c9.hp < fe.hp) {
    _0x49fa38(L.hurt, _0x24d7c9.x, _0x24d7c9.y + _0x24d7c9.h * 0.5, _0x20a526("rig"));
    _0x43c916(L.hurt.flashMs, L.hurt.flashSize, _0x24d7c9.x, _0x24d7c9.y + _0x24d7c9.h * 0.5, _0x20a526("rig"));
  }
  fe.hp = _0x24d7c9.hp;
  const _0x4ba446 = !_0x24d7c9.grounded && _0x24d7c9.airJumpsLeft < fe.airJumpsLeft;
  const _0x29dfed = fe.traversalState !== "free" && _0x24d7c9.traversalState === "free" && _0x24d7c9.vy > 0.5;
  if (_0x18faa2() >= _0x29749d.score.notches.length && (_0x4ba446 || _0x29dfed)) {
    const _0x324172 = _0x24d7c9.x;
    const _0x510db0 = _0x24d7c9.y + _0x24d7c9.h * 0.52;
    const _0x142c23 = _0x3af262(Q);
    const _0x4b5b4b = _0x29749d.score.shockRadius;
    _0x10f3b6(L.death, _0x324172, _0x510db0, _0x142c23, 0, 1, 2.45, 1.45);
    _0x43c916(190, 1.75, _0x324172, _0x510db0, _0x142c23, 0.08);
    _0x1bc2b6(320, _0x4b5b4b * 2, _0x324172, _0x510db0, _0x142c23, 0.1);
    _0x1bc2b6(510, _0x4b5b4b * 2.55, _0x324172, _0x510db0, _0x20a526("warn"), 0.04);
    _0x463460(I.boom * 0.72);
  }
  fe.airJumpsLeft = _0x24d7c9.airJumpsLeft;
  fe.traversalState = _0x24d7c9.traversalState;
  const _0x219948 = _0x231c5c();
  if (_0x219948 && (_0x219948.k === fe.cornerK && _0x219948.state === fe.cornerState || (_0x219948.state === "turning" && (fe.snap1 = false, fe.snap2 = false), fe.cornerK = _0x219948.k, fe.cornerState = _0x219948.state), _0x219948.state === "turning")) {
    const _0x4cddac = _0x51d2ad - _0x219948.tStart;
    if (!fe.snap1 && _0x4cddac >= A.t2) {
      fe.snap1 = true;
      _0x463460(I.snap1);
    }
    if (!fe.snap2 && _0x4cddac >= A.t4) {
      fe.snap2 = true;
      _0x463460(I.snap2);
    }
  }
}
function de(_0x1edb56, _0x5d56fe) {
  if (_0x1edb56.index !== fe.xfIndex) {
    fe.xfIndex = _0x1edb56.index;
    fe.xfSnap1 = false;
    fe.xfSnap2 = false;
  }
  if (!fe.xfSnap1 && _0x5d56fe >= Y.t2) {
    fe.xfSnap1 = true;
    _0x463460(I.snap1);
  }
  if (!fe.xfSnap2 && _0x5d56fe >= Y.t4) {
    fe.xfSnap2 = true;
    _0x463460(I.snap2);
  }
}
function he() {
  _0x463460(I.boom);
  const _0x46c0f3 = _0x24d7c9.y + _0x24d7c9.h * 0.55;
  const _0x25d4a7 = _0x3af262(Q);
  const _0x566eb2 = _0x20a526("warn");
  _0x10f3b6(L.death, _0x24d7c9.x, _0x46c0f3, _0x566eb2, 0, 1, 1.35, 1.45);
  _0x43c916(220, 1.65, _0x24d7c9.x, _0x46c0f3, _0x25d4a7, 0.04);
  _0x1bc2b6(390, 4.1, _0x24d7c9.x, _0x46c0f3, _0x25d4a7, 0.05);
  _0x1bc2b6(570, 6, _0x24d7c9.x, _0x46c0f3, _0x566eb2, 0.02);
}
function ue() {
  fe.xfIndex = -1;
  fe.xfSnap1 = false;
  fe.xfSnap2 = false;
}
export function resetJuicePresentation() {
  _0x463946();
  te.clear();
  Q = "R";
  Z = -1000000000;
  re = 0;
  se = -1000000000;
  ce = false;
  (function () {
    for (let _0x5f2d31 = 0; _0x5f2d31 < 16; _0x5f2d31++) {
      P[_0x5f2d31].active = false;
    }
    F = 0;
    K = 0;
    _ = 0;
  })();
  (function () {
    for (let _0xe715e6 = 0; _0xe715e6 < V; _0xe715e6++) {
      N[_0xe715e6].active = false;
    }
    E = 0;
    U = 0;
    X = 0;
  })();
  oe.active = false;
  oe.stage = 0;
  fe.hp = _0x24d7c9.hp;
  fe.airJumpsLeft = _0x24d7c9.airJumpsLeft;
  fe.traversalState = _0x24d7c9.traversalState;
  fe.cornerK = 0;
  fe.cornerState = "idle";
  fe.snap1 = false;
  fe.snap2 = false;
  ue();
  for (const _0x7b4d89 of Object.keys(W)) {
    delete W[_0x7b4d89];
  }
  xe = _0x51d2ad;
}
function ye(_0x6d6044) {
  if (_0x6d6044 === "PLAYING") {
    resetJuicePresentation();
  }
}
let xe = 0;
export function updateJuice() {
  if (!_0x2dca01 || je) {
    return;
  }
  const _0x114c1b = Math.max(0, Math.min(50, _0x51d2ad - xe));
  xe = _0x51d2ad;
  const _0x1200e4 = _0x24877e() > 0 ? _0x114c1b * L.hitStop.scale : _0x114c1b;
  const _0x1be740 = _0x231c5c();
  const _0x63f261 = _0x3583c1();
  if (_0x1be740 && (_0x1be740.state === "gate" || _0x1be740.state === "turning") || _0x63f261 && _0x63f261.state === "turning") {
    _0x463460(I.rumbleMax * I.decayPerSec * (_0x1200e4 / 1000));
  }
  (function () {
    for (let _0x49c70a = 0; _0x49c70a < 16; _0x49c70a++) {
      const _0x5c870e = P[_0x49c70a];
      if (!_0x5c870e.active) {
        continue;
      }
      const _0xc49042 = H[_0x5c870e.type];
      const _0x51b1d3 = _0x51d2ad - _0x5c870e.t0;
      if (_0x5c870e.stage === 0 && _0x51b1d3 >= _0xc49042.beat1) {
        _0x5c870e.stage = 1;
        C(_0x5c870e, 1);
      }
      if (_0x5c870e.stage === 1 && _0x51b1d3 >= _0xc49042.beat2) {
        _0x5c870e.stage = 2;
        C(_0x5c870e, 2);
      }
      if (_0x5c870e.stage === 2 && _0x51b1d3 >= _0xc49042.beat3) {
        _0x5c870e.stage = 3;
        C(_0x5c870e, 3);
        _0x5c870e.active = false;
        K--;
      }
    }
  })();
  (function () {
    for (let _0x4c174d = 0; _0x4c174d < V; _0x4c174d++) {
      const _0x220379 = N[_0x4c174d];
      if (!_0x220379.active) {
        continue;
      }
      if (!_0x220379.started) {
        _0x220379.started = true;
        $(_0x220379, 0);
      }
      const _0x194da3 = G[_0x220379.kind];
      const _0x5e5008 = _0x51d2ad - _0x220379.t0;
      if (_0x220379.stage === 0 && _0x5e5008 >= _0x194da3[0]) {
        _0x220379.stage = 1;
        $(_0x220379, 1);
      }
      if (_0x220379.stage === 1 && _0x5e5008 >= _0x194da3[1]) {
        _0x220379.stage = 2;
        $(_0x220379, 2);
      }
      if (_0x220379.stage === 2 && _0x5e5008 >= _0x194da3[2]) {
        _0x220379.stage = 3;
        $(_0x220379, 3);
        _0x220379.active = false;
        U--;
      }
    }
  })();
  (function () {
    if (!oe.active) {
      return;
    }
    const _0x188166 = oe;
    const _0xb06534 = _0x51d2ad - _0x188166.t0;
    if (_0x188166.stage === 0 && _0xb06534 >= 240) {
      _0x188166.stage = 1;
      _0x10f3b6(L.death, _0x188166.x - 1.55, _0x188166.y + 0.1, _0x188166.enemy, -1, 0.24, 0.28, 1.55);
      _0x10f3b6(L.death, _0x188166.x + 1.55, _0x188166.y + 0.1, _0x188166.enemy, 1, 0.24, 0.28, 1.55);
      _0x2e4de5("machine", _0x188166.x - 1.55, _0x188166.y + 0.1, _0x188166.enemy, -1, 0.18, 0.78);
      _0x2e4de5("machine", _0x188166.x + 1.55, _0x188166.y + 0.1, _0x188166.enemy, 1, 0.18, 0.78);
      _0x21163e(148, 1.18, 0.12, _0x188166.x, _0x188166.y + 0.18, _0x188166.carrier, _0x188166.dir, -0.08, 0.08);
      _0x463460(I.boom * 0.42);
    } else if (_0x188166.stage === 1 && _0xb06534 >= 650) {
      _0x188166.stage = 2;
      _0x10f3b6(L.impact, _0x188166.x - 1.48, _0x188166.y + 0.04, _0x188166.signal, 1, 0, 0.18, 1.35);
      _0x10f3b6(L.impact, _0x188166.x + 1.48, _0x188166.y + 0.04, _0x188166.signal, -1, 0, 0.18, 1.35);
      _0x21163e(215, 1.04, 0.1, _0x188166.x - 0.78, _0x188166.y + 0.2, _0x188166.signal, 1, -0.18, 0.12);
      _0x21163e(235, 0.94, 0.09, _0x188166.x + 0.76, _0x188166.y - 0.12, _0x188166.signal, -1, 0.18, 0.12);
      _0x463460(I.boom * 0.62);
    } else if (_0x188166.stage === 2 && _0xb06534 >= 1010) {
      _0x188166.stage = 3;
      _0x10f3b6(L.impact, _0x188166.x - 0.4, _0x188166.y + 0.02, _0x188166.enemy, -0.22, -1, 0.18, 0.72);
      _0x10f3b6(L.impact, _0x188166.x + 0.4, _0x188166.y + 0.02, _0x188166.enemy, 0.22, -1, 0.18, 0.72);
      _0x10f3b6(L.impact, _0x188166.x, _0x188166.y + 0.1, _0x188166.signal, 0, 1, 0.24, 0.58);
      _0x21163e(150, 1.34, 0.09, _0x188166.x - 0.1, _0x188166.y + 0.02, _0x188166.carrier, 0, -1, 0.1);
      _0x21163e(132, 0.92, 0.075, _0x188166.x + 0.06, _0x188166.y + 0.09, _0x188166.signal, 1, 0, 0.105);
      _0x21163e(142, 0.76, 0.07, _0x188166.x - 0.04, _0x188166.y - 0.08, _0x188166.enemy, -0.72, -0.38, 0.095);
      _0x337c66(_0x188166.x, _0x188166.y - 0.12, _0x188166.enemy, 0, 1.05, 0.06);
      _0x463460(I.boom * 0.78);
    } else if (_0x188166.stage === 3 && _0xb06534 >= 1260) {
      _0x188166.active = false;
    }
  })();
  _0x58b96a(_0x1200e4);
}
export function juiceSnapshot() {
  const _0x5abc1b = _0xb7bc67();
  return {
    enabled: _0x2dca01,
    trauma: _0x2dca01 ? +_0x4855ae().toFixed(4) : 0,
    hitStopMs: _0x2dca01 ? +_0x24877e().toFixed(2) : 0,
    actionImpacts: {
      active: K,
      max: 16,
      cursor: F,
      recycles: _,
      drawPoolsAdded: 0
    },
    deathSentences: {
      active: U,
      max: V,
      cursor: E,
      recycles: X,
      stages: 4,
      corpseTransformWrites: 0,
      drawPoolsAdded: 0
    },
    impactGrammar: {
      version: ACTION_VFX_V2_HOOKS.version,
      beats: 4,
      source: "procedural-pools"
    },
    bridge: {
      hostileInstalls: ke
    },
    wardenRupture: oe.active ? oe.stage : -1,
    ..._0x5abc1b
  };
}
function ge(_0x652fa6, _0x3249b7, _0x593b7a) {
  const _0x41740c = _0x652fa6 === null ? _0x599b35 : _0x599b35[_0x652fa6];
  const _0x16959d = "juice:" + (_0x652fa6 === null ? "view" : _0x652fa6) + "." + _0x3249b7;
  for (let _0x54bd9b = _0x41740c[_0x3249b7]; typeof _0x54bd9b == "function"; _0x54bd9b = _0x54bd9b[ve]) {
    if (_0x54bd9b[be] === _0x16959d) {
      return false;
    }
  }
  const _0x5af995 = _0x41740c[_0x3249b7];
  const _0x4f242a = (_0x5c52bf, _0x3cd88d, _0x38d369, _0xc843df, _0x5aead7, _0x4285da, _0x511bc2, _0x27a25a, _0x23336e, _0x44a2eb) => {
    _0x5af995(_0x5c52bf, _0x3cd88d, _0x38d369, _0xc843df, _0x5aead7, _0x4285da, _0x511bc2, _0x27a25a, _0x23336e, _0x44a2eb);
    if (!je) {
      try {
        _0x593b7a(_0x5c52bf, _0x3cd88d, _0x38d369, _0xc843df, _0x5aead7, _0x4285da, _0x511bc2, _0x27a25a, _0x23336e, _0x44a2eb);
      } catch (_0x41831d) {
        (function (_0x10d9dd) {
          if (!je) {
            console.warn("HULLBREAKER juice: effects disabled after error", _0x10d9dd);
          }
          je = true;
        })(_0x41831d);
      }
    }
  };
  Object.defineProperty(_0x4f242a, be, {
    value: _0x16959d
  });
  Object.defineProperty(_0x4f242a, ve, {
    value: _0x5af995
  });
  _0x41740c[_0x3249b7] = _0x4f242a;
  return true;
}
const be = Symbol.for("hullbreaker.juiceObserver");
const ve = Symbol.for("hullbreaker.previousBridge");
let ke = 0;
export function installJuiceHostileBridge() {
  if (!_0x2dca01) {
    return false;
  }
  let _0x221b0a = false;
  _0x221b0a = ge("hostiles", "spawned", ae) || _0x221b0a;
  _0x221b0a = ge("hostiles", "sync", ne) || _0x221b0a;
  _0x221b0a = ge("hostiles", "removed", pe) || _0x221b0a;
  if (_0x221b0a) {
    ke++;
  }
  return _0x221b0a;
}
let je = false;
let we = false;
export function initJuiceViewObservers() {
  return !!_0x2dca01 && !we && (ge("juice", "hitStop", D), ge("player", "sync", le), installJuiceHostileBridge(), ge("capsules", "removed", me), ge("bullets", "slotSpawned", ee), ge("bullets", "hostileImpact", ie), ge("transform", "ritual", de), ge("transform", "finished", he), ge("transform", "reset", ue), ge("level", "faceRevealed", he), ge(null, "stateScreen", ye), we = true, true);
}