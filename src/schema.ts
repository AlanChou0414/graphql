import { buildSchema } from "graphql"

const typeDefs = buildSchema(`#graphql
  type User {
    id:ID
    name:String
    age:Int
    email:String
    sex:String
  }
  type Post {
    id:ID
    title:String
    author:String
    content:String
  }
  type Query {
   getUsers:[User]
   getPosts:[Post] 
  }
`)

export default typeDefs