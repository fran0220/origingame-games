import * as _0x71e2 from "three";
import { RESCUE_RULES as _0x188c89 } from "../shared/contracts.js";
const r = 0;
const n = 1.2;
const o = 0.15;
function i(_0x29061e, _0x350d48) {
  const _0x373afb = _0x29061e.x - _0x350d48.x;
  const _0x5605d3 = _0x29061e.z - _0x350d48.z;
  return Math.hypot(_0x373afb, _0x5605d3);
}
export function createRescueSystem(_0x3f8d21, _0x2be235) {
  const _0x201bdb = _0x2be235?.events;
  const _0x5b9ebd = _0x2be235?.runReset;
  const _0x30d20f = _0x2be235?.warden;
  const _0x2989f0 = _0x2be235?.getPlayerPos;
  const _0x1131a6 = Array.isArray(_0x2be235?.spirits) ? _0x2be235.spirits : [];
  const _0x2dd39a = Array.isArray(_0x2be235?.anchors) ? _0x2be235.anchors : [];
  if (!_0x3f8d21) {
    throw new Error("createRescueSystem requires game");
  }
  if (!_0x201bdb?.emit) {
    throw new Error("createRescueSystem requires events");
  }
  if (!_0x5b9ebd?.register) {
    throw new Error("createRescueSystem requires runReset");
  }
  if (!_0x30d20f?.footRoot) {
    throw new Error("createRescueSystem requires warden.footRoot");
  }
  if (typeof _0x2989f0 != "function") {
    throw new Error("createRescueSystem requires getPlayerPos");
  }
  const _0x2e8845 = typeof _0x2be235.getCarryScales == "function" ? _0x2be235.getCarryScales() : {
    speedScale: _0x188c89.carrySpeedScale,
    jumpScale: _0x188c89.carryJumpScale
  };
  const _0xfca0ed = _0x1131a6.filter(_0x47ac28 => _0x47ac28 && _0x47ac28.spiritId).map(_0x7aebf7 => {
    const _0x3a3bb6 = _0x7aebf7.propRoot ?? null;
    const _0x1e7343 = _0x3a3bb6?.parent ?? null;
    const _0x2b80ff = new _0x71e2.Vector3();
    if (_0x3a3bb6) {
      _0x2b80ff.copy(_0x3a3bb6.position);
    }
    return {
      placement: _0x7aebf7,
      state: "idle",
      home: {
        x: Number(_0x7aebf7.center?.x) || 0,
        y: Number(_0x7aebf7.center?.y) || 0,
        z: Number(_0x7aebf7.center?.z) || 0
      },
      propRoot: _0x3a3bb6,
      homeParent: _0x1e7343,
      homeLocal: _0x2b80ff,
      homeVisible: !_0x3a3bb6 || _0x3a3bb6.visible !== false
    };
  });
  const _0x395030 = _0x2dd39a.filter(_0x105cc3 => _0x105cc3 && _0x105cc3.anchorId).map(_0x5a8c3e => ({
    placement: _0x5a8c3e,
    capacity: Math.max(1, Math.floor(Number(_0x5a8c3e.capacity) || 1)),
    filled: 0,
    radius: Math.max(0.2, Number(_0x5a8c3e.radius) || _0x188c89.anchorRadius)
  }));
  let _0x12e270 = null;
  let _0x17b6de = 0;
  let _0x5af51e = false;
  function _0x211fd8(_0x3cf64d) {
    if (typeof _0x30d20f.setMovementScales == "function") {
      if (_0x3cf64d) {
        _0x30d20f.setMovementScales({
          speedScale: _0x2e8845.speedScale ?? _0x188c89.carrySpeedScale,
          jumpScale: _0x2e8845.jumpScale ?? _0x188c89.carryJumpScale
        });
      } else if (typeof _0x30d20f.clearMovementScales == "function") {
        _0x30d20f.clearMovementScales();
      } else {
        _0x30d20f.setMovementScales({
          speedScale: 1,
          jumpScale: 1
        });
      }
    }
  }
  function _0x17cf3e(_0x48c8e2) {
    const _0x140d49 = _0x48c8e2.propRoot;
    if (!_0x140d49) {
      return;
    }
    _0x30d20f.footRoot.add(_0x140d49);
    _0x140d49.position.set(r, n, o);
    _0x140d49.rotation.set(0, 0, 0);
    _0x140d49.visible = true;
  }
  function _0x481569(_0x974df2, _0x4b32ed = true) {
    const _0x11892d = _0x974df2.propRoot;
    if (_0x11892d) {
      if (_0x974df2.homeParent) {
        _0x974df2.homeParent.add(_0x11892d);
        _0x11892d.position.copy(_0x974df2.homeLocal);
      } else {
        _0x11892d.removeFromParent?.();
        _0x11892d.position.set(_0x974df2.home.x, _0x974df2.home.y, _0x974df2.home.z);
      }
      _0x11892d.visible = _0x4b32ed && _0x974df2.homeVisible;
    }
  }
  function _0x9f4685(_0x31f9f7) {
    const _0x4955d6 = _0x31f9f7.propRoot;
    if (_0x4955d6) {
      if (_0x31f9f7.homeParent) {
        _0x31f9f7.homeParent.add(_0x4955d6);
        _0x4955d6.position.copy(_0x31f9f7.homeLocal);
      } else {
        _0x4955d6.removeFromParent?.();
        _0x4955d6.position.set(_0x31f9f7.home.x, _0x31f9f7.home.y, _0x31f9f7.home.z);
      }
      _0x4955d6.visible = false;
    }
  }
  function _0x596d34() {
    _0x201bdb.emit("carryChanged", {
      carriedId: _0x12e270,
      freedCount: _0x17b6de,
      carrying: _0x12e270 != null
    });
  }
  const _0x4afa57 = _0x5b9ebd.register("rescue", function () {
    _0x12e270 = null;
    _0x17b6de = 0;
    for (const _0x2086f2 of _0xfca0ed) {
      _0x2086f2.state = "idle";
      _0x481569(_0x2086f2, true);
    }
    for (const _0x252189 of _0x395030) {
      _0x252189.filled = 0;
    }
    _0x211fd8(false);
    _0x596d34();
  });
  try {
    _0x3f8d21.probe.observe("freedCount", () => _0x17b6de);
    _0x3f8d21.probe.observe("carriedId", () => _0x12e270);
    _0x3f8d21.probe.observe("carrying", () => _0x12e270 != null);
  } catch {}
  const _0x50d3fc = _0x3f8d21.loop.onFixedUpdate(() => {
    if (_0x5af51e || _0x3f8d21.phase !== "playing") {
      return;
    }
    const _0x4bc8fd = _0x2989f0();
    if (!_0x4bc8fd || !Number.isFinite(_0x4bc8fd.x)) {
      return;
    }
    if (_0x12e270 == null) {
      let _0x1fb8a6 = null;
      let _0x7b4c3c = Infinity;
      for (const _0x17fe48 of _0xfca0ed) {
        if (_0x17fe48.state !== "idle") {
          continue;
        }
        const _0xac650d = Math.max(0.2, Number(_0x17fe48.placement.radius) || _0x188c89.pickupRadius);
        const _0x5f5c92 = i(_0x4bc8fd, _0x17fe48.home);
        if (_0x5f5c92 <= _0xac650d && _0x5f5c92 < _0x7b4c3c) {
          _0x7b4c3c = _0x5f5c92;
          _0x1fb8a6 = _0x17fe48;
        }
      }
      if (_0x1fb8a6) {
        (function (_0x15ad81) {
          if (_0x12e270 != null) {
            return false;
          }
          if (_0x15ad81.state !== "idle") {
            return false;
          }
          _0x15ad81.state = "carried";
          _0x12e270 = _0x15ad81.placement.spiritId;
          _0x17cf3e(_0x15ad81);
          _0x211fd8(true);
          _0x201bdb.emit("spiritPickedUp", {
            spiritId: _0x15ad81.placement.spiritId,
            segment: _0x15ad81.placement.segment,
            center: {
              ..._0x15ad81.home
            }
          });
          _0x596d34();
          try {
            _0x3f8d21.probe.event?.("spiritPickedUp", {
              spiritId: _0x15ad81.placement.spiritId
            });
          } catch {}
        })(_0x1fb8a6);
      }
      return;
    }
    const _0x2c1c7c = _0xfca0ed.find(_0x29234c => _0x29234c.placement.spiritId === _0x12e270);
    if (!_0x2c1c7c || _0x2c1c7c.state !== "carried") {
      _0x12e270 = null;
      _0x211fd8(false);
      _0x596d34();
      return;
    }
    if (_0x2c1c7c.propRoot && _0x2c1c7c.propRoot.parent !== _0x30d20f.footRoot) {
      _0x17cf3e(_0x2c1c7c);
    }
    let _0x3cb5a3 = null;
    let _0x542c31 = Infinity;
    for (const _0x5cb308 of _0x395030) {
      if (_0x5cb308.filled >= _0x5cb308.capacity) {
        continue;
      }
      const _0x482999 = _0x5cb308.placement.center;
      if (!_0x482999) {
        continue;
      }
      const _0x1d8124 = i(_0x4bc8fd, _0x482999);
      if (_0x1d8124 > _0x5cb308.radius) {
        continue;
      }
      const _0x5ba2d7 = _0x2c1c7c.placement.anchorId && _0x2c1c7c.placement.anchorId === _0x5cb308.placement.anchorId ? _0x1d8124 - 1000 : _0x1d8124;
      if (_0x5ba2d7 < _0x542c31) {
        _0x542c31 = _0x5ba2d7;
        _0x3cb5a3 = _0x5cb308;
      }
    }
    if (_0x3cb5a3) {
      (function (_0x25642b, _0x1de36c) {
        if (_0x25642b.state !== "carried") {
          return false;
        }
        if (_0x1de36c.filled >= _0x1de36c.capacity) {
          return false;
        }
        _0x25642b.state = "freed";
        _0x12e270 = null;
        _0x1de36c.filled += 1;
        _0x17b6de += 1;
        _0x9f4685(_0x25642b);
        _0x211fd8(false);
        _0x201bdb.emit("spiritFreed", {
          spiritId: _0x25642b.placement.spiritId,
          anchorId: _0x1de36c.placement.anchorId,
          freedCount: _0x17b6de,
          segment: _0x25642b.placement.segment,
          anchorSegment: _0x1de36c.placement.segment
        });
        _0x596d34();
        try {
          _0x3f8d21.probe.event?.("spiritFreed", {
            spiritId: _0x25642b.placement.spiritId,
            freedCount: _0x17b6de
          });
        } catch {}
      })(_0x2c1c7c, _0x3cb5a3);
    }
  }, 8);
  function _0xf0d072(_0x5190b1) {
    const _0x5034ff = _0x5190b1?.placement?.segment;
    if (_0x5034ff === "spire") {
      return true;
    }
    const _0x471633 = typeof _0x5190b1?.placement?.spiritId == "string" ? _0x5190b1.placement.spiritId : "";
    return _0x471633.includes("s-spirit") || _0x471633.includes("spire");
  }
  function _0x519448() {
    let _0x7207d3 = 0;
    for (const _0x8f8bb4 of _0xfca0ed) {
      if (_0x8f8bb4.state === "freed" && _0xf0d072(_0x8f8bb4)) {
        _0x7207d3 += 1;
      }
    }
    return _0x7207d3;
  }
  const _0x4fa09a = {
    getCarriedId: () => _0x12e270,
    getFreedCount: () => _0x17b6de,
    getSpireFreedCount: _0x519448,
    getSpiritStates: function () {
      return _0xfca0ed.map(_0x4197f7 => ({
        spiritId: _0x4197f7.placement.spiritId,
        state: _0x4197f7.state,
        segment: _0x4197f7.placement.segment ?? ""
      }));
    },
    getRequiredFreedThroughBeatB: () => _0x188c89.spiritsThroughBeatB,
    getRequiredFreedThroughBeatC: () => _0x188c89.spiritsThroughBeatC,
    getSpiritsTotal: () => _0x188c89.spiritsTotal,
    isCarrying: () => _0x12e270 != null,
    seedProbeProgress: function (_0x578f78 = {}) {
      const _0x3bc90e = new Set(Array.isArray(_0x578f78.keepIdleIds) ? _0x578f78.keepIdleIds.filter(_0x276b70 => typeof _0x276b70 == "string") : []);
      const _0x3ec78a = typeof _0x578f78.carryId == "string" ? _0x578f78.carryId : null;
      _0x12e270 = null;
      _0x17b6de = 0;
      for (const _0x51f578 of _0x395030) {
        _0x51f578.filled = 0;
      }
      for (const _0x2227c9 of _0xfca0ed) {
        const _0x59782f = _0x2227c9.placement.spiritId;
        if (_0x3ec78a && _0x59782f === _0x3ec78a) {
          _0x2227c9.state = "carried";
          _0x12e270 = _0x59782f;
          _0x17cf3e(_0x2227c9);
          continue;
        }
        if (_0x3bc90e.has(_0x59782f)) {
          _0x2227c9.state = "idle";
          _0x481569(_0x2227c9, true);
          continue;
        }
        _0x2227c9.state = "freed";
        _0x9f4685(_0x2227c9);
        _0x17b6de += 1;
        const _0x5e6d82 = _0x2227c9.placement.anchorId;
        let _0xeb713b = false;
        if (_0x5e6d82) {
          const _0x2e6d8b = _0x395030.find(_0x4cdc92 => _0x4cdc92.placement.anchorId === _0x5e6d82 && _0x4cdc92.filled < _0x4cdc92.capacity);
          if (_0x2e6d8b) {
            _0x2e6d8b.filled += 1;
            _0xeb713b = true;
          }
        }
        if (!_0xeb713b) {
          const _0x30ae71 = _0x395030.find(_0x2ceee8 => _0x2ceee8.filled < _0x2ceee8.capacity);
          if (_0x30ae71) {
            _0x30ae71.filled += 1;
          }
        }
      }
      _0x211fd8(_0x12e270 != null);
      _0x596d34();
      return {
        freedCount: _0x17b6de,
        carriedId: _0x12e270,
        spireFreed: _0x519448()
      };
    },
    spirits: _0xfca0ed,
    anchors: _0x395030,
    dispose: function () {
      if (!_0x5af51e) {
        _0x5af51e = true;
        _0x50d3fc();
        _0x4afa57();
        if (_0x12e270) {
          const _0x36bbfa = _0xfca0ed.find(_0x1b5d0e => _0x1b5d0e.placement.spiritId === _0x12e270);
          if (_0x36bbfa) {
            _0x481569(_0x36bbfa, true);
          }
        }
        _0x12e270 = null;
        _0x211fd8(false);
      }
    }
  };
  _0x3f8d21.own?.(_0x4fa09a);
  return _0x4fa09a;
}