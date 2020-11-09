const { RESTDataSource } = require('apollo-datasource-rest')
const { PRINTFUL_API_KEY } = require('../../utils/config')

class PrintfulAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL='https://api.printful.com/'
    }

    willSendRequest(request) {
        request.headers.set(
          'Authorization',
          // `Basic ${Buffer.from(process.env.PRINTFUL_API_KEY).toString('base64')}`
          `Basic ${Buffer.from(PRINTFUL_API_KEY).toString('base64')}`
        );
      }

    async getAllProducts() {
      const response = await this.get('store/products')
      const products = response.result
      return products
    }

    async getVariants(id) {
      const response = await this.get(`store/products/${id}`)
      const variants = response.result.sync_variants.map(variant => {
        return {
          id: variant.id,
          name: variant.name,
          retail_price: variant.retail_price,
          sku: variant.sku,
        }
      })
      return variants
    }

    async createOrder({ items, recipient }) {
      try {
        const { result: data } = await this.post(`orders`, {
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