const { Expense, Saldo, sequelize } = require("../models");

class ExpenseController {
  static async getExpenses(req, res, next) {
    try {
      const expenses = await Expense.findAll({
        attributes: [[sequelize.fn("sum", sequelize.col("amount")), "amount"]],
      });

      console.log(expenses);
      res.status(201).json({});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ExpenseController;
