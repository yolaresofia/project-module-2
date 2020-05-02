const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema(
  {
    name: String,
    exercises: [{type: Schema.Types.ObjectId, ref: 'Exercise'}],
    description: String
  }
);

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
