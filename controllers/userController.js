  var userController = function(User) {

  var index = function(req, res, next) {
    User.find({})
    .then(function(users) {
      res.format({
        json: function() {
          res.json(users);
        },
        html: function() {
          res.render('users/index', { users: users });
        }
      });
    }, function(err) {
      return next(err);
    });
  };

  var create = function(req, res, next) {
    var user = new User(req.body);
    user.save()
    .then(function(saved) {
      res.format({
        json: function() {
          res.json(user);
        },
        html: function() {
          res.redirect('/users');
        }
      });
    }, function(err) {
      return next(err);
    });
  };

  var newForm = function(req, res, next) {
    var user = {
      email: '',
      username: ''
    };
    res.render('users/new', { user: user });
  };

  var edit = function(req, res, next) {
    User.findById(req.params.id)
    .then(function(user) {
      res.format({
        json: function() {
          res.json(user);
        },
        html: function() {
          res.render('users/edit', { user: user });
        }
      });
    }, function(err) {
      return next(err);
    });
  };

  var destroy = function(req, res, next) {
    User.findByIdAndRemove(req.params.id)
    .then(function() {
      res.format({
        json: function() {
          res.json(req.status);
        },
        html: function() {
          res.redirect('/users');
        }
      });
    }, function(err) {
      return next(err);
    });
  };

  var update = function(req, res, next) {
    var userUpdateVars = {};
    var userProfile;

    User.findById(req.params.id)
    .then (function(query) {
      userProfile = query;
      return User.findOne({'local.email': req.body.email});
    })
    .then (function(user) {
      if (req.body.email !== userProfile.local.email) {
        if (!user) {
          return User.findByIdAndUpdate(req.params.id, {$set: {'local.email': req.body.email}});
        } else {
          throw new Error("Email already exists");
        }
      }
    })
    .then(function() {
      if (req.body.password !== "") {
        userUpdateVars['local.password'] = currentUser.encrypt(req.body.password);
      }
      if (req.body.permission !== "" && userProfile.permission !== req.body.permission) {
        userUpdateVars.permission = req.body.permission;
      }
      if (req.body.userName !== "" && userProfile.userName !== req.body.userName) {
        userUpdateVars.userName = req.body.userName;
      }
      if (req.body.location !== "" && userProfile.location !== req.body.location) {
        userUpdateVars.location = req.body.location;
      }
      if (userProfile.image !== req.body.image) {
        userUpdateVars.image = req.body.image;
      }
      return User.findByIdAndUpdate(req.params.id, {$set: userUpdateVars});
    })
    .then(function(query) {
      res.format({
        json: function() {
          res.json(req.status);
        },
        html: function() {
          res.redirect('/users/' + req.params.id);
        }
      });
    }, function(err) {
      if (err) {
        res.redirect('/users/' + req.params.id + '/edit');
      } else {
        return next(err);
      }
    });
  };

  var show = function(req, res, next) {
    User.findById(req.params.id).populate('favorites')
    .then(function(user) {
      res.format({
        json: function() {
          res.json(user);
        },
        html: function() {
          res.render('users/show', { user: user, favorites: user.favorites });
        }
      });
    }, function(err) {
      return next(err);
    });
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
