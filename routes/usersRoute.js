var express = require('express');

var routes = function(User){
  var router = express.Router();
  var userController = require('../controllers/userController')(User);

  router.route('/')
    .post(authenticate, requireRole('admin'), userController.create)
    .get(authenticate, requireRole('admin'), userController.index);

  router.route('/new')
    .get(authenticate, requireRole('admin'), userController.newForm);

  router.route('/:id/edit')
    .get(authenticate, userController.edit);

  router.route('/:id')
    .delete(authenticate, userController.destroy)
    .patch(authenticate, userController.update)
    .get(authenticate, userController.show);

  return router;
};

module.exports = routes;
