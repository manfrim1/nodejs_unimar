'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      Produto.belongsTo(models.Categorie, { foreignKey: "CategoriaId", as: "Categoria" });
    }
  }

  Product.init({
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      CategorieId: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'Produto', });

  return Produto;
};
