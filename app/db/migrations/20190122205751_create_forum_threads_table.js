exports.up = (knex, Promise) => {
  return knex.schema.createTable('forum_threads', table => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table.string('title').notNullable();
    table
      .integer('forum_category_id')
      .references('forum_categories.id')
      .unsigned()
      .notNullable();
    table
      .integer('user_id')
      .references('users.id')
      .unsigned()
      .notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('forum_threads');
};
