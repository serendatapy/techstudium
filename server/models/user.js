'use strict';

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => sequelize.define(
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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });