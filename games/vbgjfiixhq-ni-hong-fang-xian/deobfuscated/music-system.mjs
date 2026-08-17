import { BgmController as _0x29b0bb } from "./bgm-controller.mjs?v=music-assets-2";
const t = "neon-defense-music-muted";
const r = ["scene-01-megastructure-h4", "scene-02-underground-mercenary-bar", "scene-03-neon-market-braindance-club", "scene-04-megatower-cloud-club", "scene-05-corporate-hotel-siege", "scene-06-corporate-plaza-ai-core"];
const n = {
  enforcer: "enforcer_zero",
  eve: "eve_9"
};
let a;
let o = 0;
let s = false;
let c = localStorage.getItem(t) === "true";
let i = Promise.resolve();
function u() {
  const _0x1ce1e8 = document.querySelector("#music-toggle");
  if (_0x1ce1e8) {
    _0x1ce1e8.dataset.muted = String(c);
    _0x1ce1e8.setAttribute("aria-pressed", String(!c));
    _0x1ce1e8.setAttribute("aria-label", c ? "开启背景音乐" : "关闭背景音乐");
    _0x1ce1e8.title = c ? "开启背景音乐" : "关闭背景音乐";
  }
}
function d() {
  const _0x375988 = document.querySelector("#music-toggle");
  if (_0x375988 && a) {
    _0x375988.dataset.role = a.activeRole || "idle";
    _0x375988.dataset.track = a.bossTrack?.id || a.mapTrack?.id || "none";
    _0x375988.dataset.mapIndex = String(o);
  }
}
function l(_0x5495de) {
  i = i.catch(() => {}).then(_0x5495de).then(_0x1f71c1 => {
    d();
    return _0x1f71c1;
  }).catch(_0x1b7375 => {
    d();
    if (_0x1b7375.name !== "NotAllowedError" && _0x1b7375.name !== "AbortError") {
      console.warn("Background music playback failed.", _0x1b7375);
    }
  });
  return i;
}
function m(_0x51b509) {
  c = Boolean(_0x51b509);
  localStorage.setItem(t, String(c));
  u();
  if (a) {
    return l(() => a.setMuted(c));
  } else {
    return Promise.resolve();
  }
}
a = await _0x29b0bb.fromManifest("./music-manifest.json");
a.muted = c;
u();
d();
window.addEventListener("voice:start", _0xca717c => {
  if (s) {
    l(() => a.setVoiceActive(_0xca717c.detail?.classId || "tactical_feedback", true));
  }
});
window.addEventListener("voice:end", _0x139034 => {
  if (s) {
    l(() => a.setVoiceActive(_0x139034.detail?.classId || "tactical_feedback", false));
  }
});
window.NeonBGM = {
  start: function (_0x2522b5 = o) {
    s = true;
    o = Math.max(0, Math.min(r.length - 1, Number(_0x2522b5) || 0));
    return l(async () => {
      await a.setMuted(c);
      await a.enterMap(r[o]);
    });
  },
  playMap: function (_0x24ee2b) {
    o = Math.max(0, Math.min(r.length - 1, Number(_0x24ee2b) || 0));
    if (a && s) {
      return l(async () => {
        await a.exitBoss({
          resumeMap: false
        });
        await a.enterMap(r[o]);
      });
    } else {
      return Promise.resolve();
    }
  },
  enterBoss: function (_0x13f482) {
    const _0x4c10d4 = n[_0x13f482] || _0x13f482;
    if (a && s && _0x4c10d4) {
      return l(() => a.enterBoss(_0x4c10d4));
    } else {
      return Promise.resolve();
    }
  },
  exitBoss: function ({
    resumeMap: _0x38af97 = true
  } = {}) {
    if (a && s) {
      return l(() => a.exitBoss({
        resumeMap: _0x38af97
      }));
    } else {
      return Promise.resolve();
    }
  },
  setMuted: m,
  toggle: () => m(!c),
  get muted() {
    return c;
  },
  get activeRole() {
    return a.activeRole;
  },
  get currentTrackId() {
    return a.bossTrack?.id || a.mapTrack?.id || null;
  },
  get currentMapIndex() {
    return o;
  },
  get ready() {
    return true;
  }
};
window.dispatchEvent(new CustomEvent("neon:bgm-ready"));