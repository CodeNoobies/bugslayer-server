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

module.exports = resolvers;
