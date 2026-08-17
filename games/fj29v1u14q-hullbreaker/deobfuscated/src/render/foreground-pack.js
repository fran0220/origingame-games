import { IS_G1 as _0x282e55, QUERY as _0x298d27 } from "../mode.js";
import { awaitPreloads as _0x468adf, preloadTexture as _0xf8decc } from "./preload.js";
import { FOREGROUND_ATLAS_COMPONENTS as _0x1ce37f } from "./foreground-components.js";
import { FOREGROUND_PACK_SOURCE as _0x4362a7 } from "./foreground-pack-source.js";
const s = Object.freeze({
  A: Object.freeze([0, 0]),
  B: Object.freeze([4, 0]),
  C: Object.freeze([0, 4]),
  D: Object.freeze([4, 4])
});
const c = new Map(_0x1ce37f.map(_0x22e6e0 => [_0x22e6e0.sheet + ":" + _0x22e6e0.localIndex, _0x22e6e0]));
function i(_0x1810f4, _0x3748d4) {
  const _0x1315d2 = s[_0x1810f4];
  const _0x1025e4 = _0x1315d2[0] + _0x3748d4 % 4;
  const _0x3ebd02 = _0x1315d2[1] + Math.floor(_0x3748d4 / 4);
  const _0x2a83fd = c.get(_0x1810f4 + ":" + _0x3748d4);
  if (!_0x2a83fd) {
    throw new Error("missing foreground component metadata " + _0x1810f4 + ":" + _0x3748d4);
  }
  return Object.freeze({
    ..._0x2a83fd,
    col: _0x1025e4,
    row: _0x3ebd02,
    index: _0x3ebd02 * 8 + _0x1025e4
  });
}
const l = [];
for (let P = 0; P < 16; P++) {
  l.push(i("A", P));
}
for (let _ = 0; _ < 16; _++) {
  l.push(i("B", _));
}
for (let w = 0; w < 16; w++) {
  l.push(i("C", w));
}
for (let z = 0; z < 16; z++) {
  l.push(i("D", z));
}
l.sort((_0xcf3263, _0x1d49ba) => _0xcf3263.index - _0x1d49ba.index);
export const FOREGROUND_PACK = Object.freeze({
  ..._0x4362a7,
  grid: Object.freeze([8, 8]),
  cellSize: 256,
  uvGuardPx: 6,
  cells: Object.freeze(l)
});
const u = new Map(l.map(_0x497fdf => [_0x497fdf.sheet + ":" + _0x497fdf.localIndex, _0x497fdf]));
const f = (_0x403129, _0x212732) => Object.freeze(_0x212732.map(_0x132d4b => u.get(_0x403129 + ":" + _0x132d4b)));
const d = Object.freeze({
  surfaceCold: f("A", [0, 1, 2, 3, 8, 10, 11, 12, 13]),
  surfaceWarm: f("A", [4, 5, 6, 7, 14, 15]),
  surfaceWear: f("A", [12, 13, 14, 15]),
  serviceVent: f("B", [0, 1, 7, 9]),
  serviceInspect: f("B", [2, 8, 13, 14, 15]),
  serviceConduit: f("B", [3, 6, 10, 11]),
  structCatwalk: f("C", [0, 1, 2, 3]),
  structLadder: f("C", [4, 5, 6, 7]),
  resource: f("C", [8, 9, 10, 11, 12, 13, 14, 15]),
  observeWake: f("D", [0, 1, 2, 3]),
  interceptLock: f("D", [4, 5]),
  containBrace: f("D", [6, 7]),
  quarantineSeal: f("D", [8, 9, 10]),
  sterilizePower: f("D", [11]),
  scuttleDamage: f("D", [12, 13, 14, 15])
});
function O(_0x3cb3bc) {
  let _0x2e8275 = (Math.trunc(_0x3cb3bc) ^ -1640531527) >>> 0;
  _0x2e8275 = Math.imul(_0x2e8275 ^ _0x2e8275 >>> 16, 569420461);
  _0x2e8275 = Math.imul(_0x2e8275 ^ _0x2e8275 >>> 15, 1935289751);
  return (_0x2e8275 ^ _0x2e8275 >>> 15) >>> 0;
}
export function foregroundPackCell(_0x37d416, _0x1de54c) {
  const _0x3c4641 = d[_0x37d416] || d.surfaceCold;
  return _0x3c4641[O(_0x1de54c) % _0x3c4641.length];
}
export function foregroundPackTransform(_0x2c2b20, _0x49ebe4) {
  const _0x135ef9 = O(_0x49ebe4 ^ _0x2c2b20.index * 73244475);
  const _0x41f5ee = _0x2c2b20.transforms.rotations;
  return Object.freeze({
    mirrorX: _0x2c2b20.transforms.mirrorX && !!(_0x135ef9 & 1),
    quarterTurns: _0x41f5ee[(_0x135ef9 >>> 1) % _0x41f5ee.length]
  });
}
export function foregroundPackRoles() {
  return Object.fromEntries(Object.entries(d).map(([_0x4bdba1, _0x514c5d]) => [_0x4bdba1, _0x514c5d.map(_0x49e317 => _0x49e317.index)]));
}
export const FOREGROUND_PACK_ON = _0x282e55 && _0x298d27.get("world") !== "0" && _0x298d27.get("pack") !== "0";
const m = () => globalThis.performance?.now?.() ?? Date.now();
const p = m();
const g = FOREGROUND_PACK_ON ? _0xf8decc(new URL(FOREGROUND_PACK.file, import.meta.url).href, {
  anisotropy: 8
}) : null;
await _0x468adf();
const h = g ? await g : null;
const x = h?.tex?.image;
const R = x && (x.naturalWidth || x.videoWidth || x.width);
const C = x && (x.naturalHeight || x.videoHeight || x.height);
const b = R === FOREGROUND_PACK.canvas[0] && C === FOREGROUND_PACK.canvas[1];
const D = !!h && h.state === "ready" && !!h.tex && b;
if (h && !D) {
  console.warn("HULLBREAKER art: foreground content atlas unavailable (" + (h.error || (b ? h.state : "dimensions " + (R || 0) + "x" + (C || 0))) + ") -- structural v4 geometry remains intact.");
}
const j = new Set();
export function noteForegroundPackCell(_0x5672c1) {
  if (_0x5672c1) {
    j.add(_0x5672c1.index);
  }
}
export const FOREGROUND_PACK_SLOT = Object.freeze({
  state: FOREGROUND_PACK_ON ? D ? "ready" : "failed" : "off",
  tex: D ? h.tex : null,
  error: h && !D ? h.error || "dimensions " + (R || 0) + "x" + (C || 0) : null,
  requests: g ? 1 : 0,
  choices: l.length,
  gpuTextures: D ? 1 : 0,
  emissive: false,
  preloadMs: g ? Math.round((m() - p) * 10) / 10 : null,
  gateMs: h?.ms ?? null,
  settledBeforeConsumer: true
});
export function foregroundPackStats() {
  const {
    tex: _0xffd48,
    ..._0x327dc9
  } = FOREGROUND_PACK_SLOT;
  return {
    ..._0x327dc9,
    cellsUsed: j.size,
    usedIndices: [...j].sort((_0x42998f, _0x1ceb33) => _0x42998f - _0x1ceb33),
    roles: foregroundPackRoles()
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_FOREGROUND_PACK = foregroundPackStats;
}