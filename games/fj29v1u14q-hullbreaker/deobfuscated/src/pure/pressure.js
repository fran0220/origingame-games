const e = (_0x38104c, _0xf8a8e8, _0x13f593) => Math.max(_0xf8a8e8, Math.min(_0x13f593, _0x38104c));
const s = _0x406ff7 => e(_0x406ff7, 0, 1);
const a = (_0x44fb48, _0x4f44c1, _0x3d69c6 = 0) => Array.isArray(_0x44fb48) && _0x44fb48.length ? _0x44fb48[e((_0x4f44c1 | 0) - 1, 0, _0x44fb48.length - 1)] ?? _0x3d69c6 : _0x3d69c6;
export const IMMUNE_PHASES = Object.freeze(["OBSERVE", "INTERCEPT", "CONTAIN", "QUARANTINE", "STERILIZE", "SCUTTLE"]);
export const PRESSURE_BANDS = Object.freeze(["CALIBRATE", "COMPOSE", "EVOLVE", "SURGE"]);
export const RESPONSE_SOCKET_FIELDS = Object.freeze(["id", "x", "y", "face", "role", "built", "visible", "safeExit"]);
export function responseSocketViolations(_0x270484) {
  const _0x595ca2 = [];
  if (!_0x270484 || typeof _0x270484 != "object") {
    return ["socket must be an object"];
  }
  if (!String(_0x270484.id || "")) {
    _0x595ca2.push("socket needs a stable id");
  }
  if (!Number.isFinite(_0x270484.x) || !Number.isFinite(_0x270484.y)) {
    _0x595ca2.push("socket needs finite x/y");
  }
  if (!Number.isInteger(_0x270484.face) || _0x270484.face < 1 || _0x270484.face > 6) {
    _0x595ca2.push("socket face must be 1..6");
  }
  if (!["front", "rear", "high", "deck", "countermeasure"].includes(_0x270484.role)) {
    _0x595ca2.push("socket role is not a supported response role");
  }
  for (const _0x2fbc6b of ["built", "visible", "safeExit"]) {
    if (typeof _0x270484[_0x2fbc6b] != "boolean") {
      _0x595ca2.push("socket " + _0x2fbc6b + " must be boolean");
    }
  }
  return _0x595ca2;
}
export function newPressureState(_0x5b0dc8 = 0) {
  return {
    face: 0,
    phase: IMMUNE_PHASES[0],
    faceBodies: 0,
    totalBodies: 0,
    tokenBalance: 0,
    tokensEarned: 0,
    tokensSpent: 0,
    routeCarryTiles: 0,
    lastProgressTiles: 0,
    idleSinceMs: _0x5b0dc8,
    emptySinceMs: -1,
    responseDueAtMs: -1,
    environmentProvokedUntilMs: -1,
    environmentSignals: 0,
    engagedAtMs: -1,
    engagedKills: 0,
    lastSpawnAtMs: _0x5b0dc8 - 1000000000,
    lastKillAtMs: _0x5b0dc8 - 1000000000,
    lastSampleAtMs: _0x5b0dc8,
    clearEmaMs: 0,
    kills10s: 0,
    progressEmaTps: 0,
    noHitMs: 0,
    healthRatio: 1,
    lastHealthRatio: 1,
    dominance: 0,
    responseBand: 0,
    responseBandMax: 0,
    responseBandReadyAtMs: _0x5b0dc8,
    responseBandFirstAtMs: [_0x5b0dc8, -1, -1, -1],
    responseBandTransitions: 0,
    evolutionExpressed: false,
    evolutionCohorts: 0,
    targetLow: 0,
    targetHigh: 1,
    committedThreats: 0,
    enteringThreats: 0,
    adaptiveThreats: 0,
    activeMs: 0,
    emptyMs: 0,
    faceActiveMs: 0,
    faceEmptyMs: 0,
    emptyStreakMaxMs: 0,
    faceEmptyStreakMaxMs: 0,
    responseSamples: 0,
    responseLatencyEmaMs: 0,
    responseLatencyMaxMs: 0,
    lastResponseLatencyMs: 0,
    prevAlive: 0,
    prevCommitted: 0,
    prevKills: 0,
    prevFalls: 0,
    prevSetbacks: 0,
    recoveryUntilMs: -1,
    recoveryReason: "",
    accessibilityBackoffs: 0,
    reserveCredits: 0,
    armed: false,
    mercy: false
  };
}
export function pressureLullMs(_0x1cc8e4, _0x11afc8, _0x3c675b) {
  const _0x3c8848 = a(_0x3c675b.idleMsByFace, _0x11afc8, _0x3c675b.minIdleMs);
  if (!(_0x1cc8e4.clearEmaMs > 0)) {
    return _0x3c8848;
  }
  const _0x582ff4 = 1 - s((_0x1cc8e4.clearEmaMs - _0x3c675b.fastClearMs) / Math.max(1, _0x3c675b.slowClearMs - _0x3c675b.fastClearMs));
  const _0x2dd85e = Math.max(_0x3c675b.minIdleMs, _0x3c8848 - _0x582ff4 * _0x3c675b.fastIdleBonusMs);
  const _0x2ddd33 = a(_0x3c675b.emptyResponseMsByBand, 1 + (_0x1cc8e4.responseBand | 0), _0x3c675b.emptyResponseMs);
  return Math.min(_0x2dd85e, _0x2ddd33);
}
function t(_0x16a3ee, _0x164a5b, _0x438704, _0x20aa8b) {
  const _0x5915cc = e(_0x164a5b | 0, 0, PRESSURE_BANDS.length - 1);
  if (_0x5915cc === _0x16a3ee.responseBand) {
    return;
  }
  const _0x218cbf = _0x5915cc < _0x16a3ee.responseBand;
  _0x16a3ee.responseBand = _0x5915cc;
  if (_0x218cbf && _0x5915cc < _0x20aa8b.evolutionBand) {
    _0x16a3ee.evolutionExpressed = false;
  }
  _0x16a3ee.responseBandMax = Math.max(_0x16a3ee.responseBandMax, _0x5915cc);
  if (_0x16a3ee.responseBandFirstAtMs[_0x5915cc] < 0) {
    _0x16a3ee.responseBandFirstAtMs[_0x5915cc] = _0x438704;
  }
  _0x16a3ee.responseBandTransitions++;
  _0x16a3ee.responseBandReadyAtMs = _0x438704 + _0x20aa8b.responseBandPromotionMs;
}
function n(_0x5911d6, _0x5c1e07, _0x3d9e3d) {
  const _0x4141b5 = function (_0xefcb9a, _0x1ef116) {
    if (_0xefcb9a.mercy) {
      return 0;
    }
    const _0x4219b6 = _0x1ef116.responseBandFrom || [0, 0.28, 0.52, 0.76];
    let _0x1c5b73 = 0;
    for (let _0x517516 = 1; _0x517516 < _0x4219b6.length; _0x517516++) {
      if (_0xefcb9a.dominance >= _0x4219b6[_0x517516]) {
        _0x1c5b73 = _0x517516;
      }
    }
    return e(_0x1c5b73, 0, PRESSURE_BANDS.length - 1);
  }(_0x5911d6, _0x3d9e3d);
  if (_0x4141b5 < _0x5911d6.responseBand) {
    if (_0x5911d6.mercy) {
      t(_0x5911d6, 0, _0x5c1e07, _0x3d9e3d);
    } else {
      const _0x3d41d2 = _0x3d9e3d.responseBandFrom[_0x5911d6.responseBand] || 0;
      if (_0x5911d6.dominance < _0x3d41d2 - _0x3d9e3d.responseBandHysteresis) {
        t(_0x5911d6, _0x4141b5, _0x5c1e07, _0x3d9e3d);
      }
    }
  } else if (_0x4141b5 > _0x5911d6.responseBand && _0x5c1e07 >= _0x5911d6.responseBandReadyAtMs) {
    if (_0x5911d6.responseBand === _0x3d9e3d.evolutionBand && !_0x5911d6.evolutionExpressed) {
      return;
    }
    t(_0x5911d6, _0x5911d6.responseBand + 1, _0x5c1e07, _0x3d9e3d);
  }
}
function r(_0x30ce52, _0x180791, _0x5ece1a, _0x3b3e52) {
  if (_0x5ece1a < _0x30ce52.recoveryUntilMs) {
    return _0x3b3e52.recoveryEmptyBudgetMs;
  } else if (_0x30ce52.mercy) {
    return Math.max(_0x3b3e52.mercyIdleMs, a(_0x3b3e52.idleMsByFace, _0x180791, _0x3b3e52.mercyIdleMs));
  } else {
    return a(_0x3b3e52.emptyResponseMsByBand, _0x30ce52.responseBand + 1, _0x3b3e52.emptyResponseMs);
  }
}
function o(_0x1fb532, _0x20c839, _0x569b97) {
  const _0x48b19c = Math.max(0, _0x20c839);
  _0x1fb532.lastResponseLatencyMs = _0x48b19c;
  _0x1fb532.responseLatencyMaxMs = Math.max(_0x1fb532.responseLatencyMaxMs, _0x48b19c);
  _0x1fb532.responseLatencyEmaMs = _0x1fb532.responseSamples ? _0x1fb532.responseLatencyEmaMs * (1 - _0x569b97.responseLatencyEmaWeight) + _0x48b19c * _0x569b97.responseLatencyEmaWeight : _0x48b19c;
  _0x1fb532.responseSamples++;
}
export function stepPressureDirector(_0xb50581, _0x176402, _0x4fe25f) {
  const _0x8fab2e = Math.max(0, _0x176402.face | 0);
  const _0x4e08a6 = Number(_0x176402.nowMs) || 0;
  let _0x1a38de = e(_0x4e08a6 - _0xb50581.lastSampleAtMs, 0, _0x4fe25f.maxSampleMs);
  _0xb50581.lastSampleAtMs = _0x4e08a6;
  if (_0x8fab2e !== _0xb50581.face) {
    (function (_0x3c2aa7, _0x7352ac, _0x26fa83, _0x2e34d4) {
      _0x3c2aa7.face = _0x7352ac;
      _0x3c2aa7.phase = IMMUNE_PHASES[e(_0x7352ac - 1, 0, IMMUNE_PHASES.length - 1)];
      _0x3c2aa7.faceBodies = 0;
      _0x3c2aa7.faceActiveMs = 0;
      _0x3c2aa7.faceEmptyMs = 0;
      _0x3c2aa7.faceEmptyStreakMaxMs = 0;
      _0x3c2aa7.routeCarryTiles = 0;
      _0x3c2aa7.lastProgressTiles = Number(_0x26fa83.progressTiles) || 0;
      _0x3c2aa7.tokenBalance = a(_0x2e34d4.initialTokensByFace, _0x7352ac, 0);
      _0x3c2aa7.idleSinceMs = _0x26fa83.nowMs;
      _0x3c2aa7.emptySinceMs = -1;
      _0x3c2aa7.responseDueAtMs = -1;
      _0x3c2aa7.engagedAtMs = -1;
      _0x3c2aa7.engagedKills = _0x3c2aa7.prevKills;
      _0x3c2aa7.prevAlive = 0;
      _0x3c2aa7.prevCommitted = 0;
      _0x3c2aa7.prevFalls = Math.max(0, _0x26fa83.falls | 0);
      _0x3c2aa7.prevSetbacks = Math.max(0, _0x26fa83.setbacks | 0);
    })(_0xb50581, _0x8fab2e, _0x176402, _0x4fe25f);
    _0x1a38de = 0;
  }
  if (_0x176402.authoredStarted) {
    _0xb50581.armed = true;
  }
  const _0x533cd7 = function (_0x5c0f2d, _0x15becc, _0x3bfe23) {
    const _0x176135 = _0x15becc.nowMs;
    const _0x57da15 = Math.max(0, _0x15becc.aliveThreats | 0);
    const _0x16bdf8 = Math.max(_0x57da15, _0x15becc.committedThreats | 0);
    const _0x4c305d = Math.max(0, _0x15becc.kills | 0);
    const _0x542cf1 = Math.max(0, _0x4c305d - _0x5c0f2d.prevKills);
    if (_0x542cf1) {
      _0x5c0f2d.lastKillAtMs = _0x176135;
    }
    if (_0x57da15 > 0) {
      if (_0x5c0f2d.prevAlive <= 0) {
        _0x5c0f2d.engagedAtMs = _0x176135;
        _0x5c0f2d.engagedKills = _0x4c305d;
      }
      _0x5c0f2d.idleSinceMs = -1;
    } else if (_0x5c0f2d.prevAlive > 0) {
      const _0x3e889a = Math.max(1, _0x4c305d - _0x5c0f2d.engagedKills);
      const _0x156da8 = _0x5c0f2d.engagedAtMs >= 0 ? Math.max(_0x3bfe23.fastClearMs * 0.5, (_0x176135 - _0x5c0f2d.engagedAtMs) / _0x3e889a) : _0x3bfe23.fastClearMs;
      _0x5c0f2d.clearEmaMs = _0x5c0f2d.clearEmaMs > 0 ? _0x5c0f2d.clearEmaMs * (1 - _0x3bfe23.clearEmaWeight) + _0x156da8 * _0x3bfe23.clearEmaWeight : _0x156da8;
      _0x5c0f2d.idleSinceMs = _0x176135;
      _0x5c0f2d.engagedAtMs = -1;
    } else if (_0x16bdf8 <= 0 && _0x5c0f2d.idleSinceMs < 0) {
      _0x5c0f2d.idleSinceMs = _0x176135;
    }
    if (_0x542cf1 && _0x57da15 === 0 && _0x5c0f2d.prevAlive === 0) {
      const _0x4fce7b = Math.max(_0x3bfe23.fastClearMs * 0.5, _0x3bfe23.fastClearMs / _0x542cf1);
      _0x5c0f2d.clearEmaMs = _0x5c0f2d.clearEmaMs > 0 ? _0x5c0f2d.clearEmaMs * (1 - _0x3bfe23.clearEmaWeight) + _0x4fce7b * _0x3bfe23.clearEmaWeight : _0x4fce7b;
      _0x5c0f2d.idleSinceMs = _0x176135;
    }
    _0x5c0f2d.prevAlive = _0x57da15;
    _0x5c0f2d.prevCommitted = _0x16bdf8;
    _0x5c0f2d.prevKills = _0x4c305d;
    return _0x542cf1;
  }(_0xb50581, _0x176402, _0x4fe25f);
  const _0x20948a = function (_0x1f4527, _0x5a31a1, _0x1efc26, _0x1a0252, _0x1588f8) {
    const _0x4d3a5d = Math.exp(-_0x1a0252 / Math.max(1, _0x1efc26.killWindowMs));
    _0x1f4527.kills10s = _0x1f4527.kills10s * _0x4d3a5d + _0x1588f8;
    const _0x207a05 = Number(_0x5a31a1.progressTiles) || 0;
    const _0xfb1099 = Math.max(0, _0x207a05 - _0x1f4527.lastProgressTiles);
    _0x1f4527.lastProgressTiles = _0x207a05;
    const _0x33518c = _0x1a0252 > 0 ? _0xfb1099 * 1000 / _0x1a0252 : 0;
    const _0x5ed848 = 1 - Math.exp(-_0x1a0252 / Math.max(1, _0x1efc26.progressEmaMs));
    _0x1f4527.progressEmaTps += (_0x33518c - _0x1f4527.progressEmaTps) * _0x5ed848;
    const _0x44f339 = s(Number.isFinite(_0x5a31a1.healthRatio) ? _0x5a31a1.healthRatio : 1);
    const _0x2b2a32 = _0x44f339 < _0x1f4527.lastHealthRatio - _0x1efc26.healthDropEpsilon;
    const _0x44b0a9 = Math.max(0, _0x5a31a1.falls | 0);
    const _0x19d765 = Math.max(0, _0x5a31a1.setbacks | 0);
    const _0x406e5e = Math.max(0, _0x44b0a9 - _0x1f4527.prevFalls);
    const _0x2fb57b = Math.max(0, _0x19d765 - _0x1f4527.prevSetbacks);
    _0x1f4527.prevFalls = _0x44b0a9;
    _0x1f4527.prevSetbacks = _0x19d765;
    if (_0x2b2a32 || _0x406e5e || _0x2fb57b) {
      const _0x38c7d5 = _0x406e5e > 0 || _0x2fb57b > 0;
      const _0xa08e1f = _0x38c7d5 ? _0x1efc26.setbackBackoffMs : _0x1efc26.damageBackoffMs;
      _0x1f4527.recoveryUntilMs = Math.max(_0x1f4527.recoveryUntilMs, _0x5a31a1.nowMs + _0xa08e1f);
      _0x1f4527.recoveryReason = _0x38c7d5 ? _0x406e5e ? "FALL" : "SETBACK" : "DAMAGE";
      _0x1f4527.accessibilityBackoffs += Math.max(1, _0x406e5e, _0x2fb57b);
      const _0x42d5b0 = _0x1efc26.responseBandFrom || [0, 0.28, 0.52, 0.76];
      const _0x2ef266 = _0x38c7d5 ? Math.max(0, (_0x42d5b0[_0x1efc26.compositionBand] || 0.28) - 0.01) : Math.max(0, (_0x42d5b0[_0x1efc26.evolutionBand] || 0.52) - 0.01);
      _0x1f4527.dominance = Math.min(_0x1f4527.dominance, _0x2ef266);
      _0x1f4527.noHitMs = 0;
    } else {
      _0x1f4527.noHitMs += _0x1a0252;
    }
    _0x1f4527.healthRatio = _0x44f339;
    _0x1f4527.lastHealthRatio = _0x44f339;
    const _0xda7875 = _0x1f4527.clearEmaMs > 0 ? 1 - s((_0x1f4527.clearEmaMs - _0x1efc26.fastClearMs) / Math.max(1, _0x1efc26.slowClearMs - _0x1efc26.fastClearMs)) : 0;
    const _0x4f477f = s(_0x1f4527.kills10s / Math.max(1, _0x1efc26.dominantKills10s));
    const _0x57b47e = s(_0x1f4527.progressEmaTps / Math.max(0.01, _0x1efc26.dominantProgressTps));
    const _0x5365e2 = s(_0x1f4527.noHitMs / Math.max(1, _0x1efc26.dominantNoHitMs));
    let _0x1e7110 = _0xda7875 * _0x1efc26.dominanceWeights.clear + _0x4f477f * _0x1efc26.dominanceWeights.kills + _0x57b47e * _0x1efc26.dominanceWeights.progress + _0x5365e2 * _0x1efc26.dominanceWeights.noHit;
    _0x1e7110 *= 0.2 + s((_0x44f339 - _0x1efc26.mercyHealthRatio) / Math.max(0.01, _0x1efc26.fullPressureHealthRatio - _0x1efc26.mercyHealthRatio)) * 0.8;
    if (_0x1f4527.clearEmaMs > _0x1efc26.mercyClearMs) {
      _0x1e7110 *= 0.25;
    }
    const _0x16a05c = 1 - Math.exp(-_0x1a0252 / Math.max(1, _0x1efc26.dominanceEmaMs));
    _0x1f4527.dominance += (s(_0x1e7110) - _0x1f4527.dominance) * _0x16a05c;
    const _0xb55a9d = _0x5a31a1.nowMs < _0x1f4527.recoveryUntilMs;
    if (!_0xb55a9d && _0x1f4527.recoveryReason) {
      _0x1f4527.recoveryReason = "";
    }
    _0x1f4527.mercy = _0x44f339 <= _0x1efc26.mercyHealthRatio || _0x1f4527.clearEmaMs > _0x1efc26.mercyClearMs || _0xb55a9d;
    return _0xfb1099;
  }(_0xb50581, _0x176402, _0x4fe25f, _0x1a38de, _0x533cd7);
  n(_0xb50581, _0x4e08a6, _0x4fe25f);
  (function (_0x20b065, _0x49c84c, _0x1525f9, _0x3021cc, _0x5a4c72) {
    const _0x1c9ae2 = a(_0x1525f9.tokenCapByFace, _0x20b065.face, 0);
    const _0x40cde6 = Math.max(0.1, a(_0x1525f9.routeTilesPerTokenByFace, _0x20b065.face, Infinity));
    _0x20b065.routeCarryTiles += _0x3021cc;
    let _0x42f32a = Math.floor(_0x20b065.routeCarryTiles / _0x40cde6);
    if (_0x42f32a > 0) {
      _0x20b065.routeCarryTiles -= _0x42f32a * _0x40cde6;
    }
    const _0x250ade = _0x20b065.dominance >= _0x1525f9.tokenDominanceFrom ? _0x5a4c72 * (_0x1525f9.killTokenBase + _0x20b065.dominance * _0x1525f9.killTokenDominanceGain) : _0x5a4c72 * _0x1525f9.killTokenBase;
    const _0x366931 = s(Number(_0x49c84c.environmentImpulse) || 0) * _0x1525f9.environmentTokenGain;
    const _0x3aba0b = _0x20b065.tokenBalance;
    _0x20b065.tokenBalance = Math.min(_0x1c9ae2, _0x20b065.tokenBalance + _0x42f32a + _0x250ade + _0x366931);
    const _0x178bd4 = _0x20b065.tokenBalance - _0x3aba0b;
    _0x20b065.tokensEarned += Math.max(0, _0x178bd4);
    if (_0x20b065.tokenBalance >= _0x1c9ae2 - 1e-9) {
      _0x20b065.routeCarryTiles = Math.min(_0x20b065.routeCarryTiles, _0x40cde6 * 0.999);
    }
  })(_0xb50581, _0x176402, _0x4fe25f, _0x20948a, _0x533cd7);
  if (Number(_0x176402.environmentImpulse) > 0) {
    _0xb50581.environmentProvokedUntilMs = _0x4e08a6 + _0x4fe25f.environmentResponseHoldMs;
    _0xb50581.environmentSignals++;
  }
  (function (_0x2195cd, _0x883445) {
    let _0x53e1ee = a(_0x883445.targetLowByFace, _0x2195cd.face, 0);
    if (_0x2195cd.responseBand >= _0x883445.densityBand && !_0x2195cd.mercy) {
      _0x53e1ee += a(_0x883445.densityTargetBonusByFace, _0x2195cd.face, 0);
    }
    if (_0x2195cd.mercy) {
      _0x53e1ee = 0;
    }
    const _0x2a6aed = a(_0x883445.targetMaxByFace, _0x2195cd.face, _0x53e1ee + 1);
    const _0x5f5a86 = Math.min(_0x2a6aed, _0x53e1ee + Math.max(1, _0x883445.targetBand));
    _0x2195cd.targetLow = Math.max(0, Math.min(_0x53e1ee, _0x5f5a86));
    _0x2195cd.targetHigh = Math.max(1, _0x5f5a86);
  })(_0xb50581, _0x4fe25f);
  const _0x30d9d5 = Math.max(0, _0x176402.committedThreats | 0);
  _0xb50581.committedThreats = _0x30d9d5;
  _0xb50581.enteringThreats = Math.max(0, _0x176402.enteringThreats | 0);
  _0xb50581.adaptiveThreats = Math.max(0, _0x176402.adaptiveThreats | 0);
  const _0x4856c0 = function (_0x1f7341, _0x4389b9, _0x30fbd0) {
    const _0x30b056 = _0x1f7341.face >= _0x30fbd0.responseFromFace && _0x1f7341.responseBand >= _0x30fbd0.evolutionBand && !_0x1f7341.mercy;
    const _0x2e2295 = _0x30b056 ? _0x30fbd0.responseImminentAuthoredTiles : _0x30fbd0.imminentAuthoredTiles;
    const _0x5bc04c = _0x30b056 ? _0x30fbd0.responseMinRemainingTravelTiles : _0x30fbd0.minRemainingTravelTiles;
    return _0x1f7341.armed && _0x4389b9.combatActive !== false && !_0x4389b9.suspended && !!_0x4389b9.safe && _0x4389b9.nextAuthoredTiles > _0x2e2295 && _0x4389b9.remainingTravelTiles > _0x5bc04c;
  }(_0xb50581, _0x176402, _0x4fe25f);
  (function (_0xe20fb1, _0x29052c, _0x21dc9d, _0x43b03e, _0x19600c) {
    const _0x317250 = Math.max(0, _0x29052c.committedThreats | 0);
    if (!_0x19600c) {
      _0xe20fb1.emptySinceMs = -1;
      _0xe20fb1.responseDueAtMs = -1;
      return;
    }
    _0xe20fb1.activeMs += _0x43b03e;
    _0xe20fb1.faceActiveMs += _0x43b03e;
    if (_0x317250 <= 0) {
      _0xe20fb1.emptyMs += _0x43b03e;
      _0xe20fb1.faceEmptyMs += _0x43b03e;
      if (_0xe20fb1.emptySinceMs < 0) {
        _0xe20fb1.emptySinceMs = _0x29052c.nowMs;
      }
      const _0x11e4ac = Math.max(0, _0x29052c.nowMs - _0xe20fb1.emptySinceMs);
      _0xe20fb1.emptyStreakMaxMs = Math.max(_0xe20fb1.emptyStreakMaxMs, _0x11e4ac);
      _0xe20fb1.faceEmptyStreakMaxMs = Math.max(_0xe20fb1.faceEmptyStreakMaxMs, _0x11e4ac);
    } else if (_0xe20fb1.emptySinceMs >= 0) {
      o(_0xe20fb1, _0x29052c.nowMs - _0xe20fb1.emptySinceMs, _0x21dc9d);
      _0xe20fb1.emptySinceMs = -1;
    }
  })(_0xb50581, _0x176402, _0x4fe25f, _0x1a38de, _0x4856c0);
  if (!_0x4856c0) {
    return 0;
  }
  if (_0xb50581.responseDueAtMs >= 0 && _0xb50581.emptySinceMs >= 0 && !_0xb50581.mercy) {
    _0xb50581.responseDueAtMs = Math.min(_0xb50581.responseDueAtMs, _0xb50581.emptySinceMs + r(_0xb50581, _0x8fab2e, _0x4e08a6, _0x4fe25f));
  }
  const _0x151168 = _0x4e08a6 <= _0xb50581.environmentProvokedUntilMs;
  const _0x54b1d5 = _0x30d9d5 <= _0xb50581.targetLow ? Math.max(1, _0xb50581.targetHigh - _0x30d9d5) : 0;
  const _0x1917e4 = _0x151168 && _0x30d9d5 < _0xb50581.targetHigh ? Math.max(1, _0xb50581.targetHigh - _0x30d9d5) : 0;
  const _0x3ef24a = Math.max(_0x54b1d5, _0x1917e4);
  if (_0x3ef24a <= 0) {
    _0xb50581.responseDueAtMs = -1;
    return 0;
  }
  if (_0xb50581.responseDueAtMs < 0) {
    let _0x3b9d32 = _0x30d9d5 <= 0 ? r(_0xb50581, _0x8fab2e, _0x4e08a6, _0x4fe25f) : _0x4fe25f.precommitMs;
    if (_0x151168) {
      _0x3b9d32 = Math.min(_0x3b9d32, _0x4fe25f.environmentResponseMs);
    }
    _0xb50581.responseDueAtMs = _0x4e08a6 + _0x3b9d32;
  }
  if (_0x4e08a6 < _0xb50581.responseDueAtMs) {
    return 0;
  }
  const _0x45f87f = _0x30d9d5 <= 0 ? _0x4fe25f.emptyResponseCooldownMs : _0x4fe25f.precommitCooldownMs;
  if (_0x4e08a6 - _0xb50581.lastSpawnAtMs < _0x45f87f) {
    return 0;
  }
  if (_0xb50581.clearEmaMs > _0x4fe25f.mercyClearMs && !_0xb50581.mercy) {
    return 0;
  }
  const _0x2472fd = a(_0x4fe25f.maxBodiesByFace, _0x8fab2e, 0);
  const _0x109b48 = Math.max(0, _0x2472fd - _0xb50581.faceBodies);
  const _0x472bee = a(_0x4fe25f.maxAdaptiveOutstandingByFace, _0x8fab2e, 0);
  const _0x3205fa = Math.max(0, _0x472bee - _0xb50581.adaptiveThreats);
  let _0x21e109 = Math.max(0, Math.floor(_0xb50581.tokenBalance + 1e-9));
  const _0xd751b = _0xb50581.emptySinceMs >= 0 ? _0x4e08a6 - _0xb50581.emptySinceMs : 0;
  const _0x870dd3 = _0x4e08a6 < _0xb50581.recoveryUntilMs || _0xb50581.mercy ? _0x4fe25f.recoveryEmptyBudgetMs : _0x4fe25f.hardEmptyBudgetMs;
  if (_0x30d9d5 <= 0 && _0x21e109 <= 0 && _0xd751b >= _0x870dd3 && _0x109b48 > 0 && _0x3205fa > 0) {
    _0xb50581.tokenBalance = Math.min(a(_0x4fe25f.tokenCapByFace, _0x8fab2e, 1), _0xb50581.tokenBalance + 1);
    _0x21e109 = Math.max(0, Math.floor(_0xb50581.tokenBalance + 1e-9));
    _0xb50581.tokensEarned++;
    _0xb50581.reserveCredits++;
  }
  const _0x4f2c50 = !_0xb50581.mercy && _0x8fab2e >= _0x4fe25f.pairFromFace && _0xb50581.responseBand >= _0x4fe25f.pairBandFrom && _0x176402.spawnRoomTiles >= _0x4fe25f.pairMinPlayerLeadTiles ? 2 : 1;
  const _0x20d228 = Math.min(_0x3ef24a, _0x4f2c50, _0x109b48, _0x3205fa, _0x21e109);
  if (_0x20d228 <= 0) {
    return 0;
  } else {
    if (_0xb50581.emptySinceMs >= 0) {
      o(_0xb50581, _0x4e08a6 - _0xb50581.emptySinceMs, _0x4fe25f);
      _0xb50581.emptySinceMs = -1;
    }
    _0xb50581.faceBodies += _0x20d228;
    _0xb50581.totalBodies += _0x20d228;
    _0xb50581.tokensSpent += _0x20d228;
    _0xb50581.tokenBalance = Math.max(0, _0xb50581.tokenBalance - _0x20d228);
    _0xb50581.lastSpawnAtMs = _0x4e08a6;
    if (_0xb50581.responseBand === _0x4fe25f.evolutionBand) {
      _0xb50581.evolutionExpressed = true;
      _0xb50581.evolutionCohorts++;
      _0xb50581.responseBandReadyAtMs = Math.max(_0xb50581.responseBandReadyAtMs, _0x4e08a6 + _0x4fe25f.responseBandPromotionMs);
    }
    _0xb50581.idleSinceMs = -1;
    _0xb50581.responseDueAtMs = -1;
    _0xb50581.environmentProvokedUntilMs = -1;
    return _0x20d228;
  }
}
export function pressureTelemetry(_0x444b87) {
  return {
    phase: _0x444b87.phase,
    dominance: +_0x444b87.dominance.toFixed(3),
    clearEmaMs: +_0x444b87.clearEmaMs.toFixed(1),
    kills10s: +_0x444b87.kills10s.toFixed(2),
    progressTps: +_0x444b87.progressEmaTps.toFixed(2),
    healthRatio: +_0x444b87.healthRatio.toFixed(3),
    mercy: _0x444b87.mercy,
    responseBand: {
      index: _0x444b87.responseBand,
      id: PRESSURE_BANDS[_0x444b87.responseBand],
      maxIndex: _0x444b87.responseBandMax,
      maxId: PRESSURE_BANDS[_0x444b87.responseBandMax],
      firstAtMs: [..._0x444b87.responseBandFirstAtMs],
      transitions: _0x444b87.responseBandTransitions,
      evolutionExpressed: _0x444b87.evolutionExpressed,
      evolutionCohorts: _0x444b87.evolutionCohorts
    },
    targetLow: _0x444b87.targetLow,
    targetHigh: _0x444b87.targetHigh,
    committedThreats: _0x444b87.committedThreats,
    enteringThreats: _0x444b87.enteringThreats,
    adaptiveThreats: _0x444b87.adaptiveThreats,
    tokenBalance: +_0x444b87.tokenBalance.toFixed(2),
    emptyFieldRatio: _0x444b87.activeMs > 0 ? +(_0x444b87.emptyMs / _0x444b87.activeMs).toFixed(4) : 0,
    faceEmptyFieldRatio: _0x444b87.faceActiveMs > 0 ? +(_0x444b87.faceEmptyMs / _0x444b87.faceActiveMs).toFixed(4) : 0,
    responseLatencyMs: {
      last: +_0x444b87.lastResponseLatencyMs.toFixed(1),
      ema: +_0x444b87.responseLatencyEmaMs.toFixed(1),
      max: +_0x444b87.responseLatencyMaxMs.toFixed(1),
      samples: _0x444b87.responseSamples
    },
    emptyStreakMaxMs: _0x444b87.emptyStreakMaxMs,
    faceEmptyStreakMaxMs: _0x444b87.faceEmptyStreakMaxMs,
    bodies: {
      face: _0x444b87.faceBodies,
      total: _0x444b87.totalBodies
    },
    tokens: {
      earned: +_0x444b87.tokensEarned.toFixed(2),
      spent: _0x444b87.tokensSpent,
      reserveCredits: _0x444b87.reserveCredits
    },
    accessibility: {
      recovering: _0x444b87.lastSampleAtMs < _0x444b87.recoveryUntilMs,
      reason: _0x444b87.recoveryReason,
      remainingMs: Math.max(0, _0x444b87.recoveryUntilMs - _0x444b87.lastSampleAtMs),
      backoffs: _0x444b87.accessibilityBackoffs,
      falls: _0x444b87.prevFalls,
      setbacks: _0x444b87.prevSetbacks
    },
    environment: {
      signals: _0x444b87.environmentSignals,
      pending: _0x444b87.environmentProvokedUntilMs >= _0x444b87.lastSampleAtMs
    }
  };
}