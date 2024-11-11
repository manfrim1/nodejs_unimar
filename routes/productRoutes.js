const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productController = require('../controllers/productController');

router.post('/', auth, productController.createProduct);
router.get('/', auth, productController.listProducts);
router.put('/:id', auth, productController.updateProduct);

module.exports = router;
