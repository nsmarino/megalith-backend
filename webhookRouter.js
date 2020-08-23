const webhookRouter = require('express').Router()
const fetch = require('node-fetch');

webhookRouter.post('/', async (request, response) => {
  try {
    const {
      data: { object: paymentIntent },
    } = request.body;

    const printfulOrderId = paymentIntent.description
    console.log('This is what will be sent as id: ', printfulOrderId)
    const printfulConfirmation = await fetch(`https://api.printful.com/orders/${printfulOrderId}/confirm`, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.PRINTFUL_API_KEY
        ).toString('base64')}`,
      },
      method: 'post',
    });
    console.log('response from printful: ', printfulConfirmation.body)

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
