import * as _0x19307a from "three";
import { PAL as _0x55112c } from "./palette.js";
import { OVERDRIVE_ENTRY_MS as _0x3e3a18, clampPower01 as _0x466e01, overdriveBreath as _0x24a7b9 } from "./power-feedback.js";
let i = null;
let a = 0;
let s = -1000000000;
let c = -1;
let l = 0;
let u = 1;
export function mountPowerAura(_0x7d0ad3, _0x1061ea) {
  return !i && (i = new _0x19307a.Mesh(function (_0x1a8684) {
    const _0x312c72 = [];
    const _0x5d2fe6 = [];
    const _0x40e42c = _0x1a8684 * 0.32;
    const _0x1ee8d6 = _0x1a8684 * 0.54;
    const _0x4ebd61 = _0x1a8684 * 0.13;
    const _0x504c72 = Math.max(0.035, _0x1a8684 * 0.022);
    const _0x22b215 = (_0x16aa5d, _0x51ea80, _0x5348c6, _0x13d3df) => {
      const _0x3be7cc = _0x312c72.length / 3;
      _0x312c72.push(_0x16aa5d, _0x51ea80, 0, _0x5348c6, _0x51ea80, 0, _0x5348c6, _0x13d3df, 0, _0x16aa5d, _0x13d3df, 0);
      _0x5d2fe6.push(_0x3be7cc, _0x3be7cc + 1, _0x3be7cc + 2, _0x3be7cc, _0x3be7cc + 2, _0x3be7cc + 3);
    };
    for (const _0x472dd6 of [-1, 1]) {
      for (const _0x7b5c1e of [-1, 1]) {
        const _0xbc227a = _0x472dd6 * _0x40e42c;
        const _0x3e57d1 = _0x7b5c1e * _0x1ee8d6;
        _0x22b215(_0x472dd6 < 0 ? _0xbc227a : _0xbc227a - _0x4ebd61, _0x3e57d1 - _0x504c72 * 0.5, _0x472dd6 < 0 ? _0xbc227a + _0x4ebd61 : _0xbc227a, _0x3e57d1 + _0x504c72 * 0.5);
        _0x22b215(_0xbc227a - _0x504c72 * 0.5, _0x7b5c1e < 0 ? _0x3e57d1 : _0x3e57d1 - _0x4ebd61, _0xbc227a + _0x504c72 * 0.5, _0x7b5c1e < 0 ? _0x3e57d1 + _0x4ebd61 : _0x3e57d1);
      }
    }
    const _0x39f32e = new _0x19307a.BufferGeometry();
    _0x39f32e.setAttribute("position", new _0x19307a.Float32BufferAttribute(_0x312c72, 3));
    _0x39f32e.setIndex(_0x5d2fe6);
    _0x39f32e.computeBoundingSphere();
    return _0x39f32e;
  }(_0x1061ea), new _0x19307a.MeshBasicMaterial({
    color: _0x55112c.muzzle,
    transparent: true,
    opacity: 0,
    blending: _0x19307a.AdditiveBlending,
    depthWrite: false,
    fog: false,
    side: _0x19307a.DoubleSide,
    toneMapped: false,
    forceSinglePass: true
  })), i.position.set(0, _0x1061ea * 0.5, -0.1), i.name = "RIG_OVERDRIVE_BRACKETS", i.userData.feedbackRole = "overdrive-local", i.visible = false, _0x7d0ad3.add(i), true);
}
export function syncPowerAura(_0x4b6643, _0x38f79b, _0x5d412d, _0x1c757d, _0x29a0e2) {
  if (!i) {
    return;
  }
  if (_0x4b6643 < c) {
    a = 0;
    s = -1000000000;
  }
  c = _0x4b6643;
  const _0x91a575 = Math.max(0, Math.min(2, _0x1c757d | 0));
  if (_0x91a575 > a) {
    s = _0x4b6643;
  }
  a = _0x91a575;
  const _0xf2fba8 = _0x466e01(_0x5d412d);
  const _0x1e5242 = _0x24a7b9(_0x4b6643);
  const _0x103b48 = _0x466e01(1 - (_0x4b6643 - s) / _0x3e3a18);
  const _0x3f50ad = _0x91a575 >= 2 ? 0.15 + _0x1e5242 * 0.08 : _0x91a575 === 1 ? 0.09 + _0xf2fba8 * 0.045 : Math.max(0, _0xf2fba8 - 0.22) * 0.055;
  l = _0x29a0e2 ? 0 : (_0x3f50ad + _0x103b48 * 0.4) * _0x38f79b;
  u = 1 + _0x103b48 * 0.2 + (_0x91a575 >= 2 ? _0x1e5242 * 0.035 : 0);
  i.visible = l > 0.006;
  if (i.visible) {
    i.material.opacity = l;
    i.scale.setScalar(u);
  }
}
export function powerAuraSnapshot() {
  return {
    mounted: !!i,
    visible: !!i && i.visible,
    notch: a,
    opacity: +l.toFixed(4),
    scale: +u.toFixed(4),
    fixedMeshes: 1,
    procedural: true
  };
}