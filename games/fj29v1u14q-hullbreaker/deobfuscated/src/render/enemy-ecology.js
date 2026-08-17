import * as _0x54380b from "three";
import { primitiveBox as _0x1fa72d } from "./sprite-table.js";
import { applySpriteUnderside as _0x1aa353 } from "./sprite-grounding.js";
import { enemyEcologyArtSnapshot as _0x6fc154, enemyEcologyTexture as _0x1d1a0d } from "./enemy-ecology-art.js";
import { ENEMY_ECOLOGY_ATLAS as _0x47ff93, ENEMY_ECOLOGY_VARIANTS as _0xbf3bb2, enemyEcologyVariant as _0x3304ac } from "./enemy-ecology-spec.js";
import { ECOLOGY_ACTION as _0x247e71, ECOLOGY_BODY as _0x3ca012, enemyEcologyActionIndex as _0x84ae9a, enemyEcologyBodyIndex as _0x568de2, enemyEcologyVisualCode as _0x372777, selectEnemyEcologyVisual as _0x18354a } from "./enemy-ecology-select.js";
const d = _0x47ff93.cellPx;
const f = d / 2;
const p = new Map();
function h(_0x53c289, _0x14bae2, _0xb2e712, _0x1ee361, _0x56bba6, _0x4d3447, _0x1908c1) {
  const _0x1e37d0 = new _0x54380b.PlaneGeometry(d * _0xb2e712, d * _0xb2e712);
  _0x1e37d0.translate(_0x1ee361, _0x56bba6, 0);
  const _0x2c7fce = _0x1e37d0.attributes.uv;
  const _0x2615ca = _0x53c289 / _0x47ff93.grid[0];
  const _0x312dc9 = (_0x53c289 + 1) / _0x47ff93.grid[0];
  const _0x3270a2 = 1 - (_0x14bae2 + 1) / _0x47ff93.grid[1];
  const _0x533e91 = 1 - _0x14bae2 / _0x47ff93.grid[1];
  for (let _0x30123e = 0; _0x30123e < _0x2c7fce.count; _0x30123e++) {
    const _0x439db0 = _0x2c7fce.getX(_0x30123e);
    const _0x70655d = _0x2c7fce.getY(_0x30123e);
    _0x2c7fce.setXY(_0x30123e, _0x2615ca + _0x439db0 * (_0x312dc9 - _0x2615ca), _0x3270a2 + _0x70655d * (_0x533e91 - _0x3270a2));
  }
  _0x2c7fce.needsUpdate = true;
  _0x1e37d0.userData.enemyEcology = true;
  _0x1e37d0.userData.variantId = _0x1908c1;
  _0x1e37d0.userData.axis = _0x4d3447;
  _0x1e37d0.userData.index = _0x14bae2;
  _0x1e37d0.userData.fullCellUv = true;
  return _0x1aa353(_0x1e37d0, _0x4d3447 === "body" ? 0.78 : 0.92);
}
function b(_0x45ee86, _0x4eb9b3) {
  const _0x28fee8 = _0x1fa72d(_0x45ee86.kind);
  if (!_0x28fee8 || !_0x4eb9b3) {
    return null;
  }
  const [_0x3d41fe, _0x20ec11, _0x1aa64e, _0xe3a261] = _0x45ee86.bounds;
  const _0x1f86eb = Math.max(1, _0x1aa64e - _0x3d41fe);
  const _0x1b619b = Math.max(1, _0xe3a261 - _0x20ec11);
  const _0x266acf = Math.min(_0x28fee8.w / _0x1f86eb, _0x28fee8.h / _0x1b619b);
  const _0x345e62 = _0x45ee86.grounded ? _0x28fee8.cy - _0x28fee8.h / 2 : _0x28fee8.cy;
  const _0xbe8798 = [];
  const _0x15b587 = [];
  const _0x3b8f6b = [];
  const _0x5746e0 = [];
  for (let _0x4927eb = 0; _0x4927eb < 8; _0x4927eb++) {
    const _0x144cef = _0x45ee86.rows[_0x4927eb];
    const [_0x1326de, _0x259b92] = _0x144cef.bodyRoot;
    const [_0x1cf7fc, _0x2ff0df] = _0x144cef.bodyPivot;
    const [_0x5d8183, _0x52431a] = _0x144cef.actionPivot;
    const [_0x3f56a3, _0x31a110] = _0x144cef.actionAttack;
    _0xbe8798.push(h(_0x45ee86.bodyColumn, _0x4927eb, _0x266acf, 0 + (f - _0x1326de) * _0x266acf, _0x345e62 + (_0x259b92 - f) * _0x266acf, "body", _0x45ee86.id));
    _0x15b587.push(h(_0x45ee86.actionColumn, _0x4927eb, _0x266acf, (f - _0x5d8183) * _0x266acf, (_0x52431a - f) * _0x266acf, "action", _0x45ee86.id));
    _0x5746e0.push(Object.freeze({
      x: (_0x3f56a3 - _0x5d8183) * _0x266acf,
      y: (_0x52431a - _0x31a110) * _0x266acf
    }));
    _0x3b8f6b.push(Object.freeze({
      x: 0 + (_0x1cf7fc - _0x1326de) * _0x266acf,
      y: _0x345e62 + (_0x259b92 - _0x2ff0df) * _0x266acf
    }));
  }
  return Object.freeze({
    spec: _0x45ee86,
    tex: _0x4eb9b3,
    box: _0x28fee8,
    worldPerPx: _0x266acf,
    targetRootX: 0,
    targetRootY: _0x345e62,
    body: Object.freeze(_0xbe8798),
    action: Object.freeze(_0x15b587),
    compose: Object.freeze(_0x3b8f6b),
    actionAttack: Object.freeze(_0x5746e0)
  });
}
const x = _0x1d1a0d();
if (x) {
  for (const k of _0xbf3bb2) {
    const A = b(k, x);
    if (A) {
      p.set(k.id, A);
    }
  }
}
export function enemyEcologyBundle(_0x238941, _0x462acb = "") {
  const _0x440f75 = _0x3304ac(_0x238941, _0x462acb);
  return _0x440f75 && p.get(_0x440f75.id) || null;
}
export function enemyEcologyWarmGeometries() {
  const _0x1691a2 = [];
  for (const _0x291cc4 of p.values()) {
    for (const _0x4cf839 of _0x291cc4.body) {
      _0x1691a2.push({
        kind: _0x291cc4.spec.kind,
        geo: _0x4cf839
      });
    }
    for (const _0x143021 of _0x291cc4.action) {
      _0x1691a2.push({
        kind: _0x291cc4.spec.kind,
        geo: _0x143021
      });
    }
  }
  return _0x1691a2;
}
function E(_0x5c1ac7, _0xd93df2) {
  if (!_0x5c1ac7?.ecology || _0xd93df2 === _0x5c1ac7.ecologyCode) {
    return _0xd93df2;
  }
  const _0x8f4e3a = _0x568de2(_0xd93df2);
  const _0x37ca06 = _0x84ae9a(_0xd93df2);
  const _0x586937 = _0x5c1ac7.ecology.compose[_0x8f4e3a];
  const _0x47deea = _0x5c1ac7.ecology.actionAttack[_0x37ca06];
  _0x5c1ac7.mesh.geometry = _0x5c1ac7.ecology.body[_0x8f4e3a];
  _0x5c1ac7.ecologyActionMesh.geometry = _0x5c1ac7.ecology.action[_0x37ca06];
  _0x5c1ac7.ecologyActionMesh.position.set(_0x586937.x, _0x586937.y, 0.018);
  _0x5c1ac7.ecologyAttackX = _0x586937.x + _0x47deea.x;
  _0x5c1ac7.ecologyAttackY = _0x586937.y + _0x47deea.y;
  _0x5c1ac7.ecologyCode = _0xd93df2;
  _0x5c1ac7.ecologyBodyRow = _0x8f4e3a;
  _0x5c1ac7.ecologyActionRow = _0x37ca06;
  _0x5c1ac7.poseKey = "ecology:" + _0x5c1ac7.ecology.spec.id + ":b" + _0x8f4e3a + ":a" + _0x37ca06;
  return _0xd93df2;
}
export function syncEnemyEcologyVisual(_0x1ca3fb, _0x4f27d1, _0x3e6b03) {
  return !!_0x1ca3fb?.ecology && (E(_0x1ca3fb, _0x18354a(_0x4f27d1, _0x3e6b03)), true);
}
export function freezeEnemyEcologyBreakup(_0x575219) {
  return !!_0x575219?.ecology && (E(_0x575219, _0x372777(_0x3ca012.BREAKUP, _0x247e71.SPENT)), true);
}
export function enemyEcologyAttackSocketWorld(_0x558001, _0x449a5d, _0x3e1a2f) {
  if (!_0x558001?.ecology || !_0x3e1a2f) {
    return false;
  }
  const _0x394680 = _0x558001.ecologyAttackX * _0x558001.mesh.scale.x;
  const _0x374f36 = _0x558001.ecologyAttackY * _0x558001.mesh.scale.y;
  const _0x3917d6 = Math.cos(_0x558001.mesh.rotation.z);
  const _0x2d7504 = Math.sin(_0x558001.mesh.rotation.z);
  _0x3e1a2f.s = _0x449a5d.x + _0x394680 * _0x3917d6 - _0x374f36 * _0x2d7504;
  _0x3e1a2f.y = _0x449a5d.y + _0x558001.presentationLift + _0x394680 * _0x2d7504 + _0x374f36 * _0x3917d6;
  return true;
}
export function enemyEcologyRuntimeSnapshot() {
  return {
    ..._0x6fc154(),
    variants: _0xbf3bb2.length,
    residentVariants: p.size,
    componentGeometries: p.size * 16,
    visualCombinations: p.size * 64,
    quadsPerLiveEnemy: 2,
    extraDrawsPerLiveEnemy: 1,
    actionDepth: 0.018,
    fullCellUv: true,
    crossfade: false,
    sharedRootAssembly: true,
    fixedUnionFit: true,
    breakupCode: _0x372777(_0x3ca012.BREAKUP, _0x247e71.SPENT)
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_ENEMY_ECOLOGY_RUNTIME = enemyEcologyRuntimeSnapshot;
}