# Skybound Rescue — Production Plan

## Concept

**Skybound Rescue** is a melancholy 3D action-traversal game set on storm-scarred sky temples. The player is a lone beacon-warden who crosses floating slate ruins to free stranded **signal spirits**. Risk is always readable: wind shear zones marked by debris and torn cloth flip jump arcs mid-air, paths collapse after weight, limited **pulse charges** buy only rescue beacons and path stabilizers, and **signal storms** briefly scramble controls while veiling vision. The fantasy is careful commitment—precise jumps, short air control, carry one spirit at a time to a nearby anchor—rather than combat or score chasing.

Tone: cool slate stone, violet lightning flashes, amber beacon light against a bruised storm sky. Session shape: short authored journey (target about 6–12 minutes of active play once content is complete) from title through onboarding island, three escalating route beats, a signature multi-spirit rescue finale, then win or fail with instant replay and return to title.

## Player fantasy and core loop

1. Read the next platform, shear cloth, and collapse tell.
2. Move and jump with precision; land committed; recover on solid stone.
3. Spend pulse charges only to stabilize a crumbling path or light a rescue beacon.
4. Pick up one stranded spirit, carry it (movement slightly heavier), deliver to an amber anchor to free it.
5. Push deeper as stakes escalate: longer gaps, stacked shears, interference storms, fewer free charges between rests.
6. Complete the signature rescue at the broken spire, or fall from the ruins and fail.

Fail is **only** by leaving support / crossing the kill plane. Running out of pulse charges never auto-fails; it only removes recovery tools so later collapses and dark anchors become harder to survive.

## Controls and camera (desktop)

| Action | Binding |
|--------|---------|
| Move | WASD and Arrow keys (parity) |
| Jump | Space |
| Stabilize path (spend charge) | E — only near a marked unstable span, consumes 1 pulse charge |
| Light rescue beacon (spend charge) | Q — only at an unlit beacon socket in range, consumes 1 pulse charge |
| Pause / resume | Escape toggles pause while playing |
| Restart run | R from fail or complete result surfaces (also offered as Restart button) |
| Start from title | Enter or pointer on Start |
| Return to title | Title button on pause, fail, and complete surfaces |

**Camera:** fixed-angle cinematic **side–three-quarter** rig that tracks an authored route spine. Lateral and depth framing stay biased so the next gap, cloth markers, and landing pads stay readable; no free orbit. Camera eases along spine samples with the player; reduced-motion softens shake and storm punch-ins.

**Traversal feel:** precise jumps, short air steer, committed landings (brief recover, no multi-jump). Wind does not constantly drift the player on ground; **shear volumes** apply a sudden lateral impulse only while airborne inside a marked zone.

## World response and hazards

- **Collapsing paths:** plates show crack emissive/dust tell, then fall after a short fuse once stepped; stabilizer (E + 1 charge in range) freezes that plate for the remainder of the run.
- **Shear zones:** vertical cloth strips and floating debris mark volumes; entering mid-jump applies a telegraphed sideways impulse and a whoosh; ground movement inside the volume is unaffected.
- **Signal storms / interference fields:** violet fog disks with ground decals on later beats. While inside: movement axes are **mirrored** for a short pulse window and a static vision veil appears. Exit restores normal axes and clears the veil. Reduced-motion: veil only, no flicker or camera punch.
- **Fall fail:** leaving support or dropping below the kill plane transitions `playing → fail` with a visible fail surface.
- **Carry state:** holding a spirit slightly reduces move speed and jump height. There is no separate drop input and no mid-air spirit physics: the spirit stays attached until delivered to an anchor or the player fails the run (on fail, carry clears with full run reset). No independent “recall while run continues” path.

## Energy (pulse charges)

- Discrete pips. **Start each run with 3 charges.**
- Costs: stabilize (E) = 1; light beacon (Q) = 1. Basic walk/jump never spend charges.
- Restoration: onboarding rest altar restores to full (3); Beat A rest +1 (cap 3); Beat B charge pickup +1; Beat C rest +1; spire approach pickup +1. Cap remains 3.
- Running out of charges does not fail the run.

## Rescue fantasy

- Touch a stranded spirit to pick it up (one at a time).
- Carry to a nearby **amber anchor** ring; delivery completes on contact in the anchor radius and the spirit streams home as light.
- Some path gates require lighting a **rescue beacon** (Q + charge at socket) before the gated pad colliders/meshes enable and the route continues.
- **Signature moment:** at the broken spire, three spirits must be carried in sequence across a shear-heavy bridge during a storm crest; the last delivery triggers win presentation.

## Authored journey content

**Composition root:** one continuous runtime level with gated segments along a single route spine (camera samples + segment unlock flags). Full-run reset restores all segment state without tearing down the level definition.

| Segment | Platforms / route | Spirits | Anchors | Beacons / gates | Collapses | Shears | Storms | Rests / pickups |
|---------|-------------------|---------|---------|-----------------|-----------|--------|--------|-----------------|
| Onboarding | Safe isle, 1 practice gap, 1 short landing | 1 | 1 | 0 | 1 (stabilizer teach) | 1 marked | 0 | Rest altar → full 3 |
| Beat A Outer colonnade | 6–8 pads, short precise gaps | 2 | 2 | 0 | 2 | 2 | 0 | Rest +1 |
| Beat B Storm causeway | 8–10 pads, longer gaps | 2 | 2 | 1 beacon gate | 3 | 3 stacked | 1 interference | Pickup +1 |
| Beat C Violet galleries | 8–10 pads, dense reads | 2 | 2 | 1 beacon gate | 4 | 3 | 2 interference | Rest +1 |
| Broken spire signature | Approach + shear bridge + final ring | 3 | 1 final (accepts three sequential deliveries) | 1 optional stabilizer span on bridge | 2 | 4 on bridge | 1 crest field | Pickup +1 on approach |

**Required frees to win:** all spirits in the table (10 total); the win trigger fires on the third spire delivery after prior segments’ spirits are freed (segment gates prevent skipping ahead).

## Visual language

- **Palette:** cool slate greys-blues, wet stone desaturation, violet lightning accents, amber beacon/spirit emissives, deep storm indigo backdrop.
- **Materials:** wet stone/slate PBR on platforms; cloth pennants for shear tells; amber glass/metal for anchors and beacons; crack emissive on collapse plates.
- **Lighting:** cool key + soft fill from HDRI IBL; sparse amber point lights at anchors/beacons; occasional violet lightning exposure pulse (reduced-motion: single soft flash or skip).
- **Backdrop:** authored storm gradient / sky dome separate from IBL when the HDRI lower hemisphere fights floating ruins.
- **VFX:** collapse dust, spirit carry trail, anchor free burst, shear debris motes, interference veil, final vertical amber-violet light shaft on win.
- **Presentation beat:** final spirit release opens the light shaft through the storm while music resolves.

## Interface and flow

Phases: `loading` → `title` → `playing` → `paused` / `fail` / `complete`.

Game-specific HUD (slate panels, amber type, violet storm accents): pulse charge pips (0–3), spirits freed / required, carry indicator, contextual E/Q prompts only when valid targets are in range, brief objective line, pause modal (Resume, Title), fail and complete modals (Restart, Title). Onboarding uses short non-blocking toasts for jump, shear, stabilize, carry, and beacon.

Accessibility: honor `prefers-reduced-motion` (no shake strobe, no interference flicker, softened lightning); pair color with shape/icon tells (cloth cards, ground decals, HUD icons); fully keyboard completable; pointer for title/result buttons.

## Audio

- Looping melancholy storm ambience (wind + distant thunder) from first playable enter.
- Music bed under Beats A–C; swell on spire crest; win and fail stingers on phase change.
- Semantic SFX: jump, land, footstep stone, shear whoosh, collapse crack/fall, charge spend, charge restore, beacon light, gate open, spirit pickup, spirit free, interference enter/exit hash, UI confirm/pause.

## Technical approach

- Vendored `og-engine`: `createGame` with custom shell title, `render.setEnvironment` + authored lights, input binds including arrow move parity, UI theme, audio cues, single-level segment director, `pause`/`resume`, `fail`/`win`, `reset` with registered system restorers, `shell.toTitle`.
- Grounded character via physics + grounded controller (or equivalent support-aware locomotion); authored jump impulse for precision feel.
- Route as data-driven placements (platforms, hazards, spirits, anchors, beacons, spine samples) consumed by world builder, camera, and systems.
- Desktop keyboard primary; pointer for shell/result chrome only.

## Asset Bill of Materials

| Role | Direction fit / identity | Source | Runtime consumer |
|------|--------------------------|--------|------------------|
| Storm IBL HDRI | Cool dark reflections on wet slate | Catalog `grp_0137eb31f6895454d7` Moonless Golf as IBL only | Foundation `render.setEnvironment` |
| Storm sky backdrop | Bruised indigo-violet dome without photo ground conflict | Author/procedural sky dome + gradient | Foundation scene background |
| Ruin platform kit | Weathered stone pads/steps for temples | Catalog `grp_88ff750530897d6035` Platform Stone, `grp_cfb1a08dd485c89173` Cliff Steps Stone, `grp_084eec0ddbad553b6d` Stairs Wide Stone | Segment world builders / fixed supports |
| Collapse plate variant | Same kit with crack emissive state swap | Author material states on platform kit | Collapse system meshes |
| Slate stone material | Cool grey wet temple stone (retint castle maps cooler) | Catalog `grp_235217a1aeebf76c36` Castle Wall Variation | Platform materials |
| Beacon warden body | Hooded traveler silhouette readable in three-quarter | Catalog `grp_2b1848fe83535a56a4` Rogue Hooded mesh | Player visible root |
| Warden movement clips | Idle/walk/run/jump for precise traversal | Catalog `grp_05d3ba450ba5d3665c` Rig Medium Movement Advanced clips retargeted or paired | Player animation state |
| Shear cloth markers | Violet-grey torn cloth poles + light debris cards | Author/generate simple meshes | Shear volume markers in hazard segments |
| Interference field decals | Violet ground ring + fog volume | Author/procedural | Storm field visuals |
| Signal spirits | Small amber-violet luminous wisps | Generate/procedural emissive mesh + trail | Rescue pickup/carry/free |
| Amber anchors | Stone ring + amber core | Author/procedural from kit + emissive | Delivery targets |
| Beacon sockets | Unlit/lit lantern pylons | Author/procedural | Q targets and gate drivers |
| Rest altars / charge pickups | Small amber stone pylons vs floating charge motes | Author/procedural | Charge restore volumes |
| Segment silhouettes | Colonnade pillars, gallery arches, broken spire crown dressing | Catalog stone kit + authored arrangement | Beats A–C and spire scene packages |
| Collapse dust / shear motes / free burst / win shaft | Palette-matched VFX | Author via `game.vfx` / lightweight meshes | Hazard and rescue presentation |
| HUD icons (charge, carry, stabilize, beacon) | Shape-distinct slate/amber icons | Generate or author 2D | HUD and onboarding prompts |
| Title/result chrome | Slate panel, amber type, violet edge | Author `game.ui` theme | Shell, pause, fail, complete |
| Storm ambience loop | Melancholy wind/thunder bed | Generate | Ambience bus from enter-play |
| Music bed + spire swell | Sparse melancholy to crest | Generate | Music bus by segment/phase |
| Win/fail stingers | Amber resolve / low storm cut | Generate | Phase complete/fail |
| Semantic SFX set | Jump, land, foot, shear, collapse, charge spend/restore, beacon, gate, spirit pickup/free, interference, UI | Generate | `audio.defineCue` consumers on gameplay events |

## Steps

- [ ] **Foundation: storm isle, warden, jump, fail/restart lifecycle**
  - Foundation: playable
  - Package [scene]: Onboarding floating isle geometry from stone kit, practice gap landing, kill plane, cool slate materials, Moonless Golf IBL, authored storm backdrop, amber fill accents, route-spine samples for the isle, side-three-quarter camera bound to spine | Handoff: support collider set, spawn foot transform, `routeSpine[]` samples for camera, environment ready
  - Package [gameplay]: Grounded warden with WASD and Arrow move parity, Space jump (short air control, committed land), fall → real `fail()` transition, Escape pause/resume, R and result Restart resetting foundation-owned state (pose, velocities, phase back to playing), Title via `shell.toTitle` | Handoff: player controller, `onRunReset` registry with foundation restorer, pause binding, fail/restart working without stubs
  - Package [presentation]: Loading, custom title **Skybound Rescue**, Start enter-play, fail modal (Restart, Title), pause modal (Resume, Title), slate-amber-violet UI chrome mount, reduced-motion camera flag read | Handoff: shell and result/pause surfaces consuming phase changes; HUD root ready for later pips
  - Capabilities: responsive-input, onboarding-tutorial, visual-vfx-ui, accessibility
  - Acceptance: Title shows after load; Start places the hooded warden on lit slate under cool storm lighting; WASD and Arrows move; Space jumps and lands with short air control; camera holds side-three-quarter along isle spine; Escape pauses and resumes; falling triggers visible fail; Restart/R runs a clean foundation reset into play; Title returns to shell; no runtime errors.

- [ ] **Beats A–B route: collapses, shears, charges, stabilizers**
  - Package [scene]: Outer colonnade and storm causeway pads from stone kit, 2+3 collapse plates, 2+3 shear cloth/debris markers, Beat A rest altar and Beat B charge pickup prop, Beat B beacon-gate frame and locked pad meshes/colliders, extended `routeSpine[]` through A–B | Handoff: placement records (`collapseId`, `shearVolume`, `restId`, `pickupId`, `gateId`, locked collider refs) for systems
  - Package [gameplay]: Collapse fuse-on-step and remove support; shear airborne lateral impulse; pulse charges start at 3; E stabilizes valid plate for −1 charge; rest/pickup restore per economy; run reset restores charges, plate states, and shear cooldowns | Handoff: `charges` state + events (`chargeChanged`, `collapseStart`, `plateFell`, `stabilized`, `chargeRestored`) and reset registration
  - Package [presentation]: Charge pip HUD, contextual E prompt in range, collapse dust and crack tells, shear debris motes, reduced-motion-safe shear feedback; storm ambience loop on enter-play; jump/land/foot/shear/collapse/charge-spend/charge-restore cues | Handoff: HUD bound to `chargeChanged`; VFX and SFX listeners on hazard/charge events; ambience controller for later music layering
  - Capabilities: responsive-input, progression-economy-balance, visual-vfx-ui, audio, accessibility
  - Acceptance: Player traverses authored A–B gaps; marked plates crack then fall unless stabilized with E for 1 charge; airborne shear flips arc beside cloth tells; rests/pickups restore charges to rules; pips update; falling still fails and full reset restores plates and charges; ambience and hazard SFX play.

- [ ] **Rescue loop and onboarding teach: spirits, anchors, beacons, interference**
  - Package [scene]: Onboarding spirit + anchor props; Beat A two spirits/anchors; Beat B two spirits/anchors + beacon socket linked to existing gate frame; interference field volumes/decals for Beat B; dressing that keeps carries readable in three-quarter view | Handoff: `spiritSpawn[]`, `anchorRadius[]`, `beaconSocket` + `gateId` link, `stormField[]` transforms
  - Package [gameplay]: One-at-a-time pickup on touch, carry speed/jump penalty, deliver on anchor contact, free count; Q lights beacon in range for −1 charge and enables linked gate pad; interference mirrors move axes while inside and clears on exit; onboarding toast flags for jump, shear, stabilize, carry, beacon; segment gate requires required frees before spine unlock beyond onboarding/A as designed; reset restores spirits, anchors, beacons, gates, storm state, carry | Handoff: rescue state (`carriedId`, `freedCount`, `beaconsLit[]`), `gateOpened` event consumed by locked colliders, storm enter/exit events, tutorial flags, reset registration
  - Package [presentation]: Spirit emissive + carry trail, amber anchor and beacon unlit/lit reads, interference vision veil (static, no flicker when reduced-motion), objective line, contextual Q prompt, non-blocking onboarding toasts, carry HUD icon; spirit pickup/free, beacon light, gate open, interference enter/exit, and UI toast cues | Handoff: visuals, HUD, and SFX bound to rescue/storm/UI events
  - Capabilities: onboarding-tutorial, progression-economy-balance, responsive-input, visual-vfx-ui, audio, accessibility
  - Acceptance: Onboarding teaches jump, shear, stabilize, carry, and deliver without a hard lock; spirits carry one at a time to anchors and free; Q opens a beacon-gated pad when charges remain; interference mirrors controls with veil and restores on exit; reset restores all rescue and gate state; audio matches events.

- [ ] **Beats C + broken spire signature, win path, music crest**
  - Package [scene]: Violet galleries and broken spire geometry (arches, shear bridge, final ring, spire crown), Beat C four collapses / three shears / two storm fields / one beacon gate / rest altar, spire two collapses / four shears / crest field / approach pickup / three spirit spawns + final anchor, spine samples through finale | Handoff: finale placement records consistent with earlier system schemas
  - Package [gameplay]: Wire C + spire into existing collapse/shear/charge/rescue/storm/gate systems; require segment progress so spire’s three sequential deliveries are reachable only after prior frees; third spire delivery calls `win()`; run reset covers new segment ids; instant replay from complete uses same reset | Handoff: win trigger on final free; segment progress flags; reset registration for C/spire ids
  - Package [presentation]: Escalated violet lightning accent (reduced-motion soft), signature win light shaft and complete modal (Restart, Title), cohesive HUD objective for spire spirits during finale; music bed under Beats A–C with spire crest swell; win and fail stingers on phase change | Handoff: complete surface on phase `complete`; win VFX on final free; music controller driven by segment id + phase
  - Capabilities: progression-economy-balance, responsive-input, visual-vfx-ui, audio, accessibility, cohesion-polish
  - Acceptance: Full journey reaches the spire; delivering the third spire spirit wins with light shaft and complete modal; fall still fails; R/Restart from win or fail replays a clean full run; Title returns to shell from result/pause; music swells on spire and stingers on outcomes; reduced-motion respected; no runtime errors on win, fail, restart, and title-return paths.

## Verification

- Controls/action: From title, Enter or Start begins play. WASD and Arrows move the warden; Space jumps with short air control and committed landing; E spends 1 charge to stabilize a marked plate in range; Q spends 1 charge to light a beacon in range and opens its gate; Escape pauses and resumes; R or Restart after fail/complete resets the full run; Title returns to the title surface.
- Observable state changes: Warden translates and jumps on floating stone; collapse plates crack then fall or stay if stabilized; airborne shear applies a lateral arc flip beside cloth/debris; charge pips start at 3, decrement on E/Q, increment on rest/pickup up to cap 3; spirit attaches on pickup with carry trail and frees on amber anchor contact; beacon unlit→lit enables gated pad; interference mirrors move input and shows veil until exit; phases move loading→title→playing→paused/fail/complete with matching surfaces and audio.
- Objective: Free all stranded signal spirits along the sky route by carrying one at a time to anchors, using pulse charges only for stabilizers and beacons, and finish the broken spire triple delivery.
- Win: After prior segment frees, deliver the third spirit to the spire final anchor; win VFX and complete result appear.
- Fail: Fall off ruins or through the kill plane during play; fail result appears with Restart and Title (charge depletion alone does not fail).
- Restart: Restart or R resets charges, plates, shears, spirits, beacons, gates, storms, carry, segment progress, and player pose, then returns to playing at run start; Title returns to shell without leftover fail/complete blocking input.
- Surfaces: Desktop keyboard for move/jump/E/Q/pause/restart plus pointer on title/result/pause buttons; Host Playtest desktop surface.

### Host Playtest routes (minimal)

1. **Happy path smoke:** Title → Start → complete onboarding teach (gap, shear read, stabilize once, carry one spirit to anchor) → traverse A–B using at least one E or Q if charges allow → reach spire → free three spire spirits → observe win shaft + complete → Restart → confirm charges 3, spirits present, gates closed again at run start.
2. **Fail and recover:** From play, walk off isle → fail modal → R → playing on isle with clean state → Escape pause → Title → title surface Start works again.
3. **Systems spot checks:** Enter an interference field and confirm mirrored strafe plus veil, then exit and confirm restore; with 0 charges, confirm jump still works and E/Q do not; with reduced-motion preferred, confirm no strobing interference/lightning.