const express = require("express");
const router = express.Router();


router.get("/gym", (req, res) => {
  res.render("community/gym");
});

// router.get('/gym/live', (req, res) => {
//     res.render('community/live')
// })

module.exports = router;