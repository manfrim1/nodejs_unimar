const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.criarUser = async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao criar usuário");
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { Usuario, pass } = req.body;
    const foundUser = await User.findOne({ where: { user } });
  
    if (!foundUser || !(await bcrypt.compare(pass, foundUser.pass))) {
      return res.status(400).send("Erro login");
    }
  
    const token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro");
  }
};

