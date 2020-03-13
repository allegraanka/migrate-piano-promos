const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log(`Listening on port ${port}.`))