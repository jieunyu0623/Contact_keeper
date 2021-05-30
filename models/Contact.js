const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, //specific _id from the mongoDB
    ref: 'users', // Collection name in MongoDB
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: 'personal',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

ContactSchema.index({ email: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('contact', ContactSchema);
