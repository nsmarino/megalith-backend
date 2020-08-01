const { RESTDataSource } = require('apollo-datasource-rest')


class StripeAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL='https://api.stripe.com'
    }

    // willSendRequest(request) {
    //     request.headers.set(
    //       'Authorization',
    //       `Basic ${Buffer.from(API_KEY).toString('base64')}`
    //     );
    //   }

    // async getAllPrices() {
    // }

}

module.exports = StripeAPI