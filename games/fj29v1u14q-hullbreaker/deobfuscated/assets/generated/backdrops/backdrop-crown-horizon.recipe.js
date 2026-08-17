export const meta = {
  id: "backdrop-crown-horizon",
  size: {
    w: 1024,
    h: 256
  },
  seed: 161447,
  roles: ["deep-teal", "haze", "ink", "hot-magenta"]
};
export function render(_0x4f2309, _0x3ac57c) {
  const _0x134c2f = _0x3ac57c.width;
  _0x3ac57c.height;
  const _0x963497 = _0x3ac57c.PALETTE["deep-teal"];
  const _0x2b955d = _0x3ac57c.PALETTE.haze;
  const _0x1b290f = _0x3ac57c.PALETTE.ink;
  const _0x5d9442 = _0x3ac57c.PALETTE["hot-magenta"];
  const _0x37de31 = _0x3ac57c.shade(_0x963497, -0.54);
  const _0x41b6ff = _0x3ac57c.shade(_0x963497, -0.42);
  const _0x52f5a1 = _0x3ac57c.shade(_0x963497, -0.25);
  const _0x2740d4 = _0x3ac57c.shade(_0x963497, -0.08);
  const _0x48fa17 = _0x3ac57c.shade(_0x2b955d, -0.22);
  const _0x23b7e9 = _0x3ac57c.shade(_0x2b955d, -0.06);
  const _0x2c81d4 = _0x3ac57c.shade(_0x2b955d, 0.08);
  const _0x1c93dc = _0x3ac57c.shade(_0x1b290f, -0.18);
  const _0x45ab44 = _0x3ac57c.shade(_0x1b290f, 0.08);
  const _0x160c30 = _0x3ac57c.shade(_0x5d9442, 0);
  const _0x5e20f9 = _0x3ac57c.shade(_0x5d9442, 0.08);
  const _0x18fee7 = _0x3ac57c.stream("crown-geometry");
  const _0x432d8d = _0x3ac57c.stream("crown-striation");
  const _0x461c69 = _0x3ac57c.stream("crown-wear");
  const _0x341bb4 = [];
  let _0x4e1958 = 148;
  let _0x3a226f = 220;
  while (_0x4e1958 < 876) {
    const _0x29da27 = Math.max(0, 1 - Math.abs(_0x4e1958 - _0x134c2f * 0.5) / 382);
    const _0x4af938 = Math.round((216 - Math.pow(_0x29da27, 1.25) * 30 + (_0x18fee7() - 0.5) * 9) / 4) * 4;
    _0x341bb4.push({
      x: _0x4e1958,
      y: _0x3a226f
    });
    _0x341bb4.push({
      x: _0x4e1958,
      y: _0x4af938
    });
    const _0x593e9b = 10 + Math.floor(_0x18fee7() * 16);
    _0x4e1958 = Math.min(876, _0x4e1958 + _0x593e9b);
    _0x341bb4.push({
      x: _0x4e1958,
      y: _0x4af938
    });
    _0x3a226f = _0x4af938;
  }
  function _0x17c010(_0x4b25ca) {
    const _0x1d0eed = Math.max(0, 1 - Math.abs(_0x4b25ca - _0x134c2f * 0.5) / 382);
    return 216 - Math.pow(_0x1d0eed, 1.25) * 30;
  }
  function _0x285dc9(_0x344c60, _0x1acda0, _0x4ba573, _0x7d3de, _0x2f7c32, _0x40d48f) {
    const _0x45e678 = [];
    const _0x2c12f0 = _0x2f7c32 ? 4 : 2 + Math.floor(_0x18fee7() * 2);
    const _0x5d89d1 = Math.max(24, _0x7d3de - _0x4ba573 - 30);
    for (let _0x21086b = 0; _0x21086b < _0x2c12f0; _0x21086b++) {
      _0x45e678.push(_0x4ba573 + 21 + (_0x21086b + 1) * _0x5d89d1 / (_0x2c12f0 + 1) + (_0x18fee7() - 0.5) * 4);
    }
    return {
      x: _0x344c60,
      width: _0x1acda0,
      top: _0x4ba573,
      base: _0x7d3de,
      major: _0x2f7c32,
      accent: _0x40d48f,
      ledges: _0x45e678
    };
  }
  const _0xf74ea1 = [];
  let _0x2cc0ab = 172;
  while (_0x2cc0ab < 858) {
    const _0x1077d5 = Math.max(0, 1 - Math.abs(_0x2cc0ab - _0x134c2f * 0.5) / 370);
    const _0x41f13d = 12 + Math.floor(_0x18fee7() * 13 + _0x1077d5 * 8);
    const _0x2d5c26 = 194 - _0x1077d5 * 65 - _0x1077d5 * 17 * _0x1077d5 + (_0x18fee7() - 0.5) * 17;
    const _0x2c7f12 = 238 + Math.floor(_0x18fee7() * 9);
    _0xf74ea1.push(_0x285dc9(_0x2cc0ab, _0x41f13d, _0x2d5c26, _0x2c7f12, false, false));
    _0x2cc0ab += 15 + _0x18fee7() * 17;
  }
  const _0x2f2392 = [[512, 42, 91, 245, true], [476, 32, 105, 243, true], [550, 34, 102, 244, true], [438, 30, 118, 242, true], [589, 29, 116, 243, true], [404, 25, 132, 241, false], [624, 26, 130, 242, false]];
  for (const [_0x15184f, _0x500aee, _0x1db867, _0x152bd3, _0x11d7dc] of _0x2f2392) {
    _0xf74ea1.push(_0x285dc9(_0x15184f, _0x500aee, _0x1db867, _0x152bd3, true, _0x11d7dc));
  }
  _0xf74ea1.sort((_0xfb807, _0x3122a6) => _0xfb807.x - _0x3122a6.x);
  const _0x3cbccd = [];
  for (let _0x4c055c = 1; _0x4c055c < _0xf74ea1.length; _0x4c055c += 3) {
    const _0x29145c = _0xf74ea1[_0x4c055c];
    const _0x777000 = _0x4c055c % 2 == 0 ? -1 : 1;
    const _0x5d8069 = _0x29145c.top + 45 + _0x18fee7() * 22;
    const _0xcde383 = _0x29145c.x + _0x777000 * _0x29145c.width * 0.4;
    const _0x2f7ce8 = _0x29145c.x + _0x777000 * (_0x29145c.width * 1.45 + 14 + _0x18fee7() * 12);
    const _0x59fb3c = Math.min(_0x29145c.base - 13, _0x5d8069 + 21 + _0x18fee7() * 18);
    _0x3cbccd.push([{
      x: _0xcde383,
      y: _0x5d8069
    }, {
      x: _0x2f7ce8,
      y: _0x59fb3c
    }, {
      x: _0x2f7ce8 + _0x777000 * 8,
      y: _0x59fb3c + 8
    }, {
      x: _0x29145c.x + _0x777000 * (_0x29145c.width * 0.78 + 8),
      y: _0x29145c.base
    }, {
      x: _0x29145c.x + _0x777000 * _0x29145c.width * 0.24,
      y: _0x29145c.base
    }]);
  }
  const _0x1d5b3f = [{
    x1: 397,
    x2: 632,
    y: 157,
    h: 5
  }, {
    x1: 366,
    x2: 660,
    y: 181,
    h: 6
  }, {
    x1: 326,
    x2: 704,
    y: 204,
    h: 6
  }];
  const _0x3dea5c = _0x3ac57c.hexToRgb(_0x23b7e9);
  function _0x153271(_0x2bce73) {
    const _0x2d9fc2 = _0x2bce73.x;
    const _0xd35bed = _0x2bce73.width;
    const _0x3dfff4 = _0x2bce73.top;
    const _0x5d7caa = _0x2bce73.base;
    const _0x4318ba = _0x5d7caa - _0x3dfff4;
    const _0x37caeb = _0x3dfff4 + Math.min(42, _0x4318ba * 0.48);
    const _0x3874ad = _0x3dfff4 + Math.min(23, _0x4318ba * 0.28);
    const _0x21df92 = _0x3dfff4 + Math.min(11, _0x4318ba * 0.14);
    _0x4f2309.moveTo(_0x2d9fc2 - _0xd35bed * 0.62, _0x5d7caa);
    _0x4f2309.lineTo(_0x2d9fc2 - _0xd35bed * 0.58, _0x37caeb);
    _0x4f2309.lineTo(_0x2d9fc2 - _0xd35bed * 0.44, _0x37caeb);
    _0x4f2309.lineTo(_0x2d9fc2 - _0xd35bed * 0.44, _0x3874ad);
    _0x4f2309.lineTo(_0x2d9fc2 - _0xd35bed * 0.29, _0x3874ad);
    _0x4f2309.lineTo(_0x2d9fc2 - _0xd35bed * 0.21, _0x21df92);
    _0x4f2309.lineTo(_0x2d9fc2 - _0xd35bed * 0.1, _0x21df92);
    _0x4f2309.lineTo(_0x2d9fc2 - _0xd35bed * 0.045, _0x3dfff4 + 5);
    _0x4f2309.lineTo(_0x2d9fc2, _0x3dfff4);
    _0x4f2309.lineTo(_0x2d9fc2 + _0xd35bed * 0.045, _0x3dfff4 + 5);
    _0x4f2309.lineTo(_0x2d9fc2 + _0xd35bed * 0.1, _0x21df92);
    _0x4f2309.lineTo(_0x2d9fc2 + _0xd35bed * 0.21, _0x21df92);
    _0x4f2309.lineTo(_0x2d9fc2 + _0xd35bed * 0.29, _0x3874ad);
    _0x4f2309.lineTo(_0x2d9fc2 + _0xd35bed * 0.44, _0x3874ad);
    _0x4f2309.lineTo(_0x2d9fc2 + _0xd35bed * 0.44, _0x37caeb);
    _0x4f2309.lineTo(_0x2d9fc2 + _0xd35bed * 0.58, _0x37caeb);
    _0x4f2309.lineTo(_0x2d9fc2 + _0xd35bed * 0.62, _0x5d7caa);
    _0x4f2309.closePath();
    for (let _0x5bf3a1 = 0; _0x5bf3a1 < _0x2bce73.ledges.length; _0x5bf3a1++) {
      const _0x597e29 = _0x2bce73.ledges[_0x5bf3a1];
      const _0x1fcc22 = _0x5bf3a1 % 2 == 0 ? 0.74 : 0.66;
      _0x4f2309.rect(_0x2d9fc2 - _0xd35bed * _0x1fcc22, _0x597e29, _0xd35bed * _0x1fcc22 * 2, 3 + _0x5bf3a1 % 2);
    }
  }
  _0x3ac57c.field((_0x994cc9, _0x371bd) => {
    if (_0x994cc9 < 112 || _0x994cc9 > 912 || _0x371bd < 156) {
      return null;
    }
    const _0x1275c8 = Math.max(0, 1 - Math.abs(_0x994cc9 - _0x134c2f * 0.5) / 426);
    if (_0x1275c8 <= 0) {
      return null;
    }
    const _0x1aff06 = 231 + (_0x3ac57c.noise(_0x994cc9, 0, {
      period: 173,
      seed: meta.seed + 29
    }) - 0.5) * 8;
    const _0x2bc75a = _0x371bd < _0x1aff06 ? Math.exp(-(_0x1aff06 - _0x371bd) / 30) : Math.exp(-(_0x371bd - _0x1aff06) / 18);
    const _0xbf8cbf = _0x3ac57c.fbm(_0x994cc9, _0x371bd, {
      octaves: 3,
      gain: 0.52,
      lacunarity: 2,
      period: 187,
      seed: meta.seed + 71
    });
    const _0x4a3d40 = Math.pow(_0x1275c8, 0.72) * _0x2bc75a * (0.66 + _0xbf8cbf * 0.34);
    const _0x47ed61 = Math.round(_0x4a3d40 * 15);
    if (_0x47ed61 < 1) {
      return null;
    } else {
      return [_0x3dea5c.r, _0x3dea5c.g, _0x3dea5c.b, _0x47ed61];
    }
  }, {
    blend: "over"
  });
  _0x4f2309.save();
  _0x4f2309.beginPath();
  _0x4f2309.moveTo(_0x341bb4[0].x, 247);
  _0x4f2309.lineTo(_0x341bb4[0].x, _0x341bb4[0].y);
  for (const _0x4145e2 of _0x341bb4) {
    _0x4f2309.lineTo(_0x4145e2.x, _0x4145e2.y);
  }
  _0x4f2309.lineTo(_0x341bb4[_0x341bb4.length - 1].x, 247);
  _0x4f2309.closePath();
  for (const _0x26aec0 of _0xf74ea1) {
    _0x153271(_0x26aec0);
  }
  for (const _0x1393d0 of _0x3cbccd) {
    _0x4f2309.moveTo(_0x1393d0[0].x, _0x1393d0[0].y);
    for (let _0x2414bd = 1; _0x2414bd < _0x1393d0.length; _0x2414bd++) {
      _0x4f2309.lineTo(_0x1393d0[_0x2414bd].x, _0x1393d0[_0x2414bd].y);
    }
    _0x4f2309.closePath();
  }
  for (const _0x44b32d of _0x1d5b3f) {
    _0x4f2309.rect(_0x44b32d.x1, _0x44b32d.y, _0x44b32d.x2 - _0x44b32d.x1, _0x44b32d.h);
    _0x4f2309.moveTo(_0x44b32d.x1 + 18, _0x44b32d.y + _0x44b32d.h);
    _0x4f2309.lineTo(_0x44b32d.x1 + 34, _0x44b32d.y + _0x44b32d.h + 12);
    _0x4f2309.lineTo(_0x44b32d.x2 - 31, _0x44b32d.y + _0x44b32d.h + 12);
    _0x4f2309.lineTo(_0x44b32d.x2 - 17, _0x44b32d.y + _0x44b32d.h);
    _0x4f2309.closePath();
  }
  _0x4f2309.fillStyle = _0x3ac57c.rgba(_0x37de31, 0.335);
  _0x4f2309.shadowColor = _0x3ac57c.rgba(_0x41b6ff, 0.048);
  _0x4f2309.shadowBlur = 5;
  _0x4f2309.shadowOffsetX = 0;
  _0x4f2309.shadowOffsetY = 0;
  _0x4f2309.fill();
  _0x4f2309.shadowColor = _0x3ac57c.rgba(_0x41b6ff, 0);
  _0x4f2309.shadowBlur = 0;
  _0x4f2309.save();
  _0x4f2309.clip();
  _0x4f2309.globalCompositeOperation = "source-atop";
  const _0x534bf6 = _0x4f2309.createLinearGradient(175, 92, 850, 246);
  _0x534bf6.addColorStop(0, _0x3ac57c.rgba(_0x2740d4, 0.19));
  _0x534bf6.addColorStop(0.48, _0x3ac57c.rgba(_0x52f5a1, 0.065));
  _0x534bf6.addColorStop(1, _0x3ac57c.rgba(_0x45ab44, 0.13));
  _0x4f2309.fillStyle = _0x534bf6;
  _0x4f2309.fillRect(120, 84, 790, 170);
  const _0x28a2d5 = _0x4f2309.createLinearGradient(0, 174, 0, 255);
  _0x28a2d5.addColorStop(0, _0x3ac57c.rgba(_0x48fa17, 0));
  _0x28a2d5.addColorStop(0.62, _0x3ac57c.rgba(_0x23b7e9, 0.075));
  _0x28a2d5.addColorStop(1, _0x3ac57c.rgba(_0x2c81d4, 0.17));
  _0x4f2309.fillStyle = _0x28a2d5;
  _0x4f2309.fillRect(120, 172, 790, 84);
  for (let _0xd58d2d = 0; _0xd58d2d < 88; _0xd58d2d++) {
    const _0x271662 = 145 + _0x432d8d() * 744;
    const _0x3d00b6 = 93 + _0x432d8d() * 116;
    const _0x255b43 = 2 + _0x432d8d() * 5;
    const _0x1e256b = 34 + _0x432d8d() * 105;
    const _0x462a76 = _0x432d8d();
    const _0x548ff2 = _0x462a76 < 0.48 ? _0x2740d4 : _0x462a76 < 0.76 ? _0x37de31 : _0x48fa17;
    const _0x12a4a8 = 0.014 + _0x432d8d() * 0.034;
    const _0x1b4af3 = _0x4f2309.createLinearGradient(_0x271662, _0x3d00b6, _0x271662, _0x3d00b6 + _0x1e256b);
    _0x1b4af3.addColorStop(0, _0x3ac57c.rgba(_0x548ff2, 0));
    _0x1b4af3.addColorStop(0.22, _0x3ac57c.rgba(_0x548ff2, _0x12a4a8));
    _0x1b4af3.addColorStop(0.76, _0x3ac57c.rgba(_0x548ff2, _0x12a4a8 * 0.72));
    _0x1b4af3.addColorStop(1, _0x3ac57c.rgba(_0x548ff2, 0));
    _0x4f2309.fillStyle = _0x1b4af3;
    _0x4f2309.fillRect(_0x271662, _0x3d00b6, _0x255b43, _0x1e256b);
  }
  for (const _0x21045d of _0xf74ea1) {
    const _0x11b353 = _0x21045d.x;
    const _0x28ee63 = _0x21045d.width;
    const _0x534c93 = _0x21045d.top;
    const _0x66f5cb = _0x21045d.base;
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x11b353 - _0x28ee63 * 0.48, _0x534c93 + 19);
    _0x4f2309.lineTo(_0x11b353 - _0x28ee63 * 0.08, _0x534c93 + 9);
    _0x4f2309.lineTo(_0x11b353 - _0x28ee63 * 0.08, _0x66f5cb);
    _0x4f2309.lineTo(_0x11b353 - _0x28ee63 * 0.48, _0x66f5cb);
    _0x4f2309.closePath();
    _0x4f2309.fillStyle = _0x3ac57c.rgba(_0x2740d4, 0.075);
    _0x4f2309.fill();
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x11b353 + _0x28ee63 * 0.08, _0x534c93 + 9);
    _0x4f2309.lineTo(_0x11b353 + _0x28ee63 * 0.48, _0x534c93 + 19);
    _0x4f2309.lineTo(_0x11b353 + _0x28ee63 * 0.48, _0x66f5cb);
    _0x4f2309.lineTo(_0x11b353 + _0x28ee63 * 0.08, _0x66f5cb);
    _0x4f2309.closePath();
    _0x4f2309.fillStyle = _0x3ac57c.rgba(_0x1c93dc, 0.055);
    _0x4f2309.fill();
    const _0x4ea795 = _0x21045d.major ? 4 : 2;
    for (let _0x31fd3a = 0; _0x31fd3a < _0x4ea795; _0x31fd3a++) {
      const _0xe1f3cd = _0x11b353 - _0x28ee63 * 0.35 + (_0x31fd3a + 1) / (_0x4ea795 + 1) * _0x28ee63 * 0.7;
      _0x4f2309.beginPath();
      _0x4f2309.moveTo(_0xe1f3cd - 2.2, _0x534c93 + 15);
      _0x4f2309.lineTo(_0xe1f3cd - 2.2, _0x66f5cb);
      _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x2740d4, 0.12);
      _0x4f2309.lineWidth = 1.5;
      _0x4f2309.stroke();
      _0x4f2309.beginPath();
      _0x4f2309.moveTo(_0xe1f3cd, _0x534c93 + 15);
      _0x4f2309.lineTo(_0xe1f3cd, _0x66f5cb);
      _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x1c93dc, 0.18);
      _0x4f2309.lineWidth = 2;
      _0x4f2309.stroke();
    }
    for (const _0x4a2d06 of _0x21045d.ledges) {
      _0x4f2309.beginPath();
      _0x4f2309.moveTo(_0x11b353 - _0x28ee63 * 0.72, _0x4a2d06);
      _0x4f2309.lineTo(_0x11b353 + _0x28ee63 * 0.72, _0x4a2d06);
      _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x2740d4, 0.24);
      _0x4f2309.lineWidth = 1.6;
      _0x4f2309.stroke();
      _0x4f2309.beginPath();
      _0x4f2309.moveTo(_0x11b353 - _0x28ee63 * 0.72, _0x4a2d06 + 3);
      _0x4f2309.lineTo(_0x11b353 + _0x28ee63 * 0.72, _0x4a2d06 + 3);
      _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x1c93dc, 0.34);
      _0x4f2309.lineWidth = 2.6;
      _0x4f2309.stroke();
      if (_0x461c69() < 0.78) {
        const _0x1baa41 = _0x11b353 - _0x28ee63 * 0.45 + _0x461c69() * _0x28ee63 * 0.9;
        const _0x3e9a8c = 9 + _0x461c69() * 25;
        const _0x8da4c1 = _0x4f2309.createLinearGradient(_0x1baa41, _0x4a2d06 + 3, _0x1baa41, _0x4a2d06 + 3 + _0x3e9a8c);
        _0x8da4c1.addColorStop(0, _0x3ac57c.rgba(_0x45ab44, 0.14));
        _0x8da4c1.addColorStop(1, _0x3ac57c.rgba(_0x45ab44, 0));
        _0x4f2309.fillStyle = _0x8da4c1;
        _0x4f2309.fillRect(_0x1baa41, _0x4a2d06 + 3, 2 + _0x461c69() * 2, _0x3e9a8c);
      }
      if (_0x461c69() < 0.55) {
        const _0x5cae74 = _0x11b353 - _0x28ee63 * 0.52 + _0x461c69() * _0x28ee63 * 1.04;
        _0x4f2309.beginPath();
        _0x4f2309.moveTo(_0x5cae74, _0x4a2d06 - 1);
        _0x4f2309.lineTo(_0x5cae74 + 3 + _0x461c69() * 5, _0x4a2d06 - 3);
        _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x2c81d4, 0.2);
        _0x4f2309.lineWidth = 1.7;
        _0x4f2309.stroke();
      }
    }
  }
  for (const _0x3fa5f5 of _0x3cbccd) {
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x3fa5f5[0].x, _0x3fa5f5[0].y);
    for (let _0xe501a0 = 1; _0xe501a0 < _0x3fa5f5.length; _0xe501a0++) {
      _0x4f2309.lineTo(_0x3fa5f5[_0xe501a0].x, _0x3fa5f5[_0xe501a0].y);
    }
    _0x4f2309.closePath();
    _0x4f2309.fillStyle = _0x3ac57c.rgba(_0x52f5a1, 0.09);
    _0x4f2309.fill();
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x3fa5f5[0].x, _0x3fa5f5[0].y);
    _0x4f2309.lineTo(_0x3fa5f5[1].x, _0x3fa5f5[1].y);
    _0x4f2309.lineTo(_0x3fa5f5[2].x, _0x3fa5f5[2].y);
    _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x2740d4, 0.2);
    _0x4f2309.lineWidth = 1.7;
    _0x4f2309.stroke();
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x3fa5f5[2].x, _0x3fa5f5[2].y);
    _0x4f2309.lineTo(_0x3fa5f5[3].x, _0x3fa5f5[3].y);
    _0x4f2309.lineTo(_0x3fa5f5[4].x, _0x3fa5f5[4].y);
    _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x1c93dc, 0.29);
    _0x4f2309.lineWidth = 2.4;
    _0x4f2309.stroke();
  }
  let _0x3b3ef6 = 154;
  while (_0x3b3ef6 < 872) {
    const _0x48c560 = 18 + _0x432d8d() * 30;
    const _0xe15dfe = _0x17c010(_0x3b3ef6) - 3;
    _0x4f2309.fillStyle = _0x3ac57c.rgba(_0x432d8d() < 0.5 ? _0x52f5a1 : _0x48fa17, 0.035 + _0x432d8d() * 0.03);
    _0x4f2309.fillRect(_0x3b3ef6, _0xe15dfe, _0x48c560, 251 - _0xe15dfe);
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x3b3ef6 + 1.5, _0xe15dfe);
    _0x4f2309.lineTo(_0x3b3ef6 + 1.5, 249);
    _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x2740d4, 0.14);
    _0x4f2309.lineWidth = 1.5;
    _0x4f2309.stroke();
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x3b3ef6 + _0x48c560, _0xe15dfe);
    _0x4f2309.lineTo(_0x3b3ef6 + _0x48c560, 249);
    _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x1c93dc, 0.28);
    _0x4f2309.lineWidth = 2.3;
    _0x4f2309.stroke();
    _0x3b3ef6 += _0x48c560;
  }
  for (const _0x5a21a9 of [204, 220, 236]) {
    let _0x166451 = 158 + _0x432d8d() * 17;
    while (_0x166451 < 864) {
      const _0x2f9870 = 24 + _0x432d8d() * 52;
      _0x4f2309.beginPath();
      _0x4f2309.moveTo(_0x166451, _0x5a21a9);
      _0x4f2309.lineTo(Math.min(866, _0x166451 + _0x2f9870), _0x5a21a9);
      _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x2740d4, 0.18);
      _0x4f2309.lineWidth = 1.5;
      _0x4f2309.stroke();
      _0x4f2309.beginPath();
      _0x4f2309.moveTo(_0x166451, _0x5a21a9 + 3);
      _0x4f2309.lineTo(Math.min(866, _0x166451 + _0x2f9870), _0x5a21a9 + 3);
      _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x1c93dc, 0.31);
      _0x4f2309.lineWidth = 2.7;
      _0x4f2309.stroke();
      _0x166451 += _0x2f9870 + 7 + _0x432d8d() * 17;
    }
  }
  for (const _0x4f2b7f of _0x1d5b3f) {
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x4f2b7f.x1, _0x4f2b7f.y);
    _0x4f2309.lineTo(_0x4f2b7f.x2, _0x4f2b7f.y);
    _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x2740d4, 0.24);
    _0x4f2309.lineWidth = 1.7;
    _0x4f2309.stroke();
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x4f2b7f.x1, _0x4f2b7f.y + _0x4f2b7f.h);
    _0x4f2309.lineTo(_0x4f2b7f.x2, _0x4f2b7f.y + _0x4f2b7f.h);
    _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x1c93dc, 0.4);
    _0x4f2309.lineWidth = 2.8;
    _0x4f2309.stroke();
  }
  _0x4f2309.restore();
  _0x4f2309.restore();
  const _0x5de198 = _0xf74ea1.filter(_0x5e860f => _0x5e860f.accent);
  _0x4f2309.globalCompositeOperation = "source-over";
  for (const _0x13bc1d of _0x5de198) {
    const _0x10da30 = _0x13bc1d.x;
    const _0x1774f8 = _0x13bc1d.top + 5;
    const _0xc65e62 = _0x13bc1d.x === 512 ? 13 : 10;
    const _0x77ac8b = _0x4f2309.createRadialGradient(_0x10da30, _0x1774f8, 0, _0x10da30, _0x1774f8, _0xc65e62);
    _0x77ac8b.addColorStop(0, _0x3ac57c.rgba(_0x5e20f9, 0.048));
    _0x77ac8b.addColorStop(0.34, _0x3ac57c.rgba(_0x5e20f9, 0.026));
    _0x77ac8b.addColorStop(1, _0x3ac57c.rgba(_0x5e20f9, 0));
    _0x4f2309.fillStyle = _0x77ac8b;
    _0x4f2309.fillRect(_0x10da30 - _0xc65e62, _0x1774f8 - _0xc65e62, _0xc65e62 * 2, _0xc65e62 * 2);
  }
  _0x4f2309.globalCompositeOperation = "source-atop";
  for (const _0xdf4851 of _0x5de198) {
    const _0x2da221 = _0xdf4851.x;
    const _0x1686cc = _0xdf4851.top + 5;
    _0x4f2309.beginPath();
    _0x4f2309.ellipse(_0x2da221, _0x1686cc, 1.8, 2.5, 0, 0, Math.PI * 2);
    _0x4f2309.fillStyle = _0x3ac57c.rgba(_0x160c30, 1);
    _0x4f2309.fill();
    _0x4f2309.beginPath();
    _0x4f2309.moveTo(_0x2da221, _0x1686cc + 2);
    _0x4f2309.lineTo(_0x2da221, _0x1686cc + 10);
    _0x4f2309.strokeStyle = _0x3ac57c.rgba(_0x160c30, 0.55);
    _0x4f2309.lineWidth = 2;
    _0x4f2309.stroke();
  }
  _0x4f2309.globalCompositeOperation = "source-over";
  _0x3ac57c.mask((_0x121e19, _0x2c4454) => {
    if (_0x121e19 <= 132 || _0x121e19 >= 892 || _0x2c4454 < 86 || _0x2c4454 >= 255) {
      return 0;
    }
    let _0x3195ae = _0x3ac57c.smoothstep(_0x3ac57c.clamp((_0x121e19 - 132) / 78, 0, 1)) * _0x3ac57c.smoothstep(_0x3ac57c.clamp((892 - _0x121e19) / 80, 0, 1)) * _0x3ac57c.smoothstep(_0x3ac57c.clamp((_0x2c4454 - 86) / 16, 0, 1)) * (_0x2c4454 <= 232 ? 1 : _0x3ac57c.smoothstep(_0x3ac57c.clamp((255 - _0x2c4454) / 23, 0, 1)));
    if (_0x3195ae <= 0) {
      return 0;
    }
    _0x3195ae += 8 / 255 * (_0x3ac57c.noise(_0x121e19, _0x2c4454, {
      period: 19,
      seed: meta.seed + 907
    }) - 0.5);
    return _0x3ac57c.clamp(_0x3195ae * 0.94, 0, 0.94);
  });
}