const express = require('express');
const app = express();
const bookRoute = require('./routes/booksRoute');

require('./connection/connection')
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.use('/api/v1', bookRoute);

app.listen(1000, () => {
    console.log('server started successfully!');
})