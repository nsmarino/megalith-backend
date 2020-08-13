const estimateOrderCosts = async (_, { input }, { dataSources}) => {
    try {

      const { costs } = await dataSources.printfulAPI.estimateOrderCosts(input)

      const estimatedCosts = {
          currency: costs.currency,
          shippingRate: costs.shipping,
          taxRate: costs.tax,
          vatRate: costs.vat
      }
      return estimatedCosts

    } catch (err) {
        return err
    }
}

module.exports = estimateOrderCosts