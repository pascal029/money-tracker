const IncomeController = require("../controllers/incomeController");
const authentication = require("../middlewares/authentication");
const router = require("express").Router();

router.get("/", IncomeController.getIncome);
router.post("/", IncomeController.addIncome);
router.patch("/", IncomeController.updateIncome);
router.delete("/", IncomeController.deleteIncome);

module.exports = router;
