import { L as _0x435173, B as _0x4c860b, g as _0x2217e4, c as _0xf14429, a as _0x4629a0, e as _0x138229, s, f as _0xff4959 } from "./bossMechanics-21H4M662.js";
const l = Object.freeze({
  x: 0,
  y: 100,
  width: 960,
  height: 540
});
const m = new WeakMap();
const c = Object.freeze({
  standard: Object.freeze({
    id: "standard",
    label: "稳健扩张",
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
  rush: Object.freeze({
    id: "rush",
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
    id: "upgrade",
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
    id: "adaptive",
    label: "自适应策略",
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
    id: "expert",
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
const u = Object.freeze(["standard", "rush", "upgrade", "adaptive"]);
const d = "adaptive";
function h(_0xc1bcca, _0x3cafc1) {
  return Math.hypot(_0x3cafc1.x - _0xc1bcca.x, _0x3cafc1.y - _0xc1bcca.y);
}
function p(_0x176bc1) {
  const _0xafb26f = _0x176bc1.data;
  const _0x34734b = m.get(_0xafb26f);
  if (_0x34734b) {
    return _0x34734b;
  }
  const _0x4d5ffe = Math.min(l.width / _0xafb26f.sourceWidth, l.height / _0xafb26f.sourceHeight);
  const _0x14ea6a = _0xafb26f.sourceWidth * _0x4d5ffe;
  const _0xf384ab = _0xafb26f.sourceHeight * _0x4d5ffe;
  const _0xeb353a = l.x + (l.width - _0x14ea6a) / 2;
  const _0x204eff = l.y + (l.height - _0xf384ab) / 2;
  const _0x4493bb = _0x14ea6a;
  const _0x56d74e = _0xf384ab;
  const _0x58a410 = (_0x18dcad, _0x5e4501) => ({
    x: _0xeb353a + _0x18dcad / _0xafb26f.sourceWidth * _0x4493bb,
    y: _0x204eff + _0x5e4501 / _0xafb26f.sourceHeight * _0x56d74e
  });
  const _0x17c4cb = {
    paths: _0xf14429(_0xafb26f).map(_0x3ec3cd => {
      const _0x3454e1 = _0x3ec3cd.cells.map(_0x462a6c => _0x58a410((_0x462a6c.column + 0.5) * _0xafb26f.navCellSize, (_0x462a6c.row + 0.5) * _0xafb26f.navCellSize));
      const _0x227449 = [];
      let _0xea0c45 = 0;
      for (let _0x5b3872 = 1; _0x5b3872 < _0x3454e1.length; _0x5b3872 += 1) {
        const _0x23c84b = h(_0x3454e1[_0x5b3872 - 1], _0x3454e1[_0x5b3872]);
        _0x227449.push({
          start: _0x3454e1[_0x5b3872 - 1],
          end: _0x3454e1[_0x5b3872],
          startDistance: _0xea0c45,
          length: _0x23c84b
        });
        _0xea0c45 += _0x23c84b;
      }
      return {
        id: _0x3ec3cd.id,
        entryIndex: _0x3ec3cd.entryIndex,
        variantIndex: _0x3ec3cd.variantIndex,
        points: _0x3454e1,
        segments: _0x227449,
        length: _0xea0c45
      };
    }),
    spots: _0xafb26f.towerSpots.map((_0x34ee19, _0x3839b6) => ({
      ..._0x58a410(_0x34ee19.x, _0x34ee19.y),
      index: _0x3839b6
    }))
  };
  m.set(_0xafb26f, _0x17c4cb);
  return _0x17c4cb;
}
function v(_0x347f85, _0x2e9ddc) {
  if (_0x2e9ddc >= _0x347f85.length) {
    return _0x347f85.points.at(-1);
  }
  const _0x108fde = _0x347f85.segments.find(_0x499afb => _0x2e9ddc <= _0x499afb.startDistance + _0x499afb.length) ?? _0x347f85.segments.at(-1);
  const _0x110d27 = _0x108fde.length ? (_0x2e9ddc - _0x108fde.startDistance) / _0x108fde.length : 0;
  return {
    x: _0x108fde.start.x + (_0x108fde.end.x - _0x108fde.start.x) * _0x110d27,
    y: _0x108fde.start.y + (_0x108fde.end.y - _0x108fde.start.y) * _0x110d27
  };
}
function g(_0x4e4893, _0x1f9ab3, _0x22d0fb) {
  const _0xe09faf = Math.max(16, Math.ceil(_0x4e4893.length / 18));
  let _0x4039ab = 0;
  for (let _0x56fb1d = 0; _0x56fb1d <= _0xe09faf; _0x56fb1d += 1) {
    if (h(v(_0x4e4893, _0x4e4893.length * _0x56fb1d / _0xe09faf), _0x1f9ab3) <= _0x22d0fb) {
      _0x4039ab += 1;
    }
  }
  return _0x4039ab / (_0xe09faf + 1);
}
function f(_0x131d1b, _0x2259fc, _0x586203, _0x253224) {
  let _0x263c03 = _0x131d1b.towerValueCache.get(_0x2259fc);
  if (!_0x263c03) {
    _0x263c03 = new WeakMap();
    _0x131d1b.towerValueCache.set(_0x2259fc, _0x263c03);
  }
  let _0x1c02c1 = _0x263c03.get(_0x586203);
  if (!_0x1c02c1) {
    _0x1c02c1 = new Map();
    _0x263c03.set(_0x586203, _0x1c02c1);
  }
  if (_0x1c02c1.has(_0x253224.index)) {
    return _0x1c02c1.get(_0x253224.index);
  }
  const _0x4850dc = (_0x131d1b.geometry.paths.reduce((_0x1b5c60, _0x39aac0) => _0x1b5c60 + g(_0x39aac0, _0x253224, _0x586203.range), 0) / _0x131d1b.geometry.paths.length + (_0x131d1b.geometry.paths.length > 1 ? Math.min(..._0x131d1b.geometry.paths.map(_0x5a0a7d => g(_0x5a0a7d, _0x253224, _0x586203.range))) * 0.45 : 0)) * function (_0x4b8c42, _0x43d022, _0x563b67) {
    const _0x5bfcb8 = function (_0x5df0a2, _0x3c9a35) {
      return _0x5df0a2.types.reduce((_0x597a29, _0xb71fa9) => _0x597a29 + _0x3c9a35.enemies[_0xb71fa9].armor, 0) / _0x5df0a2.types.length;
    }(_0x43d022, _0x563b67) * (_0x4b8c42.armorPiercing ? _0x563b67.combat.armorPiercingArmorMultiplier : 1);
    let _0x36d3ca = _0x4b8c42.damage * (1 - _0x5bfcb8) * 1000 / _0x4b8c42.cooldown;
    const _0xc99101 = Math.min(2, Math.max(0, 900 / _0x43d022.delay - 0.45));
    if (_0x4b8c42.splashRadius) {
      _0x36d3ca *= 1 + _0x563b67.combat.splashDamageMultiplier * _0xc99101;
    }
    if (_0x4b8c42.chainCount) {
      _0x36d3ca *= 1 + _0x563b67.combat.chainDamageMultiplier * Math.min(_0x4b8c42.chainCount, _0xc99101);
    }
    if (_0x4b8c42.slowFactor) {
      _0x36d3ca *= 1 + (1 - _0x4b8c42.slowFactor) * 0.48;
    }
    return _0x36d3ca;
  }(_0x586203, _0x2259fc, _0x131d1b.balance);
  _0x1c02c1.set(_0x253224.index, _0x4850dc);
  return _0x4850dc;
}
function M(_0x3df495, _0x549e88, _0x364de, _0x3ff6e1, _0x1fe47d) {
  const _0x1051e2 = f(_0x3df495, _0x549e88, _0x364de, _0x3ff6e1);
  const _0x211cea = _0x3df495.levelWaves[_0x3df495.waveNumber];
  const _0x425cc6 = _0x211cea ? _0x1fe47d.lookaheadWeight ?? 0 : 0;
  if (_0x425cc6) {
    return _0x1051e2 * (1 - _0x425cc6) + f(_0x3df495, _0x211cea, _0x364de, _0x3ff6e1) * _0x425cc6;
  } else {
    return _0x1051e2;
  }
}
function y(_0x4c4e97, _0x1613db, _0x470a55, _0x148308) {
  const _0x1c3f12 = new Set(_0x4c4e97.towers.map(_0x2c94df => _0x2c94df.spotIndex));
  const _0x2393e8 = [];
  const _0x36aa69 = [...new Set(Object.values(_0x4c4e97.balance.towers).map(_0x2dd3d4 => _0x2dd3d4.price))].sort((_0x2aa9f3, _0x17e31b) => _0x2aa9f3 - _0x17e31b);
  const _0x343e77 = _0x1c3f12.size / Math.max(1, _0x4c4e97.geometry.spots.length);
  const _0x4d570c = _0x343e77 >= (_0x148308.occupancyTier2 ?? 0.8) ? _0x36aa69[Math.min(2, _0x36aa69.length - 1)] : _0x343e77 >= (_0x148308.occupancyTier1 ?? 0.6) ? _0x36aa69[Math.min(1, _0x36aa69.length - 1)] : _0x36aa69[0];
  Object.entries(_0x4c4e97.balance.towers).forEach(([_0x41f54c, _0x42ef26]) => {
    if (!(_0x42ef26.price < _0x4d570c) && !(_0x42ef26.price > _0x4c4e97.gold - _0x148308.reserve)) {
      _0x4c4e97.geometry.spots.forEach(_0x24a0c2 => {
        if (_0x1c3f12.has(_0x24a0c2.index)) {
          return;
        }
        const _0x443c98 = 1 / (1 + _0x4c4e97.towers.filter(_0x4b26b3 => _0x4b26b3.id === _0x41f54c).length * 0.08);
        const _0x203b98 = 1 + (_0x470a55() - 0.5) * _0x148308.jitter;
        _0x2393e8.push({
          towerId: _0x41f54c,
          definition: _0x42ef26,
          spotIndex: _0x24a0c2.index,
          score: M(_0x4c4e97, _0x1613db, _0x42ef26, _0x24a0c2, _0x148308) / _0x42ef26.price * _0x443c98 * _0x203b98
        });
      });
    }
  });
  _0x2393e8.sort((_0x59f833, _0x473b33) => _0x473b33.score - _0x59f833.score);
  return _0x2393e8[0] ?? null;
}
function w(_0x593dd3, _0x233392, _0x136b8f = {}, _0x50bc9e = {}) {
  _0x593dd3.gold -= _0x233392.definition.price;
  _0x593dd3.spent += _0x233392.definition.price;
  _0x593dd3.towers.push({
    id: _0x233392.towerId,
    purchasePrice: _0x233392.definition.price,
    builtWave: _0x593dd3.waveNumber,
    spotIndex: _0x233392.spotIndex,
    ..._0x593dd3.geometry.spots[_0x233392.spotIndex],
    nextShotAt: 0,
    damage: 0,
    kills: 0,
    shots: 0
  });
  const _0x7d6271 = {
    type: "build",
    wave: _0x593dd3.waveNumber,
    towerId: _0x233392.towerId,
    spotIndex: _0x233392.spotIndex,
    phase: _0x136b8f.phase ?? "pre-wave",
    atMs: Math.max(0, Math.round(_0x136b8f.atMs ?? 0)),
    ..._0x50bc9e
  };
  _0x593dd3.placements.push(_0x7d6271);
  _0x593dd3.actions.push(_0x7d6271);
}
function b(_0x57f049, _0x35d679, _0x3bb19e, _0x108b60 = {}) {
  if (_0x57f049.waveNumber <= 1 || !_0x57f049.towers.length) {
    return 0;
  }
  const _0x4b71d7 = _0x57f049.towers.length >= _0x57f049.geometry.spots.length;
  const _0x313e02 = [];
  _0x57f049.towers.forEach(_0x164102 => {
    if (_0x164102.builtWave >= _0x57f049.waveNumber || _0x164102.lastEvaluatedWave === _0x57f049.waveNumber) {
      return;
    }
    const _0xf222ef = _0x57f049.geometry.spots[_0x164102.spotIndex];
    const _0x263307 = _0x57f049.balance.towers[_0x164102.id];
    const _0x9b7b8a = Math.max(0.0001, M(_0x57f049, _0x35d679, _0x263307, _0xf222ef, _0x3bb19e));
    const _0x5d36a3 = Math.max(..._0x57f049.geometry.spots.map(_0x4452e6 => M(_0x57f049, _0x35d679, _0x263307, _0x4452e6, _0x3bb19e)));
    const _0x2c8dfc = _0x9b7b8a / Math.max(0.0001, _0x5d36a3);
    const _0x140e91 = _0x138229(_0x164102.purchasePrice, _0x57f049.balance.economy.towerRefundRate);
    Object.entries(_0x57f049.balance.towers).forEach(([_0x594dd9, _0x22d717]) => {
      if (_0x594dd9 === _0x164102.id || _0x22d717.price <= _0x164102.purchasePrice || _0x22d717.price > _0x57f049.gold + _0x140e91 - _0x3bb19e.reserve) {
        return;
      }
      const _0x592835 = _0x22d717.price > _0x57f049.gold - _0x3bb19e.reserve;
      const _0x3b1803 = _0x3bb19e.proactiveReplacement && _0x57f049.waveNumber >= (_0x3bb19e.minimumUpgradeWave ?? 2) && _0x2c8dfc >= (_0x3bb19e.criticalSpotThreshold ?? 1);
      if (!_0x4b71d7 && !_0x592835 && !_0x3b1803) {
        return;
      }
      const _0x302647 = M(_0x57f049, _0x35d679, _0x22d717, _0xf222ef, _0x3bb19e);
      const _0x2ea44d = _0x302647 / _0x9b7b8a;
      if (_0x2ea44d < _0x3bb19e.replacementThreshold) {
        return;
      }
      const _0x48fce8 = Math.max(1, _0x22d717.price - _0x140e91);
      const _0x592803 = Math.max(0, _0x302647 - _0x9b7b8a) / _0x48fce8;
      _0x313e02.push({
        tower: _0x164102,
        towerId: _0x594dd9,
        definition: _0x22d717,
        ratio: _0x2ea44d,
        refund: _0x140e91,
        criticality: _0x2c8dfc,
        score: _0x2ea44d + _0x2c8dfc * 0.3 + Math.min(1, _0x592803) * 0.2,
        proactive: _0x3b1803 && !_0x4b71d7 && !_0x592835
      });
    });
  });
  _0x313e02.sort((_0x16425d, _0x49508f) => _0x49508f.score - _0x16425d.score);
  const _0x9566fa = _0x313e02[0];
  if (!_0x9566fa) {
    return 0;
  }
  _0x9566fa.tower.lastEvaluatedWave = _0x57f049.waveNumber;
  _0x57f049.towers = _0x57f049.towers.filter(_0x162652 => _0x162652 !== _0x9566fa.tower);
  _0x57f049.gold += _0x9566fa.refund;
  _0x57f049.refunds += _0x9566fa.refund;
  const _0x587d0f = {
    type: "dismantle",
    wave: _0x57f049.waveNumber,
    towerId: _0x9566fa.tower.id,
    spotIndex: _0x9566fa.tower.spotIndex,
    refund: _0x9566fa.refund,
    phase: _0x108b60.phase ?? "pre-wave",
    atMs: Math.max(0, Math.round(_0x108b60.atMs ?? 0)),
    reason: _0x9566fa.proactive ? "proactive-upgrade" : "replacement"
  };
  _0x57f049.dismantles.push(_0x587d0f);
  _0x57f049.actions.push(_0x587d0f);
  w(_0x57f049, {
    towerId: _0x9566fa.towerId,
    definition: _0x9566fa.definition,
    spotIndex: _0x9566fa.tower.spotIndex
  }, _0x108b60, {
    reason: _0x9566fa.proactive ? "proactive-upgrade" : "replacement",
    replaces: _0x9566fa.tower.id
  });
  return 1;
}
function x(_0x37c832, _0x31eadc, _0x371551, _0x21e622, _0x3ddb37 = {}) {
  let _0x3246d8 = 0;
  const _0x2b8118 = Math.min(...Object.values(_0x37c832.balance.towers).map(_0xae4939 => _0xae4939.price));
  while (_0x37c832.gold >= _0x2b8118 && _0x37c832.towers.length < _0x37c832.geometry.spots.length) {
    const _0x18f295 = y(_0x37c832, _0x31eadc, _0x371551, _0x21e622);
    if (!_0x18f295) {
      break;
    }
    w(_0x37c832, _0x18f295, _0x3ddb37);
    _0x3246d8 += 1;
  }
  return _0x3246d8;
}
function S(_0x25529c, _0x5dcbbf, _0x975bfb, _0xef1338, _0x321d28) {
  const _0x5a064f = _0x25529c.balance.towers[_0x5dcbbf.id];
  const _0xa47a65 = (_0x250fa2, _0x3ab022, _0x57b023 = false) => {
    const _0xe42f83 = _0x57b023 || _0x250fa2.armorBroken ? _0x25529c.balance.combat.armorPiercingArmorMultiplier : 1;
    const _0x190be9 = _0x250fa2.definition.armor * _0xe42f83;
    return Math.max(_0x25529c.balance.combat.minimumDamage, Math.round(_0x3ab022 * (1 - _0x190be9)));
  };
  const _0x2eb18b = _0xa47a65(_0x975bfb, _0x5a064f.damage, _0x5a064f.armorPiercing);
  const _0x56c6e1 = (_0x1e1c1c, _0x4e0c43) => {
    if (!_0x1e1c1c.active) {
      return;
    }
    const _0x30cb73 = Math.min(_0x1e1c1c.health, _0x4e0c43);
    _0x1e1c1c.health -= _0x4e0c43;
    _0x5dcbbf.damage += _0x30cb73;
    _0x25529c.totalDamage += _0x30cb73;
    if (_0x1e1c1c.health <= 0) {
      _0x1e1c1c.active = false;
      _0x1e1c1c.resolvedAt = _0x321d28;
      _0x1e1c1c.resolution = "killed";
      _0x5dcbbf.kills += 1;
      _0x25529c.kills += 1;
      _0x25529c.gold += _0x1e1c1c.definition.reward;
    }
  };
  _0x56c6e1(_0x975bfb, _0x2eb18b);
  if (_0x5a064f.armorPiercing && _0x975bfb.definition.armor >= 0.15) {
    _0x975bfb.armorBroken = true;
  }
  if (_0x5a064f.slowFactor && _0x975bfb.active) {
    _0x975bfb.slowFactor = _0x5a064f.slowFactor;
    _0x975bfb.slowUntil = _0x321d28 + _0x5a064f.slowDuration;
  }
  if (_0x5a064f.splashRadius) {
    _0xef1338.filter(_0x307cf7 => _0x307cf7.active && _0x307cf7 !== _0x975bfb && h(_0x307cf7.position, _0x975bfb.position) <= _0x5a064f.splashRadius).forEach(_0x1cd422 => _0x56c6e1(_0x1cd422, _0xa47a65(_0x1cd422, _0x5a064f.damage * _0x25529c.balance.combat.splashDamageMultiplier)));
  }
  if (_0x5a064f.chainCount) {
    _0xef1338.filter(_0x25c54b => _0x25c54b.active && _0x25c54b !== _0x975bfb && h(_0x25c54b.position, _0x975bfb.position) <= _0x5a064f.chainRadius).sort((_0x46643a, _0x47c1d7) => h(_0x46643a.position, _0x975bfb.position) - h(_0x47c1d7.position, _0x975bfb.position)).slice(0, _0x5a064f.chainCount).forEach(_0x59a74a => _0x56c6e1(_0x59a74a, _0xa47a65(_0x59a74a, _0x5a064f.damage * _0x25529c.balance.combat.chainDamageMultiplier)));
  }
}
function W(_0x119080, _0x2b164, _0x575568, _0x30a3cd, _0x112ed8) {
  var _0x51c7db;
  const _0x510d71 = [];
  const _0x5e7d26 = [];
  let _0xe50a0e = 0;
  let _0x17664d = 0;
  let _0x183812 = 0;
  let _0x177d96 = _0x112ed8.midWaveFirstDecisionMs;
  let _0x1c15cc = false;
  let _0x236f27 = 0;
  let _0x4eede4 = 0;
  let _0xbb8869 = 0;
  const _0x3586a7 = s(_0x119080.geometry.paths, {
    x: l.x + l.width / 2,
    y: l.y + l.height / 2
  });
  const _0x98f0a1 = (_0x2ccbed, _0x2f314e, _0x2ff1a8, _0x3cb688 = 0) => {
    var _0x37b3aa;
    const _0x178cda = _0x119080.balance.enemies[_0x2ccbed];
    const _0x322e78 = {
      ..._0x178cda,
      reward: Math.round(_0x178cda.reward * (_0x119080.level.enemyRewardScale ?? 1))
    };
    const _0x379c24 = ((_0x37b3aa = _0x119080.level.enemyHealthScales) == null ? undefined : _0x37b3aa[_0x2ccbed]) ?? _0x119080.level.enemyHealthScale;
    const _0x421192 = _0xff4959(_0x322e78);
    _0x510d71.push({
      type: _0x2ccbed,
      definition: _0x322e78,
      health: Math.round(_0x178cda.health * _0x379c24),
      speed: _0x178cda.speed * _0x119080.level.enemySpeedScale,
      path: _0x2f314e,
      travelled: _0x3cb688,
      position: v(_0x2f314e, _0x3cb688),
      active: true,
      armorBroken: false,
      spawnedAt: _0x2ff1a8,
      resolvedAt: null,
      resolution: null,
      slowUntil: 0,
      slowFactor: 1,
      nextSummonAt: _0x421192.enabled ? _0x2ff1a8 + _0x421192.initialDelayMs : null
    });
  };
  for (_0x119080.towers.forEach(_0x3987e6 => {
    _0x3987e6.nextShotAt = 0;
  }); _0xe50a0e <= 180000 && (_0x183812 < _0x2b164.count || _0x510d71.some(_0x1c0e51 => _0x1c0e51.active));) {
    while (_0x183812 < _0x2b164.count && _0xe50a0e >= _0x17664d) {
      const _0x537532 = _0x2b164.types[_0x183812 % _0x2b164.types.length];
      const _0x6b1585 = _0x119080.balance.enemies[_0x537532].boss ? _0x3586a7 : _0x575568[_0x183812 % _0x575568.length];
      const _0x3f0e7b = _0x119080.geometry.paths[_0x6b1585];
      _0x98f0a1(_0x537532, _0x3f0e7b, _0xe50a0e);
      _0x183812 += 1;
      _0x17664d += _0x2b164.delay;
    }
    _0x510d71.forEach(_0x55c4f5 => {
      if (!_0x55c4f5.active) {
        return;
      }
      const _0x44fb16 = _0xff4959(_0x55c4f5.definition);
      if (_0x44fb16.enabled && _0xe50a0e >= _0x55c4f5.nextSummonAt) {
        _0x44fb16.types.forEach(_0x124023 => _0x98f0a1(_0x124023, _0x55c4f5.path, _0xe50a0e, _0x55c4f5.travelled));
        _0xbb8869 += _0x44fb16.types.length;
        _0x55c4f5.nextSummonAt += _0x44fb16.intervalMs;
      }
      const _0x49cac2 = _0xe50a0e < _0x55c4f5.slowUntil ? _0x55c4f5.slowFactor : 1;
      _0x55c4f5.travelled += _0x55c4f5.speed * _0x49cac2 * 100 / 1000;
      _0x55c4f5.position = v(_0x55c4f5.path, _0x55c4f5.travelled);
      if (_0x55c4f5.travelled >= _0x55c4f5.path.length) {
        _0x55c4f5.active = false;
        _0x55c4f5.resolvedAt = _0xe50a0e;
        _0x55c4f5.resolution = "leaked";
        _0x119080.leaks += 1;
        _0x119080.coreDamage += _0x55c4f5.definition.coreDamage;
        _0x119080.coreHealth = Math.max(0, _0x119080.coreHealth - _0x55c4f5.definition.coreDamage);
      }
    });
    _0x5e7d26.filter(_0x5a11a4 => _0x5a11a4.hitAt <= _0xe50a0e).forEach(_0x16d3c0 => {
      let _0x177ed6 = _0x16d3c0.target;
      if (!_0x177ed6.active) {
        _0x177ed6 = _0x510d71.filter(_0x5bfe9c => _0x5bfe9c.active && h(_0x16d3c0.tower, _0x5bfe9c.position) <= _0x16d3c0.definition.range).sort((_0x3fb067, _0x47801e) => _0x47801e.travelled / _0x47801e.path.length - _0x3fb067.travelled / _0x3fb067.path.length)[0];
      }
      if (_0x177ed6) {
        S(_0x119080, _0x16d3c0.tower, _0x177ed6, _0x510d71, _0xe50a0e);
      }
    });
    for (let _0x572659 = _0x5e7d26.length - 1; _0x572659 >= 0; _0x572659 -= 1) {
      if (_0x5e7d26[_0x572659].hitAt <= _0xe50a0e) {
        _0x5e7d26.splice(_0x572659, 1);
      }
    }
    _0x119080.towers.forEach(_0x17f806 => {
      if (_0xe50a0e < _0x17f806.nextShotAt) {
        return;
      }
      const _0x481a1b = _0x119080.balance.towers[_0x17f806.id];
      const _0x2cf391 = _0x510d71.filter(_0x312b52 => _0x312b52.active && h(_0x17f806, _0x312b52.position) <= _0x481a1b.range).sort((_0x41594e, _0x20c225) => _0x20c225.travelled / _0x20c225.path.length - _0x41594e.travelled / _0x41594e.path.length)[0];
      if (!_0x2cf391) {
        return;
      }
      _0x17f806.nextShotAt = _0xe50a0e + _0x481a1b.cooldown;
      _0x17f806.shots += 1;
      const _0x2bf650 = _0x481a1b.projectileSpeed ? h(_0x17f806, _0x2cf391.position) / _0x481a1b.projectileSpeed * 1000 : 0;
      _0x5e7d26.push({
        tower: _0x17f806,
        target: _0x2cf391,
        definition: _0x481a1b,
        hitAt: _0xe50a0e + (_0x481a1b.launchDelay ?? 0) + _0x2bf650
      });
    });
    if (_0xe50a0e >= _0x177d96 && _0x510d71.some(_0x36f9d7 => _0x36f9d7.active)) {
      const _0x5caea6 = {
        phase: "mid-wave",
        atMs: _0xe50a0e
      };
      const _0x4eca61 = _0x183812 / Math.max(1, _0x2b164.count);
      if (!_0x1c15cc && _0x4eca61 >= _0x112ed8.midWaveDismantleProgress) {
        _0x4eede4 += b(_0x119080, _0x2b164, _0x112ed8, _0x5caea6);
        _0x1c15cc = true;
      }
      _0x236f27 += x(_0x119080, _0x2b164, _0x30a3cd, _0x112ed8, _0x5caea6);
      _0x177d96 += _0x112ed8.midWaveDecisionIntervalMs;
    }
    if (_0x119080.coreHealth <= 0) {
      break;
    }
    _0xe50a0e += 100;
  }
  const _0x52c6bd = _0x510d71.filter(_0x46963f => _0x46963f.definition.boss);
  const _0x36988e = _0x575568.map((_0x3ed7db, _0x6e7c3c) => ({
    routeIndex: _0x3ed7db,
    count: Math.max(0, Math.ceil((_0x2b164.count - _0x6e7c3c) / _0x575568.length))
  }));
  return {
    durationMs: _0xe50a0e,
    bossSurvivalMs: _0x52c6bd.length ? Math.max(..._0x52c6bd.map(_0x22ec14 => (_0x22ec14.resolvedAt ?? _0xe50a0e) - _0x22ec14.spawnedAt)) : null,
    bossResolution: ((_0x51c7db = _0x52c6bd[0]) == null ? undefined : _0x51c7db.resolution) ?? null,
    bossProgress: _0x52c6bd.length ? Math.max(..._0x52c6bd.map(_0xa8ef47 => Math.min(1, _0xa8ef47.travelled / _0xa8ef47.path.length))) : null,
    bossCentralRoutePass: _0x52c6bd.every(_0x46b2f8 => _0x119080.geometry.paths.indexOf(_0x46b2f8.path) === _0x3586a7),
    bossSummonCount: _0xbb8869,
    midWavePurchases: _0x236f27,
    midWaveDismantles: _0x4eede4,
    routeCounts: _0x36988e,
    routeImbalance: _0x36988e.length ? Math.max(..._0x36988e.map(_0x4100be => _0x4100be.count)) - Math.min(..._0x36988e.map(_0x43a7bb => _0x43a7bb.count)) : 0
  };
}
function R(_0x440092, _0x3ac2b4, _0x16e9fe) {
  return [...new Set(_0x3ac2b4.routes ?? _0x440092.paths.map(_0x5d9325 => _0x5d9325.entryIndex))].map(_0xb5a350 => {
    var _0x16a935;
    const _0xaef7d6 = _0x440092.paths.filter(_0x37d4cc => _0x37d4cc.entryIndex === _0xb5a350);
    const _0x2681ae = Number((_0x16a935 = _0x3ac2b4.routeVariants) == null ? undefined : _0x16a935[_0xb5a350]);
    return _0xaef7d6.find(_0x3dc45f => _0x3dc45f.variantIndex === _0x2681ae) ?? _0xaef7d6[Math.floor(_0x16e9fe() * _0xaef7d6.length)];
  }).filter(Boolean).map(_0x35b63a => _0x440092.paths.indexOf(_0x35b63a));
}
function D(_0x344d53, _0xcac25b, _0x271f52, _0x2a35bd) {
  var _0x33ea55;
  var _0x16d19e;
  const _0x2b86fc = ((_0x33ea55 = _0x344d53.data.spawns) == null ? undefined : _0x33ea55.length) ?? _0x344d53.data.routes.length;
  const _0x3517fa = _0x2a35bd.earlySingleEntryWaveCount ?? 2;
  const _0x1efaa8 = _0x2a35bd.multiEntrySimultaneousFromWave ?? _0x3517fa + 1;
  const _0x466281 = _0x2305c8 => [...new Set(_0x2305c8.routes ?? [])].filter(_0x1950e1 => _0x1950e1 >= 0 && _0x1950e1 < _0x2b86fc);
  const _0x1312de = _0xcac25b.slice(0, _0x3517fa).map(_0x466281);
  const _0x39a8b6 = _0xcac25b.slice(_0x1efaa8 - 1).map(_0x466281);
  const _0x437ce0 = _0x2b86fc === 2;
  const _0x22fc65 = !_0x437ce0 || _0x1312de.length === _0x3517fa && _0x1312de.every(_0x2694b4 => _0x2694b4.length === 1);
  const _0x117b4a = !_0x437ce0 || _0x22fc65 && _0x1312de.every((_0x5a1633, _0x5bc322) => _0x5bc322 === 0 || _0x5a1633[0] !== _0x1312de[_0x5bc322 - 1][0]);
  const _0x43369a = !_0x437ce0 || _0x39a8b6.every(_0x5bec53 => _0x5bec53.length === _0x2b86fc && _0x5bec53.every(_0x8b7889 => _0x8b7889 === 0 || _0x8b7889 === 1));
  const _0x37cdc5 = _0xcac25b.filter(_0x1f0f04 => _0x1f0f04.types.some(_0x4b18fa => {
    var _0x29d9d6;
    if ((_0x29d9d6 = _0x271f52.enemies[_0x4b18fa]) == null) {
      return undefined;
    } else {
      return _0x29d9d6.boss;
    }
  })).map((_0xc49434, _0x34cdd4) => {
    const _0x2062a7 = function (_0x9e2c7e) {
      return Array.from({
        length: _0x9e2c7e.count
      }, (_0x2fe271, _0x18ea72) => _0x9e2c7e.types[_0x18ea72 % _0x9e2c7e.types.length]);
    }(_0xc49434);
    const _0x29836d = _0x2062a7.filter(_0x87a1c9 => {
      var _0x75fc88;
      if ((_0x75fc88 = _0x271f52.enemies[_0x87a1c9]) == null) {
        return undefined;
      } else {
        return _0x75fc88.boss;
      }
    }).length;
    const _0xbd9ead = _0x2062a7.length - _0x29836d;
    return {
      bossWave: _0xcac25b.indexOf(_0xc49434) + 1,
      bossCount: _0x29836d,
      minionCount: _0xbd9ead,
      minionIntervalMs: _0xc49434.delay,
      pass: _0x29836d === 1 && _0xbd9ead >= (_0x2a35bd.minimumBossMinionCount ?? 8) && _0xc49434.delay <= (_0x2a35bd.maximumBossMinionIntervalMs ?? 8000),
      sequence: _0x34cdd4
    };
  });
  const _0x573168 = _0xf14429(_0x344d53.data).map(_0x3cf86b => _0x3cf86b.id);
  const _0x42f159 = [...new Set(_0xcac25b.flatMap(_0x2a6ce2 => _0x4629a0(_0x344d53.data, _0x2a6ce2).map(_0x268d16 => _0x268d16.id)))];
  const _0x3d2516 = _0x573168.filter(_0x34d12c => !_0x42f159.includes(_0x34d12c));
  const _0x3f219c = ((_0x16d19e = _0x2a35bd.requiredWaveCounts) == null ? undefined : _0x16d19e[_0x344d53.id]) ?? null;
  return {
    entryCount: _0x2b86fc,
    earlyRoutes: _0x1312de,
    laterRoutes: _0x39a8b6,
    earlySingleEntryPass: _0x22fc65,
    earlyAlternationPass: _0x117b4a,
    laterSimultaneousPass: _0x43369a,
    entryPatternPass: _0x22fc65 && _0x117b4a && _0x43369a,
    bossSupport: _0x37cdc5,
    bossSupportPass: _0x37cdc5.every(_0xe6aa30 => _0xe6aa30.pass),
    availableRouteVariants: _0x573168,
    traversedRouteVariants: _0x42f159,
    missingRouteVariants: _0x3d2516,
    routeTraversalPass: _0x3d2516.length === 0,
    expectedWaveCount: _0x3f219c,
    actualWaveCount: _0xcac25b.length,
    waveCountPass: _0x3f219c === null || _0xcac25b.length === _0x3f219c
  };
}
function C(_0x1b4789, _0x40c56e) {
  let _0x317f50 = _0x1b4789.damage * 1000 / _0x1b4789.cooldown;
  if (_0x1b4789.armorPiercing) {
    _0x317f50 *= 1.15;
  }
  if (_0x1b4789.splashRadius) {
    _0x317f50 *= 1 + _0x40c56e.combat.splashDamageMultiplier;
  }
  if (_0x1b4789.chainCount) {
    _0x317f50 *= 1 + _0x40c56e.combat.chainDamageMultiplier * _0x1b4789.chainCount;
  }
  if (_0x1b4789.slowFactor) {
    _0x317f50 *= 1 + (1 - _0x1b4789.slowFactor) * 0.48;
  }
  return _0x317f50;
}
function I(_0x1d7e00, _0x4ca805 = {}) {
  var _0x421724;
  const _0x1ebd56 = _0x4ca805.balance ?? _0x4c860b;
  const _0x4c1dec = _0x1ebd56.levels[_0x1d7e00.id] ?? _0x1d7e00;
  const _0xb52cb9 = {
    ..._0x1d7e00,
    ..._0x4c1dec
  };
  const _0xaca0a7 = _0x4ca805.waves ?? _0x2217e4(_0x1d7e00.id, _0x1ebd56);
  const _0x453605 = _0x4ca805.seed ?? 1;
  const _0x76a0f4 = c[_0x4ca805.profile] ?? c[d];
  const _0x160e3b = function (_0x5aec80) {
    let _0x5df10f = _0x5aec80 >>> 0;
    return () => {
      _0x5df10f += 1831565813;
      let _0x4d8825 = _0x5df10f;
      _0x4d8825 = Math.imul(_0x4d8825 ^ _0x4d8825 >>> 15, _0x4d8825 | 1);
      _0x4d8825 ^= _0x4d8825 + Math.imul(_0x4d8825 ^ _0x4d8825 >>> 7, _0x4d8825 | 61);
      return ((_0x4d8825 ^ _0x4d8825 >>> 14) >>> 0) / 4294967296;
    };
  }(_0x453605);
  const _0x51a46b = {
    level: _0xb52cb9,
    levelWaves: _0xaca0a7,
    balance: _0x1ebd56,
    geometry: p(_0xb52cb9),
    towerValueCache: new WeakMap(),
    gold: _0xb52cb9.startingGold ?? _0x1ebd56.economy.defaultStartingGold,
    coreHealth: _0xb52cb9.coreHealth ?? _0x1ebd56.core.defaultHealth,
    initialCoreHealth: _0xb52cb9.coreHealth ?? _0x1ebd56.core.defaultHealth,
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
  const _0x1d406d = [];
  for (let _0x1f7a16 = 0; _0x1f7a16 < _0xaca0a7.length; _0x1f7a16 += 1) {
    const _0x10c99e = _0xaca0a7[_0x1f7a16];
    _0x51a46b.waveNumber = _0x1f7a16 + 1;
    const _0x3d7e77 = _0x51a46b.gold;
    const _0x5e5fbe = b(_0x51a46b, _0x10c99e, _0x76a0f4);
    const _0x50bfbc = x(_0x51a46b, _0x10c99e, _0x160e3b, _0x76a0f4);
    const _0x302439 = _0x51a46b.coreHealth;
    const _0xb34d85 = _0x51a46b.kills;
    const _0x552611 = _0x51a46b.leaks;
    const _0x455b0b = W(_0x51a46b, _0x10c99e, R(_0x51a46b.geometry, _0x10c99e, _0x160e3b), _0x160e3b, _0x76a0f4);
    if (_0x51a46b.coreHealth > 0) {
      _0x51a46b.gold += _0x1ebd56.economy.waveClearBaseGold + (_0x1f7a16 + 1) * _0x1ebd56.economy.waveClearGoldPerWave;
    }
    _0x1d406d.push({
      wave: _0x1f7a16 + 1,
      coreRemaining: _0x51a46b.coreHealth,
      coreLost: _0x302439 - _0x51a46b.coreHealth,
      kills: _0x51a46b.kills - _0xb34d85,
      leaks: _0x51a46b.leaks - _0x552611,
      purchases: _0x50bfbc + _0x455b0b.midWavePurchases,
      dismantles: _0x5e5fbe + _0x455b0b.midWaveDismantles,
      preWavePurchases: _0x50bfbc,
      preWaveDismantles: _0x5e5fbe,
      goldBefore: _0x3d7e77,
      goldAfter: _0x51a46b.gold,
      ..._0x455b0b
    });
    if (_0x51a46b.coreHealth <= 0) {
      break;
    }
  }
  const _0x191a25 = _0x51a46b.coreHealth > 0 && _0x1d406d.length === _0xaca0a7.length;
  const _0x2ca778 = _0x1d406d.reduce((_0x29d472, _0x5725dd) => _0x29d472 + _0x5725dd.durationMs, 0) + Math.max(0, _0x1d406d.length - 1) * _0x1ebd56.waveTiming.minimumNextWaveDelayMs;
  const _0x511c77 = _0x1d406d.filter(_0x5e932b => _0x5e932b.bossSurvivalMs !== null);
  const _0x3d49a2 = _0x51a46b.coreHealth / _0x51a46b.initialCoreHealth;
  const _0x31ff35 = Math.round(Math.min(100, Math.max(0, (1 - _0x3d49a2) * 55 + _0x51a46b.leaks * 4 + (_0x191a25 ? 15 : 65) - Math.min(15, _0x51a46b.gold / 120))));
  return {
    levelId: _0x1d7e00.id,
    levelName: _0x1d7e00.name,
    seed: _0x453605,
    profile: _0x76a0f4.id,
    victory: _0x191a25,
    wavesCleared: _0x1d406d.filter(_0x26b929 => _0x26b929.coreRemaining > 0).length,
    coreRemaining: _0x51a46b.coreHealth,
    initialCoreHealth: _0x51a46b.initialCoreHealth,
    coreRatio: _0x3d49a2,
    kills: _0x51a46b.kills,
    leaks: _0x51a46b.leaks,
    goldRemaining: _0x51a46b.gold,
    goldSpent: _0x51a46b.spent,
    goldRefunded: _0x51a46b.refunds,
    netGoldSpent: _0x51a46b.spent - _0x51a46b.refunds,
    totalDamage: _0x51a46b.totalDamage,
    towerCount: _0x51a46b.towers.length,
    placements: _0x51a46b.placements,
    dismantles: _0x51a46b.dismantles,
    actions: _0x51a46b.actions,
    dismantleCount: _0x51a46b.dismantles.length,
    midWaveBuildCount: _0x51a46b.actions.filter(_0x4c2b5c => _0x4c2b5c.phase === "mid-wave" && _0x4c2b5c.type === "build").length,
    midWaveDismantleCount: _0x51a46b.actions.filter(_0x13a8c3 => _0x13a8c3.phase === "mid-wave" && _0x13a8c3.type === "dismantle").length,
    proactiveUpgradeCount: _0x51a46b.actions.filter(_0xf41204 => _0xf41204.type === "dismantle" && _0xf41204.reason === "proactive-upgrade").length,
    towerStats: _0x51a46b.towers.map(({
      id: _0x1afe78,
      spotIndex: _0x428ddb,
      damage: _0x4c4d36,
      kills: _0x3d4ecc,
      shots: _0x5632e3
    }) => ({
      id: _0x1afe78,
      spotIndex: _0x428ddb,
      damage: _0x4c4d36,
      kills: _0x3d4ecc,
      shots: _0x5632e3
    })),
    waves: _0x1d406d,
    totalDurationMs: _0x2ca778,
    bossSurvivalMs: _0x511c77.length ? Math.max(..._0x511c77.map(_0x63da18 => _0x63da18.bossSurvivalMs)) : null,
    bossResolution: ((_0x421724 = _0x511c77[0]) == null ? undefined : _0x421724.bossResolution) ?? null,
    bossProgress: _0x511c77.length ? Math.max(..._0x511c77.map(_0x17f107 => _0x17f107.bossProgress)) : null,
    bossCentralRoutePass: _0x511c77.every(_0x4c3ffb => _0x4c3ffb.bossCentralRoutePass),
    bossSummonCount: _0x511c77.reduce((_0x5c4d16, _0x17168c) => _0x5c4d16 + _0x17168c.bossSummonCount, 0),
    maximumRouteImbalance: Math.max(0, ..._0x1d406d.map(_0x3c65b0 => _0x3c65b0.routeImbalance)),
    difficultyScore: _0x31ff35
  };
}
function P(_0x265191, _0x3a4296) {
  const _0xfae578 = [..._0x265191].sort((_0x32b2a1, _0x4e3355) => _0x32b2a1 - _0x4e3355);
  return _0xfae578[Math.min(_0xfae578.length - 1, Math.floor((_0xfae578.length - 1) * _0x3a4296))];
}
function B(_0x4f8c0e = {}) {
  const _0x3f4497 = Math.max(1, Math.min(100, _0x4f8c0e.trials ?? 20));
  const _0x78f416 = _0x4f8c0e.profile ?? d;
  const _0x6d549a = _0x4f8c0e.levels ?? _0x435173;
  const _0x34280a = (_0x4f8c0e.balance ?? _0x4c860b).experienceTargets ?? {};
  const _0x7d76bb = _0x6d549a.map((_0x77a2f1, _0x3651fb) => {
    const _0x2ea3b3 = _0x4f8c0e.balance ?? _0x4c860b;
    const _0x5c6986 = _0x2217e4(_0x77a2f1.id, _0x2ea3b3);
    const _0x484796 = _0x5c6986.some(_0x49379e => _0x49379e.types.some(_0x1c6a58 => {
      var _0x313b5f;
      if ((_0x313b5f = _0x2ea3b3.enemies[_0x1c6a58]) == null) {
        return undefined;
      } else {
        return _0x313b5f.boss;
      }
    }));
    const _0x265d5e = Array.from({
      length: _0x3f4497
    }, (_0x1fde22, _0x285e92) => I(_0x77a2f1, {
      seed: (_0x4f8c0e.seed ?? 7301) + _0x3651fb * 1009 + _0x285e92 * 17,
      profile: _0x78f416,
      balance: _0x4f8c0e.balance ?? _0x4c860b
    }));
    const _0x405374 = _0x265d5e.filter(_0x4983c5 => _0x4983c5.victory).length;
    const _0x35c932 = _0x265d5e.map(_0x53ab11 => _0x53ab11.coreRatio);
    const _0x6885d9 = _0x265d5e.map(_0x435f12 => _0x435f12.difficultyScore);
    const _0x2ffe65 = _0x265d5e.filter(_0xcf7298 => _0xcf7298.bossSurvivalMs !== null);
    const _0x1f6f95 = _0x2ffe65.filter(_0x25c6a2 => _0x25c6a2.bossResolution === "killed");
    const _0x28b902 = _0x265d5e.filter(_0x23b9b0 => _0x23b9b0.midWaveBuildCount + _0x23b9b0.midWaveDismantleCount > 0);
    const _0x3d9f56 = _0x265d5e.filter(_0x2f5294 => _0x2f5294.actions.some(_0x30ac61 => _0x30ac61.phase === "mid-wave" && _0x30ac61.wave <= 2));
    const _0x46b282 = [..._0x265d5e].sort((_0x262c7c, _0x2b43ce) => _0x262c7c.difficultyScore - _0x2b43ce.difficultyScore)[Math.floor(_0x265d5e.length / 2)];
    const _0x1c598c = D(_0x77a2f1, _0x5c6986, _0x2ea3b3, _0x34280a);
    return {
      levelId: _0x77a2f1.id,
      levelName: _0x77a2f1.name,
      hasConfiguredBoss: _0x484796,
      trials: _0x3f4497,
      winRate: _0x405374 / _0x3f4497,
      averageCoreRatio: _0x35c932.reduce((_0x4082bb, _0x49541f) => _0x4082bb + _0x49541f, 0) / _0x3f4497,
      p10CoreRatio: P(_0x35c932, 0.1),
      averageLeaks: _0x265d5e.reduce((_0x1e7b1a, _0x511ba8) => _0x1e7b1a + _0x511ba8.leaks, 0) / _0x3f4497,
      averageGoldRemaining: _0x265d5e.reduce((_0xee98c8, _0x587cd3) => _0xee98c8 + _0x587cd3.goldRemaining, 0) / _0x3f4497,
      averageTowers: _0x265d5e.reduce((_0x36f9bc, _0x23f5e1) => _0x36f9bc + _0x23f5e1.towerCount, 0) / _0x3f4497,
      averageDismantles: _0x265d5e.reduce((_0x422130, _0x163343) => _0x422130 + _0x163343.dismantleCount, 0) / _0x3f4497,
      averageProactiveUpgrades: _0x265d5e.reduce((_0x2a75e2, _0x321a3a) => _0x2a75e2 + _0x321a3a.proactiveUpgradeCount, 0) / _0x3f4497,
      averageDamageEfficiency: _0x265d5e.reduce((_0x44e658, _0xa54088) => _0x44e658 + _0xa54088.totalDamage / Math.max(1, _0xa54088.netGoldSpent), 0) / _0x3f4497,
      averageMidWaveBuilds: _0x265d5e.reduce((_0x3f673b, _0x4a400d) => _0x3f673b + _0x4a400d.midWaveBuildCount, 0) / _0x3f4497,
      averageMidWaveDismantles: _0x265d5e.reduce((_0x3e7531, _0x93eede) => _0x3e7531 + _0x93eede.midWaveDismantleCount, 0) / _0x3f4497,
      midWaveActionRate: _0x28b902.length / _0x3f4497,
      earlyWaveMidActionRate: _0x3d9f56.length / _0x3f4497,
      averageDurationMs: _0x265d5e.reduce((_0x3e5ac4, _0x4c8b93) => _0x3e5ac4 + _0x4c8b93.totalDurationMs, 0) / _0x3f4497,
      averageBossSurvivalMs: _0x2ffe65.length ? _0x2ffe65.reduce((_0x671af9, _0x5c5d57) => _0x671af9 + _0x5c5d57.bossSurvivalMs, 0) / _0x2ffe65.length : null,
      averageBossProgress: _0x1f6f95.length ? _0x1f6f95.reduce((_0x462ca1, _0x1ce5c7) => _0x462ca1 + _0x1ce5c7.bossProgress, 0) / _0x1f6f95.length : null,
      bossKillRate: _0x2ffe65.length ? _0x1f6f95.length / _0x2ffe65.length : 0,
      averageBossSummons: _0x2ffe65.length ? _0x2ffe65.reduce((_0x180f59, _0x59509c) => _0x180f59 + _0x59509c.bossSummonCount, 0) / _0x2ffe65.length : 0,
      bossCentralRoutePass: _0x2ffe65.every(_0x43e494 => _0x43e494.bossCentralRoutePass),
      bossEncounterRate: _0x2ffe65.length / _0x3f4497,
      maximumRouteImbalance: Math.max(..._0x265d5e.map(_0x4ded95 => _0x4ded95.maximumRouteImbalance)),
      difficultyScore: Math.round(_0x6885d9.reduce((_0x4a369d, _0x12007c) => _0x4a369d + _0x12007c, 0) / _0x3f4497),
      standards: _0x1c598c,
      representative: _0x46b282
    };
  });
  const _0x4654c7 = _0x7d76bb.slice(1).filter((_0x3a2e9d, _0x35895f) => _0x3a2e9d.difficultyScore <= _0x7d76bb[_0x35895f].difficultyScore).map(_0x4fe56a => _0x4fe56a.levelId);
  const _0x296e91 = _0x34280a.minimumDurationMs ?? 180000;
  const _0x2d838a = _0x34280a.maximumDurationMs ?? 300000;
  const _0x4d750a = _0x34280a.maximumBossLevelDurationMs ?? 360000;
  const _0x5a7b1f = _0x34280a.minimumBossSurvivalMs ?? 60000;
  const _0x41517b = _0x34280a.minimumBossDeathProgress ?? 0.65;
  const _0x41757e = _0x34280a.minimumBossSummons ?? 6;
  const _0x55a88c = _0x34280a.minimumDifficultyScores ?? [15, 20, 25, 30, 35, 40];
  const _0x374307 = _0x34280a.minimumMidWaveActionRate ?? 0.8;
  const _0x3ce543 = _0x34280a.minimumEarlyWaveMidActionRate ?? 0.5;
  const _0x1a11b6 = function (_0x3fca69, _0x2417df) {
    const _0x23ce2c = Object.entries(_0x3fca69.towers).map(([_0x30eaf2, _0x1513bb]) => ({
      id: _0x30eaf2,
      price: _0x1513bb.price,
      strength: Math.round(C(_0x1513bb, _0x3fca69) * 10) / 10
    })).sort((_0xc7a392, _0x4b430a) => _0xc7a392.price - _0x4b430a.price);
    const _0x14f40c = _0x23ce2c.map(_0x2b0d78 => _0x2b0d78.price);
    const _0x55a769 = _0x23ce2c.map(_0x18beda => _0x18beda.strength);
    const _0x172f50 = Math.max(..._0x14f40c) / Math.min(..._0x14f40c);
    const _0x355b22 = Math.max(..._0x55a769) / Math.min(..._0x55a769);
    const _0xd496c0 = _0x23ce2c.every((_0x45c210, _0x465b92) => _0x465b92 === 0 || _0x45c210.strength > _0x23ce2c[_0x465b92 - 1].strength);
    return {
      towers: _0x23ce2c,
      priceSpreadRatio: Math.round(_0x172f50 * 100) / 100,
      strengthSpreadRatio: Math.round(_0x355b22 * 100) / 100,
      strengthOrderPass: _0xd496c0,
      pass: _0x172f50 >= (_0x2417df.minimumTowerPriceSpreadRatio ?? 3) && _0x355b22 >= (_0x2417df.minimumTowerStrengthSpreadRatio ?? 2.5) && _0xd496c0
    };
  }(_0x4f8c0e.balance ?? _0x4c860b, _0x34280a);
  return {
    generatedAt: new Date().toISOString(),
    profile: _0x78f416,
    trials: _0x3f4497,
    results: _0x7d76bb,
    summary: {
      allPlayable: _0x7d76bb.every(_0xf34a8b => _0xf34a8b.winRate > 0),
      allBeatable: _0x7d76bb.every(_0x16ff4f => _0x16ff4f.winRate >= 0.5),
      progressionBreaks: _0x4654c7,
      difficultySpread: Math.max(..._0x7d76bb.map(_0x57d163 => _0x57d163.difficultyScore)) - Math.min(..._0x7d76bb.map(_0x208365 => _0x208365.difficultyScore)),
      durationFailures: _0x7d76bb.filter(_0x325a0a => {
        const _0x2d473b = _0x325a0a.averageBossSurvivalMs === null ? _0x2d838a : _0x4d750a;
        return _0x325a0a.averageDurationMs < _0x296e91 || _0x325a0a.averageDurationMs > _0x2d473b;
      }).map(_0x67ba63 => _0x67ba63.levelId),
      bossSurvivalFailures: _0x7d76bb.filter(_0x3bfe6d => _0x3bfe6d.hasConfiguredBoss && (_0x3bfe6d.averageBossSurvivalMs === null || _0x3bfe6d.averageBossSurvivalMs < _0x5a7b1f)).map(_0x21b4cf => _0x21b4cf.levelId),
      bossPositionFailures: _0x7d76bb.filter(_0x1d9e23 => _0x1d9e23.hasConfiguredBoss && (_0x1d9e23.averageBossProgress === null || _0x1d9e23.averageBossProgress < _0x41517b)).map(_0x4aa46f => _0x4aa46f.levelId),
      bossKillFailures: _0x7d76bb.filter(_0x3681e2 => _0x3681e2.hasConfiguredBoss && _0x3681e2.bossKillRate < 1).map(_0x2398f0 => _0x2398f0.levelId),
      bossSummonFailures: _0x7d76bb.filter(_0x4b278 => _0x4b278.hasConfiguredBoss && _0x4b278.averageBossSummons < _0x41757e).map(_0x448fbe => _0x448fbe.levelId),
      bossRouteFailures: _0x7d76bb.filter(_0x37ebe7 => _0x37ebe7.hasConfiguredBoss && !_0x37ebe7.bossCentralRoutePass).map(_0x402a78 => _0x402a78.levelId),
      routeBalanceFailures: _0x7d76bb.filter(_0x2981ac => _0x2981ac.maximumRouteImbalance > 1).map(_0xe0ccf2 => _0xe0ccf2.levelId),
      entryPatternFailures: _0x7d76bb.filter(_0x4d4304 => !_0x4d4304.standards.entryPatternPass).map(_0x4ff760 => _0x4ff760.levelId),
      routeTraversalFailures: _0x7d76bb.filter(_0x2d6b90 => !_0x2d6b90.standards.routeTraversalPass).map(_0x51885b => _0x51885b.levelId),
      waveCountFailures: _0x7d76bb.filter(_0x1a0906 => !_0x1a0906.standards.waveCountPass).map(_0x2c57ce => _0x2c57ce.levelId),
      bossMinionFailures: _0x7d76bb.filter(_0x2a7216 => !_0x2a7216.standards.bossSupportPass).map(_0x386dc9 => _0x386dc9.levelId),
      towerDifferentiation: _0x1a11b6,
      midWaveActionFailures: _0x7d76bb.filter(_0x4cd1fd => _0x4cd1fd.midWaveActionRate < _0x374307).map(_0x4508bd => _0x4508bd.levelId),
      earlyWaveMidActionFailures: _0x7d76bb.filter(_0x3e3a1b => _0x3e3a1b.earlyWaveMidActionRate < _0x3ce543).map(_0x14abac => _0x14abac.levelId),
      difficultyFloorFailures: _0x7d76bb.filter((_0x5162e0, _0x1db4e2) => _0x5162e0.difficultyScore < (_0x55a88c[_0x1db4e2] ?? _0x55a88c.at(-1))).map(_0x598e76 => _0x598e76.levelId),
      experienceTargets: {
        minimumDurationMs: _0x296e91,
        maximumDurationMs: _0x2d838a,
        maximumBossLevelDurationMs: _0x4d750a,
        minimumBossSurvivalMs: _0x5a7b1f,
        minimumBossDeathProgress: _0x41517b,
        minimumBossSummons: _0x41757e,
        minimumDifficultyScores: _0x55a88c,
        earlySingleEntryWaveCount: _0x34280a.earlySingleEntryWaveCount ?? 2,
        multiEntrySimultaneousFromWave: _0x34280a.multiEntrySimultaneousFromWave ?? 3,
        minimumBossMinionCount: _0x34280a.minimumBossMinionCount ?? 8,
        maximumBossMinionIntervalMs: _0x34280a.maximumBossMinionIntervalMs ?? 8000,
        minimumTowerPriceSpreadRatio: _0x34280a.minimumTowerPriceSpreadRatio ?? 3,
        minimumTowerStrengthSpreadRatio: _0x34280a.minimumTowerStrengthSpreadRatio ?? 2.5,
        minimumMidWaveActionRate: _0x374307,
        minimumEarlyWaveMidActionRate: _0x3ce543,
        requiredWaveCounts: _0x34280a.requiredWaveCounts ?? {}
      }
    }
  };
}
function k(_0x564c32 = {}) {
  var _0x41284c;
  var _0x2390f2;
  const _0x43ab7a = (_0x564c32.profiles ?? u).map(_0x1f3338 => B({
    ..._0x564c32,
    profile: _0x1f3338
  }));
  const _0x5c04e5 = _0x43ab7a.map(_0x214a58 => {
    const _0x5dd0a3 = _0x214a58.results.length;
    return {
      profile: _0x214a58.profile,
      label: c[_0x214a58.profile].label,
      averageWinRate: _0x214a58.results.reduce((_0x302922, _0x54131a) => _0x302922 + _0x54131a.winRate, 0) / _0x5dd0a3,
      averageCoreRatio: _0x214a58.results.reduce((_0x519f66, _0x4988fb) => _0x519f66 + _0x4988fb.averageCoreRatio, 0) / _0x5dd0a3,
      averageLeaks: _0x214a58.results.reduce((_0x4f2528, _0x434325) => _0x4f2528 + _0x434325.averageLeaks, 0) / _0x5dd0a3,
      averageDamageEfficiency: _0x214a58.results.reduce((_0x373fcf, _0x1c897e) => _0x373fcf + _0x1c897e.averageDamageEfficiency, 0) / _0x5dd0a3,
      averageDismantles: _0x214a58.results.reduce((_0x4187b8, _0x38fcd9) => _0x4187b8 + _0x38fcd9.averageDismantles, 0) / _0x5dd0a3,
      averageProactiveUpgrades: _0x214a58.results.reduce((_0x483f41, _0x21c868) => _0x483f41 + _0x21c868.averageProactiveUpgrades, 0) / _0x5dd0a3,
      allLevelsBeatable: _0x214a58.summary.allBeatable,
      report: _0x214a58
    };
  });
  const _0x643d07 = Math.max(..._0x5c04e5.map(_0x1ac620 => _0x1ac620.averageDamageEfficiency));
  const _0x4480cd = Math.max(1, ..._0x5c04e5.map(_0x1125c2 => _0x1125c2.averageLeaks));
  _0x5c04e5.forEach(_0x1cca7f => {
    const _0x68bd32 = _0x1cca7f.averageDamageEfficiency / _0x643d07;
    const _0x548e5a = 1 - _0x1cca7f.averageLeaks / _0x4480cd;
    _0x1cca7f.score = Math.round((_0x1cca7f.averageWinRate * 60 + _0x1cca7f.averageCoreRatio * 25 + _0x68bd32 * 10 + _0x548e5a * 5 - Math.min(4, _0x1cca7f.averageDismantles * 0.2)) * 10) / 10;
  });
  _0x5c04e5.sort((_0xf275e0, _0x51a779) => _0x51a779.score - _0xf275e0.score);
  return {
    generatedAt: new Date().toISOString(),
    trials: ((_0x41284c = _0x43ab7a[0]) == null ? undefined : _0x41284c.trials) ?? 0,
    winner: ((_0x2390f2 = _0x5c04e5[0]) == null ? undefined : _0x2390f2.profile) ?? null,
    candidates: _0x5c04e5
  };
}
export { c as AGENT_PROFILES, u as COMPARABLE_AGENT_PROFILES, d as DEFAULT_AGENT_PROFILE, k as compareAgentProfiles, B as runBalanceSuite, I as simulateLevel };