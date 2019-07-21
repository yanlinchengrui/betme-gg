const Sequelize = require('sequelize');
const db = require('../config/database')

const Notification = db.define('notification', {
  type: {
    type: Sequelize.STRING,
    notNull: true
  },
  description: {
    type: Sequelize.STRING,
    notNull: true
  },
})

module.exports = Notification;