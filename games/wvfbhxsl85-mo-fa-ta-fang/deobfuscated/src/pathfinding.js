import { inBounds as _0x4b79db, neighbors4 as _0x560fc6, getCell as _0x2a8755 } from "./grid.js";
export function isWalkable(_0x339897, _0x1e3c70, _0x39103e, _0x1ca92a = {}) {
  if (!_0x4b79db(_0x1e3c70, _0x39103e)) {
    return false;
  }
  const {
    extraBlock: _0x74fe55 = null,
    ignoreBlock: _0x375979 = null
  } = _0x1ca92a;
  if (_0x74fe55 && _0x74fe55.x === _0x1e3c70 && _0x74fe55.y === _0x39103e) {
    return false;
  }
  if (_0x375979 && _0x375979.x === _0x1e3c70 && _0x375979.y === _0x39103e) {
    return true;
  }
  const _0x12156b = _0x2a8755(_0x339897, _0x1e3c70, _0x39103e);
  return !!_0x12156b && !_0x12156b.blocksPath;
}
export function findPath(_0xb4426f, _0x3ed105, _0x5dff27, _0x33112e = {}) {
  if (!_0x4b79db(_0x3ed105.x, _0x3ed105.y) || !_0x4b79db(_0x5dff27.x, _0x5dff27.y)) {
    return null;
  }
  if (!isWalkable(_0xb4426f, _0x3ed105.x, _0x3ed105.y, _0x33112e) && (_0x3ed105.x !== _0x5dff27.x || _0x3ed105.y !== _0x5dff27.y) && (_0x3ed105.x !== _0x5dff27.x || _0x3ed105.y !== _0x5dff27.y)) {
    return null;
  }
  if (!isWalkable(_0xb4426f, _0x5dff27.x, _0x5dff27.y, _0x33112e)) {
    return null;
  }
  if (_0x3ed105.x === _0x5dff27.x && _0x3ed105.y === _0x5dff27.y) {
    return [{
      x: _0x3ed105.x,
      y: _0x3ed105.y
    }];
  }
  const _0x390e8f = (_0x340523, _0x2b4120) => _0x340523 + "," + _0x2b4120;
  const _0x51657b = new Map();
  const _0x19b386 = [];
  const _0x4271ec = _0x390e8f(_0x3ed105.x, _0x3ed105.y);
  _0x51657b.set(_0x4271ec, null);
  _0x19b386.push({
    x: _0x3ed105.x,
    y: _0x3ed105.y
  });
  let _0x4a50f1 = 0;
  while (_0x4a50f1 < _0x19b386.length) {
    const _0x229b80 = _0x19b386[_0x4a50f1++];
    if (_0x229b80.x === _0x5dff27.x && _0x229b80.y === _0x5dff27.y) {
      const _0x8692ba = [];
      let _0x5eed33 = _0x390e8f(_0x229b80.x, _0x229b80.y);
      while (_0x5eed33) {
        const [_0x202b96, _0x347b72] = _0x5eed33.split(",");
        _0x8692ba.push({
          x: Number(_0x202b96),
          y: Number(_0x347b72)
        });
        _0x5eed33 = _0x51657b.get(_0x5eed33);
      }
      _0x8692ba.reverse();
      return _0x8692ba;
    }
    for (const _0x15fbb2 of _0x560fc6(_0x229b80.x, _0x229b80.y)) {
      if (!_0x4b79db(_0x15fbb2.x, _0x15fbb2.y)) {
        continue;
      }
      const _0x274c9a = _0x390e8f(_0x15fbb2.x, _0x15fbb2.y);
      if (!_0x51657b.has(_0x274c9a)) {
        if (isWalkable(_0xb4426f, _0x15fbb2.x, _0x15fbb2.y, _0x33112e)) {
          _0x51657b.set(_0x274c9a, _0x390e8f(_0x229b80.x, _0x229b80.y));
          _0x19b386.push({
            x: _0x15fbb2.x,
            y: _0x15fbb2.y
          });
        }
      }
    }
  }
  return null;
}
export function hasPath(_0x2ba7e3, _0xb8c257, _0x28591e, _0x5b5399 = {}) {
  return findPath(_0x2ba7e3, _0xb8c257, _0x28591e, _0x5b5399) !== null;
}
export function canPlaceTower(_0x137710, _0x470d4b, _0x35bedd, _0x51b87c) {
  const _0x38ac54 = _0x2a8755(_0x137710, _0x470d4b, _0x35bedd);
  if (!_0x38ac54) {
    return {
      ok: false,
      reason: "地图外"
    };
  }
  if (!_0x38ac54.buildable) {
    if (_0x38ac54.kind === "spawn") {
      return {
        ok: false,
        reason: "不能建在出生点"
      };
    } else if (_0x38ac54.kind === "base") {
      return {
        ok: false,
        reason: "不能建在基地"
      };
    } else if (_0x38ac54.towerId) {
      return {
        ok: false,
        reason: "此处已有防御塔"
      };
    } else {
      return {
        ok: false,
        reason: "不可建造"
      };
    }
  }
  if (_0x38ac54.blocksPath || _0x38ac54.towerId) {
    return {
      ok: false,
      reason: "此处已有防御塔"
    };
  }
  const _0x2d0267 = _0x51b87c.enemyCells || [];
  for (const _0x1ab306 of _0x2d0267) {
    if (_0x1ab306.x === _0x470d4b && _0x1ab306.y === _0x35bedd) {
      return {
        ok: false,
        reason: "敌人所在格不能建造"
      };
    }
  }
  const _0x335a2b = {
    x: _0x470d4b,
    y: _0x35bedd
  };
  if (!hasPath(_0x137710, _0x51b87c.spawn, _0x51b87c.base, {
    extraBlock: _0x335a2b
  })) {
    return {
      ok: false,
      reason: "会堵住通路"
    };
  }
  for (const _0x248276 of _0x2d0267) {
    if (!hasPath(_0x137710, _0x248276, _0x51b87c.base, {
      extraBlock: _0x335a2b
    })) {
      return {
        ok: false,
        reason: "会困住场上敌人"
      };
    }
  }
  return {
    ok: true
  };
}