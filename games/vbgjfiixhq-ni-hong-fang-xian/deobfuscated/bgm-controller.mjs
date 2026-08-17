const s = (_0x1a5add, _0x4ac2ad, _0x4c68ff, _0x9f66cb = false) => new Promise(_0x20a8e3 => {
  const _0x29dee2 = _0x1a5add.volume;
  const _0x4bdd47 = Math.max(0, _0x4c68ff * 1000);
  if (_0x4bdd47 === 0) {
    _0x1a5add.volume = _0x4ac2ad;
    if (_0x9f66cb) {
      _0x1a5add.pause();
    }
    _0x20a8e3();
    return;
  }
  const _0x76807d = performance.now();
  const _0x4fdfc8 = _0x833cb4 => {
    const _0x4acfde = Math.min(1, Math.max(0, (_0x833cb4 - _0x76807d) / _0x4bdd47));
    _0x1a5add.volume = _0x29dee2 + (_0x4ac2ad - _0x29dee2) * _0x4acfde;
    if (_0x4acfde < 1) {
      requestAnimationFrame(_0x4fdfc8);
    } else {
      if (_0x9f66cb) {
        _0x1a5add.pause();
      }
      _0x20a8e3();
    }
  };
  requestAnimationFrame(_0x4fdfc8);
});
export class BgmController {
  static async fromManifest(_0xdf1e10, _0x317ad1 = {}) {
    const _0x1525b6 = await fetch(_0xdf1e10, {
      cache: "no-store"
    });
    if (!_0x1525b6.ok) {
      throw new Error("BGM manifest request failed: " + _0x1525b6.status);
    }
    const _0x970058 = await _0x1525b6.json();
    const _0xcfa850 = new URL(_0xdf1e10, window.location.href);
    const _0x3bc5b6 = new URL(_0x970058.audioRoot.replace(/\/$/, "") + "/", _0xcfa850).toString();
    return new BgmController(_0x970058, {
      ..._0x317ad1,
      audioRoot: _0x3bc5b6
    });
  }
  constructor(_0x391e3f, {
    audioRoot: _0x4efa3f = "./tracks/",
    createAudio: _0x39fb7a = _0x32d57e => new Audio(_0x32d57e)
  } = {}) {
    this.manifest = _0x391e3f;
    this.audioRoot = _0x4efa3f.endsWith("/") ? _0x4efa3f : _0x4efa3f + "/";
    this.createAudio = _0x39fb7a;
    this.mapAudio = null;
    this.mapTrack = null;
    this.bossAudio = null;
    this.bossTrack = null;
    this.mapResumeTime = 0;
    this.voiceClass = null;
    this.muted = false;
    this.boundEvents = [];
  }
  get activeRole() {
    if (this.bossAudio) {
      return "boss";
    } else if (this.mapAudio) {
      return "map";
    } else {
      return null;
    }
  }
  findTrack(_0x5cdf6a) {
    const _0x21b7a8 = this.manifest.tracks.find(_0x46648e => _0x46648e.id === _0x5cdf6a);
    if (!_0x21b7a8) {
      throw new Error("Unknown BGM track: " + _0x5cdf6a);
    }
    return _0x21b7a8;
  }
  createTrackAudio(_0xf6c9b8, _0x499a52 = 0) {
    const _0x3ef0c3 = new URL(this.audioRoot, window.location.href);
    const _0x3cc7d4 = new URL(_0xf6c9b8.file, _0x3ef0c3);
    _0x3cc7d4.searchParams.set("v", "music-" + (this.manifest.version || 1));
    const _0x1720a7 = this.createAudio(_0x3cc7d4.toString());
    _0x1720a7.loop = true;
    _0x1720a7.preload = "auto";
    _0x1720a7.volume = _0x499a52;
    return _0x1720a7;
  }
  roleGain(_0x1b1b63) {
    const _0x5e8117 = this.manifest.playback.buses[_0x1b1b63];
    const _0x2b928a = this.voiceClass ? this.manifest.playback.ducking[this.voiceClass] : null;
    _0x35d40c = _0x5e8117.gainDb - (_0x2b928a?.gainReductionDb || 0);
    return Math.min(1, Math.max(0, 10 ** (_0x35d40c / 20)));
    var _0x35d40c;
  }
  async enterMap(_0x44aca8) {
    const _0x5ee45b = this.manifest.mapMusic[_0x44aca8];
    if (!_0x5ee45b) {
      throw new Error("No map music configured for: " + _0x44aca8);
    }
    const _0x12b521 = this.findTrack(_0x5ee45b);
    if (this.mapTrack?.id !== _0x12b521.id) {
      if (this.mapAudio) {
        this.mapAudio.pause();
        this.mapAudio.src = "";
      }
      this.mapTrack = _0x12b521;
      this.mapAudio = this.createTrackAudio(_0x12b521);
      this.mapResumeTime = 0;
      if (!this.bossAudio && !this.muted) {
        await this.mapAudio.play();
        await s(this.mapAudio, this.roleGain("map"), this.manifest.playback.buses.map.fadeInSec);
      }
    } else if (!this.bossAudio && !this.muted && !!this.mapAudio.paused) {
      await this.mapAudio.play();
    }
  }
  async enterBoss(_0x5de792) {
    const _0x474a9b = this.manifest.bossMusic[_0x5de792];
    if (!_0x474a9b) {
      throw new Error("No boss music configured for: " + _0x5de792);
    }
    const _0x41908b = this.findTrack(_0x474a9b);
    if (this.bossTrack?.id === _0x41908b.id && this.bossAudio) {
      return;
    }
    if (this.bossAudio) {
      await this.exitBoss({
        resumeMap: false
      });
    }
    const _0x55c802 = this.manifest.playback.buses.boss;
    if (this.mapAudio) {
      this.mapResumeTime = this.mapAudio.currentTime;
    }
    this.bossTrack = _0x41908b;
    this.bossAudio = this.createTrackAudio(_0x41908b);
    if (this.muted) {
      if (this.mapAudio && !this.mapAudio.paused) {
        this.mapAudio.pause();
      }
      return;
    }
    await this.bossAudio.play();
    const _0x4d8c36 = [s(this.bossAudio, this.roleGain("boss"), _0x55c802.enterSec)];
    if (this.mapAudio && !this.mapAudio.paused) {
      _0x4d8c36.push(s(this.mapAudio, 0, _0x55c802.enterSec, true));
    }
    await Promise.all(_0x4d8c36);
  }
  async exitBoss({
    resumeMap: _0x28679a = true
  } = {}) {
    if (!this.bossAudio) {
      return;
    }
    const _0x3c0941 = this.bossAudio;
    const _0x320f32 = this.manifest.playback.buses.boss;
    this.bossAudio = null;
    this.bossTrack = null;
    await s(_0x3c0941, 0, _0x320f32.exitSec, true);
    _0x3c0941.src = "";
    if (_0x28679a && this.mapAudio && !this.muted) {
      this.mapAudio.currentTime = Math.min(this.mapResumeTime, Math.max(0, this.mapAudio.duration || this.mapResumeTime));
      this.mapAudio.volume = 0;
      await this.mapAudio.play();
      await s(this.mapAudio, this.roleGain("map"), this.manifest.playback.buses.map.fadeInSec);
    }
  }
  async setVoiceActive(_0x496a33, _0x36659e) {
    this.voiceClass = _0x36659e ? _0x496a33 : null;
    const _0x2f7983 = this.manifest.playback.ducking[_0x496a33];
    const _0x4fb04f = this.bossAudio || this.mapAudio;
    if (_0x4fb04f && _0x2f7983) {
      await s(_0x4fb04f, this.roleGain(this.bossAudio ? "boss" : "map"), _0x36659e ? _0x2f7983.attackSec : _0x2f7983.releaseSec);
    }
  }
  async setMuted(_0x594745) {
    this.muted = Boolean(_0x594745);
    const _0x525994 = this.bossAudio || this.mapAudio;
    if (_0x525994) {
      if (this.muted) {
        _0x525994.pause();
        _0x525994.volume = 0;
        return;
      }
      await _0x525994.play();
      await s(_0x525994, this.roleGain(this.bossAudio ? "boss" : "map"), 0.25);
    }
  }
  bindEvents(_0x5087ed = window) {
    const _0x3a036f = [["map:enter", _0x33d134 => this.enterMap(_0x33d134.detail.sceneId)], ["boss:enter", _0x2cafd => this.enterBoss(_0x2cafd.detail.bossId)], ["boss:exit", () => this.exitBoss()], ["voice:start", _0x347702 => this.setVoiceActive(_0x347702.detail.classId, true)], ["voice:end", _0x25df7e => this.setVoiceActive(_0x25df7e.detail.classId, false)]];
    _0x3a036f.forEach(([_0x4997e5, _0xc21545]) => _0x5087ed.addEventListener(_0x4997e5, _0xc21545));
    this.boundEvents.push([_0x5087ed, _0x3a036f]);
    return this;
  }
  stopAll() {
    [this.mapAudio, this.bossAudio].forEach(_0xd09463 => {
      if (_0xd09463) {
        _0xd09463.pause();
        _0xd09463.src = "";
      }
    });
    this.boundEvents.forEach(([_0x4b8cdc, _0xb96f12]) => _0xb96f12.forEach(([_0xb26e7a, _0x712004]) => _0x4b8cdc.removeEventListener(_0xb26e7a, _0x712004)));
    this.mapAudio = null;
    this.bossAudio = null;
    this.mapTrack = null;
    this.bossTrack = null;
    this.boundEvents = [];
  }
}