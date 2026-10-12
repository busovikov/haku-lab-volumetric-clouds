# @haku-lab/volumetric-clouds

Standalone ESM volumetric clouds for Three.js r180 and WebGL2. Includes clouds, soft clearing areas and a render pipeline. Your application owns its terrain, models, UI, storage and animation loop.

## Install

Download the package and run:

```sh
npm install three@0.180.0 ./haku-lab-volumetric-clouds-0.1.0.tgz
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
- Maximum 128 areas per instance.

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
