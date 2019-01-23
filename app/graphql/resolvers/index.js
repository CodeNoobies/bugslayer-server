const knex = require('../../db');
const {
  getAllUsers,
  getUserByID,
  getUserByUsername,
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
} = require('../../controllers');

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
      const users = await getAllUsers();
      return users;
    },

    /**
     * Returns the data for a specific user given an username
     * @param {object} _ - Object that contains the returned value from the
     * resolver on the parent field
     * @param {object} args - Arguments passed into the field in the query
     * @return {(object|null)} - User object or null if the user wasn't found
     */
    user: async (_, { username }) => {
      const user = await getUserByUsername(username);
      return user;
    },

    /**
     * Returns a list of all the existing forum categories
     * @return {Array} - List of forum categories
     */
    forumCategories: async () => {
      const forumCategories = await getAllForumCategories();
      return forumCategories;
    },

    /**
     * Returns a single forum category based on a given name
     * @param {object} _ - object that contains the returned value from the
     * resolver on the parent field
     * @param {object} args - Arguments passed into the field in the query
     * @return {(object|null)} - Forum category or null if the category wasn't found
     */
    forumCategory: async (_, { name }) => {
      const forumCategory = await getForumCategoryByName(name);
      return forumCategory;
    },

    /**
     * Returns a list of all the existing forum threads
     * @return {Array} - List of forum threads
     */
    forumThreads: async () => {
      const forumThread = await knex
        .select('id', 'title', 'user_id', 'forum_category_id')
        .from('forum_threads');
      return forumThread;
    },
  },

  /**
   * The main Mutation implementation
   */
  Mutation: {
    /**
     * Saves a new user into the database and returns the newly created user
     * @param {object} input - Object containing an username and an email
     * @return {object} - The newly created user
     */
    createUser: async (_, { input }) => {
      await knex('users').insert({
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
      await knex('forum_categories').insert({
        name: input.name,
      });

      const createdForumCategory = await knex('forum_categories')
        .select('id', 'name')
        .where({ name: input.name })
        .first();

      return createdForumCategory;
    },
  },

  /**
   * ForumThread resolvers
   */
  ForumThread: {
    /**
     * Get the user data of whoever created the forum thread
     * @param {object} forumThread - Object containing the user_id
     * @return {object} - The user data of the author of the forum thread
     */
    user: async ({ user_id }) => {
      const user = await getUserByID(user_id);
      return user;
    },

    /**
     * Get the category data of which the forum thread belongs to
     * @param {object} forumThread - Object containing the forum_category_id
     * @return {object} - The forum category data
     */
    forumCategory: async ({ forum_category_id }) => {
      const forumCategory = await getForumCategoryByID(forum_category_id);
      return forumCategory;
    },
  },
};

module.exports = resolvers;
