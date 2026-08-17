export const SPRITE_PRESENTER = Object.freeze({
  id: "sprite",
  matches: _0x105f33 => !!_0x105f33.spriteGeo,
  spawn: (_0x4863b6, _0x45cf19) => _0x4863b6.spawnStandard(_0x45cf19),
  syncPose: function (_0x56e0d8, _0x1adca3, _0x28b65d) {
    if (!_0x1adca3.sprite) {
      return;
    }
    const _0x2e92ad = _0x56e0d8.locomotionFrame(_0x1adca3, _0x28b65d);
    const _0x98d865 = (_0x28b65d.kind !== "hound" || !_0x1adca3.motionTex || !((_0x1adca3.motionGeos?.length || 0) >= 8) || _0x28b65d.kind !== "hound") && _0x56e0d8.actionPoseActive(_0x28b65d) && !!_0x1adca3.actionTex && !!_0x1adca3.actionGeo;
    let _0x4ad828 = "base";
    let _0x122e7f = _0x1adca3.baseGeo;
    let _0x2fd125 = _0x1adca3.baseTex;
    _0x1adca3.motionSource = "";
    _0x1adca3.actorMotionFrame = null;
    if (_0x98d865) {
      _0x4ad828 = "action";
      _0x122e7f = _0x1adca3.actionGeo;
      _0x2fd125 = _0x1adca3.actionTex;
    } else if (_0x2e92ad >= 0 && _0x1adca3.motionTex) {
      _0x4ad828 = "motion:" + _0x2e92ad;
      _0x122e7f = _0x1adca3.motionGeos[_0x2e92ad];
      _0x2fd125 = _0x1adca3.motionTex;
      _0x1adca3.motionSource = "locomotion";
    }
    _0x1adca3.actionActive = _0x98d865;
    _0x1adca3.motionFrame = _0x98d865 ? -1 : _0x2e92ad;
    if (_0x4ad828 !== _0x1adca3.poseKey) {
      _0x1adca3.poseKey = _0x4ad828;
      _0x1adca3.mesh.geometry = _0x122e7f;
      _0x1adca3.mat.map = _0x2fd125;
      _0x1adca3.mat.emissiveMap = _0x2fd125;
    }
  },
  ownsSilhouette: (_0x441c28, _0x21eaa0, _0x15b6f9) => _0x15b6f9.kind === "hound" && (_0x21eaa0.motionGeos?.length || 0) >= 8 && _0x441c28.currentMotionFrame(_0x21eaa0) >= 0,
  usesLegacyPose: () => true,
  syncMaterial: (_0xb806d, _0x5b5b33, _0x2f8491) => _0xb806d.syncPaintedMaterial(_0x5b5b33, _0x2f8491),
  syncTransform: (_0x37a5f4, _0xe8eb0, _0x520e27, _0x5974d6) => _0x37a5f4.syncPaintedTransform(_0xe8eb0, _0x520e27, _0x5974d6),
  prepareRemoval: () => []
});