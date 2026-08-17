import * as _0x21c80b from "three";
import { ASSET_PATHS as _0x4dc9c9, STORM_PALETTE as _0x467704 } from "../shared/contracts.js";
import { addCollapsePlate as _0x3efb1c } from "./rescueContent.js";
import { createShearMarker as _0x3a32df, createRestAltarProp as _0xcefd56, createChargeMoteProp as _0x4ba9c0, createBeaconGateFrame as _0x5c3861, createSpiritWispProp as _0x1b449d, createAmberAnchorProp as _0x3fd83b, createBeaconLanternProp as _0x26e577, createStormFieldDecal as _0x30d7cb, addGalleryArches as _0x41ebde, createSpireCrown as _0x4e6423 } from "./props/markers.js";
const x = 0.6;
function u(_0x4eaf85, _0x8aef46, _0x5354de, _0x147af4, _0x9d3e4c, _0x453fbc, _0x281235) {
  const _0x57a875 = _0x4eaf85.assets.spawn(_0x8aef46, {
    name: _0x147af4.name ?? _0x8aef46,
    targetSize: _0x281235
  });
  var _0x181841;
  var _0x350313;
  _0x57a875.root.position.set(_0x147af4.x ?? 0, _0x147af4.y ?? 0, _0x147af4.z ?? 0);
  if (Number.isFinite(_0x147af4.yaw)) {
    _0x57a875.root.rotation.y = _0x147af4.yaw;
  }
  _0x181841 = _0x57a875.root;
  _0x350313 = _0x9d3e4c;
  _0x181841.traverse(_0x270093 => {
    if (_0x270093.isMesh) {
      _0x270093.castShadow = true;
      _0x270093.receiveShadow = true;
      _0x270093.material = _0x350313;
    }
  });
  _0x5354de.add(_0x57a875.root);
  _0x453fbc.push(() => _0x57a875.dispose());
  return _0x57a875;
}
function z(_0x3dcc24) {
  const {
    parent: _0x29e60c,
    physics: _0x44cdea,
    topMat: _0x203a62,
    sideMat: _0x4ab15a,
    cx: _0x5982e5,
    cz: _0x127962,
    halfX: _0x106e33,
    halfZ: _0x25148e,
    name: _0x5b0f7a,
    supportColliders: _0x5a54b9,
    disposers: _0x313477
  } = _0x3dcc24;
  const _0x459370 = new _0x21c80b.Group();
  _0x459370.name = _0x5b0f7a;
  _0x459370.position.set(_0x5982e5, -0.6, _0x127962);
  const _0x3045ec = new _0x21c80b.BoxGeometry(_0x106e33 * 2, 0.18, _0x25148e * 2);
  const _0x10810f = new _0x21c80b.Mesh(_0x3045ec, _0x203a62);
  _0x10810f.position.y = 0.51;
  _0x10810f.castShadow = true;
  _0x10810f.receiveShadow = true;
  _0x459370.add(_0x10810f);
  const _0x29ebf6 = new _0x21c80b.BoxGeometry(_0x106e33 * 2 * 0.96, 1.08, _0x25148e * 2 * 0.96);
  const _0x2e2831 = new _0x21c80b.Mesh(_0x29ebf6, _0x4ab15a);
  _0x2e2831.position.y = -0.04;
  _0x2e2831.castShadow = true;
  _0x2e2831.receiveShadow = true;
  _0x459370.add(_0x2e2831);
  const _0x555533 = new _0x21c80b.BoxGeometry(_0x106e33 * 2 + 0.28, 0.2, _0x25148e * 2 + 0.28);
  const _0x50c5b6 = new _0x21c80b.Mesh(_0x555533, _0x4ab15a);
  _0x50c5b6.position.y = x - 0.26;
  _0x50c5b6.castShadow = true;
  _0x459370.add(_0x50c5b6);
  _0x29e60c.add(_0x459370);
  const _0x530e62 = _0x44cdea.createFixed(_0x459370);
  const _0x18bd2d = _0x44cdea.createCollider(_0x44cdea.RAPIER.ColliderDesc.cuboid(_0x106e33, x, _0x25148e).setFriction(0.9).setRestitution(0), _0x530e62);
  _0x5a54b9.push(_0x18bd2d);
  _0x313477.push(() => {
    try {
      _0x44cdea.removeCollider?.(_0x18bd2d);
    } catch {}
    try {
      _0x530e62.dispose?.();
    } catch {}
    _0x3045ec.dispose();
    _0x29ebf6.dispose();
    _0x555533.dispose();
    _0x459370.removeFromParent();
  });
  return {
    group: _0x459370,
    collider: _0x18bd2d,
    fixed: _0x530e62,
    halfX: _0x106e33,
    halfZ: _0x25148e,
    cx: _0x5982e5,
    cz: _0x127962
  };
}
export async function buildBeatsCSpire(_0x1cee8c, _0x36de11, _0x4e04e9) {
  if (!_0x1cee8c?.scene || !_0x1cee8c?.assets) {
    throw new Error("buildBeatsCSpire requires a live og-engine game.");
  }
  if (!_0x36de11?.RAPIER || !_0x36de11.createFixed || !_0x36de11.createCollider) {
    throw new Error("buildBeatsCSpire requires a Rapier physics adapter.");
  }
  if (!_0x4e04e9) {
    throw new Error("buildBeatsCSpire requires priorWorld from buildBeatsAB.");
  }
  await _0x1cee8c.assets.load([{
    id: "platform-stone",
    url: _0x4dc9c9.platformStone,
    type: "gltf"
  }, {
    id: "cliff-steps",
    url: _0x4dc9c9.cliffSteps,
    type: "gltf"
  }, {
    id: "stairs-wide",
    url: _0x4dc9c9.stairsWide,
    type: "gltf"
  }, {
    id: "slate-diffuse",
    url: _0x4dc9c9.slateDiffuse,
    type: "texture",
    semantic: "color"
  }]);
  const _0x253958 = new _0x21c80b.Group();
  _0x253958.name = "BeatsCSpire";
  _0x1cee8c.scene.add(_0x253958);
  const _0x2c7dcf = [];
  const _0x37d21e = [];
  const _0x1c0dd8 = [];
  const _0x243463 = [];
  const _0x37cce2 = [];
  const _0x242930 = [];
  const _0x43b28b = [];
  const _0x4ad13f = [];
  const _0x35b3ac = [];
  const _0xe49491 = [];
  const _0xe37dde = [];
  const _0x13e8cf = [];
  const _0x2a766a = {
    c1: null,
    c2: null,
    c3: null,
    c4: null,
    cRest: null,
    c6: null,
    c7: null,
    cApproach: null,
    cGate: null,
    sApproach: null,
    sBridgeSafe1: null,
    sBridgeSafe2: null,
    sRing: null
  };
  const _0x28c049 = _0x1cee8c.assets.texture("slate-diffuse");
  const _0x2142dd = function (_0x17350c) {
    const _0x59e629 = _0x17350c.clone();
    _0x59e629.colorSpace = _0x21c80b.SRGBColorSpace;
    _0x59e629.wrapS = _0x59e629.wrapT = _0x21c80b.RepeatWrapping;
    _0x59e629.repeat.set(2, 2);
    _0x59e629.needsUpdate = true;
    return new _0x21c80b.MeshStandardMaterial({
      name: "VioletSlateGalleries",
      map: _0x59e629,
      color: new _0x21c80b.Color(8028316),
      roughness: 0.84,
      metalness: 0.07,
      envMapIntensity: 0.88
    });
  }(_0x28c049);
  const _0x2c5c0b = new _0x21c80b.MeshStandardMaterial({
    name: "DeepVioletStone",
    color: new _0x21c80b.Color(3814736),
    roughness: 0.92,
    metalness: 0.04,
    envMapIntensity: 0.55
  });
  const _0x4d11a4 = new _0x21c80b.MeshStandardMaterial({
    name: "GalleryPillarStone",
    color: new _0x21c80b.Color(5130344),
    roughness: 0.88,
    metalness: 0.06,
    envMapIntensity: 0.7
  });
  const _0x30dcf8 = new _0x21c80b.MeshStandardMaterial({
    name: "GalleryVioletAccentShared",
    color: 4864616,
    emissive: new _0x21c80b.Color(_0x467704.violet),
    emissiveIntensity: 0.16,
    roughness: 0.7,
    metalness: 0.08
  });
  _0x2c7dcf.push(() => {
    _0x2142dd.map?.dispose?.();
    _0x2142dd.dispose();
    _0x2c5c0b.dispose();
    _0x4d11a4.dispose();
    _0x30dcf8.dispose();
  });
  let _0x4d9050 = function (_0x2d9152) {
    const _0x9c55d2 = _0x2d9152?.routeSpineExtended ?? _0x2d9152?.routeSpine ?? [];
    const _0xc35a61 = _0x9c55d2.find(_0x32e47f => _0x32e47f.id === "b-end");
    if (_0xc35a61 && Number.isFinite(_0xc35a61.z)) {
      return _0xc35a61.z + 1.4 + 0.2;
    }
    const _0x40fc71 = _0x9c55d2.find(_0x223d5b => _0x223d5b.id === "b-gate");
    if (_0x40fc71 && Number.isFinite(_0x40fc71.z)) {
      return _0x40fc71.z + 3.2;
    }
    if (_0x9c55d2.length > 0) {
      const _0x5c617e = _0x9c55d2[_0x9c55d2.length - 1];
      if (Number.isFinite(_0x5c617e.z)) {
        return _0x5c617e.z + 1.6;
      }
    }
    return 72;
  }(_0x4e04e9);
  const _0x28cfa1 = (_0x3dadf0, _0x42f17c) => {
    const _0x3e7274 = _0x4d9050 + _0x3dadf0 + _0x42f17c;
    _0x4d9050 = _0x3e7274 + _0x42f17c;
    return _0x3e7274;
  };
  const _0x24cbcb = 1.5;
  const _0x2cf105 = 1.2;
  {
    const _0x483144 = _0x28cfa1(2.6, _0x2cf105);
    _0x2a766a.c1 = {
      x: 0,
      z: _0x483144
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x483144,
      halfX: _0x24cbcb,
      halfZ: _0x2cf105,
      name: "C-Pad-1",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, 0, _0x483144, _0x24cbcb, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8
    });
    u(_0x1cee8c, "platform-stone", _0x253958, {
      x: 0,
      y: 0,
      z: _0x483144,
      name: "c-tile-1"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.7,
      y: 0.45,
      z: 2.1
    });
    _0x13e8cf.push({
      id: "c-1",
      x: 0,
      y: 1.2,
      z: _0x483144
    });
  }
  {
    const _0x3bd8d6 = _0x28cfa1(2.55, 1.05);
    _0x1c0dd8.push(_0x3efb1c({
      parent: _0x253958,
      physics: _0x36de11,
      slateMap: _0x28c049,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x3bd8d6,
      halfX: 1.3,
      halfZ: 1.05,
      collapseId: "c-collapse-1",
      segment: "beatC",
      disposers: _0x2c7dcf,
      supportColliders: _0x37d21e
    }));
    _0x13e8cf.push({
      id: "c-collapse-1",
      x: 0,
      y: 1.2,
      z: _0x3bd8d6
    });
  }
  {
    const _0x1cfd2b = _0x4d9050;
    const _0x1f057f = 2.75;
    const _0x1f8be1 = _0x28cfa1(_0x1f057f, _0x2cf105);
    const _0x173ce9 = _0x1cfd2b + _0x1f057f * 0.5;
    const _0x4d3f11 = _0x3a32df(_0x253958, {
      x: 0,
      y: 0,
      z: _0x173ce9
    }, {
      side: 1
    }, _0x2c7dcf);
    _0x243463.push({
      shearId: "c-shear-1",
      segment: "beatC",
      center: {
        x: 0,
        y: 1.45,
        z: _0x173ce9
      },
      halfExtents: {
        x: 2.35,
        y: 1.65,
        z: _0x1f057f * 0.48
      },
      impulse: {
        x: 5.6,
        y: 0.12,
        z: 0
      },
      markerRoot: _0x4d3f11,
      cooldown: 0.85
    });
    _0x2a766a.c2 = {
      x: 0.25,
      z: _0x1f8be1
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0.25,
      cz: _0x1f8be1,
      halfX: _0x24cbcb,
      halfZ: _0x2cf105,
      name: "C-Pad-2",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, 0.25, _0x1f8be1, _0x24cbcb, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8
    });
    u(_0x1cee8c, "platform-stone", _0x253958, {
      x: 0.25,
      y: 0,
      z: _0x1f8be1,
      name: "c-tile-2"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.7,
      y: 0.45,
      z: 2.1
    });
    _0x13e8cf.push({
      id: "c-2",
      x: 0.25,
      y: 1.2,
      z: _0x1f8be1
    });
  }
  {
    const _0x3150db = _0x28cfa1(2.6, _0x2cf105);
    _0x2a766a.c3 = {
      x: -0.2,
      z: _0x3150db
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: -0.2,
      cz: _0x3150db,
      halfX: _0x24cbcb,
      halfZ: _0x2cf105,
      name: "C-Pad-3",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, -0.2, _0x3150db, _0x24cbcb, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8
    });
    _0x13e8cf.push({
      id: "c-3",
      x: -0.2,
      y: 1.2,
      z: _0x3150db
    });
  }
  {
    const _0x3e474e = {
      x: 1.6,
      y: 1.4,
      z: 1.35
    };
    const _0xc1aed5 = {
      x: 0.3,
      y: 0,
      z: _0x4d9050 + 1.15
    };
    const _0x481c19 = _0x30d7cb(_0x253958, _0xc1aed5, _0x3e474e, _0x2c7dcf);
    _0xe37dde.push({
      fieldId: "c-storm-1",
      segment: "beatC",
      center: {
        x: _0xc1aed5.x,
        y: 0 + _0x3e474e.y * 0.35,
        z: _0xc1aed5.z
      },
      halfExtents: _0x3e474e,
      decalRoot: _0x481c19
    });
  }
  {
    const _0x47b853 = _0x28cfa1(2.7, 1);
    _0x1c0dd8.push(_0x3efb1c({
      parent: _0x253958,
      physics: _0x36de11,
      slateMap: _0x28c049,
      sideMat: _0x2c5c0b,
      cx: 0.1,
      cz: _0x47b853,
      halfX: 1.28,
      halfZ: 1,
      collapseId: "c-collapse-2",
      segment: "beatC",
      disposers: _0x2c7dcf,
      supportColliders: _0x37d21e
    }));
    _0x13e8cf.push({
      id: "c-collapse-2",
      x: 0.1,
      y: 1.2,
      z: _0x47b853
    });
  }
  {
    const _0x243dcd = _0x4d9050;
    const _0x30f694 = 2.85;
    const _0x3a43b8 = _0x28cfa1(_0x30f694, _0x2cf105);
    const _0x224b51 = _0x243dcd + _0x30f694 * 0.5;
    const _0x156bdc = _0x3a32df(_0x253958, {
      x: 0,
      y: 0,
      z: _0x224b51
    }, {
      side: -1
    }, _0x2c7dcf);
    _0x243463.push({
      shearId: "c-shear-2",
      segment: "beatC",
      center: {
        x: 0,
        y: 1.45,
        z: _0x224b51
      },
      halfExtents: {
        x: 2.4,
        y: 1.65,
        z: _0x30f694 * 0.48
      },
      impulse: {
        x: -5.9,
        y: 0.12,
        z: 0
      },
      markerRoot: _0x156bdc,
      cooldown: 0.85
    });
    _0x2a766a.c4 = {
      x: 0,
      z: _0x3a43b8
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x3a43b8,
      halfX: 1.55,
      halfZ: _0x2cf105,
      name: "C-Pad-4",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, 0, _0x3a43b8, 1.55, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8
    });
    u(_0x1cee8c, "platform-stone", _0x253958, {
      x: 0,
      y: 0,
      z: _0x3a43b8,
      name: "c-tile-4"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.8,
      y: 0.45,
      z: 2.15
    });
    _0x13e8cf.push({
      id: "c-4",
      x: 0,
      y: 1.2,
      z: _0x3a43b8
    });
  }
  {
    const _0x17d592 = _0x28cfa1(2.65, 1.05);
    _0x1c0dd8.push(_0x3efb1c({
      parent: _0x253958,
      physics: _0x36de11,
      slateMap: _0x28c049,
      sideMat: _0x2c5c0b,
      cx: -0.15,
      cz: _0x17d592,
      halfX: 1.25,
      halfZ: 1.05,
      collapseId: "c-collapse-3",
      segment: "beatC",
      disposers: _0x2c7dcf,
      supportColliders: _0x37d21e
    }));
    _0x13e8cf.push({
      id: "c-collapse-3",
      x: -0.15,
      y: 1.2,
      z: _0x17d592
    });
  }
  {
    const _0x25ae4a = _0x28cfa1(2.7, 1.4);
    _0x2a766a.cRest = {
      x: 0,
      z: _0x25ae4a
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x25ae4a,
      halfX: 1.75,
      halfZ: 1.4,
      name: "C-Pad-Rest",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, 0, _0x25ae4a, 1.75, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8,
      height: 2.7,
      spanZ: 1.3
    });
    u(_0x1cee8c, "platform-stone", _0x253958, {
      x: 0,
      y: 0,
      z: _0x25ae4a,
      name: "c-tile-rest"
    }, _0x2142dd, _0x2c7dcf, {
      x: 3.1,
      y: 0.45,
      z: 2.5
    });
    const _0x5a63e2 = {
      x: -1.15,
      y: 0,
      z: _0x25ae4a + 0.1
    };
    const _0x959e2c = _0xcefd56(_0x253958, _0x5a63e2, _0x2c7dcf);
    _0x37cce2.push({
      restId: "c-rest-1",
      segment: "beatC",
      center: {
        x: _0x5a63e2.x,
        y: 0,
        z: _0x5a63e2.z
      },
      radius: 1.4,
      restore: 1,
      propRoot: _0x959e2c
    });
    _0x13e8cf.push({
      id: "c-rest",
      x: 0,
      y: 1.2,
      z: _0x25ae4a
    });
  }
  {
    const _0x4bad0d = _0x28cfa1(2.6, _0x2cf105);
    _0x2a766a.c6 = {
      x: 0.3,
      z: _0x4bad0d
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0.3,
      cz: _0x4bad0d,
      halfX: _0x24cbcb,
      halfZ: _0x2cf105,
      name: "C-Pad-6",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, 0.3, _0x4bad0d, _0x24cbcb, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8
    });
    _0x13e8cf.push({
      id: "c-6",
      x: 0.3,
      y: 1.2,
      z: _0x4bad0d
    });
  }
  {
    const _0x389931 = {
      x: 1.55,
      y: 1.35,
      z: 1.4
    };
    const _0x3d7750 = {
      x: -0.25,
      y: 0,
      z: _0x4d9050 + 1.2
    };
    const _0x2a557f = _0x30d7cb(_0x253958, _0x3d7750, _0x389931, _0x2c7dcf);
    _0xe37dde.push({
      fieldId: "c-storm-2",
      segment: "beatC",
      center: {
        x: _0x3d7750.x,
        y: 0 + _0x389931.y * 0.35,
        z: _0x3d7750.z
      },
      halfExtents: _0x389931,
      decalRoot: _0x2a557f
    });
  }
  {
    const _0x217668 = _0x28cfa1(2.75, 1);
    _0x1c0dd8.push(_0x3efb1c({
      parent: _0x253958,
      physics: _0x36de11,
      slateMap: _0x28c049,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x217668,
      halfX: 1.3,
      halfZ: 1,
      collapseId: "c-collapse-4",
      segment: "beatC",
      disposers: _0x2c7dcf,
      supportColliders: _0x37d21e
    }));
    _0x13e8cf.push({
      id: "c-collapse-4",
      x: 0,
      y: 1.2,
      z: _0x217668
    });
  }
  {
    const _0x3543e9 = _0x4d9050;
    const _0x42c3c7 = 2.9;
    const _0x53eaa3 = _0x28cfa1(_0x42c3c7, _0x2cf105);
    const _0x1f799e = _0x3543e9 + _0x42c3c7 * 0.5;
    const _0x48cb77 = _0x3a32df(_0x253958, {
      x: 0,
      y: 0,
      z: _0x1f799e
    }, {
      side: 1
    }, _0x2c7dcf);
    _0x243463.push({
      shearId: "c-shear-3",
      segment: "beatC",
      center: {
        x: 0,
        y: 1.5,
        z: _0x1f799e
      },
      halfExtents: {
        x: 2.45,
        y: 1.7,
        z: _0x42c3c7 * 0.48
      },
      impulse: {
        x: 6.1,
        y: 0.1,
        z: 0
      },
      markerRoot: _0x48cb77,
      cooldown: 0.85
    });
    _0x2a766a.c7 = {
      x: 0,
      z: _0x53eaa3
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x53eaa3,
      halfX: 1.6,
      halfZ: _0x2cf105,
      name: "C-Pad-7",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, 0, _0x53eaa3, 1.6, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8
    });
    u(_0x1cee8c, "platform-stone", _0x253958, {
      x: 0,
      y: 0,
      z: _0x53eaa3,
      name: "c-tile-7"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.8,
      y: 0.45,
      z: 2.15
    });
    _0x13e8cf.push({
      id: "c-7",
      x: 0,
      y: 1.2,
      z: _0x53eaa3
    });
  }
  {
    const _0x44d6dc = _0x28cfa1(2.8, _0x2cf105);
    _0x2a766a.cApproach = {
      x: 0,
      z: _0x44d6dc
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x44d6dc,
      halfX: 1.65,
      halfZ: _0x2cf105,
      name: "C-Pad-GateApproach",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, 0, _0x44d6dc, 1.65, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8,
      height: 2.8
    });
    u(_0x1cee8c, "stairs-wide", _0x253958, {
      x: 0,
      y: 0,
      z: _0x44d6dc - 0.25,
      yaw: 0,
      name: "c-stairs-approach"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.8,
      y: 0.9,
      z: 1.6
    });
    _0x13e8cf.push({
      id: "c-approach",
      x: 0,
      y: 1.2,
      z: _0x44d6dc
    });
  }
  {
    const _0x57079f = _0x28cfa1(2.55, 1.15);
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x57079f,
      halfX: _0x24cbcb,
      halfZ: 1.15,
      name: "C-Pad-9",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x41ebde(_0x253958, 0, _0x57079f, _0x24cbcb, _0x4d11a4, _0x2c7dcf, {
      accentMat: _0x30dcf8
    });
    u(_0x1cee8c, "cliff-steps", _0x253958, {
      x: 2.35,
      y: -1.15,
      z: _0x57079f,
      yaw: -Math.PI * 0.5,
      name: "c-cliff-exit"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.6,
      y: 2,
      z: 3
    });
    _0x13e8cf.push({
      id: "c-end",
      x: 0,
      y: 1.2,
      z: _0x57079f
    });
  }
  {
    const _0x4bff90 = _0x4d9050 + 1.15;
    const _0x448eb1 = 1.4;
    const _0x295912 = _0x4bff90 + 1.5 + _0x448eb1;
    _0x4d9050 = _0x295912 + _0x448eb1;
    _0x2a766a.cGate = {
      x: 0,
      z: _0x295912
    };
    const _0x5a9f62 = function (_0x46a0df) {
      const {
        parent: _0x4250f9,
        physics: _0x4e7900,
        topMat: _0x100f18,
        sideMat: _0x1e3bb7,
        gateId: _0x149cf9,
        segment: _0x4b4c76,
        frameZ: _0x404324,
        padCx: _0x260c7b,
        padCz: _0x2d279c,
        halfX: _0x5eaab5,
        halfZ: _0x56986a,
        disposers: _0x40c5c6,
        supportColliders: _0x3688f0
      } = _0x46a0df;
      const _0x317c7c = _0x5c3861(_0x4250f9, {
        x: _0x260c7b,
        y: 0,
        z: _0x404324
      }, _0x40c5c6);
      const _0x28bbea = {
        x: _0x260c7b + _0x317c7c.socketLocal.x,
        y: 0 + _0x317c7c.socketLocal.y,
        z: _0x404324 + _0x317c7c.socketLocal.z
      };
      const _0x1e6e0b = new _0x21c80b.Group();
      _0x1e6e0b.name = "LockedPad:" + _0x149cf9;
      _0x1e6e0b.position.set(_0x260c7b, -0.6, _0x2d279c);
      const _0x360090 = new _0x21c80b.BoxGeometry(_0x5eaab5 * 2, 0.18, _0x56986a * 2);
      const _0x8b8a3f = _0x100f18.clone();
      _0x8b8a3f.name = "LockedPadMat:" + _0x149cf9;
      _0x8b8a3f.transparent = true;
      _0x8b8a3f.opacity = 0.42;
      _0x8b8a3f.color = new _0x21c80b.Color(4867432);
      _0x8b8a3f.emissive = new _0x21c80b.Color(_0x467704.violet);
      _0x8b8a3f.emissiveIntensity = 0.1;
      const _0x56688e = new _0x21c80b.Mesh(_0x360090, _0x8b8a3f);
      _0x56688e.position.y = 0.51;
      _0x56688e.castShadow = false;
      _0x56688e.receiveShadow = true;
      _0x1e6e0b.add(_0x56688e);
      const _0x1b9e0c = new _0x21c80b.BoxGeometry(_0x5eaab5 * 2 * 0.96, 1.08, _0x56986a * 2 * 0.96);
      const _0x53c800 = new _0x21c80b.Mesh(_0x1b9e0c, _0x1e3bb7);
      _0x53c800.position.y = -0.04;
      _0x53c800.castShadow = false;
      _0x1e6e0b.add(_0x53c800);
      _0x4250f9.add(_0x1e6e0b);
      const _0x2d2323 = _0x4e7900.createFixed(_0x1e6e0b);
      let _0x29a9cc = _0x4e7900.createCollider(_0x4e7900.RAPIER.ColliderDesc.cuboid(_0x5eaab5, x, _0x56986a).setFriction(0.9).setRestitution(0), _0x2d2323);
      let _0x3798a8 = true;
      const _0x1f2a8f = {
        gateId: _0x149cf9,
        segment: _0x4b4c76,
        lockedPadCenter: {
          x: _0x260c7b,
          y: 0,
          z: _0x2d279c
        },
        lockedHalfExtents: {
          x: _0x5eaab5,
          y: x,
          z: _0x56986a
        },
        frameRoot: _0x317c7c.root,
        lockedPadRoot: _0x1e6e0b,
        lockedCollider: _0x29a9cc,
        lockedBody: _0x2d2323,
        beaconSocketPos: _0x28bbea,
        enablePad() {
          if (!_0x3798a8 && (_0x3798a8 = true, _0x1e6e0b.visible = true, _0x8b8a3f.opacity = 1, _0x8b8a3f.transparent = false, _0x8b8a3f.color.setHex(8028316), _0x8b8a3f.emissiveIntensity = 0, _0x56688e.castShadow = true, _0x53c800.castShadow = true, !_0x29a9cc)) {
            try {
              _0x29a9cc = _0x4e7900.createCollider(_0x4e7900.RAPIER.ColliderDesc.cuboid(_0x5eaab5, x, _0x56986a).setFriction(0.9).setRestitution(0), _0x2d2323);
              _0x1f2a8f.lockedCollider = _0x29a9cc;
              if (_0x3688f0 && !_0x3688f0.includes(_0x29a9cc)) {
                _0x3688f0.push(_0x29a9cc);
              }
              if (_0x4e7900?.beginSupportSetup) {
                const _0x33dba1 = _0x4e7900.beginSupportSetup();
                _0x33dba1.registerSupport(_0x29a9cc);
                _0x33dba1.commit();
              }
            } catch (_0x42cda3) {
              console.warn("[beatsCSpire] enablePad " + _0x149cf9, _0x42cda3);
            }
          }
        },
        disablePad() {
          if (!_0x3798a8 && !_0x29a9cc) {
            _0x1e6e0b.visible = true;
            _0x8b8a3f.opacity = 0.42;
            _0x8b8a3f.transparent = true;
            _0x8b8a3f.color.setHex(4867432);
            _0x8b8a3f.emissiveIntensity = 0.1;
            _0x56688e.castShadow = false;
            _0x53c800.castShadow = false;
            return;
          }
          _0x3798a8 = false;
          _0x8b8a3f.opacity = 0.42;
          _0x8b8a3f.transparent = true;
          _0x8b8a3f.color.setHex(4867432);
          _0x8b8a3f.emissiveIntensity = 0.1;
          _0x56688e.castShadow = false;
          _0x53c800.castShadow = false;
          if (_0x29a9cc) {
            const _0x2c2cf5 = _0x3688f0?.indexOf?.(_0x29a9cc) ?? -1;
            if (_0x2c2cf5 >= 0) {
              _0x3688f0.splice(_0x2c2cf5, 1);
            }
            try {
              _0x4e7900.removeCollider?.(_0x29a9cc);
            } catch {}
            _0x29a9cc = null;
            _0x1f2a8f.lockedCollider = null;
          }
        }
      };
      _0x40c5c6.push(() => {
        try {
          if (_0x1f2a8f.lockedCollider) {
            _0x4e7900.removeCollider?.(_0x1f2a8f.lockedCollider);
          }
        } catch {}
        try {
          _0x2d2323.dispose?.();
        } catch {}
        _0x360090.dispose();
        _0x1b9e0c.dispose();
        _0x8b8a3f.dispose();
        _0x1e6e0b.removeFromParent();
      });
      _0x1f2a8f.disablePad();
      return _0x1f2a8f;
    }({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      gateId: "c-gate-1",
      segment: "beatC",
      frameZ: _0x4bff90,
      padCx: 0,
      padCz: _0x295912,
      halfX: 1.7,
      halfZ: _0x448eb1,
      disposers: _0x2c7dcf,
      supportColliders: _0x37d21e
    });
    _0x43b28b.push(_0x5a9f62);
    u(_0x1cee8c, "cliff-steps", _0x253958, {
      x: 0,
      y: -1.5,
      z: _0x295912 + 1.15,
      yaw: 0,
      name: "c-gate-cliff"
    }, _0x2142dd, _0x2c7dcf, {
      x: 3,
      y: 2.2,
      z: 2.4
    });
    _0x13e8cf.push({
      id: "c-gate",
      x: 0,
      y: 1.2,
      z: _0x4bff90
    });
    _0x13e8cf.push({
      id: "c-gate-pad",
      x: 0,
      y: 1.2,
      z: _0x295912
    });
  }
  {
    const _0x1e8a3a = {
      x: (_0x2a766a.c1?.x ?? 0) + 0.8,
      y: 0,
      z: _0x2a766a.c1?.z ?? 0
    };
    _0x4ad13f.push({
      spiritId: "c-spirit-1",
      segment: "beatC",
      center: {
        ..._0x1e8a3a
      },
      anchorId: "c-anchor-1",
      propRoot: _0x1b449d(_0x253958, _0x1e8a3a, _0x2c7dcf),
      homeYaw: 0
    });
    const _0xd400f3 = {
      x: (_0x2a766a.c2?.x ?? 0) - 0.75,
      y: 0,
      z: (_0x2a766a.c2?.z ?? 0) + 0.1
    };
    _0x35b3ac.push({
      anchorId: "c-anchor-1",
      segment: "beatC",
      center: {
        ..._0xd400f3
      },
      capacity: 1,
      propRoot: _0x3fd83b(_0x253958, _0xd400f3, _0x2c7dcf)
    });
    const _0x7b5328 = {
      x: (_0x2a766a.c4?.x ?? 0) - 0.85,
      y: 0,
      z: _0x2a766a.c4?.z ?? 0
    };
    _0x4ad13f.push({
      spiritId: "c-spirit-2",
      segment: "beatC",
      center: {
        ..._0x7b5328
      },
      anchorId: "c-anchor-2",
      propRoot: _0x1b449d(_0x253958, _0x7b5328, _0x2c7dcf),
      homeYaw: 0
    });
    const _0x11bab7 = {
      x: (_0x2a766a.c7?.x ?? 0) + 0.8,
      y: 0,
      z: _0x2a766a.c7?.z ?? 0
    };
    _0x35b3ac.push({
      anchorId: "c-anchor-2",
      segment: "beatC",
      center: {
        ..._0x11bab7
      },
      capacity: 1,
      propRoot: _0x3fd83b(_0x253958, _0x11bab7, _0x2c7dcf)
    });
    const _0x56c8ac = _0x43b28b[0];
    if (_0x56c8ac?.beaconSocketPos) {
      const _0x4a926f = {
        x: _0x56c8ac.beaconSocketPos.x,
        y: _0x56c8ac.beaconSocketPos.y,
        z: _0x56c8ac.beaconSocketPos.z
      };
      const _0x176698 = _0x26e577(_0x253958, _0x4a926f, _0x2c7dcf);
      _0x176698.setLit(false);
      _0xe49491.push({
        beaconId: "c-beacon-1",
        segment: "beatC",
        gateId: "c-gate-1",
        center: {
          ..._0x4a926f
        },
        propRoot: _0x176698.root,
        setLitVisual: _0x28a092 => _0x176698.setLit(!!_0x28a092)
      });
    }
  }
  const _0x542a1d = 1.1;
  {
    const _0x56563c = _0x28cfa1(3, 1.35);
    _0x2a766a.sApproach = {
      x: 0,
      z: _0x56563c
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x56563c,
      halfX: 1.65,
      halfZ: 1.35,
      name: "S-Pad-Approach",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    u(_0x1cee8c, "platform-stone", _0x253958, {
      x: 0,
      y: 0,
      z: _0x56563c,
      name: "s-tile-approach"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.9,
      y: 0.45,
      z: 2.4
    });
    const _0x2b591e = {
      x: 0.95,
      y: 0,
      z: _0x56563c
    };
    const _0x2b991c = _0x4ba9c0(_0x253958, _0x2b591e, _0x2c7dcf);
    _0x242930.push({
      pickupId: "s-pickup-1",
      segment: "spire",
      center: {
        x: _0x2b591e.x,
        y: 0.2,
        z: _0x2b591e.z
      },
      radius: 1.2,
      amount: 1,
      propRoot: _0x2b991c
    });
    _0x13e8cf.push({
      id: "s-approach",
      x: 0,
      y: 1.2,
      z: _0x56563c
    });
  }
  {
    const _0x31e02a = _0x4d9050;
    const _0x4526d1 = 3.2;
    const _0x2ac3ea = _0x28cfa1(_0x4526d1, 1);
    const _0x429d71 = _0x31e02a + _0x4526d1 * 0.5;
    const _0x32b121 = _0x3a32df(_0x253958, {
      x: 0,
      y: 0,
      z: _0x429d71
    }, {
      side: -1
    }, _0x2c7dcf);
    _0x243463.push({
      shearId: "s-shear-1",
      segment: "spire",
      center: {
        x: 0,
        y: 1.55,
        z: _0x429d71
      },
      halfExtents: {
        x: 2.5,
        y: 1.75,
        z: _0x4526d1 * 0.5
      },
      impulse: {
        x: -5.8,
        y: 0.1,
        z: 0
      },
      markerRoot: _0x32b121,
      cooldown: 0.85
    });
    _0x1c0dd8.push(_0x3efb1c({
      parent: _0x253958,
      physics: _0x36de11,
      slateMap: _0x28c049,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x2ac3ea,
      halfX: 1.2,
      halfZ: 1,
      collapseId: "s-collapse-1",
      segment: "spire",
      disposers: _0x2c7dcf,
      supportColliders: _0x37d21e
    }));
    _0x13e8cf.push({
      id: "s-bridge-1",
      x: 0,
      y: 1.2,
      z: _0x2ac3ea
    });
  }
  {
    const _0x133bf3 = _0x4d9050;
    const _0x1a0de2 = 3.15;
    const _0x5677b7 = _0x28cfa1(_0x1a0de2, _0x542a1d);
    const _0xd9c3bb = _0x133bf3 + _0x1a0de2 * 0.5;
    const _0x3d2a89 = _0x3a32df(_0x253958, {
      x: 0,
      y: 0,
      z: _0xd9c3bb
    }, {
      side: 1
    }, _0x2c7dcf);
    _0x243463.push({
      shearId: "s-shear-2",
      segment: "spire",
      center: {
        x: 0,
        y: 1.55,
        z: _0xd9c3bb
      },
      halfExtents: {
        x: 2.5,
        y: 1.75,
        z: _0x1a0de2 * 0.5
      },
      impulse: {
        x: 6,
        y: 0.12,
        z: 0
      },
      markerRoot: _0x3d2a89,
      cooldown: 0.85
    });
    _0x2a766a.sBridgeSafe1 = {
      x: 0,
      z: _0x5677b7
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x5677b7,
      halfX: 1.4,
      halfZ: _0x542a1d,
      name: "S-Pad-Bridge-1",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    u(_0x1cee8c, "platform-stone", _0x253958, {
      x: 0,
      y: 0,
      z: _0x5677b7,
      name: "s-tile-bridge-1"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.5,
      y: 0.45,
      z: 2
    });
    _0x13e8cf.push({
      id: "s-bridge-safe-1",
      x: 0,
      y: 1.2,
      z: _0x5677b7
    });
  }
  {
    const _0x337020 = _0x28cfa1(3.1, 1);
    _0x1c0dd8.push(_0x3efb1c({
      parent: _0x253958,
      physics: _0x36de11,
      slateMap: _0x28c049,
      sideMat: _0x2c5c0b,
      cx: 0.1,
      cz: _0x337020,
      halfX: 1.22,
      halfZ: 1,
      collapseId: "s-collapse-2",
      segment: "spire",
      disposers: _0x2c7dcf,
      supportColliders: _0x37d21e
    }));
    _0x13e8cf.push({
      id: "s-bridge-2",
      x: 0.1,
      y: 1.2,
      z: _0x337020
    });
  }
  {
    const _0x19b705 = _0x4d9050;
    const _0xe1c73c = 3.25;
    const _0x513141 = _0x28cfa1(_0xe1c73c, _0x542a1d);
    const _0x181d64 = _0x19b705 + _0xe1c73c * 0.5;
    const _0x3934fb = _0x3a32df(_0x253958, {
      x: 0,
      y: 0,
      z: _0x181d64
    }, {
      side: -1
    }, _0x2c7dcf);
    _0x243463.push({
      shearId: "s-shear-3",
      segment: "spire",
      center: {
        x: 0,
        y: 1.6,
        z: _0x181d64
      },
      halfExtents: {
        x: 2.55,
        y: 1.8,
        z: _0xe1c73c * 0.5
      },
      impulse: {
        x: -6.15,
        y: 0.1,
        z: 0
      },
      markerRoot: _0x3934fb,
      cooldown: 0.85
    });
    _0x2a766a.sBridgeSafe2 = {
      x: -0.15,
      z: _0x513141
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: -0.15,
      cz: _0x513141,
      halfX: 1.4,
      halfZ: _0x542a1d,
      name: "S-Pad-Bridge-2",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x13e8cf.push({
      id: "s-bridge-safe-2",
      x: -0.15,
      y: 1.2,
      z: _0x513141
    });
  }
  {
    const _0x5a6972 = _0x4d9050;
    const _0x3cf910 = 3.35;
    const _0x6c2b82 = _0x28cfa1(_0x3cf910, 1.2);
    const _0x56011d = _0x5a6972 + _0x3cf910 * 0.5;
    const _0x1ce173 = _0x3a32df(_0x253958, {
      x: 0,
      y: 0,
      z: _0x56011d
    }, {
      side: 1
    }, _0x2c7dcf);
    _0x243463.push({
      shearId: "s-shear-4",
      segment: "spire",
      center: {
        x: 0,
        y: 1.6,
        z: _0x56011d
      },
      halfExtents: {
        x: 2.6,
        y: 1.8,
        z: _0x3cf910 * 0.5
      },
      impulse: {
        x: 6.2,
        y: 0.12,
        z: 0
      },
      markerRoot: _0x1ce173,
      cooldown: 0.85
    });
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x6c2b82,
      halfX: 1.45,
      halfZ: 1.2,
      name: "S-Pad-Crest",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    _0x13e8cf.push({
      id: "s-bridge-crest",
      x: 0,
      y: 1.2,
      z: _0x6c2b82
    });
  }
  {
    const _0x40bc09 = _0x4d9050 + 1.35;
    const _0x4969ba = {
      x: 2.1,
      y: 1.7,
      z: 1.85
    };
    const _0x4b5313 = {
      x: 0,
      y: 0,
      z: _0x40bc09
    };
    const _0x4a4c85 = _0x30d7cb(_0x253958, _0x4b5313, _0x4969ba, _0x2c7dcf);
    _0x4a4c85.traverse(_0x26ac2a => {
      if (!_0x26ac2a.isMesh || !_0x26ac2a.material) {
        return;
      }
      const _0xa21111 = _0x26ac2a.material;
      const _0x54d5e7 = String(_0xa21111.name || "");
      if (_0x54d5e7 === "StormRing" && _0xa21111.emissiveIntensity != null) {
        _0xa21111.emissiveIntensity = Math.min(0.85, (_0xa21111.emissiveIntensity ?? 0.4) * 1.2);
      }
      if (_0x54d5e7 === "StormFogVolume" && _0xa21111.opacity != null && _0xa21111.transparent) {
        _0xa21111.opacity = Math.min(0.14, _0xa21111.opacity);
      }
    });
    _0xe37dde.push({
      fieldId: "s-storm-crest",
      segment: "spire",
      center: {
        x: _0x4b5313.x,
        y: 0 + _0x4969ba.y * 0.4,
        z: _0x4b5313.z
      },
      halfExtents: _0x4969ba,
      decalRoot: _0x4a4c85
    });
    _0x13e8cf.push({
      id: "s-storm-crest",
      x: 0,
      y: 1.2,
      z: _0x40bc09
    });
  }
  {
    const _0x3b99f3 = _0x28cfa1(3.4, 2.1);
    _0x2a766a.sRing = {
      x: 0,
      z: _0x3b99f3
    };
    z({
      parent: _0x253958,
      physics: _0x36de11,
      topMat: _0x2142dd,
      sideMat: _0x2c5c0b,
      cx: 0,
      cz: _0x3b99f3,
      halfX: 2.4,
      halfZ: 2.1,
      name: "S-Pad-Ring",
      supportColliders: _0x37d21e,
      disposers: _0x2c7dcf
    });
    u(_0x1cee8c, "platform-stone", _0x253958, {
      x: 0,
      y: 0,
      z: _0x3b99f3,
      name: "s-tile-ring"
    }, _0x2142dd, _0x2c7dcf, {
      x: 4.2,
      y: 0.5,
      z: 3.8
    });
    u(_0x1cee8c, "cliff-steps", _0x253958, {
      x: -2.6,
      y: -1.4,
      z: _0x3b99f3 + 0.4,
      yaw: Math.PI * 0.35,
      name: "s-ring-cliff-l"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.8,
      y: 2.4,
      z: 2.6
    });
    u(_0x1cee8c, "cliff-steps", _0x253958, {
      x: 2.7,
      y: -1.5,
      z: _0x3b99f3 - 0.3,
      yaw: -Math.PI * 0.4,
      name: "s-ring-cliff-r"
    }, _0x2142dd, _0x2c7dcf, {
      x: 2.6,
      y: 2.3,
      z: 2.5
    });
    _0x4e6423(_0x253958, {
      x: 0.15,
      y: 0,
      z: _0x3b99f3 + 0.55
    }, _0x2c7dcf, {
      stoneMat: _0x2c5c0b,
      accentMat: _0x30dcf8,
      height: 4.8,
      scale: 1.05
    });
    const _0x5a55b8 = {
      x: -1.35,
      y: 0,
      z: _0x3b99f3 - 0.55
    };
    _0x35b3ac.push({
      anchorId: "s-anchor-final",
      segment: "spire",
      center: {
        ..._0x5a55b8
      },
      capacity: 3,
      propRoot: _0x3fd83b(_0x253958, _0x5a55b8, _0x2c7dcf)
    });
    _0x13e8cf.push({
      id: "s-ring",
      x: 0,
      y: 1.2,
      z: _0x3b99f3
    });
    _0x13e8cf.push({
      id: "s-end",
      x: 0,
      y: 1.2,
      z: _0x3b99f3 + 0.4
    });
    _0x13e8cf.push({
      id: "s-final",
      x: 0,
      y: 1.2,
      z: _0x3b99f3 + 0.4
    });
  }
  {
    const _0x185381 = {
      x: (_0x2a766a.sApproach?.x ?? 0) - 0.9,
      y: 0,
      z: (_0x2a766a.sApproach?.z ?? 0) + 0.15
    };
    _0x4ad13f.push({
      spiritId: "s-spirit-1",
      segment: "spire",
      center: {
        ..._0x185381
      },
      anchorId: "s-anchor-final",
      propRoot: _0x1b449d(_0x253958, _0x185381, _0x2c7dcf),
      homeYaw: 0
    });
    const _0x4cfbf2 = {
      x: (_0x2a766a.sBridgeSafe1?.x ?? 0) + 0.75,
      y: 0,
      z: _0x2a766a.sBridgeSafe1?.z ?? 0
    };
    _0x4ad13f.push({
      spiritId: "s-spirit-2",
      segment: "spire",
      center: {
        ..._0x4cfbf2
      },
      anchorId: "s-anchor-final",
      propRoot: _0x1b449d(_0x253958, _0x4cfbf2, _0x2c7dcf),
      homeYaw: 0
    });
    const _0x26cd6f = {
      x: (_0x2a766a.sBridgeSafe2?.x ?? 0) - 0.7,
      y: 0,
      z: (_0x2a766a.sBridgeSafe2?.z ?? 0) + 0.1
    };
    _0x4ad13f.push({
      spiritId: "s-spirit-3",
      segment: "spire",
      center: {
        ..._0x26cd6f
      },
      anchorId: "s-anchor-final",
      propRoot: _0x1b449d(_0x253958, _0x26cd6f, _0x2c7dcf),
      homeYaw: 0
    });
  }
  const _0x5dcba4 = (_0x4e04e9.routeSpineExtended ?? _0x4e04e9.routeSpine ?? []).map(_0x41f689 => ({
    ..._0x41f689
  })).concat(_0x13e8cf);
  let _0x9f5ee9 = false;
  return {
    root: _0x253958,
    collapses: _0x1c0dd8,
    shears: _0x243463,
    rests: _0x37cce2,
    pickups: _0x242930,
    gates: _0x43b28b,
    spirits: _0x4ad13f,
    anchors: _0x35b3ac,
    beaconSockets: _0xe49491,
    stormFields: _0xe37dde,
    routeSpineExtended: _0x5dcba4,
    supportColliders: _0x37d21e,
    surfaceY: 0,
    dispose: () => {
      if (!_0x9f5ee9) {
        _0x9f5ee9 = true;
        for (let _0xa2719 = _0x2c7dcf.length - 1; _0xa2719 >= 0; _0xa2719--) {
          try {
            _0x2c7dcf[_0xa2719]();
          } catch {}
        }
        _0x253958.removeFromParent();
      }
    }
  };
}