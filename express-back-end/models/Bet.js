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
    game: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team1logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team2logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Bet.associate = function (models) {
    Bet.belongsToMany(models.User, {
      through: models.User_Bet,
      as: 'users',
      foreignKey: 'bet_id',
      otherKey: 'user_id'
    })
  };
  return Bet;
};