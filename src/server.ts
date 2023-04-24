import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import typeDefs from './schema'
import resolvers from './resolvers'

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
    graphiql: true
  })
)

app.listen(4000, () => console.log(`🚀Running a GraphQL API server at http://localhost:4000/graphql`))