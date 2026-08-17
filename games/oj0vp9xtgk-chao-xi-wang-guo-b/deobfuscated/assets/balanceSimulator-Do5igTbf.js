const e = j;
(function () {
  const _0x56e7d0 = j;
  const _0x45346a = z();
  while (true) {
    try {
      if (parseInt(_0x56e7d0(284)) / 1 * (parseInt(_0x56e7d0(340)) / 2) + parseInt(_0x56e7d0(280)) / 3 * (-parseInt(_0x56e7d0(327)) / 4) + -parseInt(_0x56e7d0(308)) / 5 + -parseInt(_0x56e7d0(369)) / 6 * (-parseInt(_0x56e7d0(450)) / 7) + parseInt(_0x56e7d0(348)) / 8 * (parseInt(_0x56e7d0(416)) / 9) + parseInt(_0x56e7d0(279)) / 10 * (-parseInt(_0x56e7d0(428)) / 11) + parseInt(_0x56e7d0(318)) / 12 === 877869) {
        break;
      }
      _0x45346a.push(_0x45346a.shift());
    } catch (_0x284a23) {
      _0x45346a.push(_0x45346a.shift());
    }
  }
})();
import { L as _0x9afa81, B as _0xe41358, g as _0x7ac792, c as _0x228608, a as _0x3035c5, e as _0xf1568c } from "./routeVariants-B_KSv526.js";
const s = Object.freeze({
  x: 0,
  y: 100,
  width: 960,
  height: 540
});
const l = new WeakMap();
const u = Object[e(387)]({
  standard: Object.freeze({
    id: "standard",
    label: e(350),
    jitter: 0.12,
    reserve: 30,
    replacementThreshold: 1.65,
    midWaveFirstDecisionMs: 1200,
    midWaveDecisionIntervalMs: 1500,
    midWaveDismantleProgress: 0.42,
    occupancyTier1: 0.6,
    occupancyTier2: 0.8,
    proactiveReplacement: false,
    lookaheadWeight: 0
  }),
  rush: Object[e(387)]({
    id: e(446),
    label: "快速铺场",
    jitter: 0.08,
    reserve: 0,
    replacementThreshold: 1.8,
    midWaveFirstDecisionMs: 600,
    midWaveDecisionIntervalMs: 800,
    midWaveDismantleProgress: 0.25,
    occupancyTier1: 0.85,
    occupancyTier2: 0.96,
    proactiveReplacement: false,
    lookaheadWeight: 0.1
  }),
  upgrade: Object.freeze({
    id: e(447),
    label: "关键位升级",
    jitter: 0.04,
    reserve: 40,
    replacementThreshold: 1.38,
    midWaveFirstDecisionMs: 900,
    midWaveDecisionIntervalMs: 1100,
    midWaveDismantleProgress: 0.32,
    occupancyTier1: 0.55,
    occupancyTier2: 0.75,
    proactiveReplacement: true,
    criticalSpotThreshold: 0.72,
    minimumUpgradeWave: 2,
    lookaheadWeight: 0.25
  }),
  adaptive: Object.freeze({
    id: e(405),
    label: e(302),
    jitter: 0.02,
    reserve: 20,
    replacementThreshold: 1.28,
    midWaveFirstDecisionMs: 800,
    midWaveDecisionIntervalMs: 1000,
    midWaveDismantleProgress: 0.28,
    occupancyTier1: 0.52,
    occupancyTier2: 0.72,
    proactiveReplacement: true,
    criticalSpotThreshold: 0.58,
    minimumUpgradeWave: 2,
    lookaheadWeight: 0.4
  }),
  expert: Object.freeze({
    id: e(383),
    label: "优化代理",
    jitter: 0.03,
    reserve: 0,
    replacementThreshold: 1.35,
    midWaveFirstDecisionMs: 800,
    midWaveDecisionIntervalMs: 1000,
    midWaveDismantleProgress: 0.32,
    occupancyTier1: 0.6,
    occupancyTier2: 0.8,
    proactiveReplacement: true,
    criticalSpotThreshold: 0.65,
    minimumUpgradeWave: 2,
    lookaheadWeight: 0.3
  })
});
const c = Object.freeze(["standard", "rush", "upgrade", "adaptive"]);
const v = e(405);
function m(_0x3861cb, _0x154496) {
  return Math[e(342)](_0x154496.x - _0x3861cb.x, _0x154496.y - _0x3861cb.y);
}
function d(_0x41625e) {
  const _0x5cca89 = e;
  const _0x31f9a3 = _0x41625e.data;
  const _0x2e9a7e = l[_0x5cca89(334)](_0x31f9a3);
  if (_0x2e9a7e) {
    return _0x2e9a7e;
  }
  const _0x29b8a2 = Math[_0x5cca89(338)](s[_0x5cca89(355)] / _0x31f9a3.sourceWidth, s.height / _0x31f9a3.sourceHeight);
  const _0x142915 = _0x31f9a3.sourceWidth * _0x29b8a2;
  const _0x14d298 = _0x31f9a3[_0x5cca89(320)] * _0x29b8a2;
  const _0x418597 = s.x + (s[_0x5cca89(355)] - _0x142915) / 2;
  const _0x4621ba = s.y + (s[_0x5cca89(398)] - _0x14d298) / 2;
  const _0x55f2e0 = _0x142915;
  const _0x441923 = _0x14d298;
  const _0x4aa979 = (_0x27b39d, _0x18a067) => ({
    x: _0x418597 + _0x27b39d / _0x31f9a3[_0x5cca89(332)] * _0x55f2e0,
    y: _0x4621ba + _0x18a067 / _0x31f9a3.sourceHeight * _0x441923
  });
  const _0x385dab = {
    paths: _0x228608(_0x31f9a3)[_0x5cca89(431)](_0x5ba577 => {
      const _0x3298a0 = _0x5cca89;
      const _0x5cb3df = _0x5ba577[_0x3298a0(437)].map(_0x594803 => _0x4aa979((_0x594803[_0x3298a0(374)] + 0.5) * _0x31f9a3[_0x3298a0(315)], (_0x594803.row + 0.5) * _0x31f9a3[_0x3298a0(315)]));
      const _0x371456 = [];
      let _0x32b43a = 0;
      for (let _0x8ae2a4 = 1; _0x8ae2a4 < _0x5cb3df.length; _0x8ae2a4 += 1) {
        const _0x2b59d9 = m(_0x5cb3df[_0x8ae2a4 - 1], _0x5cb3df[_0x8ae2a4]);
        _0x371456.push({
          start: _0x5cb3df[_0x8ae2a4 - 1],
          end: _0x5cb3df[_0x8ae2a4],
          startDistance: _0x32b43a,
          length: _0x2b59d9
        });
        _0x32b43a += _0x2b59d9;
      }
      return {
        id: _0x5ba577.id,
        entryIndex: _0x5ba577.entryIndex,
        variantIndex: _0x5ba577.variantIndex,
        points: _0x5cb3df,
        segments: _0x371456,
        length: _0x32b43a
      };
    }),
    spots: _0x31f9a3[_0x5cca89(426)].map((_0xa83435, _0x2813d6) => ({
      ..._0x4aa979(_0xa83435.x, _0xa83435.y),
      index: _0x2813d6
    }))
  };
  l.set(_0x31f9a3, _0x385dab);
  return _0x385dab;
}
function h(_0x3791b9, _0xce54b2) {
  const _0x17555f = e;
  if (_0xce54b2 >= _0x3791b9.length) {
    return _0x3791b9.points.at(-1);
  }
  const _0x4dec8b = _0x3791b9[_0x17555f(317)][_0x17555f(400)](_0x4bafd5 => _0xce54b2 <= _0x4bafd5[_0x17555f(371)] + _0x4bafd5[_0x17555f(439)]) ?? _0x3791b9.segments.at(-1);
  const _0x15c5e1 = _0x4dec8b.length ? (_0xce54b2 - _0x4dec8b.startDistance) / _0x4dec8b[_0x17555f(439)] : 0;
  return {
    x: _0x4dec8b.start.x + (_0x4dec8b[_0x17555f(441)].x - _0x4dec8b.start.x) * _0x15c5e1,
    y: _0x4dec8b.start.y + (_0x4dec8b[_0x17555f(441)].y - _0x4dec8b[_0x17555f(301)].y) * _0x15c5e1
  };
}
function g(_0x1146f3, _0x9678cc, _0x59e453) {
  const _0x2f4c2 = e;
  const _0x3e67f8 = Math[_0x2f4c2(378)](16, Math.ceil(_0x1146f3[_0x2f4c2(439)] / 18));
  let _0x43191b = 0;
  for (let _0x4bca00 = 0; _0x4bca00 <= _0x3e67f8; _0x4bca00 += 1) {
    if (m(h(_0x1146f3, _0x1146f3[_0x2f4c2(439)] * _0x4bca00 / _0x3e67f8), _0x9678cc) <= _0x59e453) {
      _0x43191b += 1;
    }
  }
  return _0x43191b / (_0x3e67f8 + 1);
}
function p(_0x2f86d9, _0x3ee2b4, _0x352e71, _0x24e5b9) {
  const _0x480bc8 = e;
  let _0x11f1c0 = _0x2f86d9[_0x480bc8(325)].get(_0x3ee2b4);
  if (!_0x11f1c0) {
    _0x11f1c0 = new WeakMap();
    _0x2f86d9[_0x480bc8(325)][_0x480bc8(291)](_0x3ee2b4, _0x11f1c0);
  }
  let _0x475f5a = _0x11f1c0[_0x480bc8(334)](_0x352e71);
  if (!_0x475f5a) {
    _0x475f5a = new Map();
    _0x11f1c0[_0x480bc8(291)](_0x352e71, _0x475f5a);
  }
  if (_0x475f5a.has(_0x24e5b9.index)) {
    return _0x475f5a[_0x480bc8(334)](_0x24e5b9[_0x480bc8(414)]);
  }
  const _0x190e9f = (_0x2f86d9.geometry.paths[_0x480bc8(358)]((_0x4d6808, _0x288deb) => _0x4d6808 + g(_0x288deb, _0x24e5b9, _0x352e71[_0x480bc8(443)]), 0) / _0x2f86d9[_0x480bc8(316)][_0x480bc8(286)][_0x480bc8(439)] + (_0x2f86d9[_0x480bc8(316)].paths[_0x480bc8(439)] > 1 ? Math[_0x480bc8(338)](..._0x2f86d9[_0x480bc8(316)][_0x480bc8(286)].map(_0x15ea69 => g(_0x15ea69, _0x24e5b9, _0x352e71.range))) * 0.45 : 0)) * function (_0x42b5c1, _0x28f528, _0x445955) {
    const _0x32e6d5 = _0x480bc8;
    const _0x251d00 = function (_0x5579d3, _0x3532f4) {
      const _0x225732 = j;
      return _0x5579d3.types[_0x225732(358)]((_0x33b2ad, _0x4a0777) => _0x33b2ad + _0x3532f4[_0x225732(389)][_0x4a0777].armor, 0) / _0x5579d3[_0x225732(307)][_0x225732(439)];
    }(_0x28f528, _0x445955) * (_0x42b5c1.armorPiercing ? _0x445955.combat[_0x32e6d5(362)] : 1);
    let _0x45071e = _0x42b5c1.damage * (1 - _0x251d00) * 1000 / _0x42b5c1[_0x32e6d5(425)];
    const _0x50c4d5 = Math[_0x32e6d5(338)](2, Math.max(0, 900 / _0x28f528.delay - 0.45));
    if (_0x42b5c1.splashRadius) {
      _0x45071e *= 1 + _0x445955[_0x32e6d5(337)][_0x32e6d5(420)] * _0x50c4d5;
    }
    if (_0x42b5c1.chainCount) {
      _0x45071e *= 1 + _0x445955[_0x32e6d5(337)].chainDamageMultiplier * Math[_0x32e6d5(338)](_0x42b5c1[_0x32e6d5(394)], _0x50c4d5);
    }
    if (_0x42b5c1[_0x32e6d5(423)]) {
      _0x45071e *= 1 + (1 - _0x42b5c1.slowFactor) * 0.48;
    }
    return _0x45071e;
  }(_0x352e71, _0x3ee2b4, _0x2f86d9[_0x480bc8(283)]);
  _0x475f5a.set(_0x24e5b9[_0x480bc8(414)], _0x190e9f);
  return _0x190e9f;
}
function f(_0x3155ab, _0x239d36, _0x2bb955, _0x2d83b1, _0x5f1629) {
  const _0x33bc7f = e;
  const _0x1cf053 = p(_0x3155ab, _0x239d36, _0x2bb955, _0x2d83b1);
  const _0x5b6cb2 = _0x3155ab.levelWaves[_0x3155ab[_0x33bc7f(297)]];
  const _0x30de42 = _0x5b6cb2 ? _0x5f1629[_0x33bc7f(306)] ?? 0 : 0;
  if (_0x30de42) {
    return _0x1cf053 * (1 - _0x30de42) + p(_0x3155ab, _0x5b6cb2, _0x2bb955, _0x2d83b1) * _0x30de42;
  } else {
    return _0x1cf053;
  }
}
function w(_0x18f74e, _0x4371b1, _0x46ced9, _0x4618c5) {
  const _0x5cdc03 = e;
  const _0x20a5c6 = new Set(_0x18f74e.towers.map(_0x167fdd => _0x167fdd.spotIndex));
  const _0x5288da = [];
  const _0x2f8618 = [...new Set(Object.values(_0x18f74e[_0x5cdc03(283)][_0x5cdc03(435)]).map(_0x1c17c4 => _0x1c17c4.price))].sort((_0x29b979, _0x3ec593) => _0x29b979 - _0x3ec593);
  const _0x2bc8a7 = _0x20a5c6.size / Math.max(1, _0x18f74e[_0x5cdc03(316)][_0x5cdc03(406)][_0x5cdc03(439)]);
  const _0x27fcc3 = _0x2bc8a7 >= (_0x4618c5.occupancyTier2 ?? 0.8) ? _0x2f8618[Math.min(2, _0x2f8618.length - 1)] : _0x2bc8a7 >= (_0x4618c5[_0x5cdc03(287)] ?? 0.6) ? _0x2f8618[Math[_0x5cdc03(338)](1, _0x2f8618[_0x5cdc03(439)] - 1)] : _0x2f8618[0];
  Object.entries(_0x18f74e.balance[_0x5cdc03(435)]).forEach(([_0x10fb7e, _0x1b5c00]) => {
    const _0x53de01 = _0x5cdc03;
    if (!(_0x1b5c00[_0x53de01(300)] < _0x27fcc3) && !(_0x1b5c00.price > _0x18f74e[_0x53de01(402)] - _0x4618c5.reserve)) {
      _0x18f74e.geometry[_0x53de01(406)].forEach(_0xe6049 => {
        const _0xb41268 = _0x53de01;
        if (_0x20a5c6.has(_0xe6049.index)) {
          return;
        }
        const _0x79d01b = 1 / (1 + _0x18f74e[_0xb41268(435)].filter(_0x473fbb => _0x473fbb.id === _0x10fb7e)[_0xb41268(439)] * 0.08);
        const _0x2b155a = 1 + (_0x46ced9() - 0.5) * _0x4618c5.jitter;
        _0x5288da.push({
          towerId: _0x10fb7e,
          definition: _0x1b5c00,
          spotIndex: _0xe6049.index,
          score: f(_0x18f74e, _0x4371b1, _0x1b5c00, _0xe6049, _0x4618c5) / _0x1b5c00.price * _0x79d01b * _0x2b155a
        });
      });
    }
  });
  _0x5288da.sort((_0x58d270, _0x30c952) => _0x30c952[_0x5cdc03(418)] - _0x58d270[_0x5cdc03(418)]);
  return _0x5288da[0] ?? null;
}
function M(_0x3b653a, _0x29ad70, _0x24495c = {}, _0x376efc = {}) {
  const _0x1274eb = e;
  _0x3b653a[_0x1274eb(402)] -= _0x29ad70.definition.price;
  _0x3b653a[_0x1274eb(429)] += _0x29ad70[_0x1274eb(290)][_0x1274eb(300)];
  _0x3b653a[_0x1274eb(435)].push({
    id: _0x29ad70[_0x1274eb(357)],
    purchasePrice: _0x29ad70.definition.price,
    builtWave: _0x3b653a[_0x1274eb(297)],
    spotIndex: _0x29ad70.spotIndex,
    ..._0x3b653a[_0x1274eb(316)].spots[_0x29ad70.spotIndex],
    nextShotAt: 0,
    damage: 0,
    kills: 0,
    shots: 0
  });
  const _0x5702bd = {
    type: "build",
    wave: _0x3b653a[_0x1274eb(297)],
    towerId: _0x29ad70[_0x1274eb(357)],
    spotIndex: _0x29ad70.spotIndex,
    phase: _0x24495c[_0x1274eb(299)] ?? _0x1274eb(411),
    atMs: Math.max(0, Math.round(_0x24495c.atMs ?? 0)),
    ..._0x376efc
  };
  _0x3b653a.placements.push(_0x5702bd);
  _0x3b653a[_0x1274eb(396)][_0x1274eb(403)](_0x5702bd);
}
function C(_0x1c2483, _0x42fd8f, _0x45077c, _0x1ef8a5 = {}) {
  const _0x46eec8 = e;
  if (_0x1c2483[_0x46eec8(297)] <= 1 || !_0x1c2483.towers.length) {
    return 0;
  }
  const _0x50c532 = _0x1c2483.towers[_0x46eec8(439)] >= _0x1c2483[_0x46eec8(316)].spots[_0x46eec8(439)];
  const _0x436577 = [];
  _0x1c2483[_0x46eec8(435)][_0x46eec8(395)](_0x222e19 => {
    const _0x45c6d4 = _0x46eec8;
    if (_0x222e19.builtWave >= _0x1c2483[_0x45c6d4(297)] || _0x222e19.lastEvaluatedWave === _0x1c2483.waveNumber) {
      return;
    }
    const _0x38749d = _0x1c2483.geometry[_0x45c6d4(406)][_0x222e19.spotIndex];
    const _0x5b53e1 = _0x1c2483[_0x45c6d4(283)].towers[_0x222e19.id];
    const _0x70e2b9 = Math.max(0.0001, f(_0x1c2483, _0x42fd8f, _0x5b53e1, _0x38749d, _0x45077c));
    const _0x345821 = Math[_0x45c6d4(378)](..._0x1c2483.geometry[_0x45c6d4(406)].map(_0x58a712 => f(_0x1c2483, _0x42fd8f, _0x5b53e1, _0x58a712, _0x45077c)));
    const _0x3e40ba = _0x70e2b9 / Math.max(0.0001, _0x345821);
    const _0x5283a0 = _0xf1568c(_0x222e19[_0x45c6d4(375)], _0x1c2483[_0x45c6d4(283)].economy.towerRefundRate);
    Object.entries(_0x1c2483[_0x45c6d4(283)].towers)[_0x45c6d4(395)](([_0x10f619, _0x128693]) => {
      const _0x1b5310 = _0x45c6d4;
      if (_0x10f619 === _0x222e19.id || _0x128693.price <= _0x222e19.purchasePrice || _0x128693.price > _0x1c2483[_0x1b5310(402)] + _0x5283a0 - _0x45077c.reserve) {
        return;
      }
      const _0x19e020 = _0x128693.price > _0x1c2483.gold - _0x45077c[_0x1b5310(346)];
      const _0x434f1e = _0x45077c.proactiveReplacement && _0x1c2483.waveNumber >= (_0x45077c[_0x1b5310(388)] ?? 2) && _0x3e40ba >= (_0x45077c.criticalSpotThreshold ?? 1);
      if (!_0x50c532 && !_0x19e020 && !_0x434f1e) {
        return;
      }
      const _0x596bbe = f(_0x1c2483, _0x42fd8f, _0x128693, _0x38749d, _0x45077c);
      const _0x43cf80 = _0x596bbe / _0x70e2b9;
      if (_0x43cf80 < _0x45077c.replacementThreshold) {
        return;
      }
      const _0x4f428d = Math.max(1, _0x128693.price - _0x5283a0);
      const _0x2d152 = Math.max(0, _0x596bbe - _0x70e2b9) / _0x4f428d;
      _0x436577.push({
        tower: _0x222e19,
        towerId: _0x10f619,
        definition: _0x128693,
        ratio: _0x43cf80,
        refund: _0x5283a0,
        criticality: _0x3e40ba,
        score: _0x43cf80 + _0x3e40ba * 0.3 + Math[_0x1b5310(338)](1, _0x2d152) * 0.2,
        proactive: _0x434f1e && !_0x50c532 && !_0x19e020
      });
    });
  });
  _0x436577[_0x46eec8(293)]((_0x37d88f, _0xd77a60) => _0xd77a60[_0x46eec8(418)] - _0x37d88f.score);
  const _0x3b9c7b = _0x436577[0];
  if (!_0x3b9c7b) {
    return 0;
  }
  _0x3b9c7b.tower[_0x46eec8(409)] = _0x1c2483[_0x46eec8(297)];
  _0x1c2483.towers = _0x1c2483[_0x46eec8(435)].filter(_0x35d168 => _0x35d168 !== _0x3b9c7b[_0x46eec8(273)]);
  _0x1c2483[_0x46eec8(402)] += _0x3b9c7b[_0x46eec8(434)];
  _0x1c2483[_0x46eec8(427)] += _0x3b9c7b[_0x46eec8(434)];
  const _0x4d7802 = {
    type: _0x46eec8(349),
    wave: _0x1c2483.waveNumber,
    towerId: _0x3b9c7b.tower.id,
    spotIndex: _0x3b9c7b.tower.spotIndex,
    refund: _0x3b9c7b.refund,
    phase: _0x1ef8a5[_0x46eec8(299)] ?? _0x46eec8(411),
    atMs: Math[_0x46eec8(378)](0, Math.round(_0x1ef8a5[_0x46eec8(359)] ?? 0)),
    reason: _0x3b9c7b[_0x46eec8(292)] ? "proactive-upgrade" : _0x46eec8(356)
  };
  _0x1c2483.dismantles.push(_0x4d7802);
  _0x1c2483[_0x46eec8(396)][_0x46eec8(403)](_0x4d7802);
  M(_0x1c2483, {
    towerId: _0x3b9c7b[_0x46eec8(357)],
    definition: _0x3b9c7b.definition,
    spotIndex: _0x3b9c7b[_0x46eec8(273)][_0x46eec8(321)]
  }, _0x1ef8a5, {
    reason: _0x3b9c7b.proactive ? _0x46eec8(436) : _0x46eec8(356),
    replaces: _0x3b9c7b.tower.id
  });
  return 1;
}
function y(_0x51138f, _0x4082e9, _0x2b8bca, _0x28e570, _0x9feac9 = {}) {
  const _0x540a5a = e;
  let _0x4af8c1 = 0;
  const _0x5eeee9 = Math[_0x540a5a(338)](...Object[_0x540a5a(407)](_0x51138f.balance[_0x540a5a(435)]).map(_0x49f553 => _0x49f553[_0x540a5a(300)]));
  while (_0x51138f[_0x540a5a(402)] >= _0x5eeee9 && _0x51138f[_0x540a5a(435)].length < _0x51138f[_0x540a5a(316)][_0x540a5a(406)].length) {
    const _0x1c733a = w(_0x51138f, _0x4082e9, _0x2b8bca, _0x28e570);
    if (!_0x1c733a) {
      break;
    }
    M(_0x51138f, _0x1c733a, _0x9feac9);
    _0x4af8c1 += 1;
  }
  return _0x4af8c1;
}
function B(_0xc33185, _0x51f798, _0x9e5ee3, _0x14cee2, _0x451848) {
  const _0x1f8969 = e;
  const _0x303099 = _0xc33185.balance[_0x1f8969(435)][_0x51f798.id];
  const _0x5ddc0f = (_0x1d26d8, _0x1dc242, _0xc595a0 = false) => {
    const _0x5be118 = _0x1f8969;
    const _0x356570 = _0xc595a0 || _0x1d26d8[_0x5be118(352)] ? _0xc33185.balance[_0x5be118(337)].armorPiercingArmorMultiplier : 1;
    const _0x21f65b = _0x1d26d8[_0x5be118(290)].armor * _0x356570;
    return Math.max(_0xc33185.balance.combat[_0x5be118(367)], Math.round(_0x1dc242 * (1 - _0x21f65b)));
  };
  const _0x1db7f0 = _0x5ddc0f(_0x9e5ee3, _0x303099.damage, _0x303099[_0x1f8969(413)]);
  const _0x35886e = (_0x45cb35, _0x16a655) => {
    const _0x1132c8 = _0x1f8969;
    if (!_0x45cb35[_0x1132c8(440)]) {
      return;
    }
    const _0x27c458 = Math[_0x1132c8(338)](_0x45cb35.health, _0x16a655);
    _0x45cb35.health -= _0x16a655;
    _0x51f798[_0x1132c8(361)] += _0x27c458;
    _0xc33185[_0x1132c8(433)] += _0x27c458;
    if (_0x45cb35.health <= 0) {
      _0x45cb35[_0x1132c8(440)] = false;
      _0x45cb35.resolvedAt = _0x451848;
      _0x45cb35.resolution = _0x1132c8(276);
      _0x51f798[_0x1132c8(397)] += 1;
      _0xc33185.kills += 1;
      _0xc33185[_0x1132c8(402)] += _0x45cb35[_0x1132c8(290)].reward;
    }
  };
  _0x35886e(_0x9e5ee3, _0x1db7f0);
  if (_0x303099.armorPiercing && _0x9e5ee3[_0x1f8969(290)][_0x1f8969(326)] >= 0.15) {
    _0x9e5ee3.armorBroken = true;
  }
  if (_0x303099[_0x1f8969(423)] && _0x9e5ee3.active) {
    _0x9e5ee3[_0x1f8969(423)] = _0x303099.slowFactor;
    _0x9e5ee3[_0x1f8969(313)] = _0x451848 + _0x303099[_0x1f8969(410)];
  }
  if (_0x303099[_0x1f8969(275)]) {
    _0x14cee2[_0x1f8969(408)](_0x15d0fc => _0x15d0fc[_0x1f8969(440)] && _0x15d0fc !== _0x9e5ee3 && m(_0x15d0fc.position, _0x9e5ee3[_0x1f8969(304)]) <= _0x303099.splashRadius)[_0x1f8969(395)](_0x2cbb74 => _0x35886e(_0x2cbb74, _0x5ddc0f(_0x2cbb74, _0x303099.damage * _0xc33185.balance[_0x1f8969(337)][_0x1f8969(420)])));
  }
  if (_0x303099[_0x1f8969(394)]) {
    _0x14cee2.filter(_0xf39a0 => _0xf39a0[_0x1f8969(440)] && _0xf39a0 !== _0x9e5ee3 && m(_0xf39a0.position, _0x9e5ee3[_0x1f8969(304)]) <= _0x303099[_0x1f8969(312)])[_0x1f8969(293)]((_0x321c0c, _0x368969) => m(_0x321c0c[_0x1f8969(304)], _0x9e5ee3[_0x1f8969(304)]) - m(_0x368969.position, _0x9e5ee3[_0x1f8969(304)]))[_0x1f8969(330)](0, _0x303099.chainCount).forEach(_0x1f7fce => _0x35886e(_0x1f7fce, _0x5ddc0f(_0x1f7fce, _0x303099.damage * _0xc33185[_0x1f8969(283)].combat.chainDamageMultiplier)));
  }
}
function D(_0x4ecbda, _0x119b82, _0x4122a5, _0x47f62f, _0x3768f0) {
  const _0x350e53 = e;
  var _0x2bee25;
  var _0x4d02e9;
  const _0x3391fa = [];
  let _0x5e42f9 = 0;
  let _0x3e9160 = 0;
  let _0x72e76c = 0;
  let _0x22e07e = _0x3768f0.midWaveFirstDecisionMs;
  let _0x289aad = false;
  let _0x239a9a = 0;
  let _0x545e5c = 0;
  for (_0x4ecbda[_0x350e53(435)][_0x350e53(395)](_0x146aff => {
    _0x146aff.nextShotAt = 0;
  }); _0x5e42f9 <= 180000 && (_0x72e76c < _0x119b82[_0x350e53(384)] || _0x3391fa.some(_0x4ffc82 => _0x4ffc82.active));) {
    while (_0x72e76c < _0x119b82.count && _0x5e42f9 >= _0x3e9160) {
      const _0x44712b = _0x119b82[_0x350e53(307)][_0x72e76c % _0x119b82.types.length];
      const _0x2fbed7 = _0x4122a5[_0x72e76c % _0x4122a5[_0x350e53(439)]];
      const _0x1916d9 = _0x4ecbda.balance[_0x350e53(389)][_0x44712b];
      const _0x486b17 = _0x4ecbda[_0x350e53(316)].paths[_0x2fbed7];
      const _0x2ec007 = ((_0x2bee25 = _0x4ecbda[_0x350e53(376)].enemyHealthScales) == null ? undefined : _0x2bee25[_0x44712b]) ?? _0x4ecbda[_0x350e53(376)].enemyHealthScale;
      _0x3391fa[_0x350e53(403)]({
        type: _0x44712b,
        definition: _0x1916d9,
        health: Math[_0x350e53(328)](_0x1916d9[_0x350e53(412)] * _0x2ec007),
        speed: _0x1916d9.speed * _0x4ecbda.level[_0x350e53(381)],
        path: _0x486b17,
        travelled: 0,
        position: _0x486b17[_0x350e53(288)][0],
        active: true,
        armorBroken: false,
        spawnedAt: _0x5e42f9,
        resolvedAt: null,
        resolution: null,
        slowUntil: 0,
        slowFactor: 1
      });
      _0x72e76c += 1;
      _0x3e9160 += _0x119b82[_0x350e53(373)];
    }
    _0x3391fa[_0x350e53(395)](_0x177c9b => {
      const _0x2afc43 = _0x350e53;
      if (!_0x177c9b[_0x2afc43(440)]) {
        return;
      }
      const _0x5f0c3a = _0x5e42f9 < _0x177c9b.slowUntil ? _0x177c9b[_0x2afc43(423)] : 1;
      _0x177c9b[_0x2afc43(451)] += _0x177c9b[_0x2afc43(336)] * _0x5f0c3a * 100 / 1000;
      _0x177c9b.position = h(_0x177c9b.path, _0x177c9b.travelled);
      if (_0x177c9b[_0x2afc43(451)] >= _0x177c9b.path[_0x2afc43(439)]) {
        _0x177c9b.active = false;
        _0x177c9b[_0x2afc43(331)] = _0x5e42f9;
        _0x177c9b[_0x2afc43(377)] = _0x2afc43(324);
        _0x4ecbda.leaks += 1;
        _0x4ecbda[_0x2afc43(419)] += _0x177c9b.definition.coreDamage;
        _0x4ecbda.coreHealth = Math[_0x2afc43(378)](0, _0x4ecbda.coreHealth - _0x177c9b.definition[_0x2afc43(419)]);
      }
    });
    _0x4ecbda.towers.forEach(_0x2548fb => {
      const _0x227ede = _0x350e53;
      if (_0x5e42f9 < _0x2548fb[_0x227ede(343)]) {
        return;
      }
      const _0x1cc22c = _0x4ecbda[_0x227ede(283)].towers[_0x2548fb.id];
      const _0x446125 = _0x3391fa.filter(_0x4783b5 => _0x4783b5[_0x227ede(440)] && m(_0x2548fb, _0x4783b5.position) <= _0x1cc22c.range).sort((_0x195aa5, _0x31f06c) => _0x31f06c[_0x227ede(451)] / _0x31f06c.path[_0x227ede(439)] - _0x195aa5.travelled / _0x195aa5[_0x227ede(365)][_0x227ede(439)])[0];
      if (_0x446125) {
        _0x2548fb[_0x227ede(343)] = _0x5e42f9 + _0x1cc22c.cooldown;
        _0x2548fb[_0x227ede(390)] += 1;
        B(_0x4ecbda, _0x2548fb, _0x446125, _0x3391fa, _0x5e42f9);
      }
    });
    if (_0x5e42f9 >= _0x22e07e && _0x3391fa[_0x350e53(333)](_0x408102 => _0x408102[_0x350e53(440)])) {
      const _0x15c3e8 = {
        phase: _0x350e53(341),
        atMs: _0x5e42f9
      };
      const _0x259f67 = _0x72e76c / Math[_0x350e53(378)](1, _0x119b82[_0x350e53(384)]);
      if (!_0x289aad && _0x259f67 >= _0x3768f0[_0x350e53(399)]) {
        _0x545e5c += C(_0x4ecbda, _0x119b82, _0x3768f0, _0x15c3e8);
        _0x289aad = true;
      }
      _0x239a9a += y(_0x4ecbda, _0x119b82, _0x47f62f, _0x3768f0, _0x15c3e8);
      _0x22e07e += _0x3768f0[_0x350e53(285)];
    }
    if (_0x4ecbda[_0x350e53(281)] <= 0) {
      break;
    }
    _0x5e42f9 += 100;
  }
  const _0x84eace = _0x3391fa[_0x350e53(408)](_0x46e989 => _0x46e989.definition.boss);
  const _0x56503d = _0x4122a5[_0x350e53(431)]((_0x1bd641, _0x5a7dd7) => ({
    routeIndex: _0x1bd641,
    count: Math[_0x350e53(378)](0, Math.ceil((_0x119b82[_0x350e53(384)] - _0x5a7dd7) / _0x4122a5[_0x350e53(439)]))
  }));
  return {
    durationMs: _0x5e42f9,
    bossSurvivalMs: _0x84eace[_0x350e53(439)] ? Math.max(..._0x84eace[_0x350e53(431)](_0x2f44c5 => (_0x2f44c5.resolvedAt ?? _0x5e42f9) - _0x2f44c5[_0x350e53(364)])) : null,
    bossResolution: ((_0x4d02e9 = _0x84eace[0]) == null ? undefined : _0x4d02e9.resolution) ?? null,
    midWavePurchases: _0x239a9a,
    midWaveDismantles: _0x545e5c,
    routeCounts: _0x56503d,
    routeImbalance: _0x56503d[_0x350e53(439)] ? Math.max(..._0x56503d.map(_0x347106 => _0x347106[_0x350e53(384)])) - Math.min(..._0x56503d.map(_0x4524b8 => _0x4524b8.count)) : 0
  };
}
function z() {
  const _0x1e3091 = ["yxzLCMfNzunVCMvsyxrPBW", "yxzLCMfNzur1CMf0Aw9Utxm", "zwfYBhLtAw5NBgvfBNrYEvDHDMvdB3vUDa", "y2HHAw5sywrPDxm", "C2XVD1vUDgLS", "CM91DgvuCMf2zxjZywXqyxnZ", "BMf2q2vSBfnPEMu", "z2vVBwv0CNK", "C2vNBwvUDhm", "mtG5mti2otzoCfLwDMq", "Dg9ju09tDhjPBMC", "C291CMnLsgvPz2H0", "C3bVDeLUzgv4", "y2HHAw5eyw1Hz2vnDwX0AxbSAwvY", "CgfZCW", "BgvHA2vK", "Dg93zxjwywX1zunHy2HL", "yxjTB3i", "mJuYtvrLsxzi", "CM91BMq", "zgLZBwfUDgXLq291BNq", "C2XPy2u", "CMvZB2X2zwrbDa", "C291CMnLv2LKDgG", "C29Tzq", "z2v0", "BwLKv2f2zurPC21HBNrSzxm", "C3bLzwq", "y29TyMf0", "BwLU", "ChjVzMLSzxm", "nZG4ndi0uejJC2nI", "BwLKlxDHDMu", "AhLWB3q", "BMv4DfnOB3rbDa", "zhvYyxrPB25nCW", "Bwf4Aw11Bur1CMf0Aw9Utxm", "CMvZzxj2zq", "zw50CMLLCW", "ndK4ntmYmgritLjtCW", "zgLZBwfUDgXL", "56IZ5ygL5OMP5BYG", "yM9ZC1n1CNzPDMfStxm", "yxjTB3jcCM9Rzw4", "C2vLza", "zNjVBq", "D2LKDgG", "CMvWBgfJzw1LBNq", "Dg93zxjjza", "CMvKDwnL", "yxrnCW", "C3rYzw5NDgG", "zgfTywDL", "yxjTB3jqAwvYy2LUz0fYBw9YtxvSDgLWBgLLCG", "CMvHC29U", "C3bHD25Lzef0", "Cgf0Aa", "yxzLCMfNzvDPBLjHDgu", "BwLUAw11BurHBwfNzq", "zgvMyxvSDfn0yxj0Aw5Nr29Sza", "mJe2otaZnMvlrKPuCq", "C3bHD25Z", "C3rHCNreAxn0yw5Jzq", "Dg90ywXeDxjHDgLVBK1Z", "zgvSyxK", "y29SDw1U", "ChvYy2HHC2vqCMLJzq", "Bgv2zwW", "CMvZB2X1DgLVBG", "Bwf4", "BwLUAw11BvrVD2vYuhjPy2vtChjLywrsyxrPBW", "BxvSDgLfBNrYEvnPBxvSDgfUzw91C0zYB21xyxzL", "zw5LBxLtCgvLzfnJywXL", "zgLMzMLJDwX0EvnJB3jL", "zxHWzxj0", "y291BNq", "CMvZDwX0CW", "CgXHy2vTzw50CW", "zNjLzxPL", "BwLUAw11BvvWz3jHzgvxyxzL", "zw5LBwLLCW", "C2HVDhm", "BwLUAw11BuvHCMX5v2f2zu1PzefJDgLVBLjHDgu", "BwLUAw11BujVC3ntDxj2AxzHBe1Z", "zwnVBM9TEq", "y2HHAw5dB3vUDa", "zM9YrwfJAa", "ywn0Aw9UCW", "A2LSBhm", "AgvPz2H0", "BwLKv2f2zurPC21HBNrSzvbYB2DYzxnZ", "zMLUza", "zMXVB3i", "z29Sza", "ChvZAa", "yNvPBgq", "ywrHChrPDMu", "C3bVDhm", "DMfSDwvZ", "zMLSDgvY", "BgfZDev2ywX1yxrLzfDHDMu", "C2XVD0r1CMf0Aw9U", "ChjLlxDHDMu", "AgvHBhrO", "yxjTB3jqAwvYy2LUzW", "Aw5KzxG", "yxzLCMfNzuXLywTZ", "ovLZwxj5ra", "yxzLCMfNzujVC3ntDxj2AxzHBe1Z", "C2nVCMu", "y29YzurHBwfNzq", "C3bSyxnOrgfTywDLtxvSDgLWBgLLCG", "Bgv2zwXjza", "Aw5PDgLHBenVCMvizwfSDgG", "C2XVD0zHy3rVCG", "DhLWzq", "y29VBgrVD24", "Dg93zxjtCg90CW", "CMvMDw5KCW", "mJG2DvjoyNDs", "C3bLBNq", "CM91DgvjBwjHBgfUy2u", "BwfW", "Aw11Ba", "Dg90ywXeyw1Hz2u", "CMvMDw5K", "Dg93zxjZ", "ChjVywn0AxzLlxvWz3jHzgu", "y2vSBhm", "C3rHBMrHCMrZ", "BgvUz3rO", "ywn0AxzL", "zw5K", "zw50CNLjBMrLEa", "CMfUz2u", "zMXHDe1HCa", "D2f2zunSzwfYqMfZzuDVBgq", "CNvZAa", "DxbNCMfKzq", "ChjVzMLSzq", "Bwf4Aw11BujVC3nnAw5PB25jBNrLCNzHBe1Z", "n0Lpq1PLqW", "DhjHDMvSBgvK", "Dg93zxi", "CM91DgvwyxjPyw50CW", "C3bSyxnOuMfKAxvZ", "A2LSBgvK", "C3rHCNrPBMDhB2XK", "BwLKv2f2zurPC21HBNrSzunVDw50", "mJqXmdCWAhj4t1jI", "mJy5mtnRCfzAq3i", "y29YzuHLywX0Aa", "Bwf4Aw11BujVC3nmzxzLBer1CMf0Aw9Utxm", "yMfSyw5Jzq", "mvjRqNnbyW", "BwLKv2f2zurLy2LZAw9Usw50zxj2ywXnCW", "Cgf0Ahm", "B2nJDxbHBMn5vgLLCJe", "Cg9PBNrZ", "zxzLCNK", "zgvMAw5PDgLVBG", "C2v0", "ChjVywn0AxzL", "C29YDa", "BwLKv2f2zuj1AwXKq291BNq", "BwLKv2f2zufJDgLVBLjHDgu", "CM91DgvZ", "D2f2zu51BwjLCG", "BwLUAw11BujVC3nnAw5PB25dB3vUDa", "CgHHC2u", "ChjPy2u", "C3rHCNq", "6iEQ6ycc5BQu562w55wL", "yxzLCMfNzurHBwfNzuvMzMLJAwvUy3K", "Cg9ZAxrPB24", "yM9ZCW", "Bg9VA2fOzwfKv2vPz2H0", "DhLWzxm", "ndqYntu4nwXWBKrxzq"];
  return (z = function () {
    return _0x1e3091;
  })();
}
function x(_0x575575, _0x372dab, _0x527f12) {
  const _0x2ca71a = e;
  return [...new Set(_0x372dab.routes ?? _0x575575[_0x2ca71a(286)].map(_0x301894 => _0x301894[_0x2ca71a(442)]))][_0x2ca71a(431)](_0x4d95b7 => {
    const _0x344f60 = _0x2ca71a;
    var _0x215cc7;
    const _0x422785 = _0x575575[_0x344f60(286)][_0x344f60(408)](_0x16dd9b => _0x16dd9b.entryIndex === _0x4d95b7);
    const _0x42c2fb = Number((_0x215cc7 = _0x372dab[_0x344f60(274)]) == null ? undefined : _0x215cc7[_0x4d95b7]);
    return _0x422785.find(_0x1ba93f => _0x1ba93f.variantIndex === _0x42c2fb) ?? _0x422785[Math[_0x344f60(401)](_0x527f12() * _0x422785[_0x344f60(439)])];
  })[_0x2ca71a(408)](Boolean).map(_0x28f9ce => _0x575575.paths.indexOf(_0x28f9ce));
}
function L(_0x17b246, _0x3349c2) {
  const _0x3dbe67 = e;
  let _0x389ee1 = _0x17b246[_0x3dbe67(361)] * 1000 / _0x17b246.cooldown;
  if (_0x17b246[_0x3dbe67(413)]) {
    _0x389ee1 *= 1.15;
  }
  if (_0x17b246.splashRadius) {
    _0x389ee1 *= 1 + _0x3349c2[_0x3dbe67(337)][_0x3dbe67(420)];
  }
  if (_0x17b246.chainCount) {
    _0x389ee1 *= 1 + _0x3349c2[_0x3dbe67(337)][_0x3dbe67(322)] * _0x17b246.chainCount;
  }
  if (_0x17b246.slowFactor) {
    _0x389ee1 *= 1 + (1 - _0x17b246.slowFactor) * 0.48;
  }
  return _0x389ee1;
}
function W(_0xe8b7cd, _0x33d0bc = {}) {
  const _0x4474e9 = e;
  var _0x244900;
  const _0x3be05a = _0x33d0bc[_0x4474e9(283)] ?? _0xe41358;
  const _0x572b2a = _0x3be05a.levels[_0xe8b7cd.id] ?? _0xe8b7cd;
  const _0x504859 = {
    ..._0xe8b7cd,
    ..._0x572b2a
  };
  const _0x23c996 = _0x33d0bc.waves ?? _0x7ac792(_0xe8b7cd.id, _0x3be05a);
  const _0x3c6ae1 = _0x33d0bc[_0x4474e9(353)] ?? 1;
  const _0x4abf51 = u[_0x33d0bc[_0x4474e9(448)]] ?? u[v];
  const _0x1b9a3a = function (_0x1185df) {
    let _0x45a35b = _0x1185df >>> 0;
    return () => {
      _0x45a35b += 1831565813;
      let _0x7ff2ba = _0x45a35b;
      _0x7ff2ba = Math[j(432)](_0x7ff2ba ^ _0x7ff2ba >>> 15, _0x7ff2ba | 1);
      _0x7ff2ba ^= _0x7ff2ba + Math.imul(_0x7ff2ba ^ _0x7ff2ba >>> 7, _0x7ff2ba | 61);
      return ((_0x7ff2ba ^ _0x7ff2ba >>> 14) >>> 0) / 4294967296;
    };
  }(_0x3c6ae1);
  const _0xedcf03 = {
    level: _0x504859,
    levelWaves: _0x23c996,
    balance: _0x3be05a,
    geometry: d(_0x504859),
    towerValueCache: new WeakMap(),
    gold: _0x504859[_0x4474e9(277)] ?? _0x3be05a.economy[_0x4474e9(368)],
    coreHealth: _0x504859.coreHealth ?? _0x3be05a.core.defaultHealth,
    initialCoreHealth: _0x504859[_0x4474e9(281)] ?? _0x3be05a.core.defaultHealth,
    towers: [],
    placements: [],
    dismantles: [],
    actions: [],
    spent: 0,
    refunds: 0,
    kills: 0,
    leaks: 0,
    coreDamage: 0,
    totalDamage: 0,
    waveNumber: 0
  };
  const _0x5b82a2 = [];
  for (let _0x40adf5 = 0; _0x40adf5 < _0x23c996.length; _0x40adf5 += 1) {
    const _0x37cce4 = _0x23c996[_0x40adf5];
    _0xedcf03.waveNumber = _0x40adf5 + 1;
    const _0x32b37c = _0xedcf03.gold;
    const _0x4e1f23 = C(_0xedcf03, _0x37cce4, _0x4abf51);
    const _0x4dcff9 = y(_0xedcf03, _0x37cce4, _0x1b9a3a, _0x4abf51);
    const _0x4eec11 = _0xedcf03[_0x4474e9(281)];
    const _0x1f3b2e = _0xedcf03[_0x4474e9(397)];
    const _0x46757c = _0xedcf03.leaks;
    const _0x3c6a01 = D(_0xedcf03, _0x37cce4, x(_0xedcf03[_0x4474e9(316)], _0x37cce4, _0x1b9a3a), _0x1b9a3a, _0x4abf51);
    if (_0xedcf03[_0x4474e9(281)] > 0) {
      _0xedcf03.gold += _0x3be05a[_0x4474e9(393)][_0x4474e9(445)] + (_0x40adf5 + 1) * _0x3be05a.economy.waveClearGoldPerWave;
    }
    _0x5b82a2.push({
      wave: _0x40adf5 + 1,
      coreRemaining: _0xedcf03[_0x4474e9(281)],
      coreLost: _0x4eec11 - _0xedcf03[_0x4474e9(281)],
      kills: _0xedcf03.kills - _0x1f3b2e,
      leaks: _0xedcf03.leaks - _0x46757c,
      purchases: _0x4dcff9 + _0x3c6a01.midWavePurchases,
      dismantles: _0x4e1f23 + _0x3c6a01[_0x4474e9(335)],
      preWavePurchases: _0x4dcff9,
      preWaveDismantles: _0x4e1f23,
      goldBefore: _0x32b37c,
      goldAfter: _0xedcf03.gold,
      ..._0x3c6a01
    });
    if (_0xedcf03[_0x4474e9(281)] <= 0) {
      break;
    }
  }
  const _0x2f6f9d = _0xedcf03.coreHealth > 0 && _0x5b82a2[_0x4474e9(439)] === _0x23c996.length;
  const _0x319e02 = _0x5b82a2[_0x4474e9(358)]((_0x51d2eb, _0x1c7106) => _0x51d2eb + _0x1c7106[_0x4474e9(344)], 0) + Math[_0x4474e9(378)](0, _0x5b82a2.length - 1) * _0x3be05a.waveTiming.minimumNextWaveDelayMs;
  const _0x294821 = _0x5b82a2[_0x4474e9(408)](_0x1a21bf => _0x1a21bf[_0x4474e9(351)] !== null);
  const _0x1b77d1 = _0xedcf03[_0x4474e9(281)] / _0xedcf03[_0x4474e9(422)];
  const _0x5ac884 = Math[_0x4474e9(328)](Math.min(100, Math[_0x4474e9(378)](0, (1 - _0x1b77d1) * 55 + _0xedcf03.leaks * 4 + (_0x2f6f9d ? 15 : 65) - Math[_0x4474e9(338)](15, _0xedcf03[_0x4474e9(402)] / 120))));
  return {
    levelId: _0xe8b7cd.id,
    levelName: _0xe8b7cd.name,
    seed: _0x3c6ae1,
    profile: _0x4abf51.id,
    victory: _0x2f6f9d,
    wavesCleared: _0x5b82a2[_0x4474e9(408)](_0x228989 => _0x228989.coreRemaining > 0)[_0x4474e9(439)],
    coreRemaining: _0xedcf03.coreHealth,
    initialCoreHealth: _0xedcf03[_0x4474e9(422)],
    coreRatio: _0x1b77d1,
    kills: _0xedcf03.kills,
    leaks: _0xedcf03.leaks,
    goldRemaining: _0xedcf03.gold,
    goldSpent: _0xedcf03[_0x4474e9(429)],
    goldRefunded: _0xedcf03[_0x4474e9(427)],
    netGoldSpent: _0xedcf03.spent - _0xedcf03[_0x4474e9(427)],
    totalDamage: _0xedcf03[_0x4474e9(433)],
    towerCount: _0xedcf03.towers[_0x4474e9(439)],
    placements: _0xedcf03[_0x4474e9(386)],
    dismantles: _0xedcf03.dismantles,
    actions: _0xedcf03[_0x4474e9(396)],
    dismantleCount: _0xedcf03.dismantles[_0x4474e9(439)],
    midWaveBuildCount: _0xedcf03[_0x4474e9(396)].filter(_0x17642f => _0x17642f[_0x4474e9(299)] === "mid-wave" && _0x4474e9(404) === _0x17642f.type)[_0x4474e9(439)],
    midWaveDismantleCount: _0xedcf03.actions.filter(_0xe4c0 => _0xe4c0.phase === "mid-wave" && _0xe4c0[_0x4474e9(424)] === "dismantle").length,
    proactiveUpgradeCount: _0xedcf03[_0x4474e9(396)][_0x4474e9(408)](_0x3dff6d => _0x3dff6d.type === "dismantle" && _0x3dff6d[_0x4474e9(363)] === "proactive-upgrade")[_0x4474e9(439)],
    towerStats: _0xedcf03[_0x4474e9(435)].map(({
      id: _0x5497be,
      spotIndex: _0x36cad1,
      damage: _0x4f3206,
      kills: _0x3890aa,
      shots: _0x1c4703
    }) => ({
      id: _0x5497be,
      spotIndex: _0x36cad1,
      damage: _0x4f3206,
      kills: _0x3890aa,
      shots: _0x1c4703
    })),
    waves: _0x5b82a2,
    totalDurationMs: _0x319e02,
    bossSurvivalMs: _0x294821[_0x4474e9(439)] ? Math.max(..._0x294821[_0x4474e9(431)](_0x17da24 => _0x17da24[_0x4474e9(351)])) : null,
    bossResolution: ((_0x244900 = _0x294821[0]) == null ? undefined : _0x244900.bossResolution) ?? null,
    maximumRouteImbalance: Math.max(0, ..._0x5b82a2.map(_0x564a23 => _0x564a23[_0x4474e9(430)])),
    difficultyScore: _0x5ac884
  };
}
function S(_0x3b1559, _0x19b9b7) {
  const _0x3cb07a = [..._0x3b1559].sort((_0x4dce24, _0x321c7a) => _0x4dce24 - _0x321c7a);
  return _0x3cb07a[Math.min(_0x3cb07a.length - 1, Math.floor((_0x3cb07a.length - 1) * _0x19b9b7))];
}
function b(_0x1a155a = {}) {
  const _0x2397e7 = e;
  const _0x34627d = Math[_0x2397e7(378)](1, Math.min(100, _0x1a155a.trials ?? 20));
  const _0x48a804 = _0x1a155a.profile ?? v;
  const _0x4fb791 = _0x1a155a.levels ?? _0x9afa81;
  const _0x377242 = (_0x1a155a.balance ?? _0xe41358).experienceTargets ?? {};
  const _0x25dfc2 = _0x4fb791[_0x2397e7(431)]((_0x3fef33, _0x444eaf) => {
    const _0x1a07d9 = _0x2397e7;
    const _0x37a34e = _0x1a155a.balance ?? _0xe41358;
    const _0x567613 = _0x7ac792(_0x3fef33.id, _0x37a34e);
    const _0x12885a = _0x567613.some(_0x19923b => _0x19923b[_0x1a07d9(307)].some(_0x41e68f => {
      const _0x5972b8 = _0x1a07d9;
      var _0x2b93da;
      if ((_0x2b93da = _0x37a34e[_0x5972b8(389)][_0x41e68f]) == null) {
        return undefined;
      } else {
        return _0x2b93da[_0x5972b8(305)];
      }
    }));
    const _0x40a59d = Array[_0x1a07d9(354)]({
      length: _0x34627d
    }, (_0x4badf7, _0x574088) => W(_0x3fef33, {
      seed: (_0x1a155a[_0x1a07d9(353)] ?? 7301) + _0x444eaf * 1009 + _0x574088 * 17,
      profile: _0x48a804,
      balance: _0x1a155a.balance ?? _0xe41358
    }));
    const _0x1f8580 = _0x40a59d.filter(_0x4380a4 => _0x4380a4.victory).length;
    const _0x3fe49a = _0x40a59d.map(_0x52b679 => _0x52b679.coreRatio);
    const _0x238824 = _0x40a59d[_0x1a07d9(431)](_0x5bbb3c => _0x5bbb3c.difficultyScore);
    const _0x199834 = _0x40a59d.filter(_0x4075f5 => _0x4075f5.bossSurvivalMs !== null);
    const _0x3ff2f6 = _0x40a59d.filter(_0x17ff1e => _0x17ff1e.midWaveBuildCount + _0x17ff1e.midWaveDismantleCount > 0);
    const _0x46be48 = _0x40a59d.filter(_0x5db34d => _0x5db34d.actions[_0x1a07d9(333)](_0x16f17a => _0x1a07d9(341) === _0x16f17a.phase && _0x16f17a.wave <= 2));
    const _0x516bd8 = [..._0x40a59d].sort((_0x408ed8, _0x46815e) => _0x408ed8[_0x1a07d9(382)] - _0x46815e.difficultyScore)[Math.floor(_0x40a59d[_0x1a07d9(439)] / 2)];
    const _0x1ad569 = function (_0xa64e12, _0x977eef, _0x1603fd, _0x49e9c9) {
      const _0x4d7831 = e;
      var _0x2e8779;
      var _0x3bf43d;
      const _0x14cd33 = ((_0x2e8779 = _0xa64e12.data[_0x4d7831(370)]) == null ? undefined : _0x2e8779[_0x4d7831(439)]) ?? _0xa64e12.data[_0x4d7831(296)].length;
      const _0x48d74d = _0x49e9c9[_0x4d7831(311)] ?? 2;
      const _0x3425fe = _0x49e9c9[_0x4d7831(380)] ?? _0x48d74d + 1;
      const _0x3b90a3 = _0x12ff66 => [...new Set(_0x12ff66[_0x4d7831(296)] ?? [])][_0x4d7831(408)](_0x4ee225 => _0x4ee225 >= 0 && _0x4ee225 < _0x14cd33);
      const _0x3b933b = _0x977eef.slice(0, _0x48d74d)[_0x4d7831(431)](_0x3b90a3);
      const _0x43046d = _0x977eef[_0x4d7831(330)](_0x3425fe - 1).map(_0x3b90a3);
      const _0x5379c0 = _0x14cd33 === 2;
      const _0x2153a8 = !_0x5379c0 || _0x3b933b[_0x4d7831(439)] === _0x48d74d && _0x3b933b.every(_0x57c963 => _0x57c963[_0x4d7831(439)] === 1);
      const _0x50fa1b = !_0x5379c0 || _0x2153a8 && _0x3b933b.every((_0x4fa09c, _0x21e21c) => _0x21e21c === 0 || _0x4fa09c[0] !== _0x3b933b[_0x21e21c - 1][0]);
      const _0x135724 = !_0x5379c0 || _0x43046d[_0x4d7831(289)](_0x235145 => _0x235145.length === _0x14cd33 && _0x235145.every(_0x2c83d2 => _0x2c83d2 === 0 || _0x2c83d2 === 1));
      const _0x614319 = _0x977eef[_0x4d7831(408)](_0x53c0e9 => _0x53c0e9[_0x4d7831(307)].some(_0xd4bf9 => {
        const _0x5f2055 = _0x4d7831;
        var _0x15bd78;
        if ((_0x15bd78 = _0x1603fd.enemies[_0xd4bf9]) == null) {
          return undefined;
        } else {
          return _0x15bd78[_0x5f2055(305)];
        }
      }))[_0x4d7831(431)]((_0x509400, _0x33ba2a) => {
        const _0x1b41fb = _0x4d7831;
        const _0x574dfc = function (_0x1c56a4) {
          const _0x476404 = j;
          return Array.from({
            length: _0x1c56a4[_0x476404(384)]
          }, (_0x13603a, _0x39054) => _0x1c56a4.types[_0x39054 % _0x1c56a4.types[_0x476404(439)]]);
        }(_0x509400);
        const _0x1caf30 = _0x574dfc.filter(_0x39b912 => {
          var _0x3523f0;
          if ((_0x3523f0 = _0x1603fd[j(389)][_0x39b912]) == null) {
            return undefined;
          } else {
            return _0x3523f0.boss;
          }
        })[_0x1b41fb(439)];
        const _0x477c79 = _0x574dfc[_0x1b41fb(439)] - _0x1caf30;
        return {
          bossWave: _0x977eef.indexOf(_0x509400) + 1,
          bossCount: _0x1caf30,
          minionCount: _0x477c79,
          minionIntervalMs: _0x509400.delay,
          pass: _0x1caf30 === 1 && _0x477c79 >= (_0x49e9c9[_0x1b41fb(298)] ?? 8) && _0x509400[_0x1b41fb(373)] <= (_0x49e9c9[_0x1b41fb(449)] ?? 8000),
          sequence: _0x33ba2a
        };
      });
      const _0x53ce12 = _0x228608(_0xa64e12.data).map(_0x2c8d14 => _0x2c8d14.id);
      const _0x5d655a = [...new Set(_0x977eef[_0x4d7831(444)](_0x3ade97 => _0x3035c5(_0xa64e12.data, _0x3ade97).map(_0x3aa25d => _0x3aa25d.id)))];
      const _0x218db8 = _0x53ce12[_0x4d7831(408)](_0x54f960 => !_0x5d655a.includes(_0x54f960));
      const _0x4c82fd = ((_0x3bf43d = _0x49e9c9.requiredWaveCounts) == null ? undefined : _0x3bf43d[_0xa64e12.id]) ?? null;
      return {
        entryCount: _0x14cd33,
        earlyRoutes: _0x3b933b,
        laterRoutes: _0x43046d,
        earlySingleEntryPass: _0x2153a8,
        earlyAlternationPass: _0x50fa1b,
        laterSimultaneousPass: _0x135724,
        entryPatternPass: _0x2153a8 && _0x50fa1b && _0x135724,
        bossSupport: _0x614319,
        bossSupportPass: _0x614319.every(_0x532502 => _0x532502[_0x4d7831(323)]),
        availableRouteVariants: _0x53ce12,
        traversedRouteVariants: _0x5d655a,
        missingRouteVariants: _0x218db8,
        routeTraversalPass: _0x218db8.length === 0,
        expectedWaveCount: _0x4c82fd,
        actualWaveCount: _0x977eef.length,
        waveCountPass: _0x4c82fd === null || _0x977eef[_0x4d7831(439)] === _0x4c82fd
      };
    }(_0x3fef33, _0x567613, _0x37a34e, _0x377242);
    return {
      levelId: _0x3fef33.id,
      levelName: _0x3fef33.name,
      hasConfiguredBoss: _0x12885a,
      trials: _0x34627d,
      winRate: _0x1f8580 / _0x34627d,
      averageCoreRatio: _0x3fe49a.reduce((_0x57d836, _0x44e500) => _0x57d836 + _0x44e500, 0) / _0x34627d,
      p10CoreRatio: S(_0x3fe49a, 0.1),
      averageLeaks: _0x40a59d.reduce((_0x2152c5, _0x5f51da) => _0x2152c5 + _0x5f51da.leaks, 0) / _0x34627d,
      averageGoldRemaining: _0x40a59d[_0x1a07d9(358)]((_0x1df1c9, _0x5cb2f7) => _0x1df1c9 + _0x5cb2f7.goldRemaining, 0) / _0x34627d,
      averageTowers: _0x40a59d[_0x1a07d9(358)]((_0x189759, _0x5b041d) => _0x189759 + _0x5b041d.towerCount, 0) / _0x34627d,
      averageDismantles: _0x40a59d[_0x1a07d9(358)]((_0x306e98, _0x4523e2) => _0x306e98 + _0x4523e2[_0x1a07d9(329)], 0) / _0x34627d,
      averageProactiveUpgrades: _0x40a59d[_0x1a07d9(358)]((_0x40bccc, _0x428e9d) => _0x40bccc + _0x428e9d.proactiveUpgradeCount, 0) / _0x34627d,
      averageDamageEfficiency: _0x40a59d.reduce((_0x5a4c27, _0x4fc3cb) => _0x5a4c27 + _0x4fc3cb.totalDamage / Math.max(1, _0x4fc3cb.netGoldSpent), 0) / _0x34627d,
      averageMidWaveBuilds: _0x40a59d.reduce((_0x5238f7, _0xcee5c9) => _0x5238f7 + _0xcee5c9[_0x1a07d9(294)], 0) / _0x34627d,
      averageMidWaveDismantles: _0x40a59d[_0x1a07d9(358)]((_0x295d07, _0x5007db) => _0x295d07 + _0x5007db[_0x1a07d9(278)], 0) / _0x34627d,
      midWaveActionRate: _0x3ff2f6.length / _0x34627d,
      earlyWaveMidActionRate: _0x46be48.length / _0x34627d,
      averageDurationMs: _0x40a59d[_0x1a07d9(358)]((_0x2c2348, _0x2dbbe2) => _0x2c2348 + _0x2dbbe2[_0x1a07d9(372)], 0) / _0x34627d,
      averageBossSurvivalMs: _0x199834[_0x1a07d9(439)] ? _0x199834[_0x1a07d9(358)]((_0x56abe9, _0x3d76a0) => _0x56abe9 + _0x3d76a0[_0x1a07d9(351)], 0) / _0x199834.length : null,
      bossEncounterRate: _0x199834.length / _0x34627d,
      maximumRouteImbalance: Math[_0x1a07d9(378)](..._0x40a59d[_0x1a07d9(431)](_0x262d25 => _0x262d25.maximumRouteImbalance)),
      difficultyScore: Math.round(_0x238824.reduce((_0x18c6ab, _0x48b4b4) => _0x18c6ab + _0x48b4b4, 0) / _0x34627d),
      standards: _0x1ad569,
      representative: _0x516bd8
    };
  });
  const _0x2328c9 = _0x25dfc2.slice(1)[_0x2397e7(408)]((_0x58770b, _0x26ea9f) => _0x58770b[_0x2397e7(382)] <= _0x25dfc2[_0x26ea9f][_0x2397e7(382)]).map(_0x4de269 => _0x4de269[_0x2397e7(421)]);
  const _0x58d4d4 = _0x377242.minimumDurationMs ?? 180000;
  const _0x52e980 = _0x377242[_0x2397e7(345)] ?? 300000;
  const _0xa0563c = _0x377242[_0x2397e7(282)] ?? 360000;
  const _0x1d78b2 = _0x377242[_0x2397e7(392)] ?? 60000;
  const _0x1a0f4a = _0x377242.minimumDifficultyScores ?? [15, 20, 25, 30, 35, 40];
  const _0x1bce59 = _0x377242.minimumMidWaveActionRate ?? 0.8;
  const _0x359812 = _0x377242[_0x2397e7(391)] ?? 0.5;
  const _0x18b09f = function (_0x4132e4, _0xdca302) {
    const _0x3dcf91 = _0x2397e7;
    const _0x47f5e6 = Object[_0x3dcf91(347)](_0x4132e4.towers)[_0x3dcf91(431)](([_0x3a4cab, _0x4b1e9c]) => ({
      id: _0x3a4cab,
      price: _0x4b1e9c.price,
      strength: Math.round(L(_0x4b1e9c, _0x4132e4) * 10) / 10
    })).sort((_0x43549, _0x1df571) => _0x43549[_0x3dcf91(300)] - _0x1df571.price);
    const _0x478c5c = _0x47f5e6.map(_0x166324 => _0x166324.price);
    const _0x5a0568 = _0x47f5e6[_0x3dcf91(431)](_0x4a08f7 => _0x4a08f7.strength);
    const _0x2da1c3 = Math.max(..._0x478c5c) / Math.min(..._0x478c5c);
    const _0x3ce784 = Math.max(..._0x5a0568) / Math.min(..._0x5a0568);
    const _0x14239f = _0x47f5e6.every((_0x2256d0, _0x2a0b14) => _0x2a0b14 === 0 || _0x2256d0[_0x3dcf91(360)] > _0x47f5e6[_0x2a0b14 - 1].strength);
    return {
      towers: _0x47f5e6,
      priceSpreadRatio: Math.round(_0x2da1c3 * 100) / 100,
      strengthSpreadRatio: Math[_0x3dcf91(328)](_0x3ce784 * 100) / 100,
      strengthOrderPass: _0x14239f,
      pass: _0x2da1c3 >= (_0xdca302.minimumTowerPriceSpreadRatio ?? 3) && _0x3ce784 >= (_0xdca302.minimumTowerStrengthSpreadRatio ?? 2.5) && _0x14239f
    };
  }(_0x1a155a[_0x2397e7(283)] ?? _0xe41358, _0x377242);
  return {
    generatedAt: new Date()[_0x2397e7(319)](),
    profile: _0x48a804,
    trials: _0x34627d,
    results: _0x25dfc2,
    summary: {
      allPlayable: _0x25dfc2[_0x2397e7(289)](_0x44694e => _0x44694e.winRate > 0),
      allBeatable: _0x25dfc2.every(_0x6b357 => _0x6b357.winRate >= 0.5),
      progressionBreaks: _0x2328c9,
      difficultySpread: Math[_0x2397e7(378)](..._0x25dfc2.map(_0x178ecd => _0x178ecd.difficultyScore)) - Math.min(..._0x25dfc2.map(_0x3edeef => _0x3edeef[_0x2397e7(382)])),
      durationFailures: _0x25dfc2.filter(_0x4679b4 => {
        const _0x3301a4 = _0x2397e7;
        const _0x3b0a1d = _0x4679b4.averageBossSurvivalMs === null ? _0x52e980 : _0xa0563c;
        return _0x4679b4[_0x3301a4(310)] < _0x58d4d4 || _0x4679b4[_0x3301a4(310)] > _0x3b0a1d;
      }).map(_0x5da0e0 => _0x5da0e0.levelId),
      bossSurvivalFailures: _0x25dfc2[_0x2397e7(408)](_0x38b721 => _0x38b721.hasConfiguredBoss && (_0x38b721[_0x2397e7(417)] === null || _0x38b721.averageBossSurvivalMs < _0x1d78b2)).map(_0x353a23 => _0x353a23.levelId),
      routeBalanceFailures: _0x25dfc2.filter(_0x29b927 => _0x29b927.maximumRouteImbalance > 1)[_0x2397e7(431)](_0x417982 => _0x417982.levelId),
      entryPatternFailures: _0x25dfc2.filter(_0x4e5a58 => !_0x4e5a58[_0x2397e7(438)].entryPatternPass).map(_0x811532 => _0x811532[_0x2397e7(421)]),
      routeTraversalFailures: _0x25dfc2[_0x2397e7(408)](_0x11d3e5 => !_0x11d3e5[_0x2397e7(438)][_0x2397e7(314)]).map(_0x15fa5e => _0x15fa5e[_0x2397e7(421)]),
      waveCountFailures: _0x25dfc2.filter(_0x45962d => !_0x45962d[_0x2397e7(438)].waveCountPass).map(_0x4b5668 => _0x4b5668.levelId),
      bossMinionFailures: _0x25dfc2[_0x2397e7(408)](_0x70192f => !_0x70192f[_0x2397e7(438)].bossSupportPass)[_0x2397e7(431)](_0x3a07c0 => _0x3a07c0.levelId),
      towerDifferentiation: _0x18b09f,
      midWaveActionFailures: _0x25dfc2[_0x2397e7(408)](_0x3ad564 => _0x3ad564[_0x2397e7(295)] < _0x1bce59).map(_0x416ff0 => _0x416ff0[_0x2397e7(421)]),
      earlyWaveMidActionFailures: _0x25dfc2[_0x2397e7(408)](_0x187c7d => _0x187c7d.earlyWaveMidActionRate < _0x359812).map(_0x55c5bc => _0x55c5bc[_0x2397e7(421)]),
      difficultyFloorFailures: _0x25dfc2.filter((_0xfaca32, _0x4b56ff) => _0xfaca32[_0x2397e7(382)] < (_0x1a0f4a[_0x4b56ff] ?? _0x1a0f4a.at(-1)))[_0x2397e7(431)](_0x20f613 => _0x20f613.levelId),
      experienceTargets: {
        minimumDurationMs: _0x58d4d4,
        maximumDurationMs: _0x52e980,
        maximumBossLevelDurationMs: _0xa0563c,
        minimumBossSurvivalMs: _0x1d78b2,
        minimumDifficultyScores: _0x1a0f4a,
        earlySingleEntryWaveCount: _0x377242[_0x2397e7(311)] ?? 2,
        multiEntrySimultaneousFromWave: _0x377242[_0x2397e7(380)] ?? 3,
        minimumBossMinionCount: _0x377242[_0x2397e7(298)] ?? 8,
        maximumBossMinionIntervalMs: _0x377242[_0x2397e7(449)] ?? 8000,
        minimumTowerPriceSpreadRatio: _0x377242[_0x2397e7(379)] ?? 3,
        minimumTowerStrengthSpreadRatio: _0x377242.minimumTowerStrengthSpreadRatio ?? 2.5,
        minimumMidWaveActionRate: _0x1bce59,
        minimumEarlyWaveMidActionRate: _0x359812,
        requiredWaveCounts: _0x377242.requiredWaveCounts ?? {}
      }
    }
  };
}
function A(_0x26a400 = {}) {
  const _0x44fa5c = e;
  var _0x40dc72;
  var _0xb5c54e;
  const _0x1fbc80 = (_0x26a400[_0x44fa5c(339)] ?? c)[_0x44fa5c(431)](_0x268c2d => b({
    ..._0x26a400,
    profile: _0x268c2d
  }));
  const _0x1a5785 = _0x1fbc80.map(_0x3a9197 => {
    const _0x17e723 = _0x44fa5c;
    const _0x53af74 = _0x3a9197[_0x17e723(385)][_0x17e723(439)];
    return {
      profile: _0x3a9197[_0x17e723(448)],
      label: u[_0x3a9197.profile].label,
      averageWinRate: _0x3a9197.results[_0x17e723(358)]((_0x4921d1, _0x15260f) => _0x4921d1 + _0x15260f.winRate, 0) / _0x53af74,
      averageCoreRatio: _0x3a9197.results[_0x17e723(358)]((_0x357afe, _0x263e2) => _0x357afe + _0x263e2.averageCoreRatio, 0) / _0x53af74,
      averageLeaks: _0x3a9197.results[_0x17e723(358)]((_0x43139f, _0x40d822) => _0x43139f + _0x40d822[_0x17e723(415)], 0) / _0x53af74,
      averageDamageEfficiency: _0x3a9197.results[_0x17e723(358)]((_0x39789e, _0x1c85ef) => _0x39789e + _0x1c85ef[_0x17e723(303)], 0) / _0x53af74,
      averageDismantles: _0x3a9197.results[_0x17e723(358)]((_0x404267, _0x3073a2) => _0x404267 + _0x3073a2.averageDismantles, 0) / _0x53af74,
      averageProactiveUpgrades: _0x3a9197[_0x17e723(385)].reduce((_0x52dcd7, _0x184cc5) => _0x52dcd7 + _0x184cc5.averageProactiveUpgrades, 0) / _0x53af74,
      allLevelsBeatable: _0x3a9197.summary.allBeatable,
      report: _0x3a9197
    };
  });
  const _0x2febdb = Math[_0x44fa5c(378)](..._0x1a5785[_0x44fa5c(431)](_0x3dea75 => _0x3dea75.averageDamageEfficiency));
  const _0x174ce3 = Math[_0x44fa5c(378)](1, ..._0x1a5785[_0x44fa5c(431)](_0x322cff => _0x322cff[_0x44fa5c(415)]));
  _0x1a5785[_0x44fa5c(395)](_0x376e1c => {
    const _0xcd037d = _0x44fa5c;
    const _0xaffc21 = _0x376e1c.averageDamageEfficiency / _0x2febdb;
    const _0x3eb0ed = 1 - _0x376e1c[_0xcd037d(415)] / _0x174ce3;
    _0x376e1c[_0xcd037d(418)] = Math.round((_0x376e1c[_0xcd037d(366)] * 60 + _0x376e1c[_0xcd037d(309)] * 25 + _0xaffc21 * 10 + _0x3eb0ed * 5 - Math.min(4, _0x376e1c.averageDismantles * 0.2)) * 10) / 10;
  });
  _0x1a5785.sort((_0x655402, _0x380e18) => _0x380e18[_0x44fa5c(418)] - _0x655402[_0x44fa5c(418)]);
  return {
    generatedAt: new Date().toISOString(),
    trials: ((_0x40dc72 = _0x1fbc80[0]) == null ? undefined : _0x40dc72.trials) ?? 0,
    winner: ((_0xb5c54e = _0x1a5785[0]) == null ? undefined : _0xb5c54e[_0x44fa5c(448)]) ?? null,
    candidates: _0x1a5785
  };
}
function j(_0x2b375d, _0x6e703f) {
  _0x2b375d -= 273;
  const _0x303560 = z();
  let _0x44bee9 = _0x303560[_0x2b375d];
  if (j.inQKTc === undefined) {
    j.QFKCgv = function (_0x44cf6d) {
      let _0x1dd30f = "";
      let _0x2f0b8d = "";
      for (let _0x4068de, _0x5f0773, _0x12d753 = 0, _0x5c4844 = 0; _0x5f0773 = _0x44cf6d.charAt(_0x5c4844++); ~_0x5f0773 && (_0x4068de = _0x12d753 % 4 ? _0x4068de * 64 + _0x5f0773 : _0x5f0773, _0x12d753++ % 4) ? _0x1dd30f += String.fromCharCode(_0x4068de >> (_0x12d753 * -2 & 6) & 255) : 0) {
        _0x5f0773 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x5f0773);
      }
      for (let _0x5190ad = 0, _0x233584 = _0x1dd30f.length; _0x5190ad < _0x233584; _0x5190ad++) {
        _0x2f0b8d += "%" + ("00" + _0x1dd30f.charCodeAt(_0x5190ad).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0x2f0b8d);
    };
    j.GutSLK = {};
    j.inQKTc = true;
  }
  const _0x47f440 = _0x2b375d + _0x303560[0];
  const _0x18e142 = j.GutSLK[_0x47f440];
  if (_0x18e142) {
    _0x44bee9 = _0x18e142;
  } else {
    _0x44bee9 = j.QFKCgv(_0x44bee9);
    j.GutSLK[_0x47f440] = _0x44bee9;
  }
  return _0x44bee9;
}
export { u as AGENT_PROFILES, c as COMPARABLE_AGENT_PROFILES, v as DEFAULT_AGENT_PROFILE, A as compareAgentProfiles, b as runBalanceSuite, W as simulateLevel };