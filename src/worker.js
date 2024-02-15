export function workerRun(path, callback, data = null) {
  const worker = new Worker(path, { data });

  console.log("Worker on:", process.pid)

  worker.on("message", callback.bind(null, null));
  worker.on("error", callback);
  worker.on("exit", (exitCode) => {
    if (exitCode === 0) {
      return null;
    }
    return callback(new Error(`Worker exited with the code ${exitCode}`));
  });

  return worker;
}
