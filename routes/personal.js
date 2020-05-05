//const User = require('../models/user');
const express = require('express');
const router = express.Router();
const Routine = require('../models/routine.js');
const User = require('../models/user');
const Exercise = require('../models/exercise');
const uploadCloud = require('../config/cloudinary.js')

//middleware checks if you're logged in



router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
    return;
  }
  res.redirect('/auth/login');
});

// router.get('/personal/routine', function (req, res, next) {
//   res.render(/)
// })


router.get('/profile', function (req, res, next) {
  let query = {
    user: req.session.currentUser._id
  }
  let user1;
  User.findById(req.session.currentUser._id)
    .then(user => user1 = user)
  Routine.find(query)
  .populate('user')
    .then(routines => res.render('personal/profile', {
      routines,
      user1
    }))
    .catch(error => console.log(error));
});



router.get('/edit', function (req, res, next) {
  let query = {
    user: req.session.currentUser._id
  }
  let user1;
  User.findById(req.session.currentUser._id)
    .then(user => user1 = user)
  Routine.find(query)
    .then(routines => res.render('personal/edit', {
      routines,
      user1
    }))
    .catch(error => console.log(error));
});

//----------- Dinamic routes

router.get('/addroutine/:routineName', (req, res) =>{
  console.log(req.params)
  let name = req.params.routineName
  let user = req.session.currentUser._id
  Routine.create({user: user, name: name})
  .then(routine =>{
    User.findByIdAndUpdate({
      _id: user
    }, {
      $push: {
        routines:routine
      }
    })
    .then(res=> res.json({routine})
  )})
  .catch(err=> {
    console.log(err)
  })
})

router.get('/add/:exerciseId/:routineId',(req, res, next)=>{
  console.log(req.params)
  let {exerciseId, routineId} = req.params
  Routine.findByIdAndUpdate({
    _id: routineId
  }, {
    $push: {
      exercises:exerciseId
    }
  })
  .then(res=>console.log(res))
  .catch(err=>console.log(err))


})

router.get('/routine/:id',(req,res,next)=>{
let routineId = req.params.id
  Routine.findById(routineId)
  .populate('exercises')
  .then(routine => {
    res.render('personal/routine', routine)})
  .catch(err=>console.log(err))
})

// router.post('/:id/delete', async (req, res, next) => {
//   let query = {
//     user: req.session.currentUser._id
//   }
//   let user1;
//   await Routine.findByIdAndDelete(req.params.id)
//   await User.findById(req.session.currentUser._id)
//     .then(user => user1 = user)
//   Rouines.find(query)
//     .then(routines => res.render('personal/edit', {
//       routines,
//       user1
//     }))
//     .catch(error => {
//       console.log('Error while deleting', error);
//     })
// })


router.post('/:id/edit', uploadCloud.single('photo'), (req, res, next) => {
  let imgPath;
  let imgName;
  const {
    username,
    email
  } = req.body;
  if(req.file !== undefined) {
    imgPath = req.file.url;
    imgName = req.file.originalname;
  } else {
    imgPath = req.session.currentUser.imgPath;
    imgName = req.session.currentUser.imgName;
  }
  User.findByIdAndUpdate({
      _id: req.params.id
    }, {
      $set: {
        username,
        email,
      }
    })
    .then((user1) => {
      res.render('personal/profile',user1);
    })
    .catch(error => {
      console.log('Error while editing', error);
    })
})



module.exports = router;