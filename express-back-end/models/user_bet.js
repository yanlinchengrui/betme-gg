'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Bet = sequelize.define('User_Bet', {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    bet_id: {
      type: Sequelize.INTEGER,
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
  }, {});

  return User_Bet;
};