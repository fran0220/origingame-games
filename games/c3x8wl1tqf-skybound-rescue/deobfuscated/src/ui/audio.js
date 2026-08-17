const AUDIO_ENTRIES = [{
  id: "storm-ambience",
  url: "./assets/audio/storm-ambience.mp3",
  bus: "ambience"
}, {
  id: "music-bed",
  url: "./assets/audio/music-bed.mp3",
  bus: "music"
}, {
  id: "music-spire-crest",
  url: "./assets/audio/music-spire-crest.mp3",
  bus: "music"
}, {
  id: "stinger-win",
  url: "./assets/audio/stinger-win.mp3",
  bus: "sfx"
}, {
  id: "stinger-fail",
  url: "./assets/audio/stinger-fail.mp3",
  bus: "sfx"
}, {
  id: "jump",
  url: "./assets/audio/jump.mp3",
  bus: "sfx"
}, {
  id: "land",
  url: "./assets/audio/land.mp3",
  bus: "sfx"
}, {
  id: "foot-stone",
  url: "./assets/audio/foot-stone.mp3",
  bus: "sfx"
}, {
  id: "shear-whoosh",
  url: "./assets/audio/shear-whoosh.mp3",
  bus: "sfx"
}, {
  id: "collapse-crack",
  url: "./assets/audio/collapse-crack.mp3",
  bus: "sfx"
}, {
  id: "collapse-fall",
  url: "./assets/audio/collapse-fall.mp3",
  bus: "sfx"
}, {
  id: "charge-spend",
  url: "./assets/audio/charge-spend.mp3",
  bus: "sfx"
}, {
  id: "charge-restore",
  url: "./assets/audio/charge-restore.mp3",
  bus: "sfx"
}, {
  id: "spirit-pickup",
  url: "./assets/audio/spirit-pickup.mp3",
  bus: "sfx"
}, {
  id: "spirit-free",
  url: "./assets/audio/spirit-free.mp3",
  bus: "sfx"
}, {
  id: "beacon-light",
  url: "./assets/audio/beacon-light.mp3",
  bus: "sfx"
}, {
  id: "gate-open",
  url: "./assets/audio/gate-open.mp3",
  bus: "sfx"
}, {
  id: "interference-enter",
  url: "./assets/audio/interference-enter.mp3",
  bus: "sfx"
}, {
  id: "interference-exit",
  url: "./assets/audio/interference-exit.mp3",
  bus: "sfx"
}, {
  id: "ui-toast",
  url: "./assets/audio/ui-toast.mp3",
  bus: "sfx"
}];
const CUE_DEFS = {
  jump: {
    clips: ["jump"],
    bus: "sfx",
    volume: [0.55, 0.7],
    rate: [0.96, 1.05],
    cooldownMs: 90,
    maxVoices: 2
  },
  land: {
    clips: ["land"],
    bus: "sfx",
    volume: [0.5, 0.72],
    rate: [0.94, 1.06],
    cooldownMs: 120,
    maxVoices: 2
  },
  foot: {
    clips: ["foot-stone"],
    bus: "sfx",
    volume: [0.22, 0.38],
    rate: [0.9, 1.12],
    cooldownMs: 160,
    maxVoices: 2
  },
  shear: {
    clips: ["shear-whoosh"],
    bus: "sfx",
    volume: [0.55, 0.75],
    rate: [0.95, 1.08],
    cooldownMs: 180,
    maxVoices: 2
  },
  crack: {
    clips: ["collapse-crack"],
    bus: "sfx",
    volume: [0.6, 0.8],
    rate: [0.92, 1.04],
    cooldownMs: 80,
    maxVoices: 3
  },
  fall: {
    clips: ["collapse-fall"],
    bus: "sfx",
    volume: [0.55, 0.78],
    rate: [0.9, 1.05],
    cooldownMs: 100,
    maxVoices: 3
  },
  "charge-spend": {
    clips: ["charge-spend"],
    bus: "sfx",
    volume: [0.5, 0.68],
    rate: [0.98, 1.04],
    cooldownMs: 60,
    maxVoices: 2
  },
  "charge-restore": {
    clips: ["charge-restore"],
    bus: "sfx",
    volume: [0.48, 0.7],
    rate: [0.97, 1.05],
    cooldownMs: 80,
    maxVoices: 2
  },
  "spirit-pickup": {
    clips: ["spirit-pickup"],
    bus: "sfx",
    volume: [0.5, 0.7],
    rate: [0.97, 1.05],
    cooldownMs: 80,
    maxVoices: 2
  },
  "spirit-free": {
    clips: ["spirit-free"],
    bus: "sfx",
    volume: [0.55, 0.78],
    rate: [0.96, 1.04],
    cooldownMs: 100,
    maxVoices: 2
  },
  "beacon-light": {
    clips: ["beacon-light"],
    bus: "sfx",
    volume: [0.52, 0.72],
    rate: [0.97, 1.04],
    cooldownMs: 120,
    maxVoices: 2
  },
  "gate-open": {
    clips: ["gate-open"],
    bus: "sfx",
    volume: [0.55, 0.75],
    rate: [0.95, 1.03],
    cooldownMs: 150,
    maxVoices: 1
  },
  "interference-enter": {
    clips: ["interference-enter"],
    bus: "sfx",
    volume: [0.4, 0.58],
    rate: [0.96, 1.02],
    cooldownMs: 200,
    maxVoices: 1
  },
  "interference-exit": {
    clips: ["interference-exit"],
    bus: "sfx",
    volume: [0.38, 0.55],
    rate: [0.97, 1.03],
    cooldownMs: 200,
    maxVoices: 1
  },
  "ui-toast": {
    clips: ["ui-toast"],
    bus: "sfx",
    volume: [0.28, 0.42],
    rate: [0.98, 1.04],
    cooldownMs: 120,
    maxVoices: 2
  },
  "stinger-win": {
    clips: ["stinger-win"],
    bus: "sfx",
    volume: [0.62, 0.78],
    rate: [0.98, 1.02],
    cooldownMs: 400,
    maxVoices: 1
  },
  "stinger-fail": {
    clips: ["stinger-fail"],
    bus: "sfx",
    volume: [0.58, 0.74],
    rate: [0.96, 1.02],
    cooldownMs: 400,
    maxVoices: 1
  }
};
const AMBIENCE_ID = "storm-ambience";
const AMBIENCE_LOOP_KEY = "storm-ambience-loop";
const MUSIC_BED_ID = "music-bed";
const MUSIC_CREST_ID = "music-spire-crest";
const FOOT_INTERVAL_S = 0.38;
const JUMP_EDGE_VY = 1.2;
const SPIRE_FREE_THRESHOLD = 7;
export async function createStormAudio(_0x4f4464, _0x316cdd = {}) {
  const {
    events: _0x281b87,
    warden: _0x3b0601,
    reducedMotion: _0x2cf12e = false,
    getSegmentHint: _0x46fa48,
    getFreedCount: _0xb1b1d0
  } = _0x316cdd;
  const _0x3b0414 = _0x4f4464.audio;
  const _0x98692a = [];
  let _0x1c7571 = false;
  let _0x2682ae = false;
  let _0x4ff72e = "none";
  let _0x115d32 = false;
  let _0x5b5723 = false;
  const _0xd40bcf = [];
  const _0x16c6d5 = _0x2cf12e ? 0.38 : 0.55;
  const _0x5d0432 = _0x2cf12e ? 0.48 : 0.68;
  const _0x56c14e = _0x2cf12e ? 0.52 : 0.74;
  const _0x54b080 = (_0x205f46, _0x500eac) => {
    if (_0x1c7571 || !_0x3b0414?.cue) {
      return null;
    }
    try {
      return _0x3b0414.cue(_0x205f46, _0x500eac);
    } catch {
      return null;
    }
  };
  if (_0x3b0414?.load) {
    for (const _0x5b9207 of AUDIO_ENTRIES) {
      try {
        await _0x3b0414.load([_0x5b9207]);
        _0xd40bcf.push(_0x5b9207.id);
      } catch (_0x2bf46c) {
        console.warn("[storm-audio] skip " + _0x5b9207.id + ":", _0x2bf46c?.message ?? _0x2bf46c);
      }
    }
  }
  const _0x2f4ba6 = new Set(_0xd40bcf);
  if (_0x3b0414?.defineCue) {
    for (const [_0x163dee, _0x116a36] of Object.entries(CUE_DEFS)) {
      const _0x142caa = _0x116a36.clips.filter(_0x2336ed => _0x2f4ba6.has(_0x2336ed));
      if (_0x142caa.length !== 0) {
        try {
          _0x3b0414.defineCue(_0x163dee, {
            ..._0x116a36,
            clips: _0x142caa
          });
        } catch (_0x1653c2) {
          console.warn("[storm-audio] defineCue " + _0x163dee, _0x1653c2);
        }
      }
    }
  }
  try {
    _0x3b0414?.setBusVolume?.("music", _0x16c6d5);
  } catch {}
  const _0x4c5ef8 = (_0x3bbd3b = 280) => {
    if (_0x3b0414) {
      try {
        if (typeof _0x3b0414.fadeBus == "function" && _0x3bbd3b > 0) {
          _0x3b0414.fadeBus("ambience", 0, _0x3bbd3b);
        }
      } catch {}
      try {
        _0x3b0414.stop?.(AMBIENCE_ID);
        _0x3b0414.stop?.(AMBIENCE_LOOP_KEY);
      } catch {}
      _0x2682ae = false;
      try {
        _0x3b0414.setBusVolume?.("ambience", _0x2cf12e ? 0.42 : 0.58);
      } catch {}
    }
  };
  const _0x869fac = () => {
    if (!_0x1c7571 && _0x3b0414 && _0x2f4ba6.has(AMBIENCE_ID)) {
      try {
        _0x4c5ef8(0);
        _0x3b0414.setBusVolume?.("ambience", _0x2cf12e ? 0.42 : 0.58);
        _0x3b0414.play(AMBIENCE_ID, {
          bus: "ambience",
          loop: true,
          loopKey: AMBIENCE_LOOP_KEY,
          volume: _0x2cf12e ? 0.55 : 0.78
        });
        _0x2682ae = true;
      } catch (_0x4cc0a4) {
        console.warn("[storm-audio] ambience start", _0x4cc0a4);
        _0x2682ae = false;
      }
    }
  };
  const _0x51a8b5 = (_0x52344e = 400) => {
    if (_0x3b0414?.music) {
      try {
        _0x3b0414.music.stop({
          fadeMs: _0x52344e
        });
      } catch {
        try {
          _0x3b0414.music.stop?.();
        } catch {}
      }
      _0x4ff72e = "none";
      try {
        _0x3b0414.setBusVolume?.("music", _0x16c6d5);
      } catch {}
    } else {
      _0x4ff72e = "none";
    }
  };
  const _0x442a99 = (_0x213147, _0x4e46f4 = {}) => {
    if (_0x1c7571 || !_0x3b0414?.music) {
      return;
    }
    const _0x5a2f6f = _0x213147 === "crest" ? MUSIC_CREST_ID : "music-bed";
    if (!_0x2f4ba6.has(_0x5a2f6f)) {
      return;
    }
    if (_0x4ff72e === _0x213147 && _0x3b0414.music.current === _0x5a2f6f) {
      return;
    }
    const _0xe1806a = _0x4e46f4.fadeMs ?? (_0x4ff72e === "none" ? 700 : 900);
    const _0x25ac70 = _0x213147 === "crest" ? _0x56c14e : _0x5d0432;
    try {
      _0x3b0414.setBusVolume?.("music", _0x16c6d5);
      _0x3b0414.music.play(_0x5a2f6f, {
        loop: true,
        fadeMs: _0xe1806a,
        volume: _0x25ac70
      });
      _0x4ff72e = _0x213147;
    } catch (_0x55f02c) {
      console.warn("[storm-audio] music " + _0x213147, _0x55f02c);
    }
  };
  const _0xf81830 = () => {
    if (!_0x1c7571) {
      if (_0x115d32 && _0x2f4ba6.has(MUSIC_CREST_ID)) {
        _0x442a99("crest");
      } else if (_0x2f4ba6.has("music-bed")) {
        _0x442a99("bed");
      }
    }
  };
  const _0x589b6b = () => {
    if (_0x115d32) {
      return;
    }
    _0x115d32 = true;
    const _0x12a801 = _0x4f4464.phase ?? _0x4f4464.getPhase?.();
    if (_0x12a801 === "playing" || _0x12a801 === "paused") {
      _0x442a99("crest", {
        fadeMs: 1100
      });
    }
  };
  const _0x2f5a9b = _0x2c496d => {
    const _0x517f7c = Number(_0x2c496d);
    if (Number.isFinite(_0x517f7c) && _0x517f7c >= 7) {
      _0x589b6b();
    }
  };
  const _0x1632dd = () => {
    if (!_0x1c7571 && !_0x5b5723) {
      _0x5b5723 = true;
      _0x51a8b5(500);
      _0x54b080("stinger-win", _0x2cf12e ? {
        volume: 0.48
      } : undefined);
    }
  };
  const _0x5f486c = _0x12f2eb => {
    if (_0x12f2eb === "playing" || _0x12f2eb === "paused") {
      if (!_0x2682ae) {
        _0x869fac();
      }
      _0xf81830();
      return;
    }
    if (_0x2682ae) {
      _0x4c5ef8(320);
    }
    if (_0x12f2eb !== "complete") {
      if (_0x12f2eb !== "fail") {
        _0x51a8b5(0);
        _0x5b5723 = false;
        _0x115d32 = false;
      } else if (_0x4ff72e !== "none") {
        _0x51a8b5(280);
      }
    } else if (_0x4ff72e !== "none") {
      _0x51a8b5(500);
    }
  };
  if (typeof _0x4f4464.shell?.onEnterPlay == "function") {
    const _0x10f23b = _0x4f4464.shell.onEnterPlay(() => {
      if (!_0x1c7571) {
        _0x5b5723 = false;
        _0x869fac();
        _0xf81830();
      }
    });
    if (typeof _0x10f23b == "function") {
      _0x98692a.push(_0x10f23b);
    }
  }
  if (typeof _0x4f4464.onPhaseChange == "function") {
    _0x98692a.push(_0x4f4464.onPhaseChange(_0x4927a7 => {
      if (!_0x1c7571 && (_0x4927a7 === "complete" ? _0x1632dd() : _0x4927a7 === "fail" ? _0x1c7571 || _0x5b5723 || (_0x5b5723 = true, _0x51a8b5(280), _0x54b080("stinger-fail", _0x2cf12e ? {
        volume: 0.45
      } : undefined)) : _0x4927a7 === "playing" ? _0x5b5723 = false : _0x4927a7 === "title" && (_0x5b5723 = false, _0x115d32 = false), _0x5f486c(_0x4927a7), _0x4927a7 === "fail" || _0x4927a7 === "title")) {
        try {
          if (_0x4927a7 === "title") {
            _0x3b0414?.stopBus?.("sfx");
          } else if (_0x4927a7 === "fail" && !_0x2f4ba6.has("stinger-fail")) {
            _0x3b0414?.stopBus?.("sfx");
          }
        } catch {}
      }
    }));
  }
  const _0x421916 = _0x4f4464.phase ?? _0x4f4464.getPhase?.();
  _0x5f486c(_0x421916);
  if (_0x281b87?.on) {
    _0x98692a.push(_0x281b87.on("shearTriggered", () => {
      _0x54b080("shear", _0x2cf12e ? {
        volume: 0.4
      } : undefined);
    }));
    _0x98692a.push(_0x281b87.on("collapseStart", () => {
      _0x54b080("crack");
    }));
    _0x98692a.push(_0x281b87.on("plateFell", () => {
      _0x54b080("fall");
    }));
    _0x98692a.push(_0x281b87.on("chargeChanged", _0x49993c => {
      const _0x15fb10 = _0x49993c?.previous ?? _0x49993c?.prev;
      const _0x31d5bc = _0x49993c?.charges ?? _0x49993c?.value ?? _0x49993c?.current;
      if (Number.isFinite(_0x15fb10) && Number.isFinite(_0x31d5bc) && _0x31d5bc < _0x15fb10) {
        _0x54b080("charge-spend");
      }
    }));
    _0x98692a.push(_0x281b87.on("chargeRestored", () => {
      _0x54b080("charge-restore");
    }));
    _0x98692a.push(_0x281b87.on("chargeSpent", () => {
      _0x54b080("charge-spend");
    }));
    _0x98692a.push(_0x281b87.on("stabilized", () => {
      _0x54b080("charge-spend");
    }));
    _0x98692a.push(_0x281b87.on("spiritPickedUp", _0x5c4e4e => {
      _0x54b080("spirit-pickup");
      if (String(_0x5c4e4e?.segment ?? _0x5c4e4e?.beat ?? "").toLowerCase().includes("spire")) {
        _0x589b6b();
      }
    }));
    _0x98692a.push(_0x281b87.on("spiritFreed", _0x265290 => {
      _0x54b080("spirit-free");
      if (String(_0x265290?.segment ?? _0x265290?.beat ?? "").toLowerCase().includes("spire")) {
        _0x589b6b();
      }
      const _0x3a857f = _0x265290?.freedCount ?? _0x265290?.freed ?? _0x265290?.totalFreed ?? _0x265290?.count;
      if (_0x3a857f != null) {
        _0x2f5a9b(_0x3a857f);
      } else if (typeof _0xb1b1d0 == "function") {
        try {
          _0x2f5a9b(_0xb1b1d0());
        } catch {}
      }
    }));
    _0x98692a.push(_0x281b87.on("beaconLit", () => {
      _0x54b080("beacon-light");
    }));
    _0x98692a.push(_0x281b87.on("gateOpened", () => {
      _0x54b080("gate-open");
    }));
    _0x98692a.push(_0x281b87.on("stormEnter", () => {
      _0x54b080("interference-enter", _0x2cf12e ? {
        volume: 0.28
      } : undefined);
    }));
    _0x98692a.push(_0x281b87.on("stormExit", () => {
      _0x54b080("interference-exit", _0x2cf12e ? {
        volume: 0.26
      } : undefined);
    }));
    _0x98692a.push(_0x281b87.on("interferenceEnter", () => {
      _0x54b080("interference-enter", _0x2cf12e ? {
        volume: 0.28
      } : undefined);
    }));
    _0x98692a.push(_0x281b87.on("interferenceExit", () => {
      _0x54b080("interference-exit", _0x2cf12e ? {
        volume: 0.26
      } : undefined);
    }));
    _0x98692a.push(_0x281b87.on("tutorialToast", () => {
      _0x54b080("ui-toast");
    }));
    _0x98692a.push(_0x281b87.on("segmentChanged", _0x374dfd => {
      if (String(_0x374dfd?.segment ?? _0x374dfd?.id ?? _0x374dfd ?? "").toLowerCase().includes("spire")) {
        _0x589b6b();
      }
    }));
    _0x98692a.push(_0x281b87.on("winProgress", () => {
      _0x589b6b();
    }));
    _0x98692a.push(_0x281b87.on("winTriggered", () => {
      _0x1632dd();
    }));
    _0x98692a.push(_0x281b87.on("runWon", () => {
      _0x1632dd();
    }));
  }
  let _0x12f2c6 = true;
  let _0x54a2ff = 0;
  let _0x7ea478 = 0;
  let _0x25095e = 0;
  try {
    _0x12f2c6 = Boolean(_0x3b0601?.getGrounded?.() ?? _0x3b0601?.controller?.grounded ?? true);
    const _0x24ffa2 = _0x3b0601?.footRoot?.position;
    if (_0x24ffa2) {
      _0x7ea478 = Number(_0x24ffa2.x) || 0;
      _0x25095e = Number(_0x24ffa2.z) || 0;
    }
  } catch {
    _0x12f2c6 = true;
  }
  const _0x3013d1 = () => {
    try {
      if (typeof _0x3b0601?.getGrounded == "function") {
        return Boolean(_0x3b0601.getGrounded());
      } else {
        return Boolean(_0x3b0601?.controller?.grounded);
      }
    } catch {
      return _0x12f2c6;
    }
  };
  const _0x4125be = _0x4f4464.loop?.onUpdate?.(_0x389b7a => {
    if (_0x1c7571) {
      return;
    }
    const _0x7e7fec = _0x4f4464.phase ?? _0x4f4464.getPhase?.();
    if ((_0x7e7fec === "playing" || _0x7e7fec === "paused") && !_0x115d32) {
      if ((() => {
        try {
          if (typeof _0x46fa48 == "function") {
            const _0x145c62 = _0x46fa48();
            if (_0x145c62 != null && _0x145c62 !== "") {
              return String(_0x145c62).toLowerCase();
            }
          }
        } catch {}
        return "";
      })().includes("spire")) {
        _0x589b6b();
      } else if (typeof _0xb1b1d0 == "function") {
        try {
          _0x2f5a9b(_0xb1b1d0());
        } catch {}
      }
    }
    if (!_0x3b0601) {
      return;
    }
    if (_0x7e7fec !== "playing") {
      _0x12f2c6 = _0x3013d1();
      return;
    }
    const _0x31088d = _0x3013d1();
    const _0x5b18b0 = (() => {
      try {
        if (typeof _0x3b0601?.getVerticalSpeed == "function") {
          return Number(_0x3b0601.getVerticalSpeed()) || 0;
        } else {
          return Number(_0x3b0601?.controller?.verticalSpeed) || 0;
        }
      } catch {
        return 0;
      }
    })();
    if (_0x12f2c6 && !_0x31088d && _0x5b18b0 > 1.2) {
      _0x54b080("jump");
    }
    if (!_0x12f2c6 && _0x31088d) {
      _0x54b080("land");
      _0x54a2ff = 0;
    }
    if (_0x31088d && !_0x2cf12e) {
      const _0x8a277f = _0x3b0601.footRoot?.position;
      let _0x27d915 = 0;
      if (_0x8a277f) {
        const _0x580e55 = Number(_0x8a277f.x) || 0;
        const _0x4aa845 = Number(_0x8a277f.z) || 0;
        const _0x28e94b = _0x580e55 - _0x7ea478;
        const _0x22f593 = _0x4aa845 - _0x25095e;
        _0x27d915 = Math.hypot(_0x28e94b, _0x22f593);
        _0x7ea478 = _0x580e55;
        _0x25095e = _0x4aa845;
      }
      if (_0x27d915 > 0.02) {
        _0x54a2ff += _0x389b7a;
        if (_0x54a2ff >= 0.38) {
          _0x54a2ff = 0;
          _0x54b080("foot");
        }
      } else {
        _0x54a2ff = Math.max(0, _0x54a2ff - _0x389b7a);
      }
    } else {
      _0x54a2ff = 0;
    }
    _0x12f2c6 = _0x31088d;
  }, 35);
  if (typeof _0x4125be == "function") {
    _0x98692a.push(_0x4125be);
  }
  if (typeof _0x4f4464.onReset == "function") {
    _0x98692a.push(_0x4f4464.onReset(() => {
      if (!_0x1c7571) {
        _0x4c5ef8(0);
        _0x51a8b5(0);
        _0x5b5723 = false;
        _0x115d32 = false;
        try {
          _0x3b0414?.stopBus?.("sfx");
        } catch {}
        queueMicrotask(() => {
          if (_0x1c7571) {
            return;
          }
          const _0x363e55 = _0x4f4464.phase ?? _0x4f4464.getPhase?.();
          if (_0x363e55 === "playing" || _0x363e55 === "paused") {
            _0x869fac();
            _0xf81830();
          }
        });
      }
    }));
  }
  const _0xf3b240 = () => {
    _0x4c5ef8(0);
    _0x51a8b5(0);
    try {
      _0x3b0414?.stopBus?.("sfx");
      _0x3b0414?.stopBus?.("ambience");
      _0x3b0414?.stopBus?.("music");
      _0x3b0414?.music?.stop?.({
        fadeMs: 0
      });
    } catch {}
    _0x4ff72e = "none";
  };
  const _0x325172 = () => {
    if (!_0x1c7571) {
      _0x1c7571 = true;
      _0xf3b240();
      for (const _0x2796d3 of _0x98692a.splice(0)) {
        try {
          _0x2796d3?.();
        } catch {}
      }
    }
  };
  _0x4f4464.own?.(_0x325172);
  return {
    stopAll: _0xf3b240,
    dispose: _0x325172,
    ready: _0xd40bcf.length > 0,
    loadedIds: _0xd40bcf,
    musicBusUnused: false
  };
}