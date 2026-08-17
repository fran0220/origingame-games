import { CONFIG as _0x1bfc74 } from "../config.js";
import { ACTIVE_SLICE as _0x20c041, SCORE_ENABLED as _0xa5c882 } from "../mode.js";
import { SCORE_RUN as _0x13b1a7, scoreApplyGain as _0x3a9951, scoreClassification as _0x399444, scoreConnectorAt as _0x21e6a6, scoreDrainPerSec as _0x566066, scoreFireRateMult as _0x5cee4c, scoreNotch as _0x5b640a, scoreRoutesCompleted as _0x1b48d2, scoreStep as _0x3d5253, scoreThreatGain as _0x3fb140 } from "../pure/score.js";
import { gameMs as _0x3270c9, sliceStats as _0x397c28 } from "./time.js";
const p = _0x20c041 ? _0x1bfc74.score : _0x13b1a7;
const x = _0x20c041 ? _0x20c041.darePocket : null;
export const scoreEvents = [];
const f = ["airborne_kill", "launch_kill", "link", "reclaim", "wager", "recatch", "ground_kill"];
function k() {
  const _0x5bf62f = {};
  for (const _0x59b466 of f) {
    _0x5bf62f[_0x59b466] = 0;
  }
  return _0x5bf62f;
}
let m = k();
const w = {
  charge: 0,
  threat: 0,
  chargeFloor: 0,
  airMs: 0,
  groundMs: 0,
  stallMs: 0,
  hotMs: 0,
  playMs: 0,
  stallAcc: 0,
  launchCount: 0,
  lastLaunch: null,
  lowMarginAt: 0,
  lowMargin: Infinity,
  rewardHeld: false,
  wagerDone: false,
  visited: [],
  shock: null
};
export function scoreEnabled() {
  return _0xa5c882;
}
export function scoreCharge() {
  return w.charge;
}
export function scoreNotchNow() {
  if (_0xa5c882) {
    return _0x5b640a(w.charge, p);
  } else {
    return 0;
  }
}
export function scoreThreat() {
  return w.threat;
}
export function scoreSetbacks() {
  return _0x397c28.setbacks;
}
export function scoreFireMult() {
  if (_0xa5c882) {
    return _0x5cee4c(_0x5b640a(w.charge, p), p);
  } else {
    return 1;
  }
}
function y(_0x53c423, _0x1de33e, _0x453e4f) {
  const _0x298615 = _0x5b640a(w.charge, p);
  if (_0x453e4f) {
    w.threat += _0x3fb140(_0x53c423, _0x298615, p);
    w.charge = _0x3a9951(w.charge, _0x53c423, p);
  }
  if (m[_0x53c423] !== undefined) {
    m[_0x53c423]++;
  }
  scoreEvents.push({
    t: _0x3270c9,
    notch: _0x298615,
    type: _0x53c423,
    ..._0x1de33e
  });
  if (scoreEvents.length > p.eventCap) {
    scoreEvents.shift();
  }
}
export function scoreKill(_0x4bce4d, _0x3d87aa, _0x5c54c3) {
  if (!_0xa5c882) {
    return;
  }
  const _0x1ff60a = _0x3d87aa === "OL";
  y(!_0x1ff60a && !_0x5c54c3.grounded ? "airborne_kill" : "ground_kill", {
    x: _0x5c54c3.x,
    y: _0x5c54c3.y,
    kind: _0x4bce4d,
    weapon: _0x3d87aa,
    vy: _0x5c54c3.vy
  }, true);
  const _0x4964f6 = w.lastLaunch;
  if (!_0x1ff60a && _0x4964f6 && _0x3270c9 - _0x4964f6.at <= p.launchGraceMs) {
    y("launch_kill", {
      x: _0x5c54c3.x,
      y: _0x5c54c3.y,
      kind: _0x4bce4d,
      weapon: _0x3d87aa,
      launch: _0x4964f6.kind
    }, true);
  }
}
export function scoreLaunch(_0x3b6d3c, _0x3dffde, _0x2d3f6a) {
  if (_0xa5c882) {
    w.launchCount++;
    w.lastLaunch = {
      kind: _0x3b6d3c,
      at: _0x3270c9,
      y: _0x2d3f6a,
      linked: false
    };
    if (_0x5b640a(w.charge, p) >= p.notches.length) {
      w.shock = {
        x: _0x3dffde,
        y: _0x2d3f6a,
        at: _0x3270c9
      };
    }
  }
}
export function scoreContact(_0x571fc6, _0x24851d) {
  if (!_0xa5c882) {
    return;
  }
  const _0x7fd1a6 = w.lastLaunch;
  if (!_0x7fd1a6 || _0x7fd1a6.linked || _0x7fd1a6.kind === "air") {
    return;
  }
  const _0x19d7e7 = _0x571fc6 - _0x7fd1a6.y;
  if (!(Math.abs(_0x19d7e7) < p.linkDropTiles)) {
    _0x7fd1a6.linked = true;
    y("link", {
      x: 0,
      y: _0x571fc6,
      dy: Math.round(_0x19d7e7 * 100) / 100,
      verb: _0x24851d || _0x7fd1a6.kind
    }, true);
  }
}
export function consumeLaunchShock() {
  const _0x25029c = w.shock;
  w.shock = null;
  return _0x25029c;
}
export function scoreRewardTaken(_0x1f0b3f, _0x311c3e, _0x1253c4) {
  if (_0xa5c882) {
    if (x && _0x1f0b3f === x.reward.letter) {
      w.rewardHeld = true;
    }
    scoreEvents.push({
      t: _0x3270c9,
      notch: _0x5b640a(w.charge, p),
      type: "reward",
      letter: _0x1f0b3f,
      x: _0x311c3e,
      y: _0x1253c4
    });
    if (scoreEvents.length > p.eventCap) {
      scoreEvents.shift();
    }
  }
}
export function scoreRecatch(_0x510592, _0x3d288e, _0x4146e4, _0x44b387) {
  if (_0xa5c882) {
    y("recatch", {
      x: _0x4146e4,
      y: _0x44b387,
      letter: _0x510592,
      msLeft: Math.round(_0x3d288e)
    }, true);
  }
}
export function scoreSetback(_0x1fd78c, _0x33cb40, _0x2d7527) {
  if (_0xa5c882) {
    w.charge = w.chargeFloor;
    y("setback", {
      kind: _0x1fd78c,
      phase: 0,
      y0: _0x33cb40,
      y1: _0x2d7527,
      x: 0
    }, false);
  }
}
export function scoreRunStart(_0x382948, _0x2d6af6, _0x5eecab) {
  if (_0xa5c882) {
    y("run_start", {
      seed: _0x382948,
      slice: _0x2d6af6,
      mode: _0x5eecab,
      x: 0,
      y: 0
    }, false);
  }
}
export function scoreRunEnd(_0x3db4ca) {
  if (_0xa5c882) {
    y("run_end", {
      reason: _0x3db4ca,
      threat: Math.round(w.threat),
      classification: _0x399444(w.threat, p),
      ms: Math.round(w.playMs),
      x: 0,
      y: 0
    }, false);
  }
}
export function updateScore(_0x4c24f2, _0x4cdb72) {
  if (!_0xa5c882) {
    return;
  }
  const _0x208fb0 = _0x4c24f2 * 1000;
  const _0x2de2ef = _0x4cdb72.traversalState !== "free";
  const _0x5b75d1 = !!w.lastLaunch && _0x3270c9 - w.lastLaunch.at <= p.launchGraceMs;
  w.playMs += _0x208fb0;
  if (_0x4cdb72.grounded) {
    w.groundMs += _0x208fb0;
  } else {
    w.airMs += _0x208fb0;
  }
  if (_0x5b640a(w.charge, p) >= 1) {
    w.hotMs += _0x208fb0;
  }
  const _0x2173d7 = _0x4cdb72.grounded && !_0x2de2ef && Math.abs(_0x4cdb72.vx) < p.stallSpeed;
  w.charge = _0x3d5253(w.charge, _0x566066({
    grounded: _0x4cdb72.grounded,
    traversal: _0x2de2ef,
    launchGrace: _0x5b75d1,
    vx: _0x4cdb72.vx
  }, p), _0x4c24f2, w.chargeFloor);
  if (_0x2173d7) {
    w.stallMs += _0x208fb0;
    w.stallAcc += _0x208fb0;
    while (w.stallAcc >= p.stallTickMs) {
      w.stallAcc -= p.stallTickMs;
      y("stall_tick", {
        x: _0x4cdb72.x,
        y: _0x4cdb72.y,
        ms: p.stallTickMs
      }, false);
    }
  } else {
    w.stallAcc = 0;
  }
  const _0x4836f2 = p.reclaim;
  if (_0x4cdb72.margin <= _0x4836f2.lowTiles) {
    w.lowMarginAt = _0x3270c9;
    w.lowMargin = Math.min(w.lowMargin, _0x4cdb72.margin);
  } else if (w.lowMarginAt) {
    const _0x30655c = _0x3270c9 - w.lowMarginAt;
    if (_0x30655c > _0x4836f2.windowMs) {
      w.lowMarginAt = 0;
      w.lowMargin = Infinity;
    } else if (_0x4cdb72.margin >= _0x4836f2.highTiles) {
      y("reclaim", {
        x: _0x4cdb72.x,
        y: _0x4cdb72.y,
        lowMargin: Math.round(w.lowMargin * 100) / 100,
        ms: Math.round(_0x30655c)
      }, true);
      w.lowMarginAt = 0;
      w.lowMargin = Infinity;
    }
  }
  if (x && w.rewardHeld && !w.wagerDone && _0x4cdb72.x < x.bounds.x0 && _0x4cdb72.margin > x.timing.minExitMarginTiles) {
    w.wagerDone = true;
    y("wager", {
      x: _0x4cdb72.x,
      y: _0x4cdb72.y,
      letter: x.reward.letter,
      exitMargin: Math.round(_0x4cdb72.margin * 100) / 100
    }, true);
  }
  if (_0x20c041) {
    const _0x449484 = _0x21e6a6(_0x20c041.connectors, _0x4cdb72.x, _0x4cdb72.y, p.routeRadiusTiles);
    if (_0x449484 && w.visited[w.visited.length - 1] !== _0x449484) {
      w.visited.push(_0x449484);
    }
  }
}
export function scoreSnapshot() {
  const _0x467ba7 = _0x5b640a(w.charge, p);
  return {
    enabled: _0xa5c882,
    tune: _0x20c041 ? "slice" : "run",
    charge: Math.round(w.charge * 100) / 100,
    notch: _0x467ba7,
    notchName: p.notchNames[Math.min(_0x467ba7, p.notchNames.length - 1)],
    chargeFloor: w.chargeFloor,
    threat: Math.round(w.threat),
    classification: _0x399444(w.threat, p),
    counts: {
      ...m
    },
    airMs: Math.round(w.airMs),
    groundMs: Math.round(w.groundMs),
    stallMs: Math.round(w.stallMs),
    hotMs: Math.round(w.hotMs),
    playMs: Math.round(w.playMs),
    launchCount: w.launchCount,
    minEdgeMargin: Number.isFinite(_0x397c28.minEdgeMargin) ? Math.round(_0x397c28.minEdgeMargin * 1000) / 1000 : null,
    routeIds: _0x20c041 ? _0x1b48d2(_0x20c041.routes, w.visited) : [],
    setbacks: _0x397c28.setbacks,
    events: scoreEvents.length
  };
}
export function resetScore() {
  scoreEvents.length = 0;
  m = k();
  w.charge = w.chargeFloor;
  w.threat = 0;
  w.airMs = 0;
  w.groundMs = 0;
  w.stallMs = 0;
  w.hotMs = 0;
  w.playMs = 0;
  w.stallAcc = 0;
  w.launchCount = 0;
  w.lastLaunch = null;
  w.lowMarginAt = 0;
  w.lowMargin = Infinity;
  w.rewardHeld = false;
  w.wagerDone = false;
  w.visited.length = 0;
  w.shock = null;
}