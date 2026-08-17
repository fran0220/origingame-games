import * as _0x2068ef from "three";
import { SURFACE as _0x4a34e9 } from "../pure/post.js";
import { PAL as _0x104af4 } from "./palette.js";
import { renderer as _0x1c4a07 } from "./scene.js";
import { CONFIG as _0x152fe0 } from "../config.js";
import { QUERY as _0x2c84e6 } from "../mode.js";
import { preloadTexture as _0x300885, awaitPreloads as _0x3aa33e } from "./preload.js";
import { hullPieceDims as _0x3485b4, hullTexRepeat as _0x2699af, resolveHullTexMode as _0x4233f3, composeHullTile as _0x5a90c5, composeDeckPanel as _0x56a0f1, composePixelDeckPanel as _0x55a556, DECK_PANEL as _0x46726d, TILE_TONE as _0x1ace82, SCUTE_TILE_TONE as _0x37f8d5 } from "./hulltiles.js";
export { _0x4a34e9 as SURFACE };
let w;
export function surfaceEnv() {
  if (w === undefined) {
    try {
      w = function () {
        const _0x6f3cbc = new _0x2068ef.Color(_0x104af4.hemiSky);
        const _0x1595b6 = new _0x2068ef.Color(_0x104af4.bg);
        const _0x3a952a = new _0x2068ef.Color(_0x104af4.hemiGround);
        const _0x31122f = new Float32Array(2048);
        const _0x143835 = new _0x2068ef.Color();
        for (let _0x30c5ed = 0; _0x30c5ed < 16; _0x30c5ed++) {
          const _0x5b00b1 = _0x30c5ed / 15;
          if (_0x5b00b1 < 0.5) {
            _0x143835.copy(_0x6f3cbc).lerp(_0x1595b6, _0x5b00b1 * 2);
          } else {
            _0x143835.copy(_0x1595b6).lerp(_0x3a952a, (_0x5b00b1 - 0.5) * 2);
          }
          for (let _0x4996a1 = 0; _0x4996a1 < 32; _0x4996a1++) {
            const _0xae4c8b = (_0x30c5ed * 32 + _0x4996a1) * 4;
            _0x31122f[_0xae4c8b] = _0x143835.r;
            _0x31122f[_0xae4c8b + 1] = _0x143835.g;
            _0x31122f[_0xae4c8b + 2] = _0x143835.b;
            _0x31122f[_0xae4c8b + 3] = 1;
          }
        }
        const _0x2a6285 = new _0x2068ef.DataTexture(_0x31122f, 32, 16, _0x2068ef.RGBAFormat, _0x2068ef.FloatType);
        _0x2a6285.mapping = _0x2068ef.EquirectangularReflectionMapping;
        _0x2a6285.needsUpdate = true;
        const _0x4cdeb3 = new _0x2068ef.PMREMGenerator(_0x1c4a07);
        const _0x3f3671 = _0x4cdeb3.fromEquirectangular(_0x2a6285);
        _0x4cdeb3.dispose();
        _0x2a6285.dispose();
        return _0x3f3671.texture;
      }();
    } catch {
      w = null;
    }
  }
  return w;
}
export function applySurface(_0x1e639d, _0x3b3e65) {
  const _0x228ae2 = _0x4a34e9[_0x3b3e65];
  if (!_0x228ae2 || !_0x1e639d) {
    return _0x1e639d;
  }
  _0x1e639d.roughness = _0x228ae2.roughness;
  _0x1e639d.metalness = _0x228ae2.metalness;
  const _0x51db71 = surfaceEnv();
  if (_0x51db71) {
    _0x1e639d.envMap = _0x51db71;
    _0x1e639d.envMapIntensity = _0x228ae2.envMapIntensity;
  }
  _0x1e639d.needsUpdate = true;
  return _0x1e639d;
}
export const HULL_TEX_MODE = _0x4233f3(_0x2c84e6.get("tex"));
export const HULL_TEX_ON = HULL_TEX_MODE !== "flat";
const x = new URL("../../assets/generated/textures/", import.meta.url).href;
const y = new Map();
const v = _0x1c4a07.capabilities.getMaxAnisotropy();
function S(_0x55744d, _0x189a30, _0x517be1 = HULL_TEX_ON) {
  const _0x1b4795 = {
    tex: null,
    ready: false
  };
  y.set(_0x55744d, _0x1b4795);
  if (_0x517be1) {
    _0x300885(_0x189a30, {
      anisotropy: v
    }).then(_0x3e089a => {
      if (_0x3e089a.state === "ready") {
        _0x1b4795.tex = _0x3e089a.tex;
        _0x1b4795.ready = true;
      } else {
        console.warn("HULLBREAKER art: hull texture " + _0x55744d + " did not load (" + (_0x3e089a.error || _0x3e089a.state) + ") — the flat material stays.");
      }
    });
    return _0x1b4795;
  } else {
    return _0x1b4795;
  }
}
function L(_0x345dc6) {
  const _0x572d62 = document.createElement("canvas");
  _0x572d62.width = _0x345dc6.naturalWidth || _0x345dc6.width;
  _0x572d62.height = _0x345dc6.naturalHeight || _0x345dc6.height;
  const _0x2fd36f = _0x572d62.getContext("2d", {
    willReadFrequently: true
  });
  _0x2fd36f.drawImage(_0x345dc6, 0, 0);
  return {
    data: _0x2fd36f.getImageData(0, 0, _0x572d62.width, _0x572d62.height).data,
    width: _0x572d62.width,
    height: _0x572d62.height
  };
}
function E(_0x34638e) {
  if (!_0x34638e) {
    return null;
  }
  const _0x3686e0 = document.createElement("canvas");
  _0x3686e0.width = _0x34638e.width;
  _0x3686e0.height = _0x34638e.height;
  const _0x4ec193 = _0x3686e0.getContext("2d");
  const _0x3bca9f = _0x4ec193.createImageData(_0x34638e.width, _0x34638e.height);
  _0x3bca9f.data.set(_0x34638e.data);
  _0x4ec193.putImageData(_0x3bca9f, 0, 0);
  const _0x34d359 = new _0x2068ef.CanvasTexture(_0x3686e0);
  _0x34d359.colorSpace = _0x2068ef.SRGBColorSpace;
  _0x34d359.anisotropy = v;
  _0x34d359.generateMipmaps = true;
  _0x34d359.minFilter = _0x2068ef.LinearMipmapLinearFilter;
  _0x34d359.needsUpdate = true;
  T(_0x34d359);
  return {
    tex: _0x34d359,
    curve: _0x34638e.curve,
    layout: _0x34638e.layout
  };
}
S("hull-panel-tile-v2.png", x + "hull-panel-tile-v2.png", HULL_TEX_MODE === "painted");
S("hull-panel-pixel-tile-v1.png", x + "hull-panel-pixel-tile-v1.png", HULL_TEX_MODE === "pixel");
S("weld-seam-strip.png", x + "weld-seam-strip.png");
await _0x3aa33e();
const M = 4;
function T(_0x52af6b) {
  if (!_0x52af6b) {
    return;
  }
  if (typeof _0x1c4a07.initTexture == "function") {
    _0x1c4a07.initTexture(_0x52af6b);
  }
  let _0xc57ae6 = null;
  let _0x34420d = null;
  let _0x531ca1 = null;
  try {
    _0xc57ae6 = new _0x2068ef.WebGLRenderTarget(M, M);
    const _0x22c753 = new _0x2068ef.Scene();
    const _0x5467e7 = new _0x2068ef.OrthographicCamera(-1, 1, 1, -1, 0, 10);
    _0x5467e7.position.z = 1;
    _0x34420d = new _0x2068ef.PlaneGeometry(2, 2);
    _0x531ca1 = new _0x2068ef.MeshBasicMaterial({
      map: _0x52af6b,
      transparent: true
    });
    _0x22c753.add(new _0x2068ef.Mesh(_0x34420d, _0x531ca1));
    const _0xb2e883 = _0x1c4a07.getRenderTarget();
    _0x1c4a07.setRenderTarget(_0xc57ae6);
    _0x1c4a07.render(_0x22c753, _0x5467e7);
    const _0x3cf916 = new Uint8Array(4);
    _0x1c4a07.readRenderTargetPixels(_0xc57ae6, 0, 0, 1, 1, _0x3cf916);
    _0x1c4a07.setRenderTarget(_0xb2e883);
  } catch (_0x954eb1) {
    console.warn("HULLBREAKER art: a hull texture warm-up was skipped — " + (_0x954eb1 && _0x954eb1.message || _0x954eb1) + "; the art is loaded either way.");
  } finally {
    if (_0x531ca1) {
      _0x531ca1.dispose();
    }
    if (_0x34420d) {
      _0x34420d.dispose();
    }
    if (_0xc57ae6) {
      _0xc57ae6.dispose();
    }
  }
}
const _ = {};
(function () {
  const _0x5dce5b = y.get("weld-seam-strip.png");
  const _0x20de1d = _0x2699af(_0x152fe0);
  const _0x5183f7 = (_0x32afc3, _0x19ae70, _0x568ed8) => {
    const _0x643c57 = function (_0x401482, _0x531110, _0xabb24c, _0x524f08 = _0x1ace82) {
      if (_0x531110 && _0x531110.ready) {
        return E(_0x5a90c5(_0x152fe0, _0x401482, L(_0x531110.tex.image), _0xabb24c && _0xabb24c.ready ? L(_0xabb24c.tex.image) : null, _0x524f08));
      } else {
        return null;
      }
    }(_0x32afc3, _0x19ae70, _0x568ed8, _0x32afc3 === "shadow" ? _0x1ace82 : _0x37f8d5);
    if (_0x643c57) {
      _[_0x32afc3] = {
        map: _0x643c57.tex,
        bumpScale: {
          hull: 0.015,
          wall: 0.004,
          scute: 0.02,
          shadow: 0.02
        }[_0x32afc3],
        repeat: _0x20de1d[_0x32afc3],
        gain: _0x643c57.curve.gain,
        curve: _0x643c57.curve
      };
    }
  };
  _0x5183f7("hull", null, null);
  _0x5183f7("wall", null, null);
  _0x5183f7("scute", null, null);
  _0x5183f7("shadow", _0x5dce5b, null);
  for (const _0x4485a2 of [_0x5dce5b]) {
    if (_0x4485a2 && _0x4485a2.ready && _0x4485a2.tex) {
      _0x4485a2.tex.dispose();
    }
  }
})();
let R = null;
(function () {
  const _0x27183a = HULL_TEX_MODE === "pixel";
  const _0x424907 = _0x27183a ? "hull-panel-pixel-tile-v1.png" : "hull-panel-tile-v2.png";
  const _0x373af7 = y.get(_0x424907);
  const _0x4615fc = function (_0x2d02ac, _0x265623 = false) {
    if (!_0x2d02ac || !_0x2d02ac.ready) {
      return null;
    }
    const _0x157ad7 = L(_0x2d02ac.tex.image);
    return E(_0x265623 ? _0x55a556(_0x157ad7) : _0x56a0f1(_0x152fe0, _0x157ad7));
  }(_0x373af7, _0x27183a);
  if (_0x4615fc) {
    _0x4615fc.tex.wrapS = _0x4615fc.tex.wrapT = _0x2068ef.MirroredRepeatWrapping;
    _0x4615fc.tex.repeat.set(1, 1);
    _0x4615fc.tex.offset.set(0, 0);
    _0x4615fc.tex.needsUpdate = true;
    R = {
      map: _0x4615fc.tex,
      bumpScale: 0.012,
      gain: _0x4615fc.curve.gain,
      curve: _0x4615fc.curve,
      layout: _0x4615fc.layout,
      sourceFile: _0x424907,
      pixelAuthored: _0x27183a
    };
  }
  if (_0x373af7 && _0x373af7.ready && _0x373af7.tex) {
    _0x373af7.tex.dispose();
  }
})();
(function () {
  if (!R) {
    return;
  }
  const _0x25fcab = _0x3485b4(_0x152fe0);
  const _0x189292 = {
    hull: 0.008,
    wall: 0.003,
    scute: 0.012
  };
  for (const _0x320d1c of ["hull", "wall", "scute"]) {
    const _0x3314e3 = R.map.clone();
    _0x3314e3.wrapS = _0x3314e3.wrapT = _0x2068ef.MirroredRepeatWrapping;
    _0x3314e3.repeat.set(_0x25fcab[_0x320d1c][0] / R.layout.worldSpan, _0x25fcab[_0x320d1c][1] / R.layout.worldSpan);
    _0x3314e3.center.set(0.5, 0.5);
    _0x3314e3.needsUpdate = true;
    T(_0x3314e3);
    _[_0x320d1c] = {
      map: _0x3314e3,
      bumpScale: _0x189292[_0x320d1c],
      repeat: [_0x3314e3.repeat.x, _0x3314e3.repeat.y],
      gain: R.gain,
      curve: R.curve,
      wrapping: "mirrored-repeat"
    };
  }
})();
export function applyDeckPanelTexture(_0xf450ad) {
  const _0x27d394 = R;
  if (_0x27d394 && _0xf450ad) {
    _0xf450ad.map = _0x27d394.map;
    _0xf450ad.bumpMap = _0x27d394.map;
    _0xf450ad.bumpScale = _0x27d394.bumpScale;
    _0xf450ad.color.setRGB(_0x27d394.gain, _0x27d394.gain, _0x27d394.gain, _0x2068ef.LinearSRGBColorSpace);
    _0xf450ad.needsUpdate = true;
    return _0xf450ad;
  } else {
    return _0xf450ad;
  }
}
export function deckPanelTextureSnapshot() {
  const _0x51494d = R;
  return {
    mode: HULL_TEX_MODE,
    ready: !!_0x51494d,
    sourceReady: !!y.get(_0x51494d?.sourceFile)?.ready,
    sourceFile: _0x51494d?.sourceFile || null,
    pixelAuthored: !!_0x51494d?.pixelAuthored,
    wrapping: _0x51494d ? "mirrored-repeat" : "flat-fallback",
    canvasPx: _0x51494d ? _0x51494d.layout.canvasPx : 0,
    worldSpan: _0x51494d ? _0x51494d.layout.worldSpan : 0,
    gain: _0x51494d ? _0x51494d.gain : 1,
    mean: _0x51494d ? _0x51494d.curve.mean : 0,
    sd: _0x51494d ? _0x51494d.curve.sd : 0,
    bumpScale: _0x51494d ? _0x51494d.bumpScale : 0
  };
}
if (typeof window != "undefined") {
  window.__HB_DECK_PANEL = deckPanelTextureSnapshot;
}
export function applyHullTexture(_0x536f7, _0x35550a) {
  const _0x80d4b2 = _[_0x35550a];
  if (_0x80d4b2 && _0x536f7) {
    _0x80d4b2.map.wrapS = _0x80d4b2.map.wrapT = _0x80d4b2.wrapping === "mirrored-repeat" ? _0x2068ef.MirroredRepeatWrapping : _0x2068ef.RepeatWrapping;
    _0x80d4b2.map.repeat.set(_0x80d4b2.repeat[0], _0x80d4b2.repeat[1]);
    _0x536f7.map = _0x80d4b2.map;
    _0x536f7.bumpMap = _0x80d4b2.map;
    _0x536f7.bumpScale = _0x80d4b2.bumpScale;
    _0x536f7.color.setRGB(_0x80d4b2.gain, _0x80d4b2.gain, _0x80d4b2.gain, _0x2068ef.LinearSRGBColorSpace);
    _0x536f7.needsUpdate = true;
    return _0x536f7;
  } else {
    return _0x536f7;
  }
}
export function varyHullTexture(_0x171d70, _0x1a5a4f = 0) {
  if (!(_0x1a5a4f > 0) || !_0x171d70 || !_0x171d70.map) {
    return _0x171d70;
  }
  const _0xbf1f77 = [[0, 0, 0], [0.37, 0.19, 0], [0.68, 0.47, Math.PI], [0.13, 0.71, Math.PI], [0.82, 0.29, 0]];
  const _0x2d765f = _0xbf1f77[_0x1a5a4f % _0xbf1f77.length];
  const _0x1fd93a = _0x171d70.map.clone();
  _0x1fd93a.center.set(0.5, 0.5);
  _0x1fd93a.offset.set(_0x2d765f[0], _0x2d765f[1]);
  _0x1fd93a.rotation = _0x2d765f[2];
  _0x1fd93a.needsUpdate = true;
  T(_0x1fd93a);
  _0x171d70.map = _0x1fd93a;
  _0x171d70.bumpMap = _0x1fd93a;
  _0x171d70.needsUpdate = true;
  return _0x171d70;
}
export function hullTextureSnapshot() {
  const _0x2e21c3 = {};
  for (const [_0xf9701a, _0x129e11] of y) {
    _0x2e21c3[_0xf9701a] = _0x129e11.ready;
  }
  const _0x4f28d5 = {};
  for (const [_0x9a3b25, _0x5d4d1a] of Object.entries(_)) {
    _0x4f28d5[_0x9a3b25] = {
      gain: _0x5d4d1a.gain,
      hasMap: !!_0x5d4d1a.map,
      repeat: _0x5d4d1a.repeat,
      bumpScale: _0x5d4d1a.bumpScale,
      canvasPx: _0x5d4d1a.map && _0x5d4d1a.map.image ? _0x5d4d1a.map.image.width : 0,
      mean: _0x5d4d1a.curve.mean,
      sd: _0x5d4d1a.curve.sd,
      contrast: _0x5d4d1a.curve.contrast,
      linMean: _0x5d4d1a.curve.linMean,
      linRelSd: _0x5d4d1a.curve.linRelSd
    };
  }
  return {
    on: HULL_TEX_ON,
    mode: HULL_TEX_MODE,
    files: _0x2e21c3,
    buckets: Object.keys(_),
    tone: _0x4f28d5
  };
}
if (typeof window != "undefined") {
  window.__HB_HULL_TEX = hullTextureSnapshot;
}