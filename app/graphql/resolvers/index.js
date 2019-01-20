const knex = require('../../db');

const resolvers = {
  Query: {
    /**
     * Returns an array of users
     */
    users: async () => {
      const users = await knex.from('users').select('id', 'username');
      return users;
    },
    /**
     * Returns a single user based on a given username
     */
    user: async (_, args) => {
      const user = await knex('users')
        .select('id', 'username')
        .where({ username: args.username })
        .first();
      return user;
    },
  },
};

module.exports = resolvers;
