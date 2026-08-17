import { CONFIG as _0x3db308 } from "../config.js";
import { level1EcologyEncounterDelay as _0x2f36c0, level1EcologyEncounterRow as _0x1fadec } from "../pure/level1-ecology-encounters.js";
import { BEND_S as _0x13b63d, CORNER_S as _0xadc106 } from "../pure/path.js";
import { cornerApproachReady as _0x1d023a, cornerJointRule as _0x570f47, gateAttackReadyDelay as _0x5ee767, waveSize as _0x3e2b17, waveKind as _0x208e78, waveLane as _0x295369, wavePhase as _0x1c97cb, waveSpawnDelay as _0x403755, zipperOffset as _0x13ae89 } from "../pure/waves.js";
import { ACTIVE_FIXTURE as _0x3431bb } from "../mode.js";
import { view as _0x51efbf } from "./bridge.js";
import { gameMs as _0x188d55, scrollX as _0x268765 } from "./time.js";
import { sLeftEdge as _0x5100bc, sRightEdge as _0x598e5f } from "./edges.js";
import { slamSets as _0x14f9aa, farSets as _0x15c330, columnHasGround as _0x51ef8f, columnBuilt as _0x2bddcd, settleColumn as _0x13e8c3, groundTopAt as _0x24c7a9, levelData as _0x3d6bd3, spawnLaneY as _0x4eb69b } from "./level.js";
import { hostiles as _0x13a5e7, removeHostile as _0x50576c, spawnHostile as _0x429b4b } from "./hostiles.js";
export const cornerEvents = _0xadc106.map((_0x39a00d, _0x3c27ed) => ({
  s: _0x39a00d,
  k: _0x3c27ed + 1,
  phase: _0x1c97cb(_0x3c27ed + 1, _0x3db308),
  state: "idle",
  tStart: 0,
  sealed: false,
  primed: false,
  primedAtS: null,
  encounterKey: "gate:" + (_0x3c27ed + 1)
}));
export function activeCorner() {
  if (_0x3431bb) {
    return null;
  }
  for (const _0x367763 of cornerEvents) {
    if (_0x367763.state !== "done") {
      return _0x367763;
    }
  }
  return null;
}
export function gateActive() {
  const _0x1d4c6d = activeCorner();
  return !!_0x1d4c6d && _0x1d4c6d.state === "gate";
}
export function cornerBusy() {
  const _0x5b521e = activeCorner();
  return !!_0x5b521e && (_0x5b521e.state === "gate" || _0x5b521e.state === "approach" || _0x5b521e.state === "turning");
}
export function cornerPlayerRouteWindow(_0x271f3b) {
  if (_0x3431bb) {
    return {
      frontierRight: Infinity,
      sealLeft: -Infinity
    };
  }
  const _0x4029f3 = activeCorner();
  let _0x39d684 = Infinity;
  if (_0x4029f3) {
    _0x39d684 = _0x570f47(_0x4029f3.state, _0x4029f3.s, _0x13b63d[_0x4029f3.k - 1], _0x271f3b, _0x3db308.edges.margin).frontierRight;
  }
  let _0x254a5d = -Infinity;
  for (const _0x52eb68 of cornerEvents) {
    if (!_0x52eb68.sealed) {
      continue;
    }
    const _0xea1cdf = _0x570f47(_0x52eb68.state, _0x52eb68.s, _0x13b63d[_0x52eb68.k - 1], _0x271f3b, _0x3db308.edges.margin);
    _0x254a5d = Math.max(_0x254a5d, _0xea1cdf.sealLeft);
  }
  return {
    frontierRight: _0x39d684,
    sealLeft: _0x254a5d
  };
}
export function advanceCornerApproach(_0x351413) {
  const _0x9cedce = activeCorner();
  return !!_0x9cedce && !!_0x1d023a(_0x9cedce.state, _0x351413, _0x13b63d[_0x9cedce.k - 1]) && (_0x9cedce.state = "turning", _0x9cedce.tStart = _0x188d55, _0x9cedce.sealed = true, true);
}
export function turningCornerOwnsJoint(_0x5b54cf) {
  const _0x1e0c22 = activeCorner();
  return !!_0x1e0c22 && _0x1e0c22.state === "turning" && Math.abs(_0x5b54cf - _0x13b63d[_0x1e0c22.k - 1]) <= 0.00001;
}
function H(_0x541a37) {
  return _0x13a5e7.filter(_0x2361df => _0x2361df.encounterKey === _0x541a37.encounterKey && !_0x2361df.gateBreakExit);
}
function A(_0x2fcda8) {
  return H(_0x2fcda8).some(_0x560a3e => _0x188d55 >= _0x560a3e.enterUntil - _0x3db308.wasp.enterMs);
}
function P(_0x16d8ca) {
  if (A(_0x16d8ca)) {
    return;
  }
  const _0x46b7fe = H(_0x16d8ca).filter(_0x442460 => _0x188d55 < _0x442460.enterUntil - _0x3db308.wasp.enterMs);
  if (!_0x46b7fe.length) {
    return;
  }
  const _0x453cf7 = Math.min(..._0x46b7fe.map(_0x1278f5 => _0x1278f5.enterUntil));
  const _0x1f1cbb = Math.max(0, _0x453cf7 - (_0x188d55 + _0x3db308.wasp.enterMs));
  if (_0x1f1cbb > 0) {
    for (const _0x103a38 of H(_0x16d8ca)) {
      if (_0x188d55 < _0x103a38.enterUntil - _0x3db308.wasp.enterMs) {
        _0x103a38.enterUntil -= _0x1f1cbb;
      }
    }
  }
}
export function primeGateWave(_0x4f404a) {
  return !!_0x4f404a && _0x4f404a.state === "idle" && !_0x4f404a.primed && (_0x4f404a.primed = true, _0x4f404a.primedAtS = _0x268765, function (_0x529daf, _0x37fff2 = "gate:" + _0x529daf) {
    const _0x530510 = _0x3db308.waves;
    const _0x210160 = _0x3e2b17(_0x529daf, _0x3db308);
    const _0x20f2d4 = _0xadc106[_0x529daf - 1];
    const _0x1feac1 = _0x20f2d4 - _0x530510.haltOffset - _0x268765;
    const _0x141ee2 = Math.min(_0x598e5f() + _0x1feac1 - 2, _0x20f2d4 - 2);
    const _0x4e3564 = Math.min(_0x5100bc() + _0x1feac1 + 6, _0x141ee2 - 4);
    const _0x4fb11c = Math.max(_0x141ee2 - _0x4e3564, 4);
    for (let _0x111ed6 = 0; _0x111ed6 < _0x210160; _0x111ed6++) {
      const _0x501a80 = _0x141ee2 - (_0x210160 === 1 ? 0 : _0x111ed6 / (_0x210160 - 1)) * _0x4fb11c;
      const _0xa4e23 = _0x295369(_0x529daf, _0x111ed6, _0x3db308);
      const _0x498f44 = _0x1fadec(_0x529daf, _0x111ed6);
      $(_0x498f44?.kind || _0x208e78(_0x529daf, _0x111ed6, _0x3db308), _0x529daf, _0x111ed6, _0x501a80, _0xa4e23, _0x498f44 ? _0x2f36c0(_0x498f44) : _0x403755(_0x529daf, _0x111ed6, _0x3db308), _0x20f2d4, _0x37fff2, _0x498f44);
    }
  }(_0x4f404a.k, _0x4f404a.encounterKey), true);
}
export function armGate(_0x43a52c) {
  if (!_0x43a52c || _0x43a52c.state !== "idle") {
    return;
  }
  if (!_0x43a52c.primed) {
    primeGateWave(_0x43a52c);
  }
  for (let _0x223964 = _0x13a5e7.length - 1; _0x223964 >= 0; _0x223964--) {
    if (_0x13a5e7[_0x223964].encounterKey !== _0x43a52c.encounterKey) {
      _0x50576c(_0x223964, false);
    }
  }
  const _0x2f99c7 = H(_0x43a52c).some(_0x52c919 => _0x52c919.gating);
  P(_0x43a52c);
  if (_0x2f99c7 && A(_0x43a52c)) {
    _0x43a52c.state = "gate";
  } else {
    (function (_0x371686) {
      for (const _0x303a28 of H(_0x371686)) {
        _0x303a28.gateBreakExit = true;
      }
    })(_0x43a52c);
    _0x43a52c.state = "approach";
    _0x43a52c.tStart = 0;
  }
}
function U(_0x3d334a, _0x513957, _0x1c3f8b = _0x513957?.stageRole) {
  if (!_0x513957 || !_0x1c3f8b) {
    return null;
  }
  const _0x5c9ec8 = (_0x3d6bd3.assaults || []).find(_0x48b280 => _0x48b280.face === _0x3d334a);
  const _0x55e855 = _0x5c9ec8?.staging?.find(_0x4265c8 => _0x4265c8.role === _0x1c3f8b);
  const _0x1a9919 = _0x55e855 && _0x5c9ec8.platforms.find(_0x4d2437 => _0x4d2437.id === _0x55e855.platformId);
  if (_0x55e855 && _0x1a9919) {
    return {
      ..._0x55e855,
      platform: _0x1a9919
    };
  } else {
    return null;
  }
}
function W(_0x4e5a80, _0x435e04, _0x22d493, _0x3b1c4f, _0x110088, _0x80eea1, _0x5c702b) {
  if (!_0x3b1c4f) {
    if (_0x110088) {
      return _0x110088.x1 - 0.75;
    } else {
      return _0x80eea1;
    }
  }
  const _0x29217e = [];
  for (let _0x31b19e = 0; _0x31b19e < _0x3e2b17(_0x435e04, _0x3db308); _0x31b19e++) {
    const _0x3c6586 = _0x1fadec(_0x435e04, _0x31b19e);
    if (_0x3c6586?.kind === _0x4e5a80 && _0x3c6586.stageRole === _0x3b1c4f.role) {
      _0x29217e.push(_0x31b19e);
    }
  }
  const _0x35d402 = _0x29217e.indexOf(_0x22d493);
  const _0x2c4e71 = Math.max(1.5, _0x5c702b * 2 + 0.32);
  const _0x1439d = _0x35d402 >= 0 && _0x29217e.length > 1 ? (_0x35d402 - (_0x29217e.length - 1) / 2) * _0x2c4e71 : 0;
  const _0x1f359b = _0x5c702b + 0.28;
  return Math.max(_0x110088.x0 + _0x1f359b, Math.min(_0x110088.x1 - _0x1f359b, _0x3b1c4f.x + _0x1439d));
}
function $(_0x430325, _0xa0f965, _0x51a667, _0x85be4b, _0x336bcd, _0x2ea25f, _0x10ad46, _0x29a784, _0x146b37 = null) {
  const _0x30eeda = U(_0xa0f965, _0x146b37);
  const _0x41b966 = {
    id: _0x146b37?.id || "gate-" + _0xa0f965 + "-" + _0x51a667 + "-" + _0x430325,
    gateWave: _0xa0f965,
    encounterKey: _0x29a784,
    cohortKey: _0x29a784,
    cohortSlot: _0x51a667,
    cohortPhase: 0,
    attackReadyDelayMs: _0x5ee767(_0x51a667),
    ...(_0x146b37 ? {
      ecologyId: _0x146b37.ecologyId,
      ecologyBeat: _0x146b37.beat,
      ecologyBeatSlot: _0x146b37.beatSlot,
      ecologyStageRole: _0x146b37.stageRole,
      ecologyMode: _0x146b37.mode,
      ecologyStageResolved: !!_0x30eeda,
      ecologyPlacementFallback: !_0x30eeda
    } : {})
  };
  if (_0x430325 === "wasp") {
    const _0x3fa78d = _0x30eeda ? _0x30eeda.x : _0x85be4b;
    const _0x29bc92 = _0x30eeda ? _0x30eeda.y + Math.max(1.8, Math.min(3.2, _0x336bcd * 0.5)) : _0x4eb69b(_0x85be4b, _0x336bcd);
    _0x429b4b(_0x3fa78d, _0x29bc92, _0x2ea25f, "wasp", _0x41b966);
    return;
  }
  if (_0x430325 === "hound") {
    const _0x4caf6f = function (_0x3f1a4a, _0x3c6797) {
      if (!_0x3c6797) {
        return null;
      }
      const _0x11fea6 = _0xadc106[_0x3f1a4a - 1];
      const _0x141371 = Math.max(0, Math.floor(_0x3c6797.platform.x0) - 5);
      const _0x26c224 = Math.min(_0x3d6bd3.groundH.length - 3, Math.ceil(_0x3c6797.platform.x1) + 5, Math.floor(_0x11fea6 - 2));
      let _0x59807c = null;
      for (let _0x49a9c1 = _0x141371; _0x49a9c1 <= _0x26c224; _0x49a9c1++) {
        const _0x4bf2f3 = _0x3d6bd3.groundH[_0x49a9c1];
        if (!(_0x4bf2f3 > -100) || _0x3d6bd3.groundH[_0x49a9c1 + 1] !== _0x4bf2f3 || _0x3d6bd3.groundH[_0x49a9c1 + 2] !== _0x4bf2f3) {
          continue;
        }
        const _0x2fac78 = _0x49a9c1 + 1.5;
        const _0x2ba078 = Math.abs(_0x2fac78 - _0x3c6797.x);
        if (!_0x59807c || _0x2ba078 < _0x59807c.score) {
          _0x59807c = {
            x: _0x2fac78,
            deck: _0x4bf2f3,
            score: _0x2ba078,
            patrol: {
              x0: _0x49a9c1 + 0.2,
              x1: _0x49a9c1 + 2.8
            }
          };
        }
      }
      return _0x59807c;
    }(_0xa0f965, _0x30eeda);
    const _0x4a71ea = _0x4caf6f ? _0x4caf6f.x : _0x10ad46 - 4.65;
    const _0xb2bf18 = _0x4caf6f ? _0x4caf6f.deck : _0x24c7a9(_0x4a71ea);
    const _0x30d8de = {
      ..._0x41b966,
      kind: _0x430325,
      deck: _0xb2bf18,
      dir: 1,
      gating: false,
      tune: _0xa0f965 <= 3 ? {
        hp: 4
      } : undefined,
      patrol: _0x4caf6f?.patrol || {
        x0: _0x10ad46 - 4.9,
        x1: _0x10ad46 - 1.8
      },
      ecologyPlacementFallback: !!_0x146b37 && (!_0x30eeda || !_0x4caf6f)
    };
    _0x429b4b(_0x4a71ea, _0xb2bf18 + _0x3db308.hound.rideY, _0x2ea25f, _0x430325, _0x30d8de);
    return;
  }
  const _0x47dd51 = function (_0x11e266) {
    const _0x4d6bd0 = (_0x3d6bd3.assaults || []).find(_0x1d8106 => _0x1d8106.face === _0x11e266);
    if (_0x4d6bd0) {
      return _0x4d6bd0.platforms.filter(_0x36a76f => _0x36a76f.dropRejoin || typeof _0x36a76f.role == "string" && _0x36a76f.role.startsWith("arena-"));
    }
    const _0x953d91 = (_0x3d6bd3.arenas || []).find(_0x363de2 => _0x363de2.face === _0x11e266);
    if (_0x953d91) {
      return _0x953d91.platforms;
    } else {
      return [];
    }
  }(_0xa0f965);
  const _0x3786ec = _0x47dd51.reduce((_0x43b479, _0x351358) => !_0x43b479 || _0x351358.y < _0x43b479.y || _0x351358.y === _0x43b479.y && _0x351358.x1 > _0x43b479.x1 ? _0x351358 : _0x43b479, null);
  const _0x3c44df = _0x47dd51.reduce((_0x396a48, _0x18de9) => !_0x396a48 || _0x18de9.y > _0x396a48.y ? _0x18de9 : _0x396a48, null);
  if (_0x430325 === "polyp") {
    const _0x5ea43a = _0x30eeda?.platform || _0x3786ec;
    const _0x11161a = _0x5ea43a ? _0x5ea43a.y : _0x24c7a9(_0x10ad46 - 2.2);
    const _0x5ad1f4 = W(_0x430325, _0xa0f965, _0x51a667, _0x30eeda, _0x5ea43a, _0x10ad46 - 2.2, _0x3db308.polyp.hitRadius);
    const _0x2ef6ce = {
      ..._0x41b966,
      kind: _0x430325,
      deck: _0x11161a,
      dir: _0x30eeda ? -1 : Math.sign(_0x85be4b - _0x5ad1f4) || -1,
      gating: _0xa0f965 === 3,
      autoCycle: true
    };
    _0x429b4b(_0x5ad1f4, _0x11161a + _0x3db308.polyp.rootY, _0x2ea25f, _0x430325, _0x2ef6ce);
    return;
  }
  if (_0x430325 === "mortar") {
    const _0x1e3671 = _0x30eeda?.platform || _0x3c44df || _0x3786ec;
    const _0x714b9b = _0x1e3671 ? _0x1e3671.y : _0x24c7a9(_0x10ad46 - 3.5);
    const _0x4ae36d = W(_0x430325, _0xa0f965, _0x51a667, _0x30eeda, _0x1e3671, _0x10ad46 - 3.5, _0x3db308.mortar.hitRadius);
    let _0x2af0e0 = _0x10ad46 - 4.65;
    let _0x437454 = _0x24c7a9(_0x2af0e0);
    const _0x41ebae = U(_0xa0f965, _0x146b37, _0x146b37?.targetStageRole);
    const _0x103fa6 = _0x41ebae?.platform || _0x3786ec;
    if (_0x103fa6) {
      const _0x535ed2 = _0x3db308.mortar.blastHalf + 0.5;
      _0x2af0e0 = _0x41ebae ? _0x41ebae.x : Math.max(_0x103fa6.x0 + _0x535ed2, Math.min(_0x103fa6.x1 - _0x535ed2, _0x4ae36d - 5));
      _0x437454 = _0x103fa6.y;
    }
    const _0x3c17a = {
      ..._0x41b966,
      kind: _0x430325,
      deck: _0x714b9b,
      dir: -1,
      gating: false,
      zone: {
        x: _0x2af0e0,
        y: _0x437454
      },
      ecologyPlacementFallback: !!_0x146b37 && (!_0x30eeda || !!_0x146b37.targetStageRole && !_0x41ebae)
    };
    _0x429b4b(_0x4ae36d, _0x714b9b + _0x3db308.mortar.bodyY, _0x2ea25f, _0x430325, _0x3c17a);
    return;
  }
  _0x429b4b(_0x85be4b, _0x4eb69b(_0x85be4b, _0x336bcd), _0x2ea25f, "wasp", _0x41b966);
}
export function onHostileRemoved() {
  const _0x504e9a = activeCorner();
  if (_0x504e9a && _0x504e9a.state === "gate") {
    P(_0x504e9a);
  }
  if (_0x504e9a && _0x504e9a.state === "gate" && !H(_0x504e9a).some(_0x81a52b => _0x81a52b.gating)) {
    for (const _0x5206b5 of H(_0x504e9a)) {
      _0x5206b5.gateBreakExit = true;
    }
    _0x504e9a.state = "approach";
    _0x504e9a.tStart = 0;
  }
}
export function finishCorner(_0x4f0879) {
  updateZipper(_0x4f0879, 1000000000);
  (function (_0x447f61) {
    for (const _0x41c76e of _0x15c330[_0x447f61.k - 1]) {
      if (_0x51ef8f(_0x41c76e) && !_0x2bddcd(_0x41c76e)) {
        _0x13e8c3(_0x41c76e);
      }
    }
    _0x51efbf.level.faceRevealed(_0x447f61);
  })(_0x4f0879);
  _0x4f0879.state = "done";
  _0x51efbf.corner.finished(_0x4f0879);
}
export function updateZipper(_0x792058, _0xebec7d) {
  const _0x2ee853 = _0x14f9aa[_0x792058.k - 1];
  for (let _0x149d9d = 0; _0x149d9d < _0x2ee853.length; _0x149d9d++) {
    const _0x1e9fb8 = _0x2ee853[_0x149d9d];
    if (!_0x51ef8f(_0x1e9fb8) || _0x2bddcd(_0x1e9fb8)) {
      continue;
    }
    const _0x14a95d = _0x13ae89(_0xebec7d, _0x149d9d, _0x3db308);
    if (_0x14a95d.phase !== "hidden") {
      _0x51efbf.level.zipperColumn(_0x1e9fb8, _0x14a95d.dy, _0x14a95d.phase === "locked");
      if (_0x14a95d.phase === "locked") {
        _0x13e8c3(_0x1e9fb8);
      }
    }
  }
}
export function resetCornerEvents() {
  for (const _0x3aafa5 of cornerEvents) {
    _0x3aafa5.state = "idle";
    _0x3aafa5.tStart = 0;
    _0x3aafa5.sealed = false;
    _0x3aafa5.primed = false;
    _0x3aafa5.primedAtS = null;
  }
}