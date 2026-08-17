import { CONFIG as _0x17b870 } from "../config.js";
import { ACTIVE_SLICE as _0x138a8a, MOMENTUM_ENABLED as _0x56b6f0 } from "../mode.js";
import { traversalPaceStep as _0x1cf7fa } from "../pure/traversal.js";
import { momentumBankSample as _0x123d1f, momentumClampSpeed as _0x5abe8f, momentumCombatStep as _0x51ccca, momentumOnDamage as _0x319e50, momentumScreenFrac as _0x5f55b4, momentumSpeed as _0xf0678f, momentumStep as _0xdcd816, momentumTarget as _0x4e3607 } from "../pure/momentum.js";
const f = _0x138a8a ? _0x138a8a.pursuit : null;
const d = _0x17b870.momentum;
let a = f ? f.cruiseSpeed : _0x17b870.scrollSpeed;
let S = a;
export function paceSpeed() {
  return a;
}
export function pacePeak() {
  return S;
}
export function pacePursuit() {
  return f;
}
export function updatePace(_0x3b808c, _0x28ba5a) {
  if (f) {
    a = _0x1cf7fa(f, a, _0x28ba5a, _0x3b808c);
    if (a > S) {
      S = a;
    }
  }
}
let x = 0;
let M = 0;
let h = 0;
let k = 0;
let v = 0;
let P = 0;
let g = 0;
let j = 0;
let y = false;
export function momentumDrive() {
  return x;
}
export function momentumPeakDrive() {
  return k;
}
export function momentumScrollSpeed() {
  return _0x5abe8f(_0xf0678f(x, _0x17b870.scrollSpeed, d), _0x17b870.scrollSpeed, d);
}
export function updateMomentum(_0x165801, _0x64928d) {
  if (!_0x56b6f0) {
    return;
  }
  if (!y) {
    P = _0x64928d.kills;
    g = _0x64928d.hp;
    j = _0x64928d.lives;
    y = true;
  }
  const _0x1a411b = _0x64928d.kills > P ? _0x64928d.kills - P : 0;
  const _0x10bff4 = _0x64928d.hp < g;
  const _0x4efed6 = _0x64928d.lives < j;
  P = _0x64928d.kills;
  g = _0x64928d.hp;
  j = _0x64928d.lives;
  if (_0x4efed6) {
    x = 0;
    M = 0;
    h = 0;
    v = _0x64928d.nowMs + d.hitMercyMs;
  } else if (_0x10bff4) {
    x = _0x319e50(x, d);
    h = 0;
    v = _0x64928d.nowMs + d.hitMercyMs;
  }
  h = _0x51ccca(h, _0x1a411b, _0x165801, d);
  M = _0x123d1f(M, _0x5f55b4(_0x64928d.playerLeft, _0x64928d.edgeLeft, _0x64928d.edgeRight), _0x64928d.held, d);
  x = _0xdcd816(x, _0x4e3607(M, h, d), _0x165801, d, {
    mercy: _0x64928d.nowMs < v
  });
  if (x > k) {
    k = x;
  }
  const _0xccdf82 = momentumScrollSpeed();
  if (_0xccdf82 > S) {
    S = _0xccdf82;
  }
}
export function resetPace() {
  a = f ? f.cruiseSpeed : _0x17b870.scrollSpeed;
  S = a;
  x = 0;
  M = 0;
  h = 0;
  k = 0;
  v = 0;
  P = 0;
  g = 0;
  j = 0;
  y = false;
}