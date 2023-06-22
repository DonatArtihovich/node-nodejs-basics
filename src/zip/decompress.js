import fs from 'node:fs'
import { pipeline } from 'node:stream'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const decompress = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'archive.gz'));
    const writableStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const gunzip = zlib.createGunzip();

    pipeline(readableStream, gunzip, writableStream, err => {
        if (err) throw err
    });
};

await decompress();