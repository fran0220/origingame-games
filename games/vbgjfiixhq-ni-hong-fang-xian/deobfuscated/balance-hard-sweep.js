'use strict';

const {
  chromium: chromium
} = require("playwright");
const targetUrl = process.argv[2] || "http://127.0.0.1:8765/";
const runs = Math.max(5, Math.min(100, Math.round(Number(process.argv[3]) || 10)));
const candidates = (process.argv[4] || "1.15,1.25,1.35,1.45,1.55,1.65").split(",").map(Number).filter(Number.isFinite);
async function main() {
  const _0x2dc894 = await chromium.launch({
    headless: true,
    executablePath: process.env.PLAYWRIGHT_CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });
  const _0x36d7e2 = await _0x2dc894.newPage({
    viewport: {
      width: 1280,
      height: 800
    }
  });
  await _0x36d7e2.goto(targetUrl, {
    waitUntil: "networkidle"
  });
  await _0x36d7e2.waitForFunction(() => window.BalanceAgent && window.balanceRuntime && window.mapLevels);
  const _0x279a3b = await _0x36d7e2.evaluate(async ({
    sampleRuns: _0x37be2,
    values: _0x40c6c3
  }) => {
    const _0x946dd = window.BalanceAgent;
    const _0x4fd337 = window.balanceRuntime;
    const _0x31d797 = window.mapLevels;
    const _0x12f1ec = window.campaignWaveCounts;
    const _0xe55105 = ["adaptive", "offense", "defense"];
    const _0x45bc4b = {
      baseline: Object.fromEntries(_0x946dd.TOWER_IDS.map(_0x89736c => [_0x89736c, {
        damage: 1,
        range: 1
      }])),
      veteran: Object.fromEntries(_0x946dd.TOWER_IDS.map(_0x31450f => [_0x31450f, {
        damage: 1.18,
        range: 1.09
      }]))
    };
    const _0x2e50f1 = _0x4fd337.difficultyCoefficients.hard;
    const _0x5645fa = [];
    for (const _0x3ab220 of _0x40c6c3) {
      _0x4fd337.difficultyCoefficients.hard = _0x3ab220;
      const _0x17a61d = _0x31d797.map(() => []);
      for (const [_0x2fadd7, _0x55e3a4] of Object.entries(_0x45bc4b)) {
        for (const _0x99dac8 of _0xe55105) {
          for (let _0x1a4753 = 0; _0x1a4753 < _0x31d797.length; _0x1a4753 += 1) {
            const _0x1548c0 = _0x946dd.aggregateScenario(_0x4fd337, {
              maps: _0x31d797,
              mapIndex: _0x1a4753,
              difficulty: "hard",
              strategy: _0x99dac8,
              waves: _0x12f1ec[_0x1a4753],
              runs: _0x37be2,
              seed: "hard-sweep:" + _0x2fadd7 + ":" + _0x99dac8,
              growthBonuses: _0x55e3a4
            });
            _0x17a61d[_0x1a4753].push(_0x1548c0.clearRate);
            await new Promise(_0x28f25d => setTimeout(_0x28f25d, 0));
          }
        }
      }
      const _0xfb9e8a = _0x17a61d.map(_0x42f4be => _0x42f4be.reduce((_0x2243fd, _0x253b32) => _0x2243fd + _0x253b32, 0) / _0x42f4be.length);
      _0x5645fa.push({
        coefficient: _0x3ab220,
        campaignClearRate: _0xfb9e8a.reduce((_0x59a901, _0x4aa7c4) => _0x59a901 + _0x4aa7c4, 0) / _0xfb9e8a.length,
        maximumMapClearRate: Math.max(..._0xfb9e8a),
        mapClearRates: _0xfb9e8a
      });
    }
    _0x4fd337.difficultyCoefficients.hard = _0x2e50f1;
    return _0x5645fa;
  }, {
    sampleRuns: runs,
    values: candidates
  });
  await _0x2dc894.close();
  process.stdout.write(JSON.stringify({
    runs: runs,
    candidates: _0x279a3b
  }, null, 2) + "\n");
}
main().catch(_0x506773 => {
  console.error(_0x506773);
  process.exitCode = 1;
});