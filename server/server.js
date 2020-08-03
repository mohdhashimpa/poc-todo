const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const users = [
    {
        name: "Harry Potter",
        age: 21,
    },
    {
        name: 'John Doe',
        age: 22,
    },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { users: [User] }
  type User { name: String, id: ID }
`;

// The resolvers
const resolvers = {
    Query: { users: () => users },
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});