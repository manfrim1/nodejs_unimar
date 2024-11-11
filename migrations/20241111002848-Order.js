'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      ProductId: Sequelize.INTEGER,
      quantity: Sequelize.INTEGER,
      data: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
