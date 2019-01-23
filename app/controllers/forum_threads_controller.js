const knex = require('../db');

/**
 * List of fields we want to query every time
 */
const LIST_OF_FIELDS = ['id', 'title', 'user_id', 'forum_category_id'];

/**
 * Returns a list of all the forum threads in the database
 * @return {Array} Array of objects
 */
const getAllForumThreads = async () => {
  const forumThreads = knex('forum_threads').select(...LIST_OF_FIELDS);
  return forumThreads;
};

/**
 * Returns a forum thread given an id
 * @param {number} id - The id of the forum thread
 * @return {object} The forum thread object
 */
const getForumThreadByID = async id => {
  const forumThread = knex('forum_threads')
    .select(...LIST_OF_FIELDS)
    .where({ id })
    .first();
  return forumThread;
};

module.exports = {
  getAllForumThreads,
  getForumThreadByID,
};
