import { MERIDIAN_DEFENSE_STATES as _0x4bbbf2 } from "./meridian-response.js";
export const MERIDIAN_DEFENSE_STAGES = Object.freeze(["tell", "fire", "recovery", "spent"]);
export const MERIDIAN_DEFENSE_TIMINGS = Object.freeze([Object.freeze({
  tell: 620,
  fire: 180,
  recovery: 360,
  spent: 500
}), Object.freeze({
  tell: 560,
  fire: 180,
  recovery: 380,
  spent: 540
}), Object.freeze({
  tell: 500,
  fire: 220,
  recovery: 440,
  spent: 600
}), Object.freeze({
  tell: 460,
  fire: 220,
  recovery: 480,
  spent: 640
}), Object.freeze({
  tell: 420,
  fire: 240,
  recovery: 540,
  spent: 720
}), Object.freeze({
  tell: 380,
  fire: 260,
  recovery: 720,
  spent: 900
})]);
export const MERIDIAN_DEFENSE_TRIGGER_TILES = Object.freeze([7, 7, 8, 8, 9, 9]);
export const MERIDIAN_DEFENSE_IMPULSE = Object.freeze([0.35, 0.45, 0.6, 0.75, 0.9, 1]);
export function meridianDefenseLifecycleAt(_0xb9b72a, _0x1d7ad8) {
  const _0x57a991 = MERIDIAN_DEFENSE_TIMINGS[(_0x444cde => Math.max(0, Math.min(5, Math.trunc(_0x444cde) || 0)))(_0x1d7ad8)];
  const _0x3eae11 = Math.max(0, Number(_0xb9b72a) || 0);
  let _0x350379 = 0;
  for (const _0x1a54ee of MERIDIAN_DEFENSE_STAGES) {
    const _0x3d7764 = _0x57a991[_0x1a54ee];
    if (_0x3eae11 < _0x350379 + _0x3d7764) {
      return Object.freeze({
        stage: _0x1a54ee,
        stageElapsedMs: _0x3eae11 - _0x350379,
        stageDurationMs: _0x3d7764,
        progress: Math.max(0, Math.min(1, (_0x3eae11 - _0x350379) / _0x3d7764)),
        complete: false
      });
    }
    _0x350379 += _0x3d7764;
  }
  return Object.freeze({
    stage: "dormant",
    stageElapsedMs: 0,
    stageDurationMs: 0,
    progress: 0,
    complete: true
  });
}
export function newMeridianDefenseLifecycleState() {
  return {
    activatedMask: 0,
    impulseMask: 0,
    active: null,
    activations: 0,
    impulses: 0,
    cancellations: 0
  };
}
export function resetMeridianDefenseLifecycleState(_0x1bbbcb) {
  _0x1bbbcb.activatedMask = 0;
  _0x1bbbcb.impulseMask = 0;
  _0x1bbbcb.active = null;
  _0x1bbbcb.activations = 0;
  _0x1bbbcb.impulses = 0;
  _0x1bbbcb.cancellations = 0;
  return _0x1bbbcb;
}
function t(_0xe145a, _0x27c105, _0x296207) {
  const _0x53895a = Math.max(0, Math.min(5, Math.max(1, _0x27c105 | 0) - 1));
  return {
    stage: "dormant",
    state: _0x4bbbf2[_0x53895a],
    phase: _0x53895a,
    face: _0x27c105 > 0 ? _0x27c105 : 0,
    progress: 0,
    elapsedMs: 0,
    impulse: false,
    reason: _0x296207,
    activations: _0xe145a.activations,
    impulses: _0xe145a.impulses
  };
}
export function stepMeridianDefenseLifecycle(_0x162f6c, _0x35b20e) {
  const _0x31275d = Math.max(0, Number(_0x35b20e.nowMs) || 0);
  const _0x2c3327 = Math.max(0, Math.min(6, Math.trunc(_0x35b20e.routeFace) || 0));
  const _0x4eb28f = Math.max(0, Math.min(6, Math.trunc(_0x35b20e.cornerFace) || 0));
  if (!!_0x35b20e.fixture || !!_0x35b20e.finale || _0x2c3327 <= 0 || _0x4eb28f !== _0x2c3327 || _0x35b20e.cornerState !== "idle" || !!_0x35b20e.cornerPrimed) {
    if (_0x162f6c.active) {
      const _0x3e3370 = 1 << _0x162f6c.active.phase;
      if (!(_0x162f6c.impulseMask & _0x3e3370)) {
        _0x162f6c.activatedMask &= ~_0x3e3370;
      }
      _0x162f6c.active = null;
      _0x162f6c.cancellations++;
    }
    return t(_0x162f6c, _0x2c3327, _0x35b20e.fixture ? "fixture" : _0x35b20e.finale ? "finale" : _0x2c3327 <= 0 ? "intro-observe" : "corner-suppressed");
  }
  const _0x56657f = _0x2c3327 - 1;
  const _0x1d6121 = 1 << _0x56657f;
  if (_0x162f6c.active && _0x162f6c.active.face !== _0x2c3327) {
    const _0x55f129 = 1 << _0x162f6c.active.phase;
    if (!(_0x162f6c.impulseMask & _0x55f129)) {
      _0x162f6c.activatedMask &= ~_0x55f129;
    }
    _0x162f6c.active = null;
    _0x162f6c.cancellations++;
  }
  if (!_0x162f6c.active && !(_0x162f6c.activatedMask & _0x1d6121)) {
    const _0x3b1e3a = MERIDIAN_DEFENSE_TRIGGER_TILES[_0x56657f];
    const _0x3fe6be = Number(_0x35b20e.playerX) >= Number(_0x35b20e.faceStart) + _0x3b1e3a;
    if (_0x35b20e.authoredArmed && _0x3fe6be) {
      _0x162f6c.activatedMask |= _0x1d6121;
      _0x162f6c.activations++;
      _0x162f6c.active = {
        face: _0x2c3327,
        phase: _0x56657f,
        state: _0x4bbbf2[_0x56657f],
        startedAtMs: _0x31275d
      };
    }
  }
  if (!_0x162f6c.active) {
    return t(_0x162f6c, _0x2c3327, _0x162f6c.activatedMask & _0x1d6121 ? "spent" : "awaiting-activation");
  }
  const _0x4ad5c6 = Math.max(0, _0x31275d - _0x162f6c.active.startedAtMs);
  const _0x22ae2a = meridianDefenseLifecycleAt(_0x4ad5c6, _0x56657f);
  if (_0x22ae2a.complete) {
    _0x162f6c.active = null;
    return t(_0x162f6c, _0x2c3327, "spent");
  }
  let _0x3e264f = false;
  if (_0x22ae2a.stage === "fire" && !(_0x162f6c.impulseMask & _0x1d6121)) {
    _0x162f6c.impulseMask |= _0x1d6121;
    _0x162f6c.impulses++;
    _0x3e264f = true;
  }
  return {
    ..._0x22ae2a,
    face: _0x2c3327,
    phase: _0x56657f,
    state: _0x4bbbf2[_0x56657f],
    elapsedMs: _0x4ad5c6,
    startedAtMs: _0x162f6c.active.startedAtMs,
    impulse: _0x3e264f,
    impulseStrength: _0x3e264f ? MERIDIAN_DEFENSE_IMPULSE[_0x56657f] : 0,
    reason: "active",
    activations: _0x162f6c.activations,
    impulses: _0x162f6c.impulses
  };
}
export function meridianDefenseLifecycleSnapshot(_0x1508d1) {
  return {
    activatedMask: _0x1508d1.activatedMask,
    impulseMask: _0x1508d1.impulseMask,
    active: _0x1508d1.active ? {
      ..._0x1508d1.active
    } : null,
    activations: _0x1508d1.activations,
    impulses: _0x1508d1.impulses,
    cancellations: _0x1508d1.cancellations
  };
}