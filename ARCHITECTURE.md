# Architecture

Vanilla JS, no framework. `app.js` runs once at the bottom of `<body>`, builds state, and defines render functions that write HTML strings into containers in `index.html`.

## Boot order (top to bottom of app.js)
1. **Static data**: `TH` (52 weekly themes, each `[name, tagline, emblemIndex]`), `PIL` / `ENC` / `MAL` (52 cards each, `[title, task]`), `ICONS`, reflection question pool `QP`.
2. **State load**: `S = Object.assign({}, DEF, JSON.parse(localStorage["relic-v2"]))`. `U0 = S._u` is captured before any save so cloud sync can compare timestamps.
3. **Persistence**: `save()` stamps `S._u`, writes localStorage, refreshes the corner badge, and schedules a debounced cloud push.
4. **Week logic**: weeks run Sunday to Saturday. `S.cur` is the Sunday (ISO date) of the week being shown. It advances automatically on Sunday at 10pm (or after Sunday), or manually through the New Week button once the reflection is done. `base` = week number, `key = String(base)` keys most per-week data, `wk = base + S.draws[base]` re-rolls cards and theme when "Draw New Week" is pressed.
5. **Normalization**: fills defaults, merges custom deck cards (`S.deck`) into the built-in arrays, computes `thI` (current theme index), `Q` (this week's five reflection questions).
6. **Render functions**: `banner()`, `week()`, `ledger()`, `folder()` (Ledger list view), `cards()`, `bank()`, `reliquary()`, `daily()`, `hearth()`, `mood()`, `egg()`, `life()`, `wish()`, `deck()`, `skills()`, `dream()`, `archive()`, `snap()`, `journal()`, `reflection()`, `hourglass()`, `badge()`, `star()`.
7. **Navigation**: `show(view)` toggles `.view` sections and highlights `.nav`; each render function above is called on entry.
8. **Init line** at the end calls the renderers, `fit()`, `sideInit()`, `cloud()` and starts a 60s interval (auto week change, star pulse, hourglass).

## Key mechanics
- **Gold**: `award(id, title, gold, quiet)` / `refund(id)` write to `S.log` and the counters `S.gold.total` and `S.gold.wk[key]`. Monthly gold is derived from `S.log` (`mGold()`).
- **Ledger ranking**: `rk()`/`cmpT()` sort by done, starred, skull (red then blue), gold. Dashboard shows the top three.
- **Life Force**: `decay()` runs at load and applies catch-up damage per day (blue skull 1/day on the ledger, red skull 10 once after its due date) into `S.hp.log`. `hpNow()` = 100 minus this month's damage.
- **Cards**: this week's draw is stored in `S.drawn[key]` so adding deck cards never changes the current week. One reroll per week (`S.rr`), completion pays 20 gold, or 10/20/30 for Easy/Medium/Legendary maladies (`mReward()`).
- **Sidebar**: fixed-size column sized from the Home screen height (`fit()`, `SH`), collapsible via the top medallion.
- **iPad fit**: `fit()` applies `document.documentElement.style.zoom` in portrait at 700px width or more, using the measured Home height.
- **Cloud sync**: `cloud()` uses the Claude artifact runtime to store `{u, s}` (timestamp and a JSON string of the state, minus local-only media) at `data/users/<uid>/relic`. If the remote copy is newer than the local copy at load, it is written to localStorage and the page reloads once. To port, replace `cloud()`, `push()`, `cloudSave()` and `migrate()` with calls to your own API; nothing else depends on them.

## Styling
CSS custom properties on `:root` (`--paper`, `--ink`, `--plum`, `--sky`, `--skr`, `--skb`, ...) with a dark variant under `prefers-color-scheme` and `[data-theme]`. Layout is a two-column grid (`.app`: sidebar + `main`).
