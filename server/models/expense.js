"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Expense.belongsTo(models.Saldo);
    }
  }
  Expense.init(
    {
      SaldoId: DataTypes.INTEGER,
      needs: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Expense Name Can't be empty`,
          },
          notEmpty: {
            msg: `Expense Name Can't be empty`,
          },
        },
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Amount can't be empty`,
          },
          notEmpty: {
            msg: `Amount can't be empty`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Expense",
    }
  );
  return Expense;
};
