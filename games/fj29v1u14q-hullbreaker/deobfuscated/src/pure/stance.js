export function crouchStance(_0x473942, _0x2bd11b) {
  if (!!_0x473942.enabled && !!_0x473942.grounded && !!_0x473942.down && !_0x473942.jumpBuffered && _0x473942.traversalState === "free") {
    return {
      crouched: true,
      planted: true,
      height: _0x2bd11b.height,
      muzzleY: _0x2bd11b.muzzleY
    };
  } else {
    return {
      crouched: false,
      planted: false,
      height: _0x473942.standHeight,
      muzzleY: _0x473942.standMuzzleY
    };
  }
}