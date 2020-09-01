var express = require('express');
var router = express.Router();

// GET /users/all ユーザー一覧の表示
router.get('/all', function(req, res, next) {
  console.log("Access root node.")
  let users = ["tom", "ken"];
  let param = {
      users: users
  }
  res.render("users_index", param)
});

module.exports = router;
