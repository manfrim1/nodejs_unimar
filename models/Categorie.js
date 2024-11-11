'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    static associate(models) {
      Categorie.hasMany(models.Product, { foreignKey: "CategorieId", as: "Product" });
    }
  }

  Categorie.init({ name: DataTypes.STRING, }, { sequelize, modelName: 'Categorie', });

  return Categorie;
};
