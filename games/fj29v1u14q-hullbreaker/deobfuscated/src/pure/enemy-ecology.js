import { ENEMY_GENES as _0x285d53 } from "./genome.js";
export const ENEMY_TACTICS = Object.freeze({
  REVERSE_VAULT: "reverse-vault",
  HORIZONTAL_BURST: "horizontal-burst",
  BOUNDED_SWEEP: "bounded-sweep",
  DESCENT_COMB: "descent-comb"
});
const t = Object.freeze([]);
const n = (..._0x5d2f14) => Object.freeze(_0x5d2f14);
const a = (..._0x3d4f98) => Object.freeze(_0x3d4f98);
function r(_0x1c0387, _0x3c916a, _0x1e8e08, _0x31168b = t, _0x3d980b = t, _0x15e1b6 = {}) {
  return Object.freeze({
    id: _0x1c0387,
    family: _0x3c916a,
    kind: _0x1e8e08,
    mechanics: _0x31168b,
    tactics: _0x3d980b,
    ..._0x15e1b6
  });
}
export const LEVEL1_ENEMY_ECOLOGY = Object.freeze([r("hound-railfang", "hunter", "hound"), r("hound-vaultjaw", "hunter", "hound", n("VAULT")), r("hound-rebound", "hunter", "hound", t, a(ENEMY_TACTICS.REVERSE_VAULT)), r("wasp-crosswind", "aerial", "wasp", n("PINCER", "TWINSTRIKE"), a(ENEMY_TACTICS.HORIZONTAL_BURST)), r("wasp-diveclaw", "aerial", "wasp"), r("wasp-pincer", "aerial", "wasp", n("PINCER", "TWINSTRIKE")), r("polyp-needle", "connector", "polyp"), r("polyp-sweepfan", "connector", "polyp", t, a(ENEMY_TACTICS.BOUNDED_SWEEP)), r("polyp-gateweaver", "connector", "polyp", n("RELAY")), r("mortar-craterpod", "denial", "mortar"), r("mortar-bracketpod", "denial", "mortar", n("SALVO"), t, {
  salvoPattern: "BRACKET"
}), r("mortar-aircomb", "denial", "mortar", n("SALVO"), a(ENEMY_TACTICS.DESCENT_COMB))]);
export const LEVEL1_NEUTRAL_ECOLOGY_VISUAL = Object.freeze({
  hound: "hound-railfang",
  wasp: "",
  polyp: "polyp-needle",
  mortar: "mortar-craterpod"
});
export function neutralEnemyEcologyVisualId(_0x553a66) {
  return LEVEL1_NEUTRAL_ECOLOGY_VISUAL[_0x553a66] || "";
}
export function enemyEcologyCondensationStarted(_0x66b255, _0x4b1b2b, _0x3560c1) {
  return !!_0x66b255 && !!Number.isFinite(_0x66b255.enterUntil) && !!Number.isFinite(_0x4b1b2b) && _0x4b1b2b >= _0x66b255.enterUntil - Math.max(0, Number(_0x3560c1) || 0);
}
const o = new Map(LEVEL1_ENEMY_ECOLOGY.map(_0x17aa88 => [_0x17aa88.id, _0x17aa88]));
const c = Object.freeze({
  [ENEMY_TACTICS.REVERSE_VAULT]: "locomotion",
  [ENEMY_TACTICS.HORIZONTAL_BURST]: "attack",
  [ENEMY_TACTICS.BOUNDED_SWEEP]: "attack",
  [ENEMY_TACTICS.DESCENT_COMB]: "attack"
});
const i = Object.freeze([Object.freeze(["AEGIS", "BULWARK"]), Object.freeze(["AEGIS", "BACKLASH"])]);
export function resolveEnemyEcology(_0x5df047, _0x352270) {
  if (!_0x5df047) {
    return null;
  }
  const _0x55c019 = o.get(String(_0x5df047));
  if (_0x55c019 && _0x55c019.kind === _0x352270) {
    return _0x55c019;
  } else {
    return null;
  }
}
export function ecologyHasMechanic(_0x588c14, _0x55eac7) {
  return !!_0x588c14 && _0x588c14.mechanics.includes(_0x55eac7);
}
export function ecologyHasTactic(_0x4c29e3, _0x46169c) {
  const _0x51488c = _0x4c29e3?.tactics;
  return !!_0x51488c && _0x51488c.includes(_0x46169c);
}
export function effectiveEcologyMechanics(_0x221f85, _0x5a266d) {
  if (!_0x221f85) {
    return _0x5a266d?.genes || t;
  }
  const _0x55718f = [..._0x221f85.mechanics];
  const _0x3d8e11 = new Set(_0x55718f.map(_0x33d1ab => _0x285d53[_0x33d1ab]?.dimension).filter(Boolean));
  for (const _0x3dd60c of _0x221f85.tactics) {
    const _0x1f1ab3 = c[_0x3dd60c];
    if (_0x1f1ab3) {
      _0x3d8e11.add(_0x1f1ab3);
    }
  }
  for (const _0x2f44aa of _0x5a266d?.genes || t) {
    if (_0x55718f.includes(_0x2f44aa) || _0x55718f.length >= 3) {
      continue;
    }
    const _0x46d1dc = _0x285d53[_0x2f44aa]?.dimension;
    if (_0x46d1dc && !_0x3d8e11.has(_0x46d1dc)) {
      if (!i.some(_0x27155f => _0x27155f.includes(_0x2f44aa) && _0x27155f.some(_0x26ebaa => _0x26ebaa !== _0x2f44aa && _0x55718f.includes(_0x26ebaa)))) {
        _0x55718f.push(_0x2f44aa);
        _0x3d8e11.add(_0x46d1dc);
      }
    }
  }
  return Object.freeze(_0x55718f);
}
const s = (_0xd59d7d, _0x20774e = 0) => Number.isFinite(_0xd59d7d) ? _0xd59d7d : _0x20774e;
export function reboundLaunch(_0x3d5d02, _0x186bc5) {
  const _0x402dd2 = Math.sign(_0x3d5d02) || -1;
  return Object.freeze({
    dir: -_0x402dd2,
    vx: -_0x402dd2 * Math.max(0, s(_0x186bc5?.speed)),
    vy: Math.max(0, s(_0x186bc5?.lift))
  });
}
export function crosswindPulse(_0x19666c, _0x449e10, _0x224f28, _0x4fc7af, _0x13c0e4) {
  const _0x3c95e6 = Math.max(1, Math.min(3, _0x13c0e4?.count | 0));
  const _0xc7f6fa = Math.max(0, Math.min(_0x3c95e6 - 1, _0x19666c | 0));
  const _0x1a6e5d = Math.max(0, s(_0x13c0e4?.spacing));
  const _0x29f105 = Math.sign(_0x4fc7af) || -1;
  return Object.freeze({
    x: s(_0x449e10),
    y: s(_0x224f28) + (_0xc7f6fa - (_0x3c95e6 - 1) * 0.5) * _0x1a6e5d,
    vx: _0x29f105 * Math.max(0, s(_0x13c0e4?.speed)),
    vy: 0,
    radius: Math.max(0, s(_0x13c0e4?.radius))
  });
}
export function sweepfanDirection(_0x5905b9, _0x4ac8b2, _0x8b4dab, _0x23d3ea, _0xf5fd65 = {}) {
  const _0x431e7a = Math.sign(_0x5905b9) || -1;
  const _0x181e88 = Math.sign(_0x4ac8b2) || 1;
  const _0x2a65c7 = Math.max(0, s(_0x23d3ea?.halfAngleRad));
  const _0x170dd3 = (-_0x2a65c7 + _0x2a65c7 * 2 * (_0x172c4c = _0x8b4dab, Math.max(0, Math.min(1, s(_0x172c4c))))) * _0x181e88;
  var _0x172c4c;
  _0xf5fd65.x = _0x431e7a * Math.cos(_0x170dd3);
  _0xf5fd65.y = Math.sin(_0x170dd3);
  _0xf5fd65.offset = _0x170dd3;
  return _0xf5fd65;
}
export function segmentBandHitsRect(_0x551a6c, _0x5adcc6, _0x3c8c8c, _0x226a03, _0x1c5f9c, _0x39815a, _0x580f59, _0x64bad0, _0x3f67ec) {
  const _0x20d109 = Math.max(0, s(_0x1c5f9c));
  let _0x4a2417 = 0;
  let _0x1912ab = 1;
  const _0x28d992 = _0x3c8c8c - _0x551a6c;
  const _0x40d16b = _0x226a03 - _0x5adcc6;
  const _0x559c7b = _0x39815a - _0x20d109;
  const _0xa1913d = _0x580f59 + _0x20d109;
  const _0x58b564 = _0x64bad0 - _0x20d109;
  const _0xbbe5de = _0x3f67ec + _0x20d109;
  if (Math.abs(_0x28d992) < 1e-9) {
    if (_0x551a6c < _0x559c7b || _0x551a6c > _0xa1913d) {
      return false;
    }
  } else {
    let _0xe77e42 = (_0x559c7b - _0x551a6c) / _0x28d992;
    let _0x29633f = (_0xa1913d - _0x551a6c) / _0x28d992;
    if (_0xe77e42 > _0x29633f) {
      const _0x21c20d = _0xe77e42;
      _0xe77e42 = _0x29633f;
      _0x29633f = _0x21c20d;
    }
    _0x4a2417 = Math.max(_0x4a2417, _0xe77e42);
    _0x1912ab = Math.min(_0x1912ab, _0x29633f);
    if (_0x4a2417 > _0x1912ab) {
      return false;
    }
  }
  if (Math.abs(_0x40d16b) < 1e-9) {
    if (_0x5adcc6 < _0x58b564 || _0x5adcc6 > _0xbbe5de) {
      return false;
    }
  } else {
    let _0x560ae1 = (_0x58b564 - _0x5adcc6) / _0x40d16b;
    let _0x2fcf80 = (_0xbbe5de - _0x5adcc6) / _0x40d16b;
    if (_0x560ae1 > _0x2fcf80) {
      const _0x2523a1 = _0x560ae1;
      _0x560ae1 = _0x2fcf80;
      _0x2fcf80 = _0x2523a1;
    }
    _0x4a2417 = Math.max(_0x4a2417, _0x560ae1);
    _0x1912ab = Math.min(_0x1912ab, _0x2fcf80);
    if (_0x4a2417 > _0x1912ab) {
      return false;
    }
  }
  return true;
}
export function aircombTooth(_0x294c88, _0x331530, _0x4edc5e, _0x4ed0cd, _0x4cda3c = {}) {
  const _0x4910b5 = Math.max(0, Math.min(2, _0x294c88 | 0));
  const _0x683856 = Math.sign(_0x4edc5e) || 1;
  const _0x55183e = Math.max(0, s(_0x4ed0cd?.spacing));
  _0x4cda3c.x = s(_0x331530) + [-1.25, -0.25, 1.25][_0x4910b5] * _0x55183e * _0x683856;
  _0x4cda3c.radius = Math.max(0, s(_0x4ed0cd?.radius));
  return _0x4cda3c;
}