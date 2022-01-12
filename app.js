
const express = require('express'); //import express

const app = express(); // create app instance

const path = require('path');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//setup parser.
const bodyParser = require('body-parser');

// set up global configuration.
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));

// setup a middleware
// the admin string parameters adds segment for each route.
app.use('/admin', adminData.routes);

app.use(shopRoutes);
app.use(express.static(path.join(__dirname, 'public')));

// send 404 response
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404');
});

app.listen(3000); // listen on port 3000

