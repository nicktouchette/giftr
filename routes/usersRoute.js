var express = require('express');

var routes = function(User){
  var router = express.Router();
  var userController = require('../controllers/userController')(User);

  router.route('/')
    .post(userController.create)
    .get(userController.index);

  router.route('/new')
    .get(userController.newForm);

  router.route('/:id/edit')
    .get(userController.edit);

  router.route('/:id')
    .delete(userController.destroy)
    .patch(userController.update)
    .get(userController.show);

  return router;
};

module.exports = routes;
