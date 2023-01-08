const { User, Saldo } = require("../models");
const { compare } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");

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
      const { email, password } = req.body;

      if (!email || !password) throw { name: "credential_required" };

      const user = await User.findOne({ where: { email } });

      if (!user) throw { name: `invalid_credential` };

      const isValidPassword = compare(password, user.password);

      if (!isValidPassword) throw { name: `invalid_credential` };

      const payload = {
        id: user.id,
      };

      const access_token = sign(payload);

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
