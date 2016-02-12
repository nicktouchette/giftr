var express = require('express');

var routes = function(Gift){
  var router = express.Router();
  var giftController = require('../controllers/giftController')(Gift);

  router.route('/')
    .post(authenticate, giftController.create)
    .get(authenticate, giftController.index);

  router.route('/new')
    .get(requireRole('admin'), giftController.newForm);

  router.route('/:id/edit')
    .get(requireRole('admin'), giftController.edit);

  router.route('/:id/favorite')
    .post(authenticate, giftController.favorite);

  router.route('/:id')
    .delete(requireRole('admin'), giftController.destroy)
    .patch(requireRole('admin'), giftController.update)
    .get(giftController.show);

  return router;
};

module.exports = routes;
