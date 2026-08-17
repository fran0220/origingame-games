import { STORM_PALETTE as _0x53b854 } from "../shared/contracts.js";
function t(_0x11d294) {
  return "#" + (_0x11d294 >>> 0).toString(16).padStart(6, "0");
}
export function createShellUi(_0x4bdcce, _0x2e426e = {}) {
  const _0x572892 = typeof document != "undefined" ? document : null;
  const _0x5a1386 = function (_0x19e32d) {
    const _0x126c7d = _0x19e32d?.defaultView ?? (typeof window != "undefined" ? window : null);
    const _0x5c4dfd = Boolean(_0x126c7d?.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
    if (_0x19e32d?.documentElement) {
      _0x19e32d.documentElement.dataset.reducedMotion = _0x5c4dfd ? "true" : "false";
    }
    return _0x5c4dfd;
  }(_0x572892);
  const _0x4ba17d = _0x4bdcce.ui;
  _0x4ba17d.mount();
  _0x4ba17d.theme({
    family: "storybook",
    motion: _0x5a1386 ? "reduced" : "gentle",
    palette: "auto"
  });
  _0x4ba17d.layout("minimal");
  _0x4ba17d.theme({
    accent: t(_0x53b854.amber),
    accentText: t(_0x53b854.slateDeep),
    border: t(_0x53b854.violet),
    surface: "rgba(22, 30, 48, 0.78)",
    surfaceSolid: "rgba(18, 24, 40, 0.97)",
    text: "#f7f1e6",
    muted: "rgba(247, 241, 230, 0.82)",
    focus: t(_0x53b854.amber),
    glow: "0 0 0 1px " + t(_0x53b854.violet) + "66",
    warning: t(_0x53b854.amber),
    danger: "#ff6b78",
    success: "#9dffc6"
  });
  _0x4ba17d.setAutoEndModals(false);
  const _0x50a5cd = "sr-shell-modal-contrast";
  if (_0x572892 && !_0x572892.getElementById(_0x50a5cd)) {
    const _0x37e0c2 = _0x572892.createElement("style");
    _0x37e0c2.id = _0x50a5cd;
    _0x37e0c2.textContent = "\n#og-ui-root .og-layer--modal {\n  background:\n    radial-gradient(ellipse 75% 60% at 50% 40%, rgba(8,10,20,0.35) 0%, rgba(6,8,16,0.72) 62%, rgba(4,6,12,0.88) 100%);\n}\n#og-ui-root .og-layer--modal.is-open .og-modal {\n  background: rgba(16, 22, 38, 0.98);\n  border-color: " + t(_0x53b854.violet) + ";\n  box-shadow:\n    0 0 0 1px rgba(124, 92, 255, 0.35),\n    0 16px 48px rgba(0, 0, 0, 0.65),\n    0 0 36px rgba(240, 180, 41, 0.08);\n}\n#og-ui-root .og-modal__title {\n  color: " + t(_0x53b854.amber) + ";\n  text-shadow: 0 1px 0 rgba(0,0,0,0.55);\n}\n#og-ui-root .og-layer--modal[data-kind=\"win\"] .og-modal__title {\n  color: #b8ffd6;\n}\n#og-ui-root .og-layer--modal[data-kind=\"fail\"] .og-modal__title {\n  color: #ff8a94;\n}\n#og-ui-root .og-modal__body {\n  color: rgba(247, 241, 230, 0.9);\n  font-size: 14px;\n  line-height: 1.45;\n}\n#og-ui-root .og-btn {\n  font-weight: 700;\n}\n";
    _0x572892.head?.appendChild(_0x37e0c2);
  }
  const _0x17936a = _0x4ba17d.root ?? null;
  const _0x5522d0 = _0x572892?.createElement?.("div") ?? null;
  if (_0x5522d0 && _0x17936a) {
    _0x5522d0.className = "sr-charge-hud-slot";
    _0x5522d0.id = "sr-charge-hud-slot";
    _0x5522d0.dataset.role = "charge-hud";
    _0x5522d0.dataset.max = "3";
    _0x5522d0.setAttribute("aria-hidden", "true");
    _0x5522d0.hidden = true;
    _0x5522d0.style.cssText = "display:none;pointer-events:none;position:absolute;width:0;height:0;overflow:hidden;";
    (_0x17936a.querySelector?.("[data-og-slot=\"top-left\"]") ?? _0x17936a).appendChild(_0x5522d0);
  }
  const _0x4c8789 = {
    root: _0x17936a,
    chargeHudSlot: _0x5522d0
  };
  let _0x1c6e0b = false;
  const _0x188228 = [];
  const _0x3c7ce6 = () => {
    _0x4ba17d.closeModal();
  };
  const _0x247c94 = () => {
    if (_0x1c6e0b) {
      return false;
    }
    if ((_0x4bdcce.phase ?? _0x4bdcce.getPhase?.()) !== "title") {
      return false;
    }
    _0x4bdcce.shell?.markTitleShown?.();
    let _0x271715 = false;
    if (_0x2e426e.onStart) {
      _0x2e426e.onStart();
      _0x271715 = (_0x4bdcce.phase ?? _0x4bdcce.getPhase?.()) === "playing";
    } else {
      _0x271715 = Boolean(_0x4bdcce.shell?.enterPlay?.());
    }
    if (_0x271715) {
      _0x4ba17d.closeModal();
    }
    return _0x271715;
  };
  const _0x5defaf = () => {
    if (!_0x1c6e0b) {
      _0x4bdcce.shell?.markTitleShown?.();
      _0x4ba17d.showTitle({
        name: "Skybound Rescue",
        subtitle: "Free stranded signal spirits across storm-scarred sky temples.",
        controls: "Enter or Start · WASD / Arrows move · Space jump · Esc pause",
        startLabel: "Start",
        onStart: () => {
          _0x247c94();
        }
      });
    }
  };
  const _0x322b88 = () => {
    if (!_0x1c6e0b) {
      _0x4ba17d.showModal({
        kind: "fail",
        title: "Cast into the storm",
        body: "You fell from the ruins.",
        primaryLabel: "Restart",
        onPrimary: () => {
          _0x2e426e.onRestart?.();
        },
        secondaryLabel: "Title",
        onSecondary: () => {
          _0x2e426e.onTitle?.();
        }
      });
    }
  };
  const _0x97aba8 = () => {
    if (!_0x1c6e0b) {
      _0x4ba17d.showModal({
        kind: "win",
        title: "Signals restored",
        body: "Amber light holds the broken spire against the storm.",
        primaryLabel: "Restart",
        onPrimary: () => {
          _0x2e426e.onRestart?.();
        },
        secondaryLabel: "Title",
        onSecondary: () => {
          _0x2e426e.onTitle?.();
        }
      });
    }
  };
  const _0x4fb3f8 = () => {
    if (!_0x1c6e0b) {
      if (_0x4bdcce.phase === "playing") {
        _0x4bdcce.pause();
      }
      _0x4ba17d.showModal({
        kind: "pause",
        title: "Paused",
        body: "Storm winds hold. Resume when ready.",
        primaryLabel: "Resume",
        onPrimary: () => {
          if (_0x2e426e.onResume) {
            _0x2e426e.onResume();
          } else {
            _0x4bdcce.resume();
          }
        },
        secondaryLabel: "Title",
        onSecondary: () => {
          _0x2e426e.onTitle?.();
        }
      });
    }
  };
  const _0x29f26e = _0x528399 => {
    if (!_0x1c6e0b) {
      if (_0x528399 !== "title") {
        if (_0x528399 !== "fail") {
          if (_0x528399 !== "playing") {
            if (_0x528399 === "complete") {
              _0x97aba8();
            }
          } else {
            _0x3c7ce6();
          }
        } else {
          _0x322b88();
        }
      } else {
        _0x5defaf();
      }
    }
  };
  if (typeof _0x4bdcce.onPhaseChange == "function") {
    _0x188228.push(_0x4bdcce.onPhaseChange(_0x29f26e));
  }
  const _0x3564c3 = _0x4ffbb4 => {
    if (_0x1c6e0b) {
      return;
    }
    const _0x3ae85c = _0x4bdcce.phase ?? _0x4bdcce.getPhase?.();
    if (_0x4ffbb4.code === "Enter" && _0x3ae85c === "title") {
      _0x4ffbb4.preventDefault?.();
      _0x247c94();
      return;
    } else if (_0x4ffbb4.code === "Escape" || _0x4ffbb4.key === "Escape") {
      if (_0x3ae85c === "playing") {
        _0x4ffbb4.preventDefault?.();
        _0x4fb3f8();
        return;
      } else if (_0x3ae85c === "paused") {
        _0x4ffbb4.preventDefault?.();
        _0x4ba17d.closeModal();
        if (_0x2e426e.onResume) {
          _0x2e426e.onResume();
        } else {
          _0x4bdcce.resume();
        }
        return;
      } else {
        if (_0x3ae85c === "complete" || _0x3ae85c === "fail") {
          _0x4ffbb4.preventDefault?.();
        }
        return;
      }
    } else {
      return undefined;
    }
  };
  if (typeof window != "undefined") {
    window.addEventListener("keydown", _0x3564c3, true);
    _0x188228.push(() => window.removeEventListener("keydown", _0x3564c3, true));
  }
  const _0x317623 = _0x4bdcce.phase ?? _0x4bdcce.getPhase?.();
  if (_0x317623 === "title") {
    _0x5defaf();
  } else if (_0x317623 === "fail") {
    _0x322b88();
  } else if (_0x317623 === "complete") {
    _0x97aba8();
  } else if (_0x317623 === "paused") {
    _0x4fb3f8();
  }
  const _0x1838af = () => {
    if (!_0x1c6e0b) {
      _0x1c6e0b = true;
      for (const _0x4d24a3 of _0x188228.splice(0)) {
        try {
          _0x4d24a3();
        } catch {}
      }
      try {
        _0x4ba17d.closeModal();
      } catch {}
      _0x5522d0?.remove?.();
      if (_0x572892?.documentElement?.dataset) {
        delete _0x572892.documentElement.dataset.reducedMotion;
      }
    }
  };
  _0x4bdcce.own?.(_0x1838af);
  return {
    hudRoot: _0x17936a,
    hud: _0x4c8789,
    reducedMotion: _0x5a1386,
    showTitle: _0x5defaf,
    hideTitle: () => {
      _0x4ba17d.closeModal();
    },
    showFail: _0x322b88,
    showComplete: _0x97aba8,
    showPause: _0x4fb3f8,
    hideModals: _0x3c7ce6,
    dispose: _0x1838af
  };
}