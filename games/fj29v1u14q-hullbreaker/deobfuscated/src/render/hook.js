import * as _0x3c025b from "three";
import { installView as _0x56acbe } from "../sim/bridge.js";
import { blink as _0x5a8020 } from "../sim/time.js";
import { player as _0x394fb0 } from "../sim/player.js";
import { hookAnchors as _0x48dd0c, hookEnabled as _0x42eea5, hookSnapshot as _0xae293b, hookTether as _0x4050ff } from "../sim/hook.js";
import { CONFIG as _0x1243af } from "../config.js";
import { scene as _0x554986 } from "./scene.js";
import { placeOnTower as _0x431c6a } from "./tower.js";
const l = [];
let p = null;
if (_0x42eea5()) {
  const u = new _0x3c025b.TorusGeometry(0.42, 0.09, 6, 12);
  const y = new _0x3c025b.BoxGeometry(0.16, 0.5, 0.16);
  for (const M of _0x48dd0c()) {
    const x = new _0x3c025b.MeshStandardMaterial({
      color: _0x1243af.palette.hookAnchor,
      flatShading: true
    });
    const j = new _0x3c025b.Group();
    const k = new _0x3c025b.Mesh(u, x);
    const g = new _0x3c025b.Mesh(y, x);
    g.position.y = 0.42;
    j.add(k, g);
    _0x554986.add(j);
    l.push({
      anchor: M,
      group: j,
      mat: x
    });
  }
  const w = new _0x3c025b.MeshBasicMaterial({
    color: _0x1243af.palette.hookTether
  });
  p = new _0x3c025b.Mesh(new _0x3c025b.BoxGeometry(0.08, 1, 0.08), w);
  p.visible = false;
  _0x554986.add(p);
}
function f() {
  if (!p) {
    return;
  }
  const _0xc3aaf0 = _0xae293b();
  for (const _0x1d1906 of l) {
    const _0x50d0b8 = _0xc3aaf0.acquirable === _0x1d1906.anchor.id;
    const _0x5ba303 = _0xc3aaf0.anchorId === _0x1d1906.anchor.id;
    _0x431c6a(_0x1d1906.group, _0x1d1906.anchor.x, _0x1d1906.anchor.y, 0);
    const _0x8673b4 = _0x5ba303 ? 1.35 : _0x50d0b8 ? _0x5a8020(140) ? 1.35 : 1.15 : 1;
    _0x1d1906.group.scale.setScalar(_0x8673b4);
    _0x1d1906.mat.color.set(_0x5ba303 || _0x50d0b8 ? _0x1243af.palette.hookLive : _0x1243af.palette.hookAnchor);
  }
  const _0x26521f = _0x4050ff(_0x394fb0);
  if (!_0x26521f) {
    p.visible = false;
    return;
  }
  const _0x120daa = (_0x26521f.x0 + _0x26521f.x1) / 2;
  const _0x45bfb4 = (_0x26521f.y0 + _0x26521f.y1) / 2;
  const _0x5392d7 = _0x26521f.x1 - _0x26521f.x0;
  const _0x109f89 = _0x26521f.y1 - _0x26521f.y0;
  const _0x45efa6 = Math.max(0.05, Math.hypot(_0x5392d7, _0x109f89));
  _0x431c6a(p, _0x120daa, _0x45bfb4, 0.05);
  p.scale.set(1, _0x45efa6, 1);
  p.rotation.z = Math.atan2(_0x109f89, _0x5392d7) - Math.PI / 2;
  p.visible = true;
}
let d = false;
export function initHookView() {
  return !d && (_0x56acbe({
    hook: {
      sync: f
    }
  }), d = true, true);
}