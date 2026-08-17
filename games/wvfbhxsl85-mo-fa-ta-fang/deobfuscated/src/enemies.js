import * as _0x1b1aed from "three";
import { cellToWorld as _0x1965e4 } from "./grid.js";
import { ENEMY_TYPES as _0x4d8d99 } from "./config.js";
import { findPath as _0x224cb5 } from "./pathfinding.js";
let a = 1;
export function nextEnemyId() {
  return "enemy_" + a++;
}
export function createEnemyMesh(_0xb091c2, _0x256454 = 1) {
  const _0x479e7d = _0x4d8d99[_0xb091c2] || _0x4d8d99.goblin;
  const _0x4373d9 = new _0x1b1aed.Group();
  _0x4373d9.name = "Enemy_" + _0xb091c2;
  const _0x382e1d = _0x256454 * 0.38;
  const _0xf2d078 = _0x256454 * 0.16;
  const _0xab4dfe = new _0x1b1aed.Mesh(new _0x1b1aed.CapsuleGeometry(_0xf2d078, _0x382e1d, 4, 8), new _0x1b1aed.MeshStandardMaterial({
    color: _0x479e7d.color,
    emissive: _0x479e7d.accent,
    emissiveIntensity: 0.22,
    roughness: 0.65,
    metalness: 0.12
  }));
  _0xab4dfe.name = "EnemyBody";
  _0xab4dfe.position.y = _0x382e1d * 0.5 + _0xf2d078 + 0.05;
  _0xab4dfe.castShadow = true;
  _0x4373d9.add(_0xab4dfe);
  const _0x39a706 = new _0x1b1aed.Mesh(new _0x1b1aed.CircleGeometry(_0xf2d078 * 1.55, 16), new _0x1b1aed.MeshBasicMaterial({
    color: _0x479e7d.accent,
    transparent: true,
    opacity: 0.55,
    depthWrite: false
  }));
  _0x39a706.name = "EnemyGroundDisc";
  _0x39a706.rotation.x = -Math.PI / 2;
  _0x39a706.position.y = 0.04;
  _0x39a706.renderOrder = 2;
  _0x4373d9.add(_0x39a706);
  const _0x5f535f = new _0x1b1aed.Mesh(new _0x1b1aed.SphereGeometry(_0xf2d078 * 0.85, 10, 10), new _0x1b1aed.MeshStandardMaterial({
    color: _0x479e7d.color,
    roughness: 0.55,
    metalness: 0.1
  }));
  _0x5f535f.name = "EnemyHead";
  _0x5f535f.position.y = _0xab4dfe.position.y + _0x382e1d * 0.5 + _0xf2d078 * 0.9;
  _0x5f535f.castShadow = true;
  _0x4373d9.add(_0x5f535f);
  if (_0xb091c2 === "armored" || _0xb091c2 === "boss") {
    const _0x4e6818 = new _0x1b1aed.Mesh(new _0x1b1aed.BoxGeometry(_0xf2d078 * 1.8, _0xf2d078 * 0.7, _0xf2d078 * 1.8), new _0x1b1aed.MeshStandardMaterial({
      color: 5594216,
      metalness: 0.45,
      roughness: 0.4
    }));
    _0x4e6818.name = "EnemyHelm";
    _0x4e6818.position.y = _0x5f535f.position.y + _0xf2d078 * 0.35;
    _0x4e6818.castShadow = true;
    _0x4373d9.add(_0x4e6818);
  }
  if (_0xb091c2 === "boss") {
    const _0x3eaf3f = new _0x1b1aed.Mesh(new _0x1b1aed.ConeGeometry(_0x256454 * 0.05, _0x256454 * 0.22, 6), new _0x1b1aed.MeshStandardMaterial({
      color: 15657168,
      roughness: 0.5
    }));
    _0x3eaf3f.name = "EnemyHornL";
    _0x3eaf3f.position.set(_0x256454 * -0.1, _0x5f535f.position.y + _0x256454 * 0.18, 0);
    _0x3eaf3f.rotation.z = 0.4;
    _0x4373d9.add(_0x3eaf3f);
    const _0x529c15 = _0x3eaf3f.clone();
    _0x529c15.name = "EnemyHornR";
    _0x529c15.position.x = _0x256454 * 0.1;
    _0x529c15.rotation.z = -0.4;
    _0x4373d9.add(_0x529c15);
  }
  const _0x4f52d3 = new _0x1b1aed.Mesh(new _0x1b1aed.PlaneGeometry(_0x256454 * 0.55, _0x256454 * 0.07), new _0x1b1aed.MeshBasicMaterial({
    color: 1708064,
    transparent: true,
    opacity: 0.75,
    depthWrite: false
  }));
  _0x4f52d3.name = "EnemyHpBg";
  _0x4f52d3.position.y = _0x5f535f.position.y + _0x256454 * 0.28;
  _0x4f52d3.renderOrder = 5;
  _0x4373d9.add(_0x4f52d3);
  const _0xa0ba8a = new _0x1b1aed.Mesh(new _0x1b1aed.PlaneGeometry(_0x256454 * 0.5, _0x256454 * 0.045), new _0x1b1aed.MeshBasicMaterial({
    color: 7196554,
    depthWrite: false
  }));
  _0xa0ba8a.name = "EnemyHpFg";
  _0xa0ba8a.position.y = _0x4f52d3.position.y;
  _0xa0ba8a.position.z = 0.01;
  _0xa0ba8a.renderOrder = 6;
  _0x4373d9.add(_0xa0ba8a);
  _0x4373d9.userData.hpBarFg = _0xa0ba8a;
  _0x4373d9.userData.hpBarBg = _0x4f52d3;
  _0x4373d9.userData.hpBarWidth = _0x256454 * 0.5;
  return _0x4373d9;
}
export function orientEnemyBars(_0x2ccca8, _0x2261b5) {
  const _0x1d2333 = _0x2ccca8.userData.hpBarBg;
  const _0x286840 = _0x2ccca8.userData.hpBarFg;
  if (_0x1d2333) {
    _0x1d2333.quaternion.copy(_0x2261b5.quaternion);
  }
  if (_0x286840) {
    _0x286840.quaternion.copy(_0x2261b5.quaternion);
  }
}
export function setEnemyHpBar(_0x87a34d, _0x311319) {
  const _0x902859 = _0x87a34d.userData.hpBarFg;
  const _0x2f4ebd = _0x87a34d.userData.hpBarWidth || 0.5;
  if (!_0x902859) {
    return;
  }
  const _0x982b74 = Math.max(0, Math.min(1, _0x311319));
  _0x902859.scale.x = Math.max(_0x982b74, 0.001);
  _0x902859.position.x = -(1 - _0x982b74) * _0x2f4ebd * 0.5;
  const _0xfd4c3 = _0x902859.material;
  if (_0x982b74 > 0.5) {
    _0xfd4c3.color.setHex(7196554);
  } else if (_0x982b74 > 0.25) {
    _0xfd4c3.color.setHex(15255666);
  } else {
    _0xfd4c3.color.setHex(15231594);
  }
}
export function spawnEnemy(_0x2a81c7, _0x5ca673, _0x528e2c, _0x26e9f4) {
  const _0x5457e7 = nextEnemyId();
  const _0x2c9827 = createEnemyMesh(_0x2a81c7.id, _0x2a81c7.scale);
  _0x2c9827.name = "Enemy_" + _0x5457e7;
  const _0x388db3 = _0x1965e4(_0x5ca673.x, _0x5ca673.y, 0);
  _0x2c9827.position.set(_0x388db3.x, 0, _0x388db3.z);
  const _0x1ada3a = _0x224cb5(_0x26e9f4, _0x5ca673, _0x528e2c) || [_0x5ca673, _0x528e2c];
  return {
    id: _0x5457e7,
    typeId: _0x2a81c7.id,
    name: _0x2a81c7.name,
    hp: _0x2a81c7.hp,
    maxHp: _0x2a81c7.hp,
    speed: _0x2a81c7.speed,
    reward: _0x2a81c7.reward,
    damage: _0x2a81c7.damage,
    mesh: _0x2c9827,
    cellX: _0x5ca673.x,
    cellY: _0x5ca673.y,
    nextX: _0x1ada3a.length > 1 ? _0x1ada3a[1].x : _0x5ca673.x,
    nextY: _0x1ada3a.length > 1 ? _0x1ada3a[1].y : _0x5ca673.y,
    t: 0,
    path: _0x1ada3a,
    pathIndex: 0,
    alive: true,
    reachedBase: false,
    needsRepath: false,
    slowMul: 1,
    slowTimer: 0
  };
}
export function markRepath(_0x1b7481) {
  _0x1b7481.needsRepath = true;
}
export function applyRepathIfNeeded(_0x40efbd, _0x318c13, _0x39d492) {
  if (!_0x40efbd.needsRepath || !_0x40efbd.alive) {
    return;
  }
  _0x40efbd.needsRepath = false;
  const _0x15b6b1 = {
    x: _0x40efbd.cellX,
    y: _0x40efbd.cellY
  };
  const _0x1c5d6a = _0x224cb5(_0x318c13, _0x15b6b1, _0x39d492);
  if (!_0x1c5d6a || _0x1c5d6a.length < 1) {
    _0x40efbd.needsRepath = true;
  } else {
    _0x40efbd.path = _0x1c5d6a;
    _0x40efbd.pathIndex = 0;
    if (_0x1c5d6a.length === 1) {
      _0x40efbd.nextX = _0x1c5d6a[0].x;
      _0x40efbd.nextY = _0x1c5d6a[0].y;
      _0x40efbd.t = 1;
      return;
    }
    _0x40efbd.nextX = _0x1c5d6a[1].x;
    _0x40efbd.nextY = _0x1c5d6a[1].y;
    _0x40efbd.t = 0;
    syncEnemyWorldPos(_0x40efbd);
  }
}
export function syncEnemyWorldPos(_0x5affed) {
  const _0x5d7ac1 = _0x1965e4(_0x5affed.cellX, _0x5affed.cellY, 0);
  const _0x447fa1 = _0x1965e4(_0x5affed.nextX, _0x5affed.nextY, 0);
  const _0x1fa335 = _0x5affed.t;
  _0x5affed.mesh.position.set(_0x5d7ac1.x + (_0x447fa1.x - _0x5d7ac1.x) * _0x1fa335, 0, _0x5d7ac1.z + (_0x447fa1.z - _0x5d7ac1.z) * _0x1fa335);
  const _0x5dfbf9 = _0x447fa1.x - _0x5d7ac1.x;
  const _0x234200 = _0x447fa1.z - _0x5d7ac1.z;
  if (Math.abs(_0x5dfbf9) + Math.abs(_0x234200) > 0.001) {
    _0x5affed.mesh.rotation.y = Math.atan2(_0x5dfbf9, _0x234200);
  }
}
export function updateEnemy(_0x4c7209, _0x305577, _0x51e893, _0x308da4) {
  if (!_0x4c7209.alive) {
    return "dead";
  }
  if (_0x4c7209.slowTimer > 0) {
    _0x4c7209.slowTimer -= _0x305577;
    if (_0x4c7209.slowTimer <= 0) {
      _0x4c7209.slowTimer = 0;
      _0x4c7209.slowMul = 1;
    }
  }
  applyRepathIfNeeded(_0x4c7209, _0x51e893, _0x308da4);
  const _0x5006fe = _0x4c7209.speed * (_0x4c7209.slowMul || 1);
  for (_0x4c7209.t += _0x305577 * _0x5006fe; _0x4c7209.t >= 1 && _0x4c7209.alive;) {
    _0x4c7209.t -= 1;
    _0x4c7209.cellX = _0x4c7209.nextX;
    _0x4c7209.cellY = _0x4c7209.nextY;
    _0x4c7209.pathIndex += 1;
    if (_0x4c7209.cellX === _0x308da4.x && _0x4c7209.cellY === _0x308da4.y) {
      _0x4c7209.alive = false;
      _0x4c7209.reachedBase = true;
      _0x4c7209.t = 0;
      syncEnemyWorldPos(_0x4c7209);
      return "base";
    }
    if (_0x4c7209.needsRepath) {
      applyRepathIfNeeded(_0x4c7209, _0x51e893, _0x308da4);
    } else {
      const _0x58d4dc = _0x4c7209.pathIndex + 1;
      if (!_0x4c7209.path || _0x58d4dc >= _0x4c7209.path.length) {
        _0x4c7209.needsRepath = true;
        applyRepathIfNeeded(_0x4c7209, _0x51e893, _0x308da4);
      } else {
        _0x4c7209.nextX = _0x4c7209.path[_0x58d4dc].x;
        _0x4c7209.nextY = _0x4c7209.path[_0x58d4dc].y;
      }
    }
  }
  syncEnemyWorldPos(_0x4c7209);
  return "moved";
}
export function collectEnemyCells(_0x38135d) {
  const _0x59785b = [];
  const _0x1dde18 = new Set();
  for (const _0xe5d697 of _0x38135d) {
    if (!_0xe5d697.alive) {
      continue;
    }
    const _0x420ce5 = _0xe5d697.cellX + "," + _0xe5d697.cellY;
    if (!_0x1dde18.has(_0x420ce5)) {
      _0x1dde18.add(_0x420ce5);
      _0x59785b.push({
        x: _0xe5d697.cellX,
        y: _0xe5d697.cellY
      });
    }
    if (_0xe5d697.t > 0.15) {
      const _0x4cdfb2 = _0xe5d697.nextX + "," + _0xe5d697.nextY;
      if (!_0x1dde18.has(_0x4cdfb2)) {
        _0x1dde18.add(_0x4cdfb2);
        _0x59785b.push({
          x: _0xe5d697.nextX,
          y: _0xe5d697.nextY
        });
      }
    }
  }
  return _0x59785b;
}
export function disposeEnemy(_0x4eef26) {
  _0x4eef26.mesh.traverse(_0xfc7e2e => {
    if (_0xfc7e2e.isMesh) {
      _0xfc7e2e.geometry?.dispose?.();
      if (_0xfc7e2e.material) {
        if (Array.isArray(_0xfc7e2e.material)) {
          _0xfc7e2e.material.forEach(_0x27e6d0 => _0x27e6d0.dispose());
        } else {
          _0xfc7e2e.material.dispose();
        }
      }
    }
  });
}