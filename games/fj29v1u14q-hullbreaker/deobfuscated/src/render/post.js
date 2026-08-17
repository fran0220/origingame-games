import * as _0x175373 from "three";
import { POST_TUNE as _0x38b935 } from "../config.js";
import { QUERY as _0x3c4b5b } from "../mode.js";
import { POST_MSAA_PIXEL_CEILING as _0x2afcef, resolvePost as _0x3dfc61, resolveRuntimeSamples as _0x485101, resolveSamples as _0x56a547 } from "../pure/post.js";
import { inverseAcesFilmic as _0x5b9ecc } from "../pure/tonemap.js";
import { camera as _0x42d9fc, renderer as _0x107554, rendererResourceSnapshot as _0x30dc8b, scene as _0x473c58 } from "./scene.js";
export const POST = _0x3dfc61(_0x3c4b5b.get("bloom"), _0x38b935);
const d = _0x3c4b5b.get("aa");
const m = new _0x175373.Vector2();
function f(_0x392ac9 = innerWidth, _0x8dacae = innerHeight) {
  const _0x364222 = _0x107554.getPixelRatio();
  return Math.max(1, _0x392ac9) * Math.max(1, _0x8dacae) * _0x364222 * _0x364222;
}
export let POST_SAMPLES = _0x485101(d, _0x38b935, f());
const g = 1200;
const h = _0x3c4b5b.get("postreport") === "1";
let S = POST.on ? "loading" : "off";
let P = null;
let w = null;
let y = true;
let b = 0;
let T = "";
let x = 0;
let M = false;
let R = 0;
let v = null;
let A = null;
let E = 0;
let B = 0;
let O = 0;
let C = 0;
let L = "";
let W = false;
function k() {
  R++;
  if (R === 1) {
    v = S;
  }
  if (R === 10) {
    A = S;
    if (h) {
      console.info("HULLBREAKER post boot report " + JSON.stringify({
        firstFrameStatus: v,
        tenthFrameStatus: A,
        stable: v === A,
        prewarmed: M,
        bootMs: x
      }));
    }
  }
}
_0x107554.info.autoReset = false;
export function renderFrame() {
  _0x107554.info.reset();
  if (P && y) {
    try {
      V();
      k();
      return;
    } catch (_0x1b93ef) {
      b++;
      T = String(_0x1b93ef && _0x1b93ef.message || _0x1b93ef);
      S = "failed";
      P = null;
      w = null;
    }
  }
  _0x107554.render(_0x473c58, _0x42d9fc);
  k();
}
const F = _0x3c4b5b.get("atmos") !== "tone";
const j = new _0x175373.Color();
const z = new _0x175373.Color();
const G = [-1, -1, -1];
const U = [0, 0, 0];
const H = [-1, -1, -1];
const _ = [0, 0, 0];
const D = [0, 0, 0];
function V() {
  const _0x18c630 = _0x473c58.background && _0x473c58.background.isColor ? _0x473c58.background : null;
  const _0x4e0fc0 = _0x473c58.fog || null;
  if (F && _0x107554.toneMapping === _0x175373.ACESFilmicToneMapping) {
    if (_0x18c630) {
      j.copy(_0x18c630);
      if ((_0x1144ef = j).r !== G[0] || _0x1144ef.g !== G[1] || _0x1144ef.b !== G[2]) {
        G[0] = _0x1144ef.r;
        G[1] = _0x1144ef.g;
        G[2] = _0x1144ef.b;
        D[0] = _0x1144ef.r;
        D[1] = _0x1144ef.g;
        D[2] = _0x1144ef.b;
        _0x5b9ecc(D, _0x107554.toneMappingExposure, U);
      }
      const _0x1c3895 = U;
      _0x18c630.setRGB(_0x1c3895[0], _0x1c3895[1], _0x1c3895[2]);
    }
    var _0x1144ef;
    if (_0x4e0fc0) {
      z.copy(_0x4e0fc0.color);
      const _0x486657 = function (_0x234fa7) {
        if (_0x234fa7.r !== H[0] || _0x234fa7.g !== H[1] || _0x234fa7.b !== H[2]) {
          H[0] = _0x234fa7.r;
          H[1] = _0x234fa7.g;
          H[2] = _0x234fa7.b;
          D[0] = _0x234fa7.r;
          D[1] = _0x234fa7.g;
          D[2] = _0x234fa7.b;
          _0x5b9ecc(D, _0x107554.toneMappingExposure, _);
        }
        return _;
      }(z);
      _0x4e0fc0.color.setRGB(_0x486657[0], _0x486657[1], _0x486657[2]);
    }
    try {
      P.render();
    } finally {
      if (_0x18c630) {
        _0x18c630.copy(j);
      }
      if (_0x4e0fc0) {
        _0x4e0fc0.color.copy(z);
      }
    }
  } else {
    P.render();
  }
}
function K() {
  if (typeof performance != "undefined" && performance.now) {
    return performance.now();
  } else {
    return Date.now();
  }
}
function q(_0x24a468) {
  b++;
  T = String(_0x24a468 && _0x24a468.message || _0x24a468);
  S = "failed";
  P = null;
  w = null;
}
if (POST.on) {
  await async function () {
    const _0x42b321 = K();
    let _0x86e78c = null;
    const _0x592a30 = Promise.all([import("three/addons/postprocessing/EffectComposer.js"), import("three/addons/postprocessing/RenderPass.js"), import("three/addons/postprocessing/UnrealBloomPass.js"), import("three/addons/postprocessing/OutputPass.js")]).then(_0x172e3b => ({
      kind: "ready",
      modules: _0x172e3b
    }), _0x4a6b80 => ({
      kind: "failed",
      error: _0x4a6b80
    }));
    const _0x5d7d58 = new Promise(_0x54b443 => {
      _0x86e78c = setTimeout(() => _0x54b443({
        kind: "timeout"
      }), g);
    });
    const _0x3fac2a = await Promise.race([_0x592a30, _0x5d7d58]);
    if (_0x86e78c !== null) {
      clearTimeout(_0x86e78c);
    }
    x = Math.round(K() - _0x42b321);
    if (_0x3fac2a.kind !== "timeout") {
      if (_0x3fac2a.kind !== "failed") {
        try {
          const [_0x235717, _0x582314, _0x500720, _0xf501f3] = _0x3fac2a.modules;
          (function (_0x2de192, _0x2fc4ef, _0x19ca6c, _0x4b24e0) {
            const _0x10c73a = _0x107554.getDrawingBufferSize(new _0x175373.Vector2());
            const _0x3be32b = new _0x175373.WebGLRenderTarget(_0x10c73a.x, _0x10c73a.y, {
              type: _0x175373.HalfFloatType,
              samples: POST_SAMPLES
            });
            const _0x46b217 = new _0x2de192(_0x107554, _0x3be32b);
            _0x46b217.renderTarget2.samples = 0;
            _0x46b217.addPass(new _0x2fc4ef(_0x473c58, _0x42d9fc));
            const _0x2a0bf4 = new _0x19ca6c(new _0x175373.Vector2(_0x10c73a.x, _0x10c73a.y), POST.strength, _0x38b935.bloom.radius, _0x38b935.bloom.threshold);
            _0x46b217.addPass(_0x2a0bf4);
            _0x46b217.addPass(new _0x4b24e0());
            _0x46b217.setSize(innerWidth, innerHeight);
            P = _0x46b217;
            w = _0x2a0bf4;
            S = "active";
          })(_0x235717.EffectComposer, _0x582314.RenderPass, _0x500720.UnrealBloomPass, _0xf501f3.OutputPass);
          (function () {
            try {
              V();
              const _0x6aec07 = _0x107554.getContext();
              if (_0x6aec07 && typeof _0x6aec07.finish == "function") {
                _0x6aec07.finish();
              }
              _0x107554.info.reset();
              M = true;
            } catch (_0x55ea5) {
              q(_0x55ea5);
            }
          })();
        } catch (_0x14ebd0) {
          q(_0x14ebd0);
        }
      } else {
        q(_0x3fac2a.error);
      }
    } else {
      q("post-processing was not ready inside the 1200ms boot budget; direct rendering retained");
    }
  }();
  addEventListener("resize", () => syncPostSize());
}
export function syncPostSize(_0x23c734 = innerWidth, _0x339629 = innerHeight) {
  const _0x1d7d40 = _0x485101(d, _0x38b935, f(_0x23c734, _0x339629));
  if (_0x1d7d40 !== POST_SAMPLES) {
    POST_SAMPLES = _0x1d7d40;
    if (P) {
      P.renderTarget1.samples = POST_SAMPLES;
      P.renderTarget1.dispose();
      P.renderTarget2.samples = 0;
    }
  }
  return !!P && (P.setPixelRatio(_0x107554.getPixelRatio()), P.setSize(_0x23c734, _0x339629), true);
}
export function postGain() {
  if (S === "active" && y) {
    return _0x38b935.emissiveGain;
  } else {
    return 1;
  }
}
export function postActive() {
  return S === "active" && y;
}
export function setAdaptiveBloomEnabled(_0x4f15ea) {
  const _0xe97d42 = _0x4f15ea !== false;
  return _0xe97d42 !== y && (y = _0xe97d42, true);
}
export function warmScenePrograms() {
  const _0xbb2f9b = K();
  const _0x4cc414 = [];
  const _0x8b9319 = [];
  const _0x512d76 = [];
  const _0x298754 = _0x107554.getRenderTarget();
  const _0x5f57d4 = _0x107554.shadowMap.autoUpdate;
  const _0x5d7328 = new _0x175373.WebGLRenderTarget(1, 1, {
    depthBuffer: true,
    stencilBuffer: false
  });
  try {
    _0x473c58.traverse(_0xb37cf6 => {
      _0x4cc414.push([_0xb37cf6, _0xb37cf6.visible]);
      _0xb37cf6.visible = true;
      if (_0xb37cf6.isMesh || _0xb37cf6.isLine || _0xb37cf6.isPoints) {
        _0x8b9319.push([_0xb37cf6, _0xb37cf6.frustumCulled]);
        _0xb37cf6.frustumCulled = false;
      }
      if (_0xb37cf6.isInstancedMesh && _0xb37cf6.count === 0) {
        _0x512d76.push(_0xb37cf6);
        _0xb37cf6.count = 1;
      }
    });
    _0x107554.compile(_0x473c58, _0x42d9fc);
    if (K() - _0xbb2f9b > 400) {
      L = "scene compile exceeded the resource warm budget; geometry draw-through skipped";
      return false;
    }
    _0x107554.shadowMap.autoUpdate = false;
    _0x107554.setRenderTarget(_0x5d7328);
    _0x107554.render(_0x473c58, _0x42d9fc);
    if (P && y) {
      _0x107554.setRenderTarget(_0x298754);
      P.setPixelRatio(1);
      P.setSize(1, 1);
      V();
    }
    const _0x2df2f8 = _0x107554.getContext();
    if (_0x2df2f8 && typeof _0x2df2f8.finish == "function") {
      _0x2df2f8.finish();
    }
    B++;
    O = Array.isArray(_0x107554.info.programs) ? _0x107554.info.programs.length : 0;
    C = _0x107554.info.memory.geometries;
    return true;
  } catch (_0x49f3a8) {
    L = String(_0x49f3a8 && _0x49f3a8.message || _0x49f3a8);
    console.warn("HULLBREAKER shaders: representative boot compile skipped — " + L);
    return false;
  } finally {
    _0x107554.setRenderTarget(_0x298754);
    if (P) {
      syncPostSize();
    }
    _0x107554.shadowMap.autoUpdate = _0x5f57d4;
    for (let _0x161a70 = 0; _0x161a70 < _0x512d76.length; _0x161a70++) {
      _0x512d76[_0x161a70].count = 0;
    }
    for (let _0x3a4461 = 0; _0x3a4461 < _0x8b9319.length; _0x3a4461++) {
      _0x8b9319[_0x3a4461][0].frustumCulled = _0x8b9319[_0x3a4461][1];
    }
    for (let _0x49dc5c = 0; _0x49dc5c < _0x4cc414.length; _0x49dc5c++) {
      _0x4cc414[_0x49dc5c][0].visible = _0x4cc414[_0x49dc5c][1];
    }
    _0x5d7328.dispose();
    E = Math.round((K() - _0xbb2f9b) * 10) / 10;
    W = E > 400;
    _0x107554.info.reset();
  }
}
export function postSnapshot() {
  const _0x143b51 = _0x107554.getDrawingBufferSize(m);
  const _0x57bea1 = P ? P.renderTarget1 : null;
  return {
    on: POST.on,
    status: S !== "active" || y ? S : "adaptive-bypass",
    readyStatus: S,
    adaptiveBloomEnabled: y,
    strength: postActive() && w ? w.strength : 0,
    radius: postActive() && w ? w.radius : 0,
    threshold: postActive() && w ? w.threshold : 0,
    samples: POST_SAMPLES,
    samplesRequested: _0x56a547(d, _0x38b935),
    samplePixelCeiling: _0x2afcef,
    pixelRatio: _0x107554.getPixelRatio(),
    drawingBuffer: {
      width: _0x143b51.x,
      height: _0x143b51.y
    },
    composerBuffer: _0x57bea1 ? {
      width: _0x57bea1.width,
      height: _0x57bea1.height
    } : null,
    resources: _0x30dc8b(),
    gain: postGain(),
    boot: {
      budgetMs: g,
      costMs: x,
      prewarmed: M,
      presentedFrames: R,
      firstFrameStatus: v,
      tenthFrameStatus: A,
      stableThroughTen: v !== null && A !== null && v === A,
      programWarmMs: E,
      programWarmCount: B,
      programsAfterWarm: O,
      geometriesAfterWarm: C,
      resourceWarmBudgetMs: 400,
      resourceWarmOverBudget: W,
      resourceWarmFault: L
    },
    atmos: F ? _0x107554.toneMapping === _0x175373.ACESFilmicToneMapping ? "match" : "unmatched" : "tone",
    faults: b,
    error: T
  };
}