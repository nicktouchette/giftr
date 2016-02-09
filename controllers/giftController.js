var giftController = function(Gift) {

  var index = function(req, res, next) {
    Gift.find({})
      .then(function(gifts){
        res.format({
          json: function(){
            res.json(gifts);
          },
          html: function(){
            res.render('gifts/index', { gifts: gifts });
          }
        });
      }, function(err){
        return next(err);
      });
  };

  var create = function(req, res, next) {
    var gift = new Gift(req.body);
    gift.save()
    .then(function(saved){
        res.format({
          json: function(){
            res.json(gifts);
          },
          html: function(){
            res.redirect('/gifts');
          }
        });
      }, function(err){
        return next(err);
      });
  };

  var newForm = function(req, res, next) {
    var gift = {
      name: '',
      price: '',
      categories: [],
      recipientType: [],
      link: '',
      imageUrl: '',
      description: '',
      tags: {},
      rating: null,
    };
    res.render('gifts/new', { gift: gift });
  };

  var edit = function(req, res, next) {
    Gift.findById(req.params.id)
    .then(function(gift) {
      res.format({
        json: function(){
          res.json(gift);
        },
        html: function() {
          res.render('gifts/edit', { gift: gift });
        }
      });
    }, function(err) {
      return next(err);
    });
  };

  var destroy = function(req, res, next) {
    Gift.findByIdAndRemove(req.params.id)
    .then(function(){
      res.format({
        json: function() {
          res.json(req.status);
        },
        html: function() {
          res.redirect('/gifts');
        }
      });
    }, function(err) {
      return next(err);
    });
  };

  var update = function(req, res, next) {
    Gift.findByIdAndUpdate(req.params.id, req.body)
    .then(function(query) {
      res.format({
        json: function() {
          res.json(req.status);
        },
        html: function() {
          res.redirect('/gifts/' + res.params.id);
        }
      });
    }, function(err) {
      return next(err);
    });
  };

  var show = function(req, res, next) {
    Gift.findById(req.params.id)
    .then(function(gift) {
      res.format({
        json: function() {
          res.json(gift);
        },
        html: function() {
          res.render('gifts/show', { gift: gift });
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

module.exports = giftController;
