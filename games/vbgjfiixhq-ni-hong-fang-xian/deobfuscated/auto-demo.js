(function (_0xb2a74d) {
  'use strict';

  const _0x2e3faf = function () {
    const _0x43ab67 = ["arc-neon", "street-mercenary", "mag-rail-sniper", "hacker-relay", "drone-hive"];
    const _0x38a59c = [["arc-neon", "street-mercenary", "mag-rail-sniper"], ["arc-neon", "street-mercenary", "mag-rail-sniper", "hacker-relay"], _0x43ab67, _0x43ab67, _0x43ab67, _0x43ab67];
    function _0x3bc9d6(_0xdb6329, _0x196e9b, _0x269d4b) {
      return Math.hypot(_0xdb6329.x - _0x196e9b.x, (_0xdb6329.y - _0x196e9b.y) / _0x269d4b);
    }
    function _0x28ef30(_0x46e0be, _0x443bb6, _0x1d08eb, _0x1058be) {
      const _0x40c05c = _0x1058be.runtime.towerCombat[_0x46e0be];
      const _0x210818 = _0x1058be.geometry || _0x1058be.buildMapGeometry(_0x1058be.level);
      const _0x37ccc4 = _0x1058be.growthBonuses?.[_0x46e0be]?.range || 1;
      const _0x1ca81b = _0x40c05c.ranges[_0x1d08eb - 1] * _0x37ccc4 * Math.max(1, Number(_0x443bb6.rangeScale) || 1);
      const _0x5dff1b = {
        x: _0x443bb6.x * 10,
        y: _0x443bb6.y * 10
      };
      let _0x13677f = 0;
      let _0x3f43f8 = Infinity;
      let _0x44af83 = 0;
      ["left", "right"].forEach(_0x345f8d => {
        for (let _0x597fe2 = 40; _0x597fe2 <= 960; _0x597fe2 += 40) {
          const _0x3981e9 = _0x1058be.routePoint(_0x210818, _0x597fe2, _0x345f8d);
          const _0x34f91b = _0x3bc9d6(_0x5dff1b, _0x3981e9, _0x1058be.projectionY);
          _0x3f43f8 = Math.min(_0x3f43f8, _0x34f91b);
          _0x44af83 += 1;
          if (_0x34f91b <= _0x1ca81b && (!_0x40c05c.blindSpot || _0x34f91b >= _0x40c05c.blindSpot)) {
            _0x13677f += 1 - _0x34f91b / Math.max(_0x1ca81b, 1) * 0.2;
          }
        }
      });
      if (_0x46e0be === "street-mercenary") {
        if (_0x3f43f8 <= _0x1ca81b) {
          return 1.15 - _0x3f43f8 / _0x1ca81b * 0.35;
        } else {
          return 0;
        }
      }
      const _0x11162c = {
        "arc-neon": 1.2,
        "hacker-relay": 1.08,
        "drone-hive": 1.04
      }[_0x46e0be] || 1;
      return _0x13677f / Math.max(1, _0x44af83) * _0x11162c;
    }
    function _0x444a2d(_0x4ed381) {
      return {
        ..._0x4ed381,
        projectionY: _0x4ed381.projectionY || _0x4ed381.agent?.RANGE_PROJECTION_Y || 1.1,
        buildMapGeometry: _0x4ed381.buildMapGeometry || _0x4ed381.agent?.buildMapGeometry,
        routePoint: _0x4ed381.routePoint || _0x4ed381.agent?.routePoint
      };
    }
    function _0x18adbd(_0x4f47c7, _0x3ce1c9, _0x56b1e6) {
      const _0x364ed0 = Object.fromEntries(_0x43ab67.map(_0x17a43b => [_0x17a43b, _0x3ce1c9.towers.filter(_0x4a3708 => _0x4a3708.typeId === _0x17a43b).length]));
      let _0x1a8f19 = 1 / (1 + _0x364ed0[_0x4f47c7] * 0.55);
      if (!_0x364ed0[_0x4f47c7]) {
        _0x1a8f19 *= 1.55;
      }
      if (_0x4f47c7 === "arc-neon" && _0x56b1e6.wave <= 2) {
        _0x1a8f19 *= 1.28;
      }
      if (_0x4f47c7 === "mag-rail-sniper" && (_0x56b1e6.wave >= 2 || _0x56b1e6.mapIndex === 5)) {
        _0x1a8f19 *= 1.24;
      }
      if (_0x4f47c7 === "hacker-relay" && _0x56b1e6.mapIndex >= 1) {
        _0x1a8f19 *= 1.16;
      }
      if (_0x4f47c7 === "drone-hive" && _0x56b1e6.mapIndex >= 2) {
        _0x1a8f19 *= 1.2;
      }
      return _0x1a8f19;
    }
    function _0x218341(_0x52c4bd, _0x3644a3) {
      const _0x3ccfaf = _0x444a2d(_0x3644a3);
      if (!_0x3ccfaf.buildMapGeometry || !_0x3ccfaf.routePoint) {
        return null;
      }
      _0x3ccfaf.geometry = _0x3ccfaf.buildMapGeometry(_0x3ccfaf.level);
      const _0x5a64e1 = new Set(_0x52c4bd.towers.map(_0xf49372 => _0xf49372.slotIndex));
      const _0x3c1af3 = _0x38a59c[Math.max(0, Math.min(_0x38a59c.length - 1, _0x3ccfaf.mapIndex))];
      let _0x22f9e3 = null;
      _0x3c1af3.forEach(_0x252d8c => {
        const _0x34b122 = _0x3ccfaf.runtime.towerEconomy[_0x252d8c];
        if (!!_0x34b122 && !(_0x34b122.cost > _0x52c4bd.coins)) {
          _0x52c4bd.slots.forEach(_0x3cb2a7 => {
            if (_0x5a64e1.has(_0x3cb2a7.slotIndex)) {
              return;
            }
            const _0xc9fbc6 = _0x28ef30(_0x252d8c, _0x3cb2a7, 1, _0x3ccfaf) * _0x18adbd(_0x252d8c, _0x52c4bd, _0x3ccfaf);
            if (!_0x22f9e3 || _0xc9fbc6 > _0x22f9e3.score) {
              _0x22f9e3 = {
                kind: "build",
                typeId: _0x252d8c,
                slotIndex: _0x3cb2a7.slotIndex,
                score: _0xc9fbc6,
                cost: _0x34b122.cost
              };
            }
          });
        }
      });
      return _0x22f9e3;
    }
    function _0x28f09a(_0x450409, _0xf74059) {
      const _0x3fe766 = _0x444a2d(_0xf74059);
      if (!_0x3fe766.buildMapGeometry || !_0x3fe766.routePoint) {
        return null;
      }
      _0x3fe766.geometry = _0x3fe766.buildMapGeometry(_0x3fe766.level);
      let _0x3f3057 = null;
      _0x450409.towers.forEach(_0x1ef6cc => {
        if (_0x1ef6cc.level >= 3) {
          return;
        }
        const _0x277941 = _0x3fe766.runtime.towerEconomy[_0x1ef6cc.typeId];
        const _0x232c96 = Math.round(_0x277941.cost * (_0x1ef6cc.level === 1 ? 0.7 : 1.05));
        if (_0x232c96 > _0x450409.coins) {
          return;
        }
        const _0x2749d6 = _0x450409.slots[_0x1ef6cc.slotIndex];
        if (!_0x2749d6) {
          return;
        }
        const _0x354133 = _0x28ef30(_0x1ef6cc.typeId, _0x2749d6, _0x1ef6cc.level, _0x3fe766);
        const _0x501e71 = _0x28ef30(_0x1ef6cc.typeId, _0x2749d6, _0x1ef6cc.level + 1, _0x3fe766);
        const _0x6e9267 = (_0x501e71 + Math.max(0.08, _0x501e71 - _0x354133) * 2) * _0x18adbd(_0x1ef6cc.typeId, _0x450409, _0x3fe766) / (1 + _0x1ef6cc.level * 0.12);
        if (!_0x3f3057 || _0x6e9267 > _0x3f3057.score) {
          _0x3f3057 = {
            kind: "upgrade",
            typeId: _0x1ef6cc.typeId,
            slotIndex: _0x1ef6cc.slotIndex,
            level: _0x1ef6cc.level,
            score: _0x6e9267,
            cost: _0x232c96
          };
        }
      });
      return _0x3f3057;
    }
    return {
      TOWER_IDS: _0x43ab67,
      MAP_ROSTERS: _0x38a59c,
      chooseBuildAction: _0x218341,
      chooseUpgradeAction: _0x28f09a
    };
  }();
  if (typeof module == "object" && module.exports) {
    module.exports = _0x2e3faf;
  }
  if (!_0xb2a74d?.document) {
    return;
  }
  _0xb2a74d.NeonDemoPlanner = _0x2e3faf;
  const _0xd2da6f = _0xb2a74d.document.querySelector("#auto-demo-toggle");
  const _0x52d870 = _0xb2a74d.document.querySelector("#auto-demo-status");
  const _0xfb3c68 = _0xb2a74d.neonDemoGame;
  if (!_0xd2da6f || !_0x52d870 || !_0xfb3c68 || !_0xb2a74d.balanceRuntime || !_0xb2a74d.BalanceAgent) {
    return;
  }
  let _0x46d7aa = 0;
  let _0x4e23b6 = false;
  let _0x5c535f = false;
  function _0x517026(_0x272c3d) {
    _0x52d870.textContent = _0x272c3d;
    _0x52d870.dataset.active = String(_0x5c535f);
  }
  function _0x26664d() {
    _0xd2da6f.setAttribute("aria-pressed", String(_0x5c535f));
    _0xd2da6f.textContent = _0x5c535f ? "退出演示" : "AUTO 演示";
  }
  function _0x1b12e2(_0x13c8ea, _0x1faa7e) {
    const _0x42d6c6 = {
      runtime: _0xb2a74d.balanceRuntime,
      agent: _0xb2a74d.BalanceAgent,
      level: _0xb2a74d.mapLevels[_0x13c8ea.mapIndex],
      mapIndex: _0x13c8ea.mapIndex,
      wave: _0x1faa7e.wave,
      growthBonuses: Object.fromEntries(_0x2e3faf.TOWER_IDS.map(_0x3f76ce => [_0x3f76ce, _0xb2a74d.towerGrowthBonuses?.(_0x3f76ce) || {
        range: 1,
        damage: 1
      }]))
    };
    const _0x37bd58 = Math.min(_0x13c8ea.slots.length, 5 + Math.floor(Math.max(0, _0x1faa7e.wave - 1) / 2));
    if (!_0x1faa7e.waveActive && _0x13c8ea.towers.length >= _0x37bd58) {
      return false;
    }
    const _0x6b7964 = _0x1faa7e.waveActive && _0x13c8ea.towers.length >= _0x37bd58 ? 70 : 0;
    const _0x214a20 = _0x6b7964 ? {
      ..._0x13c8ea,
      coins: Math.max(0, _0x13c8ea.coins - _0x6b7964)
    } : _0x13c8ea;
    const _0x2da591 = _0x13c8ea.towers.length < _0x37bd58 ? _0x2e3faf.chooseBuildAction(_0x214a20, _0x42d6c6) : _0x2e3faf.chooseUpgradeAction(_0x214a20, _0x42d6c6) || _0x2e3faf.chooseBuildAction(_0x214a20, _0x42d6c6);
    if (!_0x2da591) {
      return false;
    }
    const _0xe18fcc = _0x2da591.kind === "build" ? _0xfb3c68.build(_0x2da591.typeId, _0x2da591.slotIndex) : _0xfb3c68.upgrade(_0x2da591.slotIndex);
    if (_0xe18fcc) {
      _0x517026(function (_0x2dc81b) {
        const _0x1e2c9a = Object.fromEntries(Object.entries(_0xb2a74d.balanceRuntime.towerEconomy).map(([_0x1d4937, _0x6ee64e]) => [_0x1d4937, _0x6ee64e.name]));
        if (_0x2dc81b.kind === "build") {
          return "建造 " + _0x1e2c9a[_0x2dc81b.typeId] + " // 塔位 " + (_0x2dc81b.slotIndex + 1);
        } else {
          return "升级 " + _0x1e2c9a[_0x2dc81b.typeId] + " // LV." + (_0x2dc81b.level + 1);
        }
      }(_0x2da591));
    }
    return _0xe18fcc;
  }
  function _0x36c0e6(_0x32e711) {
    _0x4e23b6 = false;
    clearInterval(_0x46d7aa);
    _0x46d7aa = 0;
    _0x517026(_0x32e711);
  }
  function _0x2123c9() {
    clearInterval(_0x46d7aa);
    _0x4e23b6 = true;
    _0xfb3c68.setSpeed?.(3);
    _0x4216ba();
    _0x46d7aa = _0xb2a74d.setInterval(_0x4216ba, 900);
  }
  function _0x4216ba() {
    if (!_0x4e23b6) {
      return;
    }
    const _0xa54ab3 = _0xfb3c68.snapshot?.();
    const _0x15848f = _0xfb3c68.battleSnapshot?.();
    if (_0xa54ab3 && _0x15848f) {
      if (_0x15848f.failed) {
        return _0x36c0e6("演示结束 // 基地失守");
      } else if (_0x15848f.complete) {
        return _0x36c0e6("演示完成 // 战区已清除");
      } else {
        if (!_0x1b12e2(_0xa54ab3, _0x15848f)) {
          if (_0x15848f.waveActive) {
            _0x517026("自动交战 // WAVE " + String(_0x15848f.wave).padStart(2, "0") + " // 敌军 " + _0x15848f.enemyCount);
          } else if (_0xfb3c68.startWave?.()) {
            _0x517026(_0x15848f.nextWaveCountdown > 0 ? "提前开启下一波 // 获取奖励" : "发动第 " + _0x15848f.wave + " 波");
          }
        }
        return;
      }
    } else {
      return _0x36c0e6("接口中断 // 退出后重试");
    }
  }
  function _0x3b271a() {
    if (_0x5c535f) {
      return;
    }
    _0x5c535f = true;
    _0x4e23b6 = true;
    _0xb2a74d.neonAutoDemo.active = true;
    _0x26664d();
    _0x517026("初始化标准演示战场");
    const _0x28d6cf = Number(_0xb2a74d.document.querySelector("#map-select")?.value) || 0;
    _0xfb3c68.setDifficulty?.("normal");
    _0xfb3c68.restart?.(_0x28d6cf);
    _0x2123c9();
  }
  function _0x2b8be9() {
    clearInterval(_0x46d7aa);
    _0x46d7aa = 0;
    _0x4e23b6 = false;
    _0x5c535f = false;
    _0xb2a74d.neonAutoDemo.active = false;
    _0x26664d();
    _0x517026("正在恢复玩家存档");
    _0xb2a74d.setTimeout(() => _0xb2a74d.location.reload(), 180);
  }
  _0xb2a74d.neonAutoDemo = {
    active: false,
    start: _0x3b271a,
    stop: _0x2b8be9,
    get running() {
      return _0x4e23b6;
    }
  };
  _0xd2da6f.addEventListener("click", () => _0x5c535f ? _0x2b8be9() : _0x3b271a());
  _0xb2a74d.document.querySelector("#map-select")?.addEventListener("change", () => {
    if (_0x5c535f) {
      _0xb2a74d.setTimeout(() => {
        const _0x562679 = _0xfb3c68.battleSnapshot?.();
        if (!!_0x562679 && !_0x562679.complete && !_0x562679.failed) {
          _0x517026("切换第 " + (_0x562679.mapIndex + 1) + " 关 // 自动部署");
          _0x2123c9();
        }
      }, 0);
    }
  });
})(typeof window != "undefined" ? window : globalThis);