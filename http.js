const http = require("http");

const hostName = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page you're looking for</p>
  <a href="/">Back to Homepage </a>
  `);

  res.end("This is my first ever server\n");
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
