require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');

const port = process.env.PORT || 6000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
app.use(cors());

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
