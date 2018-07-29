process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

const sinon = require('sinon');

const knex = require('../db/knex');

const expect = chai.expect;

chai.use(chaiHttp);

const auth = require('../auth/_helpers')


describe('Test Auth Endpoint logout', () => {


   let sandbox, agent, app;

   before(function () {
        sandbox = sinon.createSandbox();
        // Add your stubs here
        sandbox.stub(auth, 'loginRequired').callsFake(function(req, res, next) {return next();})
        // required here so we can stub methods present in app.js, such as loginRequired
        app = require('../app');
        agent = chai.request.agent(app);
   });

   after(() => sandbox.restore())

    // Handle Authentication here
    beforeEach(() => knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
    );

    afterEach(() => {
        return knex.migrate.rollback()
    });

     it('should logout a user', (done) => {
        agent.get('/auth/logout')
        .end((err, res) => {
          should.not.exist(err);
          res.redirects.length.should.eql(0);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.eql('success');
          done();
        });
  });

});
