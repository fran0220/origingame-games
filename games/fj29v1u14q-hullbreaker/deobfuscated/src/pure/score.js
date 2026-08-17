import { CONFIG as _0x19983f } from "../config.js";
export const SCORE = _0x19983f.score;
export const SCORE_RUN = Object.freeze({
  ..._0x19983f.score,
  gain: Object.freeze({
    airborne_kill: 14,
    launch_kill: 10,
    link: 6,
    reclaim: 18,
    wager: 25,
    recatch: 20,
    ground_kill: 3
  }),
  drain: Object.freeze({
    moving: 7,
    stopped: 22
  })
});
export const RUN_FALLBACK = Object.freeze({
  minDropTiles: 1.2,
  dropAboveTiles: 1.2,
  tossVx: 5,
  tossVy: -3,
  groundKnockTiles: 1.5,
  iframesMs: 1400,
  messageMs: 1100,
  maxConsecutive: 2,
  recoverTiles: 8
});
export function scoreNotch(_0xfb7a00, _0x598c62 = SCORE) {
  let _0x3cd526 = 0;
  for (let _0x180eb9 = 0; _0x180eb9 < _0x598c62.notches.length; _0x180eb9++) {
    if (_0xfb7a00 >= _0x598c62.notches[_0x180eb9]) {
      _0x3cd526 = _0x180eb9 + 1;
    }
  }
  return _0x3cd526;
}
export function scoreNotchMult(_0x352aa8, _0x14d5fa = SCORE) {
  return _0x14d5fa.notchMult[Math.min(Math.max(_0x352aa8, 0), _0x14d5fa.notchMult.length - 1)];
}
export function scoreFireRateMult(_0x287810, _0x4f143e = SCORE) {
  if (_0x287810 >= 1) {
    return _0x4f143e.warmFireMult;
  } else {
    return 1;
  }
}
export function scoreChargeGain(_0x1d547b, _0x906e22 = SCORE) {
  return _0x906e22.gain[_0x1d547b] || 0;
}
export function scoreThreatGain(_0x4c92b2, _0x4f3699, _0x27dfba = SCORE) {
  return (_0x27dfba.threat[_0x4c92b2] || 0) * scoreNotchMult(_0x4f3699, _0x27dfba);
}
export function scoreApplyGain(_0x13209b, _0x1b387f, _0x66be0a = SCORE) {
  return Math.min(_0x66be0a.max, _0x13209b + scoreChargeGain(_0x1b387f, _0x66be0a));
}
export function scoreDrainPerSec(_0x47384c, _0x1515ad = SCORE) {
  if (!_0x47384c.grounded || _0x47384c.traversal || _0x47384c.launchGrace) {
    return 0;
  } else if (Math.abs(_0x47384c.vx) < _0x1515ad.stallSpeed) {
    return _0x1515ad.drain.stopped;
  } else {
    return _0x1515ad.drain.moving;
  }
}
export function scoreStep(_0x260fb4, _0x4541bc, _0x1ff03d, _0x200fe1 = 0) {
  return Math.max(_0x200fe1, Math.min(SCORE.max, _0x260fb4 - _0x4541bc * _0x1ff03d));
}
export function scoreClassification(_0x25bd1a, _0x2e7998 = SCORE) {
  let _0x488643 = _0x2e7998.classification[0][1];
  for (const _0x3617ad of _0x2e7998.classification) {
    if (_0x25bd1a >= _0x3617ad[0]) {
      _0x488643 = _0x3617ad[1];
    }
  }
  return _0x488643;
}
export function scoreNotchGlyphs(_0x55328c, _0x22eb20 = SCORE) {
  const _0x5b53e3 = _0x22eb20.notches.length;
  const _0x40c4fb = Math.min(Math.max(_0x55328c, 0), _0x5b53e3);
  return "▮".repeat(_0x40c4fb) + "▯".repeat(_0x5b53e3 - _0x40c4fb);
}
export function scoreConnectorAt(_0x45ccb5, _0x38cab2, _0x16886c, _0x6337d2) {
  let _0x3310cc = null;
  let _0x502ef1 = _0x6337d2 * _0x6337d2;
  for (const _0x3f58bd of _0x45ccb5) {
    const _0x45a6f4 = (_0x3f58bd.x - _0x38cab2) * (_0x3f58bd.x - _0x38cab2) + (_0x3f58bd.y - _0x16886c) * (_0x3f58bd.y - _0x16886c);
    if (_0x45a6f4 <= _0x502ef1) {
      _0x502ef1 = _0x45a6f4;
      _0x3310cc = _0x3f58bd.id;
    }
  }
  return _0x3310cc;
}
export function scoreRoutesCompleted(_0x54c0f9, _0xecec14, _0x21ec3f = SCORE.routeMinConnectors) {
  const _0x1f6e75 = [];
  for (const _0x5802c8 of _0x54c0f9) {
    let _0x1c8473 = 0;
    for (const _0x27fbb7 of _0xecec14) {
      if (_0x1c8473 >= _0x5802c8.connectorIds.length) {
        break;
      }
      if (_0x27fbb7 === _0x5802c8.connectorIds[_0x1c8473]) {
        _0x1c8473++;
      }
    }
    if (_0x1c8473 >= _0x21ec3f) {
      _0x1f6e75.push(_0x5802c8.id);
    }
  }
  return _0x1f6e75;
}