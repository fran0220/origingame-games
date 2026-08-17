export { createShellUi } from "./shell.js";
import { createChargeHud as _0x1415e4 } from "./hud.js";
import { createHazardsFx as _0x44ba2c } from "./hazardsFx.js";
import { createStormAudio as _0x1f7c60 } from "./audio.js";
import { createRescueFx as _0x3d7c78 } from "./rescueFx.js";
import { createRescueHud as _0x54e42f } from "./rescueHud.js";
import { createFinalePresentation as _0x3112d0 } from "./finale.js";
import { RESCUE_RULES as _0xa621f9 } from "../shared/contracts.js";
export { _0x1415e4 as createChargeHud, _0x44ba2c as createHazardsFx, _0x1f7c60 as createStormAudio, _0x3d7c78 as createRescueFx, _0x54e42f as createRescueHud, _0x3112d0 as createFinalePresentation };
export async function createPresentation(_0x4cce25, _0x5e96d2 = {}) {
  const {
    events: _0x409e17,
    shellUi: _0x4e930f,
    warden: _0x3b0340,
    beats: _0x3eb978,
    spirits: _0x252889,
    anchors: _0x1a0a88,
    beaconSockets: _0x44c467,
    stormFields: _0x43812f,
    getStabilizeTarget: _0x243c74,
    getBeaconTarget: _0x36775b,
    getCharges: _0x4a4050,
    getFreedCount: _0xe453bb,
    getCarriedId: _0x5ed1d0,
    getCarryId: _0x33c372,
    getSpireFreedCount: _0x424059,
    getSegmentHint: _0x1b6ecd,
    getSpireZ: _0x365974,
    requiredFreedTotal: _0x431b79,
    spiritsTotal: _0x3ad4ee
  } = _0x5e96d2;
  if (!_0x4cce25) {
    throw new Error("createPresentation requires game");
  }
  if (!_0x409e17) {
    throw new Error("createPresentation requires events bus");
  }
  if (!_0x4e930f) {
    throw new Error("createPresentation requires shellUi");
  }
  const _0x2b3918 = Boolean(_0x5e96d2.reducedMotion ?? _0x4e930f.reducedMotion);
  const _0x310138 = _0x431b79 ?? _0x3ad4ee ?? _0xa621f9.spiritsTotal;
  const _0x3ccc07 = _0x1415e4(_0x4cce25, {
    events: _0x409e17,
    shellUi: _0x4e930f,
    getStabilizeTarget: _0x243c74,
    getCharges: _0x4a4050
  });
  const _0x20b7af = _0x54e42f(_0x4cce25, {
    events: _0x409e17,
    shellUi: _0x4e930f,
    getBeaconTarget: _0x36775b,
    getFreedCount: _0xe453bb,
    getCarryId: _0x33c372 ?? _0x5ed1d0,
    getCarriedId: _0x5ed1d0 ?? _0x33c372,
    getSpireFreedCount: _0x424059,
    requiredFreedTotal: _0x310138,
    reducedMotion: _0x2b3918
  });
  const _0x30606e = _0x44ba2c(_0x4cce25, {
    events: _0x409e17,
    reducedMotion: _0x2b3918,
    collapses: _0x3eb978?.collapses ?? [],
    shears: _0x3eb978?.shears ?? []
  });
  const _0x81ed41 = _0x3d7c78(_0x4cce25, {
    events: _0x409e17,
    reducedMotion: _0x2b3918,
    warden: _0x3b0340,
    spirits: _0x252889 ?? [],
    anchors: _0x1a0a88 ?? [],
    beaconSockets: _0x44c467 ?? [],
    stormFields: _0x43812f ?? [],
    gates: _0x3eb978?.gates ?? []
  });
  const _0x2316da = _0x3112d0(_0x4cce25, {
    events: _0x409e17,
    shellUi: _0x4e930f,
    reducedMotion: _0x2b3918,
    getSegmentHint: _0x1b6ecd,
    getSpireZ: _0x365974,
    anchors: _0x1a0a88 ?? [],
    warden: _0x3b0340
  });
  const _0x46dc96 = await _0x1f7c60(_0x4cce25, {
    events: _0x409e17,
    warden: _0x3b0340,
    reducedMotion: _0x2b3918,
    getSegmentHint: _0x1b6ecd,
    getFreedCount: _0xe453bb
  });
  const _0x14ddde = () => {
    try {
      _0x3ccc07.dispose?.();
    } catch {}
    try {
      _0x20b7af.dispose?.();
    } catch {}
    try {
      _0x30606e.dispose?.();
    } catch {}
    try {
      _0x81ed41.dispose?.();
    } catch {}
    try {
      _0x2316da.dispose?.();
    } catch {}
    try {
      _0x46dc96.dispose?.();
    } catch {}
  };
  _0x4cce25.own?.(_0x14ddde);
  return {
    hud: _0x3ccc07,
    rescueHud: _0x20b7af,
    fx: _0x30606e,
    rescueFx: _0x81ed41,
    finale: _0x2316da,
    audio: _0x46dc96,
    dispose: _0x14ddde
  };
}