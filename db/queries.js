var knex = require('./knex.js');

function getShoppingCentres() {
  return knex('shopping_centres').select();
}


module.exports = {
  getShoppingCentres: getShoppingCentres
};
