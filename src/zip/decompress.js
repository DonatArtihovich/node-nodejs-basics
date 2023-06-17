import fs from 'node:fs'
import { pipeline } from 'node:stream'
import path from 'node:path'
import zlib from 'node:zlib'

const decompress = async () => {
    const readableStream = fs.createReadStream(path.resolve('files', 'archive.gz'));
    const writableStream = fs.createWriteStream(path.resolve('files', 'fileToCompress.txt'));
    const gunzip = zlib.createGunzip();

    pipeline(readableStream, gunzip, writableStream, err => {
        if (err) throw err
    });
};

await decompress();