import { CONFIG as _0x533e22 } from "../config.js";
export const BODY_HALF_WIDTH = _0x533e22.player.width / 2;
export const BODY_HEIGHT = _0x533e22.player.height;
export const RIG_SPRITE_PATH = "../../assets/generated/sprites/rig-marine-v2.png";
export const RIG_SPRITE_CONTENT_ASPECT = 419 / 327;
export const RIG_SPRITE_H = BODY_HEIGHT;
export const RIG_SPRITE_W = RIG_SPRITE_H * 1.2813455657492354;
export const RIG_SPRITE_MAX_OVERRUN = 3.7;
export const RIG_SPRITE_UV = {
  u0: 24 / 467,
  v0: 0.064,
  u1: 443 / 467,
  v1: 0.936
};
export const RIG_ACTION_SPRITE_PATH = "../../assets/generated/sprites/rig-marine-action-v2.png";
export const RIG_ACTION_SPRITE_H = BODY_HEIGHT;
export const RIG_ACTION_SPRITE_W = 488 / 334 * RIG_ACTION_SPRITE_H;
export const RIG_ACTION_SPRITE_UV = {
  u0: 24 / 536,
  v0: 24 / 382,
  u1: 512 / 536,
  v1: 358 / 382
};
export const RIG_RUN_HAND_X = 0.2;
export const RIG_BODY_VISUAL_H = 2;
export const RIG_BODY_ATLAS_PATH = "../../assets/generated/sprites/rig-slender-body-atlas-v2.png";
export const RIG_BODY_ATLAS_W = 2048;
export const RIG_BODY_ATLAS_H = 1024;
export const RIG_IDLE_GUNLESS = Object.freeze({
  sourcePath: RIG_BODY_ATLAS_PATH,
  atlasX: 0,
  atlasY: 0,
  canvasW: 512,
  canvasH: 512,
  trimX: 194,
  trimY: 140,
  trimW: 123,
  trimH: 232,
  anchorX: 66
});
export const RIG_BODY_WORLD_PER_PIXEL = 2 / RIG_IDLE_GUNLESS.trimH;
export const RIG_RUN_FRAMES = Object.freeze({
  contact: Object.freeze({
    sourcePath: RIG_BODY_ATLAS_PATH,
    atlasX: 512,
    atlasY: 0,
    canvasW: 512,
    canvasH: 512,
    trimX: 141,
    trimY: 148,
    trimW: 230,
    trimH: 216,
    anchorX: 132
  }),
  pass: Object.freeze({
    sourcePath: RIG_BODY_ATLAS_PATH,
    atlasX: 1024,
    atlasY: 0,
    canvasW: 512,
    canvasH: 512,
    trimX: 188,
    trimY: 150,
    trimW: 135,
    trimH: 212,
    anchorX: 76
  }),
  flight: Object.freeze({
    sourcePath: RIG_BODY_ATLAS_PATH,
    atlasX: 1536,
    atlasY: 0,
    canvasW: 512,
    canvasH: 512,
    trimX: 156,
    trimY: 160,
    trimW: 199,
    trimH: 191,
    anchorX: 112
  })
});
export const RIG_AIR_FRAMES = Object.freeze({
  rise: Object.freeze({
    sourcePath: RIG_BODY_ATLAS_PATH,
    atlasX: 0,
    atlasY: 512,
    canvasW: 512,
    canvasH: 512,
    trimX: 168,
    trimY: 147,
    trimW: 176,
    trimH: 217,
    anchorX: 105
  }),
  fall: Object.freeze({
    sourcePath: RIG_BODY_ATLAS_PATH,
    atlasX: 512,
    atlasY: 512,
    canvasW: 512,
    canvasH: 512,
    trimX: 147,
    trimY: 154,
    trimW: 218,
    trimH: 204,
    anchorX: 119
  })
});
export const RIG_AIM_ATLAS_PATH = "../../assets/generated/sprites/rig-slender-aim-atlas-v2.png";
export const RIG_AIM_ATLAS_W = 2048;
export const RIG_AIM_ATLAS_H = 1024;
export const RIG_AIM_FRAMES = Object.freeze({
  right: Object.freeze({
    sourcePath: RIG_AIM_ATLAS_PATH,
    atlasX: 0,
    atlasY: 0,
    canvasW: 512,
    canvasH: 1024,
    trimX: 132,
    trimY: 297,
    trimW: 248,
    trimH: 429,
    anchorX: 124
  }),
  "up-right": Object.freeze({
    sourcePath: RIG_AIM_ATLAS_PATH,
    atlasX: 512,
    atlasY: 0,
    canvasW: 512,
    canvasH: 1024,
    trimX: 111,
    trimY: 280,
    trimW: 290,
    trimH: 463,
    anchorX: 145
  }),
  up: Object.freeze({
    sourcePath: RIG_AIM_ATLAS_PATH,
    atlasX: 1024,
    atlasY: 0,
    canvasW: 512,
    canvasH: 1024,
    trimX: 162,
    trimY: 233,
    trimW: 188,
    trimH: 557,
    anchorX: 94
  }),
  "down-right": Object.freeze({
    sourcePath: RIG_AIM_ATLAS_PATH,
    atlasX: 1536,
    atlasY: 0,
    canvasW: 512,
    canvasH: 1024,
    trimX: 93,
    trimY: 333,
    trimW: 326,
    trimH: 357,
    anchorX: 163
  })
});
export const RIG_AIM_WORLD_PER_PIXEL = 2 / RIG_AIM_FRAMES.right.trimH;
export const RIG_CLIMB_ATLAS_PATH = "../../assets/generated/sprites/rig-slender-climb-atlas-v2.png";
export const RIG_CLIMB_ATLAS_W = 2048;
export const RIG_CLIMB_ATLAS_H = 1024;
export const RIG_CLIMB_WORLD_PER_PIXEL = RIG_AIM_WORLD_PER_PIXEL;
export const RIG_CLIMB_CYCLE_TILES = 2.4;
export const RIG_CLIMB_FRAMES = Object.freeze([Object.freeze({
  name: "left-reach",
  atlasX: 0,
  atlasY: 0,
  trimX: 196,
  trimY: 209,
  trimW: 202,
  trimH: 532,
  anchorX: 84
}), Object.freeze({
  name: "left-drive",
  atlasX: 512,
  atlasY: 0,
  trimX: 148,
  trimY: 275,
  trimW: 205,
  trimH: 464,
  anchorX: 102
}), Object.freeze({
  name: "right-reach",
  atlasX: 1024,
  atlasY: 0,
  trimX: 115,
  trimY: 216,
  trimW: 209,
  trimH: 529,
  anchorX: 100
}), Object.freeze({
  name: "right-drive",
  atlasX: 1536,
  atlasY: 0,
  trimX: 61,
  trimY: 281,
  trimW: 198,
  trimH: 463,
  anchorX: 103
})]);
export const RIG_RUN_CYCLE_MS = 300;
export const RIG_RUN_ACTION_FROM = 0.24;
export const RIG_RUN_ACTION_TO = 0.72;
export const RIG_RECOIL_MS = 105;
export const RIG_RECOIL_TILES = 0.095;
export const RIG_WEAPON_ATLAS_PATH = "../../assets/generated/weapons/rig-weapons-atlas-v1.png";
export const RIG_WEAPON_ATLAS_W = 2048;
export const RIG_WEAPON_ATLAS_H = 256;
export const RIG_WEAPON_ART = Object.freeze({
  R: Object.freeze({
    sourcePath: "../../assets/generated/weapons/rig-rivetgun-v1.png",
    atlasX: 0,
    atlasY: 0,
    canvasW: 420,
    canvasH: 215,
    trimX: 16,
    trimY: 16,
    trimW: 388,
    trimH: 183,
    worldW: 1.16,
    muzzleY: 82
  }),
  S: Object.freeze({
    sourcePath: "../../assets/generated/weapons/rig-scatter-v1.png",
    atlasX: 452,
    atlasY: 0,
    canvasW: 355,
    canvasH: 213,
    trimX: 16,
    trimY: 16,
    trimW: 323,
    trimH: 181,
    worldW: 1.05,
    muzzleY: 103
  }),
  L: Object.freeze({
    sourcePath: "../../assets/generated/weapons/rig-sunspear-v1.png",
    atlasX: 839,
    atlasY: 0,
    canvasW: 390,
    canvasH: 201,
    trimX: 16,
    trimY: 16,
    trimW: 358,
    trimH: 169,
    worldW: 1.18,
    muzzleY: 82
  }),
  H: Object.freeze({
    sourcePath: "../../assets/generated/weapons/rig-hunger-v1.png",
    atlasX: 1261,
    atlasY: 0,
    canvasW: 331,
    canvasH: 218,
    trimX: 16,
    trimY: 16,
    trimW: 299,
    trimH: 186,
    worldW: 1.02,
    muzzleY: 95
  }),
  F: Object.freeze({
    sourcePath: "../../assets/generated/weapons/rig-cindermouth-v1.png",
    atlasX: 1624,
    atlasY: 0,
    canvasW: 368,
    canvasH: 220,
    trimX: 16,
    trimY: 16,
    trimW: 336,
    trimH: 188,
    worldW: 1.08,
    muzzleY: 95
  })
});
export const RIG_GUN_MUZZLE_X = _0x533e22.player.barrelTiles;
export function spriteImageViolations(_0x5287b3 = {}) {
  const _0x55aa5f = _0x5287b3.spriteW ?? RIG_SPRITE_W;
  const _0x37ff50 = _0x5287b3.spriteH ?? RIG_SPRITE_H;
  const _0x166c24 = _0x5287b3.maxOverrun ?? 3.7;
  const _0x217a89 = _0x5287b3.uv ?? RIG_SPRITE_UV;
  const _0x4131c1 = [];
  if (!(_0x55aa5f > 0) || !(_0x37ff50 > 0)) {
    _0x4131c1.push("image sprite plane has a non-positive dimension");
  }
  if (_0x55aa5f / 2 > BODY_HALF_WIDTH * _0x166c24 + 1e-9) {
    _0x4131c1.push("image sprite half-width " + (_0x55aa5f / 2).toFixed(3) + " exceeds the documented " + _0x166c24 + "x collision-half-width ceiling (" + (BODY_HALF_WIDTH * _0x166c24).toFixed(3) + ")");
  }
  if (_0x37ff50 > BODY_HEIGHT + 1e-9) {
    _0x4131c1.push("image sprite height " + _0x37ff50.toFixed(3) + " exceeds the " + BODY_HEIGHT + " collision height");
  }
  if (!_0x217a89 || !(_0x217a89.u0 >= 0) || !(_0x217a89.u1 <= 1) || !(_0x217a89.u0 < _0x217a89.u1) || !(_0x217a89.v0 >= 0) || !(_0x217a89.v1 <= 1) || !(_0x217a89.v0 < _0x217a89.v1)) {
    _0x4131c1.push("UV crop rectangle is not well-formed inside [0,1]");
  }
  return _0x4131c1;
}
export const SPRITE_W = 0.6;
export const SPRITE_H = BODY_HEIGHT;
export const CANVAS_W = 34;
export const CANVAS_H = 96;
export const HELMET = {
  x: 0.54,
  y: 0.1,
  rx: 0.145,
  ry: 0.09
};
export const TORSO = [[0.72, 0.18], [0.64, 0.58], [0.34, 0.58], [0.2, 0.38], [0.32, 0.18]];
export const LEG_FRONT = [[0.6, 0.58], [0.46, 0.58], [0.5, 0.95], [0.7, 0.9]];
export const LEG_BACK = [[0.52, 0.58], [0.38, 0.58], [0.16, 0.92], [0.4, 0.98]];
export const LIFT_TOP = 0.18;
export const LIFT_BOTTOM = 0.42;
export const VISOR = {
  x: 0.58,
  y: 0.12,
  rx: 0.075,
  ry: 0.02
};
export const GUN_BOX = {
  w: 0.75,
  h: 0.14,
  d: 0.14,
  x: 0.45,
  y: 0,
  z: 0
};
export function gunLocalXSpan(_0xf237e9 = GUN_BOX) {
  return [_0xf237e9.x - _0xf237e9.w / 2, _0xf237e9.x + _0xf237e9.w / 2];
}
const [e, r] = gunLocalXSpan();
export { e as GUN_INNER_X, r as GUN_OUTER_X };
function a(_0x5c05fa) {
  let _0xbefc99 = 1;
  let _0x94ff28 = 0;
  let _0x5b9666 = 1;
  let _0x23e819 = 0;
  for (const [_0x5a37c9, _0x5d6733] of _0x5c05fa) {
    _0xbefc99 = Math.min(_0xbefc99, _0x5a37c9);
    _0x94ff28 = Math.max(_0x94ff28, _0x5a37c9);
    _0x5b9666 = Math.min(_0x5b9666, _0x5d6733);
    _0x23e819 = Math.max(_0x23e819, _0x5d6733);
  }
  return {
    minX: _0xbefc99,
    maxX: _0x94ff28,
    minY: _0x5b9666,
    maxY: _0x23e819
  };
}
function s(_0x5d3057, _0x742c8e, _0x261333, _0x44701b) {
  if (!Array.isArray(_0x261333) || _0x261333.length < 3) {
    _0x5d3057.push(_0x742c8e + " needs at least 3 points, got " + (_0x261333 ? _0x261333.length : 0));
    return;
  }
  for (const [_0x45e92e, _0x309c2e] of _0x261333) {
    if (!(_0x45e92e >= 0) || !(_0x45e92e <= 1) || !(_0x309c2e >= 0) || !(_0x309c2e <= 1)) {
      _0x5d3057.push(_0x742c8e + " point (" + _0x45e92e + "," + _0x309c2e + ") is outside the [0,1] canvas");
    }
  }
  const _0x22e999 = Math.abs(function (_0x1afae5) {
    let _0x29cdf5 = 0;
    for (let _0x17d050 = 0; _0x17d050 < _0x1afae5.length; _0x17d050++) {
      const [_0x4a0807, _0x325d71] = _0x1afae5[_0x17d050];
      const [_0x15aa3c, _0x5c1ed5] = _0x1afae5[(_0x17d050 + 1) % _0x1afae5.length];
      _0x29cdf5 += _0x4a0807 * _0x5c1ed5 - _0x15aa3c * _0x325d71;
    }
    return _0x29cdf5 / 2;
  }(_0x261333));
  if (_0x22e999 < _0x44701b) {
    _0x5d3057.push(_0x742c8e + " polygon area " + _0x22e999.toFixed(4) + " is too small to be a real fill (self-intersecting or degenerate?)");
  }
}
function o(_0x4f6def, _0xa43ec7, _0x59eee7) {
  if (!_0x59eee7 || !(_0x59eee7.x >= 0) || !(_0x59eee7.x <= 1) || !(_0x59eee7.y >= 0) || !(_0x59eee7.y <= 1) || !(_0x59eee7.rx > 0) || !(_0x59eee7.ry > 0)) {
    _0x4f6def.push(_0xa43ec7 + " is not a well-formed ellipse inside the canvas");
  }
}
export function spriteViolations(_0x5758fe = {}) {
  const _0x33d714 = _0x5758fe.spriteW ?? 0.6;
  const _0x25d441 = _0x5758fe.spriteH ?? SPRITE_H;
  const _0x8d799 = _0x5758fe.helmet ?? HELMET;
  const _0x2ff006 = _0x5758fe.torso ?? TORSO;
  const _0xe14284 = _0x5758fe.legFront ?? LEG_FRONT;
  const _0x13f5ac = _0x5758fe.legBack ?? LEG_BACK;
  const _0x1f9f1d = _0x5758fe.canvasW ?? 34;
  const _0x36c317 = _0x5758fe.canvasH ?? 96;
  const _0x57a5d5 = _0x5758fe.liftTop ?? 0.18;
  const _0x5c7f35 = _0x5758fe.liftBottom ?? 0.42;
  const _0x5beb41 = _0x5758fe.visor ?? VISOR;
  const _0x1799d0 = [];
  if (!(_0x33d714 > 0) || !(_0x25d441 > 0)) {
    _0x1799d0.push("sprite plane has a non-positive dimension");
  }
  if (_0x33d714 / 2 > BODY_HALF_WIDTH + 1e-9) {
    _0x1799d0.push("sprite half-width " + (_0x33d714 / 2).toFixed(3) + " exceeds the " + BODY_HALF_WIDTH.toFixed(3) + " collision half-width");
  }
  if (_0x25d441 > BODY_HEIGHT + 1e-9) {
    _0x1799d0.push("sprite height " + _0x25d441.toFixed(3) + " exceeds the " + BODY_HEIGHT + " collision height");
  }
  o(_0x1799d0, "helmet", _0x8d799);
  s(_0x1799d0, "torso", _0x2ff006, 0.03);
  s(_0x1799d0, "front leg", _0xe14284, 0.015);
  s(_0x1799d0, "back leg", _0x13f5ac, 0.015);
  if (_0x8d799 && _0x8d799.y - _0x8d799.ry > 0.05) {
    _0x1799d0.push("helmet never reaches the top of the canvas (top " + (_0x8d799.y - _0x8d799.ry).toFixed(3) + ")");
  }
  if (Array.isArray(_0xe14284) && Array.isArray(_0x13f5ac)) {
    const _0x5501d0 = Math.max(a(_0xe14284).maxY, a(_0x13f5ac).maxY);
    if (_0x5501d0 < 0.9) {
      _0x1799d0.push("legs never reach the bottom of the canvas (max y " + _0x5501d0.toFixed(3) + ")");
    }
  }
  if (Array.isArray(_0x2ff006)) {
    const _0x221252 = a(_0x2ff006);
    if (_0x221252.maxX - _0x221252.minX < 0.3) {
      _0x1799d0.push("torso is too narrow to read as shoulders (width " + (_0x221252.maxX - _0x221252.minX).toFixed(3) + ")");
    }
  }
  if (_0x1f9f1d > 0 && _0x36c317 > 0) {
    const _0x157e9a = _0x1f9f1d / _0x36c317;
    const _0x537b3a = _0x33d714 / _0x25d441;
    if (Math.abs(_0x157e9a - _0x537b3a) > 0.05) {
      _0x1799d0.push("canvas aspect " + _0x157e9a.toFixed(3) + " drifted from the plane's own " + _0x537b3a.toFixed(3) + " — the drawn art would stretch");
    }
    if (_0x36c317 < 60) {
      _0x1799d0.push("canvas resolution is not a meaningful supersample of the true on-screen size");
    }
  } else {
    _0x1799d0.push("canvas has a non-positive dimension");
  }
  if (!(_0x57a5d5 > 0) || !(_0x57a5d5 < _0x5c7f35) || !(_0x5c7f35 < 1)) {
    _0x1799d0.push("lift band is not ordered top < bottom inside (0,1)");
  }
  o(_0x1799d0, "visor accent", _0x5beb41);
  return _0x1799d0;
}