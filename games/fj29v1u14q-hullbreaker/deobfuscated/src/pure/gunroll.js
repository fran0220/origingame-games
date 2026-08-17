export const GUN_TRAITS = Object.freeze(["RAPID", "HEAVY", "FORKED", "SEEKER", "PHASE", "VOLATILE"]);
export const GUN_CHASSIS_NAMES = Object.freeze({
  R: "RIVETGUN",
  S: "SCATTERBLOOM",
  L: "SUNSPEAR",
  H: "HUNGER ENGINE",
  F: "CINDERMOUTH"
});
export const GUN_TRAIT_BITS = Object.freeze({
  RAPID: 1,
  HEAVY: 2,
  FORKED: 4,
  SEEKER: 8,
  PHASE: 16,
  VOLATILE: 32
});
const e = Object.freeze({
  RAPID: "ZIP",
  HEAVY: "HVY",
  FORKED: "FRK",
  SEEKER: "SKR",
  PHASE: "PHS",
  VOLATILE: "VOL"
});
const t = _0x27fd22 => Math.max(0, Math.min(1, Number.isFinite(_0x27fd22) ? _0x27fd22 : 0));
function n(_0x767bbe, _0xa8acb9) {
  _0x767bbe = _0x767bbe + 2654435769 + Math.imul(_0xa8acb9 + 1, 2246822507) >>> 0;
  _0x767bbe ^= _0x767bbe >>> 16;
  _0x767bbe = Math.imul(_0x767bbe, 2146121005);
  _0x767bbe ^= _0x767bbe >>> 15;
  return ((_0x767bbe = Math.imul(_0x767bbe, 2221713035)) ^ _0x767bbe >>> 16) >>> 0;
}
export function gunTraitSlots(_0xdfda9d) {
  const _0x2f86dd = t(_0xdfda9d);
  if (_0x2f86dd < 1 / 3) {
    return 1;
  } else if (_0x2f86dd < 2 / 3) {
    return 2;
  } else {
    return 3;
  }
}
function r(_0x1f8b80) {
  const _0x5b97ca = Object.fromEntries(GUN_TRAITS.map(_0x18e18a => [_0x18e18a, 0]));
  for (const _0x5a207c of _0x1f8b80) {
    if (_0x5b97ca[_0x5a207c] !== undefined) {
      _0x5b97ca[_0x5a207c]++;
    }
  }
  return _0x5b97ca;
}
function a(_0xd492c2, _0x819927, _0x514f16, _0x524584, _0x596507) {
  const _0x545c0 = GUN_CHASSIS_NAMES[_0xd492c2] ? _0xd492c2 : "R";
  const _0x119e0d = Object.freeze(_0x514f16.slice());
  const _0xefd1a5 = r(_0x119e0d);
  let _0x4444eb = 0;
  for (const _0x18d974 of GUN_TRAITS) {
    if (_0xefd1a5[_0x18d974]) {
      _0x4444eb |= GUN_TRAIT_BITS[_0x18d974];
    }
  }
  const _0x5d6fb6 = Object.freeze({
    tier: _0x819927,
    traitMask: _0x4444eb,
    rapid: _0xefd1a5.RAPID,
    heavy: _0xefd1a5.HEAVY,
    forked: _0xefd1a5.FORKED,
    seeker: _0xefd1a5.SEEKER,
    phase: _0xefd1a5.PHASE,
    volatile: _0xefd1a5.VOLATILE
  });
  const _0x3f6ea9 = {
    id: _0x524584,
    letter: _0x545c0,
    tier: _0x819927,
    traits: _0x119e0d,
    counts: Object.freeze(_0xefd1a5),
    visual: _0x5d6fb6,
    starter: !!_0x596507
  };
  _0x3f6ea9.label = gunLabel(_0x3f6ea9);
  _0x3f6ea9.shortLabel = gunLabel(_0x3f6ea9, true);
  return Object.freeze(_0x3f6ea9);
}
export function plainGun(_0x4ab68d = "R", _0x50d695 = false) {
  const _0x463224 = GUN_CHASSIS_NAMES[_0x4ab68d] ? _0x4ab68d : "R";
  return a(_0x463224, 0, [], _0x50d695 ? "starter-rivetgun" : "plain-" + _0x463224, _0x50d695);
}
export function rollGun(_0x2d34e6, _0x4cddba, _0x17dce1 = 0) {
  const _0x1cd595 = GUN_CHASSIS_NAMES[_0x2d34e6] ? _0x2d34e6 : "R";
  const _0x254a84 = t(_0x4cddba);
  const _0x3c9568 = gunTraitSlots(_0x254a84);
  const _0xc825f7 = function (_0x42a12c) {
    const _0x292fe = String(_0x42a12c);
    let _0x6fbb69 = 2166136261;
    for (let _0x263517 = 0; _0x263517 < _0x292fe.length; _0x263517++) {
      _0x6fbb69 ^= _0x292fe.charCodeAt(_0x263517);
      _0x6fbb69 = Math.imul(_0x6fbb69, 16777619);
    }
    _0x6fbb69 ^= _0x6fbb69 >>> 16;
    _0x6fbb69 = Math.imul(_0x6fbb69, 2146121005);
    _0x6fbb69 ^= _0x6fbb69 >>> 15;
    _0x6fbb69 = Math.imul(_0x6fbb69, 2221713035);
    return (_0x6fbb69 ^ _0x6fbb69 >>> 16) >>> 0;
  }(_0x17dce1 + "|" + _0x1cd595 + "|" + Math.round(_0x254a84 * 4096) + "|" + _0x3c9568);
  let _0x5418e3 = _0xc825f7;
  const _0x29c5d7 = [];
  for (let _0x57afe6 = 0; _0x57afe6 < _0x3c9568; _0x57afe6++) {
    _0x5418e3 = n(_0x5418e3, _0x57afe6);
    _0x29c5d7.push(GUN_TRAITS[_0x5418e3 % GUN_TRAITS.length]);
  }
  return a(_0x1cd595, _0x3c9568, _0x29c5d7, "gun-" + _0x1cd595 + "-" + _0x3c9568 + "-" + _0xc825f7.toString(16).padStart(8, "0"), false);
}
function s(_0x3c77a4) {
  if (_0x3c77a4 > 1) {
    if (_0x3c77a4 === 2) {
      return "²";
    } else {
      return "³";
    }
  } else {
    return "";
  }
}
export function gunLabel(_0x384445, _0xf2564d = false) {
  const _0x46d8cc = GUN_CHASSIS_NAMES[_0x384445 && _0x384445.letter] || GUN_CHASSIS_NAMES.R;
  if (!_0x384445 || !_0x384445.traits || _0x384445.traits.length === 0) {
    return _0x46d8cc;
  }
  const _0x4ad439 = _0x384445.counts || r(_0x384445.traits);
  const _0x9ab622 = [];
  for (const _0x257ca6 of GUN_TRAITS) {
    if (_0x4ad439[_0x257ca6]) {
      _0x9ab622.push((_0xf2564d ? e[_0x257ca6] : _0x257ca6) + s(_0x4ad439[_0x257ca6]));
    }
  }
  return _0x9ab622.join("/") + " " + _0x46d8cc;
}
export function compileGunDef(_0x2671de, _0x114b02) {
  const _0x279530 = _0x114b02 || {};
  const _0x457a71 = _0x2671de && _0x2671de.counts || r([]);
  const _0x3fbba8 = _0x457a71.RAPID || 0;
  const _0x2919b9 = _0x457a71.HEAVY || 0;
  const _0x299f43 = _0x457a71.FORKED || 0;
  const _0x41aa4c = _0x457a71.SEEKER || 0;
  const _0x43b02e = _0x457a71.PHASE || 0;
  const _0x4f6809 = _0x457a71.VOLATILE || 0;
  const _0x2bb7be = 0.88 ** _0x2919b9;
  const _0x3f5ee9 = (_0x279530.count || 1) + _0x299f43;
  const _0x48df9a = _0x279530.turnRate ? _0x279530.turnRate * (1 + _0x41aa4c * 0.22) : _0x41aa4c ? 5 + _0x41aa4c * 1.1 : 0;
  const _0xe91291 = _0x41aa4c ? Math.max((_0x279530.seekRange || 0) + _0x41aa4c * 2.5, 11 + _0x41aa4c * 2.5) : _0x279530.seekRange || 0;
  const _0x3c259e = _0x48df9a > 0 ? (_0x279530.seekFuelMs || 760) + _0x41aa4c * 280 : 0;
  const _0x32993f = _0x48df9a > 0 ? Math.min(178, (_0x279530.seekConeDeg || (_0x279530.turnRate ? 132 : 104)) + _0x41aa4c * 16) : 0;
  const _0x3ac31f = _0x48df9a > 0 ? (_0x279530.seekRetargets || 0) + _0x41aa4c : 0;
  const _0x3b5dbd = (_0x279530.pierce ? 2 : 0) + _0x43b02e * 2;
  return Object.freeze({
    ..._0x279530,
    name: gunLabel(_0x2671de),
    fireRateMs: Math.max(55, (_0x279530.fireRateMs || 130) * 0.8 ** _0x3fbba8),
    speed: (_0x279530.speed || 26) * _0x2bb7be,
    damage: (_0x279530.damage || 1) + _0x2919b9,
    lifeMs: (_0x279530.lifeMs || 1100) * (1 + _0x43b02e * 0.18),
    count: _0x3f5ee9,
    splayDeg: _0x3f5ee9 > 1 ? _0x279530.splayDeg || 6 + _0x299f43 * 2 : 0,
    turnRate: _0x48df9a,
    seekRange: _0xe91291,
    seekFuelMs: _0x3c259e,
    seekConeDeg: _0x32993f,
    seekRetargets: _0x3ac31f,
    seekLead: _0x48df9a > 0 ? 0.72 + _0x41aa4c * 0.08 : 0,
    pierce: _0x3b5dbd > 0,
    pierceBudget: _0x3b5dbd,
    terrainPhaseTiles: _0x43b02e ? 0.65 + _0x43b02e * 0.65 : 0,
    heavyImpulse: _0x2919b9 ? 2.5 + _0x2919b9 * 1.35 : 0,
    heavyStunMs: _0x2919b9 ? 45 + _0x2919b9 * 35 : 0,
    volatileRadius: _0x4f6809 ? 0.8 + (_0x4f6809 - 1) * 0.25 : 0,
    volatileDamage: _0x4f6809 ? 1 + (_0x4f6809 >= 3 ? 1 : 0) : 0,
    crawlSpeed: _0x279530.crawlSpeed ? _0x279530.crawlSpeed * _0x2bb7be : 0,
    gunId: _0x2671de ? _0x2671de.id : "plain-R",
    gunTier: _0x2671de ? _0x2671de.tier : 0,
    gunMeta: _0x2671de ? _0x2671de.visual : null
  });
}