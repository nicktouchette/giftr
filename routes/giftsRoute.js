var express = require('express');

var routes = function(Gift){
  var router = express.Router();
  var giftController = require('../controllers/giftController')(Gift);

  router.route('/')
    .post(giftController.create)
    .get(giftController.index);

  router.route('/new')
    .get(giftController.newForm);

  router.route('/:id/edit')
    .get(requireRole('admin'), giftController.edit);

  router.route('/:id/favorite')
    .get(authenticate, giftController.favorite);

  router.route('/:id')
    .delete(requireRole('admin'), giftController.destroy)
    .patch(requireRole('admin'), giftController.update)
    .get(giftController.show);

  return router;
};

module.exports = routes;
