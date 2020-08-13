const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Product {
      id: ID!
      name: String!
      variants: [Variant!]!
      thumbnail_url: String!
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
      estimateOrderCosts(input: EstimateOrderCostsInput!): OrderCosts
  }

  type OrderCosts {
    currency: String!
    shippingRate: Float!
    taxRate: Float!
    vatRate: Float!
  }

  input EstimateOrderCostsInput {
    recipient: CheckoutAddressInput!
    items: [CheckoutItemInput!]!
  }

  input CheckoutItemInput {
    sync_variant_id: ID!
    quantity: Int = 1
  }

  input CheckoutAddressInput {
    address1: String!
    address2: String
    city: String!
    country_code: String!
    name: String!
    email: String
    phone: String
    state_code: String
    zip: String!
  }
`

module.exports = typeDefs