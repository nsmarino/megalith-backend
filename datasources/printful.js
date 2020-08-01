const { RESTDataSource } = require('apollo-datasource-rest')

const PRINTFUL_API_KEY='xhhc3mad-tp15-y3h4:auo3-mpawbmb7vf80'

class PrintfulAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL='https://api.printful.com/'
    }

    willSendRequest(request) {
        request.headers.set(
          'Authorization',
          `Basic ${Buffer.from(PRINTFUL_API_KEY).toString('base64')}`
        );
      }

    async getAllProducts() {
      const response = await this.get('store/products')
      console.log('this is the response',response)
      const products = response.result.map(item => {return {name: item.name}})
      return products
    }

    async createOrder({ external_id, items, recipient }) {
      try {
        const { result: data } = await this.post(`orders`, {
          external_id,
          items,
          recipient,
        });
  
        return data;
      } catch (err) {
        console.error(err);
      }
    }

    async estimateOrderCosts({ items, recipient }) {
      try {
        const { result: data } = await this.post(`orders/estimate-costs`, {
          items,
          recipient,
        });
  
        return data;
      } catch (err) {
        console.error(err);
      }
    }
}

module.exports = PrintfulAPI