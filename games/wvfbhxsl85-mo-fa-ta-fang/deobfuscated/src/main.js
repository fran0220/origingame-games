import * as _0x5335dc from "three";
import { COLS as _0xc7ade8, ROWS as _0x1a43e1, CELL as _0x116353, createGrid as _0x1b907b, cellToWorld as _0x2ee6f9, worldToCell as _0x3feb05, inBounds as _0x147fa2, getCell as _0x3edf2c } from "./grid.js";
import { findPath as _0x654ce0, canPlaceTower as _0x4112d2 } from "./pathfinding.js";
import { TOWER_TYPES as _0x3c200e, TOWER_ORDER as _0x188daa, START_GOLD as _0x3a2d1b, START_HP as _0x2687b7, TOTAL_WAVES as _0x72f8f6, WAVE_CLEAR_BONUS as _0x35971b, WAVES as _0x2a2901, enemyStatsForWave as _0x5cceb1, towerRange as _0x4d93da, towerSellValue as _0x587698, towerStatsAtLevel as _0x201236, towerMaxLevel as _0x504a45 } from "./config.js";
import { nextTowerId as _0x417b5f, createTowerMesh as _0x2d81f6, createGhostTower as _0x1f5f03, createRangeRing as _0x2feb21, setRangeRingRadius as _0x22cb80, placeAtCell as _0x5c7fda } from "./towers.js";
import { spawnEnemy as _0x151f8d, updateEnemy as _0x2e34c1, markRepath as _0x4c970d, collectEnemyCells as _0x34851d, disposeEnemy as _0x234847, orientEnemyBars as _0xb429da, setEnemyHpBar as _0x505078 } from "./enemies.js";
import { tickTowerFire as _0x270891, updateProjectile as _0x53a199, applyHit as _0x4e9d11, applyAoe as _0x30e6e8, createHitFlash as _0x17ccf6, clearSlowVisualIfNeeded as _0x326e5d } from "./combat.js";
import { loadBoardTextures as _0xa14c4b, preloadUiIcons as _0x8f9b45 } from "./assets.js";
import { unlockAudio as _0x7cce98, playSfx as _0x1a7f66, playBgm as _0xddc897, playTowerShot as _0x1929f5 } from "./audio.js";
const Y = document.getElementById("game-canvas");
const q = document.getElementById("hint-bar");
const K = document.getElementById("stat-gold");
const J = document.getElementById("stat-hp");
const Q = document.getElementById("stat-wave");
const Z = document.getElementById("hp-fill");
const ee = document.getElementById("phase-pill");
const te = document.getElementById("tower-panel");
const ne = document.getElementById("tp-name");
const oe = document.getElementById("tp-level");
const se = document.getElementById("tp-stats");
const ae = document.getElementById("tp-range");
const ie = document.getElementById("tp-sell");
const re = document.getElementById("tp-icon");
const le = document.getElementById("btn-sell");
const de = document.getElementById("btn-upgrade");
const ce = document.getElementById("btn-cancel");
const me = document.getElementById("btn-wave");
const pe = document.getElementById("game-overlay");
const ue = document.getElementById("overlay-title");
const he = document.getElementById("overlay-desc");
const we = document.getElementById("overlay-badge");
const fe = document.getElementById("os-waves");
const ge = document.getElementById("os-kills");
const ye = document.getElementById("os-gold");
const ve = document.getElementById("os-hp");
const xe = document.getElementById("btn-restart");
const be = {
  archer: "assets/generated/icon-archer.png",
  mage: "assets/generated/icon-mage.png",
  frost: "assets/generated/icon-frost.png"
};
const Me = {
  archer: document.getElementById("btn-archer"),
  mage: document.getElementById("btn-mage"),
  frost: document.getElementById("btn-frost")
};
function Ie(_0x227c3a, _0x481f51 = "") {
  if (q) {
    q.textContent = _0x227c3a;
    q.classList.remove("warning", "error");
    if (_0x481f51) {
      q.classList.add(_0x481f51);
    }
  }
}
let ke = _0x3a2d1b;
let Se = _0x2687b7;
let $e = [];
let Be = 0;
let Ee = 0;
let Ce = "prepare";
let Le = 0;
let Pe = -1;
let Ge = [];
let Ue = null;
let _e = [];
let Re = 0;
let ze = 0;
function He() {
  if (K) {
    K.textContent = String(ke);
  }
  if (J) {
    J.textContent = String(Math.max(0, Se));
  }
  if (Z) {
    const _0x12ba3d = Math.max(0, Math.min(1, Se / _0x2687b7));
    Z.style.width = _0x12ba3d * 100 + "%";
  }
  const _0xdaa99b = Ce === "prepare" && Le === 0 ? 0 : Ce === "won" ? _0x72f8f6 : Math.max(Le, Pe + 1);
  if (Q) {
    Q.textContent = _0xdaa99b + " / " + _0x72f8f6;
  }
  if (ee) {
    ee.textContent = Ce === "prepare" && Le === 0 ? "布防阶段" : Ce === "prepare" ? "整备阶段" : Ce === "wave_clear" ? "波次肃清" : Ce === "spawning" || Ce === "combat" ? "战斗 · 第 " + (Pe + 1) + " 波" : Ce === "won" ? "胜利" : Ce === "lost" ? "失败" : "";
    ee.classList.remove("combat", "won", "lost");
    if (Ce === "spawning" || Ce === "combat") {
      ee.classList.add("combat");
    } else if (Ce === "won") {
      ee.classList.add("won");
    } else if (Ce === "lost") {
      ee.classList.add("lost");
    }
  }
  for (const _0x10249d of _0x188daa) {
    const _0xc38718 = _0x3c200e[_0x10249d];
    const _0x4ac20a = Me[_0x10249d];
    if (_0x4ac20a && _0xc38718) {
      const _0x5f5347 = _0x4ac20a.querySelector(".cost");
      if (_0x5f5347) {
        _0x5f5347.textContent = String(_0xc38718.cost);
      }
      _0x4ac20a.classList.toggle("unaffordable", ke < _0xc38718.cost);
    }
  }
  if (me) {
    const _0x1822cb = Ce === "prepare" || Ce === "wave_clear";
    me.disabled = !_0x1822cb || Ce === "won" || Ce === "lost";
    me.textContent = Ce === "won" ? "已通关" : Ce === "lost" ? "已失败" : Ce === "spawning" || Ce === "combat" ? "波次进行中…" : Le >= _0x72f8f6 ? "已通关" : Le === 0 ? "开始第 1 波" : "开始第 " + (Le + 1) + " 波";
  }
}
He();
const je = new _0x5335dc.Scene();
je.name = "MainScene";
je.background = new _0x5335dc.Color(1713984);
je.fog = new _0x5335dc.Fog(1713984, 28, 48);
const De = new _0x5335dc.OrthographicCamera(-1, 1, 1, -1, 0.1, 80);
De.name = "IsoCamera";
De.position.set(14, 16, 14);
De.up.set(0, 1, 0);
De.lookAt(0, 0, 0);
const Oe = new _0x5335dc.WebGLRenderer({
  canvas: Y,
  antialias: true,
  alpha: false
});
function Ae() {
  const _0x5ce954 = window.innerWidth;
  const _0x4b73db = window.innerHeight;
  const _0x10b1e9 = _0x5ce954 / Math.max(_0x4b73db, 1);
  De.left = _0x10b1e9 * -14 / 2;
  De.right = _0x10b1e9 * 14 / 2;
  De.top = 7;
  De.bottom = -7;
  De.updateProjectionMatrix();
  Oe.setSize(_0x5ce954, _0x4b73db, false);
}
Oe.outputColorSpace = _0x5335dc.SRGBColorSpace;
Oe.toneMapping = _0x5335dc.ACESFilmicToneMapping;
Oe.toneMappingExposure = 1.05;
Oe.shadowMap.enabled = true;
Oe.shadowMap.type = _0x5335dc.PCFSoftShadowMap;
Oe.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
const Te = new _0x5335dc.HemisphereLight(13229567, 3811864, 0.85);
Te.name = "HemisphereLight";
je.add(Te);
const We = new _0x5335dc.DirectionalLight(16773332, 1.15);
We.name = "SunLight";
We.position.set(10, 18, 6);
We.castShadow = true;
We.shadow.mapSize.set(1024, 1024);
We.shadow.camera.near = 2;
We.shadow.camera.far = 40;
We.shadow.camera.left = -12;
We.shadow.camera.right = 12;
We.shadow.camera.top = 12;
We.shadow.camera.bottom = -12;
je.add(We);
const Fe = new _0x5335dc.DirectionalLight(8956671, 0.25);
Fe.name = "FillLight";
Fe.position.set(-8, 6, -4);
je.add(Fe);
const Ne = _0x1b907b();
const {
  cells: Ve,
  spawn: Xe,
  base: Ye
} = Ne;
const qe = new _0x5335dc.Group();
qe.name = "BoardRoot";
je.add(qe);
Ue = new _0x5335dc.Group();
Ue.name = "EnemyRoot";
qe.add(Ue);
const Ke = new _0x5335dc.Group();
Ke.name = "ProjectileRoot";
qe.add(Ke);
let Je = [];
let Qe = [];
const Ze = new _0x5335dc.MeshStandardMaterial({
  color: 4025157,
  roughness: 0.92,
  metalness: 0.05
});
Ze.name = "GroundMatA";
const et = new _0x5335dc.MeshStandardMaterial({
  color: 3497789,
  roughness: 0.92,
  metalness: 0.05
});
et.name = "GroundMatB";
const tt = new _0x5335dc.MeshStandardMaterial({
  color: 2771506,
  roughness: 0.95,
  metalness: 0.02
});
tt.name = "PathEdgeMat";
const nt = new _0x5335dc.MeshStandardMaterial({
  color: 12886122,
  roughness: 0.95,
  metalness: 0.04
});
nt.name = "PathDirtMat";
_0x8f9b45();
_0xa14c4b().then(({
  grass: _0x25da07,
  dirt: _0x2ac348
}) => {
  Ze.map = _0x25da07.clone();
  Ze.map.offset.set(0.02, 0.01);
  Ze.map.needsUpdate = true;
  Ze.color.setHex(16777215);
  Ze.needsUpdate = true;
  et.map = _0x25da07.clone();
  et.map.offset.set(0.35, 0.22);
  et.map.needsUpdate = true;
  et.color.setHex(15266020);
  et.needsUpdate = true;
  nt.map = _0x2ac348;
  nt.color.setHex(16777215);
  nt.needsUpdate = true;
  tt.map = _0x2ac348.clone();
  tt.map.offset.set(0.1, 0.15);
  tt.map.needsUpdate = true;
  tt.color.setHex(13676672);
  tt.needsUpdate = true;
  if (ct) {
    pt(ct);
  }
}).catch(() => {});
const ot = new _0x5335dc.BoxGeometry(_0x116353 * 0.96, 0.18, _0x116353 * 0.96);
ot.translate(0, 0.09, 0);
const st = new Map();
function at(_0x79548f, _0x13cd3b) {
  return _0x79548f + "," + _0x13cd3b;
}
function it(_0x473294, _0x2f8c81, _0x54acd5, _0x39b06d = 0.85) {
  const _0x2f21ab = new _0x5335dc.Group();
  _0x2f21ab.name = _0x473294;
  const _0x1eb039 = new _0x5335dc.Mesh(new _0x5335dc.CylinderGeometry(0.28, 0.34, 0.12, 16), new _0x5335dc.MeshStandardMaterial({
    color: 2763314,
    roughness: 0.7,
    metalness: 0.2
  }));
  _0x1eb039.name = _0x473294 + "_Base";
  _0x1eb039.position.y = 0.08;
  _0x1eb039.castShadow = true;
  _0x2f21ab.add(_0x1eb039);
  const _0x3d853c = new _0x5335dc.Mesh(new _0x5335dc.CylinderGeometry(0.16, 0.2, _0x39b06d, 12), new _0x5335dc.MeshStandardMaterial({
    color: _0x2f8c81,
    emissive: _0x54acd5,
    emissiveIntensity: 0.35,
    roughness: 0.45,
    metalness: 0.25
  }));
  _0x3d853c.name = _0x473294 + "_Pillar";
  _0x3d853c.position.y = 0.12 + _0x39b06d * 0.5;
  _0x3d853c.castShadow = true;
  _0x2f21ab.add(_0x3d853c);
  const _0x467e01 = new _0x5335dc.Mesh(new _0x5335dc.OctahedronGeometry(0.18, 0), new _0x5335dc.MeshStandardMaterial({
    color: _0x2f8c81,
    emissive: _0x54acd5,
    emissiveIntensity: 0.7,
    roughness: 0.3,
    metalness: 0.4
  }));
  _0x467e01.name = _0x473294 + "_Gem";
  _0x467e01.position.y = 0.18 + _0x39b06d + 0.12;
  _0x467e01.castShadow = true;
  _0x2f21ab.add(_0x467e01);
  return _0x2f21ab;
}
const rt = new _0x5335dc.Group();
rt.name = "PathPreview";
qe.add(rt);
const lt = new _0x5335dc.SphereGeometry(0.1, 10, 10);
const dt = new _0x5335dc.MeshStandardMaterial({
  color: 16769162,
  emissive: 11173920,
  emissiveIntensity: 0.55,
  roughness: 0.4,
  metalness: 0.2,
  transparent: true,
  opacity: 0.9
});
let ct = null;
function mt(_0x2139d4, _0x2e7565 = {}) {
  while (rt.children.length) {
    const _0x7375d2 = rt.children.pop();
    if (_0x7375d2) {
      rt.remove(_0x7375d2);
    }
  }
  const _0x54d6ab = _0x2139d4 || _0x654ce0(Ve, Xe, Ye, {
    extraBlock: _0x2e7565.extraBlock ?? null
  });
  if (!_0x54d6ab || _0x54d6ab.length < 2) {
    return;
  }
  for (let _0x7e0537 = 0; _0x7e0537 < _0x54d6ab.length; _0x7e0537++) {
    const _0x51009d = _0x54d6ab[_0x7e0537];
    const _0x117ea9 = new _0x5335dc.Mesh(lt, dt);
    _0x117ea9.name = "PathDot_" + _0x7e0537;
    const _0x3dac64 = _0x2ee6f9(_0x51009d.x, _0x51009d.y, 0);
    _0x117ea9.position.set(_0x3dac64.x, 0.28, _0x3dac64.z);
    rt.add(_0x117ea9);
  }
  const _0x2190b3 = _0x54d6ab.map(_0x430577 => {
    const _0x3da7bc = _0x2ee6f9(_0x430577.x, _0x430577.y, 0);
    return new _0x5335dc.Vector3(_0x3da7bc.x, 0.26, _0x3da7bc.z);
  });
  const _0x23fc0b = new _0x5335dc.CatmullRomCurve3(_0x2190b3, false, "catmullrom", 0.1);
  const _0x17b0b0 = new _0x5335dc.Mesh(new _0x5335dc.TubeGeometry(_0x23fc0b, Math.max(_0x54d6ab.length * 4, 8), 0.035, 6, false), new _0x5335dc.MeshBasicMaterial({
    color: 16766314,
    transparent: true,
    opacity: 0.55,
    depthWrite: false
  }));
  _0x17b0b0.name = "PathTube";
  rt.add(_0x17b0b0);
}
function pt(_0x233cc7) {
  for (const _0x2eba1a of st.values()) {
    const _0xf684e = _0x2eba1a.userData.gridX;
    const _0x35a4c0 = _0x2eba1a.userData.gridY;
    const _0x1b50d9 = _0x3edf2c(Ve, _0xf684e, _0x35a4c0);
    if (!_0x1b50d9) {
      continue;
    }
    if (_0x1b50d9.kind === "spawn" || _0x1b50d9.kind === "base") {
      _0x2eba1a.material = tt;
      continue;
    }
    const _0x3b6104 = (_0xf684e + _0x35a4c0) % 2 == 0;
    _0x2eba1a.material = _0x3b6104 ? Ze : et;
  }
  if (_0x233cc7) {
    for (const _0xb05e13 of _0x233cc7) {
      const _0xfbc835 = _0x3edf2c(Ve, _0xb05e13.x, _0xb05e13.y);
      if (!_0xfbc835 || _0xfbc835.kind === "spawn" || _0xfbc835.kind === "base") {
        continue;
      }
      if (_0xfbc835.towerId) {
        continue;
      }
      const _0x4caa75 = st.get(at(_0xb05e13.x, _0xb05e13.y));
      if (_0x4caa75) {
        _0x4caa75.material = nt;
      }
    }
  }
}
function ut() {
  ct = _0x654ce0(Ve, Xe, Ye);
  mt(ct);
  pt(ct);
}
const ht = new _0x5335dc.MeshStandardMaterial({
  color: 11065599,
  emissive: 3834048,
  emissiveIntensity: 0.55,
  transparent: true,
  opacity: 0.55,
  depthWrite: false,
  roughness: 0.4,
  metalness: 0.1
});
const wt = new _0x5335dc.MeshStandardMaterial({
  color: 16769162,
  emissive: 11567136,
  emissiveIntensity: 0.65,
  transparent: true,
  opacity: 0.65,
  depthWrite: false,
  roughness: 0.35,
  metalness: 0.15
});
const ft = new _0x5335dc.MeshStandardMaterial({
  color: 16747146,
  emissive: 8396832,
  emissiveIntensity: 0.5,
  transparent: true,
  opacity: 0.5,
  depthWrite: false,
  roughness: 0.4,
  metalness: 0.1
});
const gt = new _0x5335dc.MeshStandardMaterial({
  color: 7196554,
  emissive: 1736768,
  emissiveIntensity: 0.55,
  transparent: true,
  opacity: 0.55,
  depthWrite: false,
  roughness: 0.4,
  metalness: 0.1
});
const yt = new _0x5335dc.BoxGeometry(_0x116353 * 0.98, 0.05, _0x116353 * 0.98);
const vt = new _0x5335dc.Mesh(yt, ht);
vt.name = "HoverOverlay";
vt.visible = false;
vt.renderOrder = 2;
qe.add(vt);
const xt = new _0x5335dc.Mesh(yt, wt);
xt.name = "SelectOverlay";
xt.visible = false;
xt.renderOrder = 3;
qe.add(xt);
let bt = null;
let Mt = null;
function It(_0x30fa62, _0x209106, _0x31955c, _0x55acf2 = 0.2) {
  const _0x57e88e = _0x2ee6f9(_0x209106, _0x31955c, 0);
  _0x30fa62.position.set(_0x57e88e.x, _0x55acf2, _0x57e88e.z);
  _0x30fa62.visible = true;
}
const kt = new Map();
let St = null;
let $t = null;
const Bt = new _0x5335dc.Group();
Bt.name = "GhostRoot";
qe.add(Bt);
let Et = null;
const Ct = _0x2feb21(2.6, 8304383);
Ct.visible = false;
qe.add(Ct);
const Lt = _0x2feb21(2.6, 16769162);
function Pt() {
  if (Et) {
    Bt.remove(Et);
    Et.traverse(_0x19a160 => {
      if (_0x19a160.isMesh) {
        _0x19a160.geometry?.dispose?.();
        if (_0x19a160.material) {
          if (Array.isArray(_0x19a160.material)) {
            _0x19a160.material.forEach(_0x28b653 => _0x28b653.dispose());
          } else {
            _0x19a160.material.dispose();
          }
        }
      }
    });
    Et = null;
  }
  Ct.visible = false;
}
function Gt(_0x22cb8e) {
  if (!_0x22cb8e || _0x3c200e[_0x22cb8e]) {
    St = St === _0x22cb8e ? null : _0x22cb8e;
    $t = null;
    _t();
    Lt.visible = false;
    for (const _0x5415cf of _0x188daa) {
      const _0x57755b = Me[_0x5415cf];
      if (_0x57755b) {
        _0x57755b.classList.toggle("active", St === _0x5415cf);
      }
    }
    Pt();
    if (St) {
      Et = _0x1f5f03(St);
      Bt.add(Et);
      Et.visible = false;
      const _0x5dd183 = _0x4d93da(St, 0);
      _0x22cb80(Ct, _0x5dd183);
      Ct.material.color.setHex(8304383);
      Ie("建造 " + _0x3c200e[St].name + "（" + _0x3c200e[St].cost + " 金）· 点击可建格 · 右键取消");
    } else {
      Ie("选择塔种后点击可建格放置 · 不能封死通路");
    }
    Yt();
  }
}
function Ut(_0x692430, _0x26faa5) {
  const _0x3e6824 = _0x3edf2c(Ve, _0x692430, _0x26faa5);
  return _0x3e6824?.towerId && kt.get(_0x3e6824.towerId) || null;
}
function _t() {
  if (!te) {
    return;
  }
  if (!$t || !kt.has($t)) {
    te.classList.remove("visible");
    return;
  }
  const _0x7ffe2a = kt.get($t);
  if (!_0x7ffe2a) {
    te.classList.remove("visible");
    return;
  }
  const _0x4c377c = _0x3c200e[_0x7ffe2a.typeId];
  const _0x3ebfe9 = _0x201236(_0x7ffe2a.typeId, _0x7ffe2a.level);
  te.classList.add("visible");
  if (re) {
    re.src = be[_0x7ffe2a.typeId] || be.archer;
  }
  if (ne) {
    ne.textContent = _0x4c377c?.name || _0x7ffe2a.typeId;
  }
  if (oe) {
    const _0x8c2e7d = _0x504a45(_0x7ffe2a.typeId);
    oe.textContent = "等级 " + (_0x7ffe2a.level + 1) + " / " + (_0x8c2e7d + 1);
  }
  if (se && _0x3ebfe9) {
    let _0x47c823 = "";
    if (_0x3ebfe9.aoe > 0) {
      _0x47c823 += " · 溅 " + _0x3ebfe9.aoe.toFixed(1);
    }
    if (_0x3ebfe9.slow > 0) {
      _0x47c823 += " · 缓 " + Math.round(_0x3ebfe9.slow * 100) + "%";
    }
    se.textContent = _0x3ebfe9.damage + " 伤 · " + _0x3ebfe9.fireRate.toFixed(2) + "/s" + _0x47c823;
  }
  if (ae) {
    ae.textContent = _0x4d93da(_0x7ffe2a.typeId, _0x7ffe2a.level).toFixed(1);
  }
  if (ie) {
    ie.textContent = _0x587698(_0x7ffe2a.typeId, _0x7ffe2a.level) + " 金";
  }
  if (de && _0x3ebfe9) {
    if (_0x3ebfe9.nextUpgradeCost == null) {
      de.textContent = "已满级";
      de.disabled = true;
    } else {
      de.textContent = "升级 " + _0x3ebfe9.nextUpgradeCost;
      de.disabled = ke < _0x3ebfe9.nextUpgradeCost;
    }
  }
}
function Rt(_0x358fce) {
  qe.remove(_0x358fce);
  _0x358fce.traverse(_0x1a7d34 => {
    if (_0x1a7d34.isMesh) {
      _0x1a7d34.geometry?.dispose?.();
      if (_0x1a7d34.material) {
        if (Array.isArray(_0x1a7d34.material)) {
          _0x1a7d34.material.forEach(_0x131674 => _0x131674.dispose());
        } else {
          _0x1a7d34.material.dispose();
        }
      }
    }
  });
}
function zt() {
  if (!$t) {
    Ie("请先选中一座塔再升级", "warning");
    return;
  }
  const _0x30acb1 = kt.get($t);
  if (!_0x30acb1) {
    return;
  }
  const _0x21fc4d = _0x201236(_0x30acb1.typeId, _0x30acb1.level);
  if (!_0x21fc4d || _0x21fc4d.nextUpgradeCost == null) {
    Ie("该塔已满级", "warning");
    return;
  }
  if (ke < _0x21fc4d.nextUpgradeCost) {
    Ie("金币不足，无法升级", "error");
    return;
  }
  ke -= _0x21fc4d.nextUpgradeCost;
  _0x30acb1.level += 1;
  _0x30acb1.spent += _0x21fc4d.nextUpgradeCost;
  _0x30acb1.cooldown = Math.min(_0x30acb1.cooldown || 0, 0.2);
  const _0x270783 = _0x30acb1.mesh.position.clone();
  Rt(_0x30acb1.mesh);
  _0x30acb1.mesh = _0x2d81f6(_0x30acb1.typeId, _0x30acb1.level);
  _0x30acb1.mesh.name = "Tower_" + _0x30acb1.id;
  _0x30acb1.mesh.position.copy(_0x270783);
  qe.add(_0x30acb1.mesh);
  const _0x45ce19 = _0x4d93da(_0x30acb1.typeId, _0x30acb1.level);
  _0x22cb80(Lt, _0x45ce19);
  _0x5c7fda(Lt, _0x30acb1.x, _0x30acb1.y);
  Lt.position.y = 0.22;
  Lt.visible = true;
  He();
  _t();
  _0x1a7f66("upgrade");
  Ie("升级成功 → 等级 " + (_0x30acb1.level + 1) + "（-" + _0x21fc4d.nextUpgradeCost + "）");
}
function Ht() {
  if (!$t) {
    Ie("请先选中一座塔再出售", "warning");
    return;
  }
  const _0x32ddf2 = kt.get($t);
  if (!_0x32ddf2) {
    return;
  }
  const _0x58089b = _0x587698(_0x32ddf2.typeId, _0x32ddf2.level);
  const _0x22e902 = _0x3edf2c(Ve, _0x32ddf2.x, _0x32ddf2.y);
  if (_0x22e902) {
    _0x22e902.blocksPath = false;
    _0x22e902.buildable = true;
    _0x22e902.towerId = null;
    if (_0x22e902.kind === "spawn" || _0x22e902.kind === "base") {
      _0x22e902.buildable = false;
    }
  }
  Rt(_0x32ddf2.mesh);
  kt.delete(_0x32ddf2.id);
  ke += _0x58089b;
  $t = null;
  Lt.visible = false;
  xt.visible = false;
  _t();
  He();
  ut();
  for (const _0x758f81 of Ge) {
    if (_0x758f81.alive) {
      _0x4c970d(_0x758f81);
    }
  }
  Ie("已出售，回收 " + _0x58089b + " 金");
  Yt();
}
function jt(_0x34d79d) {
  if (!_0x34d79d) {
    return;
  }
  Be += 1;
  ke += _0x34d79d.reward || 0;
  Ie("击杀 " + (_0x34d79d.name || "敌人") + " +" + (_0x34d79d.reward || 0) + " 金");
  _0x1a7f66("kill");
  const _0x1cdf34 = _0x17ccf6(_0x34d79d.mesh.position.clone(), 16769162, 0.4);
  Ke.add(_0x1cdf34);
  Qe.push({
    mesh: _0x1cdf34,
    life: 0.2
  });
  At(_0x34d79d);
  He();
  _t();
  Vt();
}
function Dt(_0x3444eb) {
  const _0x90f222 = {
    slow: _0x3444eb.slow,
    slowDuration: _0x3444eb.slowDuration
  };
  const _0x4b33e1 = _0x3444eb.target;
  const _0x502658 = _0x3444eb.mesh.position.clone();
  const _0x261a19 = _0x3444eb.typeId === "mage" ? 11832575 : _0x3444eb.typeId === "frost" ? 8308991 : 15255666;
  const _0x32c065 = _0x17ccf6(_0x502658, _0x261a19, _0x3444eb.aoe > 0 ? 0.55 : 0.28);
  Ke.add(_0x32c065);
  Qe.push({
    mesh: _0x32c065,
    life: 0.18
  });
  _0x1a7f66("hit", 0.55);
  if (_0x4b33e1 && _0x4b33e1.alive && _0x4e9d11(_0x4b33e1, _0x3444eb.damage, _0x90f222)) {
    jt(_0x4b33e1);
  }
  if (_0x3444eb.aoe > 0) {
    const _0x11c30b = _0x30e6e8(_0x502658, _0x3444eb.aoe, _0x3444eb.damage, Ge, _0x90f222, _0x4b33e1);
    for (const _0x33000e of _0x11c30b) {
      jt(_0x33000e);
    }
  }
}
function Ot() {
  $e = _0x34851d(Ge);
}
function At(_0x5769b1, _0x27dfee = true) {
  const _0x3ed410 = Ge.indexOf(_0x5769b1);
  if (_0x3ed410 >= 0) {
    Ge.splice(_0x3ed410, 1);
  }
  if (_0x27dfee && Ue && _0x5769b1.mesh.parent) {
    Ue.remove(_0x5769b1.mesh);
    _0x234847(_0x5769b1);
  }
  Ot();
}
function Tt(_0x50657b) {
  Se -= _0x50657b.damage;
  Ee += 1;
  _0x1a7f66("leak");
  Ie("敌人突入基地！-" + _0x50657b.damage + " HP（剩余 " + Math.max(0, Se) + "）", "error");
  At(_0x50657b);
  He();
  if (Se <= 0) {
    Se = 0;
    (function () {
      Ce = "lost";
      _e = [];
      He();
      _0x1a7f66("lose");
      Ie("基地被攻陷…", "error");
      const _0x3a5e3d = Le;
      Wt("基地陷落", _0x3a5e3d > 0 ? "基地生命归零。已肃清 " + _0x3a5e3d + " 波，漏怪 " + Ee + " 只。调整迷宫后再试。" : "基地生命归零。先拉长迷宫、搭配弓箭/法师/冰霜再开战。", {
        mode: "lost"
      });
      reportProgression("campaign/1", "fail", {
        wavesCleared: _0x3a5e3d,
        kills: Be,
        leaks: Ee,
        wave: Math.max(1, Pe + 1)
      });
    })();
  }
}
function Wt(_0x9143fa, _0x5fa3e3, _0x13774c = {}) {
  const _0x56fe38 = _0x13774c.showRestart !== false;
  const _0x7da024 = _0x13774c.mode || "";
  if (pe) {
    pe.classList.add("visible");
    pe.classList.remove("won", "lost");
    if (_0x7da024) {
      pe.classList.add(_0x7da024);
    }
    if (we) {
      we.src = _0x7da024 === "lost" ? "assets/generated/ui-lose-badge.png" : "assets/generated/ui-win-badge.png";
      we.alt = _0x7da024 === "lost" ? "失败" : "胜利";
    }
    if (ue) {
      ue.textContent = _0x9143fa;
    }
    if (he) {
      he.textContent = _0x5fa3e3;
    }
    if (fe) {
      fe.textContent = String(Le);
    }
    if (ge) {
      ge.textContent = String(Be);
    }
    if (ye) {
      ye.textContent = String(ke);
    }
    if (ve) {
      ve.textContent = String(Math.max(0, Se));
    }
    if (xe) {
      xe.style.display = _0x56fe38 ? "" : "none";
    }
  }
}
function Ft() {
  Ce = "won";
  He();
  _0x1a7f66("win");
  Ie("全部波次肃清！基地屹立不倒", "");
  Wt("防线胜利", "你撑过了全部 10 波进攻。奇幻迷宫屹立不倒！", {
    mode: "won"
  });
  reportProgression("campaign/1", "complete", {
    waves: _0x72f8f6,
    kills: Be,
    gold: ke,
    hp: Math.max(0, Se)
  });
}
function Nt() {
  if (Ce === "prepare" || Ce === "wave_clear") {
    if (Le >= _0x72f8f6) {
      Ft();
    } else {
      Pe = Le;
      _e = function (_0x5dc0c6) {
        const _0x3d5f85 = _0x2a2901[_0x5dc0c6] || [];
        const _0x56b21d = [];
        let _0x2fe573 = 0.35;
        for (const _0x53b8f6 of _0x3d5f85) {
          for (let _0x8e5a9d = 0; _0x8e5a9d < _0x53b8f6.count; _0x8e5a9d++) {
            _0x56b21d.push({
              type: _0x53b8f6.type,
              delay: _0x2fe573
            });
            _0x2fe573 += _0x53b8f6.interval;
          }
          _0x2fe573 += 0.35;
        }
        return _0x56b21d;
      }(Pe);
      Re = 0;
      Ce = "spawning";
      He();
      _0x1a7f66("wave");
      _0xddc897();
      Ie("第 " + (Pe + 1) + " 波来袭！", "warning");
      if (Pe === 0) {
        reportProgression("campaign/1", "start", {
          totalWaves: _0x72f8f6
        });
      }
      reportProgression("campaign/1/wave/" + (Pe + 1), "start", {
        wave: Pe + 1
      });
    }
  }
}
function Vt() {
  if ((Ce === "spawning" || Ce === "combat") && !(_e.length > 0) && !Ge.some(_0x3573c6 => _0x3573c6.alive)) {
    (function () {
      const _0x2d5496 = _0x35971b[Pe] ?? 30;
      ke += _0x2d5496;
      Le = Pe + 1;
      He();
      _t();
      if (Le >= _0x72f8f6) {
        Ft();
      } else {
        Ce = "wave_clear";
        ze = 0.6;
        Ie("第 " + Le + " 波肃清！+" + _0x2d5496 + " 金 · 可继续建塔后开始下一波");
        He();
        _t();
      }
    })();
  }
}
function Xt() {
  (function () {
    for (const _0x220923 of Je) {
      Ke.remove(_0x220923.mesh);
      _0x220923.mesh.geometry?.dispose?.();
      _0x220923.mesh.material?.dispose?.();
    }
    Je = [];
    for (const _0x9284fe of Qe) {
      Ke.remove(_0x9284fe.mesh);
      _0x9284fe.mesh.geometry?.dispose?.();
      _0x9284fe.mesh.material?.dispose?.();
    }
    Qe = [];
  })();
  for (const _0x4c8497 of [...Ge]) {
    At(_0x4c8497);
  }
  Ge = [];
  $e = [];
  for (const _0x5ae4db of [...kt.values()]) {
    const _0x445ced = _0x3edf2c(Ve, _0x5ae4db.x, _0x5ae4db.y);
    if (_0x445ced) {
      _0x445ced.blocksPath = false;
      _0x445ced.buildable = _0x445ced.kind === "buildable";
      _0x445ced.towerId = null;
    }
    qe.remove(_0x5ae4db.mesh);
    _0x5ae4db.mesh.traverse(_0x610bb4 => {
      if (_0x610bb4.isMesh) {
        _0x610bb4.geometry?.dispose?.();
        if (_0x610bb4.material) {
          if (Array.isArray(_0x610bb4.material)) {
            _0x610bb4.material.forEach(_0x1ab151 => _0x1ab151.dispose());
          } else {
            _0x610bb4.material.dispose();
          }
        }
      }
    });
  }
  kt.clear();
  ke = _0x3a2d1b;
  Se = _0x2687b7;
  Be = 0;
  Ee = 0;
  Ce = "prepare";
  Le = 0;
  Pe = -1;
  _e = [];
  Re = 0;
  $t = null;
  St = null;
  Lt.visible = false;
  xt.visible = false;
  Pt();
  for (const _0x183664 of _0x188daa) {
    const _0x1ea78a = Me[_0x183664];
    if (_0x1ea78a) {
      _0x1ea78a.classList.remove("active");
    }
  }
  _t();
  if (pe) {
    pe.classList.remove("visible", "won", "lost");
  }
  ut();
  He();
  Ie("防线重置 · 布置塔后开始第 1 波");
}
function Yt() {
  if (!bt || !_0x147fa2(bt.x, bt.y)) {
    vt.visible = false;
    if (Et) {
      Et.visible = false;
    }
    if (St) {
      Ct.visible = false;
    }
    return;
  }
  const _0x5caf75 = bt.x;
  const _0x4ec03b = bt.y;
  const _0x2ff721 = _0x3edf2c(Ve, _0x5caf75, _0x4ec03b);
  if (St) {
    const _0x1d0e12 = _0x4112d2(Ve, _0x5caf75, _0x4ec03b, {
      spawn: Xe,
      base: Ye,
      enemyCells: $e
    });
    const _0x24d360 = ke >= (_0x3c200e[St]?.cost ?? 0);
    const _0x118d3d = _0x1d0e12.ok && _0x24d360;
    vt.material = _0x118d3d ? gt : ft;
    It(vt, _0x5caf75, _0x4ec03b, 0.21);
    if (Et) {
      _0x5c7fda(Et, _0x5caf75, _0x4ec03b);
      Et.visible = true;
      Et.traverse(_0x511786 => {
        if (!_0x511786.isMesh || !_0x511786.material) {
          return;
        }
        const _0x599dc3 = _0x511786.material;
        if (_0x599dc3.opacity !== undefined) {
          _0x599dc3.opacity = _0x118d3d ? 0.6 : 0.35;
        }
        if (_0x599dc3.emissive) {
          _0x599dc3.emissive.setHex(_0x118d3d ? 1331240 : 6688784);
        }
      });
    }
    const _0x2fe130 = _0x4d93da(St, 0);
    _0x22cb80(Ct, _0x2fe130);
    _0x5c7fda(Ct, _0x5caf75, _0x4ec03b);
    Ct.position.y = 0.22;
    Ct.material.color.setHex(_0x118d3d ? 7196554 : 16738922);
    Ct.visible = true;
    if (_0x1d0e12.ok || _0x1d0e12.reason === "会堵住通路" || _0x1d0e12.reason === "会困住场上敌人") {
      const _0x5ee3e8 = _0x654ce0(Ve, Xe, Ye, {
        extraBlock: _0x1d0e12.ok ? {
          x: _0x5caf75,
          y: _0x4ec03b
        } : null
      });
      if (_0x1d0e12.ok) {
        mt(_0x5ee3e8);
      } else {
        mt(ct);
      }
    }
    if (_0x1d0e12.ok) {
      if (_0x24d360) {
        Ie("可建造 " + _0x3c200e[St].name + " @ (" + _0x5caf75 + "," + _0x4ec03b + ")", "");
      } else {
        Ie("金币不足", "error");
      }
    } else {
      Ie(_0x1d0e12.reason, "error");
    }
  } else {
    if (Et) {
      Et.visible = false;
    }
    Ct.visible = false;
    mt(ct);
    const _0x32c78a = Ut(_0x5caf75, _0x4ec03b);
    if (_0x32c78a) {
      vt.material = ht;
      It(vt, _0x5caf75, _0x4ec03b, 0.21);
      Ie((_0x3c200e[_0x32c78a.typeId]?.name || "塔") + " · 点击选中 / S 出售");
    } else if (_0x2ff721 && !_0x2ff721.buildable) {
      vt.material = ft;
      It(vt, _0x5caf75, _0x4ec03b, 0.21);
      if (_0x2ff721.kind === "spawn") {
        Ie("出生点 (" + _0x5caf75 + ", " + _0x4ec03b + ") · 不可建造", "warning");
      } else if (_0x2ff721.kind === "base") {
        Ie("基地 (" + _0x5caf75 + ", " + _0x4ec03b + ") · 不可建造", "warning");
      } else {
        Ie("不可建造 (" + _0x5caf75 + ", " + _0x4ec03b + ")", "warning");
      }
    } else {
      vt.material = ht;
      It(vt, _0x5caf75, _0x4ec03b, 0.21);
      Ie("可建格子 (" + _0x5caf75 + ", " + _0x4ec03b + ") · 选择底部塔种后建造");
    }
  }
}
function qt() {
  if (Mt && _0x147fa2(Mt.x, Mt.y)) {
    if ($t) {
      const _0x9c8118 = kt.get($t);
      if (_0x9c8118) {
        It(xt, _0x9c8118.x, _0x9c8118.y, 0.24);
      }
      return;
    }
    It(xt, Mt.x, Mt.y, 0.24);
  } else if (!$t) {
    xt.visible = false;
  }
}
Lt.visible = false;
qe.add(Lt);
const Kt = new _0x5335dc.Raycaster();
const Jt = new _0x5335dc.Vector2();
const Qt = new _0x5335dc.Plane(new _0x5335dc.Vector3(0, 1, 0), 0);
const Zt = new _0x5335dc.Vector3();
function en(_0x2400e1, _0x453314) {
  const _0x108b0f = Y.getBoundingClientRect();
  const _0x59e860 = (_0x2400e1 - _0x108b0f.left) / Math.max(_0x108b0f.width, 1) * 2 - 1;
  const _0x218dff = -((_0x453314 - _0x108b0f.top) / Math.max(_0x108b0f.height, 1) * 2 - 1);
  Jt.set(_0x59e860, _0x218dff);
  Kt.setFromCamera(Jt, De);
  if (!Kt.ray.intersectPlane(Qt, Zt)) {
    return null;
  }
  const _0x38e35d = _0x3feb05(Zt.x, Zt.z);
  if (_0x147fa2(_0x38e35d.x, _0x38e35d.y)) {
    return _0x38e35d;
  } else {
    return null;
  }
}
Y.addEventListener("pointermove", function (_0x1d17f2) {
  const _0x55a006 = en(_0x1d17f2.clientX, _0x1d17f2.clientY);
  if (_0x55a006) {
    if (!bt || bt.x !== _0x55a006.x || bt.y !== _0x55a006.y) {
      bt = _0x55a006;
      Yt();
    }
  } else if (bt) {
    bt = null;
    Yt();
  }
});
Y.addEventListener("pointerdown", function (_0x16a44a) {
  if (_0x16a44a.button === 2) {
    if (St) {
      Gt(null);
    }
    return;
  }
  if (_0x16a44a.button !== 0) {
    return;
  }
  const _0x26f067 = en(_0x16a44a.clientX, _0x16a44a.clientY);
  if (!_0x26f067) {
    return;
  }
  Mt = {
    x: _0x26f067.x,
    y: _0x26f067.y
  };
  if (St) {
    (function (_0x11ed37, _0x6f5021, _0x3dbd7a) {
      const _0x4732fb = _0x3c200e[_0x11ed37];
      if (!_0x4732fb) {
        return false;
      }
      const _0x22c156 = _0x4112d2(Ve, _0x6f5021, _0x3dbd7a, {
        spawn: Xe,
        base: Ye,
        enemyCells: $e
      });
      if (!_0x22c156.ok) {
        Ie(_0x22c156.reason, "error");
        return false;
      }
      if (ke < _0x4732fb.cost) {
        Ie("金币不足", "error");
        return false;
      }
      const _0x4a208e = _0x417b5f();
      const _0x1f74ab = _0x3edf2c(Ve, _0x6f5021, _0x3dbd7a);
      if (!_0x1f74ab) {
        return false;
      }
      _0x1f74ab.blocksPath = true;
      _0x1f74ab.buildable = false;
      _0x1f74ab.towerId = _0x4a208e;
      const _0x40c0bd = _0x2d81f6(_0x11ed37, 0);
      _0x40c0bd.name = "Tower_" + _0x4a208e;
      _0x5c7fda(_0x40c0bd, _0x6f5021, _0x3dbd7a);
      qe.add(_0x40c0bd);
      const _0x453f27 = {
        id: _0x4a208e,
        typeId: _0x11ed37,
        x: _0x6f5021,
        y: _0x3dbd7a,
        level: 0,
        mesh: _0x40c0bd,
        spent: _0x4732fb.cost,
        cooldown: 0.15
      };
      kt.set(_0x4a208e, _0x453f27);
      ke -= _0x4732fb.cost;
      He();
      ut();
      for (const _0x2004d6 of Ge) {
        if (_0x2004d6.alive) {
          _0x4c970d(_0x2004d6);
        }
      }
      _0x1a7f66("build");
      Ie("已建造 " + _0x4732fb.name + "（-" + _0x4732fb.cost + "）");
      Yt();
    })(St, _0x26f067.x, _0x26f067.y);
    qt();
    return;
  }
  const _0x8b4305 = Ut(_0x26f067.x, _0x26f067.y);
  if (_0x8b4305) {
    (function (_0x1e77e1) {
      $t = _0x1e77e1;
      St = null;
      for (const _0x18756e of _0x188daa) {
        const _0x114d60 = Me[_0x18756e];
        if (_0x114d60) {
          _0x114d60.classList.remove("active");
        }
      }
      Pt();
      const _0x5e71ea = _0x1e77e1 ? kt.get(_0x1e77e1) : null;
      if (_0x5e71ea) {
        Mt = {
          x: _0x5e71ea.x,
          y: _0x5e71ea.y
        };
        It(xt, _0x5e71ea.x, _0x5e71ea.y, 0.24);
        const _0x31a18a = _0x4d93da(_0x5e71ea.typeId, _0x5e71ea.level);
        _0x22cb80(Lt, _0x31a18a);
        _0x5c7fda(Lt, _0x5e71ea.x, _0x5e71ea.y);
        Lt.position.y = 0.22;
        Lt.visible = true;
        Ie("已选中 " + (_0x3c200e[_0x5e71ea.typeId]?.name || "塔") + " · U 升级 / S 出售");
      } else {
        Lt.visible = false;
        xt.visible = false;
      }
      _t();
    })(_0x8b4305.id);
    return;
  }
  $t = null;
  Lt.visible = false;
  _t();
  qt();
  const _0x20615b = _0x3edf2c(Ve, _0x26f067.x, _0x26f067.y);
  if (_0x20615b?.kind === "spawn") {
    Ie("出生点 (" + _0x26f067.x + ", " + _0x26f067.y + ")", "warning");
  } else if (_0x20615b?.kind === "base") {
    Ie("基地 (" + _0x26f067.x + ", " + _0x26f067.y + ")", "warning");
  } else {
    Ie("已选中 (" + _0x26f067.x + ", " + _0x26f067.y + ") · 选择塔种开始建造");
  }
});
Y.addEventListener("pointerleave", function () {
  bt = null;
  Yt();
});
Y.addEventListener("contextmenu", _0x42cd37 => _0x42cd37.preventDefault());
for (const sn of _0x188daa) {
  const an = Me[sn];
  if (an) {
    an.addEventListener("click", () => Gt(sn));
  }
}
if (ce) {
  ce.addEventListener("click", () => Gt(null));
}
if (le) {
  le.addEventListener("click", () => Ht());
}
if (de) {
  de.addEventListener("click", () => zt());
}
if (me) {
  me.addEventListener("click", () => Nt());
}
if (xe) {
  xe.addEventListener("click", () => Xt());
}
const tn = () => {
  _0x7cce98();
  _0xddc897();
  window.removeEventListener("pointerdown", tn);
  window.removeEventListener("keydown", tn);
};
window.addEventListener("pointerdown", tn);
window.addEventListener("keydown", tn);
window.addEventListener("keydown", _0xebe5a => {
  if (_0xebe5a.key === "1") {
    Gt("archer");
  } else if (_0xebe5a.key === "2") {
    Gt("mage");
  } else if (_0xebe5a.key === "3") {
    Gt("frost");
  } else if (_0xebe5a.key === "Escape") {
    Gt(null);
  } else if (_0xebe5a.key === "s" || _0xebe5a.key === "S") {
    Ht();
  } else if (_0xebe5a.key === "u" || _0xebe5a.key === "U") {
    zt();
  } else if (_0xebe5a.key === " " || _0xebe5a.key === "Enter") {
    if (Ce === "prepare" || Ce === "wave_clear") {
      Nt();
    }
  } else if ((_0xebe5a.key === "r" || _0xebe5a.key === "R") && (Ce === "won" || Ce === "lost")) {
    Xt();
  }
});
window.addEventListener("resize", function () {
  Ae();
});
Ae();
(function () {
  const _0x48c141 = new _0x5335dc.Mesh(new _0x5335dc.BoxGeometry(_0xc7ade8 * _0x116353 + 0.8, 0.25, _0x1a43e1 * _0x116353 + 0.8), new _0x5335dc.MeshStandardMaterial({
    color: 2371608,
    roughness: 1,
    metalness: 0
  }));
  _0x48c141.name = "BoardPlate";
  _0x48c141.position.y = -0.14;
  _0x48c141.receiveShadow = true;
  qe.add(_0x48c141);
  const _0x8c591b = new _0x5335dc.Mesh(new _0x5335dc.BoxGeometry(_0xc7ade8 * _0x116353 + 1.15, 0.12, _0x1a43e1 * _0x116353 + 1.15), new _0x5335dc.MeshStandardMaterial({
    color: 7033128,
    roughness: 0.85,
    metalness: 0.1
  }));
  _0x8c591b.name = "BoardRim";
  _0x8c591b.position.y = -0.28;
  _0x8c591b.receiveShadow = true;
  qe.add(_0x8c591b);
  for (let _0x1bc7f2 = 0; _0x1bc7f2 < _0x1a43e1; _0x1bc7f2++) {
    for (let _0x616a03 = 0; _0x616a03 < _0xc7ade8; _0x616a03++) {
      const _0x1d67a = Ve[_0x1bc7f2][_0x616a03];
      let _0x2a9eb2 = (_0x616a03 + _0x1bc7f2) % 2 == 0 ? Ze : et;
      if (_0x1d67a.kind === "spawn" || _0x1d67a.kind === "base") {
        _0x2a9eb2 = tt;
      }
      const _0x4a3e23 = new _0x5335dc.Mesh(ot, _0x2a9eb2);
      _0x4a3e23.name = "Tile_" + _0x616a03 + "_" + _0x1bc7f2;
      const _0x16018d = _0x2ee6f9(_0x616a03, _0x1bc7f2, 0);
      _0x4a3e23.position.set(_0x16018d.x, 0, _0x16018d.z);
      _0x4a3e23.receiveShadow = true;
      _0x4a3e23.userData.gridX = _0x616a03;
      _0x4a3e23.userData.gridY = _0x1bc7f2;
      qe.add(_0x4a3e23);
      st.set(at(_0x616a03, _0x1bc7f2), _0x4a3e23);
    }
  }
})();
(function () {
  const _0x52203f = it("SpawnMarker", 6211839, 1727112, 0.7);
  const _0x5d84d3 = _0x2ee6f9(Xe.x, Xe.y, 0);
  _0x52203f.position.set(_0x5d84d3.x, 0, _0x5d84d3.z);
  qe.add(_0x52203f);
  const _0x3293c7 = new _0x5335dc.Mesh(new _0x5335dc.TorusGeometry(0.38, 0.05, 8, 24), new _0x5335dc.MeshStandardMaterial({
    color: 8048895,
    emissive: 2785472,
    emissiveIntensity: 0.6,
    roughness: 0.4,
    metalness: 0.3
  }));
  _0x3293c7.name = "SpawnPortal";
  _0x3293c7.rotation.x = Math.PI / 2;
  _0x3293c7.position.set(_0x5d84d3.x, 0.22, _0x5d84d3.z);
  qe.add(_0x3293c7);
  const _0x4a4b99 = it("BaseMarker", 16766314, 9068576, 1.05);
  const _0x5a867b = _0x2ee6f9(Ye.x, Ye.y, 0);
  _0x4a4b99.position.set(_0x5a867b.x, 0, _0x5a867b.z);
  qe.add(_0x4a4b99);
  const _0x3b550d = new _0x5335dc.Mesh(new _0x5335dc.CylinderGeometry(0.42, 0.42, 0.06, 20), new _0x5335dc.MeshStandardMaterial({
    color: 16769162,
    emissive: 6705184,
    emissiveIntensity: 0.45,
    transparent: true,
    opacity: 0.85,
    roughness: 0.35,
    metalness: 0.35
  }));
  _0x3b550d.name = "BaseShield";
  _0x3b550d.position.set(_0x5a867b.x, 0.2, _0x5a867b.z);
  qe.add(_0x3b550d);
  const _0x3ed2cd = new _0x5335dc.Mesh(new _0x5335dc.BoxGeometry(0.42, 0.55, 0.42), new _0x5335dc.MeshStandardMaterial({
    color: 9080988,
    roughness: 0.75,
    metalness: 0.15
  }));
  _0x3ed2cd.name = "BaseKeep";
  _0x3ed2cd.position.set(_0x5a867b.x, 0.45, _0x5a867b.z);
  _0x3ed2cd.castShadow = true;
  qe.add(_0x3ed2cd);
  const _0x1df049 = new _0x5335dc.Mesh(new _0x5335dc.BoxGeometry(0.5, 0.14, 0.5), new _0x5335dc.MeshStandardMaterial({
    color: 10133676,
    roughness: 0.7,
    metalness: 0.15
  }));
  _0x1df049.name = "BaseBattlement";
  _0x1df049.position.set(_0x5a867b.x, 0.78, _0x5a867b.z);
  _0x1df049.castShadow = true;
  qe.add(_0x1df049);
})();
ut();
let nn = false;
const on = new _0x5335dc.Clock();
(function e() {
  requestAnimationFrame(e);
  const _0x1cd727 = Math.min(on.getDelta(), 0.05);
  const _0x1d12b3 = on.elapsedTime;
  (function (_0x2f1950) {
    if (Ce !== "won" && Ce !== "lost") {
      if (Ce === "wave_clear") {
        ze -= _0x2f1950;
        if (ze <= 0) {
          Ce = "prepare";
          He();
        }
        return;
      }
      if (Ce === "spawning" || Ce === "combat") {
        for (Re += _0x2f1950; _e.length > 0 && Re >= _e[0].delay;) {
          const _0x3c6def = _e.shift();
          if (!_0x3c6def) {
            break;
          }
          const _0x37be40 = _0x5cceb1(_0x3c6def.type, Pe);
          if (!_0x37be40) {
            continue;
          }
          const _0xe14173 = _0x151f8d(_0x37be40, Xe, Ye, Ve);
          Ge.push(_0xe14173);
          if (Ue) {
            Ue.add(_0xe14173.mesh);
          }
          _0x505078(_0xe14173.mesh, 1);
          Ot();
        }
        if (_e.length === 0 && Ce === "spawning") {
          Ce = "combat";
          He();
        }
        for (const _0x5cd3bf of [...Ge]) {
          if (!_0x5cd3bf.alive) {
            continue;
          }
          const _0x25aee6 = _0x2e34c1(_0x5cd3bf, _0x2f1950, Ve, Ye);
          _0xb429da(_0x5cd3bf.mesh, De);
          _0x505078(_0x5cd3bf.mesh, _0x5cd3bf.hp / _0x5cd3bf.maxHp);
          if (_0x25aee6 === "base" && (Tt(_0x5cd3bf), Ce === "lost")) {
            return;
          }
        }
        Ot();
        Vt();
      }
    }
  })(_0x1cd727);
  (function (_0x33d485) {
    if (Ce === "spawning" || Ce === "combat") {
      for (const _0x522701 of kt.values()) {
        const _0xcbfaaf = _0x270891(_0x522701, _0x33d485, Ge);
        if (_0xcbfaaf) {
          Je.push(_0xcbfaaf);
          Ke.add(_0xcbfaaf.mesh);
          _0x1929f5(_0xcbfaaf.typeId);
        }
      }
    } else {
      for (const _0x17c1fe of kt.values()) {
        if (_0x17c1fe.cooldown > 0) {
          _0x17c1fe.cooldown = Math.max(0, _0x17c1fe.cooldown - _0x33d485);
        }
      }
    }
    for (const _0x75cc57 of [...Je]) {
      const _0x190b90 = _0x53a199(_0x75cc57, _0x33d485, Ge);
      if (_0x190b90 === "hit") {
        Dt(_0x75cc57);
        Ke.remove(_0x75cc57.mesh);
        _0x75cc57.mesh.geometry?.dispose?.();
        if (_0x75cc57.mesh.material) {
          _0x75cc57.mesh.material.dispose();
        }
        Je = Je.filter(_0x1bee99 => _0x1bee99 !== _0x75cc57);
      } else if (_0x190b90 === "miss" || !_0x75cc57.alive) {
        Ke.remove(_0x75cc57.mesh);
        _0x75cc57.mesh.geometry?.dispose?.();
        if (_0x75cc57.mesh.material) {
          _0x75cc57.mesh.material.dispose();
        }
        Je = Je.filter(_0x13639d => _0x13639d !== _0x75cc57);
      }
    }
    for (const _0x1b496b of [...Qe]) {
      _0x1b496b.life -= _0x33d485;
      _0x1b496b.mesh.scale.multiplyScalar(1 + _0x33d485 * 4);
      if (_0x1b496b.mesh.material) {
        _0x1b496b.mesh.material.opacity = Math.max(0, _0x1b496b.life * 4);
      }
      if (_0x1b496b.life <= 0) {
        Ke.remove(_0x1b496b.mesh);
        _0x1b496b.mesh.geometry?.dispose?.();
        _0x1b496b.mesh.material?.dispose?.();
        Qe = Qe.filter(_0x40acde => _0x40acde !== _0x1b496b);
      }
    }
    for (const _0x50fd7a of Ge) {
      if (_0x50fd7a.alive && (_0x50fd7a.slowTimer || 0) <= 0) {
        _0x326e5d(_0x50fd7a);
      }
    }
  })(_0x1cd727);
  const _0xcc08cd = je.getObjectByName("SpawnMarker_Gem");
  const _0x4c8c2d = je.getObjectByName("BaseMarker_Gem");
  if (_0xcc08cd) {
    _0xcc08cd.rotation.y = _0x1d12b3 * 1.2;
  }
  if (_0x4c8c2d) {
    _0x4c8c2d.rotation.y = _0x1d12b3 * 0.9;
  }
  const _0x2f05b4 = je.getObjectByName("SpawnPortal");
  if (_0x2f05b4) {
    _0x2f05b4.rotation.z = _0x1d12b3 * 0.8;
  }
  for (const _0x79eafb of rt.children) {
    if (_0x79eafb.name.startsWith("PathDot_")) {
      const _0x59c452 = 1 + Math.sin(_0x1d12b3 * 3 + _0x79eafb.position.x) * 0.12;
      _0x79eafb.scale.setScalar(_0x59c452);
    }
  }
  for (const _0x311245 of Ge) {
    if (_0x311245.alive) {
      _0x311245.mesh.position.y = Math.sin(_0x1d12b3 * 6 + _0x311245.mesh.position.x) * 0.03;
    }
  }
  Oe.render(je, De);
  if (!nn) {
    nn = true;
    Promise.resolve(window.OG?.ready?.()).catch(() => {});
  }
})();
export function reportProgression(_0x496454, _0x1ad262, _0x1b4728) {
  try {
    const _0x34e129 = window.OG?.analytics?.progression;
    if (!_0x34e129) {
      return;
    }
    let _0xcb46b2;
    if (_0x1ad262 === "start") {
      _0xcb46b2 = _0x34e129.start?.(_0x496454, _0x1b4728);
    } else if (_0x1ad262 === "complete") {
      _0xcb46b2 = _0x34e129.complete?.(_0x496454, _0x1b4728);
    } else {
      if (_0x1ad262 !== "fail") {
        return;
      }
      _0xcb46b2 = _0x34e129.fail?.(_0x496454, _0x1b4728);
    }
    if (_0xcb46b2 && typeof _0xcb46b2.then == "function") {
      _0xcb46b2.catch(() => {});
    }
  } catch {}
}
export const gameApi = {
  cells: Ve,
  spawn: Xe,
  base: Ye,
  towers: kt,
  getEnemies: () => Ge,
  getPhase: () => Ce,
  getHover: () => bt,
  getSelected: () => Mt,
  getPath: () => ct,
  startNextWave: Nt,
  restartRun: Xt,
  canPlaceTower: (_0x4768fa, _0x56cb52) => _0x4112d2(Ve, _0x4768fa, _0x56cb52, {
    spawn: Xe,
    base: Ye,
    enemyCells: $e
  }),
  findPath: (_0x40cb98, _0x2fbdee, _0x273342, _0x3194a1) => _0x654ce0(Ve, {
    x: _0x40cb98,
    y: _0x2fbdee
  }, {
    x: _0x273342,
    y: _0x3194a1
  })
};