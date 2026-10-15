# @haku-lab/volumetric-clouds

Самостоятельная ESM-библиотека облаков для Three.js r180 / WebGL2. В пакете только объёмные облака, мягкие области очистки и рендер-проход. Земля, модели, интерфейс, localStorage и цикл анимации принадлежат приложению.

## Установка

Установите локальную папку пакета или подготовленный npm-архив:

```sh
npm install three@0.180.0 /path/to/haku-lab-volumetric-clouds-0.2.0.tgz
```

Three.js — peer dependency. Библиотека не включает собственную копию Three.js. Типы API входят в пакет; для TypeScript используйте соответствующие `@types/three`.

## Минимальная интеграция

```js
import * as THREE from 'three';
import { VolumetricClouds } from '@haku-lab/volumetric-clouds';

// renderer, scene и camera создаются вашим приложением.
const clouds = new VolumetricClouds(renderer, {
  settings: {
    base: 0.55,
    thickness: 5.5,
    density: 1.1,
    fogTint: '#fff1da',
    shadowTint: '#718baf',
    cameraClear: true,
    steps: 64,
    resolutionScale: 0.65,
  },
});

const clearing = clouds.addArea({
  shape: 'cylinder',
  position: [0, 2, 0],
  radius: 4.5,
  softness: 1.2,
});

let previous;
renderer.setAnimationLoop(now => {
  const dt = previous === undefined ? 0 : Math.max(0, (now - previous) / 1000);
  previous = now;
  // Ваши обновления сцены и камеры.
  clouds.render(scene, camera, dt);
});

// При закрытии/размонтировании:
renderer.setAnimationLoop(null);
clouds.dispose();
```

`render()` рисует сцену с depth texture, затем туман и итоговую композицию. Вместо отдельного `renderer.render(scene, camera)` вызывайте этот метод. Не вызывайте `update()` с dt дополнительно к `render()` — иначе время анимации увеличится дважды. Цикл анимации и DOM библиотека не создаёт.

## Формы областей

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

- `radii` — полуразмеры по локальным X/Y/Z. Для бокса `[3, 4, 2]` задаёт размер 6 × 8 × 4.
- `radius` задаёт радиус X/Z; у сферы — всех осей.
- `height` — полная высота в режиме `manual`. Центр остаётся на месте, высота расширяется вверх и вниз поровну.
- `heightMode: 'layer'` по умолчанию автоматически охватывает весь вертикальный слой тумана с запасом для мягкой границы. Применяется к цилиндру, эллипсоиду и боксу, если их локальная Y вертикальна. Для наклона используйте `manual`. Сфера всегда сохраняет заданный радиус.
- `rotation` — quaternion; все формы поддерживают вращение в режиме `manual`.
- `softness` — мягкость края; по умолчанию 1.2, соответствует прототипу.
- `strength` — степень очистки 0…1. Для плавного появления изменяйте её в своём цикле.
- `enabled = false` отключает область.
- До 128 областей на экземпляр; фактический лимит `clouds.maxAreas` зависит от GPU. Опция `maxAreas` ограничивает резерв шейдера.

```js
clearing.setOptions({ radius: 6, softness: 1.6 });
clearing.position.set(2, 3, 5);
clouds.removeArea(clearing);
clouds.clearAreas();
```

## Привязка к объектам

```js
const clearing = clouds.addArea({ radius: 4 }).attach(myObject3D);
clearing.detach(); // сохраняет мировой центр и поворот
```

Центр привязанной области совпадает с центром мировых bounds объекта. `position` привязанной области — дополнительное смещение в ориентированных осях объекта (в мировых единицах). Поворот объекта учитывается. Радиусы области самостоятельные и не масштабируются автоматически вместе с моделью. Удаление модели из сцены не удаляет область: вызывайте `detach()` или `removeArea()`.

## Настройки облаков и пресеты

```js
clouds.setSettings({ density: 0.7, cloudScale: 24, detail: 1 });
const preset = clouds.getSettings();
localStorage.setItem('my-clouds', JSON.stringify(preset));
clouds.setSettings(JSON.parse(localStorage.getItem('my-clouds')));
```

Доступные настройки: `speed`, `base`, `thickness`, `density`, `relief`, `detail`, `cloudScale`, `fogTint`, `shadowTint`, `steps` (8…96), `resolutionScale` (0.1…1), `cameraClear`. Цвета задаются строками `#RRGGBB`. `cameraClear` мягко продолжает области к камере вдоль лучей обзора.

`getSettings()` возвращает копию настроек. Хранение и интерфейс пресетов реализует приложение. Настройки областей в этот снимок не входят.

## Границы, разрешение и ресурсы

```js
const clouds = new VolumetricClouds(renderer, {
  bounds: new THREE.Box3(new THREE.Vector3(-64, -8, -64), new THREE.Vector3(64, 24, 64)),
  maskResolution: [128, 96, 128],
  lightDirection: [-0.5, 1, 0.3],
  // cloudTexture: ваша необязательная 2D-текстура оттенка
});
```

`bounds` задают мировую область маски и горизонтальные границы облаков. Вся высота слоя (`base`…`base + thickness`) должна помещаться внутри Y этих границ. Границы и разрешение маски фиксируются при создании экземпляра. Каждая область вне границ маски не очищает туман внутри, если её геометрия туда не доходит.

По умолчанию используются процедурный периодический 3D-шум и белая текстура оттенка. Внешние игровые текстуры и сетевые запросы не нужны. Если передан `cloudTexture`, его жизненный цикл принадлежит приложению; библиотека его не освобождает. Внутренние текстуры, материалы, геометрия и render targets освобождаются в `dispose()`.

Размер внутренних render targets автоматически соответствует drawing buffer вашего renderer, с учётом `resolutionScale` для тумана. Обычный resize renderer/camera остаётся в приложении.

## Куллинг и диагностика

В GPU-расчёт прозрачности перед камерой передаются только области, чьи полные bounds с мягким краем пересекают фрустум. CPU-маска дополнительно сохраняет запас 4 мировые единицы для освещения и интерполяции. При изменении видимого набора, формы, положения, ориентации, силы или слоя маска перестраивается. Положение и bounds всех областей всё равно проверяются: без этой дешёвой проверки невозможно определить вход во фрустум.

`clouds.stats`: `areas`, `visibleAreas`, `maskAreas`, `maskUpdated`, `maskUpdateMs`, `fogWidth`, `fogHeight`. `maskUpdateMs` измеряет CPU, а не GPU. Библиотека не управляет куллингом чужих визуальных объектов: стандартный mesh frustum culling выполняет Three.js.

## Ограничения интеграции

Проверено с обычными PerspectiveCamera и OrthographicCamera, стандартной depth texture и WebGLRenderer r180. WebGPU, XR, logarithmic/reversed depth и произвольная цепочка EffectComposer пока не поддерживаются. Прозрачные материалы без записи depth не блокируют туман так же, как непрозрачные поверхности. Это полноэкранный проход с raymarching, а не mesh-облако.

`render(scene, camera, dt, outputTarget)` может записать композицию в переданный render target. Предыдущее состояние target, clear color, autoClear, viewport и scissor восстанавливается. Вывод в экран стандартен; для сложного postprocessing потребуется отдельный адаптер pass.

## Проверка в исходном проекте

```sh
npm test --prefix packages/volumetric-clouds
npm run dev -- --port 5179
```

Откройте `/examples/library.html`: независимый пример импортирует только пакет и Three.js. Визуальные контуры форм принадлежат примеру, а не библиотеке. Основной прототип остаётся отдельно для сравнения; его редактор объектов и пресеты не включены в npm-пакет.

## 0.2.0 — общие маски, цвет, локальный свет и пресеты

Прежний VolumetricClouds сохранён. Новый MaskFieldClouds принимает те же параметры и effects; не создаёт землю, объекты, интерфейс или цикл анимации.

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

- addTint(options) возвращает TintArea: формы, поворот и привязка как у ClearArea плюс color (THREE.Color). Есть removeTint / clearTints. Цвет областей смешивается взвешенным средним в линейном пространстве, сила — максимумом. Шейдер умножает цвет облаков на оттенок с коэффициентом смешивания 0.82.
- addLight(options) возвращает FogLight: position (Vector3), color (THREE.Color), radius > 0, intensity >= 0, enabled. Есть setOptions, removeLight / clearLights. Анимацией управляет приложение. Библиотека не нормализует суммарную энергию; это делает только демо при выборе количества света.
- setEffects({clearing, tint, lights, lightMode, lightRefreshHz}) / getEffects(). Булевы параметры по умолчанию true. lightMode: 'atlas' (по умолчанию) или 'direct'. lightRefreshHz: 0 (каждый кадр с изменениями), 15 или 30 Гц. Неподвижный свет повторно не считается. При низкой частоте свет может отставать.
- setPreset(name) на обоих классах: speed — 32 шага / 40%; balance — 48 / 50%; quality — 64 / 65%; ultra — 96 / 100%. CLOUD_PRESETS экспортирует эти настройки. MaskFieldClouds также выбирает атлас с обновлением каждый изменившийся кадр. Остальные настройки сохраняются. Для своих значений сохраняйте getSettings() и getEffects() отдельно. Комбинация Balance — рекомендуемый компромисс, отдельно не измерялась.

До 128 областей очистки, 128 цветовых областей и 32 источников. Формы очистки/цвета: цилиндр, сфера, эллипсоид, бокс. Очистка объединяется максимумом в R8 3D-текстуре. Маски перестраиваются при изменении областей; консервативный набор очистки также зависит от видимости. Анимированные области очистки/цвета требуют CPU-перестроения. Свет отсекается по фрустуму и границам облаков. Атлас света — фиксированная сетка 64×24×64; maskResolution отдельно задаёт сетку очистки и цвета.

Локальный свет приближённый, с квадратом радиального затухания, без локальных теней. Направленное самозатенение облаков сохранено. Атлас RGBA8 ограничивает яркость значением 16 на канал; превышение обрезается. Ограничивайте суммарную энергию либо используйте direct. Интерполяция/квантизация отличаются от прямого расчёта. Очистка до камеры использует выборку маски на шаг и обратное накопление максимума; очень тонкие области могут пропускаться при малом числе шагов.

Статистика дополнена tintAreas, tintUpdated, tintUpdateMs, lights, visibleLights, lightFieldUpdated. Ресурсы принадлежат экземпляру; dispose() можно вызывать повторно. Правила владения внешней cloudTexture не изменены. Пакету не нужны внешние ресурсы и код демо.
