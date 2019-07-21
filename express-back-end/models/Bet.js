'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('Bet', {
    match: {
      type: DataTypes.STRING,
      unique: true,
      notNull: true
    },
    owner: {
      type: DataTypes.STRING,
      notNull: true
    },
    description: {
      type: DataTypes.STRING,
      notNull: true
    },
    stakes: {
      type: DataTypes.STRING,
      notNull: true
    },
    bet_status: {
      type: DataTypes.STRING,
      notNull: true
    },
  }, {});
  Bet.associate = function (models) {
    // associations can be defined here
  };
  return Bet;
};