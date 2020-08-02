const chargeRouter = require('express').Router()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

chargeRouter.post('/', async (req, res, next) => {
    const { id } = req.body

    try {
      const { client_secret } = await stripe.paymentIntents.create({
          amount: 1499,
          currency: 'usd',
          payment_method: id,
          metadata: {integration_check: 'accept_a_payment'},
      })
      res.json({ client_secret })

    } catch (error) {
      console.log(error)
    }
})

module.exports = chargeRouter
