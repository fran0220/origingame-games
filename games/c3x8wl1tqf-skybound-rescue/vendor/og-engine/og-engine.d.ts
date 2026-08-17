/**
 * Type declarations for og-engine (vendor/og-engine).
 * Consumed by the project jsconfig checkJs gate and editor tooling.
 */

import type * as THREE from 'three'
import type { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import type { Pass } from 'three/addons/postprocessing/Pass.js'

export type GamePhase = 'boot' | 'loading' | 'title' | 'playing' | 'paused' | 'fail' | 'complete'

export type ShellMode = 'none' | 'auto' | 'custom'
export type ShellStartedVia =
  | { type: 'key'; code: string }
  | { type: 'pointer' }
  | { type: 'direct' }

export interface ShellStartAction {
  keys: string[]
  pointer: boolean
}

export interface ShellDiagnostics {
  mode: ShellMode
  titleShown: boolean
  startAction: ShellStartAction
  startedVia: ShellStartedVia | null
  transitionsUsed: ShellTransitionType[]
}

export type ShellTransitionType = 'fade' | 'zoom' | 'none'
export interface ShellTransitionOptions {
  type: ShellTransitionType
  durationMs?: number
}

export interface GameShell {
  readonly mode: ShellMode
  /** Required before enterPlay() when shell.title='custom'. */
  markTitleShown(): void
  /** Enter active play from title. Host telemetry records the real triggering input. */
  enterPlay(): boolean
  /** Return to title. Disabled shells cannot enter title. */
  toTitle(): boolean
  /** Run a shell/level camera transition around an authored state change. */
  transition<T>(config: ShellTransitionType | ShellTransitionOptions | undefined, apply: () => T | Promise<T>): Promise<T>
  onEnterPlay(callback: () => void): () => void
}

export interface FxTween {
  readonly finished: Promise<void>
  cancel(): void
}

export interface FxTweenOptions {
  from?: number
  to?: number
  durationMs?: number
  ease?: 'linear' | 'outCubic' | 'inOutCubic' | 'outBack' | ((t: number) => number)
  onUpdate?: (value: number, ratio: number) => void
  onComplete?: () => void
  onCancel?: () => void
}

export type FxTimelineStep =
  | { waitMs: number }
  | { tween: FxTweenOptions }
  | { cameraMoveTo: CameraPose; options?: CameraMoveOptions }
  | { call: () => void | Promise<void> | FxTween }

export interface GameFx {
  tween(options?: FxTweenOptions): FxTween
  shake(strength?: number, durationMs?: number): void
  hitStop(durationMs?: number): void
  fade(options?: { from?: number; to?: number; durationMs?: number; color?: string }): Promise<void>
  pulse(target: THREE.Object3D, options?: { scale?: number; durationMs?: number }): FxTween
  impact(options?: {
    strength?: number
    durationMs?: number
    hitStopMs?: number
    tone?: 'danger' | 'success' | 'warning'
    target?: THREE.Object3D
  }): void
  /** Compatibility alias for game.ui.flash(). */
  flash(options?: { tone?: 'danger' | 'success' | 'warning'; durationMs?: number }): void
  /** Ordered, cancellable presentation choreography over existing engine primitives. */
  timeline(steps: readonly FxTimelineStep[], options?: {
    /** Objective Host evidence label such as intro, chapter-2, result-win, or outro. */
    name?: string
    /** Respect the system preference by default; ignore only for non-motion timing with an authored reason. */
    reducedMotion?: 'respect' | 'ignore'
  }): FxTween
  getDiagnostics(): PresentationDiagnostics
  /** Cancel transient feedback and restore pre-hit-stop time scale. Called automatically on reset. */
  reset(): void
  dispose(): void
}

export interface PresentationDiagnostics {
  reducedMotion: boolean
  active: number
  started: string[]
  completed: string[]
  cancelled: string[]
}

export type CameraRigPreset = 'chase' | 'iso' | 'topdown' | 'side' | 'orbit' | 'fps'
export interface CameraRigOptions {
  target?: THREE.Object3D
  distance?: number
  height?: number
  lookHeight?: number
  lookAhead?: number
  damping?: number
  speed?: number
  angle?: number
  occlusion?: {
    query: CameraOcclusionQuery
    radius?: number
    padding?: number
  }
}
export type CameraOcclusionQuery = (from: THREE.Vector3, to: THREE.Vector3, radius: number) => number | null
export interface CameraPose {
  position?: THREE.Vector3 | [number, number, number]
  lookAt?: THREE.Object3D | THREE.Vector3 | [number, number, number]
  quaternion?: THREE.Quaternion | [number, number, number, number]
  up?: THREE.Vector3 | [number, number, number]
  fov?: number
}
export interface CameraMoveOptions {
  durationMs?: number
  ease?: FxTweenOptions['ease']
}
export interface CameraRig {
  readonly current: CameraRigPreset | null
  use(preset: CameraRigPreset, options?: CameraRigOptions): CameraRig
  follow(target: THREE.Object3D): CameraRig
  update(target?: THREE.Object3D, dt?: number): CameraRig
  /** Temporarily suspends preset follow while an authored camera pose is blended. */
  moveTo(pose: CameraPose, options?: CameraMoveOptions): FxTween
  release(): void
  dispose(): void
}

export interface VfxBurstOptions {
  position?: THREE.Object3D | THREE.Vector3 | [number, number, number]
  count?: number
  color?: THREE.ColorRepresentation
  palette?: readonly THREE.ColorRepresentation[]
  size?: number
  speed?: number | [number, number]
  lifeMs?: number | [number, number]
  direction?: THREE.Vector3 | [number, number, number]
  spread?: number
  gravity?: number | THREE.Vector3 | [number, number, number]
  drag?: number
}
export interface VfxBurst {
  cancel(): void
}
export interface VfxTrail {
  dispose(): void
}
export interface VfxDiagnostics {
  particles: { active: number; capacity: number; groups: number }
  trails: { active: number; capacity: number }
}

export type TerrainSample = number | {
  height: number
  /** Optional world-space normal. Omit to use central differences over height. */
  normal?: THREE.Vector3 | { x: number; y: number; z: number } | [number, number, number]
}
export interface TerrainSurfaceOptions {
  /** Automatically register the returned surface with this game. */
  game?: Pick<Game, 'own'>
  /** False when a caller-owned scope will dispose the returned surface. */
  owned?: boolean
  sample(x: number, z: number): TerrainSample
  /** Width/depth in world units. Default 100. */
  size?: number | { x: number; z: number }
  /** Grid subdivisions. Default 100. */
  segments?: number | { x: number; z: number }
  /** X/Z center of the surface. Default [0, 0]. */
  origin?: { x: number; z: number } | [number, number]
  /** Finite-difference distance used when a sample omits its normal. */
  normalStep?: number
  /** Fully caller-owned visual material; og-engine imposes no terrain style. */
  material: THREE.Material
}
export interface TerrainSurfaceFromEXROptions extends Omit<TerrainSurfaceOptions, 'sample'> {
  /** Canonical linear EXR heightfield URL. */
  url: string
  /** Applied after linear half/float decoding. Default 1. */
  heightScale?: number
  /** Applied after heightScale. Default 0. */
  heightOffset?: number
  /** Reverse the EXR row direction before terrain mapping. Default false. */
  flipY?: boolean
}
export interface TerrainSurface {
  geometry: THREE.BufferGeometry
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.Material>
  heightAt(x: number, z: number): number
  normalAt(x: number, z: number, target?: THREE.Vector3): THREE.Vector3
  /** Copies suitable for a physics adapter's indexed trimesh constructor. */
  collider: { vertices: Float32Array; indices: Uint32Array }
  /** Remove the mesh from its parent and release geometry. The caller-owned material is retained. */
  dispose(): void
}
export interface TerrainMaskReference {
  id: string
  channel?: 'r' | 'g' | 'b' | 'a'
  range?: readonly [number, number]
  /** Full-terrain mask UVs default to clamp; override only for an authored repeated mask. */
  uv?: TextureSampler
}
export interface TerrainDataReference {
  id: string
  uv?: TextureSampler
}
export interface TerrainMaterialLayer {
  /** Complete color + NormalGL + ARM material bundle for this layer. */
  surface: PbrMaterialDefinition
  /** Linear data/opacity texture selecting where the layer replaces prior layers. */
  mask: string | TerrainMaskReference
}
export interface TerrainMaterialDefinition {
  /** Complete color + NormalGL + ARM material bundle. */
  base: PbrMaterialDefinition
  /** Low-frequency linear data texture used to break up distant tiling. */
  macro?: {
    map: string | TerrainDataReference
    /** Symmetric albedo modulation in [0, 1]. Default 0.12. */
    strength?: number
  }
  /** Ordered mask-composited detail layers authored for this terrain. */
  layers?: readonly TerrainMaterialLayer[]
  castShadow?: boolean
  receiveShadow?: boolean
  renderOrder?: number
}
export interface TerrainConfig {
  height: {
    /** Canonical linear EXR heightfield URL. */
    source: string
    size?: number | { x: number; z: number }
    segments?: number | { x: number; z: number }
    origin?: { x: number; z: number } | [number, number]
    normalStep?: number
    scale?: number
    offset?: number
    flipY?: boolean
  }
  surface: TerrainMaterialDefinition
}
export interface ConfiguredTerrain extends TerrainSurface {
  readonly material: THREE.MeshStandardMaterial
  readonly config: TerrainConfig
  dispose(): void
}
export interface GameVfx {
  /** Deterministic, quality-scaled particle burst from an engine-owned bounded pool. */
  burst(options?: VfxBurstOptions): VfxBurst
  /** Camera-facing pooled ribbon trail. */
  trail(target: THREE.Object3D, options?: {
    width?: number
    lengthMs?: number
    sampleMs?: number
    color?: THREE.ColorRepresentation
    opacity?: number
  }): VfxTrail
  clear(): void
  getDiagnostics(): VfxDiagnostics
  dispose(): void
}

export interface LevelDefinition {
  setup(): void | (() => void) | Promise<void | (() => void)>
  dispose?(): void | Promise<void>
}
export interface GameLevels {
  readonly current: string | null
  define(id: string, definition: LevelDefinition): GameLevels
  goto(id: string, options?: { transition?: ShellTransitionType | ShellTransitionOptions }): Promise<boolean>
  dispose(): Promise<void>
}

export type RenderQualityTier = 'mobile' | 'balanced' | 'premium'
export type RenderQuality = 'auto' | RenderQualityTier

export interface RenderOptions {
  /** Default auto: start at premium and adapt DPR only from measured active-play frame time. */
  quality?: RenderQuality
  adaptive?: boolean
  /** Additional upper bound; the active quality tier can always choose a lower DPR. */
  maxPixelRatio?: number
  antialias?: boolean
  alpha?: boolean
  /** Enables renderer shadow maps; lights/meshes still opt into casting/receiving. Default true. */
  shadows?: boolean
  /** Opt into the engine's neutral key/ambient rig. Omitted means no engine lights; false reserves lighting for game code. */
  lighting?: boolean
}

/** Authored intent, not a global house style. Effects remain opt-in per game. */
export interface ArtDirectionOptions {
  palette?: {
    background?: THREE.ColorRepresentation
    primary?: THREE.ColorRepresentation
    secondary?: THREE.ColorRepresentation
    accent?: THREE.ColorRepresentation
  }
  exposure?: number
  /** Authored lights installed synchronously during game creation. */
  lighting?: LightDefinition[]
  atmosphere?: false | {
    color?: THREE.ColorRepresentation
    near?: number
    far?: number
  }
  bloom?: false | {
    strength?: number
    radius?: number
    threshold?: number
  }
}

export interface LightShadowOptions {
  mapSize?: number | [number, number]
  bias?: number
  normalBias?: number
  camera?: Partial<Pick<THREE.OrthographicCamera, 'near' | 'far' | 'left' | 'right' | 'top' | 'bottom'>>
}

export interface LightDefinition {
  type: 'ambient' | 'hemisphere' | 'directional' | 'point' | 'spot'
  name?: string
  color?: THREE.ColorRepresentation
  groundColor?: THREE.ColorRepresentation
  intensity?: number
  position?: [number, number, number]
  target?: [number, number, number]
  distance?: number
  decay?: number
  angle?: number
  penumbra?: number
  castShadow?: boolean
  shadow?: LightShadowOptions
}

export interface EnvironmentOptions {
  /** Null explicitly declares an authored no-environment treatment; clearEnvironment() returns to undeclared preview state. */
  source: string | THREE.Texture | { urls: [string, string, string, string, string, string] } | null
  /**
   * Default false. A non-null source always contributes image-based lighting and reflections.
   * True also shows the original source as the player-visible scene background;
   * enable it only when that image intentionally fits the authored composition.
   */
  background?: boolean
  intensity?: number
  backgroundIntensity?: number
  backgroundBlurriness?: number
  rotationY?: number
}

export interface RenderPipelineContext {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  composer: EffectComposer
  width: number
  height: number
  pixelRatio: number
}

export interface CustomRenderPipeline {
  name: string
  render(context: RenderPipelineContext): void
  resize?(context: RenderPipelineContext): void
  diagnostics?(context: RenderPipelineContext): Record<string, unknown> | null
  dispose?(context: RenderPipelineContext): void
}

export interface RenderDiagnostics {
  profile: 'premium-adaptive' | 'premium-fixed'
  qualityTier: RenderQualityTier
  adaptive: boolean
  backend: 'webgl2' | 'webgl1'
  pipeline: string
  passes: string[]
  pixelRatio: number
  viewport: { width: number; height: number }
  frame: { samples: number; p95Ms: number; budgetMs: number }
  draw: { calls: number; triangles: number; points: number; lines: number }
  resources: { programs: number; geometries: number; textures: number }
  shadows: boolean
  environment: {
    mode: 'none' | 'hdr' | 'exr' | 'equirectangular' | 'cube' | 'texture'
    source: string | null
    background: boolean
    authored: boolean
    usingPreviewRig: boolean
  }
  lighting: { mode: 'none' | 'preview' | 'authored'; authored: boolean; usingPreviewRig: boolean; lights: number }
  custom: Record<string, unknown> | null
}

export interface MediaDiagnostics {
  expected: number
  loaded: number
  pending: number
  failed: string[]
  ready: boolean
}

export interface GameRender {
  readonly renderer: THREE.WebGLRenderer
  readonly composer: EffectComposer
  readonly profile: 'premium-adaptive' | 'premium-fixed'
  readonly qualityTier: RenderQualityTier
  setEnvironment(input: string | THREE.Texture | EnvironmentOptions): Promise<boolean>
  clearEnvironment(): void
  setLighting(lights: LightDefinition[]): void
  clearLighting(): void
  /** Add an authored shader/post pass before the engine-owned OutputPass. */
  addPass(pass: Pass, name?: string): () => void
  /** Replace final-frame rendering without creating a second loop or double-rendering. */
  use(pipeline: CustomRenderPipeline): () => void
  render(): void
  resize(width?: number, height?: number): void
  recordFrame(realDt: number): void
  getDiagnostics(): RenderDiagnostics
  dispose(): void
}

export interface Rng {
  readonly seed: number
  reseed(seed: number): void
  /** Uniform float in [0, 1). */
  float(): number
  range(min: number, max: number): number
  /** Integer in [min, max] inclusive. */
  int(min: number, max: number): number
  chance(probability: number): boolean
  pick<T>(items: readonly T[]): T
  shuffle<T>(items: readonly T[]): T[]
}

export interface GameLoop {
  readonly fixedStep: number
  readonly frame: number
  readonly elapsed: number
  /** Real unscaled elapsed seconds, including pause/hit-stop. */
  readonly realElapsed: number
  readonly paused: boolean
  timeScale: number
  onFixedUpdate(fn: (dt: number) => void, order?: number): () => void
  onUpdate(fn: (dt: number, elapsed: number) => void, order?: number): () => void
  /** Unscaled animation-frame callback; continues while paused or timeScale=0. */
  onFrame(fn: (realDt: number, realElapsed: number) => void, order?: number): () => void
  onRender(fn: () => void, order?: number): () => void
  /**
   * Yield to the next engine/browser frame without creating an authored RAF.
   * Resolves false when stop()/dispose prevents a frame from advancing.
   */
  nextFrame(): Promise<boolean>
  start(): void
  stop(): void
  pause(): void
  resume(): void
}

export interface PointerState {
  active: boolean
  down: boolean
  x: number
  y: number
  deltaX: number
  deltaY: number
  buttons: Set<number>
  wheelX: number
  wheelY: number
  locked: boolean
}

export interface InputMap {
  /** Bind an action name to KeyboardEvent codes, e.g. ['ArrowLeft', 'KeyA']. */
  bind(action: string, codes: readonly string[]): void
  bindGamepad(action: string, binding: { index?: number; button?: number; axis?: number; direction?: 1 | -1 }): InputMap
  setGamepadDeadzone(value: number): void
  setTouchAction(action: string, value: number): void
  defineScope(name: string, enabled?: boolean): InputMap
  useScope(name: string): InputMap
  setScopeEnabled(name: string, enabled: boolean): void
  suspend(): void
  resume(): void
  requestPointerLock(element?: HTMLElement): Promise<void> | void
  exitPointerLock(): Promise<void> | void
  /** Bind canonical move-forward/backward/left/right actions. */
  bindMove(bindings?: {
    forward?: readonly string[]
    backward?: readonly string[]
    left?: readonly string[]
    right?: readonly string[]
    /** Engine-owned floating touch stick. Default true. */
    touch?: boolean
  }): InputMap
  isDown(action: string): boolean
  justPressed(action: string): boolean
  onPressed(action: string, handler: () => void): () => void
  /** -1, 0, or 1 from two opposing actions. */
  axis(negativeAction: string, positiveAction: string): number
  /** Normalized planar movement; world forward is -Z. */
  moveVec(options?: {
    relativeTo?: 'world' | 'camera' | 'screen'
    camera?: THREE.Camera
    target?: THREE.Vector3
  }): THREE.Vector3
  setReferenceCamera(camera: THREE.Camera): void
  setTouchIndicator(indicator: {
    show(x: number, y: number, right: number, forward: number): void
    hide(): void
  } | (() => { show(x: number, y: number, right: number, forward: number): void; hide(): void })): void
  readonly pointer: PointerState
  readonly touchActive: boolean
  readonly activeDevice: 'keyboard' | 'pointer' | 'touch' | 'gamepad'
  readonly suspended: boolean
  /** Declare pointer as a real control surface (Playtest contract). */
  enablePointer(): void
  /** Declare touch as a real control surface (Playtest contract). */
  enableTouch(): void
  describeControls(): { keys: string[]; pointer: boolean; touch: boolean; actions: Record<string, string[]> }
  endFrame(): void
  dispose(): void
}

export type ForwardAxis = '+z' | '-z' | '+x' | '-x'
export type PivotMode = 'ground-center' | 'center' | [number, number, number]

export type TextureSemantic = 'color' | 'emissive' | 'normal' | 'arm' | 'height' | 'opacity' | 'data'

export interface TextureSampler {
  repeat?: number | readonly [number, number]
  offset?: readonly [number, number]
  center?: readonly [number, number]
  /** Radians around center. */
  rotation?: number
  wrap?: 'clamp' | 'repeat' | 'mirror'
  anisotropy?: number
}

interface AssetEntryBase {
  id: string
  url: string
  /** Higher values load first within blocking load() or background preload(). */
  priority?: number
}

export interface ModelAssetEntry extends AssetEntryBase {
  type?: 'gltf'
  semantic?: never
  sampler?: never
  /** Same-rig semantic animation name → single-clip GLB URL, loaded as one bundle. */
  animations?: Readonly<Record<string, string>>
}

export interface TextureAssetEntry extends AssetEntryBase {
  type?: 'texture' | 'ktx2'
  /** Required GPU color-data meaning. No filename inference or implicit sRGB fallback. */
  semantic: TextureSemantic
  sampler?: TextureSampler
  animations?: never
}

export type AssetEntry = ModelAssetEntry | TextureAssetEntry

export interface AssetLoadOptions {
  onProgress?: (loaded: number, total: number) => void
}

export type PbrTextureReference = string | {
  id: string
  /** Material-local sampler override; creates one owned texture view. */
  sampler?: TextureSampler
}

export interface PbrMaterialDefinition {
  maps?: {
    color?: PbrTextureReference
    emissive?: PbrTextureReference
    normal?: PbrTextureReference
    /** Packed R=AO, G=roughness, B=metalness map reused in all three slots. */
    arm?: PbrTextureReference
    height?: PbrTextureReference
    opacity?: PbrTextureReference
  }
  /** Common material-local sampler transform for every declared map. */
  uv?: TextureSampler
  color?: THREE.ColorRepresentation
  emissive?: THREE.ColorRepresentation
  emissiveIntensity?: number
  roughness?: number
  metalness?: number
  aoIntensity?: number
  normalScale?: number | readonly [number, number]
  displacementScale?: number
  displacementBias?: number
  opacity?: number
  transparent?: boolean
  alphaTest?: number
}

export interface SpawnOptions {
  name?: string
  /** Override the manifest metadata forward axis. */
  forwardAxis?: ForwardAxis
  pivot?: PivotMode
  /** Scale the model so its bounding height equals this many meters. */
  targetHeight?: number
  /**
   * Fit selected normalized bounding-box axes to exact meter dimensions.
   * Intended for static modular environment pieces whose visual footprint must
   * match an authored support/collision prefab. Components may be omitted.
   */
  targetSize?: Readonly<{ x?: number; y?: number; z?: number }>
  /**
   * Semantic clip name → loaded same-rig, single-clip model id. Use this for
   * the idle/walk/run GLBs returned beside a Gateway-generated character.
   * The instance keeps one gameplay root while switching normalized variants.
   */
  animationSources?: Readonly<Record<string, string>>
}

export interface PlayClipOptions {
  loop?: boolean
  fadeIn?: number
  /** false to layer this clip instead of fading others out. */
  exclusive?: boolean
}

export type ClipPlayback = THREE.AnimationAction & {
  readonly finished: Promise<void>
  cancel(): void
}

export interface ModelInstance {
  /** Clean gameplay root: forward = +Z, pivot at ground center, meters scale. */
  readonly root: THREE.Group
  readonly size: THREE.Vector3
  readonly clips: string[]
  forward(target?: THREE.Vector3): THREE.Vector3
  playClip(name: string, options?: PlayClipOptions): ClipPlayback
  /** Fires when a named clip crosses the authored time once per playback/loop pass. */
  onClipEvent(
    name: string,
    timing: { timeSeconds?: number; ratio?: number },
    callback: (detail: { name: string; time: number; action: THREE.AnimationAction; instance: ModelInstance }) => void,
  ): () => void
  stopClips(): void
  /** Advance animations; call from a loop update. */
  update(dt: number): void
  dispose(): void
}

export interface LodLevel {
  id: string
  /** Three.js world-space switch distance in meters. */
  distance: number
  /** Fraction of distance used as switch hysteresis. */
  hysteresis?: number
}

export interface LodInstance {
  readonly root: THREE.Group
  readonly lod: THREE.LOD
  readonly size: THREE.Vector3
  readonly levels: ReadonlyArray<Required<LodLevel>>
  dispose(): void
}

export interface InstanceTransform {
  position?: readonly [number, number, number]
  rotationY?: number
  scale?: number | readonly [number, number, number]
}

export interface SpawnInstancedOptions extends Omit<SpawnOptions, 'animationSources'> {
  castShadow?: boolean
  receiveShadow?: boolean
}

export interface InstancedModel {
  readonly root: THREE.Group
  readonly count: number
  /** Number of InstancedMesh batches / base draw submissions. */
  readonly meshes: number
  readonly size: THREE.Vector3
  dispose(): void
}

export interface AssetEntryDiagnostics {
  id: string
  type: 'gltf' | 'texture' | 'ktx2'
  state: 'loading' | 'ready' | 'failed'
  triangles: number
  uniqueGeometries: number
  uniqueMaterials: number
  uniqueTextures: number
  estimatedGeometryBytes: number
  estimatedTextureBytes: number
  /** Comparative geometry + texture estimate, not driver-reported allocation. */
  estimatedVramBytes: number
  spawns: number
  instancedMeshes: number
  instancedCopies: number
}

export interface AssetsDiagnostics {
  summary: {
    entries: number
    ready: number
    loading: number
    failed: string[]
    triangles: number
    estimatedGeometryBytes: number
    estimatedTextureBytes: number
    /** Comparative geometry + texture estimate, not driver-reported allocation. */
    estimatedVramBytes: number
    liveSpawns: number
    instancedMeshes: number
    instancedCopies: number
  }
  entries: AssetEntryDiagnostics[]
}

export interface AssetServer {
  /** Required first-frame media. Blocking loads always preempt preload backlog at the next GLB boundary. */
  load(entries: readonly AssetEntry[], options?: AssetLoadOptions): Promise<void>
  /** Fill the same cache through the lower-priority background queue. */
  preload(entries: readonly AssetEntry[], options?: AssetLoadOptions): Promise<void>
  texture(id: string): THREE.Texture
  /** Build one canonical MeshStandardMaterial from semantic cache entries. */
  pbrMaterial(definition: PbrMaterialDefinition): THREE.MeshStandardMaterial
  /** Ensure a geometry exposes explicit uv1 data for AO/custom PBR consumers. */
  preparePbrGeometry<T extends THREE.BufferGeometry>(geometry: T): T
  clipNames(id: string): string[]
  spawn(id: string, options?: SpawnOptions): ModelInstance
  /** Spawn explicitly authored static high/mid/low variants. No implicit simplification. */
  spawnLod(levels: readonly LodLevel[], options?: Omit<SpawnOptions, 'animationSources'>): LodInstance
  /** Batch exact-compatible static GLTF primitives by shared geometry/material identity. */
  spawnInstanced(id: string, transforms: readonly InstanceTransform[], options?: SpawnInstancedOptions): InstancedModel
  getDiagnostics(): AssetsDiagnostics
  dispose(): void
}

export interface AudioEntry {
  id: string
  url: string
  /** Semantic mix role used by diagnostics and as the default play bus. */
  bus?: Exclude<AudioBusName, 'master'>
}

export type AudioBusName = 'master' | 'music' | 'ambience' | 'sfx' | 'ui' | 'voice' | 'bgm'

export interface PlayAudioOptions {
  bus?: Exclude<AudioBusName, 'master'>
  volume?: number
  loop?: boolean
  rate?: number
  /** Semantic identity used to replace, rather than stack, an existing loop. */
  loopKey?: string
}

export interface AudioCueDefinition {
  clips: readonly string[]
  bus?: Exclude<AudioBusName, 'master' | 'bgm'>
  volume?: number | readonly [number, number]
  rate?: number | readonly [number, number]
  cooldownMs?: number
  maxVoices?: number
}

export interface AudioMusicOptions {
  volume?: number
  fadeMs?: number
  loop?: boolean
}

export interface AudioDiagnostics {
  eventsPlayed: number
  loaded: Record<'music' | 'ambience' | 'sfx' | 'ui' | 'voice', number>
  active: { music: string | null; ambience: string[] }
  cuesPlayed: Record<string, number>
  musicStates: Array<{ id: string; phase: string }>
  phasesCovered: string[]
  activeVoices: number
  maxConcurrentVoices: number
  stackedLoops: string[]
  decodeErrors: string[]
  muted: boolean
  suspended: boolean
  volumes: Record<'master' | 'music' | 'ambience' | 'sfx' | 'ui' | 'voice', number>
}

export interface AudioBus {
  readonly eventsPlayed: number
  readonly muted: boolean
  readonly music: {
    readonly current: string | null
    play(id: string, options?: AudioMusicOptions): AudioBufferSourceNode
    transition(id: string, options?: AudioMusicOptions): AudioBufferSourceNode
    stop(options?: Pick<AudioMusicOptions, 'fadeMs'>): void
  }
  load(entries: readonly AudioEntry[], onProgress?: (loaded: number, total: number) => void): Promise<void>
  play(id: string, options?: PlayAudioOptions): AudioBufferSourceNode
  defineCue(id: string, definition: AudioCueDefinition): AudioBus
  cue(id: string, options?: Pick<PlayAudioOptions, 'bus' | 'volume' | 'rate'>): AudioBufferSourceNode | null
  stop(id: string): void
  stopBus(bus: AudioBusName): void
  setBusVolume(bus: AudioBusName, volume: number): void
  fadeBus(bus: AudioBusName, volume: number, durationMs?: number): void
  setMuted(muted: boolean): void
  suspend(reason?: string): void
  resume(reason?: string): void
  /** Engine lifecycle hook. Game code should normally use game.pause()/resume(). */
  onPhaseChange(phase: GamePhase): void
  /** Stop every active source without discarding decoded buffers or evidence counters. */
  reset(): void
  getDiagnostics(): AudioDiagnostics
  dispose(): void
}

export type Entity = Record<string, unknown>

export interface Diagnostics {
  publish(): void
  dispose(): void
  reportAssertionFailure(code: string, message: string): void
  clearAssertionFailures(): void
  readonly failedAssertions: Array<{ code: string; message: string }>
}

/** Single current host-observation contract published every rendered frame. */
export interface GameDiagnosticsSnapshot {
  version: 5
  frame: number
  phase: GamePhase
  controls: {
    keys: string[]
    restartKey: string
    pointer: boolean
    touch: boolean
    actions: Record<string, string[]>
  }
  canvas: { width: number; height: number }
  probe: ProbeSnapshot
  physics?: {
    declared: boolean
    ready: boolean
    supportColliders: number
    pendingDynamicActors: number
    issue: string | null
  }
  shell: ShellDiagnostics
  camera?: {
    preset: CameraRigPreset | null
    projectionMatrix: number[]
    matrixWorldInverse: number[]
  }
  render: RenderDiagnostics
  assets: AssetsDiagnostics
  media: MediaDiagnostics
  audio: AudioDiagnostics
  presentation: PresentationDiagnostics
  ui: UiDiagnostics
  assertions: { failed: Array<{ code: string; message: string }> }
}

export interface GameTestHooks {
  version: 2
  seed(value: number): void
  reset(): void
  arrange(name: string): void
}

export type ProbeData = null | boolean | number | string | ProbeData[] | { [key: string]: ProbeData }

export interface ProbeSnapshot {
  observations: Record<string, ProbeData>
  events: Array<{ name: string; data: ProbeData; at: number }>
  scenarios: ProbeScenario[]
  registrationErrors: Array<{
    code: 'observation-limit-exceeded'
    name: string
    limit: number
    message: string
  }>
}

export type ProbeExpectation =
  | { observation: string; changed: true }
  | { observation: string; eq: ProbeData }
  | { observation: string; gte: number }
  | { observation: string; lte: number }
  | { event: string; atLeast: number }

export type ProbeOutcome = 'action' | 'objective' | 'win' | 'fail' | 'restart' | 'multiplayer'

export interface ProbeScenario {
  name: string
  /** Optional project-owned deterministic setup applied before Host input. */
  arrangement?: string
  steps: Array<{ keys: string[]; durationMs: number }>
  expect: ProbeExpectation[]
  /** Project-declared result categories this real-input route proves. */
  outcomes?: ProbeOutcome[]
  capabilities?: string[]
  timeoutMs?: number
}

export interface GameProbe {
  /** Register bounded project-owned setup. The callback remains private to the page runtime. */
  arrangement(name: string, apply: () => void): () => void
  /** Publish a bounded, read-only observation. Returns an unregister function. */
  observe(name: string, read: () => unknown): () => void
  /** Record a bounded semantic event. Events describe gameplay, never pass/fail verdicts. */
  event(name: string, data?: unknown): void
  /** Declare host-executed inputs and expectations. Malformed/weak declarations are ignored. */
  scenario(name: string, scenario: Omit<ProbeScenario, 'name'>): () => void
  /** Engine/host snapshot; game code normally does not need to call this. */
  snapshot(): ProbeSnapshot
}

export interface DebugAssertions {
  /** Fail when a moving object's world forward disagrees with its velocity heading. */
  expectFacingVelocity(name: string, root: THREE.Object3D, getVelocity: () => { x: number; z: number }): void
  /** One-shot world-height sanity check in meters. */
  expectHeightBetween(name: string, root: THREE.Object3D, minHeight: number, maxHeight: number): void
  /** Fail when the object falls below killY (missing floor/reset handling). */
  expectAboveY(name: string, root: THREE.Object3D, killY: number): void
  watchSceneLeak(scene: THREE.Scene): void
  update(): void
  reset(): void
}

export type OgUiThemeName = 'arcade-neon' | 'tactical-mono'
export type OgUiFamilyName = 'arcade' | 'tactical' | 'storybook' | 'apex'
export type OgUiMotionName = 'snappy' | 'tactical' | 'gentle' | 'ceremonial' | 'reduced'
export type OgUiLayoutName = 'arcade' | 'fps' | 'race' | 'strategy' | 'minimal' | 'mobile-action'
export type OgUiPaletteSource = 'preset' | 'derived' | 'custom'

/**
 * Orthogonal UI theme: family owns visual grammar, palette owns color
 * ('auto' derives from artDirection.palette), motion owns animation
 * temperament, layout owns information placement.
 */
export interface OgUiThemeSpec {
  family?: OgUiFamilyName | string
  /** 'auto' | 'from-art-direction' derives from artDirection.palette; preset name or token map also accepted. */
  palette?: 'auto' | 'from-art-direction' | OgUiThemeName | Record<string, string>
  motion?: OgUiMotionName | string
  layout?: OgUiLayoutName | string
}

/**
 * Derive HUD color tokens from an artDirection palette. Plates adapt to world
 * brightness; accent/text/focus are contrast-corrected (WCAG ratios).
 */
export function deriveUiTokens(artPalette?: {
  background?: THREE.ColorRepresentation
  primary?: THREE.ColorRepresentation
  secondary?: THREE.ColorRepresentation
  accent?: THREE.ColorRepresentation
}): Record<string, string>

export interface UiCounter {
  readonly element: HTMLElement
  set(value: string | number, options?: { punch?: boolean }): void
  setLabel(label: string): void
  punch(): void
  destroy(): void
}

export interface UiMeter {
  readonly element: HTMLElement
  set(value: number, max?: number): void
  setLabel(label: string): void
  destroy(): void
}

export interface UiBadge {
  readonly element: HTMLElement
  set(text: string): void
  destroy(): void
}

export interface UiIconButton {
  readonly element: HTMLElement
  setActive(active: boolean): void
  setLabel(label: string): void
  destroy(): void
}

export interface UiCooldown {
  readonly element: HTMLElement
  /** 0..1 readiness (1 = ready). */
  set(ratio: number, labelText?: string): void
  setLabel(label: string): void
  destroy(): void
}

export interface UiIconSlot {
  readonly element: HTMLElement
  setSrc(src: string | null | undefined): void
  destroy(): void
}

export interface UiLoading {
  readonly element: HTMLElement
  set(ratio: number): void
  setLabel(label: string): void
  destroy(): void
}

export interface UiWorldMarker {
  readonly element: HTMLElement | null
  set(text: string): void
  setPosition(xPercent: number, yPercent: number): void
  destroy(): void
}

export interface UiLevelCard {
  destroy(): void
}

export interface UiModalOptions {
  kind?: string
  title?: string
  body?: string
  primaryLabel?: string | null
  onPrimary?: () => void
  secondaryLabel?: string
  onSecondary?: () => void
}

export interface UiDiagnostics {
  mounted: boolean
  /** Compat label: preset name | 'derived' | 'custom'. */
  theme: string | null
  /** True only after game code explicitly chooses a family (or a named preset that includes one). */
  themeExplicit?: boolean
  family?: string
  motion?: string
  palette?: string | null
  paletteSource?: OgUiPaletteSource
  reducedMotion?: boolean
  layout?: string
  /** True only after game code chooses a valid layout. */
  layoutExplicit?: boolean
  diegeticOnly: boolean
  openModal: string | null
  surfaces: string[]
  phasesCovered: string[]
  endStateCovered: boolean
  fonts: string[]
  antiWeb?: { maxRadiusPx: number; glass: boolean; asymmetricSlots: boolean }
}

export interface GameUi {
  readonly mounted: boolean
  readonly root: HTMLElement | null
  mount(): GameUi
  /**
   * Theme the HUD. Accepts a legacy preset name (`arcade-neon` | `tactical-mono`),
   * an orthogonal spec ({ family, palette, motion, layout }), or raw CSS token
   * overrides (radius capped ≤4px).
   */
  theme(nameOrSpec: OgUiThemeName | OgUiThemeSpec | string | Record<string, string>): GameUi
  /** Asymmetric slot profile: arcade | fps | race | strategy | minimal | mobile-action. */
  layout(name: OgUiLayoutName | string): GameUi
  /** Hide peripheral HUD; declare diegetic-only end states for host gates. */
  declareDiegetic(enabled?: boolean): GameUi
  setAutoEndModals(enabled: boolean): GameUi
  bindPauseKey(code?: string): GameUi
  bindMuteButton(options?: { slot?: string; label?: string }): UiIconButton
  counter(options?: { label?: string; slot?: string; id?: string }): UiCounter
  meter(options?: { label?: string; slot?: string; max?: number; id?: string; dangerBelow?: number }): UiMeter
  badge(options?: { text?: string; slot?: string; id?: string }): UiBadge
  iconButton(options?: {
    label?: string
    iconSrc?: string
    slot?: string
    id?: string
    title?: string
    onClick?: (btn: UiIconButton) => void
    active?: boolean
  }): UiIconButton
  cooldown(options?: { label?: string; slot?: string; id?: string }): UiCooldown
  iconSlot(options?: { src?: string; slot?: string; id?: string; alt?: string }): UiIconSlot
  loading(options?: { label?: string; slot?: string; id?: string }): UiLoading
  toast(message: string, options?: { tone?: 'info' | 'danger' | 'success'; durationMs?: number }): void
  flash(options?: { tone?: 'danger' | 'success' | 'warning'; durationMs?: number }): void
  /** Internal shell/fx transition surface; prefer game.fx.fade(). */
  setTransitionOpacity(opacity: number, color?: string): void
  showLevelCard(options?: { title?: string; subtitle?: string; durationMs?: number }): UiLevelCard
  /** Engine-owned floating-stick indicator used by bindMove(). */
  createTouchStick(): {
    show(x: number, y: number, right: number, forward: number): void
    hide(): void
    destroy(): void
  }
  attachWorldMarker(options?: { text?: string; x?: number; y?: number; id?: string }): UiWorldMarker
  showModal(options?: UiModalOptions): void
  showTitle(detail?: {
    name?: string
    subtitle?: string
    controls?: string
    startLabel?: string | null
    onStart?: () => void
  }): void
  showWin(detail?: { title?: string; body?: string; primaryLabel?: string }): void
  showFail(detail?: { title?: string; body?: string; primaryLabel?: string }): void
  showPause(detail?: {
    title?: string
    body?: string
    primaryLabel?: string
    secondaryLabel?: string
  }): void
  closeModal(): void
  syncFromGame(): void
  getDiagnostics(): UiDiagnostics
  dispose(): void
}

export interface CreateGameOptions {
  /** Element that receives the canvas (default document.body). */
  mount?: HTMLElement
  canvas?: HTMLCanvasElement
  background?: number
  exposure?: number
  /** Premium adaptive pipeline is default; fixed tiers remain explicit for profiling. */
  render?: RenderOptions
  /** Per-game palette/atmosphere/post intent. Bloom and fog never become a house style. */
  artDirection?: ArtDirectionOptions
  camera?: { fov?: number; near?: number; far?: number; position?: [number, number, number] }
  fixedStep?: number
  seed?: number
  /** When false, skip HUD mount. Declare a diegetic-only presentation before start(). */
  ui?: boolean
  /**
   * Explicit initial theme: preset name or orthogonal spec. No theme is selected by default.
   */
  uiTheme?: OgUiThemeName | OgUiThemeSpec | string
  /** Explicit initial layout profile. No layout is selected by default. */
  uiLayout?: OgUiLayoutName | string
  /** Bind the pause key when true. Default false. */
  bindPauseKey?: boolean
  /** Keyboard code for pause. Default Escape. */
  pauseKey?: string
  /** Optional opening shell. Omit it to enter playing directly. */
  shell?: {
    name?: string
    subtitle?: string
    /** Branded copy for the engine-owned initial loading surface. */
    loadingLabel?: string
    title?: Exclude<ShellMode, 'none'>
    startAction?: { keys?: readonly string[]; pointer?: boolean }
    /** Default fade; zoom moves from a wider title pose; none is the explicit hatch. */
    transition?: ShellTransitionType | ShellTransitionOptions
  }
}

export interface DeclaredControls {
  restartKey?: string
}

export interface Game {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer
  /** Canonical final-frame owner: composer, custom passes, adaptive quality, and evidence. */
  readonly render: GameRender
  readonly loop: GameLoop
  readonly input: InputMap
  readonly assets: AssetServer
  readonly audio: AudioBus
  readonly rng: Rng
  readonly debug: DebugAssertions
  readonly probe: GameProbe
  /** Authored HUD/modal kit. Prefer this over inventing system-font DOM walls. */
  readonly ui: GameUi
  /** Default-on title/start lifecycle. */
  readonly shell: GameShell
  readonly fx: GameFx
  readonly vfx: GameVfx
  readonly cameraRig: CameraRig
  readonly levels: GameLevels

  readonly phase: GamePhase

  declareControls(controls?: DeclaredControls): void

  onReset(callback: () => void): () => void
  onPhaseChange(callback: (phase: GamePhase) => void): () => void
  /** Register a caller-created resource for reverse-order disposal with the game. */
  own<T extends { dispose(): void | Promise<void> } | (() => void | Promise<void>)>(resource: T): T

  win(): void
  fail(): void
  pause(): boolean
  resume(): boolean
  reset(): void
  setLoading(loading: boolean): void
  start(): void
  dispose(): Promise<void>
}

export interface LocomotionPackOptions {
  target: THREE.Object3D
  /**
   * Required world-space movement owner. The pack shapes input/velocity but
   * never translates the target around collision on its own.
   */
  move: (
    delta: THREE.Vector3,
    context: { dt: number; target: THREE.Object3D; velocity: THREE.Vector3 },
  ) => unknown
  relativeTo?: 'world' | 'camera' | 'screen'
  speed?: number
  acceleration?: number
  deceleration?: number
  turnSpeed?: number
  faceMovement?: boolean
  enabled?: boolean
  order?: number
  probeName?: string
}

/** Minimal proven pack seam: composes public loop/input/reset/probe APIs and owns one disposer. */
export interface LocomotionPack {
  readonly velocity: THREE.Vector3
  readonly speed: number
  readonly lastMovement: unknown
  enabled: boolean
  reset(): void
  dispose(): void
}

export function createGame(options?: CreateGameOptions): Game
export function createRenderPipeline(options: {
  mount: HTMLElement
  canvas?: HTMLCanvasElement
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  render?: RenderOptions
  artDirection?: ArtDirectionOptions
  background?: number
  exposure?: number
}): GameRender
export const OG_RENDER_QUALITY_PRESETS: Readonly<Record<RenderQualityTier, Readonly<{
  maxPixelRatio: number
  frameBudgetMs: number
}>>>
export function createRng(seed?: number): Rng
export function createLoop(options?: { fixedStep?: number }): GameLoop
export function createInput(options?: { target?: EventTarget }): InputMap
export function createAssets(options?: {
  manifestUrl?: string
  renderer?: THREE.WebGLRenderer
  ktx2TranscoderPath?: string
}): AssetServer
/** Projected screen-space diameter for a world-space bounding sphere. */
export function screenCoveragePx(
  radius: number,
  distance: number,
  camera: THREE.PerspectiveCamera,
  viewportHeightPx: number,
): number
/** Distance at which a bounding sphere reaches a declared projected diameter. */
export function lodDistanceForCoveragePx(
  radius: number,
  coveragePx: number,
  camera: THREE.PerspectiveCamera,
  viewportHeightPx: number,
): number
export function createAudio(options?: { rng?: Pick<Rng, 'int' | 'range'> }): AudioBus
export function createProbe(): GameProbe
export function createCameraRig(options: {
  camera: THREE.PerspectiveCamera
  loop: GameLoop
  getPhase: () => string
  getDefaultTarget: () => THREE.Object3D
  isTransitioning: () => boolean
  tween?: (options: FxTweenOptions) => FxTween
}): CameraRig
export function createFx(options: {
  loop: GameLoop
  camera: THREE.PerspectiveCamera
  ui: GameUi
  moveCamera?: (pose: CameraPose, options?: CameraMoveOptions) => FxTween
}): GameFx
export function createVfx(options: {
  scene: THREE.Scene
  camera: THREE.Camera
  loop: GameLoop
  rng: Rng
  getQualityTier: () => RenderQualityTier
}): GameVfx
export function createLocomotionPack(game: Game, options: LocomotionPackOptions): LocomotionPack
export function createGroundedCharacterController(
  game: Game,
  options: GroundedCharacterControllerOptions,
): GroundedCharacterController
export function createTerrainSurface(options: TerrainSurfaceOptions): TerrainSurface
export function createTerrainSurfaceFromEXR(options: TerrainSurfaceFromEXROptions): Promise<TerrainSurface>
export function createTerrainMaterial(options: {
  assets: AssetServer
  renderer: Pick<THREE.WebGLRenderer, 'capabilities'>
  surface: TerrainMaterialDefinition
}): THREE.MeshStandardMaterial
export function createTerrainFromConfig(options: {
  assets: AssetServer
  renderer: Pick<THREE.WebGLRenderer, 'capabilities'>
  config: TerrainConfig
  game?: Pick<Game, 'own'>
  owned?: boolean
}): Promise<ConfiguredTerrain>
export function createLevels(options: { transition: GameShell['transition'] }): GameLevels
export function createUi(options: {
  documentRef?: Document | null
  getPhase: () => string
  onRestart: () => void
  onPauseChange?: (paused: boolean) => void
  getMuted?: () => boolean
  setMuted?: (muted: boolean) => void
  /** Source palette for `theme({ palette: 'auto' })` derivation. */
  artPalette?: {
    background?: THREE.ColorRepresentation
    primary?: THREE.ColorRepresentation
    secondary?: THREE.ColorRepresentation
    accent?: THREE.ColorRepresentation
  }
}): GameUi
export const OG_UI_THEMES: string[]
export const OG_UI_FAMILIES: string[]
export const OG_UI_MOTIONS: string[]
export const OG_UI_LAYOUTS: string[]
export const OG_CAMERA_RIG_PRESETS: CameraRigPreset[]
export function reportProgression(path: string, status: 'start' | 'complete' | 'fail', attributes?: Record<string, unknown>): void
export function reportReady(): void

export interface SaveStore<T> { get(): Promise<T>; set(data: T): Promise<void> }
export function createSaveStore<T>(options?: {
  version?: number
  fallback?: T | (() => T)
  validate?: (data: unknown) => data is T
  migrate?: (data: unknown, from: number, to: number) => T | Promise<T>
}): SaveStore<T>

export interface PhysicsBinding {
  readonly object: THREE.Object3D
  readonly body: import('@dimforge/rapier3d-compat').RigidBody
  readonly mode: 'fixed' | 'dynamic' | 'kinematic'
  syncFromObject(): void
  syncToObject(): void
  dispose(): void
}

export interface GamePhysics {
  readonly RAPIER: typeof import('@dimforge/rapier3d-compat')
  readonly world: import('@dimforge/rapier3d-compat').World
  readonly events: import('@dimforge/rapier3d-compat').EventQueue
  createBody(desc: import('@dimforge/rapier3d-compat').RigidBodyDesc): import('@dimforge/rapier3d-compat').RigidBody
  bind(object: THREE.Object3D, body: import('@dimforge/rapier3d-compat').RigidBody, mode?: PhysicsBinding['mode']): PhysicsBinding
  createBoundBody(desc: import('@dimforge/rapier3d-compat').RigidBodyDesc, object: THREE.Object3D, mode?: PhysicsBinding['mode']): PhysicsBinding
  createCollider(desc: import('@dimforge/rapier3d-compat').ColliderDesc, parent: import('@dimforge/rapier3d-compat').RigidBody | PhysicsBinding): import('@dimforge/rapier3d-compat').Collider
  removeCollider(collider: import('@dimforge/rapier3d-compat').Collider, wakeUp?: boolean): void
  removeBody(body: import('@dimforge/rapier3d-compat').RigidBody): void
  createFixed(object: THREE.Object3D, collider?: import('@dimforge/rapier3d-compat').ColliderDesc): PhysicsBinding
  createDynamic(object: THREE.Object3D, collider?: import('@dimforge/rapier3d-compat').ColliderDesc): PhysicsBinding
  createKinematic(object: THREE.Object3D, collider?: import('@dimforge/rapier3d-compat').ColliderDesc): PhysicsBinding
  createCharacterMotor(object: THREE.Object3D, collider: import('@dimforge/rapier3d-compat').ColliderDesc, options?: CharacterMotorOptions): CharacterMotor
  createCameraOcclusionQuery(options?: PhysicsQueryFilter & { excludeColliders?: Iterable<import('@dimforge/rapier3d-compat').Collider> }): CameraOcclusionQuery
  /** Guard dynamic activation behind explicit support registration and commit. */
  beginSupportSetup(): {
    registerSupport(collider: import('@dimforge/rapier3d-compat').Collider): void
    activateDynamic(object: THREE.Object3D, collider: import('@dimforge/rapier3d-compat').ColliderDesc, spawn?: { position?: THREE.Vector3 | { x: number; y: number; z: number } }): { readonly binding: PhysicsBinding | null }
    commit(): PhysicsBinding[]
    abort(): void
  }
  diagnostics(): { declared: boolean; ready: boolean; supportColliders: number; pendingDynamicActors: number; issue: string | null }
  createTerrainTrimesh(vertices: Float32Array, indices: Uint32Array): import('@dimforge/rapier3d-compat').RigidBody
  castRay(...args: Parameters<import('@dimforge/rapier3d-compat').World['castRay']>): ReturnType<import('@dimforge/rapier3d-compat').World['castRay']>
  castShape(...args: Parameters<import('@dimforge/rapier3d-compat').World['castShape']>): ReturnType<import('@dimforge/rapier3d-compat').World['castShape']>
  intersectionsWithShape(...args: Parameters<import('@dimforge/rapier3d-compat').World['intersectionsWithShape']>): ReturnType<import('@dimforge/rapier3d-compat').World['intersectionsWithShape']>
  contactPair(...args: Parameters<import('@dimforge/rapier3d-compat').World['contactPair']>): ReturnType<import('@dimforge/rapier3d-compat').World['contactPair']>
  dispose(): void
}

export interface PhysicsQueryFilter {
  filterFlags?: import('@dimforge/rapier3d-compat').QueryFilterFlags
  filterGroups?: import('@dimforge/rapier3d-compat').InteractionGroups
  filterExcludeCollider?: import('@dimforge/rapier3d-compat').Collider
  filterExcludeRigidBody?: import('@dimforge/rapier3d-compat').RigidBody
  filterPredicate?: (collider: import('@dimforge/rapier3d-compat').Collider) => boolean
}
export interface CharacterMotorOptions extends Pick<PhysicsQueryFilter, 'filterFlags' | 'filterGroups' | 'filterPredicate'> {
  /** Collider-body position = Object3D position + bodyOffset; use a foot-to-center offset when the Object3D is foot-anchored. */
  bodyOffset?: THREE.Vector3 | { x: number; y: number; z: number }
  offset?: number
  up?: THREE.Vector3 | { x: number; y: number; z: number }
  autostep?: { maxHeight: number; minWidth: number; includeDynamicBodies?: boolean }
  maxSlopeClimbAngle?: number
  minSlopeSlideAngle?: number
  snapToGround?: number
}
export interface CharacterMotor {
  readonly object: THREE.Object3D
  readonly body: import('@dimforge/rapier3d-compat').RigidBody
  readonly collider: import('@dimforge/rapier3d-compat').Collider
  readonly controller: import('@dimforge/rapier3d-compat').KinematicCharacterController
  move(desiredDelta: THREE.Vector3 | { x: number; y: number; z: number }): {
    correctedDelta: { x: number; y: number; z: number }
    grounded: boolean
    collisions: import('@dimforge/rapier3d-compat').CharacterCollision[]
  }
  dispose(): void
}

export interface GroundedCharacterControllerOptions {
  physics: GamePhysics
  /** Foot-anchored project Object3D. */
  target: THREE.Object3D
  collider: import('@dimforge/rapier3d-compat').ColliderDesc
  /** Live, solid, authored support colliders from the supplied physics world. */
  supports: Iterable<import('@dimforge/rapier3d-compat').Collider>
  /** Required foot-to-collider-center offset; y must be positive. */
  bodyOffset: THREE.Vector3 | { x: number; y: number; z: number }
  motor?: Omit<CharacterMotorOptions, 'bodyOffset'>
  locomotion?: Omit<LocomotionPackOptions, 'target' | 'move' | 'order'>
  /** Defaults to the physics world's y gravity. */
  gravity?: number
  maxFallSpeed?: number
  /** Maximum initial downward settle distance from the authored foot anchor. */
  groundingDistance?: number
  /** Runs before the default physics step order. */
  order?: number
  camera?: {
    preset: CameraRigPreset
    query?: PhysicsQueryFilter & {
      excludeColliders?: Iterable<import('@dimforge/rapier3d-compat').Collider>
    }
    occlusion?: { radius?: number; padding?: number }
    distance?: number
    height?: number
    lookHeight?: number
    lookAhead?: number
    damping?: number
    speed?: number
    angle?: number
  }
  owned?: boolean
}

export interface GroundedCharacterController {
  readonly target: THREE.Object3D
  readonly motor: CharacterMotor
  readonly locomotion: LocomotionPack
  readonly grounded: boolean
  readonly verticalSpeed: number
  readonly lastMovement: ReturnType<CharacterMotor['move']>
  /** Project code owns the jump action and requested launch speed. */
  jump(speed: number): boolean
  resetMotion(): void
  dispose(): void
}

export interface ActorBinding {
  readonly root: THREE.Group
  readonly state: string | null
  setState(state: string, options?: PlayClipOptions): ClipPlayback
  onEvent(state: string, timing: { timeSeconds?: number; ratio?: number }, callback: (detail: { state: string; clip: string; detail: unknown }) => void): () => void
  update(dt: number): void
  dispose(): void
}

export interface OgRoomTransport {
  readonly selfId: string
  readonly hostId: string
  readonly peers: readonly string[]
  readonly state: 'connecting' | 'open' | 'reconnecting' | 'closed'
  send(data: unknown, to?: string): void
  on(event: string, callback: (...args: any[]) => void): () => void
}

export interface NetSessionDiagnostics {
  connected: boolean
  hostId: string | null
  selfId: string | null
  peerIds: string[]
  tick: number
  sequence: number
  rejected: number
  bufferedSnapshots: number
}

export interface NetSession {
  readonly connected: boolean
  readonly hostId: string | null
  readonly peerIds: string[]
  on(event: 'peerjoin' | 'peerleave' | 'hostchange' | 'disconnect' | 'reconnect', callback: (detail: unknown) => void): () => void
  diagnostics(): NetSessionDiagnostics
  dispose(): void
}

export function createActorBinding(instance: ModelInstance, options?: {
  game?: Pick<Game, 'own'>
  owned?: boolean
  clips?: Record<string, string>
  physicsBinding?: Pick<PhysicsBinding, 'dispose' | 'syncFromObject' | 'syncToObject'>
  transformOwner?: 'model' | 'physics' | 'project'
  onRootMotion?: (detail: { dt: number; owner: 'model' | 'physics' | 'project'; root: THREE.Group }) => void
}): ActorBinding
export function createPhysics(game: Game, options?: {
  gravity?: { x: number; y: number; z: number }
  order?: number
  rapier?: typeof import('@dimforge/rapier3d-compat')
  owned?: boolean
}): Promise<GamePhysics>
export function createNetSession(game: Game, room: OgRoomTransport, config?: {
  tickRate?: number
  maxSnapshots?: number
  interpolationDelayMs?: number
  peerId?: string
  hostId?: string
  order?: number
  captureInput?: () => unknown
  applyInput?: (input: unknown, context: { peerId: string; tick: number }) => void
  captureSnapshot?: () => unknown
  applySnapshot?: (state: unknown, context: { tick: number }) => void
  interpolate?: (a: unknown, b: unknown, alpha: number) => void
  owned?: boolean
}): NetSession

declare global {
  interface Window {
    OG?: {
      save?: { get(): Promise<unknown>; set(value: unknown): Promise<void> }
      room?: OgRoomTransport
      ready?: () => unknown
      analytics?: {
        progression?: Record<'start' | 'complete' | 'fail', (path: string, attributes?: Record<string, unknown>) => unknown>
      }
    }
    __THREE_GAME_DIAGNOSTICS__?: GameDiagnosticsSnapshot
    __THREE_GAME_TEST_HOOKS__?: GameTestHooks
  }
}
