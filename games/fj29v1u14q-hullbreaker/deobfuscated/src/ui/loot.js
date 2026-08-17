import { CONFIG as _0x2db42a } from "../config.js";
import { GUN_CHASSIS_NAMES as _0x4eb928, GUN_TRAITS as _0x1f21b6 } from "../pure/gunroll.js";
import { capsuleAtlasWeaponCell as _0x5d2420 } from "../render/capsules.js";
import { installView as _0x3a9cf1 } from "../sim/bridge.js";
const r = ["", "TUNED", "EXOTIC", "RELIC"];
const i = ["", "I", "II", "III"];
const l = Object.freeze({
  RAPID: "OVERCLOCK",
  HEAVY: "GRAVEMAKER",
  FORKED: "HYDRA",
  SEEKER: "BLOODHOUND",
  PHASE: "WRAITH",
  VOLATILE: "STARFIRE"
});
const p = Object.freeze({
  R: "RIVET",
  S: "BLOOM",
  L: "SPEAR",
  H: "ENGINE",
  F: "MAW"
});
const s = document.createElement("style");
s.textContent = "\n#lootReveal {\n  --loot-accent: #ff55dc;\n  --loot-hot: #fff0cf;\n  position: fixed;\n  z-index: 34;\n  top: clamp(78px, 10.5vh, 96px);\n  left: 50%;\n  width: min(310px, calc(100vw - 28px));\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 72px;\n  gap: 0 6px;\n  min-height: 78px;\n  padding: 8px 8px 8px 12px;\n  overflow: hidden;\n  color: #f7ead6;\n  background:\n    linear-gradient(112deg, transparent 0 55%, rgba(207,137,75,.07) 55% 56%, transparent 56%),\n    repeating-linear-gradient(136deg, transparent 0 18px, rgba(255,255,255,.012) 18px 19px),\n    linear-gradient(100deg, rgba(12,25,27,.985) 0%, rgba(23,34,34,.97) 70%, rgba(45,38,31,.94) 100%);\n  border: 1px solid rgba(194,139,82,.58);\n  border-left: 4px solid color-mix(in srgb, var(--loot-accent) 62%, #a9693d 38%);\n  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 12px 100%, 0 calc(100% - 12px));\n  box-shadow: 0 12px 34px rgba(0,0,0,.46), inset 0 1px rgba(255,234,203,.06);\n  font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace;\n  text-transform: uppercase;\n  pointer-events: none;\n  opacity: 0;\n  transform: translate3d(-50%,-10px,0) scale(.96);\n  contain: layout paint style;\n}\n#lootReveal::after {\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0; top: 0;\n  height: 2px;\n  background: linear-gradient(90deg, color-mix(in srgb, var(--loot-accent) 72%, #b96d3d), rgba(225,172,103,.55), transparent 82%);\n  opacity: .72;\n}\n#lootReveal::before {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  right: 11px; bottom: 10px;\n  width: 116px; height: 66px;\n  background:\n    radial-gradient(circle, rgba(225,174,112,.72) 0 1px, transparent 2px) right 3px top 3px / 6px 6px no-repeat,\n    radial-gradient(circle, rgba(225,174,112,.52) 0 1px, transparent 2px) left 3px bottom 3px / 6px 6px no-repeat,\n    linear-gradient(rgba(181,120,66,.42), rgba(181,120,66,.42)) right top / 48px 1px no-repeat,\n    linear-gradient(rgba(181,120,66,.28), rgba(181,120,66,.28)) left bottom / 35px 1px no-repeat;\n  opacity: .58;\n}\n#lootReveal.is-live { animation: loot-reveal 1.65s cubic-bezier(.18,.78,.2,1) both; }\n#lootReveal.tier-1 { --loot-accent: #ff55dc; }\n#lootReveal.tier-2 { --loot-accent: #ff9d45; --loot-hot: #fff0ce; }\n#lootReveal.tier-3 {\n  --loot-accent: #ffd77a;\n  --loot-hot: #fffaf0;\n  border-width: 1px 2px 1px 5px;\n  background:\n    linear-gradient(105deg, rgba(14,25,25,.99), rgba(39,37,32,.97) 64%, rgba(73,48,29,.92));\n  box-shadow: 0 14px 42px rgba(0,0,0,.54), inset 0 1px rgba(255,236,201,.08);\n}\n#lootReveal.tier-3.is-live { animation-duration: 1.9s; }\n/* A re-catch restores a known tool during live combat. Confirm it crisply, but\n   surrender the aiming lane sooner than a genuinely new roll. */\n#lootReveal.is-recatch.is-live { animation-duration: 1.25s; }\n/* State screens are a different composition, not another combat layer.  A\n   pickup immediately before pause/death/victory must never sit over the modal\n   copy, and returning to the title must never inherit a stale reward card. */\nbody.at-title #lootReveal,\nbody.at-victory #lootReveal,\n#overlay[data-state=\"paused\"] ~ #lootReveal,\n#overlay[data-state=\"game_over\"] ~ #lootReveal { visibility: hidden; }\n/* The objective occupies the same upper visual lane.  If a recovered gun\n   arrives during the finale, compose beneath it instead of overprinting it. */\nbody:has(#finale.on) #lootReveal { top: 108px; }\n.loot-copy { position: relative; z-index: 2; min-width: 0; align-self: center; }\n.loot-kicker { color: var(--loot-accent); font-size: 8px; font-weight: 850; letter-spacing: .13em; }\n.loot-name {\n  margin-top: 3px;\n  color: var(--loot-hot);\n  font-size: clamp(15px, 1.55vw, 19px);\n  line-height: 1.02;\n  font-weight: 950;\n  letter-spacing: .035em;\n}\n.loot-chassis { margin-top: 3px; color: rgba(225,226,214,.72); font-size: 8px; letter-spacing: .11em; }\n.loot-traits, .loot-stats { display: flex; flex-wrap: wrap; gap: 5px; }\n.loot-traits { margin-top: 6px; }\n.loot-stats { display: none; }\n.loot-chip {\n  padding: 3px 6px 3px 7px;\n  color: #fff7e7;\n  background: linear-gradient(180deg, rgba(115,78,48,.36), rgba(8,20,23,.72));\n  border: 1px solid color-mix(in srgb, var(--loot-accent) 38%, #765137 62%);\n  font-size: 8px;\n  line-height: 1;\n  font-weight: 800;\n  letter-spacing: .09em;\n}\n.loot-stat { color: rgba(232,231,213,.82); font-size: 9px; line-height: 1.15; letter-spacing: .08em; }\n.loot-stat.good { color: var(--loot-hot); }\n.loot-stat.trade { color: #d69d7d; }\n.loot-art {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  align-self: stretch;\n  min-width: 0;\n  margin: -3px -2px -3px 0;\n  border-left: 1px solid rgba(180,122,70,.26);\n  background:\n    repeating-linear-gradient(90deg, transparent 0 23px, rgba(201,139,81,.025) 23px 24px),\n    linear-gradient(90deg, rgba(7,19,22,.22), rgba(28,30,28,.62));\n}\n.loot-art::before,\n.loot-art::after {\n  content: \"\";\n  position: absolute;\n  left: 50%; top: 50%;\n  pointer-events: none;\n}\n.loot-art::before {\n  width: 70px; height: 52px;\n  background:\n    radial-gradient(circle, #d8a461 0 2px, #503622 2px 4px, transparent 4px) left 2px top 8px / 8px 8px no-repeat,\n    radial-gradient(circle, #d8a461 0 2px, #503622 2px 4px, transparent 4px) right 2px top 8px / 8px 8px no-repeat,\n    linear-gradient(#8d5b37, #8d5b37) center top 11px / calc(100% - 15px) 3px no-repeat,\n    linear-gradient(#5a3c2a, #5a3c2a) center bottom 9px / calc(100% - 25px) 5px no-repeat;\n  transform: translate(-50%, -50%);\n  filter: drop-shadow(0 3px 2px rgba(0,0,0,.48));\n  opacity: .78;\n}\n.loot-art::after {\n  width: 52px; height: 4px;\n  top: calc(50% + 27px);\n  transform: translate(-50%, -50%) skewX(-18deg);\n  background: repeating-linear-gradient(90deg, #4a3022 0 15px, #9b663d 15px 19px);\n  box-shadow: 0 3px 3px rgba(0,0,0,.5);\n  opacity: .82;\n}\n.loot-atlas-clip {\n  position: relative;\n  z-index: 2;\n  display: block;\n  width: 68px;\n  max-width: 98%;\n  aspect-ratio: 8 / 5;\n  overflow: hidden;\n  filter: drop-shadow(0 7px 7px rgba(0,0,0,.62));\n  transform: rotate(-2deg);\n}\n.loot-atlas-clip canvas {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.loot-art.no-art .loot-atlas-clip { display: none; }\n.loot-art-glyph {\n  position: relative;\n  z-index: 2;\n  display: none;\n  color: var(--loot-hot);\n  font-size: 42px;\n  line-height: 1;\n  font-weight: 950;\n}\n.loot-art.no-art .loot-art-glyph { display: block; }\n.loot-art-mark {\n  position: absolute;\n  z-index: 3;\n  top: 2px; right: 4px;\n  color: color-mix(in srgb, var(--loot-hot) 72%, transparent);\n  font-size: 8px;\n  font-weight: 900;\n  letter-spacing: .14em;\n}\n.loot-art-pips {\n  position: absolute;\n  z-index: 3;\n  right: 4px; bottom: 3px;\n  display: flex;\n  gap: 3px;\n}\n.loot-art-pips i {\n  display: block;\n  width: 14px; height: 3px;\n  background: var(--loot-hot);\n}\n.loot-scan {\n  position: absolute;\n  z-index: 5;\n  top: -38%; bottom: -38%;\n  left: -22px;\n  width: 12px;\n  transform: rotate(13deg);\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,.72), transparent);\n  opacity: 0;\n  pointer-events: none;\n}\n#lootReveal.is-live .loot-scan { animation: loot-scan 760ms 90ms ease-out both; }\n#lootReveal.is-live .loot-atlas-clip { animation: loot-art-lock 520ms 130ms cubic-bezier(.18,.78,.2,1) both; }\n@keyframes loot-reveal {\n  0%   { opacity: 0; transform: translate3d(-50%,-12px,0) scale(.94); filter: brightness(1.3); }\n  8%   { opacity: 1; transform: translate3d(-50%,3px,0) scale(1.01); }\n  14%  { transform: translate3d(-50%,0,0) scale(1); filter: brightness(1); }\n  72%  { opacity: 1; transform: translate3d(-50%,0,0) scale(1); }\n  100% { opacity: 0; transform: translate3d(-50%,-8px,0) scale(.985); }\n}\n@keyframes loot-scan {\n  0% { opacity: 0; transform: translateX(0) rotate(13deg); }\n  22% { opacity: .7; }\n  100% { opacity: 0; transform: translateX(500px) rotate(13deg); }\n}\n@keyframes loot-art-lock {\n  from { opacity: 0; transform: translateX(18px) rotate(-7deg) scale(.82); filter: brightness(1.35); }\n  to { opacity: 1; transform: rotate(-2deg) scale(1); }\n}\n@media (max-width: 600px) {\n  /* Portrait has one central message lane. The reward pulse carries the more\n     important new information for its brief lifetime, so do not stack the\n     wave ribbon behind it and obscure both. */\n  body:has(#lootReveal.is-live) #hudObjectivePanel {\n    opacity: 0;\n    transform: translate(-50%, -4px);\n  }\n  #lootReveal {\n    top: clamp(82px, 11vh, 104px);\n    width: min(270px, calc(100vw - 28px));\n    grid-template-columns: minmax(0, 1fr) 60px;\n    gap: 0 4px;\n    min-height: 72px;\n    padding: 7px 6px 7px 10px;\n  }\n  .loot-kicker { font-size: 7px; letter-spacing: .1em; }\n  .loot-name { font-size: clamp(13px, 3.8vw, 16px); }\n  .loot-chassis { font-size: 7px; letter-spacing: .08em; }\n  .loot-traits { margin-top: 5px; }\n  .loot-chip { font-size: 7px; padding: 2px 4px; }\n  .loot-stat { font-size: 8px; }\n  .loot-art::before { width: 58px; height: 46px; }\n  .loot-art::after { width: 42px; top: calc(50% + 24px); }\n  .loot-atlas-clip { width: 56px; }\n  .loot-art-glyph { font-size: 34px; }\n  .loot-art-mark { top: 1px; right: 2px; font-size: 7px; }\n  .loot-art-pips { right: 2px; bottom: 2px; }\n  .loot-art-pips i { width: 9px; }\n  body:has(#finale.on) #lootReveal { top: 126px; }\n}\n@media (prefers-reduced-motion: reduce) {\n  #lootReveal.is-live { animation-name: loot-reveal-reduced; animation-timing-function: ease; }\n  @keyframes loot-reveal-reduced {\n    0%, 100% { opacity: 0; transform: translate3d(-50%,0,0); }\n    8%, 72% { opacity: 1; transform: translate3d(-50%,0,0); }\n  }\n}";
document.head.append(s);
const c = document.createElement("section");
function d(_0x32b892, _0x1a25c0, _0x44e02b) {
  const _0x478b1a = document.createElement("div");
  _0x478b1a.className = _0x1a25c0;
  _0x478b1a.textContent = _0x44e02b;
  _0x32b892.append(_0x478b1a);
  return _0x478b1a;
}
function x(_0x53da2e) {
  return _0x1f21b6.filter(_0x1a470f => (_0x53da2e.counts?.[_0x1a470f] || 0) > 0);
}
c.id = "lootReveal";
c.setAttribute("role", "status");
c.setAttribute("aria-live", "polite");
c.setAttribute("aria-atomic", "true");
c.setAttribute("aria-hidden", "true");
document.body.append(c);
let g = null;
function h(_0x320c57, _0x3b5add, _0x56fe4a = null) {
  if (!_0x320c57 || !_0x3b5add || !_0x320c57.tier) {
    return;
  }
  const _0x18bbd9 = Math.max(1, Math.min(3, _0x320c57.tier));
  c.replaceChildren();
  c.className = "tier-" + _0x18bbd9 + (_0x56fe4a?.recatch ? " is-recatch" : "");
  const _0xa4c30a = d(c, "loot-copy", "");
  d(_0xa4c30a, "loot-kicker", (_0x56fe4a?.recatch ? "WEAPON RECOVERED" : "WEAPON ACQUIRED") + "  //  MARK " + i[_0x18bbd9] + " · " + r[_0x18bbd9]);
  const _0x3e74b5 = function (_0x1d2c4e) {
    const _0x3a9cbd = x(_0x1d2c4e);
    if (!_0x3a9cbd.length) {
      return _0x4eb928[_0x1d2c4e.letter] || "RIVETGUN";
    }
    const _0x4f49aa = _0x3a9cbd.slice().sort((_0x9141a4, _0x14a2fe) => (_0x1d2c4e.counts[_0x14a2fe] || 0) - (_0x1d2c4e.counts[_0x9141a4] || 0) || _0x1d2c4e.traits.indexOf(_0x9141a4) - _0x1d2c4e.traits.indexOf(_0x14a2fe));
    const _0x4c9623 = _0x4f49aa[0];
    const _0x314642 = _0x1d2c4e.counts[_0x4c9623] || 1;
    const _0x17ecfc = _0x314642 >= 3 ? "APEX " : _0x314642 === 2 ? "TWIN " : "";
    const _0x3d8d5d = _0x4f49aa.length > 1 ? l[_0x4f49aa[_0x4f49aa.length - 1]] + " " : "";
    return "" + _0x17ecfc + l[_0x4c9623] + " " + _0x3d8d5d + (p[_0x1d2c4e.letter] || "RIVET");
  }(_0x320c57);
  d(_0xa4c30a, "loot-name", _0x3e74b5);
  d(_0xa4c30a, "loot-chassis", "[" + _0x320c57.letter + "] " + (_0x4eb928[_0x320c57.letter] || "RIVETGUN") + " CHASSIS");
  const _0x1b76ba = x(_0x320c57);
  const _0x367c0e = d(_0xa4c30a, "loot-traits", "");
  for (const _0x59f786 of _0x1b76ba.slice(0, 2)) {
    const _0x5384f5 = _0x320c57.counts[_0x59f786] || 1;
    d(_0x367c0e, "loot-chip", "" + _0x59f786 + (_0x5384f5 > 1 ? " ×" + _0x5384f5 : ""));
  }
  if (_0x1b76ba.length > 2) {
    d(_0x367c0e, "loot-chip", "+" + (_0x1b76ba.length - 2));
  }
  const _0x53dddb = d(_0xa4c30a, "loot-stats", "");
  const _0x46c28f = function (_0x41940e, _0x3e87b8) {
    const _0x691995 = _0x2db42a.weapons[_0x41940e.letter] || _0x2db42a.weapons.R;
    const _0x1045cc = [];
    if (_0x41940e.letter === "F") {
      _0x1045cc.push(["DECK HIT → GROUND-FIRE", "good"]);
    }
    const _0x58ea4f = Math.round((_0x691995.fireRateMs / _0x3e87b8.fireRateMs - 1) * 100);
    if (_0x58ea4f > 0) {
      _0x1045cc.push(["+" + _0x58ea4f + "% FIRE RATE", "good"]);
    }
    const _0x1ae777 = _0x3e87b8.damage - _0x691995.damage;
    if (_0x1ae777 > 0) {
      _0x1045cc.push(["+" + _0x1ae777 + " DAMAGE", "good"]);
    }
    const _0x88d877 = _0x3e87b8.count - (_0x691995.count || 1);
    if (_0x88d877 > 0) {
      _0x1045cc.push(["+" + _0x88d877 + " PROJECTILE" + (_0x88d877 > 1 ? "S" : ""), "good"]);
    }
    if ((_0x41940e.counts.SEEKER || 0) > 0) {
      _0x1045cc.push(["TRACK " + _0x3e87b8.seekRange.toFixed(1) + "T", "good"]);
    }
    if ((_0x41940e.counts.PHASE || 0) > 0) {
      _0x1045cc.push(["PENETRATES " + (_0x3e87b8.pierceBudget + 1), "good"]);
    }
    if ((_0x41940e.counts.VOLATILE || 0) > 0) {
      _0x1045cc.push(["BLAST " + _0x3e87b8.volatileRadius.toFixed(1) + "T", "good"]);
    }
    const _0x3275cd = Math.round((1 - _0x3e87b8.speed / _0x691995.speed) * 100);
    if (_0x3275cd > 0) {
      _0x1045cc.push(["−" + _0x3275cd + "% SHOT SPEED", "trade"]);
    }
    return _0x1045cc;
  }(_0x320c57, _0x3b5add);
  for (const [_0x5ee4f0, _0x17342c] of _0x46c28f) {
    d(_0x53dddb, "loot-stat " + _0x17342c, _0x5ee4f0);
  }
  const _0x188407 = d(c, "loot-art", "");
  const _0x376432 = _0x5d2420(_0x320c57.letter);
  if (!_0x376432) {
    _0x188407.classList.add("no-art");
  }
  const _0x394062 = d(_0x188407, "loot-atlas-clip", "");
  if (_0x376432) {
    const _0x257782 = document.createElement("canvas");
    _0x257782.width = _0x376432.sw;
    _0x257782.height = _0x376432.sh;
    const _0x569277 = _0x257782.getContext("2d", {
      alpha: true
    });
    if (_0x569277) {
      _0x569277.drawImage(_0x376432.image, _0x376432.sx, _0x376432.sy, _0x376432.sw, _0x376432.sh, 0, 0, _0x376432.sw, _0x376432.sh);
      _0x394062.append(_0x257782);
    } else {
      _0x188407.classList.add("no-art");
    }
  }
  d(_0x188407, "loot-art-glyph", _0x320c57.letter || "R");
  d(_0x188407, "loot-art-mark", "MK " + i[_0x18bbd9]);
  const _0x45822d = d(_0x188407, "loot-art-pips", "");
  for (let _0x411451 = 0; _0x411451 < _0x18bbd9; _0x411451++) {
    _0x45822d.append(document.createElement("i"));
  }
  d(c, "loot-scan", "");
  c.setAttribute("aria-hidden", "false");
  c.offsetWidth;
  c.classList.add("is-live");
  g = {
    id: _0x320c57.id,
    tier: _0x18bbd9,
    name: _0x3e74b5,
    chassis: _0x4eb928[_0x320c57.letter],
    traits: x(_0x320c57).map(_0x371c2a => [_0x371c2a, _0x320c57.counts[_0x371c2a]]),
    stats: _0x46c28f.map(([_0x50ed23]) => _0x50ed23),
    recatch: !!_0x56fe4a?.recatch
  };
}
c.addEventListener("animationend", _0x503119 => {
  if (_0x503119.target === c) {
    c.classList.remove("is-live");
    c.setAttribute("aria-hidden", "true");
  }
});
export function lootRevealSnapshot() {
  const _0x14e6f2 = c.getBoundingClientRect();
  return {
    active: c.classList.contains("is-live"),
    ariaHidden: c.getAttribute("aria-hidden"),
    rect: {
      left: _0x14e6f2.left,
      top: _0x14e6f2.top,
      right: _0x14e6f2.right,
      bottom: _0x14e6f2.bottom,
      width: _0x14e6f2.width,
      height: _0x14e6f2.height
    },
    last: g
  };
}
if (typeof window != "undefined") {
  window.__HB_LOOT_REVEAL = lootRevealSnapshot;
}
let f = false;
export function initLootView() {
  return !f && (_0x3a9cf1({
    loot: {
      acquired: h
    }
  }), f = true, true);
}