const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    name: String,
    description: String,
    type: String,
    imgPath: String,
    element: String,
    intensity: String
  }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
