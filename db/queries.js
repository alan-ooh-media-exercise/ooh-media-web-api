const bcrypt = require('bcryptjs');
const knex = require('./knex.js');


// START Shopping Centre Queries

function getShoppingCentres() {
  return knex('shopping_centres').select();
}

function getShoppingCentre(id) {
  return getShoppingCentres().where('id', parseInt(id)).first();
}

function updateShoppingCentre(id, data) {
  return getShoppingCentres().where('id', parseInt(id)).update(data, 'id');
}

function addShoppingCentre(data) {
    return getShoppingCentres().insert(data, 'id');
}

function deleteShoppingCentre(id) {
  return getShoppingCentres().where('id', parseInt(id)).del();
}

// END Shopping Centre Queries

// START Asset Queries

function getAssets() {
  return knex('assets').select();
}

function getAsset(id) {
  return getAssets().where('id', parseInt(id)).first();
}

function updateAsset(id, data) {
  return getAssets().where('id', parseInt(id)).update(data, 'id');
}

function addAsset(data) {
    return getAssets().insert(data, 'id');
}

function deleteAsset(id) {
  return getAssets().where('id', parseInt(id)).del();
}

// END Asset Queries

// User Queries
function getUsers() {
  return knex('users').select();
}

function getUser(id) {
  return getUsers().where('id', parseInt(id)).first();
}

function createUser (data) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(data.password, salt);
  return knex('users')
  .insert({
    username: data.username,
    password: hash
  })
  .returning('*');
}

// End User Queries

// Start AuditLog Queries

function getAuditLogs() {
    return knex('auditlog').select();
}

function addAuditLog(data) {
    // Returns id for the logged instance of the model
    return getAuditLogs().insert(data).returning('model_id');
}

// End AuditLog Queries

module.exports = {
  getShoppingCentres,
  getShoppingCentre,
  addShoppingCentre,
  updateShoppingCentre,
  deleteShoppingCentre,
  getAssets,
  getAsset,
  addAsset,
  updateAsset,
  deleteAsset,
  getUsers,
  getUser,
  createUser,
  getAuditLogs,
  addAuditLog
};
