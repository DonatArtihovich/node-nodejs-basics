import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const remove = async () => {
    fs.access(path.join(__dirname, 'files', 'fileToRemove.txt'), err => {
        if (!err) {
            fs.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'), err => {
                if (err) throw new Error('FS operation failed');
            })
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await remove();