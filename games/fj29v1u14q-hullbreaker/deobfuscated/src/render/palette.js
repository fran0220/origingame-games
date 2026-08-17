import { CONFIG as _0x36b75c } from "../config.js";
import { QUERY as _0x52dfee } from "../mode.js";
import { resolveShadeGain as _0x3e9370 } from "../pure/shade.js";
export function resolvePaletteId(_0x537ab2) {
  if (_0x537ab2 === "classic") {
    return "classic";
  } else {
    return "concept";
  }
}
export const CLASSIC = {
  bg: _0x36b75c.palette.bg,
  ground: _0x36b75c.palette.ground,
  groundAlt: _0x36b75c.palette.groundAlt,
  catwalk: _0x36b75c.palette.catwalk,
  solid: _0x36b75c.palette.groundAlt,
  player: _0x36b75c.palette.player,
  playerDark: 6251110,
  playerMid: 11843515,
  gun: _0x36b75c.palette.gun,
  wasp: _0x36b75c.palette.wasp,
  waspDive: 12185768,
  carrier: _0x36b75c.palette.carrier,
  hound: _0x36b75c.palette.hound,
  houndTell: _0x36b75c.palette.houndTell,
  houndCharge: _0x36b75c.palette.houndCharge,
  polyp: _0x36b75c.palette.polyp,
  polypTell: _0x36b75c.palette.polypTell,
  polypBeam: _0x36b75c.palette.polypBeam,
  polypVent: _0x36b75c.palette.polypVent,
  mortar: _0x36b75c.palette.mortar,
  mortarTell: _0x36b75c.palette.mortarTell,
  mortarPod: _0x36b75c.palette.mortarPod,
  mortarMark: _0x36b75c.palette.mortarMark,
  mortarBlast: _0x36b75c.palette.mortarBlast,
  warden: _0x36b75c.palette.warden,
  capsule: _0x36b75c.palette.capsule,
  modCapsule: _0x36b75c.palette.modCapsule,
  capsuleInk: "#14181e",
  muzzle: 16777215,
  glowOff: 0,
  hitFlash: 16777215,
  gildedGold: 16761950,
  ragePower: 16725599,
  shots: _0x36b75c.palette.shots,
  tints: _0x36b75c.palette.tints,
  rain: 10466502,
  vapor: 11451334,
  hemiSky: 13621475,
  hemiGround: 3817286,
  sun: 16777215,
  limbBg: _0x36b75c.limb.bg,
  limb: {
    hull: 6251886,
    wall: 6580851,
    rib: 8094090,
    machine: 8817813,
    shadow: 4936026,
    scute: 6975610,
    scuteAlt: 7633540,
    skyline: 5266023
  },
  transform: {
    hull: 4804439,
    wall: 5593956,
    ceiling: 6580851,
    rib: 8094090,
    machine: 8883606,
    skyline: 3357252,
    panel: 9080985
  },
  atmos: {},
  contactShadow: 1316636,
  shade: {
    gain: 0
  }
};
export const CONCEPT = {
  bg: 1323576,
  ground: 13140810,
  groundAlt: 11694913,
  catwalk: 14654544,
  solid: 9067576,
  player: 15328989,
  playerDark: 5656648,
  playerMid: 12828333,
  gun: _0x36b75c.palette.gun,
  wasp: 10281534,
  waspDive: 12447806,
  carrier: 6533422,
  hound: 8703024,
  houndTell: _0x36b75c.palette.houndTell,
  houndCharge: 4169236,
  polyp: 7781676,
  polypTell: _0x36b75c.palette.polypTell,
  polypBeam: 13959004,
  polypVent: _0x36b75c.palette.polypVent,
  mortar: 9224762,
  mortarTell: _0x36b75c.palette.mortarTell,
  mortarPod: 14876538,
  mortarMark: _0x36b75c.palette.mortarMark,
  mortarBlast: _0x36b75c.palette.mortarBlast,
  warden: 11956029,
  capsule: _0x36b75c.palette.capsule,
  modCapsule: _0x36b75c.palette.modCapsule,
  capsuleInk: "#14181e",
  muzzle: 16773848,
  glowOff: 0,
  hitFlash: 16777215,
  gildedGold: 16761950,
  ragePower: 16725599,
  shots: _0x36b75c.palette.shots,
  tints: _0x36b75c.palette.tints,
  rain: 11128776,
  vapor: 12771032,
  hemiSky: 13821666,
  hemiGround: 3556671,
  sun: 16773596,
  limbBg: 3102302,
  limb: {
    hull: 6833455,
    scute: 10184768,
    scuteAlt: 11433288,
    rib: 11566158,
    machine: 12355156,
    wall: 4482411,
    shadow: 3493967,
    skyline: 3101788
  },
  transform: {
    hull: 8148534,
    ceiling: 7031344,
    rib: 10842954,
    machine: 11697232,
    wall: 4418158,
    skyline: 2574415,
    panel: 11569752
  },
  atmos: {
    2304048: 1323576,
    2367014: 1848111,
    2964042: 2773596
  },
  contactShadow: 1840143,
  shade: {
    gain: 1
  }
};
CLASSIC.seamPip = 13156528;
CLASSIC.seamHalo = 11050120;
CONCEPT.seamPip = 11115394;
CONCEPT.seamHalo = 8945003;
CLASSIC.backdropNear = 7238784;
CLASSIC.backdropMid = 5791336;
CLASSIC.backdropFar = 4541267;
CONCEPT.backdropNear = 11040332;
CONCEPT.backdropMid = 6060664;
CONCEPT.backdropFar = 3101788;
export const PALETTE_ID = resolvePaletteId(_0x52dfee.get("palette"));
export const PAL = PALETTE_ID === "classic" ? CLASSIC : CONCEPT;
export const SHADE_STRENGTH = _0x3e9370(_0x52dfee.get("shade"), _0x36b75c.shade.dose);
export const SHADE_GAIN = SHADE_STRENGTH * PAL.shade.gain;
export function atmosphereBg(_0x3df416, _0x4543a9 = PAL) {
  const _0x176c0b = _0x4543a9.atmos[_0x3df416];
  if (_0x176c0b === undefined) {
    return _0x3df416;
  } else {
    return _0x176c0b;
  }
}
if (typeof document != "undefined" && document.body) {
  document.body.style.background = "#" + PAL.bg.toString(16).padStart(6, "0");
}