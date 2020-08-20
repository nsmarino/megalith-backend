const variantsResolver = async ({ id }, __, { dataSources }) => {
  return dataSources.printfulAPI.getVariants(id)
}

module.exports = variantsResolver