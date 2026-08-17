import * as _0x21bf1d from "three";
import { cellToWorld as _0x108a25 } from "./grid.js";
import { towerStatsAtLevel as _0x4a4be0 } from "./config.js";
import { setEnemyHpBar as _0x7720f2 } from "./enemies.js";
let s = 1;
export function createProjectileMesh(_0x11f057, _0x59eb4f) {
  let _0x3b2234;
  let _0x573507;
  let _0x36424c;
  let _0x500dd2 = 1;
  if (_0x11f057 === "mage") {
    _0x3b2234 = new _0x21bf1d.SphereGeometry(0.12, 10, 10);
    _0x573507 = 13148415;
    _0x36424c = 6959296;
    _0x500dd2 = 1.15;
  } else if (_0x11f057 === "frost") {
    _0x3b2234 = new _0x21bf1d.OctahedronGeometry(0.1, 0);
    _0x573507 = 11069695;
    _0x36424c = 3178688;
  } else {
    _0x3b2234 = new _0x21bf1d.ConeGeometry(0.06, 0.22, 6);
    _0x573507 = 15257760;
    _0x36424c = 8413216;
  }
  const _0x5d3220 = new _0x21bf1d.Mesh(_0x3b2234, new _0x21bf1d.MeshStandardMaterial({
    color: _0x573507,
    emissive: _0x36424c,
    emissiveIntensity: 0.7,
    roughness: 0.35,
    metalness: 0.25
  }));
  _0x5d3220.name = "Projectile_" + _0x11f057 + "_" + s;
  _0x5d3220.scale.setScalar(_0x500dd2);
  _0x5d3220.position.copy(_0x59eb4f);
  _0x5d3220.castShadow = false;
  return _0x5d3220;
}
export function distTowerToEnemy(_0x53334b, _0x3dd51a, _0xf16a93) {
  const _0x55a831 = _0x108a25(_0x53334b, _0x3dd51a, 0);
  const _0x486d2e = _0xf16a93.mesh.position.x;
  const _0x54cf25 = _0xf16a93.mesh.position.z;
  const _0x564c47 = _0x486d2e - _0x55a831.x;
  const _0x3f1d06 = _0x54cf25 - _0x55a831.z;
  return Math.hypot(_0x564c47, _0x3f1d06);
}
export function findTarget(_0x163fd0, _0x4b637f) {
  const _0x16f37f = _0x4a4be0(_0x163fd0.typeId, _0x163fd0.level);
  if (!_0x16f37f) {
    return null;
  }
  const _0x1cafc3 = _0x16f37f.range;
  let _0x5b1e01 = null;
  let _0x545c3c = -Infinity;
  for (const _0x5866e6 of _0x4b637f) {
    if (!_0x5866e6.alive || _0x5866e6.reachedBase) {
      continue;
    }
    const _0x2422fa = distTowerToEnemy(_0x163fd0.x, _0x163fd0.y, _0x5866e6);
    if (_0x2422fa > _0x1cafc3 + 0.05) {
      continue;
    }
    const _0x2c9e66 = ((_0x5866e6.pathIndex || 0) + (_0x5866e6.t || 0)) * 100 - _0x2422fa;
    if (_0x2c9e66 > _0x545c3c) {
      _0x545c3c = _0x2c9e66;
      _0x5b1e01 = _0x5866e6;
    }
  }
  return _0x5b1e01;
}
export function applyHit(_0x2f0593, _0x428b71, _0x554564 = {}) {
  if (!_0x2f0593.alive) {
    return false;
  }
  _0x2f0593.hp -= _0x428b71;
  if (_0x554564.slow && _0x554564.slow > 0) {
    const _0x25de4f = Math.max(0.2, 1 - _0x554564.slow);
    if (_0x25de4f < (_0x2f0593.slowMul ?? 1)) {
      _0x2f0593.slowMul = _0x25de4f;
    }
    _0x2f0593.slowTimer = Math.max(_0x2f0593.slowTimer || 0, _0x554564.slowDuration || 1);
    _0x2f0593.mesh.traverse(_0x4779b9 => {
      if (_0x4779b9.isMesh && _0x4779b9.name === "EnemyBody" && _0x4779b9.material?.emissive) {
        _0x4779b9.material.emissive.setHex(2121888);
        _0x4779b9.material.emissiveIntensity = 0.35;
      }
    });
  }
  _0x7720f2(_0x2f0593.mesh, _0x2f0593.hp / _0x2f0593.maxHp);
  return _0x2f0593.hp <= 0 && (_0x2f0593.hp = 0, _0x2f0593.alive = false, true);
}
export function applyAoe(_0xd4c574, _0x36850b, _0x51fb99, _0x1acdab, _0x174250 = {}, _0x517f86 = null) {
  const _0x20dda6 = [];
  const _0x5d10cd = _0x36850b * _0x36850b;
  for (const _0x310412 of _0x1acdab) {
    if (!_0x310412.alive) {
      continue;
    }
    if (_0x517f86 && _0x310412.id === _0x517f86.id) {
      continue;
    }
    const _0x35dcbe = _0x310412.mesh.position.x - _0xd4c574.x;
    const _0x4aa940 = _0x310412.mesh.position.z - _0xd4c574.z;
    if (!(_0x35dcbe * _0x35dcbe + _0x4aa940 * _0x4aa940 > _0x5d10cd)) {
      if (applyHit(_0x310412, _0x51fb99 * 0.6, _0x174250)) {
        _0x20dda6.push(_0x310412);
      }
    }
  }
  return _0x20dda6;
}
export function spawnProjectile(_0x376e56) {
  const {
    typeId: _0x20cd65,
    origin: _0x2ac759,
    target: _0x933f58,
    damage: _0x3c1551,
    aoe: _0x205959 = 0,
    slow: _0x43e787 = 0,
    slowDuration: _0x1c6c64 = 0,
    speed: _0x3b7518 = 9
  } = _0x376e56;
  const _0x10e217 = createProjectileMesh(_0x20cd65, _0x2ac759);
  const _0x395450 = "proj_" + s++;
  _0x10e217.name = "Projectile_" + _0x395450;
  return {
    id: _0x395450,
    mesh: _0x10e217,
    typeId: _0x20cd65,
    target: _0x933f58,
    damage: _0x3c1551,
    aoe: _0x205959,
    slow: _0x43e787,
    slowDuration: _0x1c6c64,
    speed: _0x3b7518,
    alive: true,
    pos: _0x2ac759.clone(),
    vel: new _0x21bf1d.Vector3()
  };
}
export function updateProjectile(_0x1fb7fe, _0x4eb3b1, _0x383148) {
  if (!_0x1fb7fe.alive) {
    return "miss";
  }
  const _0xfdc4ee = _0x1fb7fe.target;
  if (!_0xfdc4ee || !_0xfdc4ee.alive) {
    _0x1fb7fe.pos.addScaledVector(_0x1fb7fe.vel, _0x4eb3b1);
    _0x1fb7fe.mesh.position.copy(_0x1fb7fe.pos);
    _0x1fb7fe.speed -= _0x4eb3b1 * 20;
    if (_0x1fb7fe.speed <= 0 || _0x1fb7fe.pos.y < -0.5) {
      _0x1fb7fe.alive = false;
      return "miss";
    } else {
      return "fly";
    }
  }
  const _0x5d5d0f = _0xfdc4ee.mesh.position.clone();
  _0x5d5d0f.y += 0.35;
  const _0x6ef4e7 = _0x5d5d0f.sub(_0x1fb7fe.pos);
  const _0x490a0f = _0x6ef4e7.length();
  if (_0x490a0f < 0.22) {
    _0x1fb7fe.alive = false;
    _0x1fb7fe.mesh.position.copy(_0x5d5d0f);
    return "hit";
  }
  _0x6ef4e7.multiplyScalar(1 / _0x490a0f);
  _0x1fb7fe.vel.copy(_0x6ef4e7).multiplyScalar(_0x1fb7fe.speed);
  const _0x454386 = Math.min(_0x1fb7fe.speed * _0x4eb3b1, _0x490a0f);
  _0x1fb7fe.pos.addScaledVector(_0x6ef4e7, _0x454386);
  _0x1fb7fe.mesh.position.copy(_0x1fb7fe.pos);
  if (_0x1fb7fe.typeId === "archer") {
    _0x1fb7fe.mesh.quaternion.setFromUnitVectors(new _0x21bf1d.Vector3(0, 1, 0), _0x6ef4e7);
  } else {
    _0x1fb7fe.mesh.rotation.y += _0x4eb3b1 * 8;
  }
  return "fly";
}
export function createHitFlash(_0x60521c, _0x1c5084, _0x59ae99 = 0.35) {
  const _0x6cea5f = new _0x21bf1d.Mesh(new _0x21bf1d.SphereGeometry(_0x59ae99, 8, 8), new _0x21bf1d.MeshBasicMaterial({
    color: _0x1c5084,
    transparent: true,
    opacity: 0.75,
    depthWrite: false
  }));
  _0x6cea5f.name = "HitFlash";
  _0x6cea5f.position.copy(_0x60521c);
  _0x6cea5f.position.y = Math.max(_0x60521c.y, 0.3);
  return _0x6cea5f;
}
export function tickTowerFire(_0x4605d7, _0x12778b, _0x548a47) {
  const _0x272d6d = _0x4a4be0(_0x4605d7.typeId, _0x4605d7.level);
  if (!_0x272d6d) {
    return null;
  }
  _0x4605d7.cooldown = (_0x4605d7.cooldown || 0) - _0x12778b;
  if (_0x4605d7.cooldown > 0) {
    return null;
  }
  const _0x2f30c3 = findTarget(_0x4605d7, _0x548a47);
  if (!_0x2f30c3) {
    return null;
  }
  _0x4605d7.cooldown = 1 / Math.max(_0x272d6d.fireRate, 0.05);
  const _0x3d34d9 = _0x108a25(_0x4605d7.x, _0x4605d7.y, 0);
  const _0x41115e = new _0x21bf1d.Vector3(_0x3d34d9.x, 0.7 + _0x4605d7.level * 0.08, _0x3d34d9.z);
  return spawnProjectile({
    typeId: _0x4605d7.typeId,
    origin: _0x41115e,
    target: _0x2f30c3,
    damage: _0x272d6d.damage,
    aoe: _0x272d6d.aoe || 0,
    slow: _0x272d6d.slow || 0,
    slowDuration: _0x272d6d.slowDuration || 0,
    speed: _0x4605d7.typeId === "mage" ? 7.5 : _0x4605d7.typeId === "frost" ? 8 : 11
  });
}
export function clearSlowVisualIfNeeded(_0xbbcd6f) {
  if (!((_0xbbcd6f.slowTimer || 0) > 0) && !((_0xbbcd6f.slowMul || 1) >= 0.999)) {
    _0xbbcd6f.slowMul = 1;
    _0xbbcd6f.mesh.traverse(_0x1a3067 => {
      if (_0x1a3067.isMesh && _0x1a3067.name === "EnemyBody" && _0x1a3067.material?.emissive) {
        _0x1a3067.material.emissiveIntensity = 0.12;
      }
    });
  }
}