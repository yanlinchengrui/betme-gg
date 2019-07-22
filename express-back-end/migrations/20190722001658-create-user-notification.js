'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Notification', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      bet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bets',
          key: 'id'
        }
      },    
      notification_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Notifications',
          key: 'id'
        }
      },    
      read: {
        type: Sequelize.BOOLEAN,
      },
      text: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Notification');
  }
};