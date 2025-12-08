const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("pages/privacy");
});

module.exports = router;