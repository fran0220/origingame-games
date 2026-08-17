import * as _0x24bc37 from "three";
import { CHARGE_RULES as _0x537068, STORM_PALETTE as _0x26922d } from "../shared/contracts.js";
const n = new _0x24bc37.Color(_0x26922d.amber).lerp(new _0x24bc37.Color(_0x26922d.violet), 0.35);
const i = new _0x24bc37.Color(_0x26922d.amber).multiplyScalar(0.55);
const a = new _0x24bc37.Color(0);
function r(_0x139b76) {
  const _0x37993d = [];
  for (const _0x4d7570 of (_0x1b99c8 = _0x139b76.crackMaterials) ? Array.isArray(_0x1b99c8) ? _0x1b99c8.filter(Boolean) : [_0x1b99c8] : []) {
    const _0x563b5e = _0x4d7570;
    if (_0x563b5e) {
      if (_0x563b5e.emissive && typeof _0x563b5e.emissive.clone == "function") {
        _0x37993d.push({
          mat: _0x4d7570,
          hadEmissive: true,
          color: _0x563b5e.emissive.clone(),
          intensity: Number.isFinite(_0x563b5e.emissiveIntensity) ? _0x563b5e.emissiveIntensity : 1
        });
      } else if ("emissive" in _0x563b5e || _0x563b5e.isMeshStandardMaterial || _0x563b5e.isMeshPhysicalMaterial) {
        _0x563b5e.emissive = _0x563b5e.emissive ?? new _0x24bc37.Color(0);
        _0x37993d.push({
          mat: _0x4d7570,
          hadEmissive: true,
          color: _0x563b5e.emissive.clone(),
          intensity: Number.isFinite(_0x563b5e.emissiveIntensity) ? _0x563b5e.emissiveIntensity : 1
        });
      }
    }
  }
  var _0x1b99c8;
  if (_0x37993d.length === 0 && _0x139b76.meshRoot) {
    _0x139b76.meshRoot.traverse?.(_0x38650f => {
      const _0x300736 = _0x38650f;
      if (!_0x300736?.isMesh || !_0x300736.material) {
        return;
      }
      const _0x12861f = Array.isArray(_0x300736.material) ? _0x300736.material : [_0x300736.material];
      for (const _0x72edb of _0x12861f) {
        const _0x3d1a34 = _0x72edb;
        if (_0x3d1a34) {
          if (_0x3d1a34.emissive && typeof _0x3d1a34.emissive.clone == "function") {
            _0x37993d.push({
              mat: _0x3d1a34,
              hadEmissive: true,
              color: _0x3d1a34.emissive.clone(),
              intensity: Number.isFinite(_0x3d1a34.emissiveIntensity) ? _0x3d1a34.emissiveIntensity : 1
            });
          }
        }
      }
    });
  }
  return _0x37993d;
}
function o(_0x5f330f, _0x220fa8, _0x52aca3) {
  for (const _0x42496b of _0x5f330f) {
    const _0x4c9ee7 = _0x42496b.mat;
    if (_0x4c9ee7?.emissive) {
      _0x4c9ee7.emissive.copy(_0x220fa8);
      if ("emissiveIntensity" in _0x4c9ee7) {
        _0x4c9ee7.emissiveIntensity = _0x52aca3;
      }
      _0x4c9ee7.needsUpdate = true;
    }
  }
}
function l(_0x4137e0) {
  for (const _0x2edcbe of _0x4137e0) {
    const _0x3c52db = _0x2edcbe.mat;
    if (_0x3c52db?.emissive) {
      _0x3c52db.emissive.copy(_0x2edcbe.color);
      if ("emissiveIntensity" in _0x3c52db) {
        _0x3c52db.emissiveIntensity = _0x2edcbe.intensity;
      }
      _0x3c52db.needsUpdate = true;
    }
  }
}
function c(_0x366869, _0x5add5d, _0x40b249 = 1.15) {
  const _0x12b274 = _0x5add5d.center;
  const _0x305232 = _0x5add5d.halfExtents;
  if (!_0x12b274 || !_0x305232) {
    return false;
  }
  const _0x162e19 = Math.max(0.05, Number(_0x305232.x) || 0.5);
  const _0x3fd0af = Math.max(0.05, Number(_0x305232.z) || 0.5);
  const _0x2d96e7 = Math.max(0.05, Number(_0x305232.y) || 0.25);
  if (Math.abs(_0x366869.x - _0x12b274.x) > _0x162e19) {
    return false;
  }
  if (Math.abs(_0x366869.z - _0x12b274.z) > _0x3fd0af) {
    return false;
  }
  const _0x2ec277 = _0x12b274.y + _0x2d96e7;
  return !(_0x366869.y < _0x2ec277 - _0x40b249) && !(_0x366869.y > _0x2ec277 + _0x40b249 * 1.4);
}
export function createCollapseSystem(_0x29c006, _0x53f2d8) {
  const _0x3cefe9 = _0x53f2d8?.events;
  const _0x14e5ae = _0x53f2d8?.runReset;
  const _0x2e1ddb = _0x53f2d8?.getPlayerPos;
  const _0x28be34 = _0x53f2d8?.getGrounded;
  const _0x27eef7 = Array.isArray(_0x53f2d8?.collapses) ? _0x53f2d8.collapses : [];
  const _0x143665 = _0x53f2d8?.trySpend;
  const _0xb40c8a = Number.isFinite(_0x53f2d8?.stabilizeRange) ? Number(_0x53f2d8.stabilizeRange) : _0x537068.stabilizeRange;
  if (!_0x29c006) {
    throw new Error("createCollapseSystem requires game");
  }
  if (!_0x3cefe9?.emit) {
    throw new Error("createCollapseSystem requires events");
  }
  if (!_0x14e5ae?.register) {
    throw new Error("createCollapseSystem requires runReset");
  }
  if (typeof _0x2e1ddb != "function") {
    throw new Error("createCollapseSystem requires getPlayerPos");
  }
  if (typeof _0x28be34 != "function") {
    throw new Error("createCollapseSystem requires getGrounded");
  }
  if (typeof _0x143665 != "function") {
    throw new Error("createCollapseSystem requires trySpend");
  }
  const _0x5790f9 = _0x537068.collapseFuseS;
  const _0x3128e9 = _0x27eef7.filter(_0x4e9514 => _0x4e9514 && _0x4e9514.collapseId).map(_0x176348 => ({
    placement: _0x176348,
    state: "idle",
    fuse: 0,
    collapseStartEmitted: false,
    emissiveSnap: r(_0x176348)
  }));
  let _0x7b9cea = false;
  _0x29c006.input.bind("stabilize", ["KeyE"]);
  const _0x42da93 = _0x29c006.input.onPressed("stabilize", () => {
    if (!_0x7b9cea && _0x29c006.phase === "playing") {
      _0x5f41fb();
    }
  });
  function _0x5f41fb() {
    const _0x338ccf = _0x2e1ddb();
    if (!_0x338ccf) {
      return false;
    }
    let _0x51b1df = null;
    let _0x4abdb3 = _0xb40c8a;
    for (const _0x13888f of _0x3128e9) {
      if (_0x13888f.state !== "idle" && _0x13888f.state !== "cracking") {
        continue;
      }
      const _0x37d4ff = _0x13888f.placement.center;
      if (!_0x37d4ff) {
        continue;
      }
      const _0x3f259c = _0x338ccf.x - _0x37d4ff.x;
      const _0x5e1399 = _0x338ccf.y - _0x37d4ff.y;
      const _0x1266e7 = _0x338ccf.z - _0x37d4ff.z;
      const _0x55e440 = Math.hypot(_0x3f259c, _0x5e1399, _0x1266e7);
      if (_0x55e440 <= _0x4abdb3) {
        _0x4abdb3 = _0x55e440;
        _0x51b1df = _0x13888f;
      }
    }
    if (!_0x51b1df) {
      return false;
    }
    if (!_0x143665(_0x537068.stabilizeCost)) {
      return false;
    }
    _0x51b1df.state = "stabilized";
    _0x51b1df.fuse = 0;
    _0x51b1df.collapseStartEmitted = false;
    o(_0x51b1df.emissiveSnap, i, 0.85);
    _0x3cefe9.emit("stabilized", {
      collapseId: _0x51b1df.placement.collapseId,
      segment: _0x51b1df.placement.segment,
      center: _0x51b1df.placement.center ? {
        ..._0x51b1df.placement.center
      } : undefined
    });
    try {
      _0x29c006.probe.event?.("stabilized", {
        collapseId: _0x51b1df.placement.collapseId
      });
    } catch {}
    return true;
  }
  function _0x1f48c8(_0xaf18a2) {
    if (_0xaf18a2.state !== "fallen" && _0xaf18a2.state !== "stabilized") {
      _0xaf18a2.state = "fallen";
      _0xaf18a2.fuse = 0;
      try {
        _0xaf18a2.placement.removeSupport?.();
      } catch (_0x58b905) {
        console.warn("[collapses] removeSupport", _0xaf18a2.placement.collapseId, _0x58b905);
      }
      o(_0xaf18a2.emissiveSnap, a, 0);
      _0x3cefe9.emit("plateFell", {
        collapseId: _0xaf18a2.placement.collapseId,
        segment: _0xaf18a2.placement.segment,
        center: _0xaf18a2.placement.center ? {
          ..._0xaf18a2.placement.center
        } : undefined
      });
    }
  }
  const _0x48f686 = _0x14e5ae.register("collapses", function () {
    for (const _0xfb3ddc of _0x3128e9) {
      _0xfb3ddc.state = "idle";
      _0xfb3ddc.fuse = 0;
      _0xfb3ddc.collapseStartEmitted = false;
      l(_0xfb3ddc.emissiveSnap);
      try {
        _0xfb3ddc.placement.restoreSupport?.();
      } catch (_0x42959d) {
        console.warn("[collapses] restoreSupport", _0xfb3ddc.placement.collapseId, _0x42959d);
      }
    }
  });
  const _0x47d97b = _0x29c006.loop.onFixedUpdate(_0x3fe4ac => {
    if (_0x7b9cea || _0x29c006.phase !== "playing") {
      return;
    }
    const _0x43cf5e = _0x2e1ddb();
    const _0x43e3fa = Boolean(_0x28be34());
    if (_0x43cf5e) {
      for (const _0x13c339 of _0x3128e9) {
        if (_0x13c339.state !== "fallen" && _0x13c339.state !== "stabilized") {
          if (_0x13c339.state !== "idle") {
            if (_0x13c339.state === "cracking") {
              if (_0x43e3fa && c(_0x43cf5e, _0x13c339.placement) && !_0x13c339.collapseStartEmitted) {
                _0x13c339.collapseStartEmitted = true;
                _0x3cefe9.emit("collapseStart", {
                  collapseId: _0x13c339.placement.collapseId,
                  segment: _0x13c339.placement.segment,
                  fuseS: _0x5790f9,
                  center: _0x13c339.placement.center ? {
                    ..._0x13c339.placement.center
                  } : undefined
                });
              }
              _0x13c339.fuse -= _0x3fe4ac;
              if (_0x13c339.fuse <= 0) {
                _0x1f48c8(_0x13c339);
              }
            }
          } else if (_0x43e3fa && c(_0x43cf5e, _0x13c339.placement)) {
            _0x13c339.state = "cracking";
            _0x13c339.fuse = _0x5790f9;
            if (!_0x13c339.collapseStartEmitted) {
              _0x13c339.collapseStartEmitted = true;
              _0x3cefe9.emit("collapseStart", {
                collapseId: _0x13c339.placement.collapseId,
                segment: _0x13c339.placement.segment,
                fuseS: _0x5790f9,
                center: _0x13c339.placement.center ? {
                  ..._0x13c339.placement.center
                } : undefined
              });
            }
            o(_0x13c339.emissiveSnap, n, 1.35);
          }
        }
      }
    }
  }, 0);
  const _0x25d24a = {
    plates: _0x3128e9,
    tryStabilizeNearest: _0x5f41fb,
    getStabilizeTarget: function () {
      if (_0x7b9cea || _0x29c006.phase !== "playing" && _0x29c006.phase !== "paused") {
        return null;
      }
      const _0x4b74ef = _0x2e1ddb();
      if (!_0x4b74ef) {
        return null;
      }
      let _0x3872fe = null;
      let _0x498e49 = _0xb40c8a;
      for (const _0x346919 of _0x3128e9) {
        if (_0x346919.state !== "idle" && _0x346919.state !== "cracking") {
          continue;
        }
        const _0x18b30c = _0x346919.placement.center;
        if (!_0x18b30c) {
          continue;
        }
        const _0x13eeff = Math.hypot(_0x4b74ef.x - _0x18b30c.x, _0x4b74ef.y - _0x18b30c.y, _0x4b74ef.z - _0x18b30c.z);
        if (_0x13eeff <= _0x498e49) {
          _0x498e49 = _0x13eeff;
          _0x3872fe = _0x346919;
        }
      }
      if (_0x3872fe) {
        return {
          id: _0x3872fe.placement.collapseId,
          collapseId: _0x3872fe.placement.collapseId,
          inRange: true,
          dist: _0x498e49
        };
      } else {
        return null;
      }
    },
    dispose: function () {
      if (!_0x7b9cea) {
        _0x7b9cea = true;
        _0x47d97b();
        _0x42da93();
        _0x48f686();
      }
    }
  };
  _0x29c006.own?.(_0x25d24a);
  return _0x25d24a;
}