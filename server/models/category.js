'use strict';

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => sequelize.define(
  tablesConfig.category,
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });