const { Income, Saldo } = require("../models");

class IncomeController {
  static async addIncome(req, res, next) {
    try {
      const { SaldoId, source, amount } = req.body;

      const newIncome = await Income.create({ SaldoId, source, amount });

      res.status(201).json({ message: "Success add Income" });
    } catch (error) {
      next(error);
    }
  }

  static async getIncome(req, res, next) {
    try {
      const { id } = req.user;

      const saldo = await Income.findOne({ where: { UserId: id } });

      res.status(200).json({ saldo: saldo.amount });
    } catch (error) {
      next(error);
    }
  }

  static async updateIncome(req, res, next) {
    try {
      const { amount, source, id } = req.body;

      await Income.update({ amount, source }, { where: id });

      res.status(200).json({ message: "income updated" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteIncome(req, res, next) {
    try {
      const { id } = req.body;

      await Income.destroy({ where: { id } });
      res.status(200).json({ message: "income deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IncomeController;
