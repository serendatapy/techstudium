'use strict';

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    tablesConfig.question,
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });


  Question.associate = model => {
    Question.belongsTo(model.Category);
  };

  Question.associate = model => {
    Question.hasMany(model.Answer);
  };

  return Question;
}