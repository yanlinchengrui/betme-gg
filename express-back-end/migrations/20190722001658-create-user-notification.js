'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      bet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bets',
          key: 'id'
        }
      },    
      notification_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Notifications',
          key: 'id'
        }
      },    
      read: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Notifications');
  }
};