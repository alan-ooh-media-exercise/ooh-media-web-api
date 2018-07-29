
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('username').notNullable().unique();
    // This will be hashed before inserting, should not manually insert into db
    table.string('password').notNullable();
 }).createTable('auditlog', function(table){
    table.increments('id');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
    table.string('model').notNullable();
    table.string('method').notNullable();
    table.timestamps(true, true);
    table.integer('model_id');
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('auditlog').dropTable('users');
};
