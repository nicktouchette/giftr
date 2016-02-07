var userController = function(User) {

  var index = function(req, res, next) {
    res.send('INDEX');
  };

  var create = function(req, res, next) {
    var user = new User(req.body);

    if(!req.body.email) {
      res.status(400);
      res.send('Email is required');
    }
    else {
      user.save();
      res.status(201);
      res.send(user);
    }
  };

  var newForm = function(req, res, next) {
    res.send('NEW FORM');
  };

  var edit = function(req, res, next) {
    res.send('EDIT');
  };

  var destroy = function(req, res, next) {
    res.send('DESTROY');
  };

  var update = function(req, res, next) {
    res.send('UPDATE');
  };

  var show = function(req, res, next) {
    res.send('SHOW');
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

module.exports = userController;
