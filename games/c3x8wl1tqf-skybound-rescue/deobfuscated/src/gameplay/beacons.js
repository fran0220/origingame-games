import { CHARGE_RULES as _0x36d26a, RESCUE_RULES as _0xe63059 } from "../shared/contracts.js";
function n(_0x43bf0e, _0x23cba5) {
  const _0x2beb56 = _0x43bf0e.x - _0x23cba5.x;
  const _0x3bf230 = _0x43bf0e.y - _0x23cba5.y;
  const _0x26f521 = _0x43bf0e.z - _0x23cba5.z;
  return Math.hypot(_0x2beb56, _0x3bf230, _0x26f521);
}
export function createBeaconSystem(_0x58331f, _0x2a9fe5) {
  const _0x21985e = _0x2a9fe5?.events;
  const _0x131b4d = _0x2a9fe5?.runReset;
  const _0x83198b = _0x2a9fe5?.getPlayerPos;
  const _0x4c1e52 = _0x2a9fe5?.trySpend;
  const _0x3a9582 = Array.isArray(_0x2a9fe5?.beaconSockets) ? _0x2a9fe5.beaconSockets : [];
  const _0x3b195c = Array.isArray(_0x2a9fe5?.gates) ? _0x2a9fe5.gates : [];
  if (!_0x58331f) {
    throw new Error("createBeaconSystem requires game");
  }
  if (!_0x21985e?.emit) {
    throw new Error("createBeaconSystem requires events");
  }
  if (!_0x131b4d?.register) {
    throw new Error("createBeaconSystem requires runReset");
  }
  if (typeof _0x83198b != "function") {
    throw new Error("createBeaconSystem requires getPlayerPos");
  }
  if (typeof _0x4c1e52 != "function") {
    throw new Error("createBeaconSystem requires trySpend");
  }
  const _0x26630f = _0x3a9582.filter(_0x59a944 => _0x59a944 && _0x59a944.beaconId).map(_0x54ccba => ({
    placement: _0x54ccba,
    lit: false,
    radius: Math.max(0.25, Number(_0x54ccba.radius) || _0xe63059.beaconRange)
  }));
  const _0x172ca6 = new Map();
  for (const _0x2c5045 of _0x3b195c) {
    if (_0x2c5045?.gateId) {
      _0x172ca6.set(_0x2c5045.gateId, _0x2c5045);
    }
  }
  const _0x44a055 = [];
  let _0x59a241 = false;
  function _0x4105e5() {
    if (_0x59a241 || _0x58331f.phase !== "playing") {
      return false;
    }
    const _0x4f9226 = _0x83198b();
    if (!_0x4f9226) {
      return false;
    }
    const _0x3e55db = function (_0x3ace0e) {
      let _0x2e9a5c = null;
      let _0x4375af = Infinity;
      for (const _0x14a851 of _0x26630f) {
        if (_0x14a851.lit) {
          continue;
        }
        const _0x2ddc3a = _0x14a851.placement.center;
        if (!_0x2ddc3a) {
          continue;
        }
        const _0x2df536 = n(_0x3ace0e, _0x2ddc3a);
        if (_0x2df536 <= _0x14a851.radius && _0x2df536 < _0x4375af) {
          _0x4375af = _0x2df536;
          _0x2e9a5c = _0x14a851;
        }
      }
      return _0x2e9a5c;
    }(_0x4f9226);
    return !!_0x3e55db && function (_0xd8cef9) {
      if (_0xd8cef9.lit) {
        return false;
      }
      if (!_0x4c1e52(_0x36d26a.beaconCost)) {
        return false;
      }
      _0xd8cef9.lit = true;
      if (!_0x44a055.includes(_0xd8cef9.placement.beaconId)) {
        _0x44a055.push(_0xd8cef9.placement.beaconId);
      }
      try {
        _0xd8cef9.placement.setLitVisual?.(true);
      } catch (_0x3b493c) {
        console.warn("[beacons] setLitVisual", _0xd8cef9.placement.beaconId, _0x3b493c);
      }
      const _0x4654f2 = _0xd8cef9.placement.gateId;
      const _0x34854c = _0x4654f2 ? _0x172ca6.get(_0x4654f2) : null;
      if (_0x34854c) {
        try {
          _0x34854c.enablePad?.();
        } catch (_0x3c22b0) {
          console.warn("[beacons] enablePad", _0x4654f2, _0x3c22b0);
        }
      }
      _0x21985e.emit("beaconLit", {
        beaconId: _0xd8cef9.placement.beaconId,
        gateId: _0x4654f2 ?? null,
        segment: _0xd8cef9.placement.segment,
        center: _0xd8cef9.placement.center ? {
          ..._0xd8cef9.placement.center
        } : undefined
      });
      if (_0x4654f2) {
        const _0x1a2eac = _0x34854c?.lockedPadCenter;
        _0x21985e.emit("gateOpened", {
          gateId: _0x4654f2,
          beaconId: _0xd8cef9.placement.beaconId,
          segment: _0x34854c?.segment ?? _0xd8cef9.placement.segment,
          center: _0x1a2eac ? {
            ..._0x1a2eac
          } : undefined,
          lockedPadCenter: _0x1a2eac ? {
            ..._0x1a2eac
          } : undefined
        });
      }
      try {
        _0x58331f.probe.event?.("beaconLit", {
          beaconId: _0xd8cef9.placement.beaconId,
          gateId: _0x4654f2
        });
      } catch {}
      return true;
    }(_0x3e55db);
  }
  _0x58331f.input.bind("beacon", ["KeyQ"]);
  const _0x52ca2d = _0x58331f.input.onPressed("beacon", () => {
    _0x4105e5();
  });
  const _0x5b202d = _0x131b4d.register("beacons", function () {
    _0x44a055.length = 0;
    for (const _0x578f68 of _0x26630f) {
      _0x578f68.lit = false;
      try {
        _0x578f68.placement.setLitVisual?.(false);
      } catch {}
    }
    for (const _0x1eb114 of _0x172ca6.values()) {
      try {
        _0x1eb114.disablePad?.();
      } catch {}
    }
  });
  try {
    _0x58331f.probe.observe("beaconsLit", () => _0x44a055.length);
  } catch {}
  const _0x1ce8c3 = {
    sockets: _0x26630f,
    beaconsLit: _0x44a055,
    tryLightNearest: _0x4105e5,
    getBeaconTarget: function () {
      if (_0x59a241) {
        return null;
      }
      if (_0x58331f.phase !== "playing" && _0x58331f.phase !== "paused") {
        return null;
      }
      const _0x4532a1 = _0x83198b();
      if (!_0x4532a1) {
        return null;
      }
      let _0x4c6663 = null;
      let _0x4f2b75 = Infinity;
      for (const _0x3f8ae5 of _0x26630f) {
        if (_0x3f8ae5.lit) {
          continue;
        }
        const _0x5bc8eb = _0x3f8ae5.placement.center;
        if (!_0x5bc8eb) {
          continue;
        }
        const _0x38f980 = n(_0x4532a1, _0x5bc8eb);
        if (_0x38f980 <= _0x3f8ae5.radius && _0x38f980 < _0x4f2b75) {
          _0x4f2b75 = _0x38f980;
          _0x4c6663 = _0x3f8ae5;
        }
      }
      if (_0x4c6663) {
        return {
          id: _0x4c6663.placement.beaconId,
          beaconId: _0x4c6663.placement.beaconId,
          gateId: _0x4c6663.placement.gateId ?? null,
          inRange: true,
          dist: _0x4f2b75
        };
      } else {
        return null;
      }
    },
    getBeaconsLitCount: () => _0x44a055.length,
    dispose: function () {
      if (!_0x59a241) {
        _0x59a241 = true;
        _0x52ca2d();
        _0x5b202d();
      }
    }
  };
  _0x58331f.own?.(_0x1ce8c3);
  return _0x1ce8c3;
}