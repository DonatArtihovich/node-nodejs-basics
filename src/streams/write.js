import path from 'node:path'
import fs from 'node:fs'
const { stdin } = process;
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))


const write = async () => {
    const writeableStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
    stdin.on('data', data => {
        writeableStream.write(data);
    })
};

await write();