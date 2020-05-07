const express = require('express');
const router = express.Router();
const Routine = require('../models/routine.js');
const Exercise = require('../models/exercise');
const User = require('../models/user');


router.get('/',  (req, res, next)=> {
  res.render('home', {layout: false});
});
router.get('/main',  (req, res, next)=> {
  res.render('main');
});



router.get('/about',  (req, res, next)=> {
  res.render('about');
});

router.get('/results',  (req, res, next)=> {
  res.render('results');
});


router.post('/main',  (req, res, next) =>{
  let objectName = req.body.pictureObj
  let typeSelected = req.body.selected
  Exercise.find({type:typeSelected, element: objectName})
    .then(exercises => { 
      User.findById(req.session.currentUser._id)
      .populate('routines')
      .then(user =>{
        res.json({ exercises, user});
      })
    })
    .catch(error => console.log(error));
});


router.get('/profile/routine/:id', (req, res, next) => {
  



})





router.get('/connect/:id', (req, res, next) => {
    Picture.findById(req.params.id)
    .populate('user', 'name')
    .then(picture => {
      res.render('single-piece', { picture });
    })
    .catch(error => {
      console.log(error);
    });
})

module.exports = router;