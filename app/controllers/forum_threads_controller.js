const knex = require('../db');

const LIST_OF_FIELDS = ['id', 'title', 'user_id', 'forum_category_id'];

const getAllForumThreads = async () => {
  const forumThreads = knex.select(...LIST_OF_FIELDS).from('forum_threads');
  return forumThreads;
};

module.exports = {
  getAllForumThreads,
};
