const express = require('express')
require('dotenv').config()
const cors = require('cors')
const middleware = require('./utils/middleware')

const webhookRouter = require('./webhookRouter') // The webhook fulfills a drafted Printful order once Stripe payment succeeds.
const apolloServer = require('./graphql')

// preware:
const app = express()
app.use(cors())
app.use(express.json()) // body parser

// routes:
app.use('/webhook', webhookRouter)
apolloServer.applyMiddleware({ app })

app.get('/', (req, res) => {
    res.send('Backend for megalith.supply')
})

// middleware:
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app