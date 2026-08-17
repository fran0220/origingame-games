export const CHARGE_RULES = {
  start: 3,
  cap: 3,
  stabilizeCost: 1,
  beaconCost: 1,
  stabilizeRange: 2.4,
  collapseFuseS: 0.55,
  shearCooldownS: 0.85
};
export const RESCUE_RULES = {
  pickupRadius: 1.15,
  anchorRadius: 1.45,
  beaconRange: 2.6,
  carrySpeedScale: 0.78,
  carryJumpScale: 0.88,
  requiredFreesOnboarding: 1,
  requiredFreesBeatA: 3,
  requiredFreesBeatB: 5,
  requiredFreesBeatC: 7,
  spiritsThroughBeatB: 5,
  spiritsThroughBeatC: 7,
  spiritsTotal: 10,
  spireDeliveriesToWin: 3,
  baseMoveSpeed: 5.2,
  baseJumpSpeed: 7
};
export const TUTORIAL_FLAGS = {
  jump: "jump",
  shear: "shear",
  stabilize: "stabilize",
  carry: "carry",
  beacon: "beacon",
  deliver: "deliver"
};
export function createGameEvents() {
  const _0x2396d5 = new Map();
  return {
    on: (_0x2aee27, _0x4ce59d) => {
      if (!_0x2396d5.has(_0x2aee27)) {
        _0x2396d5.set(_0x2aee27, new Set());
      }
      _0x2396d5.get(_0x2aee27).add(_0x4ce59d);
      return () => _0x2396d5.get(_0x2aee27)?.delete(_0x4ce59d);
    },
    emit(_0x4bcdd1, _0x37e76e) {
      const _0x109290 = _0x2396d5.get(_0x4bcdd1);
      if (_0x109290) {
        for (const _0x6a94c2 of _0x109290) {
          try {
            _0x6a94c2(_0x37e76e);
          } catch (_0x5e441d) {
            console.warn("[events] " + _0x4bcdd1, _0x5e441d);
          }
        }
      }
    },
    clear() {
      _0x2396d5.clear();
    }
  };
}
export const ASSET_PATHS = {
  hdri: "./assets/origingame/polyhaven/moonless_golf/moonless_golf_2k.hdr",
  platformStone: "./assets/origingame/kenney/3D assets/Nature Kit/Models/GLTF format/platform_stone.glb",
  cliffSteps: "./assets/origingame/kenney/3D assets/Nature Kit/Models/GLTF format/cliff_steps_stone.glb",
  stairsWide: "./assets/origingame/kenney/3D assets/Fantasy Town Kit/Models/GLB format/stairs-wide-stone.glb",
  slateDiffuse: "./assets/origingame/polyhaven/castle_wall_varriation/castle_wall_varriation_diff_2k.jpg",
  warden: "./assets/origingame/kaykit/KayKit_Adventurers_2.0_FREE/Characters/gltf/Rogue_Hooded.glb",
  wardenAnims: "./assets/origingame/kaykit/KayKit_Character_Animations_1.1/Animations/gltf/Rig_Medium/Rig_Medium_MovementAdvanced.glb"
};
export const STORM_PALETTE = {
  slate: 4871528,
  slateDeep: 1976635,
  indigo: 1709104,
  violet: 8150271,
  amber: 15774761,
  fog: 2761792,
  kill: -18
};
export function createRunResetRegistry() {
  const _0x43040a = new Map();
  return {
    register(_0xd9d808, _0x17ffe6) {
      if (typeof _0x17ffe6 != "function") {
        throw new Error("runReset \"" + _0xd9d808 + "\" requires a function");
      }
      _0x43040a.set(_0xd9d808, _0x17ffe6);
      return () => {
        if (_0x43040a.get(_0xd9d808) === _0x17ffe6) {
          _0x43040a.delete(_0xd9d808);
        }
      };
    },
    runAll() {
      for (const _0x2d9efe of _0x43040a.values()) {
        _0x2d9efe();
      }
    }
  };
}