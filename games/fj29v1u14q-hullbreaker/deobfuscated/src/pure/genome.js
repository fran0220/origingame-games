export const GENOME_DIMENSIONS = Object.freeze(["locomotion", "defense", "attack", "behavior", "command", "reactive"]);
export const MERIDIAN_RESPONSES = Object.freeze(["DORMANT", "OBSERVE", "INTERCEPT", "CONTAIN", "QUARANTINE", "STERILIZE", "SCUTTLE"]);
export const ENEMY_GENES = Object.freeze({
  VAULT: Object.freeze({
    dimension: "locomotion",
    kinds: Object.freeze(["hound"]),
    short: "VLT",
    minFace: 4
  }),
  BULWARK: Object.freeze({
    dimension: "defense",
    kinds: Object.freeze(["wasp", "hound", "carrier", "mortar"]),
    short: "BLW",
    minFace: 3,
    minFaceByKind: Object.freeze({
      mortar: 5
    })
  }),
  TWINSTRIKE: Object.freeze({
    dimension: "attack",
    kinds: Object.freeze(["wasp"]),
    short: "TWN",
    minFace: 5
  }),
  SALVO: Object.freeze({
    dimension: "attack",
    kinds: Object.freeze(["mortar"]),
    short: "SLV",
    minFace: 5
  }),
  RELAY: Object.freeze({
    dimension: "behavior",
    kinds: Object.freeze(["polyp"]),
    short: "RLY",
    minFace: 4
  }),
  PINCER: Object.freeze({
    dimension: "behavior",
    kinds: Object.freeze(["wasp", "carrier"]),
    short: "PNC",
    minFace: 5
  }),
  AEGIS: Object.freeze({
    dimension: "command",
    kinds: Object.freeze(["carrier", "mortar", "polyp"]),
    short: "AEG",
    minFace: 5
  }),
  BACKLASH: Object.freeze({
    dimension: "reactive",
    kinds: Object.freeze(["wasp", "hound", "carrier", "polyp", "mortar"]),
    short: "BKL",
    minFace: 6
  })
});
export const MERIDIAN_STRAINS = Object.freeze({
  HUNTER: Object.freeze({
    short: "HNT",
    dimensions: Object.freeze(["attack", "locomotion", "behavior", "command", "defense", "reactive"]),
    wardPolicy: "SPEAR",
    salvoPattern: "LEAD"
  }),
  BASTION: Object.freeze({
    short: "BST",
    dimensions: Object.freeze(["command", "defense", "behavior", "attack", "locomotion", "reactive"]),
    wardPolicy: "ANCHOR",
    salvoPattern: "BRACKET"
  }),
  WEAVER: Object.freeze({
    short: "WVR",
    dimensions: Object.freeze(["reactive", "behavior", "locomotion", "defense", "attack", "command"]),
    wardPolicy: "ECHELON",
    salvoPattern: "CUTBACK"
  })
});
const e = Object.freeze(Object.keys(ENEMY_GENES));
const t = Object.freeze(Object.keys(MERIDIAN_STRAINS));
const n = Object.freeze([Object.freeze(["AEGIS", "BULWARK"]), Object.freeze(["AEGIS", "BACKLASH"])]);
function o(_0x1e3324) {
  const _0x283130 = String(_0x1e3324);
  let _0xf570bf = 2166136261;
  for (let _0x4f9059 = 0; _0x4f9059 < _0x283130.length; _0x4f9059++) {
    _0xf570bf ^= _0x283130.charCodeAt(_0x4f9059);
    _0xf570bf = Math.imul(_0xf570bf, 16777619);
  }
  _0xf570bf ^= _0xf570bf >>> 16;
  _0xf570bf = Math.imul(_0xf570bf, 2146121005);
  _0xf570bf ^= _0xf570bf >>> 15;
  _0xf570bf = Math.imul(_0xf570bf, 2221713035);
  return (_0xf570bf ^ _0xf570bf >>> 16) >>> 0;
}
function r(_0x8c9e4d) {
  return o(_0x8c9e4d) / 4294967295;
}
export function enemyGenomeBudget(_0x2b5ec9 = {}) {
  const _0x106287 = Math.max(0, Math.min(6, _0x2b5ec9.face | 0));
  if (_0x106287 < 3) {
    return 0;
  }
  let _0x1159d9 = _0x106287 < 5 ? 1 : 2;
  _0xfd94fe = _0x2b5ec9.hpRatio === undefined ? 1 : _0x2b5ec9.hpRatio;
  const _0x2af14d = Math.max(0, Math.min(1, Number.isFinite(_0xfd94fe) ? _0xfd94fe : 0));
  var _0xfd94fe;
  const _0x4a6377 = Math.max(0, Math.min(2, _0x2b5ec9.pressureEvolutionTier | 0));
  const _0x5913ac = Math.max(0, Number(_0x2b5ec9.clearEmaMs) || 0);
  if (_0x106287 >= 4 && _0x4a6377 >= 1) {
    _0x1159d9++;
  }
  if (_0x106287 >= 5 && _0x4a6377 >= 2) {
    _0x1159d9++;
  }
  if (_0x5913ac > 0 && _0x5913ac <= 1600) {
    _0x1159d9++;
  }
  if (Math.max(0, Number(_0x2b5ec9.kills) || 0) / Math.max(1, _0x106287) >= 7) {
    _0x1159d9++;
  }
  _0x1159d9 = Math.min(3, _0x1159d9);
  if (_0x2af14d <= 0.34) {
    _0x1159d9--;
  }
  return Math.max(0, _0x1159d9);
}
function i(_0x34ea8c, _0x54f205) {
  const _0x8e864b = ENEMY_GENES[_0x54f205].dimension;
  return !_0x34ea8c.some(_0x315110 => ENEMY_GENES[_0x315110].dimension === _0x8e864b) && !n.some(_0x53588c => _0x53588c.includes(_0x54f205) && _0x53588c.some(_0x4ca757 => _0x4ca757 !== _0x54f205 && _0x34ea8c.includes(_0x4ca757)));
}
function a(_0x386a28, _0x314dca, _0x3cd02c, _0x184343) {
  if (_0x184343.length) {
    return _0x314dca + " " + _0x3cd02c.short + " " + _0x184343.map(_0x176f52 => ENEMY_GENES[_0x176f52].short).join("/") + " " + String(_0x386a28).toUpperCase();
  } else {
    return _0x314dca + " " + String(_0x386a28 || "hostile").toUpperCase();
  }
}
export function rollEnemyGenome(_0x2da941 = {}, _0x4b9bd5 = 1296388681) {
  const _0x5c4e0b = ["wasp", "hound", "carrier", "polyp", "mortar"].includes(_0x2da941.kind) ? _0x2da941.kind : "wasp";
  const _0x1ec69a = Math.max(0, Math.min(6, _0x2da941.face | 0));
  const _0x381a4a = MERIDIAN_RESPONSES[_0x1ec69a] || MERIDIAN_RESPONSES[0];
  const _0x277f56 = enemyGenomeBudget({
    ..._0x2da941,
    face: _0x1ec69a
  });
  const _0x41d01d = [];
  const _0x47eb51 = Math.max(0, _0x2da941.serial | 0);
  const _0x28c2fc = _0x2da941.spawnKey === undefined ? _0x47eb51 : _0x2da941.spawnKey;
  const _0x2e4cc6 = function (_0xb4d725, _0x5c0652, _0x2e8661, _0x21a344) {
    const _0x2345d4 = String(_0xb4d725.cohortKey ?? "ambient:" + Math.floor(_0x21a344 / t.length));
    const _0x3b167d = Number.isFinite(_0xb4d725.cohortSlot) ? Math.max(0, _0xb4d725.cohortSlot | 0) : Math.max(0, _0x21a344) % t.length;
    const _0x182a89 = Number.isFinite(_0xb4d725.cohortPhase) ? _0xb4d725.cohortPhase | 0 : null;
    const _0x349c0c = _0x182a89 === null ? o(_0x5c0652 + "|" + _0x2e8661 + "|" + _0x2345d4 + "|strain") % t.length : (_0x182a89 % t.length + t.length) % t.length;
    const _0x52d5ed = t[(_0x349c0c + _0x3b167d) % t.length];
    return Object.freeze({
      id: _0x52d5ed,
      ...MERIDIAN_STRAINS[_0x52d5ed],
      cohortKey: _0x2345d4,
      cohortSlot: _0x3b167d,
      cohortPhase: _0x349c0c
    });
  }(_0x2da941, _0x4b9bd5, _0x1ec69a, _0x47eb51);
  const _0xffb710 = function (_0x40d2cf, _0x3c74f6, _0x18d963, _0x5a0cb7, _0x3aecd9, _0x1cd216) {
    if (_0x3aecd9 <= 0) {
      return 0;
    }
    if (_0x5a0cb7 < 5) {
      return 1;
    }
    let _0x3d5217 = _0x1cd216.id === "BASTION" || _0x1cd216.id === "WEAVER" && _0x5a0cb7 === 5 ? 1 : 2;
    if (_0x5a0cb7 >= 6 && _0x3aecd9 >= 3 && _0x3d5217 >= 2 && (_0x40d2cf.pressureEvolutionTier >= 2 || o(_0x3c74f6 + "|" + _0x18d963 + "|" + _0x1cd216.id + "|overexpress") % 4 == 0)) {
      _0x3d5217++;
    }
    return Math.max(0, Math.min(3, _0x3aecd9, _0x3d5217));
  }(_0x2da941, _0x4b9bd5, _0x28c2fc, _0x1ec69a, _0x277f56, _0x2e4cc6);
  const _0x1ad957 = [];
  if (_0xffb710 > 0 && _0x1ec69a === 4 && _0x5c4e0b === "hound") {
    _0x1ad957.push("VAULT");
  }
  for (const _0x40b877 of _0x1ad957) {
    if (i(_0x41d01d, _0x40b877)) {
      _0x41d01d.push(_0x40b877);
    }
  }
  const _0x1c8fb9 = new Map(_0x2e4cc6.dimensions.map((_0x38af9c, _0x2e12be) => [_0x38af9c, _0x2e12be]));
  const _0x270918 = e.filter(_0x592e18 => function (_0x11c7f0, _0x1bba12, _0xb77d4e) {
    const _0xadcdd8 = ENEMY_GENES[_0x11c7f0];
    return !!_0xadcdd8.kinds.includes(_0x1bba12) && _0xb77d4e >= (_0xadcdd8.minFaceByKind?.[_0x1bba12] ?? _0xadcdd8.minFace);
  }(_0x592e18, _0x5c4e0b, _0x1ec69a) && !_0x1ad957.includes(_0x592e18)).map(_0x3290df => ({
    id: _0x3290df,
    dimension: _0x1c8fb9.get(ENEMY_GENES[_0x3290df].dimension) ?? GENOME_DIMENSIONS.length,
    score: o(_0x4b9bd5 + "|" + _0x28c2fc + "|" + _0x5c4e0b + "|" + _0x1ec69a + "|" + _0x2e4cc6.id + "|" + _0x3290df)
  })).sort((_0x5721a2, _0x13dc17) => _0x5721a2.dimension - _0x13dc17.dimension || _0x5721a2.score - _0x13dc17.score || _0x5721a2.id.localeCompare(_0x13dc17.id));
  while (_0x41d01d.length < _0xffb710) {
    const _0x3dcfa2 = _0x270918.filter(({
      id: _0x4dd03c
    }) => !_0x41d01d.includes(_0x4dd03c) && i(_0x41d01d, _0x4dd03c));
    if (!_0x3dcfa2.length) {
      break;
    }
    let _0x5115a5 = _0x3dcfa2[0];
    if (_0x1ec69a >= 6 && _0x41d01d.length > _0x1ad957.length && _0x3dcfa2.length > 1) {
      const _0x214779 = _0x41d01d.length;
      _0x5115a5 = _0x3dcfa2.slice(0, 2).map(_0x563c5c => ({
        ..._0x563c5c,
        branchScore: o(_0x4b9bd5 + "|" + _0x28c2fc + "|" + _0x5c4e0b + "|" + _0x1ec69a + "|" + _0x2e4cc6.id + "|slot:" + _0x214779 + "|" + _0x563c5c.id)
      })).sort((_0x5b4c41, _0x190ce6) => _0x5b4c41.branchScore - _0x190ce6.branchScore || _0x5b4c41.id.localeCompare(_0x190ce6.id))[0];
    }
    _0x41d01d.push(_0x5115a5.id);
  }
  const _0x188477 = Object.freeze(_0x41d01d);
  const _0x5143c5 = Object.freeze(Object.fromEntries(GENOME_DIMENSIONS.map(_0x361d25 => [_0x361d25, _0x188477.find(_0x4b9e5f => ENEMY_GENES[_0x4b9e5f].dimension === _0x361d25) || null])));
  const _0x4d9bed = "genome-" + _0x5c4e0b + "-" + _0x1ec69a + "-" + o(_0x4b9bd5 + "|" + _0x28c2fc + "|" + _0x2e4cc6.id + "|" + _0x188477.join("+")).toString(16).padStart(8, "0");
  const _0x50a948 = _0x4d9bed + "|morph";
  const _0x17b8c3 = Object.freeze({
    handedness: o(_0x50a948 + "|hand") & 1 ? 1 : -1,
    moduleScale: 0.92 + r(_0x50a948 + "|scale") * 0.16,
    moduleTilt: (r(_0x50a948 + "|tilt") * 2 - 1) * 0.11,
    moduleBias: (r(_0x50a948 + "|bias") * 2 - 1) * 0.12,
    pulsePhase: r(_0x50a948 + "|pulse") * Math.PI * 2,
    platingBand: o(_0x50a948 + "|plate") % 3
  });
  return Object.freeze({
    id: _0x4d9bed,
    kind: _0x5c4e0b,
    face: _0x1ec69a,
    response: _0x381a4a,
    budget: _0x277f56,
    expressedBudget: _0xffb710,
    strain: _0x2e4cc6,
    alleles: Object.freeze({
      wardPolicy: _0x2e4cc6.wardPolicy,
      salvoPattern: _0x2e4cc6.salvoPattern
    }),
    genes: _0x188477,
    dimensions: _0x5143c5,
    phenotype: _0x17b8c3,
    label: a(_0x5c4e0b, _0x381a4a, _0x2e4cc6, _0x188477),
    mutated: _0x188477.length > 0
  });
}
export function genomeHas(_0x24b43c, _0x1f6f0d) {
  return !!_0x24b43c && _0x24b43c.genes.includes(_0x1f6f0d);
}