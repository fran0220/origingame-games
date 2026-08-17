'use strict';

const assert = require("node:assert/strict");
const agent = require("./balance-agent.js");
const runtime = {
  mapCoefficients: [1],
  startingCoins: [825],
  difficultyCoefficients: {
    easy: 0.8,
    normal: 1,
    hard: 1.35
  },
  hardMapPressure: [1.1],
  nextWaveEconomy: {
    MAX_REWARD: 25
  },
  towerEconomy: {
    "arc-neon": {
      name: "Arc",
      cost: 110,
      accent: "#20f4e6"
    },
    "drone-hive": {
      name: "Drone",
      cost: 135,
      accent: "#ffffff"
    },
    "hacker-relay": {
      name: "Hacker",
      cost: 115,
      accent: "#79ff9e"
    },
    "mag-rail-sniper": {
      name: "Rail",
      cost: 130,
      accent: "#34c9ff"
    },
    "street-mercenary": {
      name: "Mercenary",
      cost: 100,
      accent: "#c99245"
    }
  },
  towerCombat: {
    "arc-neon": {
      ranges: [112, 124, 136],
      cooldown: 1.05,
      chainDamage: [38, 30, 22],
      chainDistance: 65,
      wetBonus: 0.2,
      damageScale: [1, 1.32, 1.68]
    },
    "drone-hive": {
      ranges: [175, 195, 215],
      cooldown: 0.75,
      drones: 2,
      damage: 24,
      flyingBonus: 0.35,
      pursuit: 30,
      damageScale: [1, 1.3, 1.68]
    },
    "hacker-relay": {
      ranges: [145, 160, 175],
      cooldown: 2.4,
      slow: 0.18,
      vulnerability: 0.12,
      duration: 2.8,
      damage: 4
    },
    "mag-rail-sniper": {
      ranges: [220, 240, 260],
      cooldown: 1.7,
      damage: 100,
      armorPenetration: 0.35,
      blindSpot: 55,
      damageScale: [1, 1.38, 1.82]
    },
    "street-mercenary": {
      ranges: [85, 95, 105],
      mercenaryCount: 2,
      mercenaryHealth: 190,
      damage: 20,
      cooldown: 0.85,
      blockRange: 32,
      respawn: 8,
      healthScale: [1, 1.28, 1.6],
      damageScale: [1, 1.3, 1.65]
    }
  },
  enemyTypes: {
    gang: {
      hp: 180,
      speed: 28,
      armor: 0,
      reward: 18,
      attack: 12
    },
    riot: {
      hp: 900,
      speed: 15,
      armor: 0.45,
      reward: 58,
      attack: 22,
      mechanical: true
    },
    ninja: {
      hp: 260,
      speed: 40,
      armor: 0,
      reward: 30,
      attack: 18,
      phase: true
    },
    aerostat: {
      hp: 500,
      speed: 28,
      armor: 0.2,
      reward: 46,
      attack: 0,
      air: true
    },
    devourer: {
      hp: 360,
      shield: 200,
      speed: 24,
      armor: 0,
      reward: 48,
      attack: 16,
      network: true
    }
  },
  bossTypes: {
    enforcer: {
      hp: 18000,
      speed: 10,
      armor: 0.25,
      reward: 900,
      attack: 80,
      boss: true,
      components: ["Shield", "Missiles", "Drive"],
      componentHp: 2200
    },
    eve: {
      hp: 24000,
      speed: 0,
      armor: 0.12,
      reward: 1200,
      attack: 100,
      boss: true
    }
  },
  buildWavePlan: _0x2f8221 => ["gang", "gang", _0x2f8221 >= 2 ? "riot" : "gang", _0x2f8221 >= 3 ? "ninja" : "gang", _0x2f8221 >= 4 ? "aerostat" : "gang"].map((_0x5b1ee4, _0x2c885b) => ({
    type: _0x5b1ee4,
    boss: false,
    lane: _0x2c885b % 2 ? "right" : "left",
    delay: 0.72
  }))
};
const map = {
  name: "Test Map",
  slots: [{
    x: 20,
    y: 42
  }, {
    x: 30,
    y: 58
  }, {
    x: 40,
    y: 42
  }, {
    x: 50,
    y: 58
  }, {
    x: 60,
    y: 42
  }, {
    x: 70,
    y: 58
  }, {
    x: 80,
    y: 42
  }, {
    x: 35,
    y: 36
  }, {
    x: 55,
    y: 64
  }, {
    x: 75,
    y: 36
  }],
  entries: {
    left: [{
      x: 0,
      y: 45
    }, {
      x: 25,
      y: 45
    }, {
      x: 45,
      y: 50
    }],
    right: [{
      x: 0,
      y: 55
    }, {
      x: 25,
      y: 55
    }, {
      x: 45,
      y: 50
    }]
  },
  shared: [{
    x: 45,
    y: 50
  }, {
    x: 70,
    y: 50
  }, {
    x: 90,
    y: 50
  }],
  exits: {
    left: [{
      x: 90,
      y: 50
    }, {
      x: 100,
      y: 49
    }],
    right: [{
      x: 90,
      y: 50
    }, {
      x: 100,
      y: 51
    }]
  }
};
const baseOptions = {
  maps: [map],
  mapIndex: 0,
  difficulty: "normal",
  strategy: "adaptive",
  waves: 4,
  seed: "deterministic-test",
  growthBonuses: {}
};
const geometry = agent.buildMapGeometry(map);
const midpoint = agent.routePoint(geometry, 500, "left");
assert.ok(Number.isFinite(midpoint.x) && Number.isFinite(midpoint.y), "route geometry returns finite points");
const phaseNinja = {
  type: runtime.enemyTypes.ninja,
  spawnTime: 0,
  revealedUntil: 0,
  dead: false
};
assert.equal(agent.canMercenaryIntercept(phaseNinja, 0.5), false, "phase ninja cannot be intercepted during phase");
assert.equal(agent.canMercenaryIntercept(phaseNinja, 1.1), true, "phase ninja can be intercepted after phase");
phaseNinja.revealedUntil = 2;
assert.equal(agent.canMercenaryIntercept(phaseNinja, 0.5), true, "hacker reveal restores interception during the phase window");
const first = agent.simulateCampaign(runtime, baseOptions);
const second = agent.simulateCampaign(runtime, baseOptions);
assert.deepEqual(first, second, "the same seed produces the same campaign report");
assert.equal(first.towers.length, 5, "all tower archetypes are represented in the report");
assert.ok(first.waves[0].coinsBefore <= 825, "campaign uses the configured starting economy");
assert.ok(first.waves.length >= 1 && first.waves.length <= 4, "campaign returns bounded wave results");
const easy = agent.aggregateScenario(runtime, {
  ...baseOptions,
  difficulty: "easy",
  runs: 8
});
const hard = agent.aggregateScenario(runtime, {
  ...baseOptions,
  difficulty: "hard",
  runs: 8
});
assert.ok(hard.averageHealth <= easy.averageHealth, "hard difficulty cannot outperform easy on average health");
assert.ok(hard.clearRate <= easy.clearRate, "hard difficulty cannot outperform easy on clear rate");
(async () => {
  const _0x10aabc = await agent.runSuite(runtime, {
    ...baseOptions,
    mapIndexes: [0],
    difficulties: ["easy", "normal", "hard"],
    runs: 3
  });
  assert.equal(_0x10aabc.scenarios.length, 3, "suite creates every requested scenario");
  assert.ok(_0x10aabc.score >= 0 && _0x10aabc.score <= 100, "balance score stays within bounds");
  assert.ok(_0x10aabc.findings.length > 0, "suite always emits a diagnosis");
  console.log("balance-agent tests passed");
})().catch(_0x43622b => {
  console.error(_0x43622b);
  process.exitCode = 1;
});