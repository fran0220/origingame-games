import * as _0x56ca1e from "three";
export const IMAGE_ASSETS = {
  grass: "assets/generated/tex-grass.png",
  dirt: "assets/generated/tex-dirt.png",
  iconArcher: "assets/generated/icon-archer.png",
  iconMage: "assets/generated/icon-mage.png",
  iconFrost: "assets/generated/icon-frost.png",
  iconGold: "assets/generated/icon-gold.png",
  iconHp: "assets/generated/icon-hp.png",
  iconWave: "assets/generated/icon-wave.png",
  uiPanelFrame: "assets/generated/ui-panel-frame.png",
  uiWinBadge: "assets/generated/ui-win-badge.png",
  uiLoseBadge: "assets/generated/ui-lose-badge.png"
};
const a = new _0x56ca1e.TextureLoader();
export function loadTexture(_0x5f1246) {
  return new Promise((_0x4c1660, _0x189a61) => {
    a.load(_0x5f1246, _0x1dc15e => {
      _0x1dc15e.colorSpace = _0x56ca1e.SRGBColorSpace;
      _0x1dc15e.wrapS = _0x56ca1e.RepeatWrapping;
      _0x1dc15e.wrapT = _0x56ca1e.RepeatWrapping;
      _0x1dc15e.anisotropy = 4;
      _0x1dc15e.name = _0x5f1246.split("/").pop() || "tex";
      _0x4c1660(_0x1dc15e);
    }, undefined, _0x51d32d => _0x189a61(_0x51d32d));
  });
}
export async function loadBoardTextures() {
  const [_0x564dd3, _0x141e66] = await Promise.all([loadTexture(IMAGE_ASSETS.grass), loadTexture(IMAGE_ASSETS.dirt)]);
  _0x564dd3.repeat.set(1.15, 1.15);
  _0x141e66.repeat.set(1.1, 1.1);
  _0x564dd3.name = "TexGrass";
  _0x141e66.name = "TexDirt";
  return {
    grass: _0x564dd3,
    dirt: _0x141e66
  };
}
export function preloadUiIcons() {
  const _0x3809d1 = [IMAGE_ASSETS.iconArcher, IMAGE_ASSETS.iconMage, IMAGE_ASSETS.iconFrost, IMAGE_ASSETS.iconGold, IMAGE_ASSETS.iconHp, IMAGE_ASSETS.iconWave, IMAGE_ASSETS.uiPanelFrame, IMAGE_ASSETS.uiWinBadge, IMAGE_ASSETS.uiLoseBadge];
  for (const _0x3351d3 of _0x3809d1) {
    const _0x50cb47 = new Image();
    _0x50cb47.decoding = "async";
    _0x50cb47.src = _0x3351d3;
  }
}