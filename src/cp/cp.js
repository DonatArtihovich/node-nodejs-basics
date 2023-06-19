import ChildProcess from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const { stdin, stdout } = process;
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const spawnChildProcess = async (args) => {
    const processPath = path.join(__dirname, 'files', 'script.js')
    const childProcess = ChildProcess.spawn(processPath, args);

    stdin.pipe(childProcess.stdin);
    childProcess.stdout.on('data', data => {
        stdout.write(data)
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess([23, 45]);
