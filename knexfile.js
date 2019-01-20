// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'bugslayer_dev',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './app/db/migrations',
  },
  debug: true,
};
