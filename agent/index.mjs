import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getOllamaChatResponse } from './agent.mjs';
import { readFileAndPrint } from './readFile.mjs';
import { writeFile } from './writeFile.mjs';

const rl = readline.createInterface({ input, output });
const targetFile = process.argv[2]?.trim() || await rl.question('Enter target file path: ');
const content = await readFileAndPrint(targetFile);
const userPrompt = await rl.question('Enter your prompt: ');
rl.close();

const promptWithFileContent = `
    The source file: ${targetFile}
    The file content is: ${content}
    /n User prompt: ${userPrompt}
    `;
const response = await getOllamaChatResponse(promptWithFileContent);
await writeFile(targetFile, response);
console.log(response);