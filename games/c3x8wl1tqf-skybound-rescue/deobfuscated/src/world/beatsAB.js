import * as _0x5bbd57 from "three";
import { ASSET_PATHS as _0x37cdc9, STORM_PALETTE as _0x17c8a3 } from "../shared/contracts.js";
import { createShearMarker as _0x58b13d, createRestAltarProp as _0x43bdcd, createChargeMoteProp as _0xeff787, createBeaconGateFrame as _0x1bbde6, addColonnadePillars as _0x4672f8, createSpiritWispProp as _0x248df9, createAmberAnchorProp as _0x158d0e, createBeaconLanternProp as _0xd0daa, createStormFieldDecal as _0x1f0b5c } from "./props/markers.js";
const h = 0.6;
function u(_0x48fb9b, _0x2c0f17, _0xc026a7, _0x5839bb, _0x5d6b34, _0x269650, _0x28669a) {
  const _0x49524c = _0x48fb9b.assets.spawn(_0x2c0f17, {
    name: _0x5839bb.name ?? _0x2c0f17,
    targetSize: _0x28669a
  });
  var _0x248bc9;
  var _0x14c910;
  _0x49524c.root.position.set(_0x5839bb.x ?? 0, _0x5839bb.y ?? 0, _0x5839bb.z ?? 0);
  if (Number.isFinite(_0x5839bb.yaw)) {
    _0x49524c.root.rotation.y = _0x5839bb.yaw;
  }
  _0x248bc9 = _0x49524c.root;
  _0x14c910 = _0x5d6b34;
  _0x248bc9.traverse(_0xc00cae => {
    if (_0xc00cae.isMesh) {
      _0xc00cae.castShadow = true;
      _0xc00cae.receiveShadow = true;
      _0xc00cae.material = _0x14c910;
    }
  });
  _0xc026a7.add(_0x49524c.root);
  _0x269650.push(() => _0x49524c.dispose());
  return _0x49524c;
}
function y(_0x39acd6) {
  const {
    parent: _0x298c4d,
    physics: _0x509189,
    topMat: _0x36e441,
    sideMat: _0x2e6a3f,
    cx: _0x304e89,
    cz: _0x3a7a4d,
    halfX: _0x1aab3b,
    halfZ: _0x5c1d69,
    name: _0x4e7de7,
    supportColliders: _0xa4fc6f,
    disposers: _0x59fddd
  } = _0x39acd6;
  const _0x159d8c = new _0x5bbd57.Group();
  _0x159d8c.name = _0x4e7de7;
  _0x159d8c.position.set(_0x304e89, -0.6, _0x3a7a4d);
  const _0x2d25df = new _0x5bbd57.BoxGeometry(_0x1aab3b * 2, 0.18, _0x5c1d69 * 2);
  const _0x244cd0 = new _0x5bbd57.Mesh(_0x2d25df, _0x36e441);
  _0x244cd0.position.y = 0.51;
  _0x244cd0.castShadow = true;
  _0x244cd0.receiveShadow = true;
  _0x159d8c.add(_0x244cd0);
  const _0x29b2b2 = new _0x5bbd57.BoxGeometry(_0x1aab3b * 2 * 0.96, 1.08, _0x5c1d69 * 2 * 0.96);
  const _0x5d2fa2 = new _0x5bbd57.Mesh(_0x29b2b2, _0x2e6a3f);
  _0x5d2fa2.position.y = -0.04;
  _0x5d2fa2.castShadow = true;
  _0x5d2fa2.receiveShadow = true;
  _0x159d8c.add(_0x5d2fa2);
  const _0xdc3f7d = new _0x5bbd57.BoxGeometry(_0x1aab3b * 2 + 0.28, 0.2, _0x5c1d69 * 2 + 0.28);
  const _0x99e780 = new _0x5bbd57.Mesh(_0xdc3f7d, _0x2e6a3f);
  _0x99e780.position.y = h - 0.26;
  _0x99e780.castShadow = true;
  _0x159d8c.add(_0x99e780);
  _0x298c4d.add(_0x159d8c);
  const _0x1eaf1e = _0x509189.createFixed(_0x159d8c);
  const _0xe2ed31 = _0x509189.createCollider(_0x509189.RAPIER.ColliderDesc.cuboid(_0x1aab3b, h, _0x5c1d69).setFriction(0.9).setRestitution(0), _0x1eaf1e);
  _0xa4fc6f.push(_0xe2ed31);
  _0x59fddd.push(() => {
    try {
      _0x509189.removeCollider?.(_0xe2ed31);
    } catch {}
    try {
      _0x1eaf1e.dispose?.();
    } catch {}
    _0x2d25df.dispose();
    _0x29b2b2.dispose();
    _0xdc3f7d.dispose();
    _0x159d8c.removeFromParent();
  });
  return {
    group: _0x159d8c,
    collider: _0xe2ed31,
    fixed: _0x1eaf1e,
    halfX: _0x1aab3b,
    halfZ: _0x5c1d69,
    cx: _0x304e89,
    cz: _0x3a7a4d
  };
}
function x(_0x5f15d8) {
  const {
    parent: _0x178d65,
    physics: _0x15590d,
    slateMap: _0x1dd1ea,
    sideMat: _0xe1c480,
    cx: _0x1bc965,
    cz: _0x5ee79e,
    halfX: _0x196cd0,
    halfZ: _0x47e13c,
    collapseId: _0x7324e9,
    segment: _0x3bf870,
    disposers: _0x3316c6,
    supportColliders: _0x4dda3d
  } = _0x5f15d8;
  const _0x3ffe81 = 0.32;
  const _0x2e639a = new _0x5bbd57.Group();
  _0x2e639a.name = "Collapse:" + _0x7324e9;
  _0x2e639a.position.set(_0x1bc965, 0 - _0x3ffe81, _0x5ee79e);
  const _0x3145bc = function (_0x4a8646) {
    const _0xcbd759 = _0x4a8646.clone();
    _0xcbd759.colorSpace = _0x5bbd57.SRGBColorSpace;
    _0xcbd759.wrapS = _0xcbd759.wrapT = _0x5bbd57.RepeatWrapping;
    _0xcbd759.repeat.set(1.6, 1.6);
    _0xcbd759.needsUpdate = true;
    return new _0x5bbd57.MeshStandardMaterial({
      name: "CollapseSlate",
      map: _0xcbd759,
      color: new _0x5bbd57.Color(8227740),
      roughness: 0.88,
      metalness: 0.05,
      emissive: new _0x5bbd57.Color(0),
      emissiveIntensity: 0,
      envMapIntensity: 0.8
    });
  }(_0x1dd1ea);
  const _0x4cb723 = new _0x5bbd57.MeshStandardMaterial({
    name: "CrackLine:" + _0x7324e9,
    color: new _0x5bbd57.Color(2761784),
    emissive: new _0x5bbd57.Color(_0x17c8a3.violet),
    emissiveIntensity: 0.15,
    roughness: 0.7,
    metalness: 0.05
  });
  const _0xde60fc = new _0x5bbd57.BoxGeometry(_0x196cd0 * 2, 0.12, _0x47e13c * 2);
  const _0x3ca270 = new _0x5bbd57.Mesh(_0xde60fc, _0x3145bc);
  _0x3ca270.position.y = 0.26;
  _0x3ca270.castShadow = true;
  _0x3ca270.receiveShadow = true;
  _0x2e639a.add(_0x3ca270);
  const _0x546943 = new _0x5bbd57.BoxGeometry(_0x196cd0 * 2 * 0.94, 0.54, _0x47e13c * 2 * 0.94);
  const _0x13e86a = new _0x5bbd57.Mesh(_0x546943, _0xe1c480);
  _0x13e86a.position.y = -0.02;
  _0x13e86a.castShadow = true;
  _0x2e639a.add(_0x13e86a);
  const _0x573523 = new _0x5bbd57.BoxGeometry(_0x196cd0 * 1.7, 0.04, 0.06);
  const _0x4097ad = new _0x5bbd57.Mesh(_0x573523, _0x4cb723);
  _0x4097ad.position.set(0, 0.31, 0);
  _0x4097ad.rotation.y = 0.35;
  _0x2e639a.add(_0x4097ad);
  const _0x413c32 = new _0x5bbd57.BoxGeometry(0.05, 0.04, _0x47e13c * 1.5);
  const _0x4548dc = new _0x5bbd57.Mesh(_0x413c32, _0x4cb723);
  _0x4548dc.position.set(_0x196cd0 * 0.25, 0.31, 0);
  _0x2e639a.add(_0x4548dc);
  const _0x72570c = new _0x5bbd57.BoxGeometry(_0x196cd0 * 2 + 0.12, 0.08, _0x47e13c * 2 + 0.12);
  const _0x5d5990 = new _0x5bbd57.Mesh(_0x72570c, _0xe1c480);
  _0x5d5990.position.y = 0.14;
  _0x2e639a.add(_0x5d5990);
  _0x178d65.add(_0x2e639a);
  const _0x88f4b1 = _0x15590d.createFixed(_0x2e639a);
  let _0x5b7f93 = _0x15590d.createCollider(_0x15590d.RAPIER.ColliderDesc.cuboid(_0x196cd0, _0x3ffe81, _0x47e13c).setFriction(0.85).setRestitution(0), _0x88f4b1);
  let _0x251722 = true;
  const _0x98a32b = _0x2e639a.position.y;
  if (_0x4dda3d && _0x5b7f93) {
    _0x4dda3d.push(_0x5b7f93);
  }
  const _0x16b7c5 = {
    collapseId: _0x7324e9,
    segment: _0x3bf870,
    center: {
      x: _0x1bc965,
      y: 0,
      z: _0x5ee79e
    },
    halfExtents: {
      x: _0x196cd0,
      y: _0x3ffe81,
      z: _0x47e13c
    },
    meshRoot: _0x2e639a,
    collider: _0x5b7f93,
    fixedBody: _0x88f4b1,
    crackMaterials: [_0x3145bc, _0x4cb723],
    removeSupport() {
      if (_0x251722) {
        _0x251722 = false;
        if (_0x5b7f93) {
          const _0x2ed6c8 = _0x5b7f93;
          try {
            _0x15590d.removeCollider?.(_0x2ed6c8);
          } catch {}
          if (_0x4dda3d) {
            const _0x2fe515 = _0x4dda3d.indexOf(_0x2ed6c8);
            if (_0x2fe515 >= 0) {
              _0x4dda3d.splice(_0x2fe515, 1);
            }
          }
          _0x5b7f93 = null;
          _0x16b7c5.collider = null;
        }
        _0x2e639a.traverse(_0x1dc66c => {
          if (_0x1dc66c.isMesh) {
            _0x1dc66c.castShadow = false;
          }
        });
        _0x2e639a.position.y = _0x98a32b - 6.5;
        _0x2e639a.rotation.z = 0.35;
        _0x2e639a.rotation.x = 0.18;
        _0x2e639a.visible = true;
      }
    },
    restoreSupport() {
      if (!_0x251722) {
        _0x251722 = true;
        _0x2e639a.position.y = _0x98a32b;
        _0x2e639a.rotation.x = 0;
        _0x2e639a.rotation.z = 0;
        _0x2e639a.visible = true;
        _0x2e639a.traverse(_0x23dd07 => {
          if (_0x23dd07.isMesh) {
            _0x23dd07.castShadow = true;
          }
        });
        _0x3145bc.emissive.setHex(0);
        _0x3145bc.emissiveIntensity = 0;
        _0x4cb723.emissive.setHex(_0x17c8a3.violet);
        _0x4cb723.emissiveIntensity = 0.15;
        try {
          _0x5b7f93 = _0x15590d.createCollider(_0x15590d.RAPIER.ColliderDesc.cuboid(_0x196cd0, _0x3ffe81, _0x47e13c).setFriction(0.85).setRestitution(0), _0x88f4b1);
          _0x16b7c5.collider = _0x5b7f93;
          (function (_0x59ebea) {
            if (_0x59ebea && _0x15590d?.beginSupportSetup) {
              try {
                const _0x3fc08f = _0x15590d.beginSupportSetup();
                _0x3fc08f.registerSupport(_0x59ebea);
                _0x3fc08f.commit();
              } catch (_0x5ea938) {
                console.warn("[beatsAB] registerLiveSupport " + _0x7324e9, _0x5ea938);
              }
              if (_0x4dda3d && !_0x4dda3d.includes(_0x59ebea)) {
                _0x4dda3d.push(_0x59ebea);
              }
            }
          })(_0x5b7f93);
        } catch (_0x2d72da) {
          console.warn("[beatsAB] restoreSupport " + _0x7324e9, _0x2d72da);
        }
      }
    }
  };
  _0x3316c6.push(() => {
    try {
      if (_0x16b7c5.collider) {
        _0x15590d.removeCollider?.(_0x16b7c5.collider);
      }
    } catch {}
    try {
      _0x88f4b1.dispose?.();
    } catch {}
    _0xde60fc.dispose();
    _0x546943.dispose();
    _0x573523.dispose();
    _0x413c32.dispose();
    _0x72570c.dispose();
    _0x3145bc.map?.dispose?.();
    _0x3145bc.dispose();
    _0x4cb723.dispose();
    _0x2e639a.removeFromParent();
  });
  return _0x16b7c5;
}
export async function buildBeatsAB(_0x465761, _0x583832, _0x4e8265) {
  if (!_0x465761?.scene || !_0x465761?.assets) {
    throw new Error("buildBeatsAB requires a live og-engine game.");
  }
  if (!_0x583832?.RAPIER || !_0x583832.createFixed || !_0x583832.createCollider) {
    throw new Error("buildBeatsAB requires a Rapier physics adapter.");
  }
  if (!_0x4e8265?.routeSpine) {
    throw new Error("buildBeatsAB requires foundation from buildOnboardingIsle.");
  }
  await _0x465761.assets.load([{
    id: "platform-stone",
    url: _0x37cdc9.platformStone,
    type: "gltf"
  }, {
    id: "cliff-steps",
    url: _0x37cdc9.cliffSteps,
    type: "gltf"
  }, {
    id: "stairs-wide",
    url: _0x37cdc9.stairsWide,
    type: "gltf"
  }, {
    id: "slate-diffuse",
    url: _0x37cdc9.slateDiffuse,
    type: "texture",
    semantic: "color"
  }]);
  const _0x333e4a = new _0x5bbd57.Group();
  _0x333e4a.name = "BeatsAB";
  _0x465761.scene.add(_0x333e4a);
  const _0x88c2f = [];
  const _0x2558d2 = [];
  const _0x2bb8a8 = [];
  const _0x32dc20 = [];
  const _0x4d9fb7 = [];
  const _0x62ddb2 = [];
  const _0x5bfc79 = [];
  const _0x1cfece = [];
  const _0x345f57 = [];
  const _0x585211 = [];
  const _0x1fb974 = [];
  const _0x4666f8 = [];
  const _0x102a6a = {
    a1: null,
    a2: null,
    a3: null,
    aRest: null,
    a5: null,
    b1: null,
    b2: null,
    bPickup: null,
    bApproach: null
  };
  const _0x32212b = _0x465761.assets.texture("slate-diffuse");
  const _0x3bc519 = function (_0x4df555) {
    const _0x2cd788 = _0x4df555.clone();
    _0x2cd788.colorSpace = _0x5bbd57.SRGBColorSpace;
    _0x2cd788.wrapS = _0x2cd788.wrapT = _0x5bbd57.RepeatWrapping;
    _0x2cd788.repeat.set(2, 2);
    _0x2cd788.needsUpdate = true;
    return new _0x5bbd57.MeshStandardMaterial({
      name: "WetSlateBeats",
      map: _0x2cd788,
      color: new _0x5bbd57.Color(9149099),
      roughness: 0.82,
      metalness: 0.06,
      envMapIntensity: 0.85
    });
  }(_0x32212b);
  const _0x6bfc96 = new _0x5bbd57.MeshStandardMaterial({
    name: "DeepStoneBeats",
    color: new _0x5bbd57.Color(_0x17c8a3.slateDeep),
    roughness: 0.9,
    metalness: 0.04,
    envMapIntensity: 0.6
  });
  const _0x92ea91 = new _0x5bbd57.MeshStandardMaterial({
    color: new _0x5bbd57.Color(5924216),
    roughness: 0.88,
    metalness: 0.05
  });
  _0x88c2f.push(() => {
    _0x3bc519.map?.dispose?.();
    _0x3bc519.dispose();
    _0x6bfc96.dispose();
    _0x92ea91.dispose();
  });
  let _0x1522c6 = function (_0x2bc8ad) {
    const _0x14e8f3 = (_0x2bc8ad?.routeSpine ?? []).find(_0x1c1b62 => _0x1c1b62.id === "landing");
    if (_0x14e8f3 && Number.isFinite(_0x14e8f3.z)) {
      return _0x14e8f3.z + 2.2 + 0.15;
    } else {
      return 13.4;
    }
  }(_0x4e8265);
  const _0x44212d = (_0xd34f47, _0x10df9b) => {
    const _0x1696fe = _0x1522c6 + _0xd34f47 + _0x10df9b;
    _0x1522c6 = _0x1696fe + _0x10df9b;
    return _0x1696fe;
  };
  const _0x178917 = 1.55;
  const _0x171484 = 1.25;
  {
    const _0x59e431 = _0x44212d(2.4, _0x171484);
    _0x102a6a.a1 = {
      x: 0,
      z: _0x59e431
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x59e431,
      halfX: _0x178917,
      halfZ: _0x171484,
      name: "A-Pad-1",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    _0x4672f8(_0x333e4a, 0, _0x59e431, _0x178917, _0x92ea91, _0x88c2f);
    u(_0x465761, "platform-stone", _0x333e4a, {
      x: 0,
      y: 0,
      z: _0x59e431,
      name: "a-tile-1"
    }, _0x3bc519, _0x88c2f, {
      x: 2.8,
      y: 0.45,
      z: 2.2
    });
    _0x4666f8.push({
      id: "a-1",
      x: 0,
      y: 1.2,
      z: _0x59e431
    });
  }
  {
    const _0x4efaa8 = _0x44212d(2.35, 1.1);
    _0x2bb8a8.push(x({
      parent: _0x333e4a,
      physics: _0x583832,
      slateMap: _0x32212b,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x4efaa8,
      halfX: 1.35,
      halfZ: 1.1,
      collapseId: "a-collapse-1",
      segment: "beatA",
      disposers: _0x88c2f,
      supportColliders: _0x2558d2
    }));
    _0x4666f8.push({
      id: "a-collapse-1",
      x: 0,
      y: 1.2,
      z: _0x4efaa8
    });
  }
  {
    const _0x363103 = _0x1522c6;
    const _0x8c85d8 = 2.6;
    const _0x2de6a1 = _0x44212d(_0x8c85d8, _0x171484);
    const _0x230714 = _0x363103 + _0x8c85d8 * 0.5;
    const _0x1bf740 = _0x58b13d(_0x333e4a, {
      x: 0,
      y: 0,
      z: _0x230714
    }, {
      side: 1
    }, _0x88c2f);
    _0x32dc20.push({
      shearId: "a-shear-1",
      segment: "beatA",
      center: {
        x: 0,
        y: 1.4,
        z: _0x230714
      },
      halfExtents: {
        x: 2.2,
        y: 1.6,
        z: _0x8c85d8 * 0.48
      },
      impulse: {
        x: 5.2,
        y: 0.15,
        z: 0
      },
      markerRoot: _0x1bf740,
      cooldown: 0.85
    });
    _0x102a6a.a2 = {
      x: 0,
      z: _0x2de6a1
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x2de6a1,
      halfX: _0x178917,
      halfZ: _0x171484,
      name: "A-Pad-2",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    _0x4672f8(_0x333e4a, 0, _0x2de6a1, _0x178917, _0x92ea91, _0x88c2f);
    u(_0x465761, "platform-stone", _0x333e4a, {
      x: 0,
      y: 0,
      z: _0x2de6a1,
      name: "a-tile-2"
    }, _0x3bc519, _0x88c2f, {
      x: 2.8,
      y: 0.45,
      z: 2.2
    });
    _0x4666f8.push({
      id: "a-2",
      x: 0,
      y: 1.2,
      z: _0x2de6a1
    });
  }
  {
    const _0x2fff8e = _0x44212d(2.5, _0x171484);
    _0x102a6a.a3 = {
      x: 0.35,
      z: _0x2fff8e
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0.35,
      cz: _0x2fff8e,
      halfX: _0x178917,
      halfZ: _0x171484,
      name: "A-Pad-3",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    _0x4672f8(_0x333e4a, 0.35, _0x2fff8e, _0x178917, _0x92ea91, _0x88c2f);
    _0x4666f8.push({
      id: "a-3",
      x: 0.35,
      y: 1.2,
      z: _0x2fff8e
    });
  }
  {
    const _0x514ef4 = _0x44212d(2.45, 1.05);
    _0x2bb8a8.push(x({
      parent: _0x333e4a,
      physics: _0x583832,
      slateMap: _0x32212b,
      sideMat: _0x6bfc96,
      cx: -0.2,
      cz: _0x514ef4,
      halfX: 1.3,
      halfZ: 1.05,
      collapseId: "a-collapse-2",
      segment: "beatA",
      disposers: _0x88c2f,
      supportColliders: _0x2558d2
    }));
    _0x4666f8.push({
      id: "a-collapse-2",
      x: -0.2,
      y: 1.2,
      z: _0x514ef4
    });
  }
  {
    const _0x24b73c = _0x1522c6;
    const _0x54eb34 = 2.8;
    const _0x55c674 = _0x44212d(_0x54eb34, 1.4);
    const _0x584167 = _0x24b73c + _0x54eb34 * 0.5;
    const _0x395fbe = _0x58b13d(_0x333e4a, {
      x: 0,
      y: 0,
      z: _0x584167
    }, {
      side: -1
    }, _0x88c2f);
    _0x32dc20.push({
      shearId: "a-shear-2",
      segment: "beatA",
      center: {
        x: 0,
        y: 1.4,
        z: _0x584167
      },
      halfExtents: {
        x: 2.3,
        y: 1.6,
        z: _0x54eb34 * 0.48
      },
      impulse: {
        x: -5.5,
        y: 0.12,
        z: 0
      },
      markerRoot: _0x395fbe,
      cooldown: 0.85
    });
    _0x102a6a.aRest = {
      x: 0,
      z: _0x55c674
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x55c674,
      halfX: 1.7,
      halfZ: 1.4,
      name: "A-Pad-Rest",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    _0x4672f8(_0x333e4a, 0, _0x55c674, 1.7, _0x92ea91, _0x88c2f);
    u(_0x465761, "platform-stone", _0x333e4a, {
      x: 0,
      y: 0,
      z: _0x55c674,
      name: "a-tile-rest"
    }, _0x3bc519, _0x88c2f, {
      x: 3,
      y: 0.45,
      z: 2.5
    });
    const _0xc452ff = {
      x: -1.1,
      y: 0,
      z: _0x55c674 + 0.15
    };
    const _0x5debff = _0x43bdcd(_0x333e4a, _0xc452ff, _0x88c2f);
    _0x4d9fb7.push({
      restId: "a-rest-1",
      segment: "beatA",
      center: {
        x: _0xc452ff.x,
        y: 0,
        z: _0xc452ff.z
      },
      radius: 1.4,
      restore: 1,
      propRoot: _0x5debff
    });
    _0x4666f8.push({
      id: "a-rest",
      x: 0,
      y: 1.2,
      z: _0x55c674
    });
  }
  {
    const _0x1fd826 = _0x44212d(2.55, _0x171484);
    _0x102a6a.a5 = {
      x: 0,
      z: _0x1fd826
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x1fd826,
      halfX: _0x178917,
      halfZ: _0x171484,
      name: "A-Pad-5",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    _0x4672f8(_0x333e4a, 0, _0x1fd826, _0x178917, _0x92ea91, _0x88c2f);
    _0x4666f8.push({
      id: "a-5",
      x: 0,
      y: 1.2,
      z: _0x1fd826
    });
  }
  {
    const _0x5a4cb1 = _0x44212d(2.7, _0x171484);
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x5a4cb1,
      halfX: 1.7,
      halfZ: _0x171484,
      name: "A-Pad-6",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    u(_0x465761, "cliff-steps", _0x333e4a, {
      x: 2.4,
      y: -1.2,
      z: _0x5a4cb1,
      yaw: -Math.PI * 0.5,
      name: "a-cliff-exit"
    }, _0x3bc519, _0x88c2f, {
      x: 2.8,
      y: 2,
      z: 3.2
    });
    _0x4666f8.push({
      id: "a-end",
      x: 0,
      y: 1.2,
      z: _0x5a4cb1
    });
  }
  const _0x4e7ca9 = 1.45;
  const _0x557d32 = 1.15;
  {
    const _0x40ddbe = _0x44212d(3.1, _0x557d32);
    _0x102a6a.b1 = {
      x: 0,
      z: _0x40ddbe
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x40ddbe,
      halfX: _0x4e7ca9,
      halfZ: _0x557d32,
      name: "B-Pad-1",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    u(_0x465761, "platform-stone", _0x333e4a, {
      x: 0,
      y: 0,
      z: _0x40ddbe,
      name: "b-tile-1"
    }, _0x3bc519, _0x88c2f, {
      x: 2.6,
      y: 0.45,
      z: 2
    });
    _0x4666f8.push({
      id: "b-1",
      x: 0,
      y: 1.2,
      z: _0x40ddbe
    });
  }
  {
    const _0x3c00ca = _0x44212d(3.15, 1);
    _0x2bb8a8.push(x({
      parent: _0x333e4a,
      physics: _0x583832,
      slateMap: _0x32212b,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x3c00ca,
      halfX: 1.25,
      halfZ: 1,
      collapseId: "b-collapse-1",
      segment: "beatB",
      disposers: _0x88c2f,
      supportColliders: _0x2558d2
    }));
    _0x4666f8.push({
      id: "b-collapse-1",
      x: 0,
      y: 1.2,
      z: _0x3c00ca
    });
  }
  {
    const _0x5d9286 = _0x1522c6;
    const _0x3ae6e5 = 3.35;
    const _0x4a5372 = _0x44212d(_0x3ae6e5, _0x557d32);
    const _0x493a05 = _0x5d9286 + _0x3ae6e5 * 0.5;
    const _0x557c12 = _0x58b13d(_0x333e4a, {
      x: 0,
      y: 0,
      z: _0x493a05
    }, {
      side: 1
    }, _0x88c2f);
    _0x32dc20.push({
      shearId: "b-shear-1",
      segment: "beatB",
      center: {
        x: 0,
        y: 1.5,
        z: _0x493a05
      },
      halfExtents: {
        x: 2.4,
        y: 1.7,
        z: _0x3ae6e5 * 0.5
      },
      impulse: {
        x: 5.8,
        y: 0.1,
        z: 0
      },
      markerRoot: _0x557c12,
      cooldown: 0.85
    });
    _0x102a6a.b2 = {
      x: 0,
      z: _0x4a5372
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x4a5372,
      halfX: _0x4e7ca9,
      halfZ: _0x557d32,
      name: "B-Pad-2",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    _0x4666f8.push({
      id: "b-2",
      x: 0,
      y: 1.2,
      z: _0x4a5372
    });
  }
  {
    const _0x3ed10c = _0x44212d(3.2, 1);
    _0x2bb8a8.push(x({
      parent: _0x333e4a,
      physics: _0x583832,
      slateMap: _0x32212b,
      sideMat: _0x6bfc96,
      cx: 0.15,
      cz: _0x3ed10c,
      halfX: 1.2,
      halfZ: 1,
      collapseId: "b-collapse-2",
      segment: "beatB",
      disposers: _0x88c2f,
      supportColliders: _0x2558d2
    }));
  }
  {
    const _0x3a4ef9 = _0x1522c6;
    const _0x575b5f = 3.5;
    const _0x3f7283 = _0x44212d(_0x575b5f, 1.35);
    const _0x39729b = _0x3a4ef9 + _0x575b5f * 0.5;
    const _0x43fc5f = _0x58b13d(_0x333e4a, {
      x: 0,
      y: 0,
      z: _0x39729b
    }, {
      side: -1
    }, _0x88c2f);
    _0x32dc20.push({
      shearId: "b-shear-2",
      segment: "beatB",
      center: {
        x: 0,
        y: 1.5,
        z: _0x39729b
      },
      halfExtents: {
        x: 2.5,
        y: 1.7,
        z: _0x575b5f * 0.5
      },
      impulse: {
        x: -6,
        y: 0.12,
        z: 0
      },
      markerRoot: _0x43fc5f,
      cooldown: 0.85
    });
    _0x102a6a.bPickup = {
      x: 0,
      z: _0x3f7283
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x3f7283,
      halfX: 1.6,
      halfZ: 1.35,
      name: "B-Pad-Pickup",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    u(_0x465761, "platform-stone", _0x333e4a, {
      x: 0,
      y: 0,
      z: _0x3f7283,
      name: "b-tile-pickup"
    }, _0x3bc519, _0x88c2f, {
      x: 2.8,
      y: 0.45,
      z: 2.3
    });
    const _0x26202e = {
      x: 0.9,
      y: 0,
      z: _0x3f7283
    };
    const _0x1500de = _0xeff787(_0x333e4a, _0x26202e, _0x88c2f);
    _0x62ddb2.push({
      pickupId: "b-pickup-1",
      segment: "beatB",
      center: {
        x: _0x26202e.x,
        y: 0.2,
        z: _0x26202e.z
      },
      radius: 1.2,
      amount: 1,
      propRoot: _0x1500de
    });
    _0x4666f8.push({
      id: "b-pickup",
      x: 0,
      y: 1.2,
      z: _0x3f7283
    });
  }
  {
    const _0x255927 = _0x44212d(3.25, 1);
    _0x2bb8a8.push(x({
      parent: _0x333e4a,
      physics: _0x583832,
      slateMap: _0x32212b,
      sideMat: _0x6bfc96,
      cx: -0.1,
      cz: _0x255927,
      halfX: 1.25,
      halfZ: 1,
      collapseId: "b-collapse-3",
      segment: "beatB",
      disposers: _0x88c2f,
      supportColliders: _0x2558d2
    }));
    _0x4666f8.push({
      id: "b-collapse-3",
      x: -0.1,
      y: 1.2,
      z: _0x255927
    });
  }
  {
    const _0x224cbd = _0x1522c6;
    const _0x37292e = 3.6;
    const _0x3c1065 = _0x44212d(_0x37292e, _0x557d32);
    const _0x244ded = _0x224cbd + _0x37292e * 0.5;
    const _0x260e4b = _0x58b13d(_0x333e4a, {
      x: 0,
      y: 0,
      z: _0x244ded
    }, {
      side: 1
    }, _0x88c2f);
    _0x32dc20.push({
      shearId: "b-shear-3",
      segment: "beatB",
      center: {
        x: 0,
        y: 1.55,
        z: _0x244ded
      },
      halfExtents: {
        x: 2.5,
        y: 1.75,
        z: _0x37292e * 0.5
      },
      impulse: {
        x: 5.5,
        y: 0.1,
        z: 0
      },
      markerRoot: _0x260e4b,
      cooldown: 0.85
    });
    _0x102a6a.bApproach = {
      x: 0,
      z: _0x3c1065
    };
    y({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      cx: 0,
      cz: _0x3c1065,
      halfX: 1.55,
      halfZ: _0x557d32,
      name: "B-Pad-GateApproach",
      supportColliders: _0x2558d2,
      disposers: _0x88c2f
    });
    u(_0x465761, "stairs-wide", _0x333e4a, {
      x: 0,
      y: 0,
      z: _0x3c1065 - 0.3,
      yaw: 0,
      name: "b-stairs-approach"
    }, _0x3bc519, _0x88c2f, {
      x: 2.8,
      y: 0.9,
      z: 1.6
    });
    _0x4666f8.push({
      id: "b-approach",
      x: 0,
      y: 1.2,
      z: _0x3c1065
    });
  }
  {
    const _0x426645 = _0x1522c6 + 1.1;
    const _0x3dc770 = 1.4;
    const _0x547cd7 = _0x426645 + 1.5 + _0x3dc770;
    _0x1522c6 = _0x547cd7 + _0x3dc770;
    const _0x203f0e = function (_0x54f494) {
      const {
        parent: _0x1adce8,
        physics: _0x250526,
        topMat: _0x1340fa,
        sideMat: _0x5bb210,
        gateId: _0x4e142f,
        segment: _0x221152,
        frameZ: _0x5b94b1,
        padCx: _0x4cc0a6,
        padCz: _0x4f5618,
        halfX: _0x10047c,
        halfZ: _0x1c564b,
        disposers: _0x5d4193,
        supportColliders: _0x2bf28f
      } = _0x54f494;
      const _0x1baf3e = _0x1bbde6(_0x1adce8, {
        x: _0x4cc0a6,
        y: 0,
        z: _0x5b94b1
      }, _0x5d4193);
      const _0x2795b1 = {
        x: _0x4cc0a6 + _0x1baf3e.socketLocal.x,
        y: 0 + _0x1baf3e.socketLocal.y,
        z: _0x5b94b1 + _0x1baf3e.socketLocal.z
      };
      const _0x2d760e = new _0x5bbd57.Group();
      _0x2d760e.name = "LockedPad:" + _0x4e142f;
      _0x2d760e.position.set(_0x4cc0a6, -0.6, _0x4f5618);
      const _0x493c37 = new _0x5bbd57.BoxGeometry(_0x10047c * 2, 0.18, _0x1c564b * 2);
      const _0x268fba = _0x1340fa.clone();
      _0x268fba.name = "LockedPadMat:" + _0x4e142f;
      _0x268fba.transparent = true;
      _0x268fba.opacity = 0.42;
      _0x268fba.color = new _0x5bbd57.Color(4871528);
      _0x268fba.emissive = new _0x5bbd57.Color(_0x17c8a3.violet);
      _0x268fba.emissiveIntensity = 0.08;
      const _0x32d213 = new _0x5bbd57.Mesh(_0x493c37, _0x268fba);
      _0x32d213.position.y = 0.51;
      _0x32d213.castShadow = false;
      _0x32d213.receiveShadow = true;
      _0x2d760e.add(_0x32d213);
      const _0x83a8f = new _0x5bbd57.BoxGeometry(_0x10047c * 2 * 0.96, 1.08, _0x1c564b * 2 * 0.96);
      const _0x1c8474 = new _0x5bbd57.Mesh(_0x83a8f, _0x5bb210);
      _0x1c8474.position.y = -0.04;
      _0x1c8474.castShadow = false;
      _0x2d760e.add(_0x1c8474);
      _0x1adce8.add(_0x2d760e);
      const _0x16ffcc = _0x250526.createFixed(_0x2d760e);
      let _0x2a9d23 = _0x250526.createCollider(_0x250526.RAPIER.ColliderDesc.cuboid(_0x10047c, h, _0x1c564b).setFriction(0.9).setRestitution(0), _0x16ffcc);
      let _0x1c74bb = true;
      const _0x363bbb = {
        gateId: _0x4e142f,
        segment: _0x221152,
        lockedPadCenter: {
          x: _0x4cc0a6,
          y: 0,
          z: _0x4f5618
        },
        lockedHalfExtents: {
          x: _0x10047c,
          y: h,
          z: _0x1c564b
        },
        frameRoot: _0x1baf3e.root,
        lockedPadRoot: _0x2d760e,
        lockedCollider: _0x2a9d23,
        lockedBody: _0x16ffcc,
        beaconSocketPos: _0x2795b1,
        enablePad() {
          if (!_0x1c74bb && (_0x1c74bb = true, _0x2d760e.visible = true, _0x268fba.opacity = 1, _0x268fba.transparent = false, _0x268fba.color.setHex(9149099), _0x268fba.emissiveIntensity = 0, _0x32d213.castShadow = true, _0x1c8474.castShadow = true, !_0x2a9d23)) {
            try {
              _0x2a9d23 = _0x250526.createCollider(_0x250526.RAPIER.ColliderDesc.cuboid(_0x10047c, h, _0x1c564b).setFriction(0.9).setRestitution(0), _0x16ffcc);
              _0x363bbb.lockedCollider = _0x2a9d23;
              if (_0x2bf28f && !_0x2bf28f.includes(_0x2a9d23)) {
                _0x2bf28f.push(_0x2a9d23);
              }
              if (_0x250526?.beginSupportSetup) {
                const _0x440fca = _0x250526.beginSupportSetup();
                _0x440fca.registerSupport(_0x2a9d23);
                _0x440fca.commit();
              }
            } catch (_0x4690a2) {
              console.warn("[beatsAB] enablePad " + _0x4e142f, _0x4690a2);
            }
          }
        },
        disablePad() {
          if (!_0x1c74bb && !_0x2a9d23) {
            _0x2d760e.visible = true;
            _0x268fba.opacity = 0.42;
            _0x268fba.transparent = true;
            _0x268fba.color.setHex(4871528);
            _0x268fba.emissiveIntensity = 0.08;
            _0x32d213.castShadow = false;
            _0x1c8474.castShadow = false;
            return;
          }
          _0x1c74bb = false;
          _0x268fba.opacity = 0.42;
          _0x268fba.transparent = true;
          _0x268fba.color.setHex(4871528);
          _0x268fba.emissiveIntensity = 0.08;
          _0x32d213.castShadow = false;
          _0x1c8474.castShadow = false;
          if (_0x2a9d23) {
            const _0x565848 = _0x2bf28f?.indexOf?.(_0x2a9d23) ?? -1;
            if (_0x565848 >= 0) {
              _0x2bf28f.splice(_0x565848, 1);
            }
            try {
              _0x250526.removeCollider?.(_0x2a9d23);
            } catch {}
            _0x2a9d23 = null;
            _0x363bbb.lockedCollider = null;
          }
        }
      };
      _0x5d4193.push(() => {
        try {
          if (_0x363bbb.lockedCollider) {
            _0x250526.removeCollider?.(_0x363bbb.lockedCollider);
          }
        } catch {}
        try {
          _0x16ffcc.dispose?.();
        } catch {}
        _0x493c37.dispose();
        _0x83a8f.dispose();
        _0x268fba.dispose();
        _0x2d760e.removeFromParent();
      });
      _0x363bbb.disablePad();
      return _0x363bbb;
    }({
      parent: _0x333e4a,
      physics: _0x583832,
      topMat: _0x3bc519,
      sideMat: _0x6bfc96,
      gateId: "b-gate-1",
      segment: "beatB",
      frameZ: _0x426645,
      padCx: 0,
      padCz: _0x547cd7,
      halfX: 1.7,
      halfZ: _0x3dc770,
      disposers: _0x88c2f,
      supportColliders: _0x2558d2
    });
    _0x5bfc79.push(_0x203f0e);
    u(_0x465761, "cliff-steps", _0x333e4a, {
      x: 0,
      y: -1.5,
      z: _0x547cd7 + 1.2,
      yaw: 0,
      name: "b-gate-cliff"
    }, _0x3bc519, _0x88c2f, {
      x: 3,
      y: 2.2,
      z: 2.4
    });
    _0x4666f8.push({
      id: "b-gate",
      x: 0,
      y: 1.2,
      z: _0x426645
    });
    _0x4666f8.push({
      id: "b-end",
      x: 0,
      y: 1.2,
      z: _0x547cd7
    });
  }
  {
    const _0x343ea2 = {
      x: (_0x102a6a.a1?.x ?? 0) + 0.75,
      y: 0,
      z: _0x102a6a.a1?.z ?? 0
    };
    _0x1cfece.push({
      spiritId: "a-spirit-1",
      segment: "beatA",
      center: {
        ..._0x343ea2
      },
      anchorId: "a-anchor-1",
      propRoot: _0x248df9(_0x333e4a, _0x343ea2, _0x88c2f),
      homeYaw: 0
    });
    const _0x51e6f6 = {
      x: (_0x102a6a.a2?.x ?? 0) - 0.7,
      y: 0,
      z: (_0x102a6a.a2?.z ?? 0) + 0.15
    };
    _0x345f57.push({
      anchorId: "a-anchor-1",
      segment: "beatA",
      center: {
        ..._0x51e6f6
      },
      capacity: 1,
      propRoot: _0x158d0e(_0x333e4a, _0x51e6f6, _0x88c2f)
    });
    const _0x39cf56 = {
      x: (_0x102a6a.a3?.x ?? 0.35) + 0.85,
      y: 0,
      z: _0x102a6a.a3?.z ?? 0
    };
    _0x1cfece.push({
      spiritId: "a-spirit-2",
      segment: "beatA",
      center: {
        ..._0x39cf56
      },
      anchorId: "a-anchor-2",
      propRoot: _0x248df9(_0x333e4a, _0x39cf56, _0x88c2f),
      homeYaw: 0
    });
    const _0x47c38b = {
      x: (_0x102a6a.a5?.x ?? 0) - 0.8,
      y: 0,
      z: _0x102a6a.a5?.z ?? 0
    };
    _0x345f57.push({
      anchorId: "a-anchor-2",
      segment: "beatA",
      center: {
        ..._0x47c38b
      },
      capacity: 1,
      propRoot: _0x158d0e(_0x333e4a, _0x47c38b, _0x88c2f)
    });
    const _0x5456bc = {
      x: (_0x102a6a.b1?.x ?? 0) + 0.7,
      y: 0,
      z: _0x102a6a.b1?.z ?? 0
    };
    _0x1cfece.push({
      spiritId: "b-spirit-1",
      segment: "beatB",
      center: {
        ..._0x5456bc
      },
      anchorId: "b-anchor-1",
      propRoot: _0x248df9(_0x333e4a, _0x5456bc, _0x88c2f),
      homeYaw: 0
    });
    const _0xaba86b = {
      x: (_0x102a6a.b2?.x ?? 0) - 0.75,
      y: 0,
      z: _0x102a6a.b2?.z ?? 0
    };
    _0x345f57.push({
      anchorId: "b-anchor-1",
      segment: "beatB",
      center: {
        ..._0xaba86b
      },
      capacity: 1,
      propRoot: _0x158d0e(_0x333e4a, _0xaba86b, _0x88c2f)
    });
    const _0x56e13f = {
      x: (_0x102a6a.bPickup?.x ?? 0) - 0.85,
      y: 0,
      z: (_0x102a6a.bPickup?.z ?? 0) + 0.2
    };
    _0x1cfece.push({
      spiritId: "b-spirit-2",
      segment: "beatB",
      center: {
        ..._0x56e13f
      },
      anchorId: "b-anchor-2",
      propRoot: _0x248df9(_0x333e4a, _0x56e13f, _0x88c2f),
      homeYaw: 0
    });
    const _0x1be1f9 = {
      x: (_0x102a6a.bApproach?.x ?? 0) + 0.8,
      y: 0,
      z: _0x102a6a.bApproach?.z ?? 0
    };
    _0x345f57.push({
      anchorId: "b-anchor-2",
      segment: "beatB",
      center: {
        ..._0x1be1f9
      },
      capacity: 1,
      propRoot: _0x158d0e(_0x333e4a, _0x1be1f9, _0x88c2f)
    });
    const _0x55b1ac = _0x5bfc79[0];
    if (_0x55b1ac?.beaconSocketPos) {
      const _0xd212b = {
        x: _0x55b1ac.beaconSocketPos.x,
        y: _0x55b1ac.beaconSocketPos.y,
        z: _0x55b1ac.beaconSocketPos.z
      };
      const _0xd253ff = _0xd0daa(_0x333e4a, _0xd212b, _0x88c2f);
      _0xd253ff.setLit(false);
      _0x585211.push({
        beaconId: "b-beacon-1",
        segment: "beatB",
        gateId: _0x55b1ac.gateId,
        center: {
          ..._0xd212b
        },
        propRoot: _0xd253ff.root,
        setLitVisual: _0x15fc00 => _0xd253ff.setLit(!!_0x15fc00)
      });
    }
    if (_0x102a6a.b2 && _0x102a6a.bPickup) {
      const _0x19f6f1 = (_0x102a6a.b2.z + _0x102a6a.bPickup.z) * 0.5;
      const _0x253168 = Math.abs(_0x102a6a.bPickup.z - _0x102a6a.b2.z);
      const _0x283efa = {
        x: 1.55,
        y: 1.35,
        z: Math.min(1.8, Math.max(1.1, _0x253168 * 0.28))
      };
      const _0x58bceb = {
        x: 0.35,
        y: 0,
        z: _0x19f6f1
      };
      const _0x342c33 = _0x1f0b5c(_0x333e4a, _0x58bceb, _0x283efa, _0x88c2f);
      _0x1fb974.push({
        fieldId: "b-storm-1",
        segment: "beatB",
        center: {
          x: _0x58bceb.x,
          y: 0 + _0x283efa.y * 0.35,
          z: _0x58bceb.z
        },
        halfExtents: _0x283efa,
        decalRoot: _0x342c33
      });
    }
  }
  const _0x31adfa = (_0x4e8265.routeSpine ?? []).map(_0x2efeb0 => ({
    ..._0x2efeb0
  })).concat(_0x4666f8);
  let _0x5d58dd = false;
  return {
    root: _0x333e4a,
    collapses: _0x2bb8a8,
    shears: _0x32dc20,
    rests: _0x4d9fb7,
    pickups: _0x62ddb2,
    gates: _0x5bfc79,
    spirits: _0x1cfece,
    anchors: _0x345f57,
    beaconSockets: _0x585211,
    stormFields: _0x1fb974,
    routeSpineExtended: _0x31adfa,
    supportColliders: _0x2558d2,
    surfaceY: 0,
    dispose: () => {
      if (!_0x5d58dd) {
        _0x5d58dd = true;
        for (let _0x1213ed = _0x88c2f.length - 1; _0x1213ed >= 0; _0x1213ed--) {
          try {
            _0x88c2f[_0x1213ed]();
          } catch {}
        }
        _0x333e4a.removeFromParent();
      }
    }
  };
}