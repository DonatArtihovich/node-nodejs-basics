import fs from 'node:fs'
import path from 'node:path'

const copy = async () => {
    const dir = path.resolve('files');
    const newDir = path.resolve('files_copy');

    fs.access(dir, err => {
        if (err) throw new Error('FS operation failed')
    })

    fs.access(newDir, err => {
        if (!err) throw new Error('FS operation failed');
    })

    fs.mkdir(newDir, err => {
        if (err) throw err;
    })

    fs.readdir(dir, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            fs.copyFile(
                path.resolve(dir, file),
                path.resolve(newDir, file),
                err => {
                    if (err) throw err;
                })
        })
    })
};

await copy();
