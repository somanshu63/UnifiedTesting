var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/success", function (req, res, next) {
  console.log(req.body);
  res.render("index", { title: "Success" });
});
router.get("/failure", function (req, res, next) {
  res.render("index", { title: "Failure" });
});
router.post("/success", function (req, res, next) {
  console.log(req.body);
  res.render("index", { title: "post success" });
});

module.exports = router;
