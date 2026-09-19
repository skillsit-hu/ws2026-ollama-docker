# Create: WorldSkills Module F risk-controlled AI prompt-prep skill

## Competition constraints

WorldSkills Shanghai 2026 — Web Development. AI is allowed for the first time, **only in Module F**.

1. Workstations have GTX 4070 GPUs with 12GB VRAM and Ollama pre-installed.
2. Competitors may use either of two local ~4B models, revealed during the module, with no usage-count limit.
3. No professional cloud model, IDE agent, tool use, or automatic multi-file editing is available.
4. The competitor types prompts into the Ollama CLI, then manually copies replies into the editor.
5. A smaller trial model may be available on familiarization day.
6. One likely model is `qwen3:4b-q4_K_M`; do not depend on its exact behavior.
7. A large advertised context window does not imply strong reasoning. Expect ignored constraints, fabricated details, invalid classes, incomplete output, and regressions.
8. Module F covers **design implementation** and **frontend development**, with heavy Tailwind CSS use through the competition's allowed CSS workflow. Never assume a Tailwind CDN script is allowed.
9. Module duration, marking weights, tests, and JavaScript policy come from the brief. If absent, make explicit planning assumptions instead of inventing rules.

## Objective

Create a Cursor Agent skill that prepares an **AI-forward but risk-controlled competition tactic** after the Module F brief becomes available.

The purpose is not to maximize the number of AI calls. It is to maximize expected marks completed within the module time:

`AI value = likely marks or time saved - generation, verification, repair, and integration cost`

AI should be the primary accelerator for suitable work. The competitor remains responsible for:

- choosing which model and task to use;
- integrating one returned artifact at a time;
- checking exact text, prices, paths, selectors, and constraints;
- enforcing retry and time limits;
- abandoning AI when a manual fallback has higher expected value.

The skill prepares prompts and a competition route. It must not solve the task in Cursor.

## Related workflow

A separate prototype-generation skill may create an HTML/CSS visual prototype from the same brief. This skill may consume the final prototype to extract hierarchy, layout, and visual cues. The prototype is a reference, not competition code to paste.

## Required inputs

Require:

- path or paste of the task brief.

Use when available:

- module duration and submission rules;
- tests, marking scheme, scoring weights, and required selectors;
- exact copy deck, assets, starter files, and allowed stack;
- final visual prototype;
- competitor strengths and known manual fallback patterns;
- model hints or measured model behavior.

If duration is unknown, state the assumed duration. If marking weights are missing, rank by dependencies and visible acceptance criteria without fabricating points.

## Tactical doctrine

Use this fixed control loop:

**calibrate → prioritize → generate → verify → retry once or fall back**

### 1. Calibrate the unknown models

Prepare a short day-of probe that takes no more than 5–8 minutes total. Test both models on representative Module F behavior:

- follows one-artifact/raw-code output;
- preserves exact text and required counts;
- uses common valid Tailwind classes;
- obeys no-JavaScript or stack restrictions;
- produces a small responsive or CSS-only interaction.

Record which model is primary for markup/content and which is primary for CSS/logic. If neither passes a task type, route that type to a manual fallback.

### 2. Build an AI opportunity map

Classify each task:

- **Green:** isolated, repetitive, easy to verify; use AI first.
- **Amber:** valuable but integration-sensitive or moderately hard; use a smaller artifact, strict time cap, and one retry.
- **Red:** exact-data, cross-file, complex-state, or expensive-to-verify work; keep human control and use AI only for an isolated snippet if useful.

For every task estimate:

- marking value or priority;
- dependency order;
- likely time saved;
- generation plus verification cost;
- model suitability;
- fastest manual fallback.

Do not produce an AI prompt for a task when manually completing it is clearly faster and safer.

### 3. Create a timed competition route

Split the module into:

- calibration/setup;
- minimum viable submission;
- completion;
- polish and final verification;
- protected reserve.

Give cumulative clock checkpoints, not only per-step estimates. Define what is dropped when the competitor falls behind. Protect working navigation, required content, test hooks, and submission integrity before optional visual polish.

### 4. Use strict execution controls

Each AI step must have:

- one pasteable artifact and exact paste target;
- risk tier and reason;
- time cap including verification;
- concise prompt recalled from a memorization key;
- objective pass check;
- one corrective retry cue;
- alternate-model rule when useful;
- manual fallback;
- abort condition.

Default fallback ladder:

1. Verify the first reply.
2. If the failure is narrow and time remains, retry once with a short correction.
3. If model routing predicts a benefit, try the alternate model within the same total time cap.
4. Otherwise stop, restore/retain the last working code, and use the manual fallback.

Never enter open-ended prompt iteration. Two consecutive failed AI tasks trigger a reassessment of the remaining route.

## Prompt design

Build page by page. Ask for one HTML document, one section, one component, or one CSS block at a time. Never request multiple files.

Use the memorized grammar:

**Artifact / Context / Must / Forbid / Output**

Every prompt should:

- identify exactly one artifact and paste boundary;
- include only the local context needed to generate it;
- copy exact acceptance data directly from the brief;
- prefer common Tailwind utilities only when the supplied CSS-only build supports them; otherwise use the permitted stylesheet workflow;
- explicitly state semantic, responsive, accessibility, JavaScript, and count constraints that matter;
- forbid commentary, markdown fences, invented data, and unrelated changes;
- request raw code only.

Prompts do not need to be memorized word for word. The competitor memorizes the grammar, phase keys, hard constraints, and fallback cues.

## Required skill package

Create:

- `.cursor/skills/ws2026-module-f-prompt-prep/SKILL.md`
- `.cursor/skills/ws2026-module-f-prompt-prep/risk-controls.md`
- `.cursor/skills/ws2026-module-f-prompt-prep/examples.md`

`SKILL.md` must have YAML frontmatter with `name`, a third-person WHAT + WHEN `description`, and `disable-model-invocation: true`.

Keep the main workflow concise. Put reusable calibration scoring, risk classification, stop rules, fallback ladder, and prompt grammar in `risk-controls.md`.

## Required outputs from a skill run

1. **Assumptions and sources**
2. **AI opportunity map** with risk, priority, dependency, model route, and fallback
3. **Model calibration card**
4. **Timed competition route** with MVP, completion, polish, reserve, and cumulative checkpoints
5. **Prompt cards**, each containing:
   - memorization key;
   - artifact and paste target;
   - risk and time cap;
   - competition prompt;
   - objective verification;
   - retry/alternate-model cue;
   - manual fallback and abort trigger
6. **Competition memory card** containing only the prompt grammar, route keys, hard rules, clock checkpoints, and emergency cues
7. **Dry-run findings**: observed failures, prompts changed or rejected, and unresolved assumptions

## Validation

Dry-run against past Module F-style briefs and tests where available. Check:

- each AI call returns one independently pasteable artifact;
- each step has a fast pass/fail check and a bounded fallback;
- exact content remains explicitly human-verifiable;
- dependencies and time checkpoints are coherent;
- the MVP route leaves a protected final reserve;
- prompts are concise enough to reconstruct from keys;
- the plan still works if one model or one high-risk AI task fails.

## Success criteria

A good run produces a route the competitor can rehearse in about 30 minutes and execute under pressure. AI is used aggressively where measured to help, but no individual call can consume unbounded time or endanger the last working submission.