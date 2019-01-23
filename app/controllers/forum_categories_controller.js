const knex = require('../db');

const LIST_OF_FIELDS = ['id', 'name'];

const getAllForumCategories = async () => {
  const forumCategories = knex
    .from('forum_categories')
    .select(...LIST_OF_FIELDS);
  return forumCategories;
};

const getForumCategoryByID = async id => {
  const forumCategory = knex('forum_categories')
    .select(...LIST_OF_FIELDS)
    .where({ id })
    .first();
  return forumCategory;
};

const getForumCategoryByName = async name => {
  const forumCategory = knex('forum_categories')
    .select(...LIST_OF_FIELDS)
    .where({ name })
    .first();
  return forumCategory;
};

module.exports = {
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
};
