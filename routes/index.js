var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var revivals = [
    {name: 'The Simpsons', goal: 1000.00, img: 'images/simpsons.jpg'},
    {name: 'Suits', goal: 2000.00, img: 'images/suits.jpg'},
    {name: 'Modern Family', goal: 3000.00, img: 'images/modern-family.jpg'},
    {name: 'The Family Guy', goal: 10000.00, img: 'images/family-guy.jpg'}
  ]
  res.render('pages/index', {revivals: revivals});
});

router.get('/pages/revive', isLoggedIn, function(req, res, next) {
  res.render('pages/revive');
});

router.post('/pages/revive', isLoggedIn, function(req, res, next) {

});


router.get('/pages/launch', isLoggedIn,function(req, res, next) {
  res.render('pages/launch');
});

router.post('/pages/launch', isLoggedIn,function(req, res, next) {

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

// router.get('/pages/campaign', function(req, res, next) {
//   res.render('pages/campaign');
// });



module.exports = router;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/users/login');
}
