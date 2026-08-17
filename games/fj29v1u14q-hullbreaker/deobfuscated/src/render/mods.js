import * as _0x2c20a7 from "three";
import { CONFIG as _0x49dbed } from "../config.js";
import { installView as _0x127c8a } from "../sim/bridge.js";
import { gameMs as _0x574db0 } from "../sim/time.js";
import { mods as _0x2cb896 } from "../sim/mods.js";
import { resetTint as _0x287570, setTint as _0x373dec } from "../ui/tint.js";
import { scene as _0xf8731b } from "./scene.js";
import { placeOnTower as _0x5d804a } from "./tower.js";
import { PAL as _0xcf0fb9 } from "./palette.js";
import { routeRenderable as _0x31ef94 } from "./route-visibility.js";
const f = _0x49dbed.mods.ghostDelayMs.map(() => {
  const _0x2ccee5 = new _0x2c20a7.Mesh(new _0x2c20a7.BoxGeometry(0.45, 1.5, 0.4), new _0x2c20a7.MeshBasicMaterial({
    color: _0xcf0fb9.player,
    transparent: true,
    opacity: 0.32
  }));
  _0x2ccee5.visible = false;
  _0xf8731b.add(_0x2ccee5);
  return _0x2ccee5;
});
const p = new _0x2c20a7.Mesh(new _0x2c20a7.BoxGeometry(0.35, 16, 0.35), new _0x2c20a7.MeshBasicMaterial({
  color: _0xcf0fb9.muzzle,
  transparent: true,
  opacity: 0.5
}));
function b() {
  if (_0x2cb896.clonesVisible) {
    for (let _0x2516aa = 0; _0x2516aa < f.length; _0x2516aa++) {
      const _0xa9bf93 = _0x2cb896.cloneTrail[_0x2516aa];
      const _0x2b4571 = f[_0x2516aa];
      _0x2b4571.visible = false;
      if (_0xa9bf93 && _0x31ef94(_0xa9bf93.x)) {
        _0x2b4571.visible = true;
        _0x5d804a(_0x2b4571, _0xa9bf93.x, _0xa9bf93.y + 0.85, 0);
      }
    }
  } else {
    for (const _0x613ec8 of f) {
      _0x613ec8.visible = false;
    }
  }
  if (!_0x2cb896.lance) {
    p.visible = false;
  }
  const _0x1d03aa = _0xcf0fb9.tints;
  let _0x28e111 = "transparent";
  if (_0x574db0 < _0x2cb896.lanceFlashUntil) {
    _0x28e111 = _0x1d03aa.lance;
  } else if (_0x574db0 < _0x2cb896.chronoUntil) {
    _0x28e111 = _0x1d03aa.chrono;
  }
  _0x373dec(_0x28e111);
}
function h(_0x37dfe1) {
  p.visible = _0x31ef94(_0x37dfe1.s);
  if (p.visible) {
    _0x5d804a(p, _0x37dfe1.s, 8, 0);
    p.material.opacity = 0.25 + (0.5 + Math.sin(_0x574db0 / 40) * 0.5) * 0.35;
  }
}
function v() {
  p.visible = false;
  for (const _0x2db8c7 of f) {
    _0x2db8c7.visible = false;
  }
  _0x287570();
}
p.visible = false;
_0xf8731b.add(p);
let d = false;
export function initModsView() {
  return !d && (_0x127c8a({
    mods: {
      sync: b,
      cleared: v,
      lanceTelegraph: h
    }
  }), d = true, true);
}