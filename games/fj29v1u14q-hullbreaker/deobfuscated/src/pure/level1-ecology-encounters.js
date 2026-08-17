import { resolveEnemyEcology as _0x2fb408 } from "./enemy-ecology.js";
export const LEVEL1_ECOLOGY_BEAT_LOCK_MS = 300000;
export const LEVEL1_ECOLOGY_BEAT_STAGGER_MS = 150;
const r = Object.freeze({
  "hound-railfang": "timing",
  "hound-vaultjaw": "elevation",
  "hound-rebound": "route",
  "wasp-crosswind": "elevation",
  "wasp-diveclaw": "timing",
  "wasp-pincer": "target",
  "polyp-needle": "route",
  "polyp-sweepfan": "timing",
  "polyp-gateweaver": "route",
  "mortar-craterpod": "landing",
  "mortar-bracketpod": "timing",
  "mortar-aircomb": "elevation"
});
function n(_0x38d71c, _0x418c57, _0x15a45c, _0x47193b = "teach", _0x126a29 = {}) {
  const _0x1935db = _0x2fb408(_0x38d71c, _0x38d71c.startsWith("hound-") ? "hound" : _0x38d71c.startsWith("wasp-") ? "wasp" : _0x38d71c.startsWith("polyp-") ? "polyp" : "mortar");
  if (!_0x1935db) {
    throw new Error("invalid Level 1 ecology encounter id " + _0x38d71c);
  }
  return Object.freeze({
    ecologyId: _0x38d71c,
    kind: _0x1935db.kind,
    family: _0x1935db.family,
    beat: _0x418c57,
    stageRole: _0x15a45c,
    mode: _0x47193b,
    decision: r[_0x38d71c],
    ..._0x126a29
  });
}
function o(_0x119537, _0x199b50, _0x4e4f0e) {
  const _0x1601d9 = new Map();
  const _0xa1bf46 = _0x4e4f0e.map((_0x49ab04, _0x20b663) => {
    const _0x3a7146 = _0x1601d9.get(_0x49ab04.beat) || 0;
    _0x1601d9.set(_0x49ab04.beat, _0x3a7146 + 1);
    return Object.freeze({
      ..._0x49ab04,
      face: _0x119537,
      response: _0x199b50,
      slot: _0x20b663,
      beatSlot: _0x3a7146,
      id: "ecology-f" + _0x119537 + "-s" + _0x20b663 + "-" + _0x49ab04.ecologyId
    });
  });
  return Object.freeze({
    face: _0x119537,
    response: _0x199b50,
    rows: Object.freeze(_0xa1bf46)
  });
}
export const LEVEL1_ECOLOGY_ENCOUNTERS = Object.freeze([o(1, "OBSERVE", [n("wasp-crosswind", 0, "aerial-crossing"), n("wasp-diveclaw", 1, "defender-apex"), n("wasp-crosswind", 2, "intercept-mid", "recombine"), n("wasp-diveclaw", 2, "defender-mid", "recombine")]), o(2, "INTERCEPT", [n("hound-railfang", 0, "hound-run"), n("hound-vaultjaw", 1, "intercept-left"), n("hound-railfang", 2, "hound-run", "recombine"), n("wasp-crosswind", 2, "intercept-right", "recombine"), n("wasp-diveclaw", 2, "defender-apex", "recombine")]), o(3, "CONTAIN", [n("polyp-needle", 0, "connector-control"), n("polyp-sweepfan", 1, "connector-control"), n("wasp-pincer", 2, "defender-left"), n("wasp-pincer", 2, "defender-right"), n("hound-railfang", 3, "hound-channel", "recombine"), n("wasp-diveclaw", 3, "aerial-apex", "recombine")]), o(4, "QUARANTINE", [n("mortar-craterpod", 0, "defender-apex", "teach", {
  targetStageRole: "landing-denial-low"
}), n("mortar-bracketpod", 1, "landing-denial-high", "teach", {
  targetStageRole: "landing-denial-mid"
}), n("hound-rebound", 2, "connector-control"), n("mortar-craterpod", 3, "landing-denial-high", "recombine", {
  targetStageRole: "landing-denial-low"
}), n("wasp-crosswind", 3, "defender-apex", "recombine"), n("mortar-bracketpod", 4, "defender-apex", "recombine", {
  targetStageRole: "landing-denial-mid"
}), n("wasp-diveclaw", 4, "landing-denial-high", "recombine")]), o(5, "STERILIZE", [n("polyp-gateweaver", 0, "connector-left"), n("mortar-aircomb", 1, "defender-apex", "teach", {
  targetStageRole: "aerial-right"
}), n("polyp-gateweaver", 2, "connector-right", "recombine"), n("hound-rebound", 2, "hound-run", "recombine"), n("wasp-diveclaw", 2, "aerial-left", "recombine"), n("mortar-aircomb", 3, "defender-apex", "recombine", {
  targetStageRole: "aerial-right"
}), n("hound-railfang", 3, "hound-run", "recombine"), n("wasp-crosswind", 3, "aerial-left", "recombine")]), o(6, "SCUTTLE", [n("wasp-crosswind", 0, "aerial-left", "recombine"), n("hound-railfang", 0, "ground-assault", "recombine"), n("polyp-needle", 0, "connector-left", "recombine"), n("wasp-diveclaw", 1, "aerial-center", "recombine"), n("hound-rebound", 1, "ground-assault", "recombine"), n("mortar-craterpod", 1, "crown-defender", "recombine", {
  targetStageRole: "connector-center"
}), n("wasp-pincer", 2, "aerial-right", "recombine"), n("polyp-gateweaver", 2, "connector-center", "recombine"), n("mortar-aircomb", 2, "crown-defender", "recombine", {
  targetStageRole: "aerial-center"
})])]);
export function level1EcologyEncounterRow(_0x45fd18, _0x4dd4a2, _0x54ff18 = true) {
  if (!_0x54ff18) {
    return null;
  }
  const _0x559930 = LEVEL1_ECOLOGY_ENCOUNTERS[Number(_0x45fd18) - 1];
  return _0x559930?.face === Number(_0x45fd18) && _0x559930.rows[_0x4dd4a2] || null;
}
export function level1EcologyEncounterDelay(_0x1bb3ff) {
  if (_0x1bb3ff) {
    return _0x1bb3ff.beat * 300000 + _0x1bb3ff.beatSlot * 150;
  } else {
    return 0;
  }
}