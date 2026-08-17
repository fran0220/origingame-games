'use strict';

const assert = require("node:assert/strict");
const economy = require("./wave-economy.js");
assert.equal(economy.earlyWaveReward(0), 0, "expired countdown gives no reward");
assert.equal(economy.earlyWaveReward(-1), 0, "negative countdown gives no reward");
assert.equal(economy.earlyWaveReward(economy.COUNTDOWN_SECONDS), economy.MAX_REWARD, "immediate call gives the maximum reward");
assert.equal(economy.earlyWaveReward(6), 13, "half countdown gives a proportional reward");
assert.equal(economy.earlyWaveReward(0.2), economy.MIN_REWARD, "a valid late call gives the minimum reward");
let previous = 0;
for (let e = 0.25; e <= economy.COUNTDOWN_SECONDS; e += 0.25) {
  const a = economy.earlyWaveReward(e);
  assert.ok(a >= previous, "reward must increase with remaining preparation time");
  previous = a;
}
console.log("next-wave economy tests passed");