export const MERIDIAN_DEFENSE_STATES = Object.freeze(["observe", "intercept", "contain", "quarantine", "sterilize", "scuttle"]);
export function defensePhaseForRouteFace(_0x507109) {
  return Math.max(0, Math.min(5, Math.trunc(_0x507109) - 1));
}
const e = Object.freeze({
  observe: "spawn",
  intercept: "clamp",
  contain: "interlock",
  quarantine: "vent",
  sterilize: "defense",
  scuttle: "rupture"
});
export function meridianResponsePlan(_0x58c32a, _0x3c90bf, _0x20dbec) {
  const _0x4b5163 = Math.max(0, Math.min(5, Math.trunc(_0x58c32a)));
  const _0x5742ef = MERIDIAN_DEFENSE_STATES[_0x4b5163];
  const _0x31a5e7 = (_0x3c90bf + _0x4b5163 * 3) % [11, 8, 7, 6, 5, 4][_0x4b5163];
  const _0x5b6092 = _0x31a5e7 === 0 || _0x4b5163 === 5 && _0x31a5e7 === 2;
  const _0x248118 = function (_0x1ac57c) {
    let _0x1eb7a3 = (Math.trunc(_0x1ac57c) ^ -1640531527) >>> 0;
    _0x1eb7a3 = Math.imul(_0x1eb7a3 ^ _0x1eb7a3 >>> 16, 569420461);
    _0x1eb7a3 = Math.imul(_0x1eb7a3 ^ _0x1eb7a3 >>> 15, 1935289751);
    return (_0x1eb7a3 ^ _0x1eb7a3 >>> 15) >>> 0;
  }(_0x3c90bf * 131 + _0x4b5163 * 977 + _0x20dbec * 37);
  const _0x20cc93 = _0x4b5163 === 5 && _0x31a5e7 === 2 ? "defense" : e[_0x5742ef];
  return Object.freeze({
    phase: _0x4b5163,
    state: _0x5742ef,
    active: _0x5b6092,
    socketKind: _0x20cc93,
    routeOffset: ((_0x248118 >>> 5) % 3 - 1) * 0.38,
    verticalOffset: -2.9 - (_0x248118 >>> 9) % 3 * 0.34,
    outwardDepth: 2 + (_0x248118 >>> 13) % 3 * 0.24,
    safeFromPlayerRadius: 2.4 + _0x4b5163 * 0.12,
    tellLeadMs: [620, 560, 500, 460, 420, 380][_0x4b5163],
    allowedHooks: _0x4b5163 === 0 ? Object.freeze(["dormant", "armed"]) : _0x4b5163 === 5 ? Object.freeze(["armed", "active", "spent", "damaged"]) : Object.freeze(["dormant", "armed", "active"])
  });
}