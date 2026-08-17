'use strict';

const fs = require("node:fs");
const path = require("node:path");
const {
  chromium: chromium
} = require("playwright");
const targetUrl = process.argv[2] || "http://127.0.0.1:8766/";
const outputPath = path.resolve(process.argv[3] || "balance-reports/campaign-full-" + new Date().toISOString().slice(0, 10) + ".json");
const runs = Math.max(10, Math.min(200, Math.round(Number(process.argv[4]) || 30)));
async function main() {
  const _0x50969e = await chromium.launch({
    headless: true,
    executablePath: process.env.PLAYWRIGHT_CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });
  const _0x55733d = await _0x50969e.newPage({
    viewport: {
      width: 1440,
      height: 1000
    }
  });
  await _0x55733d.goto(targetUrl, {
    waitUntil: "networkidle"
  });
  await _0x55733d.waitForFunction(() => window.BalanceAgent && window.balanceRuntime && window.mapLevels);
  const _0x1914f5 = await _0x55733d.evaluate(async _0x5980f9 => {
    const _0x5db663 = window.BalanceAgent;
    const _0x5cf730 = window.balanceRuntime;
    const _0x4d4ffa = window.mapLevels;
    const _0x4e912b = window.campaignWaveCounts;
    const _0xe3756d = [1, 1.18, 1.38, 1.62, 1.9, 2.25];
    const _0x8af8e4 = ["adaptive", "offense", "defense"];
    const _0x3d382d = ["easy", "normal", "hard"];
    const _0x11d3c9 = {
      baseline: Object.fromEntries(_0x5db663.TOWER_IDS.map(_0x4589e6 => [_0x4589e6, {
        damage: 1,
        range: 1
      }])),
      veteran: Object.fromEntries(_0x5db663.TOWER_IDS.map(_0x8e8bd2 => [_0x8e8bd2, {
        damage: 1.18,
        range: 1.09
      }]))
    };
    const _0x563ba2 = [];
    for (const [_0x35e7c3, _0x5c6a63] of Object.entries(_0x11d3c9)) {
      for (const _0x5a9570 of _0x8af8e4) {
        for (let _0x472a7f = 0; _0x472a7f < _0x4d4ffa.length; _0x472a7f += 1) {
          for (const _0x1235e3 of _0x3d382d) {
            const _0x1bd108 = _0x5db663.aggregateScenario(_0x5cf730, {
              maps: _0x4d4ffa,
              mapIndex: _0x472a7f,
              difficulty: _0x1235e3,
              strategy: _0x5a9570,
              waves: _0x4e912b[_0x472a7f],
              runs: _0x5980f9,
              seed: "campaign-audit-v3:" + _0x35e7c3 + ":" + _0x5a9570,
              growthBonuses: _0x5c6a63
            });
            _0x563ba2.push({
              ..._0x1bd108,
              strategy: _0x5a9570,
              growthProfile: _0x35e7c3
            });
            await new Promise(_0x36ee59 => setTimeout(_0x36ee59, 0));
          }
        }
      }
    }
    const _0x579b61 = _0x4d4ffa.map((_0x33766e, _0x370e26) => {
      const _0x2e6fca = _0x563ba2.filter(_0x1fe6c4 => _0x1fe6c4.mapIndex === _0x370e26);
      const _0x3bdf83 = _0x2e6fca.filter(_0x58f941 => _0x58f941.growthProfile === "baseline");
      const _0x429c5a = _0x2e6fca.filter(_0x48876a => _0x48876a.growthProfile === "veteran");
      const _0x2fbe74 = _0x2e6fca.filter(_0x54a29b => _0x54a29b.difficulty === "hard");
      const _0x3d8ba5 = _0x3bdf83.filter(_0x320f7f => _0x320f7f.difficulty === "hard");
      const _0x2e4012 = _0x429c5a.filter(_0x17b7ba => _0x17b7ba.difficulty === "hard");
      const _0x2fac25 = (_0x5c3aed, _0x1dcc66) => _0x5c3aed.reduce((_0x6d4d36, _0xa84897) => _0x6d4d36 + _0xa84897[_0x1dcc66], 0) / Math.max(1, _0x5c3aed.length);
      const _0x132a57 = _0x3bdf83.filter(_0x502c77 => _0x502c77.difficulty === "normal");
      return {
        mapIndex: _0x370e26,
        mapName: _0x33766e.name,
        waves: _0x4e912b[_0x370e26],
        threatLevel: _0xe3756d[_0x370e26],
        hpCalibration: _0x5cf730.mapCoefficients[_0x370e26],
        startingCoins: _0x5cf730.startingCoins[_0x370e26],
        extraEnemiesPerWave: _0x5cf730.lateMapBonuses[_0x370e26],
        totalEnemies: _0x3bdf83[0]?.enemyCount || 0,
        baselineClearRate: _0x2fac25(_0x3bdf83, "clearRate"),
        veteranClearRate: _0x2fac25(_0x429c5a, "clearRate"),
        normalBaselineClearRate: _0x2fac25(_0x132a57, "clearRate"),
        hardClearRate: _0x2fac25(_0x2fbe74, "clearRate"),
        hardBaselineClearRate: _0x2fac25(_0x3d8ba5, "clearRate"),
        hardVeteranClearRate: _0x2fac25(_0x2e4012, "clearRate"),
        averageLeaks: _0x2fac25(_0x3bdf83, "averageLeaks"),
        averageRemainingHealth: _0x2fac25(_0x3bdf83, "averageHealth"),
        p90WaveDuration: Math.max(..._0x3bdf83.map(_0x5b154b => _0x5b154b.p90WaveDuration))
      };
    });
    const _0x204f00 = _0x579b61.map(_0x157170 => _0x157170.normalBaselineClearRate);
    const _0x21a8ad = _0x204f00.every((_0x46fac3, _0x1fe18c) => _0x1fe18c === 0 || _0x46fac3 <= _0x204f00[_0x1fe18c - 1] + 0.03);
    const _0x32458f = _0x563ba2.filter(_0x159b3e => _0x159b3e.mapIndex === 5).flatMap(_0xd49610 => [5, 10].map(_0x23b236 => {
      const _0x476981 = _0xd49610.waveStats[_0x23b236 - 1];
      const _0x17a962 = _0xd49610.waveStats[_0x23b236 - 2];
      return {
        strategy: _0xd49610.strategy,
        difficulty: _0xd49610.difficulty,
        growthProfile: _0xd49610.growthProfile,
        wave: _0x23b236,
        reachRate: _0x476981?.reachRate || 0,
        clearRate: _0x476981?.clearRate || 0,
        dropFromPrevious: Math.max(0, (_0x17a962?.clearRate || 0) - (_0x476981?.clearRate || 0))
      };
    }));
    const _0x3ed1c7 = Object.fromEntries(_0x5db663.TOWER_IDS.map(_0x46950b => [_0x46950b, 0]));
    _0x563ba2.forEach(_0x2f247d => _0x2f247d.towerTotals.forEach(_0x22f48b => {
      _0x3ed1c7[_0x22f48b.typeId] += _0x22f48b.impact;
    }));
    const _0x4b05b5 = Object.values(_0x3ed1c7).reduce((_0x33c679, _0x2b2ae0) => _0x33c679 + _0x2b2ae0, 0) || 1;
    const _0x486e1e = Object.fromEntries(Object.entries(_0x3ed1c7).map(([_0x5d1f5c, _0x5b3c4d]) => [_0x5d1f5c, _0x5b3c4d / _0x4b05b5]));
    return {
      version: 3,
      generatedAt: new Date().toISOString(),
      matrix: {
        maps: _0x4d4ffa.length,
        difficulties: _0x3d382d,
        strategies: _0x8af8e4,
        growthProfiles: Object.keys(_0x11d3c9),
        runsPerScenario: _0x5980f9,
        scenarioCount: _0x563ba2.length,
        totalCampaignSimulations: _0x563ba2.length * _0x5980f9
      },
      configuration: {
        mapCoefficients: _0x5cf730.mapCoefficients,
        threatLevels: _0xe3756d,
        lateMapBonuses: _0x5cf730.lateMapBonuses,
        startingCoins: _0x5cf730.startingCoins,
        waveCounts: _0x4e912b,
        difficultyCoefficients: _0x5cf730.difficultyCoefficients,
        hardMapPressure: _0x5cf730.hardMapPressure
      },
      checks: {
        threatLevelsStrictlyIncrease: _0xe3756d.every((_0x38dbbe, _0x5f4104, _0x2888dd) => _0x5f4104 === 0 || _0x38dbbe > _0x2888dd[_0x5f4104 - 1]),
        lateMapsAllStrengthened: _0x5cf730.lateMapBonuses.slice(3).every(_0x5a4345 => _0x5a4345 > 0),
        normalBaselinePressureMonotonic: _0x21a8ad,
        normalBaselineClearCurve: _0x204f00,
        hardClearRates: _0x579b61.map(_0x2fb012 => _0x2fb012.hardClearRate),
        allHardMapsBelowFiftyPercent: _0x579b61.every(_0x3a9a8f => _0x3a9a8f.hardClearRate < 0.5),
        maximumBossWaveDrop: Math.max(..._0x32458f.map(_0x434357 => _0x434357.dropFromPrevious)),
        towerShares: _0x486e1e
      },
      campaignSummary: _0x579b61,
      bossSpikes: _0x32458f,
      scenarios: _0x563ba2
    };
  }, runs);
  fs.mkdirSync(path.dirname(outputPath), {
    recursive: true
  });
  fs.writeFileSync(outputPath, JSON.stringify(_0x1914f5, null, 2) + "\n");
  await _0x55733d.screenshot({
    path: path.join(path.dirname(outputPath), "campaign-balance-ui.png"),
    fullPage: true
  });
  await _0x50969e.close();
  process.stdout.write(JSON.stringify({
    outputPath: outputPath,
    matrix: _0x1914f5.matrix,
    checks: _0x1914f5.checks,
    campaignSummary: _0x1914f5.campaignSummary
  }, null, 2) + "\n");
}
main().catch(_0x381a4b => {
  console.error(_0x381a4b);
  process.exitCode = 1;
});