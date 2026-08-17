const e = "jutsu-frontline";
const a = "origin-generate";
const t = {
  style: "bright Japanese tactical-anime game sprite, crisp dark ink contours, controlled four-band cel shading, readable silhouette at small tower-defense scale",
  camera: "three-quarter side view, full body, facing screen-left",
  background: "transparent RGBA",
  canvas: "512x512",
  avoid: ["photorealism", "painterly blur", "cropped body", "text", "watermark", "extra limbs", "embedded ground shadow", "magenta fringe"]
};
const r = {
  idle: {
    frames: 8,
    fps: 8
  },
  move: {
    frames: 12,
    fps: 12
  },
  attack: {
    frames: 18,
    fps: 16,
    hitFrame: 10
  },
  hurt: {
    frames: 6,
    fps: 12,
    hitFrame: 1
  },
  death: {
    frames: 14,
    fps: 14,
    hitFrame: 4
  }
};
const i = [{
  id: "curse",
  nameZh: "普通咒灵",
  codename: "Common Curse",
  archetype: "melee",
  threatTier: 1,
  firstChapter: 1,
  description: "基础近战咒灵，以稳定数量构成前期路线压力。",
  behavior: "沿路线推进，接触前排术师后连续爪击。",
  counterplay: "任意稳定输出与前排阻挡。",
  silhouette: "tall gaunt humanoid curse with a cracked pale mask, long clawed arms and torn charcoal robes",
  materials: "blue-gray skin, cracked stone mask, frayed charcoal cloth",
  palette: ["#566474", "#d1d3cf", "#292b31"],
  extraDirection: "Preserve the existing cracked-mask humanoid design and its long readable arms.",
  stats: {
    health: 120,
    speed: 0.82,
    armor: 2,
    attack: 10,
    attackRangeTiles: 0.45,
    attackInterval: 1.1,
    reward: 10,
    groupSize: 1
  },
  poseActions: {
    idle: "hunched stalking stance with uneven breathing",
    move: "lurching screen-left with alternating long-arm swings",
    attack: "lunging forward with a three-claw rake",
    hurt: "upper body knocked backward while feet keep their anchor",
    death: "mask cracking apart as the body collapses into dark ash"
  },
  vfx: "three narrow violet-black claw trails with smoky cursed fragments",
  voice: "dry broken breathing and a short hollow mask shriek",
  attackSfx: "fast triple claw swipe with a compact cursed impact",
  deathSfx: "stone mask crack followed by dry ash dispersal"
}, {
  id: "flyhead-swarm",
  nameZh: "蝇头群",
  codename: "Flyhead Swarm",
  archetype: "swarm",
  threatTier: 1,
  firstChapter: 1,
  description: "成群涌入路线的低阶飞行咒灵，以数量消耗术师的攻击次数。",
  behavior: "每次生成五只，沿同一路线低空贴地飞行；单体攻击逐只击破，范围攻击一次最多消灭两只。",
  counterplay: "范围攻击与持续控制。",
  silhouette: "small hunched insectoid curse with a swollen mask-like head, ragged translucent wings and thin hooked legs; one creature only",
  materials: "charcoal skin, cloudy gray wing membrane, dim acid-green eyes",
  palette: ["#27252d", "#87958e", "#b8d35d"],
  extraDirection: "Keep the wings broad enough to read at 64 pixels. Do not make it cute or anatomically realistic.",
  stats: {
    health: 24,
    speed: 1.25,
    armor: 0,
    attack: 5,
    attackRangeTiles: 0.35,
    attackInterval: 0.8,
    reward: 6,
    groupSize: 5
  },
  poseActions: {
    idle: "hovering with an uneven wing beat and curled legs",
    move: "darting screen-left in a low forward lean, wings swept back",
    attack: "snapping its mask-like mouth forward with both hooked legs extended",
    hurt: "knocked sideways with wings folding unevenly",
    death: "curling inward and dissolving into smoky fragments"
  },
  vfx: "a compact burst of dirty green cursed motes and torn gray wing dust",
  voice: "a layered dry insect chatter with a short warped human gasp",
  attackSfx: "rapid papery wing flutter followed by a small cursed bite impact",
  deathSfx: "thin brittle crackle collapsing into a brief smoky hiss"
}, {
  id: "runner",
  nameZh: "快速咒灵",
  codename: "Runner Curse",
  archetype: "runner",
  threatTier: 2,
  firstChapter: 2,
  description: "以极快速度穿过火力空档的低姿突进型咒灵。",
  behavior: "进入战场后持续加速，优先冲击防线薄弱的路线。",
  counterplay: "提前布置减速与短间隔攻击。",
  silhouette: "low purple quadrupedal curse with a blade-shaped skull, ribbed back and very long hooked forelimbs",
  materials: "glossy deep-violet hide, black rib plates, pale teeth",
  palette: ["#342044", "#6d3b85", "#c6a0dd"],
  extraDirection: "Preserve the existing low runner design and keep all four limbs readable in motion.",
  stats: {
    health: 130,
    speed: 1.46,
    armor: 0,
    attack: 9,
    attackRangeTiles: 0.4,
    attackInterval: 0.75,
    reward: 12,
    groupSize: 1
  },
  poseActions: {
    idle: "low coiled stance with shoulders twitching",
    move: "fast four-limbed gallop screen-left with a clear airborne beat",
    attack: "driving its blade-shaped head and foreclaws forward",
    hurt: "skidding sideways with forelimbs splayed",
    death: "losing stride and dissolving into violet smoke"
  },
  vfx: "thin violet speed cuts and a sharp forward impact wedge",
  voice: "rapid clicking growl rising into a short predatory screech",
  attackSfx: "fast claw impacts with a compressed air snap",
  deathSfx: "skidding scrape ending in a brief cursed hiss"
}, {
  id: "longtongue-curse",
  nameZh: "长舌咒灵",
  codename: "Longtongue Curse",
  archetype: "ranged",
  threatTier: 2,
  firstChapter: 2,
  description: "停在安全距离，以伸缩舌刃攻击前排术师的远程咒灵。",
  behavior: "进入射程后停止前进，优先攻击同路线最靠前的术师。",
  counterplay: "远程点杀与前排保护。",
  silhouette: "tall narrow curse with a sealed vertical face, overlong forearms and one muscular ribbon-like tongue coiled inside the jaw",
  materials: "desaturated blue-gray hide, dark navy joints, restrained crimson mouth interior",
  palette: ["#63757c", "#1f2937", "#b4474d"],
  extraDirection: "The tongue is one continuous appendage and remains mostly coiled in idle poses. Avoid gore.",
  stats: {
    health: 118,
    speed: 0.72,
    armor: 8,
    attack: 18,
    attackRangeTiles: 3.2,
    attackInterval: 1.7,
    reward: 18,
    groupSize: 1
  },
  poseActions: {
    idle: "upright stalking stance with the jaw sealed and long arms hanging low",
    move: "measured screen-left walk with shoulders pitched forward",
    attack: "braced stance launching one ribbon-like tongue blade straight toward screen-left",
    hurt: "torso recoiling while the tongue snaps back toward the mouth",
    death: "knees buckling as the body folds and evaporates from the head downward"
  },
  vfx: "a thin crimson-black cursed slash trail with a sharp impact knot",
  voice: "wet restrained throat clicking that rises into one short metallic shriek",
  attackSfx: "fast whip crack layered with a narrow cursed-energy slice",
  deathSfx: "low throat collapse followed by dry ash dispersal"
}, {
  id: "shell",
  nameZh: "甲壳咒灵",
  codename: "Shell Curse",
  archetype: "tank",
  threatTier: 3,
  firstChapter: 3,
  description: "以厚重岩甲吸收伤害并缓慢推进的高耐久咒灵。",
  behavior: "稳定前进并承受正面火力，接敌后使用蓄力重砸。",
  counterplay: "破甲攻击与集中火力。",
  silhouette: "massive hunched stone-armored curse with overlapping olive shell plates, heavy fists and short legs",
  materials: "weathered olive stone plates, dark joints, dusty chipped edges",
  palette: ["#343b2f", "#667052", "#a7aa86"],
  extraDirection: "Preserve the existing layered shell silhouette and its heavy forward weight.",
  stats: {
    health: 260,
    speed: 0.48,
    armor: 32,
    attack: 28,
    attackRangeTiles: 0.55,
    attackInterval: 2.1,
    reward: 30,
    groupSize: 1
  },
  poseActions: {
    idle: "heavy planted stance with shell plates settling",
    move: "slow screen-left march with alternating weighted steps",
    attack: "raising both fists before a compact ground slam",
    hurt: "shell plates jolting while the body barely gives ground",
    death: "armor plates splitting and dropping before the core fades"
  },
  vfx: "olive-gray ground shock with stone chips and a short dust ring",
  voice: "deep stone grinding with a muffled subterranean groan",
  attackSfx: "heavy rock fist slam with a low ground thump",
  deathSfx: "layered stone fractures ending in a hollow collapse"
}, {
  id: "burst-curse",
  nameZh: "爆裂咒灵",
  codename: "Burst Curse",
  archetype: "death-burst",
  threatTier: 3,
  firstChapter: 3,
  description: "死亡时释放咒力冲击，对邻近部署格造成范围伤害。",
  behavior: "缓慢接近术师；生命归零后短暂膨胀并爆裂。",
  counterplay: "远距离击杀并分散阵型。",
  silhouette: "round unstable curse wrapped in binding cords, with a cracked ceramic belly core and two heavy dragging arms",
  materials: "smoky violet flesh, pale ceramic core, muted yellow binding cords",
  palette: ["#51405f", "#d2cec3", "#c5a85b"],
  extraDirection: "Make the cracked belly core the dominant read. Keep the body compact and avoid exposed organs.",
  stats: {
    health: 165,
    speed: 0.66,
    armor: 12,
    attack: 12,
    attackRangeTiles: 0.5,
    attackInterval: 1.4,
    reward: 22,
    groupSize: 1,
    deathBurstDamage: 24,
    deathBurstRadiusTiles: 1.15
  },
  poseActions: {
    idle: "heavy breathing stance with the ceramic core pulsing faintly",
    move: "dragging both arms while waddling screen-left under its own weight",
    attack: "swinging one heavy arm down in a compact body slam",
    hurt: "ceramic core flashing as the body compresses around the impact",
    death: "core overinflating for a clear warning beat, then splitting into outward cursed fragments"
  },
  vfx: "a circular violet pressure burst with ceramic shards and a clean one-tile warning ring",
  voice: "muffled internal moan pulsing behind a hard ceramic shell",
  attackSfx: "heavy padded body strike with a ceramic knock",
  deathSfx: "rising cursed pressure whine ending in a compact ceramic blast"
}, {
  id: "jogo",
  nameZh: "漏瑚",
  codename: "Jogo",
  archetype: "boss",
  threatTier: 4,
  firstChapter: 3,
  description: "第三章登场的特级火山咒灵，以远程熔火术式压制多条路线。",
  behavior: "作为单体 Boss 登场，周期性投射熔火弹并制造范围灼烧。",
  counterplay: "分散部署、持续破甲并保留高伤害技能。",
  silhouette: "compact humanoid volcanic curse with a crater-shaped brown head, one large eye, spotted pale neck wrap and dark robe",
  materials: "cracked volcanic rock skin, ash-black robe, pale spotted wrap, orange magma glow",
  palette: ["#382d29", "#8b6245", "#ff7043"],
  extraDirection: "Preserve the existing crater-headed Jogo design and single-eye expression.",
  stats: {
    health: 760,
    speed: 0.42,
    armor: 40,
    attack: 48,
    attackRangeTiles: 4.2,
    attackInterval: 2.4,
    reward: 120,
    groupSize: 1,
    boss: true
  },
  poseActions: {
    idle: "calm upright stance with heat shimmer rising from the crater",
    move: "measured screen-left walk while the robe and neck wrap follow through",
    attack: "extending one hand to launch a compact molten fireball",
    hurt: "torso recoiling as the crater vents sparks",
    death: "magma light failing as the stone body fractures and collapses"
  },
  vfx: "compact orange-red molten fireball with black volcanic fragments",
  voice: "older harsh curse voice with restrained contempt and volcanic resonance",
  attackSfx: "compressed magma ignition followed by a heavy fireball launch",
  deathSfx: "deep volcanic fracture collapsing into cooling stone hiss"
}, {
  id: "curse-core-matron",
  nameZh: "咒核母体",
  codename: "Curse Core Matron",
  archetype: "support",
  threatTier: 4,
  firstChapter: 5,
  description: "为周围咒灵补充护盾并缓慢治疗的后排辅助单位。",
  behavior: "保持在队伍后方，每隔数秒为附近两只咒灵施加咒核护膜。",
  counterplay: "优先集火与破甲攻击。",
  silhouette: "broad floating shrine-like curse with a central faceted core, folded mantle arms and three small orbiting seal plates",
  materials: "black-green stone shell, cool cyan core light, aged brass seal plates",
  palette: ["#263b36", "#65c9bd", "#a88b50"],
  extraDirection: "Exactly three orbiting seal plates. The core must remain visible and targetable in every pose.",
  stats: {
    health: 245,
    speed: 0.54,
    armor: 24,
    attack: 7,
    attackRangeTiles: 2.4,
    attackInterval: 2.8,
    reward: 38,
    groupSize: 1,
    supportRadiusTiles: 2.2,
    shieldAmount: 42,
    healAmount: 16
  },
  poseActions: {
    idle: "floating steadily with exactly three seal plates orbiting the exposed core",
    move: "gliding screen-left while mantle arms trail behind and plates keep formation",
    attack: "opening both mantle arms as the core projects a shield pulse toward nearby allies",
    hurt: "core flickering and all three seal plates jolting out of alignment",
    death: "seal plates breaking first, then the dark shell collapsing into the extinguished core"
  },
  vfx: "a restrained cyan-black hexagonal shield pulse with three brass seal marks",
  voice: "low layered temple resonance with distant reversed chanting, no intelligible words",
  attackSfx: "deep glassy pulse with three light brass seal clicks",
  deathSfx: "descending crystal hum followed by three plate cracks and a hollow collapse"
}];
const s = {
  schemaVersion: 2,
  project: e,
  generator: a,
  artDirection: t,
  animationDefaults: r,
  enemies: i
};
export { s as e };