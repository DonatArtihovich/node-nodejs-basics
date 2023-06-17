const { stdout } = process;
import fs from 'node:fs'
import path from 'node:path'

const read = async () => {
    const readableStream = fs.createReadStream(path.resolve('files', 'fileToRead.txt'));
    readableStream.on('data', (data) => {
        stdout.write(data);
    })
};

await read();