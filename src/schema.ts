import { buildSchema } from "graphql"

const typeDefs = buildSchema(`#graphql

  # User
  type User {
    id:ID
    name:String!
    age:Int
    email:String!
    sex:String
  }

  # Post
  type Post {
    id:ID
    title:String
    author:String
    content:String
  }

  # Query
  type Query {
   users:[User]
   posts:[Post] 
  }
`)

export default typeDefs