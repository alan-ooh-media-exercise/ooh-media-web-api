
exports.up = function(knex, Promise) {
 return knex.schema.createTable('shopping_centres', function(table){
    table.increments('id');
    table.string('name').notNullable().unique();
    table.string('address').notNullable();
 }).createTable('assets', function(table){
    table.increments('id');
    table.string('name').notNullable().unique();
    table.string('physical_dimensions').notNullable();
    table.string('location').notNullable();
    table.boolean('status').defaultTo(true);
    table.integer('shopping_centre').unsigned().notNullable();
    table.foreign('shopping_centre').references('id').inTable('shopping_centres')
 });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assets').dropTable('shopping_centres');
};
