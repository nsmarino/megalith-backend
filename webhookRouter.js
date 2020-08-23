const webhookRouter = require('express').Router()
const fetch = require('node-fetch');

webhookRouter.post('/', async (request, response) => {
  try {
    const {
      data: { object: paymentIntent },
    } = request.body;
    console.log(request.body)
    const printfulOrderId = paymentIntent.description
    console.log(printfulOrderId)
    await fetch(`https://api.printful.com/orders/${printfulOrderId}/confirm`, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.PRINTFUL_API_KEY
        ).toString('base64')}`,
      },
      method: 'post',
    });

    response.json({received: true})

  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
})

module.exports = webhookRouter
