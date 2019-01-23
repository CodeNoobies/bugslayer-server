const { gql } = require('apollo-server');

const typeDefs = gql`
  "Forum Thread, to start a discussion"
  type ForumThread {
    id: Int!
    title: String!
    user: User!
    forumCategory: ForumCategory!
  }
`;

module.exports = typeDefs;
