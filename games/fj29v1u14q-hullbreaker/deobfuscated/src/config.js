export const CONFIG = {
  scrollSpeed: 4.3,
  levelLength: 583,
  camera: {
    fov: 56,
    x: 5,
    y: 6.2,
    z: 22.5,
    lookX: 7.4,
    lookY: 4.8,
    near: 0.5,
    far: 200,
    portraitMinAspect: 0.9
  },
  fog: {
    near: 30,
    far: 74
  },
  viewScales: {
    near: {
      id: "near",
      label: "NEAR",
      depthMult: 1
    },
    mid: {
      id: "mid",
      label: "MID",
      depthMult: 1.42
    },
    far: {
      id: "far",
      label: "FAR",
      depthMult: 1.9
    }
  },
  path: {
    faces: 6,
    faceTiles: 88,
    introTiles: 24,
    outroTiles: 31,
    chamferTiles: 2,
    turnDeg: 30,
    turnSign: 1,
    yawBlendTiles: 1
  },
  gen: {
    seed: 1337,
    tierSeed: 777,
    minH: 2,
    maxH: 4,
    gapMax: 5,
    landingMin: 3,
    tailFlat: 20,
    maxReach: 5,
    weights: {
      flat: 12,
      step: 16,
      stairs: 12,
      gapHop: 14,
      plateau: 14,
      trench: 12,
      islandHop: 10,
      ridge: 16
    },
    laneChance: 0.92,
    hiChance: 0.6,
    thirdChance: 0.35,
    laneCapY: 12
  },
  spawner: {
    startS: 28,
    endFromEnd: 40,
    seed: 4242,
    faceGapSec: [2.15, 1.85, 1.65, 1.48, 1.32, 1.28],
    jitterSec: 0.6,
    pairChance: [0.15, 0.25, 0.35, 0.45, 0.55, 0.65],
    pairGapTiles: 2,
    cornerClearBefore: 10,
    cornerClearAfter: 20,
    lesson: {
      kindByFace: [null, "hound", "polyp", "mortar", null, null],
      clearTiles: 6,
      houndDelayMsByFace: [0, 0, 3600, 3400, 0, 0]
    },
    pressure: {
      seed: 1213549644,
      maxSampleMs: 100,
      idleMsByFace: [1350, 1200, 1080, 960, 840, 760],
      minIdleMs: 620,
      fastIdleBonusMs: 380,
      fastClearMs: 900,
      slowClearMs: 3200,
      mercyClearMs: 4200,
      clearEmaWeight: 0.35,
      killWindowMs: 10000,
      progressEmaMs: 1800,
      dominanceEmaMs: 1800,
      dominantKills10s: 8,
      dominantProgressTps: 4.8,
      dominantNoHitMs: 4500,
      dominanceWeights: {
        clear: 0.42,
        kills: 0.26,
        progress: 0.22,
        noHit: 0.1
      },
      healthDropEpsilon: 0.015,
      mercyHealthRatio: 0.42,
      fullPressureHealthRatio: 0.72,
      mercyIdleMs: 1400,
      responseBandNames: ["CALIBRATE", "COMPOSE", "EVOLVE", "SURGE"],
      responseBandFrom: [0, 0.28, 0.52, 0.76],
      responseBandPromotionMs: 450,
      responseBandHysteresis: 0.055,
      compositionBand: 1,
      evolutionBand: 2,
      densityBand: 3,
      damageBackoffMs: 1800,
      setbackBackoffMs: 2800,
      recoveryEmptyBudgetMs: 1700,
      targetLowByFace: [0, 0, 0, 0, 0, 0],
      densityTargetBonusByFace: [0, 0, 1, 1, 1, 1],
      targetMaxByFace: [1, 1, 2, 2, 2, 2],
      targetBand: 1,
      dominanceTargetFrom: 0.52,
      maxAdaptiveOutstandingByFace: [1, 1, 2, 2, 2, 2],
      initialTokensByFace: [1, 1, 2, 2, 3, 3],
      tokenCapByFace: [2, 2, 4, 4, 5, 5],
      routeTilesPerTokenByFace: [18, 16, 8, 7, 6, 5.5],
      tokenDominanceFrom: 0.45,
      killTokenBase: 0.12,
      killTokenDominanceGain: 0.9,
      environmentTokenGain: 1,
      environmentResponseHoldMs: 900,
      maxBodiesByFace: [4, 5, 32, 36, 42, 48],
      emptyResponseMsByBand: [1050, 850, 650, 500],
      emptyResponseMs: 1050,
      hardEmptyBudgetMs: 1150,
      emptyResponseCooldownMs: 450,
      precommitMs: 120,
      precommitCooldownMs: 250,
      environmentResponseMs: 160,
      responseLatencyEmaWeight: 0.3,
      imminentAuthoredTiles: 4.8,
      minRemainingTravelTiles: 6.5,
      responseFromFace: 3,
      responseClearMs: 1600,
      responseIdleMs: 100,
      responseImminentAuthoredTiles: 2.35,
      responseMinRemainingTravelTiles: 3.4,
      spawnInsetTiles: 2.3,
      minPlayerLeadTiles: 4.4,
      rearLeadTiles: 5.8,
      cornerPadTiles: 0.7,
      pairFromFace: 3,
      pairClearMs: 1500,
      pairDominanceFrom: 0.58,
      pairBandFrom: 3,
      pairMinPlayerLeadTiles: 5.2,
      pairDelayMs: 180,
      roleBagByFace: [["wasp"], ["wasp"], ["wasp", "hound"], ["wasp", "hound", "polyp"], ["wasp", "hound", "polyp", "mortar"], ["wasp", "hound", "polyp", "mortar"]],
      groundProbeTiles: 0.55
    }
  },
  momentum: {
    ceilMult: 1.4,
    hardCeilMult: 1.7,
    bankLo: 0.55,
    bankHi: 0.92,
    killFull: 4,
    killDecaySec: 9,
    wBank: 0.7,
    wCombat: 0.3,
    risePerSec: 0.16,
    fallPerSec: 0.45,
    hitDrive: 0.35,
    hitMercyMs: 1500,
    tiers: [0.2, 0.5, 0.8]
  },
  player: {
    runSpeed: 9.4,
    accelGround: 120,
    accelAir: 76,
    jumpVel: 14,
    gravity: -36,
    fallGravityMult: 1.5,
    terminalVel: -32,
    jumpCutMult: 0.45,
    airJumps: 1,
    airJumpVel: 13,
    coyoteMs: 100,
    jumpBufferMs: 120,
    dropThroughMs: 260,
    ledgeReachX: 0.28,
    ledgeReachY: 0.42,
    ledgeGrabHeight: 1.42,
    ledgeHangMs: 460,
    ledgeLaunchX: 6.4,
    ledgeLaunchY: 11.5,
    ledgeMantleInset: 0.03,
    ledgeReleaseNudge: 0.08,
    wallSlideSpeed: 4.2,
    wallSlideMs: 520,
    wallJumpX: 11.8,
    wallJumpY: 12.5,
    traversalRecatchMs: 180,
    traversalEdgeGuard: 0.5,
    width: 0.7,
    height: 1.7,
    muzzleY: 1.05,
    barrelTiles: 0.82,
    maxHealth: 3,
    lives: 3,
    iframesMs: 1200,
    hitstunMs: 220,
    knockbackX: 6,
    knockbackY: 5
  },
  rifle: {
    radius: 0.16
  },
  weapons: {
    R: {
      name: "RIFLE",
      fireRateMs: 130,
      speed: 26,
      damage: 1,
      lifeMs: 1100,
      scale: [1, 1, 1]
    },
    S: {
      name: "SPREAD",
      fireRateMs: 240,
      speed: 23,
      damage: 1,
      lifeMs: 900,
      count: 5,
      splayDeg: 12,
      scale: [0.8, 0.8, 0.8]
    },
    L: {
      name: "LASER",
      fireRateMs: 300,
      speed: 40,
      damage: 2,
      lifeMs: 800,
      pierce: true,
      scale: [7, 0.45, 0.45]
    },
    H: {
      name: "HOMING",
      fireRateMs: 270,
      speed: 18,
      damage: 0.75,
      lifeMs: 1500,
      count: 2,
      splayDeg: 24,
      turnRate: 6.1,
      seekRange: 12.5,
      seekFuelMs: 760,
      seekConeDeg: 132,
      seekRetargets: 0,
      scale: [0.7, 0.7, 0.7]
    },
    F: {
      name: "FLAME",
      fireRateMs: 300,
      speed: 14.5,
      damage: 1,
      lifeMs: 1650,
      pierce: true,
      crawlSpeed: 10,
      dropAccel: -40,
      dropDelayMs: 280,
      hitRadius: 0.32,
      lobScaleY: 0.92,
      lobBias: 0.06,
      hugY: 0.35,
      hugRate: 30,
      probeX: 0.4,
      probeY: 0.4,
      crawlLifeMs: 680,
      crawlTiles: 5.5,
      crawlStepUpMax: 0.18,
      crawlDropMax: 2.1,
      phaseSurfaceCost: 0.35,
      scale: [1.1, 1.1, 1.1],
      crawlScale: [1.5, 0.9, 1.1]
    }
  },
  capsules: {
    driftSpeed: 1.6,
    sinkSpeed: 0.35,
    bobAmp: 0.5,
    bobFreq: 2,
    size: 0.55,
    recatchMs: 4200,
    blinkLastMs: 1100,
    pickupGraceMs: 2500,
    popNoCatchMs: 180,
    popVx: 2.8,
    popVy: 7,
    gravity: -22,
    pickupRadius: 1.15
  },
  carrier: {
    hp: 10,
    speed: 1.1,
    bobAmp: 0.4,
    bobFreq: 1.4,
    hitRadius: 1,
    laneAbove: 4.5,
    rollFreq: 1.3,
    rollAmp: 0.08,
    size: [1.7, 0.9, 0.9],
    perFaceFrac: [0.2, 0.58, 0.66, 0.6, 0.55, 0.55],
    drops: [{
      kind: "letter",
      letter: "S"
    }, {
      kind: "mod",
      letter: "RG"
    }, {
      kind: "letter",
      letter: "L"
    }, {
      kind: "letter",
      letter: "H"
    }, {
      kind: "letter",
      letter: "F"
    }, {
      kind: "mod",
      letter: "OL"
    }]
  },
  mods: {
    rageMs: 10000,
    rageFireMult: 0.5,
    ghostMs: 12000,
    ghostDelayMs: [500, 1000],
    chronoMs: 4000,
    chronoScale: 0.35,
    lanceTelegraphMs: 1000,
    lanceFlashMs: 280
  },
  wasp: {
    hp: 4,
    cruiseSpeed: 2.35,
    bobFreq: 3,
    bobAmp: 0.9,
    diveRange: 7.2,
    diveSpeed: 11,
    diveMs: 642,
    diveCooldownMs: 1325,
    predictMs: 270,
    predictXCap: 2.6,
    predictYCap: 1.35,
    contactRadius: 0.55,
    shotRadius: 0.72,
    visualRadius: 0.5,
    enterMs: 900,
    enterDepth: -12,
    dieMs: 360,
    dieDepth: -3.2,
    wobbleAmp: 0.4,
    wobbleFreq: 2.2
  },
  crouch: {
    height: 1,
    muzzleY: 0.45,
    aimLevel: true
  },
  assist: {
    coneDeg: 16,
    maxDeg: 8,
    range: 12,
    minFixTiles: 5
  },
  hound: {
    hp: 6,
    hitRadius: 0.42,
    shotRadius: 0.72,
    size: [1.7, 0.9, 1],
    rideY: 0.45,
    fallGravity: -46,
    fallTerminal: -30,
    prowlSpeed: 3.9,
    senseRange: 8.6,
    laneBelow: 2.8,
    laneAbove: 1.2,
    tellMs: 460,
    tellBackTiles: 0.5,
    predictMs: 180,
    predictXCap: 1.8,
    aimLockMs: 130,
    chargeSpeed: 16.5,
    chargeMs: 560,
    chargeCooldownMs: 1100,
    skidMs: 330,
    stepUpTiles: 1,
    probeX: 0.75,
    wallProbeY: 0.5,
    hugRate: 26,
    substeps: 4,
    tellDepth: 1.3,
    tellRise: 0.45,
    tellNarrow: 0.18,
    tellRear: 0.42,
    tellCoilMs: 110,
    tellCoilSquash: 0.22,
    chargeStretch: 0.35,
    chargeSquash: 0.12,
    chargeLean: 0.2,
    gaitFreq: 9,
    gaitAmp: 0.07,
    gaitTilt: 0.05
  },
  polyp: {
    hp: 6,
    hitRadius: 0.5,
    shotRadius: 0.82,
    size: 0.55,
    barrelSize: [0.9, 0.34, 0.34],
    barrelTiles: 0.7,
    rootY: 1.05,
    sightRange: 9,
    beamHalf: 0.32,
    beamStepTiles: 0.35,
    tellMs: 700,
    beamMs: 450,
    ventMs: 900,
    cooldownMs: 1400,
    commitCueMs: 120,
    anticipateMs: 240,
    predictXCap: 2.2,
    predictYCap: 1,
    tellSwell: 0.3,
    ventSag: 0.12,
    beamPulseFreq: 24,
    beamPulseAmp: 0.25
  },
  mortar: {
    hp: 5,
    hitRadius: 0.5,
    shotRadius: 0.84,
    size: 0.5,
    legSize: [0.16, 1.05, 0.16],
    bodyY: 1.05,
    armRange: 13,
    lobMs: 580,
    arcTiles: 2.6,
    fuseMs: 520,
    burstMs: 220,
    coolMs: 1050,
    blastHalf: 1.5,
    blastHeight: 1.8,
    podRadius: 0.36,
    markThickness: 0.18,
    warnDepth: -0.55,
    recoilTiles: 0.4,
    burstSwell: 0.35
  },
  warden: {
    hp: 72,
    hitRadius: 1.12,
    size: [5.8, 3.4, 1.4],
    bodyY: 1.3,
    windowDamage: 18,
    exposedMs: 1500,
    exposedMinMs: 1200,
    sweepTellMs: 620,
    sweepCommitMs: 150,
    sweepMs: 330,
    emitterTiles: 2.42,
    beamReach: 12.5,
    beamHalf: 0.3,
    barrageTellMs: 700,
    barrageMs: 240,
    barrageHalf: 1.55,
    barrageHeight: 2.05,
    predictMs: 220,
    predictXCap: 1.8
  },
  evolution: {
    firstFace: 5,
    aegisRadius: 7.4,
    aegisMaxLinks: 3,
    aegisCycleMs: 1900,
    aegisActiveMs: 1450,
    wardPingMs: 120,
    flankOffsetX: 3.8,
    flankHeight: 3.2,
    flankBandHeight: 0.8,
    flankSpeed: 6.8,
    flankVerticalSpeed: 4.6,
    flankReadyTiles: 1.1,
    flankRecoverRate: 7.2
  },
  genome: {
    seed: 1296388681,
    bulwarkOpenMs: 620,
    bulwarkPingMs: 110,
    twinGapMs: 230,
    vaultSpeed: 10.8,
    vaultLift: 12.8,
    vaultGravity: -34,
    vaultMs: 760,
    salvoOffset: 2.4,
    relayHingeMs: 320,
    backlashTellMs: 480,
    backlashBurstMs: 120,
    backlashCooldownMs: 1700,
    backlashRadius: 1.65
  },
  enemyEcology: {
    maxHazardsPerBody: 3,
    rebound: {
      brakeTellMs: 280,
      speed: 10.2,
      lift: 13.6,
      gravity: -34,
      vaultMs: 780
    },
    crosswind: {
      tellMs: 460,
      burstMs: 360,
      recoverMs: 440,
      bodyOffsetY: 1.65,
      acquireRate: 4.8,
      strafeSpeed: 6.2,
      muzzleTiles: 0.62,
      count: 3,
      spacing: 0.66,
      speed: 12,
      radius: 0.2,
      lifeMs: 540
    },
    sweepfan: {
      halfAngleRad: 0.56,
      beamStepTiles: 0.28
    },
    aircomb: {
      count: 3,
      spacing: 1.2,
      radius: 0.3,
      dropHeight: 6.2,
      dropMs: 520,
      impactMs: 170
    }
  },
  waves: {
    haltOffset: 14,
    baseSize: 3,
    sizePerWave: 1,
    laneHeights: [2.6, 4.6, 7.2],
    staggerMs: 220,
    phases: ["OBSERVE", "INTERCEPT", "CONTAIN", "QUARANTINE", "STERILIZE", "SCUTTLE"],
    roster: [["wasp", "wasp", "wasp", "wasp"], ["hound", "wasp", "wasp", "wasp", "wasp"], ["polyp", "wasp", "wasp", "hound", "wasp", "wasp"], ["mortar", "wasp", "hound", "wasp", "wasp", "wasp", "wasp"], ["hound", "wasp", "polyp", "wasp", "mortar", "wasp", "wasp", "wasp"], ["wasp", "wasp", "wasp", "hound", "polyp", "wasp", "mortar", "wasp", "wasp"]],
    spawnDelaysMs: [[0, 180, 460, 680], [0, 320, 600, 850, 1100], [0, 520, 760, 1010, 1240, 1470], [0, 580, 820, 1060, 1300, 1540, 1780], [0, 180, 390, 590, 800, 1010, 1220, 1430], [0, 150, 300, 720, 870, 1020, 1440, 1590, 1740]],
    comp: [[0, 0, 1, 0], [0, 1, 0, 1, 2], [0, 1, 2, 1, 0, 2], [1, 0, 2, 1, 2, 0, 1], [2, 0, 2, 0, 2, 1, 1, 0], [2, 1, 2, 1, 0, 2, 1, 2, 2]],
    gateDiveCooldownMs: 740,
    gateDiveRange: 9.5,
    gateCruiseSpeed: 5.6,
    gateRecoverRate: 7.5,
    gateSquadStaggerMs: 150,
    stragglerCommitMs: 700,
    stragglerCruiseSpeed: 8.4,
    stragglerDiveRange: 13,
    stragglerHeight: 2.7,
    emptyAdvanceMs: 90,
    windUpMs: 70,
    windUpDeg: -1.5,
    snap1Ms: 150,
    holdMs: 420,
    snap2Ms: 130,
    settleMs: 130,
    resumeMs: 200,
    backS: 1.1,
    clearMsgMs: 700,
    zipStartMs: 220,
    zipCols: 31,
    zipPerColMs: 16,
    zipDropMs: 120,
    zipDropTiles: 2.75,
    zipDipTiles: 0.06,
    zipDipMs: 40
  },
  transform: {
    haltOffset: 9,
    chamferTiles: 2,
    thresholdTiles: 6,
    armLookahead: 4,
    triggerOffset: 1,
    armMaxMs: 2600,
    pressedOffset: 4,
    clampMargin: 0.5,
    sealInset: 0.4,
    windUpMs: 90,
    windUpDeg: -3,
    snap1Ms: 160,
    holdMs: 300,
    snap2Ms: 140,
    settleMs: 120,
    resumeMs: 180,
    seamPullTiles: 11,
    backS: 1.1,
    snapDeg: 45,
    panelJoltTiles: 0.18,
    cover: {
      unlatchMs: 120,
      ajarMs: 380,
      ajarFrac: 0.8,
      snapFrac: 0.96,
      relockMs: 120,
      blowBackS: 2.8,
      breachStopDeg: 104
    },
    clearMsgMs: 1400,
    assembly: {
      startMs: 200,
      chunks: 24,
      perColMs: 12,
      dropMs: 130,
      dropTiles: 3.2,
      dipTiles: 0.06,
      dipMs: 40
    }
  },
  limb: {
    fog: {
      near: 24,
      far: 52
    },
    bg: 4608607,
    playBand: {
      y0: -1,
      y1: 12.6
    },
    planeHalfDepth: 1,
    fallOutwardMax: 2.2,
    kerb: {
      outward: 0.36,
      h: 0.5,
      under: 0.3,
      thickness: 0.9,
      overlap: 0.06
    },
    kerbOutwardMax: 0.4,
    jointOutwardMax: 7.5,
    chunkCols: 16,
    entryShoulder: {
      back: 28,
      deckY: 3,
      plateCols: 7,
      plateH: 4.2,
      plateDepth: -2.35,
      plateThickness: 1.25,
      topInset: 0.18
    },
    hull: {
      drop: 14,
      depth: -1.1,
      thickness: 3.6,
      ribH: 0.5,
      ribThickness: 4.6,
      tiltDeg: 4
    },
    scute: {
      every: 7,
      len: 9.2,
      h: 3.1,
      thickness: 1.4,
      depth: 1.25,
      under: 2.15,
      stagger: 0.55,
      ribEvery: 2,
      ribW: 0.9,
      ribH: 4.2,
      tiltDeg: 8
    },
    lipScute: {
      every: 5,
      len: 5.7,
      h: 1.65,
      depth: 0.72,
      thickness: 0.96,
      under: 0.2,
      tiltDeg: 6
    },
    wall: {
      depth: -6,
      below: 5.5,
      above: 5.8,
      thickness: 0.9,
      spanCols: 18,
      overlap: 0.6,
      capH: 0.5
    },
    anatomy: {
      gill: {
        every: 24,
        slits: 4,
        slitW: 9.2,
        slitH: 0.48,
        pitch: 0.92,
        depth: -4.95,
        thickness: 1.15,
        tiltDeg: 5
      },
      rib: {
        w: 1.35,
        h: 13.5,
        depth: -4.35,
        thickness: 1.45,
        tiltDeg: 11
      },
      tendon: {
        every: 30,
        bands: 3,
        w: 17.5,
        h: 0.48,
        gap: 0.82,
        depth: 0.55,
        thickness: 0.55,
        tiltDeg: 13
      }
    },
    joint: {
      apronBack: 5,
      apronFwd: 3,
      ridgeW: 3.2,
      ridgeThickness: 5.4,
      ridgeDepth: -5,
      ridgeBelow: 7,
      ridgeAbove: 9,
      collarW: 5.6,
      collarH: 2.4,
      collarThickness: 4.6,
      collarDepth: -5.6,
      collarAt: 1.4,
      buttressW: 4,
      buttressH: 11,
      buttressThickness: 8,
      buttressDepth: 2.6,
      buttressTop: -1.4,
      cupW: 3,
      cupH: 3.4,
      cupThickness: 5,
      cupDepth: 1.4,
      cupTop: -1.6,
      tendonW: 1.1,
      tendonThickness: 1.1,
      tendonDepth: -2.2
    },
    silhouette: [{
      atFrac: 0.4,
      y0: 22,
      h: 46,
      w: 40,
      depth: -34,
      thickness: 2.4
    }, {
      atFrac: 0.86,
      y0: 27,
      h: 40,
      w: 24,
      depth: -26,
      thickness: 2.4
    }],
    tone: [[1, 1, 1], [1.04, 1.02, 0.99], [0.96, 0.98, 1.03], [1.02, 1, 0.97], [0.97, 1, 1.04], [1.03, 1.01, 0.98], [0.98, 0.99, 1.02]],
    backdrop: {
      sister: {
        depth: -14,
        thickness: 1.5,
        segW: 9.4,
        segH: 5.8,
        overlap: 1,
        y0: 17,
        yStep: 2.4,
        ySteps: 4,
        rise: 24,
        span: 0.45,
        spanAt: 0.16,
        rake: 0.55,
        rakeLift: 1.7,
        lipH: 1,
        lipOut: 0.35,
        ringEvery: 2,
        ringW: 2.1,
        ringOver: 2.4,
        ringOut: 0.55
      },
      spine: {
        depth: -19,
        thickness: 2.2,
        every: 17,
        y0: 20,
        yStep: 2.4,
        ySteps: 3,
        drumW: 8.4,
        drumH: 7.8,
        barrel: [[0.62, 0.18], [0.86, 0.2], [1, 0.44], [0.86, 0.2], [0.62, 0.18]],
        linkH: 3.4
      },
      far: {
        depth: -24,
        thickness: 2,
        segW: 21,
        overlap: 0.6,
        y0: 20.5,
        tops: [29, 33.5, 30.5, 35.5, 31.5, 28],
        spireAt: 0.62,
        spires: 6,
        spireW: 1.1,
        spireGap: 2.1,
        spireH: [8, 14.5, 10, 18, 9.5, 12.5]
      }
    },
    mark: {
      band: {
        y0: -4.6,
        y1: -12.8
      },
      out: 0.66,
      thickness: 0.35,
      proud: 0.12,
      ladder: {
        every: 48,
        runH: 6.8,
        pitch: 0.84,
        rungW: 0.76,
        rungH: 0.14,
        stileW: 0.11,
        at: 0.35
      },
      hatch: {
        every: 33,
        rimW: 2,
        rimH: 2,
        panelW: 1.45,
        panelH: 1.45
      },
      door: {
        every: 70,
        rimW: 1.9,
        rimH: 2.9,
        panelW: 1.5,
        panelH: 2.5,
        sillH: 0.25
      },
      rail: {
        len: 13.5,
        postEvery: 1.7,
        postH: 1,
        postW: 0.16,
        barH: 0.18,
        at: 0.55
      }
    }
  },
  shade: {
    dose: 0.5,
    seed: 20350801,
    cell: 1,
    tierAt: [-3, -12],
    tierWeight: [1, 0.45, 0.15],
    ao: {
      radius: 3,
      amount: 0.45
    },
    sky: {
      rise: 7,
      spread: 1,
      amount: 0.45
    },
    rake: {
      amount: 0.22
    },
    extAt: [[0, 1], [7, 0.8], [16, 0.55], [27, 0.3], [35, 0.18]],
    lit: 0.7,
    ceil: 0.74,
    floor: 0.02,
    facet: [1, 0.96, 1.03, 0.98, 1.02, 0.95, 1],
    wear: {
      amount: 0.68,
      contrast: 2.4,
      octaves: [{
        periodS: 23,
        periodY: 11,
        weight: 0.65
      }, {
        periodS: 7,
        periodY: 5,
        weight: 0.35
      }]
    },
    deck: {
      rows: [1.35, 0.7, 0.62, 0.56],
      wear: 0.17
    }
  },
  edges: {
    margin: 0.4,
    killY: -7
  },
  juice: {
    hitStop: {
      killMs: 42,
      hurtMs: 90,
      scale: 0.08,
      maxMs: 120
    },
    shake: {
      maxOffset: 0.15,
      maxRollDeg: 0.55,
      freqHz: 22,
      decayPerSec: 2,
      kill: 0.15,
      hurt: 0.46,
      snap1: 0.24,
      snap2: 0.32,
      boom: 0.36,
      rumbleMax: 0.09
    },
    muzzle: {
      ms: 80,
      size: 0.5,
      offsetTiles: 0.5,
      volleyGapMs: 55
    },
    impact: {
      count: 4,
      speed: 5.5,
      ms: 240,
      size: 0.12,
      gravity: -14,
      gapMs: 40
    },
    death: {
      count: 10,
      speed: 7.5,
      ms: 420,
      size: 0.17,
      gravity: -16,
      flashMs: 130,
      flashSize: 0.95
    },
    destruction: {
      core: {
        ms: 165,
        size: 0.72
      },
      wing: {
        count: 4,
        speed: 5.2,
        ms: 430,
        size: 0.32,
        gravity: -5,
        spread: 1
      },
      hound: {
        count: 5,
        speed: 5.6,
        ms: 470,
        size: 0.27,
        gravity: -12,
        spread: 0.58
      },
      machine: {
        count: 5,
        speed: 6.4,
        ms: 440,
        size: 0.22,
        gravity: -15,
        spread: 0.72
      },
      vapor: {
        ms: 520,
        size: 0.62,
        rise: 1.35,
        drift: 0.62,
        opacity: 0.34
      }
    },
    hurt: {
      count: 9,
      speed: 6,
      ms: 380,
      size: 0.16,
      gravity: -14,
      flashMs: 150,
      flashSize: 1.3
    },
    pickup: {
      count: 7,
      speed: 3.6,
      ms: 320,
      size: 0.13,
      gravity: -6,
      flashMs: 190,
      flashSize: 0.8
    },
    crush: {
      startTiles: 3.4,
      pulseSlowMs: 460,
      pulseFastMs: 130,
      maxOpacity: 0.55,
      height: 15,
      width: 0.8,
      depth: 2.2,
      y0: -1.5,
      inset: 1
    },
    pools: {
      particles: 224,
      flashes: 20,
      cores: 24,
      fragments: 72,
      vapor: 28
    }
  },
  score: {
    max: 100,
    notches: [40, 100],
    notchNames: ["COLD", "WARM", "BREAKING"],
    notchMult: [1, 1.4, 1.9],
    warmFireMult: 0.85,
    shockRadius: 2.4,
    shockDamage: 4,
    gain: {
      airborne_kill: 28,
      launch_kill: 20,
      link: 12,
      reclaim: 36,
      wager: 50,
      recatch: 40,
      ground_kill: 6
    },
    drain: {
      moving: 14,
      stopped: 44
    },
    threat: {
      airborne_kill: 100,
      launch_kill: 60,
      link: 25,
      reclaim: 150,
      wager: 250,
      recatch: 200,
      ground_kill: 25
    },
    launchGraceMs: 600,
    stallSpeed: 2,
    stallTickMs: 100,
    linkDropTiles: 2,
    reclaim: {
      lowTiles: 2,
      highTiles: 8,
      windowMs: 2500
    },
    routeRadiusTiles: 2.2,
    routeMinConnectors: 3,
    eventCap: 256,
    classification: [[0, "OBSERVE"], [2000, "INTERCEPT"], [5000, "CONTAIN"], [9000, "QUARANTINE"], [14000, "STERILIZE"], [20000, "SCUTTLE"]]
  },
  palette: {
    bg: 2304048,
    ground: 7765125,
    groundAlt: 6975610,
    catwalk: 9278364,
    player: 14278114,
    gun: 16763238,
    wasp: 8176764,
    carrier: 5148506,
    capsule: "#ff4fd8",
    modCapsule: "#ffd75e",
    hound: 6262588,
    houndTell: 16765088,
    houndCharge: 4028954,
    polyp: 7645243,
    polypTell: 16765088,
    polypBeam: 13041487,
    polypVent: 14262378,
    mortar: 7182926,
    mortarTell: 16765088,
    mortarPod: 14221178,
    mortarMark: 16754253,
    mortarBlast: 16769162,
    warden: 9400925,
    hookAnchor: 13148234,
    hookLive: 16765286,
    hookTether: 16773314,
    shots: {
      R: 16773314,
      S: 16752943,
      L: 10483711,
      H: 16751327,
      F: 16747082
    },
    tints: {
      lance: "rgba(255,255,255,0.5)",
      rage: "rgba(255,50,50,0.14)",
      chrono: "rgba(90,200,255,0.12)"
    }
  }
};
export const WEAPON_LETTERS = Object.keys(CONFIG.weapons);
export const BULLET_NOSE_CEILING_TILES = CONFIG.rifle.radius * CONFIG.weapons.L.scale[0];
export const LIGHT_RIG = {
  exposure: 1.35,
  key: {
    intensity: 2.45,
    azimuthDeg: 40,
    elevationDeg: 50
  },
  fill: {
    intensity: 0.62,
    azimuthDeg: 150,
    elevationDeg: 78
  },
  rim: {
    intensity: 0.75,
    azimuthDeg: 214,
    elevationDeg: 12
  },
  bright: {
    exposure: 1.5,
    keyIntensity: 2.6
  },
  shadow: {
    mapSize: 2048,
    halfWidth: 40,
    halfHeight: 28,
    distance: 70,
    near: 1,
    far: 170,
    bias: -0.0006,
    normalBias: 0.05,
    aheadTiles: 3,
    snapToTexel: true
  }
};
export const POST_TUNE = {
  bloom: {
    strength: 0.62,
    radius: 0.3,
    threshold: 0.78,
    strengthMax: 3
  },
  samples: 2,
  emissiveGain: 1.45
};
export const BACKDROP_TUNE = {
  root: "../../assets/generated/backdrops/",
  tiers: {
    near: {
      depth: -16,
      yBottom: 17.9,
      frameFraction: 0.28,
      tint: "backdropNear"
    },
    mid: {
      depth: -21,
      yBottom: 19.2,
      frameFraction: 0.22,
      tint: "backdropMid"
    },
    far: {
      depth: -26,
      yBottom: 20.8,
      frameFraction: 0.16,
      tint: "backdropFar"
    }
  },
  plates: {
    limbSegment: {
      file: "backdrop-limb-segment.png",
      canvas: [1024, 512],
      opacity: 0.42
    },
    spineCoil: {
      file: "backdrop-spine-coil.png",
      canvas: [512, 512],
      opacity: 0.58
    },
    gillCavity: {
      file: "backdrop-gill-cavity.png",
      canvas: [512, 512],
      opacity: 0.46
    },
    colonyCluster: {
      file: "backdrop-colony-cluster.png",
      canvas: [512, 256],
      opacity: 0.34
    },
    crownHorizon: {
      file: "backdrop-crown-summit-v2.png",
      canvas: [1983, 793],
      yLift: 16
    }
  },
  placements: [{
    face: 1,
    plate: "limbSegment",
    tier: "near"
  }, {
    face: 1,
    plate: "crownHorizon",
    tier: "far"
  }, {
    face: 2,
    plate: "spineCoil",
    tier: "mid"
  }, {
    face: 2,
    plate: "colonyCluster",
    tier: "far"
  }, {
    face: 3,
    plate: "limbSegment",
    tier: "near"
  }, {
    face: 3,
    plate: "gillCavity",
    tier: "mid"
  }, {
    face: 4,
    plate: "spineCoil",
    tier: "mid"
  }, {
    face: 4,
    plate: "crownHorizon",
    tier: "far"
  }, {
    face: 5,
    plate: "limbSegment",
    tier: "near"
  }, {
    face: 5,
    plate: "colonyCluster",
    tier: "far"
  }, {
    face: 6,
    plate: "gillCavity",
    tier: "mid"
  }, {
    face: 6,
    plate: "crownHorizon",
    tier: "far"
  }]
};