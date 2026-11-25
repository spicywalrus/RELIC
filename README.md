# Relic

A themed personal planner built as a static web app: one HTML page, one stylesheet, one JavaScript file, no build step, no dependencies.
This folder is an exact export of the app as it ran when it was published as a Claude artifact (https://claude.ai/artifact/HGxNWJkTBKeymwV49QKrN4). Nothing was redesigned, simplified or removed. The original single-file build is kept in `reference/relic-single-file.html`; splitting it into `index.html`, `styles.css` and `app.js` was verified to reassemble byte for byte into that file.

## Run it

```
npm start            # or: python3 -m http.server 8080
```
Then open http://localhost:8080. It also works by opening `index.html` directly, but serving it over http is recommended (IndexedDB and fonts behave better).

## Files

| Path | What it is |
| --- | --- |
| `index.html` | Markup: sidebar, every view (`#v-home`, `#v-daily`, ...), inline SVG symbol library, dialog element |
| `styles.css` | All styling, theme tokens, light/dark mode, responsive and iPad-fit rules |
| `app.js` | All logic: state, rendering, persistence, cloud sync hook |
| `reference/relic-single-file.html` | The original single-file build, unchanged |
| `docs/ARCHITECTURE.md` | How the code is organized |
| `docs/DATA_MODEL.md` | Shape of the saved state and storage keys |
| `docs/FEATURES.md` | Every feature and rule, tab by tab |
| `package.json` | Convenience scripts only |

## Assets

There are no separate image, audio or font files. Every illustration and icon (banner animals, card art, hourglass, heart, sidebar icons, chore icons, reward icons, skull and egg glyphs) is inline SVG, defined in `index.html` (`<symbol>` library) or built in `app.js` template strings. Typography comes from Google Fonts (Cinzel and IM Fell English) via a `<link>` in `index.html`; with no network the app falls back to Georgia/serif.

## Persistence and offline

- **Main state** is one JSON object in `localStorage` under the key `relic-v2`.
- **Egg Thief audio versions** are stored as Blobs in IndexedDB (database `relic-media`, object store `m`, key `song<id>`), on the device only.
- **Reliquary** photos are resized to ~360px JPEG data URLs in the state, or uploaded to the Claude artifact assets store when that runtime is present. Reliquary audio clips (about 1 MB max) are data URLs in the state.
- **Account sync** (`cloud()` in `app.js`) only activates inside the Claude artifact runtime, which provides a global `claude` object (`claude.use("db" | "user" | "assets")`). Outside Claude that object does not exist, the call is caught, and the app runs purely on localStorage and IndexedDB. See `docs/ARCHITECTURE.md` if you want to replace it with your own backend.
- **Offline:** after the first load the app works offline apart from the Google Fonts. There is **no service worker** and no web manifest in the original app, so there were none to export. If you want an installable offline app, adding a service worker that caches `index.html`, `styles.css`, `app.js` and the two font files is a straightforward next step.

## Your own data

Your tasks, photos and notes live in your browser storage or Claude account, not in this folder, so they are not included. To move data between browsers, run in the old app's console `copy(localStorage.getItem("relic-v2"))`, then in the new one `localStorage.setItem("relic-v2", <pasted string>)` and reload. Egg Thief audio files must be re-added, since they live in IndexedDB.

## Known limitations carried over exactly

- Week boundaries and the 5am/10pm Sunday rules are evaluated when the app loads (plus a one-minute timer), not by a background process.
- The home screen scales itself to fit portrait tablets using the CSS `zoom` property, so it needs a browser that supports it (Safari, Chrome, recent Firefox).
- Everything is a single global state object `S` with a single `save()`; there is no module system or framework.
