# Wijayakusuma 3D Map

An offline 3D map of Kawasan Industri Wijayakusuma with point-to-point directions. It works on phones and desktops.

- Choose a start and destination from the list, by tapping a building, or by tapping anywhere on the map.
- You get the route on the roads, the time and distance for driving or walking, turn-by-turn steps, and an animated preview.
- It has no external dependencies: Three.js is bundled into `app.js`. Once you've opened it over http(s), it keeps working offline and can be installed to the home screen.

## Run locally

```bash
python -m http.server 8020
```

Then open http://localhost:8020. Opening `index.html` directly from disk also works, but offline caching won't.

## Edit the map

All lots, roads and gates are in [`site-data.js`](site-data.js), traced from the estate site plan. To show a company name, fill in a lot's `tenant`. You don't need to rebuild after editing it.

## Change the code

```bash
bun install
bun run build   # bundles src/main.js into app.js
```
