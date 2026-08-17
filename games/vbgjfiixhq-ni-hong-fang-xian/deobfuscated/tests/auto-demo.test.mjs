import _0x409636 from "node:assert/strict";
import { createRequire as _0x39c118 } from "node:module";
import _0x514238 from "node:test";
const s = _0x39c118(import.meta.url)("../auto-demo.js");
const l = {
  slots: [{
    x: 50,
    y: 50
  }, {
    x: 8,
    y: 8
  }],
  entries: {
    left: [{
      x: 0,
      y: 50
    }],
    right: [{
      x: 0,
      y: 50
    }]
  },
  shared: [{
    x: 100,
    y: 50
  }],
  exits: {
    left: [{
      x: 100,
      y: 50
    }],
    right: [{
      x: 100,
      y: 50
    }]
  }
};
const n = {
  runtime: {
    towerEconomy: Object.fromEntries(s.TOWER_IDS.map((_0x56f98e, _0x47e22f) => [_0x56f98e, {
      cost: 100 + _0x47e22f * 5
    }])),
    towerCombat: Object.fromEntries(s.TOWER_IDS.map(_0x30f4ee => [_0x30f4ee, {
      ranges: [140, 155, 170]
    }]))
  },
  agent: {
    RANGE_PROJECTION_Y: 1,
    buildMapGeometry: _0x47184c => ({
      level: _0x47184c
    }),
    routePoint: (_0x5e04ab, _0x2eb027) => ({
      x: _0x2eb027,
      y: 500
    })
  },
  level: l,
  mapIndex: 0,
  wave: 1,
  growthBonuses: {}
};
_0x514238("demo planner selects a reachable empty slot and affordable tower", () => {
  const _0x750be6 = s.chooseBuildAction({
    coins: 700,
    towers: [],
    slots: l.slots.map((_0x5e19e4, _0x396517) => ({
      ..._0x5e19e4,
      slotIndex: _0x396517
    }))
  }, n);
  _0x409636.equal(_0x750be6.kind, "build");
  _0x409636.equal(_0x750be6.slotIndex, 0);
  _0x409636.ok(_0x750be6.cost <= 700);
});
_0x514238("demo planner does not build without enough coins", () => {
  const _0xc10a3f = s.chooseBuildAction({
    coins: 20,
    towers: [],
    slots: l.slots.map((_0x497dea, _0x1bb9ad) => ({
      ..._0x497dea,
      slotIndex: _0x1bb9ad
    }))
  }, n);
  _0x409636.equal(_0xc10a3f, null);
});
_0x514238("demo planner upgrades an affordable tower below level three", () => {
  const _0x1594d9 = {
    coins: 100,
    slots: l.slots.map((_0x26d162, _0xbbff0d) => ({
      ..._0x26d162,
      slotIndex: _0xbbff0d
    })),
    towers: [{
      typeId: "arc-neon",
      slotIndex: 0,
      level: 1
    }]
  };
  const _0x3e6da7 = s.chooseUpgradeAction(_0x1594d9, n);
  _0x409636.equal(_0x3e6da7.kind, "upgrade");
  _0x409636.equal(_0x3e6da7.slotIndex, 0);
  _0x409636.equal(_0x3e6da7.level, 1);
});