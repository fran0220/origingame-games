(() => {
  'use strict';

  const _0x52f645 = document.getElementById("gameCanvas");
  const _0x657111 = _0x52f645.getContext("2d");
  const _0x30120e = _0x214cd6 => document.getElementById(_0x214cd6);
  const _0x213ff7 = {
    gold: _0x30120e("gold"),
    lives: _0x30120e("lives"),
    wave: _0x30120e("wave"),
    score: _0x30120e("score"),
    waveButton: _0x30120e("waveButton"),
    speedButton: _0x30120e("speedButton"),
    pauseButton: _0x30120e("pauseButton"),
    towerCards: _0x30120e("towerCards"),
    inspectName: _0x30120e("inspectName"),
    inspectText: _0x30120e("inspectText"),
    inspectStats: _0x30120e("inspectStats"),
    inspectActions: _0x30120e("inspectActions"),
    loreText: _0x30120e("loreText"),
    intro: _0x30120e("intro"),
    startButton: _0x30120e("startButton"),
    toast: _0x30120e("toast"),
    endModal: _0x30120e("endModal"),
    endTitle: _0x30120e("endTitle"),
    endText: _0x30120e("endText"),
    endSeal: _0x30120e("endSeal"),
    finalScore: _0x30120e("finalScore"),
    restartButton: _0x30120e("restartButton")
  };
  const _0x4baeb8 = {
    crossbow: {
      name: "连弩车",
      glyph: "弩",
      cost: 60,
      range: 142,
      damage: 17,
      rate: 0.72,
      color: "#7d3428",
      desc: "远射劲弩，射程长，擅长点杀轻甲。",
      history: "战国弩机多为青铜铸造，机械结构让士卒更容易保持稳定射击。"
    },
    strategist: {
      name: "稷下策士",
      glyph: "策",
      cost: 75,
      range: 126,
      damage: 6,
      rate: 1.15,
      slow: 0.55,
      color: "#405e64",
      desc: "以谋乱阵，使敌军减速并持续受创。",
      history: "稷下学宫位于齐国临淄，是战国时期重要的学术交流中心。"
    },
    machine: {
      name: "墨家机关",
      glyph: "墨",
      cost: 95,
      range: 116,
      damage: 29,
      rate: 1.48,
      splash: 56,
      color: "#4e5946",
      desc: "投掷机关石，对密集敌军造成范围伤害。",
      history: "《墨子》记载了大量城防器械与守城方法，体现墨家的工程实践。"
    },
    beacon: {
      name: "烽火台",
      glyph: "烽",
      cost: 55,
      range: 108,
      damage: 0,
      rate: 0,
      aura: 0.22,
      color: "#a45a2b",
      desc: "号令相闻，提升附近军械的攻击速度。",
      history: "烽燧以烟火传递军情，是古代边防通信体系的重要节点。"
    }
  };
  const _0x28f41a = {
    infantry: {
      name: "戈兵",
      hp: 68,
      speed: 46,
      reward: 13,
      armor: 0,
      color: "#7c4b38",
      size: 11
    },
    cavalry: {
      name: "赵骑",
      hp: 58,
      speed: 75,
      reward: 15,
      armor: 0,
      color: "#946b35",
      size: 11
    },
    shield: {
      name: "魏武卒",
      hp: 145,
      speed: 37,
      reward: 20,
      armor: 0.25,
      color: "#485f58",
      size: 13
    },
    elite: {
      name: "合纵锐士",
      hp: 300,
      speed: 31,
      reward: 32,
      armor: 0.18,
      color: "#562f3c",
      size: 15
    }
  };
  const _0x4237f2 = [{
    groups: [["infantry", 8, 0.72]],
    lore: "函谷关位于崤山至潼关的要道，战国时是秦国抵御东方诸侯的重要门户。"
  }, {
    groups: [["infantry", 7, 0.62], ["cavalry", 4, 0.82]],
    lore: "赵武灵王推行“胡服骑射”，增强了赵国骑兵的机动与作战能力。"
  }, {
    groups: [["shield", 6, 0.9], ["infantry", 8, 0.55]],
    lore: "魏武卒是吴起训练的精锐步兵，以严格选拔和重装闻名。"
  }, {
    groups: [["cavalry", 10, 0.5], ["shield", 5, 0.82]],
    lore: "“合纵”主张东方诸侯联合抗秦；“连横”则主张分别与秦结盟。"
  }, {
    groups: [["infantry", 10, 0.42], ["shield", 8, 0.7], ["elite", 2, 1.1]],
    lore: "墨家不仅主张“兼爱”“非攻”，也十分重视守城技术与工程知识。"
  }, {
    groups: [["cavalry", 14, 0.38], ["elite", 5, 0.9]],
    lore: "战国时期冶铁、弩机与车骑技术发展，战争规模和组织能力显著提升。"
  }, {
    groups: [["shield", 10, 0.5], ["cavalry", 10, 0.38], ["elite", 8, 0.72]],
    lore: "公元前 318 年，楚怀王为纵长的合纵攻秦未能突破函谷关。"
  }];
  const _0x4b74ad = [{
    x: 972,
    y: 100
  }, {
    x: 800,
    y: 100
  }, {
    x: 800,
    y: 250
  }, {
    x: 620,
    y: 250
  }, {
    x: 620,
    y: 440
  }, {
    x: 390,
    y: 440
  }, {
    x: 390,
    y: 215
  }, {
    x: 190,
    y: 215
  }, {
    x: 190,
    y: 480
  }, {
    x: -20,
    y: 480
  }];
  const _0x626b21 = [{
    x: 875,
    y: 195
  }, {
    x: 710,
    y: 120
  }, {
    x: 710,
    y: 332
  }, {
    x: 540,
    y: 350
  }, {
    x: 520,
    y: 520
  }, {
    x: 310,
    y: 350
  }, {
    x: 292,
    y: 125
  }, {
    x: 105,
    y: 300
  }, {
    x: 105,
    y: 545
  }, {
    x: 890,
    y: 340
  }, {
    x: 475,
    y: 150
  }, {
    x: 280,
    y: 520
  }];
  const _0x55b9aa = {
    gold: 180,
    lives: 10,
    wave: 0,
    score: 0,
    selectedType: "crossbow",
    selectedTower: null,
    towers: [],
    enemies: [],
    projectiles: [],
    particles: [],
    spawnQueue: [],
    spawnTimer: 0,
    waveActive: false,
    paused: false,
    speed: 1,
    started: false,
    ended: false,
    time: 0
  };
  let _0x37b4f2 = null;
  let _0x13b3a8 = null;
  let _0x11ac9e = performance.now();
  function _0x42b92d(_0x273b4c) {
    try {
      _0x37b4f2 ||= new (window.AudioContext || window.webkitAudioContext)();
      const _0x5211a5 = _0x37b4f2.createOscillator();
      const _0x142d4d = _0x37b4f2.createGain();
      _0x5211a5.connect(_0x142d4d);
      _0x142d4d.connect(_0x37b4f2.destination);
      const _0x15d29e = _0x37b4f2.currentTime;
      _0x5211a5.type = _0x273b4c === "hit" ? "triangle" : "sine";
      _0x5211a5.frequency.setValueAtTime(_0x273b4c === "gong" ? 130 : _0x273b4c === "build" ? 360 : 180, _0x15d29e);
      _0x5211a5.frequency.exponentialRampToValueAtTime(_0x273b4c === "gong" ? 65 : 90, _0x15d29e + 0.12);
      _0x142d4d.gain.setValueAtTime(_0x273b4c === "gong" ? 0.11 : 0.035, _0x15d29e);
      _0x142d4d.gain.exponentialRampToValueAtTime(0.001, _0x15d29e + (_0x273b4c === "gong" ? 0.45 : 0.12));
      _0x5211a5.start(_0x15d29e);
      _0x5211a5.stop(_0x15d29e + (_0x273b4c === "gong" ? 0.46 : 0.13));
    } catch (_0x2179fb) {}
  }
  function _0x5e2832(_0x267378) {
    _0x213ff7.toast.textContent = _0x267378;
    _0x213ff7.toast.classList.add("show");
    clearTimeout(_0x13b3a8);
    _0x13b3a8 = setTimeout(() => _0x213ff7.toast.classList.remove("show"), 1900);
  }
  function _0x48d001() {
    _0x213ff7.gold.textContent = _0x55b9aa.gold;
    _0x213ff7.lives.textContent = _0x55b9aa.lives;
    _0x213ff7.wave.textContent = _0x55b9aa.wave;
    _0x213ff7.score.textContent = _0x55b9aa.score;
    _0x213ff7.waveButton.disabled = _0x55b9aa.waveActive || _0x55b9aa.wave >= _0x4237f2.length || _0x55b9aa.ended || !_0x55b9aa.started;
    _0x213ff7.waveButton.textContent = _0x55b9aa.waveActive ? "交战中" : _0x55b9aa.wave >= _0x4237f2.length ? "战事已毕" : "击鼓迎敌";
    _0x213ff7.pauseButton.textContent = _0x55b9aa.paused ? "继续" : "暂停";
    _0x213ff7.speedButton.textContent = _0x55b9aa.speed + "×";
    document.querySelectorAll(".tower-card").forEach(_0xb7242 => {
      _0xb7242.classList.toggle("selected", _0xb7242.dataset.type === _0x55b9aa.selectedType);
      _0xb7242.disabled = _0x55b9aa.gold < _0x4baeb8[_0xb7242.dataset.type].cost;
    });
    if (_0x55b9aa.selectedTower && _0x55b9aa.towers.includes(_0x55b9aa.selectedTower)) {
      _0x459f78(_0x55b9aa.selectedTower);
    }
  }
  function _0x3b9948(_0x5180ae) {
    const _0x5a4f4e = _0x4baeb8[_0x5180ae];
    _0x213ff7.inspectName.textContent = _0x5a4f4e.name;
    _0x213ff7.inspectText.textContent = _0x5a4f4e.history;
    _0x213ff7.inspectStats.innerHTML = _0x5a4f4e.aura ? "<span>号令范围 " + _0x5a4f4e.range + "</span><span>攻速 +" + Math.round(_0x5a4f4e.aura * 100) + "%</span>" : "<span>威力 " + _0x5a4f4e.damage + "</span><span>射程 " + _0x5a4f4e.range + "</span><span>间隔 " + _0x5a4f4e.rate.toFixed(1) + "秒</span>";
    _0x213ff7.inspectActions.innerHTML = "";
  }
  function _0x459f78(_0x27c80f) {
    const _0x583d5f = _0x4baeb8[_0x27c80f.type];
    const _0xb7a746 = Math.round(_0x583d5f.cost * (0.62 + _0x27c80f.level * 0.38));
    _0x213ff7.inspectName.textContent = _0x583d5f.name + " · " + ["初建", "精锐", "国士"][_0x27c80f.level - 1];
    _0x213ff7.inspectText.textContent = _0x583d5f.desc;
    _0x213ff7.inspectStats.innerHTML = _0x583d5f.aura ? "<span>等级 " + _0x27c80f.level + "</span><span>号令 +" + Math.round((_0x583d5f.aura + (_0x27c80f.level - 1) * 0.06) * 100) + "%</span>" : "<span>等级 " + _0x27c80f.level + "</span><span>威力 " + Math.round(_0x583d5f.damage * (1 + (_0x27c80f.level - 1) * 0.45)) + "</span><span>射程 " + Math.round(_0x583d5f.range + (_0x27c80f.level - 1) * 11) + "</span>";
    _0x213ff7.inspectActions.innerHTML = "";
    if (_0x27c80f.level < 3) {
      const _0x1231bd = document.createElement("button");
      _0x1231bd.textContent = "整备升级 · " + _0xb7a746;
      _0x1231bd.disabled = _0x55b9aa.gold < _0xb7a746;
      _0x1231bd.addEventListener("click", () => function (_0x155180) {
        const _0x2da924 = _0x4baeb8[_0x155180.type];
        const _0x5f5b7a = Math.round(_0x2da924.cost * (0.62 + _0x155180.level * 0.38));
        if (_0x155180.level >= 3 || _0x55b9aa.gold < _0x5f5b7a) {
          return;
        }
        _0x55b9aa.gold -= _0x5f5b7a;
        _0x155180.spent += _0x5f5b7a;
        _0x155180.level++;
        _0x42b92d("build");
        _0x40a296(_0x155180.x, _0x155180.y, "#d9bc72", 16);
        _0x459f78(_0x155180);
        _0x48d001();
      }(_0x27c80f));
      _0x213ff7.inspectActions.appendChild(_0x1231bd);
    }
    const _0x134a7f = document.createElement("button");
    _0x134a7f.textContent = "撤防 · +" + Math.round(_0x27c80f.spent * 0.65);
    _0x134a7f.addEventListener("click", () => function (_0x1274a3) {
      _0x55b9aa.gold += Math.round(_0x1274a3.spent * 0.65);
      _0x55b9aa.towers = _0x55b9aa.towers.filter(_0x281cce => _0x281cce !== _0x1274a3);
      _0x55b9aa.selectedTower = null;
      _0x3b9948(_0x55b9aa.selectedType);
      _0x48d001();
    }(_0x27c80f));
    _0x213ff7.inspectActions.appendChild(_0x134a7f);
  }
  function _0x4ec8e8() {
    if (_0x55b9aa.waveActive || _0x55b9aa.wave >= _0x4237f2.length || !_0x55b9aa.started) {
      return;
    }
    const _0x47496a = _0x4237f2[_0x55b9aa.wave];
    _0x55b9aa.wave++;
    _0x55b9aa.waveActive = true;
    _0x55b9aa.spawnQueue = [];
    _0x47496a.groups.forEach(([_0x56caee, _0x45fa00, _0x3a9833], _0x46722b) => {
      for (let _0x385cbf = 0; _0x385cbf < _0x45fa00; _0x385cbf++) {
        _0x55b9aa.spawnQueue.push({
          type: _0x56caee,
          delay: _0x46722b === 0 && _0x385cbf === 0 ? 0.15 : _0x3a9833
        });
      }
      if (_0x46722b < _0x47496a.groups.length - 1) {
        _0x55b9aa.spawnQueue.push({
          wait: true,
          delay: 1.25
        });
      }
    });
    _0x55b9aa.spawnTimer = 0;
    _0x213ff7.loreText.textContent = _0x47496a.lore;
    _0x42b92d("gong");
    _0x5e2832("第 " + _0x55b9aa.wave + " 轮 · 敌军来袭");
    _0x48d001();
  }
  function _0x273610(_0x212bbb, _0x36d8a1, _0x320764) {
    if (_0x212bbb.dead) {
      return;
    }
    let _0x2df61c = _0x36d8a1 * (1 - _0x28f41a[_0x212bbb.type].armor);
    if (_0x320764 === "crossbow" && _0x212bbb.type === "shield") {
      _0x2df61c *= 0.72;
    }
    _0x212bbb.hp -= _0x2df61c;
    if (_0x320764 === "strategist") {
      _0x212bbb.slowUntil = _0x55b9aa.time + 1.85;
      _0x212bbb.slowFactor = _0x4baeb8.strategist.slow;
    }
    _0x40a296(_0x212bbb.x, _0x212bbb.y, _0x320764 === "strategist" ? "#8fb1ac" : "#bba06b", 3);
    if (_0x212bbb.hp <= 0) {
      _0x212bbb.dead = true;
      const _0x470916 = _0x28f41a[_0x212bbb.type].reward;
      _0x55b9aa.gold += _0x470916;
      _0x55b9aa.score += _0x470916 * 10 + _0x55b9aa.wave * 5;
      _0x40a296(_0x212bbb.x, _0x212bbb.y, "#a43b2d", 10);
      _0x48d001();
    }
  }
  function _0x5ee9ba(_0x43d202) {
    _0x55b9aa.time += _0x43d202;
    if (_0x55b9aa.waveActive && _0x55b9aa.spawnQueue.length && (_0x55b9aa.spawnTimer -= _0x43d202, _0x55b9aa.spawnTimer <= 0)) {
      const _0x4ae91e = _0x55b9aa.spawnQueue.shift();
      if (!_0x4ae91e.wait) {
        (function (_0x277aee) {
          const _0x3a514d = _0x28f41a[_0x277aee];
          const _0x1a2822 = 1 + (_0x55b9aa.wave - 1) * 0.13;
          _0x55b9aa.enemies.push({
            type: _0x277aee,
            x: _0x4b74ad[0].x,
            y: _0x4b74ad[0].y,
            pathIndex: 1,
            hp: _0x3a514d.hp * _0x1a2822,
            maxHp: _0x3a514d.hp * _0x1a2822,
            speed: _0x3a514d.speed * (1 + (_0x55b9aa.wave - 1) * 0.018),
            slowUntil: 0,
            slowFactor: 1,
            dead: false,
            angle: Math.PI
          });
        })(_0x4ae91e.type);
      }
      _0x55b9aa.spawnTimer = _0x4ae91e.delay;
    }
    _0x55b9aa.enemies.forEach(_0x5c175d => {
      if (_0x5c175d.dead) {
        return;
      }
      const _0x59527e = _0x4b74ad[_0x5c175d.pathIndex];
      const _0x4385bf = _0x59527e.x - _0x5c175d.x;
      const _0xb97fd1 = _0x59527e.y - _0x5c175d.y;
      const _0x4a9b52 = Math.hypot(_0x4385bf, _0xb97fd1);
      const _0x4c0fcf = _0x5c175d.slowUntil > _0x55b9aa.time ? _0x5c175d.slowFactor : 1;
      const _0x5254d8 = _0x5c175d.speed * _0x4c0fcf * _0x43d202;
      _0x5c175d.angle = Math.atan2(_0xb97fd1, _0x4385bf);
      if (_0x4a9b52 <= _0x5254d8) {
        _0x5c175d.x = _0x59527e.x;
        _0x5c175d.y = _0x59527e.y;
        _0x5c175d.pathIndex++;
        if (_0x5c175d.pathIndex >= _0x4b74ad.length) {
          _0x5c175d.dead = true;
          _0x55b9aa.lives--;
          _0x42b92d("hit");
          _0x48d001();
          if (_0x55b9aa.lives <= 0) {
            _0x1ef310(false);
          }
        }
      } else {
        _0x5c175d.x += _0x4385bf / _0x4a9b52 * _0x5254d8;
        _0x5c175d.y += _0xb97fd1 / _0x4a9b52 * _0x5254d8;
      }
    });
    _0x55b9aa.towers.forEach(_0x2abff8 => {
      const _0x487f96 = _0x4baeb8[_0x2abff8.type];
      if (_0x487f96.aura) {
        return;
      }
      _0x2abff8.cooldown -= _0x43d202;
      if (_0x2abff8.cooldown > 0) {
        return;
      }
      const _0x4b2c4f = _0x487f96.range + (_0x2abff8.level - 1) * 11;
      const _0x3d8148 = _0x55b9aa.enemies.filter(_0x247119 => !_0x247119.dead && Math.hypot(_0x247119.x - _0x2abff8.x, _0x247119.y - _0x2abff8.y) <= _0x4b2c4f).sort((_0x3af86d, _0x4712c3) => _0x4712c3.pathIndex - _0x3af86d.pathIndex || _0x3af86d.hp - _0x4712c3.hp)[0];
      if (!_0x3d8148) {
        return;
      }
      let _0x986bee = 0;
      _0x55b9aa.towers.forEach(_0x42c74e => {
        if (_0x4baeb8[_0x42c74e.type].aura && Math.hypot(_0x42c74e.x - _0x2abff8.x, _0x42c74e.y - _0x2abff8.y) <= _0x4baeb8[_0x42c74e.type].range + (_0x42c74e.level - 1) * 8) {
          _0x986bee = Math.max(_0x986bee, _0x4baeb8[_0x42c74e.type].aura + (_0x42c74e.level - 1) * 0.06);
        }
      });
      (function (_0x6e4c74, _0x33a6c9) {
        const _0x3ec9c1 = _0x4baeb8[_0x6e4c74.type];
        const _0x41ce1c = _0x3ec9c1.damage * (1 + (_0x6e4c74.level - 1) * 0.45);
        _0x6e4c74.angle = Math.atan2(_0x33a6c9.y - _0x6e4c74.y, _0x33a6c9.x - _0x6e4c74.x);
        if (_0x6e4c74.type === "strategist") {
          _0x55b9aa.projectiles.push({
            x: _0x6e4c74.x,
            y: _0x6e4c74.y,
            target: _0x33a6c9,
            damage: _0x41ce1c,
            type: _0x6e4c74.type,
            speed: 230,
            color: "#91b3ae",
            size: 4
          });
        } else if (_0x6e4c74.type === "machine") {
          _0x55b9aa.projectiles.push({
            x: _0x6e4c74.x,
            y: _0x6e4c74.y,
            target: _0x33a6c9,
            tx: _0x33a6c9.x,
            ty: _0x33a6c9.y,
            damage: _0x41ce1c,
            type: _0x6e4c74.type,
            speed: 190,
            color: "#37332b",
            size: 7,
            splash: _0x3ec9c1.splash + (_0x6e4c74.level - 1) * 7
          });
        } else {
          _0x55b9aa.projectiles.push({
            x: _0x6e4c74.x,
            y: _0x6e4c74.y,
            target: _0x33a6c9,
            damage: _0x41ce1c,
            type: _0x6e4c74.type,
            speed: 390,
            color: "#3a2c20",
            size: 3
          });
        }
      })(_0x2abff8, _0x3d8148);
      _0x2abff8.cooldown = _0x487f96.rate / (1 + _0x986bee);
    });
    _0x55b9aa.projectiles.forEach(_0x55beb8 => {
      if (_0x55beb8.dead) {
        return;
      }
      if (_0x55beb8.type !== "machine" && (!_0x55beb8.target || _0x55beb8.target.dead)) {
        _0x55beb8.dead = true;
        return;
      }
      const _0x3cb53b = _0x55beb8.type === "machine" ? _0x55beb8.tx : _0x55beb8.target.x;
      const _0x4c050a = _0x55beb8.type === "machine" ? _0x55beb8.ty : _0x55beb8.target.y;
      const _0x2e1ae1 = _0x3cb53b - _0x55beb8.x;
      const _0x1834c7 = _0x4c050a - _0x55beb8.y;
      const _0x550945 = Math.hypot(_0x2e1ae1, _0x1834c7);
      const _0x314f28 = _0x55beb8.speed * _0x43d202;
      if (_0x550945 <= _0x314f28) {
        _0x55beb8.x = _0x3cb53b;
        _0x55beb8.y = _0x4c050a;
        _0x55beb8.dead = true;
        if (_0x55beb8.splash) {
          _0x55b9aa.enemies.forEach(_0x8ae812 => {
            if (!_0x8ae812.dead && Math.hypot(_0x8ae812.x - _0x3cb53b, _0x8ae812.y - _0x4c050a) <= _0x55beb8.splash) {
              _0x273610(_0x8ae812, _0x55beb8.damage, _0x55beb8.type);
            }
          });
        } else {
          _0x273610(_0x55beb8.target, _0x55beb8.damage, _0x55beb8.type);
        }
      } else {
        _0x55beb8.x += _0x2e1ae1 / _0x550945 * _0x314f28;
        _0x55beb8.y += _0x1834c7 / _0x550945 * _0x314f28;
      }
    });
    _0x55b9aa.particles.forEach(_0x410125 => {
      _0x410125.life -= _0x43d202;
      _0x410125.x += _0x410125.vx * _0x43d202;
      _0x410125.y += _0x410125.vy * _0x43d202;
      _0x410125.vy += _0x43d202 * 18;
    });
    _0x55b9aa.enemies = _0x55b9aa.enemies.filter(_0x2cd43f => !_0x2cd43f.dead);
    _0x55b9aa.projectiles = _0x55b9aa.projectiles.filter(_0x287133 => !_0x287133.dead);
    _0x55b9aa.particles = _0x55b9aa.particles.filter(_0x4c3144 => _0x4c3144.life > 0);
    _0x626b21.forEach(_0x17c09e => {
      if (_0x17c09e.tower && !_0x55b9aa.towers.includes(_0x17c09e.tower)) {
        _0x17c09e.tower = null;
      }
    });
    if (!!_0x55b9aa.waveActive && !_0x55b9aa.spawnQueue.length && !_0x55b9aa.enemies.length) {
      _0x55b9aa.waveActive = false;
      _0x55b9aa.gold += 24 + _0x55b9aa.wave * 4;
      _0x55b9aa.score += _0x55b9aa.wave * 100;
      _0x5e2832("第 " + _0x55b9aa.wave + " 轮守住 · 获得军粮");
      _0x48d001();
      if (_0x55b9aa.wave >= _0x4237f2.length) {
        _0x1ef310(true);
      }
    }
  }
  function _0x40a296(_0x135ae0, _0x27a6ab, _0x5609d6, _0x15b323) {
    for (let _0xdb8f5 = 0; _0xdb8f5 < _0x15b323; _0xdb8f5++) {
      _0x55b9aa.particles.push({
        x: _0x135ae0,
        y: _0x27a6ab,
        color: _0x5609d6,
        vx: (Math.random() - 0.5) * 85,
        vy: (Math.random() - 0.8) * 75,
        life: 0.35 + Math.random() * 0.4,
        maxLife: 0.75,
        size: 1 + Math.random() * 2.5
      });
    }
  }
  function _0x3168ba(_0xa32df5) {
    const _0x31c633 = _0x4baeb8[_0xa32df5.type];
    if (_0x55b9aa.selectedTower === _0xa32df5) {
      _0x657111.fillStyle = "rgba(159,47,36,.10)";
      _0x657111.strokeStyle = "rgba(159,47,36,.48)";
      _0x657111.lineWidth = 1;
      _0x657111.beginPath();
      _0x657111.arc(_0xa32df5.x, _0xa32df5.y, _0x31c633.range + (_0xa32df5.level - 1) * 11, 0, Math.PI * 2);
      _0x657111.fill();
      _0x657111.stroke();
    }
    if (_0x31c633.aura) {
      _0x657111.strokeStyle = "rgba(164,90,43,.16)";
      _0x657111.beginPath();
      _0x657111.arc(_0xa32df5.x, _0xa32df5.y, _0x31c633.range + (_0xa32df5.level - 1) * 8, 0, Math.PI * 2);
      _0x657111.stroke();
    }
    _0x657111.save();
    _0x657111.translate(_0xa32df5.x, _0xa32df5.y);
    _0x657111.fillStyle = "rgba(38,31,22,.25)";
    _0x657111.beginPath();
    _0x657111.ellipse(3, 11, 21, 9, 0, 0, Math.PI * 2);
    _0x657111.fill();
    _0x657111.fillStyle = "#6d5840";
    _0x657111.beginPath();
    _0x657111.moveTo(-17, 12);
    _0x657111.lineTo(-13, -10);
    _0x657111.lineTo(13, -10);
    _0x657111.lineTo(17, 12);
    _0x657111.closePath();
    _0x657111.fill();
    _0x657111.strokeStyle = "#2e281f";
    _0x657111.lineWidth = 2;
    _0x657111.stroke();
    if (_0xa32df5.type === "beacon") {
      _0x657111.fillStyle = _0x31c633.color;
      _0x657111.fillRect(-12, -18, 24, 11);
      _0x657111.fillStyle = "#d68739";
      _0x657111.beginPath();
      _0x657111.moveTo(-6, -19);
      _0x657111.quadraticCurveTo(-10, -32, 0, -39);
      _0x657111.quadraticCurveTo(13, -29, 5, -18);
      _0x657111.fill();
    } else {
      _0x657111.rotate(_0xa32df5.angle);
      _0x657111.strokeStyle = _0x31c633.color;
      _0x657111.lineWidth = 5;
      _0x657111.beginPath();
      _0x657111.moveTo(-5, -4);
      _0x657111.lineTo(21, -4);
      _0x657111.stroke();
      if (_0xa32df5.type === "crossbow") {
        _0x657111.lineWidth = 2;
        _0x657111.beginPath();
        _0x657111.moveTo(5, -15);
        _0x657111.quadraticCurveTo(18, -4, 5, 7);
        _0x657111.stroke();
      }
      if (_0xa32df5.type === "machine") {
        _0x657111.fillStyle = "#332d25";
        _0x657111.beginPath();
        _0x657111.arc(16, -4, 6, 0, Math.PI * 2);
        _0x657111.fill();
      }
    }
    _0x657111.restore();
    _0x657111.fillStyle = _0x31c633.color;
    _0x657111.strokeStyle = "#d8c18e";
    _0x657111.lineWidth = 1;
    _0x657111.beginPath();
    _0x657111.arc(_0xa32df5.x, _0xa32df5.y - 1, 11, 0, Math.PI * 2);
    _0x657111.fill();
    _0x657111.stroke();
    _0x657111.fillStyle = "#f1dfb4";
    _0x657111.textAlign = "center";
    _0x657111.textBaseline = "middle";
    _0x657111.font = "bold 11px serif";
    _0x657111.fillText(_0x31c633.glyph, _0xa32df5.x, _0xa32df5.y);
    for (let _0x2ffe6f = 0; _0x2ffe6f < _0xa32df5.level; _0x2ffe6f++) {
      _0x657111.fillStyle = "#d5b45f";
      _0x657111.beginPath();
      _0x657111.arc(_0xa32df5.x - 6 + _0x2ffe6f * 6, _0xa32df5.y + 20, 1.8, 0, Math.PI * 2);
      _0x657111.fill();
    }
    _0x657111.textAlign = "start";
    _0x657111.textBaseline = "alphabetic";
  }
  function _0x4feb7a(_0x4522d7) {
    const _0x95ddc0 = _0x28f41a[_0x4522d7.type];
    _0x657111.save();
    _0x657111.translate(_0x4522d7.x, _0x4522d7.y);
    _0x657111.rotate(_0x4522d7.angle);
    _0x657111.fillStyle = "rgba(29,24,18,.22)";
    _0x657111.beginPath();
    _0x657111.ellipse(-2, 8, _0x95ddc0.size + 5, 6, 0, 0, Math.PI * 2);
    _0x657111.fill();
    if (_0x4522d7.type === "cavalry") {
      _0x657111.fillStyle = "#503c29";
      _0x657111.beginPath();
      _0x657111.ellipse(0, 2, 15, 8, 0, 0, Math.PI * 2);
      _0x657111.fill();
      _0x657111.fillRect(7, -4, 11, 6);
    }
    _0x657111.fillStyle = _0x95ddc0.color;
    _0x657111.beginPath();
    _0x657111.arc(0, -3, _0x95ddc0.size, 0, Math.PI * 2);
    _0x657111.fill();
    _0x657111.strokeStyle = "#2b241c";
    _0x657111.lineWidth = 2;
    _0x657111.stroke();
    if (_0x4522d7.type === "shield") {
      _0x657111.fillStyle = "#283b37";
      _0x657111.beginPath();
      _0x657111.arc(-8, -3, 9, -Math.PI / 2, Math.PI / 2);
      _0x657111.fill();
    }
    _0x657111.strokeStyle = "#33291e";
    _0x657111.lineWidth = 2;
    _0x657111.beginPath();
    _0x657111.moveTo(2, -5);
    _0x657111.lineTo(18, -5);
    _0x657111.stroke();
    _0x657111.restore();
    _0x657111.fillStyle = "rgba(27,21,15,.55)";
    _0x657111.fillRect(_0x4522d7.x - 15, _0x4522d7.y - _0x95ddc0.size - 12, 30, 4);
    _0x657111.fillStyle = _0x4522d7.slowUntil > _0x55b9aa.time ? "#719592" : "#a84a35";
    _0x657111.fillRect(_0x4522d7.x - 15, _0x4522d7.y - _0x95ddc0.size - 12, Math.max(0, _0x4522d7.hp / _0x4522d7.maxHp) * 30, 4);
  }
  function _0x1a2cdf() {
    (function () {
      const _0x34dc5a = _0x657111.createLinearGradient(0, 0, 960, 600);
      _0x34dc5a.addColorStop(0, "#c6b17f");
      _0x34dc5a.addColorStop(1, "#9f895d");
      _0x657111.fillStyle = _0x34dc5a;
      _0x657111.fillRect(0, 0, 960, 600);
      _0x657111.globalAlpha = 0.08;
      _0x657111.strokeStyle = "#4e402c";
      _0x657111.lineWidth = 1;
      for (let _0x1346f8 = 0; _0x1346f8 < 150; _0x1346f8++) {
        const _0x1d8709 = _0x1346f8 * 83 % 960;
        const _0x5dac58 = _0x1346f8 * 137 % 600;
        _0x657111.beginPath();
        _0x657111.moveTo(_0x1d8709, _0x5dac58);
        _0x657111.lineTo(_0x1d8709 + 20 + _0x1346f8 % 5 * 7, _0x5dac58 + _0x1346f8 % 3 * 3);
        _0x657111.stroke();
      }
      _0x657111.globalAlpha = 1;
      _0x657111.fillStyle = "rgba(70,83,65,.32)";
      [[30, 50], [90, 60], [390, 50], [460, 65], [520, 40], [820, 510], [885, 520]].forEach(([_0x28e192, _0x3aede5], _0x260513) => {
        _0x657111.beginPath();
        _0x657111.moveTo(_0x28e192 - 55, _0x3aede5 + 60);
        _0x657111.lineTo(_0x28e192, _0x3aede5 - _0x260513 % 2 * 18);
        _0x657111.lineTo(_0x28e192 + 65, _0x3aede5 + 60);
        _0x657111.closePath();
        _0x657111.fill();
        _0x657111.strokeStyle = "rgba(43,52,40,.3)";
        _0x657111.beginPath();
        _0x657111.moveTo(_0x28e192 - 18, _0x3aede5 + 23);
        _0x657111.lineTo(_0x28e192, _0x3aede5);
        _0x657111.lineTo(_0x28e192 + 20, _0x3aede5 + 24);
        _0x657111.stroke();
      });
      _0x657111.strokeStyle = "rgba(73,103,108,.35)";
      _0x657111.lineWidth = 18;
      _0x657111.lineCap = "round";
      _0x657111.beginPath();
      _0x657111.moveTo(5, 95);
      _0x657111.bezierCurveTo(250, 30, 270, 145, 520, 92);
      _0x657111.bezierCurveTo(730, 50, 770, 535, 958, 545);
      _0x657111.stroke();
      _0x657111.strokeStyle = "rgba(218,214,178,.28)";
      _0x657111.lineWidth = 2;
      _0x657111.stroke();
      _0x657111.lineCap = "round";
      _0x657111.lineJoin = "round";
      _0x657111.strokeStyle = "rgba(58,45,28,.23)";
      _0x657111.lineWidth = 59;
      _0x657111.beginPath();
      _0x657111.moveTo(_0x4b74ad[0].x, _0x4b74ad[0].y);
      _0x4b74ad.slice(1).forEach(_0x52683f => _0x657111.lineTo(_0x52683f.x, _0x52683f.y));
      _0x657111.stroke();
      _0x657111.strokeStyle = "#b89b65";
      _0x657111.lineWidth = 49;
      _0x657111.stroke();
      _0x657111.strokeStyle = "rgba(239,220,174,.22)";
      _0x657111.lineWidth = 2;
      _0x657111.setLineDash([7, 9]);
      _0x657111.stroke();
      _0x657111.setLineDash([]);
      _0x657111.fillStyle = "#3d3328";
      _0x657111.fillRect(0, 420, 32, 121);
      _0x657111.fillStyle = "#6f4c32";
      _0x657111.fillRect(0, 438, 42, 84);
      _0x657111.fillStyle = "#2d2720";
      _0x657111.fillRect(0, 459, 25, 44);
      _0x657111.fillStyle = "#c4a35f";
      _0x657111.font = "bold 14px serif";
      _0x657111.fillText("函", 8, 455);
      _0x657111.fillStyle = "#3e3326";
      for (let _0x27eb7c = 0; _0x27eb7c < 5; _0x27eb7c++) {
        _0x657111.fillRect(_0x27eb7c * 10, 412, 7, 16);
      }
      _0x657111.strokeStyle = "#3b2e22";
      _0x657111.lineWidth = 3;
      _0x657111.beginPath();
      _0x657111.moveTo(925, 45);
      _0x657111.lineTo(925, 105);
      _0x657111.stroke();
      _0x657111.fillStyle = "#74362f";
      _0x657111.fillRect(925, 47, 30, 38);
      _0x657111.fillStyle = "#ead8ad";
      _0x657111.font = "20px serif";
      _0x657111.fillText("纵", 930, 73);
    })();
    _0x626b21.forEach(_0x5dc2b6 => {
      if (_0x5dc2b6.tower) {
        return;
      }
      const _0x34890 = _0x55b9aa.selectedType && _0x55b9aa.started && !_0x55b9aa.ended;
      _0x657111.globalAlpha = _0x34890 ? 0.82 : 0.35;
      _0x657111.strokeStyle = "#624b2d";
      _0x657111.lineWidth = 2;
      _0x657111.beginPath();
      _0x657111.arc(_0x5dc2b6.x, _0x5dc2b6.y, 19, 0, Math.PI * 2);
      _0x657111.stroke();
      _0x657111.beginPath();
      for (let _0x51011b = 0; _0x51011b < 8; _0x51011b++) {
        const _0x5efb7b = _0x51011b * Math.PI / 4;
        const _0x1ff467 = _0x51011b % 2 ? 12 : 15;
        const _0x397757 = _0x5dc2b6.x + Math.cos(_0x5efb7b) * _0x1ff467;
        const _0x3e0c3a = _0x5dc2b6.y + Math.sin(_0x5efb7b) * _0x1ff467;
        if (_0x51011b) {
          _0x657111.lineTo(_0x397757, _0x3e0c3a);
        } else {
          _0x657111.moveTo(_0x397757, _0x3e0c3a);
        }
      }
      _0x657111.closePath();
      _0x657111.stroke();
      _0x657111.globalAlpha = 1;
    });
    _0x55b9aa.towers.forEach(_0x3168ba);
    _0x55b9aa.enemies.forEach(_0x4feb7a);
    _0x55b9aa.projectiles.forEach(_0x1947e9 => {
      _0x657111.fillStyle = _0x1947e9.color;
      _0x657111.beginPath();
      _0x657111.arc(_0x1947e9.x, _0x1947e9.y, _0x1947e9.size, 0, Math.PI * 2);
      _0x657111.fill();
    });
    _0x55b9aa.particles.forEach(_0x4febf3 => {
      _0x657111.globalAlpha = Math.max(0, _0x4febf3.life / _0x4febf3.maxLife);
      _0x657111.fillStyle = _0x4febf3.color;
      _0x657111.fillRect(_0x4febf3.x, _0x4febf3.y, _0x4febf3.size, _0x4febf3.size);
    });
    _0x657111.globalAlpha = 1;
    if (_0x55b9aa.paused && _0x55b9aa.started && !_0x55b9aa.ended) {
      _0x657111.fillStyle = "rgba(20,17,13,.5)";
      _0x657111.fillRect(0, 0, 960, 600);
      _0x657111.fillStyle = "#eadbb7";
      _0x657111.textAlign = "center";
      _0x657111.font = "34px serif";
      _0x657111.fillText("军令暂止", 480, 285);
      _0x657111.font = "14px serif";
      _0x657111.fillText("点击“继续”恢复战局", 480, 315);
      _0x657111.textAlign = "start";
    }
  }
  function _0x1ef310(_0x38ee8a) {
    if (!_0x55b9aa.ended) {
      _0x55b9aa.ended = true;
      _0x55b9aa.paused = true;
      _0x213ff7.endSeal.textContent = _0x38ee8a ? "守" : "破";
      _0x213ff7.endTitle.textContent = _0x38ee8a ? "函谷关得守" : "关门告急";
      _0x213ff7.endText.textContent = _0x38ee8a ? "七轮兵锋尽挫于关前。你的军械布置与临阵谋略，保住了秦国的东方门户。" : "联军已突破关门。重新调配军粮，利用策士迟滞骑兵，再战一局。";
      _0x213ff7.finalScore.textContent = _0x55b9aa.score;
      _0x213ff7.endModal.classList.add("open");
      _0x48d001();
      if (_0x38ee8a) {
        window.OG?.leaderboard?.submit(_0x55b9aa.score).catch(() => {});
      }
    }
  }
  _0x52f645.addEventListener("pointerdown", _0x340c6d => {
    if (!_0x55b9aa.started || _0x55b9aa.ended) {
      return;
    }
    const _0x3a87bf = function (_0x184389) {
      const _0x1a6ec9 = _0x52f645.getBoundingClientRect();
      return {
        x: (_0x184389.clientX - _0x1a6ec9.left) * _0x52f645.width / _0x1a6ec9.width,
        y: (_0x184389.clientY - _0x1a6ec9.top) * _0x52f645.height / _0x1a6ec9.height
      };
    }(_0x340c6d);
    const _0x50ee95 = _0x55b9aa.towers.find(_0x1b5821 => Math.hypot(_0x1b5821.x - _0x3a87bf.x, _0x1b5821.y - _0x3a87bf.y) < 24);
    if (_0x50ee95) {
      _0x55b9aa.selectedTower = _0x50ee95;
      _0x459f78(_0x50ee95);
      return;
    }
    const _0x3d7635 = _0x626b21.find(_0xf65ba1 => Math.hypot(_0xf65ba1.x - _0x3a87bf.x, _0xf65ba1.y - _0x3a87bf.y) < 27);
    if (_0x3d7635) {
      (function (_0x1a9654) {
        if (_0x1a9654.tower) {
          _0x55b9aa.selectedTower = _0x1a9654.tower;
          _0x459f78(_0x1a9654.tower);
          return;
        }
        const _0x48dc58 = _0x4baeb8[_0x55b9aa.selectedType];
        if (_0x55b9aa.gold < _0x48dc58.cost) {
          _0x5e2832("军粮不足，无法布防");
          return;
        }
        const _0x56093f = {
          type: _0x55b9aa.selectedType,
          x: _0x1a9654.x,
          y: _0x1a9654.y,
          level: 1,
          cooldown: Math.random() * 0.25,
          angle: 0,
          spent: _0x48dc58.cost,
          site: _0x1a9654
        };
        _0x1a9654.tower = _0x56093f;
        _0x55b9aa.towers.push(_0x56093f);
        _0x55b9aa.gold -= _0x48dc58.cost;
        _0x42b92d("build");
        _0x40a296(_0x1a9654.x, _0x1a9654.y, "#d7bf83", 14);
        _0x55b9aa.selectedTower = _0x56093f;
        _0x459f78(_0x56093f);
        _0x48d001();
      })(_0x3d7635);
    } else {
      _0x55b9aa.selectedTower = null;
      _0x3b9948(_0x55b9aa.selectedType);
    }
  });
  _0x213ff7.startButton.addEventListener("click", () => {
    _0x213ff7.intro.classList.remove("open");
    _0x55b9aa.started = true;
    _0x3b9948(_0x55b9aa.selectedType);
    _0x48d001();
    _0x42b92d("gong");
  });
  _0x213ff7.waveButton.addEventListener("click", _0x4ec8e8);
  _0x213ff7.speedButton.addEventListener("click", () => {
    _0x55b9aa.speed = _0x55b9aa.speed === 1 ? 2 : 1;
    _0x48d001();
  });
  _0x213ff7.pauseButton.addEventListener("click", () => {
    if (_0x55b9aa.started && !_0x55b9aa.ended) {
      _0x55b9aa.paused = !_0x55b9aa.paused;
      _0x48d001();
    }
  });
  _0x213ff7.restartButton.addEventListener("click", function () {
    Object.assign(_0x55b9aa, {
      gold: 180,
      lives: 10,
      wave: 0,
      score: 0,
      selectedType: "crossbow",
      selectedTower: null,
      towers: [],
      enemies: [],
      projectiles: [],
      particles: [],
      spawnQueue: [],
      spawnTimer: 0,
      waveActive: false,
      paused: false,
      speed: 1,
      started: true,
      ended: false,
      time: 0
    });
    _0x626b21.forEach(_0x2ede68 => _0x2ede68.tower = null);
    _0x213ff7.endModal.classList.remove("open");
    _0x213ff7.loreText.textContent = "函谷关地势险要，是战国时期秦国的东方门户。";
    _0x3b9948("crossbow");
    _0x48d001();
  });
  window.addEventListener("keydown", _0x1a8489 => {
    if (_0x1a8489.code === "Space") {
      _0x1a8489.preventDefault();
      if (!_0x55b9aa.waveActive) {
        _0x4ec8e8();
      }
    }
    if (_0x1a8489.key === "p" || _0x1a8489.key === "P") {
      _0x55b9aa.paused = !_0x55b9aa.paused;
      _0x48d001();
    }
    if (["1", "2", "3", "4"].includes(_0x1a8489.key)) {
      _0x55b9aa.selectedType = Object.keys(_0x4baeb8)[Number(_0x1a8489.key) - 1];
      _0x55b9aa.selectedTower = null;
      _0x3b9948(_0x55b9aa.selectedType);
      _0x48d001();
    }
  });
  Object.entries(_0x4baeb8).forEach(([_0x54d9bc, _0x32a3ac]) => {
    const _0x8977bd = document.createElement("button");
    _0x8977bd.className = "tower-card";
    _0x8977bd.dataset.type = _0x54d9bc;
    _0x8977bd.innerHTML = "<span class=\"glyph\">" + _0x32a3ac.glyph + "</span><span><b>" + _0x32a3ac.name + "</b><small>" + _0x32a3ac.desc.slice(0, 12) + "</small></span><span class=\"cost\">" + _0x32a3ac.cost + "</span>";
    _0x8977bd.addEventListener("click", () => {
      _0x55b9aa.selectedType = _0x54d9bc;
      _0x55b9aa.selectedTower = null;
      _0x3b9948(_0x54d9bc);
      _0x48d001();
    });
    _0x213ff7.towerCards.appendChild(_0x8977bd);
  });
  _0x3b9948("crossbow");
  _0x48d001();
  requestAnimationFrame(function _0x5e475d(_0x3c5e15) {
    const _0x402f64 = Math.min(0.05, (_0x3c5e15 - _0x11ac9e) / 1000);
    _0x11ac9e = _0x3c5e15;
    if (!_0x55b9aa.paused && !!_0x55b9aa.started && !_0x55b9aa.ended) {
      _0x5ee9ba(_0x402f64 * _0x55b9aa.speed);
    }
    _0x1a2cdf();
    requestAnimationFrame(_0x5e475d);
  });
  window.OG?.ready?.().catch(() => {});
})();