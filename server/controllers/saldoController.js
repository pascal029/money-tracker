const { Saldo } = require("../models");

class SaldoController {
  static async getSaldo(req, res, next) {
    try {
      const { id } = req.user;

      const saldo = await Saldo.findOne({ where: { UserId: id } });

      res.status(200).json({ "Total Balance": saldo.amount });
    } catch (error) {
      next(error);
    }
  }
  static async updateSaldo(req, res, next) {
    try {
      const { amount } = req.body;
      const { id } = req.user;

      const saldo = await Saldo.findOne({ where: { UserId: id } });
      const newSaldo = saldo.amount + +amount;
      await Saldo.update({ amount: newSaldo }, { where: { UserId: id } });

      res.status(200).json({ message: `Balance updated` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SaldoController;
