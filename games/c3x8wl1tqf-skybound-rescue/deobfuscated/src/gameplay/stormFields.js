function e(_0x5dfc6c, _0x2b6d9f) {
  const _0x4e939a = _0x2b6d9f.center;
  const _0x1c584f = _0x2b6d9f.halfExtents;
  if (!_0x4e939a || !_0x1c584f) {
    return false;
  }
  const _0x1a5176 = Math.max(0.05, Number(_0x1c584f.x) || 0.5);
  const _0x5105fc = Math.max(0.05, Number(_0x1c584f.y) || 0.5);
  const _0x33d853 = Math.max(0.05, Number(_0x1c584f.z) || 0.5);
  return Math.abs(_0x5dfc6c.x - _0x4e939a.x) <= _0x1a5176 && Math.abs(_0x5dfc6c.y - _0x4e939a.y) <= _0x5105fc && Math.abs(_0x5dfc6c.z - _0x4e939a.z) <= _0x33d853;
}
export function createStormFieldSystem(_0x452946, _0xb7ac41) {
  const _0x401fc6 = _0xb7ac41?.events;
  const _0x419118 = _0xb7ac41?.runReset;
  const _0x5a3076 = _0xb7ac41?.warden;
  const _0xd3da1d = _0xb7ac41?.getPlayerPos;
  const _0x4a0cdb = Array.isArray(_0xb7ac41?.stormFields) ? _0xb7ac41.stormFields : [];
  if (!_0x452946) {
    throw new Error("createStormFieldSystem requires game");
  }
  if (!_0x401fc6?.emit) {
    throw new Error("createStormFieldSystem requires events");
  }
  if (!_0x419118?.register) {
    throw new Error("createStormFieldSystem requires runReset");
  }
  if (typeof _0xd3da1d != "function") {
    throw new Error("createStormFieldSystem requires getPlayerPos");
  }
  const _0x1611e0 = _0x4a0cdb.filter(_0xa9876 => _0xa9876 && _0xa9876.fieldId);
  let _0xb496ab = false;
  let _0x58a1b6 = null;
  let _0x2bb985 = false;
  const _0x20f24d = typeof _0x5a3076?.setAxisMirror == "function";
  function _0x1639ee(_0x3de405) {
    if (_0x20f24d) {
      _0x5a3076.setAxisMirror(_0x3de405);
    }
  }
  function _0x44161b(_0x2097d8 = "leave") {
    if (!_0xb496ab) {
      return;
    }
    const _0xef8647 = _0x58a1b6;
    _0xb496ab = false;
    _0x58a1b6 = null;
    _0x1639ee(false);
    _0x401fc6.emit("stormExit", {
      fieldId: _0xef8647,
      reason: _0x2097d8
    });
    try {
      _0x452946.probe.event?.("stormExit", {
        fieldId: _0xef8647,
        reason: _0x2097d8
      });
    } catch {}
  }
  if (!_0x20f24d) {
    console.warn("[stormFields] warden.setAxisMirror missing; interference will no-op axis mirror");
  }
  const _0x14f090 = _0x419118.register("storms", function () {
    if (_0xb496ab) {
      _0x44161b("reset");
    }
    _0xb496ab = false;
    _0x58a1b6 = null;
    _0x1639ee(false);
  });
  try {
    _0x452946.probe.observe("interference", () => _0xb496ab);
  } catch {}
  const _0x5b00c0 = _0x452946.loop.onFixedUpdate(() => {
    if (_0x2bb985 || _0x452946.phase !== "playing") {
      if (_0xb496ab && _0x452946.phase !== "playing") {
        if (_0x452946.phase === "paused") {
          return;
        }
        _0x44161b("phase");
      }
      return;
    }
    const _0x4caeef = _0xd3da1d();
    if (!_0x4caeef) {
      return;
    }
    let _0x1f5b62 = null;
    for (const _0x247dff of _0x1611e0) {
      if (e(_0x4caeef, _0x247dff)) {
        _0x1f5b62 = _0x247dff;
        break;
      }
    }
    if (_0x1f5b62) {
      if (!_0xb496ab || _0x58a1b6 !== _0x1f5b62.fieldId) {
        if (_0xb496ab) {
          _0x44161b("switch");
        }
        (function (_0x20fae9) {
          _0xb496ab = true;
          _0x58a1b6 = _0x20fae9.fieldId;
          _0x1639ee(true);
          _0x401fc6.emit("stormEnter", {
            fieldId: _0x20fae9.fieldId,
            segment: _0x20fae9.segment,
            center: _0x20fae9.center ? {
              ..._0x20fae9.center
            } : undefined
          });
          try {
            _0x452946.probe.event?.("stormEnter", {
              fieldId: _0x20fae9.fieldId
            });
          } catch {}
        })(_0x1f5b62);
      }
    } else if (_0xb496ab) {
      _0x44161b("leave");
    }
  }, -85);
  const _0x308859 = {
    isInterfering: () => _0xb496ab,
    getActiveFieldId: () => _0x58a1b6,
    dispose: function () {
      if (!_0x2bb985) {
        _0x2bb985 = true;
        _0x5b00c0();
        _0x14f090();
        if (_0xb496ab) {
          _0xb496ab = false;
          _0x1639ee(false);
        }
      }
    }
  };
  _0x452946.own?.(_0x308859);
  return _0x308859;
}