import User from './User'
import Recipe from './Recipe'
import Ingredient from './Ingredient'
import Tool from './Tool'
import Comment from './Comment'

export default {
  ...Comment,
  ...Tool,
  ...Ingredient,
  ...Recipe,
  ...User
}
