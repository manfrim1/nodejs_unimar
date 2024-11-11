const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const categorieController = require('../controllers/categorieController');

router.post('/', auth, categorieController.createCategorie);
router.get('/', auth, categorieController.listCategories);

module.exports = router;
