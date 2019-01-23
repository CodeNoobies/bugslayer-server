const {
  getAllUsers,
  getUserByID,
  getUserByUsername,
} = require('./users_controller');
const {
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
} = require('./forum_categories_controller');

module.exports = {
  getAllUsers,
  getUserByID,
  getUserByUsername,
  getAllForumCategories,
  getForumCategoryByID,
  getForumCategoryByName,
};
