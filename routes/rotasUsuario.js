const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarioController');

router.post('/new_user', userController.criarUser);
router.post('/login', userController.loginUser);

module.exports = router;
