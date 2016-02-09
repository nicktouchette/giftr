var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    agent = request.agent(app);

describe('User Crud Test', function() {
  it.skip('Should allow a user to be created and return an _id', function(done) {
    var userPost = {email:'test@test.com', username: 'test', permission:'user'};

    agent.post('/users')
      .send(userPost)
      .expect(200)
      .end(function(err, results) {
        //assertions
        results.body.should.have.property('_id');
        // done lets supertests know that something has finished so it can move on.
        done();
      });
  });

  afterEach(function(done) {
    User.remove().exec();
    done();
  });
});
