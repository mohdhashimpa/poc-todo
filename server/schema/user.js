const { gql } = require('apollo-server');
module.exports = gql`
    type Query {
        me: User
    }
    type Mutation {
        signup(email: String!, password: String!, name: String!): User
        login(email: String!, password: String!): Token
    }
    type User {
        id: ID!
        email: String!
        name: String
    }
    type Token {
        token: String
    }
`;