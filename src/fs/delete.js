import fs from 'node:fs'
import path from 'node:path'

const remove = async () => {
    fs.unlink(path.resolve('files', 'fileToRemove.txt'), err => {
        if (err) throw new Error('FS operation failed');
    })
};

await remove();