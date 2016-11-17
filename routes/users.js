var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('users/signup');
});

router.get('/login', function(req, res, next) {
  res.render('users/login');
});

router.get('/dashboard', function(req, res, next) {
  res.render('users/dashboard');
});

router.get('/settings', function(req, res, next) {
  res.render('users/settings');
});


module.exports = router;
