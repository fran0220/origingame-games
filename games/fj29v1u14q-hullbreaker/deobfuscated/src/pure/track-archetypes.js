export const DEFENSE_PHASES = Object.freeze(["OBSERVE", "INTERCEPT", "CONTAIN", "QUARANTINE", "STERILIZE", "SCUTTLE"]);
export const TRACK_SEGMENT_FIELDS = Object.freeze(["id", "phase", "bodyZone", "lengthTiles", "turnDeg", "riseTiles", "surface", "traversalDensity", "traversalBands", "revealAhead", "revealBehind", "transitionKind", "socketEcology"]);
export const TRACK_SURFACES = Object.freeze(["exterior", "interior"]);
export const TRAVERSAL_DENSITIES = Object.freeze(["restrained", "braided", "dense", "assault"]);
export const TRANSITION_KINDS = Object.freeze(["facet-ratchet", "tail-chicane", "gill-fold", "gill-breach", "dorsal-breach", "wing-spar", "limb-transfer", "joint-hub", "access-plate", "torso-transfer", "collar-ratchet", "crown-entry"]);
export const SOCKET_ECOLOGY_ROLES = Object.freeze(["arc-intercept", "aerial-nest", "carrier-dare", "countermeasure-vent", "ground-pursuit", "joint-clamp", "mortar-perch", "rooted-interlock", "rupture-chain", "summit-defense", "under-rib-ambush"]);
export const PACE_CONTRACT = Object.freeze({
  playerSpeedScale: 1,
  scrollSpeedScale: 1,
  unit: "logical-tiles"
});
export const CURRENT_SIX_FACE_PATH = Object.freeze({
  faces: 6,
  faceTiles: 88,
  introTiles: 24,
  outroTiles: 31,
  turnDeg: 30,
  turnSign: 1,
  chamferTiles: 2
});
const e = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const r = (_0x15d1fb, _0x3cdaed) => _0x15d1fb.length === _0x3cdaed.length && _0x15d1fb.every((_0x4060e0, _0x3ae1f1) => _0x4060e0 === _0x3cdaed[_0x3ae1f1]);
function t(_0x196139) {
  return Object.freeze({
    id: _0x196139.id,
    phase: _0x196139.phase,
    bodyZone: _0x196139.bodyZone,
    lengthTiles: _0x196139.lengthTiles,
    turnDeg: _0x196139.turnDeg,
    riseTiles: _0x196139.riseTiles,
    surface: _0x196139.surface,
    traversalDensity: _0x196139.traversalDensity,
    traversalBands: _0x196139.traversalBands,
    revealAhead: _0x196139.revealAhead,
    revealBehind: _0x196139.revealBehind,
    transitionKind: _0x196139.transitionKind,
    socketEcology: Object.freeze([..._0x196139.socketEcology])
  });
}
function s(_0x378220) {
  const _0x456ad3 = Object.freeze(_0x378220.segments.map(t));
  return Object.freeze({
    id: _0x378220.id,
    bodyPlan: _0x378220.bodyPlan,
    version: _0x378220.version,
    entrySegmentId: _0x456ad3[0]?.id || "",
    exitSegmentId: _0x456ad3[_0x456ad3.length - 1]?.id || "",
    introTiles: _0x378220.introTiles ?? 0,
    outroTiles: _0x378220.outroTiles ?? 0,
    turnModel: Object.freeze({
      ..._0x378220.turnModel
    }),
    paceContract: PACE_CONTRACT,
    segments: _0x456ad3
  });
}
const n = Object.freeze([["lower-vertebral-facet", "exterior", "restrained", 3, ["aerial-nest", "ground-pursuit"]], ["flank-rib-district", "exterior", "braided", 3, ["arc-intercept", "ground-pursuit", "carrier-dare"]], ["armored-gill-ring", "interior", "dense", 4, ["rooted-interlock", "under-rib-ambush", "mortar-perch"]], ["pressure-tract-coil", "interior", "dense", 4, ["countermeasure-vent", "mortar-perch", "rupture-chain"]], ["upper-collar-facet", "exterior", "assault", 5, ["aerial-nest", "joint-clamp", "rupture-chain"]], ["crown-approach-ring", "exterior", "assault", 5, ["rooted-interlock", "summit-defense", "carrier-dare"]]]);
export function buildWormTrack(_0x4dc201 = CURRENT_SIX_FACE_PATH) {
  const _0x4528ce = Math.max(0, _0x4dc201.faces | 0);
  const _0x2e78b4 = _0x4dc201.turnDeg * 2 * _0x4dc201.turnSign;
  const _0x450100 = Array.from({
    length: _0x4528ce
  }, (_0x1c281b, _0x2cb45b) => {
    const _0x2e210e = Math.min(DEFENSE_PHASES.length, _0x2cb45b + 1);
    const _0x322ea6 = n[_0x2cb45b % n.length];
    return {
      id: "worm-p" + _0x2e210e + "-" + _0x322ea6[0],
      phase: _0x2e210e,
      bodyZone: _0x322ea6[0],
      lengthTiles: _0x4dc201.faceTiles,
      turnDeg: _0x2e78b4,
      riseTiles: 0,
      surface: _0x322ea6[1],
      traversalDensity: _0x322ea6[2],
      traversalBands: _0x322ea6[3],
      revealAhead: 0,
      revealBehind: 0,
      transitionKind: "facet-ratchet",
      socketEcology: _0x322ea6[4]
    };
  });
  return s({
    id: "worm",
    bodyPlan: "Meridian Spine-Serpent",
    version: 1,
    introTiles: _0x4dc201.introTiles,
    outroTiles: _0x4dc201.outroTiles,
    turnModel: {
      stepsPerCorner: 2,
      stepDeg: _0x4dc201.turnDeg,
      turnSign: _0x4dc201.turnSign,
      chamferTiles: _0x4dc201.chamferTiles
    },
    segments: _0x450100
  });
}
const a = s({
  id: "sky-ray",
  bodyPlan: "Crownback Sky-Ray",
  version: 1,
  introTiles: 20,
  outroTiles: 30,
  turnModel: {
    stepsPerCorner: 1,
    stepDeg: 0,
    turnSign: 1,
    chamferTiles: 0
  },
  segments: [{
    id: "sky-p1-tail-keel",
    phase: 1,
    bodyZone: "tail-keel",
    lengthTiles: 22,
    turnDeg: 22,
    riseTiles: 2,
    surface: "exterior",
    traversalDensity: "restrained",
    traversalBands: 2,
    revealAhead: 1,
    revealBehind: 0,
    transitionKind: "tail-chicane",
    socketEcology: ["aerial-nest", "carrier-dare"]
  }, {
    id: "sky-p1-tail-fin-return",
    phase: 1,
    bodyZone: "tail-fin-return",
    lengthTiles: 24,
    turnDeg: -22,
    riseTiles: 3,
    surface: "exterior",
    traversalDensity: "braided",
    traversalBands: 3,
    revealAhead: 0,
    revealBehind: 1,
    transitionKind: "tail-chicane",
    socketEcology: ["arc-intercept", "ground-pursuit"]
  }, {
    id: "sky-p2-lower-gill-lip",
    phase: 2,
    bodyZone: "lower-gill-lip",
    lengthTiles: 26,
    turnDeg: 30,
    riseTiles: 3,
    surface: "exterior",
    traversalDensity: "braided",
    traversalBands: 3,
    revealAhead: 1,
    revealBehind: 0,
    transitionKind: "gill-fold",
    socketEcology: ["aerial-nest", "under-rib-ambush"]
  }, {
    id: "sky-p2-gill-chicane",
    phase: 2,
    bodyZone: "gill-chicane",
    lengthTiles: 28,
    turnDeg: -30,
    riseTiles: 4,
    surface: "exterior",
    traversalDensity: "dense",
    traversalBands: 4,
    revealAhead: 0,
    revealBehind: 1,
    transitionKind: "gill-breach",
    socketEcology: ["rooted-interlock", "countermeasure-vent", "mortar-perch"]
  }, {
    id: "sky-p3-gill-processor",
    phase: 3,
    bodyZone: "gill-processor",
    lengthTiles: 28,
    turnDeg: 16,
    riseTiles: 5,
    surface: "interior",
    traversalDensity: "dense",
    traversalBands: 4,
    revealAhead: 1,
    revealBehind: 0,
    transitionKind: "gill-fold",
    socketEcology: ["rooted-interlock", "mortar-perch", "rupture-chain"]
  }, {
    id: "sky-p3-gill-throat-return",
    phase: 3,
    bodyZone: "gill-throat-return",
    lengthTiles: 34,
    turnDeg: -16,
    riseTiles: 6,
    surface: "interior",
    traversalDensity: "dense",
    traversalBands: 4,
    revealAhead: 0,
    revealBehind: 1,
    transitionKind: "dorsal-breach",
    socketEcology: ["countermeasure-vent", "under-rib-ambush", "joint-clamp"]
  }, {
    id: "sky-p4-dorsal-breach-ramp",
    phase: 4,
    bodyZone: "dorsal-breach-ramp",
    lengthTiles: 44,
    turnDeg: 12,
    riseTiles: 9,
    surface: "interior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 0,
    revealBehind: 0,
    transitionKind: "dorsal-breach",
    socketEcology: ["rupture-chain", "mortar-perch", "rooted-interlock"]
  }, {
    id: "sky-p5-port-wing-spar",
    phase: 5,
    bodyZone: "port-wing-spar",
    lengthTiles: 78,
    turnDeg: 0,
    riseTiles: 12,
    surface: "exterior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 1,
    revealBehind: 0,
    transitionKind: "wing-spar",
    socketEcology: ["aerial-nest", "arc-intercept", "carrier-dare"]
  }, {
    id: "sky-p5-crownback-straight",
    phase: 5,
    bodyZone: "crownback-straight",
    lengthTiles: 82,
    turnDeg: -8,
    riseTiles: 14,
    surface: "exterior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 0,
    revealBehind: 1,
    transitionKind: "collar-ratchet",
    socketEcology: ["ground-pursuit", "mortar-perch", "rupture-chain"]
  }, {
    id: "sky-p6-transmitter-crest",
    phase: 6,
    bodyZone: "transmitter-crest",
    lengthTiles: 90,
    turnDeg: 0,
    riseTiles: 16,
    surface: "exterior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 0,
    revealBehind: 0,
    transitionKind: "crown-entry",
    socketEcology: ["summit-defense", "rooted-interlock", "carrier-dare"]
  }]
});
const i = s({
  id: "quadruped",
  bodyPlan: "Six-Limbed Ark-Beast",
  version: 1,
  introTiles: 24,
  outroTiles: 32,
  turnModel: {
    stepsPerCorner: 1,
    stepDeg: 0,
    turnSign: 1,
    chamferTiles: 0
  },
  segments: [{
    id: "quad-p1-forepaw-scutes",
    phase: 1,
    bodyZone: "forepaw-scutes",
    lengthTiles: 36,
    turnDeg: 8,
    riseTiles: 8,
    surface: "exterior",
    traversalDensity: "restrained",
    traversalBands: 3,
    revealAhead: 1,
    revealBehind: 0,
    transitionKind: "limb-transfer",
    socketEcology: ["ground-pursuit", "carrier-dare"]
  }, {
    id: "quad-p1-forelimb-spar",
    phase: 1,
    bodyZone: "forelimb-spar",
    lengthTiles: 82,
    turnDeg: 42,
    riseTiles: 14,
    surface: "exterior",
    traversalDensity: "braided",
    traversalBands: 4,
    revealAhead: 0,
    revealBehind: 1,
    transitionKind: "joint-hub",
    socketEcology: ["arc-intercept", "aerial-nest", "mortar-perch"]
  }, {
    id: "quad-p2-elbow-gimbal",
    phase: 2,
    bodyZone: "elbow-gimbal",
    lengthTiles: 34,
    turnDeg: -42,
    riseTiles: 0,
    surface: "exterior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 1,
    revealBehind: 0,
    transitionKind: "joint-hub",
    socketEcology: ["joint-clamp", "rooted-interlock", "carrier-dare"]
  }, {
    id: "quad-p2-upper-limb-span",
    phase: 2,
    bodyZone: "upper-limb-span",
    lengthTiles: 74,
    turnDeg: 28,
    riseTiles: 12,
    surface: "exterior",
    traversalDensity: "dense",
    traversalBands: 4,
    revealAhead: 0,
    revealBehind: 1,
    transitionKind: "limb-transfer",
    socketEcology: ["ground-pursuit", "aerial-nest", "rupture-chain"]
  }, {
    id: "quad-p3-shoulder-socket",
    phase: 3,
    bodyZone: "shoulder-socket",
    lengthTiles: 38,
    turnDeg: 60,
    riseTiles: 0,
    surface: "exterior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 1,
    revealBehind: 0,
    transitionKind: "joint-hub",
    socketEcology: ["joint-clamp", "mortar-perch", "rooted-interlock"]
  }, {
    id: "quad-p3-thorax-entry",
    phase: 3,
    bodyZone: "thorax-entry",
    lengthTiles: 58,
    turnDeg: -30,
    riseTiles: 8,
    surface: "interior",
    traversalDensity: "dense",
    traversalBands: 5,
    revealAhead: 0,
    revealBehind: 1,
    transitionKind: "access-plate",
    socketEcology: ["countermeasure-vent", "under-rib-ambush", "rupture-chain"]
  }, {
    id: "quad-p4-thorax-transfer",
    phase: 4,
    bodyZone: "thorax-transfer",
    lengthTiles: 66,
    turnDeg: 20,
    riseTiles: 14,
    surface: "interior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 0,
    revealBehind: 0,
    transitionKind: "torso-transfer",
    socketEcology: ["rooted-interlock", "mortar-perch", "countermeasure-vent"]
  }, {
    id: "quad-p5-hip-gimbal",
    phase: 5,
    bodyZone: "hip-gimbal",
    lengthTiles: 54,
    turnDeg: -55,
    riseTiles: 10,
    surface: "interior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 1,
    revealBehind: 0,
    transitionKind: "joint-hub",
    socketEcology: ["joint-clamp", "rupture-chain", "carrier-dare"]
  }, {
    id: "quad-p5-hindlimb-span",
    phase: 5,
    bodyZone: "hindlimb-span",
    lengthTiles: 86,
    turnDeg: 35,
    riseTiles: 16,
    surface: "exterior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 0,
    revealBehind: 1,
    transitionKind: "limb-transfer",
    socketEcology: ["ground-pursuit", "aerial-nest", "mortar-perch"]
  }, {
    id: "quad-p6-shell-crown-run",
    phase: 6,
    bodyZone: "shell-crown-run",
    lengthTiles: 78,
    turnDeg: 0,
    riseTiles: 18,
    surface: "exterior",
    traversalDensity: "assault",
    traversalBands: 5,
    revealAhead: 0,
    revealBehind: 0,
    transitionKind: "crown-entry",
    socketEcology: ["summit-defense", "rooted-interlock", "carrier-dare"]
  }]
});
export const TRACK_ARCHETYPES = Object.freeze({
  WORM: buildWormTrack(),
  SKY_RAY: a,
  QUADRUPED: i
});
export function trackArchetype(_0x3984f1) {
  const _0x58c3af = String(_0x3984f1 || "").trim().toUpperCase().replaceAll("-", "_");
  return TRACK_ARCHETYPES[_0x58c3af] || null;
}
export function trackSegmentRanges(_0x2451ba) {
  let _0xeafd98 = _0x2451ba.introTiles;
  return Object.freeze(_0x2451ba.segments.map(_0x5ae163 => {
    const _0x292267 = Object.freeze({
      id: _0x5ae163.id,
      s0: _0xeafd98,
      s1: _0xeafd98 + _0x5ae163.lengthTiles
    });
    _0xeafd98 = _0x292267.s1;
    return _0x292267;
  }));
}
export function revealNeighborhood(_0x34530a, _0x425a2b) {
  const _0x499501 = _0x34530a.segments[_0x425a2b];
  if (!_0x499501) {
    return Object.freeze([]);
  }
  const _0x465076 = Math.max(0, _0x425a2b - _0x499501.revealBehind);
  const _0x39f1d9 = Math.min(_0x34530a.segments.length - 1, _0x425a2b + _0x499501.revealAhead);
  return Object.freeze(_0x34530a.segments.slice(_0x465076, _0x39f1d9 + 1).map(_0x52007a => _0x52007a.id));
}
export function trackArchetypeViolations(_0x79e332) {
  const _0xe03e35 = [];
  if (!_0x79e332 || typeof _0x79e332 != "object") {
    return ["track archetype must be an object"];
  }
  if (!e.test(String(_0x79e332.id || ""))) {
    _0xe03e35.push("plan id must be stable kebab-case");
  }
  if (!String(_0x79e332.bodyPlan || "")) {
    _0xe03e35.push("bodyPlan is required");
  }
  if (!Number.isInteger(_0x79e332.version) || _0x79e332.version < 1) {
    _0xe03e35.push("version must be a positive integer");
  }
  if (!Number.isFinite(_0x79e332.introTiles) || _0x79e332.introTiles < 0) {
    _0xe03e35.push("introTiles must be non-negative");
  }
  if (!Number.isFinite(_0x79e332.outroTiles) || _0x79e332.outroTiles < 0) {
    _0xe03e35.push("outroTiles must be non-negative");
  }
  if (!Array.isArray(_0x79e332.segments) || !_0x79e332.segments.length) {
    _0xe03e35.push("segments must be a non-empty ordered route");
    return _0xe03e35;
  }
  if (_0x79e332.entrySegmentId !== _0x79e332.segments[0].id) {
    _0xe03e35.push("entrySegmentId must own the first segment");
  }
  if (_0x79e332.exitSegmentId !== _0x79e332.segments[_0x79e332.segments.length - 1].id) {
    _0xe03e35.push("exitSegmentId must own the last segment");
  }
  if (!_0x79e332.paceContract || _0x79e332.paceContract.playerSpeedScale !== 1 || _0x79e332.paceContract.scrollSpeedScale !== 1 || _0x79e332.paceContract.unit !== "logical-tiles") {
    _0xe03e35.push("pace contract must preserve player and scroll speed at 1x");
  }
  const _0x5ee716 = new Set();
  const _0x10153f = new Set();
  for (let _0xc7bea9 = 0; _0xc7bea9 < _0x79e332.segments.length; _0xc7bea9++) {
    const _0x5ef3e4 = _0x79e332.segments[_0xc7bea9];
    const _0x1ffa51 = "segment " + (_0xc7bea9 + 1);
    if (!r(Object.keys(_0x5ef3e4).sort(), [...TRACK_SEGMENT_FIELDS].sort())) {
      _0xe03e35.push(_0x1ffa51 + " does not use the frozen track-segment schema");
    }
    if (!e.test(String(_0x5ef3e4.id || ""))) {
      _0xe03e35.push(_0x1ffa51 + " id must be stable kebab-case");
    }
    if (_0x5ee716.has(_0x5ef3e4.id)) {
      _0xe03e35.push(_0x1ffa51 + " id " + _0x5ef3e4.id + " is duplicated");
    }
    _0x5ee716.add(_0x5ef3e4.id);
    if (!Number.isInteger(_0x5ef3e4.phase) || _0x5ef3e4.phase < 1 || _0x5ef3e4.phase > DEFENSE_PHASES.length) {
      _0xe03e35.push(_0x1ffa51 + " phase must map to 1.." + DEFENSE_PHASES.length);
    } else {
      _0x10153f.add(_0x5ef3e4.phase);
    }
    if (_0xc7bea9 && Number.isInteger(_0x5ef3e4.phase)) {
      const _0x3b4f23 = _0x79e332.segments[_0xc7bea9 - 1].phase;
      if (_0x5ef3e4.phase < _0x3b4f23 || _0x5ef3e4.phase > _0x3b4f23 + 1) {
        _0xe03e35.push(_0x1ffa51 + " phase mapping must be ordered without skips");
      }
    }
    if (!e.test(String(_0x5ef3e4.bodyZone || ""))) {
      _0xe03e35.push(_0x1ffa51 + " bodyZone must be kebab-case");
    }
    if (!Number.isFinite(_0x5ef3e4.lengthTiles) || _0x5ef3e4.lengthTiles <= 0) {
      _0xe03e35.push(_0x1ffa51 + " lengthTiles must be positive");
    }
    if (!Number.isFinite(_0x5ef3e4.turnDeg) || Math.abs(_0x5ef3e4.turnDeg) > 120) {
      _0xe03e35.push(_0x1ffa51 + " turnDeg must be finite and within +/-120");
    }
    if (!Number.isFinite(_0x5ef3e4.riseTiles) || _0x5ef3e4.riseTiles < 0) {
      _0xe03e35.push(_0x1ffa51 + " riseTiles must be non-negative");
    }
    if (!TRACK_SURFACES.includes(_0x5ef3e4.surface)) {
      _0xe03e35.push(_0x1ffa51 + " surface must be exterior or interior");
    }
    if (!TRAVERSAL_DENSITIES.includes(_0x5ef3e4.traversalDensity)) {
      _0xe03e35.push(_0x1ffa51 + " traversalDensity is unsupported");
    }
    if (!Number.isInteger(_0x5ef3e4.traversalBands) || _0x5ef3e4.traversalBands < 2 || _0x5ef3e4.traversalBands > 5) {
      _0xe03e35.push(_0x1ffa51 + " traversalBands must be an integer from 2..5");
    }
    for (const _0x5dbbfd of ["revealAhead", "revealBehind"]) {
      if (!Number.isInteger(_0x5ef3e4[_0x5dbbfd]) || _0x5ef3e4[_0x5dbbfd] < 0 || _0x5ef3e4[_0x5dbbfd] > 2) {
        _0xe03e35.push(_0x1ffa51 + " " + _0x5dbbfd + " must be an integer from 0..2");
      }
    }
    if (_0x5ef3e4.revealBehind > _0xc7bea9) {
      _0xe03e35.push(_0x1ffa51 + " revealBehind escapes the route entry");
    }
    if (_0x5ef3e4.revealAhead > _0x79e332.segments.length - _0xc7bea9 - 1) {
      _0xe03e35.push(_0x1ffa51 + " revealAhead escapes the route exit");
    }
    const _0x36c914 = Math.max(0, _0xc7bea9 - _0x5ef3e4.revealBehind);
    const _0x52847c = Math.min(_0x79e332.segments.length - 1, _0xc7bea9 + _0x5ef3e4.revealAhead);
    for (let _0xd4b8c9 = _0x36c914; _0xd4b8c9 <= _0x52847c; _0xd4b8c9++) {
      if (_0x79e332.segments[_0xd4b8c9].phase !== _0x5ef3e4.phase) {
        _0xe03e35.push(_0x1ffa51 + " reveal neighborhood crosses defense phase " + _0x5ef3e4.phase);
      }
    }
    if (!TRANSITION_KINDS.includes(_0x5ef3e4.transitionKind)) {
      _0xe03e35.push(_0x1ffa51 + " transitionKind is unsupported");
    }
    if (!Array.isArray(_0x5ef3e4.socketEcology) || _0x5ef3e4.socketEcology.length < 2) {
      _0xe03e35.push(_0x1ffa51 + " socketEcology needs at least two roles");
    } else {
      const _0x35a8a8 = new Set();
      for (const _0x4fc715 of _0x5ef3e4.socketEcology) {
        if (!SOCKET_ECOLOGY_ROLES.includes(_0x4fc715)) {
          _0xe03e35.push(_0x1ffa51 + " socket role " + _0x4fc715 + " is unsupported");
        }
        if (_0x35a8a8.has(_0x4fc715)) {
          _0xe03e35.push(_0x1ffa51 + " socket role " + _0x4fc715 + " is duplicated");
        }
        _0x35a8a8.add(_0x4fc715);
      }
    }
  }
  const _0x48a593 = DEFENSE_PHASES.filter((_0x37eda2, _0xe9f203) => !_0x10153f.has(_0xe9f203 + 1));
  if (_0x48a593.length) {
    _0xe03e35.push("phase coverage missing " + _0x48a593.join(", "));
  }
  return _0xe03e35;
}
export function trackArchetypeReport(_0x1a9624) {
  const _0x43871d = trackSegmentRanges(_0x1a9624);
  const _0x50b110 = DEFENSE_PHASES.map((_0x13547c, _0x340b2f) => Object.freeze({
    phase: _0x13547c,
    count: _0x1a9624.segments.filter(_0x113f6b => _0x113f6b.phase === _0x340b2f + 1).length
  }));
  const _0x44c417 = Object.freeze({
    exterior: _0x1a9624.segments.filter(_0xf50331 => _0xf50331.surface === "exterior").length,
    interior: _0x1a9624.segments.filter(_0x18c110 => _0x18c110.surface === "interior").length
  });
  return Object.freeze({
    id: _0x1a9624.id,
    segments: _0x1a9624.segments.length,
    phaseSegments: Object.freeze(_0x50b110),
    surfaces: _0x44c417,
    routeStart: _0x43871d[0]?.s0 ?? _0x1a9624.introTiles,
    routeEnd: _0x43871d[_0x43871d.length - 1]?.s1 ?? _0x1a9624.introTiles,
    totalLengthTiles: _0x1a9624.segments.reduce((_0x30d364, _0x115f90) => _0x30d364 + _0x115f90.lengthTiles, 0),
    totalRiseTiles: _0x1a9624.segments.reduce((_0x125ab1, _0x13017e) => _0x125ab1 + _0x13017e.riseTiles, 0),
    netTurnDeg: _0x1a9624.segments.reduce((_0x51cd27, _0x3375cb) => _0x51cd27 + _0x3375cb.turnDeg, 0),
    minLengthTiles: Math.min(..._0x1a9624.segments.map(_0x2583c4 => _0x2583c4.lengthTiles)),
    maxLengthTiles: Math.max(..._0x1a9624.segments.map(_0x534d98 => _0x534d98.lengthTiles)),
    violations: Object.freeze(trackArchetypeViolations(_0x1a9624))
  });
}
export function wormCompatibilityReport(_0x5ab3f1 = TRACK_ARCHETYPES.WORM, _0x17dbb0 = CURRENT_SIX_FACE_PATH) {
  const _0x560a90 = _0x17dbb0.turnDeg * 2 * _0x17dbb0.turnSign;
  const _0x2af67d = Array.from({
    length: _0x17dbb0.faces
  }, (_0x54fbec, _0x3f4e71) => _0x17dbb0.introTiles + _0x17dbb0.faceTiles * (_0x3f4e71 + 1));
  const _0x2bf857 = _0x2af67d.flatMap(_0x3d39ab => [_0x3d39ab, _0x3d39ab + _0x17dbb0.chamferTiles]);
  const _0x517677 = trackSegmentRanges(_0x5ab3f1).map(_0x52eb3a => _0x52eb3a.s1);
  const _0x5a2af7 = _0x517677.flatMap(_0x39070b => [_0x39070b, _0x39070b + _0x5ab3f1.turnModel.chamferTiles]);
  const _0x49a866 = Object.freeze({
    id: _0x5ab3f1.id === "worm",
    faceCount: _0x5ab3f1.segments.length === _0x17dbb0.faces,
    faceLength: _0x5ab3f1.segments.every(_0x4f54e5 => _0x4f54e5.lengthTiles === _0x17dbb0.faceTiles),
    intro: _0x5ab3f1.introTiles === _0x17dbb0.introTiles,
    outro: _0x5ab3f1.outroTiles === _0x17dbb0.outroTiles,
    phaseCoverage: r(_0x5ab3f1.segments.map(_0x574f59 => _0x574f59.phase), Array.from({
      length: _0x17dbb0.faces
    }, (_0xf87f4e, _0x397a91) => _0x397a91 + 1)),
    semanticTurns: _0x5ab3f1.segments.every(_0x23ccf6 => _0x23ccf6.turnDeg === _0x560a90),
    turnSteps: _0x5ab3f1.turnModel.stepsPerCorner === 2,
    turnStepDeg: _0x5ab3f1.turnModel.stepDeg === _0x17dbb0.turnDeg,
    turnSign: _0x5ab3f1.turnModel.turnSign === _0x17dbb0.turnSign,
    chamfer: _0x5ab3f1.turnModel.chamferTiles === _0x17dbb0.chamferTiles,
    corners: r(_0x517677, _0x2af67d),
    bendStarts: r(_0x5a2af7, _0x2bf857),
    totalLength: _0x5ab3f1.introTiles + _0x5ab3f1.outroTiles + _0x5ab3f1.segments.reduce((_0x446379, _0x4b2059) => _0x446379 + _0x4b2059.lengthTiles, 0) === _0x17dbb0.introTiles + _0x17dbb0.outroTiles + _0x17dbb0.faces * _0x17dbb0.faceTiles
  });
  const _0x4b9932 = Object.freeze(Object.entries(_0x49a866).filter(([, _0x586cf7]) => !_0x586cf7).map(([_0xc75553]) => _0xc75553));
  return Object.freeze({
    ok: _0x4b9932.length === 0 && trackArchetypeViolations(_0x5ab3f1).length === 0,
    checks: _0x49a866,
    failedChecks: _0x4b9932,
    expectedCorners: Object.freeze(_0x2af67d),
    actualCorners: Object.freeze(_0x517677),
    expectedBendStarts: Object.freeze(_0x2bf857),
    actualBendStarts: Object.freeze(_0x5a2af7),
    totalRouteTiles: _0x17dbb0.introTiles + _0x17dbb0.faces * _0x17dbb0.faceTiles + _0x17dbb0.outroTiles,
    semanticTurnDeg: _0x560a90,
    circuitTurnDeg: _0x560a90 * _0x17dbb0.faces
  });
}