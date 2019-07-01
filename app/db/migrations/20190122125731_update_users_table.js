exports.up = (knex, Promise) => {
  return knex.schema.table('users', table => {
    table
      .string('email')
      .notNullable()
      .unique()
      .index();
    table.boolean('is_staff').defaultTo(false);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.table('users', table => {
    table.dropColumn('email');
    table.dropColumn('is_staff');
  });
};
