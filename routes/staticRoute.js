var express = require('express');

var routes = function(User){
  var router = express.Router();
  var staticController = require('../controllers/staticController')(User);

  router.route('/')
    .get(staticController.index);

  return router;
};

module.exports = routes;
