import * as _0x26dc5e from "three";
import { CONFIG as _0x4e77a8, LIGHT_RIG as _0x27c0e0 } from "../config.js";
import { PAL as _0x2cfb2f } from "./palette.js";
import { ACTIVE_RIG as _0x57e61e, LIGHT_RIG_ID as _0x2c0379, lightVector as _0xcb20e0, shadowPolicy as _0x786826, shadowTexelTiles as _0x469b4b, snapToTexel as _0x213161 } from "./lightrig.js";
const l = _0x27c0e0.shadow;
let c = null;
let p = [];
let w = null;
let u = l.mapSize;
const g = {
  ...l
};
function f(_0xd5f9ec) {
  if (_0xd5f9ec) {
    return {
      lit: !!_0xd5f9ec.isMeshStandardMaterial || !!_0xd5f9ec.isMeshPhysicalMaterial || !!_0xd5f9ec.isMeshLambertMaterial || !!_0xd5f9ec.isMeshPhongMaterial || !!_0xd5f9ec.isMeshToonMaterial,
      opaque: _0xd5f9ec.transparent !== true && _0xd5f9ec.depthWrite !== false && (_0xd5f9ec.blending === undefined || _0xd5f9ec.blending === _0x26dc5e.NormalBlending)
    };
  } else {
    return null;
  }
}
export function shadowPolicyFor(_0x104850) {
  const _0x1742a8 = Array.isArray(_0x104850.material) ? _0x104850.material : [_0x104850.material];
  return _0x786826(_0x1742a8.map(f), _0x104850.userData && _0x104850.userData.shadow);
}
function m(_0x4fb4a7) {
  _0x4fb4a7.traverse(_0x4e2b08 => {
    if (!_0x4e2b08.isMesh && !_0x4e2b08.isInstancedMesh) {
      return;
    }
    if (_0x4e2b08.userData.__hbShadowWhy) {
      return;
    }
    const _0x3d4a5b = shadowPolicyFor(_0x4e2b08);
    _0x4e2b08.castShadow = _0x3d4a5b.cast;
    _0x4e2b08.receiveShadow = _0x3d4a5b.receive;
    _0x4e2b08.userData.__hbShadowWhy = _0x3d4a5b.why;
  });
}
function M(_0x46327e) {
  if (_0x46327e.type === "hemisphere") {
    return {
      light: new _0x26dc5e.HemisphereLight(_0x2cfb2f[_0x46327e.sky], _0x2cfb2f[_0x46327e.ground], _0x46327e.intensity),
      target: null
    };
  }
  return {
    light: new _0x26dc5e.DirectionalLight(_0x2cfb2f[_0x46327e.color], _0x46327e.intensity),
    target: new _0x26dc5e.Object3D()
  };
}
export function installLightRig(_0x5a304e, _0x55d412) {
  w = _0x55d412;
  const _0x3b70c6 = _0x57e61e;
  _0x5a304e.toneMapping = _0x26dc5e.ACESFilmicToneMapping;
  _0x5a304e.toneMappingExposure = _0x3b70c6.exposure;
  _0x5a304e.outputColorSpace = _0x26dc5e.SRGBColorSpace;
  _0x5a304e.shadowMap.enabled = _0x3b70c6.shadows;
  _0x5a304e.shadowMap.type = _0x26dc5e.PCFSoftShadowMap;
  for (const _0x1b5a90 of _0x3b70c6.lights) {
    const {
      light: _0x310eca,
      target: _0x30656c
    } = M(_0x1b5a90);
    if (_0x1b5a90.frame === "world") {
      _0x310eca.position.set(_0x1b5a90.worldPosition[0], _0x1b5a90.worldPosition[1], _0x1b5a90.worldPosition[2]);
    }
    if (_0x30656c) {
      _0x310eca.target = _0x30656c;
    }
    if (_0x3b70c6.shadows && _0x1b5a90.casts) {
      _0x310eca.castShadow = true;
      _0x310eca.shadow.mapSize.set(u, u);
      _0x310eca.shadow.bias = l.bias;
      _0x310eca.shadow.normalBias = l.normalBias;
      const _0x24b276 = _0x310eca.shadow.camera;
      _0x24b276.left = -l.halfWidth;
      _0x24b276.right = l.halfWidth;
      _0x24b276.top = l.halfHeight;
      _0x24b276.bottom = -l.halfHeight;
      _0x24b276.near = l.near;
      _0x24b276.far = l.far;
      _0x24b276.updateProjectionMatrix();
      c = _0x310eca;
    }
    _0x55d412.add(_0x310eca);
    if (_0x30656c) {
      _0x55d412.add(_0x30656c);
    }
    if (_0x1b5a90.frame === "view") {
      p.push({
        desc: _0x1b5a90,
        light: _0x310eca,
        target: _0x30656c
      });
    }
  }
  if (_0x3b70c6.shadows) {
    m(_0x55d412);
    const _0x1f3592 = _0x26dc5e.Object3D.prototype.add;
    _0x26dc5e.Object3D.prototype.add = function (..._0x4faccf) {
      const _0x225cac = _0x1f3592.apply(this, _0x4faccf);
      for (const _0x20f5dc of _0x4faccf) {
        if (_0x20f5dc && _0x20f5dc.traverse) {
          m(_0x20f5dc);
        }
      }
      return _0x225cac;
    };
  }
  updateLightRig(_0x4e77a8.camera.lookX, _0x4e77a8.camera.lookY, 0, 0);
}
const S = {
  x: 0,
  y: 0,
  z: 0
};
const y = new _0x26dc5e.Vector3();
const x = new _0x26dc5e.Vector3();
const b = new _0x26dc5e.Vector3();
const z = new _0x26dc5e.Vector3();
const V = new _0x26dc5e.Vector3();
const v = new _0x26dc5e.Vector3(0, 1, 0);
export function updateLightRig(_0x478c07, _0x3d4f7b, _0x3fc44a, _0x1b77da) {
  if (!p.length) {
    return;
  }
  const _0xe7716 = l.aheadTiles;
  const _0x104a99 = Math.cos(_0x1b77da);
  const _0x117e15 = -Math.sin(_0x1b77da);
  y.set(_0x478c07 + _0x104a99 * _0xe7716, _0x3d4f7b, _0x3fc44a + _0x117e15 * _0xe7716);
  for (let _0x3c8f0a = 0; _0x3c8f0a < p.length; _0x3c8f0a++) {
    const _0x40a9d7 = p[_0x3c8f0a].desc;
    const _0x57994e = p[_0x3c8f0a].light;
    const _0x4f6121 = p[_0x3c8f0a].target;
    _0xcb20e0(_0x40a9d7, _0x1b77da, S);
    if (_0x40a9d7.type === "hemisphere") {
      _0x57994e.position.set(S.x, S.y, S.z);
      continue;
    }
    const _0x2354e1 = _0x57994e === c ? l.distance : 50;
    V.set(S.x, S.y, S.z);
    x.copy(y);
    if (_0x57994e === c && l.snapToTexel) {
      b.crossVectors(V, v).normalize();
      z.crossVectors(b, V).normalize();
      g.mapSize = u;
      const _0x37d169 = _0x469b4b(g);
      const _0xbb0bf5 = l.halfHeight * 2 / u;
      x.copy(V).multiplyScalar(y.dot(V)).addScaledVector(b, _0x213161(y.dot(b), _0x37d169)).addScaledVector(z, _0x213161(y.dot(z), _0xbb0bf5));
    }
    _0x4f6121.position.copy(x);
    _0x4f6121.updateMatrixWorld();
    _0x57994e.position.copy(x).addScaledVector(V, _0x2354e1);
    _0x57994e.updateMatrixWorld();
  }
}
export function setAdaptiveShadowMapSize(_0x4d78a1) {
  if (!c || !_0x57e61e.shadows) {
    return false;
  }
  const _0x233bc5 = Math.max(512, Math.min(l.mapSize, Math.round(_0x4d78a1)));
  return _0x233bc5 !== u && (u = _0x233bc5, c.shadow.mapSize.set(_0x233bc5, _0x233bc5), c.shadow.map && (c.shadow.map.dispose(), c.shadow.map = null), c.shadow.needsUpdate = true, true);
}
export function lightRigSnapshot() {
  let _0x3a5c54 = 0;
  let _0x41180a = 0;
  let _0x4a7c07 = 0;
  if (w) {
    w.traverse(_0x327929 => {
      if (_0x327929.isMesh || _0x327929.isInstancedMesh) {
        _0x3a5c54++;
        if (_0x327929.castShadow) {
          _0x41180a++;
        }
        if (_0x327929.receiveShadow) {
          _0x4a7c07++;
        }
      }
    });
  }
  return {
    id: _0x2c0379,
    label: _0x57e61e.label,
    shadows: _0x57e61e.shadows,
    exposure: _0x57e61e.exposure,
    lights: _0x57e61e.lights.length,
    shadowMapSize: _0x57e61e.shadows ? u : 0,
    shadowBandTiles: _0x57e61e.shadows ? [l.halfWidth * 2, l.halfHeight * 2] : [0, 0],
    meshes: _0x3a5c54,
    casters: _0x41180a,
    receivers: _0x4a7c07
  };
}