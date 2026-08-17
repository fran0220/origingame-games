export const TOWER_TYPES = {
  archer: {
    id: "archer",
    name: "弓箭塔",
    color: 12887412,
    accent: 9132587,
    cost: 40,
    range: 2.6,
    damage: 8,
    fireRate: 1.1,
    sellRatio: 0.65,
    upgrades: [{
      cost: 30,
      range: 3,
      damage: 12,
      fireRate: 1.25
    }, {
      cost: 50,
      range: 3.4,
      damage: 18,
      fireRate: 1.4
    }]
  },
  mage: {
    id: "mage",
    name: "法师塔",
    color: 10189823,
    accent: 5914040,
    cost: 55,
    range: 2.2,
    damage: 14,
    fireRate: 0.55,
    aoe: 0.9,
    sellRatio: 0.65,
    upgrades: [{
      cost: 40,
      range: 2.6,
      damage: 20,
      fireRate: 0.65,
      aoe: 1.1
    }, {
      cost: 65,
      range: 3,
      damage: 28,
      fireRate: 0.75,
      aoe: 1.3
    }]
  },
  frost: {
    id: "frost",
    name: "冰霜塔",
    color: 8308991,
    accent: 2779802,
    cost: 45,
    range: 2.4,
    damage: 4,
    fireRate: 0.8,
    slow: 0.45,
    slowDuration: 1.4,
    sellRatio: 0.65,
    upgrades: [{
      cost: 35,
      range: 2.8,
      damage: 6,
      fireRate: 0.9,
      slow: 0.55,
      slowDuration: 1.6
    }, {
      cost: 55,
      range: 3.2,
      damage: 9,
      fireRate: 1,
      slow: 0.65,
      slowDuration: 1.9
    }]
  }
};
export const TOWER_ORDER = ["archer", "mage", "frost"];
export const START_GOLD = 120;
export const START_HP = 20;
export const TOTAL_WAVES = 10;
export const WAVE_CLEAR_BONUS = [25, 30, 35, 40, 45, 50, 55, 60, 70, 100];
export const ENEMY_TYPES = {
  goblin: {
    id: "goblin",
    name: "哥布林",
    color: 5943114,
    accent: 2976296,
    hp: 30,
    speed: 1.35,
    reward: 4,
    damage: 1,
    scale: 0.85
  },
  runner: {
    id: "runner",
    name: "疾行斥候",
    color: 15251530,
    accent: 10514464,
    hp: 22,
    speed: 2.15,
    reward: 5,
    damage: 1,
    scale: 0.75
  },
  armored: {
    id: "armored",
    name: "装甲步兵",
    color: 8029332,
    accent: 3817552,
    hp: 75,
    speed: 0.95,
    reward: 8,
    damage: 2,
    scale: 1.05
  },
  boss: {
    id: "boss",
    name: "兽人督军",
    color: 11550784,
    accent: 6297624,
    hp: 280,
    speed: 0.75,
    reward: 40,
    damage: 5,
    scale: 1.45
  }
};
export const WAVES = [[{
  type: "goblin",
  count: 6,
  interval: 0.85
}], [{
  type: "goblin",
  count: 8,
  interval: 0.75
}, {
  type: "runner",
  count: 2,
  interval: 0.9
}], [{
  type: "goblin",
  count: 8,
  interval: 0.7
}, {
  type: "armored",
  count: 2,
  interval: 1.1
}], [{
  type: "runner",
  count: 6,
  interval: 0.55
}, {
  type: "goblin",
  count: 6,
  interval: 0.65
}], [{
  type: "goblin",
  count: 8,
  interval: 0.6
}, {
  type: "armored",
  count: 3,
  interval: 0.95
}, {
  type: "boss",
  count: 1,
  interval: 1.2
}], [{
  type: "runner",
  count: 8,
  interval: 0.5
}, {
  type: "armored",
  count: 4,
  interval: 0.85
}], [{
  type: "goblin",
  count: 10,
  interval: 0.55
}, {
  type: "runner",
  count: 6,
  interval: 0.5
}, {
  type: "armored",
  count: 4,
  interval: 0.8
}], [{
  type: "armored",
  count: 8,
  interval: 0.7
}, {
  type: "runner",
  count: 8,
  interval: 0.45
}], [{
  type: "goblin",
  count: 12,
  interval: 0.45
}, {
  type: "armored",
  count: 6,
  interval: 0.65
}, {
  type: "runner",
  count: 6,
  interval: 0.4
}], [{
  type: "goblin",
  count: 10,
  interval: 0.4
}, {
  type: "runner",
  count: 8,
  interval: 0.4
}, {
  type: "armored",
  count: 6,
  interval: 0.6
}, {
  type: "boss",
  count: 2,
  interval: 1.5
}]];
export function enemyStatsForWave(_0x584530, _0x52cbf4) {
  const _0x40d613 = ENEMY_TYPES[_0x584530];
  if (!_0x40d613) {
    return null;
  }
  const _0x2bafb5 = 1 + _0x52cbf4 * 0.12;
  return {
    ..._0x40d613,
    hp: Math.round(_0x40d613.hp * _0x2bafb5),
    reward: _0x40d613.reward + Math.floor(_0x52cbf4 * 0.5)
  };
}
export function towerRange(_0x5b92df, _0x3b439b = 0) {
  const _0x295f8b = TOWER_TYPES[_0x5b92df];
  if (!_0x295f8b) {
    return 2;
  }
  if (_0x3b439b <= 0) {
    return _0x295f8b.range;
  }
  const _0xf22dc7 = _0x295f8b.upgrades[Math.min(_0x3b439b, _0x295f8b.upgrades.length) - 1];
  return _0xf22dc7?.range ?? _0x295f8b.range;
}
export function towerInvested(_0x2257c3, _0x30c79e = 0) {
  const _0x46ff61 = TOWER_TYPES[_0x2257c3];
  if (!_0x46ff61) {
    return 0;
  }
  let _0x36164f = _0x46ff61.cost;
  for (let _0x3c7641 = 0; _0x3c7641 < _0x30c79e && _0x3c7641 < _0x46ff61.upgrades.length; _0x3c7641++) {
    _0x36164f += _0x46ff61.upgrades[_0x3c7641].cost;
  }
  return _0x36164f;
}
export function towerSellValue(_0x850e58, _0x1ecfa5 = 0) {
  const _0x423f45 = TOWER_TYPES[_0x850e58];
  if (_0x423f45) {
    return Math.floor(towerInvested(_0x850e58, _0x1ecfa5) * _0x423f45.sellRatio);
  } else {
    return 0;
  }
}
export function towerStatsAtLevel(_0x74b871, _0x33dab0 = 0) {
  const _0x2f37ed = TOWER_TYPES[_0x74b871];
  if (!_0x2f37ed) {
    return null;
  }
  const _0x4b3935 = Math.max(0, Math.min(_0x33dab0, _0x2f37ed.upgrades.length));
  const _0x3cd87b = {
    range: _0x2f37ed.range,
    damage: _0x2f37ed.damage,
    fireRate: _0x2f37ed.fireRate,
    aoe: _0x2f37ed.aoe ?? 0,
    slow: _0x2f37ed.slow ?? 0,
    slowDuration: _0x2f37ed.slowDuration ?? 0
  };
  for (let _0x1e549a = 0; _0x1e549a < _0x4b3935; _0x1e549a++) {
    const _0x226eaf = _0x2f37ed.upgrades[_0x1e549a];
    if (_0x226eaf) {
      if (_0x226eaf.range != null) {
        _0x3cd87b.range = _0x226eaf.range;
      }
      if (_0x226eaf.damage != null) {
        _0x3cd87b.damage = _0x226eaf.damage;
      }
      if (_0x226eaf.fireRate != null) {
        _0x3cd87b.fireRate = _0x226eaf.fireRate;
      }
      if (_0x226eaf.aoe != null) {
        _0x3cd87b.aoe = _0x226eaf.aoe;
      }
      if (_0x226eaf.slow != null) {
        _0x3cd87b.slow = _0x226eaf.slow;
      }
      if (_0x226eaf.slowDuration != null) {
        _0x3cd87b.slowDuration = _0x226eaf.slowDuration;
      }
    }
  }
  return {
    typeId: _0x74b871,
    level: _0x4b3935,
    range: _0x3cd87b.range,
    damage: _0x3cd87b.damage,
    fireRate: _0x3cd87b.fireRate,
    aoe: _0x3cd87b.aoe || 0,
    slow: _0x3cd87b.slow || 0,
    slowDuration: _0x3cd87b.slowDuration || 0,
    maxLevel: _0x2f37ed.upgrades.length,
    nextUpgradeCost: _0x4b3935 < _0x2f37ed.upgrades.length ? _0x2f37ed.upgrades[_0x4b3935].cost : null
  };
}
export function towerMaxLevel(_0x72c9ba) {
  return TOWER_TYPES[_0x72c9ba]?.upgrades?.length ?? 0;
}