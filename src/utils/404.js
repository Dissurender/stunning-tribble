export function write404(res) {
  console.error("404");
  res.writeHead(404, { "Content-type": "text/html" });
  res.end("Error");
}
