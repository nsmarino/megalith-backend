const express = require('express')
require('dotenv').config()
const cors = require('cors')

const chargeRouter = require('./chargeRouter')
const webhookRouter = require('./webhookRouter')
const apolloServer = require('./graphql')

const app = express()
app.use(cors())
app.use(express.json()) // body parser

app.use('/charge', chargeRouter)
app.use('/webhook', webhookRouter)
apolloServer.applyMiddleware({ app })

app.get('/', (req, res) => {
    res.send('Backend for megalith.supply')
})

app.listen({ port: 4000 }, () => {
    console.log(`express at port 4000, apollo at 4000${apolloServer.graphqlPath}, webhook at 4000/webhook`)
})