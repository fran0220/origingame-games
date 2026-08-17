import * as _0x208ac8 from "three";
import { CONFIG as _0x1733db } from "../config.js";
import { QUERY as _0x3e6181 } from "../mode.js";
import { resolveRenderPixelRatio as _0x572bc7 } from "../pure/render-budget.js";
import { PAL as _0x56221c } from "./palette.js";
import { installLightRig as _0x51eee8 } from "./lights.js";
const o = _0x3e6181.get("bloom");
export const CANVAS_MSAA = _0x3e6181.get("canvasaa") === "1" || o === "0" || o === "off";
export const renderer = new _0x208ac8.WebGLRenderer({
  antialias: CANVAS_MSAA
});
export const RENDER_BUDGETED = _0x3e6181.get("renderbudget") !== "legacy";
let s = 1;
export function renderPixelRatio(_0x2000a1 = devicePixelRatio, _0x117aa6 = innerWidth, _0x5e5b09 = innerHeight, _0x35ef49 = RENDER_BUDGETED) {
  return _0x572bc7(_0x2000a1, _0x117aa6, _0x5e5b09, _0x35ef49) * s;
}
export function syncRenderPixelRatio(_0x53e078 = devicePixelRatio, _0x1f23b5 = innerWidth, _0x5f4e88 = innerHeight) {
  const _0x27a1a9 = renderPixelRatio(_0x53e078, _0x1f23b5, _0x5f4e88);
  if (renderer.getPixelRatio() !== _0x27a1a9) {
    renderer.setPixelRatio(_0x27a1a9);
  }
  return _0x27a1a9;
}
export function setAdaptiveRenderScale(_0x1133a0) {
  const _0x286d89 = Math.max(0.6, Math.min(1, Number.isFinite(_0x1133a0) ? _0x1133a0 : 1));
  return _0x286d89 !== s && (s = _0x286d89, syncRenderPixelRatio(), renderer.setSize(innerWidth, innerHeight, false), true);
}
syncRenderPixelRatio();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
addEventListener("resize", () => syncRenderPixelRatio());
export const scene = new _0x208ac8.Scene();
scene.background = new _0x208ac8.Color(_0x56221c.bg);
scene.fog = new _0x208ac8.Fog(_0x56221c.bg, _0x1733db.fog.near, _0x1733db.fog.far);
export const camera = new _0x208ac8.PerspectiveCamera(_0x1733db.camera.fov, innerWidth / innerHeight, _0x1733db.camera.near, _0x1733db.camera.far);
export const HIDE = new _0x208ac8.Matrix4().makeScale(0, 0, 0);
const d = new _0x208ac8.Vector2();
const c = new _0x208ac8.Vector2();
export function rendererResourceSnapshot() {
  renderer.getSize(d);
  renderer.getDrawingBufferSize(c);
  const _0x11fa3d = renderer.info;
  const _0x60b599 = renderer.getContext();
  const _0x5b16b4 = _0x60b599.getContextAttributes();
  return {
    policy: RENDER_BUDGETED ? "bounded" : "legacy",
    adaptiveScale: s,
    pixelRatio: renderer.getPixelRatio(),
    css: {
      width: d.x,
      height: d.y
    },
    drawingBuffer: {
      width: c.x,
      height: c.y
    },
    drawingPixels: c.x * c.y,
    draw: {
      calls: _0x11fa3d.render.calls,
      triangles: _0x11fa3d.render.triangles,
      points: _0x11fa3d.render.points,
      lines: _0x11fa3d.render.lines
    },
    memory: {
      geometries: _0x11fa3d.memory.geometries,
      textures: _0x11fa3d.memory.textures,
      programs: Array.isArray(_0x11fa3d.programs) ? _0x11fa3d.programs.length : 0
    },
    context: {
      antialias: _0x5b16b4?.antialias === true,
      alpha: _0x5b16b4?.alpha === true,
      samples: _0x60b599.getParameter(_0x60b599.SAMPLES)
    }
  };
}
export function materialSubmissionSnapshot() {
  const _0x584c0a = new Set();
  scene.traverse(_0x341961 => {
    const _0x4f0e51 = Array.isArray(_0x341961.material) ? _0x341961.material : [_0x341961.material];
    for (const _0x4d14a6 of _0x4f0e51) {
      if (_0x4d14a6?.isMaterial) {
        _0x584c0a.add(_0x4d14a6);
      }
    }
  });
  let _0x47dc00 = 0;
  let _0x5c0d47 = 0;
  const _0x3b72fb = [];
  for (const _0x490444 of _0x584c0a) {
    if (!_0x490444.transparent || _0x490444.side !== _0x208ac8.DoubleSide) {
      continue;
    }
    _0x47dc00++;
    if (_0x490444.forceSinglePass) {
      _0x5c0d47++;
      continue;
    }
    const _0x23f6f9 = _0x490444.userData?.allowTwoPassTransparent;
    if (!_0x23f6f9) {
      _0x3b72fb.push(_0x490444.name || _0x490444.type + "#" + _0x490444.id);
    }
  }
  return {
    materials: _0x584c0a.size,
    transparentDoubleSide: _0x47dc00,
    singlePass: _0x5c0d47,
    violations: _0x3b72fb
  };
}
_0x51eee8(renderer, scene);