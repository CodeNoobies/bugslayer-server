const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date
`;

module.exports = typeDefs;
