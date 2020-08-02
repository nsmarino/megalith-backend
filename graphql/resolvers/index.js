const allProducts = require('./queries/allProducts')
const findProduct = require('./queries/findProduct')
const variants = require('./variantsResolver')

const resolvers = {
    Query: {
      allProducts,
      findProduct,
    },
    Product: {
      variants,
    },
    Mutation: {
      orderProduct: (root,args) => {
        // FAKE FILLER CODE, BEWARE.
        const confirmation = {
        success: true,
        message: 'sample message',
        products: [{name: 'tshirt'}]
        }
        return confirmation
      }
    }
}

module.exports = resolvers;
