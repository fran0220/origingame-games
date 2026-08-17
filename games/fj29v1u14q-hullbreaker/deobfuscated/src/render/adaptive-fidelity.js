import { ADAPTIVE_FIDELITY_TUNE as _0x3d205e, createAdaptiveFidelityController as _0x205036 } from "../pure/adaptive-fidelity.js";
import { QUERY as _0x1147bb } from "../mode.js";
import { setAdaptiveShadowMapSize as _0x23fe65 } from "./lights.js";
import { setAdaptiveBloomEnabled as _0x37df84, syncPostSize as _0x3a0d15 } from "./post.js";
import { rendererResourceSnapshot as _0x39a24a, setAdaptiveRenderScale as _0x10b008 } from "./scene.js";
export const ADAPTIVE_FIDELITY_ON = _0x1147bb.get("adaptive") === "1";
const p = _0x205036();
const a = [];
function f(_0x16c397) {
  if (_0x10b008(_0x16c397.level >= 1 ? 0.8 : 1)) {
    _0x3a0d15();
  }
  _0x37df84(_0x16c397.level < 2);
  _0x23fe65(_0x16c397.level >= 3 ? 1024 : 2048);
  if (_0x16c397.level === 0) {
    return "restore-full";
  } else if (_0x16c397.level === 1) {
    return "supersample-0.80";
  } else if (_0x16c397.level === 2) {
    return "bloom-bypass";
  } else {
    return "shadow-1024";
  }
}
export function sampleAdaptiveFidelity(_0x289fbd) {
  if (!ADAPTIVE_FIDELITY_ON) {
    return null;
  }
  const _0x42aca9 = p.sample(_0x289fbd);
  if (!_0x42aca9) {
    return null;
  }
  const _0x36ddc0 = Object.freeze({
    ..._0x42aca9,
    action: f(_0x42aca9)
  });
  a.push(_0x36ddc0);
  console.info("HULLBREAKER adaptive fidelity " + JSON.stringify(_0x36ddc0));
  return _0x36ddc0;
}
export function adaptiveFidelitySnapshot() {
  return {
    enabled: ADAPTIVE_FIDELITY_ON,
    tune: {
      ..._0x3d205e
    },
    ...p.snapshot(),
    history: [...a],
    resources: _0x39a24a()
  };
}