import { CONFIG as _0x14cd44 } from "../config.js";
import { JUICE_ENABLED as _0xd1ea7 } from "../mode.js";
import { hitStopArm as _0x35cac8, hitStopEvent as _0x31f9d1, hitStopMsFor as _0x3155c0, hitStopScaleAt as _0x42eb48 } from "../pure/juice.js";
import { view as _0x46e227 } from "./bridge.js";
export let gameMs = 0;
export let scrollX = 0;
export const sliceStats = {
  attempts: 0,
  failures: 0,
  falls: 0,
  airJumps: 0,
  setbacks: 0,
  lastSetbackAt: -1000000000,
  minEdgeMargin: Infinity,
  startedAt: 0
};
export function advanceGameMs(_0x18faf3) {
  gameMs += _0x18faf3;
}
export function setScrollX(_0x47d8de) {
  scrollX = _0x47d8de;
}
export let hitStopUntil = 0;
const s = {
  kills: 0,
  hp: 0,
  primed: false
};
export function stepHitStop(_0x230436, _0x37166b) {
  if (!_0xd1ea7) {
    return 1;
  }
  const _0x32790c = _0x14cd44.juice.hitStop;
  if (s.primed) {
    const _0x2600fe = _0x31f9d1(s.kills, _0x230436, s.hp, _0x37166b);
    s.kills = _0x230436;
    s.hp = _0x37166b;
    if (_0x2600fe) {
      const _0x4ed4d5 = _0x3155c0(_0x2600fe, _0x32790c);
      const _0xb4769d = _0x35cac8(hitStopUntil, gameMs, _0x4ed4d5, _0x32790c);
      if (_0xb4769d > hitStopUntil) {
        hitStopUntil = _0xb4769d;
        _0x46e227.juice.hitStop(_0x2600fe, _0x4ed4d5);
      }
    }
  } else {
    s.kills = _0x230436;
    s.hp = _0x37166b;
    s.primed = true;
  }
  return _0x42eb48(gameMs, hitStopUntil, _0x32790c);
}
export function hitStopRemainingMs() {
  return Math.max(0, hitStopUntil - gameMs);
}
export function resetHitStop() {
  hitStopUntil = 0;
  s.primed = false;
}
export function approach(_0x385735, _0x26f0eb, _0x41bad7) {
  if (_0x385735 < _0x26f0eb) {
    return Math.min(_0x26f0eb, _0x385735 + _0x41bad7);
  } else {
    return Math.max(_0x26f0eb, _0x385735 - _0x41bad7);
  }
}
export function blink(_0x391d78 = 90) {
  return Math.floor(gameMs / _0x391d78) % 2 == 0;
}