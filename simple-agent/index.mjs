import { readFile, writeFile } from 'fs/promises'
import readline from 'readline/promises'

const URL = 'http://jasz36.fork.hu:11435/api/chat'
const MODEL = 'gemma4:e4b'
const SYS = 'Return the full updated file only. No comments. No markdown.'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const file = process.argv[2]?.trim() || await rl.question('file: ')
const src = await readFile(file, 'utf8')
const ctx = process.argv[3] ? await readFile(process.argv[3].trim(), 'utf8') : ''
const task = await rl.question('prompt: ')
rl.close()

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
    options: { num_ctx: 10000 }
  })
})
const out = (await res.json()).message.content.trim()
await writeFile(file + '.bak', src)
await writeFile(file, out)
console.log(out)
