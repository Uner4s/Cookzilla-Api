import Ingredient from './Ingredient'
import Implement from './Implement'
import Recipe from './Recipe'
import Comment from './Comment'

export default {
  ...Comment,
  ...Recipe,
  ...Implement,
  ...Ingredient

}
