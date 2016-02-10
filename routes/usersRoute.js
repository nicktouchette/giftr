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
    .get(authenticate, requireRole('owner'), userController.edit);

  router.route('/:id')
    .delete(authenticate, requireRole('owner'), userController.destroy)
    .patch(authenticate, requireRole('owner'), userController.update)
    .get(authenticate, userController.show);

  return router;
};

module.exports = routes;
