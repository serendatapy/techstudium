'use strict';

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    tablesConfig.category,
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

  Category.associate = model => {
    Category.hasMany(model.Question);
  };

  return Category;
}