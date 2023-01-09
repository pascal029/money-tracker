const SaldoController = require("../controllers/saldoController");
const authentication = require("../middlewares/authentication");
const router = require("express").Router();

router.use(authentication);
router.get("/", SaldoController.getSaldo);
router.put("/", SaldoController.updateSaldo);

module.exports = router;
