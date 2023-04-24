import users from './data/users.json'
import posts from './data/posts.json'

const resolvers = {
  users: () => users,
  posts: () => posts,
}

export default resolvers