(() => {
  'use strict';

  const _0x20a48b = window.BalanceAgent;
  const _0xe30395 = window.balanceRuntime;
  const _0x362802 = window.mapLevels;
  if (!_0x20a48b || !_0xe30395 || !Array.isArray(_0x362802)) {
    console.warn("Balance agent dependencies are unavailable.");
    return;
  }
  const _0x5e165c = {
    form: document.querySelector("#balance-controls"),
    map: document.querySelector("#balance-map"),
    difficulty: document.querySelector("#balance-difficulty"),
    strategy: document.querySelector("#balance-strategy"),
    waves: document.querySelector("#balance-waves"),
    runs: document.querySelector("#balance-runs"),
    run: document.querySelector("#balance-run"),
    status: document.querySelector("#balance-status"),
    progress: document.querySelector("#balance-progress"),
    results: document.querySelector("#balance-results")
  };
  const _0x396b3f = {
    easy: "简单",
    normal: "普通",
    hard: "困难"
  };
  const _0xebf46b = {
    ok: "#79ff9e",
    warning: "#ffd23f",
    critical: "#ff3ea5"
  };
  let _0x306394 = null;
  function _0x33f8da() {
    return Math.max(0, Math.min(_0x362802.length - 1, Number(document.querySelector("#map-select")?.value) || 0));
  }
  function _0x585617() {
    const _0x124163 = _0x33f8da();
    _0x5e165c.map.replaceChildren();
    const _0x1abe55 = document.createElement("option");
    _0x1abe55.value = "current";
    _0x1abe55.textContent = "当前关卡 · " + _0x362802[_0x124163].name;
    _0x5e165c.map.append(_0x1abe55);
    const _0x38d476 = document.createElement("option");
    _0x38d476.value = "all";
    _0x38d476.textContent = "全部关卡";
    _0x5e165c.map.append(_0x38d476);
    _0x362802.forEach((_0x2f4cfe, _0x2fe2b3) => {
      const _0xd4266a = document.createElement("option");
      _0xd4266a.value = String(_0x2fe2b3);
      _0xd4266a.textContent = String(_0x2fe2b3 + 1).padStart(2, "0") + " · " + _0x2f4cfe.name;
      _0x5e165c.map.append(_0xd4266a);
    });
  }
  function _0xecca98(_0x573c14) {
    return Math.round(_0x573c14 * 100) + "%";
  }
  function _0x203e06(_0x2caad2, _0x511ef5) {
    return _0x2caad2.reduce((_0x1b6939, _0x99a084) => _0x1b6939 + _0x99a084[_0x511ef5], 0) / Math.max(1, _0x2caad2.length);
  }
  function _0x5d9989(_0x5be241) {
    return String(_0x5be241).replace(/[&<>'"]/g, _0x264e3c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      "\"": "&quot;"
    })[_0x264e3c]);
  }
  function _0x345d72() {
    const _0x26845e = _0x5e165c.map.value;
    const _0x15db36 = _0x26845e === "all" ? _0x362802.map((_0x3dd948, _0x2d7454) => _0x2d7454) : [_0x26845e === "current" ? _0x33f8da() : Number(_0x26845e)];
    const _0x5eddbc = _0x5e165c.difficulty.value === "all" ? ["easy", "normal", "hard"] : [_0x5e165c.difficulty.value];
    return {
      maps: _0x362802,
      mapIndexes: _0x15db36,
      difficulties: _0x5eddbc,
      strategy: _0x5e165c.strategy.value,
      waves: Math.max(1, Math.min(30, Math.round(Number(_0x5e165c.waves.value) || 10))),
      waveCounts: _0x26845e === "all" ? window.campaignWaveCounts : null,
      runs: Math.max(1, Math.min(200, Math.round(Number(_0x5e165c.runs.value) || 30))),
      seed: "neon-defense-player-agent-v1",
      growthBonuses: Object.fromEntries(_0x20a48b.TOWER_IDS.map(_0x270dee => [_0x270dee, window.towerGrowthBonuses?.(_0x270dee) || {
        damage: 1,
        range: 1
      }]))
    };
  }
  async function _0x7ae606(_0x542100 = _0x345d72()) {
    _0x5e165c.run.disabled = true;
    _0x5e165c.status.textContent = "RUNNING // 代理计算中";
    _0x5e165c.progress.style.setProperty("--progress", "0%");
    const _0xb73c8d = Date.now();
    try {
      const _0x339fd6 = await _0x20a48b.runSuite(_0xe30395, _0x542100, {
        onProgress({
          completed: _0x33f821,
          total: _0x3cbd8b,
          scenario: _0x36838b
        }) {
          _0x5e165c.progress.style.setProperty("--progress", _0x33f821 / _0x3cbd8b * 100 + "%");
          _0x5e165c.status.textContent = "RUNNING " + _0x33f821 + "/" + _0x3cbd8b + " // " + _0x36838b.mapName;
        }
      });
      _0x306394 = _0x339fd6;
      window.neonBalanceReport = _0x339fd6;
      (function (_0x271acc) {
        const _0x1bfcc4 = _0x203e06(_0x271acc.scenarios, "clearRate");
        const _0x2e0565 = _0x203e06(_0x271acc.scenarios, "averageHealth");
        const _0x8eca9a = _0x203e06(_0x271acc.scenarios, "averageLeaks");
        const _0x4584a8 = _0x20a48b.TOWER_IDS.map(_0x1ae34c => {
          const _0xf27a58 = _0xe30395.towerEconomy[_0x1ae34c];
          const _0x42e16d = _0x271acc.towerShares[_0x1ae34c] || 0;
          return "\n        <div class=\"impact-row\">\n          <span>" + _0x5d9989(_0xf27a58.name) + "</span>\n          <span class=\"impact-track\"><i style=\"--impact:" + Math.max(1, _0x42e16d * 100) + "%;--impact-color:" + _0xf27a58.accent + "\"></i></span>\n          <b>" + _0xecca98(_0x42e16d) + "</b>\n        </div>";
        }).join("");
        const _0x5c08a5 = _0x271acc.scenarios.map(_0x3bf2a2 => "\n      <tr data-state=\"" + function (_0x63d7f4) {
          const [_0x48c4c7, _0x195293] = {
            easy: [0.65, 0.99],
            normal: [0.4, 0.79],
            hard: [0.1, 0.49]
          }[_0x63d7f4.difficulty];
          if (_0x63d7f4.clearRate < _0x48c4c7 * 0.55) {
            return "critical";
          } else if (_0x63d7f4.clearRate < _0x48c4c7 || _0x63d7f4.clearRate > _0x195293) {
            return "warning";
          } else {
            return "ok";
          }
        }(_0x3bf2a2) + "\">\n        <td>" + _0x5d9989(_0x3bf2a2.mapName) + "</td>\n        <td>" + _0x396b3f[_0x3bf2a2.difficulty] + "</td>\n        <td><b>" + _0xecca98(_0x3bf2a2.clearRate) + "</b></td>\n        <td>" + _0x3bf2a2.averageHealth.toFixed(1) + "</td>\n        <td>" + _0x3bf2a2.averageLeaks.toFixed(1) + "</td>\n        <td>" + _0x3bf2a2.averageCoins.toFixed(0) + " G</td>\n        <td>" + _0x3bf2a2.p90WaveDuration.toFixed(1) + "s</td>\n      </tr>").join("");
        const _0x647bb2 = _0x271acc.findings.map(_0x23a693 => "\n      <div class=\"balance-finding\" style=\"--finding-color:" + (_0xebf46b[_0x23a693.severity] || _0xebf46b.warning) + "\">" + _0x5d9989(_0x23a693.text) + "</div>").join("");
        _0x5e165c.results.innerHTML = "\n      <section class=\"balance-summary\" aria-label=\"测试摘要\">\n        <div class=\"balance-score\" style=\"--metric-accent:" + (_0x271acc.score >= 85 ? "#79ff9e" : _0x271acc.score >= 65 ? "#ffd23f" : "#ff3ea5") + "\">\n          <span>BALANCE SCORE</span><strong>" + _0x271acc.score + "<em>" + _0x271acc.verdict + "</em></strong>\n        </div>\n        <div class=\"balance-metric\"><span>平均通关率</span><strong>" + _0xecca98(_0x1bfcc4) + "</strong></div>\n        <div class=\"balance-metric\" style=\"--metric-accent:#ff3ea5\"><span>平均剩余血量</span><strong>" + _0x2e0565.toFixed(1) + " / 10</strong></div>\n        <div class=\"balance-metric\" style=\"--metric-accent:#ffd23f\"><span>平均漏怪</span><strong>" + _0x8eca9a.toFixed(1) + "</strong></div>\n      </section>\n      <div class=\"balance-grid\">\n        <section class=\"balance-block\">\n          <h3>场景矩阵</h3>\n          <div class=\"balance-table-wrap\">\n            <table class=\"balance-table\">\n              <thead><tr><th>关卡</th><th>难度</th><th>通关率</th><th>血量</th><th>漏怪</th><th>金币</th><th>P90波长</th></tr></thead>\n              <tbody>" + _0x5c08a5 + "</tbody>\n            </table>\n          </div>\n        </section>\n        <div class=\"balance-results-side\">\n          <section class=\"balance-block\">\n            <h3>塔楼战术贡献</h3>\n            <div class=\"tower-impact\">" + _0x4584a8 + "</div>\n          </section>\n          <section class=\"balance-block\">\n            <h3>诊断</h3>\n            <div class=\"balance-findings\">" + _0x647bb2 + "</div>\n          </section>\n        </div>\n      </div>\n      <div class=\"balance-actions\"><button class=\"balance-export\" id=\"balance-export\" type=\"button\">导出 JSON 报告</button></div>";
        document.querySelector("#balance-export")?.addEventListener("click", () => {
          const _0x112638 = new Blob([JSON.stringify(_0x306394, null, 2)], {
            type: "application/json"
          });
          const _0x5def40 = URL.createObjectURL(_0x112638);
          const _0x585c7b = document.createElement("a");
          _0x585c7b.href = _0x5def40;
          _0x585c7b.download = "neon-defense-balance-" + new Date().toISOString().slice(0, 10) + ".json";
          _0x585c7b.click();
          setTimeout(() => URL.revokeObjectURL(_0x5def40), 1000);
        });
      })(_0x339fd6);
      _0x5e165c.status.textContent = "COMPLETE // " + _0x339fd6.scenarios.length + " 场景 · " + ((Date.now() - _0xb73c8d) / 1000).toFixed(1) + "s";
      return _0x339fd6;
    } catch (_0x5bbb49) {
      console.error("Balance agent failed.", _0x5bbb49);
      _0x5e165c.status.textContent = "ERROR // 测试失败";
      _0x5e165c.results.innerHTML = "<div class=\"balance-empty\">ERROR // " + _0x5d9989(_0x5bbb49.message) + "</div>";
      throw _0x5bbb49;
    } finally {
      _0x5e165c.run.disabled = false;
    }
  }
  _0x5e165c.form.addEventListener("submit", _0x2c602c => {
    _0x2c602c.preventDefault();
    _0x7ae606().catch(() => {});
  });
  document.querySelector("[data-command-tab=\"balance\"]")?.addEventListener("click", _0x585617);
  _0x585617();
  window.playerBalanceAgent = {
    run: _0x7ae606,
    readOptions: _0x345d72,
    get lastReport() {
      return _0x306394;
    }
  };
})();