var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

User = require('../models/user');
Revive = require('../models/revive');
Launch = require('../models/launch');

var csrfProtection = csrf();
router.use(csrfProtection);



router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.get('/dashboard', isLoggedIn, function(req, res) {
    res.render('users/dashboard', {currentUser: req.user});
});

// res.render('users/dashboard', {revives: revives, launches: launches, currentUser: req.user});


router.get('/settings', isLoggedIn, function(req, res, next) {
  res.render('users/settings', {currentUser: req.user});
});

// router.use('/', notLoggedIn, function(req, res, next) {
//    next();
// });

router.get('/signup', function(req, res, next) {
  var messages = req.flash('error');
  res.render('users/signup', {csrfToken: req.csrfToken(), messages: messages});
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/users/dashboard',
  failureRedirect: '/users/signup',
  failureFlash: true
}));

router.get('/login', function(req, res, next) {
  var messages = req.flash('error');
  res.render('users/login', {csrfToken: req.csrfToken(), messages: messages});
});

router.post('/login', passport.authenticate('local.login', {
  successRedirect: '/users/dashboard',
  failureRedirect: '/users/login',
  failureFlash: true
}));


module.exports = router;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

// function notLoggedIn(req, res, next) {
//     if (!req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/');
// }
