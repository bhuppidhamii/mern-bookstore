const mongoose = require('mongoose');
const conn = 'mongodb+srv://root:root@bookstore.jk6znk5.mongodb.net/bookstore?retryWrites=true&w=majority&appName=bookstore';
mongoose.connect(conn).then((res) => {
    console.log('database connected');
});