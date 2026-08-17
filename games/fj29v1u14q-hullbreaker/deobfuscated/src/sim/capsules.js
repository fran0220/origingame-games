import { CONFIG as _0x56f12a, WEAPON_LETTERS as _0x567701 } from "../config.js";
import { rollGun as _0x5d1821 } from "../pure/gunroll.js";
import { mulberry32 as _0x2fcad5 } from "../pure/rng.js";
import { view as _0x4a306a } from "./bridge.js";
import { gameMs as _0x15e574 } from "./time.js";
import { sLeftEdge as _0xacfa07 } from "./edges.js";
import { LEVEL_LEN as _0x4fbce2, builtGroundTopAt as _0x3ab323 } from "./level.js";
import { circleHitsPlayer as _0x27c202 } from "./player.js";
import { setGun as _0x219c3a } from "./weapons.js";
import { applyMod as _0x21d3b1 } from "./mods.js";
import { scoreRecatch as _0x4dc6ef, scoreRewardTaken as _0x4bd0ad } from "./score.js";
export const capsules = [];
export const CAP = _0x56f12a.capsules;
let f = 0;
export function spawnCapsule(_0x1fd0be, _0x29c350, _0x23707d, _0x29112b, _0x329bba, _0x11450f, _0x1f803a = null) {
  const _0x565f47 = _0x1fd0be === "letter" ? _0x1f803a || _0x5d1821(_0x29c350, _0x23707d / _0x4fbce2, _0x56f12a.gen.seed + ":" + f++ + ":" + Math.round(_0x23707d * 16)) : null;
  const _0x2dcf86 = {
    kind: _0x1fd0be,
    letter: _0x29c350,
    x: _0x23707d,
    y: _0x29112b,
    baseY: _0x29112b,
    vx: _0x11450f || 0,
    vy: _0x329bba === "pop" ? CAP.popVy : 0,
    mode: _0x329bba,
    dieAt: _0x329bba === "pop" ? _0x15e574 + CAP.recatchMs : 0,
    t: 0,
    noCatchUntil: _0x329bba === "pop" ? _0x15e574 + CAP.popNoCatchMs : 0,
    departedPlayer: _0x329bba !== "pop",
    gun: _0x565f47
  };
  capsules.push(_0x2dcf86);
  _0x4a306a.capsules.spawned(_0x2dcf86);
  return _0x2dcf86;
}
export function removeCapsule(_0x4cf3dc) {
  const _0x5a85ca = capsules[_0x4cf3dc];
  _0x4a306a.capsules.removed(_0x5a85ca);
  capsules.splice(_0x4cf3dc, 1);
}
export function clearCapsules() {
  for (let _0x164cd6 = capsules.length - 1; _0x164cd6 >= 0; _0x164cd6--) {
    removeCapsule(_0x164cd6);
  }
}
const C = _0x2fcad5(2600);
function y(_0x20de2d, _0x56a92a) {
  const _0x2d5b8f = _0x20de2d.slice();
  for (let _0x767457 = _0x2d5b8f.length - 1; _0x767457 > 0; _0x767457--) {
    const _0xd27826 = Math.floor(_0x56a92a() * (_0x767457 + 1));
    [_0x2d5b8f[_0x767457], _0x2d5b8f[_0xd27826]] = [_0x2d5b8f[_0xd27826], _0x2d5b8f[_0x767457]];
  }
  return _0x2d5b8f;
}
const x = y(_0x567701.filter(_0x954c6e => _0x954c6e !== "R"), C);
const A = y(["RG", "GS", "OL", "CH"], C);
let g = 0;
export function dropFromCarrier(_0x566320, _0x3b3e59, _0x27e6b8 = null) {
  if (_0x27e6b8 && _0x27e6b8.kind && _0x27e6b8.letter) {
    spawnCapsule(_0x27e6b8.kind, _0x27e6b8.letter, _0x566320, _0x3b3e59, "drift");
    return;
  }
  const _0x323665 = g++;
  if (_0x323665 < x.length) {
    spawnCapsule("letter", x[_0x323665], _0x566320, _0x3b3e59, "drift");
  } else {
    spawnCapsule("mod", A[(_0x323665 - x.length) % A.length], _0x566320, _0x3b3e59, "drift");
  }
}
export function updateCapsules(_0x3f8ae9) {
  for (let _0x37ff1a = capsules.length - 1; _0x37ff1a >= 0; _0x37ff1a--) {
    const _0x2f7958 = capsules[_0x37ff1a];
    _0x2f7958.t += _0x3f8ae9;
    if (_0x2f7958.mode === "drift") {
      _0x2f7958.x -= CAP.driftSpeed * _0x3f8ae9;
      const _0x153474 = _0x3ab323(_0x2f7958.x);
      const _0x4d9a6e = (_0x153474 > -100 ? _0x153474 : 2) + 1.5;
      _0x2f7958.baseY = Math.max(_0x2f7958.baseY - CAP.sinkSpeed * _0x3f8ae9, _0x4d9a6e);
      _0x2f7958.y = _0x2f7958.baseY + Math.sin(_0x2f7958.t * CAP.bobFreq) * CAP.bobAmp;
      if (_0x2f7958.x < _0xacfa07() - 4) {
        removeCapsule(_0x37ff1a);
        continue;
      }
    } else if (_0x2f7958.mode === "pop") {
      _0x2f7958.vy += CAP.gravity * _0x3f8ae9;
      _0x2f7958.x += _0x2f7958.vx * _0x3f8ae9;
      _0x2f7958.y += _0x2f7958.vy * _0x3f8ae9;
      const _0x39a0d7 = _0x3ab323(_0x2f7958.x);
      if (_0x39a0d7 > -100 && _0x2f7958.y <= _0x39a0d7 + 0.3 && _0x2f7958.vy < 0) {
        _0x2f7958.y = _0x39a0d7 + 0.3;
        _0x2f7958.vy = 0;
        _0x2f7958.vx *= 0.8;
      }
      if (_0x2f7958.y < _0x56f12a.edges.killY || _0x15e574 > _0x2f7958.dieAt) {
        removeCapsule(_0x37ff1a);
        continue;
      }
    } else {
      _0x2f7958.y = _0x2f7958.baseY + Math.sin(_0x2f7958.t * CAP.bobFreq) * CAP.bobAmp * 0.3;
    }
    if (!_0x2f7958.departedPlayer && !_0x27c202(_0x2f7958.x, _0x2f7958.y, CAP.pickupRadius + 0.18)) {
      _0x2f7958.departedPlayer = true;
    }
    if (_0x2f7958.departedPlayer && _0x15e574 >= _0x2f7958.noCatchUntil && _0x27c202(_0x2f7958.x, _0x2f7958.y, CAP.pickupRadius)) {
      if (_0x2f7958.kind === "mod") {
        _0x21d3b1(_0x2f7958.letter);
      } else {
        const _0xb95fcc = _0x219c3a(_0x2f7958.gun);
        _0x4a306a.loot.acquired(_0x2f7958.gun, _0xb95fcc, {
          recatch: _0x2f7958.mode === "pop"
        });
      }
      if (_0x2f7958.mode === "fixed") {
        _0x4bd0ad(_0x2f7958.letter, _0x2f7958.x, _0x2f7958.y);
      } else if (_0x2f7958.mode === "pop") {
        _0x4dc6ef(_0x2f7958.letter, _0x2f7958.dieAt - _0x15e574, _0x2f7958.x, _0x2f7958.y);
      }
      removeCapsule(_0x37ff1a);
    } else {
      _0x4a306a.capsules.sync(_0x2f7958);
    }
  }
}
export function resetCarrierDrops() {
  g = 0;
  f = 0;
}