import { RESCUE_RULES as _0x2a2aea, STORM_PALETTE as _0x20b46f } from "../shared/contracts.js";
const n = "sr-rescue-hud-styles";
function r(_0x5f313b) {
  return "#" + (_0x5f313b >>> 0).toString(16).padStart(6, "0");
}
export function createRescueHud(_0x4380b2, _0xa8562f = {}) {
  const {
    events: _0x10c9bd,
    shellUi: _0x236a3d,
    getBeaconTarget: _0x103082,
    getFreedCount: _0x3a9dc,
    getCarryId: _0x59d44a,
    getCarriedId: _0x56a6b9,
    getSpireFreedCount: _0x5d70b3
  } = _0xa8562f;
  const _0x5a21c4 = typeof document != "undefined" ? document : null;
  const _0x313043 = Boolean(_0xa8562f.reducedMotion ?? _0x236a3d?.reducedMotion);
  (function (_0x242943, _0x46650e) {
    if (!_0x242943 || _0x242943.getElementById(n)) {
      return;
    }
    const _0x32b7c4 = _0x242943.createElement("style");
    _0x32b7c4.id = n;
    const _0x1b7247 = r(_0x20b46f.amber);
    const _0xd467aa = r(_0x20b46f.violet);
    const _0x732afc = r(_0x20b46f.slateDeep);
    _0x32b7c4.textContent = "\n.sr-objective-line{\n  position:absolute;\n  top:12px;\n  left:50%;\n  transform:translateX(-50%);\n  pointer-events:none;\n  z-index:6;\n  display:none;\n  align-items:center;\n  gap:8px;\n  padding:8px 14px;\n  background:rgba(30,41,59,0.78);\n  border:1px solid " + _0xd467aa + "99;\n  border-radius:2px;\n  color:#f5efe3;\n  font:600 12px/1.2 ui-sans-serif,system-ui,sans-serif;\n  letter-spacing:0.06em;\n  text-transform:uppercase;\n  box-shadow:0 6px 18px rgba(0,0,0,0.35);\n  white-space:nowrap;\n  max-width:min(92vw, 420px);\n}\n.sr-objective-line[data-visible=\"true\"]{ display:flex; }\n.sr-objective-count{\n  color:" + _0x1b7247 + ";\n  font-variant-numeric:tabular-nums;\n  letter-spacing:0.04em;\n}\n.sr-carry-glyph{\n  position:absolute;\n  top:52px;\n  left:12px;\n  pointer-events:none;\n  z-index:6;\n  display:none;\n  align-items:center;\n  gap:8px;\n  padding:7px 10px;\n  background:rgba(30,41,59,0.78);\n  border:1px solid " + _0x1b7247 + "99;\n  border-radius:2px;\n  color:#f5efe3;\n  font:600 11px/1 ui-sans-serif,system-ui,sans-serif;\n  letter-spacing:0.08em;\n  text-transform:uppercase;\n  box-shadow:0 0 12px " + _0x1b7247 + "33, 0 6px 16px rgba(0,0,0,0.35);\n}\n.sr-carry-glyph[data-visible=\"true\"]{ display:flex; }\n.sr-carry-diamond{\n  width:12px;height:12px;\n  box-sizing:border-box;\n  border:2px solid " + _0x1b7247 + ";\n  background:" + _0x1b7247 + ";\n  border-radius:1px;\n  transform:rotate(45deg);\n  box-shadow:0 0 10px " + _0x1b7247 + "88;\n  flex:0 0 auto;\n}\n.sr-beacon-prompt{\n  position:absolute;\n  left:50%;\n  bottom:calc(14% + 44px);\n  transform:translateX(-50%);\n  pointer-events:none;\n  z-index:6;\n  display:none;\n  align-items:center;\n  gap:8px;\n  padding:8px 14px;\n  background:rgba(30,41,59,0.78);\n  border:1px solid " + _0xd467aa + "99;\n  border-radius:2px;\n  color:#f5efe3;\n  font:600 13px/1.2 ui-sans-serif,system-ui,sans-serif;\n  letter-spacing:0.04em;\n  box-shadow:0 8px 22px rgba(0,0,0,0.4);\n  white-space:nowrap;\n}\n.sr-beacon-prompt[data-visible=\"true\"]{ display:flex; }\n/* When E stabilize is also up, stack Q slightly higher (default already offset). */\n.sr-beacon-prompt[data-stack=\"with-e\"]{\n  bottom:calc(14% + 44px);\n}\n.sr-beacon-key{\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  min-width:22px;\n  height:22px;\n  padding:0 6px;\n  background:" + _0x1b7247 + ";\n  color:" + _0x732afc + ";\n  border-radius:2px;\n  font:700 12px/1 ui-sans-serif,system-ui,sans-serif;\n}\n.sr-beacon-text{ color:rgba(245,239,227,0.92); }\n.sr-tutorial-toast-host{\n  position:absolute;\n  left:50%;\n  bottom:28%;\n  transform:translateX(-50%);\n  pointer-events:none;\n  z-index:7;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  gap:8px;\n  width:min(92vw, 360px);\n}\n.sr-tutorial-toast{\n  display:flex;\n  align-items:flex-start;\n  gap:10px;\n  padding:10px 14px;\n  background:rgba(30,41,59,0.9);\n  border:1px solid " + _0xd467aa + "aa;\n  border-left:3px solid " + _0x1b7247 + ";\n  border-radius:2px;\n  color:#f5efe3;\n  font:500 13px/1.35 ui-sans-serif,system-ui,sans-serif;\n  letter-spacing:0.02em;\n  box-shadow:0 10px 28px rgba(0,0,0,0.45);\n  opacity:0;\n  " + (_0x46650e ? "transition:opacity 160ms linear;" : "transform:translateY(8px); transition:opacity 220ms ease, transform 220ms ease;") + "\n}\n.sr-tutorial-toast[data-visible=\"true\"]{\n  opacity:1;\n  " + (_0x46650e ? "" : "transform:translateY(0);") + "\n}\n.sr-tutorial-toast-mark{\n  flex:0 0 auto;\n  width:8px;height:8px;\n  margin-top:5px;\n  background:" + _0x1b7247 + ";\n  border-radius:1px;\n  transform:rotate(45deg);\n  box-shadow:0 0 8px " + _0x1b7247 + "66;\n}\n.sr-tutorial-toast-msg{\n  flex:1 1 auto;\n  color:rgba(245,239,227,0.95);\n}\n@media (max-width:720px){\n  .sr-objective-line{ top:8px; font-size:11px; padding:7px 12px; }\n  .sr-carry-glyph{ top:46px; left:8px; font-size:10px; }\n  .sr-beacon-prompt{ bottom:calc(18% + 40px); font-size:12px; padding:7px 12px; }\n  .sr-tutorial-toast-host{ bottom:32%; }\n}\n";
    _0x242943.head?.appendChild(_0x32b7c4);
  })(_0x5a21c4, _0x313043);
  const _0xaf0064 = Math.max(1, Math.floor(Number(_0xa8562f.requiredFreedTotal ?? _0xa8562f.requiredTotal ?? _0xa8562f.spiritsTotal ?? _0x2a2aea.spiritsTotal ?? 10) || 10));
  const _0x4eaa31 = Math.max(1, Math.floor(Number(_0x2a2aea.spireDeliveriesToWin) || 3));
  const _0x2a9410 = Math.max(0, Math.floor(Number(_0x2a2aea.requiredFreesBeatC ?? _0x2a2aea.spiritsThroughBeatC) || 7));
  const _0x4a837d = _0x236a3d?.hudRoot ?? _0x236a3d?.hud?.root ?? _0x4380b2.ui?.root ?? null;
  let _0x30610c = null;
  let _0x3c4586 = null;
  let _0x536d35 = null;
  let _0x4a2fc1 = null;
  let _0x5b2ff7 = null;
  let _0x5ea7a2 = null;
  if (_0x4a837d && _0x5a21c4) {
    _0x30610c = _0x5a21c4.createElement("div");
    _0x30610c.className = "sr-objective-line";
    _0x30610c.dataset.visible = "false";
    _0x30610c.setAttribute("role", "status");
    _0x30610c.setAttribute("aria-live", "polite");
    _0x3c4586 = _0x5a21c4.createElement("span");
    _0x3c4586.className = "sr-objective-label";
    _0x3c4586.textContent = "Free signal spirits · ";
    _0x536d35 = _0x5a21c4.createElement("span");
    _0x536d35.className = "sr-objective-count";
    _0x536d35.textContent = "0/" + _0xaf0064;
    _0x30610c.appendChild(_0x3c4586);
    _0x30610c.appendChild(_0x536d35);
    _0x4a837d.appendChild(_0x30610c);
    _0x4a2fc1 = _0x5a21c4.createElement("div");
    _0x4a2fc1.className = "sr-carry-glyph";
    _0x4a2fc1.dataset.visible = "false";
    _0x4a2fc1.setAttribute("role", "status");
    _0x4a2fc1.setAttribute("aria-label", "Carrying signal spirit");
    const _0x55f305 = _0x5a21c4.createElement("span");
    _0x55f305.className = "sr-carry-diamond";
    _0x55f305.setAttribute("aria-hidden", "true");
    const _0x5287ef = _0x5a21c4.createElement("span");
    _0x5287ef.textContent = "Spirit";
    _0x4a2fc1.appendChild(_0x55f305);
    _0x4a2fc1.appendChild(_0x5287ef);
    _0x4a837d.appendChild(_0x4a2fc1);
    _0x5b2ff7 = _0x5a21c4.createElement("div");
    _0x5b2ff7.className = "sr-beacon-prompt";
    _0x5b2ff7.dataset.visible = "false";
    _0x5b2ff7.setAttribute("aria-live", "polite");
    const _0x1d165c = _0x5a21c4.createElement("span");
    _0x1d165c.className = "sr-beacon-key";
    _0x1d165c.textContent = "Q";
    const _0x2562fb = _0x5a21c4.createElement("span");
    _0x2562fb.className = "sr-beacon-text";
    _0x2562fb.textContent = "· Light beacon";
    _0x5b2ff7.appendChild(_0x1d165c);
    _0x5b2ff7.appendChild(_0x2562fb);
    _0x4a837d.appendChild(_0x5b2ff7);
    _0x5ea7a2 = _0x5a21c4.createElement("div");
    _0x5ea7a2.className = "sr-tutorial-toast-host";
    _0x5ea7a2.setAttribute("aria-live", "polite");
    _0x4a837d.appendChild(_0x5ea7a2);
  }
  let _0x464a85 = false;
  let _0x327067 = false;
  let _0x1ae7ca = typeof _0x3a9dc == "function" && Number(_0x3a9dc()) || 0;
  let _0x4b3a39 = typeof _0x5d70b3 == "function" && Number(_0x5d70b3()) || 0;
  let _0x240012 = false;
  let _0xa0c69d = null;
  const _0x4ebdb4 = [];
  const _0x4df203 = [];
  let _0x41b30c = false;
  let _0x540f13 = null;
  const _0x59a8e4 = () => {
    try {
      if (typeof _0x59d44a == "function") {
        const _0x42b9be = _0x59d44a();
        if (_0x42b9be != null && _0x42b9be !== false && _0x42b9be !== "") {
          return String(_0x42b9be);
        }
      }
      if (typeof _0x56a6b9 == "function") {
        const _0x49c09f = _0x56a6b9();
        if (_0x49c09f != null && _0x49c09f !== false && _0x49c09f !== "") {
          return String(_0x49c09f);
        }
      }
    } catch {}
    return null;
  };
  _0xa0c69d = _0x59a8e4();
  _0x4b3a39 = (() => {
    try {
      if (typeof _0x5d70b3 == "function") {
        const _0x16a507 = Number(_0x5d70b3());
        if (Number.isFinite(_0x16a507)) {
          return Math.max(0, Math.floor(_0x16a507));
        }
      }
    } catch {}
    return _0x4b3a39;
  })();
  const _0x54110e = () => {
    const _0x150353 = _0x4b3a39 > 0 || _0x1ae7ca >= _0x2a9410 || _0x240012;
    if (_0x150353 && typeof _0x5d70b3 == "function") {
      const _0x57797a = Math.max(0, Math.min(_0x4eaa31, Math.floor(Number(_0x4b3a39) || 0)));
      if (_0x3c4586) {
        _0x3c4586.textContent = "Spire signals · ";
      }
      if (_0x536d35) {
        _0x536d35.textContent = _0x57797a + "/" + _0x4eaa31;
      }
      if (_0x30610c) {
        _0x30610c.dataset.mode = "spire";
        _0x30610c.setAttribute("aria-label", "Spire signals " + _0x57797a + " of " + _0x4eaa31);
      }
      return;
    }
    const _0x304e1b = Math.max(0, Math.min(_0xaf0064, Math.floor(Number(_0x1ae7ca) || 0)));
    if (_0x150353) {
      if (_0x3c4586) {
        _0x3c4586.textContent = "Broken spire · ";
      }
      if (_0x30610c) {
        _0x30610c.dataset.mode = "spire-approach";
      }
    } else {
      if (_0x3c4586) {
        _0x3c4586.textContent = "Free signal spirits · ";
      }
      if (_0x30610c) {
        _0x30610c.dataset.mode = "rescue";
      }
    }
    if (_0x536d35) {
      _0x536d35.textContent = _0x304e1b + "/" + _0xaf0064;
    }
    if (_0x30610c) {
      _0x30610c.setAttribute("aria-label", _0x150353 ? "Broken spire " + _0x304e1b + " of " + _0xaf0064 : "Free signal spirits " + _0x304e1b + " of " + _0xaf0064);
    }
  };
  const _0x4dc2ef = () => {
    if (!_0x4a2fc1) {
      return;
    }
    const _0x35ea66 = Boolean(_0xa0c69d) && _0x327067;
    _0x4a2fc1.dataset.visible = _0x35ea66 ? "true" : "false";
    if (_0xa0c69d) {
      _0x4a2fc1.dataset.spiritId = _0xa0c69d;
    } else {
      delete _0x4a2fc1.dataset.spiritId;
    }
  };
  const _0xb1b730 = _0x5ac340 => {
    _0x1ae7ca = Math.max(0, Math.floor(Number(_0x5ac340) || 0));
    _0x54110e();
  };
  const _0x29e54b = _0xfa9fce => {
    _0x4b3a39 = Math.max(0, Math.floor(Number(_0xfa9fce) || 0));
    if (_0x4b3a39 > 0) {
      _0x240012 = true;
    }
    _0x54110e();
  };
  const _0x211630 = _0x5a5797 => {
    _0xa0c69d = _0x5a5797 == null || _0x5a5797 === false || _0x5a5797 === "" ? null : String(_0x5a5797);
    _0x4dc2ef();
  };
  const _0x552895 = () => {
    _0x327067 = true;
    if (_0x30610c) {
      _0x30610c.dataset.visible = "true";
    }
    _0x4dc2ef();
  };
  const _0x246e1e = () => {
    _0x327067 = false;
    if (_0x30610c) {
      _0x30610c.dataset.visible = "false";
    }
    if (_0x4a2fc1) {
      _0x4a2fc1.dataset.visible = "false";
    }
    if (_0x5b2ff7) {
      _0x5b2ff7.dataset.visible = "false";
    }
    if (_0x5ea7a2) {
      _0x5ea7a2.style.visibility = "hidden";
    }
  };
  const _0x3ea323 = () => {
    if (_0x5ea7a2) {
      _0x5ea7a2.style.visibility = "";
    }
  };
  const _0x32fee8 = _0x484ce2 => {
    if (_0x484ce2 === "playing" || _0x484ce2 === "paused") {
      _0x552895();
      _0x3ea323();
    } else {
      _0x246e1e();
    }
  };
  const _0x26efee = () => {
    if (!_0x5b2ff7 || !_0x327067) {
      if (_0x5b2ff7) {
        _0x5b2ff7.dataset.visible = "false";
      }
      return;
    }
    const _0x407a97 = (() => {
      if (typeof _0x103082 != "function") {
        return null;
      }
      try {
        const _0x5d274c = _0x103082();
        if (_0x5d274c == null || _0x5d274c === false) {
          return null;
        }
        if (typeof _0x5d274c == "string" && _0x5d274c.length > 0) {
          return _0x5d274c;
        }
        if (typeof _0x5d274c == "object") {
          if (_0x5d274c.inRange === false) {
            return null;
          }
          if (_0x5d274c.id || _0x5d274c.beaconId || _0x5d274c.gateId) {
            return _0x5d274c.id || _0x5d274c.beaconId || _0x5d274c.gateId;
          }
          if (_0x5d274c.inRange) {
            return "in-range";
          }
        }
        return null;
      } catch {
        return null;
      }
    })();
    _0x5b2ff7.dataset.visible = _0x407a97 ? "true" : "false";
    _0x5b2ff7.dataset.stack = (() => {
      try {
        const _0x42b4a0 = _0x4a837d?.querySelector?.(".sr-stabilize-prompt[data-visible=\"true\"]") ?? _0x5a21c4?.querySelector?.(".sr-stabilize-prompt[data-visible=\"true\"]");
        return Boolean(_0x42b4a0);
      } catch {
        return false;
      }
    })() ? "with-e" : "solo";
    if (_0x407a97 && typeof _0x407a97 == "string" && _0x407a97 !== "in-range") {
      _0x5b2ff7.dataset.target = _0x407a97;
    } else if (_0x5b2ff7.dataset) {
      delete _0x5b2ff7.dataset.target;
    }
  };
  const _0x400018 = () => {
    if (_0x540f13 != null) {
      clearTimeout(_0x540f13);
      _0x540f13 = null;
    }
  };
  const _0x27d68e = async () => {
    if (_0x464a85 || !_0x5ea7a2 || !_0x5a21c4) {
      return;
    }
    if (_0x41b30c) {
      return;
    }
    const _0x198420 = _0x4df203.shift();
    if (!_0x198420) {
      return;
    }
    _0x41b30c = true;
    _0x3ea323();
    const _0xd7e9df = _0x5a21c4.createElement("div");
    _0xd7e9df.className = "sr-tutorial-toast";
    _0xd7e9df.dataset.visible = "false";
    if (_0x198420.id) {
      _0xd7e9df.dataset.toastId = String(_0x198420.id);
    }
    const _0x3abb28 = _0x5a21c4.createElement("span");
    _0x3abb28.className = "sr-tutorial-toast-mark";
    _0x3abb28.setAttribute("aria-hidden", "true");
    const _0x11eab5 = _0x5a21c4.createElement("span");
    _0x11eab5.className = "sr-tutorial-toast-msg";
    _0x11eab5.textContent = _0x198420.message;
    _0xd7e9df.appendChild(_0x3abb28);
    _0xd7e9df.appendChild(_0x11eab5);
    _0x5ea7a2.appendChild(_0xd7e9df);
    const _0xd5f3d7 = _0x4380b2.loop;
    if (_0xd5f3d7?.nextFrame) {
      if ((await _0xd5f3d7.nextFrame()) === false) {
        return;
      }
      if (_0x464a85) {
        return;
      }
      if ((await _0xd5f3d7.nextFrame()) === false) {
        return;
      }
      if (!_0x464a85) {
        _0xd7e9df.dataset.visible = "true";
      }
    } else if (!_0x464a85) {
      _0xd7e9df.dataset.visible = "true";
    }
    if (!_0x464a85) {
      _0x400018();
      _0x540f13 = setTimeout(() => {
        _0xd7e9df.dataset.visible = "false";
        setTimeout(() => {
          try {
            _0xd7e9df.remove();
          } catch {}
          _0x41b30c = false;
          _0x27d68e();
        }, _0x313043 ? 180 : 240);
      }, 2800);
    }
  };
  _0x54110e();
  _0x4dc2ef();
  _0x32fee8(_0x4380b2.phase ?? _0x4380b2.getPhase?.());
  if (_0x10c9bd?.on) {
    _0x4ebdb4.push(_0x10c9bd.on("spiritFreed", _0x5a6f4e => {
      if (_0x464a85) {
        return;
      }
      const _0x186ec6 = _0x5a6f4e?.freedCount ?? _0x5a6f4e?.freed ?? _0x5a6f4e?.totalFreed ?? _0x5a6f4e?.count;
      if (_0x186ec6 != null) {
        _0xb1b730(_0x186ec6);
      } else if (typeof _0x3a9dc == "function") {
        try {
          _0xb1b730(_0x3a9dc());
        } catch {
          _0xb1b730(_0x1ae7ca + 1);
        }
      } else {
        _0xb1b730(_0x1ae7ca + 1);
      }
      if (String(_0x5a6f4e?.segment ?? _0x5a6f4e?.beat ?? _0x5a6f4e?.zone ?? "").toLowerCase().includes("spire") || Boolean(_0x5a6f4e?.spire) || String(_0x5a6f4e?.anchorId ?? _0x5a6f4e?.id ?? "").toLowerCase().includes("spire")) {
        _0x240012 = true;
        const _0x13ebbf = _0x5a6f4e?.spireFreedCount ?? _0x5a6f4e?.spireFreed ?? _0x5a6f4e?.spireCount;
        if (_0x13ebbf != null) {
          _0x29e54b(_0x13ebbf);
        } else if (typeof _0x5d70b3 == "function") {
          try {
            _0x29e54b(_0x5d70b3());
          } catch {
            _0x29e54b(_0x4b3a39 + 1);
          }
        } else {
          _0x29e54b(_0x4b3a39 + 1);
        }
      } else {
        if (typeof _0x5d70b3 == "function") {
          try {
            _0x29e54b(_0x5d70b3());
          } catch {}
        }
        _0x54110e();
      }
      _0x211630(null);
    }));
    _0x4ebdb4.push(_0x10c9bd.on("spiritPickedUp", _0xb3d858 => {
      if (_0x464a85) {
        return;
      }
      _0x211630(_0xb3d858?.spiritId ?? _0xb3d858?.id ?? _0xb3d858?.carryId ?? "spirit");
    }));
    _0x4ebdb4.push(_0x10c9bd.on("spiritDropped", () => {
      if (!_0x464a85) {
        _0x211630(null);
      }
    }));
    _0x4ebdb4.push(_0x10c9bd.on("carryChanged", _0x2ee5ef => {
      if (_0x464a85) {
        return;
      }
      _0x211630(_0x2ee5ef?.spiritId ?? _0x2ee5ef?.carryId ?? _0x2ee5ef?.id ?? (_0x2ee5ef?.carrying === false ? null : _0x2ee5ef?.value) ?? null);
    }));
    _0x4ebdb4.push(_0x10c9bd.on("tutorialToast", _0x4c7da8 => {
      if (!_0x464a85) {
        (_0x4abc09 => {
          if (_0x464a85) {
            return;
          }
          const _0x1ed83a = typeof _0x4abc09 == "string" ? _0x4abc09 : _0x4abc09?.message ?? _0x4abc09?.text ?? _0x4abc09?.body;
          if (!_0x1ed83a || typeof _0x1ed83a != "string") {
            return;
          }
          const _0x1603a0 = typeof _0x4abc09 == "object" ? _0x4abc09?.id ?? _0x4abc09?.flag : undefined;
          if (_0x1603a0 != null) {
            const _0x397c96 = String(_0x1603a0);
            if (_0x4df203.some(_0x46d117 => _0x46d117.id === _0x397c96)) {
              return;
            }
            if (_0x5ea7a2?.querySelector?.("[data-toast-id=\"" + (CSS.escape?.(_0x397c96) ?? _0x397c96) + "\"]")) {
              return;
            }
          }
          _0x4df203.push({
            id: _0x1603a0 != null ? String(_0x1603a0) : undefined,
            message: _0x1ed83a
          });
          _0x27d68e();
        })(_0x4c7da8);
      }
    }));
    _0x4ebdb4.push(_0x10c9bd.on("freedCountChanged", _0x1a417f => {
      if (_0x464a85) {
        return;
      }
      const _0x3eaf75 = typeof _0x1a417f == "number" ? _0x1a417f : _0x1a417f?.freedCount ?? _0x1a417f?.freed ?? _0x1a417f?.count;
      if (_0x3eaf75 != null) {
        _0xb1b730(_0x3eaf75);
      }
    }));
  }
  if (typeof _0x4380b2.onPhaseChange == "function") {
    _0x4ebdb4.push(_0x4380b2.onPhaseChange(_0x32fee8));
  }
  if (typeof _0x4380b2.onReset == "function") {
    _0x4ebdb4.push(_0x4380b2.onReset(() => {
      if (!_0x464a85) {
        _0x1ae7ca = typeof _0x3a9dc == "function" && Number(_0x3a9dc()) || 0;
        _0x4b3a39 = typeof _0x5d70b3 == "function" && Number(_0x5d70b3()) || 0;
        _0x240012 = _0x4b3a39 > 0 || _0x1ae7ca >= _0x2a9410;
        _0xa0c69d = _0x59a8e4();
        _0x54110e();
        _0x4dc2ef();
        _0x4df203.length = 0;
        _0x400018();
        _0x41b30c = false;
        if (_0x5ea7a2) {
          _0x5ea7a2.replaceChildren();
        }
      }
    }));
  }
  const _0x3c7a40 = _0x4380b2.loop?.onUpdate?.(() => {
    if (_0x464a85 || !_0x327067) {
      return;
    }
    if (typeof _0x3a9dc == "function") {
      try {
        const _0x596ba4 = Number(_0x3a9dc());
        if (Number.isFinite(_0x596ba4) && _0x596ba4 !== _0x1ae7ca) {
          _0xb1b730(_0x596ba4);
        }
      } catch {}
    }
    if (typeof _0x5d70b3 == "function") {
      try {
        const _0x1a1de9 = Number(_0x5d70b3());
        if (Number.isFinite(_0x1a1de9) && _0x1a1de9 !== _0x4b3a39) {
          _0x29e54b(_0x1a1de9);
        }
      } catch {}
    } else if (!_0x240012 && _0x1ae7ca >= _0x2a9410) {
      _0x54110e();
    }
    const _0x87ec45 = _0x59a8e4();
    if (_0x87ec45 !== _0xa0c69d) {
      _0x211630(_0x87ec45);
    }
    _0x26efee();
  }, 40);
  if (typeof _0x3c7a40 == "function") {
    _0x4ebdb4.push(_0x3c7a40);
  }
  const _0x2efce1 = () => {
    if (!_0x464a85) {
      _0x464a85 = true;
      _0x400018();
      _0x4df203.length = 0;
      for (const _0x2b1863 of _0x4ebdb4.splice(0)) {
        try {
          _0x2b1863();
        } catch {}
      }
      try {
        _0x30610c?.remove?.();
        _0x4a2fc1?.remove?.();
        _0x5b2ff7?.remove?.();
        _0x5ea7a2?.remove?.();
      } catch {}
      _0x30610c = null;
      _0x4a2fc1 = null;
      _0x5b2ff7 = null;
      _0x5ea7a2 = null;
    }
  };
  _0x4380b2.own?.(_0x2efce1);
  return {
    setFreed: _0xb1b730,
    setSpireFreed: _0x29e54b,
    setCarry: _0x211630,
    show: _0x552895,
    hide: _0x246e1e,
    dispose: _0x2efce1,
    requiredTotal: _0xaf0064,
    spireRequired: _0x4eaa31
  };
}