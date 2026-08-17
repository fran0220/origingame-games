import * as _0x301b0e from "three";
import { STORM_PALETTE as _0x510141 } from "../shared/contracts.js";
export const RESCUE_SURFACE_Y = 0;
export const RESCUE_COLLAPSE_HALF_Y = 0.32;
export function createCollapseTopMaterial(_0x2e666c) {
  const _0x3f6a62 = _0x2e666c.clone();
  _0x3f6a62.colorSpace = _0x301b0e.SRGBColorSpace;
  _0x3f6a62.wrapS = _0x3f6a62.wrapT = _0x301b0e.RepeatWrapping;
  _0x3f6a62.repeat.set(1.6, 1.6);
  _0x3f6a62.needsUpdate = true;
  return new _0x301b0e.MeshStandardMaterial({
    name: "CollapseSlate",
    map: _0x3f6a62,
    color: new _0x301b0e.Color(8227740),
    roughness: 0.88,
    metalness: 0.05,
    emissive: new _0x301b0e.Color(0),
    emissiveIntensity: 0,
    envMapIntensity: 0.8
  });
}
export function addCollapsePlate(_0x23a133) {
  const {
    parent: _0x48dfa4,
    physics: _0x166231,
    slateMap: _0x829be,
    sideMat: _0x55e6b2,
    cx: _0x558716,
    cz: _0x5e7bb4,
    halfX: _0x58581d,
    halfZ: _0x50f74e,
    collapseId: _0x42e2d1,
    segment: _0x862604,
    disposers: _0x4860fe,
    supportColliders: _0x1f496f
  } = _0x23a133;
  const _0x3cdc51 = 0.32;
  const _0x264b12 = new _0x301b0e.Group();
  _0x264b12.name = "Collapse:" + _0x42e2d1;
  _0x264b12.position.set(_0x558716, 0 - _0x3cdc51, _0x5e7bb4);
  const _0xec466d = createCollapseTopMaterial(_0x829be);
  const _0x5d5975 = new _0x301b0e.MeshStandardMaterial({
    name: "CrackLine:" + _0x42e2d1,
    color: new _0x301b0e.Color(2761784),
    emissive: new _0x301b0e.Color(_0x510141.violet),
    emissiveIntensity: 0.15,
    roughness: 0.7,
    metalness: 0.05
  });
  const _0x4f00dd = new _0x301b0e.BoxGeometry(_0x58581d * 2, 0.12, _0x50f74e * 2);
  const _0xdcb721 = new _0x301b0e.Mesh(_0x4f00dd, _0xec466d);
  _0xdcb721.position.y = 0.26;
  _0xdcb721.castShadow = true;
  _0xdcb721.receiveShadow = true;
  _0x264b12.add(_0xdcb721);
  const _0x2528f1 = new _0x301b0e.BoxGeometry(_0x58581d * 2 * 0.94, 0.54, _0x50f74e * 2 * 0.94);
  const _0x324767 = new _0x301b0e.Mesh(_0x2528f1, _0x55e6b2);
  _0x324767.position.y = -0.02;
  _0x324767.castShadow = true;
  _0x264b12.add(_0x324767);
  const _0x5920dd = new _0x301b0e.BoxGeometry(_0x58581d * 1.7, 0.04, 0.06);
  const _0x514a52 = new _0x301b0e.Mesh(_0x5920dd, _0x5d5975);
  _0x514a52.position.set(0, 0.31, 0);
  _0x514a52.rotation.y = 0.35;
  _0x264b12.add(_0x514a52);
  const _0x5a6e0e = new _0x301b0e.BoxGeometry(0.05, 0.04, _0x50f74e * 1.5);
  const _0xab38df = new _0x301b0e.Mesh(_0x5a6e0e, _0x5d5975);
  _0xab38df.position.set(_0x58581d * 0.25, 0.31, 0);
  _0x264b12.add(_0xab38df);
  const _0x587a59 = new _0x301b0e.BoxGeometry(_0x58581d * 2 + 0.12, 0.08, _0x50f74e * 2 + 0.12);
  const _0x34851d = new _0x301b0e.Mesh(_0x587a59, _0x55e6b2);
  _0x34851d.position.y = 0.14;
  _0x264b12.add(_0x34851d);
  _0x48dfa4.add(_0x264b12);
  const _0x2625ed = _0x166231.createFixed(_0x264b12);
  let _0x453e68 = _0x166231.createCollider(_0x166231.RAPIER.ColliderDesc.cuboid(_0x58581d, _0x3cdc51, _0x50f74e).setFriction(0.85).setRestitution(0), _0x2625ed);
  let _0x190cd9 = true;
  const _0x505d48 = _0x264b12.position.y;
  if (_0x1f496f && _0x453e68) {
    _0x1f496f.push(_0x453e68);
  }
  const _0x52deb0 = {
    collapseId: _0x42e2d1,
    segment: _0x862604,
    center: {
      x: _0x558716,
      y: 0,
      z: _0x5e7bb4
    },
    halfExtents: {
      x: _0x58581d,
      y: _0x3cdc51,
      z: _0x50f74e
    },
    meshRoot: _0x264b12,
    collider: _0x453e68,
    fixedBody: _0x2625ed,
    crackMaterials: [_0xec466d, _0x5d5975],
    removeSupport() {
      if (_0x190cd9) {
        _0x190cd9 = false;
        if (_0x453e68) {
          const _0x415be8 = _0x453e68;
          try {
            _0x166231.removeCollider?.(_0x415be8);
          } catch {}
          if (_0x1f496f) {
            const _0x98a1ba = _0x1f496f.indexOf(_0x415be8);
            if (_0x98a1ba >= 0) {
              _0x1f496f.splice(_0x98a1ba, 1);
            }
          }
          _0x453e68 = null;
          _0x52deb0.collider = null;
        }
        _0x264b12.traverse(_0x14d07e => {
          if (_0x14d07e.isMesh) {
            _0x14d07e.castShadow = false;
          }
        });
        _0x264b12.position.y = _0x505d48 - 6.5;
        _0x264b12.rotation.z = 0.35;
        _0x264b12.rotation.x = 0.18;
        _0x264b12.visible = true;
      }
    },
    restoreSupport() {
      if (!_0x190cd9) {
        _0x190cd9 = true;
        _0x264b12.position.y = _0x505d48;
        _0x264b12.rotation.x = 0;
        _0x264b12.rotation.z = 0;
        _0x264b12.visible = true;
        _0x264b12.traverse(_0x544932 => {
          if (_0x544932.isMesh) {
            _0x544932.castShadow = true;
          }
        });
        _0xec466d.emissive.setHex(0);
        _0xec466d.emissiveIntensity = 0;
        _0x5d5975.emissive.setHex(_0x510141.violet);
        _0x5d5975.emissiveIntensity = 0.15;
        try {
          _0x453e68 = _0x166231.createCollider(_0x166231.RAPIER.ColliderDesc.cuboid(_0x58581d, _0x3cdc51, _0x50f74e).setFriction(0.85).setRestitution(0), _0x2625ed);
          _0x52deb0.collider = _0x453e68;
          (function (_0x115be7) {
            if (_0x115be7 && _0x166231?.beginSupportSetup) {
              try {
                const _0x22491c = _0x166231.beginSupportSetup();
                _0x22491c.registerSupport(_0x115be7);
                _0x22491c.commit();
              } catch (_0x47b338) {
                console.warn("[rescueContent] registerLiveSupport " + _0x42e2d1, _0x47b338);
              }
              if (_0x1f496f && !_0x1f496f.includes(_0x115be7)) {
                _0x1f496f.push(_0x115be7);
              }
            }
          })(_0x453e68);
        } catch (_0x1011d5) {
          console.warn("[rescueContent] restoreSupport " + _0x42e2d1, _0x1011d5);
        }
      }
    }
  };
  _0x4860fe.push(() => {
    try {
      if (_0x52deb0.collider) {
        _0x166231.removeCollider?.(_0x52deb0.collider);
      }
    } catch {}
    try {
      _0x2625ed.dispose?.();
    } catch {}
    _0x4f00dd.dispose();
    _0x2528f1.dispose();
    _0x5920dd.dispose();
    _0x5a6e0e.dispose();
    _0x587a59.dispose();
    _0xec466d.map?.dispose?.();
    _0xec466d.dispose();
    _0x5d5975.dispose();
    _0x264b12.removeFromParent();
  });
  return _0x52deb0;
}