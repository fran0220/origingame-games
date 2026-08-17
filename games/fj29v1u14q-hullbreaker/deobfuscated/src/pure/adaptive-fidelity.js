export const ADAPTIVE_FIDELITY_TUNE = Object.freeze({
  warmupFrames: 120,
  batchFrames: 120,
  badBatchesRequired: 2,
  goodBatchesRequired: 6,
  avgBudgetMs: 19.5,
  slowFrameMs: 24,
  slowShare: 0.2,
  goodAvgMs: 17,
  goodSlowShare: 0.02,
  maxLevel: 3
});
export function createAdaptiveFidelityController(_0x5eac12 = ADAPTIVE_FIDELITY_TUNE) {
  let _0x38dd77 = 0;
  let _0x48cc7e = 0;
  let _0xb17cc4 = 0;
  let _0xce92f6 = 0;
  let _0xe4f5a3 = 0;
  let _0x1a441c = 0;
  let _0x1bbce9 = 0;
  let _0x52fb83 = 0;
  let _0x280024 = 0;
  let _0x5699ae = null;
  return Object.freeze({
    sample(_0x54ad0d) {
      if (!Number.isFinite(_0x54ad0d) || _0x54ad0d <= 0) {
        return null;
      }
      if (_0x38dd77 < _0x5eac12.warmupFrames) {
        _0x38dd77++;
        return null;
      }
      _0x48cc7e++;
      _0xb17cc4 += _0x54ad0d;
      if (_0x54ad0d > _0xce92f6) {
        _0xce92f6 = _0x54ad0d;
      }
      if (_0x54ad0d >= _0x5eac12.slowFrameMs) {
        _0xe4f5a3++;
      }
      if (_0x48cc7e < _0x5eac12.batchFrames) {
        return null;
      }
      _0x52fb83++;
      const _0x454632 = _0xb17cc4 / _0x48cc7e;
      const _0x4961cf = _0xe4f5a3 / _0x48cc7e;
      const _0x47d4c0 = _0x454632 >= _0x5eac12.avgBudgetMs || _0x4961cf >= _0x5eac12.slowShare;
      const _0x314a9b = _0x454632 <= _0x5eac12.goodAvgMs && _0x4961cf <= _0x5eac12.goodSlowShare;
      _0x1a441c = _0x47d4c0 ? _0x1a441c + 1 : 0;
      _0x1bbce9 = _0x314a9b ? _0x1bbce9 + 1 : 0;
      const _0xecffc6 = {
        avgMs: _0x454632,
        worstMs: _0xce92f6,
        slowFraction: _0x4961cf,
        batches: _0x52fb83
      };
      _0x48cc7e = 0;
      _0xb17cc4 = 0;
      _0xce92f6 = 0;
      _0xe4f5a3 = 0;
      let _0x217f92 = null;
      if (_0x47d4c0 && _0x1a441c >= _0x5eac12.badBatchesRequired && _0x280024 < _0x5eac12.maxLevel) {
        _0x280024++;
        _0x217f92 = "down";
      } else if (_0x314a9b && _0x1bbce9 >= _0x5eac12.goodBatchesRequired && _0x280024 > 0) {
        _0x280024--;
        _0x217f92 = "up";
      }
      if (_0x217f92) {
        _0x1a441c = 0;
        _0x1bbce9 = 0;
        _0x5699ae = Object.freeze({
          level: _0x280024,
          direction: _0x217f92,
          avgMs: Number(_0xecffc6.avgMs.toFixed(2)),
          worstMs: Number(_0xecffc6.worstMs.toFixed(2)),
          slowShare: Number(_0xecffc6.slowFraction.toFixed(3)),
          batch: _0xecffc6.batches
        });
        return _0x5699ae;
      } else {
        return null;
      }
    },
    snapshot: () => ({
      level: _0x280024,
      warmup: _0x38dd77,
      batches: _0x52fb83,
      badBatches: _0x1a441c,
      goodBatches: _0x1bbce9,
      pendingFrames: _0x48cc7e,
      last: _0x5699ae
    })
  });
}