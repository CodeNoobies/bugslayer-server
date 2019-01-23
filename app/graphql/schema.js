const { gql } = require('apollo-server');

const Query = gql`
  type Query {
    "Get a list of all the users registered"
    users: [User!]!
    "Get the data for an individual user based on its username"
    user(username: String!): User

    "Get a list of all the forum categories"
    forumCategories: [ForumCategory!]!
    "Get the data for an individual forum category based on its name"
    forumCategory(name: String!): ForumCategory

    "Get a list of all the forum threads"
    forumThreads: [ForumThread!]!
  }
`;

const Mutation = gql`
  type Mutation {
    "Create a new user"
    createUser(input: CreateUserInput): User
    "Create a new forum category"
    createForumCategory(input: CreateForumCategoryInput): ForumCategory
  }
`;

module.exports = {
  Query,
  Mutation,
};
