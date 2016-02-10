var express = require('express');

var routes = function(User){
  var router = express.Router();
  var staticController = require('../controllers/staticController')(User);

  router.route('/')
    .get(staticController.index);

  router.route('/login')
    .get(requireRole('anon'), staticController.loginForm)
    .post(requireRole('anon'), staticController.login);

  router.route('/logout')
    .get(authenticate, staticController.logout);

  router.route('/signup')
    .get(requireRole('anon'), staticController.signupForm)
    .post(requireRole('anon'), staticController.signup);

  return router;
};

module.exports = routes;
