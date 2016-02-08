var staticController = function(User) {

  var index = function(req, res, next) {
    res.render('index', { title: 'Home' });
  };

  return {
    index: index,
  };
};

module.exports = staticController;
