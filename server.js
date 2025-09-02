import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/greet" && req.method === "GET") {
    const name = parsedUrl.query.name || "Guest";
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, ${name}!`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
