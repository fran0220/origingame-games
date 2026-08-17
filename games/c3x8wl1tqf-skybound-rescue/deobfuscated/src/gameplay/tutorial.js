import { RESCUE_RULES as _0x46c620, TUTORIAL_FLAGS as _0x71000 } from "../shared/contracts.js";
const r = {
  [_0x71000.jump]: "Space — Jump the gap",
  [_0x71000.shear]: "Wind shear twists airborne arcs",
  [_0x71000.stabilize]: "E — Stabilize crumbling stone (1 pulse)",
  [_0x71000.carry]: "Touch a spirit to carry it",
  [_0x71000.beacon]: "Q — Light the beacon (1 pulse)",
  [_0x71000.deliver]: "Deliver the spirit to an amber anchor"
};
const n = 0.55;
function a(_0x5090d, _0x4b6b78) {
  if (!Array.isArray(_0x5090d) || _0x5090d.length === 0) {
    return null;
  }
  for (const _0x57824f of _0x4b6b78) {
    const _0x33d3e0 = _0x5090d.find(_0x260a7c => _0x260a7c && _0x260a7c.id === _0x57824f);
    if (_0x33d3e0 && Number.isFinite(_0x33d3e0.z)) {
      return Number(_0x33d3e0.z);
    }
  }
  for (const _0x58f78d of _0x4b6b78) {
    const _0x555754 = _0x5090d.find(_0x16356a => typeof _0x16356a?.id == "string" && _0x16356a.id.includes(_0x58f78d));
    if (_0x555754 && Number.isFinite(_0x555754.z)) {
      return Number(_0x555754.z);
    }
  }
  return null;
}
export function createTutorialFlags(_0x26eac9, _0x4d55f1) {
  const _0x58af97 = _0x4d55f1?.events;
  const _0x5f9f75 = _0x4d55f1?.runReset;
  const _0x5356f0 = _0x4d55f1?.warden;
  if (!_0x26eac9) {
    throw new Error("createTutorialFlags requires game");
  }
  if (!_0x58af97?.emit) {
    throw new Error("createTutorialFlags requires events");
  }
  if (!_0x5f9f75?.register) {
    throw new Error("createTutorialFlags requires runReset");
  }
  if (!_0x5356f0?.footRoot) {
    throw new Error("createTutorialFlags requires warden.footRoot");
  }
  const _0x1e4f0d = typeof _0x4d55f1.getPlayerPos == "function" ? _0x4d55f1.getPlayerPos : () => {
    const _0x42b2fd = _0x5356f0.footRoot.position;
    return {
      x: _0x42b2fd.x,
      y: _0x42b2fd.y,
      z: _0x42b2fd.z
    };
  };
  const _0x262c0f = typeof _0x4d55f1.getFreedCount == "function" ? _0x4d55f1.getFreedCount : () => 0;
  const _0x331a80 = Array.isArray(_0x4d55f1.routeSpine) ? _0x4d55f1.routeSpine : [];
  const _0x20d7a2 = Number.isFinite(_0x4d55f1.requiredFreesOnboarding) ? Number(_0x4d55f1.requiredFreesOnboarding) : _0x46c620.requiredFreesOnboarding;
  const _0x4db0ca = Number.isFinite(_0x4d55f1.requiredFreesBeatA) ? Number(_0x4d55f1.requiredFreesBeatA) : _0x46c620.requiredFreesBeatA;
  const _0x504a91 = Number.isFinite(_0x4d55f1.requiredFreesBeatB) ? Number(_0x4d55f1.requiredFreesBeatB) : _0x46c620.requiredFreesBeatB;
  const _0x212062 = Number.isFinite(_0x4d55f1.requiredFreesBeatC) ? Number(_0x4d55f1.requiredFreesBeatC) : _0x46c620.requiredFreesBeatC;
  const _0x15dd34 = a(_0x331a80, ["a-1", "a1", "beatA-1", "beat-a-1"]);
  const _0x5e99f3 = a(_0x331a80, ["b-1", "b1", "beatB-1", "beat-b-1"]);
  const _0x766664 = a(_0x331a80, ["c-1", "c1", "beatC-1", "beat-c-1"]);
  const _0x5b91a5 = a(_0x331a80, ["s-approach", "s-1", "s1", "spire-approach", "spire-1", "spireStart"]);
  let _0xd9df6d = -1;
  if (_0x331a80.length >= 2) {
    const _0x2af05b = Number(_0x331a80[0].z) || 0;
    const _0x329727 = Number(_0x331a80[_0x331a80.length - 1].z) || 0;
    if (Math.abs(_0x329727 - _0x2af05b) > 0.01) {
      _0xd9df6d = Math.sign(_0x329727 - _0x2af05b) || -1;
    }
  }
  const _0x2d977b = new Set();
  let _0x40f7e6 = true;
  let _0x324f06 = 0;
  let _0xa31043 = false;
  let _0x59e60e = false;
  const _0x6ca372 = [];
  function _0x42169d(_0x316d7f, _0x81a066) {
    if (_0x2d977b.has(_0x316d7f)) {
      return false;
    }
    _0x2d977b.add(_0x316d7f);
    const _0x545eb6 = _0x81a066 ?? r[_0x316d7f] ?? _0x316d7f;
    _0x58af97.emit("tutorialToast", {
      id: _0x316d7f,
      message: _0x545eb6
    });
    try {
      _0x26eac9.probe.event?.("tutorialToast", {
        id: _0x316d7f
      });
    } catch {}
    return true;
  }
  function _0x52f272(_0x58cb5a, _0x3e3c38) {
    if (typeof _0x58af97.on != "function") {
      return;
    }
    const _0x64f50d = _0x58af97.on(_0x58cb5a, _0x3e3c38);
    if (typeof _0x64f50d == "function") {
      _0x6ca372.push(_0x64f50d);
    }
  }
  function _0x22770b(_0x45db63, _0x11650b, _0x392f19, _0xf4dc52) {
    return _0x11650b != null && !!Number.isFinite(_0x11650b) && !(_0xf4dc52 >= _0x392f19) && (_0xd9df6d >= 0 ? _0x45db63 > _0x11650b + 0.35 : _0x45db63 < _0x11650b - 0.35);
  }
  function _0x326f76() {
    const _0x157c84 = _0x1e4f0d();
    const _0x4d5a15 = _0x262c0f();
    const _0x226daf = _0x157c84?.z;
    if (Number.isFinite(_0x226daf)) {
      if (_0x22770b(_0x226daf, _0x5b91a5, _0x212062, _0x4d5a15)) {
        return {
          locked: true,
          need: _0x212062,
          have: _0x4d5a15,
          gate: "spire"
        };
      } else if (_0x22770b(_0x226daf, _0x766664, _0x504a91, _0x4d5a15)) {
        return {
          locked: true,
          need: _0x504a91,
          have: _0x4d5a15,
          gate: "beatC"
        };
      } else if (_0x22770b(_0x226daf, _0x5e99f3, _0x4db0ca, _0x4d5a15)) {
        return {
          locked: true,
          need: _0x4db0ca,
          have: _0x4d5a15,
          gate: "beatB"
        };
      } else if (_0x22770b(_0x226daf, _0x15dd34, _0x20d7a2, _0x4d5a15)) {
        return {
          locked: true,
          need: _0x20d7a2,
          have: _0x4d5a15,
          gate: "beatA"
        };
      } else {
        return {
          locked: false,
          need: 0,
          have: _0x4d5a15,
          gate: null
        };
      }
    } else {
      return {
        locked: false,
        need: 0,
        have: _0x4d5a15,
        gate: null
      };
    }
  }
  function _0x293c27(_0x2edba4) {
    if (typeof _0x5356f0.setAuxSpeedScale != "function") {
      if (_0x5356f0.setMovementScales) {
        if (_0x2edba4 && !_0xa31043) {
          const _0xd58095 = typeof _0x5356f0.getMovementScales == "function" ? _0x5356f0.getMovementScales() : {
            speedScale: 1,
            jumpScale: 1
          };
          _0x5356f0.setMovementScales({
            speedScale: (_0xd58095.speedScale || 1) * n,
            jumpScale: _0xd58095.jumpScale ?? 1
          });
          _0xa31043 = true;
        } else if (!_0x2edba4 && _0xa31043) {
          const _0x4e8df9 = typeof _0x5356f0.getMovementScales == "function" ? _0x5356f0.getMovementScales() : {
            speedScale: n,
            jumpScale: 1
          };
          const _0x402adc = (_0x4e8df9.speedScale || n) / n;
          _0x5356f0.setMovementScales({
            speedScale: _0x402adc,
            jumpScale: _0x4e8df9.jumpScale ?? 1
          });
          _0xa31043 = false;
        }
      }
    } else if (_0x2edba4 && !_0xa31043) {
      _0x5356f0.setAuxSpeedScale(n);
      _0xa31043 = true;
    } else if (!_0x2edba4 && _0xa31043) {
      _0x5356f0.setAuxSpeedScale(1);
      _0xa31043 = false;
    }
  }
  _0x52f272("shearTriggered", () => {
    if (_0x26eac9.phase === "playing") {
      _0x42169d(_0x71000.shear);
    }
  });
  _0x52f272("stabilized", () => {
    if (_0x26eac9.phase === "playing") {
      _0x42169d(_0x71000.stabilize);
    }
  });
  _0x52f272("spiritPickedUp", () => {
    if (_0x26eac9.phase === "playing") {
      _0x42169d(_0x71000.carry);
    }
  });
  _0x52f272("beaconLit", () => {
    if (_0x26eac9.phase === "playing") {
      _0x42169d(_0x71000.beacon);
    }
  });
  _0x52f272("spiritFreed", () => {
    if (_0x26eac9.phase === "playing") {
      _0x42169d(_0x71000.deliver);
    }
  });
  const _0x26aae6 = _0x5f9f75.register("tutorial", function () {
    _0x2d977b.clear();
    _0x40f7e6 = true;
    _0x324f06 = 0;
    _0x293c27(false);
    _0xa31043 = false;
    if (typeof _0x5356f0.setAuxSpeedScale == "function") {
      _0x5356f0.setAuxSpeedScale(1);
    }
  });
  try {
    _0x26eac9.probe.observe("tutorialFlags", () => [..._0x2d977b]);
  } catch {}
  const _0x3204dc = _0x26eac9.loop.onFixedUpdate(_0xfde58f => {
    if (_0x59e60e || _0x26eac9.phase !== "playing") {
      return;
    }
    const _0x3da451 = typeof _0x5356f0.getGrounded == "function" ? Boolean(_0x5356f0.getGrounded()) : Boolean(_0x5356f0.controller?.grounded);
    if (_0x40f7e6 && !_0x3da451) {
      _0x42169d(_0x71000.jump);
    }
    _0x40f7e6 = _0x3da451;
    if (_0x324f06 > 0) {
      _0x324f06 = Math.max(0, _0x324f06 - _0xfde58f);
    }
    const _0x420ab8 = _0x326f76();
    if (_0x420ab8.locked) {
      _0x293c27(true);
      if (_0x324f06 <= 0) {
        _0x324f06 = 2.4;
        _0x58af97.emit("tutorialToast", {
          id: "segmentGate",
          message: "Free the stranded spirits before the galleries/spire"
        });
        _0x58af97.emit("segmentLocked", {
          gate: _0x420ab8.gate,
          need: _0x420ab8.need,
          have: _0x420ab8.have
        });
      }
    } else {
      _0x293c27(false);
    }
  }, 12);
  const _0x3e16bd = {
    toastOnce: _0x42169d,
    getShownFlags: () => [..._0x2d977b],
    getSegmentGateState: _0x326f76,
    getSegmentUnlockZ: () => ({
      deepA: _0x15dd34,
      deepB: _0x5e99f3,
      deepC: _0x766664,
      spire: _0x5b91a5,
      travelSign: _0xd9df6d,
      requiredFreesOnboarding: _0x20d7a2,
      requiredFreesBeatA: _0x4db0ca,
      requiredFreesBeatB: _0x504a91,
      requiredFreesBeatC: _0x212062
    }),
    shouldBlockAdvance: () => _0x326f76().locked,
    dispose: function () {
      if (!_0x59e60e) {
        _0x59e60e = true;
        _0x3204dc();
        _0x26aae6();
        for (const _0x3acfad of _0x6ca372) {
          try {
            _0x3acfad();
          } catch {}
        }
        _0x6ca372.length = 0;
        _0x293c27(false);
      }
    }
  };
  _0x26eac9.own?.(_0x3e16bd);
  return _0x3e16bd;
}