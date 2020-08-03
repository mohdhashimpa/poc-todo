const { ApolloServer } = require('apollo-server');

const schema = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});