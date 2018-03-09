var  mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  }
});

module.exports = {User};
