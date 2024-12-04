const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = require('./Usuario')(sequelize, Sequelize.DataTypes);
const Order = require('./Order')(sequelize, Sequelize.DataTypes);
const Product = require('./Produto')(sequelize, Sequelize.DataTypes);
const Categorie = require('./Categoria')(sequelize, Sequelize.DataTypes);

Product.associate({ Categorie });
Order.associate({ Product });

module.exports = { sequelize, Product, Categorie, Order, User };
