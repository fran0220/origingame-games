import { CONFIG as _0x4cabf1 } from "../config.js";
import { ACTIVE_SLICE as _0x31a5e3, HOOK_ENABLED as _0x58e7c6, HOOK_INPUT as _0x393cb1 } from "../mode.js";
import { hookAcquire as _0x59e811, hookHoldPoint as _0x28ec1e, hookWhipDir as _0x35618c, hookWhipVelocity as _0xcff07, hookZipMarch as _0x3c0a56 } from "../pure/hook.js";
import { view as _0x5a84fb } from "./bridge.js";
import { gameMs as _0xdce600 } from "./time.js";
import { sLeftEdge as _0x970e10 } from "./edges.js";
import { keys as _0x11c50d, hookBufferedUntil as _0x5ba4a1, jumpBufferedUntil as _0x10ab55, clearHookBuffer as _0xd8f90, clearJumpBuffer as _0x256444 } from "./input.js";
import { isSolid as _0x463aca } from "./level.js";
import { scoreContact as _0x23e134, scoreLaunch as _0x1aaccd } from "./score.js";
import { flowLaunch as _0x1d0469 } from "./flow.js";
const v = _0x58e7c6 && _0x31a5e3 ? _0x31a5e3.hook : null;
const w = _0x31a5e3 && _0x31a5e3.hookAnchors ? _0x31a5e3.hookAnchors : [];
const M = _0x31a5e3 ? _0x31a5e3.movement.traversalLaunchControlMs : 100;
const U = _0x4cabf1.player.traversalEdgeGuard;
const j = {
  phase: "idle",
  anchor: null,
  targetX: 0,
  targetY: 0,
  entryVx: 0,
  dir: 1,
  startedAt: 0,
  hangUntil: 0,
  cooldownUntil: 0,
  lockedId: null,
  lockedUntil: 0,
  acquirable: null,
  grabs: 0,
  whips: 0,
  blocked: 0,
  releases: 0,
  autoGrabs: 0
};
export function hookEnabled() {
  return !!v;
}
export function hookAnchors() {
  return w;
}
export function hookSnapshot() {
  return {
    enabled: !!v,
    input: _0x393cb1,
    phase: j.phase,
    anchorId: j.anchor ? j.anchor.id : null,
    acquirable: j.acquirable,
    grabs: j.grabs,
    whips: j.whips,
    blocked: j.blocked,
    releases: j.releases,
    autoGrabs: j.autoGrabs,
    cooldownMs: Math.max(0, Math.round(j.cooldownUntil - _0xdce600))
  };
}
function A(_0x25e03e, _0x27ea03, _0x36f7ff) {
  const _0x4f7bd6 = Math.max(v.launchX, Math.abs(j.entryVx || 0));
  const _0x1324ed = _0x1d0469(_0x25e03e, "hook", _0x27ea03.chainMult(), _0x4f7bd6);
  const _0x13bcb1 = _0xcff07(v, j.dir, j.entryVx, _0x1324ed);
  _0x25e03e.vx = _0x13bcb1.vx;
  _0x25e03e.vy = _0x13bcb1.vy;
  _0x25e03e.grounded = false;
  _0x25e03e.onOneWay = null;
  _0x25e03e.coyoteUntil = 0;
  _0x25e03e.jumpCutDone = true;
  _0x25e03e.traversalControlUntil = _0xdce600 + M;
  if (v.refundAirJump) {
    _0x25e03e.airJumpsLeft = _0x4cabf1.player.airJumps;
  }
  j.whips++;
  if (_0x36f7ff === "blocked") {
    j.blocked++;
  }
  V();
  _0x1aaccd("hook", _0x25e03e.x, _0x25e03e.y);
}
function V() {
  if (j.anchor) {
    j.lockedId = j.anchor.id;
    j.lockedUntil = _0xdce600 + v.sameAnchorLockMs;
  }
  j.phase = "idle";
  j.anchor = null;
  j.cooldownUntil = _0xdce600 + v.cooldownMs;
  _0xd8f90();
  _0x256444();
}
export function hookUpdate(_0x54204b, _0x37667b, _0x28107a) {
  if (!v) {
    return false;
  }
  const _0x2adcb5 = j.phase === "idle";
  const _0x356a6b = _0x2adcb5 && _0xdce600 >= j.cooldownUntil ? _0x59e811(w, function (_0x127920) {
    return {
      x: _0x127920.x,
      y: _0x127920.y,
      facing: _0x127920.facing,
      now: _0xdce600,
      lockedId: j.lockedId,
      lockedUntil: j.lockedUntil
    };
  }(_0x54204b), v, _0x463aca) : null;
  j.acquirable = _0x356a6b ? _0x356a6b.anchor.id : null;
  if (_0x2adcb5) {
    const _0x171a05 = _0x5ba4a1 > _0xdce600 || _0x11c50d.hook;
    const _0x3563be = _0x393cb1 === "auto" && !_0x54204b.grounded;
    if (!_0x356a6b || !_0x171a05 && !_0x3563be) {
      if (v && _0x171a05 && !_0x356a6b) {
        _0xd8f90();
      }
      _0x5a84fb.hook.sync();
      return false;
    }
    if (!_0x171a05) {
      j.autoGrabs++;
    }
    (function (_0x4ca32f, _0x5e3775, _0x5f322f) {
      const _0x3109bd = _0x28ec1e(_0x5e3775, v);
      j.phase = "zip";
      j.anchor = _0x5e3775;
      j.targetX = _0x3109bd.x;
      j.targetY = _0x3109bd.y;
      j.entryVx = _0x4ca32f.vx;
      j.dir = _0x35618c(_0x5e3775, _0x4ca32f.x, _0x4ca32f.facing);
      j.startedAt = _0xdce600;
      j.grabs++;
      _0x5f322f.clearTraversal(_0xdce600);
      _0x4ca32f.vx = 0;
      _0x4ca32f.vy = 0;
      _0x4ca32f.grounded = false;
      _0x4ca32f.onOneWay = null;
      _0x4ca32f.coyoteUntil = 0;
      _0x4ca32f.jumpCutDone = true;
      _0xd8f90();
      _0x23e134(_0x4ca32f.y, "hook");
    })(_0x54204b, _0x356a6b.anchor, _0x28107a);
  }
  if (_0x54204b.x - _0x54204b.hw < _0x970e10() + _0x4cabf1.edges.margin + U) {
    A(_0x54204b, _0x28107a, "edge");
    _0x5a84fb.hook.sync();
    return false;
  }
  if (_0x11c50d.down) {
    (function (_0x14c56c) {
      _0x14c56c.vx = j.dir * Math.min(Math.abs(j.entryVx), _0x4cabf1.player.runSpeed) * 0.5;
      _0x14c56c.vy = v.releaseVy;
      _0x14c56c.grounded = false;
      _0x14c56c.onOneWay = null;
      _0x14c56c.jumpCutDone = true;
      j.releases++;
      V();
    })(_0x54204b);
    _0x5a84fb.hook.sync();
    return false;
  }
  const _0x3742d7 = _0x10ab55 > _0xdce600 || _0x11c50d.jump;
  if (j.phase === "zip") {
    if (_0x3742d7 || _0xdce600 - j.startedAt >= v.zipMaxMs) {
      A(_0x54204b, _0x28107a, _0x3742d7 ? "jump" : "timeout");
      _0x5a84fb.hook.sync();
      return false;
    }
    const _0x4fb855 = _0x3c0a56({
      x: _0x54204b.x,
      y: _0x54204b.y
    }, {
      x: j.targetX,
      y: j.targetY
    }, v.zipSpeed, _0x37667b, v.zipSubstepTiles, (_0x239b89, _0x548290) => function (_0x1ff4e9, _0x4d243b, _0x485005) {
      const _0x586b98 = Math.floor(_0x4d243b - _0x1ff4e9.hw + 0.02);
      const _0x35fb61 = Math.floor(_0x4d243b + _0x1ff4e9.hw - 0.02);
      const _0x13d65d = Math.floor(_0x485005 + 0.02);
      const _0x1e435c = Math.floor(_0x485005 + _0x1ff4e9.h - 0.02);
      for (let _0x3dff9c = _0x586b98; _0x3dff9c <= _0x35fb61; _0x3dff9c++) {
        for (let _0x35ecca = _0x13d65d; _0x35ecca <= _0x1e435c; _0x35ecca++) {
          if (_0x463aca(_0x3dff9c, _0x35ecca)) {
            return false;
          }
        }
      }
      return true;
    }(_0x54204b, _0x239b89, _0x548290));
    _0x54204b.x = _0x4fb855.x;
    _0x54204b.y = _0x4fb855.y;
    _0x54204b.vx = 0;
    _0x54204b.vy = 0;
    _0x54204b.grounded = false;
    _0x54204b.onOneWay = null;
    if (_0x4fb855.blocked) {
      A(_0x54204b, _0x28107a, "blocked");
      _0x5a84fb.hook.sync();
      return false;
    } else {
      if (_0x4fb855.arrived || Math.hypot(j.targetX - _0x54204b.x, j.targetY - _0x54204b.y) <= v.arriveRadius) {
        j.phase = "hang";
        j.hangUntil = _0xdce600 + v.hangMs;
      }
      _0x5a84fb.hook.sync();
      return true;
    }
  }
  _0x54204b.x = j.targetX;
  _0x54204b.y = j.targetY;
  _0x54204b.vx = 0;
  _0x54204b.vy = 0;
  _0x54204b.grounded = false;
  _0x54204b.onOneWay = null;
  if (_0x3742d7 || _0xdce600 >= j.hangUntil) {
    A(_0x54204b, _0x28107a, _0x3742d7 ? "jump" : "hang-expiry");
    _0x5a84fb.hook.sync();
    return false;
  } else {
    _0x5a84fb.hook.sync();
    return true;
  }
}
export function hookCancel() {
  if (v && j.phase !== "idle") {
    j.phase = "idle";
    j.anchor = null;
    j.cooldownUntil = _0xdce600 + v.cooldownMs;
    _0xd8f90();
  }
}
export function resetHook() {
  j.phase = "idle";
  j.anchor = null;
  j.targetX = 0;
  j.targetY = 0;
  j.entryVx = 0;
  j.dir = 1;
  j.startedAt = 0;
  j.hangUntil = 0;
  j.cooldownUntil = 0;
  j.lockedId = null;
  j.lockedUntil = 0;
  j.acquirable = null;
  j.grabs = 0;
  j.whips = 0;
  j.blocked = 0;
  j.releases = 0;
  j.autoGrabs = 0;
}
export function hookTether(_0x2eae19) {
  if (v && j.phase !== "idle" && j.anchor) {
    return {
      x0: _0x2eae19.x,
      y0: _0x2eae19.y + v.handHeight,
      x1: j.anchor.x,
      y1: j.anchor.y,
      phase: j.phase
    };
  } else {
    return null;
  }
}