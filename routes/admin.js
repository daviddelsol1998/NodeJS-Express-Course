const express = require('express');
const router = express.Router();
// setup paths
const path = require('path');

const rootDir = require('../util/path');

// variable to hold Products
const products = [];

router.get('/add-product', (req, res, next) => {
    // send a response here.
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/') // redirect is very convinient to send to another page
});

exports.routes = router;
exports.products = products;