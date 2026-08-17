(() => {
  'use strict';

  const _0x4c1e93 = [1.3, 1.1, 1.45, 1.5, 1.6, 0.8];
  const _0x1bcd4e = [0, 0, 0, 2, 2, 2];
  const _0x1e8c62 = [1, 1, 1, 1, 0.55, 0.3];
  const _0x8c8ac0 = {
    easy: 0.68,
    normal: 1,
    hard: 1.28
  };
  const _0x59ea61 = {
    easy: [1.8, 1.6, 1.65, 1.55, 1.5, 1.55],
    normal: [1.28, 1.25, 1.26, 1.1, 1.05, 1.4],
    hard: [1.22, 1.22, 1.13, 1.06, 1, 1.27]
  };
  const _0x17d348 = _0x59ea61.hard;
  const _0x1a366d = window.WaveEconomy;
  if (!_0x1a366d) {
    throw new Error("Next-wave economy is unavailable.");
  }
  const _0x1ce4d5 = 1672 / 941 * 0.62;
  const _0x4ec351 = {
    "mag-rail-sniper": "#34c9ff",
    "arc-neon": "#20f4e6",
    "street-mercenary": "#c99245",
    "hacker-relay": "#79ff9e",
    "drone-hive": "#e8ffff"
  };
  const _0x3f0ab1 = {
    "mag-rail-sniper": {
      ranges: [220, 240, 260],
      cooldown: 1.7,
      damage: 100,
      armorPenetration: 0.35,
      blindSpot: 55,
      damageScale: [1, 1.38, 1.82]
    },
    "arc-neon": {
      ranges: [120, 134, 148],
      cooldown: 1.05,
      chainDamage: [38, 30, 22],
      chainDistance: 65,
      wetBonus: 0.2,
      damageScale: [1, 1.32, 1.68]
    },
    "street-mercenary": {
      ranges: [105, 118, 132],
      mercenaryCount: 2,
      mercenaryHealth: 190,
      damage: 19,
      cooldown: 0.9,
      blockRange: 32,
      respawn: 8,
      healthScale: [1, 1.28, 1.6],
      damageScale: [1, 1.3, 1.65]
    },
    "hacker-relay": {
      ranges: [145, 160, 175],
      cooldown: 2.4,
      slow: 0.22,
      vulnerability: 0.16,
      duration: 3.2,
      damage: 7
    },
    "drone-hive": {
      ranges: [175, 195, 215],
      cooldown: 0.68,
      drones: 2,
      damage: 28,
      flyingBonus: 0.45,
      pursuit: 30,
      damageScale: [1, 1.3, 1.68]
    }
  };
  const _0x5e5dc3 = {
    gang: {
      name: "帮派义体兵",
      hp: 180,
      speed: 28,
      armor: 0,
      reward: 18,
      attack: 12,
      image: "./assets/enemies/generated-raw-selected/enemy-01-gang-cyborg-base-cutout.png",
      size: 0.038,
      moveAnimation: "./assets/animations/enemies/enemy-01-gang-cyborg-move.webp",
      trait: "无护甲，数量多；佣兵和电弧塔克制"
    },
    riot: {
      name: "防暴镇压机",
      hp: 900,
      speed: 15,
      armor: 0.45,
      reward: 58,
      attack: 22,
      image: "./assets/enemies/generated-raw-selected/enemy-02-riot-mech-base-cutout.png",
      size: 0.052,
      mechanical: true,
      moveAnimation: "./assets/animations/enemies/enemy-02-riot-mech-move.webp",
      trait: "45%物理护甲；背部受到额外25%伤害"
    },
    ninja: {
      name: "相位忍者",
      hp: 260,
      speed: 40,
      armor: 0,
      reward: 30,
      attack: 18,
      image: "./assets/enemies/generated-raw-selected/enemy-03-phase-ninja-base-cutout.png",
      size: 0.039,
      phase: true,
      moveAnimation: "./assets/animations/enemies/enemy-03-phase-ninja-move.webp",
      trait: "每5秒进入相位1秒；黑客扫描可取消相位"
    },
    aerostat: {
      name: "企业浮空艇",
      hp: 500,
      speed: 28,
      armor: 0.2,
      reward: 46,
      attack: 0,
      image: "./assets/enemies/generated-raw-selected/enemy-04-corporate-airship-base-cutout.png",
      size: 0.062,
      air: true,
      moveAnimation: "./assets/animations/enemies/enemy-04-corporate-airship-fly.webp",
      trait: "20%护甲，不受佣兵拦截，只能被远程塔攻击"
    },
    devourer: {
      name: "数据吞噬者",
      hp: 360,
      shield: 200,
      speed: 24,
      armor: 0,
      reward: 48,
      attack: 16,
      image: "./assets/enemies/generated-raw-selected/enemy-05-data-devourer-base-cutout.png",
      size: 0.048,
      mechanical: true,
      network: true,
      moveAnimation: "./assets/animations/enemies/enemy-05-data-devourer-move.webp",
      trait: "4秒未受攻击恢复护盾；黑客可阻止恢复"
    }
  };
  const _0x390d80 = {
    enforcer: {
      name: "执法者·零号",
      hp: 18000,
      speed: 10,
      armor: 0.25,
      reward: 900,
      attack: 80,
      image: "./assets/enemies/boss-01-enforcer-zero-cutout.png",
      size: 0.105,
      mechanical: true,
      boss: true,
      components: ["盾牌", "导弹舱", "推进器"],
      componentHp: 2200,
      trait: "部件独立受损；摧毁后改变护甲、伤害与速度"
    },
    eve: {
      name: "夏娃-9",
      hp: 24000,
      speed: 0,
      armor: 0.12,
      reward: 1200,
      attack: 100,
      image: "./assets/enemies/mother-city-eve-9.png",
      size: 0.115,
      mechanical: true,
      boss: true,
      trait: "三阶段：节点转移、速度12载体、固定核心"
    }
  };
  const _0x7cafe8 = [["gang", "riot"], ["gang", "riot", "ninja"], ["gang", "riot", "ninja", "aerostat"], ["gang", "riot", "ninja", "aerostat", "devourer"], ["gang", "riot", "ninja", "aerostat", "devourer"], ["gang", "riot", "ninja", "aerostat", "devourer"]];
  const _0x18bc6f = {
    scene: document.querySelector(".scene"),
    routeLeft: document.querySelector("#route-left"),
    routeRight: document.querySelector("#route-right"),
    routeShared: document.querySelector("#route-shared"),
    routeExitLeft: document.querySelector("#route-exit-left"),
    routeExitRight: document.querySelector("#route-exit-right"),
    routeMerge: document.querySelector("#route-merge"),
    routeSplit: document.querySelector("#route-split"),
    routeMergeBeacon: document.querySelector("#route-merge-beacon"),
    routeSplitBeacon: document.querySelector("#route-split-beacon"),
    baseLeft: document.querySelector("#base-left"),
    baseRight: document.querySelector("#base-right"),
    enemies: document.querySelector("#enemy-layer"),
    rallies: document.querySelector("#rally-layer"),
    effects: document.querySelector("#effect-layer"),
    range: document.querySelector("#range-indicator"),
    wave: document.querySelector("#wave-value"),
    enemyCount: document.querySelector("#enemy-count"),
    start: document.querySelector("#start-wave"),
    speedButtons: document.querySelectorAll("[data-game-speed]"),
    map: document.querySelector("#map-select"),
    difficulty: document.querySelector("#difficulty-select"),
    commandCenterButton: document.querySelector("#command-center-button"),
    message: document.querySelector("#wave-message"),
    helpButton: document.querySelector("#help-button"),
    intelButton: document.querySelector("#intel-button"),
    intel: document.querySelector("#intel-panel"),
    intelClose: document.querySelector("#intel-close"),
    intelKicker: document.querySelector("#intel-kicker"),
    intelTitle: document.querySelector("#intel-title"),
    intelContent: document.querySelector("#intel-content")
  };
  let _0x51417d;
  let _0x3f0f40;
  let _0x54e569;
  let _0x352d87;
  let _0x24384f = 1;
  let _0x2eb79b = 0;
  let _0x176fb8 = "normal";
  let _0x1c1303 = [];
  let _0x1bf5be = [];
  let _0x434645 = 0;
  let _0xecb8c0 = false;
  let _0x3ebe3b = 0;
  let _0xf1684a = -1;
  let _0x3f5988 = 0;
  let _0x19f2d0 = performance.now();
  let _0x46d76f = _0x19f2d0;
  let _0x53ec67 = 1;
  let _0x161f10 = false;
  let _0x3b5fc8 = null;
  let _0xbde331 = 0;
  let _0xeca75 = false;
  function _0xc0df42(_0x3d0c89, _0x10361a, _0x24ec7e) {
    return window.NeonVoice?.play(_0x3d0c89, _0x10361a, _0x24ec7e) || false;
  }
  function _0x58eed5(_0x197e4c) {
    const _0x3e78e0 = [];
    let _0x224636 = 0;
    for (let _0x462d7c = 1; _0x462d7c < _0x197e4c.length; _0x462d7c += 1) {
      const _0x122dd7 = _0x197e4c[_0x462d7c - 1];
      const _0x45bde4 = _0x197e4c[_0x462d7c];
      const _0x131812 = Math.hypot((_0x45bde4.x - _0x122dd7.x) * 10, (_0x45bde4.y - _0x122dd7.y) * 10 / 0.62);
      _0x3e78e0.push({
        from: _0x122dd7,
        to: _0x45bde4,
        start: _0x224636,
        length: _0x131812
      });
      _0x224636 += _0x131812;
    }
    return {
      segments: _0x3e78e0,
      metricLength: _0x224636
    };
  }
  function _0x393f3b(_0x2e4c20, _0x29f493 = 6) {
    if (_0x2e4c20.length < 3) {
      return _0x2e4c20.map(_0x2e65ab => ({
        ..._0x2e65ab
      }));
    }
    const _0x483dd2 = [{
      ..._0x2e4c20[0]
    }];
    for (let _0x1b3aa9 = 0; _0x1b3aa9 < _0x2e4c20.length - 1; _0x1b3aa9 += 1) {
      const _0x3fae5a = _0x2e4c20[Math.max(0, _0x1b3aa9 - 1)];
      const _0x55b238 = _0x2e4c20[_0x1b3aa9];
      const _0x1cbdcf = _0x2e4c20[_0x1b3aa9 + 1];
      const _0x410319 = _0x2e4c20[Math.min(_0x2e4c20.length - 1, _0x1b3aa9 + 2)];
      for (let _0x1eecb9 = 1; _0x1eecb9 <= _0x29f493; _0x1eecb9 += 1) {
        const _0x525d01 = _0x1eecb9 / _0x29f493;
        const _0x524b98 = _0x525d01 * _0x525d01;
        const _0x42a184 = _0x524b98 * _0x525d01;
        _0x483dd2.push({
          x: (_0x55b238.x * 2 + (-_0x3fae5a.x + _0x1cbdcf.x) * _0x525d01 + (_0x3fae5a.x * 2 - _0x55b238.x * 5 + _0x1cbdcf.x * 4 - _0x410319.x) * _0x524b98 + (-_0x3fae5a.x + _0x55b238.x * 3 - _0x1cbdcf.x * 3 + _0x410319.x) * _0x42a184) * 0.5,
          y: (_0x55b238.y * 2 + (-_0x3fae5a.y + _0x1cbdcf.y) * _0x525d01 + (_0x3fae5a.y * 2 - _0x55b238.y * 5 + _0x1cbdcf.y * 4 - _0x410319.y) * _0x524b98 + (-_0x3fae5a.y + _0x55b238.y * 3 - _0x1cbdcf.y * 3 + _0x410319.y) * _0x42a184) * 0.5
        });
      }
    }
    return _0x483dd2;
  }
  const _0x2f274b = _0x3adc94 => _0x3adc94.map(_0xcfc77f => _0xcfc77f.x * 10 + "," + _0xcfc77f.y * 10).join(" ");
  function _0x5f0af5(_0xb251b9, {
    resetRallies: _0xdcb718 = true
  } = {}) {
    const _0x3d598 = window.mapLevels?.[_0xb251b9] || window.mapLevels?.[0];
    if (!_0x3d598) {
      throw new Error("Campaign map data is unavailable.");
    }
    _0x51417d = _0x3d598.entries;
    _0x3f0f40 = _0x3d598.shared;
    _0x54e569 = _0x3d598.exits;
    const _0x336b7e = Object.fromEntries(Object.keys(_0x51417d).map(_0x340796 => [_0x340796, _0x393f3b([..._0x51417d[_0x340796], ..._0x3f0f40.slice(1), ..._0x54e569[_0x340796].slice(1)])]));
    _0x352d87 = Object.fromEntries(Object.entries(_0x336b7e).map(([_0x5d5428, _0x4a08e7]) => [_0x5d5428, _0x58eed5(_0x4a08e7)]));
    (function (_0x254c9c, _0x34050b) {
      const _0x45c868 = _0x3f0ab1["mag-rail-sniper"].ranges[0];
      const _0x206bf5 = _0x254c9c.slots.map((_0x1c6101, _0x4a8b41) => {
        const _0x3ac83a = _0x16a94c({
          x: _0x1c6101.x * 10,
          y: _0x1c6101.y * 10
        });
        const _0x40488a = Math.max(1, Number(_0x1c6101.rangeScale) || 1);
        return {
          slot: _0x4a8b41 + 1,
          distance: Math.round(_0x3ac83a.separation * 10) / 10,
          effectiveRange: Math.round(_0x45c868 * _0x40488a * 10) / 10,
          reachable: _0x3ac83a.separation <= _0x45c868 * _0x40488a
        };
      });
      const _0x3e5ffc = _0x206bf5.filter(_0x446933 => !_0x446933.reachable);
      window.mapCoverageReport ||= [];
      window.mapCoverageReport[_0x34050b] = {
        map: _0x254c9c.name,
        slots: _0x206bf5,
        invalidSlots: _0x3e5ffc
      };
      if (_0x3e5ffc.length) {
        console.warn(_0x254c9c.name + " contains unreachable tower slots.", _0x3e5ffc);
      }
    })(_0x3d598, _0xb251b9);
    _0x18bc6f.routeLeft.setAttribute("points", _0x2f274b(_0x393f3b(_0x51417d.left)));
    _0x18bc6f.routeRight.setAttribute("points", _0x2f274b(_0x393f3b(_0x51417d.right)));
    _0x18bc6f.routeShared.setAttribute("points", _0x2f274b(_0x393f3b(_0x3f0f40)));
    _0x18bc6f.routeExitLeft.setAttribute("points", _0x2f274b(_0x393f3b(_0x54e569.left)));
    _0x18bc6f.routeExitRight.setAttribute("points", _0x2f274b(_0x393f3b(_0x54e569.right)));
    _0x18bc6f.routeMerge.setAttribute("cx", String(_0x3d598.merge.x * 10));
    _0x18bc6f.routeMerge.setAttribute("cy", String(_0x3d598.merge.y * 10));
    _0x18bc6f.routeSplit.setAttribute("cx", String(_0x3d598.split.x * 10));
    _0x18bc6f.routeSplit.setAttribute("cy", String(_0x3d598.split.y * 10));
    _0x18bc6f.routeMergeBeacon.setAttribute("x", String(_0x3d598.merge.x * 10 - 27));
    _0x18bc6f.routeMergeBeacon.setAttribute("y", String(_0x3d598.merge.y * 10 - 27));
    _0x18bc6f.routeSplitBeacon.setAttribute("x", String(_0x3d598.split.x * 10 - 22));
    _0x18bc6f.routeSplitBeacon.setAttribute("y", String(_0x3d598.split.y * 10 - 22));
    _0x18bc6f.baseLeft.setAttribute("transform", "translate(" + _0x3d598.bases.left.x * 10 + " " + _0x3d598.bases.left.y * 10 + ")");
    _0x18bc6f.baseRight.setAttribute("transform", "translate(" + _0x3d598.bases.right.x * 10 + " " + _0x3d598.bases.right.y * 10 + ")");
    window.activateMapLevel?.(_0xb251b9, {
      resetRallies: _0xdcb718
    });
  }
  function _0x174b07(_0x18d84c, _0x651ee9 = "left") {
    const _0x2dd474 = _0x352d87[_0x651ee9] || _0x352d87.left;
    const _0x38d97c = Math.max(0, Math.min(1000, _0x18d84c)) / 1000 * _0x2dd474.metricLength;
    const _0x25ff26 = _0x2dd474.segments.find(_0x50e183 => _0x38d97c <= _0x50e183.start + _0x50e183.length) || _0x2dd474.segments.at(-1);
    const _0x252cb2 = Math.max(0, Math.min(1, (_0x38d97c - _0x25ff26.start) / _0x25ff26.length));
    return {
      x: _0x25ff26.from.x + (_0x25ff26.to.x - _0x25ff26.from.x) * _0x252cb2,
      y: _0x25ff26.from.y + (_0x25ff26.to.y - _0x25ff26.from.y) * _0x252cb2,
      dx: _0x25ff26.to.x - _0x25ff26.from.x,
      dy: _0x25ff26.to.y - _0x25ff26.from.y
    };
  }
  function _0x2bc49d(_0x5e95ba, _0x164f8c) {
    return Math.hypot(_0x5e95ba.x - _0x164f8c.x, (_0x5e95ba.y - _0x164f8c.y) / _0x1ce4d5);
  }
  function _0x4d8a47(_0x1c0187) {
    const _0x5b2a00 = board.querySelector("[data-slot=\"" + _0x1c0187.dataset.slot + "\"]");
    return {
      x: Number(_0x5b2a00.dataset.x) * 10,
      y: Number(_0x5b2a00.dataset.y) * 10
    };
  }
  function _0xc7fa30(_0x3c1fff) {
    const _0x54348a = _0x174b07(_0x3c1fff.distance, _0x3c1fff.lane);
    return {
      x: _0x54348a.x * 10,
      y: _0x54348a.y * 10
    };
  }
  function _0x202257(_0xc5928f, _0xaf2f7a = _0x2eb79b) {
    const _0x832593 = Math.max(0, Number(_0xc5928f) || 0);
    if (_0x832593) {
      return Math.max(1, Math.round(_0x832593 * (_0x1e8c62[_0xaf2f7a] || 1)));
    } else {
      return 0;
    }
  }
  function _0x4346c0() {
    return 1 + Math.min(0.1, _0x2eb79b * 0.02);
  }
  function _0x271269(_0x22e7e0) {
    return window.towerGrowthBonuses?.(_0x22e7e0.dataset.type) || {
      damage: 1,
      range: 1
    };
  }
  function _0x1b0355(_0x85d859, _0x4eda89, _0x25005b) {
    const _0x2f9f1f = board.querySelector("[data-slot=\"" + _0x85d859.dataset.slot + "\"]");
    const _0x27bd03 = Math.max(1, Number(_0x2f9f1f?.dataset.rangeScale) || 1);
    return _0x4eda89.ranges[_0x25005b - 1] * _0x271269(_0x85d859).range * _0x27bd03;
  }
  function _0xac2a0f(_0x5ec04f, _0xd1b9be) {
    return _0xd1b9be * _0x271269(_0x5ec04f).damage;
  }
  function _0x355120(_0x2919a9) {
    const _0x2bcfe4 = _0x2919a9.querySelector("img");
    const _0x1ca7bb = _0x2bcfe4?.dataset.attackSrc;
    if (_0x2bcfe4 && _0x1ca7bb) {
      if (_0x2bcfe4.getAttribute("src") !== _0x1ca7bb) {
        _0x2bcfe4.src = _0x1ca7bb;
      }
      _0x2919a9.classList.add("attacking");
      clearTimeout(_0x2919a9._attackAnimationTimer);
      _0x2919a9._attackAnimationTimer = setTimeout(() => {
        if (_0x2919a9.isConnected) {
          _0x2bcfe4.src = _0x2bcfe4.dataset.staticSrc;
          _0x2919a9.classList.remove("attacking");
        }
      }, 880);
    }
  }
  function _0x14f95b(_0x42e7a2, _0x2b10b3 = 1800) {
    _0x18bc6f.message.textContent = _0x42e7a2;
    clearTimeout(_0xbde331);
    _0xbde331 = setTimeout(() => {
      _0x18bc6f.message.textContent = "";
    }, _0x2b10b3);
  }
  function _0x56ffcd(_0x38456d = _0x2eb79b) {
    return window.campaignWaveCounts?.[_0x38456d] || 5 + _0x38456d;
  }
  function _0x2d1f6a() {
    return _0x24384f > _0x56ffcd();
  }
  function _0x8e2c84() {
    const _0x6a2e33 = _0x56ffcd();
    const _0x53c58f = Math.min(_0x24384f, _0x6a2e33);
    const _0x3fa68e = !_0xecb8c0 && _0x3ebe3b > 0 && !_0x2d1f6a();
    _0x18bc6f.wave.textContent = String(_0x53c58f).padStart(2, "0") + "/" + String(_0x6a2e33).padStart(2, "0");
    _0x18bc6f.enemyCount.textContent = String(_0x1c1303.length + _0x1bf5be.length);
    _0x18bc6f.start.disabled = _0xecb8c0 || health <= 0 || _0x2d1f6a();
    _0x18bc6f.start.dataset.mode = _0x3fa68e ? "early" : _0xecb8c0 ? "active" : "ready";
    if (_0x2d1f6a()) {
      _0x18bc6f.start.textContent = "关卡已完成";
      _0x18bc6f.start.setAttribute("aria-label", "关卡已完成");
    } else if (_0xecb8c0) {
      _0x18bc6f.start.textContent = "波次进行中";
      _0x18bc6f.start.setAttribute("aria-label", "波次 " + _0x24384f + " 进行中");
    } else if (_0x3fa68e) {
      const _0x56567b = Math.max(1, Math.ceil(_0x3ebe3b));
      const _0x3b2fe9 = _0x202257(_0x1a366d.earlyWaveReward(_0x3ebe3b));
      _0x18bc6f.start.innerHTML = "<span aria-hidden=\"true\">▶▶</span> 提前下一波 " + _0x56567b + "s · +" + _0x3b2fe9 + "G";
      _0x18bc6f.start.setAttribute("aria-label", "提前开启第 " + _0x24384f + " 波，奖励 " + _0x3b2fe9 + " 金币，" + _0x56567b + " 秒后自动开启");
    } else {
      _0x18bc6f.start.innerHTML = "<span aria-hidden=\"true\">▶</span> 发动波次";
      _0x18bc6f.start.setAttribute("aria-label", "发动第 " + _0x24384f + " 波");
    }
    const _0x70ef0c = _0xecb8c0 || _0x3fa68e;
    _0x18bc6f.map.disabled = _0x70ef0c;
    _0x18bc6f.difficulty.disabled = _0x70ef0c;
    _0x18bc6f.commandCenterButton.disabled = _0x70ef0c;
  }
  function _0x63dadc(_0x6f39d2, {
    save: _0x16c659 = true
  } = {}) {
    _0x53ec67 = [1, 2, 3].includes(Number(_0x6f39d2)) ? Number(_0x6f39d2) : 1;
    _0x18bc6f.speedButtons.forEach(_0x7bf7c9 => {
      _0x7bf7c9.setAttribute("aria-pressed", String(Number(_0x7bf7c9.dataset.gameSpeed) === _0x53ec67));
    });
    _0x18bc6f.scene.dataset.gameSpeed = String(_0x53ec67);
    if (_0x16c659) {
      saveGame();
    }
  }
  function _0x5b1dce(_0x1d144f, _0x462414 = false, _0x2a00b2 = "left", _0xefac4 = {}) {
    const _0x3784c5 = _0x462414 ? _0x390d80[_0x1d144f] : _0x5e5dc3[_0x1d144f];
    const _0x4da1c4 = function (_0x3b46e3 = _0x24384f) {
      return _0x4c1e93[_0x2eb79b] * (1 + (_0x3b46e3 - 1) * 0.05) * _0x8c8ac0[_0x176fb8] * (_0x59ea61[_0x176fb8]?.[_0x2eb79b] || 1);
    }();
    const _0x31d6b3 = Math.max(0.1, Number(_0xefac4.power) || 1);
    const _0x902894 = document.createElement("span");
    _0x902894.className = "enemy";
    _0x902894.dataset.air = String(Boolean(_0x3784c5.air));
    _0x902894.dataset.boss = String(Boolean(_0x3784c5.boss));
    _0x902894.dataset.elite = String(Boolean(_0xefac4.elite));
    _0x902894.innerHTML = "<img src=\"" + (_0x3784c5.moveAnimation || _0x3784c5.image) + "\" alt=\"\"><span class=\"enemy-health\"><i></i><b></b></span><span class=\"enemy-tag\">" + (_0xefac4.elite ? "强化" : "") + _0x3784c5.name + "</span>";
    const _0x2939c6 = _0x902894.querySelector("img");
    _0x2939c6.addEventListener("error", () => {
      if (_0x2939c6.getAttribute("src") !== _0x3784c5.image) {
        _0x2939c6.src = _0x3784c5.image;
      }
    });
    _0x18bc6f.enemies.append(_0x902894);
    const _0x279dc1 = {
      id: ++_0x3f5988,
      typeId: _0x1d144f,
      type: _0x3784c5,
      element: _0x902894,
      lane: _0x2a00b2,
      distance: 0,
      attack: Number.isFinite(_0xefac4.attack) ? _0xefac4.attack : _0x3784c5.attack,
      hp: _0x3784c5.hp * _0x4da1c4 * _0x31d6b3,
      maxHp: _0x3784c5.hp * _0x4da1c4 * _0x31d6b3,
      shield: (_0x3784c5.shield || 0) * _0x4da1c4 * _0x31d6b3,
      maxShield: (_0x3784c5.shield || 0) * _0x4da1c4 * _0x31d6b3,
      armor: _0x3784c5.armor || 0,
      speed: (Number.isFinite(_0xefac4.speed) ? _0xefac4.speed : _0x3784c5.speed) * _0x4346c0(),
      reward: Number.isFinite(_0xefac4.reward) ? _0xefac4.reward : _0x3784c5.reward,
      lastHit: -Infinity,
      spawnTime: _0x46d76f,
      revealedUntil: 0,
      slowUntil: 0,
      slowAmount: 0,
      vulnerableUntil: 0,
      vulnerability: 0,
      shieldBlockedUntil: 0,
      phased: false,
      blocked: false,
      dead: false,
      lastTeleport: _0x46d76f,
      stage: 1,
      components: _0x3784c5.components?.map(_0x10e914 => ({
        name: _0x10e914,
        hp: _0x3784c5.componentHp * _0x4da1c4,
        maxHp: _0x3784c5.componentHp * _0x4da1c4
      })) || []
    };
    _0x1c1303.push(_0x279dc1);
    if (_0x462414) {
      window.NeonBGM?.enterBoss(_0x1d144f);
    }
    _0xc0df42(_0x1d144f, _0x462414 ? "entrance" : "spawn", {
      priority: _0x462414 ? 4 : 1,
      chance: _0x462414 ? 1 : 0.42,
      cooldown: _0x462414 ? 0 : 2400,
      force: _0x462414
    });
    _0x8e2c84();
    _0x2d0d68(_0x279dc1);
    return _0x279dc1;
  }
  function _0x2d0d68(_0x50b6af) {
    const _0x409fc4 = board.getBoundingClientRect();
    const _0x15aeb8 = _0x174b07(_0x50b6af.distance, _0x50b6af.lane);
    const _0x49c5e4 = _0x50b6af.type.boss ? 1 : 0.82 + _0x15aeb8.y * 0.004;
    const _0x5d72d0 = _0x409fc4.width * _0x50b6af.type.size * _0x49c5e4;
    const _0x32f364 = _0x50b6af.type.boss ? 72 : 25;
    const _0x44a051 = _0x50b6af.type.boss ? 154 : 78;
    const _0x2b3a6d = Math.max(_0x32f364, Math.min(_0x44a051, _0x5d72d0));
    const _0x362332 = _0x409fc4.left + _0x15aeb8.x / 100 * _0x409fc4.width;
    const _0x1c4dae = _0x409fc4.top + _0x15aeb8.y / 100 * _0x409fc4.height;
    _0x50b6af.screen = {
      x: _0x362332,
      y: _0x1c4dae
    };
    _0x50b6af.element.style.left = _0x362332 + "px";
    _0x50b6af.element.style.top = _0x1c4dae + "px";
    _0x50b6af.element.style.width = _0x2b3a6d + "px";
    _0x50b6af.element.style.zIndex = String(100 + Math.round(_0x15aeb8.y * 10));
    _0x50b6af.element.dataset.phased = String(_0x50b6af.phased);
    _0x50b6af.element.dataset.revealed = String(_0x46d76f < _0x50b6af.revealedUntil);
    const _0x24c40b = Math.max(0, _0x50b6af.hp / _0x50b6af.maxHp * 100);
    const _0x12ebe8 = _0x50b6af.maxShield ? Math.max(0, _0x50b6af.shield / _0x50b6af.maxShield * 100) : 0;
    _0x50b6af.element.style.setProperty("--hp", _0x24c40b + "%");
    _0x50b6af.element.style.setProperty("--shield", _0x12ebe8 + "%");
    if (_0x50b6af.type.boss) {
      const _0x54db11 = _0x50b6af.components.find(_0x1a4a9b => _0x1a4a9b.hp > 0);
      _0x50b6af.element.querySelector(".enemy-tag").textContent = _0x54db11 ? _0x50b6af.type.name + " · " + _0x54db11.name : _0x50b6af.type.name + " · 阶段 " + _0x50b6af.stage;
    }
  }
  function _0x3994d0(_0x331578, _0x54c621 = 0, _0x514b06 = 0) {
    if (_0x331578?.screen) {
      return {
        x: _0x331578.screen.x + _0x54c621,
        y: _0x331578.screen.y + _0x514b06
      };
    }
    if (!_0x331578?.getBoundingClientRect) {
      return null;
    }
    const _0x2f7b8a = _0x331578.getBoundingClientRect();
    return {
      x: _0x2f7b8a.left + _0x2f7b8a.width / 2 + _0x54c621,
      y: _0x2f7b8a.top + _0x2f7b8a.height * 0.35 + _0x514b06
    };
  }
  function _0x1f79f1(_0x5dafc9, _0x28a0f3, _0xec3a8e, _0x42bab3 = {}) {
    if (!_0x28a0f3?.screen) {
      return;
    }
    const _0x211dde = _0x3994d0(_0x5dafc9, _0x42bab3.sourceOffsetX || 0, _0x42bab3.sourceOffsetY || 0);
    if (!_0x211dde) {
      return;
    }
    const _0x2bf9ee = _0x28a0f3.screen.x + (_0x42bab3.targetOffsetX || 0);
    const _0x5681d5 = _0x28a0f3.screen.y - (_0x28a0f3.type.air ? 12 : 6) + (_0x42bab3.targetOffsetY || 0);
    const _0x2196df = document.createElement("i");
    _0x2196df.className = "combat-projectile";
    _0x2196df.dataset.kind = _0xec3a8e;
    _0x2196df.style.setProperty("--shot-start-x", _0x211dde.x + "px");
    _0x2196df.style.setProperty("--shot-start-y", _0x211dde.y + "px");
    _0x2196df.style.setProperty("--shot-target-x", _0x2bf9ee + "px");
    _0x2196df.style.setProperty("--shot-target-y", _0x5681d5 + "px");
    _0x2196df.style.setProperty("--shot-angle", Math.atan2(_0x5681d5 - _0x211dde.y, _0x2bf9ee - _0x211dde.x) + "rad");
    _0x2196df.style.setProperty("--shot-duration", (_0x42bab3.duration || 180) + "ms");
    _0x18bc6f.effects.append(_0x2196df);
    _0x2196df.addEventListener("animationend", () => {
      _0x2196df.remove();
      (function (_0x2057b6, _0x2d8ea2, _0x254510) {
        const _0x2af86a = document.createElement("i");
        _0x2af86a.className = "combat-impact";
        _0x2af86a.dataset.kind = _0x254510;
        _0x2af86a.style.setProperty("--impact-x", _0x2057b6 + "px");
        _0x2af86a.style.setProperty("--impact-y", _0x2d8ea2 + "px");
        _0x18bc6f.effects.append(_0x2af86a);
        _0x2af86a.addEventListener("animationend", () => _0x2af86a.remove(), {
          once: true
        });
      })(_0x2bf9ee, _0x5681d5, _0xec3a8e);
    }, {
      once: true
    });
  }
  function _0x80a67d(_0x528204, _0x3a7885, _0x5e12e2, _0x367d0e = 2) {
    if (!_0x3a7885?.screen) {
      return;
    }
    const _0x408ff7 = _0x3994d0(_0x528204);
    if (!_0x408ff7) {
      return;
    }
    const _0x5746ab = _0x408ff7.x;
    const _0x338472 = _0x408ff7.y;
    const _0x1645e5 = _0x3a7885.screen.x - _0x5746ab;
    const _0x14aba6 = _0x3a7885.screen.y - _0x338472;
    const _0x5489af = document.createElement("i");
    _0x5489af.className = "combat-flash";
    _0x5489af.style.left = _0x5746ab + "px";
    _0x5489af.style.top = _0x338472 + "px";
    _0x5489af.style.width = Math.hypot(_0x1645e5, _0x14aba6) + "px";
    _0x5489af.style.height = _0x367d0e + "px";
    _0x5489af.style.setProperty("--flash-color", _0x5e12e2);
    _0x5489af.style.transform = "rotate(" + Math.atan2(_0x14aba6, _0x1645e5) + "rad)";
    _0x18bc6f.effects.append(_0x5489af);
    _0x5489af.addEventListener("animationend", () => _0x5489af.remove(), {
      once: true
    });
  }
  function _0x4d7302(_0x39bdcc, _0x263bda, _0x5959b9, _0xe869d2, _0x12f559 = 0, _0x105bee = _0x46d76f) {
    if (!_0x39bdcc || _0x39bdcc.dead || _0x39bdcc.phased && _0x105bee >= _0x39bdcc.revealedUntil) {
      return 0;
    }
    let _0x3d8ccb = _0x263bda;
    if (_0x105bee < _0x39bdcc.vulnerableUntil) {
      _0x3d8ccb *= 1 + _0x39bdcc.vulnerability;
    }
    if (_0x5959b9 === "physical") {
      _0x3d8ccb *= 1 - _0x39bdcc.armor * (1 - _0x12f559);
    }
    if (_0x39bdcc.typeId === "riot" && _0xe869d2 && function (_0x20cd7d, _0x284781) {
      const _0x15e516 = _0x174b07(_0x20cd7d.distance, _0x20cd7d.lane);
      const _0x13306a = _0x4d8a47(_0x284781);
      const _0x5a91bc = _0xc7fa30(_0x20cd7d);
      return _0x15e516.dx * (_0x13306a.x - _0x5a91bc.x) + _0x15e516.dy * (_0x13306a.y - _0x5a91bc.y) < 0;
    }(_0x39bdcc, _0xe869d2)) {
      _0x3d8ccb *= 1.25;
    }
    const _0x301ff2 = _0x39bdcc.shield;
    if (_0x39bdcc.shield > 0) {
      const _0x1e0fc0 = Math.min(_0x39bdcc.shield, _0x3d8ccb);
      _0x39bdcc.shield -= _0x1e0fc0;
      _0x3d8ccb -= _0x1e0fc0;
    }
    if (_0x301ff2 > 0 && _0x39bdcc.shield <= 0 && _0xe869d2?.dataset.type === "hacker-relay") {
      _0xc0df42("hacker-relay", "combat", {
        priority: 2,
        chance: 0.7
      });
    }
    if (_0x39bdcc.components.length && _0x3d8ccb > 0) {
      const _0x40e423 = _0x39bdcc.components.find(_0x14b543 => _0x14b543.hp > 0);
      if (_0x40e423) {
        const _0x1d0021 = _0x3d8ccb * 0.35;
        _0x40e423.hp = Math.max(0, _0x40e423.hp - _0x1d0021);
        _0x3d8ccb *= 0.65;
        if (_0x40e423.hp === 0) {
          _0x14f95b(_0x39bdcc.type.name + " · " + _0x40e423.name + "已摧毁");
          const _0x2ce699 = {
            盾牌: "shield",
            导弹舱: "missiles",
            推进器: "thruster"
          }[_0x40e423.name];
          if (_0x2ce699) {
            _0xc0df42("enforcer", _0x2ce699, {
              priority: 4,
              force: true,
              cooldown: 0
            });
          }
        }
      }
    }
    _0x39bdcc.hp -= _0x3d8ccb;
    _0x39bdcc.lastHit = _0x105bee;
    if (_0x39bdcc.hp <= 0) {
      (function (_0x3bbbe9, _0x2239f8) {
        if (_0x3bbbe9.dead) {
          return;
        }
        _0x3bbbe9.dead = true;
        _0x3bbbe9.element.remove();
        coins += _0x202257(_0x3bbbe9.reward);
        if (_0x3bbbe9.type.boss) {
          _0xc0df42(_0x3bbbe9.typeId, "defeated", {
            priority: 5,
            force: true,
            cooldown: 0
          });
          if (!_0x1c1303.some(_0xfd2d9a => !_0xfd2d9a.dead && _0xfd2d9a.type.boss)) {
            window.NeonBGM?.exitBoss();
          }
        } else if (_0x2239f8?.dataset.type) {
          const _0x5e5bf9 = _0x3bbbe9.type.mechanical || _0x3bbbe9.typeId === "riot" || _0x3bbbe9.typeId === "devourer";
          _0xc0df42(_0x2239f8.dataset.type, _0x5e5bf9 ? "kill" : "combat", {
            priority: 2,
            chance: 0.22
          });
        }
        updatePlayerStatus();
        saveGame();
      })(_0x39bdcc, _0xe869d2);
    }
    return _0x3d8ccb;
  }
  function _0x4f0989(_0x43332d, _0xc21174) {
    _0x1c1303.forEach(_0x5abc92 => {
      if (_0x5abc92.dead) {
        return;
      }
      (function (_0xea2f35, _0x3be79e, _0x4a1eba) {
        if (_0xea2f35.type.network && _0xea2f35.shield < _0xea2f35.maxShield && _0x3be79e - _0xea2f35.lastHit >= 4000 && _0x3be79e >= _0xea2f35.shieldBlockedUntil) {
          _0xea2f35.shield = Math.min(_0xea2f35.maxShield, _0xea2f35.shield + _0xea2f35.maxShield * 0.12 * _0x4a1eba);
        }
        if (_0xea2f35.typeId === "enforcer") {
          const _0x576b43 = _0xea2f35.components.find(_0x1a67da => _0x1a67da.name === "盾牌");
          const _0x573d57 = _0xea2f35.components.find(_0x478483 => _0x478483.name === "导弹舱");
          const _0x2729b1 = _0xea2f35.components.find(_0x6215d1 => _0x6215d1.name === "推进器");
          _0xea2f35.armor = _0x576b43?.hp > 0 ? 0.25 : 0.08;
          _0xea2f35.attack = _0x573d57?.hp > 0 ? _0xea2f35.type.attack : _0xea2f35.type.attack * 0.6;
          _0xea2f35.speed = _0xea2f35.type.speed * _0x4346c0() * (_0x2729b1?.hp > 0 ? 1 : 0.7);
          if (!_0xea2f35.enragedVoicePlayed && _0xea2f35.hp / _0xea2f35.maxHp <= 0.5) {
            _0xea2f35.enragedVoicePlayed = true;
            _0xc0df42("enforcer", "enraged", {
              priority: 4,
              force: true,
              cooldown: 0
            });
          }
          if (!_0xea2f35.coreVoicePlayed && _0xea2f35.components.every(_0x18f99c => _0x18f99c.hp <= 0)) {
            _0xea2f35.coreVoicePlayed = true;
            _0xc0df42("enforcer", "core", {
              priority: 4,
              force: true,
              cooldown: 0
            });
          }
        }
        if (_0xea2f35.typeId === "eve") {
          const _0x3a7670 = _0xea2f35.stage;
          const _0x3229dc = _0xea2f35.hp / _0xea2f35.maxHp;
          _0xea2f35.stage = _0x3229dc > 2 / 3 ? 1 : _0x3229dc > 1 / 3 ? 2 : 3;
          if (_0xea2f35.stage === 1 && _0x3be79e - _0xea2f35.lastTeleport >= 4000) {
            _0xea2f35.distance = Math.min(1000, _0xea2f35.distance + 55);
            _0xea2f35.lastTeleport = _0x3be79e;
            _0xc0df42("eve", "node", {
              priority: 3
            });
          }
          if (_0xea2f35.stage !== _0x3a7670) {
            _0xc0df42("eve", _0xea2f35.stage === 2 ? "transfer" : "final", {
              priority: 4,
              force: true,
              cooldown: 0
            });
          }
          _0xea2f35.speed = _0xea2f35.stage === 1 ? 0 : _0xea2f35.stage === 2 ? _0x4346c0() * 12 : 0;
          if (_0xea2f35.stage === 3) {
            _0xea2f35.distance = Math.max(_0xea2f35.distance, 720);
          }
        }
      })(_0x5abc92, _0xc21174, _0x43332d);
      const _0x1135f9 = _0xc21174 < _0x5abc92.slowUntil ? 1 - _0x5abc92.slowAmount : 1;
      if (!_0x5abc92.blocked) {
        _0x5abc92.distance += _0x5abc92.speed * _0x1135f9 * _0x43332d;
      }
      if (!_0xeca75 && _0x5abc92.distance >= 740) {
        _0xeca75 = true;
        _0xc0df42("lan", "routeSplit", {
          priority: 3
        });
      }
      if (_0x5abc92.distance >= 1000) {
        (function (_0x1c99f4) {
          if (_0x1c99f4.dead) {
            return;
          }
          _0x1c99f4.dead = true;
          _0x1c99f4.element.remove();
          health = Math.max(0, health - 1);
          if (_0x1c99f4.type.boss && !_0x1c1303.some(_0x3f9aed => !_0x3f9aed.dead && _0x3f9aed.type.boss)) {
            window.NeonBGM?.exitBoss({
              resumeMap: health > 0
            });
          }
          const _0x4698fa = _0x1c99f4.lane === "right" ? _0x18bc6f.baseRight : _0x18bc6f.baseLeft;
          if (_0x4698fa) {
            _0x4698fa.classList.remove("hit");
            _0x4698fa.getBoundingClientRect();
            _0x4698fa.classList.add("hit");
            setTimeout(() => _0x4698fa.classList.remove("hit"), 520);
          }
          _0x14f95b((_0x1c99f4.lane === "right" ? "右侧" : "左侧") + "基地受击 · -1", 900);
          _0xc0df42("lan", "damage", {
            priority: 3,
            force: health <= 3
          });
          updatePlayerStatus();
          if (health === 0 && !_0x161f10) {
            _0x161f10 = true;
            _0xecb8c0 = false;
            _0x1bf5be = [];
            _0x1c1303.forEach(_0x5ee57f => {
              if (_0x5ee57f !== _0x1c99f4 && !_0x5ee57f.dead) {
                _0x5ee57f.dead = true;
                _0x5ee57f.element.remove();
              }
            });
            window.NeonBGM?.exitBoss({
              resumeMap: false
            });
            _0x14f95b("防线失守", 4000);
            _0xc0df42(_0x1c99f4.typeId === "eve" ? "eve" : "lan", _0x1c99f4.typeId === "eve" ? "playerDefeat" : "defeat", {
              priority: 5,
              force: true,
              cooldown: 0
            });
            window.showLevelComplete?.({
              victory: false,
              mapIndex: _0x2eb79b,
              mapName: window.mapLevels?.[_0x2eb79b]?.name,
              waveCount: _0x24384f,
              health: 0,
              reward: 0
            });
          }
          saveGame();
        })(_0x5abc92);
      } else {
        _0x2d0d68(_0x5abc92);
      }
    });
    _0x1c1303 = _0x1c1303.filter(_0x1c4766 => !_0x1c4766.dead);
    _0x8e2c84();
  }
  function _0x48f1e7(_0x4318ec, _0x5f3c62, _0x34d2cc = true) {
    const _0x538945 = _0x4d8a47(_0x4318ec);
    return _0x1c1303.filter(_0x1878ef => !_0x1878ef.dead && (!!_0x34d2cc || !_0x1878ef.type.air) && _0x2bc49d(_0x538945, _0xc7fa30(_0x1878ef)) <= _0x5f3c62);
  }
  function _0x16a94c(_0x3c2d02) {
    let _0x379533 = null;
    for (let _0x23f69d = 0; _0x23f69d <= 1000; _0x23f69d += 5) {
      Object.keys(_0x352d87).forEach(_0x22f34d => {
        const _0x24279f = _0x174b07(_0x23f69d, _0x22f34d);
        const _0x33a3f1 = {
          x: _0x24279f.x * 10,
          y: _0x24279f.y * 10,
          distance: _0x23f69d
        };
        const _0x117642 = _0x2bc49d(_0x3c2d02, _0x33a3f1);
        if (!_0x379533 || _0x117642 < _0x379533.separation) {
          _0x379533 = {
            ..._0x33a3f1,
            separation: _0x117642
          };
        }
      });
    }
    return _0x379533;
  }
  function _0x26f0b3(_0x521dfa, _0x34864f) {
    if (!_0x521dfa.dataset.rallyX || !_0x521dfa.dataset.rallyY) {
      const _0x4dc271 = _0x16a94c(_0x4d8a47(_0x521dfa));
      _0x521dfa.dataset.rallyX = String(_0x4dc271.x);
      _0x521dfa.dataset.rallyY = String(_0x4dc271.y);
    }
    let _0x150d02 = _0x18bc6f.rallies.querySelector("[data-rally-slot=\"" + _0x521dfa.dataset.slot + "\"]");
    if (!_0x150d02) {
      _0x150d02 = document.createElement("span");
      _0x150d02.className = "rally-marker";
      _0x150d02.dataset.rallySlot = _0x521dfa.dataset.slot;
      _0x150d02.innerHTML = "<img class=\"mercenary\" src=\"./assets/units/mercenary-shield.png\" alt=\"\"><img class=\"mercenary\" src=\"./assets/units/mercenary-rifle.png\" alt=\"\">";
      _0x18bc6f.rallies.append(_0x150d02);
    }
    const _0x5d7704 = _0x4d8a47(_0x521dfa);
    if (_0x2bc49d(_0x5d7704, {
      x: Number(_0x521dfa.dataset.rallyX),
      y: Number(_0x521dfa.dataset.rallyY)
    }) > _0x34864f) {
      const _0xad67d5 = _0x16a94c(_0x5d7704);
      _0x521dfa.dataset.rallyX = String(_0xad67d5.x);
      _0x521dfa.dataset.rallyY = String(_0xad67d5.y);
    }
    return _0x150d02;
  }
  function _0x29106d() {
    const _0x421dd8 = board.getBoundingClientRect();
    const _0x567a39 = Math.max(24, Math.min(38, _0x421dd8.width * 0.042));
    _0x18bc6f.rallies.querySelectorAll(".rally-marker").forEach(_0x35d8ef => {
      const _0x5619af = towerLayer.querySelector("[data-slot=\"" + _0x35d8ef.dataset.rallySlot + "\"]");
      if (!_0x5619af || _0x5619af.hidden || _0x5619af.dataset.type !== "street-mercenary") {
        _0x35d8ef.remove();
        return;
      }
      _0x35d8ef.style.left = _0x421dd8.left + Number(_0x5619af.dataset.rallyX) / 1000 * _0x421dd8.width + "px";
      _0x35d8ef.style.top = _0x421dd8.top + Number(_0x5619af.dataset.rallyY) / 1000 * _0x421dd8.height + "px";
      _0x35d8ef.style.setProperty("--rally-unit-height", _0x567a39 + "px");
      _0x35d8ef.style.setProperty("--rally-marker-width", _0x567a39 * 1.38 + "px");
      const _0x469892 = _0x5619af._combat?.mercs || [];
      _0x35d8ef.querySelectorAll(".mercenary").forEach((_0x341956, _0x51deeb) => {
        _0x341956.dataset.down = String(Boolean(_0x469892[_0x51deeb]?.respawnAt > _0x46d76f));
      });
    });
  }
  function _0x27bce2(_0x4fa9f4, _0x327d95, _0x35eef9) {
    const _0x4bb856 = _0x3f0ab1[_0x4fa9f4.dataset.type];
    if (!_0x4bb856) {
      return;
    }
    const _0x25eaa2 = Number(_0x4fa9f4.dataset.level);
    const _0x127822 = _0x1b0355(_0x4fa9f4, _0x4bb856, _0x25eaa2);
    const _0x4b0fa8 = _0x4fa9f4._combat ||= {
      cooldown: Math.random() * 0.25,
      targetId: null
    };
    if (_0x4fa9f4.dataset.type !== "street-mercenary") {
      _0x4b0fa8.cooldown -= _0x327d95;
      if (!(_0x4b0fa8.cooldown > 0)) {
        if (_0x4fa9f4.dataset.type === "hacker-relay") {
          const _0x14bd5f = _0x48f1e7(_0x4fa9f4, _0x127822);
          if (_0x14bd5f.length) {
            _0x355120(_0x4fa9f4);
            _0xc0df42("hacker-relay", "combat", {
              priority: 2,
              chance: 0.08
            });
          }
          _0x14bd5f.forEach(_0x1ae3c1 => {
            _0x1ae3c1.revealedUntil = _0x35eef9 + _0x4bb856.duration * 1000;
            _0x1ae3c1.slowUntil = _0x35eef9 + _0x4bb856.duration * 1000;
            _0x1ae3c1.slowAmount = Math.max(_0x1ae3c1.slowAmount, _0x4bb856.slow);
            _0x1ae3c1.vulnerableUntil = _0x35eef9 + _0x4bb856.duration * 1000;
            _0x1ae3c1.vulnerability = Math.max(_0x1ae3c1.vulnerability, _0x4bb856.vulnerability);
            _0x1ae3c1.shieldBlockedUntil = _0x35eef9 + _0x4bb856.duration * 1000;
            _0x1f79f1(_0x4fa9f4, _0x1ae3c1, "hacker", {
              duration: 280
            });
            _0x80a67d(_0x4fa9f4, _0x1ae3c1, "#79ff9e", 1);
            _0x4d7302(_0x1ae3c1, _0xac2a0f(_0x4fa9f4, _0x4bb856.damage * _0x25eaa2), "energy", _0x4fa9f4, 0, _0x35eef9);
          });
          _0x4b0fa8.cooldown += _0x4bb856.cooldown;
          return;
        }
        if (_0x4fa9f4.dataset.type === "mag-rail-sniper") {
          const _0x4fa391 = _0x48f1e7(_0x4fa9f4, _0x127822).filter(_0xa0c014 => _0x2bc49d(_0x4d8a47(_0x4fa9f4), _0xc7fa30(_0xa0c014)) >= _0x4bb856.blindSpot);
          const _0x78c791 = _0x4fa391.reduce((_0x708b46, _0x3e333f) => !_0x708b46 || _0x3e333f.hp + _0x3e333f.shield > _0x708b46.hp + _0x708b46.shield ? _0x3e333f : _0x708b46, null);
          if (_0x78c791) {
            _0x1f79f1(_0x4fa9f4, _0x78c791, "rail", {
              duration: 110
            });
            _0x80a67d(_0x4fa9f4, _0x78c791, "#34c9ff", 3);
            _0xc0df42("mag-rail-sniper", _0x4d7302(_0x78c791, _0xac2a0f(_0x4fa9f4, _0x4bb856.damage * _0x4bb856.damageScale[_0x25eaa2 - 1]), "physical", _0x4fa9f4, _0x4bb856.armorPenetration, _0x35eef9) > 0 ? "combat" : "blocked", {
              priority: 2,
              chance: 0.09
            });
            _0x355120(_0x4fa9f4);
          }
          _0x4b0fa8.cooldown += _0x4bb856.cooldown;
          return;
        }
        if (_0x4fa9f4.dataset.type === "arc-neon") {
          const _0x1c3783 = _0x48f1e7(_0x4fa9f4, _0x127822, false).sort((_0x111d46, _0x5b09d) => _0x111d46.distance - _0x5b09d.distance);
          const _0xc21b8b = [];
          for (_0x1c3783[0] && _0xc21b8b.push(_0x1c3783[0]); _0xc21b8b.length && _0xc21b8b.length < 3;) {
            const _0x210be6 = _0xc21b8b.at(-1);
            const _0x349a50 = _0x1c1303.filter(_0x1b7e47 => !_0x1b7e47.dead && !_0x1b7e47.type.air && !_0xc21b8b.includes(_0x1b7e47) && _0x2bc49d(_0xc7fa30(_0x210be6), _0xc7fa30(_0x1b7e47)) <= _0x4bb856.chainDistance).sort((_0x2b2d7a, _0x253ff5) => _0x2bc49d(_0xc7fa30(_0x210be6), _0xc7fa30(_0x2b2d7a)) - _0x2bc49d(_0xc7fa30(_0x210be6), _0xc7fa30(_0x253ff5)))[0];
            if (!_0x349a50) {
              break;
            }
            _0xc21b8b.push(_0x349a50);
          }
          if (_0xc21b8b.length) {
            _0x355120(_0x4fa9f4);
            if (_0xc21b8b.length > 1) {
              _0xc0df42("arc-neon", "combat", {
                priority: 2,
                chance: 0.11
              });
            }
          }
          _0xc21b8b.forEach((_0x21c0ee, _0x2e4b1b) => {
            const _0x42c359 = _0x21c0ee.distance >= 390 && _0x21c0ee.distance <= 520;
            const _0x2fd421 = _0xac2a0f(_0x4fa9f4, _0x4bb856.chainDamage[_0x2e4b1b] * _0x4bb856.damageScale[_0x25eaa2 - 1] * (_0x42c359 ? 1 + _0x4bb856.wetBonus : 1));
            const _0x482426 = _0x2e4b1b ? _0xc21b8b[_0x2e4b1b - 1] : _0x4fa9f4;
            _0x1f79f1(_0x482426, _0x21c0ee, "arc", {
              duration: 125
            });
            _0x80a67d(_0x482426, _0x21c0ee, "#20f4e6", 2);
            _0x4d7302(_0x21c0ee, _0x2fd421, "energy", _0x4fa9f4, 0, _0x35eef9);
          });
          _0x4b0fa8.cooldown += _0x4bb856.cooldown;
          return;
        }
        if (_0x4fa9f4.dataset.type === "drone-hive") {
          const _0xc4b3b = _0x127822 + (_0x4b0fa8.targetId ? _0x4bb856.pursuit : 0);
          const _0x3e4100 = _0x48f1e7(_0x4fa9f4, _0xc4b3b).sort((_0x5ac962, _0x32786a) => Number(_0x32786a.type.air) - Number(_0x5ac962.type.air) || _0x32786a.distance - _0x5ac962.distance)[0];
          if (_0x3e4100) {
            const _0x5f21cf = _0x4b0fa8.targetId !== _0x3e4100.id;
            _0x4b0fa8.targetId = _0x3e4100.id;
            const _0x506adc = _0x2bc49d(_0x4d8a47(_0x4fa9f4), _0xc7fa30(_0x3e4100));
            const _0x2318ad = _0xac2a0f(_0x4fa9f4, _0x4bb856.damage * _0x4bb856.damageScale[_0x25eaa2 - 1] * (_0x3e4100.type.air ? 1 + _0x4bb856.flyingBonus : 1));
            for (let _0x630290 = 0; _0x630290 < _0x4bb856.drones; _0x630290 += 1) {
              const _0x4b3280 = _0x630290 ? 7 : -7;
              _0x1f79f1(_0x4fa9f4, _0x3e4100, "drone", {
                duration: 230 + _0x630290 * 35,
                sourceOffsetX: _0x4b3280,
                targetOffsetX: _0x4b3280 * 0.45,
                targetOffsetY: _0x630290 ? 3 : -3
              });
              _0x4d7302(_0x3e4100, _0x2318ad, "physical", _0x4fa9f4, 0, _0x35eef9);
            }
            _0x355120(_0x4fa9f4);
            _0xc0df42("drone-hive", _0x3e4100.type.air ? "upgrade" : "combat", {
              priority: 2,
              chance: 0.08
            });
            _0x4b0fa8.cooldown += _0x4bb856.cooldown + (_0x5f21cf ? _0x506adc / 420 : 0);
          } else {
            _0x4b0fa8.targetId = null;
            _0x4b0fa8.cooldown = 0.08;
          }
        }
      }
    } else {
      (function (_0x8bc8ca, _0x4ac0c3, _0x33d66a, _0x287fde, _0x179f39, _0x1fae07) {
        const _0x1b3e7d = _0x1b0355(_0x8bc8ca, _0x33d66a, _0x287fde);
        _0x26f0b3(_0x8bc8ca, _0x1b3e7d);
        const _0x2b4256 = {
          x: Number(_0x8bc8ca.dataset.rallyX),
          y: Number(_0x8bc8ca.dataset.rallyY)
        };
        _0x4ac0c3.mercs ||= Array.from({
          length: _0x33d66a.mercenaryCount
        }, () => ({
          hp: _0x33d66a.mercenaryHealth * _0x33d66a.healthScale[_0x287fde - 1],
          cooldown: 0,
          respawnAt: 0,
          targetId: null
        }));
        const _0x14605d = _0x33d66a.mercenaryHealth * _0x33d66a.healthScale[_0x287fde - 1];
        const _0x13eebb = _0x1c1303.filter(_0x3b205e => !_0x3b205e.dead && !_0x3b205e.type.air && (!_0x3b205e.phased || !(_0x1fae07 >= _0x3b205e.revealedUntil)) && _0x2bc49d(_0x2b4256, _0xc7fa30(_0x3b205e)) <= _0x33d66a.blockRange);
        _0x4ac0c3.mercs.forEach((_0x1e4253, _0x422ee8) => {
          if (_0x1e4253.respawnAt) {
            if (_0x1fae07 < _0x1e4253.respawnAt) {
              return;
            }
            _0x1e4253.respawnAt = 0;
            _0x1e4253.hp = _0x14605d;
          }
          let _0x56ff6f = _0x1c1303.find(_0x2cf893 => _0x2cf893.id === _0x1e4253.targetId && !_0x2cf893.dead && _0x13eebb.includes(_0x2cf893));
          if (!_0x56ff6f) {
            _0x56ff6f = _0x13eebb.find(_0x2ca9e3 => !_0x4ac0c3.mercs.some(_0x482552 => _0x482552 !== _0x1e4253 && _0x482552.targetId === _0x2ca9e3.id));
            _0x1e4253.targetId = _0x56ff6f?.id ?? null;
          }
          if (_0x56ff6f) {
            _0x56ff6f.blocked = true;
            if (_0x56ff6f.typeId === "riot" || _0x56ff6f.type.boss) {
              _0xc0df42("street-mercenary", "combat", {
                priority: 2,
                chance: 0.08
              });
            }
            _0x1e4253.hp -= _0x56ff6f.attack * _0x179f39;
            if (_0x1e4253.hp <= 0) {
              _0x1e4253.targetId = null;
              _0x1e4253.respawnAt = _0x1fae07 + _0x33d66a.respawn * 1000;
              _0xc0df42("street-mercenary", "down", {
                priority: 2
              });
              return;
            }
            _0x1e4253.cooldown -= _0x179f39;
            if (_0x1e4253.cooldown <= 0) {
              const _0x2053ec = _0x18bc6f.rallies.querySelector("[data-rally-slot=\"" + _0x8bc8ca.dataset.slot + "\"]");
              const _0x8a9ef9 = _0x2053ec?.querySelectorAll(".mercenary")[_0x422ee8] || _0x8bc8ca;
              _0x1f79f1(_0x8a9ef9, _0x56ff6f, "mercenary", {
                duration: 180,
                sourceOffsetY: -2
              });
              _0x80a67d(_0x8a9ef9, _0x56ff6f, "#c99245", 1);
              _0x4d7302(_0x56ff6f, _0xac2a0f(_0x8bc8ca, _0x33d66a.damage * _0x33d66a.damageScale[_0x287fde - 1]), "physical", _0x8bc8ca, 0, _0x1fae07);
              _0x355120(_0x8bc8ca);
              _0x1e4253.cooldown += _0x33d66a.cooldown;
            }
          }
        });
      })(_0x4fa9f4, _0x4b0fa8, _0x4bb856, _0x25eaa2, _0x327d95, _0x35eef9);
    }
  }
  function _0x419688(_0x561179) {
    if (!_0x561179 || !document.body.contains(_0x561179)) {
      _0x18bc6f.range.hidden = true;
      return;
    }
    const _0x3b3506 = _0x3f0ab1[_0x561179.dataset.type];
    const _0xbc624d = _0x1b0355(_0x561179, _0x3b3506, Number(_0x561179.dataset.level));
    const _0x1eff43 = board.querySelector("[data-slot=\"" + _0x561179.dataset.slot + "\"]").getBoundingClientRect();
    const _0x30d5d4 = board.getBoundingClientRect().width / 1000;
    _0x18bc6f.range.hidden = false;
    _0x18bc6f.range.style.left = _0x1eff43.left + _0x1eff43.width / 2 + "px";
    _0x18bc6f.range.style.top = _0x1eff43.top + _0x1eff43.height / 2 + "px";
    _0x18bc6f.range.style.setProperty("--range-width", _0xbc624d * _0x30d5d4 * 2 + "px");
    _0x18bc6f.range.style.setProperty("--range-height", _0xbc624d * _0x30d5d4 * 2 * 0.62 + "px");
    _0x18bc6f.range.style.setProperty("--range-color", _0x4ec351[_0x561179.dataset.type]);
    const _0x35b4b8 = _0x3b3506.blindSpot || 0;
    _0x18bc6f.range.style.setProperty("--blind-width", _0x35b4b8 * _0x30d5d4 * 2 + "px");
    _0x18bc6f.range.style.setProperty("--blind-height", _0x35b4b8 * _0x30d5d4 * 2 * 0.62 + "px");
    _0x18bc6f.range.style.setProperty("--blind-opacity", _0x35b4b8 ? "1" : "0");
  }
  window.battleState = {
    snapshot: () => ({
      wave: _0x24384f,
      mapIndex: _0x2eb79b,
      difficulty: _0x176fb8,
      gameSpeed: _0x53ec67,
      waveActive: _0xecb8c0,
      nextWaveCountdown: _0x3ebe3b
    })
  };
  (function () {
    try {
      const _0x677249 = JSON.parse(localStorage.getItem(saveKey) || "null");
      if (!_0x677249 || _0x677249.version !== 2) {
        return;
      }
      _0x2eb79b = Math.max(0, Math.min(5, Math.round(Number(_0x677249.mapIndex) || 0)));
      if (!window.isCampaignMapUnlocked?.(_0x2eb79b)) {
        _0x2eb79b = 0;
      }
      _0x24384f = Math.max(1, Math.min(_0x56ffcd(_0x2eb79b) + 1, Math.round(Number(_0x677249.wave) || 1)));
      _0x176fb8 = _0x8c8ac0[_0x677249.difficulty] ? _0x677249.difficulty : "normal";
      _0x53ec67 = [1, 2, 3].includes(Number(_0x677249.gameSpeed)) ? Number(_0x677249.gameSpeed) : 1;
    } catch (_0x3707c1) {
      console.warn("Unable to restore battle settings.", _0x3707c1);
    }
  })();
  _0x63dadc(_0x53ec67, {
    save: false
  });
  _0x5f0af5(_0x2eb79b, {
    resetRallies: false
  });
  _0x18bc6f.map.value = String(_0x2eb79b);
  _0x18bc6f.difficulty.value = _0x176fb8;
  window.selectCommandCenterMap?.(_0x2eb79b);
  _0x8e2c84();
  const _0x4a6bc6 = document.createElement("button");
  _0x4a6bc6.type = "button";
  _0x4a6bc6.className = "tower-action rally";
  _0x4a6bc6.innerHTML = "<strong>集结点</strong><small>配置佣兵拦截位置</small>";
  document.querySelector(".tower-actions__buttons").append(_0x4a6bc6);
  function _0x5a1326(_0x20fae7, _0x2272ac = _0x2eb79b) {
    const _0x3b0fbd = [];
    const _0x310bd8 = new Set(_0x7cafe8[_0x2272ac] || _0x7cafe8[0]);
    const _0x2c0891 = 7 + _0x20fae7 * 2 + (_0x1bcd4e[_0x2272ac] || 0);
    for (let _0x52e203 = 0; _0x52e203 < _0x2c0891; _0x52e203 += 1) {
      let _0x4156ad = "gang";
      if (_0x20fae7 >= 2 && _0x52e203 % 6 == 3) {
        _0x4156ad = "riot";
      }
      if (_0x20fae7 >= 3 && _0x52e203 % 5 == 2) {
        _0x4156ad = "ninja";
      }
      if (_0x20fae7 >= 3 && _0x52e203 % 7 == 5) {
        _0x4156ad = "devourer";
      }
      if (_0x20fae7 >= 4 && _0x52e203 % 8 == 6) {
        _0x4156ad = "aerostat";
      }
      const _0x20c66a = _0x310bd8.has(_0x4156ad) ? _0x4156ad : "gang";
      const _0x2fd58d = _0x5e5dc3[_0x4156ad];
      const _0x5161d5 = _0x5e5dc3[_0x20c66a];
      const _0x56d6b3 = (_0x2fd58d.hp + (_0x2fd58d.shield || 0)) / (1 - (_0x2fd58d.armor || 0));
      const _0x402f1a = (_0x5161d5.hp + (_0x5161d5.shield || 0)) / (1 - (_0x5161d5.armor || 0));
      _0x3b0fbd.push({
        type: _0x20c66a,
        boss: false,
        elite: _0x20c66a !== _0x4156ad,
        power: _0x56d6b3 / _0x402f1a,
        speed: _0x2fd58d.speed,
        attack: _0x2fd58d.attack,
        reward: _0x2fd58d.reward,
        lane: _0x52e203 % 2 == 0 ? "left" : "right",
        delay: _0x4156ad === "riot" ? 1.15 : 0.72
      });
    }
    const _0x4b0317 = _0x2272ac === 5 ? 5 : 10;
    if (_0x20fae7 % _0x4b0317 === 0) {
      const _0x24f698 = Math.floor(_0x20fae7 / _0x4b0317) % 2 == 1 ? "enforcer" : "eve";
      _0x3b0fbd.push({
        type: _0x24f698,
        boss: true,
        lane: _0x20fae7 % 2 == 0 ? "right" : "left",
        delay: 2.2
      });
    }
    return _0x3b0fbd;
  }
  function _0xedb0cb({
    rewardEarly: _0x4c2acc = true
  } = {}) {
    if (_0xecb8c0 || health <= 0 || _0x2d1f6a()) {
      return;
    }
    const _0x3a23e0 = _0x4c2acc ? _0x202257(_0x1a366d.earlyWaveReward(_0x3ebe3b)) : 0;
    _0x3ebe3b = 0;
    _0xf1684a = -1;
    if (_0x3a23e0 > 0) {
      coins += _0x3a23e0;
      updatePlayerStatus();
    }
    _0x1bf5be = _0x5a1326(_0x24384f, _0x2eb79b);
    _0x434645 = 0.2;
    _0xecb8c0 = true;
    _0xeca75 = false;
    _0x14f95b(_0x3a23e0 > 0 ? "提前开启波次 " + _0x24384f + " · 战备奖励 +" + _0x3a23e0 + " G" : "波次 " + _0x24384f + " · 入侵开始");
    _0xc0df42("lan", _0x24384f === _0x56ffcd() ? "finalWave" : "wave", {
      priority: 3,
      force: true,
      cooldown: 0
    });
    _0x8e2c84();
    saveGame();
  }
  function _0x1bec97(_0x57f7fc = _0x2eb79b) {
    _0x1c1303.forEach(_0x1e37af => _0x1e37af.element.remove());
    _0x1c1303 = [];
    _0x1bf5be = [];
    _0xecb8c0 = false;
    _0x3ebe3b = 0;
    _0xf1684a = -1;
    _0x161f10 = false;
    _0xeca75 = false;
    _0x24384f = 1;
    _0x2eb79b = Math.max(0, Math.min(5, Math.round(Number(_0x57f7fc) || 0)));
    _0x18bc6f.map.value = String(_0x2eb79b);
    window.resetCampaignMission?.(_0x2eb79b);
    _0x5f0af5(_0x2eb79b);
    window.selectCommandCenterMap?.(_0x2eb79b);
    _0x18bc6f.rallies.replaceChildren();
    _0x18bc6f.effects.replaceChildren();
    _0x18bc6f.range.hidden = true;
    _0x18bc6f.start.innerHTML = "<span aria-hidden=\"true\">▶</span> 发动波次";
    _0x8e2c84();
    saveGame();
    _0x14f95b("第 " + (_0x2eb79b + 1) + " 关已重新部署", 1800);
  }
  function _0x1cfd74(_0x4cc6a7) {
    document.querySelectorAll("[data-intel-tab]").forEach(_0x5eb8a8 => {
      _0x5eb8a8.setAttribute("aria-selected", String(_0x5eb8a8.dataset.intelTab === _0x4cc6a7));
    });
    const _0x9d01b3 = _0x4cc6a7 === "controls";
    _0x18bc6f.intelKicker.textContent = _0x9d01b3 ? "OPERATIONS MANUAL" : "TACTICAL ARCHIVE";
    _0x18bc6f.intelTitle.textContent = _0x9d01b3 ? "操作说明" : "战术档案";
    _0x18bc6f.intel.setAttribute("aria-label", _0x9d01b3 ? "操作说明" : "战术档案");
    (function (_0x3edfb6) {
      const _0x40511d = [["磁轨狙击台", "#34c9ff", "单体磁轨炮，优先高血量目标", "100伤害 / 1.7秒，35%穿甲", "范围 220 / 240 / 260；55单位近距离盲区", "克制重甲、镇压机和Boss；全图最远，但攻速慢且容易溢出伤害。"], ["电弧霓虹塔", "#20f4e6", "连锁3个目标", "38 / 30 / 22伤害，1.05秒一次", "范围 120 / 134 / 148；跳跃距离65", "克制密集小怪；潮湿目标额外受伤20%，单体输出较弱。"], ["街头佣兵站", "#c99245", "派出2名佣兵拦截", "每人190血，20伤害 / 0.85秒", "集结范围 105 / 118 / 132；拦截半径32", "每人拦截1个地面敌人；阵亡8秒后重生，可在射程内重设集结点。"], ["黑客中继器", "#79ff9e", "范围扫描和干扰脉冲", "2.4秒一次；持续2.8秒", "范围 145 / 160 / 175；无视墙体与高低层", "揭露隐身、关闭护盾恢复；减速18%、易伤12%，直接伤害很低。"], ["无人机蜂巢", "#e8ffff", "2架无人机自动追击", "每架24伤害 / 0.75秒", "范围 175 / 195 / 215；可追出30", "克制飞行单位并增伤35%；距离越远，转移目标后的首次攻击越慢。"]];
      const _0x34836a = [["帮派义体兵", "180", "28", "约36秒", "无护甲、数量多，佣兵和电弧塔克制", _0x5e5dc3.gang.image], ["防暴镇压机", "900", "15", "约67秒", "45%物理护甲，背部受到额外25%伤害", _0x5e5dc3.riot.image], ["相位忍者", "260", "40", "约25秒", "每5秒相位1秒；黑客扫描可取消", _0x5e5dc3.ninja.image], ["企业浮空艇", "500", "28", "约36秒", "20%护甲，不受佣兵拦截，只能被远程塔攻击", _0x5e5dc3.aerostat.image], ["数据吞噬者", "360 + 200护盾", "24", "约42秒", "4秒未受攻击恢复护盾；黑客可阻止恢复", _0x5e5dc3.devourer.image]];
      _0x18bc6f.intelContent.innerHTML = _0x3edfb6 !== "controls" ? _0x3edfb6 !== "towers" ? _0x3edfb6 !== "enemies" ? _0x3edfb6 !== "bosses" ? "<div class=\"intel-formula\">实际血量 = 基础血量 × 地图校准系数 × 波次系数 × 难度系数<br>波次系数 = 1 + 0.05 ×（当前波次 - 1）</div><div class=\"intel-grid\"><article class=\"intel-entry\"><h3>战役进度</h3><p><b>5 / 6 / 7 / 8 / 9 / 10 波</b></p><p>每张地图是一关；通关当前关卡后，下一关才会解锁。</p></article><article class=\"intel-entry\"><h3>敌军解锁</h3><p><b>2 / 3 / 4 / 5 / 5 / 5 种</b></p><p>前3关依次加入镇压机、忍者和浮空艇；第4关起5种普通敌军全部出现。</p></article><article class=\"intel-entry\"><h3>战役压力</h3><p><b>1.00 / 1.18 / 1.38 / 1.62 / 1.55 / 1.85</b></p><p>第4至6关每波额外2名敌人；第6关仍在第5、10波触发双Boss战。</p></article><article class=\"intel-entry\"><h3>地图校准</h3><p><b>1.30 / 1.10 / 1.45 / 1.50 / 1.60 / 0.80</b></p><p>校准值补偿路线长度和塔位覆盖差异，不直接代表关卡顺序。</p></article><article class=\"intel-entry\"><h3>难度系数</h3><p><b>简单 0.68 · 普通 1.00 · 困难 1.28</b></p><p>三档难度均使用逐图压力校准，保证各关通关率落在目标上限内。</p></article><article class=\"intel-entry\"><h3>2.5D范围</h3><p><b>横向半径 = 实际范围</b></p><p>纵向半径 = 实际范围 × 0.62；升级射程每级约增加8%–12%。</p></article><article class=\"intel-entry\"><h3>核心克制</h3><p>磁轨克重甲、电弧克群体、佣兵负责拦截、黑客克隐身和护盾、无人机克飞行单位。</p></article></div>" : "<div class=\"intel-grid\"><article class=\"intel-entry\" style=\"--accent:#ff6b49\"><h3>执法者·零号</h3><p><b>18,000血 · 速度10</b></p><p>盾牌、导弹舱、推进器各2200血；摧毁部件会改变护甲、基地伤害和速度。</p><p>部件伤害与主体伤害并行结算，不完全叠加进主体血量。</p></article><article class=\"intel-entry\" style=\"--accent:#ff3ea5\"><h3>夏娃-9</h3><p><b>三阶段总血量24,000</b></p><p>第一阶段在网络节点间转移；第二阶段载体速度12；核心阶段固定不移动。</p><p>第6关每5波出现Boss，零号与夏娃-9交替。</p></article></div>" : "<div class=\"intel-formula\">速度单位：标准路线单位 / 秒，不绑定屏幕像素。</div><div class=\"intel-grid\">" + _0x34836a.map(_0x5cca31 => "<article class=\"intel-entry\" style=\"--accent:#ff8ac5\"><img class=\"intel-portrait\" src=\"" + _0x5cca31[5] + "\" alt=\"\"><h3>" + _0x5cca31[0] + "</h3><p><b>血量 " + _0x5cca31[1] + " · 速度 " + _0x5cca31[2] + "</b></p><p>通关时间 " + _0x5cca31[3] + "</p><p>" + _0x5cca31[4] + "</p></article>").join("") + "</div>" : "<div class=\"intel-formula\">标准路线长度：1000 单位 · 建造费用：磁轨130 / 电弧110 / 佣兵100 / 黑客115 / 无人机135</div><div class=\"intel-grid\">" + _0x40511d.map(_0xf4d3d0 => "<article class=\"intel-entry\" style=\"--accent:" + _0xf4d3d0[1] + "\"><h3>" + _0xf4d3d0[0] + "</h3><p><b>" + _0xf4d3d0[2] + "</b></p><p>" + _0xf4d3d0[3] + "</p><p>" + _0xf4d3d0[4] + "</p><p>" + _0xf4d3d0[5] + "</p></article>").join("") + "</div>" : "<div class=\"intel-formula\">作战流程：选择关卡与难度 → 部署塔楼 → 发动波次 → 阻止敌军进入基地</div><div class=\"intel-grid\"><article class=\"intel-entry\" style=\"--accent:#20f4e6\"><h3>01 // 部署塔楼</h3><p><b>点击或轻触发光塔位</b></p><p>从弹出的五种塔楼中选择并建造；金币不足或塔位已有建筑时无法部署。</p></article><article class=\"intel-entry\" style=\"--accent:#ffd23f\"><h3>02 // 管理塔楼</h3><p><b>电脑右键 · 触屏长按0.55秒</b></p><p>打开升级与拆除菜单；键盘可使用菜单键或 Shift + F10。拆除只返还部分已投入金币。</p></article><article class=\"intel-entry\" style=\"--accent:#c99245\"><h3>03 // 佣兵集结</h3><p><b>管理佣兵站 → 选择“集结点”</b></p><p>射程显示后，在范围内点击道路附近的位置。两名佣兵会围绕集结点拦截地面敌人。</p></article><article class=\"intel-entry\" style=\"--accent:#ff3ea5\"><h3>04 // 控制波次</h3><p><b>点击“发动波次”开始进攻</b></p><p>波次结束后有12秒整备时间；提前发动下一波可按剩余时间获得5–25G奖励。</p></article><article class=\"intel-entry\" style=\"--accent:#34c9ff\"><h3>05 // 战斗倍速</h3><p><b>波次面板选择 1× / 2× / 3×</b></p><p>敌军移动、出怪、塔楼攻击、状态持续时间和整备倒计时会同步加速，倍速选择自动保存。</p></article><article class=\"intel-entry\" style=\"--accent:#79ff9e\"><h3>06 // 战役推进</h3><p><b>主界面选择地图与难度</b></p><p>六张地图依次解锁，必须通关当前关卡才能进入下一关。塔楼成长也在主界面配置。</p></article><article class=\"intel-entry\" style=\"--accent:#ff6b49\"><h3>07 // 基地防御</h3><p><b>初始城防血量：10</b></p><p>敌军从上方入口进入并向下方基地推进；每漏过一名普通敌军扣除1点血量，血量归零则任务失败。</p></article><article class=\"intel-entry\"><h3>快捷操作</h3><p><b>Esc：关闭当前弹窗</b></p><p>可关闭操作说明、塔楼选择和塔楼管理界面；所有主要操作均支持鼠标或触屏。</p></article></div>";
    })(_0x4cc6a7);
  }
  new MutationObserver(() => {
    const _0x502d6e = !towerActions.hidden && selectedTower;
    _0x4a6bc6.hidden = !_0x502d6e || selectedTower.dataset.type !== "street-mercenary";
    if (_0x502d6e) {
      _0x419688(selectedTower);
    } else {
      _0x18bc6f.range.hidden = true;
    }
  }).observe(towerActions, {
    attributes: true,
    attributeFilter: ["hidden"]
  });
  _0x4a6bc6.addEventListener("click", () => {
    if (selectedTower && selectedTower.dataset.type === "street-mercenary") {
      _0x3b5fc8 = selectedTower;
      closeTowerActions();
      _0x18bc6f.scene.classList.add("rally-mode");
      _0x419688(_0x3b5fc8);
      _0x14f95b("集结点部署模式");
    }
  });
  board.addEventListener("click", _0x34e82d => {
    if (!_0x3b5fc8) {
      return;
    }
    _0x34e82d.preventDefault();
    _0x34e82d.stopImmediatePropagation();
    const _0x22052f = board.getBoundingClientRect();
    const _0x8613af = {
      x: (_0x34e82d.clientX - _0x22052f.left) / _0x22052f.width * 1000,
      y: (_0x34e82d.clientY - _0x22052f.top) / _0x22052f.height * 1000
    };
    const _0x35bc81 = _0x3f0ab1["street-mercenary"];
    const _0x2b9a99 = Number(_0x3b5fc8.dataset.level);
    const _0x5460df = _0x1b0355(_0x3b5fc8, _0x35bc81, _0x2b9a99);
    if (_0x2bc49d(_0x4d8a47(_0x3b5fc8), _0x8613af) > _0x5460df) {
      _0x14f95b("超出集结范围");
    } else {
      _0x3b5fc8.dataset.rallyX = String(_0x8613af.x);
      _0x3b5fc8.dataset.rallyY = String(_0x8613af.y);
      _0x26f0b3(_0x3b5fc8, _0x5460df);
      _0x3b5fc8 = null;
      _0x18bc6f.scene.classList.remove("rally-mode");
      _0x18bc6f.range.hidden = true;
      _0x29106d();
      saveGame();
    }
  }, true);
  window.balanceRuntime = {
    mapCoefficients: _0x4c1e93,
    lateMapBonuses: _0x1bcd4e,
    startingCoins: [700, 725, 750, 850, 1100, 1500],
    rewardScales: _0x1e8c62,
    difficultyCoefficients: _0x8c8ac0,
    difficultyMapPressure: _0x59ea61,
    hardMapPressure: _0x17d348,
    nextWaveEconomy: _0x1a366d,
    towerCombat: _0x3f0ab1,
    enemyTypes: _0x5e5dc3,
    bossTypes: _0x390d80,
    campaignEnemyRosters: _0x7cafe8,
    towerEconomy: Object.fromEntries(towerTypes.map(_0x4c167c => [_0x4c167c.id, {
      name: _0x4c167c.name,
      cost: _0x4c167c.cost,
      accent: _0x4c167c.accent
    }])),
    buildWavePlan: _0x5a1326
  };
  Object.assign(window.neonDemoGame ||= {}, {
    battleSnapshot: () => ({
      wave: _0x24384f,
      mapIndex: _0x2eb79b,
      difficulty: _0x176fb8,
      gameSpeed: _0x53ec67,
      waveActive: _0xecb8c0,
      nextWaveCountdown: _0x3ebe3b,
      complete: _0x2d1f6a(),
      failed: _0x161f10 || health <= 0,
      enemyCount: _0x1c1303.length + _0x1bf5be.length
    }),
    startWave: () => !_0xecb8c0 && !(health <= 0) && !_0x2d1f6a() && (_0xedb0cb({
      rewardEarly: true
    }), true),
    setDifficulty: _0x5ad0bb => !_0xecb8c0 && !!_0x8c8ac0[_0x5ad0bb] && (_0x176fb8 = _0x5ad0bb, _0x18bc6f.difficulty.value = _0x5ad0bb, saveGame(), true),
    setSpeed: _0xd44468 => _0x63dadc(_0xd44468),
    restart: _0x5d32b4 => _0x1bec97(_0x5d32b4)
  });
  window.restartCampaignBattle = _0x1bec97;
  _0x18bc6f.start.addEventListener("click", () => _0xedb0cb({
    rewardEarly: true
  }));
  _0x18bc6f.speedButtons.forEach(_0x534efc => {
    _0x534efc.addEventListener("click", () => _0x63dadc(_0x534efc.dataset.gameSpeed));
  });
  _0x18bc6f.map.addEventListener("change", () => {
    const _0x3a9ef7 = Number(_0x18bc6f.map.value);
    if (!window.isCampaignMapUnlocked?.(_0x3a9ef7)) {
      _0x18bc6f.map.value = String(_0x2eb79b);
      _0x14f95b("第 " + (_0x3a9ef7 + 1) + " 关尚未解锁", 2200);
      return;
    }
    if (_0x3a9ef7 !== _0x2eb79b) {
      _0x2eb79b = _0x3a9ef7;
      _0x24384f = 1;
      _0x161f10 = false;
      _0x3ebe3b = 0;
      _0xf1684a = -1;
      window.resetCampaignMission?.(_0x2eb79b);
      _0x5f0af5(_0x2eb79b);
      window.selectCommandCenterMap?.(_0x2eb79b);
      _0x18bc6f.start.innerHTML = "<span aria-hidden=\"true\">▶</span> 发动波次";
      _0x14f95b("第 " + (_0x2eb79b + 1) + " 关 · " + window.mapLevels[_0x2eb79b].name + " · " + _0x56ffcd() + " 波", 2200);
      updatePlayerStatus();
      _0x8e2c84();
      saveGame();
    }
  });
  _0x18bc6f.difficulty.addEventListener("change", () => {
    _0x176fb8 = _0x18bc6f.difficulty.value;
    saveGame();
  });
  resetButton.addEventListener("click", function () {
    _0x1c1303.forEach(_0x1e9c8c => _0x1e9c8c.element.remove());
    _0x1c1303 = [];
    _0x1bf5be = [];
    _0xecb8c0 = false;
    _0x3ebe3b = 0;
    _0xf1684a = -1;
    _0x161f10 = false;
    _0x24384f = 1;
    _0x2eb79b = 0;
    _0x176fb8 = "normal";
    _0x18bc6f.map.value = "0";
    _0x18bc6f.difficulty.value = "normal";
    _0x5f0af5(0);
    window.selectCommandCenterMap?.(0);
    _0x18bc6f.rallies.replaceChildren();
    _0x18bc6f.effects.replaceChildren();
    _0x18bc6f.range.hidden = true;
    _0x18bc6f.start.innerHTML = "<span aria-hidden=\"true\">▶</span> 发动波次";
    _0x8e2c84();
    saveGame();
  });
  _0x18bc6f.helpButton.addEventListener("click", () => {
    _0x18bc6f.intel.hidden = false;
    _0x1cfd74("controls");
  });
  _0x18bc6f.intelButton.addEventListener("click", () => {
    _0x18bc6f.intel.hidden = false;
    _0x1cfd74("towers");
  });
  _0x18bc6f.intelClose.addEventListener("click", () => {
    _0x18bc6f.intel.hidden = true;
  });
  document.querySelectorAll("[data-intel-tab]").forEach(_0x10606d => {
    _0x10606d.addEventListener("click", () => {
      _0x1cfd74(_0x10606d.dataset.intelTab);
    });
  });
  document.addEventListener("keydown", _0x4a23ef => {
    if (_0x4a23ef.key === "Escape") {
      _0x18bc6f.intel.hidden = true;
    }
  });
  requestAnimationFrame(function _0x54dc77(_0x356797) {
    const _0x5cf7c3 = Math.min(0.05, Math.max(0, (_0x356797 - _0x19f2d0) / 1000));
    _0x19f2d0 = _0x356797;
    const _0x4610d8 = _0x5cf7c3 * _0x53ec67;
    _0x46d76f += _0x4610d8 * 1000;
    (function (_0x4da699) {
      if (_0xecb8c0 && _0x1bf5be.length) {
        for (_0x434645 -= _0x4da699; _0x434645 <= 0 && _0x1bf5be.length;) {
          const _0x9bd65c = _0x1bf5be.shift();
          _0x5b1dce(_0x9bd65c.type, _0x9bd65c.boss, _0x9bd65c.lane, _0x9bd65c);
          _0x434645 += _0x9bd65c.delay;
        }
      }
    })(_0x4610d8);
    _0x1c1303.forEach(_0x58c414 => function (_0x31752d, _0x90842a) {
      if (!_0x31752d.type.phase) {
        return;
      }
      const _0x5094a3 = _0x31752d.phased;
      _0x31752d.phased = (_0x90842a - _0x31752d.spawnTime) % 5000 < 1000 && _0x90842a >= _0x31752d.revealedUntil;
      if (!_0x5094a3 && _0x31752d.phased) {
        _0xc0df42("ninja", "phase", {
          priority: 2,
          chance: 0.65
        });
      }
    }(_0x58c414, _0x46d76f));
    (function (_0x344b99, _0x473fe7) {
      _0x1c1303.forEach(_0x5f3d38 => {
        _0x5f3d38.blocked = false;
      });
      towerLayer.querySelectorAll(".tower:not([hidden])").forEach(_0x143383 => _0x27bce2(_0x143383, _0x344b99, _0x473fe7));
      _0x29106d();
    })(_0x4610d8, _0x46d76f);
    _0x4f0989(_0x4610d8, _0x46d76f);
    if (selectedTower && !towerActions.hidden) {
      _0x419688(selectedTower);
    }
    if (!!_0xecb8c0 && !_0x1bf5be.length && !_0x1c1303.length) {
      (function () {
        const _0x23ad02 = _0x202257(45 + _0x24384f * 10);
        const _0x3013c5 = _0x24384f >= _0x56ffcd();
        coins += _0x23ad02;
        window.awardResearchPoints?.(1);
        _0xecb8c0 = false;
        if (_0x3013c5) {
          _0x3ebe3b = 0;
          const _0xd28442 = window.completeCampaignLevel?.(_0x2eb79b);
          _0x24384f = _0x56ffcd() + 1;
          _0x14f95b((_0xd28442?.newlyUnlocked ? "第 " + (_0x2eb79b + 1) + " 关完成 · 第 " + (_0xd28442.unlocked + 1) + " 关已解锁" : "第 " + (_0x2eb79b + 1) + " 关完成") + " · " + _0x23ad02 + " G", 4200);
          _0xc0df42("lan", "victory", {
            priority: 5,
            force: true,
            cooldown: 0
          });
          _0x18bc6f.start.textContent = "关卡已完成";
          window.showLevelComplete?.({
            victory: true,
            mapIndex: _0x2eb79b,
            mapName: window.mapLevels?.[_0x2eb79b]?.name,
            waveCount: _0x56ffcd(),
            health: health,
            reward: _0x23ad02,
            newlyUnlocked: Boolean(_0xd28442?.newlyUnlocked)
          });
        } else {
          _0x24384f += 1;
          _0x3ebe3b = _0x1a366d.COUNTDOWN_SECONDS;
          _0xf1684a = -1;
          _0x14f95b("波次完成 · " + _0x23ad02 + " G · 下一波 " + _0x1a366d.COUNTDOWN_SECONDS + " 秒后抵达", 3200);
        }
        updateCounter();
        updatePlayerStatus();
        _0x8e2c84();
        saveGame();
      })();
    }
    (function (_0x19fe71) {
      if (_0xecb8c0 || _0x3ebe3b <= 0 || health <= 0 || _0x2d1f6a()) {
        return;
      }
      _0x3ebe3b = Math.max(0, _0x3ebe3b - _0x19fe71);
      const _0x2c6b7e = Math.ceil(_0x3ebe3b);
      if (_0x2c6b7e !== _0xf1684a) {
        _0xf1684a = _0x2c6b7e;
        _0x8e2c84();
      }
      if (_0x3ebe3b <= 0) {
        _0xedb0cb({
          rewardEarly: false
        });
      }
    })(_0x4610d8);
    requestAnimationFrame(_0x54dc77);
  });
})();