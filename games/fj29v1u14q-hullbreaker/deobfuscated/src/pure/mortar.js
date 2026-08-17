import { CONFIG as _0x1a1e4d } from "../config.js";
export function mortarArcX(_0x4dddb9, _0x34f646, _0x567621) {
  return _0x4dddb9 + (_0x34f646 - _0x4dddb9) * _0x567621;
}
export function mortarArcY(_0xbc269a, _0x3c79da, _0x75357e, _0x46ae5c) {
  return _0xbc269a + (_0x3c79da - _0xbc269a) * _0x46ae5c + _0x75357e * 4 * _0x46ae5c * (1 - _0x46ae5c);
}
export function mortarArcClearsTerrain(_0x3f0ba3, _0x1bde4d, _0x344a2d, _0x219ef0, _0x1184f3, _0x53c125, _0x4f5b85) {
  for (let _0x41bbb7 = 1; _0x41bbb7 < _0x4f5b85; _0x41bbb7++) {
    const _0x5fdc2a = _0x41bbb7 / _0x4f5b85;
    if (_0x53c125(mortarArcX(_0x3f0ba3, _0x344a2d, _0x5fdc2a), mortarArcY(_0x1bde4d, _0x219ef0, _0x1184f3, _0x5fdc2a))) {
      return false;
    }
  }
  return true;
}
export function mortarBlastHitsRect(_0x1a4408, _0xe929ad, _0xc3ca48, _0x427ab1, _0x2c5026, _0x518d9c, _0x25fc10, _0x2b3161) {
  return _0x1a4408 - _0xc3ca48 < _0x518d9c && _0x1a4408 + _0xc3ca48 > _0x2c5026 && _0xe929ad < _0x2b3161 && _0xe929ad + _0x427ab1 > _0x25fc10;
}
export function mortarArmed(_0x1a6981, _0x4f06fc, _0x9c66a3) {
  return Math.abs(_0x1a6981 - _0x4f06fc) <= _0x9c66a3;
}
export function mortarWarningMs(_0x5ec2ab) {
  return _0x5ec2ab.lobMs + _0x5ec2ab.fuseMs;
}
export function mortarPulsePeriodMs(_0x3a50a0, _0x1bd983, _0x5b12f9, _0x27f601) {
  return _0x5b12f9 + (_0x27f601 - _0x5b12f9) * (_0x1bd983 > 0 ? Math.max(0, Math.min(1, 1 - _0x3a50a0 / _0x1bd983)) : 1);
}
const o = {
  id: "mortar-post",
  kind: "mortar",
  contests: "mid-catwalk",
  owns: "post-mid",
  mount: "platform:post-high",
  deck: 8.35,
  x: 64.6,
  dir: -1,
  delayMs: 0,
  zone: {
    x: 59.5,
    y: 5.35,
    surface: "platform:post-mid"
  }
};
export const MORTAR_TRIAL = {
  id: "mortar-trial-v1",
  stages: {
    solo: {
      id: "solo",
      label: "MORTAR SOLO",
      compose: "replace",
      enemies: [o]
    },
    combo: {
      id: "combo",
      label: "MORTAR + HOUND",
      compose: "replace",
      enemies: [o, {
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
export function mortarTrialStage(_0x37b335) {
  return _0x37b335 && MORTAR_TRIAL.stages[_0x37b335] || null;
}
export function mortarComposePlan(_0x3aec2a, _0x23cc01, _0xcbce8b = _0x1a1e4d) {
  const _0x27113f = mortarTrialStage(_0x23cc01);
  if (!_0x27113f) {
    return _0x3aec2a;
  }
  const _0x10c9a6 = function (_0x43a06a, _0x2f099e) {
    return _0x43a06a.enemies.map(function (_0x2b8912) {
      if (_0x2b8912.deck === undefined) {
        return {
          ..._0x2b8912
        };
      }
      const _0x5d48da = _0x2b8912.kind === "mortar" ? _0x2f099e.mortar.bodyY : _0x2f099e.hound.rideY;
      return {
        ..._0x2b8912,
        y: _0x2b8912.deck + _0x5d48da
      };
    });
  }(_0x27113f, _0xcbce8b);
  if (_0x27113f.compose === "add") {
    return (_0x3aec2a || []).map(function (_0x2611e1) {
      return {
        ..._0x2611e1
      };
    }).concat(_0x10c9a6);
  } else {
    return _0x10c9a6;
  }
}