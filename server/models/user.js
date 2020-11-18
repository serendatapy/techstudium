'use strict';

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    tablesConfig.user,
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

  User.associate = model => {
    User.hasMany(model.Statistic);
  };

  return User;
}