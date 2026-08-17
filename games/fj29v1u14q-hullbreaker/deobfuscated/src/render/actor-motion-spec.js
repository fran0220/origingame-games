const e = (_0x1ed785, _0x4cdad5) => Object.freeze([_0x1ed785, _0x4cdad5]);
const r = (_0x3293e7, _0x1985cf, _0x36fcdd, _0x4e5289 = _0x3293e7) => Object.freeze({
  core: e(..._0x3293e7),
  iris: e(..._0x3293e7),
  muzzle: e(..._0x1985cf),
  barrel: e(..._0x1985cf),
  rack: e(..._0x36fcdd),
  mutation: e(..._0x4e5289)
});
const a = (_0x2c41d3, _0x28d5d1, _0x3e17b8, _0x40ec3d) => Object.freeze({
  index: _0x2c41d3,
  name: _0x28d5d1,
  anchor: e(..._0x3e17b8),
  sockets: _0x40ec3d
});
const t = (_0x38f893, _0x3a2f1b = 1, _0x5c6626 = "") => Object.freeze({
  frame: _0x38f893,
  until: _0x3a2f1b,
  event: _0x5c6626
});
const l = (_0x129a3d, _0x368689, ..._0xdabae8) => Object.freeze({
  marker: _0x129a3d,
  durationMs: _0x368689,
  beats: Object.freeze(_0xdabae8)
});
export const ACTOR_MOTION_ATLASES = Object.freeze({
  emplacement: Object.freeze({
    id: "emplacement-motion-atlas-v2",
    file: "../../assets/generated/sprites/emplacement-motion-atlas-v2.png",
    source: "../../assets/generated/sprites/emplacement-motion-atlas-v2.prompt.md",
    canvas: Object.freeze([2048, 1024]),
    grid: Object.freeze([4, 2]),
    cell: Object.freeze([512, 512]),
    minCellMargin: 29
  }),
  warden: Object.freeze({
    id: "warden-motion-atlas-v2",
    file: "../../assets/generated/sprites/warden-motion-atlas-v2.png",
    source: "../../assets/generated/sprites/warden-motion-atlas-v2.prompt.md",
    canvas: Object.freeze([2048, 1024]),
    grid: Object.freeze([4, 2]),
    cell: Object.freeze([512, 512]),
    minCellMargin: 36
  })
});
export const ACTOR_MOTION_SPEC = Object.freeze({
  polyp: Object.freeze({
    atlas: "emplacement",
    row: 0,
    authoredFacing: -1,
    referenceInkWidth: 448,
    anchorRole: "deck-contact",
    fallback: "base/primitive",
    frames: Object.freeze([a(0, "sealed", [256, 476], r([255, 371], [255, 371], [342, 382], [256, 342])), a(1, "aim", [256, 476], r([244, 276], [130, 274], [354, 275], [249, 326])), a(2, "discharge", [256, 476], r([266, 306], [55, 304], [371, 308], [276, 339])), a(3, "recover", [256, 476], r([236, 368], [236, 368], [365, 381], [251, 401]))]),
    clips: Object.freeze({
      closed: l("safe:sealed", 0, t("sealed", 1, "shutter-sealed")),
      tell: l("tell:hardware-aim", 700, t("recover", 0.24, "shutter-flare"), t("aim", 1, "iris-aim")),
      fire: l("fire:beam-live", 450, t("discharge", 1, "muzzle-live")),
      vent: l("recover:vent-open", 900, t("recover", 1, "iris-vulnerable")),
      relay: l("recover:relay-hinge", 320, t("recover", 1, "barrel-hinge"))
    }),
    states: Object.freeze({
      closed: "closed",
      tell: "tell",
      fire: "fire",
      vent: "vent",
      relay: "relay"
    }),
    rules: Object.freeze([Object.freeze({
      when: Object.freeze([{
        field: "state",
        eq: "closed"
      }, {
        field: "aegisActive",
        eq: true
      }]),
      clip: "tell"
    })])
  }),
  mortar: Object.freeze({
    atlas: "emplacement",
    row: 1,
    authoredFacing: -1,
    referenceInkWidth: 448,
    anchorRole: "deck-contact",
    fallback: "base/primitive",
    frames: Object.freeze([a(4, "brace", [256, 476], r([258, 362], [180, 228], [319, 329], [260, 350])), a(5, "load", [256, 476], r([260, 371], [112, 307], [325, 260], [262, 354])), a(6, "launch", [256, 476], r([262, 362], [174, 193], [320, 315], [260, 340])), a(7, "recover", [256, 476], r([253, 371], [126, 293], [329, 264], [258, 349]))]),
    clips: Object.freeze({
      aim: l("tell:loaded-ready", 0, t("load", 1, "breech-loaded")),
      lob: l("fire:pod-launch", 580, t("launch", 0.28, "muzzle-launch"), t("recover", 1, "tube-recover")),
      fuse: l("recover:venting", 520, t("recover", 1, "breech-vent")),
      burst: l("fire:zone-live", 220, t("recover", 1, "zone-burst")),
      cool: l("recover:reload", 1050, t("recover", 0.34, "breech-vent"), t("brace", 1, "tripod-brace"))
    }),
    states: Object.freeze({
      aim: "aim",
      lob: "lob",
      fuse: "fuse",
      burst: "burst",
      cool: "cool"
    }),
    rules: Object.freeze([])
  }),
  warden: Object.freeze({
    atlas: "warden",
    row: null,
    authoredFacing: -1,
    referenceInkWidth: 448,
    anchorRole: "deck-contact",
    fallback: "base/primitive",
    frames: Object.freeze([a(0, "sealed", [256, 476], r([208, 341], [87, 298], [369, 309], [252, 284])), a(1, "sweep-tell", [256, 476], r([209, 337], [164, 326], [365, 325], [258, 284])), a(2, "sweep-fire", [256, 476], r([238, 342], [64, 298], [378, 303], [264, 286])), a(3, "sweep-recover", [256, 476], r([213, 350], [90, 340], [361, 311], [251, 295])), a(4, "barrage-tell", [256, 476], r([209, 339], [84, 303], [354, 213], [253, 278])), a(5, "barrage-burst", [256, 476], r([202, 350], [68, 316], [346, 213], [247, 287])), a(6, "exposed", [256, 476], r([229, 346], [127, 305], [374, 312], [255, 278])), a(7, "damaged-exposed", [256, 476], r([204, 353], [89, 308], [369, 309], [255, 286]))]),
    clips: Object.freeze({
      deployment: l("safe:rooted-deployment", 900, t("sealed", 0.2, "feet-lock"), t("sweep-recover", 0.42, "suspension-rise"), t("barrage-tell", 0.7, "rack-unfold"), t("sweep-tell", 1, "cannon-braced")),
      sealed: l("safe:sealed", 0, t("sealed", 1, "shutters-sealed")),
      sweepTell: l("tell:cannon-brace", 620, t("sweep-tell", 1, "cannon-aim")),
      sweepFire: l("fire:sweep-live", 330, t("sweep-fire", 1, "cannon-live")),
      barrageTell: l("tell:rack-deploy", 700, t("barrage-tell", 1, "rack-aim")),
      barrageBurst: l("fire:barrage-live", 240, t("barrage-burst", 1, "rack-live")),
      exposed: l("recover:iris-exposed", 1500, t("sweep-recover", 0.09, "cannon-recover"), t("exposed", 1, "iris-vulnerable")),
      damagedExposed: l("recover:damaged-iris-exposed", 1500, t("sweep-recover", 0.09, "cannon-recover"), t("damaged-exposed", 1, "iris-damaged")),
      terminalRupture: l("recover:terminal-rupture", 1320, t("exposed", 0.08, "seal-break"), t("damaged-exposed", 1, "hardpoints-ruptured"))
    }),
    states: Object.freeze({
      sealed: "sealed",
      sweepTell: "sweepTell",
      sweepFire: "sweepFire",
      barrageTell: "barrageTell",
      barrageBurst: "barrageBurst",
      exposed: "exposed"
    }),
    rules: Object.freeze([Object.freeze({
      when: Object.freeze([{
        field: "state",
        eq: "exposed"
      }, {
        field: "hp",
        ltField: "maxHp"
      }]),
      clip: "damagedExposed"
    })])
  })
});
export const ACTOR_MOTION_KINDS = Object.freeze(Object.keys(ACTOR_MOTION_SPEC));