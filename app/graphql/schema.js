const Query = `
  type Query {
    users: [User!]!
    user(username: String!): User!
  }
`;

module.exports = Query;
