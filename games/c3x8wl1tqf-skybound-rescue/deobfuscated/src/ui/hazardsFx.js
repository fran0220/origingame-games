import { STORM_PALETTE as _0x41e486 } from "../shared/contracts.js";
function r(_0x19f658, _0x35be06 = {}) {
  const _0x48261f = _0x19f658 ?? {};
  if (Array.isArray(_0x48261f.position) && _0x48261f.position.length >= 3) {
    return [Number(_0x48261f.position[0]) || 0, Number(_0x48261f.position[1]) || 0, Number(_0x48261f.position[2]) || 0];
  }
  const _0x34cf39 = _0x48261f.center ?? _0x48261f.at ?? _0x48261f.worldPosition;
  if (_0x34cf39 && Number.isFinite(_0x34cf39.x)) {
    return [Number(_0x34cf39.x) || 0, Number(_0x34cf39.y) || 0, Number(_0x34cf39.z) || 0];
  }
  if (_0x48261f.x != null && _0x48261f.y != null && _0x48261f.z != null) {
    return [Number(_0x48261f.x) || 0, Number(_0x48261f.y) || 0, Number(_0x48261f.z) || 0];
  }
  const _0x38ae43 = _0x48261f.collapseId ?? _0x48261f.plateId ?? _0x48261f.id;
  if (_0x38ae43 && Array.isArray(_0x35be06.collapses)) {
    const _0x2e0216 = _0x35be06.collapses.find(_0x1cbd32 => _0x1cbd32.collapseId === _0x38ae43 || _0x1cbd32.id === _0x38ae43);
    if (_0x2e0216?.center) {
      return [Number(_0x2e0216.center.x) || 0, Number(_0x2e0216.center.y) || 0, Number(_0x2e0216.center.z) || 0];
    }
    const _0x28073f = _0x2e0216?.meshRoot?.position;
    if (_0x28073f) {
      return [Number(_0x28073f.x) || 0, Number(_0x28073f.y) || 0, Number(_0x28073f.z) || 0];
    }
  }
  const _0x1420fb = _0x48261f.shearId ?? _0x48261f.id;
  if (_0x1420fb && Array.isArray(_0x35be06.shears)) {
    const _0x5a8c8f = _0x35be06.shears.find(_0xb7fd54 => _0xb7fd54.shearId === _0x1420fb || _0xb7fd54.id === _0x1420fb);
    if (_0x5a8c8f?.center) {
      return [Number(_0x5a8c8f.center.x) || 0, Number(_0x5a8c8f.center.y) || 0, Number(_0x5a8c8f.center.z) || 0];
    }
  }
  const _0x455931 = _0x48261f.player ?? _0x48261f.foot ?? _0x48261f.warden;
  if (_0x455931 && Number.isFinite(_0x455931.x)) {
    return [Number(_0x455931.x) || 0, Number(_0x455931.y) || 0, Number(_0x455931.z) || 0];
  } else {
    return [0, 0, 0];
  }
}
export function createHazardsFx(_0xffaa38, _0x22d73e = {}) {
  const {
    events: _0x557665,
    reducedMotion: _0x4149a0 = false,
    collapses: _0x5655c1 = [],
    shears: _0x30a31b = []
  } = _0x22d73e;
  const _0x255993 = _0xffaa38.vfx;
  const _0x2f41aa = {
    collapses: _0x5655c1,
    shears: _0x30a31b
  };
  const _0x11414b = [];
  let _0x3e5260 = false;
  const _0x1a7573 = _0x4ea131 => {
    if (!_0x3e5260 && _0x255993?.burst) {
      try {
        _0x255993.burst(_0x4ea131);
      } catch (_0x3c643c) {
        console.warn("[hazardsFx] burst", _0x3c643c);
      }
    }
  };
  const _0x5f33f3 = _0x572f6e => {
    if (_0x3e5260) {
      return;
    }
    const _0x1f5de2 = r(_0x572f6e, _0x2f41aa);
    _0x1a7573({
      position: _0x1f5de2,
      count: _0x4149a0 ? 10 : 28,
      palette: [_0x41e486.slate, 7041664, 9741240],
      size: 0.11,
      speed: _0x4149a0 ? [0.6, 1.4] : [1.2, 3.2],
      lifeMs: _0x4149a0 ? [280, 480] : [360, 780],
      direction: [0, 1, 0],
      spread: 0.85,
      gravity: 2.4,
      drag: 0.75
    });
  };
  const _0x80803b = _0x2b18e4 => {
    if (_0x3e5260) {
      return;
    }
    const _0x5f3dc1 = r(_0x2b18e4, _0x2f41aa);
    _0x1a7573({
      position: _0x5f3dc1,
      count: _0x4149a0 ? 12 : 36,
      palette: [_0x41e486.slate, 4674921, 1976635],
      size: 0.14,
      speed: _0x4149a0 ? [0.8, 1.8] : [1.5, 4.2],
      lifeMs: _0x4149a0 ? [320, 560] : [420, 900],
      direction: [0, -1, 0],
      spread: 0.55,
      gravity: 4.5,
      drag: 0.65
    });
    if (!_0x4149a0) {
      _0x1a7573({
        position: [_0x5f3dc1[0], _0x5f3dc1[1] + 0.35, _0x5f3dc1[2]],
        count: 14,
        color: 9741240,
        size: 0.08,
        speed: [0.5, 1.6],
        lifeMs: [280, 520],
        direction: [0, 1, 0],
        spread: 0.9,
        gravity: 1.2,
        drag: 0.85
      });
    }
  };
  const _0x262a39 = _0x4304e6 => {
    if (_0x3e5260) {
      return;
    }
    const _0x3760ae = r(_0x4304e6, _0x2f41aa);
    const _0xc8ecb = _0x4149a0 ? 8 : 22;
    _0x1a7573({
      position: [_0x3760ae[0], _0x3760ae[1] + 0.2, _0x3760ae[2]],
      count: _0xc8ecb,
      palette: [_0x41e486.amber, 16765562, _0x41e486.violet],
      size: 0.1,
      speed: _0x4149a0 ? [0.4, 1.1] : [0.8, 2.2],
      lifeMs: _0x4149a0 ? [260, 420] : [380, 720],
      direction: [0, 1, 0],
      spread: 0.95,
      gravity: 0.4,
      drag: 0.9
    });
  };
  const _0x28821b = _0x3ea778 => {
    if (_0x3e5260) {
      return;
    }
    const _0xc38aca = r(_0x3ea778, _0x2f41aa);
    if (_0x4149a0) {
      _0x1a7573({
        position: _0xc38aca,
        count: 8,
        color: _0x41e486.violet,
        size: 0.12,
        speed: [0.5, 1.2],
        lifeMs: [220, 380],
        spread: 1,
        gravity: 0.2,
        drag: 0.9
      });
    } else {
      _0x1a7573({
        position: _0xc38aca,
        count: 26,
        palette: [_0x41e486.violet, 10980346, 4988309],
        size: 0.09,
        speed: [2.2, 5.5],
        lifeMs: [240, 560],
        direction: _0x3ea778?.impulse ? [Number(_0x3ea778.impulse.x) || 1, 0.15, Number(_0x3ea778.impulse.z) || 0] : [1, 0.2, 0],
        spread: 0.7,
        gravity: 1.1,
        drag: 0.7
      });
      _0x1a7573({
        position: [_0xc38aca[0], _0xc38aca[1] + 0.4, _0xc38aca[2]],
        count: 10,
        color: 12891645,
        size: 0.06,
        speed: [1, 2.4],
        lifeMs: [200, 400],
        spread: 1,
        gravity: 0.5,
        drag: 0.85
      });
    }
  };
  if (_0x557665?.on) {
    _0x11414b.push(_0x557665.on("collapseStart", _0x5f33f3));
    _0x11414b.push(_0x557665.on("plateFell", _0x80803b));
    _0x11414b.push(_0x557665.on("stabilized", _0x262a39));
    _0x11414b.push(_0x557665.on("shearTriggered", _0x28821b));
  }
  const _0x54d411 = () => {
    if (!_0x3e5260) {
      _0x3e5260 = true;
      for (const _0x463d3f of _0x11414b.splice(0)) {
        try {
          _0x463d3f();
        } catch {}
      }
      try {
        _0x255993?.clear?.();
      } catch {}
    }
  };
  _0xffaa38.own?.(_0x54d411);
  return {
    dispose: _0x54d411
  };
}