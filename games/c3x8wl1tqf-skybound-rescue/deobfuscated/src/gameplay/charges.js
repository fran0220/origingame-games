import { CHARGE_RULES as _0x240f7b } from "../shared/contracts.js";
export function createChargeSystem(_0x2f931e, _0x591d76) {
  const _0xa0bb21 = _0x591d76?.events;
  const _0xaed8d8 = _0x591d76?.runReset;
  const _0x5482ca = _0x591d76?.getPlayerPos;
  const _0x55712d = Array.isArray(_0x591d76?.rests) ? _0x591d76.rests : [];
  const _0x203ead = Array.isArray(_0x591d76?.pickups) ? _0x591d76.pickups : [];
  if (!_0x2f931e) {
    throw new Error("createChargeSystem requires game");
  }
  if (!_0xa0bb21?.emit) {
    throw new Error("createChargeSystem requires events");
  }
  if (!_0xaed8d8?.register) {
    throw new Error("createChargeSystem requires runReset");
  }
  if (typeof _0x5482ca != "function") {
    throw new Error("createChargeSystem requires getPlayerPos");
  }
  const _0x2d032e = _0x240f7b.cap;
  const _0x4b44b1 = _0x240f7b.start;
  const _0x2c6090 = {
    charges: _0x4b44b1
  };
  const _0x49da48 = new Set();
  const _0x479921 = new Set();
  const _0x4e96f9 = new Map();
  for (const _0xf9d851 of _0x203ead) {
    if (_0xf9d851?.propRoot) {
      _0x4e96f9.set(_0xf9d851.pickupId, _0xf9d851.propRoot.visible !== false);
    }
  }
  let _0x542e7f = false;
  function _0x5903cc(_0x16a49a, _0x27ca9e = _0x2c6090.charges) {
    _0xa0bb21.emit("chargeChanged", {
      charges: _0x2c6090.charges,
      previous: _0x27ca9e,
      max: _0x2d032e,
      reason: _0x16a49a
    });
  }
  function _0x22c79f(_0x2ccb8f, _0x1db9b8 = "restore") {
    const _0x569e8a = _0x2c6090.charges;
    if (_0x2ccb8f === "full") {
      _0x2c6090.charges = _0x2d032e;
    } else {
      const _0xf5050a = Math.max(0, Number(_0x2ccb8f) || 0);
      _0x2c6090.charges = Math.min(_0x2d032e, _0x2c6090.charges + _0xf5050a);
    }
    if (_0x2c6090.charges !== _0x569e8a) {
      _0xa0bb21.emit("chargeRestored", {
        charges: _0x2c6090.charges,
        max: _0x2d032e,
        amount: _0x2ccb8f === "full" ? "full" : _0x2c6090.charges - _0x569e8a,
        reason: _0x1db9b8
      });
      _0x5903cc(_0x1db9b8, _0x569e8a);
    }
  }
  const _0xa555cb = _0xaed8d8.register("charges", function () {
    const _0x54d9b9 = _0x2c6090.charges;
    _0x2c6090.charges = _0x4b44b1;
    _0x49da48.clear();
    _0x479921.clear();
    for (const _0x27521f of _0x203ead) {
      if (_0x27521f?.propRoot) {
        const _0x55b1b4 = !_0x4e96f9.has(_0x27521f.pickupId) || _0x4e96f9.get(_0x27521f.pickupId);
        _0x27521f.propRoot.visible = Boolean(_0x55b1b4);
      }
    }
    _0x5903cc("reset", _0x54d9b9);
  });
  try {
    _0x2f931e.probe.observe("charges", () => _0x2c6090.charges);
  } catch {}
  const _0x434fad = _0x2f931e.loop.onFixedUpdate(() => {
    if (_0x542e7f || _0x2f931e.phase !== "playing") {
      return;
    }
    const _0x43e531 = _0x5482ca();
    if (_0x43e531 && Number.isFinite(_0x43e531.x)) {
      for (const _0x589a3d of _0x55712d) {
        if (!_0x589a3d?.restId || _0x49da48.has(_0x589a3d.restId)) {
          continue;
        }
        const _0x3107d5 = _0x589a3d.center;
        if (!_0x3107d5) {
          continue;
        }
        const _0x1f818f = Math.max(0.15, Number(_0x589a3d.radius) || 1.2);
        const _0x8f3f0d = _0x43e531.x - _0x3107d5.x;
        const _0x497413 = _0x43e531.y - _0x3107d5.y;
        const _0xc3180 = _0x43e531.z - _0x3107d5.z;
        if (_0x8f3f0d * _0x8f3f0d + _0x497413 * _0x497413 + _0xc3180 * _0xc3180 <= _0x1f818f * _0x1f818f) {
          _0x49da48.add(_0x589a3d.restId);
          _0x22c79f(_0x589a3d.restore === "full" ? "full" : Number(_0x589a3d.restore) || 1, "rest:" + _0x589a3d.restId);
        }
      }
      for (const _0x5e3f2a of _0x203ead) {
        if (!_0x5e3f2a?.pickupId || _0x479921.has(_0x5e3f2a.pickupId)) {
          continue;
        }
        const _0x4d8ad5 = _0x5e3f2a.center;
        if (!_0x4d8ad5) {
          continue;
        }
        const _0x2a8908 = Math.max(0.12, Number(_0x5e3f2a.radius) || 0.9);
        const _0x34ed23 = _0x43e531.x - _0x4d8ad5.x;
        const _0x31b7c4 = _0x43e531.y - _0x4d8ad5.y;
        const _0x2e8eae = _0x43e531.z - _0x4d8ad5.z;
        if (_0x34ed23 * _0x34ed23 + _0x31b7c4 * _0x31b7c4 + _0x2e8eae * _0x2e8eae <= _0x2a8908 * _0x2a8908) {
          _0x479921.add(_0x5e3f2a.pickupId);
          if (_0x5e3f2a.propRoot) {
            _0x5e3f2a.propRoot.visible = false;
          }
          _0x22c79f(Math.max(1, Math.floor(Number(_0x5e3f2a.amount) || 1)), "pickup:" + _0x5e3f2a.pickupId);
        }
      }
    }
  }, 5);
  const _0x20888d = {
    getCharges: function () {
      return _0x2c6090.charges;
    },
    canSpend: function (_0x1ca1be = 1) {
      const _0x4c0c37 = Math.max(0, Number(_0x1ca1be) || 0);
      return _0x2c6090.charges >= _0x4c0c37;
    },
    trySpend: function (_0x319a05 = _0x240f7b.stabilizeCost) {
      const _0x5bc178 = Math.max(0, Math.floor(Number(_0x319a05) || 0));
      if (_0x5bc178 <= 0) {
        return true;
      }
      if (_0x2c6090.charges < _0x5bc178) {
        return false;
      }
      const _0x4545da = _0x2c6090.charges;
      _0x2c6090.charges -= _0x5bc178;
      _0x5903cc("spend", _0x4545da);
      return true;
    },
    restore: _0x22c79f,
    dispose: function () {
      if (!_0x542e7f) {
        _0x542e7f = true;
        _0x434fad();
        _0xa555cb();
      }
    },
    get charges() {
      return _0x2c6090.charges;
    },
    get max() {
      return _0x2d032e;
    }
  };
  _0x2f931e.own?.(_0x20888d);
  return _0x20888d;
}