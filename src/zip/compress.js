import fs from 'node:fs'
import zlib from 'node:zlib'
import path from 'node:path'
import { pipeline } from 'node:stream'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const compress = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const writableStream = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
    const gzip = zlib.createGzip();

    pipeline(readableStream, gzip, writableStream, err => {
        if (err) throw err;
    });
    // readableStream.pipe(gzip).pipe(writableStream);
};

await compress();