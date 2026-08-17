import { TRAVERSAL_FIXTURE } from "./traversal.js";
export const TRAVERSAL_RIBRUN = {
  id: "ribrun-v1",
  label: "RIB RUN",
  hypothesis: "A long authored diagonal, taken at speed, produces sustained ascending momentum out of geometry alone — no anchors to service and no new input, with every mistimed hop repaid by a flange or a ledge catch instead of stopping the run.",
  baseY: 3,
  firstRiserX: 31,
  riser: 2,
  tread: 7,
  steps: 6,
  flange: {
    drop: 1,
    back: 2.6,
    gap: 0.8
  },
  reward: {
    kind: "letter",
    letter: "H",
    mode: "fixed",
    x: 55,
    y: 12.2
  }
};
export function ribrunDecks(_0x36c61f = TRAVERSAL_RIBRUN, _0x4040b3 = TRAVERSAL_FIXTURE.bounds) {
  const _0x9438b9 = [{
    index: 0,
    x0: _0x4040b3.x0,
    x1: _0x36c61f.firstRiserX,
    y: _0x36c61f.baseY
  }];
  for (let _0x16219c = 1; _0x16219c <= _0x36c61f.steps; _0x16219c++) {
    const _0xce676e = _0x36c61f.firstRiserX + (_0x16219c - 1) * _0x36c61f.tread;
    _0x9438b9.push({
      index: _0x16219c,
      x0: _0xce676e,
      x1: _0x16219c === _0x36c61f.steps ? _0x4040b3.x1 : _0xce676e + _0x36c61f.tread,
      y: _0x36c61f.baseY + _0x16219c * _0x36c61f.riser
    });
  }
  return _0x9438b9;
}
export function ribrunFlanges(_0x365c = TRAVERSAL_RIBRUN, _0x44d12b = TRAVERSAL_FIXTURE.bounds) {
  return ribrunDecks(_0x365c, _0x44d12b).slice(1).map(function (_0x468c8e) {
    return {
      id: "rib-flange-" + _0x468c8e.index,
      face: _0x468c8e.x0,
      x0: _0x468c8e.x0 - _0x365c.flange.back,
      x1: _0x468c8e.x0 - _0x365c.flange.gap,
      y: _0x468c8e.y - _0x365c.flange.drop
    };
  });
}
export function ribrunJumpArc(_0x1199f5) {
  const _0x37fd0f = -_0x1199f5.gravity;
  return {
    gUp: _0x37fd0f,
    gDown: -_0x1199f5.gravity * _0x1199f5.fallGravityMult,
    tRise: _0x1199f5.jumpVel / _0x37fd0f,
    apex: _0x1199f5.jumpVel * _0x1199f5.jumpVel / (_0x37fd0f * 2)
  };
}
export function ribrunClearSpan(_0x3f54fe, _0x144fe5) {
  const _0x159f6e = ribrunJumpArc(_0x3f54fe);
  if (_0x144fe5 > _0x159f6e.apex) {
    return null;
  }
  const _0x245628 = (_0x3f54fe.jumpVel - Math.sqrt(_0x3f54fe.jumpVel * _0x3f54fe.jumpVel - _0x159f6e.gUp * 2 * _0x144fe5)) / _0x159f6e.gUp;
  const _0xa17413 = _0x159f6e.tRise + Math.sqrt((_0x159f6e.apex - _0x144fe5) * 2 / _0x159f6e.gDown);
  return {
    from: _0x245628 * _0x3f54fe.runSpeed,
    to: _0xa17413 * _0x3f54fe.runSpeed,
    width: (_0xa17413 - _0x245628) * _0x3f54fe.runSpeed,
    apex: _0x159f6e.apex
  };
}
export function ribrunHopSpan(_0xd012e3) {
  const _0x406886 = ribrunJumpArc(_0xd012e3);
  return (_0x406886.tRise + Math.sqrt(_0x406886.apex * 2 / _0x406886.gDown)) * _0xd012e3.runSpeed;
}
export function ribrunCatchBand(_0x1eed09, _0x3d1c03) {
  const _0x382e9b = _0x3d1c03 - _0x1eed09.ledgeGrabHeight - _0x1eed09.ledgeReachY;
  const _0x113d3a = _0x3d1c03 - _0x1eed09.ledgeGrabHeight + _0x1eed09.ledgeReachY;
  return {
    lo: _0x382e9b,
    hi: _0x113d3a,
    height: _0x113d3a - _0x382e9b
  };
}
export function ribrunCatchStep(_0x55ad68, _0x3742aa, _0x4d4365) {
  const _0x1e5c0c = ribrunCatchBand(_0x55ad68, _0x3742aa);
  const _0x309bde = -_0x55ad68.gravity * _0x55ad68.fallGravityMult;
  const _0x5e4e19 = Math.sqrt(_0x309bde * 2 * Math.max(0, _0x3742aa - _0x1e5c0c.hi));
  return {
    band: _0x1e5c0c,
    speed: _0x5e4e19,
    step: _0x5e4e19 * _0x4d4365
  };
}
export function ribrunFixture(_0x4a4823 = TRAVERSAL_FIXTURE, _0x1162a1 = TRAVERSAL_RIBRUN) {
  const _0x2d5aab = ribrunDecks(_0x1162a1, _0x4a4823.bounds);
  const _0x5945e5 = _0x2d5aab[_0x2d5aab.length - 1];
  const _0x287055 = [{
    id: "entry",
    kind: "entry",
    x: _0x4a4823.run.playerSpawn.x,
    y: _0x1162a1.baseY
  }];
  const _0x30614b = [];
  const _0x3c49a5 = ["entry"];
  _0x2d5aab.slice(1).forEach(function (_0x2fcecf, _0x130e8f) {
    const _0x2c5516 = "rib-" + _0x2fcecf.index;
    _0x287055.push({
      id: _0x2c5516,
      kind: "rib",
      x: _0x2fcecf.x0 + 1.5,
      y: _0x2fcecf.y
    });
    _0x30614b.push({
      routeId: "ribline",
      from: _0x130e8f === 0 ? "entry" : "rib-" + _0x2d5aab[_0x130e8f].index,
      to: _0x2c5516,
      verb: "run-jump"
    });
    _0x3c49a5.push(_0x2c5516);
  });
  _0x287055.push({
    id: "rejoin",
    kind: "rejoin",
    x: _0x5945e5.x1 - 4,
    y: _0x5945e5.y
  });
  _0x30614b.push({
    routeId: "ribline",
    from: "rib-" + _0x5945e5.index,
    to: "rejoin",
    verb: "run"
  });
  _0x3c49a5.push("rejoin");
  return {
    ..._0x4a4823,
    id: "traversal-" + _0x1162a1.id,
    ribrun: _0x1162a1,
    hostileFree: true,
    enemies: [],
    groundRuns: _0x2d5aab.map(function (_0x16a5a4) {
      return {
        x0: _0x16a5a4.x0,
        x1: _0x16a5a4.x1,
        y: _0x16a5a4.y
      };
    }),
    platforms: ribrunFlanges(_0x1162a1, _0x4a4823.bounds).map(function (_0x1c58d6) {
      return {
        id: _0x1c58d6.id,
        x0: _0x1c58d6.x0,
        x1: _0x1c58d6.x1,
        y: _0x1c58d6.y
      };
    }),
    solidRects: [],
    entry: "entry",
    exit: "rejoin",
    immediateChoiceCap: 1,
    firstFork: {
      connector: "entry",
      choices: ["rib-1"]
    },
    connectors: _0x287055,
    edges: _0x30614b,
    routes: [{
      id: "ribline",
      connectorIds: _0x3c49a5
    }],
    rejoin: {
      connector: "rejoin",
      x0: _0x4a4823.rejoin.x0,
      x1: _0x4a4823.bounds.x1,
      y: _0x5945e5.y
    },
    darePocket: {
      ..._0x4a4823.darePocket,
      bounds: {
        x0: _0x4a4823.bounds.x0,
        x1: _0x4a4823.bounds.x0
      },
      reward: {
        ..._0x1162a1.reward
      },
      retreatPath: []
    }
  };
}