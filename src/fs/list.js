import fs from 'node:fs';
import path from 'node:path'

const list = async () => {
    fs.access(path.resolve('files'), err => {
        if (err) throw new Error('FS operation failed');
    })

    fs.readdir(path.resolve('files'), (err, files) => {
        console.log(files);
    })
};

await list();