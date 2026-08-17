export const meta = {
  id: "backdrop-limb-segment",
  size: {
    w: 1024,
    h: 512
  },
  seed: 803450,
  roles: ["deep-teal", "haze", "ink", "hull", "rust-orange", "warm-white"]
};
export function render(_0x51618b, _0x155292) {
  const _0x3b38cc = _0x155292.PALETTE;
  const _0x974dae = _0x3b38cc["deep-teal"];
  const _0xf63a0b = _0x3b38cc.haze;
  const _0x4fed98 = _0x3b38cc.ink;
  const _0x1add85 = _0x3b38cc.hull;
  const _0x1dc312 = _0x3b38cc["rust-orange"];
  const _0x494205 = _0x3b38cc["warm-white"];
  const _0x4892ef = _0x155292.mix(_0x4fed98, _0x974dae, 0.22);
  const _0x1958d1 = _0x155292.mix(_0x155292.shade(_0x1dc312, -0.28), _0x4fed98, 0.32);
  const _0x1152ae = _0x155292.mix(_0x155292.shade(_0x1dc312, 0.08), _0x1add85, 0.42);
  const _0x2d0053 = _0x155292.mix(_0xf63a0b, _0x1add85, 0.12);
  const _0x57e6bf = _0x155292.mix(_0xf63a0b, _0x1add85, 0.44);
  const _0x508a5e = _0x155292.mix(_0x1dc312, _0x1add85, 0.32);
  const _0x12e161 = _0x155292.mix(_0x155292.shade(_0x1dc312, -0.12), _0xf63a0b, 0.4);
  const _0xacb81c = _0x155292.mix(_0x1add85, _0xf63a0b, 0.25);
  const _0x2ef32 = _0x155292.mix(_0x155292.shade(_0x1dc312, 0.12), _0x1add85, 0.58);
  const _0xa3656f = _0x155292.shade(_0x1dc312, -0.08);
  const _0x14efa5 = _0x155292.mix(_0x494205, _0x1add85, 0.08);
  const _0x1742af = -0.407;
  const _0x5d123b = Math.cos(_0x1742af);
  const _0x29ec46 = Math.sin(_0x1742af);
  const _0x5478e0 = [155, 320, 485, 650, 815, 975, 1110];
  const _0x208d55 = [205, 375, 545, 715, 885];
  const _0x459490 = _0x40855d => _0x155292.hexToRgb(_0x40855d);
  const _0x1cdd3e = _0x459490(_0x1958d1);
  const _0x3d9a31 = _0x459490(_0x1152ae);
  const _0x51ffd8 = _0x459490(_0x2d0053);
  const _0x1dd292 = _0x459490(_0x57e6bf);
  const _0xa89dae = _0x459490(_0x4892ef);
  function _0x3bddf3(_0x9e200f, _0x1c1462, _0x390d05) {
    return {
      r: _0x155292.lerp(_0x9e200f.r, _0x1c1462.r, _0x390d05),
      g: _0x155292.lerp(_0x9e200f.g, _0x1c1462.g, _0x390d05),
      b: _0x155292.lerp(_0x9e200f.b, _0x1c1462.b, _0x390d05)
    };
  }
  function _0x147aa8(_0x2b9a72, _0x4cb98f) {
    const _0x214da6 = _0x2b9a72 - -96;
    const _0xb43495 = _0x4cb98f - 461;
    return {
      s: _0x214da6 * _0x5d123b + _0xb43495 * _0x29ec46,
      q: -_0x214da6 * _0x29ec46 + _0xb43495 * _0x5d123b
    };
  }
  function _0x505b0a(_0x138f1c) {
    const _0x2debcc = _0x155292.clamp(_0x138f1c / 1200, 0, 1);
    const _0x560dc1 = function (_0x4328bc) {
      let _0x5a026e = 0;
      for (let _0x39bb8e = 0; _0x39bb8e < _0x5478e0.length; _0x39bb8e += 1) {
        const _0x509631 = Math.abs(_0x4328bc - _0x5478e0[_0x39bb8e]);
        if (_0x509631 < 30) {
          const _0xb2378d = 1 - _0x509631 / 30;
          _0x5a026e += _0xb2378d * _0xb2378d * (3 - _0xb2378d * 2) * 10;
        }
      }
      return _0x5a026e;
    }(_0x138f1c);
    return {
      top: 106 - _0x2debcc * 38 + _0x560dc1 * 0.55,
      bottom: 94 - _0x2debcc * 31 + _0x560dc1
    };
  }
  function _0x596a92(_0x4b48e0, _0x14235b, _0x496006 = 0) {
    const _0x4cae16 = _0x505b0a(_0x4b48e0);
    return -_0x4cae16.top + (_0x4cae16.top + _0x4cae16.bottom) * _0x14235b + _0x496006;
  }
  function _0x137dc9(_0x573228, _0x47b0a0) {
    const _0x4c553f = _0x505b0a(_0x573228);
    const _0x27e524 = (_0x573228 - 25 + _0x47b0a0 * 13) % 165 / 165;
    const _0x321c6b = Math.sin(Math.PI * _0x27e524) ** 2 * 12;
    return _0x4c553f.bottom + 14 + _0x47b0a0 * 9 + _0x321c6b;
  }
  function _0x55f73f(_0x1aaafc, _0x40a6bb, _0xfc7e4c = 0) {
    const _0x302d10 = _0x505b0a(_0x1aaafc);
    const _0x13bdfa = _0x505b0a(_0x40a6bb);
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x1aaafc, -_0x302d10.top + _0xfc7e4c);
    _0x51618b.lineTo(_0x40a6bb, -_0x13bdfa.top + _0xfc7e4c);
    _0x51618b.lineTo(_0x40a6bb, _0x13bdfa.bottom - _0xfc7e4c);
    _0x51618b.lineTo(_0x1aaafc, _0x302d10.bottom - _0xfc7e4c);
    _0x51618b.closePath();
  }
  function _0x317ee8(_0x4eecc7, _0x3e6382 = 0) {
    const _0x506638 = _0x505b0a(_0x4eecc7);
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x4eecc7, -_0x506638.top + _0x3e6382);
    _0x51618b.lineTo(_0x4eecc7, _0x506638.bottom - _0x3e6382);
  }
  function _0x18e1df(_0x29ff73, _0x4a6f8b = 0, _0x394540 = -25, _0xf19eae = 1215) {
    _0x51618b.beginPath();
    for (let _0x175149 = _0x394540; _0x175149 <= _0xf19eae; _0x175149 += 14) {
      const _0x351b15 = _0x596a92(_0x175149, _0x29ff73, _0x4a6f8b);
      if (_0x175149 === _0x394540) {
        _0x51618b.moveTo(_0x175149, _0x351b15);
      } else {
        _0x51618b.lineTo(_0x175149, _0x351b15);
      }
    }
  }
  function _0x380135(_0xce2f45, _0x1c5d26, _0x1ad234 = -25, _0x54892f = 1215) {
    _0x51618b.beginPath();
    for (let _0x19bd59 = _0x1ad234; _0x19bd59 <= _0x54892f; _0x19bd59 += 12) {
      const _0x47691a = _0x505b0a(_0x19bd59);
      const _0x59f705 = _0xce2f45 === "top" ? -_0x47691a.top + _0x1c5d26 : _0x47691a.bottom - _0x1c5d26;
      if (_0x19bd59 === _0x1ad234) {
        _0x51618b.moveTo(_0x19bd59, _0x59f705);
      } else {
        _0x51618b.lineTo(_0x19bd59, _0x59f705);
      }
    }
  }
  function _0x53afc8(_0x228e71, _0x299501, _0x521b4b, _0x2e6124, _0x2e73ed) {
    const _0x24670c = Math.min(_0x2e73ed, _0x521b4b * 0.5, _0x2e6124 * 0.5);
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x228e71 + _0x24670c, _0x299501);
    _0x51618b.lineTo(_0x228e71 + _0x521b4b - _0x24670c, _0x299501);
    _0x51618b.quadraticCurveTo(_0x228e71 + _0x521b4b, _0x299501, _0x228e71 + _0x521b4b, _0x299501 + _0x24670c);
    _0x51618b.lineTo(_0x228e71 + _0x521b4b, _0x299501 + _0x2e6124 - _0x24670c);
    _0x51618b.quadraticCurveTo(_0x228e71 + _0x521b4b, _0x299501 + _0x2e6124, _0x228e71 + _0x521b4b - _0x24670c, _0x299501 + _0x2e6124);
    _0x51618b.lineTo(_0x228e71 + _0x24670c, _0x299501 + _0x2e6124);
    _0x51618b.quadraticCurveTo(_0x228e71, _0x299501 + _0x2e6124, _0x228e71, _0x299501 + _0x2e6124 - _0x24670c);
    _0x51618b.lineTo(_0x228e71, _0x299501 + _0x24670c);
    _0x51618b.quadraticCurveTo(_0x228e71, _0x299501, _0x228e71 + _0x24670c, _0x299501);
    _0x51618b.closePath();
  }
  function _0x40cd96(_0x106839) {
    _0x51618b.beginPath();
    for (let _0x1e2a53 = 25; _0x1e2a53 <= 985; _0x1e2a53 += 9) {
      const _0x279e82 = _0x137dc9(_0x1e2a53, _0x106839);
      if (_0x1e2a53 === 25) {
        _0x51618b.moveTo(_0x1e2a53, _0x279e82);
      } else {
        _0x51618b.lineTo(_0x1e2a53, _0x279e82);
      }
    }
  }
  _0x155292.field((_0x47c475, _0x4492e4) => {
    const _0x5eb4aa = _0x147aa8(_0x47c475, _0x4492e4);
    const _0x49853e = _0x5eb4aa.s;
    const _0x33d277 = _0x5eb4aa.q;
    if (_0x49853e < -50 || _0x49853e > 1225) {
      return null;
    }
    const _0x16fe53 = _0x505b0a(_0x49853e);
    if (_0x33d277 < -_0x16fe53.top - 4 || _0x33d277 > _0x16fe53.bottom + 4) {
      return null;
    }
    const _0x48fce4 = _0x155292.clamp((_0x33d277 + _0x16fe53.top) / (_0x16fe53.top + _0x16fe53.bottom), 0, 1);
    let _0x1b6bc4;
    _0x1b6bc4 = _0x48fce4 < 0.18 ? 0.84 : _0x48fce4 < 0.56 ? 0.62 : _0x48fce4 < 0.82 ? 0.42 : 0.25;
    const _0x57e7f0 = _0x155292.fbm(_0x49853e * 0.22, _0x33d277 * 2.6, {
      octaves: 3,
      gain: 0.5,
      lacunarity: 2,
      period: 190,
      seed: 803461
    });
    const _0x40e4ff = _0x155292.fbm(_0x49853e, _0x33d277, {
      octaves: 3,
      gain: 0.54,
      lacunarity: 2,
      period: 118,
      seed: 803467
    });
    const _0x1c696d = _0x155292.noise(_0x49853e * 1.7, _0x33d277 * 3.9, {
      period: 53,
      seed: 803471
    });
    const _0x33f0df = (1 - _0x155292.clamp(_0x49853e / 880, 0, 1)) * 0.07;
    const _0x4a9acf = _0x155292.clamp(_0x1b6bc4 + _0x33f0df + (_0x57e7f0 - 0.5) * 0.15 + (_0x40e4ff - 0.5) * 0.1 + (_0x1c696d - 0.5) * 0.035, 0, 1);
    const _0x4a3e96 = _0x155292.smoothstep(_0x155292.clamp((_0x49853e - 760) / 430, 0, 1));
    const _0xaa65 = _0x3bddf3(_0x1cdd3e, _0x51ffd8, _0x4a3e96);
    const _0x7c176d = _0x3bddf3(_0x3d9a31, _0x1dd292, _0x4a3e96);
    const _0x573778 = _0x3bddf3(_0xaa65, _0x7c176d, _0x4a9acf);
    return [Math.round(_0x573778.r), Math.round(_0x573778.g), Math.round(_0x573778.b), 255];
  });
  _0x155292.field((_0x25abf7, _0x4f5d21) => {
    const _0x599546 = _0x147aa8(_0x25abf7, _0x4f5d21);
    const _0x2a079b = _0x599546.s;
    const _0x209fb4 = _0x599546.q;
    if (_0x2a079b < -45 || _0x2a079b > 1220) {
      return null;
    }
    const _0xbc5492 = _0x505b0a(_0x2a079b);
    if (_0x209fb4 < -_0xbc5492.top || _0x209fb4 > _0xbc5492.bottom) {
      return null;
    }
    let _0x58ccb0 = 1000;
    for (let _0x4b98f3 = 0; _0x4b98f3 < _0x5478e0.length; _0x4b98f3 += 1) {
      _0x58ccb0 = Math.min(_0x58ccb0, Math.abs(_0x2a079b - _0x5478e0[_0x4b98f3]));
    }
    const _0x571de8 = _0x155292.smoothstep(_0x155292.clamp((24 - _0x58ccb0) / 24, 0, 1));
    const _0x2513b4 = _0x155292.smoothstep(_0x155292.clamp((_0x209fb4 - (_0xbc5492.bottom - 38)) / 38, 0, 1));
    const _0x352dd7 = Math.abs(_0x209fb4 - _0x596a92(_0x2a079b, 0.34));
    const _0x4a3fab = Math.abs(_0x209fb4 - _0x596a92(_0x2a079b, 0.7));
    const _0x125be0 = Math.max(_0x155292.clamp((6 - _0x352dd7) / 6, 0, 1), _0x155292.clamp((6 - _0x4a3fab) / 6, 0, 1));
    const _0x54a409 = Math.max(_0x571de8 * 0.58, _0x2513b4 * 0.35, _0x125be0 * 0.26);
    if (_0x54a409 < 0.01) {
      return null;
    } else {
      return [_0xa89dae.r, _0xa89dae.g, _0xa89dae.b, Math.round(_0x54a409 * 255)];
    }
  }, {
    blend: "over"
  });
  _0x51618b.save();
  _0x51618b.translate(-96, 461);
  _0x51618b.rotate(_0x1742af);
  _0x51618b.lineJoin = "round";
  _0x51618b.lineCap = "round";
  _0x51618b.shadowColor = _0x155292.rgba(_0x4fed98, 0.34);
  _0x51618b.shadowBlur = 3;
  _0x51618b.shadowOffsetY = 2;
  for (let _0x212c01 = 0; _0x212c01 < _0x208d55.length; _0x212c01 += 1) {
    const _0x2b2377 = _0x208d55[_0x212c01];
    const _0xa7ed1e = _0x505b0a(_0x2b2377).bottom - 4;
    const _0x45cd69 = _0x137dc9(_0x2b2377, 3) + 3;
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x2b2377, _0xa7ed1e);
    _0x51618b.lineTo(_0x2b2377, _0x45cd69);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.68);
    _0x51618b.lineWidth = 12;
    _0x51618b.stroke();
    _0x51618b.strokeStyle = _0x155292.rgba(_0x12e161, 0.82);
    _0x51618b.lineWidth = 6;
    _0x51618b.stroke();
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x2b2377 - 1.5, _0xa7ed1e);
    _0x51618b.lineTo(_0x2b2377 - 1.5, _0x45cd69);
    _0x51618b.strokeStyle = _0x155292.rgba(_0xacb81c, 0.42);
    _0x51618b.lineWidth = 2;
    _0x51618b.stroke();
    for (const _0x94b2ec of [_0xa7ed1e, _0x45cd69]) {
      _0x51618b.beginPath();
      _0x51618b.ellipse(_0x2b2377, _0x94b2ec, 7, 7, 0, 0, Math.PI * 2);
      _0x51618b.fillStyle = _0x155292.rgba(_0x4fed98, 0.88);
      _0x51618b.fill();
      _0x51618b.beginPath();
      _0x51618b.ellipse(_0x2b2377 - 1.2, _0x94b2ec - 1.2, 3.2, 3.2, 0, 0, Math.PI * 2);
      _0x51618b.fillStyle = _0x155292.rgba(_0x2ef32, 0.68);
      _0x51618b.fill();
    }
  }
  for (let _0x3bafcc = 0; _0x3bafcc < 4; _0x3bafcc += 1) {
    _0x40cd96(_0x3bafcc);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.22);
    _0x51618b.lineWidth = 15;
    _0x51618b.stroke();
    _0x40cd96(_0x3bafcc);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x4892ef, 0.92);
    _0x51618b.lineWidth = 9;
    _0x51618b.stroke();
    _0x40cd96(_0x3bafcc);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x12e161, 0.8);
    _0x51618b.lineWidth = 5;
    _0x51618b.stroke();
    _0x40cd96(_0x3bafcc);
    _0x51618b.strokeStyle = _0x155292.rgba(_0xacb81c, 0.34);
    _0x51618b.lineWidth = 1.8;
    _0x51618b.stroke();
  }
  _0x51618b.shadowBlur = 0;
  _0x51618b.shadowOffsetY = 0;
  const _0x432361 = _0x155292.stream("panel-patches");
  for (let _0x126588 = 0; _0x126588 < 17; _0x126588 += 1) {
    const _0x62bd10 = 55 + _0x432361() * 995;
    const _0x24657c = _0x505b0a(_0x62bd10);
    const _0x2c2a68 = 1 - _0x155292.clamp(_0x62bd10 / 1200, 0, 1) * 0.34;
    const _0x3d8587 = (40 + _0x432361() * 66) * _0x2c2a68;
    const _0xefe02b = (18 + _0x432361() * 30) * _0x2c2a68;
    const _0x29a98c = 20 - _0x24657c.top + _0x432361() * Math.max(16, _0x24657c.top + _0x24657c.bottom - _0xefe02b - 40);
    const _0x4a68c1 = (_0x432361() - 0.5) * 8;
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x62bd10, _0x29a98c);
    _0x51618b.lineTo(_0x62bd10 + _0x3d8587, _0x29a98c + _0x4a68c1 * 0.15);
    _0x51618b.lineTo(_0x62bd10 + _0x3d8587 - 3, _0x29a98c + _0xefe02b + _0x4a68c1 * 0.15);
    _0x51618b.lineTo(_0x62bd10 + 3, _0x29a98c + _0xefe02b);
    _0x51618b.closePath();
    _0x51618b.fillStyle = _0x155292.rgba(_0x508a5e, 0.08);
    _0x51618b.fill();
    _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.3);
    _0x51618b.lineWidth = 2.6;
    _0x51618b.stroke();
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x62bd10 + 3, _0x29a98c + 1);
    _0x51618b.lineTo(_0x62bd10 + _0x3d8587 - 3, _0x29a98c + 1 + _0x4a68c1 * 0.15);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x2ef32, 0.38);
    _0x51618b.lineWidth = 1.7;
    _0x51618b.stroke();
  }
  for (const _0x137d9a of [0.34, 0.7]) {
    _0x18e1df(_0x137d9a);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.62);
    _0x51618b.lineWidth = 5;
    _0x51618b.stroke();
    _0x18e1df(_0x137d9a, -3);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x2ef32, 0.46);
    _0x51618b.lineWidth = 2;
    _0x51618b.stroke();
  }
  _0x380135("top", 2);
  _0x51618b.strokeStyle = _0x155292.rgba(_0x2ef32, 0.68);
  _0x51618b.lineWidth = 3;
  _0x51618b.stroke();
  _0x380135("bottom", 2);
  _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.76);
  _0x51618b.lineWidth = 7;
  _0x51618b.stroke();
  _0x380135("bottom", 6);
  _0x51618b.strokeStyle = _0x155292.rgba(_0x12e161, 0.42);
  _0x51618b.lineWidth = 2.5;
  _0x51618b.stroke();
  for (let _0x18ada8 = 0; _0x18ada8 < _0x5478e0.length; _0x18ada8 += 1) {
    const _0xf5a221 = _0x5478e0[_0x18ada8];
    _0x55f73f(_0xf5a221 - 24, _0xf5a221 + 25, 1);
    _0x51618b.fillStyle = _0x155292.rgba(_0x4fed98, 0.18);
    _0x51618b.fill();
    _0x55f73f(_0xf5a221 - 19, _0xf5a221 - 8, 2);
    _0x51618b.fillStyle = _0x155292.rgba(_0x508a5e, 0.3);
    _0x51618b.fill();
    _0x55f73f(_0xf5a221 - 8, _0xf5a221 + 9, 1);
    _0x51618b.fillStyle = _0x155292.rgba(_0x4892ef, 0.92);
    _0x51618b.fill();
    _0x55f73f(_0xf5a221 + 9, _0xf5a221 + 19, 2);
    _0x51618b.fillStyle = _0x155292.rgba(_0x155292.mix(_0x1dc312, _0xf63a0b, 0.46), 0.24);
    _0x51618b.fill();
    _0x317ee8(_0xf5a221 - 10, 4);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x2ef32, 0.72);
    _0x51618b.lineWidth = 4;
    _0x51618b.stroke();
    _0x317ee8(_0xf5a221 + 11, 3);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.82);
    _0x51618b.lineWidth = 6;
    _0x51618b.stroke();
    _0x317ee8(_0xf5a221 + 16, 6);
    _0x51618b.strokeStyle = _0x155292.rgba(_0xa3656f, 0.34);
    _0x51618b.lineWidth = 2;
    _0x51618b.stroke();
    const _0x1dddbb = _0x505b0a(_0xf5a221);
    for (let _0x24363e = 18 - _0x1dddbb.top; _0x24363e < _0x1dddbb.bottom - 12; _0x24363e += 27) {
      _0x51618b.beginPath();
      _0x51618b.ellipse(_0xf5a221 - 15, _0x24363e, 4, 4, 0, 0, Math.PI * 2);
      _0x51618b.fillStyle = _0x155292.rgba(_0x4fed98, 0.86);
      _0x51618b.fill();
      _0x51618b.beginPath();
      _0x51618b.ellipse(_0xf5a221 - 16, _0x24363e - 1, 1.8, 1.8, 0, 0, Math.PI * 2);
      _0x51618b.fillStyle = _0x155292.rgba(_0x2ef32, 0.7);
      _0x51618b.fill();
    }
  }
  function _0x80543f(_0x1ee6e5, _0x17d059, _0x37a65d) {
    _0x53afc8(_0x1ee6e5 - _0x37a65d * 7, _0x17d059 - _0x37a65d * 8, _0x37a65d * 64, _0x37a65d * 42, _0x37a65d * 5);
    _0x51618b.fillStyle = _0x155292.rgba(_0x4fed98, 0.34);
    _0x51618b.fill();
    _0x51618b.strokeStyle = _0x155292.rgba(_0x2ef32, 0.32);
    _0x51618b.lineWidth = _0x37a65d * 2;
    _0x51618b.stroke();
    for (let _0x6905e5 = 0; _0x6905e5 < 5; _0x6905e5 += 1) {
      const _0x20f0bb = _0x17d059 - _0x37a65d * 1 + _0x6905e5 * 7 * _0x37a65d;
      _0x51618b.beginPath();
      _0x51618b.moveTo(_0x1ee6e5, _0x20f0bb);
      _0x51618b.lineTo(_0x1ee6e5 + _0x37a65d * 43, _0x20f0bb);
      _0x51618b.strokeStyle = _0x155292.rgba(_0x4892ef, 0.86);
      _0x51618b.lineWidth = _0x37a65d * 4.5;
      _0x51618b.stroke();
      _0x51618b.beginPath();
      _0x51618b.moveTo(_0x1ee6e5, _0x20f0bb - _0x37a65d * 2.2);
      _0x51618b.lineTo(_0x1ee6e5 + _0x37a65d * 43, _0x20f0bb - _0x37a65d * 2.2);
      _0x51618b.strokeStyle = _0x155292.rgba(_0xacb81c, 0.32);
      _0x51618b.lineWidth = _0x37a65d * 1.4;
      _0x51618b.stroke();
    }
  }
  _0x80543f(535, 8, 0.86);
  _0x80543f(850, -4, 0.7);
  _0x53afc8(211, -45, 64, 48, 8);
  _0x51618b.fillStyle = _0x155292.rgba(_0x4fed98, 0.82);
  _0x51618b.fill();
  _0x53afc8(215, -49, 57, 43, 7);
  _0x51618b.fillStyle = _0x155292.rgba(_0x508a5e, 0.9);
  _0x51618b.fill();
  _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.8);
  _0x51618b.lineWidth = 4;
  _0x51618b.stroke();
  _0x51618b.beginPath();
  _0x51618b.moveTo(222, -47);
  _0x51618b.lineTo(264, -47);
  _0x51618b.quadraticCurveTo(270, -47, 270, -40);
  _0x51618b.strokeStyle = _0x155292.rgba(_0x2ef32, 0.76);
  _0x51618b.lineWidth = 3;
  _0x51618b.stroke();
  _0x51618b.beginPath();
  _0x51618b.moveTo(270, -40);
  _0x51618b.lineTo(270, -13);
  _0x51618b.quadraticCurveTo(270, -8, 264, -8);
  _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.76);
  _0x51618b.lineWidth = 4;
  _0x51618b.stroke();
  for (const _0x359bce of [[222, -40], [263, -40], [222, -15], [263, -15]]) {
    _0x51618b.beginPath();
    _0x51618b.ellipse(_0x359bce[0], _0x359bce[1], 3.2, 3.2, 0, 0, Math.PI * 2);
    _0x51618b.fillStyle = _0x155292.rgba(_0x4fed98, 0.9);
    _0x51618b.fill();
    _0x51618b.beginPath();
    _0x51618b.ellipse(_0x359bce[0] - 0.8, _0x359bce[1] - 0.8, 1.3, 1.3, 0, 0, Math.PI * 2);
    _0x51618b.fillStyle = _0x155292.rgba(_0x2ef32, 0.75);
    _0x51618b.fill();
  }
  _0x51618b.beginPath();
  _0x51618b.moveTo(239, -27);
  _0x51618b.quadraticCurveTo(246, -34, 253, -27);
  _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.92);
  _0x51618b.lineWidth = 6;
  _0x51618b.stroke();
  _0x51618b.beginPath();
  _0x51618b.moveTo(239, -29);
  _0x51618b.quadraticCurveTo(246, -35, 253, -29);
  _0x51618b.strokeStyle = _0x155292.rgba(_0x1add85, 0.78);
  _0x51618b.lineWidth = 2.5;
  _0x51618b.stroke();
  _0x51618b.beginPath();
  _0x51618b.ellipse(260, -20, 5.5, 4.5, 0, 0, Math.PI * 2);
  _0x51618b.fillStyle = _0x155292.rgba(_0x4fed98, 0.92);
  _0x51618b.fill();
  _0x51618b.beginPath();
  _0x51618b.ellipse(259.5, -21, 3.2, 2.7, 0, 0, Math.PI * 2);
  _0x51618b.fillStyle = _0x155292.rgba(_0x14efa5, 0.96);
  _0x51618b.fill();
  for (const _0x1d2724 of [160, 181]) {
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x1d2724, -76);
    _0x51618b.lineTo(_0x1d2724, 66);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.88);
    _0x51618b.lineWidth = 6;
    _0x51618b.stroke();
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x1d2724 - 1.3, -76);
    _0x51618b.lineTo(_0x1d2724 - 1.3, 66);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x1add85, 0.72);
    _0x51618b.lineWidth = 2.4;
    _0x51618b.stroke();
  }
  for (let _0x1ee675 = -68; _0x1ee675 <= 62; _0x1ee675 += 13) {
    _0x51618b.beginPath();
    _0x51618b.moveTo(160, _0x1ee675);
    _0x51618b.lineTo(181, _0x1ee675);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x4fed98, 0.9);
    _0x51618b.lineWidth = 5.5;
    _0x51618b.stroke();
    _0x51618b.beginPath();
    _0x51618b.moveTo(161, _0x1ee675 - 1.2);
    _0x51618b.lineTo(180, _0x1ee675 - 1.2);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x2ef32, 0.7);
    _0x51618b.lineWidth = 2.1;
    _0x51618b.stroke();
  }
  const _0x19b493 = [365, 425, 515, 590, 705, 770, 895, 1030];
  for (let _0x1d1970 = 0; _0x1d1970 < _0x19b493.length; _0x1d1970 += 1) {
    const _0x1e0935 = _0x19b493[_0x1d1970];
    const _0x208b40 = _0x505b0a(_0x1e0935);
    const _0x2f966b = -_0x208b40.top + (_0x208b40.top + _0x208b40.bottom) * 0.22;
    const _0x35e98c = _0x155292.smoothstep(_0x155292.clamp((_0x1e0935 - 780) / 390, 0, 1));
    const _0x1a8647 = 1 - _0x155292.clamp(_0x1e0935 / 1200, 0, 1) * 0.28;
    _0x53afc8(_0x1e0935 - _0x1a8647 * 5, _0x2f966b - _0x1a8647 * 4, _0x1a8647 * 12, _0x1a8647 * 8, _0x1a8647 * 2);
    _0x51618b.fillStyle = _0x155292.rgba(_0x4fed98, 0.88 - _0x35e98c * 0.28);
    _0x51618b.fill();
    _0x53afc8(_0x1e0935 - _0x1a8647 * 2.5, _0x2f966b - _0x1a8647 * 2, _0x1a8647 * 6.5, _0x1a8647 * 3.5, 1);
    _0x51618b.fillStyle = _0x155292.rgba(_0x14efa5, 0.72 - _0x35e98c * 0.38);
    _0x51618b.fill();
  }
  const _0x1f34dd = _0x155292.stream("directed-wear");
  for (let _0x4c6f22 = 0; _0x4c6f22 < 48; _0x4c6f22 += 1) {
    const _0x2a7b30 = _0x5478e0[Math.floor(_0x1f34dd() * _0x5478e0.length)] - 28 + _0x1f34dd() * 55;
    const _0x40d1ab = _0x505b0a(_0x2a7b30);
    const _0x1feaf2 = _0x1f34dd() < 0.58 ? 5 - _0x40d1ab.top + _0x1f34dd() * 27 : _0x40d1ab.bottom - 8 - _0x1f34dd() * 31;
    const _0x4779cf = 10 + _0x1f34dd() * 54;
    const _0x2a0c4f = (_0x1f34dd() - 0.5) * 5;
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x2a7b30, _0x1feaf2);
    _0x51618b.lineTo(_0x2a7b30 + _0x4779cf, _0x1feaf2 + _0x2a0c4f);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x1f34dd() < 0.58 ? _0xa3656f : _0x4fed98, 0.12 + _0x1f34dd() * 0.2);
    _0x51618b.lineWidth = 1.6 + _0x1f34dd() * 2.2;
    _0x51618b.stroke();
  }
  for (let _0x47d8a4 = 0; _0x47d8a4 < 36; _0x47d8a4 += 1) {
    const _0x1e5cbd = 55 + _0x1f34dd() * 910;
    const _0x34c2c2 = _0x505b0a(_0x1e5cbd);
    const _0x1fb613 = 14 - _0x34c2c2.top + _0x1f34dd() * (_0x34c2c2.top + _0x34c2c2.bottom - 28);
    const _0x44cc6b = 28 + _0x1f34dd() * 125;
    const _0x25a0ed = (_0x1f34dd() - 0.5) * 8;
    _0x51618b.beginPath();
    _0x51618b.moveTo(_0x1e5cbd, _0x1fb613);
    _0x51618b.bezierCurveTo(_0x1e5cbd + _0x44cc6b * 0.34, _0x1fb613 + _0x25a0ed, _0x1e5cbd + _0x44cc6b * 0.72, _0x1fb613 - _0x25a0ed * 0.35, _0x1e5cbd + _0x44cc6b, _0x1fb613 + _0x25a0ed * 0.25);
    _0x51618b.strokeStyle = _0x155292.rgba(_0x1f34dd() < 0.34 ? _0xa3656f : _0x4892ef, 0.07 + _0x1f34dd() * 0.13);
    _0x51618b.lineWidth = 1.3 + _0x1f34dd() * 1.8;
    _0x51618b.stroke();
  }
  for (let _0x255616 = 0; _0x255616 < _0x5478e0.length; _0x255616 += 1) {
    const _0x1fb409 = _0x5478e0[_0x255616] + 13;
    const _0x80251c = _0x505b0a(_0x1fb409);
    for (let _0x407f11 = 0; _0x407f11 < 5; _0x407f11 += 1) {
      const _0x2388be = _0x80251c.bottom - 6 - _0x407f11 * 8 - _0x1f34dd() * 5;
      const _0x1b1da6 = 3 + _0x1f34dd() * 7;
      const _0x5a7419 = 2 + _0x1f34dd() * 3;
      _0x51618b.fillStyle = _0x155292.rgba(_0xa3656f, 0.24 + _0x1f34dd() * 0.24);
      _0x51618b.fillRect(_0x1fb409 + _0x1f34dd() * 7, _0x2388be, _0x1b1da6, _0x5a7419);
    }
  }
  _0x51618b.restore();
  _0x51618b.save();
  _0x51618b.translate(-96, 461);
  _0x51618b.rotate(_0x1742af);
  _0x51618b.globalCompositeOperation = "source-atop";
  const _0x5b86ce = _0x51618b.createLinearGradient(840, 0, 1195, 0);
  _0x5b86ce.addColorStop(0, _0x155292.rgba(_0xf63a0b, 0));
  _0x5b86ce.addColorStop(0.42, _0x155292.rgba(_0xf63a0b, 0.18));
  _0x5b86ce.addColorStop(0.74, _0x155292.rgba(_0xf63a0b, 0.43));
  _0x5b86ce.addColorStop(1, _0x155292.rgba(_0xf63a0b, 0.7));
  _0x51618b.fillStyle = _0x5b86ce;
  _0x51618b.fillRect(820, -230, 410, 470);
  _0x51618b.restore();
  _0x155292.mask((_0x3c9b7e, _0x321a86) => {
    const _0x109dab = _0x147aa8(_0x3c9b7e, _0x321a86);
    const _0x2ddef0 = _0x109dab.s;
    const _0x39471b = _0x109dab.q;
    const _0x48cac8 = _0x505b0a(_0x2ddef0);
    let _0x49467b = 0;
    if (_0x2ddef0 > -44 && _0x2ddef0 < 1225) {
      const _0x19e772 = Math.min(_0x39471b + _0x48cac8.top, _0x48cac8.bottom - _0x39471b);
      const _0x1f1d79 = Math.min(_0x2ddef0 + 44, 1225 - _0x2ddef0);
      const _0x2f9ed1 = _0x155292.clamp((_0x19e772 + 2) / 4, 0, 1);
      const _0x5f5c7e = _0x155292.clamp((_0x1f1d79 + 2) / 4, 0, 1);
      _0x49467b = Math.min(_0x2f9ed1, _0x5f5c7e);
    }
    let _0x591863 = 0;
    if (_0x2ddef0 > 21 && _0x2ddef0 < 989) {
      const _0x57b7e1 = Math.min(_0x2ddef0 - 25, 985 - _0x2ddef0);
      const _0x26eb6a = _0x155292.clamp((_0x57b7e1 + 2) / 4, 0, 1);
      for (let _0x433e23 = 0; _0x433e23 < 4; _0x433e23 += 1) {
        const _0x3664f5 = Math.abs(_0x39471b - _0x137dc9(_0x2ddef0, _0x433e23));
        const _0x2fe228 = _0x155292.clamp((10 - _0x3664f5) / 4, 0, 1) * _0x26eb6a;
        _0x591863 = Math.max(_0x591863, _0x2fe228);
      }
    }
    let _0x516332 = 0;
    for (let _0x5bcb8b = 0; _0x5bcb8b < _0x208d55.length; _0x5bcb8b += 1) {
      const _0x502f77 = _0x208d55[_0x5bcb8b];
      const _0x182b4c = _0x505b0a(_0x502f77).bottom - 5;
      const _0x2ce47a = _0x137dc9(_0x502f77, 3) + 5;
      const _0x3684cb = 7 - Math.abs(_0x2ddef0 - _0x502f77);
      const _0x2a7bbe = Math.min(_0x39471b - _0x182b4c, _0x2ce47a - _0x39471b);
      const _0x100054 = Math.min(_0x3684cb, _0x2a7bbe);
      _0x516332 = Math.max(_0x516332, _0x155292.clamp((_0x100054 + 2) / 4, 0, 1));
    }
    const _0x807548 = Math.max(_0x49467b, _0x591863, _0x516332);
    if (_0x807548 <= 0) {
      return 0;
    }
    if (_0x2ddef0 >= 1195) {
      return 0;
    }
    let _0x56db89 = 1;
    if (_0x2ddef0 > 910) {
      const _0x1dc88c = _0x155292.clamp((_0x2ddef0 - 910) / 285, 0, 1);
      _0x56db89 = 1 - _0x155292.smoothstep(_0x1dc88c);
      if (_0x1dc88c > 0 && _0x1dc88c < 1) {
        _0x56db89 = _0x155292.clamp(_0x56db89 + function (_0x3ae739, _0x20af2a) {
          let _0x1a52ef = Math.imul(1 + (_0x3ae739 | 0), 521288629);
          _0x1a52ef ^= Math.imul(1 + (_0x20af2a | 0), 668265263);
          _0x1a52ef ^= meta.seed;
          _0x1a52ef = Math.imul(_0x1a52ef ^ _0x1a52ef >>> 15, 2246822519);
          _0x1a52ef ^= _0x1a52ef >>> 13;
          return 3 / 255 * ((_0x1a52ef >>> 24) / 255 - 0.5);
        }(_0x3c9b7e, _0x321a86), 0, 1);
      }
    }
    return _0x807548 * _0x56db89;
  });
}