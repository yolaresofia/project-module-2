const express = require('express');
const router = express.Router();
const Routine = require('../models/routine.js');
const Exercise = require('../models/exercise');


router.get('/',  (req, res, next)=> {
  res.render('home');
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
  
  let object = req.body.pictureObj
  let typeSelected = req.body.selected
  Exercise.find({type:typeSelected, element: object})
    .then(exercises => { 
      
       console.log(exercises)
       res.json({ exercises :exercises});
    })
    .catch(error => console.log(error));
});



router.post("/api", (req, res) => {
  // our unix timestamp
  const unixTimeCreated = new Date().getTime();
  // add our unix time as a "created" property and add it to our request.body
  const user = req.session.currentUser._id;
  const newData = Object.assign({
    "created": unixTimeCreated
  }, req.body)

  // add in our data object to our database using .insert()
  Picture.create({
      user: user,
      data: newData
    })
    .then(() => {
      res.redirect('/main');
    })
    .catch(error => {
      console.log(error);
    });
})

router.get('/profiles/:id',  (req, res, next)=> {
  let userId = req.params.id;
  Picture.find({user: req.params.id})
    .populate('user')
    .then(pictures => { 
      let {name, website, city, email, imgPath} = pictures[0].user;
      res.render('profiles', { pictures, name, email, city, website, imgPath, userId})
    })
    .catch(error => console.log(error));
});



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