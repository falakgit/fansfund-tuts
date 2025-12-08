const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/terms");
});

module.exports = router;