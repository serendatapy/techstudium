'use strict';

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
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
      explanation: {
        type: DataTypes.STRING,
        allowNull: false
      },
      QuestionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });

  Answer.associate = model => {
    Answer.belongsTo(model.Question);
  };

  return Answer;
}