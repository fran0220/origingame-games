import { CONFIG as _0x2a4225 } from "../config.js";
import { DEG as _0x7bbec } from "./path.js";
import { easeOutBack as _0x1d49fb } from "./waves.js";
import { GAP as _0x5b7ab9, buildLevel as _0x127855 } from "./generator.js";
const o = _0x5eadf2 => _0x5eadf2 < 0 ? 0 : _0x5eadf2 > 1 ? 1 : _0x5eadf2;
const s = {
  id: "transform-v1",
  bounds: {
    x0: 0,
    x1: 152
  },
  origin: {
    x: 0,
    z: 0
  },
  altitudeProfile: [{
    s: 0,
    alt: 0
  }, {
    s: 59,
    alt: 0
  }, {
    s: 107,
    alt: 20
  }, {
    s: 152,
    alt: 20
  }],
  targetPlaySeconds: {
    min: 12,
    max: 30
  },
  run: {
    startScroll: 19,
    endScroll: 138,
    minimumScrollSpeed: 3.2,
    followLeadTiles: 16,
    lookAheadTiles: 2.5,
    portraitMinAspect: 0.9,
    playerSpawn: {
      x: 27.5,
      y: 3
    }
  },
  bands: [{
    id: "outer-face-a",
    kind: "exterior",
    s0: 0,
    s1: 60,
    headingDeg: 0,
    label: "OUTER FACE A",
    shipState: "INTERCEPT",
    atmosphere: {
      bg: 2304048,
      fogNear: 30,
      fogFar: 74
    },
    tone: [1, 1, 1],
    hullDrop: 26,
    hullWall: {
      height: 20,
      pattern: "solid"
    },
    skyline: [{
      atS: 12,
      top: 21,
      height: 30,
      width: 8,
      depth: -26
    }, {
      atS: 30,
      top: 17,
      height: 26,
      width: 9,
      depth: -21
    }, {
      atS: 44,
      top: 25,
      height: 34,
      width: 7,
      depth: -29
    }, {
      atS: 56,
      top: 13,
      height: 22,
      width: 11,
      depth: -24
    }]
  }, {
    id: "inner-passage",
    kind: "interior",
    s0: 60,
    s1: 106,
    headingDeg: 90,
    label: "INNER PASSAGE",
    shipState: "CONTAIN",
    atmosphere: {
      bg: 2367014,
      fogNear: 14,
      fogFar: 42
    },
    tone: [1.26, 1.12, 1.18],
    interior: {
      ceilingAbove: 10,
      wallDepth: -3.6,
      ribEvery: 7,
      alcoveEvery: 5,
      pipeEvery: 9
    },
    skyline: [],
    threatSockets: [{
      id: "polyp-mid",
      kind: "polyp",
      x: 76,
      y: 8.4,
      depth: -2.4
    }, {
      id: "polyp-high",
      kind: "polyp",
      x: 96,
      y: 11.4,
      depth: -2.4
    }, {
      id: "hazard-pit",
      kind: "hazard",
      x: 88,
      y: 6,
      depth: -1.2
    }, {
      id: "hazard-shelf",
      kind: "hazard",
      x: 94,
      y: 7,
      depth: -1.2
    }]
  }, {
    id: "outer-face-c",
    kind: "exterior",
    s0: 106,
    s1: 152,
    headingDeg: 180,
    label: "OUTER FACE C",
    shipState: "QUARANTINE",
    atmosphere: {
      bg: 2964042,
      fogNear: 26,
      fogFar: 70
    },
    tone: [1.02, 1.09, 1.22],
    hullDrop: 40,
    weather: {
      count: 260,
      speed: 30,
      drift: -4.5,
      length: 1.7,
      spanY: 34,
      spanZ: 22
    },
    hullWall: {
      height: 22,
      pattern: "towers"
    },
    skyline: [{
      atS: 109,
      top: 21,
      height: 26,
      width: 10,
      depth: -16,
      below: true
    }, {
      atS: 117,
      top: 19,
      height: 24,
      width: 13,
      depth: -23,
      below: true
    }, {
      atS: 126,
      top: 20,
      height: 30,
      width: 9,
      depth: -18,
      below: true
    }, {
      atS: 134,
      top: 18,
      height: 22,
      width: 14,
      depth: -26,
      below: true
    }, {
      atS: 145,
      top: 21,
      height: 26,
      width: 10,
      depth: -20,
      below: true
    }]
  }],
  events: [{
    id: "bulkhead-flip",
    kind: "flip",
    seamS: 60,
    fromBand: 0,
    toBand: 1,
    armMsg: "PANEL OPEN — GO IN",
    label: "FLIP INWARD"
  }, {
    id: "breach-return",
    kind: "breach",
    seamS: 106,
    fromBand: 1,
    toBand: 2,
    armMsg: "PANEL AHEAD — PUSH THROUGH",
    label: "BREACH OUT"
  }],
  groundRuns: [{
    x0: 0,
    x1: 24,
    y: 3
  }, {
    x0: 24,
    x1: 34,
    y: 3
  }, {
    x0: 34,
    x1: 36,
    gap: true
  }, {
    x0: 36,
    x1: 44,
    y: 3
  }, {
    x0: 44,
    x1: 48,
    y: 4
  }, {
    x0: 48,
    x1: 50,
    gap: true
  }, {
    x0: 50,
    x1: 60,
    y: 3
  }, {
    x0: 60,
    x1: 66,
    y: 3
  }, {
    x0: 66,
    x1: 72,
    y: 4
  }, {
    x0: 72,
    x1: 74,
    gap: true
  }, {
    x0: 74,
    x1: 82,
    y: 5
  }, {
    x0: 82,
    x1: 84,
    gap: true
  }, {
    x0: 84,
    x1: 92,
    y: 6
  }, {
    x0: 92,
    x1: 99,
    y: 7
  }, {
    x0: 99,
    x1: 106,
    y: 8
  }, {
    x0: 106,
    x1: 112,
    y: 8
  }, {
    x0: 112,
    x1: 120,
    y: 8
  }, {
    x0: 120,
    x1: 122,
    gap: true
  }, {
    x0: 122,
    x1: 130,
    y: 7
  }, {
    x0: 130,
    x1: 132,
    gap: true
  }, {
    x0: 132,
    x1: 140,
    y: 6
  }, {
    x0: 140,
    x1: 152,
    y: 7
  }],
  platforms: [{
    id: "a-lower",
    x0: 27,
    x1: 33,
    y: 5.35
  }, {
    id: "a-mid",
    x0: 37,
    x1: 43,
    y: 5.35
  }, {
    id: "a-high",
    x0: 39,
    x1: 44,
    y: 8.35
  }, {
    id: "i-walk-1",
    x0: 67,
    x1: 73,
    y: 6.35
  }, {
    id: "i-walk-2",
    x0: 85,
    x1: 92,
    y: 8.35
  }, {
    id: "i-walk-3",
    x0: 87,
    x1: 93,
    y: 11.35
  }, {
    id: "c-walk-1",
    x0: 113,
    x1: 119,
    y: 10.35
  }, {
    id: "c-walk-2",
    x0: 124,
    x1: 130,
    y: 9.35
  }, {
    id: "c-walk-3",
    x0: 134,
    x1: 141,
    y: 8.35
  }],
  spawns: [{
    x: 41,
    type: "wasp",
    lane: 4.6
  }, {
    x: 48,
    type: "wasp",
    lane: 6.4
  }, {
    x: 78,
    type: "wasp",
    lane: 4
  }, {
    x: 93,
    type: "wasp",
    lane: 5.2
  }, {
    x: 122,
    type: "wasp",
    lane: 4.6
  }, {
    x: 138,
    type: "wasp",
    lane: 6.4
  }],
  spawnClear: {
    before: 10,
    after: 12
  },
  finish: {
    x0: 146,
    x1: 152
  }
};
export const TRANSFORM_FIXTURES = {
  "transform-v1": s,
  "monster-g2-neck-flip": {
    id: "monster-g2-neck-flip",
    bounds: {
      x0: 66,
      x1: 208
    },
    origin: {
      x: 66,
      z: 0
    },
    altitudeProfile: [{
      s: 66,
      alt: 8
    }, {
      s: 89,
      alt: 12
    }, {
      s: 140,
      alt: 28
    }, {
      s: 160,
      alt: 28
    }, {
      s: 176,
      alt: 34
    }, {
      s: 208,
      alt: 34
    }],
    targetPlaySeconds: {
      min: 10,
      max: 30
    },
    run: {
      startScroll: 85,
      endScroll: 194,
      minimumScrollSpeed: 3.2,
      followLeadTiles: 16,
      lookAheadTiles: 2.5,
      portraitMinAspect: 0.9,
      playerSpawn: {
        x: 93.5,
        y: 3
      }
    },
    bands: [{
      id: "haunch-ribline",
      kind: "exterior",
      s0: 66,
      s1: 154,
      headingDeg: 0,
      label: "OUTER HAUNCH",
      shipState: "INTERCEPT",
      atmosphere: {
        bg: 2306102,
        fogNear: 28,
        fogFar: 72
      },
      tone: [1, 1.02, 1.04],
      hullDrop: 30,
      hullWall: {
        height: 22,
        pattern: "solid"
      },
      skyline: [{
        atS: 75,
        top: 34,
        height: 30,
        width: 9,
        depth: -26
      }, {
        atS: 96,
        top: 38,
        height: 32,
        width: 8,
        depth: -22
      }, {
        atS: 115,
        top: 42,
        height: 30,
        width: 10,
        depth: -27
      }, {
        atS: 131,
        top: 44,
        height: 26,
        width: 8,
        depth: -24
      }]
    }, {
      id: "neck-interior",
      kind: "interior",
      s0: 154,
      s1: 208,
      headingDeg: 90,
      label: "NECK INTERIOR",
      shipState: "CONTAIN",
      atmosphere: {
        bg: 2762019,
        fogNear: 15,
        fogFar: 46
      },
      tone: [1.24, 1.13, 1.06],
      interior: {
        ceilingAbove: 11,
        wallDepth: -3.6,
        ribEvery: 7,
        alcoveEvery: 5,
        pipeEvery: 9
      },
      skyline: [],
      threatSockets: [{
        id: "g2-polyp-low",
        kind: "polyp",
        x: 171,
        y: 6.4,
        depth: -2.4
      }, {
        id: "g2-polyp-high",
        kind: "polyp",
        x: 185,
        y: 9.4,
        depth: -2.4
      }, {
        id: "g2-hazard-duct",
        kind: "hazard",
        x: 189,
        y: 4,
        depth: -1.2
      }]
    }],
    events: [{
      id: "neck-plate-flip",
      kind: "flip",
      seamS: 154,
      fromBand: 0,
      toBand: 1,
      armMsg: "ACCESS PLATE OPEN — GO IN",
      label: "FLIP INWARD",
      haltOffset: 14,
      seamPullTiles: 16,
      plateRamp: true,
      gate: {
        body: "outer haunch / ribline -> lower neck interior",
        haltS: 140,
        pivotS: 154,
        normalBeforeDeg: 0,
        normalAfterDeg: 90,
        altBefore: 28,
        altAfter: 28,
        aprons: {
          entry: {
            s0: 140,
            s1: 154
          },
          exit: {
            s0: 154,
            s1: 160
          }
        },
        plate: {
          id: "g2-access-plate",
          tiles: 11
        },
        carry: {
          id: "g2-plate-deck",
          s0: 149,
          s1: 160,
          y: 3
        },
        connectors: [{
          id: "g2-low",
          y: 3,
          before: "open",
          during: "carried",
          after: "open"
        }, {
          id: "g2-mid",
          y: 6.35,
          before: "open",
          during: "occluded",
          after: "open"
        }, {
          id: "g2-high",
          y: 9.35,
          before: "open",
          during: "occluded",
          after: "open"
        }],
        forwardExits: ["g2-low", "g2-mid", "g2-high"],
        darePocket: {
          s0: 126,
          s1: 129,
          floorY: 1.2,
          rejoinS: 129,
          retreatSec: 0.8
        },
        sockets: {
          enemy: ["g2-polyp-low", "g2-polyp-high", "g2-hazard-duct"],
          reward: [{
            id: "g2-pocket-reward",
            x: 127.5,
            y: 2
          }]
        },
        mechanism: "access-plate"
      }
    }],
    groundRuns: [{
      x0: 66,
      x1: 100,
      y: 3
    }, {
      x0: 100,
      x1: 102,
      gap: true
    }, {
      x0: 102,
      x1: 110,
      y: 3
    }, {
      x0: 110,
      x1: 112,
      gap: true
    }, {
      x0: 112,
      x1: 120,
      y: 3
    }, {
      x0: 120,
      x1: 122,
      gap: true
    }, {
      x0: 122,
      x1: 126,
      y: 3
    }, {
      x0: 126,
      x1: 129,
      gap: true
    }, {
      x0: 129,
      x1: 149,
      y: 3
    }, {
      x0: 149,
      x1: 160,
      y: 3
    }, {
      x0: 160,
      x1: 178,
      y: 3
    }, {
      x0: 178,
      x1: 180,
      gap: true
    }, {
      x0: 180,
      x1: 192,
      y: 4
    }, {
      x0: 192,
      x1: 208,
      y: 4
    }],
    solidRects: [{
      id: "g2-rib-a",
      x0: 130,
      x1: 131,
      y0: 5,
      y1: 11
    }, {
      id: "g2-rib-b",
      x0: 135,
      x1: 136,
      y0: 7,
      y1: 13
    }],
    platforms: [{
      id: "r3-scapular-plate",
      x0: 104,
      x1: 118,
      y: 5.35
    }, {
      id: "r1-ridge-a",
      x0: 107,
      x1: 113,
      y: 8.35
    }, {
      id: "r1-ridge-b",
      x0: 115,
      x1: 125,
      y: 9.35
    }, {
      id: "r1-ridge-c",
      x0: 125,
      x1: 131,
      y: 10.35
    }, {
      id: "r2-stub-low",
      x0: 131,
      x1: 134,
      y: 5.35
    }, {
      id: "r2-stub-mid",
      x0: 132,
      x1: 135,
      y: 8.35
    }, {
      id: "r2-apex",
      x0: 131,
      x1: 135,
      y: 10.85
    }, {
      id: "r5-pocket-shelf",
      x0: 126,
      x1: 129,
      y: 1.2
    }, {
      id: "c-mid-shelf",
      x0: 138,
      x1: 149,
      y: 6.35
    }, {
      id: "c-high-shelf",
      x0: 139,
      x1: 149,
      y: 9.35
    }, {
      id: "i-mid-catwalk",
      x0: 160,
      x1: 168,
      y: 6.35
    }, {
      id: "i-high-catwalk",
      x0: 162,
      x1: 170,
      y: 9.35
    }, {
      id: "i-mid-b",
      x0: 169,
      x1: 177,
      y: 6.35
    }],
    spawns: [{
      x: 106,
      type: "wasp",
      lane: 4.2
    }, {
      x: 118,
      type: "wasp",
      lane: 7
    }, {
      x: 133,
      type: "wasp",
      lane: 7
    }, {
      x: 136,
      type: "hound",
      dir: -1,
      delayMs: 0,
      patrol: {
        x0: 129.5,
        x1: 147.5
      }
    }, {
      x: 169,
      type: "wasp",
      lane: 4
    }, {
      x: 177,
      type: "wasp",
      lane: 6.4
    }],
    spawnClear: {
      before: 12,
      after: 14
    },
    finish: {
      x0: 200,
      x1: 208
    }
  }
};
export let TRANSFORM_FIXTURE = s;
export function selectTransformFixture(_0x266a6d) {
  TRANSFORM_FIXTURE = TRANSFORM_FIXTURES[_0x266a6d] || s;
  TRANSFORM_PATH = buildTransformPath(TRANSFORM_FIXTURE, _0x2a4225);
  TRANSFORM_BEND_S = transformBendSList(TRANSFORM_FIXTURE);
  return TRANSFORM_FIXTURE;
}
export function buildTransformPath(_0x4ac6dd, _0x94cc95) {
  const _0x137ffb = _0x94cc95.transform;
  const _0x2c1224 = _0x137ffb.chamferTiles / 2;
  const _0x335ac0 = [{
    s0: _0x4ac6dd.bands[0].s0,
    x: _0x4ac6dd.origin.x,
    z: _0x4ac6dd.origin.z,
    heading: 0
  }];
  for (const _0x1effcb of _0x4ac6dd.events) {
    for (const _0x384e3a of [_0x1effcb.seamS - _0x2c1224, _0x1effcb.seamS + _0x2c1224]) {
      const _0x31ce4d = _0x335ac0[_0x335ac0.length - 1];
      const _0x3a24b8 = _0x384e3a - _0x31ce4d.s0;
      _0x335ac0.push({
        s0: _0x384e3a,
        x: _0x31ce4d.x + Math.cos(_0x31ce4d.heading) * _0x3a24b8,
        z: _0x31ce4d.z - Math.sin(_0x31ce4d.heading) * _0x3a24b8,
        heading: _0x31ce4d.heading + _0x137ffb.snapDeg * _0x7bbec
      });
    }
  }
  return {
    segs: _0x335ac0,
    profile: _0x4ac6dd.altitudeProfile.map(_0x45c31c => ({
      ..._0x45c31c
    }))
  };
}
export let TRANSFORM_PATH = buildTransformPath(TRANSFORM_FIXTURE, _0x2a4225);
export function transformBendSList(_0x5d4c81) {
  return _0x5d4c81.events.map(_0x187efc => _0x187efc.seamS);
}
export let TRANSFORM_BEND_S = transformBendSList(TRANSFORM_FIXTURE);
function i(_0x5d83c1, _0x42bc69) {
  for (let _0x1dddee = _0x5d83c1.length - 1; _0x1dddee >= 0; _0x1dddee--) {
    if (_0x42bc69 >= _0x5d83c1[_0x1dddee].s0) {
      return _0x5d83c1[_0x1dddee];
    }
  }
  return _0x5d83c1[0];
}
export function transformHeadingAt(_0x5b28f1, _0x1e52ac) {
  return i(_0x5b28f1.segs, _0x1e52ac).heading;
}
export function transformYawAt(_0x145860, _0x36ba51, _0x54b2e0) {
  const _0x11367a = _0x145860.segs;
  if (!(_0x54b2e0 > 0)) {
    return transformHeadingAt(_0x145860, _0x36ba51);
  }
  let _0x4dc95f = _0x11367a[0].heading;
  for (let _0x48d544 = 1; _0x48d544 < _0x11367a.length && !(_0x36ba51 <= _0x11367a[_0x48d544].s0 - _0x54b2e0); _0x48d544++) {
    const _0x3bfb46 = _0x11367a[_0x48d544].heading - _0x11367a[_0x48d544 - 1].heading;
    const _0x1ac733 = Math.min(1, Math.max(0, (_0x36ba51 - (_0x11367a[_0x48d544].s0 - _0x54b2e0)) / (_0x54b2e0 * 2)));
    _0x4dc95f += _0x3bfb46 * _0x1ac733 * _0x1ac733 * (3 - _0x1ac733 * 2);
  }
  return _0x4dc95f;
}
export function transformAltAt(_0x128332, _0x16c682) {
  const _0x296fa0 = _0x128332.profile;
  if (_0x16c682 <= _0x296fa0[0].s) {
    return _0x296fa0[0].alt;
  }
  for (let _0x2c1865 = 1; _0x2c1865 < _0x296fa0.length; _0x2c1865++) {
    if (_0x16c682 > _0x296fa0[_0x2c1865].s) {
      continue;
    }
    const _0x17bd4a = _0x296fa0[_0x2c1865 - 1];
    const _0x337d50 = _0x296fa0[_0x2c1865];
    return _0x17bd4a.alt + (_0x337d50.alt - _0x17bd4a.alt) * ((_0x16c682 - _0x17bd4a.s) / (_0x337d50.s - _0x17bd4a.s));
  }
  return _0x296fa0[_0x296fa0.length - 1].alt;
}
export function transformGradeAt(_0x31afb9, _0x18c5be) {
  const _0x4e0e78 = _0x31afb9.profile;
  for (let _0x5d6a8d = 1; _0x5d6a8d < _0x4e0e78.length; _0x5d6a8d++) {
    if (!(_0x18c5be > _0x4e0e78[_0x5d6a8d].s)) {
      return (_0x4e0e78[_0x5d6a8d].alt - _0x4e0e78[_0x5d6a8d - 1].alt) / (_0x4e0e78[_0x5d6a8d].s - _0x4e0e78[_0x5d6a8d - 1].s);
    }
  }
  return 0;
}
export function transformPathAt(_0x7a7fe2, _0x61e8c7, _0x831259 = {
  x: 0,
  z: 0,
  alt: 0
}) {
  const _0x3b95fd = i(_0x7a7fe2.segs, _0x61e8c7);
  const _0x1d400e = _0x61e8c7 - _0x3b95fd.s0;
  _0x831259.x = _0x3b95fd.x + Math.cos(_0x3b95fd.heading) * _0x1d400e;
  _0x831259.z = _0x3b95fd.z - Math.sin(_0x3b95fd.heading) * _0x1d400e;
  _0x831259.alt = transformAltAt(_0x7a7fe2, _0x61e8c7);
  return _0x831259;
}
export function transformBandIndexAt(_0x318926, _0x2e4f97) {
  const _0x5a8145 = _0x318926.bands;
  for (let _0x19cebb = _0x5a8145.length - 1; _0x19cebb >= 0; _0x19cebb--) {
    if (_0x2e4f97 >= _0x5a8145[_0x19cebb].s0) {
      return _0x19cebb;
    }
  }
  return 0;
}
export function transformBandHeading(_0x3c5516, _0x22ca9f, _0xc1c23a) {
  return _0x22ca9f * 2 * _0xc1c23a.transform.snapDeg * _0x7bbec;
}
export function transformTimeline(_0x331c4a) {
  const _0x5a39c1 = _0x331c4a.transform;
  const _0x359265 = _0x5a39c1.windUpMs;
  const _0x2dae7f = _0x359265 + _0x5a39c1.snap1Ms;
  const _0x6489e2 = _0x2dae7f + _0x5a39c1.holdMs;
  const _0x4aa00a = _0x6489e2 + _0x5a39c1.snap2Ms;
  const _0x208fd8 = _0x4aa00a + _0x5a39c1.settleMs;
  return {
    t1: _0x359265,
    t2: _0x2dae7f,
    t3: _0x6489e2,
    t4: _0x4aa00a,
    t5: _0x208fd8,
    t6: _0x208fd8 + _0x5a39c1.resumeMs
  };
}
export function transformEventTotalMs(_0x540ddb) {
  return transformTimeline(_0x540ddb).t6;
}
export function transformYawDeltaDeg(_0x4ae018, _0x30bed8) {
  const _0x18c2ff = _0x30bed8.transform;
  const _0x3fd066 = transformTimeline(_0x30bed8);
  const _0x56bca8 = _0x18c2ff.snapDeg;
  if (_0x4ae018 <= 0) {
    return 0;
  }
  if (_0x4ae018 < _0x3fd066.t1) {
    const _0x45f686 = _0x4ae018 / _0x18c2ff.windUpMs;
    return _0x18c2ff.windUpDeg * _0x45f686 * _0x45f686;
  }
  if (_0x4ae018 < _0x3fd066.t2) {
    const _0x5a6e61 = (_0x4ae018 - _0x3fd066.t1) / _0x18c2ff.snap1Ms;
    return _0x18c2ff.windUpDeg + (_0x56bca8 - _0x18c2ff.windUpDeg) * _0x1d49fb(_0x5a6e61, _0x18c2ff.backS);
  }
  if (_0x4ae018 < _0x3fd066.t3) {
    return _0x56bca8;
  }
  if (_0x4ae018 < _0x3fd066.t4) {
    const _0x4f0e00 = (_0x4ae018 - _0x3fd066.t3) / _0x18c2ff.snap2Ms;
    return _0x56bca8 + _0x56bca8 * _0x1d49fb(_0x4f0e00, _0x18c2ff.backS);
  }
  return _0x56bca8 * 2;
}
export function transformScrollVel(_0x1d3fc0, _0x3f3eea, _0x1c0a1e) {
  const _0x2288b8 = transformTimeline(_0x1c0a1e);
  if (_0x1d3fc0 < _0x2288b8.t5) {
    return 0;
  }
  const _0x427b85 = o((_0x1d3fc0 - _0x2288b8.t5) / _0x1c0a1e.transform.resumeMs);
  return _0x3f3eea * _0x427b85 * _0x427b85;
}
export function transformSeamPull(_0x5a4fd7, _0x250390, _0x2f6359) {
  const _0xf9015e = _0x250390.transform;
  const _0x26bfed = _0x2f6359 && _0x2f6359.seamPullTiles !== undefined ? _0x2f6359.seamPullTiles : _0xf9015e.seamPullTiles;
  const _0x4808bb = transformTimeline(_0x250390);
  if (_0x5a4fd7 <= _0x4808bb.t2) {
    return 0;
  }
  if (_0x5a4fd7 >= _0x4808bb.t5) {
    return _0x26bfed;
  }
  const _0x79b84e = (_0x5a4fd7 - _0x4808bb.t2) / (_0x4808bb.t5 - _0x4808bb.t2);
  return _0x26bfed * (1 - (1 - _0x79b84e) * (1 - _0x79b84e) * (1 - _0x79b84e));
}
export function transformScrollOffset(_0x2e2d01, _0x163693, _0x36e17c, _0x116326) {
  const _0x5ad763 = transformTimeline(_0x36e17c);
  const _0x6ea3ee = transformSeamPull(_0x2e2d01, _0x36e17c, _0x116326);
  if (_0x2e2d01 <= _0x5ad763.t5) {
    return _0x6ea3ee;
  }
  const _0x209424 = o((_0x2e2d01 - _0x5ad763.t5) / _0x36e17c.transform.resumeMs);
  return _0x6ea3ee + _0x163693 * (_0x36e17c.transform.resumeMs / 1000) * (_0x209424 * _0x209424 * _0x209424) / 3;
}
export function transformCoverAjar(_0x3b6f05, _0x1c5222) {
  const _0x1cd382 = _0x1c5222.transform.cover;
  if (_0x3b6f05 <= _0x1cd382.unlatchMs) {
    return 0;
  }
  const _0x28a10b = o((_0x3b6f05 - _0x1cd382.unlatchMs) / _0x1cd382.ajarMs);
  return _0x1cd382.ajarFrac * _0x1d49fb(_0x28a10b, _0x1c5222.transform.backS);
}
export function transformPanelState(_0x30dbc8, _0x50254e, _0x1eb2b6, _0x257fb9 = {}) {
  const _0x53f3aa = _0x1eb2b6.transform;
  const _0x277d01 = _0x53f3aa.cover;
  const _0x3fe71c = transformTimeline(_0x1eb2b6);
  _0x257fb9.visible = true;
  _0x257fb9.jolt = 0;
  _0x257fb9.open = 0;
  _0x257fb9.seated = false;
  if (_0x50254e.kind === "flip") {
    _0x257fb9.open = _0x277d01.ajarFrac;
    if (_0x30dbc8 >= _0x3fe71c.t1) {
      if (_0x30dbc8 < _0x3fe71c.t2) {
        const _0x5c8a55 = (_0x30dbc8 - _0x3fe71c.t1) / _0x53f3aa.snap1Ms;
        _0x257fb9.open = _0x277d01.ajarFrac + (_0x277d01.snapFrac - _0x277d01.ajarFrac) * _0x1d49fb(_0x5c8a55, _0x53f3aa.backS);
      } else if (_0x30dbc8 < _0x3fe71c.t2 + _0x277d01.relockMs) {
        const _0x380c65 = (_0x30dbc8 - _0x3fe71c.t2) / _0x277d01.relockMs;
        _0x257fb9.open = _0x277d01.snapFrac + (1 - _0x277d01.snapFrac) * _0x380c65 * _0x380c65;
      } else {
        _0x257fb9.open = 1;
        _0x257fb9.seated = true;
      }
    }
    _0x257fb9.jolt = _0x53f3aa.panelJoltTiles * _0x257fb9.open;
    return _0x257fb9;
  }
  if (_0x30dbc8 <= 0) {
    return _0x257fb9;
  } else if (_0x30dbc8 < _0x3fe71c.t1) {
    _0x257fb9.jolt = _0x53f3aa.panelJoltTiles * (_0x30dbc8 / _0x53f3aa.windUpMs);
    return _0x257fb9;
  } else {
    _0x257fb9.jolt = _0x53f3aa.panelJoltTiles;
    if (_0x30dbc8 < _0x3fe71c.t2) {
      _0x257fb9.open = _0x1d49fb((_0x30dbc8 - _0x3fe71c.t1) / _0x53f3aa.snap1Ms, _0x277d01.blowBackS);
      return _0x257fb9;
    } else {
      _0x257fb9.open = 1;
      return _0x257fb9;
    }
  }
}
export function transformVapor(_0x159ee2, _0x4d8236, _0x264dee = {
  density: 0,
  reach: 0
}) {
  const _0x4a9908 = transformTimeline(_0x4d8236);
  _0x264dee.density = 0;
  _0x264dee.reach = 0;
  if (_0x159ee2 >= _0x4a9908.t4) {
    _0x264dee.reach = 1;
    return _0x264dee;
  }
  if (_0x159ee2 <= _0x4a9908.t1) {
    return _0x264dee;
  }
  const _0x38c724 = (_0x159ee2 - _0x4a9908.t1) / (_0x4a9908.t4 - _0x4a9908.t1);
  _0x264dee.reach = 1 - (1 - _0x38c724) * (1 - _0x38c724);
  if (_0x159ee2 < _0x4a9908.t2) {
    const _0x392ef0 = (_0x159ee2 - _0x4a9908.t1) / (_0x4a9908.t2 - _0x4a9908.t1);
    _0x264dee.density = _0x392ef0 * (2 - _0x392ef0);
  } else {
    const _0x1f6806 = (_0x159ee2 - _0x4a9908.t2) / (_0x4a9908.t4 - _0x4a9908.t2);
    _0x264dee.density = (1 - _0x1f6806) * (1 - _0x1f6806);
  }
  return _0x264dee;
}
export function bandSlamOffset(_0x4adfd2, _0x40abe6, _0xff0468, _0x1a4f29 = {
  phase: "hidden",
  dy: 0
}) {
  const _0xf3dfd = _0xff0468.transform.assembly;
  const _0x2182dd = _0x4adfd2 - (_0xf3dfd.startMs + _0x40abe6 * _0xf3dfd.perColMs);
  if (_0x2182dd < 0) {
    _0x1a4f29.phase = "hidden";
    _0x1a4f29.dy = 0;
    return _0x1a4f29;
  }
  if (_0x2182dd < _0xf3dfd.dropMs) {
    const _0x5fcacb = _0x2182dd / _0xf3dfd.dropMs;
    _0x1a4f29.phase = "drop";
    _0x1a4f29.dy = _0xf3dfd.dropTiles * (1 - _0x5fcacb * _0x5fcacb);
    return _0x1a4f29;
  }
  if (_0x2182dd < _0xf3dfd.dropMs + _0xf3dfd.dipMs) {
    _0x1a4f29.phase = "dip";
    _0x1a4f29.dy = -_0xf3dfd.dipTiles;
    return _0x1a4f29;
  } else {
    _0x1a4f29.phase = "locked";
    _0x1a4f29.dy = 0;
    return _0x1a4f29;
  }
}
export function bandSlamLockMs(_0x1e1f49, _0x177aaf) {
  const _0xb35436 = _0x1e1f49.transform.assembly;
  return _0xb35436.startMs + (_0x177aaf - 1) * _0xb35436.perColMs + _0xb35436.dropMs + _0xb35436.dipMs;
}
export function transformAtmosphereMix(_0x22fe2b, _0x207028) {
  const _0x40721e = transformTimeline(_0x207028);
  return o((_0x22fe2b - _0x40721e.t1) / (_0x40721e.t4 - _0x40721e.t1));
}
export function transformHaltS(_0x160681, _0x49c497) {
  return _0x160681.seamS - (_0x160681.haltOffset !== undefined ? _0x160681.haltOffset : _0x49c497.transform.haltOffset);
}
export function transformTriggerS(_0x313547, _0x49bf10) {
  return _0x313547.seamS + _0x49bf10.transform.triggerOffset;
}
export function transformFrontierS(_0x4fd8e7, _0x534dfa) {
  return _0x4fd8e7.seamS + _0x534dfa.transform.thresholdTiles - _0x534dfa.transform.clampMargin;
}
export function transformSealS(_0x5dc5d2, _0x2f5341) {
  return _0x5dc5d2.seamS + _0x2f5341.transform.sealInset;
}
export function buildTransformLevel(_0x21994d, _0x9c57ad = TRANSFORM_FIXTURE) {
  const _0xccb39a = _0x127855(_0x21994d);
  const _0x145a73 = _0x9c57ad.bounds;
  for (const _0x2f16f5 of _0x9c57ad.groundRuns) {
    for (let _0x299d35 = _0x2f16f5.x0; _0x299d35 < _0x2f16f5.x1; _0x299d35++) {
      _0xccb39a.groundH[_0x299d35] = _0x2f16f5.gap ? _0x5b7ab9 : _0x2f16f5.y;
    }
  }
  const _0x31aa73 = _0xccb39a.platforms.filter(_0x3123cf => _0x3123cf.x1 <= _0x145a73.x0 || _0x3123cf.x0 >= _0x145a73.x1);
  for (const _0x487fa9 of _0x9c57ad.platforms) {
    _0x31aa73.push({
      ..._0x487fa9
    });
  }
  return {
    groundH: _0xccb39a.groundH,
    platforms: _0x31aa73,
    solidRects: (_0x9c57ad.solidRects || []).map(_0x548257 => ({
      ..._0x548257
    })),
    chunkLog: _0xccb39a.chunkLog.concat(_0x9c57ad.id),
    fixture: _0x9c57ad
  };
}