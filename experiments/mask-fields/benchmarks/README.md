# Dynamic light scaling — desktop GPU measurements

2026-10-15. Three completed passes × 23 modes × 360 GPU samples = **24,840 valid GPU samples**. Each mode also had 60 warmup frames. macOS, Codex in-app Chrome 155, WebGL2 GPU elapsed-time queries; renderer identity is masked as WebKit WebGL. No physical mobile device was used.

Drawing buffer: 790 × 600, DPR 1. Standard cloud target: 514 × 390 (65%), 64 raymarch steps. Light atlas: 512 × 192 representing 64 × 24 × 64 voxels. Fixed camera; identical deterministic cloud/light phase sequence per mode. Clearing/tint enabled, camera clearing and visible outlines disabled. Total light intensity stays 10.5 for all counts, and atlas encoding range is 16 to avoid saturation. These are approximate unshadowed local lights.

## Light count

Latest control pass, **GPU median milliseconds**, including scene, clouds, composite and atlas update when enabled:

| Lights | Direct per sample | Atlas every frame | Less GPU time |
|---:|---:|---:|---:|
| 3 | 5.590 | 5.207 | 6.8% |
| 8 | 6.298 | 5.599 | 11.1% |
| 16 | 7.124 | 4.936 | 30.7% |
| 32 | 7.717 | 5.625 | 27.1% |

Across all three passes, the atlas saves 27–37% at 32 lights, 13–31% at 16, 6–16% at 8 and 3–7% at 3. These are observed ranges, not confidence intervals. Direct lighting grows with light count; atlas sampling in the cloud march stays constant, with the light-dependent work moved to a smaller fixed grid. CPU light updates and atlas baking still grow with count. Batching is not free.

## Frequency and quality

Latest control pass, 32 lights. The reference is 64 steps, 65%, atlas every frame.

| Mode | GPU median ms | GPU mean ms | GPU p95 ms | Actual atlas updates/s |
|---|---:|---:|---:|---:|
| 32 lights / atlas frame | 5.625 | 5.864 | 8.424 | 120.0 |
| 32 lights / atlas 30 | 6.113 | 6.571 | 10.019 | 30.0 |
| 32 lights / atlas 15 | 5.339 | 5.539 | 7.596 | 15.0 |
| 32 lights / scale 0.4 | 3.787 | 3.847 | 5.282 | 120.0 |
| 32 lights / scale 0.5 | 4.456 | 4.905 | 7.802 | 120.5 |
| 32 lights / scale 1 | 8.398 | 8.378 | 10.714 | 85.9 |
| 32 lights / steps 32 | 3.547 | 3.626 | 4.760 | 120.0 |
| 32 lights / steps 48 | 4.685 | 5.000 | 7.269 | 120.0 |
| 32 lights / steps 96 | 7.740 | 8.195 | 12.346 | 107.3 |

- Reducing scale 65% → 40% saves 27–35% GPU median across the three passes. 50% saves 16–21%. Full resolution costs 49–102% more than 65%.
- Reducing steps 64 → 32 saves 27–37%; 48 saves 9–18%. 96 steps costs 32–62% more. These controls trade image detail/banding for time; they were varied separately, so their savings must not be added together.
- Lower light refresh rates have **no consistent win** in these runs. Frame-to-frame variation is larger than the small atlas-update saving. Keep per-frame updates as the default for smooth motion; 15/30 Hz remain explicit options and can visibly lag moving lights.
- FPS often stays near 120 because of display synchronization; GPU timing is more useful here. For 32 lights the control pass reported ~89 FPS direct versus ~120 with the atlas, but FPS is not a hardware-independent promise.

## Limits and reproducibility

Absolute GPU times varied substantially between runs (baseline median 2.61 / 4.76 / 3.88 ms). GPU scheduling, power/thermal state and background work were not controlled; no statistical significance or exact universal crossover count is claimed. The comparisons identify a repeatable scaling trend on this computer. Interleaved longer trials on target hardware would be needed for a precise crossover.

The first two passes used a cadence that reset after each update: requested 30 Hz actually delivered ~25–26 Hz, and 15 Hz ~14 Hz. Their JSON files explicitly record actualAtlasHz. A scheduler regression test now verifies exact tick counts on a 120 Hz display and skipping missed ticks after stalls. The third, v3 control pass measures the corrected scheduler (~30/~15 Hz). Both older runs remain for transparency; only the third is used in the frequency table.

Modes hide geometry markers and use the same camera/phase sequence. Reverse ordering reduces order bias but cannot eliminate GPU state drift. JSON also includes per-mode settings, measured dimensions, GPU sample count, mean/median/p95, update/reuse frame groups, CPU time and actual update frequency. A resize or hidden tab cancels an active benchmark.

Use **16–32 lights with the atlas**, per-frame updates, and start with 64 steps / 65% scale. For a faster quality preset, try 48 steps / 50% and visually assess detail. No production defaults were changed in the stable package.

## Raw reports

- [Forward pass](lights-scaling-forward.json)
- [Reverse pass](lights-scaling-reverse.json)
- [Control pass, corrected cadence](lights-scaling-cadence-fixed.json)
