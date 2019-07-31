'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Bets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false
      },
      bet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bets',
          key: 'id'
        },
        allowNull: false
      },
      termStatus: {
        type: Sequelize.BOOLEAN,
      },
      teamSelect: {
        type: Sequelize.STRING,
      },
      userWinStatus: {
        type: Sequelize.BOOLEAN,
      },
      notificationType: {
        type: Sequelize.STRING
      },
      notificationRead: {
        type: Sequelize.BOOLEAN
      },
      earnOrLost: {
        type: Sequelize.INTEGER
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Bets');
  }
};