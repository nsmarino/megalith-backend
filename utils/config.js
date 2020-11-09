require('dotenv').config()

let PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY
let STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
    STRIPE_SECRET_KEY = process.env.STRIPE_TEST_SECRET_KEY
  }

if (process.env.NODE_ENV === 'test') {
  PRINTFUL_API_KEY = process.env.PRINTFUL_TEST_API_KEY
}



module.exports = {
  STRIPE_SECRET_KEY,
  PRINTFUL_API_KEY,
}