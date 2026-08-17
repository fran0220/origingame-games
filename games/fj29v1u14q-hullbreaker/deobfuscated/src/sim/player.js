import { CONFIG as _0x267d5e } from "../config.js";
import { traversalLedgeProbe as _0x32029c, traversalLedgeDecision as _0x23b669, traversalWallDecision as _0x2863bc, traversalSolidAllowsGrab as _0xac2988, traversalChainMult as _0x3cb026, traversalFallbackTarget as _0x141862 } from "../pure/traversal.js";
import { ladderCandidate as _0x56a821, ladderStep as _0x6e32c4 } from "../pure/ladder.js";
import { crouchStance as _0x52df75 } from "../pure/stance.js";
import { ACTIVE_FIXTURE as _0x5347e4, ACTIVE_SLICE as _0x300241, AUTOBOUNCE_ENABLED as _0xbb5916, CROUCH_ENABLED as _0x3f6f32, FLOW_ENABLED as _0x5c0826, HOOK_ENABLED as _0x4ab850, IS_TRAVERSAL_SLICE as _0x52aaa8, RUN_FALLBACK_ENABLED as _0x583d30, SLICE_FALLBACK_ENABLED as _0x290aee } from "../mode.js";
import { RUN_FALLBACK as _0x3bbe41 } from "../pure/score.js";
import { view as _0x10adc5, host as _0x4bd863 } from "./bridge.js";
import { gameMs as _0x505d1f, sliceStats as _0x21b379, approach as _0x42b449 } from "./time.js";
import { sLeftEdge as _0x1ed03d, sRightEdge as _0x3216f8 } from "./edges.js";
import { keys as _0x46ac0f, jumpBufferedUntil as _0x5c6ff2, swapBufferedUntil as _0x52ec5c, bufferJumpUntil as _0x33830b, clearJumpBuffer as _0x5125e2, clearSwapBuffer as _0x8a6bc2, releaseAllKeys as _0x3635db } from "./input.js";
import { LEVEL_LEN as _0x37c412, groundH as _0x4bde8c, groundTopAt as _0x5a478d, ladders as _0x5a16b0, platforms as _0xb515c4, isSolid as _0x537d78, activeScrollSpeed as _0x3410b9 } from "./level.js";
import { state as _0x18813a, setState as _0xb1e324 } from "./state.js";
import { carriedGun as _0x30bcda, currentGunDef as _0x247b1a, currentWeapon as _0xd4627b, dropCarriedGun as _0x321134, fireWeapon as _0x315018, setWeapon as _0x3bdd62, swapWeapon as _0x1f1dd9, weaponHeldSince as _0x27a608 } from "./weapons.js";
import { mods as _0x20b2be, clearMods as _0x5dfe0e } from "./mods.js";
import { CAP as _0x4b04d4, spawnCapsule as _0x5e59d2 } from "./capsules.js";
import { scoreContact as _0x18aeb2, scoreFireMult as _0x32777e, scoreLaunch as _0xf54a94, scoreRunEnd as _0x18dcc2, scoreSetback as _0x44929e } from "./score.js";
import { advanceCornerApproach as _0x3903bb, cornerBusy as _0x21ad13, cornerPlayerRouteWindow as _0x44ddf2 } from "./wavegate.js";
import { transformBusy as _0x2ec8ea, transformFrontierX as _0x3f082f, transformSealX as _0x1e12bf } from "./transform.js";
import { hookCancel as _0x98b7eb, hookUpdate as _0x2f1244 } from "./hook.js";
import { flowBreak as _0x3a329c, flowLaunch as _0x1f6081, flowSpeedNow as _0x527eb7, flowStep as _0x5317b7 } from "./flow.js";
export const P = _0x300241 ? {
  ..._0x267d5e.player,
  ..._0x300241.movement
} : _0x267d5e.player;
const ge = _0x300241 ? _0x300241.chain : null;
const Pe = _0x300241 ? _0x300241.fallback : _0x3bbe41;
const Me = _0x300241 ? _0x300241.pursuit.edgePinDamageMs : 0;
export const player = {
  x: 6,
  y: 3,
  vx: 0,
  vy: 0,
  hw: P.width / 2,
  h: P.height,
  facing: 1,
  aim: {
    x: 1,
    y: 0,
    set(_0x1dff1e, _0x30dfce) {
      this.x = _0x1dff1e;
      this.y = _0x30dfce;
    }
  },
  grounded: false,
  onOneWay: null,
  airJumpsLeft: P.airJumps,
  coyoteUntil: 0,
  dropUntil: 0,
  jumpCutDone: true,
  traversalState: "free",
  traversalSide: 0,
  ladderId: null,
  traversalCellX: 0,
  traversalTopY: 0,
  traversalSnapX: 0,
  traversalSnapY: 0,
  traversalUntil: 0,
  traversalRecatchUntil: 0,
  traversalEntryVx: 0,
  traversalControlUntil: 0,
  traversalChain: 0,
  traversalChainUntil: 0,
  fallbackStreak: 0,
  fallbackEarnedTiles: 0,
  edgePinnedMs: 0,
  crouched: false,
  muzzleY: P.muzzleY,
  hp: P.maxHealth,
  lives: P.lives,
  iframesUntil: 0,
  hitstunUntil: 0,
  nextFireAt: 0
};
export function circleHitsPlayer(_0x5bb0f4, _0x182add, _0x3997f2) {
  return (_0x5bb0f4 - Math.max(player.x - player.hw, Math.min(_0x5bb0f4, player.x + player.hw))) ** 2 + (_0x182add - Math.max(player.y, Math.min(_0x182add, player.y + player.h))) ** 2 < _0x3997f2 * _0x3997f2;
}
function we() {
  const _0x63c81 = Math.floor(player.x - player.hw + 0.02);
  const _0x167bac = Math.floor(player.x + player.hw - 0.02);
  const _0x520de = Math.floor(player.y + 0.02);
  const _0x3737a6 = Math.floor(player.y + player.h - 0.02);
  for (let _0x48bb7d = _0x63c81; _0x48bb7d <= _0x167bac; _0x48bb7d++) {
    for (let _0xdb879b = _0x520de; _0xdb879b <= _0x3737a6; _0xdb879b++) {
      if (_0x537d78(_0x48bb7d, _0xdb879b)) {
        return true;
      }
    }
  }
  return false;
}
const Ue = {
  isSolid: _0x537d78,
  allowsGrab: (_0x1d3b9c, _0x1b89c5, _0x1613c2) => _0xac2988(_0x300241, _0x1d3b9c, _0x1b89c5, _0x1613c2),
  minCellX: 1,
  maxCellX: _0x37c412 - 1,
  minPlayerX: -Infinity
};
const Ce = new Map(_0x5a16b0.map(_0x264fa2 => [_0x264fa2.id, _0x264fa2]));
const je = _0x52aaa8 || _0x5347e4 === null;
const Se = _0x5347e4 === null && _0x5a16b0.length > 0;
const ke = P.traversalLaunchControlMs ?? 100;
export function clearPlayerTraversal(_0x1a20d0 = player.traversalRecatchUntil) {
  player.traversalState = "free";
  player.ladderId = null;
  player.traversalSide = 0;
  player.traversalCellX = 0;
  player.traversalTopY = 0;
  player.traversalSnapX = 0;
  player.traversalSnapY = 0;
  player.traversalUntil = 0;
  player.traversalEntryVx = 0;
  player.traversalRecatchUntil = _0x1a20d0;
}
function Te() {
  if (ge) {
    player.traversalChain = _0x505d1f < player.traversalChainUntil ? Math.min(player.traversalChain + 1, ge.max) : 0;
    player.traversalChainUntil = _0x505d1f + ge.windowMs;
    if (ge.refundAirJump && player.traversalChain > 0) {
      player.airJumpsLeft = P.airJumps;
    }
    return _0x3cb026(player.traversalChain, ge);
  } else {
    return 1;
  }
}
const Xe = {
  chainMult: Te,
  clearTraversal: clearPlayerTraversal
};
export function updatePlayer(_0x4ffa98) {
  (function () {
    const _0x3142e2 = (_0x46ac0f.right ? 1 : 0) - (_0x46ac0f.left ? 1 : 0);
    const _0x3083f3 = (_0x46ac0f.up ? 1 : 0) - (_0x46ac0f.down ? 1 : 0);
    if (_0x3142e2 !== 0) {
      player.facing = _0x3142e2;
    }
    if (_0x46ac0f.strafe && _0x3083f3 === 0) {
      return;
    }
    let _0xf86d19;
    let _0x229ac9;
    if (_0x3142e2 === 0 && _0x3083f3 === 0) {
      _0xf86d19 = player.facing;
      _0x229ac9 = 0;
    } else if (_0x3142e2 === 0 && _0x3083f3 > 0) {
      _0xf86d19 = 0;
      _0x229ac9 = 1;
    } else if (_0x3142e2 === 0 && _0x3083f3 < 0) {
      _0xf86d19 = player.grounded ? player.facing : 0;
      _0x229ac9 = -1;
    } else {
      _0xf86d19 = _0x3142e2;
      _0x229ac9 = _0x3083f3;
    }
    const _0x567add = Math.hypot(_0xf86d19, _0x229ac9);
    player.aim.set(_0xf86d19 / _0x567add, _0x229ac9 / _0x567add);
  })();
  if (_0x52ec5c > _0x505d1f) {
    _0x1f1dd9();
    _0x8a6bc2();
  }
  const _0xafa314 = player.x;
  const _0x5c83d9 = _0x52df75({
    enabled: _0x3f6f32,
    grounded: player.grounded,
    down: _0x46ac0f.down,
    jumpBuffered: _0x5c6ff2 > _0x505d1f,
    traversalState: player.traversalState,
    standHeight: P.height,
    standMuzzleY: P.muzzleY
  }, _0x267d5e.crouch);
  player.crouched = _0x5c83d9.crouched;
  player.muzzleY = _0x5c83d9.muzzleY;
  player.h = _0x5c83d9.height;
  if (!_0x5c83d9.crouched && we()) {
    player.h = _0x267d5e.crouch.height;
  }
  if (_0x5c83d9.crouched && _0x267d5e.crouch.aimLevel) {
    player.aim.set(player.facing, 0);
  }
  const _0x57dee5 = _0x5c83d9.planted ? 0 : (_0x46ac0f.right ? 1 : 0) - (_0x46ac0f.left ? 1 : 0);
  const _0x3ba3a4 = (_0x46ac0f.up ? 1 : 0) - (_0x46ac0f.down ? 1 : 0);
  let _0x8f1642 = false;
  let _0x1952fa = false;
  let _0x5b5054 = false;
  const _0x541192 = !!_0x4ab850 && _0x2f1244(player, _0x4ffa98, Xe);
  if (!je && player.traversalState !== "free") {
    clearPlayerTraversal(0);
  }
  if (!Se && player.traversalState === "ladder") {
    clearPlayerTraversal(0);
  }
  if (Se && player.traversalState === "free" && !_0x541192 && _0x3ba3a4 && _0x505d1f >= player.hitstunUntil && _0x505d1f >= player.traversalRecatchUntil) {
    const _0x41de74 = _0x56a821(_0x5a16b0, {
      x: player.x,
      y: player.y,
      h: player.h
    }, _0x3ba3a4);
    if (_0x41de74) {
      player.traversalState = "ladder";
      player.ladderId = _0x41de74.id;
      player.x = _0x41de74.x;
      player.crouched = false;
      player.h = P.height;
      player.muzzleY = P.muzzleY;
      player.grounded = false;
      player.onOneWay = null;
      player.coyoteUntil = 0;
      player.jumpCutDone = true;
    }
  }
  if (player.traversalState === "ladder") {
    const _0x3b7cdb = Ce.get(player.ladderId);
    const _0x1ea0f2 = _0x6e32c4({
      ladder: _0x3b7cdb,
      x: player.x,
      y: player.y,
      h: player.h,
      facing: player.facing,
      hInput: _0x57dee5,
      vInput: _0x3ba3a4,
      jumpBuffered: _0x5c6ff2 > _0x505d1f,
      dt: _0x4ffa98
    });
    if (_0x1ea0f2.kind === "climb") {
      player.x = _0x1ea0f2.x;
      player.y = _0x1ea0f2.y;
      player.vx = _0x1ea0f2.vx;
      player.vy = _0x1ea0f2.vy;
      player.grounded = false;
      player.onOneWay = null;
      player.jumpCutDone = true;
      _0x5b5054 = true;
    } else {
      clearPlayerTraversal(_0x505d1f + P.traversalRecatchMs);
      if (_0x1ea0f2.kind === "jump") {
        _0x5125e2();
      }
      if (Number.isFinite(_0x1ea0f2.y)) {
        player.y = _0x1ea0f2.y;
      }
      player.vx = _0x1ea0f2.vx || 0;
      player.vy = _0x1ea0f2.vy || 0;
      player.grounded = false;
      player.onOneWay = null;
      player.jumpCutDone = true;
      player.coyoteUntil = 0;
      player.traversalControlUntil = _0x505d1f + ke;
    }
  } else if (je && player.traversalState === "ledge") {
    const _0x21c26f = _0x23b669({
      side: player.traversalSide,
      down: _0x46ac0f.down,
      jumpBuffered: _0x5c6ff2 > _0x505d1f || _0x46ac0f.jump,
      entryVx: player.traversalEntryVx,
      now: _0x505d1f,
      until: player.traversalUntil
    }, P);
    if (_0x21c26f.kind === "launch") {
      const _0x489d2c = player.traversalSide;
      const _0x1ea0b8 = _0x489d2c > 0 ? player.traversalCellX : player.traversalCellX + 1;
      player.x = _0x1ea0b8 + _0x489d2c * (player.hw + P.ledgeMantleInset);
      player.y = player.traversalTopY + 0.001;
      clearPlayerTraversal(_0x21c26f.recatchUntil);
      _0x5125e2();
      player.vx = _0x21c26f.vx * _0x1f6081(player, "ledge", Te(), _0x21c26f.vx);
      player.vy = _0x21c26f.vy;
      player.grounded = false;
      player.onOneWay = null;
      player.coyoteUntil = 0;
      player.jumpCutDone = true;
      player.traversalControlUntil = _0x505d1f + ke;
      _0xf54a94("ledge", player.x, player.y);
    } else if (_0x21c26f.kind === "release") {
      const _0x281fcc = player.traversalSide;
      clearPlayerTraversal(_0x21c26f.recatchUntil);
      player.x -= _0x281fcc * P.ledgeReleaseNudge;
      player.vy = Math.min(player.vy, -0.01);
      player.jumpCutDone = true;
    } else {
      player.x = player.traversalSnapX;
      player.y = player.traversalSnapY;
      player.vx = 0;
      player.vy = 0;
      player.grounded = false;
      player.onOneWay = null;
      player.jumpCutDone = true;
      _0x8f1642 = true;
    }
  } else if (je && player.traversalState === "wall") {
    const _0x5da381 = _0x2863bc({
      side: player.traversalSide,
      cellX: player.traversalCellX,
      x: player.x,
      y: player.y,
      h: player.h,
      vy: player.vy,
      grounded: player.grounded,
      down: _0x46ac0f.down,
      hInput: _0x57dee5,
      jumpBuffered: _0x5c6ff2 > _0x505d1f || _0x46ac0f.jump,
      now: _0x505d1f,
      until: player.traversalUntil
    }, Ue, P);
    if (_0x5da381.kind === "jump") {
      clearPlayerTraversal(_0x5da381.recatchUntil);
      _0x5125e2();
      player.vx = _0x5da381.vx * _0x1f6081(player, "wall", Te(), _0x5da381.vx);
      player.vy = _0x5da381.vy;
      player.grounded = false;
      player.onOneWay = null;
      player.coyoteUntil = 0;
      player.jumpCutDone = true;
      player.traversalControlUntil = _0x505d1f + ke;
      _0xf54a94("wall", player.x, player.y);
    } else if (_0x5da381.kind === "release") {
      const _0x24537e = player.traversalSide;
      clearPlayerTraversal(_0x5da381.recatchUntil);
      player.x -= _0x24537e * P.ledgeReleaseNudge;
    } else {
      player.x = player.traversalSnapX;
      player.vx = _0x5da381.vx;
      player.vy = _0x5da381.vy;
      _0x1952fa = true;
    }
  }
  if (!_0x8f1642 && !_0x1952fa && !_0x5b5054 && !_0x541192 && _0x505d1f >= player.hitstunUntil && _0x505d1f >= player.traversalControlUntil) {
    const _0x1a0de5 = player.grounded ? P.accelGround : P.accelAir;
    player.vx = _0x42b449(player.vx, _0x57dee5 * P.runSpeed * _0x527eb7(), _0x1a0de5 * _0x4ffa98);
  }
  if (player.traversalState === "free" && !_0x541192 && _0x5c6ff2 > _0x505d1f) {
    if (player.grounded || player.coyoteUntil > _0x505d1f) {
      _0x5125e2();
      if (player.grounded && player.onOneWay && _0x46ac0f.down) {
        player.dropUntil = _0x505d1f + P.dropThroughMs;
        player.y -= 0.05;
        player.grounded = false;
      } else {
        player.vy = P.jumpVel;
        player.grounded = false;
        player.jumpCutDone = false;
        player.coyoteUntil = 0;
      }
    } else if (player.airJumpsLeft > 0) {
      _0x5125e2();
      player.airJumpsLeft--;
      if (_0x52aaa8) {
        _0x21b379.airJumps++;
      }
      player.vy = P.airJumpVel;
      player.jumpCutDone = false;
      _0xf54a94("air", player.x, player.y);
    }
  }
  if (!_0x46ac0f.jump && player.vy > 0 && !player.jumpCutDone) {
    player.vy *= P.jumpCutMult;
    player.jumpCutDone = true;
  }
  if (!_0x8f1642 && !_0x5b5054 && !_0x541192) {
    const _0x3df850 = P.gravity * (player.vy < 0 ? P.fallGravityMult : 1);
    player.vy = Math.max(P.terminalVel, player.vy + _0x3df850 * _0x4ffa98);
    if (_0x1952fa) {
      player.vy = Math.max(player.vy, -P.wallSlideSpeed);
    }
  }
  let _0x1925a0 = null;
  const _0x118f28 = player.vx;
  if (!_0x8f1642 && !_0x1952fa && !_0x5b5054 && !_0x541192) {
    player.x += player.vx * _0x4ffa98;
    if (player.vx > 0) {
      const _0x5bec69 = Math.floor(player.x + player.hw);
      for (let _0x26cceb = Math.floor(player.y + 0.02); _0x26cceb <= Math.floor(player.y + player.h - 0.02); _0x26cceb++) {
        if (_0x537d78(_0x5bec69, _0x26cceb)) {
          player.x = _0x5bec69 - player.hw - 0.001;
          player.vx = 0;
          _0x1925a0 = {
            side: 1,
            cellX: _0x5bec69,
            snapX: player.x
          };
          break;
        }
      }
    } else if (player.vx < 0) {
      const _0x2dc0b8 = Math.floor(player.x - player.hw);
      for (let _0xe333c3 = Math.floor(player.y + 0.02); _0xe333c3 <= Math.floor(player.y + player.h - 0.02); _0xe333c3++) {
        if (_0x537d78(_0x2dc0b8, _0xe333c3)) {
          player.x = _0x2dc0b8 + 1 + player.hw + 0.001;
          player.vx = 0;
          _0x1925a0 = {
            side: -1,
            cellX: _0x2dc0b8,
            snapX: player.x
          };
          break;
        }
      }
    }
  }
  const _0x498eda = player.y;
  const _0x3f4363 = player.grounded;
  if (!_0x8f1642 && !_0x5b5054 && !_0x541192) {
    player.y += player.vy * _0x4ffa98;
    player.grounded = false;
    player.onOneWay = null;
    if (player.vy <= 0) {
      const _0x210390 = Math.floor(player.x - player.hw + 0.02);
      const _0x33a91f = Math.floor(player.x + player.hw - 0.02);
      let _0x9da9ee = null;
      let _0x46a5db = null;
      for (let _0x5fb1c4 = Math.floor(_0x498eda); _0x5fb1c4 >= Math.floor(player.y); _0x5fb1c4--) {
        if (!(_0x5fb1c4 + 1 > _0x498eda + 0.001) && (_0x537d78(_0x210390, _0x5fb1c4) || _0x537d78(_0x33a91f, _0x5fb1c4))) {
          _0x9da9ee = _0x5fb1c4 + 1;
          break;
        }
      }
      if (player.dropUntil <= _0x505d1f) {
        for (const _0x16c07e of _0xb515c4) {
          if (player.x + player.hw > _0x16c07e.x0 && player.x - player.hw < _0x16c07e.x1 && _0x498eda >= _0x16c07e.y - 0.001 && player.y <= _0x16c07e.y && (_0x9da9ee === null || _0x16c07e.y > _0x9da9ee)) {
            _0x9da9ee = _0x16c07e.y;
            _0x46a5db = _0x16c07e;
          }
        }
      }
      if (_0x9da9ee !== null) {
        player.y = _0x9da9ee;
        player.vy = 0;
        player.grounded = true;
        player.onOneWay = _0x46a5db;
      }
    } else {
      const _0x2f40d9 = Math.floor(player.y + player.h);
      const _0xb93253 = Math.floor(player.x - player.hw + 0.02);
      const _0x4be520 = Math.floor(player.x + player.hw - 0.02);
      if (_0x537d78(_0xb93253, _0x2f40d9) || _0x537d78(_0x4be520, _0x2f40d9)) {
        player.y = _0x2f40d9 - player.h - 0.001;
        player.vy = 0;
      }
    }
  }
  if (player.grounded) {
    clearPlayerTraversal();
    player.traversalControlUntil = 0;
    player.coyoteUntil = _0x505d1f + P.coyoteMs;
    player.airJumpsLeft = P.airJumps;
  }
  if (!_0x3f4363 && player.grounded) {
    player.jumpCutDone = true;
    _0x18aeb2(player.y, "land");
    if (_0xbb5916 && _0x46ac0f.jump) {
      _0x33830b(_0x505d1f + P.jumpBufferMs);
    }
  }
  if (_0x5c0826) {
    _0x5317b7(_0x4ffa98, player.grounded);
  }
  if (je && player.traversalState === "free" && !_0x541192 && !_0x46ac0f.jump && !player.grounded && player.vy < 0) {
    Ue.minPlayerX = _0x1ed03d() + _0x267d5e.edges.margin + P.traversalEdgeGuard;
    const _0xdb2aab = _0x32029c({
      x: player.x,
      y: player.y,
      hw: player.hw,
      h: player.h,
      vx: _0x118f28,
      vy: player.vy,
      grounded: player.grounded,
      down: _0x46ac0f.down,
      hInput: _0x1925a0 ? _0x1925a0.side : _0x57dee5,
      now: _0x505d1f,
      recatchUntil: player.traversalRecatchUntil
    }, Ue, P);
    if (_0xdb2aab) {
      player.traversalState = "ledge";
      player.traversalSide = _0xdb2aab.side;
      player.traversalCellX = _0xdb2aab.cellX;
      player.traversalTopY = _0xdb2aab.topY;
      player.traversalSnapX = _0xdb2aab.snapX;
      player.traversalSnapY = _0xdb2aab.snapY;
      player.traversalUntil = _0x505d1f + P.ledgeHangMs;
      player.traversalEntryVx = _0x118f28;
      player.x = _0xdb2aab.snapX;
      player.y = _0xdb2aab.snapY;
      player.vx = 0;
      player.vy = 0;
      player.jumpCutDone = true;
      _0x18aeb2(player.y, "ledge");
    } else if (_0x1925a0 && _0x1925a0.cellX >= Ue.minCellX && _0x1925a0.cellX < Ue.maxCellX && Ue.allowsGrab(_0x1925a0.cellX, player.y, player.h) && _0x505d1f >= player.traversalRecatchUntil) {
      player.traversalState = "wall";
      player.traversalSide = _0x1925a0.side;
      player.traversalCellX = _0x1925a0.cellX;
      player.traversalSnapX = _0x1925a0.snapX;
      player.traversalUntil = _0x505d1f + P.wallSlideMs;
      player.vy = Math.max(player.vy, -P.wallSlideSpeed);
      player.jumpCutDone = true;
      _0x18aeb2(player.y, "wall");
    }
  }
  const _0x1cb699 = _0x1ed03d() + _0x267d5e.edges.margin;
  if (player.traversalState !== "free" && player.x - player.hw < _0x1cb699 + P.traversalEdgeGuard) {
    clearPlayerTraversal(_0x505d1f + P.traversalRecatchMs);
    player.vx = Math.max(player.vx, _0x3410b9());
  }
  if (player.x - player.hw < _0x1cb699) {
    player.x = _0x1cb699 + player.hw;
    if (!!we() && !_0x21ad13() && !_0x2ec8ea()) {
      if (_0x52aaa8) {
        player.iframesUntil = 0;
        player.edgePinnedMs = 0;
        damagePlayer(player.hp, player.x - 1);
      } else {
        player.x = Math.floor(player.x + player.hw) - player.hw - 0.001;
        player.iframesUntil = 0;
        damagePlayer(1, player.x - 1);
      }
    }
    if (Me > 0 && !_0x21ad13()) {
      player.edgePinnedMs += _0x4ffa98 * 1000;
      if (player.edgePinnedMs >= Me) {
        player.edgePinnedMs = 0;
        damagePlayer(1, player.x - 1);
      }
    }
  } else {
    player.edgePinnedMs = 0;
    if (player.x > _0xafa314) {
      player.fallbackEarnedTiles += player.x - _0xafa314;
    }
  }
  let _0x3c577a = _0x44ddf2(player.hw);
  let _0x5c2081 = _0x3216f8() - _0x267d5e.edges.margin;
  _0x5c2081 = Math.min(_0x5c2081, _0x3c577a.frontierRight);
  _0x5c2081 = Math.min(_0x5c2081, _0x3f082f());
  if (player.x + player.hw > _0x5c2081) {
    player.x = _0x5c2081 - player.hw;
  }
  if (_0x3903bb(player.x)) {
    _0x3c577a = _0x44ddf2(player.hw);
  }
  const _0x50a51a = Math.max(_0x1e12bf(), _0x3c577a.sealLeft);
  if (player.x - player.hw < _0x50a51a) {
    player.x = _0x50a51a + player.hw;
    player.vx = Math.max(player.vx, 0);
  }
  _0x21b379.minEdgeMargin = Math.min(_0x21b379.minEdgeMargin, player.x - player.hw - _0x1ed03d());
  if (player.y < _0x267d5e.edges.killY) {
    loseLife("fall");
  } else {
    if (_0x46ac0f.fire && _0x505d1f >= player.nextFireAt) {
      const _0x2844eb = _0x247b1a();
      const _0xae4434 = _0x505d1f < _0x20b2be.rageUntil ? _0x267d5e.mods.rageFireMult : 1;
      player.nextFireAt = _0x505d1f + _0x2844eb.fireRateMs * _0xae4434 * _0x32777e();
      const _0x578d9e = player.aim;
      _0x315018(_0xd4627b, player.x + _0x578d9e.x * P.barrelTiles, player.y + player.muzzleY + _0x578d9e.y * P.barrelTiles, _0x578d9e.x, _0x578d9e.y, false);
    }
    _0x10adc5.player.sync();
  }
}
export function damagePlayer(_0x3186df, _0x199ae0) {
  if (_0x505d1f < player.iframesUntil) {
    return;
  }
  clearPlayerTraversal(_0x505d1f + P.traversalRecatchMs);
  player.traversalControlUntil = 0;
  _0x5125e2();
  if (_0x4ab850) {
    _0x98b7eb();
  }
  if (_0x5c0826) {
    _0x3a329c();
  }
  player.hp -= _0x3186df;
  player.iframesUntil = _0x505d1f + P.iframesMs;
  player.hitstunUntil = _0x505d1f + P.hitstunMs;
  const _0x429119 = Math.sign(player.x - _0x199ae0 || 1);
  player.vx = _0x429119 * P.knockbackX;
  player.vy = P.knockbackY;
  player.grounded = false;
  if (_0x30bcda && player.hp > 0 && _0x505d1f - _0x27a608 >= _0x4b04d4.pickupGraceMs) {
    const _0x562402 = _0x321134();
    _0x5e59d2("letter", _0x562402.letter, player.x, player.y + 1.2, "pop", -_0x429119 * _0x4b04d4.popVx, _0x562402);
  }
  if (player.hp <= 0) {
    loseLife("damage");
  }
}
let be = 0;
export function cancelSliceRetry() {
  if (be) {
    clearTimeout(be);
    be = 0;
  }
}
export function resetPlayerForRun(_0x42f6bf = 6, _0x96076f = 3) {
  player.x = _0x42f6bf;
  player.y = _0x96076f;
  player.vx = 0;
  player.vy = 0;
  player.hp = P.maxHealth;
  player.lives = P.lives;
  player.facing = 1;
  player.aim.set(1, 0);
  player.iframesUntil = 0;
  player.hitstunUntil = 0;
  player.coyoteUntil = 0;
  player.dropUntil = 0;
  player.nextFireAt = 0;
  player.grounded = false;
  player.onOneWay = null;
  player.jumpCutDone = true;
  player.airJumpsLeft = P.airJumps;
  player.traversalChain = 0;
  player.traversalChainUntil = 0;
  player.fallbackStreak = 0;
  player.fallbackEarnedTiles = 0;
  player.edgePinnedMs = 0;
  clearPlayerTraversal(0);
  player.traversalControlUntil = 0;
  _0x5125e2();
}
function Ye(_0x40e3b2) {
  const _0x4b8629 = Pe;
  if (player.fallbackEarnedTiles >= _0x4b8629.recoverTiles) {
    player.fallbackStreak = 0;
  }
  if (player.fallbackStreak >= _0x4b8629.maxConsecutive) {
    return false;
  }
  const _0x742b75 = player.y;
  const _0x438a5a = player.x;
  const _0xccab86 = function (_0x4b99fb) {
    const _0x18271c = [];
    const _0x27a809 = _0x5a478d(_0x4b99fb);
    if (_0x27a809 > -100) {
      _0x18271c.push(_0x27a809);
    }
    for (const _0x5d6225 of _0xb515c4) {
      if (_0x4b99fb + player.hw > _0x5d6225.x0 && _0x4b99fb - player.hw < _0x5d6225.x1) {
        _0x18271c.push(_0x5d6225.y);
      }
    }
    return _0x18271c;
  }(player.x);
  let _0x385168 = _0x141862(_0xccab86, _0x742b75, _0x4b8629);
  if (_0x385168 === null && _0xccab86.length) {
    const _0x66c427 = Math.min.apply(null, _0xccab86);
    if (_0x742b75 < _0x66c427) {
      _0x385168 = _0x66c427;
    }
  }
  if (_0x385168 === null && !_0xccab86.length) {
    let _0x4cb216 = Math.max(0, Math.floor(player.x));
    while (_0x4cb216 < _0x37c412 - 2 && _0x5a478d(_0x4cb216) < -100) {
      _0x4cb216++;
    }
    player.x = _0x4cb216 + 0.5;
    _0x385168 = _0x5a478d(_0x4cb216) > -100 ? _0x5a478d(_0x4cb216) : 3;
  }
  if (_0x385168 !== null) {
    player.y = _0x385168 + _0x4b8629.dropAboveTiles;
    player.vy = _0x4b8629.tossVy;
  } else {
    const _0x432415 = _0x1ed03d() + _0x267d5e.edges.margin + player.hw;
    player.x = Math.max(_0x432415, player.x - _0x4b8629.groundKnockTiles);
    player.vy = Math.max(player.vy, 0);
  }
  if (function (_0x55e937) {
    for (let _0x3c36a4 = 0; _0x3c36a4 < 6; _0x3c36a4++) {
      if (!we()) {
        return true;
      }
      const _0x3828f9 = Math.floor(player.x - player.hw + 0.02);
      const _0x4a2cc5 = Math.floor(player.x + player.hw - 0.02);
      let _0x5aa30a = -Infinity;
      for (let _0x48dd6a = _0x3828f9; _0x48dd6a <= _0x4a2cc5; _0x48dd6a++) {
        for (let _0x4442a8 = Math.floor(player.y + 0.02); _0x4442a8 <= Math.floor(player.y + player.h - 0.02); _0x4442a8++) {
          if (_0x537d78(_0x48dd6a, _0x4442a8)) {
            _0x5aa30a = Math.max(_0x5aa30a, _0x4442a8 + 1);
          }
        }
      }
      if (_0x5aa30a === -Infinity) {
        return true;
      }
      if (_0x5aa30a + 0.001 > _0x55e937) {
        return false;
      }
      player.y = _0x5aa30a + 0.001;
    }
    return !we();
  }(_0x742b75)) {
    player.vx = Math.max(player.vx, _0x4b8629.tossVx);
    player.grounded = false;
    player.onOneWay = null;
    player.jumpCutDone = true;
    player.airJumpsLeft = P.airJumps;
    player.hp = P.maxHealth;
    player.iframesUntil = _0x505d1f + _0x4b8629.iframesMs;
    player.hitstunUntil = 0;
    player.dropUntil = 0;
    player.coyoteUntil = 0;
    player.traversalChain = 0;
    player.traversalChainUntil = 0;
    player.fallbackStreak++;
    player.fallbackEarnedTiles = 0;
    _0x21b379.setbacks++;
    _0x21b379.lastSetbackAt = _0x505d1f;
    _0x21b379.failures++;
    if (_0x40e3b2 === "fall") {
      _0x21b379.falls++;
    }
    _0x44929e(_0x385168 !== null ? "fallback" : "ground", _0x742b75, player.y);
    return true;
  } else {
    player.x = _0x438a5a;
    player.y = _0x742b75;
    return false;
  }
}
export function loseLife(_0x4d5a1e = "damage") {
  clearPlayerTraversal(0);
  player.traversalControlUntil = 0;
  _0x5125e2();
  if (_0x4ab850) {
    _0x98b7eb();
  }
  if (_0x5c0826) {
    _0x3a329c();
  }
  if (_0x5347e4) {
    if (!_0x290aee || !Ye(_0x4d5a1e)) {
      (function (_0x299014) {
        if (_0x5347e4 && _0x18813a !== "SLICE_RETRY") {
          _0x21b379.failures++;
          _0x18dcc2(_0x299014 === "fall" ? "fell" : "lost");
          if (_0x299014 === "fall") {
            _0x21b379.falls++;
          }
          clearPlayerTraversal(0);
          player.traversalControlUntil = 0;
          _0x5125e2();
          _0x3635db();
          _0xb1e324("SLICE_RETRY");
          be = setTimeout(() => {
            be = 0;
            if (_0x18813a === "SLICE_RETRY") {
              _0x4bd863.resetGame();
            }
          }, 650);
        }
      })(_0x4d5a1e);
    }
  } else if (!_0x583d30 || !Ye(_0x4d5a1e)) {
    player.lives--;
    _0x3bdd62("R");
    _0x5dfe0e();
    if (player.lives <= 0) {
      _0x18dcc2("game-over");
      _0xb1e324("GAME_OVER");
      return;
    }
    respawn();
  }
}
export function respawn() {
  let _0x125d0c = Math.max(2, Math.ceil(_0x1ed03d()) + 3);
  while (_0x125d0c < _0x37c412 - 2 && (_0x4bde8c[_0x125d0c] < -100 || _0x4bde8c[_0x125d0c + 1] < -100)) {
    _0x125d0c++;
  }
  player.x = _0x125d0c + 0.5;
  player.y = (_0x4bde8c[_0x125d0c] > -100 ? _0x4bde8c[_0x125d0c] : 3) + 4;
  player.vx = 0;
  player.vy = 0;
  player.hp = P.maxHealth;
  player.iframesUntil = _0x505d1f + 2000;
  player.hitstunUntil = 0;
  player.dropUntil = 0;
  player.coyoteUntil = 0;
  player.grounded = false;
  player.onOneWay = null;
  player.jumpCutDone = true;
  player.airJumpsLeft = P.airJumps;
  clearPlayerTraversal(0);
  player.traversalControlUntil = 0;
  _0x5125e2();
}