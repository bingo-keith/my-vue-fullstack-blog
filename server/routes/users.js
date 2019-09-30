var express = require('express');
var router = express.Router();
var userData = require('../modules/handle');

/* GET users listing. */
router.get('/queryAll', function(req, res, next) {
  userData.queryAll(req, res, next)
});

router.get('/queryById', function(req, res, next) {
  userData.queryById(req, res, next)
});

module.exports = router;
