'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Bet = sequelize.define('User_Bet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bet_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    termStatus: {
      type: DataTypes.BOOLEAN,
    },
    teamSelect: {
      type: DataTypes.STRING,
    },
    userWinStatus: {
      type: DataTypes.BOOLEAN,
    },
    notificationType: {
      type: DataTypes.STRING
    },
    notificationRead: {
      type: DataTypes.BOOLEAN
    }
  }, {});

  return User_Bet;
};