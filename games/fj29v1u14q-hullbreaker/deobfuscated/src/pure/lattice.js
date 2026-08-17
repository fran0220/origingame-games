import { cornerSList as _0x59e83f } from "./path.js";
export const LATTICE = {
  id: "lattice-v1",
  lookahead: 12,
  minRoutes: 3,
  maxRoutes: 5,
  bandStep: 0.5,
  bandMerge: 0.9,
  midRise: 2.35,
  tierRise: 3,
  patch: {
    minLen: 5,
    maxLen: 8,
    laneGap: 3,
    supportSlack: 0.75,
    cornerClearBefore: 8,
    cornerClearAfter: 5,
    maxPasses: 4
  },
  pocket: {
    perFaceFrac: [0.24, 0.21, 0.26, 0.2, 0.245, 0.225],
    deckMin: 3,
    approachCols: 6,
    gapCols: 2,
    landingDrop: 1,
    landingCols: 5,
    mountCols: 3,
    midCols: 5,
    rewardRise: 0.7,
    rewardLetters: ["S", "S", "L", "H", "F", "H"],
    cornerClearBefore: 35,
    cornerClearAfter: 8,
    timing: {
      entryEdgeMarginTiles: 14,
      minExitMarginTiles: 6
    }
  },
  hound: {
    firstFace: 2,
    patrolCols: 3,
    ladderClearCols: 2,
    cornerClearBefore: 35
  },
  emplacement: {
    polypFirstFace: 3,
    mortarFirstFace: 4,
    mountInset: 0.75,
    zoneIntoLanding: 2.5
  },
  arrival: {
    firstFace: 2,
    afterApron: 5,
    len: 7
  },
  arena: {
    firstFace: 2,
    back: 30,
    front: 7,
    plans: [{
      tiers: [{
        name: "mid",
        back: 24,
        front: 11
      }]
    }, {
      tiers: [{
        name: "mid",
        back: 26,
        front: 11
      }, {
        name: "high",
        back: 22,
        front: 9
      }]
    }, {
      tiers: [{
        name: "mid",
        back: 28,
        front: 9
      }, {
        name: "high",
        back: 24,
        front: 9
      }, {
        name: "perch",
        back: 20,
        front: 14
      }]
    }, {
      tiers: [{
        name: "mid",
        back: 29,
        front: 8
      }, {
        name: "high",
        back: 25,
        front: 8
      }, {
        name: "third",
        back: 21,
        front: 8
      }]
    }, {
      tiers: [{
        name: "mid",
        back: 30,
        front: 7
      }, {
        name: "high",
        back: 27,
        front: 7
      }, {
        name: "third",
        back: 23,
        front: 7
      }]
    }]
  }
};
export function latticeFaces(_0x172128) {
  const _0x49795f = _0x59e83f(_0x172128);
  const _0xc0caa0 = [];
  for (let _0x1d01d3 = 1; _0x1d01d3 <= _0x172128.path.faces; _0x1d01d3++) {
    _0xc0caa0.push({
      face: _0x1d01d3,
      s0: _0x172128.path.introTiles + _0x172128.path.faceTiles * (_0x1d01d3 - 1),
      s1: _0x49795f[_0x1d01d3 - 1],
      corner: _0x49795f[_0x1d01d3 - 1],
      prevCorner: _0x1d01d3 > 1 ? _0x49795f[_0x1d01d3 - 2] : _0x172128.path.introTiles
    });
  }
  return _0xc0caa0;
}
export function latticeInterior(_0x36fb2b, _0x224198 = LATTICE) {
  return latticeFaces(_0x36fb2b).map(_0x5d3607 => ({
    face: _0x5d3607.face,
    a: _0x5d3607.s0 + _0x224198.patch.cornerClearAfter,
    b: _0x5d3607.corner - _0x224198.patch.cornerClearBefore - _0x224198.lookahead
  }));
}
export function latticeSurfacesAt(_0xe1a563, _0x134322) {
  const _0x4f6a1a = [];
  const _0x30f604 = _0xe1a563.groundH[_0x134322];
  if (_0x30f604 !== undefined && _0x30f604 > -100) {
    _0x4f6a1a.push(_0x30f604);
  }
  for (const _0x506740 of _0xe1a563.platforms) {
    if (_0x134322 >= _0x506740.x0 && _0x134322 < _0x506740.x1) {
      _0x4f6a1a.push(_0x506740.y);
    }
  }
  return _0x4f6a1a.sort((_0x543a10, _0x3ff7d0) => _0x543a10 - _0x3ff7d0);
}
export function latticeBands(_0x276292, _0x2e32a2, _0x57c9b6, _0x3d452c = LATTICE) {
  const _0x5099d1 = [];
  const _0x41a841 = Math.min(_0x2e32a2 + _0x3d452c.lookahead, _0x276292.groundH.length);
  let _0x532222 = -999;
  for (let _0x3faa4a = _0x2e32a2; _0x3faa4a < _0x41a841; _0x3faa4a++) {
    if (_0x276292.groundH[_0x3faa4a] > -100) {
      _0x532222 = Math.max(_0x532222, _0x276292.groundH[_0x3faa4a]);
    }
    for (const _0x1ccf69 of _0x276292.platforms) {
      if (_0x3faa4a < _0x1ccf69.x0 || _0x3faa4a >= _0x1ccf69.x1) {
        continue;
      }
      const _0x31ca14 = Math.round(_0x1ccf69.y / _0x3d452c.bandStep) * _0x3d452c.bandStep;
      if (!_0x5099d1.some(_0x1b7416 => Math.abs(_0x1b7416 - _0x31ca14) < _0x3d452c.bandMerge)) {
        _0x5099d1.push(_0x31ca14);
      }
    }
  }
  if (_0x532222 > -100) {
    _0x5099d1.push(_0x532222);
  }
  return _0x5099d1.sort((_0x1cb1f4, _0x9ab70) => _0x1cb1f4 - _0x9ab70);
}
export function latticeRouteCount(_0x1a81a4, _0x4e34ef, _0xaf543, _0x32f0db = LATTICE) {
  return latticeBands(_0x1a81a4, _0x4e34ef, _0xaf543, _0x32f0db).length;
}
export function latticeSupportY(_0x1a0654, _0x1b9f72) {
  let _0x149f3a = -999;
  const _0xb7114a = _0x1a0654.groundH.length;
  for (let _0x1824bc = Math.max(0, _0x1b9f72.x0 - 1); _0x1824bc <= Math.min(_0xb7114a - 1, _0x1b9f72.x1 + 1); _0x1824bc++) {
    if (_0x1a0654.groundH[_0x1824bc] > -100) {
      _0x149f3a = Math.max(_0x149f3a, _0x1a0654.groundH[_0x1824bc]);
    }
  }
  for (const _0x2d22eb of _0x1a0654.platforms) {
    if (_0x2d22eb !== _0x1b9f72 && _0x2d22eb.y < _0x1b9f72.y && _0x2d22eb.x1 > _0x1b9f72.x0 - 1 && _0x2d22eb.x0 < _0x1b9f72.x1 + 1) {
      _0x149f3a = Math.max(_0x149f3a, _0x2d22eb.y);
    }
  }
  return _0x149f3a;
}
export function latticePocketSites(_0x560552, _0x464b92, _0x2fee04 = LATTICE) {
  const _0xe14f05 = _0x2fee04.pocket;
  const _0x14d8b3 = _0x560552.gen;
  const _0x4eb290 = _0xe14f05.approachCols + _0xe14f05.gapCols + _0xe14f05.landingCols;
  return latticeFaces(_0x560552).map((_0x222197, _0x962807) => {
    const _0x52c970 = Math.round(_0x222197.s0 + _0xe14f05.perFaceFrac[_0x962807 % _0xe14f05.perFaceFrac.length] * _0x560552.path.faceTiles);
    const _0x47791a = _0x464b92 && _0x464b92[_0x52c970 - 1] > -100 ? _0x464b92[_0x52c970 - 1] : _0xe14f05.deckMin;
    const _0x696d1b = Math.max(_0xe14f05.deckMin, Math.min(_0x14d8b3.maxH, _0x47791a));
    const _0x2ea36a = Math.max(_0x14d8b3.minH, _0x696d1b - _0xe14f05.landingDrop);
    const _0x57a287 = _0x52c970 + _0xe14f05.approachCols;
    const _0x289f79 = _0x57a287 + _0xe14f05.gapCols;
    const _0x1f4837 = _0x2ea36a + _0x2fee04.midRise;
    const _0x48c64e = _0x1f4837 + _0x2fee04.tierRise;
    const _0x143fa0 = _0x560552.player.runSpeed;
    const _0x1b1f5d = _0xe14f05.gapCols;
    const _0xd8b799 = _0x1b1f5d * 2 / _0x143fa0;
    const _0xee999d = _0x560552.scrollSpeed * _0xd8b799;
    return {
      id: "pocket-f" + _0x222197.face,
      face: _0x222197.face,
      x0: _0x52c970,
      x1: _0x52c970 + _0x4eb290,
      deckY: _0x696d1b,
      landingY: _0x2ea36a,
      gap: {
        x0: _0x57a287,
        x1: _0x289f79
      },
      shelf: {
        id: "pocket-shelf-f" + _0x222197.face,
        x0: _0x57a287,
        x1: _0x289f79 + _0xe14f05.mountCols,
        y: _0x48c64e,
        pocket: true
      },
      mid: {
        id: "pocket-mid-f" + _0x222197.face,
        x0: _0x289f79,
        x1: _0x289f79 + _0xe14f05.midCols,
        y: _0x1f4837,
        pocket: true
      },
      reward: {
        kind: "letter",
        letter: _0xe14f05.rewardLetters[_0x962807 % _0xe14f05.rewardLetters.length],
        x: _0x57a287 + 0.5,
        y: _0x48c64e + _0xe14f05.rewardRise,
        mode: "fixed"
      },
      detour: {
        depthTiles: _0x1b1f5d,
        seconds: _0xd8b799,
        edgeAdvanceTiles: _0xee999d,
        exitMarginTiles: _0xe14f05.timing.entryEdgeMarginTiles - _0xee999d
      },
      corner: _0x222197.corner
    };
  });
}
export function latticeCarvePocket(_0x2d03de, _0xccbc3a, _0x1b4017) {
  for (let _0x3a538e = _0xccbc3a.x0 - 2; _0x3a538e < _0xccbc3a.x0; _0x3a538e++) {
    if (_0x3a538e >= 0 && _0x3a538e < _0x2d03de.length) {
      _0x2d03de[_0x3a538e] = _0xccbc3a.deckY;
    }
  }
  for (let _0xe3f6eb = _0xccbc3a.x0; _0xe3f6eb < _0xccbc3a.x1; _0xe3f6eb++) {
    if (!(_0xe3f6eb < 0) && !(_0xe3f6eb >= _0x2d03de.length)) {
      _0x2d03de[_0xe3f6eb] = _0xe3f6eb < _0xccbc3a.gap.x0 ? _0xccbc3a.deckY : _0xe3f6eb < _0xccbc3a.gap.x1 ? _0x1b4017 : _0xccbc3a.landingY;
    }
  }
}
export function latticeLocalBase(_0x40b58a, _0x8236ee, _0x13b408, _0x4163d8) {
  let _0x27f8ea = -999;
  for (let _0x437db1 = _0x8236ee; _0x437db1 < _0x13b408; _0x437db1++) {
    if (_0x40b58a[_0x437db1] > -100) {
      _0x27f8ea = Math.max(_0x27f8ea, _0x40b58a[_0x437db1]);
    }
  }
  if (_0x27f8ea > -100) {
    return _0x27f8ea;
  } else {
    return _0x4163d8;
  }
}
export function latticeInstallSite(_0x12d44e, _0x12d33e) {
  for (const _0x5e6f19 of _0x12d33e) {
    _0x12d44e.push({
      ..._0x5e6f19
    });
  }
}
export function latticeArrivalSites(_0x3cc794, _0x268906, _0x553618 = LATTICE) {
  const _0x3bdc00 = _0x553618.arrival;
  const _0x209d73 = _0x3cc794.gen;
  return latticeFaces(_0x3cc794).filter(_0x1c6b3c => _0x1c6b3c.face >= _0x3bdc00.firstFace).map(_0x17194d => {
    const _0x872c71 = _0x17194d.prevCorner + _0x3bdc00.afterApron;
    const _0x231695 = _0x872c71 + _0x3bdc00.len;
    const _0x34018b = latticeLocalBase(_0x268906, _0x872c71, _0x231695, _0x209d73.minH);
    const _0x5335dd = _0x34018b + _0x553618.midRise;
    return {
      face: _0x17194d.face,
      corner: _0x17194d.prevCorner,
      x0: _0x872c71,
      x1: _0x231695,
      base: _0x34018b,
      platforms: [{
        id: "arrival-f" + _0x17194d.face,
        x0: _0x872c71,
        x1: _0x231695,
        y: _0x5335dd,
        arrival: true
      }]
    };
  });
}
export function latticeArenaSites(_0x528d4d, _0x181266, _0x5729c5 = LATTICE) {
  const _0x37e608 = _0x5729c5.arena;
  const _0x55bf87 = _0x528d4d.gen;
  return latticeFaces(_0x528d4d).filter(_0x206b4a => _0x206b4a.face >= _0x37e608.firstFace).map(_0xb922a6 => {
    const _0x2da5fc = _0x37e608.plans[_0xb922a6.face - _0x37e608.firstFace];
    const _0x2be256 = _0xb922a6.corner - _0x37e608.back;
    const _0x31b01e = _0xb922a6.corner - _0x37e608.front;
    const _0x39b556 = [];
    const _0x9380fa = [];
    for (const _0x1a208d of _0x2da5fc.tiers) {
      const _0x40c1e5 = _0xb922a6.corner - _0x1a208d.back;
      const _0x581f48 = _0xb922a6.corner - _0x1a208d.front;
      const _0x5a4e49 = latticeLocalBase(_0x181266, _0x40c1e5, _0x581f48, _0x55bf87.minH);
      const _0x15a37c = _0x1a208d.name === "mid" ? _0x5a4e49 + _0x5729c5.midRise : _0x1a208d.name === "high" ? _0x5a4e49 + _0x5729c5.midRise + _0x5729c5.tierRise : _0x5a4e49 + _0x5729c5.midRise + _0x5729c5.tierRise * 2;
      _0x9380fa.push({
        name: _0x1a208d.name,
        x0: _0x40c1e5,
        x1: _0x581f48,
        base: _0x5a4e49,
        y: _0x15a37c,
        fits: _0x15a37c <= _0x55bf87.laneCapY
      });
      if (_0x15a37c <= _0x55bf87.laneCapY) {
        _0x39b556.push({
          id: "arena-f" + _0xb922a6.face + "-" + _0x1a208d.name,
          x0: _0x40c1e5,
          x1: _0x581f48,
          y: _0x15a37c,
          arena: true
        });
      }
    }
    return {
      face: _0xb922a6.face,
      corner: _0xb922a6.corner,
      x0: _0x2be256,
      x1: _0x31b01e,
      tiers: _0x9380fa,
      platforms: _0x39b556
    };
  });
}
export function latticeFlatRunAt(_0x5e69eb, _0x5e4e10, _0x200f81) {
  const _0x4eca5d = _0x5e69eb[_0x5e4e10];
  if (!(_0x4eca5d > -100)) {
    return false;
  }
  for (let _0x4277e4 = _0x5e4e10; _0x4277e4 < _0x5e4e10 + _0x200f81; _0x4277e4++) {
    if (_0x5e69eb[_0x4277e4] !== _0x4eca5d) {
      return false;
    }
  }
  return true;
}
export function latticeHoundBeats(_0x46ff75, _0x5881b3, _0x1c77f9, _0x566ffa = LATTICE) {
  const _0x223c7e = _0x566ffa.hound;
  const _0x3c2b98 = [];
  for (const _0xdd4329 of _0x1c77f9) {
    if (_0xdd4329.face < _0x223c7e.firstFace) {
      continue;
    }
    const _0x25f61c = _0xdd4329.gap.x1 + (_0x223c7e.ladderClearCols || 0);
    if (latticeFlatRunAt(_0x5881b3, _0x25f61c, _0x223c7e.patrolCols)) {
      _0x3c2b98.push({
        x: _0x25f61c + _0x223c7e.patrolCols / 2,
        type: "hound",
        kind: "hound",
        deck: _0x5881b3[_0x25f61c],
        dir: -1,
        gating: false,
        contests: "deck-line",
        owns: _0xdd4329.id + "-landing",
        patrol: {
          x0: _0x25f61c,
          x1: _0x25f61c + _0x223c7e.patrolCols
        }
      });
    }
  }
  return _0x3c2b98;
}
export function latticeEmplacementBeats(_0x4f0d4d, _0x17df67, _0x1a3945 = LATTICE) {
  const _0x232ae5 = _0x1a3945.emplacement;
  const _0x197db6 = [];
  for (const _0x406b0e of _0x17df67 || []) {
    if (_0x406b0e.face >= _0x232ae5.polypFirstFace) {
      _0x197db6.push({
        id: "polyp-" + _0x406b0e.id,
        x: _0x406b0e.mid.x1 - _0x232ae5.mountInset,
        type: "polyp",
        kind: "polyp",
        deck: _0x406b0e.mid.y,
        dir: -1,
        gating: false,
        contests: "mid-connector",
        owns: _0x406b0e.mid.id
      });
    }
    if (_0x406b0e.face >= _0x232ae5.mortarFirstFace) {
      _0x197db6.push({
        id: "mortar-" + _0x406b0e.id,
        x: _0x406b0e.gap.x1 + _0x232ae5.mountInset,
        type: "mortar",
        kind: "mortar",
        deck: _0x406b0e.shelf.y,
        dir: 1,
        gating: false,
        contests: "pocket-landing",
        owns: _0x406b0e.id + "-landing",
        zone: {
          x: _0x406b0e.gap.x1 + _0x232ae5.zoneIntoLanding,
          y: _0x406b0e.landingY,
          surface: _0x406b0e.id + "-landing"
        }
      });
    }
  }
  return _0x197db6;
}
function e(_0x32258f, _0x490854, _0x266d47, _0x29377a) {
  const _0x1a8583 = _0x266d47.gen;
  const _0x114dc9 = _0x59e83f(_0x266d47);
  const _0x126e62 = Math.min(_0x490854 + _0x29377a.lookahead, _0x32258f.groundH.length);
  let _0x33a186 = -999;
  for (let _0x347893 = _0x490854; _0x347893 < _0x126e62; _0x347893++) {
    if (_0x32258f.groundH[_0x347893] > -100) {
      _0x33a186 = Math.max(_0x33a186, _0x32258f.groundH[_0x347893]);
    }
  }
  if (_0x33a186 < -100) {
    return null;
  }
  const _0x478aef = latticeBands(_0x32258f, _0x490854, _0x266d47, _0x29377a);
  const _0x2b81fd = [_0x33a186 + _0x29377a.midRise, _0x33a186 + _0x29377a.midRise + _0x29377a.tierRise];
  let _0x5effa3 = 0;
  for (const _0x185a0c of _0x2b81fd) {
    if (!_0x478aef.some(_0x383a0c => Math.abs(_0x383a0c - _0x185a0c) <= _0x29377a.patch.supportSlack)) {
      _0x5effa3 = _0x185a0c;
      break;
    }
  }
  if (!_0x5effa3 || _0x5effa3 > _0x1a8583.laneCapY) {
    return null;
  }
  const _0x2a99ae = _0x29377a.patch.minLen + Math.floor((_0x490854 * 2654435761 >>> 0) / 4294967296 * (_0x29377a.patch.maxLen - _0x29377a.patch.minLen + 1));
  let _0x2bc4a4 = _0x490854 + 1;
  for (const _0x268228 of _0x32258f.platforms) {
    if (Math.abs(_0x268228.y - _0x5effa3) < _0x29377a.bandMerge && _0x268228.x1 + _0x29377a.patch.laneGap > _0x2bc4a4 && _0x268228.x0 < _0x2bc4a4 + _0x2a99ae) {
      _0x2bc4a4 = Math.max(_0x2bc4a4, _0x268228.x1 + _0x29377a.patch.laneGap);
    }
  }
  const _0x4a1a3c = Math.min(_0x2bc4a4 + _0x2a99ae, _0x126e62 + _0x29377a.patch.laneGap);
  if (_0x4a1a3c - _0x2bc4a4 < _0x29377a.patch.minLen) {
    return null;
  }
  if (function (_0x5b25e4, _0x4b3a0f, _0x24a1c5, _0x3756fe) {
    return _0x24a1c5.some(_0xf6986d => _0x4b3a0f > _0xf6986d - _0x3756fe.patch.cornerClearBefore && _0x5b25e4 < _0xf6986d + _0x3756fe.patch.cornerClearAfter);
  }(_0x2bc4a4, _0x4a1a3c, _0x114dc9, _0x29377a)) {
    return null;
  }
  const _0x46ba4d = {
    id: "lattice-patch-" + _0x2bc4a4,
    x0: _0x2bc4a4,
    x1: _0x4a1a3c,
    y: _0x5effa3,
    patch: true
  };
  if (_0x5effa3 - latticeSupportY(_0x32258f, _0x46ba4d) > _0x1a8583.maxReach) {
    return null;
  } else {
    return _0x46ba4d;
  }
}
export function latticePatchPass(_0x241372, _0x47116f, _0x51d3db = LATTICE) {
  const _0x202f27 = [];
  for (const _0x5d530b of latticeInterior(_0x47116f, _0x51d3db)) {
    let _0xec7186 = _0x5d530b.a;
    while (_0xec7186 <= _0x5d530b.b) {
      if (latticeRouteCount(_0x241372, _0xec7186, _0x47116f, _0x51d3db) >= _0x51d3db.minRoutes) {
        _0xec7186++;
        continue;
      }
      const _0x54361d = e(_0x241372, _0xec7186, _0x47116f, _0x51d3db);
      if (_0x54361d) {
        _0x241372.platforms.push(_0x54361d);
        _0x202f27.push(_0x54361d);
        _0xec7186 = _0x54361d.x0 + 1;
      } else {
        _0xec7186++;
      }
    }
  }
  return _0x202f27;
}
function a(_0x1932de, _0x192972, _0x5e9a28, _0x5a8969) {
  const _0x2ebbd1 = _0x1932de.platforms[_0x192972];
  _0x1932de.platforms.splice(_0x192972, 1);
  let _0x2a2ea1 = true;
  const _0x3f0eeb = _0x2ebbd1.x0 - _0x5a8969.lookahead;
  const _0x32d9fc = _0x2ebbd1.x1;
  for (const _0x3fb6c2 of latticeInterior(_0x5e9a28, _0x5a8969)) {
    for (let _0x574eb0 = Math.max(_0x3fb6c2.a, _0x3f0eeb); _0x574eb0 <= Math.min(_0x3fb6c2.b, _0x32d9fc) && _0x2a2ea1; _0x574eb0++) {
      if (latticeRouteCount(_0x1932de, _0x574eb0, _0x5e9a28, _0x5a8969) < _0x5a8969.minRoutes) {
        _0x2a2ea1 = false;
      }
    }
    if (!_0x2a2ea1) {
      break;
    }
  }
  _0x1932de.platforms.splice(_0x192972, 0, _0x2ebbd1);
  return _0x2a2ea1;
}
export function latticeThinPass(_0x39184a, _0x1da4e9, _0x424b99 = LATTICE) {
  const _0x2fdfe6 = [];
  for (const _0x2113e8 of latticeInterior(_0x1da4e9, _0x424b99)) {
    for (let _0x5bf329 = _0x2113e8.a; _0x5bf329 <= _0x2113e8.b; _0x5bf329++) {
      let _0x245271 = 0;
      while (latticeRouteCount(_0x39184a, _0x5bf329, _0x1da4e9, _0x424b99) > _0x424b99.maxRoutes && _0x245271++ < 8) {
        const _0x4aace4 = Math.min(_0x5bf329 + _0x424b99.lookahead, _0x39184a.groundH.length);
        const _0x2de512 = [];
        for (let _0x6b911d = 0; _0x6b911d < _0x39184a.platforms.length; _0x6b911d++) {
          const _0x13a7d4 = _0x39184a.platforms[_0x6b911d];
          if (_0x13a7d4.pocket || _0x13a7d4.arrival || _0x13a7d4.arena || _0x13a7d4.assault || _0x13a7d4.routeBridge) {
            continue;
          }
          if (_0x13a7d4.x1 <= _0x5bf329 || _0x13a7d4.x0 >= _0x4aace4) {
            continue;
          }
          if (!_0x39184a.platforms.some(_0x36b623 => _0x36b623 !== _0x13a7d4 && _0x36b623.y > _0x13a7d4.y && _0x36b623.x1 > _0x13a7d4.x0 - 1 && _0x36b623.x0 < _0x13a7d4.x1 + 1 && _0x36b623.y - r(_0x39184a, _0x36b623, _0x13a7d4) > _0x1da4e9.gen.maxReach)) {
            _0x2de512.push(_0x6b911d);
          }
        }
        _0x2de512.sort((_0x185dad, _0x33339e) => _0x39184a.platforms[_0x33339e].y - _0x39184a.platforms[_0x185dad].y);
        const _0x5db89a = _0x2de512.find(_0x2fa7f0 => a(_0x39184a, _0x2fa7f0, _0x1da4e9, _0x424b99));
        if (_0x5db89a === undefined) {
          break;
        }
        _0x2fdfe6.push(_0x39184a.platforms[_0x5db89a]);
        _0x39184a.platforms.splice(_0x5db89a, 1);
      }
    }
  }
  return _0x2fdfe6;
}
function r(_0x4995df, _0x2e6157, _0x40d1e7) {
  let _0x42ccdc = -999;
  const _0x350fb4 = _0x4995df.groundH.length;
  for (let _0x4c3986 = Math.max(0, _0x2e6157.x0 - 1); _0x4c3986 <= Math.min(_0x350fb4 - 1, _0x2e6157.x1 + 1); _0x4c3986++) {
    if (_0x4995df.groundH[_0x4c3986] > -100) {
      _0x42ccdc = Math.max(_0x42ccdc, _0x4995df.groundH[_0x4c3986]);
    }
  }
  for (const _0x5546b1 of _0x4995df.platforms) {
    if (_0x5546b1 !== _0x2e6157 && _0x5546b1 !== _0x40d1e7 && _0x5546b1.y < _0x2e6157.y && _0x5546b1.x1 > _0x2e6157.x0 - 1 && _0x5546b1.x0 < _0x2e6157.x1 + 1) {
      _0x42ccdc = Math.max(_0x42ccdc, _0x5546b1.y);
    }
  }
  return _0x42ccdc;
}
export function latticeUnreachable(_0x893cff, _0x4ca197) {
  return _0x893cff.platforms.filter(_0x1b701f => _0x1b701f.y - latticeSupportY(_0x893cff, _0x1b701f) > _0x4ca197.gen.maxReach);
}
export function latticeStranded(_0x56cdbc, _0x4acf01) {
  const _0x352b04 = _0x4acf01.player;
  const _0x42b1e3 = _0x352b04.jumpVel * _0x352b04.jumpVel / (-_0x352b04.gravity * 2);
  const _0x30788a = _0x352b04.jumpVel * 2 / -_0x352b04.gravity;
  const _0x379923 = _0x352b04.runSpeed * _0x30788a;
  const _0x180184 = [];
  for (const _0x492f91 of _0x56cdbc.platforms) {
    const _0x38f9f9 = _0x492f91.x1;
    let _0x45f37d = false;
    for (let _0x265d70 = _0x38f9f9 - 1; _0x265d70 <= Math.min(_0x38f9f9 + 1, _0x56cdbc.groundH.length - 1) && !_0x45f37d; _0x265d70++) {
      if (_0x56cdbc.groundH[_0x265d70] > -100 && _0x56cdbc.groundH[_0x265d70] < _0x492f91.y) {
        _0x45f37d = true;
      }
      for (const _0x1a2e3c of _0x56cdbc.platforms) {
        if (_0x1a2e3c !== _0x492f91 && _0x1a2e3c.y < _0x492f91.y && _0x265d70 >= _0x1a2e3c.x0 && _0x265d70 < _0x1a2e3c.x1) {
          _0x45f37d = true;
        }
      }
    }
    for (let _0x27d302 = _0x38f9f9; _0x27d302 < Math.min(_0x38f9f9 + _0x379923, _0x56cdbc.groundH.length) && !_0x45f37d; _0x27d302++) {
      if (_0x56cdbc.groundH[_0x27d302] > -100 && _0x56cdbc.groundH[_0x27d302] <= _0x492f91.y + _0x42b1e3) {
        _0x45f37d = true;
      }
      for (const _0x3be9c4 of _0x56cdbc.platforms) {
        if (_0x3be9c4 !== _0x492f91 && _0x27d302 >= _0x3be9c4.x0 && _0x27d302 < _0x3be9c4.x1 && _0x3be9c4.y <= _0x492f91.y + _0x42b1e3 && _0x3be9c4.y > _0x492f91.y - 12) {
          _0x45f37d = true;
        }
      }
    }
    if (!_0x45f37d) {
      _0x180184.push(_0x492f91);
    }
  }
  return _0x180184;
}
export function latticeReport(_0x480dab, _0x1b4e00, _0x25371a = LATTICE) {
  return latticeInterior(_0x1b4e00, _0x25371a).map(_0x44eb6d => {
    let _0x4d2c58 = 99;
    let _0x1a2e37 = 0;
    let _0x41ea38 = 0;
    let _0x1050d8 = 0;
    for (let _0x25908b = _0x44eb6d.a; _0x25908b <= _0x44eb6d.b; _0x25908b++) {
      const _0x30be4d = latticeRouteCount(_0x480dab, _0x25908b, _0x1b4e00, _0x25371a);
      _0x4d2c58 = Math.min(_0x4d2c58, _0x30be4d);
      _0x1a2e37 = Math.max(_0x1a2e37, _0x30be4d);
      _0x41ea38 += _0x30be4d;
      _0x1050d8++;
    }
    return {
      face: _0x44eb6d.face,
      a: _0x44eb6d.a,
      b: _0x44eb6d.b,
      min: _0x4d2c58,
      max: _0x1a2e37,
      avg: _0x1050d8 ? _0x41ea38 / _0x1050d8 : 0
    };
  });
}