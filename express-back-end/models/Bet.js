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
    Bet.belongsToMany(models.User, {
      through: 'UserBet',
      as: 'users',
      foreignKey: 'betId',
      otherKey: 'userId'
    })
  };
  return Bet;
};