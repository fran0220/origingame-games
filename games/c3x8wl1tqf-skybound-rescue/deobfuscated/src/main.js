import { createGame as _0x5e0c60, createPhysics as _0x32e846, reportReady as _0x297634 } from "og-engine";
import { createRunResetRegistry as _0x8a97c5, createGameEvents as _0x4018c9, STORM_PALETTE as _0x5b58af, RESCUE_RULES as _0x59620a } from "./shared/contracts.js";
import { buildOnboardingIsle as _0x48210d, buildBeatsAB as _0x1d0e5d, buildBeatsCSpire as _0xdebe09, createSpineCameraBinder as _0x2e0b7d, preferredCamera as _0x3508b1 } from "./world/index.js";
import { createWarden as _0x423858, createRunLifecycle as _0x3a7c20, createTraversalHazards as _0x366d31, createRescueLoop as _0x211d45 } from "./gameplay/index.js";
import { createShellUi as _0x41eb05, createPresentation as _0x3d862e } from "./ui/index.js";
const f = _0x5e0c60({
  background: _0x5b58af.indigo,
  exposure: 1.05,
  camera: {
    fov: 52,
    near: 0.12,
    far: 140,
    position: [10, 8, -6]
  },
  artDirection: {
    palette: {
      background: _0x5b58af.indigo,
      fog: _0x5b58af.fog,
      accent: _0x5b58af.amber,
      secondary: _0x5b58af.violet,
      primary: _0x5b58af.slate,
      danger: 16735338
    },
    fog: {
      near: 22,
      far: 72,
      color: _0x5b58af.fog
    },
    toneMappingExposure: 1.05
  },
  shell: {
    name: "Skybound Rescue",
    title: "custom",
    startAction: {
      keys: ["Enter"],
      pointer: true
    },
    loadingLabel: "Gathering storm…",
    transition: {
      type: "fade",
      durationMs: 280
    }
  },
  bindPauseKey: false,
  pauseKey: "Escape"
});
const S = _0x8a97c5();
const k = _0x4018c9();
const w = {
  onStart: () => {
    f.shell.enterPlay();
  },
  onRestart: () => {
    f.reset();
  },
  onTitle: () => {
    f.shell.toTitle();
  },
  onResume: () => {
    f.resume();
  }
};
const v = _0x41eb05(f, w);
function M(..._0x2a0818) {
  const _0x4459 = [];
  for (const _0x312595 of _0x2a0818) {
    if (Array.isArray(_0x312595)) {
      _0x4459.push(..._0x312595);
    }
  }
  return _0x4459;
}
(async function () {
  const _0x11b0ad = await _0x32e846(f, {
    gravity: {
      x: 0,
      y: -14,
      z: 0
    }
  });
  const _0x3e1224 = await _0x48210d(f, _0x11b0ad);
  f.own(() => _0x3e1224.dispose());
  const _0x3cbaf1 = await _0x1d0e5d(f, _0x11b0ad, _0x3e1224);
  f.own(() => _0x3cbaf1.dispose());
  const _0x4f236f = await _0xdebe09(f, _0x11b0ad, _0x3cbaf1);
  f.own(() => _0x4f236f.dispose());
  _0x3e1224.routeSpine = _0x4f236f.routeSpineExtended;
  _0x3e1224.supportColliders.push(...(_0x3cbaf1.supportColliders ?? []), ...(_0x4f236f.supportColliders ?? []));
  const _0x4c9cb8 = {
    ..._0x4f236f,
    collapses: M(_0x3e1224.collapses, _0x3cbaf1.collapses, _0x4f236f.collapses),
    shears: M(_0x3e1224.shears, _0x3cbaf1.shears, _0x4f236f.shears),
    rests: M(_0x3e1224.rests, _0x3cbaf1.rests, _0x4f236f.rests),
    pickups: M(_0x3cbaf1.pickups, _0x4f236f.pickups),
    gates: M(_0x3cbaf1.gates, _0x4f236f.gates),
    spirits: M(_0x3cbaf1.spirits, _0x4f236f.spirits),
    anchors: M(_0x3cbaf1.anchors, _0x4f236f.anchors),
    beaconSockets: M(_0x3cbaf1.beaconSockets, _0x4f236f.beaconSockets),
    stormFields: M(_0x3cbaf1.stormFields, _0x4f236f.stormFields),
    routeSpineExtended: _0x4f236f.routeSpineExtended
  };
  const _0x439d37 = M(_0x3e1224.spirits, _0x4c9cb8.spirits);
  const _0x23c160 = M(_0x3e1224.anchors, _0x4c9cb8.anchors);
  const _0x38b9d4 = await _0x423858(f, _0x11b0ad, _0x3e1224);
  const _0x4b15c7 = _0x3a7c20(f, {
    foundation: _0x3e1224,
    warden: _0x38b9d4,
    runReset: S,
    shellUi: null
  });
  w.onRestart = () => _0x4b15c7.handleRestart();
  w.onTitle = () => _0x4b15c7.handleTitle();
  const _0x525b14 = _0x366d31(f, {
    runReset: S,
    events: k,
    warden: _0x38b9d4,
    beats: _0x4c9cb8
  });
  const _0x43cd5f = _0x211d45(f, {
    runReset: S,
    events: k,
    warden: _0x38b9d4,
    beats: _0x4c9cb8,
    foundation: _0x3e1224,
    trySpend: _0x5a280d => _0x525b14.charges.trySpend(_0x5a280d)
  });
  const _0x358143 = (() => {
    const _0x1df425 = (_0x3e1224.routeSpine ?? []).find(_0xf80c77 => _0xf80c77 && (_0xf80c77.id === "s-approach" || _0xf80c77.id === "s-1" || _0xf80c77.id === "s-ring"));
    if (_0x1df425 && Number.isFinite(_0x1df425.z)) {
      return Number(_0x1df425.z);
    } else {
      return null;
    }
  })();
  await _0x3d862e(f, {
    events: k,
    shellUi: v,
    warden: _0x38b9d4,
    beats: _0x4c9cb8,
    spirits: _0x439d37,
    anchors: _0x23c160,
    beaconSockets: _0x4c9cb8.beaconSockets,
    stormFields: _0x4c9cb8.stormFields,
    getStabilizeTarget: () => _0x525b14.collapses.getStabilizeTarget?.() ?? null,
    getBeaconTarget: () => _0x43cd5f.beacons.getBeaconTarget?.() ?? null,
    getCharges: () => _0x525b14.charges.getCharges(),
    getFreedCount: () => _0x43cd5f.rescue.getFreedCount(),
    getCarriedId: () => _0x43cd5f.rescue.getCarriedId(),
    getSpireFreedCount: () => _0x43cd5f.rescue.getSpireFreedCount?.() ?? _0x43cd5f.winProgress?.getSpireDeliveryCount?.() ?? 0,
    getSegmentHint: () => {
      const _0x462a24 = _0x38b9d4.footRoot?.position?.z;
      if (!Number.isFinite(_0x462a24) || _0x358143 == null) {
        const _0x5db6db = _0x43cd5f.rescue.getFreedCount?.() ?? 0;
        if (_0x5db6db >= _0x59620a.spiritsThroughBeatC) {
          return "spire";
        } else if (_0x5db6db >= _0x59620a.spiritsThroughBeatB) {
          return "beatC";
        } else {
          return null;
        }
      }
      if (_0x462a24 >= _0x358143 - 0.5) {
        return "spire";
      } else {
        return null;
      }
    },
    getSpireZ: () => _0x358143,
    requiredFreedTotal: _0x59620a.spiritsTotal
  });
  try {
    f.probe.observe("stabilizeInRange", () => {
      const _0x5d09aa = _0x525b14.collapses.getStabilizeTarget?.();
      return Boolean(_0x5d09aa?.inRange);
    });
    f.probe.observe("beaconInRange", () => {
      const _0x430462 = _0x43cd5f.beacons.getBeaconTarget?.();
      return Boolean(_0x430462?.inRange);
    });
    f.probe.observe("spiritsTotal", () => _0x59620a.spiritsTotal);
    f.probe.observe("segmentGate", () => _0x43cd5f.tutorial.getSegmentGateState?.()?.gate ?? null);
  } catch {}
  try {
    const _0x42ea26 = _0x43cd5f.rescue;
    const _0x3a1353 = _0x43cd5f.winProgress;
    _0x59620a.pickupRadius;
    const _0x11236f = _0x59620a.anchorRadius;
    function _0x39d230(_0x5969cf, _0x482357) {
      const _0xc6b73d = Math.max(0.35, Number(_0x482357) || _0x11236f) + 0.35;
      const _0x1929a5 = Number(_0x5969cf.x) || 0;
      const _0x23204e = Number(_0x5969cf.z) || 0;
      const _0x2edfa6 = Number.isFinite(_0x5969cf.y) ? Number(_0x5969cf.y) : _0x3e1224.spawnFoot.position.y;
      const _0x3260c1 = _0x1929a5 + (Math.abs(_0x1929a5) < 0.15 ? 1 : _0x1929a5 > 0 ? -1 : 1) * _0xc6b73d;
      const _0x424161 = _0x23204e;
      const _0x197c0d = Math.atan2(_0x1929a5 - _0x3260c1, 0);
      _0x38b9d4.resetToSpawn({
        position: {
          x: _0x3260c1,
          y: _0x2edfa6,
          z: _0x424161
        },
        yaw: _0x197c0d
      });
      try {
        _0x38b9d4.controller?.resetMotion?.();
      } catch {}
    }
    const _0x558d0b = [{
      keys: ["KeyW"],
      durationMs: 320
    }, {
      keys: ["KeyW", "KeyA"],
      durationMs: 300
    }, {
      keys: ["KeyA"],
      durationMs: 300
    }, {
      keys: ["KeyS", "KeyA"],
      durationMs: 300
    }, {
      keys: ["KeyS"],
      durationMs: 300
    }, {
      keys: ["KeyS", "KeyD"],
      durationMs: 300
    }, {
      keys: ["KeyD"],
      durationMs: 300
    }, {
      keys: ["KeyW", "KeyD"],
      durationMs: 400
    }, {
      keys: ["KeyW"],
      durationMs: 400
    }];
    f.probe.arrangement("near-objective", () => {
      _0x3a1353?.resetProgress?.();
      const _0x47c16b = _0x42ea26.spirits?.find?.(_0x531821 => _0x531821.placement?.spiritId === "o-spirit-1") ?? _0x42ea26.spirits?.[0];
      const _0x30c83d = _0x47c16b?.placement?.spiritId ?? "o-spirit-1";
      const _0x4aa4e6 = (_0x42ea26.spirits ?? []).map(_0x1f0dc3 => _0x1f0dc3.placement.spiritId).filter(Boolean);
      _0x42ea26.seedProbeProgress?.({
        keepIdleIds: _0x4aa4e6.filter(_0x56c901 => _0x56c901 !== _0x30c83d),
        carryId: _0x30c83d
      });
      const _0x2b02fb = _0x42ea26.anchors?.find?.(_0x319d81 => _0x319d81.placement?.anchorId === "o-anchor-1") ?? _0x42ea26.anchors?.find?.(_0x4de198 => _0x4de198.placement?.anchorId === _0x47c16b?.placement?.anchorId) ?? _0x42ea26.anchors?.[0];
      _0x39d230(_0x2b02fb?.placement?.center ?? {
        x: 0.85,
        y: 0,
        z: 8
      }, Math.max(0.2, Number(_0x2b02fb?.radius) || _0x11236f));
    });
    f.probe.arrangement("near-win", () => {
      _0x3a1353?.resetProgress?.();
      const _0x329ab1 = "s-spirit-3";
      _0x42ea26.seedProbeProgress?.({
        keepIdleIds: [_0x329ab1],
        carryId: _0x329ab1
      });
      const _0x16eb26 = _0x42ea26.anchors?.find?.(_0x143e97 => _0x143e97.placement?.anchorId === "s-anchor-final") ?? _0x42ea26.anchors?.find?.(_0x7e01e2 => _0x7e01e2.placement?.segment === "spire");
      _0x39d230(_0x16eb26?.placement?.center ?? {
        x: -1.35,
        y: 0,
        z: 40
      }, Math.max(0.2, Number(_0x16eb26?.radius) || _0x11236f));
    });
    f.probe.scenario("rescue-objective", {
      arrangement: "near-objective",
      outcomes: ["objective"],
      steps: _0x558d0b,
      expect: [{
        observation: "freedCount",
        gte: 1
      }, {
        observation: "carrying",
        eq: false
      }],
      timeoutMs: 10000
    });
    f.probe.scenario("spire-win", {
      arrangement: "near-win",
      outcomes: ["win", "objective"],
      steps: _0x558d0b,
      expect: [{
        observation: "spireDeliveries",
        gte: 3
      }, {
        observation: "freedCount",
        gte: _0x59620a.spiritsTotal
      }, {
        observation: "phase",
        eq: "complete"
      }],
      timeoutMs: 12000
    });
  } catch (_0x45d38b) {
    console.warn("[Skybound Rescue] objective/win probe registration failed", _0x45d38b);
  }
  const _0x239d09 = _0x2e0b7d(f, {
    routeSpine: _0x3e1224.routeSpine,
    target: _0x38b9d4.footRoot,
    reducedMotion: v.reducedMotion,
    distance: _0x3508b1.distance,
    height: _0x3508b1.height,
    lookHeight: _0x3508b1.lookHeight,
    sideSign: 1,
    useRig: false,
    autoUpdate: false
  });
  _0x239d09.setSpine?.(_0x3e1224.routeSpine);
  f.own(() => _0x239d09.dispose());
  f.loop.onUpdate(_0x2bacc4 => {
    if (f.phase === "playing" || f.phase === "paused") {
      _0x239d09.update(_0x2bacc4);
    }
  }, 5);
  _0x239d09.update(1 / 30);
  f.shell.onEnterPlay(() => {
    try {
      _0x38b9d4.controller?.resetMotion?.();
    } catch {}
  });
  _0x297634?.();
  f.start();
})().catch(_0x3ca161 => {
  console.error("[Skybound Rescue] boot failed", _0x3ca161);
  try {
    _0x297634?.();
  } catch {}
  try {
    f.start();
  } catch {}
});