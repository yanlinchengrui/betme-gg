'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_name: {
      type: DataTypes.STRING,
      unique: true,
      notNull: true
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    favorite_team: {
      type: DataTypes.STRING,
    },
    favorite_game: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.STRING,
      isURL: true
    }
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Bet, {
      through: 'User_Bets',
      as: 'bets',
      foreignKey: 'user_id',
      otherKey: 'bet_id'
    });
    User.belongsToMany(models.Notification, {
      through: 'User_Notifications',
      foreignKey: 'notification_id'
    });
  };
  return User;
};