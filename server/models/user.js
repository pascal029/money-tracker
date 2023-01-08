"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Saldo);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: `Email already registered`,
        },
        validate: {
          notNull: {
            msg: `Email can't be empty`,
          },
          notEmpty: {
            msg: `Email can't be empty`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Password can't be empty`,
          },
          notEmpty: {
            msg: `Password can't be empty`,
          },
          len: {
            args: [8, 32],
            msg: `Password must between 8 and 32 characters`,
          },
        },
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Full Name can't be empty`,
          },
          notEmpty: {
            msg: `Full name can't be empty`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
