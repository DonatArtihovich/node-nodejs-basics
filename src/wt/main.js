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

const resultsArr = [];
let counter = 0;

const performCalculations = async () => {
    const numOfWorkers = os.cpus().length;

    for (let i = 0; i < numOfWorkers; i++) {
        const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: { message: i + 10 } });
        worker.on('message', data => {
            resultsArr[i] = {
                status: 'resolved',
                data: data
            }

            counter++
            if (counter === numOfWorkers) emitter.emit('messages')
        });

        worker.on('error', () => {
            resultsArr.push({
                status: 'error',
                data: null
            })
        });
    }
};

await performCalculations();
