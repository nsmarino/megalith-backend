const { ApolloServer, gql } = require('apollo-server-express')
const express = require('express')

const PrintfulAPI = require('./datasources/printful') 

const typeDefs = gql`
  type Product {
      name: String!
  }

  type Stripe {
      price: String
  }

  type Query {
      allProducts: [Product]
      findProduct(id: ID!): Product
  }

  type OrderConfirmation {
    success: Boolean!
    message: String
    products: [Product]
  }

  type Mutation {
      orderProduct(id: ID!): OrderConfirmation
  }
`

const resolvers = {
    Query: {
      allProducts: (_, __, { dataSources }) =>
        dataSources.printfulAPI.getAllProducts(),
    },
    Mutation: {
      orderProduct: (root,args) => {
        const confirmation = {
        success: true,
        message: 'sample message',
        products: [{name: 'tshirt'}]
        }
        return confirmation
      }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      printfulAPI: new PrintfulAPI()
    }),
})

const app = express()
server.applyMiddleware({ app })

app.get('/', (req, res) => {
    res.send('how are you today')
})

app.listen({ port: 4000 }, () => {
    console.log(`express at port 4000, apollo at 4000${server.graphqlPath}`)
})