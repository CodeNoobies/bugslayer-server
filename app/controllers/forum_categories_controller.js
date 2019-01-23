const knex = require('../db');

/**
 * List of fields we want to query every time
 */
const LIST_OF_FIELDS = ['id', 'name'];

/**
 * Returns a list of all the forum categories in the database
 * @return {Array} Array of objects
 */
const getAllForumCategories = async () => {
  const forumCategories = knex('forum_categories').select(...LIST_OF_FIELDS);
  return forumCategories;
};

/**
 * Returns a forum category given an id
 * @param {int} id - ID used to find the forum category in the database
 * @return {object} Forum category object
 */
const getForumCategoryByID = async id => {
  const forumCategory = knex('forum_categories')
    .select(...LIST_OF_FIELDS)
    .where({ id })
    .first();
  return forumCategory;
};

/**
 * Returns a forum category given a name
 * @param {string} name - Name used to find the forum category in the database
 * @return {object} Forum category object
 */
const getForumCategoryByName = async name => {
  const forumCategory = knex('forum_categories')
    .select(...LIST_OF_FIELDS)
    .where({ name })
    .first();
  return forumCategory;
};

/**
 * Saves a new forum category into the database
 * @param {object} forumCategory - Forum Category object containing a name
 */
const saveForumCategory = async forumCategory => {
  await knex('forum_categories').insert({
    name: forumCategory.name,
  });
};

module.exports = {
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
  saveForumCategory,
};
