import { gameMs as _0x14a5e3 } from "../../sim/time.js";
import { selectWaspBodyState as _0x2ae3c2, WASP_BODY as _0x3cf827 } from "../wasp-modular-select.js";
export const MODULAR_WASP_PRESENTER = Object.freeze({
  id: "modular-wasp",
  matches: _0x220fde => !!_0x220fde.modularBundle,
  spawn: (_0x37044a, _0x1a3167) => _0x37044a.spawnStandard(_0x1a3167),
  syncPose: function (_0x3518ae, _0x5302bb, _0x28a079) {
    const _0x4c333c = _0x5302bb.waspModular;
    if (!_0x4c333c) {
      return;
    }
    let _0xf7e083 = _0x28a079.x - _0x5302bb.waspLastX;
    let _0x520f7e = _0x28a079.y - _0x5302bb.waspLastY;
    if (Math.abs(_0xf7e083) > 0.75 || Math.abs(_0x520f7e) > 0.75) {
      _0xf7e083 = 0;
      _0x520f7e = 0;
    }
    const _0x456eb8 = Math.sign(_0x3518ae.spriteFaceX(_0x28a079, "waspmod:" + _0x5302bb.waspBodyState)) || 1;
    if (_0x456eb8 !== _0x5302bb.waspLastFace) {
      _0x5302bb.waspTurnUntil = _0x14a5e3 + 120;
    }
    _0x5302bb.waspMotion.turning = _0x14a5e3 < _0x5302bb.waspTurnUntil;
    _0x5302bb.waspMotion.dx = _0xf7e083;
    _0x5302bb.waspMotion.dy = _0x520f7e;
    const _0x53c115 = _0x2ae3c2(_0x28a079, _0x14a5e3, _0x5302bb.waspMotion);
    _0x5302bb.waspLastX = _0x28a079.x;
    _0x5302bb.waspLastY = _0x28a079.y;
    _0x5302bb.waspLastFace = _0x456eb8;
    _0x5302bb.actionActive = false;
    _0x5302bb.motionSource = "wasp-modular";
    _0x5302bb.motionFrame = _0x53c115;
    _0x5302bb.actorMotionFrame = null;
    if (_0x53c115 !== _0x5302bb.waspBodyState || _0x5302bb.poseKey !== "waspmod:" + _0x53c115) {
      _0x5302bb.waspBodyState = _0x53c115;
      _0x5302bb.poseKey = "waspmod:" + _0x53c115;
      _0x5302bb.mesh.geometry = _0x4c333c.body[_0x53c115].geo;
      _0x5302bb.mat.map = _0x4c333c.tex;
      _0x5302bb.mat.emissiveMap = _0x4c333c.tex;
    }
  },
  ownsSilhouette: (_0x1fa530, _0x4b8500) => _0x1fa530.currentMotionFrame(_0x4b8500) >= 0,
  usesLegacyPose: () => true,
  syncMaterial: (_0x3cc410, _0x23f6fb, _0x25d53e) => _0x3cc410.syncPaintedMaterial(_0x23f6fb, _0x25d53e),
  syncTransform: (_0x5f9da6, _0x62641e, _0x161982, _0x39ba56) => _0x5f9da6.syncPaintedTransform(_0x62641e, _0x161982, _0x39ba56),
  prepareRemoval: function (_0x24bf86, _0x558be6, _0x12fca4, _0x4d8bb3) {
    if (_0x4d8bb3) {
      _0x558be6.waspBodyState = _0x3cf827.DEATH_CRACK;
      _0x558be6.motionSource = "wasp-modular";
      _0x558be6.motionFrame = _0x3cf827.DEATH_CRACK;
      _0x558be6.poseKey = "waspmod:" + _0x3cf827.DEATH_CRACK;
      _0x558be6.mesh.geometry = _0x558be6.waspModular.body[_0x3cf827.DEATH_CRACK].geo;
      _0x558be6.mat.map = _0x558be6.waspModular.tex;
      _0x558be6.mat.emissiveMap = _0x558be6.waspModular.tex;
    }
    const _0x4a09cf = _0x24bf86.detachModularWaspWing(_0x558be6, _0x4d8bb3);
    if (_0x4a09cf) {
      return [_0x4a09cf];
    } else {
      return [];
    }
  }
});