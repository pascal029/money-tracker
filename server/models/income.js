"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Income.belongsTo(models.Saldo);
    }
  }
  Income.init(
    {
      SaldoId: DataTypes.INTEGER,
      source: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Income source can't be empty`,
          },
          notEmpty: {
            msg: `Income source can't be empty`,
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
      modelName: "Income",
    }
  );
  return Income;
};
