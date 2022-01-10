
const express = require('express'); //import express

const app = express(); // create app instance

// setup a middleware
app.use('/add-product', (req, res, next) => {
    // send a response here.
    res.send('<h1>The add-product page</h1>');
});

app.use('/', (req, res, next) => {
    // send a response here.
    res.send('<h1>Hello from express!</h1>');
});

app.listen(3000); // listen on port 3000

