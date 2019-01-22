const knex = require('../../db');

const resolvers = {
  /**
   * The main Query implementation
   */
  Query: {
    /**
     * Returns a list of all the existing users
     * @return {Array} - List of users
     */
    users: async () => {
      const users = await knex
        .from('users')
        .select('id', 'username', 'email', 'is_staff');
      return users;
    },

    /**
     * Returns the data for a specific user given an username
     * @param {object} _ - Object that contains the returned value from the
     * resolver on the parent field
     * @param {object} args - Arguments passed into the field in the query
     * @return {(object|null)} - User object or null if the user wasn't found
     */
    user: async (_, args) => {
      const user = await knex('users')
        .select('id', 'username', 'email', 'is_staff')
        .where({ username: args.username })
        .first();
      return user;
    },

    /**
     * Returns a list of all the existing forum categories
     * @return {Array} - List of forum categories
     */
    forumCategories: async () => {
      const forumCategories = await knex
        .from('forum_categories')
        .select('id', 'name');
      return forumCategories;
    },

    /**
     * Returns a single forum category based on a given name
     * @param {object} _ - object that contains the returned value from the
     * resolver on the parent field
     * @param {object} args - Arguments passed into the field in the query
     * @return {(object|null)} - Forum category or null if the category wasn't found
     */
    forumCategory: async (_, args) => {
      const forumCategory = await knex('forum_categories')
        .select('id', 'name')
        .where({ name: args.name })
        .first();
      return forumCategory;
    },
  },
  Mutation: {
    /**
     * Saves a new user into the database and returns the newly created user
     * @param {object} input - Object containing an username and an email
     * @return {object} - The newly created user
     */
    createUser: async (_, { input }) => {
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

    /**
     * Saves a new forum category into the database and returns the newly created category
     * @param {object} input - Object containing a name
     * @return {object} - The newly created forum category
     */
    createForumCategory: async (_, { input }) => {
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
