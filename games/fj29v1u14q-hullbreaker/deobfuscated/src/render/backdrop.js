import { BACKDROP_TUNE as _0x4a4f29 } from "../config.js";
import { IS_TRANSFORM_SLICE as _0x1df063, QUERY as _0x595e1c } from "../mode.js";
import { resolveBackdropOn as _0x4ee2fc } from "./backdrop-table.js";
import { MERIDIAN_DEPTH_COMPONENT_IDS as _0x35cb02, MERIDIAN_DEPTH_SOURCES as _0x59a9f6 } from "./backdrop-depth-plan.js";
import { FOREGROUND_CUTOUT_COMPONENTS as _0x293e18 } from "./foreground-component-spec.generated.js";
import { awaitPreloads as _0x3f8b8b, preloadTexture as _0x5d9f64 } from "./preload.js";
import { scene as _0x1a733d } from "./scene.js";
import { atmosphereFacetVisibilitySnapshot as _0x2745c2, buildMeridianAtmosphere as _0x597fdd, updateAtmosphereFacetVisibility as _0x63dae0 } from "./atmosphere.js";
export const BACKDROP_ON = _0x4ee2fc(_0x595e1c.get("backdrop"), _0x1df063);
const u = _0x595e1c.get("pixelworld");
export const PIXEL_BACKDROP_ON = u === "1";
const f = _0x4a4f29.placements.map(_0x116669 => ({
  placement: _0x116669,
  state: "retired",
  error: null,
  replaced: true,
  replacement: "facet-anatomy-volume"
}));
const h = {
  state: BACKDROP_ON ? "pending" : "off",
  tex: null,
  error: null
};
const B = {
  state: BACKDROP_ON ? "pending" : "off",
  tex: null,
  error: null
};
const x = {
  state: BACKDROP_ON ? "pending" : "off",
  tex: null,
  error: null
};
let O = {
  built: 0,
  triangles: 0,
  composition: BACKDROP_ON ? "pending" : "off",
  directResidentTextures: 0,
  runtimeCanvases: 0,
  runtimeCrops: 0
};
function y(_0x18f66d, _0x284849, _0x40309c = {}) {
  if (!BACKDROP_ON) {
    return null;
  }
  const _0x5cc066 = new URL(_0x284849.file, import.meta.url).href;
  return _0x5d9f64(_0x5cc066, _0x40309c).then(_0x439f87 => _0x439f87.state === "ready" ? (_0x18f66d.tex = _0x439f87.tex, _0x18f66d.state = "ready", _0x439f87) : (_0x18f66d.state = "failed", _0x18f66d.error = _0x439f87.error || _0x439f87.state, console.warn("HULLBREAKER art: " + _0x284849.id + " backdrop source unavailable (" + _0x18f66d.error + ") -- that depth band stays empty; play continues."), _0x439f87));
}
try {
  if (PIXEL_BACKDROP_ON) {
    h.state = B.state = x.state = "pixel-primitive";
  } else {
    y(h, _0x59a9f6.far, {
      anisotropy: 6
    });
    y(B, _0x59a9f6.mid, {
      anisotropy: 6
    });
    y(x, _0x59a9f6.near, {
      anisotropy: 8
    });
  }
  await _0x3f8b8b();
  if (BACKDROP_ON) {
    const R = new Set(_0x35cb02);
    const b = _0x293e18.filter(_0x1baed3 => R.has(_0x1baed3.id));
    O = _0x597fdd(_0x1a733d, {
      farTexture: h.tex,
      midTexture: B.tex,
      fragmentTexture: x.tex,
      fragmentComponents: b,
      pixelPrimitives: PIXEL_BACKDROP_ON
    });
  }
} catch (_0x373170) {
  console.warn("HULLBREAKER art: facet depth composition failed (" + (_0x373170 && _0x373170.message || _0x373170) + ") -- the ordinary world remains playable.");
}
export function updateBackdropFacetVisibility() {
  return _0x63dae0();
}
updateBackdropFacetVisibility();
export function backdropSnapshot() {
  const _0x45e44a = _0x2745c2();
  return {
    on: BACKDROP_ON,
    built: 0,
    legacyPlateMeshes: 0,
    depthMeshesBuilt: O.built || 0,
    depthMattesBuilt: 0,
    depthMatteResidency: {
      requested: 0,
      warmed: 0,
      ms: 0,
      retired: "runtime-canvas-matte"
    },
    depthComposition: {
      mode: O.composition,
      directResidentTextures: O.directResidentTextures || 0,
      presentation: O.presentation || "pending",
      pixelPrimitiveBands: O.pixelPrimitiveBands || 0,
      runtimeCanvases: 0,
      runtimeCrops: 0
    },
    facetVisibility: {
      totalFacets: _0x45e44a.totalFacets,
      visibleFacets: _0x45e44a.visibleFacets,
      totalMeshes: _0x45e44a.totalMeshes,
      visibleMeshes: _0x45e44a.visibleMeshes,
      atmosphere: _0x45e44a
    },
    atmosphere: O,
    macroBody: {
      state: B.state,
      error: B.error
    },
    anatomyBody: {
      state: h.state,
      error: h.error
    },
    fragmentBody: {
      state: x.state,
      error: x.error
    },
    sources: {
      far: {
        state: h.state,
        error: h.error
      },
      mid: {
        state: B.state,
        error: B.error
      },
      near: {
        state: x.state,
        error: x.error
      }
    },
    plates: f.map(_0xe04587 => ({
      face: _0xe04587.placement.face,
      plate: _0xe04587.placement.plate,
      tier: _0xe04587.placement.tier,
      state: _0xe04587.state,
      error: _0xe04587.error,
      replaced: _0xe04587.replaced,
      replacement: _0xe04587.replacement
    }))
  };
}
if (typeof window != "undefined") {
  window.__HB_BACKDROP = backdropSnapshot;
}