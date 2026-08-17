import { CONFIG as _0x32845b } from "./config.js";
import { ACTIVE_FIXTURE as _0x4adb33, ACTIVE_SLICE as _0x57f87e, AUTOBOUNCE_ENABLED as _0x1dc466, FLOW_ENABLED as _0x11eb61, HOOK_ENABLED as _0x402f71, HOOK_INPUT as _0xe87a15, IS_G1 as _0xf849ef, IS_G2 as _0x2b54d9, IS_TRANSFORM_SLICE as _0x5ec22b, IS_TRAVERSAL_SLICE as _0x566389, MOMENTUM_ENABLED as _0xf18c0e, QUERY as _0x2a0ca0, SCORE_ENABLED as _0x3ada6a, SHELL_AUTOSTART as _0x18b792, SHELL_ENABLED as _0x4dedd2, SLICE_ENEMIES_ENABLED as _0x309da6, SLICE_ENEMY_PLAN as _0x580b9a, SLICE_FALLBACK_ENABLED as _0x223758, SLICE_PACE as _0xf74e52, START_DIRECTION_ID as _0x392bcd, VIEW_ID as _0x1df439 } from "./mode.js";
import { HALT_S as _0x11651c } from "./pure/path.js";
import { FRAME_INPUT_VERSION as _0x3d56de, GAMEPLAY_KEYMAP as _0x18daa0, createFrameInputTimeline as _0x45357e } from "./pure/frame-input.js";
import { RIG_SCREEN_FRACTION as _0x4f3cca, SHELL_ELEMENT_VARS as _0x4274e3, START_DIRECTION_IDS as _0x4ca318, shellKeyIntent as _0x34e99f } from "./pure/shell.js";
import { cornerEventTotalMs as _0x20dc6b } from "./pure/waves.js";
import { buildTransformPath as _0x1bb96b, transformAltAt as _0x1d0b08, transformEventTotalMs as _0x1bcc6d } from "./pure/transform.js";
import { traversalCameraDepth as _0x268adc } from "./pure/traversal.js";
import { momentumTier as _0x3bfefa } from "./pure/momentum.js";
import { installHost as _0x37a59c } from "./sim/bridge.js";
import { advanceGameMs as _0x3be13a, gameMs as _0x106d18, hitStopRemainingMs as _0x2b8740, scrollX as _0x2bc54b, sliceStats as _0x455e1f, stepHitStop as _0x251539 } from "./sim/time.js";
import { sLeftEdge as _0x334446, sRightEdge as _0x2f7389 } from "./sim/edges.js";
import { bufferHookUntil as _0x50dad1, bufferJumpUntil as _0x2e70d8, bufferSwapUntil as _0x5b3e84, keys as _0x241a19, releaseAllKeys as _0x1b10ec } from "./sim/input.js";
import { activeScrollEnd as _0x647370, activeScrollSpeed as _0x4e0fdb, END_SCROLL as _0x38644d, levelData as _0x33edf9, pockets as _0x529f3c } from "./sim/level.js";
import { setState as _0x375213, state as _0x19d2b2 } from "./sim/state.js";
import { P as _0x613a04, player as _0x6d9776, updatePlayer as _0xd6d392 } from "./sim/player.js";
import { currentGun as _0x15944e, currentGunDef as _0x54f624, currentGunLabel as _0x1e1d52, currentWeapon as _0x340311, shotsFired as _0x318f63, updateBullets as _0x22e874 } from "./sim/weapons.js";
import { hostiles as _0x507857, kills as _0x423c12, spawnHostile as _0x52fed6, updateHostiles as _0x1177b2 } from "./sim/hostiles.js";
import { capsules as _0x1476b9, spawnCapsule as _0x3f71eb, updateCapsules as _0x46d44b } from "./sim/capsules.js";
import { mods as _0x4c7bf6, updateMods as _0x3a1f1c } from "./sim/mods.js";
import { momentumDrive as _0x43fae3, momentumPeakDrive as _0x4b38cc, pacePeak as _0x4fda4c, paceSpeed as _0x334831 } from "./sim/pace.js";
import { hookSnapshot as _0x77950 } from "./sim/hook.js";
import { flowSnapshot as _0xe5a53d } from "./sim/flow.js";
import { resetScore as _0xbc4a13, scoreEvents as _0x34b3d5, scoreRunEnd as _0x26d88d, scoreRunStart as _0x5d0054, scoreSnapshot as _0xde1e6c, updateScore as _0x35cdb9 } from "./sim/score.js";
import { updateSpawner as _0x53c350 } from "./sim/spawner.js";
import { meridianDefenseSnapshot as _0x39eef8, updateMeridianDefense as _0x2016e9 } from "./sim/meridian-defense.js";
import { finaleActive as _0x456afe, finaleComplete as _0x38cfb7, finaleSnapshot as _0xa214a7, startFinale as _0x13baf1, updateFinale as _0x30fc38 } from "./sim/finale.js";
import { activeCorner as _0x433e3a } from "./sim/wavegate.js";
import { activeTransformEvent as _0x282949, committedBand as _0x4dcab1, transformAltitudeAt as _0x47ec41, transformDecisionTrace as _0x1dd02b, transformFrontierX as _0x2a2b94, transformSealX as _0x23e2f0 } from "./sim/transform.js";
import { updateScroll as _0x3a2a28 } from "./sim/scroll.js";
import { camera as _0x3ef469, renderer as _0x4c9b76, scene as _0x5cebb1 } from "./render/scene.js";
import "./render/critical-world-art.js";
import "./render/critical-rig-art.js";
import "./render/critical-gameplay-art.js";
import "./render/enemy-ecology-art.js";
import "./render/world-detail-art.js";
import "./render/crown-art.js";
import "./render/projectile-art.js";
import "./render/action-vfx-art.js";
import "./render/actor-motion-art.js";
import "./render/defense-vfx-art.js";
import { POST as _0x9ca8, postSnapshot as _0x126bfd, renderFrame as _0x527e6c, warmScenePrograms as _0x5cbdf0 } from "./render/post.js";
import { activeCameraDepth as _0x5e905d, calibrateEdges as _0x502699, handleResize as _0x116d4f, syncCamera as _0x2850fa } from "./render/camera.js";
import { mountHostileWarmResources as _0xc1b3d2, updateCorpses as _0x1a8a51 } from "./render/hostiles.js";
import "./render/backdrop.js";
import { updateBackdropFacetVisibility as _0x38f773 } from "./render/backdrop.js";
import { updateWorldDressingCull as _0x1fb2cc } from "./render/level.js";
import { updateSeamFoldCull as _0x27979f } from "./render/seams.js";
import { limbPieces as _0x674996, updateLimbFoldCull as _0x4ad975 } from "./render/limb.js";
import { updateCrownFacetCull as _0xaf70bc } from "./render/crown.js";
import { failsafeBeat as _0x3df868, failsafeBooted as _0x297098, failsafeHalted as _0x1ad899, failsafeSelfCheck as _0x431ef4, failsafeSnapshot as _0x41e592, installFailsafe as _0x33ccaa, reportContextLost as _0x40cbef, reportFault as _0xf862d5 } from "./ui/failsafe.js";
import { FAILSAFE as _0x1a38a3 } from "./pure/failsafe.js";
import { resetHudMessage as _0x3cbfd5, updateHUD as _0x19ff69 } from "./ui/hud.js";
import { shellApplyIntent as _0x47daa4, shellRunStarted as _0x8b9f2d, shellSnapshot as _0x5123da } from "./ui/shell.js";
import { installTouchControls as _0x228b9f } from "./ui/touch-controls.js";
import { audioSnapshot as _0x139f01 } from "./ui/audio.js";
import { juiceSnapshot as _0x80bc49, updateJuice as _0x374e0f } from "./render/juice.js";
import { actionVfxSnapshot as _0x49b76f, updateActionVfx as _0x1e40d0 } from "./render/action-vfx-runtime.js";
import { initializeViewRegistry as _0x45fadd, viewInitSnapshot as _0x3cb703 } from "./boot/view-init.js";
import { resetRunState as _0x405e5d, runResetSnapshot as _0x125c26 } from "./boot/run-reset.js";
import { advanceKonami as _0x441081 } from "./pure/konami.js";
import { setGildedRig as _0xf33321 } from "./render/gilded-aura.js";
import { announceGilded as _0x23fb20 } from "./ui/gilded.js";
import { adaptiveFidelitySnapshot as _0x5dbb5d, sampleAdaptiveFidelity as _0x41419d } from "./render/adaptive-fidelity.js";
_0x45fadd();
_0x37a59c({
  resetGame: () => Xt()
});
_0x33ccaa({
  restart: () => Xt()
});
addEventListener("resize", _0x116d4f);
_0x4c9b76.domElement.addEventListener("webglcontextlost", _0x588741 => {
  _0x588741.preventDefault();
  _0x40cbef();
});
const zt = _0x18daa0;
function Ct(_0x4e5752, _0x6dd240, _0x170ac8 = false) {
  const _0x52d33f = zt[_0x4e5752];
  return !!_0x52d33f && (_0x6dd240 === "keyup" ? (_0x241a19[_0x52d33f] = false, true) : _0x6dd240 === "keydown" && (_0x52d33f !== "jump" || _0x170ac8 || _0x2e70d8(_0x106d18 + _0x32845b.player.jumpBufferMs), _0x52d33f !== "swap" || _0x170ac8 || _0x5b3e84(_0x106d18 + 140), _0x52d33f === "hook" && !_0x170ac8 && _0x57f87e && _0x57f87e.hook && _0x50dad1(_0x106d18 + _0x57f87e.hook.bufferMs), _0x241a19[_0x52d33f] = true, true));
}
let Ht = 0;
let Vt = false;
addEventListener("keydown", _0x5ef9fb => {
  if (!_0x5ef9fb.shiftKey) {
    _0x241a19.strafe = false;
  }
  if (!_0x5ef9fb.repeat && !_0x5ef9fb.metaKey && !_0x5ef9fb.ctrlKey && !_0x5ef9fb.altKey) {
    const _0x149199 = _0x441081(Ht, _0x5ef9fb.code);
    Ht = _0x149199.progress;
    if (_0x149199.fired) {
      Vt = !Vt;
      _0xf33321(Vt);
      _0x23fb20(Vt);
    }
  }
  let _0x4f53fa = false;
  if (_0x4dedd2 && !_0x5ef9fb.metaKey && !_0x5ef9fb.ctrlKey && !_0x5ef9fb.altKey) {
    const _0x594c63 = _0x34e99f(_0x5ef9fb.code, _0x19d2b2);
    if (_0x594c63 === "start") {
      Jt();
      _0x4f53fa = true;
    } else {
      if (_0x594c63 === "restart") {
        _0x5ef9fb.preventDefault();
        if (!_0x5ef9fb.repeat) {
          Xt();
        }
        return;
      }
      if (_0x594c63 === "title") {
        _0x5ef9fb.preventDefault();
        if (!_0x5ef9fb.repeat) {
          Wt();
        }
        return;
      }
      if (_0x594c63) {
        _0x5ef9fb.preventDefault();
        if (!_0x5ef9fb.repeat) {
          _0x47daa4(_0x594c63);
        }
        return;
      }
    }
  }
  if (_0x5ef9fb.code === "KeyP" || _0x5ef9fb.code === "Escape") {
    if (!_0x5ef9fb.repeat) {
      $t();
    }
    _0x5ef9fb.preventDefault();
    return;
  } else if (_0x5ef9fb.code !== "KeyR" || _0x4f53fa || !_0x566389 && _0x19d2b2 !== "GAME_OVER" && _0x19d2b2 !== "VICTORY") {
    if (zt[_0x5ef9fb.code]) {
      _0x5ef9fb.preventDefault();
      Ct(_0x5ef9fb.code, "keydown", _0x5ef9fb.repeat);
    }
    return;
  } else {
    _0x5ef9fb.preventDefault();
    if (!_0x5ef9fb.repeat) {
      Xt();
    }
    return;
  }
});
addEventListener("keyup", _0x1fb2ec => {
  if (!_0x1fb2ec.shiftKey) {
    _0x241a19.strafe = false;
  }
  Ct(_0x1fb2ec.code, "keyup", _0x1fb2ec.repeat);
});
addEventListener("blur", _0x1b10ec);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    _0x1b10ec();
  }
});
addEventListener("pointerdown", () => {
  if (_0x4dedd2 && _0x19d2b2 === "MENU") {
    Jt();
  }
});
const qt = _0x228b9f({
  applyEdge: Ct,
  canControl: () => _0x19d2b2 === "PLAYING",
  startRun: () => {
    if (_0x4dedd2 && _0x19d2b2 === "MENU") {
      Jt();
    }
  },
  togglePause: $t
});
function $t() {
  if (_0x19d2b2 === "PLAYING") {
    _0x375213("PAUSED");
  } else if (_0x19d2b2 === "PAUSED") {
    _0x375213("PLAYING");
  }
}
function Jt() {
  if (_0x19d2b2 === "MENU") {
    _0x375213("PLAYING");
  } else {
    Xt();
  }
}
function Wt() {
  Xt();
  _0x375213("MENU");
}
function Xt() {
  _0x405e5d();
  qt.reset({
    release: false
  });
  if (lr) {
    lr.reassertHeld(_0x106d18);
  }
  if (_0x57f87e) {
    for (const _0x3c0e38 of _0x57f87e.rewards) {
      _0x3f71eb(_0x3c0e38.kind, _0x3c0e38.letter, _0x3c0e38.x, _0x3c0e38.y, _0x3c0e38.mode);
    }
    if (_0x309da6) {
      for (const _0x379a28 of _0x580b9a) {
        _0x52fed6(_0x379a28.x, _0x379a28.y, _0x379a28.delayMs, _0x379a28.kind, _0x379a28);
      }
    }
    _0x5d0054(_0x32845b.gen.seed, _0x57f87e.id, _0x57f87e.pace.id);
  } else {
    for (const _0x3c006e of _0x529f3c) {
      _0x3f71eb(_0x3c006e.reward.kind, _0x3c006e.reward.letter, _0x3c006e.reward.x, _0x3c006e.reward.y, _0x3c006e.reward.mode);
    }
    _0x5d0054(_0x32845b.gen.seed, "six-face", "normal");
  }
  _0x3cbfd5();
  _0x8b9f2d();
  _0x3a2a28(0);
  _0x2850fa();
  _0x38f773();
  _0x375213("PLAYING");
}
function Qt() {
  const _0xbf1b5d = _0x282949();
  const _0x4ffe5d = _0x1bcc6d(_0x32845b);
  const _0x438057 = _0xbf1b5d && _0xbf1b5d.state === "turning" ? _0x106d18 - _0xbf1b5d.tStart : 0;
  return {
    band: _0x4dcab1,
    altitude: _0x47ec41(_0x6d9776.x),
    event: _0xbf1b5d ? _0xbf1b5d.id : null,
    eventState: _0xbf1b5d ? _0xbf1b5d.state : "complete",
    tMs: _0x438057,
    progress: _0x4ffe5d > 0 ? Math.min(1, _0x438057 / _0x4ffe5d) : 0,
    frontierX: _0x2a2b94(),
    sealX: _0x23e2f0(),
    decisions: _0x1dd02b()
  };
}
function Zt() {
  const _0x57dccc = _0x433e3a();
  const _0x41545e = _0x20dc6b(_0x32845b);
  const _0x40028f = _0x57dccc && _0x57dccc.state === "turning" ? _0x106d18 - _0x57dccc.tStart : 0;
  return {
    k: _0x57dccc ? _0x57dccc.k : null,
    pivotS: _0x57dccc ? _0x57dccc.s : null,
    haltS: _0x57dccc ? _0x11651c[_0x57dccc.k - 1] : null,
    state: _0x57dccc ? _0x57dccc.state : "complete",
    tMs: _0x40028f,
    progress: _0x41545e > 0 ? Math.min(1, _0x40028f / _0x41545e) : 0
  };
}
function er() {
  return {
    gameMs: _0x106d18,
    state: _0x19d2b2,
    scrollX: _0x2bc54b,
    transform: _0x5ec22b ? Qt() : undefined,
    corner: _0x4adb33 ? undefined : Zt(),
    finale: _0x4adb33 ? undefined : _0xa214a7(),
    meridianDefense: _0x4adb33 ? undefined : _0x39eef8(),
    minimumScrollSpeed: _0x4adb33 ? _0x4adb33.run.minimumScrollSpeed : _0x32845b.scrollSpeed,
    player: {
      x: _0x6d9776.x,
      y: _0x6d9776.y,
      vx: _0x6d9776.vx,
      vy: _0x6d9776.vy,
      grounded: _0x6d9776.grounded,
      crouched: _0x6d9776.crouched,
      muzzleY: _0x6d9776.muzzleY,
      traversalState: _0x6d9776.traversalState,
      traversalControlUntil: _0x6d9776.traversalControlUntil,
      hp: _0x6d9776.hp,
      lives: _0x6d9776.lives
    },
    screenRight: _0x2f7389() - _0x32845b.edges.margin,
    edgeMargin: _0x6d9776.x - _0x6d9776.hw - _0x334446(),
    weapon: _0x340311,
    attempt: _0x455e1f.attempts,
    falls: _0x455e1f.falls,
    airJumps: _0x455e1f.airJumps,
    pace: _0x57f87e ? _0x57f87e.pace.id : null,
    pursuitSpeed: _0x4e0fdb(),
    pursuitPeak: _0x4fda4c(),
    momentum: _0xf18c0e ? {
      drive: _0x43fae3(),
      peakDrive: _0x4b38cc(),
      tier: _0x3bfefa(_0x43fae3(), _0x32845b.momentum)
    } : undefined,
    setbacks: _0x455e1f.setbacks,
    score: _0xde1e6c(),
    hostiles: _0x507857.map(_0x15d178 => ({
      id: _0x15d178.id,
      kind: _0x15d178.kind,
      state: _0x15d178.state,
      dir: _0x15d178.dir,
      x: _0x15d178.x,
      y: _0x15d178.y,
      hp: _0x15d178.hp,
      materialized: _0x106d18 >= _0x15d178.enterUntil,
      staggered: _0x106d18 < _0x15d178.staggerUntil
    })),
    hook: _0x402f71 ? _0x77950() : undefined,
    flow: _0x11eb61 ? _0xe5a53d() : undefined,
    shell: _0x4dedd2 ? _0x5123da() : undefined,
    juice: _0x80bc49(),
    actionVfx: _0x49b76f(),
    viewInit: _0x3cb703(),
    resetRegistry: _0x125c26(),
    adaptiveFidelity: _0x5dbb5d(),
    perf: or(),
    post: _0x126bfd()
  };
}
const tr = new Float64Array(180);
let rr = 0;
let sr = 0;
let ir = 0;
function or() {
  if (rr === 0) {
    return {
      frames: 0,
      fps: 0,
      avgMs: 0,
      worstMs: 0,
      over20ms: 0
    };
  }
  let _0x50220d = 0;
  let _0x5f15f7 = 0;
  let _0x3e6481 = 0;
  for (let _0x13d1ea = 0; _0x13d1ea < rr; _0x13d1ea++) {
    const _0x4a5c8d = tr[_0x13d1ea];
    _0x50220d += _0x4a5c8d;
    if (_0x4a5c8d > _0x5f15f7) {
      _0x5f15f7 = _0x4a5c8d;
    }
    if (_0x4a5c8d > 20) {
      _0x3e6481++;
    }
  }
  const _0x39ce05 = _0x50220d / rr;
  return {
    frames: rr,
    fps: +(1000 / _0x39ce05).toFixed(1),
    avgMs: +_0x39ce05.toFixed(2),
    worstMs: +_0x5f15f7.toFixed(2),
    over20ms: _0x3e6481
  };
}
const ar = (() => {
  const _0x5dd0a6 = parseFloat(_0x2a0ca0.get("fixeddt"));
  if (Number.isFinite(_0x5dd0a6) && _0x5dd0a6 > 0) {
    return Math.min(50, Math.max(1, _0x5dd0a6));
  } else {
    return 0;
  }
})();
const nr = _0x2a0ca0.has("testapi") ? globalThis.__HULLBREAKER_INPUT_BOOTSTRAP__ : null;
let lr = null;
let dr = null;
if (nr) {
  try {
    if (nr.version !== _0x3d56de) {
      throw new Error("frame input version " + nr.version + " does not match " + _0x3d56de);
    }
    if (!ar) {
      throw new Error("frame input requires ?fixeddt=<ms>");
    }
    lr = _0x45357e({
      events: nr.events,
      fixedDtMs: ar,
      stopAtMs: nr.stopAtMs,
      applyEdge: Ct
    });
  } catch (_0x1e55ba) {
    dr = String(_0x1e55ba && _0x1e55ba.message || _0x1e55ba);
  }
  try {
    delete globalThis.__HULLBREAKER_INPUT_BOOTSTRAP__;
  } catch (_0x528734) {}
}
if (_0x2a0ca0.has("testapi")) {
  Object.defineProperty(globalThis, "__HULLBREAKER_TEST__", {
    value: Object.freeze({
      snapshot: er,
      inputTimeline: function () {
        if (lr) {
          return lr.snapshot();
        } else {
          return {
            version: _0x3d56de,
            status: dr ? "error" : "disabled",
            error: dr,
            fixedDtMs: ar || null,
            eventCount: 0,
            events: [],
            reassertions: []
          };
        }
      }
    }),
    configurable: false,
    writable: false
  });
}
let mr = performance.now();
let pr = false;
window.HB = Object.freeze({
  CONFIG: _0x32845b,
  fixture: _0x57f87e,
  player: _0x6d9776,
  playerTune: _0x613a04,
  hostiles: _0x507857,
  capsules: _0x1476b9,
  mods: _0x4c7bf6,
  sliceStats: _0x455e1f,
  keys: _0x241a19,
  levelData: _0x33edf9,
  state: () => _0x19d2b2,
  scrollX: () => _0x2bc54b,
  gameMs: () => _0x106d18,
  currentWeapon: () => _0x340311,
  currentGun: () => {
    const _0x55c490 = _0x54f624();
    return {
      id: _0x15944e.id,
      letter: _0x15944e.letter,
      tier: _0x15944e.tier,
      traits: [..._0x15944e.traits],
      label: _0x1e1d52(),
      stats: {
        fireRateMs: _0x55c490.fireRateMs,
        damage: _0x55c490.damage,
        speed: _0x55c490.speed,
        count: _0x55c490.count,
        pierceBudget: _0x55c490.pierceBudget,
        seekRange: _0x55c490.seekRange,
        seekFuelMs: _0x55c490.seekFuelMs,
        seekRetargets: _0x55c490.seekRetargets,
        terrainPhaseTiles: _0x55c490.terrainPhaseTiles,
        heavyImpulse: _0x55c490.heavyImpulse,
        heavyStunMs: _0x55c490.heavyStunMs,
        volatileRadius: _0x55c490.volatileRadius
      }
    };
  },
  kills: () => _0x423c12,
  shotsFired: () => _0x318f63,
  edges: () => ({
    left: _0x334446(),
    right: _0x2f7389()
  }),
  pace: () => _0x57f87e ? {
    ..._0x57f87e.pace,
    pursuit: _0x57f87e.pursuit
  } : null,
  view: () => ({
    ..._0x32845b.viewScales[_0x1df439],
    cameraDepth: _0x5e905d()
  }),
  g1: _0xf849ef ? {
    pieces: _0x674996,
    fog: {
      ..._0x32845b.limb.fog
    }
  } : null,
  pursuitSpeed: () => _0x334831(),
  score: {
    enabled: _0x3ada6a,
    events: _0x34b3d5,
    snapshot: _0xde1e6c,
    reset: _0xbc4a13
  },
  hook: {
    enabled: _0x402f71,
    input: _0xe87a15,
    snapshot: _0x77950
  },
  flow: {
    enabled: _0x11eb61,
    snapshot: _0xe5a53d
  },
  finale: {
    snapshot: _0xa214a7
  },
  shell: _0x5123da,
  juice: _0x80bc49,
  actionVfx: _0x49b76f,
  perf: or,
  viewInit: _0x3cb703,
  resetRegistry: _0x125c26,
  adaptiveFidelity: _0x5dbb5d,
  post: _0x126bfd,
  audio: _0x139f01,
  failsafe: _0x41e592,
  hitStopMs: () => _0x2b8740(),
  snapshot: () => {
    const _0x29e07b = er();
    return {
      ..._0x29e07b,
      scrollEnd: _0x647370(),
      player: {
        ..._0x29e07b.player,
        hp: _0x6d9776.hp,
        lives: _0x6d9776.lives,
        facing: _0x6d9776.facing,
        airJumpsLeft: _0x6d9776.airJumpsLeft
      },
      currentWeapon: _0x340311,
      currentGun: window.HB.currentGun(),
      kills: _0x423c12,
      shotsFired: _0x318f63,
      capsules: _0x1476b9.map(_0x2b0329 => ({
        kind: _0x2b0329.kind,
        letter: _0x2b0329.letter,
        x: _0x2b0329.x,
        y: _0x2b0329.y,
        mode: _0x2b0329.mode,
        gun: _0x2b0329.gun ? {
          id: _0x2b0329.gun.id,
          tier: _0x2b0329.gun.tier,
          traits: [..._0x2b0329.gun.traits],
          label: _0x2b0329.gun.label
        } : null
      })),
      edgeLeft: _0x334446(),
      edgeRight: _0x29e07b.screenRight,
      sliceStats: {
        ..._0x455e1f
      }
    };
  }
});
_0x502699();
if (_0x2a0ca0.has("selftest")) {
  setTimeout(() => {
    const _0x33565f = [];
    const _0x39d5df = (_0x331947, _0x3923b0) => _0x33565f.push([_0x331947, !!_0x3923b0]);
    if (_0x4dedd2 && _0x19d2b2 === "MENU") {
      Jt();
    }
    _0x39d5df("canvas attached", _0x4c9b76.domElement.isConnected);
    _0x39d5df("render loop alive", _0x4c9b76.info.render.frame > 0);
    $t();
    _0x39d5df("pause", _0x19d2b2 === "PAUSED");
    $t();
    _0x39d5df("resume", _0x19d2b2 === "PLAYING");
    dispatchEvent(new Event("resize"));
    _0x39d5df("resize handled", Math.abs(_0x3ef469.aspect - innerWidth / innerHeight) < 0.000001);
    const _0x48f543 = _0x268adc(_0x32845b.camera.z, innerWidth / innerHeight, _0x4adb33 ? _0x4adb33.run : _0x32845b.camera);
    _0x39d5df("view resolved and portrait pullback applied", !!_0x32845b.viewScales[_0x1df439] && Number.isFinite(_0x5e905d()) && _0x5e905d() > 0 && _0x32845b.viewScales.near.depthMult === 1 && _0x5e905d() === _0x48f543 * _0x32845b.viewScales[_0x1df439].depthMult);
    Xt();
    const _0x3c4e3e = _0x80bc49();
    const _0x447e88 = _0x4adb33 ? _0x4adb33.run.startScroll : 0;
    const _0x1264c2 = _0x309da6 ? _0x580b9a.length : 0;
    _0x39d5df("restart", _0x2bc54b >= _0x447e88 && _0x19d2b2 === "PLAYING" && _0x507857.length === _0x1264c2);
    if (_0x4adb33) {
      _0x39d5df("slice fixture selected", _0x33edf9.fixture === _0x4adb33);
    }
    if (_0x57f87e) {
      _0x39d5df("pace resolved", _0x57f87e.pace.id === _0xf74e52 || _0xf74e52 !== "base" && _0x57f87e.pace.id === "base");
      _0x39d5df("authored rewards spawned", _0x1476b9.length === _0x57f87e.rewards.length && _0x1476b9.every(_0xf251af => _0xf251af.mode === "fixed"));
      _0x39d5df("hull fallback armed", _0x223758 === (_0x2a0ca0.get("fallback") !== "0"));
      const _0x242177 = _0x57f87e.pursuit.marginCapTiles;
      _0x39d5df("crush clock bounded at spawn", _0x242177 > 0 ? _0x6d9776.x - _0x6d9776.hw - _0x334446() <= _0x242177 + 0.05 : _0x2bc54b === _0x447e88);
    }
    if (_0xf849ef) {
      _0x39d5df("limb baked", _0x674996 > 0);
      _0x39d5df("limb haze armed", Math.abs(_0x5cebb1.fog.far - _0x5cebb1.fog.near - (_0x32845b.limb.fog.far - _0x32845b.limb.fog.near)) < 0.000001);
      _0x39d5df("corner ritual untouched", _0x433e3a().k === 1 && _0x433e3a().state === "idle" && _0x20dc6b(_0x32845b) === 1100);
    }
    if (_0x5ec22b) {
      const _0x38c4f4 = _0x4adb33.run.playerSpawn.x;
      const _0x2ca3c6 = _0x1bb96b(_0x4adb33, _0x32845b);
      _0x39d5df("body static at spawn", _0x4dcab1 === 0 && _0x47ec41(_0x38c4f4) === _0x1d0b08(_0x2ca3c6, _0x38c4f4) && (_0x2b54d9 || _0x47ec41(_0x38c4f4) === 0));
      _0x39d5df("first turn idle", _0x282949().state === "idle");
      _0x39d5df("transform fixture selected", _0x2b54d9 ? _0x4adb33.id === "monster-g2-neck-flip" && _0x282949().id === "neck-plate-flip" : _0x4adb33.id === "transform-v1");
    }
    {
      const _0x25173e = _0x77950();
      const _0x363e32 = _0xe5a53d();
      _0x39d5df("hook flag matches its module", _0x25173e.enabled === _0x402f71 && (!_0x402f71 || !!_0x57f87e.hook));
      _0x39d5df("hook idle after restart", _0x25173e.phase === "idle" && _0x25173e.grabs === 0);
      _0x39d5df("hook anchors authored", !_0x402f71 || _0x57f87e.hookAnchors.length >= 4);
      _0x39d5df("flow flag matches its module", _0x363e32.enabled === _0x11eb61 && (!_0x11eb61 || !!_0x57f87e.flow));
      _0x39d5df("flow chain empty after restart", _0x363e32.links === 0 && _0x363e32.mult === 1);
      _0x39d5df("flow auto-launch overlay only with the flag", _0x11eb61 ? _0x613a04.ledgeAutoLaunch === true : _0x613a04.ledgeAutoLaunch === (_0xf74e52 === "surge" || undefined));
      _0x39d5df("autobounce flag plumbed", _0x1dc466 === (_0x566389 && _0x2a0ca0.get("autobounce") === "1"));
    }
    if (_0x4dedd2) {
      _0x39d5df("automated session is never parked on the title", _0x19d2b2 === "PLAYING" && !_0x5123da().atTitle && (_0x18b792 || _0x2a0ca0.get("shell") === "title"));
      _0x39d5df("start direction resolved", _0x5123da().directions.includes(_0x5123da().direction) && _0x5123da().direction === _0x392bcd);
      Wt();
      const _0x100a25 = document.getElementById("overlay");
      _0x39d5df("quit to title parks the run at the start screen", _0x19d2b2 === "MENU" && _0x5123da().atTitle && document.getElementById("shell").classList.contains("on") && _0x100a25.style.display === "none");
      _0x39d5df("title consumes no gameplay key", ["ArrowRight", "Space", "KeyJ", "KeyK", "KeyX", "ShiftLeft", "KeyW"].every(_0x179e5f => _0x34e99f(_0x179e5f, "MENU") === "start"));
      {
        const _0x58215b = _0x5123da().direction;
        const _0x17eaad = [];
        const _0x5dc170 = [];
        const _0x5e721e = [];
        for (let _0x3706f6 = 0; _0x3706f6 < _0x4ca318.length; _0x3706f6++) {
          _0x47daa4("pick:" + _0x3706f6);
          const _0x11f0c4 = _0x4ca318[_0x3706f6];
          for (const _0x454bbd of document.querySelectorAll("#shellArt .sl")) {
            for (const _0x4aac8b of _0x4274e3) {
              if (_0x454bbd.style.getPropertyValue(_0x4aac8b) === "") {
                _0x17eaad.push(_0x11f0c4 + " " + _0x454bbd.className + _0x4aac8b);
              }
            }
          }
          const _0x4c1881 = document.querySelector("#shellArt .sl-rig");
          const _0x469311 = _0x4c1881 && getComputedStyle(_0x4c1881).transform;
          if (!_0x4c1881 || _0x469311 !== "none" && !/^matrix\(1,\s*0,\s*0,\s*1[,)]/.test(_0x469311)) {
            _0x5dc170.push(_0x11f0c4 + " " + _0x469311);
          }
          const _0xcc9327 = _0x4c1881 ? _0x4c1881.getBoundingClientRect().height / innerHeight * 100 : 0;
          if (!(_0xcc9327 >= _0x4f3cca.min) || !(_0xcc9327 <= _0x4f3cca.max)) {
            _0x5e721e.push(_0x11f0c4 + " " + _0xcc9327.toFixed(2) + "%");
          }
        }
        _0x47daa4("pick:" + _0x4ca318.indexOf(_0x58215b));
        _0x39d5df("no composed element inherits a custom property" + (_0x17eaad.length ? " (" + _0x17eaad.slice(0, 3).join(", ") + ")" : ""), _0x17eaad.length === 0);
        _0x39d5df("RIG carries no rotation of its own — it stands on its surface" + (_0x5dc170.length ? " (" + _0x5dc170.join(", ") + ")" : ""), _0x5dc170.length === 0);
        _0x39d5df("RIG RENDERS at board 13's human scale (3–5% of frame height)" + (_0x5e721e.length ? " (" + _0x5e721e.join(", ") + ")" : ""), _0x5e721e.length === 0);
      }
      const _0x58e044 = _0x455e1f.attempts;
      dispatchEvent(new KeyboardEvent("keydown", {
        code: "KeyR"
      }));
      _0x39d5df("any key leaves the title into a live run", _0x19d2b2 === "PLAYING" && !_0x5123da().atTitle && document.getElementById("shell").classList.contains("on") === false && _0x5123da().runMs < 50);
      _0x39d5df("leaving the title does not spend an attempt", _0x455e1f.attempts === _0x58e044);
    } else {
      _0x39d5df("shell disabled boots straight into the run", _0x19d2b2 === "PLAYING");
    }
    {
      const _0x3d2bf4 = _0x80bc49();
      _0x39d5df("juice flag plumbed", _0x3d2bf4.enabled === (_0x2a0ca0.get("juice") !== "0"));
      const _0x2e8986 = _0x3c4e3e;
      _0x39d5df("juice idle immediately after restart" + (_0x2e8986.hitStopMs || _0x2e8986.trauma || _0x2e8986.sparks || _0x2e8986.flashes ? " (hitStop=" + _0x2e8986.hitStopMs + ", trauma=" + _0x2e8986.trauma + ", sparks=" + _0x2e8986.sparks + ", flashes=" + _0x2e8986.flashes + ")" : ""), _0x2e8986.hitStopMs === 0 && _0x2e8986.trauma === 0 && _0x2e8986.sparks === 0 && _0x2e8986.flashes === 0);
      _0x39d5df("juice pools sized from config", !_0x3d2bf4.enabled || _0x3d2bf4.sparkMax === _0x32845b.juice.pools.particles && _0x3d2bf4.flashMax === _0x32845b.juice.pools.flashes);
    }
    {
      const _0x1dfcd4 = _0x126bfd();
      const _0x5a6445 = _0x2a0ca0.get("bloom");
      _0x39d5df("post flag plumbed", _0x9ca8.on === (_0x5a6445 !== "0" && _0x5a6445 !== "off"));
      _0x39d5df("post status matches the flag (" + _0x1dfcd4.status + ")", _0x1dfcd4.on ? ["loading", "active", "failed"].includes(_0x1dfcd4.status) : _0x1dfcd4.status === "off");
      _0x39d5df("bloom parameters are live only while the pass draws", _0x1dfcd4.status === "active" ? _0x1dfcd4.strength > 0 && _0x1dfcd4.threshold > 0 && _0x1dfcd4.gain > 1 : _0x1dfcd4.strength === 0 && _0x1dfcd4.gain === 1);
      _0x39d5df("frames render on whichever path is live", _0x4c9b76.info.render.frame > 0);
    }
    {
      const _0x2e761f = _0x41e592();
      _0x39d5df("failsafe bootstrap installed and boot completed", _0x2e761f.installed && _0x2e761f.booted);
      _0x39d5df("failure panel is down during a healthy run", !_0x2e761f.showing && !_0x2e761f.halted && _0x2e761f.faults === 0);
      _0x39d5df("frame loop heartbeat is live", _0x2e761f.beats > 0);
      _0x39d5df("dt clamp matches the durability policy", _0x1a38a3.frameDtMaxMs === 50 && _0x2e761f.policy.frameDtMaxMs === 50);
      const _0x561fec = _0x431ef4();
      _0x39d5df("failure panel renders, offers a way back, and reads plainly" + (_0x561fec.issues.length ? " (" + _0x561fec.issues.slice(0, 3).join("; ") + ")" : ""), _0x561fec.visible && _0x561fec.reachableReload && _0x561fec.issues.length === 0);
      _0x39d5df("failure panel puts itself away again", !_0x41e592().showing);
    }
    const _0x78ed = _0x33565f.filter(_0x1f5ada => !_0x1f5ada[1]).map(_0x131a10 => _0x131a10[0]);
    const _0x9bfead = _0x78ed.length ? "SELFTEST FAIL: " + _0x78ed.join(", ") : "SELFTEST PASS (" + _0x33565f.length + " checks)";
    console.log(_0x9bfead);
    document.title = _0x9bfead;
  }, 1500);
}
Xt();
{
  const e = _0xc1b3d2();
  try {
    _0x5cbdf0();
  } finally {
    e.dispose();
  }
}
if (_0x4dedd2 && !_0x18b792) {
  _0x375213("MENU");
}
requestAnimationFrame(function s(_0x9c22a7) {
  if (_0x1ad899()) {
    return;
  }
  requestAnimationFrame(s);
  if (document.hidden) {
    mr = _0x9c22a7;
    return;
  }
  (function (_0x1557eb) {
    if (ir > 0) {
      const _0x21f7f0 = _0x1557eb - ir;
      tr[sr] = _0x21f7f0;
      sr = (sr + 1) % 180;
      if (rr < 180) {
        rr++;
      }
      _0x41419d(_0x21f7f0);
    }
    ir = _0x1557eb;
  })(_0x9c22a7);
  _0x3df868();
  const _0x41013e = ar ? ar / 1000 : Math.max(0, Math.min(50, _0x9c22a7 - mr)) / 1000;
  mr = _0x9c22a7;
  if (_0x19d2b2 === "PLAYING") {
    if (!lr || lr.beforeUpdate(_0x106d18)) {
      try {
        (function (_0xc9d2d8) {
          _0x3be13a(_0xc9d2d8 * 1000);
          const _0x581707 = _0x251539(_0x423c12, _0x6d9776.hp);
          const _0x5f2175 = (_0x106d18 < _0x4c7bf6.chronoUntil ? _0x32845b.mods.chronoScale : 1) * _0x581707;
          _0x3a2a28(_0xc9d2d8 * _0x5f2175);
          _0x2850fa();
          _0x38f773();
          _0x1fb2cc();
          _0x27979f();
          _0xaf70bc();
          _0x4ad975();
          _0x53c350();
          _0x2016e9();
          _0xd6d392(_0xc9d2d8 * _0x581707);
          _0x374e0f();
          if (_0x19d2b2 === "PLAYING") {
            _0x1177b2(_0xc9d2d8 * _0x5f2175);
            _0x1a8a51();
            _0x46d44b(_0xc9d2d8 * _0x5f2175);
            _0x3a1f1c();
            _0x22e874(_0xc9d2d8 * _0x581707);
            _0x1e40d0();
            _0x35cdb9(_0xc9d2d8, {
              grounded: _0x6d9776.grounded,
              vx: _0x6d9776.vx,
              traversalState: _0x6d9776.traversalState,
              x: _0x6d9776.x,
              y: _0x6d9776.y,
              margin: _0x6d9776.x - _0x6d9776.hw - _0x334446()
            });
            if (_0x566389) {
              if (_0x6d9776.x >= _0x57f87e.rejoin.x0) {
                _0x26d88d("clear");
                _0x375213("VICTORY");
              }
            } else if (_0x5ec22b) {
              if (_0x6d9776.x >= _0x4adb33.finish.x0) {
                _0x26d88d("clear");
                _0x375213("VICTORY");
              }
            } else {
              if (_0x2bc54b >= _0x38644d && !_0x456afe()) {
                _0x13baf1();
              }
              _0x30fc38();
              if (_0x38cfb7()) {
                _0x26d88d("clear");
                _0x375213("VICTORY");
              }
            }
          }
        })(_0x41013e);
      } catch (_0x1ce06e) {
        if (_0xf862d5("update", _0x1ce06e) === "stop") {
          return;
        }
      } finally {
        if (lr) {
          lr.afterUpdate();
        }
      }
    }
  }
  try {
    _0x527e6c();
    _0x19ff69();
  } catch (_0x38549c) {
    _0xf862d5("render", _0x38549c);
  }
  if (!pr && _0x4c9b76.info.render.frame > 0 && _0x41e592().faults === 0) {
    pr = true;
    window.OG?.ready?.();
  }
});
document.body.classList.remove("booting");
_0x297098();