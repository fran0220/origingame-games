import { CONFIG as _0xf15d3a } from "../config.js";
import { ENEMY_TACTICS as _0x2346da, aircombTooth as _0x256079, crosswindPulse as _0xd9c8b5, ecologyHasTactic as _0xe2cfd, effectiveEcologyMechanics as _0x4378d3, reboundLaunch as _0x24ce56, resolveEnemyEcology as _0x50cc68, segmentBandHitsRect as _0x3b1cd0, sweepfanDirection as _0x29c4b0 } from "../pure/enemy-ecology.js";
import { BEND_S as _0x4b5f58, crossesBend as _0x19013e } from "../pure/path.js";
import { polypBeamHitsRect as _0x2c0ea2, polypBeamReach as _0x26eaed } from "../pure/polyp.js";
import { mortarArmed as _0x1a2fd4 } from "../pure/mortar.js";
import { TRANSFORM_BEND_S as _0x169cc2 } from "../pure/transform.js";
import { IS_TRANSFORM_SLICE as _0x5f1ecc } from "../mode.js";
import { builtGroundTopAt as _0x4c9d59, builtSolidAt as _0x789c66 } from "./level.js";
import { damagePlayer as _0x307f42, player as _0xf2c99d } from "./player.js";
import { gameMs as _0x51bca0, approach as _0x3391da } from "./time.js";
const w = _0x5f1ecc ? _0x169cc2 : _0x4b5f58;
const Y = Object.freeze([]);
const R = Math.max(0, Math.min(3, _0xf15d3a.enemyEcology.maxHazardsPerBody | 0));
const H = {
  x: 0,
  y: 0,
  offset: 0
};
function E(_0x41d06f) {
  if (_0xe2cfd(_0x41d06f, _0x2346da.HORIZONTAL_BURST) || _0xe2cfd(_0x41d06f, _0x2346da.DESCENT_COMB)) {
    return [{
      active: false,
      kind: "",
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      startX: 0,
      startY: 0,
      groundY: 0,
      vx: 0,
      vy: 0,
      radius: 0,
      bornAt: 0,
      expiresAt: 0
    }, {
      active: false,
      kind: "",
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      startX: 0,
      startY: 0,
      groundY: 0,
      vx: 0,
      vy: 0,
      radius: 0,
      bornAt: 0,
      expiresAt: 0
    }, {
      active: false,
      kind: "",
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      startX: 0,
      startY: 0,
      groundY: 0,
      vx: 0,
      vy: 0,
      radius: 0,
      bornAt: 0,
      expiresAt: 0
    }];
  } else {
    return null;
  }
}
export function makeEnemyEcologyFields(_0x36d633, _0x350568, _0xce1054 = 0, _0x3ddc68 = null) {
  const _0x8736dd = _0x50cc68(_0x350568?.ecologyId, _0x36d633);
  const _0x1b28fb = _0x4378d3(_0x8736dd, _0x3ddc68);
  return {
    ecology: _0x8736dd,
    ecologyId: _0x8736dd?.id || "",
    ecologyFamily: _0x8736dd?.family || "",
    ecologyMechanics: _0x8736dd?.mechanics || Y,
    effectiveMechanics: _0x1b28fb,
    tactics: _0x8736dd?.tactics || Y,
    tacticState: "idle",
    tacticPhase: "stowed",
    tacticProgress: 0,
    tacticUntil: 0,
    tacticStartedAt: 0,
    tacticCycle: 0,
    tacticUses: 0,
    tacticHomeY: (_0x193eea = _0xce1054, Number.isFinite(_0x193eea) ? _0x193eea : 0),
    tacticAimY: 0,
    tacticDir: 0,
    tacticBeamX: 0,
    tacticBeamY: 0,
    tacticCooldownMs: 0,
    tacticFallback: false,
    tacticHazardCount: 0,
    tacticHazards: E(_0x8736dd)
  };
  var _0x193eea;
}
export function ecologyMechanic(_0x451485, _0x3bb41a) {
  return !!_0x451485?.effectiveMechanics?.includes(_0x3bb41a);
}
export function enemyHasTactic(_0x36c9de, _0x23ce22) {
  return _0xe2cfd(_0x36c9de, _0x23ce22);
}
function C(_0x1400a7, _0x4e9658, _0x5609e3, _0x4afd1e = 0) {
  _0x1400a7.tacticState = _0x4e9658;
  _0x1400a7.tacticPhase = _0x5609e3;
  _0x1400a7.tacticStartedAt = _0x51bca0;
  _0x1400a7.tacticUntil = _0x4afd1e;
  _0x1400a7.tacticProgress = 0;
}
function T(_0x3e908d, _0x2674db = _0x3e908d.tacticUntil) {
  const _0x1ff23b = Math.max(1, _0x2674db - _0x3e908d.tacticStartedAt);
  return Math.max(0, Math.min(1, (_0x51bca0 - _0x3e908d.tacticStartedAt) / _0x1ff23b));
}
function z(_0x1c092e) {
  if (_0x1c092e.tacticHazards) {
    for (const _0x51cf37 of _0x1c092e.tacticHazards) {
      _0x51cf37.active = false;
    }
  }
  _0x1c092e.tacticHazardCount = 0;
}
export function resetReboundCycle(_0x41f684) {
  if (enemyHasTactic(_0x41f684, _0x2346da.REVERSE_VAULT)) {
    _0x41f684.tacticCycle++;
    _0x41f684.tacticUses = 0;
    C(_0x41f684, "acquire", "charge-tell", _0x41f684.stateUntil);
  }
}
export function markReboundCharge(_0xdf7d97) {
  if (enemyHasTactic(_0xdf7d97, _0x2346da.REVERSE_VAULT)) {
    C(_0xdf7d97, "release", "forward-charge", _0xdf7d97.stateUntil);
  }
}
export function markReboundRecovery(_0x3cc9dd, _0x381a9b = "landing-recover") {
  if (enemyHasTactic(_0x3cc9dd, _0x2346da.REVERSE_VAULT)) {
    C(_0x3cc9dd, "recover", _0x381a9b, _0x3cc9dd.stateUntil);
  }
}
export function settleRebound(_0xd8dade) {
  if (enemyHasTactic(_0xd8dade, _0x2346da.REVERSE_VAULT)) {
    C(_0xd8dade, "idle", "stowed");
  }
}
export function beginRebound(_0x2f7e96) {
  if (!enemyHasTactic(_0x2f7e96, _0x2346da.REVERSE_VAULT) || _0x2f7e96.tacticUses >= 1) {
    return false;
  }
  const _0x5aac74 = _0xf15d3a.enemyEcology.rebound;
  _0x2f7e96.tacticUses = 1;
  _0x2f7e96.vx = 0;
  _0x2f7e96.vy = 0;
  _0x2f7e96.state = "reboundTell";
  _0x2f7e96.stateUntil = _0x51bca0 + _0x5aac74.brakeTellMs;
  _0x2f7e96.tacticDir = -(Math.sign(_0x2f7e96.dir) || -1);
  C(_0x2f7e96, "tell", "edge-brake", _0x2f7e96.stateUntil);
  return true;
}
function A(_0x41668c, _0x379ace) {
  if (_0x41668c.deckY === undefined) {
    return _0x4c9d59(_0x379ace);
  } else if (_0x789c66(_0x379ace, _0x41668c.deckY - 0.5)) {
    return _0x41668c.deckY;
  } else {
    return -999;
  }
}
export function updateRebound(_0x4eb95f, _0x483a02) {
  if (_0x4eb95f.state === "reboundTell") {
    _0x4eb95f.tacticProgress = T(_0x4eb95f, _0x4eb95f.stateUntil);
    if (_0x51bca0 >= _0x4eb95f.stateUntil) {
      const _0x31209f = _0xf15d3a.enemyEcology.rebound;
      const _0x41d31f = _0x24ce56(-_0x4eb95f.tacticDir, _0x31209f);
      _0x4eb95f.dir = _0x41d31f.dir;
      _0x4eb95f.vx = _0x41d31f.vx;
      _0x4eb95f.vy = _0x41d31f.vy;
      _0x4eb95f.state = "reboundVault";
      _0x4eb95f.stateUntil = _0x51bca0 + _0x31209f.vaultMs;
      C(_0x4eb95f, "release", "reverse-vault", _0x4eb95f.stateUntil);
    }
    return "active";
  }
  if (_0x4eb95f.state !== "reboundVault") {
    return "";
  }
  const _0x174231 = _0xf15d3a.hound;
  const _0x25e7ee = _0xf15d3a.enemyEcology.rebound;
  const _0x42111c = Math.min(_0x174231.substeps, Math.max(1, Math.ceil(Math.hypot(_0x4eb95f.vx, _0x4eb95f.vy) * _0x483a02 / 0.4)));
  const _0x1cd7c2 = _0x483a02 / _0x42111c;
  for (let _0x4c50e9 = 0; _0x4c50e9 < _0x42111c; _0x4c50e9++) {
    const _0x27bf9e = _0x4eb95f.x;
    const _0x1c0568 = _0x4eb95f.y;
    _0x4eb95f.vy += _0x25e7ee.gravity * _0x1cd7c2;
    _0x4eb95f.x += _0x4eb95f.vx * _0x1cd7c2;
    _0x4eb95f.y += _0x4eb95f.vy * _0x1cd7c2;
    if (_0x19013e(w, _0x27bf9e, _0x4eb95f.x)) {
      _0x4eb95f.x = _0x27bf9e;
      _0x4eb95f.y = _0x1c0568;
      _0x4eb95f.vy = 0;
      markReboundRecovery(_0x4eb95f, "facet-stop");
      return "wall";
    }
    if (_0x3b1cd0(_0x27bf9e, _0x1c0568, _0x4eb95f.x, _0x4eb95f.y, _0x4eb95f.hitR, _0xf2c99d.x - _0xf2c99d.hw, _0xf2c99d.x + _0xf2c99d.hw, _0xf2c99d.y, _0xf2c99d.y + _0xf2c99d.h)) {
      _0x307f42(1, _0x4eb95f.x);
    }
    if (_0x789c66(_0x4eb95f.x + _0x4eb95f.dir * _0x174231.probeX * 0.35, _0x4eb95f.y)) {
      _0x4eb95f.vy = 0;
      markReboundRecovery(_0x4eb95f, "wall-recover");
      return "wall";
    }
    let _0x583441 = A(_0x4eb95f, _0x4eb95f.x);
    if (_0x583441 < -100) {
      _0x4eb95f.deckY = undefined;
      _0x583441 = _0x4c9d59(_0x4eb95f.x);
    }
    if (_0x4eb95f.vy <= 0 && _0x583441 > -100 && _0x4eb95f.y <= _0x583441 + _0x174231.rideY) {
      _0x4eb95f.y = _0x583441 + _0x174231.rideY;
      _0x4eb95f.vy = 0;
      markReboundRecovery(_0x4eb95f, "landing-recover");
      return "land";
    }
  }
  _0x4eb95f.tacticProgress = T(_0x4eb95f, _0x4eb95f.stateUntil);
  if (_0x51bca0 >= _0x4eb95f.stateUntil) {
    markReboundRecovery(_0x4eb95f, "failed-landing");
    return "tumble";
  } else {
    return "active";
  }
}
export function beginCrosswind(_0x593e93, _0x163d94, _0x1aa7d3, _0x54b156) {
  if (!enemyHasTactic(_0x593e93, _0x2346da.HORIZONTAL_BURST) || !_0x593e93.formationReady || Math.abs(_0x593e93.x - _0xf2c99d.x) >= _0x163d94 || _0xf2c99d.y + 0.5 >= _0x593e93.y || _0x51bca0 <= _0x593e93.diveCdUntil || !_0x54b156) {
    return false;
  }
  const _0x5542ae = _0xf15d3a.enemyEcology.crosswind;
  _0x593e93.tacticCycle++;
  _0x593e93.tacticUses = 0;
  _0x593e93.tacticHomeY = _0x593e93.baseY;
  _0x593e93.tacticAimY = _0xf2c99d.y + _0xf2c99d.h * 0.5;
  _0x593e93.tacticDir = Math.sign(_0xf2c99d.x - _0x593e93.x) || _0x593e93.dir;
  _0x593e93.dir = _0x593e93.tacticDir;
  _0x593e93.tacticCooldownMs = _0x1aa7d3;
  if (_0x593e93.twinstrike && _0x593e93.twinPassesLeft <= 0) {
    _0x593e93.twinPassesLeft = 2;
  }
  _0x593e93.state = "crosswindTell";
  _0x593e93.stateUntil = _0x51bca0 + _0x5542ae.tellMs;
  C(_0x593e93, "tell", "horizontal-line-tell", _0x593e93.stateUntil);
  z(_0x593e93);
  return true;
}
export function updateCrosswind(_0x5ee256, _0x143607, _0x421a77, _0x1d20f0) {
  const _0x1f928b = _0xf15d3a.enemyEcology.crosswind;
  if (_0x5ee256.state === "crosswindTell") {
    _0x5ee256.baseY = _0x3391da(_0x5ee256.baseY, _0x5ee256.tacticAimY + _0x1f928b.bodyOffsetY, _0x1f928b.acquireRate * _0x143607);
    _0x5ee256.y = _0x5ee256.baseY;
    _0x5ee256.tacticProgress = T(_0x5ee256, _0x5ee256.stateUntil);
    if (_0x51bca0 >= _0x5ee256.stateUntil) {
      _0x5ee256.state = "crosswindBurst";
      _0x5ee256.stateUntil = _0x51bca0 + _0x1f928b.burstMs;
      _0x5ee256.vx = _0x5ee256.tacticDir * _0x1f928b.strafeSpeed;
      C(_0x5ee256, "release", "parallel-burst", _0x5ee256.stateUntil);
      (function (_0x5a65f2) {
        const _0x4515e8 = _0xf15d3a.enemyEcology.crosswind;
        const _0x23000c = Math.min(R, _0x4515e8.count | 0, _0x5a65f2.tacticHazards?.length || 0);
        const _0x240e8c = _0x5a65f2.x + _0x5a65f2.tacticDir * _0x4515e8.muzzleTiles;
        for (let _0x5e87e4 = 0; _0x5e87e4 < _0x23000c; _0x5e87e4++) {
          const _0x175fc4 = _0xd9c8b5(_0x5e87e4, _0x240e8c, _0x5a65f2.tacticAimY, _0x5a65f2.tacticDir, _0x4515e8);
          const _0xe58bb7 = _0x5a65f2.tacticHazards[_0x5e87e4];
          _0xe58bb7.active = true;
          _0xe58bb7.kind = "crosswind";
          _0xe58bb7.x = _0xe58bb7.prevX = _0xe58bb7.startX = _0x175fc4.x;
          _0xe58bb7.y = _0xe58bb7.prevY = _0xe58bb7.startY = _0x175fc4.y;
          _0xe58bb7.vx = _0x175fc4.vx;
          _0xe58bb7.vy = 0;
          _0xe58bb7.radius = _0x175fc4.radius;
          _0xe58bb7.bornAt = _0x51bca0;
          _0xe58bb7.expiresAt = _0x51bca0 + _0x4515e8.lifeMs;
        }
        _0x5a65f2.tacticHazardCount = _0x23000c;
      })(_0x5ee256);
    }
    return true;
  }
  if (_0x5ee256.state === "crosswindBurst") {
    const _0x38f521 = Math.max(_0x421a77, Math.min(_0x1d20f0, _0x5ee256.x + _0x5ee256.vx * _0x143607));
    const _0x1f9128 = _0x19013e(w, _0x5ee256.x, _0x38f521);
    if (!_0x1f9128) {
      _0x5ee256.x = _0x38f521;
    }
    _0x5ee256.y = _0x5ee256.baseY;
    _0x5ee256.tacticProgress = T(_0x5ee256, _0x5ee256.stateUntil);
    if (_0x51bca0 >= _0x5ee256.stateUntil || _0x1f9128 || _0x5ee256.x <= _0x421a77 || _0x5ee256.x >= _0x1d20f0) {
      _0x5ee256.state = "crosswindRecover";
      _0x5ee256.stateUntil = _0x51bca0 + _0x1f928b.recoverMs;
      _0x5ee256.vx = 0;
      C(_0x5ee256, "recover", "strafe-exit", _0x5ee256.stateUntil);
    }
    return true;
  }
  return _0x5ee256.state === "crosswindRecover" && (_0x5ee256.baseY = _0x3391da(_0x5ee256.baseY, _0x5ee256.tacticHomeY, _0x1f928b.acquireRate * _0x143607), _0x5ee256.y = _0x5ee256.baseY, _0x5ee256.tacticProgress = T(_0x5ee256, _0x5ee256.stateUntil), _0x51bca0 >= _0x5ee256.stateUntil && (_0x5ee256.twinstrike && _0x5ee256.twinPassesLeft > 1 ? (_0x5ee256.twinPassesLeft--, _0x5ee256.formationSide &&= -_0x5ee256.formationSide, _0x5ee256.formationReady = false, _0x5ee256.diveCdUntil = _0x51bca0 + _0xf15d3a.genome.twinGapMs) : (_0x5ee256.twinPassesLeft = 0, _0x5ee256.diveCdUntil = _0x51bca0 + (_0x5ee256.tacticCooldownMs || 0)), _0x5ee256.state = "cruise", C(_0x5ee256, "idle", "stowed")), true);
}
function S(_0x1b201b, _0x430058, _0x8e661, _0x896172) {
  const _0xaa6e1a = _0x1b201b.x + _0x1b201b.vx * _0x430058;
  const _0x193448 = _0x1b201b.y;
  if (_0x51bca0 >= _0x1b201b.expiresAt || _0xaa6e1a < _0x8e661 || _0xaa6e1a > _0x896172 || function (_0x2e7409, _0x16ebfb, _0x48a79c, _0x2c6a57) {
    if (_0x19013e(w, _0x2e7409, _0x48a79c)) {
      return true;
    }
    const _0x1e4501 = Math.hypot(_0x48a79c - _0x2e7409, _0x2c6a57 - _0x16ebfb);
    const _0x811858 = Math.max(1, Math.ceil(_0x1e4501 / 0.28));
    for (let _0x292573 = 1; _0x292573 <= _0x811858; _0x292573++) {
      const _0x3bea1c = _0x292573 / _0x811858;
      if (_0x789c66(_0x2e7409 + (_0x48a79c - _0x2e7409) * _0x3bea1c, _0x16ebfb + (_0x2c6a57 - _0x16ebfb) * _0x3bea1c)) {
        return true;
      }
    }
    return false;
  }(_0x1b201b.x, _0x1b201b.y, _0xaa6e1a, _0x193448)) {
    _0x1b201b.active = false;
  } else {
    if (_0x3b1cd0(_0x1b201b.x, _0x1b201b.y, _0xaa6e1a, _0x193448, _0x1b201b.radius, _0xf2c99d.x - _0xf2c99d.hw, _0xf2c99d.x + _0xf2c99d.hw, _0xf2c99d.y, _0xf2c99d.y + _0xf2c99d.h)) {
      _0x307f42(1, _0x1b201b.x);
      _0x1b201b.active = false;
      return;
    }
    _0x1b201b.prevX = _0x1b201b.x;
    _0x1b201b.prevY = _0x1b201b.y;
    _0x1b201b.x = _0xaa6e1a;
    _0x1b201b.y = _0x193448;
  }
}
export function updateSweepfan(_0x32df1e, _0x50f99b) {
  if (!enemyHasTactic(_0x32df1e, _0x2346da.BOUNDED_SWEEP)) {
    return false;
  }
  const _0x27ff54 = _0xf15d3a.polyp;
  if (_0x51bca0 < _0x32df1e.enterUntil) {
    return true;
  }
  if (_0x32df1e.state === "relay") {
    return false;
  }
  if (_0x32df1e.state === "closed") {
    C(_0x32df1e, "idle", "stowed");
    _0x32df1e.beamReach = 0;
    if (!!_0x50f99b && !(_0x51bca0 < _0x32df1e.diveCdUntil)) {
      if (_0x32df1e.autoCycle || function (_0x542ede, _0x45e9c8) {
        const _0x4c2d30 = _0x542ede.x + _0x542ede.dir * _0x45e9c8.barrelTiles;
        const _0xa08d6c = _0x26eaed(_0x4c2d30, _0x542ede.y, _0x542ede.dir, _0x542ede.sightClamp, _0x789c66, _0x45e9c8.beamStepTiles);
        const _0x297458 = _0x45e9c8.anticipateMs / 1000;
        const _0x5263c9 = Math.max(-_0x45e9c8.predictXCap, Math.min(_0x45e9c8.predictXCap, _0xf2c99d.vx * _0x297458));
        const _0x1f8a32 = Math.max(-_0x45e9c8.predictYCap, Math.min(_0x45e9c8.predictYCap, _0xf2c99d.vy * _0x297458));
        return _0x2c0ea2(_0x4c2d30, _0x542ede.y, _0x542ede.dir, _0xa08d6c, _0x45e9c8.beamHalf, _0xf2c99d.x - _0xf2c99d.hw, _0xf2c99d.x + _0xf2c99d.hw, _0xf2c99d.y, _0xf2c99d.y + _0xf2c99d.h) || _0x2c0ea2(_0x4c2d30, _0x542ede.y, _0x542ede.dir, _0xa08d6c, _0x45e9c8.beamHalf, _0xf2c99d.x + _0x5263c9 - _0xf2c99d.hw, _0xf2c99d.x + _0x5263c9 + _0xf2c99d.hw, _0xf2c99d.y + _0x1f8a32, _0xf2c99d.y + _0x1f8a32 + _0xf2c99d.h);
      }(_0x32df1e, _0x27ff54)) {
        _0x32df1e.state = "tell";
        _0x32df1e.stateUntil = _0x51bca0 + _0x27ff54.tellMs;
        _0x32df1e.tacticDir = _0x32df1e.genome?.phenotype?.handedness || 1;
        C(_0x32df1e, "tell", "bounded-arc-tell", _0x32df1e.stateUntil);
      }
    }
    return true;
  }
  if (_0x32df1e.state === "tell") {
    _0x32df1e.tacticProgress = T(_0x32df1e, _0x32df1e.stateUntil);
    if (_0x51bca0 >= _0x32df1e.stateUntil) {
      _0x32df1e.state = "fire";
      _0x32df1e.stateUntil = _0x51bca0 + _0x27ff54.beamMs;
      C(_0x32df1e, "release", "sweep-start", _0x32df1e.stateUntil);
    }
    return true;
  }
  if (_0x32df1e.state === "fire") {
    const _0x12d0ac = T(_0x32df1e, _0x32df1e.stateUntil);
    const _0x492127 = _0x29c4b0(_0x32df1e.dir, _0x32df1e.tacticDir, _0x12d0ac, _0xf15d3a.enemyEcology.sweepfan, H);
    const _0xb619b1 = function (_0x235b08, _0x5a3a38, _0x475ff6) {
      const _0x57b958 = _0xf15d3a.polyp;
      const _0x35a5de = _0xf15d3a.enemyEcology.sweepfan;
      const _0x3cb41d = _0x235b08.x + _0x235b08.dir * _0x57b958.barrelTiles;
      const _0x168d1b = Math.max(0, _0x235b08.sightClamp);
      const _0x30a753 = Math.abs(_0x5a3a38) > 0.00001 ? _0x168d1b / Math.abs(_0x5a3a38) : _0x57b958.sightRange;
      const _0x24c250 = Math.min(_0x57b958.sightRange, _0x30a753);
      let _0x1616ff = 0;
      while (_0x1616ff < _0x24c250) {
        const _0x19fa57 = Math.min(_0x24c250, _0x1616ff + _0x35a5de.beamStepTiles);
        if (_0x789c66(_0x3cb41d + _0x5a3a38 * _0x19fa57, _0x235b08.y + _0x475ff6 * _0x19fa57)) {
          return _0x19fa57;
        }
        _0x1616ff = _0x19fa57;
      }
      return _0x24c250;
    }(_0x32df1e, _0x492127.x, _0x492127.y);
    const _0x2d9651 = _0x32df1e.x + _0x32df1e.dir * _0x27ff54.barrelTiles;
    _0x32df1e.tacticBeamX = _0x492127.x;
    _0x32df1e.tacticBeamY = _0x492127.y;
    _0x32df1e.beamReach = _0xb619b1;
    _0x32df1e.tacticProgress = _0x12d0ac;
    if (_0x3b1cd0(_0x2d9651, _0x32df1e.y, _0x2d9651 + _0x492127.x * _0xb619b1, _0x32df1e.y + _0x492127.y * _0xb619b1, _0x27ff54.beamHalf, _0xf2c99d.x - _0xf2c99d.hw, _0xf2c99d.x + _0xf2c99d.hw, _0xf2c99d.y, _0xf2c99d.y + _0xf2c99d.h)) {
      _0x307f42(1, _0x32df1e.x);
    }
    if (_0x51bca0 >= _0x32df1e.stateUntil) {
      _0x32df1e.state = "vent";
      _0x32df1e.stateUntil = _0x51bca0 + _0x27ff54.ventMs;
      _0x32df1e.beamReach = 0;
      C(_0x32df1e, "recover", "terminal-vent", _0x32df1e.stateUntil);
    }
    return true;
  }
  if (_0x32df1e.state !== "vent") {
    return false;
  }
  _0x32df1e.tacticProgress = T(_0x32df1e, _0x32df1e.stateUntil);
  if (_0x51bca0 >= _0x32df1e.stateUntil) {
    if (_0x32df1e.relay) {
      return false;
    }
    _0x32df1e.state = "closed";
    _0x32df1e.diveCdUntil = _0x51bca0 + _0x27ff54.cooldownMs;
    C(_0x32df1e, "idle", "stowed");
  }
  return true;
}
function P(_0x4e3743, _0x5875fc) {
  const _0x31c98f = Math.max(_0x4e3743.groundY, _0x4e3743.y + _0x4e3743.vy * _0x5875fc);
  if (_0x3b1cd0(_0x4e3743.x, _0x4e3743.y, _0x4e3743.x, _0x31c98f, _0x4e3743.radius, _0xf2c99d.x - _0xf2c99d.hw, _0xf2c99d.x + _0xf2c99d.hw, _0xf2c99d.y, _0xf2c99d.y + _0xf2c99d.h)) {
    _0x307f42(1, _0x4e3743.x);
    _0x4e3743.active = false;
    return;
  }
  _0x4e3743.prevY = _0x4e3743.y;
  _0x4e3743.y = _0x31c98f;
  if (_0x51bca0 >= _0x4e3743.expiresAt || _0x4e3743.y <= _0x4e3743.groundY) {
    _0x4e3743.active = false;
  }
}
function k(_0x5ea140, _0x45e48a, _0x8ce3e7, _0x215101) {
  if (!function (_0x136656, _0x19e70f, _0x5c7cbe, _0x468619) {
    const _0x2b09df = _0xf15d3a.enemyEcology.aircomb;
    const _0x329ff5 = _0x136656.genome?.phenotype?.handedness || 1;
    for (let _0x10386f = 0; _0x10386f < R; _0x10386f++) {
      const _0x63153a = _0x136656.tacticHazards[_0x10386f];
      _0x256079(_0x10386f, _0x468619, _0x329ff5, _0x2b09df, _0x63153a);
      const _0x48d466 = _0x4c9d59(_0x63153a.x);
      if (_0x63153a.x < _0x19e70f || _0x63153a.x > _0x5c7cbe || _0x48d466 < -100 || _0x19013e(w, _0x136656.x, _0x63153a.x)) {
        return false;
      }
      _0x63153a.startX = _0x63153a.x;
      _0x63153a.prevX = _0x63153a.x;
      _0x63153a.groundY = _0x48d466;
      _0x63153a.y = _0x63153a.prevY = _0x63153a.startY = _0x48d466 + _0x2b09df.dropHeight;
    }
    return true;
  }(_0x5ea140, _0x45e48a, _0x8ce3e7, _0x215101)) {
    return false;
  }
  const _0x4fbf5b = _0xf15d3a.mortar;
  _0x5ea140.zoneX = _0x215101;
  _0x5ea140.zoneY = _0x4c9d59(_0x215101);
  _0x5ea140.state = "lob";
  _0x5ea140.stateUntil = _0x51bca0 + _0x4fbf5b.lobMs;
  _0x5ea140.podU = 0;
  C(_0x5ea140, "tell", "comb-corridor-tell", _0x5ea140.stateUntil);
  return true;
}
export function updateAircomb(_0x5a6cf4, _0x1bca9d, _0x5dac1b, _0x336aac) {
  if (!enemyHasTactic(_0x5a6cf4, _0x2346da.DESCENT_COMB)) {
    return false;
  }
  const _0x41bac7 = _0xf15d3a.mortar;
  const _0x203453 = _0xf15d3a.enemyEcology.aircomb;
  if (_0x51bca0 < _0x5a6cf4.enterUntil) {
    return true;
  }
  if (_0x5a6cf4.state === "aim") {
    C(_0x5a6cf4, "idle", "stowed");
    if (_0x1bca9d && _0x1a2fd4(_0xf2c99d.x, _0x5a6cf4.zoneHomeX, _0x41bac7.armRange)) {
      _0x5a6cf4.salvoShotsRemaining = _0x5a6cf4.salvo ? 2 : 1;
      if (!k(_0x5a6cf4, _0x5dac1b, _0x336aac, _0x5a6cf4.zoneHomeX)) {
        _0x5a6cf4.salvoShotsRemaining = 0;
      }
    }
    return true;
  }
  if (_0x5a6cf4.state === "lob") {
    _0x5a6cf4.podU = 1 - Math.max(0, (_0x5a6cf4.stateUntil - _0x51bca0) / _0x41bac7.lobMs);
    _0x5a6cf4.tacticProgress = T(_0x5a6cf4, _0x5a6cf4.stateUntil);
    if (_0x51bca0 >= _0x5a6cf4.stateUntil) {
      (function (_0x43aa65) {
        const _0x2c7f7d = _0xf15d3a.enemyEcology.aircomb;
        for (let _0x3977b4 = 0; _0x3977b4 < R; _0x3977b4++) {
          const _0x26f9d8 = _0x43aa65.tacticHazards[_0x3977b4];
          _0x26f9d8.active = true;
          _0x26f9d8.kind = "aircomb";
          _0x26f9d8.bornAt = _0x51bca0;
          _0x26f9d8.expiresAt = _0x51bca0 + _0x2c7f7d.dropMs;
          _0x26f9d8.vy = -_0x2c7f7d.dropHeight / Math.max(0.001, _0x2c7f7d.dropMs / 1000);
          _0x26f9d8.y = _0x26f9d8.prevY = _0x26f9d8.startY;
        }
        _0x43aa65.tacticHazardCount = R;
      })(_0x5a6cf4);
      _0x5a6cf4.state = "aircombDrop";
      _0x5a6cf4.stateUntil = _0x51bca0 + _0x203453.dropMs;
      _0x5a6cf4.podU = 1;
      C(_0x5a6cf4, "release", "teeth-descending", _0x5a6cf4.stateUntil);
    }
    return true;
  }
  if (_0x5a6cf4.state === "aircombDrop") {
    _0x5a6cf4.tacticProgress = T(_0x5a6cf4, _0x5a6cf4.stateUntil);
    if (_0x51bca0 >= _0x5a6cf4.stateUntil) {
      _0x5a6cf4.state = "aircombImpact";
      _0x5a6cf4.stateUntil = _0x51bca0 + _0x203453.impactMs;
      C(_0x5a6cf4, "release", "comb-impact", _0x5a6cf4.stateUntil);
    }
    return true;
  }
  if (_0x5a6cf4.state === "aircombImpact") {
    _0x5a6cf4.tacticProgress = T(_0x5a6cf4, _0x5a6cf4.stateUntil);
    if (_0x51bca0 < _0x5a6cf4.stateUntil) {
      return true;
    }
    z(_0x5a6cf4);
    if (_0x5a6cf4.salvo && _0x5a6cf4.salvoShotsRemaining > 1) {
      _0x5a6cf4.salvoShotsRemaining--;
      let _0x26db78 = function (_0x177891) {
        const _0x4076f1 = Math.sign(_0xf2c99d.vx) || -_0x177891.dir || 1;
        const _0x57145f = _0x177891.genome?.phenotype?.handedness || 1;
        if (_0x177891.salvoPattern === "BRACKET") {
          return _0x177891.zoneHomeX + _0x57145f * _0xf15d3a.genome.salvoOffset;
        } else if (_0x177891.salvoPattern === "CUTBACK") {
          return _0xf2c99d.x - _0x4076f1 * _0xf15d3a.genome.salvoOffset;
        } else {
          return _0xf2c99d.x + _0x4076f1 * _0xf15d3a.genome.salvoOffset;
        }
      }(_0x5a6cf4);
      if (k(_0x5a6cf4, _0x5dac1b, _0x336aac, _0x26db78)) {
        return true;
      }
      _0x26db78 = _0x5a6cf4.zoneHomeX;
      if (k(_0x5a6cf4, _0x5dac1b, _0x336aac, _0x26db78)) {
        return true;
      }
    }
    _0x5a6cf4.salvoShotsRemaining = 0;
    _0x5a6cf4.zoneX = _0x5a6cf4.zoneHomeX;
    _0x5a6cf4.zoneY = _0x5a6cf4.zoneHomeY;
    _0x5a6cf4.state = "cool";
    _0x5a6cf4.stateUntil = _0x51bca0 + _0x41bac7.coolMs;
    _0x5a6cf4.podU = 0;
    C(_0x5a6cf4, "recover", "reload", _0x5a6cf4.stateUntil);
    return true;
  }
  return _0x5a6cf4.state === "cool" && (_0x5a6cf4.tacticProgress = T(_0x5a6cf4, _0x5a6cf4.stateUntil), _0x51bca0 >= _0x5a6cf4.stateUntil && (_0x5a6cf4.state = "aim", C(_0x5a6cf4, "idle", "stowed")), true);
}
export function updateEnemyTacticHazards(_0x44bc15, _0x59255c, _0x91542d, _0x4945f4) {
  if (!_0x44bc15.tacticHazards) {
    return;
  }
  let _0x1813f7 = 0;
  for (const _0x5cb661 of _0x44bc15.tacticHazards) {
    if (_0x5cb661.active) {
      if (_0x5cb661.kind === "crosswind") {
        S(_0x5cb661, _0x59255c, _0x91542d, _0x4945f4);
      } else if (_0x5cb661.kind === "aircomb") {
        P(_0x5cb661, _0x59255c);
      }
      if (_0x5cb661.active) {
        _0x1813f7++;
      }
    }
  }
  _0x44bc15.tacticHazardCount = _0x1813f7;
}