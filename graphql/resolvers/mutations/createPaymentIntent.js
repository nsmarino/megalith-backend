const createPaymentIntent = async (_, { input }, { stripe }) => {

    try {
      const paymentIntent = await stripe.paymentIntents.create({
          amount: input.total,
          currency: 'usd',
          description: input.orderId,
          receipt_email: input.email,
      })

      return {
        id: paymentIntent.id,
        clientSecret: paymentIntent.client_secret,
        status: paymentIntent.status,
        description: paymentIntent.description,
      }

    } catch (err) {
        return err
    }
}

module.exports = createPaymentIntent;

