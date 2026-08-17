import * as _0x3ef4b9 from "three";
import { STORM_PALETTE as _0x5bd9a7 } from "../shared/contracts.js";
function n(_0x5cead0, _0x265914 = {}) {
  const _0x1252e4 = _0x5cead0 ?? {};
  if (Array.isArray(_0x1252e4.position) && _0x1252e4.position.length >= 3) {
    return [Number(_0x1252e4.position[0]) || 0, Number(_0x1252e4.position[1]) || 0, Number(_0x1252e4.position[2]) || 0];
  }
  const _0x6075ef = _0x1252e4.center ?? _0x1252e4.at ?? _0x1252e4.worldPosition ?? _0x1252e4.lockedPadCenter;
  if (_0x6075ef && Number.isFinite(Number(_0x6075ef.x))) {
    return [Number(_0x6075ef.x) || 0, Number(_0x6075ef.y) || 0, Number(_0x6075ef.z) || 0];
  }
  if (_0x1252e4.x != null && _0x1252e4.y != null && _0x1252e4.z != null) {
    return [Number(_0x1252e4.x) || 0, Number(_0x1252e4.y) || 0, Number(_0x1252e4.z) || 0];
  }
  const _0x207e8c = _0x1252e4.anchorId ?? _0x1252e4.id;
  if (_0x207e8c && Array.isArray(_0x265914.anchors)) {
    const _0x38b5a1 = _0x265914.anchors.find(_0x2919fc => _0x2919fc?.anchorId === _0x207e8c || _0x2919fc?.id === _0x207e8c);
    if (_0x38b5a1?.center && Number.isFinite(Number(_0x38b5a1.center.x))) {
      return [Number(_0x38b5a1.center.x) || 0, Number(_0x38b5a1.center.y) || 0, Number(_0x38b5a1.center.z) || 0];
    }
    const _0x2544aa = _0x38b5a1?.propRoot?.position;
    if (_0x2544aa && Number.isFinite(Number(_0x2544aa.x))) {
      return [Number(_0x2544aa.x) || 0, Number(_0x2544aa.y) || 0, Number(_0x2544aa.z) || 0];
    }
  }
  if (Array.isArray(_0x265914.anchors) && _0x265914.anchors.length > 0) {
    const _0x5cef0f = _0x265914.anchors.filter(_0x20fe95 => {
      const _0x1e075b = String(_0x20fe95?.segment ?? _0x20fe95?.beat ?? _0x20fe95?.zone ?? "").toLowerCase();
      const _0x3eead3 = String(_0x20fe95?.anchorId ?? _0x20fe95?.id ?? "").toLowerCase();
      return _0x1e075b.includes("spire") || _0x3eead3.includes("spire");
    });
    const _0x169e04 = _0x5cef0f.length > 0 ? _0x5cef0f : _0x265914.anchors;
    const _0x3c8f24 = _0x169e04[_0x169e04.length - 1];
    if (_0x3c8f24?.center && Number.isFinite(Number(_0x3c8f24.center.x))) {
      return [Number(_0x3c8f24.center.x) || 0, Number(_0x3c8f24.center.y) || 0, Number(_0x3c8f24.center.z) || 0];
    }
    const _0x54b4b6 = _0x3c8f24?.propRoot?.position;
    if (_0x54b4b6 && Number.isFinite(Number(_0x54b4b6.x))) {
      return [Number(_0x54b4b6.x) || 0, Number(_0x54b4b6.y) || 0, Number(_0x54b4b6.z) || 0];
    }
  }
  const _0x4e916b = _0x265914.warden?.chestRoot?.position ?? _0x265914.warden?.footRoot?.position;
  if (_0x4e916b && Number.isFinite(Number(_0x4e916b.x))) {
    return [Number(_0x4e916b.x) || 0, Number(_0x4e916b.y) || 0, Number(_0x4e916b.z) || 0];
  } else {
    return [0, 0.5, 0];
  }
}
export function createFinalePresentation(_0x133014, _0x5b2d46 = {}) {
  const {
    events: _0x5d2af9,
    shellUi: _0x61797b,
    getSegmentHint: _0x43bcc9,
    getSpireZ: _0x1187ed,
    anchors: _0x32a04f = [],
    warden: _0x382ceb
  } = _0x5b2d46;
  const _0x4d17d2 = Boolean(_0x5b2d46.reducedMotion ?? _0x61797b?.reducedMotion);
  const _0x46d78d = {
    anchors: _0x32a04f,
    warden: _0x382ceb
  };
  const _0x66858c = _0x133014.vfx;
  const _0x4740c0 = _0x133014.fx;
  const _0x569e54 = _0x133014.scene;
  const _0x4112dc = [];
  let _0x199fd0 = false;
  let _0x7b8ca6 = false;
  let _0xf97e9d = false;
  let _0x44bb05 = 0;
  let _0x5aab55 = null;
  let _0x3829fd = null;
  let _0x130963 = null;
  const _0x3fadbd = _0x271abb => {
    if (!_0x199fd0 && _0x66858c?.burst) {
      try {
        _0x66858c.burst(_0x271abb);
      } catch (_0x20a839) {
        console.warn("[finale] burst", _0x20a839);
      }
    }
  };
  const _0xc89373 = () => {
    if (_0x3829fd) {
      try {
        _0x3829fd.cancel?.();
      } catch {}
      _0x3829fd = null;
    }
    if (_0x5aab55) {
      try {
        _0x569e54?.remove?.(_0x5aab55);
      } catch {}
      _0x5aab55.traverse?.(_0x572996 => {
        try {
          _0x572996.geometry?.dispose?.();
          if (Array.isArray(_0x572996.material)) {
            for (const _0x3f98fb of _0x572996.material) {
              _0x3f98fb?.dispose?.();
            }
          } else {
            _0x572996.material?.dispose?.();
          }
        } catch {}
      });
      _0x5aab55 = null;
    }
  };
  const _0x1be15c = () => {
    _0xc89373();
    _0xf97e9d = false;
    _0x44bb05 = 0;
    _0x7b8ca6 = false;
    _0x130963 = null;
  };
  const _0x4c6f0a = _0x1f1780 => {
    if (_0x199fd0) {
      return;
    }
    if (_0x7b8ca6) {
      return;
    }
    _0x7b8ca6 = true;
    _0x130963 = _0x1f1780 ?? _0x130963;
    const _0x2aa67c = n(_0x130963, _0x46d78d);
    const [_0x8e3137, _0xc770ea, _0x3e5524] = _0x2aa67c;
    _0x3fadbd({
      position: [_0x8e3137, _0xc770ea + 0.6, _0x3e5524],
      count: _0x4d17d2 ? 14 : 40,
      palette: [_0x5bd9a7.amber, 16769184, _0x5bd9a7.violet, 12891645],
      size: _0x4d17d2 ? 0.12 : 0.16,
      speed: _0x4d17d2 ? [0.4, 1.1] : [0.8, 2.6],
      lifeMs: _0x4d17d2 ? [420, 680] : [700, 1400],
      direction: [0, 1, 0],
      spread: _0x4d17d2 ? 0.55 : 0.85,
      gravity: 0.12,
      drag: 0.92
    });
    if (!_0x569e54 || _0x3ef4b9 === undefined) {
      return;
    }
    _0xc89373();
    const _0x19b5e3 = new _0x3ef4b9.Group();
    _0x19b5e3.name = "sr-win-shaft";
    _0x19b5e3.position.set(_0x8e3137, _0xc770ea, _0x3e5524);
    const _0x44f92c = _0x4d17d2 ? 8 : 14;
    const _0x23a5da = new _0x3ef4b9.CylinderGeometry(0.18, 0.55, _0x44f92c, 12, 1, true);
    const _0x31a8af = new _0x3ef4b9.MeshBasicMaterial({
      color: _0x5bd9a7.amber,
      transparent: true,
      opacity: _0x4d17d2 ? 0.28 : 0.42,
      depthWrite: false,
      blending: _0x3ef4b9.AdditiveBlending,
      side: _0x3ef4b9.DoubleSide
    });
    const _0x147909 = new _0x3ef4b9.Mesh(_0x23a5da, _0x31a8af);
    _0x147909.position.y = _0x44f92c * 0.5 + 0.2;
    _0x19b5e3.add(_0x147909);
    const _0x42b958 = new _0x3ef4b9.CylinderGeometry(0.06, 0.14, _0x44f92c * 0.92, 8, 1, true);
    const _0x4857e7 = new _0x3ef4b9.MeshBasicMaterial({
      color: _0x5bd9a7.violet,
      transparent: true,
      opacity: _0x4d17d2 ? 0.22 : 0.38,
      depthWrite: false,
      blending: _0x3ef4b9.AdditiveBlending,
      side: _0x3ef4b9.DoubleSide
    });
    const _0x119647 = new _0x3ef4b9.Mesh(_0x42b958, _0x4857e7);
    _0x119647.position.y = _0x44f92c * 0.48 + 0.2;
    _0x19b5e3.add(_0x119647);
    const _0x36ffcc = new _0x3ef4b9.RingGeometry(0.35, 0.95, 24);
    const _0x4d1372 = new _0x3ef4b9.MeshBasicMaterial({
      color: _0x5bd9a7.amber,
      transparent: true,
      opacity: _0x4d17d2 ? 0.35 : 0.55,
      depthWrite: false,
      blending: _0x3ef4b9.AdditiveBlending,
      side: _0x3ef4b9.DoubleSide
    });
    const _0x3e6e7b = new _0x3ef4b9.Mesh(_0x36ffcc, _0x4d1372);
    _0x3e6e7b.rotation.x = -Math.PI / 2;
    _0x3e6e7b.position.y = 0.08;
    _0x19b5e3.add(_0x3e6e7b);
    _0x569e54.add(_0x19b5e3);
    _0x5aab55 = _0x19b5e3;
    const _0x2604c9 = _0x4d17d2 ? 0.32 : 0.5;
    _0x31a8af.opacity = 0;
    _0x4857e7.opacity = 0;
    _0x4d1372.opacity = 0;
    const _0x3252b9 = () => {
      if (!_0x199fd0 && _0x5aab55) {
        if (_0x4740c0?.tween) {
          _0x3829fd = _0x4740c0.tween({
            from: 0,
            to: 1,
            durationMs: _0x4d17d2 ? 700 : 1400,
            ease: "outCubic",
            onUpdate: _0x249fc5 => {
              if (!_0x5aab55) {
                return;
              }
              _0x31a8af.opacity = _0x2604c9 * _0x249fc5;
              _0x4857e7.opacity = (_0x4d17d2 ? 0.24 : 0.4) * _0x249fc5;
              _0x4d1372.opacity = (_0x4d17d2 ? 0.3 : 0.55) * Math.min(1, _0x249fc5 * 1.2);
              const _0x1bc438 = 0.85 + _0x249fc5 * 0.2;
              _0x147909.scale.set(_0x1bc438, 1, _0x1bc438);
              _0x119647.scale.set(_0x1bc438 * 0.9, 1, _0x1bc438 * 0.9);
              _0x3e6e7b.scale.setScalar(0.7 + _0x249fc5 * 0.55);
            },
            onComplete: () => {
              if (!_0x4d17d2 && !_0x199fd0 && !!_0x5aab55) {
                _0x3829fd = _0x4740c0.tween({
                  from: 0,
                  to: 1,
                  durationMs: 2200,
                  ease: "inOutCubic",
                  onUpdate: _0x475684 => {
                    if (!_0x5aab55) {
                      return;
                    }
                    const _0x364e63 = 0.92 + Math.sin(_0x475684 * Math.PI * 2) * 0.08;
                    _0x31a8af.opacity = _0x2604c9 * _0x364e63;
                    _0x4857e7.opacity = _0x364e63 * 0.4;
                  }
                });
              }
            }
          });
        } else {
          _0x31a8af.opacity = _0x2604c9;
          _0x4857e7.opacity = _0x4d17d2 ? 0.24 : 0.4;
          _0x4d1372.opacity = _0x4d17d2 ? 0.3 : 0.55;
        }
      }
    };
    if (_0x4740c0?.timeline) {
      try {
        _0x3829fd = _0x4740c0.timeline([{
          call: () => {
            _0x3252b9();
          }
        }, {
          waitMs: _0x4d17d2 ? 80 : 160
        }, {
          call: () => {
            if (!_0x4d17d2 && !_0x199fd0) {
              try {
                _0x4740c0.shake?.(0.12, 280);
              } catch {}
            }
          }
        }], {
          name: "win-shaft",
          reducedMotion: "respect"
        });
      } catch (_0x2c6350) {
        console.warn("[finale] timeline", _0x2c6350);
        _0x3252b9();
      }
    } else {
      _0x3252b9();
    }
    try {
      _0x133014.ui?.flash?.({
        tone: "success",
        durationMs: _0x4d17d2 ? 220 : 420
      });
    } catch {}
  };
  const _0x324e3a = _0x11d5de => {
    if (_0x199fd0 || !_0xf97e9d) {
      return;
    }
    const _0x108e54 = _0x11d5de ?? n(null, _0x46d78d);
    const _0x2bf5c9 = _0x4d17d2 ? 6 : 16;
    _0x3fadbd({
      position: [_0x108e54[0], _0x108e54[1] + 2.2, _0x108e54[2]],
      count: _0x2bf5c9,
      palette: [_0x5bd9a7.violet, 10980346, 15324671, _0x5bd9a7.amber],
      size: _0x4d17d2 ? 0.07 : 0.1,
      speed: _0x4d17d2 ? [0.8, 1.8] : [1.6, 4.2],
      lifeMs: _0x4d17d2 ? [160, 280] : [220, 480],
      direction: [0, -1, 0],
      spread: _0x4d17d2 ? 0.35 : 0.7,
      gravity: 0.05,
      drag: 0.86
    });
    if (!_0x4d17d2) {
      try {
        _0x4740c0?.shake?.(0.05, 120);
      } catch {}
    }
  };
  const _0x4f2cf4 = _0x3d2306 => {
    if (String(_0x3d2306?.segment ?? _0x3d2306?.beat ?? _0x3d2306?.zone ?? _0x3d2306?.region ?? "").toLowerCase().includes("spire")) {
      return true;
    }
    if ((() => {
      try {
        if (typeof _0x43bcc9 == "function") {
          const _0x2504c4 = _0x43bcc9();
          if (_0x2504c4 != null && _0x2504c4 !== "") {
            return String(_0x2504c4).toLowerCase();
          }
        }
      } catch {}
      return "";
    })().includes("spire")) {
      return true;
    }
    try {
      if (typeof _0x1187ed == "function") {
        const _0x36d9dd = Number(_0x1187ed());
        const _0xb61e6e = Number(_0x382ceb?.footRoot?.position?.z);
        if (Number.isFinite(_0x36d9dd) && Number.isFinite(_0xb61e6e) && _0xb61e6e >= _0x36d9dd - 2) {
          return true;
        }
      }
    } catch {}
    return false;
  };
  const _0x1d20a6 = _0x1ef795 => {
    _0xf97e9d = Boolean(_0x1ef795);
    if (!_0xf97e9d) {
      _0x44bb05 = 0;
    }
  };
  const _0x157c69 = _0x392534 => {
    if (!_0x199fd0) {
      _0x130963 = _0x392534;
      _0x4c6f0a(_0x392534);
    }
  };
  if (_0x5d2af9?.on) {
    _0x4112dc.push(_0x5d2af9.on("winTriggered", _0x157c69));
    _0x4112dc.push(_0x5d2af9.on("runWon", _0x157c69));
    _0x4112dc.push(_0x5d2af9.on("spiritFreed", _0x32cbdb => {
      if (!_0x199fd0) {
        if (_0x4f2cf4(_0x32cbdb)) {
          _0x1d20a6(true);
          if (!_0x7b8ca6) {
            _0x324e3a(n(_0x32cbdb, _0x46d78d));
          }
        }
      }
    }));
    _0x4112dc.push(_0x5d2af9.on("segmentChanged", _0x4c18c9 => {
      if (_0x199fd0) {
        return;
      }
      const _0x116e5d = String(_0x4c18c9?.segment ?? _0x4c18c9?.id ?? _0x4c18c9 ?? "").toLowerCase();
      _0x1d20a6(_0x116e5d.includes("spire"));
    }));
    _0x4112dc.push(_0x5d2af9.on("winProgress", _0x1302b1 => {
      if (!_0x199fd0) {
        _0x1d20a6(true);
        if (_0x1302b1?.final || _0x1302b1?.complete) {
          _0x157c69(_0x1302b1);
        }
      }
    }));
  }
  if (typeof _0x133014.onPhaseChange == "function") {
    _0x4112dc.push(_0x133014.onPhaseChange(_0x157dae => {
      if (!_0x199fd0) {
        if (_0x157dae !== "complete") {
          if (_0x157dae === "title" || _0x157dae === "fail") {
            _0x1be15c();
          }
        } else {
          _0x4c6f0a(_0x130963);
        }
      }
    }));
  }
  if (typeof _0x133014.onReset == "function") {
    _0x4112dc.push(_0x133014.onReset(() => {
      if (!_0x199fd0) {
        _0x1be15c();
      }
    }));
  }
  const _0x5e5ea7 = _0x133014.loop?.onUpdate?.(_0x202c30 => {
    if (_0x199fd0) {
      return;
    }
    const _0x1d36bb = _0x133014.phase ?? _0x133014.getPhase?.();
    if (_0x1d36bb !== "playing" && _0x1d36bb !== "paused") {
      return;
    }
    if (!_0xf97e9d && _0x4f2cf4(null)) {
      _0x1d20a6(true);
    }
    if (!_0xf97e9d || _0x7b8ca6) {
      return;
    }
    _0x44bb05 += _0x202c30;
    if (_0x44bb05 >= (_0x4d17d2 ? 4.4799999999999995 : 2.8)) {
      _0x44bb05 = 0;
      _0x324e3a();
    }
  }, 30);
  if (typeof _0x5e5ea7 == "function") {
    _0x4112dc.push(_0x5e5ea7);
  }
  if ((_0x133014.phase ?? _0x133014.getPhase?.()) === "complete") {
    _0x4c6f0a(null);
  }
  const _0x5cbb0d = () => {
    if (!_0x199fd0) {
      _0x199fd0 = true;
      _0x1be15c();
      for (const _0x1411f2 of _0x4112dc.splice(0)) {
        try {
          _0x1411f2();
        } catch {}
      }
    }
  };
  _0x133014.own?.(_0x5cbb0d);
  return {
    playWinShaft: _0x4c6f0a,
    clear: _0x1be15c,
    dispose: _0x5cbb0d
  };
}