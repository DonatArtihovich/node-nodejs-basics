const { stdout } = process;
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const read = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    readableStream.on('data', (data) => {
        stdout.write(data);
    })
};

await read();