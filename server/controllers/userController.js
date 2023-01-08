const { User, Saldo } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, fullName } = req.body;

      const newUser = await User.create({ email, password, fullName });
      const newSaldo = await Saldo.create({ UserId: newUser.id });
      res.status(201).json({ msg: `User has been created` });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      res.status(200).json({ msg: `Login successful` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
