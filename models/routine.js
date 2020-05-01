const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema(
  {
    name: String,
    outines: [{type: Schema.Types.ObjectId, ref: 'Excercise'}],
    description: String
  }
);

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
