require('./database');

const http = require('http');
const app = require('./app');

const PORT = 4000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
