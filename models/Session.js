const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    min: Date.now,
  },
  time: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model('session', SessionSchema);
