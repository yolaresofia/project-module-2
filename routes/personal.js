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
    .then(user => {
      user1 = user
      return Routine.find(query)
        .populate('user')
    })
    .then(routines => {
      res.render('personal/profile', {
        routines,
        user1
      })
    })

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
    .populate('user')
    .then(routines => res.render('personal/edit', {
      routines,
      user1
    }))
    .catch(error => console.log(error));
});

//----------- Dinamic routes

router.post('/addroutine', (req, res) => {
  let name = req.body.routineValue
  let user = req.session.currentUser._id
  let newRoutine;
  Routine.create({
      user: user,
      name: name
    })
    .then(routine => {
      newRoutine = routine;
      User.findByIdAndUpdate({
          _id: user
        }, {
          $push: {
            routines: routine
          }
        })
        .populate('routines')
        .then(user => {
          console.log(user)
          res.json({
            routine: newRoutine
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
})

router.get('/:routineId/move/:exerciseId/to/:targetRoutineId', (req, res, next) => {
 
  let {routineId,exerciseId,targetRoutineId} = req.params

  Promise.all([
    Routine.findByIdAndUpdate(routineId, { $pull: { exercises: exerciseId }}),
    Routine.findByIdAndUpdate(targetRoutineId, {$push: { exercises: exerciseId }})
  ])
  .then((updatedRoutines) => {
    const sourceRoutine = updatedRoutines[0]
    const targetRoutine = updatedRoutines[1]
    res.status(202).send()
  })
  .catch(err => {
    console.log(err)
  })
})


router.get('/add/:exerciseId/:routineId', (req, res, next) => {
  let {
    exerciseId,
    routineId
  } = req.params
  Routine.findByIdAndUpdate({
      _id: routineId
    }, {
      $push: {
        exercises: exerciseId
      }
    })
    .then(rese => res.json(rese))
    .catch(err => console.log(err))
})

router.get('/routine/:id', (req, res, next) => {
  let routineId = req.params.id
  Routine.findById(routineId)
    .populate('exercises')
    .then(routine => {
      User.findById(req.session.currentUser._id)
        .populate('routines')
        .then(user => {
          user.routines = user.routines.filter(x=> x._id != routineId )
          res.render('personal/routine', {
            user,
            routine
          })
        })
        .catch(err => console.log(err))
    })
})

router.get('/:id/delete', (req, res, next) => {
  const user = req.session.currentUser._id
  const routineId = req.params.id
  Routine.findByIdAndDelete(routineId)
    .then(routine => {
      return User.findByIdAndUpdate({
        _id: user
      }, {
        $pull: {
          routines: routineId
        }
      })
    })
    .then(res.redirect('/personal/profile'))
    .catch(err => console.log(err))
})



router.get('/:routineId/exercise/:exerciseId/delete', (req, res, next) => {
  const routineId = req.params.routineId
  const exerciseId = req.params.exerciseId
  Routine.findByIdAndUpdate(routineId, {
      $pull: {
        exercises: exerciseId
      }
    })
    .then(res.redirect('/personal/profile'))
    .catch(err => console.log(err))
})



router.post('/:id/edit', uploadCloud.single('photo'), (req, res, next) => {
  let imgPath;
  let imgName;
  const {
    username,
    email
  } = req.body;
  if (req.file !== undefined) {
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
        imgPath
      }
    }, {
      new: true
    })
    .then((user1) => {
      req.session.currentUser = user1;
      // res.locals.username = 
      res.redirect('/personal/profile');
    })
    .catch(error => {
      console.log('Error while editing', error);
    })
})



module.exports = router;