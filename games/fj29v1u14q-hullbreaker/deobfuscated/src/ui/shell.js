import { IS_TRANSFORM_SLICE as _0x27c76d, IS_TRAVERSAL_SLICE as _0x4308f6, QUERY as _0x340cde, SHELL_AUTOSTART as _0x3ae305, SHELL_ENABLED as _0x553957, START_DIRECTION_ID as _0x3d4e2a, VIEW_ID as _0x326df8 } from "../mode.js";
import { CONFIG as _0x554a84 } from "../config.js";
import { START_DIRECTIONS as _0x40d1c5, elementVars as _0x16a75d, runStatRows as _0x221158, startDirection as _0x4e87dd, startDirectionAt as _0x3a73e6 } from "../pure/shell.js";
import { gameMs as _0x4955cd, scrollX as _0x470873, sliceStats as _0x320783 } from "../sim/time.js";
import { player as _0x228287, P as _0x2e613b } from "../sim/player.js";
import { kills as _0x4624c9 } from "../sim/hostiles.js";
import { currentGun as _0x428167, currentGunLabel as _0x5e9da2, shotsFired as _0x2a2bee, weaponDef as _0x12100e, weaponKills as _0x552640 } from "../sim/weapons.js";
import { scoreSnapshot as _0x247b80 } from "../sim/score.js";
import { committedBand as _0x4c6139, transformAltitudeAt as _0x485815 } from "../sim/transform.js";
const T = document.getElementById("shell");
const C = document.getElementById("ovPanel");
let O = _0x3d4e2a;
let x = false;
let j = false;
let k = 0;
const H = _0x4308f6 ? "traversal" : _0x27c76d ? "transform" : "six-face";
function N() {
  if (!T) {
    return;
  }
  const _0x363fd9 = _0x4e87dd(O);
  T.textContent = "";
  const _0x11e9e7 = document.createElement("div");
  _0x11e9e7.id = "shellArt";
  _0x11e9e7.appendChild(function (_0x394166) {
    const _0x46c92b = document.createDocumentFragment();
    let _0x3ac896 = null;
    for (const _0x3d7335 of _0x394166.elements) {
      const _0x1b19f9 = document.createElement("div");
      _0x1b19f9.className = "sl sl-" + _0x3d7335.t;
      const _0x176e55 = _0x1b19f9.style;
      const _0x3503c5 = _0x16a75d(_0x3d7335);
      for (const _0x54e945 of Object.keys(_0x3503c5)) {
        _0x176e55.setProperty(_0x54e945, _0x3503c5[_0x54e945]);
      }
      if (_0x3d7335.attach && _0x3ac896) {
        _0x3ac896.appendChild(_0x1b19f9);
      } else {
        _0x46c92b.appendChild(_0x1b19f9);
        _0x3ac896 = _0x1b19f9;
      }
    }
    return _0x46c92b;
  }(_0x363fd9));
  T.appendChild(_0x11e9e7);
  const _0x38d5dc = document.createElement("div");
  _0x38d5dc.id = "shellText";
  _0x38d5dc.style.setProperty("--tx", "5%");
  _0x38d5dc.style.setProperty("--ty", "24%");
  _0x38d5dc.style.setProperty("--tw", "47%");
  _0x38d5dc.style.textAlign = "left";
  _0x38d5dc.innerHTML = "<h1>HULLBREAKER</h1><p class=\"tag\">" + _0x363fd9.tagline + "</p><p class=\"prompt\">PRESS ANY KEY</p>";
  T.appendChild(_0x38d5dc);
  const _0x227d0d = document.createElement("div");
  _0x227d0d.id = "shellFoot";
  _0x227d0d.innerHTML = "<p><b>MOVE</b> WASD / ARROWS &nbsp;&middot;&nbsp; <b>JUMP</b> SPACE &nbsp;&middot;&nbsp; <b>FIRE</b> J / X &nbsp;&middot;&nbsp; <b>PAUSE</b> P / ESC</p><p class=\"dim\">CLIMB THE MERIDIAN &nbsp;&middot;&nbsp; BREAK THE CROWN &nbsp;&middot;&nbsp; SEND THE SIGNAL</p>";
  T.appendChild(_0x227d0d);
}
function D(_0x133cfa) {
  return "<div class=\"statgrid\">" + _0x133cfa.map(_0x188519 => "<span class=\"k\" data-stat=\"" + _0x188519.label + "\">" + _0x188519.label + "</span><span class=\"v\" data-stat=\"" + _0x188519.label + "\">" + _0x188519.value + "</span>").join("") + "</div>";
}
function P(_0x4d27d1) {
  return "<p class=\"keys\">" + _0x4d27d1.map(([_0x3cdd23, _0x31fb6e]) => "<b>" + _0x3cdd23 + "</b> " + _0x31fb6e).join(" &nbsp;&middot;&nbsp; ") + "</p>";
}
function U(_0x4fcd59, _0x3b2477) {
  const _0x39461f = new URLSearchParams(location.search);
  if (_0x3b2477 === null) {
    _0x39461f.delete(_0x4fcd59);
  } else {
    _0x39461f.set(_0x4fcd59, _0x3b2477);
  }
  const _0x596e6b = _0x39461f.toString();
  return location.pathname + (_0x596e6b ? "?" + _0x596e6b : "");
}
function F(_0x159509, _0x58511d) {
  return "<span class=\"k\">" + _0x159509 + "</span><span class=\"v\">" + _0x58511d.map(_0x4faab5 => _0x4faab5.on ? "<b>" + _0x4faab5.label + "</b>" : "<a href=\"" + _0x4faab5.href + "\">" + _0x4faab5.label + "</a>").join(" / ") + "</span>";
}
function w() {
  const _0x1b8672 = _0x340cde.get("audio") !== "0";
  const _0x5d82df = Object.keys(_0x554a84.viewScales).map(_0x1bea07 => ({
    label: _0x1bea07.toUpperCase(),
    on: _0x1bea07 === _0x326df8,
    href: U("view", _0x1bea07)
  }));
  return "<div class=\"panel\">" + P([["P / ESC", "resume"], ["R", "restart run"], ["Q", "start screen"], ["H", x ? "show HUD" : "hide HUD"]]) + "<div class=\"statgrid\"><span class=\"k\">MODE</span><span class=\"v\">" + H + "</span>" + F("VIEW &#8635;", _0x5d82df) + F("AUDIO &#8635;", [{
    label: "ON",
    on: _0x1b8672,
    href: U("audio", null)
  }, {
    label: "OFF",
    on: !_0x1b8672,
    href: U("audio", "0")
  }]) + F("SHELL &#8635;", [{
    label: "ON",
    on: true,
    href: U("shell", null)
  }, {
    label: "OFF",
    on: false,
    href: U("shell", "0")
  }]) + "</div><p class=\"note dim\">&#8635; reloads the run with that flag. Live run stats are on the end-of-run screen.</p></div>";
}
function K(_0x57dc3d) {
  const _0x1d69a9 = function () {
    let _0x5e60f1 = "R";
    for (const _0x341edf of Object.keys(_0x552640)) {
      if (_0x552640[_0x341edf] > _0x552640[_0x5e60f1]) {
        _0x5e60f1 = _0x341edf;
      }
    }
    return {
      mode: H,
      elapsedMs: Math.max(0, _0x4955cd - k),
      distanceM: _0x470873,
      altitudeTiles: _0x485815(_0x228287.x),
      bands: _0x4c6139,
      attempts: _0x320783.attempts,
      kills: _0x4624c9,
      shots: _0x2a2bee,
      bestWeapon: {
        name: _0x12100e(_0x5e60f1).name,
        kills: _0x552640[_0x5e60f1]
      },
      deaths: Math.max(0, _0x2e613b.lives - Math.max(0, _0x228287.lives)),
      falls: _0x320783.falls,
      setbacks: _0x320783.setbacks,
      airJumps: _0x320783.airJumps,
      minEdgeMargin: _0x320783.minEdgeMargin,
      score: _0x247b80()
    };
  }();
  const _0x31c2d0 = _0x221158(_0x1d69a9);
  if (_0x57dc3d === "VICTORY" && H === "six-face") {
    const _0x25891a = Math.max(0, Math.round(Number(_0x1d69a9.score?.threat) || 0));
    const _0x586792 = (_0x73950, _0x1d1605 = "—") => _0x31c2d0.find(_0x425b33 => _0x425b33.label === _0x73950)?.value ?? _0x1d1605;
    return "<div class=\"panel result-panel\"><div class=\"result-rank\"><span>THREAT RANK</span><strong>" + (_0x25891a >= 9000 ? "S" : _0x25891a >= 6500 ? "A" : _0x25891a >= 4000 ? "B" : _0x25891a >= 1800 ? "C" : "D") + "</strong><em>" + _0x25891a + "</em></div><div class=\"result-weapon\"><span>FINAL ARSENAL · " + (_0x428167.tier ? "TIER " + ["", "I", "II", "III"][_0x428167.tier] : "FIELD ISSUE") + "</span><b>" + _0x5e9da2() + "</b></div><div class=\"result-strip\"><span><b>" + _0x586792("TIME") + "</b><small>TIME</small></span><span><b>" + _0x586792("KILLS", "0") + "</b><small>KILLS</small></span><span><b>" + _0x586792("KILLS / 100 SHOTS", "—") + "</b><small>K / 100</small></span><span><b>" + _0x586792("DEATHS", "0") + "</b><small>DEATHS</small></span></div><details class=\"result-details\"><summary>FULL RUN TELEMETRY</summary>" + D(_0x31c2d0) + "</details>" + P([["R", "break it again"], ["Q", "start screen"]]) + "</div>";
  }
  return "<div class=\"panel\">" + D(_0x31c2d0) + P(_0x57dc3d === "VICTORY" ? [["R", "run it again"], ["Q", "start screen"]] : [["R", "restart run"], ["Q", "start screen"]]) + "</div>";
}
function B(_0x26e9ff) {
  if (C) {
    C.innerHTML = _0x26e9ff;
    C.style.display = _0x26e9ff ? "block" : "none";
  }
}
export function shellStateChanged(_0x448bbd) {
  if (_0x553957) {
    if (_0x448bbd === "MENU") {
      if (T) {
        if (!T.firstChild) {
          N();
        }
        T.classList.add("on");
        document.body.classList.add("at-title");
        j = true;
      }
    } else if (T) {
      T.classList.remove("on");
      document.body.classList.remove("at-title");
      j = false;
    }
    B(_0x448bbd === "PAUSED" ? w() : _0x448bbd === "GAME_OVER" || _0x448bbd === "VICTORY" ? K(_0x448bbd) : "");
  }
}
export function shellRunStarted() {
  k = _0x4955cd;
}
export function shellApplyIntent(_0x3ad0a7) {
  if (!_0x553957) {
    return false;
  }
  if (_0x3ad0a7 === "hud") {
    x = !x;
    document.body.classList.toggle("nohud", x);
    if (!j) {
      B(w());
    }
    return true;
  }
  if (_0x3ad0a7 && _0x3ad0a7.startsWith("pick:")) {
    const _0x3e89d5 = _0x3a73e6(Number(_0x3ad0a7.slice(5)));
    if (_0x3e89d5.id !== O) {
      O = _0x3e89d5.id;
      N();
    }
    return true;
  }
  return false;
}
export function shellSnapshot() {
  return {
    enabled: _0x553957,
    autostart: _0x3ae305,
    atTitle: j,
    direction: O,
    directions: _0x40d1c5.map(_0x3a1177 => _0x3a1177.id),
    hud: !x,
    runMs: Math.max(0, _0x4955cd - k)
  };
}