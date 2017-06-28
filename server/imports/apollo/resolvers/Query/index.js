import User from './User'
import Recipe from './Recipe'
import Ingredient from './Ingredient'

export default {
  ...Ingredient,
  ...Recipe,
  ...User
}
