import { CONFIG as _0x296ebc } from "../config.js";
import { QUERY as _0x336745 } from "../mode.js";
import { cornerTimeline as _0x1b916b } from "../pure/waves.js";
import { transformTimeline as _0x19684e } from "../pure/transform.js";
import { crushWarnIntensity as _0x5dbc88, warnPulse as _0x30bc2d } from "../pure/juice.js";
import { view as _0x14b08d } from "../sim/bridge.js";
import { gameMs as _0xc3c86a } from "../sim/time.js";
import { player as _0x21f857, circleHitsPlayer as _0x52bb55 } from "../sim/player.js";
import { activeCorner as _0x440f11, cornerEvents as _0x8986f5 } from "../sim/wavegate.js";
import { transformEvents as _0xb60776 } from "../sim/transform.js";
import { sLeftEdge as _0x3108d5 } from "../sim/edges.js";
const m = _0x336745.get("audio") !== "0";
const h = 0.9;
const g = 0.8;
const v = 0.32;
const w = 1.6;
const b = 0.5;
const y = {
  retry: 0.45,
  over: 0.15,
  victory: 0.55
};
const T = 14;
const q = 60;
const k = 45;
const M = 350;
const x = 260;
const S = 4;
const A = 0.055;
const V = 1;
const R = 0.5;
const L = 140;
const j = {
  hit: 0.12,
  kill: 0.2,
  fire: 0.05,
  lance: 0.75
};
const E = 0.3;
const D = 42;
let U = null;
let B = null;
let G = null;
let C = null;
let J = null;
let O = [];
let I = 0;
let F = false;
let K = false;
let P = 1;
const Y = {};
let H = 2654435769;
function N() {
  H = Math.imul(H, 1664525) + 1013904223 >>> 0;
  return H / 4294967296;
}
function Q(_0x163bc2) {
  if (!F) {
    console.warn("HULLBREAKER audio: muted after error", _0x163bc2);
  }
  F = true;
}
function _() {
  if (U) {
    return U.currentTime * 1000;
  } else {
    return 0;
  }
}
function z(_0x152eb5, _0x27a7ea) {
  const _0x57a8a7 = _();
  return !(_0x57a8a7 - (Y[_0x152eb5] ?? -1000000000) < _0x27a7ea) && (Y[_0x152eb5] = _0x57a8a7, true);
}
function $(_0x14488d, _0x9d46f1, _0x3a2176, _0x5581c4) {
  const _0x12e474 = U.createGain();
  _0x12e474.gain.setValueAtTime(0.0001, _0x14488d);
  _0x12e474.gain.linearRampToValueAtTime(_0x3a2176, _0x14488d + _0x9d46f1);
  _0x12e474.gain.exponentialRampToValueAtTime(0.0001, _0x14488d + _0x5581c4);
  return _0x12e474;
}
function W() {
  I = Math.max(0, I - 1);
}
function X() {
  return 1 / (1 + I * A);
}
function Z(_0x5108a7, _0x46ff1b, _0x9e5701, _0x11276d, _0x16e864, _0x3e74cf = 0, _0x157018 = false) {
  if (!U || F || I >= T) {
    return;
  }
  I++;
  const _0x17a655 = U.currentTime + _0x3e74cf;
  const _0x48914c = U.createOscillator();
  _0x48914c.type = _0x5108a7;
  _0x48914c.frequency.setValueAtTime(_0x46ff1b, _0x17a655);
  if (_0x9e5701 !== _0x46ff1b) {
    _0x48914c.frequency.exponentialRampToValueAtTime(Math.max(1, _0x9e5701), _0x17a655 + _0x11276d);
  }
  const _0x59c76d = $(_0x17a655, 0.005, _0x157018 ? _0x16e864 : _0x16e864 * X(), _0x11276d);
  _0x48914c.connect(_0x59c76d).connect(G);
  _0x48914c.onended = W;
  _0x48914c.start(_0x17a655);
  _0x48914c.stop(_0x17a655 + _0x11276d + 0.05);
}
function ee(_0x2ae2dc, _0xb3dfd2, _0x435e7f, _0xf98489, _0x36d115, _0x7b911 = 0, _0x505763 = 0.16) {
  if (!U || F || I >= T) {
    return;
  }
  I++;
  const _0x1d4d8d = U.currentTime + _0x7b911;
  const _0x49eaaf = U.createOscillator();
  _0x49eaaf.type = _0x2ae2dc;
  _0x49eaaf.frequency.setValueAtTime(_0xb3dfd2, _0x1d4d8d);
  if (_0x435e7f !== _0xb3dfd2) {
    _0x49eaaf.frequency.exponentialRampToValueAtTime(Math.max(1, _0x435e7f), _0x1d4d8d + _0xf98489);
  }
  const _0x32eddd = $(_0x1d4d8d, _0x505763, _0x36d115, _0xf98489);
  _0x49eaaf.connect(_0x32eddd).connect(G);
  _0x49eaaf.onended = W;
  _0x49eaaf.start(_0x1d4d8d);
  _0x49eaaf.stop(_0x1d4d8d + _0xf98489 + 0.05);
}
function te(_0x476641, _0x11b075, _0x3459be, _0x4e7ce3, _0x32af27, _0x89d191, _0x29969d = 0, _0x52bc1e = false) {
  if (!U || F || I >= T) {
    return;
  }
  I++;
  const _0x19a8d4 = U.currentTime + _0x29969d;
  const _0x13a5a2 = U.createBufferSource();
  _0x13a5a2.buffer = J;
  _0x13a5a2.loop = true;
  _0x13a5a2.playbackRate.value = 0.9 + N() * 0.2;
  const _0x21367a = U.createBiquadFilter();
  _0x21367a.type = _0x476641;
  _0x21367a.Q.value = _0x4e7ce3;
  _0x21367a.frequency.setValueAtTime(_0x11b075, _0x19a8d4);
  if (_0x3459be !== _0x11b075) {
    _0x21367a.frequency.exponentialRampToValueAtTime(Math.max(20, _0x3459be), _0x19a8d4 + _0x32af27);
  }
  const _0x286a41 = $(_0x19a8d4, 0.004, _0x52bc1e ? _0x89d191 : _0x89d191 * X(), _0x32af27);
  _0x13a5a2.connect(_0x21367a).connect(_0x286a41).connect(G);
  _0x13a5a2.onended = W;
  _0x13a5a2.start(_0x19a8d4, N());
  _0x13a5a2.stop(_0x19a8d4 + _0x32af27 + 0.05);
}
const ne = {
  R: () => {
    Z("square", 1100, 520, 0.07, 0.16);
    te("highpass", 4200, 2800, 2, 0.03, 0.07);
  },
  S: () => {
    Z("sawtooth", 480, 190, 0.14, 0.2);
    te("lowpass", 1100, 380, 1, 0.11, 0.17);
    Z("sine", 120, 48, 0.12, 0.16);
  },
  L: () => {
    Z("sawtooth", 1900, 210, 0.2, 0.17);
    Z("sine", 2800, 1200, 0.08, 0.08);
  },
  H: () => {
    Z("triangle", 440, 1120, 0.13, 0.13);
    Z("sine", 880, 1760, 0.08, 0.06, 0.045);
  },
  F: () => {
    te("lowpass", 760, 240, 1, 0.25, 0.19);
    te("bandpass", 2600, 1200, 3, 0.07, 0.08);
    Z("sine", 86, 42, 0.18, 0.1);
  }
};
function ae(_0x332d11 = 1) {
  const _0x3c4531 = Math.min(2, Math.max(1, _0x332d11));
  te("bandpass", 1900, 1900, 4, 0.07, (0.9 + _0x3c4531 * 0.1) * 0.18);
  Z("square", 210 / _0x3c4531, 140 / _0x3c4531, 0.07, _0x3c4531 * 0.1);
  Z("sine", 90 / _0x3c4531, 46 / _0x3c4531, 0.045, _0x3c4531 * 0.09);
}
function se(_0x7b9f9b) {
  const _0xe8cab = _0x7b9f9b ? 523 : 880;
  const _0x1d197e = _0x7b9f9b ? 392 : 620;
  Z("square", _0xe8cab, _0xe8cab, 0.09, 0.1, 0, true);
  Z("square", _0x1d197e, _0x1d197e, 0.09, 0.1, 0.1, true);
}
function ie() {
  te("bandpass", 400, 1600, 1.5, 0.35, 0.11);
  Z("sine", 60, 120, 0.3, 0.09);
}
function re(_0x335fc2) {
  const _0x2cf9b0 = _0x335fc2 ? 65 : 75;
  Z("sine", _0x2cf9b0, _0x2cf9b0 * 0.55, 0.22, _0x335fc2 ? 0.5 : 0.42, 0, true);
  te("bandpass", 2600, 2600, 6, 0.05, 0.16, 0, true);
  Z("square", 150, 90, 0.08, 0.16, 0, true);
}
function oe() {
  Z("sine", 50, 30, 0.8, 0.4, 0, true);
  te("lowpass", 200, 90, 1, 0.6, 0.2, 0, true);
}
function ce(_0x26af8c = 0) {
  const _0x536323 = Math.max(0, Math.min(1, _0x26af8c));
  const _0x5ddd60 = 58 + _0x536323 * 30;
  Z("sine", _0x5ddd60, _0x5ddd60 * 1.18, 0.28, 0.075, 0, true);
  te("lowpass", 190 + _0x536323 * 90, 110, 1, 0.22, 0.045);
}
function le(_0x3bbaa5) {
  const _0x2f61e7 = [0, 146.8, 174.6, 220][Math.max(1, Math.min(3, _0x3bbaa5))];
  Z("triangle", _0x2f61e7, _0x2f61e7 * 1.5, 0.34, 0.105, 0, true);
  Z("sine", _0x2f61e7 * 0.5, _0x2f61e7 * 0.5, 0.42, 0.11, 0, true);
  Z("sine", _0x2f61e7 * 2, _0x2f61e7 * 2, 0.18, 0.045, 0.075);
}
function ue(_0x53923c, _0xfad674, _0x41b3a5, _0x5f1990) {
  _0x53923c.forEach((_0x530d5e, _0x580a33) => Z("triangle", _0x530d5e, _0x530d5e, _0x41b3a5, _0x5f1990, _0x580a33 * _0xfad674, true));
}
const fe = [{
  kind: "noise",
  filter: ["lowpass", 110, 1],
  base: 0.5,
  lfo: [0.11, 0.25]
}, {
  kind: "osc",
  voicesDef: [["sine", 55], ["sine", 55.6]],
  base: 0.3,
  lfo: [0.07, 0.12]
}, {
  kind: "osc",
  voicesDef: [["sawtooth", 82]],
  filter: ["lowpass", 240, 1],
  base: 0.24,
  lfo: [0.5, 0.2]
}, {
  kind: "osc",
  voicesDef: [["triangle", 164.8], ["sine", 220]],
  base: 0.16,
  lfo: [0.19, 0.08]
}, {
  kind: "noise",
  filter: ["bandpass", 1400, 2],
  base: 0.11,
  lfo: [0.27, 0.07]
}, {
  kind: "osc",
  voicesDef: [["sine", 660], ["sine", 663]],
  base: 0.06,
  lfo: [0.37, 0.035]
}, {
  kind: "osc",
  voicesDef: [["square", 110]],
  filter: ["bandpass", 440, 3],
  base: 0.08,
  lfo: [0.9, 0.06]
}];
function de(_0x57a56f) {
  const _0xfa2594 = U.createGain();
  _0xfa2594.gain.value = _0x57a56f.base;
  const _0x31e0fa = U.createOscillator();
  _0x31e0fa.type = "sine";
  _0x31e0fa.frequency.value = _0x57a56f.lfo[0];
  const _0x11d9ca = U.createGain();
  _0x11d9ca.gain.value = _0x57a56f.lfo[1];
  _0x31e0fa.connect(_0x11d9ca).connect(_0xfa2594.gain);
  _0x31e0fa.start();
  let _0x5239b8 = _0xfa2594;
  if (_0x57a56f.filter) {
    const _0x15225d = U.createBiquadFilter();
    _0x15225d.type = _0x57a56f.filter[0];
    _0x15225d.frequency.value = _0x57a56f.filter[1];
    _0x15225d.Q.value = _0x57a56f.filter[2];
    _0x15225d.connect(_0xfa2594);
    _0x5239b8 = _0x15225d;
  }
  if (_0x57a56f.kind === "noise") {
    const _0x380d54 = U.createBufferSource();
    _0x380d54.buffer = J;
    _0x380d54.loop = true;
    _0x380d54.connect(_0x5239b8);
    _0x380d54.start(0, N());
  } else {
    for (const [_0x5e4279, _0x2f6db9] of _0x57a56f.voicesDef) {
      const _0x14ecd0 = U.createOscillator();
      _0x14ecd0.type = _0x5e4279;
      _0x14ecd0.frequency.value = _0x2f6db9;
      _0x14ecd0.connect(_0x5239b8);
      _0x14ecd0.start();
    }
  }
  const _0x11b296 = U.createGain();
  _0x11b296.gain.value = 0;
  _0xfa2594.connect(_0x11b296).connect(C);
  return {
    level: _0x11b296
  };
}
function pe() {
  let _0x177f09 = 1;
  for (const _0x46c71f of _0x8986f5) {
    if (_0x46c71f.state === "done") {
      _0x177f09++;
    }
  }
  for (const _0x2dd816 of _0xb60776) {
    if (_0x2dd816.state === "done") {
      _0x177f09++;
    }
  }
  return Math.min(_0x177f09, fe.length);
}
function me() {
  if (!U || F) {
    return;
  }
  const _0x5737f6 = pe();
  const _0x2b8ad3 = U.currentTime;
  O.forEach((_0x2a92f3, _0x534b4c) => {
    const _0x86110 = _0x534b4c < _0x5737f6 ? 1 : 0;
    _0x2a92f3.level.gain.cancelScheduledValues(_0x2b8ad3);
    _0x2a92f3.level.gain.setValueAtTime(_0x2a92f3.level.gain.value, _0x2b8ad3);
    _0x2a92f3.level.gain.linearRampToValueAtTime(_0x86110, _0x2b8ad3 + (_0x86110 ? w : b));
  });
}
function he(_0x4eab47) {
  if (!U || F) {
    return;
  }
  const _0x1a76be = U.currentTime;
  C.gain.cancelScheduledValues(_0x1a76be);
  C.gain.setValueAtTime(C.gain.value, _0x1a76be);
  C.gain.linearRampToValueAtTime(v * P * we, _0x1a76be + _0x4eab47);
}
function ge(_0x2e3315) {
  P = _0x2e3315;
  he(0.4);
}
let ve = 0;
let we = 1;
function be(_0x268045) {
  ve = Math.min(1, ve + _0x268045);
}
let ye = null;
let Te = 0;
let qe = 0;
function ke() {
  const _0x4356f2 = window.AudioContext || window.webkitAudioContext;
  if (!_0x4356f2) {
    F = true;
    return;
  }
  U = new _0x4356f2();
  B = U.createGain();
  B.gain.value = h;
  const _0x416213 = U.createDynamicsCompressor();
  B.connect(_0x416213).connect(U.destination);
  G = U.createGain();
  G.gain.value = g;
  G.connect(B);
  C = U.createGain();
  C.gain.value = v * P;
  C.connect(B);
  (function () {
    ye = U.createGain();
    ye.gain.value = 0;
    ye.connect(B);
    const _0x43d3a5 = U.createOscillator();
    _0x43d3a5.type = "sine";
    _0x43d3a5.frequency.value = D;
    const _0x2a23cc = U.createBiquadFilter();
    _0x2a23cc.type = "lowpass";
    _0x2a23cc.frequency.value = D * 2;
    _0x43d3a5.connect(_0x2a23cc).connect(ye);
    _0x43d3a5.start();
  })();
  J = U.createBuffer(1, U.sampleRate, U.sampleRate);
  const _0xcc82a = J.getChannelData(0);
  for (let _0xe16386 = 0; _0xe16386 < _0xcc82a.length; _0xe16386++) {
    _0xcc82a[_0xe16386] = N() * 2 - 1;
  }
  O = fe.map(de);
  me();
}
function Me() {
  if (!F) {
    try {
      if (!U) {
        ke();
      }
      if (!!U && U.state === "suspended" && !K && !document.hidden) {
        U.resume().catch(() => {});
      }
    } catch (_0x3e763f) {
      Q(_0x3e763f);
    }
  }
}
function xe(_0x426239, _0x1b6cc7, _0x59a20e) {
  const _0x5149e4 = _0x426239 === null ? _0x14b08d : _0x14b08d[_0x426239];
  const _0x7ff6f5 = _0x5149e4[_0x1b6cc7];
  _0x5149e4[_0x1b6cc7] = (_0x13fe65, _0x3364a8, _0x38bb90) => {
    _0x7ff6f5(_0x13fe65, _0x3364a8, _0x38bb90);
    if (!F && U) {
      try {
        _0x59a20e(_0x13fe65, _0x3364a8, _0x38bb90);
      } catch (_0x1baa65) {
        Q(_0x1baa65);
      }
    } else if (_0x59a20e === Pe) {
      try {
        _0x59a20e(_0x13fe65);
      } catch (_0x18c3fb) {
        Q(_0x18c3fb);
      }
    }
  };
}
const Se = new Set();
let Ae = 0;
let Ve = 0;
const Re = _0x1b916b(_0x296ebc);
const Le = _0x19684e(_0x296ebc);
const je = {
  grounded: true,
  vy: 0,
  hp: _0x21f857.hp,
  airJumpsLeft: _0x21f857.airJumpsLeft,
  traversalState: "free",
  iframesUntil: 0,
  cornerK: 0,
  cornerState: "idle",
  snap1: false,
  snap2: false
};
const Ee = new Map();
const De = new Map();
let Ue = 0;
let Be = -1000000000;
const Ge = new Map();
let Ce = -1;
let Je = "dormant";
let Oe = 0;
let Ie = false;
let Fe = "dormant";
let Ke = false;
function Pe(_0x1b6333) {
  K = _0x1b6333 === "PAUSED";
  if (U && !F) {
    if (_0x1b6333 !== "PAUSED") {
      if (U.state === "suspended" && !document.hidden) {
        U.resume().catch(() => {});
      }
      ve = 0;
      we = 1;
      Te = 0;
      qe = 0;
      if (ye) {
        ye.gain.cancelScheduledValues(U.currentTime);
        ye.gain.setValueAtTime(0, U.currentTime);
      }
      if (_0x1b6333 === "PLAYING") {
        ge(1);
        me();
        Ee.clear();
        De.clear();
        Se.clear();
        Ue = 0;
        Be = -1000000000;
        Ge.clear();
        Ce = -1;
        je.hp = _0x21f857.hp;
        je.airJumpsLeft = _0x21f857.airJumpsLeft;
        je.grounded = true;
        je.traversalState = "free";
        je.iframesUntil = _0x21f857.iframesUntil;
        je.cornerK = 0;
        je.cornerState = "idle";
      } else if (_0x1b6333 === "SLICE_RETRY") {
        ge(y.retry);
        if (z("hurt", 120)) {
          Z("sawtooth", 240, 50, 0.4, 0.22, 0, true);
        }
      } else if (_0x1b6333 === "GAME_OVER") {
        ge(y.over);
        ue([392, 311, 233, 155], 0.16, 0.22, 0.14);
      } else if (_0x1b6333 === "VICTORY") {
        ge(y.victory);
        if (Je === "complete") {
          ue([659, 784, 1047], 0.15, 0.24, 0.085);
        } else {
          ue([523, 659, 784, 1047], 0.12, 0.18, 0.14);
        }
      }
    } else {
      U.suspend().catch(() => {});
    }
  }
}
if (m) {
  xe("player", "sync", function () {
    (function () {
      if (!U || F) {
        return;
      }
      if (!z("heatTick", L)) {
        return;
      }
      const _0x269fe4 = _();
      const _0xda5a56 = Math.max(0, _0x269fe4 - (Y.heatClockAt ?? _0x269fe4)) / 1000;
      Y.heatClockAt = _0x269fe4;
      ve = Math.max(0, ve - V * _0xda5a56);
      const _0x197782 = 1 - R * ve;
      if (Math.abs(_0x197782 - we) > 0.015) {
        we = _0x197782;
        he(0.25);
      }
    })();
    (function () {
      if (!U || F) {
        return;
      }
      const _0x37cae1 = _0x296ebc.juice.crush;
      const _0x1dd4f8 = _0x5dbc88(_0x21f857.x - _0x21f857.hw - _0x3108d5(), _0x37cae1);
      qe = _0x1dd4f8;
      const _0x8e5871 = U.currentTime;
      ye.gain.cancelScheduledValues(_0x8e5871);
      ye.gain.setValueAtTime(ye.gain.value, _0x8e5871);
      ye.gain.linearRampToValueAtTime(E * _0x1dd4f8, _0x8e5871 + 0.2);
      if (_0x1dd4f8 <= 0) {
        Te = 0;
        return;
      }
      const _0x2e653c = _0x30bc2d(_0x1dd4f8, _(), _0x37cae1);
      if (_0x2e653c >= 0.5 && Te < 0.5) {
        const _0xd38ce7 = 200 + _0x1dd4f8 * 500;
        Z("sine", _0xd38ce7, _0xd38ce7 * 0.82, 0.09, 0.05 + _0x1dd4f8 * 0.09, 0, true);
      }
      Te = _0x2e653c;
    })();
    const _0x241926 = _0x21f857.hp < je.hp;
    if (_0x241926 && z("hurt", 120)) {
      Z("sawtooth", 320, 80, 0.28, 0.26, 0, true);
      te("bandpass", 700, 350, 2, 0.2, 0.16, 0, true);
      Z("sine", 150, 40, 0.22, 0.24, 0, true);
    }
    if (!_0x241926 && _0x21f857.iframesUntil <= je.iframesUntil) {
      if ((je.traversalState === "ledge" || je.traversalState === "wall") && _0x21f857.traversalState === "free" && _0x21f857.vy > S) {
        Z("sine", 180, 720, 0.16, 0.14);
        te("bandpass", 1200, 2200, 2, 0.12, 0.07);
      } else if (je.grounded && !_0x21f857.grounded && _0x21f857.vy > S) {
        Z("sine", 240, 480, 0.1, 0.11);
      } else if (_0x21f857.airJumpsLeft < je.airJumpsLeft && !_0x21f857.grounded) {
        Z("sine", 300, 640, 0.1, 0.11);
      }
    }
    const _0x46ecaa = _0x440f11();
    if (_0x46ecaa && (_0x46ecaa.k === je.cornerK && _0x46ecaa.state === je.cornerState || (_0x46ecaa.state === "gate" && se(true), _0x46ecaa.state === "turning" && (ie(), je.snap1 = false, je.snap2 = false), je.cornerK = _0x46ecaa.k, je.cornerState = _0x46ecaa.state), _0x46ecaa.state === "turning")) {
      const _0xf0df1e = _0xc3c86a - _0x46ecaa.tStart;
      if (!je.snap1 && _0xf0df1e >= Re.t2) {
        je.snap1 = true;
        re(false);
      }
      if (!je.snap2 && _0xf0df1e >= Re.t4) {
        je.snap2 = true;
        re(true);
      }
    }
    je.grounded = _0x21f857.grounded;
    je.vy = _0x21f857.vy;
    je.hp = _0x21f857.hp;
    je.airJumpsLeft = _0x21f857.airJumpsLeft;
    je.traversalState = _0x21f857.traversalState;
    je.iframesUntil = _0x21f857.iframesUntil;
  });
  xe("hostiles", "spawned", function (_0x52f82f) {
    Ee.set(_0x52f82f.id, _0x52f82f.hp);
    De.set(_0x52f82f.id, _0x52f82f.state);
  });
  xe("hostiles", "sync", function (_0x51ea19) {
    const _0x3a868d = Ee.get(_0x51ea19.id);
    if (!Se.delete(_0x51ea19.id) && _0x3a868d !== undefined && _0x51ea19.hp < _0x3a868d && z("hit", k)) {
      ae(_0x3a868d - _0x51ea19.hp);
      be(j.hit);
    }
    Ee.set(_0x51ea19.id, _0x51ea19.hp);
    if (_0x51ea19.kind === "hound" && De.get(_0x51ea19.id) !== _0x51ea19.state) {
      if (_0x51ea19.state === "tell" && z("tell", x)) {
        te("bandpass", 300, 180, 2, 0.12, 0.13);
      } else if (_0x51ea19.state === "charge" && z("charge", x)) {
        te("bandpass", 500, 900, 1.5, 0.16, 0.12);
        Z("sawtooth", 90, 130, 0.16, 0.08);
      }
      De.set(_0x51ea19.id, _0x51ea19.state);
    }
  });
  xe("hostiles", "removed", function (_0x23e65e, _0x4f8558) {
    Ee.delete(_0x23e65e.id);
    De.delete(_0x23e65e.id);
    Se.delete(_0x23e65e.id);
    if (_0x4f8558) {
      Ue = _0xc3c86a - Be <= 780 ? Math.min(5, Ue + 1) : 1;
      Be = _0xc3c86a;
      if (z("kill", k)) {
        (function (_0x50c7a6, _0x2fd1bf = false) {
          if (_0x50c7a6 === "wasp") {
            te("highpass", 4300, 1700, 3.2, 0.09, 0.16);
            Z("triangle", _0x2fd1bf ? 760 : 610, 92, 0.22, 0.18);
            te("bandpass", 820, 240, 1.5, 0.16, 0.13);
          } else if (_0x50c7a6 === "hound") {
            te("bandpass", 980, 210, 1.8, 0.2, 0.23);
            Z("square", _0x2fd1bf ? 132 : 112, 38, 0.24, 0.24);
            te("lowpass", 420, 120, 1, 0.25, 0.19);
          } else if (_0x50c7a6 === "polyp") {
            te("bandpass", 1450, 190, 1.3, 0.26, 0.19);
            Z("sine", _0x2fd1bf ? 226 : 184, 34, 0.24, 0.2);
            te("lowpass", 540, 100, 0.8, 0.2, 0.15);
          } else if (_0x50c7a6 === "mortar") {
            te("lowpass", 1040, 130, 1.1, 0.24, 0.22);
            Z("sine", _0x2fd1bf ? 104 : 86, 29, 0.28, 0.24);
            te("bandpass", 2600, 760, 4, 0.08, 0.12, 0.025);
          } else if (_0x50c7a6 === "carrier") {
            te("bandpass", 2400, 360, 1.4, 0.27, 0.21);
            Z("sine", _0x2fd1bf ? 124 : 102, 25, 0.34, 0.27);
            Z("square", 285, 58, 0.19, 0.14, 0.025);
          } else {
            te("highpass", 3800, 2100, 3, 0.045, 0.17);
            Z("square", 145, 46, 0.23, 0.3);
            te("lowpass", 620, 160, 1, 0.22, 0.25);
          }
        })(_0x23e65e.kind, !!_0x23e65e.genome?.mutated);
        be(j.kill);
      }
      if (Ue >= 3 && z("chainBreak", 600)) {
        (function (_0x31b761) {
          const _0x49df8c = 1 + Math.min(2, _0x31b761 - 3) * 0.12;
          Z("sine", _0x49df8c * 82, 28, 0.38, 0.34);
          te("bandpass", 2800, 480, 1.4, 0.2, 0.2);
          Z("square", _0x49df8c * 220, 70, 0.16, 0.14, 0.025);
        })(Ue);
      }
    }
  });
  xe("capsules", "removed", function (_0x2d9eed) {
    if (_0x2d9eed.kind !== "letter") {
      if (_0x2d9eed.mode !== "pop" || !(_0x2d9eed.y < _0x296ebc.edges.killY) && !(_0xc3c86a > _0x2d9eed.dieAt)) {
        if (_0xc3c86a >= _0x2d9eed.noCatchUntil && _0x52bb55(_0x2d9eed.x, _0x2d9eed.y, _0x296ebc.capsules.pickupRadius) && z("pickup", 80)) {
          if (_0x2d9eed.kind === "mod") {
            Z("square", 550, 550, 0.07, 0.12);
            Z("square", 825, 825, 0.07, 0.12, 0.08);
            Z("square", 1100, 1100, 0.1, 0.12, 0.16);
          } else {
            Z("square", 660, 660, 0.06, 0.13);
            Z("square", 990, 990, 0.09, 0.13, 0.07);
          }
        }
      }
    }
  });
  xe("loot", "acquired", function (_0x24c24c, _0x1f4f9d, _0x460328) {
    if (z("loot", 80)) {
      (function (_0x3f7641, _0x121ddf) {
        const _0x55740f = Math.max(1, Math.min(3, _0x3f7641?.tier || 1));
        if (_0x121ddf?.recatch) {
          Z("square", 510, 760, 0.12, 0.12, 0, true);
          Z("sine", 108, 62, 0.16, 0.1, 0, true);
        } else if (_0x55740f === 1) {
          Z("square", 660, 660, 0.06, 0.13);
          Z("square", 990, 990, 0.09, 0.13, 0.07);
        } else if (_0x55740f === 2) {
          Z("sine", 82, 48, 0.2, 0.13, 0, true);
          Z("triangle", 523, 523, 0.09, 0.11, 0.015);
          Z("triangle", 784, 784, 0.1, 0.11, 0.09);
          Z("triangle", 1047, 1047, 0.13, 0.1, 0.17);
        } else {
          te("lowpass", 520, 140, 1.2, 0.18, 0.16, 0, true);
          Z("sine", 72, 34, 0.34, 0.19, 0, true);
          Z("triangle", 392, 392, 0.12, 0.11, 0.035, true);
          Z("triangle", 587, 587, 0.14, 0.11, 0.12, true);
          Z("triangle", 784, 784, 0.18, 0.12, 0.21, true);
          ee("sine", 196, 198, 0.62, 0.032, 0.08, 0.09);
          ee("sine", 294, 296, 0.58, 0.026, 0.11, 0.1);
        }
      })(_0x24c24c, _0x460328);
    }
  });
  xe("bullets", "slotSpawned", (_0x65b771, _0x18e64a) => {
    if (ne[_0x18e64a] && z("fire:" + _0x18e64a, q)) {
      ne[_0x18e64a]();
      be(j.fire);
    }
  });
  (function (_0x4fa402) {
    const _0x3e1452 = _0x14b08d.bullets.hostileImpact;
    _0x14b08d.bullets.hostileImpact = (_0x316bcb, _0x4261f5, _0x453a0d, _0x2f0bb6, _0x2082f3, _0x3937ab, _0x3f6924, _0x2326aa, _0x5a537a, _0x30d361) => {
      _0x3e1452(_0x316bcb, _0x4261f5, _0x453a0d, _0x2f0bb6, _0x2082f3, _0x3937ab, _0x3f6924, _0x2326aa, _0x5a537a, _0x30d361);
      if (!F && U) {
        try {
          _0x4fa402(_0x316bcb, _0x4261f5, _0x453a0d, _0x2f0bb6, _0x2082f3, _0x3937ab, _0x3f6924, _0x2326aa, _0x5a537a, _0x30d361);
        } catch (_0x28c9cd) {
          Q(_0x28c9cd);
        }
      }
    };
  })(function (_0x22dd4a, _0x255987, _0x1929ba, _0x6912e2, _0x24414f, _0x3729bb, _0x593ab2, _0x399090, _0x23f6fa, _0x2eb516) {
    if (!_0x23f6fa) {
      Ve++;
      if (z("block", 42)) {
        _0x5d87fe = _0x399090;
        if (_0x5d87fe === "polyp" || _0x5d87fe === "warden") {
          te("bandpass", 2500, 920, 5, 0.055, 0.14);
          Z("triangle", 720, 330, 0.085, 0.11);
        } else {
          te("highpass", 4600, 2300, 2.5, 0.038, 0.11);
          Z("square", 1260, 690, 0.065, 0.09);
        }
      }
      return;
    }
    var _0x5d87fe;
    Ae++;
    if (!_0x2eb516) {
      Se.add(_0x593ab2);
      if (z("hit", k)) {
        ae(1);
        be(j.hit);
      }
    }
  });
  xe("bullets", "volatileImpact", function (_0x3ad998, _0xef1407, _0xb727b4) {
    if (z("volatile:impact", 105)) {
      (function (_0x7683a3 = 1) {
        const _0x7139dd = Math.max(1, Math.min(3, Number(_0x7683a3) || 1));
        te("lowpass", 980 + _0x7139dd * 120, 180, 1.25, 0.17, 0.18 + _0x7139dd * 0.025);
        Z("sine", 104 - _0x7139dd * 9, 31, 0.25 + _0x7139dd * 0.025, 0.19 + _0x7139dd * 0.035);
        te("bandpass", 2600, 720, 2.1, 0.105, 0.09 + _0x7139dd * 0.018, 0.018);
      })(_0xb727b4);
      be(0.2 + Math.min(3, Number(_0xb727b4) || 1) * 0.05);
    }
  });
  xe("mods", "lanceTelegraph", function (_0x20add4) {
    if (z("warn", M)) {
      se(false);
    }
    if (_0xc3c86a >= _0x20add4.at && Ce !== _0x20add4.at) {
      Ce = _0x20add4.at;
      Z("sine", 65, 24, 0.55, 0.5, 0, true);
      te("bandpass", 2400, 700, 1.2, 0.3, 0.24, 0, true);
      Z("sawtooth", 200, 45, 0.4, 0.22, 0, true);
      te("lowpass", 260, 90, 1, 0.5, 0.24, 0, true);
      be(j.lance);
    }
  });
  xe("finale", "started", function (_0x2ad93f) {
    Je = _0x2ad93f?.phase || "arming";
    Oe = _0x2ad93f?.wave || 0;
    Ie = false;
    Fe = _0x2ad93f?.warden?.attack || "dormant";
    Ke = !!_0x2ad93f?.warden?.defeated;
    if (z("finale:arm", 520)) {
      ce(_0x2ad93f?.progress || 0);
    }
  });
  xe("finale", "sync", function (_0x5a0f03) {
    if (!_0x5a0f03) {
      return;
    }
    const _0x17da96 = _0x5a0f03.warden?.attack || "dormant";
    var _0x95869a;
    if (_0x5a0f03.warden?.present && _0x17da96 !== Fe && z("warden:" + _0x17da96, 120)) {
      if ((_0x95869a = _0x17da96) === "sweepTell") {
        Z("sawtooth", 82, 310, 0.42, 0.11, 0, true);
        te("bandpass", 520, 1300, 2.5, 0.26, 0.08, 0.04, true);
      } else if (_0x95869a === "sweepFire") {
        te("bandpass", 2100, 620, 1.3, 0.34, 0.18, 0, true);
        Z("square", 190, 72, 0.3, 0.15, 0, true);
      } else if (_0x95869a === "barrageTell") {
        Z("square", 294, 294, 0.07, 0.1, 0, true);
        Z("square", 220, 220, 0.07, 0.11, 0.11, true);
        Z("square", 147, 147, 0.1, 0.13, 0.22, true);
      } else if (_0x95869a === "barrageBurst") {
        te("lowpass", 520, 92, 1.1, 0.34, 0.2, 0, true);
        Z("sine", 74, 31, 0.36, 0.25, 0, true);
      } else if (_0x95869a === "exposed") {
        Z("triangle", 392, 392, 0.1, 0.11, 0, true);
        Z("triangle", 588, 588, 0.12, 0.11, 0.08, true);
        Z("sine", 784, 792, 0.25, 0.08, 0.15, true);
      }
    }
    if (_0x5a0f03.warden?.defeated && !Ke) {
      te("bandpass", 2600, 210, 1, 0.48, 0.28, 0, true);
      te("lowpass", 360, 58, 1.2, 0.68, 0.32, 0.02, true);
      Z("sine", 66, 22, 0.78, 0.46, 0, true);
      Z("sawtooth", 170, 38, 0.54, 0.16, 0.04, true);
      be(0.78);
    }
    Fe = _0x17da96;
    Ke = !!_0x5a0f03.warden?.defeated;
    if (_0x5a0f03.phase === "arming" && z("finale:arm", 640)) {
      ce(_0x5a0f03.progress);
    }
    if (_0x5a0f03.phase === "defend") {
      if (_0x5a0f03.wave > Oe) {
        for (let _0x48c29c = Oe + 1; _0x48c29c <= _0x5a0f03.wave; _0x48c29c++) {
          le(_0x48c29c);
        }
      } else if (z("finale:hold", 1080)) {
        (function (_0x549ee6 = 0) {
          const _0x391362 = 82 + Math.max(0, Math.min(1, _0x549ee6)) * 55;
          Z("sine", _0x391362, _0x391362 * 1.06, 0.18, 0.045, 0, true);
        })(_0x5a0f03.progress);
      }
    }
    Oe = Math.max(Oe, _0x5a0f03.wave || 0);
    Je = _0x5a0f03.phase;
  });
  xe("finale", "transmit", function (_0x5679d7) {
    if (!Ie) {
      Ie = true;
      Je = _0x5679d7?.phase || "transmit";
      Z("sine", 58, 24, 0.72, 0.43, 0, true);
      te("lowpass", 260, 72, 1, 0.62, 0.2, 0, true);
      Z("sawtooth", 96, 760, 1.05, 0.12, 0.035, true);
      ee("sine", 196, 198, 1.65, 0.052, 0.08, 0.18);
      ee("sine", 294, 296, 1.62, 0.043, 0.1, 0.2);
      ee("triangle", 392, 396, 1.58, 0.034, 0.12, 0.22);
      ee("sine", 588, 592, 1.5, 0.025, 0.15, 0.24);
      be(0.9);
    }
  });
  xe("finale", "reset", function () {
    Je = "dormant";
    Oe = 0;
    Ie = false;
    Fe = "dormant";
    Ke = false;
    delete Y["finale:arm"];
    delete Y["finale:hold"];
  });
  xe("corner", "finished", function () {
    te("lowpass", 800, 400, 1, 0.4, 0.05);
    me();
  });
  xe("level", "faceRevealed", function () {
    oe();
  });
  xe("transform", "armed", function () {
    se(true);
  });
  xe("transform", "started", function (_0x2fb1df) {
    Ge.set(_0x2fb1df.index, [false, false]);
    ie();
  });
  xe("transform", "ritual", function (_0x236005, _0x50807b) {
    const _0x45b2ce = Ge.get(_0x236005.index) || [false, false];
    if (!_0x45b2ce[0] && _0x50807b >= Le.t2) {
      _0x45b2ce[0] = true;
      re(false);
    }
    if (!_0x45b2ce[1] && _0x50807b >= Le.t4) {
      _0x45b2ce[1] = true;
      re(true);
    }
    Ge.set(_0x236005.index, _0x45b2ce);
  });
  xe("transform", "finished", function () {
    oe();
    me();
  });
  xe("transform", "reset", function () {
    Ge.clear();
    me();
  });
  xe(null, "stateScreen", Pe);
  addEventListener("keydown", Me);
  addEventListener("pointerdown", Me);
  document.addEventListener("visibilitychange", () => {
    if (U && !F) {
      if (document.hidden) {
        U.suspend().catch(() => {});
      } else if (!K) {
        U.resume().catch(() => {});
      }
    }
  });
}
export function audioSnapshot() {
  return {
    enabled: m,
    unlocked: !!U,
    contextState: U ? U.state : "none",
    dead: F,
    layers: U ? pe() : 0,
    voices: I,
    maxVoices: T,
    combatDuck: we,
    heat: ve,
    pressure: qe,
    finale: {
      phase: Je,
      wave: Oe,
      transmitPlayed: Ie
    },
    contact: {
      hits: Ae,
      blocks: Ve,
      pendingHitBaselines: Se.size
    }
  };
}