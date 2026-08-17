import * as _0x9bc487 from "three";
import { STORM_PALETTE as _0x2e1cb4 } from "../../shared/contracts.js";
export function createShearMarker(_0x20ace2, _0x53df47, _0x380ddc = {}, _0x13f241) {
  const _0x237341 = _0x380ddc.side ?? 1;
  const _0x249d3f = new _0x9bc487.Group();
  _0x249d3f.name = "ShearMarker";
  _0x249d3f.position.set(_0x53df47.x + _0x237341 * 1.55, _0x53df47.y, _0x53df47.z);
  if (Number.isFinite(_0x380ddc.yaw)) {
    _0x249d3f.rotation.y = _0x380ddc.yaw;
  }
  const _0x452566 = new _0x9bc487.CylinderGeometry(0.045, 0.055, 2.4, 6);
  const _0x4381fa = new _0x9bc487.MeshStandardMaterial({
    color: _0x2e1cb4.slateDeep,
    roughness: 0.88,
    metalness: 0.08
  });
  const _0x2703cf = new _0x9bc487.Mesh(_0x452566, _0x4381fa);
  _0x2703cf.position.y = 1.2;
  _0x2703cf.castShadow = true;
  _0x249d3f.add(_0x2703cf);
  const _0x55ada2 = new _0x9bc487.MeshStandardMaterial({
    name: "ShearCloth",
    color: 6971528,
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.3,
    roughness: 0.72,
    metalness: 0.02,
    side: _0x9bc487.DoubleSide,
    transparent: true,
    opacity: 0.92
  });
  const _0xee65ff = new _0x9bc487.PlaneGeometry(0.85, 1.35, 1, 2);
  const _0x1330ac = new _0x9bc487.Mesh(_0xee65ff, _0x55ada2);
  _0x1330ac.position.set(_0x237341 * 0.35, 1.55, 0);
  _0x1330ac.rotation.y = _0x237341 > 0 ? -0.35 : 0.35;
  _0x1330ac.castShadow = true;
  _0x249d3f.add(_0x1330ac);
  const _0x5b0c76 = _0x1330ac.clone();
  _0x5b0c76.position.set(_0x237341 * 0.15, 1.35, 0.12);
  _0x5b0c76.scale.set(0.7, 0.75, 1);
  _0x5b0c76.rotation.y = _0x237341 > 0 ? -0.55 : 0.55;
  _0x249d3f.add(_0x5b0c76);
  const _0x220c64 = new _0x9bc487.MeshStandardMaterial({
    color: 5919856,
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.12,
    roughness: 0.8,
    metalness: 0.04,
    side: _0x9bc487.DoubleSide
  });
  const _0x48d2e9 = new _0x9bc487.PlaneGeometry(0.28, 0.18);
  for (let _0x1231e4 = 0; _0x1231e4 < 4; _0x1231e4++) {
    const _0x340ab0 = new _0x9bc487.Mesh(_0x48d2e9, _0x220c64);
    _0x340ab0.position.set(_0x237341 * (0.6 + _0x1231e4 % 2 * 0.35), 0.55 + _0x1231e4 * 0.28, _0x1231e4 * 0.22 - 0.4);
    _0x340ab0.rotation.set(0.4, _0x237341 * 0.5, _0x1231e4 * 0.3);
    _0x340ab0.castShadow = true;
    _0x249d3f.add(_0x340ab0);
  }
  _0x20ace2.add(_0x249d3f);
  _0x13f241.push(() => {
    _0x249d3f.removeFromParent();
    _0x452566.dispose();
    _0x4381fa.dispose();
    _0xee65ff.dispose();
    _0x55ada2.dispose();
    _0x48d2e9.dispose();
    _0x220c64.dispose();
  });
  return _0x249d3f;
}
export function createRestAltarProp(_0x1683cf, _0x687ea9, _0xe5bc20) {
  const _0x128b07 = new _0x9bc487.Group();
  _0x128b07.name = "RestAltar";
  _0x128b07.position.set(_0x687ea9.x, _0x687ea9.y, _0x687ea9.z);
  const _0x402988 = new _0x9bc487.CylinderGeometry(0.55, 0.7, 0.28, 8);
  const _0x24e99b = new _0x9bc487.MeshStandardMaterial({
    color: _0x2e1cb4.slate,
    roughness: 0.86,
    metalness: 0.06
  });
  const _0x3cf89f = new _0x9bc487.Mesh(_0x402988, _0x24e99b);
  _0x3cf89f.position.y = 0.14;
  _0x3cf89f.castShadow = true;
  _0x3cf89f.receiveShadow = true;
  _0x128b07.add(_0x3cf89f);
  const _0x38d9c4 = new _0x9bc487.BoxGeometry(0.42, 1.35, 0.42);
  const _0x42315b = new _0x9bc487.Mesh(_0x38d9c4, _0x24e99b);
  _0x42315b.position.y = 0.95;
  _0x42315b.castShadow = true;
  _0x128b07.add(_0x42315b);
  const _0x14ca97 = new _0x9bc487.BoxGeometry(0.62, 0.16, 0.62);
  const _0xd50700 = new _0x9bc487.MeshStandardMaterial({
    color: _0x2e1cb4.amber,
    emissive: new _0x9bc487.Color(_0x2e1cb4.amber),
    emissiveIntensity: 0.75,
    roughness: 0.45,
    metalness: 0.15
  });
  const _0x514139 = new _0x9bc487.Mesh(_0x14ca97, _0xd50700);
  _0x514139.position.y = 1.7;
  _0x514139.castShadow = true;
  _0x128b07.add(_0x514139);
  const _0xc3d1eb = new _0x9bc487.SphereGeometry(0.16, 12, 10);
  const _0xa60476 = new _0x9bc487.Mesh(_0xc3d1eb, _0xd50700);
  _0xa60476.position.y = 2;
  _0x128b07.add(_0xa60476);
  const _0x7f72a5 = new _0x9bc487.PointLight(_0x2e1cb4.amber, 0.7, 8, 2);
  _0x7f72a5.position.y = 1.85;
  _0x128b07.add(_0x7f72a5);
  _0x1683cf.add(_0x128b07);
  _0xe5bc20.push(() => {
    _0x128b07.removeFromParent();
    _0x402988.dispose();
    _0x38d9c4.dispose();
    _0x14ca97.dispose();
    _0xc3d1eb.dispose();
    _0x24e99b.dispose();
    _0xd50700.dispose();
  });
  return _0x128b07;
}
export function createChargeMoteProp(_0xde72cf, _0xbacf60, _0x1c72a5) {
  const _0x2c5336 = new _0x9bc487.Group();
  _0x2c5336.name = "ChargeMote";
  _0x2c5336.position.set(_0xbacf60.x, _0xbacf60.y, _0xbacf60.z);
  const _0x1eb67e = new _0x9bc487.OctahedronGeometry(0.22, 0);
  const _0x13bed7 = new _0x9bc487.MeshStandardMaterial({
    color: _0x2e1cb4.amber,
    emissive: new _0x9bc487.Color(_0x2e1cb4.amber),
    emissiveIntensity: 1.1,
    roughness: 0.3,
    metalness: 0.2
  });
  const _0x1ce359 = new _0x9bc487.Mesh(_0x1eb67e, _0x13bed7);
  _0x1ce359.position.y = 1.15;
  _0x1ce359.castShadow = true;
  _0x2c5336.add(_0x1ce359);
  const _0x125927 = new _0x9bc487.TorusGeometry(0.32, 0.03, 6, 20);
  const _0x1d8df1 = new _0x9bc487.MeshStandardMaterial({
    color: 16769162,
    emissive: new _0x9bc487.Color(_0x2e1cb4.amber),
    emissiveIntensity: 0.55,
    roughness: 0.4,
    metalness: 0.25
  });
  const _0x44d4bf = new _0x9bc487.Mesh(_0x125927, _0x1d8df1);
  _0x44d4bf.position.y = 1.15;
  _0x44d4bf.rotation.x = Math.PI / 2;
  _0x2c5336.add(_0x44d4bf);
  const _0x2bf80d = new _0x9bc487.PointLight(_0x2e1cb4.amber, 0.55, 6, 2);
  _0x2bf80d.position.y = 1.15;
  _0x2c5336.add(_0x2bf80d);
  _0xde72cf.add(_0x2c5336);
  _0x1c72a5.push(() => {
    _0x2c5336.removeFromParent();
    _0x1eb67e.dispose();
    _0x13bed7.dispose();
    _0x125927.dispose();
    _0x1d8df1.dispose();
  });
  return _0x2c5336;
}
export function createBeaconGateFrame(_0x5252c1, _0x3a0a0c, _0x5a41be) {
  const _0x33d168 = new _0x9bc487.Group();
  _0x33d168.name = "BeaconGateFrame";
  _0x33d168.position.set(_0x3a0a0c.x, _0x3a0a0c.y, _0x3a0a0c.z);
  const _0x4c7edc = new _0x9bc487.MeshStandardMaterial({
    color: _0x2e1cb4.slate,
    roughness: 0.85,
    metalness: 0.07
  });
  const _0x1d1be6 = new _0x9bc487.MeshStandardMaterial({
    name: "GateLintelUnlit",
    color: 3814488,
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.18,
    roughness: 0.55,
    metalness: 0.12
  });
  const _0x29ddaf = new _0x9bc487.BoxGeometry(0.45, 2.8, 0.45);
  const _0x1c51c3 = new _0x9bc487.Mesh(_0x29ddaf, _0x4c7edc);
  _0x1c51c3.position.set(-1.55, 1.4, 0);
  _0x1c51c3.castShadow = true;
  _0x33d168.add(_0x1c51c3);
  const _0xce6af = new _0x9bc487.Mesh(_0x29ddaf, _0x4c7edc);
  _0xce6af.position.set(1.55, 1.4, 0);
  _0xce6af.castShadow = true;
  _0x33d168.add(_0xce6af);
  const _0x56f91f = new _0x9bc487.BoxGeometry(3.7, 0.35, 0.5);
  const _0xfdd795 = new _0x9bc487.Mesh(_0x56f91f, _0x1d1be6);
  _0xfdd795.position.set(0, 2.75, 0);
  _0xfdd795.castShadow = true;
  _0x33d168.add(_0xfdd795);
  const _0x2d60d2 = new _0x9bc487.CylinderGeometry(0.14, 0.18, 0.2, 8);
  const _0x73d0d1 = new _0x9bc487.Mesh(_0x2d60d2, _0x1d1be6);
  _0x73d0d1.position.set(0, 3, 0);
  _0x73d0d1.name = "BeaconSocket";
  _0x33d168.add(_0x73d0d1);
  const _0xf23e35 = new _0x9bc487.Mesh(new _0x9bc487.BoxGeometry(0.6, 0.18, 0.6), _0x4c7edc);
  _0xf23e35.position.set(-1.55, 2.9, 0);
  _0x33d168.add(_0xf23e35);
  const _0x5e016c = _0xf23e35.clone();
  _0x5e016c.position.x = 1.55;
  _0x33d168.add(_0x5e016c);
  _0x5252c1.add(_0x33d168);
  _0x5a41be.push(() => {
    _0x33d168.removeFromParent();
    _0x29ddaf.dispose();
    _0x56f91f.dispose();
    _0x2d60d2.dispose();
    _0x4c7edc.dispose();
    _0x1d1be6.dispose();
    _0xf23e35.geometry.dispose();
  });
  return {
    root: _0x33d168,
    socketLocal: {
      x: 0,
      y: 3.05,
      z: 0
    }
  };
}
export function createSpiritWispProp(_0x2223fd, _0x3f5419, _0xf0eb59) {
  const _0x5c6e74 = new _0x9bc487.Group();
  _0x5c6e74.name = "SpiritWisp";
  _0x5c6e74.position.set(_0x3f5419.x, _0x3f5419.y, _0x3f5419.z);
  const _0x28bb38 = new _0x9bc487.SphereGeometry(0.18, 14, 12);
  const _0x1d3316 = new _0x9bc487.MeshStandardMaterial({
    name: "SpiritCore",
    color: new _0x9bc487.Color(16765562),
    emissive: new _0x9bc487.Color(_0x2e1cb4.amber),
    emissiveIntensity: 1.15,
    roughness: 0.28,
    metalness: 0.12
  });
  const _0x5a651c = new _0x9bc487.Mesh(_0x28bb38, _0x1d3316);
  _0x5a651c.position.y = 1.05;
  _0x5a651c.castShadow = true;
  _0x5c6e74.add(_0x5a651c);
  const _0x100e5a = new _0x9bc487.OctahedronGeometry(0.34, 0);
  const _0x407891 = new _0x9bc487.MeshStandardMaterial({
    name: "SpiritShell",
    color: new _0x9bc487.Color(10125567),
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.55,
    roughness: 0.35,
    metalness: 0.08,
    transparent: true,
    opacity: 0.72,
    side: _0x9bc487.DoubleSide
  });
  const _0x16d957 = new _0x9bc487.Mesh(_0x100e5a, _0x407891);
  _0x16d957.position.y = 1.05;
  _0x16d957.rotation.y = 0.4;
  _0x16d957.castShadow = true;
  _0x5c6e74.add(_0x16d957);
  const _0x202921 = new _0x9bc487.ConeGeometry(0.07, 0.22, 6);
  const _0x3404c2 = new _0x9bc487.MeshStandardMaterial({
    color: _0x2e1cb4.amber,
    emissive: new _0x9bc487.Color(_0x2e1cb4.amber),
    emissiveIntensity: 0.85,
    roughness: 0.4,
    metalness: 0.1
  });
  const _0x7cdbbd = new _0x9bc487.Mesh(_0x202921, _0x3404c2);
  _0x7cdbbd.position.y = 1.42;
  _0x5c6e74.add(_0x7cdbbd);
  const _0x198954 = new _0x9bc487.PointLight(_0x2e1cb4.amber, 0.65, 5.5, 2);
  _0x198954.position.y = 1.1;
  _0x198954.color.lerp(new _0x9bc487.Color(_0x2e1cb4.violet), 0.25);
  _0x5c6e74.add(_0x198954);
  _0x2223fd.add(_0x5c6e74);
  _0xf0eb59.push(() => {
    _0x5c6e74.removeFromParent();
    _0x28bb38.dispose();
    _0x1d3316.dispose();
    _0x100e5a.dispose();
    _0x407891.dispose();
    _0x202921.dispose();
    _0x3404c2.dispose();
  });
  return _0x5c6e74;
}
export function createAmberAnchorProp(_0x4fa508, _0x334990, _0x1e7739) {
  const _0x75d827 = new _0x9bc487.Group();
  _0x75d827.name = "AmberAnchor";
  _0x75d827.position.set(_0x334990.x, _0x334990.y, _0x334990.z);
  const _0x5ebf88 = new _0x9bc487.MeshStandardMaterial({
    color: _0x2e1cb4.slate,
    roughness: 0.88,
    metalness: 0.06
  });
  const _0x7cb863 = new _0x9bc487.MeshStandardMaterial({
    name: "AnchorAmber",
    color: _0x2e1cb4.amber,
    emissive: new _0x9bc487.Color(_0x2e1cb4.amber),
    emissiveIntensity: 0.9,
    roughness: 0.4,
    metalness: 0.18
  });
  const _0x55a956 = new _0x9bc487.CylinderGeometry(0.72, 0.85, 0.22, 10);
  const _0x2e9850 = new _0x9bc487.Mesh(_0x55a956, _0x5ebf88);
  _0x2e9850.position.y = 0.11;
  _0x2e9850.castShadow = true;
  _0x2e9850.receiveShadow = true;
  _0x75d827.add(_0x2e9850);
  const _0x1c1180 = new _0x9bc487.TorusGeometry(0.55, 0.08, 8, 24);
  const _0x543438 = new _0x9bc487.Mesh(_0x1c1180, _0x5ebf88);
  _0x543438.position.y = 0.28;
  _0x543438.rotation.x = Math.PI / 2;
  _0x543438.castShadow = true;
  _0x75d827.add(_0x543438);
  const _0x3683f1 = new _0x9bc487.TorusGeometry(0.38, 0.045, 6, 20);
  const _0x51530a = new _0x9bc487.Mesh(_0x3683f1, _0x7cb863);
  _0x51530a.position.y = 0.32;
  _0x51530a.rotation.x = Math.PI / 2;
  _0x75d827.add(_0x51530a);
  const _0x7df983 = new _0x9bc487.SphereGeometry(0.2, 12, 10);
  const _0x1cfd57 = new _0x9bc487.Mesh(_0x7df983, _0x7cb863);
  _0x1cfd57.position.y = 0.48;
  _0x1cfd57.castShadow = true;
  _0x75d827.add(_0x1cfd57);
  const _0x2c26c0 = new _0x9bc487.CylinderGeometry(0.16, 0.22, 0.2, 8);
  const _0x2379a1 = new _0x9bc487.Mesh(_0x2c26c0, _0x5ebf88);
  _0x2379a1.position.y = 0.28;
  _0x75d827.add(_0x2379a1);
  const _0x32aa11 = new _0x9bc487.PointLight(_0x2e1cb4.amber, 0.55, 6.5, 2);
  _0x32aa11.position.y = 0.55;
  _0x75d827.add(_0x32aa11);
  _0x4fa508.add(_0x75d827);
  _0x1e7739.push(() => {
    _0x75d827.removeFromParent();
    _0x55a956.dispose();
    _0x1c1180.dispose();
    _0x3683f1.dispose();
    _0x7df983.dispose();
    _0x2c26c0.dispose();
    _0x5ebf88.dispose();
    _0x7cb863.dispose();
  });
  return _0x75d827;
}
export function createBeaconLanternProp(_0x11266b, _0x246562, _0x131d46) {
  const _0x3797dc = new _0x9bc487.Group();
  _0x3797dc.name = "BeaconLantern";
  _0x3797dc.position.set(_0x246562.x, _0x246562.y, _0x246562.z);
  const _0xd2b06b = new _0x9bc487.MeshStandardMaterial({
    color: _0x2e1cb4.slateDeep,
    roughness: 0.7,
    metalness: 0.25
  });
  const _0x21100c = new _0x9bc487.MeshStandardMaterial({
    name: "BeaconGlass",
    color: 3814488,
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.22,
    roughness: 0.35,
    metalness: 0.08,
    transparent: true,
    opacity: 0.88
  });
  const _0x552277 = new _0x9bc487.CylinderGeometry(0.12, 0.16, 0.1, 8);
  const _0x1df6c3 = new _0x9bc487.Mesh(_0x552277, _0xd2b06b);
  _0x1df6c3.position.y = 0.05;
  _0x1df6c3.castShadow = true;
  _0x3797dc.add(_0x1df6c3);
  const _0x20ba9e = new _0x9bc487.CylinderGeometry(0.14, 0.14, 0.42, 8, 1, true);
  const _0x4cfc4e = new _0x9bc487.Mesh(_0x20ba9e, _0xd2b06b);
  _0x4cfc4e.position.y = 0.32;
  _0x4cfc4e.castShadow = true;
  _0x3797dc.add(_0x4cfc4e);
  const _0x21fd1b = new _0x9bc487.SphereGeometry(0.13, 10, 8);
  const _0x3d5471 = new _0x9bc487.Mesh(_0x21fd1b, _0x21100c);
  _0x3d5471.position.y = 0.34;
  _0x3d5471.scale.y = 1.15;
  _0x3797dc.add(_0x3d5471);
  const _0x286246 = new _0x9bc487.ConeGeometry(0.16, 0.14, 8);
  const _0x5e4322 = new _0x9bc487.Mesh(_0x286246, _0xd2b06b);
  _0x5e4322.position.y = 0.6;
  _0x3797dc.add(_0x5e4322);
  const _0x42969d = new _0x9bc487.PointLight(_0x2e1cb4.violet, 0.25, 5, 2);
  _0x42969d.position.y = 0.35;
  _0x3797dc.add(_0x42969d);
  _0x11266b.add(_0x3797dc);
  _0x131d46.push(() => {
    _0x3797dc.removeFromParent();
    _0x552277.dispose();
    _0x20ba9e.dispose();
    _0x21fd1b.dispose();
    _0x286246.dispose();
    _0xd2b06b.dispose();
    _0x21100c.dispose();
  });
  return {
    root: _0x3797dc,
    setLit: function (_0x75e58) {
      if (_0x75e58) {
        _0x21100c.color.setHex(16769162);
        _0x21100c.emissive.setHex(_0x2e1cb4.amber);
        _0x21100c.emissiveIntensity = 1.05;
        _0x42969d.color.setHex(_0x2e1cb4.amber);
        _0x42969d.intensity = 0.85;
      } else {
        _0x21100c.color.setHex(3814488);
        _0x21100c.emissive.setHex(_0x2e1cb4.violet);
        _0x21100c.emissiveIntensity = 0.22;
        _0x42969d.color.setHex(_0x2e1cb4.violet);
        _0x42969d.intensity = 0.25;
      }
    }
  };
}
export function createStormFieldDecal(_0x2aac3e, _0x51b00f, _0x58c670, _0x61e927) {
  const _0x5f122f = new _0x9bc487.Group();
  _0x5f122f.name = "StormFieldDecal";
  _0x5f122f.position.set(_0x51b00f.x, _0x51b00f.y, _0x51b00f.z);
  const _0x319711 = Math.max(_0x58c670.x, 0.6);
  const _0x1fe1dc = Math.max(_0x58c670.z, 0.6);
  const _0x45f336 = Math.max(_0x58c670.y, 0.8);
  const _0x3f83b8 = new _0x9bc487.MeshStandardMaterial({
    name: "StormRing",
    color: 4864632,
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.55,
    roughness: 0.55,
    metalness: 0.05,
    transparent: true,
    opacity: 0.85,
    side: _0x9bc487.DoubleSide
  });
  const _0x514ba3 = new _0x9bc487.RingGeometry(Math.min(_0x319711, _0x1fe1dc) * 0.55, Math.min(_0x319711, _0x1fe1dc) * 0.95, 32);
  const _0x49aa06 = new _0x9bc487.Mesh(_0x514ba3, _0x3f83b8);
  _0x49aa06.rotation.x = -Math.PI / 2;
  _0x49aa06.position.y = 0.04;
  _0x49aa06.receiveShadow = true;
  _0x5f122f.add(_0x49aa06);
  const _0x163213 = new _0x9bc487.TorusGeometry(Math.min(_0x319711, _0x1fe1dc) * 0.92, 0.04, 6, 28);
  const _0xf6c6f7 = new _0x9bc487.Mesh(_0x163213, _0x3f83b8);
  _0xf6c6f7.rotation.x = Math.PI / 2;
  _0xf6c6f7.position.y = 0.06;
  _0x5f122f.add(_0xf6c6f7);
  const _0x5e96b6 = new _0x9bc487.MeshStandardMaterial({
    name: "StormFogVolume",
    color: 5916832,
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.12,
    roughness: 1,
    metalness: 0,
    transparent: true,
    opacity: 0.11,
    depthWrite: false,
    side: _0x9bc487.DoubleSide
  });
  const _0x48e49c = new _0x9bc487.CylinderGeometry(Math.min(_0x319711, _0x1fe1dc) * 0.72, Math.min(_0x319711, _0x1fe1dc) * 0.82, _0x45f336 * 1.05, 20, 1, true);
  const _0xeb75e0 = new _0x9bc487.Mesh(_0x48e49c, _0x5e96b6);
  _0xeb75e0.position.y = _0x45f336 * 0.42;
  _0xeb75e0.renderOrder = 2;
  _0x5f122f.add(_0xeb75e0);
  const _0x535622 = new _0x9bc487.SphereGeometry(Math.min(_0x319711, _0x1fe1dc) * 0.55, 12, 8);
  const _0x292e4e = _0x5e96b6.clone();
  _0x292e4e.opacity = 0.08;
  const _0x20ac5d = new _0x9bc487.Mesh(_0x535622, _0x292e4e);
  _0x20ac5d.position.y = _0x45f336 * 0.5;
  _0x20ac5d.scale.set(1.05, 0.42, 1.05);
  _0x5f122f.add(_0x20ac5d);
  _0x2aac3e.add(_0x5f122f);
  _0x61e927.push(() => {
    _0x5f122f.removeFromParent();
    _0x514ba3.dispose();
    _0x163213.dispose();
    _0x48e49c.dispose();
    _0x535622.dispose();
    _0x3f83b8.dispose();
    _0x5e96b6.dispose();
    _0x292e4e.dispose();
  });
  return _0x5f122f;
}
export function addColonnadePillars(_0x1aae2d, _0x57f4a5, _0x3c87d8, _0x183f33, _0x422199, _0x1468c3) {
  const _0x3c2f30 = new _0x9bc487.BoxGeometry(0.32, 2.1, 0.32);
  const _0xae6722 = [[_0x57f4a5 - _0x183f33 + 0.25, _0x3c87d8 - 0.55], [_0x57f4a5 + _0x183f33 - 0.25, _0x3c87d8 - 0.55], [_0x57f4a5 - _0x183f33 + 0.25, _0x3c87d8 + 0.55], [_0x57f4a5 + _0x183f33 - 0.25, _0x3c87d8 + 0.55]];
  const _0x269872 = [];
  for (const [_0x4dbbb2, _0x1f47f9] of _0xae6722) {
    const _0xb7ad07 = new _0x9bc487.Mesh(_0x3c2f30, _0x422199);
    _0xb7ad07.position.set(_0x4dbbb2, 1.05, _0x1f47f9);
    _0xb7ad07.castShadow = true;
    _0xb7ad07.receiveShadow = true;
    _0x1aae2d.add(_0xb7ad07);
    _0x269872.push(_0xb7ad07);
  }
  _0x1468c3.push(() => {
    for (const _0x44329a of _0x269872) {
      _0x44329a.removeFromParent();
    }
    _0x3c2f30.dispose();
  });
}
export function addGalleryArches(_0x170619, _0x4002ac, _0xe3ea25, _0x1403ae, _0x4882fb, _0x2265fb, _0x424c8f = {}) {
  const _0x143ebe = new _0x9bc487.Group();
  _0x143ebe.name = "GalleryArches";
  _0x143ebe.position.set(_0x4002ac, 0, _0xe3ea25);
  const _0x39e8c2 = _0x424c8f.height ?? 2.55;
  const _0x5636ab = _0x424c8f.spanZ ?? 1.15;
  const _0xf8c24f = 0.36;
  const _0x4eebde = _0x1403ae - 0.18;
  const _0x3c68db = _0x424c8f.accentMat ?? new _0x9bc487.MeshStandardMaterial({
    name: "GalleryVioletAccent",
    color: 4864616,
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.14,
    roughness: 0.72,
    metalness: 0.08
  });
  const _0x2a7d0f = !_0x424c8f.accentMat;
  const _0xebc1b4 = new _0x9bc487.BoxGeometry(_0xf8c24f, _0x39e8c2, _0xf8c24f);
  const _0x5472aa = new _0x9bc487.BoxGeometry(_0x1403ae * 2 - 0.1, 0.28, 0.42);
  const _0x58f4c3 = new _0x9bc487.BoxGeometry(0.54, 0.14, 0.54);
  const _0x4dfcae = [_0xebc1b4, _0x5472aa, _0x58f4c3];
  const _0x57f8dd = [];
  const _0x3e790a = [[-_0x4eebde, -_0x5636ab * 0.45], [_0x4eebde, -_0x5636ab * 0.45], [-_0x4eebde, _0x5636ab * 0.45], [_0x4eebde, _0x5636ab * 0.45]];
  for (const [_0x28dc54, _0x1615c9] of _0x3e790a) {
    const _0x41d603 = new _0x9bc487.Mesh(_0xebc1b4, _0x4882fb);
    _0x41d603.position.set(_0x28dc54, _0x39e8c2 * 0.5, _0x1615c9);
    _0x41d603.castShadow = true;
    _0x41d603.receiveShadow = true;
    _0x143ebe.add(_0x41d603);
    _0x57f8dd.push(_0x41d603);
    const _0x117c9e = new _0x9bc487.Mesh(_0x58f4c3, _0x3c68db);
    _0x117c9e.position.set(_0x28dc54, _0x39e8c2 + 0.06, _0x1615c9);
    _0x117c9e.castShadow = true;
    _0x143ebe.add(_0x117c9e);
    _0x57f8dd.push(_0x117c9e);
  }
  for (const _0x5c512e of [-_0x5636ab * 0.45, _0x5636ab * 0.45]) {
    const _0x4b975b = new _0x9bc487.Mesh(_0x5472aa, _0x3c68db);
    _0x4b975b.position.set(0, _0x39e8c2 + 0.02, _0x5c512e);
    _0x4b975b.castShadow = true;
    _0x143ebe.add(_0x4b975b);
    _0x57f8dd.push(_0x4b975b);
  }
  const _0x5e5256 = Math.max(0.9, _0x1403ae * 0.72);
  const _0xa3584b = new _0x9bc487.TorusGeometry(_0x5e5256, 0.09, 6, 16, Math.PI);
  _0x4dfcae.push(_0xa3584b);
  const _0xdcc7ec = new _0x9bc487.Mesh(_0xa3584b, _0x3c68db);
  _0xdcc7ec.position.set(0, _0x39e8c2 + 0.08, _0x5636ab * 0.45);
  _0xdcc7ec.rotation.y = Math.PI / 2;
  _0xdcc7ec.rotation.z = Math.PI / 2;
  _0xdcc7ec.castShadow = true;
  _0x143ebe.add(_0xdcc7ec);
  _0x57f8dd.push(_0xdcc7ec);
  const _0x5abbfc = new _0x9bc487.BoxGeometry(0.12, 0.18, _0x5636ab * 0.9);
  _0x4dfcae.push(_0x5abbfc);
  for (const _0x1eb9d6 of [-_0x4eebde, _0x4eebde]) {
    const _0x2a3b3c = new _0x9bc487.Mesh(_0x5abbfc, _0x4882fb);
    _0x2a3b3c.position.set(_0x1eb9d6, 1.05, 0);
    _0x2a3b3c.castShadow = true;
    _0x143ebe.add(_0x2a3b3c);
    _0x57f8dd.push(_0x2a3b3c);
  }
  _0x170619.add(_0x143ebe);
  _0x2265fb.push(() => {
    _0x143ebe.removeFromParent();
    for (const _0x23298a of _0x4dfcae) {
      _0x23298a.dispose();
    }
    if (_0x2a7d0f) {
      _0x3c68db.dispose();
    }
  });
  return _0x143ebe;
}
export function createSpireCrown(_0x5149cd, _0x11dd98, _0x2749d9, _0x403ee1 = {}) {
  const _0x1a4ece = new _0x9bc487.Group();
  _0x1a4ece.name = "SpireCrown";
  _0x1a4ece.position.set(_0x11dd98.x, _0x11dd98.y, _0x11dd98.z);
  const _0x3d334e = _0x403ee1.scale ?? 1;
  const _0x3d64ca = (_0x403ee1.height ?? 4.6) * _0x3d334e;
  const _0x15fbe9 = _0x403ee1.stoneMat ?? new _0x9bc487.MeshStandardMaterial({
    name: "SpireStone",
    color: _0x2e1cb4.slateDeep,
    roughness: 0.9,
    metalness: 0.05
  });
  const _0x38b750 = _0x403ee1.accentMat ?? new _0x9bc487.MeshStandardMaterial({
    name: "SpireVioletVein",
    color: 3812952,
    emissive: new _0x9bc487.Color(_0x2e1cb4.violet),
    emissiveIntensity: 0.22,
    roughness: 0.68,
    metalness: 0.1
  });
  const _0x5484b7 = !_0x403ee1.stoneMat;
  const _0x100f8f = !_0x403ee1.accentMat;
  const _0x3afcf6 = [];
  const _0x1fdd2a = new _0x9bc487.CylinderGeometry(_0x3d334e * 1.15, _0x3d334e * 1.35, _0x3d334e * 0.35, 8);
  _0x3afcf6.push(_0x1fdd2a);
  const _0x1b3251 = new _0x9bc487.Mesh(_0x1fdd2a, _0x15fbe9);
  _0x1b3251.position.y = _0x3d334e * 0.18;
  _0x1b3251.castShadow = true;
  _0x1b3251.receiveShadow = true;
  _0x1a4ece.add(_0x1b3251);
  const _0xd72dfb = [{
    y: 0.55,
    w: 0.95,
    d: 0.95,
    h: 0.7,
    yaw: 0.05
  }, {
    y: 1.25,
    w: 0.82,
    d: 0.78,
    h: 0.75,
    yaw: -0.08
  }, {
    y: 1.95,
    w: 0.7,
    d: 0.68,
    h: 0.7,
    yaw: 0.12
  }, {
    y: 2.6,
    w: 0.58,
    d: 0.55,
    h: 0.65,
    yaw: -0.05
  }, {
    y: 3.2,
    w: 0.48,
    d: 0.42,
    h: 0.6,
    yaw: 0.18
  }];
  for (const _0x46c274 of _0xd72dfb) {
    const _0x371be4 = new _0x9bc487.BoxGeometry(_0x46c274.w * _0x3d334e, _0x46c274.h * _0x3d334e, _0x46c274.d * _0x3d334e);
    _0x3afcf6.push(_0x371be4);
    const _0x4c94b3 = new _0x9bc487.Mesh(_0x371be4, _0x15fbe9);
    _0x4c94b3.position.set((_0x46c274.yaw > 0 ? 0.06 : -0.05) * _0x3d334e, _0x46c274.y * _0x3d334e, _0x46c274.yaw * 0.2 * _0x3d334e);
    _0x4c94b3.rotation.y = _0x46c274.yaw;
    _0x4c94b3.rotation.z = _0x46c274.yaw * 0.15;
    _0x4c94b3.castShadow = true;
    _0x4c94b3.receiveShadow = true;
    _0x1a4ece.add(_0x4c94b3);
  }
  const _0x18c551 = new _0x9bc487.BoxGeometry(_0x3d334e * 0.72, _0x3d334e * 0.14, _0x3d334e * 0.72);
  _0x3afcf6.push(_0x18c551);
  const _0x4a243b = new _0x9bc487.Mesh(_0x18c551, _0x38b750);
  _0x4a243b.position.y = _0x3d334e * 1.9;
  _0x4a243b.rotation.y = 0.3;
  _0x4a243b.castShadow = true;
  _0x1a4ece.add(_0x4a243b);
  const _0x1b2664 = [{
    x: 0,
    z: 0,
    h: 1.35,
    w: 0.22,
    yaw: 0
  }, {
    x: 0.28,
    z: 0.1,
    h: 0.95,
    w: 0.16,
    yaw: 0.4
  }, {
    x: -0.24,
    z: -0.08,
    h: 1.1,
    w: 0.15,
    yaw: -0.35
  }, {
    x: 0.12,
    z: -0.26,
    h: 0.75,
    w: 0.13,
    yaw: 0.9
  }, {
    x: -0.18,
    z: 0.22,
    h: 0.85,
    w: 0.14,
    yaw: -0.7
  }, {
    x: 0.32,
    z: -0.18,
    h: 0.55,
    w: 0.11,
    yaw: 1.2
  }];
  const _0x536a70 = _0x3d334e * 3.55;
  for (const _0x42de96 of _0x1b2664) {
    const _0x137930 = new _0x9bc487.BoxGeometry(_0x42de96.w * _0x3d334e, _0x42de96.h * _0x3d334e, _0x42de96.w * _0x3d334e);
    _0x3afcf6.push(_0x137930);
    const _0x4b2ec3 = new _0x9bc487.Mesh(_0x137930, _0x42de96.h > 1 ? _0x38b750 : _0x15fbe9);
    _0x4b2ec3.position.set(_0x42de96.x * _0x3d334e, _0x536a70 + _0x42de96.h * _0x3d334e * 0.5, _0x42de96.z * _0x3d334e);
    _0x4b2ec3.rotation.y = _0x42de96.yaw;
    _0x4b2ec3.rotation.z = _0x42de96.x * 0.25;
    _0x4b2ec3.rotation.x = _0x42de96.z * 0.2;
    _0x4b2ec3.castShadow = true;
    _0x1a4ece.add(_0x4b2ec3);
  }
  const _0x519df8 = new _0x9bc487.BoxGeometry(_0x3d334e * 0.28, _0x3d334e * 0.12, _0x3d334e * 0.2);
  _0x3afcf6.push(_0x519df8);
  for (let _0x25695a = 0; _0x25695a < 5; _0x25695a++) {
    const _0x2b9306 = _0x25695a / 5 * Math.PI * 2 + 0.3;
    const _0x291068 = new _0x9bc487.Mesh(_0x519df8, _0x15fbe9);
    _0x291068.position.set(Math.cos(_0x2b9306) * 1.05 * _0x3d334e, _0x3d334e * 0.08, Math.sin(_0x2b9306) * 1.05 * _0x3d334e);
    _0x291068.rotation.y = _0x2b9306;
    _0x291068.rotation.z = 0.3 + _0x25695a * 0.1;
    _0x291068.castShadow = true;
    _0x1a4ece.add(_0x291068);
  }
  const _0x597af8 = new _0x9bc487.PointLight(_0x2e1cb4.violet, 0.45, 10, 2);
  _0x597af8.position.y = _0x3d64ca + _0x3d334e * 0.4;
  _0x1a4ece.add(_0x597af8);
  _0x5149cd.add(_0x1a4ece);
  _0x2749d9.push(() => {
    _0x1a4ece.removeFromParent();
    for (const _0x164045 of _0x3afcf6) {
      _0x164045.dispose();
    }
    if (_0x5484b7) {
      _0x15fbe9.dispose();
    }
    if (_0x100f8f) {
      _0x38b750.dispose();
    }
  });
  return _0x1a4ece;
}