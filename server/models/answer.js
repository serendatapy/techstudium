'use strict';

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => sequelize.define(
  tablesConfig.answer,
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    explanation : {
      type: DataTypes.STRING,
      allowNull: false
    }
  });