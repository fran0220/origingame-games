import { CONFIG as _0x278fe3 } from "../config.js";
import { ACTIVE_FIXTURE as _0x2adc10 } from "../mode.js";
import { faceIndexAt as _0x5c8d25 } from "../pure/path.js";
import { meridianDefenseLifecycleSnapshot as _0x3f7413, newMeridianDefenseLifecycleState as _0x33794b, resetMeridianDefenseLifecycleState as _0x479953, stepMeridianDefenseLifecycle as _0x8405ca } from "../pure/meridian-defense-lifecycle.js";
import { view as _0x541e1a } from "./bridge.js";
import { sLeftEdge as _0x2678a1, sRightEdge as _0x5d972a } from "./edges.js";
import { finaleActive as _0x3caee9 } from "./finale.js";
import { player as _0x261a49 } from "./player.js";
import { notifyPressureEnvironmentChange as _0x4fa46f, pressureDirectorSnapshot as _0x3f9df7 } from "./spawner.js";
import { gameMs as _0x3140e0 } from "./time.js";
import { activeCorner as _0x6b2e91 } from "./wavegate.js";
let h = _0x33794b();
let j = null;
export function updateMeridianDefense() {
  const _0x2abc43 = function () {
    const _0x43b3 = _0x6b2e91();
    const _0x3ae2b7 = _0x2adc10 ? 0 : _0x5c8d25(_0x261a49.x, _0x278fe3);
    const _0x28ded7 = Math.max(0, Math.min(5, _0x3ae2b7 - 1));
    const _0x2de312 = _0x278fe3.path.introTiles + _0x278fe3.path.faceTiles * _0x28ded7;
    const _0x1bc295 = _0x3f9df7();
    return {
      nowMs: _0x3140e0,
      routeFace: _0x3ae2b7,
      cornerFace: _0x43b3?.k ?? 0,
      cornerState: _0x43b3?.state ?? "complete",
      cornerPrimed: !!_0x43b3?.primed,
      playerX: _0x261a49.x,
      faceStart: _0x2de312,
      authoredArmed: _0x1bc295.face === _0x3ae2b7 && !!_0x1bc295.armed,
      finale: _0x3caee9(),
      fixture: !!_0x2adc10,
      viewLeft: _0x2678a1(),
      viewRight: _0x5d972a(),
      cornerLimit: _0x43b3 ? _0x43b3.s - _0x278fe3.spawner.cornerClearBefore - _0x278fe3.spawner.pressure.cornerPadTiles : -Infinity
    };
  }();
  const _0x582a6b = _0x8405ca(h, _0x2abc43);
  if (_0x582a6b.impulse) {
    _0x4fa46f(_0x582a6b.impulseStrength);
  }
  j = {
    ..._0x582a6b,
    nowMs: _0x2abc43.nowMs,
    playerX: _0x2abc43.playerX,
    viewLeft: _0x2abc43.viewLeft,
    viewRight: _0x2abc43.viewRight,
    cornerLimit: _0x2abc43.cornerLimit
  };
  _0x541e1a.meridian.sync(j);
}
export function resetMeridianDefense() {
  _0x479953(h);
  j = null;
  _0x541e1a.meridian.reset();
}
export function meridianDefenseSnapshot() {
  return {
    ..._0x3f7413(h),
    presentation: j ? {
      ...j
    } : null,
    environmentOnly: true,
    directSpawns: 0,
    gatingSpawns: 0
  };
}