/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('posts', table =>{
    table.increments('id');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
    table.string('title', 100);
    table.text('content');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('posts', table =>{
    table.dropForeign('user_id');
  })
  .then(() => knex.schema.dropTableIfExists('posts'))
};
