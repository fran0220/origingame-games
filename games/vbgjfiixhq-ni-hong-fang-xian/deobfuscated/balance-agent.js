(function (_0x4e0df6) {
  'use strict';

  const _0x1f6c99 = function () {
    const _0x1634bf = ["arc-neon", "drone-hive", "hacker-relay", "mag-rail-sniper", "street-mercenary"];
    const _0xb2e8c2 = {
      adaptive: {
        "arc-neon": 1,
        "drone-hive": 1,
        "hacker-relay": 1,
        "mag-rail-sniper": 1,
        "street-mercenary": 1
      },
      offense: {
        "arc-neon": 1.22,
        "drone-hive": 1.16,
        "hacker-relay": 0.76,
        "mag-rail-sniper": 1.24,
        "street-mercenary": 0.72
      },
      defense: {
        "arc-neon": 0.96,
        "drone-hive": 0.94,
        "hacker-relay": 1.28,
        "mag-rail-sniper": 0.92,
        "street-mercenary": 1.32
      }
    };
    const _0x5b7c43 = {
      adaptive: 80,
      offense: 20,
      defense: 60
    };
    const _0x6a096d = [1, 1.36, 1.78];
    const _0x48fba6 = 1672 / 941 * 0.62;
    function _0x5f1cca(_0x524004, _0x4226f5, _0xc2c2f4) {
      return Math.max(_0x4226f5, Math.min(_0xc2c2f4, _0x524004));
    }
    function _0x4e5034(_0x114a95) {
      if (_0x114a95.length) {
        return _0x114a95.reduce((_0x596943, _0x4a4f00) => _0x596943 + _0x4a4f00, 0) / _0x114a95.length;
      } else {
        return 0;
      }
    }
    function _0x5b2adb(_0x4b0fee, _0x2ee19b) {
      if (!_0x4b0fee.length) {
        return 0;
      }
      const _0x362806 = [..._0x4b0fee].sort((_0xcc54c6, _0x19f0ec) => _0xcc54c6 - _0x19f0ec);
      return _0x362806[Math.min(_0x362806.length - 1, Math.floor((_0x362806.length - 1) * _0x2ee19b))];
    }
    function _0x46ae98(_0x4383bd) {
      let _0x320b71 = 2166136261;
      const _0x1050b3 = String(_0x4383bd);
      for (let _0x4f1b4c = 0; _0x4f1b4c < _0x1050b3.length; _0x4f1b4c += 1) {
        _0x320b71 ^= _0x1050b3.charCodeAt(_0x4f1b4c);
        _0x320b71 = Math.imul(_0x320b71, 16777619);
      }
      return _0x320b71 >>> 0;
    }
    function _0x451608(_0x56c4bf) {
      let _0x19e3f6 = _0x46ae98(_0x56c4bf) || 1;
      return function () {
        _0x19e3f6 += 1831565813;
        let _0x4d6c4c = _0x19e3f6;
        _0x4d6c4c = Math.imul(_0x4d6c4c ^ _0x4d6c4c >>> 15, _0x4d6c4c | 1);
        _0x4d6c4c ^= _0x4d6c4c + Math.imul(_0x4d6c4c ^ _0x4d6c4c >>> 7, _0x4d6c4c | 61);
        return ((_0x4d6c4c ^ _0x4d6c4c >>> 14) >>> 0) / 4294967296;
      };
    }
    function _0x616234(_0x35b8ee, _0xaa17fb = 6) {
      if (_0x35b8ee.length < 3) {
        return _0x35b8ee.map(_0x34bab9 => ({
          ..._0x34bab9
        }));
      }
      const _0x30a603 = [{
        ..._0x35b8ee[0]
      }];
      for (let _0x2b3139 = 0; _0x2b3139 < _0x35b8ee.length - 1; _0x2b3139 += 1) {
        const _0xed8779 = _0x35b8ee[Math.max(0, _0x2b3139 - 1)];
        const _0x2e45d1 = _0x35b8ee[_0x2b3139];
        const _0x2eb968 = _0x35b8ee[_0x2b3139 + 1];
        const _0x4e6088 = _0x35b8ee[Math.min(_0x35b8ee.length - 1, _0x2b3139 + 2)];
        for (let _0x18e3d5 = 1; _0x18e3d5 <= _0xaa17fb; _0x18e3d5 += 1) {
          const _0x36ce2f = _0x18e3d5 / _0xaa17fb;
          const _0x345b38 = _0x36ce2f * _0x36ce2f;
          const _0x4178ae = _0x345b38 * _0x36ce2f;
          _0x30a603.push({
            x: (_0x2e45d1.x * 2 + (-_0xed8779.x + _0x2eb968.x) * _0x36ce2f + (_0xed8779.x * 2 - _0x2e45d1.x * 5 + _0x2eb968.x * 4 - _0x4e6088.x) * _0x345b38 + (-_0xed8779.x + _0x2e45d1.x * 3 - _0x2eb968.x * 3 + _0x4e6088.x) * _0x4178ae) * 0.5,
            y: (_0x2e45d1.y * 2 + (-_0xed8779.y + _0x2eb968.y) * _0x36ce2f + (_0xed8779.y * 2 - _0x2e45d1.y * 5 + _0x2eb968.y * 4 - _0x4e6088.y) * _0x345b38 + (-_0xed8779.y + _0x2e45d1.y * 3 - _0x2eb968.y * 3 + _0x4e6088.y) * _0x4178ae) * 0.5
          });
        }
      }
      return _0x30a603;
    }
    function _0x3f6663(_0x1bb83d) {
      const _0x2d90f6 = [];
      let _0xb91cde = 0;
      for (let _0xec1b1f = 1; _0xec1b1f < _0x1bb83d.length; _0xec1b1f += 1) {
        const _0x15d263 = {
          x: _0x1bb83d[_0xec1b1f - 1].x * 10,
          y: _0x1bb83d[_0xec1b1f - 1].y * 10
        };
        const _0x3ba220 = {
          x: _0x1bb83d[_0xec1b1f].x * 10,
          y: _0x1bb83d[_0xec1b1f].y * 10
        };
        const _0x240420 = Math.hypot(_0x3ba220.x - _0x15d263.x, (_0x3ba220.y - _0x15d263.y) / 0.62);
        _0x2d90f6.push({
          from: _0x15d263,
          to: _0x3ba220,
          start: _0xb91cde,
          length: _0x240420
        });
        _0xb91cde += _0x240420;
      }
      return {
        segments: _0x2d90f6,
        metricLength: _0xb91cde
      };
    }
    function _0x4fd372(_0x59665e) {
      const _0x4459a7 = {};
      ["left", "right"].forEach(_0xb7eb79 => {
        const _0xadeb21 = [..._0x59665e.entries[_0xb7eb79], ..._0x59665e.shared.slice(1), ..._0x59665e.exits[_0xb7eb79].slice(1)];
        _0x4459a7[_0xb7eb79] = _0x3f6663(_0x616234(_0xadeb21));
      });
      return {
        level: _0x59665e,
        routes: _0x4459a7
      };
    }
    function _0x214d8c(_0x4bf7a8, _0x27b824, _0x4fee45) {
      const _0x40f126 = _0x4bf7a8.routes[_0x4fee45] || _0x4bf7a8.routes.left;
      const _0x289d2a = _0x5f1cca(_0x27b824, 0, 1000) / 1000 * _0x40f126.metricLength;
      const _0x36bcde = _0x40f126.segments.find(_0x488b5a => _0x289d2a <= _0x488b5a.start + _0x488b5a.length) || _0x40f126.segments[_0x40f126.segments.length - 1];
      const _0x2058a6 = _0x36bcde.length ? _0x5f1cca((_0x289d2a - _0x36bcde.start) / _0x36bcde.length, 0, 1) : 0;
      return {
        x: _0x36bcde.from.x + (_0x36bcde.to.x - _0x36bcde.from.x) * _0x2058a6,
        y: _0x36bcde.from.y + (_0x36bcde.to.y - _0x36bcde.from.y) * _0x2058a6,
        dx: _0x36bcde.to.x - _0x36bcde.from.x,
        dy: _0x36bcde.to.y - _0x36bcde.from.y
      };
    }
    function _0x106a0e(_0x38160c, _0x35caa4) {
      return Math.hypot(_0x38160c.x - _0x35caa4.x, (_0x38160c.y - _0x35caa4.y) / _0x48fba6);
    }
    function _0x47254d(_0x4e6cd1, _0x3c794e) {
      let _0xdf86c3 = null;
      for (let _0x4a422c = 0; _0x4a422c <= 1000; _0x4a422c += 5) {
        ["left", "right"].forEach(_0xb37d0d => {
          const _0x18a9c1 = _0x214d8c(_0x4e6cd1, _0x4a422c, _0xb37d0d);
          const _0x2b6304 = _0x106a0e(_0x3c794e, _0x18a9c1);
          if (!_0xdf86c3 || _0x2b6304 < _0xdf86c3.separation) {
            _0xdf86c3 = {
              ..._0x18a9c1,
              distance: _0x4a422c,
              lane: _0xb37d0d,
              separation: _0x2b6304
            };
          }
        });
      }
      return _0xdf86c3;
    }
    function _0x3a1859(_0x9f4b4a, _0x169008, _0x56443b) {
      return _0x9f4b4a.towerCombat[_0x169008.typeId].ranges[_0x169008.level - 1] * (_0x56443b[_0x169008.typeId]?.range || 1) * _0x169008.rangeScale;
    }
    function _0x3c8f6b(_0x350541, _0x4a2720, _0x2a35b2, _0x3c7657) {
      return _0x2a35b2 * (_0x3c7657[_0x4a2720.typeId]?.damage || 1);
    }
    function _0x314348(_0x4c474f, _0x588a6a, _0x3c04ce, _0x442d78, _0xda3045, _0x581267, _0x3068b1 = 1) {
      const _0x3f5ea1 = _0x4c474f.towerCombat[_0x442d78];
      const _0xecc023 = _0x3f5ea1.ranges[_0xda3045 - 1] * (_0x581267[_0x442d78]?.range || 1) * _0x3068b1;
      let _0x4f4d4e = 0;
      let _0x18cd9e = 0;
      ["left", "right"].forEach(_0x3390af => {
        for (let _0x100215 = 20; _0x100215 <= 980; _0x100215 += 20) {
          const _0x122156 = _0x106a0e(_0x3c04ce, _0x214d8c(_0x588a6a, _0x100215, _0x3390af));
          _0x18cd9e += 1;
          if (_0x122156 <= _0xecc023 && (!_0x3f5ea1.blindSpot || _0x122156 >= _0x3f5ea1.blindSpot)) {
            _0x4f4d4e += (_0x100215 >= 300 && _0x100215 <= 760 ? 1.18 : 1) * (1 - _0x122156 / Math.max(_0xecc023, 1) * 0.22);
          }
        }
      });
      const _0x51c108 = _0x4f4d4e / Math.max(1, _0x18cd9e);
      if (_0x442d78 === "street-mercenary") {
        const _0x26f652 = _0x47254d(_0x588a6a, _0x3c04ce);
        if (_0x26f652.separation <= _0xecc023) {
          return 0.62 + (1 - _0x26f652.separation / _0xecc023) * 0.38;
        } else {
          return 0.02;
        }
      }
      if (_0x442d78 === "arc-neon") {
        return _0x51c108 * 1.18;
      } else if (_0x442d78 === "hacker-relay") {
        return _0x51c108 * 1.1;
      } else {
        return _0x51c108;
      }
    }
    function _0x1593f2(_0x4b509c, _0x542384, _0x9908f7, _0x3c3015 = 4) {
      const _0x342424 = {
        gang: 0,
        riot: 0,
        ninja: 0,
        aerostat: 0,
        devourer: 0,
        boss: 0
      };
      for (let _0x16df8e = _0x542384; _0x16df8e < _0x542384 + _0x3c3015; _0x16df8e += 1) {
        _0x4b509c.buildWavePlan(_0x16df8e, _0x9908f7).forEach(_0x537700 => {
          if (_0x537700.boss) {
            _0x342424.boss += 1;
          } else {
            _0x342424[_0x537700.type] = (_0x342424[_0x537700.type] || 0) + 1;
          }
        });
      }
      const _0x63bbaa = Object.values(_0x342424).reduce((_0x24a13c, _0x13c4bc) => _0x24a13c + _0x13c4bc, 0) || 1;
      Object.keys(_0x342424).forEach(_0x5cf7cf => {
        _0x342424[_0x5cf7cf] /= _0x63bbaa;
      });
      return _0x342424;
    }
    function _0x5b258a(_0x2fa16b, _0x16c87c, _0x1b2191) {
      const _0x3cc6bd = {
        "arc-neon": 1 + _0x16c87c.gang * 2.2 + _0x16c87c.ninja * 0.6,
        "drone-hive": 1 + _0x16c87c.aerostat * 4 + _0x16c87c.ninja * 0.5,
        "hacker-relay": 0.8 + _0x16c87c.ninja * 3.2 + _0x16c87c.devourer * 3.2 + _0x16c87c.boss * 0.8,
        "mag-rail-sniper": 1 + _0x16c87c.riot * 3.4 + _0x16c87c.boss * 5 + _0x16c87c.devourer * 0.7,
        "street-mercenary": 1 + (_0x16c87c.gang + _0x16c87c.riot + _0x16c87c.ninja + _0x16c87c.devourer) * 1.15 - _0x16c87c.aerostat * 1.2
      }[_0x2fa16b];
      return Math.max(0.2, _0x3cc6bd) * _0xb2e8c2[_0x1b2191][_0x2fa16b];
    }
    function _0x2e8929(_0x534c4b, _0x2758cf) {
      const _0x4a3774 = _0x534c4b.towerEconomy[_0x2758cf.typeId].cost;
      return Math.round(_0x4a3774 * (_0x2758cf.level === 1 ? 0.7 : 1.05));
    }
    function _0x4d9741(_0x3a3751, _0x254398, _0x54c7d5, _0x59819, _0x43d8ed, _0x42fb76) {
      const _0x57ba9f = _0x254398.level.slots[_0x59819];
      const _0x380e9f = {
        x: _0x57ba9f.x * 10,
        y: _0x57ba9f.y * 10
      };
      return {
        id: _0x54c7d5 + ":" + _0x59819,
        typeId: _0x54c7d5,
        slotIndex: _0x59819,
        source: _0x380e9f,
        rangeScale: Math.max(1, Number(_0x57ba9f.rangeScale) || 1),
        level: 1,
        spent: _0x3a3751.towerEconomy[_0x54c7d5].cost,
        cooldown: _0x43d8ed() * 0.25,
        targetId: null,
        rally: _0x47254d(_0x254398, _0x380e9f),
        damage: 0,
        utility: 0,
        attacks: 0,
        coverage: _0x314348(_0x3a3751, _0x254398, _0x380e9f, _0x54c7d5, 1, _0x42fb76, Math.max(1, Number(_0x57ba9f.rangeScale) || 1)),
        mercs: null
      };
    }
    function _0x28814f(_0x4137fe, _0x293c42, _0x3348f9, _0x36a024, _0x147003, _0x336798, _0x4ab2e5) {
      const _0x46b739 = _0x1593f2(_0x293c42, _0x36a024, _0x4137fe.mapIndex);
      const _0x5b52d1 = _0x5b7c43[_0x147003];
      let _0x427451 = 0;
      while (_0x427451 < 40) {
        _0x427451 += 1;
        const _0x2c0c94 = new Set(_0x4137fe.towers.map(_0x13bb3c => _0x13bb3c.slotIndex));
        const _0x1ccf1d = _0x1634bf.filter(_0x1f074c => !_0x4137fe.towers.some(_0x177cc7 => _0x177cc7.typeId === _0x1f074c));
        const _0x51d490 = [];
        _0x1634bf.forEach(_0x26b735 => {
          const _0x2bf488 = _0x293c42.towerEconomy[_0x26b735];
          if (!!_0x2bf488 && !(_0x2bf488.cost > _0x4137fe.coins - _0x5b52d1)) {
            _0x3348f9.level.slots.forEach((_0x164c77, _0x190c49) => {
              if (_0x2c0c94.has(_0x190c49)) {
                return;
              }
              const _0x3b20d3 = {
                x: _0x164c77.x * 10,
                y: _0x164c77.y * 10
              };
              const _0x360ffc = _0x314348(_0x293c42, _0x3348f9, _0x3b20d3, _0x26b735, 1, _0x4ab2e5, Math.max(1, Number(_0x164c77.rangeScale) || 1));
              let _0x57c383 = _0x1ccf1d.includes(_0x26b735) && _0x4137fe.towers.length < 5 ? 5 : 1;
              if (_0x1ccf1d.includes(_0x26b735) && _0x26b735 === "drone-hive" && _0x46b739.aerostat > 0) {
                _0x57c383 *= 2.2;
              }
              if (_0x1ccf1d.includes(_0x26b735) && _0x26b735 === "hacker-relay" && _0x46b739.ninja + _0x46b739.devourer > 0) {
                _0x57c383 *= 1.35;
              }
              const _0x2c8eb3 = _0x5b258a(_0x26b735, _0x46b739, _0x147003) * (0.18 + _0x360ffc) * _0x57c383 / _0x2bf488.cost * (0.96 + _0x336798() * 0.08);
              _0x51d490.push({
                kind: "build",
                typeId: _0x26b735,
                slotIndex: _0x190c49,
                cost: _0x2bf488.cost,
                score: _0x2c8eb3
              });
            });
          }
        });
        if (!_0x1ccf1d.length || _0x4137fe.towers.length >= 5) {
          _0x4137fe.towers.forEach(_0x3a4d45 => {
            if (_0x3a4d45.level >= 3) {
              return;
            }
            const _0x13e54c = _0x2e8929(_0x293c42, _0x3a4d45);
            if (_0x13e54c > _0x4137fe.coins - _0x5b52d1) {
              return;
            }
            const _0xdc6b99 = _0x6a096d[_0x3a4d45.level];
            const _0x3ddeb6 = _0x6a096d[_0x3a4d45.level - 1];
            const _0x16e77f = _0x5b258a(_0x3a4d45.typeId, _0x46b739, _0x147003) * _0x3a4d45.coverage * (_0xdc6b99 - _0x3ddeb6) / _0x13e54c * (0.97 + _0x336798() * 0.06);
            _0x51d490.push({
              kind: "upgrade",
              tower: _0x3a4d45,
              cost: _0x13e54c,
              score: _0x16e77f
            });
          });
        }
        if (!_0x51d490.length) {
          break;
        }
        _0x51d490.sort((_0x5e067d, _0x5c3618) => _0x5c3618.score - _0x5e067d.score);
        const _0x1e3435 = _0x51d490[0];
        _0x4137fe.coins -= _0x1e3435.cost;
        if (_0x1e3435.kind === "build") {
          _0x4137fe.towers.push(_0x4d9741(_0x293c42, _0x3348f9, _0x1e3435.typeId, _0x1e3435.slotIndex, _0x336798, _0x4ab2e5));
        } else {
          _0x1e3435.tower.level += 1;
          _0x1e3435.tower.spent += _0x1e3435.cost;
          _0x1e3435.tower.coverage = _0x314348(_0x293c42, _0x3348f9, _0x1e3435.tower.source, _0x1e3435.tower.typeId, _0x1e3435.tower.level, _0x4ab2e5, _0x1e3435.tower.rangeScale);
        }
      }
    }
    function _0x509e04(_0x3ce028, _0x252422) {
      return _0x214d8c(_0x3ce028.geometry, _0x252422.distance, _0x252422.lane);
    }
    function _0x355de9(_0x54344c, _0xda7d20, _0x260662, _0x5de970) {
      return !_0x260662.dead && _0x106a0e(_0xda7d20.source, _0x509e04(_0x54344c, _0x260662)) <= _0x5de970;
    }
    function _0x4e2aac(_0x52d12a, _0x444af6, _0x53faee, _0x35489e, _0x2426d6) {
      const _0x11bf54 = _0x53faee.boss ? _0x444af6.bossTypes[_0x53faee.type] : _0x444af6.enemyTypes[_0x53faee.type];
      const _0x2a411d = _0x444af6.difficultyMapPressure?.[_0x52d12a.difficulty]?.[_0x52d12a.mapIndex] || (_0x52d12a.difficulty === "hard" ? _0x444af6.hardMapPressure?.[_0x52d12a.mapIndex] : 1) || 1;
      const _0x1ad6d2 = _0x444af6.mapCoefficients[_0x52d12a.mapIndex] * (1 + (_0x35489e - 1) * 0.05) * _0x444af6.difficultyCoefficients[_0x52d12a.difficulty] * _0x2a411d;
      const _0x101ad3 = Math.max(0.1, Number(_0x53faee.power) || 1);
      const _0x4d9675 = {
        id: ++_0x52d12a.enemySequence,
        typeId: _0x53faee.type,
        type: _0x11bf54,
        lane: _0x53faee.lane,
        distance: 0,
        hp: _0x11bf54.hp * _0x1ad6d2 * _0x101ad3,
        maxHp: _0x11bf54.hp * _0x1ad6d2 * _0x101ad3,
        shield: (_0x11bf54.shield || 0) * _0x1ad6d2 * _0x101ad3,
        maxShield: (_0x11bf54.shield || 0) * _0x1ad6d2 * _0x101ad3,
        armor: _0x11bf54.armor || 0,
        speed: (Number.isFinite(_0x53faee.speed) ? _0x53faee.speed : _0x11bf54.speed) * (1 + Math.min(0.1, _0x52d12a.mapIndex * 0.02)),
        attack: Number.isFinite(_0x53faee.attack) ? _0x53faee.attack : _0x11bf54.attack,
        reward: Number.isFinite(_0x53faee.reward) ? _0x53faee.reward : _0x11bf54.reward,
        spawnTime: _0x2426d6,
        lastHit: -Infinity,
        revealedUntil: 0,
        slowUntil: 0,
        slowAmount: 0,
        vulnerableUntil: 0,
        vulnerability: 0,
        shieldBlockedUntil: 0,
        lastTeleport: _0x2426d6,
        phased: false,
        blocked: false,
        dead: false,
        stage: 1,
        components: _0x11bf54.components?.map(_0x4f24bf => ({
          name: _0x4f24bf,
          hp: _0x11bf54.componentHp * _0x1ad6d2
        })) || []
      };
      _0x52d12a.enemies.push(_0x4d9675);
      return _0x4d9675;
    }
    function _0x3620d7(_0x49b815, _0x49604e) {
      if (!_0x49604e.dead) {
        _0x49604e.dead = true;
        _0x49b815.coins += _0x5a20c3(_0x49b815, _0x49604e.reward);
        _0x49b815.kills += 1;
      }
    }
    function _0x5a20c3(_0x6c7aa7, _0x1743fd) {
      const _0x1cffc1 = Math.max(0, Number(_0x1743fd) || 0);
      if (_0x1cffc1) {
        return Math.max(1, Math.round(_0x1cffc1 * (_0x6c7aa7.runtime.rewardScales?.[_0x6c7aa7.mapIndex] || 1)));
      } else {
        return 0;
      }
    }
    function _0x50cf71(_0x3e119e, _0x1d863a, _0x26f664, _0x4c71ff, _0x480c66, _0x4674ec, _0x3d3fd5) {
      if (!_0x26f664 || _0x26f664.dead || _0x26f664.phased && _0x3d3fd5 >= _0x26f664.revealedUntil) {
        return 0;
      }
      let _0x4765d4 = _0x4c71ff;
      if (_0x3d3fd5 < _0x26f664.vulnerableUntil) {
        _0x4765d4 *= 1 + _0x26f664.vulnerability;
      }
      if (_0x480c66 === "physical") {
        _0x4765d4 *= 1 - _0x26f664.armor * (1 - _0x4674ec);
      }
      const _0x405695 = _0x509e04(_0x3e119e, _0x26f664);
      if (_0x26f664.typeId === "riot" && _0x405695.dx * (_0x1d863a.source.x - _0x405695.x) + _0x405695.dy * (_0x1d863a.source.y - _0x405695.y) < 0) {
        _0x4765d4 *= 1.25;
      }
      let _0x589c96 = 0;
      if (_0x26f664.shield > 0) {
        const _0x5d25c3 = Math.min(_0x26f664.shield, _0x4765d4);
        _0x26f664.shield -= _0x5d25c3;
        _0x4765d4 -= _0x5d25c3;
        _0x589c96 += _0x5d25c3;
      }
      if (_0x26f664.components.length && _0x4765d4 > 0) {
        const _0x7240ff = _0x26f664.components.find(_0x4f7a42 => _0x4f7a42.hp > 0);
        if (_0x7240ff) {
          const _0x30214a = Math.min(_0x7240ff.hp, _0x4765d4 * 0.35);
          _0x7240ff.hp -= _0x30214a;
          _0x589c96 += _0x30214a;
          _0x4765d4 *= 0.65;
        }
      }
      const _0x3e56b0 = Math.min(Math.max(0, _0x26f664.hp), Math.max(0, _0x4765d4));
      _0x26f664.hp -= _0x4765d4;
      _0x589c96 += _0x3e56b0;
      _0x26f664.lastHit = _0x3d3fd5;
      _0x1d863a.damage += _0x589c96;
      if (_0x26f664.hp <= 0) {
        _0x3620d7(_0x3e119e, _0x26f664);
      }
      return _0x589c96;
    }
    function _0x5ea89c(_0x5e5950) {
      return _0x5e5950.reduce((_0x4b14e9, _0x2b9b25) => !_0x4b14e9 || _0x2b9b25.hp + _0x2b9b25.shield > _0x4b14e9.hp + _0x4b14e9.shield ? _0x2b9b25 : _0x4b14e9, null);
    }
    function _0x1efc31(_0x38fea3, _0x4ceff5, _0x3b5b7b, _0x127eea, _0xd4837e, _0x529290, _0x3c5f2a) {
      _0x3b5b7b.mercs ||= Array.from({
        length: _0x127eea.mercenaryCount
      }, () => ({
        hp: _0x127eea.mercenaryHealth * _0x127eea.healthScale[_0x3b5b7b.level - 1],
        cooldown: 0,
        respawnAt: 0,
        targetId: null
      }));
      const _0x23f7b3 = _0x127eea.mercenaryHealth * _0x127eea.healthScale[_0x3b5b7b.level - 1];
      const _0x5c2731 = _0x38fea3.enemies.filter(_0x249b25 => _0xcae4d9(_0x249b25, _0x529290) && _0x106a0e(_0x3b5b7b.rally, _0x509e04(_0x38fea3, _0x249b25)) <= _0x127eea.blockRange);
      _0x3b5b7b.mercs.forEach(_0x130943 => {
        if (_0x130943.respawnAt) {
          if (_0x529290 < _0x130943.respawnAt) {
            return;
          }
          _0x130943.respawnAt = 0;
          _0x130943.hp = _0x23f7b3;
        }
        let _0x3f7942 = _0x38fea3.enemies.find(_0x323bd0 => _0x323bd0.id === _0x130943.targetId && !_0x323bd0.dead && _0x5c2731.includes(_0x323bd0));
        if (!_0x3f7942) {
          _0x3f7942 = _0x5c2731.find(_0x217300 => !_0x3b5b7b.mercs.some(_0x192079 => _0x192079 !== _0x130943 && _0x192079.targetId === _0x217300.id));
          _0x130943.targetId = _0x3f7942?.id ?? null;
        }
        if (_0x3f7942) {
          _0x3f7942.blocked = true;
          _0x3b5b7b.utility += _0xd4837e * 22;
          _0x130943.hp -= _0x3f7942.attack * _0xd4837e;
          if (_0x130943.hp <= 0) {
            _0x130943.targetId = null;
            _0x130943.respawnAt = _0x529290 + _0x127eea.respawn;
            return;
          }
          _0x130943.cooldown -= _0xd4837e;
          if (_0x130943.cooldown <= 0) {
            _0x50cf71(_0x38fea3, _0x3b5b7b, _0x3f7942, _0x3c8f6b(_0x4ceff5, _0x3b5b7b, _0x127eea.damage * _0x127eea.damageScale[_0x3b5b7b.level - 1], _0x3c5f2a), "physical", 0, _0x529290);
            _0x3b5b7b.attacks += 1;
            _0x130943.cooldown += _0x127eea.cooldown;
          }
        }
      });
    }
    function _0x3fc089(_0x3a3487, _0x1f1c47, _0x5cd556, _0x36eb70, _0x588d08, _0xc2f566) {
      const _0x4ab09f = _0x1f1c47.towerCombat[_0x5cd556.typeId];
      const _0x52fae0 = _0x3a1859(_0x1f1c47, _0x5cd556, _0xc2f566);
      if (_0x5cd556.typeId !== "street-mercenary") {
        _0x5cd556.cooldown -= _0x36eb70;
        if (!(_0x5cd556.cooldown > 0)) {
          if (_0x5cd556.typeId === "hacker-relay") {
            const _0x4f77c6 = _0x3a3487.enemies.filter(_0x3d127d => _0x355de9(_0x3a3487, _0x5cd556, _0x3d127d, _0x52fae0));
            _0x4f77c6.forEach(_0x20da39 => {
              _0x20da39.revealedUntil = _0x588d08 + _0x4ab09f.duration;
              _0x20da39.slowUntil = _0x588d08 + _0x4ab09f.duration;
              _0x20da39.slowAmount = Math.max(_0x20da39.slowAmount, _0x4ab09f.slow);
              _0x20da39.vulnerableUntil = _0x588d08 + _0x4ab09f.duration;
              _0x20da39.vulnerability = Math.max(_0x20da39.vulnerability, _0x4ab09f.vulnerability);
              _0x20da39.shieldBlockedUntil = _0x588d08 + _0x4ab09f.duration;
              _0x5cd556.utility += _0x4ab09f.duration * (_0x20da39.type.phase || _0x20da39.type.network ? 34 : 12);
              _0x50cf71(_0x3a3487, _0x5cd556, _0x20da39, _0x3c8f6b(_0x1f1c47, _0x5cd556, _0x4ab09f.damage * _0x5cd556.level, _0xc2f566), "energy", 0, _0x588d08);
            });
            if (_0x4f77c6.length) {
              _0x5cd556.attacks += 1;
            }
            _0x5cd556.cooldown += _0x4ab09f.cooldown;
            return;
          }
          if (_0x5cd556.typeId === "mag-rail-sniper") {
            const _0x384ae1 = _0x5ea89c(_0x3a3487.enemies.filter(_0x5d27a7 => _0x355de9(_0x3a3487, _0x5cd556, _0x5d27a7, _0x52fae0) && _0x106a0e(_0x5cd556.source, _0x509e04(_0x3a3487, _0x5d27a7)) >= _0x4ab09f.blindSpot));
            if (_0x384ae1) {
              _0x50cf71(_0x3a3487, _0x5cd556, _0x384ae1, _0x3c8f6b(_0x1f1c47, _0x5cd556, _0x4ab09f.damage * _0x4ab09f.damageScale[_0x5cd556.level - 1], _0xc2f566), "physical", _0x4ab09f.armorPenetration, _0x588d08);
              _0x5cd556.attacks += 1;
            }
            _0x5cd556.cooldown += _0x4ab09f.cooldown;
            return;
          }
          if (_0x5cd556.typeId === "arc-neon") {
            const _0x4b57cb = _0x3a3487.enemies.filter(_0x1944a6 => !_0x1944a6.type.air && _0x355de9(_0x3a3487, _0x5cd556, _0x1944a6, _0x52fae0)).sort((_0x3b053c, _0x8306a4) => _0x3b053c.distance - _0x8306a4.distance);
            const _0x32f3a0 = _0x4b57cb.length ? [_0x4b57cb[0]] : [];
            while (_0x32f3a0.length && _0x32f3a0.length < 3) {
              const _0x4659da = _0x32f3a0[_0x32f3a0.length - 1];
              const _0x4a088a = _0x3a3487.enemies.filter(_0x5be84e => !_0x5be84e.dead && !_0x5be84e.type.air && !_0x32f3a0.includes(_0x5be84e) && _0x106a0e(_0x509e04(_0x3a3487, _0x4659da), _0x509e04(_0x3a3487, _0x5be84e)) <= _0x4ab09f.chainDistance).sort((_0x6a975a, _0xceb362) => _0x106a0e(_0x509e04(_0x3a3487, _0x4659da), _0x509e04(_0x3a3487, _0x6a975a)) - _0x106a0e(_0x509e04(_0x3a3487, _0x4659da), _0x509e04(_0x3a3487, _0xceb362)))[0];
              if (!_0x4a088a) {
                break;
              }
              _0x32f3a0.push(_0x4a088a);
            }
            _0x32f3a0.forEach((_0x3584c1, _0x13d084) => {
              const _0x5182af = _0x3584c1.distance >= 390 && _0x3584c1.distance <= 520;
              const _0x40cafa = _0x3c8f6b(_0x1f1c47, _0x5cd556, _0x4ab09f.chainDamage[_0x13d084] * _0x4ab09f.damageScale[_0x5cd556.level - 1] * (_0x5182af ? 1 + _0x4ab09f.wetBonus : 1), _0xc2f566);
              _0x50cf71(_0x3a3487, _0x5cd556, _0x3584c1, _0x40cafa, "energy", 0, _0x588d08);
            });
            if (_0x32f3a0.length) {
              _0x5cd556.attacks += 1;
            }
            _0x5cd556.cooldown += _0x4ab09f.cooldown;
            return;
          }
          if (_0x5cd556.typeId === "drone-hive") {
            const _0x10ce12 = _0x52fae0 + (_0x5cd556.targetId ? _0x4ab09f.pursuit : 0);
            const _0x2103ee = _0x3a3487.enemies.filter(_0x3ec201 => _0x355de9(_0x3a3487, _0x5cd556, _0x3ec201, _0x10ce12)).sort((_0x26d2f8, _0x4803a6) => Number(_0x4803a6.type.air) - Number(_0x26d2f8.type.air) || _0x4803a6.distance - _0x26d2f8.distance)[0];
            if (!_0x2103ee) {
              _0x5cd556.targetId = null;
              _0x5cd556.cooldown = 0.08;
              return;
            }
            const _0x45e1ba = _0x5cd556.targetId !== _0x2103ee.id;
            _0x5cd556.targetId = _0x2103ee.id;
            const _0x4352d1 = _0x106a0e(_0x5cd556.source, _0x509e04(_0x3a3487, _0x2103ee));
            const _0x5d4924 = _0x3c8f6b(_0x1f1c47, _0x5cd556, _0x4ab09f.damage * _0x4ab09f.damageScale[_0x5cd556.level - 1] * (_0x2103ee.type.air ? 1 + _0x4ab09f.flyingBonus : 1), _0xc2f566);
            for (let _0xf613ad = 0; _0xf613ad < _0x4ab09f.drones; _0xf613ad += 1) {
              _0x50cf71(_0x3a3487, _0x5cd556, _0x2103ee, _0x5d4924, "physical", 0, _0x588d08);
            }
            _0x5cd556.attacks += 1;
            _0x5cd556.cooldown += _0x4ab09f.cooldown + (_0x45e1ba ? _0x4352d1 / 420 : 0);
          }
        }
      } else {
        _0x1efc31(_0x3a3487, _0x1f1c47, _0x5cd556, _0x4ab09f, _0x36eb70, _0x588d08, _0xc2f566);
      }
    }
    function _0x4829f3(_0x3ab4be, _0x4055b3) {
      return Boolean(_0x3ab4be?.type?.phase && (_0x4055b3 - _0x3ab4be.spawnTime) % 5 < 1 && _0x4055b3 >= _0x3ab4be.revealedUntil);
    }
    function _0xcae4d9(_0x4bbc42, _0x3e293a) {
      return Boolean(_0x4bbc42 && !_0x4bbc42.dead && !_0x4bbc42.type.air && !_0x4829f3(_0x4bbc42, _0x3e293a));
    }
    function _0x5d46c6(_0x43ba4c, _0x41180c, _0x13b9ab, _0x46aef8, _0x3c7d03) {
      if (_0x41180c.type.network && _0x41180c.shield < _0x41180c.maxShield && _0x46aef8 - _0x41180c.lastHit >= 4 && _0x46aef8 >= _0x41180c.shieldBlockedUntil) {
        _0x41180c.shield = Math.min(_0x41180c.maxShield, _0x41180c.shield + _0x41180c.maxShield * 0.12 * _0x3c7d03);
      }
      if (_0x41180c.typeId === "enforcer") {
        const _0x2072dd = _0x41180c.components.find(_0x259650 => _0x259650.name === "盾牌");
        const _0x1e28af = _0x41180c.components.find(_0x29ccd4 => _0x29ccd4.name === "导弹舱");
        const _0x1d6cb3 = _0x41180c.components.find(_0x57a433 => _0x57a433.name === "推进器");
        _0x41180c.armor = _0x2072dd?.hp > 0 ? 0.25 : 0.08;
        _0x41180c.attack = _0x1e28af?.hp > 0 ? _0x41180c.type.attack : _0x41180c.type.attack * 0.6;
        _0x41180c.speed = _0x41180c.type.speed * (1 + Math.min(0.1, _0x43ba4c.mapIndex * 0.02)) * (_0x1d6cb3?.hp > 0 ? 1 : 0.7);
      }
      if (_0x41180c.typeId === "eve") {
        const _0x365c02 = _0x41180c.hp / _0x41180c.maxHp;
        _0x41180c.stage = _0x365c02 > 2 / 3 ? 1 : _0x365c02 > 1 / 3 ? 2 : 3;
        if (_0x41180c.stage === 1 && _0x46aef8 - _0x41180c.lastTeleport >= 4) {
          _0x41180c.distance = Math.min(1000, _0x41180c.distance + 55);
          _0x41180c.lastTeleport = _0x46aef8;
        }
        _0x41180c.speed = _0x41180c.stage === 1 ? 0 : _0x41180c.stage === 2 ? (1 + Math.min(0.1, _0x43ba4c.mapIndex * 0.02)) * 12 : 0;
        if (_0x41180c.stage === 3) {
          _0x41180c.distance = Math.max(_0x41180c.distance, 720);
        }
      }
    }
    function _0x286f3d(_0xd6cfd5, _0x129f42, _0x1a8bf9, _0x180f13, _0x3ff45a) {
      _0x28814f(_0xd6cfd5, _0x129f42, _0xd6cfd5.geometry, _0x1a8bf9, _0xd6cfd5.strategy, _0x180f13, _0x3ff45a);
      const _0x53ca66 = _0x129f42.buildWavePlan(_0x1a8bf9, _0xd6cfd5.mapIndex);
      const _0x34d788 = [];
      let _0x4a7ae4 = 0.2;
      _0x53ca66.forEach(_0x5743f2 => {
        _0x34d788.push({
          ..._0x5743f2,
          spawnAt: _0x4a7ae4
        });
        _0x4a7ae4 += _0x5743f2.delay * (0.94 + _0x180f13() * 0.12);
      });
      const _0x331299 = _0xd6cfd5.health;
      const _0x294be7 = _0xd6cfd5.coins;
      const _0x48b0d7 = _0xd6cfd5.kills;
      let _0x315dce = 0;
      let _0x481aeb = 0;
      const _0x3cc910 = 0.1;
      const _0x4b8749 = 190;
      while (_0x481aeb < _0x4b8749 && _0xd6cfd5.health > 0) {
        while (_0x315dce < _0x34d788.length && _0x34d788[_0x315dce].spawnAt <= _0x481aeb) {
          _0x4e2aac(_0xd6cfd5, _0x129f42, _0x34d788[_0x315dce], _0x1a8bf9, _0x481aeb);
          _0x315dce += 1;
        }
        _0xd6cfd5.enemies.forEach(_0x208ef3 => {
          _0x208ef3.phased = _0x4829f3(_0x208ef3, _0x481aeb);
        });
        _0xd6cfd5.enemies.forEach(_0x270e1b => {
          _0x270e1b.blocked = false;
        });
        _0xd6cfd5.towers.forEach(_0x2ce7df => _0x3fc089(_0xd6cfd5, _0x129f42, _0x2ce7df, _0x3cc910, _0x481aeb, _0x3ff45a));
        _0xd6cfd5.enemies.forEach(_0x27e8a7 => {
          if (_0x27e8a7.dead) {
            return;
          }
          _0x5d46c6(_0xd6cfd5, _0x27e8a7, _0x129f42, _0x481aeb, _0x3cc910);
          const _0x4c44f4 = _0x481aeb < _0x27e8a7.slowUntil ? 1 - _0x27e8a7.slowAmount : 1;
          if (!_0x27e8a7.blocked) {
            _0x27e8a7.distance += _0x27e8a7.speed * _0x4c44f4 * _0x3cc910;
          }
          if (_0x27e8a7.distance >= 1000) {
            _0x27e8a7.dead = true;
            _0xd6cfd5.health = Math.max(0, _0xd6cfd5.health - 1);
            _0xd6cfd5.leaks += 1;
          }
        });
        _0xd6cfd5.enemies = _0xd6cfd5.enemies.filter(_0xdf8bb0 => !_0xdf8bb0.dead);
        if (_0x315dce >= _0x34d788.length && !_0xd6cfd5.enemies.length) {
          break;
        }
        _0x481aeb += _0x3cc910;
      }
      const _0x4acc31 = _0x481aeb >= _0x4b8749 && (_0x315dce < _0x34d788.length || _0xd6cfd5.enemies.length > 0);
      const _0xb52f3b = _0xd6cfd5.health > 0 && !_0x4acc31;
      if (_0xb52f3b) {
        const _0x2ec3b5 = _0x1a8bf9 < _0xd6cfd5.totalWaves ? _0x5a20c3(_0xd6cfd5, _0x129f42.nextWaveEconomy?.MAX_REWARD || 0) : 0;
        _0xd6cfd5.coins += _0x5a20c3(_0xd6cfd5, 45 + _0x1a8bf9 * 10) + _0x2ec3b5;
      }
      return {
        wave: _0x1a8bf9,
        cleared: _0xb52f3b,
        timedOut: _0x4acc31,
        duration: Math.min(_0x481aeb, _0x4b8749),
        healthBefore: _0x331299,
        healthAfter: _0xd6cfd5.health,
        leaks: _0x331299 - _0xd6cfd5.health,
        coinsBefore: _0x294be7,
        coinsAfter: _0xd6cfd5.coins,
        kills: _0xd6cfd5.kills - _0x48b0d7,
        towerCount: _0xd6cfd5.towers.length
      };
    }
    function _0x22abfe(_0x3228f6, _0x3e2abc) {
      const _0x263129 = _0x451608(_0x3e2abc.seed);
      const _0x1b5f83 = _0x3e2abc.mapIndex;
      const _0x42791d = _0x4fd372(_0x3e2abc.maps[_0x1b5f83]);
      const _0x5e370f = _0x3e2abc.growthBonuses || {};
      const _0xb8bc9a = {
        mapIndex: _0x1b5f83,
        runtime: _0x3228f6,
        difficulty: _0x3e2abc.difficulty,
        strategy: _0x3e2abc.strategy || "adaptive",
        totalWaves: _0x3e2abc.waves,
        geometry: _0x42791d,
        health: 10,
        coins: _0x3228f6.startingCoins?.[_0x1b5f83] || 700,
        towers: [],
        enemies: [],
        enemySequence: 0,
        kills: 0,
        leaks: 0
      };
      const _0x1837c8 = [];
      for (let _0xa42cd0 = 1; _0xa42cd0 <= _0x3e2abc.waves; _0xa42cd0 += 1) {
        const _0x5ac1f3 = _0x286f3d(_0xb8bc9a, _0x3228f6, _0xa42cd0, _0x263129, _0x5e370f);
        _0x1837c8.push(_0x5ac1f3);
        if (!_0x5ac1f3.cleared) {
          break;
        }
      }
      const _0x454eb1 = _0x1634bf.map(_0x53d530 => {
        const _0x6f19e9 = _0xb8bc9a.towers.filter(_0xa6e36b => _0xa6e36b.typeId === _0x53d530);
        return {
          typeId: _0x53d530,
          built: _0x6f19e9.length,
          damage: _0x6f19e9.reduce((_0x71c77f, _0x2e76e8) => _0x71c77f + _0x2e76e8.damage, 0),
          utility: _0x6f19e9.reduce((_0x45dbcd, _0x8ff86a) => _0x45dbcd + _0x8ff86a.utility, 0),
          spent: _0x6f19e9.reduce((_0x39ac8c, _0x2702fe) => _0x39ac8c + _0x2702fe.spent, 0),
          attacks: _0x6f19e9.reduce((_0x554d62, _0x2a1ffd) => _0x554d62 + _0x2a1ffd.attacks, 0)
        };
      });
      return {
        cleared: _0x1837c8.length === _0x3e2abc.waves && _0x1837c8.every(_0x37c2a7 => _0x37c2a7.cleared),
        health: _0xb8bc9a.health,
        coins: _0xb8bc9a.coins,
        leaks: _0xb8bc9a.leaks,
        kills: _0xb8bc9a.kills,
        waves: _0x1837c8,
        towers: _0x454eb1
      };
    }
    function _0x1a1d59(_0x361608, _0xc5a04f) {
      const _0x5219e1 = [];
      for (let _0xfec858 = 0; _0xfec858 < _0xc5a04f.runs; _0xfec858 += 1) {
        _0x5219e1.push(_0x22abfe(_0x361608, {
          ..._0xc5a04f,
          seed: _0xc5a04f.seed + ":" + _0xc5a04f.mapIndex + ":" + _0xc5a04f.difficulty + ":" + _0xfec858
        }));
      }
      const _0xeac9ee = _0x1634bf.map(_0x31ec67 => {
        const _0x5b04ab = _0x5219e1.map(_0x5c35c4 => _0x5c35c4.towers.find(_0xdcfa0f => _0xdcfa0f.typeId === _0x31ec67));
        const _0xd546ef = _0x5b04ab.reduce((_0x196e22, _0x50d12f) => _0x196e22 + _0x50d12f.damage, 0);
        const _0x17c77c = _0x5b04ab.reduce((_0x168d77, _0x3a7bce) => _0x168d77 + _0x3a7bce.utility, 0);
        return {
          typeId: _0x31ec67,
          name: _0x361608.towerEconomy[_0x31ec67].name,
          built: _0x5b04ab.reduce((_0x2e0d7e, _0x4159b2) => _0x2e0d7e + _0x4159b2.built, 0) / _0xc5a04f.runs,
          damage: _0xd546ef,
          utility: _0x17c77c,
          impact: _0xd546ef + _0x17c77c,
          spent: _0x5b04ab.reduce((_0x36dd0d, _0x47e10e) => _0x36dd0d + _0x47e10e.spent, 0) / _0xc5a04f.runs
        };
      });
      const _0x2bf6ed = [];
      for (let _0x18c03d = 1; _0x18c03d <= _0xc5a04f.waves; _0x18c03d += 1) {
        const _0x3c9dfb = _0x5219e1.map(_0x5b3f93 => _0x5b3f93.waves.find(_0x245441 => _0x245441.wave === _0x18c03d)).filter(Boolean);
        _0x2bf6ed.push({
          wave: _0x18c03d,
          reachRate: _0x3c9dfb.length / _0xc5a04f.runs,
          clearRate: _0x3c9dfb.filter(_0x47dfb6 => _0x47dfb6.cleared).length / _0xc5a04f.runs,
          averageLeaks: _0x4e5034(_0x3c9dfb.map(_0x4901ec => _0x4901ec.leaks)),
          averageDuration: _0x4e5034(_0x3c9dfb.map(_0xf416b9 => _0xf416b9.duration)),
          p90Duration: _0x5b2adb(_0x3c9dfb.map(_0x2b6341 => _0x2b6341.duration), 0.9),
          averageCoinsBefore: _0x4e5034(_0x3c9dfb.map(_0xb471f6 => _0xb471f6.coinsBefore)),
          averageCoinsAfter: _0x4e5034(_0x3c9dfb.map(_0x237f65 => _0x237f65.coinsAfter)),
          averageKills: _0x4e5034(_0x3c9dfb.map(_0x43cace => _0x43cace.kills)),
          enemyCount: _0x361608.buildWavePlan(_0x18c03d, _0xc5a04f.mapIndex).length
        });
      }
      return {
        mapIndex: _0xc5a04f.mapIndex,
        mapName: _0xc5a04f.maps[_0xc5a04f.mapIndex].name,
        difficulty: _0xc5a04f.difficulty,
        runs: _0xc5a04f.runs,
        waves: _0xc5a04f.waves,
        startingCoins: _0x361608.startingCoins?.[_0xc5a04f.mapIndex] || 700,
        enemyCount: Array.from({
          length: _0xc5a04f.waves
        }, (_0x5dee1d, _0x3d24c6) => _0x361608.buildWavePlan(_0x3d24c6 + 1, _0xc5a04f.mapIndex).length).reduce((_0x2532e9, _0x279ccd) => _0x2532e9 + _0x279ccd, 0),
        clearRate: _0x5219e1.filter(_0x20a45d => _0x20a45d.cleared).length / _0xc5a04f.runs,
        averageHealth: _0x4e5034(_0x5219e1.map(_0x366747 => _0x366747.health)),
        averageCoins: _0x4e5034(_0x5219e1.map(_0x4af6ba => _0x4af6ba.coins)),
        averageLeaks: _0x4e5034(_0x5219e1.map(_0x3e57b2 => _0x3e57b2.leaks)),
        averageKills: _0x4e5034(_0x5219e1.map(_0x153c15 => _0x153c15.kills)),
        averageTowerCount: _0x4e5034(_0x5219e1.map(_0x3a2d5d => _0x3a2d5d.towers.reduce((_0x6f1619, _0x55c424) => _0x6f1619 + _0x55c424.built, 0))),
        p90WaveDuration: _0x5b2adb(_0x5219e1.flatMap(_0xc6928 => _0xc6928.waves.map(_0x53dee7 => _0x53dee7.duration)), 0.9),
        towerTotals: _0xeac9ee,
        waveStats: _0x2bf6ed
      };
    }
    function _0x59c807(_0x14667a) {
      const _0x2208f4 = [];
      let _0x49aedd = 0;
      let _0x46a3bc = 0;
      const _0x3771d3 = {
        easy: [0.65, 0.99],
        normal: [0.4, 0.79],
        hard: [0.1, 0.49]
      };
      const _0x197a64 = {
        easy: "简单",
        normal: "普通",
        hard: "困难"
      };
      _0x14667a.forEach(_0x418aed => {
        const [_0x2f5b51, _0x21bd37] = _0x3771d3[_0x418aed.difficulty];
        if (_0x418aed.clearRate < _0x2f5b51) {
          const _0x1bda38 = _0x418aed.clearRate < _0x2f5b51 * 0.55 ? "critical" : "warning";
          _0x2208f4.push({
            severity: _0x1bda38,
            code: "too-hard",
            text: _0x418aed.mapName + " · " + _0x197a64[_0x418aed.difficulty] + " 通关率仅 " + Math.round(_0x418aed.clearRate * 100) + "%"
          });
          _0x49aedd += _0x1bda38 === "critical" ? 14 : 8;
        } else if (_0x418aed.clearRate > _0x21bd37) {
          _0x2208f4.push({
            severity: "warning",
            code: "too-easy",
            text: _0x418aed.mapName + " · " + _0x197a64[_0x418aed.difficulty] + " 通关率 " + Math.round(_0x418aed.clearRate * 100) + "%，压力偏低"
          });
          _0x49aedd += 6;
        }
        for (let _0x459979 = 4; _0x459979 < _0x418aed.waveStats.length; _0x459979 += 5) {
          const _0x315c07 = _0x418aed.waveStats[_0x459979];
          const _0x24f739 = _0x418aed.waveStats[_0x459979 - 1];
          if (_0x24f739.clearRate - _0x315c07.clearRate > 0.32) {
            _0x2208f4.push({
              severity: "warning",
              code: "boss-spike",
              text: _0x418aed.mapName + " 第 " + _0x315c07.wave + " 波出现 " + Math.round((_0x24f739.clearRate - _0x315c07.clearRate) * 100) + " 个百分点断崖"
            });
            _0x49aedd += 7;
          }
        }
      });
      ["easy", "normal", "hard"].forEach(_0x4067f5 => {
        const _0x374f6c = _0x14667a.filter(_0x285638 => _0x285638.difficulty === _0x4067f5).map(_0x326843 => _0x326843.clearRate);
        if (_0x374f6c.length > 1 && Math.max(..._0x374f6c) - Math.min(..._0x374f6c) > 0.38) {
          _0x2208f4.push({
            severity: "warning",
            code: "map-variance",
            text: _0x197a64[_0x4067f5] + "难度的地图通关率差距超过 38 个百分点"
          });
          _0x46a3bc += 8;
        }
      });
      const _0x53cbaf = Object.fromEntries(_0x1634bf.map(_0x440840 => [_0x440840, 0]));
      _0x14667a.forEach(_0x1072b6 => _0x1072b6.towerTotals.forEach(_0x149714 => {
        _0x53cbaf[_0x149714.typeId] += _0x149714.impact;
      }));
      const _0x3eaf01 = Object.values(_0x53cbaf).reduce((_0x28b510, _0x297496) => _0x28b510 + _0x297496, 0) || 1;
      const _0x4571bb = Object.fromEntries(Object.entries(_0x53cbaf).map(([_0x57652b, _0xd94abc]) => [_0x57652b, _0xd94abc / _0x3eaf01]));
      Object.entries(_0x4571bb).forEach(([_0x4df2d0, _0xb95a63]) => {
        const _0x3bddb7 = _0x14667a[0]?.towerTotals.find(_0x55f975 => _0x55f975.typeId === _0x4df2d0)?.name || _0x4df2d0;
        if (_0xb95a63 > 0.48) {
          _0x2208f4.push({
            severity: "warning",
            code: "tower-dominant",
            text: _0x3bddb7 + "占总战术贡献 " + Math.round(_0xb95a63 * 100) + "%，可能挤压其他塔楼"
          });
          _0x46a3bc += 8;
        } else if (_0xb95a63 < 0.035) {
          _0x2208f4.push({
            severity: "warning",
            code: "tower-weak",
            text: _0x3bddb7 + "仅占总战术贡献 " + Math.round(_0xb95a63 * 100) + "%，需要检查使用价值"
          });
          _0x46a3bc += 5;
        }
      });
      const _0xe0acee = _0x49aedd / Math.max(1, _0x14667a.length) * 2.3;
      const _0xdfda3b = Math.round(_0x5f1cca(100 - _0xe0acee - _0x46a3bc, 0, 100));
      if (!_0x2208f4.length) {
        _0x2208f4.push({
          severity: "ok",
          code: "balanced",
          text: "当前样本未发现明显难度断层或单塔垄断"
        });
      }
      return {
        score: _0xdfda3b,
        verdict: _0xdfda3b >= 85 ? "数值合理" : _0xdfda3b >= 65 ? "需要观察" : "存在失衡",
        findings: _0x2208f4,
        towerShares: _0x4571bb
      };
    }
    async function _0x5c19bc(_0x227636, _0x35666e, _0x4b13a4 = {}) {
      if (!_0x227636 || !_0x35666e.maps?.length) {
        throw new Error("Balance runtime and map data are required.");
      }
      const _0x9fc07 = _0x35666e.mapIndexes?.length ? _0x35666e.mapIndexes : _0x35666e.maps.map((_0x3eeeee, _0x157531) => _0x157531);
      const _0x500456 = _0x35666e.difficulties?.length ? _0x35666e.difficulties : ["easy", "normal", "hard"];
      const _0x1c9fcb = [];
      const _0x1db96c = _0x9fc07.length * _0x500456.length;
      let _0x511acc = 0;
      for (const _0x49739c of _0x9fc07) {
        for (const _0x26b922 of _0x500456) {
          const _0x850a34 = _0x1a1d59(_0x227636, {
            ..._0x35666e,
            mapIndex: _0x49739c,
            difficulty: _0x26b922,
            runs: _0x5f1cca(Math.round(_0x35666e.runs || 20), 1, 200),
            waves: _0x5f1cca(Math.round(_0x35666e.waveCounts?.[_0x49739c] ?? _0x35666e.waves ?? 10), 1, 30),
            strategy: _0xb2e8c2[_0x35666e.strategy] ? _0x35666e.strategy : "adaptive",
            seed: _0x35666e.seed || "neon-defense-balance-v1"
          });
          _0x1c9fcb.push(_0x850a34);
          _0x511acc += 1;
          _0x4b13a4.onProgress?.({
            completed: _0x511acc,
            total: _0x1db96c,
            scenario: _0x850a34
          });
          if (typeof setTimeout == "function") {
            await new Promise(_0x5f1691 => setTimeout(_0x5f1691, 0));
          }
        }
      }
      const _0x574710 = _0x59c807(_0x1c9fcb);
      return {
        version: 2,
        generatedAt: new Date().toISOString(),
        options: {
          mapIndexes: _0x9fc07,
          difficulties: _0x500456,
          runs: _0x35666e.runs,
          waves: _0x35666e.waves,
          waveCounts: _0x35666e.waveCounts || null,
          strategy: _0x35666e.strategy,
          seed: _0x35666e.seed || "neon-defense-balance-v1"
        },
        scenarios: _0x1c9fcb,
        ..._0x574710
      };
    }
    return {
      TOWER_IDS: _0x1634bf,
      RANGE_PROJECTION_Y: _0x48fba6,
      createRng: _0x451608,
      buildMapGeometry: _0x4fd372,
      routePoint: _0x214d8c,
      isEnemyPhasedAt: _0x4829f3,
      canMercenaryIntercept: _0xcae4d9,
      simulateCampaign: _0x22abfe,
      aggregateScenario: _0x1a1d59,
      diagnose: _0x59c807,
      runSuite: _0x5c19bc
    };
  }();
  if (typeof module == "object" && module.exports) {
    module.exports = _0x1f6c99;
  }
  if (_0x4e0df6) {
    _0x4e0df6.BalanceAgent = _0x1f6c99;
  }
})(typeof window != "undefined" ? window : globalThis);