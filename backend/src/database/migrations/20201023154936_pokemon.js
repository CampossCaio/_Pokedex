exports.up = function(knex) {
  return knex.schema.createTable('pokemons', (table) => {
    table.increments('id');
    table.string('name', 50).notNullable();
    table.string('avatar_url', 250).notNullable();
    table.integer('attack').notNullable();
    table.integer('defense').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pokemons');
};
