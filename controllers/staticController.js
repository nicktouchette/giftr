var passport = require('passport');

var staticController = function(User) {

  var index = function(req, res, next) {
    res.render('index', { title: 'Home' });
  };

  var loginForm = function(req, res, next) {
    res.render('login', { title: 'Login' });
  };

  var signupForm = function(req, res, next) {
    res.render('signup', { title: 'Signup' });
  };

  var login = function(req, res, next) {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect : '/gifts/',
      failureRedirect : '/login',
      failureFlash : true
    });

    return loginProperty(req, res, next);
  };

  var logout = function(req, res, next) {
    req.logout();
    res.redirect('/');
  };

  var signup = function(req, res, next) {
    var signUpStrategy = passport.authenticate('local-signup', {
      successRedirect : '/gifts/',
      failureRedirect : '/signup',
      failureFlash : true
    });

    return signUpStrategy(req, res, next);
  };

  return {
    index: index,
    login: login,
    logout: logout,
    signup: signup,
    signupForm: signupForm,
    loginForm: loginForm
  };
};

module.exports = staticController;
