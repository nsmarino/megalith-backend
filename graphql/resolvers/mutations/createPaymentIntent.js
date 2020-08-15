const createPaymentIntent = async (_, { input }, { stripe }) => {

    try {
      const { 
        id, 
        client_secret: clientSecret, 
        status, 
      } = await stripe.paymentIntents.create({
          amount: input.total,
          currency: 'usd',
          description: input.description,
          metadata: input.metadata,
          receipt_email: input.email,
      })

      return { id, clientSecret, status }
    } catch (err) {
        return err
    }
}

module.exports = createPaymentIntent;

