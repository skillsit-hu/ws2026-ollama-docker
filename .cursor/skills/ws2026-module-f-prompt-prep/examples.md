# Accelerator benchmark examples

These examples are fictional. Their timings demonstrate classification; they are not evidence for the real competitor or competition models.

## Example 1 — proven data expander

### Candidate

Convert six copied product records into repetitive semantic cards.

Starting state:

- empty `<section id="products">`
- data already present in a brief
- each card requires `article.product-card`, `h2`, category badge, price, and image

### Manual baseline

The expert uses Emmet, duplicates the first card, and edits values.

- run 1: 110 seconds
- run 2: 102 seconds
- run 3: 106 seconds
- fastest: 102 seconds
- median: 106 seconds

### Kernel

```text
Expand DATA into exactly 6 article.product-card elements: h2, badge, price, img. Preserve values and order. Raw HTML only. DATA: [paste]
```

### AI trials — fictional Model A

Totals include kernel entry, data copy, inference, paste, and verification.

- trial 1: 54 seconds, first-pass
- trial 2: 57 seconds, first-pass
- trial 3: 52 seconds, first-pass
- median: 54 seconds
- slowest: 57 seconds
- verification: 8 seconds within each total
- corrective prompting: none

### Classification

- median net gain: 52 seconds
- AI median: 51% of manual median
- slowest AI trial: faster than manual median
- status: **Proven accelerator for fictional Model A**

### Retained booster

- **Key:** six product cards
- **Trigger:** six or more uniform records with the exact five-field contract
- **Payload source:** copy records directly from the brief
- **Paste target:** inside `#products`
- **Ten-second check:** six articles; headings, prices, and image paths match
- **Measured saving:** 52 seconds median
- **Fallback:** discard output and use Emmet duplication immediately

## Example 2 — rejected expert-fast task

### Candidate

Generate a three-item navigation list.

### Manual baseline

- runs: 12, 10, 11 seconds
- median: 11 seconds

### AI trials

- totals: 24, 22, 25 seconds
- all outputs correct

### Classification

Correct output does not imply advantage.

- median net gain: -13 seconds
- status: **Rejected — Emmet is faster**

Do not retain the prompt or revisit this use case during competition.

## Example 3 — rejected CSS reasoning

### Candidate

Generate accessible CSS-only radio tabs from a DOM contract.

### Kernel

```text
Show #panel-a or #panel-b from checked sibling radios. Focused radios outline matching labels. Raw CSS only.
```

### Trials

- one model hid the panel wrapper and targeted nested panels as direct siblings
- another used `nth-child`, invented a third panel, and failed radio-to-label focus
- corrections required longer selector explanations

### Classification

- first-pass reliability: failed
- verification requires behavior and keyboard checks
- corrective prompting required
- status: **Rejected — reasoning and repair cost**

Use the competitor's rehearsed selector pattern manually.

## Example 4 — unmeasured decorative generator

### Candidate

Generate an isolated SVG or CSS background pattern for a hero.

### Kernel

```text
Create one decorative zinc/cyan SVG grid background, 1600x900, no text or scripts. Raw SVG only.
```

### Available evidence

- output boundary is isolated
- visual verification is fast
- no manual timing exists
- no repeated AI trials exist

### Classification

- status: **Unmeasured**

It may stay in the benchmark workbook but must not appear on the competition card.

## Example 5 — model fingerprint economics

Two boosters were proven during preparation:

- card expander saves 52 seconds and is expected once
- comparison-table expander saves 44 seconds and is expected once

Expected gross saving: 96 seconds.

If day-of fingerprinting and model switching cost 80 seconds, only 16 seconds remain. That does not meet the 30-second safety margin, so the correct decision is **no AI**.

If fingerprinting costs 35 seconds, 61 seconds remain. The boosters may be activated if the revealed model passes their exact fingerprint.

## Example competition card

Only proven boosters appear:

```text
THINKING OFF: /set nothink
SIX CARDS → Model A → brief records → #products → check count/data → saves 52s
COMPARE TABLE → Model A → copied rows → #comparison → check rows/codes → saves 44s
ANY DIFFERENCE → discard and finish manually; no retry
```

Rejected and unmeasured candidates do not appear on this card.
