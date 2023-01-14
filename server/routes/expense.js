const ExpenseController = require("../controllers/expenseController");

const router = require("express").Router();

router.get("/", ExpenseController.getExpenses);

module.exports = router;
