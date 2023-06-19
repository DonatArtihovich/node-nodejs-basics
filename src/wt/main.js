import os from 'node:os'
import { Worker } from 'node:worker_threads'
import EventEmitter from 'node:events'
const emitter = new EventEmitter()
emitter.on('messages', () => { console.log(resultsArr) })

const workersArr = [];
const resultsArr = [];
let counter = 0;

const performCalculations = async () => {
    const numOfWorkers = os.cpus().length;

    for (let i = 0; i < numOfWorkers; i++) {
        const worker = new Worker('./worker.js');
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
