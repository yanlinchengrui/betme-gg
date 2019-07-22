'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Notification = sequelize.define('User_Notification', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bet_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notification_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  return User_Notification;
};