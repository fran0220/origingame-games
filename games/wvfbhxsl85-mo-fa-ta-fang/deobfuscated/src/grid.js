export const COLS = 12;
export const ROWS = 10;
export const CELL = 1;
export function createGrid() {
  const _0x1de0d1 = [];
  const _0x901d53 = {
    x: 0,
    y: Math.floor(5)
  };
  const _0x5eef61 = {
    x: 11,
    y: Math.floor(5)
  };
  for (let _0x1ea67c = 0; _0x1ea67c < 10; _0x1ea67c++) {
    const _0x4e42cd = [];
    for (let _0x13aa15 = 0; _0x13aa15 < 12; _0x13aa15++) {
      let _0x39c394 = "buildable";
      let _0x3e5fc6 = true;
      let _0x56db2f = false;
      if (_0x13aa15 === _0x901d53.x && _0x1ea67c === _0x901d53.y) {
        _0x39c394 = "spawn";
        _0x3e5fc6 = false;
      } else if (_0x13aa15 === _0x5eef61.x && _0x1ea67c === _0x5eef61.y) {
        _0x39c394 = "base";
        _0x3e5fc6 = false;
      }
      _0x4e42cd.push({
        x: _0x13aa15,
        y: _0x1ea67c,
        kind: _0x39c394,
        buildable: _0x3e5fc6,
        blocksPath: _0x56db2f,
        towerId: null
      });
    }
    _0x1de0d1.push(_0x4e42cd);
  }
  return {
    cells: _0x1de0d1,
    spawn: _0x901d53,
    base: _0x5eef61
  };
}
export function cellToWorld(_0x3548c5, _0x1528bd, _0x44b7d6 = 0) {
  return {
    x: _0x3548c5 * 1 - 5.5,
    y: _0x44b7d6,
    z: _0x1528bd * 1 - 4.5
  };
}
export function worldToCell(_0x4ac340, _0x4f76fb) {
  return {
    x: Math.round(_0x4ac340 / 1 + 5.5),
    y: Math.round(_0x4f76fb / 1 + 4.5)
  };
}
export function inBounds(_0x3795e9, _0x5575cb) {
  return _0x3795e9 >= 0 && _0x5575cb >= 0 && _0x3795e9 < 12 && _0x5575cb < 10;
}
export function getCell(_0x509f59, _0x4cc3c0, _0x3620b2) {
  if (inBounds(_0x4cc3c0, _0x3620b2)) {
    return _0x509f59[_0x3620b2][_0x4cc3c0];
  } else {
    return null;
  }
}
export function neighbors4(_0x26a300, _0x27bebb) {
  return [{
    x: _0x26a300 + 1,
    y: _0x27bebb
  }, {
    x: _0x26a300 - 1,
    y: _0x27bebb
  }, {
    x: _0x26a300,
    y: _0x27bebb + 1
  }, {
    x: _0x26a300,
    y: _0x27bebb - 1
  }];
}