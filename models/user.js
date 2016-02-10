var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Gifts = require('gift');

var userSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String
  },
  permission: {
    type: String,
    default: 'user'
  },
  favorites: { type: Schema.ObjectId, ref: 'Gift' }
});

userSchema.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
userSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
