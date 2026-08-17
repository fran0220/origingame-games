import { ACTIVE_FIXTURE as _0x15a898, QUERY as _0x5d88c9 } from "../mode.js";
import { awaitPreloads as _0x1da60f, preloadTexture as _0x29bcb3 } from "./preload.js";
export const CROWN_ART = Object.freeze({
  core: "../../assets/generated/environment/crown-command-core-runtime-v2.png",
  kit: "../../assets/generated/environment/crown-command-kit-runtime-v2.png",
  coreMaster: "../../assets/generated/environment/crown-command-core-v4.png",
  kitMaster: "../../assets/generated/environment/crown-command-kit-v1.png",
  legacy: "../../assets/generated/backdrops/backdrop-crown-summit-v2.png",
  kitCanvas: Object.freeze([1024, 1024]),
  kitCell: Object.freeze([512, 512]),
  cells: Object.freeze({
    core: Object.freeze({
      source: "core",
      rect: Object.freeze([0, 0, 1024, 1024]),
      anchorPx: Object.freeze([512, 990])
    }),
    rootLeft: Object.freeze({
      source: "kit",
      col: 0,
      row: 1,
      rect: Object.freeze([0, 512, 512, 512]),
      anchorPx: Object.freeze([473, 126])
    }),
    rootRight: Object.freeze({
      source: "kit",
      col: 1,
      row: 1,
      rect: Object.freeze([512, 512, 512, 512]),
      anchorPx: Object.freeze([41, 131])
    }),
    antenna: Object.freeze({
      source: "kit",
      col: 1,
      row: 0,
      rect: Object.freeze([512, 0, 512, 512]),
      anchorPx: Object.freeze([256, 488])
    })
  }),
  stateLayers: Object.freeze({
    approach: Object.freeze(["core", "rootLeft", "rootRight", "antenna", "closedIris"]),
    occupation: Object.freeze(["warden", "relay0", "signal0"]),
    exposed: Object.freeze(["relay1", "signal1", "openingIris"]),
    rupture: Object.freeze(["relay2", "signal2", "hingedShoulder"]),
    signal: Object.freeze(["openIris", "carrier", "shockRings"])
  })
});
const c = _0x5d88c9.get("crown") === "legacy";
const n = _0x15a898 === null;
const a = n ? c ? {
  legacy: _0x29bcb3(new URL(CROWN_ART.legacy, import.meta.url).href, {
    anisotropy: 4
  })
} : {
  core: _0x29bcb3(new URL(CROWN_ART.core, import.meta.url).href, {
    anisotropy: 8
  }),
  kit: _0x29bcb3(new URL(CROWN_ART.kit, import.meta.url).href, {
    anisotropy: 8
  })
} : {};
await _0x1da60f();
const s = {};
for (const [O, l] of Object.entries(a)) {
  s[O] = await l;
}
const i = _0x41cb1a => s[_0x41cb1a]?.state === "ready" ? s[_0x41cb1a].tex : null;
export const CROWN_ART_SLOT = Object.freeze({
  state: n ? Object.values(s).every(_0x1e239f => _0x1e239f.state === "ready") ? "ready" : "fallback" : "off",
  variant: c ? "legacy" : "production",
  core: i("core"),
  kit: i("kit"),
  legacy: i("legacy"),
  requests: Object.keys(a).length,
  errors: Object.freeze(Object.fromEntries(Object.entries(s).filter(([, _0x259bc7]) => _0x259bc7.state !== "ready").map(([_0xc21577, _0x6bf005]) => [_0xc21577, _0x6bf005.error || _0x6bf005.state]))),
  settledBeforeConsumer: true
});
export function crownArtSnapshot() {
  const _0x193983 = _0x1d82fa => _0x1d82fa?.image ? [_0x1d82fa.image.width, _0x1d82fa.image.height] : null;
  return {
    state: CROWN_ART_SLOT.state,
    variant: CROWN_ART_SLOT.variant,
    requests: CROWN_ART_SLOT.requests,
    errors: CROWN_ART_SLOT.errors,
    corePixels: _0x193983(CROWN_ART_SLOT.core),
    kitPixels: _0x193983(CROWN_ART_SLOT.kit),
    legacyPixels: _0x193983(CROWN_ART_SLOT.legacy),
    settledBeforeConsumer: CROWN_ART_SLOT.settledBeforeConsumer
  };
}
if (typeof globalThis != "undefined") {
  globalThis.__HB_CROWN_ART = crownArtSnapshot;
}