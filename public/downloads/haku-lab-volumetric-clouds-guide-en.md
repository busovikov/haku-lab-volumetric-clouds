# @haku-lab/volumetric-clouds

Standalone ESM volumetric clouds for Three.js r180 and WebGL2. Includes clouds, soft clearing areas and a render pipeline. Your application owns its terrain, models, UI, storage and animation loop.

## Install

Download the package and run:

```sh
npm install three@0.180.0 ./haku-lab-volumetric-clouds-0.2.0.tgz
```

Three.js is a peer dependency. TypeScript declarations are included; use matching `@types/three` in TypeScript projects.

## Integrate

```js
import { VolumetricClouds } from '@haku-lab/volumetric-clouds';

// renderer, scene and camera belong to your application.
const clouds = new VolumetricClouds(renderer, {
  settings: { density: 0.8, cameraClear: true },
});
const area = clouds.addArea({
  shape: 'cylinder', position: [0, 2, 0], radius: 4.5, softness: 1.2,
});

let previous;
renderer.setAnimationLoop(now => {
  const dt = previous === undefined ? 0 : Math.max(0, (now - previous) / 1000);
  previous = now;
  // Update your scene and camera here.
  clouds.render(scene, camera, dt);
});

// On teardown:
// renderer.setAnimationLoop(null);
// clouds.dispose();
```

Call `clouds.render()` instead of a separate `renderer.render(scene, camera)`. It captures scene color/depth, raymarches the clouds and composites the result. Do not call `update()` with a delta in addition to `render()`, or animation time advances twice.

## Clearing shapes

```js
clouds.addArea({ shape: 'sphere', position: [5, 3, 0], radius: 3 });
clouds.addArea({
  shape: 'ellipsoid', position: [-5, 3, 0],
  radii: [3, 5, 2], heightMode: 'manual',
});
clouds.addArea({
  shape: 'box', position: [0, 3, 8], radii: [3, 4, 2],
  rotation: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0.6, 0)),
  heightMode: 'manual',
});
```

- `radii`: half extents in local X/Y/Z. A box with `[3,4,2]` is 6 × 8 × 4.
- `radius`: X/Z radius, or all axes for a sphere.
- `height`: full height in `manual` mode; expands equally above and below the center.
- `heightMode: 'layer'`: default for cylinders, ellipsoids and boxes; covers the full fog layer with a soft-edge margin. The local Y axis must remain vertical. Use `manual` for tilted areas. Spheres always keep their specified radius.
- `rotation`: quaternion. All shapes support rotation in manual mode.
- `softness`: soft-edge width control; default 1.2.
- `strength`: clearing strength from 0 to 1; animate this yourself for smooth transitions.
- `enabled`: set to false to disable an area.
- Up to 128 areas per instance. The actual `clouds.maxAreas` limit depends on the GPU uniform budget. Set the `maxAreas` constructor option to reserve fewer shader slots.

```js
area.setOptions({ radius: 6, softness: 1.6 });
area.position.set(2, 3, 5);
clouds.removeArea(area);
clouds.clearAreas();
```

## Attach and detach

```js
const attached = clouds.addArea({ radius: 4 }).attach(myObject3D);
attached.detach(); // preserves world center and rotation
```

Attached areas use the center of the object's world bounds. Their `position` adds an offset in the object's oriented axes, in world units. Object rotation is inherited, but clearing radii do not scale with the model. Removing a model from the scene does not remove its clearing area; call `detach()` or `removeArea()` explicitly.

## Settings and presets

```js
clouds.setSettings({ density: 0.7, cloudScale: 24, detail: 1 });
const preset = clouds.getSettings();
localStorage.setItem('my-clouds', JSON.stringify(preset));
clouds.setSettings(JSON.parse(localStorage.getItem('my-clouds')));
```

Settings: `speed`, `base`, `thickness`, `density`, `relief`, `detail`, `cloudScale`, `fogTint`, `shadowTint`, `steps` (8–96), `resolutionScale` (0.1–1), `cameraClear`. Colors use `#RRGGBB` strings. `cameraClear` softly extends clearing areas toward the camera along view rays.

`getSettings()` returns a copy. Your application implements preset storage and UI. Clearing areas are not included in this snapshot.

## Bounds, resolution and ownership

```js
const clouds = new VolumetricClouds(renderer, {
  bounds: new THREE.Box3(new THREE.Vector3(-64, -8, -64), new THREE.Vector3(64, 24, 64)),
  maskResolution: [128, 96, 128],
  lightDirection: [-0.5, 1, 0.3],
  // cloudTexture: your optional 2D tint texture
});
```

`bounds` define the world-space mask volume and horizontal cloud extent. The entire fog layer (`base` to `base + thickness`) must fit within the Y bounds. Bounds and mask resolution are fixed at construction.

The library generates periodic 3D noise and uses a white tint texture by default. It requires no external game textures or network requests. Caller-supplied `cloudTexture` remains caller-owned. `dispose()` releases all internally created textures, materials, geometry and render targets.

Internal render target sizes follow the renderer's drawing buffer. `resolutionScale` controls fog resolution. Your application still resizes its renderer and camera.

## Culling and diagnostics

Camera clearing receives only areas whose bounds, including soft edges, intersect the camera frustum. CPU mask candidates retain a four-unit margin for lighting and interpolation. The mask rebuilds when the candidate set, area transforms, shapes, strength, softness or fog layer changes. All area bounds must still be checked to detect entry into the frustum.

`clouds.stats` includes `areas`, `visibleAreas`, `maskAreas`, `maskUpdated`, `maskUpdateMs`, `fogWidth` and `fogHeight`. `maskUpdateMs` measures CPU work, not GPU time. Three.js handles culling of your scene meshes; this library does not manage their visibility.

## Integration limits

Tested with Three.js r180, WebGLRenderer, ordinary PerspectiveCamera and OrthographicCamera, and standard depth textures. WebGPU, XR, logarithmic/reversed depth and arbitrary EffectComposer chains are not supported yet. Transparent materials without depth writes do not occlude fog like opaque surfaces. This is a fullscreen raymarching pass, not a cloud mesh.

`render(scene, camera, dt, outputTarget)` can write the composite to a render target. It restores the previous target, clear color, autoClear, viewport and scissor state. More complex postprocessing requires a dedicated pass adapter.

## Source example

After extracting the source archive:

```sh
npm install
npm run dev
npm test
```

Open `http://127.0.0.1:5179/examples/library.html`. The example owns its visual outlines; the library does not create them.

## 0.2.0 — shared masks, tint, local lights and quality presets

The existing VolumetricClouds API is retained. MaskFieldClouds accepts the same options plus effects; it creates no terrain, objects, UI or animation loop.

```js
import { MaskFieldClouds, CLOUD_PRESETS } from '@haku-lab/volumetric-clouds';
const clouds = new MaskFieldClouds(renderer);
clouds.setPreset('balance');
clouds.addArea({shape: 'box', position: [0, 3, 0], radii: [2, 6, 2]});
const tint = clouds.addTint({shape: 'sphere', position: [6, 3, 0],
  radius: 7, color: '#67d1af', softness: 2});
const light = clouds.addLight({position: [0, 3, 0], radius: 8,
  color: '#73daff', intensity: 2});
// Move light.position / tint.position in your own loop.
clouds.render(scene, camera, deltaSeconds, optionalOutputTarget);
// Teardown: clouds.dispose();
```

- addTint(options) returns TintArea: all ClearArea shape, rotation and attachment options, plus color (mutable THREE.Color). removeTint(area) / clearTints(). Colors blend as a weighted linear-color average; alpha is maximum influence. The shader multiplies cloud color by the tint with a blend factor of 0.82.
- addLight(options) returns FogLight: position (mutable Vector3), color (THREE.Color), radius > 0, intensity >= 0, enabled. setOptions, removeLight(light), clearLights(). Move lights in your application. The library does not normalize total energy; only the landing demo does when switching light count.
- setEffects({clearing, tint, lights, lightMode, lightRefreshHz}) / getEffects(). Booleans default true. lightMode: 'atlas' (default) or 'direct'. lightRefreshHz: 0 (each changed frame), 15 or 30. Static lighting is reused. Lower rates can lag fast lights.
- setPreset(name), available on both cloud classes: speed 32 steps / 40%; balance 48 / 50%; quality 64 / 65%; ultra 96 / 100%. CLOUD_PRESETS exports these immutable settings. MaskFieldClouds presets also select atlas lighting updated each changed frame. Other settings are preserved. Persist getSettings() and getEffects() separately. The combined Balance preset is a suggested tradeoff, not a separately measured benchmark result.

Limits for MaskFieldClouds: 128 clearing areas, 128 tint areas, 32 lights. All clearing/tint shapes support cylinder, sphere, ellipsoid and box. Clearing is a max-union R8 3D texture. Static masks rebuild only when their inputs change; the conservative clearing candidate set also changes with camera visibility. Moving clearing/tint regions requires a CPU rebuild, so batching is not free. Lights are filtered by camera frustum and cloud bounds. The light atlas is a fixed 64×24×64 grid; maskResolution separately sets clearing/tint resolution.

Local lights use squared radial falloff without local shadows. Directional cloud self-shadowing remains separate. RGBA8 atlas interpolation/quantization approximates direct lighting; irradiance above 16 per channel clamps. Keep summed energy within this range or select direct. Soft cameraClear uses one mask sample per ray step and a reverse prefix maximum; very thin regions can be missed with few steps.

Stats add tintAreas, tintUpdated, tintUpdateMs, lights, visibleLights, lightFieldUpdated. Resources are instance-owned and dispose() is idempotent. External cloudTexture ownership is unchanged. No external assets or demo code are required by the package.
