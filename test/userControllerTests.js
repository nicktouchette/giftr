var should = require('should'),
    sinon = require('sinon');

describe('User Controller Tests', function() {
  describe('Post', function() {
    it('should not allow an empty email on post', function() {
      var User = function(user){this.save = function(){};};

      var req = {
        body: {
          username: 'Test'
        }
      };

      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      };

      var userController = require('../controllers/userController')(User);

      userController.create(req, res);

      res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
      res.send.calledWith('Email is required').should.equal(true);
    });
  });
});
