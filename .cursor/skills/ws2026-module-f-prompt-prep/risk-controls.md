# Accelerator selection and benchmark controls

Use this reference to decide whether an Ollama use case genuinely beats an expert competitor.

## Net-gain equation

Measure:

```text
AI total = prompt construction + inference + copy/paste + integration + verification + repair/recovery
Net gain = manual verified time - AI total
```

Include every second from choosing AI until the artifact is verified in the editor. Failed trials count at full cost.

Do not use token generation time alone.

## Candidate filter

Benchmark a candidate only when all are true:

1. The model will emit substantially more text than the kernel requires.
2. The task is transformation or expansion, not reasoning.
3. The payload can be copied directly from the brief or starter.
4. The output is one isolated artifact with a known paste target.
5. A wrong answer cannot damage the last working solution.
6. Correctness can be checked objectively in about ten seconds.
7. Emmet, snippets, duplication, multicursor, or search/replace are not obviously faster.

Strong signal:

- at least 20–30 predictable output lines
- repeated structure
- exact count
- simple class/element contract
- visual or count-based verification

Reject before benchmarking when the task needs:

- selector-chain reasoning or accessible CSS state behavior
- awareness of several existing files
- debugging without complete runtime evidence
- exact data recalled by the model
- line-by-line semantic review
- merging several model artifacts
- repeated corrective prompting

## Manual baseline

Use the competitor's fastest real workflow.

For each artifact:

1. Reset to the same starting state.
2. Start timing before source selection or typing.
3. Use normal Emmet, snippets, copy/paste, multicursor, and browser checks.
4. Stop only after the artifact passes the same check used for AI.
5. Repeat three times when possible.

Record:

- fastest manual time
- median manual time
- any setup already available in competition

Do not handicap the competitor to make AI appear useful.

## AI trials

Before timing:

```text
/set nothink
```

Use `/clear` between independent candidates. Keep the model, context setting, kernel, payload, starting file, and pass check constant across repeated trials.

Capture separately:

- kernel recall/typing time
- payload selection/copy time
- inference wait
- answer selection/copy time
- paste/integration time
- verification time
- repair or recovery time
- first-pass result

Run at least three trials on a model before claiming reliability.

## Strict acceptance threshold

Classify a candidate as **Proven accelerator** only when every condition passes:

1. At least three manual baseline runs exist.
2. At least three AI trials exist for the exact model tag and kernel.
3. Every AI trial produces an acceptable artifact without corrective prompting.
4. Median AI total is at least 30 seconds faster than manual median.
5. Median AI total is no more than 80% of manual median.
6. The slowest AI trial is not slower than manual median.
7. Verification takes no more than about ten seconds.
8. Integration requires one paste target and no broad cleanup.
9. The kernel is recallable quickly, preferably 35 words or fewer before payload.
10. The result remains useful after accounting for day-of model fingerprint and context-switch overhead.

If preparation time allows five trials, require at least five clean first-pass results before treating the kernel as highly reliable.

Any kernel edit, model-tag change, quantization change, or structural-contract change returns the candidate to **Unmeasured**.

## Evidence states

### Proven accelerator

All strict acceptance thresholds pass. The use case may appear on the competition card for the tested model.

### Unmeasured

One or more required measurements are missing. Candidate prompts may appear in the benchmark workbook, but never in the competition card.

### Rejected

Use when any occurs:

- AI median does not meet both saving thresholds
- any trial needs corrective prompting
- output must be reviewed line by line
- manual tools are faster
- the model violates the artifact contract
- a failure can break working integration
- a correct answer depends on reasoning already shown unreliable

Record why it lost so the use case is not reconsidered during competition.

## Day-of model fingerprint

The models may be revealed only during the module. Fingerprinting must not become a general capability test.

1. Disable thinking.
2. Identify the exact model tag.
3. Run one tiny version of each already-proven transformation kernel.
4. Check only contract adherence, output speed, and formatting.
5. Stop after two minutes total.

Activate a booster only when:

- the exact tested model tag is present, or
- the revealed model passes the matching fingerprint cleanly and the booster is large enough to repay fingerprint cost

Expected cumulative booster saving must exceed:

```text
fingerprint time + model switching overhead + 30-second safety margin
```

If that equation fails, use no AI even when an individual output looks good.

## Prompt-kernel rules

A kernel should express one deterministic expansion:

```text
[Transform] into [artifact]. [Count and structure]. Preserve DATA exactly. Raw [language] only. DATA: [paste]
```

Prefer:

- nouns and counts
- exact class/element names
- source payload pasted after `DATA:`
- no prose about quality
- no request for explanation

Avoid:

- full project context the transformation does not need
- long accessibility or visual-design checklists
- multiple output files
- “fix,” “improve,” or “make responsive” without a complete local contract
- prompts longer than the manual code they replace

## Recommended candidate families

### Data expander

Copied rows or bullets become repeated semantic HTML. This is the strongest likely advantage because output volume is high and counts are cheap to verify.

### Copy wrapper

Copied authoritative text becomes headings, paragraphs, lists, or a simple table. Reject if the model alters wording or verification requires rereading every sentence.

### Shell macro

A compact stable contract becomes a large boilerplate document. Retain only if required details are not omitted and reviewing the shell is faster than typing it.

### Decorative generator

Generate an isolated background, SVG pattern, or nonessential animation. Retain only if it cannot affect layout and visual acceptance takes seconds.

### Repetitive utility markup

Generate repeated Tailwind card/grid structures. Retain only for an already-supplied CSS build and common classes.

## Known bad families

Do not benchmark again without materially new evidence:

- radio-tab selector logic
- checkbox navigation selector logic
- sticky behavior dependent on unknown parent overflow
- overlap CSS tied to existing page structure
- cross-file consistency edits
- full page generation with exact copy and assets
- final quality audit by a model that cannot inspect the repository

## Benchmark record

For every candidate, capture:

```text
Candidate:
Starting state:
Manual runs:
Manual fastest:
Manual median:
Model tag:
Kernel:
Payload source:
AI trial totals:
First-pass results:
Verification seconds:
Repair/recovery seconds:
Median AI total:
Slowest AI total:
Median net gain:
Percentage of manual median:
Fingerprint cost allocation:
Status:
Evidence:
```

Missing values force **Unmeasured** status.

## Competition behavior

- The competition card contains proven boosters only.
- Use the selected model and exact tested kernel.
- Do not improvise a longer prompt.
- If output differs from the contract, discard it and complete manually.
- Never retry a booster during competition.
- Do not use AI merely because it is available.
