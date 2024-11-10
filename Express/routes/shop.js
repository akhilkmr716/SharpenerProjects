const path = require('path');

const express = require('express');

const rootDir = require("../util/path");


const router = express.Router();

router.get('/',(req, res, next) => {
    console.log(__dirname);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/contactus',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

router.post('/success',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form-submit.html'));
});

module.exports = router;