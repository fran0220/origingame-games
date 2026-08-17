import { CONFIG as _0xef45a2 } from "../config.js";
import { ACTIVE_FIXTURE as _0x3b8c91, ACTIVE_SLICE as _0x4a820f, IS_TRANSFORM_SLICE as _0x2a3678, IS_TRAVERSAL_SLICE as _0x5897a8, SCORE_ENABLED as _0x366371, VIEW_ID as _0x37d6cb } from "../mode.js";
import { shellStateChanged as _0xff0a53 } from "./shell.js";
import { installView as _0x225a8e } from "../sim/bridge.js";
import { gameMs as _0x9fba22, sliceStats as _0x155786 } from "../sim/time.js";
import { scoreSnapshot as _0x509a09 } from "../sim/score.js";
import { kills as _0x14929a } from "../sim/hostiles.js";
import { player as _0x9e4cb9 } from "../sim/player.js";
import { committedBand as _0x501a54, transformAltitudeAt as _0x4ec63b } from "../sim/transform.js";
const u = document.getElementById("overlay");
const R = document.getElementById("ovTitle");
const g = document.getElementById("ovBody");
function y(_0x11f6d7, _0xf596fe) {
  R.textContent = _0x11f6d7;
  g.innerHTML = _0xf596fe.map(_0x97b868 => {
    const _0x41e66e = [_0x97b868.dim ? "dim" : "", _0x97b868.className || ""].filter(Boolean).join(" ");
    return "<p" + (_0x41e66e ? " class=\"" + _0x41e66e + "\"" : "") + ">" + _0x97b868.text + "</p>";
  }).join("");
  u.style.display = "flex";
}
function A(_0x3703f4) {
  const _0x3ddd1a = _0x3703f4 === "VICTORY" && !_0x3b8c91;
  const _0x29fc2c = _0x3703f4 === "PAUSED" || _0x3703f4 === "GAME_OVER" || _0x3703f4 === "SLICE_RETRY";
  u.classList.toggle("victory", _0x3ddd1a);
  document.body.classList.toggle("at-victory", _0x3ddd1a);
  document.body.classList.toggle("at-modal", _0x29fc2c);
  u.dataset.state = String(_0x3703f4 || "").toLowerCase();
  (function (_0x5017b7) {
    if (_0x5017b7 === "PLAYING" || _0x5017b7 === "MENU") {
      u.style.display = "none";
    } else if (_0x5017b7 === "PAUSED") {
      y("PAUSED", [{
        text: "p / esc to resume",
        dim: true
      }]);
    } else if (_0x5017b7 === "SLICE_RETRY") {
      y("ROUTE LOST", [{
        text: "resetting fixture…",
        dim: true
      }, {
        text: "r to retry now",
        dim: true
      }]);
    } else if (_0x5017b7 === "GAME_OVER") {
      y("SIGNAL LOST", [{
        text: "MERIDIAN CUT THE TRANSMISSION."
      }, {
        text: "GET BACK UP THERE."
      }, {
        text: "r to climb again",
        dim: true
      }]);
    } else if (_0x5017b7 === "VICTORY") {
      if (_0x5897a8) {
        const _0x5786cb = Math.max(0, (_0x9fba22 - _0x155786.startedAt) / 1000).toFixed(1);
        const _0xcbc2fd = Number.isFinite(_0x155786.minEdgeMargin) ? Math.max(0, _0x155786.minEdgeMargin).toFixed(1) : "—";
        const _0x4294e8 = [{
          text: _0x5786cb + "s · " + _0x14929a + " kills · " + _0x155786.airJumps + " air jumps"
        }, {
          text: "closest damage-edge margin: " + _0xcbc2fd + " tiles"
        }, {
          text: "attempt " + _0x155786.attempts + " · " + _0x155786.falls + " falls · " + _0x155786.setbacks + " hull fallbacks"
        }];
        if (_0x366371) {
          const _0x39044c = _0x509a09();
          _0x4294e8.push({
            text: "THREAT " + _0x39044c.threat + " · " + _0x39044c.counts.airborne_kill + " airborne · " + _0x39044c.counts.link + " links · " + _0x39044c.counts.wager + " wagers"
          });
          _0x4294e8.push({
            text: "hot for " + (_0x39044c.hotMs / 1000).toFixed(1) + "s of " + (_0x39044c.playMs / 1000).toFixed(1) + "s"
          });
        }
        _0x4294e8.push({
          text: "pace: " + _0x4a820f.pace.label,
          dim: true
        });
        if (_0x37d6cb !== "far") {
          _0x4294e8.push({
            text: "view: " + _0xef45a2.viewScales[_0x37d6cb].label,
            dim: true
          });
        }
        _0x4294e8.push({
          text: "r to replay",
          dim: true
        });
        y("TRAVERSAL CLEAR", _0x4294e8);
      } else if (_0x2a3678) {
        const _0x96dc00 = Math.max(0, (_0x9fba22 - _0x155786.startedAt) / 1000).toFixed(1);
        const _0x439381 = _0x3b8c91.events.length;
        const _0x282468 = [{
          text: _0x96dc00 + "s · " + _0x501a54 + " of " + _0x439381 + " transformation" + (_0x439381 === 1 ? "" : "s") + " · " + _0x14929a + " kills"
        }, {
          text: "climbed " + Math.round(_0x4ec63b(_0x9e4cb9.x)) + " tiles of body, on foot"
        }, {
          text: "flip inward → the passage climbs → breach out, one 2D controller the whole way"
        }];
        if (_0x37d6cb !== "far") {
          _0x282468.push({
            text: "view: " + _0xef45a2.viewScales[_0x37d6cb].label,
            dim: true
          });
        }
        _0x282468.push({
          text: "r to replay",
          dim: true
        });
        y("BREACH CLEAR", _0x282468);
      } else {
        y("SIGNAL SENT", [{
          text: "CROWN BROKEN // EARTH ANSWERED",
          className: "victory-kicker"
        }, {
          text: "RIG: “HOME, THIS IS MERIDIAN COLONY. WE SURVIVED.”",
          className: "victory-rig"
        }, {
          text: "EARTH: “MERIDIAN COLONY … WE HEAR YOU.”",
          className: "victory-reply"
        }, {
          text: "r to climb again",
          dim: true
        }]);
      }
    }
  })(_0x3703f4);
  _0xff0a53(_0x3703f4);
}
let $ = false;
export function initOverlayView() {
  return !$ && (_0x225a8e({
    stateScreen: A
  }), $ = true, true);
}