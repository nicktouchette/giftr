var giftController = function(Gift) {

  var index = function(req, res, next) {
    // console.log(req.query.categories);
    if (req.query.categories) {
      var category = {$in: Array.isArray(req.query.categories)?req.query.categories:[req.query.categories]};
    }

    if (req.query.maxPrice && req.query.minPrice) {
      var price = {$lte: req.query.maxPrice, $gte: req.query.minPrice};
    }

    if (req.query.age) {
      var ageGreater = {$lte: Number(req.query.age)};
      var ageLesser = {$gte: Number(req.query.age)};
    }

    var query = {
      recipientType: req.query.recipientType,
      'tags.gender': req.query.gender,
      price: price,
      categories: category,
      'tags.ageMin': ageGreater,
      'tags.ageMax': ageLesser,
    };

    for (var i in query) {
      if (query[i] === null || query[i] === undefined) {
        delete query[i];
      }
    }

    Gift.find(query).lean().limit(6)
      .then(function(gifts){
        res.format({
          json: function(){
            for (i=0; i < gifts.length; i++){
              if (currentUser.favorites.indexOf(gifts[i]._id) != -1) {
                gifts[i].isFavorite = true;
              }
            }
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
      price: null,
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

  var favorite = function(req, res, next) {
    Gift.findById(req.params.id)
    .then(function(gift) {
      return currentUser.favorites;
    })
    .then(function(favorites) {
      console.log(favorites.indexOf(req.params.id));
      if (favorites.indexOf(req.params.id) !== -1) {
        throw new Error("Favorite already exists");
      } else {
        currentUser.favorites.push(req.params.id);
        return currentUser.save();
      }
    })
    .then(function(saved) {
      var savedId = saved.favorites[saved.favorites.length-1];
      return Gift.findById({_id: savedId});
    })
    .then(function(savedGift) {
      res.format({
        json: function() {
          res.json(savedGift);
        },
        html: function() {
          res.render('gifts/show', { gift: savedGift });
        }
      });
    }, function(err) {
      if (err) {
        res.redirect('/gifts');
      } else {
        return next(err);
      }
    });
  };


  return {
    index: index,
    create: create,
    newForm: newForm,
    edit: edit,
    destroy: destroy,
    update: update,
    show: show,
    favorite: favorite
  };
};

module.exports = giftController;
