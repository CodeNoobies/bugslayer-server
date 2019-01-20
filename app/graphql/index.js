const { gql } = require('apollo-server');

const typeDefs = gql`
  "An user of the system"
  type User {
    "ID that identifies the user in the system"
    id: Int
    name: String
  }

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
