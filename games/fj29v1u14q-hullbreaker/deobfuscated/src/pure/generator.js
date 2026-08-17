import { mulberry32 as _0x110ad9 } from "./rng.js";
import { cornerSList as _0x3a8297, faceIndexAt as _0x59203c } from "./path.js";
import { TRAVERSAL_FIXTURE as _0xfd88e6 } from "./traversal.js";
import { LATTICE as _0x20b385, latticeArenaSites as _0x319134, latticeArrivalSites as _0x1f361c, latticeCarvePocket as _0x4ff50c, latticeEmplacementBeats as _0x1968a2, latticeHoundBeats as _0x5a28f9, latticeInstallSite as _0x27094d, latticePatchPass as _0x5a7975, latticePocketSites as _0x835139, latticeReport as _0x52e61a, latticeThinPass as _0x142d7f } from "./lattice.js";
import { installVerticalAssault as _0x3b666f, verticalAssaultReport as _0x3f4925 } from "./vertical-assault.js";
export const GAP = -999;
export function solidRectContains(_0x50b259, _0x4cf792, _0x1cecc8) {
  return _0x4cf792 >= _0x50b259.x0 && _0x4cf792 < _0x50b259.x1 && _0x1cecc8 >= _0x50b259.y0 && _0x1cecc8 < _0x50b259.y1;
}
export function levelSolidCell(_0x5ebca1, _0x173d45, _0x511ad3, _0x435034) {
  const _0x4fa82e = _0x5ebca1.groundH[_0x173d45];
  if (_0x4fa82e > -100 && _0x511ad3 < _0x4fa82e && _0x511ad3 >= _0x4fa82e - _0x435034) {
    return true;
  }
  for (const _0x565857 of _0x5ebca1.solidRects || []) {
    if (solidRectContains(_0x565857, _0x173d45, _0x511ad3)) {
      return true;
    }
  }
  return false;
}
function M(_0x45c071, _0x5aa73a) {
  return Math.max(_0x5aa73a.minH, Math.min(_0x5aa73a.maxH, _0x45c071));
}
const g = [["flat", (_0x4dc886, _0x178340, _0x2f883d) => ({
  cols: new Array(4 + Math.floor(_0x4dc886() * 5)).fill(_0x178340),
  h: _0x178340
})], ["step", (_0x2a2024, _0x3397c0, _0x57e3f0) => {
  const _0x1e5018 = M(_0x3397c0 + (_0x2a2024() < 0.5 ? -1 : 1) * (_0x2a2024() < 0.3 ? 2 : 1), _0x57e3f0);
  return {
    cols: new Array(3 + Math.floor(_0x2a2024() * 4)).fill(_0x1e5018),
    h: _0x1e5018
  };
}], ["stairs", (_0x42c2ec, _0x1c9e02, _0x45265f) => {
  const _0x3ac4d5 = _0x42c2ec() < 0.5 ? 1 : -1;
  const _0x3e5826 = [];
  let _0x5f536c = _0x1c9e02;
  for (let _0x588d96 = 0, _0x61809d = 2 + Math.floor(_0x42c2ec() * 2); _0x588d96 < _0x61809d; _0x588d96++) {
    _0x5f536c = M(_0x5f536c + _0x3ac4d5, _0x45265f);
    for (let _0x454f3f = 0, _0x902732 = 2 + Math.floor(_0x42c2ec() * 2); _0x454f3f < _0x902732; _0x454f3f++) {
      _0x3e5826.push(_0x5f536c);
    }
  }
  return {
    cols: _0x3e5826,
    h: _0x5f536c
  };
}], ["gapHop", (_0x512c56, _0x405510, _0xfa801e) => {
  const _0x170be4 = new Array(2 + Math.floor(_0x512c56() * (_0xfa801e.gapMax - 1))).fill(GAP);
  for (let _0x2bc473 = 0; _0x2bc473 < _0xfa801e.landingMin; _0x2bc473++) {
    _0x170be4.push(_0x405510);
  }
  return {
    cols: _0x170be4,
    h: _0x405510
  };
}], ["plateau", (_0x5812f3, _0x562e4e, _0x5729a8) => {
  const _0x4f1e56 = new Array(3 + Math.floor(_0x5812f3() * 3)).fill(M(_0x562e4e + 2, _0x5729a8));
  for (let _0x50d181 = 0, _0x1c9020 = 2 + Math.floor(_0x5812f3() * 2); _0x50d181 < _0x1c9020; _0x50d181++) {
    _0x4f1e56.push(_0x562e4e);
  }
  return {
    cols: _0x4f1e56,
    h: _0x562e4e
  };
}], ["trench", (_0x51e090, _0xf1a31a, _0x29c6bc) => {
  const _0x57c5dc = new Array(3 + Math.floor(_0x51e090() * 3)).fill(_0x29c6bc.minH);
  for (let _0x3a43fc = 0, _0x1bb19f = 2 + Math.floor(_0x51e090() * 2); _0x3a43fc < _0x1bb19f; _0x3a43fc++) {
    _0x57c5dc.push(_0xf1a31a);
  }
  return {
    cols: _0x57c5dc,
    h: _0xf1a31a
  };
}], ["islandHop", (_0x18d981, _0x2ab97e, _0x27cb81) => {
  const _0x4de1ce = [GAP, GAP, _0x2ab97e, _0x2ab97e, _0x2ab97e, GAP, GAP];
  for (let _0x318e52 = 0; _0x318e52 < _0x27cb81.landingMin; _0x318e52++) {
    _0x4de1ce.push(_0x2ab97e);
  }
  return {
    cols: _0x4de1ce,
    h: _0x2ab97e
  };
}], ["ridge", (_0x1c9afa, _0x7a8ad2, _0x250a9c) => {
  const _0x471c81 = M(_0x7a8ad2 + 1, _0x250a9c);
  const _0x6de0ae = [];
  for (let _0x38ffa4 = 0, _0x3e2376 = 2 + Math.floor(_0x1c9afa() * 2); _0x38ffa4 < _0x3e2376; _0x38ffa4++) {
    _0x6de0ae.push(_0x7a8ad2, _0x7a8ad2, _0x471c81, _0x471c81);
  }
  _0x6de0ae.push(_0x7a8ad2, _0x7a8ad2);
  return {
    cols: _0x6de0ae,
    h: _0x7a8ad2
  };
}]];
function y(_0x1235c3, _0x295afd) {
  let _0x1c006b = 0;
  for (const [_0x238bfc] of g) {
    _0x1c006b += _0x295afd[_0x238bfc];
  }
  let _0x251739 = _0x1235c3() * _0x1c006b;
  for (const _0x3d7bd2 of g) {
    _0x251739 -= _0x295afd[_0x3d7bd2[0]];
    if (_0x251739 < 0) {
      return _0x3d7bd2;
    }
  }
  return g[0];
}
export function buildLevel(_0xb83b7d) {
  const _0x15cbdc = _0xb83b7d.levelLength;
  const _0x4ab756 = _0xb83b7d.gen;
  const _0x477eda = _0x3a8297(_0xb83b7d);
  const _0x493b03 = new Array(_0x15cbdc);
  const _0xba2c00 = [];
  const _0xfbd8c7 = [];
  const _0x3677af = _0x110ad9(_0x4ab756.seed);
  let _0x38a5e4 = 0;
  let _0x7d9776 = 3;
  while (_0x38a5e4 < _0xb83b7d.path.introTiles) {
    _0x493b03[_0x38a5e4++] = 3;
  }
  const _0x439753 = _0x15cbdc - _0x4ab756.tailFlat;
  while (_0x38a5e4 < _0x439753) {
    const _0x5d09df = y(_0x3677af, _0x4ab756.weights);
    const _0x1d337d = _0x5d09df[1](_0x3677af, _0x7d9776, _0x4ab756);
    _0xfbd8c7.push(_0x5d09df[0]);
    for (const _0x7680f of _0x1d337d.cols) {
      if (_0x38a5e4 >= _0x439753) {
        break;
      }
      _0x493b03[_0x38a5e4++] = _0x7680f;
    }
    _0x7d9776 = _0x1d337d.h;
  }
  while (_0x38a5e4 < _0x15cbdc) {
    _0x493b03[_0x38a5e4++] = 3;
  }
  const _0xb2214b = _0x835139(_0xb83b7d, _0x493b03);
  for (const _0x103fdd of _0xb2214b) {
    _0x4ff50c(_0x493b03, _0x103fdd, GAP);
  }
  const _0x30f621 = _0x110ad9(_0x4ab756.tierSeed);
  let _0x236e0b = 26;
  while (_0x236e0b < _0x15cbdc - 28) {
    const _0x265803 = 7 + Math.floor(_0x30f621() * 6);
    let _0x2ed984 = 2;
    for (let _0x4120d1 = _0x236e0b; _0x4120d1 < Math.min(_0x236e0b + _0x265803, _0x15cbdc); _0x4120d1++) {
      if (_0x493b03[_0x4120d1] > -100) {
        _0x2ed984 = Math.max(_0x2ed984, _0x493b03[_0x4120d1]);
      }
    }
    if (_0x30f621() < _0x4ab756.laneChance) {
      const _0x2da7e1 = _0x265803 - 2 - Math.floor(_0x30f621() * 2);
      const _0x33f0c5 = _0x2ed984 + 2.35;
      _0xba2c00.push({
        x0: _0x236e0b,
        x1: _0x236e0b + _0x2da7e1,
        y: _0x33f0c5
      });
      if (_0x33f0c5 + 3 <= _0x4ab756.laneCapY && _0x30f621() < _0x4ab756.hiChance) {
        const _0x153d9f = Math.max(3, _0x2da7e1 - 3);
        const _0x1b80d4 = 1 + Math.floor(_0x30f621() * 2);
        const _0x5722c4 = _0x33f0c5 + 3;
        _0xba2c00.push({
          x0: _0x236e0b + _0x1b80d4,
          x1: _0x236e0b + _0x1b80d4 + _0x153d9f,
          y: _0x5722c4
        });
        if (_0x5722c4 + 3 <= _0x4ab756.laneCapY && _0x30f621() < _0x4ab756.thirdChance) {
          _0xba2c00.push({
            x0: _0x236e0b + _0x1b80d4 + 1,
            x1: _0x236e0b + _0x1b80d4 + 1 + Math.max(3, _0x153d9f - 2),
            y: _0x5722c4 + 3
          });
        }
      }
    }
    _0x236e0b += _0x265803;
  }
  for (const _0x17a999 of _0x477eda) {
    for (let _0x2ec64a = _0x17a999 - _0x20b385.pocket.cornerClearBefore; _0x2ec64a <= _0x17a999 + 2; _0x2ec64a++) {
      _0x493b03[_0x2ec64a] = 3;
    }
    for (let _0x5aca38 = _0xba2c00.length - 1; _0x5aca38 >= 0; _0x5aca38--) {
      if (_0xba2c00[_0x5aca38].x1 >= _0x17a999 - 3 && _0xba2c00[_0x5aca38].x0 <= _0x17a999 + 3) {
        _0xba2c00.splice(_0x5aca38, 1);
      }
    }
  }
  for (const _0x23104f of _0xb2214b) {
    for (let _0xad7ad9 = _0xba2c00.length - 1; _0xad7ad9 >= 0; _0xad7ad9--) {
      if (_0xba2c00[_0xad7ad9].x1 > _0x23104f.gap.x0 - 1 && _0xba2c00[_0xad7ad9].x0 < _0x23104f.gap.x1 + 1) {
        _0xba2c00.splice(_0xad7ad9, 1);
      }
    }
    _0xba2c00.push({
      ..._0x23104f.mid
    }, {
      ..._0x23104f.shelf
    });
  }
  const _0x5bca1f = _0x1f361c(_0xb83b7d, _0x493b03);
  for (const _0xb8d669 of _0x5bca1f) {
    _0x27094d(_0xba2c00, _0xb8d669.platforms);
  }
  const _0x49e705 = _0x319134(_0xb83b7d, _0x493b03);
  for (const _0x2fc198 of _0x49e705) {
    _0x27094d(_0xba2c00, _0x2fc198.platforms);
  }
  const _0x5747db = _0x3b666f(_0xb83b7d, _0x493b03, _0xba2c00, {
    pockets: _0xb2214b,
    arrivals: _0x5bca1f,
    arenas: _0x49e705
  });
  const _0x1bc5e4 = () => {
    let _0x49484f = true;
    while (_0x49484f) {
      _0x49484f = false;
      for (let _0xaea184 = _0xba2c00.length - 1; _0xaea184 >= 0; _0xaea184--) {
        const _0x5ac457 = _0xba2c00[_0xaea184];
        let _0x320105 = -999;
        for (let _0x43c601 = Math.max(0, _0x5ac457.x0 - 1); _0x43c601 <= Math.min(_0x15cbdc - 1, _0x5ac457.x1 + 1); _0x43c601++) {
          if (_0x493b03[_0x43c601] > -100) {
            _0x320105 = Math.max(_0x320105, _0x493b03[_0x43c601]);
          }
        }
        for (const _0x3c2560 of _0xba2c00) {
          if (_0x3c2560 !== _0x5ac457 && _0x3c2560.y < _0x5ac457.y && _0x3c2560.x1 > _0x5ac457.x0 - 1 && _0x3c2560.x0 < _0x5ac457.x1 + 1) {
            _0x320105 = Math.max(_0x320105, _0x3c2560.y);
          }
        }
        if (_0x5ac457.y - _0x320105 > _0x4ab756.maxReach) {
          _0xba2c00.splice(_0xaea184, 1);
          _0x49484f = true;
        }
      }
    }
  };
  _0x1bc5e4();
  const _0x5c0e06 = {
    groundH: _0x493b03,
    platforms: _0xba2c00,
    solidRects: _0x5747db.solidRects,
    ladders: _0x5747db.ladders,
    assaults: _0x5747db.chunks
  };
  const _0x4cdfae = [];
  const _0x4a181a = [];
  for (let _0x4815b1 = 0; _0x4815b1 < _0x20b385.patch.maxPasses; _0x4815b1++) {
    const _0x4df830 = _0x5a7975(_0x5c0e06, _0xb83b7d);
    const _0x218d04 = _0x142d7f(_0x5c0e06, _0xb83b7d);
    _0x1bc5e4();
    _0x4cdfae.push(..._0x4df830);
    _0x4a181a.push(..._0x218d04);
    if (!_0x4df830.length && !_0x218d04.length) {
      break;
    }
  }
  return {
    groundH: _0x493b03,
    platforms: _0xba2c00,
    solidRects: _0x5747db.solidRects,
    ladders: _0x5747db.ladders,
    chunkLog: _0xfbd8c7,
    pockets: _0xb2214b,
    arrivals: _0x5bca1f,
    arenas: _0x5747db.arenas,
    assaults: _0x5747db.chunks,
    verticalAssault: {
      id: _0x5747db.id,
      report: _0x3f4925(_0x5c0e06, _0xb83b7d)
    },
    lattice: {
      id: _0x20b385.id,
      patched: _0x4cdfae.length,
      thinned: _0x4a181a.length,
      report: _0x52e61a(_0x5c0e06, _0xb83b7d)
    }
  };
}
export function buildTraversalLevel(_0x21d040, _0x51dc2f = _0xfd88e6) {
  const _0x460963 = buildLevel(_0x21d040);
  const _0x17cbbe = _0x51dc2f.bounds;
  for (const _0x5317fe of _0x51dc2f.groundRuns) {
    for (let _0x55a908 = _0x5317fe.x0; _0x55a908 < _0x5317fe.x1; _0x55a908++) {
      _0x460963.groundH[_0x55a908] = _0x5317fe.y;
    }
  }
  const _0x555db1 = _0x460963.platforms.filter(_0x4b2ef8 => _0x4b2ef8.x1 <= _0x17cbbe.x0 || _0x4b2ef8.x0 >= _0x17cbbe.x1);
  for (const _0xeb268d of _0x51dc2f.platforms) {
    _0x555db1.push({
      ..._0xeb268d
    });
  }
  return {
    groundH: _0x460963.groundH,
    platforms: _0x555db1,
    solidRects: _0x51dc2f.solidRects.map(_0x5d84f8 => ({
      ..._0x5d84f8
    })),
    chunkLog: _0x460963.chunkLog.concat(_0x51dc2f.id),
    fixture: _0x51dc2f
  };
}
export function buildSpawnTable(_0x2908b5, _0xf177db = buildLevel(_0x2908b5)) {
  const _0x530e45 = _0x2908b5.spawner;
  const _0x1ca5db = _0x3a8297(_0x2908b5);
  const _0x3ea742 = _0x110ad9(_0x530e45.seed);
  const _0x31c8bc = _0x84bf73 => _0x1ca5db.some(_0x183276 => _0x84bf73 >= _0x183276 - _0x530e45.cornerClearBefore && _0x84bf73 <= _0x183276 + _0x530e45.cornerClearAfter);
  const _0x232f63 = [];
  const _0x145144 = _0x2908b5.levelLength - _0x530e45.endFromEnd;
  const _0x97683 = _0x5a28f9(_0x2908b5, _0xf177db.groundH, _0xf177db.pockets || []);
  const _0x381f37 = _0x1968a2(_0x2908b5, _0xf177db.pockets || []).filter(_0xc34811 => {
    const _0x30798c = _0x59203c(_0xc34811.x, _0x2908b5);
    const _0xb06cd9 = _0x530e45.lesson && _0x530e45.lesson.kindByFace[_0x30798c - 1];
    return !_0xb06cd9 || _0xc34811.type === _0xb06cd9;
  });
  const _0x154b63 = _0x97683.concat(_0x381f37).filter(_0x3d22c0 => {
    const _0x3ad080 = _0x59203c(_0x3d22c0.x, _0x2908b5);
    return _0x530e45.lesson && _0x530e45.lesson.kindByFace[_0x3ad080 - 1] === _0x3d22c0.type;
  });
  const _0x441240 = _0x2b757e => _0x154b63.some(_0xc4dd60 => Math.abs(_0x2b757e - _0xc4dd60.x) < _0x530e45.lesson.clearTiles);
  let _0x53268c = _0x530e45.startS;
  while (_0x53268c < _0x145144) {
    const _0x17cef0 = Math.min(_0x2908b5.path.faces, Math.max(1, _0x59203c(_0x53268c, _0x2908b5)));
    if (!_0x31c8bc(_0x53268c) && !_0x441240(_0x53268c)) {
      _0x232f63.push({
        x: _0x53268c,
        type: "wasp"
      });
      if (_0x3ea742() < _0x530e45.pairChance[_0x17cef0 - 1] && !_0x31c8bc(_0x53268c + _0x530e45.pairGapTiles) && !_0x441240(_0x53268c + _0x530e45.pairGapTiles) && _0x53268c + _0x530e45.pairGapTiles < _0x145144) {
        _0x232f63.push({
          x: _0x53268c + _0x530e45.pairGapTiles,
          type: "wasp"
        });
      }
    }
    _0x53268c += Math.max(2, Math.round((_0x530e45.faceGapSec[_0x17cef0 - 1] + _0x3ea742() * _0x530e45.jitterSec) * _0x2908b5.scrollSpeed));
  }
  const _0x30c799 = new Set(_0x232f63.map(_0xaeb43f => _0xaeb43f.x));
  _0x2908b5.carrier.perFaceFrac.forEach((_0x5ac1ba, _0x36f3e6) => {
    const _0x7458e3 = _0x36f3e6 === 0 ? _0x2908b5.path.introTiles : _0x1ca5db[_0x36f3e6 - 1];
    let _0x45bb80 = Math.round(_0x7458e3 + _0x5ac1ba * (_0x1ca5db[_0x36f3e6] - _0x7458e3));
    while (_0x30c799.has(_0x45bb80)) {
      _0x45bb80++;
    }
    if (!_0x31c8bc(_0x45bb80)) {
      const _0x175065 = _0x2908b5.carrier.drops && _0x2908b5.carrier.drops[_0x36f3e6];
      _0x232f63.push({
        x: _0x45bb80,
        type: "carrier",
        ...(_0x175065 ? {
          drop: {
            ..._0x175065
          }
        } : {})
      });
      _0x30c799.add(_0x45bb80);
    }
  });
  for (const _0xd7e11b of _0x97683) {
    if (_0x31c8bc(_0xd7e11b.x) || _0xd7e11b.x < _0x530e45.startS || _0xd7e11b.x >= _0x145144) {
      continue;
    }
    const _0x26a5e7 = _0x59203c(_0xd7e11b.x, _0x2908b5);
    const _0x2d9602 = _0x530e45.lesson && _0x530e45.lesson.houndDelayMsByFace[_0x26a5e7 - 1];
    _0x232f63.push(_0x2d9602 ? {
      ..._0xd7e11b,
      x: _0xd7e11b.patrol.x1 - 0.1,
      delayMs: _0x2d9602
    } : _0xd7e11b);
  }
  for (const _0x444f48 of _0x381f37) {
    if (!_0x31c8bc(_0x444f48.x) && !(_0x444f48.x < _0x530e45.startS) && !(_0x444f48.x >= _0x145144)) {
      _0x232f63.push(_0x444f48);
    }
  }
  _0x232f63.sort((_0x5a6a47, _0xe23f4a) => _0x5a6a47.x - _0xe23f4a.x);
  return _0x232f63;
}