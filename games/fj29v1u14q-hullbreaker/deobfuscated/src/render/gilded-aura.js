import * as _0x3b42b5 from "three";
import { PAL as _0x399f2f } from "./palette.js";
let n = false;
let i = null;
let r = null;
let o = [];
export function setGildedRig(_0x1b8550) {
  n = !!_0x1b8550;
}
export function gildedRigActive() {
  return n;
}
export function gildedAuraVisible() {
  return !!i && i.visible;
}
export function mountGildedAura(_0x1e3d0a, _0x1ff1e6) {
  if (i) {
    return false;
  }
  const _0x59ccc3 = function () {
    const _0x2e0c1b = document.createElement("canvas");
    _0x2e0c1b.width = 64;
    _0x2e0c1b.height = 64;
    const _0xe60869 = _0x2e0c1b.getContext("2d");
    const _0x395b77 = _0xe60869.createRadialGradient(32, 32, 2, 32, 32, 32);
    _0x395b77.addColorStop(0, "white");
    _0x395b77.addColorStop(0.3, "white");
    _0x395b77.addColorStop(1, "transparent");
    _0xe60869.fillStyle = _0x395b77;
    _0xe60869.fillRect(0, 0, 64, 64);
    return new _0x3b42b5.CanvasTexture(_0x2e0c1b);
  }();
  const _0x296425 = () => new _0x3b42b5.MeshBasicMaterial({
    map: _0x59ccc3,
    color: _0x399f2f.gildedGold,
    transparent: true,
    opacity: 0,
    blending: _0x3b42b5.AdditiveBlending,
    depthWrite: false,
    fog: false
  });
  i = new _0x3b42b5.Group();
  r = new _0x3b42b5.Mesh(new _0x3b42b5.PlaneGeometry(_0x1ff1e6 * 2.1, _0x1ff1e6 * 2.1), _0x296425());
  i.add(r);
  o = [0, 1, 2].map(() => {
    const _0xfbfa95 = new _0x3b42b5.Mesh(new _0x3b42b5.PlaneGeometry(_0x1ff1e6 * 2.6, _0x1ff1e6 * 2.6), _0x296425());
    i.add(_0xfbfa95);
    return _0xfbfa95;
  });
  i.position.set(0, _0x1ff1e6 * 0.5, -0.12);
  i.visible = false;
  _0x1e3d0a.add(i);
  return true;
}
export function syncGildedAura(_0x5b5467, _0x4e3b21) {
  if (!i) {
    return;
  }
  i.visible = n && _0x4e3b21 > 0.01;
  if (!i.visible) {
    return;
  }
  const _0x284816 = 0.5 + Math.sin(_0x5b5467 * 0.0042) * 0.5;
  r.material.opacity = (0.34 + _0x284816 * 0.22) * _0x4e3b21;
  r.scale.setScalar(1 + _0x284816 * 0.1);
  for (let _0x2b90f4 = 0; _0x2b90f4 < o.length; _0x2b90f4++) {
    const _0x46d5ab = (_0x5b5467 % 1500 / 1500 + _0x2b90f4 / o.length) % 1;
    const _0x76ad42 = 1 - _0x46d5ab;
    o[_0x2b90f4].material.opacity = _0x76ad42 * _0x76ad42 * 0.5 * _0x4e3b21;
    o[_0x2b90f4].scale.setScalar(0.5 + _0x46d5ab * 1.05);
  }
}
export function gildedShimmer(_0x180a36) {
  return 0.5 + Math.sin(_0x180a36 * 0.0042) * 0.5;
}