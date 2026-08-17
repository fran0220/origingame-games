import { CONFIG as _0x530677 } from "../config.js";
import { view as _0x262c4f } from "./bridge.js";
import { gameMs as _0x1bc643 } from "./time.js";
import { player as _0xf2e17d } from "./player.js";
import { fireWeapon as _0x1cc5fc } from "./weapons.js";
import { hostiles as _0x9d3228, hitHostile as _0x375674 } from "./hostiles.js";
export const mods = {
  rageUntil: 0,
  ghostUntil: 0,
  chronoUntil: 0,
  lance: null,
  lanceFlashUntil: 0,
  clonesVisible: false,
  cloneTrail: _0x530677.mods.ghostDelayMs.map(() => null)
};
export const shotLog = [];
export const posLog = [];
const r = Math.max(..._0x530677.mods.ghostDelayMs) + 300;
export function applyMod(_0x67900c) {
  const _0x54e21c = _0x530677.mods;
  if (_0x67900c === "RG") {
    mods.rageUntil = _0x1bc643 + _0x54e21c.rageMs;
  } else if (_0x67900c === "GS") {
    mods.ghostUntil = _0x1bc643 + _0x54e21c.ghostMs;
  } else if (_0x67900c === "CH") {
    mods.chronoUntil = _0x1bc643 + _0x54e21c.chronoMs;
  } else if (_0x67900c === "OL") {
    mods.lance = {
      s: _0xf2e17d.x,
      at: _0x1bc643 + _0x54e21c.lanceTelegraphMs
    };
  }
}
export function logShot(_0x30b18e, _0x52f4df, _0x393772, _0x6e7804, _0x381697) {
  shotLog.push({
    t: _0x1bc643,
    gun: _0x30b18e,
    letter: _0x30b18e.letter,
    x: _0x52f4df,
    y: _0x393772,
    ax: _0x6e7804,
    ay: _0x381697,
    fired: _0x530677.mods.ghostDelayMs.map(() => false)
  });
  if (shotLog.length > 80) {
    shotLog.shift();
  }
}
export function clearMods() {
  mods.rageUntil = 0;
  mods.ghostUntil = 0;
  mods.chronoUntil = 0;
  mods.lance = null;
  mods.lanceFlashUntil = 0;
  mods.clonesVisible = false;
  shotLog.length = 0;
  posLog.length = 0;
  _0x262c4f.mods.cleared();
}
export function updateMods() {
  const _0x233763 = _0x530677.mods;
  if (_0x1bc643 >= mods.ghostUntil) {
    if (posLog.length) {
      mods.clonesVisible = false;
      shotLog.length = 0;
      posLog.length = 0;
    }
  } else {
    for (posLog.push({
      t: _0x1bc643,
      x: _0xf2e17d.x,
      y: _0xf2e17d.y
    }); posLog.length && posLog[0].t < _0x1bc643 - r;) {
      posLog.shift();
    }
    for (let _0x4308a1 = 0; _0x4308a1 < _0x233763.ghostDelayMs.length; _0x4308a1++) {
      const _0x387656 = _0x233763.ghostDelayMs[_0x4308a1];
      for (const _0x52fda6 of shotLog) {
        if (!_0x52fda6.fired[_0x4308a1] && _0x1bc643 >= _0x52fda6.t + _0x387656) {
          _0x52fda6.fired[_0x4308a1] = true;
          _0x1cc5fc(_0x52fda6.letter, _0x52fda6.x, _0x52fda6.y, _0x52fda6.ax, _0x52fda6.ay, true, _0x52fda6.gun);
        }
      }
      let _0x5837a8 = posLog[0];
      for (const _0x5b1003 of posLog) {
        if (!(_0x5b1003.t <= _0x1bc643 - _0x387656)) {
          break;
        }
        _0x5837a8 = _0x5b1003;
      }
      mods.cloneTrail[_0x4308a1] = _0x5837a8;
    }
    for (mods.clonesVisible = true; shotLog.length && shotLog[0].t + r < _0x1bc643 && shotLog[0].fired.every(Boolean);) {
      shotLog.shift();
    }
  }
  if (mods.lance) {
    const _0x4341a6 = mods.lance;
    _0x262c4f.mods.lanceTelegraph(_0x4341a6);
    if (_0x1bc643 >= _0x4341a6.at) {
      for (let _0x1d764e = _0x9d3228.length - 1; _0x1d764e >= 0; _0x1d764e--) {
        _0x375674(_0x9d3228[_0x1d764e], _0x1d764e, 999, "OL");
      }
      mods.lanceFlashUntil = _0x1bc643 + _0x233763.lanceFlashMs;
      mods.lance = null;
    }
  }
  _0x262c4f.mods.sync();
}