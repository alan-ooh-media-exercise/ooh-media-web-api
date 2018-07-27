process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');

var knex = require('../db/knex');



chai.use(chaiHttp);

describe('API Routes', function() {


beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

// Shopping Centre Crud

// Authenticated User
describe('GET /api/shopping_centres logged in', function() {
    it('should return all shopping centres', function(done) {
      chai.request(server)
      .get('/api/shoppingcentres')
      .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json; // jshint ignore:line
            res.body.should.be.a('array');
            res.body.length.should.equal(1);

        done();
      });
});


});

describe('POST /api/shopping_centres logged in', function() {

});

describe('PATCH /api/shopping_centres logged in', function() {
// TODO: Ensure AuditLog Kept
});

describe('DELETE /api/shopping_centres logged in', function() {
// TODO: Ensure AuditLog Kept
});

// Anonymous User
describe('GET /api/shopping_centres anonymous', function() {

});

describe('POST /api/shopping_centres anonymous', function() {

});

describe('PATCH /api/shopping_centres anonymous', function() {
// TODO: Ensure AuditLog Kept
});

describe('DELETE /api/shopping_centres anonymous', function() {
// TODO: Ensure AuditLog Kept
});

// Assets Crud

// Authenticated User
describe('GET /api/assets logged in', function() {

});

describe('POST /api/assets logged in', function() {

});

describe('PATCH /api/assets logged in', function() {
// TODO: Ensure AuditLog Kept

});

describe('DELETE /api/assets logged in', function() {
// TODO: Ensure AuditLog Kept
});

// Anonymous User
describe('GET /api/assets anonymous', function() {

});

describe('POST /api/assets anonymous', function() {

});

describe('PATCH /api/assets anonymous', function() {
// TODO: Ensure AuditLog Kept

});

describe('DELETE /api/assets anonymous', function() {
// TODO: Ensure AuditLog Kept
});

});