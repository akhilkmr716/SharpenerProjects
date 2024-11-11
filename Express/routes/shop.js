const express = require('express');

const productsController = require('../controllers/products');
const contactUsController = require('../controllers/contactus');

const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/contactus', contactUsController.getContactUs);

router.post('/success', contactUsController.postContactUs);

module.exports = router;