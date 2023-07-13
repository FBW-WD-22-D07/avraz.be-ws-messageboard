const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: String,
  ip: String,
  hash: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  dates: {
    registered: {
      type: Date,
      default: Date.now()
    }
  },
  messages: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);
