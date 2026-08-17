import * as _0x47c36d from "three";
import { CONFIG as _0x538634 } from "../config.js";
import { normalAscentAltAt as _0x3c94f1, normalAscentPitchAt as _0x294d5c } from "../pure/ascent.js";
import { defensePhaseForRouteFace as _0x51f278 } from "../pure/meridian-response.js";
import { VERTICAL_ASSAULT as _0x17d4c3 } from "../pure/vertical-assault.js";
import { SEGS as _0x599411, CORNER_S as _0x4a5a94, polyAt as _0x3fe016, headingAt as _0x33ec0f, faceIndexAt as _0x31b602 } from "../pure/path.js";
import { deckShadePlan as _0x3b3528 } from "../pure/shade.js";
import { ACTIVE_FIXTURE as _0x43bc04, IS_G1 as _0x70d8d, IS_TRANSFORM_SLICE as _0x16f1b0, QUERY as _0x4f75f5 } from "../mode.js";
import { installView as _0xce1f5b } from "../sim/bridge.js";
import { LEVEL_LEN as _0x4bb1e3, groundH as _0x3cd70c, ladders as _0x4c9202, platforms as _0x3e82a8, solidRects as _0x1fbaf5, slamSets as _0x1b8395, farSets as _0x1e9c33, unbuildFutureFaces as _0x133738 } from "../sim/level.js";
import { scene as _0x191dc9, HIDE as _0x5c2512 } from "./scene.js";
import { PAL as _0xcf2590, SHADE_GAIN as _0x4de02c } from "./palette.js";
import { FOREGROUND_PACK as _0x49bf73, FOREGROUND_PACK_SLOT as _0xdb0e1e, foregroundPackCell as _0xfea392, foregroundPackTransform as _0x5023bb, noteForegroundPackCell as _0x324073 } from "./foreground-pack.js";
import { foregroundComponentById as _0x43e48d, foregroundComponentCatalogStats as _0x187635, foregroundCompositionForModule as _0x32fe54 } from "./foreground-components.js";
import { FOREGROUND_COMPONENT_ART_SLOT as _0x36a255 } from "./foreground-component-art.js";
import { FOREGROUND_COMPONENT_ATLAS as _0x5e5f4c } from "./foreground-component-spec.generated.js";
import { WORLD_DETAIL_ART as _0x34a58b, WORLD_DETAIL_ART_SLOT as _0x1e91d7, WORLD_DETAIL_ON as _0x538475 } from "./world-detail-art.js";
import { applyDeckPanelTexture as _0x3f854d, applySurface as _0x1781e6 } from "./materials.js";
import { deckPanelFaceGain as _0x5a23ce, deckPanelUv as _0x40ef7a } from "./hulltiles.js";
import { PHYSICAL_DEPTH_LAYER as _0x385287, componentDepthOffset as _0x2c7785, physicalDepthOffset as _0x1bad59 } from "./depth-layers.js";
import { currentWorldFacet as _0x44c2db, routeRenderable as _0x3be1ad, routeVisibilityStamp as _0x195d00, routeWorldFacet as _0x1430f4 } from "./route-visibility.js";
let Q;
const ee = [];
const te = new Array(_0x4bb1e3).fill(null);
const ne = [];
const oe = [];
const se = [];
const ae = [];
const re = _0x1c5f45 => _0x43bc04 ? 0 : _0x3c94f1(_0x1c5f45, _0x538634.levelLength);
const ie = _0x4275ea => _0x43bc04 ? 0 : _0x294d5c(_0x4275ea, _0x538634.levelLength);
export const WORLD_DRESSING_ENABLED = _0x70d8d && _0x4f75f5.get("world") !== "0";
const le = {
  enabled: WORLD_DRESSING_ENABLED,
  boxes: 0,
  pipes: 0,
  gussets: 0,
  lights: 0,
  drawPools: 0,
  hidden: 0,
  detailState: _0x1e91d7.state,
  detailFixtures: 0,
  detailVisible: 0,
  detailHidden: 0,
  detailDrawPools: 0,
  detailVertices: 0,
  detailTriangles: 0,
  detailFallbacks: 0,
  detailRoles: Object.create(null),
  packState: _0xdb0e1e.state,
  packChoices: _0xdb0e1e.choices,
  packRequests: _0xdb0e1e.requests,
  packGpuTextures: _0xdb0e1e.gpuTextures,
  packEmissive: _0xdb0e1e.emissive,
  packPlacements: 0,
  packDrawPools: 0,
  packCellsUsed: 0,
  componentCatalog: _0x187635(),
  componentPlacements: 0,
  componentArtState: _0x36a255.state,
  componentArtRequests: _0x36a255.requests,
  componentArtGpuTextures: _0x36a255.gpuTextures,
  componentArtEmissive: _0x36a255.emissive,
  componentDrawPools: 0,
  componentUnique: 0,
  componentCategories: Object.create(null),
  authoredSolidSkins: 0,
  authoredSolidSkinPanels: 0,
  authoredSolidSkinComponents: 0,
  authoredSolidSkinPrimitives: 0,
  supportFamilies: Object.create(null),
  responseSockets: 0,
  responseSocketKinds: Object.create(null),
  responseStates: Object.create(null)
};
export function worldDressingStats() {
  return {
    ...le,
    detailRoles: {
      ...le.detailRoles
    },
    componentCatalog: {
      ...le.componentCatalog,
      categories: {
        ...le.componentCatalog.categories
      }
    },
    componentCategories: {
      ...le.componentCategories
    },
    supportFamilies: {
      ...le.supportFamilies
    },
    responseSocketKinds: {
      ...le.responseSocketKinds
    },
    responseStates: {
      ...le.responseStates
    },
    detailPreload: {
      state: _0x1e91d7.state,
      requests: _0x1e91d7.requests,
      preloadMs: _0x1e91d7.preloadMs,
      gateMs: _0x1e91d7.gateMs,
      residency: _0x1e91d7.residency,
      settledBeforeConsumer: _0x1e91d7.settledBeforeConsumer
    }
  };
}
function ce() {
  if (Q && !_0x70d8d) {
    for (const _0x70863f of [_0x1b8395, _0x1e9c33]) {
      for (const _0x42d957 of _0x70863f) {
        for (const _0x46b29f of _0x42d957) {
          const _0x6e08f1 = te[_0x46b29f];
          if (_0x6e08f1) {
            _0x6e08f1.settled = false;
            for (let _0xf1c1eb = 0; _0xf1c1eb < _0x6e08f1.count; _0xf1c1eb++) {
              Q.setMatrixAt(_0x6e08f1.start + _0xf1c1eb, _0x5c2512);
            }
          }
        }
      }
    }
    Q.instanceMatrix.needsUpdate = true;
    for (const _0x535a6d of oe) {
      _0x535a6d.mesh.visible = !_0x4a5a94.some(_0x4a7592 => _0x535a6d.x1 >= _0x4a7592 && _0x535a6d.x0 <= _0x4a7592 + _0x538634.path.faceTiles - 1);
    }
  }
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_WORLD = worldDressingStats;
}
const ue = new _0x47c36d.Matrix4();
function he(_0x451e48, _0x201e69, _0x51f2f9) {
  if (_0x70d8d) {
    return;
  }
  const _0x45530e = Q && te[_0x451e48];
  if (_0x45530e) {
    for (let _0x2ccaec = 0; _0x2ccaec < _0x45530e.count; _0x2ccaec++) {
      const _0x5eb518 = _0x45530e.start + _0x2ccaec;
      ue.copy(ee[_0x5eb518]);
      ue.elements[13] += _0x201e69;
      Q.setMatrixAt(_0x5eb518, ue);
    }
    if (_0x51f2f9) {
      _0x45530e.settled = true;
    }
    Q.instanceMatrix.needsUpdate = true;
  }
}
function me(_0x773bcb) {
  if (!Q || _0x70d8d) {
    return;
  }
  for (const _0x22389b of _0x1e9c33[_0x773bcb.k - 1]) {
    const _0x18f06b = te[_0x22389b];
    if (_0x18f06b && !_0x18f06b.settled) {
      _0x18f06b.settled = true;
      for (let _0x13a63a = 0; _0x13a63a < _0x18f06b.count; _0x13a63a++) {
        Q.setMatrixAt(_0x18f06b.start + _0x13a63a, ee[_0x18f06b.start + _0x13a63a]);
      }
    }
  }
  Q.instanceMatrix.needsUpdate = true;
  const _0xdcaa31 = _0x773bcb.s + _0x538634.path.faceTiles - 1;
  for (const _0x20b504 of oe) {
    if (_0x20b504.x1 >= _0x773bcb.s && _0x20b504.x0 <= _0xdcaa31) {
      _0x20b504.mesh.visible = true;
    }
  }
}
let fe = false;
export function initLevelView() {
  return !fe && (_0xce1f5b({
    level: {
      unbuiltHidden: ce,
      zipperColumn: he,
      faceRevealed: me
    }
  }), fe = true, true);
}
const de = [];
const pe = [];
const we = [];
const xe = {
  x: 0,
  z: 0
};
const ge = new _0x47c36d.Matrix4();
const be = new _0x47c36d.Matrix4();
const Me = new _0x47c36d.Matrix4();
const ye = new _0x47c36d.Vector3();
const ve = new _0x47c36d.Color();
const Se = [];
const ke = [];
const Ce = [];
const ze = [];
const Re = [];
const Ae = [];
const De = [];
const Ne = [];
const Pe = [];
let Te = "";
const Oe = {
  activeFace: 0,
  stage: "dormant",
  playerS: -9999,
  amplitude: 0,
  pools: 0,
  drawCallsAdded: 0,
  texturesAdded: 0
};
export function foregroundResponseSockets() {
  return Ae.slice();
}
export function foregroundVentEmitters() {
  return De.slice();
}
export function syncForegroundNerveWake(_0x216577) {
  if (!_0x216577) {
    return resetForegroundNerveWake();
  }
  const _0x338a94 = _0x216577.stage || "dormant";
  const _0x104ba1 = (_0x338a94 === "fire" ? 0.06 : _0x338a94 === "tell" ? 0.031 : _0x338a94 === "recovery" ? 0.024 : 0.012) * (1 + Math.max(0, Number(_0x216577.phase) || 0) * 0.055);
  const _0x55a7aa = Math.max(0, Number(_0x216577.face) || 0);
  const _0x283f76 = Number.isFinite(_0x216577.playerX) ? _0x216577.playerX : -9999;
  const _0x43e7ee = Math.max(0, Number(_0x216577.nowMs) || 0) / 1000;
  for (const _0x1b9f4e of Pe) {
    const _0x30515d = _0x1b9f4e.uniforms;
    _0x30515d.playerS.value = _0x283f76;
    _0x30515d.time.value = _0x43e7ee;
    _0x30515d.amplitude.value = _0x1b9f4e.face === _0x55a7aa ? _0x104ba1 : 0;
  }
  Oe.activeFace = _0x55a7aa;
  Oe.stage = _0x338a94;
  Oe.playerS = _0x283f76;
  Oe.amplitude = _0x104ba1;
}
export function resetForegroundNerveWake() {
  for (const _0x2c1497 of Pe) {
    _0x2c1497.uniforms.amplitude.value = 0;
  }
  Oe.activeFace = 0;
  Oe.stage = "dormant";
  Oe.playerS = -9999;
  Oe.amplitude = 0;
}
export function foregroundNerveWakeSnapshot() {
  return {
    ...Oe,
    pools: Pe.length
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_FOREGROUND_RESPONSE_SOCKETS = foregroundResponseSockets;
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_FOREGROUND_VENT_EMITTERS = foregroundVentEmitters;
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_FOREGROUND_NERVE_WAKE = foregroundNerveWakeSnapshot;
}
const je = _0x47c36d.InstancedMesh;
function Ee(_0x349e33, _0x45f650, _0x5c9ce7, _0x47899b, _0x82b907, _0x49a2e3, _0x481dd0, _0x393c91 = 0, _0x11b885 = _0x349e33, _0x3cd666 = null, _0x33a3b1 = "auto", _0x32a4fd = null, _0x39d419 = null, _0x357fe6 = null) {
  const _0x137cdc = {
    s: _0x349e33,
    y: _0x45f650,
    depth: _0x5c9ce7,
    sx: _0x47899b,
    sy: _0x82b907,
    sz: _0x49a2e3,
    color: _0x481dd0,
    tilt: _0x393c91,
    visibilityS: _0x11b885,
    detailRole: _0x3cd666,
    surface: _0x33a3b1,
    packCell: _0x32a4fd,
    componentId: _0x39d419,
    packTransform: _0x357fe6
  };
  de.push(_0x137cdc);
  return _0x137cdc;
}
function Ie(_0xc3f047, _0xc699f, _0x255168, _0x3a025f, _0xebc68b, _0x55ceca, _0x387fbc, _0x54ec6e = 0, _0x5f19c4 = _0xc3f047, _0x4a2850 = null) {
  return Ee(_0xc3f047, _0xc699f, _0x255168, _0x3a025f, _0xebc68b, _0x55ceca, _0x387fbc, _0x54ec6e, _0x5f19c4, null, "machine", null, _0x4a2850);
}
function Be(_0x528f54, _0x2d778d, _0x9aaba8, _0x4e6c11, _0x268dff, _0x4e09bd, _0x264223, _0x437c53, _0x28185d = _0x528f54, _0x152759 = null) {
  const _0x574b8f = {
    s: _0x528f54,
    y: _0x2d778d,
    depth: _0x9aaba8,
    sx: _0x4e6c11,
    sy: _0x268dff,
    sz: _0x4e09bd,
    color: _0x264223,
    tilt: 0,
    variant: _0x437c53 % 3,
    visibilityS: _0x28185d,
    componentId: _0x152759
  };
  we.push(_0x574b8f);
  return _0x574b8f;
}
function Fe(_0x2a7dc6, _0x310b86, _0xbbc4bf, _0x14e116, _0x52618b, _0x459609, _0x372268, _0x193961, _0xac7eaf = 0, _0x4a584d = _0x2a7dc6) {
  const _0x347280 = _0xfea392(_0x372268, _0x193961);
  _0x324073(_0x347280);
  const _0x1f255b = _0x347280.sheet !== "A";
  const _0x1e5b96 = Math.max(0.25, _0x347280.nativeAspect || 1);
  const _0x36ffbd = _0x1f255b ? Math.min(_0x14e116, _0x52618b * _0x1e5b96) : _0x14e116;
  const _0x2cf681 = _0x1f255b ? Math.min(_0x52618b, _0x14e116 / _0x1e5b96) : _0x52618b;
  const _0x98aee9 = _0xbbc4bf + _0x459609 / 2 - Math.max(0.14, _0x459609 + 0.06) / 2 - 0.018;
  if (_0x1f255b) {
    Ie(_0x2a7dc6, _0x310b86, _0x98aee9, _0x36ffbd + 0.2, _0x2cf681 + 0.2, Math.max(0.14, _0x459609 + 0.06), _0xcf2590.limb.shadow, _0xac7eaf, _0x4a584d, "aperture-housing");
  }
  return {
    packCell: _0x347280,
    row: Ee(_0x2a7dc6, _0x310b86, _0xbbc4bf, _0x36ffbd, _0x2cf681, _0x459609, 16777215, _0xac7eaf, _0x4a584d, null, "pack", _0x347280, _0x347280.id, _0x5023bb(_0x347280, _0x193961))
  };
}
function $e(_0x24936e, _0x289cb0, _0x2f87db, _0x43b83e, _0x56badd, _0x5ad0c0, _0x4bda2b = -Math.PI / 2, _0x4dde7f = _0x24936e, _0x3ab6f9 = null, _0x3b90ae = null) {
  const _0x3dd71c = {
    s: _0x24936e,
    y: _0x289cb0,
    depth: _0x2f87db,
    sx: _0x56badd,
    sy: _0x43b83e,
    sz: _0x56badd,
    color: _0x5ad0c0,
    tilt: _0x4bda2b,
    visibilityS: _0x4dde7f,
    detailRole: _0x3ab6f9,
    componentId: _0x3b90ae
  };
  pe.push(_0x3dd71c);
  return _0x3dd71c;
}
function _e(_0x476aab) {
  let _0x29e949 = (Math.trunc(_0x476aab) ^ -2048144789) >>> 0;
  _0x29e949 = Math.imul(_0x29e949 ^ _0x29e949 >>> 16, 2146121005);
  _0x29e949 = Math.imul(_0x29e949 ^ _0x29e949 >>> 15, 2221713035);
  return (_0x29e949 ^ _0x29e949 >>> 16) >>> 0;
}
function Ge(_0x23981d, _0x1f696c, _0x95e978) {
  const _0x194972 = (_e(_0x1f696c ^ _0x95e978) >>> 5) % 7;
  return _0x2c7785(_0x23981d.category, _0x23981d.depthBand, _0x194972);
}
function Ve(_0x1fab81, _0x446c6d, _0x3822b2, _0x440c21, _0x8025ff, _0x25fb47, _0x58c6c4, _0x658bc8 = 0, _0x23c1bd = _0x1fab81) {
  const _0x478432 = _0x43e48d(_0x25fb47);
  if (!_0x478432 || _0x478432.renderKind !== "cutout") {
    return null;
  }
  const _0x21dacb = _e(_0x58c6c4 + _0x25fb47.length * 97);
  let _0xef0388 = _0x478432.rotations || [0];
  if (_0x478432.stretchAxes?.length) {
    const _0x2e0ae3 = _0x8025ff > _0x440c21;
    const _0x42ecd6 = _0xef0388.filter(_0x7d17f8 => !!(_0x7d17f8 & 1) === _0x2e0ae3);
    if (_0x42ecd6.length) {
      _0xef0388 = _0x42ecd6;
    }
  }
  const _0x22942f = _0xef0388[(_0x21dacb >>> 1) % _0xef0388.length];
  const _0x1f8107 = !!(_0x22942f & 1);
  const _0x55f18a = _0x1f8107 ? 1 / _0x478432.nativeAspect : _0x478432.nativeAspect;
  const _0x339180 = Math.min(_0x8025ff, _0x440c21 / _0x55f18a);
  let _0x178f51 = _0x339180 * _0x55f18a;
  let _0xf6ab03 = _0x339180;
  const _0x5ce741 = _0x478432.stretchAxes?.includes(_0x1f8107 ? "y" : "x");
  const _0x68d182 = _0x478432.stretchAxes?.includes(_0x1f8107 ? "x" : "y");
  if (_0x5ce741) {
    _0x178f51 = _0x440c21;
  }
  if (_0x68d182) {
    _0xf6ab03 = _0x8025ff;
  }
  const _0x273efe = _0x22942f * Math.PI / 2 + _0x658bc8;
  const _0x10f43f = _0x478432.pivot || [0.5, 0.5];
  const _0x4947b3 = (_0x10f43f[0] - 0.5) * _0x178f51;
  const _0x1a4994 = (0.5 - _0x10f43f[1]) * _0xf6ab03;
  const _0x4161ee = Math.cos(_0x273efe);
  const _0x4a4d2c = Math.sin(_0x273efe);
  const _0x5003f5 = {
    s: _0x1fab81 - (_0x4947b3 * _0x4161ee - _0x1a4994 * _0x4a4d2c),
    y: _0x446c6d - (_0x4947b3 * _0x4a4d2c + _0x1a4994 * _0x4161ee),
    anchorS: _0x1fab81,
    anchorY: _0x446c6d,
    depth: _0x3822b2 + Ge(_0x478432, _0x58c6c4, _0x21dacb),
    sx: _0x178f51,
    sy: _0xf6ab03,
    sz: 1,
    tilt: _0x273efe,
    visibilityS: _0x23c1bd,
    componentId: _0x25fb47,
    component: _0x478432,
    componentTransform: {
      mirrorX: !!_0x478432.mirrorX && !!(_0x21dacb & 1),
      quarterTurns: _0x22942f
    }
  };
  Ne.push(_0x5003f5);
  return _0x5003f5;
}
const We = Object.freeze([4, 13, 23, 25, 28, 31]);
function Ue(_0x371585, _0x5e015f = 0, _0x383354 = _0x371585.sz) {
  _0x3fe016(_0x599411, _0x371585.s, xe);
  const _0x1bcc77 = _0x33ec0f(_0x599411, _0x371585.s);
  be.makeRotationY(_0x1bcc77);
  be.multiply(Me.makeRotationZ(ie(_0x371585.s) + _0x371585.tilt));
  ge.copy(be);
  ge.scale(ye.set(_0x371585.sx, _0x371585.sy, _0x383354));
  ge.setPosition(xe.x + Math.sin(_0x1bcc77) * (_0x371585.depth + _0x5e015f), _0x371585.y + re(_0x371585.s), xe.z + Math.cos(_0x1bcc77) * (_0x371585.depth + _0x5e015f));
  return ge;
}
function Le(_0x37937a, _0x31a5f8, _0x595db7) {
  const _0x1160a6 = Math.round(_0x37937a);
  for (let _0x57f134 = 0; _0x57f134 <= 6; _0x57f134++) {
    for (const _0x30763a of _0x57f134 === 0 ? [_0x1160a6] : [_0x1160a6 - _0x57f134, _0x1160a6 + _0x57f134]) {
      if (_0x30763a >= _0x31a5f8 && _0x30763a < _0x595db7 && _0x3cd70c[_0x30763a] > -100) {
        return _0x30763a + 0.5;
      }
    }
  }
  return null;
}
const Xe = Object.freeze([Object.freeze(["gill", "pipe-spine", "gallery"]), Object.freeze(["vent-bank", "breach", "sensor"]), Object.freeze(["pipe-spine", "exhaust", "containment"]), Object.freeze(["gallery", "gill", "breach"]), Object.freeze(["sensor", "vent-bank", "pipe-spine"]), Object.freeze(["containment", "exhaust", "breach"])]);
const He = Object.freeze({
  gill: 5.45,
  "pipe-spine": 3.95,
  gallery: 5.85,
  breach: 5.15,
  "vent-bank": 6.05,
  sensor: 4.25,
  exhaust: 5.05,
  containment: 4.55
});
const Ye = Object.freeze({
  gill: -0.28,
  "pipe-spine": 1.18,
  gallery: 1.62,
  breach: -0.1,
  "vent-bank": -0.42,
  sensor: 2.15,
  exhaust: 0.72,
  containment: 0.05
});
const Ke = new Map(_0x34a58b.cells.map(_0x22c67c => [_0x22c67c.role, _0x22c67c]));
function qe(_0x44147a) {
  const _0x3c2a86 = _0x44147a.visibilityS;
  const _0x349724 = _0x44147a.topY - _0x44147a.visibleHeight * 0.52;
  const _0x45244a = _0x44147a.width;
  const _0x5f0d33 = _0x44147a.visibleHeight;
  const _0x384a30 = _0x44147a.role;
  const _0x8afea8 = (_0x1968d4, _0x8dbdb6, _0x772e32, _0x5ca0e7, _0x241b5b, _0x229ca9, _0x543101, _0x27a506 = 0) => Ee(_0x1968d4, _0x8dbdb6, _0x772e32, _0x5ca0e7, _0x241b5b, _0x229ca9, _0x543101, _0x27a506, _0x3c2a86, _0x384a30);
  const _0x5ef967 = (_0x46809d, _0x50b150, _0x183cf5, _0x4d0e7e, _0x3e23a3, _0x5c77b5, _0x486401 = -Math.PI / 2) => $e(_0x46809d, _0x50b150, _0x183cf5, _0x4d0e7e, _0x3e23a3, _0x5c77b5, _0x486401, _0x3c2a86, _0x384a30);
  if (_0x384a30 === "gill" || _0x384a30 === "vent-bank") {
    _0x8afea8(_0x44147a.s, _0x349724, 1.06, _0x45244a * 0.92, _0x5f0d33 * 0.68, 0.16, _0xcf2590.limb.shadow);
    for (const _0x572f6d of [-0.22, 0, 0.22]) {
      _0x8afea8(_0x44147a.s, _0x349724 + _0x572f6d * _0x5f0d33, 1.12, _0x45244a * (0.74 - Math.abs(_0x572f6d) * 0.3), 0.12, 0.1, _0x572f6d === 0 ? _0xcf2590.limb.machine : _0xcf2590.groundAlt);
    }
  } else if (_0x384a30 === "pipe-spine") {
    _0x5ef967(_0x44147a.s - _0x45244a * 0.17, _0x349724, 1.1, _0x5f0d33 * 0.9, 0.15, _0xcf2590.limb.machine, 0);
    _0x5ef967(_0x44147a.s + _0x45244a * 0.15, _0x349724 - _0x5f0d33 * 0.04, 1.12, _0x5f0d33 * 0.76, 0.11, _0xcf2590.groundAlt, 0);
    _0x8afea8(_0x44147a.s, _0x349724 + _0x5f0d33 * 0.13, 1.17, _0x45244a * 0.58, _0x5f0d33 * 0.18, 0.22, _0xcf2590.limb.wall);
  } else if (_0x384a30 === "gallery") {
    _0x8afea8(_0x44147a.s, _0x349724, 1.07, _0x45244a * 0.88, _0x5f0d33 * 0.52, 0.2, _0xcf2590.limb.wall);
    _0x8afea8(_0x44147a.s, _0x349724 + _0x5f0d33 * 0.25, 1.14, _0x45244a, 0.15, 0.14, _0xcf2590.catwalk);
    _0x8afea8(_0x44147a.s - _0x45244a * 0.31, _0x349724 + _0x5f0d33 * 0.03, 1.15, 0.13, _0x5f0d33 * 0.48, 0.12, _0xcf2590.groundAlt);
  } else if (_0x384a30 === "breach") {
    _0x8afea8(_0x44147a.s, _0x349724, 1.04, _0x45244a * 0.64, _0x5f0d33 * 0.62, 0.18, _0xcf2590.limb.shadow);
    _0x8afea8(_0x44147a.s - _0x45244a * 0.18, _0x349724, 1.12, _0x45244a * 0.62, 0.18, 0.14, _0xcf2590.groundAlt, 0.66);
    _0x8afea8(_0x44147a.s + _0x45244a * 0.16, _0x349724, 1.13, _0x45244a * 0.58, 0.16, 0.14, _0xcf2590.limb.machine, -0.58);
  } else if (_0x384a30 === "sensor") {
    _0x5ef967(_0x44147a.s, _0x349724 - _0x5f0d33 * 0.1, 1.08, _0x5f0d33 * 0.78, 0.13, _0xcf2590.limb.machine, 0);
    _0x8afea8(_0x44147a.s, _0x349724 + _0x5f0d33 * 0.2, 1.15, _0x45244a * 0.78, _0x5f0d33 * 0.16, 0.14, _0xcf2590.catwalk, -0.18);
    _0x8afea8(_0x44147a.s + _0x45244a * 0.22, _0x349724 + _0x5f0d33 * 0.27, 1.17, _0x45244a * 0.23, _0x5f0d33 * 0.22, 0.14, _0xcf2590.limb.wall);
  } else if (_0x384a30 === "exhaust") {
    _0x8afea8(_0x44147a.s - _0x45244a * 0.22, _0x349724, 1.08, _0x45244a * 0.48, _0x5f0d33 * 0.54, 0.24, _0xcf2590.limb.wall);
    _0x5ef967(_0x44147a.s + _0x45244a * 0.12, _0x349724 + _0x5f0d33 * 0.08, 1.14, _0x45244a * 0.58, 0.17, _0xcf2590.limb.machine);
    _0x8afea8(_0x44147a.s + _0x45244a * 0.34, _0x349724 + _0x5f0d33 * 0.08, 1.17, _0x45244a * 0.22, _0x5f0d33 * 0.28, 0.18, _0xcf2590.groundAlt);
  } else {
    _0x8afea8(_0x44147a.s, _0x349724, 1.08, _0x45244a * 0.66, _0x5f0d33 * 0.7, 0.28, _0xcf2590.limb.wall);
    _0x5ef967(_0x44147a.s - _0x45244a * 0.38, _0x349724, 1.13, _0x5f0d33 * 0.72, 0.11, _0xcf2590.catwalk, 0);
    _0x5ef967(_0x44147a.s + _0x45244a * 0.38, _0x349724, 1.13, _0x5f0d33 * 0.72, 0.11, _0xcf2590.catwalk, 0);
  }
}
function Ze(_0x1ad40c, _0x3d5be1, _0x451bc1, _0x3a519c, _0x371bd4, _0x239b1c, _0x22e3ce) {
  const _0x10780c = _0x22e3ce & 1 ? 1 : -1;
  for (let _0x55fff4 = 0; _0x55fff4 < _0x1ad40c.shapeIds.length; _0x55fff4++) {
    const _0x212fd0 = _0x1ad40c.shapeIds[_0x55fff4];
    const _0x4fda78 = _0x43e48d(_0x212fd0);
    if (!_0x4fda78) {
      continue;
    }
    const _0x68e82b = _0x1ad40c.seed + _0x55fff4 * 313;
    if (_0x4fda78.category === "trim-cap") {
      Ve(_0x3d5be1 + _0x10780c * _0x3a519c * (_0x55fff4 ? 0.05 : 0.12), _0x451bc1 - (_0x55fff4 ? 1.06 : 0.58), 1.075, Math.min(3.35, _0x3a519c * (_0x55fff4 ? 0.4 : 0.52)), _0x55fff4 ? 0.42 : 0.5, _0x212fd0, _0x68e82b, 0, _0x239b1c);
    } else if (_0x4fda78.category === "beam-brace") {
      Ve(_0x3d5be1 + _0x10780c * _0x3a519c * 0.1, _0x451bc1 - 2.3, 1.095, Math.min(2.35, _0x3a519c * 0.42), _0x371bd4 === 3 ? 1.28 : 0.92, _0x212fd0, _0x68e82b, 0, _0x239b1c);
    } else if (_0x4fda78.category === "pipe-conduit") {
      Ve(_0x3d5be1 - _0x10780c * _0x3a519c * 0.15, _0x451bc1 - 3.03, 1.11, Math.min(2.45, _0x3a519c * 0.38), _0x212fd0 === "conduit-tee" ? 0.92 : 0.48, _0x212fd0, _0x68e82b, 0, _0x239b1c);
    } else if (_0x4fda78.category === "near-silhouette") {
      Ve(_0x3d5be1 + _0x10780c * _0x3a519c * 0.18, _0x451bc1 - 3.3, 1.18, Math.min(1.7, _0x3a519c * 0.28), 1.34, _0x212fd0, _0x68e82b, 0, _0x239b1c);
    }
  }
}
function Je(_0x7990d, _0x578d1b, _0x501233, _0x4f0dbf, _0x5eb1e7, _0x1b1ad0, _0x1b409d, _0x4c3709) {
  if (!_0x7990d.defenseShapeId) {
    return;
  }
  const _0x68ec16 = _0x43e48d(_0x7990d.defenseShapeId);
  if (!_0x68ec16) {
    return;
  }
  const _0x58484e = _0x4c3709 & 1 ? -1 : 1;
  const _0x199ed0 = _0x68ec16.nativeAspect;
  const _0x1f892d = _0x199ed0 > 1.55 ? Math.min(1.9, _0x4f0dbf * 0.3) : _0x199ed0 < 0.72 ? 0.72 : 1.16;
  const _0x43b88c = _0x199ed0 > 1.55 ? 0.68 : _0x199ed0 < 0.72 ? 1.28 : 1.08;
  const _0x52b7dd = _0x578d1b + _0x58484e * Math.min(_0x4f0dbf * 0.22, 1.38);
  const _0x3d0db3 = _0x501233 - 2.14 - _0x4c3709 % 3 * 0.15;
  Ve(_0x52b7dd, _0x3d0db3, 1.165, _0x1f892d, _0x43b88c, _0x68ec16.id, _0x7990d.seed ^ 1540483477, 0, _0x1b409d);
  const _0x8563a2 = function (_0x106681, _0x2fce3e, _0xdf09d5, _0x22abe0, _0x2791ca, _0x56db12, _0x52cf7e) {
    if (!_0x106681?.active || !_0x2fce3e) {
      return null;
    }
    const _0x43fc9b = Math.min(0.46, Math.max(0.12, (_0x56db12 - _0x2791ca) * 0.12));
    const _0x1095f2 = Math.max(_0x2791ca + _0x43fc9b, Math.min(_0x56db12 - _0x43fc9b, _0xdf09d5 + _0x106681.routeOffset));
    const _0x3a36ad = _0x31b602(_0x1095f2, _0x538634);
    const _0x3b7720 = _0x538634.path.introTiles + _0x3a36ad * _0x538634.path.faceTiles;
    if (_0x3a36ad >= 1 && _0x1095f2 >= _0x3b7720 - _0x17d4c3.gateApron) {
      return null;
    }
    const _0x39983 = _0x22abe0 + _0x106681.verticalOffset;
    const _0x4aa523 = _0x33ec0f(_0x599411, _0x1095f2);
    _0x3fe016(_0x599411, _0x1095f2, xe);
    const _0x28572d = _0x2fce3e.sockets?.find(_0x9cd469 => _0x9cd469.kind === _0x106681.socketKind) || _0x2fce3e.sockets?.[0] || null;
    const _0x3d89a6 = Object.freeze({
      id: "response-" + _0x106681.phase + "-" + Ae.length + "-" + _0x2fce3e.id,
      state: _0x106681.state,
      phase: _0x106681.phase,
      kind: _0x106681.socketKind,
      componentId: _0x2fce3e.id,
      componentSocket: _0x28572d ? Object.freeze({
        ..._0x28572d
      }) : null,
      route: Object.freeze({
        s: _0x1095f2,
        y: _0x39983,
        visibilityS: _0x52cf7e,
        offRoute: true,
        playerAdjacent: false,
        safeFromPlayerRadius: _0x106681.safeFromPlayerRadius
      }),
      world: Object.freeze({
        x: xe.x + Math.sin(_0x4aa523) * _0x106681.outwardDepth,
        y: _0x39983 + re(_0x1095f2),
        z: xe.z + Math.cos(_0x4aa523) * _0x106681.outwardDepth,
        yaw: _0x4aa523
      }),
      hooks: Object.freeze([..._0x106681.allowedHooks]),
      tellLeadMs: _0x106681.tellLeadMs,
      causeResponse: true
    });
    Ae.push(_0x3d89a6);
    return _0x3d89a6;
  }(_0x7990d.response, _0x68ec16, _0x52b7dd, _0x501233, _0x5eb1e7, _0x1b1ad0, _0x1b409d);
  if (!_0x8563a2) {
    return;
  }
  const _0x4e2b08 = _0x8563a2.route.y;
  const _0x48261d = Math.max(0.35, Math.abs(_0x3d0db3 - _0x4e2b08));
  $e(_0x8563a2.route.s, (_0x3d0db3 + _0x4e2b08) / 2, 1.06, _0x48261d, 0.065, _0xcf2590.limb.machine, 0, _0x1b409d, null, "pressure-pipe");
  Ie(_0x8563a2.route.s, _0x4e2b08, 1.095, 0.34, 0.24, 0.18, _0xcf2590.limb.shadow, 0, _0x1b409d, "aperture-housing");
}
const Qe = Object.freeze(["rib", "service", "cavity", "vent", "braid", "root"]);
function et(_0x3f281d, _0x1d47f7, _0x14b84c, _0x15ef8a, _0x298937) {
  const _0x10d81c = _0x3f281d.supportFamily;
  if (!Qe.includes(_0x10d81c)) {
    return false;
  }
  le.supportFamilies[_0x10d81c] = (le.supportFamilies[_0x10d81c] || 0) + 1;
  const _0x1902a3 = (_0x3f281d.face || 0) * 1009 + _0x1d47f7 * 137;
  const _0x223309 = Math.min(2.25, 0.92 + _0x14b84c * 0.12);
  const _0x429153 = _0x3f281d.y - 0.62 - _0x223309 / 2;
  const _0x57123b = 1.06;
  if (_0x10d81c === "rib") {
    const _0x4591f6 = _0x1d47f7 & 1 ? 0.68 : 0.32;
    Ie(_0x3f281d.x0 + _0x14b84c * _0x4591f6, _0x429153, 0.2, 0.44, _0x223309, 0.62, _0xcf2590.limb.wall, _0x1d47f7 & 1 ? -0.055 : 0.055, _0x298937);
    Be(_0x15ef8a, _0x3f281d.y - 0.64 - Math.min(1.55, _0x223309) / 2, -0.08, Math.min(2.85, _0x14b84c * 0.52), Math.min(1.55, _0x223309), 0.54, _0xcf2590.limb.shadow, _0x1d47f7 & 1 ? 2 : 0, _0x298937);
    Ve(_0x15ef8a + (_0x1d47f7 & 1 ? -0.18 : 0.18), _0x3f281d.y - 0.92, _0x57123b, Math.min(3.15, _0x14b84c * 0.58), 0.82, "diagonal-brace", _0x1902a3 + 11, 0, _0x298937);
    Ve(_0x15ef8a, _0x3f281d.y - 0.12, _0x57123b, Math.min(3.45, _0x14b84c * 0.64), 0.38, "scute-edge", _0x1902a3 + 29, 0, _0x298937);
    return true;
  }
  if (_0x10d81c === "service") {
    const _0x2db21d = Math.min(Math.max(1.35, _0x14b84c * 0.44), 3.35);
    const _0x3f9279 = _0x2db21d * 0.39;
    for (const _0x5c88c6 of [-1, 1]) {
      Ie(_0x15ef8a + _0x5c88c6 * _0x3f9279, _0x429153, 0.18, 0.36, _0x223309, 0.68, _0x5c88c6 < 0 ? _0xcf2590.limb.wall : _0xcf2590.limb.shadow, _0x5c88c6 * -0.018, _0x298937);
    }
    Ie(_0x15ef8a, _0x3f281d.y - 0.69 - _0x223309, 0.16, _0x2db21d, 0.34, 0.72, _0xcf2590.limb.shadow, 0, _0x298937);
    Ve(_0x15ef8a, _0x3f281d.y - 0.72, _0x57123b, Math.min(3.05, _0x2db21d), 0.72, "i-girder", _0x1902a3 + 43, 0, _0x298937);
    Ve(_0x15ef8a + (_0x1d47f7 & 1 ? _0x3f9279 : -_0x3f9279), _0x3f281d.y - 1.18, 1.08, 0.64, 0.64, "conduit-tee", _0x1902a3 + 61, 0, _0x298937);
    return true;
  }
  if (_0x10d81c === "cavity") {
    const _0x52d6c4 = Math.min(Math.max(1.65, _0x14b84c * 0.5), 3.85);
    const _0x4a316f = Math.min(1.88, _0x223309);
    const _0x18d283 = _0x52d6c4 * 0.43;
    for (const _0x12fd49 of [-1, 1]) {
      Ie(_0x15ef8a + _0x12fd49 * _0x18d283, _0x3f281d.y - 0.62 - _0x4a316f / 2, 0.12, 0.4, _0x4a316f, 0.68, _0xcf2590.limb.wall, _0x12fd49 * 0.026, _0x298937);
      Ve(_0x15ef8a + _0x12fd49 * _0x18d283, _0x3f281d.y - 0.68 - _0x4a316f, _0x57123b, 0.86, 0.74, "armor-shoulder", _0x1902a3 + 79 + _0x12fd49, 0, _0x298937);
    }
    Ie(_0x15ef8a, _0x3f281d.y - 0.62, 0.14, _0x52d6c4, 0.36, 0.72, _0xcf2590.limb.shadow, 0, _0x298937);
    Ie(_0x15ef8a, _0x3f281d.y - 1.22, 0.48, _0x52d6c4 * 0.48, 0.7, 0.3, _0xcf2590.contactShadow, 0, _0x298937);
    Fe(_0x15ef8a + (_0x1d47f7 & 1 ? _0x18d283 : -_0x18d283), _0x3f281d.y - 1.18, 1.02, 0.76, 0.62, 0.1, "serviceInspect", _0x1902a3 + 101, 0, _0x298937);
    Ve(_0x15ef8a, _0x3f281d.y - 1.18, 1.08, 0.82, 0.78, "cross-brace", _0x1902a3 + 113, 0, _0x298937);
    return true;
  }
  if (_0x10d81c === "vent") {
    const _0x195904 = _0x1d47f7 & 1 ? 0.28 : 0.72;
    const _0x5a1d27 = _0x3f281d.x0 + _0x14b84c * _0x195904;
    const _0x157fa6 = _0x3f281d.x0 + _0x14b84c * (1 - _0x195904);
    Ie(_0x5a1d27, _0x429153, 0.18, 0.72, _0x223309, 0.72, _0xcf2590.limb.shadow, _0x1d47f7 & 1 ? -0.018 : 0.018, _0x298937);
    Ie(_0x5a1d27, _0x3f281d.y - 0.73 - _0x223309, 0.22, 1.12, 0.38, 0.78, _0xcf2590.limb.wall, 0, _0x298937);
    Ve(_0x5a1d27, _0x3f281d.y - 1.02, _0x57123b, 0.92, 0.92, "vent-hood", _0x1902a3 + 127, 0, _0x298937);
    De.push(Object.freeze({
      id: "vent-" + (_0x3f281d.face || 0) + "-" + _0x1d47f7,
      phase: _0x51f278(_0x3f281d.face || _0x31b602(_0x5a1d27, _0x538634)),
      s: _0x5a1d27,
      y: _0x3f281d.y - 0.92,
      depth: 1.1800000000000002,
      visibilityS: _0x298937
    }));
    $e(_0x157fa6, _0x3f281d.y - 0.72 - _0x223309 / 2, 0.96, Math.min(1.82, _0x223309), 0.09, _0xcf2590.limb.machine, 0, _0x298937);
    Ve(_0x157fa6, _0x3f281d.y - 0.7 - _0x223309, _0x57123b, 0.62, 0.62, "pipe-elbow", _0x1902a3 + 149, 0, _0x298937);
    return true;
  }
  if (_0x10d81c === "braid") {
    const _0x3fd8a5 = Math.min(2.65, _0x14b84c * 0.43);
    const _0x271c50 = Math.min(_0x14b84c * 0.22, 1.35);
    for (const _0x382789 of [-1, 1]) {
      Ve(_0x15ef8a + _0x382789 * _0x271c50, _0x3f281d.y - 0.94, _0x57123b, _0x3fd8a5, 0.94, "diagonal-brace", _0x1902a3 + 167 + _0x382789, 0, _0x298937);
      Ie(_0x15ef8a + _0x382789 * _0x271c50 * 1.18, _0x429153, 0.12, 0.34, _0x223309, 0.6, _0xcf2590.limb.shadow, _0x382789 * 0.052, _0x298937);
    }
    Ve(_0x15ef8a, _0x3f281d.y - 0.62, 1.1, Math.min(3.55, _0x14b84c * 0.7), 0.58, "cable-bundle", _0x1902a3 + 181, 0, _0x298937);
    Ve(_0x15ef8a, _0x3f281d.y - 1.3, 1.08, 0.68, 0.68, "conduit-tee", _0x1902a3 + 193, 0, _0x298937);
    return true;
  }
  const _0x59543b = Math.min(_0x14b84c * 0.25, 1.55);
  const _0x44f139 = Math.min(2.38, 1.1 + _0x14b84c * 0.13);
  for (const _0x2a5519 of [-1, 1]) {
    const _0x10bffc = _0x15ef8a + _0x2a5519 * _0x59543b;
    Ie(_0x10bffc, _0x3f281d.y - 0.64 - _0x44f139 / 2, 0.16, 0.66, _0x44f139, 0.82, _0x2a5519 < 0 ? _0xcf2590.limb.wall : _0xcf2590.limb.shadow, _0x2a5519 * 0.064, _0x298937);
    Ie(_0x10bffc + _0x2a5519 * 0.18, _0x3f281d.y - 0.74 - _0x44f139, 0.18, 1.24, 0.44, 0.86, _0xcf2590.limb.shadow, _0x2a5519 * 0.018, _0x298937);
    Ve(_0x10bffc + _0x2a5519 * 0.1, _0x3f281d.y - 0.68 - _0x44f139, _0x57123b, 1.1, 1.02, _0x2a5519 < 0 ? "keel-fin" : "armor-shoulder", _0x1902a3 + 211 + _0x2a5519, 0, _0x298937);
  }
  Ve(_0x15ef8a, _0x3f281d.y - 0.82, 1.09, 0.92, 0.88, "cross-brace", _0x1902a3 + 229, 0, _0x298937);
  return true;
}
function tt(_0x554b14, _0x191d91, _0x457d66, _0x17eadc, _0x2e8c25 = true) {
  if (!_0x554b14.length) {
    return null;
  }
  const _0x313cae = new je(_0x191d91, _0x457d66, _0x554b14.length);
  _0x313cae.name = _0x17eadc;
  _0x313cae.frustumCulled = false;
  _0x313cae.castShadow = _0x2e8c25;
  _0x313cae.receiveShadow = _0x2e8c25;
  const _0x585408 = [];
  for (let _0x333398 = 0; _0x333398 < _0x554b14.length; _0x333398++) {
    const _0x5ca529 = Ue(_0x554b14[_0x333398]).clone();
    _0x585408.push(_0x5ca529);
    _0x313cae.setMatrixAt(_0x333398, _0x5ca529);
    _0x313cae.setColorAt(_0x333398, ve.set(_0x554b14[_0x333398].color));
  }
  _0x313cae.instanceMatrix.needsUpdate = true;
  _0x313cae.instanceColor.needsUpdate = true;
  Se.push({
    mesh: _0x313cae,
    rows: _0x554b14,
    baseMatrices: _0x585408
  });
  _0x313cae.onBeforeRender = updateWorldDressingCull;
  _0x191dc9.add(_0x313cae);
  le.drawPools++;
  return _0x313cae;
}
const nt = Object.freeze({
  rib: Object.freeze({
    rail: _0xcf2590.limb.rib,
    rung: _0xcf2590.catwalk,
    gap: _0x538475 ? 0.9 : 0.86,
    radius: _0x538475 ? 0.105 : 0.075,
    rungRadius: _0x538475 ? 0.088 : 0.065,
    pitch: 0.66
  }),
  service: Object.freeze({
    rail: _0xcf2590.limb.machine,
    rung: _0xcf2590.catwalk,
    gap: _0x538475 ? 0.84 : 0.78,
    radius: _0x538475 ? 0.098 : 0.064,
    rungRadius: _0x538475 ? 0.084 : 0.056,
    pitch: 0.61
  }),
  organic: Object.freeze({
    rail: _0xcf2590.limb.rib,
    rung: _0xcf2590.catwalk,
    gap: _0x538475 ? 0.94 : 0.9,
    radius: _0x538475 ? 0.112 : 0.082,
    rungRadius: _0x538475 ? 0.094 : 0.069,
    pitch: 0.72
  })
});
const ot = nt.service;
const st = [];
const at = [];
const rt = {
  x: 0,
  z: 0
};
const it = new _0x47c36d.Matrix4();
const lt = new _0x47c36d.Matrix4();
const ct = new _0x47c36d.Matrix4();
const ut = new _0x47c36d.Vector3();
const ht = new _0x47c36d.Vector3();
const mt = new _0x47c36d.Color();
function ft(_0x517f0a) {
  _0x3fe016(_0x599411, _0x517f0a.s, rt);
  const _0x5a14fe = _0x33ec0f(_0x599411, _0x517f0a.s);
  lt.makeRotationY(_0x5a14fe);
  it.copy(lt);
  if (_0x517f0a.horizontal) {
    ct.makeRotationZ(-Math.PI / 2);
    it.multiply(ct);
  }
  it.scale(ht.set(_0x517f0a.radius, _0x517f0a.length, _0x517f0a.radius));
  ut.set(_0x517f0a.dx, 0, _0x517f0a.depth).applyMatrix4(lt);
  it.setPosition(rt.x + ut.x, _0x517f0a.y + re(_0x517f0a.s), rt.z + ut.z);
  return it;
}
function dt(_0x2a111e, _0xc1ae4e) {
  if (!_0x2a111e.length) {
    return null;
  }
  const _0x36d5a2 = new _0x47c36d.CylinderGeometry(1, 1, 1, 8, 1, false);
  const _0x474503 = _0x1781e6(new _0x47c36d.MeshStandardMaterial({
    color: 16777215,
    vertexColors: true,
    roughness: 0.68,
    metalness: 0.3
  }), "machine");
  const _0x38411c = new _0x47c36d.InstancedMesh(_0x36d5a2, _0x474503, _0x2a111e.length);
  _0x38411c.name = _0xc1ae4e;
  _0x38411c.userData.environmentRole = "traversable-route-ladder";
  _0x38411c.frustumCulled = false;
  _0x38411c.castShadow = true;
  _0x38411c.receiveShadow = true;
  const _0x12b07d = [];
  for (let _0x41c303 = 0; _0x41c303 < _0x2a111e.length; _0x41c303++) {
    const _0x313d9d = ft(_0x2a111e[_0x41c303]).clone();
    _0x12b07d.push(_0x313d9d);
    _0x38411c.setMatrixAt(_0x41c303, _0x313d9d);
    _0x38411c.setColorAt(_0x41c303, mt.set(_0x2a111e[_0x41c303].color));
  }
  _0x38411c.instanceMatrix.needsUpdate = true;
  _0x38411c.instanceColor.needsUpdate = true;
  _0x38411c.onBeforeRender = updateWorldDressingCull;
  Re.push({
    mesh: _0x38411c,
    rows: _0x2a111e,
    baseMatrices: _0x12b07d
  });
  _0x191dc9.add(_0x38411c);
  return _0x38411c;
}
export function updateWorldDressingCull() {
  const _0x478e12 = _0x195d00();
  if (_0x478e12 === Te) {
    return;
  }
  Te = _0x478e12;
  let _0x399ece = 0;
  for (const _0x78d87b of Re) {
    for (let _0x2109bd = 0; _0x2109bd < _0x78d87b.rows.length; _0x2109bd++) {
      const _0x2d3242 = !_0x3be1ad(_0x78d87b.rows[_0x2109bd].s);
      _0x78d87b.mesh.setMatrixAt(_0x2109bd, _0x2d3242 ? _0x5c2512 : _0x78d87b.baseMatrices[_0x2109bd]);
      if (_0x2d3242) {
        _0x399ece++;
      }
    }
    _0x78d87b.mesh.instanceMatrix.needsUpdate = true;
  }
  if (!_0x70d8d) {
    le.hidden = _0x399ece;
    return;
  }
  const _0x52419b = _0x44c2db();
  for (const _0x24197c of Se) {
    for (let _0x1070ad = 0; _0x1070ad < _0x24197c.rows.length; _0x1070ad++) {
      const _0x169f9a = !_0x3be1ad(_0x24197c.rows[_0x1070ad].visibilityS ?? _0x24197c.rows[_0x1070ad].s);
      _0x24197c.mesh.setMatrixAt(_0x1070ad, _0x169f9a ? _0x5c2512 : _0x24197c.baseMatrices[_0x1070ad]);
      if (_0x169f9a) {
        _0x399ece++;
      }
    }
    _0x24197c.mesh.instanceMatrix.needsUpdate = true;
  }
  let _0xf20276 = 0;
  for (const _0x81f9f1 of Ce) {
    const _0x445d6a = Ot(_0x81f9f1, _0x52419b);
    _0xf20276 += _0x445d6a;
    _0x399ece += _0x445d6a;
  }
  if (_0x538475 && _0x1e91d7.state !== "ready") {
    _0xf20276 = 0;
    for (const _0x31af5c of ze) {
      if (!_0x3be1ad(_0x31af5c.visibilityS)) {
        _0xf20276++;
      }
    }
  }
  le.detailHidden = _0xf20276;
  le.detailVisible = Math.max(0, ze.length - _0xf20276);
  for (const _0x2ec414 of ke) {
    _0x399ece += Ot(_0x2ec414, _0x52419b);
  }
  for (const _0x4772ca of ae) {
    _0x399ece += Ot(_0x4772ca, _0x52419b);
  }
  for (const _0x303deb of se) {
    _0x303deb.mesh.visible = _0x303deb.facet === _0x52419b && _0x3be1ad(_0x303deb.s);
    if (!_0x303deb.mesh.visible) {
      _0x399ece++;
    }
  }
  for (const _0x413df4 of oe) {
    _0x399ece += Ot(_0x413df4, _0x52419b);
  }
  le.hidden = _0x399ece;
}
const pt = new _0x47c36d.Vector3();
const wt = new _0x47c36d.Vector3();
const xt = new _0x47c36d.Vector3();
const gt = new _0x47c36d.Vector3();
const bt = new _0x47c36d.Matrix3();
const Mt = new _0x47c36d.Color();
function yt() {
  return {
    position: [],
    normal: [],
    uv: [],
    color: [],
    vertices: 0
  };
}
function vt(_0x20cddc, _0x4a250f, _0x31dbd1, _0x5ec14e, _0x44b7b5) {
  if (Math.abs(_0x4a250f.y) > 0.55) {
    return _0x40ef7a(_0x44b7b5, _0x31dbd1 + _0x20cddc.x, _0x44b7b5 * 2.71 + _0x20cddc.z);
  } else if (Math.abs(_0x4a250f.z) > 0.55) {
    return _0x40ef7a(_0x44b7b5, _0x31dbd1 + _0x20cddc.x, _0x5ec14e + _0x20cddc.y);
  } else {
    return _0x40ef7a(_0x44b7b5, _0x44b7b5 * 3.17 + _0x20cddc.z, _0x5ec14e + _0x20cddc.y);
  }
}
function St(_0x5ae6f3, _0x41057d, _0x13fb91, _0x1e484c, _0xb80043, _0x5c4b12, _0x23b6e8, _0x1ed30a = null, _0x5aad28 = null, _0x188c8c = null, _0x5072e3 = null, _0x5b7edb = _0x49bf73.canvas) {
  const _0x3bf970 = _0x41057d.index ? _0x41057d.toNonIndexed() : _0x41057d;
  const _0x1b01a9 = _0x3bf970.getAttribute("position");
  const _0x4a86cc = _0x3bf970.getAttribute("normal");
  const _0x1a8e07 = _0x3bf970.getAttribute("uv");
  bt.getNormalMatrix(_0x13fb91);
  const _0x4795ad = Mt.set(_0x23b6e8).clone();
  for (let _0x198c4e = 0; _0x198c4e < _0x1b01a9.count; _0x198c4e++) {
    let _0x2289df;
    pt.fromBufferAttribute(_0x1b01a9, _0x198c4e);
    xt.fromBufferAttribute(_0x4a86cc, _0x198c4e);
    wt.copy(pt);
    if (_0x1ed30a) {
      wt.multiply(_0x1ed30a);
    }
    if (_0x188c8c && _0x1a8e07) {
      let _0x333640;
      let _0x6db733;
      let _0x1af6b1;
      let _0x5491a2;
      if (_0x188c8c.visibleRect) {
        _0x333640 = _0x188c8c.visibleRect.x;
        _0x6db733 = _0x188c8c.visibleRect.y;
        _0x1af6b1 = _0x333640 + _0x188c8c.visibleRect.w;
        _0x5491a2 = _0x6db733 + _0x188c8c.visibleRect.h;
      } else {
        const _0x1c2a43 = _0x188c8c.trimRectPx || [_0x49bf73.uvGuardPx, _0x49bf73.uvGuardPx, _0x49bf73.cellSize - _0x49bf73.uvGuardPx, _0x49bf73.cellSize - _0x49bf73.uvGuardPx];
        _0x333640 = _0x188c8c.col * _0x49bf73.cellSize + _0x1c2a43[0];
        _0x6db733 = _0x188c8c.row * _0x49bf73.cellSize + _0x1c2a43[1];
        _0x1af6b1 = _0x188c8c.col * _0x49bf73.cellSize + _0x1c2a43[2];
        _0x5491a2 = _0x188c8c.row * _0x49bf73.cellSize + _0x1c2a43[3];
      }
      const _0x7846af = _0x333640 / _0x5b7edb[0];
      const _0x249754 = _0x1af6b1 / _0x5b7edb[0];
      const _0x127774 = 1 - _0x5491a2 / _0x5b7edb[1];
      const _0x14a9eb = 1 - _0x6db733 / _0x5b7edb[1];
      let _0x16826f = _0x1a8e07.getX(_0x198c4e);
      let _0x2d0b07 = _0x1a8e07.getY(_0x198c4e);
      if (_0x5072e3?.mirrorX) {
        _0x16826f = 1 - _0x16826f;
      }
      const _0x291f2c = _0x5072e3?.quarterTurns & 3;
      if (_0x291f2c === 1) {
        [_0x16826f, _0x2d0b07] = [_0x2d0b07, 1 - _0x16826f];
      } else if (_0x291f2c === 2) {
        _0x16826f = 1 - _0x16826f;
        _0x2d0b07 = 1 - _0x2d0b07;
      } else if (_0x291f2c === 3) {
        [_0x16826f, _0x2d0b07] = [1 - _0x2d0b07, _0x16826f];
      }
      _0x2289df = [_0x7846af + _0x16826f * (_0x249754 - _0x7846af), _0x127774 + _0x2d0b07 * (_0x14a9eb - _0x127774)];
    } else {
      _0x2289df = vt(wt, xt, _0x1e484c, _0xb80043, _0x5c4b12);
    }
    const _0x44ab2c = _0x5a23ce(xt.x, xt.y, xt.z);
    const _0x23dfed = Mt.copy(_0x4795ad);
    if (_0x5aad28) {
      _0x5aad28(wt, xt, _0x23dfed);
    }
    _0x23dfed.multiplyScalar(_0x44ab2c);
    pt.applyMatrix4(_0x13fb91);
    gt.copy(xt).applyMatrix3(bt).normalize();
    _0x5ae6f3.position.push(pt.x, pt.y, pt.z);
    _0x5ae6f3.normal.push(gt.x, gt.y, gt.z);
    _0x5ae6f3.uv.push(_0x2289df[0], _0x2289df[1]);
    _0x5ae6f3.color.push(_0x23dfed.r, _0x23dfed.g, _0x23dfed.b);
    _0x5ae6f3.vertices++;
  }
  if (_0x3bf970 !== _0x41057d) {
    _0x3bf970.dispose();
  }
}
function kt(_0x538978) {
  const _0x1207c0 = new _0x47c36d.BufferGeometry();
  _0x1207c0.setAttribute("position", new _0x47c36d.Float32BufferAttribute(_0x538978.position, 3));
  _0x1207c0.setAttribute("normal", new _0x47c36d.Float32BufferAttribute(_0x538978.normal, 3));
  _0x1207c0.setAttribute("uv", new _0x47c36d.Float32BufferAttribute(_0x538978.uv, 2));
  _0x1207c0.setAttribute("color", new _0x47c36d.Float32BufferAttribute(_0x538978.color, 3));
  _0x1207c0.computeBoundingSphere();
  return _0x1207c0;
}
const Ct = {
  x: 0,
  z: 0
};
const zt = new _0x47c36d.Matrix4();
const Rt = new _0x47c36d.Matrix4();
const At = new _0x47c36d.Matrix4();
const Dt = new _0x47c36d.Vector3();
const Nt = new _0x47c36d.Color(16777215);
const Pt = new _0x47c36d.Color(_0xcf2590.contactShadow);
function Tt(_0x253239, _0x1a1780, _0x32c5c0) {
  const _0x47dc97 = _0x1a1780.art;
  const _0x5f45b1 = _0x47dc97.col / 4;
  const _0x1c0497 = (_0x47dc97.col + 1) / 4;
  const _0x4d92a4 = 1 - (_0x47dc97.row + 1) / 2;
  const _0x5ce0ca = 1 - _0x47dc97.row / 2;
  const _0x203363 = _0x1a1780.flip ? _0x1c0497 : _0x5f45b1;
  const _0xa0b1f4 = _0x1a1780.flip ? _0x5f45b1 : _0x1c0497;
  const _0x214bc2 = function (_0x4042d7, _0x254e04, _0x32db12, _0x4193af, _0x3e6027 = 0) {
    _0x3fe016(_0x599411, _0x254e04, Ct);
    const _0x1f7a40 = _0x33ec0f(_0x599411, _0x254e04);
    Rt.makeRotationY(_0x1f7a40);
    Rt.multiply(At.makeRotationZ(ie(_0x254e04) + _0x4042d7.tilt + _0x3e6027));
    zt.copy(Rt);
    zt.setPosition(Ct.x + Math.sin(_0x1f7a40) * _0x4193af, _0x32db12 + re(_0x254e04), Ct.z + Math.cos(_0x1f7a40) * _0x4193af);
    return zt;
  }(_0x1a1780, _0x1a1780.planeCenterS + (_0x32c5c0 ? -0.075 : 0), _0x1a1780.planeCenterY + (_0x32c5c0 ? -0.085 : 0), _0x32c5c0 ? _0x1a1780.shadowDepth : _0x1a1780.depth, _0x32c5c0 ? -0.004 : 0);
  Dt.set(0, 0, 1).transformDirection(_0x214bc2);
  const _0xb2de2 = _0x32c5c0 ? Pt : Nt;
  const _0x28ca63 = _0x1a1780.planeWidth / 2;
  const _0x23217a = _0x1a1780.planeHeight / 2;
  const _0x675535 = [[-_0x28ca63, -_0x23217a, _0x203363, _0x4d92a4], [_0x28ca63, -_0x23217a, _0xa0b1f4, _0x4d92a4], [_0x28ca63, _0x23217a, _0xa0b1f4, _0x5ce0ca], [-_0x28ca63, -_0x23217a, _0x203363, _0x4d92a4], [_0x28ca63, _0x23217a, _0xa0b1f4, _0x5ce0ca], [-_0x28ca63, _0x23217a, _0x203363, _0x5ce0ca]];
  for (const [_0x353871, _0x10169b, _0x3b645c, _0x112489] of _0x675535) {
    pt.set(_0x353871, _0x10169b, 0).applyMatrix4(_0x214bc2);
    _0x253239.position.push(pt.x, pt.y, pt.z);
    _0x253239.normal.push(Dt.x, Dt.y, Dt.z);
    _0x253239.uv.push(_0x3b645c, _0x112489);
    _0x253239.color.push(_0xb2de2.r, _0xb2de2.g, _0xb2de2.b);
    _0x253239.vertices++;
  }
}
function Ot(_0x2526a7, _0x2895db) {
  let _0x4635ee = 0;
  let _0x5cd521 = 0;
  if (_0x2526a7.facet === _0x2895db) {
    for (const _0xbf651e of _0x2526a7.samples) {
      if (!_0x3be1ad(_0xbf651e.s)) {
        break;
      }
      _0x4635ee = _0xbf651e.vertexEnd;
      _0x5cd521++;
    }
  }
  _0x2526a7.mesh.geometry.setDrawRange(0, _0x4635ee);
  _0x2526a7.mesh.visible = _0x4635ee > 0;
  return Math.max(0, _0x2526a7.rows - _0x5cd521);
}
function jt(_0x21c399, _0x24c9d5, _0x4c3d44, _0x283e76, _0x37c6b4, _0x115bfd = null) {
  const _0x3c0898 = {
    position: [],
    normal: [],
    uv: [],
    color: [],
    vertices: 0
  };
  St(_0x3c0898, _0x21c399, new _0x47c36d.Matrix4(), _0x24c9d5, _0x4c3d44, _0x283e76, _0x37c6b4, null, _0x115bfd);
  return kt(_0x3c0898);
}
function Et(_0x336bfc, _0x42cac4) {
  const _0x10cba6 = _0x336bfc.clone();
  const _0x349621 = _0x42cac4.rows[0].anchorS ?? _0x42cac4.rows[0].s;
  _0x3fe016(_0x599411, _0x349621, xe);
  const _0x19e609 = _0x33ec0f(_0x599411, _0x349621);
  const _0xc79e3e = {
    playerS: {
      value: -9999
    },
    time: {
      value: 0
    },
    amplitude: {
      value: 0
    },
    originS: {
      value: _0x349621
    },
    originXZ: {
      value: new _0x47c36d.Vector2(xe.x, xe.z)
    },
    tangent: {
      value: new _0x47c36d.Vector2(Math.cos(_0x19e609), -Math.sin(_0x19e609))
    },
    normal: {
      value: new _0x47c36d.Vector2(Math.sin(_0x19e609), Math.cos(_0x19e609))
    }
  };
  _0x10cba6.name = "Meridian nerve skin face " + _0x42cac4.phase + " facet " + _0x42cac4.facet;
  _0x10cba6.userData = {
    ..._0x10cba6.userData,
    nerveWake: true,
    emissivePolicy: "none-physical-displacement-only"
  };
  _0x10cba6.customProgramCacheKey = () => "meridian-component-nerve-wake-v1";
  _0x10cba6.onBeforeCompile = _0x23dda2 => {
    Object.assign(_0x23dda2.uniforms, {
      uNervePlayerS: _0xc79e3e.playerS,
      uNerveTime: _0xc79e3e.time,
      uNerveAmplitude: _0xc79e3e.amplitude,
      uNerveOriginS: _0xc79e3e.originS,
      uNerveOriginXZ: _0xc79e3e.originXZ,
      uNerveTangent: _0xc79e3e.tangent,
      uNerveNormal: _0xc79e3e.normal
    });
    _0x23dda2.vertexShader = _0x23dda2.vertexShader.replace("#include <common>", "#include <common>\n        uniform float uNervePlayerS;\n        uniform float uNerveTime;\n        uniform float uNerveAmplitude;\n        uniform float uNerveOriginS;\n        uniform vec2 uNerveOriginXZ;\n        uniform vec2 uNerveTangent;\n        uniform vec2 uNerveNormal;\n      ").replace("#include <begin_vertex>", "#include <begin_vertex>\n        float nerveRouteS = uNerveOriginS +\n          dot(transformed.xz - uNerveOriginXZ, uNerveTangent);\n        float nerveDistance = nerveRouteS - uNervePlayerS;\n        float nerveBand = (nerveDistance - 1.35) / 2.85;\n        float nerveEnvelope = exp(-0.5 * nerveBand * nerveBand);\n        float nerveWave = sin(nerveDistance * 2.45 - uNerveTime * 8.5);\n        float nerveOffset = nerveEnvelope * nerveWave * uNerveAmplitude;\n        transformed.xz += uNerveNormal * nerveOffset;\n        transformed.y += abs(nerveOffset) * 0.16;\n      ");
  };
  Pe.push({
    material: _0x10cba6,
    uniforms: _0xc79e3e,
    face: _0x42cac4.phase,
    facet: _0x42cac4.facet
  });
  Oe.pools = Pe.length;
  return _0x10cba6;
}
function It(_0x55c1b2, _0x5dbf08) {
  const _0x3fe92a = new _0x47c36d.Shape();
  _0x3fe92a.moveTo(_0x55c1b2[0][0], _0x55c1b2[0][1]);
  for (let _0x15eef0 = 1; _0x15eef0 < _0x55c1b2.length; _0x15eef0++) {
    _0x3fe92a.lineTo(_0x55c1b2[_0x15eef0][0], _0x55c1b2[_0x15eef0][1]);
  }
  _0x3fe92a.closePath();
  const _0x397aa4 = new _0x47c36d.ExtrudeGeometry(_0x3fe92a, {
    depth: _0x5dbf08,
    steps: 1,
    bevelEnabled: false,
    curveSegments: 1
  });
  _0x397aa4.translate(0, 0, -_0x5dbf08 / 2);
  _0x397aa4.computeVertexNormals();
  return _0x397aa4;
}
function Bt(_0x1c5d2b) {
  const _0x56be3a = [[[-0.5, 0.5], [0.5, 0.5], [0.17, -0.5], [-0.09, -0.5]], [[-0.5, 0.5], [0.5, 0.5], [-0.1, -0.5], [-0.36, -0.5]], [[-0.5, 0.5], [0.5, 0.5], [0.36, -0.5], [0.08, -0.5]]];
  const _0x1f9c09 = _0x1c5d2b % _0x56be3a.length;
  const _0x39fa6b = _0x56be3a[_0x1f9c09];
  const _0x11b915 = new _0x47c36d.Shape();
  _0x11b915.moveTo(_0x39fa6b[0][0], _0x39fa6b[0][1]);
  for (let _0x24f3cb = 1; _0x24f3cb < _0x39fa6b.length; _0x24f3cb++) {
    _0x11b915.lineTo(_0x39fa6b[_0x24f3cb][0], _0x39fa6b[_0x24f3cb][1]);
  }
  _0x11b915.closePath();
  const _0x1f3b65 = [[[-0.27, 0.27], [0.28, 0.27], [0.09, -0.23], [-0.02, -0.23]], [[-0.28, 0.27], [0.27, 0.27], [-0.15, -0.23], [-0.27, -0.23]], [[-0.27, 0.27], [0.28, 0.27], [0.27, -0.23], [0.15, -0.23]]][_0x1f9c09];
  const _0x8d7b3d = new _0x47c36d.Path();
  _0x8d7b3d.moveTo(_0x1f3b65[0][0], _0x1f3b65[0][1]);
  for (let _0x334e95 = 1; _0x334e95 < _0x1f3b65.length; _0x334e95++) {
    _0x8d7b3d.lineTo(_0x1f3b65[_0x334e95][0], _0x1f3b65[_0x334e95][1]);
  }
  _0x8d7b3d.closePath();
  _0x11b915.holes.push(_0x8d7b3d);
  const _0x50d28c = new _0x47c36d.ExtrudeGeometry(_0x11b915, {
    depth: 1,
    steps: 1,
    bevelEnabled: false,
    curveSegments: 1
  });
  _0x50d28c.translate(0, 0, -0.5);
  _0x50d28c.computeVertexNormals();
  return _0x50d28c;
}
function Ft(_0x71234e) {
  const _0x1be9ea = Math.min(0.2, _0x71234e * 0.16);
  const _0x121c1a = Math.min(0.38, _0x71234e * 0.24);
  return It([[-_0x71234e / 2, 0], [_0x71234e / 2, 0], [_0x71234e / 2, -0.2], [_0x71234e / 2 - _0x1be9ea, -0.42], [_0x71234e / 2 - _0x121c1a, -0.62], [-_0x71234e / 2 + _0x121c1a * 0.72, -0.62], [-_0x71234e / 2 + _0x1be9ea * 0.55, -0.43], [-_0x71234e / 2, -0.22]], 1.4);
}
const $t = new _0x47c36d.Color(_0xcf2590.limb.wall);
const _t = new _0x47c36d.Color(_0xcf2590.limb.shadow);
const Gt = new _0x47c36d.Color(_0xcf2590.groundAlt);
const Vt = new _0x47c36d.Color(_0xcf2590.limb.machine).lerp($t, 0.44);
function Wt(_0x44810d, _0x5ae606, _0x4bc031) {
  if (_0x5ae606.y > 0.55) {
    const _0x46d35d = Math.max(0, Math.min(1, (_0x44810d.z + 0.7) / 1.4));
    return _0x4bc031.copy(Vt).lerp(Gt, 0.1 + _0x46d35d * _0x46d35d * 0.34);
  }
  if (_0x5ae606.y < -0.55) {
    return _0x4bc031.copy(_t);
  }
  const _0x16ba8d = Math.max(0, Math.min(1, -_0x44810d.y / 0.62));
  const _0x254817 = _0x5ae606.z > 0.55 ? 0.1 : 0;
  _0x4bc031.copy($t).lerp(Gt, 0.08 + (1 - _0x16ba8d) * 0.14 + _0x254817);
  return _0x4bc031;
}
function Ut(_0x531495, _0x53bde3) {
  const _0x1246a8 = Math.min(0.34, _0x531495 * 0.14, _0x53bde3 * 0.12);
  return It([[-_0x531495 / 2, _0x53bde3 / 2], [_0x531495 / 2, _0x53bde3 / 2], [_0x531495 / 2, -_0x53bde3 / 2 + _0x1246a8 * 0.55], [_0x531495 / 2 - _0x1246a8, -_0x53bde3 / 2], [-_0x531495 / 2 + _0x1246a8 * 1.35, -_0x53bde3 / 2], [-_0x531495 / 2, -_0x53bde3 / 2 + _0x1246a8]], 2);
}
const Lt = new _0x47c36d.Color(_0xcf2590.limb.wall);
const Xt = new _0x47c36d.Color(_0xcf2590.limb.shadow);
const Ht = new _0x47c36d.Color(_0xcf2590.limb.machine).lerp(Lt, 0.48);
const Yt = new _0x47c36d.Color(_0xcf2590.groundAlt);
function Kt(_0x510b85, _0x57369d, _0xa9c06) {
  if (_0x57369d.y > 0.55) {
    const _0x4012fb = Math.max(0, Math.min(1, (_0x510b85.z + 1) * 0.5));
    return _0xa9c06.copy(Ht).lerp(Yt, 0.08 + _0x4012fb * _0x4012fb * 0.28);
  }
  if (Math.abs(_0x57369d.x) > 0.55) {
    return _0xa9c06.copy(Xt);
  } else {
    return _0xa9c06.copy(Lt);
  }
}
const qt = new _0x47c36d.Color(_0xcf2590.limb.wall);
const Zt = new _0x47c36d.Color(_0xcf2590.limb.machine);
function Jt(_0x40d9b4, _0x7e61f0, _0x298a72) {
  if (_0x7e61f0.y > 0.55) {
    const _0x3ed40c = Math.max(0, Math.min(1, (_0x40d9b4.z + 1) * 0.5));
    return _0x298a72.lerp(qt, 0.46).lerp(Zt, 0.06 + _0x3ed40c * _0x3ed40c * 0.18);
  }
  if (_0x7e61f0.y < -0.55) {
    return _0x298a72.lerp(qt, 0.92);
  }
  const _0x40b984 = Math.max(0, Math.min(1, 0.5 - _0x40d9b4.y));
  return _0x298a72.lerp(qt, 0.78 + _0x40b984 * 0.18);
}
function Qt(_0x4ca05b, _0x34f9b7, _0x1aeaf0) {
  const _0x4c4a65 = {
    position: [],
    normal: [],
    uv: [],
    color: [],
    vertices: 0
  };
  const _0x431813 = [];
  for (const _0x23ce8b of function (_0xa87efc, _0x23a489) {
    const _0x35abad = [];
    let _0x5a4379 = _0xa87efc;
    while (_0x5a4379 < _0x23a489) {
      const _0xb9f6a5 = Math.floor(_0x5a4379) + 1;
      const _0x134e7b = Math.min(_0x23a489, _0xb9f6a5);
      _0x35abad.push({
        x0: _0x5a4379,
        x1: _0x134e7b,
        s: (_0x5a4379 + _0x134e7b) * 0.5
      });
      _0x5a4379 = _0x134e7b;
    }
    return _0x35abad;
  }(_0x4ca05b.x0, _0x4ca05b.x1)) {
    const _0x37af63 = Ft(_0x23ce8b.x1 - _0x23ce8b.x0);
    St(_0x4c4a65, _0x37af63, new _0x47c36d.Matrix4().makeTranslation(_0x23ce8b.s - _0x34f9b7, 0, 0), _0x23ce8b.s, _0x4ca05b.y, _0x1aeaf0, _0xcf2590.catwalk, null, Wt);
    _0x37af63.dispose();
    _0x431813.push({
      s: _0x23ce8b.s,
      vertexEnd: _0x4c4a65.vertices
    });
  }
  return {
    geometry: kt(_0x4c4a65),
    rows: _0x431813.length,
    samples: _0x431813
  };
}
const en = Object.freeze([9, 6, 11, 7, 8, 10, 14]);
function tn(_0x12a74e, _0x1d0490, _0x2ead74) {
  if (!_0x538475) {
    return (Math.floor(_0x12a74e / 6) + Math.floor((_0x1d0490 - 1) / 2)) % 2;
  }
  const _0x1eb5d3 = _0x12a74e < _0x538634.path.introTiles ? 0 : _0x538634.path.introTiles + Math.max(0, _0x2ead74 - 1) * _0x538634.path.faceTiles;
  let _0x9de38b = Math.max(0, _0x12a74e - _0x1eb5d3);
  let _0x14a410 = 0;
  while (_0x14a410 < en.length - 1) {
    const _0x5dca84 = en[(_0x14a410 + _0x2ead74) % en.length];
    if (_0x9de38b < _0x5dca84) {
      break;
    }
    _0x9de38b -= _0x5dca84;
    _0x14a410++;
  }
  return (_0x14a410 + _0x2ead74 + Math.floor((_0x1d0490 - 1) / 2)) % 4;
}
if (!_0x16f1b0) {
  let nn = 0;
  for (let kn = 0; kn < _0x4bb1e3; kn++) {
    if (_0x3cd70c[kn] > -100) {
      nn += 4;
    }
  }
  const on = new _0x47c36d.BoxGeometry(1, 1, 2);
  const sn = _0x70d8d ? on.toNonIndexed() : null;
  const an = _0x70d8d ? [1.86, 1.68].map(_0x434393 => function (_0x20cea5, _0x29415b, _0x1ebf30) {
    const _0x19be45 = new _0x47c36d.BoxGeometry(_0x20cea5, _0x29415b, _0x1ebf30);
    const _0x169495 = _0x19be45.toNonIndexed();
    _0x19be45.dispose();
    return _0x169495;
  }(1, 1, _0x434393)) : null;
  const rn = _0x70d8d ? Array.from({
    length: 4
  }, (_0x3a97e3, _0x333447) => function (_0x2ef163) {
    const _0x21ec66 = [0.18, 0.31, 0.12, 0.25][_0x2ef163 % 4];
    const _0x3c364e = [0.28, 0.14, 0.34, 0.2][_0x2ef163 % 4];
    const _0x401a69 = [0.03, 0.14, 0.08, 0.18][_0x2ef163 % 4];
    const _0x22584d = It([[-0.5, 0.5], [0.5, 0.5], [0.5, -0.5 + _0x3c364e], [0.5 - _0x3c364e, _0x401a69 * 0.25 - 0.5], [0.16, -0.5 + _0x401a69], [-0.5 + _0x21ec66, -0.5], [-0.5, -0.5 + _0x21ec66]], 2);
    if (!_0x22584d.index) {
      return _0x22584d;
    }
    const _0x47854a = _0x22584d.toNonIndexed();
    _0x22584d.dispose();
    return _0x47854a;
  }(_0x333447)) : null;
  const ln = _0x70d8d ? new Map() : null;
  const cn = _0x3f854d(_0x1781e6(new _0x47c36d.MeshStandardMaterial({
    color: 16777215,
    vertexColors: true,
    flatShading: false
  }), "deck"));
  cn.name = "Meridian production hull panel";
  const un = _0x1781e6(new _0x47c36d.MeshStandardMaterial({
    color: 16777215,
    flatShading: true
  }), "deck");
  Q = _0x70d8d ? null : new _0x47c36d.InstancedMesh(on, un, nn);
  if (Q) {
    Q.frustumCulled = false;
  }
  const hn = new _0x47c36d.Color(_0xcf2590.ground);
  const mn = new _0x47c36d.Color(_0xcf2590.groundAlt);
  const fn = new _0x47c36d.Color(_0xcf2590.limb.wall);
  const dn = new _0x47c36d.Color(_0xcf2590.limb.rib);
  const pn = new _0x47c36d.Color(_0xcf2590.limb.shadow);
  const wn = new _0x47c36d.Color(_0xcf2590.limb.hull);
  const xn = [[fn.clone().lerp(hn, 0.42), fn.clone().lerp(dn, 0.18), fn.clone().lerp(pn, 0.32), pn.clone().lerp(wn, 0.1)], [fn.clone().lerp(dn, 0.12), fn.clone().lerp(dn, 0.1), fn.clone().lerp(pn, 0.46), pn.clone().lerp(wn, 0.04)], [wn.clone().lerp(fn, 0.52), fn.clone().lerp(pn, 0.24), pn.clone().lerp(wn, 0.22), pn.clone().lerp(wn, 0.02)], [fn.clone().lerp(hn, 0.1), fn.clone().lerp(dn, 0.28), fn.clone().lerp(pn, 0.38), pn.clone().lerp(wn, 0.07)]];
  const gn = _0x3b3528(_0x3cd70c, _0x538634, _0x4de02c);
  const bn = new _0x47c36d.Color();
  const Mn = new _0x47c36d.Euler(0, 0, 0, "YZX");
  let yn = 0;
  for (let Cn = 0; Cn < _0x4bb1e3; Cn++) {
    const zn = _0x31b602(Cn, _0x538634);
    ne[zn] ||= {
      col0: Cn,
      col1: Cn,
      inst0: yn,
      inst1: yn - 1
    };
    ne[zn].col1 = Cn;
    if (_0x3cd70c[Cn] < -100) {
      continue;
    }
    const Rn = _0x3fe016(_0x599411, Cn + 0.5);
    const An = _0x33ec0f(_0x599411, Cn + 0.5);
    te[Cn] = {
      start: yn,
      count: 4,
      settled: true
    };
    for (let Dn = 1; Dn <= 4; Dn++) {
      const Nn = _0x3cd70c[Cn] - Dn;
      const Pn = Cn + 0.5;
      const Tn = _0x43bc04 ? new _0x47c36d.Matrix4().makeRotationY(An) : new _0x47c36d.Matrix4().makeRotationFromEuler(Mn.set(0, An, ie(Pn), "YZX"));
      Tn.setPosition(Rn.x, Nn + 0.5 + re(Pn), Rn.z);
      ee.push(Tn);
      const On = gn.rows[Math.min(Dn, gn.rows.length) - 1] * gn.wear[Cn];
      const jn = tn(Cn, Dn, zn);
      if (ln) {
        const En = _0x1430f4(Pn);
        const In = En + ":" + zn;
        if (!ln.has(In)) {
          ln.set(In, {
            acc: yt(),
            columnEnds: new Map(),
            facet: En,
            phase: zn
          });
        }
        const Bn = ln.get(In);
        const Fn = _0x538475 ? xn[jn][Dn - 1] : jn === 0 ? hn : mn;
        const $n = Dn === 4 ? rn[(Cn + zn * 3) % rn.length] : Dn === 2 ? an[0] : Dn === 3 ? an[1] : sn;
        St(Bn.acc, $n, Tn, Pn, Nn + 0.5, zn, bn.copy(Fn).multiplyScalar(On), null, Dn === 1 ? Jt : null);
        Bn.columnEnds.set(Cn, Bn.acc.vertices);
      } else {
        Q.setMatrixAt(yn, Tn);
        Q.setColorAt(yn, bn.copy(jn === 0 ? hn : mn).multiplyScalar(On));
      }
      yn++;
    }
    ne[zn].inst1 = yn - 1;
  }
  if (ln) {
    Q = new _0x47c36d.Group();
    Q.name = "Meridian continuous route hull";
    Q.userData.environmentRole = "collision-faithful-painted-hull";
    let _n = 0;
    for (const Gn of ln.values()) {
      const {
        facet: Vn,
        phase: Wn
      } = Gn;
      const Un = new _0x47c36d.Mesh(kt(Gn.acc), cn);
      Un.name = "Meridian continuous route hull face " + Vn + " phase " + Wn;
      Un.userData.environmentRole = "collision-faithful-painted-hull-facet";
      Un.userData.routeFacet = Vn;
      Un.frustumCulled = false;
      const Ln = [...Gn.columnEnds].map(([_0x173835, _0x478dd3]) => ({
        s: _0x173835 + 0.5,
        vertexEnd: _0x478dd3
      }));
      ae.push({
        mesh: Un,
        facet: Vn,
        phase: Wn,
        samples: Ln,
        rows: Ln.length
      });
      Q.add(Un);
      _n += Gn.acc.vertices;
    }
    Q.userData.panelVertices = _n;
    on.dispose();
    sn.dispose();
    for (const Xn of an) {
      Xn.dispose();
    }
    for (const Hn of rn) {
      Hn.dispose();
    }
  } else {
    Q.instanceMatrix.needsUpdate = true;
    if (Q.instanceColor) {
      Q.instanceColor.needsUpdate = true;
    }
  }
  Q.frustumCulled = false;
  _0x191dc9.add(Q);
  const vn = _0x1781e6(new _0x47c36d.MeshStandardMaterial({
    color: _0xcf2590.solid,
    flatShading: true
  }), "plate");
  for (const Yn of _0x1fbaf5) {
    const Kn = (Yn.x0 + Yn.x1) / 2;
    const qn = (Yn.y0 + Yn.y1) / 2;
    const Zn = _0x3fe016(_0x599411, Kn);
    const Jn = _0x70d8d ? Ut(Yn.x1 - Yn.x0, Yn.y1 - Yn.y0) : new _0x47c36d.BoxGeometry(Yn.x1 - Yn.x0, Yn.y1 - Yn.y0, 2);
    const Qn = _0x70d8d ? jt(Jn, Kn, qn, _0x31b602(Kn, _0x538634), _0xcf2590.solid, Kt) : Jn;
    if (Qn !== Jn) {
      Jn.dispose();
    }
    const eo = new _0x47c36d.Mesh(Qn, _0x70d8d ? cn : vn);
    eo.position.set(Zn.x, qn + re(Kn), Zn.z);
    eo.rotation.y = _0x33ec0f(_0x599411, Kn);
    eo.userData.fixtureSolidId = Yn.id;
    _0x191dc9.add(eo);
    se.push({
      mesh: eo,
      facet: _0x1430f4(Kn),
      s: Kn
    });
  }
  const Sn = _0x1781e6(new _0x47c36d.MeshStandardMaterial({
    color: _0xcf2590.catwalk,
    flatShading: true
  }), "deck");
  for (const to of _0x3e82a8) {
    const no = to.x1 - to.x0;
    const oo = (to.x0 + to.x1) / 2;
    const so = _0x3fe016(_0x599411, oo);
    const ao = _0x1430f4(oo);
    const ro = _0x70d8d ? Qt(to, oo, ao) : null;
    const io = ro ? ro.geometry : new _0x47c36d.BoxGeometry(no, 0.18, 1.4);
    const lo = new _0x47c36d.Mesh(io, _0x70d8d ? cn : Sn);
    lo.position.set(so.x, to.y + (_0x70d8d ? 0 : -0.09) + re(oo), so.z);
    lo.rotation.y = _0x33ec0f(_0x599411, oo);
    if (!_0x43bc04) {
      lo.rotation.order = "YZX";
      lo.rotation.z = ie(oo);
    }
    lo.name = "Meridian profiled catwalk";
    lo.userData.environmentRole = "collision-faithful-painted-platform";
    _0x191dc9.add(lo);
    oe.push({
      mesh: lo,
      x0: to.x0,
      x1: to.x1,
      facet: ao,
      s: oo,
      rows: ro ? ro.rows : 1,
      samples: ro ? ro.samples : [{
        s: oo,
        vertexEnd: io.getAttribute("position").count
      }]
    });
  }
  (function () {
    if (_0x43bc04 === null && _0x4c9202.length) {
      for (const _0x38289c of _0x4c9202) {
        const _0x2a6835 = nt[_0x38289c.kind] || ot;
        const _0x3c695d = _0x38289c.y1 - _0x38289c.y0;
        const _0xfa74aa = (_0x38289c.y0 + _0x38289c.y1) / 2;
        for (const _0x4c777a of [-_0x2a6835.gap / 2, _0x2a6835.gap / 2]) {
          st.push({
            s: _0x38289c.x,
            y: _0xfa74aa,
            dx: _0x4c777a,
            depth: 0.94,
            length: _0x3c695d + 0.34,
            radius: _0x2a6835.radius,
            horizontal: false,
            color: _0x2a6835.rail,
            ladderId: _0x38289c.id,
            facet: _0x38289c.face
          });
        }
        const _0x44e93b = Math.max(2, Math.floor((_0x3c695d - 0.28) / _0x2a6835.pitch) + 1);
        for (let _0x2b6b55 = 0; _0x2b6b55 < _0x44e93b; _0x2b6b55++) {
          const _0x457273 = _0x44e93b === 1 ? 0.5 : _0x2b6b55 / (_0x44e93b - 1);
          at.push({
            s: _0x38289c.x,
            y: _0x38289c.y0 + 0.14 + _0x457273 * Math.max(0, _0x3c695d - 0.28),
            dx: 0,
            depth: 0.965,
            length: _0x2a6835.gap,
            radius: _0x2a6835.rungRadius,
            horizontal: true,
            color: _0x2a6835.rung,
            ladderId: _0x38289c.id,
            facet: _0x38289c.face
          });
        }
      }
      dt(st, "Meridian traversable ladder rails");
      dt(at, "Meridian traversable ladder rungs");
    }
  })();
  if (WORLD_DRESSING_ENABLED) {
    (function (_0xa583bd) {
      (function () {
        const _0x2940e9 = de.length;
        const _0x86cc6c = Ne.length;
        let _0x2b3950 = 0;
        let _0x5cccd1 = 0;
        for (let _0x341998 = 0; _0x341998 < _0x1fbaf5.length; _0x341998++) {
          const _0x2a429b = _0x1fbaf5[_0x341998];
          if (!_0x2a429b.assault) {
            continue;
          }
          const _0x379b79 = _0x2a429b.x1 - _0x2a429b.x0;
          const _0x53bc51 = _0x2a429b.y1 - _0x2a429b.y0;
          if (!(_0x379b79 > 0.36) || !(_0x53bc51 > 0.54)) {
            continue;
          }
          const _0x3afdff = (_0x2a429b.x0 + _0x2a429b.x1) / 2;
          const _0x29b808 = (_0x2a429b.y0 + _0x2a429b.y1) / 2;
          const _0x5ae3ad = _0x3afdff;
          const _0x451d7c = (_0x2a429b.face || _0x31b602(_0x3afdff, _0x538634) + 1) * 997 + _0x341998 * 131;
          const _0x1c1683 = Math.min(0.14, _0x379b79 * 0.14);
          const _0x448934 = Math.max(0, _0x379b79 / 2 - _0x1c1683 * 0.72);
          for (const _0x3f089f of [-1, 1]) {
            Ie(_0x3afdff + _0x3f089f * _0x448934, _0x29b808, 1.035, _0x1c1683, Math.max(0.3, _0x53bc51 - 0.22), 0.18, _0x3f089f < 0 ? _0xcf2590.limb.shadow : _0xcf2590.limb.wall, 0, _0x5ae3ad);
          }
          Ie(_0x3afdff, _0x2a429b.y1 - 0.09, 1.045, _0x379b79, 0.18, 0.2, _0xcf2590.groundAlt, 0, _0x5ae3ad);
          Ie(_0x3afdff, _0x2a429b.y0 + 0.08, 1.035, Math.max(0.42, _0x379b79 - 0.08), 0.16, 0.18, _0xcf2590.limb.shadow, 0, _0x5ae3ad);
          Ve(_0x3afdff, _0x2a429b.y1 - 0.16, 1.145, Math.max(0.42, _0x379b79 - 0.04), 0.29, _0x341998 & 1 ? "scute-edge" : "route-cap-long", _0x451d7c + 17, 0, _0x5ae3ad);
          const _0x1777e5 = _0x53bc51 >= 3.8;
          const _0x354219 = _0x1777e5 ? 1.08 : 0.34;
          const _0x28dd59 = 0.36;
          const _0x5878e9 = Math.max(0.3, _0x53bc51 - _0x354219 - _0x28dd59);
          const _0x870990 = Math.max(1, Math.ceil(_0x5878e9 / 0.88));
          const _0x426a8f = _0x5878e9 / _0x870990;
          const _0x256160 = Math.max(0.34, _0x379b79 - 0.28);
          const _0x494116 = Math.max(0.24, Math.min(0.7, _0x426a8f * 0.78));
          for (let _0x3bacb5 = 0; _0x3bacb5 < _0x870990; _0x3bacb5++) {
            const _0xd4dff8 = _0x2a429b.y0 + _0x354219 + _0x426a8f * (_0x3bacb5 + 0.5);
            Fe(_0x3afdff, _0xd4dff8, 1.055, _0x256160, _0x494116, 0.08, "surfaceCold", _0x451d7c + _0x3bacb5 * 73, 0, _0x5ae3ad);
            _0x5cccd1++;
            if ((_0x3bacb5 + _0x341998) % 2 == 0) {
              Ve(_0x3afdff, _0xd4dff8, 1.145, Math.min(_0x256160, 0.66), Math.min(_0x494116, 0.64), (_0x3bacb5 + _0x341998) % 4 == 0 ? "cross-brace" : "diagonal-brace", _0x451d7c + _0x3bacb5 * 109 + 41, 0, _0x5ae3ad);
            }
            if (_0x3bacb5 > 0) {
              Ie(_0x3afdff, _0xd4dff8 - _0x426a8f / 2, 1.105, Math.max(0.38, _0x379b79 - 0.16), 0.075, 0.11, _0xcf2590.limb.shadow, 0, _0x5ae3ad);
            }
          }
          if (_0x1777e5) {
            Fe(_0x3afdff, _0x2a429b.y0 + 0.58, 1.075, Math.max(0.46, _0x379b79 - 0.26), 0.48, 0.1, "serviceInspect", We[_0x341998 % We.length], 0, _0x5ae3ad);
            _0x5cccd1++;
          } else if (_0x53bc51 >= 1.3) {
            Ve(_0x3afdff, _0x2a429b.y0 + 0.08, 1.135, Math.max(0.42, _0x379b79 - 0.16), Math.min(0.68, _0x53bc51 * 0.38), "armor-shoulder", _0x451d7c + 211, 0, _0x5ae3ad);
          }
          _0x2b3950++;
        }
        le.authoredSolidSkins = _0x2b3950;
        le.authoredSolidSkinPanels = _0x5cccd1;
        le.authoredSolidSkinComponents = Ne.length - _0x86cc6c;
        le.authoredSolidSkinPrimitives = de.length - _0x2940e9;
      })();
      (function () {
        let _0x30985c = 0;
        let _0x54f931 = 0;
        while (_0x30985c < _0x4bb1e3) {
          const _0x24cb77 = _0x3cd70c[_0x30985c];
          if (_0x24cb77 < -100) {
            _0x30985c++;
            continue;
          }
          let _0x3d7755 = _0x30985c + 1;
          while (_0x3d7755 < _0x4bb1e3 && _0x3cd70c[_0x3d7755] === _0x24cb77 && _0x31b602(_0x3d7755, _0x538634) === _0x31b602(_0x30985c, _0x538634)) {
            _0x3d7755++;
          }
          const _0x35d277 = [9.2, 6.8, 11.4, 7.6, 8.5];
          let _0x1db085 = _0x30985c;
          while (_0x1db085 < _0x3d7755 - 0.35) {
            const _0x266488 = _0x35d277[_0x54f931 % _0x35d277.length];
            const _0x3f487a = Math.min(_0x3d7755, _0x1db085 + _0x266488);
            const _0x779920 = _0x3f487a - _0x1db085;
            const _0xd98898 = (_0x1db085 + _0x3f487a) / 2;
            const _0x52f426 = _0x3f487a - 0.001;
            const _0x29e99f = _0x54f931 % _0x35d277.length;
            if (_0x779920 >= 2) {
              const _0xdaa0ba = _0x51f278(_0x31b602(_0xd98898, _0x538634));
              const _0x267ee3 = _0x32fe54(_0xdaa0ba, _0x54f931, _0x29e99f);
              const _0x4fd92b = Math.min(_0x779920 - 0.66, [3.7, 3.25, 3.05, 3.45, 2.65][_0x29e99f]);
              const _0x48355f = [1.1, 1.02, 1.2, 0.92, 1.3][_0x29e99f];
              const _0x421f37 = _0xd98898 + _0x779920 * [-0.07, 0.08, 0.1, -0.04, -0.14][_0x29e99f];
              Fe(_0x421f37, _0x24cb77 - [2.16, 2.06, 2.34, 2.12, 2.2][_0x29e99f], 0.94, _0x4fd92b, _0x48355f, 0.08, _0x267ee3.surfaceRole, _0x54f931 + _0xdaa0ba * 131 + _0x29e99f * 17, [0, -0.018, 0.012, -0.025, 0.016][_0x29e99f], _0x52f426);
              if (_0x267ee3.apertureRole) {
                Fe(_0x421f37 + (_0x54f931 & 1 ? -1 : 1) * Math.min(_0x4fd92b * 0.27, 0.92), _0x24cb77 - [2.18, 2.04, 2.29, 2.17, 2.23][_0x29e99f], 1.035, Math.min(1.08, _0x4fd92b * 0.34), Math.min(0.88, _0x48355f * 0.82), 0.1, _0x267ee3.apertureRole, _0x267ee3.seed ^ 668265261, 0, _0x52f426);
              }
              Ze(_0x267ee3, _0xd98898, _0x24cb77, _0x779920, _0x29e99f, _0x52f426, _0x54f931);
              Je(_0x267ee3, _0xd98898, _0x24cb77, _0x779920, _0x1db085, _0x3f487a, _0x52f426, _0x54f931);
              const _0x15d76a = _0x1db085 + _0x779920 * [0.18, 0.72, 0.31, 0.64, 0.43][_0x29e99f];
              const _0x4ce364 = [-0.055, 0.038, -0.028, 0.046, -0.034][_0x29e99f];
              if (_0x29e99f === 0 || _0x29e99f === 3) {
                Ie(_0x15d76a, _0x24cb77 - 1.9, 0.955, 0.34, 2.64 + _0x29e99f % 2 * 0.3, 0.24, _0xcf2590.limb.wall, _0x4ce364, _0x52f426);
                Ie(_0x15d76a, _0x24cb77 - 0.62, 0.975, 0.92, 0.28, 0.3, _0xcf2590.limb.shadow, _0x4ce364 * 0.35, _0x52f426);
              }
              if (_0x29e99f === 0 && _0x779920 >= 4.2) {
                const _0x1bc2f2 = Math.min(3.9, _0x779920 * 0.54);
                const _0xe12165 = _0xd98898 - _0x779920 * 0.08;
                Ie(_0xe12165, _0x24cb77 - 2.18, 0.92, _0x1bc2f2, 1.02, 0.1, _0xcf2590.limb.shadow, 0, _0x52f426);
                Ie(_0xe12165 - _0x1bc2f2 * 0.48, _0x24cb77 - 2.06, 1.005, 0.28, 1.36, 0.22, _0xcf2590.limb.wall, -0.06, _0x52f426);
                Ie(_0xe12165 + _0x1bc2f2 * 0.48, _0x24cb77 - 2.32, 1.005, 0.38, 1.16, 0.22, _0xcf2590.limb.rib, 0.08, _0x52f426);
                for (const _0x17a7d4 of [-0.25, 0, 0.25]) {
                  Ie(_0xe12165, _0x24cb77 - 2.18 + _0x17a7d4, 0.995, _0x1bc2f2 * (_0x17a7d4 === 0 ? 0.76 : 0.68), 0.085, 0.1, _0xcf2590.limb.machine, _0x17a7d4 * 0.1, _0x52f426);
                }
              } else if (_0x29e99f === 1 && _0x779920 >= 3.8) {
                const _0x2524b1 = Math.min(3.6, _0x779920 * 0.58);
                $e(_0xd98898 - _0x779920 * 0.06, _0x24cb77 - 1.82, 1.01, _0x2524b1, 0.11, _0xcf2590.limb.machine, -Math.PI / 2, _0x52f426);
                $e(_0xd98898 + _0x779920 * 0.08, _0x24cb77 - 2.24, 0.99, _0x2524b1 * 0.72, 0.085, _0xcf2590.solid, -Math.PI / 2, _0x52f426);
                for (const _0x432e2b of [-_0x2524b1 * 0.34, _0x2524b1 * 0.18]) {
                  Ie(_0xd98898 + _0x432e2b, _0x24cb77 - 2.02, 1.04, 0.24, 0.86, 0.24, _0xcf2590.limb.wall, 0, _0x52f426);
                }
              } else if (_0x29e99f === 2 && _0x779920 >= 4.6) {
                const _0x383445 = Math.min(2.8, _0x779920 * 0.42);
                const _0x4a8b0c = _0xd98898 + _0x779920 * 0.1;
                Ie(_0x4a8b0c, _0x24cb77 - 2.34, 0.91, _0x383445, 1.26, 0.12, _0xcf2590.contactShadow, 0, _0x52f426);
                Ie(_0x4a8b0c - _0x383445 * 0.46, _0x24cb77 - 2.34, 1.01, 0.3, 1.42, 0.25, _0xcf2590.limb.wall, -0.1, _0x52f426);
                Ie(_0x4a8b0c + _0x383445 * 0.46, _0x24cb77 - 2.42, 1.01, 0.26, 1.18, 0.25, _0xcf2590.limb.wall, 0.07, _0x52f426);
                Ee(_0x4a8b0c - _0x383445 * 0.06, _0x24cb77 - 1.66, 1.035, _0x383445 * 1.06, 0.3, 0.32, _0xcf2590.solid, -0.025, _0x52f426);
                Ie(_0x4a8b0c + _0x383445 * 0.12, _0x24cb77 - 2.45, 1.02, _0x383445 * 0.44, 0.18, 0.14, _0xcf2590.limb.machine, 0, _0x52f426);
              } else if (_0x29e99f === 3 && _0x779920 >= 3.8) {
                const _0x1df499 = Math.min(3.1, _0x779920 * 0.5);
                Ie(_0xd98898, _0x24cb77 - 2.12, 0.92, _0x1df499, 0.82, 0.11, _0xcf2590.limb.shadow, 0, _0x52f426);
                Ee(_0xd98898 - _0x1df499 * 0.23, _0x24cb77 - 2, 1.005, _0x1df499 * 0.58, 0.34, 0.2, _0xcf2590.limb.wall, 0.15, _0x52f426);
                Ee(_0xd98898 + _0x1df499 * 0.21, _0x24cb77 - 2.26, 1.01, _0x1df499 * 0.52, 0.3, 0.2, _0xcf2590.solid, -0.12, _0x52f426);
              } else if (_0x29e99f === 4 && _0x779920 >= 4.2) {
                const _0x4f0c77 = _0xd98898 - _0x779920 * 0.14;
                Ie(_0x4f0c77, _0x24cb77 - 2.2, 0.92, 1.24, 1.48, 0.12, _0xcf2590.limb.shadow, 0.04, _0x52f426);
                for (const _0x1a1c2b of [-0.23, 0.23]) {
                  $e(_0x4f0c77 + _0x1a1c2b, _0x24cb77 - 2.2, 1.01, 1.22, 0.09, _0xcf2590.limb.machine, 0, _0x52f426);
                }
                for (const _0x43d5b7 of [_0x24cb77 - 1.55, _0x24cb77 - 2.82]) {
                  Ie(_0x4f0c77, _0x43d5b7, 1.025, 0.92, 0.24, 0.24, _0xcf2590.solid, 0, _0x52f426);
                }
              }
              if (_0x29e99f === 0 || _0x29e99f === 2) {
                Ee(_0xd98898 + (_0x29e99f === 0 ? _0x779920 * 0.19 : -_0x779920 * 0.16), _0x24cb77 - 3.72, 0.64, Math.min(2.7, _0x779920 * 0.31), 0.68 + _0x29e99f * 0.05, 0.56, _0xcf2590.limb.shadow, _0x29e99f === 0 ? -0.1 : 0.08, _0x52f426);
              }
            }
            _0x1db085 = _0x3f487a;
            _0x54f931++;
          }
          _0x30985c = _0x3d7755;
        }
      })();
      (function () {
        for (let _0x56c57f = 0; _0x56c57f < _0x3e82a8.length; _0x56c57f++) {
          const _0x5c4ab5 = _0x3e82a8[_0x56c57f];
          const _0x32568b = _0x5c4ab5.x1 - _0x5c4ab5.x0;
          if (_0x32568b < 1.1) {
            continue;
          }
          const _0x4d9aca = (_0x5c4ab5.x0 + _0x5c4ab5.x1) / 2;
          const _0x50f507 = _0x5c4ab5.x1 - 0.001;
          Ie(_0x4d9aca, _0x5c4ab5.y - 0.56, 0.43, Math.max(0.62, _0x32568b - 0.34), 0.46, 0.66, _0xcf2590.limb.shadow, 0, _0x50f507);
          Ie(_0x4d9aca, _0x5c4ab5.y - 0.34, 0.81, Math.max(0.44, _0x32568b - 0.64), 0.14, 0.22, _0xcf2590.limb.machine, 0, _0x50f507);
          if (!et(_0x5c4ab5, _0x56c57f, _0x32568b, _0x4d9aca, _0x50f507)) {
            if (_0x32568b >= 2.3) {
              const _0x4256ea = [0.34, 0.62, 0.43, 0.7][_0x56c57f % 4];
              const _0x2db578 = _0x5c4ab5.x0 + _0x32568b * _0x4256ea;
              const _0x4c1acb = Math.min(1.88, 1.02 + _0x32568b * 0.11);
              Ie(_0x2db578, _0x5c4ab5.y - 0.66 - _0x4c1acb / 2, 0.12, 0.52, _0x4c1acb, 0.7, _0xcf2590.limb.wall, [0.035, -0.026, 0.018, -0.042][_0x56c57f % 4], _0x50f507);
              Ie(_0x2db578, _0x5c4ab5.y - 0.72 - _0x4c1acb, 0.18, Math.min(1.42, _0x32568b * 0.36), 0.42, 0.76, _0xcf2590.limb.shadow, 0, _0x50f507);
              const _0x4b6ca2 = Math.min(1.46, _0x4c1acb * 0.86);
              const _0x17babd = Math.min(2.4, _0x32568b * 0.45);
              if (_0x32568b < 4.3) {
                Be(_0x4d9aca, _0x5c4ab5.y - 0.6 - _0x4b6ca2 / 2, -0.08, Math.min(_0x32568b - 0.38, _0x17babd * 1.12), _0x4b6ca2, 0.52, _0xcf2590.limb.wall, _0x56c57f, _0x50f507);
              } else {
                Be(_0x5c4ab5.x0 + _0x17babd * 0.54, _0x5c4ab5.y - 0.6 - _0x4b6ca2 / 2, -0.08, _0x17babd, _0x4b6ca2, 0.52, _0xcf2590.limb.wall, _0x56c57f, _0x50f507);
                Be(_0x5c4ab5.x1 - _0x17babd * 0.52, _0x5c4ab5.y - 0.6 - _0x4b6ca2 * 0.46, -0.08, _0x17babd * 0.92, _0x4b6ca2 * 0.92, 0.52, _0xcf2590.limb.shadow, _0x56c57f + 1, _0x50f507);
              }
              const _0x214868 = _0x5c4ab5.x0 + _0x32568b * [0.58, 0.4, 0.66][_0x56c57f % 3];
              const _0x17720e = Math.min(1.46, _0x32568b * 0.34);
              Ie(_0x214868, _0x5c4ab5.y - 0.3, 0.735, _0x17720e, 0.24, 0.1, _0xcf2590.contactShadow, 0, _0x50f507);
              Ie(_0x214868 - _0x17720e * 0.48, _0x5c4ab5.y - 0.3, 0.82, 0.14, 0.42, 0.18, _0xcf2590.limb.wall, -0.04, _0x50f507);
              Ie(_0x214868 + _0x17720e * 0.48, _0x5c4ab5.y - 0.32, 0.82, 0.18, 0.36, 0.18, _0xcf2590.limb.wall, 0.035, _0x50f507);
              if (_0x32568b >= 4.8 && _0x56c57f % 3 != 0) {
                const _0x403a7c = _0x5c4ab5.x0 + 0.42;
                const _0x1c5308 = _0x5c4ab5.x1 - 0.48;
                const _0xc33d50 = _0x56c57f % 2 ? 0.56 : 0.42;
                const _0x2ffc9a = Math.min(0.72, _0x32568b * 0.13);
                const _0x1a3c99 = _0x403a7c + (_0x1c5308 - _0x403a7c) * _0xc33d50;
                for (const _0x4c8114 of [_0x403a7c, _0x1a3c99 - _0x2ffc9a / 2, _0x1a3c99 + _0x2ffc9a / 2, _0x1c5308]) {
                  Ie(_0x4c8114, _0x5c4ab5.y + 0.34, -0.58, 0.16, 0.86, 0.18, _0xcf2590.limb.wall, 0, _0x50f507);
                }
                const _0x2e6103 = _0x1a3c99 - _0x2ffc9a / 2 - _0x403a7c;
                const _0x25b2eb = _0x1c5308 - (_0x1a3c99 + _0x2ffc9a / 2);
                if (_0x2e6103 > 0.24) {
                  Ie(_0x403a7c + _0x2e6103 / 2, _0x5c4ab5.y + 0.76, -0.58, _0x2e6103, 0.16, 0.18, _0xcf2590.limb.machine, 0, _0x50f507);
                }
                if (_0x25b2eb > 0.24) {
                  Ie(_0x1a3c99 + _0x2ffc9a / 2 + _0x25b2eb / 2, _0x5c4ab5.y + 0.76, -0.58, _0x25b2eb, 0.16, 0.18, _0xcf2590.limb.machine, 0, _0x50f507);
                }
              }
              if (_0x32568b >= 3.4 && _0x56c57f % 2 == 1) {
                const _0xc6d356 = _0x56c57f % 4 == 1 ? "guard-rail" : "broken-guard";
                Ve(_0x4d9aca + (_0x56c57f % 3 - 1) * 0.22, _0x5c4ab5.y + 0.08, -0.52, Math.min(3.35, _0x32568b * 0.56), 0.76, _0xc6d356, _0x56c57f * 733 + 19, 0, _0x50f507);
              }
            } else {
              Ie(_0x4d9aca, _0x5c4ab5.y - 0.82, 0.42, 0.46, 0.72, 0.58, _0xcf2590.limb.wall, 0, _0x50f507);
            }
            if (_0x32568b >= 5.2 && _0x56c57f % 5 == 2) {
              const _0x48ef8f = _0x4d9aca + Math.min(0.7, _0x32568b * 0.12);
              Fe(_0x48ef8f, _0x5c4ab5.y - 1.16, 0.66, 1.34, 0.72, 0.16, "structCatwalk", _0x56c57f * 47 + 11, 0, _0x50f507);
              Ie(_0x48ef8f, _0x5c4ab5.y - 1.02, 0.99, 0.86, 0.2, 0.1, _0xcf2590.limb.machine, 0, _0x50f507);
            }
          }
        }
      })();
      (function () {
        for (let _0x1afef7 = 0; _0x1afef7 < _0x4c9202.length; _0x1afef7++) {
          const _0x592b84 = _0x4c9202[_0x1afef7];
          const _0x2b4c4c = _0x592b84.y1 - _0x592b84.y0;
          if (_0x2b4c4c < 1.2) {
            continue;
          }
          const _0x199235 = _0x592b84.x + 0.001;
          const _0x4f505b = 1.46 + _0x1afef7 % 3 * 0.1;
          const _0xf71f61 = [_0x592b84.y0, _0x592b84.y1];
          Ve(_0x592b84.x, _0x592b84.y0, 0.76, 0.78, Math.min(3.6, _0x2b4c4c), "ladder-rail", _0x1afef7 * 911 + 7, 0, _0x199235);
          for (let _0x20a29d = 0; _0x20a29d < _0xf71f61.length; _0x20a29d++) {
            const _0x2b400d = _0xf71f61[_0x20a29d];
            Fe(_0x592b84.x, _0x2b400d, 0.7, _0x4f505b * 0.74, 0.68, 0.1, "structLadder", _0x1afef7 * 53 + _0x20a29d * 19, 0, _0x199235);
            Ie(_0x592b84.x, _0x2b400d, 0.73, _0x4f505b, 0.38, 0.46, _0xcf2590.limb.shadow, 0, _0x199235);
            for (const _0x39d34f of [-0.48, 0.48]) {
              Ie(_0x592b84.x + _0x39d34f, _0x2b400d, 0.96, 0.3, 0.52, 0.24, _0xcf2590.limb.wall, _0x39d34f < 0 ? -0.055 : 0.055, _0x199235);
            }
            Ie(_0x592b84.x + (_0x1afef7 % 2 ? -0.18 : 0.18), _0x2b400d, 1.08, 0.58, 0.16, 0.16, _0xcf2590.groundAlt, 0, _0x199235);
            const _0x558150 = _0x20a29d ? -1 : 1;
            Ie(_0x592b84.x + _0x558150 * 0.24, _0x2b400d + (_0x20a29d ? -0.01 : 0.01), 1.115, 0.17, 0.11, 0.055, _0xcf2590.seamPip, 0, _0x199235, "recessed-navigation-lens");
          }
        }
      })();
      (function () {
        if (!_0x538475 || _0x1e91d7.state === "off" || ze.length) {
          return;
        }
        const _0x314006 = [13.5, 33, 52];
        for (let _0x311a2d = 0; _0x311a2d < _0x538634.path.faces; _0x311a2d++) {
          const _0x37dd68 = _0x538634.path.introTiles + _0x311a2d * _0x538634.path.faceTiles;
          const _0x5ad6f6 = Math.min(_0x4bb1e3, _0x37dd68 + _0x538634.path.faceTiles);
          for (let _0x529740 = 0; _0x529740 < _0x314006.length; _0x529740++) {
            const _0x319182 = Xe[_0x311a2d][_0x529740];
            const _0x2c9ab6 = Ke.get(_0x319182);
            const _0x3d4b6f = Le(_0x37dd68 + _0x314006[_0x529740], _0x37dd68 + 7, _0x5ad6f6 - 7);
            if (_0x3d4b6f === null || !_0x2c9ab6) {
              continue;
            }
            const _0x5f2b80 = Math.max(0, Math.min(_0x3cd70c.length - 1, Math.floor(_0x3d4b6f)));
            const _0x3004f1 = _0x3cd70c[_0x5f2b80];
            let _0x5541a7 = false;
            for (const _0x56eb4e of _0x3e82a8) {
              if (_0x56eb4e.x1 >= _0x3d4b6f - 3.2 && _0x56eb4e.x0 <= _0x3d4b6f + 3.2) {
                _0x5541a7 = true;
                break;
              }
            }
            let _0x5ebf97 = false;
            for (let _0x4c100b = Math.max(0, _0x5f2b80 - 3); _0x4c100b <= Math.min(_0x3cd70c.length - 1, _0x5f2b80 + 3); _0x4c100b++) {
              if (_0x3cd70c[_0x4c100b] < -100) {
                _0x5ebf97 = true;
                break;
              }
            }
            const _0x4ffb21 = He[_0x319182] * (1 + _0x311a2d * 0.018 + (_0x5ebf97 ? 0.035 : 0) - (_0x5541a7 ? 0.015 : 0));
            const [_0x583bb3, _0x17c869, _0x5269c3, _0x582858] = _0x2c9ab6.ink;
            const _0x5534f6 = _0x4ffb21 / _0x5269c3;
            const _0x4b4986 = (_0x311a2d * 3 + _0x529740) % 4 == 1;
            const _0x4147b2 = (_0x583bb3 + _0x5269c3 / 2 - _0x34a58b.cellSize / 2) * _0x5534f6;
            const _0x44af23 = _0x34a58b.cellSize * _0x5534f6;
            const _0x385afb = _0x34a58b.cellSize * _0x5534f6;
            const _0x27805c = _0x3d4b6f - (_0x4b4986 ? -_0x4147b2 : _0x4147b2);
            const _0x1abadd = _0x3004f1 + Ye[_0x319182] + (_0x5541a7 ? 0.12 : 0);
            const _0x896c39 = _0x1abadd - (_0x34a58b.cellSize / 2 - _0x17c869) * _0x5534f6;
            const _0x35be40 = _0x582858 * _0x5534f6;
            const _0xc2ccc8 = _0x27805c + _0x44af23 / 2;
            const _0xd1fd0b = _0x27805c - _0x44af23 / 2;
            const _0x3305b1 = _0x1430f4(_0x3d4b6f);
            if (_0x1430f4(_0xd1fd0b + 0.001) === _0x3305b1 && _0x1430f4(_0xc2ccc8 - 0.001) === _0x3305b1) {
              ze.push({
                role: _0x319182,
                art: _0x2c9ab6,
                face: _0x311a2d,
                slot: _0x529740,
                s: _0x3d4b6f,
                facet: _0x3305b1,
                phase: _0x31b602(_0x3d4b6f, _0x538634),
                width: _0x4ffb21,
                visibleHeight: _0x35be40,
                scale: _0x5534f6,
                planeWidth: _0x44af23,
                planeHeight: _0x385afb,
                planeCenterS: _0x27805c,
                planeCenterY: _0x896c39,
                topY: _0x1abadd,
                visibilityS: _0xc2ccc8,
                startS: _0xd1fd0b,
                depth: 1.075 + _0x529740 * 0.008,
                shadowDepth: 1.026 + _0x529740 * 0.004,
                tilt: [-0.012, 0.009, -0.006][(_0x311a2d + _0x529740) % 3],
                flip: _0x4b4986,
                context: _0x5ebf97 ? "breach-edge" : _0x5541a7 ? "catwalk-service" : "armour-run"
              });
              le.detailRoles[_0x319182] = (le.detailRoles[_0x319182] || 0) + 1;
            } else {
              console.warn("HULLBREAKER world: skipped " + _0x319182 + "; full cell crossed facet " + _0x3305b1 + ".");
            }
          }
        }
        le.detailFixtures = ze.length;
      })();
      if (_0x1e91d7.state === "failed") {
        for (const _0x5af1ed of ze) {
          qe(_0x5af1ed);
        }
        le.detailFallbacks = ze.length;
      }
      const _0x4fa7d8 = _0x1781e6(new _0x47c36d.MeshStandardMaterial({
        color: 16777215,
        flatShading: true
      }), "machine");
      const _0x25f2dc = _0xdb0e1e.state === "ready" && !!_0xdb0e1e.tex;
      const _0x1a7379 = _0x25f2dc ? _0x1781e6(new _0x47c36d.MeshStandardMaterial({
        color: 16777215,
        map: _0xdb0e1e.tex,
        vertexColors: true,
        flatShading: false,
        fog: true
      }), "plate") : null;
      if (_0x1a7379) {
        _0x1a7379.name = "Meridian 64-choice foreground content pack";
        _0x1a7379.userData = {
          emissivePolicy: "none-ambient-action-state-only"
        };
      }
      const _0x5c4419 = _0x36a255.state === "ready" && !!_0x36a255.tex;
      const _0x5c391f = _0x5c4419 ? new _0x47c36d.MeshBasicMaterial({
        color: 16777215,
        map: _0x36a255.tex,
        vertexColors: true,
        transparent: true,
        alphaTest: _0x5e5f4c.alphaTest,
        depthWrite: true,
        depthTest: true,
        side: _0x47c36d.DoubleSide,
        forceSinglePass: true,
        fog: true,
        toneMapped: true
      }) : null;
      if (_0x5c391f) {
        _0x5c391f.name = "Meridian native-shape component vocabulary";
        _0x5c391f.alphaToCoverage = true;
        _0x5c391f.userData = {
          emissivePolicy: "none-ambient-action-state-only",
          nativeBounds: true,
          storageCellsVisible: false
        };
      }
      const _0x57daff = de.filter(_0x2cc67d => _0x2cc67d.surface === "pack");
      const _0x3e4012 = de.filter(_0x4f2fb2 => _0x4f2fb2.surface !== "machine" && _0x4f2fb2.surface !== "pack" && _0x4f2fb2.sx >= 0.95 && _0x4f2fb2.sy >= 0.45);
      tt(de.filter(_0x829c42 => _0x829c42.surface === "machine" || _0x829c42.surface !== "pack" && (_0x829c42.sx < 0.95 || _0x829c42.sy < 0.45)), new _0x47c36d.BoxGeometry(1, 1, 1), _0x4fa7d8, "Meridian industrial boxes");
      (function (_0xde1e03, _0x48c1b1) {
        if (!_0xde1e03.length || !_0x48c1b1) {
          return;
        }
        const _0xa68858 = new Map();
        const _0x130c7d = new _0x47c36d.BoxGeometry(1, 1, 1).toNonIndexed();
        for (const _0x16df3b of _0xde1e03) {
          const _0x242fb5 = _0x1430f4(_0x16df3b.s);
          const _0xe5be5c = _0x31b602(_0x16df3b.s, _0x538634);
          const _0x4f646c = _0x242fb5 + ":" + _0xe5be5c;
          if (!_0xa68858.has(_0x4f646c)) {
            _0xa68858.set(_0x4f646c, {
              rows: [],
              facet: _0x242fb5,
              phase: _0xe5be5c
            });
          }
          _0xa68858.get(_0x4f646c).rows.push(_0x16df3b);
        }
        for (const _0x4181f9 of _0xa68858.values()) {
          const {
            facet: _0x2ed5f7,
            phase: _0x113336
          } = _0x4181f9;
          const _0x9af6e0 = yt();
          const _0x167fbd = [];
          _0x4181f9.rows.sort((_0x49feb8, _0x1a0900) => _0x49feb8.s - _0x1a0900.s);
          for (const _0x5ec15c of _0x4181f9.rows) {
            St(_0x9af6e0, _0x130c7d, Ue(_0x5ec15c).clone(), _0x5ec15c.s, _0x5ec15c.y, _0x2ed5f7, _0x5ec15c.color, ye.set(_0x5ec15c.sx, _0x5ec15c.sy, _0x5ec15c.sz).clone());
            _0x167fbd.push({
              s: _0x5ec15c.s,
              vertexEnd: _0x9af6e0.vertices
            });
          }
          const _0x157f18 = new _0x47c36d.Mesh(kt(_0x9af6e0), _0x48c1b1);
          _0x157f18.name = "Meridian painted service bays face " + _0x2ed5f7 + " phase " + _0x113336;
          _0x157f18.userData.environmentRole = "painted-service-bays";
          _0x157f18.userData.routeFacet = _0x2ed5f7;
          _0x157f18.frustumCulled = false;
          _0x157f18.castShadow = true;
          _0x157f18.receiveShadow = true;
          ke.push({
            mesh: _0x157f18,
            facet: _0x2ed5f7,
            rows: _0x4181f9.rows.length,
            samples: _0x167fbd
          });
          _0x191dc9.add(_0x157f18);
          le.drawPools++;
        }
        _0x130c7d.dispose();
      })(_0x3e4012, _0xa583bd);
      if (_0x25f2dc) {
        (function (_0x6ee27, _0x256a86) {
          if (!_0x6ee27.length || !_0x256a86) {
            return;
          }
          const _0x149bff = new Map();
          const _0x43f2b5 = new _0x47c36d.PlaneGeometry(1, 1);
          const _0x16a692 = _0x43f2b5.toNonIndexed();
          _0x43f2b5.dispose();
          for (const _0x2c92da of _0x6ee27) {
            const _0x211d36 = _0x1430f4(_0x2c92da.s);
            const _0x28799b = _0x31b602(_0x2c92da.s, _0x538634);
            const _0xec49b = _0x211d36 + ":" + _0x28799b;
            if (!_0x149bff.has(_0xec49b)) {
              _0x149bff.set(_0xec49b, {
                rows: [],
                facet: _0x211d36,
                phase: _0x28799b
              });
            }
            _0x149bff.get(_0xec49b).rows.push(_0x2c92da);
          }
          for (const _0x11528a of _0x149bff.values()) {
            const _0xbd5f92 = yt();
            const _0x3adf58 = [];
            _0x11528a.rows.sort((_0x463e24, _0x3805fe) => (_0x463e24.visibilityS ?? _0x463e24.s) - (_0x3805fe.visibilityS ?? _0x3805fe.s));
            for (const _0x2217e3 of _0x11528a.rows) {
              St(_0xbd5f92, _0x16a692, Ue(_0x2217e3, _0x2217e3.sz / 2 + _0x1bad59(_0x385287.FOREGROUND_PACK_INLAY), 1).clone(), _0x2217e3.s, _0x2217e3.y, _0x11528a.facet, 16777215, ye.set(_0x2217e3.sx, _0x2217e3.sy, 1).clone(), null, _0x2217e3.packCell, _0x2217e3.packTransform);
              _0x3adf58.push({
                s: _0x2217e3.visibilityS ?? _0x2217e3.s,
                vertexEnd: _0xbd5f92.vertices
              });
            }
            const _0x484caa = new _0x47c36d.Mesh(kt(_0xbd5f92), _0x256a86);
            _0x484caa.name = "Meridian foreground pack face " + _0x11528a.facet + " phase " + _0x11528a.phase;
            _0x484caa.userData.environmentRole = "foreground-content-pack-inlays";
            _0x484caa.userData.routeFacet = _0x11528a.facet;
            _0x484caa.userData.packCells = [...new Set(_0x11528a.rows.map(_0x28718e => _0x28718e.packCell.index))];
            _0x484caa.frustumCulled = false;
            _0x484caa.castShadow = false;
            _0x484caa.receiveShadow = true;
            ke.push({
              mesh: _0x484caa,
              facet: _0x11528a.facet,
              rows: _0x11528a.rows.length,
              samples: _0x3adf58
            });
            _0x191dc9.add(_0x484caa);
            le.drawPools++;
            le.packDrawPools++;
          }
          _0x16a692.dispose();
        })(_0x57daff, _0x1a7379);
      }
      if (_0x5c4419) {
        (function (_0x590ec7, _0x9d4cd6) {
          if (!_0x590ec7.length || !_0x9d4cd6) {
            return;
          }
          const _0x1fc9ca = new Map();
          const _0x39a4f9 = new _0x47c36d.PlaneGeometry(1, 1);
          const _0x4c2b88 = _0x39a4f9.toNonIndexed();
          _0x39a4f9.dispose();
          for (const _0x4a3a2d of _0x590ec7) {
            const _0x420321 = _0x1430f4(_0x4a3a2d.anchorS ?? _0x4a3a2d.s);
            const _0x309229 = _0x31b602(_0x4a3a2d.anchorS ?? _0x4a3a2d.s, _0x538634);
            const _0x1d4128 = _0x420321 + ":" + _0x309229;
            if (!_0x1fc9ca.has(_0x1d4128)) {
              _0x1fc9ca.set(_0x1d4128, {
                rows: [],
                facet: _0x420321,
                phase: _0x309229
              });
            }
            _0x1fc9ca.get(_0x1d4128).rows.push(_0x4a3a2d);
          }
          for (const _0x2370c1 of _0x1fc9ca.values()) {
            const _0x1e1fed = yt();
            const _0x41d74d = [];
            _0x2370c1.rows.sort((_0x3ad04b, _0x43de73) => (_0x3ad04b.visibilityS ?? _0x3ad04b.anchorS ?? _0x3ad04b.s) - (_0x43de73.visibilityS ?? _0x43de73.anchorS ?? _0x43de73.s));
            for (const _0x3bbbe3 of _0x2370c1.rows) {
              St(_0x1e1fed, _0x4c2b88, Ue(_0x3bbbe3, 0, 1).clone(), _0x3bbbe3.s, _0x3bbbe3.y, _0x2370c1.facet, 16777215, ye.set(_0x3bbbe3.sx, _0x3bbbe3.sy, 1).clone(), null, _0x3bbbe3.component, {
                mirrorX: _0x3bbbe3.componentTransform.mirrorX,
                quarterTurns: 0
              }, _0x5e5f4c.canvas);
              _0x41d74d.push({
                s: _0x3bbbe3.visibilityS ?? _0x3bbbe3.anchorS ?? _0x3bbbe3.s,
                vertexEnd: _0x1e1fed.vertices
              });
            }
            const _0x125e59 = new _0x47c36d.Mesh(kt(_0x1e1fed), Et(_0x9d4cd6, _0x2370c1));
            _0x125e59.name = "Meridian native components face " + _0x2370c1.facet + " phase " + _0x2370c1.phase;
            _0x125e59.userData.environmentRole = "native-shape-component-composition";
            _0x125e59.userData.routeFacet = _0x2370c1.facet;
            _0x125e59.userData.components = [...new Set(_0x2370c1.rows.map(_0x1ee294 => _0x1ee294.componentId))];
            _0x125e59.frustumCulled = false;
            _0x125e59.castShadow = false;
            _0x125e59.receiveShadow = true;
            ke.push({
              mesh: _0x125e59,
              facet: _0x2370c1.facet,
              rows: _0x2370c1.rows.length,
              samples: _0x41d74d
            });
            _0x191dc9.add(_0x125e59);
            le.drawPools++;
            le.componentDrawPools++;
          }
          _0x4c2b88.dispose();
        })(Ne, _0x5c391f);
      }
      tt(pe, new _0x47c36d.CylinderGeometry(1, 1, 1, 8, 1), _0x4fa7d8, "Meridian service pipes");
      for (let _0x5da740 = 0; _0x5da740 < 3; _0x5da740++) {
        tt(we.filter(_0x119394 => _0x119394.variant === _0x5da740), Bt(_0x5da740), _0x4fa7d8, "Meridian catwalk gussets " + _0x5da740);
      }
      if (_0x1e91d7.state === "ready") {
        (function () {
          if (!ze.length || !_0x1e91d7.tex) {
            return;
          }
          const _0x50f631 = new Map();
          for (const _0xdd7d5a of ze) {
            const _0x151945 = _0xdd7d5a.facet + ":" + _0xdd7d5a.phase;
            if (!_0x50f631.has(_0x151945)) {
              _0x50f631.set(_0x151945, {
                rows: [],
                facet: _0xdd7d5a.facet,
                phase: _0xdd7d5a.phase
              });
            }
            _0x50f631.get(_0x151945).rows.push(_0xdd7d5a);
          }
          const _0x231864 = new _0x47c36d.MeshBasicMaterial({
            color: 16777215,
            map: _0x1e91d7.tex,
            vertexColors: true,
            alphaTest: 0.055,
            transparent: false,
            depthWrite: true,
            depthTest: true,
            side: _0x47c36d.DoubleSide,
            fog: true,
            toneMapped: true
          });
          _0x231864.name = "Meridian sparse fixture atlas";
          _0x231864.alphaToCoverage = true;
          for (const _0x16577d of _0x50f631.values()) {
            const _0x3b5aed = yt();
            const _0x3589bb = [];
            _0x16577d.rows.sort((_0x5ae30e, _0x52b00f) => _0x5ae30e.visibilityS - _0x52b00f.visibilityS);
            for (const _0xc4580c of _0x16577d.rows) {
              Tt(_0x3b5aed, _0xc4580c, true);
              Tt(_0x3b5aed, _0xc4580c, false);
              _0x3589bb.push({
                s: _0xc4580c.visibilityS,
                vertexEnd: _0x3b5aed.vertices
              });
            }
            const _0x228fa2 = new _0x47c36d.Mesh(kt(_0x3b5aed), _0x231864);
            _0x228fa2.name = "Meridian sparse fixtures face " + _0x16577d.facet + " phase " + _0x16577d.phase;
            _0x228fa2.userData.environmentRole = "sparse-authored-meridian-fixtures";
            _0x228fa2.userData.routeFacet = _0x16577d.facet;
            _0x228fa2.userData.fixtureCount = _0x16577d.rows.length;
            _0x228fa2.frustumCulled = false;
            _0x228fa2.castShadow = false;
            _0x228fa2.receiveShadow = true;
            const _0x19c920 = {
              mesh: _0x228fa2,
              facet: _0x16577d.facet,
              phase: _0x16577d.phase,
              samples: _0x3589bb,
              rows: _0x16577d.rows.length,
              vertexStride: 12
            };
            Ce.push(_0x19c920);
            _0x191dc9.add(_0x228fa2);
            le.drawPools++;
            le.detailDrawPools++;
            le.detailVertices += _0x3b5aed.vertices;
            le.detailTriangles += _0x3b5aed.vertices / 3;
          }
        })();
      }
      le.boxes = de.length;
      le.pipes = pe.length;
      le.gussets = we.length;
      le.packPlacements = _0x57daff.length;
      le.packCellsUsed = new Set(_0x57daff.map(_0x27eb35 => _0x27eb35.packCell.index)).size;
      const _0x569df7 = [...de, ...pe, ...we, ...Ne].filter(_0x1587e8 => _0x1587e8.componentId);
      le.componentPlacements = _0x569df7.length;
      le.componentUnique = new Set(_0x569df7.map(_0x55adb7 => _0x55adb7.componentId)).size;
      for (const _0x5a2e18 of _0x569df7) {
        const _0xa9b9cd = _0x43e48d(_0x5a2e18.componentId);
        const _0x4276fb = _0xa9b9cd?.category || "unclassified";
        le.componentCategories[_0x4276fb] = (le.componentCategories[_0x4276fb] || 0) + 1;
      }
      le.responseSockets = Ae.length;
      for (const _0x308a0e of Ae) {
        le.responseSocketKinds[_0x308a0e.kind] = (le.responseSocketKinds[_0x308a0e.kind] || 0) + 1;
        le.responseStates[_0x308a0e.state] = (le.responseStates[_0x308a0e.state] || 0) + 1;
      }
      le.lights = 0;
      Te = "";
      updateWorldDressingCull();
    })(cn);
  }
  _0x133738();
  Te = "";
  updateWorldDressingCull();
}