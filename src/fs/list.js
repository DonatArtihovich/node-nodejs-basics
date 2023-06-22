import fs from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const list = async () => {
    fs.access(path.join(__dirname, 'files'), err => {
        if (err) throw new Error('FS operation failed');
    })

    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
        console.log(files);
    })
};

await list();