import * as _0x3cf67f from "three";
import { cellToWorld as _0x2b37a0 } from "./grid.js";
import { TOWER_TYPES as _0xb5d9e7, towerRange as _0x29fbcd } from "./config.js";
let s = 1;
export function nextTowerId() {
  return "tower_" + s++;
}
export function createTowerMesh(_0x141a25, _0x5ded68 = 0) {
  const _0x270521 = _0xb5d9e7[_0x141a25];
  const _0x2d0d8a = _0x270521?.color ?? 8947848;
  const _0x3012bd = _0x270521?.accent ?? 4473924;
  const _0x13ae35 = new _0x3cf67f.Group();
  _0x13ae35.name = "Tower_" + _0x141a25;
  const _0x46d98b = new _0x3cf67f.Mesh(new _0x3cf67f.CylinderGeometry(0.32, 0.36, 0.14, 12), new _0x3cf67f.MeshStandardMaterial({
    color: 3816004,
    roughness: 0.75,
    metalness: 0.2
  }));
  _0x46d98b.name = "TowerPlinth";
  _0x46d98b.position.y = 0.1;
  _0x46d98b.castShadow = true;
  _0x13ae35.add(_0x46d98b);
  const _0x29b194 = 0.45 + _0x5ded68 * 0.1;
  const _0x493eb4 = new _0x3cf67f.Mesh(new _0x3cf67f.CylinderGeometry(0.2, 0.26, _0x29b194, 10), new _0x3cf67f.MeshStandardMaterial({
    color: _0x2d0d8a,
    emissive: _0x3012bd,
    emissiveIntensity: 0.15,
    roughness: 0.55,
    metalness: 0.2
  }));
  let _0x535155;
  _0x493eb4.name = "TowerBody";
  _0x493eb4.position.y = 0.14 + _0x29b194 * 0.5;
  _0x493eb4.castShadow = true;
  _0x13ae35.add(_0x493eb4);
  if (_0x141a25 === "archer") {
    _0x535155 = new _0x3cf67f.Mesh(new _0x3cf67f.ConeGeometry(0.18, 0.28, 8), new _0x3cf67f.MeshStandardMaterial({
      color: _0x3012bd,
      roughness: 0.5,
      metalness: 0.25
    }));
    _0x535155.position.y = 0.14 + _0x29b194 + 0.12;
  } else if (_0x141a25 === "mage") {
    _0x535155 = new _0x3cf67f.Mesh(new _0x3cf67f.OctahedronGeometry(0.16, 0), new _0x3cf67f.MeshStandardMaterial({
      color: _0x2d0d8a,
      emissive: _0x3012bd,
      emissiveIntensity: 0.55,
      roughness: 0.3,
      metalness: 0.35
    }));
    _0x535155.position.y = 0.14 + _0x29b194 + 0.14;
  } else {
    _0x535155 = new _0x3cf67f.Mesh(new _0x3cf67f.IcosahedronGeometry(0.14, 0), new _0x3cf67f.MeshStandardMaterial({
      color: 12118271,
      emissive: 3834032,
      emissiveIntensity: 0.5,
      roughness: 0.35,
      metalness: 0.3
    }));
    _0x535155.position.y = 0.14 + _0x29b194 + 0.12;
  }
  _0x535155.name = "TowerTop";
  _0x535155.castShadow = true;
  _0x13ae35.add(_0x535155);
  for (let _0x1aa7dc = 0; _0x1aa7dc < _0x5ded68; _0x1aa7dc++) {
    const _0x6393e4 = new _0x3cf67f.Mesh(new _0x3cf67f.SphereGeometry(0.05, 8, 8), new _0x3cf67f.MeshStandardMaterial({
      color: 16769162,
      emissive: 11173920,
      emissiveIntensity: 0.6
    }));
    _0x6393e4.name = "TowerPip_" + _0x1aa7dc;
    _0x6393e4.position.set(_0x1aa7dc * 0.14 - 0.14, 0.22, 0.28);
    _0x13ae35.add(_0x6393e4);
  }
  return _0x13ae35;
}
export function createGhostTower(_0x14290e) {
  const _0x518a71 = createTowerMesh(_0x14290e, 0);
  _0x518a71.name = "GhostTower_" + _0x14290e;
  _0x518a71.traverse(_0x5a9394 => {
    if (_0x5a9394.isMesh) {
      const _0x22d568 = _0x5a9394.material.clone();
      _0x22d568.transparent = true;
      _0x22d568.opacity = 0.55;
      _0x22d568.depthWrite = false;
      _0x5a9394.material = _0x22d568;
      _0x5a9394.castShadow = false;
    }
  });
  return _0x518a71;
}
export function createRangeRing(_0x4aecce, _0x117669 = 8304383) {
  const _0x1e2c2d = _0x4aecce * 1;
  const _0x5ebec0 = new _0x3cf67f.RingGeometry(Math.max(_0x1e2c2d - 0.06, 0.05), _0x1e2c2d, 48);
  const _0x316c7b = new _0x3cf67f.MeshBasicMaterial({
    color: _0x117669,
    transparent: true,
    opacity: 0.55,
    side: _0x3cf67f.DoubleSide,
    depthWrite: false
  });
  const _0x54deb9 = new _0x3cf67f.Mesh(_0x5ebec0, _0x316c7b);
  _0x54deb9.name = "RangeRing";
  _0x54deb9.rotation.x = -Math.PI / 2;
  _0x54deb9.position.y = 0.22;
  _0x54deb9.renderOrder = 4;
  return _0x54deb9;
}
export function setRangeRingRadius(_0x4c49ce, _0x5cd009) {
  const _0x305ef9 = _0x5cd009 * 1;
  _0x4c49ce.geometry.dispose();
  _0x4c49ce.geometry = new _0x3cf67f.RingGeometry(Math.max(_0x305ef9 - 0.06, 0.05), _0x305ef9, 48);
}
export function placeAtCell(_0x14e3a8, _0x3b15f7, _0x154bab) {
  const _0x573059 = _0x2b37a0(_0x3b15f7, _0x154bab, 0);
  _0x14e3a8.position.set(_0x573059.x, 0, _0x573059.z);
}
export function setGhostValidity(_0x2f44ca, _0x533120) {
  _0x2f44ca.traverse(_0x5b6b9e => {
    if (!_0x5b6b9e.isMesh) {
      return;
    }
    const _0x358d88 = _0x5b6b9e.material;
    if (_0x358d88 && _0x358d88.color) {
      if (_0x533120) {
        _0x358d88.opacity = 0.55;
        _0x358d88.emissiveIntensity = _0x358d88.emissiveIntensity || 0.15;
      } else {
        _0x358d88.opacity = 0.4;
        if (_0x358d88.emissive) {
          _0x358d88.emissive.setHex(8912896);
        }
        _0x358d88.color.lerp(new _0x3cf67f.Color(16729156), 0.45);
      }
    }
  });
}
export { _0x29fbcd as towerRange, _0xb5d9e7 as TOWER_TYPES };