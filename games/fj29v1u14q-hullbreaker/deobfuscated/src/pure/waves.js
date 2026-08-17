export const GATE_PRELUDE_TILES = 18;
export const GATE_ATTACK_READY_MS = Object.freeze([0, 180, 420]);
export function gatePreludeS(_0x4de52c) {
  return _0x4de52c - 18;
}
export function gatePreludeReady(_0x66d3c3, _0x110e64, _0x2d62d8, _0x322d46) {
  return _0x66d3c3 === "idle" && !_0x110e64 && _0x2d62d8 >= gatePreludeS(_0x322d46) - 0.000001;
}
export function gateAttackReadyDelay(_0x3a43cb) {
  const _0x54d581 = Math.max(0, _0x3a43cb | 0) % GATE_ATTACK_READY_MS.length;
  return GATE_ATTACK_READY_MS[_0x54d581];
}
export function activeGateThreatCount(_0xb8374e, _0x57c4dd, _0x3b0631, _0x500871) {
  if (!Array.isArray(_0xb8374e) || !_0x57c4dd || !Number.isFinite(_0x3b0631) || !Number.isFinite(_0x500871) || _0x500871 < 0) {
    return 0;
  }
  let _0x387f12 = 0;
  for (const _0x48fbfa of _0xb8374e) {
    if (_0x48fbfa && _0x48fbfa.encounterKey === _0x57c4dd && !_0x48fbfa.gateBreakExit && Number.isFinite(_0x48fbfa.enterUntil) && _0x3b0631 >= _0x48fbfa.enterUntil - _0x500871) {
      _0x387f12++;
    }
  }
  return _0x387f12;
}
export function waveSize(_0x25288d, _0x5cc2d0) {
  return _0x5cc2d0.waves.baseSize + _0x5cc2d0.waves.sizePerWave * _0x25288d;
}
export function waveLane(_0x3a120b, _0x5267a1, _0xc1d9b7) {
  const _0xe92ae9 = _0xc1d9b7.waves.comp[_0x3a120b - 1];
  return _0xc1d9b7.waves.laneHeights[_0xe92ae9[_0x5267a1 % _0xe92ae9.length]];
}
export function waveKind(_0x5b4953, _0x163f33, _0x31b028) {
  const _0x13aebf = _0x31b028.waves.roster && _0x31b028.waves.roster[_0x5b4953 - 1];
  if (_0x13aebf && _0x13aebf.length) {
    return _0x13aebf[_0x163f33 % _0x13aebf.length];
  } else {
    return "wasp";
  }
}
export function waveSpawnDelay(_0x3d1caa, _0x1ebffe, _0x545a7e) {
  const _0x38dae9 = _0x545a7e.waves.spawnDelaysMs && _0x545a7e.waves.spawnDelaysMs[_0x3d1caa - 1];
  if (_0x38dae9 && _0x38dae9[_0x1ebffe] !== undefined) {
    return _0x38dae9[_0x1ebffe];
  } else {
    return _0x1ebffe * _0x545a7e.waves.staggerMs;
  }
}
export function wavePhase(_0x36aa29, _0x28cdd6) {
  return _0x28cdd6.waves.phases && _0x28cdd6.waves.phases[_0x36aa29 - 1] || "WAVE " + _0x36aa29;
}
export function easeOutBack(_0x22acd1, _0x12f803) {
  const _0x3326c3 = _0x22acd1 - 1;
  return 1 + (_0x12f803 + 1) * _0x3326c3 * _0x3326c3 * _0x3326c3 + _0x12f803 * _0x3326c3 * _0x3326c3;
}
export function cornerTimeline(_0x361e81) {
  const _0x14bb76 = _0x361e81.waves;
  const _0x35d2b8 = _0x14bb76.windUpMs;
  const _0x2d62db = _0x35d2b8 + _0x14bb76.snap1Ms;
  const _0x585c6e = _0x2d62db + _0x14bb76.holdMs;
  const _0x13765c = _0x585c6e + _0x14bb76.snap2Ms;
  const _0x29eef4 = _0x13765c + _0x14bb76.settleMs;
  return {
    t1: _0x35d2b8,
    t2: _0x2d62db,
    t3: _0x585c6e,
    t4: _0x13765c,
    t5: _0x29eef4,
    t6: _0x29eef4 + _0x14bb76.resumeMs
  };
}
export function cornerEventTotalMs(_0x1ae99b) {
  return cornerTimeline(_0x1ae99b).t6;
}
export function cornerYawDeltaDeg(_0xf882f6, _0x2bf529) {
  const _0x480035 = _0x2bf529.waves;
  const _0x1d36d9 = cornerTimeline(_0x2bf529);
  const _0x139591 = _0x2bf529.path.turnDeg;
  if (_0xf882f6 <= 0) {
    return 0;
  }
  if (_0xf882f6 < _0x1d36d9.t1) {
    const _0x1a3891 = _0xf882f6 / _0x480035.windUpMs;
    return _0x480035.windUpDeg * _0x1a3891 * _0x1a3891;
  }
  if (_0xf882f6 < _0x1d36d9.t2) {
    const _0x5d5641 = (_0xf882f6 - _0x1d36d9.t1) / _0x480035.snap1Ms;
    return _0x480035.windUpDeg + (_0x139591 - _0x480035.windUpDeg) * easeOutBack(_0x5d5641, _0x480035.backS);
  }
  if (_0xf882f6 < _0x1d36d9.t3) {
    return _0x139591;
  }
  if (_0xf882f6 < _0x1d36d9.t4) {
    return _0x139591 + _0x139591 * easeOutBack((_0xf882f6 - _0x1d36d9.t3) / _0x480035.snap2Ms, _0x480035.backS);
  }
  return _0x139591 * 2;
}
export function cornerScrollVel(_0x3b74a5, _0x207102) {
  const _0x548a6d = cornerTimeline(_0x207102);
  if (_0x3b74a5 < _0x548a6d.t5) {
    return 0;
  }
  const _0x3891df = Math.min(1, (_0x3b74a5 - _0x548a6d.t5) / _0x207102.waves.resumeMs);
  return _0x207102.scrollSpeed * _0x3891df * _0x3891df;
}
export function cornerJointRule(_0x1013c8, _0x45e25, _0x591d42, _0x10d2c0, _0x2a3876) {
  return {
    turnReadyX: _0x1013c8 === "approach" ? _0x591d42 : Infinity,
    frontierRight: _0x1013c8 === "approach" || _0x1013c8 === "turning" ? _0x591d42 + _0x10d2c0 : _0x45e25 + 1 - _0x2a3876,
    sealLeft: _0x1013c8 === "turning" || _0x1013c8 === "done" ? _0x591d42 - _0x10d2c0 : -Infinity,
    jointOwned: _0x1013c8 === "turning"
  };
}
export function cornerApproachReady(_0x583a7d, _0x53221c, _0x5d1adf) {
  return _0x583a7d === "approach" && _0x53221c >= _0x5d1adf - 0.000001;
}
export function cornerApproachScrollTarget(_0x1456fd, _0xf9fe12, _0x5c900e, _0x1cdaec, _0x4c84fd, _0x3b3bb9) {
  if (_0x1456fd !== "approach") {
    return _0xf9fe12;
  }
  const _0x3be2bf = _0x5c900e + _0x3b3bb9 + _0x4c84fd - _0x1cdaec;
  return Math.max(_0xf9fe12, _0x3be2bf);
}
export function zipperOffset(_0x1fd376, _0x3f69db, _0x4d4209) {
  const _0x5d1d8a = _0x4d4209.waves;
  const _0x4f277f = _0x1fd376 - (_0x5d1d8a.zipStartMs + _0x3f69db * _0x5d1d8a.zipPerColMs);
  if (_0x4f277f < 0) {
    return {
      phase: "hidden",
      dy: 0
    };
  }
  if (_0x4f277f < _0x5d1d8a.zipDropMs) {
    const _0xc6b9ff = _0x4f277f / _0x5d1d8a.zipDropMs;
    return {
      phase: "drop",
      dy: _0x5d1d8a.zipDropTiles * (1 - _0xc6b9ff * _0xc6b9ff)
    };
  }
  if (_0x4f277f < _0x5d1d8a.zipDropMs + _0x5d1d8a.zipDipMs) {
    return {
      phase: "dip",
      dy: -_0x5d1d8a.zipDipTiles
    };
  } else {
    return {
      phase: "locked",
      dy: 0
    };
  }
}