import { Transform } from 'node:stream'
const { stdin, stdout } = process;

const transform = async () => {
    const reverseStream = new Transform({
        decodeStrings: false,
        transform(chunk, encoding, callback) {
            const data = chunk.toString();
            const out = data.split('').reverse().join('');

            callback(null, out);
        }
    })

    stdin.pipe(reverseStream).pipe(stdout);
};

await transform();