const express = require('express');
const router = express.Router();
// setup paths
const path = require('path');


const productsController = require('../controllers/products');



router.get('/', productsController.getProducts);


module.exports = router;