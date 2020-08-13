const allProducts = require('./queries/allProducts')
const findProduct = require('./queries/findProduct')
const variants = require('./variantsResolver')

const estimateOrderCosts = require('./mutations/estimateOrderCosts')

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
    }
}

module.exports = resolvers;
