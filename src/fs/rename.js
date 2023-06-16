import fs from 'node:fs'
import path from 'node:path'

const rename = async () => {
    fs.access(path.resolve('files', 'wrongFilename.txt'), err => {
        if (err) throw new Error('FS operation failed');
    })
    fs.rename(
        path.resolve('files', 'wrongFilename.txt'),
        path.resolve('files', 'properFilename.md'),
        err => {
            if (err) throw new Error('FS operation failed');
        }
    )
};

await rename();