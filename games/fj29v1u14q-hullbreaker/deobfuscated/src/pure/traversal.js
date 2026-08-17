import { CONFIG as _0x220a8e } from "../config.js";
export function traversalLedgeProbe(_0x4141d7, _0x199685, _0x52488a = _0x220a8e.player) {
  if (_0x4141d7.grounded || _0x4141d7.vy >= 0 || _0x4141d7.down || _0x4141d7.now < _0x4141d7.recatchUntil) {
    return null;
  }
  const _0x5e524a = Math.sign(_0x4141d7.hInput || _0x4141d7.vx);
  if (!_0x5e524a) {
    return null;
  }
  const _0x5a97bb = _0x5e524a;
  const _0x58ad8f = Math.floor(_0x4141d7.x + _0x5a97bb * (_0x4141d7.hw + _0x52488a.ledgeReachX));
  if (_0x58ad8f < _0x199685.minCellX || _0x58ad8f >= _0x199685.maxCellX) {
    return null;
  }
  const _0x3d7954 = _0x5a97bb > 0 ? _0x58ad8f : _0x58ad8f + 1;
  const _0x267caf = _0x5a97bb > 0 ? _0x3d7954 - (_0x4141d7.x + _0x4141d7.hw) : _0x4141d7.x - _0x4141d7.hw - _0x3d7954;
  if (_0x267caf < -0.03 || _0x267caf > _0x52488a.ledgeReachX) {
    return null;
  }
  const _0x530c1d = _0x4141d7.y + _0x52488a.ledgeGrabHeight;
  const _0x32b4f4 = Math.round(_0x530c1d);
  if (Math.abs(_0x530c1d - _0x32b4f4) > _0x52488a.ledgeReachY || !_0x199685.isSolid(_0x58ad8f, _0x32b4f4 - 1) || _0x199685.isSolid(_0x58ad8f, _0x32b4f4)) {
    return null;
  }
  const _0x49e0c5 = _0x3d7954 - _0x5a97bb * (_0x4141d7.hw + 0.001);
  const _0x3a977e = _0x32b4f4 - _0x52488a.ledgeGrabHeight;
  if (_0x49e0c5 - _0x4141d7.hw < _0x199685.minPlayerX) {
    return null;
  }
  if (_0x199685.allowsGrab && !_0x199685.allowsGrab(_0x58ad8f, _0x3a977e, _0x4141d7.h)) {
    return null;
  }
  const _0x2dc290 = _0x58ad8f - _0x5a97bb;
  for (let _0x40d28f = Math.floor(_0x3a977e + 0.02); _0x40d28f <= Math.floor(_0x3a977e + _0x4141d7.h - 0.02); _0x40d28f++) {
    if (_0x199685.isSolid(_0x2dc290, _0x40d28f)) {
      return null;
    }
  }
  return {
    side: _0x5a97bb,
    cellX: _0x58ad8f,
    topY: _0x32b4f4,
    snapX: _0x49e0c5,
    snapY: _0x3a977e
  };
}
function r(_0x32f500, _0x35f4c2, _0x37c038) {
  const _0x3f6d54 = Math.abs(_0x32f500.entryVx || 0);
  return {
    kind: "launch",
    auto: !!_0x37c038,
    vx: _0x32f500.side * Math.max(_0x35f4c2.ledgeLaunchX, _0x3f6d54),
    vy: _0x35f4c2.ledgeLaunchY,
    recatchUntil: _0x32f500.now + _0x35f4c2.traversalRecatchMs
  };
}
export function traversalLedgeDecision(_0x50a3a9, _0x1ade9b = _0x220a8e.player) {
  if (_0x50a3a9.down) {
    return {
      kind: "release",
      recatchUntil: _0x50a3a9.now + _0x1ade9b.traversalRecatchMs
    };
  } else if (_0x50a3a9.jumpBuffered) {
    return r(_0x50a3a9, _0x1ade9b, false);
  } else if (_0x50a3a9.now >= _0x50a3a9.until) {
    if (_0x1ade9b.ledgeAutoLaunch) {
      return r(_0x50a3a9, _0x1ade9b, true);
    } else {
      return {
        kind: "release",
        recatchUntil: _0x50a3a9.now + _0x1ade9b.traversalRecatchMs
      };
    }
  } else {
    return {
      kind: "hang",
      vx: 0,
      vy: 0
    };
  }
}
export function traversalWallDecision(_0x5710dd, _0x87062f, _0x446949 = _0x220a8e.player) {
  const _0x5f570b = Math.sign(_0x5710dd.side);
  let _0x2da885 = false;
  for (let _0x451a34 = Math.floor(_0x5710dd.y + 0.02); _0x5f570b !== 0 && !_0x5710dd.grounded && _0x5710dd.cellX >= _0x87062f.minCellX && _0x5710dd.cellX < _0x87062f.maxCellX && _0x451a34 <= Math.floor(_0x5710dd.y + _0x5710dd.h - 0.02); _0x451a34++) {
    if (_0x87062f.isSolid(_0x5710dd.cellX, _0x451a34)) {
      _0x2da885 = true;
      break;
    }
  }
  if (!_0x2da885 || _0x5710dd.down) {
    return {
      kind: "release",
      recatchUntil: _0x5710dd.now + _0x446949.traversalRecatchMs
    };
  } else if (_0x5710dd.jumpBuffered) {
    return {
      kind: "jump",
      vx: -_0x5f570b * _0x446949.wallJumpX,
      vy: _0x446949.wallJumpY,
      recatchUntil: _0x5710dd.now + _0x446949.traversalRecatchMs
    };
  } else if (_0x5710dd.hInput === -_0x5f570b || _0x5710dd.now >= _0x5710dd.until) {
    return {
      kind: "release",
      recatchUntil: _0x5710dd.now + _0x446949.traversalRecatchMs
    };
  } else {
    return {
      kind: "slide",
      vx: 0,
      vy: Math.max(_0x5710dd.vy, -_0x446949.wallSlideSpeed)
    };
  }
}
export const TRAVERSAL_FIXTURE = {
  id: "traversal-v1",
  bounds: {
    x0: 24,
    x1: 79
  },
  targetPlaySeconds: {
    min: 4,
    max: 12
  },
  run: {
    startScroll: 19,
    endScroll: 73,
    minimumScrollSpeed: 2.6,
    followLeadTiles: 16,
    lookAheadTiles: 2.5,
    portraitMinAspect: 0.9,
    playerSpawn: {
      x: 27.5,
      y: 3
    }
  },
  movement: {
    runSpeed: 10.8,
    accelGround: 150,
    accelAir: 84,
    jumpVel: 16.5,
    gravity: -42,
    fallGravityMult: 1.6,
    terminalVel: -36,
    jumpCutMult: 0.58,
    airJumpVel: 15.5,
    ledgeHangMs: 240,
    ledgeLaunchX: 10.8,
    ledgeLaunchY: 15.5,
    wallSlideSpeed: 7.5,
    wallSlideMs: 300,
    wallJumpX: 13.5,
    wallJumpY: 16,
    traversalLaunchControlMs: 100
  },
  entry: "entry",
  exit: "rejoin",
  immediateChoiceCap: 3,
  firstFork: {
    connector: "entry",
    choices: ["low-approach", "mid-entry", "upper-entry"]
  },
  groundRuns: [{
    x0: 24,
    x1: 32,
    y: 3
  }, {
    x0: 32,
    x1: 39,
    y: 2
  }, {
    x0: 39,
    x1: 47,
    y: 3
  }, {
    x0: 47,
    x1: 57,
    y: 1
  }, {
    x0: 57,
    x1: 64,
    y: 3
  }, {
    x0: 64,
    x1: 79,
    y: 4
  }],
  solidRects: [{
    id: "chimney-left",
    role: "wall",
    x0: 39,
    x1: 40,
    y0: 6,
    y1: 10
  }, {
    id: "chimney-right",
    role: "wall",
    x0: 44,
    x1: 45,
    y0: 6,
    y1: 10
  }, {
    id: "dare-overhang",
    role: "overhang",
    x0: 48,
    x1: 56,
    y0: 5,
    y1: 6
  }, {
    id: "dare-dead-end",
    role: "wall",
    grabbable: false,
    x0: 56,
    x1: 57,
    y0: 1,
    y1: 6
  }],
  platforms: [{
    id: "mid-entry",
    x0: 29,
    x1: 38,
    y: 5.35
  }, {
    id: "upper-entry",
    x0: 34,
    x1: 39,
    y: 8.35
  }, {
    id: "chimney-floor",
    x0: 40,
    x1: 44,
    y: 5.35
  }, {
    id: "recovery-ledge",
    x0: 43,
    x1: 48,
    y: 3.6
  }, {
    id: "mid-bridge",
    x0: 45,
    x1: 49,
    y: 5.35
  }, {
    id: "post-mid",
    x0: 57,
    x1: 65,
    y: 5.35
  }, {
    id: "post-high",
    x0: 58,
    x1: 66,
    y: 8.35
  }, {
    id: "exit-mid",
    x0: 64,
    x1: 73,
    y: 6.35
  }, {
    id: "exit-high",
    x0: 66,
    x1: 72,
    y: 9.35
  }],
  connectors: [{
    id: "entry",
    kind: "entry",
    x: 27.5,
    y: 3
  }, {
    id: "low-approach",
    kind: "floor",
    x: 34,
    y: 2
  }, {
    id: "mid-entry",
    kind: "ledge",
    x: 33,
    y: 5.35
  }, {
    id: "upper-entry",
    kind: "ledge",
    x: 36,
    y: 8.35
  }, {
    id: "low-step",
    kind: "floor",
    x: 43,
    y: 3
  }, {
    id: "chimney-base",
    kind: "chimney",
    x: 42,
    y: 5.35
  }, {
    id: "chimney-top",
    kind: "chimney",
    x: 44.5,
    y: 10
  }, {
    id: "recovery",
    kind: "ledge",
    x: 46,
    y: 3.6
  }, {
    id: "pocket-commit",
    kind: "dare-commit",
    x: 48,
    y: 1
  }, {
    id: "pocket-reward",
    kind: "reward",
    x: 54,
    y: 1
  }, {
    id: "pocket-wall",
    kind: "wall",
    x: 55.6,
    y: 3.4
  }, {
    id: "overhang-top",
    kind: "solid-top",
    x: 52,
    y: 6
  }, {
    id: "post-low",
    kind: "floor",
    x: 59,
    y: 3
  }, {
    id: "post-mid",
    kind: "ledge",
    x: 60,
    y: 5.35
  }, {
    id: "post-high",
    kind: "ledge",
    x: 61,
    y: 8.35
  }, {
    id: "exit-mid",
    kind: "ledge",
    x: 68,
    y: 6.35
  }, {
    id: "exit-high",
    kind: "ledge",
    x: 68,
    y: 9.35
  }, {
    id: "rejoin",
    kind: "rejoin",
    x: 75,
    y: 4
  }],
  edges: [{
    routeId: "lower-service",
    from: "entry",
    to: "low-approach",
    verb: "run"
  }, {
    routeId: "lower-service",
    from: "low-approach",
    to: "low-step",
    verb: "run-jump"
  }, {
    routeId: "lower-service",
    from: "low-step",
    to: "recovery",
    verb: "jump"
  }, {
    routeId: "lower-service",
    from: "recovery",
    to: "overhang-top",
    verb: "ledge-catch"
  }, {
    routeId: "lower-service",
    from: "overhang-top",
    to: "post-low",
    verb: "wall-jump"
  }, {
    routeId: "lower-service",
    from: "post-low",
    to: "rejoin",
    verb: "run-jump"
  }, {
    routeId: "mid-catwalk",
    from: "entry",
    to: "mid-entry",
    verb: "jump"
  }, {
    routeId: "mid-catwalk",
    from: "mid-entry",
    to: "chimney-base",
    verb: "run-jump"
  }, {
    routeId: "mid-catwalk",
    from: "chimney-base",
    to: "overhang-top",
    verb: "ledge-chain"
  }, {
    routeId: "mid-catwalk",
    from: "overhang-top",
    to: "post-mid",
    verb: "wall-jump"
  }, {
    routeId: "mid-catwalk",
    from: "post-mid",
    to: "exit-mid",
    verb: "run"
  }, {
    routeId: "mid-catwalk",
    from: "exit-mid",
    to: "rejoin",
    verb: "drop"
  }, {
    routeId: "upper-chimney",
    from: "entry",
    to: "mid-entry",
    verb: "jump"
  }, {
    routeId: "upper-chimney",
    from: "mid-entry",
    to: "upper-entry",
    verb: "air-jump"
  }, {
    routeId: "upper-chimney",
    from: "upper-entry",
    to: "chimney-top",
    verb: "wall-jump"
  }, {
    routeId: "upper-chimney",
    from: "chimney-top",
    to: "overhang-top",
    verb: "long-drop"
  }, {
    routeId: "upper-chimney",
    from: "overhang-top",
    to: "post-high",
    verb: "run-air-jump"
  }, {
    routeId: "upper-chimney",
    from: "post-high",
    to: "exit-high",
    verb: "run"
  }, {
    routeId: "upper-chimney",
    from: "exit-high",
    to: "rejoin",
    verb: "drop"
  }, {
    routeId: "wall-launch",
    from: "entry",
    to: "mid-entry",
    verb: "jump"
  }, {
    routeId: "wall-launch",
    from: "mid-entry",
    to: "chimney-base",
    verb: "jump"
  }, {
    routeId: "wall-launch",
    from: "chimney-base",
    to: "chimney-top",
    verb: "wall-slide-jump"
  }, {
    routeId: "wall-launch",
    from: "chimney-top",
    to: "overhang-top",
    verb: "long-drop"
  }, {
    routeId: "wall-launch",
    from: "overhang-top",
    to: "post-high",
    verb: "run-air-jump"
  }, {
    routeId: "wall-launch",
    from: "post-high",
    to: "exit-high",
    verb: "run"
  }, {
    routeId: "wall-launch",
    from: "exit-high",
    to: "rejoin",
    verb: "drop"
  }, {
    routeId: "dare-pocket",
    from: "entry",
    to: "low-approach",
    verb: "run"
  }, {
    routeId: "dare-pocket",
    from: "low-approach",
    to: "pocket-commit",
    verb: "run-drop"
  }, {
    routeId: "dare-pocket",
    from: "pocket-commit",
    to: "pocket-reward",
    verb: "run"
  }, {
    routeId: "dare-pocket",
    from: "pocket-reward",
    to: "pocket-wall",
    verb: "turn"
  }, {
    routeId: "dare-pocket",
    from: "pocket-wall",
    to: "pocket-commit",
    verb: "run-left"
  }, {
    routeId: "dare-pocket",
    from: "pocket-commit",
    to: "recovery",
    verb: "jump-left"
  }, {
    routeId: "dare-pocket",
    from: "recovery",
    to: "overhang-top",
    verb: "ledge-catch"
  }, {
    routeId: "dare-pocket",
    from: "overhang-top",
    to: "post-mid",
    verb: "wall-jump"
  }, {
    routeId: "dare-pocket",
    from: "post-mid",
    to: "exit-mid",
    verb: "run"
  }, {
    routeId: "dare-pocket",
    from: "exit-mid",
    to: "rejoin",
    verb: "drop"
  }, {
    routeId: "recovery-scramble",
    from: "entry",
    to: "mid-entry",
    verb: "jump"
  }, {
    routeId: "recovery-scramble",
    from: "mid-entry",
    to: "upper-entry",
    verb: "air-jump"
  }, {
    routeId: "recovery-scramble",
    from: "upper-entry",
    to: "recovery",
    verb: "fall-catch"
  }, {
    routeId: "recovery-scramble",
    from: "recovery",
    to: "overhang-top",
    verb: "jump"
  }, {
    routeId: "recovery-scramble",
    from: "overhang-top",
    to: "post-low",
    verb: "drop"
  }, {
    routeId: "recovery-scramble",
    from: "post-low",
    to: "rejoin",
    verb: "run-jump"
  }],
  routes: [{
    id: "lower-service",
    connectorIds: ["entry", "low-approach", "low-step", "recovery", "overhang-top", "post-low", "rejoin"]
  }, {
    id: "mid-catwalk",
    connectorIds: ["entry", "mid-entry", "chimney-base", "overhang-top", "post-mid", "exit-mid", "rejoin"]
  }, {
    id: "upper-chimney",
    connectorIds: ["entry", "mid-entry", "upper-entry", "chimney-top", "overhang-top", "post-high", "exit-high", "rejoin"]
  }, {
    id: "wall-launch",
    connectorIds: ["entry", "mid-entry", "chimney-base", "chimney-top", "overhang-top", "post-high", "exit-high", "rejoin"]
  }, {
    id: "dare-pocket",
    connectorIds: ["entry", "low-approach", "pocket-commit", "pocket-reward", "pocket-wall", "pocket-commit", "recovery", "overhang-top", "post-mid", "exit-mid", "rejoin"]
  }, {
    id: "recovery-scramble",
    connectorIds: ["entry", "mid-entry", "upper-entry", "recovery", "overhang-top", "post-low", "rejoin"]
  }],
  darePocket: {
    commit: "pocket-commit",
    rewardConnector: "pocket-reward",
    rejoin: "recovery",
    bounds: {
      x0: 48,
      x1: 57
    },
    retreatPath: ["pocket-reward", "pocket-wall", "pocket-commit", "recovery"],
    reward: {
      kind: "letter",
      letter: "H",
      mode: "fixed",
      x: 54,
      y: 2
    },
    timing: {
      retreatSeconds: 1.5,
      entryEdgeMarginTiles: 18,
      minExitMarginTiles: 8
    }
  },
  rejoin: {
    connector: "rejoin",
    x0: 72,
    x1: 79,
    y: 4
  },
  enemies: [{
    id: "entry-wasp",
    kind: "wasp",
    x: 37,
    y: 8.4,
    delayMs: 0
  }, {
    id: "rejoin-wasp",
    kind: "wasp",
    x: 63,
    y: 8.8,
    delayMs: 600
  }],
  hookAnchors: [{
    id: "entry-lift",
    x: 33.5,
    y: 7.2,
    arc: [215, 80],
    teaches: "entry",
    note: "first fork: deck → upper entry in one press"
  }, {
    id: "shaft-lift",
    x: 42,
    y: 11,
    arc: [262, 58],
    teaches: "chimney-base",
    note: "the chimney shaft without the wall pump"
  }, {
    id: "pocket-span",
    x: 51.5,
    y: 7.6,
    arc: [180, 62],
    teaches: "chimney-top",
    note: "roof → mid transfer over the dare pocket"
  }, {
    id: "post-lift",
    x: 61.5,
    y: 10.6,
    arc: [230, 70],
    teaches: "post-mid",
    note: "mid-air link off pocket-span; post band"
  }, {
    id: "exit-lift",
    x: 65,
    y: 11.2,
    arc: [210, 72],
    teaches: "post-high",
    note: "high exit band into the rejoin"
  }],
  fallback: {
    minDropTiles: 1.2,
    dropAboveTiles: 1.2,
    tossVx: 5,
    tossVy: -3,
    groundKnockTiles: 1.5,
    iframesMs: 1400,
    messageMs: 1100,
    maxConsecutive: 2,
    recoverTiles: 8
  }
};
export const TRAVERSAL_HOOK = {
  id: "hook-v1",
  range: 8.6,
  minRange: 1.6,
  handHeight: 1.2,
  behindTiles: 0.9,
  behindPenalty: 1.7,
  losStepTiles: 0.35,
  bufferMs: 140,
  cooldownMs: 420,
  sameAnchorLockMs: 900,
  zipSpeed: 16,
  zipMaxMs: 520,
  zipSubstepTiles: 0.3,
  arriveRadius: 0.28,
  hangMs: 110,
  launchX: 11.6,
  launchY: 14.6,
  launchCeiling: 15.9,
  releaseVy: -2,
  refundAirJump: true
};
export const TRAVERSAL_FLOW = {
  id: "flow-v1",
  windowMs: 1200,
  step: 0.05,
  max: 4,
  maxTotalMult: 1.22,
  speedMultCap: 1.22,
  launchCeiling: 16.5,
  groundGraceMs: 220,
  groundDecayMs: 140,
  refundAirJump: true,
  autoLaunch: true,
  linkVerbs: ["ledge", "wall", "hook"]
};
export const TRAVERSAL_PACES = {
  base: {
    id: "base",
    label: "BASE",
    hypothesis: "Control: the 15f66d2 accelerated pass unchanged — constant 2.6 edge, two wasps, one pocket reward, and a crush clock bounded by screen width rather than by seconds. If a variant is not clearly better than this, the variant is wrong.",
    pursuit: {
      mode: "constant",
      cruiseSpeed: 2.6,
      minSpeed: 2.6,
      maxSpeed: 2.6,
      pocketSpeed: 2.6,
      accel: 0,
      decel: 0,
      crushSlackSeconds: 0,
      edgePinDamageMs: 0
    }
  },
  hunt: {
    id: "hunt",
    label: "HUNT",
    hypothesis: "The slice is boring because banked margin never expires: once you are ahead, nothing is timed. A hunting edge that charges (6.8, 2.6x the shipped speed) whenever you are comfortable and eases back to the shipped 2.6 when it is about to crush you removes safe coasting and makes every vertical detour cost measurable ground.",
    pursuit: {
      mode: "hunt",
      cruiseSpeed: 3.6,
      minSpeed: 2.6,
      maxSpeed: 6.8,
      comfortTiles: 11,
      mercyTiles: 5,
      accel: 4,
      decel: 6,
      pocketSpeed: 1.3,
      crushSlackSeconds: 2.6,
      edgePinDamageMs: 600
    },
    pocketTiming: {
      minExitMarginTiles: 4
    },
    pocketReward: {
      x: 51
    },
    enemies: [{
      id: "low-contest",
      kind: "wasp",
      x: 35,
      y: 4.9,
      delayMs: 0,
      tune: {
        diveRange: 8.5,
        diveCooldownMs: 900
      }
    }, {
      id: "pocket-mouth",
      kind: "wasp",
      x: 50,
      y: 6.6,
      delayMs: 300,
      tune: {
        cruiseSpeed: 0.5,
        diveRange: 7,
        diveCooldownMs: 1100
      }
    }, {
      id: "roof-hunter-a",
      kind: "wasp",
      x: 47,
      y: 11.9,
      delayMs: 150,
      tune: {
        cruiseSpeed: 3.2,
        diveRange: 9,
        diveCooldownMs: 800
      }
    }, {
      id: "roof-hunter-b",
      kind: "wasp",
      x: 60,
      y: 12.3,
      delayMs: 300,
      tune: {
        cruiseSpeed: 3.2,
        diveRange: 9,
        diveCooldownMs: 800
      }
    }]
  },
  swarm: {
    id: "swarm",
    label: "SWARM",
    hypothesis: "Route choice only matters when routes carry different threats. Six placed hostiles (five wasps + one carrier, no new kinds) give each line its own matchup: the low line is fastest and dive-contested, the mid catwalk is safe but slow, the upper chimney is hardest and the only one that pays a weapon. Geometry becomes a combat decision.",
    pursuit: {
      mode: "constant",
      cruiseSpeed: 2.9,
      minSpeed: 2.6,
      maxSpeed: 2.9,
      pocketSpeed: 2,
      accel: 0,
      decel: 0,
      crushSlackSeconds: 4,
      edgePinDamageMs: 600
    },
    pocketTiming: {
      minExitMarginTiles: 3.5
    },
    pocketReward: {
      x: 53
    },
    enemies: [{
      id: "low-contest-a",
      kind: "wasp",
      x: 35,
      y: 4.8,
      delayMs: 0,
      tune: {
        diveRange: 8.5,
        diveCooldownMs: 900
      }
    }, {
      id: "low-contest-b",
      kind: "wasp",
      x: 46,
      y: 4.4,
      delayMs: 500,
      tune: {
        diveRange: 8,
        diveCooldownMs: 950
      }
    }, {
      id: "pocket-guard",
      kind: "wasp",
      x: 51,
      y: 6.8,
      delayMs: 200,
      tune: {
        cruiseSpeed: 0.4,
        diveRange: 6,
        diveCooldownMs: 1200
      }
    }, {
      id: "chimney-hold",
      kind: "wasp",
      x: 44,
      y: 11.6,
      delayMs: 0,
      tune: {
        cruiseSpeed: 0.5,
        diveRange: 7.5,
        diveCooldownMs: 1000
      }
    }, {
      id: "roof-hunter-a",
      kind: "wasp",
      x: 52,
      y: 12,
      delayMs: 300,
      tune: {
        cruiseSpeed: 3.4,
        diveRange: 9,
        diveCooldownMs: 850
      }
    }, {
      id: "roof-hunter-b",
      kind: "wasp",
      x: 66,
      y: 12.4,
      delayMs: 500,
      tune: {
        cruiseSpeed: 3,
        diveRange: 9,
        diveCooldownMs: 850
      }
    }, {
      id: "rejoin-wasp",
      kind: "wasp",
      x: 63,
      y: 8.8,
      delayMs: 600
    }, {
      id: "upper-lure",
      kind: "carrier",
      x: 64,
      y: 10.6,
      delayMs: 0,
      tune: {
        hp: 5
      }
    }]
  },
  surge: {
    id: "surge",
    label: "SURGE",
    hypothesis: "Intensity should be a crescendo the player answers with skill, not a constant. The edge ramps 2.6 → 7.0 across the pass while every contact auto-converts to a launch and chained launches amplify each other and refund the air jump — so the only way to stay ahead of the ship late in the pass is to keep the chain alive, and the two hardest routes are the ones that pay.",
    pursuit: {
      mode: "ramp",
      cruiseSpeed: 2.6,
      minSpeed: 2.6,
      maxSpeed: 7,
      rampMs: 6000,
      accel: 5,
      decel: 6,
      pocketSpeed: 1.6,
      crushSlackSeconds: 3.2,
      edgePinDamageMs: 600
    },
    pocketTiming: {
      minExitMarginTiles: 3
    },
    pocketReward: {
      x: 50.5
    },
    movement: {
      ledgeHangMs: 90,
      ledgeAutoLaunch: true,
      wallSlideMs: 160,
      ledgeLaunchX: 11.2,
      ledgeLaunchY: 16,
      wallJumpX: 13.5,
      wallJumpY: 16.4
    },
    chain: {
      windowMs: 900,
      step: 0.06,
      max: 3,
      refundAirJump: true
    },
    enemies: [{
      id: "entry-wasp",
      kind: "wasp",
      x: 37,
      y: 8.4,
      delayMs: 0
    }, {
      id: "mid-arc-wasp",
      kind: "wasp",
      x: 46,
      y: 7.2,
      delayMs: 300,
      tune: {
        diveRange: 7.5,
        diveCooldownMs: 1000
      }
    }, {
      id: "roof-hunter-a",
      kind: "wasp",
      x: 50,
      y: 11.8,
      delayMs: 200,
      tune: {
        cruiseSpeed: 3.2,
        diveRange: 9,
        diveCooldownMs: 850
      }
    }, {
      id: "roof-hunter-b",
      kind: "wasp",
      x: 64,
      y: 12.2,
      delayMs: 400,
      tune: {
        cruiseSpeed: 3.2,
        diveRange: 9,
        diveCooldownMs: 850
      }
    }, {
      id: "rejoin-wasp",
      kind: "wasp",
      x: 63,
      y: 8.8,
      delayMs: 600
    }],
    rewards: [{
      kind: "letter",
      letter: "S",
      mode: "fixed",
      x: 61,
      y: 9.9
    }]
  }
};
export const TRAVERSAL_PACE_IDS = Object.keys(TRAVERSAL_PACES);
export function resolveTraversalPace(_0x131199, _0x1c6997 = TRAVERSAL_FIXTURE, _0x79449d = {}) {
  const _0x3dedaf = TRAVERSAL_PACES[_0x131199] || TRAVERSAL_PACES.base;
  const _0x4ef74d = {
    ..._0x1c6997.darePocket.reward,
    ...(_0x3dedaf.pocketReward || {})
  };
  const _0x5e3151 = [_0x4ef74d, ...(_0x3dedaf.rewards || [])].filter(function (_0x8e80cc) {
    return !traversalRewardBuried(_0x1c6997, _0x8e80cc);
  }).map(function (_0x4b2cdf) {
    return {
      ..._0x4b2cdf
    };
  });
  const _0xc4460a = _0x1c6997.hostileFree ? [] : _0x3dedaf.enemies || _0x1c6997.enemies;
  const _0x2a04b1 = _0x79449d.flow ? {
    ...TRAVERSAL_FLOW
  } : null;
  const _0x2f7804 = _0x79449d.hook ? {
    ...TRAVERSAL_HOOK
  } : null;
  const _0x45a8f9 = _0x2a04b1 && _0x2a04b1.autoLaunch ? {
    ledgeAutoLaunch: true
  } : null;
  return {
    ..._0x1c6997,
    hook: _0x2f7804,
    flow: _0x2a04b1,
    pace: {
      id: _0x3dedaf.id,
      label: _0x3dedaf.label,
      hypothesis: _0x3dedaf.hypothesis
    },
    pursuit: {
      ..._0x3dedaf.pursuit,
      marginCapTiles: _0x3dedaf.pursuit.crushSlackSeconds ? _0x3dedaf.pursuit.crushSlackSeconds * _0x3dedaf.pursuit.cruiseSpeed : 0
    },
    run: {
      ..._0x1c6997.run,
      ...(_0x3dedaf.run || {}),
      minimumScrollSpeed: _0x3dedaf.pursuit.cruiseSpeed
    },
    movement: {
      ..._0x1c6997.movement,
      ...(_0x3dedaf.movement || {}),
      ...(_0x45a8f9 || {})
    },
    chain: _0x3dedaf.chain ? {
      ..._0x3dedaf.chain
    } : null,
    enemies: _0xc4460a.map(_0x2d18c4 => ({
      ..._0x2d18c4
    })),
    rewards: _0x5e3151,
    darePocket: {
      ..._0x1c6997.darePocket,
      reward: _0x4ef74d,
      timing: {
        ..._0x1c6997.darePocket.timing,
        ...(_0x3dedaf.pocketTiming || {})
      }
    }
  };
}
const o = [{
  id: "hound-teach",
  kind: "hound",
  contests: "lower-service",
  owns: "low-step",
  deck: 3,
  x: 44.2,
  dir: -1,
  delayMs: 0,
  patrol: {
    x0: 41.6,
    x1: 44.6
  }
}, {
  id: "hound-pocket",
  kind: "hound",
  contests: "dare-pocket",
  owns: "pocket-commit",
  deck: 1,
  x: 49.8,
  dir: -1,
  delayMs: 400,
  patrol: {
    x0: 47.6,
    x1: 50.4
  }
}, {
  id: "hound-rejoin",
  kind: "hound",
  contests: "lower-service",
  owns: "post-low",
  deck: 3,
  x: 60.2,
  dir: -1,
  delayMs: 800,
  patrol: {
    x0: 57.8,
    x1: 60.6
  }
}];
const t = [{
  id: "ceiling-a",
  kind: "wasp",
  contests: "upper-chimney",
  x: 47,
  y: 15.6,
  delayMs: 200,
  tune: {
    cruiseSpeed: 3,
    diveRange: 9,
    diveCooldownMs: 850
  }
}, {
  id: "ceiling-b",
  kind: "wasp",
  contests: "wall-launch",
  x: 62,
  y: 15.9,
  delayMs: 500,
  tune: {
    cruiseSpeed: 3,
    diveRange: 9,
    diveCooldownMs: 850
  }
}];
export const HOUND_TRIAL = {
  id: "hound-trial-v1",
  stages: {
    solo: {
      id: "solo",
      label: "HOUND SOLO",
      compose: "replace",
      enemies: o.concat(t)
    },
    combo: {
      id: "combo",
      label: "HOUND + WASP",
      compose: "replace",
      frozen: true,
      enemies: [{
        id: "hound-squeeze",
        kind: "hound",
        contests: "lower-service",
        deck: 3,
        x: 45.5,
        dir: -1,
        delayMs: 0,
        patrol: {
          x0: 39.5,
          x1: 46.5
        }
      }, {
        id: "squeeze-wasp",
        kind: "wasp",
        contests: "lower-service",
        x: 44,
        y: 7.6,
        delayMs: 300
      }, {
        id: "hound-rejoin",
        kind: "hound",
        contests: "lower-service",
        deck: 3,
        x: 63.5,
        dir: -1,
        delayMs: 900,
        patrol: {
          x0: 57.5,
          x1: 63.5
        }
      }]
    },
    squeezePlus: {
      id: "squeezePlus",
      label: "HOUND 2.5",
      compose: "replace",
      enemies: [{
        id: "hound-squeeze",
        kind: "hound",
        contests: "lower-service",
        owns: "low-step",
        deck: 3,
        x: 44.2,
        dir: -1,
        delayMs: 0,
        patrol: {
          x0: 41.6,
          x1: 44.6
        }
      }, {
        id: "squeeze-wasp",
        kind: "wasp",
        contests: "lower-service",
        x: 44,
        y: 7.6,
        delayMs: 300
      }, {
        id: "hound-roof",
        kind: "hound",
        contests: "mid-catwalk",
        owns: "overhang-top",
        surface: "solid-top",
        deck: 6,
        x: 52.4,
        dir: -1,
        delayMs: 500,
        patrol: {
          x0: 50.4,
          x1: 53.4
        }
      }, t[0]]
    },
    mix: {
      id: "mix",
      label: "HOUND MIX",
      compose: "add",
      enemies: o.concat([t[0]])
    },
    aim: {
      id: "aim",
      label: "AIM BENCH",
      compose: "replace",
      bench: true,
      enemies: [{
        id: "hound-bench",
        kind: "hound",
        contests: "dare-pocket",
        owns: "pocket-reward",
        deck: 1,
        x: 54.6,
        dir: -1,
        delayMs: 0,
        patrol: {
          x0: 53.8,
          x1: 55.2
        },
        tune: {
          senseRange: 0
        }
      }]
    }
  }
};
export function houndTrialStage(_0x1596cf) {
  return _0x1596cf && HOUND_TRIAL.stages[_0x1596cf] || null;
}
const n = {
  id: "polyp-post",
  kind: "polyp",
  contests: "mid-catwalk",
  owns: "post-mid",
  mount: "platform:post-mid",
  deck: 5.35,
  x: 63.2,
  dir: -1,
  delayMs: 0
};
export const POLYP_TRIAL = {
  id: "polyp-trial-v1",
  stages: {
    solo: {
      id: "solo",
      label: "POLYP SOLO",
      compose: "replace",
      enemies: [n]
    },
    combo: {
      id: "combo",
      label: "POLYP + HOUND",
      compose: "replace",
      enemies: [n, {
        id: "hound-rejoin",
        kind: "hound",
        contests: "lower-service",
        owns: "post-low",
        deck: 3,
        x: 60.2,
        dir: -1,
        delayMs: 400,
        patrol: {
          x0: 57.8,
          x1: 60.6
        }
      }]
    }
  }
};
export function polypTrialStage(_0x258020) {
  return _0x258020 && POLYP_TRIAL.stages[_0x258020] || null;
}
function i(_0x37ca3f, _0x112691, _0x50f6a9) {
  const _0x340a3f = function (_0x3499c7, _0x5f671b) {
    return _0x3499c7.enemies.map(function (_0x1ae5bd) {
      if (_0x1ae5bd.deck === undefined) {
        return {
          ..._0x1ae5bd
        };
      }
      const _0x3cbe40 = _0x1ae5bd.kind === "polyp" ? _0x5f671b.polyp.rootY : _0x5f671b.hound.rideY;
      return {
        ..._0x1ae5bd,
        y: _0x1ae5bd.deck + _0x3cbe40
      };
    });
  }(_0x37ca3f, _0x50f6a9);
  if (_0x37ca3f.compose === "add") {
    return _0x112691.map(function (_0x49319f) {
      return {
        ..._0x49319f
      };
    }).concat(_0x340a3f);
  } else {
    return _0x340a3f;
  }
}
export function traversalEnemyPlan(_0x23e6f3, _0x3d85cb, _0x7db830, _0x2d5a3f = _0x220a8e) {
  if (!_0x23e6f3) {
    return [];
  }
  const _0x2f04b3 = houndTrialStage(_0x3d85cb);
  const _0x567071 = _0x2f04b3 ? i(_0x2f04b3, _0x23e6f3.enemies, _0x2d5a3f) : _0x23e6f3.enemies;
  const _0x336453 = polypTrialStage(_0x7db830);
  if (_0x336453) {
    return i(_0x336453, _0x567071, _0x2d5a3f);
  } else {
    return _0x567071;
  }
}
export function traversalPaceTargetSpeed(_0x156b9f, _0x3af2ca) {
  if (_0x3af2ca.inPocket) {
    return _0x156b9f.pocketSpeed;
  }
  if (_0x156b9f.mode === "ramp") {
    const _0x3ad91b = Math.max(0, Math.min(1, (_0x3af2ca.elapsedMs || 0) / _0x156b9f.rampMs));
    return _0x156b9f.cruiseSpeed + (_0x156b9f.maxSpeed - _0x156b9f.cruiseSpeed) * _0x3ad91b;
  }
  if (_0x156b9f.mode === "hunt") {
    if (_0x3af2ca.marginTiles <= _0x156b9f.mercyTiles) {
      return _0x156b9f.minSpeed;
    } else if (_0x3af2ca.marginTiles >= _0x156b9f.comfortTiles) {
      return _0x156b9f.maxSpeed;
    } else {
      return _0x156b9f.cruiseSpeed;
    }
  } else {
    return _0x156b9f.cruiseSpeed;
  }
}
export function traversalPaceStep(_0x1eb522, _0x437d93, _0x2af874, _0x6e3cfb) {
  const _0x22eefe = traversalPaceTargetSpeed(_0x1eb522, _0x2af874);
  if (_0x2af874.inPocket) {
    return Math.min(_0x437d93, _0x22eefe);
  }
  const _0x21ad75 = (_0x22eefe > _0x437d93 ? _0x1eb522.accel : _0x1eb522.decel) * _0x6e3cfb;
  const _0x169696 = _0x22eefe > _0x437d93 ? Math.min(_0x22eefe, _0x437d93 + _0x21ad75) : Math.max(_0x22eefe, _0x437d93 - _0x21ad75);
  return Math.max(_0x1eb522.minSpeed, Math.min(_0x1eb522.maxSpeed, _0x169696));
}
export function traversalMarginCapScroll(_0xd6e416, _0xdbe8d5, _0x1d7265) {
  return _0xd6e416 - _0xdbe8d5 - _0x1d7265;
}
export function traversalPocketEntryMargin(_0x4b516a) {
  const _0x2349f1 = _0x4b516a.pursuit.marginCapTiles;
  const _0x29a184 = _0x4b516a.darePocket.timing.entryEdgeMarginTiles;
  if (_0x2349f1 > 0) {
    return Math.min(_0x2349f1, _0x29a184);
  } else {
    return _0x29a184;
  }
}
export function traversalPocketAdvanceTiles(_0x2624bb, _0x575569) {
  return _0x2624bb.pocketSpeed * _0x575569;
}
export function traversalChainMult(_0x6bb1f, _0xb0f267) {
  if (_0xb0f267) {
    return 1 + _0xb0f267.step * Math.max(0, Math.min(_0x6bb1f, _0xb0f267.max));
  } else {
    return 1;
  }
}
export function traversalFallbackTarget(_0x4c8791, _0x26f541, _0x3a1315) {
  let _0x5a783c = null;
  for (const _0x399118 of _0x4c8791) {
    if (!(_0x399118 > _0x26f541 - _0x3a1315.minDropTiles)) {
      if (_0x5a783c === null || _0x399118 > _0x5a783c) {
        _0x5a783c = _0x399118;
      }
    }
  }
  return _0x5a783c;
}
export function traversalGroundYAt(_0x29cc64, _0x533afd) {
  if (!_0x29cc64) {
    return null;
  }
  for (const _0x37d3b6 of _0x29cc64.groundRuns || []) {
    if (_0x533afd >= _0x37d3b6.x0 && _0x533afd < _0x37d3b6.x1) {
      return _0x37d3b6.y;
    }
  }
  return null;
}
export function traversalRewardBuried(_0x114374, _0x1ffa81) {
  const _0x5be30c = traversalGroundYAt(_0x114374, _0x1ffa81.x);
  return _0x5be30c !== null && _0x1ffa81.y < _0x5be30c;
}
export function traversalSolidAllowsGrab(_0x297812, _0x5c98db, _0x4b4f10, _0x25ad40) {
  if (!_0x297812) {
    return true;
  }
  const _0x3995e2 = Math.floor(_0x4b4f10 + 0.02);
  const _0x4b24b2 = Math.floor(_0x4b4f10 + _0x25ad40 - 0.02);
  return !(_0x297812.solidRects || []).some(function (_0x1abfe8) {
    return _0x1abfe8.grabbable === false && _0x5c98db >= _0x1abfe8.x0 && _0x5c98db < _0x1abfe8.x1 && _0x4b24b2 >= _0x1abfe8.y0 && _0x3995e2 < _0x1abfe8.y1;
  });
}
export function traversalFollowTarget(_0x276bc2, _0x5400b5, _0x15d2b6, _0x23ed7d) {
  const _0x5b62e6 = Math.max(0, Math.min(_0x23ed7d.followLeadTiles, _0x15d2b6));
  return Math.max(_0x276bc2, _0x5400b5 - _0x5b62e6);
}
export function traversalCameraDepth(_0x281371, _0x180908, _0x493af0) {
  return _0x281371 * Math.max(1, _0x493af0.portraitMinAspect / _0x180908);
}
export function portraitViewDepthMult(_0x245df8, _0x57d00f, {
  startAspect: _0x10caa7 = 0.9,
  fullAspect: _0x53fce2 = 0.56,
  compactMult: _0x103fac = 1.15
} = {}) {
  if (!Number.isFinite(_0x245df8) || _0x245df8 <= 0) {
    return 1;
  }
  if (!Number.isFinite(_0x57d00f) || _0x57d00f <= 0 || _0x57d00f >= _0x10caa7) {
    return _0x245df8;
  }
  const _0x2f3afe = Math.max(0.000001, _0x10caa7 - _0x53fce2);
  const _0x4c7ae2 = Math.min(1, Math.max(0, (_0x10caa7 - _0x57d00f) / _0x2f3afe));
  return _0x245df8 + (Math.min(_0x245df8, Math.max(1, _0x103fac)) - _0x245df8) * _0x4c7ae2;
}
export function portraitActorVisualGain(_0x2d5ccb, {
  startAspect: _0x3ca4cb = 0.9,
  fullAspect: _0x4a3563 = 0.56,
  maxGain: _0x1d9bc1 = 1.5
} = {}) {
  if (!Number.isFinite(_0x2d5ccb) || _0x2d5ccb <= 0 || _0x2d5ccb >= _0x3ca4cb) {
    return 1;
  }
  const _0x4d400c = Math.max(0.000001, _0x3ca4cb - _0x4a3563);
  const _0x2563b6 = Math.min(1, Math.max(0, (_0x3ca4cb - _0x2d5ccb) / _0x4d400c));
  return 1 + (Math.max(1, _0x1d9bc1) - 1) * _0x2563b6;
}