'use strict';

const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const BalanceAgent = require("./balance-agent.js");
const html = fs.readFileSync(new URL("./index.html", "file://" + __dirname + "/"), "utf8");
const marker = "const mapLevels = ";
const start = html.indexOf(marker) + 18;
const end = html.indexOf("\n    window.mapLevels = mapLevels;", start);
const maps = vm.runInNewContext(html.slice(start, end).trim().replace(/;$/, ""));
const verticalWorldRadius = BalanceAgent.RANGE_PROJECTION_Y * 220;
const projectedScreenRadius = verticalWorldRadius / 1000 * 941;
const displayedScreenRadius = 228.06079999999997;
function worldDistance(_0x1ae885, _0x475d6a) {
  return Math.hypot(_0x1ae885.x - _0x475d6a.x, (_0x1ae885.y - _0x475d6a.y) / BalanceAgent.RANGE_PROJECTION_Y);
}
function nearestRouteDistance(_0x1be507, _0x5e58b4) {
  const _0x5d8fc4 = {
    x: _0x5e58b4.x * 10,
    y: _0x5e58b4.y * 10
  };
  let _0x22536b = Infinity;
  for (const _0xa2f292 of ["left", "right"]) {
    for (let _0x2c44b8 = 0; _0x2c44b8 <= 1000; _0x2c44b8 += 1) {
      _0x22536b = Math.min(_0x22536b, worldDistance(_0x5d8fc4, BalanceAgent.routePoint(_0x1be507, _0x2c44b8, _0xa2f292)));
    }
  }
  return _0x22536b;
}
assert.equal(Math.abs(projectedScreenRadius - 228.06079999999997) < 1e-9, true, "range display and hit projection must match");
maps.forEach(_0x34eb42 => {
  const _0x4e6d43 = BalanceAgent.buildMapGeometry(_0x34eb42);
  const _0x4ce710 = _0x34eb42.slots.map((_0x3d49d3, _0x1870c6) => ({
    slot: _0x1870c6 + 1,
    distance: nearestRouteDistance(_0x4e6d43, _0x3d49d3),
    scale: Math.max(1, Number(_0x3d49d3.rangeScale) || 1)
  }));
  const _0x3bdafc = _0x4ce710.filter(_0x13df22 => _0x13df22.distance > _0x13df22.scale * 220);
  const _0x16b89d = _0x4ce710.filter(_0x5c8077 => _0x5c8077.distance <= _0x5c8077.scale * 175);
  const _0x375681 = _0x4ce710.filter(_0x2e176c => _0x2e176c.distance <= _0x2e176c.scale * 105);
  assert.equal(_0x3bdafc.length, 0, _0x34eb42.name + " contains unreachable tower slots");
  assert.equal(_0x16b89d.length >= Math.ceil(_0x4ce710.length / 2), true, _0x34eb42.name + " needs more general-purpose slots");
  assert.equal(_0x375681.length >= 2, true, _0x34eb42.name + " needs at least two close-range slots");
});
console.log("map coverage tests passed: " + maps.length + " maps, " + maps.reduce((_0x426659, _0x2f1462) => _0x426659 + _0x2f1462.slots.length, 0) + " slots");