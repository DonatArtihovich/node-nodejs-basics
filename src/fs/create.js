import fs from 'node:fs'
import path from 'node:path'

const create = async () => {
    fs.stat(path.resolve('files', 'fresh.txt'), (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
    })
    fs.writeFile(
        path.resolve('files', 'fresh.txt'),
        'I am fresh and young',
        (err) => {
            if (err) throw err;
        }
    )
};

await create();