export const meta = {
  id: "vent-louver-plate",
  size: {
    w: 128,
    h: 128
  },
  seed: 712521,
  roles: ["rust-orange", "ink", "haze", "hull", "acid-green"]
};
export function render(_0x1c1d72, _0x5319a3) {
  const _0x1200f8 = _0x5319a3.PALETTE["rust-orange"];
  const _0x503f0b = _0x5319a3.PALETTE.ink;
  const _0x4f67f7 = _0x5319a3.PALETTE.haze;
  const _0x4dcba3 = _0x5319a3.PALETTE.hull;
  const _0x4ba94a = _0x5319a3.PALETTE["acid-green"];
  const _0xe15d56 = _0x5319a3.shade(_0x1200f8, -0.48);
  const _0x2b9a02 = _0x5319a3.shade(_0x1200f8, -0.28);
  const _0x46cef2 = _0x5319a3.shade(_0x1200f8, 0.18);
  const _0x107c06 = _0x5319a3.shade(_0x503f0b, -0.18);
  const _0x40019e = _0x5319a3.shade(_0x4dcba3, 0.14);
  const _0x2ed94f = _0x5319a3.mix(_0x4f67f7, _0x4dcba3, 0.64);
  const _0x54b1e1 = _0x5319a3.mix(_0x503f0b, _0x4ba94a, 0.42);
  const _0x578a0a = _0x5319a3.mix(_0x4f67f7, _0x4ba94a, 0.46);
  const _0xf1c064 = _0x5319a3.shade(_0x4ba94a, 0.22);
  const _0x414d1c = _0x1fc00f => {
    const _0x18fe72 = _0x5319a3.hexToRgb(_0x1fc00f);
    return [_0x18fe72.r, _0x18fe72.g, _0x18fe72.b];
  };
  const _0x35a38e = (_0x28eef3, _0x4d3842, _0x1a7de9) => {
    const _0x171a71 = [];
    for (let _0x5aace5 = 0; _0x5aace5 < _0x1a7de9; _0x5aace5++) {
      _0x171a71.push(_0x414d1c(_0x5319a3.mix(_0x28eef3, _0x4d3842, _0x5aace5 / (_0x1a7de9 - 1))));
    }
    return _0x171a71;
  };
  const _0x3788b7 = (_0x1a985b, _0x100fc6) => {
    const _0x151196 = Math.floor(_0x5319a3.clamp(_0x100fc6, 0, 0.9999) * _0x1a985b.length);
    return _0x1a985b[Math.min(_0x1a985b.length - 1, Math.max(0, _0x151196))];
  };
  const _0x95b01 = (_0x56dfba, _0x5762b5 = false) => {
    _0x1c1d72.beginPath();
    _0x1c1d72.moveTo(_0x56dfba[0][0], _0x56dfba[0][1]);
    for (let _0x581b9d = 1; _0x581b9d < _0x56dfba.length; _0x581b9d++) {
      _0x1c1d72.lineTo(_0x56dfba[_0x581b9d][0], _0x56dfba[_0x581b9d][1]);
    }
    if (_0x5762b5) {
      _0x1c1d72.closePath();
    }
  };
  const _0xa46c3e = (_0x1b81af, _0x4a296e) => {
    _0x95b01(_0x1b81af, true);
    _0x1c1d72.fillStyle = _0x4a296e;
    _0x1c1d72.fill();
  };
  const _0x55b135 = (_0x3b910b, _0x59882f, _0x1bd20e, _0x4eb240 = false) => {
    _0x95b01(_0x3b910b, _0x4eb240);
    _0x1c1d72.strokeStyle = _0x59882f;
    _0x1c1d72.lineWidth = _0x1bd20e;
    _0x1c1d72.stroke();
  };
  const _0x4e7f32 = (_0x3beb58, _0x54cfb1, _0x217af6) => {
    let _0x168344 = false;
    for (let _0x45e482 = 0, _0x206d7f = _0x217af6.length - 1; _0x45e482 < _0x217af6.length; _0x206d7f = _0x45e482++) {
      const _0x5a430c = _0x217af6[_0x45e482][0];
      const _0x137f7 = _0x217af6[_0x45e482][1];
      const _0x10c2b1 = _0x217af6[_0x206d7f][0];
      const _0x4e4cac = _0x217af6[_0x206d7f][1];
      if (_0x137f7 > _0x54cfb1 != _0x4e4cac > _0x54cfb1 && _0x3beb58 < (_0x10c2b1 - _0x5a430c) * (_0x54cfb1 - _0x137f7) / (_0x4e4cac - _0x137f7) + _0x5a430c) {
        _0x168344 = !_0x168344;
      }
    }
    return _0x168344;
  };
  const _0x8ba03a = (_0x1fdd0e, _0x17cc4b) => !(_0x1fdd0e < 3) && !(_0x1fdd0e > 125) && !(_0x17cc4b < 4) && !(_0x17cc4b > 124) && _0x1fdd0e + _0x17cc4b >= 17 && _0x1fdd0e - _0x17cc4b <= 111 && _0x1fdd0e + _0x17cc4b <= 239 && _0x17cc4b - _0x1fdd0e <= 111;
  const _0x45cbb6 = (_0x29983b, _0xe45b5) => !(_0x29983b < 22) && !(_0x29983b > 106) && !(_0xe45b5 < 26) && !(_0xe45b5 > 105) && _0x29983b + _0xe45b5 >= 53 && _0x29983b - _0xe45b5 <= 76 && _0x29983b + _0xe45b5 <= 207 && _0xe45b5 - _0x29983b <= 79;
  const _0x20d1cc = _0x35a38e(_0xe15d56, _0x46cef2, 24);
  _0x5319a3.field((_0x3a39ec, _0x32efce) => {
    if (!_0x8ba03a(_0x3a39ec, _0x32efce)) {
      return null;
    }
    const _0x1def73 = _0x5319a3.fbm(_0x3a39ec * 0.105, _0x32efce * 0.031, {
      octaves: 4,
      gain: 0.53,
      lacunarity: 2,
      period: 128,
      seed: _0x5319a3.seed + 11
    });
    const _0x348d13 = _0x5319a3.noise(_0x3a39ec * 0.038, _0x32efce * 0.31, {
      period: 64,
      seed: _0x5319a3.seed + 23
    });
    let _0x136927 = 0.4;
    _0x136927 += (1 - _0x3a39ec / _0x5319a3.width) * 0.08;
    _0x136927 += (1 - _0x32efce / _0x5319a3.height) * 0.15;
    _0x136927 += (_0x1def73 - 0.5) * 0.27;
    _0x136927 += (_0x348d13 - 0.5) * 0.1;
    if (_0x3a39ec > 116) {
      _0x136927 -= (_0x3a39ec - 116) * 0.014;
    }
    if (_0x32efce > 115) {
      _0x136927 -= (_0x32efce - 115) * 0.016;
    }
    return _0x3788b7(_0x20d1cc, _0x136927);
  });
  const _0x5e456d = _0x414d1c(_0xe15d56);
  _0x5319a3.field((_0x58ed88, _0xcae559) => {
    if (!((_0x4e530f, _0x422546) => _0x8ba03a(_0x4e530f, _0x422546) && !_0x45cbb6(_0x4e530f, _0x422546))(_0x58ed88, _0xcae559)) {
      return null;
    }
    const _0x26dd62 = _0x5319a3.ridge(_0x58ed88 * 0.085, _0xcae559 * 0.029, {
      octaves: 3,
      gain: 0.56,
      lacunarity: 2,
      period: 96,
      seed: _0x5319a3.seed + 37
    });
    const _0x1d2fad = _0x5319a3.noise(_0x58ed88 * 0.29, _0xcae559 * 0.041, {
      period: 64,
      seed: _0x5319a3.seed + 41
    });
    const _0x2db651 = Math.max(0, _0x26dd62 - 0.56) * 96 + Math.max(0, _0x1d2fad - 0.68) * 42;
    if (_0x2db651 < 3) {
      return null;
    } else {
      return [_0x5e456d[0], _0x5e456d[1], _0x5e456d[2], Math.round(_0x2db651)];
    }
  }, {
    blend: "over"
  });
  _0x1c1d72.lineJoin = "bevel";
  _0x1c1d72.lineCap = "round";
  _0x55b135([[4, 113], [4, 15], [13, 5], [115, 5], [124, 14]], _0x5319a3.rgba(_0x46cef2, 0.92), 4.2);
  _0x55b135([[125, 15], [125, 114], [115, 124], [13, 124], [3, 114]], _0x5319a3.rgba(_0xe15d56, 0.94), 5.2);
  _0x55b135([[13, 4], [115, 4], [125, 14], [125, 114], [115, 124], [13, 124], [3, 114], [3, 14]], _0x5319a3.rgba(_0x2b9a02, 0.72), 1.6, true);
  const _0x59a8a2 = _0x5319a3.stream("frame-wear");
  for (let _0x1ae28d = 0; _0x1ae28d < 24; _0x1ae28d++) {
    const _0x500539 = _0x1ae28d % 2 == 0;
    const _0x37edd5 = _0x1ae28d % 5 == 0;
    _0x1c1d72.strokeStyle = _0x5319a3.rgba(_0x37edd5 ? _0x2ed94f : _0x46cef2, _0x37edd5 ? 0.28 : 0.16);
    _0x1c1d72.lineWidth = 0.8 + _0x59a8a2() * 1.1;
    if (_0x500539) {
      const _0x34a116 = _0x1ae28d % 4 == 0 ? 9 + _0x59a8a2() * 11 : 108 + _0x59a8a2() * 11;
      const _0x7767a0 = 27 + _0x59a8a2() * 67;
      _0x55b135([[_0x7767a0, _0x34a116], [_0x7767a0 + (5 + _0x59a8a2() * 17), _0x34a116 + (_0x59a8a2() - 0.5) * 1.4]], _0x1c1d72.strokeStyle, _0x1c1d72.lineWidth);
    } else {
      const _0x154633 = _0x1ae28d % 4 == 1 ? 7 + _0x59a8a2() * 11 : 110 + _0x59a8a2() * 11;
      const _0x2b4fe0 = 34 + _0x59a8a2() * 55;
      const _0x9acd61 = 5 + _0x59a8a2() * 16;
      _0x55b135([[_0x154633, _0x2b4fe0], [_0x154633 + (_0x59a8a2() - 0.5), _0x2b4fe0 + _0x9acd61]], _0x1c1d72.strokeStyle, _0x1c1d72.lineWidth);
    }
  }
  _0xa46c3e([[13, 5], [30, 5], [25, 9], [16, 11], [9, 15]], _0x5319a3.rgba(_0x2ed94f, 0.48));
  _0xa46c3e([[115, 5], [121, 11], [114, 10], [104, 7]], _0x5319a3.rgba(_0x2ed94f, 0.36));
  _0xa46c3e([[4, 105], [8, 113], [14, 119], [10, 110]], _0x5319a3.rgba(_0x2ed94f, 0.3));
  _0xa46c3e([[116, 120], [124, 112], [121, 103], [118, 112]], _0x5319a3.rgba(_0x2ed94f, 0.24));
  const _0x54a719 = [[15, 17, 20], [113, 17, 18], [15, 112, 10], [113, 112, 9]];
  for (const [_0x3ee471, _0xc8ff28, _0x341838] of _0x54a719) {
    const _0x6139df = Math.min(122, _0xc8ff28 + _0x341838);
    const _0x5d5b5e = _0x1c1d72.createLinearGradient(0, _0xc8ff28 + 3, 0, _0x6139df);
    _0x5d5b5e.addColorStop(0, _0x5319a3.rgba(_0xe15d56, 0.74));
    _0x5d5b5e.addColorStop(0.54, _0x5319a3.rgba(_0x2b9a02, 0.38));
    _0x5d5b5e.addColorStop(1, _0x5319a3.rgba(_0xe15d56, 0));
    _0xa46c3e([[_0x3ee471 - 3.2, _0xc8ff28 + 3], [_0x3ee471 + 3.1, _0xc8ff28 + 3], [_0x3ee471 + 2.1, _0x6139df], [_0x3ee471 + 0.4, _0x6139df - 2], [_0x3ee471 - 1.1, _0x6139df], [_0x3ee471 - 2.4, _0xc8ff28 + 9]], _0x5d5b5e);
  }
  const _0x440c24 = _0x35a38e(_0x107c06, _0x5319a3.mix(_0x503f0b, _0x4f67f7, 0.24), 14);
  _0x5319a3.field((_0x4b3c23, _0x257abb) => {
    if (!_0x45cbb6(_0x4b3c23, _0x257abb)) {
      return null;
    }
    const _0x987f39 = _0x5319a3.fbm(_0x4b3c23 * 0.08, _0x257abb * 0.045, {
      octaves: 3,
      gain: 0.5,
      lacunarity: 2,
      period: 96,
      seed: _0x5319a3.seed + 59
    });
    const _0x5066ca = _0x5319a3.noise(_0x4b3c23 * 0.34, _0x257abb * 0.05, {
      period: 64,
      seed: _0x5319a3.seed + 61
    });
    return _0x3788b7(_0x440c24, 0.18 + _0x987f39 * 0.25 + _0x5066ca * 0.08);
  });
  const _0x135b7c = _0x414d1c(_0x107c06);
  _0x5319a3.field((_0x4cbf58, _0x4a48c6) => {
    if (!_0x45cbb6(_0x4cbf58, _0x4a48c6)) {
      return null;
    }
    const _0x88f697 = Math.max(0, Math.min(_0x4cbf58 - 22, 106 - _0x4cbf58, _0x4a48c6 - 26, 105 - _0x4a48c6));
    const _0x12d37e = Math.max(0, 1 - _0x88f697 / 8);
    const _0x358358 = Math.max(0, 1 - (_0x4a48c6 - 26) / 12);
    const _0x49fb87 = Math.round(_0x12d37e * 112 * _0x12d37e + _0x358358 * 40);
    if (_0x49fb87 < 2) {
      return null;
    } else {
      return [_0x135b7c[0], _0x135b7c[1], _0x135b7c[2], Math.min(184, _0x49fb87)];
    }
  }, {
    blend: "over"
  });
  _0x55b135([[27, 26], [102, 26], [106, 30], [106, 101], [102, 105], [26, 105], [22, 101], [22, 31]], _0x5319a3.rgba(_0x107c06, 0.96), 5.4, true);
  _0x55b135([[27, 25.8], [102, 25.8], [106.2, 30]], _0x5319a3.rgba(_0x46cef2, 0.95), 3.2);
  _0x55b135([[27, 25.8], [21.8, 31], [21.8, 101]], _0x5319a3.rgba(_0x46cef2, 0.74), 3);
  _0x55b135([[106.2, 30], [106.2, 101], [102, 105.2], [26, 105.2]], _0x5319a3.rgba(_0x107c06, 0.88), 4.6);
  const _0x25ad6b = _0x414d1c(_0x4ba94a);
  _0x5319a3.field((_0xfae228, _0x3a02ee) => {
    if (!_0x45cbb6(_0xfae228, _0x3a02ee)) {
      return null;
    }
    const _0x3d6916 = (_0xfae228 - 65) / 20;
    const _0x42239d = (_0x3a02ee - 91) / 11;
    const _0x45abb6 = _0x3d6916 * _0x3d6916 + _0x42239d * _0x42239d;
    if (_0x45abb6 >= 1) {
      return null;
    }
    const _0x28a7f9 = (1 - _0x45abb6) * (1 - _0x45abb6) * (0.76 + _0x5319a3.noise(_0xfae228 * 0.25, _0x3a02ee * 0.18, {
      period: 48,
      seed: _0x5319a3.seed + 73
    }) * 0.24);
    const _0x16c4ff = Math.round(_0x28a7f9 * 82);
    if (_0x16c4ff < 2) {
      return null;
    } else {
      return [_0x25ad6b[0], _0x25ad6b[1], _0x25ad6b[2], _0x16c4ff];
    }
  }, {
    blend: "over"
  });
  _0xa46c3e([[50, 90], [58, 84], [74, 84], [83, 89], [78, 98], [55, 100]], _0x5319a3.rgba(_0x54b1e1, 0.72));
  const _0x170865 = [[[27, 34], [101, 33], [101, 44], [98, 47], [30, 50], [27, 47]], [[27, 50], [101, 49], [101, 60], [98, 63], [30, 66], [27, 63]], [[27, 66], [101, 65], [101, 76], [98, 79], [30, 82], [27, 79]], [[27, 82], [57, 81], [61, 84], [57, 93], [51, 97], [27, 94]], [[75, 83], [101, 81], [101, 92], [83, 93], [77, 98], [72, 94], [70, 89]]];
  const _0x35f72e = _0x170865.map(_0x3cbaf1 => {
    let _0x55c273 = Infinity;
    let _0x496b0d = -Infinity;
    for (const _0x7dc02 of _0x3cbaf1) {
      _0x55c273 = Math.min(_0x55c273, _0x7dc02[1]);
      _0x496b0d = Math.max(_0x496b0d, _0x7dc02[1]);
    }
    return {
      poly: _0x3cbaf1,
      minY: _0x55c273,
      maxY: _0x496b0d
    };
  });
  const _0x4da1bd = _0x5319a3.mix(_0x503f0b, _0x4f67f7, 0.72);
  const _0x391d15 = _0x35a38e(_0x4da1bd, _0x5319a3.mix(_0x4f67f7, _0x4dcba3, 0.74), 18);
  for (const _0x17f161 of _0x170865) {
    _0xa46c3e(_0x17f161, _0x4da1bd);
  }
  _0x5319a3.field((_0x3c0c83, _0x55871e) => {
    let _0x4fc82a = null;
    for (const _0xbd3cd of _0x35f72e) {
      if (_0x4e7f32(_0x3c0c83 + 0.5, _0x55871e + 0.5, _0xbd3cd.poly)) {
        _0x4fc82a = _0xbd3cd;
        break;
      }
    }
    if (!_0x4fc82a) {
      return null;
    }
    const _0x38bc54 = 0.24 + (1 - _0x5319a3.clamp((_0x55871e - _0x4fc82a.minY) / Math.max(1, _0x4fc82a.maxY - _0x4fc82a.minY), 0, 1)) * 0.5 + (_0x5319a3.noise(_0x3c0c83 * 0.042, _0x55871e * 0.39, {
      period: 64,
      seed: _0x5319a3.seed + 89
    }) - 0.5) * 0.12 + (_0x5319a3.fbm(_0x3c0c83 * 0.11, _0x55871e * 0.035, {
      octaves: 3,
      gain: 0.52,
      lacunarity: 2,
      period: 96,
      seed: _0x5319a3.seed + 97
    }) - 0.5) * 0.16 + (1 - _0x3c0c83 / _0x5319a3.width) * 0.04;
    return _0x3788b7(_0x391d15, _0x38bc54);
  });
  _0x5319a3.field((_0x439f20, _0x1cf731) => {
    for (const _0x19a087 of _0x35f72e) {
      if (!_0x4e7f32(_0x439f20 + 0.5, _0x1cf731 + 0.5, _0x19a087.poly)) {
        continue;
      }
      const _0x2217ea = (_0x1cf731 - _0x19a087.minY) / Math.max(1, _0x19a087.maxY - _0x19a087.minY);
      if (_0x2217ea < 0.19 || _0x2217ea > 0.58) {
        return null;
      }
      const _0x4f0a57 = 1 - (_0x2217ea - 0.19) / 0.39;
      const _0x2d6aff = Math.round(_0x4f0a57 * 128);
      return [_0x135b7c[0], _0x135b7c[1], _0x135b7c[2], _0x2d6aff];
    }
    return null;
  }, {
    blend: "over"
  });
  for (const _0x7260e3 of _0x170865) {
    _0x55b135(_0x7260e3, _0x5319a3.rgba(_0x107c06, 0.84), 1.8, true);
  }
  const _0x3bf255 = [[[30, 50], [98, 47], [101, 44]], [[30, 66], [98, 63], [101, 60]], [[30, 82], [98, 79], [101, 76]], [[27, 94], [51, 97], [57, 93]], [[77, 98], [83, 93], [101, 92]]];
  for (const _0x9bb708 of _0x3bf255) {
    _0x55b135(_0x9bb708, _0x5319a3.rgba(_0x107c06, 0.92), 3.4);
  }
  const _0x397503 = [[[28, 34], [100, 33]], [[28, 50], [100, 49]], [[28, 66], [100, 65]], [[28, 82], [57, 81]], [[75, 83], [100, 81]]];
  for (const _0x4c2813 of _0x397503) {
    _0x55b135(_0x4c2813.map(_0x54323b => [_0x54323b[0], _0x54323b[1] + 4.2]), _0x5319a3.rgba(_0x107c06, 0.82), 5.2);
  }
  const _0xb834cf = [[[38, 44], [71, 43]], [[46, 59], [89, 58]], [[33, 75], [67, 74]], [[79, 88], [96, 87]]];
  for (const _0x53122c of _0xb834cf) {
    _0x55b135(_0x53122c, _0x5319a3.rgba(_0x4dcba3, 0.15), 1.3);
  }
  _0xa46c3e([[30, 43], [41, 42], [38, 46], [31, 47]], _0x5319a3.rgba(_0x2b9a02, 0.38));
  _0xa46c3e([[87, 55], [100, 54], [97, 58], [89, 59]], _0x5319a3.rgba(_0x2b9a02, 0.32));
  _0xa46c3e([[28, 73], [39, 72], [36, 77], [29, 78]], _0x5319a3.rgba(_0x2b9a02, 0.34));
  for (const _0x923c39 of _0x397503) {
    _0x55b135(_0x923c39, _0x5319a3.rgba(_0x4f67f7, 0.96), 5);
    _0x55b135(_0x923c39, _0x40019e, 3.2);
  }
  _0xa46c3e([[59, 89], [62, 87], [69, 87], [72, 90], [70, 94], [61, 96], [57, 93]], _0x4ba94a);
  _0xa46c3e([[61, 89], [68, 89], [70, 91], [67, 93], [61, 93], [59, 92]], _0xf1c064);
  _0x55b135([[57, 81], [61, 84], [57, 93], [51, 97]], _0x5319a3.rgba(_0x2ed94f, 0.92), 2.5);
  _0x55b135([[75, 83], [70, 89], [72, 94], [77, 98]], _0x5319a3.rgba(_0x2ed94f, 0.9), 2.5);
  _0x55b135([[59, 87], [57, 93]], _0x5319a3.rgba(_0x578a0a, 0.88), 1.7);
  _0x55b135([[70, 89], [72, 94]], _0x5319a3.rgba(_0x578a0a, 0.86), 1.7);
  const _0x40b93b = [0.12, -0.18, -0.08, 0.16];
  for (let _0x41a628 = 0; _0x41a628 < _0x54a719.length; _0x41a628++) {
    const _0x47de41 = _0x54a719[_0x41a628][0];
    const _0x268d37 = _0x54a719[_0x41a628][1];
    _0x1c1d72.beginPath();
    _0x1c1d72.arc(_0x47de41 + 2, _0x268d37 + 2.4, 7.4, 0, Math.PI * 2);
    _0x1c1d72.fillStyle = _0x5319a3.rgba(_0x107c06, 0.82);
    _0x1c1d72.fill();
    _0x1c1d72.beginPath();
    _0x1c1d72.arc(_0x47de41, _0x268d37, 7.1, 0, Math.PI * 2);
    _0x1c1d72.fillStyle = _0xe15d56;
    _0x1c1d72.fill();
    const _0x3f64e1 = _0x1c1d72.createLinearGradient(_0x47de41 - 5, _0x268d37 - 5, _0x47de41 + 5, _0x268d37 + 5);
    _0x3f64e1.addColorStop(0, _0x46cef2);
    _0x3f64e1.addColorStop(0.46, _0x1200f8);
    _0x3f64e1.addColorStop(1, _0x2b9a02);
    _0x1c1d72.beginPath();
    _0x1c1d72.arc(_0x47de41, _0x268d37, 5.35, 0, Math.PI * 2);
    _0x1c1d72.fillStyle = _0x3f64e1;
    _0x1c1d72.fill();
    _0x1c1d72.beginPath();
    _0x1c1d72.arc(_0x47de41 - 0.4, _0x268d37 - 0.5, 4.35, Math.PI * 1.04, Math.PI * 1.72);
    _0x1c1d72.strokeStyle = _0x5319a3.rgba(_0x2ed94f, 0.7);
    _0x1c1d72.lineWidth = 1.55;
    _0x1c1d72.stroke();
    const _0x12e07f = _0x40b93b[_0x41a628];
    const _0x296082 = Math.cos(_0x12e07f) * 3.3;
    const _0x39c9c9 = Math.sin(_0x12e07f) * 3.3;
    _0x55b135([[_0x47de41 - _0x296082, _0x268d37 - _0x39c9c9], [_0x47de41 + _0x296082, _0x268d37 + _0x39c9c9]], _0x5319a3.rgba(_0x107c06, 0.94), 2.15);
  }
}