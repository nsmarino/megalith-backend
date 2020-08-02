const webhookRouter = require('express').Router()


// WILL BE USED TO CONFIRM (DRAFTED) PRINTFUL ORDER; ALSO EVENTUAL POSTMARK INTEGRATION FOR EMAILS.
webhookRouter.post('/', (request, response) => {
    let event;
  
    try {
      event = JSON.parse(request.body);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    // Handle the event
    switch (event.type) {
      case '  ':
        const paymentIntent = event.data.object;
        console.log(event.data)
  
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      // ... handle other event types
      default:
        // Unexpected event type
        return response.status(400).end();
    }
  
    // Return a response to acknowledge receipt of the event
    response.json({received: true});
  });

module.exports = webhookRouter
