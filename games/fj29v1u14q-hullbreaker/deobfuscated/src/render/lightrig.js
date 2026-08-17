import { CONFIG as _0x32dee6, LIGHT_RIG as _0x5f54a4 } from "../config.js";
import { DEG as _0x4ed2e4 } from "../pure/path.js";
import { QUERY as _0xe6938 } from "../mode.js";
import { PAL as _0x515256 } from "./palette.js";
const n = {
  role: "key",
  type: "directional",
  frame: "view",
  color: "sun",
  intensity: _0x5f54a4.key.intensity,
  azimuthDeg: _0x5f54a4.key.azimuthDeg,
  elevationDeg: _0x5f54a4.key.elevationDeg,
  casts: true
};
const a = {
  role: "fill",
  type: "hemisphere",
  frame: "view",
  sky: "hemiSky",
  ground: "hemiGround",
  intensity: _0x5f54a4.fill.intensity,
  azimuthDeg: _0x5f54a4.fill.azimuthDeg,
  elevationDeg: _0x5f54a4.fill.elevationDeg,
  casts: false
};
const s = {
  role: "rim",
  type: "directional",
  frame: "view",
  color: "hemiSky",
  intensity: _0x5f54a4.rim.intensity,
  azimuthDeg: _0x5f54a4.rim.azimuthDeg,
  elevationDeg: _0x5f54a4.rim.elevationDeg,
  casts: false
};
const l = {
  ...n,
  intensity: _0x5f54a4.bright.keyIntensity
};
export const LIGHT_RIGS = {
  rig: {
    id: "rig",
    label: "RIG",
    exposure: _0x5f54a4.exposure,
    shadows: true,
    lights: [a, n, s]
  },
  bright: {
    id: "bright",
    label: "RIG, BRIGHTER DOSE",
    exposure: _0x5f54a4.bright.exposure,
    shadows: true,
    lights: [a, l, s]
  },
  noshadow: {
    id: "noshadow",
    label: "RIG WITHOUT SHADOWS",
    exposure: _0x5f54a4.exposure,
    shadows: false,
    lights: [a, n, s]
  },
  flat: {
    id: "flat",
    label: "FLAT (pre-T-047)",
    exposure: 1,
    shadows: false,
    lights: [{
      role: "fill",
      type: "hemisphere",
      frame: "world",
      sky: "hemiSky",
      ground: "hemiGround",
      intensity: 1.1,
      worldPosition: [0, 1, 0],
      casts: false
    }, {
      role: "key",
      type: "directional",
      frame: "world",
      color: "sun",
      intensity: 1.6,
      worldPosition: [6, 12, 8],
      casts: false
    }]
  }
};
export function resolveLightRigId(_0x221dce) {
  if (Object.prototype.hasOwnProperty.call(LIGHT_RIGS, _0x221dce) && typeof _0x221dce == "string") {
    return _0x221dce;
  } else {
    return "rig";
  }
}
export const LIGHT_RIG_ID = resolveLightRigId(_0xe6938.get("light"));
export const ACTIVE_RIG = LIGHT_RIGS[LIGHT_RIG_ID];
export function lightVector(_0x494c51, _0x13c2b6 = 0, _0x590bf7 = {
  x: 0,
  y: 0,
  z: 0
}) {
  if (_0x494c51.frame === "world") {
    const [_0x23ff0b, _0x239da9, _0x5dc469] = _0x494c51.worldPosition;
    const _0x651963 = Math.hypot(_0x23ff0b, _0x239da9, _0x5dc469) || 1;
    _0x590bf7.x = _0x23ff0b / _0x651963;
    _0x590bf7.y = _0x239da9 / _0x651963;
    _0x590bf7.z = _0x5dc469 / _0x651963;
    return _0x590bf7;
  }
  const _0x5f062b = _0x494c51.azimuthDeg * _0x4ed2e4;
  const _0x33f78f = _0x494c51.elevationDeg * _0x4ed2e4;
  const _0x2da1eb = Math.cos(_0x33f78f);
  const _0x17a8d4 = Math.cos(_0x13c2b6);
  const _0x27d6af = -Math.sin(_0x13c2b6);
  const _0x2bd66e = Math.sin(_0x13c2b6);
  const _0x56d40 = Math.cos(_0x13c2b6);
  _0x590bf7.x = _0x2da1eb * (_0x17a8d4 * Math.cos(_0x5f062b) + _0x2bd66e * Math.sin(_0x5f062b));
  _0x590bf7.y = Math.sin(_0x33f78f);
  _0x590bf7.z = _0x2da1eb * (_0x27d6af * Math.cos(_0x5f062b) + _0x56d40 * Math.sin(_0x5f062b));
  return _0x590bf7;
}
export function surfaceNormal(_0x2709dc, _0x13cdf3 = 0, _0x356ad6 = {
  x: 0,
  y: 0,
  z: 0
}) {
  const _0x300a74 = Math.cos(_0x13cdf3);
  const _0x2ea5b0 = -Math.sin(_0x13cdf3);
  const _0x353254 = Math.sin(_0x13cdf3);
  const _0x558da8 = Math.cos(_0x13cdf3);
  if (_0x2709dc === "top") {
    _0x356ad6.x = 0;
    _0x356ad6.y = 1;
    _0x356ad6.z = 0;
  } else if (_0x2709dc === "under") {
    _0x356ad6.x = 0;
    _0x356ad6.y = -1;
    _0x356ad6.z = 0;
  } else if (_0x2709dc === "camera") {
    _0x356ad6.x = _0x353254;
    _0x356ad6.y = 0;
    _0x356ad6.z = _0x558da8;
  } else if (_0x2709dc === "travel") {
    _0x356ad6.x = _0x300a74;
    _0x356ad6.y = 0;
    _0x356ad6.z = _0x2ea5b0;
  } else {
    if (_0x2709dc !== "antiTravel") {
      throw new Error("unknown surface kind: " + _0x2709dc);
    }
    _0x356ad6.x = -_0x300a74;
    _0x356ad6.y = 0;
    _0x356ad6.z = -_0x2ea5b0;
  }
  return _0x356ad6;
}
export const SURFACE_KINDS = ["top", "camera", "travel", "antiTravel", "under"];
function c(_0x4de522) {
  if (_0x4de522 <= 0.04045) {
    return _0x4de522 / 12.92;
  } else {
    return Math.pow((_0x4de522 + 0.055) / 1.055, 2.4);
  }
}
export function tokenLuminance(_0x5f2896) {
  return c((_0x5f2896 >> 16 & 255) / 255) * 0.2126 + c((_0x5f2896 >> 8 & 255) / 255) * 0.7152 + c((_0x5f2896 & 255) / 255) * 0.0722;
}
const h = {
  x: 0,
  y: 0,
  z: 0
};
const y = {
  x: 0,
  y: 0,
  z: 0
};
export function rigIrradiance(_0x5e6a7a, _0x4dae7f, _0x58f348 = 0, _0x26b281 = _0x515256) {
  const _0x185bbb = typeof _0x5e6a7a == "string" ? LIGHT_RIGS[resolveLightRigId(_0x5e6a7a)] : _0x5e6a7a;
  surfaceNormal(_0x4dae7f, _0x58f348, y);
  let _0x12aa20 = 0;
  for (const _0xda961e of _0x185bbb.lights) {
    lightVector(_0xda961e, _0x58f348, h);
    if (_0xda961e.type === "hemisphere") {
      const _0xe93681 = 0.5 + (y.x * h.x + y.y * h.y + y.z * h.z) * 0.5;
      const _0x186e5e = tokenLuminance(_0x26b281[_0xda961e.sky]);
      const _0x5b4757 = tokenLuminance(_0x26b281[_0xda961e.ground]);
      _0x12aa20 += (_0x5b4757 + (_0x186e5e - _0x5b4757) * _0xe93681) * _0xda961e.intensity / Math.PI;
    } else {
      const _0x44c376 = y.x * h.x + y.y * h.y + y.z * h.z;
      if (_0x44c376 > 0) {
        _0x12aa20 += tokenLuminance(_0x26b281[_0xda961e.color]) * _0xda961e.intensity * _0x44c376 / Math.PI;
      }
    }
  }
  return _0x12aa20;
}
export function shadowPolicy(_0xb0698f, _0x24bfe8) {
  if (_0x24bfe8 === "none") {
    return {
      cast: false,
      receive: false,
      why: "override"
    };
  }
  if (_0x24bfe8 === "cast") {
    return {
      cast: true,
      receive: false,
      why: "override"
    };
  }
  if (_0x24bfe8 === "receive") {
    return {
      cast: false,
      receive: true,
      why: "override"
    };
  }
  if (_0x24bfe8 === "both") {
    return {
      cast: true,
      receive: true,
      why: "override"
    };
  }
  const _0x4c1173 = Array.isArray(_0xb0698f) ? _0xb0698f : [_0xb0698f];
  if (!_0x4c1173.length || _0x4c1173.some(_0x5dc8d0 => !_0x5dc8d0)) {
    return {
      cast: false,
      receive: false,
      why: "no-material"
    };
  } else if (_0x4c1173.every(_0x256366 => _0x256366.lit)) {
    if (_0x4c1173.every(_0x12c7f7 => _0x12c7f7.opaque)) {
      return {
        cast: true,
        receive: true,
        why: "lit-solid"
      };
    } else {
      return {
        cast: false,
        receive: true,
        why: "lit-transparent"
      };
    }
  } else {
    return {
      cast: false,
      receive: false,
      why: "unlit"
    };
  }
}
export function shadowTexelTiles(_0x1cbfde = _0x5f54a4.shadow) {
  return _0x1cbfde.halfWidth * 2 / _0x1cbfde.mapSize;
}
export function playBandHalfWidthTiles(_0x409702, _0x45be34 = "far") {
  const _0x2c2473 = _0x32dee6.viewScales[_0x45be34] || _0x32dee6.viewScales.far;
  return _0x32dee6.camera.z * _0x2c2473.depthMult * Math.tan(_0x32dee6.camera.fov * _0x4ed2e4 / 2) * _0x409702;
}
export function playBandHalfHeightTiles(_0x4ace50 = "far") {
  const _0x5f8e8d = _0x32dee6.viewScales[_0x4ace50] || _0x32dee6.viewScales.far;
  return _0x32dee6.camera.z * _0x5f8e8d.depthMult * Math.tan(_0x32dee6.camera.fov * _0x4ed2e4 / 2);
}
export function snapToTexel(_0x3324e7, _0x360d52) {
  if (_0x360d52 > 0) {
    return Math.round(_0x3324e7 / _0x360d52) * _0x360d52;
  } else {
    return _0x3324e7;
  }
}