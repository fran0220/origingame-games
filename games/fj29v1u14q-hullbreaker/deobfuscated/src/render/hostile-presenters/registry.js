const e = Object.freeze(["id", "matches", "spawn", "syncPose", "ownsSilhouette", "usesLegacyPose", "syncMaterial", "syncTransform", "prepareRemoval"]);
function r(_0x26ec48) {
  if (!_0x26ec48 || typeof _0x26ec48 != "object") {
    throw new TypeError("hostile presenter must be an object");
  }
  if (!_0x26ec48.id || typeof _0x26ec48.id != "string") {
    throw new TypeError("hostile presenter requires a stable string id");
  }
  for (const _0x55c43f of e.slice(1)) {
    if (typeof _0x26ec48[_0x55c43f] != "function") {
      throw new TypeError("hostile presenter " + _0x26ec48.id + " requires " + _0x55c43f + "()");
    }
  }
  return _0x26ec48;
}
export function makeHostilePresenterRegistry(_0x753704) {
  const _0x3bedfb = _0x753704.map(r);
  const _0x3d2efb = new Set();
  for (const _0x56df6f of _0x3bedfb) {
    if (_0x3d2efb.has(_0x56df6f.id)) {
      throw new Error("duplicate hostile presenter id: " + _0x56df6f.id);
    }
    _0x3d2efb.add(_0x56df6f.id);
  }
  const _0x13976b = Object.freeze([..._0x3bedfb]);
  return Object.freeze({
    ordered: _0x13976b,
    select(_0x14234c) {
      for (const _0x4f282b of _0x13976b) {
        if (_0x4f282b.matches(_0x14234c)) {
          return _0x4f282b;
        }
      }
      throw new Error("hostile presenter registry has no fallback");
    },
    get: _0x56ba94 => _0x13976b.find(_0x419cb8 => _0x419cb8.id === _0x56ba94) || null
  });
}