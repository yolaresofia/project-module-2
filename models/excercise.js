const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const excerciseSchema = new Schema(
  {
    name: String,
    description: String,
    type: String,
    imgPath: String
    
  }
);

const Excercise = mongoose.model('Excercise', excerciseSchema);

module.exports = Excercise;
