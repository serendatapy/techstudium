'use strict';

const { DH_NOT_SUITABLE_GENERATOR } = require("constants");

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => sequelize.define(
  tablesConfig.statistic,
  {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });