const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  imgName: String,
  imgPath: String,
  routines: [{type: Schema.Types.ObjectId, ref: 'Routine', default: {
    name: 'my',
    exercise: [{type: Schema.Types.ObjectId, ref: 'Exercise',default:'myfe'}],
    description: 'String'
  }}]
  
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;