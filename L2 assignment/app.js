// DONE// create a new npm project, install express and nodemon
// create express js app 

// import express
const express = require('express');
const app = express();

// handle request to / and /users
app.use('/users', (req, res, next) => {
    res.send('<h1>USERS page</h1>');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Home page</h1>');
})

// set port number to 3000
app.listen(3000);

