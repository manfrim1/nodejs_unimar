const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User')(sequelize, Sequelize.DataTypes);
const Order = require('./Order')(sequelize, Sequelize.DataTypes);
const Product = require('./Product')(sequelize, Sequelize.DataTypes);
const Categorie = require('./Categorie')(sequelize, Sequelize.DataTypes);

Product.associate({ Categorie });
Order.associate({ Product });

module.exports = { sequelize, Product, Categorie, Order, User };
