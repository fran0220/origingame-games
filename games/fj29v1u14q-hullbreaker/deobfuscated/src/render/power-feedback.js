export const OVERDRIVE_ENTRY_MS = 420;
export const RAGE_STACCATO_HZ = 2.8;
const r = Math.PI * 2 * 2.8 / 1000;
export function clampPower01(_0x31c76e) {
  return Math.max(0, Math.min(1, Number(_0x31c76e) || 0));
}
export function normalizedOverdriveCharge(_0x1389b6, _0x3b8907) {
  const _0x2e5761 = Number(_0x3b8907) || 1;
  return clampPower01((Number(_0x1389b6) || 0) / _0x2e5761);
}
export function overdriveBreath(_0x227977) {
  return 0.5 + Math.sin((Number(_0x227977) || 0) * 0.016) * 0.5;
}
export function rageStaccato(_0x19f861) {
  const _0x2eb6d6 = 0.5 + Math.sin((Number(_0x19f861) || 0) * r) * 0.5;
  return _0x2eb6d6 * _0x2eb6d6 * _0x2eb6d6 * _0x2eb6d6 * _0x2eb6d6 * _0x2eb6d6;
}
export function overdriveProjectileGain(_0xa694f5, _0x47db8e) {
  if (_0xa694f5 >= 2) {
    return 0.2;
  } else if (_0xa694f5 === 1) {
    return 0.08 + clampPower01(_0x47db8e) * 0.04;
  } else {
    return 0;
  }
}