import fs from 'node:fs'
import crypto from 'node:crypto'
import path from 'node:path'
const { stdout } = process;
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const calculateHash = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = crypto.createHash('sha256');
    readableStream.on('data', (data) => {
        hash.update(data);
    })
    readableStream.on('end', () => { stdout.write(hash.digest('hex')) });
};

await calculateHash();