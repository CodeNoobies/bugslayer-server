const knex = require('../db');

/**
 * List of fields we want to query every time
 */
const LIST_OF_FIELDS = [
  'id',
  'username',
  'email',
  'is_staff',
  'created_at',
  'updated_at',
];

/**
 * Returns a list of all the users in the database
 * @return {Array} Array of objects
 */
const getAllUsers = async () => {
  const users = knex('users').select(...LIST_OF_FIELDS);
  return users;
};

/**
 * Returns an user given an id
 * @param {number} id - ID used to find the user in the database
 * @return {object} User object
 */
const getUserByID = async id => {
  const user = knex('users')
    .select(...LIST_OF_FIELDS)
    .where({ id })
    .first();
  return user;
};

/**
 * Returns an user given an username
 * @param {string} username - Username used to find the user in the database
 * @return {object} User object
 */
const getUserByUsername = async username => {
  const user = knex('users')
    .select(...LIST_OF_FIELDS)
    .where({ username })
    .first();
  return user;
};

/**
 * Saves a new user into the database
 * @param {object} user - User object containing an username and an email
 */
const saveUser = async user => {
  await knex('users').insert({
    username: user.username,
    email: user.email,
  });
};

module.exports = {
  getAllUsers,
  getUserByID,
  getUserByUsername,
  saveUser,
};
