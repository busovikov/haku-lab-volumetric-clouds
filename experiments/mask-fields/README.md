# Mask fields experiment

Separate experimental implementation on `feature/mask-fields`; the stable 0.1.1 package API is unchanged.

Open `/feature.html`. The demo contains:

- 13 independent clearing boxes along a winding path, baked into one R8 Data3DTexture.
- Three independent tint spheres (coral, mint and violet), baked into one RGBA8 Data3DTexture. RGB contains a weighted linear-color average; alpha contains maximum influence.
- Three independently moving lights. Their irradiance is added in a GPU pass into a 64-slice tiled atlas. The main cloud shader performs two bilinear atlas reads to interpolate the 3D lighting field.
- Soft camera-facing clearing from the combined mask. The shader samples the mask once per ray step and computes a backward prefix maximum. There is no nested forward search and no clearing figure list in the main shader.

The field grid is 64 × 24 × 64 in world bounds [-24,0,-24] to [24,8,24]. The light atlas is 512 × 192 RGBA8. The fields occupy approximately 864 KiB in total (excluding render targets and noise). Light values are encoded with a scale of eight. These are approximated light fields without local light shadows; atlas resolution and quantization affect accuracy.

Static clearing/tint fields are baked once. Moving lights update only the light field. An application that animates tint/clearing geometry must also rebuild the corresponding fields; this experiment deliberately measures static boxes/spheres and dynamic lights.

## Benchmark

Click the compare button. Seven modes run with the same fixed camera, drawing-buffer dimensions, quality, cloud/light phase sequence, 45 warmup frames and 120 measured frames. Markers/outlines are hidden during comparison. GPU elapsed-time queries are collected asynchronously and invalid/disjoint samples are discarded. Unsupported GPU timing is displayed as unavailable; CPU and FPS are not substituted for GPU timings.

Modes:

1. Stable ordinary clouds, no clearing/color/local lights.
2. Shared clearing mask.
3. Clearing and color fields.
4. Clearing/color/light fields without camera clearing.
5. Full effect with camera clearing.
6. The same clearing and color, but three local lights evaluated directly per raymarch sample.
7. Light-field update only (no cloud render; isolates the atlas update cost).

Comparisons to the ordinary clouds reflect the complete changed workload, including increased visibility after clearing. In particular, camera clearing can change early termination and the number of nonempty samples. FPS may remain at display refresh despite GPU differences. Finite ray steps may miss very thin clearing regions; this is a prototype, not a claim of identical accuracy to analytic geometry.

Use the JSON export for browser/device metadata, dimensions, settings, per-mode options, CPU/frame averages and GPU median/p95/sample counts. The initial desktop result is saved in `benchmark-run1.json`. Repeat runs are recommended because GPU scheduling and power state vary.

## Run

```sh
npm test
node --test experiments/mask-fields/fields.test.js
npm run dev -- --port 5180
```

No external textures, terrain or game-object dependencies are used.
