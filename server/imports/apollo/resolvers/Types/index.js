import User from './User'
import Recipe from './Recipe'
import Comment from './Comment'

export default {
  Comment,
  ...User,
  Recipe
}
