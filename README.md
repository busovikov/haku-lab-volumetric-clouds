# Haku Lab · Volumetric Clouds

Volumetric clouds and independent soft clearing areas for Three.js r180 / WebGL2.

## Release 0.2.0

Shared clearing/color fields, up to 32 local lights, frustum filtering, soft camera clearing from the combined mask and four quality presets. The main landing demo uses the released MaskFieldClouds API with moving lights, tint spheres and a winding clearing path. Existing VolumetricClouds integrations remain supported.

## Library

Package source: `packages/volumetric-clouds`. Shapes: cylinder, sphere, ellipsoid and box. Includes rotation, Object3D attachment, frustum culling and soft camera-facing clearing.

- [English API guide](public/downloads/haku-lab-volumetric-clouds-guide-en.md)
- [Russian API guide](packages/volumetric-clouds/README.md)

## Run the bilingual landing page

```sh
npm ci
npm run dev
```

English: `/` or `/library-en.html`. Russian: `/library.html`.

```sh
npm test
npm run build
```

## GitHub Pages

In repository Settings → Pages, select **GitHub Actions** as the source. The included workflow tests and builds the site on pushes to `main`, then publishes `dist/`. Relative asset and download URLs work under the repository path.

## Package installation

Download `haku-lab-volumetric-clouds-0.2.0.tgz` from the landing page and run:

```sh
npm install three@0.180.0 ./haku-lab-volumetric-clouds-0.2.0.tgz
```

The repository contains only the reusable library, landing page and downloadable artifacts. No game textures, terrain prototype, credentials or local development files are included.

The package is currently UNLICENSED; no open-source license is granted by this repository.
