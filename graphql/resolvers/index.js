const allProducts = require('./queries/allProducts')
const findProduct = require('./queries/findProduct')
const variants = require('./variantsResolver')

const estimateOrderCosts = require('./mutations/estimateOrderCosts')
const checkout = require('./mutations/checkout')
const createPaymentIntent = require('./mutations/createPaymentIntent')

const resolvers = {
    Query: {
      allProducts,
      findProduct,
    },
    Product: {
      variants,
    },
    Mutation: {
      estimateOrderCosts,
      checkout,
      createPaymentIntent,
    }
}

module.exports = resolvers;
