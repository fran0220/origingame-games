export const SHELL_ROLES = {
  void: "#07131a",
  fog: "#12303a",
  teal: "#1d5c68",
  metal: "#7a4020",
  metalLo: "#2b1a11",
  acid: "#9ce23e",
  magenta: "#ff4fd8",
  warm: "#ffe9c2"
};
export const RIG_SCREEN_FRACTION = {
  min: 3,
  max: 5
};
const t = ["sky", "mass", "slab", "glow", "lamp", "beam", "rig", "steam", "bridge", "debris", "haze", "vignette"];
export const SHELL_ELEMENT_TYPES = t;
export const START_DIRECTIONS = [{
  id: "climb",
  n: 1,
  panel: "left",
  label: "THE IMPOSSIBLE CLIMB",
  promise: "human scale, altitude, and the settlement below",
  tagline: "ONE MARINE. ONE CONTINENT-SIZED BODY. CLIMB IT.",
  titleBox: {
    x: 4,
    y: 30,
    w: 40,
    align: "left"
  },
  elements: [{
    t: "sky",
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    tone: "fog",
    o: 1
  }, {
    t: "glow",
    x: -18,
    y: -6,
    w: 76,
    h: 62,
    tone: "teal",
    o: 0.55
  }, {
    t: "glow",
    x: 4,
    y: -4,
    w: 16,
    h: 14,
    tone: "magenta",
    o: 0.4
  }, {
    t: "beam",
    x: 11.6,
    y: -2,
    w: 0.4,
    h: 10,
    tone: "magenta",
    o: 0.75
  }, {
    t: "mass",
    x: -2,
    y: 76,
    w: 10,
    h: 28,
    tone: "void",
    o: 0.55
  }, {
    t: "mass",
    x: 9,
    y: 82,
    w: 7,
    h: 22,
    tone: "void",
    o: 0.42
  }, {
    t: "mass",
    x: 17,
    y: 88,
    w: 6,
    h: 16,
    tone: "void",
    o: 0.3
  }, {
    t: "lamp",
    x: 4,
    y: 80,
    w: 0.3,
    h: 0.5,
    tone: "warm",
    o: 0.85
  }, {
    t: "lamp",
    x: 12,
    y: 86,
    w: 0.28,
    h: 0.45,
    tone: "acid",
    o: 0.7
  }, {
    t: "lamp",
    x: 19,
    y: 90,
    w: 0.26,
    h: 0.42,
    tone: "warm",
    o: 0.6
  }, {
    t: "haze",
    x: -5,
    y: 62,
    w: 110,
    h: 26,
    tone: "fog",
    o: 0.75
  }, {
    t: "mass",
    x: 45,
    y: -16,
    w: 68,
    h: 132,
    tone: "metalLo",
    rot: 1,
    o: 0.97
  }, {
    t: "mass",
    x: 49,
    y: -12,
    w: 15,
    h: 118,
    tone: "metal",
    o: 0.5
  }, {
    t: "mass",
    x: 68,
    y: -8,
    w: 11,
    h: 112,
    tone: "metal",
    o: 0.3
  }, {
    t: "mass",
    x: 80,
    y: -6,
    w: 8,
    h: 104,
    tone: "metal",
    o: 0.16
  }, {
    t: "mass",
    x: 88,
    y: -10,
    w: 20,
    h: 120,
    tone: "void",
    o: 0.55
  }, {
    t: "mass",
    x: 44.6,
    y: -14,
    w: 0.7,
    h: 128,
    tone: "metal",
    o: 0.95
  }, {
    t: "bridge",
    x: 47,
    y: 22,
    w: 13,
    h: 0.7,
    tone: "metal",
    o: 0.8
  }, {
    t: "bridge",
    x: 58,
    y: 47,
    w: 16,
    h: 0.7,
    tone: "metal",
    o: 0.7
  }, {
    t: "mass",
    x: 52,
    y: 22,
    w: 0.5,
    h: 25,
    tone: "metal",
    o: 0.55
  }, {
    t: "lamp",
    x: 57,
    y: 30,
    w: 0.4,
    h: 0.7,
    tone: "warm"
  }, {
    t: "lamp",
    x: 72,
    y: 51,
    w: 0.4,
    h: 0.7,
    tone: "warm"
  }, {
    t: "lamp",
    x: 63,
    y: 67,
    w: 0.45,
    h: 0.8,
    tone: "acid"
  }, {
    t: "steam",
    x: 50,
    y: 44,
    w: 13,
    h: 22,
    o: 0.5
  }, {
    t: "haze",
    x: -5,
    y: 8,
    w: 110,
    h: 16,
    tone: "teal",
    o: 0.3
  }, {
    t: "haze",
    x: -5,
    y: 34,
    w: 110,
    h: 20,
    tone: "teal",
    o: 0.22
  }, {
    t: "bridge",
    x: 27,
    y: 84,
    w: 30,
    h: 1.3,
    tone: "metal"
  }, {
    t: "rig",
    attach: true,
    x: 34,
    y: -290,
    w: 2.5,
    h: 3.9,
    tone: "warm"
  }, {
    t: "mass",
    x: 33,
    y: 85,
    w: 1.2,
    h: 18,
    tone: "void",
    o: 0.7
  }, {
    t: "mass",
    x: 50,
    y: 85,
    w: 1.2,
    h: 18,
    tone: "void",
    o: 0.7
  }, {
    t: "haze",
    x: -5,
    y: 86,
    w: 110,
    h: 22,
    tone: "fog",
    o: 0.6
  }, {
    t: "vignette",
    x: -5,
    y: -5,
    w: 110,
    h: 112,
    tone: "void",
    o: 0.9
  }]
}, {
  id: "wake",
  n: 2,
  panel: "middle",
  label: "THE SHIP WAKES",
  promise: "transforming architecture as the signature hook",
  tagline: "THE MERIDIAN IS AWAKE. THE WORLD TURNS UNDER YOU.",
  titleBox: {
    x: 4,
    y: 62,
    w: 44,
    align: "left"
  },
  elements: [{
    t: "sky",
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    tone: "fog",
    o: 1
  }, {
    t: "glow",
    x: -20,
    y: -4,
    w: 70,
    h: 70,
    tone: "teal",
    o: 0.5
  }, {
    t: "mass",
    x: -6,
    y: 54,
    w: 20,
    h: 52,
    tone: "void",
    o: 0.45
  }, {
    t: "mass",
    x: 12,
    y: 66,
    w: 11,
    h: 40,
    tone: "void",
    o: 0.38
  }, {
    t: "mass",
    x: 21,
    y: 74,
    w: 14,
    h: 32,
    tone: "void",
    o: 0.3
  }, {
    t: "haze",
    x: -5,
    y: 46,
    w: 110,
    h: 34,
    tone: "fog",
    o: 0.7
  }, {
    t: "mass",
    x: 46,
    y: -10,
    w: 68,
    h: 122,
    tone: "metalLo",
    o: 0.97
  }, {
    t: "mass",
    x: 50,
    y: -6,
    w: 18,
    h: 82,
    tone: "metal",
    o: 0.36
  }, {
    t: "mass",
    x: 71,
    y: 4,
    w: 13,
    h: 98,
    tone: "metal",
    o: 0.24
  }, {
    t: "mass",
    x: 45.4,
    y: -8,
    w: 0.8,
    h: 118,
    tone: "metal",
    o: 0.7
  }, {
    t: "glow",
    x: 44,
    y: 58,
    w: 44,
    h: 46,
    tone: "acid",
    o: 0.3
  }, {
    t: "mass",
    x: 52,
    y: 68,
    w: 3.5,
    h: 28,
    tone: "acid",
    o: 0.22
  }, {
    t: "mass",
    x: 62,
    y: 74,
    w: 2.6,
    h: 24,
    tone: "acid",
    o: 0.18
  }, {
    t: "mass",
    x: 46,
    y: 84,
    w: 52,
    h: 22,
    tone: "void",
    o: 0.85
  }, {
    t: "slab",
    x: -8,
    y: 24,
    w: 100,
    h: 11,
    rot: 37,
    tone: "metal"
  }, {
    t: "rig",
    attach: true,
    x: 34,
    y: -37,
    w: 2.5,
    h: 3.8,
    tone: "warm"
  }, {
    t: "mass",
    x: 80,
    y: -8,
    w: 30,
    h: 118,
    tone: "metalLo",
    o: 0.98
  }, {
    t: "steam",
    x: 64,
    y: 26,
    w: 18,
    h: 30,
    o: 0.75
  }, {
    t: "steam",
    x: 44,
    y: 60,
    w: 16,
    h: 26,
    o: 0.55
  }, {
    t: "lamp",
    x: 59,
    y: 72,
    w: 0.5,
    h: 0.9,
    tone: "acid"
  }, {
    t: "lamp",
    x: 68,
    y: 86,
    w: 0.5,
    h: 0.9,
    tone: "acid"
  }, {
    t: "lamp",
    x: 76,
    y: 20,
    w: 0.55,
    h: 1,
    tone: "magenta"
  }, {
    t: "lamp",
    x: 63,
    y: 44,
    w: 0.45,
    h: 0.8,
    tone: "magenta"
  }, {
    t: "lamp",
    x: 88,
    y: 58,
    w: 0.5,
    h: 0.9,
    tone: "magenta"
  }, {
    t: "haze",
    x: -5,
    y: 84,
    w: 110,
    h: 24,
    tone: "fog",
    o: 0.5
  }, {
    t: "vignette",
    x: -5,
    y: -5,
    w: 110,
    h: 112,
    tone: "void",
    o: 0.95
  }]
}, {
  id: "crown",
  n: 3,
  panel: "right",
  label: "SCUTTLE THE CROWN",
  promise: "the maximal summit spectacle",
  tagline: "CLIMB THE BEAST. SCUTTLE THE CROWN. SEND THE SIGNAL.",
  titleBox: {
    x: 28,
    y: 66,
    w: 44,
    align: "center"
  },
  elements: [{
    t: "sky",
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    tone: "fog",
    o: 1
  }, {
    t: "glow",
    x: 20,
    y: -26,
    w: 62,
    h: 70,
    tone: "magenta",
    o: 0.38
  }, {
    t: "beam",
    x: 49.6,
    y: -8,
    w: 0.9,
    h: 30,
    tone: "magenta"
  }, {
    t: "mass",
    x: 33,
    y: 18,
    w: 34,
    h: 40,
    tone: "metalLo",
    o: 0.98
  }, {
    t: "mass",
    x: 36,
    y: 14,
    w: 6,
    h: 10,
    tone: "metalLo",
    o: 0.9
  }, {
    t: "mass",
    x: 46,
    y: 11,
    w: 8,
    h: 12,
    tone: "metalLo",
    o: 0.9
  }, {
    t: "mass",
    x: 58,
    y: 14,
    w: 6,
    h: 10,
    tone: "metalLo",
    o: 0.9
  }, {
    t: "mass",
    x: 25,
    y: 30,
    w: 10,
    h: 28,
    tone: "metalLo",
    o: 0.85
  }, {
    t: "mass",
    x: 65,
    y: 30,
    w: 10,
    h: 28,
    tone: "metalLo",
    o: 0.85
  }, {
    t: "mass",
    x: 37,
    y: 22,
    w: 5,
    h: 32,
    tone: "metal",
    o: 0.3
  }, {
    t: "mass",
    x: 55,
    y: 22,
    w: 5,
    h: 32,
    tone: "metal",
    o: 0.22
  }, {
    t: "glow",
    x: 38,
    y: 26,
    w: 24,
    h: 22,
    tone: "magenta",
    o: 0.3
  }, {
    t: "lamp",
    x: 43,
    y: 30,
    w: 0.5,
    h: 0.9,
    tone: "acid"
  }, {
    t: "lamp",
    x: 56,
    y: 34,
    w: 0.5,
    h: 0.9,
    tone: "acid"
  }, {
    t: "lamp",
    x: 49,
    y: 44,
    w: 0.55,
    h: 1,
    tone: "magenta"
  }, {
    t: "lamp",
    x: 29,
    y: 40,
    w: 0.4,
    h: 0.7,
    tone: "warm"
  }, {
    t: "debris",
    x: 18,
    y: 8,
    w: 5,
    h: 2.6,
    rot: -18,
    tone: "metalLo"
  }, {
    t: "debris",
    x: 76,
    y: 12,
    w: 6,
    h: 3,
    rot: 24,
    tone: "metalLo"
  }, {
    t: "debris",
    x: 84,
    y: 30,
    w: 4,
    h: 2.2,
    rot: -9,
    tone: "metalLo"
  }, {
    t: "debris",
    x: 10,
    y: 26,
    w: 4.5,
    h: 2.4,
    rot: 33,
    tone: "metalLo"
  }, {
    t: "debris",
    x: 27,
    y: 4,
    w: 3,
    h: 1.8,
    rot: 12,
    tone: "metalLo",
    o: 0.8
  }, {
    t: "haze",
    x: -5,
    y: 44,
    w: 110,
    h: 26,
    tone: "fog",
    o: 0.65
  }, {
    t: "bridge",
    x: 4,
    y: 60,
    w: 92,
    h: 1.6,
    tone: "metal"
  }, {
    t: "rig",
    attach: true,
    x: 44,
    y: -240,
    w: 2.5,
    h: 3.8,
    tone: "warm"
  }, {
    t: "mass",
    x: 20,
    y: 61,
    w: 1.6,
    h: 24,
    tone: "void",
    o: 0.75
  }, {
    t: "mass",
    x: 68,
    y: 61,
    w: 1.6,
    h: 24,
    tone: "void",
    o: 0.75
  }, {
    t: "haze",
    x: -5,
    y: 68,
    w: 110,
    h: 40,
    tone: "fog",
    o: 0.55
  }, {
    t: "vignette",
    x: -5,
    y: -5,
    w: 110,
    h: 112,
    tone: "void",
    o: 0.95
  }]
}];
export const DEFAULT_START_DIRECTION = "wake";
export const START_DIRECTION_IDS = START_DIRECTIONS.map(_0x98d9fe => _0x98d9fe.id);
export function resolveStartDirection(_0x557862) {
  if (_0x557862 == null) {
    return "wake";
  }
  const _0x3299ce = String(_0x557862).trim().toLowerCase();
  for (const _0x599774 of START_DIRECTIONS) {
    if (_0x3299ce === _0x599774.id || _0x3299ce === String(_0x599774.n) || _0x3299ce === _0x599774.panel) {
      return _0x599774.id;
    }
  }
  return "wake";
}
export function startDirection(_0x11d20a) {
  for (const _0x41f005 of START_DIRECTIONS) {
    if (_0x41f005.id === _0x11d20a) {
      return _0x41f005;
    }
  }
  for (const _0x3cd443 of START_DIRECTIONS) {
    if (_0x3cd443.id === "wake") {
      return _0x3cd443;
    }
  }
  return START_DIRECTIONS[0];
}
export function startDirectionAt(_0x13d580) {
  const _0xcff27f = START_DIRECTIONS.length;
  return START_DIRECTIONS[(_0x13d580 % _0xcff27f + _0xcff27f) % _0xcff27f];
}
export function elementVars(_0x21041b) {
  const _0xca0d50 = _0x21041b.t === "rig" ? "vh" : "%";
  return {
    "--x": _0x21041b.x + "%",
    "--y": _0x21041b.y + "%",
    "--w": _0x21041b.w + _0xca0d50,
    "--h": _0x21041b.h + _0xca0d50,
    "--rot": (_0x21041b.rot || 0) + "deg",
    "--o": String(_0x21041b.o === undefined ? 1 : _0x21041b.o),
    "--c": _0x21041b.tone && SHELL_ROLES[_0x21041b.tone] ? SHELL_ROLES[_0x21041b.tone] : "transparent"
  };
}
export const SHELL_ELEMENT_VARS = ["--x", "--y", "--w", "--h", "--rot", "--o", "--c"];
export function compositionViolations(_0x221c74) {
  const _0x53ea69 = [];
  if (!_0x221c74 || !Array.isArray(_0x221c74.elements) || _0x221c74.elements.length === 0) {
    return ["direction has no elements"];
  }
  let _0x52c24e = 0;
  for (let _0x431e25 = 0; _0x431e25 < _0x221c74.elements.length; _0x431e25++) {
    const _0x246b64 = _0x221c74.elements[_0x431e25];
    const _0x25dd35 = _0x221c74.id + "/" + _0x246b64.t;
    if (!t.includes(_0x246b64.t)) {
      _0x53ea69.push(_0x25dd35 + ": unknown element type");
    }
    if (_0x246b64.tone !== undefined && !(_0x246b64.tone in SHELL_ROLES)) {
      _0x53ea69.push(_0x25dd35 + ": tone \"" + _0x246b64.tone + "\" is not one of the declared roles");
    }
    for (const _0x418aef of ["x", "y", "w", "h"]) {
      if (!Number.isFinite(_0x246b64[_0x418aef])) {
        _0x53ea69.push(_0x25dd35 + ": " + _0x418aef + " is not a number");
      }
    }
    if (_0x246b64.w <= 0 || _0x246b64.h <= 0) {
      _0x53ea69.push(_0x25dd35 + ": zero or negative extent");
    }
    if (_0x246b64.attach && _0x431e25 === 0) {
      _0x53ea69.push(_0x25dd35 + ": attached element has nothing to hang from");
    }
    if (!_0x246b64.attach && (_0x246b64.x >= 100 || _0x246b64.y >= 100 || _0x246b64.x + _0x246b64.w <= 0 || _0x246b64.y + _0x246b64.h <= 0)) {
      _0x53ea69.push(_0x25dd35 + ": lies entirely outside the frame");
    }
    if (_0x246b64.o !== undefined && (!(_0x246b64.o > 0) || !(_0x246b64.o <= 1))) {
      _0x53ea69.push(_0x25dd35 + ": opacity out of (0,1]");
    }
    if (_0x246b64.t === "rig") {
      _0x52c24e++;
      if (_0x246b64.h < RIG_SCREEN_FRACTION.min || _0x246b64.h > RIG_SCREEN_FRACTION.max) {
        _0x53ea69.push(_0x25dd35 + ": RIG is " + _0x246b64.h + "% of frame height, outside the " + RIG_SCREEN_FRACTION.min + "–" + RIG_SCREEN_FRACTION.max + "% concept-art range");
      }
    }
  }
  if (_0x52c24e !== 1) {
    _0x53ea69.push(_0x221c74.id + ": needs exactly one RIG figure, found " + _0x52c24e);
  }
  const _0x550eee = _0x221c74.titleBox;
  if (!_0x550eee || !(_0x550eee.x >= 0) || !(_0x550eee.y >= 0) || !(_0x550eee.x + _0x550eee.w <= 100) || !(_0x550eee.y <= 100)) {
    _0x53ea69.push(_0x221c74.id + ": title box is off frame");
  }
  return _0x53ea69;
}
const e = new Set(["Escape", "KeyP", "Tab", "CapsLock", "ContextMenu", "PrintScreen", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "NumLock", "ScrollLock", "Pause", "Insert"]);
const o = {
  Digit1: "pick:0",
  Numpad1: "pick:0",
  Digit2: "pick:1",
  Numpad2: "pick:1",
  Digit3: "pick:2",
  Numpad3: "pick:2"
};
export const SHELL_CONSUMING_INTENTS = ["pick:0", "pick:1", "pick:2", "hud", "restart", "title"];
export function shellKeyIntent(_0x36189a, _0xebf3f6) {
  if (typeof _0x36189a != "string") {
    return null;
  } else if (_0xebf3f6 === "MENU") {
    if (o[_0x36189a]) {
      return o[_0x36189a];
    } else if (_0x36189a === "KeyH") {
      return "hud";
    } else if (e.has(_0x36189a) || /^F\d{1,2}$/.test(_0x36189a)) {
      return null;
    } else {
      return "start";
    }
  } else if (_0xebf3f6 === "PAUSED") {
    if (_0x36189a === "KeyR") {
      return "restart";
    } else if (_0x36189a === "KeyQ") {
      return "title";
    } else if (_0x36189a === "KeyH") {
      return "hud";
    } else {
      return null;
    }
  } else if ((_0xebf3f6 === "GAME_OVER" || _0xebf3f6 === "VICTORY") && _0x36189a === "KeyQ") {
    return "title";
  } else {
    return null;
  }
}
export function formatClock(_0x1846ef) {
  const _0x9d2784 = Math.max(0, Math.round(Number.isFinite(_0x1846ef) ? _0x1846ef : 0));
  const _0x19a7d7 = Math.floor(_0x9d2784 / 60000);
  const _0x4b3df2 = Math.floor(_0x9d2784 % 60000 / 1000);
  const _0x2fe1f9 = Math.floor(_0x9d2784 % 1000 / 100);
  return _0x19a7d7 + ":" + String(_0x4b3df2).padStart(2, "0") + "." + _0x2fe1f9;
}
export function formatSeconds(_0x1c12f6) {
  return (Math.max(0, Number.isFinite(_0x1c12f6) ? _0x1c12f6 : 0) / 1000).toFixed(1) + "s";
}
export function killsPerHundredShots(_0x11ca95, _0x4efeae) {
  if (_0x4efeae > 0) {
    return Math.round(_0x11ca95 / _0x4efeae * 1000) / 10;
  } else {
    return null;
  }
}
export function runStatRows(_0x496b58) {
  const _0xa6efa8 = [];
  const _0xe3cb14 = (_0x1fc01d, _0x10c9a0) => {
    if (_0x10c9a0 != null) {
      _0xa6efa8.push({
        label: _0x1fc01d,
        value: _0x10c9a0
      });
    }
  };
  _0xe3cb14("TIME", formatClock(_0x496b58.elapsedMs));
  if (_0x496b58.mode === "transform") {
    _0xe3cb14("ALTITUDE", Math.round(_0x496b58.altitudeTiles || 0) + "m");
    _0xe3cb14("TURNS", (_0x496b58.bands || 0) + " / 2");
  } else if (_0x496b58.mode === "traversal") {
    _0xe3cb14("ATTEMPT", String(_0x496b58.attempts || 1));
  } else {
    _0xe3cb14("DISTANCE", Math.floor(_0x496b58.distanceM || 0) + "m");
  }
  _0xe3cb14("KILLS", String(_0x496b58.kills || 0));
  _0xe3cb14("SHOTS", String(_0x496b58.shots || 0));
  const _0xfd2535 = killsPerHundredShots(_0x496b58.kills || 0, _0x496b58.shots || 0);
  _0xe3cb14("KILLS / 100 SHOTS", _0xfd2535 === null ? null : _0xfd2535.toFixed(1));
  if (_0x496b58.bestWeapon && _0x496b58.bestWeapon.kills > 0) {
    _0xe3cb14("FAVOURITE WEAPON", _0x496b58.bestWeapon.name + " (" + _0x496b58.bestWeapon.kills + ")");
  }
  if (_0x496b58.mode === "six-face") {
    _0xe3cb14("DEATHS", String(_0x496b58.deaths || 0));
  }
  _0xe3cb14("FALLS", String(_0x496b58.falls || 0));
  if (_0x496b58.setbacks) {
    _0xe3cb14("HULL FALLBACKS", String(_0x496b58.setbacks));
  }
  _0xe3cb14("AIR JUMPS", String(_0x496b58.airJumps || 0));
  if (Number.isFinite(_0x496b58.minEdgeMargin)) {
    _0xe3cb14("CLOSEST EDGE", Math.max(0, _0x496b58.minEdgeMargin).toFixed(1) + " tiles");
  }
  const _0x20d930 = _0x496b58.score;
  if (_0x20d930 && _0x20d930.enabled) {
    _0xe3cb14("THREAT", _0x20d930.threat + (_0x20d930.classification ? " · " + _0x20d930.classification : ""));
    _0xe3cb14("CHARGE", _0x20d930.notchName || String(_0x20d930.notch));
    _0xe3cb14("HOT", formatSeconds(_0x20d930.hotMs) + " of " + formatSeconds(_0x20d930.playMs));
  }
  return _0xa6efa8;
}