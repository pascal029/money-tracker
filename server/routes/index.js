const router = require("express").Router();
const user = require("./user");

router.get("/", (req, res, next) => {
  res.status(200).json("tes");
});

router.use("/users", user);

module.exports = router;
