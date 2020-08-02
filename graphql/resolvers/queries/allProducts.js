const allProductsResolver = async (_, __, { dataSources }) =>
  dataSources.printfulAPI.getAllProducts()

module.exports = allProductsResolver