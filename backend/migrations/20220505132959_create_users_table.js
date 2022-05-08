/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
    table.increments('id');
    table.string('first_name', 100);
    table.string('last_name', 100);
    table.text('email');
    table.text('token');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};

//export NODE_ENV='production'