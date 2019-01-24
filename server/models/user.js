var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        minlength: 1,
        required: true,
        trim: true,
        type: String
    }
});

module.exports = {User};
