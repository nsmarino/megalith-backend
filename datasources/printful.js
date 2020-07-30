const { RESTDataSource } = require('apollo-datasource-rest')

class PrintfulAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL='https://api.printful.com/'
    }
}

export default PrintfulAPI