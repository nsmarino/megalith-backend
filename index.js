const { ApolloServer, gql } = require('apollo-server')

import PrintfulAPI from './datasources/printful'


let persons = [
    {
      name: "Arto Hellas",
      phone: "040-123543",
      street: "Tapiolankatu 5 A",
      city: "Espoo",
      id: "3d594650-3436-11e9-bc57-8b80ba54c431"
    },
    {
      name: "Matti Luukkainen",
      phone: "040-432342",
      street: "Malminkaari 10 A",
      city: "Helsinki",
      id: '3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
      name: "Venla Ruuska",
      street: "Nallemäentie 22 C",
      city: "Helsinki",
      id: '3d599471-3436-11e9-bc57-8b80ba54c431'
    },
  ]
const typeDefs = gql`
  type Person {
      name: String!
      phone: String
      id: ID!
  }

  type Product {
      name: String!
      id: ID!
      price: Int!
      printful: Printful
      stripe: Stripe
  }

  type Printful {
      variant: String
  }

  type Stripe {
      price: String
  }

  type Query {
      allPersons: [Person!]!
      findPerson(name: String!): Person
      allProducts: [Product]
  }
`

const resolvers = {
    // EXAMPLE OF DEFAULT RESOLVER:
    // Person: {
    //   name: (root)=>root.name,
    // },
    Query: {
        allPersons: () => persons,
        findPerson: (root,args) =>
          persons.find(p=>p.name===args.name),
        
        allProducts: () => products
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then( ({ url }) => {
  console.log(`Server ready at ${url}`)
})