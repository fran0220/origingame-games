const t = {
  build: "assets/audio/sfx-1784622579579.mp3",
  archer: "assets/audio/sfx-1784622579434.mp3",
  mage: "assets/audio/sfx-1784622579483.mp3",
  frost: "assets/audio/sfx-1784622695163.mp3",
  hit: "assets/audio/sfx-1784622695149.mp3",
  kill: "assets/audio/sfx-kill.mp3",
  leak: "assets/audio/sfx-leak.mp3",
  upgrade: "assets/audio/sfx-upgrade.mp3",
  wave: "assets/audio/sfx-1784622695654.mp3",
  win: "assets/audio/sfx-1784622695634.mp3",
  lose: "assets/audio/sfx-1784622695576.mp3"
};
const e = "assets/audio/music-1784622724456.mp3";
const s = new Map();
let o = null;
let a = false;
let u = false;
let n = 0.85;
function c(_0x4a31a2, _0x2e0e4f = 1) {
  const _0x5dc9aa = new Audio(_0x4a31a2);
  _0x5dc9aa.preload = "auto";
  _0x5dc9aa.volume = Math.min(1, _0x2e0e4f * n);
  return _0x5dc9aa;
}
function i(_0xa17629, _0x2c88cc, _0x449555 = 4) {
  let _0x3fc238 = s.get(_0xa17629);
  if (!_0x3fc238) {
    _0x3fc238 = [];
    for (let _0x16adaf = 0; _0x16adaf < _0x449555; _0x16adaf++) {
      _0x3fc238.push(c(_0x2c88cc, 0.9));
    }
    s.set(_0xa17629, _0x3fc238);
  }
  return _0x3fc238;
}
export function unlockAudio() {
  if (!a) {
    a = true;
    for (const [_0x338df2, _0x81f480] of Object.entries(t)) {
      i(_0x338df2, _0x81f480, _0x338df2 === "hit" || _0x338df2 === "archer" ? 6 : 3);
    }
    if (!o) {
      o = c(e, 0.28);
      o.loop = true;
      o.name = "BGM";
    }
    try {
      const _0x1b0934 = o;
      if (_0x1b0934) {
        _0x1b0934.volume = 0;
        const _0xd9fb4 = _0x1b0934.play();
        if (_0xd9fb4 && typeof _0xd9fb4.then == "function") {
          _0xd9fb4.then(() => {
            _0x1b0934.pause();
            _0x1b0934.currentTime = 0;
            _0x1b0934.volume = n * 0.28;
          }).catch(() => {});
        }
      }
    } catch {}
  }
}
export function playSfx(_0x3b0b47, _0x2712d4 = 1) {
  if (u) {
    return;
  }
  const _0x44c4a0 = t[_0x3b0b47];
  if (!_0x44c4a0) {
    return;
  }
  unlockAudio();
  const _0xf6c849 = i(_0x3b0b47, _0x44c4a0);
  let _0x16a29d = _0xf6c849.find(_0x3c8d74 => _0x3c8d74.paused || _0x3c8d74.ended);
  _0x16a29d ||= _0xf6c849[0];
  try {
    _0x16a29d.pause();
    _0x16a29d.currentTime = 0;
    _0x16a29d.volume = Math.min(1, _0x2712d4 * 0.9 * n);
    const _0x3ae6b7 = _0x16a29d.play();
    if (_0x3ae6b7 && typeof _0x3ae6b7.catch == "function") {
      _0x3ae6b7.catch(() => {});
    }
  } catch {}
}
export function playBgm() {
  if (!u && (unlockAudio(), o)) {
    try {
      o.volume = n * 0.28;
      const _0x32f30f = o.play();
      if (_0x32f30f && typeof _0x32f30f.catch == "function") {
        _0x32f30f.catch(() => {});
      }
    } catch {}
  }
}
export function stopBgm() {
  if (o) {
    try {
      o.pause();
      o.currentTime = 0;
    } catch {}
  }
}
export function setMuted(_0x56681b) {
  u = !!_0x56681b;
  if (u) {
    stopBgm();
  } else {
    playBgm();
  }
}
export function isMuted() {
  return u;
}
export function playTowerShot(_0x403226) {
  if (_0x403226 === "mage") {
    playSfx("mage", 0.85);
  } else if (_0x403226 === "frost") {
    playSfx("frost", 0.85);
  } else {
    playSfx("archer", 0.75);
  }
}
export { t as SFX, e as BGM_PATH };