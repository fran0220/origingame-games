import * as _0x24d276 from "three";
import { createGroundedCharacterController as _0x2ac67c, createActorBinding as _0x452ca5 } from "og-engine";
import { ASSET_PATHS as _0x34563e, RESCUE_RULES as _0x32881d } from "../shared/contracts.js";
const i = "warden-rogue-hooded";
const a = "warden-movement-advanced";
const s = _0x32881d.baseJumpSpeed;
const l = _0x32881d.baseMoveSpeed;
export async function createWarden(_0x2648aa, _0x107729, _0x3996e4) {
  if (!_0x2648aa) {
    throw new Error("createWarden requires game");
  }
  if (!_0x107729?.RAPIER) {
    throw new Error("createWarden requires physics adapter");
  }
  if (!_0x3996e4?.spawnFoot || !Array.isArray(_0x3996e4.supportColliders)) {
    throw new Error("createWarden requires FoundationWorld with spawnFoot and supportColliders");
  }
  if (_0x3996e4.supportColliders.length === 0) {
    throw new Error("createWarden requires at least one foundation.supportColliders entry");
  }
  const _0x2e066d = {
    position: {
      x: Number(_0x3996e4.spawnFoot.position.x) || 0,
      y: Number(_0x3996e4.spawnFoot.position.y) || 0,
      z: Number(_0x3996e4.spawnFoot.position.z) || 0
    },
    yaw: Number(_0x3996e4.spawnFoot.yaw) || 0
  };
  const _0x54ce30 = new _0x24d276.Group();
  _0x54ce30.name = "warden-foot";
  _0x54ce30.position.set(_0x2e066d.position.x, _0x2e066d.position.y, _0x2e066d.position.z);
  _0x54ce30.rotation.order = "YXZ";
  _0x54ce30.rotation.y = _0x2e066d.yaw;
  _0x2648aa.scene.add(_0x54ce30);
  await _0x2648aa.assets.load([{
    id: i,
    url: _0x34563e.warden,
    type: "gltf"
  }]);
  let _0x3d5d3d = [];
  try {
    await _0x2648aa.assets.load([{
      id: a,
      url: _0x34563e.wardenAnims,
      type: "gltf"
    }]);
    _0x3d5d3d = _0x2648aa.assets.clipNames(a) ?? [];
  } catch {
    _0x3d5d3d = [];
  }
  let _0x391999 = null;
  try {
    _0x391999 = _0x2648aa.assets.spawn(i, {
      targetHeight: 1.7
    });
    _0x391999.root.name = "warden-visual";
    _0x54ce30.add(_0x391999.root);
  } catch (_0x3b31f5) {
    console.warn("[warden] spawn Rogue_Hooded failed; continuing with foot-only controller", _0x3b31f5);
    _0x391999 = null;
  }
  const _0x325cdd = _0x391999?.clips?.slice?.() ?? _0x2648aa.assets.clipNames(i) ?? [];
  const _0x433469 = function (_0x55e56a) {
    const _0x48fdcd = (Array.isArray(_0x55e56a) ? _0x55e56a.filter(_0x5303d1 => typeof _0x5303d1 == "string") : []).map(_0x4e41a0 => ({
      raw: _0x4e41a0,
      key: _0x4e41a0.toLowerCase()
    }));
    const _0x45c00a = (..._0x2dc850) => {
      for (const _0x3eb115 of _0x2dc850) {
        const _0x1ae51b = _0x48fdcd.find(_0x57d400 => _0x57d400.key.includes(_0x3eb115));
        if (_0x1ae51b) {
          return _0x1ae51b.raw;
        }
      }
      return null;
    };
    return {
      idle: _0x45c00a("idle", "stand", "breath"),
      walk: _0x45c00a("walk", "run", "jog", "move", "locomotion")
    };
  }(_0x325cdd.length > 0 ? _0x325cdd : _0x3d5d3d);
  let _0x148276 = null;
  const _0x400dc0 = {};
  if (_0x391999 && _0x433469.idle && _0x325cdd.includes(_0x433469.idle)) {
    _0x400dc0.idle = _0x433469.idle;
  }
  if (_0x391999 && _0x433469.walk && _0x325cdd.includes(_0x433469.walk)) {
    _0x400dc0.walk = _0x433469.walk;
  }
  if (_0x391999 && (_0x400dc0.idle || _0x400dc0.walk)) {
    if (!_0x400dc0.idle && _0x400dc0.walk) {
      _0x400dc0.idle = _0x400dc0.walk;
    }
    if (!_0x400dc0.walk && _0x400dc0.idle) {
      _0x400dc0.walk = _0x400dc0.idle;
    }
    _0x148276 = _0x452ca5(_0x391999, {
      game: _0x2648aa,
      clips: _0x400dc0,
      transformOwner: "project"
    });
    try {
      _0x148276.setState("idle", {
        loop: true,
        fadeIn: 0.12
      });
    } catch {}
  }
  _0x2648aa.input.bindMove({
    touch: false
  });
  _0x2648aa.input.bind("jump", ["Space"]);
  let _0x34c323 = 1;
  let _0x2f941f = 1;
  let _0x5a6d24 = 1;
  let _0xce6cfa = false;
  const _0x5eb2c8 = _0x2648aa.input.moveVec.bind(_0x2648aa.input);
  _0x2648aa.input.moveVec = (_0x3a823d = {}) => {
    const _0x1d4273 = _0x5eb2c8(_0x3a823d);
    const _0x5b6ee2 = _0x3a823d?.target ?? _0x1d4273;
    if (!_0x5b6ee2 || typeof _0x5b6ee2.x != "number") {
      return _0x1d4273;
    }
    if (_0xce6cfa) {
      _0x5b6ee2.x = -_0x5b6ee2.x;
      _0x5b6ee2.z = -_0x5b6ee2.z;
    }
    const _0x5c640f = _0x34c323 * _0x5a6d24;
    if (_0x5c640f !== 1) {
      _0x5b6ee2.x *= _0x5c640f;
      _0x5b6ee2.z *= _0x5c640f;
    }
    return _0x5b6ee2;
  };
  const _0x358d58 = _0x2ac67c(_0x2648aa, {
    physics: _0x107729,
    target: _0x54ce30,
    collider: _0x107729.RAPIER.ColliderDesc.capsule(0.45, 0.28),
    bodyOffset: {
      x: 0,
      y: 0.9,
      z: 0
    },
    supports: _0x3996e4.supportColliders,
    groundingDistance: 0.28,
    locomotion: {
      speed: l,
      acceleration: 28,
      deceleration: 40,
      relativeTo: "camera",
      faceMovement: true,
      probeName: "warden-speed"
    },
    motor: {
      autostep: {
        maxHeight: 0.4,
        minWidth: 0.2
      },
      snapToGround: 0.22
    },
    order: -80
  });
  let _0x2e851b = 0;
  let _0x5954f2 = _0x358d58.grounded;
  let _0x237d50 = false;
  const _0x2c02d7 = _0x2648aa.input.onPressed("jump", () => {
    if (!_0x237d50 && _0x2648aa.phase === "playing" && !(_0x2e851b > 0)) {
      _0x358d58.jump(s * _0x2f941f);
    }
  });
  const _0x537a99 = _0x2648aa.loop.onFixedUpdate(_0x7e3cec => {
    if (_0x237d50 || _0x2648aa.phase !== "playing") {
      return;
    }
    if (_0x2e851b > 0) {
      _0x2e851b = Math.max(0, _0x2e851b - _0x7e3cec);
      if (_0x358d58.locomotion) {
        _0x358d58.locomotion.enabled = _0x2e851b <= 0;
      }
    }
    const _0x5392d1 = _0x358d58.grounded;
    if (_0x5392d1 && !_0x5954f2) {
      _0x2e851b = 0.1;
      if (_0x358d58.locomotion) {
        _0x358d58.locomotion.enabled = false;
        _0x358d58.locomotion.reset();
      }
    }
    _0x5954f2 = _0x5392d1;
    if (_0x148276) {
      const _0x44e5e6 = _0x358d58.locomotion?.speed ?? 0;
      const _0x4f17de = _0x5392d1 && _0x44e5e6 > 0.35 ? "walk" : "idle";
      if (_0x148276.state !== _0x4f17de && _0x400dc0[_0x4f17de]) {
        try {
          _0x148276.setState(_0x4f17de, {
            loop: true,
            fadeIn: 0.1
          });
        } catch {}
      }
    }
  }, -70);
  const _0x510d89 = _0x2648aa.loop.onUpdate(_0x53d8e8 => {
    if (!_0x237d50) {
      if (_0x148276) {
        _0x148276.update(_0x53d8e8);
      } else {
        _0x391999?.update?.(_0x53d8e8);
      }
    }
  }, 20);
  function _0x18fde2() {
    _0x34c323 = 1;
    _0x2f941f = 1;
  }
  const _0x2a64f1 = {
    footRoot: _0x54ce30,
    visualRoot: _0x391999?.root ?? _0x54ce30,
    controller: _0x358d58,
    model: _0x391999,
    actor: _0x148276,
    spawnFoot: {
      ..._0x2e066d,
      position: {
        ..._0x2e066d.position
      }
    },
    resetToSpawn: function (_0x3a1693) {
      const _0x52063a = _0x3a1693?.position ?? _0x2e066d.position;
      const _0x184ae2 = _0x3a1693?.yaw ?? _0x2e066d.yaw;
      _0x54ce30.position.set(Number(_0x52063a.x) || _0x2e066d.position.x, Number(_0x52063a.y) || _0x2e066d.position.y, Number(_0x52063a.z) || _0x2e066d.position.z);
      _0x54ce30.rotation.x = 0;
      _0x54ce30.rotation.z = 0;
      _0x54ce30.rotation.y = Number.isFinite(_0x184ae2) ? _0x184ae2 : _0x2e066d.yaw;
      _0x2e851b = 0;
      _0x5954f2 = true;
      _0x18fde2();
      _0x5a6d24 = 1;
      _0xce6cfa = false;
      if (_0x358d58.locomotion) {
        _0x358d58.locomotion.enabled = true;
      }
      _0x358d58.resetMotion();
      try {
        _0x358d58.motor?.move?.({
          x: 0,
          y: -0.28,
          z: 0
        });
      } catch {}
      if (_0x148276 && _0x400dc0.idle) {
        try {
          _0x148276.setState("idle", {
            loop: true,
            fadeIn: 0
          });
        } catch {}
      }
    },
    setMovementScales: function (_0x4c02a0 = {}) {
      const _0x420b11 = _0x4c02a0?.speedScale;
      const _0x3297d0 = _0x4c02a0?.jumpScale;
      _0x34c323 = Number.isFinite(_0x420b11) ? Math.max(0, Number(_0x420b11)) : 1;
      _0x2f941f = Number.isFinite(_0x3297d0) ? Math.max(0, Number(_0x3297d0)) : 1;
    },
    clearMovementScales: _0x18fde2,
    setAuxSpeedScale: function (_0x2e7af4) {
      _0x5a6d24 = Number.isFinite(_0x2e7af4) ? Math.max(0, Number(_0x2e7af4)) : 1;
    },
    setAxisMirror: function (_0x2791e6) {
      _0xce6cfa = Boolean(_0x2791e6);
    },
    getMovementScales: () => ({
      speedScale: _0x34c323,
      jumpScale: _0x2f941f,
      auxSpeedScale: _0x5a6d24
    }),
    isAxisMirrored: () => _0xce6cfa,
    getGrounded: () => _0x358d58.grounded,
    getVerticalSpeed: () => _0x358d58.verticalSpeed,
    dispose: function () {
      if (!_0x237d50) {
        _0x237d50 = true;
        _0x2c02d7();
        _0x537a99();
        _0x510d89();
        if (_0x2648aa.input.moveVec !== _0x5eb2c8) {
          try {
            _0x2648aa.input.moveVec = _0x5eb2c8;
          } catch {}
        }
        try {
          _0x358d58.dispose();
        } catch {}
        try {
          _0x148276?.dispose?.();
        } catch {}
        if (!_0x148276) {
          try {
            _0x391999?.dispose?.();
          } catch {}
        }
        _0x54ce30.removeFromParent();
      }
    }
  };
  _0x2648aa.own(_0x2a64f1);
  return _0x2a64f1;
}