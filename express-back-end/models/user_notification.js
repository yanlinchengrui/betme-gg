'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Notification = sequelize.define('User_Notification', {
    date: {
      type: sequelize.DATE,
      allowNull:false
    },
    user_id: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    bet_id: {
      type: sequelize.INTEGER,
      allowNull: false
    },    
    notification_id: {
      type: sequelize.INTEGER,
      allowNull: false
    },    
    read: {
      type: sequelize.BOOLEAN,
      allowNull: false
    },
    text: {
      type: sequelize.STRING,
      allowNull: false
    }
  }, {});

  return User_Notification;
};