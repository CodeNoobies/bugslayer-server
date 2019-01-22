const { gql } = require('apollo-server');

const typeDef = gql`
  "An user of the application"
  type User {
    id: Int!
    username: String!
    email: String!
    is_staff: Boolean!
  }

  "Input required to create a new user"
  input CreateUserInput {
    username: String!
    email: String!
  }

  "Input required to update an existing user"
  input UpdateUserInput {
    username: String!
    email: String!
  }
`;

module.exports = typeDef;
