const variantsResolver = async ({ id }, __, { dataSources }) => {
  console.log(`resolving variants using`, id)
  return dataSources.printfulAPI.getVariants(id)
}

module.exports = variantsResolver