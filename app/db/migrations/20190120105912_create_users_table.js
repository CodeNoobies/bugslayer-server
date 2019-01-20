exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table
      .string('username')
      .notNullable()
      .unique()
      .index();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => knex.schema.dropTable('users');
