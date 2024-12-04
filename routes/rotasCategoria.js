const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const categorieController = require('../controllers/categoriaController');

router.post('/', auth, categorieController.criarCategoria);
router.get('/', auth, categorieController.listarcategoria);

module.exports = router;
