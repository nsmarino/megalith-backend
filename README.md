# megalith (server)

E-commerce site for streetwear brand. Users should feel that they have entered into an ancient and mysterious zone. This repository contains all server code. Frontend code can be found [here](https://github.com/nsmarino/megalith/)

[Visit](https://www.megalith.supply/)

## Map

The Gatsby starter I based this project on used serverless functions hosted on Netlify, but I decided to build a separate server architecture to spend more quality time with Express and Apollo Server.

As such, this Node app is split into two parts: an Apollo graphql server at `/graphql` that handles mutations and queries for both Printful and Stripe APIs, and a simple Express endpoint at `/webhookRouter.js` that receives a webhook from Stripe once Payment Intents succeed and confirms Printful orders.

## CLI Commands

``` bash
# install dependencies
npm install

# dev server with hot reload at localhost:4000
npm run watch

# test with jest
npm test

# start production server
npm start
```
