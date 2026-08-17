export const meta = {
  id: "backdrop-spine-coil",
  size: {
    w: 512,
    h: 512
  },
  seed: 187307,
  roles: ["deep-teal", "haze", "ink", "hull", "warm-white"]
};
export function render(_0x22d26b, _0x10b7a1) {
  const _0x15d9ab = _0x10b7a1.width;
  const _0x3e88f8 = _0x10b7a1.height;
  const _0x11245e = _0x10b7a1.PALETTE;
  _0x22d26b.clearRect(0, 0, _0x15d9ab, _0x3e88f8);
  _0x22d26b.lineCap = "round";
  _0x22d26b.lineJoin = "round";
  const _0x10b9d0 = {
    void: _0x10b7a1.shade(_0x11245e.ink, -0.28),
    ink: _0x11245e.ink,
    joint: _0x10b7a1.mix(_0x11245e.ink, _0x11245e.haze, 0.18),
    hazeDark: _0x10b7a1.shade(_0x11245e.haze, -0.27),
    haze: _0x11245e.haze,
    hazeLight: _0x10b7a1.shade(_0x11245e.haze, 0.13),
    hullDark: _0x10b7a1.shade(_0x11245e.hull, -0.34),
    hullMid: _0x11245e.hull,
    hullLight: _0x10b7a1.shade(_0x11245e.hull, 0.18),
    hullGlint: _0x10b7a1.shade(_0x11245e.hull, 0.31),
    fog: _0x10b7a1.mix(_0x11245e["deep-teal"], _0x11245e.haze, 0.52),
    fogDeep: _0x10b7a1.mix(_0x11245e["deep-teal"], _0x11245e.haze, 0.31),
    warmDim: _0x10b7a1.mix(_0x11245e["warm-white"], _0x11245e.haze, 0.18),
    warm: _0x11245e["warm-white"]
  };
  const _0x9f1bc7 = {};
  for (const _0x115824 of Object.keys(_0x10b9d0)) {
    _0x9f1bc7[_0x115824] = _0x10b7a1.hexToRgb(_0x10b9d0[_0x115824]);
  }
  const _0x229322 = (_0x531b2a, _0x9c9d75 = 0, _0x17d6db = 1) => Math.max(_0x9c9d75, Math.min(_0x17d6db, _0x531b2a));
  const _0x59b83f = _0x150773 => (_0x150773 = _0x229322(_0x150773)) * _0x150773 * (3 - _0x150773 * 2);
  const _0x25b299 = (_0x2deca6, _0x75e444, _0x11697c) => {
    _0x11697c = _0x229322(_0x11697c);
    return {
      r: _0x2deca6.r + (_0x75e444.r - _0x2deca6.r) * _0x11697c,
      g: _0x2deca6.g + (_0x75e444.g - _0x2deca6.g) * _0x11697c,
      b: _0x2deca6.b + (_0x75e444.b - _0x2deca6.b) * _0x11697c
    };
  };
  const _0x32908b = (_0x2f63a6, _0x19570d = 255) => [Math.round(_0x229322(_0x2f63a6.r, 0, 255)), Math.round(_0x229322(_0x2f63a6.g, 0, 255)), Math.round(_0x229322(_0x2f63a6.b, 0, 255)), Math.round(_0x229322(_0x19570d, 0, 255))];
  function _0x26cef8(_0x598f86) {
    return 252 + Math.sin((_0x598f86 - 30) / 88) * 16 + (_0x598f86 - 256) * 0.04;
  }
  function _0x1f832a(_0x40cbd3, _0xab79b7, _0x39324f, _0x394623, _0x533599) {
    const _0x329276 = Math.abs(_0x40cbd3) - Math.max(0, _0x39324f - _0x533599);
    const _0x3c0f42 = Math.abs(_0xab79b7) - Math.max(0, _0x394623 - _0x533599);
    return Math.hypot(Math.max(_0x329276, 0), Math.max(_0x3c0f42, 0)) + Math.min(Math.max(_0x329276, _0x3c0f42), 0) - _0x533599;
  }
  function _0x147afa(_0x568ae0, _0xc3fa87, _0x1453c7, _0x1752e7, _0x345872, _0x1f6a85, _0x46f258) {
    return _0x1f832a(_0x568ae0 - _0x1453c7, _0xc3fa87 - _0x1752e7, _0x345872, _0x1f6a85, _0x46f258);
  }
  function _0x18f482(_0x16391c, _0x1fb133, _0x725849, _0x12bfd6, _0x58900d) {
    _0x58900d = Math.min(_0x58900d, _0x725849 * 0.5, _0x12bfd6 * 0.5);
    _0x22d26b.beginPath();
    _0x22d26b.moveTo(_0x16391c + _0x58900d, _0x1fb133);
    _0x22d26b.lineTo(_0x16391c + _0x725849 - _0x58900d, _0x1fb133);
    _0x22d26b.quadraticCurveTo(_0x16391c + _0x725849, _0x1fb133, _0x16391c + _0x725849, _0x1fb133 + _0x58900d);
    _0x22d26b.lineTo(_0x16391c + _0x725849, _0x1fb133 + _0x12bfd6 - _0x58900d);
    _0x22d26b.quadraticCurveTo(_0x16391c + _0x725849, _0x1fb133 + _0x12bfd6, _0x16391c + _0x725849 - _0x58900d, _0x1fb133 + _0x12bfd6);
    _0x22d26b.lineTo(_0x16391c + _0x58900d, _0x1fb133 + _0x12bfd6);
    _0x22d26b.quadraticCurveTo(_0x16391c, _0x1fb133 + _0x12bfd6, _0x16391c, _0x1fb133 + _0x12bfd6 - _0x58900d);
    _0x22d26b.lineTo(_0x16391c, _0x1fb133 + _0x58900d);
    _0x22d26b.quadraticCurveTo(_0x16391c, _0x1fb133, _0x16391c + _0x58900d, _0x1fb133);
    _0x22d26b.closePath();
  }
  const _0x412b97 = [496, 437, 377, 316, 255, 194, 134, 74, 16].map((_0x1debac, _0x1c7270) => {
    const _0x2e333b = Math.sin(_0x1debac * 0.031 + 0.6) * 0.038;
    return {
      index: _0x1c7270,
      cy: _0x1debac,
      cx: _0x26cef8(_0x1debac),
      hw: 78 + _0x1debac * 0.046,
      hh: 23 + _0x1debac * 0.008,
      radius: 10 + _0x1debac * 0.003,
      angle: _0x2e333b,
      cos: Math.cos(_0x2e333b),
      sin: Math.sin(_0x2e333b)
    };
  });
  const _0x7ac0de = _0x10b7a1.stream("rib-geometry");
  const _0x2052d7 = [];
  for (let _0x45466f = 1; _0x45466f <= 7; _0x45466f++) {
    const _0x46a524 = _0x412b97[_0x45466f];
    for (const _0x158c6d of [-1, 1]) {
      const _0x2aa694 = _0x158c6d * (_0x46a524.hw - 8);
      const _0x43eaa3 = _0x46a524.cx + _0x46a524.cos * _0x2aa694;
      const _0x514f7b = _0x46a524.cy + _0x46a524.sin * _0x2aa694;
      const _0x2017c8 = 8 + _0x7ac0de() * 25;
      const _0x43a264 = _0x158c6d < 0 ? _0x2017c8 : _0x15d9ab - _0x2017c8;
      const _0x18d5b0 = 37 - _0x45466f * 0.7 + _0x7ac0de() * 10;
      const _0x54a8b1 = -(19 + _0x7ac0de() * 10);
      const _0x4876a7 = 22 - _0x45466f * 1.18 + _0x7ac0de() * 1.6;
      const _0x10044f = _0x7ac0de();
      const _0x4c7785 = {
        side: _0x158c6d,
        rootX: _0x43eaa3,
        rootY: _0x514f7b,
        tipX: _0x43a264,
        dy: _0x18d5b0,
        bend: _0x54a8b1,
        rootWidth: _0x4876a7,
        phase: _0x10044f,
        valid: new Uint8Array(_0x15d9ab),
        tAtX: new Float32Array(_0x15d9ab),
        yAtX: new Float32Array(_0x15d9ab),
        widthAtX: new Float32Array(_0x15d9ab),
        normAtX: new Float32Array(_0x15d9ab)
      };
      const _0x1863dc = _0x43a264 - _0x43eaa3;
      for (let _0x31ef5d = 0; _0x31ef5d < _0x15d9ab; _0x31ef5d++) {
        const _0x8e2490 = (_0x31ef5d + 0.5 - _0x43eaa3) / _0x1863dc;
        if (_0x8e2490 < 0 || _0x8e2490 > 1) {
          continue;
        }
        const _0x44416d = _0x8e2490;
        const _0x5a3923 = _0x514f7b + _0x18d5b0 * _0x44416d + _0x54a8b1 * Math.sin(Math.PI * _0x44416d) + Math.sin((_0x44416d * 2 + _0x10044f) * Math.PI) * 2.2 * _0x44416d * (1 - _0x44416d);
        const _0x22adc3 = (_0x18d5b0 + _0x54a8b1 * Math.PI * Math.cos(Math.PI * _0x44416d) + (Math.PI * 2 * Math.cos((_0x44416d * 2 + _0x10044f) * Math.PI) * _0x44416d * (1 - _0x44416d) + Math.sin((_0x44416d * 2 + _0x10044f) * Math.PI) * (1 - _0x44416d * 2)) * 2.2) / _0x1863dc;
        const _0x20b951 = Math.max(4.5, _0x4876a7 * (1 - _0x44416d * 0.72));
        _0x4c7785.valid[_0x31ef5d] = 1;
        _0x4c7785.tAtX[_0x31ef5d] = _0x44416d;
        _0x4c7785.yAtX[_0x31ef5d] = _0x5a3923;
        _0x4c7785.widthAtX[_0x31ef5d] = _0x20b951;
        _0x4c7785.normAtX[_0x31ef5d] = Math.sqrt(1 + _0x22adc3 * _0x22adc3);
      }
      _0x2052d7.push(_0x4c7785);
    }
  }
  const _0x497ad0 = _0x412b97[2];
  const _0x182c6e = _0x412b97[5];
  const _0x2ad0d6 = [{
    x: _0x497ad0.cx - 111,
    y: _0x497ad0.cy - _0x497ad0.hh - 15,
    w: 106,
    h: 29,
    count: 8
  }, {
    x: _0x182c6e.cx + 8,
    y: _0x182c6e.cy - _0x182c6e.hh - 8,
    w: 108,
    h: 28,
    count: 8
  }];
  function _0x5e8a54(_0x56519e, _0x2410fc) {
    const _0x3fe52f = Math.max(0, Math.min(_0x15d9ab - 1, Math.floor(_0x56519e)));
    const _0x50391e = 38 + _0x229322(_0x2410fc, 0, _0x3e88f8) * 0.036;
    const _0x10c664 = Math.abs(_0x56519e - _0x26cef8(_0x2410fc)) - _0x50391e;
    let _0x438788 = _0x10c664;
    let _0x3e211c = Infinity;
    let _0x296f47 = null;
    let _0x53f6da = 0;
    let _0x5a8486 = 0;
    for (const _0x6b9f4d of _0x412b97) {
      const _0xc0d5c8 = _0x56519e - _0x6b9f4d.cx;
      const _0x1990ae = _0x2410fc - _0x6b9f4d.cy;
      const _0x58acb1 = _0xc0d5c8 * _0x6b9f4d.cos + _0x1990ae * _0x6b9f4d.sin;
      const _0x2ae92a = -_0xc0d5c8 * _0x6b9f4d.sin + _0x1990ae * _0x6b9f4d.cos;
      const _0x2f4026 = _0x1f832a(_0x58acb1, _0x2ae92a, _0x6b9f4d.hw, _0x6b9f4d.hh, _0x6b9f4d.radius);
      if (_0x2f4026 < _0x3e211c) {
        _0x3e211c = _0x2f4026;
        _0x296f47 = _0x6b9f4d;
        _0x53f6da = _0x58acb1;
        _0x5a8486 = _0x2ae92a;
      }
      if (_0x2f4026 < _0x438788) {
        _0x438788 = _0x2f4026;
      }
    }
    let _0x1a4614 = Infinity;
    let _0x42fc16 = null;
    let _0x3c8b9c = 0;
    let _0x52966e = 0;
    let _0x156d90 = 1;
    let _0x4fe940 = 1;
    for (const _0x35e508 of _0x2052d7) {
      if (!_0x35e508.valid[_0x3fe52f]) {
        continue;
      }
      const _0x130261 = _0x35e508.normAtX[_0x3fe52f];
      const _0x33ed0 = Math.abs(_0x2410fc - _0x35e508.yAtX[_0x3fe52f]) / _0x130261 - _0x35e508.widthAtX[_0x3fe52f];
      if (_0x33ed0 < _0x1a4614) {
        _0x1a4614 = _0x33ed0;
        _0x42fc16 = _0x35e508;
        _0x3c8b9c = _0x35e508.tAtX[_0x3fe52f];
        _0x52966e = _0x35e508.yAtX[_0x3fe52f];
        _0x156d90 = _0x35e508.widthAtX[_0x3fe52f];
        _0x4fe940 = _0x130261;
      }
      if (_0x33ed0 < _0x438788) {
        _0x438788 = _0x33ed0;
      }
    }
    let _0x1a2630;
    let _0x386a0c = Infinity;
    let _0x1039cf = null;
    for (const _0x1270f4 of _0x2ad0d6) {
      const _0x3102fe = _0x147afa(_0x56519e, _0x2410fc, _0x1270f4.x + _0x1270f4.w * 0.5, _0x1270f4.y + _0x1270f4.h * 0.5, _0x1270f4.w * 0.5, _0x1270f4.h * 0.5, 5);
      if (_0x3102fe < _0x386a0c) {
        _0x386a0c = _0x3102fe;
        _0x1039cf = _0x1270f4;
      }
      if (_0x3102fe < _0x438788) {
        _0x438788 = _0x3102fe;
      }
    }
    _0x1a2630 = _0x386a0c <= 0 ? "gallery" : _0x3e211c <= 0 ? "drum" : _0x1a4614 <= 0 ? "rib" : _0x10c664 <= 0 ? "joint" : _0x386a0c === _0x438788 ? "gallery" : _0x3e211c === _0x438788 ? "drum" : _0x1a4614 === _0x438788 ? "rib" : "joint";
    return {
      d: _0x438788,
      kind: _0x1a2630,
      segment: _0x296f47,
      localX: _0x53f6da,
      localY: _0x5a8486,
      rib: _0x42fc16,
      ribT: _0x3c8b9c,
      ribY: _0x52966e,
      ribWidth: _0x156d90,
      ribNorm: _0x4fe940,
      gallery: _0x1039cf
    };
  }
  function _0x1e1f9c(_0x419873, _0x55d9ad) {
    const _0x22424d = _0x59b83f((176 - _0x55d9ad) / 176) * 0.72;
    const _0x17eb20 = _0x419873.kind === "rib" ? _0x59b83f((_0x419873.ribT - 0.26) / 0.74) * 0.88 : 0;
    return Math.max(_0x22424d, _0x17eb20);
  }
  function _0x450ea(_0x176297, _0x5b9551, _0x457910 = 0) {
    const _0x5153a5 = _0x176297.rootX + (_0x176297.tipX - _0x176297.rootX) * _0x5b9551;
    const _0x47b111 = _0x176297.rootY + _0x176297.dy * _0x5b9551 + _0x176297.bend * Math.sin(Math.PI * _0x5b9551) + Math.sin((_0x5b9551 * 2 + _0x176297.phase) * Math.PI) * 2.2 * _0x5b9551 * (1 - _0x5b9551);
    const _0x5e1fc8 = Math.max(4.5, _0x176297.rootWidth * (1 - _0x5b9551 * 0.72));
    return {
      x: _0x5153a5,
      y: _0x47b111 + _0x457910 * _0x5e1fc8,
      width: _0x5e1fc8
    };
  }
  function _0x35ef9b(_0x46223a, _0x3c32a9) {
    _0x22d26b.beginPath();
    for (let _0x896d22 = 0; _0x896d22 <= 30; _0x896d22++) {
      const _0x57d340 = _0x450ea(_0x46223a, _0x896d22 / 30, _0x3c32a9);
      if (_0x896d22 === 0) {
        _0x22d26b.moveTo(_0x57d340.x, _0x57d340.y);
      } else {
        _0x22d26b.lineTo(_0x57d340.x, _0x57d340.y);
      }
    }
  }
  _0x10b7a1.field((_0x84c6d5, _0x41c7ea, _0x3d811c, _0x5a0998) => {
    const _0x485a7f = _0x5e8a54(_0x84c6d5 + 0.5, _0x41c7ea + 0.5);
    if (_0x485a7f.d > 0) {
      return null;
    }
    const _0x422a71 = _0x10b7a1.fbm(_0x84c6d5 * 0.072, _0x41c7ea * 0.31, {
      octaves: 3,
      gain: 0.55,
      lacunarity: 2,
      period: 193,
      seed: meta.seed + 11
    });
    const _0x17361f = _0x10b7a1.fbm(_0x84c6d5 * 0.045, _0x41c7ea * 0.052, {
      octaves: 3,
      gain: 0.58,
      lacunarity: 2.05,
      period: 227,
      seed: meta.seed + 29
    });
    const _0xb9bc47 = _0x10b7a1.ridge(_0x84c6d5 * 0.48, _0x41c7ea * 0.022, {
      octaves: 2,
      gain: 0.55,
      lacunarity: 2,
      period: 251,
      seed: meta.seed + 47
    });
    const _0x1cf029 = (1 - _0x3d811c) * 0.105 + (1 - _0x5a0998) * 0.035;
    let _0x201659;
    if (_0x485a7f.kind === "drum") {
      const _0x2e5d49 = _0x485a7f.segment;
      const _0xd37e91 = _0x485a7f.localX / _0x2e5d49.hw;
      const _0x3debbb = _0x485a7f.localY / _0x2e5d49.hh;
      const _0x23c9fc = _0x59b83f((Math.abs(_0xd37e91) - 0.67) / 0.33);
      const _0x1bc0bb = _0x59b83f((Math.abs(_0x3debbb) - 0.61) / 0.39);
      const _0x4cfc20 = 1 - _0x59b83f(Math.abs(Math.abs(_0x3debbb) - 0.46) / 0.105);
      const _0x5c0168 = 28 + _0x2e5d49.index % 3 * 3;
      const _0xcf2b34 = (_0x485a7f.localX + _0x2e5d49.hw + _0x2e5d49.index * 7) / _0x5c0168;
      const _0x2b036e = _0xcf2b34 - Math.floor(_0xcf2b34);
      let _0x3cc1f3 = 0.48 + _0x1cf029 + (_0x422a71 - 0.5) * 0.18 + (_0x17361f - 0.5) * 0.13 - _0x23c9fc * 0.17 - _0x1bc0bb * 0.16 - _0x59b83f((0.075 - Math.min(_0x2b036e, 1 - _0x2b036e)) / 0.075) * 0.11;
      _0x3cc1f3 += _0x3debbb < 0 ? _0x4cfc20 * 0.08 : -_0x4cfc20 * 0.09;
      _0x201659 = _0x25b299(_0x9f1bc7.hullDark, _0x9f1bc7.hullLight, _0x229322(_0x3cc1f3, 0.08, 0.88));
    } else if (_0x485a7f.kind === "rib") {
      const _0x43a615 = (_0x41c7ea + 0.5 - _0x485a7f.ribY) / Math.max(1, _0x485a7f.ribWidth * _0x485a7f.ribNorm);
      const _0x279da1 = _0x485a7f.ribT * (6.1 + _0x485a7f.rib.phase) + _0x485a7f.rib.phase;
      const _0x5dff19 = _0x279da1 - Math.floor(_0x279da1);
      const _0x2faf8b = _0x59b83f((0.08 - Math.min(_0x5dff19, 1 - _0x5dff19)) / 0.08);
      let _0x373d44 = 0.43 + _0x1cf029 + (_0x422a71 - 0.5) * 0.2 + (_0x17361f - 0.5) * 0.1 - _0x229322(_0x43a615, -1, 1) * 0.115 - _0x2faf8b * 0.16;
      _0x373d44 -= _0x59b83f((Math.abs(_0x43a615) - 0.65) / 0.35) * 0.15;
      _0x201659 = _0x25b299(_0x9f1bc7.hazeDark, _0x9f1bc7.hullLight, _0x229322(_0x373d44, 0.08, 0.82));
    } else if (_0x485a7f.kind === "gallery") {
      let _0x2ccd56 = 0.34 + _0x1cf029 + (_0x422a71 - 0.5) * 0.16 + (_0x17361f - 0.5) * 0.1;
      _0x201659 = _0x25b299(_0x9f1bc7.hazeDark, _0x9f1bc7.hullMid, _0x229322(_0x2ccd56, 0.06, 0.68));
    } else {
      const _0x439072 = 0.2 + _0x1cf029 * 0.4 + (_0x17361f - 0.5) * 0.11;
      _0x201659 = _0x25b299(_0x9f1bc7.void, _0x9f1bc7.hazeDark, _0x229322(_0x439072, 0.05, 0.48));
    }
    const _0x192e49 = _0x59b83f((_0xb9bc47 - 0.55) / 0.35) * (0.05 + _0x59b83f((_0x17361f - 0.35) / 0.5) * 0.08);
    _0x201659 = _0x25b299(_0x201659, _0x9f1bc7.ink, _0x192e49);
    const _0x5cdaa0 = _0x1e1f9c(_0x485a7f, _0x41c7ea);
    const _0x12e457 = _0x25b299(_0x9f1bc7.fog, _0x9f1bc7.haze, 0.18 + _0x5cdaa0 * 0.25);
    _0x201659 = _0x25b299(_0x201659, _0x12e457, _0x5cdaa0 * 0.61);
    return _0x32908b(_0x201659);
  });
  for (const _0xe20d4f of _0x2052d7) {
    _0x22d26b.save();
    _0x35ef9b(_0xe20d4f, 0.72);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.78);
    _0x22d26b.lineWidth = 4.2;
    _0x22d26b.stroke();
    _0x35ef9b(_0xe20d4f, -0.72);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullLight, 0.62);
    _0x22d26b.lineWidth = 2.1;
    _0x22d26b.stroke();
    _0x35ef9b(_0xe20d4f, 0.12);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.joint, 0.63);
    _0x22d26b.lineWidth = 1.8;
    _0x22d26b.stroke();
    for (const _0x3f4b1f of [0.16, 0.31, 0.47, 0.63, 0.78]) {
      const _0x5304ff = _0x450ea(_0xe20d4f, _0x3f4b1f);
      const _0x53ec69 = _0xe20d4f.tipX - _0xe20d4f.rootX;
      const _0x3c488b = _0xe20d4f.dy + _0xe20d4f.bend * Math.PI * Math.cos(Math.PI * _0x3f4b1f);
      const _0x2438a0 = Math.hypot(_0x53ec69, _0x3c488b);
      const _0x56bc4a = -_0x3c488b / _0x2438a0;
      const _0x4452eb = _0x53ec69 / _0x2438a0;
      const _0x314e51 = _0x5304ff.width * 0.82;
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x5304ff.x - _0x56bc4a * _0x314e51, _0x5304ff.y - _0x4452eb * _0x314e51);
      _0x22d26b.lineTo(_0x5304ff.x + _0x56bc4a * _0x314e51, _0x5304ff.y + _0x4452eb * _0x314e51);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, (1 - _0x3f4b1f * 0.5) * 0.62);
      _0x22d26b.lineWidth = 2.6;
      _0x22d26b.stroke();
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x5304ff.x - _0x56bc4a * _0x314e51 - 1, _0x5304ff.y - _0x4452eb * _0x314e51 - 1);
      _0x22d26b.lineTo(_0x5304ff.x + _0x56bc4a * _0x314e51 - 1, _0x5304ff.y + _0x4452eb * _0x314e51 - 1);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullLight, (1 - _0x3f4b1f * 0.55) * 0.38);
      _0x22d26b.lineWidth = 1.2;
      _0x22d26b.stroke();
    }
    for (const _0x3ac4ef of [0.21, 0.43, 0.61]) {
      const _0x36bc78 = _0x450ea(_0xe20d4f, _0x3ac4ef, -0.35);
      _0x22d26b.beginPath();
      _0x22d26b.arc(_0x36bc78.x, _0x36bc78.y, 2.1, 0, Math.PI * 2);
      _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.76);
      _0x22d26b.fill();
      _0x22d26b.beginPath();
      _0x22d26b.arc(_0x36bc78.x - 0.55, _0x36bc78.y - 0.55, 0.85, 0, Math.PI * 2);
      _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.hullGlint, 0.63);
      _0x22d26b.fill();
    }
    _0x22d26b.restore();
  }
  for (const _0x1e6298 of _0x412b97) {
    _0x22d26b.save();
    _0x22d26b.translate(_0x1e6298.cx, _0x1e6298.cy);
    _0x22d26b.rotate(_0x1e6298.angle);
    _0x18f482(-_0x1e6298.hw, -_0x1e6298.hh, _0x1e6298.hw * 2, _0x1e6298.hh * 2, _0x1e6298.radius);
    _0x22d26b.clip();
    for (const _0xdfae9e of [-10, 10]) {
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(5 - _0x1e6298.hw, _0xdfae9e + 1.5);
      _0x22d26b.lineTo(_0x1e6298.hw - 5, _0xdfae9e + 1.5);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.73);
      _0x22d26b.lineWidth = 3.4;
      _0x22d26b.stroke();
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(7 - _0x1e6298.hw, _0xdfae9e - 1);
      _0x22d26b.lineTo(_0x1e6298.hw - 7, _0xdfae9e - 1);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullLight, 0.48);
      _0x22d26b.lineWidth = 1.5;
      _0x22d26b.stroke();
    }
    const _0x1cdc50 = 28 + _0x1e6298.index % 3 * 3;
    for (let _0x1f355f = 22 - _0x1e6298.hw; _0x1f355f < _0x1e6298.hw - 15; _0x1f355f += _0x1cdc50) {
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x1f355f + 1.5, 5 - _0x1e6298.hh);
      _0x22d26b.lineTo(_0x1f355f + 1.5, _0x1e6298.hh - 5);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.68);
      _0x22d26b.lineWidth = 2.3;
      _0x22d26b.stroke();
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x1f355f - 0.5, 6 - _0x1e6298.hh);
      _0x22d26b.lineTo(_0x1f355f - 0.5, _0x1e6298.hh - 6);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullLight, 0.34);
      _0x22d26b.lineWidth = 1.1;
      _0x22d26b.stroke();
    }
    _0x22d26b.beginPath();
    _0x22d26b.ellipse(0, 0, _0x1e6298.hw * 0.27, _0x1e6298.hh * 0.36, 0, 0, Math.PI * 2);
    _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.joint, 0.3);
    _0x22d26b.fill();
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.66);
    _0x22d26b.lineWidth = 2.7;
    _0x22d26b.stroke();
    _0x22d26b.beginPath();
    _0x22d26b.ellipse(-1, -1.5, _0x1e6298.hw * 0.23, _0x1e6298.hh * 0.27, 0, Math.PI, Math.PI * 2);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullLight, 0.46);
    _0x22d26b.lineWidth = 1.5;
    _0x22d26b.stroke();
    for (let _0x570b9b = -3; _0x570b9b <= 3; _0x570b9b++) {
      const _0x1ac747 = _0x570b9b * (_0x1e6298.hw * 0.22);
      for (const _0x29a561 of [6 - _0x1e6298.hh, _0x1e6298.hh - 6]) {
        _0x22d26b.beginPath();
        _0x22d26b.arc(_0x1ac747, _0x29a561, 2, 0, Math.PI * 2);
        _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.8);
        _0x22d26b.fill();
        _0x22d26b.beginPath();
        _0x22d26b.arc(_0x1ac747 - 0.55, _0x29a561 - 0.55, 0.78, 0, Math.PI * 2);
        _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.hullGlint, 0.62);
        _0x22d26b.fill();
      }
    }
    _0x22d26b.restore();
    _0x22d26b.save();
    _0x22d26b.translate(_0x1e6298.cx, _0x1e6298.cy);
    _0x22d26b.rotate(_0x1e6298.angle);
    _0x18f482(-_0x1e6298.hw, -_0x1e6298.hh, _0x1e6298.hw * 2, _0x1e6298.hh * 2, _0x1e6298.radius);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.77);
    _0x22d26b.lineWidth = 3;
    _0x22d26b.stroke();
    _0x22d26b.beginPath();
    _0x22d26b.moveTo(-_0x1e6298.hw + _0x1e6298.radius, 2 - _0x1e6298.hh);
    _0x22d26b.lineTo(_0x1e6298.hw - _0x1e6298.radius, 2 - _0x1e6298.hh);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullLight, 0.55);
    _0x22d26b.lineWidth = 2.3;
    _0x22d26b.stroke();
    _0x22d26b.beginPath();
    _0x22d26b.moveTo(-_0x1e6298.hw + _0x1e6298.radius, _0x1e6298.hh - 1.5);
    _0x22d26b.lineTo(_0x1e6298.hw - _0x1e6298.radius, _0x1e6298.hh - 1.5);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.72);
    _0x22d26b.lineWidth = 3.7;
    _0x22d26b.stroke();
    _0x22d26b.restore();
  }
  for (let _0x2ee0e6 = 0; _0x2ee0e6 < _0x412b97.length - 1; _0x2ee0e6++) {
    const _0x349eb9 = _0x412b97[_0x2ee0e6];
    const _0x3c4c8c = _0x412b97[_0x2ee0e6 + 1];
    const _0x392a45 = (_0x349eb9.cy + _0x3c4c8c.cy) * 0.5;
    const _0x21397c = _0x26cef8(_0x392a45);
    const _0x21cde7 = 41 + _0x392a45 * 0.018;
    const _0x54be6b = 6.5 + _0x392a45 * 0.002;
    _0x22d26b.save();
    _0x22d26b.translate(_0x21397c, _0x392a45);
    _0x22d26b.rotate((_0x349eb9.angle + _0x3c4c8c.angle) * 0.5);
    _0x22d26b.beginPath();
    _0x22d26b.ellipse(0, 1.5, _0x21cde7, _0x54be6b, 0, 0, Math.PI * 2);
    _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.76);
    _0x22d26b.fill();
    _0x22d26b.beginPath();
    _0x22d26b.ellipse(-1, -1, _0x21cde7 - 3, Math.max(2, _0x54be6b - 2.5), 0, Math.PI, Math.PI * 2);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hazeLight, 0.32);
    _0x22d26b.lineWidth = 1.6;
    _0x22d26b.stroke();
    _0x22d26b.restore();
  }
  for (const _0x174fe1 of _0x2ad0d6) {
    _0x22d26b.save();
    _0x18f482(_0x174fe1.x + 1, _0x174fe1.y + 9, _0x174fe1.w, _0x174fe1.h - 7, 5);
    _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.63);
    _0x22d26b.fill();
    const _0x4729ed = _0x22d26b.createLinearGradient(_0x174fe1.x, _0x174fe1.y + 5, _0x174fe1.x + _0x174fe1.w, _0x174fe1.y + _0x174fe1.h);
    _0x4729ed.addColorStop(0, _0x10b7a1.rgba(_0x10b9d0.hullLight, 0.74));
    _0x4729ed.addColorStop(0.42, _0x10b7a1.rgba(_0x10b9d0.hazeDark, 0.82));
    _0x4729ed.addColorStop(1, _0x10b7a1.rgba(_0x10b9d0.ink, 0.88));
    _0x18f482(_0x174fe1.x, _0x174fe1.y + 6, _0x174fe1.w, _0x174fe1.h - 7, 5);
    _0x22d26b.fillStyle = _0x4729ed;
    _0x22d26b.fill();
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.9);
    _0x22d26b.lineWidth = 2.4;
    _0x22d26b.stroke();
    _0x22d26b.beginPath();
    _0x22d26b.moveTo(_0x174fe1.x + 5, _0x174fe1.y + 4);
    _0x22d26b.lineTo(_0x174fe1.x + _0x174fe1.w - 5, _0x174fe1.y + 4);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.86);
    _0x22d26b.lineWidth = 3.2;
    _0x22d26b.stroke();
    _0x22d26b.beginPath();
    _0x22d26b.moveTo(_0x174fe1.x + 6, _0x174fe1.y + 2.5);
    _0x22d26b.lineTo(_0x174fe1.x + _0x174fe1.w - 6, _0x174fe1.y + 2.5);
    _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullGlint, 0.68);
    _0x22d26b.lineWidth = 1.6;
    _0x22d26b.stroke();
    for (let _0x37535b = _0x174fe1.x + 10; _0x37535b < _0x174fe1.x + _0x174fe1.w - 8; _0x37535b += 13) {
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x37535b, _0x174fe1.y + 3);
      _0x22d26b.lineTo(_0x37535b, _0x174fe1.y + 9);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullLight, 0.54);
      _0x22d26b.lineWidth = 1.5;
      _0x22d26b.stroke();
    }
    for (let _0x42da2f = _0x174fe1.x + 22; _0x42da2f < _0x174fe1.x + _0x174fe1.w - 14; _0x42da2f += 27) {
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x42da2f - 5, _0x174fe1.y + _0x174fe1.h - 3);
      _0x22d26b.lineTo(_0x42da2f, _0x174fe1.y + _0x174fe1.h - 10);
      _0x22d26b.lineTo(_0x42da2f + 6, _0x174fe1.y + _0x174fe1.h - 3);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.82);
      _0x22d26b.lineWidth = 2.4;
      _0x22d26b.stroke();
    }
    _0x22d26b.restore();
  }
  _0x10b7a1.field((_0x1f4fcb, _0x4bc594) => {
    const _0x4d8ca5 = _0x5e8a54(_0x1f4fcb + 0.5, _0x4bc594 + 0.5);
    if (_0x4d8ca5.d > 0) {
      return null;
    }
    let _0x5eb5c3 = 0;
    if (_0x4d8ca5.kind === "joint") {
      _0x5eb5c3 += 44;
    } else if (_0x4d8ca5.kind === "drum") {
      const _0x34b195 = Math.abs(_0x4d8ca5.localY / _0x4d8ca5.segment.hh);
      const _0x509a7c = Math.abs(_0x4d8ca5.localX / _0x4d8ca5.segment.hw);
      _0x5eb5c3 += _0x59b83f((_0x34b195 - 0.68) / 0.32) * 39;
      _0x5eb5c3 += _0x59b83f((_0x509a7c - 0.82) / 0.18) * 18;
    } else if (_0x4d8ca5.kind === "rib") {
      const _0x144aac = (_0x4bc594 + 0.5 - _0x4d8ca5.ribY) / Math.max(1, _0x4d8ca5.ribWidth * _0x4d8ca5.ribNorm);
      _0x5eb5c3 += _0x59b83f((_0x144aac + 0.05) / 0.95) * 31;
      _0x5eb5c3 += (1 - _0x59b83f(_0x4d8ca5.ribT / 0.17)) * 37;
    } else if (_0x4d8ca5.kind === "gallery") {
      const _0x531d1b = _0x4d8ca5.gallery;
      _0x5eb5c3 += _0x59b83f(((_0x4bc594 + 0.5 - _0x531d1b.y) / _0x531d1b.h - 0.53) / 0.47) * 34;
    }
    const _0x3c44d6 = _0x10b7a1.ridge(_0x1f4fcb * 0.71, _0x4bc594 * 0.024, {
      octaves: 3,
      gain: 0.54,
      lacunarity: 2,
      period: 257,
      seed: meta.seed + 83
    });
    const _0x100302 = _0x10b7a1.noise(_0x1f4fcb * 0.083, _0x4bc594 * 0.061, {
      period: 223,
      seed: meta.seed + 101
    });
    _0x5eb5c3 += _0x59b83f((_0x3c44d6 - 0.58) / 0.32) * 55 * _0x59b83f((_0x100302 - 0.31) / 0.56);
    if (_0x5eb5c3 < 1) {
      return null;
    } else {
      return _0x32908b(_0x9f1bc7.ink, Math.min(105, _0x5eb5c3));
    }
  }, {
    blend: "over"
  });
  for (const _0x102212 of _0x2052d7) {
    const _0x41f745 = _0x22d26b.createRadialGradient(_0x102212.rootX - 2, _0x102212.rootY + 4, 2, _0x102212.rootX, _0x102212.rootY + 4, _0x102212.rootWidth * 1.65);
    _0x41f745.addColorStop(0, _0x10b7a1.rgba(_0x10b9d0.void, 0.72));
    _0x41f745.addColorStop(0.55, _0x10b7a1.rgba(_0x10b9d0.ink, 0.38));
    _0x41f745.addColorStop(1, _0x10b7a1.rgba(_0x10b9d0.ink, 0));
    _0x22d26b.beginPath();
    _0x22d26b.ellipse(_0x102212.rootX, _0x102212.rootY + 3, _0x102212.rootWidth * 1.55, _0x102212.rootWidth * 1.1, 0, 0, Math.PI * 2);
    _0x22d26b.fillStyle = _0x41f745;
    _0x22d26b.fill();
  }
  const _0x266a46 = _0x10b7a1.stream("surface-wear");
  for (const _0x459739 of _0x412b97) {
    _0x22d26b.save();
    _0x22d26b.translate(_0x459739.cx, _0x459739.cy);
    _0x22d26b.rotate(_0x459739.angle);
    for (let _0x2811e8 = 0; _0x2811e8 < 6; _0x2811e8++) {
      const _0x46532b = (_0x266a46() * 2 - 1) * (_0x459739.hw - 15);
      const _0x20fa98 = (_0x266a46() * 2 - 1) * (_0x459739.hh - 8);
      const _0x21b6ec = 5 + _0x266a46() * 13;
      const _0x1f96ae = 1 + _0x266a46() * 4;
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x46532b + 1.5, _0x20fa98 + 2);
      _0x22d26b.lineTo(_0x46532b + _0x21b6ec + 1.5, _0x20fa98 + _0x1f96ae + 2);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.46);
      _0x22d26b.lineWidth = 2.1;
      _0x22d26b.stroke();
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x46532b, _0x20fa98);
      _0x22d26b.lineTo(_0x46532b + _0x21b6ec, _0x20fa98 + _0x1f96ae);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullGlint, 0.34);
      _0x22d26b.lineWidth = 1.6;
      _0x22d26b.stroke();
    }
    for (const _0x14c701 of [-1, 1]) {
      const _0x29debe = _0x14c701 * (_0x459739.hw - 7);
      const _0x2bfbbc = 7 - _0x459739.hh + _0x266a46() * 8;
      _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.7);
      _0x22d26b.fillRect(_0x29debe - 2, _0x2bfbbc + 2, 5, 3);
      _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.hullGlint, 0.53);
      _0x22d26b.fillRect(_0x29debe - 3, _0x2bfbbc, 4, 2);
    }
    _0x22d26b.restore();
  }
  for (const _0x562276 of _0x2052d7) {
    for (let _0x49ec71 = 0; _0x49ec71 < 3; _0x49ec71++) {
      const _0x1ef32e = _0x450ea(_0x562276, 0.09 + _0x266a46() * 0.56, -0.48);
      const _0x1655d4 = _0x562276.side * (4 + _0x266a46() * 7);
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x1ef32e.x + 1, _0x1ef32e.y + 2);
      _0x22d26b.lineTo(_0x1ef32e.x + _0x1655d4 + 1, _0x1ef32e.y + 3);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.48);
      _0x22d26b.lineWidth = 2;
      _0x22d26b.stroke();
      _0x22d26b.beginPath();
      _0x22d26b.moveTo(_0x1ef32e.x, _0x1ef32e.y);
      _0x22d26b.lineTo(_0x1ef32e.x + _0x1655d4, _0x1ef32e.y + 1);
      _0x22d26b.strokeStyle = _0x10b7a1.rgba(_0x10b9d0.hullGlint, 0.38);
      _0x22d26b.lineWidth = 1.5;
      _0x22d26b.stroke();
    }
  }
  for (const _0x18a98a of _0x2ad0d6) {
    const _0x499d4e = (_0x18a98a.w - 18) / _0x18a98a.count;
    const _0x44fa00 = _0x18a98a.y + 13;
    for (let _0x3c4d70 = 0; _0x3c4d70 < _0x18a98a.count; _0x3c4d70++) {
      const _0xa74e7f = _0x18a98a.x + 9 + _0x3c4d70 * _0x499d4e + (_0x499d4e - 4) * 0.5;
      if (_0x3c4d70 === 2 || _0x3c4d70 === 5) {
        const _0x374ae0 = _0x22d26b.createRadialGradient(_0xa74e7f + 2, _0x44fa00 + 1.5, 1, _0xa74e7f + 2, _0x44fa00 + 1.5, 8);
        _0x374ae0.addColorStop(0, _0x10b7a1.rgba(_0x10b9d0.warmDim, 0.25));
        _0x374ae0.addColorStop(1, _0x10b7a1.rgba(_0x10b9d0.warmDim, 0));
        _0x22d26b.beginPath();
        _0x22d26b.arc(_0xa74e7f + 2, _0x44fa00 + 1.5, 8, 0, Math.PI * 2);
        _0x22d26b.fillStyle = _0x374ae0;
        _0x22d26b.fill();
      }
      _0x18f482(_0xa74e7f - 1.5, _0x44fa00 - 1.5, 7, 6, 1.5);
      _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.void, 0.92);
      _0x22d26b.fill();
      _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.warmDim, 0.91);
      _0x22d26b.fillRect(_0xa74e7f, _0x44fa00, 4, 3);
      _0x22d26b.fillStyle = _0x10b7a1.rgba(_0x10b9d0.warm, 0.82);
      _0x22d26b.fillRect(_0xa74e7f, _0x44fa00, 2, 1);
    }
  }
  _0x10b7a1.field((_0x46b8b8, _0x9752f1) => {
    const _0x5bdb02 = _0x5e8a54(_0x46b8b8 + 0.5, _0x9752f1 + 0.5);
    if (_0x5bdb02.d > 0) {
      return null;
    }
    const _0x1dfdd4 = _0x1e1f9c(_0x5bdb02, _0x9752f1);
    if (_0x1dfdd4 < 0.015) {
      return null;
    }
    const _0x1b9037 = _0x25b299(_0x9f1bc7.fogDeep, _0x9f1bc7.haze, 0.34 + _0x1dfdd4 * 0.28);
    return _0x32908b(_0x1b9037, _0x1dfdd4 * 122);
  }, {
    blend: "over"
  });
  _0x10b7a1.mask((_0x887317, _0xd39a0d) => {
    const _0x364102 = _0x5e8a54(_0x887317 + 0.5, _0xd39a0d + 0.5);
    if (_0x364102.d >= 0) {
      return 0;
    }
    const _0x3c52b6 = _0x59b83f(-_0x364102.d / 3.35);
    const _0x408ef2 = _0x229322((_0xd39a0d - 5) / 140);
    let _0x177f00 = _0x59b83f(_0x408ef2);
    if (_0x408ef2 > 0 && _0x408ef2 < 1) {
      const _0x12146a = (_0x10b7a1.noise(_0x887317 * 13.17, _0xd39a0d * 17.91, {
        period: 257,
        seed: meta.seed + 907
      }) - 0.5) * (2.8 / 255);
      _0x177f00 = _0x229322(_0x177f00 + _0x12146a);
    }
    let _0x1978d5 = 1;
    if (_0x364102.kind === "rib") {
      const _0x3d3bec = _0x229322((_0x364102.ribT - 0.55) / 0.43);
      _0x1978d5 = 1 - _0x59b83f(_0x3d3bec);
      if (_0x3d3bec > 0 && _0x3d3bec < 1) {
        const _0x25b62b = (_0x10b7a1.noise(_0x887317 * 19.23, _0xd39a0d * 11.71, {
          period: 251,
          seed: meta.seed + 953
        }) - 0.5) * (2.4 / 255);
        _0x1978d5 = _0x229322(_0x1978d5 + _0x25b62b);
      }
      if (_0x364102.ribT >= 0.98) {
        _0x1978d5 = 0;
      }
    }
    return _0x3c52b6 * _0x177f00 * _0x1978d5;
  });
}