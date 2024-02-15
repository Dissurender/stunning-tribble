import { Worker, isMainThread, parentPort } from "worker_threads";

if (isMainThread) {
  const pool = [];

  const workerCount = 5;
  for (let i = 0; i < workerCount; i++) {
    pool.push(new Worker("./src/index.js"));
  }

  pool.forEach((worker, index) => {
    worker.postMessage({ task: index });
  });

} else {
  parentPort.on("message", (message) => {
    console.log(`Worker ${process.pid}: Recieved task ${message.task}`);

    performTask(message.task);
  });
}

function performTask(task) {}
