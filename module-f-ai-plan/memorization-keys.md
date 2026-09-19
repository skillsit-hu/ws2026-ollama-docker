# SwapLoop Module F — competition memory card

## Prompt grammar

**Artifact / Context / Must / Forbid / Output**

```text
[One artifact]. Context: [local facts]. Must: [checks]. Forbid: [failures]. Output raw [HTML/CSS] only.
```

Retry:

```text
Correct only this failed constraint: [failure]. Keep passing work. Raw artifact only.
```

## AI control loop

**Calibrate → prioritize → generate → verify → retry once or fall back**

- one artifact
- one paste target
- one total time cap
- one narrow retry inside the cap
- preserve the last working file
- two failed AI tasks: reassess all remaining calls

## Day-of model route — finish by 00:08

Probe both:

1. exact text + exactly three elements + raw code
2. mobile/tablet/desktop layout
3. tiny CSS-only checked-state behavior

Write:

- Markup/content model: `________`
- CSS/behavior model: `________`
- Manual-only task types: `________`

Tailwind rule: use only the supplied CSS-only workflow. **Never add a Tailwind CDN script.**

## Clock

- `00:08` models routed
- `00:25` shell + nav work
- `00:48` MVP: Home + five linked shells
- `01:10` How complete
- `01:43` Stations complete
- `02:04` Riders complete
- `02:27` Fleets complete
- `02:33` stop AI/polish
- `03:00` verified and submitted

Never borrow the final 27 minutes.

## Route keys

1. `shared home shell`
2. `chrome behavior CSS`
3. human duplicate four shells
4. `home exact sections`
5. `how content`
6. `timeline CSS`
7. `station type tabs`
8. `three exact stations`
9. `tabs and overlap CSS`
10. `riders exact content`
11. `sticky prices CSS`
12. `fleets exact content`
13. `motion focus polish` only before 02:33

For exact-content prompts, paste the relevant copy-deck subsection after the prompt. The deck is the source of truth.

## AI versus human

**AI first:** isolated shells, sections, repeated cards/tables, bounded CSS blocks.

**Human owns:** Tailwind setup, exact values, file duplication, metadata, current nav, integration, tests, final links, submission.

## Hard brief rules

1. Exactly five linked pages.
2. HTML + CSS only: no scripts, `onclick`, APIs, payment, or reservations.
3. Exact deck wording, prices, names, hours, types, codes, paths, and alt text.
4. No live counts or “available now.”
5. Breakpoints: below 768 / 768–1023 / 1024+.
6. Sticky header; CSS-only tabs; vertical-to-horizontal timeline; desktop station overlap; desktop sticky prices.
7. Skip link, one h1, landmarks, focus, exact metadata, reduced motion.

## Abort cues

- `One artifact. Raw code only.`
- `Correct only this failed constraint: …`
- `Cap reached — keep working version, go manual.`
- `Two failures — reassess remaining AI.`
- `Behind clock — simple stacked MVP.`
- `02:33 — no new generation.`

## MVP recovery

1. Keep the last working files.
2. Ensure all five pages exist and link.
3. Duplicate shared chrome; set current nav/title/meta/h1.
4. Use simple stacked sections.
5. Paste exact copy/data directly.
6. Add only required hard CSS that is already rehearsed.
7. Protect final checks.

Drop first: video, map, coming soon, example partners, decorative overlap, extra animation.

## Final 27 — `FILES`

- **F**ive files and links
- **I**dentical required copy/data
- **L**ayout at 375 / 800 / 1100
- **E**xperience: keyboard, focus, tabs, reduced motion
- **S**cripts absent; submit from correct path
