const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/home'){
        res.setHeader('Content-Type', 'text/html');
        res.write('</html>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
    }
    if(url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('</html>');
        res.write('<body><h1>Welcome to About us Page!!!!</h1></body>');
        res.write('</html>');
    }
    if(url === '/node'){
        res.setHeader('Content-Type', 'text/html');
        res.write('</html>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        
    }
   // process.exit();
    
});
server.listen(3000);