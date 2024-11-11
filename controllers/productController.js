const { Product } = require('../models');

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating product' });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const Products = await Product.findAll({ include: 'Categorie' });

    res.status(200).json(Products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error listing products' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    await Product.update(
      { name, price },
      { where: { id } }
    );

    const updatedProduct = await Product.findByPk(id, { include: 'Categorie' });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
  }
};
