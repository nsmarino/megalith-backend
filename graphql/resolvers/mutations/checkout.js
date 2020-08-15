const checkout = async (_, { input }, { dataSources}) => {
    console.log('processing order on apollo server')
    try {

      const data = await dataSources.printfulAPI.createOrder(input)
      console.log(data)

      return { printfulOrderId: data.id, orderTotal: data.costs.total }

    } catch (err) {
        return err
    }
}

module.exports = checkout