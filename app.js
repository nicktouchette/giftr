var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session'),
    flash = require('connect-flash'),
    methodOverride = require('method-override');

var uristring =
  process.env.MONGOLAB_URI ||
  'mongodb://localhost/giftAPI';

var theport = process.env.PORT || 5000;

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// Define Mongoose Schemas
var User = require('./models/user');
var Gift = require('./models/gift');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'super secret key no one can hax', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// configure passport
require('./config/passport/passport')(passport);
app.use(function (req, res, next) {
  global.currentUser = req.user;
  next();
});

// Make authenticate global so it can be used wherever an authenticate is needed.
global.authenticate = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.redirect('/');
  }
  else {
    next();
  }
};

// Make role authorization global
global.requireRole = function(role) {
  return function(req, res, next) {
    if (currentUser) {
      if (currentUser.permission === 'admin') {
        next();
      } else if (role === 'owner' && currentUser.id === req.params.id) {
        next();
      } else if (role === currentUser.permission) {
        next();
      } else {
        res.redirect('/');
      }
    } else {
      if (role === 'anon') {
        next();
      } else {
        res.redirect('/');
      }
    }
  };
};

// Define routers and attach a mongoose Model
var staticRouter = require('./routes/staticRoute')(User);
var usersRouter = require('./routes/usersRoute')(User);
var giftsRouter = require('./routes/giftsRoute')(Gift);

// Define router paths
app.use('/', staticRouter);
app.use('/users', usersRouter);
app.use('/gifts', giftsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: { status: err.status }
  });
});


module.exports = app;
