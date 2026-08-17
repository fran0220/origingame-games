import * as _0xc9ff6e from "three";
import { ASSET_PATHS as _0x3f7235, STORM_PALETTE as _0x584411 } from "../shared/contracts.js";
import { addCollapsePlate as _0xff2a4 } from "./rescueContent.js";
import { createSpiritWispProp as _0x1ecfd4, createAmberAnchorProp as _0x23cc4e, createRestAltarProp as _0x2084d4, createShearMarker as _0x3cd2fe } from "./props/markers.js";
const l = 0.6;
const p = 3.5;
const d = 6;
const c = 5.5;
const m = 0;
const h = 2.4;
const f = 2.2;
export const preferredCamera = {
  preset: "iso",
  distance: 11,
  height: 6,
  lookHeight: 1.2,
  notes: "Side-three-quarter along route spine (+Z). Use createSpineCameraBinder after player exists."
};
export const WORLD_HANDOFF = {
  module: "src/world/onboardingIsle.js",
  build: "buildOnboardingIsle(game, physics)",
  environment: "setupEnvironment(game) — also invoked inside build",
  cameraHelper: "src/world/spineCamera.js → createSpineCameraBinder",
  preferredCamera: preferredCamera,
  fields: {
    root: "Object3D added to game.scene",
    supportMeshes: "visible walkable meshes (thick slabs + kit dressing)",
    supportColliders: "live Rapier colliders from physics.createFixed + createCollider",
    spawnFoot: "{ position:{x,y,z}, yaw } foot anchor on main isle center (surface Y)",
    routeSpine: "samples main → gap edge → landing (look-height Y)",
    killY: "STORM_PALETTE.kill (-18); fail logic is gameplay-owned",
    dispose: "removes root, colliders, materials, sky, lights owned here",
    preferredCamera: "iso distance~11 height~6 lookHeight~1.2",
    spirits: "SpiritSpawnPlacement[] o-spirit-1 on main isle (not spawn-blocking)",
    anchors: "AnchorPlacement[] o-anchor-1 on landing pad (carry teach)",
    rests: "RestAltarPlacement[] o-rest-1 restore:'full' on main isle",
    collapses: "CollapsePlatePlacement[] o-collapse-1 short plate on landing",
    shears: "ShearVolumePlacement[] o-shear-1 over practice gap"
  },
  assetsConsumed: [_0x3f7235.hdri, _0x3f7235.platformStone, _0x3f7235.cliffSteps, _0x3f7235.stairsWide, _0x3f7235.slateDiffuse]
};
export async function setupEnvironment(_0x520595) {
  await _0x520595.render.setEnvironment({
    source: _0x3f7235.hdri,
    background: false
  });
  _0x520595.render.setLighting([{
    type: "hemisphere",
    name: "Storm Fill",
    color: 10136520,
    groundColor: _0x584411.slateDeep,
    intensity: 0.68
  }, {
    type: "directional",
    name: "Storm Key",
    color: 12898532,
    intensity: 1.32,
    position: [8, 14, 4],
    target: [0, 0, 2],
    castShadow: true,
    shadow: {
      mapSize: [2048, 2048],
      bias: -0.00025,
      normalBias: 0.03,
      camera: {
        near: 1,
        far: 48,
        left: -18,
        right: 18,
        top: 18,
        bottom: -18
      }
    }
  }, {
    type: "directional",
    name: "Violet Rim",
    color: _0x584411.violet,
    intensity: 0.34,
    position: [-10, 6, -6],
    target: [0, 0, 2]
  }, {
    type: "ambient",
    name: "Storm Ambient",
    color: 4604010,
    intensity: 0.3
  }]);
  if (_0x520595.scene.fog) {
    _0x520595.scene.fog.color.setHex(_0x584411.fog);
    _0x520595.scene.fog.near = 22;
    _0x520595.scene.fog.far = 72;
  } else {
    _0x520595.scene.fog = new _0xc9ff6e.Fog(_0x584411.fog, 22, 72);
  }
  _0x520595.scene.background = new _0xc9ff6e.Color(_0x584411.indigo);
}
function u(_0x3cde24) {
  const {
    parent: _0xab1d91,
    physics: _0x2f0ad5,
    topMat: _0x325e4f,
    sideMat: _0x18c43e,
    cx: _0x8e8463,
    cz: _0x12aad5,
    halfX: _0x287153,
    halfZ: _0x5761df,
    name: _0x32b7aa,
    supportMeshes: _0x4247b5,
    supportColliders: _0x203a19,
    disposers: _0x463730
  } = _0x3cde24;
  const _0x5a0ac1 = new _0xc9ff6e.Group();
  _0x5a0ac1.name = _0x32b7aa;
  _0x5a0ac1.position.set(_0x8e8463, -0.6, _0x12aad5);
  const _0x26179a = new _0xc9ff6e.BoxGeometry(_0x287153 * 2, 0.18, _0x5761df * 2);
  const _0x45de58 = new _0xc9ff6e.Mesh(_0x26179a, _0x325e4f);
  _0x45de58.position.y = 0.51;
  _0x45de58.castShadow = true;
  _0x45de58.receiveShadow = true;
  _0x45de58.name = _0x32b7aa + "-top";
  _0x5a0ac1.add(_0x45de58);
  const _0x20ea3d = new _0xc9ff6e.BoxGeometry(_0x287153 * 2 * 0.96, 1.08, _0x5761df * 2 * 0.96);
  const _0x713d7 = new _0xc9ff6e.Mesh(_0x20ea3d, _0x18c43e);
  _0x713d7.position.y = -0.04;
  _0x713d7.castShadow = true;
  _0x713d7.receiveShadow = true;
  _0x713d7.name = _0x32b7aa + "-body";
  _0x5a0ac1.add(_0x713d7);
  const _0x2bc401 = new _0xc9ff6e.BoxGeometry(_0x287153 * 2 + 0.35, 0.22, _0x5761df * 2 + 0.35);
  const _0x168ce7 = new _0xc9ff6e.Mesh(_0x2bc401, _0x18c43e);
  _0x168ce7.position.y = l - 0.28;
  _0x168ce7.castShadow = true;
  _0x168ce7.receiveShadow = true;
  _0x168ce7.name = _0x32b7aa + "-lip";
  _0x5a0ac1.add(_0x168ce7);
  _0xab1d91.add(_0x5a0ac1);
  _0x4247b5.push(_0x45de58, _0x713d7, _0x168ce7);
  const _0xcc06bd = _0x2f0ad5.createFixed(_0x5a0ac1);
  const _0x108fd5 = _0x2f0ad5.createCollider(_0x2f0ad5.RAPIER.ColliderDesc.cuboid(_0x287153, l, _0x5761df).setFriction(0.9).setRestitution(0), _0xcc06bd);
  _0x203a19.push(_0x108fd5);
  _0x463730.push(() => {
    try {
      _0x2f0ad5.removeCollider?.(_0x108fd5);
    } catch {}
    try {
      _0xcc06bd.dispose?.();
    } catch {}
    _0x26179a.dispose();
    _0x20ea3d.dispose();
    _0x2bc401.dispose();
    _0x5a0ac1.removeFromParent();
  });
  return {
    group: _0x5a0ac1,
    collider: _0x108fd5,
    fixed: _0xcc06bd
  };
}
function y(_0x34fb63, _0x36f9f8, _0x445a45) {
  const _0x250d45 = new _0xc9ff6e.PointLight(_0x584411.amber, 0.85, 11, 2);
  _0x250d45.name = "AmberSpawnAccent";
  _0x250d45.position.set(_0x36f9f8.x, _0x36f9f8.y, _0x36f9f8.z);
  _0x250d45.castShadow = false;
  _0x34fb63.add(_0x250d45);
  const _0x3b7c34 = new _0xc9ff6e.SphereGeometry(0.12, 12, 10);
  const _0x47edac = new _0xc9ff6e.MeshStandardMaterial({
    color: _0x584411.amber,
    emissive: new _0xc9ff6e.Color(_0x584411.amber),
    emissiveIntensity: 0.9,
    roughness: 0.4,
    metalness: 0.1
  });
  const _0x50cbef = new _0xc9ff6e.Mesh(_0x3b7c34, _0x47edac);
  _0x50cbef.position.copy(_0x250d45.position);
  _0x50cbef.name = "AmberAccentOrb";
  _0x34fb63.add(_0x50cbef);
  _0x445a45.push(() => {
    _0x250d45.removeFromParent();
    _0x50cbef.removeFromParent();
    _0x3b7c34.dispose();
    _0x47edac.dispose();
  });
}
function g(_0x57d3d4, _0x42d951, _0x22b580, _0x10d538, _0x4e0721, _0x6fdb55, _0x1e495a) {
  const _0x24da20 = _0x57d3d4.assets.spawn(_0x42d951, {
    name: _0x10d538.name ?? _0x42d951,
    targetSize: _0x1e495a
  });
  var _0x4f33af;
  var _0x5351f3;
  _0x24da20.root.position.set(_0x10d538.x ?? 0, _0x10d538.y ?? 0, _0x10d538.z ?? 0);
  if (Number.isFinite(_0x10d538.yaw)) {
    _0x24da20.root.rotation.y = _0x10d538.yaw;
  }
  _0x4f33af = _0x24da20.root;
  _0x5351f3 = _0x4e0721;
  _0x4f33af.traverse(_0x3fa610 => {
    if (_0x3fa610.isMesh) {
      _0x3fa610.castShadow = true;
      _0x3fa610.receiveShadow = true;
      _0x3fa610.material = _0x5351f3;
    }
  });
  _0x22b580.add(_0x24da20.root);
  _0x6fdb55.push(() => _0x24da20.dispose());
  return _0x24da20;
}
export async function buildOnboardingIsle(_0x59ef11, _0x583955) {
  if (!_0x59ef11?.scene || !_0x59ef11?.assets || !_0x59ef11?.render) {
    throw new Error("buildOnboardingIsle requires a live og-engine game.");
  }
  if (!_0x583955?.RAPIER || !_0x583955.createFixed || !_0x583955.createCollider) {
    throw new Error("buildOnboardingIsle requires a Rapier physics adapter.");
  }
  await _0x59ef11.assets.load([{
    id: "platform-stone",
    url: _0x3f7235.platformStone,
    type: "gltf"
  }, {
    id: "cliff-steps",
    url: _0x3f7235.cliffSteps,
    type: "gltf"
  }, {
    id: "stairs-wide",
    url: _0x3f7235.stairsWide,
    type: "gltf"
  }, {
    id: "slate-diffuse",
    url: _0x3f7235.slateDiffuse,
    type: "texture",
    semantic: "color"
  }]);
  await setupEnvironment(_0x59ef11);
  const _0xce8579 = new _0xc9ff6e.Group();
  _0xce8579.name = "OnboardingIsle";
  _0x59ef11.scene.add(_0xce8579);
  const _0x31a178 = [];
  const _0x816fc4 = [];
  const _0x8401fa = [];
  const _0x280b14 = _0x59ef11.assets.texture("slate-diffuse");
  const _0x1828d1 = function (_0x23db74) {
    const _0x4cc634 = _0x23db74.clone();
    _0x4cc634.colorSpace = _0xc9ff6e.SRGBColorSpace;
    _0x4cc634.wrapS = _0x4cc634.wrapT = _0xc9ff6e.RepeatWrapping;
    _0x4cc634.repeat.set(2.4, 2.4);
    _0x4cc634.needsUpdate = true;
    return new _0xc9ff6e.MeshStandardMaterial({
      name: "WetSlate",
      map: _0x4cc634,
      color: new _0xc9ff6e.Color(9149099),
      roughness: 0.78,
      metalness: 0.05,
      envMapIntensity: 0.95
    });
  }(_0x280b14);
  const _0x476488 = new _0xc9ff6e.MeshStandardMaterial({
    name: "DeepStone",
    color: new _0xc9ff6e.Color(_0x584411.slateDeep),
    roughness: 0.9,
    metalness: 0.04,
    envMapIntensity: 0.6
  });
  _0x31a178.push(() => {
    _0x1828d1.map?.dispose?.();
    _0x1828d1.dispose();
    _0x476488.dispose();
  });
  const _0x17b2b1 = function (_0x254063) {
    const _0xde69ee = new _0xc9ff6e.SphereGeometry(90, 32, 20);
    const _0x1c808c = {
      topColor: {
        value: new _0xc9ff6e.Color(1709112)
      },
      midColor: {
        value: new _0xc9ff6e.Color(2760522)
      },
      bottomColor: {
        value: new _0xc9ff6e.Color(789014)
      },
      offset: {
        value: 4
      },
      exponent: {
        value: 0.72
      }
    };
    const _0x421172 = new _0xc9ff6e.ShaderMaterial({
      uniforms: _0x1c808c,
      vertexShader: "\n      varying vec3 vWorldPosition;\n      void main() {\n        vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n        vWorldPosition = worldPosition.xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n    ",
      fragmentShader: "\n      uniform vec3 topColor;\n      uniform vec3 midColor;\n      uniform vec3 bottomColor;\n      uniform float offset;\n      uniform float exponent;\n      varying vec3 vWorldPosition;\n      void main() {\n        float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;\n        float t = max(h, 0.0);\n        t = pow(t, exponent);\n        vec3 col = mix(bottomColor, midColor, smoothstep(0.0, 0.45, t));\n        col = mix(col, topColor, smoothstep(0.35, 1.0, t));\n        // Soft violet bruise bands\n        float band = sin(vWorldPosition.x * 0.04 + vWorldPosition.z * 0.03) * 0.5 + 0.5;\n        col = mix(col, vec3(0.22, 0.14, 0.42), band * 0.12 * (1.0 - t));\n        gl_FragColor = vec4(col, 1.0);\n      }\n    ",
      side: _0xc9ff6e.BackSide,
      depthWrite: false,
      fog: false
    });
    const _0x90242f = new _0xc9ff6e.Mesh(_0xde69ee, _0x421172);
    _0x90242f.name = "StormSkyDome";
    _0x90242f.frustumCulled = false;
    _0x90242f.renderOrder = -10;
    _0x254063.add(_0x90242f);
    return {
      mesh: _0x90242f,
      dispose() {
        _0x90242f.removeFromParent();
        _0xde69ee.dispose();
        _0x421172.dispose();
      }
    };
  }(_0xce8579);
  _0x31a178.push(() => _0x17b2b1.dispose());
  u({
    parent: _0xce8579,
    physics: _0x583955,
    topMat: _0x1828d1,
    sideMat: _0x476488,
    cx: 0,
    cz: m,
    halfX: d,
    halfZ: c,
    name: "MainIsleSlab",
    supportMeshes: _0x816fc4,
    supportColliders: _0x8401fa,
    disposers: _0x31a178
  });
  const _0x3904af = {
    x: 3.2,
    y: 0.55,
    z: 3.2
  };
  const _0x5662cc = [{
    x: -3.2,
    z: -2.6,
    name: "tile-sw"
  }, {
    x: 0,
    z: -2.6,
    name: "tile-s"
  }, {
    x: 3.2,
    z: -2.6,
    name: "tile-se"
  }, {
    x: -3.2,
    z: 0.4,
    name: "tile-mw"
  }, {
    x: 0,
    z: 0.4,
    name: "tile-m"
  }, {
    x: 3.2,
    z: 0.4,
    name: "tile-me"
  }, {
    x: -2.4,
    z: 3.2,
    name: "tile-nw"
  }, {
    x: 2.4,
    z: 3.2,
    name: "tile-ne"
  }];
  for (const _0x4ed34c of _0x5662cc) {
    g(_0x59ef11, "platform-stone", _0xce8579, {
      x: _0x4ed34c.x,
      y: 0,
      z: _0x4ed34c.z,
      name: _0x4ed34c.name
    }, _0x1828d1, _0x31a178, _0x3904af);
  }
  g(_0x59ef11, "cliff-steps", _0xce8579, {
    x: -5.2,
    y: -1.1,
    z: -1.5,
    yaw: Math.PI * 0.5,
    name: "cliff-west"
  }, _0x1828d1, _0x31a178, {
    x: 3.5,
    y: 2.4,
    z: 4.5
  });
  g(_0x59ef11, "cliff-steps", _0xce8579, {
    x: 5.2,
    y: -1.1,
    z: 1.2,
    yaw: -Math.PI * 0.5,
    name: "cliff-east"
  }, _0x1828d1, _0x31a178, {
    x: 3.5,
    y: 2.4,
    z: 4.5
  });
  g(_0x59ef11, "cliff-steps", _0xce8579, {
    x: 0,
    y: -1.6,
    z: -5.2,
    yaw: Math.PI,
    name: "cliff-south"
  }, _0x1828d1, _0x31a178, {
    x: 5,
    y: 2.8,
    z: 3.2
  });
  g(_0x59ef11, "stairs-wide", _0xce8579, {
    x: 0,
    y: 0,
    z: c - 1.6,
    yaw: 0,
    name: "stairs-approach"
  }, _0x1828d1, _0x31a178, {
    x: 3.6,
    y: 1.1,
    z: 2.2
  });
  const _0x16ef0f = m + c;
  const _0x4b2bd5 = _0x16ef0f + p + f;
  u({
    parent: _0xce8579,
    physics: _0x583955,
    topMat: _0x1828d1,
    sideMat: _0x476488,
    cx: 0,
    cz: _0x4b2bd5,
    halfX: h,
    halfZ: f,
    name: "LandingPadSlab",
    supportMeshes: _0x816fc4,
    supportColliders: _0x8401fa,
    disposers: _0x31a178
  });
  g(_0x59ef11, "platform-stone", _0xce8579, {
    x: 0,
    y: 0,
    z: _0x4b2bd5,
    name: "landing-tile"
  }, _0x1828d1, _0x31a178, {
    x: 4.2,
    y: 0.55,
    z: 3.8
  });
  g(_0x59ef11, "cliff-steps", _0xce8579, {
    x: 0,
    y: -1.4,
    z: _0x4b2bd5 + 1.6,
    yaw: 0,
    name: "landing-cliff"
  }, _0x1828d1, _0x31a178, {
    x: 3.2,
    y: 2.2,
    z: 2.4
  });
  y(_0xce8579, {
    x: -2.2,
    y: 1.35,
    z: m - c + 1.1
  }, _0x31a178);
  y(_0xce8579, {
    x: 1.6,
    y: 1.1,
    z: m - c + 0.8
  }, _0x31a178);
  const _0x345790 = [];
  const _0x16aecc = [];
  const _0x50037a = [];
  const _0x482c10 = [];
  const _0x5a4bdf = [];
  {
    const _0x406da4 = {
      x: 2.4,
      y: 0,
      z: m + 1.8
    };
    const _0x16eb0b = _0x1ecfd4(_0xce8579, _0x406da4, _0x31a178);
    _0x345790.push({
      spiritId: "o-spirit-1",
      segment: "onboarding",
      center: {
        x: _0x406da4.x,
        y: 0,
        z: _0x406da4.z
      },
      anchorId: "o-anchor-1",
      propRoot: _0x16eb0b,
      homeYaw: 0
    });
  }
  {
    const _0x5331da = {
      x: 0.85,
      y: 0,
      z: _0x4b2bd5 + 0.35
    };
    const _0x598bba = _0x23cc4e(_0xce8579, _0x5331da, _0x31a178);
    _0x16aecc.push({
      anchorId: "o-anchor-1",
      segment: "onboarding",
      center: {
        x: _0x5331da.x,
        y: 0,
        z: _0x5331da.z
      },
      capacity: 1,
      propRoot: _0x598bba
    });
  }
  {
    const _0x1a1dc3 = {
      x: -3.2,
      y: 0,
      z: m + 0.6
    };
    const _0x3ba6b2 = _0x2084d4(_0xce8579, _0x1a1dc3, _0x31a178);
    _0x50037a.push({
      restId: "o-rest-1",
      segment: "onboarding",
      center: {
        x: _0x1a1dc3.x,
        y: 0,
        z: _0x1a1dc3.z
      },
      radius: 1.45,
      restore: "full",
      propRoot: _0x3ba6b2
    });
  }
  {
    const _0x589420 = -1.15;
    const _0x1c288d = _0x4b2bd5 - f + 0.85;
    _0x482c10.push(_0xff2a4({
      parent: _0xce8579,
      physics: _0x583955,
      slateMap: _0x280b14,
      sideMat: _0x476488,
      cx: _0x589420,
      cz: _0x1c288d,
      halfX: 0.95,
      halfZ: 0.75,
      collapseId: "o-collapse-1",
      segment: "onboarding",
      disposers: _0x31a178,
      supportColliders: _0x8401fa
    }));
  }
  {
    const _0x2d31c3 = _0x16ef0f + 1.75;
    const _0x1b87f2 = _0x3cd2fe(_0xce8579, {
      x: 0,
      y: 0,
      z: _0x2d31c3
    }, {
      side: -1
    }, _0x31a178);
    _0x5a4bdf.push({
      shearId: "o-shear-1",
      segment: "onboarding",
      center: {
        x: 0,
        y: 1.35,
        z: _0x2d31c3
      },
      halfExtents: {
        x: 2,
        y: 1.5,
        z: 1.47
      },
      impulse: {
        x: -4.6,
        y: 0.12,
        z: 0
      },
      markerRoot: _0x1b87f2,
      cooldown: 0.85
    });
  }
  const _0x59d1db = function () {
    const _0x1e9539 = m + c;
    const _0x4e0948 = 1.2;
    return [{
      id: "spawn",
      x: 0,
      y: _0x4e0948,
      z: m - 1.2
    }, {
      id: "main-mid",
      x: 0,
      y: _0x4e0948,
      z: m + 1.5
    }, {
      id: "gap-edge",
      x: 0,
      y: _0x4e0948,
      z: _0x1e9539 - 0.4
    }, {
      id: "gap-air",
      x: 0,
      y: _0x4e0948 + 0.35,
      z: _0x1e9539 + 1.75
    }, {
      id: "landing",
      x: 0,
      y: _0x4e0948,
      z: _0x1e9539 + p + f
    }];
  }();
  let _0x587085 = false;
  return {
    root: _0xce8579,
    supportMeshes: _0x816fc4,
    supportColliders: _0x8401fa,
    spawnFoot: {
      position: {
        x: 0,
        y: 0,
        z: m - 0.8
      },
      yaw: 0
    },
    routeSpine: _0x59d1db,
    killY: _0x584411.kill,
    preferredCamera: preferredCamera,
    spirits: _0x345790,
    anchors: _0x16aecc,
    rests: _0x50037a,
    collapses: _0x482c10,
    shears: _0x5a4bdf,
    dispose: () => {
      if (!_0x587085) {
        _0x587085 = true;
        for (let _0x464482 = _0x31a178.length - 1; _0x464482 >= 0; _0x464482--) {
          try {
            _0x31a178[_0x464482]();
          } catch {}
        }
        _0xce8579.removeFromParent();
      }
    }
  };
}