import { LATTICE as _0x3f1924, latticeBands as _0x23809b, latticeFaces as _0x17ede1 } from "./lattice.js";
const a = _0x4bcd56 => Object.freeze(_0x4bcd56.map(_0x136f71 => Object.freeze(_0x136f71)));
const o = _0x3733e1 => Object.freeze({
  ..._0x3733e1,
  platforms: a(_0x3733e1.platforms),
  ladders: a(_0x3733e1.ladders),
  solids: a(_0x3733e1.solids || [])
});
export const VERTICAL_ASSAULT_FACES = Object.freeze([o({
  name: "split-rib",
  supportFamily: "rib",
  targetSpan: 10,
  kind: "rib",
  routes: 3,
  platforms: [{
    key: "arrival-lower",
    u0: 5,
    u1: 12,
    h: 4.35,
    role: "arrival-lower",
    arrival: true
  }, {
    key: "arrival-upper",
    u0: 9,
    u1: 17,
    h: 7.35,
    role: "arrival-upper"
  }, {
    key: "entry-step",
    u0: 14,
    u1: 21,
    h: 4.35,
    role: "entry-switchback"
  }, {
    key: "mid-bridge",
    u0: 28,
    u1: 38,
    h: 4.35,
    role: "mid-route",
    staging: "intercept-mid"
  }, {
    key: "high-bridge",
    u0: 27,
    u1: 37,
    h: 7.1,
    role: "high-route",
    staging: "aerial-crossing"
  }, {
    key: "arena-low",
    u0: 35,
    u1: 45,
    h: 4.35,
    role: "arena-ingress",
    staging: "ground-entry"
  }, {
    key: "arena-mid",
    u0: 41,
    u1: 51,
    h: 7.1,
    role: "arena-switchback",
    staging: "defender-mid"
  }, {
    key: "arena-apex",
    u0: 47,
    u1: 55,
    h: 10,
    role: "arena-apex",
    staging: "defender-apex"
  }, {
    key: "recovery",
    u0: 50,
    u1: 58,
    h: 4.35,
    role: "recovery-lane",
    recovery: true
  }],
  ladders: [{
    from: "arrival-lower",
    to: "arrival-upper"
  }, {
    from: "pocket-mid",
    to: "pocket-shelf"
  }, {
    from: "mid-bridge",
    to: "high-bridge"
  }, {
    from: "arena-low",
    to: "arena-mid",
    u: 42
  }, {
    from: "arena-mid",
    to: "arena-apex"
  }],
  solids: [{
    key: "split-rib-cover",
    u0: 43,
    u1: 44,
    h0: 4.35,
    h1: 6.35,
    role: "cover"
  }]
}), o({
  name: "chimney-fork",
  supportFamily: "service",
  targetSpan: 11,
  kind: "service",
  routes: 3,
  platforms: [{
    key: "arrival-upper",
    u0: 9,
    u1: 18,
    h: 7.35,
    role: "arrival-upper"
  }, {
    key: "chimney-low",
    u0: 27,
    u1: 38,
    h: 3.5,
    role: "low-connector",
    staging: "hound-run"
  }, {
    key: "chimney-left",
    u0: 30,
    u1: 40,
    h: 6.4,
    role: "wall-launch-left",
    staging: "intercept-left"
  }, {
    key: "chimney-right",
    u0: 37,
    u1: 47,
    h: 9.3,
    role: "wall-launch-right",
    staging: "intercept-right"
  }, {
    key: "arena-mid",
    u0: 42,
    u1: 53,
    h: 6.4,
    role: "arena-ingress",
    arena: "mid",
    staging: "defender-mid"
  }, {
    key: "arena-apex",
    u0: 45,
    u1: 54,
    h: 11,
    role: "arena-apex",
    staging: "defender-apex"
  }, {
    key: "recovery",
    u0: 49,
    u1: 58,
    h: 3.5,
    role: "recovery-lane",
    recovery: true
  }],
  ladders: [{
    from: "arrival-lower",
    to: "arrival-upper"
  }, {
    from: "pocket-mid",
    to: "pocket-shelf"
  }, {
    from: "chimney-low",
    to: "chimney-left"
  }, {
    from: "chimney-left",
    to: "chimney-right"
  }, {
    from: "arena-mid",
    to: "arena-apex"
  }],
  solids: [{
    key: "chimney-rib-left",
    u0: 36,
    u1: 37,
    h0: 4.1,
    h1: 8.7,
    role: "wall-launch"
  }, {
    key: "chimney-rib-right",
    u0: 44,
    u1: 45,
    h0: 6.9,
    h1: 11,
    role: "wall-launch"
  }]
}), o({
  name: "crossfire-cavity",
  supportFamily: "cavity",
  targetSpan: 12,
  kind: "organic",
  routes: 3,
  platforms: [{
    key: "arrival-upper",
    u0: 9,
    u1: 18,
    h: 6.35,
    role: "arrival-upper"
  }, {
    key: "cavity-low",
    u0: 28,
    u1: 40,
    h: 3.5,
    role: "covered-low",
    staging: "hound-channel"
  }, {
    key: "left-perch",
    u0: 29,
    u1: 39,
    h: 8,
    role: "defensive-perch",
    staging: "defender-left"
  }, {
    key: "center-connector",
    u0: 37,
    u1: 49,
    h: 5.5,
    role: "central-connector",
    arena: "mid",
    staging: "connector-control"
  }, {
    key: "right-perch",
    u0: 44,
    u1: 55,
    h: 10,
    role: "defensive-perch",
    arena: "high",
    staging: "defender-right"
  }, {
    key: "escape-shelf",
    u0: 47,
    u1: 58,
    h: 3.5,
    role: "drop-escape",
    recovery: true
  }, {
    key: "arena-apex",
    u0: 50,
    u1: 57,
    h: 12,
    role: "arena-apex",
    staging: "aerial-apex"
  }, {
    key: "recovery",
    u0: 51,
    u1: 58,
    h: 3.5,
    role: "recovery-lane",
    recovery: true
  }],
  ladders: [{
    from: "arrival-lower",
    to: "arrival-upper"
  }, {
    from: "pocket-mid",
    to: "pocket-shelf"
  }, {
    from: "cavity-low",
    to: "center-connector",
    u: 37.5
  }, {
    from: "center-connector",
    to: "left-perch",
    u: 37.35
  }, {
    from: "center-connector",
    to: "right-perch"
  }, {
    from: "right-perch",
    to: "arena-apex"
  }],
  solids: [{
    key: "cavity-baffle-left",
    u0: 38,
    u1: 39,
    h0: 5.5,
    h1: 7.2,
    role: "cover"
  }, {
    key: "cavity-baffle-right",
    u0: 48,
    u1: 49,
    h0: 5.5,
    h1: 9.5,
    role: "cover"
  }]
}), o({
  name: "vent-stack",
  supportFamily: "vent",
  targetSpan: 13,
  kind: "service",
  routes: 3,
  platforms: [{
    key: "arrival-upper",
    u0: 9,
    u1: 18,
    h: 7.35,
    role: "arrival-upper"
  }, {
    key: "vent-low-left",
    u0: 27,
    u1: 38,
    h: 4,
    role: "vent-landing",
    arena: "mid",
    staging: "landing-denial-low"
  }, {
    key: "vent-mid-right",
    u0: 32,
    u1: 43,
    h: 7,
    role: "vent-landing",
    staging: "landing-denial-mid"
  }, {
    key: "vent-mid-left",
    u0: 38,
    u1: 49,
    h: 7,
    role: "vent-landing",
    arena: "high",
    staging: "connector-control"
  }, {
    key: "vent-high-right",
    u0: 43,
    u1: 54,
    h: 10,
    role: "vent-landing",
    staging: "landing-denial-high"
  }, {
    key: "vent-apex",
    u0: 49,
    u1: 57,
    h: 13,
    role: "arena-apex",
    arena: "perch",
    staging: "defender-apex"
  }, {
    key: "escape-bridge",
    u0: 48,
    u1: 58,
    h: 7,
    role: "drop-escape",
    recovery: true
  }, {
    key: "recovery",
    u0: 51,
    u1: 58,
    h: 4,
    role: "recovery-lane",
    recovery: true
  }],
  ladders: [{
    from: "arrival-lower",
    to: "arrival-upper"
  }, {
    from: "pocket-mid",
    to: "pocket-shelf"
  }, {
    from: "vent-low-left",
    to: "vent-mid-right"
  }, {
    from: "vent-mid-right",
    to: "vent-mid-left"
  }, {
    from: "vent-mid-left",
    to: "vent-high-right"
  }, {
    from: "vent-high-right",
    to: "vent-apex"
  }],
  solids: [{
    key: "vent-shaft-rib",
    u0: 42,
    u1: 43,
    h0: 4,
    h1: 11.8,
    role: "wall-launch"
  }]
}), o({
  name: "kill-braid",
  supportFamily: "braid",
  targetSpan: 14,
  kind: "organic",
  routes: 3,
  arrivalLowerU1: 16,
  platforms: [{
    key: "arrival-upper",
    u0: 9,
    u1: 18,
    h: 5.35,
    role: "arrival-upper"
  }, {
    key: "braid-low-a",
    u0: 27,
    u1: 39,
    h: 2.35,
    role: "low-route",
    arena: "mid",
    staging: "hound-run"
  }, {
    key: "braid-mid-a",
    u0: 27,
    u1: 37,
    h: 6.5,
    role: "mid-route",
    staging: "connector-left"
  }, {
    key: "braid-high-a",
    u0: 36,
    u1: 45,
    h: 10,
    role: "high-route",
    staging: "aerial-left"
  }, {
    key: "crossover",
    u0: 38,
    u1: 47,
    h: 6.5,
    role: "route-crossover"
  }, {
    key: "braid-mid-b",
    u0: 39,
    u1: 50,
    h: 6.5,
    role: "mid-route",
    arena: "high",
    staging: "connector-right"
  }, {
    key: "braid-high-b",
    u0: 43,
    u1: 54,
    h: 10,
    role: "high-route",
    staging: "aerial-right"
  }, {
    key: "braid-apex",
    u0: 49,
    u1: 57,
    h: 14,
    role: "arena-apex",
    arena: "third",
    staging: "defender-apex"
  }, {
    key: "braid-low-b",
    u0: 44,
    u1: 56,
    h: 2.35,
    role: "low-route",
    recovery: true
  }, {
    key: "recovery",
    u0: 52,
    u1: 58,
    h: 6.5,
    role: "recovery-lane",
    recovery: true
  }],
  ladders: [{
    from: "arrival-lower",
    to: "arrival-upper"
  }, {
    from: "pocket-mid",
    to: "pocket-shelf"
  }, {
    from: "braid-low-a",
    to: "braid-mid-a"
  }, {
    from: "braid-mid-b",
    to: "braid-high-b"
  }, {
    from: "braid-high-b",
    to: "braid-apex"
  }],
  solids: [{
    key: "braid-rib-left",
    u0: 36,
    u1: 37,
    h0: 4.35,
    h1: 8.1,
    role: "wall-launch"
  }, {
    key: "braid-rib-right",
    u0: 47,
    u1: 48,
    h0: 6.5,
    h1: 11.4,
    role: "wall-launch"
  }]
}), o({
  name: "crown-roots",
  supportFamily: "root",
  targetSpan: 15,
  kind: "rib",
  routes: 3,
  platforms: [{
    key: "arrival-upper",
    u0: 9,
    u1: 18,
    h: 7.35,
    role: "arrival-upper"
  }, {
    key: "root-low",
    u0: 27,
    u1: 40,
    h: 3,
    role: "low-route",
    arena: "mid",
    staging: "ground-assault"
  }, {
    key: "root-mid-left",
    u0: 27,
    u1: 38,
    h: 6,
    role: "mid-route",
    staging: "connector-left"
  }, {
    key: "root-high-left",
    u0: 32,
    u1: 43,
    h: 10,
    role: "high-route",
    staging: "aerial-left"
  }, {
    key: "root-mid-center",
    u0: 38,
    u1: 50,
    h: 6,
    role: "route-crossover",
    arena: "high",
    staging: "connector-center"
  }, {
    key: "root-upper-cross",
    u0: 40,
    u1: 49,
    h: 10,
    role: "upper-crossover",
    staging: "aerial-center"
  }, {
    key: "root-high-right",
    u0: 44,
    u1: 55,
    h: 10,
    role: "high-route",
    staging: "aerial-right"
  }, {
    key: "root-apex",
    u0: 49,
    u1: 57,
    h: 15,
    role: "arena-apex",
    arena: "third",
    staging: "crown-defender"
  }, {
    key: "root-mid-right",
    u0: 49,
    u1: 58,
    h: 6,
    role: "mid-route",
    recovery: true
  }, {
    key: "root-recovery",
    u0: 51,
    u1: 58,
    h: 3,
    role: "recovery-lane",
    recovery: true
  }],
  ladders: [{
    from: "arrival-lower",
    to: "arrival-upper"
  }, {
    from: "pocket-mid",
    to: "pocket-shelf"
  }, {
    from: "root-low",
    to: "root-mid-left"
  }, {
    from: "root-mid-left",
    to: "root-high-left"
  }, {
    from: "root-mid-center",
    to: "root-upper-cross"
  }, {
    from: "root-high-right",
    to: "root-apex"
  }],
  solids: [{
    key: "crown-root-right",
    u0: 48,
    u1: 49,
    h0: 7,
    h1: 13.8,
    role: "wall-launch"
  }]
})]);
export const VERTICAL_ASSAULT = Object.freeze({
  id: "vertical-assault-v2",
  gateApron: 7,
  authoredStart: 4,
  maxPlatformLen: 13,
  maxLift: 5,
  spans: Object.freeze(VERTICAL_ASSAULT_FACES.map(_0x19866f => _0x19866f.targetSpan)),
  kinds: Object.freeze(VERTICAL_ASSAULT_FACES.map(_0x551de8 => _0x551de8.kind))
});
const n = _0x1abfd3 => Math.round(_0x1abfd3 * 1000) / 1000;
function i(_0x2d514f, _0x29e051, _0x410fba) {
  if (_0x410fba <= 18 || _0x29e051.path.faceTiles === 65) {
    return _0x2d514f.s0 + _0x410fba;
  } else {
    return _0x2d514f.s0 + _0x410fba + (_0x29e051.path.faceTiles - 65);
  }
}
function l(_0x1d5199, _0x448371, _0x2248cc, _0x361667) {
  const _0x30cf6c = _0x448371.path.faceTiles === 65 || _0x2248cc <= 18 ? 0 : _0x448371.path.faceTiles - 65;
  return [_0x1d5199.s0 + _0x2248cc + _0x30cf6c, _0x1d5199.s0 + _0x361667 + _0x30cf6c];
}
const s = Object.freeze([{
  h: [3.4, 6.4, 9.4],
  roles: ["transit-low", "transit-switchback", "transit-overlook"]
}, {
  h: [3.5, 7, 10.5],
  roles: ["transit-channel", "transit-chimney", "transit-perch"],
  approach: [15, 22, 4.35]
}, {
  h: [4, 7.5, 11],
  roles: ["transit-low", "transit-left", "transit-right"],
  approach: [15, 20, 4.35]
}, {
  h: [4, 8, 11.5],
  roles: ["transit-vent-low", "transit-vent-mid", "transit-vent-high"],
  approach: [13, 19, 3.35]
}, {
  h: [3, 7, 11],
  roles: ["transit-braid-low", "transit-braid-mid", "transit-braid-high"]
}, {
  h: [3, 7, 11.5],
  roles: ["transit-root-low", "transit-root-mid", "transit-root-high"],
  approach: [13, 18, 3.35]
}]);
function u(_0x596ba2, _0x2a4018) {
  let _0x22f2e3 = Infinity;
  for (let _0x2a83ec = _0x2a4018.s0; _0x2a83ec < _0x2a4018.s1; _0x2a83ec++) {
    const _0x2f1bcc = _0x596ba2[_0x2a83ec];
    if (_0x2f1bcc > -100) {
      _0x22f2e3 = Math.min(_0x22f2e3, _0x2f1bcc);
    }
  }
  if (Number.isFinite(_0x22f2e3)) {
    return _0x22f2e3;
  } else {
    return 2;
  }
}
function c(_0x21be07, _0x4993c3) {
  const _0x550baa = (_0x21be07.x0 + _0x21be07.x1) / 2;
  return _0x4993c3.find(_0x15da6a => _0x550baa >= _0x15da6a.s0 && _0x550baa < _0x15da6a.s1) || null;
}
function h(_0x2b5346, _0x22b4c6, _0x17dd67, _0x16dbb4, _0x128f78, _0x25bc23, _0x198980 = {}) {
  return {
    id: _0x2b5346,
    x0: n(_0x22b4c6),
    x1: n(_0x17dd67),
    y: n(_0x16dbb4),
    face: _0x128f78,
    role: _0x25bc23,
    assault: true,
    ..._0x198980
  };
}
function p(_0x36001d, _0x322145) {
  const _0x1cb265 = Math.max(_0x36001d.x0, _0x322145.x0);
  const _0x161cfa = Math.min(_0x36001d.x1, _0x322145.x1);
  return n(_0x161cfa > _0x1cb265 ? (_0x1cb265 + _0x161cfa) / 2 : (_0x36001d.x1 + _0x322145.x0) / 2);
}
function f(_0x53a4de, _0x41bb11, _0x5697cd, _0x4d627b, _0x393f58, _0x250ef2 = null) {
  const _0x2b9e36 = _0x41bb11.y <= _0x5697cd.y ? _0x41bb11 : _0x5697cd;
  const _0x48cc65 = _0x2b9e36 === _0x41bb11 ? _0x5697cd : _0x41bb11;
  return {
    id: _0x53a4de,
    x: Number.isFinite(_0x250ef2) ? n(_0x250ef2) : p(_0x2b9e36, _0x48cc65),
    y0: n(_0x2b9e36.y),
    y1: n(_0x48cc65.y),
    face: _0x4d627b,
    kind: _0x393f58
  };
}
function d(_0x3278cb, _0x4c383d, _0x3ba7b6, _0x19095a) {
  const _0x523bb0 = Math.max(_0x3ba7b6.s0 + _0x19095a.authoredStart, 0);
  const _0x316783 = Math.min(_0x3ba7b6.corner - _0x19095a.gateApron, _0x3278cb.length);
  let _0x515041 = null;
  for (let _0x5f2feb = _0x523bb0; _0x5f2feb <= _0x316783; _0x5f2feb++) {
    const _0x175696 = _0x5f2feb < _0x316783 && _0x3278cb[_0x5f2feb] <= -100;
    if (_0x175696 && _0x515041 === null) {
      _0x515041 = _0x5f2feb;
      continue;
    }
    if (_0x175696 || _0x515041 === null) {
      continue;
    }
    let _0x1b27e7 = null;
    for (const _0x35c568 of _0x4c383d) {
      if (!_0x35c568.pocket && !_0x35c568.arrival && !_0x35c568.arena && !_0x35c568.assault && !(_0x35c568.x0 > _0x515041) && !(_0x35c568.x1 < _0x5f2feb)) {
        if (!_0x1b27e7 || _0x35c568.y < _0x1b27e7.y) {
          _0x1b27e7 = _0x35c568;
        }
      }
    }
    if (_0x1b27e7) {
      _0x1b27e7.routeBridge = true;
    }
    _0x515041 = null;
  }
}
function g(_0x108be3, _0x54fc49) {
  if (!_0x108be3) {
    return null;
  }
  const _0x2539f0 = _0x108be3.tiers.map(_0x17f6f => {
    const _0x48ee94 = _0x54fc49.get(_0x17f6f.name);
    if (_0x48ee94) {
      return {
        name: _0x17f6f.name,
        x0: _0x48ee94.x0,
        x1: _0x48ee94.x1,
        base: _0x17f6f.base,
        y: _0x48ee94.y,
        fits: true
      };
    } else {
      return {
        ..._0x17f6f,
        fits: false
      };
    }
  });
  return {
    ..._0x108be3,
    tiers: _0x2539f0,
    platforms: [..._0x54fc49.values()]
  };
}
function m(_0x457640, _0x48dcf3) {
  return _0x457640.find(_0x11a7d2 => _0x11a7d2.id === _0x48dcf3) || null;
}
function y(_0x43a1ab, _0x1354a2, _0x2df08f, _0x34a80a, _0x56df43) {
  if (_0x2df08f) {
    _0x2df08f.face = _0x34a80a;
    _0x2df08f.role = _0x2df08f.role || _0x56df43;
    _0x43a1ab.set(_0x1354a2, _0x2df08f);
  }
}
export function installVerticalAssault(_0x1a1cbf, _0x1a0916, _0x2e3143, {
  pockets: _0x53f959 = [],
  arrivals: _0x184595 = [],
  arenas: _0x1e3d68 = []
} = {}, _0x142a1a = VERTICAL_ASSAULT) {
  const _0xeab546 = _0x17ede1(_0x1a1cbf);
  for (const _0x69e0e9 of _0xeab546) {
    d(_0x1a0916, _0x2e3143, _0x69e0e9, _0x142a1a);
  }
  for (let _0x51624c = _0x2e3143.length - 1; _0x51624c >= 0; _0x51624c--) {
    const _0x222571 = _0x2e3143[_0x51624c];
    const _0x4d86e6 = c(_0x222571, _0xeab546);
    if (!_0x4d86e6) {
      continue;
    }
    const _0x19c868 = _0x222571.x1 > _0x4d86e6.s0 + _0x142a1a.authoredStart && _0x222571.x0 < _0x4d86e6.corner - _0x142a1a.gateApron;
    if (_0x222571.arena || _0x19c868 && !_0x222571.pocket && !_0x222571.arrival && !_0x222571.routeBridge) {
      _0x2e3143.splice(_0x51624c, 1);
    }
  }
  const _0xdaabb0 = [];
  const _0x5e92fd = [];
  const _0x398279 = [];
  const _0x10c9a0 = [];
  const _0x2b8ddb = [];
  for (let _0x3ace03 = 0; _0x3ace03 < _0xeab546.length; _0x3ace03++) {
    const _0x240e71 = _0xeab546[_0x3ace03];
    const _0x32bf41 = _0x240e71.face;
    const _0x1e47a6 = VERTICAL_ASSAULT_FACES[_0x3ace03];
    const _0x411cf7 = u(_0x1a0916, _0x240e71);
    const _0x396972 = n(_0x411cf7 + _0x1e47a6.targetSpan);
    const _0x241581 = [];
    const _0x2678c8 = [];
    const _0xa2230e = [];
    const _0x5027e8 = new Map();
    const _0x1ef468 = new Map();
    const _0x59a534 = _0x53f959.find(_0x45e169 => _0x45e169.face === _0x32bf41);
    y(_0x5027e8, "pocket-mid", _0x59a534 && m(_0x2e3143, _0x59a534.mid.id), _0x32bf41, "pocket-mid");
    y(_0x5027e8, "pocket-shelf", _0x59a534 && m(_0x2e3143, _0x59a534.shelf.id), _0x32bf41, "pocket-shelf");
    let _0x2e8c65 = m(_0x2e3143, "arrival-f" + _0x32bf41);
    if (_0x2e8c65) {
      _0x2e8c65.face = _0x32bf41;
      _0x2e8c65.role = "arrival-lower";
      if (Number.isFinite(_0x1e47a6.arrivalLowerU1)) {
        _0x2e8c65.x1 = n(Math.max(_0x2e8c65.x1, i(_0x240e71, _0x1a1cbf, _0x1e47a6.arrivalLowerU1)));
      }
    } else {
      const _0x105cb3 = _0x1e47a6.platforms.find(_0x415bbf => _0x415bbf.key === "arrival-lower") || {
        u0: 5,
        u1: 12,
        h: 4.35
      };
      _0x2e8c65 = h("assault-f" + _0x32bf41 + "-arrival-lower", i(_0x240e71, _0x1a1cbf, _0x105cb3.u0), i(_0x240e71, _0x1a1cbf, _0x105cb3.u1), _0x411cf7 + _0x105cb3.h, _0x32bf41, "arrival-lower", {
        arrival: true,
        supportFamily: _0x1e47a6.supportFamily
      });
      _0x241581.push(_0x2e8c65);
    }
    _0x5027e8.set("arrival-lower", _0x2e8c65);
    for (const _0x13de6e of _0x1e47a6.platforms) {
      if (_0x13de6e.key === "arrival-lower") {
        continue;
      }
      const _0x276935 = _0x1e3d68.find(_0x13fabf => _0x13fabf.face === _0x32bf41);
      const _0x5c9f14 = _0x13de6e.arena && _0x276935 ? _0x276935.platforms.find(_0x244eca => _0x244eca.id === "arena-f" + _0x32bf41 + "-" + _0x13de6e.arena) : null;
      const _0x2dd085 = h(_0x5c9f14 ? _0x5c9f14.id : _0x13de6e.arena ? "arena-f" + _0x32bf41 + "-" + _0x13de6e.arena : "assault-f" + _0x32bf41 + "-" + _0x13de6e.key, ...l(_0x240e71, _0x1a1cbf, _0x13de6e.u0, _0x13de6e.u1), Math.min(_0x396972, _0x411cf7 + _0x13de6e.h), _0x32bf41, _0x13de6e.role, {
        route: _0x13de6e.role,
        supportFamily: _0x1e47a6.supportFamily,
        recovery: !!_0x13de6e.recovery,
        dropRejoin: _0x13de6e.role === "recovery-lane",
        arrival: !!_0x13de6e.arrival,
        arena: !!_0x13de6e.arena,
        staging: _0x13de6e.staging || null
      });
      _0x241581.push(_0x2dd085);
      _0x5027e8.set(_0x13de6e.key, _0x2dd085);
      if (_0x13de6e.arena) {
        _0x1ef468.set(_0x13de6e.arena, _0x2dd085);
      }
    }
    const _0x11bec5 = _0x1a1cbf.path.faceTiles > 65 ? s[_0x3ace03] : null;
    if (_0x11bec5) {
      const _0x5e156e = [[31, 43], [40, 50]];
      if (_0x11bec5.approach) {
        const [_0x30af10, _0x11d68c, _0x1f15ba] = _0x11bec5.approach;
        const _0x28d6e9 = h("assault-f" + _0x32bf41 + "-approach-relay", _0x240e71.s0 + _0x30af10, _0x240e71.s0 + _0x11d68c, Math.min(_0x396972, _0x411cf7 + _0x1f15ba), _0x32bf41, "arrival-relay", {
          route: "arrival-relay",
          supportFamily: _0x1e47a6.supportFamily,
          transit: true
        });
        _0x241581.push(_0x28d6e9);
        _0x5027e8.set("approach-relay", _0x28d6e9);
      }
      for (let _0x5a4956 = 0; _0x5a4956 < _0x5e156e.length; _0x5a4956++) {
        const [_0xa4d7b4, _0x1202ef] = _0x5e156e[_0x5a4956];
        const _0x1ce8da = h("assault-f" + _0x32bf41 + "-transit-" + (_0x5a4956 + 1), _0x240e71.s0 + _0xa4d7b4, _0x240e71.s0 + _0x1202ef, Math.min(_0x396972, _0x411cf7 + _0x11bec5.h[_0x5a4956]), _0x32bf41, _0x11bec5.roles[_0x5a4956], {
          route: _0x11bec5.roles[_0x5a4956],
          supportFamily: _0x1e47a6.supportFamily,
          transit: true
        });
        _0x241581.push(_0x1ce8da);
        _0x5027e8.set("transit-" + (_0x5a4956 + 1), _0x1ce8da);
      }
    }
    for (let _0x21844e = _0x2e3143.length - 1; _0x21844e >= 0; _0x21844e--) {
      const _0xff25f7 = _0x2e3143[_0x21844e];
      if (!_0xff25f7.routeBridge || c(_0xff25f7, _0xeab546)?.face !== _0x32bf41) {
        continue;
      }
      const _0x23bb86 = _0x241581.find(_0x13d940 => _0x13d940.x0 <= _0xff25f7.x0 && _0x13d940.x1 >= _0xff25f7.x1 && (_0x13d940.recovery || _0x13d940.role === "low-route" || _0x13d940.role === "arena-ingress"));
      if (_0x23bb86) {
        _0x23bb86.routeBridge = true;
        _0x2e3143.splice(_0x21844e, 1);
      }
    }
    const _0x2116a6 = [];
    for (let _0x11fbfc = 0; _0x11fbfc < _0x1e47a6.ladders.length; _0x11fbfc++) {
      const _0x4dee63 = _0x1e47a6.ladders[_0x11fbfc];
      const _0x550f4a = _0x5027e8.get(_0x4dee63.from);
      const _0x12d101 = _0x5027e8.get(_0x4dee63.to);
      if (!_0x550f4a || !_0x12d101 || Math.abs(_0x550f4a.y - _0x12d101.y) < 0.01) {
        continue;
      }
      const _0x17bcac = f("ladder-f" + _0x32bf41 + "-" + (_0x11fbfc + 1) + "-" + _0x4dee63.from + "-to-" + _0x4dee63.to, _0x550f4a, _0x12d101, _0x32bf41, _0x1e47a6.kind, Number.isFinite(_0x4dee63.u) ? i(_0x240e71, _0x1a1cbf, _0x4dee63.u) : null);
      _0x2678c8.push(_0x17bcac);
      _0x2116a6.push({
        id: _0x17bcac.id,
        kind: "ladder-or-jump",
        from: _0x4dee63.from,
        to: _0x4dee63.to
      });
    }
    if (_0x11bec5) {
      for (let _0x1969e2 = 0; _0x1969e2 < 1; _0x1969e2++) {
        const _0x449233 = _0x5027e8.get("transit-" + (_0x1969e2 + 1));
        const _0x6051dc = _0x5027e8.get("transit-" + (_0x1969e2 + 2));
        const _0x412213 = f("ladder-f" + _0x32bf41 + "-transit-" + (_0x1969e2 + 1), _0x449233, _0x6051dc, _0x32bf41, _0x1e47a6.kind);
        _0x2678c8.push(_0x412213);
        _0x2116a6.push({
          id: _0x412213.id,
          kind: "ladder-or-jump",
          from: "transit-" + (_0x1969e2 + 1),
          to: "transit-" + (_0x1969e2 + 2)
        });
      }
    }
    for (const _0xd4c686 of _0x1e47a6.solids) {
      const [_0x41383f, _0x56b7f8] = l(_0x240e71, _0x1a1cbf, _0xd4c686.u0, _0xd4c686.u1);
      const _0x491827 = {
        id: "assault-f" + _0x32bf41 + "-" + _0xd4c686.key,
        x0: n(_0x41383f),
        x1: n(_0x56b7f8),
        y0: n(_0x411cf7 + _0xd4c686.h0),
        y1: n(Math.min(_0x396972, _0x411cf7 + _0xd4c686.h1)),
        face: _0x32bf41,
        role: _0xd4c686.role,
        grabbable: true,
        assault: true
      };
      if (_0x491827.y1 > _0x491827.y0) {
        _0xa2230e.push(_0x491827);
        _0x5e92fd.push(_0x491827);
      }
    }
    const _0x3984e2 = _0x241581.filter(_0x2d1caf => _0x2d1caf.staging).map(_0x442f9a => ({
      id: "stage-f" + _0x32bf41 + "-" + _0x442f9a.staging,
      role: _0x442f9a.staging,
      platformId: _0x442f9a.id,
      x: n((_0x442f9a.x0 + _0x442f9a.x1) / 2),
      y: n(_0x442f9a.y)
    }));
    const _0x326572 = _0x241581.filter(_0x91e92 => _0x91e92.recovery).map(_0x6b37eb => _0x6b37eb.id);
    const _0x52fea2 = _0x2116a6;
    _0xdaabb0.push(..._0x241581);
    _0x398279.push(..._0x2678c8);
    _0x10c9a0.push({
      id: "vertical-assault-f" + _0x32bf41,
      face: _0x32bf41,
      silhouette: _0x1e47a6.name,
      supportFamily: _0x1e47a6.supportFamily,
      routeCount: _0x1e47a6.routes,
      x0: _0x240e71.s0 + _0x142a1a.authoredStart,
      x1: _0x240e71.corner - _0x142a1a.gateApron,
      minY: _0x411cf7,
      peakY: _0x396972,
      targetSpan: _0x1e47a6.targetSpan,
      platforms: _0x241581,
      ladders: _0x2678c8,
      solidRects: _0xa2230e,
      connectors: _0x52fea2,
      staging: _0x3984e2,
      recovery: _0x326572,
      dropRejoin: _0x326572.length ? {
        id: _0x326572[_0x326572.length - 1],
        from: _0x241581.find(_0x8a8d5 => _0x8a8d5.role === "arena-apex")?.id || null,
        to: _0x326572[_0x326572.length - 1]
      } : null
    });
    const _0x5cb7fe = g(_0x1e3d68.find(_0x2ac024 => _0x2ac024.face === _0x32bf41), _0x1ef468);
    if (_0x5cb7fe) {
      _0x2b8ddb.push(_0x5cb7fe);
    }
  }
  _0x2e3143.push(..._0xdaabb0);
  return {
    id: _0x142a1a.id,
    chunks: _0x10c9a0,
    platforms: _0xdaabb0,
    solidRects: _0x5e92fd,
    ladders: _0x398279,
    arenas: _0x2b8ddb
  };
}
export function verticalAssaultReport(_0x5b296b, _0x2bd915, _0x22fae4 = VERTICAL_ASSAULT) {
  return _0x17ede1(_0x2bd915).map((_0x366f49, _0x3d2d08) => {
    const _0x2d9eea = (_0x5b296b.assaults || []).find(_0x1e8788 => _0x1e8788.face === _0x366f49.face);
    const _0x1f369a = _0x5b296b.platforms.filter(_0x547ee3 => _0x547ee3.assault && _0x547ee3.face === _0x366f49.face);
    const _0x5eb342 = (_0x5b296b.ladders || []).filter(_0x47bf13 => _0x47bf13.face === _0x366f49.face);
    const _0x3b13ee = (_0x5b296b.solidRects || []).filter(_0x3f5a20 => _0x3f5a20.assault && _0x3f5a20.face === _0x366f49.face);
    const _0x10f4f6 = u(_0x5b296b.groundH, _0x366f49);
    let _0x3321e4 = _0x10f4f6;
    for (const _0xd6ff83 of _0x1f369a) {
      _0x3321e4 = Math.max(_0x3321e4, _0xd6ff83.y);
    }
    for (const _0xa8581c of _0x3b13ee) {
      _0x3321e4 = Math.max(_0x3321e4, _0xa8581c.y1);
    }
    const _0x3393a3 = _0x366f49.s0 + _0x22fae4.authoredStart;
    const _0x3cace2 = _0x366f49.corner - _0x22fae4.gateApron;
    let _0x47e3b6 = Infinity;
    let _0x3a751b = 0;
    for (let _0x24328b = _0x3393a3; _0x24328b <= _0x3cace2 - _0x3f1924.lookahead; _0x24328b++) {
      const _0x133634 = _0x23809b(_0x5b296b, _0x24328b, _0x2bd915, _0x3f1924).length;
      _0x47e3b6 = Math.min(_0x47e3b6, _0x133634);
      _0x3a751b = Math.max(_0x3a751b, _0x133634);
    }
    const _0x27a77c = _0x1f369a.map(_0x1cbdd6 => n(_0x1cbdd6.x0 - _0x366f49.s0) + ":" + n(_0x1cbdd6.x1 - _0x1cbdd6.x0) + ":" + n(_0x1cbdd6.y - _0x10f4f6)).sort().join("|");
    return {
      face: _0x366f49.face,
      silhouette: _0x2d9eea ? _0x2d9eea.silhouette : VERTICAL_ASSAULT_FACES[_0x3d2d08].name,
      supportFamily: _0x2d9eea ? _0x2d9eea.supportFamily : VERTICAL_ASSAULT_FACES[_0x3d2d08].supportFamily,
      targetSpan: _0x22fae4.spans[_0x3d2d08],
      span: n(_0x3321e4 - _0x10f4f6),
      peakY: n(_0x3321e4),
      platformCount: _0x1f369a.length,
      maxPlatformLen: _0x1f369a.reduce((_0x4de4e6, _0x7ebf7d) => Math.max(_0x4de4e6, _0x7ebf7d.x1 - _0x7ebf7d.x0), 0),
      connectorCount: _0x5eb342.length,
      recoveryCount: _0x2d9eea ? _0x2d9eea.recovery.length : 0,
      stagingCount: _0x2d9eea ? _0x2d9eea.staging.length : 0,
      coverCount: _0x3b13ee.length,
      routeMin: Number.isFinite(_0x47e3b6) ? _0x47e3b6 : 0,
      routeMax: _0x3a751b,
      gateApron: _0x22fae4.gateApron,
      silhouetteSignature: _0x27a77c
    };
  });
}