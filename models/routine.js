const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema(
  {
    name: String,
    exercise: [{type: Schema.Types.ObjectId, ref: 'Exercise',default:'myfe'}],
    description: String
  }
);

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
