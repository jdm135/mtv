var express = require('express');
var router = express.Router();

var Revive = require('../models/revive');
var Launch = require('../models/launch');
var User = require('../models/user');


// Revive.create(
//   {
//     reviveShowName: "Family Guy",
//     reviveGoal: 10000.00,
//     reviveTitle: "The family guy Rules!",
//     revivePhoto: "http://ib3.huluim.com/show/54?region=US&size=952x536",
//     reviveVideo: "https://www.youtube.com/embed/uf2-5uDEkS8",
//     reviveStory: "Air plant edison bulb shabby chic, cred af dreamcatcher quinoa sriracha copper mug sustainable craft beer irony    austin humblebrag la croix. Fingerstache messenger bag lyft gluten-free quinoa four loko, live-edge polaroid etsy health goth. Trust fund pitchfork woke wayfarers blue bottle. Godard affogato scenester next level banjo, whatever migas keffiyeh. Intelligentsia vexillologist photo booth sartorial, helvetica paleo trust fund occupy mumblecore quinoa. Banh mi single-origin coffee salvia godard PBR&B small batch, dreamcatcher shabby chic. Asymmetrical fixie aesthetic snackwave la croix, kitsch health goth gochujang offal bicycle rights put a bird on it ethical."
//   }
// );


// REVIVE

router.get('/revive', isLoggedIn, function(req, res, next) {
  Revive.find({}, function (err, revives) {
    if(err) {
      console.log(err)
    } else {
      res.render('campaigns/revive', {revives: revives});
    }
  });
});

router.post('/revive', isLoggedIn, function(req, res, next) {
  var reviveShowName = req.body.reviveShowName;
  var reviveGoal = req.body.reviveGoal;
  var reviveTitle = req.body.reviveTitle;
  var revivePhoto = req.body.revivePhoto;
  var reviveVideo = req.body.reviveVideo;
  var reviveStory = req.body.reviveStory;
  var author = {
    id: req.user._id,
    username: req.user.firstName
  };
  var newRevive = {reviveShowName: reviveShowName, reviveGoal: reviveGoal, reviveTitle: reviveTitle, revivePhoto: revivePhoto, reviveVideo: reviveVideo, reviveStory: reviveStory, author: author};
  Revive.create(newRevive, function(err, newlyCreatedRevive) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('revive');
    }
  });
});

router.get('/revive/new', isLoggedIn, function(req, res, next) {
  res.render('campaigns/new_revive');
});

router.get('/revive/:id', function(req, res, next) {
  Revive.findById(req.params.id, function(err, foundRevive) {
    if(err) {
      console.log(err);
    } else {
      res.render('campaigns/show_revive', {revive: foundRevive});
    }
  });
});




//LAUNCH

router.get('/launch', isLoggedIn,function(req, res, next) {
  Launch.find({}, function (err, launches) {
    if(err) {
      console.log(err)
    } else {
      res.render('campaigns/launch', {launches: launches});
    }
  });
});

router.post('/launch', isLoggedIn, function(req, res, next) {
  var launchShowName = req.body.launchShowName;
  var launchGoal = req.body.launchGoal;
  var launchTitle = req.body.launchTitle;
  var launchPhoto = req.body.launchPhoto;
  var launchVideo = req.body.launchVideo;
  var launchStory = req.body.launchStory;
  var author = {
    id: req.user._id,
    username: req.user.firstName
  };
  var newLaunch = {launchShowName: launchShowName, launchGoal: launchGoal, launchTitle: launchTitle, launchPhoto: launchPhoto, launchVideo, launchStory: launchStory, author: author};
  Launch.create(newLaunch, function(err, newlyCreatedLaunch) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('launch');
    }
  });
});

router.get('/launch/new', isLoggedIn, function(req, res, next) {
  res.render('campaigns/new_launch');
});

router.get('/launch/:id', function(req, res, next) {
  Launch.findById(req.params.id, function(err, foundLaunch) {
    if(err) {
      console.log(err);
    } else {
      res.render('campaigns/show_launch', {launch: foundLaunch});
    }
  });
});






module.exports = router;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/users/login');
}
