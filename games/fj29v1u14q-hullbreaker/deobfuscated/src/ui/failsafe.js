import { FAILSAFE as _0x30ab92, faultStep as _0x4f0630, freshFaultState as _0x20250d, plainLanguageIssues as _0x127dca } from "../pure/failsafe.js";
const r = typeof window != "undefined" && window.__HB_FAILSAFE || null;
let o = null;
let a = _0x20250d();
let i = 0;
let l = "";
let f = 0;
function c(_0x397c00) {
  if (!(f >= 12)) {
    f++;
    console.error("HULLBREAKER failsafe: " + _0x397c00 + (f === 12 ? " (further failsafe lines suppressed)" : ""));
  }
}
function u(_0x35edab, _0x1cb77e) {
  const _0x1b63d6 = _0x1cb77e && _0x1cb77e.message ? _0x1cb77e.message : String(_0x1cb77e);
  const _0x30f69b = _0x1cb77e && _0x1cb77e.stack ? String(_0x1cb77e.stack).split("\n").slice(0, 4).join("\n") : "";
  return _0x35edab + ": " + _0x1b63d6 + (_0x30f69b ? "\n" + _0x30f69b : "");
}
function h() {
  if (typeof performance != "undefined" && performance.now) {
    return performance.now();
  } else {
    return Date.now();
  }
}
export function installFailsafe(_0x395017) {
  o = _0x395017;
}
export function failsafeBeat() {
  if (r) {
    r.beat();
  }
}
export function failsafeBooted() {
  if (r) {
    r.booted();
  }
}
export function failsafeHalted() {
  return a.halted;
}
export function reportFault(_0x50f309, _0xd97924) {
  i++;
  l = u(_0x50f309, _0xd97924);
  const _0x536832 = _0x4f0630(a, h(), _0x30ab92);
  a = {
    faults: _0x536832.faults,
    firstMs: _0x536832.firstMs,
    lastMs: _0x536832.lastMs,
    recoveries: _0x536832.recoveries,
    halted: _0x536832.halted
  };
  if (_0x536832.action === "ignore") {
    if (i <= 3 || _0x536832.faults === 1) {
      c(l);
    }
    if (r) {
      r.note(l);
    }
    return "ignore";
  }
  if (_0x536832.action === "recover") {
    c("restarting the run after a broken frame — " + l);
    if (r) {
      r.note("restarting the run — " + l);
    }
    let _0x262e55 = false;
    try {
      if (o && o.restart) {
        o.restart();
        _0x262e55 = true;
      }
    } catch (_0x4913d9) {
      c("the restart itself failed — " + u("restart", _0x4913d9));
      if (r) {
        r.note("the restart itself failed — " + u("restart", _0x4913d9));
      }
    }
    if (_0x262e55) {
      return "recover";
    }
    a.halted = true;
  }
  c("stopping: the game could not fix itself — " + l);
  a.halted = true;
  if (r) {
    r.show("crash", l);
  }
  return "stop";
}
export function reportContextLost() {
  a.halted = true;
  l = "the drawing surface was lost";
  c(l);
  if (r) {
    r.show("frozen", l);
  }
}
if (r) {
  r.onUncaught = _0x405d85 => {
    i++;
    l = String(_0x405d85);
    const _0x3c3105 = _0x4f0630(a, h(), _0x30ab92);
    a = {
      faults: _0x3c3105.faults,
      firstMs: _0x3c3105.firstMs,
      lastMs: _0x3c3105.lastMs,
      recoveries: _0x3c3105.recoveries,
      halted: _0x3c3105.halted
    };
    if (_0x3c3105.action === "recover") {
      c("restarting the run after a burst of failures");
      try {
        if (o && o.restart) {
          o.restart();
        }
      } catch (_0x4d61b7) {
        a.halted = true;
      }
    } else if (_0x3c3105.action === "stop") {
      a.halted = true;
      r.show("crash", l);
    }
  };
}
export function failsafeSnapshot() {
  return {
    installed: !!r,
    booted: !!r && r.isBooted(),
    showing: r ? r.showing() : null,
    halted: a.halted,
    faults: i,
    recoveries: a.recoveries,
    beats: r ? r.beats() : 0,
    uncaught: r ? r.errors() : 0,
    lastFault: l,
    policy: _0x30ab92
  };
}
export function failsafeSelfCheck() {
  const _0x4b59ae = {
    visible: false,
    reachableReload: false,
    issues: [],
    words: ""
  };
  if (!r) {
    _0x4b59ae.issues.push("no failsafe bootstrap in the host page");
    return _0x4b59ae;
  }
  const _0x40385c = r.showing();
  r.show("crash", "selftest: painting the panel on purpose");
  const _0x4be4ea = document.getElementById("fail");
  const _0x44c68e = document.getElementById("failBtn");
  _0x4b59ae.visible = !!_0x4be4ea && _0x4be4ea.classList.contains("on") && _0x4be4ea.getBoundingClientRect().height > 0 && getComputedStyle(_0x4be4ea).display !== "none";
  _0x4b59ae.reachableReload = !!_0x44c68e && _0x44c68e.getBoundingClientRect().height > 0 && _0x44c68e.textContent.trim().length > 0 && (r.keys || []).indexOf("KeyR") >= 0;
  const _0x19345c = [];
  for (const _0x127f53 of document.querySelectorAll("#fail .fail-plain")) {
    _0x19345c.push(_0x127f53.textContent);
  }
  _0x4b59ae.words = _0x19345c.join(" ");
  if (_0x19345c.length < 4) {
    _0x4b59ae.issues.push("the panel painted only " + _0x19345c.length + " lines");
  }
  for (const _0x479b3e of _0x19345c) {
    _0x4b59ae.issues.push(..._0x127dca(_0x479b3e));
  }
  if (!_0x40385c) {
    r.hide();
  }
  return _0x4b59ae;
}