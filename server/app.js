const http = require("http");

const server = http.createServer();

server.on("request", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (req.url == "/quit") {
    process.exit(1);
  }
  res.write("Hello");
  console.log("accept");
  res.end();
});

server.listen(8080, "192.168.0.57");
console.log("server listen...");
