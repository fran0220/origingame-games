import { CONFIG as _0x41ba5a } from "../config.js";
import { ACTIVE_SLICE as _0x35730b, FLOW_ENABLED as _0x3d8bd3 } from "../mode.js";
import { flowAddLink as _0x3239cd, flowFreshState as _0x124252, flowLaunchMultFor as _0x349d36, flowMult as _0x55589a, flowSpeedMult as _0x4f00d0, flowStepState as _0x288579 } from "../pure/flow.js";
import { gameMs as _0x453f4a } from "./time.js";
const a = _0x3d8bd3 && _0x35730b ? _0x35730b.flow : null;
const u = _0x35730b && _0x35730b.movement.airJumps !== undefined ? _0x35730b.movement.airJumps : _0x41ba5a.player.airJumps;
let f = _0x124252();
const m = {
  links: 0,
  peakLinks: 0,
  breaks: 0
};
export function flowLaunch(_0x50229f, _0x146db0, _0x244706, _0x321bbc) {
  if (a) {
    if (a.linkVerbs.indexOf(_0x146db0) < 0) {
      return _0x244706;
    } else {
      f = _0x3239cd(f, _0x453f4a, a);
      m.links++;
      if (f.links > m.peakLinks) {
        m.peakLinks = f.links;
      }
      if (a.refundAirJump) {
        _0x50229f.airJumpsLeft = u;
      }
      return _0x349d36(_0x244706, f.links, a, _0x321bbc);
    }
  } else {
    return _0x244706;
  }
}
export function flowSpeedNow() {
  if (a) {
    return _0x4f00d0(f.links, a);
  } else {
    return 1;
  }
}
export function flowStep(_0x5ea1c9, _0x6461b0) {
  if (!a) {
    return;
  }
  const _0x83f050 = f.links;
  f = _0x288579(f, {
    dtMs: _0x5ea1c9 * 1000,
    grounded: _0x6461b0,
    now: _0x453f4a
  }, a);
  if (_0x83f050 > 0 && f.links === 0) {
    m.breaks++;
  }
}
export function flowBreak() {
  if (a) {
    if (f.links > 0) {
      m.breaks++;
    }
    f = _0x124252();
  }
}
export function flowSnapshot() {
  return {
    enabled: !!a,
    links: a ? f.links : 0,
    max: a ? a.max : 0,
    mult: a ? _0x55589a(f.links, a) : 1,
    speedMult: flowSpeedNow(),
    peakLinks: m.peakLinks,
    totalLinks: m.links,
    breaks: m.breaks,
    groundedMs: Math.round(f.groundedMs)
  };
}
export function resetFlow() {
  f = _0x124252();
  m.links = 0;
  m.peakLinks = 0;
  m.breaks = 0;
}