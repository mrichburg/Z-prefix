/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Derek', last_name: 'Jackson', email: 'djackson@fake.com', token: '1234567890qwertyuiop'}
  ]);
};
