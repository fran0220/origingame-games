const e = () => {};
export const view = {
  stateScreen: e,
  player: {
    sync: e
  },
  hostiles: {
    spawned: e,
    removed: e,
    sync: e
  },
  capsules: {
    spawned: e,
    removed: e,
    sync: e
  },
  loot: {
    acquired: e
  },
  bullets: {
    slotSpawned: e,
    hideSlot: e,
    syncSlot: e,
    flush: e,
    bendCulled: e,
    deckIgnited: e,
    volatileImpact: e,
    hostileImpact: e
  },
  mods: {
    sync: e,
    cleared: e,
    lanceTelegraph: e
  },
  level: {
    unbuiltHidden: e,
    zipperColumn: e,
    faceRevealed: e
  },
  meridian: {
    sync: e,
    reset: e
  },
  corner: {
    finished: e
  },
  finale: {
    started: e,
    sync: e,
    transmit: e,
    reset: e
  },
  transform: {
    armed: e,
    started: e,
    ritual: e,
    finished: e,
    reset: e,
    frame: e
  },
  hook: {
    sync: e
  },
  juice: {
    hitStop: e
  }
};
export function installView(_0xd2fcdd) {
  for (const [_0x4227f8, _0xf4914d] of Object.entries(_0xd2fcdd)) {
    if (typeof _0xf4914d == "function") {
      view[_0x4227f8] = _0xf4914d;
    } else {
      Object.assign(view[_0x4227f8], _0xf4914d);
    }
  }
}
export const host = {
  resetGame: e
};
export function installHost(_0x8886df) {
  Object.assign(host, _0x8886df);
}