---
name: ws2026-module-f-prompt-prep
description: >-
  Finds and validates benchmark-proven Ollama accelerators for an expert
  WorldSkills Module F competitor. Use when comparing local-model generation
  against fast manual implementation, timing candidate boilerplate use cases,
  or preparing a small set of reliable competition prompt kernels.
disable-model-invocation: true
---

# WorldSkills Module F AI Accelerator

Find the few cases where a small local model is measurably faster than this specific expert competitor.

Do not create a page-by-page AI implementation plan. The competitor already implements the task quickly and confidently. Treat Ollama as a **stochastic macro expander** whose only value is verified net time saved.

Default to manual implementation. Promote a prompt to competition use only after it wins the complete timed comparison.

Use this workflow:

**baseline → discover → benchmark → retain or reject → rehearse**

Read [risk-controls.md](risk-controls.md) before classifying results. Use [examples.md](examples.md) for the benchmark and booster formats.

## Operating constraints

- AI is available only in Module F through the Ollama CLI.
- Two small local models are revealed during the module.
- There is no IDE agent, file access, tool use, or automatic multi-file editing.
- The competitor manually enters a prompt, waits, pastes, verifies, and repairs.
- Model switching and thinking output consume competition time.
- Tailwind or another framework may be used only through the workflow allowed by the brief.
- A visually plausible output is not an accelerator unless it is faster end to end.

## Inputs

Require:

- task brief
- competitor description confirming expert manual ability

Use when available:

- tests, marking scheme, exact copy, assets, and starter files
- competitor timings for representative manual tasks
- Emmet, snippets, multicursor, and copy/paste techniques used manually
- available model names and measured output speed
- previous candidate outputs and observed failures

If manual timings are missing, create benchmark trials but classify every candidate as **unmeasured**. Never invent a saving.

## 1. Establish manual baselines

Choose exact, bounded task slices from the brief. The competitor performs each slice manually in the real competition workflow.

Measure from start to verified completion, including:

- reading/selecting source data
- typing, Emmet, snippets, duplication, or multicursor work
- browser or source verification
- corrections

Record at least three manual runs when preparation time permits. Use the median as the baseline and record the fastest run to represent expert peak speed.

Do not compare AI against an artificially slow manual method.

## 2. Discover candidate accelerators

Search for **high-output, low-reasoning** work where model token generation may beat expert editing.

Strong candidates:

- copied structured data expanded into repeated semantic cards or table rows
- a copied copy-deck subsection wrapped in predictable semantic markup
- a large generic shell generated from a compact, already-tested contract
- repetitive Tailwind card/grid markup with immediate visual checks
- isolated decorative CSS or SVG whose failure cannot damage layout

Weak candidates:

- a few lines faster with Emmet, snippets, duplication, or multicursor
- selector-heavy CSS, state behavior, or cross-file integration
- debugging code the model cannot inspect directly
- asking the model to remember exact data or paths
- whole-page regeneration
- output requiring a slow line-by-line review

Apply the candidate filter in [risk-controls.md]. Reject obviously negative cases before spending benchmark time.

## 3. Write short prompt kernels

A kernel is a reusable transformation instruction plus a payload copied from the brief.

Use this compact shape:

```text
[Transform] into [one exact artifact]. [Small structural contract]. Preserve DATA exactly. Raw [HTML/CSS/SVG] only. DATA: [paste]
```

Kernel rules:

- one artifact and one paste target
- preferably 35 words or fewer before the payload
- payload copied, not retyped or memorized
- exact count and stable selector/class contract
- no explanations, comments, fences, or unrelated output
- no model reasoning required
- objective verification possible in about ten seconds

Do not lengthen a kernel to rescue a model that does not reliably perform the transformation. Reject the use case instead.

## 4. Benchmark end to end

Run models with thinking disabled:

```text
/set nothink
```

Use `/clear` between independent trials. Test the same artifact, payload, and pass check for manual and AI routes.

Time the AI route from the decision to use AI until verified code is integrated:

1. prompt recall, construction, and payload copy
2. inference wait
3. selecting and copying the answer
4. paste and integration
5. objective verification
6. correction or manual recovery

Record failed runs at their full cost. Do not time only successful generation.

Test each candidate at least three times per relevant model when possible. The day-of fingerprint should recheck only previously proven kernels and must be short enough for retained boosters to recover its cost.

## 5. Classify evidence

Use exactly these states:

- **Proven accelerator:** meets every acceptance threshold in [risk-controls.md].
- **Unmeasured:** missing manual baseline, repeated AI timings, or complete verification evidence.
- **Rejected:** slower, unreliable, expensive to verify, or dependent on unsupported reasoning.

Do not place unmeasured candidates in the competition card.

When models differ, retain the booster only for the model that passed. Do not infer capability from model family or benchmark reputation.

## 6. Produce the accelerator pack

Use this format:

```markdown
# Module F AI accelerator pack — [task]

## Competitor baseline
- Manual tools and strengths:
- Timing method:
- Acceptance thresholds:

## Candidate benchmark
### [candidate]
- Manual median / fastest:
- Kernel:
- Payload source:
- AI trials by model:
- Verification time:
- Repair/recovery time:
- Net gain:
- Status: Proven accelerator | Unmeasured | Rejected
- Evidence:

## Proven boosters
### [short key]
- Trigger:
- Model:
- Kernel:
- Payload source:
- Paste target:
- Ten-second check:
- Measured saving:
- Immediate fallback:

## Rejected evidence
- [use case]: [why it loses]

## Competition card
- Thinking off:
- Booster key → model → payload → measured saving
- If output differs: manual immediately
```

If no candidate qualifies, say:

```text
No AI use case currently beats the competitor's verified manual workflow. Implement manually; do not pay calibration or context-switch cost.
```

## 7. Rehearse only proven boosters

For each retained booster:

1. recall the kernel
2. copy the payload from its known source
3. run the selected model with thinking off
4. paste into the exact target
5. complete the ten-second check
6. switch immediately to manual if the output differs

Re-measure after any prompt change. A modified prompt is unmeasured until tested again.

## Completion check

Before delivering the pack, confirm:

- every claimed saving has a real manual baseline and full AI timing
- failed and repaired runs are included
- every proven booster passed repeated trials
- verification is objective and fast
- no candidate depends on complex CSS reasoning or broad integration
- no long page-generation prompt or fixed AI schedule remains
- unmeasured and rejected candidates are visibly separated
- the competition card contains only proven boosters
- a zero-booster result is accepted when AI does not win
