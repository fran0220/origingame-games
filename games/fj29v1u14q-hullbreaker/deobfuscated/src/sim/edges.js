import { scrollX as _0x17a59a } from "./time.js";
export let EDGE_L = 0;
export let EDGE_R = 0;
export function setEdges(_0x3bd93a, _0x180d5a) {
  EDGE_L = _0x3bd93a;
  EDGE_R = _0x180d5a;
}
export function sLeftEdge() {
  return _0x17a59a + EDGE_L;
}
export function sRightEdge() {
  return _0x17a59a + EDGE_R;
}