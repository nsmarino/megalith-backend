// Not sure if I have a use for this yet

const findProductResolver = async (_, { id }, { dataSources }) =>
  dataSources.printfulAPI.getProduct(id)

module.exports = findProductResolver