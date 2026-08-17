'use strict';

const assert = require("node:assert/strict");
const fs = require("node:fs");
const gameplay = fs.readFileSync("gameplay.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");
const demo = fs.readFileSync("auto-demo.js", "utf8");
assert.match(gameplay, /const mapCoefficients = \[1\.3, 1\.1, 1\.45, 1\.5, 1\.6, \.8\]/);
assert.match(gameplay, /const lateMapBonuses = \[0, 0, 0, 2, 2, 2\]/);
assert.match(gameplay, /const startingCoins = \[700, 725, 750, 850, 1100, 1500\]/);
assert.match(gameplay, /const rewardScales = \[1, 1, 1, 1, \.55, \.3\]/);
assert.match(gameplay, /easy: \[1\.8, 1\.6, 1\.65, 1\.55, 1\.5, 1\.55\]/);
assert.match(gameplay, /normal: \[1\.28, 1\.25, 1\.26, 1\.1, 1\.05, 1\.4\]/);
assert.match(gameplay, /hard: \[1\.22, 1\.22, 1\.13, 1\.06, 1, 1\.27\]/);
assert.match(html, /const campaignStartingCoins = \[700, 725, 750, 850, 1100, 1500\]/);
assert.match(demo, /game\.setDifficulty\?\.\('normal'\)/);
assert.match(gameplay, /setDifficulty: nextDifficulty =>/);
assert.match(gameplay, /coins \+= scaledReward\(enemy\.reward\)/);
console.log("late-level balance configuration verified");