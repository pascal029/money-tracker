const { Expense, Saldo } = require("../models");

class ExpenseController {
  static async addIncome(req, res, next) {
    try {
      res.status(201).json({ message: "Success add Expense" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ExpenseController;
