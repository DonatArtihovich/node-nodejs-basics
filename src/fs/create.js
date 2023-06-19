import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const create = async () => {
    fs.stat(path.join(__dirname, 'files', 'fresh.txt'), (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
    })
    fs.writeFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        'I am fresh and young',
        (err) => {
            if (err) throw err;
        }
    )
};

await create();