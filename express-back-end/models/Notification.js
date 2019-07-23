'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Notification.associate = function (models) {
    // associations can be defined here
    Notification.belongsTo(models.User)
  };
  return Notification;
};