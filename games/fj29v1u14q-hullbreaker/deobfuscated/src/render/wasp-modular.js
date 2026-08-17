import * as _0x1b18e5 from "three";
import { primitiveBox as _0x6040ba } from "./sprite-table.js";
import { waspModularTexture as _0x2e4e2f } from "./wasp-modular-art.js";
import { applySpriteUnderside as _0x18399a } from "./sprite-grounding.js";
import { WASP_MODULAR_SPEC as _0x1833d0 } from "./wasp-modular-spec.js";
function n(_0x2ebb7f) {
  const _0x35abc0 = _0x6040ba("wasp").w / _0x1833d0.referenceInkWidthPx;
  const [,, _0x17a601, _0x2b33db] = _0x2ebb7f.packedRectPx;
  const [_0x467087, _0xd7b958] = _0x2ebb7f.packedAnchorLocalPx;
  const _0x2378d9 = new _0x1b18e5.PlaneGeometry(_0x17a601 * _0x35abc0, _0x2b33db * _0x35abc0);
  _0x2378d9.translate((_0x17a601 / 2 - _0x467087) * _0x35abc0, (_0xd7b958 - _0x2b33db / 2) * _0x35abc0, 0);
  const [_0x462f9c, _0x1805ca, _0x1fea86, _0x5613d9] = _0x2ebb7f.uv;
  const _0x14f643 = _0x2378d9.attributes.uv;
  for (let _0x349865 = 0; _0x349865 < _0x14f643.count; _0x349865++) {
    const _0x4338e2 = _0x14f643.getX(_0x349865);
    const _0x1f9fc4 = _0x14f643.getY(_0x349865);
    _0x14f643.setXY(_0x349865, _0x462f9c + _0x4338e2 * (_0x1fea86 - _0x462f9c), 1 - _0x5613d9 + _0x1f9fc4 * (_0x5613d9 - _0x1805ca));
  }
  _0x14f643.needsUpdate = true;
  _0x2378d9.userData.waspModularLayer = _0x2ebb7f.layer;
  _0x2378d9.userData.waspModularId = _0x2ebb7f.id;
  _0x2378d9.userData.waspModularSourceIndex = _0x2ebb7f.sourceIndex;
  _0x18399a(_0x2378d9, _0x2ebb7f.layer === "body" ? 0.84 : 0.94);
  return Object.freeze({
    id: _0x2ebb7f.id,
    index: _0x2ebb7f.phase ?? null,
    geo: _0x2378d9
  });
}
const o = _0x2e4e2f();
const d = o ? Object.freeze({
  tex: o,
  body: Object.freeze(_0x1833d0.bodyStates.map(n)),
  wings: Object.freeze(_0x1833d0.wingPhases.map(n)),
  combinations: _0x1833d0.bodyStates.length * _0x1833d0.wingPhases.length
}) : null;
export function waspModularBundle() {
  return d;
}
export function waspModularRuntimeSnapshot() {
  return {
    ready: !!d,
    bodyStates: d?.body.length || 0,
    wingPhases: d?.wings.length || 0,
    combinations: d?.combinations || 0,
    sharedGeometries: d ? d.body.length + d.wings.length : 0,
    meshesPerWasp: d ? _0x1833d0.runtime.meshesPerWasp : 0,
    drawCallsPerWasp: d ? _0x1833d0.runtime.drawCallsPerWasp : 0,
    addedDrawCallsPerWasp: d ? _0x1833d0.runtime.addedDrawCallsPerWasp : 0,
    textureCount: d ? 1 : 0,
    estimatedGpuBytes: d ? _0x1833d0.runtime.estimatedGpuBytes : 0,
    collisionChanged: false,
    simChanged: false,
    crossfade: false
  };
}