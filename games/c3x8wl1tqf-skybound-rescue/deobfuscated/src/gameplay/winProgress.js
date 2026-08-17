import { RESCUE_RULES as _0x20d0f9 } from "../shared/contracts.js";
export function createWinProgress(_0x46a26b, _0x3e80e8) {
  const _0x57a3fc = _0x3e80e8?.events;
  const _0x20c112 = _0x3e80e8?.runReset;
  if (!_0x46a26b) {
    throw new Error("createWinProgress requires game");
  }
  if (!_0x57a3fc?.emit) {
    throw new Error("createWinProgress requires events");
  }
  if (!_0x20c112?.register) {
    throw new Error("createWinProgress requires runReset");
  }
  const _0x25587a = Number.isFinite(_0x3e80e8.spiritsTotal) ? Number(_0x3e80e8.spiritsTotal) : _0x20d0f9.spiritsTotal;
  const _0x3fb043 = Number.isFinite(_0x3e80e8.spireDeliveriesToWin) ? Number(_0x3e80e8.spireDeliveriesToWin) : _0x20d0f9.spireDeliveriesToWin;
  const _0x336861 = Number.isFinite(_0x3e80e8.spiritsThroughBeatC) ? Number(_0x3e80e8.spiritsThroughBeatC) : _0x20d0f9.spiritsThroughBeatC;
  const _0x2729a2 = typeof _0x3e80e8.getFreedCount == "function" ? _0x3e80e8.getFreedCount : typeof _0x3e80e8.rescue?.getFreedCount == "function" ? () => _0x3e80e8.rescue.getFreedCount() : () => 0;
  const _0x4a3dca = typeof _0x3e80e8.getSpireFreedCount == "function" ? _0x3e80e8.getSpireFreedCount : typeof _0x3e80e8.rescue?.getSpireFreedCount == "function" ? () => _0x3e80e8.rescue.getSpireFreedCount() : null;
  let _0x5e2bde = 0;
  let _0x21e879 = false;
  let _0x4adcad = false;
  const _0xca948 = [];
  function _0x3a4124() {
    const _0x5176dc = Number(_0x2729a2());
    if (Number.isFinite(_0x5176dc)) {
      return _0x5176dc;
    } else {
      return 0;
    }
  }
  function _0x4b3497() {
    if (_0x4a3dca) {
      const _0x231b34 = Number(_0x4a3dca());
      if (Number.isFinite(_0x231b34) && _0x231b34 >= _0x5e2bde) {
        return _0x231b34;
      }
    }
    return _0x5e2bde;
  }
  function _0x4a1ac8(_0x517a00, _0x102e0d) {
    return !(_0x102e0d < _0x3fb043) && (_0x517a00 >= _0x25587a && _0x102e0d >= _0x3fb043 || function (_0x45762c, _0x3da00c) {
      return _0x45762c >= _0x25587a || Math.max(0, _0x45762c - _0x3da00c) >= _0x336861 && _0x3da00c >= _0x3fb043 || _0x45762c >= _0x336861 + _0x3fb043 && _0x3da00c >= _0x3fb043;
    }(_0x517a00, _0x102e0d));
  }
  function _0x27dea4() {
    _0x5e2bde = 0;
    _0x21e879 = false;
  }
  (function (_0x1c4c09, _0x34058c) {
    if (typeof _0x57a3fc.on != "function") {
      return;
    }
    const _0x2ba092 = _0x57a3fc.on(_0x1c4c09, _0x34058c);
    if (typeof _0x2ba092 == "function") {
      _0xca948.push(_0x2ba092);
    }
  })("spiritFreed", function (_0x313a33) {
    if (_0x4adcad || _0x21e879) {
      return;
    }
    if (_0x46a26b.phase !== "playing") {
      return;
    }
    if (function (_0x1fc378) {
      if (!_0x1fc378 || typeof _0x1fc378 != "object") {
        return false;
      }
      const _0x33eecb = _0x1fc378;
      const _0x2d902c = typeof _0x33eecb.segment == "string" ? _0x33eecb.segment : "";
      const _0x3596a9 = typeof _0x33eecb.anchorSegment == "string" ? _0x33eecb.anchorSegment : "";
      const _0x30a3b4 = typeof _0x33eecb.anchorId == "string" ? _0x33eecb.anchorId : "";
      return _0x2d902c === "spire" || _0x3596a9 === "spire" || !!_0x30a3b4.includes("s-anchor") || !!_0x30a3b4.includes("spire");
    }(_0x313a33)) {
      _0x5e2bde += 1;
    }
    const _0xab0f95 = _0x3a4124();
    const _0x1005c2 = _0x313a33 && typeof _0x313a33 == "object" && Number.isFinite(_0x313a33.freedCount) ? Number(_0x313a33.freedCount) : _0xab0f95;
    if (_0x4a1ac8(Math.max(_0xab0f95, _0x1005c2), _0x4b3497())) {
      (function () {
        if (_0x21e879 || _0x4adcad) {
          return false;
        }
        if (_0x46a26b.phase !== "playing") {
          return false;
        }
        _0x21e879 = true;
        const _0x169536 = _0x3a4124();
        const _0x540675 = {
          spireDeliveries: _0x4b3497(),
          freedCount: _0x169536
        };
        _0x57a3fc.emit("runWon", _0x540675);
        _0x57a3fc.emit("winTriggered", _0x540675);
        try {
          _0x46a26b.probe.event?.("runWon", _0x540675);
          _0x46a26b.probe.event?.("winTriggered", _0x540675);
        } catch {}
        try {
          _0x46a26b.win();
        } catch (_0x25deeb) {
          console.warn("[winProgress] game.win failed", _0x25deeb);
        }
      })();
    }
  });
  const _0x4eec88 = _0x20c112.register("winProgress", _0x27dea4);
  try {
    _0x46a26b.probe.observe("spireDeliveries", () => _0x4b3497());
    _0x46a26b.probe.observe("won", () => _0x21e879);
  } catch {}
  const _0x463e6e = {
    getSpireDeliveryCount: () => _0x4b3497(),
    hasWon: () => _0x21e879,
    canWinNow: () => _0x4a1ac8(_0x3a4124(), _0x4b3497()),
    resetProgress: _0x27dea4,
    dispose: function () {
      if (!_0x4adcad) {
        _0x4adcad = true;
        _0x4eec88();
        for (const _0x1573dc of _0xca948) {
          try {
            _0x1573dc();
          } catch {}
        }
        _0xca948.length = 0;
      }
    }
  };
  _0x46a26b.own?.(_0x463e6e);
  return _0x463e6e;
}