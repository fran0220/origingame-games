(function (_0x15f220) {
  'use strict';

  const _0x2a1997 = function () {
    const _0x557d70 = 12;
    const _0x3f4ebc = 5;
    const _0x24e27b = 25;
    function _0x57bbef(_0x481447) {
      const _0x3c1f94 = Number(_0x481447);
      if (!Number.isFinite(_0x3c1f94) || _0x3c1f94 <= 0) {
        return 0;
      }
      const _0x272fff = Math.min(1, _0x3c1f94 / _0x557d70);
      return Math.max(_0x3f4ebc, Math.min(_0x24e27b, Math.ceil(_0x272fff * _0x24e27b)));
    }
    return Object.freeze({
      COUNTDOWN_SECONDS: _0x557d70,
      MIN_REWARD: _0x3f4ebc,
      MAX_REWARD: _0x24e27b,
      earlyWaveReward: _0x57bbef
    });
  }();
  if (typeof module == "object" && module.exports) {
    module.exports = _0x2a1997;
  }
  if (_0x15f220) {
    _0x15f220.WaveEconomy = _0x2a1997;
  }
})(typeof window != "undefined" ? window : globalThis);