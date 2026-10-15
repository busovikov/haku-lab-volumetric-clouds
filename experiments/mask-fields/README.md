# Mask fields experiment

Separate experimental implementation on `feature/mask-fields`; the stable 0.1.1 package API is unchanged.

Open `/feature.html`. The demo contains:

- 13 independent clearing boxes along a winding path, baked into one R8 Data3DTexture.
- Three independent tint spheres (coral, mint and violet), baked into one RGBA8 Data3DTexture. RGB contains a weighted linear-color average; alpha contains maximum influence.
- Selectable 3, 8, 16 or 32 independently moving lights (16 by default). Their irradiance is added in a GPU pass into a 64-slice tiled atlas. The main cloud shader performs two bilinear atlas reads to interpolate the 3D lighting field.
- Soft camera-facing clearing from the combined mask. The shader samples the mask once per ray step and computes a backward prefix maximum. There is no nested forward search and no clearing figure list in the main shader.

The field grid is 64 × 24 × 64 in world bounds [-24,0,-24] to [24,8,24]. The light atlas is 512 × 192 RGBA8. The fields occupy approximately 864 KiB in total (excluding render targets and noise). Light values are encoded with a scale of sixteen. These are approximated light fields without local light shadows; atlas resolution and quantization affect accuracy.

Static clearing/tint fields are baked once. Moving lights update only the light field. An application that animates tint/clearing geometry must also rebuild the corresponding fields; this experiment deliberately measures static boxes/spheres and dynamic lights.

## Benchmark

Click the compare button. 23 modes run with a fixed camera, drawing-buffer dimensions and deterministic cloud/light phase sequence. Each uses 60 warmup and 360 measured frames. Repeat runs reverse the mode order. The light matrix uses 64 steps at 65% scale; quality cases explicitly override one setting at a time. Outlines/markers and camera clearing are disabled during measurement. A hidden tab or resized viewport cancels the run.

- Baseline ordinary clouds without clearing, tint or local lights.
- 3/8/16/32 lights: direct per-ray-sample lighting versus atlas updates every frame / 30 Hz / 15 Hz.
- 32 lights: cloud scale 40% / 50% / 100%, and steps 32 / 48 / 96, each compared to the standard 65% / 64.

Light intensity is normalized to a total 10.5 across all counts to avoid atlas saturation and keep brightness comparable. Atlas RGB stores irradiance divided by 16 in RGBA8, with approximate trilinear lookup. Lower refresh rates intentionally reuse older lighting and can lag markers. The scheduler preserves phase instead of drifting to a lower update frequency.

GPU elapsed-time queries are asynchronous and invalid/disjoint samples are discarded. JSON records GPU median/mean/p95, GPU update/reuse frame groups, actual update frequency, CPU/frame averages, sample counts, per-mode settings and dimensions. Unsupported GPU timing remains unavailable. FPS can be display-limited; CPU and FPS do not replace GPU timing.

[Desktop measurements and raw reports](./benchmarks/README.md): three passes, 24,840 GPU samples. At 32 lights, the atlas took 27–37% less GPU median time than direct lighting in these runs. Reducing update frequency did not show a consistent win. Absolute timings vary with GPU scheduling/power state; this does not establish an exact crossover for other hardware. Clearing changes visibility and early termination, so baseline comparisons reflect the whole workload. Finite ray steps can miss very thin clearing regions.

## Run

```sh
npm test
node --test experiments/mask-fields/fields.test.js
npm run dev -- --port 5180
```

No external textures, terrain or game-object dependencies are used.
