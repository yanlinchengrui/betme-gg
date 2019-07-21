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
        unique: true,
        notNull: true
      },
      owner: {
        type: Sequelize.STRING,
        notNull: true
      },
      description: {
        type: Sequelize.STRING,
        notNull: true
      },
      stakes: {
        type: Sequelize.STRING,
        notNull: true
      },
      bet_status: {
        type: Sequelize.STRING,
        notNull: true
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