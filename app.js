
const express = require('express'); //import express

const app = express(); // create app instance

const path = require('path');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//setup parser.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// setup a middleware
// the admin string parameters adds segment for each route.
app.use('/admin', adminRoutes);

app.use(shopRoutes);
app.use(express.static(path.join(__dirname, 'public')))

// send 404 response
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000); // listen on port 3000

