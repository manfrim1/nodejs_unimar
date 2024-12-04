const { Categoria } = require('../models');

exports.criarCategoria = async (req, res) => {
  try {
    const newCategoria = await Categoria.create(req.body);

    res.status(201).json(newCategoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar categoria' });
  }
};

exports.listarcategoria = async (req, res) => {
  try {
    const Categoria = await Categoria.findAll();

    res.status(200).json(Categoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Náo existem categorias' });
  }
};
