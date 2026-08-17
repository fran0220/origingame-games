const t = document.getElementById("tint");
let n = "transparent";
export function setTint(_0x4715d5) {
  if (_0x4715d5 !== n) {
    n = _0x4715d5;
    t.style.background = _0x4715d5;
  }
}
export function resetTint() {
  t.style.background = "transparent";
  n = "transparent";
}