# simple-agent — competition memory card

One file, ~30 lines. Reads a file, sends it to the local model with your prompt, writes the answer back over the same file.

Target: retype it from memory in **under 3 minutes**, cold, no reference.

## Run

```bash
node index.mjs <file> [context.txt]
```

```text
node index.mjs index.html            # file only
node index.mjs index.html deck.md    # file + extra context
```

Both args optional. With no args it asks `file:` on stdin. It always asks `prompt:`.

## The four memory blocks

Type them in this order. Each block is one idea, not one line.

**1 — head: two imports, three constants**

```js
import { readFile, writeFile } from 'fs/promises'
import readline from 'readline/promises'

const URL = 'http://jasz36.fork.hu:11435/api/chat'
const MODEL = 'gemma4:e4b'
const SYS = 'Return the full updated file only. No comments. No markdown.'
```

`fs/promises` and `readline/promises` — both promises, no callbacks, no `.then`.

**2 — input: rl, file, src, ctx, task, close**

```js
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const file = process.argv[2]?.trim() || await rl.question('file: ')
const src = await readFile(file, 'utf8')
const ctx = process.argv[3] ? await readFile(process.argv[3].trim(), 'utf8') : ''
const task = await rl.question('prompt: ')
rl.close()
```

`argv[2]` is the file, `argv[3]` is the context. Same `process.argv[n]` shape twice — one idiom, not two. Don't forget `rl.close()` or the process hangs.

**3 — fetch: method, headers, body**

```js
const res = await fetch(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: MODEL,
    messages: [
      { role: 'system', content: SYS },
      { role: 'user', content: `${ctx}\n\nfile: ${file}\n\n${src}\n\n${task}` }
    ],
    stream: false,
    think: false,
    options: { num_ctx: 4096 }
  })
})
```

User message order: **ctx → file → src → task**. Context first, task last.

**4 — output: three lines**

```js
const out = (await res.json()).message.content.trim()
await writeFile(file, out)
console.log(out)
```

`.message.content` — this is `/api/chat`. (`/api/generate` would be `.response`.)

## Recall hooks

- **Two promises, three constants** — the head.
- **file, src, ctx, task** — the inputs, in typing order.
- **ctx, file, src, task** — the prompt, in sending order. Only the ctx moves.
- **json → message → content → trim** — the unwrap chain.
- Top-level `await` everywhere. It is `.mjs`, so no `async function main()` wrapper. Never type one.

## Two knobs

| Constant | Change it when |
| --- | --- |
| `URL` | container moved, or you are on `127.0.0.1:11434` locally |
| `MODEL` | probe said the other model routes better |

Endpoint is `/api/chat` with a `messages` array. Do not mix it with `/api/generate` + `prompt`.

## Traps

**It overwrites `<file>` in place.** No backup, no diff, no confirm. Commit or copy before every run. A bad generation eats your working file — this is the one failure that costs real minutes.

**`num_ctx: 4096` is the whole budget** — ctx + src + task share it. A long context file silently pushes your source out of the window and the model returns a truncated file. If the output comes back short, that is why. Raise to `8192`.

**Context file is optional but not checked.** A wrong path throws `ENOENT` before the prompt. Fast, loud, harmless.

**`SYS` is doing real work.** "Full updated file only. No comments. No markdown." is what stops the model wrapping the answer in a fenced block and corrupting the file. If output arrives with ``` fences, the system line was mistyped.

## Fits the AI control loop

This is the **generate** step only — one file in, one file out, one paste target. Verify and retry stay manual, per `module-f-ai-plan/memorization-keys.md`. Two failed generations: stop and reassess the remaining AI calls.
