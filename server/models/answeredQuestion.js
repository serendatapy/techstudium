'use strict';

const tablesConfig = global.gConfig.mysql.tables;

module.exports = (sequelize, DataTypes) => {
  const AnsweredQuestion = sequelize.define(
    tablesConfig.answeredQuestion,
    {
      answeredCorrectly: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      QuestionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });

  AnsweredQuestion.associate = model => {
    AnsweredQuestion.belongsTo(model.User);
  };

  return AnsweredQuestion;
}