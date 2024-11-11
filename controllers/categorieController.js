const { Categorie } = require('../models');

exports.createCategorie = async (req, res) => {
  try {
    const newCategorie = await Categorie.create(req.body);

    res.status(201).json(newCategorie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating categorie' });
  }
};

exports.listCategories = async (req, res) => {
  try {
    const Categories = await Categorie.findAll();

    if (Categories.length === 0) {
      return res.sendStatus(204);
    }
  
    res.status(200).json(Categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error listing categories' });
  }
};
