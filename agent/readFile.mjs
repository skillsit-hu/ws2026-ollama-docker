import fs from 'fs/promises';
import path from 'path';

/**
 * Reads a text file at the given path and prints its contents to the console.
 * @param {string} filePath - The path to the text file.
 * @returns {Promise<string|undefined>} The file contents, or undefined if reading failed.
 */
export async function readFileAndPrint(filePath) {
    try {
        const absolutePath = path.resolve(filePath);

        console.log(`\n--- Attempting to read file: ${absolutePath} ---`);

        const content = await fs.readFile(absolutePath, 'utf8');

        console.log(content);
        return content;
    } catch (error) {
        console.error("\n❌ Error reading the file:", error.code);
        if (error.code === 'ENOENT') {
            console.error(`File not found at the specified path: ${filePath}`);
        } else if (error.code === 'EACCES') {
            console.error(`Permission denied: Cannot read the file at ${filePath}`);
        } else {
            console.error("An unexpected error occurred:", error.message);
        }
        throw error;
    }
}
