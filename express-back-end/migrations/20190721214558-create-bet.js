'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      match: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stakes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bet_status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bets');
  }
};