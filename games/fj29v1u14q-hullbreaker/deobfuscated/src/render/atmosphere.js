import * as _0x3bb291 from "three";
import { CONFIG as _0x2a426f } from "../config.js";
import { normalAscentAltAt as _0xc8b8b1 } from "../pure/ascent.js";
import { SEGS as _0x415059, headingAt as _0x334d4d, polyAt as _0x29b68e } from "../pure/path.js";
import { PAL as _0x35172a } from "./palette.js";
import { faceMidS as _0x198e30 } from "./backdrop-table.js";
import { cameraFaceBlendGain as _0x259668 } from "./camera.js";
import { MERIDIAN_DEPTH_BUDGET as _0x464c89, MERIDIAN_DEPTH_LAYERS as _0x2220ab, MERIDIAN_DEPTH_SOURCES as _0x4f444d, meridianCondensationPlan as _0x3f6df7, meridianDepthFacePlan as _0x2ad122 } from "./backdrop-depth-plan.js";
export const DEPTH_COMPOSITION_ON = true;
const f = _0x2a426f.path.faces + 1;
const m = new Map(_0x2220ab.map(_0x484942 => [_0x484942.id, _0x484942]));
const v = Array.from({
  length: f + 1
}, () => []);
let g = 0;
let M = 0;
let D = 0;
function b(_0x5b3387, _0x4a28ea) {
  return new _0x3bb291.Color(16777215).lerp(new _0x3bb291.Color(_0x5b3387), _0x4a28ea);
}
const w = Object.freeze({
  far: b(_0x35172a.backdropFar, 0.02),
  mid: b(_0x35172a.backdropMid, 0.1),
  near: b(_0x35172a.backdropNear, 0.18)
});
function y(_0x57d9a2) {
  if (_0x57d9a2 <= _0x2a426f.path.faces) {
    return _0x198e30(_0x57d9a2, _0x2a426f);
  } else {
    return _0x2a426f.path.introTiles + _0x2a426f.path.faceTiles * _0x2a426f.path.faces + _0x2a426f.path.outroTiles / 2;
  }
}
function x(_0x3ac446) {
  const _0x1d65e7 = _0x3ac446.userData.backdropFace;
  _0x3ac446.userData.facetGain = 0;
  _0x3ac446.visible = false;
  v[_0x1d65e7].push(_0x3ac446);
}
export function updateAtmosphereFacetVisibility() {
  let _0x4191c0 = 0;
  let _0x584f93 = 0;
  for (let _0x1d1794 = 1; _0x1d1794 <= f; _0x1d1794++) {
    const _0x339af2 = _0x259668(_0x1d1794);
    const _0x581b19 = _0x339af2 > 0;
    const _0x10d1db = v[_0x1d1794];
    if (_0x581b19 && _0x10d1db.length) {
      _0x4191c0++;
    }
    for (let _0xfbc502 = 0; _0xfbc502 < _0x10d1db.length; _0xfbc502++) {
      const _0x5502a8 = _0x10d1db[_0xfbc502];
      _0x5502a8.userData.facetGain = _0x339af2;
      _0x5502a8.visible = _0x581b19;
    }
    if (_0x581b19) {
      _0x584f93 += _0x10d1db.length;
    }
  }
  g = _0x4191c0;
  M = _0x584f93;
  return _0x584f93;
}
export function atmosphereFacetVisibilitySnapshot() {
  let _0x23347b = 0;
  for (let _0x2e6837 = 1; _0x2e6837 <= f; _0x2e6837++) {
    _0x23347b += v[_0x2e6837].length;
  }
  return {
    totalFacets: f,
    visibleFacets: g,
    totalMeshes: _0x23347b,
    visibleMeshes: M,
    settledDrawCalls: _0x464c89.settledDrawCalls,
    turnDrawCalls: _0x464c89.turnDrawCalls
  };
}
function F(_0x5a7ec8, _0x56c77b) {
  if (_0x5a7ec8 >= 0.9) {
    return 1;
  }
  if (_0x5a7ec8 <= 0.46) {
    return _0x56c77b;
  }
  const _0x359390 = (_0x5a7ec8 - 0.46) / 0.44;
  return _0x56c77b + (1 - _0x56c77b) * _0x359390 * _0x359390 * (3 - _0x359390 * 2);
}
const S = new _0x3bb291.Vector3();
function A(_0x41e408, _0xa1e6d2, _0x5a1f62) {
  _0x41e408.getWorldDirection(S);
  const _0xe24f1c = Math.hypot(S.x, S.z) || 1;
  const _0xb27b6c = -S.x / _0xe24f1c;
  const _0x2fb983 = -S.z / _0xe24f1c;
  return Math.max(0, Math.sin(_0xa1e6d2) * _0xb27b6c + Math.cos(_0xa1e6d2) * _0x2fb983) ** _0x5a1f62;
}
function C(_0x4e0439, _0x20c589, _0x3a6c91, _0x49fa9c, _0x487359) {
  _0x487359.set(_0x4e0439.x + Math.cos(_0x20c589) * _0x3a6c91 + Math.sin(_0x20c589) * _0x49fa9c, 0, _0x4e0439.z - Math.sin(_0x20c589) * _0x3a6c91 + Math.cos(_0x20c589) * _0x49fa9c);
  return _0x487359;
}
function P(_0x307385, _0x5371e6) {
  _0x307385.onBeforeRender = (_0x2dc4f1, _0x1d3b5d, _0x53eab2, _0x2007fd, _0x3a6f35) => {
    const _0x4e09bf = _0x5371e6.opacity * (_0x307385.userData.opacityScale || 1) * _0x307385.userData.facetGain * A(_0x53eab2, _0x307385.userData.facetYaw, _0x5371e6.facingExponent) * F(_0x53eab2.aspect, _0x5371e6.portraitGain);
    _0x3a6f35.opacity = _0x4e09bf;
    _0x307385.userData.effectiveOpacity = _0x4e09bf;
  };
}
function B(_0x2d4aa8, _0x5e87c7, _0x30602f, _0x5d7795, _0x5a0434, _0x5e3657) {
  const _0xa0046c = m.get(_0x30602f);
  const _0x4df8f7 = function (_0x163d96, _0x4930bc) {
    const _0x164f7f = [];
    const _0x422f9b = [];
    const _0x1d3577 = [];
    const _0x220c53 = _0x4930bc === "far" ? [_0x35172a.backdropFar, _0x35172a.limb.skyline, _0x35172a.limb.wall, _0x35172a.limb.shadow] : _0x4930bc === "mid" ? [_0x35172a.backdropMid, _0x35172a.limb.wall, _0x35172a.limb.shadow] : [_0x35172a.backdropNear, _0x35172a.limb.scute, _0x35172a.limb.shadow];
    function _0x4aca15(_0xf1d7b2, _0x36e2a9, _0x39c8ae, _0x511bf7, _0x37228b, _0x3c9c73, _0x3a2542) {
      const _0x116065 = _0x164f7f.length / 3;
      const _0x4f9e19 = Math.cos(_0x3c9c73);
      const _0x5803d2 = Math.sin(_0x3c9c73);
      const _0x464ef0 = [[-_0x39c8ae / 2, -_0x511bf7 / 2], [_0x39c8ae / 2, -_0x511bf7 / 2], [_0x39c8ae / 2, _0x511bf7 / 2], [-_0x39c8ae / 2, _0x511bf7 / 2]];
      const _0x5ab88f = new _0x3bb291.Color(_0x3a2542);
      _0x5ab88f.multiplyScalar(_0x4930bc === "far" ? 0.54 : _0x4930bc === "mid" ? 0.67 : 0.78);
      for (const [_0x101c75, _0x175c67] of _0x464ef0) {
        _0x164f7f.push(_0xf1d7b2 + _0x101c75 * _0x4f9e19 - _0x175c67 * _0x5803d2, _0x36e2a9 + _0x101c75 * _0x5803d2 + _0x175c67 * _0x4f9e19, _0x37228b);
        _0x422f9b.push(_0x5ab88f.r, _0x5ab88f.g, _0x5ab88f.b);
      }
      _0x1d3577.push(_0x116065, _0x116065 + 1, _0x116065 + 2, _0x116065, _0x116065 + 2, _0x116065 + 3);
    }
    function _0x379e0a(_0x368854, _0x48b738, _0x125eec, _0xb174da, _0x49ec11, _0x330927, _0x1b2db0, _0x32e0b8 = 0) {
      for (let _0xef9590 = 0; _0xef9590 < _0x330927; _0xef9590++) {
        const _0xc90ef8 = _0x32e0b8 + _0xef9590 / _0x330927 * Math.PI * 2;
        const _0x50b7e9 = _0x32e0b8 + (_0xef9590 + 1) / _0x330927 * Math.PI * 2;
        const _0x455815 = _0x368854 + Math.cos(_0xc90ef8) * _0x125eec;
        const _0x37d317 = _0x48b738 + Math.sin(_0xc90ef8) * _0xb174da;
        const _0x2e6822 = _0x368854 + Math.cos(_0x50b7e9) * _0x125eec;
        const _0x163c58 = _0x48b738 + Math.sin(_0x50b7e9) * _0xb174da;
        _0x4aca15((_0x455815 + _0x2e6822) / 2, (_0x37d317 + _0x163c58) / 2, Math.hypot(_0x2e6822 - _0x455815, _0x163c58 - _0x37d317) + _0x49ec11 * 0.55, _0x49ec11, _0x1b2db0, Math.atan2(_0x163c58 - _0x37d317, _0x2e6822 - _0x455815), _0x220c53[(_0xef9590 + _0x163d96) % _0x220c53.length]);
      }
    }
    const _0x437092 = _0x163d96 & 1 ? 1 : -1;
    if (_0x4930bc === "far") {
      for (let _0x248d30 = 0; _0x248d30 < 44; _0x248d30++) {
        const _0x25871e = _0x248d30 * 3.7 - 79;
        const _0xc293ae = 7 + Math.sin((_0x248d30 + _0x163d96) * 0.6) * 4;
        _0x4aca15(_0x25871e, _0xc293ae, 4, 2.45 + _0x248d30 % 3 * 0.28, -0.18 - _0x248d30 % 2 * 0.02, _0x437092 * (0.025 + (_0x248d30 % 3 - 1) * 0.018), _0x220c53[_0x248d30 % _0x220c53.length]);
        _0x4aca15(_0x25871e + _0x437092 * 0.7, _0xc293ae - 3.2, 3.7, 1.75, -0.16, _0x437092 * (_0x248d30 % 2 * 0.035 - 0.018), _0x220c53[(_0x248d30 + 2) % _0x220c53.length]);
      }
      _0x379e0a(_0x437092 * -34, 2, 24, 19, 3, 12, 0.05, _0x163d96 * 0.11);
      _0x379e0a(_0x437092 * 41, -2, 16, 13, 2.2, 10, 0.08, _0x163d96 * -0.08);
      _0x4aca15(0, 20, 146, 2.8, 0.12, _0x437092 * 0.045, _0x220c53[2]);
      _0x4aca15(_0x437092 * 4, -17, 118, 2.2, 0.1, _0x437092 * -0.035, _0x220c53[1]);
      _0x4aca15(_0x437092 * -58, 28, 2.2, 23, 0.1, _0x437092 * -0.13, _0x220c53[3]);
      _0x4aca15(_0x437092 * 16, 31, 2.4, 26, 0.11, _0x437092 * 0.1, _0x220c53[1]);
      _0x4aca15(_0x437092 * 61, -27, 2, 19, 0.1, _0x437092 * -0.11, _0x220c53[0]);
    } else if (_0x4930bc === "mid") {
      _0x379e0a(_0x437092 * -24, 4, 18, 13, 2, 10, 0.06, _0x163d96 * 0.14);
      _0x379e0a(_0x437092 * 28, -5, 12, 18, 1.8, 10, 0.08, _0x163d96 * -0.1);
      for (let _0x331ac0 = 0; _0x331ac0 < 24; _0x331ac0++) {
        _0x4aca15(_0x331ac0 * 4.35 - 50, _0x331ac0 % 3 * 8 - 14, 4.8, 1.05, 0.12 + _0x331ac0 * 0.003, _0x437092 * (_0x331ac0 % 2 ? -0.14 : 0.11), _0x220c53[(_0x331ac0 + 1) % _0x220c53.length]);
      }
      for (let _0x5bf870 = 0; _0x5bf870 < 9; _0x5bf870++) {
        _0x4aca15(_0x5bf870 * 10 - 40, 18 - _0x5bf870 % 2 * 5, 1.2, 8.5, 0.15, _0x437092 * (_0x5bf870 % 2 ? 0.08 : -0.06), _0x220c53[(_0x5bf870 + _0x163d96) % _0x220c53.length]);
      }
    } else {
      _0x4aca15(-54, -27, 12, 6.5, 0.04, _0x437092 * -0.18, _0x220c53[0]);
      _0x4aca15(55, -29, 13, 7, 0.02, _0x437092 * 0.16, _0x220c53[1]);
      _0x4aca15(-49, 31, 9, 4.5, 0.06, _0x437092 * 0.1, _0x220c53[2]);
      _0x4aca15(51, 33, 9.5, 4.5, 0.05, _0x437092 * -0.12, _0x220c53[0]);
    }
    const _0x4c4485 = new _0x3bb291.BufferGeometry();
    _0x4c4485.setAttribute("position", new _0x3bb291.Float32BufferAttribute(_0x164f7f, 3));
    _0x4c4485.setAttribute("color", new _0x3bb291.Float32BufferAttribute(_0x422f9b, 3));
    _0x4c4485.setIndex(_0x1d3577);
    _0x4c4485.computeBoundingSphere();
    return _0x4c4485;
  }(_0x5e87c7, _0x30602f);
  const _0x31675b = new _0x3bb291.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: _0xa0046c.opacity,
    depthWrite: _0x30602f === "near",
    depthTest: true,
    side: _0x3bb291.DoubleSide,
    fog: _0x30602f !== "far",
    toneMapped: true
  });
  _0x31675b.name = "Meridian " + _0x30602f + " pixel-primitive material";
  _0x31675b.userData = {
    runtimeTexture: false,
    pixelPrimitive: true,
    idleEmissive: false
  };
  const _0x10eb54 = new _0x3bb291.Mesh(_0x4df8f7, _0x31675b);
  _0x10eb54.name = "Meridian " + _0xa0046c.role + " pixel anatomy F" + _0x5e87c7;
  _0x10eb54.userData.environmentRole = "meridian-depth-composition";
  _0x10eb54.userData.depthRole = _0xa0046c.role;
  _0x10eb54.userData.backdropFace = _0x5e87c7;
  _0x10eb54.userData.facetYaw = _0x5a0434;
  _0x10eb54.userData.pixelPrimitive = true;
  _0x10eb54.userData.opacityScale = _0x30602f === "far" ? 0.5 : _0x30602f === "mid" ? 0.48 : 0.5;
  _0x10eb54.userData.futureGameplaySemantics = 0;
  _0x10eb54.quaternion.setFromEuler(new _0x3bb291.Euler(0, _0x5a0434, 0));
  const _0x4f19d6 = _0x2ad122(_0x5e87c7);
  C(_0x5d7795, _0x5a0434, _0x30602f === "far" ? _0x4f19d6.farOffset : _0x30602f === "mid" ? _0x4f19d6.midOffset : 0, _0xa0046c.depth, _0x10eb54.position);
  _0x10eb54.position.y = _0x5e3657 + 10;
  _0x10eb54.renderOrder = _0xa0046c.renderOrder;
  _0x10eb54.frustumCulled = true;
  P(_0x10eb54, _0xa0046c);
  x(_0x10eb54);
  _0x2d4aa8.add(_0x10eb54);
  D += _0x4df8f7.index.count / 3;
  return _0x10eb54;
}
function R(_0x191459, _0xa66881, _0x17ff08, _0xc4d917, _0x5a8366, _0x4e2b07, _0x544ef9, _0x3cf53b, _0x283ee8) {
  const _0x572ccc = m.get(_0x4e2b07);
  const _0xe88099 = _0x4e2b07 === "far" ? _0x17ff08.farOffset : _0x17ff08.midOffset;
  const _0x2ddb95 = _0x4e2b07 === "far" ? _0x17ff08.mirrorFar : _0x17ff08.mirrorMid;
  const _0x2e6ef2 = function (_0x2ba77f, _0x1d9320, _0x4a316f, _0x56e883) {
    const _0x4cbf95 = _0x1d9320 / (_0x2ba77f.canvas[0] / _0x2ba77f.canvas[1]);
    const _0x566f30 = new _0x3bb291.PlaneGeometry(_0x1d9320, _0x4cbf95, 20, 2);
    const _0x403d2d = _0x566f30.attributes.position;
    const _0x421f78 = _0x566f30.attributes.uv;
    const _0xdbf553 = _0x1d9320 / 2;
    const _0x4f6dfb = _0x4cbf95 / 2;
    for (let _0x251343 = 0; _0x251343 < _0x403d2d.count; _0x251343++) {
      const _0x51aeca = _0x403d2d.getX(_0x251343) / _0xdbf553;
      const _0x2968e7 = _0x403d2d.getY(_0x251343) / _0x4f6dfb;
      _0x403d2d.setZ(_0x251343, -_0x4a316f * (_0x51aeca * _0x51aeca + _0x2968e7 * _0x2968e7 * 0.18));
      if (_0x56e883) {
        _0x421f78.setX(_0x251343, 1 - _0x421f78.getX(_0x251343));
      }
    }
    _0x403d2d.needsUpdate = true;
    _0x421f78.needsUpdate = true;
    _0x566f30.computeVertexNormals();
    _0x566f30.computeBoundingSphere();
    return _0x566f30;
  }(_0xc4d917, _0x572ccc.width, _0x572ccc.curve, _0x2ddb95);
  const _0x18da5 = new _0x3bb291.MeshBasicMaterial({
    map: _0x5a8366,
    color: w[_0x4e2b07],
    transparent: true,
    opacity: _0x572ccc.opacity,
    alphaTest: _0xc4d917.alpha ? 0.012 : 0,
    depthWrite: false,
    depthTest: true,
    side: _0x3bb291.FrontSide,
    fog: _0x4e2b07 !== "far",
    toneMapped: true
  });
  _0x18da5.name = "Meridian " + _0x4e2b07 + " direct resident material";
  _0x18da5.userData = {
    directResidentMap: true,
    sourceId: _0xc4d917.id,
    idleEmissive: false
  };
  (function (_0xaa60bc, _0x236340 = 0.11, _0x21afac = 0.13) {
    _0xaa60bc.onBeforeCompile = _0x39ca69 => {
      _0x39ca69.vertexShader = _0x39ca69.vertexShader.replace("#include <common>", "#include <common>\nvarying vec2 vDepthUv;").replace("#include <uv_vertex>", "#include <uv_vertex>\nvDepthUv = uv;");
      _0x39ca69.fragmentShader = _0x39ca69.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vDepthUv;").replace("#include <alphatest_fragment>", "\n        float depthSide = smoothstep(0.0, " + _0x236340.toFixed(4) + ", vDepthUv.x) *\n          smoothstep(0.0, " + _0x236340.toFixed(4) + ", 1.0 - vDepthUv.x);\n        float depthVertical = smoothstep(0.0, " + _0x21afac.toFixed(4) + ", vDepthUv.y) *\n          smoothstep(0.0, " + _0x21afac.toFixed(4) + ", 1.0 - vDepthUv.y);\n        diffuseColor.a *= depthSide * depthVertical;\n        #include <alphatest_fragment>\n      ");
    };
    _0xaa60bc.customProgramCacheKey = () => "meridian-edge-" + _0x236340 + "-" + _0x21afac;
    _0xaa60bc.userData.shaderEdgeFeather = true;
  })(_0x18da5, _0x4e2b07 === "far" ? 0.04 : 0.09, _0x4e2b07 === "far" ? 0.06 : 0.1);
  const _0x39d222 = new _0x3bb291.Mesh(_0x2e6ef2, _0x18da5);
  _0x39d222.name = "Meridian " + _0x572ccc.role + " F" + _0xa66881;
  _0x39d222.userData.environmentRole = "meridian-depth-composition";
  _0x39d222.userData.depthRole = _0x572ccc.role;
  _0x39d222.userData.backdropFace = _0xa66881;
  _0x39d222.userData.facetYaw = _0x3cf53b;
  _0x39d222.userData.authoredDepth = _0x572ccc.depth;
  _0x39d222.userData.playerPlaneDepth = _0x464c89.playerPlaneDepth;
  _0x39d222.userData.sourceAsset = _0xc4d917.file;
  _0x39d222.userData.directResidentMap = true;
  _0x39d222.userData.futureGameplaySemantics = 0;
  _0x39d222.quaternion.setFromEuler(new _0x3bb291.Euler(0, _0x3cf53b, 0));
  C(_0x544ef9, _0x3cf53b, _0xe88099, _0x572ccc.depth, _0x39d222.position);
  _0x39d222.position.y = _0x283ee8 + (_0x4e2b07 === "far" ? 10.5 : 13);
  _0x39d222.renderOrder = _0x572ccc.renderOrder;
  _0x39d222.frustumCulled = true;
  P(_0x39d222, _0x572ccc);
  x(_0x39d222);
  _0x191459.add(_0x39d222);
  D += _0x2e6ef2.index.count / 3;
  return _0x39d222;
}
function T(_0x38afa3, _0x15e16e, _0x2fdace) {
  const _0x5a3715 = _0x38afa3.visibleRect;
  let _0x1663c5 = _0x5a3715.x / _0x15e16e[0];
  let _0x32148d = (_0x5a3715.x + _0x5a3715.w) / _0x15e16e[0];
  if (_0x2fdace) {
    [_0x1663c5, _0x32148d] = [_0x32148d, _0x1663c5];
  }
  return {
    u0: _0x1663c5,
    u1: _0x32148d,
    v0: 1 - (_0x5a3715.y + _0x5a3715.h) / _0x15e16e[1],
    v1: 1 - _0x5a3715.y / _0x15e16e[1]
  };
}
function O(_0x1514e5, _0x2dcdfa, _0x5b2906, _0x45ea3d, _0x2e61a2, _0x163195, _0x291dad, _0x12c820) {
  const _0x1dcb51 = m.get("near");
  const _0x108e52 = _0x4f444d.near;
  const _0x3d19ff = function (_0x5e24a0, _0x381e08, _0x4074d7) {
    const _0x2b0371 = [];
    const _0x2ccb30 = [];
    const _0x13cc7a = [];
    const _0x1942ee = [];
    for (const _0x339b03 of _0x5e24a0.fragments) {
      const _0xe34aa3 = _0x381e08.get(_0x339b03.id);
      if (!_0xe34aa3) {
        continue;
      }
      const _0x54a85c = _0x339b03.h * _0xe34aa3.nativeAspect;
      const _0x3c0780 = Math.cos(_0x339b03.angle);
      const _0x3218f8 = Math.sin(_0x339b03.angle);
      const _0x2d80c9 = [[-_0x54a85c / 2, -_0x339b03.h / 2], [_0x54a85c / 2, -_0x339b03.h / 2], [_0x54a85c / 2, _0x339b03.h / 2], [-_0x54a85c / 2, _0x339b03.h / 2]];
      const _0x5d9ea8 = _0x2b0371.length / 3;
      for (const [_0x11b9e8, _0x5f05f4] of _0x2d80c9) {
        _0x2b0371.push(_0x339b03.x + _0x11b9e8 * _0x3c0780 - _0x5f05f4 * _0x3218f8, _0x339b03.y + _0x11b9e8 * _0x3218f8 + _0x5f05f4 * _0x3c0780, m.get("near").depth + _0x339b03.z);
        _0x2ccb30.push(0, 0, 1);
      }
      const _0x44b61e = T(_0xe34aa3, _0x4074d7, _0x339b03.mirrorX);
      _0x13cc7a.push(_0x44b61e.u0, _0x44b61e.v0, _0x44b61e.u1, _0x44b61e.v0, _0x44b61e.u1, _0x44b61e.v1, _0x44b61e.u0, _0x44b61e.v1);
      _0x1942ee.push(_0x5d9ea8, _0x5d9ea8 + 1, _0x5d9ea8 + 2, _0x5d9ea8, _0x5d9ea8 + 2, _0x5d9ea8 + 3);
    }
    const _0x45e146 = new _0x3bb291.BufferGeometry();
    _0x45e146.setAttribute("position", new _0x3bb291.Float32BufferAttribute(_0x2b0371, 3));
    _0x45e146.setAttribute("normal", new _0x3bb291.Float32BufferAttribute(_0x2ccb30, 3));
    _0x45e146.setAttribute("uv", new _0x3bb291.Float32BufferAttribute(_0x13cc7a, 2));
    _0x45e146.setIndex(_0x1942ee);
    _0x45e146.computeBoundingSphere();
    return _0x45e146;
  }(_0x5b2906, _0x45ea3d, _0x108e52.canvas);
  const _0x49d3b9 = new _0x3bb291.MeshBasicMaterial({
    map: _0x2e61a2,
    color: w.near,
    transparent: true,
    opacity: _0x1dcb51.opacity,
    alphaTest: 0.035,
    depthWrite: true,
    depthTest: true,
    side: _0x3bb291.DoubleSide,
    forceSinglePass: true,
    fog: true,
    toneMapped: true
  });
  _0x49d3b9.name = "Meridian sparse near armour direct atlas material";
  _0x49d3b9.alphaToCoverage = true;
  _0x49d3b9.userData = {
    directResidentMap: true,
    sourceId: _0x108e52.id,
    nativeBounds: true,
    storageCellsVisible: false,
    idleEmissive: false
  };
  const _0x40c938 = new _0x3bb291.Mesh(_0x3d19ff, _0x49d3b9);
  _0x40c938.name = "Meridian " + _0x1dcb51.role + " F" + _0x2dcdfa;
  _0x40c938.userData.environmentRole = "meridian-depth-composition";
  _0x40c938.userData.depthRole = _0x1dcb51.role;
  _0x40c938.userData.backdropFace = _0x2dcdfa;
  _0x40c938.userData.facetYaw = _0x291dad;
  _0x40c938.userData.authoredDepth = _0x1dcb51.depth;
  _0x40c938.userData.playerPlaneDepth = _0x464c89.playerPlaneDepth;
  _0x40c938.userData.sourceAsset = _0x108e52.file;
  _0x40c938.userData.directResidentMap = true;
  _0x40c938.userData.componentIds = [...new Set(_0x5b2906.fragments.map(_0x2c26b0 => _0x2c26b0.id))];
  _0x40c938.userData.futureGameplaySemantics = 0;
  _0x40c938.quaternion.setFromEuler(new _0x3bb291.Euler(0, _0x291dad, 0));
  _0x40c938.position.set(_0x163195.x, _0x12c820 + 10, _0x163195.z);
  _0x40c938.renderOrder = _0x1dcb51.renderOrder;
  _0x40c938.frustumCulled = true;
  P(_0x40c938, _0x1dcb51);
  x(_0x40c938);
  _0x1514e5.add(_0x40c938);
  D += _0x3d19ff.index.count / 3;
  return _0x40c938;
}
function k(_0x1c31d6, _0xbc5524, _0x47b241, _0x2d4048, _0xee7e5b, _0x2361f0) {
  const _0x39f9be = m.get("condensation");
  const _0x12901f = function (_0x4846fd) {
    const _0x24d912 = [];
    const _0x1752ba = [];
    const _0x2c4f46 = [];
    for (const _0xb10919 of _0x4846fd) {
      const _0x1b084a = _0x24d912.length / 3;
      for (let _0x5b4da5 = 0; _0x5b4da5 < 5; _0x5b4da5++) {
        const _0x5d6be2 = _0x5b4da5 / 4;
        const _0x50c10c = _0xb10919.x + (_0x5d6be2 - 0.5) * _0xb10919.width;
        const _0x2f8f6a = _0xb10919.y + (_0x5d6be2 - 0.5) * _0xb10919.width * _0xb10919.rake + Math.sin(_0x5d6be2 * Math.PI) * _0xb10919.height * 0.38;
        const _0x9a3b30 = _0xb10919.z + Math.sin(_0x5d6be2 * Math.PI * 2) * _0xb10919.twist;
        const _0x2eb595 = Math.sin(_0x5d6be2 * Math.PI);
        _0x24d912.push(_0x50c10c, _0x2f8f6a - _0xb10919.height * 0.5 * _0x2eb595, _0x9a3b30);
        const _0x36f631 = _0x2eb595 * (0.56 + Math.sin(_0x5d6be2 * Math.PI) * 0.44);
        _0x24d912.push(_0x50c10c, _0x2f8f6a, _0x9a3b30 + _0xb10919.twist * 0.07);
        _0x24d912.push(_0x50c10c, _0x2f8f6a + _0xb10919.height * 0.5 * _0x2eb595, _0x9a3b30 + _0xb10919.twist * 0.14);
        _0x1752ba.push(0, _0x36f631, 0);
      }
      for (let _0x248e9f = 0; _0x248e9f < 4; _0x248e9f++) {
        for (let _0x5c071a = 0; _0x5c071a < 2; _0x5c071a++) {
          const _0x28196a = _0x1b084a + _0x248e9f * 3 + _0x5c071a;
          const _0x4eefc8 = _0x1b084a + (_0x248e9f + 1) * 3 + _0x5c071a;
          _0x2c4f46.push(_0x28196a, _0x28196a + 1, _0x4eefc8 + 1, _0x28196a, _0x4eefc8 + 1, _0x4eefc8);
        }
      }
    }
    const _0x5c30ad = new _0x3bb291.BufferGeometry();
    _0x5c30ad.setAttribute("position", new _0x3bb291.Float32BufferAttribute(_0x24d912, 3));
    _0x5c30ad.setAttribute("mistAlpha", new _0x3bb291.Float32BufferAttribute(_0x1752ba, 1));
    _0x5c30ad.setIndex(_0x2c4f46);
    _0x5c30ad.computeBoundingSphere();
    return _0x5c30ad;
  }(_0x47b241);
  const _0x262865 = new _0x3bb291.ShaderMaterial({
    uniforms: {
      uColor: {
        value: new _0x3bb291.Color(_0x35172a.vapor)
      },
      uOpacity: {
        value: _0x39f9be.opacity
      }
    },
    vertexShader: "\n  attribute float mistAlpha;\n  varying float vMistAlpha;\n  void main() {\n    vMistAlpha = mistAlpha;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n",
    fragmentShader: "\n  uniform vec3 uColor;\n  uniform float uOpacity;\n  varying float vMistAlpha;\n  void main() {\n    float alpha = uOpacity * vMistAlpha;\n    if (alpha < 0.001) discard;\n    gl_FragColor = vec4(uColor, alpha);\n  }\n",
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: _0x3bb291.DoubleSide,
    forceSinglePass: true,
    toneMapped: false
  });
  _0x262865.name = "Meridian world-space condensation ribbons";
  _0x262865.userData = {
    idleEmissive: false,
    runtimeTexture: false
  };
  const _0x474877 = new _0x3bb291.Mesh(_0x12901f, _0x262865);
  _0x474877.name = "Meridian " + _0x39f9be.role + " F" + _0xbc5524;
  _0x474877.userData.environmentRole = "meridian-depth-composition";
  _0x474877.userData.depthRole = _0x39f9be.role;
  _0x474877.userData.backdropFace = _0xbc5524;
  _0x474877.userData.facetYaw = _0xee7e5b;
  _0x474877.userData.depthRange = [..._0x39f9be.depthRange];
  _0x474877.userData.playerPlaneDepth = _0x464c89.playerPlaneDepth;
  _0x474877.userData.fogTransform = "facet-world-volume";
  _0x474877.userData.futureGameplaySemantics = 0;
  _0x474877.quaternion.setFromEuler(new _0x3bb291.Euler(0, _0xee7e5b, 0));
  _0x474877.position.set(_0x2d4048.x, _0x2361f0 + 10, _0x2d4048.z);
  _0x474877.renderOrder = _0x39f9be.renderOrder;
  _0x474877.frustumCulled = true;
  _0x474877.onBeforeRender = (_0x20c067, _0x3ff0d5, _0x2ac0c1) => {
    const _0x17b81c = _0x39f9be.opacity * _0x474877.userData.facetGain * A(_0x2ac0c1, _0x474877.userData.facetYaw, _0x39f9be.facingExponent) * F(_0x2ac0c1.aspect, _0x39f9be.portraitGain);
    _0x262865.uniforms.uOpacity.value = _0x17b81c;
    _0x474877.userData.effectiveOpacity = _0x17b81c;
  };
  x(_0x474877);
  _0x1c31d6.add(_0x474877);
  D += _0x12901f.index.count / 3;
  return _0x474877;
}
export function buildMeridianAtmosphere(_0x29e93e, {
  farTexture: _0x1f8936 = null,
  midTexture: _0x476019 = null,
  fragmentTexture: _0x44e775 = null,
  fragmentComponents: _0x37124e = [],
  pixelPrimitives: _0x269930 = false
} = {}) {
  const _0x14c3f5 = new Map(_0x37124e.map(_0x52770a => [_0x52770a.id, _0x52770a]));
  const _0x2f798d = [];
  D = 0;
  for (let _0x77bd97 = 1; _0x77bd97 <= f; _0x77bd97++) {
    const _0x2212b1 = _0x2ad122(_0x77bd97);
    const _0x59a425 = y(_0x77bd97);
    const _0x23a2b0 = _0x334d4d(_0x415059, _0x59a425);
    const _0x234766 = _0x29b68e(_0x415059, _0x59a425);
    const _0x16542e = _0xc8b8b1(_0x59a425, _0x2a426f.levelLength);
    if (_0x1f8936 && !_0x269930) {
      _0x2f798d.push(R(_0x29e93e, _0x77bd97, _0x2212b1, _0x4f444d.far, _0x1f8936, "far", _0x234766, _0x23a2b0, _0x16542e));
    } else {
      _0x2f798d.push(B(_0x29e93e, _0x77bd97, "far", _0x234766, _0x23a2b0, _0x16542e));
    }
    if (_0x476019 && !_0x269930) {
      _0x2f798d.push(R(_0x29e93e, _0x77bd97, _0x2212b1, _0x4f444d.mid, _0x476019, "mid", _0x234766, _0x23a2b0, _0x16542e));
    } else {
      _0x2f798d.push(B(_0x29e93e, _0x77bd97, "mid", _0x234766, _0x23a2b0, _0x16542e));
    }
    _0x2f798d.push(k(_0x29e93e, _0x77bd97, _0x3f6df7(_0x77bd97), _0x234766, _0x23a2b0, _0x16542e));
    if (_0x44e775 && _0x14c3f5.size && !_0x269930) {
      _0x2f798d.push(O(_0x29e93e, _0x77bd97, _0x2212b1, _0x14c3f5, _0x44e775, _0x234766, _0x23a2b0, _0x16542e));
    } else {
      _0x2f798d.push(B(_0x29e93e, _0x77bd97, "near", _0x234766, _0x23a2b0, _0x16542e));
    }
  }
  updateAtmosphereFacetVisibility();
  const _0x52b08d = Boolean(_0x1f8936);
  const _0x5c322a = Boolean(_0x476019);
  const _0x16fbbc = Boolean(_0x44e775 && _0x14c3f5.size);
  return {
    built: _0x2f798d.length,
    triangles: D,
    composition: "facet-anatomy-volume",
    presentation: _0x269930 ? "pixel-primitives" : "resident-art-with-pixel-fallback",
    directResidentTextures: [_0x52b08d, _0x5c322a, _0x16fbbc].filter(Boolean).length,
    pixelPrimitiveBands: _0x269930 ? 3 : [_0x52b08d, _0x5c322a, _0x16fbbc].filter(_0x40b233 => !_0x40b233).length,
    runtimeCanvases: 0,
    runtimeCrops: 0,
    textureResidency: {
      requested: 0,
      warmed: 0,
      ms: 0,
      derivedTextures: 0
    },
    fixedPool: {
      ..._0x464c89
    },
    bands: _0x2220ab.map(_0x4f9719 => ({
      id: _0x4f9719.id,
      role: _0x4f9719.role,
      depth: _0x4f9719.depth ?? null,
      depthRange: _0x4f9719.depthRange ? [..._0x4f9719.depthRange] : null,
      opacity: _0x4f9719.opacity,
      facets: f,
      source: _0x4f9719.source || null
    })),
    fog: {
      role: "world-condensation",
      transform: "facet-world-volume",
      depthRange: [...m.get("condensation").depthRange],
      ribbonsPerFacet: m.get("condensation").ribbonsPerFacet,
      runtimeTexture: false
    },
    anatomy: {
      composited: _0x52b08d,
      directMapped: _0x52b08d,
      source: _0x52b08d ? [..._0x4f444d.far.canvas] : null,
      gpuTextures: _0x52b08d ? 1 : 0,
      stagePasses: 0,
      facets: f,
      runtimeCrop: false
    },
    midStructure: {
      directMapped: _0x5c322a,
      source: _0x5c322a ? [..._0x4f444d.mid.canvas] : null,
      gpuTextures: _0x5c322a ? 1 : 0
    },
    nearFragments: {
      directMapped: _0x16fbbc,
      source: _0x16fbbc ? [..._0x4f444d.near.canvas] : null,
      gpuTextures: _0x16fbbc ? 1 : 0,
      componentIds: [..._0x14c3f5.keys()]
    }
  };
}