var giftController = function(Gift) {

  var index = function(req, res, next) {
    res.send('INDEX');
  };

  var create = function(req, res, next) {
    var gift = new Gift(req.body);
      gift.save();
  };

  var newForm = function(req, res, next) {
    res.send('NEW GIFT FORM');
  };

  var edit = function(req, res, next) {
    res.send('GIFT EDIT');
  };

  var destroy = function(req, res, next) {
    res.send('GIFT DESTROY');
  };

  var update = function(req, res, next) {
    res.send('GIFT UPDATE');
  };

  var show = function(req, res, next) {
    res.send('GIFT SHOW');
  };

  return {
    index: index,
    create: create,
    newForm: newForm,
    edit: edit,
    destroy: destroy,
    update: update,
    show: show
  };
};

module.exports = giftController;
