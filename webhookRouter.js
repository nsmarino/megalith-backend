const webhookRouter = require('express').Router()
const fetch = require('node-fetch');
const { PRINTFUL_API_KEY } = require('./utils/config')

webhookRouter.post('/', async (request, response) => {
  if (process.env.NODE_ENV === 'test') return
  
  try {
    const {
      data: { object: paymentIntent },
    } = request.body;

    const printfulOrderId = paymentIntent.description
    await fetch(`https://api.printful.com/orders/${printfulOrderId}/confirm`, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          // process.env.PRINTFUL_API_KEY
          PRINTFUL_API_KEY
        ).toString('base64')}`,
      },
      method: 'post',
    });

    response.json({received: true})

  } catch (err) {
    console.log('An error has occurred: ', err);

    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
})

module.exports = webhookRouter
