import { CONFIG as _0x1b2e89 } from "../config.js";
import { TRANSFORM_FIXTURE as _0x14ce53 } from "../pure/transform.js";
import { ACTIVE_FIXTURE as _0x7cc7e0, ACTIVE_SLICE as _0xc6a845, AIM_ASSIST_ENABLED as _0x2c17ca, AUTOBOUNCE_ENABLED as _0x4df204, CROUCH_ENABLED as _0x2ea9b7, FLOW_ENABLED as _0x1bdc72, HOOK_ENABLED as _0x1d4634, HOOK_INPUT as _0x229afb, HOUND_TRIAL_STAGE as _0x4dbbc0, IS_TRANSFORM_SLICE as _0x4e4592, IS_TRAVERSAL_SLICE as _0x29c1a2, MOMENTUM_ENABLED as _0x1fb97d, MORTAR_TRIAL_STAGE as _0x1a70ae, POLYP_TRIAL_STAGE as _0x1bcd2a, RUN_FALLBACK_ENABLED as _0x1f8b20, SCORE_ENABLED as _0x4adfec, SLICE_ENEMIES_ENABLED as _0x1bbe1f, SLICE_ENEMY_PLAN as _0x397d9b, VIEW_ID as _0x54ce49 } from "../mode.js";
import { momentumMeter as _0x44049d } from "../pure/momentum.js";
import { normalAscentAltAt as _0x31eb66 } from "../pure/ascent.js";
import { momentumDrive as _0x463e00 } from "../sim/pace.js";
import { scoreNotchGlyphs as _0x124c04 } from "../pure/score.js";
import { activeGateThreatCount as _0x489c36, wavePhase as _0x5c1556 } from "../pure/waves.js";
import { gameMs as _0x3ccac9, scrollX as _0x50261d, sliceStats as _0x1ec523 } from "../sim/time.js";
import { player as _0x1fee25, P as _0x2442c4 } from "../sim/player.js";
import { scoreCharge as _0x2534df, scoreNotchNow as _0x3a9bfc } from "../sim/score.js";
import { carriedGun as _0x9a6cf8, carriedGunLabel as _0x41ce49, currentGun as _0x16f56e, currentGunLabel as _0x141725, currentWeapon as _0x2faf54 } from "../sim/weapons.js";
import { mods as _0x2626ee } from "../sim/mods.js";
import { hostiles as _0x31e1e2, kills as _0x4013d6 } from "../sim/hostiles.js";
import { activeCorner as _0x357c16 } from "../sim/wavegate.js";
import { hookSnapshot as _0x3e9edd } from "../sim/hook.js";
import { flowSnapshot as _0x4eaf7d } from "../sim/flow.js";
import { activeTransformEvent as _0x394ee9, committedBand as _0x4986a6, lastCommit as _0x5ae802, transformAltitudeAt as _0x4c1f1b, transformBandLabel as _0x3b6a71 } from "../sim/transform.js";
import "./loot.js";
const Q = document.getElementById("hudTL");
const z = document.getElementById("hudTC");
const Z = document.getElementById("hudTR");
const _ = document.getElementById("hudBL");
const ee = document.getElementById("hudRigPanel");
const te = document.getElementById("hudObjectivePanel");
const ne = document.getElementById("hudRunPanel");
const se = document.getElementById("hudLives");
const ae = document.getElementById("hudHealthPips");
const oe = document.getElementById("hudHealthValue");
const me = document.getElementById("hudWeaponKey");
const re = document.getElementById("hudWeaponName");
const de = document.getElementById("hudWeaponOther");
const le = document.querySelector(".hud-power");
const ie = document.getElementById("hudOverdrive");
const Ee = document.getElementById("hudPowerState");
const ue = document.getElementById("hudPowerText");
const ce = document.getElementById("hudStatus");
const he = document.getElementById("hudObjectiveLabel");
const Re = document.getElementById("hudObjective");
const Ae = document.getElementById("hudRunLabel");
const Ie = document.getElementById("hudMetricA");
const Oe = document.getElementById("hudMetricALabel");
const ge = document.getElementById("hudMetricB");
const Se = document.getElementById("hudMetricBLabel");
const Le = document.getElementById("hudMetricC");
const Te = document.getElementById("hudMetricCLabel");
const pe = document.getElementById("hudRushRow");
const Me = document.getElementById("hudRushTrack");
const fe = document.getElementById("hudRushState");
const Ce = document.getElementById("hudRushText");
const Be = _0x4e4592 ? _0x7cc7e0.events.length : 0;
const Ne = _0x1d4634 ? _0x229afb === "auto" ? " · HOOK AUTO" : " · HOOK L/E" : "";
const ye = _0x1bdc72 ? " · CHAIN AIR MOVES FOR FLOW" : "";
const $e = _0x4df204 ? " · HOLD JUMP TO AUTOBOUNCE" : "";
_.innerHTML = _0x29c1a2 ? "MOVE WASD/ARROWS · JUMP SPACE · FIRE J/X · DROP DOWN+JUMP · RETRY R" + Ne + ye + $e + (_0x2ea9b7 ? " · CROUCH DOWN" : "") + (_0x2c17ca ? " · AIM ASSIST ON" : "") : _0x4e4592 ? "MOVE WASD/ARROWS · JUMP SPACE ×2 · FIRE J/X · RUN THROUGH OPEN PANEL · RETRY R" : "MOVE WASD/ARROWS · JUMP SPACE ×2 · FIRE J/X · AIM WITH MOVE · SWAP C · PAUSE ESC";
let Ue = null;
let He = null;
let We = null;
let Pe = false;
const be = [["rageUntil", "RAGE"], ["ghostUntil", "GHOST"], ["chronoUntil", "CHRONO"]];
const De = ["", "I", "II", "III"];
function xe(_0x334c68, _0x49822e) {
  const _0x3ac00f = String(_0x49822e);
  if (_0x334c68.textContent !== _0x3ac00f) {
    _0x334c68.textContent = _0x3ac00f;
  }
}
function je(_0x61a141, _0x290707, _0x302f13) {
  _0x61a141.style.setProperty("--meter", String(_0x290707 / 100));
  _0x61a141.setAttribute("aria-valuenow", String(_0x290707));
  _0x61a141.setAttribute("aria-valuetext", _0x290707 + "%" + (_0x302f13 ? " · " + _0x302f13 : ""));
}
function Fe(_0x1b967d, _0x262f90, _0xcad98f, _0x5234a) {
  xe(_0x1b967d, _0xcad98f);
  xe(_0x262f90, _0x5234a);
}
export function updateHUD() {
  const _0x2128d9 = !_0x7cc7e0 && _0x50261d > 30;
  if (_0x2128d9 !== Pe) {
    Pe = _0x2128d9;
    _.classList.toggle("gone", _0x2128d9);
  }
  const _0x24a799 = Math.max(0, _0x1fee25.hp);
  const _0x55fe27 = _0x16f56e.tier ? "·" + De[_0x16f56e.tier] : "";
  const _0x4d6b64 = globalThis.innerWidth <= 600;
  const _0x3854c2 = _0x141725(_0x16f56e.tier > 1 || _0x4d6b64);
  const _0x3dae51 = "▰".repeat(_0x24a799) + "▱".repeat(_0x2442c4.maxHealth - _0x24a799);
  const _0x14965d = Math.max(0, _0x1fee25.lives);
  let _0x72815f = "FIELD RIFLE // PRIMARY";
  let _0x63af89 = "";
  if (_0x9a6cf8) {
    const _0x5458b7 = _0x16f56e === _0x9a6cf8 ? "RIFLE" : _0x41ce49(true);
    _0x72815f = (_0x4d6b64 ? "C↔ " : "C SWAP // ") + _0x5458b7;
    _0x63af89 = (_0x4d6b64 ? " · C↔ " : " · C SWAP ↔ ") + _0x5458b7;
  }
  const _0x16389e = _0x4adfec ? _0x3a9bfc() : 0;
  const _0x247c25 = _0x4adfec ? Math.max(0, Math.min(100, Math.round(_0x2534df() / _0x1b2e89.score.max * 100))) : 0;
  const _0x554d40 = _0x124c04(_0x16389e);
  const _0x222867 = _0x16389e >= _0x1b2e89.score.notches.length ? "BREAKING" : _0x16389e > 0 ? "WARM" : "COLD";
  const _0x3bba03 = [];
  if (_0x1bdc72) {
    const _0x271721 = _0x4eaf7d();
    _0x3bba03.push("FLOW " + "▮".repeat(_0x271721.links) + "▯".repeat(_0x271721.max - _0x271721.links) + (_0x271721.links ? " ×" + _0x271721.mult.toFixed(2) : ""));
  }
  if (_0x1d4634) {
    const _0x55fa2c = _0x3e9edd();
    if (_0x55fa2c.phase !== "idle") {
      _0x3bba03.push("TETHER");
    } else if (_0x55fa2c.acquirable) {
      _0x3bba03.push("HOOK READY");
    }
  }
  for (const [_0x38f48f, _0x4292c1] of be) {
    if (_0x3ccac9 < _0x2626ee[_0x38f48f]) {
      _0x3bba03.push((_0x4d6b64 ? _0x4292c1.slice(0, 3) : _0x4292c1) + " " + Math.ceil((_0x2626ee[_0x38f48f] - _0x3ccac9) / 1000) + "s");
    }
  }
  if (_0x2626ee.lance) {
    _0x3bba03.push(_0x4d6b64 ? "LANCE" : "LANCE ARMING");
  }
  const _0x5a6f09 = _0x3bba03.join(" // ");
  let _0x3aa983 = "RIG " + _0x3dae51 + (_0x29c1a2 ? "" : " ×" + _0x14965d) + "\n[" + _0x2faf54 + _0x55fe27 + "] " + _0x3854c2 + _0x63af89;
  if (_0x4adfec) {
    _0x3aa983 += (_0x4d6b64 ? " · OD " : " · OVERDRIVE ") + _0x554d40 + (_0x16389e >= _0x1b2e89.score.notches.length ? _0x4d6b64 ? " BREAK" : " BREAKING" : "");
  }
  for (const _0x28e335 of _0x3bba03) {
    _0x3aa983 += " · " + _0x28e335;
  }
  const _0x4be4fa = _0x3aa983 + "\0" + _0x247c25 + "\0" + _0x222867;
  if (_0x4be4fa !== Ue) {
    Ue = _0x4be4fa;
    xe(Q, _0x3aa983);
    xe(se, _0x29c1a2 ? "RIG" : "×" + _0x14965d);
    xe(ae, _0x3dae51);
    ae.dataset.critical = _0x24a799 <= 1 ? "true" : "false";
    ee.dataset.health = _0x24a799 <= 1 ? "critical" : _0x24a799 < _0x2442c4.maxHealth ? "damaged" : "stable";
    xe(oe, _0x24a799 + "/" + _0x2442c4.maxHealth);
    xe(me, "[" + _0x2faf54 + _0x55fe27 + "]");
    xe(re, _0x3854c2);
    xe(de, _0x72815f);
    le.hidden = !_0x4adfec;
    je(ie, _0x247c25, _0x222867);
    ie.dataset.stage = _0x222867.toLowerCase();
    ee.dataset.overdrive = String(_0x247c25);
    ee.dataset.overdriveState = _0x222867.toLowerCase();
    xe(Ee, _0x222867);
    xe(ue, _0x4adfec ? "OVERDRIVE " + _0x247c25 + "% " + _0x554d40 + " " + _0x222867 : "");
    xe(ce, _0x5a6f09);
  }
  const _0x3007ac = _0x357c16();
  const _0x2ac56b = Number.isFinite(_0x1ec523.minEdgeMargin) ? Math.max(0, _0x1ec523.minEdgeMargin).toFixed(1) : "—";
  let _0x29613c;
  let _0xc2b92a;
  let _0x3ec61f;
  let _0x36868c;
  let _0x28233d;
  let _0x4ec944;
  let _0x5a74e0;
  if (_0x29c1a2) {
    _0x29613c = "ROUTE";
    _0xc2b92a = _0x1ec523.attempts;
    _0x3ec61f = "ATTEMPT";
    _0x36868c = _0x2ac56b;
    _0x28233d = _0x1ec523.setbacks ? "EDGE · " + _0x1ec523.setbacks + " FALLS" : "EDGE";
    _0x4ec944 = _0x4013d6;
    _0x5a74e0 = "KILLS";
  } else if (_0x4e4592) {
    _0x29613c = "BREACH";
    _0xc2b92a = Math.round(_0x4c1f1b(_0x1fee25.x) + _0x1fee25.y) + "m";
    _0x3ec61f = "ALT";
    _0x36868c = _0x4986a6 + "/" + Be;
    _0x28233d = "TURNS";
    _0x4ec944 = _0x4013d6;
    _0x5a74e0 = "KILLS";
  } else {
    _0x29613c = "ASCENT";
    _0xc2b92a = Math.round(_0x31eb66(_0x1fee25.x, _0x1b2e89.levelLength) + _0x1fee25.y) + "m";
    _0x3ec61f = "ALT";
    _0x36868c = _0x3007ac ? _0x3007ac.k + "/" + _0x1b2e89.path.faces : "CROWN";
    _0x28233d = "WAVE";
    _0x4ec944 = Math.floor(_0x50261d) + "m";
    _0x5a74e0 = "FORWARD";
  }
  const _0x9e31d4 = _0x1fb97d ? _0x463e00() : 0;
  const _0x5068ea = Math.max(0, Math.min(100, Math.round(_0x9e31d4 * 100)));
  const _0x432893 = _0x44049d(_0x9e31d4, _0x1b2e89.momentum);
  const _0x542e1e = _0x9e31d4 >= _0x1b2e89.momentum.tiers[_0x1b2e89.momentum.tiers.length - 1] ? "SURGE" : _0x9e31d4 >= _0x1b2e89.momentum.tiers[0] ? "RISING" : "STEADY";
  let _0x36391b = _0x29c1a2 ? "ATTEMPT " + _0x1ec523.attempts + " · EDGE " + _0x2ac56b + (_0x1ec523.setbacks ? " · FALLBACK " + _0x1ec523.setbacks : "") + (" · " + _0x4013d6 + " kills") : _0x4e4592 ? "ALT " + _0xc2b92a + " · " + _0x4986a6 + "/" + Be + " TURNS · " + _0x4013d6 + " kills" : "WAVE " + _0x36868c + " · ALT " + _0xc2b92a + " · " + _0x4ec944 + " FORWARD · " + _0x4013d6 + " KILLS";
  if (_0x1fb97d) {
    _0x36391b += " · RUSH " + _0x432893;
  }
  const _0x1f2203 = _0x36391b + "\0" + _0x5068ea + "\0" + _0x542e1e;
  if (_0x1f2203 !== We) {
    We = _0x1f2203;
    xe(Z, _0x36391b);
    xe(Ae, _0x29613c);
    Fe(Ie, Oe, _0xc2b92a, _0x3ec61f);
    Fe(ge, Se, _0x36868c, _0x28233d);
    Fe(Le, Te, _0x4ec944, _0x5a74e0);
    pe.hidden = !_0x1fb97d;
    je(Me, _0x5068ea, _0x542e1e);
    xe(fe, _0x542e1e === "STEADY" ? "" : _0x542e1e);
    xe(Ce, _0x1fb97d ? "RUSH " + _0x5068ea + "% " + _0x542e1e : "");
    ne.dataset.rush = _0x542e1e.toLowerCase();
    ne.dataset.rushValue = String(_0x5068ea);
  }
  let _0x256013 = function () {
    if (!_0x4e4592) {
      return "";
    }
    const _0x5eae6c = _0x394ee9();
    if (_0x5eae6c && _0x5eae6c.state === "armed") {
      return _0x5eae6c.armMsg;
    }
    if (_0x5eae6c && _0x5eae6c.state === "turning") {
      return _0x5eae6c.label;
    }
    if (_0x5ae802 && _0x3ccac9 - _0x5ae802.at < _0x1b2e89.transform.clearMsgMs) {
      return _0x5ae802.ev.label + " — " + _0x3b6a71() + " · MERIDIAN: " + (_0x4e4592 ? _0x14ce53.bands[_0x4986a6].shipState : "");
    }
    if (_0x3ccac9 - _0x1ec523.startedAt < 2400) {
      const _0x3c6534 = _0x54ce49 === "far" ? "" : " · VIEW " + _0x1b2e89.viewScales[_0x54ce49].label;
      return "TRANSFORMATION SLICE · " + _0x3b6a71() + _0x3c6534;
    }
    return "";
  }();
  const _0x4866e0 = _0xc6a845 && _0xc6a845.darePocket.bounds;
  if ((_0xc6a845 || _0x1f8b20) && _0x3ccac9 - _0x1ec523.lastSetbackAt < (_0xc6a845 ? _0xc6a845.fallback.messageMs : 1800)) {
    _0x256013 = "HULL FALLBACK · LOWER ROUTE · KEEP MOVING →";
  } else if (_0x4866e0 && _0x1fee25.x >= _0x4866e0.x0 && _0x1fee25.x < _0x4866e0.x1) {
    _0x256013 = _0x2faf54 === _0xc6a845.darePocket.reward.letter ? "H ACQUIRED · RETREAT LEFT ←" : "H WAGER → · EXIT LEFT ←";
  } else if (_0x29c1a2 && _0x3ccac9 - _0x1ec523.startedAt < 2400) {
    const _0x1b1345 = _0x54ce49 === "far" ? "" : " · VIEW " + _0x1b2e89.viewScales[_0x54ce49].label;
    _0x256013 = "TRAVERSAL SLICE · " + _0xc6a845.pace.label + (_0x4dbbc0 ? " + " + _0x4dbbc0.label : "") + (_0x1bcd2a ? " + " + _0x1bcd2a.label : "") + (_0x1a70ae ? " + " + _0x1a70ae.label : "") + _0x1b1345 + " · " + (_0x1bbe1f ? _0x397d9b.length + " HOSTILES" : "MOVEMENT ONLY");
  } else if (!_0x7cc7e0 && _0x3007ac && _0x3007ac.state === "idle") {
    const _0xa33745 = globalThis.innerHeight <= 520 && globalThis.innerWidth <= 980;
    _0x256013 = "WAVE " + _0x3007ac.k + "/" + _0x1b2e89.path.faces + " · " + _0x3007ac.phase + (_0x3007ac.primed ? " · INBOUND" : _0x3007ac.k === 1 && _0x50261d < 14 ? _0xa33745 ? " · CONTACT" : " · MERIDIAN HAS SEEN YOU" : "");
  } else if (_0x3007ac && _0x3007ac.state === "gate") {
    const _0x39ba99 = _0x489c36(_0x31e1e2, _0x3007ac.encounterKey, _0x3ccac9, _0x1b2e89.wasp.enterMs);
    _0x256013 = "WAVE " + _0x3007ac.k + "/" + _0x1b2e89.path.faces + " · " + _0x3007ac.phase + " · " + (_0x39ba99 === 1 ? "LAST SIGNAL · CLOSING" : _0x39ba99 + " HOSTILES");
  } else if (_0x3007ac && _0x3007ac.state === "approach") {
    _0x256013 = "WAVE " + _0x3007ac.k + "/" + _0x1b2e89.path.faces + " BROKEN · RUN TO THE TURN →";
  } else if (_0x3007ac && _0x3007ac.state === "turning" && _0x3ccac9 - _0x3007ac.tStart < _0x1b2e89.waves.clearMsgMs) {
    _0x256013 = _0x3007ac.k < _0x1b2e89.path.faces ? _0x3007ac.phase + " BROKEN · " + _0x5c1556(_0x3007ac.k + 1, _0x1b2e89) : "SCUTTLE COMPLETE · CROWN ACCESS OPEN";
  }
  if (_0x256013 !== He) {
    He = _0x256013;
    xe(Re, _0x256013);
    const _0x5ce122 = _0x256013.toUpperCase();
    const _0x52b5f3 = /FALLBACK|HOSTILE|INBOUND|WAGER|LOST/.test(_0x5ce122);
    const _0x380a89 = /BROKEN|COMPLETE|OPEN|ACQUIRED/.test(_0x5ce122);
    xe(z, _0x256013);
    te.dataset.tone = _0x52b5f3 ? "danger" : _0x380a89 ? "clear" : "steady";
    xe(he, /TRANSFORM|BREACH|TURN/.test(_0x5ce122) ? "HULL GEOMETRY" : /FALLBACK|ROUTE/.test(_0x5ce122) ? "ROUTE STATUS" : "MERIDIAN RESPONSE");
    te.classList.toggle("empty", !_0x256013);
  }
}
export function resetHudMessage() {
  z.textContent = "";
  Re.textContent = "";
  te.classList.add("empty");
  He = "";
}