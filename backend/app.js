const express = require('express');
const app = express();
require('./connection/connection')

app.get('/', (req, res) => {
    res.send('Hello, World!');
})


app.listen(1000, () => {
    console.log('server started successfully!');
})