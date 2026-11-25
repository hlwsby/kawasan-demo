# Driyorejo 3D Map

An offline 3D map of the Driyorejo industrial area. It gives point-to-point directions and tracks your live GPS position. It works on phones and desktops.

- **Directions:** choose a start and destination from the list, by tapping a building, or by tapping anywhere on the map. You get the route on the roads, the time and distance for driving or walking, turn-by-turn steps, and an animated preview.
- **"Your location":** uses the phone's GPS, which works without internet. It shows a blue dot, follows you, re-plans the route as you move, and shows the next turn at the top of the screen.
- **Offline:** once opened over https (GitHub Pages), it keeps working with no mobile data and can be installed to the home screen. Location only works over https.

## Data

- **Roads, canals and village houses:** OpenStreetMap (© OpenStreetMap contributors, ODbL), stored in `tools/osm.json`.
- **Estate buildings and company names:** traced from a map screenshot, in [`tools/traced.js`](tools/traced.js). Their outlines are approximate.
- **Wings sites:** placed from their real GPS coordinates.

`site-data.js` is generated. To change buildings or names, edit `tools/traced.js`, then:

```bash
bun run data    # rebuilds site-data.js and writes tools/check.svg (an alignment overlay)
```

## Run locally

```bash
python -m http.server 8030
```

## Change the code

```bash
bun install
bun run build   # bundles src/main.js into app.js
```
