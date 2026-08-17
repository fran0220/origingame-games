# og-engine public API

`og-engine` is a no-build ESM runtime for Three.js games. The engine owns runtime plumbing: one renderer and final-frame pipeline, one loop, lifecycle, resource disposal, host diagnostics, and optional reusable primitives. The project owns gameplay semantics and creative decisions.

```js
import { createGame } from 'og-engine'

const game = createGame()
// Build project content and register systems, then:
game.start()
```

There are deliberately no public `states`, `world`, or `online` APIs; no score, foundation, or player-tracking APIs; no engine-owned objective or progression model; and no fixed Host definition of what a game, player, win, failure, restart, title, or HUD must mean. `reportProgression()` is an explicit host analytics bridge, not inferred gameplay. Projects may use `win()`, `fail()`, `reset()`, levels, UI, probes, networking, or none of them as their design requires.

## `createGame(options?)`

`createGame()` creates a `THREE.Scene`, `THREE.PerspectiveCamera`, canonical render pipeline, fixed-step loop, input, assets, audio, seeded RNG, diagnostics/probes, UI, shell, FX/VFX, camera rig, and levels. Important options are:

- `mount` (default `document.body`) or a supplied `canvas`.
- `camera`: `fov` 70, `near` 0.1, `far` 200, and `position` `[0, 4, 8]` by default.
- `fixedStep`, `seed` (default 1), `background`, `exposure`.
- `render` and `artDirection`, described below.
- optional `uiTheme`, `uiLayout`, `ui`, and `bindPauseKey` (`false` by default; `pauseKey` defaults to `Escape`). No theme or layout is chosen implicitly.
- optional `shell`. Omitting it means shell mode `none`; supplying it selects `auto` unless `title: 'custom'` is specified.

The returned `game` exposes `scene`, `camera`, `renderer`, `render`, `loop`, `input`, `assets`, `audio`, `rng`, `debug`, `probe`, `ui`, `shell`, `fx`, `vfx`, `cameraRig`, `levels`, and read-only `phase`.

### Lifecycle and systems

Phases are `boot | loading | title | playing | paused | fail | complete`.

- `start()` starts the loop. With no shell it enters `playing`; with a shell it enters `title` after required initial `assets.load()` and `audio.load()` calls succeed. Failed required media remains observable in loading diagnostics.
- `setLoading(boolean)` controls an explicit loading interval. Initial blocking media loads also drive loading state; `assets.preload()` does not.
- `pause()`/`resume()` return whether a transition occurred. `win()` and `fail()` only transition from `playing`.
- `reset()` invokes registered `onReset()` callbacks, resets transient engine feedback/audio/debug state, and returns eligible phases to `playing`. It does not reconstruct project state.
- `onReset(fn)` and `onPhaseChange(fn)` return unregister functions. `declareControls({ restartKey })` changes the diagnostics/restart key (default `KeyR`).
- `levels.define(id, { setup, dispose? })` and `await levels.goto(id, { transition? })` serialize old-level cleanup and new setup. A setup function may return another disposer. Levels do not define gameplay state or reset project data.

Register simulation with `loop.onFixedUpdate`, ordinary updates with `loop.onUpdate`, unscaled work with `loop.onFrame`, and final-frame callbacks with `loop.onRender`; each returns an unregister function and accepts an optional order. The loop exposes `fixedStep`, frame/elapsed clocks, pause, `timeScale`, and `nextFrame()`. `nextFrame()` yields to the engine/browser frame and resolves `false` if stop/dispose prevents it. Do not create a second animation loop.

`createLocomotionPack(game, options)` shapes action-mapped input into accelerated planar velocity. It requires an explicit `move(delta, context)` adapter and never translates an Object3D directly, because the engine cannot silently bypass the project's collision owner. It exposes velocity, speed, the last adapter result, enabled, reset, and dispose; it is not a general character or genre model.

### Ownership and disposal

```js
const stopSystem = game.loop.onUpdate(update)
game.own(stopSystem)
game.own({ dispose: () => releaseProjectResources() })
await game.dispose()
```

`game.own(resource)` accepts a disposer function or an object with `dispose()`, returns that resource, and rejects registration after disposal. `game.dispose()` is async and idempotent: it stops the loop/listeners, disposes levels, then project-owned resources in reverse registration order, followed by engine systems. It awaits async owned disposers and rethrows the first ownership error after continuing engine cleanup.

Helpers that accept `game` plus `owned`—physics, actor binding, network sessions, and terrain constructors—register themselves by default when a game is supplied. `owned: false` means the caller's scope owns disposal; it does **not** make a resource immortal or transfer cleanup elsewhere. Avoid manually disposing a game-owned resource unless its disposal is idempotent.

## Shell: none, auto, or custom

```js
const game = createGame({
  shell: {
    name: 'Example',
    title: 'custom',
    startAction: { keys: ['Space'], pointer: true },
    transition: { type: 'fade', durationMs: 240 },
  },
})
```

- **none**: omit `shell`; `start()` proceeds directly to play and `shell.toTitle()` returns false.
- **auto**: pass `shell: { ... }`; the engine displays the title and accepts the declared real key/pointer start action. Defaults are `Enter`, pointer enabled, and a 240 ms fade.
- **custom**: pass `shell: { title: 'custom', ... }`; project code renders the opening, calls `shell.markTitleShown()`, and calls `shell.enterPlay()` in response to a recent declared real input. It cannot be used as a programmatic bypass.

`shell.toTitle()`, `onEnterPlay(fn)`, and `transition('fade' | 'zoom' | 'none' | options, apply)` are optional coordination primitives. They do not prescribe an opening, ending, or navigation design.

## Renderer, scene, camera, and escape hatches

`game.render` owns the only final frame. It wraps `game.renderer`, `game.scene`, and `game.camera` with an `EffectComposer`, sRGB output, ACES tone mapping, optional shadows, resizing, adaptive quality evidence, environment/lighting management, and disposal.

`render.quality` defaults to `auto`: it begins at the `premium` production baseline and adaptive DPR responds only to measured active-play frame time. It does not pre-emptively reduce visual quality from coarse device heuristics. `render.adaptive: false` disables adaptation for auto quality. Explicit quality tiers are fixed. `maxPixelRatio` is an additional cap; tier presets still may choose a lower DPR. Antialiasing and shadows default true, alpha defaults false. No lights are installed unless `artDirection.lighting` is supplied or `render.lighting: true` requests the neutral preview rig.

Use `render.setEnvironment(input)`, `clearEnvironment()`, `setLighting(definitions)`, and `clearLighting()` for authored treatment. Environment lighting and a visible backdrop are separate authoring decisions:

```js
// Image-based lighting and reflections only; the project-authored background remains.
await game.render.setEnvironment('./assets/environment.hdr')

// The same source is also displayed behind the world.
await game.render.setEnvironment({
  source: './assets/sky.hdr',
  background: true,
})
```

An HDRI can be suitable for image-based lighting without being suitable as a visible backdrop. Ground-bearing landscapes, interiors, roads, nearby architecture, and photographic lower hemispheres often conflict with floating, abstract, or differently scaled worlds. Leave `background` false in those cases and author a solid, procedural, or sky-only backdrop in the project.

`addPass(pass, name?)` inserts an authored post pass before the engine output pass and returns a remover. `render.use(customPipeline)` replaces final-frame rendering and returns a restore function; its callbacks receive the stable renderer/scene/camera/composer/viewport context. `render.getDiagnostics()` reports backend, tier, adaptive DPR, passes, frame timing, draw/resource counts, shadows, environment, lighting, and custom pipeline data.

The raw `THREE.Scene`, `THREE.PerspectiveCamera`, and `THREE.WebGLRenderer` are intentional escape hatches for project-authored objects, materials, lights, and camera work. Do not call raw `renderer.render()`, create a second renderer/composer, or start another RAF alongside the canonical pipeline. `createRenderPipeline(options)` is exported for advanced standalone composition under the same one-owner rule; `OG_RENDER_QUALITY_PRESETS` exposes tier DPR/frame-budget constants.

`cameraRig.use('chase' | 'iso' | 'topdown' | 'side' | 'orbit' | 'fps', options)`, `follow`, `update`, `moveTo`, and `release` are optional conveniences; `OG_CAMERA_RIG_PRESETS` lists presets. Presets optionally accept `occlusion: { query, radius?, padding? }`; the physics-agnostic query receives `(focus, idealCameraPosition, radius)` and returns the unobstructed distance or `null`, allowing the rig to shorten the ideal arm before damping. Raw camera control remains valid. `createCameraRig`, `createFx`, `createVfx`, `createLevels`, and `createUi` are also exported constructors for advanced composition.

## Input, audio, UI, FX, and VFX are optional primitives

Input is action-mapped rather than gameplay-specific:

```js
game.input.bind('jump', ['Space'])
game.input.bindMove({ touch: true })
const direction = game.input.moveVec({ relativeTo: 'camera' })
```

`bind`, `isDown`, `justPressed`, `onPressed`, `axis`, and `moveVec` cover keyboard actions. Pointer state includes position, deltas, buttons, wheel, and lock. Named scopes, suspend/resume, touch values/indicator, active-device reporting, gamepad button/axis bindings, and configurable deadzone are available. Held state is released on focus loss. `createInput({ target? })` constructs the primitive directly.

Audio provides one graph with `master`, `music`, `ambience`, `sfx`, `ui`, and `voice` buses (`bgm` is an alias). Use `load`, `play`, semantic `defineCue`/`cue`, `music.play/transition/stop`, bus volume/fades, mute, suspend/resume, reset, and diagnostics. Initial game audio loads participate in loading. `createAudio({ rng? })` is exported.

`game.ui` is an authored native DOM/HUD kit, not mandatory gameplay policy. Mount/theme/layout explicitly, or use counters, meters, badges, buttons, cooldowns, icons, loading, toast/flash, world markers, level cards, and modal/title/result/pause surfaces selectively. `ui: false` skips automatic HUD mount; `declareDiegetic()` records an intentional diegetic presentation. `deriveUiTokens()` derives a palette, while `OG_UI_THEMES`, `OG_UI_FAMILIES`, `OG_UI_MOTIONS`, and `OG_UI_LAYOUTS` expose available names. No score, title, result modal, pause control, or layout is mandatory.

`game.fx` offers cancellable tween, shake, hit stop, fade, pulse, impact, and timeline choreography. `game.vfx` offers deterministic quality-scaled pooled bursts and trails. Both are presentation tools, not gameplay state. Their diagnostics are host evidence, and reset clears transient effects.

## Assets, models, PBR, environment, terrain, and EXR

`game.assets.load(entries, { onProgress? })` loads required GLTF, texture, or KTX2 entries; `preload` fills the same cache in the background. Texture entries require an explicit semantic (`color`, `emissive`, `normal`, `arm`, `height`, `opacity`, or `data`) and may specify sampler transforms. `texture(id)` retrieves a cached Three.js texture.

`spawn(id, options)` returns a normalized `ModelInstance` with a +Z gameplay root, ground/center/custom pivot, size normalization, clip playback/events, update, and disposal. `spawnLod()` uses explicitly authored levels; `spawnInstanced()` batches compatible static primitives. `clipNames`, asset diagnostics, `screenCoveragePx`, and `lodDistanceForCoveragePx` support authored LOD choices. `createAssets({ manifestUrl?, renderer?, ktx2TranscoderPath? })` constructs an asset server.

`pbrMaterial(definition)` builds a `MeshStandardMaterial` from color/emissive/NormalGL/packed ARM/height/opacity maps; `preparePbrGeometry()` ensures UV1 data. Material-local sampler overrides create owned texture views that are released with the material. Environment maps are separate render concerns: `render.setEnvironment()` accepts an HDR/EXR/equirectangular URL, cube URLs, a caller-owned `THREE.Texture`, or an `EnvironmentOptions` object (including explicit `source: null`).

Terrain is geometry/data, not gameplay or physics:

```js
const terrain = await createTerrainFromConfig({
  game,
  assets: game.assets,
  renderer: game.renderer,
  config: {
    height: { source: './height.exr', size: 100, segments: 128, scale: 12 },
    surface: { base: { maps: { color: 'ground-color', normal: 'ground-normal', arm: 'ground-arm' } } },
  },
})
game.scene.add(terrain.mesh)
```

`createTerrainSurface({ sample, material, ... })` samples authored heights/normals. `createTerrainSurfaceFromEXR({ url, material, heightScale?, heightOffset?, flipY?, ... })` decodes linear float/half-float EXR data. `createTerrainMaterial({ assets, renderer, surface })` supports base PBR, macro variation, and ordered masked PBR layers, and validates the authored sampler requirement against the renderer before allocating material resources. `createTerrainFromConfig({ assets, renderer, config })` combines those pieces. Surfaces expose `mesh`, `geometry`, `heightAt`, `normalAt`, and copied indexed `collider` arrays. Disposal removes geometry but retains a caller-supplied surface material; configured terrain owns and disposes the material it creates. `resampleEXRHeightData` is an implementation detail and is **not** a public export.

## Optional Rapier physics and actor binding

```js
const physics = await createPhysics(game, {
  gravity: { x: 0, y: -9.81, z: 0 },
})
const body = physics.createDynamic(model.root, physics.RAPIER.ColliderDesc.capsule(0.5, 0.3))
```

When the approved design has a grounded spatial character, prefer the engine's
runtime-correct composition over hand-wiring transform locomotion, a motor,
support ordering, gravity, and camera collision independently:

```js
import { createGame, createPhysics, createGroundedCharacterController } from 'og-engine'

const game = createGame({ /* project-authored render, shell, and art direction */ })
const physics = await createPhysics(game)

// The project authors visible geometry and matching support colliders.
const supportBody = physics.createFixed(startingIsland)
const support = physics.createCollider(
  physics.RAPIER.ColliderDesc.cuboid(islandHalfX, islandHalfY, islandHalfZ),
  supportBody,
)
game.input.bindMove()

const playerController = createGroundedCharacterController(game, {
  physics,
  target: playerFootRoot,
  collider: physics.RAPIER.ColliderDesc.capsule(0.5, 0.3),
  supports: [support],
  bodyOffset: { x: 0, y: 0.8, z: 0 },
  locomotion: { speed: 6, acceleration: 30, deceleration: 38 },
  motor: { autostep: { maxHeight: 0.35, minWidth: 0.2 }, snapToGround: 0.2 },
  camera: { preset: 'chase', distance: 8, height: 4, lookHeight: 1 },
})

game.input.bind('jump', ['Space'])
game.input.onPressed('jump', () => playerController.jump(7))
game.start()
```

The target root is an authored **foot anchor**, so `bodyOffset` is mandatory and
positive. Construction commits registered live support before creating the
character, refreshes Rapier scene queries, settles the foot anchor onto support,
routes locomotion through the KCC, integrates the physics world's gravity, and
optionally wires the selected camera preset to a sphere-cast occlusion query that
excludes the player collider. It throws instead of starting from an ungrounded or
stale support state. The project still owns meshes, supports, spawn position,
movement values, jump input/timing, camera preset/composition, animation, game
rules, and every visible or semantic outcome. Games without a grounded spatial
character do not use this composition.

For a gravity-driven player, guard activation behind project-owned support setup (there is deliberately no default floor):

```js
const setup = physics.beginSupportSetup()
const ground = physics.createFixed(groundMesh)
setup.registerSupport(physics.createCollider(physics.RAPIER.ColliderDesc.cuboid(10, 0.5, 10), ground))
setup.activateDynamic(player, physics.RAPIER.ColliderDesc.capsule(0.5, 0.3), {
  position: { x: spawnX, y: surfaceY + 0.5 + 0.3, z: spawnZ },
})
setup.commit()
```

`commit()` refreshes scene queries, requires at least one live non-sensor support collider from the same physics world, and only then creates queued dynamic bodies. Overlapping setup transactions keep readiness false until all queued actors are resolved; removing the registered support invalidates readiness. `diagnostics()` reports this neutral declared/ready state to Host boot. A failed setup throws instead of allowing a guarded actor to silently fall.

`createPhysics(game, options?)` asynchronously initializes `@dimforge/rapier3d-compat`, creates a world/event queue, and steps it on the existing fixed loop. It returns `RAPIER`, `world`, `events`, body/collider creation/removal, fixed/dynamic/kinematic bindings, terrain trimesh creation, ray/shape casts, overlap queries, contacts, and disposal. Dynamic binding syncs body → object after a step; fixed/kinematic binding syncs object → body before it. **There is no `game.physics`; retain the returned adapter.** Pass `owned: false` only when another scope will dispose it.

`physics.createCharacterMotor(object, colliderDesc, options?)` creates a Rapier position-based kinematic body, collider, and character controller. Collider-body position is always `object.position + bodyOffset`; for foot-anchored actors, set `bodyOffset` to the foot-to-collider-center displacement so the visual root never doubles as an implicit collider center. Configure controller skin `offset`, `up`, `autostep`, slope angles, snap-to-ground distance, and query filters explicitly. Project code owns input, speed, gravity, and jump policy: call `move(desiredDelta)` from the existing serial physics loop and consume its objective `{ correctedDelta, grounded, collisions }` result. Dispose the motor to free its controller and body.

`physics.createCameraOcclusionQuery({ excludeColliders?, filterFlags?, filterGroups?, filterExcludeCollider?, filterExcludeRigidBody?, filterPredicate? })` returns the camera-rig query callback described above, implemented as a Rapier sphere cast. Camera-rig itself remains physics-agnostic and importing `og-engine/camera-rig` does not import Rapier.

```js
const actor = createActorBinding(model, {
  game,
  clips: { idle: 'Idle', moving: 'Run' },
  physicsBinding: body,
  transformOwner: 'physics',
})
actor.setState('moving')
game.loop.onUpdate((dt) => actor.update(dt))
```

`createActorBinding(instance, options?)` maps project semantic names to authored clips and forwards clip events. The option is named `physicsBinding`, not `physics`. Transform ownership is explicit:

- `physics` (the default when a binding exists): `update()` syncs physics → model before animation.
- `model` (the default without physics): animation/root motion is authoritative, then model → physics sync occurs.
- `project`: neither automatic transform sync occurs; project code owns reconciliation.

`onRootMotion` observes each update regardless of owner. Actor disposal unregisters events and disposes both the optional physics binding and model instance. Use `owned: false` for a caller-owned actor scope.

## SaveStore

```js
const save = createSaveStore({
  version: 2,
  fallback: () => ({ unlocked: [] }),
  validate: (value) => Array.isArray(value?.unlocked),
  migrate: (old, from, to) => migrateProjectSave(old, from, to),
})
await save.set({ unlocked: ['area-a'] })
const data = await save.get()
```

`createSaveStore(options?)` takes **options only—there is no key argument**. It uses the game's single host slot at `window.OG.save`, writing `{ version, data }` (version defaults to 1). Missing/corrupt host data, read errors, absent migration for a mismatched version, migration errors, or failed validation return the configured fallback. `set()` validates, then rejects if validation fails or the host save API is unavailable. Nothing is saved automatically; the project defines data, timing, validation, and migration.

## `window.OG.room` and `NetSession`

The host may provide `window.OG.room` as an optional matchmaking namespace. `match()`, `create()`, and `join()` return an `OgRoomTransport`-compatible object with `selfId`, `hostId`, `peers`, `state`, `send(data, to?)`, and `on(event, callback):

```js
const room = await window.OG?.room?.match({ pool: 'project-pool', maxPlayers: 4 })
const session = room ? createNetSession(game, room, {
  captureInput: () => projectInput(),
  applyInput: (input, { peerId, tick }) => applyProjectInput(peerId, input, tick),
  captureSnapshot: () => projectSnapshot(),
  applySnapshot: (state, { tick }) => applyProjectSnapshot(state, tick),
}) : null
```

`createNetSession(game, room, config?)` adds host-authoritative fixed-tick messaging to the existing loop (defaults: 20 Hz, 32 snapshots, 100 ms interpolation delay). Non-host peers send captured inputs; the host applies them and broadcasts captured snapshots. Without `interpolate`, clients apply accepted snapshots directly; with it, the bounded receive buffer supplies `(a, b, alpha)`. Sequence rejection, peer/host/disconnect/reconnect events, connection/peer accessors, and `diagnostics()` are included.

The project owns snapshot schema, authority rules beyond host selection, interpolation meaning, entities, prediction, rollback, matchmaking, and gameplay. NetSession does not own a world, navigation, rendering, or a second loop. It is game-owned by default; `owned: false` requires explicit caller disposal.

## Diagnostics, probes, RNG, and host bridges

Every rendered frame, the engine publishes diagnostics v5 at `window.__THREE_GAME_DIAGNOSTICS__`, including phase, controls, canvas, shell, camera, render/assets/media/audio/presentation/UI, probe data, and failed assertions. Test hooks at `window.__THREE_GAME_TEST_HOOKS__` expose only seed/reset. These globals are engine-owned observation contracts, not gameplay state.

`game.probe.observe(name, read)` publishes bounded read-only project observations; `event(name, data?)` records bounded semantic events; `scenario(name, { steps, expect, outcomes?, capabilities?, timeoutMs? })` declares real-input host scenarios and returns an unregister function. Expectations support observation `changed`, `eq`, `gte`, `lte`, and event `atLeast`. Declared outcomes are exactly `action | objective | win | fail | restart | multiplayer`. Outcomes describe what a route intends to demonstrate; they do not make that outcome happen and are not project-authored pass/fail verdicts. `snapshot()` returns the current bounded probe data. Host selects a compact declaration-order-stable scenario set that covers only the outcomes in the approved Verification contract; duplicate/debug scenarios and observations they alone reference are non-authoritative. If a new observation exceeds the 32-observation safety bound, it is not registered and a bounded, deduplicated `registrationErrors` entry is published. Host fails early only when a selected outcome scenario requires that rejected observation; unrelated instrumentation never becomes a release gate.

Debug assertions can check facing versus velocity, height ranges, kill-Y, and scene leaks; failures appear in diagnostics. `createProbe()` constructs a standalone probe.

`game.rng` provides seeded `float`, `range`, inclusive `int`, `chance`, `pick`, `shuffle`, and `reseed`; `createRng(seed?)` is exported. `reportReady()` explicitly invokes the optional host ready bridge. `reportProgression(path, 'start' | 'complete' | 'fail', attributes?)` explicitly invokes optional host analytics. Runtime phase changes do not infer project progression.

## Top-level export checklist

The package public entry point exports:

- Runtime: `createGame`, `createLoop`, `createRng`, `createInput`, `createAudio`, `createProbe`.
- Rendering/presentation: `createRenderPipeline`, `OG_RENDER_QUALITY_PRESETS`, `createCameraRig`, `OG_CAMERA_RIG_PRESETS`, `createFx`, `createVfx`, `createUi`, `deriveUiTokens`, `OG_UI_THEMES`, `OG_UI_FAMILIES`, `OG_UI_MOTIONS`, `OG_UI_LAYOUTS`.
- Content/systems: `createAssets`, `screenCoveragePx`, `lodDistanceForCoveragePx`, `createLevels`, `createLocomotionPack`, `createPhysics`, `createActorBinding`, `createSaveStore`, `createNetSession`.
- Terrain: `createTerrainSurface`, `createTerrainSurfaceFromEXR`, `createTerrainMaterial`, `createTerrainFromConfig`.
- Host bridges: `reportProgression`, `reportReady`.

Import Three.js classes and addon passes from `three` / `three/addons/...`; og-engine does not re-export Three.js.
