const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    user: DataTypes.STRING,
    pass: DataTypes.STRING,
  });
  
  User.beforeCreate(async (user) => {
    user.pass = await bcrypt.hash(user.pass, 10);
  });

  return User;
};
