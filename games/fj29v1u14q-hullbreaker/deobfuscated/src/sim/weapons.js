import { CONFIG as _0x2daa75, WEAPON_LETTERS as _0x3ce03f } from "../config.js";
import { BEND_S as _0x2b9d60, DEG as _0x4708ac, crossesBend as _0x56bbb0 } from "../pure/path.js";
import { assistDirection as _0x329187 } from "../pure/assist.js";
import { compileGunDef as _0x42fa29, gunLabel as _0x1ed304, plainGun as _0x1acd3f } from "../pure/gunroll.js";
import { TRANSFORM_BEND_S as _0x214b3b } from "../pure/transform.js";
import { AIM_ASSIST_ENABLED as _0x2983cf, IS_TRANSFORM_SLICE as _0x2bdfff } from "../mode.js";
import { view as _0x379cfb } from "./bridge.js";
import { gameMs as _0x31743f, approach as _0x33461c } from "./time.js";
import { builtSolidAt as _0x296252, columnBuilt as _0x18b5de, groundH as _0x275926, platforms as _0x375211, solidRects as _0x356fb3 } from "./level.js";
import { player as _0x400d8f } from "./player.js";
import { hostiles as _0x1168f3, hitHostile as _0x1fa0d1, staggerHostile as _0x20982a } from "./hostiles.js";
import { mods as _0x3b59d0, logShot as _0x19d3da } from "./mods.js";
export const BULLET_MAX = 256;
export const bulletPool = [];
for (let Q = 0; Q < 256; Q++) {
  bulletPool.push({
    alive: false,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    dieAt: 0,
    type: "R",
    damage: 1,
    pierce: false,
    pierceLeft: 0,
    crawling: false,
    dir: 1,
    hitSet: new Set(),
    crawlUntil: 0,
    crawlTilesLeft: 0,
    crawlSurfaceY: -999,
    gravityAt: 0,
    seekTargetId: 0,
    seekLocksLeft: 0,
    seekUntil: 0,
    phaseTilesLeft: 0,
    def: null,
    gun: null,
    meta: null
  });
}
export let shotsFired = 0;
export let currentWeapon = "R";
export let weaponHeldSince = 0;
export const weaponKills = Object.fromEntries(_0x3ce03f.map(_0x5daca4 => [_0x5daca4, 0]));
export function weaponDef(_0x415119) {
  return _0x2daa75.weapons[_0x415119];
}
const R = Object.freeze(Object.fromEntries(_0x3ce03f.map(_0x5a5fab => [_0x5a5fab, _0x1acd3f(_0x5a5fab, false)])));
const G = _0x1acd3f("R", true);
const T = new WeakMap();
function j(_0x4fb544) {
  let _0x3a94d5 = T.get(_0x4fb544);
  if (!_0x3a94d5) {
    _0x3a94d5 = _0x42fa29(_0x4fb544, weaponDef(_0x4fb544.letter) || weaponDef("R"));
    T.set(_0x4fb544, _0x3a94d5);
  }
  return _0x3a94d5;
}
export let currentGun = G;
export let carriedGun = null;
let I = false;
let U = j(currentGun);
export function currentGunDef() {
  return U;
}
export function currentGunLabel(_0x227e21 = false) {
  return _0x1ed304(currentGun, _0x227e21);
}
export function carriedGunLabel(_0x36ec80 = false) {
  if (carriedGun) {
    return _0x1ed304(carriedGun, _0x36ec80);
  } else {
    return "";
  }
}
const Y = _0x2bdfff ? _0x214b3b : _0x2b9d60;
function D(_0x3a6788, _0x3bfef8, _0x52154d, _0xe1ff58, _0x1e13dc, _0x390ad4, _0x13f763) {
  for (let _0x259873 = 0; _0x259873 < 256; _0x259873++) {
    const _0x5c45c2 = bulletPool[_0x259873];
    if (!_0x5c45c2.alive) {
      _0x5c45c2.alive = true;
      _0x5c45c2.type = _0x3a6788;
      _0x5c45c2.x = _0x3bfef8;
      _0x5c45c2.y = _0x52154d;
      _0x5c45c2.vx = _0xe1ff58 * _0x390ad4.speed;
      _0x5c45c2.vy = _0x1e13dc * _0x390ad4.speed;
      _0x5c45c2.damage = _0x390ad4.damage;
      _0x5c45c2.pierce = !!_0x390ad4.pierce;
      _0x5c45c2.pierceLeft = _0x390ad4.pierceBudget || 0;
      _0x5c45c2.dieAt = _0x31743f + _0x390ad4.lifeMs;
      _0x5c45c2.crawling = false;
      _0x5c45c2.crawlUntil = 0;
      _0x5c45c2.crawlTilesLeft = 0;
      _0x5c45c2.crawlSurfaceY = -999;
      _0x5c45c2.gravityAt = _0x31743f + (_0x390ad4.dropDelayMs || 0);
      _0x5c45c2.dir = Math.sign(_0xe1ff58) || _0x400d8f.facing;
      _0x5c45c2.seekTargetId = 0;
      _0x5c45c2.seekLocksLeft = _0x390ad4.turnRate > 0 ? 1 + (_0x390ad4.seekRetargets || 0) : 0;
      _0x5c45c2.seekUntil = _0x31743f + (_0x390ad4.seekFuelMs || 0);
      _0x5c45c2.phaseTilesLeft = _0x390ad4.terrainPhaseTiles || 0;
      _0x5c45c2.def = _0x390ad4;
      _0x5c45c2.gun = _0x13f763;
      _0x5c45c2.meta = _0x390ad4.gunMeta;
      _0x5c45c2.hitSet.clear();
      _0x379cfb.bullets.slotSpawned(_0x259873, _0x3a6788, _0x5c45c2.meta);
      return;
    }
  }
}
const P = [];
const A = {
  x: 1,
  y: 0,
  targetId: 0,
  adjustedDeg: 0
};
export function fireWeapon(_0x4d73b6, _0x3dc75e, _0x1b176c, _0x1066c5, _0x37abdb, _0x572019, _0x55e8cf = null) {
  if (_0x2983cf && !_0x572019) {
    const _0x547588 = function (_0x337e88, _0xd5ca63, _0x3ab653, _0x56aa2b) {
      P.length = 0;
      for (const _0xd4c9bc of _0x1168f3) {
        if (!(_0x31743f < _0xd4c9bc.enterUntil)) {
          P.push(_0xd4c9bc);
        }
      }
      return _0x329187(_0x3ab653, _0x56aa2b, _0x337e88, _0xd5ca63, P, _0x2daa75.assist, A);
    }(_0x3dc75e, _0x1b176c, _0x1066c5, _0x37abdb);
    _0x1066c5 = _0x547588.x;
    _0x37abdb = _0x547588.y;
  }
  const _0x427ab8 = _0x55e8cf || (_0x572019 || _0x4d73b6 !== currentWeapon ? R[_0x4d73b6] || R.R : currentGun);
  const _0x2ecc15 = _0x427ab8 === currentGun ? U : j(_0x427ab8);
  if (!_0x572019) {
    shotsFired++;
    if (_0x31743f < _0x3b59d0.ghostUntil) {
      _0x19d3da(_0x427ab8, _0x3dc75e, _0x1b176c, _0x1066c5, _0x37abdb);
    }
  }
  if (_0x2ecc15.lobBias !== undefined) {
    _0x37abdb = _0x37abdb * _0x2ecc15.lobScaleY + _0x2ecc15.lobBias;
  }
  const _0x32f6eb = Math.atan2(_0x37abdb, _0x1066c5);
  const _0x1c5050 = _0x2ecc15.count || 1;
  const _0x29425e = (_0x2ecc15.splayDeg || 0) * _0x4708ac;
  for (let _0x2795ee = 0; _0x2795ee < _0x1c5050; _0x2795ee++) {
    const _0x1dcee1 = _0x32f6eb + _0x29425e * (_0x2795ee - (_0x1c5050 - 1) / 2);
    D(_0x427ab8.letter, _0x3dc75e, _0x1b176c, Math.cos(_0x1dcee1), Math.sin(_0x1dcee1), _0x2ecc15, _0x427ab8);
  }
}
function F(_0x1fe2c9, _0x2b5a43, _0x982f09) {
  _0x1fe2c9.alive = false;
  _0x379cfb.bullets.hideSlot(_0x2b5a43, _0x1fe2c9, _0x982f09);
}
function W(_0x56c739, _0x3f5c8b, _0x40808e) {
  const _0x4949fe = _0x40808e.volatileRadius;
  _0x379cfb.bullets.volatileImpact(_0x56c739, _0x4949fe, _0x56c739.meta?.volatile || 1);
  for (let _0x48bc87 = _0x1168f3.length - 1; _0x48bc87 >= 0; _0x48bc87--) {
    const _0x4acdd1 = _0x1168f3[_0x48bc87];
    if (_0x4acdd1.id === _0x3f5c8b || _0x31743f < _0x4acdd1.enterUntil) {
      continue;
    }
    const _0x40eaab = _0x4949fe + _0x4acdd1.hitR;
    if ((_0x56c739.x - _0x4acdd1.x) ** 2 + (_0x56c739.y - _0x4acdd1.y) ** 2 <= _0x40eaab * _0x40eaab && (_0x1fa0d1(_0x4acdd1, _0x48bc87, _0x40808e.volatileDamage, _0x56c739.type, _0x4acdd1.x - _0x56c739.x || (_0x56c739.crawling ? _0x56c739.dir * _0x40808e.crawlSpeed : _0x56c739.vx)), _0x1168f3.includes(_0x4acdd1))) {
      const _0x31faf3 = _0x4acdd1.x - _0x56c739.x;
      const _0x12e729 = _0x4acdd1.y - _0x56c739.y;
      const _0x31bf52 = 1.15 + (_0x56c739.meta?.volatile || 1) * 0.5 + (_0x40808e.heavyImpulse || 0) * 0.22;
      const _0x375a56 = 30 + (_0x56c739.meta?.volatile || 1) * 14 + (_0x40808e.heavyStunMs || 0) * 0.25;
      _0x20982a(_0x4acdd1, _0x31faf3 || _0x56c739.vx, _0x12e729 || _0x56c739.vy, _0x31bf52, _0x375a56);
    }
  }
}
function B(_0x3861c5, _0xc90806) {
  let _0x5563d3 = _0x3861c5.seekTargetId ? _0x1168f3.find(_0x5e3d96 => _0x5e3d96.id === _0x3861c5.seekTargetId && _0x31743f >= _0x5e3d96.enterUntil) : null;
  if (_0x5563d3) {
    const _0x4ffb27 = _0xc90806.seekRange * 1.25 + _0x5563d3.hitR;
    if ((_0x5563d3.x - _0x3861c5.x) ** 2 + (_0x5563d3.y - _0x3861c5.y) ** 2 > _0x4ffb27 * _0x4ffb27) {
      _0x5563d3 = null;
    }
  }
  if (_0x5563d3) {
    return _0x5563d3;
  }
  _0x3861c5.seekTargetId = 0;
  if (_0x3861c5.seekLocksLeft <= 0 || _0x31743f >= _0x3861c5.seekUntil) {
    return null;
  }
  const _0x119615 = Math.hypot(_0x3861c5.vx, _0x3861c5.vy) || 1;
  const _0xba17de = _0x3861c5.vx / _0x119615;
  const _0x292aeb = _0x3861c5.vy / _0x119615;
  const _0x4ad9f9 = Math.cos((_0xc90806.seekConeDeg || 0) * _0x4708ac * 0.5);
  let _0x3a9f7b = null;
  let _0xe97eab = Infinity;
  const _0x5a7745 = _0xc90806.seekRange * _0xc90806.seekRange;
  for (const _0x5c0ef3 of _0x1168f3) {
    if (_0x31743f < _0x5c0ef3.enterUntil) {
      continue;
    }
    const _0x21edec = _0x5c0ef3.x - _0x3861c5.x;
    const _0x1eb7b9 = _0x5c0ef3.y - _0x3861c5.y;
    const _0x5326ef = _0x21edec * _0x21edec + _0x1eb7b9 * _0x1eb7b9;
    if (_0x5326ef <= 0 || _0x5326ef > _0x5a7745) {
      continue;
    }
    const _0x266dfa = (_0x21edec * _0xba17de + _0x1eb7b9 * _0x292aeb) / Math.sqrt(_0x5326ef);
    if (_0x266dfa < _0x4ad9f9) {
      continue;
    }
    const _0x598909 = _0x5326ef * (1 + (1 - _0x266dfa) * 2.4);
    if (_0x598909 < _0xe97eab || _0x598909 === _0xe97eab && _0x5c0ef3.id < _0x3a9f7b.id) {
      _0x3a9f7b = _0x5c0ef3;
      _0xe97eab = _0x598909;
    }
  }
  if (_0x3a9f7b) {
    _0x3861c5.seekTargetId = _0x3a9f7b.id;
    _0x3861c5.seekLocksLeft--;
  }
  return _0x3a9f7b;
}
const C = {
  hit: false,
  t: 2,
  x: 0,
  top: -999,
  kind: ""
};
const K = {
  top: -999,
  x0: 0,
  x1: 0,
  kind: ""
};
const O = {
  top: -999,
  x0: 0,
  x1: 0,
  kind: ""
};
const E = 1e-7;
function H(_0x3abe87, _0x579795, _0x59a5e8, _0x36e9dd, _0x328f28, _0x3beb72) {
  if (!(Math.abs(_0x579795 - _0x3beb72) >= (_0x3abe87.top > -100 ? Math.abs(_0x3abe87.top - _0x3beb72) : Infinity))) {
    _0x3abe87.top = _0x579795;
    _0x3abe87.x0 = _0x59a5e8;
    _0x3abe87.x1 = _0x36e9dd;
    _0x3abe87.kind = _0x328f28;
  }
}
function q(_0x1cb406, _0x44d0be, _0x116204) {
  _0x116204.top = -999;
  _0x116204.x0 = 0;
  _0x116204.x1 = 0;
  _0x116204.kind = "";
  const _0xcf2515 = Math.floor(_0x1cb406);
  const _0x2ceffb = _0xcf2515 < 0 || _0xcf2515 >= _0x275926.length || _0x275926[_0xcf2515] <= -100 || _0x18b5de(_0xcf2515);
  if (_0xcf2515 >= 0 && _0xcf2515 < _0x275926.length && _0x275926[_0xcf2515] > -100 && _0x18b5de(_0xcf2515)) {
    H(_0x116204, _0x275926[_0xcf2515], _0xcf2515, _0xcf2515 + 1, "deck", _0x44d0be);
  }
  for (let _0x28b311 = 0; _0x2ceffb && _0x28b311 < _0x356fb3.length; _0x28b311++) {
    const _0x2b4601 = _0x356fb3[_0x28b311];
    if (_0x1cb406 >= _0x2b4601.x0 && _0x1cb406 < _0x2b4601.x1) {
      H(_0x116204, _0x2b4601.y1, _0x2b4601.x0, _0x2b4601.x1, "roof", _0x44d0be);
    }
  }
  for (let _0x456b65 = 0; _0x2ceffb && _0x456b65 < _0x375211.length; _0x456b65++) {
    const _0x4d74ad = _0x375211[_0x456b65];
    if (_0x1cb406 >= _0x4d74ad.x0 && _0x1cb406 < _0x4d74ad.x1) {
      H(_0x116204, _0x4d74ad.y, _0x4d74ad.x0, _0x4d74ad.x1, "platform", _0x44d0be);
    }
  }
  return _0x116204.top > -100;
}
function z(_0x473039, _0x4102fa, _0x5e4add, _0x2d6517, _0x3c10ea, _0x596b32, _0x517a47, _0x1765a3, _0x53752a, _0x1f311d) {
  const _0x5848fd = _0x5e4add - _0x3c10ea;
  if (!(_0x5848fd > 0)) {
    return;
  }
  const _0x1f14c0 = (_0x5e4add - (_0x517a47 + _0x596b32)) / _0x5848fd;
  if (_0x1f14c0 < -1e-7 || _0x1f14c0 > 1.0000001 || _0x1f14c0 >= _0x473039.t) {
    return;
  }
  const _0x328e04 = _0x4102fa + (_0x2d6517 - _0x4102fa) * Math.max(0, Math.min(1, _0x1f14c0));
  if (_0x328e04 < _0x1765a3 - E || _0x328e04 > _0x53752a + E) {
    return;
  }
  const _0x503b6a = Math.floor(_0x328e04);
  if (!(_0x503b6a >= 0) || !(_0x503b6a < _0x275926.length) || !(_0x275926[_0x503b6a] > -100) || !!_0x18b5de(_0x503b6a)) {
    _0x473039.hit = true;
    _0x473039.t = Math.max(0, Math.min(1, _0x1f14c0));
    _0x473039.x = _0x328e04;
    _0x473039.top = _0x517a47;
    _0x473039.kind = _0x1f311d;
  }
}
function X(_0x3c4bcb, _0x5a3bce, _0x508ed4, _0x2c29a1, _0x1b3c4a, _0x241479) {
  _0x241479.hit = false;
  _0x241479.t = 2;
  _0x241479.x = _0x508ed4;
  _0x241479.top = -999;
  _0x241479.kind = "";
  if (!(_0x2c29a1 < _0x5a3bce)) {
    return false;
  }
  const _0x37941f = Math.max(0, Math.floor(Math.min(_0x3c4bcb, _0x508ed4)) - 1);
  const _0x444848 = Math.min(_0x275926.length - 1, Math.floor(Math.max(_0x3c4bcb, _0x508ed4)) + 1);
  for (let _0x3e3a79 = _0x37941f; _0x3e3a79 <= _0x444848; _0x3e3a79++) {
    if (_0x275926[_0x3e3a79] > -100 && _0x18b5de(_0x3e3a79)) {
      z(_0x241479, _0x3c4bcb, _0x5a3bce, _0x508ed4, _0x2c29a1, _0x1b3c4a, _0x275926[_0x3e3a79], _0x3e3a79, _0x3e3a79 + 1, "deck");
    }
  }
  for (let _0x26b348 = 0; _0x26b348 < _0x356fb3.length; _0x26b348++) {
    const _0x3938ab = _0x356fb3[_0x26b348];
    z(_0x241479, _0x3c4bcb, _0x5a3bce, _0x508ed4, _0x2c29a1, _0x1b3c4a, _0x3938ab.y1, _0x3938ab.x0, _0x3938ab.x1, "roof");
  }
  for (let _0x497122 = 0; _0x497122 < _0x375211.length; _0x497122++) {
    const _0xf6c49c = _0x375211[_0x497122];
    z(_0x241479, _0x3c4bcb, _0x5a3bce, _0x508ed4, _0x2c29a1, _0x1b3c4a, _0xf6c49c.y, _0xf6c49c.x0, _0xf6c49c.x1, "platform");
  }
  return _0x241479.hit;
}
function _(_0x538f51, _0x4cb9b8, _0x5a489c) {
  const _0x4934c7 = Math.sign(_0x4cb9b8 - _0x538f51) || 1;
  let _0x3944ef = _0x5a489c;
  const _0x244553 = Math.floor(Math.min(_0x538f51, _0x4cb9b8));
  const _0x17dd79 = Math.ceil(Math.max(_0x538f51, _0x4cb9b8));
  for (let _0x1e2dc1 = _0x244553; _0x1e2dc1 <= _0x17dd79; _0x1e2dc1++) {
    _0x3944ef = J(_0x1e2dc1, _0x538f51, _0x4cb9b8, _0x4934c7, _0x3944ef);
  }
  for (let _0x434cd9 = 0; _0x434cd9 < _0x375211.length; _0x434cd9++) {
    _0x3944ef = J(_0x375211[_0x434cd9].x0, _0x538f51, _0x4cb9b8, _0x4934c7, _0x3944ef);
    _0x3944ef = J(_0x375211[_0x434cd9].x1, _0x538f51, _0x4cb9b8, _0x4934c7, _0x3944ef);
  }
  for (let _0x5072bf = 0; _0x5072bf < _0x356fb3.length; _0x5072bf++) {
    _0x3944ef = J(_0x356fb3[_0x5072bf].x0, _0x538f51, _0x4cb9b8, _0x4934c7, _0x3944ef);
    _0x3944ef = J(_0x356fb3[_0x5072bf].x1, _0x538f51, _0x4cb9b8, _0x4934c7, _0x3944ef);
  }
  return _0x3944ef;
}
function J(_0x17402b, _0x32441c, _0x4d5f9c, _0x152453, _0x44d086) {
  if (_0x152453 > 0) {
    if (_0x17402b > _0x32441c + E && _0x17402b <= _0x4d5f9c + E && _0x17402b < _0x44d086) {
      return _0x17402b;
    }
  } else if (_0x17402b < _0x32441c - E && _0x17402b >= _0x4d5f9c - E && _0x17402b > _0x44d086) {
    return _0x17402b;
  }
  return _0x44d086;
}
export function updateBullets(_0x34ef73) {
  for (let _0x32b724 = 0; _0x32b724 < 256; _0x32b724++) {
    const _0x1006b7 = bulletPool[_0x32b724];
    if (!_0x1006b7.alive) {
      _0x379cfb.bullets.hideSlot(_0x32b724);
      continue;
    }
    const _0x4688b9 = _0x1006b7.def || _0x2daa75.weapons[_0x1006b7.type] || _0x2daa75.weapons.R;
    if (!_0x1006b7.crawling && _0x4688b9.turnRate > 0 && _0x4688b9.seekRange > 0 && _0x31743f < _0x1006b7.seekUntil) {
      const _0x1fce73 = B(_0x1006b7, _0x4688b9);
      if (_0x1fce73) {
        const _0x44cb30 = Math.hypot(_0x1fce73.x - _0x1006b7.x, _0x1fce73.y - _0x1006b7.y);
        const _0x1c948c = Math.min(0.28, _0x44cb30 / Math.max(1, _0x4688b9.speed) * (_0x4688b9.seekLead || 0));
        const _0x2e09ce = _0x1fce73.x + _0x1fce73.vx * _0x1c948c;
        const _0x2dddf2 = _0x1fce73.y + _0x1fce73.vy * _0x1c948c;
        const _0x147441 = Math.atan2(_0x1006b7.vy, _0x1006b7.vx);
        let _0x50e9b3 = Math.atan2(_0x2dddf2 - _0x1006b7.y, _0x2e09ce - _0x1006b7.x) - _0x147441;
        while (_0x50e9b3 > Math.PI) {
          _0x50e9b3 -= Math.PI * 2;
        }
        while (_0x50e9b3 < -Math.PI) {
          _0x50e9b3 += Math.PI * 2;
        }
        const _0x3c30bd = _0x33461c(_0x147441, _0x147441 + _0x50e9b3, _0x4688b9.turnRate * _0x34ef73);
        _0x1006b7.vx = Math.cos(_0x3c30bd) * _0x4688b9.speed;
        _0x1006b7.vy = Math.sin(_0x3c30bd) * _0x4688b9.speed;
      }
    }
    if (_0x1006b7.type === "F" && !_0x1006b7.crawling && _0x31743f >= _0x1006b7.gravityAt) {
      _0x1006b7.vy += _0x4688b9.dropAccel * _0x34ef73;
    }
    const _0x43f9a5 = _0x1006b7.crawling ? _0x4688b9.crawlSpeed : Math.hypot(_0x1006b7.vx, _0x1006b7.vy);
    const _0x5ab9a1 = Math.min(4, Math.max(1, Math.ceil(_0x43f9a5 * _0x34ef73 / 0.45)));
    const _0x29d5b0 = _0x34ef73 / _0x5ab9a1;
    let _0x11f42e = false;
    let _0x3f0419 = "";
    for (let _0x120720 = 0; _0x120720 < _0x5ab9a1 && !_0x11f42e; _0x120720++) {
      const _0x1bca20 = _0x1006b7.x;
      let _0x546b4c = false;
      let _0x32ba0a = false;
      if (_0x1006b7.type !== "F" || _0x1006b7.crawling) {
        if (_0x1006b7.type === "F") {
          if (_0x31743f >= _0x1006b7.crawlUntil || _0x1006b7.crawlTilesLeft <= 0) {
            _0x11f42e = true;
            _0x3f0419 = "lifetime";
            break;
          }
          _0x1006b7.x += _0x1006b7.dir * _0x4688b9.crawlSpeed * _0x29d5b0;
          _0x32ba0a = true;
        } else {
          _0x1006b7.x += _0x1006b7.vx * _0x29d5b0;
          _0x1006b7.y += _0x1006b7.vy * _0x29d5b0;
        }
      } else {
        const _0x232ae2 = _0x1006b7.x + _0x1006b7.vx * _0x29d5b0;
        const _0xf67818 = _0x1006b7.y + _0x1006b7.vy * _0x29d5b0;
        if (X(_0x1006b7.x, _0x1006b7.y, _0x232ae2, _0xf67818, _0x4688b9.hugY, C)) {
          const _0x3f5b5c = _0x4688b9.phaseSurfaceCost || 0.35;
          if (C.kind === "platform" && _0x1006b7.phaseTilesLeft >= _0x3f5b5c) {
            _0x1006b7.phaseTilesLeft -= _0x3f5b5c;
            _0x1006b7.x = _0x232ae2;
            _0x1006b7.y = _0xf67818;
          } else {
            _0x1006b7.x = C.x;
            _0x1006b7.y = C.top + _0x4688b9.hugY;
            _0x546b4c = true;
          }
        } else {
          _0x1006b7.x = _0x232ae2;
          _0x1006b7.y = _0xf67818;
        }
      }
      if (_0x56bbb0(Y, _0x1bca20, _0x1006b7.x)) {
        _0x379cfb.bullets.bendCulled(_0x32b724, _0x1006b7, _0x1bca20);
        _0x11f42e = true;
        _0x3f0419 = "bend";
        break;
      }
      if (_0x546b4c) {
        _0x1006b7.crawling = true;
        _0x1006b7.crawlSurfaceY = C.top;
        _0x1006b7.crawlUntil = Math.min(_0x1006b7.dieAt, _0x31743f + _0x4688b9.crawlLifeMs);
        _0x1006b7.crawlTilesLeft = _0x4688b9.crawlTiles;
        _0x379cfb.bullets.deckIgnited(_0x32b724, _0x1006b7, C.x, C.top, "deck-ignite", C.kind);
      }
      if (_0x32ba0a) {
        const _0x3b87a5 = _0x1bca20 - _0x1006b7.dir * 0.000001;
        const _0x297c97 = _0x1006b7.x + _0x1006b7.dir * 0.000001;
        const _0x377dc7 = q(_0x3b87a5, _0x1006b7.crawlSurfaceY, K);
        const _0x1495df = q(_0x297c97, _0x1006b7.crawlSurfaceY, O);
        const _0x50d8f6 = _0x1495df ? O.top - _0x1006b7.crawlSurfaceY : Infinity;
        const _0x697676 = _0x1495df ? _0x1006b7.crawlSurfaceY - O.top : Infinity;
        const _0x268288 = _0x296252(_0x1006b7.x, _0x1006b7.y + _0x4688b9.probeY);
        if (!_0x377dc7 || !_0x1495df || _0x50d8f6 > _0x4688b9.crawlStepUpMax || _0x697676 > _0x4688b9.crawlDropMax || _0x268288) {
          const _0x3e8fc5 = _0x1006b7.dir > 0 ? _0x377dc7 ? K.x1 : _0x1006b7.x : _0x377dc7 ? K.x0 : _0x1006b7.x;
          _0x1006b7.x = _(_0x1bca20, _0x1006b7.x, _0x3e8fc5);
          _0x1006b7.y = _0x1006b7.crawlSurfaceY + _0x4688b9.hugY;
          _0x11f42e = true;
          _0x3f0419 = "terrain";
          break;
        }
        const _0x183cf7 = Math.abs(_0x1006b7.x - _0x1bca20);
        _0x1006b7.crawlTilesLeft -= _0x183cf7;
        _0x1006b7.crawlSurfaceY = O.top;
        _0x1006b7.y = O.top + _0x4688b9.hugY;
      }
      if (_0x1006b7.crawling ? _0x296252(_0x1006b7.x, _0x1006b7.y + _0x4688b9.probeY) : _0x296252(_0x1006b7.x, _0x1006b7.y)) {
        if (_0x1006b7.crawling || !(_0x1006b7.phaseTilesLeft > 0)) {
          _0x11f42e = true;
          _0x3f0419 = "terrain";
          break;
        }
        _0x1006b7.phaseTilesLeft -= Math.max(0.01, _0x43f9a5 * _0x29d5b0);
        if (_0x1006b7.phaseTilesLeft < 0) {
          _0x11f42e = true;
          _0x3f0419 = "terrain";
          break;
        }
      }
      for (let _0x4038af = _0x1168f3.length - 1; _0x4038af >= 0; _0x4038af--) {
        const _0x3026a7 = _0x1168f3[_0x4038af];
        if (_0x31743f < _0x3026a7.enterUntil) {
          continue;
        }
        if (_0x1006b7.hitSet.has(_0x3026a7.id)) {
          continue;
        }
        const _0x166011 = (_0x3026a7.shotR || _0x3026a7.hitR) + (_0x1006b7.crawling ? _0x4688b9.crawlHitRadius || 0 : _0x4688b9.hitRadius || 0);
        if ((_0x1006b7.x - _0x3026a7.x) ** 2 + (_0x1006b7.y - _0x3026a7.y) ** 2 < _0x166011 * _0x166011) {
          const _0x504fce = _0x3026a7.id;
          const _0xc5be69 = _0x1006b7.pierceLeft > 0;
          if (_0xc5be69) {
            _0x1006b7.hitSet.add(_0x504fce);
            _0x1006b7.pierceLeft--;
          }
          const _0x264551 = _0x1006b7.crawling ? _0x1006b7.dir * _0x4688b9.crawlSpeed : _0x1006b7.vx;
          const _0x3c2333 = _0x1006b7.crawling ? 0 : _0x1006b7.vy;
          const _0x4a35e4 = _0x3026a7.kind;
          const _0x168cb1 = _0x1fa0d1(_0x3026a7, _0x4038af, _0x1006b7.damage, _0x1006b7.type, _0x264551);
          const _0x119be7 = !_0x1168f3.includes(_0x3026a7);
          _0x379cfb.bullets.hostileImpact(_0x32b724, _0x1006b7.type, _0x1006b7.x, _0x1006b7.y, _0x264551, _0x3c2333, _0x504fce, _0x4a35e4, _0x168cb1, _0x119be7);
          if (!_0x119be7 && _0x4688b9.heavyImpulse > 0) {
            _0x20982a(_0x3026a7, _0x1006b7.vx, _0x1006b7.vy, _0x4688b9.heavyImpulse, _0x4688b9.heavyStunMs);
          }
          if (_0x4688b9.volatileRadius > 0) {
            W(_0x1006b7, _0x504fce, _0x4688b9);
          }
          if (!_0xc5be69) {
            _0x11f42e = true;
            _0x3f0419 = "hostile";
          }
          break;
        }
      }
    }
    const _0xccff79 = _0x31743f > _0x1006b7.dieAt;
    if (_0x4688b9.volatileRadius > 0 && (_0x3f0419 === "terrain" || !_0x11f42e && _0xccff79)) {
      W(_0x1006b7, 0, _0x4688b9);
    }
    if (_0x11f42e || _0xccff79) {
      F(_0x1006b7, _0x32b724, _0x11f42e ? _0x3f0419 : "lifetime");
    } else {
      _0x379cfb.bullets.syncSlot(_0x32b724, _0x1006b7);
    }
  }
  _0x379cfb.bullets.flush();
}
export function clearBullets() {
  for (const _0x8e38e of bulletPool) {
    _0x8e38e.alive = false;
  }
}
function N(_0x2fc903, _0x7d7fb8) {
  currentGun = _0x2fc903;
  currentWeapon = _0x2fc903.letter;
  I = _0x7d7fb8;
  U = j(_0x2fc903);
  return U;
}
export function setGun(_0x3111dd) {
  const _0x62e39e = _0x3111dd && _0x2daa75.weapons[_0x3111dd.letter] ? _0x3111dd : G;
  if (_0x62e39e.starter) {
    carriedGun = null;
    N(G, false);
  } else {
    carriedGun = _0x62e39e;
    N(_0x62e39e, true);
  }
  weaponHeldSince = _0x31743f;
  return U;
}
export function setWeapon(_0x2b4637) {
  setGun(_0x2b4637 === "R" ? G : R[_0x2b4637] || G);
}
export function swapWeapon() {
  return !!carriedGun && (I ? N(G, false) : N(carriedGun, true), true);
}
export function dropCarriedGun() {
  const _0x5b86e2 = carriedGun;
  if (_0x5b86e2) {
    carriedGun = null;
    N(G, false);
    return _0x5b86e2;
  } else {
    return null;
  }
}
export function resetWeaponKills() {
  for (const _0x1d457c of Object.keys(weaponKills)) {
    weaponKills[_0x1d457c] = 0;
  }
}
export function resetShotsFired() {
  shotsFired = 0;
}