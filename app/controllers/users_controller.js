const knex = require('../db');

const LIST_OF_FIELDS = ['id', 'username', 'email', 'is_staff'];

const getAllUsers = async () => {
  const users = knex.from('users').select(...LIST_OF_FIELDS);
  return users;
};

const getUserByID = async id => {
  const user = knex('users')
    .select(...LIST_OF_FIELDS)
    .where({ id })
    .first();
  return user;
};

const getUserByUsername = async username => {
  const user = knex('users')
    .select(...LIST_OF_FIELDS)
    .where({ username })
    .first();
  return user;
};

const createUser = async user => {
  await knex('users').insert({
    username: user.username,
    email: user.email,
  });
};

module.exports = {
  getAllUsers,
  getUserByID,
  getUserByUsername,
  createUser,
};
