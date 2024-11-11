'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Categorie, { foreignKey: "CategorieId", as: "Categorie" });
    }
  }

  Product.init({
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      CategorieId: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'Product', });

  return Product;
};
