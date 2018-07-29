var knex = require('./knex.js');


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


module.exports = {
  getShoppingCentres: getShoppingCentres,
  getShoppingCentre: getShoppingCentre,
  addShoppingCentre: addShoppingCentre,
  updateShoppingCentre: updateShoppingCentre,
  deleteShoppingCentre: deleteShoppingCentre,
  getAssets: getAssets,
  getAsset: getAsset,
  addAsset: addAsset,
  updateAsset: updateAsset,
  deleteAsset: deleteAsset,
};
