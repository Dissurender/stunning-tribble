import { normalize } from "path";
import { write404 } from "../utils/404.js";

const dir = "./public";
const rootDir = normalize(dir);

export function requestHandler(req, res) {
  const date = new Date();
  const formatDate = `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`;
  const formatTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
  console.log(`${formatDate}|${formatTime} ${req.method} ${req.url}`);

  const method = req.method;

  switch (method) {
    case "GET":
      res.setHeader("Content-type", "application/json");
      res.end(
        JSON.stringify({
          data: "Test GOT",
        })
      );
      break;

    case "POST":
      break;

    case "PUT":
      break;

    case "DELETE":
      break;

    default:
      write404();
      break;
  }
}
