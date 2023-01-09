const router = require("express").Router();
const user = require("./user");
const income = require("./income");
const expense = require("./expense");
const saldo = require("./saldo");

router.get("/", (req, res, next) => {
  res.status(200).json("tes");
});

router.use("/users", user);
router.use("/incomes", income);
router.use("/expenses", expense);
router.use("/saldo", saldo);

module.exports = router;
