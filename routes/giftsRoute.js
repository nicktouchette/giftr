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
    .get(giftController.edit);

  router.route('/:id')
    .delete(giftController.destroy)
    .put(giftController.update)
    .get(giftController.show);

  return router;
};

module.exports = routes;
