const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        const data = fs.readFileSync('./message.txt');
        const res1 = data.toString().split('+').join(" ");
        res.setHeader('Content-Type', 'text/html');
        res.write('</html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body><h1>${res1}</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>`);
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('./message.txt',message,() => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
    
}

// module.exports = {
//     handler: requestHandler,
//     someText: "random Text"
// }

// module.exports.handler = requestHandler;
// module.exports.someText = "random text";

exports.handler = requestHandler;
exports.someText = "random text";



