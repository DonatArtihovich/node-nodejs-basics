import fs from 'node:fs'
import path from 'node:path'

const read = async () => {
    fs.readFile(path.resolve('files', 'fileToRead.txt'), 'utf-8', (err, data) => {
        if (err) throw new Error('FS operation failed');
        console.log(data);
    })
};

await read();