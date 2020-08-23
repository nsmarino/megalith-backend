const express = require('express')
require('dotenv').config()
const cors = require('cors')

const webhookRouter = require('./webhookRouter') // The webhook should CONFIRM a drafted Printful order once Stripe payment succeeds.
const apolloServer = require('./graphql')

const app = express()
app.use(cors())
app.use(express.json()) // body parser

app.use('/webhook', webhookRouter)
apolloServer.applyMiddleware({ app })

app.get('/', (req, res) => {
    res.send('Backend for megalith.supply')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})