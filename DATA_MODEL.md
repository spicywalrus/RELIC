# Data model

Everything is one JSON object saved at `localStorage["relic-v2"]`. Week-scoped fields are keyed by `key`, the week number as a string (Sunday-based). Dates are ISO strings `YYYY-MM-DD`.

| Field | Shape |
| --- | --- |
| `_u` | Last-saved timestamp (ms), used for sync |
| `cur` | ISO date of the Sunday of the displayed week |
| `draws` | `{ [weekKey]: rerollCount }` for Draw New Week |
| `ledger` | `[{ id, t, d, dt, dd, s, df, g, sk, due, cr }]` task, done, done date text, done ISO, starred, difficulty `e/m/h/""`, gold, skull `""/"r"/"b"`, due date, created ISO |
| `trash` | Deleted ledger tasks (last 30), same shape plus `gone` |
| `gold` | `{ total, wk: { [weekKey]: n } }` |
| `log` | `[{ id, t, g, dt, k, m, q, c }]` earnings log (k week, m month, q hidden from lists, c cleared from the bank list) |
| `goalM`, `prize`, `bought`, `buys`, `wish` | Monthly goal (default 500), prize per month, shop purchase flags, purchase log, wishlist `[{ id, t, won }]` |
| `hp` | `{ last, log: [{ d, n, t, c }] }` health damage events |
| `daily` | `{ items: [{ id, t }], done: { [iso]: [ids] } }` |
| `hearth`, `hwho`, `hadd`, `chores`, `hhide` | Weekday assignment per chore key, assignee `A`/`H`, auto-add flags, custom chores, hidden built-ins |
| `mood`, `mnote` | `{ [iso]: 1..10 }`, `{ [iso]: reason }` |
| `songs` | `[{ id, t, p (0..4 stage), au (file name), al (link) }]`, audio blobs live in IndexedDB |
| `relics` | `[{ text, img, imgId, aud, link, date, k, l }]` |
| `refl` | `{ [weekKey]: { label, a: [answers], qs: [questions], song: { t, a, l }, done } }` |
| `drawn` | `{ [weekKey]: { label, w, th, n: [pilgrimage, encounter, malady] } }` |
| `cdone`, `rr`, `tov` | Card completions, reroll used per week, manual theme override |
| `deck` | `{ th, pil, enc, mal }` custom cards appended to the built-ins |
| `skills`, `focus`, `ideas` | Skill tree, monthly focus `{ m, id, rs }`, dreamcatcher notes |
| `days` | Outlook dot marks per weekday |
| `seen`, `hgk`, `sideOpen`, `ay`, `starInit`, `goal`, `offset`, `prize` | Small UI flags |

IndexedDB: database `relic-media`, store `m`, key `song<songId>` holding the audio Blob.
