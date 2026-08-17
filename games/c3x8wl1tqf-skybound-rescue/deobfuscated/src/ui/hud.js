import { CHARGE_RULES as _0x5ede96, STORM_PALETTE as _0x64336 } from "../shared/contracts.js";
const n = _0x5ede96.cap ?? 3;
function a(_0x482cb2) {
  return "#" + (_0x482cb2 >>> 0).toString(16).padStart(6, "0");
}
const r = "sr-charge-hud-styles";
export function createChargeHud(_0x6d805, _0x8e200a = {}) {
  const {
    events: _0x5e8371,
    shellUi: _0x3740ad,
    getStabilizeTarget: _0x1de9d7,
    getCharges: _0x1f3c74
  } = _0x8e200a;
  const _0x2abdc5 = typeof document != "undefined" ? document : null;
  (function (_0x3d9c06, _0x3f40c0) {
    if (!_0x3d9c06 || _0x3d9c06.getElementById(r)) {
      return;
    }
    const _0x17182c = _0x3d9c06.createElement("style");
    _0x17182c.id = r;
    const _0x43273c = a(_0x64336.amber);
    const _0x1641c0 = a(_0x64336.violet);
    const _0xf942fc = a(_0x64336.slateDeep);
    _0x17182c.textContent = "\n.sr-charge-hud-slot{\n  display:flex!important;\n  position:absolute;\n  top:12px;left:12px;\n  width:auto!important;height:auto!important;\n  overflow:visible!important;\n  pointer-events:none;\n  z-index:6;\n}\n.sr-charge-panel{\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  gap:8px;\n  padding:8px 10px;\n  background:rgba(30,41,59,0.72);\n  border:1px solid " + _0x1641c0 + "88;\n  box-shadow:0 0 0 1px " + _0xf942fc + ", 0 6px 18px rgba(0,0,0,0.35);\n  border-radius:2px;\n}\n.sr-charge-label{\n  font:600 10px/1 ui-sans-serif,system-ui,sans-serif;\n  letter-spacing:0.14em;\n  text-transform:uppercase;\n  color:rgba(245,239,227,0.55);\n  margin-right:2px;\n}\n.sr-charge-pips{\n  display:flex;\n  flex-direction:row;\n  gap:6px;\n}\n.sr-charge-pip{\n  width:14px;height:14px;\n  box-sizing:border-box;\n  border:2px solid " + _0x1641c0 + ";\n  background:transparent;\n  border-radius:1px;\n  transform:rotate(45deg);\n  transition:" + (_0x3f40c0 ? "none" : "background 160ms ease, border-color 160ms ease, box-shadow 160ms ease") + ";\n}\n.sr-charge-pip[data-filled=\"true\"]{\n  background:" + _0x43273c + ";\n  border-color:" + _0x43273c + ";\n  box-shadow:0 0 10px " + _0x43273c + "66;\n}\n.sr-stabilize-prompt{\n  position:absolute;\n  left:50%;\n  bottom:14%;\n  transform:translateX(-50%);\n  pointer-events:none;\n  z-index:6;\n  display:none;\n  align-items:center;\n  gap:8px;\n  padding:8px 14px;\n  background:rgba(30,41,59,0.78);\n  border:1px solid " + _0x1641c0 + "99;\n  border-radius:2px;\n  color:#f5efe3;\n  font:600 13px/1.2 ui-sans-serif,system-ui,sans-serif;\n  letter-spacing:0.04em;\n  box-shadow:0 8px 22px rgba(0,0,0,0.4);\n  white-space:nowrap;\n}\n.sr-stabilize-prompt[data-visible=\"true\"]{ display:flex; }\n.sr-stabilize-key{\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  min-width:22px;\n  height:22px;\n  padding:0 6px;\n  background:" + _0x43273c + ";\n  color:" + _0xf942fc + ";\n  border-radius:2px;\n  font:700 12px/1 ui-sans-serif,system-ui,sans-serif;\n}\n.sr-stabilize-text{ color:rgba(245,239,227,0.92); }\n@media (max-width:720px){\n  .sr-charge-hud-slot{ top:8px;left:8px; }\n  .sr-charge-panel{ padding:6px 8px; gap:6px; }\n  .sr-charge-pip{ width:12px;height:12px; }\n  .sr-stabilize-prompt{ bottom:18%; font-size:12px; padding:7px 12px; }\n}\n";
    _0x3d9c06.head?.appendChild(_0x17182c);
  })(_0x2abdc5, Boolean(_0x3740ad?.reducedMotion));
  const _0x3206d0 = _0x3740ad?.hud?.chargeHudSlot ?? _0x2abdc5?.getElementById?.("sr-charge-hud-slot") ?? null;
  const _0x2ba32f = _0x3740ad?.hudRoot ?? _0x3740ad?.hud?.root ?? _0x6d805.ui?.root ?? null;
  let _0x38cd33 = null;
  let _0x1bed68 = [];
  let _0x529baf = null;
  if (_0x3206d0 && _0x2abdc5) {
    _0x3206d0.hidden = false;
    _0x3206d0.removeAttribute("aria-hidden");
    _0x3206d0.setAttribute("aria-hidden", "false");
    _0x3206d0.setAttribute("role", "status");
    _0x3206d0.setAttribute("aria-label", "Pulse charges");
    _0x3206d0.style.cssText = "";
    _0x3206d0.classList.add("sr-charge-hud-slot");
    _0x3206d0.replaceChildren();
    _0x38cd33 = _0x2abdc5.createElement("div");
    _0x38cd33.className = "sr-charge-panel";
    _0x38cd33.dataset.role = "charge-pips";
    const _0x31ffce = _0x2abdc5.createElement("span");
    _0x31ffce.className = "sr-charge-label";
    _0x31ffce.textContent = "Pulse";
    _0x38cd33.appendChild(_0x31ffce);
    const _0x1896e1 = _0x2abdc5.createElement("div");
    _0x1896e1.className = "sr-charge-pips";
    _0x1bed68 = [];
    for (let _0x44106c = 0; _0x44106c < n; _0x44106c += 1) {
      const _0x2b2020 = _0x2abdc5.createElement("span");
      _0x2b2020.className = "sr-charge-pip";
      _0x2b2020.dataset.index = String(_0x44106c);
      _0x2b2020.dataset.filled = "false";
      _0x1896e1.appendChild(_0x2b2020);
      _0x1bed68.push(_0x2b2020);
    }
    _0x38cd33.appendChild(_0x1896e1);
    _0x3206d0.appendChild(_0x38cd33);
  }
  if (_0x2ba32f && _0x2abdc5) {
    _0x529baf = _0x2abdc5.createElement("div");
    _0x529baf.className = "sr-stabilize-prompt";
    _0x529baf.dataset.visible = "false";
    _0x529baf.setAttribute("aria-live", "polite");
    const _0x3f41d9 = _0x2abdc5.createElement("span");
    _0x3f41d9.className = "sr-stabilize-key";
    _0x3f41d9.textContent = "E";
    const _0x86911 = _0x2abdc5.createElement("span");
    _0x86911.className = "sr-stabilize-text";
    _0x86911.textContent = "· Stabilize";
    _0x529baf.appendChild(_0x3f41d9);
    _0x529baf.appendChild(_0x86911);
    _0x2ba32f.appendChild(_0x529baf);
  }
  let _0x2f59be = false;
  let _0x2a7142 = false;
  let _0x279960 = typeof _0x1f3c74 == "function" ? Number(_0x1f3c74()) || 0 : _0x5ede96.start;
  const _0xb3aa6b = [];
  const _0x51f9c4 = _0x266a65 => {
    const _0x451119 = Math.floor(Number(_0x266a65));
    if (Number.isFinite(_0x451119)) {
      return Math.max(0, Math.min(n, _0x451119));
    } else {
      return 0;
    }
  };
  const _0x54b29e = () => {
    const _0x395ae9 = _0x51f9c4(_0x279960);
    for (let _0x29ae6f = 0; _0x29ae6f < _0x1bed68.length; _0x29ae6f += 1) {
      _0x1bed68[_0x29ae6f].dataset.filled = _0x29ae6f < _0x395ae9 ? "true" : "false";
    }
    if (_0x3206d0) {
      _0x3206d0.dataset.charges = String(_0x395ae9);
      _0x3206d0.setAttribute("aria-label", "Pulse charges " + _0x395ae9 + " of " + n);
    }
  };
  const _0x50cf80 = _0x3aac93 => {
    _0x279960 = _0x51f9c4(_0x3aac93);
    _0x54b29e();
  };
  const _0x4d970e = () => {
    _0x2a7142 = true;
    if (_0x3206d0) {
      _0x3206d0.hidden = false;
      _0x3206d0.style.display = "";
    }
    if (_0x38cd33) {
      _0x38cd33.style.display = "";
    }
  };
  const _0x1dd954 = () => {
    _0x2a7142 = false;
    if (_0x3206d0) {
      _0x3206d0.hidden = true;
    }
    if (_0x529baf) {
      _0x529baf.dataset.visible = "false";
    }
  };
  const _0x2fa51c = _0xf1528e => {
    if (_0xf1528e === "playing" || _0xf1528e === "paused") {
      _0x4d970e();
    } else {
      _0x1dd954();
    }
  };
  const _0x5a8011 = () => {
    if (!_0x529baf || !_0x2a7142) {
      if (_0x529baf) {
        _0x529baf.dataset.visible = "false";
      }
      return;
    }
    const _0x48b658 = (() => {
      if (typeof _0x1de9d7 != "function") {
        return null;
      }
      try {
        const _0x1f0d85 = _0x1de9d7();
        if (_0x1f0d85 == null || _0x1f0d85 === false) {
          return null;
        }
        if (typeof _0x1f0d85 == "string" && _0x1f0d85.length > 0) {
          return _0x1f0d85;
        }
        if (typeof _0x1f0d85 == "object") {
          if (_0x1f0d85.inRange === false) {
            return null;
          }
          if (_0x1f0d85.id || _0x1f0d85.collapseId || _0x1f0d85.plateId) {
            return _0x1f0d85.id || _0x1f0d85.collapseId || _0x1f0d85.plateId;
          }
          if (_0x1f0d85.inRange) {
            return "in-range";
          }
        }
        return null;
      } catch {
        return null;
      }
    })();
    _0x529baf.dataset.visible = _0x48b658 ? "true" : "false";
    if (_0x48b658 && typeof _0x48b658 == "string" && _0x48b658 !== "in-range") {
      _0x529baf.dataset.target = _0x48b658;
    } else if (_0x529baf.dataset) {
      delete _0x529baf.dataset.target;
    }
  };
  _0x54b29e();
  _0x2fa51c(_0x6d805.phase ?? _0x6d805.getPhase?.());
  if (_0x5e8371?.on) {
    _0xb3aa6b.push(_0x5e8371.on("chargeChanged", _0x25229a => {
      if (_0x2f59be) {
        return;
      }
      const _0x1ab3de = typeof _0x25229a == "number" ? _0x25229a : _0x25229a?.charges ?? _0x25229a?.value ?? _0x25229a?.current;
      if (_0x1ab3de != null) {
        _0x50cf80(_0x1ab3de);
      }
    }));
    _0xb3aa6b.push(_0x5e8371.on("chargeRestored", _0x2b4bae => {
      if (_0x2f59be) {
        return;
      }
      const _0x2514c8 = typeof _0x2b4bae == "number" ? _0x2b4bae : _0x2b4bae?.charges ?? _0x2b4bae?.value ?? _0x2b4bae?.current;
      if (_0x2514c8 != null) {
        _0x50cf80(_0x2514c8);
      }
    }));
  }
  if (typeof _0x6d805.onPhaseChange == "function") {
    _0xb3aa6b.push(_0x6d805.onPhaseChange(_0x2fa51c));
  }
  const _0x2f4b8a = _0x6d805.loop?.onUpdate?.(() => {
    if (!_0x2f59be && _0x2a7142) {
      _0x5a8011();
    }
  }, 40);
  if (typeof _0x2f4b8a == "function") {
    _0xb3aa6b.push(_0x2f4b8a);
  }
  const _0x4532df = () => {
    if (!_0x2f59be) {
      _0x2f59be = true;
      for (const _0x1e3be3 of _0xb3aa6b.splice(0)) {
        try {
          _0x1e3be3();
        } catch {}
      }
      _0x529baf?.remove?.();
      if (_0x3206d0) {
        _0x3206d0.replaceChildren();
        _0x3206d0.hidden = true;
        _0x3206d0.setAttribute("aria-hidden", "true");
        _0x3206d0.style.cssText = "display:none;pointer-events:none;position:absolute;width:0;height:0;overflow:hidden;";
      }
    }
  };
  _0x6d805.own?.(_0x4532df);
  return {
    setCharges: _0x50cf80,
    show: _0x4d970e,
    hide: _0x1dd954,
    dispose: _0x4532df
  };
}