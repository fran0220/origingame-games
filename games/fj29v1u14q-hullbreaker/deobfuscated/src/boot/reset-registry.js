export function makeResetRegistry(_0x3581a3) {
  const _0x4a0641 = new Set();
  const _0x438bbc = _0x3581a3.map(_0xda9f94 => {
    if (!_0xda9f94?.id || typeof _0xda9f94.id != "string" || typeof _0xda9f94.reset != "function") {
      throw new TypeError("reset entries require { id, reset }");
    }
    if (_0x4a0641.has(_0xda9f94.id)) {
      throw new Error("duplicate reset owner: " + _0xda9f94.id);
    }
    _0x4a0641.add(_0xda9f94.id);
    return Object.freeze({
      id: _0xda9f94.id,
      reset: _0xda9f94.reset
    });
  });
  let _0x14952f = false;
  let _0x57ae78 = 0;
  let _0x182eb5 = Object.freeze([]);
  return Object.freeze({
    entries: Object.freeze(_0x438bbc),
    reset(_0x35f07b) {
      if (_0x14952f) {
        throw new Error("run reset is not reentrant");
      }
      _0x14952f = true;
      const _0x337f9a = [];
      try {
        for (const _0x1b027f of _0x438bbc) {
          try {
            _0x1b027f.reset(_0x35f07b);
          } catch (_0x3eeed9) {
            const _0x2a60ea = new Error("reset owner " + _0x1b027f.id + " failed", {
              cause: _0x3eeed9
            });
            _0x2a60ea.owner = _0x1b027f.id;
            throw _0x2a60ea;
          }
          _0x337f9a.push(_0x1b027f.id);
        }
        _0x57ae78++;
        _0x182eb5 = Object.freeze(_0x337f9a);
        return _0x182eb5;
      } finally {
        _0x14952f = false;
      }
    },
    snapshot: () => ({
      owners: _0x438bbc.map(_0x117247 => _0x117247.id),
      runs: _0x57ae78,
      last: [..._0x182eb5]
    })
  });
}