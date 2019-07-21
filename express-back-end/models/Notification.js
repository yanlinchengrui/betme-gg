'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    type: {
      type: DataTypes.STRING,
      notNull: true
    },
    description: {
      type: DataTypes.STRING,
      notNull: true
    },
  }, {});
  Notification.associate = function (models) {
    // associations can be defined here
    Notification.belongsTo(models.User)
  };
  return Notification;
};