import { CONFIG as _0x15ceee } from "../config.js";
import { mulberry32 as _0x1bb1a1 } from "../pure/rng.js";
import { buildSpawnTable as _0x20cf77 } from "../pure/generator.js";
import { faceIndexAt as _0x339d4d } from "../pure/path.js";
import { neutralEnemyEcologyVisualId as _0x176cc7 } from "../pure/enemy-ecology.js";
import { newPressureState as _0x1f3193, pressureTelemetry as _0x1fe677, stepPressureDirector as _0x252590 } from "../pure/pressure.js";
import { TRANSFORM_FIXTURE as _0x5797a4 } from "../pure/transform.js";
import { IS_TRANSFORM_SLICE as _0x33d88c, IS_TRAVERSAL_SLICE as _0x2f97f9, SLICE_ENEMIES_ENABLED as _0x5d678f } from "../mode.js";
import { sLeftEdge as _0x774820, sRightEdge as _0x2ed607 } from "./edges.js";
import { groundTopAt as _0x47f004, levelData as _0x44e1ba, spawnLaneY as _0x44cd88 } from "./level.js";
import { hostiles as _0x3fd4f1, kills as _0x4f3264, spawnHostile as _0x9b4af1 } from "./hostiles.js";
import { player as _0x2f7794 } from "./player.js";
import { gameMs as _0x1fe3e9, scrollX as _0x2191c5, sliceStats as _0x45d209 } from "./time.js";
import { activeCorner as _0xa0c92b, cornerBusy as _0x353f84 } from "./wavegate.js";
import { transformBusy as _0x3d6a66 } from "./transform.js";
import { finaleActive as _0x4946f4 } from "./finale.js";
export const spawnTable = _0x33d88c ? _0x5d678f ? _0x5797a4.spawns : [] : _0x2f97f9 ? [] : _0x20cf77(_0x15ceee, _0x44e1ba);
let F = 0;
let B = _0x1bb1a1(9001);
let S = _0x1bb1a1(_0x15ceee.spawner.pressure.seed);
let I = _0x1f3193(0);
let L = 0;
let P = 0;
const Y = [];
const C = Object.freeze({
  wasp: Object.freeze([Object.freeze({
    fromFace: 2,
    ids: Object.freeze(["wasp-crosswind"])
  }), Object.freeze({
    fromFace: 4,
    ids: Object.freeze(["wasp-pincer"])
  })]),
  hound: Object.freeze([Object.freeze({
    fromFace: 3,
    ids: Object.freeze(["hound-vaultjaw"])
  }), Object.freeze({
    fromFace: 5,
    ids: Object.freeze(["hound-rebound"])
  })]),
  polyp: Object.freeze([Object.freeze({
    fromFace: 4,
    ids: Object.freeze(["polyp-sweepfan"])
  }), Object.freeze({
    fromFace: 6,
    ids: Object.freeze(["polyp-gateweaver"])
  })]),
  mortar: Object.freeze([Object.freeze({
    fromFace: 5,
    ids: Object.freeze(["mortar-bracketpod"])
  }), Object.freeze({
    fromFace: 6,
    ids: Object.freeze(["mortar-aircomb"])
  })])
});
export function notifyPressureEnvironmentChange(_0x400706 = 1) {
  P = Math.max(P, Math.max(0, Math.min(1, Number(_0x400706) || 0)));
}
const E = spawnTable.filter(_0x4e1e83 => {
  const _0x2d8823 = _0x339d4d(_0x4e1e83.x, _0x15ceee);
  return _0x15ceee.spawner.lesson.kindByFace[_0x2d8823 - 1] === _0x4e1e83.type;
});
function R(_0x1d1f2e) {
  return E.some(_0x809d44 => Math.abs(_0x1d1f2e - _0x809d44.x) < _0x15ceee.spawner.lesson.clearTiles);
}
const $ = {
  active: 0,
  entering: 0,
  committed: 0,
  adaptive: 0
};
function K(_0x1f36ee) {
  const _0x106579 = _0x15ceee.spawner.pressure;
  const _0x3e0f3a = _0x47f004(_0x1f36ee);
  const _0x24a116 = _0x47f004(_0x1f36ee - _0x106579.groundProbeTiles);
  const _0x590738 = _0x47f004(_0x1f36ee + _0x106579.groundProbeTiles);
  if (_0x3e0f3a <= -100 || _0x24a116 <= -100 || _0x590738 <= -100) {
    return null;
  }
  const _0x5b1c6b = _0x15ceee.hound.stepUpTiles;
  if (Math.abs(_0x24a116 - _0x3e0f3a) > _0x5b1c6b || Math.abs(_0x590738 - _0x3e0f3a) > _0x5b1c6b) {
    return null;
  } else {
    return {
      x: _0x1f36ee,
      y: _0x3e0f3a
    };
  }
}
function A(_0x2df225, _0x31f8f8, _0x4b2333, _0x46bbfc, _0x22f14a, _0x9caf88) {
  if (!_0x9caf88 || _0x31f8f8 < _0x15ceee.spawner.pressure.compositionBand || _0x4b2333 > 1 && _0x46bbfc === 0) {
    return "wasp";
  }
  const _0x258ba3 = _0x15ceee.spawner.pressure.roleBagByFace;
  const _0x4a11bd = _0x258ba3[Math.max(0, Math.min(_0x258ba3.length - 1, _0x2df225 - 1))] || ["wasp"];
  return _0x4a11bd[Math.min(_0x4a11bd.length - 1, Math.floor(_0x22f14a * _0x4a11bd.length))] || "wasp";
}
function D(_0x5500dd, _0xd4efa2, _0x36371f, _0xf44ef1) {
  if (_0x36371f < _0x15ceee.spawner.pressure.evolutionBand) {
    return "";
  }
  const _0x518d6f = [];
  for (const _0x50bcd9 of C[_0x5500dd] || []) {
    if (_0xd4efa2 >= _0x50bcd9.fromFace) {
      _0x518d6f.push(..._0x50bcd9.ids);
    }
  }
  if (_0x518d6f.length) {
    return _0x518d6f[Math.min(_0x518d6f.length - 1, Math.floor(_0xf44ef1 * _0x518d6f.length))];
  } else {
    return "";
  }
}
function U(_0x5ce305, _0x16b00b, _0x17febb, _0x20f290) {
  if (_0x5ce305.front) {
    if (_0x5ce305.rear) {
      if (_0x16b00b === 1) {
        if (_0x20f290 % 3 == 2) {
          return _0x5ce305.rear;
        } else {
          return _0x5ce305.front;
        }
      } else if ((_0x17febb + _0x20f290) % 2 == 0) {
        return _0x5ce305.front;
      } else {
        return _0x5ce305.rear;
      }
    } else {
      return _0x5ce305.front;
    }
  } else {
    return _0x5ce305.rear;
  }
}
function H(_0x306913) {
  const _0x4d7a13 = _0x15ceee.spawner.pressure;
  const _0x414164 = _0xa0c92b();
  const _0x5035ec = _0x774820();
  const _0x2dff88 = !_0x414164 || _0x414164.state !== "idle" || _0x414164.primed;
  const _0x3a36f1 = _0x2dff88 ? null : function (_0x16aaaf, _0x4359ca, _0x585052) {
    const _0x23dbd1 = _0x15ceee.spawner.pressure;
    const _0xf39300 = _0x16aaaf.s - _0x15ceee.spawner.cornerClearBefore - _0x23dbd1.cornerPadTiles;
    const _0xaa7d57 = Math.min(_0x585052 - _0x23dbd1.spawnInsetTiles, _0xf39300);
    const _0x34e0f3 = Math.min(_0x2f7794.x - _0x23dbd1.rearLeadTiles, _0xf39300);
    const _0x48755b = {
      front: _0xaa7d57 - _0x2f7794.x >= _0x23dbd1.minPlayerLeadTiles ? {
        side: "front",
        x: _0xaa7d57,
        dir: -1,
        room: _0xaa7d57 - _0x2f7794.x
      } : null,
      rear: _0x34e0f3 >= _0x4359ca + _0x23dbd1.spawnInsetTiles && _0x2f7794.x - _0x34e0f3 >= _0x23dbd1.minPlayerLeadTiles ? {
        side: "rear",
        x: _0x34e0f3,
        dir: 1,
        room: _0x2f7794.x - _0x34e0f3
      } : null
    };
    if (_0x339d4d(_0x2f7794.x, _0x15ceee) !== _0x16aaaf.k) {
      return null;
    } else {
      if (_0x48755b.front && _0x339d4d(_0x48755b.front.x, _0x15ceee) !== _0x16aaaf.k) {
        _0x48755b.front = null;
      }
      if (_0x48755b.rear && _0x339d4d(_0x48755b.rear.x, _0x15ceee) !== _0x16aaaf.k) {
        _0x48755b.rear = null;
      }
      if (_0x48755b.front || _0x48755b.rear) {
        return _0x48755b;
      } else {
        return null;
      }
    }
  }(_0x414164, _0x5035ec, _0x306913);
  const _0xfd172d = _0x414164 ? _0x414164.k : 0;
  const _0x467ade = _0x414164 ? _0x414164.s - _0x15ceee.waves.haltOffset - _0x2191c5 : 0;
  const _0x3616c0 = F < spawnTable.length ? Math.max(0, spawnTable[F].x - (_0x306913 - 1.5)) : Infinity;
  if (_0x3a36f1?.front && R(_0x3a36f1.front.x)) {
    _0x3a36f1.front = null;
  }
  if (_0x3a36f1?.rear && R(_0x3a36f1.rear.x)) {
    _0x3a36f1.rear = null;
  }
  const _0x2c938a = _0x3a36f1 && (_0x3a36f1.front || _0x3a36f1.rear);
  const _0x218aab = !!_0x2c938a && R(_0x2f7794.x);
  const _0x2871b9 = function (_0x50fd08, _0x350dd9) {
    let _0x381a01 = 0;
    let _0x239efa = 0;
    let _0x4b8716 = 0;
    for (const _0x2860cc of _0x3fd4f1) {
      if (!(_0x2860cc.x < _0x50fd08 - 1) && !(_0x2860cc.x > _0x350dd9 + 1)) {
        if (_0x1fe3e9 < _0x2860cc.enterUntil) {
          _0x239efa++;
        } else {
          _0x381a01++;
        }
        if (String(_0x2860cc.encounterKey || "").startsWith("pressure:")) {
          _0x4b8716++;
        }
      }
    }
    $.active = _0x381a01;
    $.entering = _0x239efa;
    $.committed = _0x381a01 + _0x239efa;
    $.adaptive = _0x4b8716;
    return $;
  }(_0x5035ec, _0x306913);
  const _0x8f4a7d = !!_0x2c938a && !_0x218aab;
  const _0x46601b = _0x8f4a7d ? P : 0;
  const _0x13b43d = _0x252590(I, {
    nowMs: _0x1fe3e9,
    face: _0xfd172d,
    aliveThreats: _0x2871b9.active,
    enteringThreats: _0x2871b9.entering,
    committedThreats: _0x2871b9.committed,
    adaptiveThreats: _0x2871b9.adaptive,
    kills: _0x4f3264,
    progressTiles: _0x2f7794.x,
    healthRatio: _0x2f7794.hp / Math.max(1, _0x15ceee.player.maxHealth),
    falls: _0x45d209.falls,
    setbacks: _0x45d209.setbacks,
    authoredStarted: F > 0,
    suspended: _0x2dff88,
    safe: _0x8f4a7d,
    nextAuthoredTiles: _0x3616c0,
    remainingTravelTiles: _0x467ade,
    spawnRoomTiles: _0x2c938a ? _0x2c938a.room : 0,
    environmentImpulse: _0x46601b
  }, _0x4d7a13);
  if (_0x46601b > 0) {
    P = 0;
  }
  if (_0x13b43d && _0x2c938a) {
    (function (_0x198758, _0x2392d9, _0xc8b204) {
      const _0x4c594c = _0x15ceee.spawner.pressure;
      const _0x42268d = L++;
      const _0x3c74f8 = "pressure:" + _0xc8b204 + ":" + _0x42268d;
      const _0x3ec360 = I.responseBand;
      const _0x4ac594 = Math.max(0, _0x3ec360 - _0x4c594c.evolutionBand + 1);
      for (let _0x511108 = 0; _0x511108 < _0x2392d9; _0x511108++) {
        const _0x558b0a = U(_0x198758, _0x2392d9, _0x511108, _0x42268d);
        const _0x23fac4 = K(_0x558b0a.x);
        const _0x4ec1fa = S();
        const _0x1181b2 = S();
        const _0x383f4e = S();
        let _0x48076f = A(_0xc8b204, _0x3ec360, _0x2392d9, _0x511108, _0x4ec1fa, _0x23fac4);
        if (_0x558b0a.dir > 0 && (_0x48076f === "polyp" || _0x48076f === "mortar")) {
          _0x48076f = "wasp";
        }
        const _0x30a23f = _0x2392d9 > 1 ? _0x511108 === 0 ? 6.7 + _0x1181b2 * 0.8 : 2.8 + _0x1181b2 * 0.6 : (_0x1181b2 < 0.44 ? 2.7 : _0x1181b2 < 0.82 ? 4.8 : 7.1) + _0x4ec1fa * 0.55;
        const _0x331b2a = _0x48076f === "hound" ? _0x23fac4.y + _0x15ceee.hound.rideY : _0x48076f === "polyp" ? _0x23fac4.y + _0x15ceee.polyp.rootY : _0x48076f === "mortar" ? _0x23fac4.y + _0x15ceee.mortar.bodyY : _0x44cd88(_0x558b0a.x, _0x30a23f);
        const _0x4c17d4 = D(_0x48076f, _0xc8b204, _0x3ec360, _0x383f4e);
        const _0xb769e5 = _0x3c74f8 + ":" + _0x511108 + ":" + _0x48076f;
        const _0x35e92a = _0x774820();
        const _0x55d944 = _0x2ed607();
        const _0x1ee07e = _0xa0c92b();
        const _0x99ac39 = _0x1ee07e ? _0x1ee07e.s - _0x15ceee.spawner.cornerClearBefore - _0x4c594c.cornerPadTiles : Infinity;
        Y.push({
          id: _0xb769e5,
          atMs: _0x1fe3e9,
          face: _0xc8b204,
          cohortKey: _0x3c74f8,
          slot: _0x511108,
          kind: _0x48076f,
          responseBand: _0x3ec360,
          evolutionTier: _0x4ac594,
          ecologyId: _0x4c17d4,
          site: _0x558b0a.side,
          x: _0x558b0a.x,
          y: _0x331b2a,
          dir: _0x558b0a.dir,
          gating: false,
          playerX: _0x2f7794.x,
          playerLeadTiles: Math.abs(_0x558b0a.x - _0x2f7794.x),
          screenLeft: _0x35e92a,
          screenRight: _0x55d944,
          insideScreen: _0x558b0a.x >= _0x35e92a && _0x558b0a.x <= _0x55d944,
          cornerLimit: _0x99ac39,
          outsideCornerApron: _0x558b0a.x <= _0x99ac39 + 0.000001,
          outsideLesson: !R(_0x558b0a.x) && !R(_0x2f7794.x),
          currentFacet: _0x339d4d(_0x558b0a.x, _0x15ceee) === _0xc8b204 && _0x339d4d(_0x2f7794.x, _0x15ceee) === _0xc8b204,
          rootedRouteSafe: !["hound", "polyp", "mortar"].includes(_0x48076f) || !!_0x23fac4
        });
        if (Y.length > 64) {
          Y.shift();
        }
        _0x9b4af1(_0x558b0a.x, _0x331b2a, _0x511108 * _0x4c594c.pairDelayMs, _0x48076f, {
          id: _0xb769e5,
          encounterKey: _0x3c74f8,
          dir: _0x558b0a.dir,
          gating: false,
          cohortKey: _0x3c74f8,
          cohortSlot: _0x511108,
          pressureClearEmaMs: I.clearEmaMs,
          pressureResponseBand: _0x3ec360,
          pressureEvolutionTier: _0x4ac594,
          ecologyId: _0x4c17d4
        }, _0x176cc7(_0x48076f));
      }
    })(_0x3a36f1, _0x13b43d, _0xfd172d);
  }
}
export function updateSpawner() {
  if (_0x2f97f9) {
    return;
  }
  if (_0x4946f4()) {
    return;
  }
  if (_0x3d6a66()) {
    return;
  }
  if (_0x353f84()) {
    return;
  }
  const _0x1dfc89 = _0x2ed607();
  while (F < spawnTable.length && spawnTable[F].x < _0x1dfc89 - 1.5) {
    const _0x469171 = spawnTable[F++];
    if (_0x469171.type === "carrier") {
      _0x9b4af1(_0x469171.x, _0x44cd88(_0x469171.x, _0x15ceee.carrier.laneAbove), 0, "carrier", _0x469171, _0x176cc7("carrier"));
    } else if (_0x469171.type === "hound") {
      const _0x23caf1 = _0x469171.deck !== undefined ? _0x469171.deck + _0x15ceee.hound.rideY : _0x47f004(_0x469171.x);
      _0x9b4af1(_0x469171.x, _0x23caf1, _0x469171.delayMs || 0, "hound", _0x469171, _0x176cc7("hound"));
    } else if (_0x469171.type === "polyp") {
      const _0x131c92 = (_0x469171.deck !== undefined ? _0x469171.deck : _0x47f004(_0x469171.x)) + _0x15ceee.polyp.rootY;
      _0x9b4af1(_0x469171.x, _0x131c92, _0x469171.delayMs || 0, "polyp", _0x469171, _0x176cc7("polyp"));
    } else if (_0x469171.type === "mortar") {
      const _0x3fd803 = (_0x469171.deck !== undefined ? _0x469171.deck : _0x47f004(_0x469171.x)) + _0x15ceee.mortar.bodyY;
      _0x9b4af1(_0x469171.x, _0x3fd803, _0x469171.delayMs || 0, "mortar", _0x469171, _0x176cc7("mortar"));
    } else if (_0x469171.lane !== undefined) {
      _0x9b4af1(_0x469171.x, _0x44cd88(_0x469171.x, _0x469171.lane), _0x469171.delayMs || 0, "wasp", _0x469171, _0x176cc7("wasp"));
    } else {
      const _0x4e9f65 = B();
      const _0xfab2ce = _0x4e9f65 < 0.45 ? 2.6 : _0x4e9f65 < 0.8 ? 4.6 : 7.2;
      _0x9b4af1(_0x469171.x, _0x44cd88(_0x469171.x, _0xfab2ce + B() * 0.8), _0x469171.delayMs || 0, "wasp", _0x469171, _0x176cc7("wasp"));
    }
  }
  H(_0x1dfc89);
}
export function resetSpawner() {
  F = 0;
  B = _0x1bb1a1(9001);
  S = _0x1bb1a1(_0x15ceee.spawner.pressure.seed);
  I = _0x1f3193(_0x1fe3e9);
  L = 0;
  P = 0;
  Y.length = 0;
}
export function pressureDirectorSnapshot() {
  return {
    ...I,
    spawnIdx: F,
    pendingEnvironmentImpulse: P,
    telemetry: _0x1fe677(I),
    spawns: Y.map(_0x3b7cd7 => ({
      ..._0x3b7cd7
    }))
  };
}