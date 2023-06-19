import os from 'node:os'
import { Worker } from 'node:worker_threads'
import path from 'node:path'
import EventEmitter from 'node:events'
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(path.dirname(import.meta.url))
const emitter = new EventEmitter()
emitter.on('messages', () => {
    console.log(resultsArr)
    process.exit()
})

const workersArr = [];
const resultsArr = [];
let counter = 0;

const performCalculations = async () => {
    const numOfWorkers = os.cpus().length;

    for (let i = 0; i < numOfWorkers; i++) {
        const worker = new Worker(path.join(__dirname, 'worker.js'));
        worker.on('message', data => {
            resultsArr.push({
                status: 'resolved',
                data: data
            })

            counter++
            if (counter === numOfWorkers) emitter.emit('messages')
        });

        worker.on('error', () => {
            resultsArr.push({
                status: 'error',
                data: null
            })
        });

        workersArr.push(worker);
    }

    workersArr.reduce((num, worker) => {
        worker.postMessage(num);
        return num + 1
    }, 10);
};

await performCalculations();
