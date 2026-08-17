import { CONFIG as _0x17b37a } from "../config.js";
export const ECOLOGY_BODY = Object.freeze({
  IDLE: 0,
  MOVE: 1,
  ACQUIRE: 2,
  COMMIT: 3,
  RECOVER: 4,
  HIT: 5,
  CRITICAL: 6,
  BREAKUP: 7
});
export const ECOLOGY_ACTION = Object.freeze({
  STOWED: 0,
  ACQUIRE: 1,
  TELL: 2,
  EARLY: 3,
  PEAK: 4,
  FOLLOW: 5,
  RECOVER: 6,
  SPENT: 7
});
export function enemyEcologyVisualCode(_0x120c3b, _0x1d565d) {
  return (_0x120c3b & 7) << 3 | _0x1d565d & 7;
}
export function enemyEcologyBodyIndex(_0xd5a80c) {
  return _0xd5a80c >> 3 & 7;
}
export function enemyEcologyActionIndex(_0xc76b93) {
  return _0xc76b93 & 7;
}
function O(_0x5e977c) {
  if (_0x5e977c <= 0) {
    return 0;
  } else if (_0x5e977c >= 1) {
    return 1;
  } else {
    return _0x5e977c;
  }
}
function o(_0x3f9e61, _0x45ab1, _0x3a01ff) {
  if (_0x3a01ff > 0 && Number.isFinite(_0x3f9e61.stateUntil)) {
    return O(1 - Math.max(0, _0x3f9e61.stateUntil - _0x45ab1) / _0x3a01ff);
  } else {
    return 0;
  }
}
function E(_0x1dbcc1) {
  if (Number.isFinite(_0x1dbcc1.tacticProgress)) {
    return O(_0x1dbcc1.tacticProgress);
  } else {
    return 0;
  }
}
function C(_0x33e82b, _0x3ff395 = 0.5, _0x33481 = 2) {
  if (_0x33e82b < _0x3ff395) {
    return ECOLOGY_ACTION.EARLY;
  } else if (_0x33e82b < _0x33481) {
    return ECOLOGY_ACTION.PEAK;
  } else {
    return ECOLOGY_ACTION.FOLLOW;
  }
}
function n(_0x3f4edd, _0x403371) {
  switch (_0x3f4edd.state) {
    case "tell":
    case "reboundTell":
      return enemyEcologyVisualCode(ECOLOGY_BODY.ACQUIRE, ECOLOGY_ACTION.TELL);
    case "charge":
      {
        const _0x32a273 = o(_0x3f4edd, _0x403371, _0x17b37a.hound.chargeMs);
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(_0x32a273, 0.5));
      }
    case "vault":
      {
        const _0x3b953e = o(_0x3f4edd, _0x403371, _0x17b37a.genome.vaultMs);
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(_0x3b953e, 0.33, 0.7));
      }
    case "reboundVault":
      {
        const _0xf1b289 = E(_0x3f4edd);
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(_0xf1b289, 0.33, 0.7));
      }
    case "tumble":
      return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, _0x3f4edd.vy > 2 ? ECOLOGY_ACTION.EARLY : _0x3f4edd.vy > -3 ? ECOLOGY_ACTION.PEAK : ECOLOGY_ACTION.FOLLOW);
    case "skid":
      return enemyEcologyVisualCode(ECOLOGY_BODY.RECOVER, ECOLOGY_ACTION.RECOVER);
    default:
      return enemyEcologyVisualCode(ECOLOGY_BODY.MOVE, function (_0x210449, _0x515b92) {
        const _0x6cc1c6 = Math.abs((Number(_0x210449.x) || 0) * _0x515b92 + (Number(_0x210449.id) || 0) * 0.173);
        const _0x544e09 = Math.floor((_0x6cc1c6 - Math.floor(_0x6cc1c6)) * 3) % 3;
        if (_0x544e09 === 0) {
          return ECOLOGY_ACTION.STOWED;
        } else if (_0x544e09 === 1) {
          return ECOLOGY_ACTION.ACQUIRE;
        } else {
          return ECOLOGY_ACTION.RECOVER;
        }
      }(_0x3f4edd, 0.82));
  }
}
function t(_0xacc8cf, _0x5db6e8) {
  switch (_0xacc8cf.state) {
    case "dive":
      if (_0x5db6e8 < (_0xacc8cf.lockUntil || 0)) {
        return enemyEcologyVisualCode(ECOLOGY_BODY.ACQUIRE, ECOLOGY_ACTION.TELL);
      } else {
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(o(_0xacc8cf, _0x5db6e8, _0x17b37a.wasp.diveMs), 0.48));
      }
    case "recover":
    case "crosswindRecover":
      return enemyEcologyVisualCode(ECOLOGY_BODY.RECOVER, ECOLOGY_ACTION.RECOVER);
    default:
      return enemyEcologyVisualCode(ECOLOGY_BODY.MOVE, function (_0x56b3b9) {
        const _0x466f0e = Math.abs((Number(_0x56b3b9.t) || 0) * 3.25 + (Number(_0x56b3b9.id) || 0) * 0.173);
        const _0x4c735d = Math.floor((_0x466f0e - Math.floor(_0x466f0e)) * 3) % 3;
        if (_0x4c735d === 0) {
          return ECOLOGY_ACTION.STOWED;
        } else if (_0x4c735d === 1) {
          return ECOLOGY_ACTION.ACQUIRE;
        } else {
          return ECOLOGY_ACTION.RECOVER;
        }
      }(_0xacc8cf));
  }
}
export function selectEnemyEcologyVisual(_0x33562d, _0x167726) {
  if (!_0x33562d || _0x33562d.hp <= 0) {
    return enemyEcologyVisualCode(ECOLOGY_BODY.BREAKUP, ECOLOGY_ACTION.SPENT);
  }
  let _0x205a0f = function (_0xb8ad18) {
    const _0x38045a = E(_0xb8ad18);
    switch (_0xb8ad18.tacticPhase) {
      case "charge-tell":
      case "horizontal-line-tell":
      case "bounded-arc-tell":
      case "comb-corridor-tell":
        return enemyEcologyVisualCode(ECOLOGY_BODY.ACQUIRE, ECOLOGY_ACTION.TELL);
      case "forward-charge":
      case "sweep-start":
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(_0x38045a, 0.5));
      case "edge-brake":
        return enemyEcologyVisualCode(ECOLOGY_BODY.RECOVER, ECOLOGY_ACTION.FOLLOW);
      case "reverse-vault":
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(_0x38045a, 0.33, 0.7));
      case "landing-recover":
      case "wall-recover":
      case "facet-stop":
      case "failed-landing":
      case "reload":
        return enemyEcologyVisualCode(ECOLOGY_BODY.RECOVER, ECOLOGY_ACTION.RECOVER);
      case "parallel-burst":
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(_0x38045a, 0.45));
      case "strafe-exit":
      case "terminal-vent":
        return enemyEcologyVisualCode(ECOLOGY_BODY.RECOVER, _0x38045a < 0.5 ? ECOLOGY_ACTION.FOLLOW : ECOLOGY_ACTION.RECOVER);
      case "teeth-descending":
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(_0x38045a, 0.4));
      case "comb-impact":
        return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, ECOLOGY_ACTION.FOLLOW);
      default:
        return -1;
    }
  }(_0x33562d);
  if (_0x205a0f < 0) {
    _0x205a0f = _0x33562d.kind === "hound" ? n(_0x33562d, _0x167726) : _0x33562d.kind === "wasp" ? t(_0x33562d, _0x167726) : _0x33562d.kind === "polyp" ? function (_0xe0cf16, _0x39296c) {
      switch (_0xe0cf16.state) {
        case "tell":
          {
            const _0x4c5dda = o(_0xe0cf16, _0x39296c, _0x17b37a.polyp.tellMs) < 0.24 ? ECOLOGY_ACTION.ACQUIRE : ECOLOGY_ACTION.TELL;
            return enemyEcologyVisualCode(ECOLOGY_BODY.ACQUIRE, _0x4c5dda);
          }
        case "fire":
          return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(o(_0xe0cf16, _0x39296c, _0x17b37a.polyp.beamMs), 0.5));
        case "vent":
          {
            const _0x4b00f3 = o(_0xe0cf16, _0x39296c, _0x17b37a.polyp.ventMs);
            return enemyEcologyVisualCode(ECOLOGY_BODY.RECOVER, _0x4b00f3 < 0.5 ? ECOLOGY_ACTION.FOLLOW : ECOLOGY_ACTION.RECOVER);
          }
        case "relay":
          return enemyEcologyVisualCode(ECOLOGY_BODY.RECOVER, ECOLOGY_ACTION.RECOVER);
        default:
          return enemyEcologyVisualCode(ECOLOGY_BODY.IDLE, ECOLOGY_ACTION.STOWED);
      }
    }(_0x33562d, _0x167726) : _0x33562d.kind === "mortar" ? function (_0x4599ee, _0x1e6faa) {
      switch (_0x4599ee.state) {
        case "lob":
          return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, C(Number.isFinite(_0x4599ee.podU) ? O(_0x4599ee.podU) : o(_0x4599ee, _0x1e6faa, _0x17b37a.mortar.lobMs), 0.5));
        case "fuse":
          return enemyEcologyVisualCode(ECOLOGY_BODY.ACQUIRE, ECOLOGY_ACTION.TELL);
        case "burst":
          return enemyEcologyVisualCode(ECOLOGY_BODY.COMMIT, ECOLOGY_ACTION.FOLLOW);
        case "cool":
          return enemyEcologyVisualCode(ECOLOGY_BODY.RECOVER, ECOLOGY_ACTION.RECOVER);
        default:
          return enemyEcologyVisualCode(ECOLOGY_BODY.IDLE, ECOLOGY_ACTION.STOWED);
      }
    }(_0x33562d, _0x167726) : enemyEcologyVisualCode(ECOLOGY_BODY.IDLE, ECOLOGY_ACTION.STOWED);
  }
  const _0x1b2e31 = enemyEcologyActionIndex(_0x205a0f);
  let _0x335ea3 = enemyEcologyBodyIndex(_0x205a0f);
  if (_0x167726 < (_0x33562d.flashUntil || 0)) {
    _0x335ea3 = ECOLOGY_BODY.HIT;
  } else if (Number.isFinite(_0x33562d.maxHp) && _0x33562d.maxHp > 0 && _0x33562d.hp / _0x33562d.maxHp <= 0.34) {
    _0x335ea3 = ECOLOGY_BODY.CRITICAL;
  }
  return enemyEcologyVisualCode(_0x335ea3, _0x1b2e31);
}