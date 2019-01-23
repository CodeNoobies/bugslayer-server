# BugSlayer API

This is the API powering both our game and website. It exposes a GraphQL API endpoint you can access at [http://localhost:7000/graphql](http://localhost:7000/graphql).

You must have MySQL installed as this project makes use of it. You can plug in PostgreSQL; if you desire to do so, just remove the MySQL package, install `pg` and update the [knexfile.js](knexfile.js) to use the package instead of `mysql`.

## Setup

1. Clone the repository.
2. Install the required dependencies `$ npm install`.
3. Update the database configuration on [knexfile.js](knexfile.js).
4. Run the database migrations `$ knex migrate:latest`.
5. Start the server `$ npm start`.
