export function createRunLifecycle(_0x322405, _0x1ed8f9) {
  const _0xdb856d = _0x1ed8f9?.foundation;
  const _0x2d7dec = _0x1ed8f9?.warden;
  const _0x41daea = _0x1ed8f9?.runReset;
  const _0x5f220c = _0x1ed8f9?.shellUi ?? null;
  if (!_0x322405) {
    throw new Error("createRunLifecycle requires game");
  }
  if (!_0xdb856d || typeof _0xdb856d.killY != "number") {
    throw new Error("createRunLifecycle requires foundation with killY");
  }
  if (!_0x2d7dec?.footRoot || typeof _0x2d7dec.resetToSpawn != "function") {
    throw new Error("createRunLifecycle requires warden with footRoot and resetToSpawn");
  }
  if (!_0x41daea?.register || !_0x41daea?.runAll) {
    throw new Error("createRunLifecycle requires runReset registry");
  }
  const _0x48e28d = _0x2d7dec.footRoot;
  const _0x13ab2b = _0xdb856d.killY;
  let _0xbbd051 = false;
  let _0x4aa344 = 0;
  let _0x3ae0fe = false;
  _0x322405.declareControls({
    restartKey: "KeyR"
  });
  const _0x4e675e = _0x41daea.register("foundation-warden", () => {
    _0xbbd051 = false;
    _0x2d7dec.resetToSpawn();
    try {
      _0x2d7dec.controller?.resetMotion?.();
    } catch {}
  });
  const _0x12ff61 = _0x322405.onReset(() => {
    _0x4aa344 += 1;
    _0x41daea.runAll();
    _0x5f220c?.hideModals?.();
  });
  const _0x3456dd = _0x322405.loop.onFixedUpdate(() => {
    if (_0x3ae0fe) {
      return;
    }
    if (_0x322405.phase !== "playing") {
      return;
    }
    if (_0xbbd051) {
      return;
    }
    if (_0x48e28d.position.y < _0x13ab2b) {
      _0xbbd051 = true;
      _0x322405.fail();
    }
  }, 50);
  _0x322405.probe.observe("phase", () => _0x322405.phase);
  _0x322405.probe.observe("phaseComplete", () => _0x322405.phase === "complete");
  _0x322405.probe.observe("wardenY", () => Number(_0x48e28d.position.y.toFixed(3)));
  _0x322405.probe.observe("grounded", () => typeof _0x2d7dec.getGrounded == "function" ? Boolean(_0x2d7dec.getGrounded()) : Boolean(_0x2d7dec.controller?.grounded));
  _0x322405.probe.observe("wardenX", () => Number(_0x48e28d.position.x.toFixed(3)));
  _0x322405.probe.observe("wardenZ", () => Number(_0x48e28d.position.z.toFixed(3)));
  _0x322405.probe.observe("restartPulse", () => _0x4aa344);
  _0x322405.probe.arrangement("near-ledge", () => {
    (function () {
      _0xbbd051 = false;
      _0x4aa344 = 0;
      const _0x11cf1e = _0xdb856d.spawnFoot;
      const _0x8ad632 = Number.isFinite(_0x11cf1e.position.y) ? _0x11cf1e.position.y : 0;
      const _0x4b63ba = Number.isFinite(_0x11cf1e.position.z) ? _0x11cf1e.position.z : -0.8;
      _0x2d7dec.resetToSpawn({
        position: {
          x: -5.15,
          y: Math.max(_0x8ad632, _0x13ab2b + 2.5),
          z: _0x4b63ba
        },
        yaw: -Math.PI / 2
      });
      try {
        _0x2d7dec.controller?.resetMotion?.();
      } catch {}
    })();
  });
  _0x322405.probe.arrangement("spawn-safe", () => {
    _0xbbd051 = false;
    _0x2d7dec.resetToSpawn();
  });
  _0x322405.probe.scenario("foundation-action", {
    arrangement: "spawn-safe",
    outcomes: ["action"],
    steps: [{
      keys: ["KeyW"],
      durationMs: 280
    }, {
      keys: ["Space"],
      durationMs: 120
    }, {
      keys: ["KeyW"],
      durationMs: 400
    }],
    expect: [{
      observation: "wardenY",
      changed: true
    }]
  });
  _0x322405.probe.scenario("foundation-fail-restart", {
    arrangement: "near-ledge",
    outcomes: ["fail", "restart"],
    steps: [{
      keys: ["KeyW"],
      durationMs: 1600
    }, {
      keys: ["KeyA"],
      durationMs: 500
    }, {
      keys: ["KeyW"],
      durationMs: 1200
    }, {
      keys: ["KeyR"],
      durationMs: 280
    }],
    expect: [{
      observation: "phase",
      eq: "fail"
    }, {
      observation: "restartPulse",
      gte: 1
    }],
    timeoutMs: 14000
  });
  _0x322405.probe.scenario("foundation-fail", {
    arrangement: "near-ledge",
    outcomes: ["fail"],
    steps: [{
      keys: ["KeyW"],
      durationMs: 1600
    }, {
      keys: ["KeyA"],
      durationMs: 400
    }, {
      keys: ["KeyW"],
      durationMs: 1200
    }],
    expect: [{
      observation: "phase",
      eq: "fail"
    }],
    timeoutMs: 10000
  });
  const _0xe01c94 = {
    handleRestart: function () {
      _0x322405.reset();
    },
    handleTitle: function () {
      return _0x322405.shell?.toTitle?.() ?? false;
    },
    dispose: function () {
      if (!_0x3ae0fe) {
        _0x3ae0fe = true;
        _0x4e675e();
        _0x12ff61();
        _0x3456dd();
      }
    }
  };
  _0x322405.own(_0xe01c94);
  return _0xe01c94;
}