const { ApolloServer } = require('apollo-server-express')
const PrintfulAPI = require('./datasources/printful')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
})

module.exports = server