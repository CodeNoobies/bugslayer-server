const knex = require('../../db');

const resolvers = {
  Query: {
    /**
     * Returns an array of users
     */
    users: async () => {
      const users = await knex
        .from('users')
        .select('id', 'username', 'email', 'is_staff');
      return users;
    },
    /**
     * Returns a single user based on a given username
     */
    user: async (_, args) => {
      const user = await knex('users')
        .select('id', 'username', 'email', 'is_staff')
        .where({ username: args.username })
        .first();
      return user;
    },

    forumCategories: async () => {
      const forumCategories = await knex
        .from('forum_categories')
        .select('id', 'name');
      return forumCategories;
    },

    forumCategory: async (_, args) => {
      const forumCategory = await knex('forum_categories')
        .select('id', 'name')
        .where({ name: args.name })
        .first();
      return forumCategory;
    },
  },
  Mutation: {
    createUser: async (obj, { input }) => {
      const user = await knex('users').insert({
        username: input.username,
        email: input.email,
      });

      const createdUser = await knex('users')
        .select('id', 'username', 'email', 'is_staff')
        .where({ username: input.username })
        .first();

      return createdUser;
    },

    createForumCategory: async (obj, { input }) => {
      const forumCategory = await knex('forum_categories').insert({
        name: input.name,
      });

      const createdForumCategory = await knex('forum_categories')
        .select('id', 'name')
        .where({ name: input.name })
        .first();

      return createdForumCategory;
    },
  },
};

module.exports = resolvers;
