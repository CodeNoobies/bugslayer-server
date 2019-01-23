const {
  getAllUsers,
  getUserByID,
  getUserByUsername,
  createUser,
} = require('./users_controller');
const {
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
  createForumCategory,
} = require('./forum_categories_controller');
const { getAllForumThreads } = require('./forum_threads_controller');

module.exports = {
  getAllUsers,
  getUserByID,
  getUserByUsername,
  createUser,
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
  createForumCategory,
  getAllForumThreads,
};
