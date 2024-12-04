const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productController = require('../controllers/produtoController');

router.post('/', auth, productController.criarProduto);
router.put('/:id', auth, productController.AtualizarProduto);

module.exports = router;
