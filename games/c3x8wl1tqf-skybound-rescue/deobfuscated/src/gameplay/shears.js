import { CHARGE_RULES as _0x579207 } from "../shared/contracts.js";
function o(_0x456804, _0x52770d) {
  const _0x3f3167 = _0x52770d.center;
  const _0x293e72 = _0x52770d.halfExtents;
  if (!_0x3f3167 || !_0x293e72) {
    return false;
  }
  const _0x584415 = Math.max(0.05, Number(_0x293e72.x) || 0.5);
  const _0x2812ed = Math.max(0.05, Number(_0x293e72.y) || 0.5);
  const _0x258653 = Math.max(0.05, Number(_0x293e72.z) || 0.5);
  return Math.abs(_0x456804.x - _0x3f3167.x) <= _0x584415 && Math.abs(_0x456804.y - _0x3f3167.y) <= _0x2812ed && Math.abs(_0x456804.z - _0x3f3167.z) <= _0x258653;
}
function t(_0x321a19, _0x3ab223, _0x5b1d99) {
  const _0x191104 = Number(_0x3ab223?.x) || 0;
  const _0xa682e2 = Number(_0x3ab223?.y) || 0;
  const _0x3404fe = Number(_0x3ab223?.z) || 0;
  if (_0x191104 === 0 && _0xa682e2 === 0 && _0x3404fe === 0) {
    return "none";
  }
  const _0x12e795 = _0x321a19?.controller;
  if (!_0x12e795) {
    _0x5b1d99.x += _0x191104;
    _0x5b1d99.y += _0xa682e2;
    _0x5b1d99.z += _0x3404fe;
    return "motor-move";
  }
  const _0x29271d = _0x12e795.motor?.body ?? _0x12e795.body;
  if (_0x29271d && typeof _0x29271d.linvel == "function" && typeof _0x29271d.setLinvel == "function") {
    try {
      const _0x5142f1 = _0x29271d.linvel();
      _0x29271d.setLinvel({
        x: (_0x5142f1.x || 0) + _0x191104,
        y: (_0x5142f1.y || 0) + _0xa682e2,
        z: (_0x5142f1.z || 0) + _0x3404fe
      }, true);
      return "linvel";
    } catch {}
  }
  let _0x2e174b = "none";
  const _0x3f7262 = _0x12e795.locomotion;
  if (_0x3f7262?.velocity && typeof _0x3f7262.velocity.x == "number") {
    _0x3f7262.velocity.x += _0x191104;
    _0x3f7262.velocity.z += _0x3404fe;
    _0x2e174b = "locomotion-velocity";
  }
  if (_0xa682e2 !== 0) {
    try {
      Object.getOwnPropertyDescriptor(Object.getPrototypeOf(_0x12e795), "verticalSpeed");
      _0x12e795.verticalSpeed;
    } catch {}
    _0x5b1d99.y += _0xa682e2;
    if (_0x2e174b === "none") {
      _0x2e174b = "motor-move";
    }
  }
  _0x5b1d99.x += _0x191104 * 0.35;
  _0x5b1d99.z += _0x3404fe * 0.35;
  if (_0x2e174b === "none") {
    _0x5b1d99.x += _0x191104;
    _0x5b1d99.z += _0x3404fe;
    _0x2e174b = "motor-move";
  }
  return _0x2e174b;
}
export function createShearSystem(_0x2d7be9, _0x386beb) {
  const _0x5d48c4 = _0x386beb?.events;
  const _0xa25869 = _0x386beb?.runReset;
  const _0x159e45 = _0x386beb?.warden;
  const _0x519505 = Array.isArray(_0x386beb?.shears) ? _0x386beb.shears : [];
  const _0x4d852b = _0x386beb?.applyLateralImpulse;
  if (!_0x2d7be9) {
    throw new Error("createShearSystem requires game");
  }
  if (!_0x5d48c4?.emit) {
    throw new Error("createShearSystem requires events");
  }
  if (!_0xa25869?.register) {
    throw new Error("createShearSystem requires runReset");
  }
  if (!_0x159e45?.footRoot && typeof _0x386beb?.getPlayerPos != "function") {
    throw new Error("createShearSystem requires warden or getPlayerPos");
  }
  const _0x1dff89 = _0x579207.shearCooldownS;
  const _0x52cc84 = _0x519505.filter(_0x478a05 => _0x478a05 && _0x478a05.shearId).map(_0xce5028 => ({
    placement: _0xce5028,
    cooldown: 0,
    triggeredThisAir: false,
    wasInside: false
  }));
  const _0x1a67eb = {
    x: 0,
    y: 0,
    z: 0
  };
  let _0x14f848 = "none";
  let _0x4353f4 = false;
  let _0x23a892 = true;
  function _0x481bcf() {
    _0x1a67eb.x = 0;
    _0x1a67eb.y = 0;
    _0x1a67eb.z = 0;
  }
  const _0x31546c = _0xa25869.register("shears", function () {
    for (const _0x23c1ae of _0x52cc84) {
      _0x23c1ae.cooldown = 0;
      _0x23c1ae.triggeredThisAir = false;
      _0x23c1ae.wasInside = false;
    }
    _0x481bcf();
    _0x23a892 = true;
  });
  const _0x4cbe2d = _0x2d7be9.loop.onFixedUpdate(_0x28667f => {
    if (_0x4353f4 || _0x2d7be9.phase !== "playing") {
      return;
    }
    const _0xb831f2 = typeof _0x386beb.getGrounded == "function" ? Boolean(_0x386beb.getGrounded()) : typeof _0x159e45.getGrounded == "function" ? Boolean(_0x159e45.getGrounded()) : Boolean(_0x159e45.controller?.grounded);
    if (_0xb831f2 && !_0x23a892) {
      for (const _0x1f467c of _0x52cc84) {
        _0x1f467c.triggeredThisAir = false;
      }
      _0x481bcf();
    }
    _0x23a892 = _0xb831f2;
    if (_0x1a67eb.x * _0x1a67eb.x + _0x1a67eb.y * _0x1a67eb.y + _0x1a67eb.z * _0x1a67eb.z > 1e-8) {
      const _0x7edca4 = _0x159e45?.controller?.motor;
      if (_0x7edca4 && typeof _0x7edca4.move == "function") {
        try {
          _0x7edca4.move({
            x: _0x1a67eb.x * _0x28667f,
            y: _0x1a67eb.y * _0x28667f,
            z: _0x1a67eb.z * _0x28667f
          });
        } catch {}
      }
      const _0x4f307e = Math.exp(_0x28667f * -10);
      _0x1a67eb.x *= _0x4f307e;
      _0x1a67eb.y *= _0x4f307e;
      _0x1a67eb.z *= _0x4f307e;
      if (Math.abs(_0x1a67eb.x) < 0.05) {
        _0x1a67eb.x = 0;
      }
      if (Math.abs(_0x1a67eb.y) < 0.05) {
        _0x1a67eb.y = 0;
      }
      if (Math.abs(_0x1a67eb.z) < 0.05) {
        _0x1a67eb.z = 0;
      }
    }
    for (const _0x102abb of _0x52cc84) {
      if (_0x102abb.cooldown > 0) {
        _0x102abb.cooldown = Math.max(0, _0x102abb.cooldown - _0x28667f);
      }
    }
    if (_0xb831f2) {
      for (const _0x8ad301 of _0x52cc84) {
        _0x8ad301.wasInside = false;
      }
      return;
    }
    const _0x25bd06 = function () {
      if (typeof _0x386beb.getPlayerPos == "function") {
        return _0x386beb.getPlayerPos();
      }
      const _0x4e067e = _0x159e45.footRoot.position;
      return {
        x: _0x4e067e.x,
        y: _0x4e067e.y,
        z: _0x4e067e.z
      };
    }();
    if (_0x25bd06) {
      for (const _0x1c825d of _0x52cc84) {
        const _0x269954 = o(_0x25bd06, _0x1c825d.placement);
        const _0x5108f2 = _0x269954 && !_0x1c825d.wasInside;
        _0x1c825d.wasInside = _0x269954;
        if (!_0x269954) {
          continue;
        }
        if (_0x1c825d.triggeredThisAir) {
          continue;
        }
        if (_0x1c825d.cooldown > 0) {
          continue;
        }
        if (!_0x5108f2 && !_0x269954) {
          continue;
        }
        const _0x2d48c5 = _0x1c825d.placement.impulse || {
          x: 0,
          y: 0,
          z: 0
        };
        if (typeof _0x4d852b == "function") {
          _0x4d852b(_0x2d48c5);
          _0x14f848 = "external";
        } else {
          _0x14f848 = t(_0x159e45, _0x2d48c5, _0x1a67eb);
        }
        _0x1c825d.triggeredThisAir = true;
        const _0x4c3c11 = Number.isFinite(_0x1c825d.placement.cooldown) ? Number(_0x1c825d.placement.cooldown) : _0x1dff89;
        _0x1c825d.cooldown = Math.max(0.05, _0x4c3c11);
        _0x5d48c4.emit("shearTriggered", {
          shearId: _0x1c825d.placement.shearId,
          impulse: {
            x: _0x2d48c5.x,
            y: _0x2d48c5.y,
            z: _0x2d48c5.z
          },
          mode: _0x14f848,
          segment: _0x1c825d.placement.segment,
          center: _0x1c825d.placement.center ? {
            ..._0x1c825d.placement.center
          } : undefined
        });
      }
    }
  }, -79);
  const _0x5c8e8f = {
    volumes: _0x52cc84,
    get lastImpulseMode() {
      return _0x14f848;
    },
    dispose: function () {
      if (!_0x4353f4) {
        _0x4353f4 = true;
        _0x4cbe2d();
        _0x31546c();
        _0x481bcf();
      }
    }
  };
  _0x2d7be9.own?.(_0x5c8e8f);
  return _0x5c8e8f;
}