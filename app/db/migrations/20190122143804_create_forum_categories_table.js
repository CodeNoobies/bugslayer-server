exports.up = (knex, Promise) => {
  return knex.schema.createTable('forum_categories', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table
      .string('name')
      .notNullable()
      .unique()
      .index();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('forum_categories');
};
