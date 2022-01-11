const express = require('express');
const router = express.Router();
// setup paths
const path = require('path');

const rootDir = require('../util/path')

router.get('/', (req, res, next) => {
    // send a response here.
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router;