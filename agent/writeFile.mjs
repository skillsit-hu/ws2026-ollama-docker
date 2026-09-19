import fs from 'fs/promises';
import path from 'path';

/**
 * Writes content to a target file. Overwrites the file if it exists, creates it if it does not.
 * @param {string} targetFile - The path of the file to write.
 * @param {string} content - The content to write.
 */
export async function writeFile(targetFile, content) {
    try {
        const absolutePath = path.resolve(targetFile);

        console.log(`\n--- Attempting to write file: ${absolutePath} ---`);

        await fs.writeFile(absolutePath, content, 'utf8');

        console.log(`File written successfully: ${absolutePath}`);
    } catch (error) {
        console.error("\n❌ Error writing the file:", error.code);
        if (error.code === 'ENOENT') {
            console.error(`Parent directory not found for the specified path: ${targetFile}`);
        } else if (error.code === 'EACCES') {
            console.error(`Permission denied: Cannot write the file at ${targetFile}`);
        } else {
            console.error("An unexpected error occurred:", error.message);
        }
        throw error;
    }
}
