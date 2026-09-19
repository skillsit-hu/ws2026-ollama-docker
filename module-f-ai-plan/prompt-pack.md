# SwapLoop Module F — AI accelerator benchmark

## Current decision

**No AI booster is proven yet.**

The competitor is an expert who may implement every candidate faster with Emmet, snippets, duplication, multicursor, and direct copy/paste. No manual baseline or complete AI timing series exists, so no saving may be claimed.

Known evidence rejects selector-dependent CSS generation. Everything else below is an **unmeasured benchmark candidate**, not a competition execution route.

Current competition strategy:

```text
Implement manually. Do not open Ollama unless this pack is updated with a measured winner.
```

## Fixed facts

- Brief: `D:\dev\04_skillsit\other-skill-competitions\sitc2026\sitc2026-s17-competitor\module-f.md`
- Copy deck: `assets/module-f/texts/copy-deck.md` during preparation
- Duration: 3 hours
- Technology: HTML and CSS only; no JavaScript
- Pages: Home, How it works, Stations, For riders, For fleets
- Breakpoints: below 768px, 768–1023px, 1024px and above
- Competitor: confident expert with extreme implementation speed

Confirm competition asset paths before testing.

## Acceptance threshold

Promote a candidate only when all pass:

1. Three manual and three AI runs use the same starting state.
2. All AI runs pass without another prompt.
3. Median AI total saves at least 30 seconds.
4. Median AI total is at most 80% of manual median.
5. Slowest AI run is no slower than manual median.
6. Verification takes about ten seconds or less.
7. Integration is one paste with no broad cleanup.
8. Total expected saving repays fingerprinting plus a 30-second safety margin.

AI total includes prompt construction, inference, copy, paste, integration, verification, and recovery. Missing evidence means **Unmeasured**.

## Benchmark procedure

Manual:

1. Reset the exact starting file.
2. Use the competitor's fastest normal tools.
3. Time from source selection to verified completion.
4. Repeat three times.

AI:

```text
/set nothink
```

1. Use `/clear` between candidates.
2. Time from kernel recall to verified integration.
3. Include failed runs and manual recovery.
4. Repeat three times per exact model tag.
5. Reject any candidate requiring a corrective prompt.

## Existing evidence

### Basic markup

A model produced the exact heading and exactly three `article.station-type` elements.

Status: **Unmeasured** — model tag and complete timings were not recorded.

### Responsive Tailwind grid

A model produced exactly three cards with `grid-cols-1`, `md:grid-cols-2`, and `lg:grid-cols-3`.

Status: **Unmeasured** — model tag, Tailwind build, and complete timings were not recorded.

### CSS-only tabs

Qwen3.5 4B failed initial and fully specified tests, even with thinking disabled:

- hid the panel wrapper
- treated nested panels as siblings
- removed radios from keyboard focus
- generated invalid focus selectors

Gemma 4 also failed:

- invented a third panel
- ignored supplied IDs in favor of `nth-child()`
- failed radio-to-label focus
- emitted a forbidden comment

Status: **Rejected**. Do not test selector-dependent CSS during competition.

## Candidate 1 — shared HTML shell

- **Status:** Unmeasured
- **Starting state:** empty `index.html`
- **Manual route:** expert boilerplate/Emmet workflow
- **Paste target:** entire `index.html`

Kernel:

```text
Build one index.html shell from DATA: exact head, landmarks, five-link nav, empty #main and footer. Preserve strings/paths. Link css/index.css. No JS. Raw HTML only. DATA:
```

Payload:

```text
TITLE: SwapLoop — Charge or swap safely outside the home
META: SwapLoop helps Shanghai communities charge or swap e-bike batteries safely outside the home — pay-as-you-go for riders, Partner plans for delivery fleets.
FAVICON: assets/images/favicon.svg
OG IMAGE: assets/images/og-default.jpg
LOGO: assets/images/logo-swaploop.svg
SKIP: Skip to main content -> #main
NAV: Home -> index.html; How it works -> how-it-works.html; Stations -> stations.html; For riders -> for-riders.html; For fleets -> for-fleets.html
CURRENT: Home
FOOTER: SwapLoop — fictional Shanghai district pilot for outdoor e-bike energy.
FOOTER: Live availability and reservations are in the SwapLoop rider app.
```

Ten-second check: no script; five links; exact title/meta; skip link; empty main; logo; two footer lines.

Measurements: manual runs **Not measured**; AI runs **Not measured**; net gain **Unknown**.

## Candidate 2 — three station cards

- **Status:** Unmeasured
- **Starting state:** empty featured-stations container
- **Manual route:** Emmet one card, duplicate twice, multicursor values
- **Paste target:** featured-stations container

Kernel:

```text
Expand DATA into exactly 3 article.station-card elements: h2, type badge, address, hours, audience, img with exact alt. Preserve values/order. Raw HTML only. DATA:
```

Payload:

```text
Haitang Garden East Gate | HYBRID | 88 Haitang Community Road | 00:00–24:00 | Residents who need both swap and charge at the community gate | assets/images/station-haitang.jpg | Hybrid SwapLoop station at a community east gate with battery slots and e-bike charging bays.
Canal View Delivery Hub | SWAP | 16 Canal View Road | 05:00–23:30 | Delivery riders exchanging packs at scale | assets/images/station-canal-view.jpg | Delivery-hub battery swap cabinet beside a service road with cargo e-bikes.
Morning Bridge Charging Court | CHARGING | 5 Morning Bridge Lane | 06:00–22:00 | Integrated-battery e-bikes using monitored bays | assets/images/station-morning-bridge.jpg | Open-air charging court with e-bikes parked in monitored charging bays.
```

Ten-second check: exactly three cards; names, types, hours, image paths; no live availability.

Measurements: manual runs **Not measured**; AI runs **Not measured**; net gain **Unknown**.

## Candidate 3A — PAYG rows

- **Status:** Unmeasured
- **Starting state:** empty table body
- **Manual route:** one Emmet row duplicated four times
- **Paste target:** PAYG `<tbody>`

Kernel:

```text
Convert DATA into exactly 4 tr rows with service, code and price td cells. Preserve values/order. No classes or extra text. Raw HTML only. DATA:
```

Payload:

```text
Battery swap | SL-48 | ¥5
Battery swap | SL-60 | ¥7
E-bike bay charge | GB-AC-48 | ¥3
E-bike bay charge | GB-AC-60 | ¥4
```

Ten-second check: four rows and exact code/price pairs.

Measurements: manual runs **Not measured**; AI runs **Not measured**; net gain **Unknown**.

## Candidate 3B — fleet blocks

- **Status:** Unmeasured
- **Starting state:** empty fleet-plan container
- **Manual route:** two duplicated cards plus one table
- **Paste target:** fleet-plan container

Kernel:

```text
Expand DATA into 2 article.plan-card elements and one discount table. Preserve every name, amount, range and sentence. Raw HTML only. DATA:
```

Payload:

```text
Partner starter | monthly ¥2,000 | 150 uses/month | overage ¥6/use
Starter overage discounts | 0–199: 0% | 200–399: 5% | 400+: 15%
Partner fleet | monthly ¥5,000 | 400 uses/month | overage ¥5/use
Fleet overage discounts | 0–499: 0% | 500–999: 10% | 1000+: 20%
Priority: 11:00–14:00 and 17:00–20:00 — a reserved share of capacity is offered to that partner’s riders first. Priority never bypasses compatibility or safety checks.
Funding: A fixed district safety grant helps start stations; partner co-funding and subscriptions reduce long-term grant dependence. This is not a tax and not a personal or business score.
Contact: Talk to SwapLoop — partners@swaploop.example
```

Ten-second check: two cards; every price/quota/overage; six discount ranges; priority hours; contact.

Measurements: manual runs **Not measured**; AI runs **Not measured**; net gain **Unknown**.

## Candidate 4 — Home copy wrapper

- **Status:** Unmeasured
- **Starting state:** empty Home `#main`
- **Manual route:** expert semantic markup with copied text
- **Paste target:** Home `#main`

Kernel:

```text
Wrap DATA as one Home main block: hero, why section, 3-step ol and featured station. Preserve all text. Use supplied links/images. Raw HTML only. DATA:
```

Payload:

```text
HERO | SwapLoop | Charge or swap — safely outside the home. | Safer outdoor energy for compatible e-bikes across residential communities and delivery hotspots. | For riders -> for-riders.html | For fleets -> for-fleets.html | assets/images/hero-home.jpg
HERO ALT | Outdoor SwapLoop battery cabinet beside a Shanghai residential community gate at dusk, with an e-bike nearby.
WHY | Indoor charging of e-bikes and batteries is restricted in Shanghai. SwapLoop gives communities a compliant outdoor alternative — Battery Swap Cabinets for compatible removable packs, and E-bike Charging Bays for integrated batteries.
STEPS | Find a nearby SwapLoop Station | Reserve in the rider app | Swap a ready pack — or charge in a bay and collect | How it works -> how-it-works.html
FEATURED | Haitang Garden East Gate (HYBRID) — swap and charge at the community gate. Open 00:00–24:00. | assets/images/station-haitang.jpg | Stations -> stations.html
```

Ten-second check: one h1; three steps; two hero links; both images; no changed text.

If exact-copy verification exceeds ten seconds, reject this candidate.

Measurements: manual runs **Not measured**; AI runs **Not measured**; net gain **Unknown**.

## Candidate 5 — decorative SVG

- **Status:** Unmeasured
- **Starting state:** no decorative hero background
- **Manual route:** competitor's normal CSS/SVG decoration
- **Paste target:** isolated decorative SVG

Kernel:

```text
Create one decorative 1600x900 dark-zinc SVG with subtle cyan cabinet-grid lines. No text, scripts, external assets or animation. Keep under 45 lines. Raw SVG only.
```

Ten-second check: renders; no text/script/external URL; does not replace required content.

Measurements: manual runs **Not measured**; AI runs **Not measured**; net gain **Unknown**.

## Rejected task families

- **Accessible tabs:** Qwen3.5 and Gemma 4 failed selector/focus contracts.
- **Checkbox navigation CSS:** same selector and focus failure class.
- **Timeline, overlap, sticky CSS:** depends on exact DOM and parent layout.
- **Full pages:** exact copy, assets, integration, and review create hidden cost.
- **Small metadata/navigation edits:** snippets, duplication, and multicursor should win.
- **Repository audit:** the CLI model cannot inspect the working project.

## Proven boosters

None.

Do not move a candidate here until all measurements pass the acceptance threshold.

Retained format:

```text
KEY:
TRIGGER:
MODEL TAG:
KERNEL:
PAYLOAD SOURCE:
PASTE TARGET:
TEN-SECOND CHECK:
MANUAL MEDIAN:
AI MEDIAN:
MEASURED SAVING:
IMMEDIATE FALLBACK:
```

## Competition card — current

```text
PROVEN BOOSTERS: none
DECISION: implement manually
DO NOT fingerprint models or open Ollama without a measured winner
CSS TABS/NAV/STICKY/OVERLAP: manual only
```

This zero-booster result is intentional. AI availability is not itself a competitive advantage.
