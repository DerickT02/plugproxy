import { createServer } from 'http';

const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello World")
})

server.listen(3000, () => {
    console.log("Server is running")
})