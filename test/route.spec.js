process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');



chai.use(chaiHttp);

// Shopping Centre Crud

// Authenticated User
describe('GET /api/shopping_centres logged in', function() {

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