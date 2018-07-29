process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

const knex = require('../db/knex');

const sinon = require('sinon');

const auth = require('../auth/_helpers')


chai.use(chaiHttp);

var agent;

// Shopping Centre Crud


// Authenticated User
describe('GET/POST /api/shopping_centres logged in', function() {

   let sandbox;

   before(function () {
        sandbox = sinon.createSandbox();
        sandbox.stub(auth, 'loginRequired').callsFake(function(req, res, next) {return next();})
        const app = require('../app');
        agent = chai.request.agent(app);
   });

   after(() => sandbox.restore())

    beforeEach(() => knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
    );

    afterEach(() => knex.migrate.rollback());

    it('should return all shopping centres', function(done) {
      agent
      .get('/api/shoppingcentres')
      .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body.length.should.equal(1);
            res.body[0].should.have.property('name');
            res.body[0].name.should.equal('seed');
            res.body[0].should.have.property('address');
            res.body[0].address.should.equal('1 seed lane');
        done();
      });
});

    it('should create a new shopping centre instance', function(done) {
        agent
        .post('/api/shoppingcentres')
        .send({
            name: 'shopping centre 2',
            address: '2 seed lane'
        })
        .end(function(err, res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('id');
            res.body.id.should.equal(2);
            res.body.should.have.property('name');
            res.body.name.should.equal('shopping centre 2');
            res.body.should.have.property('address');
            res.body.address.should.equal('2 seed lane');
        done();
      }
        );
    });

});

describe('GET/PATCH/DELETE /api/shopping_centres/:id logged in', function() {
    let sandbox;

   before(function () {
        sandbox = sinon.createSandbox();
        sandbox.stub(auth, 'loginRequired').callsFake((req, res, next) => next())
        const app = require('../app');
        agent = chai.request.agent(app);
   });

   after(() => sandbox.restore())

    beforeEach(() => knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
    );

    afterEach(() => knex.migrate.rollback());

    it('should return a single shopping centre', function(done) {
      agent
      .get('/api/shoppingcentres/1')
      .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.name.should.equal('seed');
            res.body.should.have.property('address');
            res.body.address.should.equal('1 seed lane');
        done();
      });
});

    it('PATCH /api/shopping_centres/:id logged in', function(done) {
        // TODO: Ensure AuditLog Kept
        agent
            .patch('/api/shoppingcentres/1')
            .send({
                name: 'seed updated'
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.equal('seed updated');
                res.body.should.have.property('address');
                res.body.address.should.equal('1 seed lane');
                done();
          });
    });

    it('DELETE /api/shopping_centres/:id logged in', function() {
    // TODO: Ensure AuditLog Kept
        agent
            .delete('/api/shoppingcentres/2')
            .then(function(err, res) {
                res.should.have.status(204);
                done();
            });
    });


});

// Assets Crud
// Authenticated User
describe('GET/POST /api/assets logged in', function() {

    let sandbox;

   before(function () {
        sandbox = sinon.createSandbox();
        sandbox.stub(auth, 'loginRequired').callsFake((req, res, next) => next())
        const app = require('../app');
        agent = chai.request.agent(app);
   });

   after(() => sandbox.restore())

    beforeEach(() => knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
    );

    afterEach(() => knex.migrate.rollback());


    it('should return all assets', function(done) {
      agent
      .get('/api/assets')
      .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body.length.should.equal(2);
            res.body[0].should.have.property('name');
            res.body[0].name.should.equal('asset 1');
            res.body[0].should.have.property('physical_dimensions');
            res.body[0].physical_dimensions.should.equal('1920x168');
            res.body[0].should.have.property('location');
            res.body[0].location.should.equal('beside blockbuster');
            res.body[0].should.have.property('shopping_centre');
            res.body[0].shopping_centre.should.equal(1);
        done();
      });
});

    it('should create a new asset instance', function(done) {
        agent
        .post('/api/assets')
        .send({
            name: 'asset 3',
            physical_dimensions: '1920x168',
            location: 'beside blockbuster',
            shopping_centre: 1
         })
        .end(function(err, res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('id');
            res.body.id.should.equal(3);
            res.body.should.have.property('name');
            res.body.name.should.equal('asset 3');
            res.body.should.have.property('physical_dimensions');
            res.body.physical_dimensions.should.equal('1920x168');
            res.body.should.have.property('location');
            res.body.location.should.equal('beside blockbuster');
            res.body.should.have.property('shopping_centre');
            res.body.shopping_centre.should.equal(1);
        done();
      }
        );
    });

});

describe('GET/PATCH/DELETE /api/assets/:id logged in', function() {

   let sandbox;

   before(function () {
        sandbox = sinon.createSandbox();
        sandbox.stub(auth, 'loginRequired').callsFake((req, res, next) => next())
        const app = require('../app');
        agent = chai.request.agent(app);
   });

   after(() => sandbox.restore())

    beforeEach(() => knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
    );

    afterEach(() => knex.migrate.rollback());

    it('should return a single asset', function(done) {
      agent
      .get('/api/assets/1')
      .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.id.should.equal(1);
            res.body.should.have.property('name');
            res.body.name.should.equal('asset 1');
            res.body.should.have.property('physical_dimensions');
            res.body.physical_dimensions.should.equal('1920x168');
            res.body.should.have.property('location');
            res.body.location.should.equal('beside blockbuster');
            res.body.should.have.property('shopping_centre');
            res.body.shopping_centre.should.equal(1);
        done();
      });
    });

    it('PATCH /api/assets/:id logged in', function(done) {
        // TODO: Ensure AuditLog Kept
        agent
            .patch('/api/assets/1')
            .send({
                name: 'asset 1 updated'
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.equal('asset 1 updated');
                done();
          });
    });

    it('DELETE /api/assets/:id logged in', function() {
    // TODO: Ensure AuditLog Kept
           agent
            .delete('/api/assets/2')
            .end(function(err, res) {
                res.should.have.status(204);
                done();
          });
    });


});