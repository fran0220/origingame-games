import { ACTIVE_FIXTURE as _0x117d6b } from "../mode.js";
import { clearDepartingTracers as _0x5f150f } from "../render/bullets.js";
import { resetCameraYaw as _0x58c37a } from "../render/camera.js";
import { clearCorpses as _0x5ef9ea } from "../render/hostiles.js";
import { resetJuicePresentation as _0x24ab28 } from "../render/juice.js";
import { clearCapsules as _0x5d03cb, resetCarrierDrops as _0x4c1ddb } from "../sim/capsules.js";
import { resetFinale as _0x1810b4 } from "../sim/finale.js";
import { resetFlow as _0x1b706b } from "../sim/flow.js";
import { clearHostiles as _0x570872, resetHostileRng as _0x51a386, resetKills as _0x588a35 } from "../sim/hostiles.js";
import { resetHook as _0x43663d } from "../sim/hook.js";
import { clearHookBuffer as _0x16452d, clearSwapBuffer as _0x478b86, releaseAllKeys as _0x528a48 } from "../sim/input.js";
import { unbuildFutureFaces as _0x2cf844 } from "../sim/level.js";
import { clearMods as _0x4fa2f8 } from "../sim/mods.js";
import { resetPace as _0x2c1ddd } from "../sim/pace.js";
import { cancelSliceRetry as _0x45f08a, resetPlayerForRun as _0x51c491 } from "../sim/player.js";
import { resetScore as _0x563f6a } from "../sim/score.js";
import { resetSpawner as _0x39bfd7 } from "../sim/spawner.js";
import { resetMeridianDefense as _0x59d9c7 } from "../sim/meridian-defense.js";
import { gameMs as _0x1c8347, resetHitStop as _0x3d2292, setScrollX as _0x126e44, sliceStats as _0x22a7aa } from "../sim/time.js";
import { resetTransform as _0x58444a } from "../sim/transform.js";
import { resetCornerEvents as _0x5e03eb } from "../sim/wavegate.js";
import { clearBullets as _0x4644ad, resetShotsFired as _0x516019, resetWeaponKills as _0x2955cd, setWeapon as _0x49f82e } from "../sim/weapons.js";
import { makeResetRegistry as _0x9b80e7 } from "./reset-registry.js";
export const RUN_RESET_REGISTRY = _0x9b80e7([{
  id: "slice-retry",
  reset: _0x45f08a
}, {
  id: "input-keys",
  reset: () => {
    _0x528a48();
    _0x478b86();
  }
}, {
  id: "hostiles",
  reset: _0x570872
}, {
  id: "corpses",
  reset: _0x5ef9ea
}, {
  id: "projectiles",
  reset: _0x4644ad
}, {
  id: "projectile-tracers",
  reset: _0x5f150f
}, {
  id: "capsules",
  reset: _0x5d03cb
}, {
  id: "starter-weapon",
  reset: () => _0x49f82e("R")
}, {
  id: "weapon-kills",
  reset: _0x2955cd
}, {
  id: "modifiers",
  reset: _0x4fa2f8
}, {
  id: "carrier-drops",
  reset: _0x4c1ddb
}, {
  id: "scroll",
  reset: function () {
    _0x126e44(_0x117d6b ? _0x117d6b.run.startScroll : 0);
  }
}, {
  id: "pace",
  reset: _0x2c1ddd
}, {
  id: "score",
  reset: _0x563f6a
}, {
  id: "spawner",
  reset: _0x39bfd7
}, {
  id: "meridian-defense",
  reset: _0x59d9c7
}, {
  id: "finale",
  reset: _0x1810b4
}, {
  id: "hostile-rng",
  reset: _0x51a386
}, {
  id: "kill-count",
  reset: _0x588a35
}, {
  id: "shot-count",
  reset: _0x516019
}, {
  id: "player",
  reset: function () {
    _0x51c491(_0x117d6b ? _0x117d6b.run.playerSpawn.x : 6, _0x117d6b ? _0x117d6b.run.playerSpawn.y : 3);
  }
}, {
  id: "hook-input",
  reset: _0x16452d
}, {
  id: "hook",
  reset: _0x43663d
}, {
  id: "flow",
  reset: _0x1b706b
}, {
  id: "corner-events",
  reset: _0x5e03eb
}, {
  id: "transform",
  reset: _0x58444a
}, {
  id: "hit-stop",
  reset: _0x3d2292
}, {
  id: "camera-yaw",
  reset: _0x58c37a
}, {
  id: "future-faces",
  reset: _0x2cf844
}, {
  id: "juice-presentation",
  reset: _0x24ab28
}, {
  id: "slice-stats",
  reset: function () {
    _0x22a7aa.setbacks = 0;
    _0x22a7aa.lastSetbackAt = -1000000000;
    _0x22a7aa.minEdgeMargin = Infinity;
    if (_0x117d6b) {
      _0x22a7aa.attempts++;
      _0x22a7aa.airJumps = 0;
      _0x22a7aa.startedAt = _0x1c8347;
    }
  }
}]);
export function resetRunState() {
  return RUN_RESET_REGISTRY.reset();
}
export function runResetSnapshot() {
  return RUN_RESET_REGISTRY.snapshot();
}