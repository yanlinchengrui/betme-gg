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
      notNull: true
    },
    password: {
      type: DataTypes.STRING,
      notNull: true
    },
    avatar_url: {
      type: DataTypes.STRING,
      isURL: true
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};