const { Router } = require("express");
const router = Router();

router.post("/sign-out", (req, res) => {
  req.session = null;
  res.end();
});

module.exports = router;
