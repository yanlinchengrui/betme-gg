const Sequelize = require('sequelize');
const db = require('../config/database')

const Bet = db.define('bet', {
  match: {
    type: Sequelize.STRING,
    unique: true,
    notNull: true
  },
  owner: {
    type: Sequelize.STRING,
    notNull: true
  },
  description: {
    type: Sequelize.STRING,
    notNull: true
  },
  stakes: {
    type: Sequelize.STRING,
    notNull: true
  },
  bet_status: {
    type: Sequelize.STRING,
    notNull: true
  },
})

module.exports = Bet;