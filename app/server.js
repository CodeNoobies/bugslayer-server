require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const { User, ForumCategory, ForumThread } = require('./graphql/typedefs');
const { Query, Mutation } = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const port = process.env.PORT || 6000;

const server = new ApolloServer({
  typeDefs: [Query, Mutation, User, ForumCategory, ForumThread],
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
