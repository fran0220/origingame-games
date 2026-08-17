export const meta = {
  id: "backdrop-colony-cluster",
  size: {
    w: 512,
    h: 256
  },
  seed: 597251,
  roles: ["haze", "ink", "hull", "deep-teal", "rust-orange", "warm-white"]
};
export function render(_0x1f58b8, _0x1bd3ce) {
  const _0x24064e = _0x1bd3ce.PALETTE;
  const _0x3b3340 = {
    ink: _0x1bd3ce.shade(_0x24064e.ink, 0),
    inkDeep: _0x1bd3ce.shade(_0x24064e.ink, -0.18),
    inkSoft: _0x1bd3ce.mix(_0x24064e.ink, _0x24064e.haze, 0.18),
    hazeLight: _0x1bd3ce.shade(_0x24064e.haze, 0.16),
    haze: _0x1bd3ce.shade(_0x24064e.haze, 0),
    hazeDark: _0x1bd3ce.shade(_0x24064e.haze, -0.22),
    hazeDeep: _0x1bd3ce.mix(_0x24064e.haze, _0x24064e.ink, 0.48),
    hullLight: _0x1bd3ce.shade(_0x24064e.hull, 0.18),
    hull: _0x1bd3ce.shade(_0x24064e.hull, 0),
    hullDark: _0x1bd3ce.shade(_0x24064e.hull, -0.22),
    hullDeep: _0x1bd3ce.mix(_0x24064e.hull, _0x24064e.ink, 0.58),
    rustLight: _0x1bd3ce.shade(_0x24064e["rust-orange"], 0.17),
    rust: _0x1bd3ce.shade(_0x24064e["rust-orange"], 0),
    rustDark: _0x1bd3ce.shade(_0x24064e["rust-orange"], -0.24),
    rustDeep: _0x1bd3ce.mix(_0x24064e["rust-orange"], _0x24064e.ink, 0.43),
    tealLight: _0x1bd3ce.mix(_0x24064e["deep-teal"], _0x24064e.haze, 0.58),
    teal: _0x1bd3ce.mix(_0x24064e["deep-teal"], _0x24064e.haze, 0.38),
    tealDark: _0x1bd3ce.mix(_0x24064e["deep-teal"], _0x24064e.ink, 0.34),
    tealDeep: _0x1bd3ce.mix(_0x24064e["deep-teal"], _0x24064e.ink, 0.54),
    warmLight: _0x1bd3ce.shade(_0x24064e["warm-white"], 0.08),
    warm: _0x1bd3ce.shade(_0x24064e["warm-white"], -0.06),
    warmDim: _0x1bd3ce.shade(_0x24064e["warm-white"], -0.38),
    warmDeep: _0x1bd3ce.shade(_0x24064e["warm-white"], -0.58)
  };
  const _0x1e29ba = {
    light: _0x3b3340.rustLight,
    mid: _0x3b3340.rust,
    dark: _0x3b3340.rustDark,
    deep: _0x3b3340.rustDeep,
    variants: [_0x3b3340.rustLight, _0x3b3340.rust, _0x3b3340.rustDark]
  };
  const _0xc3f98f = {
    light: _0x3b3340.hullLight,
    mid: _0x3b3340.hull,
    dark: _0x3b3340.hullDark,
    deep: _0x3b3340.hullDeep,
    variants: [_0x3b3340.hullLight, _0x3b3340.hull, _0x3b3340.hullDark]
  };
  const _0x550fa2 = {
    light: _0x3b3340.hazeLight,
    mid: _0x3b3340.haze,
    dark: _0x3b3340.hazeDark,
    deep: _0x3b3340.hazeDeep,
    variants: [_0x3b3340.hazeLight, _0x3b3340.haze, _0x3b3340.hazeDark]
  };
  const _0x2a1687 = {
    light: _0x3b3340.tealLight,
    mid: _0x3b3340.teal,
    dark: _0x3b3340.tealDark,
    deep: _0x3b3340.tealDeep,
    variants: [_0x3b3340.tealLight, _0x3b3340.teal, _0x3b3340.tealDark]
  };
  const _0x325847 = _0x1bd3ce.stream("panel-patches");
  const _0x311845 = _0x1bd3ce.stream("habitats");
  const _0x419b05 = _0x1bd3ce.stream("window-state");
  const _0x2ccf7a = _0x1bd3ce.stream("wear");
  const _0xb05e30 = _0x1bd3ce.stream("shelf");
  const _0x319419 = [];
  const _0x12b172 = [];
  const _0x3df30c = [];
  function _0x4ecaec(_0x2d980e) {
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x2d980e[0][0], _0x2d980e[0][1]);
    for (let _0x375ac3 = 1; _0x375ac3 < _0x2d980e.length; _0x375ac3 += 1) {
      _0x1f58b8.lineTo(_0x2d980e[_0x375ac3][0], _0x2d980e[_0x375ac3][1]);
    }
    _0x1f58b8.closePath();
  }
  function _0x10914a(_0x5bc003, _0xd408a1, _0x491105, _0x100bd0, _0x10a5f7 = 4) {
    const _0x110d2e = Math.min(_0x10a5f7, _0x491105 * 0.22, _0x100bd0 * 0.28);
    _0x4ecaec([[_0x5bc003 + _0x110d2e, _0xd408a1], [_0x5bc003 + _0x491105 - _0x110d2e, _0xd408a1], [_0x5bc003 + _0x491105, _0xd408a1 + _0x110d2e], [_0x5bc003 + _0x491105, _0xd408a1 + _0x100bd0 - _0x110d2e], [_0x5bc003 + _0x491105 - _0x110d2e, _0xd408a1 + _0x100bd0], [_0x5bc003 + _0x110d2e, _0xd408a1 + _0x100bd0], [_0x5bc003, _0xd408a1 + _0x100bd0 - _0x110d2e], [_0x5bc003, _0xd408a1 + _0x110d2e]]);
  }
  function _0x986e84(_0x2bbc0a, _0x13d1a9, _0x139a2b, _0x348358, _0x5b3348, _0x129559, _0xbead20) {
    _0x1f58b8.save();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.23);
    _0x1f58b8.lineWidth = _0x129559 + 4;
    _0x1f58b8.shadowColor = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.26);
    _0x1f58b8.shadowBlur = 2;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x2bbc0a, _0x13d1a9);
    _0x1f58b8.lineTo(_0x139a2b, _0x348358);
    _0x1f58b8.stroke();
    _0x1f58b8.shadowBlur = 0;
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x5b3348, 0.96);
    _0x1f58b8.lineWidth = _0x129559;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x2bbc0a, _0x13d1a9);
    _0x1f58b8.lineTo(_0x139a2b, _0x348358);
    _0x1f58b8.stroke();
    if (_0xbead20) {
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xbead20, 0.56);
      _0x1f58b8.lineWidth = Math.max(1, _0x129559 * 0.27);
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x2bbc0a - 0.6, _0x13d1a9 - 0.7);
      _0x1f58b8.lineTo(_0x139a2b - 0.6, _0x348358 - 0.7);
      _0x1f58b8.stroke();
    }
    _0x1f58b8.restore();
  }
  function _0x13daea(_0x560bdc, _0x317f61, _0x2ad2ad, _0x241664) {
    _0x1f58b8.save();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.25);
    _0x1f58b8.lineWidth = _0x2ad2ad + 5;
    _0x1f58b8.shadowColor = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.25);
    _0x1f58b8.shadowBlur = 2;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x560bdc[0], _0x560bdc[1]);
    _0x1f58b8.bezierCurveTo(_0x560bdc[2], _0x560bdc[3], _0x560bdc[4], _0x560bdc[5], _0x560bdc[6], _0x560bdc[7]);
    _0x1f58b8.stroke();
    _0x1f58b8.shadowBlur = 0;
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x317f61, 0.96);
    _0x1f58b8.lineWidth = _0x2ad2ad;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x560bdc[0], _0x560bdc[1]);
    _0x1f58b8.bezierCurveTo(_0x560bdc[2], _0x560bdc[3], _0x560bdc[4], _0x560bdc[5], _0x560bdc[6], _0x560bdc[7]);
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x241664, 0.46);
    _0x1f58b8.lineWidth = Math.max(1, _0x2ad2ad * 0.24);
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x560bdc[0] - 1, _0x560bdc[1] - 1);
    _0x1f58b8.bezierCurveTo(_0x560bdc[2] - 1, _0x560bdc[3] - 1, _0x560bdc[4] - 1, _0x560bdc[5] - 1, _0x560bdc[6] - 1, _0x560bdc[7] - 1);
    _0x1f58b8.stroke();
    _0x1f58b8.restore();
  }
  function _0x5ded51(_0x40fb16, _0x54dae8, _0x1639e5, _0x3a69b4, _0xfecb19, _0x75f8b7 = 4) {
    _0x1f58b8.save();
    _0x1f58b8.shadowColor = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.48);
    _0x1f58b8.shadowBlur = 3;
    _0x1f58b8.shadowOffsetY = 2;
    _0x10914a(_0x40fb16, _0x54dae8, _0x1639e5, _0x3a69b4, _0x75f8b7);
    const _0x2fd198 = _0x1f58b8.createLinearGradient(_0x40fb16, _0x54dae8, _0x40fb16 + _0x1639e5 * 0.78, _0x54dae8 + _0x3a69b4);
    _0x2fd198.addColorStop(0, _0x1bd3ce.rgba(_0xfecb19.light, 1));
    _0x2fd198.addColorStop(0.42, _0x1bd3ce.rgba(_0xfecb19.mid, 1));
    _0x2fd198.addColorStop(1, _0x1bd3ce.rgba(_0xfecb19.dark, 1));
    _0x1f58b8.fillStyle = _0x2fd198;
    _0x1f58b8.fill();
    _0x1f58b8.restore();
    _0x1f58b8.save();
    _0x10914a(_0x40fb16, _0x54dae8, _0x1639e5, _0x3a69b4, _0x75f8b7);
    _0x1f58b8.clip();
    const _0x4aecec = Math.max(2, Math.floor(_0x1639e5 / 25));
    for (let _0x51bfec = 0; _0x51bfec < _0x4aecec; _0x51bfec += 1) {
      const _0x16f524 = _0x40fb16 + _0x1639e5 * _0x51bfec / _0x4aecec + (_0x325847() - 0.5) * 2;
      const _0x1f0ff4 = _0x40fb16 + _0x1639e5 * (_0x51bfec + 1) / _0x4aecec + (_0x325847() - 0.5) * 2;
      const _0x108d37 = _0xfecb19.variants[Math.floor(_0x325847() * _0xfecb19.variants.length)];
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x108d37, 0.22 + _0x325847() * 0.22);
      _0x1f58b8.fillRect(_0x16f524, _0x54dae8, _0x1f0ff4 - _0x16f524 + 1, _0x3a69b4);
      if (_0x51bfec > 0) {
        _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0xfecb19.deep, 0.62);
        _0x1f58b8.fillRect(_0x16f524 - 1, _0x54dae8 + 2, 2, _0x3a69b4 - 4);
        _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0xfecb19.light, 0.25);
        _0x1f58b8.fillRect(_0x16f524 + 1, _0x54dae8 + 3, 1, _0x3a69b4 - 6);
      }
    }
    for (let _0x219dd2 = 0; _0x219dd2 < 6; _0x219dd2 += 1) {
      const _0x1c685a = _0x54dae8 + 3 + _0x325847() * Math.max(2, _0x3a69b4 - 6);
      const _0x1d9766 = _0x40fb16 + _0x325847() * _0x1639e5 * 0.22;
      const _0x1332d1 = _0x1639e5 * (0.32 + _0x325847() * 0.62);
      const _0x5ec6a7 = _0x325847() > 0.55 ? _0xfecb19.light : _0xfecb19.dark;
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x5ec6a7, 0.08 + _0x325847() * 0.12);
      _0x1f58b8.fillRect(_0x1d9766, _0x1c685a, _0x1332d1, 1 + _0x325847() * 1.4);
    }
    _0x1f58b8.restore();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.82);
    _0x1f58b8.lineWidth = 2.4;
    _0x10914a(_0x40fb16, _0x54dae8, _0x1639e5, _0x3a69b4, _0x75f8b7);
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xfecb19.light, 0.88);
    _0x1f58b8.lineWidth = 1.7;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x40fb16 + _0x75f8b7, _0x54dae8 + 1);
    _0x1f58b8.lineTo(_0x40fb16 + _0x1639e5 - _0x75f8b7, _0x54dae8 + 1);
    _0x1f58b8.moveTo(_0x40fb16 + 1, _0x54dae8 + _0x75f8b7);
    _0x1f58b8.lineTo(_0x40fb16 + 1, _0x54dae8 + _0x3a69b4 - _0x75f8b7);
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xfecb19.deep, 0.92);
    _0x1f58b8.lineWidth = 2.2;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x40fb16 + _0x75f8b7, _0x54dae8 + _0x3a69b4 - 1);
    _0x1f58b8.lineTo(_0x40fb16 + _0x1639e5 - _0x75f8b7, _0x54dae8 + _0x3a69b4 - 1);
    _0x1f58b8.moveTo(_0x40fb16 + _0x1639e5 - 1, _0x54dae8 + _0x75f8b7);
    _0x1f58b8.lineTo(_0x40fb16 + _0x1639e5 - 1, _0x54dae8 + _0x3a69b4 - _0x75f8b7);
    _0x1f58b8.stroke();
    const _0x1da7bd = Math.max(14, _0x1639e5 / 5);
    for (let _0x174514 = _0x40fb16 + 8; _0x174514 < _0x40fb16 + _0x1639e5 - 5; _0x174514 += _0x1da7bd) {
      for (const _0x496ddb of [_0x54dae8 + 3.5, _0x54dae8 + _0x3a69b4 - 3.5]) {
        _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.92);
        _0x1f58b8.beginPath();
        _0x1f58b8.arc(_0x174514, _0x496ddb, 1.5, 0, Math.PI * 2);
        _0x1f58b8.fill();
        _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0xfecb19.light, 0.8);
        _0x1f58b8.beginPath();
        _0x1f58b8.arc(_0x174514 - 0.45, _0x496ddb - 0.45, 0.65, 0, Math.PI * 2);
        _0x1f58b8.fill();
      }
    }
  }
  function _0x3b5a91(_0x104ede, _0x44a166, _0x15005d, _0x31feaa, _0x459f3e, _0x39a281 = 1) {
    (function (_0x507c6a, _0xeb8e, _0x3ce2dd, _0x223886) {
      _0x1f58b8.save();
      _0x4ecaec([[_0x507c6a + 2, _0xeb8e], [_0x507c6a + _0x3ce2dd - 2, _0xeb8e], [_0x507c6a + _0x3ce2dd - 7, _0xeb8e + _0x223886], [_0x507c6a + 7, _0xeb8e + _0x223886]]);
      const _0x53735a = _0x1f58b8.createLinearGradient(0, _0xeb8e, 0, _0xeb8e + _0x223886);
      _0x53735a.addColorStop(0, _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.62));
      _0x53735a.addColorStop(0.42, _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.28));
      _0x53735a.addColorStop(1, _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0));
      _0x1f58b8.fillStyle = _0x53735a;
      _0x1f58b8.fill();
      _0x1f58b8.restore();
    })(_0x104ede - 1, _0x44a166 + _0x31feaa - 1, _0x15005d + 2, 10);
    _0x5ded51(_0x104ede, _0x44a166, _0x15005d, _0x31feaa, _0x459f3e, 4);
    const _0x18df96 = _0x459f3e === _0x1e29ba ? _0xc3f98f : _0x1e29ba;
    (function (_0x45594f, _0x462c2f, _0x100ba8, _0xb7c878, _0x3eef0f) {
      _0x1f58b8.save();
      _0x1f58b8.shadowColor = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.42);
      _0x1f58b8.shadowBlur = 2.5;
      _0x1f58b8.shadowOffsetY = 2;
      _0x10914a(_0x45594f, _0x462c2f, _0x100ba8, _0xb7c878, Math.min(2.5, _0xb7c878 * 0.35));
      const _0x740b6e = _0x1f58b8.createLinearGradient(0, _0x462c2f, 0, _0x462c2f + _0xb7c878);
      _0x740b6e.addColorStop(0, _0x1bd3ce.rgba(_0x3eef0f.light, 1));
      _0x740b6e.addColorStop(0.38, _0x1bd3ce.rgba(_0x3eef0f.mid, 1));
      _0x740b6e.addColorStop(1, _0x1bd3ce.rgba(_0x3eef0f.deep, 1));
      _0x1f58b8.fillStyle = _0x740b6e;
      _0x1f58b8.fill();
      _0x1f58b8.restore();
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.82);
      _0x1f58b8.lineWidth = 1.8;
      _0x10914a(_0x45594f, _0x462c2f, _0x100ba8, _0xb7c878, Math.min(2.5, _0xb7c878 * 0.35));
      _0x1f58b8.stroke();
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3eef0f.light, 0.76);
      _0x1f58b8.lineWidth = 1.2;
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x45594f + 3, _0x462c2f + 0.8);
      _0x1f58b8.lineTo(_0x45594f + _0x100ba8 - 3, _0x462c2f + 0.8);
      _0x1f58b8.stroke();
    })(_0x104ede - 3, _0x44a166 - 3, _0x15005d + 6, 5, _0x18df96);
    for (let _0x5ba9f6 = _0x104ede + 12; _0x5ba9f6 < _0x104ede + _0x15005d - 8; _0x5ba9f6 += 12) {
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x459f3e.deep, 0.56);
      _0x1f58b8.lineWidth = 2;
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x5ba9f6, _0x44a166 + 5);
      _0x1f58b8.lineTo(_0x5ba9f6, _0x44a166 + _0x31feaa - 5);
      _0x1f58b8.stroke();
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x459f3e.light, 0.25);
      _0x1f58b8.lineWidth = 1;
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x5ba9f6 + 2, _0x44a166 + 6);
      _0x1f58b8.lineTo(_0x5ba9f6 + 2, _0x44a166 + _0x31feaa - 6);
      _0x1f58b8.stroke();
    }
    const _0x5e07a1 = Math.min(11, _0x15005d * 0.16);
    _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x459f3e.deep, 0.32);
    _0x10914a(_0x104ede + _0x15005d - _0x5e07a1 - 2, _0x44a166 + 4, _0x5e07a1, _0x31feaa - 8, 2);
    _0x1f58b8.fill();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x459f3e.light, 0.35);
    _0x1f58b8.lineWidth = 1;
    _0x1f58b8.stroke();
    const _0x2749d0 = 1 + Math.floor(_0x311845() * 3);
    for (let _0x5190da = 0; _0x5190da < _0x2749d0; _0x5190da += 1) {
      const _0x35b521 = _0x104ede + 8 + _0x311845() * Math.max(5, _0x15005d - 22);
      const _0x304550 = 6 + _0x311845() * 7;
      const _0x3b2004 = 3 + _0x311845() * 3;
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.45);
      _0x1f58b8.fillRect(_0x35b521 - 1, _0x44a166 - _0x3b2004 - 2, _0x304550 + 2, _0x3b2004 + 3);
      const _0x3d44e9 = _0x1f58b8.createLinearGradient(_0x35b521, _0x44a166 - _0x3b2004 - 2, _0x35b521 + _0x304550, _0x44a166);
      _0x3d44e9.addColorStop(0, _0x1bd3ce.rgba(_0x18df96.light, 1));
      _0x3d44e9.addColorStop(1, _0x1bd3ce.rgba(_0x18df96.dark, 1));
      _0x1f58b8.fillStyle = _0x3d44e9;
      _0x1f58b8.fillRect(_0x35b521, _0x44a166 - _0x3b2004 - 2, _0x304550, _0x3b2004 + 1);
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.8);
      _0x1f58b8.lineWidth = 1;
      _0x1f58b8.strokeRect(_0x35b521, _0x44a166 - _0x3b2004 - 2, _0x304550, _0x3b2004 + 1);
    }
    const _0x51cded = Math.max(2, Math.floor(_0x15005d / 28));
    for (let _0x52eeee = 0; _0x52eeee < _0x51cded; _0x52eeee += 1) {
      _0x12b172.push({
        x: _0x104ede + 7 + _0x2ccf7a() * (_0x15005d - 14),
        y: _0x44a166 + 4,
        len: 5 + _0x2ccf7a() * Math.max(5, _0x31feaa - 11),
        alpha: 0.22 + _0x2ccf7a() * 0.28
      });
    }
    for (let _0x3d6402 = 0; _0x3d6402 < 3; _0x3d6402 += 1) {
      _0x3df30c.push({
        x: _0x104ede + 3 + _0x2ccf7a() * (_0x15005d - 8),
        y: _0x44a166 + 3 + _0x2ccf7a() * (_0x31feaa - 7),
        len: 4 + _0x2ccf7a() * 9,
        mat: _0x459f3e
      });
    }
    (function (_0xb4d226, _0x2f7b7e, _0x1d8fe4, _0x301ce0, _0x1c97cc) {
      const _0x4ab4ee = _0x301ce0 >= 27 ? 2 : 1;
      const _0xb20832 = Math.max(4, Math.floor((_0x1d8fe4 - 12) / 8));
      const _0x18ea92 = (_0x1d8fe4 - 14) / _0xb20832;
      const _0xaf3c32 = _0x2f7b7e + 9;
      const _0x436174 = _0x2f7b7e + _0x301ce0 - 9;
      for (let _0x53bcce = 0; _0x53bcce < _0x4ab4ee; _0x53bcce += 1) {
        const _0x2eaffa = _0x4ab4ee === 1 ? _0x2f7b7e + _0x301ce0 * 0.5 - 1.5 : _0x1bd3ce.lerp(_0xaf3c32, _0x436174, _0x53bcce);
        for (let _0x1dbd1a = 0; _0x1dbd1a < _0xb20832; _0x1dbd1a += 1) {
          const _0x1a4d8d = _0x1bd3ce.clamp(_0x18ea92 - 3, 3.5, 5.5);
          const _0x31fdb5 = _0xb4d226 + 7 + _0x1dbd1a * _0x18ea92 + (_0x18ea92 - _0x1a4d8d) * 0.5;
          const _0x4b77fc = (_0x1dbd1a + _0x53bcce * 3) % 7 == 0;
          _0x319419.push({
            x: _0x31fdb5,
            y: _0x2eaffa,
            w: _0x1a4d8d,
            h: 3,
            lit: !_0x4b77fc && _0x419b05() > 0.24,
            strength: _0x1c97cc * (0.78 + _0x419b05() * 0.22),
            clip: [_0xb4d226, _0x2f7b7e, _0x1d8fe4, _0x301ce0]
          });
        }
      }
    })(_0x104ede, _0x44a166, _0x15005d, _0x31feaa, _0x39a281);
  }
  function _0x563ff2(_0x52d040, _0x5dbae4, _0x33aa73, _0x144234, _0x14fad6) {
    _0x986e84(_0x52d040, _0x5dbae4, _0x52d040, _0x5dbae4 + _0x144234, _0x14fad6.dark, 4, _0x14fad6.light);
    _0x986e84(_0x52d040 + _0x33aa73, _0x5dbae4, _0x52d040 + _0x33aa73, _0x5dbae4 + _0x144234, _0x14fad6.dark, 4, _0x14fad6.light);
    _0x986e84(_0x52d040, _0x5dbae4, _0x52d040 + _0x33aa73, _0x5dbae4, _0x14fad6.mid, 4, _0x14fad6.light);
    _0x986e84(_0x52d040, _0x5dbae4 + _0x144234, _0x52d040 + _0x33aa73, _0x5dbae4 + _0x144234, _0x14fad6.dark, 4, _0x14fad6.light);
    const _0x2398e5 = Math.max(2, Math.floor(_0x144234 / 24));
    for (let _0x53e92d = 0; _0x53e92d < _0x2398e5; _0x53e92d += 1) {
      const _0x121fbe = _0x5dbae4 + _0x144234 * _0x53e92d / _0x2398e5;
      const _0x22f47d = _0x5dbae4 + _0x144234 * (_0x53e92d + 1) / _0x2398e5;
      _0x986e84(_0x52d040, _0x121fbe, _0x52d040 + _0x33aa73, _0x22f47d, _0x14fad6.dark, 2.5, _0x14fad6.light);
      _0x986e84(_0x52d040 + _0x33aa73, _0x121fbe, _0x52d040, _0x22f47d, _0x14fad6.dark, 2.5, _0x14fad6.light);
      _0x986e84(_0x52d040, _0x22f47d, _0x52d040 + _0x33aa73, _0x22f47d, _0x14fad6.mid, 2.4, _0x14fad6.light);
    }
  }
  function _0x3c843c(_0x12f2c4, _0x5a945c, _0x460e22, _0xe34c99, _0xac1be9) {
    const _0x424c54 = _0x460e22 - _0x12f2c4;
    const _0x3f7b48 = _0xe34c99 - _0x5a945c;
    const _0x3130a8 = Math.sqrt(_0x424c54 * _0x424c54 + _0x3f7b48 * _0x3f7b48);
    const _0x1d6901 = -_0x3f7b48 / _0x3130a8;
    const _0x113629 = _0x424c54 / _0x3130a8;
    _0x1f58b8.save();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.48);
    _0x1f58b8.lineWidth = 10;
    _0x1f58b8.shadowColor = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.38);
    _0x1f58b8.shadowBlur = 3;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x12f2c4, _0x5a945c + 2);
    _0x1f58b8.lineTo(_0x460e22, _0xe34c99 + 2);
    _0x1f58b8.stroke();
    _0x1f58b8.shadowBlur = 0;
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xac1be9.deep, 1);
    _0x1f58b8.lineWidth = 6;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x12f2c4, _0x5a945c);
    _0x1f58b8.lineTo(_0x460e22, _0xe34c99);
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xac1be9.mid, 1);
    _0x1f58b8.lineWidth = 4;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x12f2c4, _0x5a945c - 1);
    _0x1f58b8.lineTo(_0x460e22, _0xe34c99 - 1);
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xac1be9.light, 0.82);
    _0x1f58b8.lineWidth = 1.4;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x12f2c4, _0x5a945c - 2);
    _0x1f58b8.lineTo(_0x460e22, _0xe34c99 - 2);
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.22);
    _0x1f58b8.lineWidth = 5;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x12f2c4 - _0x1d6901 * 8, _0x5a945c - _0x113629 * 8);
    _0x1f58b8.lineTo(_0x460e22 - _0x1d6901 * 8, _0xe34c99 - _0x113629 * 8);
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xac1be9.light, 0.92);
    _0x1f58b8.lineWidth = 2;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x12f2c4 - _0x1d6901 * 8, _0x5a945c - _0x113629 * 8);
    _0x1f58b8.lineTo(_0x460e22 - _0x1d6901 * 8, _0xe34c99 - _0x113629 * 8);
    _0x1f58b8.stroke();
    const _0xf11fa = Math.max(2, Math.floor(_0x3130a8 / 18));
    for (let _0x551906 = 0; _0x551906 <= _0xf11fa; _0x551906 += 1) {
      const _0x3ca3db = _0x551906 / _0xf11fa;
      const _0x528183 = _0x1bd3ce.lerp(_0x12f2c4, _0x460e22, _0x3ca3db);
      const _0x1a9de7 = _0x1bd3ce.lerp(_0x5a945c, _0xe34c99, _0x3ca3db);
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xac1be9.dark, 0.95);
      _0x1f58b8.lineWidth = 2;
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x528183, _0x1a9de7);
      _0x1f58b8.lineTo(_0x528183 - _0x1d6901 * 8, _0x1a9de7 - _0x113629 * 8);
      _0x1f58b8.stroke();
      if (_0x551906 < _0xf11fa) {
        const _0x27cfa0 = (_0x551906 + 1) / _0xf11fa;
        const _0x2e6239 = _0x1bd3ce.lerp(_0x12f2c4, _0x460e22, _0x27cfa0);
        const _0x41b525 = _0x1bd3ce.lerp(_0x5a945c, _0xe34c99, _0x27cfa0);
        _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0xac1be9.dark, 0.76);
        _0x1f58b8.lineWidth = 2;
        _0x1f58b8.beginPath();
        _0x1f58b8.moveTo(_0x528183, _0x1a9de7 + 3);
        _0x1f58b8.lineTo(_0x2e6239, _0x41b525 + 9);
        _0x1f58b8.stroke();
      }
    }
    _0x1f58b8.restore();
  }
  function _0x4037df(_0x5bf5c0) {
    const _0x517f01 = _0x1f58b8.createLinearGradient(0, _0x5bf5c0.y, 0, _0x5bf5c0.y + _0x5bf5c0.len);
    _0x517f01.addColorStop(0, _0x1bd3ce.rgba(_0x3b3340.rustDeep, _0x5bf5c0.alpha));
    _0x517f01.addColorStop(0.28, _0x1bd3ce.rgba(_0x3b3340.rustDark, _0x5bf5c0.alpha * 0.82));
    _0x517f01.addColorStop(1, _0x1bd3ce.rgba(_0x3b3340.rustDark, 0));
    _0x1f58b8.fillStyle = _0x517f01;
    _0x1f58b8.fillRect(_0x5bf5c0.x, _0x5bf5c0.y, 1.5, _0x5bf5c0.len);
    _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.72);
    _0x1f58b8.beginPath();
    _0x1f58b8.arc(_0x5bf5c0.x + 0.7, _0x5bf5c0.y, 1.35, 0, Math.PI * 2);
    _0x1f58b8.fill();
    _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.hullLight, 0.54);
    _0x1f58b8.beginPath();
    _0x1f58b8.arc(_0x5bf5c0.x + 0.3, _0x5bf5c0.y - 0.35, 0.55, 0, Math.PI * 2);
    _0x1f58b8.fill();
  }
  function _0x348802(_0x2b6715) {
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x2b6715.mat.light, 0.38);
    _0x1f58b8.lineWidth = 1.4;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x2b6715.x, _0x2b6715.y);
    _0x1f58b8.lineTo(_0x2b6715.x + _0x2b6715.len, _0x2b6715.y - 1.2);
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x2b6715.mat.deep, 0.45);
    _0x1f58b8.lineWidth = 1;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x2b6715.x + 1, _0x2b6715.y + 1.4);
    _0x1f58b8.lineTo(_0x2b6715.x + _0x2b6715.len * 0.72, _0x2b6715.y + 0.5);
    _0x1f58b8.stroke();
  }
  function _0xdc517e(_0x522283) {
    if (_0x522283.lit) {
      _0x1f58b8.save();
      _0x10914a(_0x522283.clip[0], _0x522283.clip[1], _0x522283.clip[2], _0x522283.clip[3], 4);
      _0x1f58b8.clip();
      const _0x51906c = _0x1f58b8.createLinearGradient(0, _0x522283.y + _0x522283.h, 0, _0x522283.y + _0x522283.h + 8);
      _0x51906c.addColorStop(0, _0x1bd3ce.rgba(_0x3b3340.warmDim, _0x522283.strength * 0.2));
      _0x51906c.addColorStop(1, _0x1bd3ce.rgba(_0x3b3340.warmDim, 0));
      _0x1f58b8.fillStyle = _0x51906c;
      _0x1f58b8.fillRect(_0x522283.x - 2, _0x522283.y + _0x522283.h, _0x522283.w + 4, 8);
      _0x1f58b8.restore();
    }
    _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.94);
    _0x1f58b8.fillRect(_0x522283.x - 1, _0x522283.y - 1, _0x522283.w + 2, _0x522283.h + 2);
    if (_0x522283.lit) {
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.warmDim, _0x522283.strength * 0.92);
      _0x1f58b8.fillRect(_0x522283.x, _0x522283.y, _0x522283.w, _0x522283.h);
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.warmLight, _0x522283.strength * 0.9);
      _0x1f58b8.fillRect(_0x522283.x + 0.5, _0x522283.y + 0.4, _0x522283.w - 1, 1.1);
    } else {
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.inkSoft, 0.9);
      _0x1f58b8.fillRect(_0x522283.x, _0x522283.y, _0x522283.w, _0x522283.h);
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.hazeLight, 0.18);
      _0x1f58b8.fillRect(_0x522283.x + 0.5, _0x522283.y + 0.4, _0x522283.w - 1, 0.8);
    }
  }
  function _0x468e5e(_0x551b55, _0x45c41d, _0x33198c) {
    const _0x22d718 = _0x1f58b8.createRadialGradient(_0x551b55, _0x45c41d, 0, _0x551b55, _0x45c41d, _0x33198c);
    _0x22d718.addColorStop(0, _0x1bd3ce.rgba(_0x3b3340.warmLight, 0.7));
    _0x22d718.addColorStop(0.3, _0x1bd3ce.rgba(_0x3b3340.warm, 0.25));
    _0x22d718.addColorStop(1, _0x1bd3ce.rgba(_0x3b3340.warmDim, 0));
    _0x1f58b8.fillStyle = _0x22d718;
    _0x1f58b8.beginPath();
    _0x1f58b8.arc(_0x551b55, _0x45c41d, _0x33198c, 0, Math.PI * 2);
    _0x1f58b8.fill();
    _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.86);
    _0x1f58b8.beginPath();
    _0x1f58b8.arc(_0x551b55, _0x45c41d, 3, 0, Math.PI * 2);
    _0x1f58b8.fill();
    _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.warmLight, 1);
    _0x1f58b8.beginPath();
    _0x1f58b8.arc(_0x551b55, _0x45c41d, 1.6, 0, Math.PI * 2);
    _0x1f58b8.fill();
  }
  _0x1f58b8.clearRect(0, 0, _0x1bd3ce.width, _0x1bd3ce.height);
  _0x1f58b8.lineJoin = "round";
  _0x1f58b8.lineCap = "round";
  (function () {
    const _0x401762 = [[0, 231], [42, 223], [87, 226], [132, 220], [180, 224], [228, 218], [276, 222], [324, 216], [375, 220], [421, 214], [466, 221], [512, 218]];
    const _0x5a6bca = _0x401762.concat([[512, 256], [0, 256]]);
    _0x1f58b8.save();
    _0x1f58b8.shadowColor = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.5);
    _0x1f58b8.shadowBlur = 4;
    _0x1f58b8.shadowOffsetY = 2;
    _0x4ecaec(_0x5a6bca);
    const _0x23692e = _0x1f58b8.createLinearGradient(0, 216, 0, 256);
    _0x23692e.addColorStop(0, _0x1bd3ce.rgba(_0x3b3340.hullLight, 1));
    _0x23692e.addColorStop(0.28, _0x1bd3ce.rgba(_0x3b3340.hull, 1));
    _0x23692e.addColorStop(1, _0x1bd3ce.rgba(_0x3b3340.hullDeep, 1));
    _0x1f58b8.fillStyle = _0x23692e;
    _0x1f58b8.fill();
    _0x1f58b8.restore();
    _0x1f58b8.save();
    _0x4ecaec(_0x5a6bca);
    _0x1f58b8.clip();
    const _0x108b58 = [[0, 58, _0x2a1687], [58, 116, _0x1e29ba], [116, 175, _0xc3f98f], [175, 232, _0x1e29ba], [232, 292, _0x550fa2], [292, 351, _0x1e29ba], [351, 414, _0xc3f98f], [414, 470, _0x1e29ba], [470, 512, _0x2a1687]];
    for (let _0x2a3c01 = 0; _0x2a3c01 < _0x108b58.length; _0x2a3c01 += 1) {
      const [_0x3bf299, _0x5e5575, _0x408c2e] = _0x108b58[_0x2a3c01];
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x408c2e.mid, 0.74 + _0xb05e30() * 0.18);
      _0x4ecaec([[_0x3bf299 - 3, 211 + _0xb05e30() * 15], [_0x5e5575 + 3, 211 + _0xb05e30() * 15], [_0x5e5575 + 3, 256], [_0x3bf299 - 3, 256]]);
      _0x1f58b8.fill();
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.74);
      _0x1f58b8.lineWidth = 3;
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x5e5575, 216);
      _0x1f58b8.lineTo(_0x5e5575 - 5 + _0xb05e30() * 10, 256);
      _0x1f58b8.stroke();
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x408c2e.light, 0.28);
      _0x1f58b8.lineWidth = 1;
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x5e5575 + 2, 219);
      _0x1f58b8.lineTo(_0x5e5575 - 3 + _0xb05e30() * 8, 256);
      _0x1f58b8.stroke();
    }
    for (let _0x108837 = 0; _0x108837 < 11; _0x108837 += 1) {
      const _0x27005d = 225 + _0xb05e30() * 27;
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0xb05e30() > 0.55 ? _0x3b3340.hullLight : _0x3b3340.inkSoft, 0.06 + _0xb05e30() * 0.13);
      _0x1f58b8.fillRect(18 + _0xb05e30() * 45, _0x27005d, 390 + _0xb05e30() * 100, 1 + _0xb05e30() * 2);
    }
    _0x1f58b8.restore();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.88);
    _0x1f58b8.lineWidth = 5;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x401762[0][0], _0x401762[0][1] + 2);
    for (let _0x4dc5a9 = 1; _0x4dc5a9 < _0x401762.length; _0x4dc5a9 += 1) {
      _0x1f58b8.lineTo(_0x401762[_0x4dc5a9][0], _0x401762[_0x4dc5a9][1] + 2);
    }
    _0x1f58b8.stroke();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.hullLight, 0.92);
    _0x1f58b8.lineWidth = 2;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(_0x401762[0][0], _0x401762[0][1] - 1);
    for (let _0x3e4834 = 1; _0x3e4834 < _0x401762.length; _0x3e4834 += 1) {
      _0x1f58b8.lineTo(_0x401762[_0x3e4834][0], _0x401762[_0x3e4834][1] - 1);
    }
    _0x1f58b8.stroke();
    for (let _0x22722c = 76; _0x22722c < 449; _0x22722c += 18) {
      _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.9);
      _0x1f58b8.fillRect(_0x22722c - 1, 235, 5, 4);
      if (_0x419b05() > 0.34) {
        _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.warmDim, 0.84);
        _0x1f58b8.fillRect(_0x22722c, 236, 3, 2);
      }
    }
  })();
  _0x13daea([42, 226, 49, 169, 71, 144, 93, 119], _0x3b3340.tealDark, 8, _0x3b3340.tealLight);
  _0x13daea([455, 222, 458, 171, 438, 143, 407, 127], _0x3b3340.tealDark, 8, _0x3b3340.tealLight);
  _0x563ff2(69, 129, 44, 92, _0x2a1687);
  _0x563ff2(146, 98, 42, 121, _0x550fa2);
  _0x563ff2(270, 78, 50, 140, _0x2a1687);
  _0x563ff2(354, 111, 44, 107, _0x550fa2);
  _0x986e84(246, 20, 246, 105, _0x3b3340.hullDark, 3, _0x3b3340.hullLight);
  _0x986e84(237, 46, 255, 46, _0x3b3340.hullDark, 2.5, _0x3b3340.hullLight);
  _0x986e84(232, 61, 260, 61, _0x3b3340.hullDark, 2.5, _0x3b3340.hullLight);
  _0x986e84(239, 80, 253, 80, _0x3b3340.hullDark, 2.5, _0x3b3340.hullLight);
  _0x986e84(246, 20, 240, 34, _0x3b3340.hazeDark, 2, _0x3b3340.hazeLight);
  _0x986e84(246, 20, 252, 34, _0x3b3340.hazeDark, 2, _0x3b3340.hazeLight);
  _0x986e84(285, 37, 285, 92, _0x3b3340.rustDark, 3, _0x3b3340.rustLight);
  _0x986e84(276, 53, 294, 53, _0x3b3340.rustDark, 2.5, _0x3b3340.rustLight);
  _0x986e84(279, 68, 291, 68, _0x3b3340.rustDark, 2.2, _0x3b3340.rustLight);
  _0x986e84(330, 28, 330, 121, _0x3b3340.hazeDark, 3, _0x3b3340.hazeLight);
  _0x986e84(319, 48, 341, 48, _0x3b3340.hazeDark, 2.5, _0x3b3340.hazeLight);
  _0x986e84(322, 67, 338, 67, _0x3b3340.hazeDark, 2.3, _0x3b3340.hazeLight);
  _0x986e84(330, 28, 337, 39, _0x3b3340.hazeDark, 2, _0x3b3340.hazeLight);
  _0x986e84(180, 52, 180, 121, _0x3b3340.hullDark, 3, _0x3b3340.hullLight);
  _0x986e84(168, 73, 190, 73, _0x3b3340.hullDark, 2.5, _0x3b3340.hullLight);
  (function () {
    _0x1f58b8.save();
    _0x1f58b8.shadowColor = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.34);
    _0x1f58b8.shadowBlur = 3;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(164, 67);
    _0x1f58b8.quadraticCurveTo(177, 86, 195, 70);
    _0x1f58b8.quadraticCurveTo(179, 75, 164, 67);
    _0x1f58b8.closePath();
    const _0x2b160b = _0x1f58b8.createLinearGradient(164, 64, 194, 82);
    _0x2b160b.addColorStop(0, _0x1bd3ce.rgba(_0x3b3340.hullLight, 1));
    _0x2b160b.addColorStop(1, _0x1bd3ce.rgba(_0x3b3340.hullDark, 1));
    _0x1f58b8.fillStyle = _0x2b160b;
    _0x1f58b8.fill();
    _0x1f58b8.restore();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.9);
    _0x1f58b8.lineWidth = 2.4;
    _0x1f58b8.stroke();
    _0x986e84(180, 74, 184, 91, _0x3b3340.hullDark, 3, _0x3b3340.hullLight);
    _0x986e84(179, 72, 190, 65, _0x3b3340.hullDark, 2, _0x3b3340.hullLight);
  })();
  _0x563ff2(424, 103, 18, 113, _0x550fa2);
  _0x986e84(418, 104, 483, 84, _0x3b3340.rustDark, 6, _0x3b3340.rustLight);
  _0x986e84(424, 109, 480, 90, _0x3b3340.rust, 3, _0x3b3340.rustLight);
  _0x986e84(433, 101, 449, 93, _0x3b3340.rustDark, 2.2, _0x3b3340.rustLight);
  _0x986e84(448, 94, 463, 88, _0x3b3340.rustDark, 2.2, _0x3b3340.rustLight);
  _0x986e84(463, 89, 478, 84, _0x3b3340.rustDark, 2.2, _0x3b3340.rustLight);
  _0x986e84(476, 88, 476, 137, _0x3b3340.inkSoft, 2, _0x3b3340.hazeLight);
  _0x5ded51(467, 135, 18, 14, _0x1e29ba, 3);
  _0x3c843c(43, 177, 114, 172, _0x2a1687);
  _0x3c843c(111, 139, 198, 132, _0x550fa2);
  _0x3c843c(281, 109, 379, 103, _0x550fa2);
  _0x3b5a91(51, 184, 77, 34, _0x2a1687, 0.68);
  _0x3b5a91(119, 180, 88, 40, _0x1e29ba, 0.92);
  _0x3b5a91(200, 184, 94, 37, _0xc3f98f, 0.96);
  _0x3b5a91(286, 177, 90, 43, _0x1e29ba, 0.94);
  _0x3b5a91(369, 184, 79, 35, _0x550fa2, 0.74);
  _0x3b5a91(88, 148, 78, 35, _0xc3f98f, 0.88);
  _0x3b5a91(153, 143, 92, 40, _0x1e29ba, 1);
  _0x3b5a91(235, 150, 87, 34, _0xc3f98f, 0.92);
  _0x3b5a91(312, 145, 104, 39, _0x1e29ba, 0.96);
  _0x3b5a91(134, 116, 77, 34, _0x1e29ba, 0.92);
  _0x3b5a91(199, 107, 96, 39, _0xc3f98f, 1);
  _0x3b5a91(286, 116, 78, 34, _0x1e29ba, 0.94);
  _0x3b5a91(349, 124, 62, 28, _0x550fa2, 0.74);
  _0x3b5a91(176, 86, 78, 29, _0xc3f98f, 0.88);
  _0x3b5a91(245, 78, 78, 38, _0x1e29ba, 0.96);
  _0x3b5a91(214, 58, 73, 30, _0xc3f98f, 0.92);
  (function () {
    _0x986e84(376, 147, 370, 214, _0x3b3340.hullDark, 5, _0x3b3340.hullLight);
    _0x986e84(413, 147, 421, 215, _0x3b3340.hullDark, 5, _0x3b3340.hullLight);
    _0x986e84(376, 163, 417, 207, _0x3b3340.hullDark, 3, _0x3b3340.hullLight);
    _0x986e84(414, 163, 374, 207, _0x3b3340.hullDark, 3, _0x3b3340.hullLight);
    _0x1f58b8.save();
    _0x1f58b8.shadowColor = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.48);
    _0x1f58b8.shadowBlur = 4;
    _0x1f58b8.beginPath();
    _0x1f58b8.moveTo(371, 118);
    _0x1f58b8.quadraticCurveTo(394, 108, 418, 118);
    _0x1f58b8.lineTo(418, 148);
    _0x1f58b8.quadraticCurveTo(394, 158, 371, 148);
    _0x1f58b8.closePath();
    const _0x14892f = _0x1f58b8.createLinearGradient(371, 0, 418, 0);
    _0x14892f.addColorStop(0, _0x1bd3ce.rgba(_0x3b3340.hullDark, 1));
    _0x14892f.addColorStop(0.34, _0x1bd3ce.rgba(_0x3b3340.hullLight, 1));
    _0x14892f.addColorStop(0.68, _0x1bd3ce.rgba(_0x3b3340.hull, 1));
    _0x14892f.addColorStop(1, _0x1bd3ce.rgba(_0x3b3340.hullDeep, 1));
    _0x1f58b8.fillStyle = _0x14892f;
    _0x1f58b8.fill();
    _0x1f58b8.restore();
    _0x1f58b8.save();
    _0x1f58b8.beginPath();
    _0x1f58b8.ellipse(394.5, 118, 23.5, 7, 0, 0, Math.PI * 2);
    const _0x52ce66 = _0x1f58b8.createLinearGradient(374, 112, 415, 124);
    _0x52ce66.addColorStop(0, _0x1bd3ce.rgba(_0x3b3340.hullLight, 1));
    _0x52ce66.addColorStop(1, _0x1bd3ce.rgba(_0x3b3340.hullDark, 1));
    _0x1f58b8.fillStyle = _0x52ce66;
    _0x1f58b8.fill();
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.86);
    _0x1f58b8.lineWidth = 2;
    _0x1f58b8.stroke();
    _0x1f58b8.restore();
    for (const _0x22b7d7 of [377, 393, 410]) {
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.rustDark, 0.9);
      _0x1f58b8.lineWidth = 3;
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x22b7d7, 116);
      _0x1f58b8.lineTo(_0x22b7d7, 150);
      _0x1f58b8.stroke();
      _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.rustLight, 0.45);
      _0x1f58b8.lineWidth = 1;
      _0x1f58b8.beginPath();
      _0x1f58b8.moveTo(_0x22b7d7 - 1, 117);
      _0x1f58b8.lineTo(_0x22b7d7 - 1, 149);
      _0x1f58b8.stroke();
      _0x12b172.push({
        x: _0x22b7d7,
        y: 123,
        len: 20 + _0x2ccf7a() * 12,
        alpha: 0.3 + _0x2ccf7a() * 0.2
      });
    }
    _0x1f58b8.strokeStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.9);
    _0x1f58b8.lineWidth = 2.4;
    _0x1f58b8.beginPath();
    _0x1f58b8.ellipse(394.5, 148, 23.5, 6, 0, 0, Math.PI);
    _0x1f58b8.stroke();
    _0x13daea([418, 137, 438, 139, 436, 173, 451, 176], _0x3b3340.rustDark, 5, _0x3b3340.rustLight);
  })();
  _0x3c843c(31, 202, 126, 192, _0x1e29ba);
  _0x3c843c(117, 140, 207, 132, _0xc3f98f);
  _0x3c843c(291, 171, 460, 160, _0x1e29ba);
  _0x3c843c(70, 216, 458, 208, _0xc3f98f);
  _0x3c843c(162, 105, 221, 96, _0x550fa2);
  const _0x448c7c = _0x1f58b8.getImageData(0, 0, _0x1bd3ce.width, _0x1bd3ce.height).data;
  const _0x543294 = _0x1bd3ce.hexToRgb(_0x3b3340.inkSoft);
  const _0x116a29 = {
    octaves: 3,
    gain: 0.52,
    lacunarity: 2,
    period: 79,
    seed: 1259
  };
  const _0x267340 = {
    octaves: 2,
    gain: 0.5,
    lacunarity: 2,
    period: 53,
    seed: 7127
  };
  _0x1bd3ce.field((_0x402b4e, _0x5c9c64) => {
    if (_0x448c7c[(_0x5c9c64 * _0x1bd3ce.width + _0x402b4e) * 4 + 3] < 224) {
      return null;
    }
    const _0x1c3b23 = _0x1bd3ce.fbm(_0x402b4e * 0.034, _0x5c9c64 * 0.29, _0x116a29);
    const _0x51d57d = _0x1bd3ce.ridge(_0x402b4e * 0.025, _0x5c9c64 * 0.62, _0x267340);
    const _0x5a7c28 = Math.max(0, _0x1c3b23 - 0.43) + Math.max(0, _0x51d57d - 0.68);
    if (_0x5a7c28 <= 0.035) {
      return null;
    }
    const _0x4b5fd4 = _0x1bd3ce.clamp(2 + Math.floor(_0x5a7c28 * 19), 2, 15);
    return [_0x543294.r, _0x543294.g, _0x543294.b, _0x4b5fd4];
  }, {
    blend: "over"
  });
  for (const _0x47305c of _0x3df30c) {
    _0x348802(_0x47305c);
  }
  for (const _0x59c190 of _0x12b172) {
    _0x4037df(_0x59c190);
  }
  for (const _0xe8dee4 of _0x319419) {
    _0xdc517e(_0xe8dee4);
  }
  for (let _0x19a123 = 84; _0x19a123 < 440; _0x19a123 += 22) {
    const _0x65df07 = _0x419b05() > 0.3;
    _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x3b3340.inkDeep, 0.92);
    _0x1f58b8.fillRect(_0x19a123 - 1, 242, 6, 4);
    _0x1f58b8.fillStyle = _0x1bd3ce.rgba(_0x65df07 ? _0x3b3340.warmDim : _0x3b3340.inkSoft, _0x65df07 ? 0.88 : 0.92);
    _0x1f58b8.fillRect(_0x19a123, 243, 4, 2);
  }
  _0x468e5e(246, 19, 9);
  _0x468e5e(330, 28, 6);
  _0x468e5e(483, 84, 5);
  const _0x460835 = {
    period: 19,
    seed: 9413
  };
  _0x1bd3ce.mask((_0x1e7119, _0x39f775) => {
    let _0x26e06c = _0x1bd3ce.smoothstep(_0x1bd3ce.clamp(_0x1e7119 / 74, 0, 1)) * _0x1bd3ce.smoothstep(_0x1bd3ce.clamp((511 - _0x1e7119) / 74, 0, 1));
    if (_0x26e06c < 0.999 && _0x26e06c > 0) {
      const _0x271e82 = _0x1bd3ce.noise(_0x1e7119, _0x39f775, _0x460835) - 0.5;
      _0x26e06c = _0x1bd3ce.clamp(_0x26e06c + _0x271e82 * (2 / 255) * Math.min(1, _0x26e06c * 8), 0, 1);
    }
    return _0x26e06c;
  });
}