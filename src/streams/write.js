import path from 'node:path'
import fs from 'node:fs'
const { stdin } = process;


const write = async () => {
    const writeableStream = fs.createWriteStream(path.resolve('files', 'fileToWrite.txt'));
    stdin.on('data', data => {
        writeableStream.write(data);
    })
};

await write();