var express = require('express');

var routes = function(User){
  var router = express.Router();
  var staticController = require('../controllers/staticController')(User);

  router.route('/')
    .get(staticController.index);

  router.route('/login')
    .get(staticController.loginForm)
    .post(staticController.login);

  router.route('/logout')
    .get(staticController.logout);

  router.route('/signup')
    .get(staticController.signupForm)
    .post(staticController.signup);

  return router;
};

module.exports = routes;
