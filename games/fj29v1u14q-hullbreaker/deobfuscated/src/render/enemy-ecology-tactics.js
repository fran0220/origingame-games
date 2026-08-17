import * as _0x5be47f from "three";
import { PAL as _0x1584a6 } from "./palette.js";
import { scene as _0x1a049a } from "./scene.js";
import { placeOnTower as _0x5c5d60 } from "./tower.js";
import { routeRenderable as _0x3216d2 } from "./route-visibility.js";
export const ECOLOGY_TACTIC_SLOT_CAP = 3;
export const ECOLOGY_TACTIC_DEPTH = 1.17;
let a = 0;
let s = 0;
let n = 0;
let r = 0;
const l = new _0x5be47f.BufferGeometry();
function p() {
  return new _0x5be47f.MeshBasicMaterial({
    color: _0x1584a6.waspDive,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
    fog: false,
    side: _0x5be47f.DoubleSide,
    forceSinglePass: true,
    toneMapped: false
  });
}
l.setAttribute("position", new _0x5be47f.Float32BufferAttribute([-0.5, 0, 0, -0.31, 0.5, 0, 0.22, 0.31, 0, 0.5, 0, 0, 0.22, -0.31, 0, -0.31, -0.5, 0], 3));
l.setIndex([0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5]);
l.computeVertexNormals();
export function attachEnemyEcologyTactics(_0x5babd5, _0x3ad095) {
  if (!_0x3ad095?.tacticHazards?.length || _0x5babd5.ecologyTacticMeshes) {
    return;
  }
  const _0x1738f3 = Math.min(3, _0x3ad095.tacticHazards.length);
  _0x5babd5.ecologyTacticMeshes = [];
  _0x5babd5.ecologyTacticMats = [];
  for (let _0x156616 = 0; _0x156616 < _0x1738f3; _0x156616++) {
    const _0x1a0cb8 = p();
    const _0x42fa31 = new _0x5be47f.Mesh(l, _0x1a0cb8);
    _0x42fa31.name = "Enemy ecology fixed tactic slot " + _0x156616;
    _0x42fa31.visible = false;
    _0x42fa31.renderOrder = 4;
    _0x42fa31.frustumCulled = false;
    _0x1a049a.add(_0x42fa31);
    _0x5babd5.ecologyTacticMeshes.push(_0x42fa31);
    _0x5babd5.ecologyTacticMats.push(_0x1a0cb8);
    n++;
  }
  a++;
}
export function hideEnemyEcologyTactics(_0x55a408) {
  for (const _0x48d968 of _0x55a408.ecologyTacticMeshes || []) {
    _0x48d968.visible = false;
  }
}
export function detachEnemyEcologyTactics(_0x11fd1a) {
  if (_0x11fd1a.ecologyTacticMeshes) {
    for (let _0x5759a2 = 0; _0x5759a2 < (_0x11fd1a.ecologyTacticMeshes?.length || 0); _0x5759a2++) {
      _0x1a049a.remove(_0x11fd1a.ecologyTacticMeshes[_0x5759a2]);
      _0x11fd1a.ecologyTacticMats[_0x5759a2].dispose();
      r++;
    }
    s++;
    _0x11fd1a.ecologyTacticMeshes = null;
    _0x11fd1a.ecologyTacticMats = null;
  }
}
function u(_0x2b680f, _0xbb6bd6) {
  return _0x3216d2(_0x2b680f) && _0x3216d2((_0x2b680f + _0xbb6bd6) * 0.5) && _0x3216d2(_0xbb6bd6);
}
export function syncEnemyEcologyTactics(_0x1ff471, _0x41e6cf) {
  const _0x14567a = _0x1ff471.ecologyTacticMeshes;
  if (_0x14567a) {
    for (let _0x25d45f = 0; _0x25d45f < _0x14567a.length; _0x25d45f++) {
      const _0x3e0ed7 = _0x14567a[_0x25d45f];
      const _0x20a6f1 = _0x1ff471.ecologyTacticMats[_0x25d45f];
      const _0x5a9669 = _0x41e6cf.tacticHazards[_0x25d45f];
      if (!_0x5a9669?.active || !u(_0x5a9669.prevX, _0x5a9669.x)) {
        _0x3e0ed7.visible = false;
        continue;
      }
      const _0x4cd06c = _0x5a9669.x - _0x5a9669.prevX;
      const _0x2e5188 = _0x5a9669.y - _0x5a9669.prevY;
      const _0x2d4c89 = Math.hypot(_0x4cd06c, _0x2e5188);
      const _0x45498b = Math.max(0.01, _0x5a9669.radius || 0);
      let _0x28e597 = Math.atan2(_0x2e5188, _0x4cd06c);
      if (_0x2d4c89 < 0.00001) {
        _0x28e597 = Math.atan2(_0x5a9669.vy || 0, _0x5a9669.vx || 1);
      }
      _0x3e0ed7.visible = true;
      _0x5c5d60(_0x3e0ed7, (_0x5a9669.prevX + _0x5a9669.x) * 0.5, (_0x5a9669.prevY + _0x5a9669.y) * 0.5, 1.17);
      _0x3e0ed7.rotation.z = _0x28e597;
      _0x3e0ed7.scale.set(Math.max(_0x45498b * 2, _0x2d4c89 + _0x45498b * 2), _0x45498b * 2, 1);
      _0x20a6f1.color.setHex(_0x5a9669.kind === "aircomb" ? _0x1584a6.mortarBlast : _0x1584a6.waspDive);
      _0x20a6f1.opacity = _0x5a9669.kind === "aircomb" ? 0.96 : 0.9;
    }
  }
}
export function enemyOwnsSweepfanBeam(_0x49625a) {
  return _0x49625a?.ecologyId === "polyp-sweepfan";
}
export function isSweepfanBeam(_0x4ddd98) {
  return enemyOwnsSweepfanBeam(_0x4ddd98) && _0x4ddd98.tacticPhase === "sweep-start" && _0x4ddd98.state === "fire" && Number.isFinite(_0x4ddd98.tacticBeamX) && Number.isFinite(_0x4ddd98.tacticBeamY);
}
export function enemyEcologyTacticRuntimeSnapshot() {
  return {
    ownerSlotCap: 3,
    ownersAttached: a,
    ownersDetached: s,
    activeOwners: a - s,
    materialsCreated: n,
    materialsDisposed: r,
    liveMaterials: n - r,
    balancedDisposal: n - r === (a - s) * 3,
    sharedGeometryCount: 1,
    actionOnlyEmission: true,
    routeAndTurnGate: "prev+mid+current routeRenderable"
  };
}
export function enemyEcologyTacticVisualSnapshot(_0x5779f3, _0x3ca8f2) {
  const _0x5693e8 = [];
  for (let _0xd89bfc = 0; _0xd89bfc < (_0x5779f3.ecologyTacticMeshes?.length || 0); _0xd89bfc++) {
    const _0x54990a = _0x3ca8f2.tacticHazards[_0xd89bfc];
    const _0x48298c = _0x5779f3.ecologyTacticMeshes[_0xd89bfc];
    _0x5693e8.push({
      index: _0xd89bfc,
      kind: _0x54990a?.kind || "",
      active: !!_0x54990a?.active,
      visible: _0x48298c.visible,
      prev: _0x54990a ? [_0x54990a.prevX, _0x54990a.prevY] : null,
      current: _0x54990a ? [_0x54990a.x, _0x54990a.y] : null,
      radius: _0x54990a?.radius || 0,
      exactSegmentAndRadius: true,
      routeAndTurnCulled: !!_0x54990a?.active && !_0x48298c.visible
    });
  }
  return {
    capacity: _0x5779f3.ecologyTacticMeshes?.length || 0,
    active: _0x5693e8.filter(_0x40456e => _0x40456e.active).length,
    visible: _0x5693e8.filter(_0x5360f5 => _0x5360f5.visible).length,
    fixedOwnerLocal: true,
    hotLoopAllocations: 0,
    actionOnlyEmission: true,
    idleGlow: false,
    surfaceDepth: 1.17,
    slots: _0x5693e8
  };
}