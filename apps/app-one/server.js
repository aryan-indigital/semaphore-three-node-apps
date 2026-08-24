const http = require("node:http");

const app = "node-app-1";
const port = Number(process.env.PORT || 3001);

const server = http.createServer((request, response) => {
  const payload = {
    app,
    message: "Hello from Node.js application one",
    path: request.url,
    timestamp: new Date().toISOString(),
  };

  response.writeHead(request.url === "/health" ? 200 : 200, {
    "content-type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`${app} listening on port ${port}`);
});
