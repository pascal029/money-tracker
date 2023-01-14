const IncomeController = require("../controllers/incomeController");
const authentication = require("../middlewares/authentication");
const router = require("express").Router();

router.use(authentication);
router.get("/", IncomeController.getAllIncome);
router.get("/:id", IncomeController.getIncome);
router.post("/", IncomeController.addIncome);
router.patch("/", IncomeController.updateIncome);
router.delete("/", IncomeController.deleteIncome);

module.exports = router;
