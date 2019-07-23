'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('Bet', {
    match: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stakes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bet_status: {
      type: DataTypes.STRING,
    },
  }, {});
  Bet.associate = function (models) {
    Bet.belongsToMany(models.User, {
      through: 'UserBet',
      as: 'users',
      foreignKey: 'betId',
      otherKey: 'userId'
    })
  };
  return Bet;
};