require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql');

const port = process.env.PORT || 6000;

const resolvers = {
  Query: {
    users() {
      const users = [
        {
          id: 1,
          name: 'Oxy',
        },
        {
          id: 2,
          name: 'Pepe',
        },
      ];
      return users;
    },
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
