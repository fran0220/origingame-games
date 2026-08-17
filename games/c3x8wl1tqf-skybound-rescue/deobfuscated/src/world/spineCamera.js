import * as _0x50c2c9 from "three";
import { preferredCamera as _0x11ac6f } from "./onboardingIsle.js";
export function createSpineCameraBinder(_0x47b22d, _0x50584b) {
  if (!_0x47b22d?.camera) {
    throw new Error("createSpineCameraBinder requires game.camera");
  }
  if (!_0x50584b?.target) {
    throw new Error("createSpineCameraBinder requires a follow target");
  }
  if (!Array.isArray(_0x50584b.routeSpine) || _0x50584b.routeSpine.length < 2) {
    throw new Error("createSpineCameraBinder requires routeSpine with at least 2 samples");
  }
  const _0x3be6d9 = Number(_0x50584b.distance) || _0x11ac6f.distance;
  const _0x4fc157 = Number(_0x50584b.height) || _0x11ac6f.height;
  const _0x3ee99a = Number(_0x50584b.lookHeight) || _0x11ac6f.lookHeight;
  const _0x5ec22d = Number.isFinite(_0x50584b.sideSign) ? _0x50584b.sideSign : 1;
  const _0x2131c8 = _0x50584b.reducedMotion === true ? 0.22 : 0.12;
  const _0x57e374 = _0x50584b.useRig === true;
  const _0x35ddfc = Number.isFinite(_0x50584b.fallHoldY) ? Number(_0x50584b.fallHoldY) : -3.5;
  let _0x5f413c = _0x50584b.routeSpine.map(_0x1b4c96 => new _0x50c2c9.Vector3(_0x1b4c96.x, _0x1b4c96.y, _0x1b4c96.z));
  const _0x3a0a05 = new _0x50c2c9.Vector3();
  const _0x5236bd = new _0x50c2c9.Vector3();
  const _0xcb20a0 = new _0x50c2c9.Vector3();
  const _0x28fa96 = new _0x50c2c9.Vector3();
  const _0x1b00a6 = new _0x50c2c9.Vector3(0, 1, 0);
  const _0x56aee1 = new _0x50c2c9.Vector3().copy(_0x47b22d.camera.position);
  const _0x468637 = new _0x50c2c9.Vector3();
  const _0x4e2810 = new _0x50c2c9.Vector3();
  let _0x111bfb = 0;
  let _0x2c9703 = false;
  let _0x158c7c = false;
  let _0x4ff5c8 = null;
  if (_0x50584b.target.position) {
    _0x468637.set(_0x50584b.target.position.x, _0x50584b.target.position.y + _0x3ee99a, _0x50584b.target.position.z);
    _0x4e2810.set(_0x50584b.target.position.x, _0x50584b.target.position.y, _0x50584b.target.position.z);
  }
  if (_0x57e374 && _0x47b22d.cameraRig?.use) {
    _0x47b22d.cameraRig.use("iso", {
      distance: _0x3be6d9,
      height: _0x4fc157,
      lookHeight: _0x3ee99a,
      target: _0x50584b.target
    });
  }
  const _0x53d366 = (_0x407de5 = 1 / 60) => {
    if (_0x2c9703) {
      return;
    }
    const _0x198507 = _0x50584b.target;
    if (!_0x198507?.position) {
      return;
    }
    if ((Number(_0x198507.position.y) || 0) >= _0x35ddfc) {
      _0x158c7c = false;
      _0x4e2810.set(_0x198507.position.x, _0x198507.position.y, _0x198507.position.z);
      _0x3a0a05.copy(_0x4e2810);
    } else if (_0x158c7c) {
      _0x4e2810.x = _0x50c2c9.MathUtils.lerp(_0x4e2810.x, _0x198507.position.x, 0.35);
      _0x4e2810.z = _0x50c2c9.MathUtils.lerp(_0x4e2810.z, _0x198507.position.z, 0.35);
      _0x3a0a05.copy(_0x4e2810);
    } else {
      _0x158c7c = true;
      _0x4e2810.x = _0x198507.position.x;
      _0x4e2810.z = _0x198507.position.z;
      _0x4e2810.y = Math.max(_0x4e2810.y, _0x35ddfc + 1.5);
      _0x3a0a05.copy(_0x4e2810);
    }
    const _0x2631a0 = function (_0x7fdb59, _0x2d0283) {
      if (_0x2d0283.length === 0) {
        return {
          point: _0x7fdb59.clone(),
          t: 0,
          tangent: new _0x50c2c9.Vector3(0, 0, 1)
        };
      }
      if (_0x2d0283.length === 1) {
        return {
          point: _0x2d0283[0].clone(),
          t: 0,
          tangent: new _0x50c2c9.Vector3(0, 0, 1)
        };
      }
      let _0x4e497a = Infinity;
      let _0x50ee21 = _0x2d0283[0].clone();
      let _0x3d2872 = 0;
      let _0x3623f7 = 0;
      const _0x228402 = new _0x50c2c9.Vector3();
      const _0x596ec3 = new _0x50c2c9.Vector3();
      const _0x5914e0 = new _0x50c2c9.Vector3();
      for (let _0xc5414 = 0; _0xc5414 < _0x2d0283.length - 1; _0xc5414++) {
        _0x228402.subVectors(_0x2d0283[_0xc5414 + 1], _0x2d0283[_0xc5414]);
        const _0x427436 = _0x228402.lengthSq();
        if (_0x427436 < 1e-8) {
          continue;
        }
        _0x596ec3.subVectors(_0x7fdb59, _0x2d0283[_0xc5414]);
        const _0x21d80c = _0x50c2c9.MathUtils.clamp(_0x596ec3.dot(_0x228402) / _0x427436, 0, 1);
        _0x5914e0.copy(_0x2d0283[_0xc5414]).addScaledVector(_0x228402, _0x21d80c);
        const _0x4b069a = _0x5914e0.distanceToSquared(_0x7fdb59);
        if (_0x4b069a < _0x4e497a) {
          _0x4e497a = _0x4b069a;
          _0x50ee21.copy(_0x5914e0);
          _0x3d2872 = _0xc5414;
          _0x3623f7 = _0x21d80c;
        }
      }
      const _0x30c044 = new _0x50c2c9.Vector3().subVectors(_0x2d0283[Math.min(_0x3d2872 + 1, _0x2d0283.length - 1)], _0x2d0283[_0x3d2872]);
      if (_0x30c044.lengthSq() < 1e-8) {
        _0x30c044.set(0, 0, 1);
      } else {
        _0x30c044.normalize();
      }
      return {
        point: _0x50ee21,
        t: (_0x3d2872 + _0x3623f7) / (_0x2d0283.length - 1),
        tangent: _0x30c044
      };
    }(_0x3a0a05, _0x5f413c);
    _0x111bfb = _0x2631a0.t;
    _0x28fa96.crossVectors(_0x1b00a6, _0x2631a0.tangent);
    if (_0x28fa96.lengthSq() < 0.000001) {
      _0x28fa96.set(1, 0, 0);
    } else {
      _0x28fa96.normalize().multiplyScalar(_0x5ec22d);
    }
    const _0x388c3d = _0x2631a0.tangent.clone().multiplyScalar(-_0x3be6d9 * 0.42);
    const _0x592bcc = _0x28fa96.multiplyScalar(_0x3be6d9 * 0.72);
    _0x5236bd.set(_0x3a0a05.x + _0x592bcc.x + _0x388c3d.x, _0x3a0a05.y + _0x4fc157, _0x3a0a05.z + _0x592bcc.z + _0x388c3d.z);
    _0xcb20a0.set(_0x3a0a05.x, _0x3a0a05.y + _0x3ee99a, _0x3a0a05.z);
    const _0x14bf62 = _0x158c7c ? Math.min(_0x2131c8, 0.05) : _0x2131c8;
    const _0x1c7524 = 1 - Math.exp(-Math.max(0, _0x407de5) / Math.max(0.001, _0x14bf62));
    _0x56aee1.lerp(_0x5236bd, _0x1c7524);
    _0x468637.lerp(_0xcb20a0, _0x1c7524);
    if (_0x57e374 && _0x47b22d.cameraRig?.update) {
      _0x47b22d.cameraRig.update(_0x198507, _0x407de5);
    }
    _0x47b22d.camera.position.copy(_0x56aee1);
    _0x47b22d.camera.up.set(0, 1, 0);
    _0x47b22d.camera.lookAt(_0x468637);
    _0x47b22d.camera.updateMatrixWorld?.();
  };
  if (_0x50584b.autoUpdate === true && typeof _0x47b22d.loop?.onUpdate == "function") {
    _0x4ff5c8 = _0x47b22d.loop.onUpdate(_0x5667e3 => _0x53d366(_0x5667e3));
  }
  return {
    update: _0x53d366,
    setSpine(_0x4cd4e5) {
      if (!!Array.isArray(_0x4cd4e5) && !(_0x4cd4e5.length < 2)) {
        _0x5f413c = _0x4cd4e5.map(_0x517f0a => new _0x50c2c9.Vector3(_0x517f0a.x, _0x517f0a.y, _0x517f0a.z));
      }
    },
    getSpineT: () => _0x111bfb,
    dispose() {
      if (!_0x2c9703) {
        _0x2c9703 = true;
        _0x158c7c = false;
        _0x4ff5c8?.();
        _0x4ff5c8 = null;
      }
    }
  };
}