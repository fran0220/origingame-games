import * as _0x51d778 from "three";
import { QUERY as _0x27374 } from "../mode.js";
import { awaitPreloads as _0x2aa623, preloadTexture as _0x1a5ccb } from "./preload.js";
import { SPRITE_ACTION_ART as _0x3eda91, SPRITE_ART as _0x7712b0, SPRITE_FLAP_ART as _0x2b30e0, SPRITE_KINDS as _0x25c4e0, SPRITE_ROOT as _0xe53e83, resolveSpriteVariants as _0x51bcff, spritesEnabled as _0x39fb63 } from "./sprite-table.js";
export const SPRITES_ON = _0x39fb63(_0x27374.get("sprites"));
export const SPRITE_VARIANT = _0x51bcff(_0x27374.get("spritevar"));
const d = new Map();
const u = new Map();
const c = new Map();
function S(_0x234a3e, _0x49da08, _0x165ddc) {
  if (_0x49da08.state === "failed") {
    return;
  }
  _0x49da08.state = "failed";
  _0x49da08.error = _0x165ddc;
  const _0x2c872c = "HULLBREAKER art: " + _0x234a3e + " sprite " + _0x49da08.file + " did not load (" + _0x165ddc + ") — drawing the primitive body instead.";
  console.warn(_0x2c872c);
  (function (_0x56adb6) {
    const _0x52b97c = typeof window != "undefined" && window.__HB_FAILSAFE;
    if (_0x52b97c && _0x52b97c.note) {
      try {
        _0x52b97c.note(_0x56adb6);
      } catch (_0x30b9e6) {}
    }
  })(_0x2c872c);
}
for (const x of _0x25c4e0) {
  const R = _0x7712b0[x][SPRITE_VARIANT[x]];
  const T = {
    state: SPRITES_ON ? "pending" : "off",
    variant: SPRITE_VARIANT[x],
    file: R ? R.file : null,
    tex: null,
    error: null
  };
  d.set(x, T);
  if (SPRITES_ON) {
    if (R) {
      _0x1a5ccb(new URL(_0xe53e83 + R.file, import.meta.url).href).then(_0x42aec0 => {
        if (_0x42aec0.state === "ready") {
          T.tex = _0x42aec0.tex;
          T.state = "ready";
        } else {
          S(x, T, _0x42aec0.error || _0x42aec0.state);
        }
      });
    } else {
      S(x, T, "no art declared for this kind");
    }
  }
}
for (const w of _0x25c4e0) {
  const _ = _0x2b30e0[w];
  const g = {
    state: SPRITES_ON && _ ? "pending" : "off",
    variant: "flap",
    file: _ ? _.file : null,
    tex: null,
    error: null
  };
  c.set(w, g);
  if (SPRITES_ON && _) {
    _0x1a5ccb(new URL(_0xe53e83 + _.file, import.meta.url).href).then(_0x827eed => {
      if (_0x827eed.state === "ready") {
        g.tex = _0x827eed.tex;
        g.state = "ready";
      } else {
        S(w + " flap", g, _0x827eed.error || _0x827eed.state);
      }
    });
  }
}
for (const m of _0x25c4e0) {
  const I = _0x3eda91[m];
  const E = {
    state: SPRITES_ON && I ? "pending" : "off",
    variant: "action",
    file: I ? I.file : null,
    tex: null,
    error: null
  };
  u.set(m, E);
  if (SPRITES_ON && I) {
    _0x1a5ccb(new URL(_0xe53e83 + I.file, import.meta.url).href).then(_0x345822 => {
      if (_0x345822.state === "ready") {
        E.tex = _0x345822.tex;
        E.state = "ready";
      } else {
        S(m + " action", E, _0x345822.error || _0x345822.state);
      }
    });
  }
}
await _0x2aa623();
export function spriteTexture(_0x3bd3c7) {
  const _0x313fcb = d.get(_0x3bd3c7);
  if (_0x313fcb && _0x313fcb.state === "ready") {
    return _0x313fcb.tex;
  } else {
    return null;
  }
}
export function spriteActionTexture(_0xe48b5f) {
  const _0x13037e = u.get(_0xe48b5f);
  if (_0x13037e && _0x13037e.state === "ready") {
    return _0x13037e.tex;
  } else {
    return null;
  }
}
export function spriteFlapTexture(_0x478d9c) {
  const _0x39c5c2 = c.get(_0x478d9c);
  if (_0x39c5c2 && _0x39c5c2.state === "ready") {
    return _0x39c5c2.tex;
  } else {
    return null;
  }
}
export function spriteVariantOf(_0x5b264e) {
  const _0x20a106 = d.get(_0x5b264e);
  if (_0x20a106) {
    return _0x20a106.variant;
  } else {
    return null;
  }
}
export function spriteSnapshot() {
  const _0x4d6b83 = {
    enabled: SPRITES_ON,
    kinds: {}
  };
  for (const [_0x1ee8b3, _0x5ea5a9] of d) {
    _0x4d6b83.kinds[_0x1ee8b3] = {
      state: _0x5ea5a9.state,
      variant: _0x5ea5a9.variant,
      file: _0x5ea5a9.file,
      error: _0x5ea5a9.error,
      action: u.has(_0x1ee8b3) ? {
        state: u.get(_0x1ee8b3).state,
        file: u.get(_0x1ee8b3).file,
        error: u.get(_0x1ee8b3).error
      } : null,
      flap: c.has(_0x1ee8b3) ? {
        state: c.get(_0x1ee8b3).state,
        file: c.get(_0x1ee8b3).file,
        error: c.get(_0x1ee8b3).error
      } : null
    };
  }
  return _0x4d6b83;
}
if (typeof window != "undefined") {
  window.__HB_SPRITES = spriteSnapshot;
}