const { RESTDataSource } = require('apollo-datasource-rest')

class PrintfulAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL='https://api.printful.com/'
    }

    willSendRequest(request) {
        request.headers.set(
          'Authorization',
          `Basic ${Buffer.from(process.env.PRINTFUL_API_KEY).toString('base64')}`
        );
      }

    async getAllProducts() {
      const response = await this.get('store/products')
      console.log('this is the response',response)
      const products = response.result
      return products
    }

    // async getProduct(id) {
    //   const response = await this.get(`store/products/${id}`)
    //   // console.log(response.result.sync_variants)
    //   return {name: response.result.sync_product.name}
    // }

    async getVariants(id) {
      const response = await this.get(`store/products/${id}`)
      // console.log(response.result.sync_variants)
      const variants = response.result.sync_variants.map(variant => {
        return {
          id: variant.id,
          name: variant.name,
          retail_price: variant.retail_price,
          sku: variant.sku,
        }
      })
      console.log(variants)
      return variants
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