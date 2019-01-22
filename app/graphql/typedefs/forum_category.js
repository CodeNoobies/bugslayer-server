const { gql } = require('apollo-server');

const typeDefs = gql`
  "Forum Category, to group sets of posts"
  type ForumCategory {
    id: Int!
    name: String!
  }

  "Input required to create a new forum category"
  input CreateForumCategoryInput {
    "Name of the category"
    name: String!
  }
`;

module.exports = typeDefs;
