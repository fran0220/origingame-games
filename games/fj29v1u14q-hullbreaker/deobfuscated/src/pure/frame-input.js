export const FRAME_INPUT_VERSION = 1;
export const GAMEPLAY_KEYMAP = Object.freeze({
  ArrowLeft: "left",
  KeyA: "left",
  ArrowRight: "right",
  KeyD: "right",
  ArrowUp: "up",
  KeyW: "up",
  ArrowDown: "down",
  KeyS: "down",
  Space: "jump",
  KeyK: "jump",
  KeyJ: "fire",
  KeyX: "fire",
  ShiftLeft: "strafe",
  ShiftRight: "strafe",
  KeyC: "swap",
  KeyL: "hook",
  KeyE: "hook"
});
export const GAMEPLAY_CODES = Object.freeze(Object.keys(GAMEPLAY_KEYMAP));
export function gameMsToInputTick(_0x20a65d, _0x53d5b5) {
  if (!Number.isFinite(_0x20a65d) || _0x20a65d < 0) {
    throw new Error("frame input timestamp must be a finite non-negative number, got " + _0x20a65d);
  }
  if (!Number.isFinite(_0x53d5b5) || _0x53d5b5 <= 0) {
    throw new Error("frame input requires a positive fixed timestep, got " + _0x53d5b5);
  }
  return Math.max(0, Math.ceil(_0x20a65d / _0x53d5b5 - 1e-7));
}
export function createFrameInputTimeline({
  events: _0x1c5324,
  fixedDtMs: _0x16c1f5,
  stopAtMs: _0x406128,
  applyEdge: _0x4e5494
}) {
  if (typeof _0x4e5494 != "function") {
    throw new Error("frame input needs an applyEdge callback");
  }
  const _0x3e80fc = function (_0x1a7940, _0x5e77a9) {
    if (!Array.isArray(_0x1a7940)) {
      throw new Error("frame input events must be an array");
    }
    return _0x1a7940.map((_0x24a058, _0x3c43a4) => {
      const _0x80b6de = Number(_0x24a058 && _0x24a058.t);
      const _0x17ad6f = _0x24a058 && _0x24a058.type;
      const _0x576edf = _0x24a058 && _0x24a058.code;
      if (_0x17ad6f !== "keydown" && _0x17ad6f !== "keyup") {
        throw new Error("frame input event " + _0x3c43a4 + " has invalid type \"" + _0x17ad6f + "\"");
      }
      if (!(_0x576edf in GAMEPLAY_KEYMAP)) {
        throw new Error("frame input event " + _0x3c43a4 + " uses non-gameplay code \"" + _0x576edf + "\"");
      }
      return {
        t: _0x80b6de,
        type: _0x17ad6f,
        code: _0x576edf,
        sourceIndex: _0x3c43a4,
        tick: gameMsToInputTick(_0x80b6de, _0x5e77a9)
      };
    }).sort((_0x5e515b, _0x4283b6) => _0x5e515b.tick - _0x4283b6.tick || _0x5e515b.t - _0x4283b6.t || (_0x5e515b.type === _0x4283b6.type ? _0x5e515b.sourceIndex - _0x4283b6.sourceIndex : _0x5e515b.type === "keyup" ? -1 : 1));
  }(_0x1c5324, _0x16c1f5);
  const _0x285edd = Number(_0x406128);
  if (!Number.isFinite(_0x285edd) || _0x285edd < 0) {
    throw new Error("frame input stopAtMs must be finite and non-negative, got " + _0x406128);
  }
  const _0xc207b5 = gameMsToInputTick(_0x285edd, _0x16c1f5);
  const _0x17fffd = _0x3e80fc.map(_0x5a011a => ({
    t: _0x5a011a.t,
    type: _0x5a011a.type,
    code: _0x5a011a.code,
    scheduledTick: _0x5a011a.tick,
    actualDispatchTick: null,
    actualDispatchGameMs: null,
    gameMsJitterMs: null,
    dispatchedVia: null
  }));
  const _0x5c664e = new Set();
  const _0x5a3566 = [];
  let _0x3316c6 = 0;
  let _0x440859 = 0;
  let _0x1f2613 = false;
  return Object.freeze({
    beforeUpdate: function (_0x365c13) {
      if (_0x1f2613) {
        return false;
      }
      while (_0x3316c6 < _0x3e80fc.length && _0x3e80fc[_0x3316c6].tick <= _0x440859) {
        const _0x5be819 = _0x3e80fc[_0x3316c6];
        _0x4e5494(_0x5be819.code, _0x5be819.type, false);
        if (_0x5be819.type === "keydown") {
          _0x5c664e.add(_0x5be819.code);
        } else {
          _0x5c664e.delete(_0x5be819.code);
        }
        Object.assign(_0x17fffd[_0x3316c6], {
          actualDispatchTick: _0x440859,
          actualDispatchGameMs: _0x365c13,
          gameMsJitterMs: +(_0x365c13 - _0x5be819.t).toFixed(4),
          dispatchedVia: "frame"
        });
        _0x3316c6++;
      }
      return !(_0x440859 >= _0xc207b5) || (_0x1f2613 = true, false);
    },
    afterUpdate: function () {
      _0x440859++;
    },
    reassertHeld: function (_0x22d818) {
      if (_0x5c664e.size === 0) {
        return;
      }
      const _0x3770a3 = [..._0x5c664e];
      for (const _0x117a87 of _0x3770a3) {
        _0x4e5494(_0x117a87, "keydown", true);
      }
      _0x5a3566.push({
        tick: _0x440859,
        gameMs: _0x22d818,
        codes: _0x3770a3
      });
    },
    snapshot: function () {
      return {
        version: 1,
        status: _0x1f2613 ? "complete" : "running",
        fixedDtMs: _0x16c1f5,
        tick: _0x440859,
        stopAtMs: _0x285edd,
        stopTick: _0xc207b5,
        nextEvent: _0x3316c6,
        eventCount: _0x3e80fc.length,
        heldCodes: [..._0x5c664e],
        events: _0x17fffd.map(_0x3f72ea => ({
          ..._0x3f72ea
        })),
        reassertions: _0x5a3566.map(_0x28e616 => ({
          ..._0x28e616,
          codes: [..._0x28e616.codes]
        }))
      };
    }
  });
}