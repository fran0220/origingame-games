import * as _0x4943ec from "three";
import { QUERY as _0x284efc } from "../mode.js";
import { renderer as _0x57b81e } from "./scene.js";
export const PRELOAD_BUDGET_MS = 2500;
export const MOBILE_PRELOAD_BUDGET_MS = 6500;
const n = typeof navigator != "undefined" && (navigator.maxTouchPoints > 0 || typeof matchMedia == "function" && matchMedia("(pointer: coarse)").matches);
const o = typeof innerWidth == "number" && typeof innerHeight == "number" && innerWidth <= 600 && innerHeight > innerWidth;
const a = n || o;
const i = a ? 6500 : 2500;
const s = new Map();
let l = false;
let d = 0;
let u = 0;
let c = 0;
let p = null;
let m = 0;
let f = false;
function g() {
  if (typeof performance != "undefined" && performance.now) {
    return performance.now();
  } else {
    return Date.now();
  }
}
export function preloadTexture(_0x1528a7, _0x11c849 = {}) {
  const _0x57b1a3 = s.get(_0x1528a7);
  if (_0x57b1a3) {
    return _0x57b1a3.promise;
  }
  if (l) {
    const _0x3bfea7 = {
      url: _0x1528a7,
      state: "refused",
      tex: null,
      ms: 0,
      error: "registered after the boot gate closed; nothing was loaded"
    };
    _0x3bfea7.promise = Promise.resolve(_0x3bfea7);
    s.set(_0x1528a7, _0x3bfea7);
    const _0x31e7d3 = "HULLBREAKER art: " + _0x1528a7 + " was registered after the boot gate closed and will NOT be loaded — register it at module scope, before the first await of awaitPreloads().";
    console.warn(_0x31e7d3);
    return _0x3bfea7.promise;
  }
  if (d === 0) {
    d = g();
    u = d + i;
  }
  const _0x5ed421 = {
    url: _0x1528a7,
    state: "pending",
    tex: null,
    error: null,
    ms: 0,
    cpuOnly: _0x11c849.cpuOnly === true
  };
  _0x5ed421.promise = new Promise(_0x42c6cb => {
    _0x5ed421.settle = _0x42c6cb;
  });
  s.set(_0x1528a7, _0x5ed421);
  const _0x19e815 = (_0x21aeb8, _0x5188aa) => {
    if (_0x5ed421.state === "pending") {
      _0x5ed421.state = _0x21aeb8;
      _0x5ed421.ms = Math.round(g() - d);
      Object.assign(_0x5ed421, _0x5188aa);
      _0x5ed421.settle(_0x5ed421);
    }
  };
  const _0x375027 = _0xf77c6d => _0x19e815("failed", {
    error: String(_0xf77c6d)
  });
  try {
    new _0x4943ec.TextureLoader().load(_0x1528a7, _0x45747b => {
      if (l || _0x5ed421.state !== "pending") {
        _0x45747b.dispose();
      } else {
        try {
          (function (_0xe10b2e, _0x46b6e3) {
            _0xe10b2e.colorSpace = _0x4943ec.SRGBColorSpace;
            if (_0x46b6e3.cpuOnly) {
              _0xe10b2e.generateMipmaps = false;
              _0xe10b2e.minFilter = _0x4943ec.LinearFilter;
              _0xe10b2e.magFilter = _0x46b6e3.magFilter || _0x4943ec.LinearFilter;
              return;
            }
            _0xe10b2e.anisotropy = _0x46b6e3.anisotropy || 4;
            _0xe10b2e.generateMipmaps = true;
            _0xe10b2e.minFilter = _0x4943ec.LinearMipmapLinearFilter;
            _0xe10b2e.magFilter = _0x46b6e3.magFilter || _0x4943ec.LinearFilter;
            _0xe10b2e.needsUpdate = true;
            if (typeof _0x57b81e.initTexture == "function") {
              _0x57b81e.initTexture(_0xe10b2e);
            }
          })(_0x45747b, _0x11c849);
          _0x19e815("ready", {
            tex: _0x45747b
          });
        } catch (_0x120a4e) {
          _0x45747b.dispose();
          _0x375027("the texture arrived but could not be prepared: " + (_0x120a4e && _0x120a4e.message || _0x120a4e));
        }
      }
    }, undefined, _0x36beea => _0x375027(_0x36beea && _0x36beea.type || "load error"));
  } catch (_0x156b5b) {
    _0x375027(_0x156b5b && _0x156b5b.message || "loader threw");
  }
  return _0x5ed421.promise;
}
export const WARM_ON = _0x284efc.get("warm") !== "0";
function h(_0x1b196a) {
  const _0x45541c = g();
  let _0x228836 = null;
  let _0x243e63 = null;
  const _0x918794 = [];
  try {
    _0x228836 = new _0x4943ec.WebGLRenderTarget(4, 4);
    const _0x4d0848 = new _0x4943ec.Scene();
    const _0x5deccf = new _0x4943ec.OrthographicCamera(-1, 1, 1, -1, 0, 10);
    _0x5deccf.position.z = 1;
    _0x243e63 = new _0x4943ec.PlaneGeometry(2, 2);
    for (const _0x4db2e1 of _0x1b196a) {
      if (typeof _0x57b81e.initTexture == "function") {
        _0x57b81e.initTexture(_0x4db2e1);
      }
      const _0x83424f = new _0x4943ec.MeshBasicMaterial({
        map: _0x4db2e1,
        transparent: true
      });
      _0x918794.push(_0x83424f);
      _0x4d0848.add(new _0x4943ec.Mesh(_0x243e63, _0x83424f));
    }
    const _0x23bf25 = _0x57b81e.getRenderTarget();
    _0x57b81e.setRenderTarget(_0x228836);
    _0x57b81e.render(_0x4d0848, _0x5deccf);
    const _0x437da6 = new Uint8Array(4);
    _0x57b81e.readRenderTargetPixels(_0x228836, 0, 0, 1, 1, _0x437da6);
    _0x57b81e.setRenderTarget(_0x23bf25);
  } catch (_0x463cdd) {
    console.warn("HULLBREAKER art: the GPU warm-up was skipped — " + (_0x463cdd && _0x463cdd.message || _0x463cdd) + "; the art is loaded either way.");
  } finally {
    for (const _0x5cd4e3 of _0x918794) {
      _0x5cd4e3.dispose();
    }
    if (_0x243e63) {
      _0x243e63.dispose();
    }
    if (_0x228836) {
      _0x228836.dispose();
    }
  }
  return Math.round(g() - _0x45541c);
}
export function warmDerivedTextures(_0x37f645) {
  const _0x483234 = [...new Set(_0x37f645)].filter(_0x25714b => _0x25714b && _0x25714b.isTexture);
  if (WARM_ON && _0x483234.length) {
    return {
      requested: _0x483234.length,
      warmed: _0x483234.length,
      ms: h(_0x483234)
    };
  } else {
    return {
      requested: _0x483234.length,
      warmed: 0,
      ms: 0
    };
  }
}
async function w() {
  let _0x2456ce = 0;
  while (true) {
    const _0x3e81b6 = [...s.values()].filter(_0x354e1c => _0x354e1c.state === "pending");
    if (!_0x3e81b6.length) {
      if (_0x2456ce >= 2) {
        break;
      }
      if (u && g() >= u) {
        break;
      }
      _0x2456ce++;
      await new Promise(_0x1460f8 => setTimeout(_0x1460f8, 0));
      continue;
    }
    _0x2456ce = 0;
    const _0x5075dc = u - g();
    if (_0x5075dc <= 0) {
      break;
    }
    let _0x517a08 = null;
    await Promise.race([Promise.all(_0x3e81b6.map(_0x39b134 => _0x39b134.promise)), new Promise(_0xb4e01f => {
      _0x517a08 = setTimeout(_0xb4e01f, _0x5075dc);
    })]);
    if (_0x517a08 !== null) {
      clearTimeout(_0x517a08);
    }
  }
  m = function (_0x503c45) {
    const _0x28aa3a = _0x503c45.filter(_0x18ed37 => !_0x18ed37.cpuOnly);
    if (WARM_ON && _0x28aa3a.length) {
      f = !l;
      return h(_0x28aa3a.map(_0x58cfe8 => _0x58cfe8.tex));
    } else {
      return 0;
    }
  }([...s.values()].filter(_0x5aacd3 => _0x5aacd3.state === "ready"));
  l = true;
  c = d ? Math.round(g() - d) : 0;
  for (const _0x159eb3 of s.values()) {
    if (_0x159eb3.state !== "pending") {
      continue;
    }
    const _0x42d3f5 = Math.round(g() - d);
    _0x159eb3.state = "timeout";
    _0x159eb3.ms = _0x42d3f5;
    _0x159eb3.error = "still loading after " + _0x42d3f5 + "ms of the " + i + "ms boot budget";
    console.warn("HULLBREAKER art: " + _0x159eb3.url + " — " + _0x159eb3.error + "; the game is starting without it.");
    _0x159eb3.settle(_0x159eb3);
  }
}
export function awaitPreloads() {
  if (l) {
    return Promise.resolve();
  } else {
    p ||= w();
    return p;
  }
}
export function preloadSnapshot() {
  return {
    closed: l,
    budgetMs: i,
    desktopBudgetMs: 2500,
    mobileBudgetMs: 6500,
    touchBudget: n,
    portraitBudget: o,
    mobileBudgetActive: a,
    costMs: c,
    warmOn: WARM_ON,
    warmMs: m,
    warmedWhileClosed: f,
    assets: [...s.values()].map(_0x112464 => ({
      url: _0x112464.url,
      state: _0x112464.state,
      ms: _0x112464.ms,
      error: _0x112464.error,
      residency: _0x112464.cpuOnly ? "cpu" : "gpu"
    }))
  };
}
if (typeof window != "undefined") {
  window.__HB_PRELOAD = preloadSnapshot;
}