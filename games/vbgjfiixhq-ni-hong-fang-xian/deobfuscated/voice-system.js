(() => {
  'use strict';

  const _0x553d3e = 20000;
  const _0x3fc42f = {
    lan: {
      opening: ["lan/opening.mp3"],
      wave: ["lan/enemy_incoming.mp3"],
      finalWave: ["lan/final_wave.mp3"],
      damage: ["lan/fortress_damaged.mp3", "lan/node_attacked.mp3"],
      routeSplit: ["lan/route_split.mp3"],
      victory: ["lan/victory.mp3"],
      defeat: ["lan/defeat.mp3"]
    },
    gang: {
      spawn: ["gang_cyborg/charge.mp3", "gang_cyborg/weak_firepower.mp3", "gang_cyborg/bounty.mp3"]
    },
    riot: {
      spawn: ["riot_machine/lockdown.mp3", "riot_machine/suppression_mode.mp3", "riot_machine/get_down.mp3"]
    },
    ninja: {
      spawn: ["phase_ninja/target_ahead.mp3", "phase_ninja/vision_cut.mp3"],
      phase: ["phase_ninja/invisible.mp3"]
    },
    aerostat: {
      spawn: ["corp_airship/area_locked.mp3", "corp_airship/clear_resistance.mp3", "corp_airship/drop_countdown.mp3"]
    },
    devourer: {
      spawn: ["data_devourer/open_port.mp3", "data_devourer/strip_access.mp3", "data_devourer/memory_belongs.mp3"]
    },
    enforcer: {
      entrance: ["enforcer_zero/entrance.mp3"],
      shield: ["enforcer_zero/shield_broken.mp3"],
      missiles: ["enforcer_zero/missile_destroyed.mp3"],
      thruster: ["enforcer_zero/thruster_destroyed.mp3"],
      enraged: ["enforcer_zero/enraged.mp3"],
      core: ["enforcer_zero/core_exposed.mp3"],
      defeated: ["enforcer_zero/defeated.mp3"]
    },
    eve: {
      entrance: ["eve_9/entrance.mp3"],
      node: ["eve_9/invade_node.mp3", "eve_9/lock_tower.mp3"],
      transfer: ["eve_9/transfer_body.mp3"],
      final: ["eve_9/final_phase.mp3", "eve_9/core_revealed.mp3"],
      defeated: ["eve_9/defeated.mp3"],
      playerDefeat: ["eve_9/player_defeat.mp3"]
    },
    "mag-rail-sniper": {
      build: ["gray_falcon/build.mp3"],
      select: ["gray_falcon/select.mp3"],
      upgrade: ["gray_falcon/upgrade.mp3"],
      combat: ["gray_falcon/skill_charge.mp3", "gray_falcon/skill_fire.mp3", "gray_falcon/multi_pierce.mp3"],
      kill: ["gray_falcon/elite_kill.mp3"],
      blocked: ["gray_falcon/jammed.mp3"]
    },
    "street-mercenary": {
      build: ["iron_fist/build.mp3"],
      select: ["iron_fist/select.mp3"],
      upgrade: ["iron_fist/shield_mode.mp3", "iron_fist/blade_mode.mp3"],
      combat: ["iron_fist/intercept_elite.mp3", "iron_fist/skill.mp3"],
      down: ["iron_fist/teammate_down.mp3"],
      dismantle: ["iron_fist/retreat.mp3"]
    },
    "drone-hive": {
      build: ["queen_bee/build.mp3"],
      select: ["queen_bee/select.mp3"],
      upgrade: ["queen_bee/anti_air_mode.mp3", "queen_bee/bomb_mode.mp3", "queen_bee/repair_mode.mp3"],
      combat: ["queen_bee/skill.mp3"],
      down: ["queen_bee/drone_destroyed.mp3"],
      dismantle: ["queen_bee/return.mp3"]
    },
    "arc-neon": {
      build: ["spark/build.mp3"],
      select: ["spark/select.mp3"],
      upgrade: ["spark/upgrade.mp3"],
      combat: ["spark/chain_attack.mp3", "spark/skill.mp3", "spark/wet_target.mp3"],
      kill: ["spark/mechanical_kill.mp3"],
      dismantle: ["spark/shutdown.mp3"]
    },
    "hacker-relay": {
      build: ["zero_day/build.mp3"],
      select: ["zero_day/select.mp3"],
      upgrade: ["zero_day/capture_node.mp3", "zero_day/control_enemy.mp3"],
      combat: ["zero_day/skill.mp3", "zero_day/break_shield.mp3"],
      kill: ["zero_day/data_kill.mp3"],
      blocked: ["zero_day/hack_failed.mp3"]
    }
  };
  const _0x17c6bd = new Audio();
  const _0x477ec8 = new Map();
  const _0x44cc8e = "neon-defense-voice-muted";
  let _0x2f5ca5 = localStorage.getItem(_0x44cc8e) === "true";
  let _0x3e6546 = false;
  let _0x2fe323 = -Infinity;
  let _0x59f6ab = 0;
  let _0x1fbf84 = null;
  function _0xa9c1a5() {
    if (_0x1fbf84) {
      window.dispatchEvent(new CustomEvent("voice:end", {
        detail: {
          classId: _0x1fbf84
        }
      }));
    }
    _0x1fbf84 = null;
    _0x59f6ab = 0;
  }
  function _0x18a6db() {
    const _0x5cfd87 = document.querySelector("#voice-toggle");
    if (_0x5cfd87) {
      _0x5cfd87.dataset.muted = String(_0x2f5ca5);
      _0x5cfd87.setAttribute("aria-pressed", String(!_0x2f5ca5));
      _0x5cfd87.setAttribute("aria-label", _0x2f5ca5 ? "开启语音" : "关闭语音");
      _0x5cfd87.title = _0x2f5ca5 ? "开启语音" : "关闭语音";
    }
  }
  function _0x5e6674(_0x5ab85d) {
    _0x2f5ca5 = Boolean(_0x5ab85d);
    localStorage.setItem(_0x44cc8e, String(_0x2f5ca5));
    if (_0x2f5ca5) {
      _0x17c6bd.pause();
      _0xa9c1a5();
    }
    _0x18a6db();
  }
  function _0x5939b7() {
    _0x3e6546 = true;
  }
  _0x17c6bd.preload = "auto";
  _0x17c6bd.volume = 0.82;
  _0x17c6bd.addEventListener("ended", _0xa9c1a5);
  _0x17c6bd.addEventListener("error", _0xa9c1a5);
  window.addEventListener("pointerdown", _0x5939b7, {
    capture: true,
    once: true
  });
  window.addEventListener("keydown", _0x5939b7, {
    capture: true,
    once: true
  });
  document.addEventListener("DOMContentLoaded", _0x18a6db, {
    once: true
  });
  window.NeonVoice = {
    language: "en-US",
    cooldownMs: _0x553d3e,
    catalog: _0x3fc42f,
    play: function (_0x49782f, _0x4931d1, _0x290baf = {}) {
      const _0x18c63a = Number(_0x290baf.priority) || 1;
      if (_0x2f5ca5 || !_0x3e6546 || _0x290baf.chance != null && Math.random() > _0x290baf.chance) {
        return false;
      }
      const _0x3db920 = performance.now();
      if (_0x3db920 - _0x2fe323 < _0x553d3e) {
        return false;
      }
      const _0x3057fd = function (_0x3211f1, _0x1bced5) {
        const _0x353b24 = _0x3fc42f[_0x3211f1]?.[_0x1bced5] || [];
        if (!_0x353b24.length) {
          return null;
        }
        const _0x144cfb = _0x3211f1 + ":" + _0x1bced5;
        const _0x4ec153 = _0x477ec8.get(_0x144cfb) || 0;
        _0x477ec8.set(_0x144cfb, (_0x4ec153 + 1) % _0x353b24.length);
        return _0x353b24[_0x4ec153 % _0x353b24.length];
      }(_0x49782f, _0x4931d1);
      return !!_0x3057fd && (!!_0x17c6bd.paused || !!_0x17c6bd.ended || !(_0x18c63a < _0x59f6ab)) && (_0x17c6bd.paused || _0x17c6bd.ended || _0xa9c1a5(), _0x17c6bd.pause(), _0x17c6bd.src = "./assets/audio/voices/" + _0x3057fd + "?v=en-us-20260731-1", _0x17c6bd.currentTime = 0, _0x59f6ab = _0x18c63a, _0x1fbf84 = function (_0x26f9f6, _0x5c57d4) {
        if (_0x26f9f6 === "enforcer" || _0x26f9f6 === "eve") {
          return "boss_mechanic";
        } else if (_0x26f9f6 === "lan" && ["wave", "finalWave", "damage", "routeSplit", "defeat"].includes(_0x5c57d4)) {
          return "battle_warning";
        } else if (["mag-rail-sniper", "arc-neon", "street-mercenary", "hacker-relay", "drone-hive"].includes(_0x26f9f6)) {
          return "tactical_feedback";
        } else if (["gang", "riot", "ninja", "aerostat", "devourer"].includes(_0x26f9f6)) {
          return "enemy_bark";
        } else {
          return "character_flavor";
        }
      }(_0x49782f, _0x4931d1), _0x2fe323 = _0x3db920, window.dispatchEvent(new CustomEvent("voice:start", {
        detail: {
          classId: _0x1fbf84
        }
      })), _0x17c6bd.play().catch(_0xfbc31b => {
        _0xa9c1a5();
        if (_0xfbc31b.name !== "NotAllowedError" && _0xfbc31b.name !== "AbortError") {
          console.warn("Voice playback failed.", _0xfbc31b);
        }
      }), true);
    },
    setMuted: _0x5e6674,
    toggle() {
      _0x5e6674(!_0x2f5ca5);
    },
    get muted() {
      return _0x2f5ca5;
    },
    get unlocked() {
      return _0x3e6546;
    },
    get cooldownRemainingMs() {
      return Math.max(0, _0x553d3e - (performance.now() - _0x2fe323));
    },
    get assetCount() {
      return Object.values(_0x3fc42f).reduce((_0x587f04, _0x3a37c0) => _0x587f04 + Object.values(_0x3a37c0).reduce((_0xbaf637, _0x4b3812) => _0xbaf637 + _0x4b3812.length, 0), 0);
    }
  };
})();