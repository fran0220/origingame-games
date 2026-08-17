export const meta = {
  id: "backdrop-gill-cavity",
  size: {
    w: 512,
    h: 512
  },
  seed: 64351,
  roles: ["deep-teal", "haze", "hull", "ink", "rust-orange"]
};
export function render(_0x4931a4, _0x4bbc3f) {
  const _0xff2e91 = _0x4bbc3f.width;
  const _0x1c40d2 = _0x4bbc3f.height;
  const _0xb0c0ac = _0x4bbc3f.PALETTE;
  const _0x16f717 = _0x4bbc3f.clamp;
  const _0x33cfe9 = (_0x3c05c0, _0x4adb13 = 1) => _0x4bbc3f.rgba(_0x3c05c0, _0x4adb13);
  const _0x5c5e3c = _0x183922 => _0x4bbc3f.hexToRgb(_0x183922);
  const _0x364460 = _0x3b0c29 => _0x4bbc3f.smoothstep(_0x16f717(_0x3b0c29, 0, 1));
  const _0x526558 = {
    inkDeep: _0x4bbc3f.shade(_0xb0c0ac.ink, -0.24),
    inkSoft: _0x4bbc3f.mix(_0xb0c0ac.ink, _0xb0c0ac.haze, 0.22),
    hazeDark: _0x4bbc3f.shade(_0xb0c0ac.haze, -0.28),
    hazeLight: _0x4bbc3f.shade(_0xb0c0ac.haze, 0.12),
    hullDark: _0x4bbc3f.shade(_0xb0c0ac.hull, -0.34),
    hullLight: _0x4bbc3f.shade(_0xb0c0ac.hull, 0.22),
    rustDeep: _0x4bbc3f.shade(_0xb0c0ac["rust-orange"], -0.5),
    rustDark: _0x4bbc3f.shade(_0xb0c0ac["rust-orange"], -0.29),
    rustLight: _0x4bbc3f.shade(_0xb0c0ac["rust-orange"], 0.24),
    rustPale: _0x4bbc3f.mix(_0xb0c0ac["rust-orange"], _0xb0c0ac.hull, 0.32),
    tealDeep: _0x4bbc3f.shade(_0xb0c0ac["deep-teal"], -0.48),
    tealDark: _0x4bbc3f.shade(_0xb0c0ac["deep-teal"], -0.2),
    tealFog: _0x4bbc3f.mix(_0xb0c0ac["deep-teal"], _0xb0c0ac.haze, 0.57),
    tealLight: _0x4bbc3f.shade(_0xb0c0ac["deep-teal"], 0.2)
  };
  function _0x3747c9(_0x4a2b64, _0x9451aa = true) {
    _0x4931a4.beginPath();
    _0x4931a4.moveTo(_0x4a2b64[0][0], _0x4a2b64[0][1]);
    for (let _0x455f12 = 1; _0x455f12 < _0x4a2b64.length; _0x455f12 += 1) {
      _0x4931a4.lineTo(_0x4a2b64[_0x455f12][0], _0x4a2b64[_0x455f12][1]);
    }
    if (_0x9451aa) {
      _0x4931a4.closePath();
    }
  }
  function _0x29d1c2(_0x17381b, _0x98cc92) {
    _0x3747c9(_0x17381b);
    _0x4931a4.fillStyle = _0x98cc92;
    _0x4931a4.fill();
  }
  function _0x4b5e39(_0x22d05e, _0x24cf27, _0x377c8c, _0x460c26 = false) {
    _0x3747c9(_0x22d05e, _0x460c26);
    _0x4931a4.strokeStyle = _0x24cf27;
    _0x4931a4.lineWidth = _0x377c8c;
    _0x4931a4.stroke();
  }
  function _0x410fba(_0x38e1a6, _0x100c61, _0x59f247) {
    return {
      r: Math.round(_0x4bbc3f.lerp(_0x38e1a6.r, _0x100c61.r, _0x59f247)),
      g: Math.round(_0x4bbc3f.lerp(_0x38e1a6.g, _0x100c61.g, _0x59f247)),
      b: Math.round(_0x4bbc3f.lerp(_0x38e1a6.b, _0x100c61.b, _0x59f247))
    };
  }
  function _0x3f6a79(_0x46e358, _0x3f2dcc, _0x45be78) {
    return [_0x4bbc3f.lerp(_0x46e358[0], _0x3f2dcc[0], _0x45be78), _0x4bbc3f.lerp(_0x46e358[1], _0x3f2dcc[1], _0x45be78)];
  }
  function _0x16dd96(_0x4b04e5, _0x11e91c, _0x2ce476) {
    let _0x1862f0 = false;
    let _0x3a2c28 = false;
    for (let _0x36b86e = 0; _0x36b86e < _0x2ce476.length; _0x36b86e += 1) {
      const _0x193cda = _0x2ce476[_0x36b86e];
      const _0x3776e1 = _0x2ce476[(_0x36b86e + 1) % _0x2ce476.length];
      const _0x563e3e = (_0x3776e1[0] - _0x193cda[0]) * (_0x11e91c - _0x193cda[1]) - (_0x3776e1[1] - _0x193cda[1]) * (_0x4b04e5 - _0x193cda[0]);
      if (_0x563e3e > 0.01) {
        _0x1862f0 = true;
      }
      if (_0x563e3e < -0.01) {
        _0x3a2c28 = true;
      }
      if (_0x1862f0 && _0x3a2c28) {
        return false;
      }
    }
    return true;
  }
  function _0x2da0a8(_0x495d22, _0x339e4b = 5) {
    _0x4b5e39(_0x495d22, _0x33cfe9(_0x526558.inkDeep, 0.8), _0x339e4b);
    _0x4b5e39(_0x495d22.map(([_0xf69e43, _0x5d7c49]) => [_0xf69e43 - 1.3, _0x5d7c49 - 1.5]), _0x33cfe9(_0x526558.rustLight, 0.34), Math.max(1.1, _0x339e4b * 0.25));
  }
  function _0x2d4643(_0x38fbd7, _0x187fe9, _0x48314f, _0x5b7b4d = 1) {
    _0x4931a4.beginPath();
    _0x4931a4.arc(_0x38fbd7, _0x187fe9, _0x48314f, 0, Math.PI * 2);
    _0x4931a4.fillStyle = _0x33cfe9(_0x526558.inkDeep, _0x5b7b4d * 0.92);
    _0x4931a4.fill();
    _0x4931a4.beginPath();
    _0x4931a4.arc(_0x38fbd7 - _0x48314f * 0.25, _0x187fe9 - _0x48314f * 0.28, _0x48314f * 0.46, 0, Math.PI * 2);
    _0x4931a4.fillStyle = _0x33cfe9(_0x526558.hullLight, _0x5b7b4d * 0.72);
    _0x4931a4.fill();
    _0x4931a4.beginPath();
    _0x4931a4.moveTo(_0x38fbd7 - _0x48314f * 0.65, _0x187fe9 + _0x48314f * 0.08);
    _0x4931a4.lineTo(_0x38fbd7 + _0x48314f * 0.58, _0x187fe9 - _0x48314f * 0.12);
    _0x4931a4.strokeStyle = _0x33cfe9(_0x526558.inkDeep, _0x5b7b4d * 0.88);
    _0x4931a4.lineWidth = Math.max(1, _0x48314f * 0.36);
    _0x4931a4.stroke();
  }
  _0x4931a4.globalCompositeOperation = "source-over";
  _0x4931a4.lineCap = "round";
  _0x4931a4.lineJoin = "round";
  const _0x322c26 = _0x5c5e3c(_0x4bbc3f.mix(_0x526558.inkDeep, _0x526558.rustDeep, 0.58));
  const _0x4b1a7a = _0x5c5e3c(_0x4bbc3f.mix(_0x526558.hazeDark, _0xb0c0ac["rust-orange"], 0.67));
  const _0xd06d37 = _0x5c5e3c(_0x4bbc3f.mix(_0xb0c0ac.hull, _0x526558.rustLight, 0.56));
  _0x4bbc3f.field((_0x34951e, _0x37b88b, _0x5c0f30, _0x30545b) => {
    const _0x360c8f = _0x4bbc3f.fbm(_0x34951e * 0.145 + _0x37b88b * 0.018, _0x37b88b * 0.045, {
      octaves: 4,
      gain: 0.53,
      lacunarity: 2.04,
      period: 137,
      seed: meta.seed + 11
    });
    const _0x17aa9d = _0x4bbc3f.noise(_0x34951e * 0.35 + _0x37b88b * 0.012, _0x37b88b * 0.075, {
      period: 61,
      seed: meta.seed + 12
    });
    const _0x31066e = _0x16f717(0.34 + (_0x360c8f - 0.5) * 0.34 + (_0x17aa9d - 0.5) * 0.1 + ((1 - _0x5c0f30) * 0.19 + (1 - _0x30545b) * 0.21 - _0x5c0f30 * 0.1), 0.06, 0.95);
    const _0x2996c2 = _0x31066e < 0.58 ? _0x410fba(_0x322c26, _0x4b1a7a, _0x31066e / 0.58) : _0x410fba(_0x4b1a7a, _0xd06d37, (_0x31066e - 0.58) / 0.42);
    return [_0x2996c2.r, _0x2996c2.g, _0x2996c2.b, 255];
  });
  _0x29d1c2([[70, 76], [206, 69], [207, 108], [83, 115]], _0x33cfe9(_0x526558.rustLight, 0.075));
  _0x29d1c2([[207, 69], [336, 72], [431, 67], [443, 102], [207, 108]], _0x33cfe9(_0x526558.inkSoft, 0.1));
  _0x29d1c2([[72, 398], [211, 385], [307, 390], [306, 438], [73, 441]], _0x33cfe9(_0x526558.rustLight, 0.065));
  _0x29d1c2([[307, 390], [440, 381], [441, 428], [306, 438]], _0x33cfe9(_0x526558.inkSoft, 0.11));
  const _0xb890f0 = _0x5c5e3c(_0x526558.rustDark);
  _0x4bbc3f.field((_0x447e4d, _0x16c7f5) => {
    if (_0x447e4d < 78 || _0x447e4d > 442 || _0x16c7f5 < 362 || _0x16c7f5 > 448) {
      return null;
    }
    const _0x5bec6d = _0x4bbc3f.ridge(_0x447e4d * 0.22, _0x16c7f5 * 0.017, {
      octaves: 3,
      gain: 0.56,
      lacunarity: 2.1,
      period: 83,
      seed: meta.seed + 21
    });
    const _0x5e291a = Math.max(0, (_0x5bec6d - 0.51) / 0.49) * 92 * _0x364460((_0x16c7f5 - 362) / 18) * (1 - _0x364460((_0x16c7f5 - 376) / 72)) * (_0x364460((_0x447e4d - 78) / 28) * _0x364460((442 - _0x447e4d) / 28));
    if (_0x5e291a < 1) {
      return null;
    } else {
      return [_0xb890f0.r, _0xb890f0.g, _0xb890f0.b, _0x5e291a];
    }
  }, {
    blend: "over"
  });
  _0x2da0a8([[72, 84], [174, 80], [207, 87]], 5);
  _0x2da0a8([[303, 82], [373, 76], [440, 78]], 5);
  _0x2da0a8([[73, 425], [173, 418], [244, 424]], 5);
  _0x2da0a8([[315, 421], [438, 411]], 5);
  _0x2da0a8([[207, 70], [207, 104]], 4);
  _0x2da0a8([[336, 73], [337, 99]], 4);
  _0x2da0a8([[211, 399], [211, 438]], 4);
  _0x2da0a8([[307, 398], [306, 437]], 4);
  _0x2d4643(207, 84, 2.8, 0.72);
  _0x2d4643(337, 79, 2.8, 0.65);
  _0x2d4643(211, 421, 2.9, 0.7);
  _0x2d4643(307, 420, 2.9, 0.64);
  const _0x2cdd61 = _0x4bbc3f.stream("outer-wear");
  for (let _0x547b60 = 0; _0x547b60 < 34; _0x547b60 += 1) {
    const _0x1393bd = _0x547b60 < 17;
    const _0xda4b0b = 80 + _0x2cdd61() * 350;
    const _0x1984de = _0x1393bd ? 79 + _0x2cdd61() * 17 : 405 + _0x2cdd61() * 29;
    const _0x574d00 = 5 + _0x2cdd61() * 22;
    const _0xa1a7ce = -0.5 - _0x2cdd61() * 1.7;
    _0x4b5e39([[_0xda4b0b, _0x1984de], [Math.min(442, _0xda4b0b + _0x574d00), _0x1984de + _0xa1a7ce]], _0x33cfe9(_0x2cdd61() > 0.48 ? _0x526558.rustLight : _0x526558.inkSoft, 0.1 + _0x2cdd61() * 0.13), 1 + _0x2cdd61() * 1.1);
  }
  const _0x501872 = [[116, 140], [414, 130], [404, 344], [104, 356]];
  _0x4931a4.save();
  _0x4931a4.shadowColor = _0x33cfe9(_0x526558.inkDeep, 0.78);
  _0x4931a4.shadowBlur = 18;
  _0x4931a4.shadowOffsetX = 7;
  _0x4931a4.shadowOffsetY = 10;
  _0x29d1c2([[86, 102], [447, 92], [439, 380], [74, 394]], _0x33cfe9(_0x526558.inkDeep, 0.82));
  _0x4931a4.restore();
  const _0x20afdd = _0x5c5e3c(_0x4bbc3f.mix(_0x526558.tealDark, _0xb0c0ac.haze, 0.61));
  const _0x40ffce = _0x5c5e3c(_0x526558.hazeDark);
  const _0x3b17ef = _0x5c5e3c(_0x4bbc3f.mix(_0x526558.inkDeep, _0x526558.tealDeep, 0.16));
  _0x4bbc3f.field((_0x3908ed, _0x56292d) => {
    if (_0x3908ed < 103 || _0x3908ed > 415 || _0x56292d < 129 || _0x56292d > 357 || !_0x16dd96(_0x3908ed, _0x56292d, _0x501872)) {
      return null;
    }
    const _0x46456a = _0x16f717((_0x3908ed - 104) / 310, 0, 1);
    const _0x33003e = _0x16f717((356 - _0x56292d) / 226, 0, 1);
    const _0x5e0aa1 = _0x4bbc3f.fbm(_0x3908ed * 0.095, _0x56292d * 0.042, {
      octaves: 3,
      gain: 0.55,
      lacunarity: 2.08,
      period: 91,
      seed: meta.seed + 31
    });
    const _0x34b785 = _0x4bbc3f.noise(_0x3908ed * 0.23 + _0x56292d * 0.03, _0x56292d * 0.065, {
      period: 47,
      seed: meta.seed + 32
    });
    const _0x24586f = _0x16f717(_0x364460(_0x46456a * 0.7 + _0x33003e * 0.3) + (_0x5e0aa1 - 0.5) * 0.15 + (_0x34b785 - 0.5) * 0.06, 0, 1);
    const _0x32fe84 = _0x24586f < 0.48 ? _0x410fba(_0x20afdd, _0x40ffce, _0x24586f / 0.48) : _0x410fba(_0x40ffce, _0x3b17ef, (_0x24586f - 0.48) / 0.52);
    return [_0x32fe84.r, _0x32fe84.g, _0x32fe84.b, 255];
  });
  _0x4931a4.save();
  _0x3747c9(_0x501872);
  _0x4931a4.clip();
  for (let _0x4e9dc4 = 0; _0x4e9dc4 < 5; _0x4e9dc4 += 1) {
    const _0x5a57ea = 268 + _0x4e9dc4 * 37;
    _0x4b5e39([[_0x5a57ea, 124], [235 + _0x4e9dc4 * 34, 362]], _0x33cfe9(_0x526558.inkDeep, 0.3), 9);
    _0x4b5e39([[_0x5a57ea - 2, 126], [233 + _0x4e9dc4 * 34, 358]], _0x33cfe9(_0x526558.tealDark, 0.14), 2);
  }
  const _0x1fdf7d = _0x4931a4.createRadialGradient(342, 188, 8, 342, 188, 156);
  _0x1fdf7d.addColorStop(0, _0x33cfe9(_0x526558.tealFog, 0.28));
  _0x1fdf7d.addColorStop(0.48, _0x33cfe9(_0x526558.hazeLight, 0.105));
  _0x1fdf7d.addColorStop(1, _0x33cfe9(_0x526558.tealFog, 0));
  _0x4931a4.fillStyle = _0x1fdf7d;
  _0x4931a4.fillRect(102, 126, 316, 235);
  const _0x57b63c = _0x4bbc3f.stream("deep-dust");
  for (let _0x2a618a = 0; _0x2a618a < 18; _0x2a618a += 1) {
    const _0x40666c = 230 + _0x57b63c() * 178;
    const _0x33dfdc = 141 + _0x57b63c() * 168;
    _0x4b5e39([[_0x40666c, _0x33dfdc], [_0x40666c + (10 + _0x57b63c() * 38), _0x33dfdc - 4 - _0x57b63c() * 9]], _0x33cfe9(_0x526558.hazeLight, 0.035 + _0x57b63c() * 0.045), 2 + _0x57b63c() * 4);
  }
  _0x4931a4.restore();
  _0x4931a4.save();
  _0x3747c9(_0x501872);
  _0x4931a4.clip();
  const _0x3b0047 = _0x4bbc3f.stream("vane-wear");
  for (let _0x3dd78a = 6; _0x3dd78a >= 0; _0x3dd78a -= 1) {
    const _0xa8ae40 = 108 - _0x3dd78a * 0.6;
    const _0x3e36e9 = 414 - _0x3dd78a * 0.45;
    const _0x499bac = 151 + _0x3dd78a * 27.6;
    const _0x26609b = 140 + _0x3dd78a * 24.1;
    const _0x200688 = 16 - _0x3dd78a * 0.35;
    const _0x24da80 = 10.5 - _0x3dd78a * 0.22;
    const _0x3f331d = [[_0xa8ae40, _0x499bac + _0x200688 + 5], [_0x3e36e9, _0x26609b + _0x24da80 + 5], [_0x3e36e9, _0x26609b + _0x24da80 + 17], [_0xa8ae40, _0x499bac + _0x200688 + 19]];
    _0x4931a4.save();
    _0x4931a4.shadowColor = _0x33cfe9(_0x526558.inkDeep, 0.72);
    _0x4931a4.shadowBlur = 5;
    _0x4931a4.shadowOffsetY = 3;
    _0x29d1c2(_0x3f331d, _0x33cfe9(_0x526558.inkDeep, 0.66));
    _0x4931a4.restore();
    const _0x2713b8 = [[_0xa8ae40, _0x499bac], [_0x3e36e9, _0x26609b], [_0x3e36e9, _0x26609b + _0x24da80], [_0xa8ae40, _0x499bac + _0x200688]];
    const _0x2aaba0 = _0x4931a4.createLinearGradient(_0xa8ae40, _0x499bac, _0x3e36e9, _0x26609b);
    _0x2aaba0.addColorStop(0, _0x33cfe9(_0x526558.rustPale, 1));
    _0x2aaba0.addColorStop(0.18, _0x33cfe9(_0xb0c0ac["rust-orange"], 1));
    _0x2aaba0.addColorStop(0.61, _0x33cfe9(_0x526558.hazeDark, 1));
    _0x2aaba0.addColorStop(1, _0x33cfe9(_0x526558.tealDeep, 1));
    _0x29d1c2(_0x2713b8, _0x2aaba0);
    _0x4b5e39([[_0xa8ae40, _0x499bac + _0x200688], [_0x3e36e9, _0x26609b + _0x24da80]], _0x33cfe9(_0x526558.inkDeep, 0.9), 4.5);
    const _0x43602f = _0x4931a4.createLinearGradient(_0xa8ae40, _0x499bac, _0x3e36e9, _0x26609b);
    _0x43602f.addColorStop(0, _0x33cfe9(_0x526558.rustLight, 0.95));
    _0x43602f.addColorStop(0.48, _0x33cfe9(_0x526558.hullLight, 0.46));
    _0x43602f.addColorStop(1, _0x33cfe9(_0x526558.hazeLight, 0.12));
    _0x4b5e39([[_0xa8ae40, _0x499bac], [_0x3e36e9, _0x26609b]], _0x43602f, 2.7);
    const _0x28ec14 = (_0x26609b - _0x499bac) / (_0x3e36e9 - _0xa8ae40);
    for (let _0x267564 = 0; _0x267564 < 3; _0x267564 += 1) {
      const _0x15c6fa = _0xa8ae40 + 22 + _0x3b0047() * (_0x3e36e9 - _0xa8ae40 - 62);
      const _0x2900ea = Math.min(_0x3e36e9 - 12, _0x15c6fa + 8 + _0x3b0047() * 24);
      const _0x8c7f33 = 3 + _0x3b0047() * Math.max(2, _0x200688 - 7);
      _0x4b5e39([[_0x15c6fa, _0x499bac + _0x28ec14 * (_0x15c6fa - _0xa8ae40) + _0x8c7f33], [_0x2900ea, _0x499bac + _0x28ec14 * (_0x2900ea - _0xa8ae40) + _0x8c7f33 - _0x3b0047()]], _0x33cfe9(_0x3b0047() > 0.44 ? _0x526558.rustLight : _0x526558.inkSoft, 0.12 + _0x3b0047() * 0.13), 1 + _0x3b0047() * 0.85);
    }
    const _0x2564d0 = _0xa8ae40 + 24;
    _0x2d4643(_0x2564d0, _0x499bac + (_0x2564d0 - _0xa8ae40) / (_0x3e36e9 - _0xa8ae40) * (_0x26609b - _0x499bac) + _0x200688 * 0.5, 3.1, 0.84);
  }
  _0x4931a4.restore();
  const _0x34462e = [[86, 102], [447, 92], [414, 130], [116, 140]];
  const _0x34980f = [[86, 102], [116, 140], [104, 356], [74, 394]];
  const _0x31757a = [[447, 92], [439, 380], [404, 344], [414, 130]];
  const _0x1aedd3 = [[74, 394], [439, 380], [404, 344], [104, 356]];
  const _0x106d45 = _0x4931a4.createLinearGradient(86, 102, 447, 92);
  _0x106d45.addColorStop(0, _0x33cfe9(_0x526558.rustLight, 1));
  _0x106d45.addColorStop(0.42, _0x33cfe9(_0xb0c0ac["rust-orange"], 1));
  _0x106d45.addColorStop(1, _0x33cfe9(_0x526558.rustDark, 1));
  _0x29d1c2(_0x34462e, _0x106d45);
  const _0x25e930 = _0x4931a4.createLinearGradient(86, 102, 76, 394);
  _0x25e930.addColorStop(0, _0x33cfe9(_0x526558.rustLight, 1));
  _0x25e930.addColorStop(0.48, _0x33cfe9(_0xb0c0ac["rust-orange"], 1));
  _0x25e930.addColorStop(1, _0x33cfe9(_0x526558.rustDeep, 1));
  _0x29d1c2(_0x34980f, _0x25e930);
  const _0x4c8fb8 = _0x4931a4.createLinearGradient(414, 130, 447, 92);
  _0x4c8fb8.addColorStop(0, _0x33cfe9(_0x526558.hazeDark, 1));
  _0x4c8fb8.addColorStop(0.48, _0x33cfe9(_0x526558.rustDeep, 1));
  _0x4c8fb8.addColorStop(1, _0x33cfe9(_0x526558.rustDark, 1));
  _0x29d1c2(_0x31757a, _0x4c8fb8);
  const _0x4c4992 = _0x4931a4.createLinearGradient(74, 394, 439, 380);
  _0x4c4992.addColorStop(0, _0x33cfe9(_0x526558.rustDark, 1));
  _0x4c4992.addColorStop(0.48, _0x33cfe9(_0xb0c0ac["rust-orange"], 1));
  _0x4c4992.addColorStop(1, _0x33cfe9(_0x526558.hazeDark, 1));
  _0x29d1c2(_0x1aedd3, _0x4c4992);
  const _0x5ab8e4 = _0x5c5e3c(_0x526558.rustLight);
  const _0x2ee7d3 = _0x5c5e3c(_0x526558.rustDeep);
  _0x4bbc3f.field((_0x23819d, _0x5c1812) => {
    if (_0x23819d < 72 || _0x23819d > 449 || _0x5c1812 < 90 || _0x5c1812 > 396) {
      return null;
    }
    if (!_0x16dd96(_0x23819d, _0x5c1812, _0x34462e) && !_0x16dd96(_0x23819d, _0x5c1812, _0x34980f) && !_0x16dd96(_0x23819d, _0x5c1812, _0x31757a) && !_0x16dd96(_0x23819d, _0x5c1812, _0x1aedd3)) {
      return null;
    }
    const _0x18f1a2 = _0x4bbc3f.fbm(_0x23819d * 0.24 + _0x5c1812 * 0.018, _0x5c1812 * 0.064, {
      octaves: 3,
      gain: 0.54,
      lacunarity: 2.06,
      period: 73,
      seed: meta.seed + 51
    });
    const _0x2fca3a = _0x4bbc3f.noise(_0x23819d * 0.39, _0x5c1812 * 0.07, {
      period: 37,
      seed: meta.seed + 52
    });
    const _0x4f748d = _0x18f1a2 > 0.52 ? _0x5ab8e4 : _0x2ee7d3;
    const _0x1f9b67 = 6 + Math.abs(_0x18f1a2 - 0.5) * 30 + Math.abs(_0x2fca3a - 0.5) * 10;
    return [_0x4f748d.r, _0x4f748d.g, _0x4f748d.b, _0x1f9b67];
  }, {
    blend: "over"
  });
  _0x4b5e39(_0x501872, _0x33cfe9(_0x526558.inkDeep, 0.9), 9, true);
  _0x4b5e39([[86, 102], [447, 92]], _0x33cfe9(_0x526558.rustLight, 0.95), 4);
  _0x4b5e39([[86, 102], [74, 394]], _0x33cfe9(_0x526558.rustLight, 0.62), 3);
  _0x4b5e39([[116, 140], [414, 130]], _0x33cfe9(_0x526558.rustPale, 0.72), 2.2);
  _0x4b5e39([[116, 140], [104, 356]], _0x33cfe9(_0x526558.rustPale, 0.46), 2);
  _0x4b5e39([[74, 394], [439, 380]], _0x33cfe9(_0x526558.inkDeep, 0.86), 5);
  _0x4b5e39([[447, 92], [439, 380]], _0x33cfe9(_0x526558.inkDeep, 0.72), 4);
  for (const _0x43ed0e of [0.17, 0.35, 0.55, 0.75]) {
    const _0x4f1e16 = _0x3f6a79(_0x34462e[0], _0x34462e[1], _0x43ed0e);
    const _0x47f6b9 = _0x3f6a79(_0x34462e[3], _0x34462e[2], _0x43ed0e);
    _0x4b5e39([_0x4f1e16, _0x47f6b9], _0x33cfe9(_0x526558.inkDeep, 0.66), 3);
    _0x4b5e39([[_0x4f1e16[0] - 1, _0x4f1e16[1] - 1], [_0x47f6b9[0] - 1, _0x47f6b9[1] - 1]], _0x33cfe9(_0x526558.rustLight, 0.3), 1);
  }
  for (const _0x4bfca1 of [0.22, 0.46, 0.7]) {
    const _0x13872d = _0x3f6a79(_0x1aedd3[0], _0x1aedd3[1], _0x4bfca1);
    const _0x16b164 = _0x3f6a79(_0x1aedd3[3], _0x1aedd3[2], _0x4bfca1);
    _0x4b5e39([_0x13872d, _0x16b164], _0x33cfe9(_0x526558.inkDeep, 0.6), 3);
    _0x4b5e39([[_0x13872d[0] - 1, _0x13872d[1] - 1], [_0x16b164[0] - 1, _0x16b164[1] - 1]], _0x33cfe9(_0x526558.rustLight, 0.22), 1);
  }
  _0x4931a4.save();
  _0x3747c9(_0x34462e);
  _0x4931a4.clip();
  const _0x220382 = _0x4bbc3f.stream("lip-wear");
  for (let _0x1d7409 = 0; _0x1d7409 < 38; _0x1d7409 += 1) {
    const _0x4d0eab = 98 + _0x220382() * 330;
    const _0x4a0766 = 107 + _0x220382() * 28 - (_0x4d0eab - 98) * 0.027;
    _0x4b5e39([[_0x4d0eab, _0x4a0766], [_0x4d0eab + (5 + _0x220382() * 25), _0x4a0766 - 0.6 - _0x220382() * 1.2]], _0x33cfe9(_0x220382() > 0.42 ? _0x526558.rustPale : _0x526558.inkDeep, 0.12 + _0x220382() * 0.2), 1 + _0x220382() * 1.2);
  }
  _0x4931a4.restore();
  for (const _0x4d2240 of [0.08, 0.23, 0.4, 0.58, 0.76, 0.92]) {
    const _0x339ac4 = _0x3f6a79(_0x34462e[0], _0x34462e[1], _0x4d2240);
    const _0x311789 = _0x3f6a79(_0x34462e[3], _0x34462e[2], _0x4d2240);
    _0x2d4643((_0x339ac4[0] + _0x311789[0]) * 0.5, (_0x339ac4[1] + _0x311789[1]) * 0.5, 3.8, 1 - _0x4d2240 * 0.28);
  }
  for (const _0x3c93cf of [0.18, 0.43, 0.69, 0.88]) {
    const _0x4d510f = _0x3f6a79(_0x34980f[0], _0x34980f[3], _0x3c93cf);
    const _0x20a6f3 = _0x3f6a79(_0x34980f[1], _0x34980f[2], _0x3c93cf);
    _0x2d4643((_0x4d510f[0] + _0x20a6f3[0]) * 0.5, (_0x4d510f[1] + _0x20a6f3[1]) * 0.5, 3.6, 0.94);
  }
  _0x29d1c2([[88, 103], [105, 103], [111, 112], [95, 116]], _0x33cfe9(_0x526558.hullLight, 0.42));
  _0x29d1c2([[77, 381], [91, 374], [99, 385], [84, 391]], _0x33cfe9(_0x526558.rustLight, 0.32));
  const _0x549651 = [151, 251];
  const _0x538761 = [145, 357];
  const _0x50f7f9 = [172, 250];
  const _0x48064d = [166, 355];
  _0x4b5e39([_0x549651, _0x538761], _0x33cfe9(_0x526558.inkDeep, 0.9), 7);
  _0x4b5e39([_0x50f7f9, _0x48064d], _0x33cfe9(_0x526558.inkDeep, 0.9), 7);
  const _0x1a11c1 = _0x4931a4.createLinearGradient(150, 250, 146, 357);
  _0x1a11c1.addColorStop(0, _0x33cfe9(_0x526558.hullLight, 0.9));
  _0x1a11c1.addColorStop(0.55, _0x33cfe9(_0x526558.rustPale, 0.94));
  _0x1a11c1.addColorStop(1, _0x33cfe9(_0x526558.rustDark, 0.94));
  _0x4b5e39([_0x549651, _0x538761], _0x1a11c1, 3);
  _0x4b5e39([_0x50f7f9, _0x48064d], _0x1a11c1, 3);
  for (let _0x5c2354 = 260; _0x5c2354 <= 348; _0x5c2354 += 11) {
    const _0x560d74 = (_0x5c2354 - 251) / 106;
    const _0x11464c = _0x3f6a79(_0x549651, _0x538761, _0x560d74);
    const _0x256dc3 = _0x3f6a79(_0x50f7f9, _0x48064d, _0x560d74);
    _0x4b5e39([_0x11464c, _0x256dc3], _0x33cfe9(_0x526558.inkDeep, 0.88), 5);
    _0x4b5e39([[_0x11464c[0], _0x11464c[1] - 1], [_0x256dc3[0], _0x256dc3[1] - 1]], _0x33cfe9(_0x526558.hullLight, 0.7), 2);
  }
  _0x29d1c2([[178, 332], [202, 331], [190, 354]], _0x33cfe9(_0x526558.inkDeep, 0.72));
  _0x29d1c2([[285, 328], [311, 327], [298, 349]], _0x33cfe9(_0x526558.inkDeep, 0.68));
  _0x29d1c2([[365, 325], [389, 324], [378, 344]], _0x33cfe9(_0x526558.inkDeep, 0.62));
  const _0x2728b1 = [[110, 317], [406, 306], [407, 323], [109, 335]];
  const _0x41a1ee = _0x4931a4.createLinearGradient(110, 317, 406, 306);
  _0x41a1ee.addColorStop(0, _0x33cfe9(_0x526558.rustPale, 1));
  _0x41a1ee.addColorStop(0.46, _0x33cfe9(_0x526558.hullDark, 1));
  _0x41a1ee.addColorStop(1, _0x33cfe9(_0x526558.hazeDark, 1));
  _0x29d1c2([[109, 327], [408, 316], [409, 334], [108, 346]], _0x33cfe9(_0x526558.inkDeep, 0.84));
  _0x29d1c2(_0x2728b1, _0x41a1ee);
  _0x4b5e39([[110, 317], [406, 306]], _0x33cfe9(_0x526558.hullLight, 0.82), 2.5);
  _0x4b5e39([[109, 335], [407, 323]], _0x33cfe9(_0x526558.inkDeep, 0.9), 4);
  for (let _0x5686e6 = 1; _0x5686e6 < 17; _0x5686e6 += 1) {
    const _0x1c1424 = _0x5686e6 / 17;
    const _0x3ff8df = _0x3f6a79(_0x2728b1[0], _0x2728b1[1], _0x1c1424);
    const _0x21c154 = _0x3f6a79(_0x2728b1[3], _0x2728b1[2], _0x1c1424);
    _0x4b5e39([_0x3ff8df, _0x21c154], _0x33cfe9(_0x526558.inkDeep, 0.54), 2);
    _0x4b5e39([[_0x3ff8df[0] - 1, _0x3ff8df[1]], [_0x21c154[0] - 1, _0x21c154[1]]], _0x33cfe9(_0x526558.rustLight, 0.16), 1);
  }
  const _0x5b11e1 = [[126, 288], [396, 279]];
  const _0x102138 = [[124, 301], [398, 292]];
  const _0x2a2dcf = [0.04, 0.24, 0.45, 0.67, 0.9];
  _0x4b5e39(_0x5b11e1, _0x33cfe9(_0x526558.inkDeep, 0.9), 6);
  _0x4b5e39(_0x102138, _0x33cfe9(_0x526558.inkDeep, 0.82), 5);
  for (const _0x37479f of _0x2a2dcf) {
    _0x4b5e39([_0x3f6a79(_0x5b11e1[0], _0x5b11e1[1], _0x37479f), _0x3f6a79(_0x2728b1[0], _0x2728b1[1], _0x37479f)], _0x33cfe9(_0x526558.inkDeep, 0.88), 6);
  }
  const _0x20586e = _0x4931a4.createLinearGradient(126, 288, 396, 279);
  _0x20586e.addColorStop(0, _0x33cfe9(_0x526558.hullLight, 0.9));
  _0x20586e.addColorStop(0.5, _0x33cfe9(_0x526558.rustPale, 0.88));
  _0x20586e.addColorStop(1, _0x33cfe9(_0x526558.hazeLight, 0.62));
  _0x4b5e39(_0x5b11e1, _0x20586e, 2.8);
  _0x4b5e39(_0x102138, _0x20586e, 2.2);
  for (const _0x6ab397 of _0x2a2dcf) {
    const _0x53cece = _0x3f6a79(_0x5b11e1[0], _0x5b11e1[1], _0x6ab397);
    const _0x3f9ce2 = _0x3f6a79(_0x2728b1[0], _0x2728b1[1], _0x6ab397);
    _0x4b5e39([_0x53cece, _0x3f9ce2], _0x20586e, 2.5);
    _0x2d4643(_0x3f9ce2[0], _0x3f9ce2[1], 2.6, 0.82);
  }
  const _0x2b3945 = _0x4931a4.createRadialGradient(173, 274, 1, 173, 274, 17);
  _0x2b3945.addColorStop(0, _0x33cfe9(_0x526558.tealLight, 0.46));
  _0x2b3945.addColorStop(0.45, _0x33cfe9(_0xb0c0ac["deep-teal"], 0.16));
  _0x2b3945.addColorStop(1, _0x33cfe9(_0x526558.tealFog, 0));
  _0x4931a4.fillStyle = _0x2b3945;
  _0x4931a4.fillRect(155, 256, 36, 36);
  _0x4931a4.beginPath();
  _0x4931a4.arc(173, 274, 6, 0, Math.PI * 2);
  _0x4931a4.fillStyle = _0x33cfe9(_0x526558.inkDeep, 0.95);
  _0x4931a4.fill();
  _0x4931a4.beginPath();
  _0x4931a4.arc(172.5, 273.5, 3.3, 0, Math.PI * 2);
  _0x4931a4.fillStyle = _0x33cfe9(_0x526558.tealLight, 0.96);
  _0x4931a4.fill();
  _0x4931a4.beginPath();
  _0x4931a4.arc(171.4, 272.2, 1.15, 0, Math.PI * 2);
  _0x4931a4.fillStyle = _0x33cfe9(_0x526558.hullLight, 0.92);
  _0x4931a4.fill();
  const _0x43ea1c = _0x5c5e3c(_0x526558.tealFog);
  _0x4bbc3f.field((_0x168815, _0x10796c, _0x43093b, _0x38b178) => {
    const _0x138c07 = _0x16f717((_0x43093b - 0.3) * 0.75 + (0.59 - _0x38b178) * 0.4, 0, 1);
    if (_0x138c07 <= 0.015) {
      return null;
    }
    const _0xe82241 = 5 + _0x138c07 * 20 + (_0x4bbc3f.noise(_0x168815 * 0.055, _0x10796c * 0.05, {
      period: 67,
      seed: meta.seed + 71
    }) - 0.5) * 5;
    return [_0x43ea1c.r, _0x43ea1c.g, _0x43ea1c.b, _0xe82241];
  }, {
    blend: "over"
  });
  _0x4bbc3f.mask((_0x588b7b, _0xaf1ca5) => {
    const _0x3107ad = _0x4bbc3f.noise(_0x588b7b * 0.037 + 3.4, _0xaf1ca5 * 0.033 + 7.1, {
      period: 79,
      seed: meta.seed + 81
    });
    const _0x270493 = (_0x3107ad - 0.5) * 5;
    const _0x5cefce = 53 + (1 - _0x3107ad) * 7;
    const _0x1f19dd = 68 + _0x3107ad * 2;
    const _0x46873c = 66 + (1 - _0x3107ad) * 4;
    const _0x5dce20 = (_0x9285f1, _0x4cada6) => _0x364460((_0x9285f1 - 5) / (_0x4cada6 - 5));
    let _0xe9cb4c = _0x5dce20(_0x588b7b + _0x270493, 52 + _0x3107ad * 6) * _0x5dce20(_0xff2e91 - 1 - _0x588b7b - _0x270493, _0x1f19dd) * _0x5dce20(_0xaf1ca5 - _0x270493, _0x5cefce) * _0x5dce20(_0x1c40d2 - 1 - _0xaf1ca5 + _0x270493, _0x46873c);
    const _0x905bdd = _0x4bbc3f.noise(_0x588b7b + 0.37, _0xaf1ca5 + 0.71, {
      period: 7,
      seed: meta.seed + 82
    });
    if (_0xe9cb4c < 0.006 + _0x905bdd * 0.004) {
      return 0;
    } else {
      if (_0xe9cb4c < 0.999) {
        _0xe9cb4c += 3 / 255 * (_0x905bdd - 0.5);
      }
      return _0x16f717(_0xe9cb4c, 0, 1);
    }
  });
}