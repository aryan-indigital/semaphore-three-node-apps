const http = require("node:http");

const app = "node-app-2";
const port = Number(process.env.PORT || 3002);

const server = http.createServer((request, response) => {
  const payload = {
    app,
    message: "Hello from Node.js application two",
    path: request.url,
    timestamp: new Date().toISOString(),
  };

  response.writeHead(200, {
    "content-type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`${app} listening on port ${port}`);
});
