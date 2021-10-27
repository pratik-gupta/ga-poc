const express = require('express');
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    console.log('Hello from logs!')
    sample();
    res.send('Hello from server!')
});

app.listen(port, () => {
    console.log('APP listening on port:', port);
});