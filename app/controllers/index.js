const {
  getAllUsers,
  getUserByID,
  getUserByUsername,
  saveUser,
} = require('./users_controller');
const {
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
  saveForumCategory,
} = require('./forum_categories_controller');
const { getAllForumThreads } = require('./forum_threads_controller');

module.exports = {
  getAllUsers,
  getUserByID,
  getUserByUsername,
  saveUser,
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
  saveForumCategory,
  getAllForumThreads,
};
