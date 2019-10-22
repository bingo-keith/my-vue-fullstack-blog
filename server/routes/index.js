var express = require('express');
var router = express.Router();
var user = require('../modules/handle');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SQL for MySQL' });
});
router.get('/queryAllInfo', function(req, res, next) {
    user.queryAllBaseInfo(req, res, next);
});
router.get('/querySkill', function(req, res, next) {
    user.queryUserSkills(req, res, next);
});
router.get('/queryAbility', function(req, res, next) {
    user.queryUserAbilities(req, res, next);
});
router.get('/queryUserById', function(req, res, next) {
    user.queryById(req, res, next);
});
router.post('/addUser', function(req, res, next) {
    user.add(req, res, next);
});

router.get('/deleteUser', function(req, res, next) {
    user.delete(req, res, next);
});
router.get('/update', function(req, res, next) {
    res.render('update');
});
router.post('/updateUser', function(req, res, next) {
    user.update(req, res, next);
});
module.exports = router;