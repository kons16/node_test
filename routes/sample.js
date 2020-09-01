var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("Access root node.")
  let weekArray = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
  let param = {
      title: "EJSサンプルページ",
      description: "EJSを使用したサンプルページです",
      week: weekArray
  }
  res.render("index", param)
});

router.get('/fruite', function(req, res, next) {
  console.log("Access root node.")
  let weekArray = ["りんご"]
  let param = {
      title: "",
      description: "",
      week: weekArray
  }
  res.render("index", param)
});

module.exports = router;
