import { createServer } from "http";
import { requestHandler } from "./handlers/requestHandler.js";

const port = 8800;

const app = createServer();

app.on("request", requestHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
