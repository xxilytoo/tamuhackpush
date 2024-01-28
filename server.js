const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors middleware
const app = express();

// Allow requests from specific origin (replace 'https://xxilytoo.github.io' with your actual domain)
const corsOptions = {
    origin: 'https://xxilytoo.github.io/tamuhackpush/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// Use the cors middleware with specific options
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static(__dirname));

// Handling preflight requests
app.options('/*', cors(corsOptions));


// default URL for the website
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname: It will resolve to your project folder.
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
    console.debug('Server listening on port ' + port);
});
