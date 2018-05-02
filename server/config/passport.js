const User = require('../model/user/schema');
const configAuth = require('./auth');
const LocalStrategy = require('passport-local').Strategy;


module.exports = function(passport) {
 
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
