'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Livros', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Roupas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Calçados', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Eletrônicos', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
