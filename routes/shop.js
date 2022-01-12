const express = require('express');
const router = express.Router();
// setup paths
const path = require('path');

const rootDir = require('../util/path');

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    // send a response here.
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const products = adminData.products;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});


module.exports = router;