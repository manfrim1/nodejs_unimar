module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ProductId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    data: DataTypes.DATE,
  });
  
  Order.associate = (models) => {
    Order.belongsTo(models.Product, { foreignKey: 'ProductId', as: 'Product' });
  };

  return Order;
};
