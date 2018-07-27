
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assets').del()
    .then(function () {
        return knex.table('shopping_centres').del();
    })
    .then(function () {
      // Inserts seed entries
      return knex('shopping_centres').insert([
        {id: 1, name: 'seed', address: '1 seed lane'}
      ]);
    }).then(function () {
        return knex('assets').insert([
            {id: 1, name: 'asset 1', physical_dimensions: '1920x168', location: 'beside blockbuster', shopping_centre: 1}
        ]);
    });
};
