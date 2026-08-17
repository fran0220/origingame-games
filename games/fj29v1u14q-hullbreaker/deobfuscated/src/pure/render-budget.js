export const RENDER_COMPACT_THRESHOLD = 600;
export const RENDER_PIXEL_BUDGET = Object.freeze({
  compact: 2000000,
  desktop: 6600000
});
function t(_0x4e6547) {
  if (Number.isFinite(_0x4e6547) && _0x4e6547 > 0) {
    return _0x4e6547;
  } else {
    return 1;
  }
}
export function renderPixelBudget(_0x3c67df, _0x8e325e) {
  const _0x215234 = t(_0x3c67df);
  const _0x1557d6 = t(_0x8e325e);
  if (Math.min(_0x215234, _0x1557d6) < 600) {
    return RENDER_PIXEL_BUDGET.compact;
  } else {
    return RENDER_PIXEL_BUDGET.desktop;
  }
}
export function resolveRenderPixelRatio(_0x1950f4, _0x590420, _0x4a154d, _0x22a1d7 = true) {
  const _0x1d9e5f = t(_0x590420);
  const _0x2c5bc5 = t(_0x4a154d);
  const _0x468916 = t(_0x1950f4);
  const _0x562f21 = Math.min(_0x1d9e5f, _0x2c5bc5) < 600;
  const _0x25a645 = _0x562f21 ? 1.1 : 1.25;
  const _0x29dc44 = _0x562f21 ? 2.2 : 2.25;
  const _0x276fc1 = Math.min(Math.max(1, _0x468916), 2);
  const _0x41a625 = Math.min(Math.max(1, _0x468916) * _0x25a645, _0x29dc44);
  const _0x4c642c = Math.sqrt(renderPixelBudget(_0x1d9e5f, _0x2c5bc5) / (_0x1d9e5f * _0x2c5bc5));
  if (_0x22a1d7) {
    return Math.min(_0x41a625, _0x4c642c);
  } else {
    return Math.max(_0x276fc1, Math.min(_0x41a625, _0x4c642c));
  }
}