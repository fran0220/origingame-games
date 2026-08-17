import _0x39f37b from "node:assert/strict";
import { readFile as _0x5b56c8 } from "node:fs/promises";
import _0x5ea0dc from "node:test";
import { BgmController as _0x1bbda0 } from "../bgm-controller.mjs";
globalThis.window = {
  location: {
    href: "http://localhost/game/"
  }
};
globalThis.requestAnimationFrame = _0x3cd206 => _0x3cd206(performance.now() + 1000);
class o {
  constructor(_0x2f1d7b) {
    this.src = _0x2f1d7b;
    this._volume = 1;
    this.currentTime = 0;
    this.duration = 60;
    this.paused = true;
  }
  get volume() {
    return this._volume;
  }
  set volume(_0x51cdcc) {
    if (_0x51cdcc < 0 || _0x51cdcc > 1) {
      throw new RangeError("Invalid volume: " + _0x51cdcc);
    }
    this._volume = _0x51cdcc;
  }
  async play() {
    this.paused = false;
  }
  pause() {
    this.paused = true;
  }
}
const i = JSON.parse(await _0x5b56c8(new URL("../music-manifest.json", import.meta.url), "utf8"));
i.playback.buses.map.fadeInSec = 0;
i.playback.buses.boss.enterSec = 0;
i.playback.buses.boss.exitSec = 0;
_0x5ea0dc("every map and boss binding resolves to a track", () => {
  const _0x5d7cd4 = new Set(i.tracks.map(_0x2f3a49 => _0x2f3a49.id));
  Object.values(i.mapMusic).forEach(_0x2f1ea9 => _0x39f37b.equal(_0x5d7cd4.has(_0x2f1ea9), true));
  Object.values(i.bossMusic).forEach(_0x1171db => _0x39f37b.equal(_0x5d7cd4.has(_0x1171db), true));
  _0x39f37b.equal(Object.keys(i.mapMusic).length, 6);
  _0x39f37b.equal(Object.keys(i.bossMusic).length, 2);
});
_0x5ea0dc("all six maps and both bosses select the intended tracks", async () => {
  const _0x3e094b = new _0x1bbda0(i, {
    audioRoot: "http://localhost/music/",
    createAudio: _0x3666a2 => new o(_0x3666a2)
  });
  const _0x2d6d24 = [["scene-01-megastructure-h4", "level_01_megastructure_h4"], ["scene-02-underground-mercenary-bar", "level_02_underground_mercenary_bar"], ["scene-03-neon-market-braindance-club", "level_03_neon_market_braindance_club"], ["scene-04-megatower-cloud-club", "level_04_megatower_cloud_club"], ["scene-05-corporate-hotel-siege", "level_05_corporate_hotel_siege"], ["scene-06-corporate-plaza-ai-core", "level_05_corporate_hotel_siege"]];
  for (const [_0x3eeba1, _0x4f1566] of _0x2d6d24) {
    await _0x3e094b.enterMap(_0x3eeba1);
    _0x39f37b.equal(_0x3e094b.mapTrack.id, _0x4f1566);
    _0x39f37b.equal(_0x3e094b.mapAudio.src.endsWith("?v=music-2"), true);
  }
  await _0x3e094b.enterBoss("enforcer_zero");
  _0x39f37b.equal(_0x3e094b.bossTrack.id, "boss_01_enforcer_zero");
  await _0x3e094b.enterBoss("eve_9");
  _0x39f37b.equal(_0x3e094b.bossTrack.id, "boss_02_eve_9");
});
_0x5ea0dc("mute pauses active music and unmute resumes it", async () => {
  const _0x3e21cb = new _0x1bbda0(i, {
    audioRoot: "http://localhost/music/",
    createAudio: _0xdbd370 => new o(_0xdbd370)
  });
  await _0x3e21cb.enterMap("scene-01-megastructure-h4");
  await _0x3e21cb.setMuted(true);
  _0x39f37b.equal(_0x3e21cb.mapAudio.paused, true);
  _0x39f37b.equal(_0x3e21cb.mapAudio.volume, 0);
  await _0x3e21cb.setMuted(false);
  _0x39f37b.equal(_0x3e21cb.mapAudio.paused, false);
});
_0x5ea0dc("voice playback ducks and restores the active music bus", async () => {
  const _0x3bef77 = new _0x1bbda0(i, {
    audioRoot: "http://localhost/music/",
    createAudio: _0x446cfc => new o(_0x446cfc)
  });
  await _0x3bef77.enterMap("scene-01-megastructure-h4");
  const _0x20b4ad = _0x3bef77.mapAudio.volume;
  await _0x3bef77.setVoiceActive("battle_warning", true);
  _0x39f37b.equal(_0x3bef77.mapAudio.volume < _0x20b4ad, true);
  await _0x3bef77.setVoiceActive("battle_warning", false);
  _0x39f37b.equal(Math.abs(_0x3bef77.mapAudio.volume - _0x20b4ad) < 1e-9, true);
});
_0x5ea0dc("voice ducking clamps an early animation-frame timestamp", async () => {
  const _0x32ba9e = new _0x1bbda0(i, {
    audioRoot: "http://localhost/music/",
    createAudio: _0x6b57f => new o(_0x6b57f)
  });
  await _0x32ba9e.enterMap("scene-01-megastructure-h4");
  const _0x5dba52 = globalThis.requestAnimationFrame;
  let _0x5da890 = 0;
  globalThis.requestAnimationFrame = _0x430abe => {
    _0x5da890 += 1;
    _0x430abe(_0x5da890 === 1 ? 0 : performance.now() + 1000);
  };
  try {
    await _0x32ba9e.setVoiceActive("battle_warning", true);
    _0x39f37b.equal(_0x32ba9e.mapAudio.volume >= 0, true);
  } finally {
    globalThis.requestAnimationFrame = _0x5dba52;
  }
});
_0x5ea0dc("every voice category reduces music by at least 6 dB", async () => {
  const _0x20929c = new _0x1bbda0(i, {
    audioRoot: "http://localhost/music/",
    createAudio: _0x26e445 => new o(_0x26e445)
  });
  await _0x20929c.enterMap("scene-01-megastructure-h4");
  const _0x557ee1 = _0x20929c.mapAudio.volume;
  for (const _0xe86dd9 of Object.keys(i.playback.ducking)) {
    await _0x20929c.setVoiceActive(_0xe86dd9, true);
    _0x39f37b.equal(_0x20929c.mapAudio.volume <= _0x557ee1 * 0.5011872336272722 + 1e-9, true, _0xe86dd9);
    await _0x20929c.setVoiceActive(_0xe86dd9, false);
  }
});
_0x5ea0dc("boss music exclusively pauses and then resumes map music", async () => {
  const _0x357d67 = new _0x1bbda0(i, {
    audioRoot: "http://localhost/music/tracks/",
    createAudio: _0x1de1a1 => new o(_0x1de1a1)
  });
  await _0x357d67.enterMap("scene-05-corporate-hotel-siege");
  _0x39f37b.equal(_0x357d67.activeRole, "map");
  _0x39f37b.equal(_0x357d67.mapAudio.paused, false);
  _0x357d67.mapAudio.currentTime = 17.5;
  await _0x357d67.enterBoss("enforcer_zero");
  _0x39f37b.equal(_0x357d67.activeRole, "boss");
  _0x39f37b.equal(_0x357d67.mapAudio.paused, true);
  _0x39f37b.equal(_0x357d67.mapAudio.volume, 0);
  _0x39f37b.equal(_0x357d67.mapResumeTime, 17.5);
  await _0x357d67.exitBoss();
  _0x39f37b.equal(_0x357d67.activeRole, "map");
  _0x39f37b.equal(_0x357d67.mapAudio.paused, false);
  _0x39f37b.equal(_0x357d67.mapAudio.currentTime, 17.5);
});