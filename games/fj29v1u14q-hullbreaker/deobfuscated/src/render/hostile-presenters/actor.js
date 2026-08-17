import { CONFIG as _0x33f293 } from "../../config.js";
import { gameMs as _0x3aa0f4 } from "../../sim/time.js";
import { selectActorMotion as _0x33f0d1, selectActorMotionClip as _0x4fd2c3 } from "../actor-motion.js";
export const ACTOR_PRESENTER = Object.freeze({
  id: "actor",
  matches: _0x1545af => !!_0x1545af.actorBundle,
  spawn: (_0x591ead, _0x566ea4) => _0x591ead.spawnStandard(_0x566ea4),
  syncPose: function (_0x25d4d2, _0x1b9988, _0x3cc23f) {
    if (!_0x1b9988.sprite) {
      return;
    }
    const _0x1c07f6 = _0x3cc23f.kind === "warden" && !!_0x1b9988.actorMotionBundle && _0x3aa0f4 < _0x3cc23f.enterUntil;
    const _0x4cbe7b = _0x1c07f6 ? 1 - Math.max(0, Math.min(1, (_0x3cc23f.enterUntil - _0x3aa0f4) / _0x33f293.wasp.enterMs)) : 0;
    const _0x252d22 = _0x1c07f6 ? _0x4fd2c3(_0x1b9988.actorMotionBundle, "deployment", _0x4cbe7b) : _0x33f0d1(_0x1b9988.actorMotionBundle, _0x3cc23f, _0x3aa0f4);
    if (!_0x252d22) {
      _0x25d4d2.syncSpritePose(_0x1b9988, _0x3cc23f);
      return;
    }
    const _0x3fb3a2 = "actor:" + _0x252d22.frame.index;
    _0x1b9988.actionActive = false;
    _0x1b9988.motionSource = "actor";
    _0x1b9988.motionFrame = _0x252d22.frame.index;
    _0x1b9988.actorMotionFrame = _0x252d22.frame;
    _0x1b9988.actorMotionClip = _0x252d22.clip;
    _0x1b9988.actorMotionMarker = _0x252d22.marker;
    _0x1b9988.actorMotionEvent = _0x252d22.event;
    _0x1b9988.actorMotionProgress = _0x252d22.progress;
    if (_0x3fb3a2 !== _0x1b9988.poseKey) {
      _0x1b9988.poseKey = _0x3fb3a2;
      _0x1b9988.mesh.geometry = _0x252d22.frame.geo;
      _0x1b9988.mat.map = _0x1b9988.actorMotionBundle.tex;
      _0x1b9988.mat.emissiveMap = _0x1b9988.actorMotionBundle.tex;
    }
  },
  ownsSilhouette: (_0x304c5a, _0x368a50) => _0x368a50.motionSource === "actor" && _0x304c5a.currentMotionFrame(_0x368a50) >= 0,
  usesLegacyPose: () => true,
  syncMaterial: (_0x566efe, _0x412654, _0x5156cb) => _0x566efe.syncPaintedMaterial(_0x412654, _0x5156cb),
  syncTransform: (_0x4bb57d, _0x23f902, _0x58031f, _0x2ab400) => _0x4bb57d.syncPaintedTransform(_0x23f902, _0x58031f, _0x2ab400),
  prepareRemoval: function (_0xf631d4, _0x3b1ba4, _0x1704f1, _0xb784c6) {
    if (!_0xb784c6 || _0x1704f1.kind !== "warden" || !_0x3b1ba4.actorMotionBundle) {
      return [];
    }
    const _0x22a8e1 = _0x4fd2c3(_0x3b1ba4.actorMotionBundle, "terminalRupture", 1);
    if (_0x22a8e1) {
      _0x3b1ba4.motionSource = "actor";
      _0x3b1ba4.motionFrame = _0x22a8e1.frame.index;
      _0x3b1ba4.actorMotionFrame = _0x22a8e1.frame;
      _0x3b1ba4.actorMotionClip = _0x22a8e1.clip;
      _0x3b1ba4.actorMotionMarker = _0x22a8e1.marker;
      _0x3b1ba4.actorMotionEvent = _0x22a8e1.event;
      _0x3b1ba4.actorMotionProgress = _0x22a8e1.progress;
      _0x3b1ba4.poseKey = "actor:" + _0x22a8e1.frame.index;
      _0x3b1ba4.mesh.geometry = _0x22a8e1.frame.geo;
      _0x3b1ba4.mat.map = _0x3b1ba4.actorMotionBundle.tex;
      _0x3b1ba4.mat.emissiveMap = _0x3b1ba4.actorMotionBundle.tex;
      _0x3b1ba4.mat.emissiveIntensity = 0;
    }
    return [];
  }
});