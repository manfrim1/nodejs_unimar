'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    static associate(models) {
      Categorie.hasMany(models.Product, { foreignKey: "CategoriaId", as: "Product" });
    }
  }

  Categoria.init({ name: DataTypes.STRING, }, { sequelize, modelName: 'Categoria', });

  return Categoria;
};
