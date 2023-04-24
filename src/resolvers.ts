import users from './data/users.json'
import posts from './data/posts.json'

const resolvers = {
  getUsers: () => users,
  getPosts: () => posts,
}

export default resolvers