const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Product {
      id: ID!
      name: String!
      variants: [Variant!]!
  }

  type Variant {
    id: ID!
    name: String!
    retail_price: String!
    sku: String!
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

module.exports = typeDefs