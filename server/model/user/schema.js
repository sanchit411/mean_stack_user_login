const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String
  },
  username:{
    type:String,
    required : true
  },
  email: {
    type: String,
    required : true
  },
  password: {
    type: String,
    required: true
  }

});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};


const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserByID = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8), null);
  newUser.save(callback);
}


