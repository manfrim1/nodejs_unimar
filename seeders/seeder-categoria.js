'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categorias', [
      { name: 'Eletronicos', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Imoveis', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Livros', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Automoveis', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categorias', null, {});
  }
};
