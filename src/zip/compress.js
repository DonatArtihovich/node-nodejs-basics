import fs from 'node:fs'
import zlib from 'node:zlib'
import path from 'node:path'
import { pipeline } from 'node:stream'

const compress = async () => {
    const readableStream = fs.createReadStream(path.resolve('files', 'fileToCompress.txt'));
    const writableStream = fs.createWriteStream(path.resolve('files', 'archive.gz'));
    const gzip = zlib.createGzip();

    pipeline(readableStream, gzip, writableStream, err => {
        if (err) throw err;
    });
    // readableStream.pipe(gzip).pipe(writableStream);
};

await compress();