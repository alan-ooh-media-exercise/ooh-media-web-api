process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

const knex = require('../db/knex');

const sinon = require('sinon');

const auth = require('../auth/_helpers');


chai.use(chaiHttp);

var agent;

// User Endpoints
describe('GET/users/ logged in', function() {

   let sandbox;

   before(function () {
        sandbox = sinon.createSandbox();
        sandbox.stub(auth, 'loginRequired').callsFake(function(req, res, next) {return next();});
        const app = require('../app');
        agent = chai.request.agent(app);
   });

   after(() => sandbox.restore());

    beforeEach(() => knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
    );

    afterEach(() => knex.migrate.rollback());

    it('should return all users', function(done) {
      agent
      .get('/users/')
      .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body.length.should.equal(1);
            res.body[0].should.have.property('username');
            res.body[0].should.have.property('password');
        done();
      });
    });

    it('should return a single', function(done) {
      agent
      .get('/users/1')
      .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('username');
            res.body.should.have.property('password');
        done();
      });
    });

});