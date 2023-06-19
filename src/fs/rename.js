import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const rename = async () => {
    fs.access(path.join(__dirname, 'files', 'wrongFilename.txt'), err => {
        if (err) throw new Error('FS operation failed');
    })
    fs.rename(
        path.join(__dirname, 'files', 'wrongFilename.txt'),
        path.join(__dirname, 'files', 'properFilename.md'),
        err => {
            if (err) throw new Error('FS operation failed');
        }
    )
};

await rename();