import { initBulletView as _0x30a555 } from "../render/bullets.js";
import { initCameraView as _0x1183b9 } from "../render/camera.js";
import { initCapsuleView as _0x6300b1 } from "../render/capsules.js";
import { initFinaleView as _0x148d18 } from "../render/finale.js";
import { initHookView as _0x469cec } from "../render/hook.js";
import { initHostileView as _0x1f3876 } from "../render/hostiles.js";
import { initLevelView as _0x6b0baa } from "../render/level.js";
import { initMeridianView as _0x612173 } from "../render/meridian-defense-vfx.js";
import { initModsView as _0x29309c } from "../render/mods.js";
import { initPlayerView as _0x4d32de } from "../render/player.js";
import { initTransformView as _0x4695c5 } from "../render/transform.js";
import { installActionVfxObservers as _0x32f2f9 } from "../render/action-vfx-runtime.js";
import { initJuiceViewObservers as _0x2a8aab } from "../render/juice.js";
import { initLootView as _0x40abff } from "../ui/loot.js";
import { initOverlayView as _0xebf320 } from "../ui/overlay.js";
export const VIEW_INIT_MANIFEST = Object.freeze([Object.freeze({
  id: "camera",
  init: _0x1183b9
}), Object.freeze({
  id: "level",
  init: _0x6b0baa
}), Object.freeze({
  id: "hostiles",
  init: _0x1f3876
}), Object.freeze({
  id: "meridian",
  init: _0x612173
}), Object.freeze({
  id: "finale",
  init: _0x148d18
}), Object.freeze({
  id: "transform",
  init: _0x4695c5,
  optional: true
}), Object.freeze({
  id: "player",
  init: _0x4d32de
}), Object.freeze({
  id: "capsules",
  init: _0x6300b1
}), Object.freeze({
  id: "bullets",
  init: _0x30a555
}), Object.freeze({
  id: "mods",
  init: _0x29309c
}), Object.freeze({
  id: "hook",
  init: _0x469cec
}), Object.freeze({
  id: "loot",
  init: _0x40abff
}), Object.freeze({
  id: "overlay",
  init: _0xebf320
})]);
export const VIEW_OBSERVER_MANIFEST = Object.freeze([Object.freeze({
  id: "juice",
  init: _0x2a8aab,
  optional: true
}), Object.freeze({
  id: "action-vfx",
  init: _0x32f2f9,
  optional: true
})]);
let b = false;
let z = null;
export function initializeViewRegistry() {
  if (b) {
    return z;
  }
  const _0x40b788 = VIEW_INIT_MANIFEST.map(_0x1340ef => Object.freeze({
    id: _0x1340ef.id,
    installed: _0x1340ef.init() === true,
    optional: _0x1340ef.optional === true
  }));
  const _0xd9fab3 = VIEW_OBSERVER_MANIFEST.map(_0x312df3 => Object.freeze({
    id: _0x312df3.id,
    installed: _0x312df3.init() === true,
    optional: _0x312df3.optional === true
  }));
  b = true;
  z = Object.freeze({
    initialized: true,
    base: Object.freeze(_0x40b788),
    observers: Object.freeze(_0xd9fab3)
  });
  return z;
}
export function viewInitSnapshot() {
  return z || Object.freeze({
    initialized: false,
    base: [],
    observers: []
  });
}