import { CONFIG as _0x579de1 } from "../config.js";
import { BEND_S as _0x5e22c2, HALT_S as _0x230971 } from "../pure/path.js";
import { cornerApproachScrollTarget as _0x1760b0, cornerScrollVel as _0x335ffe, cornerEventTotalMs as _0xbb9c2, gatePreludeReady as _0x4ac9a9 } from "../pure/waves.js";
import { traversalFollowTarget as _0x5cdb37, traversalMarginCapScroll as _0x324d42 } from "../pure/traversal.js";
import { ACTIVE_FIXTURE as _0x30c0a0, ACTIVE_SLICE as _0xf9ff15, IS_TRANSFORM_SLICE as _0x5081c3, MOMENTUM_ENABLED as _0x222b4b } from "../mode.js";
import { gameMs as _0x41ec4, scrollX as _0x19a4fe, setScrollX as _0x519a19, sliceStats as _0x1b6dee } from "./time.js";
import { EDGE_R as _0x4edd65, sLeftEdge as _0x34f6d5, sRightEdge as _0x3287ff } from "./edges.js";
import { activeScrollEnd as _0x172490, activeScrollSpeed as _0x260f22 } from "./level.js";
import { hostiles as _0x26a61f, kills as _0xc9a83, removeHostile as _0x4e2792 } from "./hostiles.js";
import { updateMomentum as _0x27fce2, updatePace as _0x1f2892 } from "./pace.js";
import { player as _0x37bf99 } from "./player.js";
import { activeCorner as _0xd8cf4b, armGate as _0x2f31d1, cornerBusy as _0xe541df, finishCorner as _0x5d99c4, primeGateWave as _0x1e7ad9, updateZipper as _0x4ec814 } from "./wavegate.js";
import { updateTransformScroll as _0x1a8716 } from "./transform.js";
export function updateScroll(_0xdcdd63) {
  if (_0x5081c3) {
    if (_0x1a8716(_0xdcdd63, _0x37bf99)) {
      for (let _0x3d308e = _0x26a61f.length - 1; _0x3d308e >= 0; _0x3d308e--) {
        _0x4e2792(_0x3d308e, true);
      }
    }
    return;
  }
  if (_0xf9ff15) {
    const _0x1b47c1 = _0xf9ff15.darePocket.bounds;
    _0x1f2892(_0xdcdd63, {
      marginTiles: _0x37bf99.x - _0x37bf99.hw - _0x34f6d5(),
      elapsedMs: _0x41ec4 - _0x1b6dee.startedAt,
      inPocket: _0x37bf99.x >= _0x1b47c1.x0 && _0x37bf99.x < _0x1b47c1.x1
    });
  }
  const _0x294a7e = _0xd8cf4b();
  if (_0x222b4b) {
    const _0xf3be16 = _0x294a7e ? Math.min(_0x172490(), _0x230971[_0x294a7e.k - 1]) : _0x172490();
    _0x27fce2(_0xdcdd63, {
      playerLeft: _0x37bf99.x - _0x37bf99.hw,
      edgeLeft: _0x34f6d5(),
      edgeRight: _0x3287ff(),
      kills: _0xc9a83,
      hp: _0x37bf99.hp,
      lives: _0x37bf99.lives,
      nowMs: _0x41ec4,
      held: _0xe541df() || _0x19a4fe >= _0xf3be16 - 0.000001
    });
  }
  if (_0x294a7e && _0x294a7e.state === "turning") {
    const _0x1d8b59 = _0x41ec4 - _0x294a7e.tStart;
    _0x519a19(Math.min(_0x19a4fe + _0x335ffe(_0x1d8b59, _0x579de1) * _0xdcdd63, _0x172490()));
    _0x4ec814(_0x294a7e, _0x1d8b59);
    if (_0x1d8b59 >= _0xbb9c2(_0x579de1)) {
      _0x5d99c4(_0x294a7e);
    }
  } else {
    let _0x5536e9 = _0x172490();
    if (_0x294a7e) {
      const _0x2b6ad7 = _0x1760b0(_0x294a7e.state, _0x230971[_0x294a7e.k - 1], _0x5e22c2[_0x294a7e.k - 1], _0x4edd65, _0x579de1.edges.margin, _0x37bf99.hw);
      _0x5536e9 = Math.min(_0x5536e9, _0x2b6ad7);
    }
    let _0x28628c = _0x19a4fe + _0x260f22() * _0xdcdd63;
    if (_0x30c0a0) {
      const _0x36276a = Math.max(2, _0x4edd65 - _0x579de1.edges.margin - _0x30c0a0.run.lookAheadTiles);
      _0x28628c = Math.max(_0x28628c, _0x5cdb37(_0x19a4fe, _0x37bf99.x + _0x37bf99.hw, _0x36276a, _0x30c0a0.run));
      const _0x376ded = _0xf9ff15 ? _0xf9ff15.pursuit.marginCapTiles : 0;
      if (_0x376ded > 0) {
        _0x28628c = Math.max(_0x28628c, _0x324d42(_0x37bf99.x - _0x37bf99.hw, _0x34f6d5() - _0x19a4fe, _0x376ded));
      }
    }
    _0x519a19(Math.min(_0x28628c, _0x5536e9));
    if (_0x294a7e && _0x4ac9a9(_0x294a7e.state, _0x294a7e.primed, _0x19a4fe, _0x230971[_0x294a7e.k - 1])) {
      _0x1e7ad9(_0x294a7e);
    }
    if (_0x294a7e && _0x294a7e.state === "idle" && _0x19a4fe >= _0x230971[_0x294a7e.k - 1] - 0.000001) {
      _0x2f31d1(_0x294a7e);
    }
  }
}