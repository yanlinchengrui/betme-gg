const Sequelize = require('sequelize');
const db = require('../config/database')

const User = db.define('user', {
  user_name: {
    type: Sequelize.STRING,
    unique: true,
    notNull: true
  },
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  favorite_team: {
    type: Sequelize.STRING,
  },
  favorite_game: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    isEmail: true,
    notNull: true
  },
  password: {
    type: Sequelize.STRING,
    notNull: true
  },
  avatar_url: {
    type: Sequelize.STRING,
    isURL: true
  }
})

module.exports = User;