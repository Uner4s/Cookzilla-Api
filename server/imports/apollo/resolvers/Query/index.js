import User from './User'
import Recipe from './Recipe'
import Ingredient from './Ingredient'
import Implement from './Implement'

export default {
  ...Implement,
  ...Ingredient,
  ...Recipe,
  ...User
}
