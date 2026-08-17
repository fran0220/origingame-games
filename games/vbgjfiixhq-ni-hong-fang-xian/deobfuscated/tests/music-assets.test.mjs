import _0x310e3d from "node:assert/strict";
import { readFile as _0x3703e9, stat as _0x5b6d96 } from "node:fs/promises";
import _0x5239c0 from "node:test";
const a = new URL("../", import.meta.url);
_0x5239c0("all imported background-music tracks exist and contain audio data", async () => {
  const _0x3258fa = JSON.parse(await _0x3703e9(new URL("music-manifest.json", a), "utf8"));
  _0x310e3d.equal(_0x3258fa.version, 2);
  _0x310e3d.equal(_0x3258fa.tracks.length, 7);
  _0x310e3d.equal(Object.keys(_0x3258fa.mapMusic).length, 6);
  _0x310e3d.equal(Object.keys(_0x3258fa.bossMusic).length, 2);
  const _0x200e0b = new Set(_0x3258fa.tracks.map(_0x5ddb98 => _0x5ddb98.id));
  for (const _0x329cef of [...Object.values(_0x3258fa.mapMusic), ...Object.values(_0x3258fa.bossMusic)]) {
    _0x310e3d.equal(_0x200e0b.has(_0x329cef), true, "Unknown track mapping: " + _0x329cef);
  }
  for (const _0x19e056 of _0x3258fa.tracks) {
    const _0x3cc66c = await _0x5b6d96(new URL(_0x3258fa.audioRoot + "/" + _0x19e056.file, a));
    _0x310e3d.ok(_0x3cc66c.isFile(), _0x19e056.file + " is not a file");
    _0x310e3d.ok(_0x3cc66c.size > 1000000, _0x19e056.file + " is unexpectedly small");
    _0x310e3d.ok(_0x19e056.durationSec >= 45, _0x19e056.file + " is too short");
  }
});