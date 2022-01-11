const express = require('express');
const router = express.Router();
// setup paths
const path = require('path');

const rootDir = require('../util/path')

router.get('/add-product', (req, res, next) => {
    // send a response here.
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/') // redirect is very convinient to send to another page
});

module.exports = router;