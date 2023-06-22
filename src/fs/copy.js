import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const copy = async () => {
    const dir = path.join(__dirname, 'files');
    const newDir = path.join(__dirname, 'files_copy');

    fs.access(dir, err => {
        if (err) throw new Error('FS operation failed')
    })

    fs.mkdir(newDir, err => {
        if (!err) throw new Error('FS operation failed');
    })

    fs.readdir(dir, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            fs.copyFile(
                path.join(dir, file),
                path.join(newDir, file),
                err => {
                    if (err) throw err;
                })
        })
    })
};

await copy();
