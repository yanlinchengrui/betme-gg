'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_bet = sequelize.define('user_bet', {
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

  return user_bet;
};