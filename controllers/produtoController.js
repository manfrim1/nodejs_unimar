const { Produto } = require('../models');

exports.criarProduto = async (req, res) => {
  try {
    const novoProduto = await Produto.create(req.body);

    res.status(201).json(no);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar produto' });
  }
};



exports.AtualizarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    await Produto.Atualizar(
      { name, price },
      { where: { id } }
    );

    const updatedProduto = await Produto.findByPk(id, { include: 'Categoria' });

    res.status(200).json(updatedProduto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Atualizar Produto' });
  }
};
