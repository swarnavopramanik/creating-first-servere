const http = require('http')

const port = 8081; // local port no

http
  .createServer(( request,response) => {   // callback function
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, this is from my first server</h1>");
    response.end();
})
.listen(port, () => {
    console.log(`Nodejs server started on port $(port)`);
});