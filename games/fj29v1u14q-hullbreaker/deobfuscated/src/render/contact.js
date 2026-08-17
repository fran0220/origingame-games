import * as _0x25ea41 from "three";
import { QUERY, IS_TRANSFORM_SLICE } from "../mode.js";
import { CONTACT_SHADOW, contactShadowPlacement } from "../pure/contactShadow.js";
import { groundTopAt, platforms } from "../sim/level.js";
import { PAL } from "./palette.js";
import { scene, HIDE } from "./scene.js";
import { towerPose } from "./tower.js";
import { PHYSICAL_DEPTH_LAYER, physicalDepthOffset } from "./depth-layers.js";
export function resolveContactShadows(_0x14ca41, _0x378e30) {
  return _0x14ca41 !== "0" && !_0x378e30;
}
export const CONTACT_SHADOWS_ENABLED = resolveContactShadows(QUERY.get("shadow"), IS_TRANSFORM_SLICE);
const POOL_MAX = 48;
const Y_LIFT = physicalDepthOffset(PHYSICAL_DEPTH_LAYER.CONTACT_SHADOW);
const FOOTPRINT_SEGMENTS = 12;
let mesh = null;
let strengthAttribute = null;
const rowOf = new Map();
const free = [];
const ownerOfRow = new Array(48).fill(null);
const profileOfRow = new Array(48).fill("");
const coverage = Object.create(null);
let cursor = 0;
const _m = new _0x25ea41.Matrix4();
const _scale = new _0x25ea41.Vector3();
const _pose = {
  x: 0,
  y: 0,
  z: 0,
  yaw: 0,
  alt: 0
};
if (CONTACT_SHADOWS_ENABLED) {
  const e = new _0x25ea41.CircleGeometry(0.5, 12);
  const t = new Float32Array(e.attributes.position.count);
  t[0] = 1;
  e.setAttribute("shadowRadial", new _0x25ea41.Float32BufferAttribute(t, 1));
  strengthAttribute = new _0x25ea41.InstancedBufferAttribute(new Float32Array(48), 1);
  e.setAttribute("shadowStrength", strengthAttribute);
  e.rotateX(-Math.PI / 2);
  const o = new _0x25ea41.ShaderMaterial({
    uniforms: _0x25ea41.UniformsUtils.merge([_0x25ea41.UniformsLib.fog, {
      shadowColor: {
        value: new _0x25ea41.Color(PAL.contactShadow)
      }
    }]),
    vertexShader: "\n      attribute float shadowRadial;\n      attribute float shadowStrength;\n      varying float vShadow;\n      #include <common>\n      #include <fog_pars_vertex>\n      void main() {\n        vShadow = shadowRadial * shadowStrength;\n        vec3 transformed = position;\n        #include <project_vertex>\n        #include <fog_vertex>\n      }\n    ",
    fragmentShader: "\n      uniform vec3 shadowColor;\n      varying float vShadow;\n      #include <common>\n      #include <fog_pars_fragment>\n      void main() {\n        float fogGain = 1.0;\n        #ifdef USE_FOG\n          #ifdef FOG_EXP2\n            float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);\n          #else\n            float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);\n          #endif\n          fogGain = 1.0 - fogFactor;\n        #endif\n        float shade = clamp(vShadow * fogGain, 0.0, 1.0);\n        gl_FragColor = vec4(mix(vec3(1.0), shadowColor, shade), 1.0);\n        #include <colorspace_fragment>\n      }\n    ",
    blending: _0x25ea41.MultiplyBlending,
    transparent: true,
    depthWrite: false,
    fog: true,
    toneMapped: false
  });
  mesh = new _0x25ea41.InstancedMesh(e, o, 48);
  mesh.name = "contact-shadow-footprint-pool";
  mesh.userData.contactShadowPool = true;
  mesh.userData.fixedRows = 48;
  mesh.userData.runtimeTextures = 0;
  mesh.frustumCulled = false;
  mesh.renderOrder = 1;
  for (let r = 0; r < 48; r++) {
    mesh.setMatrixAt(r, HIDE);
    strengthAttribute.setX(r, 0);
    free.push(r);
  }
  scene.add(mesh);
}
function claim(_0x3e1aa7) {
  let _0x25423e = rowOf.get(_0x3e1aa7);
  if (_0x25423e === undefined) {
    if (free.length) {
      _0x25423e = free.pop();
    } else {
      _0x25423e = cursor;
      cursor = (cursor + 1) % 48;
      if (ownerOfRow[_0x25423e] !== null) {
        rowOf.delete(ownerOfRow[_0x25423e]);
      }
    }
    rowOf.set(_0x3e1aa7, _0x25423e);
    ownerOfRow[_0x25423e] = _0x3e1aa7;
  }
  return _0x25423e;
}
function hide(_0x575c65) {
  mesh.setMatrixAt(_0x575c65, HIDE);
  strengthAttribute.setX(_0x575c65, 0);
  mesh.instanceMatrix.needsUpdate = true;
  strengthAttribute.needsUpdate = true;
}
export function syncContactShadow(_0x31c1bd, _0xda6e36, _0x3d6f28, _0x25b2ad, _0x39efa2 = 1) {
  if (!CONTACT_SHADOWS_ENABLED) {
    return;
  }
  const _0x1c6284 = groundTopAt(_0xda6e36);
  const _0x22428f = contactShadowPlacement(_0xda6e36, _0x3d6f28, _0x1c6284, platforms, CONTACT_SHADOW);
  const _0x52e630 = claim(_0x31c1bd);
  const _0x35769b = typeof _0x25b2ad == "number";
  const _0x586f91 = _0x35769b ? _0x25b2ad : _0x25b2ad?.radius || 0;
  const _0x24af61 = _0x35769b ? 1 : _0x25b2ad?.depthRatio ?? 1;
  const _0xa0b3e4 = _0x35769b ? 0.72 : _0x25b2ad?.strength ?? 0.72;
  const _0x268389 = _0x35769b ? "generic" : _0x25b2ad?.key || "authored";
  coverage[_0x268389] = true;
  profileOfRow[_0x52e630] = _0x268389;
  const _0x22c610 = Math.max(0, Math.min(1, _0x39efa2));
  if (_0x22428f.opacity <= 0 || _0x586f91 <= 0 || _0x22c610 <= 0) {
    hide(_0x52e630);
    return;
  }
  const _0x1d6d44 = towerPose(_0xda6e36, _pose);
  const _0x3ea596 = _0x586f91 * 2 * _0x22428f.radiusMult * _0x22c610;
  _m.makeRotationY(_0x1d6d44.yaw);
  _m.scale(_scale.set(_0x3ea596, 1, _0x3ea596 * Math.max(0.18, Math.min(1, _0x24af61))));
  _m.setPosition(_0x1d6d44.x, _0x22428f.groundY + Y_LIFT + _0x1d6d44.alt, _0x1d6d44.z);
  mesh.setMatrixAt(_0x52e630, _m);
  strengthAttribute.setX(_0x52e630, _0x22428f.opacity / CONTACT_SHADOW.maxOpacity * _0xa0b3e4 * _0x22c610);
  mesh.instanceMatrix.needsUpdate = true;
  strengthAttribute.needsUpdate = true;
}
export function releaseContactShadow(_0x253115) {
  if (!CONTACT_SHADOWS_ENABLED) {
    return;
  }
  const _0x37618f = rowOf.get(_0x253115);
  if (_0x37618f !== undefined) {
    rowOf.delete(_0x253115);
    ownerOfRow[_0x37618f] = null;
    profileOfRow[_0x37618f] = "";
    hide(_0x37618f);
    free.push(_0x37618f);
  }
}
export function contactShadowStats() {
  const _0x893569 = Object.create(null);
  for (const _0x2bd673 of profileOfRow) {
    if (_0x2bd673) {
      _0x893569[_0x2bd673] = (_0x893569[_0x2bd673] || 0) + 1;
    }
  }
  return {
    enabled: CONTACT_SHADOWS_ENABLED,
    live: rowOf.size,
    max: 48,
    draws: CONTACT_SHADOWS_ENABLED ? 1 : 0,
    geometry: "radial-identity-footprint",
    segments: 12,
    textureCount: 0,
    runtimeCanvasCount: 0,
    liveProfiles: _0x893569,
    coveredProfiles: Object.keys(coverage).sort()
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_CONTACT_SHADOWS = contactShadowStats;
}