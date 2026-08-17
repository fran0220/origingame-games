export const meta = {
  id: "weld-seam-strip",
  size: {
    w: 128,
    h: 32
  },
  seed: 593809,
  roles: ["rust-orange", "ink", "hull", "haze", "warm-white"]
};
export function render(_0x192558, _0x415154) {
  const _0x429a7a = _0x415154.width;
  const _0x10e090 = _0x415154.height;
  const _0x56f469 = _0x415154.PALETTE;
  const _0x2aa8a7 = _0x56f469["rust-orange"];
  const _0x5cb824 = _0x56f469.ink;
  const _0x37c16e = _0x56f469.hull;
  const _0x13fe9e = _0x56f469.haze;
  const _0x5e3e4e = _0x56f469["warm-white"];
  const _0x1fa99d = _0x134b8e => {
    const _0x2d907e = _0x415154.hexToRgb(_0x134b8e);
    return [_0x2d907e.r, _0x2d907e.g, _0x2d907e.b];
  };
  const _0x26cb2f = {
    rustDeep: _0x1fa99d(_0x415154.shade(_0x2aa8a7, -0.54)),
    rustShadow: _0x1fa99d(_0x415154.shade(_0x2aa8a7, -0.32)),
    rustMid: _0x1fa99d(_0x2aa8a7),
    rustLight: _0x1fa99d(_0x415154.shade(_0x2aa8a7, 0.24)),
    rustEdge: _0x1fa99d(_0x415154.shade(_0x2aa8a7, 0.43)),
    inkDeep: _0x1fa99d(_0x415154.shade(_0x5cb824, -0.18)),
    ink: _0x1fa99d(_0x5cb824),
    hazeDark: _0x1fa99d(_0x415154.shade(_0x13fe9e, -0.28)),
    hullDark: _0x1fa99d(_0x415154.shade(_0x37c16e, -0.27)),
    hullLight: _0x1fa99d(_0x415154.shade(_0x37c16e, 0.29)),
    warm: _0x1fa99d(_0x415154.shade(_0x5e3e4e, -0.12))
  };
  const _0x4cf120 = (_0x341194, _0x2c20f4, _0x5b1211, _0x347949 = 255) => {
    const _0xc583c9 = _0x415154.clamp(_0x5b1211, 0, 1);
    return [Math.round(_0x415154.lerp(_0x341194[0], _0x2c20f4[0], _0xc583c9)), Math.round(_0x415154.lerp(_0x341194[1], _0x2c20f4[1], _0xc583c9)), Math.round(_0x415154.lerp(_0x341194[2], _0x2c20f4[2], _0xc583c9)), _0x347949];
  };
  const _0x3dac43 = (_0x13c297, _0x2a8b06 = 255) => [_0x13c297[0], _0x13c297[1], _0x13c297[2], _0x2a8b06];
  _0x415154.field((_0x28566d, _0xa8ffc9, _0x32d8bf, _0xf28874) => {
    const _0x213003 = _0x415154.fbm(_0x32d8bf * 8, _0xf28874 * 4.7, {
      octaves: 4,
      gain: 0.52,
      lacunarity: 2,
      period: 8,
      seed: _0x415154.seed + 11
    });
    const _0x5a8735 = _0x415154.fbm(_0x32d8bf * 24, _0xf28874 * 13, {
      octaves: 3,
      gain: 0.48,
      lacunarity: 2,
      period: 24,
      seed: _0x415154.seed + 29
    });
    const _0x20fe0d = _0x415154.fbm(_0x32d8bf * 4, _0xf28874 * 18, {
      octaves: 3,
      gain: 0.5,
      lacunarity: 2,
      period: 4,
      seed: _0x415154.seed + 47
    });
    if (_0xa8ffc9 === 0) {
      const _0x16f972 = _0x415154.noise(_0x32d8bf * 32, 0.41, {
        period: 32,
        seed: _0x415154.seed + 83
      });
      if (_0x16f972 > 0.61) {
        return _0x3dac43(_0x26cb2f.warm);
      } else {
        return _0x4cf120(_0x26cb2f.rustEdge, _0x26cb2f.hullLight, 0.28 + _0x16f972 * 0.42);
      }
    }
    if (_0xa8ffc9 < 6) {
      const _0x177c1c = 1 - _0xa8ffc9 / 6;
      const _0xf67915 = _0x415154.ridge(_0x32d8bf * 20, 1.6 + _0xf28874 * 5.2, {
        octaves: 3,
        gain: 0.5,
        lacunarity: 2,
        period: 20,
        seed: _0x415154.seed + 67
      });
      let _0x2896d0 = _0x4cf120(_0x26cb2f.rustLight, _0x26cb2f.rustEdge, 0.47 + _0x177c1c * 0.27 + (_0x213003 - 0.5) * 0.18 + (_0x5a8735 - 0.5) * 0.1);
      const _0x4b2542 = _0x415154.smoothstep(_0x415154.clamp((_0xf67915 - 0.54) / 0.34, 0, 1));
      _0x2896d0 = _0x4cf120(_0x2896d0, _0x26cb2f.hullLight, _0x4b2542 * (0.34 + _0x177c1c * 0.42));
      if (_0xa8ffc9 === 5) {
        _0x2896d0 = _0x4cf120(_0x2896d0, _0x26cb2f.rustShadow, 0.7);
      }
      return _0x2896d0;
    }
    if (_0xa8ffc9 < 23) {
      const _0x49beb1 = (_0xa8ffc9 - 6) / 17;
      const _0x367eb1 = _0x415154.ridge(_0x32d8bf * 24, 2.3 + _0xf28874 * 1.2, {
        octaves: 3,
        gain: 0.52,
        lacunarity: 2,
        period: 24,
        seed: _0x415154.seed + 101
      });
      const _0x273cae = _0x415154.noise(_0x32d8bf * 6, _0xf28874 * 18, {
        period: 6,
        seed: _0x415154.seed + 131
      });
      let _0x418214 = _0x4cf120(_0x26cb2f.rustShadow, _0x26cb2f.rustLight, 0.53 - _0x49beb1 * 0.23 + (_0x213003 - 0.5) * 0.24 + (_0x5a8735 - 0.5) * 0.19 + (_0x20fe0d - 0.5) * 0.12 + (_0x273cae - 0.5) * 0.08);
      const _0x5587d1 = _0x415154.smoothstep(_0x415154.clamp((_0x367eb1 - 0.6) / 0.31, 0, 1));
      _0x418214 = _0x4cf120(_0x418214, _0x26cb2f.rustDeep, _0x5587d1 * (0.13 + _0x49beb1 * 0.28));
      if (_0xa8ffc9 === 6) {
        _0x418214 = _0x4cf120(_0x418214, _0x26cb2f.rustDeep, 0.28);
      }
      if (_0xa8ffc9 > 20) {
        _0x418214 = _0x4cf120(_0x418214, _0x26cb2f.rustDeep, (_0xa8ffc9 - 20) * 0.16);
      }
      return _0x418214;
    }
    const _0x2d456d = (_0xa8ffc9 - 23) / Math.max(1, _0x10e090 - 24);
    const _0x2b23f0 = _0x415154.fbm(_0x32d8bf * 16, _0xf28874 * 7, {
      octaves: 3,
      gain: 0.5,
      lacunarity: 2,
      period: 16,
      seed: _0x415154.seed + 157
    });
    const _0x8aaf99 = _0x415154.ridge(_0x32d8bf * 18, 1.2 + _0xf28874 * 2.8, {
      octaves: 3,
      gain: 0.5,
      lacunarity: 2,
      period: 18,
      seed: _0x415154.seed + 181
    });
    const _0x52074f = _0x415154.smoothstep(_0x415154.clamp((_0x8aaf99 - 0.61) / 0.29, 0, 1));
    return _0x4cf120(_0x26cb2f.hazeDark, _0x26cb2f.inkDeep, 0.55 + _0x2d456d * 0.34 + (_0x2b23f0 - 0.5) * 0.12 + _0x52074f * 0.12);
  }, {
    blend: "replace"
  });
  _0x415154.field((_0x39473b, _0x536f9a, _0xeec15a, _0x1c40e9) => {
    if (_0x536f9a >= 19) {
      const _0x1b3a28 = _0x415154.smoothstep(_0x415154.clamp((_0x536f9a - 19) / 7, 0, 1));
      const _0x18948 = _0x415154.noise(_0xeec15a * 16, _0x1c40e9 * 4, {
        period: 16,
        seed: _0x415154.seed + 211
      });
      return _0x3dac43(_0x26cb2f.ink, Math.round(_0x1b3a28 * (30 + _0x18948 * 34)));
    }
    if (_0x536f9a === 5) {
      const _0x389819 = _0x415154.noise(_0xeec15a * 24, 0.73, {
        period: 24,
        seed: _0x415154.seed + 223
      });
      return _0x3dac43(_0x26cb2f.ink, Math.round(45 + _0x389819 * 55));
    }
    return null;
  }, {
    blend: "over"
  });
  const _0x29dc04 = _0x415154.stream("support-slats");
  const _0x3126a7 = _0x429a7a / 12;
  for (let _0x4eae88 = 0; _0x4eae88 < 12; _0x4eae88 += 1) {
    const _0x4ebef0 = (_0x4eae88 + 0.5) * _0x3126a7 + (_0x29dc04() - 0.5) * 3.2;
    const _0xddad7c = 3 + Math.floor(_0x29dc04() * 3);
    const _0x5f346f = _0x29dc04() < 0.5 ? -1 : 1;
    const _0x1c8b4d = 24 + Math.floor(_0x29dc04() * 2);
    for (const _0x2b2d06 of [-_0x429a7a, 0, _0x429a7a]) {
      const _0x5ac4b5 = _0x4ebef0 + _0x2b2d06;
      _0x192558.fillStyle = _0x415154.rgba(_0x415154.shade(_0x5cb824, -0.18), 0.58);
      _0x192558.beginPath();
      _0x192558.moveTo(_0x5ac4b5 - _0xddad7c * 0.5, _0x1c8b4d);
      _0x192558.lineTo(_0x5ac4b5 + _0xddad7c * 0.5, _0x1c8b4d);
      _0x192558.lineTo(_0x5ac4b5 + _0xddad7c * 0.5 + _0x5f346f, _0x10e090);
      _0x192558.lineTo(_0x5ac4b5 - _0xddad7c * 0.5 + _0x5f346f * 2, _0x10e090);
      _0x192558.closePath();
      _0x192558.fill();
      _0x192558.strokeStyle = _0x415154.rgba(_0x415154.shade(_0x13fe9e, -0.28), 0.34);
      _0x192558.lineWidth = 1;
      _0x192558.beginPath();
      _0x192558.moveTo(_0x5ac4b5 - _0xddad7c * 0.5, _0x1c8b4d + 1);
      _0x192558.lineTo(_0x5ac4b5 - _0xddad7c * 0.5 + _0x5f346f * 1.5, _0x10e090);
      _0x192558.stroke();
    }
  }
  const _0x5def5e = _0x415154.stream("fixings");
  const _0x462dce = [];
  const _0x43df5e = _0x429a7a / 9;
  for (let _0x4885c1 = 0; _0x4885c1 < 9; _0x4885c1 += 1) {
    _0x462dce.push({
      x: (_0x4885c1 + 0.5) * _0x43df5e + (_0x5def5e() - 0.5) * 4.5,
      y: 9 + Math.floor(_0x5def5e() * 4),
      bleed: 5 + Math.floor(_0x5def5e() * 7),
      width: 2 + Math.floor(_0x5def5e() * 2)
    });
  }
  for (const _0x1cb3a9 of _0x462dce) {
    for (const _0x36e867 of [-_0x429a7a, 0, _0x429a7a]) {
      const _0x433034 = Math.round(_0x1cb3a9.x + _0x36e867);
      const _0x4b404f = _0x1cb3a9.y;
      const _0x2513eb = _0x192558.createLinearGradient(0, _0x4b404f + 1, 0, _0x4b404f + _0x1cb3a9.bleed);
      _0x2513eb.addColorStop(0, _0x415154.rgba(_0x415154.shade(_0x2aa8a7, -0.54), 0.58));
      _0x2513eb.addColorStop(0.58, _0x415154.rgba(_0x415154.shade(_0x2aa8a7, -0.54), 0.22));
      _0x2513eb.addColorStop(1, _0x415154.rgba(_0x415154.shade(_0x2aa8a7, -0.54), 0));
      _0x192558.fillStyle = _0x2513eb;
      _0x192558.fillRect(_0x433034 - Math.floor(_0x1cb3a9.width / 2), _0x4b404f + 1, _0x1cb3a9.width, _0x1cb3a9.bleed);
    }
  }
  const _0xc7b6bd = _0x415154.stream("face-scuffs");
  for (let _0x4604d4 = 0; _0x4604d4 < 14; _0x4604d4 += 1) {
    const _0x15547e = _0xc7b6bd() * _0x429a7a;
    const _0x4e4fe4 = 7 + Math.floor(_0xc7b6bd() * 14);
    const _0x1d48b4 = 3 + Math.floor(_0xc7b6bd() * 8);
    const _0x138f47 = _0xc7b6bd() < 0.45 ? -1 : 0;
    const _0xa3e1a7 = 0.1 + _0xc7b6bd() * 0.13;
    for (const _0x1d092d of [-_0x429a7a, 0, _0x429a7a]) {
      const _0x2c9784 = _0x15547e + _0x1d092d;
      _0x192558.strokeStyle = _0x415154.rgba(_0x415154.shade(_0x2aa8a7, -0.54), _0xa3e1a7 + 0.05);
      _0x192558.lineWidth = 1.4;
      _0x192558.beginPath();
      _0x192558.moveTo(_0x2c9784, _0x4e4fe4 + 1);
      _0x192558.lineTo(_0x2c9784 + _0x1d48b4, _0x4e4fe4 + _0x138f47 + 1);
      _0x192558.stroke();
      _0x192558.strokeStyle = _0x415154.rgba(_0x415154.shade(_0x37c16e, 0.29), _0xa3e1a7);
      _0x192558.lineWidth = 1;
      _0x192558.beginPath();
      _0x192558.moveTo(_0x2c9784, _0x4e4fe4);
      _0x192558.lineTo(_0x2c9784 + _0x1d48b4, _0x4e4fe4 + _0x138f47);
      _0x192558.stroke();
    }
  }
  for (const _0x146fee of _0x462dce) {
    for (const _0x5790f6 of [-_0x429a7a, 0, _0x429a7a]) {
      const _0x169053 = Math.round(_0x146fee.x + _0x5790f6);
      const _0x3312dc = _0x146fee.y;
      _0x192558.fillStyle = _0x415154.rgba(_0x415154.shade(_0x5cb824, -0.18), 0.78);
      _0x192558.fillRect(_0x169053 - 2, _0x3312dc - 1, 5, 4);
      _0x192558.fillStyle = _0x415154.shade(_0x37c16e, -0.27);
      _0x192558.fillRect(_0x169053 - 1, _0x3312dc - 1, 3, 3);
      _0x192558.fillStyle = _0x415154.shade(_0x37c16e, 0.29);
      _0x192558.fillRect(_0x169053 - 1, _0x3312dc - 1, 2, 1);
      _0x192558.fillStyle = _0x415154.shade(_0x2aa8a7, -0.32);
      _0x192558.fillRect(_0x169053 + 1, _0x3312dc, 1, 2);
    }
  }
  _0x415154.field((_0x1c5269, _0x2f277f, _0x4d5e41, _0x16826e) => {
    if (_0x2f277f > 4) {
      return null;
    }
    const _0x4c356a = _0x415154.ridge(_0x4d5e41 * 24, 2.1 + _0x16826e * 7, {
      octaves: 3,
      gain: 0.48,
      lacunarity: 2,
      period: 24,
      seed: _0x415154.seed + 251
    });
    const _0x2d20a4 = _0x415154.smoothstep(_0x415154.clamp((_0x4c356a - 0.57) / 0.31, 0, 1));
    const _0x1de047 = 1 - _0x2f277f / 5;
    const _0x25d78d = Math.round(_0x2d20a4 * (24 + _0x1de047 * 72));
    if (_0x25d78d > 2) {
      return _0x3dac43(_0x26cb2f.hullLight, _0x25d78d);
    } else {
      return null;
    }
  }, {
    blend: "over"
  });
}