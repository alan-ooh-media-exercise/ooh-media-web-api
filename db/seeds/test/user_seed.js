const queries = require('../../queries');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return queries.createUser({username: 'user1', password: 'password1'});
    });
};
