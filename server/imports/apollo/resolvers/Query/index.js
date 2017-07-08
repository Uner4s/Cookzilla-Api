import User from './User'
import Recipe from './Recipe'
import Ingredient from './Ingredient'
import Implement from './Implement'
import Comment from './Comment'

export default {
  ...Comment,
  ...Implement,
  ...Ingredient,
  ...Recipe,
  ...User
}
