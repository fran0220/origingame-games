import _0x6dd93e from "node:assert/strict";
import { readFile as _0x5d6493, stat as _0x4b2378 } from "node:fs/promises";
import _0xad0b26 from "node:test";
import _0x309655 from "node:vm";
const s = new URL("../", import.meta.url);
const l = new URL("voice-manifest.json", s);
_0xad0b26("English voice manifest references a complete playable asset pack", async () => {
  const _0x26f1c5 = JSON.parse(await _0x5d6493(l, "utf8"));
  _0x6dd93e.equal(_0x26f1c5.language, "en-US");
  _0x6dd93e.equal(Object.keys(_0x26f1c5.actors).length, 13);
  const _0x490643 = Object.values(_0x26f1c5.actors).flatMap(_0x288c1b => Object.values(_0x288c1b.lines));
  _0x6dd93e.equal(_0x490643.length, 78);
  const _0x38833c = _0x490643.map(_0x41d3b7 => _0x41d3b7.file);
  _0x6dd93e.equal(new Set(_0x38833c).size, _0x38833c.length);
  for (const _0x21b243 of _0x38833c) {
    const _0x1d0c35 = await _0x4b2378(new URL(_0x26f1c5.audioRoot + "/" + _0x21b243, s));
    _0x6dd93e.ok(_0x1d0c35.isFile(), _0x21b243 + " is not a file");
    _0x6dd93e.ok(_0x1d0c35.size > 1024, _0x21b243 + " is unexpectedly small");
  }
});
_0xad0b26("runtime catalog identifies the installed English pack", async () => {
  const _0x5a7f7c = await _0x5d6493(new URL("voice-system.js", s), "utf8");
  const _0x50b348 = {
    addEventListener() {},
    dispatchEvent() {}
  };
  const _0x1f83f1 = {
    Audio: class {
      addEventListener() {}
    },
    CustomEvent: class {},
    document: {
      addEventListener() {},
      querySelector: () => null
    },
    localStorage: {
      getItem: () => null,
      setItem() {}
    },
    performance: {
      now: () => 0
    },
    window: _0x50b348
  };
  _0x309655.runInNewContext(_0x5a7f7c, _0x1f83f1);
  _0x6dd93e.equal(_0x50b348.NeonVoice.language, "en-US");
  _0x6dd93e.equal(_0x50b348.NeonVoice.assetCount, 78);
  _0x6dd93e.match(_0x5a7f7c, /const packVersion = 'en-us-20260731-1'/);
  _0x6dd93e.match(_0x5a7f7c, /channel\.src = `\$\{base\}\/\$\{source\}\?v=\$\{packVersion\}`/);
  const _0x5930e0 = Object.values(_0x50b348.NeonVoice.catalog).flatMap(_0x569e77 => Object.values(_0x569e77).flat()).sort();
  const _0x39c284 = JSON.parse(await _0x5d6493(l, "utf8"));
  const _0x2651da = Object.values(_0x39c284.actors).flatMap(_0x50a46c => Object.values(_0x50a46c.lines).map(_0x464f25 => _0x464f25.file)).sort();
  _0x6dd93e.deepEqual(_0x5930e0, _0x2651da);
});
_0xad0b26("global voice cooldown allows at most one line every 20 seconds", async () => {
  const _0xc0e55f = await _0x5d6493(new URL("voice-system.js", s), "utf8");
  const _0x421dbc = new Map();
  let _0xd25e0a;
  let _0x23a17c = 0;
  const _0x294d55 = {
    addEventListener(_0x5934ea, _0x18839e) {
      _0x421dbc.set(_0x5934ea, _0x18839e);
    },
    dispatchEvent() {}
  };
  const _0xd9f80f = {
    Audio: class {
      constructor() {
        _0xd25e0a = this;
        this.paused = true;
        this.ended = true;
        this.playCount = 0;
      }
      addEventListener() {}
      pause() {
        this.paused = true;
      }
      play() {
        this.paused = false;
        this.ended = false;
        this.playCount += 1;
        return Promise.resolve();
      }
    },
    CustomEvent: class {},
    document: {
      addEventListener() {},
      querySelector: () => null
    },
    localStorage: {
      getItem: () => null,
      setItem() {}
    },
    performance: {
      now: () => _0x23a17c
    },
    window: _0x294d55
  };
  _0x309655.runInNewContext(_0xc0e55f, _0xd9f80f);
  _0x421dbc.get("pointerdown")();
  _0x6dd93e.equal(_0x294d55.NeonVoice.cooldownMs, 20000);
  _0x6dd93e.equal(_0x294d55.NeonVoice.play("lan", "opening", {
    force: true,
    cooldown: 0
  }), true);
  _0x6dd93e.equal(_0xd25e0a.playCount, 1);
  _0x6dd93e.equal(_0x294d55.NeonVoice.cooldownRemainingMs, 20000);
  _0x23a17c = 19999;
  _0x6dd93e.equal(_0x294d55.NeonVoice.play("eve", "entrance", {
    priority: 100,
    force: true,
    cooldown: 0
  }), false);
  _0x6dd93e.equal(_0xd25e0a.playCount, 1);
  _0x6dd93e.equal(_0x294d55.NeonVoice.cooldownRemainingMs, 1);
  _0x23a17c = 20000;
  _0x6dd93e.equal(_0x294d55.NeonVoice.play("eve", "entrance", {
    priority: 100,
    force: true,
    cooldown: 0
  }), true);
  _0x6dd93e.equal(_0xd25e0a.playCount, 2);
});