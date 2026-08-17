import { CONFIG as _0x501fc8 } from "../config.js";
import { neutralEnemyEcologyVisualId as _0x195cfa } from "../pure/enemy-ecology.js";
import { finaleEarnedClear as _0x38ca1c, finalePacketDue as _0x181a8c, finalePowerBand as _0x53c14f, finalePressurePlan as _0x3f3c82, finaleStage as _0x17e942 } from "../pure/finale.js";
import { view as _0x23f606 } from "./bridge.js";
import { gameMs as _0x12f5ea } from "./time.js";
import { END_SCROLL as _0x5e60d0, groundTopAt as _0x131070, spawnLaneY as _0x201260 } from "./level.js";
import { clearHostiles as _0x3b3a32, forceBreakHostile as _0x3cab19, hostiles as _0x1e73c4, kills as _0x59bb3f, removeHostile as _0x21f016, spawnHostile as _0x3c3013, wardenStage as _0x19fd32 } from "./hostiles.js";
export const FINALE_TIMING = Object.freeze({
  armingMs: 1050,
  minDefendMs: 11000,
  earnedMinMs: 6500,
  mercyAtMs: 16800,
  mercyKills: 3,
  hardMaxMs: 20500,
  transmitMs: 1150,
  answerMs: 2500,
  quota: 8
});
export const FINALE_PRESSURE = Object.freeze({
  maxSupport: 4,
  targetSupport: Object.freeze([2, 3, 3, 4]),
  spawnGapMs: Object.freeze([560, 460, 380, 320]),
  refillDelayMs: Object.freeze([620, 440, 300, 180]),
  packetCadenceMs: Object.freeze([1050, 880, 700, 560]),
  adaptiveCap: 6,
  clearEmaWeight: 0.42,
  clearSampleFloorMs: 220
});
export const FINALE_PACKETS = Object.freeze([Object.freeze({
  atMs: FINALE_TIMING.armingMs,
  entries: Object.freeze([Object.freeze({
    kind: "hound",
    x: _0x5e60d0 + 17,
    delayMs: 0,
    dir: -1,
    patrol: Object.freeze({
      x0: _0x5e60d0 + 13,
      x1: _0x5e60d0 + 21
    })
  }), Object.freeze({
    kind: "wasp",
    x: _0x5e60d0 + 18,
    lane: 4.8,
    delayMs: 140
  }), Object.freeze({
    kind: "wasp",
    x: _0x5e60d0 + 22,
    lane: 7,
    delayMs: 340
  })])
}), Object.freeze({
  atMs: 4450,
  entries: Object.freeze([Object.freeze({
    kind: "polyp",
    x: _0x5e60d0 + 25,
    delayMs: 0,
    dir: -1,
    autoCycle: true
  }), Object.freeze({
    kind: "wasp",
    x: _0x5e60d0 + 11,
    lane: 6.4,
    delayMs: 80
  }), Object.freeze({
    kind: "wasp",
    x: _0x5e60d0 + 17,
    lane: 3.6,
    delayMs: 260
  }), Object.freeze({
    kind: "wasp",
    x: _0x5e60d0 + 23,
    lane: 5.5,
    delayMs: 440
  })])
}), Object.freeze({
  atMs: 7800,
  entries: Object.freeze([Object.freeze({
    kind: "mortar",
    x: _0x5e60d0 + 27,
    delayMs: 0,
    dir: -1,
    zoneX: _0x5e60d0 + 16
  }), Object.freeze({
    kind: "hound",
    x: _0x5e60d0 + 19,
    delayMs: 140,
    dir: -1,
    patrol: Object.freeze({
      x0: _0x5e60d0 + 14,
      x1: _0x5e60d0 + 23
    })
  }), Object.freeze({
    kind: "wasp",
    x: _0x5e60d0 + 10,
    lane: 4.4,
    delayMs: 100
  }), Object.freeze({
    kind: "wasp",
    x: _0x5e60d0 + 15,
    lane: 7.2,
    delayMs: 300
  }), Object.freeze({
    kind: "wasp",
    x: _0x5e60d0 + 24,
    lane: 5.8,
    delayMs: 500
  })])
})]);
export const FINALE_REFILLS = Object.freeze([Object.freeze({
  kind: "wasp",
  ecologyVisualId: "wasp-crosswind",
  x: _0x5e60d0 + 12,
  lane: 6.8,
  dir: 1
}), Object.freeze({
  kind: "hound",
  ecologyVisualId: "hound-vaultjaw",
  x: _0x5e60d0 + 21,
  dir: -1,
  patrol: Object.freeze({
    x0: _0x5e60d0 + 13,
    x1: _0x5e60d0 + 23
  })
}), Object.freeze({
  kind: "polyp",
  ecologyVisualId: "polyp-sweepfan",
  x: _0x5e60d0 + 25,
  dir: -1,
  autoCycle: true
}), Object.freeze({
  kind: "wasp",
  ecologyVisualId: "wasp-pincer",
  x: _0x5e60d0 + 23,
  lane: 4.4,
  dir: -1
}), Object.freeze({
  kind: "mortar",
  ecologyVisualId: "mortar-bracketpod",
  x: _0x5e60d0 + 27,
  dir: -1,
  zoneX: _0x5e60d0 + 17
}), Object.freeze({
  kind: "hound",
  ecologyVisualId: "hound-rebound",
  x: _0x5e60d0 + 15,
  dir: 1,
  patrol: Object.freeze({
    x0: _0x5e60d0 + 12,
    x1: _0x5e60d0 + 22
  })
})]);
let x = "dormant";
let g = 0;
let N = 0;
let w = 0;
let S = 0;
let A = 0;
let F = 0;
let y = false;
let L = 0;
let j = false;
let b = [];
let z = 0;
let _ = -1000000000;
let k = -1;
let O = -1;
let R = -1;
let T = 0;
let v = 0;
let C = 0;
let G = 0;
let P = 0;
let U = 0;
function D() {
  if (x === "dormant") {
    return 0;
  } else {
    return Math.max(0, _0x12f5ea - g);
  }
}
function q() {
  if (x === "defend") {
    return Math.max(S, _0x59bb3f - w);
  } else {
    return S;
  }
}
function K() {
  return F && _0x1e73c4.find(_0x351403 => _0x351403.id === F) || null;
}
function B() {
  const _0x34b451 = K();
  if (_0x34b451) {
    L = Math.max(L, _0x34b451.earnedDamage || 0);
    return {
      present: true,
      defeated: false,
      hp: Math.max(0, _0x34b451.hp),
      maxHp: _0x34b451.maxHp,
      health: Math.max(0, _0x34b451.hp / _0x34b451.maxHp),
      damage: L,
      stage: _0x19fd32(_0x34b451),
      seal: Math.min(4, 1 + Math.floor((_0x34b451.maxHp - _0x34b451.hp) / _0x501fc8.warden.windowDamage)),
      shielded: _0x34b451.state !== "exposed",
      attack: _0x34b451.state,
      mercy: false
    };
  } else {
    return {
      present: false,
      defeated: y,
      hp: 0,
      maxHp: _0x501fc8.warden.hp,
      health: 0,
      damage: y && !j ? _0x501fc8.warden.hp : L,
      stage: 3,
      seal: 4,
      shielded: false,
      attack: y ? "broken" : "dormant",
      mercy: j
    };
  }
}
function V() {
  const _0x213c86 = D();
  if (x === "dormant") {
    return 0;
  }
  if (x === "arming") {
    return Math.min(1, _0x213c86 / FINALE_TIMING.armingMs);
  }
  if (x === "defend") {
    const _0x1ecb75 = Math.min(1, (_0x12f5ea - N) / FINALE_TIMING.earnedMinMs);
    const _0x3406eb = 1 - B().health;
    const _0x4a4190 = A / FINALE_PACKETS.length;
    return Math.min(_0x1ecb75, _0x3406eb * 0.75 + _0x4a4190 * 0.25);
  }
  if (x === "transmit") {
    return Math.min(1, (_0x12f5ea - N) / FINALE_TIMING.transmitMs);
  } else {
    return 1;
  }
}
function W() {
  if (x !== "defend" || k < 0 || G >= FINALE_PRESSURE.adaptiveCap) {
    return 0;
  }
  const _0x996ea3 = FINALE_PRESSURE.refillDelayMs[C] || 0;
  return Math.max(0, _0x996ea3 - (_0x12f5ea - k));
}
export function finaleSnapshot() {
  const _0x65afb5 = B();
  return {
    phase: x,
    elapsedMs: D(),
    kills: q(),
    quota: FINALE_TIMING.quota,
    progress: V(),
    wave: A,
    stage: _0x17e942({
      phase: x,
      wave: A,
      wardenBroken: y
    }),
    answerRemainingMs: x === "answer" ? Math.max(0, FINALE_TIMING.answerMs - (_0x12f5ea - N)) : 0,
    controlRetained: x === "answer",
    pressure: {
      live: X(),
      queued: b.length,
      cap: FINALE_PRESSURE.maxSupport,
      target: FINALE_PRESSURE.targetSupport[C],
      powerBand: C,
      clearEmaMs: v,
      adaptiveSpawned: G,
      adaptiveCap: FINALE_PRESSURE.adaptiveCap,
      totalSpawned: P,
      maxLive: U,
      nextRefillMs: W()
    },
    warden: _0x65afb5
  };
}
function H(_0x150179, _0x1b70db = A, _0x113b0a = "packet", _0x4fad36 = 0) {
  const _0x3be5ab = _0x131070(_0x150179.x);
  const _0x3cfc10 = _0x150179.ecologyVisualId || _0x195cfa(_0x150179.kind);
  const _0x3f2938 = {
    finaleWave: _0x1b70db,
    finaleSource: _0x113b0a,
    gating: false,
    dir: _0x150179.dir,
    autoCycle: _0x150179.autoCycle,
    patrol: _0x150179.patrol
  };
  if (_0x150179.kind === "hound") {
    _0x3c3013(_0x150179.x, _0x3be5ab + _0x501fc8.hound.rideY, _0x4fad36, "hound", _0x3f2938, _0x3cfc10);
  } else if (_0x150179.kind === "polyp") {
    _0x3c3013(_0x150179.x, _0x3be5ab + _0x501fc8.polyp.rootY, _0x4fad36, "polyp", _0x3f2938, _0x3cfc10);
  } else if (_0x150179.kind === "mortar") {
    _0x3f2938.zone = {
      x: _0x150179.zoneX,
      y: _0x131070(_0x150179.zoneX)
    };
    _0x3c3013(_0x150179.x, _0x3be5ab + _0x501fc8.mortar.bodyY, _0x4fad36, "mortar", _0x3f2938, _0x3cfc10);
  } else {
    _0x3c3013(_0x150179.x, _0x201260(_0x150179.x, _0x150179.lane), _0x4fad36, "wasp", _0x3f2938, _0x3cfc10);
  }
  P++;
  _ = _0x12f5ea;
}
function X() {
  let _0x139021 = 0;
  for (const _0x5b0ec4 of _0x1e73c4) {
    if (_0x5b0ec4.id !== F && !_0x5b0ec4.gateBreakExit) {
      _0x139021++;
    }
  }
  return _0x139021;
}
function Y(_0x517931) {
  T = _0x517931;
  U = Math.max(U, _0x517931);
  if (_0x517931 > 0) {
    if (O < 0) {
      O = _0x12f5ea;
    }
    if (R < 0) {
      R = _0x12f5ea;
    }
    k = -1;
  } else {
    if (k < 0) {
      k = _0x12f5ea;
    }
    O = -1;
    R = -1;
  }
}
function J(_0x55b902) {
  return !y || !(A >= FINALE_PACKETS.length) || !(b.length <= 0) || !(_0x55b902 >= FINALE_TIMING.earnedMinMs);
}
export function startFinale() {
  if (x !== "dormant") {
    return false;
  }
  x = "arming";
  g = N = _0x12f5ea;
  A = 0;
  S = 0;
  y = false;
  L = 0;
  j = false;
  b.length = 0;
  z = FINALE_TIMING.armingMs;
  _ = _0x12f5ea - 1000000000;
  k = -1;
  O = -1;
  R = -1;
  T = 0;
  v = 0;
  C = 0;
  G = 0;
  P = 0;
  U = 0;
  _0x3b3a32();
  w = _0x59bb3f;
  const _0x79e6fc = _0x5e60d0 + 11.4;
  const _0x1df097 = _0x131070(_0x79e6fc) + _0x501fc8.warden.bodyY;
  _0x3c3013(_0x79e6fc, _0x1df097, 0, "warden", {
    finaleWave: 0,
    gating: false,
    dir: -1,
    arena: {
      x0: _0x5e60d0 + 2,
      x1: _0x5e60d0 + 10
    }
  });
  F = _0x1e73c4[_0x1e73c4.length - 1]?.id || 0;
  _0x23f606.finale.started(finaleSnapshot());
  return true;
}
export function updateFinale() {
  if (x === "dormant" || x === "complete") {
    return;
  }
  const _0x151a86 = D();
  if (x === "arming" && _0x151a86 >= FINALE_TIMING.armingMs) {
    x = "defend";
    N = g + FINALE_TIMING.armingMs;
  }
  if (x === "defend") {
    const _0x216207 = K();
    if (_0x216207) {
      L = Math.max(L, _0x216207.earnedDamage || 0);
    } else if (F) {
      y = true;
      if (!j) {
        L = _0x501fc8.warden.hp;
      }
    }
    let _0x12168c = X();
    (function (_0x4661af) {
      const _0x63221d = Math.max(0, T - _0x4661af);
      if (_0x63221d > 0) {
        const _0x3a292c = R >= 0 ? _0x12f5ea - R : O >= 0 ? _0x12f5ea - O : 0;
        const _0x181dfd = Math.max(FINALE_PRESSURE.clearSampleFloorMs, _0x3a292c / _0x63221d);
        v = v > 0 ? v * (1 - FINALE_PRESSURE.clearEmaWeight) + _0x181dfd * FINALE_PRESSURE.clearEmaWeight : _0x181dfd;
        R = _0x12f5ea;
      }
      Y(_0x4661af);
    })(_0x12168c);
    S = q();
    (function () {
      const _0x39c9d3 = _0x53c14f({
        clearEmaMs: v,
        kills: q(),
        earnedDamage: L,
        defendElapsedMs: Math.max(0, _0x12f5ea - N)
      });
      C = Math.max(C, _0x39c9d3);
    })();
    (function (_0x100617, _0x50cdb6) {
      if (b.length > 0 || !_0x181a8c({
        wave: A,
        elapsedMs: _0x100617,
        earnedDamage: L,
        packets: FINALE_PACKETS,
        windowDamage: _0x501fc8.warden.windowDamage,
        readyElapsedMs: z,
        powerBand: C,
        supportThreats: _0x50cdb6,
        queuedSupport: b.length,
        clearEmaMs: v
      })) {
        return false;
      }
      const _0x55905c = FINALE_PACKETS[A];
      const _0x1488e6 = A + 1;
      A = _0x1488e6;
      z = _0x100617 + FINALE_PRESSURE.packetCadenceMs[C];
      if (_0x1488e6 === 1) {
        for (const _0x28451e of _0x55905c.entries) {
          H(_0x28451e, _0x1488e6, "packet", Math.max(0, _0x28451e.delayMs || 0));
        }
      } else {
        for (const _0x51861d of _0x55905c.entries) {
          b.push({
            entry: _0x51861d,
            wave: _0x1488e6,
            source: "packet"
          });
        }
      }
    })(_0x151a86, _0x12168c);
    const _0x4748de = _0x12f5ea - N;
    (function (_0xb3df07) {
      const _0x2b909b = X();
      const _0x2faf53 = _0x3f3c82({
        nowMs: _0x12f5ea,
        liveSupport: _0x2b909b,
        queuedSupport: b.length,
        powerBand: C,
        lastSpawnAtMs: _,
        emptySinceMs: k,
        adaptiveSpawned: G,
        adaptiveCap: FINALE_PRESSURE.adaptiveCap,
        allowAdaptive: J(_0xb3df07)
      }, FINALE_PRESSURE);
      if (_0x2faf53.spawn === "queued") {
        const _0x31f97b = b.shift();
        H(_0x31f97b.entry, _0x31f97b.wave, _0x31f97b.source, 0);
      } else if (_0x2faf53.spawn === "adaptive") {
        const _0x373264 = FINALE_REFILLS[G % FINALE_REFILLS.length];
        G++;
        H(_0x373264, A, "adaptive", 0);
      }
      Y(X());
    })(_0x4748de);
    _0x12168c = X();
    const _0x355378 = S;
    const _0x3afec0 = _0x4748de >= FINALE_TIMING.minDefendMs;
    let _0xb462b2 = _0x38ca1c({
      defendElapsedMs: _0x4748de,
      minEarnedMs: FINALE_TIMING.earnedMinMs,
      wave: A,
      packetCount: FINALE_PACKETS.length,
      wardenBroken: y,
      supportThreats: _0x12168c,
      queuedSupport: b.length
    });
    const _0x2a8218 = _0x151a86 >= FINALE_TIMING.mercyAtMs && (L >= 12 || _0x355378 >= FINALE_TIMING.mercyKills);
    const _0x16b763 = _0x151a86 >= FINALE_TIMING.hardMaxMs;
    if (!y && _0x216207 && (_0x2a8218 || _0x16b763)) {
      j = true;
      _0x3cab19(_0x216207, "CROWN");
      y = true;
      S = q();
      _0x12168c = X();
      _0xb462b2 = _0x38ca1c({
        defendElapsedMs: _0x4748de,
        minEarnedMs: FINALE_TIMING.earnedMinMs,
        wave: A,
        packetCount: FINALE_PACKETS.length,
        wardenBroken: y,
        supportThreats: _0x12168c,
        queuedSupport: b.length
      });
    }
    if (_0xb462b2 || _0x3afec0 && y && (_0x2a8218 || _0x16b763)) {
      (function () {
        S = q();
        x = "transmit";
        N = _0x12f5ea;
        b.length = 0;
        for (let _0x4b4f25 = _0x1e73c4.length - 1; _0x4b4f25 >= 0; _0x4b4f25--) {
          _0x21f016(_0x4b4f25, true);
        }
        _0x23f606.finale.transmit(finaleSnapshot());
      })();
    }
  } else if (x === "transmit" && _0x12f5ea - N >= FINALE_TIMING.transmitMs) {
    x = "answer";
    N = _0x12f5ea;
  } else if (x === "answer" && _0x12f5ea - N >= FINALE_TIMING.answerMs) {
    x = "complete";
    N = _0x12f5ea;
  }
  _0x23f606.finale.sync(finaleSnapshot());
}
export function finaleActive() {
  return x !== "dormant";
}
export function finaleComplete() {
  return x === "complete";
}
export function resetFinale() {
  x = "dormant";
  g = 0;
  N = 0;
  w = 0;
  S = 0;
  A = 0;
  F = 0;
  y = false;
  L = 0;
  j = false;
  b.length = 0;
  z = 0;
  _ = -1000000000;
  k = -1;
  O = -1;
  R = -1;
  T = 0;
  v = 0;
  C = 0;
  G = 0;
  P = 0;
  U = 0;
  _0x23f606.finale.reset();
}