
// task 1 spin up a server
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    // task 2 handle routes
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcoming Page - Assignment 1</title></head>');
        res.write('<body>');
        res.write('<h1>Assignment 1</h1><h2>Welcoming Page!</h2>');
        // task 3 add POST form
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    };

    if (url === '/create-user' && method == 'POST') {
        const body = [];
        req.on('data', (data) => {
            body.push(data);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString().split('=')[1];
            console.log(parsedBody);
        });
        res.statusCode = 302;
        res.setHeader = ('Location', '/');
        res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users Page - Assignment 1</title></head>');
        res.write('<body>');
        res.write('<h1>Users Page - Assignment 1</h1')
        res.write('<ul><li>User 1</li><li>User 2</li></ul>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    };
});

server.listen(3000);