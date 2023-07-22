const http = require("http");
const port = 8000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.end("Welcome To the page");
}
server.listen(port, function (err) {
  if (err) {
    console.log("Err");
    return;
  }
  console.log("Server is running on port : ", port);
});
