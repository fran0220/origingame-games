export const keys = {
  left: false,
  right: false,
  up: false,
  down: false,
  jump: false,
  fire: false,
  strafe: false,
  swap: false,
  hook: false
};
export let jumpBufferedUntil = 0;
export let hookBufferedUntil = 0;
export let swapBufferedUntil = 0;
export function bufferJumpUntil(_0x3c33ec) {
  jumpBufferedUntil = _0x3c33ec;
}
export function clearJumpBuffer() {
  jumpBufferedUntil = 0;
}
export function bufferHookUntil(_0x392b3a) {
  hookBufferedUntil = _0x392b3a;
}
export function clearHookBuffer() {
  hookBufferedUntil = 0;
}
export function bufferSwapUntil(_0x29340d) {
  swapBufferedUntil = _0x29340d;
}
export function clearSwapBuffer() {
  swapBufferedUntil = 0;
}
export function releaseAllKeys() {
  for (const _0x24d043 in keys) {
    keys[_0x24d043] = false;
  }
}