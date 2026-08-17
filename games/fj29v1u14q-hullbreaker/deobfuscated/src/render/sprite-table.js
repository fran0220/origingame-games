import { CONFIG as _0x103a71 } from "../config.js";
export const SPRITE_ROOT = "../../assets/generated/sprites/";
export const SPRITE_ART = {
  hound: {
    a: {
      file: "hound-brace-a.png",
      canvas: [64, 32],
      ink: [4, 2, 58, 30]
    },
    b: {
      file: "houndframe-v2.png",
      canvas: [590, 313],
      ink: [24, 24, 542, 265]
    }
  },
  carrier: {
    a: {
      file: "carrier-hauler-a.png",
      canvas: [64, 32],
      ink: [2, 0, 60, 32]
    },
    b: {
      file: "carrier-hauler-v2.png",
      canvas: [586, 368],
      ink: [24, 24, 538, 320]
    }
  },
  wasp: {
    a: {
      file: "wasp-drone-a.png",
      canvas: [32, 32],
      ink: [2, 2, 28, 24]
    },
    b: {
      file: "wasp-pixel-v1/wasp-pixel-idle-v1.png",
      canvas: [128, 128],
      ink: [13, 51, 102, 57]
    }
  },
  polyp: {
    a: {
      file: "polyp-iris-a.png",
      canvas: [64, 64],
      ink: [4, 4, 58, 58]
    },
    b: {
      file: "iris-polyp-v2.png",
      canvas: [429, 410],
      ink: [24, 24, 381, 362]
    }
  },
  mortar: {
    a: {
      file: "mortar-tripod-a.png",
      canvas: [64, 64],
      ink: [0, 2, 64, 60]
    },
    b: {
      file: "spore-mortar-v2.png",
      canvas: [498, 458],
      ink: [24, 24, 450, 410]
    }
  },
  warden: {
    a: {
      file: "crown-warden-v1.webp",
      sourceFile: "crown-warden-v1.png",
      canvas: [1672, 941],
      ink: [145, 17, 1413, 890]
    },
    b: {
      file: "crown-warden-v1.webp",
      sourceFile: "crown-warden-v1.png",
      canvas: [1672, 941],
      ink: [145, 17, 1413, 890]
    }
  }
};
export const SPRITE_ACTION_ART = {
  hound: {
    file: "houndframe-action-v2.png",
    canvas: [666, 302],
    ink: [24, 24, 618, 254]
  },
  carrier: {
    file: "carrier-hauler-action-v2.png",
    canvas: [590, 397],
    ink: [24, 24, 542, 349]
  },
  wasp: {
    file: "wasp-pixel-v1/wasp-pixel-dive-v1.png",
    canvas: [128, 128],
    ink: [19, 31, 84, 58]
  },
  polyp: {
    file: "iris-polyp-action-v2.png",
    canvas: [421, 399],
    ink: [24, 24, 373, 351]
  },
  mortar: {
    file: "spore-mortar-action-v2.webp",
    sourceFile: "spore-mortar-action-v2.png",
    canvas: [499, 449],
    ink: [24, 24, 451, 401]
  }
};
export const SPRITE_FLAP_ART = {
  wasp: {
    file: "wasp-pixel-v1/wasp-pixel-flight-v1.png",
    canvas: [512, 128],
    ink: [28, 18, 465, 92]
  },
  hound: {
    file: "hound-gait-atlas-v2.webp",
    sourceFile: "hound-gait-atlas-v2.png",
    canvas: [2048, 1024],
    ink: [48, 180, 1956, 740]
  }
};
export const SPRITE_MOTION_ART = Object.freeze({
  wasp: Object.freeze({
    file: "wasp-pixel-v1/wasp-pixel-flight-v1.png",
    canvas: Object.freeze([512, 128]),
    referenceInkWidth: 102,
    anchorRole: "body-mass",
    grounded: false,
    frames: Object.freeze([Object.freeze({
      cell: Object.freeze([0, 0, 128, 128]),
      anchor: Object.freeze([64, 64])
    }), Object.freeze({
      cell: Object.freeze([128, 0, 128, 128]),
      anchor: Object.freeze([64, 64])
    }), Object.freeze({
      cell: Object.freeze([256, 0, 128, 128]),
      anchor: Object.freeze([64, 64])
    }), Object.freeze({
      cell: Object.freeze([384, 0, 128, 128]),
      anchor: Object.freeze([64, 64])
    })])
  }),
  hound: Object.freeze({
    file: "hound-gait-atlas-v2.webp",
    sourceFile: "hound-gait-atlas-v2.png",
    canvas: Object.freeze([2048, 1024]),
    referenceInkWidth: 472,
    anchorRole: "orange-shoulder+deck-line",
    grounded: true,
    frames: Object.freeze([Object.freeze({
      cell: Object.freeze([0, 0, 512, 512]),
      anchor: Object.freeze([272, 408])
    }), Object.freeze({
      cell: Object.freeze([512, 0, 512, 512]),
      anchor: Object.freeze([275, 408])
    }), Object.freeze({
      cell: Object.freeze([1024, 0, 512, 512]),
      anchor: Object.freeze([275, 408])
    }), Object.freeze({
      cell: Object.freeze([1536, 0, 512, 512]),
      anchor: Object.freeze([287, 408])
    }), Object.freeze({
      cell: Object.freeze([0, 512, 512, 512]),
      anchor: Object.freeze([290, 408])
    }), Object.freeze({
      cell: Object.freeze([512, 512, 512, 512]),
      anchor: Object.freeze([282, 408])
    }), Object.freeze({
      cell: Object.freeze([1024, 512, 512, 512]),
      anchor: Object.freeze([288, 408])
    }), Object.freeze({
      cell: Object.freeze([1536, 512, 512, 512]),
      anchor: Object.freeze([272, 408])
    })])
  })
});
export const SPRITE_KINDS = Object.keys(SPRITE_ART);
export const SPRITE_VARIANT_IDS = ["a", "b"];
export const DEFAULT_VARIANT = "b";
export const MORTAR_STANCE = 1.5;
export function primitiveBox(_0x3c9dec, _0x505b55 = _0x103a71) {
  if (_0x3c9dec === "wasp") {
    const _0x34c17f = _0x505b55.wasp.visualRadius;
    return {
      w: _0x34c17f * 2,
      h: _0x34c17f * 2,
      cx: 0,
      cy: 0
    };
  }
  if (_0x3c9dec === "hound") {
    return {
      w: _0x505b55.hound.size[0],
      h: _0x505b55.hound.size[1],
      cx: 0,
      cy: 0
    };
  }
  if (_0x3c9dec === "carrier") {
    return {
      w: _0x505b55.carrier.size[0],
      h: _0x505b55.carrier.size[1],
      cx: 0,
      cy: 0
    };
  }
  if (_0x3c9dec === "polyp") {
    const _0x1e80af = _0x505b55.polyp;
    const _0x489561 = _0x1e80af.barrelTiles * 0.65 + _0x1e80af.barrelSize[0] / 2;
    const _0x5bebbd = _0x1e80af.size;
    return {
      w: _0x489561 + _0x5bebbd,
      h: _0x1e80af.size + _0x1e80af.rootY,
      cx: (_0x489561 - _0x5bebbd) / 2,
      cy: (_0x1e80af.size - _0x1e80af.rootY) / 2
    };
  }
  if (_0x3c9dec === "mortar") {
    const _0xdc3998 = _0x505b55.mortar;
    const _0xd9efeb = _0xdc3998.size * 1.1;
    return {
      w: _0xdc3998.size * 2 * 1.5,
      h: _0xd9efeb + _0xdc3998.bodyY,
      cx: 0,
      cy: (_0xd9efeb - _0xdc3998.bodyY) / 2
    };
  }
  if (_0x3c9dec === "warden") {
    const _0x1b7a4b = _0x505b55.warden;
    return {
      w: _0x1b7a4b.size[0],
      h: _0x1b7a4b.size[1],
      cx: 0,
      cy: _0x1b7a4b.size[1] / 2 - _0x1b7a4b.bodyY
    };
  }
  return null;
}
const r = new Set(["hound", "polyp", "mortar", "warden"]);
function n(_0x7d5bb4, _0x580e62, _0x14a70c = _0x103a71) {
  const _0x15f3f4 = primitiveBox(_0x7d5bb4, _0x14a70c);
  if (!_0x580e62 || !_0x15f3f4) {
    return null;
  }
  const [_0x4a973a, _0x23f6e3] = _0x580e62.canvas;
  const [_0x54c440, _0x3c8ebf, _0x5aacb0, _0x323839] = _0x580e62.ink;
  const _0x17eb3f = Math.min(_0x15f3f4.w / _0x5aacb0, _0x15f3f4.h / _0x323839);
  const _0x2b8729 = _0x5aacb0 * _0x17eb3f;
  const _0x1f9973 = _0x323839 * _0x17eb3f;
  const _0x171855 = _0x4a973a * _0x17eb3f;
  const _0x53cde5 = _0x23f6e3 * _0x17eb3f;
  const _0x5c8374 = ((_0x54c440 + _0x5aacb0 / 2) / _0x4a973a - 0.5) * _0x171855;
  const _0x12b3a9 = (0.5 - (_0x3c8ebf + _0x323839 / 2) / _0x23f6e3) * _0x53cde5;
  const _0x1cfd7d = r.has(_0x7d5bb4) ? _0x15f3f4.cy - _0x15f3f4.h / 2 + _0x1f9973 / 2 : _0x15f3f4.cy;
  return {
    w: _0x171855,
    h: _0x53cde5,
    offX: _0x15f3f4.cx - _0x5c8374 + (_0x580e62.align ? _0x580e62.align[0] : 0),
    offY: _0x1cfd7d - _0x12b3a9 + (_0x580e62.align ? _0x580e62.align[1] : 0),
    inkW: _0x2b8729,
    inkH: _0x1f9973
  };
}
export function spriteQuad(_0x4a95fb, _0x39bea2 = "b", _0x443307 = _0x103a71) {
  return n(_0x4a95fb, SPRITE_ART[_0x4a95fb] && SPRITE_ART[_0x4a95fb][_0x39bea2], _0x443307);
}
export function spriteActionQuad(_0x430a19, _0x4fe241 = _0x103a71) {
  return n(_0x430a19, SPRITE_ACTION_ART[_0x430a19], _0x4fe241);
}
export function spriteFlapQuad(_0x408e7b, _0x5820a4 = _0x103a71) {
  return n(_0x408e7b, SPRITE_FLAP_ART[_0x408e7b], _0x5820a4);
}
export function spriteMotionFrame(_0x380161, _0x2ef4e7, _0xf2d485 = _0x103a71) {
  const _0x1ea3bb = SPRITE_MOTION_ART[_0x380161];
  const _0x442571 = primitiveBox(_0x380161, _0xf2d485);
  if (!_0x1ea3bb || !_0x442571 || !_0x1ea3bb.frames.length) {
    return null;
  }
  const _0xb8ee8d = _0x1ea3bb.frames.length;
  const _0xc24ef9 = _0x1ea3bb.frames[(_0x2ef4e7 % _0xb8ee8d + _0xb8ee8d) % _0xb8ee8d];
  const [_0x4e3817, _0x38deea] = _0x1ea3bb.canvas;
  const [_0x23cbb1, _0x5d4b05, _0x57a2ed, _0xba8e28] = _0xc24ef9.cell;
  const [_0x31e309, _0xf0a88] = _0xc24ef9.anchor;
  const _0x2cae3d = _0x442571.w / _0x1ea3bb.referenceInkWidth;
  const _0x5a4c4c = _0x57a2ed * _0x2cae3d;
  const _0x3512d7 = _0xba8e28 * _0x2cae3d;
  const _0x1f701a = (_0x31e309 - _0x57a2ed / 2) * _0x2cae3d;
  const _0x55a059 = (_0xba8e28 / 2 - _0xf0a88) * _0x2cae3d;
  const _0x31c52f = _0x1ea3bb.grounded ? _0x442571.cy - _0x442571.h / 2 : _0x442571.cy;
  return {
    kind: _0x380161,
    index: (_0x2ef4e7 % _0xb8ee8d + _0xb8ee8d) % _0xb8ee8d,
    w: _0x5a4c4c,
    h: _0x3512d7,
    offX: _0x442571.cx - _0x1f701a,
    offY: _0x31c52f - _0x55a059,
    anchorX: _0x31e309,
    anchorY: _0xf0a88,
    anchorWorldX: _0x442571.cx,
    anchorWorldY: _0x31c52f,
    uv: {
      u0: _0x23cbb1 / _0x4e3817,
      u1: (_0x23cbb1 + _0x57a2ed) / _0x4e3817,
      v0: 1 - (_0x5d4b05 + _0xba8e28) / _0x38deea,
      v1: 1 - _0x5d4b05 / _0x38deea
    }
  };
}
export function spritesEnabled(_0x402e25) {
  return _0x402e25 !== "0" && _0x402e25 !== "off";
}
export function resolveSpriteVariants(_0x596d73, _0x2930a5 = SPRITE_KINDS) {
  const _0x352831 = {};
  for (const _0xa04646 of _0x2930a5) {
    _0x352831[_0xa04646] = "b";
  }
  const _0x393532 = (_0x596d73 || "").trim().toLowerCase();
  if (!_0x393532) {
    return _0x352831;
  }
  if (SPRITE_VARIANT_IDS.includes(_0x393532)) {
    for (const _0x726bfb of _0x2930a5) {
      _0x352831[_0x726bfb] = _0x393532;
    }
    return _0x352831;
  }
  for (const _0x5bb48c of _0x393532.split(",")) {
    const [_0x631be1, _0x50256c] = _0x5bb48c.split(":").map(_0x55dfd7 => (_0x55dfd7 || "").trim());
    if (_0x2930a5.includes(_0x631be1) && SPRITE_VARIANT_IDS.includes(_0x50256c)) {
      _0x352831[_0x631be1] = _0x50256c;
    }
  }
  return _0x352831;
}