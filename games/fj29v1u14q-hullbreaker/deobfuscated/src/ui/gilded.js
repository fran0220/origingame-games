const e = document.createElement("style");
e.textContent = "\n#gildedToast {\n  position: fixed;\n  z-index: 34;\n  left: 50%;\n  top: clamp(64px, 12vh, 110px);\n  transform: translate3d(-50%, -18px, 0);\n  padding: 10px 22px 11px;\n  color: #ffe9bb;\n  background:\n    linear-gradient(100deg, rgba(24,20,12,.96), rgba(46,34,16,.94) 60%, rgba(24,20,12,.96));\n  border: 1px solid rgba(255,196,94,.55);\n  border-top: 2px solid rgba(255,214,130,.8);\n  clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 100%, 0 100%);\n  box-shadow: 0 10px 30px rgba(0,0,0,.5), 0 0 26px rgba(255,196,94,.18);\n  font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: .18em;\n  font-size: 13px;\n  font-weight: 850;\n  pointer-events: none;\n  opacity: 0;\n  contain: layout paint style;\n}\n#gildedToast small {\n  display: block;\n  margin-top: 3px;\n  color: rgba(255,233,187,.62);\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: .22em;\n}\n#gildedToast.is-live { animation: gilded-toast 2.6s cubic-bezier(.18,.78,.2,1) both; }\n@keyframes gilded-toast {\n  0%   { opacity: 0; transform: translate3d(-50%, -18px, 0); filter: brightness(1.5); }\n  8%   { opacity: 1; transform: translate3d(-50%, 2px, 0); }\n  13%  { transform: translate3d(-50%, 0, 0); filter: brightness(1); }\n  78%  { opacity: 1; transform: translate3d(-50%, 0, 0); }\n  100% { opacity: 0; transform: translate3d(-50%, -8px, 0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  #gildedToast.is-live { animation: gilded-toast-reduced 2.6s ease both; }\n  @keyframes gilded-toast-reduced {\n    0%, 100% { opacity: 0; }\n    10%, 80% { opacity: 1; }\n  }\n}";
document.head.append(e);
const t = document.createElement("div");
t.id = "gildedToast";
t.setAttribute("role", "status");
t.setAttribute("aria-live", "polite");
t.setAttribute("aria-hidden", "true");
document.body.append(t);
export function announceGilded(_0x5da542) {
  t.replaceChildren();
  t.append(document.createTextNode(_0x5da542 ? "✦ GILDED CHASSIS ENGAGED ✦" : "GILDED CHASSIS RELEASED"));
  const _0x3291a4 = document.createElement("small");
  _0x3291a4.textContent = _0x5da542 ? "the meridian recognizes its own. probably." : "back to standard-issue salvage grey";
  t.append(_0x3291a4);
  t.setAttribute("aria-hidden", "false");
  t.classList.remove("is-live");
  t.offsetWidth;
  t.classList.add("is-live");
}
t.addEventListener("animationend", _0x3ab27d => {
  if (_0x3ab27d.target === t) {
    t.classList.remove("is-live");
    t.setAttribute("aria-hidden", "true");
  }
});