import "./modulepreload-polyfill-B5Qt9EMX.js";
import { L as _0x3f9e29, B as _0x254de1, g as _0x137417, c as _0x1bc32b, a as _0x215d07 } from "./bossMechanics-21H4M662.js";
import { runBalanceSuite as _0x9d752e } from "./balanceSimulator-BeaDXWA2.js";
const r = Object.freeze({
  "star-tide-repeater": "星潮连弩塔",
  "rune-rivet-barracks": "符文铆钉兵营",
  "magma-whale-cannon": "熔火鲸炮",
  "time-tide-nexus": "时潮枢纽",
  "storm-tide-crystal": "风暴潮晶塔"
});
const i = Object.freeze({
  scavenger: "盐壳拾荒者",
  jetfin: "喷气飞鳍",
  crab: "深潜蟹卫",
  wraith: "虚潮幽魂",
  priest: "雾炉祭司",
  carrier: "深渊驮城机兽",
  piercer: "深海穿航者",
  dagon: "深渊机神·达贡"
});
const o = _0x34252d => JSON.parse(JSON.stringify(_0x34252d));
const d = _0x499047 => Math.round(_0x499047 * 100) + "%";
const c = _0x3a6d72 => String(_0x3a6d72 ?? "").replace(/[&<>'"]/g, _0x338fef => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  "\"": "&quot;"
})[_0x338fef]);
function u(_0x155807, _0x3de84b) {
  const _0x2a550e = _0x3de84b.representative;
  const _0x984f70 = _0x2a550e.towerStats.reduce((_0x1dfdd4, _0x322e15) => {
    _0x1dfdd4[_0x322e15.id] = (_0x1dfdd4[_0x322e15.id] ?? 0) + 1;
    return _0x1dfdd4;
  }, {});
  _0x155807.replaceChildren();
  const _0x1d7484 = document.createElement("div");
  _0x1d7484.className = "detail-heading";
  _0x1d7484.innerHTML = "<div><span>代表性对局</span><h3>" + c(_0x3de84b.levelName) + "</h3></div><p>种子 " + _0x2a550e.seed + " · " + _0x2a550e.towerCount + " 座塔 · 波中建造 " + _0x2a550e.midWaveBuildCount + " 次 · 波中拆换 " + _0x2a550e.midWaveDismantleCount + " 次</p>";
  const _0x18fd36 = document.createElement("div");
  _0x18fd36.className = "detail-body";
  _0x18fd36.append(function (_0x56a076) {
    const _0x33c45a = _0x3f9e29.find(_0x59e193 => _0x59e193.id === _0x56a076.levelId);
    const _0x1780f2 = document.createElement("div");
    _0x1780f2.className = "agent-map";
    _0x1780f2.style.backgroundImage = "url(\"" + _0x33c45a.map + "\")";
    _0x56a076.representative.towerStats.forEach((_0x3d337a, _0x3270ad) => {
      const _0x2138b7 = _0x33c45a.data.towerSpots[_0x3d337a.spotIndex];
      if (!_0x2138b7) {
        return;
      }
      const _0x2cea36 = document.createElement("span");
      _0x2cea36.className = "agent-marker tower-" + _0x3d337a.id;
      _0x2cea36.style.left = _0x2138b7.x / _0x33c45a.data.sourceWidth * 100 + "%";
      _0x2cea36.style.top = _0x2138b7.y / _0x33c45a.data.sourceHeight * 100 + "%";
      _0x2cea36.textContent = String(_0x3270ad + 1);
      _0x2cea36.title = "最终塔阵：" + r[_0x3d337a.id] + "，塔位 " + (_0x3d337a.spotIndex + 1);
      _0x1780f2.append(_0x2cea36);
    });
    return _0x1780f2;
  }(_0x3de84b));
  const _0x5befca = document.createElement("div");
  _0x5befca.className = "agent-plan";
  _0x5befca.innerHTML = "<h4>代理部署动作</h4><div class=\"tower-mix\">" + Object.entries(_0x984f70).map(([_0x4f45b2, _0x4e9fcc]) => "<span>" + r[_0x4f45b2] + " × " + _0x4e9fcc + "</span>").join("") + "</div><ol>" + _0x2a550e.actions.map(_0x49eac8 => "<li><b>" + (_0x49eac8.phase === "mid-wave" ? "第 " + _0x49eac8.wave + " 波中 · " + (_0x49eac8.atMs / 1000).toFixed(1) + " 秒" : "第 " + _0x49eac8.wave + " 波前") + "</b><span>" + (_0x49eac8.type === "dismantle" ? "拆除 " + r[_0x49eac8.towerId] + " · 塔位 " + (_0x49eac8.spotIndex + 1) + " · +" + _0x49eac8.refund : "建造 " + r[_0x49eac8.towerId] + " · 塔位 " + (_0x49eac8.spotIndex + 1)) + "</span></li>").join("") + "</ol>";
  _0x18fd36.append(_0x5befca);
  const _0x16ecbe = document.createElement("div");
  _0x16ecbe.className = "wave-strip";
  _0x2a550e.waves.forEach(_0x29f5b2 => {
    const _0x37fd31 = document.createElement("div");
    _0x37fd31.innerHTML = "<b>W" + _0x29f5b2.wave + "</b><span>核心 " + _0x29f5b2.coreRemaining + "</span><span>泄漏 " + _0x29f5b2.leaks + "</span><span>金币 " + _0x29f5b2.goldAfter + "</span>";
    _0x16ecbe.append(_0x37fd31);
  });
  _0x155807.append(_0x1d7484, _0x18fd36, _0x16ecbe);
}
function m(_0x44107b, _0x4bb157) {
  var _0x139928;
  const _0x357d94 = _0x4bb157.results.length;
  const _0x501fa1 = _0x4bb157.results.filter(_0x410506 => _0x410506.hasConfiguredBoss).length;
  _0x44107b.summary.innerHTML = "<div><span>难度梯度</span><strong>" + (_0x4bb157.summary.progressionBreaks.length ? "异常" : "通过") + "</strong><small>" + _0x4bb157.results.map(_0x373209 => _0x373209.difficultyScore).join(" → ") + "</small></div><div><span>波次数量</span><strong>" + (_0x357d94 - _0x4bb157.summary.waveCountFailures.length) + "/" + _0x357d94 + "</strong><small>01–06 关依次为 5–10 波</small></div><div><span>Boss 存活</span><strong>" + (_0x501fa1 - _0x4bb157.summary.bossSurvivalFailures.length) + "/" + _0x501fa1 + "</strong><small>目标至少 60 秒</small></div><div><span>路线均衡</span><strong>" + (_0x357d94 - _0x4bb157.summary.routeBalanceFailures.length) + "/" + _0x357d94 + "</strong><small>各路线数量差不超过 1</small></div><div><span>路线遍历</span><strong>" + (_0x357d94 - _0x4bb157.summary.routeTraversalFailures.length) + "/" + _0x357d94 + "</strong><small>跨波次覆盖全部入口与分支</small></div><div><span>难度区分度</span><strong>" + _0x4bb157.summary.difficultySpread + "</strong><small>" + (_0x4bb157.summary.difficultySpread < 15 ? "建议拉开关卡梯度" : "区分正常") + "</small></div><div><span>完成仿真</span><strong>" + _0x357d94 * _0x4bb157.trials + "</strong><small>场对局</small></div>";
  const _0x3a125e = _0x357d94 - _0x4bb157.summary.entryPatternFailures.length;
  const _0x4b7c74 = _0x501fa1 - _0x4bb157.summary.bossMinionFailures.length;
  const _0x140ba1 = _0x4bb157.summary.towerDifferentiation;
  const _0x2539cf = _0x357d94 - _0x4bb157.summary.midWaveActionFailures.length;
  const _0x536607 = _0x357d94 - _0x4bb157.summary.earlyWaveMidActionFailures.length;
  _0x44107b.summary.insertAdjacentHTML("beforeend", "<div><span>入口编排</span><strong>" + _0x3a125e + "/" + _0x357d94 + "</strong><small>前期交替，后期同时出怪</small></div><div><span>Boss 伴生怪</span><strong>" + _0x4b7c74 + "/" + _0x501fa1 + "</strong><small>Boss 战持续间隔刷新小怪</small></div><div><span>防御塔差异</span><strong>" + (_0x140ba1.pass ? "通过" : "异常") + "</strong><small>价格 " + _0x140ba1.priceSpreadRatio + " 倍 · 强度 " + _0x140ba1.strengthSpreadRatio + " 倍</small></div><div><span>波中建拆</span><strong>" + _0x2539cf + "/" + _0x357d94 + "</strong><small>击杀收益实时投入防线</small></div><div><span>前两波操作</span><strong>" + _0x536607 + "/" + _0x357d94 + "</strong><small>前期波中补塔覆盖率达标</small></div>");
  (function (_0x587841, _0x31074c) {
    const _0x23b580 = _0x31074c.results.map(_0x59b721 => _0x59b721.difficultyScore);
    const _0x3b0d7f = _0x23b580.map((_0x182660, _0x57987e) => _0x57987e * 100 / Math.max(1, _0x23b580.length - 1) + "," + (100 - _0x182660)).join(" ");
    _0x587841.difficultyChart.innerHTML = "<div class=\"chart-grid\"></div><svg viewBox=\"0 0 500 100\" preserveAspectRatio=\"none\" aria-label=\"难度分折线图\"><polyline points=\"" + _0x3b0d7f + "\" /></svg><div class=\"chart-labels\">" + _0x31074c.results.map(_0x533eef => "<span><b>" + _0x533eef.difficultyScore + "</b>" + c(_0x533eef.levelName) + "</span>").join("") + "</div>";
    _0x587841.survivalChart.innerHTML = _0x31074c.results.map(_0x58f38c => "<div class=\"survival-group\"><div class=\"survival-bars\"><i style=\"height:" + _0x58f38c.winRate * 100 + "%\" title=\"胜率 " + d(_0x58f38c.winRate) + "\"></i><i style=\"height:" + _0x58f38c.averageCoreRatio * 100 + "%\" title=\"核心余量 " + d(_0x58f38c.averageCoreRatio) + "\"></i></div><span>" + c(_0x58f38c.levelName.slice(0, 2)) + "</span></div>").join("");
  })(_0x44107b, _0x4bb157);
  _0x44107b.results.replaceChildren();
  _0x4bb157.results.forEach(_0x22814d => {
    const _0x504afb = function (_0x15aea1) {
      if (_0x15aea1.winRate < 0.5) {
        return {
          type: "danger",
          text: "过难"
        };
      } else if (_0x15aea1.winRate >= 0.95 && _0x15aea1.averageCoreRatio >= 0.9) {
        return {
          type: "warn",
          text: "过易"
        };
      } else if (_0x15aea1.p10CoreRatio <= 0.15) {
        return {
          type: "warn",
          text: "波动偏高"
        };
      } else {
        return {
          type: "good",
          text: "合理"
        };
      }
    }(_0x22814d);
    const _0x358b6c = document.createElement("tr");
    _0x358b6c.tabIndex = 0;
    _0x358b6c.innerHTML = "<td><b>" + c(_0x22814d.levelName) + "</b><small>" + _0x22814d.levelId + "</small></td><td>" + d(_0x22814d.winRate) + "</td><td>" + d(_0x22814d.averageCoreRatio) + "</td><td>" + (_0xdfbeab => (_0xdfbeab / 60000).toFixed(1) + " 分")(_0x22814d.averageDurationMs) + "</td><td>" + (_0xd035ab => _0xd035ab === null ? "—" : (_0xd035ab / 1000).toFixed(1) + " 秒")(_0x22814d.averageBossSurvivalMs) + "</td><td>" + _0x22814d.maximumRouteImbalance + "</td><td><span class=\"difficulty-meter\"><i style=\"width:" + _0x22814d.difficultyScore + "%\"></i></span><b>" + _0x22814d.difficultyScore + "</b></td><td><span class=\"finding finding-" + _0x504afb.type + "\">" + _0x504afb.text + "</span></td>";
    const _0xb5dd9c = () => {
      _0x44107b.results.querySelectorAll("tr").forEach(_0x106c59 => _0x106c59.classList.remove("is-selected"));
      _0x358b6c.classList.add("is-selected");
      u(_0x44107b.detail, _0x22814d);
    };
    _0x358b6c.addEventListener("click", _0xb5dd9c);
    _0x358b6c.addEventListener("keydown", _0x2f040 => {
      if (_0x2f040.key === "Enter" || _0x2f040.key === " ") {
        _0xb5dd9c();
      }
    });
    _0x44107b.results.append(_0x358b6c);
  });
  if ((_0x139928 = _0x44107b.results.firstElementChild) != null) {
    _0x139928.click();
  }
}
(function () {
  var _0x3e0783;
  var _0x55349b;
  const _0x3d74cf = {
    panel: document.querySelector("#balance-lab"),
    open: document.querySelector("#balance-lab-button"),
    close: document.querySelector("#balance-lab-close"),
    save: document.querySelector("#balance-save"),
    export: document.querySelector("#balance-export"),
    dirty: document.querySelector("#balance-dirty"),
    run: document.querySelector("#balance-run"),
    profile: document.querySelector("#balance-profile"),
    trials: document.querySelector("#balance-trials"),
    status: document.querySelector("#balance-status"),
    summary: document.querySelector("#balance-summary"),
    results: document.querySelector("#balance-results"),
    detail: document.querySelector("#balance-detail"),
    difficultyChart: document.querySelector("#difficulty-chart"),
    survivalChart: document.querySelector("#survival-chart"),
    levelSelector: document.querySelector("#level-selector"),
    levelSettings: document.querySelector("#level-settings"),
    routeMap: document.querySelector("#route-map"),
    routeCaption: document.querySelector("#route-caption"),
    routeToggles: document.querySelector("#route-toggles"),
    wavePressure: document.querySelector("#wave-pressure-chart"),
    waveEditor: document.querySelector("#wave-editor"),
    waveSource: document.querySelector("#wave-source"),
    addWave: document.querySelector("#add-wave"),
    economySettings: document.querySelector("#economy-settings"),
    towerEditor: document.querySelector("#tower-editor"),
    enemyEditor: document.querySelector("#enemy-editor")
  };
  let _0x3d6fd3 = o(_0x254de1);
  let _0x4398fc = false;
  let _0x48230b = null;
  let _0x2a46f = _0x3f9e29[0].id;
  let _0x518db3 = 0;
  const _0x357ef2 = () => _0x137417(_0x2a46f, _0x3d6fd3);
  const _0x56ac4b = () => {
    _0x3d74cf.dirty.hidden = false;
  };
  const _0x256a4a = () => {
    _0x3d6fd3.levelWaves ??= {};
    _0x3d6fd3.levelWaves[_0x2a46f] ||= o(_0x3d6fd3.waves);
    return _0x3d6fd3.levelWaves[_0x2a46f];
  };
  function _0x45f9c3() {
    var _0x1888d9;
    const _0x4f0ae7 = _0x3f9e29.find(_0x4ff597 => _0x4ff597.id === _0x2a46f);
    const _0x5eea8f = _0x357ef2()[_0x518db3];
    if (!_0x5eea8f) {
      return;
    }
    if ((_0x1888d9 = _0x5eea8f.routes) != null && _0x1888d9.length) {
      _0x5eea8f.routes;
    }
    const _0x390257 = _0x1bc32b(_0x4f0ae7.data);
    const _0x1d7e1f = _0x215d07(_0x4f0ae7.data, _0x5eea8f).map(_0x1c24af => _0x1c24af.id);
    _0x3d74cf.routeCaption.textContent = "第 " + (_0x518db3 + 1) + " 波 · " + _0x1d7e1f.length + " 条具体路径";
    const _0x290b0f = _0x390257.map(_0xfcd231 => "<polyline class=\"route-line " + (_0x1d7e1f.includes(_0xfcd231.id) ? "is-active" : "") + "\" points=\"" + function (_0x217700, _0x16b289) {
      return _0x217700.map(_0x4a0085 => (_0x4a0085.column + 0.5) * _0x16b289.data.navCellSize + "," + (_0x4a0085.row + 0.5) * _0x16b289.data.navCellSize).join(" ");
    }(_0xfcd231.cells, _0x4f0ae7) + "\"/><circle class=\"route-start " + (_0x1d7e1f.includes(_0xfcd231.id) ? "is-active" : "") + "\" cx=\"" + (_0xfcd231.cells[0].column + 0.5) * _0x4f0ae7.data.navCellSize + "\" cy=\"" + (_0xfcd231.cells[0].row + 0.5) * _0x4f0ae7.data.navCellSize + "\" r=\"12\"/><text x=\"" + (_0xfcd231.cells[0].column + 0.5) * _0x4f0ae7.data.navCellSize + "\" y=\"" + ((_0xfcd231.cells[0].row + 0.5) * _0x4f0ae7.data.navCellSize + 4) + "\">" + (_0xfcd231.entryIndex + 1) + "." + (_0xfcd231.variantIndex + 1) + "</text>").join("");
    const _0x2c7ae4 = _0x4f0ae7.data.towerSpots.map((_0x51c548, _0x4c1d0f) => "<circle class=\"tower-spot\" cx=\"" + _0x51c548.x + "\" cy=\"" + _0x51c548.y + "\" r=\"" + Math.max(7, Math.min(_0x51c548.radiusX, _0x51c548.radiusY) * 0.38) + "\"/><text class=\"tower-spot-label\" x=\"" + _0x51c548.x + "\" y=\"" + (_0x51c548.y + 3) + "\">" + (_0x4c1d0f + 1) + "</text>").join("");
    _0x3d74cf.routeMap.style.backgroundImage = "url(\"" + _0x4f0ae7.map + "\")";
    _0x3d74cf.routeMap.style.setProperty("--route-map-aspect", _0x4f0ae7.data.sourceWidth + " / " + _0x4f0ae7.data.sourceHeight);
    _0x3d74cf.routeMap.innerHTML = "<svg viewBox=\"0 0 " + _0x4f0ae7.data.sourceWidth + " " + _0x4f0ae7.data.sourceHeight + "\" preserveAspectRatio=\"xMidYMid meet\">" + _0x290b0f + _0x2c7ae4 + "</svg>";
    _0x3d74cf.routeToggles.innerHTML = _0x390257.map(_0x351000 => "<button type=\"button\" data-entry=\"" + _0x351000.entryIndex + "\" data-variant=\"" + _0x351000.variantIndex + "\" class=\"" + (_0x1d7e1f.includes(_0x351000.id) ? "is-active" : "") + "\"><i></i>入口 " + (_0x351000.entryIndex + 1) + " · 分支 " + (_0x351000.variantIndex + 1) + "<span>" + _0x351000.cells.length + " 格</span></button>").join("");
    _0x3d74cf.routeToggles.querySelectorAll("button").forEach(_0x59e087 => _0x59e087.addEventListener("click", () => {
      var _0x1bce77;
      var _0x346ed7;
      const _0x266b7f = _0x256a4a();
      const _0x5ad383 = _0x266b7f[_0x518db3].routes ?? [0];
      const _0x49a847 = Number(_0x59e087.dataset.entry);
      const _0x3a029e = Number(_0x59e087.dataset.variant);
      const _0x586031 = Number((_0x1bce77 = _0x266b7f[_0x518db3].routeVariants) == null ? undefined : _0x1bce77[_0x49a847]);
      const _0x25a7de = _0x5ad383.includes(_0x49a847) && _0x586031 === _0x3a029e;
      (_0x346ed7 = _0x266b7f[_0x518db3]).routeVariants ?? (_0x346ed7.routeVariants = {});
      if (_0x25a7de && _0x5ad383.length > 1) {
        _0x266b7f[_0x518db3].routes = _0x5ad383.filter(_0x20e8c3 => _0x20e8c3 !== _0x49a847);
        delete _0x266b7f[_0x518db3].routeVariants[_0x49a847];
      } else {
        _0x266b7f[_0x518db3].routes = [...new Set([..._0x5ad383, _0x49a847])].sort((_0x27a34c, _0x13c393) => _0x27a34c - _0x13c393);
        _0x266b7f[_0x518db3].routeVariants[_0x49a847] = _0x3a029e;
      }
      _0x56ac4b();
      _0x45f9c3();
      _0x3d92a2();
    }));
  }
  function _0xcc1287(_0x4b830e) {
    const _0x1daff2 = _0x4b830e.types.reduce((_0x3be09e, _0x1e8df1) => {
      var _0x24b6d6;
      return _0x3be09e + (((_0x24b6d6 = _0x3d6fd3.enemies[_0x1e8df1]) == null ? undefined : _0x24b6d6.health) ?? 0);
    }, 0) / Math.max(1, _0x4b830e.types.length);
    return Math.round(_0x1daff2 * _0x4b830e.count * _0x3d6fd3.levels[_0x2a46f].enemyHealthScale);
  }
  function _0x3e2ad0() {
    const _0x1d108b = _0x357ef2().map(_0xcc1287);
    const _0x3313cb = Math.max(..._0x1d108b, 1);
    _0x3d74cf.wavePressure.innerHTML = _0x1d108b.map((_0x4693ad, _0x12005e) => "<button type=\"button\" data-wave-index=\"" + _0x12005e + "\" class=\"" + (_0x12005e === _0x518db3 ? "is-active" : "") + "\"><span style=\"height:" + Math.max(4, _0x4693ad / _0x3313cb * 100) + "%\"></span><b>" + _0x4693ad + "</b><small>W" + (_0x12005e + 1) + "</small></button>").join("");
    _0x3d74cf.wavePressure.querySelectorAll("button").forEach(_0x42f112 => _0x42f112.addEventListener("click", () => {
      _0x518db3 = Number(_0x42f112.dataset.waveIndex);
      _0x45ca82();
    }));
  }
  function _0x3d92a2() {
    var _0x25b82c;
    const _0x182079 = _0x357ef2();
    _0x3d74cf.waveSource.textContent = (_0x25b82c = _0x3d6fd3.levelWaves) != null && _0x25b82c[_0x2a46f] ? "本关专属配置" : "继承默认波次，修改后转为专属配置";
    _0x3d74cf.waveEditor.innerHTML = _0x182079.map((_0x3eb47c, _0x14dde6) => "<article class=\"wave-row " + (_0x14dde6 === _0x518db3 ? "is-selected" : "") + "\" data-wave-index=\"" + _0x14dde6 + "\"><button class=\"wave-select\" type=\"button\"><b>W" + String(_0x14dde6 + 1).padStart(2, "0") + "</b><span>" + _0xcc1287(_0x3eb47c) + " 压力</span></button><label>数量<input data-wave-field=\"count\" type=\"number\" min=\"1\" step=\"1\" value=\"" + _0x3eb47c.count + "\"></label><label>间隔 ms<input data-wave-field=\"delay\" type=\"number\" min=\"50\" step=\"10\" value=\"" + _0x3eb47c.delay + "\"></label><label class=\"wave-types\">敌人序列<input data-wave-field=\"types\" value=\"" + c(_0x3eb47c.types.join(", ")) + "\" title=\"可用：" + Object.keys(_0x3d6fd3.enemies).join(", ") + "\"></label><div class=\"wave-routes\">" + (_0x3eb47c.routes ?? [0]).map(_0x1f5e20 => {
      var _0xcb712d;
      return "<span>入口 " + (_0x1f5e20 + 1) + " · 分支 " + ((Number((_0xcb712d = _0x3eb47c.routeVariants) == null ? undefined : _0xcb712d[_0x1f5e20]) || 0) + 1) + "</span>";
    }).join("") + "</div><div class=\"wave-actions\"><button data-wave-action=\"up\" type=\"button\" title=\"上移\" " + (_0x14dde6 === 0 ? "disabled" : "") + ">↑</button><button data-wave-action=\"down\" type=\"button\" title=\"下移\" " + (_0x14dde6 === _0x182079.length - 1 ? "disabled" : "") + ">↓</button><button data-wave-action=\"delete\" type=\"button\" title=\"删除\" " + (_0x182079.length === 1 ? "disabled" : "") + ">×</button></div></article>").join("");
    _0x3d74cf.waveEditor.querySelectorAll(".wave-row").forEach(_0x5836ec => {
      const _0xc177ff = Number(_0x5836ec.dataset.waveIndex);
      _0x5836ec.querySelector(".wave-select").addEventListener("click", () => {
        _0x518db3 = _0xc177ff;
        _0x45ca82();
      });
      _0x5836ec.querySelectorAll("[data-wave-field]").forEach(_0x2b7647 => _0x2b7647.addEventListener("change", () => {
        const _0x3e1f43 = _0x256a4a();
        const _0x9bcc9 = _0x2b7647.dataset.waveField;
        if (_0x9bcc9 === "types") {
          const _0x5bacc5 = _0x2b7647.value.split(",").map(_0x16292f => _0x16292f.trim()).filter(_0x4fe6f5 => _0x3d6fd3.enemies[_0x4fe6f5]);
          _0x3e1f43[_0xc177ff].types = _0x5bacc5.length ? _0x5bacc5 : [Object.keys(_0x3d6fd3.enemies)[0]];
        } else {
          _0x3e1f43[_0xc177ff][_0x9bcc9] = Number(_0x2b7647.value);
        }
        _0x56ac4b();
        _0x45ca82();
      }));
      _0x5836ec.querySelectorAll("[data-wave-action]").forEach(_0x4296ab => _0x4296ab.addEventListener("click", () => {
        const _0x25bc25 = _0x256a4a();
        const _0xe6ed44 = _0x4296ab.dataset.waveAction;
        if (_0xe6ed44 === "delete" && _0x25bc25.length > 1) {
          _0x25bc25.splice(_0xc177ff, 1);
        }
        if (_0xe6ed44 === "up" && _0xc177ff > 0) {
          [_0x25bc25[_0xc177ff - 1], _0x25bc25[_0xc177ff]] = [_0x25bc25[_0xc177ff], _0x25bc25[_0xc177ff - 1]];
        }
        if (_0xe6ed44 === "down" && _0xc177ff < _0x25bc25.length - 1) {
          [_0x25bc25[_0xc177ff + 1], _0x25bc25[_0xc177ff]] = [_0x25bc25[_0xc177ff], _0x25bc25[_0xc177ff + 1]];
        }
        _0x518db3 = Math.max(0, Math.min(_0x25bc25.length - 1, _0xe6ed44 === "up" ? _0xc177ff - 1 : _0xe6ed44 === "down" ? _0xc177ff + 1 : _0xc177ff));
        _0x56ac4b();
        _0x45ca82();
      }));
    });
  }
  function _0x45ca82() {
    _0x518db3 = Math.min(_0x518db3, _0x357ef2().length - 1);
    _0x3d74cf.levelSelector.innerHTML = _0x3f9e29.map((_0x167dc3, _0x562172) => {
      var _0xb31469;
      return "<button type=\"button\" data-level-id=\"" + _0x167dc3.id + "\" class=\"" + (_0x167dc3.id === _0x2a46f ? "is-active" : "") + "\"><span>" + String(_0x562172 + 1).padStart(2, "0") + "</span><b>" + c(_0x167dc3.name) + "</b><small>" + c(_0x167dc3.difficulty) + " · " + (((_0xb31469 = _0x3d6fd3.levelWaves[_0x167dc3.id]) == null ? undefined : _0xb31469.length) ?? 0) + " 波</small></button>";
    }).join("");
    _0x3d74cf.levelSelector.querySelectorAll("button").forEach(_0xc4edb5 => _0xc4edb5.addEventListener("click", () => {
      _0x2a46f = _0xc4edb5.dataset.levelId;
      _0x518db3 = 0;
      _0x45ca82();
    }));
    (function () {
      const _0x4fc970 = _0x3d6fd3.levels[_0x2a46f];
      const _0x50ac40 = _0x4fc970.enemyHealthScales ?? {};
      _0x3d74cf.levelSettings.innerHTML = [["startingGold", "初始金币", 10, 0.01], ["coreHealth", "核心生命", 1, 0.01], ["enemyHealthScale", "敌人生命倍率", 0.01, 0.01], ["enemySpeedScale", "敌人速度倍率", 0.01, 0.01]].map(([_0xadb8af, _0x2e34df, _0x285967, _0xa8fe1e]) => "<label>" + _0x2e34df + "<input type=\"number\" min=\"" + _0xa8fe1e + "\" step=\"" + _0x285967 + "\" data-level-field=\"" + _0xadb8af + "\" value=\"" + _0x4fc970[_0xadb8af] + "\"></label>").join("") + "<div class=\"level-enemy-scales\"><header><b>本关怪物生命倍率</b><span>同一怪物可按关卡独立配置</span></header><div>" + Object.keys(_0x3d6fd3.enemies).map(_0xcee150 => "<label>" + (i[_0xcee150] ?? _0xcee150) + "<input type=\"number\" min=\"0.1\" step=\"0.05\" data-enemy-scale=\"" + _0xcee150 + "\" value=\"" + (_0x50ac40[_0xcee150] ?? _0x4fc970.enemyHealthScale) + "\"></label>").join("") + "</div></div>";
      _0x3d74cf.levelSettings.querySelectorAll("input").forEach(_0x3e63c2 => _0x3e63c2.addEventListener("change", () => {
        _0x3d6fd3.levels[_0x2a46f][_0x3e63c2.dataset.levelField] = Number(_0x3e63c2.value);
        _0x56ac4b();
        _0x3e2ad0();
      }));
      _0x3d74cf.levelSettings.querySelectorAll("[data-enemy-scale]").forEach(_0x16a26f => _0x16a26f.addEventListener("change", () => {
        var _0x54c940;
        (_0x54c940 = _0x3d6fd3.levels[_0x2a46f]).enemyHealthScales ?? (_0x54c940.enemyHealthScales = {});
        _0x3d6fd3.levels[_0x2a46f].enemyHealthScales[_0x16a26f.dataset.enemyScale] = Number(_0x16a26f.value);
        _0x56ac4b();
        _0x3e2ad0();
      }));
    })();
    _0x45f9c3();
    _0x3e2ad0();
    _0x3d92a2();
  }
  function _0xcebfaf(_0x5c195c) {
    const _0xd852b7 = _0x5c195c === "towers";
    const _0x2fbf5c = _0xd852b7 ? r : i;
    const _0x5f39c6 = _0xd852b7 ? ["price", "damage", "range", "cooldown"] : ["health", "speed", "armor", "reward", "coreDamage"];
    const _0x31c8b4 = {
      price: "价格",
      damage: "伤害",
      range: "射程",
      cooldown: "冷却 ms",
      health: "生命",
      speed: "速度",
      armor: "护甲",
      reward: "击杀奖励",
      coreDamage: "核心伤害"
    };
    const _0x4ed19f = _0xd852b7 ? _0x3d74cf.towerEditor : _0x3d74cf.enemyEditor;
    _0x4ed19f.innerHTML = Object.entries(_0x3d6fd3[_0x5c195c]).map(([_0x14f73e, _0x4e8709]) => {
      const _0x43ef66 = _0xd852b7 ? (_0x4e8709.damage * 1000 / _0x4e8709.cooldown / _0x4e8709.price).toFixed(2) : null;
      return "<article><header><div><h4>" + c(_0x2fbf5c[_0x14f73e] ?? _0x14f73e) + "</h4><span>" + _0x14f73e + "</span></div>" + (_0x43ef66 ? "<b>" + _0x43ef66 + "<small>DPS / 金币</small></b>" : "<b>" + Math.round(_0x4e8709.health * (1 + _0x4e8709.armor)) + "<small>有效生命</small></b>") + "</header><div>" + _0x5f39c6.map(_0x30081f => "<label>" + _0x31c8b4[_0x30081f] + "<input type=\"number\" data-entity-id=\"" + _0x14f73e + "\" data-entity-field=\"" + _0x30081f + "\" min=\"0\" step=\"" + (_0x30081f === "armor" ? "0.01" : "1") + "\" value=\"" + _0x4e8709[_0x30081f] + "\"></label>").join("") + "</div></article>";
    }).join("");
    _0x4ed19f.querySelectorAll("input").forEach(_0x45aafa => _0x45aafa.addEventListener("change", () => {
      _0x3d6fd3[_0x5c195c][_0x45aafa.dataset.entityId][_0x45aafa.dataset.entityField] = Number(_0x45aafa.value);
      _0x56ac4b();
      _0xcebfaf(_0x5c195c);
      if (!_0xd852b7) {
        _0x3e2ad0();
      }
    }));
  }
  function _0x4a4fd4() {
    _0x3d74cf.run.disabled = true;
    _0x3d74cf.status.textContent = "代理正在评估路径、建塔位置与逐波战斗…";
    requestAnimationFrame(() => setTimeout(() => {
      const _0x2b5c38 = performance.now();
      _0x48230b = _0x9d752e({
        profile: _0x3d74cf.profile.value,
        trials: Number(_0x3d74cf.trials.value),
        balance: _0x3d6fd3
      });
      m(_0x3d74cf, _0x48230b);
      _0x3d74cf.status.textContent = "刚刚完成 · " + _0x48230b.results.length * _0x48230b.trials + " 场 · " + Math.round(performance.now() - _0x2b5c38) + " ms";
      _0x3d74cf.run.disabled = false;
    }, 20));
  }
  document.querySelectorAll("[data-lab-tab]").forEach(_0x3a2d91 => _0x3a2d91.addEventListener("click", () => {
    document.querySelectorAll("[data-lab-tab]").forEach(_0x45d0b4 => _0x45d0b4.classList.toggle("is-active", _0x45d0b4 === _0x3a2d91));
    document.querySelectorAll("[data-lab-pane]").forEach(_0x1d2d44 => _0x1d2d44.classList.toggle("is-active", _0x1d2d44.dataset.labPane === _0x3a2d91.dataset.labTab));
  }));
  _0x3d74cf.addWave.addEventListener("click", () => {
    const _0x233e4e = _0x256a4a();
    _0x233e4e.push(o(_0x233e4e.at(-1)));
    _0x518db3 = _0x233e4e.length - 1;
    _0x56ac4b();
    _0x45ca82();
  });
  _0x3d74cf.run.addEventListener("click", _0x4a4fd4);
  _0x3d74cf.export.addEventListener("click", () => function (_0x3244c6, _0x11514d) {
    const _0x31f2d0 = new Blob([JSON.stringify(_0x3244c6, null, 2)], {
      type: "application/json"
    });
    const _0x2280d0 = document.createElement("a");
    _0x2280d0.href = URL.createObjectURL(_0x31f2d0);
    _0x2280d0.download = _0x11514d;
    _0x2280d0.click();
    URL.revokeObjectURL(_0x2280d0.href);
  }(_0x3d6fd3, "balance-config-" + new Date().toISOString().slice(0, 10) + ".json"));
  _0x3d74cf.save.addEventListener("click", async () => {
    _0x3d74cf.save.disabled = true;
    try {
      const _0x4f4e84 = await fetch("/api/balance-config", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_0x3d6fd3)
      });
      const _0x452a8e = await _0x4f4e84.json().catch(() => ({}));
      if (!_0x4f4e84.ok) {
        throw new Error(_0x452a8e.error || "保存失败");
      }
      _0x3d74cf.dirty.hidden = true;
      _0x3d74cf.status.textContent = "配置已保存到 balance-config.json，游戏将使用新数值。";
    } catch (_0x35089c) {
      _0x3d74cf.status.textContent = _0x35089c.message + "。当前配置仍可导出为 JSON。";
    } finally {
      _0x3d74cf.save.disabled = false;
    }
  });
  const _0x1c6c1c = async () => {
    if (!_0x4398fc) {
      _0x3d6fd3 = await async function () {
        try {
          const _0x29b4bf = await fetch("/api/balance-config");
          if (!_0x29b4bf.ok) {
            throw new Error("配置接口不可用");
          }
          return _0x29b4bf.json();
        } catch {
          return o(_0x254de1);
        }
      }();
      _0x4398fc = true;
      _0x45ca82();
      _0x3d74cf.economySettings.innerHTML = "<label>拆除返还比例<input type=\"number\" min=\"0\" max=\"1\" step=\"0.05\" value=\"" + _0x3d6fd3.economy.towerRefundRate + "\"></label><div class=\"level-enemy-scales\"><header><b>拆除经济</b><span>返还按实际购买价格计算，奇数金币向下取整。</span></header></div>";
      _0x3d74cf.economySettings.querySelector("input").addEventListener("change", _0x570d6d => {
        _0x3d6fd3.economy.towerRefundRate = Math.min(1, Math.max(0, Number(_0x570d6d.target.value)));
        _0x570d6d.target.value = _0x3d6fd3.economy.towerRefundRate;
        _0x56ac4b();
      });
      _0xcebfaf("towers");
      _0xcebfaf("enemies");
      _0x4a4fd4();
    }
  };
  if ((_0x3e0783 = _0x3d74cf.open) != null) {
    _0x3e0783.addEventListener("click", async () => {
      _0x3d74cf.panel.hidden = false;
      document.body.classList.add("lab-open");
      await _0x1c6c1c();
    });
  }
  if (_0x3d74cf.panel.dataset.standalone !== undefined) {
    document.body.classList.add("lab-open");
    _0x1c6c1c();
  } else if ((_0x55349b = _0x3d74cf.close) != null) {
    _0x55349b.addEventListener("click", () => {
      _0x3d74cf.panel.hidden = true;
      document.body.classList.remove("lab-open");
    });
  }
})();