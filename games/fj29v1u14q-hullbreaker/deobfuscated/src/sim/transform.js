import { CONFIG as _0x4bdb91 } from "../config.js";
import { TRANSFORM_FIXTURE as _0x3ec832, TRANSFORM_PATH as _0x47f8bf, transformAltAt as _0x13d584, transformBandIndexAt as _0x6d4481, transformEventTotalMs as _0x3cf34f, transformFrontierS as _0x33514d, transformHaltS as _0x2b781d, transformScrollOffset as _0x205291, transformSealS as _0x4b1614, transformTriggerS as _0x107f9d } from "../pure/transform.js";
import { traversalFollowTarget as _0x35da26 } from "../pure/traversal.js";
import { IS_TRANSFORM_SLICE as _0x33859b } from "../mode.js";
import { view as _0xeada8f } from "./bridge.js";
import { gameMs as _0x5a2bf9, scrollX as _0x28b6cd, setScrollX as _0x22f85e } from "./time.js";
import { EDGE_R as _0x4de837 } from "./edges.js";
import { activeScrollEnd as _0x1f9de5, activeScrollSpeed as _0x5118c1 } from "./level.js";
const x = _0x3ec832;
const v = _0x4bdb91.transform;
export const transformEvents = _0x33859b ? x.events.map((_0x15f28c, _0x4a8dfb) => ({
  ..._0x15f28c,
  index: _0x4a8dfb,
  state: "idle",
  tArm: 0,
  tStart: 0,
  scroll0: 0,
  dHaltAt: -1,
  dTriggerAt: -1,
  dArmAt: -1,
  dArmPlayerRight: 0,
  dArmHalted: 0,
  dArmByLookahead: 0,
  dStartAt: -1,
  dStartPlayerRight: 0,
  dStartScroll: 0,
  dStartTriggerMargin: 0,
  dPressedFrames: 0,
  dFinishAt: -1
})) : [];
export let committedBand = 0;
export let lastCommit = null;
export function activeTransformEvent() {
  for (const _0x592b11 of transformEvents) {
    if (_0x592b11.state !== "done") {
      return _0x592b11;
    }
  }
  return null;
}
export function transformBusy() {
  const _0x1537d1 = activeTransformEvent();
  return !!_0x1537d1 && _0x1537d1.state !== "idle";
}
export function transformTurning() {
  const _0x6f52d5 = activeTransformEvent();
  return !!_0x6f52d5 && _0x6f52d5.state === "turning";
}
export function transformFrontierX() {
  const _0x3e8067 = activeTransformEvent();
  if (_0x3e8067) {
    return _0x33514d(_0x3e8067, _0x4bdb91);
  } else {
    return Infinity;
  }
}
export function transformSealX() {
  let _0x2f5b26 = -Infinity;
  for (const _0x1ab27c of transformEvents) {
    if (_0x1ab27c.state === "done") {
      _0x2f5b26 = Math.max(_0x2f5b26, _0x4b1614(_0x1ab27c, _0x4bdb91));
    }
  }
  return _0x2f5b26;
}
export function transformAltitudeAt(_0x198f66) {
  return _0x13d584(_0x47f8bf, _0x198f66);
}
export function transformBandLabel() {
  return x.bands[committedBand].label;
}
export function transformBandLabelAt(_0x5b2431) {
  return x.bands[_0x6d4481(x, _0x5b2431)].label;
}
export function updateTransformScroll(_0x132bc3, _0x2c289a) {
  const _0x2ef32e = activeTransformEvent();
  const _0x419391 = _0x2c289a.x + _0x2c289a.hw;
  _0xeada8f.transform.frame(_0x132bc3 * 1000);
  if (_0x2ef32e && _0x2ef32e.state === "turning") {
    const _0x3adcf2 = _0x5a2bf9 - _0x2ef32e.tStart;
    _0x22f85e(Math.min(_0x2ef32e.scroll0 + _0x205291(_0x3adcf2, x.run.minimumScrollSpeed, _0x4bdb91, _0x2ef32e), _0x1f9de5()));
    _0xeada8f.transform.ritual(_0x2ef32e, _0x3adcf2);
    if (_0x3adcf2 >= _0x3cf34f(_0x4bdb91)) {
      (function (_0x19628b) {
        _0xeada8f.transform.ritual(_0x19628b, _0x3cf34f(_0x4bdb91));
        _0x19628b.state = "done";
        _0x19628b.dFinishAt = _0x5a2bf9;
        committedBand = _0x19628b.toBand;
        lastCommit = {
          ev: _0x19628b,
          at: _0x5a2bf9
        };
        _0xeada8f.transform.finished(_0x19628b);
      })(_0x2ef32e);
    }
    return false;
  }
  let _0x4f69c2 = _0x1f9de5();
  const _0x130dc9 = _0x2ef32e ? _0x107f9d(_0x2ef32e, _0x4bdb91) : 0;
  if (_0x2ef32e) {
    const _0x2b3cfb = _0x2ef32e.state === "armed" && _0x5a2bf9 - _0x2ef32e.tArm >= v.armMaxMs && _0x419391 < _0x130dc9;
    if (_0x2b3cfb) {
      _0x2ef32e.dPressedFrames++;
    }
    _0x4f69c2 = Math.min(_0x4f69c2, _0x2b3cfb ? _0x2ef32e.seamS - v.pressedOffset : _0x2b781d(_0x2ef32e, _0x4bdb91));
  }
  const _0x4c7c36 = Math.max(2, _0x4de837 - _0x4bdb91.edges.margin - x.run.lookAheadTiles);
  const _0x65c615 = Math.max(_0x28b6cd + _0x5118c1() * _0x132bc3, _0x35da26(_0x28b6cd, _0x419391, _0x4c7c36, x.run));
  _0x22f85e(Math.min(_0x65c615, _0x4f69c2));
  if (!_0x2ef32e) {
    return false;
  }
  const _0x3658d5 = _0x28b6cd >= _0x2b781d(_0x2ef32e, _0x4bdb91) - 0.000001;
  if (_0x2ef32e.dHaltAt < 0 && _0x3658d5) {
    _0x2ef32e.dHaltAt = _0x5a2bf9;
  }
  if (_0x2ef32e.dTriggerAt < 0 && _0x419391 >= _0x130dc9) {
    _0x2ef32e.dTriggerAt = _0x5a2bf9;
  }
  if (_0x2ef32e.state === "idle" && (_0x3658d5 || _0x419391 >= _0x2ef32e.seamS - v.armLookahead)) {
    _0x2ef32e.state = "armed";
    _0x2ef32e.tArm = _0x5a2bf9;
    _0x2ef32e.dArmAt = _0x5a2bf9;
    _0x2ef32e.dArmPlayerRight = _0x419391;
    _0x2ef32e.dArmHalted = _0x3658d5 ? 1 : 0;
    _0x2ef32e.dArmByLookahead = _0x419391 >= _0x2ef32e.seamS - v.armLookahead ? 1 : 0;
    _0xeada8f.transform.armed(_0x2ef32e);
  }
  return _0x2ef32e.state === "armed" && !!_0x3658d5 && !!(_0x419391 >= _0x130dc9) && (_0x2ef32e.state = "turning", _0x2ef32e.tStart = _0x5a2bf9, _0x2ef32e.scroll0 = _0x28b6cd, _0x2ef32e.dStartAt = _0x5a2bf9, _0x2ef32e.dStartPlayerRight = _0x419391, _0x2ef32e.dStartScroll = _0x28b6cd, _0x2ef32e.dStartTriggerMargin = _0x419391 - _0x130dc9, _0xeada8f.transform.started(_0x2ef32e), true);
}
export function transformDecisionTrace() {
  return transformEvents.map(_0x33af70 => ({
    id: _0x33af70.id,
    state: _0x33af70.state,
    haltAt: _0x33af70.dHaltAt,
    triggerAt: _0x33af70.dTriggerAt,
    armAt: _0x33af70.dArmAt,
    armPlayerRight: _0x33af70.dArmPlayerRight,
    armHalted: _0x33af70.dArmHalted,
    armByLookahead: _0x33af70.dArmByLookahead,
    startAt: _0x33af70.dStartAt,
    startPlayerRight: _0x33af70.dStartPlayerRight,
    startScroll: _0x33af70.dStartScroll,
    startTriggerMargin: _0x33af70.dStartTriggerMargin,
    pressedFrames: _0x33af70.dPressedFrames,
    finishAt: _0x33af70.dFinishAt,
    binding: _0x33af70.dStartAt < 0 ? null : _0x33af70.dHaltAt >= _0x33af70.dTriggerAt ? "halt" : "player"
  }));
}
export function resetTransform() {
  for (const _0x5f4a2f of transformEvents) {
    _0x5f4a2f.state = "idle";
    _0x5f4a2f.tArm = 0;
    _0x5f4a2f.tStart = 0;
    _0x5f4a2f.scroll0 = 0;
    _0x5f4a2f.dHaltAt = -1;
    _0x5f4a2f.dTriggerAt = -1;
    _0x5f4a2f.dArmAt = -1;
    _0x5f4a2f.dArmPlayerRight = 0;
    _0x5f4a2f.dArmHalted = 0;
    _0x5f4a2f.dArmByLookahead = 0;
    _0x5f4a2f.dStartAt = -1;
    _0x5f4a2f.dStartPlayerRight = 0;
    _0x5f4a2f.dStartScroll = 0;
    _0x5f4a2f.dStartTriggerMargin = 0;
    _0x5f4a2f.dPressedFrames = 0;
    _0x5f4a2f.dFinishAt = -1;
  }
  committedBand = 0;
  lastCommit = null;
  _0xeada8f.transform.reset();
}