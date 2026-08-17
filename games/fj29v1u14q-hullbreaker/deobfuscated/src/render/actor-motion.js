import * as _0x4872c9 from "three";
import { primitiveBox as _0x4e1dcd } from "./sprite-table.js";
import { actorMotionTexture as _0x58c393 } from "./actor-motion-art.js";
import { applySpriteUnderside as _0x3fc50c } from "./sprite-grounding.js";
import { ACTOR_MOTION_ATLASES as _0x4bfff2, ACTOR_MOTION_KINDS as _0x5a6ce6, ACTOR_MOTION_SPEC as _0x11ed1d } from "./actor-motion-spec.js";
function l(_0x1b8de2, _0x376c78) {
  const _0x2e4d55 = _0x1b8de2[_0x376c78.field];
  return (!("eq" in _0x376c78) || _0x2e4d55 === _0x376c78.eq) && (!("ltField" in _0x376c78) || _0x2e4d55 < _0x1b8de2[_0x376c78.ltField]);
}
function c(_0x5a1bd2, _0x5a73f3) {
  for (let _0x45f620 = 0; _0x45f620 < _0x5a73f3.when.length; _0x45f620++) {
    if (!l(_0x5a1bd2, _0x5a73f3.when[_0x45f620])) {
      return false;
    }
  }
  return true;
}
function i(_0x347a57, _0x89f840, _0xa2e586) {
  const _0x113814 = new _0x4872c9.PlaneGeometry(_0x347a57.w, _0x347a57.h);
  _0x113814.translate(_0x347a57.offX, _0x347a57.offY, 0);
  const [_0x227200, _0x363aec, _0x51c1fc, _0x43abd1] = _0x89f840;
  const [_0x4c1271, _0x41baf0] = _0xa2e586;
  const _0x2a7af8 = _0x227200 / _0x4c1271;
  const _0x4662fe = (_0x227200 + _0x51c1fc) / _0x4c1271;
  const _0x2cc76d = 1 - (_0x363aec + _0x43abd1) / _0x41baf0;
  const _0x2c0a39 = 1 - _0x363aec / _0x41baf0;
  const _0x4c692a = _0x113814.attributes.uv;
  for (let _0xef7761 = 0; _0xef7761 < _0x4c692a.count; _0xef7761++) {
    const _0x565a2d = _0x4c692a.getX(_0xef7761);
    const _0x28ab29 = _0x4c692a.getY(_0xef7761);
    _0x4c692a.setXY(_0xef7761, _0x2a7af8 + _0x565a2d * (_0x4662fe - _0x2a7af8), _0x2cc76d + _0x28ab29 * (_0x2c0a39 - _0x2cc76d));
  }
  _0x4c692a.needsUpdate = true;
  return _0x113814;
}
function f(_0x1aadfb) {
  const _0x51e2f7 = _0x11ed1d[_0x1aadfb];
  const _0x1b75fc = _0x58c393(_0x1aadfb);
  const _0x34d43b = _0x4e1dcd(_0x1aadfb);
  if (!_0x51e2f7 || !_0x1b75fc || !_0x34d43b) {
    return null;
  }
  const _0x1815ad = _0x4bfff2[_0x51e2f7.atlas];
  const [_0xe09417, _0x1e03a8] = _0x1815ad.cell;
  const _0x26256e = _0x34d43b.w / _0x51e2f7.referenceInkWidth;
  const _0x3def0e = _0x34d43b.cx;
  const _0x4f4fa6 = _0x34d43b.cy - _0x34d43b.h / 2;
  const _0x46677f = [];
  const _0x5e9550 = Object.create(null);
  for (const _0x4ff092 of _0x51e2f7.frames) {
    const [_0x3e11c0, _0x158e5a] = _0x4ff092.anchor;
    const _0x5c5db7 = i({
      w: _0xe09417 * _0x26256e,
      h: _0x1e03a8 * _0x26256e,
      offX: _0x3def0e - (_0x3e11c0 - _0xe09417 / 2) * _0x26256e,
      offY: _0x4f4fa6 - (_0x1e03a8 / 2 - _0x158e5a) * _0x26256e
    }, [_0x4ff092.index % _0x1815ad.grid[0] * _0xe09417, Math.floor(_0x4ff092.index / _0x1815ad.grid[0]) * _0x1e03a8, _0xe09417, _0x1e03a8], _0x1815ad.canvas);
    _0x3fc50c(_0x5c5db7, _0x1aadfb === "warden" ? 1 : 0.79);
    _0x5c5db7.userData.actorMotionKind = _0x1aadfb;
    _0x5c5db7.userData.actorMotionFrame = _0x4ff092.index;
    const _0x1f8eaa = Object.create(null);
    for (const [_0x3d9ab9, _0x21f4e2] of Object.entries(_0x4ff092.sockets)) {
      _0x1f8eaa[_0x3d9ab9] = Object.freeze({
        x: _0x3def0e + (_0x21f4e2[0] - _0x3e11c0) * _0x26256e,
        y: _0x4f4fa6 + (_0x158e5a - _0x21f4e2[1]) * _0x26256e
      });
    }
    const _0x5e1537 = Object.freeze({
      index: _0x4ff092.index,
      name: _0x4ff092.name,
      geo: _0x5c5db7,
      sockets: Object.freeze(_0x1f8eaa)
    });
    _0x46677f.push(_0x5e1537);
    _0x5e9550[_0x4ff092.name] = _0x5e1537;
  }
  return Object.freeze({
    kind: _0x1aadfb,
    spec: _0x51e2f7,
    tex: _0x1b75fc,
    box: _0x34d43b,
    scale: _0x26256e,
    frames: Object.freeze(_0x46677f),
    frameByName: Object.freeze(_0x5e9550),
    selection: {
      frame: null,
      clip: "",
      marker: "",
      event: "",
      progress: 0
    }
  });
}
const u = new Map();
for (const p of _0x5a6ce6) {
  const d = f(p);
  if (d) {
    u.set(p, d);
  }
}
export function actorMotionBundle(_0x11267d) {
  return u.get(_0x11267d) || null;
}
function m(_0x514d7b, _0x40b25c, _0x1abebb) {
  if (!_0x514d7b) {
    return null;
  }
  const _0x184dd1 = _0x40b25c && _0x514d7b.spec.clips[_0x40b25c];
  if (!_0x184dd1) {
    return null;
  }
  _0x1abebb = Math.max(0, Math.min(1, _0x1abebb));
  let _0x20b483 = _0x184dd1.beats[_0x184dd1.beats.length - 1];
  for (let _0x22d28d = 0; _0x22d28d < _0x184dd1.beats.length; _0x22d28d++) {
    if (_0x1abebb <= _0x184dd1.beats[_0x22d28d].until) {
      _0x20b483 = _0x184dd1.beats[_0x22d28d];
      break;
    }
  }
  const _0x58ba75 = _0x514d7b.frameByName[_0x20b483.frame];
  if (!_0x58ba75) {
    return null;
  }
  const _0x4760f6 = _0x514d7b.selection;
  _0x4760f6.frame = _0x58ba75;
  _0x4760f6.clip = _0x40b25c;
  _0x4760f6.marker = _0x184dd1.marker;
  _0x4760f6.event = _0x20b483.event;
  _0x4760f6.progress = _0x1abebb;
  return _0x4760f6;
}
export function selectActorMotion(_0x1af34f, _0x3db727, _0x1356b2) {
  if (!_0x1af34f) {
    return null;
  }
  const {
    spec: _0x5cd62d
  } = _0x1af34f;
  let _0x29842c = _0x5cd62d.states[_0x3db727.state] || null;
  for (let _0x39a960 = 0; _0x39a960 < _0x5cd62d.rules.length; _0x39a960++) {
    const _0x5d4d06 = _0x5cd62d.rules[_0x39a960];
    if (c(_0x3db727, _0x5d4d06)) {
      _0x29842c = _0x5d4d06.clip;
      break;
    }
  }
  const _0x5eaf7d = _0x29842c && _0x5cd62d.clips[_0x29842c];
  if (!_0x5eaf7d) {
    return null;
  }
  let _0x52fbb4 = 1;
  if (_0x5eaf7d.durationMs > 0 && Number.isFinite(_0x3db727.stateUntil)) {
    _0x52fbb4 = 1 - Math.max(0, Math.min(1, (_0x3db727.stateUntil - _0x1356b2) / _0x5eaf7d.durationMs));
  }
  return m(_0x1af34f, _0x29842c, _0x52fbb4);
}
export function selectActorMotionClip(_0x4665f3, _0x5c63df, _0x695843) {
  return m(_0x4665f3, _0x5c63df, _0x695843);
}
export function actorMotionSocket(_0x14911e, _0x20c3ae, _0x61160c) {
  if (!_0x14911e) {
    return null;
  }
  for (let _0x2048d9 = 0; _0x2048d9 < _0x14911e.frames.length; _0x2048d9++) {
    const _0x20736b = _0x14911e.frames[_0x2048d9];
    if (_0x20736b.index === _0x20c3ae) {
      return _0x20736b.sockets[_0x61160c] || null;
    }
  }
  return null;
}
export function actorMotionRuntimeSnapshot() {
  const _0x4c3cfe = {};
  let _0x2369f2 = 0;
  for (const _0x12dffa of _0x5a6ce6) {
    const _0x23f136 = u.get(_0x12dffa);
    _0x4c3cfe[_0x12dffa] = {
      ready: !!_0x23f136,
      atlas: _0x11ed1d[_0x12dffa].atlas,
      frames: _0x23f136?.frames.length || 0,
      onePaintedBodyMesh: true,
      immutablePreload: true,
      fallback: _0x11ed1d[_0x12dffa].fallback
    };
    _0x2369f2 += _0x23f136?.frames.length || 0;
  }
  return {
    kinds: _0x4c3cfe,
    geometries: _0x2369f2,
    textures: new Set([...u.values()].map(_0x13739e => _0x13739e.tex)).size
  };
}