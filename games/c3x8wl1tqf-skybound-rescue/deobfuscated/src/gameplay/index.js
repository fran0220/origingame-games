export { createWarden } from "./warden.js";
export { createRunLifecycle } from "./runLifecycle.js";
export { createChargeSystem } from "./charges.js";
export { createCollapseSystem } from "./collapses.js";
export { createShearSystem } from "./shears.js";
export { createRescueSystem } from "./rescue.js";
export { createBeaconSystem } from "./beacons.js";
export { createStormFieldSystem } from "./stormFields.js";
export { createTutorialFlags } from "./tutorial.js";
export { createWinProgress } from "./winProgress.js";
import { CHARGE_RULES as _0x4a1a26, RESCUE_RULES as _0xd84b89 } from "../shared/contracts.js";
import { createChargeSystem as _0x3e2a37 } from "./charges.js";
import { createCollapseSystem as _0x310186 } from "./collapses.js";
import { createShearSystem as _0x3405b6 } from "./shears.js";
import { createRescueSystem as _0x4cf2e5 } from "./rescue.js";
import { createBeaconSystem as _0x9655be } from "./beacons.js";
import { createStormFieldSystem as _0x47677c } from "./stormFields.js";
import { createTutorialFlags as _0x5db96e } from "./tutorial.js";
import { createWinProgress as _0x2529e6 } from "./winProgress.js";
export function createTraversalHazards(_0x1f4ec2, _0x204939) {
  const _0x445acf = _0x204939?.runReset;
  const _0x24623a = _0x204939?.events;
  const _0xe0d82c = _0x204939?.warden;
  const _0x1e810b = _0x204939?.beats ?? {};
  if (!_0x1f4ec2) {
    throw new Error("createTraversalHazards requires game");
  }
  if (!_0x445acf?.register) {
    throw new Error("createTraversalHazards requires runReset");
  }
  if (!_0x24623a?.emit) {
    throw new Error("createTraversalHazards requires events");
  }
  if (!_0xe0d82c?.footRoot) {
    throw new Error("createTraversalHazards requires warden.footRoot");
  }
  const _0x3e9d6f = () => {
    const _0x428d75 = _0xe0d82c.footRoot.position;
    return {
      x: _0x428d75.x,
      y: _0x428d75.y,
      z: _0x428d75.z
    };
  };
  const _0x460c0a = () => typeof _0xe0d82c.getGrounded == "function" ? Boolean(_0xe0d82c.getGrounded()) : Boolean(_0xe0d82c.controller?.grounded);
  const _0x59a703 = _0x3e2a37(_0x1f4ec2, {
    events: _0x24623a,
    runReset: _0x445acf,
    getPlayerPos: _0x3e9d6f,
    rests: _0x1e810b.rests ?? [],
    pickups: _0x1e810b.pickups ?? []
  });
  const _0x4045cb = _0x310186(_0x1f4ec2, {
    events: _0x24623a,
    runReset: _0x445acf,
    getPlayerPos: _0x3e9d6f,
    getGrounded: _0x460c0a,
    collapses: _0x1e810b.collapses ?? [],
    trySpend: _0x93a4af => _0x59a703.trySpend(_0x93a4af),
    stabilizeRange: _0x204939.stabilizeRange ?? _0x4a1a26.stabilizeRange
  });
  const _0x1c63fa = _0x3405b6(_0x1f4ec2, {
    events: _0x24623a,
    runReset: _0x445acf,
    warden: _0xe0d82c,
    shears: _0x1e810b.shears ?? [],
    getPlayerPos: _0x3e9d6f,
    getGrounded: _0x460c0a,
    getVerticalSpeed: () => typeof _0xe0d82c.getVerticalSpeed == "function" ? Number(_0xe0d82c.getVerticalSpeed()) || 0 : Number(_0xe0d82c.controller?.verticalSpeed) || 0
  });
  const _0xda6c7e = {
    charges: _0x59a703,
    collapses: _0x4045cb,
    shears: _0x1c63fa,
    dispose: function () {
      try {
        _0x1c63fa.dispose();
      } catch {}
      try {
        _0x4045cb.dispose();
      } catch {}
      try {
        _0x59a703.dispose();
      } catch {}
    }
  };
  _0x1f4ec2.own?.(_0xda6c7e);
  return _0xda6c7e;
}
export function createRescueLoop(_0x3947cd, _0x5b7935) {
  const _0x177f0c = _0x5b7935?.runReset;
  const _0x10177d = _0x5b7935?.events;
  const _0xb12708 = _0x5b7935?.warden;
  const _0x2df766 = _0x5b7935?.beats ?? {};
  const _0x3cf096 = _0x5b7935?.foundation ?? {};
  if (!_0x3947cd) {
    throw new Error("createRescueLoop requires game");
  }
  if (!_0x177f0c?.register) {
    throw new Error("createRescueLoop requires runReset");
  }
  if (!_0x10177d?.emit) {
    throw new Error("createRescueLoop requires events");
  }
  if (!_0xb12708?.footRoot) {
    throw new Error("createRescueLoop requires warden.footRoot");
  }
  const _0x48bf11 = _0x5b7935.trySpend ?? _0x5b7935.charges?.trySpend ?? _0x5b7935.hazards?.charges?.trySpend;
  if (typeof _0x48bf11 != "function") {
    throw new Error("createRescueLoop requires trySpend (pass charges.trySpend from createTraversalHazards)");
  }
  const _0x19be97 = () => {
    const _0x2540c1 = _0xb12708.footRoot.position;
    return {
      x: _0x2540c1.x,
      y: _0x2540c1.y,
      z: _0x2540c1.z
    };
  };
  const _0x3536d6 = [...(Array.isArray(_0x3cf096.spirits) ? _0x3cf096.spirits : []), ...(Array.isArray(_0x2df766.spirits) ? _0x2df766.spirits : [])];
  const _0x42a370 = [...(Array.isArray(_0x3cf096.anchors) ? _0x3cf096.anchors : []), ...(Array.isArray(_0x2df766.anchors) ? _0x2df766.anchors : [])];
  const _0x1f1432 = Array.isArray(_0x2df766.beaconSockets) ? _0x2df766.beaconSockets : [];
  const _0x2deb7b = Array.isArray(_0x2df766.stormFields) ? _0x2df766.stormFields : [];
  const _0x519796 = Array.isArray(_0x2df766.gates) ? _0x2df766.gates : [];
  const _0x4b5820 = (Array.isArray(_0x2df766.routeSpineExtended) && _0x2df766.routeSpineExtended.length > 0 ? _0x2df766.routeSpineExtended : null) ?? (Array.isArray(_0x3cf096.routeSpine) ? _0x3cf096.routeSpine : []);
  const _0x272f13 = _0x4cf2e5(_0x3947cd, {
    events: _0x10177d,
    runReset: _0x177f0c,
    warden: _0xb12708,
    getPlayerPos: _0x19be97,
    spirits: _0x3536d6,
    anchors: _0x42a370
  });
  const _0x3831ed = _0x9655be(_0x3947cd, {
    events: _0x10177d,
    runReset: _0x177f0c,
    getPlayerPos: _0x19be97,
    trySpend: _0x48bf11,
    beaconSockets: _0x1f1432,
    gates: _0x519796
  });
  const _0x3ec36b = _0x47677c(_0x3947cd, {
    events: _0x10177d,
    runReset: _0x177f0c,
    warden: _0xb12708,
    getPlayerPos: _0x19be97,
    stormFields: _0x2deb7b
  });
  const _0x134b22 = _0x5db96e(_0x3947cd, {
    events: _0x10177d,
    runReset: _0x177f0c,
    warden: _0xb12708,
    getPlayerPos: _0x19be97,
    getFreedCount: () => _0x272f13.getFreedCount(),
    getCarriedId: () => _0x272f13.getCarriedId(),
    routeSpine: _0x4b5820,
    requiredFreesOnboarding: _0xd84b89.requiredFreesOnboarding,
    requiredFreesBeatA: _0xd84b89.requiredFreesBeatA,
    requiredFreesBeatB: _0xd84b89.requiredFreesBeatB,
    requiredFreesBeatC: _0xd84b89.requiredFreesBeatC
  });
  const _0x279cf5 = _0x2529e6(_0x3947cd, {
    events: _0x10177d,
    runReset: _0x177f0c,
    rescue: _0x272f13,
    getFreedCount: () => _0x272f13.getFreedCount(),
    getSpireFreedCount: () => _0x272f13.getSpireFreedCount()
  });
  const _0x338451 = {
    rescue: _0x272f13,
    beacons: _0x3831ed,
    storms: _0x3ec36b,
    tutorial: _0x134b22,
    winProgress: _0x279cf5,
    dispose: function () {
      try {
        _0x279cf5.dispose();
      } catch {}
      try {
        _0x134b22.dispose();
      } catch {}
      try {
        _0x3ec36b.dispose();
      } catch {}
      try {
        _0x3831ed.dispose();
      } catch {}
      try {
        _0x272f13.dispose();
      } catch {}
    }
  };
  _0x3947cd.own?.(_0x338451);
  return _0x338451;
}