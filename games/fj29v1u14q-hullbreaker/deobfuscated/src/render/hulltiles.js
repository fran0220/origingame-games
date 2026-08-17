export const TILE_WORLD_SIZE = {
  hullPanel: [5.5, 5.5],
  ventLouver: [4.5, 4.5],
  weldSeam: [4, 1]
};
export function hullPieceDims(_0x535ab9) {
  const _0x36bd71 = _0x535ab9.limb;
  return {
    hull: [_0x36bd71.chunkCols, _0x36bd71.hull.drop],
    wall: [_0x36bd71.chunkCols, _0x36bd71.wall.below + _0x36bd71.wall.above],
    scute: [_0x36bd71.scute.len, _0x36bd71.scute.h],
    shadow: [_0x36bd71.chunkCols, _0x36bd71.wall.capH]
  };
}
export const TEX_LAYOUT = {
  hull: {
    tile: "hullPanel",
    copies: 3,
    wear: 250 / 384
  },
  wall: {
    tile: "hullPanel",
    copies: 3,
    wear: 0
  },
  scute: {
    tile: "ventLouver",
    copies: 2,
    wear: 188 / 256
  },
  shadow: {
    tile: "weldSeam",
    copies: 1,
    wear: 0
  }
};
export function hullTexRepeat(_0x241475) {
  const _0x121f02 = hullPieceDims(_0x241475);
  const _0x2edfec = TILE_WORLD_SIZE;
  const _0x4930df = _0x4fa23b => {
    const _0x2bafe8 = TEX_LAYOUT[_0x4fa23b];
    return [_0x2edfec[_0x2bafe8.tile][0] * _0x2bafe8.copies, _0x2edfec[_0x2bafe8.tile][1] * _0x2bafe8.copies];
  };
  const _0x377d27 = _0x4930df("hull");
  const _0x57659f = _0x4930df("wall");
  const _0x359db3 = _0x4930df("scute");
  const _0x3d3ac6 = _0x4930df("shadow");
  return {
    hull: [_0x121f02.hull[0] / _0x377d27[0], _0x121f02.hull[1] / _0x377d27[1]],
    wall: [_0x121f02.wall[0] / _0x57659f[0], _0x121f02.wall[1] / _0x57659f[1]],
    scute: [_0x121f02.scute[0] / _0x359db3[0], _0x121f02.scute[1] / _0x359db3[1]],
    shadow: [_0x121f02.shadow[0] / _0x3d3ac6[0], 1]
  };
}
export function worldPerTileCopy(_0x137041) {
  const _0x53338e = hullPieceDims(_0x137041);
  const _0x4305f2 = hullTexRepeat(_0x137041);
  const _0x1fdce1 = {};
  for (const _0x24f6b6 of Object.keys(TEX_LAYOUT)) {
    const _0x383308 = TEX_LAYOUT[_0x24f6b6].copies;
    _0x1fdce1[_0x24f6b6] = [_0x53338e[_0x24f6b6][0] / (_0x4305f2[_0x24f6b6][0] * _0x383308), _0x53338e[_0x24f6b6][1] / (_0x4305f2[_0x24f6b6][1] * _0x383308)];
  }
  return _0x1fdce1;
}
export const REFERENCE_FRAME = {
  viewportPx: 1600,
  note: "800 CSS px at devicePixelRatio 2"
};
export function screenPxPerWorld(_0x2ea879, _0x1da590 = REFERENCE_FRAME.viewportPx) {
  const _0x40f37b = _0x2ea879.camera.z * _0x2ea879.viewScales.far.depthMult;
  return _0x1da590 / (Math.tan(_0x2ea879.camera.fov * Math.PI / 180 / 2) * 2 * _0x40f37b);
}
export const TILE_SOURCE_PX = {
  hullPanel: 128,
  ventLouver: 128,
  weldSeam: 128
};
export function hullTexCanvas(_0x30cd1e, _0x578b1a) {
  const _0x3e767d = TEX_LAYOUT[_0x578b1a];
  if (!_0x3e767d) {
    return null;
  }
  const _0x1cbfd8 = TILE_WORLD_SIZE[_0x3e767d.tile][0] * screenPxPerWorld(_0x30cd1e);
  const _0xd18975 = Math.max(16, Math.min(TILE_SOURCE_PX[_0x3e767d.tile], Math.round(_0x1cbfd8 / 4) * 4));
  const _0x466313 = _0xd18975 * _0x3e767d.copies;
  return {
    cellPx: _0xd18975,
    canvasPx: _0x466313,
    copies: _0x3e767d.copies,
    wearCellPx: Math.round(_0x466313 * _0x3e767d.wear)
  };
}
export function srgbToLinear(_0x409ff4) {
  if (_0x409ff4 <= 0.04045) {
    return _0x409ff4 / 12.92;
  } else {
    return Math.pow((_0x409ff4 + 0.055) / 1.055, 2.4);
  }
}
export function linearToSrgb(_0x299d1a) {
  if (_0x299d1a <= 0.0031308) {
    return _0x299d1a * 12.92;
  } else {
    return Math.pow(_0x299d1a, 1 / 2.4) * 1.055 - 0.055;
  }
}
const e = new Float64Array(256);
for (let l = 0; l < 256; l++) {
  e[l] = srgbToLinear(l / 255);
}
export function resample(_0x406da4, _0x189bc7, _0x386e1b, _0x38d502, _0x2090a0) {
  const _0x3038c6 = new Uint8ClampedArray(_0x38d502 * _0x2090a0 * 4);
  const _0x3c13cc = _0x189bc7 / _0x38d502;
  const _0x4c9b64 = _0x386e1b / _0x2090a0;
  for (let _0x372d16 = 0; _0x372d16 < _0x2090a0; _0x372d16++) {
    const _0x44ec81 = Math.floor(_0x372d16 * _0x4c9b64);
    const _0x26ef52 = Math.max(_0x44ec81 + 1, Math.ceil((_0x372d16 + 1) * _0x4c9b64));
    for (let _0x53f1cf = 0; _0x53f1cf < _0x38d502; _0x53f1cf++) {
      const _0x2e72cc = Math.floor(_0x53f1cf * _0x3c13cc);
      const _0x3d60cd = Math.max(_0x2e72cc + 1, Math.ceil((_0x53f1cf + 1) * _0x3c13cc));
      let _0x1e23e5 = 0;
      let _0x4a05d6 = 0;
      let _0x122815 = 0;
      let _0x4f1f1d = 0;
      let _0x58a719 = 0;
      for (let _0x10113e = _0x44ec81; _0x10113e < Math.min(_0x386e1b, _0x26ef52); _0x10113e++) {
        for (let _0xe302cd = _0x2e72cc; _0xe302cd < Math.min(_0x189bc7, _0x3d60cd); _0xe302cd++) {
          const _0x252a26 = (_0x10113e * _0x189bc7 + _0xe302cd) * 4;
          _0x1e23e5 += e[_0x406da4[_0x252a26]];
          _0x4a05d6 += e[_0x406da4[_0x252a26 + 1]];
          _0x122815 += e[_0x406da4[_0x252a26 + 2]];
          _0x4f1f1d += _0x406da4[_0x252a26 + 3];
          _0x58a719++;
        }
      }
      const _0x440fd1 = (_0x372d16 * _0x38d502 + _0x53f1cf) * 4;
      if (_0x58a719) {
        _0x3038c6[_0x440fd1] = Math.round(linearToSrgb(_0x1e23e5 / _0x58a719) * 255);
        _0x3038c6[_0x440fd1 + 1] = Math.round(linearToSrgb(_0x4a05d6 / _0x58a719) * 255);
        _0x3038c6[_0x440fd1 + 2] = Math.round(linearToSrgb(_0x122815 / _0x58a719) * 255);
        _0x3038c6[_0x440fd1 + 3] = Math.round(_0x4f1f1d / _0x58a719);
      } else {
        _0x3038c6[_0x440fd1] = _0x3038c6[_0x440fd1 + 1] = _0x3038c6[_0x440fd1 + 2] = _0x3038c6[_0x440fd1 + 3] = 0;
      }
    }
  }
  return _0x3038c6;
}
export function tileOver(_0x2e576c, _0x49506a, _0x28643c, _0x35de98, _0x1acee2) {
  const _0x1c6c22 = Math.ceil(_0x49506a / _0x35de98);
  for (let _0x41cc70 = 0; _0x41cc70 < _0x1c6c22; _0x41cc70++) {
    for (let _0xe4ac88 = 0; _0xe4ac88 < _0x1c6c22; _0xe4ac88++) {
      const _0x40f515 = _0x1acee2 && (_0x41cc70 + _0xe4ac88) % 2 == 1;
      const _0x17e9c6 = _0x1acee2 && _0x41cc70 % 2 == 1;
      for (let _0x3de68e = 0; _0x3de68e < _0x35de98; _0x3de68e++) {
        const _0x388113 = _0x41cc70 * _0x35de98 + _0x3de68e;
        if (_0x388113 >= _0x49506a) {
          break;
        }
        const _0x1e2f17 = _0x17e9c6 ? _0x35de98 - 1 - _0x3de68e : _0x3de68e;
        for (let _0x25ae75 = 0; _0x25ae75 < _0x35de98; _0x25ae75++) {
          const _0xed69e1 = _0xe4ac88 * _0x35de98 + _0x25ae75;
          if (_0xed69e1 >= _0x49506a) {
            break;
          }
          const _0x385a77 = (_0x1e2f17 * _0x35de98 + (_0x40f515 ? _0x35de98 - 1 - _0x25ae75 : _0x25ae75)) * 4;
          const _0x396007 = (_0x388113 * _0x49506a + _0xed69e1) * 4;
          const _0x3a0bc8 = _0x28643c[_0x385a77 + 3] / 255;
          if (!(_0x3a0bc8 <= 0)) {
            if (_0x3a0bc8 >= 1) {
              _0x2e576c[_0x396007] = _0x28643c[_0x385a77];
              _0x2e576c[_0x396007 + 1] = _0x28643c[_0x385a77 + 1];
              _0x2e576c[_0x396007 + 2] = _0x28643c[_0x385a77 + 2];
              _0x2e576c[_0x396007 + 3] = 255;
            } else {
              for (let _0x495f44 = 0; _0x495f44 < 3; _0x495f44++) {
                _0x2e576c[_0x396007 + _0x495f44] = Math.round(linearToSrgb(e[_0x28643c[_0x385a77 + _0x495f44]] * _0x3a0bc8 + e[_0x2e576c[_0x396007 + _0x495f44]] * (1 - _0x3a0bc8)) * 255);
              }
              _0x2e576c[_0x396007 + 3] = 255;
            }
          }
        }
      }
    }
  }
  return _0x2e576c;
}
export const TILE_TONE = {
  targetMean: 190,
  targetSd: 52,
  lo: 16,
  hi: 255,
  maxContrast: 4,
  maxGain: 2.6,
  gainTrim: 0.88
};
export const SCUTE_TILE_TONE = Object.freeze({
  ...TILE_TONE,
  targetSd: 30,
  gainTrim: 0.98
});
export const DECK_PANEL = Object.freeze({
  worldSpan: 12,
  sourcePx: 512,
  minPx: 192,
  maxPx: 448
});
export const DECK_PANEL_TONE = Object.freeze({
  ...TILE_TONE,
  targetMean: 192,
  targetSd: 28,
  maxContrast: 2.25,
  gainTrim: 0.92
});
export const PIXEL_DECK_PANEL_TONE = Object.freeze({
  ...DECK_PANEL_TONE,
  targetSd: 20
});
const t = Object.freeze([[0.07, 0.11, 1, 1, 1, 0], [0.43, 0.19, 0.92, -1, 1, 1], [0.18, 0.57, 1.08, 1, -1, 0], [0.71, 0.31, 0.96, 1, 1, 1], [0.36, 0.79, 1.05, -1, -1, 0], [0.83, 0.53, 0.9, 1, -1, 1], [0.24, 0.67, 1.02, -1, 1, 0]]);
export function deckPanelUv(_0x3b1cb8, _0x134775, _0x155247) {
  const _0x352f4e = t[Math.abs(_0x3b1cb8 | 0) % t.length];
  let _0x136494 = _0x134775 / DECK_PANEL.worldSpan;
  let _0x1ce830 = _0x155247 / DECK_PANEL.worldSpan;
  if (_0x352f4e[5]) {
    [_0x136494, _0x1ce830] = [_0x1ce830, _0x136494];
  }
  return [_0x352f4e[0] + _0x136494 * _0x352f4e[2] * _0x352f4e[3], _0x352f4e[1] + _0x1ce830 * _0x352f4e[2] * _0x352f4e[4]];
}
export function deckPanelFaceGain(_0x5407fb, _0x25a216, _0x5479a5) {
  if (_0x25a216 > 0.55) {
    return 1.08;
  } else if (_0x25a216 < -0.55) {
    return 0.42;
  } else if (_0x5479a5 > 0.55) {
    return 0.84;
  } else if (_0x5479a5 < -0.55) {
    return 0.61;
  } else {
    return 0.7;
  }
}
export function luminanceHistogram(_0x472b53) {
  const _0x235bfb = new Float64Array(256);
  for (let _0x24dcd0 = 0; _0x24dcd0 < _0x472b53.length; _0x24dcd0 += 4) {
    _0x235bfb[Math.min(255, Math.round(_0x472b53[_0x24dcd0] * 0.2126 + _0x472b53[_0x24dcd0 + 1] * 0.7152 + _0x472b53[_0x24dcd0 + 2] * 0.0722))]++;
  }
  return _0x235bfb;
}
function n(_0x813acd) {
  let _0x154442 = 0;
  let _0x3d9b1a = 0;
  let _0x437803 = 0;
  for (let _0x38f8f7 = 0; _0x38f8f7 < 256; _0x38f8f7++) {
    _0x154442 += _0x813acd[_0x38f8f7];
    _0x3d9b1a += _0x813acd[_0x38f8f7] * _0x38f8f7;
    _0x437803 += _0x813acd[_0x38f8f7] * _0x38f8f7 * _0x38f8f7;
  }
  if (!_0x154442) {
    return {
      n: 0,
      mean: 0,
      sd: 0
    };
  }
  const _0x813c6d = _0x3d9b1a / _0x154442;
  return {
    n: _0x154442,
    mean: _0x813c6d,
    sd: Math.sqrt(Math.max(0, _0x437803 / _0x154442 - _0x813c6d * _0x813c6d))
  };
}
function r(_0x5ba180, _0x2d73bb) {
  const _0x22df40 = new Float64Array(256);
  for (let _0x505575 = 0; _0x505575 < 256; _0x505575++) {
    _0x22df40[_0x2d73bb[_0x505575]] += _0x5ba180[_0x505575];
  }
  return _0x22df40;
}
function a(_0x418c6c, _0x39ac2b, _0x537cbf, _0x2278a1) {
  const _0x14c9e0 = new Uint8Array(256);
  for (let _0x4f5a36 = 0; _0x4f5a36 < 256; _0x4f5a36++) {
    _0x14c9e0[_0x4f5a36] = Math.max(_0x2278a1.lo, Math.min(_0x2278a1.hi, Math.round(_0x418c6c + (_0x4f5a36 - _0x537cbf) * _0x39ac2b)));
  }
  return _0x14c9e0;
}
export function buildToneCurve(_0x4e4a02, _0x5e4d86 = TILE_TONE) {
  const _0x368bff = n(_0x4e4a02);
  if (!_0x368bff.n) {
    return null;
  }
  let _0x197567 = 1;
  let _0x2931aa = _0x5e4d86.targetMean;
  let _0x37fc30 = a(_0x2931aa, _0x197567, _0x368bff.mean, _0x5e4d86);
  let _0x164438 = n(r(_0x4e4a02, _0x37fc30));
  for (let _0x2a66cb = 0; _0x2a66cb < 10; _0x2a66cb++) {
    if (_0x164438.sd > 0.5) {
      _0x197567 = Math.max(0.25, Math.min(_0x5e4d86.maxContrast, _0x197567 * (_0x5e4d86.targetSd / _0x164438.sd)));
    }
    _0x2931aa += _0x5e4d86.targetMean - _0x164438.mean;
    _0x37fc30 = a(_0x2931aa, _0x197567, _0x368bff.mean, _0x5e4d86);
    _0x164438 = n(r(_0x4e4a02, _0x37fc30));
  }
  const _0x5b548c = r(_0x4e4a02, _0x37fc30);
  let _0x2688ce = 0;
  let _0xaf67da = 0;
  let _0xf05b9 = 0;
  for (let _0x2bcb02 = 0; _0x2bcb02 < 256; _0x2bcb02++) {
    _0x2688ce += _0x5b548c[_0x2bcb02];
    _0xaf67da += _0x5b548c[_0x2bcb02] * e[_0x2bcb02];
    _0xf05b9 += _0x5b548c[_0x2bcb02] * e[_0x2bcb02] * e[_0x2bcb02];
  }
  const _0x42c4ee = _0xaf67da / _0x2688ce;
  const _0x211f56 = Math.sqrt(Math.max(0, _0xf05b9 / _0x2688ce - _0x42c4ee * _0x42c4ee));
  const _0x54b09c = Math.max(1, Math.min(_0x5e4d86.maxGain, _0x42c4ee > 0 ? 1 / _0x42c4ee : 1));
  return {
    lut: _0x37fc30,
    contrast: _0x197567,
    mean: _0x164438.mean,
    sd: _0x164438.sd,
    linMean: _0x42c4ee,
    linRelSd: _0x42c4ee > 0 ? _0x211f56 / _0x42c4ee : 0,
    gainExact: _0x54b09c,
    gain: _0x54b09c * _0x5e4d86.gainTrim
  };
}
export function applyToneCurve(_0x42ca91, _0x84db3c) {
  for (let _0x3286ee = 0; _0x3286ee < _0x42ca91.length; _0x3286ee += 4) {
    const _0x33cf52 = _0x84db3c[Math.min(255, Math.round(_0x42ca91[_0x3286ee] * 0.2126 + _0x42ca91[_0x3286ee + 1] * 0.7152 + _0x42ca91[_0x3286ee + 2] * 0.0722))];
    _0x42ca91[_0x3286ee] = _0x42ca91[_0x3286ee + 1] = _0x42ca91[_0x3286ee + 2] = _0x33cf52;
    _0x42ca91[_0x3286ee + 3] = 255;
  }
  return _0x42ca91;
}
export function composeHullTile(_0x1a038f, _0x3bbc71, _0x2bdf98, _0x4df388, _0x2a645f = TILE_TONE) {
  const _0x513371 = hullTexCanvas(_0x1a038f, _0x3bbc71);
  if (!_0x513371 || !_0x2bdf98 || !_0x2bdf98.data) {
    return null;
  }
  const _0x4ee1bf = resample(_0x2bdf98.data, _0x2bdf98.width, _0x2bdf98.height, _0x513371.cellPx, _0x513371.cellPx);
  const _0x1d5bea = _0x513371.canvasPx;
  const _0xe3b826 = new Uint8ClampedArray(_0x1d5bea * _0x1d5bea * 4);
  tileOver(_0xe3b826, _0x1d5bea, _0x4ee1bf, _0x513371.cellPx, false);
  if (_0x4df388 && _0x4df388.data && _0x513371.wearCellPx >= 8) {
    tileOver(_0xe3b826, _0x1d5bea, resample(_0x4df388.data, _0x4df388.width, _0x4df388.height, _0x513371.wearCellPx, _0x513371.wearCellPx), _0x513371.wearCellPx, true);
  }
  const _0x38cc82 = buildToneCurve(luminanceHistogram(_0xe3b826), _0x2a645f);
  if (_0x38cc82) {
    applyToneCurve(_0xe3b826, _0x38cc82.lut);
    return {
      data: _0xe3b826,
      width: _0x1d5bea,
      height: _0x1d5bea,
      curve: _0x38cc82,
      layout: _0x513371
    };
  } else {
    return null;
  }
}
export function composeDeckPanel(_0x4c9e93, _0x15f90a, _0x5118e9 = DECK_PANEL_TONE) {
  if (!_0x15f90a || !_0x15f90a.data) {
    return null;
  }
  const _0x3936d8 = DECK_PANEL.worldSpan * screenPxPerWorld(_0x4c9e93);
  const _0x1473bf = Math.max(DECK_PANEL.minPx, Math.min(DECK_PANEL.sourcePx, DECK_PANEL.maxPx, Math.round(_0x3936d8 / 16) * 16));
  const _0xe0f9a8 = resample(_0x15f90a.data, _0x15f90a.width, _0x15f90a.height, _0x1473bf, _0x1473bf);
  const _0x180dbd = buildToneCurve(luminanceHistogram(_0xe0f9a8), _0x5118e9);
  if (_0x180dbd) {
    applyToneCurve(_0xe0f9a8, _0x180dbd.lut);
    return {
      data: _0xe0f9a8,
      width: _0x1473bf,
      height: _0x1473bf,
      curve: _0x180dbd,
      layout: {
        canvasPx: _0x1473bf,
        cellPx: _0x1473bf,
        copies: 1,
        worldSpan: DECK_PANEL.worldSpan
      }
    };
  } else {
    return null;
  }
}
export function composePixelDeckPanel(_0x41ace6, _0x5d04d6 = PIXEL_DECK_PANEL_TONE) {
  if (!_0x41ace6 || !_0x41ace6.data || !_0x41ace6.width || _0x41ace6.width !== _0x41ace6.height) {
    return null;
  }
  const _0xc1b612 = new Uint8ClampedArray(_0x41ace6.data);
  const _0xc31a84 = buildToneCurve(luminanceHistogram(_0xc1b612), _0x5d04d6);
  if (_0xc31a84) {
    applyToneCurve(_0xc1b612, _0xc31a84.lut);
    return {
      data: _0xc1b612,
      width: _0x41ace6.width,
      height: _0x41ace6.height,
      curve: _0xc31a84,
      layout: {
        canvasPx: _0x41ace6.width,
        cellPx: _0x41ace6.width,
        copies: 1,
        worldSpan: DECK_PANEL.worldSpan,
        pixelAuthored: true
      }
    };
  } else {
    return null;
  }
}
export function resolveHullTexMode(_0x5f277a) {
  if (_0x5f277a === "flat") {
    return "flat";
  } else if (_0x5f277a === "painted") {
    return "painted";
  } else {
    return "pixel";
  }
}
export function resolveHullTexOn(_0x398cff) {
  return resolveHullTexMode(_0x398cff) !== "flat";
}