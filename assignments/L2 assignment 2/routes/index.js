const res = require("express/lib/response");
const path = require("path");

express = require("express");
router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "users.html"));
});

module.exports = router;
