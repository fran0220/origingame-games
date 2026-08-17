import { STORM_PALETTE as _0x2150a9 } from "../shared/contracts.js";
const t = "sr-storm-veil-styles";
const n = "sr-storm-veil";
function i(_0x3f1f28) {
  return "#" + (_0x3f1f28 >>> 0).toString(16).padStart(6, "0");
}
function r(_0x5f54ca, _0x35982b = {}, _0x151051 = null) {
  const _0xccc20d = _0x5f54ca ?? {};
  if (Array.isArray(_0xccc20d.position) && _0xccc20d.position.length >= 3) {
    return [Number(_0xccc20d.position[0]) || 0, Number(_0xccc20d.position[1]) || 0, Number(_0xccc20d.position[2]) || 0];
  }
  const _0xc23333 = _0xccc20d.center ?? _0xccc20d.at ?? _0xccc20d.worldPosition ?? _0xccc20d.lockedPadCenter;
  if (_0xc23333 && Number.isFinite(Number(_0xc23333.x))) {
    return [Number(_0xc23333.x) || 0, Number(_0xc23333.y) || 0, Number(_0xc23333.z) || 0];
  }
  if (_0xccc20d.x != null && _0xccc20d.y != null && _0xccc20d.z != null) {
    return [Number(_0xccc20d.x) || 0, Number(_0xccc20d.y) || 0, Number(_0xccc20d.z) || 0];
  }
  const _0x9eee39 = (_0x5e0c0a, _0x5c757d) => {
    if (!Array.isArray(_0x5e0c0a)) {
      return null;
    }
    for (const _0x50c20e of _0x5c757d) {
      if (_0x50c20e == null) {
        continue;
      }
      const _0x4816e3 = _0x5e0c0a.find(_0x1f68ff => _0x1f68ff?.spiritId === _0x50c20e || _0x1f68ff?.anchorId === _0x50c20e || _0x1f68ff?.beaconId === _0x50c20e || _0x1f68ff?.fieldId === _0x50c20e || _0x1f68ff?.gateId === _0x50c20e || _0x1f68ff?.id === _0x50c20e);
      if (!_0x4816e3) {
        continue;
      }
      if (_0x4816e3.center && Number.isFinite(Number(_0x4816e3.center.x))) {
        return [Number(_0x4816e3.center.x) || 0, Number(_0x4816e3.center.y) || 0, Number(_0x4816e3.center.z) || 0];
      }
      const _0x41268e = _0x4816e3.propRoot?.position ?? _0x4816e3.meshRoot?.position ?? _0x4816e3.frameRoot?.position;
      if (_0x41268e && Number.isFinite(Number(_0x41268e.x))) {
        return [Number(_0x41268e.x) || 0, Number(_0x41268e.y) || 0, Number(_0x41268e.z) || 0];
      }
    }
    return null;
  };
  const _0x80cd8e = _0xccc20d.spiritId ?? (_0x151051 === "spirit" ? _0xccc20d.id : null);
  const _0x25d55b = _0xccc20d.anchorId ?? (_0x151051 === "anchor" ? _0xccc20d.id : null);
  const _0x5f5ece = _0xccc20d.beaconId ?? (_0x151051 === "beacon" ? _0xccc20d.id : null);
  const _0x2e5e0e = _0xccc20d.fieldId ?? (_0x151051 === "storm" ? _0xccc20d.id : null);
  const _0x1cf5fd = _0xccc20d.gateId ?? (_0x151051 === "gate" ? _0xccc20d.id : null);
  return _0x9eee39(_0x35982b.spirits, [_0x80cd8e, _0xccc20d.id]) || _0x9eee39(_0x35982b.anchors, [_0x25d55b, _0xccc20d.id]) || _0x9eee39(_0x35982b.beaconSockets, [_0x5f5ece, _0xccc20d.id]) || _0x9eee39(_0x35982b.stormFields, [_0x2e5e0e, _0xccc20d.id]) || _0x9eee39(_0x35982b.gates, [_0x1cf5fd, _0xccc20d.id]) || [0, 0.4, 0];
}
export function createRescueFx(_0xb3ddd, _0x375a57 = {}) {
  const {
    events: _0x1a738f,
    reducedMotion: _0x35393e = false,
    warden: _0x175521,
    spirits: _0x422d0b = [],
    anchors: _0x10f857 = [],
    beaconSockets: _0x2ce7f6 = [],
    stormFields: _0x47e4ef = [],
    gates: _0x21a3f5 = []
  } = _0x375a57;
  const _0x5307f4 = {
    spirits: _0x422d0b,
    anchors: _0x10f857,
    beaconSockets: _0x2ce7f6,
    stormFields: _0x47e4ef,
    gates: _0x21a3f5
  };
  const _0x384651 = _0xb3ddd.vfx;
  const _0x378dfd = typeof document != "undefined" ? document : null;
  const _0xf93b80 = [];
  let _0x74c26c = false;
  let _0x48469d = null;
  let _0x47d99d = null;
  (function (_0x314fbe, _0x7f8ada) {
    if (!_0x314fbe || _0x314fbe.getElementById(t)) {
      return;
    }
    const _0x5be6c9 = _0x314fbe.createElement("style");
    _0x5be6c9.id = t;
    const _0xaee3aa = i(_0x2150a9.violet);
    const _0x511e0e = i(_0x2150a9.indigo);
    _0x5be6c9.textContent = "\n#" + n + "{\n  position:absolute;\n  inset:0;\n  pointer-events:none;\n  z-index:5;\n  opacity:0;\n  visibility:hidden;\n  transition:" + (_0x7f8ada ? "opacity 180ms linear" : "opacity 320ms ease") + ";\n  background:\n    radial-gradient(ellipse at 50% 40%, " + _0xaee3aa + "22 0%, transparent 58%),\n    linear-gradient(180deg, " + _0x511e0e + "55 0%, " + _0xaee3aa + "28 45%, " + _0x511e0e + "66 100%);\n  mix-blend-mode:screen;\n}\n#" + n + "::after{\n  content:'';\n  position:absolute;\n  inset:0;\n  opacity:" + (_0x7f8ada ? "0.18" : "0.28") + ";\n  background-image:\n    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(124,92,255,0.07) 2px, rgba(124,92,255,0.07) 3px),\n    repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(26,20,48,0.08) 3px, rgba(26,20,48,0.08) 4px);\n  /* Static grain only — never animate opacity/position (no flicker). */\n}\n#" + n + "[data-visible=\"true\"]{\n  opacity:" + (_0x7f8ada ? "0.42" : "0.72") + ";\n  visibility:visible;\n}\n";
    _0x314fbe.head?.appendChild(_0x5be6c9);
  })(_0x378dfd, _0x35393e);
  const _0x592127 = _0xb3ddd.ui?.root ?? _0x378dfd?.getElementById?.("og-ui-root") ?? _0x378dfd?.body ?? null;
  if (_0x378dfd && _0x592127) {
    _0x47d99d = _0x378dfd.getElementById(n);
    if (!_0x47d99d) {
      _0x47d99d = _0x378dfd.createElement("div");
      _0x47d99d.id = n;
      _0x47d99d.setAttribute("aria-hidden", "true");
      _0x47d99d.dataset.visible = "false";
      _0x592127.appendChild(_0x47d99d);
    }
  }
  const _0x2af357 = _0x3e8bc5 => {
    if (!_0x74c26c && _0x384651?.burst) {
      try {
        _0x384651.burst(_0x3e8bc5);
      } catch (_0x5138ab) {
        console.warn("[rescueFx] burst", _0x5138ab);
      }
    }
  };
  const _0x54ebda = () => {
    if (_0x48469d) {
      try {
        _0x48469d.stop?.();
      } catch {}
      try {
        _0x48469d.dispose?.();
      } catch {}
      _0x48469d = null;
    }
  };
  const _0xb89289 = _0x220c7b => {
    _0x54ebda();
    if (_0x74c26c || !_0x384651?.trail || _0x35393e) {
      return;
    }
    const _0x1020ab = function (_0x3e5bcd, _0x1d4af0, _0x4b5108) {
      const _0x35b377 = _0x3e5bcd ?? {};
      if (_0x35b377.target?.isObject3D) {
        return _0x35b377.target;
      }
      if (_0x35b377.propRoot?.isObject3D) {
        return _0x35b377.propRoot;
      }
      if (_0x35b377.mesh?.isObject3D) {
        return _0x35b377.mesh;
      }
      if (_0x35b377.object?.isObject3D) {
        return _0x35b377.object;
      }
      const _0x5cc239 = _0x35b377.spiritId ?? _0x35b377.id;
      if (_0x5cc239 && Array.isArray(_0x1d4af0.spirits)) {
        const _0x230bdc = _0x1d4af0.spirits.find(_0x1a01dd => _0x1a01dd?.spiritId === _0x5cc239 || _0x1a01dd?.id === _0x5cc239);
        if (_0x230bdc?.propRoot?.isObject3D) {
          return _0x230bdc.propRoot;
        }
        if (_0x230bdc?.propRoot) {
          return _0x230bdc.propRoot;
        }
      }
      if (_0x4b5108?.chestRoot?.isObject3D) {
        return _0x4b5108.chestRoot;
      } else if (_0x4b5108?.visualRoot?.isObject3D) {
        return _0x4b5108.visualRoot;
      } else if (_0x4b5108?.footRoot?.isObject3D) {
        return _0x4b5108.footRoot;
      } else if (_0x4b5108?.controller?.object?.isObject3D) {
        return _0x4b5108.controller.object;
      } else {
        return null;
      }
    }(_0x220c7b, _0x5307f4, _0x175521);
    if (_0x1020ab) {
      try {
        _0x48469d = _0x384651.trail(_0x1020ab, {
          color: _0x2150a9.amber,
          width: 0.1,
          lengthMs: 480,
          sampleMs: 36,
          opacity: 0.72
        }) ?? null;
      } catch (_0x56b58c) {
        console.warn("[rescueFx] trail", _0x56b58c);
        _0x48469d = null;
      }
    }
  };
  const _0x13cbea = () => {
    if (_0x47d99d && !_0x74c26c) {
      _0x47d99d.dataset.visible = "true";
    }
  };
  const _0x150559 = () => {
    if (_0x47d99d) {
      _0x47d99d.dataset.visible = "false";
    }
  };
  const _0x4a941d = _0x5c4141 => {
    if (_0x74c26c) {
      return;
    }
    const _0x2de543 = r(_0x5c4141, _0x5307f4, "spirit");
    const _0x573b11 = _0x35393e ? 8 : 18;
    _0x2af357({
      position: [_0x2de543[0], _0x2de543[1] + 0.35, _0x2de543[2]],
      count: _0x573b11,
      palette: [_0x2150a9.amber, 15324671, _0x2150a9.violet],
      size: 0.08,
      speed: _0x35393e ? [0.4, 1] : [0.7, 1.9],
      lifeMs: _0x35393e ? [220, 380] : [320, 620],
      direction: [0, 1, 0],
      spread: 0.95,
      gravity: 0.35,
      drag: 0.88
    });
    _0xb89289(_0x5c4141);
  };
  const _0x2f6881 = _0x1857b1 => {
    if (_0x74c26c) {
      return;
    }
    _0x54ebda();
    const _0x12630b = r(_0x1857b1, _0x5307f4, "anchor");
    const _0x5ecd1e = String(_0x1857b1?.segment ?? _0x1857b1?.beat ?? _0x1857b1?.zone ?? "").toLowerCase().includes("spire") || Boolean(_0x1857b1?.spire) || Boolean(_0x1857b1?.final) || String(_0x1857b1?.anchorId ?? _0x1857b1?.id ?? "").toLowerCase().includes("spire");
    const _0x34fffc = _0x5ecd1e ? _0x35393e ? 16 : 42 : _0x35393e ? 12 : 32;
    _0x2af357({
      position: [_0x12630b[0], _0x12630b[1] + 0.45, _0x12630b[2]],
      count: _0x34fffc,
      palette: _0x5ecd1e ? [_0x2150a9.amber, 16769184, 16773569, _0x2150a9.violet] : [_0x2150a9.amber, 16769184, _0x2150a9.violet, 12891645],
      size: _0x5ecd1e ? 0.14 : 0.11,
      speed: _0x35393e ? _0x5ecd1e ? [0.55, 1.45] : [0.5, 1.3] : _0x5ecd1e ? [1, 3.1] : [0.9, 2.8],
      lifeMs: _0x35393e ? _0x5ecd1e ? [360, 580] : [320, 520] : _0x5ecd1e ? [520, 980] : [480, 920],
      direction: [0, 1, 0],
      spread: _0x5ecd1e ? 0.92 : 1,
      gravity: _0x5ecd1e ? 0.18 : 0.25,
      drag: 0.9
    });
  };
  const _0x96b672 = _0xbcd459 => {
    if (_0x74c26c) {
      return;
    }
    const _0x434629 = r(_0xbcd459, _0x5307f4, "beacon");
    const _0x325088 = _0x35393e ? 8 : 20;
    _0x2af357({
      position: [_0x434629[0], _0x434629[1] + 0.55, _0x434629[2]],
      count: _0x325088,
      palette: [_0x2150a9.amber, 16765562, 16773569],
      size: 0.1,
      speed: _0x35393e ? [0.3, 0.9] : [0.5, 1.6],
      lifeMs: _0x35393e ? [280, 460] : [400, 780],
      direction: [0, 1, 0],
      spread: 0.85,
      gravity: 0.15,
      drag: 0.92
    });
  };
  const _0x18a983 = _0x547b1f => {
    if (_0x74c26c) {
      return;
    }
    const _0x3b2437 = r(_0x547b1f, _0x5307f4, "gate");
    const _0x345342 = _0x35393e ? 8 : 22;
    _0x2af357({
      position: [_0x3b2437[0], _0x3b2437[1] + 0.2, _0x3b2437[2]],
      count: _0x345342,
      palette: [_0x2150a9.slate, 9741240, _0x2150a9.amber],
      size: 0.09,
      speed: _0x35393e ? [0.4, 1.1] : [0.7, 2.2],
      lifeMs: _0x35393e ? [260, 420] : [360, 700],
      direction: [0, 1, 0],
      spread: 0.9,
      gravity: 0.8,
      drag: 0.82
    });
  };
  const _0x17cc89 = () => {
    if (!_0x74c26c) {
      _0x13cbea();
    }
  };
  const _0xc6d514 = () => {
    if (!_0x74c26c) {
      _0x150559();
    }
  };
  const _0x608106 = () => {
    _0x54ebda();
    _0x150559();
  };
  if (_0x1a738f?.on) {
    _0xf93b80.push(_0x1a738f.on("spiritPickedUp", _0x4a941d));
    _0xf93b80.push(_0x1a738f.on("spiritFreed", _0x2f6881));
    _0xf93b80.push(_0x1a738f.on("beaconLit", _0x96b672));
    _0xf93b80.push(_0x1a738f.on("gateOpened", _0x18a983));
    _0xf93b80.push(_0x1a738f.on("stormEnter", _0x17cc89));
    _0xf93b80.push(_0x1a738f.on("stormExit", _0xc6d514));
    _0xf93b80.push(_0x1a738f.on("interferenceEnter", _0x17cc89));
    _0xf93b80.push(_0x1a738f.on("interferenceExit", _0xc6d514));
  }
  if (typeof _0xb3ddd.onReset == "function") {
    _0xf93b80.push(_0xb3ddd.onReset(() => {
      if (!_0x74c26c) {
        _0x608106();
      }
    }));
  }
  const _0x29d075 = () => {
    if (!_0x74c26c) {
      _0x74c26c = true;
      _0x608106();
      for (const _0x5e13c1 of _0xf93b80.splice(0)) {
        try {
          _0x5e13c1();
        } catch {}
      }
      try {
        _0x47d99d?.remove?.();
      } catch {}
      _0x47d99d = null;
    }
  };
  _0xb3ddd.own?.(_0x29d075);
  return {
    dispose: _0x29d075,
    showVeil: _0x13cbea,
    hideVeil: _0x150559,
    stopTrail: _0x54ebda
  };
}