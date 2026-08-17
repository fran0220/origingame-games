import { CONFIG as _0x59e68f } from "../config.js";
import { mulberry32 as _0x3f484b } from "../pure/rng.js";
import { genomeHas as _0x753cc4, rollEnemyGenome as _0x14ad5e } from "../pure/genome.js";
import { BEND_S as _0x3433ac, crossesBend as _0x417daa } from "../pure/path.js";
import { polypBeamHitsRect as _0x57beeb, polypBeamReach as _0x758df5, polypBendClampRange as _0x28ba81 } from "../pure/polyp.js";
import { mortarArmed as _0x593295, mortarBlastHitsRect as _0x199ec5 } from "../pure/mortar.js";
import { diveVelocity as _0x428b02, diveLaunched as _0x1d6ffd, squadReady as _0x1c6c2b, WASP_DIVE_LOCK_MS as _0x59b8d3, WASP_SQUAD_STAGGER_MS as _0x49ef62 } from "../pure/wasp.js";
import { TRANSFORM_BEND_S as _0x4079a6 } from "../pure/transform.js";
import { IS_TRANSFORM_SLICE as _0x23c428 } from "../mode.js";
import { view as _0x2fefd3 } from "./bridge.js";
import { gameMs as _0x67be56, approach as _0x56181c } from "./time.js";
import { sLeftEdge as _0x17afde, sRightEdge as _0x360f27 } from "./edges.js";
import { builtGroundTopAt as _0x365d1d, builtSolidAt as _0x3851d6 } from "./level.js";
import { player as _0x3b83c1, circleHitsPlayer as _0x479205, damagePlayer as _0xc3f0de } from "./player.js";
import { weaponKills as _0x2b1487 } from "./weapons.js";
import { dropFromCarrier as _0x18ac13 } from "./capsules.js";
import { consumeLaunchShock as _0x4710ab, scoreKill as _0x29eb08 } from "./score.js";
import { activeCorner as _0x4b0437, gateActive as _0x12da1a, onHostileRemoved as _0x564686 } from "./wavegate.js";
import { beginCrosswind as _0x438f4e, beginRebound as _0x2062be, ecologyMechanic as _0x4df20c, enemyHasTactic as _0x21b854, makeEnemyEcologyFields as _0x3b229c, markReboundCharge as _0x3ffa17, markReboundRecovery as _0x1720b7, resetReboundCycle as _0x1b0983, settleRebound as _0x535b7f, updateAircomb as _0x3e392c, updateCrosswind as _0x595fda, updateEnemyTacticHazards as _0x372d93, updateRebound as _0x4b83de, updateSweepfan as _0x27fd40 } from "./ecology-tactics.js";
import { ENEMY_TACTICS as _0x421ba3, resolveEnemyEcology as _0x595624 } from "../pure/enemy-ecology.js";
export const hostiles = [];
export let kills = 0;
let Z = _0x3f484b(5150);
let J = 1;
let Q = 0;
let ee = 0;
let te = -Infinity;
let ie = 0;
let ae = -Infinity;
export function hostileAttackReady(_0x3621ef, _0x5763ca = _0x67be56) {
  return _0x5763ca >= _0x3621ef.enterUntil + (_0x3621ef.attackReadyDelayMs || 0);
}
function oe(_0x32f369, _0x4becf1) {
  return Math.max(-_0x4becf1, Math.min(_0x4becf1, _0x32f369));
}
export const ENEMY = {
  wasp: {
    hp: _0x59e68f.wasp.hp,
    hitR: _0x59e68f.wasp.contactRadius,
    shotR: _0x59e68f.wasp.shotRadius,
    gating: true
  },
  carrier: {
    hp: _0x59e68f.carrier.hp,
    hitR: _0x59e68f.carrier.hitRadius,
    shotR: _0x59e68f.carrier.hitRadius,
    gating: false
  },
  hound: {
    hp: _0x59e68f.hound.hp,
    hitR: _0x59e68f.hound.hitRadius,
    shotR: _0x59e68f.hound.shotRadius,
    gating: true,
    start: "prowl"
  },
  polyp: {
    hp: _0x59e68f.polyp.hp,
    hitR: _0x59e68f.polyp.hitRadius,
    shotR: _0x59e68f.polyp.shotRadius,
    gating: false,
    start: "closed"
  },
  mortar: {
    hp: _0x59e68f.mortar.hp,
    hitR: _0x59e68f.mortar.hitRadius,
    shotR: _0x59e68f.mortar.shotRadius,
    gating: false,
    start: "aim"
  },
  warden: {
    hp: _0x59e68f.warden.hp,
    hitR: _0x59e68f.warden.hitRadius,
    shotR: _0x59e68f.warden.hitRadius,
    gating: false,
    start: "sealed"
  }
};
const ne = {
  polyp: true,
  mortar: true,
  warden: true
};
const se = {
  fire: true,
  vent: true
};
const re = _0x23c428 ? _0x4079a6 : _0x3433ac;
const le = Object.freeze({
  wasp: true,
  hound: true
});
export function spawnHostile(_0x2fb6c9, _0x3eac2e, _0x1fcdb4, _0x2c68c9, _0x14abd1, _0x150c10 = "") {
  const _0x2b957b = ENEMY[_0x2c68c9 = _0x2c68c9 || "wasp"];
  const _0x595278 = _0x14abd1 && _0x14abd1.tune || null;
  const _0x4e3098 = _0x14abd1 && _0x14abd1.patrol || null;
  const _0x569dad = _0x2c68c9 === "warden" ? 0 : function (_0x4c21dc, _0x5022c9) {
    if (_0x5022c9 && _0x5022c9.finaleWave !== undefined) {
      return Math.max(4, Math.min(6, 3 + (Number(_0x5022c9.finaleWave) || 1)));
    }
    if (_0x5022c9 && _0x5022c9.gateWave !== undefined) {
      return Number(_0x5022c9.gateWave) || 0;
    }
    const _0x29d64b = _0x59e68f.path;
    return Math.max(1, Math.min(_0x29d64b.faces, 1 + Math.floor(Math.max(0, _0x4c21dc - _0x29d64b.introTiles) / _0x29d64b.faceTiles)));
  }(_0x2fb6c9, _0x14abd1);
  const _0x592698 = ee++;
  const _0x2a78da = _0x2c68c9 === "warden" ? null : _0x14ad5e({
    kind: _0x2c68c9,
    face: _0x569dad,
    serial: _0x592698,
    spawnKey: _0x14abd1?.id || _0x2c68c9 + ":" + _0x2fb6c9.toFixed(2) + ":" + _0x592698,
    cohortKey: _0x14abd1?.cohortKey,
    cohortSlot: _0x14abd1?.cohortSlot,
    cohortPhase: _0x14abd1?.cohortPhase,
    hpRatio: _0x3b83c1.hp / Math.max(1, _0x59e68f.player.maxHealth),
    kills: kills,
    clearEmaMs: _0x14abd1?.pressureClearEmaMs || 0,
    pressureEvolutionTier: _0x14abd1?.pressureEvolutionTier || 0
  }, _0x59e68f.genome.seed);
  const _0x1ca31a = _0x3b229c(_0x2c68c9, _0x14abd1, _0x3eac2e, _0x2a78da);
  const _0x4b682b = _0x14abd1?.ecologyId ? _0x1ca31a.ecologyId : _0x14abd1?.ecologyVisualId || _0x150c10;
  const _0x418336 = _0x595624(_0x4b682b, _0x2c68c9)?.id || "";
  const _0x4c1d5c = _0x9e4aec => _0x753cc4(_0x2a78da, _0x9e4aec) || _0x4df20c(_0x1ca31a, _0x9e4aec);
  const _0x5a2b84 = _0x4c1d5c("AEGIS");
  const _0x54109a = _0x4c1d5c("PINCER");
  const _0x2a1d68 = _0x54109a ? Q++ : 0;
  const _0x12890f = _0x54109a ? _0x2a1d68 % 2 ? 1 : -1 : 0;
  const _0x2c5fe0 = _0x54109a ? Math.floor(_0x2a1d68 / 2) % 3 : 0;
  const _0x115aff = {
    id: J++,
    kind: _0x2c68c9,
    x: _0x2fb6c9,
    y: _0x3eac2e,
    baseY: _0x3eac2e,
    vx: 0,
    vy: 0,
    dir: _0x14abd1 && _0x14abd1.dir || -1,
    t: Z() * 6,
    hp: _0x595278 && _0x595278.hp !== undefined ? _0x595278.hp : _0x2b957b.hp,
    hitR: _0x2b957b.hitR,
    shotR: _0x2b957b.shotR || _0x2b957b.hitR,
    maxHp: _0x595278 && _0x595278.hp !== undefined ? _0x595278.hp : _0x2b957b.hp,
    genome: _0x2a78da,
    genomeId: _0x2a78da?.id || "",
    genomeLabel: _0x2a78da?.label || _0x2c68c9.toUpperCase(),
    strainId: _0x2a78da?.strain?.id || "",
    genomeBudget: _0x2a78da?.expressedBudget || 0,
    wardPolicy: _0x2a78da?.alleles?.wardPolicy || "ANCHOR",
    salvoPattern: _0x1ca31a.ecology?.salvoPattern || _0x2a78da?.alleles?.salvoPattern || "LEAD",
    bulwark: _0x4c1d5c("BULWARK"),
    bulwarkOpenUntil: 0,
    bulwarkPingUntil: 0,
    twinstrike: _0x4c1d5c("TWINSTRIKE"),
    twinPassesLeft: 0,
    vault: _0x4c1d5c("VAULT") && !_0x21b854(_0x1ca31a, _0x421ba3.REVERSE_VAULT),
    salvo: _0x4c1d5c("SALVO"),
    salvoShotsRemaining: 0,
    relay: _0x4c1d5c("RELAY"),
    relayCycles: 0,
    relayFromDir: _0x14abd1 && _0x14abd1.dir || -1,
    backlash: _0x4c1d5c("BACKLASH"),
    backlashUntil: 0,
    backlashCoolUntil: 0,
    backlashBurstUntil: 0,
    cruiseSpeed: _0x595278 && _0x595278.cruiseSpeed !== undefined ? _0x595278.cruiseSpeed : undefined,
    diveRange: _0x595278 && _0x595278.diveRange !== undefined ? _0x595278.diveRange : undefined,
    diveCooldownMs: _0x595278 && _0x595278.diveCooldownMs !== undefined ? _0x595278.diveCooldownMs : undefined,
    senseRange: _0x595278 && _0x595278.senseRange !== undefined ? _0x595278.senseRange : undefined,
    state: _0x2b957b.start || "cruise",
    stateUntil: 0,
    diveCdUntil: 0,
    encounterKey: _0x14abd1?.encounterKey || "",
    ecologyBeat: Number.isFinite(_0x14abd1?.ecologyBeat) ? _0x14abd1.ecologyBeat : -1,
    ecologyBeatSlot: Number.isFinite(_0x14abd1?.ecologyBeatSlot) ? _0x14abd1.ecologyBeatSlot : -1,
    ecologyStageRole: _0x14abd1?.ecologyStageRole || "",
    ecologyMode: _0x14abd1?.ecologyMode || "",
    ecologyStageResolved: !!_0x14abd1?.ecologyStageResolved,
    ecologyPlacementFallback: !!_0x14abd1?.ecologyPlacementFallback,
    ecologyVisualId: _0x418336,
    attackReadyDelayMs: Math.max(0, Number(_0x14abd1?.attackReadyDelayMs) || 0),
    ..._0x1ca31a,
    tellLocked: false,
    evolutionFace: _0x569dad,
    aegis: _0x5a2b84,
    aegisActive: false,
    aegisPingUntil: 0,
    pincer: _0x54109a,
    formationSide: _0x12890f,
    formationBand: _0x2c5fe0,
    formationReady: !_0x54109a,
    wardedBy: 0,
    wardSourceX: 0,
    wardSourceY: 0,
    wardPingUntil: 0,
    blockedHits: 0,
    lockUntil: 0,
    gating: _0x14abd1 && _0x14abd1.gating !== undefined ? _0x14abd1.gating : _0x2b957b.gating,
    autoCycle: !!_0x14abd1 && !!_0x14abd1.autoCycle,
    gateBreakExit: false,
    gateClosing: false,
    drop: _0x14abd1 && _0x14abd1.drop ? {
      ..._0x14abd1.drop
    } : null,
    patrolX0: _0x4e3098 ? _0x4e3098.x0 : -Infinity,
    patrolX1: _0x4e3098 ? _0x4e3098.x1 : Infinity,
    deckY: _0x14abd1 && _0x14abd1.surface === "solid-top" ? _0x14abd1.deck : undefined,
    beamReach: 0,
    sightClamp: _0x2c68c9 === "polyp" ? _0x28ba81(_0x2fb6c9 + (_0x14abd1 && _0x14abd1.dir || -1) * _0x59e68f.polyp.barrelTiles, _0x14abd1 && _0x14abd1.dir || -1, _0x59e68f.polyp.sightRange, re) : 0,
    sightClampNeg: _0x2c68c9 === "polyp" ? _0x28ba81(_0x2fb6c9 - _0x59e68f.polyp.barrelTiles, -1, _0x59e68f.polyp.sightRange, re) : 0,
    sightClampPos: _0x2c68c9 === "polyp" ? _0x28ba81(_0x2fb6c9 + _0x59e68f.polyp.barrelTiles, 1, _0x59e68f.polyp.sightRange, re) : 0,
    zoneX: _0x14abd1 && _0x14abd1.zone ? _0x14abd1.zone.x : 0,
    zoneY: _0x14abd1 && _0x14abd1.zone ? _0x14abd1.zone.y : 0,
    zoneHomeX: _0x14abd1 && _0x14abd1.zone ? _0x14abd1.zone.x : 0,
    zoneHomeY: _0x14abd1 && _0x14abd1.zone ? _0x14abd1.zone.y : 0,
    podU: 0,
    wardenCycle: 0,
    windowDamage: 0,
    earnedDamage: 0,
    openedAt: 0,
    combo: false,
    armorPingUntil: 0,
    coreHitUntil: 0,
    arenaX0: _0x14abd1 && _0x14abd1.arena ? _0x14abd1.arena.x0 : 0,
    arenaX1: _0x14abd1 && _0x14abd1.arena ? _0x14abd1.arena.x1 : 0,
    staggerUntil: 0,
    recoilVx: 0,
    recoilVy: 0,
    enterUntil: _0x67be56 + (_0x1fcdb4 || 0) + _0x59e68f.wasp.enterMs,
    flashUntil: 0
  };
  hostiles.push(_0x115aff);
  _0x2fefd3.hostiles.spawned(_0x115aff);
}
function de(_0x140dc7) {
  if (!_0x140dc7.aegis || !hostileAttackReady(_0x140dc7) || _0x140dc7.gateBreakExit) {
    return false;
  }
  return Math.max(0, _0x67be56 - _0x140dc7.enterUntil) % _0x59e68f.evolution.aegisCycleMs < _0x59e68f.evolution.aegisActiveMs;
}
function ce(_0x502cb1, _0x50d395, _0x3f68f7, _0x1e0497) {
  if (_0x502cb1.wardPolicy === "SPEAR") {
    const _0x1a8cdd = _0x50d395.x - _0x3b83c1.x;
    const _0x51c27d = _0x50d395.y - (_0x3b83c1.y + _0x3b83c1.h * 0.5);
    return _0x1a8cdd * _0x1a8cdd + _0x51c27d * _0x51c27d + _0x1e0497 * 0.04;
  }
  if (_0x502cb1.wardPolicy === "ECHELON") {
    const _0x17e5d7 = _0x3f68f7 === 0 ? _0x3b83c1.y + 1.1 : _0x3f68f7 === 1 ? _0x3b83c1.y + 6.2 : _0x3b83c1.y + 3.6;
    const _0x1e0d4e = _0x50d395.y - _0x17e5d7;
    return _0x1e0d4e * _0x1e0d4e + _0x1e0497 * 0.04;
  }
  return _0x1e0497;
}
function he(_0x7175ee) {
  if (!_0x7175ee?.wardedBy) {
    return null;
  }
  const _0x313954 = hostiles.find(_0x3fab48 => _0x3fab48.id === _0x7175ee.wardedBy);
  if (!_0x313954 || !_0x313954.aegisActive || _0x417daa(re, _0x313954.x, _0x7175ee.x)) {
    return null;
  }
  const _0x10db22 = _0x7175ee.x - _0x313954.x;
  const _0x1bbafa = _0x7175ee.y - _0x313954.y;
  if (_0x10db22 * _0x10db22 + _0x1bbafa * _0x1bbafa <= _0x59e68f.evolution.aegisRadius ** 2) {
    return _0x313954;
  } else {
    return null;
  }
}
export function removeHostile(_0x37bd1c, _0x55b840) {
  const _0x452385 = hostiles[_0x37bd1c];
  _0x2fefd3.hostiles.removed(_0x452385, _0x55b840);
  hostiles.splice(_0x37bd1c, 1);
  _0x564686();
}
function ue(_0x306ea2, _0x1548bf, _0x2a14f6) {
  kills++;
  if (_0x2b1487[_0x2a14f6] !== undefined) {
    _0x2b1487[_0x2a14f6]++;
  }
  _0x29eb08(_0x306ea2.kind, _0x2a14f6, {
    grounded: _0x3b83c1.grounded,
    vy: _0x3b83c1.vy,
    x: _0x306ea2.x,
    y: _0x306ea2.y
  });
  if (_0x306ea2.kind === "carrier") {
    _0x18ac13(_0x306ea2.x, _0x306ea2.y, _0x306ea2.drop);
  }
  removeHostile(_0x1548bf, true);
}
export function hitHostile(_0x5adf16, _0x18b86c, _0x137928, _0x415164, _0x5684ea = null) {
  const _0x114652 = he(_0x5adf16);
  if (_0x114652) {
    _0x5adf16.wardPingUntil = _0x67be56 + _0x59e68f.evolution.wardPingMs;
    _0x114652.aegisPingUntil = _0x67be56 + _0x59e68f.evolution.wardPingMs;
    _0x5adf16.blockedHits++;
    return false;
  }
  if (_0x5adf16.bulwark && _0x67be56 >= _0x5adf16.bulwarkOpenUntil && function (_0x11c30f, _0x356636) {
    const _0xe9563e = Number.isFinite(_0x356636) ? -Math.sign(_0x356636) : Math.sign(_0x3b83c1.x - _0x11c30f.x) || -_0x11c30f.dir;
    return !!_0xe9563e && _0xe9563e === _0x11c30f.dir;
  }(_0x5adf16, _0x5684ea)) {
    _0x5adf16.bulwarkOpenUntil = _0x67be56 + _0x59e68f.genome.bulwarkOpenMs;
    _0x5adf16.bulwarkPingUntil = _0x67be56 + _0x59e68f.genome.bulwarkPingMs;
    _0x5adf16.blockedHits++;
    return false;
  }
  if (_0x5adf16.kind === "polyp" && !se[_0x5adf16.state] && !_0x5adf16.aegisActive) {
    _0x5adf16.flashUntil = _0x67be56 + 40;
    return false;
  }
  if (_0x5adf16.kind === "warden") {
    if (_0x5adf16.state !== "exposed") {
      _0x5adf16.armorPingUntil = _0x67be56 + 85;
      return false;
    }
    const _0x40569e = Math.max(0, _0x59e68f.warden.windowDamage - _0x5adf16.windowDamage);
    const _0x5a4ddb = Math.min(Math.max(0, _0x137928), _0x40569e, _0x5adf16.hp);
    if (_0x5a4ddb <= 0) {
      _0x5adf16.armorPingUntil = _0x67be56 + 65;
      return false;
    }
    _0x5adf16.hp -= _0x5a4ddb;
    _0x5adf16.windowDamage += _0x5a4ddb;
    _0x5adf16.earnedDamage += _0x5a4ddb;
    _0x5adf16.coreHitUntil = _0x67be56 + 90;
  } else {
    _0x5adf16.hp -= _0x137928;
    _0x5adf16.flashUntil = _0x67be56 + 120;
  }
  if (_0x5adf16.hp > 0 && _0x5adf16.backlash && hostileAttackReady(_0x5adf16) && !_0x5adf16.backlashUntil && _0x67be56 >= _0x5adf16.backlashCoolUntil) {
    _0x5adf16.backlashUntil = _0x67be56 + _0x59e68f.genome.backlashTellMs;
    _0x5adf16.backlashCoolUntil = _0x5adf16.backlashUntil + _0x59e68f.genome.backlashCooldownMs;
  }
  if (_0x5adf16.hp <= 0) {
    ue(_0x5adf16, _0x18b86c, _0x415164);
  }
  return true;
}
export function forceBreakHostile(_0x483795, _0x223e4b = "CROWN") {
  const _0x304422 = hostiles.indexOf(_0x483795);
  return !(_0x304422 < 0) && (_0x483795.hp = 0, _0x483795.coreHitUntil = _0x67be56 + 90, ue(_0x483795, _0x304422, _0x223e4b), true);
}
export function wardenStage(_0x35a70a) {
  if (!_0x35a70a || _0x35a70a.kind !== "warden") {
    return 0;
  }
  const _0x557eeb = Math.max(0, _0x35a70a.maxHp - _0x35a70a.hp);
  return Math.min(3, 1 + Math.floor(_0x557eeb / (_0x35a70a.maxHp / 3)));
}
export function staggerHostile(_0x57ba1d, _0x599fea, _0x1344ac, _0x322220, _0x604728) {
  if (!_0x57ba1d || ne[_0x57ba1d.kind] || _0x67be56 < _0x57ba1d.enterUntil || _0x322220 <= 0 || _0x604728 <= 0) {
    return false;
  }
  if (he(_0x57ba1d)) {
    return false;
  }
  if (_0x57ba1d.kind === "hound" && (_0x57ba1d.state === "charge" || _0x57ba1d.state === "vault" || _0x57ba1d.state === "tumble" || _0x57ba1d.state === "reboundTell" || _0x57ba1d.state === "reboundVault") || _0x57ba1d.kind === "wasp" && (_0x57ba1d.state === "dive" && _0x67be56 >= _0x57ba1d.lockUntil || _0x57ba1d.state === "crosswindBurst")) {
    return false;
  }
  const _0x376405 = Math.hypot(_0x599fea, _0x1344ac) || 1;
  const _0x280391 = 7.5;
  _0x57ba1d.recoilVx = Math.max(-7.5, Math.min(_0x280391, _0x57ba1d.recoilVx + _0x599fea / _0x376405 * _0x322220));
  _0x57ba1d.recoilVy = _0x57ba1d.kind === "hound" ? 0 : Math.max(-7.5, Math.min(_0x280391, _0x57ba1d.recoilVy + _0x1344ac / _0x376405 * _0x322220 * 0.65));
  const _0x912612 = Math.max(_0x67be56, _0x57ba1d.staggerUntil);
  const _0x297f41 = Math.min(_0x67be56 + 180, _0x912612 + _0x604728);
  if ((_0x57ba1d.kind === "hound" || _0x57ba1d.state === "crosswindTell" || _0x57ba1d.state === "crosswindRecover") && _0x57ba1d.stateUntil > _0x67be56) {
    const _0x10dbe1 = _0x297f41 - _0x912612;
    _0x57ba1d.stateUntil += _0x10dbe1;
    if (_0x57ba1d.tacticUntil > _0x67be56) {
      _0x57ba1d.tacticUntil += _0x10dbe1;
    }
  }
  _0x57ba1d.staggerUntil = _0x297f41;
  return true;
}
function ge(_0x189533, _0x13f76d) {
  const _0x14ef4d = oe(_0x3b83c1.vx * _0x13f76d.predictMs / 1000, _0x13f76d.predictXCap);
  return Math.sign(_0x3b83c1.x + _0x14ef4d - _0x189533.x) || _0x189533.dir;
}
function pe(_0x430a01, _0x16ec88) {
  if (_0x430a01.deckY === undefined) {
    return _0x365d1d(_0x16ec88);
  } else if (_0x3851d6(_0x16ec88, _0x430a01.deckY - 0.5)) {
    return _0x430a01.deckY;
  } else {
    return -999;
  }
}
function me(_0x9c1fcc, _0x559a96, _0x1fa17a) {
  return _0x1fa17a > _0x9c1fcc.y - _0x559a96.rideY + _0x559a96.stepUpTiles || _0x3851d6(_0x9c1fcc.x + _0x9c1fcc.dir * _0x559a96.probeX, _0x9c1fcc.y + _0x559a96.wallProbeY);
}
function ye(_0x2b15e8, _0xec5c0d, _0x37d7a3) {
  _0x2b15e8.state = "skid";
  _0x2b15e8.stateUntil = _0x67be56 + _0xec5c0d.skidMs;
  _0x2b15e8.diveCdUntil = _0x67be56 + _0xec5c0d.chargeCooldownMs;
  if (_0x37d7a3) {
    _0x2b15e8.vx = 0;
    _0x2b15e8.dir = -_0x2b15e8.dir;
  } else {
    _0x2b15e8.vx = _0x2b15e8.dir * _0xec5c0d.chargeSpeed;
  }
  _0x1720b7(_0x2b15e8, _0x37d7a3 ? "wall-recover" : "landing-recover");
}
function fe(_0xd8639c, _0x344e4e) {
  const _0x516fbf = _0x59e68f.hound;
  const _0x39a65e = _0x59e68f.genome;
  if (_0xd8639c.state === "tumble") {
    _0xd8639c.vy = Math.max(_0x516fbf.fallTerminal, _0xd8639c.vy + _0x516fbf.fallGravity * _0x344e4e);
    _0xd8639c.x += _0xd8639c.vx * _0x344e4e;
    _0xd8639c.y += _0xd8639c.vy * _0x344e4e;
    const _0x1c8da2 = _0x365d1d(_0xd8639c.x);
    if (_0x1c8da2 > -100 && _0xd8639c.y <= _0x1c8da2 + _0x516fbf.rideY) {
      _0xd8639c.y = _0x1c8da2 + _0x516fbf.rideY;
      _0xd8639c.vy = 0;
      _0xd8639c.deckY = undefined;
      ye(_0xd8639c, _0x516fbf, true);
    }
    return;
  }
  const _0x50790c = _0x4b83de(_0xd8639c, _0x344e4e);
  if (_0x50790c) {
    if (_0x50790c === "wall") {
      ye(_0xd8639c, _0x516fbf, true);
    } else if (_0x50790c === "land") {
      ye(_0xd8639c, _0x516fbf, false);
    } else if (_0x50790c === "tumble") {
      _0xd8639c.state = "tumble";
      _0xd8639c.diveCdUntil = _0x67be56 + _0x516fbf.chargeCooldownMs;
    }
    return;
  }
  if (_0xd8639c.state === "vault") {
    const _0xfcae6a = Math.min(_0x516fbf.substeps, Math.max(1, Math.ceil(Math.hypot(_0xd8639c.vx, _0xd8639c.vy) * _0x344e4e / 0.45)));
    const _0x4190bb = _0x344e4e / _0xfcae6a;
    for (let _0x8a76af = 0; _0x8a76af < _0xfcae6a; _0x8a76af++) {
      _0xd8639c.vy += _0x39a65e.vaultGravity * _0x4190bb;
      _0xd8639c.x += _0xd8639c.vx * _0x4190bb;
      _0xd8639c.y += _0xd8639c.vy * _0x4190bb;
      if (_0x67be56 >= _0xd8639c.enterUntil && _0x479205(_0xd8639c.x, _0xd8639c.y, _0xd8639c.hitR)) {
        _0xc3f0de(1, _0xd8639c.x);
      }
      if (_0x3851d6(_0xd8639c.x + _0xd8639c.dir * _0x516fbf.probeX * 0.35, _0xd8639c.y)) {
        ye(_0xd8639c, _0x516fbf, true);
        return;
      }
      let _0x42b2f9 = pe(_0xd8639c, _0xd8639c.x);
      if (_0x42b2f9 < -100) {
        _0xd8639c.deckY = undefined;
        _0x42b2f9 = _0x365d1d(_0xd8639c.x);
      }
      if (_0xd8639c.vy <= 0 && _0x42b2f9 > -100 && _0xd8639c.y <= _0x42b2f9 + _0x516fbf.rideY) {
        _0xd8639c.y = _0x42b2f9 + _0x516fbf.rideY;
        _0xd8639c.vy = 0;
        ye(_0xd8639c, _0x516fbf, false);
        return;
      }
    }
    if (_0x67be56 >= _0xd8639c.stateUntil) {
      _0xd8639c.state = "tumble";
      _0xd8639c.diveCdUntil = _0x67be56 + _0x516fbf.chargeCooldownMs;
    }
    return;
  }
  const _0x28683f = pe(_0xd8639c, _0xd8639c.x);
  if (_0x28683f > -100) {
    _0xd8639c.y = _0x56181c(_0xd8639c.y, _0x28683f + _0x516fbf.rideY, _0x516fbf.hugRate * _0x344e4e);
  }
  if (_0xd8639c.state === "prowl") {
    const _0x5cb3c9 = pe(_0xd8639c, _0xd8639c.x + _0xd8639c.dir * _0x516fbf.probeX);
    if (_0x5cb3c9 < -100 || me(_0xd8639c, _0x516fbf, _0x5cb3c9) || _0xd8639c.dir < 0 && _0xd8639c.x <= _0xd8639c.patrolX0 || _0xd8639c.dir > 0 && _0xd8639c.x >= _0xd8639c.patrolX1) {
      _0xd8639c.dir = -_0xd8639c.dir;
    } else {
      _0xd8639c.x += _0xd8639c.dir * _0x516fbf.prowlSpeed * _0x344e4e;
    }
    if (hostileAttackReady(_0xd8639c) && _0x67be56 >= _0xd8639c.diveCdUntil && function (_0x557c19, _0x53ad05) {
      const _0x367d70 = _0x3b83c1.y - _0x557c19.y;
      const _0xe4dac4 = _0x557c19.senseRange !== undefined ? _0x557c19.senseRange : _0x53ad05.senseRange;
      return Math.abs(_0x3b83c1.x - _0x557c19.x) < _0xe4dac4 && _0x367d70 > -_0x53ad05.laneBelow && _0x367d70 < _0x53ad05.laneAbove;
    }(_0xd8639c, _0x516fbf)) {
      _0xd8639c.dir = ge(_0xd8639c, _0x516fbf);
      const _0x569574 = pe(_0xd8639c, _0xd8639c.x + _0xd8639c.dir * _0x516fbf.probeX);
      if (_0x569574 > -100 && !me(_0xd8639c, _0x516fbf, _0x569574)) {
        _0xd8639c.state = "tell";
        _0xd8639c.stateUntil = _0x67be56 + _0x516fbf.tellMs;
        _0xd8639c.tellLocked = false;
        _0x1b0983(_0xd8639c);
      }
    }
    return;
  }
  if (_0xd8639c.state === "tell") {
    if (!_0xd8639c.tellLocked) {
      _0xd8639c.dir = ge(_0xd8639c, _0x516fbf);
      if (_0xd8639c.stateUntil - _0x67be56 <= _0x516fbf.aimLockMs) {
        _0xd8639c.tellLocked = true;
      }
    }
    _0xd8639c.x -= _0xd8639c.dir * (_0x516fbf.tellBackTiles / (_0x516fbf.tellMs / 1000)) * _0x344e4e;
    if (_0x67be56 >= _0xd8639c.stateUntil) {
      if (_0xd8639c.vault) {
        _0xd8639c.state = "vault";
        _0xd8639c.stateUntil = _0x67be56 + _0x39a65e.vaultMs;
        _0xd8639c.vx = _0xd8639c.dir * _0x39a65e.vaultSpeed;
        _0xd8639c.vy = _0x39a65e.vaultLift;
      } else {
        _0xd8639c.state = "charge";
        _0xd8639c.stateUntil = _0x67be56 + _0x516fbf.chargeMs;
        _0xd8639c.vx = _0xd8639c.dir * _0x516fbf.chargeSpeed;
        _0x3ffa17(_0xd8639c);
      }
    }
    return;
  }
  if (_0xd8639c.state === "charge") {
    const _0x4676d6 = Math.min(_0x516fbf.substeps, Math.max(1, Math.ceil(Math.abs(_0xd8639c.vx) * _0x344e4e / 0.45)));
    const _0x1a1de4 = _0x344e4e / _0x4676d6;
    for (let _0x18ada1 = 0; _0x18ada1 < _0x4676d6; _0x18ada1++) {
      const _0x34196b = _0xd8639c.x;
      _0xd8639c.x += _0xd8639c.vx * _0x1a1de4;
      const _0x2e8b68 = pe(_0xd8639c, _0xd8639c.x);
      if (_0x2e8b68 > -100) {
        _0xd8639c.y = _0x56181c(_0xd8639c.y, _0x2e8b68 + _0x516fbf.rideY, _0x516fbf.hugRate * _0x1a1de4);
      }
      if (_0x67be56 >= _0xd8639c.enterUntil && _0x479205(_0xd8639c.x, _0xd8639c.y, _0xd8639c.hitR)) {
        _0xc3f0de(1, _0xd8639c.x);
      }
      const _0x4eef7b = pe(_0xd8639c, _0xd8639c.x + _0xd8639c.dir * _0x516fbf.probeX);
      if (_0x4eef7b < -100) {
        if (_0x2062be(_0xd8639c)) {
          _0xd8639c.x = _0x34196b;
          return;
        } else {
          _0xd8639c.state = "tumble";
          _0xd8639c.vy = 0;
          _0xd8639c.diveCdUntil = _0x67be56 + _0x516fbf.chargeCooldownMs;
          return;
        }
      }
      if (me(_0xd8639c, _0x516fbf, _0x4eef7b)) {
        if (!_0x2062be(_0xd8639c)) {
          ye(_0xd8639c, _0x516fbf, true);
        }
        return;
      }
    }
    if (_0x67be56 >= _0xd8639c.stateUntil) {
      ye(_0xd8639c, _0x516fbf, false);
    }
    return;
  }
  _0xd8639c.vx = _0x56181c(_0xd8639c.vx, 0, _0x516fbf.chargeSpeed * 4 * _0x344e4e);
  _0xd8639c.x += _0xd8639c.vx * _0x344e4e;
  if (_0x67be56 >= _0xd8639c.stateUntil) {
    _0xd8639c.state = "prowl";
    _0xd8639c.vx = 0;
    _0x535b7f(_0xd8639c);
  }
}
function xe(_0x5b542a, _0x471e81) {
  return _0x758df5(_0x5b542a.x + _0x5b542a.dir * _0x471e81.barrelTiles, _0x5b542a.y, _0x5b542a.dir, _0x5b542a.sightClamp, _0x3851d6, _0x471e81.beamStepTiles);
}
function ve(_0xa552e7, _0x579cef, _0x4898a3) {
  return _0x57beeb(_0xa552e7.x + _0xa552e7.dir * _0x579cef.barrelTiles, _0xa552e7.y, _0xa552e7.dir, _0x4898a3, _0x579cef.beamHalf, _0x3b83c1.x - _0x3b83c1.hw, _0x3b83c1.x + _0x3b83c1.hw, _0x3b83c1.y, _0x3b83c1.y + _0x3b83c1.h);
}
function be(_0x55b6eb) {
  const _0x7ec6b2 = _0x59e68f.polyp;
  if (!(_0x67be56 < _0x55b6eb.enterUntil) && !_0x27fd40(_0x55b6eb, hostileAttackReady(_0x55b6eb))) {
    if (_0x55b6eb.state !== "relay") {
      if (_0x55b6eb.state === "closed") {
        if (!hostileAttackReady(_0x55b6eb) || _0x67be56 < _0x55b6eb.diveCdUntil) {
          return;
        }
        const _0x1dc461 = xe(_0x55b6eb, _0x7ec6b2);
        if (_0x55b6eb.autoCycle || ve(_0x55b6eb, _0x7ec6b2, _0x1dc461) || function (_0x3c238, _0x11b995, _0x1e7b34) {
          const _0xa80e6 = _0x11b995.anticipateMs / 1000;
          const _0x2c9471 = oe(_0x3b83c1.vx * _0xa80e6, _0x11b995.predictXCap);
          const _0x3c77ec = oe(_0x3b83c1.vy * _0xa80e6, _0x11b995.predictYCap);
          return _0x57beeb(_0x3c238.x + _0x3c238.dir * _0x11b995.barrelTiles, _0x3c238.y, _0x3c238.dir, _0x1e7b34, _0x11b995.beamHalf, _0x3b83c1.x + _0x2c9471 - _0x3b83c1.hw, _0x3b83c1.x + _0x2c9471 + _0x3b83c1.hw, _0x3b83c1.y + _0x3c77ec, _0x3b83c1.y + _0x3c77ec + _0x3b83c1.h);
        }(_0x55b6eb, _0x7ec6b2, _0x1dc461)) {
          _0x55b6eb.state = "tell";
          _0x55b6eb.stateUntil = _0x67be56 + _0x7ec6b2.tellMs;
        }
        return;
      }
      if (_0x55b6eb.state !== "tell") {
        if (_0x55b6eb.state === "fire") {
          _0x55b6eb.beamReach = xe(_0x55b6eb, _0x7ec6b2);
          if (ve(_0x55b6eb, _0x7ec6b2, _0x55b6eb.beamReach)) {
            _0xc3f0de(1, _0x55b6eb.x);
          }
          if (_0x67be56 >= _0x55b6eb.stateUntil) {
            _0x55b6eb.state = "vent";
            _0x55b6eb.stateUntil = _0x67be56 + _0x7ec6b2.ventMs;
            _0x55b6eb.beamReach = 0;
          }
          return;
        } else {
          if (_0x67be56 >= _0x55b6eb.stateUntil) {
            if (_0x55b6eb.relay) {
              _0x55b6eb.relayFromDir = _0x55b6eb.dir;
              _0x55b6eb.state = "relay";
              _0x55b6eb.stateUntil = _0x67be56 + _0x59e68f.genome.relayHingeMs;
              _0x55b6eb.beamReach = 0;
            } else {
              _0x55b6eb.state = "closed";
              _0x55b6eb.diveCdUntil = _0x67be56 + _0x7ec6b2.cooldownMs;
            }
          }
          return;
        }
      }
      if (_0x67be56 >= _0x55b6eb.stateUntil) {
        _0x55b6eb.state = "fire";
        _0x55b6eb.stateUntil = _0x67be56 + _0x7ec6b2.beamMs;
      }
    } else if (_0x67be56 >= _0x55b6eb.stateUntil) {
      _0x55b6eb.dir = -_0x55b6eb.relayFromDir;
      _0x55b6eb.sightClamp = _0x55b6eb.dir < 0 ? _0x55b6eb.sightClampNeg : _0x55b6eb.sightClampPos;
      _0x55b6eb.relayCycles++;
      _0x55b6eb.state = "closed";
      _0x55b6eb.diveCdUntil = _0x67be56 + _0x7ec6b2.cooldownMs;
    }
  }
}
function we(_0x589276, _0x43e0d5, _0x1d6068) {
  const _0x326b64 = _0x59e68f.mortar;
  if (!(_0x67be56 < _0x589276.enterUntil) && !_0x3e392c(_0x589276, hostileAttackReady(_0x589276), _0x43e0d5, _0x1d6068)) {
    if (_0x589276.state !== "aim") {
      if (_0x589276.state === "lob") {
        _0x589276.podU = 1 - Math.max(0, (_0x589276.stateUntil - _0x67be56) / _0x326b64.lobMs);
        if (_0x67be56 >= _0x589276.stateUntil) {
          _0x589276.state = "fuse";
          _0x589276.stateUntil = _0x67be56 + _0x326b64.fuseMs;
          _0x589276.podU = 1;
        }
        return;
      }
      if (_0x589276.state !== "fuse") {
        if (_0x589276.state !== "burst") {
          if (_0x67be56 >= _0x589276.stateUntil) {
            _0x589276.state = "aim";
          }
        } else {
          if (_0x199ec5(_0x589276.zoneX, _0x589276.zoneY, _0x326b64.blastHalf, _0x326b64.blastHeight, _0x3b83c1.x - _0x3b83c1.hw, _0x3b83c1.x + _0x3b83c1.hw, _0x3b83c1.y, _0x3b83c1.y + _0x3b83c1.h)) {
            _0xc3f0de(1, _0x589276.zoneX);
          }
          if (_0x67be56 >= _0x589276.stateUntil) {
            if (_0x589276.salvo && _0x589276.salvoShotsRemaining > 1) {
              _0x589276.salvoShotsRemaining--;
              const _0x390b30 = Math.sign(_0x3b83c1.vx) || -_0x589276.dir || 1;
              const _0x20ca1d = _0x589276.genome?.phenotype?.handedness || 1;
              let _0x362184 = _0x589276.salvoPattern === "BRACKET" ? _0x589276.zoneHomeX + _0x20ca1d * _0x59e68f.genome.salvoOffset : _0x589276.salvoPattern === "CUTBACK" ? _0x3b83c1.x - _0x390b30 * _0x59e68f.genome.salvoOffset : _0x3b83c1.x + _0x390b30 * _0x59e68f.genome.salvoOffset;
              let _0x26b84c = _0x365d1d(_0x362184);
              if (_0x26b84c < -100 || _0x417daa(re, _0x589276.x, _0x362184)) {
                _0x362184 = _0x589276.zoneHomeX;
                _0x26b84c = _0x589276.zoneHomeY;
              }
              _0x589276.zoneX = _0x362184;
              _0x589276.zoneY = _0x26b84c;
              _0x589276.state = "lob";
              _0x589276.stateUntil = _0x67be56 + _0x326b64.lobMs;
              _0x589276.podU = 0;
              return;
            }
            _0x589276.salvoShotsRemaining = 0;
            _0x589276.zoneX = _0x589276.zoneHomeX;
            _0x589276.zoneY = _0x589276.zoneHomeY;
            _0x589276.state = "cool";
            _0x589276.stateUntil = _0x67be56 + _0x326b64.coolMs;
            _0x589276.podU = 0;
          }
        }
      } else if (_0x67be56 >= _0x589276.stateUntil) {
        _0x589276.state = "burst";
        _0x589276.stateUntil = _0x67be56 + _0x326b64.burstMs;
      }
    } else if (hostileAttackReady(_0x589276) && _0x593295(_0x3b83c1.x, _0x589276.zoneX, _0x326b64.armRange)) {
      _0x589276.salvoShotsRemaining = _0x589276.salvo ? 2 : 1;
      _0x589276.zoneX = _0x589276.zoneHomeX;
      _0x589276.zoneY = _0x589276.zoneHomeY;
      _0x589276.state = "lob";
      _0x589276.stateUntil = _0x67be56 + _0x326b64.lobMs;
      _0x589276.podU = 0;
    }
  }
}
function ke(_0x280eb7) {
  const _0x418a48 = _0x59e68f.warden;
  const _0x6f961b = oe(_0x3b83c1.vx * _0x418a48.predictMs / 1000, _0x418a48.predictXCap);
  _0x280eb7.zoneX = function (_0x3e5722, _0x58c1c8) {
    return Math.max(_0x3e5722.arenaX0, Math.min(_0x3e5722.arenaX1, _0x58c1c8));
  }(_0x280eb7, _0x3b83c1.x + _0x6f961b);
  _0x280eb7.zoneY = _0x365d1d(_0x280eb7.zoneX);
  _0x280eb7.state = "barrageTell";
  _0x280eb7.stateUntil = _0x67be56 + _0x418a48.barrageTellMs;
}
function Me(_0x4a25f2) {
  const _0x402b0b = _0x59e68f.warden;
  if (_0x4a25f2.wardenCycle === 1) {
    _0x4a25f2.combo = false;
    ke(_0x4a25f2);
  } else {
    _0x4a25f2.combo = _0x4a25f2.wardenCycle >= 2;
    _0x4a25f2.state = "sweepTell";
    _0x4a25f2.stateUntil = _0x67be56 + _0x402b0b.sweepTellMs;
  }
}
function Ue(_0x560bae) {
  _0x560bae.state = "exposed";
  _0x560bae.openedAt = _0x67be56;
  _0x560bae.stateUntil = _0x67be56 + _0x59e68f.warden.exposedMs;
  _0x560bae.windowDamage = 0;
  _0x560bae.beamReach = 0;
}
function Re(_0x2a3cf6) {
  const _0x31815d = _0x59e68f.warden;
  if (_0x67be56 < _0x2a3cf6.enterUntil) {
    return;
  }
  if (_0x2a3cf6.state === "sealed") {
    Me(_0x2a3cf6);
    return;
  }
  if (_0x2a3cf6.state === "sweepTell") {
    if (_0x67be56 >= _0x2a3cf6.stateUntil) {
      _0x2a3cf6.state = "sweepFire";
      _0x2a3cf6.stateUntil = _0x67be56 + _0x31815d.sweepMs;
      _0x2a3cf6.beamReach = _0x31815d.beamReach;
    }
    return;
  }
  if (_0x2a3cf6.state === "sweepFire") {
    if (function (_0x244813, _0x410e34) {
      const _0x3f4a4e = _0x244813.x + _0x244813.dir * _0x410e34.emitterTiles;
      const _0x28b2ca = Math.min(_0x3f4a4e, _0x3f4a4e + _0x244813.dir * _0x410e34.beamReach);
      const _0x27d4ea = Math.max(_0x3f4a4e, _0x3f4a4e + _0x244813.dir * _0x410e34.beamReach);
      return _0x3b83c1.x + _0x3b83c1.hw >= _0x28b2ca && _0x3b83c1.x - _0x3b83c1.hw <= _0x27d4ea && _0x3b83c1.y + _0x3b83c1.h >= _0x244813.y - _0x410e34.beamHalf && _0x3b83c1.y <= _0x244813.y + _0x410e34.beamHalf;
    }(_0x2a3cf6, _0x31815d)) {
      _0xc3f0de(1, _0x2a3cf6.x);
    }
    if (_0x67be56 >= _0x2a3cf6.stateUntil) {
      _0x2a3cf6.beamReach = 0;
      if (_0x2a3cf6.combo) {
        ke(_0x2a3cf6);
      } else {
        Ue(_0x2a3cf6);
      }
    }
    return;
  }
  if (_0x2a3cf6.state === "barrageTell") {
    if (_0x67be56 >= _0x2a3cf6.stateUntil) {
      _0x2a3cf6.state = "barrageBurst";
      _0x2a3cf6.stateUntil = _0x67be56 + _0x31815d.barrageMs;
    }
    return;
  }
  if (_0x2a3cf6.state === "barrageBurst") {
    if (function (_0x2c55b8, _0x1118ae) {
      return _0x3b83c1.x + _0x3b83c1.hw >= _0x2c55b8.zoneX - _0x1118ae.barrageHalf && _0x3b83c1.x - _0x3b83c1.hw <= _0x2c55b8.zoneX + _0x1118ae.barrageHalf && _0x3b83c1.y + _0x3b83c1.h >= _0x2c55b8.zoneY && _0x3b83c1.y <= _0x2c55b8.zoneY + _0x1118ae.barrageHeight;
    }(_0x2a3cf6, _0x31815d)) {
      _0xc3f0de(1, _0x2a3cf6.zoneX);
    }
    if (_0x67be56 >= _0x2a3cf6.stateUntil) {
      Ue(_0x2a3cf6);
    }
    return;
  }
  const _0x4d019c = _0x67be56 - _0x2a3cf6.openedAt >= _0x31815d.exposedMinMs;
  const _0x1659d4 = _0x2a3cf6.windowDamage >= _0x31815d.windowDamage;
  if (_0x67be56 >= _0x2a3cf6.stateUntil || _0x4d019c && _0x1659d4) {
    _0x2a3cf6.wardenCycle++;
    Me(_0x2a3cf6);
  }
}
function Ce(_0x13694d, _0x396d5f, _0x5b9a42, _0x1a7663, _0x3391ac) {
  const _0x6c9bd3 = _0x59e68f.evolution;
  let _0x3ce343 = _0x3b83c1.x + _0x13694d.formationSide * _0x6c9bd3.flankOffsetX;
  if (_0x5b9a42) {
    _0x3ce343 = Math.max(_0x1a7663 + 0.4, Math.min(_0x3391ac - 0.4, _0x3ce343));
  }
  const _0x18bf3b = _0x365d1d(_0x13694d.x);
  const _0x114ce0 = _0x18bf3b > -100 ? _0x18bf3b + _0x6c9bd3.flankHeight : _0x3b83c1.y + _0x6c9bd3.flankHeight;
  const _0x50cd70 = Math.max(_0x3b83c1.y + _0x6c9bd3.flankHeight, _0x114ce0) + _0x13694d.formationBand * _0x6c9bd3.flankBandHeight;
  _0x13694d.x = _0x56181c(_0x13694d.x, _0x3ce343, _0x6c9bd3.flankSpeed * _0x396d5f);
  _0x13694d.baseY = _0x56181c(_0x13694d.baseY, _0x50cd70, _0x6c9bd3.flankVerticalSpeed * _0x396d5f);
  _0x13694d.dir = Math.sign(_0x3b83c1.x - _0x13694d.x) || _0x13694d.dir;
  _0x13694d.formationReady = Math.abs(_0x13694d.x - _0x3ce343) <= _0x6c9bd3.flankReadyTiles && Math.abs(_0x13694d.baseY - _0x50cd70) <= _0x6c9bd3.flankReadyTiles;
}
function Se(_0x5769a9) {
  if (!!_0x5769a9.backlashUntil && !(_0x67be56 < _0x5769a9.backlashUntil)) {
    if (_0x479205(_0x5769a9.x, _0x5769a9.y, _0x59e68f.genome.backlashRadius)) {
      _0xc3f0de(1, _0x5769a9.x);
    }
    _0x5769a9.backlashUntil = 0;
    _0x5769a9.backlashBurstUntil = _0x67be56 + _0x59e68f.genome.backlashBurstMs;
  }
}
export function updateHostiles(_0x517968) {
  const _0x59a36d = _0x59e68f.wasp;
  const _0x5c4053 = _0x59e68f.waves;
  const _0x10c837 = _0x12da1a();
  const _0x1fe392 = _0x17afde() - 8;
  const _0x1ddc7c = _0x4710ab();
  const _0x11ca23 = _0x59e68f.score.shockRadius * _0x59e68f.score.shockRadius;
  const _0x2bd9f3 = _0x10c837 ? Math.min(_0x360f27() - 2, _0x4b0437().s - 1.5) : 0;
  const _0xcd5799 = _0x10c837 ? _0x17afde() + 2 : 0;
  const _0x2196ae = _0x10c837 ? _0xcd5799 : _0x17afde() - 1;
  const _0x1fe2a3 = _0x10c837 ? _0x2bd9f3 : _0x360f27() + 1;
  let _0x24c43f = null;
  if (_0x10c837) {
    const _0x1dd0eb = _0x4b0437()?.encounterKey || "";
    let _0x4e7249 = 0;
    for (const _0x50b9a5 of hostiles) {
      if (!_0x50b9a5.gateBreakExit && _0x50b9a5.encounterKey === _0x1dd0eb && _0x50b9a5.gating && (_0x24c43f = _0x50b9a5, _0x4e7249++, _0x4e7249 > 1)) {
        break;
      }
    }
    if (_0x4e7249 !== 1 || !_0x24c43f || !!ne[_0x24c43f.kind]) {
      _0x24c43f = null;
    }
  }
  if (_0x24c43f) {
    if (_0x24c43f.id !== ie) {
      ie = _0x24c43f.id;
      ae = _0x67be56;
    } else if (_0x67be56 - ae >= _0x5c4053.stragglerCommitMs && !_0x24c43f.gateClosing) {
      _0x24c43f.gateClosing = true;
      _0x24c43f.diveCdUntil = Math.min(_0x24c43f.diveCdUntil, _0x67be56 + 120);
    }
  } else {
    ie = 0;
    ae = -Infinity;
  }
  if (_0x10c837 && hostiles.length) {
    const _0x245eea = _0x4b0437()?.encounterKey || "";
    let _0x17bddb = false;
    let _0x20d811 = Infinity;
    for (const _0x20b100 of hostiles) {
      if (!_0x20b100.gateBreakExit && _0x20b100.encounterKey === _0x245eea) {
        if (_0x67be56 >= _0x20b100.enterUntil - _0x59a36d.enterMs) {
          _0x17bddb = true;
        } else if (_0x20b100.enterUntil < _0x20d811) {
          _0x20d811 = _0x20b100.enterUntil;
        }
      }
    }
    if (!_0x17bddb && Number.isFinite(_0x20d811)) {
      const _0x26e7c7 = _0x67be56 + _0x59a36d.enterMs + _0x5c4053.emptyAdvanceMs;
      const _0x1828f5 = Math.max(0, _0x20d811 - _0x26e7c7);
      if (_0x1828f5 > 0) {
        for (const _0xba88c2 of hostiles) {
          if (!_0xba88c2.gateBreakExit && _0xba88c2.encounterKey === _0x245eea && _0x67be56 < _0xba88c2.enterUntil - _0x59a36d.enterMs) {
            _0xba88c2.enterUntil -= _0x1828f5;
          }
        }
      }
    }
  }
  (function () {
    for (const _0x3dad4c of hostiles) {
      _0x3dad4c.wardedBy = 0;
      _0x3dad4c.aegisActive = de(_0x3dad4c);
    }
    const _0x39229d = _0x59e68f.evolution;
    const _0x9475e1 = _0x39229d.aegisRadius * _0x39229d.aegisRadius;
    for (const _0x1b290b of hostiles) {
      if (_0x1b290b.aegisActive) {
        for (let _0x4959c4 = 0; _0x4959c4 < _0x39229d.aegisMaxLinks; _0x4959c4++) {
          let _0x5f4248 = null;
          let _0x4418fa = Infinity;
          for (const _0x32c452 of hostiles) {
            if (_0x32c452 === _0x1b290b || _0x32c452.wardedBy || !le[_0x32c452.kind] || _0x67be56 < _0x32c452.enterUntil || _0x32c452.gateBreakExit || _0x417daa(re, _0x1b290b.x, _0x32c452.x)) {
              continue;
            }
            const _0x217a5a = _0x32c452.x - _0x1b290b.x;
            const _0x2536de = _0x32c452.y - _0x1b290b.y;
            const _0x29e388 = _0x217a5a * _0x217a5a + _0x2536de * _0x2536de;
            if (_0x29e388 > _0x9475e1) {
              continue;
            }
            const _0x48cdae = ce(_0x1b290b, _0x32c452, _0x4959c4, _0x29e388);
            if (!(_0x48cdae >= _0x4418fa)) {
              _0x5f4248 = _0x32c452;
              _0x4418fa = _0x48cdae;
            }
          }
          if (!_0x5f4248) {
            break;
          }
          _0x5f4248.wardedBy = _0x1b290b.id;
          _0x5f4248.wardSourceX = _0x1b290b.x;
          _0x5f4248.wardSourceY = _0x1b290b.y;
        }
      }
    }
  })();
  for (let _0x471f32 = hostiles.length - 1; _0x471f32 >= 0; _0x471f32--) {
    const _0x4c4e33 = hostiles[_0x471f32];
    if (_0x4c4e33.gateBreakExit) {
      removeHostile(_0x471f32);
      continue;
    }
    if (_0x67be56 < _0x4c4e33.enterUntil - _0x59a36d.enterMs) {
      _0x2fefd3.hostiles.sync(_0x4c4e33);
      continue;
    }
    _0x4c4e33.t += _0x517968;
    _0x372d93(_0x4c4e33, _0x517968, _0x2196ae, _0x1fe2a3);
    Se(_0x4c4e33);
    const _0x236016 = _0x10c837 ? _0x4c4e33.gateClosing ? _0x5c4053.stragglerDiveRange : _0x5c4053.gateDiveRange : _0x4c4e33.diveRange !== undefined ? _0x4c4e33.diveRange : _0x59a36d.diveRange;
    const _0x2fdd3c = _0x10c837 ? _0x5c4053.gateDiveCooldownMs : _0x4c4e33.diveCooldownMs !== undefined ? _0x4c4e33.diveCooldownMs : _0x59a36d.diveCooldownMs;
    const _0x3b08bc = _0x10c837 ? _0x5c4053.gateCruiseSpeed : _0x4c4e33.cruiseSpeed !== undefined ? _0x4c4e33.cruiseSpeed : _0x59a36d.cruiseSpeed;
    const _0x1f44df = _0x10c837 ? _0x5c4053.gateSquadStaggerMs : _0x49ef62;
    if (_0x1ddc7c && _0x67be56 >= _0x4c4e33.enterUntil && (_0x4c4e33.x - _0x1ddc7c.x) ** 2 + (_0x4c4e33.y - _0x1ddc7c.y) ** 2 <= _0x11ca23) {
      hitHostile(_0x4c4e33, _0x471f32, _0x59e68f.score.shockDamage, "shock");
      continue;
    }
    if (_0x10c837 && !ne[_0x4c4e33.kind] && _0x4c4e33.state !== "charge" && _0x4c4e33.state !== "vault" && _0x4c4e33.state !== "tumble" && _0x4c4e33.state !== "reboundTell" && _0x4c4e33.state !== "reboundVault" && _0x4c4e33.state !== "crosswindTell" && _0x4c4e33.state !== "crosswindBurst" && _0x4c4e33.state !== "crosswindRecover") {
      if (_0x4c4e33.x < _0xcd5799) {
        _0x4c4e33.dir = 1;
      } else if (_0x4c4e33.x > _0x2bd9f3) {
        _0x4c4e33.dir = -1;
      }
    }
    const _0x2806ad = _0x67be56 < _0x4c4e33.staggerUntil && !ne[_0x4c4e33.kind];
    if (_0x2806ad) {
      _0x4c4e33.x += _0x4c4e33.recoilVx * _0x517968;
      _0x4c4e33.y += _0x4c4e33.recoilVy * _0x517968;
      if (_0x4c4e33.kind === "wasp" || _0x4c4e33.kind === "carrier") {
        _0x4c4e33.baseY += _0x4c4e33.recoilVy * _0x517968;
      }
      const _0x2011b6 = Math.exp(_0x517968 * -10);
      _0x4c4e33.recoilVx *= _0x2011b6;
      _0x4c4e33.recoilVy *= _0x2011b6;
    } else {
      _0x4c4e33.recoilVx = 0;
      _0x4c4e33.recoilVy = 0;
    }
    if (_0x2806ad) ;else if (_0x4c4e33.kind === "warden") {
      Re(_0x4c4e33);
    } else if (_0x4c4e33.kind === "hound") {
      fe(_0x4c4e33, _0x517968);
    } else if (_0x4c4e33.kind === "polyp") {
      be(_0x4c4e33);
    } else if (_0x4c4e33.kind === "mortar") {
      we(_0x4c4e33, _0x2196ae, _0x1fe2a3);
    } else if (_0x595fda(_0x4c4e33, _0x517968, _0x2196ae, _0x1fe2a3)) ;else if (_0x4c4e33.kind === "carrier") {
      const _0x1731a6 = _0x59e68f.carrier;
      if (_0x4c4e33.pincer) {
        Ce(_0x4c4e33, _0x517968, _0x10c837, _0xcd5799, _0x2bd9f3);
      } else {
        _0x4c4e33.x += _0x4c4e33.dir * (_0x4c4e33.cruiseSpeed !== undefined ? _0x4c4e33.cruiseSpeed : _0x1731a6.speed) * _0x517968;
      }
      _0x4c4e33.y = _0x4c4e33.baseY + Math.sin(_0x4c4e33.t * _0x1731a6.bobFreq) * _0x1731a6.bobAmp;
    } else if (_0x4c4e33.state === "cruise") {
      if (_0x10c837 && _0x4c4e33.gateClosing && _0x4c4e33.kind === "wasp") {
        const _0x187e81 = Math.sign(_0x4c4e33.x - _0x3b83c1.x) || 1;
        const _0x3da0c4 = Math.max(_0xcd5799 + 0.5, Math.min(_0x2bd9f3 - 0.5, _0x3b83c1.x + _0x187e81 * 3.2));
        const _0x1de5af = _0x365d1d(_0x3da0c4);
        const _0x12dabe = Math.max(_0x3b83c1.y + _0x5c4053.stragglerHeight, (_0x1de5af > -100 ? _0x1de5af : _0x3b83c1.y) + 2);
        _0x4c4e33.x = _0x56181c(_0x4c4e33.x, _0x3da0c4, _0x5c4053.stragglerCruiseSpeed * _0x517968);
        _0x4c4e33.baseY = _0x56181c(_0x4c4e33.baseY, _0x12dabe, _0x5c4053.gateRecoverRate * _0x517968);
        _0x4c4e33.dir = Math.sign(_0x3b83c1.x - _0x4c4e33.x) || _0x4c4e33.dir;
      } else if (_0x4c4e33.pincer) {
        Ce(_0x4c4e33, _0x517968, _0x10c837, _0xcd5799, _0x2bd9f3);
      } else {
        _0x4c4e33.x += _0x4c4e33.dir * _0x3b08bc * _0x517968;
      }
      _0x4c4e33.y = _0x4c4e33.baseY + Math.sin(_0x4c4e33.t * _0x59a36d.bobFreq) * _0x59a36d.bobAmp;
      const _0x2bc7b0 = hostileAttackReady(_0x4c4e33) && _0x1c6c2b(_0x67be56, te, _0x1f44df);
      if (_0x21b854(_0x4c4e33, _0x421ba3.HORIZONTAL_BURST)) {
        if (_0x438f4e(_0x4c4e33, _0x236016, _0x2fdd3c, _0x2bc7b0)) {
          te = _0x67be56;
        }
      } else if ((!_0x4c4e33.pincer || _0x4c4e33.formationReady) && Math.abs(_0x4c4e33.x - _0x3b83c1.x) < _0x236016 && _0x3b83c1.y + 1 < _0x4c4e33.y && _0x67be56 > _0x4c4e33.diveCdUntil && hostileAttackReady(_0x4c4e33) && _0x1c6c2b(_0x67be56, te, _0x1f44df)) {
        const _0x191c70 = _0x59a36d.predictMs / 1000;
        const _0x111116 = _0x3b83c1.x + oe(_0x3b83c1.vx * _0x191c70, _0x59a36d.predictXCap);
        const _0x1722b0 = _0x3b83c1.y + 0.9 + oe(_0x3b83c1.vy * _0x191c70, _0x59a36d.predictYCap);
        const _0x39e52e = _0x428b02(_0x4c4e33.x, _0x4c4e33.y, _0x111116, _0x1722b0, _0x59a36d.diveSpeed);
        _0x4c4e33.vx = _0x39e52e.vx;
        _0x4c4e33.vy = _0x39e52e.vy;
        _0x4c4e33.state = "dive";
        if (_0x4c4e33.twinstrike && _0x4c4e33.twinPassesLeft <= 0) {
          _0x4c4e33.twinPassesLeft = 2;
        }
        _0x4c4e33.lockUntil = _0x67be56 + _0x59b8d3;
        _0x4c4e33.stateUntil = _0x4c4e33.lockUntil + _0x59a36d.diveMs;
        te = _0x67be56;
      }
    } else if (_0x4c4e33.state === "dive") {
      const _0x53083f = _0x1d6ffd(_0x67be56, _0x4c4e33.lockUntil);
      if (_0x53083f) {
        _0x4c4e33.x += _0x4c4e33.vx * _0x517968;
        _0x4c4e33.y += _0x4c4e33.vy * _0x517968;
      }
      const _0x29b1ff = _0x365d1d(_0x4c4e33.x);
      const _0xad66d2 = _0x29b1ff > -100 ? _0x29b1ff + Math.max(0.4, _0x4c4e33.shotR || _0x4c4e33.hitR) : -Infinity;
      const _0x4eb89a = _0x53083f && _0x4c4e33.y < _0xad66d2;
      if (_0x67be56 > _0x4c4e33.stateUntil || _0x4eb89a) {
        if (_0x4eb89a) {
          _0x4c4e33.y = _0xad66d2;
        }
        _0x4c4e33.state = "recover";
        if (_0x4c4e33.twinstrike && _0x4c4e33.twinPassesLeft > 1) {
          _0x4c4e33.twinPassesLeft--;
          _0x4c4e33.formationSide &&= -_0x4c4e33.formationSide;
          _0x4c4e33.diveCdUntil = _0x67be56 + _0x59e68f.genome.twinGapMs;
        } else {
          _0x4c4e33.twinPassesLeft = 0;
          _0x4c4e33.diveCdUntil = _0x67be56 + _0x2fdd3c;
        }
      }
    } else {
      if (_0x4c4e33.pincer) {
        Ce(_0x4c4e33, _0x517968, _0x10c837, _0xcd5799, _0x2bd9f3);
      } else {
        _0x4c4e33.x -= _0x517968 * 1.2;
        if (_0x10c837) {
          _0x4c4e33.x = Math.max(_0x4c4e33.x, _0x17afde() + 1);
        }
      }
      const _0x26b42e = _0x4c4e33.pincer ? _0x59e68f.evolution.flankRecoverRate : _0x10c837 ? _0x5c4053.gateRecoverRate : 5;
      _0x4c4e33.y = _0x56181c(_0x4c4e33.y, _0x4c4e33.baseY, _0x26b42e * _0x517968);
      if (Math.abs(_0x4c4e33.y - _0x4c4e33.baseY) < 0.05) {
        _0x4c4e33.state = "cruise";
        _0x4c4e33.t = 0;
      }
    }
    if (_0x4c4e33.x < _0x1fe392 || _0x4c4e33.y < _0x59e68f.edges.killY) {
      removeHostile(_0x471f32);
    } else {
      if (!_0x2806ad && _0x67be56 >= _0x4c4e33.enterUntil && _0x479205(_0x4c4e33.x, _0x4c4e33.y, _0x4c4e33.hitR)) {
        _0xc3f0de(1, _0x4c4e33.x);
      }
      _0x2fefd3.hostiles.sync(_0x4c4e33);
    }
  }
}
export function clearHostiles() {
  for (const _0x238530 of hostiles) {
    _0x2fefd3.hostiles.removed(_0x238530, false);
  }
  hostiles.length = 0;
  te = -Infinity;
  ie = 0;
  ae = -Infinity;
  Q = 0;
  ee = 0;
}
export function resetKills() {
  kills = 0;
}
export function resetHostileRng() {
  Z = _0x3f484b(5150);
}
export function hostileEvolutionSnapshot() {
  const _0x566d62 = hostiles.filter(_0x1ab655 => _0x1ab655.aegis || _0x1ab655.pincer || _0x1ab655.wardedBy).map(_0x3dc0a1 => ({
    id: _0x3dc0a1.id,
    kind: _0x3dc0a1.kind,
    face: _0x3dc0a1.evolutionFace,
    hp: _0x3dc0a1.hp,
    aegis: _0x3dc0a1.aegis,
    online: _0x3dc0a1.aegisActive,
    pincer: _0x3dc0a1.pincer,
    side: _0x3dc0a1.formationSide,
    band: _0x3dc0a1.formationBand,
    ready: _0x3dc0a1.formationReady,
    wardedBy: _0x3dc0a1.wardedBy,
    blockedHits: _0x3dc0a1.blockedHits,
    x: Number(_0x3dc0a1.x.toFixed(2)),
    y: Number(_0x3dc0a1.y.toFixed(2)),
    state: _0x3dc0a1.state
  }));
  return {
    firstFace: _0x59e68f.evolution.firstFace,
    anchors: _0x566d62.filter(_0xeba307 => _0xeba307.aegis).length,
    online: _0x566d62.filter(_0xaf8ec7 => _0xaf8ec7.aegis && _0xaf8ec7.online).length,
    pincers: _0x566d62.filter(_0x1cb6a4 => _0x1cb6a4.pincer).length,
    linked: _0x566d62.filter(_0x1efebf => _0x1efebf.wardedBy).length,
    blockedHits: _0x566d62.reduce((_0xaa9315, _0x5deb4e) => _0xaa9315 + _0x5deb4e.blockedHits, 0),
    rows: _0x566d62
  };
}
export function hostileEcologySnapshot() {
  const _0x42987f = hostiles.filter(_0x1893b4 => _0x1893b4.ecologyId).map(_0x1b3cde => ({
    id: _0x1b3cde.id,
    ecologyId: _0x1b3cde.ecologyId,
    family: _0x1b3cde.ecologyFamily,
    kind: _0x1b3cde.kind,
    face: _0x1b3cde.evolutionFace,
    encounterKey: _0x1b3cde.encounterKey,
    beat: _0x1b3cde.ecologyBeat,
    beatSlot: _0x1b3cde.ecologyBeatSlot,
    stageRole: _0x1b3cde.ecologyStageRole,
    mode: _0x1b3cde.ecologyMode,
    stageResolved: _0x1b3cde.ecologyStageResolved,
    placementFallback: _0x1b3cde.ecologyPlacementFallback,
    baseMechanics: [..._0x1b3cde.ecologyMechanics],
    mechanics: [..._0x1b3cde.effectiveMechanics],
    tactics: [..._0x1b3cde.tactics],
    state: _0x1b3cde.state,
    tacticState: _0x1b3cde.tacticState,
    tacticPhase: _0x1b3cde.tacticPhase,
    tacticProgress: Number(_0x1b3cde.tacticProgress.toFixed(3)),
    hazards: _0x1b3cde.tacticHazards ? _0x1b3cde.tacticHazards.filter(_0x101a43 => _0x101a43.active).map(_0x3c30f6 => ({
      kind: _0x3c30f6.kind,
      x: Number(_0x3c30f6.x.toFixed(2)),
      y: Number(_0x3c30f6.y.toFixed(2)),
      radius: _0x3c30f6.radius
    })) : [],
    hp: _0x1b3cde.hp,
    gating: _0x1b3cde.gating,
    x: Number(_0x1b3cde.x.toFixed(2)),
    y: Number(_0x1b3cde.y.toFixed(2))
  }));
  return {
    bodiesAdded: 0,
    maxHazardsPerBody: _0x59e68f.enemyEcology.maxHazardsPerBody,
    bodies: _0x42987f.length,
    hazards: _0x42987f.reduce((_0x1e2d6c, _0x16f2d3) => _0x1e2d6c + _0x16f2d3.hazards.length, 0),
    rows: _0x42987f
  };
}
export function hostileGenomeSnapshot() {
  const _0x3fc4fa = hostiles.filter(_0x230e0d => _0x230e0d.genome?.mutated).map(_0x5c106f => ({
    id: _0x5c106f.id,
    kind: _0x5c106f.kind,
    identity: _0x5c106f.genomeId,
    label: _0x5c106f.genomeLabel,
    response: _0x5c106f.genome.response,
    budget: _0x5c106f.genome.budget,
    expressedBudget: _0x5c106f.genome.expressedBudget,
    strain: _0x5c106f.genome.strain.id,
    wardPolicy: _0x5c106f.wardPolicy,
    salvoPattern: _0x5c106f.salvoPattern,
    genes: [..._0x5c106f.genome.genes],
    state: _0x5c106f.state,
    hp: _0x5c106f.hp,
    x: Number(_0x5c106f.x.toFixed(2)),
    y: Number(_0x5c106f.y.toFixed(2)),
    bulwarkOpen: _0x5c106f.bulwark && _0x67be56 < _0x5c106f.bulwarkOpenUntil,
    twinPassesLeft: _0x5c106f.twinPassesLeft,
    salvoShotsRemaining: _0x5c106f.salvoShotsRemaining,
    relayCycles: _0x5c106f.relayCycles,
    backlashArmed: !!_0x5c106f.backlashUntil,
    wardedBy: _0x5c106f.wardedBy,
    blockedHits: _0x5c106f.blockedHits
  }));
  return {
    seed: _0x59e68f.genome.seed,
    mutated: _0x3fc4fa.length,
    byResponse: Object.fromEntries([...new Set(_0x3fc4fa.map(_0x48699b => _0x48699b.response))].map(_0xa3ed6a => [_0xa3ed6a, _0x3fc4fa.filter(_0x146695 => _0x146695.response === _0xa3ed6a).length])),
    rows: _0x3fc4fa
  };
}