import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const read = async () => {
    fs.access(path.join(__dirname, 'files', 'fileToRead.txt'), err => {
        if (err) throw new Error('FS operation failed');
    })
    fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf-8', (err, data) => {
        if (err) throw new Error('FS operation failed');
        console.log(data);
    })
};

await read();