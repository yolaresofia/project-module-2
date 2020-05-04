const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Routine = require('../models/routine');

const router = express.Router();
const bcryptSalt = 10;

router.get('/signup', (req, res, next) => {
  res.render('auth/signup', {
    errorMessage: ''
  });
});

router.post("/signup", (req, res, next) => {
  const usernameInput = req.body.username;
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  if (emailInput === "" || passwordInput === "") {
    res.render("auth/signup", {
      errorMessage: "Enter both email and password to sign up.",
    });
    return;
  }

  User.findOne(
    { email: emailInput, username: usernameInput },
    "_id",
    (err, existingUser) => {
      if (err) {
        next(err);
        return;
      }

      if (existingUser !== null) {
        res.render("auth/signup", {
          errorMessage: `The email or username ${usernameInput} already exist in our database, please try again.`,
        });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashedPass = bcrypt.hashSync(passwordInput, salt);
      
      const userSubmission = {
        username: usernameInput,
        email: emailInput,
        password: hashedPass
      };

      const theUser = new User(userSubmission);

      theUser.save((err,user) => {
        if (err) {
          res.render("auth/signup", {
            errorMessage: "Something went wrong. Try again later.",
          });
          return;
        }
      
        const routine = {
          user: user._id,
          name: 'My first Routine',
          exercises: [],
          description: ''
        }

        Routine.create(routine, (err,newRoutine)=>{
          if (err) {
            res.render("auth/signup", {
              errorMessage: "Something went wrong. Try again later.",
            });
            return;
          }
          User.findByIdAndUpdate(user._id, {$push : { routines: newRoutine._id}}, (err,updatedUser)=>{
            req.session.currentUser = updatedUser;
            res.redirect("/main");
          })
          
        })
        
        
       
      });
    }
  );
});
router.get('/login', (req, res, next) => {
    res.render('auth/login', {
      errorMessage: ''
    });
  });

  router.post('/login', (req, res, next) => {
    const emailInput = req.body.email;
    const passwordInput = req.body.password;
  
    if (emailInput === '' || passwordInput === '') {
      res.render('auth/login', {
        errorMessage: 'Enter both email and password to log in.'
      });
      return;
    }
  
    User.findOne({ email: emailInput }, (err, theUser) => {
      if (err || theUser === null) {
        res.render('auth/login', {
          errorMessage: `There isn't an account with email ${emailInput}.`
        });
        return;
      }
  
      if (!bcrypt.compareSync(passwordInput, theUser.password)) {
        res.render('auth/login', {
          errorMessage: 'Invalid password.'
        });
        return;
      }
  
      req.session.currentUser = theUser;
      res.redirect('/main');
    });
  });

  router.get('/logout', (req, res, next) => {
    if (!req.session.currentUser) {
      res.redirect('/main');
      return;
    }
  
    req.session.destroy((err) => {
      if (err) {
        next(err);
        return;
      }
  
      res.redirect('/main');
    });
  });
    

module.exports = router;