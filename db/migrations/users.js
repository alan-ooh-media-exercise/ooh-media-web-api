
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('username').notNullable().unique();
    // This will be hashed before inserting
    table.string('password').notNullable();
 })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
