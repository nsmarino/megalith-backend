const { ApolloServer } = require('apollo-server-express')
const PrintfulAPI = require('./datasources/printful')
const { STRIPE_SECRET_KEY } = require('../utils/config')

const stripe = require('stripe')(STRIPE_SECRET_KEY);

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      printfulAPI: new PrintfulAPI()
    }),
    context: () => ({
      stripe,
    }),
    introspection: true,
})

module.exports = server