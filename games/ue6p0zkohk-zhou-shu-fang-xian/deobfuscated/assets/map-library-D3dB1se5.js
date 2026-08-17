const e = "2026-07-31";
const a = {
  grid: {
    rows: 6,
    cols: 8
  },
  zones: {
    playerDeploy: {
      fromCol: 1,
      toCol: 5
    },
    enemyTravel: {
      fromCol: 6,
      toCol: 8
    }
  },
  facing: {
    players: "right",
    enemies: "left"
  },
  barrier: {
    side: "left",
    health: 10,
    coveredLanes: 6
  },
  enemySpawn: {
    side: "right",
    mode: "staggered-by-lane"
  },
  rosterSize: 5,
  laneProgression: {
    defaultActiveLaneCount: 4,
    supportedActiveLaneCount: [4, 5, 6],
    unlockOrder: [5, 6]
  },
  balance: {
    enemyBaseSpeedMultiplier: 0.92,
    recommendedRangedAttackRangeTiles: {
      min: 3,
      max: 4
    },
    gojoGlobalCoverage: true,
    gojoActivationThreshold: "high",
    waveEnemyCount: "slightly-increased",
    waveDistribution: "spread-across-active-lanes-never-fill-all-at-once"
  }
};
const t = {
  mode: "per-map-user-calibrated-quadrilateral",
  units: "canvas-pixels",
  canvas: {
    width: 1440,
    height: 810
  },
  origin: {
    logicalAnchor: "battlefield-bottom-left",
    screenPointSource: "maps[].battlefield.perspectiveQuad.bottomLeft",
    logicalAxes: {
      x: "right",
      y: "up"
    },
    screenAxes: {
      x: "right",
      y: "down"
    }
  },
  edgePolicy: {
    scope: "per-map",
    shape: "convex-quadrilateral",
    cornerOrder: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
    horizontalOrder: "left-to-right",
    verticalOrder: "top-to-bottom"
  },
  leftUiReservation: {
    currentRightX: 304,
    safetyGap: 46,
    originPolicy: "left-ui-right-plus-safety-gap"
  },
  cellCount: 48,
  addressFormat: "R{row:02}C{col:02}",
  interpolation: "bilinear",
  placementAnchor: "bilinear-cell-center",
  displayPrecision: {
    positionDecimals: 1
  },
  zoneByColumn: {
    "C01-C05": "player-deployment-floor",
    "C06-C08": "enemy-walk-floor"
  }
};
const o = {
  "player-deployment-floor": {
    columns: [1, 5],
    placementAnchor: "cell-center",
    unitFacing: "right",
    visual: "subtle-ritual-anchor-painted-on-map-stone"
  },
  "enemy-walk-floor": {
    columns: [6, 8],
    movementDirection: "right-to-left",
    movementVector: {
      x: -1,
      y: 0
    },
    spawnColumn: 8,
    exitColumn: 6,
    fullLanePathColumns: [8, 1],
    coreAfterColumn: 1,
    visual: "subtle-left-chevron-painted-on-map-stone"
  }
};
const r = {
  style: "unified-bright-cel-shaded-anime-background",
  camera: "true-vertical-overhead-orthographic",
  composition: "wide-16:9-axis-aligned-rectangular-battlefield-with-left-ui-reservation",
  factionSymmetry: "matching-left-right-gates-lanterns-and-banner-scale",
  runtimeOverlay: "all-gameplay-stones-grid-locks-and-markers-rendered-by-phaser",
  avoid: ["photorealism", "dark-vignette", "random-rubble", "baked-in-grid", "characters", "text", "watermark"]
};
const n = {
  "uniform-cel-stone": {
    width: 120,
    height: 73,
    cornerRadius: 5,
    baseColor: "#91a095",
    edgeColor: "#dbe5dd",
    shadowColor: "#52635a",
    highlightColor: "#ffffff",
    variation: "none",
    style: "unified-cel-shaded"
  }
};
const i = [{
  id: "training",
  name: "高专训练场",
  chapter: "第一章",
  short: "训练场",
  description: "6路庭院 / 新手防线",
  threat: "低危",
  waves: "5 波",
  spawn: "6.2 秒",
  accent: "#5eead4",
  deploy: "#91a095",
  buffer: "#91a095",
  tileEdge: "#dbe5dd",
  background: "#9fc9b2",
  backgroundSecondary: "#d9e7d6",
  weather: "晴昼 / 微风",
  stoneTemplate: "uniform-cel-stone",
  texture: "chapter-01-training-cel-v7",
  asset: "./assets/maps/chapter-01-training-cel-v7.png",
  assetMetadata: {
    width: 1672,
    height: 941,
    format: "png",
    generator: "gpt-image-2+layout-normalization",
    version: 7,
    sourceVersion: 6,
    camera: "vertical-overhead-orthographic",
    battlefieldImageBounds: {
      left: 368,
      right: 1538,
      top: 141,
      bottom: 819
    },
    layoutTemplate: "chapter-04-shibuya-subway-cel-v4"
  },
  generationSpec: {
    scene: "bright mountain sorcery academy training courtyard",
    leftCampAccent: "light-cyan",
    rightCampAccent: "restrained-vermilion",
    centralPlayArea: "clean-unobstructed-pale-stone-courtyard",
    perimeter: ["traditional-tiled-roofs", "cedar-halls", "trimmed-pines", "stone-lanterns", "low-walls"],
    constraints: ["axis-aligned-rectangle", "vertical-overhead-orthographic", "left-ui-reservation", "shared-subway-bounds", "clear-daylight"]
  },
  battlefield: {
    perspectiveQuad: {
      topLeft: {
        x: 376,
        y: 128
      },
      topRight: {
        x: 1268,
        y: 128
      },
      bottomRight: {
        x: 1325,
        y: 690
      },
      bottomLeft: {
        x: 323,
        y: 690
      }
    },
    stoneStyle: {
      fill: "#c8cec1",
      fillAlpha: 0.2,
      edge: "#f1f0df",
      edgeAlpha: 0.48,
      shadow: "#687269",
      shadowAlpha: 0.32
    },
    calibrationStatus: "user-confirmed-schema-11",
    coreEdge: "left",
    spawnEdge: "right"
  },
  activeLanes: [1, 2, 3, 4],
  lockedLanes: [5, 6],
  encounter: "deployment-tutorial",
  artStatus: "production-v7-normalized"
}, {
  id: "school",
  name: "杉泽高中屋顶",
  chapter: "第二章",
  short: "杉泽屋顶",
  description: "6路屋顶 / 咒物解封",
  threat: "中危",
  waves: "5 波",
  spawn: "2.5 秒",
  accent: "#7dd3fc",
  deploy: "#71828c",
  buffer: "#71828c",
  tileEdge: "#b7cad2",
  background: "#718b94",
  backgroundSecondary: "#c2d1d2",
  weather: "月夜 / 雨后",
  stoneTemplate: "uniform-cel-stone",
  texture: "chapter-02-sugisawa-school-cel-v9",
  asset: "./assets/maps/chapter-02-sugisawa-school-cel-v9.png",
  assetMetadata: {
    width: 1672,
    height: 941,
    format: "png",
    generator: "gpt-image-2+layout-normalization",
    version: 9,
    sourceVersion: 9,
    camera: "vertical-overhead-orthographic",
    battlefieldImageBounds: {
      left: 368,
      right: 1538,
      top: 141,
      bottom: 819
    },
    layoutTemplate: "chapter-04-shibuya-subway-cel-v4"
  },
  generationSpec: {
    scene: "Sugisawa Third High School rooftop after the cursed-object incident",
    centralPlayArea: "clean-unobstructed-rain-wet-rooftop",
    perimeter: ["chain-link-fence", "rooftop-stairwells", "water-tower", "curse-seals", "distant-school-buildings"],
    constraints: ["axis-aligned-rectangle", "vertical-overhead-orthographic", "left-ui-reservation", "shared-subway-bounds", "water-tower-fully-outside-field", "moonlit-night"]
  },
  battlefield: {
    perspectiveQuad: {
      topLeft: {
        x: 359,
        y: 131
      },
      topRight: {
        x: 1273,
        y: 131
      },
      bottomRight: {
        x: 1315,
        y: 696
      },
      bottomLeft: {
        x: 327,
        y: 696
      }
    },
    stoneStyle: {
      fill: "#aeb7b9",
      fillAlpha: 0.18,
      edge: "#d7e5e8",
      edgeAlpha: 0.42,
      shadow: "#59666a",
      shadowAlpha: 0.28
    },
    calibrationStatus: "user-confirmed-schema-11",
    coreEdge: "left",
    spawnEdge: "right"
  },
  activeLanes: [1, 2, 3, 4, 5],
  lockedLanes: [6],
  encounter: "mixed-enemy-pressure",
  artStatus: "production-v9-normalized"
}, {
  id: "lakeside",
  name: "湖畔截击",
  chapter: "第三章",
  short: "湖畔截击",
  description: "6路石台 / 漏瑚截击",
  threat: "高危",
  waves: "4 波 + Boss",
  spawn: "2.4 秒",
  accent: "#67d5d2",
  deploy: "#8fa49a",
  buffer: "#8fa49a",
  tileEdge: "#d4e4dc",
  background: "#75a9a2",
  backgroundSecondary: "#bcd9cf",
  weather: "晴昼 / 湖风",
  stoneTemplate: "uniform-cel-stone",
  texture: "chapter-03-jogo-lakeside-cel-v7",
  asset: "./assets/maps/chapter-03-jogo-lakeside-cel-v7.png",
  assetMetadata: {
    width: 1672,
    height: 941,
    format: "png",
    generator: "gpt-image-2+layout-normalization",
    version: 7,
    sourceVersion: 6,
    camera: "vertical-overhead-orthographic",
    battlefieldImageBounds: {
      left: 368,
      right: 1538,
      top: 141,
      bottom: 819
    },
    layoutTemplate: "chapter-04-shibuya-subway-cel-v4"
  },
  generationSpec: {
    scene: "bright secluded mountain lakeside encounter terrace",
    centralPlayArea: "clean-unobstructed-pale-stone-boss-arena",
    perimeter: ["turquoise-lake", "forested-hills", "reeds", "pines", "small-shrine-shelters", "stone-lanterns"],
    constraints: ["axis-aligned-rectangle", "vertical-overhead-orthographic", "left-ui-reservation", "shared-subway-bounds", "lake-outside-play-area", "clear-midday-light"]
  },
  battlefield: {
    perspectiveQuad: {
      topLeft: {
        x: 328,
        y: 129
      },
      topRight: {
        x: 1316,
        y: 129
      },
      bottomRight: {
        x: 1315,
        y: 695
      },
      bottomLeft: {
        x: 328,
        y: 694
      }
    },
    stoneStyle: {
      fill: "#d8d0bc",
      fillAlpha: 0.18,
      edge: "#f5ecd5",
      edgeAlpha: 0.5,
      shadow: "#7d7569",
      shadowAlpha: 0.28
    },
    calibrationStatus: "user-confirmed-schema-11",
    coreEdge: "left",
    spawnEdge: "right"
  },
  activeLanes: [1, 2, 3, 4, 5],
  lockedLanes: [6],
  encounter: "jogo-boss-tutorial",
  specialRules: ["temporary-lava-cells", "gojo-high-threshold-activation"],
  artStatus: "production-v7-normalized"
}, {
  id: "subway",
  name: "涩谷地下战线",
  chapter: "第四章",
  short: "涩谷地下",
  description: "6路站厅 / 封印危机",
  threat: "特危",
  waves: "6 波",
  spawn: "2.2 秒",
  accent: "#f2c45f",
  deploy: "#7d8988",
  buffer: "#7d8988",
  tileEdge: "#d4d9d6",
  background: "#788b89",
  backgroundSecondary: "#b7c1bc",
  weather: "地下 / 列车风",
  stoneTemplate: "uniform-cel-stone",
  texture: "chapter-04-shibuya-subway-cel-v4",
  asset: "./assets/maps/chapter-04-shibuya-subway-cel-v4.png",
  assetMetadata: {
    width: 1672,
    height: 941,
    format: "png",
    generator: "gpt-image-2",
    version: 4,
    camera: "vertical-overhead-orthographic",
    battlefieldImageBounds: {
      left: 368,
      right: 1538,
      top: 141,
      bottom: 819
    },
    layoutTemplate: "self"
  },
  generationSpec: {
    scene: "bright modern Japanese underground subway interchange concourse",
    centralPlayArea: "wide-empty-clean-tiled-concourse",
    perimeter: ["fluorescent-ceiling-panels", "station-walls", "stairs", "closed-train-doors", "columns", "tunnel-mouths"],
    constraints: ["axis-aligned-rectangle", "vertical-overhead-orthographic", "left-ui-reservation", "no-readable-signage", "no-baked-gameplay-grid"]
  },
  battlefield: {
    perspectiveQuad: {
      topLeft: {
        x: 348,
        y: 150
      },
      topRight: {
        x: 1288,
        y: 150
      },
      bottomRight: {
        x: 1319,
        y: 690
      },
      bottomLeft: {
        x: 327,
        y: 690
      }
    },
    stoneStyle: {
      fill: "#c9cdca",
      fillAlpha: 0.16,
      edge: "#f0f2ed",
      edgeAlpha: 0.45,
      shadow: "#666d6b",
      shadowAlpha: 0.25
    },
    calibrationStatus: "user-confirmed-schema-11",
    coreEdge: "left",
    spawnEdge: "right"
  },
  activeLanes: [1, 2, 3, 4, 5, 6],
  lockedLanes: [],
  encounter: "full-lane-pressure",
  specialRules: ["temporary-train-lane-block", "staggered-transfer-gate-spawns"],
  artStatus: "production-v4"
}, {
  id: "volcanic",
  name: "盖棺铁围山",
  chapter: "第五章",
  short: "铁围山",
  description: "6路领域 / 最终决战",
  threat: "极危",
  waves: "5 波 + Boss",
  spawn: "2.0 秒",
  accent: "#ffb34d",
  deploy: "#82766e",
  buffer: "#82766e",
  tileEdge: "#c7a98e",
  background: "#986354",
  backgroundSecondary: "#dfaa73",
  weather: "热浪 / 火山灰",
  stoneTemplate: "uniform-cel-stone",
  texture: "chapter-05-iron-mountain-cel-v7",
  asset: "./assets/maps/chapter-05-iron-mountain-cel-v7.png",
  assetMetadata: {
    width: 1672,
    height: 941,
    format: "png",
    generator: "gpt-image-2+layout-normalization",
    version: 7,
    sourceVersion: 6,
    camera: "vertical-overhead-orthographic",
    battlefieldImageBounds: {
      left: 368,
      right: 1538,
      top: 141,
      bottom: 819
    },
    layoutTemplate: "chapter-04-shibuya-subway-cel-v4"
  },
  generationSpec: {
    scene: "cel-shaded volcanic cursed-domain final arena",
    centralPlayArea: "level-readable-neutral-charcoal-obsidian-platform",
    perimeter: ["lava-channels", "basalt-cliffs", "torii-gates", "controlled-flame-bowls"],
    constraints: ["axis-aligned-rectangle", "vertical-overhead-orthographic", "left-ui-reservation", "shared-subway-bounds", "lava-outside-play-area", "readable-warm-midtones"]
  },
  battlefield: {
    perspectiveQuad: {
      topLeft: {
        x: 333,
        y: 136
      },
      topRight: {
        x: 1310,
        y: 136
      },
      bottomRight: {
        x: 1315,
        y: 691
      },
      bottomLeft: {
        x: 334,
        y: 691
      }
    },
    stoneStyle: {
      fill: "#343132",
      fillAlpha: 0.22,
      edge: "#8f7665",
      edgeAlpha: 0.5,
      shadow: "#141112",
      shadowAlpha: 0.4
    },
    calibrationStatus: "user-confirmed-schema-11",
    coreEdge: "left",
    spawnEdge: "right"
  },
  activeLanes: [1, 2, 3, 4, 5, 6],
  lockedLanes: [],
  encounter: "final-domain-boss",
  artStatus: "production-v7-normalized"
}];
const s = {
  schemaVersion: 11,
  updatedAt: e,
  design: a,
  coordinateSystem: t,
  floorTemplates: o,
  artDirection: r,
  stoneTemplates: n,
  maps: i
};
export { s as m };