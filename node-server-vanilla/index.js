const http = require('http');

//this is to create the server
const server = http.createServer((req, res) => {

    //define the routes
    if (req.url === '/' && req.method === "GET") {
        res.writeHead(200, { 'content-Type': 'text/plain' })
        res.end('Hello, World!')
    } else if (req.url === '/about' && req.method === "GET") {
        res.writeHead(200, { 'content-Type': 'text/plain' })
        res.end("this is the about page")
    } else if (req.url === '/contact-me' && req.method === "GET") {
        res.writeHead(200, { 'content-Type': 'text/plain' })
        res.end("this is the contact page")
    } else {
        res.writeHead(404, { 'content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
})

function serveFile(res, fileName, statusCode = 200)

//start the server 
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})


const http = require('http');
const fs = require('fs');
const path = require('path');

// // Create the server
// const server = http.createServer((req, res) => {
//     // Define the routes
//     if (req.url === '/' && req.method === "GET") {
//         serveFile(res, 'index.html');
//     } else if (req.url === '/about' && req.method === "GET") {
//         serveFile(res, 'about.html');
//     } else if (req.url === '/contact-me' && req.method === "GET") {
//         serveFile(res, 'contact-me.html');
//     } else {
//         serveFile(res, '404.html', 404);
//     }
// });

// // Helper function to serve files
// function serveFile(res, fileName, statusCode = 200) {
//     const filePath = path.join(__dirname, fileName);
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         } else {
//             res.writeHead(statusCode, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }
//     });
// }

// // Start the server
// const PORT = 8080;
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });