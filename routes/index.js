var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

router.get('/pages/campaign', function(req, res, next) {
  res.render('pages/campaign');
});

router.get('/pages/revive', function(req, res, next) {
  res.render('pages/revive');
});

router.get('/pages/launch', function(req, res, next) {
  res.render('pages/launch');
});

router.get('/pages/howitworks', function(req, res, next) {
  res.render('pages/howitworks');
});

router.get('/pages/guidelines', function(req, res, next) {
  res.render('pages/guidelines');
});

router.get('/pages/faq', function(req, res, next) {
  res.render('pages/faq');
});
module.exports = router;
