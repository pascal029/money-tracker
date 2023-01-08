"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Saldo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Saldo.belongsTo(models.User);
      Saldo.hasMany(models.Income);
      Saldo.hasMany(models.Expense);
    }
  }
  Saldo.init(
    {
      UserId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Saldo",
    }
  );
  return Saldo;
};
